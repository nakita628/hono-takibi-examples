type OBInternalLocalInstrument1Code = string
type OBActiveCurrencyAndAmountSimpleType = string
type ActiveOrHistoricCurrencyCode = string
type OBInternalAccountIdentification4Code = string
type Identification_0 = string
type SecondaryIdentification = string
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
type OBInternalFinancialInstitutionIdentification4Code = string
type Identification_1 = string
type Name = string
type LEI = string
type OBAddressType2Code = 'BIZZ' | 'DLVY' | 'MLTO' | 'PBOX' | 'ADDR' | 'HOME' | 'CORR' | 'STAT'
type Department = string
type SubDepartment = string
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
type CountrySubDivision = string
type CountryCode = string
type OBPostalAddress7 = {
  AddressType?: OBAddressType2Code | undefined
  Department?: Department | undefined
  SubDepartment?: SubDepartment | undefined
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
  CountrySubDivision?: CountrySubDivision | undefined
  Country?: CountryCode | undefined
  AddressLine?: string[] | undefined
}
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
type OBRegulatoryAuthority2 = { Name?: string | undefined; CountryCode?: CountryCode | undefined }
type ISODateTime = string
type OBActiveOrHistoricCurrencyAndAmount = {
  Amount: OBActiveCurrencyAndAmountSimpleType
  Currency: ActiveOrHistoricCurrencyCode
}
type OBStructuredRegulatoryReporting3 = {
  Type?: string | undefined
  Date?: ISODateTime | undefined
  Country?: CountryCode | undefined
  Amount?: OBActiveOrHistoricCurrencyAndAmount | undefined
  Information?: string[] | undefined
}
type OBRegulatoryReporting1 = {
  DebitCreditReportingIndicator?: 'CRED' | 'DEBT' | 'BOTH' | undefined
  Authority?: OBRegulatoryAuthority2 | undefined
  Details?: OBStructuredRegulatoryReporting3[] | undefined
}
type ExternalDocumentType1Code =
  | 'CINV'
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
  | 'SPRR'
  | 'TISH'
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
type OBSupplementaryData1 = { [x: string]: unknown }
type OBSCASupportData1 = {
  RequestedSCAExemptionType?:
    | 'BillPayment'
    | 'ContactlessTravel'
    | 'EcommerceGoods'
    | 'EcommerceServices'
    | 'Kiosk'
    | 'Parking'
    | 'PartyToParty'
    | undefined
  AppliedAuthenticationApproach?: 'CA' | 'SCA' | undefined
  ReferencePaymentOrderId?: string | undefined
}
type ExternalPurpose1Code =
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
type OBInternalExtendedAccountType1Code =
  | 'Business'
  | 'BusinessSavingsAccount'
  | 'Charity'
  | 'Collection'
  | 'Corporate'
  | 'Ewallet'
  | 'Government'
  | 'Investment'
  | 'ISA'
  | 'JointPersonal'
  | 'Pension'
  | 'Personal'
  | 'PersonalSavingsAccount'
  | 'Premier'
  | 'Wealth'
