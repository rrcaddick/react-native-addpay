import { NativeModules } from "react-native";
import {
  SaleRequest,
  RefundRequest,
  PreAuthRequest,
  PreAuthCompRequest,
  PreAuthCancelRequest,
  QueryRequest,
  PrintRequest,
  DebiCheckRequest,
  TransactionResponse,
} from "./types";

const { AddPayModule } = NativeModules;

class AddPay {
  static sale(request: SaleRequest): Promise<TransactionResponse> {
    return AddPayModule.sale(request);
  }

  static refund(request: RefundRequest): Promise<TransactionResponse> {
    return AddPayModule.refund(request);
  }

  static preAuth(request: PreAuthRequest): Promise<TransactionResponse> {
    return AddPayModule.preAuth(request);
  }

  static preAuthComp(request: PreAuthCompRequest): Promise<TransactionResponse> {
    return AddPayModule.preAuthComp(request);
  }

  static preAuthCancel(request: PreAuthCancelRequest): Promise<TransactionResponse> {
    return AddPayModule.preAuthCancel(request);
  }

  static settlement(): Promise<TransactionResponse> {
    return AddPayModule.settlement();
  }

  static query(request: QueryRequest): Promise<TransactionResponse> {
    return AddPayModule.query(request);
  }

  static print(request: PrintRequest): Promise<TransactionResponse> {
    return AddPayModule.print(request);
  }

  static debiCheck(request: DebiCheckRequest): Promise<TransactionResponse> {
    return AddPayModule.debiCheck(request);
  }
}

export default AddPay;
