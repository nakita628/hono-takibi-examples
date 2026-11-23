type OBRisk2 = {}
type OBReadConsent1 = {
  Data: {
    ExpirationDateTime?: string | undefined
    Permissions: (
      | 'ReadAccountsBasic'
      | 'ReadAccountsDetail'
      | 'ReadBalances'
      | 'ReadBeneficiariesBasic'
      | 'ReadBeneficiariesDetail'
      | 'ReadDirectDebits'
      | 'ReadOffers'
      | 'ReadPAN'
      | 'ReadParty'
      | 'ReadPartyPSU'
      | 'ReadProducts'
      | 'ReadScheduledPaymentsBasic'
      | 'ReadScheduledPaymentsDetail'
      | 'ReadStandingOrdersBasic'
      | 'ReadStandingOrdersDetail'
      | 'ReadStatementsBasic'
      | 'ReadStatementsDetail'
      | 'ReadTransactionsBasic'
      | 'ReadTransactionsCredits'
      | 'ReadTransactionsDebits'
      | 'ReadTransactionsDetail'
    )[]
    TransactionFromDateTime?: string | undefined
    TransactionToDateTime?: string | undefined
  }
  Risk: OBRisk2
}
type CreationDateTime = string
type StatusUpdateDateTime = string
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
type OBReadConsentResponse1 = {
  Data: {
    ConsentId: string
    CreationDateTime: CreationDateTime
    ExpirationDateTime?: string | undefined
    Permissions: (
      | 'ReadAccountsBasic'
      | 'ReadAccountsDetail'
      | 'ReadBalances'
      | 'ReadBeneficiariesBasic'
      | 'ReadBeneficiariesDetail'
      | 'ReadDirectDebits'
      | 'ReadOffers'
      | 'ReadPAN'
      | 'ReadParty'
      | 'ReadPartyPSU'
      | 'ReadProducts'
      | 'ReadScheduledPaymentsBasic'
      | 'ReadScheduledPaymentsDetail'
      | 'ReadStandingOrdersBasic'
      | 'ReadStandingOrdersDetail'
      | 'ReadStatementsBasic'
      | 'ReadStatementsDetail'
      | 'ReadTransactionsBasic'
      | 'ReadTransactionsCredits'
      | 'ReadTransactionsDebits'
      | 'ReadTransactionsDetail'
    )[]
    Status: 'Authorised' | 'AwaitingAuthorisation' | 'Rejected' | 'Revoked'
    StatusUpdateDateTime: StatusUpdateDateTime
    TransactionFromDateTime?: string | undefined
    TransactionToDateTime?: string | undefined
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
  Risk: OBRisk2
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
type Identification_0 = string
type Name_0 = string
type OBExternalAccountIdentification4Code = string
type SecondaryIdentification = string
type AccountId = string
type OBExternalAccountSubType1Code =
  | 'ChargeCard'
  | 'CreditCard'
  | 'CurrentAccount'
  | 'EMoney'
  | 'Loan'
  | 'Mortgage'
  | 'PrePaidCard'
  | 'Savings'
type OBExternalAccountType1Code = 'Business' | 'Personal'
type ActiveOrHistoricCurrencyCode_0 = string
type Description_0 = string
type MaturityDate = string
type Nickname = string
type OpeningDate = string
type Identification_1 = string
type OBExternalFinancialInstitutionIdentification4Code = string
type OBBranchAndFinancialInstitutionIdentification5_0 = {
  Identification: Identification_1
  SchemeName: OBExternalFinancialInstitutionIdentification4Code
}
type OBAccountStatus1Code = 'Deleted' | 'Disabled' | 'Enabled' | 'Pending' | 'ProForma'
type OBExternalSwitchStatusCode = string
type OBAccount6 = {
  Account?:
    | {
        Identification: Identification_0
        Name?: Name_0 | undefined
        SchemeName: OBExternalAccountIdentification4Code
        SecondaryIdentification?: SecondaryIdentification | undefined
      }[]
    | undefined
  AccountId: AccountId
  AccountSubType?: OBExternalAccountSubType1Code | undefined
  AccountType?: OBExternalAccountType1Code | undefined
  Currency?: ActiveOrHistoricCurrencyCode_0 | undefined
  Description?: Description_0 | undefined
  MaturityDate?: MaturityDate | undefined
  Nickname?: Nickname | undefined
  OpeningDate?: OpeningDate | undefined
  Servicer?: OBBranchAndFinancialInstitutionIdentification5_0 | undefined
  Status?: OBAccountStatus1Code | undefined
  StatusUpdateDateTime?: StatusUpdateDateTime | undefined
  SwitchStatus?: OBExternalSwitchStatusCode | undefined
}
type OBReadAccount6 = {
  Data: { Account?: OBAccount6[] | undefined }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBActiveCurrencyAndAmountSimpleType = string
type ActiveOrHistoricCurrencyCode_1 = string
type OBCreditDebitCode_2 = 'Credit' | 'Debit'
type OBBalanceType1Code =
  | 'ClosingAvailable'
  | 'ClosingBooked'
  | 'ClosingCleared'
  | 'Expected'
  | 'ForwardAvailable'
  | 'Information'
  | 'InterimAvailable'
  | 'InterimBooked'
  | 'InterimCleared'
  | 'OpeningAvailable'
  | 'OpeningBooked'
  | 'OpeningCleared'
  | 'PreviouslyClosedBooked'
type OBReadBalance1 = {
  Data: {
    Balance: {
      AccountId: AccountId
      Amount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode_1
      }
      CreditDebitIndicator: OBCreditDebitCode_2
      CreditLine?:
        | {
            Amount?:
              | {
                  Amount: OBActiveCurrencyAndAmountSimpleType
                  Currency: ActiveOrHistoricCurrencyCode_1
                }
              | undefined
            Included: boolean
            Type?: 'Available' | 'Credit' | 'Emergency' | 'Pre-Agreed' | 'Temporary' | undefined
          }[]
        | undefined
      DateTime: string
      Type: OBBalanceType1Code
    }[]
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type BeneficiaryId = string
type OBBeneficiaryType1Code = 'Trusted' | 'Ordinary'
type OBCashAccount5_0 = {
  Identification: Identification_0
  Name?: Name_0 | undefined
  SchemeName: OBExternalAccountIdentification4Code
  SecondaryIdentification?: SecondaryIdentification | undefined
}
type Name_1 = string
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
type PostCode = string
type StreetName = string
type TownName = string
type OBPostalAddress6 = {
  AddressLine?: string[] | undefined
  AddressType?: OBAddressTypeCode | undefined
  BuildingNumber?: BuildingNumber | undefined
  Country?: string | undefined
  CountrySubDivision?: string | undefined
  Department?: string | undefined
  PostCode?: PostCode | undefined
  StreetName?: StreetName | undefined
  SubDepartment?: string | undefined
  TownName?: TownName | undefined
}
type OBBranchAndFinancialInstitutionIdentification6_0 = {
  Identification?: Identification_1 | undefined
  Name?: Name_1 | undefined
  PostalAddress?: OBPostalAddress6 | undefined
  SchemeName?: OBExternalFinancialInstitutionIdentification4Code | undefined
}
type Reference = string
type OBSupplementaryData1 = { [x: string]: unknown }
type OBBeneficiary5 = {
  AccountId?: AccountId | undefined
  BeneficiaryId?: BeneficiaryId | undefined
  BeneficiaryType?: OBBeneficiaryType1Code | undefined
  CreditorAccount?: OBCashAccount5_0 | undefined
  CreditorAgent?: OBBranchAndFinancialInstitutionIdentification6_0 | undefined
  Reference?: Reference | undefined
  SupplementaryData?: OBSupplementaryData1 | undefined
}
type OBReadBeneficiary5 = {
  Data: { Beneficiary?: OBBeneficiary5[] | undefined }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type DirectDebitId = string
type OBExternalDirectDebitStatus1Code = 'Active' | 'Inactive'
type MandateIdentification = string
type Name_2 = string
type OBActiveOrHistoricCurrencyAndAmount_0 = {
  Amount: OBActiveCurrencyAndAmountSimpleType
  Currency: ActiveOrHistoricCurrencyCode_1
}
type PreviousPaymentDateTime = string
type OBReadDirectDebit2 = {
  Data: {
    DirectDebit?:
      | {
          AccountId: AccountId
          DirectDebitId?: DirectDebitId | undefined
          DirectDebitStatusCode?: OBExternalDirectDebitStatus1Code | undefined
          Frequency?: string | undefined
          MandateIdentification: MandateIdentification
          Name: Name_2
          PreviousPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount_0 | undefined
          PreviousPaymentDateTime?: PreviousPaymentDateTime | undefined
        }[]
      | undefined
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBReadOffer1 = {
  Data: {
    Offer?:
      | {
          AccountId: AccountId
          Amount?:
            | {
                Amount: OBActiveCurrencyAndAmountSimpleType
                Currency: ActiveOrHistoricCurrencyCode_1
              }
            | undefined
          Description?: string | undefined
          EndDateTime?: string | undefined
          Fee?:
            | {
                Amount: OBActiveCurrencyAndAmountSimpleType
                Currency: ActiveOrHistoricCurrencyCode_1
              }
            | undefined
          OfferId?: string | undefined
          OfferType?:
            | 'BalanceTransfer'
            | 'LimitIncrease'
            | 'MoneyTransfer'
            | 'Other'
            | 'PromotionalRate'
            | undefined
          Rate?: string | undefined
          StartDateTime?: string | undefined
          Term?: string | undefined
          URL?: string | undefined
          Value?: number | undefined
        }[]
      | undefined
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBExternalAccountRole1Code = string
type CountryCode = string
type CountrySubDivision = string
type EmailAddress = string
type FullLegalName = string
type OBExternalLegalStructureType1Code = string
type PhoneNumber_1 = string
type Name_3 = string
type PartyId = string
type PartyNumber = string
type OBExternalPartyType1Code = 'Delegate' | 'Joint' | 'Sole'
type PhoneNumber_0 = string
type OBPartyRelationships1 = { Account?: { Id: string; Related: string } | undefined }
type OBParty2 = {
  AccountRole?: OBExternalAccountRole1Code | undefined
  Address?:
    | {
        AddressLine?: string[] | undefined
        AddressType?: OBAddressTypeCode | undefined
        BuildingNumber?: BuildingNumber | undefined
        Country: CountryCode
        CountrySubDivision?: CountrySubDivision | undefined
        PostCode?: PostCode | undefined
        StreetName?: StreetName | undefined
        TownName?: TownName | undefined
      }[]
    | undefined
  BeneficialOwnership?: boolean | undefined
  EmailAddress?: EmailAddress | undefined
  FullLegalName?: FullLegalName | undefined
  LegalStructure?: OBExternalLegalStructureType1Code | undefined
  Mobile?: PhoneNumber_1 | undefined
  Name?: Name_3 | undefined
  PartyId: PartyId
  PartyNumber?: PartyNumber | undefined
  PartyType?: OBExternalPartyType1Code | undefined
  Phone?: PhoneNumber_0 | undefined
  Relationships?: OBPartyRelationships1 | undefined
}
type OBReadParty3 = {
  Data: { Party?: OBParty2[] | undefined }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBReadParty2 = {
  Data: { Party?: OBParty2 | undefined }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBBCAData1 = {
  CreditInterest?:
    | {
        TierBandSet: {
          CalculationMethod?: 'Compound' | 'SimpleInterest' | undefined
          Destination: 'PayAway' | 'SelfCredit'
          Notes?: string[] | undefined
          TierBand: {
            AER: string
            ApplicationFrequency:
              | 'Daily'
              | 'HalfYearly'
              | 'Monthly'
              | 'Other'
              | 'Quarterly'
              | 'PerStatementDate'
              | 'Weekly'
              | 'Yearly'
            BankInterestRate?: string | undefined
            BankInterestRateType?: 'Gross' | 'Other' | undefined
            CalculationFrequency?:
              | 'Daily'
              | 'HalfYearly'
              | 'Monthly'
              | 'Other'
              | 'Quarterly'
              | 'PerStatementDate'
              | 'Weekly'
              | 'Yearly'
              | undefined
            DepositInterestAppliedCoverage?: 'Banded' | 'Tiered' | 'Whole' | undefined
            FixedVariableInterestRateType: 'Fixed' | 'Variable'
            Identification?: string | undefined
            Notes?: string[] | undefined
            OtherApplicationFrequency?:
              | { Code?: string | undefined; Description: string; Name: string }
              | undefined
            OtherBankInterestType?:
              | { Code?: string | undefined; Description: string; Name: string }
              | undefined
            OtherCalculationFrequency?:
              | { Code?: string | undefined; Description: string; Name: string }
              | undefined
            TierValueMaximum?: string | undefined
            TierValueMinimum: string
          }[]
          TierBandMethod: 'Banded' | 'Tiered' | 'Whole'
        }[]
      }
    | undefined
  OtherFeesCharges?:
    | {
        FeeChargeCap?:
          | {
              CappingPeriod?:
                | 'Day'
                | 'Half Year'
                | 'Month'
                | 'Quarter'
                | 'Week'
                | 'Year'
                | undefined
              FeeCapAmount?: string | undefined
              FeeCapOccurrence?: number | undefined
              FeeType: (
                | 'Other'
                | 'ServiceCAccountFee'
                | 'ServiceCAccountFeeMonthly'
                | 'ServiceCAccountFeeQuarterly'
                | 'ServiceCFixedTariff'
                | 'ServiceCBusiDepAccBreakage'
                | 'ServiceCMinimumMonthlyFee'
                | 'ServiceCOther'
              )[]
              MinMaxType: 'Minimum' | 'Maximum'
              Notes?: string[] | undefined
              OtherFeeType?:
                | { Code?: string | undefined; Description: string; Name: string }[]
                | undefined
            }[]
          | undefined
        FeeChargeDetail: {
          ApplicationFrequency:
            | 'OnClosing'
            | 'OnOpening'
            | 'ChargingPeriod'
            | 'Daily'
            | 'PerItem'
            | 'Monthly'
            | 'OnAnniversary'
            | 'Other'
            | 'PerHundredPounds'
            | 'PerHour'
            | 'PerOccurrence'
            | 'PerSheet'
            | 'PerTransaction'
            | 'PerTransactionAmount'
            | 'PerTransactionPercentage'
            | 'Quarterly'
            | 'SixMonthly'
            | 'StatementMonthly'
            | 'Weekly'
            | 'Yearly'
          CalculationFrequency?:
            | 'OnClosing'
            | 'OnOpening'
            | 'ChargingPeriod'
            | 'Daily'
            | 'PerItem'
            | 'Monthly'
            | 'OnAnniversary'
            | 'Other'
            | 'PerHundredPounds'
            | 'PerHour'
            | 'PerOccurrence'
            | 'PerSheet'
            | 'PerTransaction'
            | 'PerTransactionAmount'
            | 'PerTransactionPercentage'
            | 'Quarterly'
            | 'SixMonthly'
            | 'StatementMonthly'
            | 'Weekly'
            | 'Yearly'
            | undefined
          FeeAmount?: string | undefined
          FeeApplicableRange?:
            | {
                MaximumAmount?: string | undefined
                MaximumRate?: string | undefined
                MinimumAmount?: string | undefined
                MinimumRate?: string | undefined
              }
            | undefined
          FeeCategory: 'Other' | 'Servicing'
          FeeChargeCap?:
            | {
                CappingPeriod?:
                  | 'Day'
                  | 'Half Year'
                  | 'Month'
                  | 'Quarter'
                  | 'Week'
                  | 'Year'
                  | undefined
                FeeCapAmount?: string | undefined
                FeeCapOccurrence?: number | undefined
                FeeType: (
                  | 'Other'
                  | 'ServiceCAccountFee'
                  | 'ServiceCAccountFeeMonthly'
                  | 'ServiceCAccountFeeQuarterly'
                  | 'ServiceCFixedTariff'
                  | 'ServiceCBusiDepAccBreakage'
                  | 'ServiceCMinimumMonthlyFee'
                  | 'ServiceCOther'
                )[]
                MinMaxType: 'Minimum' | 'Maximum'
                Notes?: string[] | undefined
                OtherFeeType?:
                  | { Code?: string | undefined; Description: string; Name: string }[]
                  | undefined
              }[]
            | undefined
          FeeRate?: string | undefined
          FeeRateType?: 'Gross' | 'Other' | undefined
          FeeType:
            | 'Other'
            | 'ServiceCAccountFee'
            | 'ServiceCAccountFeeMonthly'
            | 'ServiceCAccountFeeQuarterly'
            | 'ServiceCFixedTariff'
            | 'ServiceCBusiDepAccBreakage'
            | 'ServiceCMinimumMonthlyFee'
            | 'ServiceCOther'
          NegotiableIndicator?: boolean | undefined
          Notes?: string[] | undefined
          OtherApplicationFrequency?:
            | { Code?: string | undefined; Description: string; Name: string }
            | undefined
          OtherCalculationFrequency?:
            | { Code?: string | undefined; Description: string; Name: string }
            | undefined
          OtherFeeCategoryType?:
            | { Code?: string | undefined; Description: string; Name: string }
            | undefined
          OtherFeeRateType?:
            | { Code?: string | undefined; Description: string; Name: string }
            | undefined
          OtherFeeType?:
            | {
                Code?: string | undefined
                Description: string
                FeeCategory: 'Other' | 'Servicing'
                Name: string
              }
            | undefined
        }[]
        OtherTariffType?:
          | { Code?: string | undefined; Description: string; Name: string }
          | undefined
        TariffName?: string | undefined
        TariffType?: 'Electronic' | 'Mixed' | 'Other' | undefined
      }[]
    | undefined
  Overdraft?:
    | {
        Notes?: string[] | undefined
        OverdraftTierBandSet: {
          AuthorisedIndicator?: boolean | undefined
          BufferAmount?: string | undefined
          Identification?: string | undefined
          Notes?: string[] | undefined
          OverdraftFeesCharges?:
            | {
                OverdraftFeeChargeCap?:
                  | {
                      CappingPeriod?:
                        | 'Day'
                        | 'Half Year'
                        | 'Month'
                        | 'Quarter'
                        | 'Week'
                        | 'Year'
                        | undefined
                      FeeCapAmount?: string | undefined
                      FeeCapOccurrence?: number | undefined
                      FeeType: (
                        | 'ArrangedOverdraft'
                        | 'AnnualReview'
                        | 'EmergencyBorrowing'
                        | 'BorrowingItem'
                        | 'OverdraftRenewal'
                        | 'OverdraftSetup'
                        | 'Surcharge'
                        | 'TempOverdraft'
                        | 'UnauthorisedBorrowing'
                        | 'UnauthorisedPaidTrans'
                        | 'Other'
                        | 'UnauthorisedUnpaidTrans'
                      )[]
                      MinMaxType: 'Minimum' | 'Maximum'
                      Notes?: string[] | undefined
                      OtherFeeType?:
                        | { Code?: string | undefined; Description: string; Name: string }[]
                        | undefined
                    }[]
                  | undefined
                OverdraftFeeChargeDetail: {
                  ApplicationFrequency:
                    | 'OnClosing'
                    | 'OnOpening'
                    | 'ChargingPeriod'
                    | 'Daily'
                    | 'PerItem'
                    | 'Monthly'
                    | 'OnAnniversary'
                    | 'Other'
                    | 'PerHundredPounds'
                    | 'PerHour'
                    | 'PerOccurrence'
                    | 'PerSheet'
                    | 'PerTransaction'
                    | 'PerTransactionAmount'
                    | 'PerTransactionPercentage'
                    | 'Quarterly'
                    | 'SixMonthly'
                    | 'StatementMonthly'
                    | 'Weekly'
                    | 'Yearly'
                  CalculationFrequency?:
                    | 'OnClosing'
                    | 'OnOpening'
                    | 'ChargingPeriod'
                    | 'Daily'
                    | 'PerItem'
                    | 'Monthly'
                    | 'OnAnniversary'
                    | 'Other'
                    | 'PerHundredPounds'
                    | 'PerHour'
                    | 'PerOccurrence'
                    | 'PerSheet'
                    | 'PerTransaction'
                    | 'PerTransactionAmount'
                    | 'PerTransactionPercentage'
                    | 'Quarterly'
                    | 'SixMonthly'
                    | 'StatementMonthly'
                    | 'Weekly'
                    | 'Yearly'
                    | undefined
                  FeeAmount?: string | undefined
                  FeeRate?: string | undefined
                  FeeRateType?: 'Gross' | 'Other' | undefined
                  FeeType:
                    | 'ArrangedOverdraft'
                    | 'AnnualReview'
                    | 'EmergencyBorrowing'
                    | 'BorrowingItem'
                    | 'OverdraftRenewal'
                    | 'OverdraftSetup'
                    | 'Surcharge'
                    | 'TempOverdraft'
                    | 'UnauthorisedBorrowing'
                    | 'UnauthorisedPaidTrans'
                    | 'Other'
                    | 'UnauthorisedUnpaidTrans'
                  IncrementalBorrowingAmount?: string | undefined
                  NegotiableIndicator?: boolean | undefined
                  Notes?: string[] | undefined
                  OtherApplicationFrequency?:
                    | { Code?: string | undefined; Description: string; Name: string }
                    | undefined
                  OtherCalculationFrequency?:
                    | { Code?: string | undefined; Description: string; Name: string }
                    | undefined
                  OtherFeeRateType?:
                    | { Code?: string | undefined; Description: string; Name: string }
                    | undefined
                  OtherFeeType?:
                    | { Code?: string | undefined; Description: string; Name: string }
                    | undefined
                  OverdraftControlIndicator?: boolean | undefined
                  OverdraftFeeChargeCap?:
                    | {
                        CappingPeriod?:
                          | 'Day'
                          | 'Half Year'
                          | 'Month'
                          | 'Quarter'
                          | 'Week'
                          | 'Year'
                          | undefined
                        FeeCapAmount?: string | undefined
                        FeeCapOccurrence?: number | undefined
                        FeeType: (
                          | 'ArrangedOverdraft'
                          | 'AnnualReview'
                          | 'EmergencyBorrowing'
                          | 'BorrowingItem'
                          | 'OverdraftRenewal'
                          | 'OverdraftSetup'
                          | 'Surcharge'
                          | 'TempOverdraft'
                          | 'UnauthorisedBorrowing'
                          | 'UnauthorisedPaidTrans'
                          | 'Other'
                          | 'UnauthorisedUnpaidTrans'
                        )[]
                        MinMaxType: 'Minimum' | 'Maximum'
                        Notes?: string[] | undefined
                        OtherFeeType?:
                          | { Code?: string | undefined; Description: string; Name: string }[]
                          | undefined
                      }[]
                    | undefined
                }[]
              }[]
            | undefined
          OverdraftTierBand: {
            AgreementLengthMax?: number | undefined
            AgreementLengthMin?: number | undefined
            AgreementPeriod?:
              | 'Day'
              | 'Half Year'
              | 'Month'
              | 'Quarter'
              | 'Week'
              | 'Year'
              | undefined
            BankGuaranteedIndicator?: boolean | undefined
            EAR?: string | undefined
            Identification?: string | undefined
            Notes?: string[] | undefined
            OverdraftFeesCharges?:
              | {
                  OverdraftFeeChargeCap?:
                    | {
                        CappingPeriod?:
                          | 'Day'
                          | 'Half Year'
                          | 'Month'
                          | 'Quarter'
                          | 'Week'
                          | 'Year'
                          | undefined
                        FeeCapAmount?: string | undefined
                        FeeCapOccurrence?: number | undefined
                        FeeType: (
                          | 'ArrangedOverdraft'
                          | 'AnnualReview'
                          | 'EmergencyBorrowing'
                          | 'BorrowingItem'
                          | 'OverdraftRenewal'
                          | 'OverdraftSetup'
                          | 'Surcharge'
                          | 'TempOverdraft'
                          | 'UnauthorisedBorrowing'
                          | 'UnauthorisedPaidTrans'
                          | 'Other'
                          | 'UnauthorisedUnpaidTrans'
                        )[]
                        MinMaxType: 'Minimum' | 'Maximum'
                        Notes?: string[] | undefined
                        OtherFeeType?:
                          | { Code?: string | undefined; Description: string; Name: string }[]
                          | undefined
                      }[]
                    | undefined
                  OverdraftFeeChargeDetail: {
                    ApplicationFrequency:
                      | 'OnClosing'
                      | 'OnOpening'
                      | 'ChargingPeriod'
                      | 'Daily'
                      | 'PerItem'
                      | 'Monthly'
                      | 'OnAnniversary'
                      | 'Other'
                      | 'PerHundredPounds'
                      | 'PerHour'
                      | 'PerOccurrence'
                      | 'PerSheet'
                      | 'PerTransaction'
                      | 'PerTransactionAmount'
                      | 'PerTransactionPercentage'
                      | 'Quarterly'
                      | 'SixMonthly'
                      | 'StatementMonthly'
                      | 'Weekly'
                      | 'Yearly'
                    CalculationFrequency?:
                      | 'OnClosing'
                      | 'OnOpening'
                      | 'ChargingPeriod'
                      | 'Daily'
                      | 'PerItem'
                      | 'Monthly'
                      | 'OnAnniversary'
                      | 'Other'
                      | 'PerHundredPounds'
                      | 'PerHour'
                      | 'PerOccurrence'
                      | 'PerSheet'
                      | 'PerTransaction'
                      | 'PerTransactionAmount'
                      | 'PerTransactionPercentage'
                      | 'Quarterly'
                      | 'SixMonthly'
                      | 'StatementMonthly'
                      | 'Weekly'
                      | 'Yearly'
                      | undefined
                    FeeAmount?: string | undefined
                    FeeRate?: string | undefined
                    FeeRateType?: 'Gross' | 'Other' | undefined
                    FeeType:
                      | 'ArrangedOverdraft'
                      | 'AnnualReview'
                      | 'EmergencyBorrowing'
                      | 'BorrowingItem'
                      | 'OverdraftRenewal'
                      | 'OverdraftSetup'
                      | 'Surcharge'
                      | 'TempOverdraft'
                      | 'UnauthorisedBorrowing'
                      | 'UnauthorisedPaidTrans'
                      | 'Other'
                      | 'UnauthorisedUnpaidTrans'
                    IncrementalBorrowingAmount?: string | undefined
                    NegotiableIndicator?: boolean | undefined
                    Notes?: string[] | undefined
                    OtherApplicationFrequency?:
                      | { Code?: string | undefined; Description: string; Name: string }
                      | undefined
                    OtherCalculationFrequency?:
                      | { Code?: string | undefined; Description: string; Name: string }
                      | undefined
                    OtherFeeRateType?:
                      | { Code?: string | undefined; Description: string; Name: string }
                      | undefined
                    OtherFeeType?:
                      | { Code?: string | undefined; Description: string; Name: string }
                      | undefined
                    OverdraftControlIndicator?: boolean | undefined
                    OverdraftFeeChargeCap?:
                      | {
                          CappingPeriod?:
                            | 'Day'
                            | 'Half Year'
                            | 'Month'
                            | 'Quarter'
                            | 'Week'
                            | 'Year'
                            | undefined
                          FeeCapAmount?: string | undefined
                          FeeCapOccurrence?: number | undefined
                          FeeType: (
                            | 'ArrangedOverdraft'
                            | 'AnnualReview'
                            | 'EmergencyBorrowing'
                            | 'BorrowingItem'
                            | 'OverdraftRenewal'
                            | 'OverdraftSetup'
                            | 'Surcharge'
                            | 'TempOverdraft'
                            | 'UnauthorisedBorrowing'
                            | 'UnauthorisedPaidTrans'
                            | 'Other'
                            | 'UnauthorisedUnpaidTrans'
                          )[]
                          MinMaxType: 'Minimum' | 'Maximum'
                          Notes?: string[] | undefined
                          OtherFeeType?:
                            | { Code?: string | undefined; Description: string; Name: string }[]
                            | undefined
                        }[]
                      | undefined
                  }[]
                }[]
              | undefined
            OverdraftInterestChargingCoverage?: 'Banded' | 'Tiered' | 'Whole' | undefined
            RepresentativeAPR?: string | undefined
            TierValueMax?: string | undefined
            TierValueMin: string
          }[]
          OverdraftType?: 'Committed' | 'OnDemand' | undefined
          TierBandMethod: 'Banded' | 'Tiered' | 'Whole'
        }[]
      }
    | undefined
  ProductDetails?:
    | {
        FeeFreeLength?: number | undefined
        FeeFreeLengthPeriod?:
          | 'Day'
          | 'Half Year'
          | 'Month'
          | 'Quarter'
          | 'Week'
          | 'Year'
          | undefined
        Notes?: string[] | undefined
        Segment?:
          | (
              | 'ClientAccount'
              | 'Standard'
              | 'NonCommercialChaitiesClbSoc'
              | 'NonCommercialPublicAuthGovt'
              | 'Religious'
              | 'SectorSpecific'
              | 'Startup'
              | 'Switcher'
            )[]
          | undefined
      }
    | undefined
}
type OBInterestCalculationMethod1Code = 'ITCO' | 'ITOT' | 'ITSI'
type OBCodeMnemonic = string
type Description_3 = string
type Name_4 = string
type OBOtherCodeType1_0 = {
  Code?: OBCodeMnemonic | undefined
  Description: Description_3
  Name: Name_4
}
type OBInterestFixedVariableType1Code = 'INFI' | 'INVA'
type OBOtherCodeType1_1 = {
  Code?: OBCodeMnemonic | undefined
  Description: Description_3
  Name: Name_4
}
type OBOtherCodeType1_2 = {
  Code?: OBCodeMnemonic | undefined
  Description: Description_3
  Name: Name_4
}
type OBFeeFrequency1Code_4 =
  | 'FEAC'
  | 'FEAO'
  | 'FECP'
  | 'FEDA'
  | 'FEHO'
  | 'FEI'
  | 'FEMO'
  | 'FEOA'
  | 'FEOT'
  | 'FEPC'
  | 'FEPH'
  | 'FEPO'
  | 'FEPS'
  | 'FEPT'
  | 'FEPTA'
  | 'FEPTP'
  | 'FEQU'
  | 'FESM'
  | 'FEST'
  | 'FEWE'
  | 'FEYE'
type OBAmount1_4 = string
type Number_1 = number
type OBMinMaxType1Code = 'FMMN' | 'FMMX'
type OBFeeFrequency1Code_2 =
  | 'FEAC'
  | 'FEAO'
  | 'FECP'
  | 'FEDA'
  | 'FEHO'
  | 'FEI'
  | 'FEMO'
  | 'FEOA'
  | 'FEOT'
  | 'FEPC'
  | 'FEPH'
  | 'FEPO'
  | 'FEPS'
  | 'FEPT'
  | 'FEPTA'
  | 'FEPTP'
  | 'FEQU'
  | 'FESM'
  | 'FEST'
  | 'FEWE'
  | 'FEYE'
type OBFeeFrequency1Code_3 =
  | 'FEAC'
  | 'FEAO'
  | 'FECP'
  | 'FEDA'
  | 'FEHO'
  | 'FEI'
  | 'FEMO'
  | 'FEOA'
  | 'FEOT'
  | 'FEPC'
  | 'FEPH'
  | 'FEPO'
  | 'FEPS'
  | 'FEPT'
  | 'FEPTA'
  | 'FEPTP'
  | 'FEQU'
  | 'FESM'
  | 'FEST'
  | 'FEWE'
  | 'FEYE'
type OBAmount1_3 = string
type OBRate1_12 = string
type OBInterestRateType1Code_1 = 'INBB' | 'INFR' | 'INGR' | 'INLR' | 'INNE' | 'INOT'
type OBFeeType1Code = 'FEPF' | 'FTOT' | 'FYAF' | 'FYAM' | 'FYAQ' | 'FYCP' | 'FYDB' | 'FYMI' | 'FYXX'
type OBOtherCodeType1_6 = {
  Code?: OBCodeMnemonic | undefined
  Description: Description_3
  Name: Name_4
}
type OBOtherCodeType1_7 = {
  Code?: OBCodeMnemonic | undefined
  Description: Description_3
  Name: Name_4
}
type OBOtherCodeType1_5 = {
  Code?: OBCodeMnemonic | undefined
  Description: Description_3
  Name: Name_4
}
type OBFeeCategory1Code = 'FCOT' | 'FCRE' | 'FCSV'
type OBOtherFeeChargeDetailType = {
  Code?: OBCodeMnemonic | undefined
  Description: Description_3
  FeeCategory: OBFeeCategory1Code
  Name: Name_4
}
type OBPeriod1Code = 'PACT' | 'PDAY' | 'PHYR' | 'PMTH' | 'PQTR' | 'PWEK' | 'PYER'
type OBOtherCodeType1_8 = {
  Code?: OBCodeMnemonic | undefined
  Description: Description_3
  Name: Name_4
}
type OBAmount1_0 = string
type Number_0 = number
type OBFeeFrequency1Code_0 =
  | 'FEAC'
  | 'FEAO'
  | 'FECP'
  | 'FEDA'
  | 'FEHO'
  | 'FEI'
  | 'FEMO'
  | 'FEOA'
  | 'FEOT'
  | 'FEPC'
  | 'FEPH'
  | 'FEPO'
  | 'FEPS'
  | 'FEPT'
  | 'FEPTA'
  | 'FEPTP'
  | 'FEQU'
  | 'FESM'
  | 'FEST'
  | 'FEWE'
  | 'FEYE'
type OBFeeFrequency1Code_1 =
  | 'FEAC'
  | 'FEAO'
  | 'FECP'
  | 'FEDA'
  | 'FEHO'
  | 'FEI'
  | 'FEMO'
  | 'FEOA'
  | 'FEOT'
  | 'FEPC'
  | 'FEPH'
  | 'FEPO'
  | 'FEPS'
  | 'FEPT'
  | 'FEPTA'
  | 'FEPTP'
  | 'FEQU'
  | 'FESM'
  | 'FEST'
  | 'FEWE'
  | 'FEYE'
type OBAmount1_2 = string
type OBRate1_02 = string
type OBInterestRateType1Code_0 = 'INBB' | 'INFR' | 'INGR' | 'INLR' | 'INNE' | 'INOT'
type OBOverdraftFeeType1Code =
  | 'FBAO'
  | 'FBAR'
  | 'FBEB'
  | 'FBIT'
  | 'FBOR'
  | 'FBOS'
  | 'FBSC'
  | 'FBTO'
  | 'FBUB'
  | 'FBUT'
  | 'FTOT'
  | 'FTUT'
type OBAmount1_1 = string
type OBOtherCodeType1_4 = {
  Code?: OBCodeMnemonic | undefined
  Description: Description_3
  Name: Name_4
}
type OBOtherCodeType1_3 = {
  Code?: OBCodeMnemonic | undefined
  Description: Description_3
  Name: Name_4
}
type OBPCAData1 = {
  CreditInterest?:
    | {
        TierBandSet: {
          CalculationMethod?: 'Compound' | 'SimpleInterest' | undefined
          Destination?: 'PayAway' | 'SelfCredit' | undefined
          Notes?: string[] | undefined
          TierBand: {
            AER: string
            ApplicationFrequency:
              | 'PerAcademicTerm'
              | 'Daily'
              | 'HalfYearly'
              | 'Monthly'
              | 'Other'
              | 'Quarterly'
              | 'PerStatementDate'
              | 'Weekly'
              | 'Yearly'
            BankInterestRate?: string | undefined
            BankInterestRateType?: 'LinkedBaseRate' | 'Gross' | 'Net' | 'Other' | undefined
            CalculationFrequency?:
              | 'PerAcademicTerm'
              | 'Daily'
              | 'HalfYearly'
              | 'Monthly'
              | 'Other'
              | 'Quarterly'
              | 'PerStatementDate'
              | 'Weekly'
              | 'Yearly'
              | undefined
            DepositInterestAppliedCoverage?: 'Tiered' | 'Whole' | undefined
            FixedVariableInterestRateType: 'Fixed' | 'Variable'
            Identification?: string | undefined
            Notes?: string[] | undefined
            OtherApplicationFrequency?:
              | { Code?: string | undefined; Description: string; Name: string }
              | undefined
            OtherBankInterestType?:
              | { Code?: string | undefined; Description: string; Name: string }
              | undefined
            OtherCalculationFrequency?:
              | { Code?: string | undefined; Description: string; Name: string }
              | undefined
            TierValueMaximum?: string | undefined
            TierValueMinimum: string
          }[]
          TierBandMethod: 'Tiered' | 'Whole'
        }[]
      }
    | undefined
  OtherFeesCharges?:
    | {
        FeeChargeCap?:
          | {
              CappingPeriod?:
                | 'AcademicTerm'
                | 'Day'
                | 'Half Year'
                | 'Month'
                | 'Quarter'
                | 'Week'
                | 'Year'
                | undefined
              FeeCapAmount?: string | undefined
              FeeCapOccurrence?: number | undefined
              FeeType: (
                | 'ServiceCAccountFee'
                | 'ServiceCAccountFeeMonthly'
                | 'ServiceCOther'
                | 'Other'
              )[]
              MinMaxType: 'Minimum' | 'Maximum'
              Notes?: string[] | undefined
              OtherFeeType?:
                | { Code?: string | undefined; Description: string; Name: string }[]
                | undefined
            }[]
          | undefined
        FeeChargeDetail: {
          ApplicationFrequency:
            | 'AccountClosing'
            | 'AccountOpening'
            | 'AcademicTerm'
            | 'ChargingPeriod'
            | 'Daily'
            | 'PerItem'
            | 'Monthly'
            | 'OnAccountAnniversary'
            | 'Other'
            | 'PerHour'
            | 'PerOccurrence'
            | 'PerSheet'
            | 'PerTransaction'
            | 'PerTransactionAmount'
            | 'PerTransactionPercentage'
            | 'Quarterly'
            | 'SixMonthly'
            | 'StatementMonthly'
            | 'Weekly'
            | 'Yearly'
          CalculationFrequency?:
            | 'AccountClosing'
            | 'AccountOpening'
            | 'AcademicTerm'
            | 'ChargingPeriod'
            | 'Daily'
            | 'PerItem'
            | 'Monthly'
            | 'OnAccountAnniversary'
            | 'Other'
            | 'PerHour'
            | 'PerOccurrence'
            | 'PerSheet'
            | 'PerTransaction'
            | 'PerTransactionAmount'
            | 'PerTransactionPercentage'
            | 'Quarterly'
            | 'SixMonthly'
            | 'StatementMonthly'
            | 'Weekly'
            | 'Yearly'
            | undefined
          FeeAmount?: string | undefined
          FeeApplicableRange?:
            | {
                MaximumAmount?: string | undefined
                MaximumRate?: string | undefined
                MinimumAmount?: string | undefined
                MinimumRate?: string | undefined
              }
            | undefined
          FeeCategory: 'Other' | 'Servicing'
          FeeChargeCap?:
            | {
                CappingPeriod?:
                  | 'AcademicTerm'
                  | 'Day'
                  | 'Half Year'
                  | 'Month'
                  | 'Quarter'
                  | 'Week'
                  | 'Year'
                  | undefined
                FeeCapAmount?: string | undefined
                FeeCapOccurrence?: number | undefined
                FeeType: (
                  | 'ServiceCAccountFee'
                  | 'ServiceCAccountFeeMonthly'
                  | 'ServiceCOther'
                  | 'Other'
                )[]
                MinMaxType: 'Minimum' | 'Maximum'
                Notes?: string[] | undefined
                OtherFeeType?:
                  | { Code?: string | undefined; Description: string; Name: string }[]
                  | undefined
              }[]
            | undefined
          FeeRate?: string | undefined
          FeeRateType?: 'LinkedBaseRate' | 'Gross' | 'Net' | 'Other' | undefined
          FeeType: 'ServiceCAccountFee' | 'ServiceCAccountFeeMonthly' | 'ServiceCOther' | 'Other'
          Notes?: string[] | undefined
          OtherApplicationFrequency?:
            | { Code?: string | undefined; Description: string; Name: string }
            | undefined
          OtherCalculationFrequency?:
            | { Code?: string | undefined; Description: string; Name: string }
            | undefined
          OtherFeeCategoryType?:
            | { Code?: string | undefined; Description: string; Name: string }
            | undefined
          OtherFeeRateType?:
            | { Code?: string | undefined; Description: string; Name: string }
            | undefined
          OtherFeeType?:
            | {
                Code?: string | undefined
                Description: string
                FeeCategory: 'Other' | 'Servicing'
                Name: string
              }
            | undefined
        }[]
      }
    | undefined
  Overdraft?:
    | {
        Notes?: string[] | undefined
        OverdraftTierBandSet: {
          AuthorisedIndicator?: boolean | undefined
          BufferAmount?: string | undefined
          Identification?: string | undefined
          Notes?: string[] | undefined
          OverdraftFeesCharges?:
            | {
                OverdraftFeeChargeCap?:
                  | {
                      CappingPeriod?:
                        | 'AcademicTerm'
                        | 'Day'
                        | 'Half Year'
                        | 'Month'
                        | 'Quarter'
                        | 'Week'
                        | 'Year'
                        | undefined
                      FeeCapAmount?: string | undefined
                      FeeCapOccurrence?: number | undefined
                      FeeType: (
                        | 'ArrangedOverdraft'
                        | 'EmergencyBorrowing'
                        | 'BorrowingItem'
                        | 'OverdraftRenewal'
                        | 'AnnualReview'
                        | 'OverdraftSetup'
                        | 'Surcharge'
                        | 'TempOverdraft'
                        | 'UnauthorisedBorrowing'
                        | 'UnauthorisedPaidTrans'
                        | 'Other'
                        | 'UnauthorisedUnpaidTrans'
                      )[]
                      MinMaxType: 'Minimum' | 'Maximum'
                      Notes?: string[] | undefined
                      OtherFeeType?:
                        | { Code?: string | undefined; Description: string; Name: string }[]
                        | undefined
                      OverdraftControlIndicator?: boolean | undefined
                    }[]
                  | undefined
                OverdraftFeeChargeDetail: {
                  ApplicationFrequency:
                    | 'AccountClosing'
                    | 'AccountOpening'
                    | 'AcademicTerm'
                    | 'ChargingPeriod'
                    | 'Daily'
                    | 'PerItem'
                    | 'Monthly'
                    | 'OnAccountAnniversary'
                    | 'Other'
                    | 'PerHour'
                    | 'PerOccurrence'
                    | 'PerSheet'
                    | 'PerTransaction'
                    | 'PerTransactionAmount'
                    | 'PerTransactionPercentage'
                    | 'Quarterly'
                    | 'SixMonthly'
                    | 'StatementMonthly'
                    | 'Weekly'
                    | 'Yearly'
                  CalculationFrequency?:
                    | 'AccountClosing'
                    | 'AccountOpening'
                    | 'AcademicTerm'
                    | 'ChargingPeriod'
                    | 'Daily'
                    | 'PerItem'
                    | 'Monthly'
                    | 'OnAccountAnniversary'
                    | 'Other'
                    | 'PerHour'
                    | 'PerOccurrence'
                    | 'PerSheet'
                    | 'PerTransaction'
                    | 'PerTransactionAmount'
                    | 'PerTransactionPercentage'
                    | 'Quarterly'
                    | 'SixMonthly'
                    | 'StatementMonthly'
                    | 'Weekly'
                    | 'Yearly'
                    | undefined
                  FeeAmount?: string | undefined
                  FeeRate?: string | undefined
                  FeeRateType?: 'LinkedBaseRate' | 'Gross' | 'Net' | 'Other' | undefined
                  FeeType:
                    | 'ArrangedOverdraft'
                    | 'EmergencyBorrowing'
                    | 'BorrowingItem'
                    | 'OverdraftRenewal'
                    | 'AnnualReview'
                    | 'OverdraftSetup'
                    | 'Surcharge'
                    | 'TempOverdraft'
                    | 'UnauthorisedBorrowing'
                    | 'UnauthorisedPaidTrans'
                    | 'Other'
                    | 'UnauthorisedUnpaidTrans'
                  IncrementalBorrowingAmount?: string | undefined
                  Notes?: string[] | undefined
                  OtherApplicationFrequency?:
                    | { Code?: string | undefined; Description: string; Name: string }
                    | undefined
                  OtherCalculationFrequency?:
                    | { Code?: string | undefined; Description: string; Name: string }
                    | undefined
                  OtherFeeRateType?:
                    | { Code?: string | undefined; Description: string; Name: string }
                    | undefined
                  OtherFeeType?:
                    | { Code?: string | undefined; Description: string; Name: string }
                    | undefined
                  OverdraftControlIndicator?: boolean | undefined
                  OverdraftFeeChargeCap?:
                    | {
                        CappingPeriod?:
                          | 'AcademicTerm'
                          | 'Day'
                          | 'Half Year'
                          | 'Month'
                          | 'Quarter'
                          | 'Week'
                          | 'Year'
                          | undefined
                        FeeCapAmount?: string | undefined
                        FeeCapOccurrence?: number | undefined
                        FeeType: (
                          | 'ArrangedOverdraft'
                          | 'EmergencyBorrowing'
                          | 'BorrowingItem'
                          | 'OverdraftRenewal'
                          | 'AnnualReview'
                          | 'OverdraftSetup'
                          | 'Surcharge'
                          | 'TempOverdraft'
                          | 'UnauthorisedBorrowing'
                          | 'UnauthorisedPaidTrans'
                          | 'Other'
                          | 'UnauthorisedUnpaidTrans'
                        )[]
                        MinMaxType: 'Minimum' | 'Maximum'
                        Notes?: string[] | undefined
                        OtherFeeType?:
                          | { Code?: string | undefined; Description: string; Name: string }[]
                          | undefined
                        OverdraftControlIndicator?: boolean | undefined
                      }
                    | undefined
                }[]
              }[]
            | undefined
          OverdraftTierBand: {
            BankGuaranteedIndicator?: boolean | undefined
            EAR?: string | undefined
            Identification?: string | undefined
            Notes?: string[] | undefined
            OverdraftFeesCharges?:
              | {
                  OverdraftFeeChargeCap?:
                    | {
                        CappingPeriod?:
                          | 'AcademicTerm'
                          | 'Day'
                          | 'Half Year'
                          | 'Month'
                          | 'Quarter'
                          | 'Week'
                          | 'Year'
                          | undefined
                        FeeCapAmount?: string | undefined
                        FeeCapOccurrence?: number | undefined
                        FeeType: (
                          | 'ArrangedOverdraft'
                          | 'EmergencyBorrowing'
                          | 'BorrowingItem'
                          | 'OverdraftRenewal'
                          | 'AnnualReview'
                          | 'OverdraftSetup'
                          | 'Surcharge'
                          | 'TempOverdraft'
                          | 'UnauthorisedBorrowing'
                          | 'UnauthorisedPaidTrans'
                          | 'Other'
                          | 'UnauthorisedUnpaidTrans'
                        )[]
                        MinMaxType: 'Minimum' | 'Maximum'
                        Notes?: string[] | undefined
                        OtherFeeType?:
                          | { Code?: string | undefined; Description: string; Name: string }[]
                          | undefined
                        OverdraftControlIndicator?: boolean | undefined
                      }[]
                    | undefined
                  OverdraftFeeChargeDetail: {
                    ApplicationFrequency:
                      | 'AccountClosing'
                      | 'AccountOpening'
                      | 'AcademicTerm'
                      | 'ChargingPeriod'
                      | 'Daily'
                      | 'PerItem'
                      | 'Monthly'
                      | 'OnAccountAnniversary'
                      | 'Other'
                      | 'PerHour'
                      | 'PerOccurrence'
                      | 'PerSheet'
                      | 'PerTransaction'
                      | 'PerTransactionAmount'
                      | 'PerTransactionPercentage'
                      | 'Quarterly'
                      | 'SixMonthly'
                      | 'StatementMonthly'
                      | 'Weekly'
                      | 'Yearly'
                    CalculationFrequency?:
                      | 'AccountClosing'
                      | 'AccountOpening'
                      | 'AcademicTerm'
                      | 'ChargingPeriod'
                      | 'Daily'
                      | 'PerItem'
                      | 'Monthly'
                      | 'OnAccountAnniversary'
                      | 'Other'
                      | 'PerHour'
                      | 'PerOccurrence'
                      | 'PerSheet'
                      | 'PerTransaction'
                      | 'PerTransactionAmount'
                      | 'PerTransactionPercentage'
                      | 'Quarterly'
                      | 'SixMonthly'
                      | 'StatementMonthly'
                      | 'Weekly'
                      | 'Yearly'
                      | undefined
                    FeeAmount?: string | undefined
                    FeeRate?: string | undefined
                    FeeRateType?: 'LinkedBaseRate' | 'Gross' | 'Net' | 'Other' | undefined
                    FeeType:
                      | 'ArrangedOverdraft'
                      | 'EmergencyBorrowing'
                      | 'BorrowingItem'
                      | 'OverdraftRenewal'
                      | 'AnnualReview'
                      | 'OverdraftSetup'
                      | 'Surcharge'
                      | 'TempOverdraft'
                      | 'UnauthorisedBorrowing'
                      | 'UnauthorisedPaidTrans'
                      | 'Other'
                      | 'UnauthorisedUnpaidTrans'
                    IncrementalBorrowingAmount?: string | undefined
                    Notes?: string[] | undefined
                    OtherApplicationFrequency?:
                      | { Code?: string | undefined; Description: string; Name: string }
                      | undefined
                    OtherCalculationFrequency?:
                      | { Code?: string | undefined; Description: string; Name: string }
                      | undefined
                    OtherFeeRateType?:
                      | { Code?: string | undefined; Description: string; Name: string }
                      | undefined
                    OtherFeeType?:
                      | { Code?: string | undefined; Description: string; Name: string }
                      | undefined
                    OverdraftControlIndicator?: boolean | undefined
                    OverdraftFeeChargeCap?:
                      | {
                          CappingPeriod?:
                            | 'AcademicTerm'
                            | 'Day'
                            | 'Half Year'
                            | 'Month'
                            | 'Quarter'
                            | 'Week'
                            | 'Year'
                            | undefined
                          FeeCapAmount?: string | undefined
                          FeeCapOccurrence?: number | undefined
                          FeeType: (
                            | 'ArrangedOverdraft'
                            | 'EmergencyBorrowing'
                            | 'BorrowingItem'
                            | 'OverdraftRenewal'
                            | 'AnnualReview'
                            | 'OverdraftSetup'
                            | 'Surcharge'
                            | 'TempOverdraft'
                            | 'UnauthorisedBorrowing'
                            | 'UnauthorisedPaidTrans'
                            | 'Other'
                            | 'UnauthorisedUnpaidTrans'
                          )[]
                          MinMaxType: 'Minimum' | 'Maximum'
                          Notes?: string[] | undefined
                          OtherFeeType?:
                            | { Code?: string | undefined; Description: string; Name: string }[]
                            | undefined
                          OverdraftControlIndicator?: boolean | undefined
                        }
                      | undefined
                  }[]
                }[]
              | undefined
            OverdraftInterestChargingCoverage?: 'Tiered' | 'Whole' | undefined
            RepresentativeAPR?: string | undefined
            TierValueMax?: string | undefined
            TierValueMin: string
          }[]
          OverdraftType?: 'Committed' | 'OnDemand' | 'Other' | undefined
          TierBandMethod: 'Tiered' | 'Whole' | 'Banded'
        }[]
      }
    | undefined
  ProductDetails?:
    | {
        MonthlyMaximumCharge?: string | undefined
        Notes?: string[] | undefined
        Segment?:
          | (
              | 'Basic'
              | 'BenefitAndReward'
              | 'CreditInterest'
              | 'Cashback'
              | 'General'
              | 'Graduate'
              | 'Other'
              | 'Overdraft'
              | 'Packaged'
              | 'Premium'
              | 'Reward'
              | 'Student'
              | 'YoungAdult'
              | 'Youth'
            )[]
          | undefined
      }
    | undefined
}
type OBReadProduct2 = {
  Data: {
    Product?:
      | {
          AccountId: AccountId
          BCA?: OBBCAData1 | undefined
          MarketingStateId?: string | undefined
          OtherProductType?:
            | {
                CreditInterest?:
                  | {
                      TierBandSet: {
                        CalculationMethod?: OBInterestCalculationMethod1Code | undefined
                        Destination: 'INOT' | 'INPA' | 'INSC'
                        Notes?: string[] | undefined
                        OtherCalculationMethod?: OBOtherCodeType1_0 | undefined
                        OtherDestination?: OBOtherCodeType1_0 | undefined
                        TierBand: {
                          AER: string
                          ApplicationFrequency:
                            | 'FQAT'
                            | 'FQDY'
                            | 'FQHY'
                            | 'FQMY'
                            | 'FQOT'
                            | 'FQQY'
                            | 'FQSD'
                            | 'FQWY'
                            | 'FQYY'
                          BankInterestRate?: string | undefined
                          BankInterestRateType?:
                            | 'INBB'
                            | 'INFR'
                            | 'INGR'
                            | 'INLR'
                            | 'INNE'
                            | 'INOT'
                            | undefined
                          CalculationFrequency?:
                            | 'FQAT'
                            | 'FQDY'
                            | 'FQHY'
                            | 'FQMY'
                            | 'FQOT'
                            | 'FQQY'
                            | 'FQSD'
                            | 'FQWY'
                            | 'FQYY'
                            | undefined
                          DepositInterestAppliedCoverage?: 'INBA' | 'INTI' | 'INWH' | undefined
                          FixedVariableInterestRateType: OBInterestFixedVariableType1Code
                          Identification?: string | undefined
                          Notes?: string[] | undefined
                          OtherApplicationFrequency?: OBOtherCodeType1_1 | undefined
                          OtherBankInterestType?:
                            | {
                                Code?: OBCodeMnemonic | undefined
                                Description: Description_3
                                Name: Name_4
                              }
                            | undefined
                          OtherCalculationFrequency?: OBOtherCodeType1_2 | undefined
                          TierValueMaximum?: string | undefined
                          TierValueMinimum: string
                        }[]
                        TierBandMethod: 'INBA' | 'INTI' | 'INWH'
                      }[]
                    }
                  | undefined
                Description: string
                LoanInterest?:
                  | {
                      LoanInterestTierBandSet: {
                        CalculationMethod: OBInterestCalculationMethod1Code
                        Identification?: string | undefined
                        LoanInterestFeesCharges?:
                          | {
                              LoanInterestFeeChargeCap?:
                                | {
                                    CappingPeriod?: OBFeeFrequency1Code_4 | undefined
                                    FeeCapAmount?: OBAmount1_4 | undefined
                                    FeeCapOccurrence?: Number_1 | undefined
                                    FeeType: (
                                      | 'FEPF'
                                      | 'FTOT'
                                      | 'FYAF'
                                      | 'FYAM'
                                      | 'FYAQ'
                                      | 'FYCP'
                                      | 'FYDB'
                                      | 'FYMI'
                                      | 'FYXX'
                                    )[]
                                    MinMaxType: OBMinMaxType1Code
                                    Notes?: string[] | undefined
                                    OtherFeeType?:
                                      | {
                                          Code?: OBCodeMnemonic | undefined
                                          Description: Description_3
                                          Name: Name_4
                                        }[]
                                      | undefined
                                  }[]
                                | undefined
                              LoanInterestFeeChargeDetail: {
                                ApplicationFrequency: OBFeeFrequency1Code_2
                                CalculationFrequency: OBFeeFrequency1Code_3
                                FeeAmount?: OBAmount1_3 | undefined
                                FeeRate?: OBRate1_12 | undefined
                                FeeRateType?: OBInterestRateType1Code_1 | undefined
                                FeeType: OBFeeType1Code
                                NegotiableIndicator?: boolean | undefined
                                Notes?: string[] | undefined
                                OtherApplicationFrequency?: OBOtherCodeType1_6 | undefined
                                OtherCalculationFrequency?: OBOtherCodeType1_7 | undefined
                                OtherFeeRateType?: OBOtherCodeType1_5 | undefined
                                OtherFeeType?: OBOtherFeeChargeDetailType | undefined
                              }[]
                            }[]
                          | undefined
                        LoanInterestTierBand: {
                          FixedVariableInterestRateType: OBInterestFixedVariableType1Code
                          Identification?: string | undefined
                          LoanInterestFeesCharges?:
                            | {
                                LoanInterestFeeChargeCap?:
                                  | {
                                      CappingPeriod?: OBFeeFrequency1Code_4 | undefined
                                      FeeCapAmount?: OBAmount1_4 | undefined
                                      FeeCapOccurrence?: Number_1 | undefined
                                      FeeType: (
                                        | 'FEPF'
                                        | 'FTOT'
                                        | 'FYAF'
                                        | 'FYAM'
                                        | 'FYAQ'
                                        | 'FYCP'
                                        | 'FYDB'
                                        | 'FYMI'
                                        | 'FYXX'
                                      )[]
                                      MinMaxType: OBMinMaxType1Code
                                      Notes?: string[] | undefined
                                      OtherFeeType?:
                                        | {
                                            Code?: OBCodeMnemonic | undefined
                                            Description: Description_3
                                            Name: Name_4
                                          }[]
                                        | undefined
                                    }[]
                                  | undefined
                                LoanInterestFeeChargeDetail: {
                                  ApplicationFrequency: OBFeeFrequency1Code_2
                                  CalculationFrequency: OBFeeFrequency1Code_3
                                  FeeAmount?: OBAmount1_3 | undefined
                                  FeeRate?: OBRate1_12 | undefined
                                  FeeRateType?: OBInterestRateType1Code_1 | undefined
                                  FeeType: OBFeeType1Code
                                  NegotiableIndicator?: boolean | undefined
                                  Notes?: string[] | undefined
                                  OtherApplicationFrequency?: OBOtherCodeType1_6 | undefined
                                  OtherCalculationFrequency?: OBOtherCodeType1_7 | undefined
                                  OtherFeeRateType?: OBOtherCodeType1_5 | undefined
                                  OtherFeeType?: OBOtherFeeChargeDetailType | undefined
                                }[]
                              }[]
                            | undefined
                          LoanProviderInterestRate?: string | undefined
                          LoanProviderInterestRateType?:
                            | 'INBB'
                            | 'INFR'
                            | 'INGR'
                            | 'INLR'
                            | 'INNE'
                            | 'INOT'
                            | undefined
                          MaxTermPeriod?:
                            | 'PACT'
                            | 'PDAY'
                            | 'PHYR'
                            | 'PMTH'
                            | 'PQTR'
                            | 'PWEK'
                            | 'PYER'
                            | undefined
                          MinTermPeriod:
                            | 'PACT'
                            | 'PDAY'
                            | 'PHYR'
                            | 'PMTH'
                            | 'PQTR'
                            | 'PWEK'
                            | 'PYER'
                          Notes?: string[] | undefined
                          OtherLoanProviderInterestRateType?:
                            | {
                                Code?: OBCodeMnemonic | undefined
                                Description: Description_3
                                Name: Name_4
                              }
                            | undefined
                          RepAPR: string
                          TierValueMaxTerm?: number | undefined
                          TierValueMaximum?: string | undefined
                          TierValueMinTerm: number
                          TierValueMinimum: string
                        }[]
                        Notes?: string[] | undefined
                        OtherCalculationMethod?: OBOtherCodeType1_0 | undefined
                        TierBandMethod: 'INBA' | 'INTI' | 'INWH'
                      }[]
                      Notes?: string[] | undefined
                    }
                  | undefined
                Name: string
                OtherFeesCharges?:
                  | {
                      FeeChargeCap?:
                        | {
                            CappingPeriod?: OBPeriod1Code | undefined
                            FeeCapAmount?: OBAmount1_4 | undefined
                            FeeCapOccurrence?: Number_1 | undefined
                            FeeType: (
                              | 'FEPF'
                              | 'FTOT'
                              | 'FYAF'
                              | 'FYAM'
                              | 'FYAQ'
                              | 'FYCP'
                              | 'FYDB'
                              | 'FYMI'
                              | 'FYXX'
                            )[]
                            MinMaxType: OBMinMaxType1Code
                            Notes?: string[] | undefined
                            OtherFeeType?:
                              | {
                                  Code?: OBCodeMnemonic | undefined
                                  Description: Description_3
                                  Name: Name_4
                                }[]
                              | undefined
                          }[]
                        | undefined
                      FeeChargeDetail: {
                        ApplicationFrequency: OBFeeFrequency1Code_2
                        CalculationFrequency?: OBFeeFrequency1Code_3 | undefined
                        FeeAmount?: OBAmount1_3 | undefined
                        FeeApplicableRange?:
                          | {
                              MaximumAmount?: string | undefined
                              MaximumRate?: string | undefined
                              MinimumAmount?: string | undefined
                              MinimumRate?: string | undefined
                            }
                          | undefined
                        FeeCategory: OBFeeCategory1Code
                        FeeChargeCap?:
                          | {
                              CappingPeriod?: OBPeriod1Code | undefined
                              FeeCapAmount?: OBAmount1_4 | undefined
                              FeeCapOccurrence?: Number_1 | undefined
                              FeeType: (
                                | 'FEPF'
                                | 'FTOT'
                                | 'FYAF'
                                | 'FYAM'
                                | 'FYAQ'
                                | 'FYCP'
                                | 'FYDB'
                                | 'FYMI'
                                | 'FYXX'
                              )[]
                              MinMaxType: OBMinMaxType1Code
                              Notes?: string[] | undefined
                              OtherFeeType?:
                                | {
                                    Code?: OBCodeMnemonic | undefined
                                    Description: Description_3
                                    Name: Name_4
                                  }[]
                                | undefined
                            }[]
                          | undefined
                        FeeRate?: OBRate1_12 | undefined
                        FeeRateType?: OBInterestRateType1Code_1 | undefined
                        FeeType: OBFeeType1Code
                        NegotiableIndicator?: boolean | undefined
                        Notes?: string[] | undefined
                        OtherApplicationFrequency?: OBOtherCodeType1_6 | undefined
                        OtherCalculationFrequency?: OBOtherCodeType1_7 | undefined
                        OtherFeeCategoryType?: OBOtherCodeType1_0 | undefined
                        OtherFeeRateType?: OBOtherCodeType1_8 | undefined
                        OtherFeeType?: OBOtherFeeChargeDetailType | undefined
                      }[]
                      OtherTariffType?:
                        | {
                            Code?: OBCodeMnemonic | undefined
                            Description: Description_3
                            Name: Name_4
                          }
                        | undefined
                      TariffName?: string | undefined
                      TariffType?: 'TTEL' | 'TTMX' | 'TTOT' | undefined
                    }[]
                  | undefined
                Overdraft?:
                  | {
                      Notes?: string[] | undefined
                      OverdraftTierBandSet: {
                        AuthorisedIndicator?: boolean | undefined
                        BufferAmount?: string | undefined
                        Identification?: string | undefined
                        Notes?: string[] | undefined
                        OverdraftFeesCharges?:
                          | {
                              OverdraftFeeChargeCap?:
                                | {
                                    CappingPeriod?: OBPeriod1Code | undefined
                                    FeeCapAmount?: OBAmount1_0 | undefined
                                    FeeCapOccurrence?: Number_0 | undefined
                                    FeeType: (
                                      | 'FBAO'
                                      | 'FBAR'
                                      | 'FBEB'
                                      | 'FBIT'
                                      | 'FBOR'
                                      | 'FBOS'
                                      | 'FBSC'
                                      | 'FBTO'
                                      | 'FBUB'
                                      | 'FBUT'
                                      | 'FTOT'
                                      | 'FTUT'
                                    )[]
                                    MinMaxType: OBMinMaxType1Code
                                    Notes?: string[] | undefined
                                    OtherFeeType?:
                                      | {
                                          Code?: OBCodeMnemonic | undefined
                                          Description: Description_3
                                          Name: Name_4
                                        }[]
                                      | undefined
                                  }[]
                                | undefined
                              OverdraftFeeChargeDetail: {
                                ApplicationFrequency: OBFeeFrequency1Code_0
                                CalculationFrequency?: OBFeeFrequency1Code_1 | undefined
                                FeeAmount?: OBAmount1_2 | undefined
                                FeeRate?: OBRate1_02 | undefined
                                FeeRateType?: OBInterestRateType1Code_0 | undefined
                                FeeType: OBOverdraftFeeType1Code
                                IncrementalBorrowingAmount?: OBAmount1_1 | undefined
                                NegotiableIndicator?: boolean | undefined
                                Notes?: string[] | undefined
                                OtherApplicationFrequency?: OBOtherCodeType1_1 | undefined
                                OtherCalculationFrequency?: OBOtherCodeType1_2 | undefined
                                OtherFeeRateType?: OBOtherCodeType1_4 | undefined
                                OtherFeeType?: OBOtherCodeType1_3 | undefined
                                OverdraftControlIndicator?: boolean | undefined
                                OverdraftFeeChargeCap?:
                                  | {
                                      CappingPeriod?: OBPeriod1Code | undefined
                                      FeeCapAmount?: OBAmount1_0 | undefined
                                      FeeCapOccurrence?: Number_0 | undefined
                                      FeeType: (
                                        | 'FBAO'
                                        | 'FBAR'
                                        | 'FBEB'
                                        | 'FBIT'
                                        | 'FBOR'
                                        | 'FBOS'
                                        | 'FBSC'
                                        | 'FBTO'
                                        | 'FBUB'
                                        | 'FBUT'
                                        | 'FTOT'
                                        | 'FTUT'
                                      )[]
                                      MinMaxType: OBMinMaxType1Code
                                      Notes?: string[] | undefined
                                      OtherFeeType?:
                                        | {
                                            Code?: OBCodeMnemonic | undefined
                                            Description: Description_3
                                            Name: Name_4
                                          }[]
                                        | undefined
                                    }[]
                                  | undefined
                              }[]
                            }[]
                          | undefined
                        OverdraftTierBand: {
                          AgreementLengthMax?: number | undefined
                          AgreementLengthMin?: number | undefined
                          AgreementPeriod?:
                            | 'PACT'
                            | 'PDAY'
                            | 'PHYR'
                            | 'PMTH'
                            | 'PQTR'
                            | 'PWEK'
                            | 'PYER'
                            | undefined
                          BankGuaranteedIndicator?: boolean | undefined
                          EAR?: string | undefined
                          Identification?: string | undefined
                          Notes?: string[] | undefined
                          OverdraftFeesCharges?:
                            | {
                                OverdraftFeeChargeCap?:
                                  | {
                                      CappingPeriod?: OBPeriod1Code | undefined
                                      FeeCapAmount?: OBAmount1_0 | undefined
                                      FeeCapOccurrence?: Number_0 | undefined
                                      FeeType: (
                                        | 'FBAO'
                                        | 'FBAR'
                                        | 'FBEB'
                                        | 'FBIT'
                                        | 'FBOR'
                                        | 'FBOS'
                                        | 'FBSC'
                                        | 'FBTO'
                                        | 'FBUB'
                                        | 'FBUT'
                                        | 'FTOT'
                                        | 'FTUT'
                                      )[]
                                      MinMaxType: OBMinMaxType1Code
                                      Notes?: string[] | undefined
                                      OtherFeeType?:
                                        | {
                                            Code?: OBCodeMnemonic | undefined
                                            Description: Description_3
                                            Name: Name_4
                                          }[]
                                        | undefined
                                    }[]
                                  | undefined
                                OverdraftFeeChargeDetail: {
                                  ApplicationFrequency: OBFeeFrequency1Code_0
                                  CalculationFrequency?: OBFeeFrequency1Code_1 | undefined
                                  FeeAmount?: OBAmount1_2 | undefined
                                  FeeRate?: OBRate1_02 | undefined
                                  FeeRateType?: OBInterestRateType1Code_0 | undefined
                                  FeeType: OBOverdraftFeeType1Code
                                  IncrementalBorrowingAmount?: OBAmount1_1 | undefined
                                  NegotiableIndicator?: boolean | undefined
                                  Notes?: string[] | undefined
                                  OtherApplicationFrequency?: OBOtherCodeType1_1 | undefined
                                  OtherCalculationFrequency?: OBOtherCodeType1_2 | undefined
                                  OtherFeeRateType?: OBOtherCodeType1_4 | undefined
                                  OtherFeeType?: OBOtherCodeType1_3 | undefined
                                  OverdraftControlIndicator?: boolean | undefined
                                  OverdraftFeeChargeCap?:
                                    | {
                                        CappingPeriod?: OBPeriod1Code | undefined
                                        FeeCapAmount?: OBAmount1_0 | undefined
                                        FeeCapOccurrence?: Number_0 | undefined
                                        FeeType: (
                                          | 'FBAO'
                                          | 'FBAR'
                                          | 'FBEB'
                                          | 'FBIT'
                                          | 'FBOR'
                                          | 'FBOS'
                                          | 'FBSC'
                                          | 'FBTO'
                                          | 'FBUB'
                                          | 'FBUT'
                                          | 'FTOT'
                                          | 'FTUT'
                                        )[]
                                        MinMaxType: OBMinMaxType1Code
                                        Notes?: string[] | undefined
                                        OtherFeeType?:
                                          | {
                                              Code?: OBCodeMnemonic | undefined
                                              Description: Description_3
                                              Name: Name_4
                                            }[]
                                          | undefined
                                      }[]
                                    | undefined
                                }[]
                              }[]
                            | undefined
                          OverdraftInterestChargingCoverage?: 'INBA' | 'INTI' | 'INWH' | undefined
                          TierValueMax?: string | undefined
                          TierValueMin: string
                        }[]
                        OverdraftType?: 'OVCO' | 'OVOD' | 'OVOT' | undefined
                        TierBandMethod: 'INBA' | 'INTI' | 'INWH'
                      }[]
                    }
                  | undefined
                ProductDetails?:
                  | {
                      FeeFreeLength?: number | undefined
                      FeeFreeLengthPeriod?:
                        | 'PACT'
                        | 'PDAY'
                        | 'PHYR'
                        | 'PMTH'
                        | 'PQTR'
                        | 'PWEK'
                        | 'PYER'
                        | undefined
                      MonthlyMaximumCharge?: string | undefined
                      Notes?: string[] | undefined
                      OtherSegment?: OBOtherCodeType1_0 | undefined
                      Segment?:
                        | (
                            | 'GEAS'
                            | 'GEBA'
                            | 'GEBR'
                            | 'GEBU'
                            | 'GECI'
                            | 'GECS'
                            | 'GEFB'
                            | 'GEFG'
                            | 'GEG'
                            | 'GEGR'
                            | 'GEGS'
                            | 'GEOT'
                            | 'GEOV'
                            | 'GEPA'
                            | 'GEPR'
                            | 'GERE'
                            | 'GEST'
                            | 'GEYA'
                            | 'GEYO'
                            | 'PSCA'
                            | 'PSES'
                            | 'PSNC'
                            | 'PSNP'
                            | 'PSRG'
                            | 'PSSS'
                            | 'PSST'
                            | 'PSSW'
                          )[]
                        | undefined
                    }
                  | undefined
                Repayment?:
                  | {
                      AmountType?:
                        | 'RABD'
                        | 'RABL'
                        | 'RACI'
                        | 'RAFC'
                        | 'RAIO'
                        | 'RALT'
                        | 'USOT'
                        | undefined
                      Notes?: string[] | undefined
                      OtherAmountType?:
                        | {
                            Code?: OBCodeMnemonic | undefined
                            Description: Description_3
                            Name: Name_4
                          }
                        | undefined
                      OtherRepaymentFrequency?:
                        | {
                            Code?: OBCodeMnemonic | undefined
                            Description: Description_3
                            Name: Name_4
                          }
                        | undefined
                      OtherRepaymentType?:
                        | {
                            Code?: OBCodeMnemonic | undefined
                            Description: Description_3
                            Name: Name_4
                          }
                        | undefined
                      RepaymentFeeCharges?:
                        | {
                            RepaymentFeeChargeCap?:
                              | {
                                  CappingPeriod?: OBPeriod1Code | undefined
                                  FeeCapAmount?: OBAmount1_4 | undefined
                                  FeeCapOccurrence?: Number_1 | undefined
                                  FeeType: (
                                    | 'FEPF'
                                    | 'FTOT'
                                    | 'FYAF'
                                    | 'FYAM'
                                    | 'FYAQ'
                                    | 'FYCP'
                                    | 'FYDB'
                                    | 'FYMI'
                                    | 'FYXX'
                                  )[]
                                  MinMaxType: OBMinMaxType1Code
                                  Notes?: string[] | undefined
                                  OtherFeeType?:
                                    | {
                                        Code?: OBCodeMnemonic | undefined
                                        Description: Description_3
                                        Name: Name_4
                                      }[]
                                    | undefined
                                }[]
                              | undefined
                            RepaymentFeeChargeDetail: {
                              ApplicationFrequency: OBFeeFrequency1Code_2
                              CalculationFrequency: OBFeeFrequency1Code_3
                              FeeAmount?: OBAmount1_3 | undefined
                              FeeRate?: OBRate1_12 | undefined
                              FeeRateType?: OBInterestRateType1Code_1 | undefined
                              FeeType: OBFeeType1Code
                              NegotiableIndicator?: boolean | undefined
                              Notes?: string[] | undefined
                              OtherApplicationFrequency?: OBOtherCodeType1_6 | undefined
                              OtherCalculationFrequency?: OBOtherCodeType1_7 | undefined
                              OtherFeeRateType?: OBOtherCodeType1_8 | undefined
                              OtherFeeType?: OBOtherFeeChargeDetailType | undefined
                            }[]
                          }
                        | undefined
                      RepaymentFrequency?:
                        | 'SMDA'
                        | 'SMFL'
                        | 'SMFO'
                        | 'SMHY'
                        | 'SMMO'
                        | 'SMOT'
                        | 'SMQU'
                        | 'SMWE'
                        | 'SMYE'
                        | undefined
                      RepaymentHoliday?:
                        | {
                            MaxHolidayLength?: number | undefined
                            MaxHolidayPeriod?:
                              | 'PACT'
                              | 'PDAY'
                              | 'PHYR'
                              | 'PMTH'
                              | 'PQTR'
                              | 'PWEK'
                              | 'PYER'
                              | undefined
                            Notes?: string[] | undefined
                          }[]
                        | undefined
                      RepaymentType?:
                        | 'USBA'
                        | 'USBU'
                        | 'USCI'
                        | 'USCS'
                        | 'USER'
                        | 'USFA'
                        | 'USFB'
                        | 'USFI'
                        | 'USIO'
                        | 'USOT'
                        | 'USPF'
                        | 'USRW'
                        | 'USSL'
                        | undefined
                    }
                  | undefined
                SupplementaryData?: OBSupplementaryData1 | undefined
              }
            | undefined
          PCA?: OBPCAData1 | undefined
          ProductId?: string | undefined
          ProductName?: string | undefined
          ProductType:
            | 'BusinessCurrentAccount'
            | 'CommercialCreditCard'
            | 'Other'
            | 'PersonalCurrentAccount'
            | 'SMELoan'
          SecondaryProductId?: string | undefined
        }[]
      | undefined
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBCashAccount5_1 = {
  Identification: string
  Name?: Name_0 | undefined
  SchemeName: OBExternalAccountIdentification4Code
  SecondaryIdentification?: SecondaryIdentification | undefined
}
type OBBranchAndFinancialInstitutionIdentification5_1 = {
  Identification: Identification_1
  SchemeName: OBExternalFinancialInstitutionIdentification4Code
}
type DebtorReference = string
type OBActiveOrHistoricCurrencyAndAmount_1 = {
  Amount: OBActiveCurrencyAndAmountSimpleType
  Currency: ActiveOrHistoricCurrencyCode_1
}
type ScheduledPaymentDateTime = string
type ScheduledPaymentId = string
type OBExternalScheduleType1Code = 'Arrival' | 'Execution'
type OBScheduledPayment3 = {
  AccountId: AccountId
  CreditorAccount?: OBCashAccount5_1 | undefined
  CreditorAgent?: OBBranchAndFinancialInstitutionIdentification5_1 | undefined
  DebtorReference?: DebtorReference | undefined
  InstructedAmount: OBActiveOrHistoricCurrencyAndAmount_1
  Reference?: Reference | undefined
  ScheduledPaymentDateTime: ScheduledPaymentDateTime
  ScheduledPaymentId?: ScheduledPaymentId | undefined
  ScheduledType: OBExternalScheduleType1Code
}
type OBReadScheduledPayment3 = {
  Data: { ScheduledPayment?: OBScheduledPayment3[] | undefined }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBActiveOrHistoricCurrencyAndAmount_4 = {
  Amount: OBActiveCurrencyAndAmountSimpleType
  Currency: ActiveOrHistoricCurrencyCode_1
}
type FinalPaymentDateTime = string
type OBActiveOrHistoricCurrencyAndAmount_2 = {
  Amount: OBActiveCurrencyAndAmountSimpleType
  Currency: ActiveOrHistoricCurrencyCode_1
}
type FirstPaymentDateTime = string
type Frequency_1 = string
type OBActiveOrHistoricCurrencyAndAmount_11 = {
  Amount: OBActiveCurrencyAndAmountSimpleType
  Currency: ActiveOrHistoricCurrencyCode_1
}
type LastPaymentDateTime = string
type OBActiveOrHistoricCurrencyAndAmount_3 = {
  Amount: OBActiveCurrencyAndAmountSimpleType
  Currency: ActiveOrHistoricCurrencyCode_1
}
type NextPaymentDateTime = string
type NumberOfPayments = string
type StandingOrderId = string
type OBExternalStandingOrderStatus1Code = 'Active' | 'Inactive'
type OBStandingOrder6 = {
  AccountId: AccountId
  CreditorAccount?: OBCashAccount5_1 | undefined
  CreditorAgent?: OBBranchAndFinancialInstitutionIdentification5_1 | undefined
  FinalPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount_4 | undefined
  FinalPaymentDateTime?: FinalPaymentDateTime | undefined
  FirstPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount_2 | undefined
  FirstPaymentDateTime?: FirstPaymentDateTime | undefined
  Frequency: Frequency_1
  LastPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount_11 | undefined
  LastPaymentDateTime?: LastPaymentDateTime | undefined
  NextPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount_3 | undefined
  NextPaymentDateTime?: NextPaymentDateTime | undefined
  NumberOfPayments?: NumberOfPayments | undefined
  Reference?: Reference | undefined
  StandingOrderId?: StandingOrderId | undefined
  StandingOrderStatusCode?: OBExternalStandingOrderStatus1Code | undefined
  SupplementaryData?: OBSupplementaryData1 | undefined
}
type OBReadStandingOrder6 = {
  Data: { StandingOrder?: OBStandingOrder6[] | undefined }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type EndDateTime = string
type StartDateTime = string
type OBActiveOrHistoricCurrencyAndAmount_8 = {
  Amount: OBActiveCurrencyAndAmountSimpleType
  Currency: ActiveOrHistoricCurrencyCode_1
}
type OBCreditDebitCode_0 = 'Credit' | 'Debit'
type OBExternalStatementAmountType1Code = string
type OBActiveOrHistoricCurrencyAndAmount_5 = {
  Amount: OBActiveCurrencyAndAmountSimpleType
  Currency: ActiveOrHistoricCurrencyCode_1
}
type OBExternalStatementBenefitType1Code = string
type DateTime = string
type OBExternalStatementDateTimeType1Code = string
type OBActiveOrHistoricCurrencyAndAmount_6 = {
  Amount: OBActiveCurrencyAndAmountSimpleType
  Currency: ActiveOrHistoricCurrencyCode_1
}
type Description_1 = string
type OBExternalStatementFeeFrequency1Code = string
type OBRate1_0 = number
type OBExternalStatementFeeRateType1Code = string
type OBExternalStatementFeeType1Code = string
type StatementId = string
type OBActiveOrHistoricCurrencyAndAmount_7 = {
  Amount: OBActiveCurrencyAndAmountSimpleType
  Currency: ActiveOrHistoricCurrencyCode_1
}
type Description_2 = string
type OBExternalStatementInterestFrequency1Code = string
type OBRate1_1 = number
type OBExternalStatementInterestRateType1Code = string
type OBExternalStatementInterestType1Code = string
type Rate = string
type OBExternalStatementRateType1Code = string
type StatementReference = string
type OBExternalStatementValueType1Code = string
type Value = string
type OBExternalStatementType1Code =
  | 'AccountClosure'
  | 'AccountOpening'
  | 'Annual'
  | 'Interim'
  | 'RegularPeriodic'
type OBStatement2 = {
  AccountId: AccountId
  CreationDateTime: CreationDateTime
  EndDateTime: EndDateTime
  StartDateTime: StartDateTime
  StatementAmount?:
    | {
        Amount: OBActiveOrHistoricCurrencyAndAmount_8
        CreditDebitIndicator: OBCreditDebitCode_0
        Type: OBExternalStatementAmountType1Code
      }[]
    | undefined
  StatementBenefit?:
    | { Amount: OBActiveOrHistoricCurrencyAndAmount_5; Type: OBExternalStatementBenefitType1Code }[]
    | undefined
  StatementDateTime?:
    | { DateTime: DateTime; Type: OBExternalStatementDateTimeType1Code }[]
    | undefined
  StatementDescription?: string[] | undefined
  StatementFee?:
    | {
        Amount: OBActiveOrHistoricCurrencyAndAmount_6
        CreditDebitIndicator: OBCreditDebitCode_0
        Description?: Description_1 | undefined
        Frequency?: OBExternalStatementFeeFrequency1Code | undefined
        Rate?: OBRate1_0 | undefined
        RateType?: OBExternalStatementFeeRateType1Code | undefined
        Type: OBExternalStatementFeeType1Code
      }[]
    | undefined
  StatementId?: StatementId | undefined
  StatementInterest?:
    | {
        Amount: OBActiveOrHistoricCurrencyAndAmount_7
        CreditDebitIndicator: OBCreditDebitCode_0
        Description?: Description_2 | undefined
        Frequency?: OBExternalStatementInterestFrequency1Code | undefined
        Rate?: OBRate1_1 | undefined
        RateType?: OBExternalStatementInterestRateType1Code | undefined
        Type: OBExternalStatementInterestType1Code
      }[]
    | undefined
  StatementRate?: { Rate: Rate; Type: OBExternalStatementRateType1Code }[] | undefined
  StatementReference?: StatementReference | undefined
  StatementValue?: { Type: OBExternalStatementValueType1Code; Value: Value }[] | undefined
  Type: OBExternalStatementType1Code
}
type OBReadDataStatement2 = { Statement?: OBStatement2[] | undefined }
type OBReadStatement2 = {
  Data: OBReadDataStatement2
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type File2 = { [x: string]: unknown }
type AddressLine = string
type OBActiveOrHistoricCurrencyAndAmount_9 = {
  Amount: OBActiveCurrencyAndAmountSimpleType
  Currency: ActiveOrHistoricCurrencyCode_1
}
type OBTransactionCashBalance = {
  Amount: { Amount: OBActiveCurrencyAndAmountSimpleType; Currency: ActiveOrHistoricCurrencyCode_1 }
  CreditDebitIndicator: OBCreditDebitCode_2
  Type: OBBalanceType1Code
}
type OBBankTransactionCodeStructure1 = { Code: string; SubCode: string }
type BookingDateTime = string
type OBTransactionCardInstrument1 = {
  AuthorisationType?: 'ConsumerDevice' | 'Contactless' | 'None' | 'PIN' | undefined
  CardSchemeName: 'AmericanExpress' | 'Diners' | 'Discover' | 'MasterCard' | 'VISA'
  Identification?: string | undefined
  Name?: string | undefined
}
type OBActiveOrHistoricCurrencyAndAmount_10 = {
  Amount: OBActiveCurrencyAndAmountSimpleType
  Currency: ActiveOrHistoricCurrencyCode_1
}
type OBCreditDebitCode_1 = 'Credit' | 'Debit'
type OBCashAccount6_0 = {
  Identification?: Identification_0 | undefined
  Name?: Name_0 | undefined
  SchemeName?: OBExternalAccountIdentification4Code | undefined
  SecondaryIdentification?: SecondaryIdentification | undefined
}
type Identification_2 = string
type OBBranchAndFinancialInstitutionIdentification6_1 = {
  Identification?: Identification_2 | undefined
  Name?: Name_1 | undefined
  PostalAddress?: OBPostalAddress6 | undefined
  SchemeName?: OBExternalFinancialInstitutionIdentification4Code | undefined
}
type OBCurrencyExchange5 = {
  ContractIdentification?: string | undefined
  ExchangeRate: number
  InstructedAmount?:
    | { Amount: OBActiveCurrencyAndAmountSimpleType; Currency: ActiveOrHistoricCurrencyCode_1 }
    | undefined
  QuotationDate?: string | undefined
  SourceCurrency: string
  TargetCurrency?: string | undefined
  UnitCurrency?: string | undefined
}
type OBCashAccount6_1 = {
  Identification?: Identification_0 | undefined
  Name?: Name_0 | undefined
  SchemeName?: OBExternalAccountIdentification4Code | undefined
  SecondaryIdentification?: SecondaryIdentification | undefined
}
type OBBranchAndFinancialInstitutionIdentification6_2 = {
  Identification?: Identification_2 | undefined
  Name?: Name_1 | undefined
  PostalAddress?: OBPostalAddress6 | undefined
  SchemeName?: OBExternalFinancialInstitutionIdentification4Code | undefined
}
type OBMerchantDetails1 = {
  MerchantCategoryCode?: string | undefined
  MerchantName?: string | undefined
}
type ProprietaryBankTransactionCodeStructure1 = { Code: string; Issuer?: string | undefined }
type OBEntryStatus1Code = 'Booked' | 'Pending'
type TransactionId = string
type TransactionInformation = string
type OBTransactionMutability1Code = 'Mutable' | 'Immutable'
type TransactionReference = string
type ValueDateTime = string
type OBTransaction6 = {
  AccountId: AccountId
  AddressLine?: AddressLine | undefined
  Amount: OBActiveOrHistoricCurrencyAndAmount_9
  Balance?: OBTransactionCashBalance | undefined
  BankTransactionCode?: OBBankTransactionCodeStructure1 | undefined
  BookingDateTime: BookingDateTime
  CardInstrument?: OBTransactionCardInstrument1 | undefined
  ChargeAmount?: OBActiveOrHistoricCurrencyAndAmount_10 | undefined
  CreditDebitIndicator: OBCreditDebitCode_1
  CreditorAccount?: OBCashAccount6_0 | undefined
  CreditorAgent?: OBBranchAndFinancialInstitutionIdentification6_1 | undefined
  CurrencyExchange?: OBCurrencyExchange5 | undefined
  DebtorAccount?: OBCashAccount6_1 | undefined
  DebtorAgent?: OBBranchAndFinancialInstitutionIdentification6_2 | undefined
  MerchantDetails?: OBMerchantDetails1 | undefined
  ProprietaryBankTransactionCode?: ProprietaryBankTransactionCodeStructure1 | undefined
  StatementReference?: StatementReference[] | undefined
  Status: OBEntryStatus1Code
  SupplementaryData?: OBSupplementaryData1 | undefined
  TransactionId?: TransactionId | undefined
  TransactionInformation?: TransactionInformation | undefined
  TransactionMutability?: OBTransactionMutability1Code | undefined
  TransactionReference?: TransactionReference | undefined
  ValueDateTime?: ValueDateTime | undefined
}
type OBReadDataTransaction6 = { Transaction?: OBTransaction6[] | undefined }
type OBReadTransaction6 = {
  Data: OBReadDataTransaction6
  Links?: Links | undefined
  Meta?: Meta | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account-access-consents': {
      $post:
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBReadConsent1 }
            output: OBReadConsentResponse1
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
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBReadConsent1 }
            output: OBReadConsentResponse1
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
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBReadConsent1 }
            output: OBReadConsentResponse1
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
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBReadConsent1 }
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
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBReadConsent1 }
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
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBReadConsent1 }
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
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBReadConsent1 }
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
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBReadConsent1 }
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
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBReadConsent1 }
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
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBReadConsent1 }
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
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBReadConsent1 }
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
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBReadConsent1 }
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
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBReadConsent1 }
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
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBReadConsent1 }
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
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBReadConsent1 }
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
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBReadConsent1 }
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
                'x-customer-user-agent'?: string | undefined
              }
            } & { json: OBReadConsent1 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/account-access-consents/:ConsentId': {
      $delete:
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
            status: 204
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
            output: OBReadConsentResponse1
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
            output: OBReadConsentResponse1
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
            output: OBReadConsentResponse1
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
    '/accounts': {
      $get:
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadAccount6
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadAccount6
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadAccount6
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
    '/accounts/:AccountId': {
      $get:
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadAccount6
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadAccount6
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadAccount6
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
    '/accounts/:AccountId/balances': {
      $get:
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadBalance1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadBalance1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadBalance1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
    '/accounts/:AccountId/beneficiaries': {
      $get:
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadBeneficiary5
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadBeneficiary5
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadBeneficiary5
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
    '/accounts/:AccountId/direct-debits': {
      $get:
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadDirectDebit2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadDirectDebit2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadDirectDebit2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
    '/accounts/:AccountId/offers': {
      $get:
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadOffer1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadOffer1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadOffer1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
    '/accounts/:AccountId/parties': {
      $get:
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadParty3
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadParty3
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadParty3
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
    '/accounts/:AccountId/party': {
      $get:
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadParty2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadParty2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadParty2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
    '/accounts/:AccountId/product': {
      $get:
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadProduct2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadProduct2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadProduct2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
    '/accounts/:AccountId/scheduled-payments': {
      $get:
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadScheduledPayment3
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadScheduledPayment3
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadScheduledPayment3
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
    '/accounts/:AccountId/standing-orders': {
      $get:
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadStandingOrder6
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadStandingOrder6
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadStandingOrder6
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
            input: { param: { AccountId: string } } & {
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
    '/accounts/:AccountId/statements': {
      $get:
        | {
            input: { param: { AccountId: string } } & {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadStatement2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadStatement2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadStatement2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
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
            input: { param: { AccountId: string } } & {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
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
            input: { param: { AccountId: string } } & {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
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
            input: { param: { AccountId: string } } & {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
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
            input: { param: { AccountId: string } } & {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
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
            input: { param: { AccountId: string } } & {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
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
            input: { param: { AccountId: string } } & {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
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
            input: { param: { AccountId: string } } & {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
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
            input: { param: { AccountId: string } } & {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
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
            input: { param: { AccountId: string } } & {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
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
            input: { param: { AccountId: string } } & {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
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
            input: { param: { AccountId: string } } & {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
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
            input: { param: { AccountId: string } } & {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
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
            input: { param: { AccountId: string } } & {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
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
    '/accounts/:AccountId/statements/:StatementId': {
      $get:
        | {
            input: { param: { StatementId: string; AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadStatement2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { StatementId: string; AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadStatement2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { StatementId: string; AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadStatement2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
    '/accounts/:AccountId/statements/:StatementId/file': {
      $get:
        | {
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
    '/accounts/:AccountId/statements/:StatementId/transactions': {
      $get:
        | {
            input: { param: { StatementId: string; AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadTransaction6
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { StatementId: string; AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadTransaction6
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { StatementId: string; AccountId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadTransaction6
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
            input: { param: { StatementId: string; AccountId: string } } & {
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
    '/accounts/:AccountId/transactions': {
      $get:
        | {
            input: { param: { AccountId: string } } & {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadTransaction6
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadTransaction6
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadTransaction6
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { AccountId: string } } & {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
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
            input: { param: { AccountId: string } } & {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
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
            input: { param: { AccountId: string } } & {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
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
            input: { param: { AccountId: string } } & {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
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
            input: { param: { AccountId: string } } & {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
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
            input: { param: { AccountId: string } } & {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
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
            input: { param: { AccountId: string } } & {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
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
            input: { param: { AccountId: string } } & {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
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
            input: { param: { AccountId: string } } & {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
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
            input: { param: { AccountId: string } } & {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
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
            input: { param: { AccountId: string } } & {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
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
            input: { param: { AccountId: string } } & {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
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
            input: { param: { AccountId: string } } & {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
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
    '/balances': {
      $get:
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadBalance1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadBalance1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadBalance1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
    '/beneficiaries': {
      $get:
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadBeneficiary5
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadBeneficiary5
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadBeneficiary5
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
    '/direct-debits': {
      $get:
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadDirectDebit2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadDirectDebit2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadDirectDebit2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
    '/offers': {
      $get:
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadOffer1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadOffer1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadOffer1
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
    '/party': {
      $get:
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadParty2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadParty2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadParty2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
    '/products': {
      $get:
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadProduct2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadProduct2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadProduct2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
    '/scheduled-payments': {
      $get:
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadScheduledPayment3
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadScheduledPayment3
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadScheduledPayment3
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
    '/standing-orders': {
      $get:
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadStandingOrder6
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadStandingOrder6
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadStandingOrder6
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
            input: {
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
    '/statements': {
      $get:
        | {
            input: {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadStatement2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadStatement2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadStatement2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
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
            input: {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
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
            input: {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
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
            input: {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
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
            input: {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
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
            input: {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
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
            input: {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
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
            input: {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
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
            input: {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
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
            input: {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
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
            input: {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
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
            input: {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
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
            input: {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
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
            input: {
              query: {
                fromStatementDateTime?: string | undefined
                toStatementDateTime?: string | undefined
              }
            } & {
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
    '/transactions': {
      $get:
        | {
            input: {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadTransaction6
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadTransaction6
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
              }
            }
            output: OBReadTransaction6
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
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
            input: {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
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
            input: {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
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
            input: {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
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
            input: {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
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
            input: {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
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
            input: {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
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
            input: {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
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
            input: {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
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
            input: {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
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
            input: {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
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
            input: {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
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
            input: {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
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
            input: {
              query: {
                fromBookingDateTime?: string | undefined
                toBookingDateTime?: string | undefined
              }
            } & {
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
