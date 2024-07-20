import { NativeModules } from "react-native";
import {
  BaseRequest,
  TransData,
  TransType,
  AddPayMethodNames,
  AddPayRequest,
  SaleTransData,
  RefundTransData,
  PreAuthTransData,
  PreAuthCompTransData,
  PreAuthCancelTransData,
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
  BaseResponse,
  SettlementTransData,
} from "./types";

const { AddPayModule } = NativeModules;

class AddPay {
  private baseRequest: BaseRequest;

  constructor(baseRequest: BaseRequest) {
    this.baseRequest = baseRequest;
  }

  private createRequest(transType: TransType, transData: TransData, overrides?: Partial<BaseRequest>): AddPayRequest {
    return {
      ...this.baseRequest,
      ...overrides,
      transType,
      transData,
    };
  }

  private async processResponse<T extends BaseResponse>(
    addPayMethodNames: AddPayMethodNames,
    request: AddPayRequest
  ): Promise<T> {
    const response = await AddPayModule[addPayMethodNames](request);
    if (response.result !== "00") {
      throw new Error(`${addPayMethodNames} failed: [${response.result}] ${response.resultMsg}`);
    }
    return response as T;
  }

  async sale(transData: SaleTransData, overrides?: Partial<BaseRequest>): Promise<SaleResponse> {
    const request = this.createRequest(TransType.SALE, transData, overrides);
    return this.processResponse<SaleResponse>(AddPayMethodNames.SALE, request);
  }

  async refund(transData: RefundTransData, overrides?: Partial<BaseRequest>): Promise<RefundResponse> {
    const request = this.createRequest(TransType.REFUND, transData, overrides);
    return this.processResponse<RefundResponse>(AddPayMethodNames.REFUND, request);
  }

  async preAuth(transData: PreAuthTransData, overrides?: Partial<BaseRequest>): Promise<PreAuthResponse> {
    const request = this.createRequest(TransType.PREAUTH, transData, overrides);
    return this.processResponse<PreAuthResponse>(AddPayMethodNames.PREAUTH, request);
  }

  async preAuthComp(transData: PreAuthCompTransData, overrides?: Partial<BaseRequest>): Promise<PreAuthCompResponse> {
    const request = this.createRequest(TransType.PREAUTHCOMP, transData, overrides);
    return this.processResponse<PreAuthCompResponse>(AddPayMethodNames.PREAUTHCOMP, request);
  }

  async preAuthCancel(
    transData: PreAuthCancelTransData,
    overrides?: Partial<BaseRequest>
  ): Promise<PreAuthCancelResponse> {
    const request = this.createRequest(TransType.PREAUTHCANCEL, transData, overrides);
    return this.processResponse<PreAuthCancelResponse>(AddPayMethodNames.PREAUTHCANCEL, request);
  }

  async settlement(transData: SettlementTransData = {}, overrides?: Partial<BaseRequest>): Promise<SettlementResponse> {
    const request = this.createRequest(TransType.SETTLEMENT, transData, overrides);
    return this.processResponse<SettlementResponse>(AddPayMethodNames.SETTLEMENT, request);
  }

  async query(transData: QueryTransData, overrides?: Partial<BaseRequest>): Promise<QueryResponse> {
    const request = this.createRequest(TransType.QUERY, transData, overrides);
    return this.processResponse<QueryResponse>(AddPayMethodNames.QUERY, request);
  }

  async print(transData: PrintTransData, overrides?: Partial<BaseRequest>): Promise<PrintResponse> {
    const request = this.createRequest(TransType.PRINT, transData, overrides);
    return this.processResponse<PrintResponse>(AddPayMethodNames.PRINT, request);
  }

  async debiCheck(transData: DebiCheckTransData, overrides?: Partial<BaseRequest>): Promise<DebiCheckResponse> {
    const request = this.createRequest(TransType.DEBICHECK, transData, overrides);
    return this.processResponse<DebiCheckResponse>(AddPayMethodNames.DEBICHECK, request);
  }
}

export default AddPay;
