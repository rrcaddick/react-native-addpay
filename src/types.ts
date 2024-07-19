// Request Types
export interface BaseRequest {
  version: string;
  appId: string;
  transType: string;
  loginMode?: "Login" | "LoginFree";
  userId?: string;
  userPassword?: string;
}

export interface SaleRequest extends BaseRequest {
  transType: "SALE";
  transData: {
    businessOrderNo: string;
    paymentScenario: "CARD" | "SCANQR" | "BSCANQR" | "CASH";
    paymentMethod?: string;
    amt: string;
    POSMode?: "1" | "2";
    note?: string;
    notifyUrl?: string;
  };
}

export interface RefundRequest extends BaseRequest {
  transType: "REFUND";
  transData: {
    originBusinessOrderNo: string;
    businessOrderNo: string;
    amt: string;
    paymentScenario: "CARD" | "SCANQR" | "BSCANQR" | "CASH";
    refNo: string;
    originTransDate: string;
    notifyUrl?: string;
  };
}

export interface PreAuthRequest extends BaseRequest {
  transType: "PREAUTH";
  transData: {
    businessOrderNo: string;
    paymentScenario: "CARD";
    amt: string;
    note?: string;
    notifyUrl?: string;
  };
}

export interface PreAuthCompRequest extends BaseRequest {
  transType: "PREAUTHCOMP";
  transData: {
    businessOrderNo: string;
    originBusinessOrderNo: string;
    paymentScenario: "CARD";
    amt: string;
    authCode: string;
    notifyUrl?: string;
  };
}

export interface PreAuthCancelRequest extends BaseRequest {
  transType: "PREAUTHCANCEL";
  transData: {
    businessOrderNo: string;
    originBusinessOrderNo: string;
    paymentScenario: "CARD";
    amt: string;
    authCode: string;
    notifyUrl?: string;
  };
}

export interface SettlementRequest extends BaseRequest {
  transType: "SETTLEMENT";
  transData?: {};
}

export interface QueryRequest extends BaseRequest {
  transType: "QUERY";
  transData: {
    businessOrderNo: string;
  };
}

export interface PrintRequest extends BaseRequest {
  transType: "PRINT";
  transData: {
    businessOrderNo: string;
  };
}

export interface DebiCheckRequest extends BaseRequest {
  transType: "DEBICHECK";
  transData: {
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
  };
}

// Response Types
export interface BaseResponse {
  version: string;
  transType: string;
  result: string;
  resultMsg?: string;
}

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
