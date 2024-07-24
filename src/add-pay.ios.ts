import {
  BaseRequest,
  SaleTransData,
  RefundTransData,
  PreAuthTransData,
  PreAuthCompTransData,
  PreAuthCancelTransData,
  SettlementTransData,
  QueryTransData,
  PrintTransData,
  DebiCheckTransData,
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
  constructor(private baseRequest: BaseRequest) {
    console.warn("AddPay is not supported on iOS. This package is for Android devices only.");
  }

  private throwUnsupportedError(): never {
    throw new Error("AddPay is not supported on iOS. This package is for Android devices only.");
  }

  async sale(transData: SaleTransData, overrides?: Partial<BaseRequest>): Promise<SaleResponse> {
    this.throwUnsupportedError();
  }

  async refund(transData: RefundTransData, overrides?: Partial<BaseRequest>): Promise<RefundResponse> {
    this.throwUnsupportedError();
  }

  async preAuth(transData: PreAuthTransData, overrides?: Partial<BaseRequest>): Promise<PreAuthResponse> {
    this.throwUnsupportedError();
  }

  async preAuthComp(transData: PreAuthCompTransData, overrides?: Partial<BaseRequest>): Promise<PreAuthCompResponse> {
    this.throwUnsupportedError();
  }

  async preAuthCancel(
    transData: PreAuthCancelTransData,
    overrides?: Partial<BaseRequest>
  ): Promise<PreAuthCancelResponse> {
    this.throwUnsupportedError();
  }

  async settlement(transData: SettlementTransData = {}, overrides?: Partial<BaseRequest>): Promise<SettlementResponse> {
    this.throwUnsupportedError();
  }

  async query(transData: QueryTransData, overrides?: Partial<BaseRequest>): Promise<QueryResponse> {
    this.throwUnsupportedError();
  }

  async print(transData: PrintTransData, overrides?: Partial<BaseRequest>): Promise<PrintResponse> {
    this.throwUnsupportedError();
  }

  async debiCheck(transData: DebiCheckTransData, overrides?: Partial<BaseRequest>): Promise<DebiCheckResponse> {
    this.throwUnsupportedError();
  }
}

export default AddPay;
