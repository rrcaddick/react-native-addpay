export interface BaseRequest {
  version: string;
  appId: string;
  loginMode?: "Login" | "LoginFree";
  userId?: string;
  userPassword?: string;
}

export interface BaseResponse {
  version: string;
  transType: string;
  result: string;
  resultMsg?: string;
}

export interface SaleTransData {
  businessOrderNo: string;
  paymentScenario: "CARD" | "SCANQR" | "BSCANQR" | "CASH";
  paymentMethod?: string;
  amt: string;
  POSMode?: "1" | "2";
  note?: string;
  notifyUrl?: string;
}

export interface RefundTransData {
  originBusinessOrderNo: string;
  businessOrderNo: string;
  amt: string;
  paymentScenario: "CARD" | "SCANQR" | "BSCANQR" | "CASH";
  refNo: string;
  originTransDate: string;
  notifyUrl?: string;
}

export interface PreAuthTransData {
  businessOrderNo: string;
  paymentScenario: "CARD";
  amt: string;
  note?: string;
  notifyUrl?: string;
}

export interface PreAuthCompTransData {
  businessOrderNo: string;
  originBusinessOrderNo: string;
  paymentScenario: "CARD";
  amt: string;
  authCode: string;
  notifyUrl?: string;
}

export interface PreAuthCancelTransData {
  businessOrderNo: string;
  originBusinessOrderNo: string;
  paymentScenario: "CARD";
  amt: string;
  authCode: string;
  notifyUrl?: string;
}

export interface SettlementTransData {}

export interface QueryTransData {
  businessOrderNo: string;
}

export interface PrintTransData {
  businessOrderNo: string;
}

export interface DebiCheckTransData {
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

export type TransData =
  | SaleTransData
  | RefundTransData
  | PreAuthTransData
  | PreAuthCompTransData
  | PreAuthCancelTransData
  | SettlementTransData
  | QueryTransData
  | PrintTransData
  | DebiCheckTransData;

export enum TransType {
  SALE = "SALE",
  REFUND = "REFUND",
  PREAUTH = "PREAUTH",
  PREAUTHCOMP = "PREAUTHCOMP",
  PREAUTHCANCEL = "PREAUTHCANCEL",
  SETTLEMENT = "SETTLEMENT",
  QUERY = "QUERY",
  PRINT = "PRINT",
  DEBICHECK = "DEBICHECK",
}

export enum AddPayMethodNames {
  SALE = "sale",
  REFUND = "refund",
  PREAUTH = "preAuth",
  PREAUTHCOMP = "preAuthComp",
  PREAUTHCANCEL = "preAuthCancel",
  SETTLEMENT = "settlement",
  QUERY = "query",
  PRINT = "print",
  DEBICHECK = "debiCheck",
}

export type AddPayRequest = BaseRequest & {
  transType: TransType;
  transData: TransData;
};

// Response Types

export interface SaleResponse extends BaseResponse {
  transType: "SALE";
  transData: {
    businessOrderNo: string;
    paymentScenario: string;
    amt: string;
    transDate: string;
    transTime: string;
    operator?: string;
    authCode?: string;
    refNo?: string;
    cardNo: string;
    entryMode?: string;
    tipAmount?: string;
    cardIssuerName?: string;
    cardIssuerID?: string;
    cardHolderName?: string;
    transactionID: string;
  };
}

export interface RefundResponse extends BaseResponse {
  transType: "REFUND";
  transData: {
    businessOrderNo: string;
    paymentMethod: string;
    amt: string;
    transDate: string;
    transTime: string;
    operator?: string;
    authCode: string;
    refNo: string;
    cardIssuer: string;
    cardNo: string;
    entryMode?: string;
    tipAmount?: string;
    transactionID: string;
  };
}

export interface PreAuthResponse extends BaseResponse {
  transType: "PREAUTH";
  transData: {
    paymentMethod: string;
    businessOrderNo: string;
    amt: string;
    transDate: string;
    transTime: string;
    operator?: string;
    authCode: string;
    refNo: string;
    cardIssuer: string;
    cardNo: string;
    entryMode?: string;
    tipAmount?: string;
  };
}

export interface PreAuthCompResponse extends BaseResponse {
  transType: "PREAUTHCOMP";
  transData: {
    paymentMethod: string;
    businessOrderNo: string;
    amt: string;
    transDate: string;
    transTime: string;
    operator?: string;
    authCode: string;
    refNo: string;
    cardIssuer: string;
    cardNo: string;
    entryMode?: string;
    tipAmount?: string;
  };
}

export interface PreAuthCancelResponse extends BaseResponse {
  transType: "PREAUTHCANCEL";
  transData: {
    paymentMethod: string;
    businessOrderNo: string;
    amt: string;
    transDate: string;
    transTime: string;
    operator?: string;
    authCode: string;
    refNo: string;
    cardIssuer: string;
    cardNo: string;
    entryMode?: string;
    tipAmount?: string;
  };
}

export interface SettlementResponse extends BaseResponse {
  transType: "SETTLEMENT";
  transData: {
    settlementType: "ALL" | "SEL";
    transCount: string;
    totalAmount?: string;
    refundCount?: string;
    refundTotalAmount?: string;
    transDate: string;
    transTime: string;
    operator?: string;
  };
}

export interface QueryResponse extends BaseResponse {
  transType: "QUERY";
  transData: {
    businessOrderNo: string;
    amt: string;
    transDate: string;
    transTime: string;
    operator?: string;
    authCode?: string;
    refNo?: string;
    cardNo: string;
    entryMode?: string;
    tipAmount?: string;
    cardIssuerName?: string;
    cardIssuerID?: string;
    cardHolderName?: string;
  };
}

export interface PrintResponse extends BaseResponse {
  transType: "PRINT";
}

export interface DebiCheckResponse extends BaseResponse {
  transType: "DEBICHECK";
  transData: {
    businessOrderNo: string;
    contractReferenceNo: string;
    accountNo: string;
    debtorIdentificationNo: string;
    creditorName: string;
    installmentAmount: string;
    maxCollectionAmount: string;
    transDate: string;
    transTime: string;
    operator?: string;
  };
}