type OBRisk1 = {
  PaymentContextCode?:
    | 'BillingGoodsAndServicesInAdvance'
    | 'BillingGoodsAndServicesInArrears'
    | 'EcommerceMerchantInitiatedPayment'
    | 'FaceToFacePointOfSale'
    | 'TransferToSelf'
    | 'TransferToThirdParty'
    | 'BillPayment'
    | 'EcommerceGoods'
    | 'EcommerceServices'
    | 'PartyToParty'
    | 'PispPayee'
    | 'Other'
    | undefined
  MerchantCategoryCode?: string | undefined
  MerchantCustomerIdentification?: string | undefined
  ContractPresentIndicator?: boolean | undefined
  BeneficiaryPrepopulatedIndicator?: boolean | undefined
  PaymentPurposeCode?: ExternalPurpose1Code | undefined
  CategoryPurposeCode?: ExternalCategoryPurpose1Code | undefined
  BeneficiaryAccountType?: OBInternalExtendedAccountType1Code | undefined
  DeliveryAddress?: OBPostalAddress7 | undefined
}
type OBWriteDomesticConsent4 = {
  Data: {
    ReadRefundAccount?: 'No' | 'Yes' | undefined
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification: string
      LocalInstrument?: OBInternalLocalInstrument1Code | undefined
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      DebtorAccount?:
        | {
            SchemeName: OBInternalAccountIdentification4Code
            Identification: Identification_0
            Name?: string | undefined
            SecondaryIdentification?: SecondaryIdentification | undefined
            Proxy?: OBProxy1 | undefined
          }
        | undefined
      CreditorAgent?:
        | {
            SchemeName?: OBInternalFinancialInstitutionIdentification4Code | undefined
            Identification?: Identification_1 | undefined
            Name?: Name | undefined
            LEI?: LEI | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      CreditorAccount: {
        SchemeName: OBInternalAccountIdentification4Code
        Identification: Identification_0
        Name: string
        SecondaryIdentification?: SecondaryIdentification | undefined
        Proxy?: OBProxy1 | undefined
      }
      CreditorPostalAddress?: OBPostalAddress7 | undefined
      UltimateCreditor?: OBUltimateCreditor1 | undefined
      UltimateDebtor?: OBUltimateDebtor1 | undefined
      RegulatoryReporting?: OBRegulatoryReporting1[] | undefined
      RemittanceInformation?: OBRemittanceInformation2 | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    Authorisation?:
      | {
          AuthorisationType: 'Any' | 'Single' | 'Multiple'
          CompletionDateTime?: string | undefined
        }
      | undefined
    SCASupportData?: OBSCASupportData1 | undefined
  }
  Risk: OBRisk1
}
type OBInternalConsentStatus2Code = 'AWAU' | 'RJCT' | 'AUTH' | 'COND'
type OBStatusReason = {
  StatusReasonCode?: string | undefined
  StatusReasonDescription?: string | undefined
  Path?: string | undefined
}
type OBInternalChargeBearerType1Code =
  | 'BorneByCreditor'
  | 'BorneByDebtor'
  | 'FollowingServiceLevel'
  | 'Shared'
type OBInternalPaymentChargeType1Code = string
type OBCashAccountDebtor4 = {
  SchemeName?: string | undefined
  Identification?: string | undefined
  Name?: string | undefined
  SecondaryIdentification?: string | undefined
  LEI?: LEI | undefined
}
type Links = {
  Self: string
  First?: string | undefined
  Prev?: string | undefined
  Next?: string | undefined
  Last?: string | undefined
}
type Meta = {
  TotalPages?: number | undefined
  FirstAvailableDateTime?: ISODateTime | undefined
  LastAvailableDateTime?: ISODateTime | undefined
}
type OBWriteDomesticConsentResponse5 = {
  Data: {
    ConsentId: string
    CreationDateTime: string
    Status: OBInternalConsentStatus2Code
    StatusReason?: OBStatusReason[] | undefined
    StatusUpdateDateTime: string
    ReadRefundAccount?: 'No' | 'Yes' | undefined
    CutOffDateTime?: string | undefined
    ExpectedExecutionDateTime?: string | undefined
    ExpectedSettlementDateTime?: string | undefined
    Charges?:
      | {
          ChargeBearer: OBInternalChargeBearerType1Code
          Type: OBInternalPaymentChargeType1Code
          Amount: OBActiveOrHistoricCurrencyAndAmount
        }[]
      | undefined
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification: string
      LocalInstrument?: OBInternalLocalInstrument1Code | undefined
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      DebtorAccount?:
        | {
            SchemeName: OBInternalAccountIdentification4Code
            Identification: Identification_0
            Name?: string | undefined
            SecondaryIdentification?: SecondaryIdentification | undefined
            Proxy?: OBProxy1 | undefined
          }
        | undefined
      CreditorAgent?:
        | {
            SchemeName?: OBInternalFinancialInstitutionIdentification4Code | undefined
            Identification?: Identification_1 | undefined
            Name?: Name | undefined
            LEI?: LEI | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      CreditorAccount: {
        SchemeName: OBInternalAccountIdentification4Code
        Identification: Identification_0
        Name: string
        SecondaryIdentification?: SecondaryIdentification | undefined
        Proxy?: OBProxy1 | undefined
      }
      CreditorPostalAddress?: OBPostalAddress7 | undefined
      UltimateCreditor?: OBUltimateCreditor1 | undefined
      UltimateDebtor?: OBUltimateDebtor1 | undefined
      RegulatoryReporting?: OBRegulatoryReporting1[] | undefined
      RemittanceInformation?: OBRemittanceInformation2 | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    Authorisation?:
      | {
          AuthorisationType: 'Any' | 'Single' | 'Multiple'
          CompletionDateTime?: string | undefined
        }
      | undefined
    SCASupportData?: OBSCASupportData1 | undefined
    Debtor?: OBCashAccountDebtor4 | undefined
  }
  Risk: OBRisk1
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
type OBWriteFundsConfirmationResponse1 = {
  Data: {
    FundsAvailableResult?: { FundsAvailableDateTime: string; FundsAvailable: boolean } | undefined
    SupplementaryData?: OBSupplementaryData1 | undefined
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBWriteDomestic2 = {
  Data: {
    ConsentId: string
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification: string
      LocalInstrument?: OBInternalLocalInstrument1Code | undefined
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      DebtorAccount?:
        | {
            SchemeName: OBInternalAccountIdentification4Code
            Identification: Identification_0
            Name?: string | undefined
            SecondaryIdentification?: SecondaryIdentification | undefined
            Proxy?: OBProxy1 | undefined
          }
        | undefined
      CreditorAgent?:
        | {
            SchemeName?: OBInternalFinancialInstitutionIdentification4Code | undefined
            Identification?: Identification_1 | undefined
            Name?: Name | undefined
            LEI?: LEI | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      CreditorAccount: {
        SchemeName: OBInternalAccountIdentification4Code
        Identification: Identification_0
        Name: string
        SecondaryIdentification?: SecondaryIdentification | undefined
        Proxy?: OBProxy1 | undefined
      }
      CreditorPostalAddress?: OBPostalAddress7 | undefined
      UltimateCreditor?: OBUltimateCreditor1 | undefined
      UltimateDebtor?: OBUltimateDebtor1 | undefined
      RegulatoryReporting?: OBRegulatoryReporting1[] | undefined
      RemittanceInformation?: OBRemittanceInformation2 | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
  }
  Risk: OBRisk1
}
type ExternalPaymentTransactionStatus3Code =
  | 'RCVD'
  | 'PDNG'
  | 'ACTC'
  | 'PATC'
  | 'ACCP'
  | 'ACFC'
  | 'ACSP'
  | 'ACWC'
  | 'ACSC'
  | 'BLCK'
  | 'ACCC'
  | 'ACWP'
  | 'RJCT'
type OBDomesticRefundAccount1 = {
  Account: {
    SchemeName: OBInternalAccountIdentification4Code
    Identification: Identification_0
    Name: string
    SecondaryIdentification?: SecondaryIdentification | undefined
  }
}
type OBWriteDomesticResponse5 = {
  Data: {
    DomesticPaymentId: string
    ConsentId: string
    CreationDateTime: string
    Status: ExternalPaymentTransactionStatus3Code
    StatusUpdateDateTime: string
    StatusReason?: OBStatusReason[] | undefined
    ExpectedExecutionDateTime?: string | undefined
    ExpectedSettlementDateTime?: string | undefined
    Refund?: OBDomesticRefundAccount1 | undefined
    Charges?:
      | {
          ChargeBearer: OBInternalChargeBearerType1Code
          Type: OBInternalPaymentChargeType1Code
          Amount: OBActiveOrHistoricCurrencyAndAmount
        }[]
      | undefined
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification: string
      LocalInstrument?: OBInternalLocalInstrument1Code | undefined
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      DebtorAccount?:
        | {
            SchemeName: OBInternalAccountIdentification4Code
            Identification: Identification_0
            Name?: string | undefined
            SecondaryIdentification?: SecondaryIdentification | undefined
            Proxy?: OBProxy1 | undefined
          }
        | undefined
      CreditorAgent?:
        | {
            SchemeName?: OBInternalFinancialInstitutionIdentification4Code | undefined
            Identification?: Identification_1 | undefined
            Name?: Name | undefined
            LEI?: LEI | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      CreditorAccount: {
        SchemeName: OBInternalAccountIdentification4Code
        Identification: Identification_0
        Name: string
        SecondaryIdentification?: SecondaryIdentification | undefined
        Proxy?: OBProxy1 | undefined
      }
      CreditorPostalAddress?: OBPostalAddress7 | undefined
      UltimateCreditor?: OBUltimateCreditor1 | undefined
      UltimateDebtor?: OBUltimateDebtor1 | undefined
      RegulatoryReporting?: OBRegulatoryReporting1[] | undefined
      RemittanceInformation?: OBRemittanceInformation2 | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    MultiAuthorisation?:
      | {
          Status: 'AUTH' | 'AWAF' | 'RJCT'
          NumberRequired?: number | undefined
          NumberReceived?: number | undefined
          LastUpdateDateTime?: string | undefined
          ExpirationDateTime?: string | undefined
        }
      | undefined
    Debtor?: OBCashAccountDebtor4 | undefined
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type ExternalPaymentTransactionStatus1Code =
  | 'CANC'
  | 'RCVD'
  | 'ACTC'
  | 'PATC'
  | 'PDNG'
  | 'RJCT'
  | 'INFA'
  | 'INCO'
  | 'ACCP'
  | 'ACFC'
  | 'ACSP'
  | 'ACWC'
  | 'ACSC'
  | 'BLCK'
  | 'ACCC'
  | 'ACWP'
type OBWritePaymentDetails1 = {
  PaymentTransactionId: string
  Status: ExternalPaymentTransactionStatus1Code
  StatusUpdateDateTime: string
  StatusDetail?:
    | {
        LocalInstrument?: OBInternalLocalInstrument1Code | undefined
        Status: ExternalPaymentTransactionStatus1Code
        StatusReason?: string | undefined
        StatusReasonDescription?: string | undefined
      }
    | undefined
}
type OBWritePaymentDetailsResponse1 = {
  Data: { PaymentStatus?: OBWritePaymentDetails1[] | undefined }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBWriteDomesticScheduledConsent4 = {
  Data: {
    Permission: 'Create'
    ReadRefundAccount?: 'No' | 'Yes' | undefined
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification?: string | undefined
      LocalInstrument?: OBInternalLocalInstrument1Code | undefined
      RequestedExecutionDateTime: string
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      DebtorAccount?:
        | {
            SchemeName: OBInternalAccountIdentification4Code
            Identification: Identification_0
            Name?: string | undefined
            SecondaryIdentification?: SecondaryIdentification | undefined
            Proxy?: OBProxy1 | undefined
          }
        | undefined
      CreditorAccount: {
        SchemeName: OBInternalAccountIdentification4Code
        Identification: Identification_0
        Name: string
        SecondaryIdentification?: SecondaryIdentification | undefined
        Proxy?: OBProxy1 | undefined
      }
      CreditorPostalAddress?: OBPostalAddress7 | undefined
      UltimateCreditor?: OBUltimateCreditor1 | undefined
      UltimateDebtor?: OBUltimateDebtor1 | undefined
      RegulatoryReporting?: OBRegulatoryReporting1[] | undefined
      RemittanceInformation?: OBRemittanceInformation2 | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    Authorisation?:
      | {
          AuthorisationType: 'Any' | 'Single' | 'Multiple'
          CompletionDateTime?: string | undefined
        }
      | undefined
    SCASupportData?: OBSCASupportData1 | undefined
  }
  Risk: OBRisk1
}
type OBWriteDomesticScheduledConsentResponse5 = {
  Data: {
    ConsentId: string
    CreationDateTime: string
    Status: OBInternalConsentStatus2Code
    StatusUpdateDateTime: string
    StatusReason?: OBStatusReason[] | undefined
    Permission: 'Create'
    ReadRefundAccount?: 'No' | 'Yes' | undefined
    CutOffDateTime?: string | undefined
    ExpectedExecutionDateTime?: string | undefined
    ExpectedSettlementDateTime?: string | undefined
    Charges?:
      | {
          ChargeBearer: OBInternalChargeBearerType1Code
          Type: OBInternalPaymentChargeType1Code
          Amount: OBActiveOrHistoricCurrencyAndAmount
        }[]
      | undefined
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification?: string | undefined
      LocalInstrument?: OBInternalLocalInstrument1Code | undefined
      RequestedExecutionDateTime: string
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      DebtorAccount?:
        | {
            SchemeName: OBInternalAccountIdentification4Code
            Identification: Identification_0
            Name?: string | undefined
            SecondaryIdentification?: SecondaryIdentification | undefined
            Proxy?: OBProxy1 | undefined
          }
        | undefined
      CreditorAccount: {
        SchemeName: OBInternalAccountIdentification4Code
        Identification: Identification_0
        Name: string
        SecondaryIdentification?: SecondaryIdentification | undefined
        Proxy?: OBProxy1 | undefined
      }
      CreditorPostalAddress?: OBPostalAddress7 | undefined
      UltimateCreditor?: OBUltimateCreditor1 | undefined
      UltimateDebtor?: OBUltimateDebtor1 | undefined
      RegulatoryReporting?: OBRegulatoryReporting1[] | undefined
      RemittanceInformation?: OBRemittanceInformation2 | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    Authorisation?:
      | {
          AuthorisationType: 'Any' | 'Single' | 'Multiple'
          CompletionDateTime?: string | undefined
        }
      | undefined
    SCASupportData?: OBSCASupportData1 | undefined
    Debtor?: OBCashAccountDebtor4 | undefined
  }
  Risk: OBRisk1
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBWriteDomesticScheduled2 = {
  Data: {
    ConsentId: string
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification?: string | undefined
      LocalInstrument?: OBInternalLocalInstrument1Code | undefined
      RequestedExecutionDateTime: string
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      DebtorAccount?:
        | {
            SchemeName: OBInternalAccountIdentification4Code
            Identification: Identification_0
            Name?: string | undefined
            SecondaryIdentification?: SecondaryIdentification | undefined
            Proxy?: OBProxy1 | undefined
          }
        | undefined
      CreditorAccount: {
        SchemeName: OBInternalAccountIdentification4Code
        Identification: Identification_0
        Name: string
        SecondaryIdentification?: SecondaryIdentification | undefined
        Proxy?: OBProxy1 | undefined
      }
      RegulatoryReporting?: OBRegulatoryReporting1[] | undefined
      CreditorPostalAddress?: OBPostalAddress7 | undefined
      UltimateCreditor?: OBUltimateCreditor1 | undefined
      UltimateDebtor?: OBUltimateDebtor1 | undefined
      RemittanceInformation?: OBRemittanceInformation2 | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
  }
  Risk: OBRisk1
}
type ExternalPaymentTransactionStatus2Code =
  | 'CANC'
  | 'RCVD'
  | 'PDNG'
  | 'ACTC'
  | 'PATC'
  | 'ACCP'
  | 'ACFC'
  | 'ACSP'
  | 'ACWC'
  | 'ACSC'
  | 'BLCK'
  | 'ACCC'
  | 'ACWP'
  | 'RJCT'
type OBWriteDomesticScheduledResponse5 = {
  Data: {
    DomesticScheduledPaymentId: string
    ConsentId: string
    CreationDateTime: string
    Status: ExternalPaymentTransactionStatus2Code
    StatusUpdateDateTime: string
    StatusReason?: OBStatusReason[] | undefined
    ExpectedExecutionDateTime?: string | undefined
    ExpectedSettlementDateTime?: string | undefined
    Refund?: OBDomesticRefundAccount1 | undefined
    Charges?:
      | {
          ChargeBearer: OBInternalChargeBearerType1Code
          Type: OBInternalPaymentChargeType1Code
          Amount: OBActiveOrHistoricCurrencyAndAmount
        }[]
      | undefined
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification?: string | undefined
      LocalInstrument?: OBInternalLocalInstrument1Code | undefined
      RequestedExecutionDateTime: string
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      DebtorAccount?:
        | {
            SchemeName: OBInternalAccountIdentification4Code
            Identification: Identification_0
            Name?: string | undefined
            SecondaryIdentification?: SecondaryIdentification | undefined
            Proxy?: OBProxy1 | undefined
          }
        | undefined
      CreditorAccount: {
        SchemeName: OBInternalAccountIdentification4Code
        Identification: Identification_0
        Name: string
        SecondaryIdentification?: SecondaryIdentification | undefined
        Proxy?: OBProxy1 | undefined
      }
      CreditorPostalAddress?: OBPostalAddress7 | undefined
      UltimateCreditor?: OBUltimateCreditor1 | undefined
      UltimateDebtor?: OBUltimateDebtor1 | undefined
      RegulatoryReporting?: OBRegulatoryReporting1[] | undefined
      RemittanceInformation?: OBRemittanceInformation2 | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    MultiAuthorisation?:
      | {
          Status: 'AUTH' | 'AWAF' | 'RJCT'
          NumberRequired?: number | undefined
          NumberReceived?: number | undefined
          LastUpdateDateTime?: string | undefined
          ExpirationDateTime?: string | undefined
        }
      | undefined
    Debtor?: OBCashAccountDebtor4 | undefined
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type NumberOfPayments = string
type OBExternalMandateClassification1Code = 'FIXE' | 'USGB' | 'VARI'
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
  MandateIdentification?: Identification_1 | undefined
  Classification?: OBExternalMandateClassification1Code | undefined
  CategoryPurposeCode?: ExternalCategoryPurpose1Code | undefined
  FirstPaymentDateTime?: string | undefined
  RecurringPaymentDateTime?: string | undefined
  FinalPaymentDateTime?: string | undefined
  Frequency: OBFrequency6
  Reason?: string | undefined
}
type OBWriteDomesticStandingOrderConsent5 = {
  Data: {
    Permission: 'Create'
    ReadRefundAccount?: 'No' | 'Yes' | undefined
    Initiation: {
      RemittanceInformation?: OBRemittanceInformation2 | undefined
      NumberOfPayments?: NumberOfPayments | undefined
      FirstPaymentAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      RecurringPaymentAmount?:
        | { Amount: OBActiveCurrencyAndAmountSimpleType; Currency: ActiveOrHistoricCurrencyCode }
        | undefined
      FinalPaymentAmount?:
        | { Amount: OBActiveCurrencyAndAmountSimpleType; Currency: ActiveOrHistoricCurrencyCode }
        | undefined
      DebtorAccount?:
        | {
            SchemeName: OBInternalAccountIdentification4Code
            Identification: Identification_0
            Name?: string | undefined
            SecondaryIdentification?: SecondaryIdentification | undefined
            Proxy?: OBProxy1 | undefined
          }
        | undefined
      CreditorAccount: {
        SchemeName: OBInternalAccountIdentification4Code
        Identification: Identification_0
        Name: string
        SecondaryIdentification?: SecondaryIdentification | undefined
        Proxy?: OBProxy1 | undefined
      }
      UltimateCreditor?: OBUltimateCreditor1 | undefined
      UltimateDebtor?: OBUltimateDebtor1 | undefined
      RegulatoryReporting?: OBRegulatoryReporting1[] | undefined
      MandateRelatedInformation: OBMandateRelatedInformation1
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    Authorisation?:
      | {
          AuthorisationType: 'Any' | 'Single' | 'Multiple'
          CompletionDateTime?: string | undefined
        }
      | undefined
    SCASupportData?: OBSCASupportData1 | undefined
  }
  Risk: OBRisk1
}
type OBWriteDomesticStandingOrderConsentResponse6 = {
  Data: {
    ConsentId: string
    CreationDateTime: string
    Status: OBInternalConsentStatus2Code
    StatusUpdateDateTime: string
    StatusReason?: OBStatusReason[] | undefined
    Permission: 'Create'
    ReadRefundAccount?: 'No' | 'Yes' | undefined
    CutOffDateTime?: string | undefined
    Charges?:
      | {
          ChargeBearer: OBInternalChargeBearerType1Code
          Type: OBInternalPaymentChargeType1Code
          Amount: OBActiveOrHistoricCurrencyAndAmount
        }[]
      | undefined
    Initiation: {
      RemittanceInformation?: OBRemittanceInformation2 | undefined
      NumberOfPayments?: NumberOfPayments | undefined
      FirstPaymentAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      RecurringPaymentAmount?:
        | { Amount: OBActiveCurrencyAndAmountSimpleType; Currency: ActiveOrHistoricCurrencyCode }
        | undefined
      FinalPaymentAmount?:
        | { Amount: OBActiveCurrencyAndAmountSimpleType; Currency: ActiveOrHistoricCurrencyCode }
        | undefined
      DebtorAccount?:
        | {
            SchemeName: OBInternalAccountIdentification4Code
            Identification: Identification_0
            Name?: string | undefined
            SecondaryIdentification?: SecondaryIdentification | undefined
            Proxy?: OBProxy1 | undefined
          }
        | undefined
      CreditorAccount: {
        SchemeName: OBInternalAccountIdentification4Code
        Identification: Identification_0
        Name: string
        SecondaryIdentification?: SecondaryIdentification | undefined
        Proxy?: OBProxy1 | undefined
      }
      UltimateCreditor?: OBUltimateCreditor1 | undefined
      UltimateDebtor?: OBUltimateDebtor1 | undefined
      RegulatoryReporting?: OBRegulatoryReporting1[] | undefined
      MandateRelatedInformation: OBMandateRelatedInformation1
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    Authorisation?:
      | { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string | undefined }
      | undefined
    SCASupportData?: OBSCASupportData1 | undefined
    Debtor?: OBCashAccountDebtor4 | undefined
  }
  Risk: OBRisk1
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBWriteDomesticStandingOrder3 = {
  Data: {
    ConsentId: string
    Initiation: {
      RemittanceInformation?: OBRemittanceInformation2 | undefined
      NumberOfPayments?: NumberOfPayments | undefined
      FirstPaymentAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      RecurringPaymentAmount?:
        | { Amount: OBActiveCurrencyAndAmountSimpleType; Currency: ActiveOrHistoricCurrencyCode }
        | undefined
      FinalPaymentAmount?:
        | { Amount: OBActiveCurrencyAndAmountSimpleType; Currency: ActiveOrHistoricCurrencyCode }
        | undefined
      DebtorAccount?:
        | {
            SchemeName: OBInternalAccountIdentification4Code
            Identification: Identification_0
            Name?: string | undefined
            SecondaryIdentification?: SecondaryIdentification | undefined
            Proxy?: OBProxy1 | undefined
          }
        | undefined
      CreditorAccount: {
        SchemeName: OBInternalAccountIdentification4Code
        Identification: Identification_0
        Name: string
        SecondaryIdentification?: SecondaryIdentification | undefined
        Proxy?: OBProxy1 | undefined
      }
      UltimateCreditor?: OBUltimateCreditor1 | undefined
      UltimateDebtor?: OBUltimateDebtor1 | undefined
      RegulatoryReporting?: OBRegulatoryReporting1[] | undefined
      MandateRelatedInformation: OBMandateRelatedInformation1
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
  }
  Risk: OBRisk1
}
type OBWriteDomesticStandingOrderResponse6 = {
  Data: {
    DomesticStandingOrderId: string
    ConsentId: string
    CreationDateTime: string
    Status: ExternalPaymentTransactionStatus1Code
    StatusUpdateDateTime: string
    StatusReason?: OBStatusReason[] | undefined
    Refund?: OBDomesticRefundAccount1 | undefined
    Charges?:
      | {
          ChargeBearer: OBInternalChargeBearerType1Code
          Type: OBInternalPaymentChargeType1Code
          Amount: OBActiveOrHistoricCurrencyAndAmount
        }[]
      | undefined
    Initiation: {
      RemittanceInformation?: OBRemittanceInformation2 | undefined
      NumberOfPayments?: NumberOfPayments | undefined
      FirstPaymentAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      RecurringPaymentAmount?:
        | { Amount: OBActiveCurrencyAndAmountSimpleType; Currency: ActiveOrHistoricCurrencyCode }
        | undefined
      FinalPaymentAmount?:
        | { Amount: OBActiveCurrencyAndAmountSimpleType; Currency: ActiveOrHistoricCurrencyCode }
        | undefined
      DebtorAccount?:
        | {
            SchemeName: OBInternalAccountIdentification4Code
            Identification: Identification_0
            Name?: string | undefined
            SecondaryIdentification?: SecondaryIdentification | undefined
            Proxy?: OBProxy1 | undefined
          }
        | undefined
      CreditorAccount: {
        SchemeName: OBInternalAccountIdentification4Code
        Identification: Identification_0
        Name: string
        SecondaryIdentification?: SecondaryIdentification | undefined
        Proxy?: OBProxy1 | undefined
      }
      UltimateCreditor?: OBUltimateCreditor1 | undefined
      UltimateDebtor?: OBUltimateDebtor1 | undefined
      RegulatoryReporting?: OBRegulatoryReporting1[] | undefined
      MandateRelatedInformation: OBMandateRelatedInformation1
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    MultiAuthorisation?:
      | {
          Status: 'AUTH' | 'AWAF' | 'RJCT'
          NumberRequired?: number | undefined
          NumberReceived?: number | undefined
          LastUpdateDateTime?: string | undefined
          ExpirationDateTime?: string | undefined
        }
      | undefined
    Debtor?: OBCashAccountDebtor4 | undefined
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBWriteFileConsent3 = {
  Data: {
    Initiation: {
      FileType: string
      FileHash: string
      FileReference?: string | undefined
      NumberOfTransactions?: string | undefined
      ControlSum?: number | undefined
      RequestedExecutionDateTime?: string | undefined
      LocalInstrument?: OBInternalLocalInstrument1Code | undefined
      CreditorAgent?:
        | {
            SchemeName?: OBInternalFinancialInstitutionIdentification4Code | undefined
            Identification?: Identification_1 | undefined
            Name?: Name | undefined
            LEI?: LEI | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      DebtorAccount?:
        | {
            SchemeName: OBInternalAccountIdentification4Code
            Identification: Identification_0
            Name?: string | undefined
            SecondaryIdentification?: SecondaryIdentification | undefined
            Proxy?: OBProxy1 | undefined
          }
        | undefined
      UltimateDebtor?: OBUltimateDebtor1 | undefined
      RemittanceInformation?: OBRemittanceInformation2 | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    Authorisation?:
      | { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string | undefined }
      | undefined
    SCASupportData?: OBSCASupportData1 | undefined
  }
}
type OBInternalConsentStatus3Code = 'AWAU' | 'AWUP' | 'RJCT' | 'AUTH' | 'COND'
type OBWriteFileConsentResponse4 = {
  Data: {
    ConsentId: string
    CreationDateTime: string
    Status: OBInternalConsentStatus3Code
    StatusReason?: OBStatusReason[] | undefined
    StatusUpdateDateTime: string
    CutOffDateTime?: string | undefined
    Charges?:
      | {
          ChargeBearer: OBInternalChargeBearerType1Code
          Type: OBInternalPaymentChargeType1Code
          Amount: OBActiveOrHistoricCurrencyAndAmount
        }[]
      | undefined
    Initiation: {
      FileType: string
      FileHash: string
      FileReference?: string | undefined
      NumberOfTransactions?: string | undefined
      ControlSum?: number | undefined
      RequestedExecutionDateTime?: string | undefined
      LocalInstrument?: OBInternalLocalInstrument1Code | undefined
      CreditorAgent?:
        | {
            SchemeName?: OBInternalFinancialInstitutionIdentification4Code | undefined
            Identification?: Identification_1 | undefined
            Name?: Name | undefined
            LEI?: LEI | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      DebtorAccount?:
        | {
            SchemeName: OBInternalAccountIdentification4Code
            Identification: Identification_0
            Name?: string | undefined
            SecondaryIdentification?: SecondaryIdentification | undefined
            Proxy?: OBProxy1 | undefined
          }
        | undefined
      UltimateDebtor?: OBUltimateDebtor1 | undefined
      RemittanceInformation?: OBRemittanceInformation2 | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    Authorisation?:
      | { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string | undefined }
      | undefined
    SCASupportData?: OBSCASupportData1 | undefined
    Debtor?: OBCashAccountDebtor4 | undefined
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type File2 = {}
type OBWriteFile2 = {
  Data: {
    ConsentId: string
    Initiation: {
      FileType: string
      FileHash: string
      FileReference?: string | undefined
      NumberOfTransactions?: string | undefined
      ControlSum?: number | undefined
      RequestedExecutionDateTime?: string | undefined
      LocalInstrument?: OBInternalLocalInstrument1Code | undefined
      CreditorAgent?:
        | {
            SchemeName?: OBInternalFinancialInstitutionIdentification4Code | undefined
            Identification?: Identification_1 | undefined
            Name?: Name | undefined
            LEI?: LEI | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      DebtorAccount?:
        | {
            SchemeName: OBInternalAccountIdentification4Code
            Identification: Identification_0
            Name?: string | undefined
            SecondaryIdentification?: SecondaryIdentification | undefined
            Proxy?: OBProxy1 | undefined
          }
        | undefined
      UltimateDebtor?: OBUltimateDebtor1 | undefined
      RemittanceInformation?: OBRemittanceInformation2 | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
  }
}
type ExternalPaymentTransactionStatus4Code = 'PDNG' | 'INFA' | 'INCO'
type OBWriteFileResponse3 = {
  Data: {
    FilePaymentId: string
    ConsentId: string
    CreationDateTime: string
    Status: ExternalPaymentTransactionStatus4Code
    StatusUpdateDateTime: string
    StatusReason?: OBStatusReason[] | undefined
    Charges?:
      | {
          ChargeBearer: OBInternalChargeBearerType1Code
          Type: OBInternalPaymentChargeType1Code
          Amount: OBActiveOrHistoricCurrencyAndAmount
        }[]
      | undefined
    Initiation: {
      FileType: string
      FileHash: string
      FileReference?: string | undefined
      NumberOfTransactions?: string | undefined
      ControlSum?: number | undefined
      RequestedExecutionDateTime?: string | undefined
      LocalInstrument?: OBInternalLocalInstrument1Code | undefined
      DebtorAccount?:
        | {
            SchemeName: OBInternalAccountIdentification4Code
            Identification: Identification_0
            Name?: string | undefined
            SecondaryIdentification?: SecondaryIdentification | undefined
            Proxy?: OBProxy1 | undefined
          }
        | undefined
      CreditorAgent?:
        | {
            SchemeName?: OBInternalFinancialInstitutionIdentification4Code | undefined
            Identification?: Identification_1 | undefined
            Name?: Name | undefined
            LEI?: LEI | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      UltimateDebtor?: OBUltimateDebtor1 | undefined
      RemittanceInformation?: OBRemittanceInformation2 | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    MultiAuthorisation?:
      | {
          Status: 'AUTH' | 'AWAF' | 'RJCT'
          NumberRequired?: number | undefined
          NumberReceived?: number | undefined
          LastUpdateDateTime?: string | undefined
          ExpirationDateTime?: string | undefined
        }
      | undefined
    Debtor?: OBCashAccountDebtor4 | undefined
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBWriteInternationalConsent5 = {
  Data: {
    ReadRefundAccount?: 'No' | 'Yes' | undefined
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification: string
      LocalInstrument?: OBInternalLocalInstrument1Code | undefined
      InstructionPriority?: 'Normal' | 'Urgent' | undefined
      ExtendedPurpose?: string | undefined
      ChargeBearer?: OBInternalChargeBearerType1Code | undefined
      CurrencyOfTransfer: string
      DestinationCountryCode?: string | undefined
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      ExchangeRateInformation?:
        | {
            UnitCurrency: string
            ExchangeRate?: number | undefined
            RateType: 'Actual' | 'Agreed' | 'Indicative'
            ContractIdentification?: string | undefined
          }
        | undefined
      DebtorAccount?:
        | {
            SchemeName: OBInternalAccountIdentification4Code
            Identification: Identification_0
            Name?: string | undefined
            SecondaryIdentification?: SecondaryIdentification | undefined
            Proxy?: OBProxy1 | undefined
          }
        | undefined
      Creditor?:
        | {
            Name?: string | undefined
            LEI?: LEI | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      CreditorAgent?:
        | {
            SchemeName?: OBInternalFinancialInstitutionIdentification4Code | undefined
            Identification?: Identification_1 | undefined
            Name?: Name | undefined
            LEI?: LEI | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      CreditorAccount: {
        SchemeName: OBInternalAccountIdentification4Code
        Identification: Identification_0
        Name: string
        SecondaryIdentification?: SecondaryIdentification | undefined
        Proxy?: OBProxy1 | undefined
      }
      UltimateCreditor?: OBUltimateCreditor1 | undefined
      UltimateDebtor?: OBUltimateDebtor1 | undefined
      RegulatoryReporting?: OBRegulatoryReporting1[] | undefined
      RemittanceInformation?: OBRemittanceInformation2 | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    Authorisation?:
      | { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string | undefined }
      | undefined
    SCASupportData?: OBSCASupportData1 | undefined
  }
  Risk: OBRisk1
}
type OBWriteInternationalConsentResponse6 = {
  Data: {
    ConsentId: string
    CreationDateTime: string
    Status: OBInternalConsentStatus2Code
    StatusReason?: OBStatusReason[] | undefined
    StatusUpdateDateTime: string
    ReadRefundAccount?: 'No' | 'Yes' | undefined
    CutOffDateTime?: string | undefined
    ExpectedExecutionDateTime?: string | undefined
    ExpectedSettlementDateTime?: string | undefined
    Charges?:
      | {
          ChargeBearer: OBInternalChargeBearerType1Code
          Type: OBInternalPaymentChargeType1Code
          Amount: OBActiveOrHistoricCurrencyAndAmount
        }[]
      | undefined
    ExchangeRateInformation?:
      | {
          UnitCurrency: string
          ExchangeRate: number
          RateType: 'Actual' | 'Agreed' | 'Indicative'
          ContractIdentification?: string | undefined
          ExpirationDateTime?: string | undefined
        }
      | undefined
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification: string
      LocalInstrument?: OBInternalLocalInstrument1Code | undefined
      InstructionPriority?: 'Normal' | 'Urgent' | undefined
      ExtendedPurpose?: string | undefined
      ChargeBearer?: OBInternalChargeBearerType1Code | undefined
      CurrencyOfTransfer: string
      DestinationCountryCode?: string | undefined
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      ExchangeRateInformation?:
        | {
            UnitCurrency: string
            ExchangeRate?: number | undefined
            RateType: 'Actual' | 'Agreed' | 'Indicative'
            ContractIdentification?: string | undefined
          }
        | undefined
      DebtorAccount?:
        | {
            SchemeName: OBInternalAccountIdentification4Code
            Identification: Identification_0
            Name?: string | undefined
            SecondaryIdentification?: SecondaryIdentification | undefined
            Proxy?: OBProxy1 | undefined
          }
        | undefined
      Creditor?:
        | {
            Name?: string | undefined
            LEI?: LEI | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      CreditorAgent?:
        | {
            SchemeName?: OBInternalFinancialInstitutionIdentification4Code | undefined
            Identification?: Identification_1 | undefined
            Name?: Name | undefined
            LEI?: LEI | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      CreditorAccount: {
        SchemeName: OBInternalAccountIdentification4Code
        Identification: Identification_0
        Name: string
        SecondaryIdentification?: SecondaryIdentification | undefined
        Proxy?: OBProxy1 | undefined
      }
      UltimateCreditor?: OBUltimateCreditor1 | undefined
      UltimateDebtor?: OBUltimateDebtor1 | undefined
      RegulatoryReporting?: OBRegulatoryReporting1[] | undefined
      RemittanceInformation?: OBRemittanceInformation2 | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    Authorisation?:
      | { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string | undefined }
      | undefined
    SCASupportData?: OBSCASupportData1 | undefined
    Debtor?: OBCashAccountDebtor4 | undefined
  }
  Risk: OBRisk1
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBWriteInternational3 = {
  Data: {
    ConsentId: string
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification: string
      LocalInstrument?: OBInternalLocalInstrument1Code | undefined
      InstructionPriority?: 'Normal' | 'Urgent' | undefined
      ExtendedPurpose?: string | undefined
      ChargeBearer?: OBInternalChargeBearerType1Code | undefined
      CurrencyOfTransfer: string
      DestinationCountryCode?: string | undefined
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      ExchangeRateInformation?:
        | {
            UnitCurrency: string
            ExchangeRate?: number | undefined
            RateType: 'Actual' | 'Agreed' | 'Indicative'
            ContractIdentification?: string | undefined
          }
        | undefined
      DebtorAccount?:
        | {
            SchemeName: OBInternalAccountIdentification4Code
            Identification: Identification_0
            Name?: string | undefined
            SecondaryIdentification?: SecondaryIdentification | undefined
            Proxy?: OBProxy1 | undefined
          }
        | undefined
      Creditor?:
        | {
            Name?: string | undefined
            LEI?: LEI | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      CreditorAgent?:
        | {
            SchemeName?: OBInternalFinancialInstitutionIdentification4Code | undefined
            Identification?: Identification_1 | undefined
            Name?: Name | undefined
            LEI?: LEI | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      CreditorAccount: {
        SchemeName: OBInternalAccountIdentification4Code
        Identification: Identification_0
        Name: string
        SecondaryIdentification?: SecondaryIdentification | undefined
        Proxy?: OBProxy1 | undefined
      }
      UltimateCreditor?: OBUltimateCreditor1 | undefined
      UltimateDebtor?: OBUltimateDebtor1 | undefined
      RegulatoryReporting?: OBRegulatoryReporting1[] | undefined
      RemittanceInformation?: OBRemittanceInformation2 | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
  }
  Risk: OBRisk1
}
type OBWriteInternationalResponse5 = {
  Data: {
    InternationalPaymentId: string
    ConsentId: string
    CreationDateTime: string
    Status: ExternalPaymentTransactionStatus3Code
    StatusUpdateDateTime: string
    StatusReason?: OBStatusReason[] | undefined
    ExpectedExecutionDateTime?: string | undefined
    ExpectedSettlementDateTime?: string | undefined
    Refund?: OBDomesticRefundAccount1 | undefined
    Charges?:
      | {
          ChargeBearer: OBInternalChargeBearerType1Code
          Type: OBInternalPaymentChargeType1Code
          Amount: OBActiveOrHistoricCurrencyAndAmount
        }[]
      | undefined
    ExchangeRateInformation?:
      | {
          UnitCurrency: string
          ExchangeRate: number
          RateType: 'Actual' | 'Agreed' | 'Indicative'
          ContractIdentification?: string | undefined
          ExpirationDateTime?: string | undefined
        }
      | undefined
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification: string
      LocalInstrument?: OBInternalLocalInstrument1Code | undefined
      InstructionPriority?: 'Normal' | 'Urgent' | undefined
      ExtendedPurpose?: string | undefined
      ChargeBearer?: OBInternalChargeBearerType1Code | undefined
      CurrencyOfTransfer: string
      DestinationCountryCode?: string | undefined
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      ExchangeRateInformation?:
        | {
            UnitCurrency: string
            ExchangeRate?: number | undefined
            RateType: 'Actual' | 'Agreed' | 'Indicative'
            ContractIdentification?: string | undefined
          }
        | undefined
      DebtorAccount?:
        | {
            SchemeName: OBInternalAccountIdentification4Code
            Identification: Identification_0
            Name?: string | undefined
            SecondaryIdentification?: SecondaryIdentification | undefined
            Proxy?: OBProxy1 | undefined
          }
        | undefined
      Creditor?:
        | {
            Name?: string | undefined
            LEI?: LEI | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      CreditorAgent?:
        | {
            SchemeName?: OBInternalFinancialInstitutionIdentification4Code | undefined
            Identification?: Identification_1 | undefined
            Name?: Name | undefined
            LEI?: LEI | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      CreditorAccount: {
        SchemeName: OBInternalAccountIdentification4Code
        Identification: Identification_0
        Name: string
        SecondaryIdentification?: SecondaryIdentification | undefined
        Proxy?: OBProxy1 | undefined
      }
      UltimateCreditor?: OBUltimateCreditor1 | undefined
      UltimateDebtor?: OBUltimateDebtor1 | undefined
      RegulatoryReporting?: OBRegulatoryReporting1[] | undefined
      RemittanceInformation?: OBRemittanceInformation2 | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    MultiAuthorisation?:
      | {
          Status: 'AUTH' | 'AWAF' | 'RJCT'
          NumberRequired?: number | undefined
          NumberReceived?: number | undefined
          LastUpdateDateTime?: string | undefined
          ExpirationDateTime?: string | undefined
        }
      | undefined
    Debtor?: OBCashAccountDebtor4 | undefined
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBWriteInternationalScheduledConsent5 = {
  Data: {
    Permission: 'Create'
    ReadRefundAccount?: 'No' | 'Yes' | undefined
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification?: string | undefined
      LocalInstrument?: OBInternalLocalInstrument1Code | undefined
      InstructionPriority?: 'Normal' | 'Urgent' | undefined
      ExtendedPurpose?: string | undefined
      ChargeBearer?: OBInternalChargeBearerType1Code | undefined
      RequestedExecutionDateTime: string
      CurrencyOfTransfer: string
      DestinationCountryCode?: string | undefined
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      ExchangeRateInformation?:
        | {
            UnitCurrency: string
            ExchangeRate?: number | undefined
            RateType: 'Actual' | 'Agreed' | 'Indicative'
            ContractIdentification?: string | undefined
          }
        | undefined
      DebtorAccount?:
        | {
            SchemeName: OBInternalAccountIdentification4Code
            Identification: Identification_0
            Name?: string | undefined
            SecondaryIdentification?: SecondaryIdentification | undefined
            Proxy?: OBProxy1 | undefined
          }
        | undefined
      Creditor?:
        | {
            Name?: string | undefined
            LEI?: LEI | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      CreditorAgent?:
        | {
            SchemeName?: OBInternalFinancialInstitutionIdentification4Code | undefined
            Identification?: Identification_1 | undefined
            LEI?: LEI | undefined
            Name?: Name | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      CreditorAccount: {
        SchemeName: OBInternalAccountIdentification4Code
        Identification: Identification_0
        Name: string
        SecondaryIdentification?: SecondaryIdentification | undefined
        Proxy?: OBProxy1 | undefined
      }
      UltimateCreditor?: OBUltimateCreditor1 | undefined
      UltimateDebtor?: OBUltimateDebtor1 | undefined
      RegulatoryReporting?: OBRegulatoryReporting1[] | undefined
      RemittanceInformation?: OBRemittanceInformation2 | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    Authorisation?:
      | { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string | undefined }
      | undefined
    SCASupportData?: OBSCASupportData1 | undefined
  }
  Risk: OBRisk1
}
type OBWriteInternationalScheduledConsentResponse6 = {
  Data: {
    ConsentId: string
    CreationDateTime: string
    Status: OBInternalConsentStatus2Code
    StatusReason?: OBStatusReason[] | undefined
    StatusUpdateDateTime: string
    Permission: 'Create'
    ReadRefundAccount?: 'No' | 'Yes' | undefined
    CutOffDateTime?: string | undefined
    ExpectedExecutionDateTime?: string | undefined
    ExpectedSettlementDateTime?: string | undefined
    Charges?:
      | {
          ChargeBearer: OBInternalChargeBearerType1Code
          Type: OBInternalPaymentChargeType1Code
          Amount: OBActiveOrHistoricCurrencyAndAmount
        }[]
      | undefined
    ExchangeRateInformation?:
      | {
          UnitCurrency: string
          ExchangeRate: number
          RateType: 'Actual' | 'Agreed' | 'Indicative'
          ContractIdentification?: string | undefined
          ExpirationDateTime?: string | undefined
        }
      | undefined
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification?: string | undefined
      LocalInstrument?: OBInternalLocalInstrument1Code | undefined
      InstructionPriority?: 'Normal' | 'Urgent' | undefined
      ExtendedPurpose?: string | undefined
      ChargeBearer?: OBInternalChargeBearerType1Code | undefined
      RequestedExecutionDateTime: string
      CurrencyOfTransfer: string
      DestinationCountryCode?: string | undefined
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      ExchangeRateInformation?:
        | {
            UnitCurrency: string
            ExchangeRate?: number | undefined
            RateType: 'Actual' | 'Agreed' | 'Indicative'
            ContractIdentification?: string | undefined
          }
        | undefined
      DebtorAccount?:
        | {
            SchemeName: OBInternalAccountIdentification4Code
            Identification: Identification_0
            Name?: string | undefined
            SecondaryIdentification?: SecondaryIdentification | undefined
            Proxy?: OBProxy1 | undefined
          }
        | undefined
      Creditor?:
        | {
            Name?: string | undefined
            LEI?: LEI | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      CreditorAgent?:
        | {
            SchemeName?: OBInternalFinancialInstitutionIdentification4Code | undefined
            Identification?: Identification_1 | undefined
            LEI?: LEI | undefined
            Name?: Name | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      CreditorAccount: {
        SchemeName: OBInternalAccountIdentification4Code
        Identification: Identification_0
        Name: string
        SecondaryIdentification?: SecondaryIdentification | undefined
        Proxy?: OBProxy1 | undefined
      }
      UltimateCreditor?: OBUltimateCreditor1 | undefined
      UltimateDebtor?: OBUltimateDebtor1 | undefined
      RegulatoryReporting?: OBRegulatoryReporting1[] | undefined
      RemittanceInformation?: OBRemittanceInformation2 | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    Authorisation?:
      | { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string | undefined }
      | undefined
    SCASupportData?: OBSCASupportData1 | undefined
    Debtor?: OBCashAccountDebtor4 | undefined
  }
  Risk: OBRisk1
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBWriteInternationalScheduled3 = {
  Data: {
    ConsentId: string
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification?: string | undefined
      LocalInstrument?: OBInternalLocalInstrument1Code | undefined
      InstructionPriority?: 'Normal' | 'Urgent' | undefined
      ExtendedPurpose?: string | undefined
      ChargeBearer?: OBInternalChargeBearerType1Code | undefined
      RequestedExecutionDateTime: string
      CurrencyOfTransfer: string
      DestinationCountryCode?: string | undefined
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      ExchangeRateInformation?:
        | {
            UnitCurrency: string
            ExchangeRate?: number | undefined
            RateType: 'Actual' | 'Agreed' | 'Indicative'
            ContractIdentification?: string | undefined
          }
        | undefined
      DebtorAccount?:
        | {
            SchemeName: OBInternalAccountIdentification4Code
            Identification: Identification_0
            Name?: string | undefined
            SecondaryIdentification?: SecondaryIdentification | undefined
            Proxy?: OBProxy1 | undefined
          }
        | undefined
      Creditor?:
        | {
            Name?: string | undefined
            LEI?: LEI | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      CreditorAgent?:
        | {
            SchemeName?: OBInternalFinancialInstitutionIdentification4Code | undefined
            Identification?: Identification_1 | undefined
            LEI?: LEI | undefined
            Name?: Name | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      CreditorAccount: {
        SchemeName: OBInternalAccountIdentification4Code
        Identification: Identification_0
        Name: string
        SecondaryIdentification?: SecondaryIdentification | undefined
        Proxy?: OBProxy1 | undefined
      }
      UltimateCreditor?: OBUltimateCreditor1 | undefined
      UltimateDebtor?: OBUltimateDebtor1 | undefined
      RegulatoryReporting?: OBRegulatoryReporting1[] | undefined
      RemittanceInformation?: OBRemittanceInformation2 | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
  }
  Risk: OBRisk1
}
type OBWriteInternationalScheduledResponse6 = {
  Data: {
    InternationalScheduledPaymentId: string
    ConsentId: string
    CreationDateTime: string
    Status: ExternalPaymentTransactionStatus2Code
    StatusUpdateDateTime: string
    StatusReason?: OBStatusReason[] | undefined
    ExpectedExecutionDateTime?: string | undefined
    ExpectedSettlementDateTime?: string | undefined
    Refund?: OBDomesticRefundAccount1 | undefined
    Charges?:
      | {
          ChargeBearer: OBInternalChargeBearerType1Code
          Type: OBInternalPaymentChargeType1Code
          Amount: OBActiveOrHistoricCurrencyAndAmount
        }[]
      | undefined
    ExchangeRateInformation?:
      | {
          UnitCurrency: string
          ExchangeRate: number
          RateType: 'Actual' | 'Agreed' | 'Indicative'
          ContractIdentification?: string | undefined
          ExpirationDateTime?: string | undefined
        }
      | undefined
    Initiation: {
      InstructionIdentification: string
      EndToEndIdentification?: string | undefined
      LocalInstrument?: OBInternalLocalInstrument1Code | undefined
      InstructionPriority?: 'Normal' | 'Urgent' | undefined
      ExtendedPurpose?: string | undefined
      ChargeBearer?: OBInternalChargeBearerType1Code | undefined
      RequestedExecutionDateTime: string
      CurrencyOfTransfer: string
      DestinationCountryCode?: string | undefined
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      ExchangeRateInformation?:
        | {
            UnitCurrency: string
            ExchangeRate?: number | undefined
            RateType: 'Actual' | 'Agreed' | 'Indicative'
            ContractIdentification?: string | undefined
          }
        | undefined
      DebtorAccount?:
        | {
            SchemeName: OBInternalAccountIdentification4Code
            Identification: Identification_0
            Name?: string | undefined
            SecondaryIdentification?: SecondaryIdentification | undefined
            Proxy?: OBProxy1 | undefined
          }
        | undefined
      Creditor?:
        | {
            Name?: string | undefined
            LEI?: LEI | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      CreditorAgent?:
        | {
            SchemeName?: OBInternalFinancialInstitutionIdentification4Code | undefined
            Identification?: Identification_1 | undefined
            LEI?: LEI | undefined
            Name?: Name | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      CreditorAccount: {
        SchemeName: OBInternalAccountIdentification4Code
        Identification: Identification_0
        Name: string
        SecondaryIdentification?: SecondaryIdentification | undefined
        Proxy?: OBProxy1 | undefined
      }
      UltimateCreditor?: OBUltimateCreditor1 | undefined
      UltimateDebtor?: OBUltimateDebtor1 | undefined
      RegulatoryReporting?: OBRegulatoryReporting1[] | undefined
      RemittanceInformation?: OBRemittanceInformation2 | undefined
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    MultiAuthorisation?:
      | {
          Status: 'AUTH' | 'AWAF' | 'RJCT'
          NumberRequired?: number | undefined
          NumberReceived?: number | undefined
          LastUpdateDateTime?: string | undefined
          ExpirationDateTime?: string | undefined
        }
      | undefined
    Debtor?: OBCashAccountDebtor4 | undefined
  }
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBWriteInternationalStandingOrderConsent6 = {
  Data: {
    Permission: 'Create'
    ReadRefundAccount?: 'No' | 'Yes' | undefined
    Initiation: {
      RemittanceInformation?: OBRemittanceInformation2 | undefined
      NumberOfPayments?: NumberOfPayments | undefined
      ExtendedPurpose?: string | undefined
      ChargeBearer?: OBInternalChargeBearerType1Code | undefined
      CurrencyOfTransfer: string
      DestinationCountryCode?: string | undefined
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      DebtorAccount?:
        | {
            SchemeName: OBInternalAccountIdentification4Code
            Identification: Identification_0
            Name?: string | undefined
            SecondaryIdentification?: SecondaryIdentification | undefined
            Proxy?: OBProxy1 | undefined
          }
        | undefined
      Creditor?:
        | {
            Name?: string | undefined
            LEI?: LEI | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      CreditorAgent?:
        | {
            SchemeName?: OBInternalFinancialInstitutionIdentification4Code | undefined
            Identification?: string | undefined
            Name?: Name | undefined
            LEI?: LEI | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      CreditorAccount: {
        SchemeName: OBInternalAccountIdentification4Code
        Identification: Identification_0
        Name: string
        SecondaryIdentification?: SecondaryIdentification | undefined
        Proxy?: OBProxy1 | undefined
      }
      UltimateCreditor?: OBUltimateCreditor1 | undefined
      UltimateDebtor?: OBUltimateDebtor1 | undefined
      RegulatoryReporting?: OBRegulatoryReporting1[] | undefined
      MandateRelatedInformation: OBMandateRelatedInformation1
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    Authorisation?:
      | { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string | undefined }
      | undefined
    SCASupportData?: OBSCASupportData1 | undefined
  }
  Risk: OBRisk1
}
type OBWriteInternationalStandingOrderConsentResponse7 = {
  Data: {
    ConsentId: string
    CreationDateTime: string
    Status: OBInternalConsentStatus2Code
    StatusReason?: OBStatusReason[] | undefined
    StatusUpdateDateTime: string
    Permission: 'Create'
    ReadRefundAccount?: 'No' | 'Yes' | undefined
    CutOffDateTime?: string | undefined
    Charges?:
      | {
          ChargeBearer: OBInternalChargeBearerType1Code
          Type: OBInternalPaymentChargeType1Code
          Amount: OBActiveOrHistoricCurrencyAndAmount
        }[]
      | undefined
    Initiation: {
      RemittanceInformation?: OBRemittanceInformation2 | undefined
      NumberOfPayments?: NumberOfPayments | undefined
      ExtendedPurpose?: string | undefined
      ChargeBearer?: OBInternalChargeBearerType1Code | undefined
      CurrencyOfTransfer: string
      DestinationCountryCode?: string | undefined
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      DebtorAccount?:
        | {
            SchemeName: OBInternalAccountIdentification4Code
            Identification: Identification_0
            Name?: string | undefined
            SecondaryIdentification?: SecondaryIdentification | undefined
            Proxy?: OBProxy1 | undefined
          }
        | undefined
      Creditor?:
        | {
            Name?: string | undefined
            LEI?: LEI | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      CreditorAgent?:
        | {
            SchemeName?: OBInternalFinancialInstitutionIdentification4Code | undefined
            Identification?: string | undefined
            Name?: Name | undefined
            LEI?: LEI | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      CreditorAccount: {
        SchemeName: OBInternalAccountIdentification4Code
        Identification: Identification_0
        Name: string
        SecondaryIdentification?: SecondaryIdentification | undefined
        Proxy?: OBProxy1 | undefined
      }
      UltimateCreditor?: OBUltimateCreditor1 | undefined
      UltimateDebtor?: OBUltimateDebtor1 | undefined
      RegulatoryReporting?: OBRegulatoryReporting1[] | undefined
      MandateRelatedInformation: OBMandateRelatedInformation1
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    Authorisation?:
      | { AuthorisationType: 'Any' | 'Single'; CompletionDateTime?: string | undefined }
      | undefined
    SCASupportData?: OBSCASupportData1 | undefined
    Debtor?: OBCashAccountDebtor4 | undefined
  }
  Risk: OBRisk1
  Links?: Links | undefined
  Meta?: Meta | undefined
}
type OBWriteInternationalStandingOrder4 = {
  Data: {
    ConsentId: string
    Initiation: {
      RemittanceInformation?: OBRemittanceInformation2 | undefined
      NumberOfPayments?: NumberOfPayments | undefined
      ExtendedPurpose?: string | undefined
      ChargeBearer?: OBInternalChargeBearerType1Code | undefined
      CurrencyOfTransfer: string
      DestinationCountryCode?: string | undefined
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      DebtorAccount?:
        | {
            SchemeName: OBInternalAccountIdentification4Code
            Identification: Identification_0
            Name?: string | undefined
            SecondaryIdentification?: SecondaryIdentification | undefined
            Proxy?: OBProxy1 | undefined
          }
        | undefined
      Creditor?:
        | {
            Name?: string | undefined
            LEI?: LEI | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      CreditorAgent?:
        | {
            SchemeName?: OBInternalFinancialInstitutionIdentification4Code | undefined
            Identification?: string | undefined
            Name?: Name | undefined
            LEI?: LEI | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      CreditorAccount: {
        SchemeName: OBInternalAccountIdentification4Code
        Identification: Identification_0
        Name: string
        SecondaryIdentification?: SecondaryIdentification | undefined
        Proxy?: OBProxy1 | undefined
      }
      UltimateCreditor?: OBUltimateCreditor1 | undefined
      UltimateDebtor?: OBUltimateDebtor1 | undefined
      RegulatoryReporting?: OBRegulatoryReporting1[] | undefined
      MandateRelatedInformation: OBMandateRelatedInformation1
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
  }
  Risk: OBRisk1
}
type OBWriteInternationalStandingOrderResponse7 = {
  Data: {
    InternationalStandingOrderId: string
    ConsentId: string
    CreationDateTime: string
    Status: ExternalPaymentTransactionStatus1Code
    StatusUpdateDateTime: string
    StatusReason?: OBStatusReason[] | undefined
    Refund?: OBDomesticRefundAccount1 | undefined
    Charges?:
      | {
          ChargeBearer: OBInternalChargeBearerType1Code
          Type: OBInternalPaymentChargeType1Code
          Amount: OBActiveOrHistoricCurrencyAndAmount
        }[]
      | undefined
    Initiation: {
      RemittanceInformation?: OBRemittanceInformation2 | undefined
      NumberOfPayments?: NumberOfPayments | undefined
      ExtendedPurpose?: string | undefined
      ChargeBearer?: OBInternalChargeBearerType1Code | undefined
      CurrencyOfTransfer: string
      DestinationCountryCode?: string | undefined
      InstructedAmount: {
        Amount: OBActiveCurrencyAndAmountSimpleType
        Currency: ActiveOrHistoricCurrencyCode
      }
      DebtorAccount?:
        | {
            SchemeName: OBInternalAccountIdentification4Code
            Identification: Identification_0
            Name?: string | undefined
            SecondaryIdentification?: SecondaryIdentification | undefined
            Proxy?: OBProxy1 | undefined
          }
        | undefined
      Creditor?:
        | {
            Name?: string | undefined
            LEI?: LEI | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      CreditorAgent?:
        | {
            SchemeName?: OBInternalFinancialInstitutionIdentification4Code | undefined
            Identification?: string | undefined
            Name?: Name | undefined
            LEI?: LEI | undefined
            PostalAddress?: OBPostalAddress7 | undefined
          }
        | undefined
      CreditorAccount: {
        SchemeName: OBInternalAccountIdentification4Code
        Identification: Identification_0
        Name: string
        SecondaryIdentification?: SecondaryIdentification | undefined
        Proxy?: OBProxy1 | undefined
      }
      UltimateCreditor?: OBUltimateCreditor1 | undefined
      UltimateDebtor?: OBUltimateDebtor1 | undefined
      RegulatoryReporting?: OBRegulatoryReporting1[] | undefined
      MandateRelatedInformation: OBMandateRelatedInformation1
      SupplementaryData?: OBSupplementaryData1 | undefined
    }
    MultiAuthorisation?:
      | {
          Status: 'AUTH' | 'AWAF' | 'RJCT'
          NumberRequired?: number | undefined
          NumberReceived?: number | undefined
          LastUpdateDateTime?: string | undefined
          ExpirationDateTime?: string | undefined
        }
      | undefined
    Debtor?: OBCashAccountDebtor4 | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomesticConsent4 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomesticConsent4 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomesticConsent4 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomestic2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 409
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomestic2 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 409
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomestic2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 409
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomestic2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomestic2 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomestic2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduledConsent4 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 409
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduledConsent4 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 409
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduledConsent4 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 409
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduledConsent4 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduledConsent4 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduledConsent4 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduled2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 409
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduled2 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 409
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduled2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 409
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduled2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduled2 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomesticScheduled2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrderConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 409
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrderConsent5 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 409
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrderConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 409
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrderConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrderConsent5 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrderConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrder3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 409
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrder3 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 409
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrder3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 409
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrder3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrder3 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteDomesticStandingOrder3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteFileConsent3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 409
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteFileConsent3 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 409
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteFileConsent3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 409
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteFileConsent3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteFileConsent3 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteFileConsent3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
    '/file-payment-consents/:ConsentId/file': {
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: File2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 409
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
                'x-client-id'?: string | undefined
              }
            } & { json: File2 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 409
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
                'x-client-id'?: string | undefined
              }
            } & { json: File2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 409
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: File2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: File2 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: File2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: File2 }
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteFile2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 409
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteFile2 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 409
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteFile2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 409
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteFile2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteFile2 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteFile2 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 409
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalConsent5 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 409
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 409
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalConsent5 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternational3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternational3 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternational3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduledConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 409
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduledConsent5 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 409
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduledConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 409
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduledConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduledConsent5 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduledConsent5 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduled3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 409
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduled3 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 409
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduled3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 409
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduled3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduled3 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalScheduled3 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrderConsent6 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 409
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrderConsent6 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 409
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrderConsent6 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 409
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrderConsent6 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrderConsent6 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrderConsent6 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrder4 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 409
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrder4 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 409
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrder4 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 409
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrder4 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrder4 }
            output: OBErrorResponse1
            outputFormat: 'json'
            status: 422
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
                'x-client-id'?: string | undefined
              }
            } & { json: OBWriteInternationalStandingOrder4 }
            output: OBErrorResponse1
            outputFormat: 'text'
            status: 422
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
                'x-client-id'?: string | undefined
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
