type Amount = { currency?: string | undefined; value?: bigint | undefined }
type Financier = { amount: Amount; firstName: string; lastName: string; location: string }
type SourceOfFunds = {
  adyenProcessedFunds: boolean
  amount?: Amount | undefined
  assetMonthsHeld?: number | undefined
  cryptocurrencyExchange?: string | undefined
  dateOfFundsReceived?: string | undefined
  dateOfSourceEvent?: string | undefined
  description?: string | undefined
  financiers?: Financier[] | undefined
  originatorLegalEntityId?: string | undefined
  purpose?: string | undefined
  relationship?: string | undefined
  type?:
    | 'business'
    | 'employment'
    | 'donations'
    | 'inheritance'
    | 'financialAid'
    | 'rentalIncome'
    | 'dividendIncome'
    | 'royaltyIncome'
    | 'thirdPartyFunding'
    | 'pensionIncome'
    | 'insuranceSettlement'
    | 'cryptocurrencyIncome'
    | 'assetSale'
    | 'loans'
    | 'gamblingWinnings'
    | undefined
  website?: string | undefined
}
type WebData = { webAddress?: string | undefined; webAddressId?: string | undefined }
type WebDataExemption = { reason?: 'noOnlinePresence' | 'notCollectedDuringOnboarding' | undefined }
type BusinessLineInfo = {
  industryCode: string
  industryCodeDescription?: string | undefined
  legalEntityId: string
  salesChannels?: string[] | undefined
  service: 'paymentProcessing' | 'issuing' | 'banking'
  sourceOfFunds?: SourceOfFunds | undefined
  webData?: WebData[] | undefined
  webDataExemption?: WebDataExemption | undefined
}
type CapabilityProblemEntityRecursive = {
  documents?: string[] | undefined
  id?: string | undefined
  type?: 'BankAccount' | 'Document' | 'LegalEntity' | 'product' | undefined
}
type CapabilityProblemEntity = {
  documents?: string[] | undefined
  id?: string | undefined
  owner?: CapabilityProblemEntityRecursive | undefined
  type?: 'BankAccount' | 'Document' | 'LegalEntity' | 'product' | undefined
}
type RemediatingAction = { code?: string | undefined; message?: string | undefined }
type VerificationErrorRecursive = {
  capabilities?:
    | (
        | 'acceptExternalFunding'
        | 'acceptPspFunding'
        | 'acceptTransactionInRestrictedCountries'
        | 'acceptTransactionInRestrictedCountriesCommercial'
        | 'acceptTransactionInRestrictedCountriesConsumer'
        | 'acceptTransactionInRestrictedIndustries'
        | 'acceptTransactionInRestrictedIndustriesCommercial'
        | 'acceptTransactionInRestrictedIndustriesConsumer'
        | 'acquiring'
        | 'atmWithdrawal'
        | 'atmWithdrawalCommercial'
        | 'atmWithdrawalConsumer'
        | 'atmWithdrawalInRestrictedCountries'
        | 'atmWithdrawalInRestrictedCountriesCommercial'
        | 'atmWithdrawalInRestrictedCountriesConsumer'
        | 'authorisedPaymentInstrumentUser'
        | 'getGrantOffers'
        | 'issueBankAccount'
        | 'issueCard'
        | 'issueCardCommercial'
        | 'issueCardConsumer'
        | 'issueChargeCard'
        | 'issueChargeCardCommercial'
        | 'issueCreditLimit'
        | 'localAcceptance'
        | 'payout'
        | 'payoutToTransferInstrument'
        | 'processing'
        | 'receiveFromBalanceAccount'
        | 'receiveFromPlatformPayments'
        | 'receiveFromThirdParty'
        | 'receiveFromTransferInstrument'
        | 'receiveGrants'
        | 'receivePayments'
        | 'sendToBalanceAccount'
        | 'sendToThirdParty'
        | 'sendToTransferInstrument'
        | 'thirdPartyFunding'
        | 'useCard'
        | 'useCardCommercial'
        | 'useCardConsumer'
        | 'useCardInRestrictedCountries'
        | 'useCardInRestrictedCountriesCommercial'
        | 'useCardInRestrictedCountriesConsumer'
        | 'useCardInRestrictedIndustries'
        | 'useCardInRestrictedIndustriesCommercial'
        | 'useCardInRestrictedIndustriesConsumer'
        | 'useChargeCard'
        | 'useChargeCardCommercial'
        | 'withdrawFromAtm'
        | 'withdrawFromAtmCommercial'
        | 'withdrawFromAtmConsumer'
        | 'withdrawFromAtmInRestrictedCountries'
        | 'withdrawFromAtmInRestrictedCountriesCommercial'
        | 'withdrawFromAtmInRestrictedCountriesConsumer'
      )[]
    | undefined
  code?: string | undefined
  message?: string | undefined
  type?: 'dataMissing' | 'dataReview' | 'invalidInput' | 'pendingStatus' | 'rejected' | undefined
  remediatingActions?: RemediatingAction[] | undefined
}
type VerificationError = {
  capabilities?:
    | (
        | 'acceptExternalFunding'
        | 'acceptPspFunding'
        | 'acceptTransactionInRestrictedCountries'
        | 'acceptTransactionInRestrictedCountriesCommercial'
        | 'acceptTransactionInRestrictedCountriesConsumer'
        | 'acceptTransactionInRestrictedIndustries'
        | 'acceptTransactionInRestrictedIndustriesCommercial'
        | 'acceptTransactionInRestrictedIndustriesConsumer'
        | 'acquiring'
        | 'atmWithdrawal'
        | 'atmWithdrawalCommercial'
        | 'atmWithdrawalConsumer'
        | 'atmWithdrawalInRestrictedCountries'
        | 'atmWithdrawalInRestrictedCountriesCommercial'
        | 'atmWithdrawalInRestrictedCountriesConsumer'
        | 'authorisedPaymentInstrumentUser'
        | 'getGrantOffers'
        | 'issueBankAccount'
        | 'issueCard'
        | 'issueCardCommercial'
        | 'issueCardConsumer'
        | 'issueChargeCard'
        | 'issueChargeCardCommercial'
        | 'issueCreditLimit'
        | 'localAcceptance'
        | 'payout'
        | 'payoutToTransferInstrument'
        | 'processing'
        | 'receiveFromBalanceAccount'
        | 'receiveFromPlatformPayments'
        | 'receiveFromThirdParty'
        | 'receiveFromTransferInstrument'
        | 'receiveGrants'
        | 'receivePayments'
        | 'sendToBalanceAccount'
        | 'sendToThirdParty'
        | 'sendToTransferInstrument'
        | 'thirdPartyFunding'
        | 'useCard'
        | 'useCardCommercial'
        | 'useCardConsumer'
        | 'useCardInRestrictedCountries'
        | 'useCardInRestrictedCountriesCommercial'
        | 'useCardInRestrictedCountriesConsumer'
        | 'useCardInRestrictedIndustries'
        | 'useCardInRestrictedIndustriesCommercial'
        | 'useCardInRestrictedIndustriesConsumer'
        | 'useChargeCard'
        | 'useChargeCardCommercial'
        | 'withdrawFromAtm'
        | 'withdrawFromAtmCommercial'
        | 'withdrawFromAtmConsumer'
        | 'withdrawFromAtmInRestrictedCountries'
        | 'withdrawFromAtmInRestrictedCountriesCommercial'
        | 'withdrawFromAtmInRestrictedCountriesConsumer'
      )[]
    | undefined
  code?: string | undefined
  message?: string | undefined
  remediatingActions?: RemediatingAction[] | undefined
  subErrors?: VerificationErrorRecursive[] | undefined
  type?: 'dataMissing' | 'dataReview' | 'invalidInput' | 'pendingStatus' | 'rejected' | undefined
}
type CapabilityProblem = {
  entity?: CapabilityProblemEntity | undefined
  verificationErrors?: VerificationError[] | undefined
}
type BusinessLine = {
  id: string
  industryCode: string
  industryCodeDescription?: string | undefined
  legalEntityId: string
  problems?: CapabilityProblem[] | undefined
  salesChannels?: string[] | undefined
  service: 'paymentProcessing' | 'issuing' | 'banking'
  sourceOfFunds?: SourceOfFunds | undefined
  webData?: WebData[] | undefined
  webDataExemption?: WebDataExemption | undefined
}
type ServiceError = {
  errorCode?: string | undefined
  errorType?: string | undefined
  message?: string | undefined
  pspReference?: string | undefined
  status?: number | undefined
}
type BusinessLineInfoUpdate = {
  industryCode?: string | undefined
  industryCodeDescription?: string | undefined
  salesChannels?: string[] | undefined
  sourceOfFunds?: SourceOfFunds | undefined
  webData?: WebData[] | undefined
  webDataExemption?: WebDataExemption | undefined
}
type Attachment = {
  content: string
  contentType?: string | undefined
  filename?: string | undefined
  pageName?: string | undefined
  pageType?: string | undefined
}
type OwnerEntity = { id: string; type: string }
type Document = {
  attachment?: Attachment | undefined
  attachments?: Attachment[] | undefined
  creationDate?: string | undefined
  description: string
  expiryDate?: string | undefined
  fileName?: string | undefined
  id?: string | undefined
  issuerCountry?: string | undefined
  issuerState?: string | undefined
  modificationDate?: string | undefined
  number?: string | undefined
  owner?: OwnerEntity | undefined
  type:
    | 'bankStatement'
    | 'driversLicense'
    | 'identityCard'
    | 'nationalIdNumber'
    | 'passport'
    | 'proofOfAddress'
    | 'proofOfNationalIdNumber'
    | 'proofOfResidency'
    | 'registrationDocument'
    | 'vatDocument'
    | 'proofOfOrganizationTaxInfo'
    | 'proofOfIndividualTaxId'
    | 'proofOfOwnership'
    | 'proofOfSignatory'
    | 'liveSelfie'
    | 'proofOfIndustry'
    | 'constitutionalDocument'
    | 'proofOfFundingOrWealthSource'
    | 'proofOfRelationship'
    | 'proofOfDirector'
}
type CapabilitySettings = {
  amountPerIndustry?: { [x: string]: Amount } | undefined
  authorizedCardUsers?: boolean | undefined
  fundingSource?: ('credit' | 'debit' | 'prepaid')[] | undefined
  interval?: 'daily' | 'monthly' | 'weekly' | undefined
  maxAmount?: Amount | undefined
}
type SupportingEntityCapability = {
  allowed?: boolean | undefined
  id?: string | undefined
  requested?: boolean | undefined
  verificationStatus?: string | undefined
}
type LegalEntityCapability = {
  allowed?: boolean | undefined
  allowedLevel?: 'high' | 'low' | 'medium' | 'notApplicable' | undefined
  allowedSettings?: CapabilitySettings | undefined
  requested?: boolean | undefined
  requestedLevel?: 'high' | 'low' | 'medium' | 'notApplicable' | undefined
  requestedSettings?: CapabilitySettings | undefined
  transferInstruments?: SupportingEntityCapability[] | undefined
  verificationStatus?: string | undefined
}
type LegalEntityAssociation = {
  associatorId?: string | undefined
  entityType?: string | undefined
  jobTitle?: string | undefined
  legalEntityId: string
  name?: string | undefined
  nominee?: boolean | undefined
  relationship?: string | undefined
  settlorExemptionReason?: string[] | undefined
  type:
    | 'definedBeneficiary'
    | 'director'
    | 'immediateParentCompany'
    | 'legalRepresentative'
    | 'pciSignatory'
    | 'protector'
    | 'secondaryPartner'
    | 'secondaryTrustee'
    | 'settlor'
    | 'signatory'
    | 'soleProprietorship'
    | 'trust'
    | 'trustOwnership'
    | 'uboThroughControl'
    | 'uboThroughOwnership'
    | 'ultimateParentCompany'
    | 'undefinedBeneficiary'
    | 'unincorporatedPartnership'
}
type BirthData = { dateOfBirth?: string | undefined }
type IdentificationData = {
  cardNumber?: string | undefined
  expiryDate?: string | undefined
  issuerCountry?: string | undefined
  issuerState?: string | undefined
  nationalIdExempt?: boolean | undefined
  number?: string | undefined
  type: 'nationalIdNumber' | 'passport' | 'driversLicense' | 'identityCard'
}
type Name = { firstName: string; infix?: string | undefined; lastName: string }
type PhoneNumber = {
  number: string
  phoneCountryCode?: string | undefined
  type?: string | undefined
}
type Address = {
  city?: string | undefined
  country: string
  postalCode?: string | undefined
  stateOrProvince?: string | undefined
  street?: string | undefined
  street2?: string | undefined
}
type Support = { email?: string | undefined; phone?: PhoneNumber | undefined }
type TaxInformation = {
  country?: string | undefined
  number?: string | undefined
  numberAbsent?: boolean | undefined
  type?: string | undefined
}
type Individual = {
  birthData?: BirthData | undefined
  email?: string | undefined
  identificationData?: IdentificationData | undefined
  name: Name
  nationality?: string | undefined
  phone?: PhoneNumber | undefined
  residentialAddress: Address
  support?: Support | undefined
  taxInformation?: TaxInformation[] | undefined
  webData?: WebData | undefined
}
type FinancialReport = {
  annualTurnover?: string | undefined
  balanceSheetTotal?: string | undefined
  currencyOfFinancialData?: string | undefined
  dateOfFinancialData?: string | undefined
  employeeCount?: string | undefined
  netAssets?: string | undefined
}
type StockData = {
  marketIdentifier?: string | undefined
  stockNumber?: string | undefined
  tickerSymbol?: string | undefined
}
type TaxReportingClassification = {
  businessType?:
    | 'other'
    | 'listedPublicCompany'
    | 'subsidiaryOfListedPublicCompany'
    | 'governmentalOrganization'
    | 'internationalOrganization'
    | 'financialInstitution'
    | undefined
  financialInstitutionNumber?: string | undefined
  mainSourceOfIncome?:
    | 'businessOperation'
    | 'realEstateSales'
    | 'investmentInterestOrRoyalty'
    | 'propertyRental'
    | 'other'
    | undefined
  type?:
    | 'nonFinancialNonReportable'
    | 'financialNonReportable'
    | 'nonFinancialActive'
    | 'nonFinancialPassive'
    | undefined
}
type Organization = {
  countryOfGoverningLaw?: string | undefined
  dateOfIncorporation?: string | undefined
  dateOfInitiationOfLegalProceeding?: string | undefined
  description?: string | undefined
  doingBusinessAs?: string | undefined
  doingBusinessAsAbsent?: (boolean | null) | undefined
  economicSector?: string | undefined
  email?: string | undefined
  financialReports?: FinancialReport[] | undefined
  globalLegalEntityIdentifier?: string | undefined
  headOfficeIndicator?: boolean | undefined
  institutionalSector?:
    | 'nonFinancialCorporation'
    | 'centralBank'
    | 'creditInstitutions'
    | 'depositTakingCorporations'
    | 'moneyMarketFunds'
    | 'nonMMFInvestmentFunds'
    | 'financialVehicleCorporation'
    | 'otherFinancialIntermediaries'
    | 'financialAuxiliaries'
    | 'captiveFinancialInstitutionsAndMoneyLenders'
    | 'insuranceCorporations'
    | 'pensionFunds'
    | 'centralGovernment'
    | 'stateGovernment'
    | 'localGovernment'
    | 'socialSecurityFunds'
    | 'nonProfitInstitutionsServingHouseholds'
    | undefined
  legalForm?: string | undefined
  legalName: string
  phone?: PhoneNumber | undefined
  principalPlaceOfBusiness?: Address | undefined
  registeredAddress: Address
  registrationNumber?: string | undefined
  registrationNumberAbsent?: (boolean | null) | undefined
  residentialAddressIndicator?: (boolean | null) | undefined
  statusOfLegalProceeding?:
    | 'noLegalActionsTaken'
    | 'underJudicialAdministration'
    | 'bankruptcyInsolvency'
    | 'otherLegalMeasures'
    | undefined
  stockData?: StockData | undefined
  support?: Support | undefined
  taxInformation?: TaxInformation[] | undefined
  taxReportingClassification?: TaxReportingClassification | undefined
  type?:
    | 'associationIncorporated'
    | 'governmentalOrganization'
    | 'listedPublicCompany'
    | 'nonProfit'
    | 'partnershipIncorporated'
    | 'privateCompany'
    | undefined
  vatAbsenceReason?: 'industryExemption' | 'belowTaxThreshold' | undefined
  vatNumber?: string | undefined
  webData?: WebData | undefined
}
type SoleProprietorship = {
  countryOfGoverningLaw?: string | undefined
  dateOfIncorporation?: string | undefined
  doingBusinessAs?: string | undefined
  doingBusinessAsAbsent?: (boolean | null) | undefined
  financialReports?: FinancialReport[] | undefined
  name: string
  principalPlaceOfBusiness?: Address | undefined
  registeredAddress: Address
  registrationNumber?: string | undefined
  residentialAddressIndicator?: (boolean | null) | undefined
  taxAbsent?: (boolean | null) | undefined
  taxInformation?: TaxInformation[] | undefined
  vatAbsenceReason?: 'industryExemption' | 'belowTaxThreshold' | undefined
  vatNumber?: string | undefined
}
type UndefinedBeneficiary = { description?: string | undefined; reference?: string | undefined }
type Trust = {
  countryOfGoverningLaw: string
  dateOfIncorporation?: string | undefined
  description?: string | undefined
  doingBusinessAs?: string | undefined
  doingBusinessAsAbsent?: (boolean | null) | undefined
  name: string
  principalPlaceOfBusiness?: Address | undefined
  registeredAddress: Address
  registrationNumber?: string | undefined
  residentialAddressIndicator?: (boolean | null) | undefined
  taxInformation?: TaxInformation[] | undefined
  type:
    | 'businessTrust'
    | 'cashManagementTrust'
    | 'charitableTrust'
    | 'corporateUnitTrust'
    | 'deceasedEstate'
    | 'discretionaryTrust'
    | 'discretionaryInvestmentTrust'
    | 'discretionaryServicesManagementTrust'
    | 'discretionaryTradingTrust'
    | 'familyTrust'
    | 'firstHomeSaverAccountsTrust'
    | 'fixedTrust'
    | 'fixedUnitTrust'
    | 'hybridTrust'
    | 'listedPublicUnitTrust'
    | 'otherTrust'
    | 'pooledSuperannuationTrust'
    | 'publicTradingTrust'
    | 'unlistedPublicUnitTrust'
  undefinedBeneficiaryInfo?: UndefinedBeneficiary[] | undefined
  vatAbsenceReason?: 'industryExemption' | 'belowTaxThreshold' | undefined
  vatNumber?: string | undefined
}
type UnincorporatedPartnership = {
  countryOfGoverningLaw: string
  dateOfIncorporation?: string | undefined
  description?: string | undefined
  doingBusinessAs?: string | undefined
  doingBusinessAsAbsent?: (boolean | null) | undefined
  name: string
  principalPlaceOfBusiness?: Address | undefined
  registeredAddress: Address
  registrationNumber?: string | undefined
  residentialAddressIndicator?: (boolean | null) | undefined
  taxInformation?: TaxInformation[] | undefined
  type?:
    | 'limitedPartnership'
    | 'generalPartnership'
    | 'familyPartnership'
    | 'commercialPartnership'
    | 'publicPartnership'
    | 'otherPartnership'
    | 'gbr'
    | 'gmbh'
    | 'kgaa'
    | 'cv'
    | 'vof'
    | 'maatschap'
    | 'privateFundLimitedPartnership'
    | 'businessTrustEntity'
    | 'businessPartnership'
    | 'limitedLiabilityPartnership'
    | 'eg'
    | 'cooperative'
    | 'vos'
    | 'comunidadDeBienes'
    | 'herenciaYacente'
    | 'comunidadDePropietarios'
    | 'sep'
    | 'sca'
    | 'bt'
    | 'kkt'
    | 'scs'
    | 'snc'
    | undefined
  vatAbsenceReason?: 'industryExemption' | 'belowTaxThreshold' | undefined
  vatNumber?: string | undefined
}
type LegalEntityInfoRequiredType = {
  capabilities?: { [x: string]: LegalEntityCapability } | undefined
  entityAssociations?: LegalEntityAssociation[] | undefined
  individual?: Individual | undefined
  organization?: Organization | undefined
  reference?: string | undefined
  soleProprietorship?: SoleProprietorship | undefined
  trust?: Trust | undefined
  type: 'individual' | 'organization' | 'soleProprietorship' | 'trust' | 'unincorporatedPartnership'
  unincorporatedPartnership?: UnincorporatedPartnership | undefined
  verificationPlan?: string | undefined
}
type DocumentPage = {
  pageName?: string | undefined
  pageNumber?: number | undefined
  type?: 'BACK' | 'FRONT' | 'UNDEFINED' | undefined
}
type DocumentReference = {
  active?: boolean | undefined
  description?: string | undefined
  fileName?: string | undefined
  id?: string | undefined
  modificationDate?: string | undefined
  pages?: DocumentPage[] | undefined
  type?: string | undefined
}
type EntityReference = { id?: string | undefined }
type TransferInstrumentReference = {
  accountIdentifier: string
  id: string
  realLastFour?: string | undefined
  trustedSource?: boolean | undefined
}
type VerificationDeadline = {
  capabilities: (
    | 'acceptExternalFunding'
    | 'acceptPspFunding'
    | 'acceptTransactionInRestrictedCountries'
    | 'acceptTransactionInRestrictedCountriesCommercial'
    | 'acceptTransactionInRestrictedCountriesConsumer'
    | 'acceptTransactionInRestrictedIndustries'
    | 'acceptTransactionInRestrictedIndustriesCommercial'
    | 'acceptTransactionInRestrictedIndustriesConsumer'
    | 'acquiring'
    | 'atmWithdrawal'
    | 'atmWithdrawalCommercial'
    | 'atmWithdrawalConsumer'
    | 'atmWithdrawalInRestrictedCountries'
    | 'atmWithdrawalInRestrictedCountriesCommercial'
    | 'atmWithdrawalInRestrictedCountriesConsumer'
    | 'authorisedPaymentInstrumentUser'
    | 'getGrantOffers'
    | 'issueBankAccount'
    | 'issueCard'
    | 'issueCardCommercial'
    | 'issueCardConsumer'
    | 'issueChargeCard'
    | 'issueChargeCardCommercial'
    | 'issueCreditLimit'
    | 'localAcceptance'
    | 'payout'
    | 'payoutToTransferInstrument'
    | 'processing'
    | 'receiveFromBalanceAccount'
    | 'receiveFromPlatformPayments'
    | 'receiveFromThirdParty'
    | 'receiveFromTransferInstrument'
    | 'receiveGrants'
    | 'receivePayments'
    | 'sendToBalanceAccount'
    | 'sendToThirdParty'
    | 'sendToTransferInstrument'
    | 'thirdPartyFunding'
    | 'useCard'
    | 'useCardCommercial'
    | 'useCardConsumer'
    | 'useCardInRestrictedCountries'
    | 'useCardInRestrictedCountriesCommercial'
    | 'useCardInRestrictedCountriesConsumer'
    | 'useCardInRestrictedIndustries'
    | 'useCardInRestrictedIndustriesCommercial'
    | 'useCardInRestrictedIndustriesConsumer'
    | 'useChargeCard'
    | 'useChargeCardCommercial'
    | 'withdrawFromAtm'
    | 'withdrawFromAtmCommercial'
    | 'withdrawFromAtmConsumer'
    | 'withdrawFromAtmInRestrictedCountries'
    | 'withdrawFromAtmInRestrictedCountriesCommercial'
    | 'withdrawFromAtmInRestrictedCountriesConsumer'
  )[]
  entityIds?: string[] | undefined
  expiresAt: string
}
type LegalEntity = {
  capabilities?: { [x: string]: LegalEntityCapability } | undefined
  documentDetails?: DocumentReference[] | undefined
  documents?: EntityReference[] | undefined
  entityAssociations?: LegalEntityAssociation[] | undefined
  id: string
  individual?: Individual | undefined
  organization?: Organization | undefined
  problems?: CapabilityProblem[] | undefined
  reference?: string | undefined
  soleProprietorship?: SoleProprietorship | undefined
  transferInstruments?: TransferInstrumentReference[] | undefined
  trust?: Trust | undefined
  type?:
    | 'individual'
    | 'organization'
    | 'soleProprietorship'
    | 'trust'
    | 'unincorporatedPartnership'
    | undefined
  unincorporatedPartnership?: UnincorporatedPartnership | undefined
  verificationDeadlines?: VerificationDeadline[] | undefined
  verificationPlan?: string | undefined
}
type LegalEntityInfo = {
  capabilities?: { [x: string]: LegalEntityCapability } | undefined
  entityAssociations?: LegalEntityAssociation[] | undefined
  individual?: Individual | undefined
  organization?: Organization | undefined
  reference?: string | undefined
  soleProprietorship?: SoleProprietorship | undefined
  trust?: Trust | undefined
  type?:
    | 'individual'
    | 'organization'
    | 'soleProprietorship'
    | 'trust'
    | 'unincorporatedPartnership'
    | undefined
  unincorporatedPartnership?: UnincorporatedPartnership | undefined
  verificationPlan?: string | undefined
}
type GetAcceptedTermsOfServiceDocumentResponse = {
  document?: string | undefined
  id?: string | undefined
  termsOfServiceAcceptanceReference?: string | undefined
  termsOfServiceDocumentFormat?: 'JSON' | 'PDF' | 'TXT' | undefined
}
type BusinessLines = { businessLines: BusinessLine[] }
type CheckTaxElectronicDeliveryConsentResponse = { US1099k?: boolean | undefined }
type VerificationErrors = { problems?: CapabilityProblem[] | undefined }
type DataReviewConfirmationResponse = { dataReviewedAt?: string | undefined }
type OnboardingLinkSettings = {
  acceptedCountries?: string[] | undefined
  allowBankAccountFormatSelection?: boolean | undefined
  allowDebugUi?: boolean | undefined
  allowIntraRegionCrossBorderPayout?: boolean | undefined
  changeLegalEntityType?: boolean | undefined
  editPrefilledCountry?: boolean | undefined
  enforceLegalAge?: boolean | undefined
  hideOnboardingIntroductionIndividual?: boolean | undefined
  hideOnboardingIntroductionOrganization?: boolean | undefined
  hideOnboardingIntroductionSoleProprietor?: boolean | undefined
  hideOnboardingIntroductionTrust?: boolean | undefined
  instantBankVerification?: boolean | undefined
  requirePciSignEcomMoto?: boolean | undefined
  requirePciSignEcommerce?: boolean | undefined
  requirePciSignPos?: boolean | undefined
  requirePciSignPosMoto?: boolean | undefined
  transferInstrumentLimit?: number | undefined
}
type OnboardingLinkInfo = {
  locale?: string | undefined
  redirectUrl?: string | undefined
  settings?: OnboardingLinkSettings | undefined
  themeId?: string | undefined
}
type OnboardingLink = { url?: string | undefined }
type PciDocumentInfo = {
  createdAt?: string | undefined
  id?: string | undefined
  validUntil?: string | undefined
}
type GetPciQuestionnaireInfosResponse = { data?: PciDocumentInfo[] | undefined }
type GeneratePciDescriptionRequest = {
  additionalSalesChannels?: ('eCommerce' | 'ecomMoto' | 'pos' | 'posMoto')[] | undefined
  language?: string | undefined
}
type GeneratePciDescriptionResponse = {
  content?: string | undefined
  language?: string | undefined
  pciTemplateReferences?: string[] | undefined
}
type PciSigningRequest = { pciTemplateReferences: string[]; signedBy: string }
type PciSigningResponse = {
  pciQuestionnaireIds?: string[] | undefined
  signedBy?: string | undefined
}
type CalculatePciStatusRequest = {
  additionalSalesChannels?: ('eCommerce' | 'ecomMoto' | 'pos' | 'posMoto')[] | undefined
}
type CalculatePciStatusResponse = { signingRequired?: boolean | undefined }
type GetPciQuestionnaireResponse = {
  content?: string | undefined
  createdAt?: string | undefined
  id?: string | undefined
  validUntil?: string | undefined
}
type SetTaxElectronicDeliveryConsentRequest = { US1099k?: boolean | undefined }
type GetTermsOfServiceDocumentRequest = {
  language: string
  termsOfServiceDocumentFormat?: string | undefined
  type:
    | 'adyenAccount'
    | 'adyenCapital'
    | 'adyenCapitalCashAdvance'
    | 'adyenCard'
    | 'adyenChargeCard'
    | 'adyenForPlatformsAdvanced'
    | 'adyenForPlatformsManage'
    | 'adyenFranchisee'
    | 'adyenIssuing'
    | 'adyenPccr'
    | 'directDebit'
    | 'kycOnInvite'
}
type GetTermsOfServiceDocumentResponse = {
  document?: string | undefined
  id?: string | undefined
  language?: string | undefined
  termsOfServiceDocumentFormat?: string | undefined
  termsOfServiceDocumentId?: string | undefined
  type?:
    | 'adyenAccount'
    | 'adyenCapital'
    | 'adyenCapitalCashAdvance'
    | 'adyenCard'
    | 'adyenChargeCard'
    | 'adyenForPlatformsAdvanced'
    | 'adyenForPlatformsManage'
    | 'adyenFranchisee'
    | 'adyenIssuing'
    | 'adyenPccr'
    | 'directDebit'
    | 'kycOnInvite'
    | undefined
}
type AcceptTermsOfServiceRequest = { acceptedBy: string; ipAddress?: string | undefined }
type AcceptTermsOfServiceResponse = {
  acceptedBy?: string | undefined
  id?: string | undefined
  ipAddress?: string | undefined
  language?: string | undefined
  termsOfServiceDocumentId?: string | undefined
  type?:
    | 'adyenAccount'
    | 'adyenCapital'
    | 'adyenCapitalCashAdvance'
    | 'adyenCard'
    | 'adyenChargeCard'
    | 'adyenForPlatformsAdvanced'
    | 'adyenForPlatformsManage'
    | 'adyenFranchisee'
    | 'adyenIssuing'
    | 'adyenPccr'
    | 'directDebit'
    | 'kycOnInvite'
    | undefined
}
type TermsOfServiceAcceptanceInfo = {
  acceptedBy?: string | undefined
  acceptedFor?: string | undefined
  createdAt?: string | undefined
  id?: string | undefined
  type?:
    | 'adyenAccount'
    | 'adyenCapital'
    | 'adyenCapitalCashAdvance'
    | 'adyenCard'
    | 'adyenChargeCard'
    | 'adyenForPlatformsAdvanced'
    | 'adyenForPlatformsManage'
    | 'adyenFranchisee'
    | 'adyenIssuing'
    | 'adyenPccr'
    | 'directDebit'
    | 'kycOnInvite'
    | undefined
  validTo?: string | undefined
}
type GetTermsOfServiceAcceptanceInfosResponse = {
  data?: TermsOfServiceAcceptanceInfo[] | undefined
}
type CalculateTermsOfServiceStatusResponse = {
  termsOfServiceTypes?:
    | (
        | 'adyenAccount'
        | 'adyenCapital'
        | 'adyenCapitalCashAdvance'
        | 'adyenCard'
        | 'adyenChargeCard'
        | 'adyenForPlatformsAdvanced'
        | 'adyenForPlatformsManage'
        | 'adyenFranchisee'
        | 'adyenIssuing'
        | 'adyenPccr'
        | 'directDebit'
        | 'kycOnInvite'
      )[]
    | undefined
}
type OnboardingTheme = {
  createdAt: string
  description?: string | undefined
  id: string
  properties: { [x: string]: string }
  updatedAt?: string | undefined
}
type OnboardingThemes = {
  next?: string | undefined
  previous?: string | undefined
  themes: OnboardingTheme[]
}
type AULocalAccountIdentification = { accountNumber: string; bsbCode: string; type: 'auLocal' }
type CALocalAccountIdentification = {
  accountNumber: string
  accountType?: 'checking' | 'savings' | undefined
  institutionNumber: string
  transitNumber: string
  type: 'caLocal'
}
type CZLocalAccountIdentification = { accountNumber: string; bankCode: string; type: 'czLocal' }
type DKLocalAccountIdentification = { accountNumber: string; bankCode: string; type: 'dkLocal' }
type HKLocalAccountIdentification = { accountNumber: string; clearingCode: string; type: 'hkLocal' }
type HULocalAccountIdentification = { accountNumber: string; type: 'huLocal' }
type IbanAccountIdentification = { bic?: string | undefined; iban: string; type: 'iban' }
type NOLocalAccountIdentification = { accountNumber: string; type: 'noLocal' }
type NZLocalAccountIdentification = { accountNumber: string; type: 'nzLocal' }
type AdditionalBankIdentification = {
  code?: string | undefined
  type?: 'auBsbCode' | 'caRoutingNumber' | 'gbSortCode' | 'usRoutingNumber' | undefined
}
type NumberAndBicAccountIdentification = {
  accountNumber: string
  additionalBankIdentification?: AdditionalBankIdentification | undefined
  bic: string
  type: 'numberAndBic'
}
type PLLocalAccountIdentification = { accountNumber: string; type: 'plLocal' }
type SELocalAccountIdentification = {
  accountNumber: string
  clearingNumber: string
  type: 'seLocal'
}
type SGLocalAccountIdentification = {
  accountNumber: string
  bic: string
  type?: 'sgLocal' | undefined
}
type UKLocalAccountIdentification = { accountNumber: string; sortCode: string; type: 'ukLocal' }
type USLocalAccountIdentification = {
  accountNumber: string
  accountType?: 'checking' | 'savings' | undefined
  routingNumber: string
  type: 'usLocal'
}
type BankAccountInfo = {
  accountIdentification?:
    | AULocalAccountIdentification
    | CALocalAccountIdentification
    | CZLocalAccountIdentification
    | DKLocalAccountIdentification
    | HKLocalAccountIdentification
    | HULocalAccountIdentification
    | IbanAccountIdentification
    | NOLocalAccountIdentification
    | NZLocalAccountIdentification
    | NumberAndBicAccountIdentification
    | PLLocalAccountIdentification
    | SELocalAccountIdentification
    | SGLocalAccountIdentification
    | UKLocalAccountIdentification
    | USLocalAccountIdentification
    | undefined
  accountType?: string | undefined
  bankName?: string | undefined
  countryCode?: string | undefined
  trustedSource?: boolean | undefined
}
type TransferInstrumentInfo = {
  bankAccount: BankAccountInfo
  legalEntityId: string
  type: 'bankAccount' | 'recurringDetail'
}
type TransferInstrument = {
  bankAccount: BankAccountInfo
  capabilities?: { [x: string]: SupportingEntityCapability } | undefined
  documentDetails?: DocumentReference[] | undefined
  id: string
  legalEntityId: string
  problems?: CapabilityProblem[] | undefined
  type: 'bankAccount' | 'recurringDetail'
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/businessLines': {
      $post:
        | {
            input: { json: BusinessLineInfo }
            output: BusinessLine
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BusinessLineInfo }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BusinessLineInfo }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: BusinessLineInfo }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BusinessLineInfo }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: BusinessLineInfo }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/businessLines/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: BusinessLine
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: BusinessLineInfoUpdate }
            output: BusinessLine
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: BusinessLineInfoUpdate }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: BusinessLineInfoUpdate }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: BusinessLineInfoUpdate }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: BusinessLineInfoUpdate }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: BusinessLineInfoUpdate }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/documents': {
      $post:
        | {
            input: { header: { 'x-requested-verification-code'?: string | undefined } } & {
              json: Document
            }
            output: Document
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-requested-verification-code'?: string | undefined } } & {
              json: Document
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'x-requested-verification-code'?: string | undefined } } & {
              json: Document
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'x-requested-verification-code'?: string | undefined } } & {
              json: Document
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'x-requested-verification-code'?: string | undefined } } & {
              json: Document
            }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'x-requested-verification-code'?: string | undefined } } & {
              json: Document
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/documents/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { skipContent?: boolean | undefined } }
            output: Document
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { skipContent?: boolean | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { skipContent?: boolean | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { skipContent?: boolean | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { skipContent?: boolean | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { skipContent?: boolean | undefined } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              header: { 'x-requested-verification-code'?: string | undefined }
            } & { json: Document }
            output: Document
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'x-requested-verification-code'?: string | undefined }
            } & { json: Document }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: { 'x-requested-verification-code'?: string | undefined }
            } & { json: Document }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'x-requested-verification-code'?: string | undefined }
            } & { json: Document }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'x-requested-verification-code'?: string | undefined }
            } & { json: Document }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              header: { 'x-requested-verification-code'?: string | undefined }
            } & { json: Document }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/legalEntities': {
      $post:
        | {
            input: { header: { 'x-requested-verification-code'?: string | undefined } } & {
              json: LegalEntityInfoRequiredType
            }
            output: LegalEntity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-requested-verification-code'?: string | undefined } } & {
              json: LegalEntityInfoRequiredType
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'x-requested-verification-code'?: string | undefined } } & {
              json: LegalEntityInfoRequiredType
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'x-requested-verification-code'?: string | undefined } } & {
              json: LegalEntityInfoRequiredType
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'x-requested-verification-code'?: string | undefined } } & {
              json: LegalEntityInfoRequiredType
            }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'x-requested-verification-code'?: string | undefined } } & {
              json: LegalEntityInfoRequiredType
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/legalEntities/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: LegalEntity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              header: { 'x-requested-verification-code'?: string | undefined }
            } & { json: LegalEntityInfo }
            output: LegalEntity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'x-requested-verification-code'?: string | undefined }
            } & { json: LegalEntityInfo }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: { 'x-requested-verification-code'?: string | undefined }
            } & { json: LegalEntityInfo }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'x-requested-verification-code'?: string | undefined }
            } & { json: LegalEntityInfo }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'x-requested-verification-code'?: string | undefined }
            } & { json: LegalEntityInfo }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              header: { 'x-requested-verification-code'?: string | undefined }
            } & { json: LegalEntityInfo }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/legalEntities/:id/acceptedTermsOfServiceDocument/:termsofserviceacceptancereference': {
      $get:
        | {
            input: { param: { id: string; termsofserviceacceptancereference: string } } & {
              query: { termsOfServiceDocumentFormat?: string | undefined }
            }
            output: GetAcceptedTermsOfServiceDocumentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; termsofserviceacceptancereference: string } } & {
              query: { termsOfServiceDocumentFormat?: string | undefined }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; termsofserviceacceptancereference: string } } & {
              query: { termsOfServiceDocumentFormat?: string | undefined }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; termsofserviceacceptancereference: string } } & {
              query: { termsOfServiceDocumentFormat?: string | undefined }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; termsofserviceacceptancereference: string } } & {
              query: { termsOfServiceDocumentFormat?: string | undefined }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; termsofserviceacceptancereference: string } } & {
              query: { termsOfServiceDocumentFormat?: string | undefined }
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/legalEntities/:id/businessLines': {
      $get:
        | {
            input: { param: { id: string } }
            output: BusinessLines
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/legalEntities/:id/checkTaxElectronicDeliveryConsent': {
      $post:
        | {
            input: { param: { id: string } }
            output: CheckTaxElectronicDeliveryConsentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/legalEntities/:id/checkVerificationErrors': {
      $post:
        | {
            input: { param: { id: string } }
            output: VerificationErrors
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/legalEntities/:id/confirmDataReview': {
      $post:
        | {
            input: { param: { id: string } }
            output: DataReviewConfirmationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/legalEntities/:id/onboardingLinks': {
      $post:
        | {
            input: { param: { id: string } } & { json: OnboardingLinkInfo }
            output: OnboardingLink
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: OnboardingLinkInfo }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: OnboardingLinkInfo }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: OnboardingLinkInfo }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: OnboardingLinkInfo }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: OnboardingLinkInfo }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/legalEntities/:id/pciQuestionnaires': {
      $get:
        | {
            input: { param: { id: string } }
            output: GetPciQuestionnaireInfosResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/legalEntities/:id/pciQuestionnaires/generatePciTemplates': {
      $post:
        | {
            input: { param: { id: string } } & { json: GeneratePciDescriptionRequest }
            output: GeneratePciDescriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: GeneratePciDescriptionRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: GeneratePciDescriptionRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: GeneratePciDescriptionRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: GeneratePciDescriptionRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: GeneratePciDescriptionRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/legalEntities/:id/pciQuestionnaires/signPciTemplates': {
      $post:
        | {
            input: { param: { id: string } } & { json: PciSigningRequest }
            output: PciSigningResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: PciSigningRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: PciSigningRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: PciSigningRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: PciSigningRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: PciSigningRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/legalEntities/:id/pciQuestionnaires/signingRequired': {
      $post:
        | {
            input: { param: { id: string } } & { json: CalculatePciStatusRequest }
            output: CalculatePciStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: CalculatePciStatusRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: CalculatePciStatusRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: CalculatePciStatusRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: CalculatePciStatusRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: CalculatePciStatusRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/legalEntities/:id/pciQuestionnaires/:pciid': {
      $get:
        | {
            input: { param: { id: string; pciid: string } }
            output: GetPciQuestionnaireResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; pciid: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; pciid: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; pciid: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; pciid: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; pciid: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/legalEntities/:id/setTaxElectronicDeliveryConsent': {
      $post:
        | {
            input: { param: { id: string } } & { json: SetTaxElectronicDeliveryConsentRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: SetTaxElectronicDeliveryConsentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: SetTaxElectronicDeliveryConsentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: SetTaxElectronicDeliveryConsentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: SetTaxElectronicDeliveryConsentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: SetTaxElectronicDeliveryConsentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/legalEntities/:id/termsOfService': {
      $post:
        | {
            input: { param: { id: string } } & { json: GetTermsOfServiceDocumentRequest }
            output: GetTermsOfServiceDocumentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: GetTermsOfServiceDocumentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: GetTermsOfServiceDocumentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: GetTermsOfServiceDocumentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: GetTermsOfServiceDocumentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: GetTermsOfServiceDocumentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/legalEntities/:id/termsOfService/:termsofservicedocumentid': {
      $patch:
        | {
            input: { param: { id: string; termsofservicedocumentid: string } } & {
              json: AcceptTermsOfServiceRequest
            }
            output: AcceptTermsOfServiceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; termsofservicedocumentid: string } } & {
              json: AcceptTermsOfServiceRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; termsofservicedocumentid: string } } & {
              json: AcceptTermsOfServiceRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; termsofservicedocumentid: string } } & {
              json: AcceptTermsOfServiceRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; termsofservicedocumentid: string } } & {
              json: AcceptTermsOfServiceRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; termsofservicedocumentid: string } } & {
              json: AcceptTermsOfServiceRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/legalEntities/:id/termsOfServiceAcceptanceInfos': {
      $get:
        | {
            input: { param: { id: string } }
            output: GetTermsOfServiceAcceptanceInfosResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/legalEntities/:id/termsOfServiceStatus': {
      $get:
        | {
            input: { param: { id: string } }
            output: CalculateTermsOfServiceStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/themes': {
      $get:
        | { input: {}; output: OnboardingThemes; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ServiceError; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ServiceError; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ServiceError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ServiceError; outputFormat: 'json'; status: 422 }
        | { input: {}; output: ServiceError; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/themes/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: OnboardingTheme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/transferInstruments': {
      $post:
        | {
            input: { header: { 'x-requested-verification-code'?: string | undefined } } & {
              json: TransferInstrumentInfo
            }
            output: TransferInstrument
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-requested-verification-code'?: string | undefined } } & {
              json: TransferInstrumentInfo
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'x-requested-verification-code'?: string | undefined } } & {
              json: TransferInstrumentInfo
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'x-requested-verification-code'?: string | undefined } } & {
              json: TransferInstrumentInfo
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'x-requested-verification-code'?: string | undefined } } & {
              json: TransferInstrumentInfo
            }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'x-requested-verification-code'?: string | undefined } } & {
              json: TransferInstrumentInfo
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/transferInstruments/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: TransferInstrument
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              header: { 'x-requested-verification-code'?: string | undefined }
            } & { json: TransferInstrumentInfo }
            output: TransferInstrument
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'x-requested-verification-code'?: string | undefined }
            } & { json: TransferInstrumentInfo }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: { 'x-requested-verification-code'?: string | undefined }
            } & { json: TransferInstrumentInfo }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'x-requested-verification-code'?: string | undefined }
            } & { json: TransferInstrumentInfo }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'x-requested-verification-code'?: string | undefined }
            } & { json: TransferInstrumentInfo }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              header: { 'x-requested-verification-code'?: string | undefined }
            } & { json: TransferInstrumentInfo }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/legalEntities/:id/requestPeriodicReview': {
      $post: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
    }
  },
  '/'
>
export default routes
