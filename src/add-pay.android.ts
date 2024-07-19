import { NativeModules } from "react-native";
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

const { AddPayModule } = NativeModules;

class AddPay {
  static sale(request: SaleRequest): Promise<SaleResponse> {
    return AddPayModule.sale(request);
  }

  static refund(request: RefundRequest): Promise<RefundResponse> {
    return AddPayModule.refund(request);
  }

  static preAuth(request: PreAuthRequest): Promise<PreAuthResponse> {
    return AddPayModule.preAuth(request);
  }

  static preAuthComp(request: PreAuthCompRequest): Promise<PreAuthCompResponse> {
    return AddPayModule.preAuthComp(request);
  }

  static preAuthCancel(request: PreAuthCancelRequest): Promise<PreAuthCancelResponse> {
    return AddPayModule.preAuthCancel(request);
  }

  static settlement(request: SettlementRequest): Promise<SettlementResponse> {
    return AddPayModule.settlement(request);
  }

  static query(request: QueryRequest): Promise<QueryResponse> {
    return AddPayModule.query(request);
  }

  static print(request: PrintRequest): Promise<PrintResponse> {
    return AddPayModule.print(request);
  }

  static debiCheck(request: DebiCheckRequest): Promise<DebiCheckResponse> {
    return AddPayModule.debiCheck(request);
  }
}

export default AddPay;
