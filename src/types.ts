export interface SaleRequest {
  businessOrderNo: string;
  paymentScenario: "CARD" | "SCANQR" | "BSCANQR" | "CASH";
  paymentMethod?: string;
  amt: string;
  POSMode?: "1" | "2";
  note?: string;
  notifyUrl?: string;
}

export interface RefundRequest {
  originBusinessOrderNo: string;
  businessOrderNo: string;
  amt: string;
  paymentScenario: "CARD" | "SCANQR" | "BSCANQR" | "CASH";
  refNo: string;
  originTransDate: string;
  notifyUrl?: string;
}

export interface PreAuthRequest {
  businessOrderNo: string;
  paymentScenario: "CARD";
  amt: string;
  note?: string;
  notifyUrl?: string;
}

export interface PreAuthCompRequest {
  businessOrderNo: string;
  originBusinessOrderNo: string;
  paymentScenario: "CARD";
  amt: string;
  authCode: string;
  notifyUrl?: string;
}

export interface PreAuthCancelRequest {
  businessOrderNo: string;
  originBusinessOrderNo: string;
  paymentScenario: "CARD";
  amt: string;
  authCode: string;
  notifyUrl?: string;
}

export interface QueryRequest {
  businessOrderNo: string;
}

export interface PrintRequest {
  businessOrderNo: string;
}

export interface DebiCheckRequest {
  businessOrderNo: string;
  contractReferenceNo: string;
  accountNo: string;
  debtorIdentificationNo: string;
  creditorName: string;
  installmentAmount: string;
  maxCollectionAmount: string;
  firstCollectionDate: string;
  monthlyCollectDate: string;
  POSMode?: "1" | "2";
  note?: string;
  notifyUrl?: string;
}

export interface TransactionResponse {
  version: string;
  transType: string;
  result: string;
  resultMsg?: string;
  transData: any;
}
