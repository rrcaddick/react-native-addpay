# react-native-addpay

![npm](https://img.shields.io/npm/v/react-native-addpay)
![license](https://img.shields.io/npm/l/react-native-addpay)
![downloads](https://img.shields.io/npm/dt/react-native-addpay)

A React Native wrapper for AddPay integration (Android Only).

## ⚠️ Important Note

This package is designed for **Android devices only**. It will not function on iOS devices.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
npm install react-native-addpay
# or
yarn add react-native-addpay
```

### Android Setup

1. Open your `android/app/src/main/AndroidManifest.xml` file and add the following permission:

```xml
<uses-permission android:name="android.permission.INTERNET" />
```

2. Ensure that the Wise Cashier app is installed on the device.

## Usage

Here's a basic example of how to use the package:

```javascript
import AddPay from "react-native-addpay";

// Initialize AddPay with base configuration
const addPay = new AddPay({
  version: "A01",
  appId: "your_app_id",
  loginMode: "LoginFree",
  userId: "your_user_id",
  userPassword: "your_password",
});

// Sale Transaction
async function performExampleSale() {
  const saleData = {
    businessOrderNo: "202202222222", // Required: Unique order number
    paymentScenario: "CARD", // Required: CARD, SCANQR, BSCANQR, or CASH
    amt: "000000001000", // Required: Amount in cents
    paymentMethod: "Visa", // Optional: Specific for SCANQR or BSCANQR
    POSMode: "1", // Optional: 1 for Integration mode, 2 for Standalone mode
    note: "Sale transaction note", // Optional
    notifyUrl: "https://your-notify-url.com", // Optional
  };

  try {
    const response = await addPay.sale(saleData);
    console.log("Sale successful:", response);
  } catch (error) {
    console.error(error.message);
    // The error message will be in the format: "sale failed: [ErrorCode] ErrorMessage"
  }
}

// Refund Transaction
async function performExampleRefund() {
  const refundData = {
    originBusinessOrderNo: "202202222222", // Required: Original sale order number
    businessOrderNo: "202202222223", // Required: New unique order number for refund
    amt: "000000001000", // Required: Refund amount in cents
    paymentScenario: "CARD", // Required: CARD, SCANQR, BSCANQR, or CASH
    refNo: "123456", // Required: Retrieval Reference Number
    originTransDate: "20220222", // Required: Original transaction date YYYYMMDD
    notifyUrl: "https://your-notify-url.com", // Optional
  };

  try {
    const response = await addPay.refund(refundData);
    console.log("Refund successful:", response);
  } catch (error) {
    console.error(error.message);
    // The error message will be in the format: "refund failed: [ErrorCode] ErrorMessage"
  }
}

// Example of overriding base configuration for a specific transaction
async function exampleSaleWithOverride() {
  const saleData = {
    businessOrderNo: "202202222224",
    paymentScenario: "CARD",
    amt: "000000002000",
  };

  try {
    const response = await addPay.sale(saleData, {
      userId: "different_user",
      userPassword: "different_password",
    });
    console.log("Sale with override successful:", response);
  } catch (error) {
    console.error("Sale with override failed:", error.message);
  }
}
```

## API Reference

## Available Methods

The `AddPay` class provides the following methods:

- `sale(transData: SaleTransData, overrides?: Partial<BaseRequest>): Promise<SaleResponse>`
  Processes a sale transaction.

- `refund(transData: RefundTransData, overrides?: Partial<BaseRequest>): Promise<RefundResponse>`
  Processes a refund transaction.

- `preAuth(transData: PreAuthTransData, overrides?: Partial<BaseRequest>): Promise<PreAuthResponse>`
  Initiates a pre-authorization transaction.

- `preAuthComp(transData: PreAuthCompTransData, overrides?: Partial<BaseRequest>): Promise<PreAuthCompResponse>`
  Completes a pre-authorization transaction.

- `preAuthCancel(transData: PreAuthCancelTransData, overrides?: Partial<BaseRequest>): Promise<PreAuthCancelResponse>`
  Cancels a pre-authorization transaction.

- `settlement(overrides?: Partial<BaseRequest>): Promise<SettlementResponse>`
  Performs a settlement operation.

- `query(transData: QueryTransData, overrides?: Partial<BaseRequest>): Promise<QueryResponse>`
  Queries information about a transaction.

- `print(transData: PrintTransData, overrides?: Partial<BaseRequest>): Promise<PrintResponse>`
  Prints transaction information.

- `debiCheck(transData: DebiCheckTransData, overrides?: Partial<BaseRequest>): Promise<DebiCheckResponse>`
  Processes a DebiCheck transaction.

Each method corresponds to a specific transaction type and returns a Promise that resolves with the response data or rejects with an error. The `overrides` parameter allows you to override base configuration settings for individual transactions if needed.

For detailed type definitions of requests and responses, please refer to the [types documentation](./src/types.ts).

## Error Handling

All methods in the AddPay class will throw an error if the transaction fails. The error handling mechanism is designed to provide clear and consistent error information.

### Error Format

When an error occurs, it will be thrown with a message in the following format:

"[MethodName] failed: [ErrorCode] ErrorMessage"

- `MethodName`: The name of the method that was called (e.g., 'sale', 'refund', etc.)
- `ErrorCode`: A code representing the specific error that occurred
- `ErrorMessage`: A descriptive message providing more details about the error

### Troubleshooting

- **AddPay app not installed**: Ensure that the AddPay app is installed on the device.
- **Transaction fails**: Check the error code and message returned.

It's recommended to always use try-catch blocks when calling these methods to handle potential errors. Here's an example:

```javascript
try {
  const response = await addPay.sale(saleData);
  console.log("Sale successful:", response);
} catch (error) {
  console.error("Sale failed:", error.message);
  // Here you can access the error code and message if needed
  // You might want to parse the error message to extract the error code
}
```

### Common Error Codes

While the specific error codes and messages will depend on the AddPay system, here are some common error codes you might encounter:

- `107`: Refer to card issuer
- `100`: Do not honor
- `902`: Invalid transaction
- `111`: Invalid card number
- `208`: Lost card
- `113`: Unacceptable fee
- `201`: Expired card
- `117`: Incorrect PIN

These are general examples and may not represent the exact codes used by AddPay. Always refer to the official AddPay documentation for the most accurate and up-to-date list of error codes and their meanings.

Find the full list of code here:

- https://developers.paycloud.africa/#/wisecashier/ResponseCode?id=response-code

### Handling Errors

When handling errors, you may want to check for specific error codes to provide more targeted error messages or to trigger specific actions in your application. For example:

```javascript
try {
  const response = await addPay.sale(saleData);
  console.log("Sale successful:", response);
} catch (error) {
  const errorMessage = error.message;
  const errorCode = errorMessage.match(/\[(\d+)\]/)?.[1];

  switch (errorCode) {
    case "01":
      console.error("Transaction referred to card issuer");
      break;
    case "51":
      console.error("Insufficient funds");
      break;
    case "54":
      console.error("Card has expired");
      break;
    default:
      console.error("Transaction failed:", errorMessage);
  }
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
6.

## License

    This project is licensed under the MIT License

---

Made with ❤️ by Ray Caddick
