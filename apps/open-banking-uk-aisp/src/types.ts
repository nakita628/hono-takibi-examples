type OBRisk2 = {}
type OBReadConsent1 = {
  Data: {
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
    ExpirationDateTime?: string | undefined
    TransactionFromDateTime?: string | undefined
    TransactionToDateTime?: string | undefined
  }
  Risk: OBRisk2
}
type CreationDateTime = string
type OBInternalConsentStatus1Code = 'AWAU' | 'RJCT' | 'AUTH' | 'CANC' | 'EXPD'
type OBStatusReason = {
  StatusReasonCode?: string | undefined
  StatusReasonDescription?: string | undefined
  Path?: string | undefined
}
type StatusUpdateDateTime = string
type Links = {
  Self: string
  First?: string | undefined
  Prev?: string | undefined
  Next?: string | undefined
  Last?: string | undefined
}
type ISODateTime = string
type Meta = {
  TotalPages?: number | undefined
  FirstAvailableDateTime?: ISODateTime | undefined
  LastAvailableDateTime?: ISODateTime | undefined
}
type OBReadConsentResponse1 = {
  Data: {
    ConsentId: string
    CreationDateTime: CreationDateTime
    Status: OBInternalConsentStatus1Code
    StatusReason?: OBStatusReason[] | undefined
    StatusUpdateDateTime: StatusUpdateDateTime
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
    ExpirationDateTime?: string | undefined
    TransactionFromDateTime?: string | undefined
    TransactionToDateTime?: string | undefined
  }
  Risk: OBRisk2
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBExternalStatusReason1Code = string
type OBError1 = {
  ErrorCode: OBExternalStatusReason1Code
  Message?: string | undefined
  Path?: string | undefined
  Url?: string | undefined
}
type OBErrorResponse1 = {
  Id?: string | undefined
  Code?: string | undefined
  Message?: string | undefined
  Errors: OBError1[]
}
type AccountId = string
type OBInternalAccountStatus1Code = 'Deleted' | 'Disabled' | 'Enabled' | 'Pending' | 'ProForma'
type ActiveOrHistoricCurrencyCode_0 = string
type OBInternalAccountType1Code = 'Business' | 'Personal'
type OBExternalAccountSubType1Code =
  | 'CACC'
  | 'CARD'
  | 'CASH'
  | 'CHAR'
  | 'CISH'
  | 'COMM'
  | 'CPAC'
  | 'LLSV'
  | 'LOAN'
  | 'MGLD'
  | 'MOMA'
  | 'NREX'
  | 'ODFT'
  | 'ONDP'
  | 'OTHR'
  | 'SACC'
  | 'SLRY'
  | 'SVGS'
  | 'TAXE'
  | 'TRAN'
  | 'TRAS'
  | 'VACC'
  | 'NFCA'
  | 'MORT'
  | 'WALT'
type Description_0 = string
type Nickname = string
type OpeningDate = string
type MaturityDate = string
type OBInternalSwitchStatusCode = string
type OBInternalAccountIdentification4Code = string
type Identification_0 = string
type Name_0 = string
type LEI = string
type SecondaryIdentification = string
type OBFrequency2 =
  | 'YEAR'
  | 'DAIL'
  | 'INDA'
  | 'MNTH'
  | 'QURT'
  | 'MIAN'
  | 'TEND'
  | 'MOVE'
  | 'WEEK'
  | 'NONE'
  | 'SLCT'
type OBCommunicationMethod = 'EMAL' | 'FAXI' | 'FILE' | 'ONLI' | 'POST'
type OBFileFormat = 'DPDF' | 'DXML' | 'SDSH' | 'WORD' | 'XSLT' | 'DCSV'
type OBAddressType2Code = 'BIZZ' | 'DLVY' | 'MLTO' | 'PBOX' | 'ADDR' | 'HOME' | 'CORR' | 'STAT'
type StreetName = string
type BuildingNumber = string
type BuildingName = string
type Floor = string
type UnitNumber = string
type Room = string
type PostBox = string
type TownName = string
type DistrictName = string
type CareOf = string
type PostCode = string
type OBPostalAddress7 = {
  AddressType?: OBAddressType2Code | undefined
  Department?: string | undefined
  SubDepartment?: string | undefined
  StreetName?: StreetName | undefined
  BuildingNumber?: BuildingNumber | undefined
  BuildingName?: BuildingName | undefined
  Floor?: Floor | undefined
  UnitNumber?: UnitNumber | undefined
  Room?: Room | undefined
  PostBox?: PostBox | undefined
  TownLocationName?: TownName | undefined
  DistrictName?: DistrictName | undefined
  CareOf?: CareOf | undefined
  PostCode?: PostCode | undefined
  TownName?: TownName | undefined
  CountrySubDivision?: string | undefined
  Country?: string | undefined
  AddressLine?: string[] | undefined
}
type StatementFrequencyAndFormat = {
  Frequency?: OBFrequency2 | undefined
  CommunicationMethod?: OBCommunicationMethod | undefined
  Format?: OBFileFormat | undefined
  DeliveryAddress?: OBPostalAddress7 | undefined
}[]
type OBInternalFinancialInstitutionIdentification4Code = string
type Identification_1 = string
type Name_1 = string
type OBBranchAndFinancialInstitutionIdentification5_0 = {
  SchemeName: OBInternalFinancialInstitutionIdentification4Code
  Identification: Identification_1
  Name?: Name_1 | undefined
}
type OBAccount6 = {
  AccountId: AccountId
  Status?: OBInternalAccountStatus1Code | undefined
  StatusUpdateDateTime?: StatusUpdateDateTime | undefined
  Currency?: ActiveOrHistoricCurrencyCode_0 | undefined
  AccountCategory?: OBInternalAccountType1Code | undefined
  AccountTypeCode?: OBExternalAccountSubType1Code | undefined
  Description?: Description_0 | undefined
  Nickname?: Nickname | undefined
  OpeningDate?: OpeningDate | undefined
  MaturityDate?: MaturityDate | undefined
  SwitchStatus?: OBInternalSwitchStatusCode | undefined
  Account?:
    | {
        SchemeName: OBInternalAccountIdentification4Code
        Identification: Identification_0
        Name?: Name_0 | undefined
        LEI?: LEI | undefined
        SecondaryIdentification?: SecondaryIdentification | undefined
      }[]
    | undefined
  StatementFrequencyAndFormat?: StatementFrequencyAndFormat | undefined
  Servicer?: OBBranchAndFinancialInstitutionIdentification5_0 | undefined
}
type OBReadAccount6 = {
  Data: { Account?: OBAccount6[] | undefined }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBCreditDebitCode_2 = 'Credit' | 'Debit'
type OBBalanceType1Code =
  | 'CLAV'
  | 'CLBD'
  | 'FWAV'
  | 'INFO'
  | 'ITAV'
  | 'ITBD'
  | 'OPAV'
  | 'OPBD'
  | 'PRCD'
  | 'XPCD'
type OBActiveCurrencyAndAmountSimpleType = string
type ActiveOrHistoricCurrencyCode_1 = string
type OBReadBalance1 = {
  Data: {
    Balance: {
      AccountId: AccountId
      CreditDebitIndicator: OBCreditDebitCode_2
      Type: OBBalanceType1Code
      DateTime: string
      Amount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode_1
        SubType?: 'BCUR' | 'LCUR' | undefined
      }
      CreditLine?:
        | {
            Included: boolean
            Type?: 'Available' | 'Credit' | 'Emergency' | 'Pre-Agreed' | 'Temporary' | undefined
            Amount?:
              | {
                  Amount: OBActiveCurrencyAndAmountSimpleType
                  Currency: ActiveOrHistoricCurrencyCode_1
                }
              | undefined
          }[]
        | undefined
      LocalAmount?:
        | {
            Amount: OBActiveCurrencyAndAmountSimpleType
            Currency: ActiveOrHistoricCurrencyCode_1
            SubType?: 'BCUR' | 'LCUR' | undefined
          }
        | undefined
    }[]
    TotalValue?:
      | { Amount: OBActiveCurrencyAndAmountSimpleType; Currency: ActiveOrHistoricCurrencyCode_1 }
      | undefined
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type BeneficiaryId = string
type OBInternalBeneficiaryType1Code = 'Trusted' | 'Ordinary'
type Reference = string
type OBSupplementaryData1 = { [x: string]: unknown }
type OBBranchAndFinancialInstitutionIdentification6_0 = {
  SchemeName?: OBInternalFinancialInstitutionIdentification4Code | undefined
  Identification?: Identification_1 | undefined
  Name?: Name_1 | undefined
  PostalAddress?: OBPostalAddress7 | undefined
  LEI?: LEI | undefined
}
type ExternalProxyAccountType1Code =
  | 'TELE'
  | 'EMAL'
  | 'DNAM'
  | 'CINC'
  | 'COTX'
  | 'COID'
  | 'CUST'
  | 'DRLC'
  | 'EIDN'
  | 'EWAL'
  | 'PVTX'
  | 'LEIC'
  | 'MBNO'
  | 'NIDN'
  | 'CCPT'
  | 'SHID'
  | 'SOSE'
  | 'TOKN'
  | 'UBIL'
  | 'VIPN'
  | 'BIID'
type OBProxy1 = {
  Identification: string
  Code: ExternalProxyAccountType1Code
  Type?: string | undefined
}
type OBCashAccount5_0 = {
  SchemeName: OBInternalAccountIdentification4Code
  Identification: Identification_0
  Name?: Name_0 | undefined
  SecondaryIdentification?: SecondaryIdentification | undefined
  Proxy?: OBProxy1 | undefined
}
type OBBeneficiary5 = {
  AccountId?: AccountId | undefined
  BeneficiaryId?: BeneficiaryId | undefined
  BeneficiaryType?: OBInternalBeneficiaryType1Code | undefined
  Reference?: Reference | undefined
  SupplementaryData?: OBSupplementaryData1 | undefined
  CreditorAgent?: OBBranchAndFinancialInstitutionIdentification6_0 | undefined
  CreditorAccount?: OBCashAccount5_0 | undefined
}
type OBReadBeneficiary5 = {
  Data: { Beneficiary?: OBBeneficiary5[] | undefined }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type DirectDebitId = string
type ExternalMandateStatus1Code = 'ACTV' | 'CANC' | 'EXPI' | 'SUSP'
type OBExternalMandateClassification1Code = 'FIXE' | 'USGB' | 'VARI'
type ExternalCategoryPurpose1Code =
  | 'BONU'
  | 'CASH'
  | 'CBLK'
  | 'CCRD'
  | 'CGWV'
  | 'CIPC'
  | 'CONC'
  | 'CORT'
  | 'DCRD'
  | 'DIVI'
  | 'DVPM'
  | 'EPAY'
  | 'FCDT'
  | 'FCIN'
  | 'FCOL'
  | 'GOVT'
  | 'GP2P'
  | 'HEDG'
  | 'ICCP'
  | 'IDCP'
  | 'INTC'
  | 'INTE'
  | 'LBOX'
  | 'LOAN'
  | 'MP2B'
  | 'MP2P'
  | 'OTHR'
  | 'PENS'
  | 'RPRE'
  | 'RRCT'
  | 'RVPM'
  | 'SALA'
  | 'SECU'
  | 'SSBE'
  | 'SUPP'
  | 'SWEP'
  | 'TAXS'
  | 'TOPG'
  | 'TRAD'
  | 'TREA'
  | 'VATX'
  | 'VOST'
  | 'WHLD'
  | 'ZABA'
type OBFrequency6Code =
  | 'ADHO'
  | 'YEAR'
  | 'DAIL'
  | 'FRTN'
  | 'INDA'
  | 'MNTH'
  | 'QURT'
  | 'MIAN'
  | 'WEEK'
  | 'WODL'
  | 'FOWK'
  | 'TWMH'
  | 'FOMH'
  | 'FIMH'
  | 'ALMH'
  | 'NONE'
  | 'LWMH'
  | 'LXMH'
  | 'TWYR'
type Frequency_1 = string
type PointInTime = string
type OBFrequency6 = {
  Type: OBFrequency6Code | Frequency_1
  CountPerPeriod?: number | undefined
  PointInTime?: PointInTime | undefined
}
type OBMandateRelatedInformation1 = {
  MandateIdentification?: string | undefined
  Classification?: OBExternalMandateClassification1Code | undefined
  CategoryPurposeCode?: ExternalCategoryPurpose1Code | undefined
  FirstPaymentDateTime?: string | undefined
  RecurringPaymentDateTime?: string | undefined
  FinalPaymentDateTime?: string | undefined
  Frequency: OBFrequency6
  Reason?: string | undefined
}
type Name_2 = string
type PreviousPaymentDateTime = string
type OBActiveOrHistoricCurrencyAndAmount_0 = {
  Amount: OBActiveCurrencyAndAmountSimpleType
  Currency: ActiveOrHistoricCurrencyCode_1
}
type OBReadDirectDebit2 = {
  Data: {
    DirectDebit?:
      | {
          AccountId: AccountId
          DirectDebitId?: DirectDebitId | undefined
          DirectDebitStatusCode?: ExternalMandateStatus1Code | undefined
          MandateRelatedInformation?: OBMandateRelatedInformation1 | undefined
          Name: Name_2
          PreviousPaymentDateTime?: PreviousPaymentDateTime | undefined
          PreviousPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount_0 | undefined
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
          OfferId?: string | undefined
          OfferType?:
            | 'BalanceTransfer'
            | 'LimitIncrease'
            | 'MoneyTransfer'
            | 'Other'
            | 'PromotionalRate'
            | undefined
          Description?: string | undefined
          StartDateTime?: string | undefined
          EndDateTime?: string | undefined
          Rate?: string | undefined
          Value?: number | undefined
          Term?: string | undefined
          URL?: string | undefined
          Amount?:
            | {
                Amount: OBActiveCurrencyAndAmountSimpleType
                Currency: ActiveOrHistoricCurrencyCode_1
              }
            | undefined
          Fee?:
            | {
                Amount: OBActiveCurrencyAndAmountSimpleType
                Currency: ActiveOrHistoricCurrencyCode_1
              }
            | undefined
        }[]
      | undefined
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type PartyId = string
type PartyNumber = string
type OBInternalPartyType1Code = 'Delegate' | 'Joint' | 'Sole'
type Name_3 = string
type FullLegalName = string
type OBInternalLegalStructureType1Code = string
type OBInternalAccountRole1Code = string
type EmailAddress = string
type PhoneNumber_0 = string
type PhoneNumber_1 = string
type OBPartyRelationships1 = { Account?: { Related: string; Id: string } | undefined }
type OBParty2 = {
  PartyId: PartyId
  PartyNumber?: PartyNumber | undefined
  PartyType?: OBInternalPartyType1Code | undefined
  Name?: Name_3 | undefined
  FullLegalName?: FullLegalName | undefined
  LegalStructure?: OBInternalLegalStructureType1Code | undefined
  LEI?: LEI | undefined
  BeneficialOwnership?: boolean | undefined
  AccountRole?: OBInternalAccountRole1Code | undefined
  EmailAddress?: EmailAddress | undefined
  Phone?: PhoneNumber_0 | undefined
  Mobile?: PhoneNumber_1 | undefined
  Relationships?: OBPartyRelationships1 | undefined
  Address?: OBPostalAddress7[] | undefined
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
type OBCodeMnemonic = string
type Name_4 = string
type Description_3 = string
type OBOtherCodeType1_0 = {
  Code?: OBCodeMnemonic | undefined
  Name: Name_4
  Description: Description_3
}
type OBInterestCalculationMethod1Code = 'ITCO' | 'ITOT' | 'ITSI'
type OBInterestFixedVariableType1Code = 'INFI' | 'INVA'
type OBOtherCodeType1_1 = {
  Code?: OBCodeMnemonic | undefined
  Name: Name_4
  Description: Description_3
}
type OBOtherCodeType1_2 = {
  Code?: OBCodeMnemonic | undefined
  Name: Name_4
  Description: Description_3
}
type OBMinMaxType1Code = 'FMMN' | 'FMMX'
type Number_0 = number
type OBAmount1_0 = string
type OBPeriod1Code = 'PACT' | 'PDAY' | 'PHYR' | 'PMTH' | 'PQTR' | 'PWEK' | 'PYER'
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
type OBAmount1_2 = string
type OBRate1_02 = string
type OBInterestRateType1Code_0 = 'INBB' | 'INFR' | 'INGR' | 'INLR' | 'INNE' | 'INOT'
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
type OBOtherCodeType1_3 = {
  Code?: OBCodeMnemonic | undefined
  Name: Name_4
  Description: Description_3
}
type OBOtherCodeType1_4 = {
  Code?: OBCodeMnemonic | undefined
  Name: Name_4
  Description: Description_3
}
type OBFeeType1Code = 'FEPF' | 'FTOT' | 'FYAF' | 'FYAM' | 'FYAQ' | 'FYCP' | 'FYDB' | 'FYMI' | 'FYXX'
type OBAmount1_3 = string
type OBRate1_12 = string
type OBInterestRateType1Code_1 = 'INBB' | 'INFR' | 'INGR' | 'INLR' | 'INNE' | 'INOT'
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
type OBFeeCategory1Code = 'FCOT' | 'FCRE' | 'FCSV'
type OBOtherFeeChargeDetailType = {
  Code?: OBCodeMnemonic | undefined
  FeeCategory: OBFeeCategory1Code
  Name: Name_4
  Description: Description_3
}
type OBOtherCodeType1_5 = {
  Code?: OBCodeMnemonic | undefined
  Name: Name_4
  Description: Description_3
}
type OBOtherCodeType1_6 = {
  Code?: OBCodeMnemonic | undefined
  Name: Name_4
  Description: Description_3
}
type OBOtherCodeType1_7 = {
  Code?: OBCodeMnemonic | undefined
  Name: Name_4
  Description: Description_3
}
type Number_1 = number
type OBAmount1_4 = string
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
type OBOtherCodeType1_8 = {
  Code?: OBCodeMnemonic | undefined
  Name: Name_4
  Description: Description_3
}
type OBBCAData1 = {
  ProductDetails?:
    | {
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
      }
    | undefined
  CreditInterest?:
    | {
        TierBandSet: {
          TierBandMethod: 'Banded' | 'Tiered' | 'Whole'
          CalculationMethod?: 'Compound' | 'SimpleInterest' | undefined
          Destination: 'PayAway' | 'SelfCredit'
          Notes?: string[] | undefined
          TierBand: {
            Identification?: string | undefined
            TierValueMinimum: string
            TierValueMaximum?: string | undefined
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
            ApplicationFrequency:
              | 'Daily'
              | 'HalfYearly'
              | 'Monthly'
              | 'Other'
              | 'Quarterly'
              | 'PerStatementDate'
              | 'Weekly'
              | 'Yearly'
            DepositInterestAppliedCoverage?: 'Banded' | 'Tiered' | 'Whole' | undefined
            FixedVariableInterestRateType: 'Fixed' | 'Variable'
            AER: string
            BankInterestRateType?: 'Gross' | 'Other' | undefined
            BankInterestRate?: string | undefined
            Notes?: string[] | undefined
            OtherBankInterestType?:
              | { Code?: string | undefined; Name: string; Description: string }
              | undefined
            OtherApplicationFrequency?:
              | { Code?: string | undefined; Name: string; Description: string }
              | undefined
            OtherCalculationFrequency?:
              | { Code?: string | undefined; Name: string; Description: string }
              | undefined
          }[]
        }[]
      }
    | undefined
  Overdraft?:
    | {
        Notes?: string[] | undefined
        OverdraftTierBandSet: {
          TierBandMethod: 'Banded' | 'Tiered' | 'Whole'
          OverdraftType?: 'Committed' | 'OnDemand' | undefined
          Identification?: string | undefined
          AuthorisedIndicator?: boolean | undefined
          BufferAmount?: string | undefined
          Notes?: string[] | undefined
          OverdraftTierBand: {
            Identification?: string | undefined
            TierValueMin: string
            TierValueMax?: string | undefined
            EAR?: string | undefined
            RepresentativeAPR?: string | undefined
            AgreementLengthMin?: number | undefined
            AgreementLengthMax?: number | undefined
            AgreementPeriod?:
              | 'Day'
              | 'Half Year'
              | 'Month'
              | 'Quarter'
              | 'Week'
              | 'Year'
              | undefined
            OverdraftInterestChargingCoverage?: 'Banded' | 'Tiered' | 'Whole' | undefined
            BankGuaranteedIndicator?: boolean | undefined
            Notes?: string[] | undefined
            OverdraftFeesCharges?:
              | {
                  OverdraftFeeChargeCap?:
                    | {
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
                        FeeCapOccurrence?: number | undefined
                        FeeCapAmount?: string | undefined
                        CappingPeriod?:
                          | 'Day'
                          | 'Half Year'
                          | 'Month'
                          | 'Quarter'
                          | 'Week'
                          | 'Year'
                          | undefined
                        Notes?: string[] | undefined
                        OtherFeeType?:
                          | { Code?: string | undefined; Name: string; Description: string }[]
                          | undefined
                      }[]
                    | undefined
                  OverdraftFeeChargeDetail: {
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
                    NegotiableIndicator?: boolean | undefined
                    OverdraftControlIndicator?: boolean | undefined
                    IncrementalBorrowingAmount?: string | undefined
                    FeeAmount?: string | undefined
                    FeeRate?: string | undefined
                    FeeRateType?: 'Gross' | 'Other' | undefined
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
                    Notes?: string[] | undefined
                    OverdraftFeeChargeCap?:
                      | {
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
                          FeeCapOccurrence?: number | undefined
                          FeeCapAmount?: string | undefined
                          CappingPeriod?:
                            | 'Day'
                            | 'Half Year'
                            | 'Month'
                            | 'Quarter'
                            | 'Week'
                            | 'Year'
                            | undefined
                          Notes?: string[] | undefined
                          OtherFeeType?:
                            | { Code?: string | undefined; Name: string; Description: string }[]
                            | undefined
                        }[]
                      | undefined
                    OtherFeeType?:
                      | { Code?: string | undefined; Name: string; Description: string }
                      | undefined
                    OtherFeeRateType?:
                      | { Code?: string | undefined; Name: string; Description: string }
                      | undefined
                    OtherApplicationFrequency?:
                      | { Code?: string | undefined; Name: string; Description: string }
                      | undefined
                    OtherCalculationFrequency?:
                      | { Code?: string | undefined; Name: string; Description: string }
                      | undefined
                  }[]
                }[]
              | undefined
          }[]
          OverdraftFeesCharges?:
            | {
                OverdraftFeeChargeCap?:
                  | {
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
                      FeeCapOccurrence?: number | undefined
                      FeeCapAmount?: string | undefined
                      CappingPeriod?:
                        | 'Day'
                        | 'Half Year'
                        | 'Month'
                        | 'Quarter'
                        | 'Week'
                        | 'Year'
                        | undefined
                      Notes?: string[] | undefined
                      OtherFeeType?:
                        | { Code?: string | undefined; Name: string; Description: string }[]
                        | undefined
                    }[]
                  | undefined
                OverdraftFeeChargeDetail: {
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
                  NegotiableIndicator?: boolean | undefined
                  OverdraftControlIndicator?: boolean | undefined
                  IncrementalBorrowingAmount?: string | undefined
                  FeeAmount?: string | undefined
                  FeeRate?: string | undefined
                  FeeRateType?: 'Gross' | 'Other' | undefined
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
                  Notes?: string[] | undefined
                  OverdraftFeeChargeCap?:
                    | {
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
                        FeeCapOccurrence?: number | undefined
                        FeeCapAmount?: string | undefined
                        CappingPeriod?:
                          | 'Day'
                          | 'Half Year'
                          | 'Month'
                          | 'Quarter'
                          | 'Week'
                          | 'Year'
                          | undefined
                        Notes?: string[] | undefined
                        OtherFeeType?:
                          | { Code?: string | undefined; Name: string; Description: string }[]
                          | undefined
                      }[]
                    | undefined
                  OtherFeeType?:
                    | { Code?: string | undefined; Name: string; Description: string }
                    | undefined
                  OtherFeeRateType?:
                    | { Code?: string | undefined; Name: string; Description: string }
                    | undefined
                  OtherApplicationFrequency?:
                    | { Code?: string | undefined; Name: string; Description: string }
                    | undefined
                  OtherCalculationFrequency?:
                    | { Code?: string | undefined; Name: string; Description: string }
                    | undefined
                }[]
              }[]
            | undefined
        }[]
      }
    | undefined
  OtherFeesCharges?:
    | {
        TariffType?: 'Electronic' | 'Mixed' | 'Other' | undefined
        TariffName?: string | undefined
        OtherTariffType?:
          | { Code?: string | undefined; Name: string; Description: string }
          | undefined
        FeeChargeDetail: {
          FeeCategory: 'Other' | 'Servicing'
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
          FeeAmount?: string | undefined
          FeeRate?: string | undefined
          FeeRateType?: 'Gross' | 'Other' | undefined
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
          Notes?: string[] | undefined
          FeeChargeCap?:
            | {
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
                FeeCapOccurrence?: number | undefined
                FeeCapAmount?: string | undefined
                CappingPeriod?:
                  | 'Day'
                  | 'Half Year'
                  | 'Month'
                  | 'Quarter'
                  | 'Week'
                  | 'Year'
                  | undefined
                Notes?: string[] | undefined
                OtherFeeType?:
                  | { Code?: string | undefined; Name: string; Description: string }[]
                  | undefined
              }[]
            | undefined
          OtherFeeCategoryType?:
            | { Code?: string | undefined; Name: string; Description: string }
            | undefined
          OtherFeeType?:
            | {
                Code?: string | undefined
                FeeCategory: 'Other' | 'Servicing'
                Name: string
                Description: string
              }
            | undefined
          OtherFeeRateType?:
            | { Code?: string | undefined; Name: string; Description: string }
            | undefined
          OtherApplicationFrequency?:
            | { Code?: string | undefined; Name: string; Description: string }
            | undefined
          OtherCalculationFrequency?:
            | { Code?: string | undefined; Name: string; Description: string }
            | undefined
          FeeApplicableRange?:
            | {
                MinimumAmount?: string | undefined
                MaximumAmount?: string | undefined
                MinimumRate?: string | undefined
                MaximumRate?: string | undefined
              }
            | undefined
        }[]
        FeeChargeCap?:
          | {
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
              FeeCapOccurrence?: number | undefined
              FeeCapAmount?: string | undefined
              CappingPeriod?:
                | 'Day'
                | 'Half Year'
                | 'Month'
                | 'Quarter'
                | 'Week'
                | 'Year'
                | undefined
              Notes?: string[] | undefined
              OtherFeeType?:
                | { Code?: string | undefined; Name: string; Description: string }[]
                | undefined
            }[]
          | undefined
      }[]
    | undefined
}
type OBPCAData1 = {
  ProductDetails?:
    | {
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
        MonthlyMaximumCharge?: string | undefined
        Notes?: string[] | undefined
      }
    | undefined
  CreditInterest?:
    | {
        TierBandSet: {
          TierBandMethod: 'Tiered' | 'Whole'
          CalculationMethod?: 'Compound' | 'SimpleInterest' | undefined
          Destination?: 'PayAway' | 'SelfCredit' | undefined
          Notes?: string[] | undefined
          TierBand: {
            Identification?: string | undefined
            TierValueMinimum: string
            TierValueMaximum?: string | undefined
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
            DepositInterestAppliedCoverage?: 'Tiered' | 'Whole' | undefined
            FixedVariableInterestRateType: 'Fixed' | 'Variable'
            AER: string
            BankInterestRateType?: 'LinkedBaseRate' | 'Gross' | 'Net' | 'Other' | undefined
            BankInterestRate?: string | undefined
            Notes?: string[] | undefined
            OtherBankInterestType?:
              | { Code?: string | undefined; Name: string; Description: string }
              | undefined
            OtherApplicationFrequency?:
              | { Code?: string | undefined; Name: string; Description: string }
              | undefined
            OtherCalculationFrequency?:
              | { Code?: string | undefined; Name: string; Description: string }
              | undefined
          }[]
        }[]
      }
    | undefined
  Overdraft?:
    | {
        Notes?: string[] | undefined
        OverdraftTierBandSet: {
          TierBandMethod: 'Tiered' | 'Whole' | 'Banded'
          OverdraftType?: 'Committed' | 'OnDemand' | 'Other' | undefined
          Identification?: string | undefined
          AuthorisedIndicator?: boolean | undefined
          BufferAmount?: string | undefined
          Notes?: string[] | undefined
          OverdraftTierBand: {
            Identification?: string | undefined
            TierValueMin: string
            TierValueMax?: string | undefined
            OverdraftInterestChargingCoverage?: 'Tiered' | 'Whole' | undefined
            BankGuaranteedIndicator?: boolean | undefined
            EAR?: string | undefined
            RepresentativeAPR?: string | undefined
            Notes?: string[] | undefined
            OverdraftFeesCharges?:
              | {
                  OverdraftFeeChargeCap?:
                    | {
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
                        OverdraftControlIndicator?: boolean | undefined
                        MinMaxType: 'Minimum' | 'Maximum'
                        FeeCapOccurrence?: number | undefined
                        FeeCapAmount?: string | undefined
                        CappingPeriod?:
                          | 'AcademicTerm'
                          | 'Day'
                          | 'Half Year'
                          | 'Month'
                          | 'Quarter'
                          | 'Week'
                          | 'Year'
                          | undefined
                        Notes?: string[] | undefined
                        OtherFeeType?:
                          | { Code?: string | undefined; Name: string; Description: string }[]
                          | undefined
                      }[]
                    | undefined
                  OverdraftFeeChargeDetail: {
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
                    OverdraftControlIndicator?: boolean | undefined
                    IncrementalBorrowingAmount?: string | undefined
                    FeeAmount?: string | undefined
                    FeeRate?: string | undefined
                    FeeRateType?: 'LinkedBaseRate' | 'Gross' | 'Net' | 'Other' | undefined
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
                    Notes?: string[] | undefined
                    OtherFeeType?:
                      | { Code?: string | undefined; Name: string; Description: string }
                      | undefined
                    OtherFeeRateType?:
                      | { Code?: string | undefined; Name: string; Description: string }
                      | undefined
                    OtherApplicationFrequency?:
                      | { Code?: string | undefined; Name: string; Description: string }
                      | undefined
                    OtherCalculationFrequency?:
                      | { Code?: string | undefined; Name: string; Description: string }
                      | undefined
                    OverdraftFeeChargeCap?:
                      | {
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
                          OverdraftControlIndicator?: boolean | undefined
                          MinMaxType: 'Minimum' | 'Maximum'
                          FeeCapOccurrence?: number | undefined
                          FeeCapAmount?: string | undefined
                          CappingPeriod?:
                            | 'AcademicTerm'
                            | 'Day'
                            | 'Half Year'
                            | 'Month'
                            | 'Quarter'
                            | 'Week'
                            | 'Year'
                            | undefined
                          Notes?: string[] | undefined
                          OtherFeeType?:
                            | { Code?: string | undefined; Name: string; Description: string }[]
                            | undefined
                        }
                      | undefined
                  }[]
                }[]
              | undefined
          }[]
          OverdraftFeesCharges?:
            | {
                OverdraftFeeChargeCap?:
                  | {
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
                      OverdraftControlIndicator?: boolean | undefined
                      MinMaxType: 'Minimum' | 'Maximum'
                      FeeCapOccurrence?: number | undefined
                      FeeCapAmount?: string | undefined
                      CappingPeriod?:
                        | 'AcademicTerm'
                        | 'Day'
                        | 'Half Year'
                        | 'Month'
                        | 'Quarter'
                        | 'Week'
                        | 'Year'
                        | undefined
                      Notes?: string[] | undefined
                      OtherFeeType?:
                        | { Code?: string | undefined; Name: string; Description: string }[]
                        | undefined
                    }[]
                  | undefined
                OverdraftFeeChargeDetail: {
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
                  OverdraftControlIndicator?: boolean | undefined
                  IncrementalBorrowingAmount?: string | undefined
                  FeeAmount?: string | undefined
                  FeeRate?: string | undefined
                  FeeRateType?: 'LinkedBaseRate' | 'Gross' | 'Net' | 'Other' | undefined
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
                  Notes?: string[] | undefined
                  OtherFeeType?:
                    | { Code?: string | undefined; Name: string; Description: string }
                    | undefined
                  OtherFeeRateType?:
                    | { Code?: string | undefined; Name: string; Description: string }
                    | undefined
                  OtherApplicationFrequency?:
                    | { Code?: string | undefined; Name: string; Description: string }
                    | undefined
                  OtherCalculationFrequency?:
                    | { Code?: string | undefined; Name: string; Description: string }
                    | undefined
                  OverdraftFeeChargeCap?:
                    | {
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
                        OverdraftControlIndicator?: boolean | undefined
                        MinMaxType: 'Minimum' | 'Maximum'
                        FeeCapOccurrence?: number | undefined
                        FeeCapAmount?: string | undefined
                        CappingPeriod?:
                          | 'AcademicTerm'
                          | 'Day'
                          | 'Half Year'
                          | 'Month'
                          | 'Quarter'
                          | 'Week'
                          | 'Year'
                          | undefined
                        Notes?: string[] | undefined
                        OtherFeeType?:
                          | { Code?: string | undefined; Name: string; Description: string }[]
                          | undefined
                      }
                    | undefined
                }[]
              }[]
            | undefined
        }[]
      }
    | undefined
  OtherFeesCharges?:
    | {
        FeeChargeDetail: {
          FeeCategory: 'Other' | 'Servicing'
          FeeType: 'ServiceCAccountFee' | 'ServiceCAccountFeeMonthly' | 'ServiceCOther' | 'Other'
          FeeAmount?: string | undefined
          FeeRate?: string | undefined
          FeeRateType?: 'LinkedBaseRate' | 'Gross' | 'Net' | 'Other' | undefined
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
          Notes?: string[] | undefined
          OtherFeeCategoryType?:
            | { Code?: string | undefined; Name: string; Description: string }
            | undefined
          OtherFeeType?:
            | {
                Code?: string | undefined
                FeeCategory: 'Other' | 'Servicing'
                Name: string
                Description: string
              }
            | undefined
          OtherFeeRateType?:
            | { Code?: string | undefined; Name: string; Description: string }
            | undefined
          OtherApplicationFrequency?:
            | { Code?: string | undefined; Name: string; Description: string }
            | undefined
          OtherCalculationFrequency?:
            | { Code?: string | undefined; Name: string; Description: string }
            | undefined
          FeeChargeCap?:
            | {
                FeeType: (
                  | 'ServiceCAccountFee'
                  | 'ServiceCAccountFeeMonthly'
                  | 'ServiceCOther'
                  | 'Other'
                )[]
                MinMaxType: 'Minimum' | 'Maximum'
                FeeCapOccurrence?: number | undefined
                FeeCapAmount?: string | undefined
                CappingPeriod?:
                  | 'AcademicTerm'
                  | 'Day'
                  | 'Half Year'
                  | 'Month'
                  | 'Quarter'
                  | 'Week'
                  | 'Year'
                  | undefined
                Notes?: string[] | undefined
                OtherFeeType?:
                  | { Code?: string | undefined; Name: string; Description: string }[]
                  | undefined
              }[]
            | undefined
          FeeApplicableRange?:
            | {
                MinimumAmount?: string | undefined
                MaximumAmount?: string | undefined
                MinimumRate?: string | undefined
                MaximumRate?: string | undefined
              }
            | undefined
        }[]
        FeeChargeCap?:
          | {
              FeeType: (
                | 'ServiceCAccountFee'
                | 'ServiceCAccountFeeMonthly'
                | 'ServiceCOther'
                | 'Other'
              )[]
              MinMaxType: 'Minimum' | 'Maximum'
              FeeCapOccurrence?: number | undefined
              FeeCapAmount?: string | undefined
              CappingPeriod?:
                | 'AcademicTerm'
                | 'Day'
                | 'Half Year'
                | 'Month'
                | 'Quarter'
                | 'Week'
                | 'Year'
                | undefined
              Notes?: string[] | undefined
              OtherFeeType?:
                | { Code?: string | undefined; Name: string; Description: string }[]
                | undefined
            }[]
          | undefined
      }
    | undefined
}
type OBReadProduct2 = {
  Data: {
    Product?:
      | {
          ProductName?: string | undefined
          ProductId?: string | undefined
          AccountId: AccountId
          SecondaryProductId?: string | undefined
          ProductType:
            | 'BusinessCurrentAccount'
            | 'CommercialCreditCard'
            | 'Other'
            | 'PersonalCurrentAccount'
            | 'SMELoan'
          MarketingStateId?: string | undefined
          OtherProductType?:
            | {
                Name: string
                Description: string
                ProductDetails?:
                  | {
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
                    }
                  | undefined
                CreditInterest?:
                  | {
                      TierBandSet: {
                        TierBandMethod: 'INBA' | 'INTI' | 'INWH'
                        CalculationMethod?: OBInterestCalculationMethod1Code | undefined
                        Destination: 'INOT' | 'INPA' | 'INSC'
                        Notes?: string[] | undefined
                        OtherCalculationMethod?: OBOtherCodeType1_0 | undefined
                        OtherDestination?: OBOtherCodeType1_0 | undefined
                        TierBand: {
                          Identification?: string | undefined
                          TierValueMinimum: string
                          TierValueMaximum?: string | undefined
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
                          DepositInterestAppliedCoverage?: 'INBA' | 'INTI' | 'INWH' | undefined
                          FixedVariableInterestRateType: OBInterestFixedVariableType1Code
                          AER: string
                          BankInterestRateType?:
                            | 'INBB'
                            | 'INFR'
                            | 'INGR'
                            | 'INLR'
                            | 'INNE'
                            | 'INOT'
                            | undefined
                          BankInterestRate?: string | undefined
                          Notes?: string[] | undefined
                          OtherBankInterestType?:
                            | {
                                Code?: OBCodeMnemonic | undefined
                                Name: Name_4
                                Description: Description_3
                              }
                            | undefined
                          OtherApplicationFrequency?: OBOtherCodeType1_1 | undefined
                          OtherCalculationFrequency?: OBOtherCodeType1_2 | undefined
                        }[]
                      }[]
                    }
                  | undefined
                Overdraft?:
                  | {
                      Notes?: string[] | undefined
                      OverdraftTierBandSet: {
                        TierBandMethod: 'INBA' | 'INTI' | 'INWH'
                        OverdraftType?: 'OVCO' | 'OVOD' | 'OVOT' | undefined
                        Identification?: string | undefined
                        AuthorisedIndicator?: boolean | undefined
                        BufferAmount?: string | undefined
                        Notes?: string[] | undefined
                        OverdraftTierBand: {
                          Identification?: string | undefined
                          TierValueMin: string
                          TierValueMax?: string | undefined
                          EAR?: string | undefined
                          AgreementLengthMin?: number | undefined
                          AgreementLengthMax?: number | undefined
                          AgreementPeriod?:
                            | 'PACT'
                            | 'PDAY'
                            | 'PHYR'
                            | 'PMTH'
                            | 'PQTR'
                            | 'PWEK'
                            | 'PYER'
                            | undefined
                          OverdraftInterestChargingCoverage?: 'INBA' | 'INTI' | 'INWH' | undefined
                          BankGuaranteedIndicator?: boolean | undefined
                          Notes?: string[] | undefined
                          OverdraftFeesCharges?:
                            | {
                                OverdraftFeeChargeCap?:
                                  | {
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
                                      FeeCapOccurrence?: Number_0 | undefined
                                      FeeCapAmount?: OBAmount1_0 | undefined
                                      CappingPeriod?: OBPeriod1Code | undefined
                                      Notes?: string[] | undefined
                                      OtherFeeType?:
                                        | {
                                            Code?: OBCodeMnemonic | undefined
                                            Name: Name_4
                                            Description: Description_3
                                          }[]
                                        | undefined
                                    }[]
                                  | undefined
                                OverdraftFeeChargeDetail: {
                                  FeeType: OBOverdraftFeeType1Code
                                  NegotiableIndicator?: boolean | undefined
                                  OverdraftControlIndicator?: boolean | undefined
                                  IncrementalBorrowingAmount?: OBAmount1_1 | undefined
                                  FeeAmount?: OBAmount1_2 | undefined
                                  FeeRate?: OBRate1_02 | undefined
                                  FeeRateType?: OBInterestRateType1Code_0 | undefined
                                  ApplicationFrequency: OBFeeFrequency1Code_0
                                  CalculationFrequency?: OBFeeFrequency1Code_1 | undefined
                                  Notes?: string[] | undefined
                                  OverdraftFeeChargeCap?:
                                    | {
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
                                        FeeCapOccurrence?: Number_0 | undefined
                                        FeeCapAmount?: OBAmount1_0 | undefined
                                        CappingPeriod?: OBPeriod1Code | undefined
                                        Notes?: string[] | undefined
                                        OtherFeeType?:
                                          | {
                                              Code?: OBCodeMnemonic | undefined
                                              Name: Name_4
                                              Description: Description_3
                                            }[]
                                          | undefined
                                      }[]
                                    | undefined
                                  OtherFeeType?: OBOtherCodeType1_3 | undefined
                                  OtherFeeRateType?: OBOtherCodeType1_4 | undefined
                                  OtherApplicationFrequency?: OBOtherCodeType1_1 | undefined
                                  OtherCalculationFrequency?: OBOtherCodeType1_2 | undefined
                                }[]
                              }[]
                            | undefined
                        }[]
                        OverdraftFeesCharges?:
                          | {
                              OverdraftFeeChargeCap?:
                                | {
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
                                    FeeCapOccurrence?: Number_0 | undefined
                                    FeeCapAmount?: OBAmount1_0 | undefined
                                    CappingPeriod?: OBPeriod1Code | undefined
                                    Notes?: string[] | undefined
                                    OtherFeeType?:
                                      | {
                                          Code?: OBCodeMnemonic | undefined
                                          Name: Name_4
                                          Description: Description_3
                                        }[]
                                      | undefined
                                  }[]
                                | undefined
                              OverdraftFeeChargeDetail: {
                                FeeType: OBOverdraftFeeType1Code
                                NegotiableIndicator?: boolean | undefined
                                OverdraftControlIndicator?: boolean | undefined
                                IncrementalBorrowingAmount?: OBAmount1_1 | undefined
                                FeeAmount?: OBAmount1_2 | undefined
                                FeeRate?: OBRate1_02 | undefined
                                FeeRateType?: OBInterestRateType1Code_0 | undefined
                                ApplicationFrequency: OBFeeFrequency1Code_0
                                CalculationFrequency?: OBFeeFrequency1Code_1 | undefined
                                Notes?: string[] | undefined
                                OverdraftFeeChargeCap?:
                                  | {
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
                                      FeeCapOccurrence?: Number_0 | undefined
                                      FeeCapAmount?: OBAmount1_0 | undefined
                                      CappingPeriod?: OBPeriod1Code | undefined
                                      Notes?: string[] | undefined
                                      OtherFeeType?:
                                        | {
                                            Code?: OBCodeMnemonic | undefined
                                            Name: Name_4
                                            Description: Description_3
                                          }[]
                                        | undefined
                                    }[]
                                  | undefined
                                OtherFeeType?: OBOtherCodeType1_3 | undefined
                                OtherFeeRateType?: OBOtherCodeType1_4 | undefined
                                OtherApplicationFrequency?: OBOtherCodeType1_1 | undefined
                                OtherCalculationFrequency?: OBOtherCodeType1_2 | undefined
                              }[]
                            }[]
                          | undefined
                      }[]
                    }
                  | undefined
                LoanInterest?:
                  | {
                      Notes?: string[] | undefined
                      LoanInterestTierBandSet: {
                        TierBandMethod: 'INBA' | 'INTI' | 'INWH'
                        Identification?: string | undefined
                        CalculationMethod: OBInterestCalculationMethod1Code
                        Notes?: string[] | undefined
                        OtherCalculationMethod?: OBOtherCodeType1_0 | undefined
                        LoanInterestTierBand: {
                          Identification?: string | undefined
                          TierValueMinimum: string
                          TierValueMaximum?: string | undefined
                          TierValueMinTerm: number
                          MinTermPeriod:
                            | 'PACT'
                            | 'PDAY'
                            | 'PHYR'
                            | 'PMTH'
                            | 'PQTR'
                            | 'PWEK'
                            | 'PYER'
                          TierValueMaxTerm?: number | undefined
                          MaxTermPeriod?:
                            | 'PACT'
                            | 'PDAY'
                            | 'PHYR'
                            | 'PMTH'
                            | 'PQTR'
                            | 'PWEK'
                            | 'PYER'
                            | undefined
                          FixedVariableInterestRateType: OBInterestFixedVariableType1Code
                          RepAPR: string
                          LoanProviderInterestRateType?:
                            | 'INBB'
                            | 'INFR'
                            | 'INGR'
                            | 'INLR'
                            | 'INNE'
                            | 'INOT'
                            | undefined
                          LoanProviderInterestRate?: string | undefined
                          Notes?: string[] | undefined
                          OtherLoanProviderInterestRateType?:
                            | {
                                Code?: OBCodeMnemonic | undefined
                                Name: Name_4
                                Description: Description_3
                              }
                            | undefined
                          LoanInterestFeesCharges?:
                            | {
                                LoanInterestFeeChargeDetail: {
                                  FeeType: OBFeeType1Code
                                  NegotiableIndicator?: boolean | undefined
                                  FeeAmount?: OBAmount1_3 | undefined
                                  FeeRate?: OBRate1_12 | undefined
                                  FeeRateType?: OBInterestRateType1Code_1 | undefined
                                  ApplicationFrequency: OBFeeFrequency1Code_2
                                  CalculationFrequency: OBFeeFrequency1Code_3
                                  Notes?: string[] | undefined
                                  OtherFeeType?: OBOtherFeeChargeDetailType | undefined
                                  OtherFeeRateType?: OBOtherCodeType1_5 | undefined
                                  OtherApplicationFrequency?: OBOtherCodeType1_6 | undefined
                                  OtherCalculationFrequency?: OBOtherCodeType1_7 | undefined
                                }[]
                                LoanInterestFeeChargeCap?:
                                  | {
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
                                      FeeCapOccurrence?: Number_1 | undefined
                                      FeeCapAmount?: OBAmount1_4 | undefined
                                      CappingPeriod?: OBFeeFrequency1Code_4 | undefined
                                      Notes?: string[] | undefined
                                      OtherFeeType?:
                                        | {
                                            Code?: OBCodeMnemonic | undefined
                                            Name: Name_4
                                            Description: Description_3
                                          }[]
                                        | undefined
                                    }[]
                                  | undefined
                              }[]
                            | undefined
                        }[]
                        LoanInterestFeesCharges?:
                          | {
                              LoanInterestFeeChargeDetail: {
                                FeeType: OBFeeType1Code
                                NegotiableIndicator?: boolean | undefined
                                FeeAmount?: OBAmount1_3 | undefined
                                FeeRate?: OBRate1_12 | undefined
                                FeeRateType?: OBInterestRateType1Code_1 | undefined
                                ApplicationFrequency: OBFeeFrequency1Code_2
                                CalculationFrequency: OBFeeFrequency1Code_3
                                Notes?: string[] | undefined
                                OtherFeeType?: OBOtherFeeChargeDetailType | undefined
                                OtherFeeRateType?: OBOtherCodeType1_5 | undefined
                                OtherApplicationFrequency?: OBOtherCodeType1_6 | undefined
                                OtherCalculationFrequency?: OBOtherCodeType1_7 | undefined
                              }[]
                              LoanInterestFeeChargeCap?:
                                | {
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
                                    FeeCapOccurrence?: Number_1 | undefined
                                    FeeCapAmount?: OBAmount1_4 | undefined
                                    CappingPeriod?: OBFeeFrequency1Code_4 | undefined
                                    Notes?: string[] | undefined
                                    OtherFeeType?:
                                      | {
                                          Code?: OBCodeMnemonic | undefined
                                          Name: Name_4
                                          Description: Description_3
                                        }[]
                                      | undefined
                                  }[]
                                | undefined
                            }[]
                          | undefined
                      }[]
                    }
                  | undefined
                Repayment?:
                  | {
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
                      OtherRepaymentType?:
                        | {
                            Code?: OBCodeMnemonic | undefined
                            Name: Name_4
                            Description: Description_3
                          }
                        | undefined
                      OtherRepaymentFrequency?:
                        | {
                            Code?: OBCodeMnemonic | undefined
                            Name: Name_4
                            Description: Description_3
                          }
                        | undefined
                      OtherAmountType?:
                        | {
                            Code?: OBCodeMnemonic | undefined
                            Name: Name_4
                            Description: Description_3
                          }
                        | undefined
                      RepaymentFeeCharges?:
                        | {
                            RepaymentFeeChargeDetail: {
                              FeeType: OBFeeType1Code
                              NegotiableIndicator?: boolean | undefined
                              FeeAmount?: OBAmount1_3 | undefined
                              FeeRate?: OBRate1_12 | undefined
                              FeeRateType?: OBInterestRateType1Code_1 | undefined
                              ApplicationFrequency: OBFeeFrequency1Code_2
                              CalculationFrequency: OBFeeFrequency1Code_3
                              Notes?: string[] | undefined
                              OtherFeeType?: OBOtherFeeChargeDetailType | undefined
                              OtherFeeRateType?: OBOtherCodeType1_8 | undefined
                              OtherApplicationFrequency?: OBOtherCodeType1_6 | undefined
                              OtherCalculationFrequency?: OBOtherCodeType1_7 | undefined
                            }[]
                            RepaymentFeeChargeCap?:
                              | {
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
                                  FeeCapOccurrence?: Number_1 | undefined
                                  FeeCapAmount?: OBAmount1_4 | undefined
                                  CappingPeriod?: OBPeriod1Code | undefined
                                  Notes?: string[] | undefined
                                  OtherFeeType?:
                                    | {
                                        Code?: OBCodeMnemonic | undefined
                                        Name: Name_4
                                        Description: Description_3
                                      }[]
                                    | undefined
                                }[]
                              | undefined
                          }
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
                    }
                  | undefined
                OtherFeesCharges?:
                  | {
                      TariffType?: 'TTEL' | 'TTMX' | 'TTOT' | undefined
                      TariffName?: string | undefined
                      OtherTariffType?:
                        | {
                            Code?: OBCodeMnemonic | undefined
                            Name: Name_4
                            Description: Description_3
                          }
                        | undefined
                      FeeChargeDetail: {
                        FeeCategory: OBFeeCategory1Code
                        FeeType: OBFeeType1Code
                        NegotiableIndicator?: boolean | undefined
                        FeeAmount?: OBAmount1_3 | undefined
                        FeeRate?: OBRate1_12 | undefined
                        FeeRateType?: OBInterestRateType1Code_1 | undefined
                        ApplicationFrequency: OBFeeFrequency1Code_2
                        CalculationFrequency?: OBFeeFrequency1Code_3 | undefined
                        Notes?: string[] | undefined
                        FeeChargeCap?:
                          | {
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
                              FeeCapOccurrence?: Number_1 | undefined
                              FeeCapAmount?: OBAmount1_4 | undefined
                              CappingPeriod?: OBPeriod1Code | undefined
                              Notes?: string[] | undefined
                              OtherFeeType?:
                                | {
                                    Code?: OBCodeMnemonic | undefined
                                    Name: Name_4
                                    Description: Description_3
                                  }[]
                                | undefined
                            }[]
                          | undefined
                        OtherFeeCategoryType?: OBOtherCodeType1_0 | undefined
                        OtherFeeType?: OBOtherFeeChargeDetailType | undefined
                        OtherFeeRateType?: OBOtherCodeType1_8 | undefined
                        OtherApplicationFrequency?: OBOtherCodeType1_6 | undefined
                        OtherCalculationFrequency?: OBOtherCodeType1_7 | undefined
                        FeeApplicableRange?:
                          | {
                              MinimumAmount?: string | undefined
                              MaximumAmount?: string | undefined
                              MinimumRate?: string | undefined
                              MaximumRate?: string | undefined
                            }
                          | undefined
                      }[]
                      FeeChargeCap?:
                        | {
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
                            FeeCapOccurrence?: Number_1 | undefined
                            FeeCapAmount?: OBAmount1_4 | undefined
                            CappingPeriod?: OBPeriod1Code | undefined
                            Notes?: string[] | undefined
                            OtherFeeType?:
                              | {
                                  Code?: OBCodeMnemonic | undefined
                                  Name: Name_4
                                  Description: Description_3
                                }[]
                              | undefined
                          }[]
                        | undefined
                    }[]
                  | undefined
                SupplementaryData?: OBSupplementaryData1 | undefined
              }
            | undefined
          BCA?: OBBCAData1 | undefined
          PCA?: OBPCAData1 | undefined
        }[]
      | undefined
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type ScheduledPaymentId = string
type ScheduledPaymentDateTime = string
type OBInternalScheduleType1Code = 'Arrival' | 'Execution'
type DebtorReference = string
type OBActiveOrHistoricCurrencyAndAmount_1 = {
  Amount: OBActiveCurrencyAndAmountSimpleType
  Currency: ActiveOrHistoricCurrencyCode_1
}
type OBBranchAndFinancialInstitutionIdentification5_1 = {
  SchemeName: OBInternalFinancialInstitutionIdentification4Code
  Identification: Identification_1
  Name?: Name_1 | undefined
  PostalAddress?: OBPostalAddress7 | undefined
  LEI?: LEI | undefined
}
type OBCashAccount5_1 = {
  SchemeName: OBInternalAccountIdentification4Code
  Identification: string
  Name?: Name_0 | undefined
  SecondaryIdentification?: SecondaryIdentification | undefined
  Proxy?: OBProxy1 | undefined
}
type OBScheduledPayment3 = {
  AccountId: AccountId
  ScheduledPaymentId?: ScheduledPaymentId | undefined
  ScheduledPaymentDateTime: ScheduledPaymentDateTime
  ScheduledType: OBInternalScheduleType1Code
  Reference?: Reference | undefined
  DebtorReference?: DebtorReference | undefined
  InstructedAmount: OBActiveOrHistoricCurrencyAndAmount_1
  CreditorAgent?: OBBranchAndFinancialInstitutionIdentification5_1 | undefined
  CreditorAccount?: OBCashAccount5_1 | undefined
}
type OBReadScheduledPayment3 = {
  Data: { ScheduledPayment?: OBScheduledPayment3[] | undefined }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type StandingOrderId = string
type NextPaymentDateTime = string
type LastPaymentDateTime = string
type NumberOfPayments = string
type OBActiveOrHistoricCurrencyAndAmount_2 = {
  Amount: OBActiveCurrencyAndAmountSimpleType
  Currency: ActiveOrHistoricCurrencyCode_1
}
type OBActiveOrHistoricCurrencyAndAmount_3 = {
  Amount: OBActiveCurrencyAndAmountSimpleType
  Currency: ActiveOrHistoricCurrencyCode_1
}
type OBActiveOrHistoricCurrencyAndAmount_11 = {
  Amount: OBActiveCurrencyAndAmountSimpleType
  Currency: ActiveOrHistoricCurrencyCode_1
}
type OBActiveOrHistoricCurrencyAndAmount_4 = {
  Amount: OBActiveCurrencyAndAmountSimpleType
  Currency: ActiveOrHistoricCurrencyCode_1
}
type ExternalDocumentType1Code =
  | 'AROI'
  | 'BOLD'
  | 'CINV'
  | 'CMCN'
  | 'CNFA'
  | 'CONT'
  | 'CREN'
  | 'DEBN'
  | 'DISP'
  | 'DNFA'
  | 'HIRI'
  | 'INVS'
  | 'MSIN'
  | 'PROF'
  | 'PUOR'
  | 'QUOT'
  | 'SBIN'
  | 'SOAC'
  | 'SPRR'
  | 'TISH'
  | 'TSUT'
  | 'USAR'
  | 'VCHR'
type OBReferredDocumentInformation = {
  Code?: ExternalDocumentType1Code | undefined
  Issuer?: string | undefined
  Number?: string | undefined
  RelatedDate?: string | undefined
  LineDetails?: string[] | undefined
}
type ExternalCreditorReferenceType1Code = 'DISP' | 'FXDR' | 'PUOR' | 'RPIN' | 'RADM' | 'SCOR'
type Identification_3 = string
type Identification_4 = string
type OBRemittanceInformationStructured = {
  ReferredDocumentInformation?: OBReferredDocumentInformation[] | undefined
  ReferredDocumentAmount?: OBActiveCurrencyAndAmountSimpleType | undefined
  CreditorReferenceInformation?:
    | {
        Code?: ExternalCreditorReferenceType1Code | undefined
        Issuer?: string | undefined
        Reference?: string | undefined
      }
    | undefined
  Invoicer?: Identification_3 | undefined
  Invoicee?: Identification_4 | undefined
  TaxRemittance?: string | undefined
  AdditionalRemittanceInformation?: string[] | undefined
}
type OBRemittanceInformation2 = {
  Structured?: OBRemittanceInformationStructured[] | undefined
  Unstructured?: string[] | undefined
}
type OBStandingOrder6 = {
  AccountId: AccountId
  StandingOrderId?: StandingOrderId | undefined
  NextPaymentDateTime?: NextPaymentDateTime | undefined
  LastPaymentDateTime?: LastPaymentDateTime | undefined
  NumberOfPayments?: NumberOfPayments | undefined
  StandingOrderStatusCode?: ExternalMandateStatus1Code | undefined
  FirstPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount_2 | undefined
  NextPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount_3 | undefined
  LastPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount_11 | undefined
  FinalPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount_4 | undefined
  CreditorAgent?: OBBranchAndFinancialInstitutionIdentification5_1 | undefined
  CreditorAccount?: OBCashAccount5_1 | undefined
  SupplementaryData?: OBSupplementaryData1 | undefined
  MandateRelatedInformation?: OBMandateRelatedInformation1 | undefined
  RemittanceInformation?: OBRemittanceInformation2 | undefined
}
type OBReadStandingOrder6 = {
  Data: { StandingOrder?: OBStandingOrder6[] | undefined }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type StatementId = string
type StatementReference = string
type OBInternalStatementType1Code =
  | 'AccountClosure'
  | 'AccountOpening'
  | 'Annual'
  | 'Interim'
  | 'RegularPeriodic'
type StartDateTime = string
type EndDateTime = string
type OBInternalStatementBenefitType1Code = string
type OBActiveOrHistoricCurrencyAndAmount_5 = {
  Amount: OBActiveCurrencyAndAmountSimpleType
  Currency: ActiveOrHistoricCurrencyCode_1
}
type Description_1 = string
type OBCreditDebitCode_0 = 'Credit' | 'Debit'
type OBInternalStatementFeeType1Code = string
type OBRate1_0 = number
type OBInternalStatementFeeRateType1Code = string
type OBInternalStatementFeeFrequency1Code = string
type OBActiveOrHistoricCurrencyAndAmount_6 = {
  Amount: OBActiveCurrencyAndAmountSimpleType
  Currency: ActiveOrHistoricCurrencyCode_1
}
type Description_2 = string
type OBInternalStatementInterestType1Code = string
type OBRate1_1 = number
type OBInternalStatementInterestRateType1Code = string
type OBInternalStatementInterestFrequency1Code = string
type OBActiveOrHistoricCurrencyAndAmount_7 = {
  Amount: OBActiveCurrencyAndAmountSimpleType
  Currency: ActiveOrHistoricCurrencyCode_1
}
type OBInternalStatementAmountType1Code = string
type DateTime = string
type OBInternalStatementDateTimeType1Code = string
type Rate = string
type OBInternalStatementRateType1Code = string
type Value = string
type OBInternalStatementValueType1Code = string
type OBStatement2 = {
  AccountId: AccountId
  StatementId?: StatementId | undefined
  StatementReference?: StatementReference | undefined
  Type: OBInternalStatementType1Code
  StartDateTime: StartDateTime
  EndDateTime: EndDateTime
  CreationDateTime: CreationDateTime
  StatementDescription?: string[] | undefined
  StatementBenefit?:
    | { Type: OBInternalStatementBenefitType1Code; Amount: OBActiveOrHistoricCurrencyAndAmount_5 }[]
    | undefined
  StatementFee?:
    | {
        Description?: Description_1 | undefined
        CreditDebitIndicator: OBCreditDebitCode_0
        Type: OBInternalStatementFeeType1Code
        Rate?: OBRate1_0 | undefined
        RateType?: OBInternalStatementFeeRateType1Code | undefined
        Frequency?: OBInternalStatementFeeFrequency1Code | undefined
        Amount: OBActiveOrHistoricCurrencyAndAmount_6
      }[]
    | undefined
  StatementInterest?:
    | {
        Description?: Description_2 | undefined
        CreditDebitIndicator: OBCreditDebitCode_0
        Type: OBInternalStatementInterestType1Code
        Rate?: OBRate1_1 | undefined
        RateType?: OBInternalStatementInterestRateType1Code | undefined
        Frequency?: OBInternalStatementInterestFrequency1Code | undefined
        Amount: OBActiveOrHistoricCurrencyAndAmount_7
      }[]
    | undefined
  StatementAmount?:
    | {
        CreditDebitIndicator: OBCreditDebitCode_0
        Type: OBInternalStatementAmountType1Code
        Amount: {
          Amount: OBActiveCurrencyAndAmountSimpleType
          Currency: ActiveOrHistoricCurrencyCode_1
          SubType?: 'BCUR' | 'LCUR' | undefined
        }
        LocalAmount?:
          | {
              Amount: OBActiveCurrencyAndAmountSimpleType
              Currency: ActiveOrHistoricCurrencyCode_1
              SubType?: 'BCUR' | 'LCUR' | undefined
            }
          | undefined
      }[]
    | undefined
  StatementDateTime?:
    | { DateTime: DateTime; Type: OBInternalStatementDateTimeType1Code }[]
    | undefined
  StatementRate?: { Rate: Rate; Type: OBInternalStatementRateType1Code }[] | undefined
  StatementValue?: { Value: Value; Type: OBInternalStatementValueType1Code }[] | undefined
  TotalValue?:
    | { Amount: OBActiveCurrencyAndAmountSimpleType; Currency: ActiveOrHistoricCurrencyCode_1 }
    | undefined
}
type OBReadDataStatement2 = { Statement?: OBStatement2[] | undefined }
type OBReadStatement2 = {
  Data: OBReadDataStatement2
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type File2 = { [x: string]: unknown }
type TransactionId = string
type TransactionReference = string
type OBCreditDebitCode_1 = 'Credit' | 'Debit'
type ExternalEntryStatus1Code = 'BOOK' | 'FUTR' | 'INFO' | 'PDNG' | 'RJCT'
type OBInternalTransactionMutability1Code = 'Mutable' | 'Immutable'
type BookingDateTime = string
type ValueDateTime = string
type TransactionInformation = string
type AddressLine = string
type OBActiveOrHistoricCurrencyAndAmount_9 = {
  Amount: OBActiveCurrencyAndAmountSimpleType
  Currency: ActiveOrHistoricCurrencyCode_1
}
type OBActiveOrHistoricCurrencyAndAmount_10 = {
  Amount: OBActiveCurrencyAndAmountSimpleType
  Currency: ActiveOrHistoricCurrencyCode_1
}
type OBCurrencyExchange5 = {
  SourceCurrency: string
  TargetCurrency?: string | undefined
  UnitCurrency?: string | undefined
  ExchangeRate: number
  ContractIdentification?: string | undefined
  QuotationDate?: string | undefined
  InstructedAmount?:
    | { Amount: OBActiveCurrencyAndAmountSimpleType; Currency: ActiveOrHistoricCurrencyCode_1 }
    | undefined
}
type OBBankTransactionCodeStructure1 = { Code: string; SubCode: string }
type ProprietaryBankTransactionCodeStructure1 = { Code: string; Issuer?: string | undefined }
type OBExtendedProprietaryBankTransactionCode = {
  Code: string
  Issuer?: string | undefined
  Description?: string | undefined
}
type OBTransactionCashBalance = {
  CreditDebitIndicator: OBCreditDebitCode_2
  Type: OBBalanceType1Code
  Amount: { Amount: OBActiveCurrencyAndAmountSimpleType; Currency: ActiveOrHistoricCurrencyCode_1 }
}
type OBMerchantDetails1 = {
  MerchantName?: string | undefined
  MerchantCategoryCode?: string | undefined
}
type Identification_2 = string
type OBBranchAndFinancialInstitutionIdentification6_1 = {
  SchemeName?: OBInternalFinancialInstitutionIdentification4Code | undefined
  Identification?: Identification_2 | undefined
  Name?: Name_1 | undefined
  LEI?: LEI | undefined
  PostalAddress?: OBPostalAddress7 | undefined
}
type OBCashAccount6_0 = {
  SchemeName?: OBInternalAccountIdentification4Code | undefined
  Identification?: Identification_0 | undefined
  Name?: Name_0 | undefined
  SecondaryIdentification?: SecondaryIdentification | undefined
  Proxy?: OBProxy1 | undefined
}
type OBBranchAndFinancialInstitutionIdentification6_2 = {
  SchemeName?: OBInternalFinancialInstitutionIdentification4Code | undefined
  Identification?: Identification_2 | undefined
  Name?: Name_1 | undefined
  LEI?: LEI | undefined
  PostalAddress?: OBPostalAddress7 | undefined
}
type OBCashAccount6_1 = {
  SchemeName: OBInternalAccountIdentification4Code
  Identification: Identification_0
  Name?: Name_0 | undefined
  SecondaryIdentification?: SecondaryIdentification | undefined
  Proxy?: OBProxy1 | undefined
}
type OBTransactionCardInstrument1 = {
  CardSchemeName: 'AmericanExpress' | 'Diners' | 'Discover' | 'MasterCard' | 'VISA'
  AuthorisationType?: 'ConsumerDevice' | 'Contactless' | 'None' | 'PIN' | undefined
  Name?: string | undefined
  Identification?: string | undefined
}
type OBExternalPurpose1Code =
  | 'BKDF'
  | 'BKFE'
  | 'BKFM'
  | 'BKIP'
  | 'BKPP'
  | 'CBLK'
  | 'CDCB'
  | 'CDCD'
  | 'CDCS'
  | 'CDDP'
  | 'CDOC'
  | 'CDQC'
  | 'ETUP'
  | 'FCOL'
  | 'MTUP'
  | 'ACCT'
  | 'CASH'
  | 'COLL'
  | 'CSDB'
  | 'DEPT'
  | 'INTC'
  | 'INTP'
  | 'LIMA'
  | 'NETT'
  | 'BFWD'
  | 'CCIR'
  | 'CCPC'
  | 'CCPM'
  | 'CCSM'
  | 'CRDS'
  | 'CRPR'
  | 'CRSP'
  | 'CRTL'
  | 'EQPT'
  | 'EQUS'
  | 'EXPT'
  | 'EXTD'
  | 'FIXI'
  | 'FWBC'
  | 'FWCC'
  | 'FWSB'
  | 'FWSC'
  | 'MARG'
  | 'MBSB'
  | 'MBSC'
  | 'MGCC'
  | 'MGSC'
  | 'OCCC'
  | 'OPBC'
  | 'OPCC'
  | 'OPSB'
  | 'OPSC'
  | 'OPTN'
  | 'OTCD'
  | 'REPO'
  | 'RPBC'
  | 'RPCC'
  | 'RPSB'
  | 'RPSC'
  | 'RVPO'
  | 'SBSC'
  | 'SCIE'
  | 'SCIR'
  | 'SCRP'
  | 'SHBC'
  | 'SHCC'
  | 'SHSL'
  | 'SLEB'
  | 'SLOA'
  | 'SWBC'
  | 'SWCC'
  | 'SWPT'
  | 'SWSB'
  | 'SWSC'
  | 'TBAS'
  | 'TBBC'
  | 'TBCC'
  | 'TRCP'
  | 'AGRT'
  | 'AREN'
  | 'BEXP'
  | 'BOCE'
  | 'COMC'
  | 'CPYR'
  | 'GDDS'
  | 'GDSV'
  | 'GSCB'
  | 'LICF'
  | 'MP2B'
  | 'POPE'
  | 'ROYA'
  | 'SCVE'
  | 'SERV'
  | 'SUBS'
  | 'SUPP'
  | 'TRAD'
  | 'CHAR'
  | 'COMT'
  | 'MP2P'
  | 'ECPG'
  | 'ECPR'
  | 'ECPU'
  | 'EPAY'
  | 'CLPR'
  | 'COMP'
  | 'DBTC'
  | 'GOVI'
  | 'HLRP'
  | 'HLST'
  | 'INPC'
  | 'INPR'
  | 'INSC'
  | 'INSU'
  | 'INTE'
  | 'LBRI'
  | 'LIFI'
  | 'LOAN'
  | 'LOAR'
  | 'PENO'
  | 'PPTI'
  | 'RELG'
  | 'RINP'
  | 'TRFD'
  | 'FORW'
  | 'FXNT'
  | 'ADMG'
  | 'ADVA'
  | 'BCDM'
  | 'BCFG'
  | 'BLDM'
  | 'BNET'
  | 'CBFF'
  | 'CBFR'
  | 'CCRD'
  | 'CDBL'
  | 'CFEE'
  | 'CGDD'
  | 'CORT'
  | 'COST'
  | 'CPKC'
  | 'DCRD'
  | 'DSMT'
  | 'DVPM'
  | 'EDUC'
  | 'FACT'
  | 'FAND'
  | 'FCPM'
  | 'FEES'
  | 'GIFT'
  | 'GOVT'
  | 'ICCP'
  | 'IDCP'
  | 'IHRP'
  | 'INSM'
  | 'IVPT'
  | 'MCDM'
  | 'MCFG'
  | 'MSVC'
  | 'NOWS'
  | 'OCDM'
  | 'OCFG'
  | 'OFEE'
  | 'OTHR'
  | 'PADD'
  | 'PTSP'
  | 'RCKE'
  | 'RCPT'
  | 'REBT'
  | 'REFU'
  | 'RENT'
  | 'REOD'
  | 'RIMB'
  | 'RPNT'
  | 'RRBN'
  | 'RRCT'
  | 'RRTP'
  | 'RVPM'
  | 'SLPI'
  | 'SPLT'
  | 'STDY'
  | 'TBAN'
  | 'TBIL'
  | 'TCSC'
  | 'TELI'
  | 'TMPG'
  | 'TPRI'
  | 'TPRP'
  | 'TRNC'
  | 'TRVC'
  | 'WEBI'
  | 'IPAY'
  | 'IPCA'
  | 'IPDO'
  | 'IPEA'
  | 'IPEC'
  | 'IPEW'
  | 'IPPS'
  | 'IPRT'
  | 'IPU2'
  | 'IPUW'
  | 'ANNI'
  | 'CAFI'
  | 'CFDI'
  | 'CMDT'
  | 'DERI'
  | 'DIVD'
  | 'FREX'
  | 'HEDG'
  | 'INVS'
  | 'PRME'
  | 'SAVG'
  | 'SECU'
  | 'SEPI'
  | 'TREA'
  | 'UNIT'
  | 'FNET'
  | 'FUTR'
  | 'ANTS'
  | 'CVCF'
  | 'DMEQ'
  | 'DNTS'
  | 'HLTC'
  | 'HLTI'
  | 'HSPC'
  | 'ICRF'
  | 'LTCF'
  | 'MAFC'
  | 'MARF'
  | 'MDCS'
  | 'VIEW'
  | 'CDEP'
  | 'SWFP'
  | 'SWPP'
  | 'SWRS'
  | 'SWUF'
  | 'ADCS'
  | 'AEMP'
  | 'ALLW'
  | 'ALMY'
  | 'BBSC'
  | 'BECH'
  | 'BENE'
  | 'BONU'
  | 'CCHD'
  | 'COMM'
  | 'CSLP'
  | 'GFRP'
  | 'GVEA'
  | 'GVEB'
  | 'GVEC'
  | 'GVED'
  | 'GWLT'
  | 'HREC'
  | 'PAYR'
  | 'PEFC'
  | 'PENS'
  | 'PRCP'
  | 'RHBS'
  | 'SALA'
  | 'SPSP'
  | 'SSBE'
  | 'LBIN'
  | 'LCOL'
  | 'LFEE'
  | 'LMEQ'
  | 'LMFI'
  | 'LMRK'
  | 'LREB'
  | 'LREV'
  | 'LSFL'
  | 'ESTX'
  | 'FWLV'
  | 'GSTX'
  | 'HSTX'
  | 'INTX'
  | 'NITX'
  | 'PTXP'
  | 'RDTX'
  | 'TAXS'
  | 'VATX'
  | 'WHLD'
  | 'TAXR'
  | 'B112'
  | 'BR12'
  | 'TLRF'
  | 'TLRR'
  | 'AIRB'
  | 'BUSB'
  | 'FERB'
  | 'RLWY'
  | 'TRPT'
  | 'CBTV'
  | 'ELEC'
  | 'ENRG'
  | 'GASB'
  | 'NWCH'
  | 'NWCM'
  | 'OTLC'
  | 'PHON'
  | 'UBIL'
  | 'WTER'
  | 'BOND'
  | 'CABD'
  | 'CAEQ'
  | 'CBCR'
  | 'DBCR'
  | 'DICL'
  | 'EQTS'
  | 'FLCR'
  | 'EFTC'
  | 'EFTD'
  | 'MOMA'
  | 'RAPI'
  | 'GAMB'
  | 'LOTT'
  | 'AMEX'
  | 'SASW'
  | 'AUCO'
  | 'PCOM'
  | 'PDEP'
  | 'PLDS'
  | 'PLRF'
  | 'GAFA'
  | 'GAHO'
  | 'CPEN'
  | 'DEPD'
  | 'RETL'
  | 'DEBT'
  | 'CRYP'
type OBUltimateCreditor1 = {
  Name?: string | undefined
  Identification?: string | undefined
  LEI?: LEI | undefined
  SchemeName?: OBInternalAccountIdentification4Code | undefined
  PostalAddress?: OBPostalAddress7 | undefined
}
type OBUltimateDebtor1 = {
  Name?: string | undefined
  Identification?: string | undefined
  LEI?: LEI | undefined
  SchemeName?: OBInternalAccountIdentification4Code | undefined
  PostalAddress?: OBPostalAddress7 | undefined
}
type OBIntermediaryAgent = {
  Name?: string | undefined
  SchemeName?: OBInternalAccountIdentification4Code | undefined
  Identification?: string | undefined
  LEI?: LEI | undefined
  PostalAddress?: OBPostalAddress7 | undefined
  ProcessingStatus?: 'PDNG' | 'RCVD' | 'ACSP' | 'ACSC' | 'RJCT' | 'UNKN' | 'CANC' | undefined
}
type OBTransaction6 = {
  AccountId: AccountId
  TransactionId?: TransactionId | undefined
  TransactionReference?: TransactionReference | undefined
  StatementReference?: StatementReference[] | undefined
  CreditDebitIndicator: OBCreditDebitCode_1
  Status: ExternalEntryStatus1Code
  TransactionMutability?: OBInternalTransactionMutability1Code | undefined
  BookingDateTime: BookingDateTime
  ValueDateTime?: ValueDateTime | undefined
  TransactionInformation?: TransactionInformation | undefined
  AddressLine?: AddressLine | undefined
  Amount: OBActiveOrHistoricCurrencyAndAmount_9
  ChargeAmount?: OBActiveOrHistoricCurrencyAndAmount_10 | undefined
  CurrencyExchange?: OBCurrencyExchange5 | undefined
  BankTransactionCode?: OBBankTransactionCodeStructure1 | undefined
  ProprietaryBankTransactionCode?: ProprietaryBankTransactionCodeStructure1 | undefined
  ExtendedProprietaryBankTransactionCodes?: OBExtendedProprietaryBankTransactionCode[] | undefined
  Balance?: OBTransactionCashBalance | undefined
  MerchantDetails?: OBMerchantDetails1 | undefined
  CreditorAgent?: OBBranchAndFinancialInstitutionIdentification6_1 | undefined
  CreditorAccount?: OBCashAccount6_0 | undefined
  DebtorAgent?: OBBranchAndFinancialInstitutionIdentification6_2 | undefined
  DebtorAccount?: OBCashAccount6_1 | undefined
  CardInstrument?: OBTransactionCardInstrument1 | undefined
  SupplementaryData?: OBSupplementaryData1 | undefined
  CategoryPurposeCode?: ExternalCategoryPurpose1Code | undefined
  PaymentPurposeCode?: OBExternalPurpose1Code | undefined
  UltimateCreditor?: OBUltimateCreditor1 | undefined
  UltimateDebtor?: OBUltimateDebtor1 | undefined
  IntermediaryAgent1?: OBIntermediaryAgent | undefined
  IntermediaryAgent2?: OBIntermediaryAgent | undefined
  IntermediaryAgent3?: OBIntermediaryAgent | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBReadConsent1 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/account-access-consents/:ConsentId': {
      $get:
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 500
          }
      $delete:
        | {
            input: { param: { ConsentId: string } } & {
              header: {
                'x-fapi-auth-date'?: string | undefined
                'x-fapi-customer-ip-address'?: string | undefined
                'x-fapi-interaction-id'?: string | undefined
                Authorization: string
                'x-customer-user-agent'?: string | undefined
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
