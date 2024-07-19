import {
  SaleRequest,
  RefundRequest,
  PreAuthRequest,
  PreAuthCompRequest,
  PreAuthCancelRequest,
  SettlementRequest,
  QueryRequest,
  PrintRequest,
  DebiCheckRequest,
  SaleResponse,
  RefundResponse,
  PreAuthResponse,
  PreAuthCompResponse,
  PreAuthCancelResponse,
  SettlementResponse,
  QueryResponse,
  PrintResponse,
  DebiCheckResponse,
} from "./types";

class AddPay {
  static sale(request: SaleRequest): Promise<SaleResponse> {
    console.warn("AddPay is not supported on iOS");
    return Promise.reject(new Error("AddPay is not supported on iOS"));
  }

  static refund(request: RefundRequest): Promise<RefundResponse> {
    console.warn("AddPay is not supported on iOS");
    return Promise.reject(new Error("AddPay is not supported on iOS"));
  }

  static preAuth(request: PreAuthRequest): Promise<PreAuthResponse> {
    console.warn("AddPay is not supported on iOS");
    return Promise.reject(new Error("AddPay is not supported on iOS"));
  }

  static preAuthComp(request: PreAuthCompRequest): Promise<PreAuthCompResponse> {
    console.warn("AddPay is not supported on iOS");
    return Promise.reject(new Error("AddPay is not supported on iOS"));
  }

  static preAuthCancel(request: PreAuthCancelRequest): Promise<PreAuthCancelResponse> {
    console.warn("AddPay is not supported on iOS");
    return Promise.reject(new Error("AddPay is not supported on iOS"));
  }

  static settlement(request: SettlementRequest): Promise<SettlementResponse> {
    console.warn("AddPay is not supported on iOS");
    return Promise.reject(new Error("AddPay is not supported on iOS"));
  }

  static query(request: QueryRequest): Promise<QueryResponse> {
    console.warn("AddPay is not supported on iOS");
    return Promise.reject(new Error("AddPay is not supported on iOS"));
  }

  static print(request: PrintRequest): Promise<PrintResponse> {
    console.warn("AddPay is not supported on iOS");
    return Promise.reject(new Error("AddPay is not supported on iOS"));
  }

  static debiCheck(request: DebiCheckRequest): Promise<DebiCheckResponse> {
    console.warn("AddPay is not supported on iOS");
    return Promise.reject(new Error("AddPay is not supported on iOS"));
  }
}

export default AddPay;
