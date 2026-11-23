type Identification_0 = string
type OBExternalAccountIdentification4Code = string
type SecondaryIdentification = string
type OBAddressTypeCode =
  | 'Business'
  | 'Correspondence'
  | 'DeliveryTo'
  | 'MailTo'
  | 'POBox'
  | 'Postal'
  | 'Residential'
  | 'Statement'
type BuildingNumber = string
type CountryCode = string
type CountrySubDivision = string
type Department = string
type PostCode = string
type StreetName = string
type SubDepartment = string
type TownName = string
type OBPostalAddress6 = {
  AddressLine?: string[] | undefined
  AddressType?: OBAddressTypeCode | undefined
  BuildingNumber?: BuildingNumber | undefined
  Country?: CountryCode | undefined
  CountrySubDivision?: CountrySubDivision | undefined
  Department?: Department | undefined
  PostCode?: PostCode | undefined
  StreetName?: StreetName | undefined
  SubDepartment?: SubDepartment | undefined
  TownName?: TownName | undefined
}
type OBActiveCurrencyAndAmountSimpleType = string
type ActiveOrHistoricCurrencyCode = string
type OBExternalLocalInstrument1Code = string
type OBSupplementaryData1 = { [x: string]: unknown }
type OBSCASupportData1 = {
  AppliedAuthenticationApproach?: 'CA' | 'SCA' | undefined
  ReferencePaymentOrderId?: string | undefined
  RequestedSCAExemptionType?:
    | 'BillPayment'
    | 'ContactlessTravel'
    | 'EcommerceGoods'
    | 'EcommerceServices'
    | 'Kiosk'
    | 'Parking'
    | 'PartyToParty'
    | undefined
}
type OBRisk1 = {
  DeliveryAddress?:
    | {
        AddressLine?: string[] | undefined
        BuildingNumber?: BuildingNumber | undefined
        Country: string
        CountrySubDivision?: CountrySubDivision | undefined
        PostCode?: PostCode | undefined
        StreetName?: StreetName | undefined
        TownName: TownName
      }
    | undefined
  MerchantCategoryCode?: string | undefined
  MerchantCustomerIdentification?: string | undefined
  PaymentContextCode?:
    | 'BillPayment'
    | 'EcommerceGoods'
    | 'EcommerceServices'
    | 'Other'
    | 'PartyToParty'
    | undefined
}
type OBWriteDomesticConsent4 = {
  Data: {
    Authorisation?:
      | { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string | undefined }
      | undefined
    Initiation: {
      CreditorAccount: {
        Identification: Identification_0
        Name: string
        SchemeName: OBExternalAccountIdentification4Code
        SecondaryIdentification?: SecondaryIdentification | undefined
      }
      CreditorPostalAddress?: OBPostalAddress6 | undefined
      DebtorAccount?:
        | {
            Identification: Identification_0
            Name?: string | undefined
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        | undefined
      EndToEndIdentification: string
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      InstructionIdentification: string
      LocalInstrument?: OBExternalLocalInstrument1Code | undefined
      RemittanceInformation?:
        | { Reference?: string | undefined; Unstructured?: string | undefined }
        | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    ReadRefundAccount?: 'No' | 'Yes' | undefined
    SCASupportData?: OBSCASupportData1 | undefined
  }
  Risk: OBRisk1
}
type OBActiveOrHistoricCurrencyAndAmount = {
  Amount: OBActiveCurrencyAndAmountSimpleType
  Currency: ActiveOrHistoricCurrencyCode
}
type OBChargeBearerType1Code =
  | 'BorneByCreditor'
  | 'BorneByDebtor'
  | 'FollowingServiceLevel'
  | 'Shared'
type OBExternalPaymentChargeType1Code = string
type OBCashAccountDebtor4 = {
  Identification?: string | undefined
  Name?: string | undefined
  SchemeName?: string | undefined
  SecondaryIdentification?: string | undefined
}
type Links = {
  First?: string | undefined
  Last?: string | undefined
  Next?: string | undefined
  Prev?: string | undefined
  Self: string
}
type ISODateTime = string
type Meta = {
  FirstAvailableDateTime?: ISODateTime | undefined
  LastAvailableDateTime?: ISODateTime | undefined
  TotalPages?: number | undefined
}
type OBWriteDomesticConsentResponse5 = {
  Data: {
    Authorisation?:
      | { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string | undefined }
      | undefined
    Charges?:
      | {
          Amount: OBActiveOrHistoricCurrencyAndAmount
          ChargeBearer: OBChargeBearerType1Code
          Type: OBExternalPaymentChargeType1Code
        }[]
      | undefined
    ConsentId: string
    CreationDateTime: string
    CutOffDateTime?: string | undefined
    Debtor?: OBCashAccountDebtor4 | undefined
    ExpectedExecutionDateTime?: string | undefined
    ExpectedSettlementDateTime?: string | undefined
    Initiation: {
      CreditorAccount: {
        Identification: Identification_0
        Name: string
        SchemeName: OBExternalAccountIdentification4Code
        SecondaryIdentification?: SecondaryIdentification | undefined
      }
      CreditorPostalAddress?: OBPostalAddress6 | undefined
      DebtorAccount?:
        | {
            Identification: Identification_0
            Name?: string | undefined
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        | undefined
      EndToEndIdentification: string
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      InstructionIdentification: string
      LocalInstrument?: OBExternalLocalInstrument1Code | undefined
      RemittanceInformation?:
        | { Reference?: string | undefined; Unstructured?: string | undefined }
        | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    ReadRefundAccount?: 'No' | 'Yes' | undefined
    SCASupportData?: OBSCASupportData1 | undefined
    Status: 'Authorised' | 'AwaitingAuthorisation' | 'Consumed' | 'Rejected'
    StatusUpdateDateTime: string
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
  Risk: OBRisk1
}
type OBError1 = {
  ErrorCode: string
  Message: string
  Path?: string | undefined
  Url?: string | undefined
}
type OBErrorResponse1 = {
  Code: string
  Errors: OBError1[]
  Id?: string | undefined
  Message: string
}
type OBWriteFundsConfirmationResponse1 = {
  Data: {
    FundsAvailableResult?: { FundsAvailable: boolean; FundsAvailableDateTime: string } | undefined
    SupplementaryData?: OBSupplementaryData1 | undefined
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBWriteDomestic2 = {
  Data: {
    ConsentId: string
    Initiation: {
      CreditorAccount: {
        Identification: Identification_0
        Name: string
        SchemeName: OBExternalAccountIdentification4Code
        SecondaryIdentification?: SecondaryIdentification | undefined
      }
      CreditorPostalAddress?: OBPostalAddress6 | undefined
      DebtorAccount?:
        | {
            Identification: Identification_0
            Name?: string | undefined
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        | undefined
      EndToEndIdentification: string
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      InstructionIdentification: string
      LocalInstrument?: OBExternalLocalInstrument1Code | undefined
      RemittanceInformation?:
        | { Reference?: string | undefined; Unstructured?: string | undefined }
        | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
  }
  Risk: OBRisk1
}
type OBWriteDomesticResponse5 = {
  Data: {
    Charges?:
      | {
          Amount: OBActiveOrHistoricCurrencyAndAmount
          ChargeBearer: OBChargeBearerType1Code
          Type: OBExternalPaymentChargeType1Code
        }[]
      | undefined
    ConsentId: string
    CreationDateTime: string
    Debtor?: OBCashAccountDebtor4 | undefined
    DomesticPaymentId: string
    ExpectedExecutionDateTime?: string | undefined
    ExpectedSettlementDateTime?: string | undefined
    Initiation: {
      CreditorAccount: {
        Identification: Identification_0
        Name: string
        SchemeName: OBExternalAccountIdentification4Code
        SecondaryIdentification?: SecondaryIdentification | undefined
      }
      CreditorPostalAddress?: OBPostalAddress6 | undefined
      DebtorAccount?:
        | {
            Identification: Identification_0
            Name?: string | undefined
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        | undefined
      EndToEndIdentification: string
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      InstructionIdentification: string
      LocalInstrument?: OBExternalLocalInstrument1Code | undefined
      RemittanceInformation?:
        | { Reference?: string | undefined; Unstructured?: string | undefined }
        | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    MultiAuthorisation?:
      | {
          ExpirationDateTime?: string | undefined
          LastUpdateDateTime?: string | undefined
          NumberReceived?: number | undefined
          NumberRequired?: number | undefined
          Status: 'Authorised' | 'AwaitingFurtherAuthorisation' | 'Rejected'
        }
      | undefined
    Refund?:
      | {
          Account: {
            Identification: Identification_0
            Name: string
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        }
      | undefined
    Status:
      | 'AcceptedCreditSettlementCompleted'
      | 'AcceptedSettlementCompleted'
      | 'AcceptedSettlementInProcess'
      | 'AcceptedWithoutPosting'
      | 'Pending'
      | 'Rejected'
    StatusUpdateDateTime: string
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBWritePaymentDetailsResponse1 = {
  Data: {
    PaymentStatus?:
      | {
          PaymentTransactionId: string
          Status:
            | 'Accepted'
            | 'AcceptedCancellationRequest'
            | 'AcceptedCreditSettlementCompleted'
            | 'AcceptedCustomerProfile'
            | 'AcceptedFundsChecked'
            | 'AcceptedSettlementCompleted'
            | 'AcceptedSettlementInProcess'
            | 'AcceptedTechnicalValidation'
            | 'AcceptedWithChange'
            | 'AcceptedWithoutPosting'
            | 'Cancelled'
            | 'NoCancellationProcess'
            | 'PartiallyAcceptedCancellationRequest'
            | 'PartiallyAcceptedTechnicalCorrect'
            | 'PaymentCancelled'
            | 'Pending'
            | 'PendingCancellationRequest'
            | 'Received'
            | 'Rejected'
            | 'RejectedCancellationRequest'
          StatusDetail?:
            | {
                LocalInstrument?: OBExternalLocalInstrument1Code | undefined
                Status: string
                StatusReason?:
                  | 'Cancelled'
                  | 'PendingFailingSettlement'
                  | 'PendingSettlement'
                  | 'Proprietary'
                  | 'ProprietaryRejection'
                  | 'Suspended'
                  | 'Unmatched'
                  | undefined
                StatusReasonDescription?: string | undefined
              }
            | undefined
          StatusUpdateDateTime: string
        }[]
      | undefined
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBWriteDomesticScheduledConsent4 = {
  Data: {
    Authorisation?:
      | { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string | undefined }
      | undefined
    Initiation: {
      CreditorAccount: {
        Identification: Identification_0
        Name: string
        SchemeName: OBExternalAccountIdentification4Code
        SecondaryIdentification?: SecondaryIdentification | undefined
      }
      CreditorPostalAddress?: OBPostalAddress6 | undefined
      DebtorAccount?:
        | {
            Identification: Identification_0
            Name?: string | undefined
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        | undefined
      EndToEndIdentification?: string | undefined
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      InstructionIdentification: string
      LocalInstrument?: OBExternalLocalInstrument1Code | undefined
      RemittanceInformation?:
        | { Reference?: string | undefined; Unstructured?: string | undefined }
        | undefined
      RequestedExecutionDateTime: string
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    Permission: 'Create'
    ReadRefundAccount?: 'No' | 'Yes' | undefined
    SCASupportData?: OBSCASupportData1 | undefined
  }
  Risk: OBRisk1
}
type OBWriteDomesticScheduledConsentResponse5 = {
  Data: {
    Authorisation?:
      | { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string | undefined }
      | undefined
    Charges?:
      | {
          Amount: OBActiveOrHistoricCurrencyAndAmount
          ChargeBearer: OBChargeBearerType1Code
          Type: OBExternalPaymentChargeType1Code
        }[]
      | undefined
    ConsentId: string
    CreationDateTime: string
    CutOffDateTime?: string | undefined
    Debtor?: OBCashAccountDebtor4 | undefined
    ExpectedExecutionDateTime?: string | undefined
    ExpectedSettlementDateTime?: string | undefined
    Initiation: {
      CreditorAccount: {
        Identification: Identification_0
        Name: string
        SchemeName: OBExternalAccountIdentification4Code
        SecondaryIdentification?: SecondaryIdentification | undefined
      }
      CreditorPostalAddress?: OBPostalAddress6 | undefined
      DebtorAccount?:
        | {
            Identification: Identification_0
            Name?: string | undefined
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        | undefined
      EndToEndIdentification?: string | undefined
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      InstructionIdentification: string
      LocalInstrument?: OBExternalLocalInstrument1Code | undefined
      RemittanceInformation?:
        | { Reference?: string | undefined; Unstructured?: string | undefined }
        | undefined
      RequestedExecutionDateTime: string
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    Permission: 'Create'
    ReadRefundAccount?: 'No' | 'Yes' | undefined
    SCASupportData?: OBSCASupportData1 | undefined
    Status: 'Authorised' | 'AwaitingAuthorisation' | 'Consumed' | 'Rejected'
    StatusUpdateDateTime: string
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
  Risk: OBRisk1
}
type OBWriteDomesticScheduled2 = {
  Data: {
    ConsentId: string
    Initiation: {
      CreditorAccount: {
        Identification: Identification_0
        Name: string
        SchemeName: OBExternalAccountIdentification4Code
        SecondaryIdentification?: SecondaryIdentification | undefined
      }
      CreditorPostalAddress?: OBPostalAddress6 | undefined
      DebtorAccount?:
        | {
            Identification: Identification_0
            Name?: string | undefined
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        | undefined
      EndToEndIdentification?: string | undefined
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      InstructionIdentification: string
      LocalInstrument?: OBExternalLocalInstrument1Code | undefined
      RemittanceInformation?:
        | { Reference?: string | undefined; Unstructured?: string | undefined }
        | undefined
      RequestedExecutionDateTime: string
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
  }
  Risk: OBRisk1
}
type OBWriteDomesticScheduledResponse5 = {
  Data: {
    Charges?:
      | {
          Amount: OBActiveOrHistoricCurrencyAndAmount
          ChargeBearer: OBChargeBearerType1Code
          Type: OBExternalPaymentChargeType1Code
        }[]
      | undefined
    ConsentId: string
    CreationDateTime: string
    Debtor?: OBCashAccountDebtor4 | undefined
    DomesticScheduledPaymentId: string
    ExpectedExecutionDateTime?: string | undefined
    ExpectedSettlementDateTime?: string | undefined
    Initiation: {
      CreditorAccount: {
        Identification: Identification_0
        Name: string
        SchemeName: OBExternalAccountIdentification4Code
        SecondaryIdentification?: SecondaryIdentification | undefined
      }
      CreditorPostalAddress?: OBPostalAddress6 | undefined
      DebtorAccount?:
        | {
            Identification: Identification_0
            Name?: string | undefined
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        | undefined
      EndToEndIdentification?: string | undefined
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      InstructionIdentification: string
      LocalInstrument?: OBExternalLocalInstrument1Code | undefined
      RemittanceInformation?:
        | { Reference?: string | undefined; Unstructured?: string | undefined }
        | undefined
      RequestedExecutionDateTime: string
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    MultiAuthorisation?:
      | {
          ExpirationDateTime?: string | undefined
          LastUpdateDateTime?: string | undefined
          NumberReceived?: number | undefined
          NumberRequired?: number | undefined
          Status: 'Authorised' | 'AwaitingFurtherAuthorisation' | 'Rejected'
        }
      | undefined
    Refund?:
      | {
          Account: {
            Identification: Identification_0
            Name: string
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        }
      | undefined
    Status: 'Cancelled' | 'InitiationCompleted' | 'InitiationFailed' | 'InitiationPending'
    StatusUpdateDateTime: string
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBWriteDomesticStandingOrderConsent5 = {
  Data: {
    Authorisation?:
      | { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string | undefined }
      | undefined
    Initiation: {
      CreditorAccount: {
        Identification: Identification_0
        Name: string
        SchemeName: OBExternalAccountIdentification4Code
        SecondaryIdentification?: SecondaryIdentification | undefined
      }
      DebtorAccount?:
        | {
            Identification: Identification_0
            Name?: string | undefined
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        | undefined
      FinalPaymentAmount?:
        | { Amount: OBActiveCurrencyAndAmountSimpleType; Currency: ActiveOrHistoricCurrencyCode }
        | undefined
      FinalPaymentDateTime?: string | undefined
      FirstPaymentAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      FirstPaymentDateTime: string
      Frequency: string
      NumberOfPayments?: string | undefined
      RecurringPaymentAmount?:
        | { Amount: OBActiveCurrencyAndAmountSimpleType; Currency: ActiveOrHistoricCurrencyCode }
        | undefined
      RecurringPaymentDateTime?: string | undefined
      Reference?: string | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    Permission: 'Create'
    ReadRefundAccount?: 'No' | 'Yes' | undefined
    SCASupportData?: OBSCASupportData1 | undefined
  }
  Risk: OBRisk1
}
type OBWriteDomesticStandingOrderConsentResponse6 = {
  Data: {
    Authorisation?:
      | { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string | undefined }
      | undefined
    Charges?:
      | {
          Amount: OBActiveOrHistoricCurrencyAndAmount
          ChargeBearer: OBChargeBearerType1Code
          Type: OBExternalPaymentChargeType1Code
        }[]
      | undefined
    ConsentId: string
    CreationDateTime: string
    CutOffDateTime?: string | undefined
    Debtor?: OBCashAccountDebtor4 | undefined
    Initiation: {
      CreditorAccount: {
        Identification: Identification_0
        Name: string
        SchemeName: OBExternalAccountIdentification4Code
        SecondaryIdentification?: SecondaryIdentification | undefined
      }
      DebtorAccount?:
        | {
            Identification: Identification_0
            Name?: string | undefined
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        | undefined
      FinalPaymentAmount?:
        | { Amount: OBActiveCurrencyAndAmountSimpleType; Currency: ActiveOrHistoricCurrencyCode }
        | undefined
      FinalPaymentDateTime?: string | undefined
      FirstPaymentAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      FirstPaymentDateTime: string
      Frequency: string
      NumberOfPayments?: string | undefined
      RecurringPaymentAmount?:
        | { Amount: OBActiveCurrencyAndAmountSimpleType; Currency: ActiveOrHistoricCurrencyCode }
        | undefined
      RecurringPaymentDateTime?: string | undefined
      Reference?: string | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    Permission: 'Create'
    ReadRefundAccount?: 'No' | 'Yes' | undefined
    SCASupportData?: OBSCASupportData1 | undefined
    Status: 'Authorised' | 'AwaitingAuthorisation' | 'Consumed' | 'Rejected'
    StatusUpdateDateTime: string
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
  Risk: OBRisk1
}
type OBWriteDomesticStandingOrder3 = {
  Data: {
    ConsentId: string
    Initiation: {
      CreditorAccount: {
        Identification: Identification_0
        Name: string
        SchemeName: OBExternalAccountIdentification4Code
        SecondaryIdentification?: SecondaryIdentification | undefined
      }
      DebtorAccount?:
        | {
            Identification: Identification_0
            Name?: string | undefined
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        | undefined
      FinalPaymentAmount?:
        | { Amount: OBActiveCurrencyAndAmountSimpleType; Currency: ActiveOrHistoricCurrencyCode }
        | undefined
      FinalPaymentDateTime?: string | undefined
      FirstPaymentAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      FirstPaymentDateTime: string
      Frequency: string
      NumberOfPayments?: string | undefined
      RecurringPaymentAmount?:
        | { Amount: OBActiveCurrencyAndAmountSimpleType; Currency: ActiveOrHistoricCurrencyCode }
        | undefined
      RecurringPaymentDateTime?: string | undefined
      Reference?: string | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
  }
  Risk: OBRisk1
}
type OBWriteDomesticStandingOrderResponse6 = {
  Data: {
    Charges?:
      | {
          Amount: OBActiveOrHistoricCurrencyAndAmount
          ChargeBearer: OBChargeBearerType1Code
          Type: OBExternalPaymentChargeType1Code
        }[]
      | undefined
    ConsentId: string
    CreationDateTime: string
    Debtor?: OBCashAccountDebtor4 | undefined
    DomesticStandingOrderId: string
    Initiation: {
      CreditorAccount: {
        Identification: Identification_0
        Name: string
        SchemeName: OBExternalAccountIdentification4Code
        SecondaryIdentification?: SecondaryIdentification | undefined
      }
      DebtorAccount?:
        | {
            Identification: Identification_0
            Name?: string | undefined
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        | undefined
      FinalPaymentAmount?:
        | { Amount: OBActiveCurrencyAndAmountSimpleType; Currency: ActiveOrHistoricCurrencyCode }
        | undefined
      FinalPaymentDateTime?: string | undefined
      FirstPaymentAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      FirstPaymentDateTime: string
      Frequency: string
      NumberOfPayments?: string | undefined
      RecurringPaymentAmount?:
        | { Amount: OBActiveCurrencyAndAmountSimpleType; Currency: ActiveOrHistoricCurrencyCode }
        | undefined
      RecurringPaymentDateTime?: string | undefined
      Reference?: string | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    MultiAuthorisation?:
      | {
          ExpirationDateTime?: string | undefined
          LastUpdateDateTime?: string | undefined
          NumberReceived?: number | undefined
          NumberRequired?: number | undefined
          Status: 'Authorised' | 'AwaitingFurtherAuthorisation' | 'Rejected'
        }
      | undefined
    Refund?:
      | {
          Account: {
            Identification: Identification_0
            Name: string
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        }
      | undefined
    Status: 'Cancelled' | 'InitiationCompleted' | 'InitiationFailed' | 'InitiationPending'
    StatusUpdateDateTime: string
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBWriteFileConsent3 = {
  Data: {
    Authorisation?:
      | { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string | undefined }
      | undefined
    Initiation: {
      ControlSum?: number | undefined
      DebtorAccount?:
        | {
            Identification: Identification_0
            Name?: string | undefined
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        | undefined
      FileHash: string
      FileReference?: string | undefined
      FileType: string
      LocalInstrument?: OBExternalLocalInstrument1Code | undefined
      NumberOfTransactions?: string | undefined
      RemittanceInformation?:
        | { Reference?: string | undefined; Unstructured?: string | undefined }
        | undefined
      RequestedExecutionDateTime?: string | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    SCASupportData?: OBSCASupportData1 | undefined
  }
}
type OBWriteFileConsentResponse4 = {
  Data: {
    Authorisation?:
      | { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string | undefined }
      | undefined
    Charges?:
      | {
          Amount: OBActiveOrHistoricCurrencyAndAmount
          ChargeBearer: OBChargeBearerType1Code
          Type: OBExternalPaymentChargeType1Code
        }[]
      | undefined
    ConsentId: string
    CreationDateTime: string
    CutOffDateTime?: string | undefined
    Debtor?: OBCashAccountDebtor4 | undefined
    Initiation: {
      ControlSum?: number | undefined
      DebtorAccount?:
        | {
            Identification: Identification_0
            Name?: string | undefined
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        | undefined
      FileHash: string
      FileReference?: string | undefined
      FileType: string
      LocalInstrument?: OBExternalLocalInstrument1Code | undefined
      NumberOfTransactions?: string | undefined
      RemittanceInformation?:
        | { Reference?: string | undefined; Unstructured?: string | undefined }
        | undefined
      RequestedExecutionDateTime?: string | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    SCASupportData?: OBSCASupportData1 | undefined
    Status: 'Authorised' | 'AwaitingAuthorisation' | 'AwaitingUpload' | 'Consumed' | 'Rejected'
    StatusUpdateDateTime: string
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type File2 = {}
type OBWriteFile2 = {
  Data: {
    ConsentId: string
    Initiation: {
      ControlSum?: number | undefined
      DebtorAccount?:
        | {
            Identification: Identification_0
            Name?: string | undefined
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        | undefined
      FileHash: string
      FileReference?: string | undefined
      FileType: string
      LocalInstrument?: OBExternalLocalInstrument1Code | undefined
      NumberOfTransactions?: string | undefined
      RemittanceInformation?:
        | { Reference?: string | undefined; Unstructured?: string | undefined }
        | undefined
      RequestedExecutionDateTime?: string | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
  }
}
type OBWriteFileResponse3 = {
  Data: {
    Charges?:
      | {
          Amount: OBActiveOrHistoricCurrencyAndAmount
          ChargeBearer: OBChargeBearerType1Code
          Type: OBExternalPaymentChargeType1Code
        }[]
      | undefined
    ConsentId: string
    CreationDateTime: string
    Debtor?: OBCashAccountDebtor4 | undefined
    FilePaymentId: string
    Initiation: {
      ControlSum?: number | undefined
      DebtorAccount?:
        | {
            Identification: Identification_0
            Name?: string | undefined
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        | undefined
      FileHash: string
      FileReference?: string | undefined
      FileType: string
      LocalInstrument?: OBExternalLocalInstrument1Code | undefined
      NumberOfTransactions?: string | undefined
      RemittanceInformation?:
        | { Reference?: string | undefined; Unstructured?: string | undefined }
        | undefined
      RequestedExecutionDateTime?: string | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    MultiAuthorisation?:
      | {
          ExpirationDateTime?: string | undefined
          LastUpdateDateTime?: string | undefined
          NumberReceived?: number | undefined
          NumberRequired?: number | undefined
          Status: 'Authorised' | 'AwaitingFurtherAuthorisation' | 'Rejected'
        }
      | undefined
    Status: 'InitiationCompleted' | 'InitiationFailed' | 'InitiationPending'
    StatusUpdateDateTime: string
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type Identification_1 = string
type Name = string
type OBExternalFinancialInstitutionIdentification4Code = string
type OBWriteInternationalConsent5 = {
  Data: {
    Authorisation?:
      | { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string | undefined }
      | undefined
    Initiation: {
      ChargeBearer?: OBChargeBearerType1Code | undefined
      Creditor?:
        | { Name?: string | undefined; PostalAddress?: OBPostalAddress6 | undefined }
        | undefined
      CreditorAccount: {
        Identification: Identification_0
        Name: string
        SchemeName: OBExternalAccountIdentification4Code
        SecondaryIdentification?: SecondaryIdentification | undefined
      }
      CreditorAgent?:
        | {
            Identification?: Identification_1 | undefined
            Name?: Name | undefined
            PostalAddress?: OBPostalAddress6 | undefined
            SchemeName?: OBExternalFinancialInstitutionIdentification4Code | undefined
          }
        | undefined
      CurrencyOfTransfer: string
      DebtorAccount?:
        | {
            Identification: Identification_0
            Name?: string | undefined
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        | undefined
      DestinationCountryCode?: string | undefined
      EndToEndIdentification: string
      ExchangeRateInformation?:
        | {
            ContractIdentification?: string | undefined
            ExchangeRate?: number | undefined
            RateType: 'Actual' | 'Agreed' | 'Indicative'
            UnitCurrency: string
          }
        | undefined
      ExtendedPurpose?: string | undefined
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      InstructionIdentification: string
      InstructionPriority?: 'Normal' | 'Urgent' | undefined
      LocalInstrument?: OBExternalLocalInstrument1Code | undefined
      Purpose?: string | undefined
      RemittanceInformation?:
        | { Reference?: string | undefined; Unstructured?: string | undefined }
        | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    ReadRefundAccount?: 'No' | 'Yes' | undefined
    SCASupportData?: OBSCASupportData1 | undefined
  }
  Risk: OBRisk1
}
type OBWriteInternationalConsentResponse6 = {
  Data: {
    Authorisation?:
      | { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string | undefined }
      | undefined
    Charges?:
      | {
          Amount: OBActiveOrHistoricCurrencyAndAmount
          ChargeBearer: OBChargeBearerType1Code
          Type: OBExternalPaymentChargeType1Code
        }[]
      | undefined
    ConsentId: string
    CreationDateTime: string
    CutOffDateTime?: string | undefined
    Debtor?: OBCashAccountDebtor4 | undefined
    ExchangeRateInformation?:
      | {
          ContractIdentification?: string | undefined
          ExchangeRate: number
          ExpirationDateTime?: string | undefined
          RateType: 'Actual' | 'Agreed' | 'Indicative'
          UnitCurrency: string
        }
      | undefined
    ExpectedExecutionDateTime?: string | undefined
    ExpectedSettlementDateTime?: string | undefined
    Initiation: {
      ChargeBearer?: OBChargeBearerType1Code | undefined
      Creditor?:
        | { Name?: string | undefined; PostalAddress?: OBPostalAddress6 | undefined }
        | undefined
      CreditorAccount: {
        Identification: Identification_0
        Name: string
        SchemeName: OBExternalAccountIdentification4Code
        SecondaryIdentification?: SecondaryIdentification | undefined
      }
      CreditorAgent?:
        | {
            Identification?: Identification_1 | undefined
            Name?: Name | undefined
            PostalAddress?: OBPostalAddress6 | undefined
            SchemeName?: OBExternalFinancialInstitutionIdentification4Code | undefined
          }
        | undefined
      CurrencyOfTransfer: string
      DebtorAccount?:
        | {
            Identification: Identification_0
            Name?: string | undefined
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        | undefined
      DestinationCountryCode?: string | undefined
      EndToEndIdentification: string
      ExchangeRateInformation?:
        | {
            ContractIdentification?: string | undefined
            ExchangeRate?: number | undefined
            RateType: 'Actual' | 'Agreed' | 'Indicative'
            UnitCurrency: string
          }
        | undefined
      ExtendedPurpose?: string | undefined
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      InstructionIdentification: string
      InstructionPriority?: 'Normal' | 'Urgent' | undefined
      LocalInstrument?: OBExternalLocalInstrument1Code | undefined
      Purpose?: string | undefined
      RemittanceInformation?:
        | { Reference?: string | undefined; Unstructured?: string | undefined }
        | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    ReadRefundAccount?: 'No' | 'Yes' | undefined
    SCASupportData?: OBSCASupportData1 | undefined
    Status: 'Authorised' | 'AwaitingAuthorisation' | 'Consumed' | 'Rejected'
    StatusUpdateDateTime: string
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
  Risk: OBRisk1
}
type OBWriteInternational3 = {
  Data: {
    ConsentId: string
    Initiation: {
      ChargeBearer?: OBChargeBearerType1Code | undefined
      Creditor?:
        | { Name?: string | undefined; PostalAddress?: OBPostalAddress6 | undefined }
        | undefined
      CreditorAccount: {
        Identification: Identification_0
        Name: string
        SchemeName: OBExternalAccountIdentification4Code
        SecondaryIdentification?: SecondaryIdentification | undefined
      }
      CreditorAgent?:
        | {
            Identification?: Identification_1 | undefined
            Name?: Name | undefined
            PostalAddress?: OBPostalAddress6 | undefined
            SchemeName?: OBExternalFinancialInstitutionIdentification4Code | undefined
          }
        | undefined
      CurrencyOfTransfer: string
      DebtorAccount?:
        | {
            Identification: Identification_0
            Name?: string | undefined
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        | undefined
      DestinationCountryCode?: string | undefined
      EndToEndIdentification: string
      ExchangeRateInformation?:
        | {
            ContractIdentification?: string | undefined
            ExchangeRate?: number | undefined
            RateType: 'Actual' | 'Agreed' | 'Indicative'
            UnitCurrency: string
          }
        | undefined
      ExtendedPurpose?: string | undefined
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      InstructionIdentification: string
      InstructionPriority?: 'Normal' | 'Urgent' | undefined
      LocalInstrument?: OBExternalLocalInstrument1Code | undefined
      Purpose?: string | undefined
      RemittanceInformation?:
        | { Reference?: string | undefined; Unstructured?: string | undefined }
        | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
  }
  Risk: OBRisk1
}
type OBWriteInternationalResponse5 = {
  Data: {
    Charges?:
      | {
          Amount: OBActiveOrHistoricCurrencyAndAmount
          ChargeBearer: OBChargeBearerType1Code
          Type: OBExternalPaymentChargeType1Code
        }[]
      | undefined
    ConsentId: string
    CreationDateTime: string
    Debtor?: OBCashAccountDebtor4 | undefined
    ExchangeRateInformation?:
      | {
          ContractIdentification?: string | undefined
          ExchangeRate: number
          ExpirationDateTime?: string | undefined
          RateType: 'Actual' | 'Agreed' | 'Indicative'
          UnitCurrency: string
        }
      | undefined
    ExpectedExecutionDateTime?: string | undefined
    ExpectedSettlementDateTime?: string | undefined
    Initiation: {
      ChargeBearer?: OBChargeBearerType1Code | undefined
      Creditor?:
        | { Name?: string | undefined; PostalAddress?: OBPostalAddress6 | undefined }
        | undefined
      CreditorAccount: {
        Identification: Identification_0
        Name: string
        SchemeName: OBExternalAccountIdentification4Code
        SecondaryIdentification?: SecondaryIdentification | undefined
      }
      CreditorAgent?:
        | {
            Identification?: Identification_1 | undefined
            Name?: Name | undefined
            PostalAddress?: OBPostalAddress6 | undefined
            SchemeName?: OBExternalFinancialInstitutionIdentification4Code | undefined
          }
        | undefined
      CurrencyOfTransfer: string
      DebtorAccount?:
        | {
            Identification: Identification_0
            Name?: string | undefined
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        | undefined
      DestinationCountryCode?: string | undefined
      EndToEndIdentification: string
      ExchangeRateInformation?:
        | {
            ContractIdentification?: string | undefined
            ExchangeRate?: number | undefined
            RateType: 'Actual' | 'Agreed' | 'Indicative'
            UnitCurrency: string
          }
        | undefined
      ExtendedPurpose?: string | undefined
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      InstructionIdentification: string
      InstructionPriority?: 'Normal' | 'Urgent' | undefined
      LocalInstrument?: OBExternalLocalInstrument1Code | undefined
      Purpose?: string | undefined
      RemittanceInformation?:
        | { Reference?: string | undefined; Unstructured?: string | undefined }
        | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    InternationalPaymentId: string
    MultiAuthorisation?:
      | {
          ExpirationDateTime?: string | undefined
          LastUpdateDateTime?: string | undefined
          NumberReceived?: number | undefined
          NumberRequired?: number | undefined
          Status: 'Authorised' | 'AwaitingFurtherAuthorisation' | 'Rejected'
        }
      | undefined
    Refund?:
      | {
          Account: {
            Identification: Identification_0
            Name: string
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
          Agent?:
            | {
                Identification?: Identification_1 | undefined
                Name?: Name | undefined
                PostalAddress?: OBPostalAddress6 | undefined
                SchemeName?: OBExternalFinancialInstitutionIdentification4Code | undefined
              }
            | undefined
          Creditor?:
            | { Name?: string | undefined; PostalAddress?: OBPostalAddress6 | undefined }
            | undefined
        }
      | undefined
    Status:
      | 'AcceptedCreditSettlementCompleted'
      | 'AcceptedSettlementCompleted'
      | 'AcceptedSettlementInProcess'
      | 'AcceptedWithoutPosting'
      | 'Pending'
      | 'Rejected'
    StatusUpdateDateTime: string
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBWriteInternationalScheduledConsent5 = {
  Data: {
    Authorisation?:
      | { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string | undefined }
      | undefined
    Initiation: {
      ChargeBearer?: OBChargeBearerType1Code | undefined
      Creditor?:
        | { Name?: string | undefined; PostalAddress?: OBPostalAddress6 | undefined }
        | undefined
      CreditorAccount: {
        Identification: Identification_0
        Name: string
        SchemeName: OBExternalAccountIdentification4Code
        SecondaryIdentification?: SecondaryIdentification | undefined
      }
      CreditorAgent?:
        | {
            Identification?: Identification_1 | undefined
            Name?: Name | undefined
            PostalAddress?: OBPostalAddress6 | undefined
            SchemeName?: OBExternalFinancialInstitutionIdentification4Code | undefined
          }
        | undefined
      CurrencyOfTransfer: string
      DebtorAccount?:
        | {
            Identification: Identification_0
            Name?: string | undefined
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        | undefined
      DestinationCountryCode?: string | undefined
      EndToEndIdentification?: string | undefined
      ExchangeRateInformation?:
        | {
            ContractIdentification?: string | undefined
            ExchangeRate?: number | undefined
            RateType: 'Actual' | 'Agreed' | 'Indicative'
            UnitCurrency: string
          }
        | undefined
      ExtendedPurpose?: string | undefined
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      InstructionIdentification: string
      InstructionPriority?: 'Normal' | 'Urgent' | undefined
      LocalInstrument?: OBExternalLocalInstrument1Code | undefined
      Purpose?: string | undefined
      RemittanceInformation?:
        | { Reference?: string | undefined; Unstructured?: string | undefined }
        | undefined
      RequestedExecutionDateTime: string
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    Permission: 'Create'
    ReadRefundAccount?: 'No' | 'Yes' | undefined
    SCASupportData?: OBSCASupportData1 | undefined
  }
  Risk: OBRisk1
}
type OBWriteInternationalScheduledConsentResponse6 = {
  Data: {
    Authorisation?:
      | { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string | undefined }
      | undefined
    Charges?:
      | {
          Amount: OBActiveOrHistoricCurrencyAndAmount
          ChargeBearer: OBChargeBearerType1Code
          Type: OBExternalPaymentChargeType1Code
        }[]
      | undefined
    ConsentId: string
    CreationDateTime: string
    CutOffDateTime?: string | undefined
    Debtor?: OBCashAccountDebtor4 | undefined
    ExchangeRateInformation?:
      | {
          ContractIdentification?: string | undefined
          ExchangeRate: number
          ExpirationDateTime?: string | undefined
          RateType: 'Actual' | 'Agreed' | 'Indicative'
          UnitCurrency: string
        }
      | undefined
    ExpectedExecutionDateTime?: string | undefined
    ExpectedSettlementDateTime?: string | undefined
    Initiation: {
      ChargeBearer?: OBChargeBearerType1Code | undefined
      Creditor?:
        | { Name?: string | undefined; PostalAddress?: OBPostalAddress6 | undefined }
        | undefined
      CreditorAccount: {
        Identification: Identification_0
        Name: string
        SchemeName: OBExternalAccountIdentification4Code
        SecondaryIdentification?: SecondaryIdentification | undefined
      }
      CreditorAgent?:
        | {
            Identification?: Identification_1 | undefined
            Name?: Name | undefined
            PostalAddress?: OBPostalAddress6 | undefined
            SchemeName?: OBExternalFinancialInstitutionIdentification4Code | undefined
          }
        | undefined
      CurrencyOfTransfer: string
      DebtorAccount?:
        | {
            Identification: Identification_0
            Name?: string | undefined
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        | undefined
      DestinationCountryCode?: string | undefined
      EndToEndIdentification?: string | undefined
      ExchangeRateInformation?:
        | {
            ContractIdentification?: string | undefined
            ExchangeRate?: number | undefined
            RateType: 'Actual' | 'Agreed' | 'Indicative'
            UnitCurrency: string
          }
        | undefined
      ExtendedPurpose?: string | undefined
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      InstructionIdentification: string
      InstructionPriority?: 'Normal' | 'Urgent' | undefined
      LocalInstrument?: OBExternalLocalInstrument1Code | undefined
      Purpose?: string | undefined
      RemittanceInformation?:
        | { Reference?: string | undefined; Unstructured?: string | undefined }
        | undefined
      RequestedExecutionDateTime: string
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    Permission: 'Create'
    ReadRefundAccount?: 'No' | 'Yes' | undefined
    SCASupportData?: OBSCASupportData1 | undefined
    Status: 'Authorised' | 'AwaitingAuthorisation' | 'Consumed' | 'Rejected'
    StatusUpdateDateTime: string
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
  Risk: OBRisk1
}
type OBWriteInternationalScheduled3 = {
  Data: {
    ConsentId: string
    Initiation: {
      ChargeBearer?: OBChargeBearerType1Code | undefined
      Creditor?:
        | { Name?: string | undefined; PostalAddress?: OBPostalAddress6 | undefined }
        | undefined
      CreditorAccount: {
        Identification: Identification_0
        Name: string
        SchemeName: OBExternalAccountIdentification4Code
        SecondaryIdentification?: SecondaryIdentification | undefined
      }
      CreditorAgent?:
        | {
            Identification?: Identification_1 | undefined
            Name?: Name | undefined
            PostalAddress?: OBPostalAddress6 | undefined
            SchemeName?: OBExternalFinancialInstitutionIdentification4Code | undefined
          }
        | undefined
      CurrencyOfTransfer: string
      DebtorAccount?:
        | {
            Identification: Identification_0
            Name?: string | undefined
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        | undefined
      DestinationCountryCode?: string | undefined
      EndToEndIdentification?: string | undefined
      ExchangeRateInformation?:
        | {
            ContractIdentification?: string | undefined
            ExchangeRate?: number | undefined
            RateType: 'Actual' | 'Agreed' | 'Indicative'
            UnitCurrency: string
          }
        | undefined
      ExtendedPurpose?: string | undefined
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      InstructionIdentification: string
      InstructionPriority?: 'Normal' | 'Urgent' | undefined
      LocalInstrument?: OBExternalLocalInstrument1Code | undefined
      Purpose?: string | undefined
      RemittanceInformation?:
        | { Reference?: string | undefined; Unstructured?: string | undefined }
        | undefined
      RequestedExecutionDateTime: string
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
  }
  Risk: OBRisk1
}
type OBWriteInternationalScheduledResponse6 = {
  Data: {
    Charges?:
      | {
          Amount: OBActiveOrHistoricCurrencyAndAmount
          ChargeBearer: OBChargeBearerType1Code
          Type: OBExternalPaymentChargeType1Code
        }[]
      | undefined
    ConsentId: string
    CreationDateTime: string
    Debtor?: OBCashAccountDebtor4 | undefined
    ExchangeRateInformation?:
      | {
          ContractIdentification?: string | undefined
          ExchangeRate: number
          ExpirationDateTime?: string | undefined
          RateType: 'Actual' | 'Agreed' | 'Indicative'
          UnitCurrency: string
        }
      | undefined
    ExpectedExecutionDateTime?: string | undefined
    ExpectedSettlementDateTime?: string | undefined
    Initiation: {
      ChargeBearer?: OBChargeBearerType1Code | undefined
      Creditor?:
        | { Name?: string | undefined; PostalAddress?: OBPostalAddress6 | undefined }
        | undefined
      CreditorAccount: {
        Identification: Identification_0
        Name: string
        SchemeName: OBExternalAccountIdentification4Code
        SecondaryIdentification?: SecondaryIdentification | undefined
      }
      CreditorAgent?:
        | {
            Identification?: Identification_1 | undefined
            Name?: Name | undefined
            PostalAddress?: OBPostalAddress6 | undefined
            SchemeName?: OBExternalFinancialInstitutionIdentification4Code | undefined
          }
        | undefined
      CurrencyOfTransfer: string
      DebtorAccount?:
        | {
            Identification: Identification_0
            Name?: string | undefined
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        | undefined
      DestinationCountryCode?: string | undefined
      EndToEndIdentification?: string | undefined
      ExchangeRateInformation?:
        | {
            ContractIdentification?: string | undefined
            ExchangeRate?: number | undefined
            RateType: 'Actual' | 'Agreed' | 'Indicative'
            UnitCurrency: string
          }
        | undefined
      ExtendedPurpose?: string | undefined
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      InstructionIdentification: string
      InstructionPriority?: 'Normal' | 'Urgent' | undefined
      LocalInstrument?: OBExternalLocalInstrument1Code | undefined
      Purpose?: string | undefined
      RemittanceInformation?:
        | { Reference?: string | undefined; Unstructured?: string | undefined }
        | undefined
      RequestedExecutionDateTime: string
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    InternationalScheduledPaymentId: string
    MultiAuthorisation?:
      | {
          ExpirationDateTime?: string | undefined
          LastUpdateDateTime?: string | undefined
          NumberReceived?: number | undefined
          NumberRequired?: number | undefined
          Status: 'Authorised' | 'AwaitingFurtherAuthorisation' | 'Rejected'
        }
      | undefined
    Refund?:
      | {
          Account: {
            Identification: Identification_0
            Name: string
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
          Agent?:
            | {
                Identification?: Identification_1 | undefined
                Name?: Name | undefined
                PostalAddress?: OBPostalAddress6 | undefined
                SchemeName?: OBExternalFinancialInstitutionIdentification4Code | undefined
              }
            | undefined
          Creditor?:
            | { Name?: string | undefined; PostalAddress?: OBPostalAddress6 | undefined }
            | undefined
        }
      | undefined
    Status: 'Cancelled' | 'InitiationCompleted' | 'InitiationFailed' | 'InitiationPending'
    StatusUpdateDateTime: string
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBWriteInternationalStandingOrderConsent6 = {
  Data: {
    Authorisation?:
      | { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string | undefined }
      | undefined
    Initiation: {
      ChargeBearer?: OBChargeBearerType1Code | undefined
      Creditor?:
        | { Name?: string | undefined; PostalAddress?: OBPostalAddress6 | undefined }
        | undefined
      CreditorAccount: {
        Identification: Identification_0
        Name: string
        SchemeName: OBExternalAccountIdentification4Code
        SecondaryIdentification?: SecondaryIdentification | undefined
      }
      CreditorAgent?:
        | {
            Identification?: string | undefined
            Name?: Name | undefined
            PostalAddress?: OBPostalAddress6 | undefined
            SchemeName?: OBExternalFinancialInstitutionIdentification4Code | undefined
          }
        | undefined
      CurrencyOfTransfer: string
      DebtorAccount?:
        | {
            Identification: Identification_0
            Name?: string | undefined
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        | undefined
      DestinationCountryCode?: string | undefined
      ExtendedPurpose?: string | undefined
      FinalPaymentDateTime?: string | undefined
      FirstPaymentDateTime: string
      Frequency: string
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      NumberOfPayments?: string | undefined
      Purpose?: string | undefined
      Reference?: string | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    Permission: 'Create'
    ReadRefundAccount?: 'No' | 'Yes' | undefined
    SCASupportData?: OBSCASupportData1 | undefined
  }
  Risk: OBRisk1
}
type OBWriteInternationalStandingOrderConsentResponse7 = {
  Data: {
    Authorisation?:
      | { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string | undefined }
      | undefined
    Charges?:
      | {
          Amount: OBActiveOrHistoricCurrencyAndAmount
          ChargeBearer: OBChargeBearerType1Code
          Type: OBExternalPaymentChargeType1Code
        }[]
      | undefined
    ConsentId: string
    CreationDateTime: string
    CutOffDateTime?: string | undefined
    Debtor?: OBCashAccountDebtor4 | undefined
    Initiation: {
      ChargeBearer?: OBChargeBearerType1Code | undefined
      Creditor?:
        | { Name?: string | undefined; PostalAddress?: OBPostalAddress6 | undefined }
        | undefined
      CreditorAccount: {
        Identification: Identification_0
        Name: string
        SchemeName: OBExternalAccountIdentification4Code
        SecondaryIdentification?: SecondaryIdentification | undefined
      }
      CreditorAgent?:
        | {
            Identification?: string | undefined
            Name?: Name | undefined
            PostalAddress?: OBPostalAddress6 | undefined
            SchemeName?: OBExternalFinancialInstitutionIdentification4Code | undefined
          }
        | undefined
      CurrencyOfTransfer: string
      DebtorAccount?:
        | {
            Identification: Identification_0
            Name?: string | undefined
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        | undefined
      DestinationCountryCode?: string | undefined
      ExtendedPurpose?: string | undefined
      FinalPaymentDateTime?: string | undefined
      FirstPaymentDateTime: string
      Frequency: string
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      NumberOfPayments?: string | undefined
      Purpose?: string | undefined
      Reference?: string | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    Permission: 'Create'
    ReadRefundAccount?: 'No' | 'Yes' | undefined
    SCASupportData?: OBSCASupportData1 | undefined
    Status: 'Authorised' | 'AwaitingAuthorisation' | 'Consumed' | 'Rejected'
    StatusUpdateDateTime: string
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
  Risk: OBRisk1
}
type OBWriteInternationalStandingOrder4 = {
  Data: {
    ConsentId: string
    Initiation: {
      ChargeBearer?: OBChargeBearerType1Code | undefined
      Creditor?:
        | { Name?: string | undefined; PostalAddress?: OBPostalAddress6 | undefined }
        | undefined
      CreditorAccount: {
        Identification: Identification_0
        Name: string
        SchemeName: OBExternalAccountIdentification4Code
        SecondaryIdentification?: SecondaryIdentification | undefined
      }
      CreditorAgent?:
        | {
            Identification?: string | undefined
            Name?: Name | undefined
            PostalAddress?: OBPostalAddress6 | undefined
            SchemeName?: OBExternalFinancialInstitutionIdentification4Code | undefined
          }
        | undefined
      CurrencyOfTransfer: string
      DebtorAccount?:
        | {
            Identification: Identification_0
            Name?: string | undefined
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        | undefined
      DestinationCountryCode?: string | undefined
      ExtendedPurpose?: string | undefined
      FinalPaymentDateTime?: string | undefined
      FirstPaymentDateTime: string
      Frequency: string
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      NumberOfPayments?: string | undefined
      Purpose?: string | undefined
      Reference?: string | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
  }
  Risk: OBRisk1
}
type OBWriteInternationalStandingOrderResponse7 = {
  Data: {
    Charges?:
      | {
          Amount: OBActiveOrHistoricCurrencyAndAmount
          ChargeBearer: OBChargeBearerType1Code
          Type: OBExternalPaymentChargeType1Code
        }[]
      | undefined
    ConsentId: string
    CreationDateTime: string
    Debtor?: OBCashAccountDebtor4 | undefined
    Initiation: {
      ChargeBearer?: OBChargeBearerType1Code | undefined
      Creditor?:
        | { Name?: string | undefined; PostalAddress?: OBPostalAddress6 | undefined }
        | undefined
      CreditorAccount: {
        Identification: Identification_0
        Name: string
        SchemeName: OBExternalAccountIdentification4Code
        SecondaryIdentification?: SecondaryIdentification | undefined
      }
      CreditorAgent?:
        | {
            Identification?: string | undefined
            Name?: Name | undefined
            PostalAddress?: OBPostalAddress6 | undefined
            SchemeName?: OBExternalFinancialInstitutionIdentification4Code | undefined
          }
        | undefined
      CurrencyOfTransfer: string
      DebtorAccount?:
        | {
            Identification: Identification_0
            Name?: string | undefined
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
        | undefined
      DestinationCountryCode?: string | undefined
      ExtendedPurpose?: string | undefined
      FinalPaymentDateTime?: string | undefined
      FirstPaymentDateTime: string
      Frequency: string
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      NumberOfPayments?: string | undefined
      Purpose?: string | undefined
      Reference?: string | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    InternationalStandingOrderId: string
    MultiAuthorisation?:
      | {
          ExpirationDateTime?: string | undefined
          LastUpdateDateTime?: string | undefined
          NumberReceived?: number | undefined
          NumberRequired?: number | undefined
          Status: 'Authorised' | 'AwaitingFurtherAuthorisation' | 'Rejected'
        }
      | undefined
    Refund?:
      | {
          Account: {
            Identification: Identification_0
            Name: string
            SchemeName: OBExternalAccountIdentification4Code
            SecondaryIdentification?: SecondaryIdentification | undefined
          }
          Agent?:
            | {
                Identification?: Identification_1 | undefined
                Name?: Name | undefined
                PostalAddress?: OBPostalAddress6 | undefined
                SchemeName?: OBExternalFinancialInstitutionIdentification4Code | undefined
              }
            | undefined
          Creditor?:
            | { Name?: string | undefined; PostalAddress?: OBPostalAddress6 | undefined }
            | undefined
        }
      | undefined
    Status: 'Cancelled' | 'InitiationCompleted' | 'InitiationFailed' | 'InitiationPending'
    StatusUpdateDateTime: string
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/domestic-payment-consents': {
      $post:
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticConsent4 }
            output: OBWriteDomesticConsentResponse5
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticConsent4 }
            output: OBWriteDomesticConsentResponse5
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticConsent4 }
            output: OBWriteDomesticConsentResponse5
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticConsent4 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticConsent4 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticConsent4 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticConsent4 }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticConsent4 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticConsent4 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticConsent4 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticConsent4 }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticConsent4 }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticConsent4 }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticConsent4 }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticConsent4 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticConsent4 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticConsent4 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/domestic-payment-consents/:ConsentId': {
      $get:
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteDomesticConsentResponse5
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteDomesticConsentResponse5
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteDomesticConsentResponse5
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/domestic-payment-consents/:ConsentId/funds-confirmation': {
      $get:
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteFundsConfirmationResponse1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteFundsConfirmationResponse1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteFundsConfirmationResponse1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/domestic-payments': {
      $post:
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomestic2 }
            output: OBWriteDomesticResponse5
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomestic2 }
            output: OBWriteDomesticResponse5
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomestic2 }
            output: OBWriteDomesticResponse5
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomestic2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomestic2 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomestic2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomestic2 }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomestic2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomestic2 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomestic2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomestic2 }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomestic2 }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomestic2 }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomestic2 }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomestic2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomestic2 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomestic2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/domestic-payments/:DomesticPaymentId': {
      $get:
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteDomesticResponse5
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteDomesticResponse5
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteDomesticResponse5
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/domestic-payments/:DomesticPaymentId/payment-details': {
      $get:
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWritePaymentDetailsResponse1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWritePaymentDetailsResponse1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWritePaymentDetailsResponse1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { DomesticPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/domestic-scheduled-payment-consents': {
      $post:
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduledConsent4 }
            output: OBWriteDomesticScheduledConsentResponse5
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduledConsent4 }
            output: OBWriteDomesticScheduledConsentResponse5
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduledConsent4 }
            output: OBWriteDomesticScheduledConsentResponse5
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduledConsent4 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduledConsent4 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduledConsent4 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduledConsent4 }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduledConsent4 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduledConsent4 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduledConsent4 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduledConsent4 }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduledConsent4 }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduledConsent4 }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduledConsent4 }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduledConsent4 }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduledConsent4 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduledConsent4 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduledConsent4 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/domestic-scheduled-payment-consents/:ConsentId': {
      $get:
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteDomesticScheduledConsentResponse5
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteDomesticScheduledConsentResponse5
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteDomesticScheduledConsentResponse5
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/domestic-scheduled-payments': {
      $post:
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduled2 }
            output: OBWriteDomesticScheduledResponse5
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduled2 }
            output: OBWriteDomesticScheduledResponse5
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduled2 }
            output: OBWriteDomesticScheduledResponse5
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduled2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduled2 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduled2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduled2 }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduled2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduled2 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduled2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduled2 }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduled2 }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduled2 }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduled2 }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduled2 }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduled2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduled2 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduled2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/domestic-scheduled-payments/:DomesticScheduledPaymentId': {
      $get:
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteDomesticScheduledResponse5
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteDomesticScheduledResponse5
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteDomesticScheduledResponse5
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/domestic-scheduled-payments/:DomesticScheduledPaymentId/payment-details': {
      $get:
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWritePaymentDetailsResponse1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWritePaymentDetailsResponse1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWritePaymentDetailsResponse1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { DomesticScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/domestic-standing-order-consents': {
      $post:
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrderConsent5 }
            output: OBWriteDomesticStandingOrderConsentResponse6
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrderConsent5 }
            output: OBWriteDomesticStandingOrderConsentResponse6
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrderConsent5 }
            output: OBWriteDomesticStandingOrderConsentResponse6
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrderConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrderConsent5 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrderConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrderConsent5 }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrderConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrderConsent5 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrderConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrderConsent5 }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrderConsent5 }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrderConsent5 }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrderConsent5 }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrderConsent5 }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrderConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrderConsent5 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrderConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/domestic-standing-order-consents/:ConsentId': {
      $get:
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteDomesticStandingOrderConsentResponse6
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteDomesticStandingOrderConsentResponse6
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteDomesticStandingOrderConsentResponse6
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/domestic-standing-orders': {
      $post:
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrder3 }
            output: OBWriteDomesticStandingOrderResponse6
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrder3 }
            output: OBWriteDomesticStandingOrderResponse6
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrder3 }
            output: OBWriteDomesticStandingOrderResponse6
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrder3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrder3 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrder3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrder3 }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrder3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrder3 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrder3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrder3 }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrder3 }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrder3 }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrder3 }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrder3 }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrder3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrder3 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrder3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/domestic-standing-orders/:DomesticStandingOrderId': {
      $get:
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteDomesticStandingOrderResponse6
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteDomesticStandingOrderResponse6
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteDomesticStandingOrderResponse6
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/domestic-standing-orders/:DomesticStandingOrderId/payment-details': {
      $get:
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWritePaymentDetailsResponse1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWritePaymentDetailsResponse1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWritePaymentDetailsResponse1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { DomesticStandingOrderId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/file-payment-consents': {
      $post:
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFileConsent3 }
            output: OBWriteFileConsentResponse4
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFileConsent3 }
            output: OBWriteFileConsentResponse4
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFileConsent3 }
            output: OBWriteFileConsentResponse4
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFileConsent3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFileConsent3 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFileConsent3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFileConsent3 }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFileConsent3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFileConsent3 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFileConsent3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFileConsent3 }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFileConsent3 }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFileConsent3 }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFileConsent3 }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFileConsent3 }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFileConsent3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFileConsent3 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFileConsent3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/file-payment-consents/:ConsentId': {
      $get:
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteFileConsentResponse4
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteFileConsentResponse4
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteFileConsentResponse4
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/file-payment-consents/:ConsentId/file': {
      $get:
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: File2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: File2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: File2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: File2 }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: File2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: File2 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: File2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: File2 }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: File2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: File2 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: File2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: File2 }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: File2 }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: File2 }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: File2 }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: File2 }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: File2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: File2 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: File2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/file-payments': {
      $post:
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFile2 }
            output: OBWriteFileResponse3
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFile2 }
            output: OBWriteFileResponse3
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFile2 }
            output: OBWriteFileResponse3
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFile2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFile2 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFile2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFile2 }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFile2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFile2 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFile2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFile2 }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFile2 }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFile2 }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFile2 }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFile2 }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFile2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFile2 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteFile2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/file-payments/:FilePaymentId': {
      $get:
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteFileResponse3
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteFileResponse3
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteFileResponse3
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/file-payments/:FilePaymentId/payment-details': {
      $get:
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWritePaymentDetailsResponse1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWritePaymentDetailsResponse1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWritePaymentDetailsResponse1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/file-payments/:FilePaymentId/report-file': {
      $get:
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: File2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: File2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: File2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { FilePaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/international-payment-consents': {
      $post:
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalConsent5 }
            output: OBWriteInternationalConsentResponse6
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalConsent5 }
            output: OBWriteInternationalConsentResponse6
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalConsent5 }
            output: OBWriteInternationalConsentResponse6
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalConsent5 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalConsent5 }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalConsent5 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalConsent5 }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalConsent5 }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalConsent5 }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalConsent5 }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalConsent5 }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalConsent5 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/international-payment-consents/:ConsentId': {
      $get:
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteInternationalConsentResponse6
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteInternationalConsentResponse6
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteInternationalConsentResponse6
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/international-payment-consents/:ConsentId/funds-confirmation': {
      $get:
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteFundsConfirmationResponse1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteFundsConfirmationResponse1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteFundsConfirmationResponse1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/international-payments': {
      $post:
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternational3 }
            output: OBWriteInternationalResponse5
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternational3 }
            output: OBWriteInternationalResponse5
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternational3 }
            output: OBWriteInternationalResponse5
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternational3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternational3 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternational3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternational3 }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternational3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternational3 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternational3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternational3 }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternational3 }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternational3 }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternational3 }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternational3 }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternational3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternational3 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternational3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/international-payments/:InternationalPaymentId': {
      $get:
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteInternationalResponse5
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteInternationalResponse5
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteInternationalResponse5
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/international-payments/:InternationalPaymentId/payment-details': {
      $get:
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWritePaymentDetailsResponse1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWritePaymentDetailsResponse1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWritePaymentDetailsResponse1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { InternationalPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/international-scheduled-payment-consents': {
      $post:
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduledConsent5 }
            output: OBWriteInternationalScheduledConsentResponse6
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduledConsent5 }
            output: OBWriteInternationalScheduledConsentResponse6
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduledConsent5 }
            output: OBWriteInternationalScheduledConsentResponse6
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduledConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduledConsent5 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduledConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduledConsent5 }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduledConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduledConsent5 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduledConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduledConsent5 }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduledConsent5 }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduledConsent5 }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduledConsent5 }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduledConsent5 }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduledConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduledConsent5 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduledConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/international-scheduled-payment-consents/:ConsentId': {
      $get:
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteInternationalScheduledConsentResponse6
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteInternationalScheduledConsentResponse6
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteInternationalScheduledConsentResponse6
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/international-scheduled-payment-consents/:ConsentId/funds-confirmation': {
      $get:
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteFundsConfirmationResponse1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteFundsConfirmationResponse1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteFundsConfirmationResponse1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/international-scheduled-payments': {
      $post:
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduled3 }
            output: OBWriteInternationalScheduledResponse6
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduled3 }
            output: OBWriteInternationalScheduledResponse6
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduled3 }
            output: OBWriteInternationalScheduledResponse6
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduled3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduled3 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduled3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduled3 }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduled3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduled3 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduled3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduled3 }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduled3 }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduled3 }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduled3 }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduled3 }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduled3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduled3 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduled3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/international-scheduled-payments/:InternationalScheduledPaymentId': {
      $get:
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteInternationalScheduledResponse6
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteInternationalScheduledResponse6
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteInternationalScheduledResponse6
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/international-scheduled-payments/:InternationalScheduledPaymentId/payment-details': {
      $get:
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWritePaymentDetailsResponse1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWritePaymentDetailsResponse1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWritePaymentDetailsResponse1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { InternationalScheduledPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/international-standing-order-consents': {
      $post:
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrderConsent6 }
            output: OBWriteInternationalStandingOrderConsentResponse7
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrderConsent6 }
            output: OBWriteInternationalStandingOrderConsentResponse7
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrderConsent6 }
            output: OBWriteInternationalStandingOrderConsentResponse7
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrderConsent6 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrderConsent6 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrderConsent6 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrderConsent6 }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrderConsent6 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrderConsent6 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrderConsent6 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrderConsent6 }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrderConsent6 }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrderConsent6 }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrderConsent6 }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrderConsent6 }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrderConsent6 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrderConsent6 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrderConsent6 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/international-standing-order-consents/:ConsentId': {
      $get:
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteInternationalStandingOrderConsentResponse7
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteInternationalStandingOrderConsentResponse7
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteInternationalStandingOrderConsentResponse7
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/international-standing-orders': {
      $post:
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrder4 }
            output: OBWriteInternationalStandingOrderResponse7
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrder4 }
            output: OBWriteInternationalStandingOrderResponse7
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrder4 }
            output: OBWriteInternationalStandingOrderResponse7
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrder4 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrder4 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrder4 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrder4 }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrder4 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrder4 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrder4 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrder4 }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrder4 }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrder4 }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrder4 }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrder4 }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrder4 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrder4 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-idempotency-key': string
                'x-jws-signature': string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrder4 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/international-standing-orders/:InternationalStandingOrderPaymentId': {
      $get:
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteInternationalStandingOrderResponse7
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteInternationalStandingOrderResponse7
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWriteInternationalStandingOrderResponse7
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/international-standing-orders/:InternationalStandingOrderPaymentId/payment-details': {
      $get:
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWritePaymentDetailsResponse1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWritePaymentDetailsResponse1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBWritePaymentDetailsResponse1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { InternationalStandingOrderPaymentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  },
  '/'
>
export default routes
