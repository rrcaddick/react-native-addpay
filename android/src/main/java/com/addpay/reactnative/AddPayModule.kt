package com.addpay.reactnative

import android.app.Activity
import android.content.Intent
import android.content.pm.PackageManager
import com.facebook.react.bridge.*
import com.facebook.react.module.annotations.ReactModule
import org.json.JSONObject

@ReactModule(name = AddPayModule.NAME)
class AddPayModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext), ActivityEventListener {
    companion object {
        const val NAME = "AddPayModule"
        const val REQUEST_CODE = 1
        const val ADDPAY_PACKAGE = "com.wiseasy.cashier"
        const val ADDPAY_ACTION = "com.wiseasy.transaction.call"
    }

    private var currentPromise: Promise? = null

    init {
        reactContext.addActivityEventListener(this)
    }

    override fun getName(): String = NAME

    @ReactMethod
    fun sale(request: ReadableMap, promise: Promise) {
        launchAddPayIntent("SALE", request, promise)
    }

    @ReactMethod
    fun refund(request: ReadableMap, promise: Promise) {
        launchAddPayIntent("REFUND", request, promise)
    }

    @ReactMethod
    fun preAuth(request: ReadableMap, promise: Promise) {
        launchAddPayIntent("PREAUTH", request, promise)
    }

    @ReactMethod
    fun preAuthComp(request: ReadableMap, promise: Promise) {
        launchAddPayIntent("PREAUTHCOMP", request, promise)
    }

    @ReactMethod
    fun preAuthCancel(request: ReadableMap, promise: Promise) {
        launchAddPayIntent("PREAUTHCANCEL", request, promise)
    }

    @ReactMethod
    fun settlement(request: ReadableMap, promise: Promise) {
        launchAddPayIntent("SETTLEMENT", request, promise)
    }

    @ReactMethod
    fun query(request: ReadableMap, promise: Promise) {
        launchAddPayIntent("QUERY", request, promise)
    }

    @ReactMethod
    fun print(request: ReadableMap, promise: Promise) {
        launchAddPayIntent("PRINT", request, promise)
    }

    @ReactMethod
    fun debiCheck(request: ReadableMap, promise: Promise) {
        launchAddPayIntent("DEBICHECK", request, promise)
    }

    private fun launchAddPayIntent(transType: String, request: ReadableMap, promise: Promise) {
        if (!isAddPayInstalled()) {
            promise.reject("APP_NOT_INSTALLED", "AddPay app is not installed on this device")
            return
        }

        val intent = Intent().apply {
            setPackage(ADDPAY_PACKAGE)
            action = ADDPAY_ACTION
            putExtra("version", "A01")
            putExtra("appId", request.getString("appId"))
            putExtra("transType", transType)

            val jsonObject = JSONObject()
            request.toHashMap().forEach { (key, value) ->
                if (key != "appId") {
                    jsonObject.put(key, value)
                }
            }
            putExtra("transData", jsonObject.toString())
        }

        currentPromise = promise
        try {
            reactApplicationContext.currentActivity?.startActivityForResult(intent, REQUEST_CODE)
        } catch (e: Exception) {
            promise.reject("LAUNCH_FAILED", "Failed to launch AddPay: ${e.message}")
        }
    }

    override fun onActivityResult(activity: Activity, requestCode: Int, resultCode: Int, data: Intent?) {
        if (requestCode == REQUEST_CODE) {
            val promise = currentPromise
            currentPromise = null

            when {
                resultCode == Activity.RESULT_OK && data != null -> {
                    val result = data.getStringExtra("result")
                    val resultMsg = data.getStringExtra("resultMsg")
                    val transData = data.getStringExtra("transData")

                    val responseMap = Arguments.createMap().apply {
                        putString("result", result)
                        putString("resultMsg", resultMsg)
                        putString("transData", transData)
                    }
                    promise?.resolve(responseMap)
                }
                resultCode == Activity.RESULT_CANCELED -> {
                    promise?.reject("CANCELLED", "Transaction was cancelled by the user")
                }
                else -> {
                    promise?.reject("UNKNOWN_RESULT", "Received unknown result from AddPay")
                }
            }
        }
    }

    override fun onNewIntent(intent: Intent?) {
        // Not used in this module
    }

    private fun isAddPayInstalled(): Boolean {
        val pm = reactApplicationContext.packageManager
        return try {
            pm.getPackageInfo(ADDPAY_PACKAGE, PackageManager.GET_ACTIVITIES)
            true
        } catch (e: PackageManager.NameNotFoundException) {
            false
        }
    }
}