type Address = {
  street1?: string | undefined
  street2?: string | undefined
  city?: string | undefined
  state?: string | undefined
  country?: string | undefined
  postalCode?: string | undefined
}
type PhoneInfo = {
  type?:
    | 'Work'
    | 'Home'
    | 'Fax'
    | 'Mobile'
    | 'Mobile (work)'
    | 'Mobile (other)'
    | 'Business'
    | 'Other (voice)'
    | undefined
  number?: string | undefined
  country?: string | undefined
  verified?: boolean | undefined
}
type OrganizationIdentification = {
  placeOfBusinessAddress?: Address | undefined
  mailingAddress?: Address | undefined
  phones?: PhoneInfo[] | undefined
  name?: string | undefined
  businessDescription?: string | undefined
  websiteAddress?: string | undefined
  identification?: string | undefined
  identificationCountry?: string | undefined
  formationCountry?: string | undefined
  formationState?: string | undefined
  sameMailAddress?: boolean | undefined
  translated?: boolean | undefined
}
type PrimaryContributorType = {
  firstName?: string | undefined
  middleInitial?: string | undefined
  lastName?: string | undefined
  suffix?: 'Jr.' | 'Sr.' | 'I' | 'II' | 'III' | 'IV' | 'V' | undefined
  employer?: string | undefined
  occupation?: string | undefined
  address?: Address | undefined
  sourceOfFunds?: string | undefined
}
type AdministratorType = {
  firstName?: string | undefined
  middleInitial?: string | undefined
  lastName?: string | undefined
  suffix?: 'Jr.' | 'Sr.' | 'I' | 'II' | 'III' | 'IV' | 'V' | undefined
  address?: Address | undefined
}
type AdministratorContactPersonType = {
  firstName?: string | undefined
  middleInitial?: string | undefined
  lastName?: string | undefined
  suffix?: 'Jr.' | 'Sr.' | 'I' | 'II' | 'III' | 'IV' | 'V' | undefined
  phoneNumber?: string | undefined
}
type AccountSupportType = {
  businessDescription?: string | undefined
  primaryContributor?: PrimaryContributorType | undefined
  administrator?: AdministratorType | undefined
  administratorContactPerson?: AdministratorContactPersonType | undefined
  ownersResideUS?: boolean | undefined
  solicitOwnersResideUS?: boolean | undefined
  acceptOwnersResideUS?: boolean | undefined
  type?:
    | 'FINANCIALINSTITUTION'
    | 'PROPRIETARYTRADING'
    | 'FAMILYINVVEHICLE'
    | 'OPERATINGBUSINESS'
    | 'BROKERDEALER'
    | 'LICENSEDADVISOR'
    | undefined
}
type AssetExperience = {
  assetClass?:
    | 'BILL'
    | 'BOND'
    | 'CASH'
    | 'CFD'
    | 'COMB'
    | 'FOP'
    | 'FUND'
    | 'FUT'
    | 'OPT'
    | 'SSF'
    | 'STK'
    | 'WAR'
    | 'MRGN'
    | 'CLP'
    | undefined
  yearsTrading?: bigint | undefined
  tradesPerYear?: bigint | undefined
  knowledgeLevel?: 'Extensive' | 'Good' | 'Limited' | 'None' | undefined
}
type SourceOfIncomeType = {
  sourceType?:
    | 'CONSULTING'
    | 'DISABILITY'
    | 'INHERITANCE'
    | 'INTEREST'
    | 'REALESTATE'
    | 'RENTAL'
    | 'SEVERANCE'
    | 'SPOUSE'
    | 'TRADINGANDINVESTMENTS'
    | 'PENSIONANDSOCIALSECURITY'
    | 'UNEMPLOYMENT'
    | 'OTHER'
    | undefined
  percentage?: bigint | undefined
  description?: string | undefined
}
type SourceOfWealthType = {
  sourceType?:
    | 'SOW-IND-Allowance'
    | 'SOW-IND-Disability'
    | 'SOW-IND-Income'
    | 'SOW-IND-Inheritance'
    | 'SOW-IND-Interest'
    | 'SOW-IND-MarketProfit'
    | 'SOW-IND-Other'
    | 'SOW-IND-Pension'
    | 'SOW-IND-Property'
    | 'SOW-ORG-Business'
    | 'SOW-ORG-MarketTradingProfits'
    | 'SOW-ORG-Other'
    | 'SOW-ORG-OwnerEquity'
    | 'SOW-ORG-Property'
    | 'SOW-ORG-RetainedEarnings'
    | undefined
  percentage?: bigint | undefined
  usedForFunds?: boolean | undefined
  description?: string | undefined
}
type SOIQuestionnaire = { details?: string | undefined }
type QuestionnaireType = { formNumber?: bigint | undefined; detail?: string | undefined }
type FinancialInformation = {
  investmentExperience?: AssetExperience[] | undefined
  investmentObjectives?:
    | ('Trading' | 'Growth' | 'Speculation' | 'Hedging' | 'Preservation' | 'Income')[]
    | undefined
  additionalSourcesOfIncome?: SourceOfIncomeType[] | undefined
  sourcesOfWealth?: SourceOfWealthType[] | undefined
  soiQuestionnaire?: SOIQuestionnaire | undefined
  questionnaires?: QuestionnaireType[] | undefined
  netWorth?: number | undefined
  liquidNetWorth?: number | undefined
  annualNetIncome?: number | undefined
  totalAssets?: number | undefined
  sourceOfFunds?: string | undefined
  translated?: boolean | undefined
}
type AccreditedInvestorInformation = {
  q1?: boolean | undefined
  q2?: boolean | undefined
  q3?: boolean | undefined
  q4?: boolean | undefined
  q5?: boolean | undefined
}
type RegulatoryDetail = {
  code?:
    | 'CRIMINAL'
    | 'AFFILIATION'
    | 'CFTCREGISTERED'
    | 'IBACCOUNTS'
    | 'REGULATORYCONTROL'
    | 'EmployeePubTrade'
    | 'ControlPubTraded'
    | 'BROKERDEALER'
    | 'EXCHANGEMEMBERSHIP'
    | 'STOCKCONTROL'
    | 'DISPUTE'
    | 'INVESTIGATION'
    | 'MEMBERSHIP'
    | 'AUSEXPOSURE'
    | 'CONTROLLER'
    | 'POLITICALMILITARYDIPLOMATIC'
    | 'FOREIGN_BANK'
    | 'BROKER_DEALER'
    | 'FUTURES_COMMISSION_MERCHANT'
    | 'MUTUAL_FUND'
    | 'FOREIGN_EXCHANGE'
    | 'MONEY_TRANSMITTER'
    | 'EMPLOYEE_BENEFIT_PLAN'
    | 'US_BANK'
    | 'US_SWAP_DEALER'
    | 'US_SWAP_PARTICIPANT'
    | 'US_INSURANCE_COMPANY'
    | 'NON_US_INSURANCE_COMPANY'
    | 'US_DEPT'
    | 'FINANCIAL_ADVISOR'
    | 'HIGH_RISK_CONTRIBUTION'
    | undefined
  status?: boolean | undefined
  details?: string | undefined
  detail?: string | undefined
  externalIndividualId?: string | undefined
}
type SelfRegulatedMembershipType = {
  exchanges?: string | undefined
  organizations?: string | undefined
}
type AffiliationDetailsType = {
  affiliationRelationship?: 'Self' | 'Spouse' | 'Parent' | 'Child' | 'Other' | undefined
  personName?: string | undefined
  companyId?: bigint | undefined
  company?: string | undefined
  companyMailingAddress?: Address | undefined
  companyPhone?: string | undefined
  companyEmailAddress?: string | undefined
  duplicateStmtRequired?: boolean | undefined
}
type PublicCompanyInfoType = {
  exchangeTradedOn?: string | undefined
  quotedSymbol?: string | undefined
}
type ORGRegulatorType = {
  regulatorName?: string | undefined
  regulatorCountry?: string | undefined
  regulatedInCapacity?: string | undefined
  regulatorId?: string | undefined
}
type ORGRegulatoryInfoType = {
  publicCompanyInfo?: PublicCompanyInfoType | undefined
  orgRegulators?: ORGRegulatorType[] | undefined
  regulated?: boolean | undefined
  public?: boolean | undefined
}
type AUSExposureDetailsType = {
  ausExposureRelationship?: string | undefined
  personName?: string | undefined
  licenseNumber?: bigint | undefined
}
type PoliticalMilitaryDiplomaticDetailsType = {
  personName?: string | undefined
  title?: string | undefined
  organization?: string | undefined
  country?: string | undefined
}
type RegulatoryInformation = {
  regulatoryDetails?: RegulatoryDetail[] | undefined
  regulatoryDetail?: RegulatoryDetail[] | undefined
  selfRegulatedMembership?: SelfRegulatedMembershipType | undefined
  affiliationDetails?: AffiliationDetailsType | undefined
  financialOrgTypes?: string[] | undefined
  orgRegulatoryInfo?: ORGRegulatoryInfoType | undefined
  ausExposureDetails?: AUSExposureDetailsType | undefined
  controllerExchangeCode?: string | undefined
  politicalMilitaryDiplomaticDetails?: PoliticalMilitaryDiplomaticDetailsType | undefined
  translated?: boolean | undefined
}
type ManagingOwner = { externalId?: string | undefined; is25PercentOwner?: boolean | undefined }
type IndividualName = {
  salutation?: 'Mr.' | 'Mrs.' | 'Ms.' | 'Dr.' | 'Mx.' | 'Ind.' | undefined
  first?: string | undefined
  last?: string | undefined
  middle?: string | undefined
  suffix?: 'Jr.' | 'Sr.' | 'I' | 'II' | 'III' | 'IV' | 'V' | undefined
  title?: string | undefined
}
type ResidenceAddress = {
  street1?: string | undefined
  street2?: string | undefined
  city?: string | undefined
  state?: string | undefined
  country?: string | undefined
  postalCode?: string | undefined
}
type IdentityDocument = {
  issuingCountry: string
  docType:
    | 'DRIVERS_LICENSE'
    | 'PROOF_OF_AGE'
    | 'NATIONAL_ID'
    | 'PASSPORT'
    | 'ALIEN_ID'
    | 'MEDICARE_CARD'
  docId: string
  docId2?: string | undefined
  expirationDate?: string | undefined
}
type Identification = {
  citizenship?: string | undefined
  citizenship2?: string | undefined
  citizenship3?: string | undefined
  ssn?: string | undefined
  sin?: string | undefined
  driversLicense?: string | undefined
  passport?: string | undefined
  alienCard?: string | undefined
  hkTravelPermit?: string | undefined
  medicareCard?: string | undefined
  cardColor?: 'BLUE' | 'GREEN' | 'YELLOW' | undefined
  medicareReference?: string | undefined
  nationalCard?: string | undefined
  issuingCountry?: string | undefined
  issuingState?: string | undefined
  rta?: string | undefined
  legalResidenceCountry?: string | undefined
  legalResidenceState?: string | undefined
  educationalQualification?: string | undefined
  fathersName?: string | undefined
  greenCard?: boolean | undefined
  panNumber?: string | undefined
  taxId?: string | undefined
  proofOfAgeCard?: string | undefined
  expire?: boolean | undefined
  expirationDate?: string | undefined
  identityDocuments?: IdentityDocument[] | undefined
}
type EmploymentDetails = {
  employer?: string | undefined
  occupation?: string | undefined
  description?: string | undefined
  employerBusiness?: string | undefined
  employerAddress?: Address | undefined
  employerPhone?: string | undefined
  emplCountryResCountryDetails?: string | undefined
  businessDescription?: string | undefined
}
type TaxResidency = {
  country?: string | undefined
  tin?: string | undefined
  tinType?: 'SSN' | 'EIN' | 'NonUS_NationalId' | undefined
}
type LocalTaxForm = {
  taxAuthority?: 'ISRAEL_TA' | 'CANADA_TA' | 'RUSSIA_TA' | 'SWEDEN_TA' | 'AUSTRALIA_TA' | undefined
  qualified?: boolean | undefined
  treatyCountry?: string | undefined
}
type FormW9 = {
  localTaxForms?: LocalTaxForm[] | undefined
  name?: string | undefined
  businessName?: string | undefined
  customerType?: 'Individual' | 'Corporation' | 'Partnership' | 'LLC' | 'Other' | undefined
  taxClassification?: string | undefined
  otherCustomerType?: string | undefined
  tin?: string | undefined
  tinType?: 'SSN' | 'EIN' | 'NonUS_NationalId' | undefined
  cert1?: boolean | undefined
  cert2?: boolean | undefined
  cert3?: boolean | undefined
  cert4?: boolean | undefined
  signatureType?: 'Electronic' | 'Physical' | undefined
  blankForm?: boolean | undefined
  taxFormFile?: string | undefined
  proprietaryFormNumber?: bigint | undefined
}
type FormW8BEN = {
  localTaxForms?: LocalTaxForm[] | undefined
  name?: string | undefined
  tin?: string | undefined
  foreignTaxId?: string | undefined
  tinOrExplanationRequired?: boolean | undefined
  explanation?: 'US_TIN' | 'TIN_NOT_DISCLOSED' | 'TIN_NOT_REQUIRED' | 'TIN_NOT_ISSUED' | undefined
  referenceNumber?: bigint | undefined
  part29ACountry?: string | undefined
  cert?: boolean | undefined
  signatureType?: 'Electronic' | 'Physical' | undefined
  blankForm?: boolean | undefined
  taxFormFile?: string | undefined
  proprietaryFormNumber?: bigint | undefined
  electronicFormat?: boolean | undefined
  submitDate?: string | undefined
}
type FormCRS = {
  controllingPersonDesignation?:
    | 'SENIOR_MGMT_OFFICER'
    | 'BY_OWNERSHIP'
    | 'BY_OTHER_MEANS'
    | undefined
  oecdStatus?:
    | 'DEPOSITORY_INSTITUTION'
    | 'CUSTODIAL_INSTITUTION'
    | 'SPECIFIED_INSURANCE_COMPANY'
    | 'INVESTMENT_ENTITY_IN_NONPARTICIPATING_JURISDICTION'
    | 'INVESTMENT_ENTITY_NOT_LISTED'
    | 'PUBLICLY_TRADED_CORPORATION_OR_AFFILIATE'
    | 'OTHER_ACTIVE_NON_FINANCIAL_ENTITY'
    | 'PASSIVE_NON_FINANCIAL_ENTITY'
    | 'EXEMPT_RETIREMENT_PLAN'
    | 'NON_REPORTING_FI'
    | 'OTHER_INVESTMENT_ENTITY'
    | 'FINANCIAL_INSTITUTION'
    | 'NON_REPORTING_FINANCIAL_INSTITUTION'
    | undefined
}
type ProhibitedQuestionnaireDetail = {
  code?:
    | 'PASSPORT'
    | 'CITIZENSHIP'
    | 'BUSINESSDEALINGS'
    | 'FINANCIALACCOUNTS'
    | 'RESIDENT'
    | 'MULTI'
    | 'BIRTH'
    | undefined
  status?: boolean | undefined
  details?: string | undefined
}
type ProhibitedCountryQuestionnaireList = {
  prohibitedQuestionnaireDetail?: ProhibitedQuestionnaireDetail[] | undefined
  accountId?: string | undefined
  externalId?: string | undefined
  entityId?: string | undefined
}
type Title = {
  value?: string | undefined
  code?:
    | 'Account Holder'
    | 'FIRST HOLDER'
    | 'SECOND HOLDER'
    | 'TRADER'
    | 'CEO'
    | 'SECRETARY'
    | 'TREASURER'
    | 'OWNER'
    | 'PRINCIPAL'
    | 'SHAREHOLDER'
    | 'TRUSTEE'
    | 'BENEFICIARY'
    | 'GRANTOR'
    | 'Employee'
    | 'CONTINGENT'
    | 'IRA_BENEFICIARY'
    | 'IRA DECEDENT'
    | 'COMP_OFFICER'
    | 'Other Officer'
    | 'Controlling Officer'
    | 'SIGNATORY'
    | 'NON-EMPLOYEE'
    | 'CUSTODIAN'
    | 'SUCCESSOR_CUSTODIAN'
    | 'DIRECTOR'
    | 'PARTNER'
    | 'CUSTODIAN EMPLOYEE'
    | 'SUCCESSOR CUSTODIAN EMPLOYEE'
    | 'SPOUSE'
    | 'Successor Holder'
    | 'Registered Contact'
    | undefined
}
type AssociatedIndividual = {
  name?: IndividualName | undefined
  nativeName?: IndividualName | undefined
  birthName?: IndividualName | undefined
  motherMaidenName?: IndividualName | undefined
  dateOfBirth?: string | undefined
  countryOfBirth?: string | undefined
  cityOfBirth?: string | undefined
  gender?: 'M' | 'F' | 'Male' | 'Female' | undefined
  maritalStatus?: 'S' | 'M' | 'W' | 'D' | 'C' | undefined
  numDependents?: bigint | undefined
  residenceAddress?: ResidenceAddress | undefined
  mailingAddress?: Address | undefined
  phones?: PhoneInfo[] | undefined
  email?: string | undefined
  identification?: Identification | undefined
  employmentType?: string | undefined
  employmentDetails?: EmploymentDetails | undefined
  employeeTitle?: string | undefined
  taxResidencies?: TaxResidency[] | undefined
  w9?: FormW9 | undefined
  w8Ben?: FormW8BEN | undefined
  crs?: FormCRS | undefined
  prohibitedCountryQuestionnaire?: ProhibitedCountryQuestionnaireList | undefined
  id?: string | undefined
  externalId?: string | undefined
  userId?: string | undefined
  sameMailAddress?: boolean | undefined
  authorizedToSignOnBehalfOfOwner?: boolean | undefined
  authorizedTrader?: boolean | undefined
  usTaxResident?: boolean | undefined
  translated?: boolean | undefined
  primaryTrustee?: boolean | undefined
  ownerType?: 'INDIVIDUAL' | 'LEGAL_ENTITY' | 'TRUST' | undefined
  ownershipPercentage?: number | undefined
  titles?: Title[] | undefined
  authorizedPerson?: boolean | undefined
  referenceUsername?: string | undefined
}
type AssociatedPerson = {
  entityId?: bigint | undefined
  externalCode?: string | undefined
  firstName?: string | undefined
  middleName?: string | undefined
  middleInitial?: string | undefined
  lastName?: string | undefined
  suffix?: string | undefined
  username?: string | undefined
  passwordDate?: string | undefined
  userStatus?: string | undefined
  userStatusTrading?: string | undefined
  lastLogin?: string | undefined
  gender?: string | undefined
  maritalStatus?: string | undefined
  salutation?: string | undefined
  ownershipPercentage?: number | undefined
  email?: string | undefined
  countryOfCitizenship?: string | undefined
  countryOfBirth?: string | undefined
  dateOfBirth?: string | undefined
  motersMaidenName?: string | undefined
  numberOfDependents?: bigint | undefined
  securityDevice?: string | undefined
  commercial?: string | undefined
  countryOfLegalResidence?: string | undefined
  stateOfLegalResidence?: string | undefined
  mdSubscriberStatus?: string | undefined
  phones?: { [x: string]: string } | undefined
  residence?: { [x: string]: string } | undefined
  mailing?: { [x: string]: string } | undefined
  associations?: string[] | undefined
  identityDocuments?: { [x: string]: string }[] | undefined
  employmentType?: string | undefined
  employmentDetails?: { [x: string]: { [x: string]: unknown } } | undefined
  subscribedServices?: { [x: string]: { [x: string]: unknown } }[] | undefined
  taxTreatyDetails?: { [x: string]: string }[] | undefined
}
type AssociatedEntity = {
  entityId?: bigint | undefined
  externalCode?: string | undefined
  name?: string | undefined
  email?: string | undefined
  organizationCountry?: string | undefined
  phones?: { [x: string]: string } | undefined
  residence?: { [x: string]: string } | undefined
  mailing?: { [x: string]: string } | undefined
  associations?: string[] | undefined
  identityDocuments?: { [x: string]: string }[] | undefined
  taxTreatyDetails?: { [x: string]: string }[] | undefined
  AssociatedPersons?: AssociatedPerson[] | undefined
}
type AssociatedEntities = {
  associatedIndividuals?: AssociatedIndividual[] | undefined
  associatedEntities?: AssociatedEntity[] | undefined
}
type RegulatedMembership = {
  organizationCode?: string | undefined
  membershipId?: string | undefined
}
type FormW8BENE = {
  substantialUsOwnerExternalIds?: string[] | undefined
  name?: string | undefined
  countryOfOrganization?: string | undefined
  disregardedEntityName?: string | undefined
  entityType?:
    | 'CORPORATION'
    | 'DISREGARDED_ENTITY'
    | 'PARTNERSHIP'
    | 'SIMPLE_TRUST'
    | 'GRANTOR_TRUST'
    | 'COMPLEX_TRUST'
    | 'ESTATE'
    | 'GOVERNMENT'
    | 'CENTRAL_BANK_OF_ISSUE'
    | 'TAX_EXEMPT_ORGANIZATION'
    | 'PRIVATE_FOUNDATION'
    | undefined
  fatcaStatus?:
    | 'NONPARTICIPATING_FFI'
    | 'PARICIPATING_FFI'
    | 'REPORTING_MODEL_1_FFI'
    | 'REPORTING_MODEL_2_FFI'
    | 'REGISTERED_DEEMED_COMPLIANT_FFI'
    | 'SPONSORED_FFI'
    | 'CERTIFIED_DEEMED_COMPLIANT_NONREGISTERING_LOCAL_BANK'
    | 'CERTIFIED_DEEMED_COMPLIANT_FFI'
    | 'CERTIFIED_DEEMED_COMPLIANT_SPONSORED_VEHICLE'
    | 'CERTIFIED_DEEMED_COMPLIANT_LIMITED_LIFE_DEBT'
    | 'CERTIFIED_DEEMED_COMPLIANT_INVESTMENT_ADVISORS'
    | 'OWNER_DOCUMENTED_FFI'
    | 'RESTRICTED_DISTRIBUTOR'
    | 'NONREPORTING_IGA_FFI'
    | 'FOREIGN_GOVERNMENT'
    | 'INTERNATIONAL_ORGANIZATION'
    | 'EXEMPT_RETIREMENT_PLANS'
    | 'ENTITY_OWNED_BY_EXEMPT_BENEFICIAL_OWNERS'
    | 'TERRITORY_FINANCIAL_INSTITUTION'
    | 'NONFINANCIAL_GROUP'
    | 'EXCEPTED_NONFINANCIAL_STARTUP'
    | 'EXCEPTED_NONFINANCIAL_ENTITY'
    | 'AN_501_C_ORGANIZATION'
    | 'NONPROFIT_ORGANIZATION'
    | 'PUBLICLY_TRADED_NFFE'
    | 'EXCEPTED_TERRITORY_NFFE'
    | 'ACTIVE_NFFE'
    | 'PASSIVE_NFFE'
    | 'EXCEPTED_INTER_AFFILIATE_FFI'
    | 'DIRECT_REPORTING_NFFE'
    | 'SPONSORED_DIRECT_REPORTING_NFFE'
    | undefined
  usTin?: string | undefined
  giin?: string | undefined
  foreignTin?: string | undefined
  tinOrExplanationRequired?: boolean | undefined
  explanation?: 'US_TIN' | 'TIN_NOT_DISCLOSED' | 'TIN_NOT_REQUIRED' | 'TIN_NOT_ISSUED' | undefined
  referenceNumber?: bigint | undefined
  submitDate?: string | undefined
  box11Status?:
    | 'LIMITED_BRANCH'
    | 'US_BRANCH'
    | 'PARTICIPATING_FFI'
    | 'REPORTING_MODEL_1_FFI'
    | 'REPORTING_MODEL_2_FFI'
    | undefined
  part314A?: boolean | undefined
  part314ACountry?: string | undefined
  part314B?:
    | 'CompanyMeetsOwnershipAndBaseErosionTest'
    | 'TaxExemptPensionTrustOrPensionFund'
    | 'CompanyMeetsDerivativeBenefitsTest'
    | 'TaxExemptOrganization'
    | 'CompanyWithIncomeActiveBusiness'
    | 'PubliclyTradedCorporation'
    | 'FavorableDiscretionaryDetermination'
    | 'SubsidiaryOfAPubliclyTradedCorporation'
    | 'Government'
    | 'NoLobArticleInTreaty'
    | 'Other'
    | undefined
  part314C?: boolean | undefined
  part416?: string | undefined
  part417I?: boolean | undefined
  part417Ii?: boolean | undefined
  part518?: boolean | undefined
  part619?: boolean | undefined
  part720?: string | undefined
  part721?: boolean | undefined
  part822?: boolean | undefined
  part923?: boolean | undefined
  part1024A?: boolean | undefined
  part1024B?: boolean | undefined
  part1024C?: boolean | undefined
  part1024D?: boolean | undefined
  part1125A?: boolean | undefined
  part1125B?: boolean | undefined
  part1125C?: boolean | undefined
  part1226?: boolean | undefined
  part1226Desc1?: string | undefined
  part1226Desc2?: string | undefined
  part1226Desc3?:
    | 'CollectiveInvestmentVehicle'
    | 'ExemptBeneficialOwner-RetirementPlan'
    | 'FinancialInstitutionwithlocalClientBase'
    | 'InvestmentAdvisorsandManagers'
    | 'LocalBank'
    | 'SponsoredCloselyHeldInvestmentVehicle'
    | 'SponsoredInvestmentEntity'
    | 'TrusteeDocumentedTrust'
    | undefined
  part1226Desc4?: string | undefined
  part1327?: boolean | undefined
  part1428A?: boolean | undefined
  part1428B?: boolean | undefined
  part1529A?: boolean | undefined
  part1529B?: boolean | undefined
  part1529C?: boolean | undefined
  part1529D?: boolean | undefined
  part1529E?: boolean | undefined
  part1529F?: boolean | undefined
  part1630?: boolean | undefined
  part1731?: boolean | undefined
  part1832?: boolean | undefined
  part1933?: boolean | undefined
  part2034?: boolean | undefined
  part2135?: boolean | undefined
  part2135Date?: string | undefined
  part2236?: boolean | undefined
  part2337A?: boolean | undefined
  part2337ADesc?: string | undefined
  part2337B?: boolean | undefined
  part2337BDesc1?: string | undefined
  part2337BDesc2?: string | undefined
  part2438?: boolean | undefined
  part2539?: boolean | undefined
  part2640A?: boolean | undefined
  part2640B?: boolean | undefined
  part2640C?: boolean | undefined
  part2741?: boolean | undefined
  part2842?: string | undefined
  part2843?: boolean | undefined
  cert?: boolean | undefined
  signatureType?: 'Electronic' | 'Physical' | undefined
  blankForm?: boolean | undefined
  taxFormFile?: string | undefined
  proprietaryFormNumber?: bigint | undefined
  electronicFormat?: boolean | undefined
}
type FormW8IMY = {
  name?: string | undefined
  countryOfIncorporation?: string | undefined
  disregardedEntityName?: string | undefined
  entityType?:
    | 'QUALIFIED_INTERMEDIARY'
    | 'NONQUALIFIED_INTERMEDIARY'
    | 'TERRITORY_FINANCIAL'
    | 'US_BRANCH'
    | 'WITHHOLDING_FOREIGN_PARTNERSHIP'
    | 'WITHHOLDING_FOREIGN_TRUST'
    | 'NONWITHHOLDING_FOREIGN_PARTNERSHIP'
    | 'NONWITHHOLDING_FOREIGN_SIMPLE_TRUST'
    | 'NONWITHHOLDING_FOREIGN_GRANTOR_TRUST'
    | undefined
  fatcaStatus?:
    | 'NONPARTICIPATING_FFI'
    | 'PARTICIPATING_FFI'
    | 'REPORTING_MODEL1_FFI'
    | 'REPORTING_MODEL2_FFI'
    | 'REGISTERED_DEEMED_COMPLAINT'
    | 'TERRITORY_FINANCIAL_INSTITUTION'
    | 'SPONSORED_FFI'
    | 'CERTIFIED_DEEMED_COMPLAINT_FFI'
    | 'CERTIFIED_DEEMED_COMPLAINT_SPONSORED'
    | 'CERTIFIED_DEEMED_COMPLAINT_LIMITED_LIFE_DEBT'
    | 'OWNER_DOCUMENTED_FFI'
    | 'RESTRICTED_DISTRIBUTOR'
    | 'FOREIGN_CENTRAL_BANK_ISSUE'
    | 'NONREPORTING_IGA_FFO'
    | 'EXEMPT_RETIREMENT_PLAN'
    | 'EXCEPTED_NONFINANCIAL_GROUP_ENTITY'
    | 'EXCEPTED_NONFINANCIAL_STARTUP_COMPANY'
    | 'EXCEPTED_NONFINANCIAL_ENTITY_IN_LIQUIDATION'
    | 'PUBLICLY_TRADED_NFFE'
    | 'EXCEPTED_TERRITORY_NFFE'
    | 'ACTIVE_NFFE'
    | 'PASSIVE_NFFE'
    | 'DIRECT_REPORTING_NFFE'
    | 'SPONSORED_DIRECT_REPORTING_NFFE'
    | undefined
  usTin?: string | undefined
  usTinType?: 'QI-EIN' | 'WP-EIN' | 'WT-EIN' | 'EIN' | 'SSN' | 'ITIN' | undefined
  giin?: string | undefined
  referenceNumber?: bigint | undefined
  box11Status?:
    | 'LIMITED_BRANCH'
    | 'US_BRANCH'
    | 'PARTICIPATING_FFI'
    | 'REPORTING_MODEL_1_FFI'
    | 'REPORTING_MODEL_2_FFI'
    | undefined
  part314A?: boolean | undefined
  part314B?: boolean | undefined
  part314C?: boolean | undefined
  part314CDesc?: string | undefined
  part314D?: boolean | undefined
  part314DDesc?: string | undefined
  part314E?: boolean | undefined
  part314EDesc?: string | undefined
  part314EI?: boolean | undefined
  part314EIi?: boolean | undefined
  part415A?: boolean | undefined
  part415B?: boolean | undefined
  part415C?: boolean | undefined
  part415D?: boolean | undefined
  part516A?: boolean | undefined
  part516B?: boolean | undefined
  part516C?: boolean | undefined
  part617A?: boolean | undefined
  part617B?: boolean | undefined
  part617C?: boolean | undefined
  part718?: boolean | undefined
  part819?: boolean | undefined
  part920?: boolean | undefined
  part1021?: string | undefined
  part1021A?: string | undefined
  part1021B?: boolean | undefined
  part1021C?: boolean | undefined
  part1122A?: boolean | undefined
  part1122B?: boolean | undefined
  part1122C?: boolean | undefined
  part1223?: boolean | undefined
  part1324?: boolean | undefined
  part1425A?: string | undefined
  part1425B?: boolean | undefined
  part1526?: boolean | undefined
  part1627A?: boolean | undefined
  part1627B?: boolean | undefined
  part1627C?: boolean | undefined
  part1728?: boolean | undefined
  part1829?: boolean | undefined
  part1829Desc1?: string | undefined
  part1829Desc2?: string | undefined
  part1829Desc3?: string | undefined
  part1930A?: boolean | undefined
  part1930B?: boolean | undefined
  part1930C?: boolean | undefined
  part1930D?: boolean | undefined
  part1930E?: boolean | undefined
  part1930F?: boolean | undefined
  part2031?: boolean | undefined
  part2132?: boolean | undefined
  part2132Desc?: string | undefined
  part2233?: boolean | undefined
  part2233Desc?: string | undefined
  part2334A?: boolean | undefined
  part2334ADesc?: string | undefined
  part2334B?: boolean | undefined
  part2334BDesc?: string | undefined
  part2435?: boolean | undefined
  part2536?: boolean | undefined
  part2637?: boolean | undefined
  part2738?: string | undefined
  part2739?: boolean | undefined
  cert?: boolean | undefined
}
type WithholdingStatementType = {
  accountId?: string | undefined
  fatcaCompliantType?:
    | 'FATCA_COMPLIANT'
    | 'NON_CONSENTING_US_ACCOUNT'
    | 'NON_COOPERATIVE_ACCOUNT'
    | undefined
  usBackupWithholding?: boolean | undefined
  treatyCountry?: string | undefined
  corporation?: boolean | undefined
  flowThrough?: boolean | undefined
  effectiveDate?: string | undefined
  dividendRate?: number | undefined
  interestRate?: number | undefined
  usOtherRate?: number | undefined
  eciRate?: number | undefined
}
type OrganizationApplicant = {
  identifications?: OrganizationIdentification[] | undefined
  accountSupport?: AccountSupportType | undefined
  financialInformation?: FinancialInformation[] | undefined
  accreditedInvestorInformation?: AccreditedInvestorInformation | undefined
  regulatoryInformation?: RegulatoryInformation[] | undefined
  managingOwner?: ManagingOwner | undefined
  associatedEntities?: AssociatedEntities | undefined
  regulatedMemberships?: RegulatedMembership[] | undefined
  taxResidencies?: TaxResidency[] | undefined
  w8BenE?: FormW8BENE | undefined
  w8IMY?: FormW8IMY | undefined
  withholdingStatement?: WithholdingStatementType | undefined
  typeOfTrading?: 'FIRM' | 'CUSTOMER' | undefined
  type?: 'LLC' | 'CORPORATION' | 'PARTNERSHIP' | 'UNINCORPORATED BUSINESS' | undefined
  orgUsSubsidiary?: boolean | undefined
  qualifiedIntermediary?: boolean | undefined
  assumedPrimaryReporting?: boolean | undefined
  acceptedPrimaryWithholding?: boolean | undefined
  usTaxPurposeType?: 'C' | 'P' | 'E' | undefined
  propAccount?: boolean | undefined
  lei?: string | undefined
  noLeiConfirmation?: boolean | undefined
}
type IndividualTaxInformation = {
  w9?: FormW9 | undefined
  w8Ben?: FormW8BEN | undefined
  crs?: FormCRS | undefined
  w8BenE?: FormW8BENE | undefined
}
type IndividualApplicant = {
  accountHolderDetails?: AssociatedIndividual[] | undefined
  associatedIndividual?: AssociatedIndividual | undefined
  financialInformation?: FinancialInformation[] | undefined
  regulatoryInformation?: RegulatoryInformation[] | undefined
  regulatedMemberships?: RegulatedMembership[] | undefined
  accreditedInvestorInformation?: AccreditedInvestorInformation | undefined
  taxInformation?: IndividualTaxInformation | undefined
  withholdingStatement?: WithholdingStatementType | undefined
}
type JointApplicant = {
  firstHolderDetails?: AssociatedIndividual[] | undefined
  secondHolderDetails?: AssociatedIndividual[] | undefined
  financialInformation?: FinancialInformation[] | undefined
  regulatoryInformation?: RegulatoryInformation[] | undefined
  regulatedMemberships?: RegulatedMembership[] | undefined
  accreditedInvestorInformation?: AccreditedInvestorInformation | undefined
  taxInformation?: IndividualTaxInformation | undefined
  withholdingStatement?: WithholdingStatementType | undefined
  type?: 'community' | 'joint_tenants' | 'tenants_common' | 'tbe' | 'au_joint_account' | undefined
}
type TrustIdentification = {
  address?: Address | undefined
  mailingAddress?: Address | undefined
  phones?: PhoneInfo[] | undefined
  name?: string | undefined
  description?: string | undefined
  typeOfTrust?:
    | 'IRREVOC'
    | 'SMSF'
    | 'REVOCABLE'
    | 'TESTAMENTARY'
    | 'RETIREMENT'
    | 'ERISA'
    | 'OTHER'
    | undefined
  purposeOfTrust?: string | undefined
  dateFormed?: string | undefined
  formationCountry?: string | undefined
  formationState?: string | undefined
  registrationNumber?: string | undefined
  registrationType?: 'SSN' | 'EIN' | 'NonUS_NationalId' | undefined
  registrationCountry?: string | undefined
  sameMailAddress?: boolean | undefined
  translated?: boolean | undefined
}
type TrusteeIndividual = {
  name?: IndividualName | undefined
  nativeName?: IndividualName | undefined
  birthName?: IndividualName | undefined
  motherMaidenName?: IndividualName | undefined
  dateOfBirth?: string | undefined
  countryOfBirth?: string | undefined
  cityOfBirth?: string | undefined
  gender?: 'M' | 'F' | 'Male' | 'Female' | undefined
  maritalStatus?: 'S' | 'M' | 'W' | 'D' | 'C' | undefined
  numDependents?: bigint | undefined
  residenceAddress?: ResidenceAddress | undefined
  mailingAddress?: Address | undefined
  phones?: PhoneInfo[] | undefined
  email?: string | undefined
  identification?: Identification | undefined
  employmentType?: string | undefined
  employmentDetails?: EmploymentDetails | undefined
  employeeTitle?: string | undefined
  taxResidencies?: TaxResidency[] | undefined
  w9?: FormW9 | undefined
  w8Ben?: FormW8BEN | undefined
  crs?: FormCRS | undefined
  prohibitedCountryQuestionnaire?: ProhibitedCountryQuestionnaireList | undefined
  id?: string | undefined
  externalId?: string | undefined
  userId?: string | undefined
  sameMailAddress?: boolean | undefined
  authorizedToSignOnBehalfOfOwner?: boolean | undefined
  authorizedTrader?: boolean | undefined
  usTaxResident?: boolean | undefined
  translated?: boolean | undefined
  primaryTrustee?: boolean | undefined
  nfaRegistered?: boolean | undefined
  nfaRegistrationNumber?: string | undefined
}
type LegalEntityIdentification = {
  placeOfBusinessAddress?: Address | undefined
  mailingAddress?: Address | undefined
  identification?: string | undefined
  identificationCountry?: string | undefined
  formationCountry?: string | undefined
  formationType?: 'PUBLIC' | 'PRIVATE' | 'OTHER' | undefined
  exchangeCode?: string | undefined
  exchangeSymbol?: string | undefined
  sameMailAddress?: boolean | undefined
}
type LegalEntity = {
  name?: string | undefined
  address?: Address | undefined
  phones?: PhoneInfo[] | undefined
  email?: string | undefined
  legalEntityIdentification?: LegalEntityIdentification | undefined
  taxResidencies?: TaxResidency[] | undefined
  id?: string | undefined
  externalId?: string | undefined
  usTaxResident?: boolean | undefined
  translated?: boolean | undefined
}
type Individual = {
  name?: IndividualName | undefined
  nativeName?: IndividualName | undefined
  birthName?: IndividualName | undefined
  motherMaidenName?: IndividualName | undefined
  dateOfBirth?: string | undefined
  countryOfBirth?: string | undefined
  cityOfBirth?: string | undefined
  gender?: 'M' | 'F' | 'Male' | 'Female' | undefined
  maritalStatus?: 'S' | 'M' | 'W' | 'D' | 'C' | undefined
  numDependents?: bigint | undefined
  residenceAddress?: ResidenceAddress | undefined
  mailingAddress?: Address | undefined
  phones?: PhoneInfo[] | undefined
  email?: string | undefined
  identification?: Identification | undefined
  employmentType?: string | undefined
  employmentDetails?: EmploymentDetails | undefined
  employeeTitle?: string | undefined
  taxResidencies?: TaxResidency[] | undefined
  w9?: FormW9 | undefined
  w8Ben?: FormW8BEN | undefined
  crs?: FormCRS | undefined
  prohibitedCountryQuestionnaire?: ProhibitedCountryQuestionnaireList | undefined
  id?: string | undefined
  externalId?: string | undefined
  userId?: string | undefined
  sameMailAddress?: boolean | undefined
  authorizedToSignOnBehalfOfOwner?: boolean | undefined
  authorizedTrader?: boolean | undefined
  usTaxResident?: boolean | undefined
  translated?: boolean | undefined
  primaryTrustee?: boolean | undefined
}
type TrusteeEntityType = {
  legalEntity?: LegalEntity | undefined
  employees?: Individual[] | undefined
}
type TrusteesType = {
  individuals?: TrusteeIndividual[] | undefined
  entities?: TrusteeEntityType[] | undefined
}
type AssociationTypeEntities = {
  individual?: AssociatedIndividual[] | undefined
  legalEntity?: LegalEntity[] | undefined
}
type TrustApplicant = {
  identification?: TrustIdentification[] | undefined
  financialInformation?: FinancialInformation[] | undefined
  regulatoryInformation?: RegulatoryInformation[] | undefined
  regulatedMemberships?: RegulatedMembership[] | undefined
  accreditedInvestorInformation?: AccreditedInvestorInformation | undefined
  trustees?: TrusteesType | undefined
  beneficiaries?: AssociationTypeEntities | undefined
  grantors?: AssociationTypeEntities | undefined
  taxResidencies?: TaxResidency[] | undefined
  w8BenE?: FormW8BENE | undefined
  w8IMY?: FormW8IMY | undefined
  withholdingStatement?: WithholdingStatementType | undefined
  thirdPartyManagement?: boolean | undefined
  trustType?: 'COMPLEX_TRUST' | 'SINGLE_TRUST' | 'GRANTOR_TRUST' | 'US_TAXABLE_TRUST' | undefined
}
type Customer = {
  organization?: OrganizationApplicant | undefined
  accountHolder?: IndividualApplicant | undefined
  jointHolders?: JointApplicant | undefined
  trust?: TrustApplicant | undefined
  id?: string | undefined
  externalId?: string | undefined
  transferUsMicroCapStock?: boolean | undefined
  type?: 'INDIVIDUAL' | 'JOINT' | 'TRUST' | 'UGMA' | 'UTMA' | 'ORG' | 'IRA' | undefined
  prefix?: string | undefined
  userName?: string | undefined
  userNameAlias?: string | undefined
  userNameSource?: string | undefined
  email?: string | undefined
  mdStatusNonPro?: boolean | undefined
  preferredPrimaryLanguage?: string | undefined
  preferredSecondaryLanguage?: string | undefined
  legalResidenceCountry?: string | undefined
  taxTreatyCountry?: string | undefined
  meetAmlStandard?: string | undefined
  meetsAmlStandard?: string | undefined
  directTradingAccess?: boolean | undefined
  originCountry?: string | undefined
  terminationAge?: bigint | undefined
  governingState?: string | undefined
  optForDebitCard?: boolean | undefined
  roboFaClient?: boolean | undefined
  independentAccount?: boolean | undefined
  paperAccount?: boolean | undefined
}
type AccountConfigurationType = { type?: string | undefined; value?: boolean | undefined }
type TradingPermission = {
  assetClass?:
    | 'BILL'
    | 'BOND'
    | 'CASH'
    | 'CFD'
    | 'COMB'
    | 'FOP'
    | 'FUND'
    | 'FUT'
    | 'OPT'
    | 'SSF'
    | 'STK'
    | 'WAR'
    | 'MRGN'
    | 'CLP'
    | undefined
  exchangeGroup?: string | undefined
  country?:
    | 'ALL'
    | 'AUSTRALIA'
    | 'AUSTRIA'
    | 'BELGIUM'
    | 'CANADA'
    | 'FRANCE'
    | 'GERMANY'
    | 'HONG KONG'
    | 'ITALY'
    | 'JAPAN'
    | 'KOREA'
    | 'MEXICO'
    | 'NORWAY'
    | 'SINGAPORE'
    | 'SPAIN'
    | 'SWEDEN'
    | 'SWITZERLAND'
    | 'THE NETHERLANDS'
    | 'UNITED KINGDOM'
    | 'UNITED STATES'
    | 'HK-CHINA'
    | undefined
  product?:
    | 'BONDS'
    | 'FUTURES'
    | 'FOREX'
    | 'FUTURES OPTIONS'
    | 'MUTUAL FUNDS'
    | 'STOCKS'
    | 'SINGLE STOCK FUTURES'
    | 'OPTIONS'
    | 'STOCK OPTIONS'
    | 'WARRANTS'
    | undefined
}
type CommissionConfig = {
  style?: 'Bundled' | 'Unbundled' | undefined
  type?: 'Commodities' | 'Securities' | undefined
}
type ExchangeAccess = {
  assetClass?:
    | 'BILL'
    | 'BOND'
    | 'CASH'
    | 'CFD'
    | 'COMB'
    | 'FOP'
    | 'FUND'
    | 'FUT'
    | 'OPT'
    | 'SSF'
    | 'STK'
    | 'WAR'
    | 'MRGN'
    | 'CLP'
    | undefined
  exchange?: 'NYSE' | 'AMEX' | 'NASDAQ' | 'CBOE' | 'ISE' | 'BOX' | 'PHLX' | 'PSE' | undefined
}
type DVPInstruction = {
  id?: string | undefined
  externalId?: string | undefined
  externalAccountID?: string | undefined
  accountID?: string | undefined
  name?: string | undefined
  type?: 'DTCID' | 'NSCC' | 'CMTA' | 'GUS' | 'OCCSSF' | undefined
  role?: 'E' | 'C' | 'B' | undefined
  agentID?: string | undefined
  firmID?: string | undefined
  agentName?: string | undefined
  accountName?: string | undefined
  dayDoID?: string | undefined
  txGroupCode?: 'G' | 'Z' | 'R' | 'N' | undefined
  brokerCode?: string | undefined
  assetClass?:
    | 'BILL'
    | 'BOND'
    | 'CASH'
    | 'CFD'
    | 'COMB'
    | 'FOP'
    | 'FUND'
    | 'FUT'
    | 'OPT'
    | 'SSF'
    | 'STK'
    | 'WAR'
    | 'MRGN'
    | 'CLP'
    | undefined
  exchange?: 'NYSE' | 'AMEX' | 'NASDAQ' | 'CBOE' | 'ISE' | 'BOX' | 'PHLX' | 'PSE' | undefined
  prepayTax?: boolean | undefined
  prepayCommission?: boolean | undefined
  expiry?: string | undefined
  default?: boolean | undefined
}
type OrderValueLimits = {
  maxOrderValue?: number | undefined
  maxGrossValue?: number | undefined
  maxNetValue?: number | undefined
  netContractLimit?: number | undefined
}
type EFPQuantityLimits = {
  maxNominalEfpPerOrder?: bigint | undefined
  maxNetEfpTrades?: bigint | undefined
  maxGrossEfpTrades?: bigint | undefined
}
type OrderQuantityLimit = {
  asset?:
    | 'BILL'
    | 'BOND'
    | 'CASH'
    | 'CFD'
    | 'COMB'
    | 'FOP'
    | 'FUND'
    | 'FUT'
    | 'OPT'
    | 'SSF'
    | 'STK'
    | 'WAR'
    | 'MRGN'
    | 'CLP'
    | undefined
  quantity?: bigint | undefined
}
type DayQuantityLimit = {
  asset?:
    | 'BILL'
    | 'BOND'
    | 'CASH'
    | 'CFD'
    | 'COMB'
    | 'FOP'
    | 'FUND'
    | 'FUT'
    | 'OPT'
    | 'SSF'
    | 'STK'
    | 'WAR'
    | 'MRGN'
    | 'CLP'
    | undefined
  quantity?: bigint | undefined
}
type TradingLimits = {
  orderValueLimits?: OrderValueLimits | undefined
  efpQuantityLimits?: EFPQuantityLimits | undefined
  orderQuantityLimits?: OrderQuantityLimit[] | undefined
  dayQuantityLimits?: DayQuantityLimit[] | undefined
}
type MarkupStaircaseType = { amount?: number | undefined; break?: number | undefined }
type CommissionMarkupType = {
  stairs?: MarkupStaircaseType[] | undefined
  code?: string | undefined
  minimum?: number | undefined
  maximum?: number | undefined
  type?: 'FA' | 'FM' | 'PM' | undefined
  amount?: number | undefined
  plusCost?: boolean | undefined
  ticketCharge?: number | undefined
}
type CommissionScheduleType = {
  markups?: CommissionMarkupType[] | undefined
  pricingStructure?: 'FIXED' | 'TIERED' | undefined
}
type AnnualBlendedPercentage = {
  blendedFrom?: string | undefined
  blendedTo?: string | undefined
  percentage?: string | undefined
}
type NAVRangeType = {
  min?: number | undefined
  max?: number | undefined
  maxFee?: number | undefined
}
type AutomatedWrapFeeDetailsType = {
  perTradeMarkups?: CommissionScheduleType | undefined
  annualBlendedPercentages?: AnnualBlendedPercentage[] | undefined
  navRanges?: NAVRangeType[] | undefined
  type?:
    | 'ANNUALFLATFEE'
    | 'ANNUALFLATFEE_MONTHLY'
    | 'ANNUALFLATFEE_QUATERLY'
    | 'PERCENTOFEQUITY'
    | 'PERCENTOFEQUITY_MONTHLY'
    | 'PERCENTOFEQUITY_EOM'
    | 'PERCENTOFEQUITY_QUATERLY'
    | 'PERCENTOFEQUITY_QUARTERLY'
    | 'PERCENTOFEQUITY_EOQ'
    | 'BLENDEDPERCENTOFEQUITY'
    | 'BLENDEDPERCENTOFEQUITY_MONTHLY'
    | 'BLENDEDPERCENTOFEQUITY_EOM'
    | 'BLENDEDPERCENTOFEQUITY_QUARTERLY'
    | 'BLENDEDPERCENTOFEQUITY_EOQ'
    | 'INVOICE_LIMIT'
    | 'INVOICE_LIMIT_Q'
    | 'PERCENTOFPROFIT'
    | 'PERCENTOFPROFIT_QUARTER'
    | 'PERTRADE'
    | 'PERCENTOFNLV_CAP'
    | 'PERCENTOFNLV_CAP_EOPEQTY'
    | 'PERCENTOFNLV_CAP_Q'
    | 'PERCENTOFNLV_CAP_EOPEQTY_Q'
    | undefined
  maxFee?: number | undefined
  numContracts?: bigint | undefined
  postFrequency?: string | undefined
  percentOfNLVCap?: string | undefined
  percentOfNLVCapQ?: string | undefined
}
type HighWaterMarkConfigurationType = {
  numberOfPeriods?: bigint | undefined
  prorateForWithdrawals?: boolean | undefined
}
type PreviousLossesType = {
  loss?: bigint | undefined
  quarter?: bigint | undefined
  year?: bigint | undefined
  currency?: string | undefined
}
type HighWaterMarkType = {
  hwm?: HighWaterMarkConfigurationType | undefined
  previousLosses?: PreviousLossesType[] | undefined
}
type AdvisorWrapFeesType = {
  automatedFeesDetails?: AutomatedWrapFeeDetailsType[] | undefined
  highWaterMarkConfigHwma?: HighWaterMarkType | undefined
  highWaterMarkConfigHwmq?: HighWaterMarkType | undefined
  strategy?: 'AUTOMATED' | 'DIRECTBILLING' | 'NO_FEE' | undefined
  chargeAdvisor?: boolean | undefined
  chargeOtherFeesToAdvisor?: boolean | undefined
}
type InterestMarkupType = {
  currency?:
    | 'USD'
    | 'EUR'
    | 'GBP'
    | 'CAD'
    | 'JPY'
    | 'HKD'
    | 'AUD'
    | 'CHF'
    | 'MXN'
    | 'SEK'
    | 'NZD'
    | 'HUF'
    | 'CZK'
    | 'CNH'
    | 'DKK'
    | 'RUB'
    | 'ILS'
    | 'NOK'
    | 'SGD'
    | 'PLN'
    | 'ZAR'
    | 'AED'
    | 'KRW'
    | 'SAR'
    | 'TRY'
    | 'RON'
    | 'BGN'
    | undefined
  debitMarkup?: number | undefined
  ibDebitMarkup?: number | undefined
  creditMarkdown?: number | undefined
  shortCreditMarkdown?: number | undefined
  shortCfdCreditMarkdown?: number | undefined
  longCfdDebitMarkdown?: number | undefined
  shortIndexCfdCreditMarkdown?: number | undefined
  longIndexCfdDebitMarkdown?: number | undefined
  shortFxCfdMarkup?: number | undefined
  longFxCfdMarkdown?: number | undefined
}
type IRADecedent = {
  name?: IndividualName | undefined
  nativeName?: IndividualName | undefined
  birthName?: IndividualName | undefined
  motherMaidenName?: IndividualName | undefined
  dateOfBirth?: string | undefined
  countryOfBirth?: string | undefined
  cityOfBirth?: string | undefined
  gender?: 'M' | 'F' | 'Male' | 'Female' | undefined
  maritalStatus?: 'S' | 'M' | 'W' | 'D' | 'C' | undefined
  numDependents?: bigint | undefined
  residenceAddress?: ResidenceAddress | undefined
  mailingAddress?: Address | undefined
  phones?: PhoneInfo[] | undefined
  email?: string | undefined
  identification?: Identification | undefined
  employmentType?: string | undefined
  employmentDetails?: EmploymentDetails | undefined
  employeeTitle?: string | undefined
  taxResidencies?: TaxResidency[] | undefined
  w9?: FormW9 | undefined
  w8Ben?: FormW8BEN | undefined
  crs?: FormCRS | undefined
  prohibitedCountryQuestionnaire?: ProhibitedCountryQuestionnaireList | undefined
  id?: string | undefined
  externalId?: string | undefined
  userId?: string | undefined
  sameMailAddress?: boolean | undefined
  authorizedToSignOnBehalfOfOwner?: boolean | undefined
  authorizedTrader?: boolean | undefined
  usTaxResident?: boolean | undefined
  translated?: boolean | undefined
  primaryTrustee?: boolean | undefined
  dateOfDeath?: string | undefined
  title?: Title | undefined
  inheritorType?: 'S' | 'I' | 'T' | 'O' | undefined
  relationship?: 'Other' | 'Trust' | 'Spouse' | 'Individual' | undefined
}
type IRAPrimaryBeneficiary = {
  name?: IndividualName | undefined
  nativeName?: IndividualName | undefined
  birthName?: IndividualName | undefined
  motherMaidenName?: IndividualName | undefined
  dateOfBirth?: string | undefined
  countryOfBirth?: string | undefined
  cityOfBirth?: string | undefined
  gender?: 'M' | 'F' | 'Male' | 'Female' | undefined
  maritalStatus?: 'S' | 'M' | 'W' | 'D' | 'C' | undefined
  numDependents?: bigint | undefined
  residenceAddress?: ResidenceAddress | undefined
  mailingAddress?: Address | undefined
  phones?: PhoneInfo[] | undefined
  email?: string | undefined
  identification?: Identification | undefined
  employmentType?: string | undefined
  employmentDetails?: EmploymentDetails | undefined
  employeeTitle?: string | undefined
  taxResidencies?: TaxResidency[] | undefined
  w9?: FormW9 | undefined
  w8Ben?: FormW8BEN | undefined
  crs?: FormCRS | undefined
  prohibitedCountryQuestionnaire?: ProhibitedCountryQuestionnaireList | undefined
  id?: string | undefined
  externalId?: string | undefined
  userId?: string | undefined
  sameMailAddress?: boolean | undefined
  authorizedToSignOnBehalfOfOwner?: boolean | undefined
  authorizedTrader?: boolean | undefined
  usTaxResident?: boolean | undefined
  translated?: boolean | undefined
  primaryTrustee?: boolean | undefined
  ownershipPercentage?: number | undefined
  title?: Title | undefined
  relationship?:
    | 'Brother'
    | 'Daughter'
    | 'Estate'
    | 'Father'
    | 'Husband'
    | 'Mother'
    | 'Other'
    | 'Sister'
    | 'Son'
    | 'Wife'
    | 'Charity'
    | 'Trust'
    | 'Spouse'
    | 'Child'
    | 'Sibling'
    | 'Parent'
    | 'Grandchild'
    | 'Common Law Partner'
    | undefined
}
type IRAPrimaryBeneficiaryEntity = {
  name?: string | undefined
  address?: Address | undefined
  id?: string | undefined
  externalId?: string | undefined
  ownershipPercentage?: number | undefined
  title?: Title | undefined
  relationship?:
    | 'Brother'
    | 'Daughter'
    | 'Estate'
    | 'Father'
    | 'Husband'
    | 'Mother'
    | 'Other'
    | 'Sister'
    | 'Son'
    | 'Wife'
    | 'Charity'
    | 'Trust'
    | 'Spouse'
    | 'Child'
    | 'Sibling'
    | 'Parent'
    | 'Grandchild'
    | 'Common Law Partner'
    | undefined
  executor?: Individual | undefined
  executionDate?: string | undefined
  articleOfWill?: string | undefined
  entityType?: 'Trust' | 'Estate' | 'Charity' | undefined
  charityNumber?: string | undefined
}
type IRAContingentBeneficiary = {
  name?: IndividualName | undefined
  nativeName?: IndividualName | undefined
  birthName?: IndividualName | undefined
  motherMaidenName?: IndividualName | undefined
  dateOfBirth?: string | undefined
  countryOfBirth?: string | undefined
  cityOfBirth?: string | undefined
  gender?: 'M' | 'F' | 'Male' | 'Female' | undefined
  maritalStatus?: 'S' | 'M' | 'W' | 'D' | 'C' | undefined
  numDependents?: bigint | undefined
  residenceAddress?: ResidenceAddress | undefined
  mailingAddress?: Address | undefined
  phones?: PhoneInfo[] | undefined
  email?: string | undefined
  identification?: Identification | undefined
  employmentType?: string | undefined
  employmentDetails?: EmploymentDetails | undefined
  employeeTitle?: string | undefined
  taxResidencies?: TaxResidency[] | undefined
  w9?: FormW9 | undefined
  w8Ben?: FormW8BEN | undefined
  crs?: FormCRS | undefined
  prohibitedCountryQuestionnaire?: ProhibitedCountryQuestionnaireList | undefined
  id?: string | undefined
  externalId?: string | undefined
  userId?: string | undefined
  sameMailAddress?: boolean | undefined
  authorizedToSignOnBehalfOfOwner?: boolean | undefined
  authorizedTrader?: boolean | undefined
  usTaxResident?: boolean | undefined
  translated?: boolean | undefined
  primaryTrustee?: boolean | undefined
  ownershipPercentage?: number | undefined
  title?: Title | undefined
  relationship?:
    | 'Brother'
    | 'Daughter'
    | 'Estate'
    | 'Father'
    | 'Husband'
    | 'Mother'
    | 'Other'
    | 'Sister'
    | 'Son'
    | 'Wife'
    | 'Charity'
    | 'Trust'
    | 'Spouse'
    | 'Child'
    | 'Sibling'
    | 'Parent'
    | 'Grandchild'
    | 'Common Law Partner'
    | undefined
}
type IRAContingentBeneficiaryEntity = {
  name?: string | undefined
  address?: Address | undefined
  id?: string | undefined
  externalId?: string | undefined
  ownershipPercentage?: number | undefined
  title?: Title | undefined
  relationship?:
    | 'Brother'
    | 'Daughter'
    | 'Estate'
    | 'Father'
    | 'Husband'
    | 'Mother'
    | 'Other'
    | 'Sister'
    | 'Son'
    | 'Wife'
    | 'Charity'
    | 'Trust'
    | 'Spouse'
    | 'Child'
    | 'Sibling'
    | 'Parent'
    | 'Grandchild'
    | 'Common Law Partner'
    | undefined
  executor?: Individual | undefined
  executionDate?: string | undefined
  articleOfWill?: string | undefined
  entityType?: 'Trust' | 'Estate' | 'Charity' | undefined
}
type IRABeneficiariesType = {
  primaryBeneficiaries?: IRAPrimaryBeneficiary[] | undefined
  primaryBeneficiaryEntities?: IRAPrimaryBeneficiaryEntity[] | undefined
  contingentBeneficiaries?: IRAContingentBeneficiary[] | undefined
  contingentBeneficiaryEntities?: IRAContingentBeneficiaryEntity[] | undefined
  spousePrimaryBeneficary?: boolean | undefined
  successor?: boolean | undefined
}
type PartialStockPosition = {
  symbol?: string | undefined
  numberOfShares?: bigint | undefined
  all?: boolean | undefined
  position?: 'LONG' | 'SHORT' | undefined
  exchange?: string | undefined
}
type PartialBondPosition = {
  cusipNumber?: string | undefined
  numberOfBonds?: bigint | undefined
  all?: boolean | undefined
}
type PartialOptionPosition = {
  symbol?: string | undefined
  numberOfContracts?: bigint | undefined
  all?: boolean | undefined
  position?: 'LONG' | 'SHORT' | undefined
  optionType?: 'CALL' | 'PUT' | undefined
  strikePrice?: bigint | undefined
  expirationDate?: string | undefined
}
type PartialWarrantPosition = {
  symbol?: string | undefined
  numberOfShares?: bigint | undefined
  all?: boolean | undefined
  position?: 'LONG' | 'SHORT' | undefined
  optionType?: 'CALL' | 'PUT' | undefined
  strikePrice?: bigint | undefined
  expirationDate?: string | undefined
}
type PartialFundPosition = {
  symbol?: string | undefined
  numberOfShares?: bigint | undefined
  all?: boolean | undefined
}
type PartialCashPosition = {
  amount?: number | undefined
  marginLoan?: boolean | undefined
  fullCash?: boolean | undefined
}
type ExtPositionsTransferType = {
  partialStockPositions?: PartialStockPosition[] | undefined
  partialBondPositions?: PartialBondPosition[] | undefined
  partialOptionPositions?: PartialOptionPosition[] | undefined
  partialWarrantPositions?: PartialWarrantPosition[] | undefined
  partialFundPositions?: PartialFundPosition[] | undefined
  partialCashPositions?: PartialCashPosition[] | undefined
  type?: 'FULL' | 'PARTIAL' | undefined
  subType?: 'ACATS' | 'ATON' | undefined
  brokerId?: string | undefined
  brokerName?: string | undefined
  accountAtBroker?: string | undefined
  srcIRAType?:
    | 'RI'
    | 'RO'
    | 'RT'
    | 'SP'
    | 'ED'
    | 'TH'
    | 'RH'
    | 'SH'
    | 'RRSP'
    | 'SRRSP'
    | 'TFSA'
    | 'SIMPLE'
    | 'ISA'
    | 'JISA'
    | undefined
  marginLoan?: boolean | undefined
  shortPos?: boolean | undefined
  optionPos?: boolean | undefined
  ibAccount?: string | undefined
  thirdPartyType?: string | undefined
  approximateAccountValue?: bigint | undefined
  ssn?: string | undefined
  ein?: string | undefined
  signature?: string | undefined
  authorizeToRemoveFund?: boolean | undefined
}
type CheckDetails = {
  checkNumber?: string | undefined
  routingNumber?: string | undefined
  accountNumber?: string | undefined
}
type WireDetails = {
  bankName?: string | undefined
  bankAccountNumber?: string | undefined
  bankCode?: string | undefined
  routingNumber?: string | undefined
  instruction?: string | undefined
  countryCode?: string | undefined
  referenceNumber?: string | undefined
}
type ACHDetails = { custInitAch?: boolean | undefined; bankName?: string | undefined }
type IRADepositDetails = {
  depositType?: 'contribution' | 'rollover' | undefined
  taxYear?: 'current' | 'prior' | undefined
  fromIraType?:
    | 'RI'
    | 'RO'
    | 'RT'
    | 'SP'
    | 'ED'
    | 'TH'
    | 'RH'
    | 'SH'
    | 'RRSP'
    | 'SRRSP'
    | 'TFSA'
    | 'SIMPLE'
    | 'ISA'
    | 'JISA'
    | undefined
}
type DepositNotification = {
  checkDetails?: CheckDetails | undefined
  wireDetails?: WireDetails | undefined
  achDetails?: ACHDetails | undefined
  iraDepositDetails?: IRADepositDetails | undefined
  type?: 'CHECK' | 'WIRE' | 'ACH' | 'SKIP_DEPOSIT' | undefined
  amount?: number | undefined
  currency?:
    | 'USD'
    | 'EUR'
    | 'GBP'
    | 'CAD'
    | 'JPY'
    | 'HKD'
    | 'AUD'
    | 'CHF'
    | 'MXN'
    | 'SEK'
    | 'NZD'
    | 'HUF'
    | 'CZK'
    | 'CNH'
    | 'DKK'
    | 'RUB'
    | 'ILS'
    | 'NOK'
    | 'SGD'
    | 'PLN'
    | 'ZAR'
    | 'AED'
    | 'KRW'
    | 'SAR'
    | 'TRY'
    | 'RON'
    | 'BGN'
    | undefined
  ibAccount?: string | undefined
}
type CustodianType = {
  individual?: Individual | undefined
  legalEntity?: LegalEntity | undefined
  employee?: Individual | undefined
}
type RepDetail = { repId?: string | undefined; percentage?: bigint | undefined }
type AccountRep = { repDetails?: RepDetail[] | undefined; included?: boolean | undefined }
type Account = {
  accountConfiguration?: AccountConfigurationType | undefined
  investmentObjectives?:
    | ('Trading' | 'Growth' | 'Speculation' | 'Hedging' | 'Preservation' | 'Income')[]
    | undefined
  brokerageServiceCodes?: ('IBClearing' | 'IBExecution' | 'IBPrime')[] | undefined
  capabilities?:
    | (
        | 'BOND'
        | 'FOP'
        | 'FUND'
        | 'FUT'
        | 'MRGN'
        | 'MULT'
        | 'OPT'
        | 'SSF'
        | 'CFD'
        | 'STK'
        | 'CLP'
        | 'LEVFX'
        | 'CMDTY'
      )[]
    | undefined
  optionLevel?: bigint | undefined
  tradingPermissions?: TradingPermission[] | undefined
  commissionConfigs?: CommissionConfig[] | undefined
  allExchangeAccess?: ExchangeAccess[] | undefined
  dvpInstructions?: DVPInstruction[] | undefined
  tradingLimits?: TradingLimits | undefined
  advisorWrapFees?: AdvisorWrapFeesType | undefined
  feesTemplateName?: string | undefined
  clientCommissionSchedule?: CommissionScheduleType | undefined
  clientInterestMarkupSchedules?: InterestMarkupType[] | undefined
  decendent?: IRADecedent | undefined
  iraBeneficiaries?: IRABeneficiariesType | undefined
  extPositionsTransfers?: ExtPositionsTransferType[] | undefined
  depositNotification?: DepositNotification | undefined
  custodian?: CustodianType | undefined
  successorCustodian?: CustodianType | undefined
  accountRep?: AccountRep | undefined
  id?: string | undefined
  externalId?: string | undefined
  propertyProfile?: string | undefined
  baseCurrency?:
    | 'USD'
    | 'EUR'
    | 'GBP'
    | 'CAD'
    | 'JPY'
    | 'HKD'
    | 'AUD'
    | 'CHF'
    | 'MXN'
    | 'SEK'
    | 'NZD'
    | 'HUF'
    | 'CZK'
    | 'CNH'
    | 'DKK'
    | 'RUB'
    | 'ILS'
    | 'NOK'
    | 'SGD'
    | 'PLN'
    | 'ZAR'
    | 'AED'
    | 'KRW'
    | 'SAR'
    | 'TRY'
    | 'RON'
    | 'BGN'
    | undefined
  employeePlan?: string | undefined
  multiCurrency?: boolean | undefined
  migration?: boolean | undefined
  sourceAccountId?: string | undefined
  margin?: string | undefined
  ira?: boolean | undefined
  iraType?:
    | 'RI'
    | 'RO'
    | 'RT'
    | 'SP'
    | 'ED'
    | 'TH'
    | 'RH'
    | 'SH'
    | 'RRSP'
    | 'SRRSP'
    | 'TFSA'
    | 'SIMPLE'
    | 'ISA'
    | 'JISA'
    | undefined
  iraOfficialTitle?: string | undefined
  clientActiveTrading?: boolean | undefined
  duplicate?: boolean | undefined
  numberOfDuplicates?: bigint | undefined
  stockYieldProgram?: boolean | undefined
  alias?: string | undefined
  accountType?: 'Investment' | 'Trading' | 'SMSF' | undefined
  drip?: boolean | undefined
  qiSubType?: 'ISA' | 'JISA' | 'SIPP' | undefined
}
type UserPrivilege = {
  externalAccountId?: string | undefined
  privilege?: 'OWNER' | 'TRADER' | 'CUSTOM' | 'NONE' | undefined
}
type User = {
  userPrivileges?: UserPrivilege[] | undefined
  mdServices?: bigint[] | undefined
  id?: string | undefined
  externalUserId?: string | undefined
  externalIndividualId?: string | undefined
  encryptedPassword?: string | undefined
  encryptedKeyName?: string | undefined
  prefix?: string | undefined
}
type AttachedFileType = { fileName: string; fileLength: bigint; sha1Checksum: string }
type FilePayload = { mimeType: string; data: string }
type Document = {
  signedBy?: string[] | undefined
  attachedFile: AttachedFileType
  formNumber: bigint
  validAddress?: boolean | undefined
  execLoginTimestamp: bigint
  execTimestamp: bigint
  documentType?:
    | 'Check'
    | 'Company Ownership'
    | 'Divorce Settlement'
    | 'Employer Confirmation'
    | 'Entitlement to Payments'
    | 'Letter'
    | 'Ownership'
    | 'Pay Slip'
    | 'Proof of Sale'
    | 'Proof of Winnings'
    | 'Severance'
    | 'Tax Return'
    | 'Will'
    | 'Bank Statement'
    | 'Brokerage Statement'
    | 'Current Lease'
    | 'Financial Statement'
    | 'Certificate of Incorporation/Formation'
    | 'Certificate of Registratios'
    | 'Company Charter'
    | 'Certificate of Good Standing'
    | 'Government-issued Business License'
    | 'Corporate Charter'
    | 'Articles of Incorporation'
    | 'Bank Passbook/Statement'
    | 'Certified Proof of Identity'
    | 'Certified Proof of Address'
    | 'Income Tax Return'
    | 'Additional Proof of Identity Document'
    | 'Proof of Principal Place of Business and Registration'
    | 'Utility Bill'
    | 'Evidence of Ownership of Property'
    | 'Authorization to Open Account - Evidence'
    | 'Authorization to Open Account - Certification'
    | 'Italian Health Card (Tessera Sanitaria)'
    | 'CRS card of Lombardy'
    | 'Italian Electronic ID Card - CIE'
    | 'Court- or Govt-issued document'
    | "Copy of Passport, National Id or Driver's License"
    | 'Passport'
    | 'National ID'
    | undefined
  signature?: string | undefined
  externalAccountId?: string | undefined
  externalIndividualId?: string | undefined
  proofOfIdentityType?:
    | 'Driver License'
    | 'Passport'
    | 'Alien ID Card'
    | 'National ID Card'
    | 'Bank Statement'
    | 'Evidence of Ownership of Property'
    | 'Credit Card Statement'
    | 'Utility Bill'
    | 'Brokerage Statement'
    | 'T4 Statement'
    | 'CRA Assessment'
    | 'Hong Kong and Macao Entry Permit'
    | undefined
  expirationDate?: string | undefined
  proofOfAddressType?:
    | 'Driver License'
    | 'Bank Statement'
    | 'Brokerage Statement'
    | 'Homeowner Insurance Policy Bill'
    | 'Homeowner Insurance Policy Document'
    | 'Renter Insurance Policy bill'
    | 'Renter Insurance Policy Document'
    | 'Security System Bill'
    | 'Government Issued Letters'
    | 'Utility Bill'
    | 'Current Lease'
    | 'Evidence of Ownership of Property'
    | 'Other Document'
    | undefined
  payload?: FilePayload | undefined
}
type AddAdditionalAccount = {
  customer?: Customer | undefined
  account?: Account | undefined
  documents?: Document[] | undefined
  users?: User[] | undefined
  accountId?: string | undefined
}
type AnswerDetail = { name?: string | undefined; detail?: string | undefined }
type Answer = {
  answerDetail?: AnswerDetail[] | undefined
  detail?: string | undefined
  id?: bigint | undefined
  questionId?: bigint | undefined
}
type Questionnaire = { answers?: Answer[] | undefined; formNumber?: bigint | undefined }
type Questionnaires = { questionnaire?: Questionnaire[] | undefined }
type Application = {
  customer?: Customer | undefined
  accounts?: Account[] | undefined
  users?: User[] | undefined
  documents?: Document[] | undefined
  additionalAccounts?: AddAdditionalAccount[] | undefined
  masterAccountId?: string | undefined
  id?: string | undefined
  inputLanguage?:
    | 'en'
    | 'zh-Hans'
    | 'ja'
    | 'ru'
    | 'fr'
    | 'pt'
    | 'es'
    | 'it'
    | 'ar-AE'
    | 'de'
    | 'he-IL'
    | 'hu'
    | undefined
  translation?: boolean | undefined
  paperAccount?: boolean | undefined
  questionnaires?: Questionnaires | undefined
}
type ApplicationPayload = { application?: Application | undefined }
type FileData = { data?: { [x: string]: unknown } | undefined; name?: string | undefined }
type StatusResponse = {
  requestId?: bigint | undefined
  problemDetail?: { [x: string]: { [x: string]: unknown } } | undefined
  dateSubmitted?: string | undefined
  fileData?: FileData | undefined
}
type RequestInfoResponse = { requestId?: bigint | undefined; executedAt?: string | undefined }
type ProblemDetailResponse = {
  type?: string | undefined
  title?: string | undefined
  status?: bigint | undefined
  detail?: string | undefined
  instance?: string | undefined
}
type UpdateExternalId = { accountId?: string | undefined; newExternalId?: string | undefined }
type UpdatePropertyProfile = {
  accountId?: string | undefined
  propertyProfile?: string | undefined
}
type UpdateAccountAlias = { accountId?: string | undefined; accountAlias?: string | undefined }
type ChangeBaseCurrency = { accountId?: string | undefined; newBaseCurrency?: string | undefined }
type AbandonAccount = { accountId?: string | undefined }
type UserDetails = {
  name?: IndividualName | undefined
  nativeName?: IndividualName | undefined
  birthName?: IndividualName | undefined
  motherMaidenName?: IndividualName | undefined
  dateOfBirth?: string | undefined
  countryOfBirth?: string | undefined
  cityOfBirth?: string | undefined
  gender?: 'M' | 'F' | 'Male' | 'Female' | undefined
  maritalStatus?: 'S' | 'M' | 'W' | 'D' | 'C' | undefined
  numDependents?: bigint | undefined
  residenceAddress?: ResidenceAddress | undefined
  mailingAddress?: Address | undefined
  phones?: PhoneInfo[] | undefined
  email?: string | undefined
  identification?: Identification | undefined
  employmentType?: string | undefined
  employmentDetails?: EmploymentDetails | undefined
  employeeTitle?: string | undefined
  taxResidencies?: TaxResidency[] | undefined
  w9?: FormW9 | undefined
  w8Ben?: FormW8BEN | undefined
  crs?: FormCRS | undefined
  prohibitedCountryQuestionnaire?: ProhibitedCountryQuestionnaireList | undefined
  id?: string | undefined
  externalId?: string | undefined
  userId?: string | undefined
  sameMailAddress?: boolean | undefined
  authorizedToSignOnBehalfOfOwner?: boolean | undefined
  authorizedTrader?: boolean | undefined
  usTaxResident?: boolean | undefined
  translated?: boolean | undefined
  primaryTrustee?: boolean | undefined
  ownershipPercentage?: number | undefined
  title?: Title[] | undefined
  authorizedPerson?: boolean | undefined
  referenceUsername?: string | undefined
}
type AddNewUser = {
  accountId?: string | undefined
  prefix?: string | undefined
  userDetails?: UserDetails | undefined
  userName?: string | undefined
  inputLanguage?:
    | 'en'
    | 'zh-Hans'
    | 'ja'
    | 'ru'
    | 'fr'
    | 'pt'
    | 'es'
    | 'it'
    | 'ar-AE'
    | 'de'
    | 'he-IL'
    | 'hu'
    | undefined
  translation?: boolean | undefined
}
type AddLEVFXCapability = { accountId?: string | undefined }
type AddMiFIRData = {
  accountId?: string | undefined
  title?: string | undefined
  identifications?: Identification[] | undefined
}
type DocumentSubmission = {
  documents?: Document[] | undefined
  accountId?: string | undefined
  inputLanguage?:
    | 'en'
    | 'zh-Hans'
    | 'ja'
    | 'ru'
    | 'fr'
    | 'pt'
    | 'es'
    | 'it'
    | 'ar-AE'
    | 'de'
    | 'he-IL'
    | 'hu'
    | undefined
  translation?: boolean | undefined
}
type AddTradingPermissions = {
  tradingPermissions?: TradingPermission[] | undefined
  documentSubmission?: DocumentSubmission | undefined
  accountId?: string | undefined
  optionLevel?: bigint | undefined
}
type RemoveTradingPermissions = {
  tradingPermissions?: TradingPermission[] | undefined
  accountId?: string | undefined
}
type ChangeMarginType = {
  documentSubmission?: DocumentSubmission | undefined
  accountId?: string | undefined
  operation?: string | undefined
  newMargin?: string | undefined
}
type AddCLPCapability = { accountId?: string | undefined; documents?: Document[] | undefined }
type ChangeFinancialInformation = {
  accountId?: string | undefined
  referenceUserName?: string | undefined
  newFinancialInformation?: FinancialInformation | undefined
}
type ResetAbandonedAccount = { accountId?: string | undefined }
type UpdateEmail = {
  email?: string | undefined
  token?: string | undefined
  access?: boolean | undefined
  externalId?: string | undefined
  entityId?: string | undefined
}
type UpdatePassword = {
  encryptedPassword?: string | undefined
  encryptedKeyName?: string | undefined
  token?: string | undefined
}
type UpdateCredentials = {
  updateEmail?: UpdateEmail | undefined
  updatePassword?: UpdatePassword | undefined
  accountId?: string | undefined
  referenceUserName?: string | undefined
}
type RepresentativeDetail = {
  representativeId?: string | undefined
  percentage?: bigint | undefined
}
type UpdateAccountRepresentatives = {
  representativeDetails?: RepresentativeDetail[] | undefined
  accountId?: string | undefined
}
type CompleteLoginMessage = {
  loginMessageIds?: bigint[] | undefined
  accountId?: string | undefined
}
type ReopenAccount = { accountId?: string | undefined }
type EnrollInSYEP = { accountId?: string | undefined; documents?: Document[] | undefined }
type LeaveSYEP = { accountId?: string | undefined }
type EnrollInDRIP = { accountId?: string | undefined }
type LeaveDRIP = { accountId?: string | undefined }
type TaxPayerDetails = { w8Ben?: FormW8BEN | undefined; userName?: string | undefined }
type UpdateW8BEN = {
  taxPayerDetails?: TaxPayerDetails | undefined
  documents?: Document[] | undefined
  inputLanguage?:
    | 'en'
    | 'zh-Hans'
    | 'ja'
    | 'ru'
    | 'fr'
    | 'pt'
    | 'es'
    | 'it'
    | 'ar-AE'
    | 'de'
    | 'he-IL'
    | 'hu'
    | undefined
  translation?: boolean | undefined
  accountId?: string | undefined
}
type EnableAccountInBrokerage = { accountId?: string | undefined }
type DisableAccountInBrokerage = { accountId?: string | undefined }
type LinkDuplicateAccount = {
  accountId?: string | undefined
  externalAccountId?: string | undefined
  clientActiveTrading?: boolean | undefined
}
type DuplicateAccount = { accountId?: string | undefined; numberOfDuplicates?: bigint | undefined }
type ProcessDocuments = {
  documents?: Document[] | undefined
  inputLanguage?:
    | 'en'
    | 'zh-Hans'
    | 'ja'
    | 'ru'
    | 'fr'
    | 'pt'
    | 'es'
    | 'it'
    | 'ar-AE'
    | 'de'
    | 'he-IL'
    | 'hu'
    | undefined
  translation?: boolean | undefined
}
type UpdateBCAN = {
  accountId?: string | undefined
  bcan?: string | undefined
  ceNumber?: string | undefined
}
type ProhibitedCountryQuestionnaire = {
  prohibitedQuestionnaireDetails?: ProhibitedQuestionnaireDetail[] | undefined
  accountId?: string | undefined
  externalId?: string | undefined
  entityId?: string | undefined
}
type UpdateWithholdingStatement = {
  accountId?: string | undefined
  fatcaCompliantType?:
    | 'FATCA_COMPLIANT'
    | 'NON_CONSENTING_US_ACCOUNT'
    | 'NON_COOPERATIVE_ACCOUNT'
    | undefined
  usIncomeTax?: boolean | undefined
  treatyCountry?: string | undefined
  certW8Imy?: boolean | undefined
  effectiveDate?: string | undefined
}
type QualifiedPurchaserDetails = {
  code?: 'InvestmentCompanyAct' | 'DiscretionaryBasis' | undefined
  status?: boolean | undefined
}
type QualifiedPurchaser = {
  qualifiedPurchaserDetails?: QualifiedPurchaserDetails[] | undefined
  status?: boolean | undefined
}
type EligibleContractParticipantDetails = {
  code?: 'DiscretionaryBasis' | 'HighRisk' | undefined
  status?: boolean | undefined
}
type EligibleContractParticipant = {
  eligibleContractParticipantDetails?: EligibleContractParticipantDetails[] | undefined
  status?: boolean | undefined
}
type AccreditedInvestor = {
  qualifiedPurchaser?: QualifiedPurchaser | undefined
  eligibleContractParticipant?: EligibleContractParticipant | undefined
  signedBy?: string[] | undefined
  accountId?: string | undefined
  status?: boolean | undefined
  signature?: string | undefined
}
type ChangeAccountHolderDetail = {
  newAccountHolderDetails?: AssociatedIndividual[] | undefined
  documents?: DocumentSubmission | undefined
  accountId?: string | undefined
  referenceUserName?: string | undefined
  inputLanguage?:
    | 'en'
    | 'zh-Hans'
    | 'ja'
    | 'ru'
    | 'fr'
    | 'pt'
    | 'es'
    | 'it'
    | 'ar-AE'
    | 'de'
    | 'he-IL'
    | 'hu'
    | undefined
  translation?: boolean | undefined
}
type UpdateUserAccessRights = {
  subAccounts?: string[] | undefined
  repId?: string | undefined
  action?: string | undefined
}
type AddRelationship = {
  name?:
    | 'Account_Holder'
    | 'Spouse'
    | 'Firstholder'
    | 'Secondholder'
    | 'Trader'
    | 'Secretary'
    | 'Treasurer'
    | 'Ceo'
    | 'Owner'
    | 'Trustee'
    | 'Beneficiary'
    | 'Grantor'
    | 'Director'
    | 'Principal'
    | 'Shareholder'
    | 'Partner'
    | 'Controlling_Officer'
    | 'Beneficialowner'
    | 'Signatory'
    | 'Comp_Officer'
    | 'Superv_Broker'
    | 'Pooled_User'
    | 'Financial_User'
    | 'Contingent'
    | 'Ira_Beneficiary'
    | 'Employee'
    | 'Non_Employee'
    | 'Fund_Admin'
    | 'Fund_Contact'
    | 'Firm_Admin'
    | 'Firm_Billing'
    | 'Firm_Clearing'
    | 'Firm_Sales'
    | 'Firm_Trading'
    | 'Firm_User'
    | 'Account_Admin'
    | 'Account_Billing'
    | 'Account_Clearing'
    | 'Account_Sales'
    | 'Account_Trading'
    | 'User_Individual'
    | 'Fund_Manager'
    | 'Investment_Advisor'
    | 'Shf_Investmanager'
    | 'Advisory_Principal'
    | 'Advisory_Signatory'
    | 'Associated_Fund'
    | 'Primary_Contributor'
    | 'Administrator'
    | 'Contact'
    | 'Lead_Compliance_Officer'
    | 'Compliance_Officer'
    | 'Other_Officer'
    | 'Apply_User'
    | 'Transfer_On_Death_Legator'
    | 'Tod_Primary_Beneficiary'
    | 'Tod_Contingent_Beneficiary'
    | 'Nominee'
    | 'Nominee_Guardian'
    | 'Ira_Decedent'
    | 'Authorized_Person'
    | 'Promoter'
    | 'Wholetime_Director'
    | 'Nominee_Owner'
    | 'Third_Party_Admin'
    | 'Compliance_Contact'
    | 'Trust_Controller'
    | 'Trust_Applicant'
    | 'Organization_Applicant'
    | 'Mm_Contact'
    | 'Reg_Rep'
    | 'Plan_Sponsor'
    | 'Plan_Sponsor_Officer'
    | 'Pension_Admin'
    | 'Pension_Admin_Contact'
    | 'Accountant'
    | 'Joint_Applicant'
    | 'Custodian_Employee'
    | 'Successor_Custodian'
    | 'Custodian'
    | 'Successor_Custodian_Employee'
    | 'Chief_Compliance_Officer'
    | 'Chief_Financial_Officer'
    | 'Trading_Officer'
    | 'Child'
    | 'Parent'
    | 'Sibling'
    | 'Estate'
    | 'As_Interest_May_Appear'
    | 'Ira_Present_Trust'
    | 'Other'
    | 'Life_Partner'
    | 'Common_Law_Partner'
    | 'Grandchild'
    | 'Charity'
    | 'Trust_Ira'
    | 'Successor_Holder'
    | 'Head_Of_Desk'
    | 'Cftc_Non_Applicant_Ocr_Contact'
    | 'Ocr_Account_Controller'
    | 'Cftc_Applicant_Ocr_Contact'
    | undefined
  ownershipPercentage?: bigint | undefined
}
type Organization = {
  identification?: OrganizationIdentification | undefined
  regulatoryInformation?: RegulatoryInformation | undefined
  associatedEntities?: AssociatedEntities | undefined
}
type AddEntity = {
  addRelationships?: AddRelationship[] | undefined
  individual?: Individual | undefined
  legalEntity?: LegalEntity | undefined
  organization?: Organization | undefined
  documents?: Document[] | undefined
}
type DeleteRelationship = {
  name?:
    | 'Account_Holder'
    | 'Spouse'
    | 'Firstholder'
    | 'Secondholder'
    | 'Trader'
    | 'Secretary'
    | 'Treasurer'
    | 'Ceo'
    | 'Owner'
    | 'Trustee'
    | 'Beneficiary'
    | 'Grantor'
    | 'Director'
    | 'Principal'
    | 'Shareholder'
    | 'Partner'
    | 'Controlling_Officer'
    | 'Beneficialowner'
    | 'Signatory'
    | 'Comp_Officer'
    | 'Superv_Broker'
    | 'Pooled_User'
    | 'Financial_User'
    | 'Contingent'
    | 'Ira_Beneficiary'
    | 'Employee'
    | 'Non_Employee'
    | 'Fund_Admin'
    | 'Fund_Contact'
    | 'Firm_Admin'
    | 'Firm_Billing'
    | 'Firm_Clearing'
    | 'Firm_Sales'
    | 'Firm_Trading'
    | 'Firm_User'
    | 'Account_Admin'
    | 'Account_Billing'
    | 'Account_Clearing'
    | 'Account_Sales'
    | 'Account_Trading'
    | 'User_Individual'
    | 'Fund_Manager'
    | 'Investment_Advisor'
    | 'Shf_Investmanager'
    | 'Advisory_Principal'
    | 'Advisory_Signatory'
    | 'Associated_Fund'
    | 'Primary_Contributor'
    | 'Administrator'
    | 'Contact'
    | 'Lead_Compliance_Officer'
    | 'Compliance_Officer'
    | 'Other_Officer'
    | 'Apply_User'
    | 'Transfer_On_Death_Legator'
    | 'Tod_Primary_Beneficiary'
    | 'Tod_Contingent_Beneficiary'
    | 'Nominee'
    | 'Nominee_Guardian'
    | 'Ira_Decedent'
    | 'Authorized_Person'
    | 'Promoter'
    | 'Wholetime_Director'
    | 'Nominee_Owner'
    | 'Third_Party_Admin'
    | 'Compliance_Contact'
    | 'Trust_Controller'
    | 'Trust_Applicant'
    | 'Organization_Applicant'
    | 'Mm_Contact'
    | 'Reg_Rep'
    | 'Plan_Sponsor'
    | 'Plan_Sponsor_Officer'
    | 'Pension_Admin'
    | 'Pension_Admin_Contact'
    | 'Accountant'
    | 'Joint_Applicant'
    | 'Custodian_Employee'
    | 'Successor_Custodian'
    | 'Custodian'
    | 'Successor_Custodian_Employee'
    | 'Chief_Compliance_Officer'
    | 'Chief_Financial_Officer'
    | 'Trading_Officer'
    | 'Child'
    | 'Parent'
    | 'Sibling'
    | 'Estate'
    | 'As_Interest_May_Appear'
    | 'Ira_Present_Trust'
    | 'Other'
    | 'Life_Partner'
    | 'Common_Law_Partner'
    | 'Grandchild'
    | 'Charity'
    | 'Trust_Ira'
    | 'Successor_Holder'
    | 'Head_Of_Desk'
    | 'Cftc_Non_Applicant_Ocr_Contact'
    | 'Ocr_Account_Controller'
    | 'Cftc_Applicant_Ocr_Contact'
    | undefined
}
type Trust = {
  identification?: TrustIdentification | undefined
  regulatoryInformation?: RegulatoryInformation | undefined
}
type UpdateEntity = {
  addRelationships?: AddRelationship[] | undefined
  deleteRelationships?: DeleteRelationship[] | undefined
  individual?: Individual | undefined
  legalEntity?: LegalEntity | undefined
  trust?: Trust | undefined
  organization?: Organization | undefined
  documents?: Document[] | undefined
  ibEntityId?: bigint | undefined
  externalId?: string | undefined
}
type DeleteEntity = { ibEntityId?: bigint | undefined; externalId?: string | undefined }
type InformationChange = {
  addEntities?: AddEntity[] | undefined
  updateEntities?: UpdateEntity[] | undefined
  deleteEntities?: DeleteEntity[] | undefined
  ibAccountId?: string | undefined
}
type AccountConfiguration = {
  accountId?: string | undefined
  type?: string | undefined
  value?: boolean | undefined
}
type AllocateVAN = {
  accountId?: string | undefined
  currency?:
    | 'USD'
    | 'EUR'
    | 'GBP'
    | 'CAD'
    | 'JPY'
    | 'HKD'
    | 'AUD'
    | 'CHF'
    | 'MXN'
    | 'SEK'
    | 'NZD'
    | 'HUF'
    | 'CZK'
    | 'CNH'
    | 'DKK'
    | 'RUB'
    | 'ILS'
    | 'NOK'
    | 'SGD'
    | 'PLN'
    | 'ZAR'
    | 'AED'
    | 'KRW'
    | 'SAR'
    | 'TRY'
    | 'RON'
    | 'BGN'
    | undefined
  countryCode?: string | undefined
}
type CreateUser = {
  accountId?: string | undefined
  prefix?: string | undefined
  userName?: string | undefined
  id?: string | undefined
  externalId?: string | undefined
  authorizedTrader?: boolean | undefined
}
type UpdateTaxForm = {
  localTaxForms?: LocalTaxForm[] | undefined
  w8Ben?: FormW8BEN | undefined
  w8BenE?: FormW8BENE | undefined
  w9?: FormW9 | undefined
  translation?: boolean | undefined
  inputLanguage?:
    | 'en'
    | 'zh-Hans'
    | 'ja'
    | 'ru'
    | 'fr'
    | 'pt'
    | 'es'
    | 'it'
    | 'ar-AE'
    | 'de'
    | 'he-IL'
    | 'hu'
    | undefined
  accountId?: string | undefined
  documents?: Document[] | undefined
  entityId?: string | undefined
  externalId?: string | undefined
}
type QuestionnairesWithAccount = {
  questionnaire?: Questionnaire[] | undefined
  accountId?: string | undefined
}
type Details = { question?: string | undefined; answer?: string | undefined }
type SecurityQuestions = {
  details?: Details[] | undefined
  referenceUserName?: string | undefined
  inputLanguage?:
    | 'en'
    | 'zh-Hans'
    | 'ja'
    | 'ru'
    | 'fr'
    | 'pt'
    | 'es'
    | 'it'
    | 'ar-AE'
    | 'de'
    | 'he-IL'
    | 'hu'
    | undefined
}
type ApplyFeeTemplate = { accountId?: string | undefined; templateName?: string | undefined }
type AccountClose = { accountId?: string | undefined; closeReason?: string | undefined }
type Service = { value?: bigint | undefined; action?: 'ADD' | 'REMOVE' | undefined }
type ManageMarketDataSubscriptions = {
  service?: Service[] | undefined
  referenceUserName?: string | undefined
}
type Task = { formNumber?: bigint | undefined; status?: boolean | undefined }
type QuizQuestionnaires = {
  questionnaire?: Questionnaire[] | undefined
  accountId?: string | undefined
  task?: Task[] | undefined
}
type AccountManagementRequests = {
  updateExternalId?: UpdateExternalId | undefined
  updatePropertyProfile?: UpdatePropertyProfile | undefined
  updateAccountAlias?: UpdateAccountAlias | undefined
  changeBaseCurrency?: ChangeBaseCurrency | undefined
  abandonAccount?: AbandonAccount | undefined
  addNewUser?: AddNewUser | undefined
  addLevFxCapability?: AddLEVFXCapability | undefined
  addMiFirData?: AddMiFIRData | undefined
  addTradingPermissions?: AddTradingPermissions | undefined
  removeTradingPermissions?: RemoveTradingPermissions | undefined
  changeMarginType?: ChangeMarginType | undefined
  addCLPCapability?: AddCLPCapability | undefined
  changeFinancialInformation?: ChangeFinancialInformation | undefined
  resetAbandonedAccount?: ResetAbandonedAccount | undefined
  updateCredentials?: UpdateCredentials[] | undefined
  updateAccountRepresentatives?: UpdateAccountRepresentatives | undefined
  completeLoginMessage?: CompleteLoginMessage | undefined
  reopenAccount?: ReopenAccount | undefined
  enrollInSyep?: EnrollInSYEP | undefined
  leaveSyep?: LeaveSYEP | undefined
  enrollInDrip?: EnrollInDRIP | undefined
  leaveDrip?: LeaveDRIP | undefined
  updateW8Ben?: UpdateW8BEN | undefined
  enableAccountInBrokerage?: EnableAccountInBrokerage | undefined
  disableAccountInBrokerage?: DisableAccountInBrokerage | undefined
  linkDuplicateAccount?: LinkDuplicateAccount | undefined
  duplicateAccount?: DuplicateAccount | undefined
  documentSubmission?: DocumentSubmission | undefined
  processDocuments?: ProcessDocuments | undefined
  updateBcan?: UpdateBCAN | undefined
  prohibitedCountryQuestionnaire?: ProhibitedCountryQuestionnaire | undefined
  updateWithholdingStatement?: UpdateWithholdingStatement | undefined
  accreditedInvestor?: AccreditedInvestor | undefined
  changeAccountHolderDetail?: ChangeAccountHolderDetail | undefined
  updateUserAccessRights?: UpdateUserAccessRights | undefined
  informationChange?: InformationChange | undefined
  addAdditionalAccount?: AddAdditionalAccount | undefined
  accountConfiguration?: AccountConfiguration | undefined
  allocateVan?: AllocateVAN | undefined
  createUser?: CreateUser | undefined
  updateTaxForm?: UpdateTaxForm | undefined
  questionnaires?: QuestionnairesWithAccount | undefined
  securityQuestions?: SecurityQuestions | undefined
  applyFeeTemplate?: ApplyFeeTemplate | undefined
  accountClose?: AccountClose | undefined
  manageMarketDataSubscriptions?: ManageMarketDataSubscriptions[] | undefined
  quizQuestionnaires?: QuizQuestionnaires | undefined
}
type AccountManagementRequestsPayload = {
  accountManagementRequests?: AccountManagementRequests | undefined
}
type FileDetailsResponse = {
  accountId?: string | undefined
  requestFileName?: string | undefined
  responseFileName?: string | undefined
}
type ErrorResponse = {
  status?: bigint | undefined
  error?: string | undefined
  message?: string | undefined
}
type ResponseFileResponse = {
  isProcessed?: boolean | undefined
  name?: string | undefined
  data?: { [x: string]: unknown } | undefined
  error?: ErrorResponse | undefined
  hasError?: boolean | undefined
  errorDescription?: string | undefined
}
type ProcessDocumentsPayload = { processDocuments?: ProcessDocuments | undefined }
type TaskAction = {
  formNumber?: bigint | undefined
  status?: string | undefined
  message?: string | undefined
}
type TaskActionResponse = { accountId?: string | undefined; taskAction?: TaskAction[] | undefined }
type RegistrationTask = {
  externalId?: string | undefined
  formNumber?: bigint | undefined
  formName?: string | undefined
  action?: string | undefined
  dateCompleted?: string | undefined
  state?: string | undefined
  questionIds?: bigint[] | undefined
  warning?: string | undefined
  isRequiredForApproval?: boolean | undefined
  isCompleted?: boolean | undefined
  isDeclined?: boolean | undefined
}
type RegistrationTasksResponse = {
  registrationTaskPresent?: boolean | undefined
  empty?: boolean | undefined
  error?: ErrorResponse | undefined
  hasError?: boolean | undefined
  errorDescription?: string | undefined
  accountId?: string | undefined
  status?: string | undefined
  description?: string | undefined
  state?: string | undefined
  registrationTasks?: RegistrationTask[] | undefined
}
type PendingTask = {
  taskNumber?: bigint | undefined
  formNumber?: bigint | undefined
  formName?: string | undefined
  action?: string | undefined
  externalId?: string | undefined
  state?: string | undefined
  documentRejectReason?: string[] | undefined
  url?: string | undefined
  startDate?: string | undefined
  au10tixCreatedDate?: string | undefined
  au10tixExpiryDate?: string | undefined
  entityId?: bigint | undefined
  onlineTask?: boolean | undefined
  requiredForApproval?: boolean | undefined
  requiredForTrading?: boolean | undefined
  questionIds?: bigint[] | undefined
}
type PendingTasksResponse = {
  empty?: boolean | undefined
  error?: ErrorResponse | undefined
  hasError?: boolean | undefined
  errorDescription?: string | undefined
  accountId?: string | undefined
  status?: string | undefined
  description?: string | undefined
  state?: string | undefined
  pendingTasks?: PendingTask[] | undefined
  pendingTaskPresent?: boolean | undefined
}
type QueryWithdrawableCashEquity = {
  clientInstructionId: number
  accountId: string
  currency: string
}
type OpenBankingInstructionResultDetails = {
  bankInstructionName?: string | undefined
  type?: string | undefined
  currency?: string | undefined
  bankRoutingNumber?: string | undefined
  bankAccountNumber?: string | undefined
  serviceProvider?: 'PLAID' | undefined
  providerResponse?:
    | { hostedlinkUrl?: string | undefined; linkToken?: string | undefined }
    | undefined
}
type WithdrawalInstructionResultDetails = {
  bankInstructionName?: string | undefined
  type?: string | undefined
  currency?: string | undefined
  bankRoutingNumber?: string | undefined
  bankAccountNumber?: string | undefined
}
type QueryWithdrawableCashEquityResult = {
  clientInstructionId: number
  instructionType:
    | 'ACH_INSTRUCTION'
    | 'CANCEL_INSTRUCTION'
    | 'COMPLEX_ASSET_TRANSFER'
    | 'DELETE_BANK_INSTRUCTION'
    | 'DEPOSIT'
    | 'DWAC'
    | 'EXTERNAL_POSITION_TRANSFER'
    | 'FOP'
    | 'QUERY_RECENT_INSTRUCTIONS'
    | 'QUERY_WITHDRAWABLE_FUNDS'
    | 'INTERNAL_POSITION_TRANSFER'
    | 'INTERNAL_CASH_TRANSFER'
    | 'MICRO_AMOUNT'
    | 'OPEN_BANKING_INSTRUCTION'
    | 'PREDEFINED_DESTINATION_INSTRUCTION'
    | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
    | 'WITHDRAWAL'
    | 'WITHDRAWAL_INSTRUCTION'
    | 'QUERY_IRA_CONTRIBUTIONS'
    | 'EDDA_INSTRUCTION'
    | 'QUERY_RECENT_RECURRING_EVENTS'
    | 'QUERY_RECURRING_INSTRUCTIONS'
    | 'QUERY_ACCOUNT_BALANCES'
    | 'QUERY_BANK_INSTRUCTION'
    | 'QUERY_WITHDRAWABLE_CASH_EQUITY'
    | 'ISA_TRANSFER'
  instructionStatus: 'PENDING' | 'REJECTED' | 'PROCESSED'
  instructionId: number
  ibReferenceId?: number | undefined
  description?: string | undefined
  details?: OpenBankingInstructionResultDetails | WithdrawalInstructionResultDetails | undefined
  depositDetails?:
    | {
        amount?: number | undefined
        currency?: string | undefined
        whenAvailable?: string | undefined
        openBanking?:
          | {
              serviceProvider?: 'PLAID' | undefined
              providerResponse?:
                | {
                    paymentId?: string | undefined
                    hostedlinkUrl?: string | undefined
                    linkToken?: string | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  error?: { errorCode: string; errorMessage: string } | undefined
  processedTimestamp?: string | undefined
  accountId: string
  currency: string
  withdrawableCashAmount: number
  availableEquityValue: number
}
type QueryWithdrawableCashEquityResponse = {
  status: number
  instructionSetId: number
  instructionResult?: QueryWithdrawableCashEquityResult | undefined
}
type InvalidArgument = { field: string; description?: string | undefined }
type MissingRequiredParameterResponse = {
  type: string
  title: string
  status: bigint
  invalidArguments?: InvalidArgument[] | undefined
}
type ForbiddenInstructionResponse = {
  type: string
  title: string
  status: bigint
  detail: string
  instructionSetId: bigint
  instructionResult: {
    clientInstructionId: number
    instructionType:
      | 'ACH_INSTRUCTION'
      | 'CANCEL_INSTRUCTION'
      | 'COMPLEX_ASSET_TRANSFER'
      | 'DELETE_BANK_INSTRUCTION'
      | 'DEPOSIT'
      | 'DWAC'
      | 'EXTERNAL_POSITION_TRANSFER'
      | 'FOP'
      | 'QUERY_RECENT_INSTRUCTIONS'
      | 'QUERY_WITHDRAWABLE_FUNDS'
      | 'INTERNAL_POSITION_TRANSFER'
      | 'INTERNAL_CASH_TRANSFER'
      | 'MICRO_AMOUNT'
      | 'OPEN_BANKING_INSTRUCTION'
      | 'PREDEFINED_DESTINATION_INSTRUCTION'
      | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
      | 'WITHDRAWAL'
      | 'WITHDRAWAL_INSTRUCTION'
      | 'QUERY_IRA_CONTRIBUTIONS'
      | 'EDDA_INSTRUCTION'
      | 'QUERY_RECENT_RECURRING_EVENTS'
      | 'QUERY_RECURRING_INSTRUCTIONS'
      | 'QUERY_ACCOUNT_BALANCES'
      | 'QUERY_BANK_INSTRUCTION'
      | 'QUERY_WITHDRAWABLE_CASH_EQUITY'
      | 'ISA_TRANSFER'
    instructionStatus: 'PENDING' | 'PROCESSED' | 'REJECTED' | 'PENDING_VERIFICATION'
    instructionId: number
    ibReferenceId?: number | undefined
    description?: string | undefined
    processedTimestamp?: string | undefined
    details?: OpenBankingInstructionResultDetails | WithdrawalInstructionResultDetails | undefined
    depositDetails?:
      | {
          amount?: number | undefined
          currency?: string | undefined
          whenAvailable?: string | undefined
          openBanking?:
            | {
                serviceProvider?: 'PLAID' | undefined
                providerResponse?:
                  | {
                      paymentId?: string | undefined
                      hostedlinkUrl?: string | undefined
                      linkToken?: string | undefined
                    }
                  | undefined
              }
            | undefined
        }
      | undefined
    error: { errorCode: string; errorMessage: string }
  }
}
type BusinessRejectResponse = {
  type: string
  title: string
  status: bigint
  instructionSetId: bigint
  instructionResult?:
    | {
        clientInstructionId: number
        instructionType:
          | 'ACH_INSTRUCTION'
          | 'CANCEL_INSTRUCTION'
          | 'COMPLEX_ASSET_TRANSFER'
          | 'DELETE_BANK_INSTRUCTION'
          | 'DEPOSIT'
          | 'DWAC'
          | 'EXTERNAL_POSITION_TRANSFER'
          | 'FOP'
          | 'QUERY_RECENT_INSTRUCTIONS'
          | 'QUERY_WITHDRAWABLE_FUNDS'
          | 'INTERNAL_POSITION_TRANSFER'
          | 'INTERNAL_CASH_TRANSFER'
          | 'MICRO_AMOUNT'
          | 'OPEN_BANKING_INSTRUCTION'
          | 'PREDEFINED_DESTINATION_INSTRUCTION'
          | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
          | 'WITHDRAWAL'
          | 'WITHDRAWAL_INSTRUCTION'
          | 'QUERY_IRA_CONTRIBUTIONS'
          | 'EDDA_INSTRUCTION'
          | 'QUERY_RECENT_RECURRING_EVENTS'
          | 'QUERY_RECURRING_INSTRUCTIONS'
          | 'QUERY_ACCOUNT_BALANCES'
          | 'QUERY_BANK_INSTRUCTION'
          | 'QUERY_WITHDRAWABLE_CASH_EQUITY'
          | 'ISA_TRANSFER'
        instructionStatus: 'PENDING' | 'PROCESSED' | 'REJECTED' | 'PENDING_VERIFICATION'
        instructionId: number
        ibReferenceId?: number | undefined
        description?: string | undefined
        processedTimestamp?: string | undefined
        details?:
          | OpenBankingInstructionResultDetails
          | WithdrawalInstructionResultDetails
          | undefined
        depositDetails?:
          | {
              amount?: number | undefined
              currency?: string | undefined
              whenAvailable?: string | undefined
              openBanking?:
                | {
                    serviceProvider?: 'PLAID' | undefined
                    providerResponse?:
                      | {
                          paymentId?: string | undefined
                          hostedlinkUrl?: string | undefined
                          linkToken?: string | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        error: { errorCode: string; errorMessage: string }
      }
    | undefined
}
type InternalServerErrorResponse = { type: string; title: string; status: bigint }
type TraditionalBankInstructionVerification = {
  clientInstructionId: number
  bankInstructionCode: 'USACH' | 'CAACH' | 'ACHUS' | 'WIRE'
  bankInstructionName: string
  accountId: string
  pendingInstructionId: number
  creditAmount1: number
  creditAmount2: number
}
type AchInstruction = {
  clientInstructionId: number
  bankInstructionCode: 'CAACH' | 'USACH'
  achType: 'DEBIT' | 'CREDIT' | 'DEBIT_CREDIT'
  bankInstructionName: string
  currency: string
  accountId: string
  clientAccountInfo: {
    bankRoutingNumber: string
    bankAccountNumber: string
    bankName: string
    bankAccountTypeCode: '0' | '1' | '2'
  }
}
type OpenBankingInstruction = {
  clientInstructionId: number
  currency: string
  accountId: string
  serviceProvider: 'PLAID'
  plaidOptions?:
    | {
        completionRedirectUri?: string | undefined
        linkDisplayName?: string | undefined
        isMobileApp?: boolean | undefined
      }
    | undefined
}
type WithdrawalBankInstruction = {
  clientInstructionId: number
  currency: string
  accountId: string
  sourceDepositInstruction: {
    name?: string | undefined
    type: 'OPEN_BANKING'
    ibReferenceId?: number | undefined
  }
}
type DeleteBankInstruction = {
  clientInstructionId: number
  accountId: string
  bankInstructionName: string
  bankInstructionMethod: 'WIRE' | 'ACH'
  currency: string
}
type PredefinedDestinationInstruction = {
  clientInstructionId: number
  bankInstructionName: string
  bankInstructionMethod: 'LVP' | 'SEPA' | 'WIRE' | 'ACH' | 'CPA'
  accountId: string
  currency: string
  financialInstitution: {
    name: string
    branchCode?: string | undefined
    branchCodeType?: 'BSB_AUD' | 'BANK_CODE_CAD' | 'NONE' | undefined
    identifier: string
    identifierType: 'BIC' | 'IFSC'
    clientAccountId: string
  }
}
type EddaInstruction = {
  clientInstructionId: number
  bankInstructionName: string
  currency: string
  accountId: string
  bankBranchCode: string
  bankAccountNumber: string
  bankClearingCode: string
  debtorIdentificationDocumentType: 'hkId' | 'passport' | 'chinaId' | 'hkMacaoEntryPermit'
}
type AsynchronousInstructionResponse = {
  status: number
  instructionSetId: number
  instructionResult?:
    | {
        clientInstructionId: number
        instructionType:
          | 'ACH_INSTRUCTION'
          | 'CANCEL_INSTRUCTION'
          | 'COMPLEX_ASSET_TRANSFER'
          | 'DELETE_BANK_INSTRUCTION'
          | 'DEPOSIT'
          | 'DWAC'
          | 'EXTERNAL_POSITION_TRANSFER'
          | 'FOP'
          | 'QUERY_RECENT_INSTRUCTIONS'
          | 'QUERY_WITHDRAWABLE_FUNDS'
          | 'INTERNAL_POSITION_TRANSFER'
          | 'INTERNAL_CASH_TRANSFER'
          | 'MICRO_AMOUNT'
          | 'OPEN_BANKING_INSTRUCTION'
          | 'PREDEFINED_DESTINATION_INSTRUCTION'
          | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
          | 'WITHDRAWAL'
          | 'WITHDRAWAL_INSTRUCTION'
          | 'QUERY_IRA_CONTRIBUTIONS'
          | 'EDDA_INSTRUCTION'
          | 'QUERY_RECENT_RECURRING_EVENTS'
          | 'QUERY_RECURRING_INSTRUCTIONS'
          | 'QUERY_ACCOUNT_BALANCES'
          | 'QUERY_BANK_INSTRUCTION'
          | 'QUERY_WITHDRAWABLE_CASH_EQUITY'
          | 'ISA_TRANSFER'
        instructionStatus: 'PENDING' | 'PROCESSED' | 'REJECTED' | 'PENDING_VERIFICATION'
        instructionId: number
        ibReferenceId?: number | undefined
        description?: string | undefined
        processedTimestamp?: string | undefined
        details?:
          | OpenBankingInstructionResultDetails
          | WithdrawalInstructionResultDetails
          | undefined
        depositDetails?:
          | {
              amount?: number | undefined
              currency?: string | undefined
              whenAvailable?: string | undefined
              openBanking?:
                | {
                    serviceProvider?: 'PLAID' | undefined
                    providerResponse?:
                      | {
                          paymentId?: string | undefined
                          hostedlinkUrl?: string | undefined
                          linkToken?: string | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type QueryBankInstruction = {
  clientInstructionId: number
  accountId: string
  bankInstructionMethod:
    | 'ACH'
    | 'WIRE'
    | 'USACH'
    | 'CAACH'
    | 'SEPA'
    | 'eDDA'
    | 'eGIRO'
    | 'OPEN_BANKING'
}
type QueryRecentRecurringEvents = {
  clientInstructionId: number
  ibReferenceId: number
  numberOfTransactions?: number | undefined
}
type QueryRecurringInstructions = { clientInstructionId: number; accountId: string }
type QueryRecentRecurringEventResult = {
  clientInstructionId: number
  instructionType:
    | 'ACH_INSTRUCTION'
    | 'CANCEL_INSTRUCTION'
    | 'COMPLEX_ASSET_TRANSFER'
    | 'DELETE_BANK_INSTRUCTION'
    | 'DEPOSIT'
    | 'DWAC'
    | 'EXTERNAL_POSITION_TRANSFER'
    | 'FOP'
    | 'QUERY_RECENT_INSTRUCTIONS'
    | 'QUERY_WITHDRAWABLE_FUNDS'
    | 'INTERNAL_POSITION_TRANSFER'
    | 'INTERNAL_CASH_TRANSFER'
    | 'MICRO_AMOUNT'
    | 'OPEN_BANKING_INSTRUCTION'
    | 'PREDEFINED_DESTINATION_INSTRUCTION'
    | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
    | 'WITHDRAWAL'
    | 'WITHDRAWAL_INSTRUCTION'
    | 'QUERY_IRA_CONTRIBUTIONS'
    | 'EDDA_INSTRUCTION'
    | 'QUERY_RECENT_RECURRING_EVENTS'
    | 'QUERY_RECURRING_INSTRUCTIONS'
    | 'QUERY_ACCOUNT_BALANCES'
    | 'QUERY_BANK_INSTRUCTION'
    | 'QUERY_WITHDRAWABLE_CASH_EQUITY'
    | 'ISA_TRANSFER'
  instructionStatus: 'PENDING' | 'PROCESSED' | 'REJECTED' | 'PENDING_VERIFICATION'
  instructionId: number
  ibReferenceId?: number | undefined
  description?: string | undefined
  processedTimestamp?: string | undefined
  details?: OpenBankingInstructionResultDetails | WithdrawalInstructionResultDetails | undefined
  depositDetails?:
    | {
        amount?: number | undefined
        currency?: string | undefined
        whenAvailable?: string | undefined
        openBanking?:
          | {
              serviceProvider?: 'PLAID' | undefined
              providerResponse?:
                | {
                    paymentId?: string | undefined
                    hostedlinkUrl?: string | undefined
                    linkToken?: string | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type QueryRecentRecurringEventResponse = {
  status: number
  instructionSetId: number
  instructionResult?: QueryRecentRecurringEventResult | undefined
}
type QueryBankInstructionResult = {
  clientInstructionId: number
  instructionType:
    | 'ACH_INSTRUCTION'
    | 'CANCEL_INSTRUCTION'
    | 'COMPLEX_ASSET_TRANSFER'
    | 'DELETE_BANK_INSTRUCTION'
    | 'DEPOSIT'
    | 'DWAC'
    | 'EXTERNAL_POSITION_TRANSFER'
    | 'FOP'
    | 'QUERY_RECENT_INSTRUCTIONS'
    | 'QUERY_WITHDRAWABLE_FUNDS'
    | 'INTERNAL_POSITION_TRANSFER'
    | 'INTERNAL_CASH_TRANSFER'
    | 'MICRO_AMOUNT'
    | 'OPEN_BANKING_INSTRUCTION'
    | 'PREDEFINED_DESTINATION_INSTRUCTION'
    | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
    | 'WITHDRAWAL'
    | 'WITHDRAWAL_INSTRUCTION'
    | 'QUERY_IRA_CONTRIBUTIONS'
    | 'EDDA_INSTRUCTION'
    | 'QUERY_RECENT_RECURRING_EVENTS'
    | 'QUERY_RECURRING_INSTRUCTIONS'
    | 'QUERY_ACCOUNT_BALANCES'
    | 'QUERY_BANK_INSTRUCTION'
    | 'QUERY_WITHDRAWABLE_CASH_EQUITY'
    | 'ISA_TRANSFER'
  instructionStatus: 'PENDING' | 'PROCESSED' | 'REJECTED' | 'PENDING_VERIFICATION'
  instructionId: number
  ibReferenceId?: number | undefined
  description?: string | undefined
  processedTimestamp?: string | undefined
  details?: OpenBankingInstructionResultDetails | WithdrawalInstructionResultDetails | undefined
  depositDetails?:
    | {
        amount?: number | undefined
        currency?: string | undefined
        whenAvailable?: string | undefined
        openBanking?:
          | {
              serviceProvider?: 'PLAID' | undefined
              providerResponse?:
                | {
                    paymentId?: string | undefined
                    hostedlinkUrl?: string | undefined
                    linkToken?: string | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type QueryBankInstructionResponse = {
  status: number
  instructionSetId: number
  instructionResult?: QueryBankInstructionResult | undefined
}
type QueryRecurringInstructionsResult = {
  clientInstructionId: number
  instructionType:
    | 'ACH_INSTRUCTION'
    | 'CANCEL_INSTRUCTION'
    | 'COMPLEX_ASSET_TRANSFER'
    | 'DELETE_BANK_INSTRUCTION'
    | 'DEPOSIT'
    | 'DWAC'
    | 'EXTERNAL_POSITION_TRANSFER'
    | 'FOP'
    | 'QUERY_RECENT_INSTRUCTIONS'
    | 'QUERY_WITHDRAWABLE_FUNDS'
    | 'INTERNAL_POSITION_TRANSFER'
    | 'INTERNAL_CASH_TRANSFER'
    | 'MICRO_AMOUNT'
    | 'OPEN_BANKING_INSTRUCTION'
    | 'PREDEFINED_DESTINATION_INSTRUCTION'
    | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
    | 'WITHDRAWAL'
    | 'WITHDRAWAL_INSTRUCTION'
    | 'QUERY_IRA_CONTRIBUTIONS'
    | 'EDDA_INSTRUCTION'
    | 'QUERY_RECENT_RECURRING_EVENTS'
    | 'QUERY_RECURRING_INSTRUCTIONS'
    | 'QUERY_ACCOUNT_BALANCES'
    | 'QUERY_BANK_INSTRUCTION'
    | 'QUERY_WITHDRAWABLE_CASH_EQUITY'
    | 'ISA_TRANSFER'
  instructionStatus: 'PENDING' | 'PROCESSED' | 'REJECTED' | 'PENDING_VERIFICATION'
  instructionId: number
  ibReferenceId?: number | undefined
  description?: string | undefined
  processedTimestamp?: string | undefined
  details?: OpenBankingInstructionResultDetails | WithdrawalInstructionResultDetails | undefined
  depositDetails?:
    | {
        amount?: number | undefined
        currency?: string | undefined
        whenAvailable?: string | undefined
        openBanking?:
          | {
              serviceProvider?: 'PLAID' | undefined
              providerResponse?:
                | {
                    paymentId?: string | undefined
                    hostedlinkUrl?: string | undefined
                    linkToken?: string | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type QueryRecurringInstructionsResponse = {
  instructionResult?: QueryRecurringInstructionsResult | undefined
}
type AsynchronousInstructionSetResponse = {
  status: bigint
  instructionSetId: number
  instructionResults?:
    | {
        status: bigint
        instructionSetId: number
        instructionResult: {
          clientInstructionId: number
          instructionType:
            | 'ACH_INSTRUCTION'
            | 'CANCEL_INSTRUCTION'
            | 'COMPLEX_ASSET_TRANSFER'
            | 'DELETE_BANK_INSTRUCTION'
            | 'DEPOSIT'
            | 'DWAC'
            | 'EXTERNAL_POSITION_TRANSFER'
            | 'FOP'
            | 'QUERY_RECENT_INSTRUCTIONS'
            | 'QUERY_WITHDRAWABLE_FUNDS'
            | 'INTERNAL_POSITION_TRANSFER'
            | 'INTERNAL_CASH_TRANSFER'
            | 'MICRO_AMOUNT'
            | 'OPEN_BANKING_INSTRUCTION'
            | 'PREDEFINED_DESTINATION_INSTRUCTION'
            | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
            | 'WITHDRAWAL'
            | 'WITHDRAWAL_INSTRUCTION'
            | 'QUERY_IRA_CONTRIBUTIONS'
            | 'EDDA_INSTRUCTION'
            | 'QUERY_RECENT_RECURRING_EVENTS'
            | 'QUERY_RECURRING_INSTRUCTIONS'
            | 'QUERY_ACCOUNT_BALANCES'
            | 'QUERY_BANK_INSTRUCTION'
            | 'QUERY_WITHDRAWABLE_CASH_EQUITY'
            | 'ISA_TRANSFER'
          instructionStatus: 'PENDING' | 'PROCESSED' | 'REJECTED' | 'PENDING_VERIFICATION'
          instructionId: number
          ibReferenceId?: number | undefined
          description?: string | undefined
          processedTimestamp?: string | undefined
          details?:
            | OpenBankingInstructionResultDetails
            | WithdrawalInstructionResultDetails
            | undefined
          depositDetails?:
            | {
                amount?: number | undefined
                currency?: string | undefined
                whenAvailable?: string | undefined
                openBanking?:
                  | {
                      serviceProvider?: 'PLAID' | undefined
                      providerResponse?:
                        | {
                            paymentId?: string | undefined
                            hostedlinkUrl?: string | undefined
                            linkToken?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            | undefined
        }
      }[]
    | undefined
}
type BulkMultiStatusResponse = {
  status: bigint
  instructionSetId: number
  instructionResults?: unknown[] | undefined
}
type SignedJwtEchoRequest = { iss?: string | undefined }
type EchoResponse = {
  requestMethod: 'GET' | 'POST' | 'PATCH' | 'PUT'
  securityPolicy: 'HTTPS' | 'SIGNED_JWT' | 'ENCRYPTED_JWE'
  queryParameters?: { [x: string]: unknown } | undefined
}
type InvalidAccessTokenResponse = {
  type: string
  title: string
  status: bigint
  detail?: string | undefined
}
type InsufficientScopeResponse = {
  type: string
  title: string
  status: bigint
  detail?: string | undefined
}
type TradingInstrumentRef =
  | { conid: number }
  | {
      tradingInstrumentDescription: {
        securityIdType: 'CUSIP' | 'ISIN' | 'CASH'
        securityId: string
        assetType: 'STK' | 'CASH' | 'UNKNOWN' | 'BILL' | 'BOND' | 'FUND' | 'OPT' | 'WAR'
      }
    }
type FopInstruction = {
  clientInstructionId: number
  direction: 'IN' | 'OUT'
  accountId: string
  contraBrokerAccountId: string
  contraBrokerDtcCode: string
  quantity: number
  tradingInstrument: TradingInstrumentRef
}
type DwacInstruction = {
  clientInstructionId: number
  direction: 'IN'
  accountId: string
  contraBrokerAccountId: string
  contraBrokerTaxId: string
  quantity: number
  tradingInstrument: TradingInstrumentRef
  accountTitle?: string | undefined
  referenceId?: string | undefined
}
type ContraBrokerInfoRef = {
  accountType: string
  brokerName: string
  depositoryId?: string | undefined
  brokerAccountId: string
  country: string
  contactName?: string | undefined
  contactEmail: string
  contactPhone: string
  accountTitle?: string | undefined
}
type NonDisclosedDetailRef = {
  tradeDate: string
  settleDate: string
  psetBic?: string | undefined
  reagDeagBic?: string | undefined
  buyerSellBic?: string | undefined
  memberAccountId?: string | undefined
  safeKeepingAccountId?: string | undefined
}
type ComplexAssetTransferInstruction = {
  clientInstructionId: number
  direction: 'IN' | 'OUT'
  accountId: string
  accountIdAtCurrentBroker?: string | undefined
  quantity: number
  tradingInstrument: TradingInstrumentRef
  contraBrokerInfo: ContraBrokerInfoRef
  nonDisclosedDetail?: NonDisclosedDetailRef | undefined
}
type ExternalPositionTransfer = {
  clientInstructionId: number
  type: 'FULL'
  subType: 'ACATS' | 'ATON'
  brokerId: string
  brokerName: string
  accountAtBroker: string
  sourceIRAType?: 'RO' | 'RI' | 'RT' | 'SP' | 'ED' | 'TH' | 'RH' | 'SH' | undefined
  accountId: string
  signature: string
}
type IsaTransferInstruction = {
  clientInstructionId: number
  accountId: string
  providerName: string
  accountAtProvider: string
  totalAmountTransferredInGBP: number
  authorizationType:
    | { [x: string]: unknown }
    | { [x: string]: unknown }
    | { [x: string]: unknown }
    | { [x: string]: unknown }
  signature: string
}
type RecurringInstructionDetailRef = {
  instructionName: string
  frequency: 'MONTHLY' | 'QUARTERLY' | 'YEARLY'
  startDate: string
  endDate?: string | undefined
}
type DepositFundsInstruction = {
  clientInstructionId: number
  accountId: string
  currency: string
  amount: number
  bankInstructionMethod: 'ACH' | 'WIRE' | 'eDDA' | 'OPEN_BANKING'
  openBanking?:
    | {
        serviceProvider: 'PLAID'
        plaidOptions?:
          | {
              completionRedirectUri?: string | undefined
              linkDisplayName?: string | undefined
              isMobileApp?: boolean | undefined
            }
          | undefined
      }
    | undefined
  sendingInstitution?: string | undefined
  identifier?: string | undefined
  specialInstruction?: string | undefined
  bankInstructionName?: string | undefined
  senderInstitutionName?: string | undefined
  iraDepositDetail?:
    | {
        iraContributionType:
          | 'ROLLOVER'
          | 'LATE_ROLLOVER'
          | 'DIRECT_ROLLOVER'
          | 'CONTRIBUTION'
          | 'SPOUSAL_CONTRIBUTION'
          | 'EMPLOYER_SEP_CONTRIBUTION'
        iraTaxYearType: 'CURRENT' | 'PRIOR'
        fromIraType:
          | 'NONE'
          | 'TRADITIONAL'
          | 'ROLLOVER'
          | 'ROTH'
          | 'SEP'
          | 'EDUCATION'
          | 'TRADITIONAL_INHERITED'
          | 'ROTH_INHERITED'
          | 'SEP_INHERITED'
          | 'RETIREMENT_SAVING_PLAN'
          | 'SPOUSAL_RETIREMENT_SAVING_PLAN'
          | 'TAX_FREE_SAVING_ACCOUNT'
      }
    | undefined
  recurringInstructionDetail?: RecurringInstructionDetailRef | undefined
}
type WithdrawFundsInstruction = {
  clientInstructionId: number
  accountId: string
  currency: string
  amount: number
  bankInstructionName: string
  bankInstructionMethod: 'ACH' | 'WIRE' | 'SEPA'
  dateTimeToOccur?: string | undefined
  iraWithdrawalDetail?:
    | {
        fedIncomeTaxPercentage: number
        stateIncomeTaxPercentage: number
        stateCd: string
        iraWithholdType:
          | 'DIRECT_ROLLOVER'
          | 'ROTH_DISTRIBUTION'
          | 'NORMAL'
          | 'EARLY'
          | 'DEATH'
          | 'EXCESS_CY'
          | 'EXCESS_PY'
          | 'EXCESS_SC'
      }
    | undefined
  recurringInstructionDetail?: RecurringInstructionDetailRef | undefined
}
type QueryWithdrawableFunds = {}
type QueryIRAContributions = { clientInstructionId: number; accountId: string; year: string }
type QueryWithdrawableAmountsInstructionResult = {
  clientInstructionId: number
  instructionType:
    | 'ACH_INSTRUCTION'
    | 'CANCEL_INSTRUCTION'
    | 'COMPLEX_ASSET_TRANSFER'
    | 'DELETE_BANK_INSTRUCTION'
    | 'DEPOSIT'
    | 'DWAC'
    | 'EXTERNAL_POSITION_TRANSFER'
    | 'FOP'
    | 'QUERY_RECENT_INSTRUCTIONS'
    | 'QUERY_WITHDRAWABLE_FUNDS'
    | 'INTERNAL_POSITION_TRANSFER'
    | 'INTERNAL_CASH_TRANSFER'
    | 'MICRO_AMOUNT'
    | 'OPEN_BANKING_INSTRUCTION'
    | 'PREDEFINED_DESTINATION_INSTRUCTION'
    | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
    | 'WITHDRAWAL'
    | 'WITHDRAWAL_INSTRUCTION'
    | 'QUERY_IRA_CONTRIBUTIONS'
    | 'EDDA_INSTRUCTION'
    | 'QUERY_RECENT_RECURRING_EVENTS'
    | 'QUERY_RECURRING_INSTRUCTIONS'
    | 'QUERY_ACCOUNT_BALANCES'
    | 'QUERY_BANK_INSTRUCTION'
    | 'QUERY_WITHDRAWABLE_CASH_EQUITY'
    | 'ISA_TRANSFER'
  instructionStatus: 'PENDING' | 'REJECTED' | 'PROCESSED'
  instructionId: number
  ibReferenceId?: number | undefined
  description?: string | undefined
  details?: OpenBankingInstructionResultDetails | WithdrawalInstructionResultDetails | undefined
  depositDetails?:
    | {
        amount?: number | undefined
        currency?: string | undefined
        whenAvailable?: string | undefined
        openBanking?:
          | {
              serviceProvider?: 'PLAID' | undefined
              providerResponse?:
                | {
                    paymentId?: string | undefined
                    hostedlinkUrl?: string | undefined
                    linkToken?: string | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  error?: { errorCode: string; errorMessage: string } | undefined
  processedTimestamp?: string | undefined
  accountId: string
  currency: string
  withdrawableAmount: number
  withdrawableAmountNoBorrow: number
  allowedTransferAmountToMaster: number
  allowedTransferAmountToMasterNoBorrow: number
}
type QueryWithdrawableAmountsResponse = {
  status: number
  instructionSetId: number
  instructionResult?: QueryWithdrawableAmountsInstructionResult | undefined
}
type QueryWithdrawableAmountsWithoutOriginHoldResult = {
  clientInstructionId: number
  instructionType:
    | 'ACH_INSTRUCTION'
    | 'CANCEL_INSTRUCTION'
    | 'COMPLEX_ASSET_TRANSFER'
    | 'DELETE_BANK_INSTRUCTION'
    | 'DEPOSIT'
    | 'DWAC'
    | 'EXTERNAL_POSITION_TRANSFER'
    | 'FOP'
    | 'QUERY_RECENT_INSTRUCTIONS'
    | 'QUERY_WITHDRAWABLE_FUNDS'
    | 'INTERNAL_POSITION_TRANSFER'
    | 'INTERNAL_CASH_TRANSFER'
    | 'MICRO_AMOUNT'
    | 'OPEN_BANKING_INSTRUCTION'
    | 'PREDEFINED_DESTINATION_INSTRUCTION'
    | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
    | 'WITHDRAWAL'
    | 'WITHDRAWAL_INSTRUCTION'
    | 'QUERY_IRA_CONTRIBUTIONS'
    | 'EDDA_INSTRUCTION'
    | 'QUERY_RECENT_RECURRING_EVENTS'
    | 'QUERY_RECURRING_INSTRUCTIONS'
    | 'QUERY_ACCOUNT_BALANCES'
    | 'QUERY_BANK_INSTRUCTION'
    | 'QUERY_WITHDRAWABLE_CASH_EQUITY'
    | 'ISA_TRANSFER'
  instructionStatus: 'PENDING' | 'REJECTED' | 'PROCESSED'
  instructionId: number
  ibReferenceId?: number | undefined
  description?: string | undefined
  details?: OpenBankingInstructionResultDetails | WithdrawalInstructionResultDetails | undefined
  depositDetails?:
    | {
        amount?: number | undefined
        currency?: string | undefined
        whenAvailable?: string | undefined
        openBanking?:
          | {
              serviceProvider?: 'PLAID' | undefined
              providerResponse?:
                | {
                    paymentId?: string | undefined
                    hostedlinkUrl?: string | undefined
                    linkToken?: string | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  error?: { errorCode: string; errorMessage: string } | undefined
  processedTimestamp?: string | undefined
  accountId: string
  currency: string
  withdrawableAmountWithoutOriginationHold: number
  withdrawableAmountWithoutOriginationHoldNoBorrow: number
}
type QueryWithdrawableAmountsWithoutOriginHoldResponse = {
  status: number
  instructionSetId: number
  instructionResult?: QueryWithdrawableAmountsWithoutOriginHoldResult | undefined
}
type SynchronousInstructionResponse = {
  status: number
  instructionSetId: number
  instructionResult?:
    | {
        clientInstructionId: number
        instructionType:
          | 'ACH_INSTRUCTION'
          | 'CANCEL_INSTRUCTION'
          | 'COMPLEX_ASSET_TRANSFER'
          | 'DELETE_BANK_INSTRUCTION'
          | 'DEPOSIT'
          | 'DWAC'
          | 'EXTERNAL_POSITION_TRANSFER'
          | 'FOP'
          | 'QUERY_RECENT_INSTRUCTIONS'
          | 'QUERY_WITHDRAWABLE_FUNDS'
          | 'INTERNAL_POSITION_TRANSFER'
          | 'INTERNAL_CASH_TRANSFER'
          | 'MICRO_AMOUNT'
          | 'OPEN_BANKING_INSTRUCTION'
          | 'PREDEFINED_DESTINATION_INSTRUCTION'
          | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
          | 'WITHDRAWAL'
          | 'WITHDRAWAL_INSTRUCTION'
          | 'QUERY_IRA_CONTRIBUTIONS'
          | 'EDDA_INSTRUCTION'
          | 'QUERY_RECENT_RECURRING_EVENTS'
          | 'QUERY_RECURRING_INSTRUCTIONS'
          | 'QUERY_ACCOUNT_BALANCES'
          | 'QUERY_BANK_INSTRUCTION'
          | 'QUERY_WITHDRAWABLE_CASH_EQUITY'
          | 'ISA_TRANSFER'
        instructionStatus: 'PENDING' | 'PROCESSED' | 'REJECTED' | 'PENDING_VERIFICATION'
        instructionId: number
        ibReferenceId?: number | undefined
        description?: string | undefined
        processedTimestamp?: string | undefined
        details?:
          | OpenBankingInstructionResultDetails
          | WithdrawalInstructionResultDetails
          | undefined
        depositDetails?:
          | {
              amount?: number | undefined
              currency?: string | undefined
              whenAvailable?: string | undefined
              openBanking?:
                | {
                    serviceProvider?: 'PLAID' | undefined
                    providerResponse?:
                      | {
                          paymentId?: string | undefined
                          hostedlinkUrl?: string | undefined
                          linkToken?: string | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type CSVResponse = {
  success: boolean
  requestId?: bigint | undefined
  message?: string | { [x: string]: unknown } | undefined
}
type CreateBrowserSessionRequest = { credential: string; ip: string }
type CreateBrowserSessionResponse = { active?: boolean | undefined; url?: string | undefined }
type CreateSessionRequest = {
  credential: string
  ip: string
  service?: string | undefined
  alternativeIps?: string[] | undefined
}
type CreateSessionResponse = {
  active?: boolean | undefined
  access_token: string
  token_type?: string | undefined
}
type StmtRequest = {
  accountId: string
  accountIds?: string[] | undefined
  startDate: string
  endDate: string
  multiAccountFormat?: string | undefined
  cryptoConsolIfAvailable?: boolean | undefined
  mimeType?: string | undefined
  language?: string | undefined
  gzip?: boolean | undefined
}
type GetStatementsResponse = {
  data?:
    | {
        dataType?: string | undefined
        encoding?: string | undefined
        value?: string | undefined
        mimeType?: string | undefined
        gzip?: boolean | undefined
        accept?: string | undefined
      }
    | undefined
}
type UnauthorizedAccessResponse = {
  type: string
  title: string
  status: bigint
  detail?: string | undefined
}
type TaxFormRequest = {
  accountId: string
  year: string
  type: string
  format: string
  gzip?: boolean | undefined
}
type TaxFormResponse = {
  data?:
    | {
        dataType?: string | undefined
        encoding?: string | undefined
        value?: string | undefined
        mimeType?: string | undefined
        gzip?: boolean | undefined
        accept?: string | undefined
      }
    | undefined
}
type TaxVoucherDTO = {
  requestId?: string | undefined
  custAcctId?: string | undefined
  corpactionId?: string | undefined
  requestState?: string | undefined
  fee?: number | undefined
  divAmount?: number | undefined
  withHeldAmount?: number | undefined
  quantity?: number | undefined
  countryCode?: string | undefined
  year?: bigint | undefined
  migratedCustAcctId?: string | undefined
}
type TaxVoucherJWTListWrapper = { taxVoucherRequests?: TaxVoucherDTO[] | undefined }
type TradeConfirmationRequest = {
  accountId: string
  startDate: string
  endDate: string
  mimeType?: string | undefined
}
type TradeConfirmationResponse = {
  data?:
    | {
        dataType?: string | undefined
        encoding?: string | undefined
        value?: string | undefined
        mimeType?: string | undefined
        gzip?: boolean | undefined
        accept?: string | undefined
      }
    | undefined
}
type TradingInstrumentV2 =
  | { conid: number }
  | {
      tradingInstrumentDescription: {
        securityIdType: 'CUSIP' | 'ISIN' | 'CASH'
        securityId: string
        assetType: 'STK' | 'CASH' | 'UNKNOWN' | 'BILL' | 'BOND' | 'FUND' | 'OPT' | 'WAR'
      }
    }
type FopInstructionV2 = {
  clientInstructionId: number
  direction: 'IN' | 'OUT'
  accountId: string
  contraBrokerAccountId: string
  contraBrokerDtcCode: string
  currency: string
  positions: TradingInstrumentV2[]
}
type DwacInstructionV2 = {
  clientInstructionId: number
  direction: 'IN'
  accountId: string
  contraBrokerAccountId: string
  contraBrokerTaxId: string
  currency: string
  positions: TradingInstrumentV2[]
  accountTitle?: string | undefined
  referenceId?: string | undefined
}
type ComplexAssetTransferInstructionV2 = {
  clientInstructionId: number
  direction: 'IN' | 'OUT'
  accountId: string
  accountIdAtCurrentBroker?: string | undefined
  currency: string
  positions: TradingInstrumentV2[]
  contraBrokerInfo: ContraBrokerInfoRef
  nonDisclosedDetail?: NonDisclosedDetailRef | undefined
}
type AcatsPositionV2 =
  | { conid: number }
  | {
      tradingInstrumentDescription: {
        securityIdType: 'CUSIP' | 'ISIN' | 'CASH'
        securityId: string
        assetType: 'STK' | 'CASH' | 'UNKNOWN' | 'BILL' | 'BOND' | 'FUND' | 'OPT' | 'WAR'
      }
    }
type CashAmountV2 = {
  currency: string
  amount?: number | undefined
  type?: 'BALANCE' | 'MARGIN_LOAN' | undefined
  transferAll?: boolean | undefined
}
type ExternalPositionTransferV2 = {
  clientInstructionId: number
  type: 'FULL' | 'PARTIAL'
  subType: 'ACATS' | 'ATON'
  brokerId: string
  brokerName: string
  accountAtBroker: string
  sourceIRAType?: 'RO' | 'RI' | 'RT' | 'SP' | 'ED' | 'TH' | 'RH' | 'SH' | undefined
  accountId: string
  signature: string
  positions: AcatsPositionV2[]
  cash?: CashAmountV2[] | undefined
}
type TokenRequest = {
  scope?: string | undefined
  clientAuthenticationMethod?:
    | 'none'
    | 'private_key_jwt'
    | 'client_secret_basic'
    | 'client_secret_post'
    | undefined
  clientId?: string | undefined
  clientSecret?: string | undefined
  clientAssertion?: string | undefined
  clientAssertionType?: string | undefined
}
type TokenResponse = {
  access_token?: string | undefined
  refresh_token?: string | undefined
  id_token?: string | undefined
  token_type?: string | undefined
  scope?: string | undefined
  expires_in?: bigint | undefined
}
type ModelPresetsResponse = {
  avoidNegativeCashInIndependent?: boolean | undefined
  closeDivestIndependentPosition?: boolean | undefined
  fullyInvestExistingLongPositions?: boolean | undefined
  keepModelOpen?: boolean | undefined
  preferCrossWithIndependent?: boolean | undefined
  preferTransferFromIndependent?: boolean | undefined
  reqID?: bigint | undefined
  roundAllocationQuantityToExchangeBoardLot?: boolean | undefined
  subscriptionStatus?: bigint | undefined
  useNonBaseCcy?: boolean | undefined
  useToleranceRange?: boolean | undefined
}
type ErrorOnlyResponse = { error?: string | undefined }
type ErrorResponse2 = { error?: string | undefined; statusCode?: bigint | undefined }
type TwsInvestDivestCashTransfer = {
  account?: string | undefined
  amt?: string | undefined
  batchNumber?: bigint | undefined
  ccy?: string | undefined
  destinationModel?: string | undefined
  sourceModel?: string | undefined
}
type CashAnalyzerResponse = {
  cashTransfers?: TwsInvestDivestCashTransfer[] | undefined
  error?: (string | null) | undefined
  fxconvorders?: { [x: string]: unknown }[] | undefined
  marginWarning?: boolean | undefined
  reqID?: bigint | undefined
  subscriptionStatus?: bigint | undefined
  success?: boolean | undefined
  transfersInstructionId?: bigint | undefined
}
type GetInvestedAccountsSummary = {
  accountList?:
    | {
        account?: string | undefined
        accountModelNlv?: string | undefined
        accountOtherModelsNlv?: string | undefined
        alias?: string | undefined
        baseCcyAccount?: string | undefined
        baseCcyAccountPrecision?: string | undefined
        exchangeRate?: number | undefined
        cashInIndependentNlv?: string | undefined
        positionsInIndependentNlv?: string | undefined
        nlv?: string | undefined
      }[]
    | undefined
  baseCcyMaster?: string | undefined
  baseCcyMasterPrecision?: string | undefined
  model?: string | undefined
  reqID?: bigint | undefined
  subscriptionStatus?: 0n | 1n | undefined
}
type ModelListResponse = {
  baseCcy?: string | undefined
  masterAccount?: string | undefined
  models?:
    | {
        bootstrapped?: boolean | undefined
        customIndex?: boolean | undefined
        desc?: string | undefined
        isStatic?: boolean | undefined
        mismatch?: boolean | undefined
        model?: string | undefined
        nlv?: number | undefined
        numAccounts?: bigint | undefined
      }[]
    | undefined
  reqID?: bigint | undefined
  subscriptionStatus?: bigint | undefined
}
type ModelPositionResponse = {
  cash?:
    | {
        actual?: number | undefined
        ccy?: string | undefined
        exchangeRate?: number | undefined
        instrumentImbalance?: number | undefined
        mv?: number | undefined
        target?: number | undefined
      }[]
    | undefined
  mismatched?: boolean | undefined
  model?: string | undefined
  nlv?: number | undefined
  positionList?:
    | {
        actual?: number | undefined
        actualRangeMax?: number | undefined
        actualRangeMin?: number | undefined
        ccy?: string | undefined
        conid?: bigint | undefined
        dlv?: number | undefined
        exchangeRate?: bigint | undefined
        flags?: bigint | undefined
        instrumentImbalance?: number | undefined
        instrument?: string | undefined
        mismatchType?: number | undefined
        mv?: number | undefined
        position?: number | undefined
        target?: number | undefined
      }[]
    | undefined
  positionTs?: bigint | undefined
  reqID?: bigint | undefined
  stkOnly?: boolean | undefined
  subscriptionStatus?: bigint | undefined
  totalDlv?: number | undefined
  totalMv?: number | undefined
}
type RebalanceSubscriptionResponse = {
  reqID?: string | undefined
  subscriptionKey?: string | undefined
  subscriptionStatus?: bigint | undefined
}
type RebalanceAllocationTotal = {
  conid?: bigint | undefined
  secType?: string | undefined
  totalBuy?: (string | null) | undefined
  totalCashQtyBuy?: (string | null) | undefined
  totalCashQtySell?: (string | null) | undefined
  totalSell?: (string | null) | undefined
}
type RebalanceAllocation = {
  account?: string | undefined
  batchNumber?: bigint | undefined
  cashQty?: string | undefined
  closePosition?: boolean | undefined
  conid?: bigint | undefined
  fxHedgeConid?: (bigint | null) | undefined
  fxHedgeQuantity?: (string | null) | undefined
  isCashQty?: boolean | undefined
  quantity?: string | undefined
  secType?: string | undefined
}
type RebalanceAllocationPreview = {
  accountsCanTradeFractions?: string[] | undefined
  allocationTotals?: RebalanceAllocationTotal[] | undefined
  allocations?: RebalanceAllocation[] | undefined
  baseCcy?: string | undefined
  contractsAllocEnabled?: bigint[] | undefined
  contractsCashQtyEnabled?: bigint[] | undefined
  contractsFracEligible?: bigint[] | undefined
  errors?: string[] | undefined
  miPositionTransfers?: { [x: string]: unknown }[] | undefined
  model?: string | undefined
  positionTransfers?: { [x: string]: unknown }[] | undefined
  reqID?: bigint | undefined
  subscriptionStatus?: bigint | undefined
  transfersInstructionId?: string | undefined
  warnings?: string[] | undefined
}
type ModelSummaryResponse = {
  bootstrapped?: boolean | undefined
  customIndex?: boolean | undefined
  desc?: string | undefined
  isStatic?: boolean | undefined
  mismatch?: boolean | undefined
  model?: string | undefined
  nlv?: number | undefined
  numAccounts?: bigint | undefined
  reqID?: bigint | undefined
  subscriptionStatus?: bigint | undefined
}
type TwsInvestDivestAllocation = {
  account?: string | undefined
  batchNumber?: bigint | undefined
  cashQty?: string | undefined
  closePosition?: boolean | undefined
  conid?: bigint | undefined
  isCashQty?: boolean | undefined
  model?: string | undefined
  price?: string | undefined
  quantity?: string | undefined
  relatedRequestAccount?: string | undefined
  relatedRequestID?: string | undefined
  secType?: string | undefined
}
type TwsInvestDivestResponse = {
  allocations?: TwsInvestDivestAllocation[] | undefined
  cashTransfers?: TwsInvestDivestCashTransfer[] | undefined
  errors?: (string[] | null) | undefined
  positionTransfers?: { [x: string]: unknown }[] | undefined
  reqID?: bigint | undefined
  subscriptionStatus?: bigint | undefined
  transfersInstructionId?: bigint | undefined
}
type FyiEnableDeviceOption = {
  deviceName?: string | undefined
  deviceId?: string | undefined
  uiName?: string | undefined
  enabled?: boolean | undefined
}
type FyiVT = { V?: bigint | undefined; T?: bigint | undefined }
type Typecodes =
  | 'BA'
  | 'CA'
  | 'DA'
  | 'EA'
  | 'MF'
  | 'OE'
  | 'PR'
  | 'SE'
  | 'SG'
  | 'SM'
  | 'T2'
  | 'TO'
  | 'UA'
  | 'M8'
  | 'PS'
  | 'DL'
  | 'PT'
  | 'CB'
  | 'MS'
  | 'TD'
  | 'ST'
  | 'TI'
  | 'CT'
type SetAccountResponse = { set?: boolean | undefined; acctId?: string | undefined }
type AllocationMethod = 'A' | 'E' | 'N' | 'C' | 'P' | 'R' | 'S'
type AllocationGroups = {
  data?:
    | {
        allocation_method?: AllocationMethod | undefined
        size?: bigint | undefined
        name?: string | undefined
      }[]
    | undefined
}
type AllocationGroup = {
  name?: string | undefined
  accounts?: { amount?: bigint | undefined; name?: string | undefined }[] | undefined
  default_method?: AllocationMethod | undefined
}
type Presets = {
  group_auto_close_positions?: boolean | undefined
  default_method_for_all?: 'AvailableEquity' | 'E' | 'N' | 'C' | 'P' | 'R' | 'S' | undefined
  profiles_auto_close_positions?: boolean | undefined
  strict_credit_check?: boolean | undefined
  group_proportional_allocation?: boolean | undefined
}
type AlertCreationRequest = {
  orderId?: bigint | undefined
  alertName: string
  alertMessage: string
  alertRepeatable: 0n | 1n
  email?: string | undefined
  expireTime?: string | undefined
  iTWSOrdersOnly?: bigint | undefined
  outsideRth: 0n | 1n
  sendMessage?: 0n | 1n | undefined
  showPopup?: bigint | undefined
  tif: 'GTC' | 'GTD'
  conditions: {
    conidex: string
    logicBind: 'a' | 'o' | 'n'
    operator: '>=' | '<=' | '>' | '<' | '=='
    timeZone?: string | undefined
    triggerMethod: string
    type: 1n | 3n | 4n | 5n | 6n | 7n | 8n | 9n
    value: string
  }[]
}
type AlertCreationResponse = {
  request_id?: bigint | undefined
  order_id?: bigint | undefined
  success?: boolean | undefined
  text?: string | undefined
  order_status?: string | undefined
  warning_message?: string | undefined
}
type AlertActivationRequest = { alertId: bigint; alertActive: 1n | 0n }
type AlertActivationResponse = {
  request_id?: bigint | undefined
  order_id?: bigint | undefined
  success?: boolean | undefined
  text?: string | undefined
  failure_list?: string | undefined
}
type SingleOrderSubmissionRequest = {
  acctId?: string | undefined
  conid: bigint
  conidex?: string | undefined
  secType?: string | undefined
  cOID?: string | undefined
  parentId?: string | undefined
  listingExchange?: string | undefined
  isSingleGroup?: boolean | undefined
  outsideRTH?: boolean | undefined
  allOrNone?: boolean | undefined
  auxPrice?: number | undefined
  ticker?: string | undefined
  trailingAmt?: number | undefined
  trailingType?: 'amt' | '%' | undefined
  referrer?: string | undefined
  cashQty?: number | undefined
  useAdaptive?: boolean | undefined
  isCcyConv?: boolean | undefined
  orderType: string
  price?: number | undefined
  side: 'BUY' | 'SELL'
  tif: 'DAY' | 'IOC' | 'GTC' | 'OPG' | 'PAX'
  quantity: number
  strategy?: string | undefined
  strategyParameters?: { PLACEHOLDER?: string | undefined } | undefined
  extOperator?: string | undefined
  manualIndicator?: boolean | undefined
  taxOptimizerId?: string | undefined
  jsonPayload?:
    | {
        allocation_profile?:
          | {
              alloc_type?: 'SHARE' | 'CASH' | undefined
              allocations?:
                | { account?: string | undefined; amount?: number | undefined }[]
                | undefined
            }
          | undefined
      }
    | undefined
}
type OrderSubmitSuccess = {
  order_id?: string | undefined
  order_status?: string | undefined
  encrypt_message?: string | undefined
}[]
type OrderSubmitError = { error?: string | undefined }
type OrderReplyMessage = {
  id?: string | undefined
  isSuppressed?: boolean | undefined
  message?: string[] | undefined
  messageIds?: string[] | undefined
}[]
type AdvancedOrderReject = {
  orderId?: bigint | undefined
  reqId?: string | undefined
  dismissable?: unknown[] | undefined
  text?: string | undefined
  options?: string[] | undefined
  type?: string | undefined
  messageId?: string | undefined
  prompt?: boolean | undefined
}
type OrderCancelSuccess = {
  msg?: 'Request was submitted' | undefined
  order_id?: bigint | undefined
  conid?: string | undefined
  account?: (string | null) | undefined
}
type OrdersSubmissionRequest = { orders?: SingleOrderSubmissionRequest[] | undefined }
type OrderPreview = {
  amount?:
    | { amount?: string | undefined; commission?: string | undefined; total?: string | undefined }
    | undefined
  equity?:
    | { current?: string | undefined; change?: string | undefined; after?: string | undefined }
    | undefined
  initial?:
    | { current?: string | undefined; change?: string | undefined; after?: string | undefined }
    | undefined
  maintenance?:
    | { current?: string | undefined; change?: string | undefined; after?: string | undefined }
    | undefined
  position?:
    | { current?: string | undefined; change?: string | undefined; after?: string | undefined }
    | undefined
  warn?: string | undefined
  error?: (string | null) | undefined
}
type BrokerageSessionInitRequest = { publish?: boolean | undefined; compete?: boolean | undefined }
type BrokerageSessionStatus = {
  authenticated?: boolean | undefined
  established?: boolean | undefined
  competing?: boolean | undefined
  connected?: boolean | undefined
  message?: string | undefined
  MAC?: string | undefined
  serverInfo?: { serverName?: string | undefined; serverVersion?: string | undefined } | undefined
  hardware_info?: string | undefined
  fail?: string | undefined
}
type ContractRules = {
  algoEligible?: boolean | undefined
  allOrNoneEligible?: boolean | undefined
  costReport?: boolean | undefined
  canTradeAcctIds?: string[] | undefined
  error?: (string | null) | undefined
  orderTypes?:
    | (
        | 'limit'
        | 'midprice'
        | 'market'
        | 'stop'
        | 'stop_limit'
        | 'mit'
        | 'lit'
        | 'trailing_stop'
        | 'trailing_stop_limit'
        | 'relative'
        | 'marketonclose'
        | 'limitonclose'
      )[]
    | undefined
  ibAlgoTypes?:
    | (
        | 'limit'
        | 'stop_limit'
        | 'lit'
        | 'trailing_stop_limit'
        | 'relative'
        | 'marketonclose'
        | 'limitonclose'
      )[]
    | undefined
  fraqTypes?:
    | (
        | 'limit'
        | 'market'
        | 'stop'
        | 'stop_limit'
        | 'mit'
        | 'lit'
        | 'trailing_stop'
        | 'trailing_stop_limit'
      )[]
    | undefined
  forceOrderPreview?: boolean | undefined
  cqtTypes?:
    | (
        | 'limit'
        | 'market'
        | 'stop'
        | 'stop_limit'
        | 'mit'
        | 'lit'
        | 'trailing_stop'
        | 'trailing_stop_limit'
      )[]
    | undefined
  orderDefaults?: { LMT?: { LP?: string | undefined } | undefined } | undefined
  orderTypesOutside?:
    | ('limit' | 'stop_limit' | 'lit' | 'trailing_stop_limit' | 'relative')[]
    | undefined
  defaultSize?: bigint | undefined
  cashSize?: bigint | undefined
  sizeIncrement?: bigint | undefined
  tifTypes?: string[] | undefined
  tifDefaults?:
    | {
        TIF?: string | undefined
        SIZE?: string | undefined
        DEFAULT_ACCT?: string | undefined
        PMALGO?: boolean | undefined
      }
    | undefined
  limitPrice?: number | undefined
  stopPrice?: number | undefined
  orderOrigination?: (string | null) | undefined
  preview?: boolean | undefined
  displaySize?: (bigint | null) | undefined
  fraqInt?: bigint | undefined
  cashCcy?: string | undefined
  cashQtyIncr?: bigint | undefined
  priceMagnifier?: (bigint | null) | undefined
  negativeCapable?: boolean | undefined
  incrementType?: bigint | undefined
  incrementRules?: { lowerEdge?: bigint | undefined; increment?: bigint | undefined }[] | undefined
  hasSecondary?: boolean | undefined
  modTypes?: unknown[] | undefined
  increment?: number | undefined
  incrementDigits?: bigint | undefined
}
type OrderReplyNotFound = { error?: string | undefined }
type IserverScannerRunRequest = {
  instrument?: string | undefined
  type?: string | undefined
  location?: string | undefined
  filter?:
    | { code?: string | undefined; value?: string | bigint | boolean | number | undefined }[]
    | undefined
}
type IserverScannerRunResponse = {
  contracts?:
    | {
        server_id?: string | undefined
        column_name?: string | undefined
        symbol?: string | undefined
        conidex?: string | undefined
        con_id?: bigint | undefined
        available_chart_periods?: string | undefined
        company_name?: string | undefined
        contract_description_1?: string | undefined
        listing_exchange?: string | undefined
        sec_type?: string | undefined
      }[]
    | undefined
  scan_data_column_name?: string | undefined
}
type SecdefSearchResponse = {
  bondid?: bigint | undefined
  conid?: string | undefined
  companyHeader?: string | undefined
  companyName?: (string | null) | undefined
  symbol?: string | undefined
  description?: string | undefined
  restricted?: (boolean | null) | undefined
  fop?: (string | null) | undefined
  opt?: (string | null) | undefined
  war?: (string | null) | undefined
  sections?:
    | { secType?: string | undefined; months?: string | undefined; exchange?: string | undefined }[]
    | undefined
  issuers?: { id?: string | undefined; name?: string | undefined }[] | undefined
}[]
type SingleWatchlistEntry = {
  ST?: 'STK' | 'OPT' | 'FUT' | 'BOND' | 'FUND' | 'WAR' | 'CASH' | 'CRYPTO' | undefined
  C?: string | undefined
  conid?: bigint | undefined
  name?: string | undefined
  fullName?: string | undefined
  assetClass?: 'STK' | 'OPT' | 'FUT' | 'BOND' | 'FUND' | 'WAR' | 'CASH' | 'CRYPTO' | undefined
  ticker?: string | undefined
  chineseName?: string | undefined
}
type SingleWatchlist = {
  id?: string | undefined
  hash?: string | undefined
  name?: string | undefined
  readOnly?: boolean | undefined
  instruments?: SingleWatchlistEntry[] | undefined
}
type WatchlistDeleteSuccess = {
  data?: { deleted?: string | undefined } | undefined
  action?: 'context' | undefined
  MID?: string | undefined
}
type AllocationResponse = {
  id?: string | undefined
  currency?: string | undefined
  realtime?: boolean | undefined
  date?: string | undefined
  allocations?:
    | {
        [x: string]: {
          long?:
            | {
                total?: { nav?: number | undefined; weight?: number | undefined } | undefined
                items?:
                  | {
                      id?: string | undefined
                      name?: string | undefined
                      nav?: number | undefined
                      weight?: number | undefined
                      color?: string | undefined
                    }[]
                  | undefined
              }
            | undefined
          short?:
            | {
                total?: { nav?: number | undefined; weight?: number | undefined } | undefined
                items?:
                  | {
                      id?: string | undefined
                      name?: string | undefined
                      nav?: number | undefined
                      weight?: number | undefined
                      color?: string | undefined
                    }[]
                  | undefined
              }
            | undefined
        }
      }
    | undefined
  excluded?: string[] | undefined
  warning?: string | undefined
}
type DetailedContractInformation = {
  currencyType?: string | undefined
  rc?: bigint | undefined
  view?: string[] | undefined
  nd?: bigint | undefined
  id?: string | undefined
  included?: string[] | undefined
  pm?: string | undefined
}
type PerformanceResponse = {
  currencyType?: string | undefined
  rc?: bigint | undefined
  nav?:
    | {
        data?:
          | {
              idType?: string | undefined
              navs?: unknown[] | undefined
              start?: string | undefined
              end?: string | undefined
              id?: string | undefined
              startNAV?: { date?: string | undefined; val?: bigint | undefined } | undefined
              baseCurrency?: string | undefined
            }[]
          | undefined
        freq?: string | undefined
        dates?: unknown[] | undefined
      }
    | undefined
  nd?: bigint | undefined
  cps?:
    | {
        data?:
          | {
              idType?: string | undefined
              start?: string | undefined
              end?: string | undefined
              returns?: unknown[] | undefined
              id?: string | undefined
              baseCurrency?: string | undefined
            }[]
          | undefined
        freq?: string | undefined
        dates?: unknown[] | undefined
      }
    | undefined
  tpps?:
    | {
        data?:
          | {
              idType?: string | undefined
              start?: string | undefined
              end?: string | undefined
              returns?: unknown[] | undefined
              id?: string | undefined
              baseCurrency?: string | undefined
            }[]
          | undefined
        freq?: string | undefined
        dates?: unknown[] | undefined
      }
    | undefined
  id?: string | undefined
  included?: unknown[] | undefined
  pm?: string | undefined
}
type TransactionsResponse = {
  rc?: bigint | undefined
  nd?: bigint | undefined
  rpnl?:
    | {
        data?: unknown[] | undefined
        items?:
          | {
              date?: string | undefined
              cur?: string | undefined
              fxRate?: bigint | undefined
              side?: 'L' | 'G' | undefined
              acctid?: string | undefined
              amt?: string | undefined
              conid?: string | undefined
            }
          | undefined
        amt?: string | undefined
      }
    | undefined
  currency?: string | undefined
  from?: bigint | undefined
  id?: string | undefined
  to?: bigint | undefined
  includesRealTime?: boolean | undefined
  transactions?:
    | {
        date?: string | undefined
        cur?: string | undefined
        fxRate?: bigint | undefined
        pr?: bigint | undefined
        qty?: bigint | undefined
        acctid?: string | undefined
        amt?: bigint | undefined
        conid?: bigint | undefined
        type?: string | undefined
        desc?: string | undefined
      }[]
    | undefined
}
type SuccessfulTickleResponse = {
  session?: string | undefined
  ssoExpires?: bigint | undefined
  collission?: boolean | undefined
  userId?: bigint | undefined
  hmds?: { error?: string | undefined; authStatus?: unknown[] | undefined } | undefined
  iserver?: { authStatus?: BrokerageSessionStatus | undefined } | undefined
}
type FailedTickleResponse = { error?: string | undefined }
type TickleResponse = SuccessfulTickleResponse | FailedTickleResponse
type AccountStatusResponse = {
  dateOpened?: string | undefined
  dateStarted?: string | undefined
  dateClosed?: string | undefined
  accountId?: string | undefined
  status?: string | undefined
  description?: string | undefined
  masterAccountId?: string | undefined
  adminAccountId?: string | undefined
  state?: string | undefined
  message?: string | undefined
}
type AmRequestStatusResponse = {
  requestId?: string | undefined
  requestType?: string | undefined
  status?: string | undefined
  message?: string | undefined
  acctId?: string | undefined
}
type LoginMessageRequest = {
  startDate: string
  endDate: string
  offset?: bigint | undefined
  limit?: bigint | undefined
  status?:
    | 'N'
    | 'O'
    | 'P'
    | 'C'
    | 'A'
    | 'E'
    | 'F'
    | 'I'
    | 'J'
    | 'L'
    | 'M'
    | 'R'
    | 'W'
    | 'Q'
    | undefined
  type?: string | undefined
}
type LoginMessage = {
  recordDate?: string | undefined
  id?: bigint | undefined
  username?: string | undefined
  messageType?: string | undefined
  contentId?: bigint | undefined
  state?: string | undefined
  description?: string | undefined
  tasks?: bigint[] | undefined
}
type LoginMessageResponse = {
  accountId?: string | undefined
  clearingStatus?: string | undefined
  clearingStatusDescription?: string | undefined
  loginMessages?: LoginMessage[] | undefined
  loginMessagePresent?: boolean | undefined
}
type AccountStatusRequest = {
  startDate: string
  endDate: string
  offset?: bigint | undefined
  limit?: bigint | undefined
  status?:
    | 'N'
    | 'O'
    | 'P'
    | 'C'
    | 'A'
    | 'E'
    | 'F'
    | 'I'
    | 'J'
    | 'L'
    | 'M'
    | 'R'
    | 'W'
    | 'Q'
    | undefined
}
type AccountStatusBulkResponse = {
  accounts?: AccountStatusResponse[] | undefined
  offset?: bigint | undefined
  limit?: bigint | undefined
  total?: bigint | undefined
}
type AccountData = {
  accountId?: string | undefined
  masterAccountId?: string | undefined
  mainAccount?: string | undefined
  sourceAccountId?: string | undefined
  primaryUser?: string | undefined
  clearingStatus?: string | undefined
  clearingStatusDescription?: string | undefined
  stateCode?: string | undefined
  optionLevel?: bigint | undefined
  baseCurrency?: string | undefined
  dateBegun?: string | undefined
  dateApproved?: string | undefined
  dateOpened?: string | undefined
  dateFunded?: string | undefined
  dateClosed?: string | undefined
  dateLinked?: string | undefined
  dateDelinked?: string | undefined
  accountTitle?: string | undefined
  officialTitle?: string | undefined
  accountAlias?: string | undefined
  emailAddress?: string | undefined
  margin?: string | undefined
  applicantType?: string | undefined
  subType?: string | undefined
  stockYieldProgram?: { [x: string]: string } | undefined
  feeTemplate?: { [x: string]: string } | undefined
  capabilities?: { [x: string]: string[] } | undefined
  limitedOptionTrading?: string | undefined
  investmentObjectives?: string[] | undefined
  dividendReinvestment?: { [x: string]: boolean } | undefined
  externalId?: string | undefined
  mifidCategory?: string | undefined
  mifirStatus?: string | undefined
  equity?: number | undefined
  household?: string | undefined
  propertyProfile?: string | undefined
  processType?: string | undefined
  riskScore?: bigint | undefined
  class_action_program?: string | undefined
  trustType?: string | undefined
  orgType?: string | undefined
  businessDescription?: string | undefined
  usTaxPurposeType?: string | undefined
  tradeIntentionType?: string | undefined
  registeredAddress?: { [x: string]: string } | undefined
  mailing?: { [x: string]: string } | undefined
  countryOfCorporation?: string | undefined
  lei?: string | undefined
  taxIds?: { [x: string]: string }[] | undefined
  taxTreatyDetails?: { [x: string]: string }[] | undefined
  signatures?: string[] | undefined
}
type IndividualIRABene = {
  firstName?: string | undefined
  lastName?: string | undefined
  dateOfBirth?: string | undefined
  type?: string | undefined
  identification?: { [x: string]: string } | undefined
  location?: { [x: string]: string } | undefined
  relationship?: string | undefined
  ownership?: bigint | undefined
  perStripes?: string | undefined
}
type EntityIRABene = {
  name?: string | undefined
  entityType?: string | undefined
  type?: string | undefined
  location?: { [x: string]: string } | undefined
  articleOfWill?: string | undefined
}
type RestrictionInfo = {
  id?: bigint | undefined
  byIB?: boolean | undefined
  name?: string | undefined
}
type AccountDetailsResponse = {
  error?: ErrorResponse | undefined
  hasError?: boolean | undefined
  errorDescription?: string | undefined
  account?: AccountData | undefined
  associatedPersons?: AssociatedPerson[] | undefined
  associatedEntities?: AssociatedEntity[] | undefined
  withHoldingStatement?: { [x: string]: string } | undefined
  marketData?: { [x: string]: string }[] | undefined
  financialInformation?: { [x: string]: { [x: string]: unknown } } | undefined
  sourcesOfWealth?: { [x: string]: { [x: string]: unknown } }[] | undefined
  tradeBundles?: string[] | undefined
  individualIRABeneficiaries?: IndividualIRABene[] | undefined
  entityIRABeneficiaries?: EntityIRABene[] | undefined
  decedents?: { [x: string]: string }[] | undefined
  restrictions?: RestrictionInfo[] | undefined
}
type Au10TixDetailResponse = {
  startDate?: string | undefined
  expiryDate?: string | undefined
  error?: ErrorResponse | undefined
  hasError?: boolean | undefined
  errorDescription?: string | undefined
  url?: string | undefined
  externalId?: string | undefined
  entityId?: bigint | undefined
  state?: string | undefined
}
type InstructionPollingResponse = {
  status: number
  instructionSetId: number
  instructionResult?:
    | {
        clientInstructionId: number
        instructionType:
          | 'ACH_INSTRUCTION'
          | 'CANCEL_INSTRUCTION'
          | 'COMPLEX_ASSET_TRANSFER'
          | 'DELETE_BANK_INSTRUCTION'
          | 'DEPOSIT'
          | 'DWAC'
          | 'EXTERNAL_POSITION_TRANSFER'
          | 'FOP'
          | 'QUERY_RECENT_INSTRUCTIONS'
          | 'QUERY_WITHDRAWABLE_FUNDS'
          | 'INTERNAL_POSITION_TRANSFER'
          | 'INTERNAL_CASH_TRANSFER'
          | 'MICRO_AMOUNT'
          | 'OPEN_BANKING_INSTRUCTION'
          | 'PREDEFINED_DESTINATION_INSTRUCTION'
          | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
          | 'WITHDRAWAL'
          | 'WITHDRAWAL_INSTRUCTION'
          | 'QUERY_IRA_CONTRIBUTIONS'
          | 'EDDA_INSTRUCTION'
          | 'QUERY_RECENT_RECURRING_EVENTS'
          | 'QUERY_RECURRING_INSTRUCTIONS'
          | 'QUERY_ACCOUNT_BALANCES'
          | 'QUERY_BANK_INSTRUCTION'
          | 'QUERY_WITHDRAWABLE_CASH_EQUITY'
          | 'ISA_TRANSFER'
        instructionStatus: 'PENDING' | 'REJECTED' | 'PROCESSED'
        instructionId: number
        ibReferenceId?: number | undefined
        description?: string | undefined
        details?:
          | OpenBankingInstructionResultDetails
          | WithdrawalInstructionResultDetails
          | undefined
        depositDetails?:
          | {
              amount?: number | undefined
              currency?: string | undefined
              whenAvailable?: string | undefined
              openBanking?:
                | {
                    serviceProvider?: 'PLAID' | undefined
                    providerResponse?:
                      | {
                          paymentId?: string | undefined
                          hostedlinkUrl?: string | undefined
                          linkToken?: string | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        error?: { errorCode: string; errorMessage: string } | undefined
        processedTimestamp?: string | undefined
      }
    | undefined
}
type InstructionResponse = {
  status: number
  instructionSetId: number
  instructionResult?:
    | {
        clientInstructionId: number
        instructionType:
          | 'ACH_INSTRUCTION'
          | 'CANCEL_INSTRUCTION'
          | 'COMPLEX_ASSET_TRANSFER'
          | 'DELETE_BANK_INSTRUCTION'
          | 'DEPOSIT'
          | 'DWAC'
          | 'EXTERNAL_POSITION_TRANSFER'
          | 'FOP'
          | 'QUERY_RECENT_INSTRUCTIONS'
          | 'QUERY_WITHDRAWABLE_FUNDS'
          | 'INTERNAL_POSITION_TRANSFER'
          | 'INTERNAL_CASH_TRANSFER'
          | 'MICRO_AMOUNT'
          | 'OPEN_BANKING_INSTRUCTION'
          | 'PREDEFINED_DESTINATION_INSTRUCTION'
          | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
          | 'WITHDRAWAL'
          | 'WITHDRAWAL_INSTRUCTION'
          | 'QUERY_IRA_CONTRIBUTIONS'
          | 'EDDA_INSTRUCTION'
          | 'QUERY_RECENT_RECURRING_EVENTS'
          | 'QUERY_RECURRING_INSTRUCTIONS'
          | 'QUERY_ACCOUNT_BALANCES'
          | 'QUERY_BANK_INSTRUCTION'
          | 'QUERY_WITHDRAWABLE_CASH_EQUITY'
          | 'ISA_TRANSFER'
        instructionStatus: 'PENDING' | 'PROCESSED' | 'REJECTED' | 'PENDING_VERIFICATION'
        instructionId: number
        ibReferenceId?: number | undefined
        description?: string | undefined
        processedTimestamp?: string | undefined
        details?:
          | OpenBankingInstructionResultDetails
          | WithdrawalInstructionResultDetails
          | undefined
        depositDetails?:
          | {
              amount?: number | undefined
              currency?: string | undefined
              whenAvailable?: string | undefined
              openBanking?:
                | {
                    serviceProvider?: 'PLAID' | undefined
                    providerResponse?:
                      | {
                          paymentId?: string | undefined
                          hostedlinkUrl?: string | undefined
                          linkToken?: string | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type QueryRecentInstructionResult = {
  clientInstructionId: number
  instructionType:
    | 'ACH_INSTRUCTION'
    | 'CANCEL_INSTRUCTION'
    | 'COMPLEX_ASSET_TRANSFER'
    | 'DELETE_BANK_INSTRUCTION'
    | 'DEPOSIT'
    | 'DWAC'
    | 'EXTERNAL_POSITION_TRANSFER'
    | 'FOP'
    | 'QUERY_RECENT_INSTRUCTIONS'
    | 'QUERY_WITHDRAWABLE_FUNDS'
    | 'INTERNAL_POSITION_TRANSFER'
    | 'INTERNAL_CASH_TRANSFER'
    | 'MICRO_AMOUNT'
    | 'OPEN_BANKING_INSTRUCTION'
    | 'PREDEFINED_DESTINATION_INSTRUCTION'
    | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
    | 'WITHDRAWAL'
    | 'WITHDRAWAL_INSTRUCTION'
    | 'QUERY_IRA_CONTRIBUTIONS'
    | 'EDDA_INSTRUCTION'
    | 'QUERY_RECENT_RECURRING_EVENTS'
    | 'QUERY_RECURRING_INSTRUCTIONS'
    | 'QUERY_ACCOUNT_BALANCES'
    | 'QUERY_BANK_INSTRUCTION'
    | 'QUERY_WITHDRAWABLE_CASH_EQUITY'
    | 'ISA_TRANSFER'
  instructionStatus: 'PENDING' | 'REJECTED' | 'PROCESSED'
  instructionId: number
  ibReferenceId?: number | undefined
  description?: string | undefined
  details?: OpenBankingInstructionResultDetails | WithdrawalInstructionResultDetails | undefined
  depositDetails?:
    | {
        amount?: number | undefined
        currency?: string | undefined
        whenAvailable?: string | undefined
        openBanking?:
          | {
              serviceProvider?: 'PLAID' | undefined
              providerResponse?:
                | {
                    paymentId?: string | undefined
                    hostedlinkUrl?: string | undefined
                    linkToken?: string | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  error?: { errorCode: string; errorMessage: string } | undefined
  processedTimestamp?: string | undefined
  instructionHistory: {
    historyMaxDepthNumberOfDays: bigint
    historyMaxDepthNumberOfInstruction: bigint
    result: unknown[]
  }
}
type QueryRecentInstructionResponse = {
  status: number
  instructionSetId: number
  instructionResult?: QueryRecentInstructionResult | undefined
}
type DepositDetails = {
  amount?: number | undefined
  currency?: string | undefined
  whenAvailable?: string | undefined
  openBanking?:
    | {
        serviceProvider?: 'PLAID' | undefined
        providerResponse?:
          | {
              paymentId?: string | undefined
              hostedlinkUrl?: string | undefined
              linkToken?: string | undefined
            }
          | undefined
      }
    | undefined
}
type DepositFundsPollingResult = {
  clientInstructionId: number
  instructionType:
    | 'ACH_INSTRUCTION'
    | 'CANCEL_INSTRUCTION'
    | 'COMPLEX_ASSET_TRANSFER'
    | 'DELETE_BANK_INSTRUCTION'
    | 'DEPOSIT'
    | 'DWAC'
    | 'EXTERNAL_POSITION_TRANSFER'
    | 'FOP'
    | 'QUERY_RECENT_INSTRUCTIONS'
    | 'QUERY_WITHDRAWABLE_FUNDS'
    | 'INTERNAL_POSITION_TRANSFER'
    | 'INTERNAL_CASH_TRANSFER'
    | 'MICRO_AMOUNT'
    | 'OPEN_BANKING_INSTRUCTION'
    | 'PREDEFINED_DESTINATION_INSTRUCTION'
    | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
    | 'WITHDRAWAL'
    | 'WITHDRAWAL_INSTRUCTION'
    | 'QUERY_IRA_CONTRIBUTIONS'
    | 'EDDA_INSTRUCTION'
    | 'QUERY_RECENT_RECURRING_EVENTS'
    | 'QUERY_RECURRING_INSTRUCTIONS'
    | 'QUERY_ACCOUNT_BALANCES'
    | 'QUERY_BANK_INSTRUCTION'
    | 'QUERY_WITHDRAWABLE_CASH_EQUITY'
    | 'ISA_TRANSFER'
  instructionStatus: 'PENDING' | 'REJECTED' | 'PROCESSED'
  instructionId: number
  ibReferenceId?: number | undefined
  description?: string | undefined
  details?: OpenBankingInstructionResultDetails | WithdrawalInstructionResultDetails | undefined
  depositDetails?: DepositDetails | undefined
  error?: { errorCode: string; errorMessage: string } | undefined
  processedTimestamp?: string | undefined
}
type DepositFundsPollingResponse = {
  status: number
  instructionSetId: number
  instructionResult?: DepositFundsPollingResult | undefined
}
type QueryIRAContributionsResult = {
  clientInstructionId: number
  instructionType:
    | 'ACH_INSTRUCTION'
    | 'CANCEL_INSTRUCTION'
    | 'COMPLEX_ASSET_TRANSFER'
    | 'DELETE_BANK_INSTRUCTION'
    | 'DEPOSIT'
    | 'DWAC'
    | 'EXTERNAL_POSITION_TRANSFER'
    | 'FOP'
    | 'QUERY_RECENT_INSTRUCTIONS'
    | 'QUERY_WITHDRAWABLE_FUNDS'
    | 'INTERNAL_POSITION_TRANSFER'
    | 'INTERNAL_CASH_TRANSFER'
    | 'MICRO_AMOUNT'
    | 'OPEN_BANKING_INSTRUCTION'
    | 'PREDEFINED_DESTINATION_INSTRUCTION'
    | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
    | 'WITHDRAWAL'
    | 'WITHDRAWAL_INSTRUCTION'
    | 'QUERY_IRA_CONTRIBUTIONS'
    | 'EDDA_INSTRUCTION'
    | 'QUERY_RECENT_RECURRING_EVENTS'
    | 'QUERY_RECURRING_INSTRUCTIONS'
    | 'QUERY_ACCOUNT_BALANCES'
    | 'QUERY_BANK_INSTRUCTION'
    | 'QUERY_WITHDRAWABLE_CASH_EQUITY'
    | 'ISA_TRANSFER'
  instructionStatus: 'PENDING' | 'REJECTED' | 'PROCESSED'
  instructionId: number
  ibReferenceId?: number | undefined
  description?: string | undefined
  details?: OpenBankingInstructionResultDetails | WithdrawalInstructionResultDetails | undefined
  depositDetails?:
    | {
        amount?: number | undefined
        currency?: string | undefined
        whenAvailable?: string | undefined
        openBanking?:
          | {
              serviceProvider?: 'PLAID' | undefined
              providerResponse?:
                | {
                    paymentId?: string | undefined
                    hostedlinkUrl?: string | undefined
                    linkToken?: string | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  error?: { errorCode: string; errorMessage: string } | undefined
  processedTimestamp?: string | undefined
  accountId: string
  year: string
  iraType: string
  contributions: {
    maximumContributionLimit: number
    yearToDateContribution: number
    allowedContributionLimit: number
  }[]
}
type QueryIRAContributionsResponse = {
  status: number
  instructionSetId: number
  instructionResult?: QueryIRAContributionsResult | undefined
}
type NoSuchInstructionResponse = {
  type: string
  title: string
  status: bigint
  detail?: string | undefined
}
type GetBrokerListResponse = { instructionType: string; brokers: string[] }
type EnumerationType =
  | 'exchange-bundles'
  | 'business-and-occupation'
  | 'employee-track'
  | 'fin-info-ranges'
  | 'acats'
  | 'aton'
  | 'market-data'
  | 'edd-avt'
  | 'prohibited-country'
  | 'employee-plans'
  | 'questionnaires'
  | 'security-questions'
  | 'quiz-questions'
  | 'wire-instructions'
  | 'product-country-bundles'
  | 'countries'
  | 'states'
  | 'identification'
type ArrayNode = { [x: string]: unknown }
type EnumerationResponse = {
  enumerationsType?: string | undefined
  formNumber?: string | undefined
  jsonData?: ArrayNode | undefined
}
type FormPayload = { mimeType?: string | undefined; data?: string | undefined }
type AnswerResponse = {
  answerId?: bigint | undefined
  answer?: string | undefined
  dependentQuestionId?: bigint | undefined
  dependentAnswerId?: bigint | undefined
  multiAnswerDetail?: string[] | undefined
}
type QuestionnaireResponse = {
  questionId?: bigint | undefined
  question?: string | undefined
  isMandatoryToAnswer?: boolean | undefined
  questionType?: string | undefined
  answers?: AnswerResponse[] | undefined
}
type FormDetails = {
  formNumber?: bigint | undefined
  sha1Checksum?: string | undefined
  dateModified?: string | undefined
  fileName?: string | undefined
  language?: string | undefined
  formName?: string | undefined
  payload?: FormPayload | undefined
  apiSupportedTask?: boolean | undefined
  type?: string | undefined
  action?: string | undefined
  acceptableDocs?: string[] | undefined
  questionnaire?: QuestionnaireResponse[] | undefined
  error?: ErrorResponse | undefined
  hasError?: boolean | undefined
  errorDescription?: string | undefined
  fileLength?: bigint | undefined
}
type FormFileResponse = {
  error?: ErrorResponse | undefined
  hasError?: boolean | undefined
  errorDescription?: string | undefined
  fileData?: FileData | undefined
  formDetails?: FormDetails[] | undefined
  timestamp?: string | undefined
}
type RequiredFormsRequest = {
  residenceCountry?: string | undefined
  accountType?: string | undefined
  applicantType?: string | undefined
  processType?: string | undefined
  ira?: boolean | undefined
  iraType?: string | undefined
  requestedSYEP?: boolean | undefined
  requestedFCBP?: boolean | undefined
  additionalAccount?: boolean | undefined
  additionalApplicant?: boolean | undefined
  mifidCategory?: string | undefined
  tradingPermissions?: string[] | undefined
  capability?: string[] | undefined
  faTradingAccount?: boolean | undefined
}
type RequiredFormsResponse = {
  forms?: string[] | undefined
  error?: ErrorResponse | undefined
  hasError?: boolean | undefined
  errorDescription?: string | undefined
}
type NoSuchInstructionSetResponse = {
  type: string
  title: string
  status: bigint
  detail?: string | undefined
  instructionSetId: bigint
}
type GetParticipatingListResponse = {
  type: string
  participatingBanks: { institutionName: string; clearingCode: string; BIC: string }[]
}
type RequestDetailsRequest = {
  startDate: string
  endDate: string
  offset?: bigint | undefined
  limit?: bigint | undefined
  status?:
    | 'N'
    | 'O'
    | 'P'
    | 'C'
    | 'A'
    | 'E'
    | 'F'
    | 'I'
    | 'J'
    | 'L'
    | 'M'
    | 'R'
    | 'W'
    | 'Q'
    | undefined
}
type RequestDetail = {
  requestId?: bigint | undefined
  dateSubmitted?: string | undefined
  status?: string | undefined
  accountID?: string | undefined
  requestType?: string | undefined
}
type RequestDetailsResponse = {
  requestDetails?: RequestDetail[] | undefined
  offset?: bigint | undefined
  limit?: bigint | undefined
  total?: bigint | undefined
}
type AccountRestrictionsResponse = { status: string; accountId: string; restrictionIds: bigint[] }
type MasterRestrictionEntry = {
  restrictionId?: bigint | undefined
  byOperator?: boolean | undefined
}
type MasterRestrictionsResponse = {
  status: string
  masterUserName: string
  restrictions: MasterRestrictionEntry[]
}
type ListEntryParams = {
  symbol?: string | undefined
  symboldesc?: string | undefined
  val?: string | undefined
}
type ListEntry = {
  id?: bigint | undefined
  type?: string | undefined
  createdAt?: bigint | undefined
  params?: ListEntryParams | undefined
}
type ListDetailsResponse = {
  status: string
  listId: bigint
  type?: string | undefined
  name?: string | undefined
  description?: (string | null) | undefined
  entries: ListEntry[]
}
type MasterListEntry = { listId?: bigint | undefined; byOperator?: boolean | undefined }
type MasterListIdsResponse = { status: string; masterUserName: string; lists: MasterListEntry[] }
type RuleParam = { [x: string]: string }
type RestrictionRule = {
  ruleId?: bigint | undefined
  type?: string | undefined
  validityType?: string | undefined
  startDate?: string | undefined
  endDate?: string | undefined
  params?: RuleParam[] | undefined
}
type RestrictionDetailsResponse = {
  status: string
  restrictionId: bigint
  name?: string | undefined
  description?: (string | null) | undefined
  message?: (string | null) | undefined
  applicationType?: string | undefined
  usageType?: string | undefined
  allowOnly?: (string | null) | undefined
  matchAll?: (string | null) | undefined
  isWhiteList?: string | undefined
  rules: RestrictionRule[]
  tmFrequency?: string | undefined
  tmFirstDate?: bigint | undefined
}
type RestrictionScopeResponse = {
  status: string
  restrictionId: bigint
  scope: string
  accountIds?: ((string | null)[] | null) | undefined
  truncated?: (boolean | null) | undefined
}
type UserRestrictionsResponse = { status: string; userName: string; restrictionIds: bigint[] }
type AvailableStatementDatesData = {
  dataType?: string | undefined
  value?:
    | {
        daily?: { startDate?: string | undefined; endDate?: string | undefined } | undefined
        monthly?: string[] | undefined
        annual?: string[] | undefined
      }
    | undefined
}
type GetAvailableStmtDatesResponse = { data?: AvailableStatementDatesData | undefined }
type TaxFormType = {
  isForm?: boolean | undefined
  taxFormName?: string | undefined
  formats?: string[] | undefined
}
type AvailableTaxFormsData = {
  dataType?: string | undefined
  value?: { forms?: TaxFormType[] | undefined } | undefined
}
type GetAvailableTaxFormsResponse = { data?: AvailableTaxFormsData | undefined }
type Country = {
  country?: string | undefined
  fee?: number | undefined
  currency?: string | undefined
  countryCode?: string | undefined
  disabled?: boolean | undefined
}
type DividendDTO = {
  currency?: string | undefined
  exDate?: string | undefined
  payDate?: string | undefined
  corpactionId?: string | undefined
  country?: string | undefined
  isin?: string | undefined
  securityDesc?: string | undefined
  symbol?: string | undefined
  voucher?: TaxVoucherDTO | undefined
}
type GetAvailableTradeConfirmationDatesResponse = {
  data?: { dataType?: string | undefined; value?: string[] | undefined } | undefined
}
type UserNameAvailableResponse = {
  error?: ErrorResponse | undefined
  hasError?: boolean | undefined
  errorDescription?: string | undefined
  isValid?: boolean | undefined
  isAvailable?: boolean | undefined
  suggestedUserName?: string[] | undefined
}
type User2 = {
  roleId?: string | undefined
  hasRightCodeInd?: boolean | undefined
  userName?: string | undefined
  entity?:
    | {
        entityName?: string | undefined
        entityType?: 'INDIVIDUAL' | 'Joint' | 'ORG' | undefined
        firstName?: string | undefined
        lastName?: string | undefined
      }
    | undefined
}
type SignatureAndOwners = {
  accountId?: string | undefined
  users?: User2[] | undefined
  applicant?: { signatures?: string[] | undefined } | undefined
}
type ScheduleResponse = {
  exchange_time_zone?: string | undefined
  schedules?:
    | {
        date?:
          | {
              extended_hours?:
                | {
                    cancel_daily_orders?: boolean | undefined
                    closing?: bigint | undefined
                    opening?: bigint | undefined
                  }[]
                | undefined
              liquid_hours?:
                | { closing?: bigint | undefined; opening?: bigint | undefined }[]
                | undefined
            }
          | undefined
      }
    | undefined
}
type CategoryTreeResponse = {
  categories?:
    | {
        categoryId?:
          | {
              name?: string | undefined
              parent_id?: string | undefined
              markets?: unknown[] | undefined
            }
          | undefined
      }
    | undefined
}
type ForecastDetailsResponse = {
  conid_yes?: bigint | undefined
  conid_no?: bigint | undefined
  question?: string | undefined
  side?: string | undefined
  strike_label?: string | undefined
  strike?: bigint | undefined
  exchange?: string | undefined
  expiration?: string | undefined
  symbol?: string | undefined
  category?: string | undefined
  logo_category?: string | undefined
  measured_period?: string | undefined
  market_name?: string | undefined
  underlying_conid?: bigint | undefined
  payout?: number | undefined
}
type ForecastMarketResponse = {
  market_name?: string | undefined
  exchange?: string | undefined
  symbol?: string | undefined
  logo_category?: string | undefined
  exclude_historical_data?: boolean | undefined
  payout?: number | undefined
  contracts?:
    | {
        conid?: bigint | undefined
        side?: string | undefined
        expiration?: string | undefined
        strike?: bigint | undefined
        strike_label?: string | undefined
        expiry_label?: string | undefined
        underlying_conid?: bigint | undefined
        time_specifier?: string | undefined
      }[]
    | undefined
}
type ForecastRulesResponse = {
  asset_class?: string | undefined
  description?: string | undefined
  market_name?: string | undefined
  measured_period?: string | undefined
  threshold?: string | undefined
  source_agency?: string | undefined
  data_and_resolution_link?: string | undefined
  last_trade_time?: bigint | undefined
  product_code?: string | undefined
  market_rules_link?: string | undefined
  release_time?: bigint | undefined
  payout_time?: bigint | undefined
  payout?: string | undefined
  price_increment?: string | undefined
  exchange_timezone?: string | undefined
}
type ForecastSchedulesResponse = {
  timezone?: string | undefined
  trading_schedules?:
    | {
        day_of_week?: string | undefined
        trading_times?: { open?: string | undefined; close?: string | undefined }[] | undefined
      }[]
    | undefined
}
type DeliveryOptions = {
  E?:
    | {
        NM?: string | undefined
        I?: string | undefined
        UI?: string | undefined
        A?: string | undefined
      }[]
    | undefined
  M?: bigint | undefined
}
type DisclaimerInfo = { FC?: string | undefined; DT?: string | undefined }
type Notifications = {
  R?: string | undefined
  D?: string | undefined
  MS?: string | undefined
  MD?: string | undefined
  ID?: string | undefined
  HT?: bigint | undefined
  FC?: string | undefined
}[]
type FyiSettings = {
  A?: bigint | undefined
  FC?: string | undefined
  H?: bigint | undefined
  FD?: string | undefined
  FN?: string | undefined
}[]
type AlertCondition = {
  condition_type?: bigint | undefined
  conidex?: string | undefined
  contract_description_1?: string | undefined
  condition_operator?: string | undefined
  condition_trigger_method?: bigint | undefined
  condition_value?: string | undefined
  condition_logic_bind?: boolean | undefined
  condition_time_zone?: string | undefined
}
type AlertDetails = {
  account?: string | undefined
  order_id?: bigint | undefined
  alertName?: string | undefined
  tif?: string | undefined
  expire_time?: string | undefined
  alert_active?: 1n | 0n | undefined
  alert_repeatable?: bigint | undefined
  alert_email?: string | undefined
  alert_send_message?: bigint | undefined
  alert_message?: string | undefined
  alert_show_popup?: bigint | undefined
  alert_play_audio?: bigint | undefined
  order_status?: 'Presubmitted' | 'Submitted' | undefined
  alert_triggered?: bigint | undefined
  fg_color?: string | undefined
  bg_color?: string | undefined
  order_not_editable?: boolean | undefined
  itws_orders_only?: bigint | undefined
  alert_mta_currency?: string | undefined
  alert_mta_defaults?: string | undefined
  tool_id?: bigint | undefined
  time_zone?: string | undefined
  alert_default_type?: bigint | undefined
  condition_size?: bigint | undefined
  condition_outside_rth?: bigint | undefined
  conditions?: AlertCondition[] | undefined
}
type SubAccounts = {
  accounts?:
    | {
        data?:
          | { value?: string | undefined; key?: 'AvailableEquity' | 'NetLiquidation' | undefined }[]
          | undefined
        name?: string | undefined
      }[]
    | undefined
}
type OrderStatus = {
  sub_type?: (string | null) | undefined
  request_id?: string | undefined
  server_id?: string | undefined
  order_id?: bigint | undefined
  conidex?: string | undefined
  conid?: bigint | undefined
  symbol?: string | undefined
  side?: 'BUY' | 'SELL' | undefined
  contract_description_1?: string | undefined
  listing_exchange?: string | undefined
  option_acct?: string | undefined
  company_name?: string | undefined
  size?: string | undefined
  total_size?: string | undefined
  currency?: string | undefined
  account?: string | undefined
  order_type?: string | undefined
  cum_fill?: string | undefined
  order_status?:
    | 'Inactive'
    | 'PendingSubmit'
    | 'PreSubmitted'
    | 'Submitted'
    | 'Filled'
    | 'PendingCancel'
    | 'Cancelled'
    | 'WarnState'
    | undefined
  order_ccp_status?: string | undefined
  order_status_description?: string | undefined
  tif?: 'DAY' | 'IOC' | 'GTC' | 'OPG' | 'PAX' | undefined
  fgColor?: string | undefined
  bgColor?: string | undefined
  order_not_editable?: boolean | undefined
  editable_fields?: string | undefined
  cannot_cancel_order?: boolean | undefined
  deactivate_order?: boolean | undefined
  sec_type?: 'STK' | 'OPT' | 'FUT' | 'FOP' | 'CASH' | 'CRYPTO' | 'BOND' | 'WAR' | 'FUND' | undefined
  available_chart_periods?: string | undefined
  order_description?: string | undefined
  order_description_with_contract?: string | undefined
  alert_active?: 0n | 1n | undefined
  child_order_type?: '0' | 'A' | 'B' | undefined
  order_clearing_account?: string | undefined
  size_and_fills?: string | undefined
  exit_strategy_display_price?: string | undefined
  exit_strategy_chart_description?: string | undefined
  average_price?: string | undefined
  exit_strategy_tool_availability?: string | undefined
  allowed_duplicate_opposite?: boolean | undefined
  order_time?: string | undefined
}
type LiveOrdersResponse = {
  orders?:
    | {
        account?: string | undefined
        acct?: string | undefined
        avgPrice?: string | undefined
        bgColor?: string | undefined
        cashCcy?: string | undefined
        companyName?: string | undefined
        conid?: string | undefined
        conidex?: string | undefined
        description1?: string | undefined
        description2?: string | undefined
        exchange?: string | undefined
        fgColor?: string | undefined
        filledQuantity?: string | undefined
        isEventTrading?: '0' | '1' | undefined
        lastExecutionTime?: string | undefined
        lastExecutionTime_r?: string | undefined
        listingExchange?: string | undefined
        orderDesc?: string | undefined
        orderId?: bigint | undefined
        orderType?: string | undefined
        order_cancellation_by_system_reason?: string | undefined
        order_ccp_status?: string | undefined
        origOrderType?: string | undefined
        price?: string | undefined
        remainingQuantity?: string | undefined
        secType?: string | undefined
        side?: string | undefined
        sizeAndFills?: string | undefined
        status?:
          | 'Inactive'
          | 'PendingSubmit'
          | 'PreSubmitted'
          | 'Submitted'
          | 'Filled'
          | 'PendingCancel'
          | 'Cancelled'
          | 'WarnState'
          | undefined
        supportsTaxOpt?: '0' | '1' | undefined
        taxOptimizerId?: string | undefined
        ticker?: string | undefined
        timeInForce?: string | undefined
        totalCashSize?: string | undefined
        totalSize?: string | undefined
      }[]
    | undefined
  snapshot?: boolean | undefined
}
type PnlPartitionedResponse = {
  upnl?:
    | {
        'U1234567.Core'?:
          | {
              rowType?: bigint | undefined
              dpl?: bigint | undefined
              nl?: bigint | undefined
              upl?: bigint | undefined
              el?: bigint | undefined
              mv?: bigint | undefined
            }
          | undefined
      }
    | undefined
}
type DynAccountSearchResponse = {
  matchedAccounts?:
    | {
        accountId?: string | undefined
        alias?: string | undefined
        allocationId?: string | undefined
      }[]
    | undefined
  pattern?: string | undefined
}
type TradesResponse = {
  execution_id?: string | undefined
  symbol?: string | undefined
  supports_tax_opt?: '0' | '1' | undefined
  side?: 'B' | 'S' | 'N' | 'X' | 'L' | 'A' | 'F' | 'E' | 'U' | undefined
  order_description?: string | undefined
  trade_time?: string | undefined
  trade_time_r?: bigint | undefined
  size?: number | undefined
  price?: string | undefined
  order_ref?: string | undefined
  submitter?: string | undefined
  exchange?: string | undefined
  commission?: string | undefined
  net_amount?: number | undefined
  account?: string | undefined
  accountCode?: string | undefined
  account_allocation_name?: string | undefined
  company_name?: string | undefined
  contract_description_1?: string | undefined
  sec_type?: 'STK' | 'OPT' | 'FUT' | 'FOP' | 'CASH' | 'CRYPTO' | 'BOND' | 'WAR' | 'FUND' | undefined
  listing_exchange?: string | undefined
  conid?: string | undefined
  conidEx?: string | undefined
  clearing_id?: string | undefined
  clearing_name?: string | undefined
  liquidation_trade?: '0' | '1' | undefined
  is_event_trading?: '0' | '1' | undefined
  order_id?: bigint | undefined
}[]
type Alert = {
  order_id?: bigint | undefined
  account?: string | undefined
  alert_name?: string | undefined
  alert_active?: 1n | 0n | undefined
  order_time?: string | undefined
  alert_triggered?: boolean | undefined
  alert_repeatable?: 1n | 0n | undefined
}
type Alerts = Alert[]
type AccountSummaryResponse = {
  accountType?: string | undefined
  status?: string | undefined
  balance?: number | undefined
  SMA?: number | undefined
  buyingPower?: number | undefined
  availableFunds?: number | undefined
  excessLiquidity?: number | undefined
  netLiquidationValue?: number | undefined
  equityWithLoanValue?: number | undefined
  regTLoan?: number | undefined
  securitiesGVP?: number | undefined
  totalCashValue?: number | undefined
  accruedInterest?: number | undefined
  regTMargin?: number | undefined
  initialMargin?: number | undefined
  maintenanceMargin?: number | undefined
  cashBalances?:
    | {
        currency?: string | undefined
        balance?: number | undefined
        settledCash?: number | undefined
      }[]
    | undefined
}
type Funds = {
  current_available?: string | undefined
  current_excess?: string | undefined
  'Prdctd Pst-xpry Excss'?: string | undefined
  'Lk Ahd Avlbl Fnds'?: string | undefined
  overnight_available?: string | undefined
  overnight_excess?: string | undefined
}
type AvailableFundsResponse = {
  total?:
    | {
        current_available?: string | undefined
        current_excess?: string | undefined
        'Prdctd Pst-xpry Excss'?: string | undefined
        'Lk Ahd Avlbl Fnds'?: string | undefined
        'Lk Ahd Excss Lqdty'?: string | undefined
        overnight_available?: string | undefined
        overnight_excess?: string | undefined
        buying_power?: string | undefined
        leverage?: string | undefined
        'Lk Ahd Nxt Chng'?: string | undefined
        day_trades_left?: string | undefined
      }
    | undefined
  'Crypto at Paxos'?: Funds | undefined
  commodities?: Funds | undefined
  securities?:
    | {
        current_available?: string | undefined
        current_excess?: string | undefined
        'Prdctd Pst-xpry Excss'?: string | undefined
        SMA?: string | undefined
        'Lk Ahd Avlbl Fnds'?: string | undefined
        'Lk Ahd Excss Lqdty'?: string | undefined
        overnight_available?: string | undefined
        overnight_excess?: string | undefined
        leverage?: string | undefined
      }
    | undefined
}
type SummaryOfAccountBalancesResponse = {
  total?:
    | {
        net_liquidation?: string | undefined
        'Nt Lqdtn Uncrtnty'?: string | undefined
        equity_with_loan?: string | undefined
        'Prvs Dy Eqty Wth Ln Vl'?: string | undefined
        sec_gross_pos_val?: string | undefined
        cash?: string | undefined
        'MTD Interest'?: string | undefined
        'Pndng Dbt Crd Chrgs'?: string | undefined
      }
    | undefined
  commodities?:
    | {
        net_liquidation?: string | undefined
        equity_with_loan?: string | undefined
        cash?: string | undefined
        'MTD Interest'?: string | undefined
        'Pndng Dbt Crd Chrgs'?: string | undefined
      }
    | undefined
  securities?:
    | {
        net_liquidation?: string | undefined
        equity_with_loan?: string | undefined
        'Prvs Dy Eqty Wth Ln Vl'?: string | undefined
        sec_gross_pos_val?: string | undefined
        cash?: string | undefined
        'MTD Interest'?: string | undefined
        'Pndng Dbt Crd Chrgs'?: string | undefined
      }
    | undefined
}
type SummaryOfAccountMarginResponse = {
  total?:
    | {
        current_initial?: string | undefined
        'Prdctd Pst-xpry Mrgn @ Opn'?: string | undefined
        current_maint?: string | undefined
        projected_liquidity_inital_margin?: string | undefined
        'Prjctd Lk Ahd Mntnnc Mrgn'?: string | undefined
        projected_overnight_initial_margin?: string | undefined
        'Prjctd Ovrnght Mntnnc Mrgn'?: string | undefined
      }
    | undefined
  'Crypto at Paxos'?:
    | {
        current_initial?: string | undefined
        'Prdctd Pst-xpry Mrgn @ Opn'?: string | undefined
        current_maint?: string | undefined
        projected_liquidity_inital_margin?: string | undefined
        'Prjctd Lk Ahd Mntnnc Mrgn'?: string | undefined
        projected_overnight_initial_margin?: string | undefined
        'Prjctd Ovrnght Mntnnc Mrgn'?: string | undefined
      }
    | undefined
  commodities?:
    | {
        'RegT Margin'?: string | undefined
        current_initial?: string | undefined
        'Prdctd Pst-xpry Mrgn @ Opn'?: string | undefined
        current_maint?: string | undefined
        projected_liquidity_inital_margin?: string | undefined
        'Prjctd Lk Ahd Mntnnc Mrgn'?: string | undefined
        projected_overnight_initial_margin?: string | undefined
        'Prjctd Ovrnght Mntnnc Mrgn'?: string | undefined
      }
    | undefined
  securities?:
    | {
        current_initial?: string | undefined
        'Prdctd Pst-xpry Mrgn @ Opn'?: string | undefined
        current_maint?: string | undefined
        projected_liquidity_inital_margin?: string | undefined
        'Prjctd Lk Ahd Mntnnc Mrgn'?: string | undefined
        projected_overnight_initial_margin?: string | undefined
        'Prjctd Ovrnght Mntnnc Mrgn'?: string | undefined
      }
    | undefined
}
type SummaryMarketValueResponse = {
  currency?:
    | {
        total_cash?: string | undefined
        settled_cash?: string | undefined
        'MTD Interest'?: string | undefined
        stock?: string | undefined
        options?: string | undefined
        futures?: string | undefined
        future_options?: string | undefined
        funds?: string | undefined
        dividends_receivable?: string | undefined
        mutual_funds?: string | undefined
        money_market?: string | undefined
        bonds?: string | undefined
        'Govt Bonds'?: string | undefined
        t_bills?: string | undefined
        warrants?: string | undefined
        issuer_option?: string | undefined
        commodity?: string | undefined
        'Notional CFD'?: string | undefined
        cfd?: string | undefined
        Cryptocurrency?: string | undefined
        net_liquidation?: string | undefined
        unrealized_pnl?: string | undefined
        realized_pnl?: string | undefined
        'Exchange Rate'?: string | undefined
      }
    | undefined
}
type UserAccountsResponse = {
  accounts?: string[] | undefined
  acctProps?:
    | {
        U1234567?:
          | {
              hasChildAccounts?: boolean | undefined
              supportsCashQty?: boolean | undefined
              liteUnderPro?: boolean | undefined
              noFXConv?: boolean | undefined
              isProp?: boolean | undefined
              supportsFractions?: boolean | undefined
              allowCustomerTime?: boolean | undefined
              autoFx?: boolean | undefined
            }
          | undefined
      }
    | undefined
  aliases?: { U1234567?: string | undefined } | undefined
  allowFeatures?:
    | {
        showGFIS?: boolean | undefined
        showEUCostReport?: boolean | undefined
        allowEventContract?: boolean | undefined
        allowFXConv?: boolean | undefined
        allowFinancialLens?: boolean | undefined
        allowMTA?: boolean | undefined
        allowTypeAhead?: boolean | undefined
        allowEventTrading?: boolean | undefined
        snapshotRefreshTimeout?: bigint | undefined
        liteUser?: boolean | undefined
        showWebNews?: boolean | undefined
        research?: boolean | undefined
        debugPnl?: boolean | undefined
        showTaxOpt?: boolean | undefined
        showImpactDashboard?: boolean | undefined
        allowDynAccount?: boolean | undefined
        allowCrypto?: boolean | undefined
        allowedAssetTypes?: string | undefined
        restrictTradeSubscription?: boolean | undefined
        showUkUserLabels?: boolean | undefined
        sideBySide?: boolean | undefined
      }
    | undefined
  chartPeriods?:
    | {
        STK?: string[] | undefined
        CFD?: string[] | undefined
        OPT?: string[] | undefined
        FOP?: string[] | undefined
        WAR?: string[] | undefined
        IOPT?: string[] | undefined
        FUT?: string[] | undefined
        CASH?: string[] | undefined
        IND?: string[] | undefined
        BOND?: string[] | undefined
        FUND?: string[] | undefined
        CMDTY?: string[] | undefined
        PHYSS?: string[] | undefined
        CRYPTO?: string[] | undefined
      }
    | undefined
  groups?: string[] | undefined
  profiles?: string[] | undefined
  selectedAccount?: string | undefined
  serverInfo?: { serverName?: string | undefined; serverVersion?: string | undefined } | undefined
  sessionId?: string | undefined
  isFt?: boolean | undefined
  isPaper?: boolean | undefined
}
type AlgoParam = {
  guiRank?: bigint | undefined
  defaultValue?: string | bigint | boolean | number | undefined
  minValue?: bigint | undefined
  maxValue?: bigint | undefined
  name?: string | undefined
  id?: string | undefined
  description?: string | undefined
  legalStrings?: string[] | undefined
  required?: boolean | undefined
  valueClassName?: 'String' | 'Boolean' | 'Time' | 'Double' | 'Integer' | undefined
}
type AlgosResponse = {
  algos?: { name: string; id: string; parameters?: AlgoParam[] | undefined }[] | undefined
}
type ContractInfo = {
  cfi_code?: string | undefined
  symbol?: string | undefined
  cusip?: (string | null) | undefined
  expiry_full?: string | undefined
  con_id?: bigint | undefined
  maturity_date?: string | undefined
  industry?: string | undefined
  instrument_type?: string | undefined
  trading_class?: string | undefined
  valid_exchanges?: string | undefined
  allow_sell_long?: boolean | undefined
  is_zero_commission_security?: boolean | undefined
  local_symbol?: string | undefined
  contract_clarification_type?: string | undefined
  classifier?: string | undefined
  currency?: string | undefined
  text?: string | undefined
  underlying_con_id?: bigint | undefined
  r_t_h?: boolean | undefined
  multiplier?: string | undefined
  underlying_issuer?: string | undefined
  contract_month?: string | undefined
  company_name?: string | undefined
  smart_available?: boolean | undefined
  exchange?: string | undefined
  category?: string | undefined
}
type CurrencyPairs = {
  [x: string]: {
    symbol?: string | undefined
    conid?: bigint | undefined
    ccyPair?: string | undefined
  }[]
}
type UtcDateTime = string
type SingleHistoricalBarBidAsk = {
  o?: number | undefined
  c?: number | undefined
  h?: number | undefined
  l?: number | undefined
  v?: number | undefined
  t?: bigint | undefined
}
type IserverHistoryBidAskResponse = {
  serverId?: string | undefined
  symbol?: string | undefined
  text?: string | undefined
  priceFactor?: bigint | undefined
  startTime?: string | undefined
  high?: string | undefined
  low?: string | undefined
  timePeriod?: string | undefined
  barLength?: bigint | undefined
  mdAvailability?: string | undefined
  outsideRth?: boolean | undefined
  tradingDayDuration?: bigint | undefined
  volumeFactor?: bigint | undefined
  priceDisplayRule?: bigint | undefined
  priceDisplayValue?: string | undefined
  chartPanStartTime?: string | undefined
  direction?: -1n | undefined
  negativeCapable?: boolean | undefined
  messageVersion?: bigint | undefined
  travelTime?: bigint | undefined
  data?: SingleHistoricalBarBidAsk[] | undefined
  points?: bigint | undefined
  mktDataDelay?: bigint | undefined
}
type SingleHistoricalBarLast = {
  o?: number | undefined
  c?: number | undefined
  h?: number | undefined
  l?: number | undefined
  v?: number | undefined
  t?: bigint | undefined
}
type IserverHistoryLastResponse = {
  serverId?: string | undefined
  symbol?: string | undefined
  text?: string | undefined
  priceFactor?: bigint | undefined
  startTime?: string | undefined
  high?: string | undefined
  low?: string | undefined
  timePeriod?: string | undefined
  barLength?: bigint | undefined
  mdAvailability?: string | undefined
  outsideRth?: boolean | undefined
  tradingDayDuration?: bigint | undefined
  volumeFactor?: bigint | undefined
  priceDisplayRule?: bigint | undefined
  priceDisplayValue?: string | undefined
  chartPanStartTime?: string | undefined
  direction?: -1n | undefined
  negativeCapable?: boolean | undefined
  messageVersion?: bigint | undefined
  travelTime?: bigint | undefined
  data?: SingleHistoricalBarLast[] | undefined
  points?: bigint | undefined
  mktDataDelay?: bigint | undefined
}
type SingleHistoricalBarMidpoint = {
  o?: number | undefined
  c?: number | undefined
  h?: number | undefined
  l?: number | undefined
  v?: number | undefined
  t?: bigint | undefined
}
type IserverHistoryMidpointResponse = {
  serverId?: string | undefined
  symbol?: string | undefined
  text?: string | undefined
  priceFactor?: bigint | undefined
  startTime?: string | undefined
  high?: string | undefined
  low?: string | undefined
  timePeriod?: string | undefined
  barLength?: bigint | undefined
  mdAvailability?: string | undefined
  outsideRth?: boolean | undefined
  tradingDayDuration?: bigint | undefined
  volumeFactor?: bigint | undefined
  priceDisplayRule?: bigint | undefined
  priceDisplayValue?: string | undefined
  chartPanStartTime?: string | undefined
  direction?: -1n | undefined
  negativeCapable?: boolean | undefined
  messageVersion?: bigint | undefined
  travelTime?: bigint | undefined
  data?: SingleHistoricalBarMidpoint[] | undefined
  points?: bigint | undefined
  mktDataDelay?: bigint | undefined
}
type MdFields = string
type IserverSnapshot = { [x: string]: unknown }[]
type IserverScannerParams = {
  scan_type_list?:
    | {
        display_name?: string | undefined
        code?: string | undefined
        instruments?: unknown[] | undefined
      }[]
    | undefined
  instrument_list?:
    | {
        display_name?: string | undefined
        type?: string | undefined
        filters?: unknown[] | undefined
      }[]
    | undefined
  filter_list?:
    | {
        group?: string | undefined
        display_name?: string | undefined
        code?: string | undefined
        type?: string | undefined
        combo_values?:
          | { default?: boolean | undefined; vendor?: { [x: string]: unknown } | undefined }[]
          | undefined
      }[]
    | undefined
  location_tree?:
    | {
        display_name?: string | undefined
        type?: string | undefined
        locations?:
          | {
              display_name?: string | undefined
              type?: string | undefined
              locations?:
                | { display_name?: string | undefined; type?: string | undefined }[]
                | undefined
            }[]
          | undefined
      }[]
    | undefined
}
type BondFiltersResponse = {
  bondFilters?:
    | {
        displayText?: 'Maturity Date' | 'Issue Date' | 'Coupon' | 'Currency' | undefined
        columnId?: bigint | undefined
        options?: { text?: string | undefined; value: string }[] | undefined
      }[]
    | undefined
}
type SecDefInfoResponse = {
  conid?: bigint | undefined
  ticker?: string | undefined
  secType?: string | undefined
  listingExchange?: string | undefined
  exchange?: string | undefined
  companyName?: string | undefined
  currency?: string | undefined
  validExchanges?: string | undefined
  priceRendering?: (string | null) | undefined
  maturityDate?: (string | null) | undefined
  right?: 'P' | 'C' | undefined
  strike?: number | undefined
}
type WatchlistsResponse = {
  data?:
    | {
        scanners_only?: boolean | undefined
        show_scanners?: boolean | undefined
        bulk_delete?: boolean | undefined
        user_lists?:
          | {
              is_open?: boolean | undefined
              read_only?: boolean | undefined
              name?: string | undefined
              modified?: bigint | undefined
              id?: string | undefined
              type?: 'watchlist' | undefined
            }[]
          | undefined
      }
    | undefined
  action?: 'content' | undefined
  MID?: string | undefined
}
type AccountAttributes = {
  'PrepaidCrypto-P'?: boolean | undefined
  'PrepaidCrypto-Z'?: boolean | undefined
  accountAlias?: (string | null) | undefined
  accountId?: string | undefined
  accountStatus?: bigint | undefined
  accountTitle?: string | undefined
  accountVan?: string | undefined
  acctCustType?: string | undefined
  brokerageAccess?: boolean | undefined
  businessType?:
    | 'IB_SALES'
    | 'IB_PROSERVE'
    | 'FA'
    | 'FA_CLIENT'
    | 'INTR_BROK'
    | 'INTR_BROK_CLIENT'
    | 'FD_CLIENT'
    | 'INSTITUTIONAL'
    | 'IB_DEVELOPERS'
    | undefined
  category?: string | undefined
  clearingStatus?: 'A' | 'N' | 'O' | 'C' | 'P' | 'R' | 'E' | 'Q' | undefined
  covestor?: boolean | undefined
  currency?:
    | 'AED'
    | 'AUD'
    | 'CAD'
    | 'CHF'
    | 'CNH'
    | 'CZK'
    | 'DKK'
    | 'EUR'
    | 'GBP'
    | 'HKD'
    | 'HUF'
    | 'ILS'
    | 'JPY'
    | 'MXN'
    | 'NOK'
    | 'NZD'
    | 'PLN'
    | 'SEK'
    | 'SGD'
    | 'USD'
    | undefined
  desc?: string | undefined
  displayName?: string | undefined
  faClient?: boolean | undefined
  ibEntity?:
    | 'IBLLC-US'
    | 'IB-CAN'
    | 'IB-UK'
    | 'IB-IE'
    | 'IB-AU'
    | 'IB-HK'
    | 'IB-IN'
    | 'IB-JP'
    | 'IB-SG'
    | undefined
  id?: string | undefined
  noClientTrading?: boolean | undefined
  parent?:
    | {
        accountId?: string | undefined
        isMChild?: boolean | undefined
        isMParent?: boolean | undefined
        isMultiplex?: boolean | undefined
        mmc?: unknown[] | undefined
      }
    | undefined
  trackVirtualFXPortfolio?: boolean | undefined
  tradingType?:
    | 'IRAMRGN'
    | 'FUTNOPT'
    | 'GPMRGN'
    | 'PMRGN'
    | 'STKCASH'
    | 'STKMRGN'
    | 'STKNOPT'
    | undefined
  type?:
    | 'DEMO'
    | 'DEMO-BROKER'
    | 'DEMO-ADVISOR'
    | 'FNF'
    | 'INDIVIDUAL'
    | 'COMPANY'
    | 'STL'
    | 'UTMA'
    | 'PRO-ADV'
    | 'IRA'
    | 'TRUST'
    | undefined
}
type IndividualPosition = {
  acctId?: string | undefined
  allExchanges?: string | undefined
  assetClass?: string | undefined
  avgCost?: number | undefined
  avgPrice?: number | undefined
  baseAvgCost?: number | undefined
  baseAvgPrice?: number | undefined
  baseMktPrice?: number | undefined
  baseMktValue?: number | undefined
  baseRealizedPnl?: number | undefined
  baseUnrealizedPnl?: number | undefined
  chineseName?: string | undefined
  conExchMap?: unknown[] | undefined
  conid?: bigint | undefined
  contractDesc?: string | undefined
  countryCode?: string | undefined
  currency?: string | undefined
  displayRule?:
    | {
        displayRuleStep?:
          | {
              decimalDigits?: bigint | undefined
              lowerEdge?: number | undefined
              wholeDigits?: bigint | undefined
            }[]
          | undefined
        magnification?: bigint | undefined
      }
    | undefined
  exchs?: ({ [x: string]: unknown } | null) | undefined
  exerciseStyle?: (string | null) | undefined
  expiry?: (string | null) | undefined
  fullName?: string | undefined
  group?: string | undefined
  hasOptions?: boolean | undefined
  incrementRules?: { increment?: number | undefined; lowerEdge?: number | undefined }[] | undefined
  isEventContract?: boolean | undefined
  isUS?: boolean | undefined
  lastTradingDay?: string | undefined
  listingExchange?: string | undefined
  mktPrice?: number | undefined
  mktValue?: number | undefined
  model?: string | undefined
  multiplier?: number | undefined
  name?: string | undefined
  pageSize?: bigint | undefined
  position?: number | undefined
  putOrCall?: 'P' | 'C' | undefined
  realizedPnl?: number | undefined
  sector?: string | undefined
  sectorGroup?: string | undefined
  strike?: string | undefined
  ticker?: string | undefined
  time?: bigint | undefined
  type?: string | undefined
  undConid?: bigint | undefined
  unrealizedPnl?: number | undefined
}
type Subaccounts2Response = {
  metadata?:
    | { pageNum?: bigint | undefined; pageSize?: bigint | undefined; total?: bigint | undefined }
    | undefined
  subaccounts?: AccountAttributes[] | undefined
}
type PortfolioAllocations = {
  assetClass?:
    | { long?: { [x: string]: number } | undefined; short?: { [x: string]: number } | undefined }
    | undefined
  group?:
    | { long?: { [x: string]: number } | undefined; short?: { [x: string]: number } | undefined }
    | undefined
  sector?:
    | { long?: { [x: string]: number } | undefined; short?: { [x: string]: number } | undefined }
    | undefined
}
type IndividualComboPosition = {
  acctId?: string | undefined
  assetClass?: string | undefined
  avgCost?: number | undefined
  avgPrice?: number | undefined
  conExchMap?: unknown[] | undefined
  conid?: bigint | undefined
  contractDesc?: string | undefined
  currency?: string | undefined
  exchs?: ({ [x: string]: unknown } | null) | undefined
  exerciseStyle?: (string | null) | undefined
  expiry?: string | undefined
  mktPrice?: number | undefined
  mktValue?: number | undefined
  multiplier?: number | undefined
  position?: number | undefined
  putOrCall?: 'P' | 'C' | 'None' | undefined
  realizedPnl?: number | undefined
  strike?: string | undefined
  undConid?: bigint | undefined
  unrealizedPnl?: number | undefined
}
type ComboPositionResponse = {
  description?: string | undefined
  legs?: { conid?: string | undefined; ratio?: bigint | undefined }[] | undefined
  name?: string | undefined
  positions?: IndividualComboPosition[] | undefined
}[]
type Ledger = {
  [x: string]: {
    acctcode?: string | undefined
    cashbalance?: number | undefined
    cashbalancefxsegment?: number | undefined
    commoditymarketvalue?: number | undefined
    corporatebondsmarketvalue?: number | undefined
    currency?: string | undefined
    dividends?: number | undefined
    exchangerate?: bigint | undefined
    funds?: number | undefined
    futuremarketvalue?: number | undefined
    futureoptionmarketvalue?: number | undefined
    futuresonlypnl?: number | undefined
    interest?: number | undefined
    issueroptionsmarketvalue?: number | undefined
    key?: 'LedgerList' | undefined
    moneyfunds?: number | undefined
    netliquidationvalue?: number | undefined
    realizedpnl?: number | undefined
    secondkey?: string | undefined
    sessionid?: bigint | undefined
    settledcash?: number | undefined
    severity?: bigint | undefined
    stockmarketvalue?: number | undefined
    stockoptionmarketvalue?: number | undefined
    tbillsmarketvalue?: number | undefined
    tbondsmarketvalue?: number | undefined
    timestamp?: bigint | undefined
    unrealizedpnl?: number | undefined
    warrantsmarketvalue?: number | undefined
  }
}
type IndividualPositionArray = IndividualPosition[]
type PortfolioSummary = {
  accountcode?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  accountready?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  accounttype?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  accruedcash?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'accruedcash-c'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'accruedcash-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  accrueddividend?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'accrueddividend-c'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'accrueddividend-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  availablefunds?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'availablefunds-c'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'availablefunds-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  availabletotrade?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'availabletotrade-c'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'availabletotrade-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  availabletowithdraw?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'availabletowithdraw-c'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'availabletowithdraw-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  billable?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'billable-c'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'billable-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  buyingpower?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'columnprio-c'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'columnprio-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  cushion?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  daytradesremaining?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'daytradesremainingt+1'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'daytradesremainingt+2'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'daytradesremainingt+3'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'daytradesremainingt+4'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'daytradingstatus-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  depositoncredithold?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  equitywithloanvalue?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'equitywithloanvalue-c'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'equitywithloanvalue-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  excessliquidity?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'excessliquidity-c'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'excessliquidity-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  fullavailablefunds?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'fullavailablefunds-c'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'fullavailablefunds-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  fullexcessliquidity?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'fullexcessliquidity-c'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'fullexcessliquidity-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  fullinitmarginreq?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'fullinitmarginreq-c'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'fullinitmarginreq-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  fullmaintmarginreq?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'fullmaintmarginreq-c'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'fullmaintmarginreq-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  grosspositionvalue?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'grosspositionvalue-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  guarantee?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'guarantee-c'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'guarantee-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  highestseverity?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  indianstockhaircut?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'indianstockhaircut-c'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'indianstockhaircut-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  initmarginreq?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'initmarginreq-c'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'initmarginreq-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'leverage-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  lookaheadavailablefunds?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'lookaheadavailablefunds-c'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'lookaheadavailablefunds-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  lookaheadexcessliquidity?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'lookaheadexcessliquidity-c'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'lookaheadexcessliquidity-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  lookaheadinitmarginreq?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'lookaheadinitmarginreq-c'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'lookaheadinitmarginreq-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  lookaheadmaintmarginreq?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'lookaheadmaintmarginreq-c'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'lookaheadmaintmarginreq-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  lookaheadnextchange?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  maintmarginreq?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'maintmarginreq-c'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'maintmarginreq-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  netliquidation?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'netliquidation-c'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'netliquidation-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  netliquidationuncertainty?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  nlvandmargininreview?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  pasharesvalue?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'pasharesvalue-c'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'pasharesvalue-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  physicalcertificatevalue?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'physicalcertificatevalue-c'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'physicalcertificatevalue-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  postexpirationexcess?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'postexpirationexcess-c'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'postexpirationexcess-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  postexpirationmargin?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'postexpirationmargin-c'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'postexpirationmargin-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  previousdayequitywithloanvalue?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'previousdayequitywithloanvalue-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  regtequity?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'regtequity-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  regtmargin?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'regtmargin-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'segmenttitle-c'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'segmenttitle-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  sma?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'sma-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  totalcashvalue?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'totalcashvalue-c'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'totalcashvalue-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  totaldebitcardpendingcharges?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'totaldebitcardpendingcharges-c'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'totaldebitcardpendingcharges-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  'tradingtype-s'?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
  whatifpmenabled?:
    | {
        amount?: number | undefined
        currency?: number | undefined
        isNull?: boolean | undefined
        severity?: bigint | undefined
        timestamp?: bigint | undefined
        value?: string | undefined
      }
    | undefined
}
type Portfolio2Positions = {
  assetClass?: string | undefined
  avgCost?: { [x: string]: unknown } | undefined
  avgPrice?: number | undefined
  conid?: bigint | undefined
  currency?: string | undefined
  description?: string | undefined
  group?: string | undefined
  isLastToLoq?: boolean | undefined
  marketPrice?: number | undefined
  marketValue?: number | undefined
  model?: string | undefined
  position?: number | undefined
  realizedPnl?: number | undefined
  secType?: string | undefined
  sector?: string | undefined
  timestamp?: bigint | undefined
  unrealizedPnl?: number | undefined
}[]
type SsoValidateResponse = {
  USER_ID?: bigint | undefined
  USER_NAME?: string | undefined
  RESULT?: boolean | undefined
  AUTH_TIME?: bigint | undefined
  SF_ENABLED?: boolean | undefined
  IS_FREE_TRIAL?: boolean | undefined
  CREDENTIAL?: string | undefined
  IP?: string | undefined
  EXPIRES?: bigint | undefined
  QUALIFIED_FOR_MOBILE_AUTH?: boolean | undefined
  LANDING_APP?: string | undefined
  IS_MASTER?: boolean | undefined
  lastAccessed?: bigint | undefined
  loginType?: bigint | undefined
  PAPER_USER_NAME?: string | undefined
  features?:
    | {
        envs?: string | undefined
        wlms?: boolean | undefined
        realtime?: boolean | undefined
        bond?: boolean | undefined
        optionChains?: boolean | undefined
        calendar?: boolean | undefined
        newMf?: boolean | undefined
      }
    | undefined
  region?: string | undefined
}
type Features = {
  symbol?:
    | {
        symbol?: string | undefined
        conid?: bigint | undefined
        underlyingConid?: bigint | undefined
        expirationDate?: bigint | undefined
        ltd?: bigint | undefined
        shortFuturesCutOff?: bigint | undefined
        longFuturesCutOff?: bigint | undefined
      }[]
    | undefined
}
type TrsrvSecDefResponse = {
  secdef?:
    | {
        conid?: bigint | undefined
        currency?: string | undefined
        time?: bigint | undefined
        chineseName?: string | undefined
        allExchanges?: string | undefined
        listingExchange?: string | undefined
        countryCode?: string | undefined
        name?: string | undefined
        assetClass?: string | undefined
        expiry?: (string | null) | undefined
        lastTradingDay?: (string | null) | undefined
        group?: string | undefined
        putOrCall?: (string | null) | undefined
        sector?: string | undefined
        sectorGroup?: string | undefined
        strike?: string | undefined
        ticker?: string | undefined
        undConid?: bigint | undefined
        multiplier?: bigint | undefined
        type?: string | undefined
        hasOptions?: boolean | undefined
        fullName?: string | undefined
        isUS?: boolean | undefined
        incrementRules?:
          | { lowerEdge?: number | undefined; increment?: number | undefined }[]
          | undefined
        displayRule?:
          | {
              magnification?: bigint | undefined
              displayRuleStep?:
                | {
                    decimalDigits?: bigint | undefined
                    lowerEdge?: number | undefined
                    wholeDigits?: bigint | undefined
                  }[]
                | undefined
            }[]
          | undefined
        isEventContract?: boolean | undefined
        pageSize?: bigint | undefined
      }[]
    | undefined
}
type TradingSchedule = {
  id?: string | undefined
  tradeVenueId?: string | undefined
  exchange?: string | undefined
  description?: string | undefined
  timezone?: string | undefined
  schedules?:
    | {
        clearingCycleEndTime?: string | undefined
        tradingScheduleDate?: string | undefined
        sessions?:
          | {
              openingTime?: string | undefined
              closingTime?: string | undefined
              prop?: string | undefined
            }[]
          | undefined
        tradingTimes?:
          | {
              openingTime?: string | undefined
              closingTime?: string | undefined
              prop?: string | undefined
              cancelDayOrders?: string | undefined
            }[]
          | undefined
      }[]
    | undefined
}[]
type Stocks = {
  [x: string]: {
    name?: string | undefined
    chineseName?: string | undefined
    assetClass?: string | undefined
    contracts?:
      | { conid?: bigint | undefined; exchange?: string | undefined; isUS?: boolean | undefined }[]
      | undefined
  }[]
}
type NotificationReadAcknowledge = {
  V?: bigint | undefined
  T?: bigint | undefined
  P?: { R?: bigint | undefined; ID?: string | undefined } | undefined
}
type AlertDeletionResponse = {
  request_id?: bigint | undefined
  order_id?: bigint | undefined
  success?: boolean | undefined
  text?: string | undefined
  failure_list?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/gw/api/v1/accounts': {
      $post:
        | {
            input: { json: ApplicationPayload }
            output: StatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApplicationPayload }
            output: RequestInfoResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: ApplicationPayload }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ApplicationPayload }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ApplicationPayload }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ApplicationPayload }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { json: ApplicationPayload }
            output: StatusResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: ApplicationPayload }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { json: AccountManagementRequestsPayload }
            output: StatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AccountManagementRequestsPayload }
            output: RequestInfoResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: AccountManagementRequestsPayload }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AccountManagementRequestsPayload }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AccountManagementRequestsPayload }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AccountManagementRequestsPayload }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { json: AccountManagementRequestsPayload }
            output: StatusResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: AccountManagementRequestsPayload }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { query: { accountId?: string | undefined; externalId?: string | undefined } }
            output: FileDetailsResponse | ResponseFileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { accountId?: string | undefined; externalId?: string | undefined } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { accountId?: string | undefined; externalId?: string | undefined } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { accountId?: string | undefined; externalId?: string | undefined } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { accountId?: string | undefined; externalId?: string | undefined } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { query: { accountId?: string | undefined; externalId?: string | undefined } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/accounts/documents': {
      $post:
        | {
            input: { json: ProcessDocumentsPayload }
            output: StatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProcessDocumentsPayload }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ProcessDocumentsPayload }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ProcessDocumentsPayload }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ProcessDocumentsPayload }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { json: ProcessDocumentsPayload }
            output: StatusResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: ProcessDocumentsPayload }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/accounts/:accountId/tasks': {
      $post:
        | {
            input: { param: { accountId: string } } & { json: string }
            output: TaskActionResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: string }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string } } & { json: string }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string } } & { json: string }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { accountId: string } } & { json: string }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { accountId: string } } & { json: string }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { accountId: string } } & { json: string }
            output: TaskActionResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: string }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string } } & { json: string }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string } } & { json: string }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { accountId: string } } & { json: string }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { accountId: string } } & { json: string }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { accountId: string } } & {
              query: { type?: 'pending' | 'registration' | undefined }
            }
            output: RegistrationTasksResponse | PendingTasksResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: { type?: 'pending' | 'registration' | undefined }
            }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string } } & {
              query: { type?: 'pending' | 'registration' | undefined }
            }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string } } & {
              query: { type?: 'pending' | 'registration' | undefined }
            }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { accountId: string } } & {
              query: { type?: 'pending' | 'registration' | undefined }
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { accountId: string } } & {
              query: { type?: 'pending' | 'registration' | undefined }
            }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/balances/query': {
      $post:
        | {
            input: {
              json: {
                instructionType: 'QUERY_WITHDRAWABLE_CASH_EQUITY'
                instruction: QueryWithdrawableCashEquity
              }
            }
            output: QueryWithdrawableCashEquityResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                instructionType: 'QUERY_WITHDRAWABLE_CASH_EQUITY'
                instruction: QueryWithdrawableCashEquity
              }
            }
            output: MissingRequiredParameterResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                instructionType: 'QUERY_WITHDRAWABLE_CASH_EQUITY'
                instruction: QueryWithdrawableCashEquity
              }
            }
            output: ForbiddenInstructionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                instructionType: 'QUERY_WITHDRAWABLE_CASH_EQUITY'
                instruction: QueryWithdrawableCashEquity
              }
            }
            output: BusinessRejectResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                instructionType: 'QUERY_WITHDRAWABLE_CASH_EQUITY'
                instruction: QueryWithdrawableCashEquity
              }
            }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/bank-instructions': {
      $post:
        | {
            input: {
              json: {
                instructionType:
                  | 'ACH_INSTRUCTION'
                  | 'OPEN_BANKING_INSTRUCTION'
                  | 'WITHDRAWAL_INSTRUCTION'
                  | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
                  | 'DELETE_BANK_INSTRUCTION'
                  | 'PREDEFINED_DESTINATION_INSTRUCTION'
                  | 'EDDA_INSTRUCTION'
                instruction:
                  | TraditionalBankInstructionVerification
                  | AchInstruction
                  | OpenBankingInstruction
                  | WithdrawalBankInstruction
                  | DeleteBankInstruction
                  | PredefinedDestinationInstruction
                  | EddaInstruction
              }
            }
            output: AsynchronousInstructionResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              json: {
                instructionType:
                  | 'ACH_INSTRUCTION'
                  | 'OPEN_BANKING_INSTRUCTION'
                  | 'WITHDRAWAL_INSTRUCTION'
                  | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
                  | 'DELETE_BANK_INSTRUCTION'
                  | 'PREDEFINED_DESTINATION_INSTRUCTION'
                  | 'EDDA_INSTRUCTION'
                instruction:
                  | TraditionalBankInstructionVerification
                  | AchInstruction
                  | OpenBankingInstruction
                  | WithdrawalBankInstruction
                  | DeleteBankInstruction
                  | PredefinedDestinationInstruction
                  | EddaInstruction
              }
            }
            output: MissingRequiredParameterResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                instructionType:
                  | 'ACH_INSTRUCTION'
                  | 'OPEN_BANKING_INSTRUCTION'
                  | 'WITHDRAWAL_INSTRUCTION'
                  | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
                  | 'DELETE_BANK_INSTRUCTION'
                  | 'PREDEFINED_DESTINATION_INSTRUCTION'
                  | 'EDDA_INSTRUCTION'
                instruction:
                  | TraditionalBankInstructionVerification
                  | AchInstruction
                  | OpenBankingInstruction
                  | WithdrawalBankInstruction
                  | DeleteBankInstruction
                  | PredefinedDestinationInstruction
                  | EddaInstruction
              }
            }
            output: ForbiddenInstructionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                instructionType:
                  | 'ACH_INSTRUCTION'
                  | 'OPEN_BANKING_INSTRUCTION'
                  | 'WITHDRAWAL_INSTRUCTION'
                  | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
                  | 'DELETE_BANK_INSTRUCTION'
                  | 'PREDEFINED_DESTINATION_INSTRUCTION'
                  | 'EDDA_INSTRUCTION'
                instruction:
                  | TraditionalBankInstructionVerification
                  | AchInstruction
                  | OpenBankingInstruction
                  | WithdrawalBankInstruction
                  | DeleteBankInstruction
                  | PredefinedDestinationInstruction
                  | EddaInstruction
              }
            }
            output: BusinessRejectResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                instructionType:
                  | 'ACH_INSTRUCTION'
                  | 'OPEN_BANKING_INSTRUCTION'
                  | 'WITHDRAWAL_INSTRUCTION'
                  | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
                  | 'DELETE_BANK_INSTRUCTION'
                  | 'PREDEFINED_DESTINATION_INSTRUCTION'
                  | 'EDDA_INSTRUCTION'
                instruction:
                  | TraditionalBankInstructionVerification
                  | AchInstruction
                  | OpenBankingInstruction
                  | WithdrawalBankInstruction
                  | DeleteBankInstruction
                  | PredefinedDestinationInstruction
                  | EddaInstruction
              }
            }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/bank-instructions/query': {
      $post:
        | {
            input: {
              json: {
                instructionType:
                  | 'QUERY_BANK_INSTRUCTION'
                  | 'QUERY_RECENT_RECURRING_EVENTS'
                  | 'QUERY_RECURRING_INSTRUCTIONS'
                instruction:
                  | QueryBankInstruction
                  | QueryRecentRecurringEvents
                  | QueryRecurringInstructions
              }
            }
            output:
              | QueryRecentRecurringEventResponse
              | QueryBankInstructionResponse
              | QueryRecurringInstructionsResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                instructionType:
                  | 'QUERY_BANK_INSTRUCTION'
                  | 'QUERY_RECENT_RECURRING_EVENTS'
                  | 'QUERY_RECURRING_INSTRUCTIONS'
                instruction:
                  | QueryBankInstruction
                  | QueryRecentRecurringEvents
                  | QueryRecurringInstructions
              }
            }
            output: MissingRequiredParameterResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                instructionType:
                  | 'QUERY_BANK_INSTRUCTION'
                  | 'QUERY_RECENT_RECURRING_EVENTS'
                  | 'QUERY_RECURRING_INSTRUCTIONS'
                instruction:
                  | QueryBankInstruction
                  | QueryRecentRecurringEvents
                  | QueryRecurringInstructions
              }
            }
            output: ForbiddenInstructionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                instructionType:
                  | 'QUERY_BANK_INSTRUCTION'
                  | 'QUERY_RECENT_RECURRING_EVENTS'
                  | 'QUERY_RECURRING_INSTRUCTIONS'
                instruction:
                  | QueryBankInstruction
                  | QueryRecentRecurringEvents
                  | QueryRecurringInstructions
              }
            }
            output: BusinessRejectResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                instructionType:
                  | 'QUERY_BANK_INSTRUCTION'
                  | 'QUERY_RECENT_RECURRING_EVENTS'
                  | 'QUERY_RECURRING_INSTRUCTIONS'
                instruction:
                  | QueryBankInstruction
                  | QueryRecentRecurringEvents
                  | QueryRecurringInstructions
              }
            }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/bank-instructions:bulk': {
      $post:
        | {
            input: {
              json: {
                instructionType:
                  | 'ACH_INSTRUCTION'
                  | 'OPEN_BANKING_INSTRUCTION'
                  | 'WITHDRAWAL_INSTRUCTION'
                  | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
                  | 'DELETE_BANK_INSTRUCTION'
                  | 'PREDEFINED_DESTINATION_INSTRUCTION'
                  | 'EDDA_INSTRUCTION'
                instructions: unknown[]
              }
            }
            output: AsynchronousInstructionSetResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              json: {
                instructionType:
                  | 'ACH_INSTRUCTION'
                  | 'OPEN_BANKING_INSTRUCTION'
                  | 'WITHDRAWAL_INSTRUCTION'
                  | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
                  | 'DELETE_BANK_INSTRUCTION'
                  | 'PREDEFINED_DESTINATION_INSTRUCTION'
                  | 'EDDA_INSTRUCTION'
                instructions: unknown[]
              }
            }
            output: BulkMultiStatusResponse
            outputFormat: 'json'
            status: 207
          }
        | {
            input: {
              json: {
                instructionType:
                  | 'ACH_INSTRUCTION'
                  | 'OPEN_BANKING_INSTRUCTION'
                  | 'WITHDRAWAL_INSTRUCTION'
                  | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
                  | 'DELETE_BANK_INSTRUCTION'
                  | 'PREDEFINED_DESTINATION_INSTRUCTION'
                  | 'EDDA_INSTRUCTION'
                instructions: unknown[]
              }
            }
            output: MissingRequiredParameterResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                instructionType:
                  | 'ACH_INSTRUCTION'
                  | 'OPEN_BANKING_INSTRUCTION'
                  | 'WITHDRAWAL_INSTRUCTION'
                  | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
                  | 'DELETE_BANK_INSTRUCTION'
                  | 'PREDEFINED_DESTINATION_INSTRUCTION'
                  | 'EDDA_INSTRUCTION'
                instructions: unknown[]
              }
            }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/echo/signed-jwt': {
      $post:
        | {
            input: { json: SignedJwtEchoRequest }
            output: EchoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SignedJwtEchoRequest }
            output: InvalidAccessTokenResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SignedJwtEchoRequest }
            output: InsufficientScopeResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: SignedJwtEchoRequest }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/external-asset-transfers': {
      $post:
        | {
            input: {
              json: {
                instructionType:
                  | 'DWAC'
                  | 'FOP'
                  | 'COMPLEX_ASSET_TRANSFER'
                  | 'EXTERNAL_POSITION_TRANSFER'
                  | 'ISA_TRANSFER'
                instruction:
                  | FopInstruction
                  | DwacInstruction
                  | ComplexAssetTransferInstruction
                  | ExternalPositionTransfer
                  | IsaTransferInstruction
              }
            }
            output: AsynchronousInstructionResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              json: {
                instructionType:
                  | 'DWAC'
                  | 'FOP'
                  | 'COMPLEX_ASSET_TRANSFER'
                  | 'EXTERNAL_POSITION_TRANSFER'
                  | 'ISA_TRANSFER'
                instruction:
                  | FopInstruction
                  | DwacInstruction
                  | ComplexAssetTransferInstruction
                  | ExternalPositionTransfer
                  | IsaTransferInstruction
              }
            }
            output: MissingRequiredParameterResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                instructionType:
                  | 'DWAC'
                  | 'FOP'
                  | 'COMPLEX_ASSET_TRANSFER'
                  | 'EXTERNAL_POSITION_TRANSFER'
                  | 'ISA_TRANSFER'
                instruction:
                  | FopInstruction
                  | DwacInstruction
                  | ComplexAssetTransferInstruction
                  | ExternalPositionTransfer
                  | IsaTransferInstruction
              }
            }
            output: ForbiddenInstructionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                instructionType:
                  | 'DWAC'
                  | 'FOP'
                  | 'COMPLEX_ASSET_TRANSFER'
                  | 'EXTERNAL_POSITION_TRANSFER'
                  | 'ISA_TRANSFER'
                instruction:
                  | FopInstruction
                  | DwacInstruction
                  | ComplexAssetTransferInstruction
                  | ExternalPositionTransfer
                  | IsaTransferInstruction
              }
            }
            output: BusinessRejectResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                instructionType:
                  | 'DWAC'
                  | 'FOP'
                  | 'COMPLEX_ASSET_TRANSFER'
                  | 'EXTERNAL_POSITION_TRANSFER'
                  | 'ISA_TRANSFER'
                instruction:
                  | FopInstruction
                  | DwacInstruction
                  | ComplexAssetTransferInstruction
                  | ExternalPositionTransfer
                  | IsaTransferInstruction
              }
            }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/external-asset-transfers:bulk': {
      $post:
        | {
            input: {
              json: {
                instructionType:
                  | 'DWAC'
                  | 'FOP'
                  | 'COMPLEX_ASSET_TRANSFER'
                  | 'EXTERNAL_POSITION_TRANSFER'
                instructions: unknown[]
              }
            }
            output: AsynchronousInstructionSetResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              json: {
                instructionType:
                  | 'DWAC'
                  | 'FOP'
                  | 'COMPLEX_ASSET_TRANSFER'
                  | 'EXTERNAL_POSITION_TRANSFER'
                instructions: unknown[]
              }
            }
            output: BulkMultiStatusResponse
            outputFormat: 'json'
            status: 207
          }
        | {
            input: {
              json: {
                instructionType:
                  | 'DWAC'
                  | 'FOP'
                  | 'COMPLEX_ASSET_TRANSFER'
                  | 'EXTERNAL_POSITION_TRANSFER'
                instructions: unknown[]
              }
            }
            output: MissingRequiredParameterResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                instructionType:
                  | 'DWAC'
                  | 'FOP'
                  | 'COMPLEX_ASSET_TRANSFER'
                  | 'EXTERNAL_POSITION_TRANSFER'
                instructions: unknown[]
              }
            }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/external-cash-transfers': {
      $post:
        | {
            input: {
              json: {
                instructionType: 'DEPOSIT' | 'WITHDRAWAL'
                instruction: DepositFundsInstruction | WithdrawFundsInstruction
              }
            }
            output: AsynchronousInstructionResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              json: {
                instructionType: 'DEPOSIT' | 'WITHDRAWAL'
                instruction: DepositFundsInstruction | WithdrawFundsInstruction
              }
            }
            output: MissingRequiredParameterResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                instructionType: 'DEPOSIT' | 'WITHDRAWAL'
                instruction: DepositFundsInstruction | WithdrawFundsInstruction
              }
            }
            output: ForbiddenInstructionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                instructionType: 'DEPOSIT' | 'WITHDRAWAL'
                instruction: DepositFundsInstruction | WithdrawFundsInstruction
              }
            }
            output: BusinessRejectResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                instructionType: 'DEPOSIT' | 'WITHDRAWAL'
                instruction: DepositFundsInstruction | WithdrawFundsInstruction
              }
            }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/external-cash-transfers/query': {
      $post:
        | {
            input: {
              json: {
                instructionType: 'QUERY_WITHDRAWABLE_FUNDS' | 'QUERY_IRA_CONTRIBUTIONS'
                instruction: QueryWithdrawableFunds | QueryIRAContributions
              }
            }
            output:
              | QueryWithdrawableAmountsResponse
              | QueryWithdrawableAmountsWithoutOriginHoldResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                instructionType: 'QUERY_WITHDRAWABLE_FUNDS' | 'QUERY_IRA_CONTRIBUTIONS'
                instruction: QueryWithdrawableFunds | QueryIRAContributions
              }
            }
            output: AsynchronousInstructionResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              json: {
                instructionType: 'QUERY_WITHDRAWABLE_FUNDS' | 'QUERY_IRA_CONTRIBUTIONS'
                instruction: QueryWithdrawableFunds | QueryIRAContributions
              }
            }
            output: MissingRequiredParameterResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                instructionType: 'QUERY_WITHDRAWABLE_FUNDS' | 'QUERY_IRA_CONTRIBUTIONS'
                instruction: QueryWithdrawableFunds | QueryIRAContributions
              }
            }
            output: ForbiddenInstructionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                instructionType: 'QUERY_WITHDRAWABLE_FUNDS' | 'QUERY_IRA_CONTRIBUTIONS'
                instruction: QueryWithdrawableFunds | QueryIRAContributions
              }
            }
            output: BusinessRejectResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                instructionType: 'QUERY_WITHDRAWABLE_FUNDS' | 'QUERY_IRA_CONTRIBUTIONS'
                instruction: QueryWithdrawableFunds | QueryIRAContributions
              }
            }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/external-cash-transfers:bulk': {
      $post:
        | {
            input: { json: { instructionType: 'DEPOSIT' | 'WITHDRAWAL'; instructions: unknown[] } }
            output: AsynchronousInstructionSetResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: { instructionType: 'DEPOSIT' | 'WITHDRAWAL'; instructions: unknown[] } }
            output: BulkMultiStatusResponse
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { json: { instructionType: 'DEPOSIT' | 'WITHDRAWAL'; instructions: unknown[] } }
            output: MissingRequiredParameterResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { instructionType: 'DEPOSIT' | 'WITHDRAWAL'; instructions: unknown[] } }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/instructions/cancel': {
      $post:
        | {
            input: {
              json: {
                instructionType: 'CANCEL_INSTRUCTION'
                instruction: { clientInstructionId: number; instructionId: number; reason: string }
              }
            }
            output: SynchronousInstructionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                instructionType: 'CANCEL_INSTRUCTION'
                instruction: { clientInstructionId: number; instructionId: number; reason: string }
              }
            }
            output: MissingRequiredParameterResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                instructionType: 'CANCEL_INSTRUCTION'
                instruction: { clientInstructionId: number; instructionId: number; reason: string }
              }
            }
            output: ForbiddenInstructionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                instructionType: 'CANCEL_INSTRUCTION'
                instruction: { clientInstructionId: number; instructionId: number; reason: string }
              }
            }
            output: BusinessRejectResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                instructionType: 'CANCEL_INSTRUCTION'
                instruction: { clientInstructionId: number; instructionId: number; reason: string }
              }
            }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/instructions/cancel:bulk': {
      $post:
        | {
            input: { json: { instructionType: 'CANCEL_INSTRUCTION'; instructions: unknown[] } }
            output: AsynchronousInstructionSetResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: { instructionType: 'CANCEL_INSTRUCTION'; instructions: unknown[] } }
            output: BulkMultiStatusResponse
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { json: { instructionType: 'CANCEL_INSTRUCTION'; instructions: unknown[] } }
            output: MissingRequiredParameterResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { instructionType: 'CANCEL_INSTRUCTION'; instructions: unknown[] } }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/instructions/query': {
      $post:
        | {
            input: {
              json: {
                instructionType: 'QUERY_RECENT_INSTRUCTIONS'
                instruction: {
                  clientInstructionId: number
                  accountId: string
                  transactionHistory: {
                    daysToGoBack: number
                    transactionType?:
                      | 'ALL'
                      | 'ACH_INSTRUCTION'
                      | 'PREDEFINED_DESTINATION_INSTRUCTION'
                      | 'WITHDRAWAL'
                      | 'DEPOSIT'
                      | 'DWAC'
                      | 'FOP'
                      | 'EDDA_INSTRUCTION'
                      | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
                      | 'CANCEL_INSTRUCTION'
                      | 'DELETE_BANK_INSTRUCTION'
                      | 'EXTERNAL_POSITION_TRANSFER'
                      | 'INTERNAL_CASH_TRANSFER'
                      | 'INTERNAL_POSITION_TRANSFER'
                      | 'COMPLEX_ASSET_TRANSFER'
                      | undefined
                  }
                }
              }
            }
            output: AsynchronousInstructionResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              json: {
                instructionType: 'QUERY_RECENT_INSTRUCTIONS'
                instruction: {
                  clientInstructionId: number
                  accountId: string
                  transactionHistory: {
                    daysToGoBack: number
                    transactionType?:
                      | 'ALL'
                      | 'ACH_INSTRUCTION'
                      | 'PREDEFINED_DESTINATION_INSTRUCTION'
                      | 'WITHDRAWAL'
                      | 'DEPOSIT'
                      | 'DWAC'
                      | 'FOP'
                      | 'EDDA_INSTRUCTION'
                      | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
                      | 'CANCEL_INSTRUCTION'
                      | 'DELETE_BANK_INSTRUCTION'
                      | 'EXTERNAL_POSITION_TRANSFER'
                      | 'INTERNAL_CASH_TRANSFER'
                      | 'INTERNAL_POSITION_TRANSFER'
                      | 'COMPLEX_ASSET_TRANSFER'
                      | undefined
                  }
                }
              }
            }
            output: MissingRequiredParameterResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                instructionType: 'QUERY_RECENT_INSTRUCTIONS'
                instruction: {
                  clientInstructionId: number
                  accountId: string
                  transactionHistory: {
                    daysToGoBack: number
                    transactionType?:
                      | 'ALL'
                      | 'ACH_INSTRUCTION'
                      | 'PREDEFINED_DESTINATION_INSTRUCTION'
                      | 'WITHDRAWAL'
                      | 'DEPOSIT'
                      | 'DWAC'
                      | 'FOP'
                      | 'EDDA_INSTRUCTION'
                      | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
                      | 'CANCEL_INSTRUCTION'
                      | 'DELETE_BANK_INSTRUCTION'
                      | 'EXTERNAL_POSITION_TRANSFER'
                      | 'INTERNAL_CASH_TRANSFER'
                      | 'INTERNAL_POSITION_TRANSFER'
                      | 'COMPLEX_ASSET_TRANSFER'
                      | undefined
                  }
                }
              }
            }
            output: ForbiddenInstructionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                instructionType: 'QUERY_RECENT_INSTRUCTIONS'
                instruction: {
                  clientInstructionId: number
                  accountId: string
                  transactionHistory: {
                    daysToGoBack: number
                    transactionType?:
                      | 'ALL'
                      | 'ACH_INSTRUCTION'
                      | 'PREDEFINED_DESTINATION_INSTRUCTION'
                      | 'WITHDRAWAL'
                      | 'DEPOSIT'
                      | 'DWAC'
                      | 'FOP'
                      | 'EDDA_INSTRUCTION'
                      | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
                      | 'CANCEL_INSTRUCTION'
                      | 'DELETE_BANK_INSTRUCTION'
                      | 'EXTERNAL_POSITION_TRANSFER'
                      | 'INTERNAL_CASH_TRANSFER'
                      | 'INTERNAL_POSITION_TRANSFER'
                      | 'COMPLEX_ASSET_TRANSFER'
                      | undefined
                  }
                }
              }
            }
            output: BusinessRejectResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                instructionType: 'QUERY_RECENT_INSTRUCTIONS'
                instruction: {
                  clientInstructionId: number
                  accountId: string
                  transactionHistory: {
                    daysToGoBack: number
                    transactionType?:
                      | 'ALL'
                      | 'ACH_INSTRUCTION'
                      | 'PREDEFINED_DESTINATION_INSTRUCTION'
                      | 'WITHDRAWAL'
                      | 'DEPOSIT'
                      | 'DWAC'
                      | 'FOP'
                      | 'EDDA_INSTRUCTION'
                      | 'TRADITIONAL_BANK_INSTRUCTION_VERIFICATION'
                      | 'CANCEL_INSTRUCTION'
                      | 'DELETE_BANK_INSTRUCTION'
                      | 'EXTERNAL_POSITION_TRANSFER'
                      | 'INTERNAL_CASH_TRANSFER'
                      | 'INTERNAL_POSITION_TRANSFER'
                      | 'COMPLEX_ASSET_TRANSFER'
                      | undefined
                  }
                }
              }
            }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/internal-asset-transfers': {
      $post:
        | {
            input: {
              json: {
                instructionType: 'INTERNAL_POSITION_TRANSFER'
                instruction: {
                  clientInstructionId: number
                  sourceAccountId: string
                  targetAccountId: string
                  transferQuantity: number
                  tradingInstrument: TradingInstrumentRef
                  transferPrice?: number | undefined
                  tradeDate?: string | undefined
                  settleDate?: string | undefined
                }
              }
            }
            output: AsynchronousInstructionResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              json: {
                instructionType: 'INTERNAL_POSITION_TRANSFER'
                instruction: {
                  clientInstructionId: number
                  sourceAccountId: string
                  targetAccountId: string
                  transferQuantity: number
                  tradingInstrument: TradingInstrumentRef
                  transferPrice?: number | undefined
                  tradeDate?: string | undefined
                  settleDate?: string | undefined
                }
              }
            }
            output: MissingRequiredParameterResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                instructionType: 'INTERNAL_POSITION_TRANSFER'
                instruction: {
                  clientInstructionId: number
                  sourceAccountId: string
                  targetAccountId: string
                  transferQuantity: number
                  tradingInstrument: TradingInstrumentRef
                  transferPrice?: number | undefined
                  tradeDate?: string | undefined
                  settleDate?: string | undefined
                }
              }
            }
            output: ForbiddenInstructionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                instructionType: 'INTERNAL_POSITION_TRANSFER'
                instruction: {
                  clientInstructionId: number
                  sourceAccountId: string
                  targetAccountId: string
                  transferQuantity: number
                  tradingInstrument: TradingInstrumentRef
                  transferPrice?: number | undefined
                  tradeDate?: string | undefined
                  settleDate?: string | undefined
                }
              }
            }
            output: BusinessRejectResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                instructionType: 'INTERNAL_POSITION_TRANSFER'
                instruction: {
                  clientInstructionId: number
                  sourceAccountId: string
                  targetAccountId: string
                  transferQuantity: number
                  tradingInstrument: TradingInstrumentRef
                  transferPrice?: number | undefined
                  tradeDate?: string | undefined
                  settleDate?: string | undefined
                }
              }
            }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/internal-asset-transfers:bulk': {
      $post:
        | {
            input: {
              json: { instructionType: 'INTERNAL_POSITION_TRANSFER'; instructions: unknown[] }
            }
            output: AsynchronousInstructionSetResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              json: { instructionType: 'INTERNAL_POSITION_TRANSFER'; instructions: unknown[] }
            }
            output: BulkMultiStatusResponse
            outputFormat: 'json'
            status: 207
          }
        | {
            input: {
              json: { instructionType: 'INTERNAL_POSITION_TRANSFER'; instructions: unknown[] }
            }
            output: MissingRequiredParameterResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: { instructionType: 'INTERNAL_POSITION_TRANSFER'; instructions: unknown[] }
            }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/internal-cash-transfers': {
      $post:
        | {
            input: {
              json: {
                instructionType: 'INTERNAL_CASH_TRANSFER'
                instruction: {
                  clientInstructionId: number
                  sourceAccountId: string
                  targetAccountId: string
                  amount: number
                  currency: string
                  clientNote?: string | undefined
                  dateTimeToOccur?: string | undefined
                }
              }
            }
            output: SynchronousInstructionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                instructionType: 'INTERNAL_CASH_TRANSFER'
                instruction: {
                  clientInstructionId: number
                  sourceAccountId: string
                  targetAccountId: string
                  amount: number
                  currency: string
                  clientNote?: string | undefined
                  dateTimeToOccur?: string | undefined
                }
              }
            }
            output: AsynchronousInstructionResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              json: {
                instructionType: 'INTERNAL_CASH_TRANSFER'
                instruction: {
                  clientInstructionId: number
                  sourceAccountId: string
                  targetAccountId: string
                  amount: number
                  currency: string
                  clientNote?: string | undefined
                  dateTimeToOccur?: string | undefined
                }
              }
            }
            output: MissingRequiredParameterResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                instructionType: 'INTERNAL_CASH_TRANSFER'
                instruction: {
                  clientInstructionId: number
                  sourceAccountId: string
                  targetAccountId: string
                  amount: number
                  currency: string
                  clientNote?: string | undefined
                  dateTimeToOccur?: string | undefined
                }
              }
            }
            output: ForbiddenInstructionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                instructionType: 'INTERNAL_CASH_TRANSFER'
                instruction: {
                  clientInstructionId: number
                  sourceAccountId: string
                  targetAccountId: string
                  amount: number
                  currency: string
                  clientNote?: string | undefined
                  dateTimeToOccur?: string | undefined
                }
              }
            }
            output: BusinessRejectResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                instructionType: 'INTERNAL_CASH_TRANSFER'
                instruction: {
                  clientInstructionId: number
                  sourceAccountId: string
                  targetAccountId: string
                  amount: number
                  currency: string
                  clientNote?: string | undefined
                  dateTimeToOccur?: string | undefined
                }
              }
            }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/internal-cash-transfers:bulk': {
      $post:
        | {
            input: { json: { instructionType: 'INTERNAL_CASH_TRANSFER'; instructions: unknown[] } }
            output: AsynchronousInstructionSetResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: { instructionType: 'INTERNAL_CASH_TRANSFER'; instructions: unknown[] } }
            output: BulkMultiStatusResponse
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { json: { instructionType: 'INTERNAL_CASH_TRANSFER'; instructions: unknown[] } }
            output: MissingRequiredParameterResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { instructionType: 'INTERNAL_CASH_TRANSFER'; instructions: unknown[] } }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/restrictions': {
      $post: {
        input: { header: { Authorization: string } } & { json: string }
        output: CSVResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gw/api/v1/restrictions/verify': {
      $post: {
        input: { header: { Authorization: string } } & { json: string }
        output: CSVResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/gw/api/v1/sso-browser-sessions': {
      $post:
        | {
            input: { header: { authorization: string } } & { json: CreateBrowserSessionRequest }
            output: CreateBrowserSessionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { authorization: string } } & { json: CreateBrowserSessionRequest }
            output: MissingRequiredParameterResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { authorization: string } } & { json: CreateBrowserSessionRequest }
            output: InvalidAccessTokenResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { authorization: string } } & { json: CreateBrowserSessionRequest }
            output: InsufficientScopeResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { authorization: string } } & { json: CreateBrowserSessionRequest }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/sso-sessions': {
      $post:
        | {
            input: { header: { authorization: string } } & { json: CreateSessionRequest }
            output: CreateSessionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { authorization: string } } & { json: CreateSessionRequest }
            output: MissingRequiredParameterResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { authorization: string } } & { json: CreateSessionRequest }
            output: InvalidAccessTokenResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { authorization: string } } & { json: CreateSessionRequest }
            output: InsufficientScopeResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { authorization: string } } & { json: CreateSessionRequest }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/statements': {
      $post:
        | {
            input: { header: { authorization: string } } & { json: StmtRequest }
            output: GetStatementsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { authorization: string } } & { json: StmtRequest }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { authorization: string } } & { json: StmtRequest }
            output: MissingRequiredParameterResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { authorization: string } } & { json: StmtRequest }
            output: InvalidAccessTokenResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { authorization: string } } & { json: StmtRequest }
            output: UnauthorizedAccessResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { header: { authorization: string } } & { json: StmtRequest }
            output: InsufficientScopeResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { authorization: string } } & { json: StmtRequest }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/tax-documents': {
      $post:
        | {
            input: { header: { authorization: string } } & { json: TaxFormRequest }
            output: TaxFormResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { authorization: string } } & { json: TaxFormRequest }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { authorization: string } } & { json: TaxFormRequest }
            output: MissingRequiredParameterResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { authorization: string } } & { json: TaxFormRequest }
            output: InvalidAccessTokenResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { authorization: string } } & { json: TaxFormRequest }
            output: UnauthorizedAccessResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { header: { authorization: string } } & { json: TaxFormRequest }
            output: InsufficientScopeResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { authorization: string } } & { json: TaxFormRequest }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/tax-vouchers': {
      $post:
        | {
            input: { header: { 'X-Request-ID'?: string | undefined } } & {
              json: string | TaxVoucherJWTListWrapper
            }
            output: TaxVoucherDTO[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Request-ID'?: string | undefined } } & {
              json: string | TaxVoucherJWTListWrapper
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Request-ID'?: string | undefined } } & {
              json: string | TaxVoucherJWTListWrapper
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Request-ID'?: string | undefined } } & {
              json: string | TaxVoucherJWTListWrapper
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/trade-confirmations': {
      $post:
        | {
            input: { header: { authorization: string } } & { json: TradeConfirmationRequest }
            output: TradeConfirmationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { authorization: string } } & { json: TradeConfirmationRequest }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { authorization: string } } & { json: TradeConfirmationRequest }
            output: MissingRequiredParameterResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { authorization: string } } & { json: TradeConfirmationRequest }
            output: InvalidAccessTokenResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { authorization: string } } & { json: TradeConfirmationRequest }
            output: UnauthorizedAccessResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { header: { authorization: string } } & { json: TradeConfirmationRequest }
            output: InsufficientScopeResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { authorization: string } } & { json: TradeConfirmationRequest }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v2/external-asset-transfers': {
      $post:
        | {
            input: {
              json: {
                instructionType:
                  | 'DWAC'
                  | 'FOP'
                  | 'COMPLEX_ASSET_TRANSFER'
                  | 'EXTERNAL_POSITION_TRANSFER'
                instruction:
                  | FopInstructionV2
                  | DwacInstructionV2
                  | ComplexAssetTransferInstructionV2
                  | ExternalPositionTransferV2
              }
            }
            output: AsynchronousInstructionResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              json: {
                instructionType:
                  | 'DWAC'
                  | 'FOP'
                  | 'COMPLEX_ASSET_TRANSFER'
                  | 'EXTERNAL_POSITION_TRANSFER'
                instruction:
                  | FopInstructionV2
                  | DwacInstructionV2
                  | ComplexAssetTransferInstructionV2
                  | ExternalPositionTransferV2
              }
            }
            output: MissingRequiredParameterResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                instructionType:
                  | 'DWAC'
                  | 'FOP'
                  | 'COMPLEX_ASSET_TRANSFER'
                  | 'EXTERNAL_POSITION_TRANSFER'
                instruction:
                  | FopInstructionV2
                  | DwacInstructionV2
                  | ComplexAssetTransferInstructionV2
                  | ExternalPositionTransferV2
              }
            }
            output: ForbiddenInstructionResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                instructionType:
                  | 'DWAC'
                  | 'FOP'
                  | 'COMPLEX_ASSET_TRANSFER'
                  | 'EXTERNAL_POSITION_TRANSFER'
                instruction:
                  | FopInstructionV2
                  | DwacInstructionV2
                  | ComplexAssetTransferInstructionV2
                  | ExternalPositionTransferV2
              }
            }
            output: BusinessRejectResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                instructionType:
                  | 'DWAC'
                  | 'FOP'
                  | 'COMPLEX_ASSET_TRANSFER'
                  | 'EXTERNAL_POSITION_TRANSFER'
                instruction:
                  | FopInstructionV2
                  | DwacInstructionV2
                  | ComplexAssetTransferInstructionV2
                  | ExternalPositionTransferV2
              }
            }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v2/external-asset-transfers:bulk': {
      $post:
        | {
            input: {
              json: {
                instructionType:
                  | 'DWAC'
                  | 'FOP'
                  | 'COMPLEX_ASSET_TRANSFER'
                  | 'EXTERNAL_POSITION_TRANSFER'
                instructions: unknown[]
              }
            }
            output: AsynchronousInstructionSetResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              json: {
                instructionType:
                  | 'DWAC'
                  | 'FOP'
                  | 'COMPLEX_ASSET_TRANSFER'
                  | 'EXTERNAL_POSITION_TRANSFER'
                instructions: unknown[]
              }
            }
            output: BulkMultiStatusResponse
            outputFormat: 'json'
            status: 207
          }
        | {
            input: {
              json: {
                instructionType:
                  | 'DWAC'
                  | 'FOP'
                  | 'COMPLEX_ASSET_TRANSFER'
                  | 'EXTERNAL_POSITION_TRANSFER'
                instructions: unknown[]
              }
            }
            output: MissingRequiredParameterResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                instructionType:
                  | 'DWAC'
                  | 'FOP'
                  | 'COMPLEX_ASSET_TRANSFER'
                  | 'EXTERNAL_POSITION_TRANSFER'
                instructions: unknown[]
              }
            }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/oauth2/api/v1/token': {
      $post:
        | {
            input: { json: TokenRequest } & { form: TokenRequest }
            output: TokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TokenRequest } & { form: TokenRequest }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TokenRequest } & { form: TokenRequest }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/api/fa/fa-preset/get': {
      $post:
        | {
            input: { json: { reqID: bigint } }
            output: ModelPresetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { reqID: bigint } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { reqID: bigint } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { reqID: bigint } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/fa/fa-preset/save': {
      $post:
        | {
            input: { json: ModelPresetsResponse }
            output: {
              error?: string | undefined
              reqID?: bigint | undefined
              subscriptionStatus?: bigint | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ModelPresetsResponse }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ModelPresetsResponse }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: ModelPresetsResponse }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/fa/is-full-master': {
      $post:
        | {
            input: { json: { reqID: bigint; subscriptionKey?: string | undefined } }
            output: {
              isFullMaster?: boolean | undefined
              reqID?: bigint | undefined
              subscriptionStatus?: bigint | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { reqID: bigint; subscriptionKey?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: { reqID: bigint; subscriptionKey?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { reqID: bigint; subscriptionKey?: string | undefined } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { reqID: bigint; subscriptionKey?: string | undefined } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/fa/model/accounts-details': {
      $post:
        | {
            input: {
              json: {
                calcPnls?: boolean | undefined
                model?: string | undefined
                reqID?: bigint | undefined
              }
            }
            output: {
              accountInfoList?:
                | {
                    account?: string | undefined
                    accountImbalance?: string | undefined
                    alias?: string | undefined
                    baseCcyAccount?: string | undefined
                    costBasis?: string | undefined
                    exchangeRate?: number | undefined
                    nlv?: string | undefined
                    numInstrumentsOutsideRange?: bigint | undefined
                    unrealizedPnL?: string | undefined
                  }[]
                | undefined
              baseCcyMaster?: string | undefined
              model?: string | undefined
              reqID?: bigint | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                calcPnls?: boolean | undefined
                model?: string | undefined
                reqID?: bigint | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                calcPnls?: boolean | undefined
                model?: string | undefined
                reqID?: bigint | undefined
              }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                calcPnls?: boolean | undefined
                model?: string | undefined
                reqID?: bigint | undefined
              }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/fa/model/cash-analyzer': {
      $post:
        | {
            input: { json: { reqID: bigint; subscriptionKey?: string | undefined } }
            output: CashAnalyzerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { reqID: bigint; subscriptionKey?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { reqID: bigint; subscriptionKey?: string | undefined } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { reqID: bigint; subscriptionKey?: string | undefined } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/fa/model/invest-divest': {
      $post:
        | {
            input: {
              json: {
                reqID?: bigint | undefined
                model?: string | undefined
                accountList?:
                  | { account?: string | undefined; amtToInvest?: number | undefined }[]
                  | undefined
              }
            }
            output: { reqID?: string | undefined; subscriptionStatus?: bigint | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                reqID?: bigint | undefined
                model?: string | undefined
                accountList?:
                  | { account?: string | undefined; amtToInvest?: number | undefined }[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                reqID?: bigint | undefined
                model?: string | undefined
                accountList?:
                  | { account?: string | undefined; amtToInvest?: number | undefined }[]
                  | undefined
              }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                reqID?: bigint | undefined
                model?: string | undefined
                accountList?:
                  | { account?: string | undefined; amtToInvest?: number | undefined }[]
                  | undefined
              }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/fa/model/invest-divest-positions': {
      $post:
        | {
            input: {
              json: {
                reqID?: bigint | undefined
                model?: string | undefined
                subscriptionStatus?: bigint | undefined
              }
            }
            output: GetInvestedAccountsSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                reqID?: bigint | undefined
                model?: string | undefined
                subscriptionStatus?: bigint | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                reqID?: bigint | undefined
                model?: string | undefined
                subscriptionStatus?: bigint | undefined
              }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                reqID?: bigint | undefined
                model?: string | undefined
                subscriptionStatus?: bigint | undefined
              }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/fa/model/list': {
      $post:
        | {
            input: { json: { reqID: bigint } }
            output: ModelListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { reqID: bigint } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { reqID: bigint } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { reqID: bigint } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/fa/model/positions': {
      $post:
        | {
            input: {
              json: {
                reqID?: bigint | undefined
                model?: string | undefined
                sortField?:
                  | 'actual'
                  | 'actualRangeMax'
                  | 'actualRangeMin'
                  | 'ccy'
                  | 'conid'
                  | 'dlv'
                  | 'instrumentImbalance'
                  | 'instrument'
                  | 'mismatchType'
                  | 'mv'
                  | 'position'
                  | 'target'
                  | undefined
                sortDirection?: 'ASC' | 'DESC' | undefined
                limit?: bigint | undefined
              }
            }
            output: ModelPositionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                reqID?: bigint | undefined
                model?: string | undefined
                sortField?:
                  | 'actual'
                  | 'actualRangeMax'
                  | 'actualRangeMin'
                  | 'ccy'
                  | 'conid'
                  | 'dlv'
                  | 'instrumentImbalance'
                  | 'instrument'
                  | 'mismatchType'
                  | 'mv'
                  | 'position'
                  | 'target'
                  | undefined
                sortDirection?: 'ASC' | 'DESC' | undefined
                limit?: bigint | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                reqID?: bigint | undefined
                model?: string | undefined
                sortField?:
                  | 'actual'
                  | 'actualRangeMax'
                  | 'actualRangeMin'
                  | 'ccy'
                  | 'conid'
                  | 'dlv'
                  | 'instrumentImbalance'
                  | 'instrument'
                  | 'mismatchType'
                  | 'mv'
                  | 'position'
                  | 'target'
                  | undefined
                sortDirection?: 'ASC' | 'DESC' | undefined
                limit?: bigint | undefined
              }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                reqID?: bigint | undefined
                model?: string | undefined
                sortField?:
                  | 'actual'
                  | 'actualRangeMax'
                  | 'actualRangeMin'
                  | 'ccy'
                  | 'conid'
                  | 'dlv'
                  | 'instrumentImbalance'
                  | 'instrument'
                  | 'mismatchType'
                  | 'mv'
                  | 'position'
                  | 'target'
                  | undefined
                sortDirection?: 'ASC' | 'DESC' | undefined
                limit?: bigint | undefined
              }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/fa/model/rebalance/to-existing-targets': {
      $post:
        | {
            input: { json: { reqID: bigint; model: string; subscriptionKey?: string | undefined } }
            output: RebalanceSubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { reqID: bigint; model: string; subscriptionKey?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { reqID: bigint; model: string; subscriptionKey?: string | undefined } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { reqID: bigint; model: string; subscriptionKey?: string | undefined } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/fa/model/rebalance/to-new-targets': {
      $post:
        | {
            input: {
              json: {
                reqID: bigint
                model: string
                positionTargets: {
                  conid?: bigint | undefined
                  target?: number | undefined
                  locked?: boolean | undefined
                }[]
                cashTargets: {
                  ccy?: string | undefined
                  target?: number | undefined
                  locked?: boolean | undefined
                }[]
                subscriptionKey?: string | undefined
              }
            }
            output: RebalanceSubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                reqID: bigint
                model: string
                positionTargets: {
                  conid?: bigint | undefined
                  target?: number | undefined
                  locked?: boolean | undefined
                }[]
                cashTargets: {
                  ccy?: string | undefined
                  target?: number | undefined
                  locked?: boolean | undefined
                }[]
                subscriptionKey?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                reqID: bigint
                model: string
                positionTargets: {
                  conid?: bigint | undefined
                  target?: number | undefined
                  locked?: boolean | undefined
                }[]
                cashTargets: {
                  ccy?: string | undefined
                  target?: number | undefined
                  locked?: boolean | undefined
                }[]
                subscriptionKey?: string | undefined
              }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                reqID: bigint
                model: string
                positionTargets: {
                  conid?: bigint | undefined
                  target?: number | undefined
                  locked?: boolean | undefined
                }[]
                cashTargets: {
                  ccy?: string | undefined
                  target?: number | undefined
                  locked?: boolean | undefined
                }[]
                subscriptionKey?: string | undefined
              }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/fa/model/rebalance/to-specific-targets': {
      $post:
        | {
            input: {
              json: {
                reqID: bigint
                model: string
                positionTargets: {
                  conid?: bigint | undefined
                  target?: number | undefined
                  locked?: boolean | undefined
                }[]
                subscriptionKey?: string | undefined
              }
            }
            output: RebalanceAllocationPreview
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                reqID: bigint
                model: string
                positionTargets: {
                  conid?: bigint | undefined
                  target?: number | undefined
                  locked?: boolean | undefined
                }[]
                subscriptionKey?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                reqID: bigint
                model: string
                positionTargets: {
                  conid?: bigint | undefined
                  target?: number | undefined
                  locked?: boolean | undefined
                }[]
                subscriptionKey?: string | undefined
              }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                reqID: bigint
                model: string
                positionTargets: {
                  conid?: bigint | undefined
                  target?: number | undefined
                  locked?: boolean | undefined
                }[]
                subscriptionKey?: string | undefined
              }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/fa/model/save': {
      $post:
        | {
            input: {
              json: {
                cashTargets: { ccy?: string | undefined; target?: number | undefined }[]
                desc: string
                isStatic: boolean
                model: string
                positionTargets: { conid?: bigint | undefined; target?: number | undefined }[]
                reqID: bigint
              }
            }
            output: { reqID?: bigint | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                cashTargets: { ccy?: string | undefined; target?: number | undefined }[]
                desc: string
                isStatic: boolean
                model: string
                positionTargets: { conid?: bigint | undefined; target?: number | undefined }[]
                reqID: bigint
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                cashTargets: { ccy?: string | undefined; target?: number | undefined }[]
                desc: string
                isStatic: boolean
                model: string
                positionTargets: { conid?: bigint | undefined; target?: number | undefined }[]
                reqID: bigint
              }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                cashTargets: { ccy?: string | undefined; target?: number | undefined }[]
                desc: string
                isStatic: boolean
                model: string
                positionTargets: { conid?: bigint | undefined; target?: number | undefined }[]
                reqID: bigint
              }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/fa/model/submit-transfers': {
      $post:
        | {
            input: { json: { reqID?: bigint | undefined; fpOrderId?: bigint | undefined } }
            output: { reqID?: bigint | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { reqID?: bigint | undefined; fpOrderId?: bigint | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { reqID?: bigint | undefined; fpOrderId?: bigint | undefined } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { reqID?: bigint | undefined; fpOrderId?: bigint | undefined } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/fa/model/summary': {
      $post:
        | {
            input: { json: { reqID?: bigint | undefined; model?: string | undefined } }
            output: ModelSummaryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { reqID?: bigint | undefined; model?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { reqID?: bigint | undefined; model?: string | undefined } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { reqID?: bigint | undefined; model?: string | undefined } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/fa/model/tws-invest-divest': {
      $post:
        | {
            input: {
              json: {
                reqID: bigint
                account?: string | undefined
                accountList?: string[] | undefined
                group?: string | undefined
                modelList: {
                  investCurrency?: string | undefined
                  amtToInvest?: number | undefined
                  model?: string | undefined
                }[]
                subscriptionKey?: string | undefined
              }
            }
            output: TwsInvestDivestResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                reqID: bigint
                account?: string | undefined
                accountList?: string[] | undefined
                group?: string | undefined
                modelList: {
                  investCurrency?: string | undefined
                  amtToInvest?: number | undefined
                  model?: string | undefined
                }[]
                subscriptionKey?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                reqID: bigint
                account?: string | undefined
                accountList?: string[] | undefined
                group?: string | undefined
                modelList: {
                  investCurrency?: string | undefined
                  amtToInvest?: number | undefined
                  model?: string | undefined
                }[]
                subscriptionKey?: string | undefined
              }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                reqID: bigint
                account?: string | undefined
                accountList?: string[] | undefined
                group?: string | undefined
                modelList: {
                  investCurrency?: string | undefined
                  amtToInvest?: number | undefined
                  model?: string | undefined
                }[]
                subscriptionKey?: string | undefined
              }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/fyi/deliveryoptions/device': {
      $post:
        | {
            input: { json: FyiEnableDeviceOption }
            output: FyiVT
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: FyiEnableDeviceOption }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: FyiEnableDeviceOption }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: FyiEnableDeviceOption }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: FyiEnableDeviceOption }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/fyi/settings/:typecode': {
      $post:
        | {
            input: { param: { typecode: Typecodes } } & { json: { enabled?: boolean | undefined } }
            output: FyiVT
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { typecode: Typecodes } } & { json: { enabled?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { typecode: Typecodes } } & { json: { enabled?: boolean | undefined } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { typecode: Typecodes } } & { json: { enabled?: boolean | undefined } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/account': {
      $post:
        | {
            input: { json: { acctId?: string | undefined } }
            output: SetAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { acctId?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { acctId?: string | undefined } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { acctId?: string | undefined } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/account/allocation/group': {
      $post:
        | {
            input: {
              json: {
                name: string
                accounts: { name: string; amount?: bigint | undefined }[]
                default_method: AllocationMethod
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name: string
                accounts: { name: string; amount?: bigint | undefined }[]
                default_method: AllocationMethod
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                name: string
                accounts: { name: string; amount?: bigint | undefined }[]
                default_method: AllocationMethod
              }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                name: string
                accounts: { name: string; amount?: bigint | undefined }[]
                default_method: AllocationMethod
              }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
      $get:
        | { input: {}; output: AllocationGroups; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorOnlyResponse; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponse2; outputFormat: 'text'; status: 503 }
      $put:
        | {
            input: {
              json: {
                name: string
                prev_name?: string | undefined
                accounts: { name: string; amount?: bigint | undefined }[]
                default_method: AllocationMethod
              }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name: string
                prev_name?: string | undefined
                accounts: { name: string; amount?: bigint | undefined }[]
                default_method: AllocationMethod
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                name: string
                prev_name?: string | undefined
                accounts: { name: string; amount?: bigint | undefined }[]
                default_method: AllocationMethod
              }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                name: string
                prev_name?: string | undefined
                accounts: { name: string; amount?: bigint | undefined }[]
                default_method: AllocationMethod
              }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/account/allocation/group/delete': {
      $post:
        | {
            input: { json: { name: string } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { name: string } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { name: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/account/allocation/group/single': {
      $post:
        | {
            input: { json: { name: string } }
            output: AllocationGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { name: string } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { name: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/account/allocation/presets': {
      $post:
        | {
            input: { json: Presets }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: Presets }; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: { json: Presets }; output: ErrorOnlyResponse; outputFormat: 'json'; status: 500 }
        | { input: { json: Presets }; output: ErrorResponse2; outputFormat: 'text'; status: 503 }
      $get:
        | { input: {}; output: Presets; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorOnlyResponse; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponse2; outputFormat: 'text'; status: 503 }
    }
  } & {
    '/v1/api/iserver/account/:accountId/alert': {
      $post:
        | {
            input: { param: { accountId: string } } & { json: AlertCreationRequest }
            output: AlertCreationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: AlertCreationRequest }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { accountId: string } } & { json: AlertCreationRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string } } & { json: AlertCreationRequest }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { accountId: string } } & { json: AlertCreationRequest }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/account/:accountId/alert/activate': {
      $post:
        | {
            input: { param: { accountId: string } } & { json: AlertActivationRequest }
            output: AlertActivationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: AlertActivationRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string } } & { json: AlertActivationRequest }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/api/iserver/account/:accountId/order/:orderId': {
      $post:
        | {
            input: { param: { accountId: string; orderId: string } } & {
              json: SingleOrderSubmissionRequest
            }
            output: OrderSubmitSuccess | OrderSubmitError | OrderReplyMessage | AdvancedOrderReject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string; orderId: string } } & {
              json: SingleOrderSubmissionRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string; orderId: string } } & {
              json: SingleOrderSubmissionRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string; orderId: string } } & {
              json: SingleOrderSubmissionRequest
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { accountId: string; orderId: string } } & {
              json: SingleOrderSubmissionRequest
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
      $delete:
        | {
            input: { param: { accountId: string; orderId: string } } & {
              query: {
                extOperator?: string | undefined
                manualIndicator?: boolean | undefined
                manualCancelTime?: string | undefined
              }
            }
            output: OrderCancelSuccess | OrderSubmitError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string; orderId: string } } & {
              query: {
                extOperator?: string | undefined
                manualIndicator?: boolean | undefined
                manualCancelTime?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string; orderId: string } } & {
              query: {
                extOperator?: string | undefined
                manualIndicator?: boolean | undefined
                manualCancelTime?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string; orderId: string } } & {
              query: {
                extOperator?: string | undefined
                manualIndicator?: boolean | undefined
                manualCancelTime?: string | undefined
              }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { accountId: string; orderId: string } } & {
              query: {
                extOperator?: string | undefined
                manualIndicator?: boolean | undefined
                manualCancelTime?: string | undefined
              }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/account/:accountId/orders': {
      $post:
        | {
            input: { param: { accountId: string } } & { json: OrdersSubmissionRequest }
            output: OrderSubmitSuccess | OrderReplyMessage | OrderSubmitError | AdvancedOrderReject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: OrdersSubmissionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string } } & { json: OrdersSubmissionRequest }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { accountId: string } } & { json: OrdersSubmissionRequest }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/account/:accountId/orders/whatif': {
      $post:
        | {
            input: { param: { accountId: string } } & { json: OrdersSubmissionRequest }
            output: OrderPreview
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: OrdersSubmissionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string } } & { json: OrdersSubmissionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string } } & { json: OrdersSubmissionRequest }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { accountId: string } } & { json: OrdersSubmissionRequest }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/account/:modelCode/orders': {
      $post:
        | {
            input: { param: { modelCode: string } } & {
              json: {
                orders: {
                  acctId?: string | undefined
                  conid?: bigint | undefined
                  conidex?: string | undefined
                  secType?: string | undefined
                  cOID?: string | undefined
                  parentId?: string | undefined
                  orderType?:
                    | 'MKT'
                    | 'LMT'
                    | 'STP'
                    | 'STOP_LIMIT'
                    | 'MIDPRICE'
                    | 'TRAIL'
                    | 'TRAILLMT'
                    | undefined
                  listingExchange?: string | undefined
                  isSingleGroup?: boolean | undefined
                  outsideRTH?: boolean | undefined
                  price?: number | undefined
                  auxPrice?: number | undefined
                  side?: 'BUY' | 'SELL' | undefined
                  ticker?: string | undefined
                  tif?: 'DAY' | 'GTC' | 'OPG' | 'IOC' | undefined
                  trailingAmt?: number | undefined
                  trailingType?: 'amt' | '%' | undefined
                  referrer?: string | undefined
                  quantity?: number | undefined
                  cashQty?: number | undefined
                  fxQty?: number | undefined
                  useAdaptive?: boolean | undefined
                  isCcyConv?: boolean | undefined
                  allocationMethod?: string | undefined
                  strategy?: string | undefined
                  strategyParameters?: { [x: string]: unknown } | undefined
                }[]
              }
            }
            output: {
              order_id?: string | undefined
              order_status?: string | undefined
              encrypt_message?: string | undefined
              id?: string | undefined
              message?: string[] | undefined
              isSuspended?: boolean | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { modelCode: string } } & {
              json: {
                orders: {
                  acctId?: string | undefined
                  conid?: bigint | undefined
                  conidex?: string | undefined
                  secType?: string | undefined
                  cOID?: string | undefined
                  parentId?: string | undefined
                  orderType?:
                    | 'MKT'
                    | 'LMT'
                    | 'STP'
                    | 'STOP_LIMIT'
                    | 'MIDPRICE'
                    | 'TRAIL'
                    | 'TRAILLMT'
                    | undefined
                  listingExchange?: string | undefined
                  isSingleGroup?: boolean | undefined
                  outsideRTH?: boolean | undefined
                  price?: number | undefined
                  auxPrice?: number | undefined
                  side?: 'BUY' | 'SELL' | undefined
                  ticker?: string | undefined
                  tif?: 'DAY' | 'GTC' | 'OPG' | 'IOC' | undefined
                  trailingAmt?: number | undefined
                  trailingType?: 'amt' | '%' | undefined
                  referrer?: string | undefined
                  quantity?: number | undefined
                  cashQty?: number | undefined
                  fxQty?: number | undefined
                  useAdaptive?: boolean | undefined
                  isCcyConv?: boolean | undefined
                  allocationMethod?: string | undefined
                  strategy?: string | undefined
                  strategyParameters?: { [x: string]: unknown } | undefined
                }[]
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { modelCode: string } } & {
              json: {
                orders: {
                  acctId?: string | undefined
                  conid?: bigint | undefined
                  conidex?: string | undefined
                  secType?: string | undefined
                  cOID?: string | undefined
                  parentId?: string | undefined
                  orderType?:
                    | 'MKT'
                    | 'LMT'
                    | 'STP'
                    | 'STOP_LIMIT'
                    | 'MIDPRICE'
                    | 'TRAIL'
                    | 'TRAILLMT'
                    | undefined
                  listingExchange?: string | undefined
                  isSingleGroup?: boolean | undefined
                  outsideRTH?: boolean | undefined
                  price?: number | undefined
                  auxPrice?: number | undefined
                  side?: 'BUY' | 'SELL' | undefined
                  ticker?: string | undefined
                  tif?: 'DAY' | 'GTC' | 'OPG' | 'IOC' | undefined
                  trailingAmt?: number | undefined
                  trailingType?: 'amt' | '%' | undefined
                  referrer?: string | undefined
                  quantity?: number | undefined
                  cashQty?: number | undefined
                  fxQty?: number | undefined
                  useAdaptive?: boolean | undefined
                  isCcyConv?: boolean | undefined
                  allocationMethod?: string | undefined
                  strategy?: string | undefined
                  strategyParameters?: { [x: string]: unknown } | undefined
                }[]
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { modelCode: string } } & {
              json: {
                orders: {
                  acctId?: string | undefined
                  conid?: bigint | undefined
                  conidex?: string | undefined
                  secType?: string | undefined
                  cOID?: string | undefined
                  parentId?: string | undefined
                  orderType?:
                    | 'MKT'
                    | 'LMT'
                    | 'STP'
                    | 'STOP_LIMIT'
                    | 'MIDPRICE'
                    | 'TRAIL'
                    | 'TRAILLMT'
                    | undefined
                  listingExchange?: string | undefined
                  isSingleGroup?: boolean | undefined
                  outsideRTH?: boolean | undefined
                  price?: number | undefined
                  auxPrice?: number | undefined
                  side?: 'BUY' | 'SELL' | undefined
                  ticker?: string | undefined
                  tif?: 'DAY' | 'GTC' | 'OPG' | 'IOC' | undefined
                  trailingAmt?: number | undefined
                  trailingType?: 'amt' | '%' | undefined
                  referrer?: string | undefined
                  quantity?: number | undefined
                  cashQty?: number | undefined
                  fxQty?: number | undefined
                  useAdaptive?: boolean | undefined
                  isCcyConv?: boolean | undefined
                  allocationMethod?: string | undefined
                  strategy?: string | undefined
                  strategyParameters?: { [x: string]: unknown } | undefined
                }[]
              }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { modelCode: string } } & {
              json: {
                orders: {
                  acctId?: string | undefined
                  conid?: bigint | undefined
                  conidex?: string | undefined
                  secType?: string | undefined
                  cOID?: string | undefined
                  parentId?: string | undefined
                  orderType?:
                    | 'MKT'
                    | 'LMT'
                    | 'STP'
                    | 'STOP_LIMIT'
                    | 'MIDPRICE'
                    | 'TRAIL'
                    | 'TRAILLMT'
                    | undefined
                  listingExchange?: string | undefined
                  isSingleGroup?: boolean | undefined
                  outsideRTH?: boolean | undefined
                  price?: number | undefined
                  auxPrice?: number | undefined
                  side?: 'BUY' | 'SELL' | undefined
                  ticker?: string | undefined
                  tif?: 'DAY' | 'GTC' | 'OPG' | 'IOC' | undefined
                  trailingAmt?: number | undefined
                  trailingType?: 'amt' | '%' | undefined
                  referrer?: string | undefined
                  quantity?: number | undefined
                  cashQty?: number | undefined
                  fxQty?: number | undefined
                  useAdaptive?: boolean | undefined
                  isCcyConv?: boolean | undefined
                  allocationMethod?: string | undefined
                  strategy?: string | undefined
                  strategyParameters?: { [x: string]: unknown } | undefined
                }[]
              }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/auth/ssodh/init': {
      $post:
        | {
            input: { json: BrokerageSessionInitRequest }
            output: BrokerageSessionStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BrokerageSessionInitRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: BrokerageSessionInitRequest }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: BrokerageSessionInitRequest }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/auth/status': {
      $post:
        | { input: {}; output: BrokerageSessionStatus; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/v1/api/iserver/contract/rules': {
      $post:
        | {
            input: {
              json: {
                conid: bigint
                isBuy?: boolean | undefined
                modifyOrder?: boolean | undefined
                orderId?: bigint | undefined
              }
            }
            output: ContractRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                conid: bigint
                isBuy?: boolean | undefined
                modifyOrder?: boolean | undefined
                orderId?: bigint | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                conid: bigint
                isBuy?: boolean | undefined
                modifyOrder?: boolean | undefined
                orderId?: bigint | undefined
              }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                conid: bigint
                isBuy?: boolean | undefined
                modifyOrder?: boolean | undefined
                orderId?: bigint | undefined
              }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/dynaccount': {
      $post:
        | {
            input: { json: { acctId: string } }
            output: SetAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { acctId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { acctId: string } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { acctId: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/marketdata/unsubscribe': {
      $post:
        | {
            input: { json: { conid?: bigint | undefined } }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { conid?: bigint | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { conid?: bigint | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { conid?: bigint | undefined } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { conid?: bigint | undefined } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/notification': {
      $post: {
        input: {
          json: {
            orderId?: bigint | undefined
            reqId?: string | undefined
            text?: string | undefined
          }
        }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/api/iserver/questions/suppress': {
      $post:
        | {
            input: {
              json: {
                messageIds?:
                  | (
                      | 'o163'
                      | 'o354'
                      | 'o382'
                      | 'o383'
                      | 'o403'
                      | 'o451'
                      | 'o2136'
                      | 'o2137'
                      | 'o2165'
                      | 'o10082'
                      | 'o10138'
                      | 'o10151'
                      | 'o10152'
                      | 'o10153'
                      | 'o10164'
                      | 'o10223'
                      | 'o10288'
                      | 'o10331'
                      | 'o10332'
                      | 'o10333'
                      | 'o10334'
                      | 'o10335'
                      | 'o10336'
                      | 'p6'
                      | 'p12'
                    )[]
                  | undefined
              }
            }
            output: { status?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                messageIds?:
                  | (
                      | 'o163'
                      | 'o354'
                      | 'o382'
                      | 'o383'
                      | 'o403'
                      | 'o451'
                      | 'o2136'
                      | 'o2137'
                      | 'o2165'
                      | 'o10082'
                      | 'o10138'
                      | 'o10151'
                      | 'o10152'
                      | 'o10153'
                      | 'o10164'
                      | 'o10223'
                      | 'o10288'
                      | 'o10331'
                      | 'o10332'
                      | 'o10333'
                      | 'o10334'
                      | 'o10335'
                      | 'o10336'
                      | 'p6'
                      | 'p12'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                messageIds?:
                  | (
                      | 'o163'
                      | 'o354'
                      | 'o382'
                      | 'o383'
                      | 'o403'
                      | 'o451'
                      | 'o2136'
                      | 'o2137'
                      | 'o2165'
                      | 'o10082'
                      | 'o10138'
                      | 'o10151'
                      | 'o10152'
                      | 'o10153'
                      | 'o10164'
                      | 'o10223'
                      | 'o10288'
                      | 'o10331'
                      | 'o10332'
                      | 'o10333'
                      | 'o10334'
                      | 'o10335'
                      | 'o10336'
                      | 'p6'
                      | 'p12'
                    )[]
                  | undefined
              }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                messageIds?:
                  | (
                      | 'o163'
                      | 'o354'
                      | 'o382'
                      | 'o383'
                      | 'o403'
                      | 'o451'
                      | 'o2136'
                      | 'o2137'
                      | 'o2165'
                      | 'o10082'
                      | 'o10138'
                      | 'o10151'
                      | 'o10152'
                      | 'o10153'
                      | 'o10164'
                      | 'o10223'
                      | 'o10288'
                      | 'o10331'
                      | 'o10332'
                      | 'o10333'
                      | 'o10334'
                      | 'o10335'
                      | 'o10336'
                      | 'p6'
                      | 'p12'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/questions/suppress/reset': {
      $post:
        | { input: {}; output: { status?: string | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorOnlyResponse; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponse2; outputFormat: 'text'; status: 503 }
    }
  } & {
    '/v1/api/iserver/reply/:replyId': {
      $post:
        | {
            input: { param: { replyId: string } } & { json: { confirmed?: boolean | undefined } }
            output:
              | OrderSubmitSuccess
              | OrderReplyMessage
              | OrderSubmitError
              | OrderReplyNotFound
              | AdvancedOrderReject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { replyId: string } } & { json: { confirmed?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { replyId: string } } & { json: { confirmed?: boolean | undefined } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { replyId: string } } & { json: { confirmed?: boolean | undefined } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/scanner/run': {
      $post:
        | {
            input: { json: IserverScannerRunRequest }
            output: IserverScannerRunResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IserverScannerRunRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: IserverScannerRunRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: IserverScannerRunRequest }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: IserverScannerRunRequest }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/secdef/search': {
      $post:
        | {
            input: {
              json: {
                symbol: string
                secType?: 'STK' | 'IND' | 'BOND' | undefined
                name?: boolean | undefined
                more?: boolean | undefined
                fund?: boolean | undefined
                fundFamilyConidEx?: string | undefined
                pattern?: boolean | undefined
                referrer?: string | undefined
              }
            }
            output: SecdefSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                symbol: string
                secType?: 'STK' | 'IND' | 'BOND' | undefined
                name?: boolean | undefined
                more?: boolean | undefined
                fund?: boolean | undefined
                fundFamilyConidEx?: string | undefined
                pattern?: boolean | undefined
                referrer?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                symbol: string
                secType?: 'STK' | 'IND' | 'BOND' | undefined
                name?: boolean | undefined
                more?: boolean | undefined
                fund?: boolean | undefined
                fundFamilyConidEx?: string | undefined
                pattern?: boolean | undefined
                referrer?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                symbol: string
                secType?: 'STK' | 'IND' | 'BOND' | undefined
                name?: boolean | undefined
                more?: boolean | undefined
                fund?: boolean | undefined
                fundFamilyConidEx?: string | undefined
                pattern?: boolean | undefined
                referrer?: string | undefined
              }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                symbol: string
                secType?: 'STK' | 'IND' | 'BOND' | undefined
                name?: boolean | undefined
                more?: boolean | undefined
                fund?: boolean | undefined
                fundFamilyConidEx?: string | undefined
                pattern?: boolean | undefined
                referrer?: string | undefined
              }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
      $get:
        | {
            input: {
              query: {
                symbol?: string | undefined
                secType?: 'STK' | 'IND' | 'BOND' | undefined
                name?: boolean | undefined
                more?: boolean | undefined
                fund?: boolean | undefined
                fundFamilyConidEx?: string | undefined
                pattern?: boolean | undefined
                referrer?: string | undefined
              }
            }
            output: SecdefSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol?: string | undefined
                secType?: 'STK' | 'IND' | 'BOND' | undefined
                name?: boolean | undefined
                more?: boolean | undefined
                fund?: boolean | undefined
                fundFamilyConidEx?: string | undefined
                pattern?: boolean | undefined
                referrer?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol?: string | undefined
                secType?: 'STK' | 'IND' | 'BOND' | undefined
                name?: boolean | undefined
                more?: boolean | undefined
                fund?: boolean | undefined
                fundFamilyConidEx?: string | undefined
                pattern?: boolean | undefined
                referrer?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                symbol?: string | undefined
                secType?: 'STK' | 'IND' | 'BOND' | undefined
                name?: boolean | undefined
                more?: boolean | undefined
                fund?: boolean | undefined
                fundFamilyConidEx?: string | undefined
                pattern?: boolean | undefined
                referrer?: string | undefined
              }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                symbol?: string | undefined
                secType?: 'STK' | 'IND' | 'BOND' | undefined
                name?: boolean | undefined
                more?: boolean | undefined
                fund?: boolean | undefined
                fundFamilyConidEx?: string | undefined
                pattern?: boolean | undefined
                referrer?: string | undefined
              }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/watchlist': {
      $post:
        | {
            input: { json: { id: string; name: string; rows: { C?: string | undefined }[] } }
            output: {
              id?: string | undefined
              hash?: string | undefined
              name?: string | undefined
              readOnly?: boolean | undefined
              instruments?: unknown[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id: string; name: string; rows: { C?: string | undefined }[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { id: string; name: string; rows: { C?: string | undefined }[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { id: string; name: string; rows: { C?: string | undefined }[] } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { id: string; name: string; rows: { C?: string | undefined }[] } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
      $get:
        | {
            input: { query: { id: string } }
            output: SingleWatchlist
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { id: string } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { id: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
      $delete:
        | {
            input: { query: { id: string } }
            output: WatchlistDeleteSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { id: string } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { id: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/logout': {
      $post:
        | { input: {}; output: { status?: boolean | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/v1/api/oauth/access_token': {
      $post:
        | {
            input: { header: { Authorization?: string | undefined } }
            output: {
              is_true?: boolean | undefined
              oauth_token?: string | undefined
              oauth_token_secret?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Authorization?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization?: string | undefined } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/oauth/live_session_token': {
      $post:
        | {
            input: { header: { Authorization?: string | undefined } }
            output: {
              diffie_hellman_challenge?: string | undefined
              live_session_token_signature?: string | undefined
              live_session_token_expiration?: bigint | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Authorization?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization?: string | undefined } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/oauth/request_token': {
      $post:
        | {
            input: { header: { Authorization?: string | undefined } }
            output: { oauth_token?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Authorization?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization?: string | undefined } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/pa/allocation': {
      $post:
        | {
            input: {
              json: {
                acctIds: string[]
                type:
                  | 'FINANCIAL_INSTRUMENT'
                  | 'ASSET_CLASS'
                  | 'SECTOR'
                  | 'REGION'
                  | 'COUNTRY'
                  | 'ALL'
                currency?: string | undefined
                date?: string | undefined
                model?: string | undefined
              }
            }
            output: AllocationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                acctIds: string[]
                type:
                  | 'FINANCIAL_INSTRUMENT'
                  | 'ASSET_CLASS'
                  | 'SECTOR'
                  | 'REGION'
                  | 'COUNTRY'
                  | 'ALL'
                currency?: string | undefined
                date?: string | undefined
                model?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                acctIds: string[]
                type:
                  | 'FINANCIAL_INSTRUMENT'
                  | 'ASSET_CLASS'
                  | 'SECTOR'
                  | 'REGION'
                  | 'COUNTRY'
                  | 'ALL'
                currency?: string | undefined
                date?: string | undefined
                model?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                acctIds: string[]
                type:
                  | 'FINANCIAL_INSTRUMENT'
                  | 'ASSET_CLASS'
                  | 'SECTOR'
                  | 'REGION'
                  | 'COUNTRY'
                  | 'ALL'
                currency?: string | undefined
                date?: string | undefined
                model?: string | undefined
              }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                acctIds: string[]
                type:
                  | 'FINANCIAL_INSTRUMENT'
                  | 'ASSET_CLASS'
                  | 'SECTOR'
                  | 'REGION'
                  | 'COUNTRY'
                  | 'ALL'
                currency?: string | undefined
                date?: string | undefined
                model?: string | undefined
              }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/pa/allperiods': {
      $post:
        | {
            input: { query: { param?: string | undefined } } & {
              json: { acctIds?: string[] | undefined }
            }
            output: DetailedContractInformation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { param?: string | undefined } } & {
              json: { acctIds?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { param?: string | undefined } } & {
              json: { acctIds?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { param?: string | undefined } } & {
              json: { acctIds?: string[] | undefined }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { param?: string | undefined } } & {
              json: { acctIds?: string[] | undefined }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/pa/performance': {
      $post:
        | {
            input: {
              json: {
                acctIds?: unknown[] | undefined
                period?: '1D' | '7D' | 'MTD' | '1M' | '3M' | '6M' | '12M' | 'YTD' | undefined
              }
            }
            output: PerformanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                acctIds?: unknown[] | undefined
                period?: '1D' | '7D' | 'MTD' | '1M' | '3M' | '6M' | '12M' | 'YTD' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                acctIds?: unknown[] | undefined
                period?: '1D' | '7D' | 'MTD' | '1M' | '3M' | '6M' | '12M' | 'YTD' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                acctIds?: unknown[] | undefined
                period?: '1D' | '7D' | 'MTD' | '1M' | '3M' | '6M' | '12M' | 'YTD' | undefined
              }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                acctIds?: unknown[] | undefined
                period?: '1D' | '7D' | 'MTD' | '1M' | '3M' | '6M' | '12M' | 'YTD' | undefined
              }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/pa/transactions': {
      $post:
        | {
            input: {
              json: {
                acctIds?: string[] | undefined
                conids?: bigint[] | undefined
                currency?: string | undefined
                days?: bigint | undefined
              }
            }
            output: TransactionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                acctIds?: string[] | undefined
                conids?: bigint[] | undefined
                currency?: string | undefined
                days?: bigint | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                acctIds?: string[] | undefined
                conids?: bigint[] | undefined
                currency?: string | undefined
                days?: bigint | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                acctIds?: string[] | undefined
                conids?: bigint[] | undefined
                currency?: string | undefined
                days?: bigint | undefined
              }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                acctIds?: string[] | undefined
                conids?: bigint[] | undefined
                currency?: string | undefined
                days?: bigint | undefined
              }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/portfolio/:accountId/positions/invalidate': {
      $post:
        | {
            input: { param: { accountId: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/tickle': {
      $post:
        | { input: {}; output: TickleResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/gw/api/v1/accounts/:accountId/status': {
      $patch:
        | {
            input: { param: { accountId: string } } & { json: string }
            output: AccountStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { json: string }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string } } & { json: string }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string } } & { json: string }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { accountId: string } } & { json: string }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { accountId: string } } & { json: string }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { accountId: string } }
            output: AccountStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { accountId: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { accountId: string } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/requests/:requestId/status': {
      $patch:
        | {
            input: { param: { requestId: bigint } } & { json: string }
            output: AmRequestStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { requestId: bigint } } & { json: string }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { requestId: bigint } } & { json: string }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { requestId: bigint } } & { json: string }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { requestId: bigint } } & { json: string }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { requestId: bigint } } & { json: string }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { requestId: bigint } } & { query: { type: 'response' | 'update' } }
            output: AmRequestStatusResponse | StatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { requestId: bigint } } & { query: { type: 'response' | 'update' } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { requestId: bigint } } & { query: { type: 'response' | 'update' } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { requestId: bigint } } & { query: { type: 'response' | 'update' } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { requestId: bigint } } & { query: { type: 'response' | 'update' } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { requestId: bigint } } & { query: { type: 'response' | 'update' } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/accounts/login-messages': {
      $get:
        | {
            input: { query: { loginMessageRequest: LoginMessageRequest } }
            output: LoginMessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { loginMessageRequest: LoginMessageRequest } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { loginMessageRequest: LoginMessageRequest } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { loginMessageRequest: LoginMessageRequest } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { loginMessageRequest: LoginMessageRequest } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { query: { loginMessageRequest: LoginMessageRequest } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/accounts/status': {
      $get:
        | {
            input: { query: { accountStatusRequest: AccountStatusRequest } }
            output: AccountStatusBulkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { accountStatusRequest: AccountStatusRequest } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { accountStatusRequest: AccountStatusRequest } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { accountStatusRequest: AccountStatusRequest } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { accountStatusRequest: AccountStatusRequest } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { query: { accountStatusRequest: AccountStatusRequest } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/accounts/:accountId/details': {
      $get:
        | {
            input: { param: { accountId: string } }
            output: AccountDetailsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { accountId: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { accountId: string } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/accounts/:accountId/kyc': {
      $get:
        | {
            input: { param: { accountId: string } }
            output: Au10TixDetailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { accountId: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { accountId: string } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/accounts/:accountId/login-messages': {
      $get:
        | {
            input: { param: { accountId: string } } & { query: { type?: string | undefined } }
            output: LoginMessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { query: { type?: string | undefined } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string } } & { query: { type?: string | undefined } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string } } & { query: { type?: string | undefined } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { accountId: string } } & { query: { type?: string | undefined } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { accountId: string } } & { query: { type?: string | undefined } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/client-instructions/:clientInstructionId': {
      $get:
        | {
            input: { param: { 'client-id': string; clientInstructionId: bigint } }
            output:
              | InstructionPollingResponse
              | InstructionResponse
              | QueryRecentInstructionResponse
              | DepositFundsPollingResponse
              | QueryIRAContributionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'client-id': string; clientInstructionId: bigint } }
            output: InstructionResponse
            outputFormat: 'json'
            status: 208
          }
        | {
            input: { param: { 'client-id': string; clientInstructionId: bigint } }
            output: NoSuchInstructionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { 'client-id': string; clientInstructionId: bigint } }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/echo/https': {
      $get:
        | { input: {}; output: EchoResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: InvalidAccessTokenResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: InsufficientScopeResponse; outputFormat: 'json'; status: 403 }
        | { input: {}; output: InternalServerErrorResponse; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/gw/api/v1/enumerations/complex-asset-transfer': {
      $get:
        | {
            input: { query: { instructionType: string } }
            output: GetBrokerListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { instructionType: string } }
            output: NoSuchInstructionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { instructionType: string } }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/enumerations/:enumerationType': {
      $get:
        | {
            input: { param: { enumeration: EnumerationType } } & {
              query: {
                currency?: string | undefined
                ibEntity?: string | undefined
                mdStatusNonPro?: string | undefined
                'form-number'?: string | undefined
                language?:
                  | 'en'
                  | 'ar'
                  | 'de'
                  | 'es'
                  | 'fr'
                  | 'he'
                  | 'hu'
                  | 'it'
                  | 'ja'
                  | 'nl'
                  | 'pt'
                  | 'ru'
                  | 'zh_CN'
                  | 'zh_TW'
                  | undefined
                accountId?: string | undefined
                userName?: string | undefined
                type?: string | undefined
                citizenship?: string[] | undefined
              }
            }
            output: EnumerationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { enumeration: EnumerationType } } & {
              query: {
                currency?: string | undefined
                ibEntity?: string | undefined
                mdStatusNonPro?: string | undefined
                'form-number'?: string | undefined
                language?:
                  | 'en'
                  | 'ar'
                  | 'de'
                  | 'es'
                  | 'fr'
                  | 'he'
                  | 'hu'
                  | 'it'
                  | 'ja'
                  | 'nl'
                  | 'pt'
                  | 'ru'
                  | 'zh_CN'
                  | 'zh_TW'
                  | undefined
                accountId?: string | undefined
                userName?: string | undefined
                type?: string | undefined
                citizenship?: string[] | undefined
              }
            }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { enumeration: EnumerationType } } & {
              query: {
                currency?: string | undefined
                ibEntity?: string | undefined
                mdStatusNonPro?: string | undefined
                'form-number'?: string | undefined
                language?:
                  | 'en'
                  | 'ar'
                  | 'de'
                  | 'es'
                  | 'fr'
                  | 'he'
                  | 'hu'
                  | 'it'
                  | 'ja'
                  | 'nl'
                  | 'pt'
                  | 'ru'
                  | 'zh_CN'
                  | 'zh_TW'
                  | undefined
                accountId?: string | undefined
                userName?: string | undefined
                type?: string | undefined
                citizenship?: string[] | undefined
              }
            }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { enumeration: EnumerationType } } & {
              query: {
                currency?: string | undefined
                ibEntity?: string | undefined
                mdStatusNonPro?: string | undefined
                'form-number'?: string | undefined
                language?:
                  | 'en'
                  | 'ar'
                  | 'de'
                  | 'es'
                  | 'fr'
                  | 'he'
                  | 'hu'
                  | 'it'
                  | 'ja'
                  | 'nl'
                  | 'pt'
                  | 'ru'
                  | 'zh_CN'
                  | 'zh_TW'
                  | undefined
                accountId?: string | undefined
                userName?: string | undefined
                type?: string | undefined
                citizenship?: string[] | undefined
              }
            }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { enumeration: EnumerationType } } & {
              query: {
                currency?: string | undefined
                ibEntity?: string | undefined
                mdStatusNonPro?: string | undefined
                'form-number'?: string | undefined
                language?:
                  | 'en'
                  | 'ar'
                  | 'de'
                  | 'es'
                  | 'fr'
                  | 'he'
                  | 'hu'
                  | 'it'
                  | 'ja'
                  | 'nl'
                  | 'pt'
                  | 'ru'
                  | 'zh_CN'
                  | 'zh_TW'
                  | undefined
                accountId?: string | undefined
                userName?: string | undefined
                type?: string | undefined
                citizenship?: string[] | undefined
              }
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { enumeration: EnumerationType } } & {
              query: {
                currency?: string | undefined
                ibEntity?: string | undefined
                mdStatusNonPro?: string | undefined
                'form-number'?: string | undefined
                language?:
                  | 'en'
                  | 'ar'
                  | 'de'
                  | 'es'
                  | 'fr'
                  | 'he'
                  | 'hu'
                  | 'it'
                  | 'ja'
                  | 'nl'
                  | 'pt'
                  | 'ru'
                  | 'zh_CN'
                  | 'zh_TW'
                  | undefined
                accountId?: string | undefined
                userName?: string | undefined
                type?: string | undefined
                citizenship?: string[] | undefined
              }
            }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/forms': {
      $get:
        | {
            input: {
              query: {
                formNo?: bigint[] | undefined
                getDocs?: string | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                language?: string | undefined
                projection?: 'PAYLOAD' | 'DOCS' | 'NONE' | undefined
              }
            }
            output: FormFileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                formNo?: bigint[] | undefined
                getDocs?: string | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                language?: string | undefined
                projection?: 'PAYLOAD' | 'DOCS' | 'NONE' | undefined
              }
            }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                formNo?: bigint[] | undefined
                getDocs?: string | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                language?: string | undefined
                projection?: 'PAYLOAD' | 'DOCS' | 'NONE' | undefined
              }
            }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                formNo?: bigint[] | undefined
                getDocs?: string | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                language?: string | undefined
                projection?: 'PAYLOAD' | 'DOCS' | 'NONE' | undefined
              }
            }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                formNo?: bigint[] | undefined
                getDocs?: string | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                language?: string | undefined
                projection?: 'PAYLOAD' | 'DOCS' | 'NONE' | undefined
              }
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 415
          }
        | {
            input: {
              query: {
                formNo?: bigint[] | undefined
                getDocs?: string | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
                language?: string | undefined
                projection?: 'PAYLOAD' | 'DOCS' | 'NONE' | undefined
              }
            }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/forms/required-forms': {
      $get:
        | {
            input: { query: { requiredFormsRequest: RequiredFormsRequest } }
            output: RequiredFormsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { requiredFormsRequest: RequiredFormsRequest } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { requiredFormsRequest: RequiredFormsRequest } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { requiredFormsRequest: RequiredFormsRequest } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { requiredFormsRequest: RequiredFormsRequest } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { query: { requiredFormsRequest: RequiredFormsRequest } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/instruction-sets/:instructionSetId': {
      $get:
        | {
            input: { param: { 'client-id': string; instructionSetId: bigint } }
            output: BulkMultiStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'client-id': string; instructionSetId: bigint } }
            output: NoSuchInstructionSetResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { 'client-id': string; instructionSetId: bigint } }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/instructions/:instructionId': {
      $get:
        | {
            input: { param: { 'client-id': string; instructionId: bigint } }
            output:
              | InstructionPollingResponse
              | InstructionResponse
              | QueryRecentInstructionResponse
              | DepositFundsPollingResponse
              | QueryIRAContributionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'client-id': string; instructionId: bigint } }
            output: InstructionResponse
            outputFormat: 'json'
            status: 208
          }
        | {
            input: { param: { 'client-id': string; instructionId: bigint } }
            output: NoSuchInstructionResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { 'client-id': string; instructionId: bigint } }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/participating-banks': {
      $get:
        | {
            input: { query: { type: string } }
            output: GetParticipatingListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { type: string } }
            output: NoSuchInstructionResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { type: string } }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/requests': {
      $get:
        | {
            input: { query: { requestDetails: RequestDetailsRequest } }
            output: RequestDetailsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { requestDetails: RequestDetailsRequest } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { requestDetails: RequestDetailsRequest } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { requestDetails: RequestDetailsRequest } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { requestDetails: RequestDetailsRequest } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { query: { requestDetails: RequestDetailsRequest } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/restrictions/account': {
      $get:
        | {
            input: {
              query: { masterUserName: string; accountId: string; isEmpTrack?: string | undefined }
            } & { header: { Authorization: string } }
            output: AccountRestrictionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { masterUserName: string; accountId: string; isEmpTrack?: string | undefined }
            } & { header: { Authorization: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { masterUserName: string; accountId: string; isEmpTrack?: string | undefined }
            } & { header: { Authorization: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { masterUserName: string; accountId: string; isEmpTrack?: string | undefined }
            } & { header: { Authorization: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { masterUserName: string; accountId: string; isEmpTrack?: string | undefined }
            } & { header: { Authorization: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/restrictions/ids': {
      $get:
        | {
            input: { query: { masterUserName: string; isEmpTrack?: string | undefined } } & {
              header: { Authorization: string }
            }
            output: MasterRestrictionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { masterUserName: string; isEmpTrack?: string | undefined } } & {
              header: { Authorization: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { masterUserName: string; isEmpTrack?: string | undefined } } & {
              header: { Authorization: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { masterUserName: string; isEmpTrack?: string | undefined } } & {
              header: { Authorization: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/restrictions/list': {
      $get:
        | {
            input: {
              query: { masterUserName: string; listId: bigint; isEmpTrack?: string | undefined }
            } & { header: { Authorization: string } }
            output: ListDetailsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { masterUserName: string; listId: bigint; isEmpTrack?: string | undefined }
            } & { header: { Authorization: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { masterUserName: string; listId: bigint; isEmpTrack?: string | undefined }
            } & { header: { Authorization: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { masterUserName: string; listId: bigint; isEmpTrack?: string | undefined }
            } & { header: { Authorization: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { masterUserName: string; listId: bigint; isEmpTrack?: string | undefined }
            } & { header: { Authorization: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/restrictions/lists/ids': {
      $get:
        | {
            input: { query: { masterUserName: string; isEmpTrack?: string | undefined } } & {
              header: { Authorization: string }
            }
            output: MasterListIdsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { masterUserName: string; isEmpTrack?: string | undefined } } & {
              header: { Authorization: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { masterUserName: string; isEmpTrack?: string | undefined } } & {
              header: { Authorization: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { masterUserName: string; isEmpTrack?: string | undefined } } & {
              header: { Authorization: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/restrictions/restriction': {
      $get:
        | {
            input: {
              query: {
                masterUserName: string
                restrictionId: bigint
                isEmpTrack?: string | undefined
              }
            } & { header: { Authorization: string } }
            output: RestrictionDetailsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                masterUserName: string
                restrictionId: bigint
                isEmpTrack?: string | undefined
              }
            } & { header: { Authorization: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                masterUserName: string
                restrictionId: bigint
                isEmpTrack?: string | undefined
              }
            } & { header: { Authorization: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                masterUserName: string
                restrictionId: bigint
                isEmpTrack?: string | undefined
              }
            } & { header: { Authorization: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                masterUserName: string
                restrictionId: bigint
                isEmpTrack?: string | undefined
              }
            } & { header: { Authorization: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/restrictions/restriction-scope': {
      $get:
        | {
            input: {
              query: {
                masterUserName: string
                restrictionId: bigint
                isEmpTrack?: string | undefined
              }
            } & { header: { Authorization: string } }
            output: RestrictionScopeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                masterUserName: string
                restrictionId: bigint
                isEmpTrack?: string | undefined
              }
            } & { header: { Authorization: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                masterUserName: string
                restrictionId: bigint
                isEmpTrack?: string | undefined
              }
            } & { header: { Authorization: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                masterUserName: string
                restrictionId: bigint
                isEmpTrack?: string | undefined
              }
            } & { header: { Authorization: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                masterUserName: string
                restrictionId: bigint
                isEmpTrack?: string | undefined
              }
            } & { header: { Authorization: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/restrictions/user': {
      $get:
        | {
            input: {
              query: { masterUserName: string; userName: string; isEmpTrack?: string | undefined }
            } & { header: { Authorization: string } }
            output: UserRestrictionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { masterUserName: string; userName: string; isEmpTrack?: string | undefined }
            } & { header: { Authorization: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { masterUserName: string; userName: string; isEmpTrack?: string | undefined }
            } & { header: { Authorization: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { masterUserName: string; userName: string; isEmpTrack?: string | undefined }
            } & { header: { Authorization: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { masterUserName: string; userName: string; isEmpTrack?: string | undefined }
            } & { header: { Authorization: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/statements/available': {
      $get:
        | {
            input: { query: { accountId: string } } & { header: { authorization: string } }
            output: GetAvailableStmtDatesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { accountId: string } } & { header: { authorization: string } }
            output: MissingRequiredParameterResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { accountId: string } } & { header: { authorization: string } }
            output: InvalidAccessTokenResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { accountId: string } } & { header: { authorization: string } }
            output: UnauthorizedAccessResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { query: { accountId: string } } & { header: { authorization: string } }
            output: InsufficientScopeResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { accountId: string } } & { header: { authorization: string } }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/tax-documents/available': {
      $get:
        | {
            input: { query: { accountId: string; year: string } } & {
              header: { authorization: string }
            }
            output: GetAvailableTaxFormsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { accountId: string; year: string } } & {
              header: { authorization: string }
            }
            output: MissingRequiredParameterResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { accountId: string; year: string } } & {
              header: { authorization: string }
            }
            output: InvalidAccessTokenResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { accountId: string; year: string } } & {
              header: { authorization: string }
            }
            output: UnauthorizedAccessResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { query: { accountId: string; year: string } } & {
              header: { authorization: string }
            }
            output: InsufficientScopeResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { accountId: string; year: string } } & {
              header: { authorization: string }
            }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/tax-vouchers/active-countries': {
      $get:
        | {
            input: { header: { 'X-Request-ID'?: string | undefined } }
            output: Country[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Request-ID'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/tax-vouchers/dividends': {
      $get:
        | {
            input: { query: { custAcctId: string; year: string; countryCode: string } } & {
              header: { 'X-Request-ID'?: string | undefined }
            }
            output: DividendDTO[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { custAcctId: string; year: string; countryCode: string } } & {
              header: { 'X-Request-ID'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { custAcctId: string; year: string; countryCode: string } } & {
              header: { 'X-Request-ID'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { custAcctId: string; year: string; countryCode: string } } & {
              header: { 'X-Request-ID'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/tax-vouchers/years': {
      $get:
        | {
            input: { header: { 'X-Request-ID'?: string | undefined } }
            output: bigint[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Request-ID'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/tax-vouchers/:requestId/download': {
      $get:
        | {
            input: { param: { requestPublicId: string } } & {
              header: { 'X-Request-ID'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { requestPublicId: string } } & {
              header: { 'X-Request-ID'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { requestPublicId: string } } & {
              header: { 'X-Request-ID'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/tax-vouchers/:requestId/state': {
      $get:
        | {
            input: { param: { requestPublicId: string } } & {
              header: { 'X-Request-ID'?: string | undefined }
            }
            output: TaxVoucherDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { requestPublicId: string } } & {
              header: { 'X-Request-ID'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { requestPublicId: string } } & {
              header: { 'X-Request-ID'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { requestPublicId: string } } & {
              header: { 'X-Request-ID'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/trade-confirmations/available': {
      $get:
        | {
            input: { query: { accountId: string } } & { header: { authorization: string } }
            output: GetAvailableTradeConfirmationDatesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { accountId: string } } & { header: { authorization: string } }
            output: MissingRequiredParameterResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { accountId: string } } & { header: { authorization: string } }
            output: InvalidAccessTokenResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { accountId: string } } & { header: { authorization: string } }
            output: UnauthorizedAccessResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { query: { accountId: string } } & { header: { authorization: string } }
            output: InsufficientScopeResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { accountId: string } } & { header: { authorization: string } }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/gw/api/v1/validations/usernames/:username': {
      $get:
        | {
            input: { param: { username: string } }
            output: UserNameAvailableResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { username: string } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { username: string } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { username: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 415
          }
        | {
            input: { param: { username: string } }
            output: ProblemDetailResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/api/acesws/:accountId/signatures-and-owners': {
      $get:
        | {
            input: { param: { accountId: string } }
            output: SignatureAndOwners
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/contract/trading-schedule': {
      $get:
        | {
            input: { query: { conid: string; exchange?: string | undefined } }
            output: ScheduleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { conid: string; exchange?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { conid: string; exchange?: string | undefined } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { conid: string; exchange?: string | undefined } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/forecast/category/tree': {
      $get:
        | { input: {}; output: CategoryTreeResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorOnlyResponse; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponse2; outputFormat: 'text'; status: 503 }
    }
  } & {
    '/v1/api/forecast/contract/details': {
      $get:
        | {
            input: { query: { conid: string } }
            output: ForecastDetailsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { conid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { conid: string } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { conid: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/forecast/contract/market': {
      $get:
        | {
            input: { query: { underlyingConid: string; exchange?: string | undefined } }
            output: ForecastMarketResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { underlyingConid: string; exchange?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { underlyingConid: string; exchange?: string | undefined } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { underlyingConid: string; exchange?: string | undefined } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/forecast/contract/rules': {
      $get:
        | {
            input: { query: { conid: string } }
            output: ForecastRulesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { conid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { conid: string } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { conid: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/forecast/contract/schedules': {
      $get:
        | {
            input: { query: { conid: string } }
            output: ForecastSchedulesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { conid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { conid: string } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { conid: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/fyi/deliveryoptions': {
      $get:
        | { input: {}; output: DeliveryOptions; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorOnlyResponse; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponse2; outputFormat: 'text'; status: 503 }
    }
  } & {
    '/v1/api/fyi/disclaimer/:typecode': {
      $get:
        | {
            input: { param: { typecode: Typecodes } }
            output: DisclaimerInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { typecode: Typecodes } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { typecode: Typecodes } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { typecode: Typecodes } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
      $put:
        | {
            input: { param: { typecode: Typecodes } }
            output: FyiVT
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { typecode: Typecodes } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { typecode: Typecodes } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { typecode: Typecodes } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { typecode: Typecodes } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/fyi/notifications': {
      $get:
        | {
            input: {
              query: {
                max: bigint
                include?: { [x: string]: unknown } | undefined
                exclude?: { [x: string]: unknown } | undefined
                id?: { [x: string]: unknown } | undefined
              }
            }
            output: Notifications
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                max: bigint
                include?: { [x: string]: unknown } | undefined
                exclude?: { [x: string]: unknown } | undefined
                id?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                max: bigint
                include?: { [x: string]: unknown } | undefined
                exclude?: { [x: string]: unknown } | undefined
                id?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                max: bigint
                include?: { [x: string]: unknown } | undefined
                exclude?: { [x: string]: unknown } | undefined
                id?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                max: bigint
                include?: { [x: string]: unknown } | undefined
                exclude?: { [x: string]: unknown } | undefined
                id?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/fyi/settings': {
      $get:
        | { input: {}; output: FyiSettings; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorOnlyResponse; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponse2; outputFormat: 'text'; status: 503 }
    }
  } & {
    '/v1/api/fyi/unreadnumber': {
      $get:
        | { input: {}; output: { BN?: bigint | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { status?: string | undefined }; outputFormat: 'json'; status: 423 }
        | { input: {}; output: ErrorOnlyResponse; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponse2; outputFormat: 'text'; status: 503 }
    }
  } & {
    '/v1/api/iserver/account/alert/:alertId': {
      $get:
        | {
            input: { param: { alertId: bigint } } & { query: { type: 'Q' } }
            output: AlertDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { alertId: bigint } } & { query: { type: 'Q' } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { alertId: bigint } } & { query: { type: 'Q' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { alertId: bigint } } & { query: { type: 'Q' } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { alertId: bigint } } & { query: { type: 'Q' } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/account/allocation/accounts': {
      $get:
        | { input: {}; output: SubAccounts; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorOnlyResponse; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponse2; outputFormat: 'text'; status: 503 }
    }
  } & {
    '/v1/api/iserver/account/allocation/models': {
      $get:
        | { input: {}; output: { [x: string]: string }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorOnlyResponse; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponse2; outputFormat: 'text'; status: 503 }
    }
  } & {
    '/v1/api/iserver/account/mta': {
      $get: { input: {}; output: AlertDetails; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/api/iserver/account/order/status/:orderId': {
      $get:
        | {
            input: { param: { orderId: string } }
            output: OrderStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orderId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { orderId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { orderId: string } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { orderId: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/account/orders': {
      $get:
        | {
            input: {
              query: {
                filters?:
                  | 'inactive'
                  | 'pending_submit'
                  | 'pre_submitted'
                  | 'submitted'
                  | 'filled'
                  | 'pending_cancel'
                  | 'cancelled'
                  | 'warn_state'
                  | 'sort_by_time'
                  | undefined
                force?: boolean | undefined
              }
            }
            output: LiveOrdersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filters?:
                  | 'inactive'
                  | 'pending_submit'
                  | 'pre_submitted'
                  | 'submitted'
                  | 'filled'
                  | 'pending_cancel'
                  | 'cancelled'
                  | 'warn_state'
                  | 'sort_by_time'
                  | undefined
                force?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filters?:
                  | 'inactive'
                  | 'pending_submit'
                  | 'pre_submitted'
                  | 'submitted'
                  | 'filled'
                  | 'pending_cancel'
                  | 'cancelled'
                  | 'warn_state'
                  | 'sort_by_time'
                  | undefined
                force?: boolean | undefined
              }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                filters?:
                  | 'inactive'
                  | 'pending_submit'
                  | 'pre_submitted'
                  | 'submitted'
                  | 'filled'
                  | 'pending_cancel'
                  | 'cancelled'
                  | 'warn_state'
                  | 'sort_by_time'
                  | undefined
                force?: boolean | undefined
              }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/account/pnl/partitioned': {
      $get:
        | { input: {}; output: PnlPartitionedResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse2; outputFormat: 'text'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse2; outputFormat: 'text'; status: 503 }
    }
  } & {
    '/v1/api/iserver/account/search/:searchPattern': {
      $get:
        | {
            input: { param: { searchPattern: string } }
            output: DynAccountSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { searchPattern: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { searchPattern: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/account/trades': {
      $get:
        | {
            input: { query: { days?: bigint | undefined } }
            output: TradesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { days?: bigint | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { days?: bigint | undefined } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { days?: bigint | undefined } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/account/:accountId/alerts': {
      $get:
        | {
            input: { param: { accountId: string } }
            output: Alerts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/account/:accountId/summary': {
      $get:
        | {
            input: { param: { accountId: string } }
            output: AccountSummaryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/account/:accountId/summary/available_funds': {
      $get:
        | {
            input: { param: { accountId: string } }
            output: AvailableFundsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/account/:accountId/summary/balances': {
      $get:
        | {
            input: { param: { accountId: string } }
            output: SummaryOfAccountBalancesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/account/:accountId/summary/margins': {
      $get:
        | {
            input: { param: { accountId: string } }
            output: SummaryOfAccountMarginResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/account/:accountId/summary/market_value': {
      $get:
        | {
            input: { param: { accountId: string } }
            output: SummaryMarketValueResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/accounts': {
      $get:
        | { input: {}; output: UserAccountsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse2; outputFormat: 'text'; status: 503 }
    }
  } & {
    '/v1/api/iserver/contract/:conid/algos': {
      $get:
        | {
            input: { param: { conid: string } } & {
              query: {
                algos?: 'Adaptive' | 'Vwap' | undefined
                addDescription?: 0n | 1n | undefined
                addParams?: 0n | 1n | undefined
              }
            }
            output: AlgosResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conid: string } } & {
              query: {
                algos?: 'Adaptive' | 'Vwap' | undefined
                addDescription?: 0n | 1n | undefined
                addParams?: 0n | 1n | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { conid: string } } & {
              query: {
                algos?: 'Adaptive' | 'Vwap' | undefined
                addDescription?: 0n | 1n | undefined
                addParams?: 0n | 1n | undefined
              }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { conid: string } } & {
              query: {
                algos?: 'Adaptive' | 'Vwap' | undefined
                addDescription?: 0n | 1n | undefined
                addParams?: 0n | 1n | undefined
              }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/contract/:conid/info': {
      $get:
        | {
            input: { param: { conid: string } }
            output: ContractInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { conid: string } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { conid: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/contract/:conid/info-and-rules': {
      $get:
        | {
            input: { param: { conid: string } }
            output: {
              cfi_code?: string | undefined
              symbol?: string | undefined
              cusip?: (string | null) | undefined
              expiry_full?: string | undefined
              con_id?: bigint | undefined
              maturity_date?: string | undefined
              industry?: string | undefined
              instrument_type?: string | undefined
              trading_class?: string | undefined
              valid_exchanges?: string | undefined
              allow_sell_long?: boolean | undefined
              is_zero_commission_security?: boolean | undefined
              local_symbol?: string | undefined
              contract_clarification_type?: string | undefined
              classifier?: string | undefined
              currency?: string | undefined
              text?: string | undefined
              underlying_con_id?: bigint | undefined
              r_t_h?: boolean | undefined
              multiplier?: string | undefined
              underlying_issuer?: string | undefined
              contract_month?: string | undefined
              company_name?: string | undefined
              smart_available?: boolean | undefined
              exchange?: string | undefined
              category?: string | undefined
              rules?: ContractRules | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { conid: string } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { conid: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/currency/pairs': {
      $get:
        | {
            input: { query: { currency: string } }
            output: CurrencyPairs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { currency: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { currency: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { currency: string } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { currency: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/exchangerate': {
      $get:
        | {
            input: { query: { target: string; source: string } }
            output: { rate?: number | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { target: string; source: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { target: string; source: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { target: string; source: string } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { target: string; source: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/marketdata/history': {
      $get:
        | {
            input: {
              query: {
                conid: bigint
                period: string
                bar: string
                exchange?: string | undefined
                outsideRth?: boolean | undefined
                startTime?: UtcDateTime | undefined
                direction?: -1n | 1n | undefined
                source?: string | undefined
              }
            }
            output:
              | IserverHistoryBidAskResponse
              | IserverHistoryLastResponse
              | IserverHistoryMidpointResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                conid: bigint
                period: string
                bar: string
                exchange?: string | undefined
                outsideRth?: boolean | undefined
                startTime?: UtcDateTime | undefined
                direction?: -1n | 1n | undefined
                source?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                conid: bigint
                period: string
                bar: string
                exchange?: string | undefined
                outsideRth?: boolean | undefined
                startTime?: UtcDateTime | undefined
                direction?: -1n | 1n | undefined
                source?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                conid: bigint
                period: string
                bar: string
                exchange?: string | undefined
                outsideRth?: boolean | undefined
                startTime?: UtcDateTime | undefined
                direction?: -1n | 1n | undefined
                source?: string | undefined
              }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                conid: bigint
                period: string
                bar: string
                exchange?: string | undefined
                outsideRth?: boolean | undefined
                startTime?: UtcDateTime | undefined
                direction?: -1n | 1n | undefined
                source?: string | undefined
              }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/marketdata/snapshot': {
      $get:
        | {
            input: { query: { conids: string; fields?: MdFields | undefined } }
            output: IserverSnapshot
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { conids: string; fields?: MdFields | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { conids: string; fields?: MdFields | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { conids: string; fields?: MdFields | undefined } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { conids: string; fields?: MdFields | undefined } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/marketdata/unsubscribeall': {
      $get:
        | {
            input: {}
            output: { unsubscribed?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorOnlyResponse; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponse2; outputFormat: 'text'; status: 503 }
    }
  } & {
    '/v1/api/iserver/scanner/params': {
      $get:
        | { input: {}; output: IserverScannerParams; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorOnlyResponse; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponse2; outputFormat: 'text'; status: 503 }
    }
  } & {
    '/v1/api/iserver/secdef/bond-filters': {
      $get:
        | {
            input: { query: { symbol: string; issuerId: string } }
            output: BondFiltersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { symbol: string; issuerId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { symbol: string; issuerId: string } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { symbol: string; issuerId: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/secdef/info': {
      $get:
        | {
            input: {
              query: {
                conid?: string | undefined
                sectype?: { [x: string]: unknown } | undefined
                month?: { [x: string]: unknown } | undefined
                exchange?: { [x: string]: unknown } | undefined
                strike?: { [x: string]: unknown } | undefined
                right?: 'C' | 'P' | undefined
                issuerId?: string | undefined
                filters?: { [x: string]: unknown } | undefined
              }
            }
            output: SecDefInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                conid?: string | undefined
                sectype?: { [x: string]: unknown } | undefined
                month?: { [x: string]: unknown } | undefined
                exchange?: { [x: string]: unknown } | undefined
                strike?: { [x: string]: unknown } | undefined
                right?: 'C' | 'P' | undefined
                issuerId?: string | undefined
                filters?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                conid?: string | undefined
                sectype?: { [x: string]: unknown } | undefined
                month?: { [x: string]: unknown } | undefined
                exchange?: { [x: string]: unknown } | undefined
                strike?: { [x: string]: unknown } | undefined
                right?: 'C' | 'P' | undefined
                issuerId?: string | undefined
                filters?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                conid?: string | undefined
                sectype?: { [x: string]: unknown } | undefined
                month?: { [x: string]: unknown } | undefined
                exchange?: { [x: string]: unknown } | undefined
                strike?: { [x: string]: unknown } | undefined
                right?: 'C' | 'P' | undefined
                issuerId?: string | undefined
                filters?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                conid?: string | undefined
                sectype?: { [x: string]: unknown } | undefined
                month?: { [x: string]: unknown } | undefined
                exchange?: { [x: string]: unknown } | undefined
                strike?: { [x: string]: unknown } | undefined
                right?: 'C' | 'P' | undefined
                issuerId?: string | undefined
                filters?: { [x: string]: unknown } | undefined
              }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/secdef/strikes': {
      $get:
        | {
            input: {
              query: {
                conid: string
                sectype: 'OPT' | 'FOP' | 'WAR'
                month: string
                exchange?: string | undefined
              }
            }
            output: { call?: number[] | undefined; put?: number[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                conid: string
                sectype: 'OPT' | 'FOP' | 'WAR'
                month: string
                exchange?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                conid: string
                sectype: 'OPT' | 'FOP' | 'WAR'
                month: string
                exchange?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                conid: string
                sectype: 'OPT' | 'FOP' | 'WAR'
                month: string
                exchange?: string | undefined
              }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                conid: string
                sectype: 'OPT' | 'FOP' | 'WAR'
                month: string
                exchange?: string | undefined
              }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/iserver/watchlists': {
      $get:
        | {
            input: { query: { SC?: 'USER_WATCHLIST' | undefined } }
            output: WatchlistsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { SC?: 'USER_WATCHLIST' | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { SC?: 'USER_WATCHLIST' | undefined } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { SC?: 'USER_WATCHLIST' | undefined } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/portfolio/accounts': {
      $get:
        | { input: {}; output: AccountAttributes[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorOnlyResponse; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponse2; outputFormat: 'text'; status: 503 }
    }
  } & {
    '/v1/api/portfolio/positions/:conid': {
      $get:
        | {
            input: { param: { conid: bigint } }
            output: { [x: string]: IndividualPosition }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conid: bigint } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { conid: bigint } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { conid: bigint } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { conid: bigint } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/portfolio/subaccounts': {
      $get:
        | { input: {}; output: AccountAttributes[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorOnlyResponse; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponse2; outputFormat: 'text'; status: 503 }
    }
  } & {
    '/v1/api/portfolio/subaccounts2': {
      $get:
        | {
            input: {
              query: {
                nocache?: boolean | undefined
                page?: bigint | undefined
                pageSize?: bigint | undefined
              }
            }
            output: Subaccounts2Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                nocache?: boolean | undefined
                page?: bigint | undefined
                pageSize?: bigint | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                nocache?: boolean | undefined
                page?: bigint | undefined
                pageSize?: bigint | undefined
              }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                nocache?: boolean | undefined
                page?: bigint | undefined
                pageSize?: bigint | undefined
              }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/portfolio/:accountId/allocation': {
      $get:
        | {
            input: { param: { accountId: string } } & { query: { model?: string | undefined } }
            output: PortfolioAllocations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { query: { model?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string } } & { query: { model?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string } } & { query: { model?: string | undefined } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { accountId: string } } & { query: { model?: string | undefined } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/portfolio/:accountId/combo/positions': {
      $get:
        | {
            input: { query: { nocache?: boolean | undefined } }
            output: ComboPositionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nocache?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { nocache?: boolean | undefined } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { nocache?: boolean | undefined } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/portfolio/:accountId/ledger': {
      $get:
        | {
            input: { param: { accountId: string } } & { query: { model?: string | undefined } }
            output: Ledger
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { query: { model?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string } } & { query: { model?: string | undefined } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { accountId: string } } & { query: { model?: string | undefined } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/portfolio/:accountId/meta': {
      $get:
        | {
            input: { param: { accountId: string } }
            output: AccountAttributes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { accountId: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/portfolio/:accountId/position/:conid': {
      $get:
        | {
            input: { param: { accountId: string; conid: bigint } } & {
              query: { model?: string | undefined }
            }
            output: IndividualPositionArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string; conid: bigint } } & {
              query: { model?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string; conid: bigint } } & {
              query: { model?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string; conid: bigint } } & {
              query: { model?: string | undefined }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { accountId: string; conid: bigint } } & {
              query: { model?: string | undefined }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/portfolio/:accountId/positions/:pageId': {
      $get:
        | {
            input: { param: { accountId: string; pageId: bigint } } & {
              query: {
                model?: string | undefined
                sort?: { [x: string]: unknown } | undefined
                direction?: { [x: string]: unknown } | undefined
                waitForSecDef?: boolean | undefined
              }
            }
            output: IndividualPosition[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string; pageId: bigint } } & {
              query: {
                model?: string | undefined
                sort?: { [x: string]: unknown } | undefined
                direction?: { [x: string]: unknown } | undefined
                waitForSecDef?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string; pageId: bigint } } & {
              query: {
                model?: string | undefined
                sort?: { [x: string]: unknown } | undefined
                direction?: { [x: string]: unknown } | undefined
                waitForSecDef?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string; pageId: bigint } } & {
              query: {
                model?: string | undefined
                sort?: { [x: string]: unknown } | undefined
                direction?: { [x: string]: unknown } | undefined
                waitForSecDef?: boolean | undefined
              }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { accountId: string; pageId: bigint } } & {
              query: {
                model?: string | undefined
                sort?: { [x: string]: unknown } | undefined
                direction?: { [x: string]: unknown } | undefined
                waitForSecDef?: boolean | undefined
              }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/portfolio/:accountId/summary': {
      $get:
        | {
            input: { param: { accountId: string } } & { query: { model?: string | undefined } }
            output: PortfolioSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & { query: { model?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string } } & { query: { model?: string | undefined } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { accountId: string } } & { query: { model?: string | undefined } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/portfolio2/:accountId/positions': {
      $get:
        | {
            input: { param: { accountId: string } } & {
              query: { model?: string | undefined; direction?: 'a' | 'd' | undefined }
            }
            output: Portfolio2Positions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: { model?: string | undefined; direction?: 'a' | 'd' | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string } } & {
              query: { model?: string | undefined; direction?: 'a' | 'd' | undefined }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { accountId: string } } & {
              query: { model?: string | undefined; direction?: 'a' | 'd' | undefined }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/sso/validate': {
      $get:
        | { input: {}; output: SsoValidateResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/v1/api/trsrv/all-conids': {
      $get:
        | {
            input: {
              query: { exchange: string; assetClass?: { [x: string]: unknown } | undefined }
            }
            output: {
              ticker?: string | undefined
              conid?: bigint | undefined
              exchange?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { exchange: string; assetClass?: { [x: string]: unknown } | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { exchange: string; assetClass?: { [x: string]: unknown } | undefined }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: { exchange: string; assetClass?: { [x: string]: unknown } | undefined }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/trsrv/futures': {
      $get:
        | {
            input: { query: { symbols: string; exchange?: string | undefined } }
            output: Features
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { symbols: string; exchange?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { symbols: string; exchange?: string | undefined } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { symbols: string; exchange?: string | undefined } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/trsrv/secdef': {
      $get:
        | {
            input: { query: { conids: string } }
            output: TrsrvSecDefResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { conids: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { query: { conids: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { conids: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { conids: string } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { conids: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/trsrv/secdef/schedule': {
      $get:
        | {
            input: {
              query: {
                assetClass: 'STK' | 'OPT' | 'FUT' | 'CFD' | 'WAR' | 'SWP' | 'FND' | 'BND' | 'ICS'
                symbol: string
                exchange?: string | undefined
                exchangeFilter?: string | undefined
              }
            }
            output: TradingSchedule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                assetClass: 'STK' | 'OPT' | 'FUT' | 'CFD' | 'WAR' | 'SWP' | 'FND' | 'BND' | 'ICS'
                symbol: string
                exchange?: string | undefined
                exchangeFilter?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                assetClass: 'STK' | 'OPT' | 'FUT' | 'CFD' | 'WAR' | 'SWP' | 'FND' | 'BND' | 'ICS'
                symbol: string
                exchange?: string | undefined
                exchangeFilter?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                assetClass: 'STK' | 'OPT' | 'FUT' | 'CFD' | 'WAR' | 'SWP' | 'FND' | 'BND' | 'ICS'
                symbol: string
                exchange?: string | undefined
                exchangeFilter?: string | undefined
              }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                assetClass: 'STK' | 'OPT' | 'FUT' | 'CFD' | 'WAR' | 'SWP' | 'FND' | 'BND' | 'ICS'
                symbol: string
                exchange?: string | undefined
                exchangeFilter?: string | undefined
              }
            }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/trsrv/stocks': {
      $get:
        | {
            input: { query: { symbols: string } }
            output: Stocks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { symbols: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { symbols: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { symbols: string } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { symbols: string } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/ws': {
      $get: {
        input: {
          query: { bearer_token?: string | undefined; oauth_token?: string | undefined }
        } & { header: { Connection: 'Upgrade'; Upgrade: 'websocket' } } & {
          cookie: { api: string }
        }
        output: {}
        outputFormat: string
        status: 101
      }
    }
  } & {
    '/v1/api/fyi/deliveryoptions/email': {
      $put:
        | {
            input: { query: { enabled: { [x: string]: unknown } } }
            output: FyiVT
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { enabled: { [x: string]: unknown } } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { enabled: { [x: string]: unknown } } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { enabled: { [x: string]: unknown } } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/fyi/notifications/:notificationId': {
      $put:
        | {
            input: { param: { notificationId: { [x: string]: unknown } } }
            output: NotificationReadAcknowledge
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { notificationId: { [x: string]: unknown } } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { notificationId: { [x: string]: unknown } } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { notificationId: { [x: string]: unknown } } }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { notificationId: { [x: string]: unknown } } }
            output: ErrorResponse2
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/api/fyi/deliveryoptions/:deviceId': {
      $delete: {
        input: { param: { deviceId: { [x: string]: unknown } } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/api/iserver/account/:accountId/alert/:alertId': {
      $delete:
        | {
            input: { param: { accountId: string; alertId: string } } & {
              json: { [x: string]: unknown }
            }
            output: AlertDeletionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string; alertId: string } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: string; alertId: string } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorOnlyResponse
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
