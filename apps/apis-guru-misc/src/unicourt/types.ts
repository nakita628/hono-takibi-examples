type AttorneyLawFirm = {
  attorneyLawFirmId: string | null
  firstFetchDate: string
  isVisible: boolean
  lastFetchDate: string
  name: string
  object: string
} | null
type AttorneyType = {
  attorneyTypeId: string
  createdDate: string
  name: string
  object: string
} | null
type Address = {
  city: string | null
  countryCode: string | null
  countryName: string
  firstFetchDate: string
  isVisible: boolean
  lastFetchDate: string
  latitude: number | null
  longitude: number | null
  object: string
  stateCode: string | null
  stateName: string
  streetAddress1: string | null
  streetAddress2: string | null
  zip: string | null
  zip4: string | null
}
type Email = {
  emailId: string
  firstFetchDate: string
  isVisible: boolean
  lastFetchDate: string
  object: string
}
type Phone = {
  firstFetchDate: string
  isVisible: boolean
  lastFetchDate: string
  object: string
  phoneNumber: string
  phoneType: 'DEFAULT' | 'OFFICE' | 'FAX' | 'PHONE'
}
type Contact = {
  addressArray: Address[] | null
  emailArray: Email[] | null
  object: string
  phoneNumberArray: Phone[] | null
}
type PartyAttorneyAssociation = {
  attorneyId: string
  isVisible: boolean
  object: string
  partyAttorneyAssociationId: string
  partyId: string
} | null
type PartyAttorneyAssociations = {
  nextPageAPI: string | null
  object: string
  pageNumber: number
  partyAttorneyAssociationArray: PartyAttorneyAssociation[]
  totalCount: number
  totalPages: number
} | null
type PossibleNormAttorney = {
  associatedNormJudgesAPI: string
  associatedNormLawFirmsAPI: string
  associatedNormPartiesAPI: string
  bestMatch: boolean
  caseCountAnalyticsByNormAttorneyAPI: string
  caseCountAnalyticsByOpposingNormAttorneyAPI: string
  confidenceScore: number
  normAttorneyAPI: string
  normAttorneyId: string
  normAttorneyName: string
  object: string
  scoreConstituents: {
    address: 'Matched' | 'Mismatched' | 'Not_Provided_By_Data_Source'
    barId: 'Matched' | 'Mismatched' | 'Not_Provided_By_Data_Source'
    email: 'Matched' | 'Mismatched' | 'Not_Provided_By_Data_Source'
    lawFirm: 'Matched' | 'Mismatched' | 'Not_Provided_By_Data_Source'
    nameSimilarityScore: number
    otherPotentialNormAttorneys: number
    phone: 'Matched' | 'Mismatched' | 'Not_Provided_By_Data_Source'
  }
} | null
type PossibleNormLawFirm = {
  associatedNormAttorneyAPI: string
  associatedNormJudgeAPI: string
  associatedNormPartiesAPI: string
  bestMatch: boolean
  caseCountAnalyticsByNormLawFirmAPI: string
  caseCountAnalyticsByOpposingNormLawFirmAPI: string
  confidenceScore: number
  normLawFirmAPI: string
  normLawFirmId: string
  normLawFirmName: string
  object: string
  scoreConstituents: {
    address: 'Matched' | 'Mismatched' | 'Not_Provided_By_Data_Source'
    email: 'Matched' | 'Mismatched' | 'Not_Provided_By_Data_Source'
    nameSimilarityScore: number
    otherPotentialNormLawFirms: number
    phone: 'Matched' | 'Mismatched' | 'Not_Provided_By_Data_Source'
    secretaryOfStateId: 'Matched' | 'Mismatched' | 'Not_Provided_By_Data_Source'
  }
  sourceDetails: {
    linkedNormAttorneyIdArray: string[]
    source: 'Case_Attorney_Linked_In_Other_Cases' | 'Case_Attorney_Field_Contains_Law_Firm'
  }
} | null
type Attorney = {
  attorneyId: string
  attorneyLawFirmArray: AttorneyLawFirm[]
  attorneyType: AttorneyType
  barNumber: string | null
  contact: Contact
  firstFetchDate: string
  firstName: string | null
  isVisible: boolean
  lastFetchDate: string
  lastName: string | null
  middleName: string | null
  name: string
  namePrefix: string | null
  nameSuffix: string | null
  object: string
  partyAttorneyAssociations: PartyAttorneyAssociations
  partyRoleGroupIdArray: string[]
  partyRoleIdArray: string[]
  possibleNormAttorneyArray: PossibleNormAttorney[]
  possibleNormLawFirmArray: PossibleNormLawFirm[]
  sourceAttorneyType: string
} | null
type Exception = { code: string; details: string; message: string; object: string } | null
type BillingCycleUsageResponse = {
  apiCallsBillable: { count: number; lastUpdated: string | null }
  apiCallsCredited: { count: number; lastUpdated: string | null }
  apiCallsMade: { count: number; lastUpdated: string | null }
  apiUsage: { [x: string]: unknown }
  billingCycle: { endDate: string; startDate: string }
  days: { [x: string]: unknown }
  object: string
  totalCasesTracked: number
}
type BillingCyclesResponse = { billingCycleArray: (string | null)[] | null; object: string }
type CallbackListResponse = {
  caseDocumentOrderCallbacks: { count: number; link: string }
  caseExportCallbacks: { count: number; link: string }
  object: string
}
type Attorneys = {
  attorneyArray: Attorney[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  totalCount: number
  totalPages: number
} | null
type PreviewDocument = {
  addedToLibraryDate: string | null
  downloadAPI: string | null
  inLibrary: boolean
  object: string
} | null
type CaseDocument = {
  addedToLibraryDate: string | null
  caseDocumentId: string
  childDocumentIdArray: (string | null)[]
  description: string | null
  documentFiledDate: string | null
  downloadAPI: string | null
  estimatedOrderDuration:
    | 'estimateUnavailable'
    | 'withinMinutes'
    | 'withinHours'
    | 'withinDays'
    | 'withinWeeks'
  firstFetchDate: string
  inLibrary: boolean
  isPreviewAvailable: boolean
  name: string | null
  object: string
  pages: number | null
  parentDocumentId: string | null
  previewDocument: PreviewDocument
  price: number | null
  sortOrder: number | null
  sourceDataStatus: 'NO_LONGER_AVAILABLE_IN_COURT' | 'SOURCE_DEPRECATED' | 'SEALED' | null
} | null
type CaseDocuments = {
  caseDocumentArray: CaseDocument[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  totalCount: number
  totalPages: number
} | null
type CaseStats = {
  allCaseDocumentCount: number
  attorneyCount: number
  caseDocumentInLibraryCount: number
  docketEntryCount: number
  freeCaseDocumentCount: number
  hearingCount: number
  judgeCount: number
  object: string
  paidCaseDocumentCount: number
  partyCount: number
  relatedCaseCount: number
}
type CaseStatus = {
  caseClassArray: string[] | null
  caseStatusGroup: string
  caseStatusGroupId: string
  caseStatusId: string
  createdDate: string
  name: string | null
  object: string
} | null
type CaseType = {
  areaOfLaw: string | null
  areaOfLawId: string | null
  caseClass: string
  caseClassId: string
  caseTypeGroup: string | null
  caseTypeGroupId: string | null
  caseTypeId: string
  caseTypeTag: string | null
  createdDate: string
  name: string | null
  object: string
  saliCode: string | null
} | null
type CauseOfAction = {
  causeOfActionGroup: string
  causeOfActionGroupId: string
  causeOfActionId: string
  createdDate: string
  name: string
  object: string
} | null
type CauseOfActionAdditionalData = {
  causeOfActionAdditionalDataId: string
  createdDate: string
  object: string
  type: string
  value: string
}
type CaseCauseOfAction = {
  causeOfAction: CauseOfAction
  causeOfActionAdditionalDataArray: CauseOfActionAdditionalData[]
  object: string
} | null
type Charge = {
  chargeGroup: string
  chargeGroupId: string
  chargeId: string
  createdDate: string
  name: string
  object: string
} | null
type ChargeAdditionalData = {
  chargeAdditionalDataId: string
  createdDate: string
  object: string
  type: string
  value: string
}
type ChargeDegree = {
  chargeDegreeId: string
  createdDate: string
  name: string
  object: string
} | null
type ChargeSeverity = {
  chargeSeverityId: string
  createdDate: string
  name: string
  object: string
} | null
type CaseCharge = {
  charge: Charge
  chargeAdditionalDataArray: ChargeAdditionalData[]
  chargeDegree: ChargeDegree
  chargeSeverity: ChargeSeverity
  object: string
} | null
type AdditionalLevels = {
  level1: string | null
  level2: string | null
  level3: string | null
  level4: string | null
  object: string
} | null
type Court = {
  additionalLevels: AdditionalLevels
  appealCourtsForCourtAPI: string | null
  container: string | null
  containerType: string | null
  courtId: string
  courtLocationsForCourtAPI: string | null
  courtServiceStatusAPI: string | null
  courtSystemId: string
  courtTypeId: string
  createdDate: string
  jurisdictionGeoForCourtAPI: string | null
  name: string
  nameAka: string
  object: string
  system: string
  type: string
} | null
type CourtLocation = {
  city: string | null
  courtLocationId: string
  courtServiceStatusAPI: string | null
  courtsForCourtLocationAPI: string
  createdDate: string
  name: string
  object: string
  stateName: string
  streetAddress1: string | null
  streetAddress2: string | null
} | null
type DocketEntryPrimaryDocuments = {
  caseDocumentArray: CaseDocument[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  totalCount: number
  totalPages: number
} | null
type DocketEntrySecondaryDocuments = {
  caseDocumentArray: CaseDocument[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  totalCount: number
  totalPages: number
} | null
type ReferencedDocketNumber = {
  docketEntriesAPI: string | null
  docketNumber: number
  object: string
} | null
type ExtractedFields = { key?: (string | null) | undefined } | null
type RawOrderedDataChild = {
  childArray: ({
    childArray: { [x: string]: unknown }[]
    lbl: string | null
    ord: number
    val: string | null
  } | null)[]
  lbl: string | null
  ord: number
  val: string | null
} | null
type RawOrderedData = {
  childArray: RawOrderedDataChild[]
  lbl: string | null
  ord: number
  val: string | null
} | null
type SourceStructuredData = {
  extractedFields: ExtractedFields
  rawOrderedDataArray: RawOrderedData[]
} | null
type DocketEntry = {
  boundary: 'first' | 'last' | 'single_docket_entry' | null
  docketBadge:
    | 'DOCKET'
    | 'CHARGE'
    | 'HEARING'
    | 'JUDGEMENT'
    | 'FINANCIAL'
    | 'DISPOSITION'
    | 'SENTENCE'
    | 'BOND'
    | 'BAIL'
    | 'CAUSE_OF_ACTION'
    | 'ARREST'
    | 'WARRANT'
    | 'SUMMON'
    | 'TICKLER'
    | 'OPINION'
  docketEntryDate: string
  docketEntryPrimaryDocuments: DocketEntryPrimaryDocuments
  docketEntrySecondaryDocuments: DocketEntrySecondaryDocuments
  docketNumber: number | null
  lastFetchDate: string
  object: string
  referencedDocketNumberArray: ReferencedDocketNumber[]
  sortOrder: number
  text: string
  textStructured: SourceStructuredData
} | null
type DocketEntries = {
  docketEntryArray: DocketEntry[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  totalCount: number
  totalPages: number
} | null
type Hearing = {
  firstFetchDate: string
  hearingDate: string
  hearingDescription: string | null
  hearingStructured: SourceStructuredData
  lastFetchDate: string
  location: string | null
  object: string
} | null
type Hearings = {
  hearingArray: Hearing[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  totalCount: number
  totalPages: number
} | null
type JudgeType = { createdDate: string; judgeTypeId: string; name: string; object: string } | null
type PossibleNormJudge = {
  associatedNormAttorneysAPI: string
  associatedNormLawFirmsAPI: string
  associatedNormPartiesAPI: string
  bestMatch: boolean
  caseCountAnalyticsByNormJudgeAPI: string
  confidenceScore: number | null
  normJudgeAPI: string
  normJudgeId: string
  normJudgeName: string
  object: string
  scoreConstituents: {
    address: 'Matched' | 'Mismatched' | 'Not_Provided_By_Data_Source'
    email: 'Matched' | 'Mismatched' | 'Not_Provided_By_Data_Source'
    nameSimilarityScore: number
    otherPotentialNormJudges: number
    phone: 'Matched' | 'Mismatched' | 'Not_Provided_By_Data_Source'
  } | null
} | null
type Judge = {
  contact: Contact
  firstFetchDate: string
  firstName: string | null
  isVisible: boolean
  judgeId: string
  judgeType: JudgeType
  lastFetchDate: string
  lastName: string | null
  middleName: string | null
  name: string
  namePrefix: string | null
  nameSuffix: string | null
  object: string
  possibleNormJudgeArray: PossibleNormJudge[]
  sourceJudgeType: string
} | null
type Judges = {
  judgeArray: Judge[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  totalCount: number
  totalPages: number
} | null
type AttorneyRepresentationType = {
  attorneyRepresentationTypeId: string
  createdDate: string
  name: string
  object: string
} | null
type PartyRole = {
  createdDate: string
  description: string | null
  name: string
  object: string
  partyRoleGroup: string
  partyRoleGroupId: string
  partyRoleId: string
} | null
type PossibleNormParty = {
  associatedNormAttorneysAPI: string
  associatedNormJudgesAPI: string
  associatedNormLawFirmsAPI: string
  bestMatch: boolean
  caseCountAnalyticsByNormPartyAPI: string
  caseCountAnalyticsByOpposingNormPartyAPI: string
  confidenceScore: number
  normPartyAPI: string
  normPartyId: string
  normPartyName: string
  object: string
  scoreConstituents: {
    address: 'Matched' | 'Mismatched' | 'Not_Provided_By_Data_Source'
    email: 'Matched' | 'Mismatched' | 'Not_Provided_By_Data_Source'
    nameSimilarityScore: number
    otherPotentialNormParties: number
    phone: 'Matched' | 'Mismatched' | 'Not_Provided_By_Data_Source'
    secretaryOfStateId: 'Matched' | 'Mismatched' | 'Not_Provided_By_Data_Source'
  }
} | null
type Party = {
  attorneyRepresentationType: AttorneyRepresentationType
  contact: Contact
  firstFetchDate: string
  firstName: string | null
  isVisible: boolean
  lastFetchDate: string
  lastName: string | null
  middleName: string | null
  name: string
  namePrefix: string | null
  nameSuffix: string | null
  object: string
  partyAttorneyAssociations: PartyAttorneyAssociations
  partyClassificationType: 'INDIVIDUAL' | 'COMPANY' | 'OTHER'
  partyId: string
  partyRole: PartyRole
  possibleNormPartyArray: PossibleNormParty[]
  sourcePartyRole: string
} | null
type Parties = {
  nextPageAPI: string | null
  object: string
  pageNumber: number
  partyArray: Party[]
  totalCount: number
  totalPages: number
} | null
type CaseRelationshipType = {
  caseRelationshipTypeId: string
  createdDate: string
  name: string
  object: string
} | null
type RelatedCase = {
  additionalSourceData: SourceStructuredData
  caseAPI: string | null
  caseId: string | null
  caseName: string | null
  caseNumber: string
  caseRelationshipType: CaseRelationshipType
  isVisible: boolean
  object: string
  sourceCaseRelationshipType: string
} | null
type RelatedCases = {
  nextPageAPI: string | null
  object: string
  pageNumber: number
  relatedCaseArray: RelatedCase[]
  totalCount: number
  totalPages: number
} | null
type NatureOfSuit = {
  code: number
  name: string | null
  object: string
  section: string | null
  sourceText: string | null
} | null
type SourceCauseOfAction = {
  firstFetchDate: string
  isVisible: boolean
  lastFetchDate: string
  object: string
  sourceCauseOfAction: string | null
  sourceCauseOfActionRaw: string | null
  sourceStatute: string | null
} | null
type SourceChargeAdditionalData = { object: string; type: string; value: string | null } | null
type SourceCharge = {
  firstFetchDate: string
  isVisible: boolean
  lastFetchDate: string
  object: string
  sourceCharge: string | null
  sourceChargeAdditionalDataArray: SourceChargeAdditionalData[]
  sourceChargeDegree: string | null
  sourceChargeRaw: string
  sourceChargeSeverity: string | null
  sourceStatute: string | null
} | null
type SourcePageData = {
  additionalSourceData: SourceStructuredData
  firstFetchDate: string
  lastFetchDate: string
  object: string
  pageName: string
} | null
type SourceCaseData = {
  natureOfSuitArray: NatureOfSuit[]
  object: string
  sourceCaseStatus: string
  sourceCaseType: string
  sourceCauseOfActionArray: SourceCauseOfAction[]
  sourceChargeArray: SourceCharge[]
  sourceCourt: string
  sourcePageData: SourcePageData[]
}
type Case = {
  attorneys: Attorneys
  caseDocuments: CaseDocuments
  caseId: string
  caseName: string | null
  caseNumber: string
  caseStats: CaseStats
  caseStatus: CaseStatus
  caseType: CaseType
  causeOfActionArray: CaseCauseOfAction[]
  chargeArray: CaseCharge[]
  court: Court
  courtLocation: CourtLocation
  courtServiceStatusAPI: string | null
  courtServiceStatusId: string | null
  docketEntries: DocketEntries
  exportAPI: string
  filedDate: string
  firstFetchDate: string
  hasDocumentsWithPreview: boolean
  hasOnlyMetaInfo: boolean
  hearings: Hearings
  judges: Judges
  lastFetchDate: string
  lastFetchDateWithUpdates: string
  object: string
  participantsLastFetchDate: string | null
  parties: Parties
  relatedCases: RelatedCases
  sourceCaseData: SourceCaseData
  sourceDataStatus: 'NO_LONGER_AVAILABLE_IN_COURT' | 'SOURCE_DEPRECATED' | null
  url: string | null
} | null
type AreaOfLaw = {
  areaOfLawId: string
  caseClass: string
  caseClassId: string
  createdDate: string
  name: string
  object: string
}
type CaseCountAnalyticsByAreaOfLaw = {
  areaOfLaw: AreaOfLaw
  caseCount: number
  caseSearchAPI: string
  object: string
}
type CaseCountAnalyticsByAreaOfLawResponse = {
  nextPageAPI: string | null
  object: string
  previousPageAPI: string | null
  results: CaseCountAnalyticsByAreaOfLaw[]
  totalAreaOfLawCount: number
  totalCaseCount: number
  totalPages: number
}
type CaseClass = { caseClassId: string; createdDate: string; name: string; object: string }
type CaseCountAnalyticsByCaseClass = {
  caseClass: CaseClass
  caseCount: number
  caseSearchAPI: string
  object: string
}
type CaseCountAnalyticsByCaseClassResponse = {
  nextPageAPI: string | null
  object: string
  previousPageAPI: string | null
  results: CaseCountAnalyticsByCaseClass[]
  totalCaseClassCount: number
  totalCaseCount: number
  totalPages: number
}
type CaseCountAnalyticsByCaseFiledDate = {
  caseCount: number
  caseSearchAPI: string
  groupedBy: 'Yearly' | 'Quarterly' | 'Monthly' | 'Weekly'
  monthInt: number | null
  monthString:
    | 'January'
    | 'February'
    | 'March'
    | 'April'
    | 'May'
    | 'June'
    | 'July'
    | 'August'
    | 'September'
    | 'October'
    | 'November'
    | 'December'
    | null
  object: string
  quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4' | null
  weekOfMonth: number | null
  weekOfYear: number | null
  year: number
}
type CaseCountAnalyticsByCaseFiledDateResponse = {
  nextPageAPI: string | null
  object: string
  previousPageAPI: string | null
  results: CaseCountAnalyticsByCaseFiledDate[]
  totalCaseCount: number
  totalCaseFiledDateCount: number
  totalPages: number
}
type CaseCountAnalyticsByCaseType = {
  caseCount: number
  caseSearchAPI: string
  caseType: CaseType
  object: string
}
type CaseCountAnalyticsByCaseTypeResponse = {
  nextPageAPI: string | null
  object: string
  previousPageAPI: string | null
  results: CaseCountAnalyticsByCaseType[]
  totalCaseCount: number
  totalCaseTypeCount: number
  totalPages: number
}
type CaseTypeGroup = {
  areaOfLaw: string
  areaOfLawId: string
  caseClass: string
  caseClassId: string
  caseTypeGroupId: string
  createdDate: string
  name: string
  object: string
}
type CaseCountAnalyticsByCaseTypeGroup = {
  caseCount: number
  caseSearchAPI: string
  caseTypeGroup: CaseTypeGroup
  object: string
}
type CaseCountAnalyticsByCaseTypeGroupResponse = {
  nextPageAPI: string | null
  object: string
  previousPageAPI: string | null
  results: CaseCountAnalyticsByCaseTypeGroup[]
  totalCaseCount: number
  totalCaseTypeGroupCount: number
  totalPages: number
}
type CaseCountAnalyticsByCourt = {
  Geo: { latitude: string | null; longitude: string | null } | null
  caseCount: number
  caseSearchAPI: string
  court: Court
  object: string
}
type CaseCountAnalyticsByCourtResponse = {
  nextPageAPI: string | null
  object: string
  previousPageAPI: string | null
  results: CaseCountAnalyticsByCourt[]
  totalCaseCount: number
  totalCourtCount: number
  totalPages: number
}
type CaseCountAnalyticsByCourtLocation = {
  Geo: { latitude: string | null; longitude: string | null } | null
  caseCount: number
  caseSearchAPI: string
  court: Court
  courtLocation: CourtLocation
  object: string
}
type CaseCountAnalyticsByCourtLocationResponse = {
  nextPageAPI: string | null
  object: string
  previousPageAPI: string | null
  results: CaseCountAnalyticsByCourtLocation[]
  totalCaseCount: number
  totalCourtLocationCount: number
  totalPages: number
}
type CourtSystem = {
  courtSystemId: string
  courtType: string
  courtTypeId: string
  createdDate: string
  name: string
  object: string
}
type CaseCountAnalyticsByCourtSystem = {
  Geo: { latitude: string | null; longitude: string | null } | null
  caseCount: number
  caseSearchAPI: string
  courtSystem: CourtSystem
  object: string
}
type CaseCountAnalyticsByCourtSystemResponse = {
  nextPageAPI: string | null
  object: string
  previousPageAPI: string | null
  results: CaseCountAnalyticsByCourtSystem[]
  totalCaseCount: number
  totalCourtSystemCount: number
  totalPages: number
}
type CourtType = { courtTypeId: string; createdDate: string; name: string; object: string }
type CaseCountAnalyticsByCourtType = {
  Geo: { latitude: string | null; longitude: string | null } | null
  caseCount: number
  caseSearchAPI: string
  courtType: CourtType
  object: string
}
type CaseCountAnalyticsByCourtTypeResponse = {
  nextPageAPI: string | null
  object: string
  previousPageAPI: string | null
  results: CaseCountAnalyticsByCourtType[]
  totalCaseCount: number
  totalCourtTypeCount: number
  totalPages: number
}
type JurisdictionGeo = {
  city: string | null
  country: string
  county: string | null
  courtsForJurisdictionGeoAPI: string
  createdDate: string
  fipsCode: string
  jurisdictionGeoId: string
  object: string
  state: string
  zipCodeArray: string[] | null
}
type CaseCountAnalyticsByJurisdictionGeo = {
  Geo: { latitude: string | null; longitude: string | null } | null
  caseCount: number
  caseSearchAPI: string
  jurisdictionGeo: JurisdictionGeo
  object: string
}
type CaseCountAnalyticsByJurisdictionGeoResponse = {
  nextPageAPI: string | null
  object: string
  previousPageAPI: string | null
  results: CaseCountAnalyticsByJurisdictionGeo[]
  totalCaseCount: number
  totalJurisdictionGeoCount: number
  totalPages: number
}
type CaseCountAnalyticsByNormAttorney = {
  caseCount: number
  caseSearchAPI: string
  normAttorneyId: string
  normAttorneyName: string
  object: string
}
type CaseCountAnalyticsByNormAttorneyResponse = {
  nextPageAPI: string | null
  object: string
  previousPageAPI: string | null
  results: CaseCountAnalyticsByNormAttorney[]
  totalCaseCount: number
  totalNormAttorneyCount: number
  totalPages: number
}
type CaseCountAnalyticsByNormJudge = {
  caseCount: number
  caseSearchAPI: string
  normJudgeId: string
  normJudgeName: string
  object: string
}
type CaseCountAnalyticsByNormJudgeResponse = {
  nextPageAPI: string | null
  object: string
  previousPageAPI: string | null
  results: CaseCountAnalyticsByNormJudge[]
  totalCaseCount: number
  totalNormJudgeCount: number
  totalPages: number
}
type CaseCountAnalyticsByNormLawFirm = {
  caseCount: number
  caseSearchAPI: string
  normLawFirmId: string
  normLawFirmName: string
  object: string
}
type CaseCountAnalyticsByNormLawFirmResponse = {
  nextPageAPI: string | null
  object: string
  previousPageAPI: string | null
  results: CaseCountAnalyticsByNormLawFirm[]
  totalCaseCount: number
  totalNormLawFirmCount: number
  totalPages: number
}
type CaseCountAnalyticsByNormParty = {
  caseCount: number
  caseSearchAPI: string
  normPartyId: string
  normPartyName: string
  object: string
}
type CaseCountAnalyticsByNormPartyResponse = {
  nextPageAPI: string | null
  object: string
  previousPageAPI: string | null
  results: CaseCountAnalyticsByNormParty[]
  totalCaseCount: number
  totalNormPartyCount: number
  totalPages: number
}
type CaseCountAnalyticsByPartyRole = {
  caseCount: number
  caseSearchAPI: string
  object: string
  partyRole: PartyRole
}
type CaseCountAnalyticsByPartyRoleResponse = {
  nextPageAPI: string | null
  object: string
  previousPageAPI: string | null
  results: CaseCountAnalyticsByPartyRole[]
  totalCaseCount: number
  totalPages: number
  totalPartyRoleCount: number
}
type PartyRoleGroup = {
  createdDate: string
  description: string | null
  name: string
  object: string
  partyRoleGroupId: string
}
type CaseCountAnalyticsByPartyRoleGroup = {
  caseCount: number
  caseSearchAPI: string
  object: string
  partyRoleGroup: PartyRoleGroup
}
type CaseCountAnalyticsByPartyRoleGroupResponse = {
  nextPageAPI: string | null
  object: string
  previousPageAPI: string | null
  results: CaseCountAnalyticsByPartyRoleGroup[]
  totalCaseCount: number
  totalPages: number
  totalPartyRoleGroupCount: number
}
type DocumentDownload = {
  caseDocumentDownloadAPI: string
  caseDocumentId: string
  expiryDate: string
  fileUrl: string
  object: string
}
type CaseDocumentOrderPacerOptions = {
  pacerClientCode?: (string | null) | undefined
  pacerUserId: string
}
type CaseDocumentOrderRequest = {
  caseDocumentId: string
  isPreviewOnly: boolean
  pacerOptions?: CaseDocumentOrderPacerOptions | undefined
}
type ExportFile = { expiryDate: string; fileUrl: string; name: string; object: string } | null
type CaseDocumentOrderCallback = {
  callbackGeneratedDate: string | null
  caseDocument: CaseDocument
  caseDocumentId: string
  caseDocumentOrderCallbackAPI: string
  caseDocumentOrderCallbackId: string
  exception: Exception
  file: ExportFile
  object: string
  status: 'COMPLETE' | 'FAILURE' | 'IN_PROGRESS'
}
type CaseDocumentOrderCallbackListResponse = {
  callbackArray: CaseDocumentOrderCallback[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type CaseExportCallback = {
  callbackGeneratedDate: string | null
  caseExportCallbackAPI: string
  caseExportCallbackId: string
  caseId: string
  exception: Exception
  file: ExportFile
  object: string
  status: 'COMPLETE' | 'FAILURE' | 'IN_PROGRESS'
}
type CaseExportCallbackListResponse = {
  callbackArray: CaseExportCallback[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type MatchedObject = {
  highlightSnippet: string
  matchedObjectAPI: string
  matchedObjectAttribute: string
  matchedObjectId: string
  matchedObjectName: string
  object: string
} | null
type CaseSearchResult = {
  caseAPI: string
  caseId: string
  caseName: string | null
  caseNumber: string
  caseStatus: CaseStatus
  caseType: CaseType
  court: Court
  courtLocation: CourtLocation
  filedDate: string
  firstFetchDate: string
  lastFetchDate: string
  lastFetchDateWithUpdates: string
  matchedObjectArray: MatchedObject[]
  object: string
  participantsLastFetchDate: string | null
}
type CaseSearchResponse = {
  caseSearchId: string
  caseSearchResultArray: CaseSearchResult[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  previousPageAPI: string | null
  q: string
  totalCount: number
  totalPages: number
}
type CaseUpdatePacerOptions = {
  additionalPageArray?:
    | (
        | {
            fetchIfOlderThanDays?: number | undefined
            page?: 'associatedCases' | 'caseSummary' | 'listOfCreditors' | undefined
          }[]
        | null
      )
    | undefined
  fetchParticipantsIfOlderThanDays?: number | undefined
  pacerClientCode?: (string | null) | undefined
  pacerUserId: string
  refreshType?: 'fetchNewDocketEntries' | 'fetchAllDocketEntries' | undefined
}
type CaseUpdateRequest = { caseId: string; pacerOptions?: CaseUpdatePacerOptions | undefined }
type CaseTrackSchedule = { days: number[]; type: 'daily' | 'weekly' | 'monthly' }
type CaseTrackRequest = { caseTrackParams: CaseUpdateRequest; schedule: CaseTrackSchedule }
type Success = { message: string; object: string }
type CaseUpdatePacerOptionsResponse = {
  additionalPageArray:
    | {
        fetchIfOlderThanDays?: number | undefined
        page?: 'associatedCases' | 'caseSummary' | 'listOfCreditors' | undefined
      }[]
    | null
  fetchParticipantsIfOlderThanDays: number
  object: string
  pacerClientCode: string | null
  pacerUserId: string
  refreshType: 'fetchNewDocketEntries' | 'fetchAllDocketEntries'
} | null
type LastTrackedDetails = {
  lastTrackDate: string | null
  lastTrackException: Exception
  object: string
  pacerOptions: CaseUpdatePacerOptionsResponse
}
type Schedule = { days: number[]; object: string; type: 'daily' | 'weekly' | 'monthly' }
type CaseTrack = {
  case: Case
  caseAPI: string
  caseId: string
  lastFetchDate: string | null
  lastFetchDateWithUpdates: string | null
  lastTrackedDetails: LastTrackedDetails
  object: string
  pacerOptions: CaseUpdatePacerOptionsResponse
  schedule: Schedule
}
type CaseTrackPreview = {
  caseAPI: string
  caseId: string
  lastFetchDate: string | null
  lastFetchDateWithUpdates: string | null
  lastTrackedDetails: LastTrackedDetails
  object: string
  pacerOptions: CaseUpdatePacerOptionsResponse
  schedule: Schedule
}
type CaseTrackListResponse = {
  caseTrackPreviewArray: CaseTrackPreview[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type CaseUpdate = {
  case: Case
  caseAPI: string
  caseId: string
  exception: Exception
  object: string
  pacerOptions: CaseUpdatePacerOptionsResponse
  requestedDate: string
  status: 'COMPLETE' | 'FAILURE' | 'IN_PROGRESS'
}
type CaseUpdatePreview = {
  caseAPI: string
  caseId: string
  exception: Exception
  object: string
  pacerOptions: CaseUpdatePacerOptionsResponse
  requestedDate: string
  status: 'COMPLETE' | 'FAILURE' | 'IN_PROGRESS'
}
type CaseUpdateListResponse = {
  caseUpdatePreviewArray: CaseUpdatePreview[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type CaseClassCoverage = {
  caseClass: CaseClass
  caseCount: number
  caseDocumentInLibraryCount: number
  caseDocumentInLibraryInLastThirtyDaysCount: number
  casesInLastThirtyDaysCount: number
  courtServiceStatusAPI: string
  freeCaseDocumentCount: number
  freeCaseDocumentsInLastThirtyDaysCount: number
  object: string
  paidCaseDocumentCount: number
  paidCaseDocumentsInLastThirtyDaysCount: number
} | null
type CourtCoverage = {
  caseClassCoverageArray: CaseClassCoverage[]
  court: Court
  lastUpdateCountDate: string
  object: string
  totalCaseCount: number
  totalCaseDocumentInLibraryCount: number
  totalCaseDocumentInLibraryInLastThirtyDaysCount: number
  totalCasesInLastThirtyDaysCount: number
  totalFreeCaseDocumentCount: number
  totalFreeCaseDocumentsInLastThirtyDaysCount: number
  totalPaidCaseDocumentCount: number
  totalPaidCaseDocumentsInLastThirtyDaysCount: number
} | null
type DailyUsageResponse = {
  apiCallsBillable: { count: number; lastUpdated: string | null }
  apiCallsCredited: { count: number; lastUpdated: string | null }
  apiCallsMade: { count: number; lastUpdated: string | null }
  apiUsage: { [x: string]: unknown }
  object: string
  usageEndTime: string
  usageStartTime: string
}
type AccessTokenRequest = { clientId: string; clientSecret: string }
type AccessTokenResponse = {
  accessToken: string
  object: string
  tokenId: string
  tokenType: string
}
type InvalidateAccessTokenRequest = { clientId: string; clientSecret: string; tokenId: string }
type AccessTokenIdResponse = {
  issueAddress: string
  issuedDate: string
  object: string
  tokenId: string
}
type AccessTokenIdListResponse = { AccessTokenIdArray: AccessTokenIdResponse[]; object: string }
type AreaOfLawResponse = {
  areaOfLawArray: AreaOfLaw[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type AttorneyRepresentationTypeResponse = {
  attorneyRepresentationTypeArray: AttorneyRepresentationType[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type AttorneyTypeResponse = {
  attorneyTypeArray: AttorneyType[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type CaseClassResponse = {
  caseClassArray: CaseClass[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type CaseRelationshipTypeResponse = {
  caseRelationshipTypeArray: CaseRelationshipType[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type CaseStatusResponse = {
  caseStatusArray: CaseStatus[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type CaseStatusGroup = {
  caseStatusGroupId: string
  createdDate: string
  name: string
  object: string
}
type CaseStatusGroupResponse = {
  caseStatusGroupArray: CaseStatusGroup[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type CaseTypeResponse = {
  caseTypeArray: CaseType[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type CaseTypeGroupResponse = {
  caseTypeGroupArray: CaseTypeGroup[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type CauseOfActionResponse = {
  causeOfActionArray: CauseOfAction[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type CauseOfActionAdditionalDataResponse = {
  causeOfActionAdditionalDataArray: CauseOfActionAdditionalData[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type CauseOfActionGroup = {
  causeOfActionGroupId: string
  createdDate: string
  name: string
  object: string
}
type CauseOfActionGroupResponse = {
  causeOfActionGroupArray: CauseOfActionGroup[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type ChargeResponse = {
  chargeArray: Charge[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type ChargeAdditionalDataResponse = {
  chargeAdditionalDataArray: ChargeAdditionalData[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type ChargeDegreeResponse = {
  chargeDegreeArray: ChargeDegree[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type ChargeGroup = { chargeGroupId: string; createdDate: string; name: string; object: string }
type ChargeGroupResponse = {
  chargeGroupArray: ChargeGroup[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type ChargeSeverityResponse = {
  chargeSeverityArray: ChargeSeverity[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type CourtResponse = {
  courtArray: Court[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type CourtLocationResponse = {
  courtLocationArray: CourtLocation[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type JurisdictionGeoResponse = {
  jurisdictionGeoArray: JurisdictionGeo[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type ServiceStatusDownDetails = {
  details: string | null
  eta: string | null
  object: string
  reason: 'underMaintenance' | 'notIntegrated' | 'brokenIntegration' | 'sourceMigrated'
} | null
type ServiceStatus = {
  object: string
  serviceDetails:
    | 'acceptingCaseUpdates'
    | 'notAcceptingCaseUpdates'
    | 'acceptingCaseTrack'
    | 'notAcceptingCaseTrack'
    | 'acceptingAutoDocOrders'
    | 'acceptingManualDocOrders'
    | 'notAcceptingAutoDocOrdersLimitExceeded'
    | 'notAcceptingManualDocOrdersLimitExceeded'
    | 'notAcceptingDocOrders'
  serviceStatusDownDetails: ServiceStatusDownDetails
  serviceUp: boolean
} | null
type CourtServiceStatus = {
  caseClassIdArray: (string | null)[] | null
  caseDocumentOrderServiceStatus: ServiceStatus
  caseTrackServiceStatus: ServiceStatus
  caseUpdateServiceStatus: ServiceStatus
  courtIdArray: (string | null)[] | null
  courtLocationIdArray: (string | null)[] | null
  courtServiceStatusId: string
  object: string
  serviceStatusAsOn: string | null
} | null
type CourtServiceStatusResponse = {
  courtServiceStatusArray: CourtServiceStatus[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type CourtSystemResponse = {
  courtSystemArray: CourtSystem[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type CourtTypeResponse = {
  courtTypeArray: CourtType[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type JudgeTypeResponse = {
  judgeTypeArray: JudgeType[]
  nextPageAPI: string | null
  object: string
  pageNumber: number
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type PartyRoleResponse = {
  nextPageAPI: string | null
  object: string
  pageNumber: number
  partyRoleArray: PartyRole[]
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type PartyRoleGroupResponse = {
  nextPageAPI: string | null
  object: string
  pageNumber: number
  partyRoleGroupArray: PartyRoleGroup[]
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type AttorneyAnalyticsAPI = {
  associatedNormJudgesAPI: string
  associatedNormLawFirmsAPI: string
  associatedNormPartiesAPI: string
  caseCountAnalyticsByOpposingNormAttorneyAPI: string
  caseCountAnalyticsByOpposingNormLawFirmAPI: string | null
  caseCountAnalyticsByOpposingNormPartyAPI: string | null
  normAttorneyAPI: string
  object: string
}
type BarSourceData = {
  administrativeActionsArray: {
    caseNumber: string | null
    description: string | null
    effectiveDate: string | null
    resultingStatus: string | null
    type: string | null
  }[]
  admissionType: string | null
  advancedDegreeArray: { area: string | null; degree: string | null }[]
  appellateCourtDistrict: string | null
  appellateDivisionDepartment: string | null
  attorneyGroup: string | null
  authorized: string | null
  barLawFirm: string | null
  barServiceClass: string | null
  barStatusArray: { date: string | null; status: string | null }[]
  bio: string | null
  boardCertificationsArray: { area: string | null; year: string | null }[]
  boardDistrict: string | null
  circuit: string | null
  clientsRepresentedArray: string[]
  comments: string | null
  committeesArray: { committee: string | null; office: string | null; term: string | null }[]
  courtHistoryArray: {
    action: string | null
    actionComments: string | null
    reinstatedDate: string | null
    startDate: string | null
  }[]
  courtOfAdmissions: {
    courtStateArray: string[]
    federalArray: string[]
    otherCourtsArray: string[]
  } | null
  courtServiceEmail: string | null
  disciplinaryHistoryArray: {
    action: string | null
    caseNumber: string | null
    complaint: string | null
    contactId: string | null
    dateOfAction: string | null
    definition: string | null
    disciplinaryDecision: string | null
    entryDate: string | null
    information: string | null
    link: string | null
    note: string | null
    probationDate: string | null
    reinstatedDate: string | null
    rule: string | null
    ruleNumber: string | null
    sectionDate: string | null
    status: string | null
    stayDate: string | null
    supremeCourt: string | null
    term: string | null
    typeOfAction: string | null
  }[]
  disciplineSummariesArray: { date: string | null; link: string | null; title: string | null }[]
  dismissalsArray: string[]
  district: string | null
  employmentHistoryArray: {
    employer: string | null
    endDate: string | null
    startDate: string | null
  }[]
  expirationDate: string | null
  feesOptionsArray: {
    contingencyFees: string | null
    flatFees: string | null
    hourlyRate: string | null
    paymentPlans: string | null
    slidingScaleFees: string | null
  }[]
  firmSize: string | null
  firmWebsite: string | null
  firstAdmittedDate: string | null
  firstAdmittedYear: number | null
  homeCounty: string | null
  inGoodStanding: string | null
  insurance: string | null
  involvementsArray: { name: string | null; position: string | null; type: string | null }[]
  judicialDistrict: string | null
  jurisType: string | null
  languagesArray: string[]
  lastRenewalDate: string | null
  lawSchoolArray: { lawSchool: string | null; lawSchoolGraduatedDate: string | null }[]
  legalSpecialityArray: string[]
  licenseType: string | null
  name: {
    firstName: string
    lastName: string
    middleName: string | null
    name: string
    prefix: string | null
    suffix: string | null
  }
  nextRegistration: string | null
  nextRenewalDate: string | null
  object: string
  openActionStatusArray: { date: string | null; reason: string | null }[]
  otherJurisdictionArray: { barNumber: string | null; state: string | null }[]
  otherNameArray: string[]
  parish: string | null
  pendingProceedingArray: string[]
  position: string | null
  practiceAreaArray: string[]
  practiceLocationArray: string[]
  privateLawPractice: string | null
  profileLastCertified: string | null
  publicHearingArray: {
    conduct: string | null
    date: string | null
    issuedBy: string | null
    order: string | null
    respondent: string | null
  }[]
  reasonForInactivation: { caseNumber: string | null; link: string | null } | null
  relatedCasesArray: { caseDetails: string | null; caseId: string | null }[]
  sectionsArray: string[]
  servicesArray: string[]
  sourceInfo: { url: string | null } | null
  statewideGrievanceCommitteeHistoryArray: {
    finalDecision: string | null
    finalDecisionDate: string | null
    grievanceComplaintNumber: string | null
    publicComments: string | null
  }[]
  status: string | null
  statusDate: string | null
  statusHint: string | null
  statusHistoryArray: { effectiveDate: string | null; statusChange: string | null }[]
  tenYearDisciplineArray: {
    actionDate: string | null
    description: string | null
    reference: string | null
  }[]
  undergraduateSchool: string | null
  yearsOfPractice: string | null
}
type BarRecord = {
  admittedDate: string | null
  barNumber: string | null
  barSourceData: BarSourceData
  barSourceType: string
  contact: Contact
  firstFetchDate: string
  inactivationDate: string | null
  lastFetchDate: string
  lastFetchDateWithUpdates: string
  object: string
  stateCode: string
  status: 'Active' | 'Inactive' | 'Not Classified' | 'Unknown'
}
type CaseAnalyticsAPI = {
  caseCountAnalyticsByAreaOfLawAPI: string
  caseCountAnalyticsByCaseClassAPI: string
  caseCountAnalyticsByCaseTypeAPI: string
  caseCountAnalyticsByCaseTypeGroupAPI: string
  caseCountAnalyticsByCourtAPI: string
  caseCountAnalyticsByCourtLocationAPI: string
  caseCountAnalyticsByCourtSystemAPI: string
  caseCountAnalyticsByCourtTypeAPI: string
  caseCountAnalyticsByJurisdictionGeoAPI: string
  caseCountAnalyticsByPartyRoleAPI: string | null
  caseCountAnalyticsByPartyRoleGroupAPI: string | null
  object: string
  totalCases: number
}
type BarRecordPreview = {
  barNumber: string | null
  barSourceType: string | null
  object: string
  stateCode: string
}
type SimilarNormAttorney = {
  barRecordPreviewArray: BarRecordPreview[]
  name: string
  normAttorneyAPI: string
  normAttorneyId: string
  normAttorneySimilarityScore: number
  object: string
}
type NormAttorney = {
  attorneyAnalyticsAPI: AttorneyAnalyticsAPI
  barRecordArray: BarRecord[]
  caseAnalyticsAPI: CaseAnalyticsAPI
  caseSearchAPI: string
  firstName: string
  hasAssociatedPublicData: boolean
  lastName: string
  middleName: string | null
  name: string
  normAttorneyId: string
  object: string
  similarNormAttorneyArray: SimilarNormAttorney[]
}
type CaseTimeline = { firstCaseFiledDate: string; lastCaseFiledDate: string; object: string }
type AssociatedNormJudge = {
  caseCount: number
  caseSearchAPI: string
  caseTimeline: CaseTimeline
  firstName: string
  lastName: string
  middleName: string | null
  name: string
  normJudgeAPI: string
  normJudgeId: string
  object: string
  version: string
}
type AssociatedNormJudgeResponse = {
  associatedNormJudgeArray: AssociatedNormJudge[]
  nextPageAPI: string | null
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type SOSDataPreview = { object: string; sosNumber: string; stateCode: string }
type AssociatedNormLawFirm = {
  caseCount: number
  caseSearchAPI: string
  caseTimeline: CaseTimeline
  name: string
  normLawFirmAPI: string
  normLawFirmId: string
  object: string
  sosDataArray: SOSDataPreview[]
}
type AssociatedNormLawFirmResponse = {
  associatedNormLawFirmArray: AssociatedNormLawFirm[]
  nextPageAPI: string | null
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type AssociatedNormParty = {
  caseCount: number
  caseSearchAPI: string
  caseTimeline: CaseTimeline
  name: string
  normPartyAPI: string
  normPartyId: string
  object: string
  sosDataArray: SOSDataPreview[]
}
type AssociatedNormPartyResponse = {
  associatedNormPartyArray: AssociatedNormParty[]
  nextPageAPI: string | null
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type NormAttorneySearchResult = {
  firstFetchDate: string
  hasAssociatedPublicData: boolean
  lastFetchDate: string
  matchedObjectArray: MatchedObject[]
  name: string
  normAttorneyDetailsAPI: string
  normAttorneyId: string
  object: string
}
type NormAttorneySearchResponse = {
  nextPageAPI: string | null
  normAttorneySearchId: string
  normAttorneySearchResultArray: NormAttorneySearchResult[]
  object: string
  pageNumber: number
  previousPageAPI: string | null
  q: string
  totalCount: number
  totalPages: number
}
type JudgeAnalyticsAPI = {
  associatedNormAttorneysAPI: string
  associatedNormLawFirmsAPI: string
  associatedNormPartiesAPI: string
  normJudgeAPI: string
  object: string
}
type ServiceHistory = {
  appointedBy: string | null
  fromDate: string | null
  fromYear: number | null
  isVisible: boolean
  object: string
  reasonForTermination: string | null
  sourceCourt: string | null
  title: string | null
  toDate: string | null
  toYear: number | null
}
type NormJudgePublicData = {
  abaRatings: { rating: string | null; year: number | null } | null
  aliasArray: string[]
  bio: {
    birthCity: string | null
    birthDate: string | null
    birthState: string | null
    deathCity: string | null
    deathDate: string | null
    deathState: string | null
    ethnicity: string | null
    politicalAffiliation: string | null
  }
  contact: Contact
  educationArray: { degree: string | null; school: string | null; year: number | null }[]
  firstFetchDate: string | null
  judicialSource: { name: string; type: 'Website' | 'Other'; url: string | null }
  judicialStatus: string | null
  lastFetchDate: string | null
  lastFetchDateWithUpdates: string | null
  nameHistoryArray: {
    firstName: string | null
    isVisible: boolean
    lastName: string | null
    middleName: string | null
    prefix: string | null
    suffix: string | null
  }[]
  object: string
  professionalCareerArray: string[]
  serviceHistoryArray: ServiceHistory[]
}
type NormJudge = {
  caseAnalyticsAPI: CaseAnalyticsAPI
  caseSearchAPI: string
  firstName: string
  hasAssociatedPublicData: boolean
  judgeAnalyticsAPI: JudgeAnalyticsAPI
  judicialDataArray: NormJudgePublicData[]
  lastName: string
  middleName: string | null
  name: string
  normJudgeId: string
  object: string
}
type AssociatedNormAttorney = {
  caseCount: number
  caseSearchAPI: string
  caseTimeline: CaseTimeline
  firstName: string
  lastName: string
  middleName: string | null
  name: string
  normAttorneyAPI: string
  normAttorneyId: string
  object: string
  stateBarDataArray: BarRecordPreview[]
}
type AssociatedNormAttorneyResponse = {
  associatedNormAttorneyArray: AssociatedNormAttorney[]
  nextPageAPI: string | null
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type NormJudgeSearchResult = {
  firstFetchDate: string
  lastFetchDate: string
  matchedObjectArray: MatchedObject[]
  name: string
  normJudgeDetailsAPI: string
  normJudgeId: string
  object: string
}
type NormJudgeSearchResponse = {
  nextPageAPI: string | null
  normJudgeSearchId: string
  normJudgeSearchResultArray: NormJudgeSearchResult[]
  object: string
  pageNumber: number
  previousPageAPI: string | null
  q: string
  totalCount: number
  totalPages: number
}
type LawFirmAnalyticsAPI = {
  associatedNormAttorneyAPI: string
  associatedNormJudgeAPI: string
  associatedNormPartiesAPI: string
  caseCountAnalyticsByOpposingNormAttorneyAPI: string | null
  caseCountAnalyticsByOpposingNormLawFirmAPI: string
  caseCountAnalyticsByOpposingNormPartyAPI: string | null
  normLawFirmAPI: string
  object: string
}
type NormCorporateGroup = {
  normCorporateGroupId: string | null
  normCorporateGroupName: string | null
  object: string
}
type AssociatedSoSPerson = {
  contact: Contact
  entityName: string
  entityType: 'Partner' | 'Agent' | 'CEO' | 'Partner/General Member' | 'Partner/GeneralMember'
  object: string
}
type SOSNameChange = {
  fromDate: string | null
  name: string
  object: string
  toDate: string | null
}
type SOSAssociatedNormOrganization = {
  fromDate: string
  name: string
  normOrganizationAPI: string | null
  normOrganizationId: string | null
  object: string
  relationshipType: 'Parent' | 'Child'
  toDate: string | null
}
type SOSData = {
  associatedSoSPersonArray: AssociatedSoSPerson[]
  contact: Contact
  domesticRegistration: boolean
  fein: string | null
  firstFetchDate: string
  inactivationDate: string | null
  isActive: boolean
  lastFetchDate: string
  lastFetchDateWithUpdates: string
  nameChangesArray: SOSNameChange[]
  object: string
  registeredDate: string | null
  sosAssociatedNormOrganizationArray: SOSAssociatedNormOrganization[]
  sosNumber: string | null
  stateCode: string
  status: 'Active'
}
type NormOrganization = {
  cik: string | null
  isInvolvedInLitigation: boolean
  lei: string | null
  naics: string | null
  naicsDescription: string | null
  name: string
  normCorporateGroupArray: NormCorporateGroup[]
  normOrganizationId: string
  normPartyAPI: string
  object: string
  organizationType: 'Business' | 'GovernmentAgency'
  sic: string | null
  sicDescription: string | null
  sosDataArray: SOSData[]
  tickerArray: { exchange: string | null; symbols: string[] }[]
}
type NormLawFirm = {
  caseAnalyticsAPI: CaseAnalyticsAPI
  caseSearchAPI: string
  lawFirmAnalyticsAPI: LawFirmAnalyticsAPI
  name: string
  normLawFirmId: string
  normOrganizationData: NormOrganization
  object: string
}
type NormLawFirmSearchResult = {
  firstFetchDate: string
  lastFetchDate: string
  matchedObjectArray: MatchedObject[]
  name: string
  normLawFirmDetailsAPI: string
  normLawFirmId: string
  object: string
}
type NormLawFirmSearchResponse = {
  nextPageAPI: string | null
  normLawFirmSearchId: string
  normLawFirmSearchResultArray: NormLawFirmSearchResult[]
  object: string
  pageNumber: number
  previousPageAPI: string | null
  q: string
  totalCount: number
  totalPages: number
}
type PartyAnalyticsAPI = {
  associatedNormAttorneysAPI: string
  associatedNormJudgesAPI: string
  associatedNormLawFirmsAPI: string
  caseCountAnalyticsByOpposingNormAttorneyAPI: string | null
  caseCountAnalyticsByOpposingNormLawFirmAPI: string | null
  caseCountAnalyticsByOpposingNormPartyAPI: string
  normPartyAPI: string
  object: string
}
type RelatedNormParty = {
  normPartyId: string
  object: string
  relationshipType: 'Parent' | 'Child' | 'Same_Corporate_Group'
}
type NormParty = {
  caseAnalyticsAPI: CaseAnalyticsAPI
  caseSearchAPI: string
  individualData: {
    firstName: string | null
    lastName: string | null
    middleName: string | null
    name: string | null
  } | null
  name: string
  normOrganizationData: NormOrganization
  normPartyId: string
  object: string
  partyAnalyticsAPI: PartyAnalyticsAPI
  partyClassificationType: 'Individual' | 'Organization'
  relatedNormPartyArray: RelatedNormParty[]
}
type NormPartySearchResult = {
  firstFetchDate: string
  lastFetchDate: string
  matchedObjectArray: MatchedObject[]
  name: string
  normPartyDetailsAPI: string
  normPartyId: string
  object: string
  partyClassificationType: string
}
type NormPartySearchResponse = {
  nextPageAPI: string | null
  normPartySearchId: string
  normPartySearchResultArray: NormPartySearchResult[]
  object: string
  pageNumber: number
  previousPageAPI: string | null
  q: string
  totalCount: number
  totalPages: number
}
type PACERImportCaseResults = {
  hasOnlyMetaInfo: boolean
  object: string
  uniCourtContent: CaseSearchResult
} | null
type PACERImportCase = {
  courtFee: number | null
  object: string
  pacerImportCaseResultsArray: PACERImportCaseResults[]
}
type PACERSearchPageInfo = {
  first: boolean
  last: boolean
  number: number
  numberOfElements: number
  object: string
  size: number
  totalElements: number
  totalPages: number
}
type PACERSearchReceipt = {
  billablePages: number
  clientCode: string | null
  csoId: number | null
  description: string | null
  firmId: string | null
  loginId: string
  object: string
  reportId: string | null
  search: string | null
  searchFee: string
  transactionDate: string
}
type PACERCaseSearchContent = {
  object: string
  pclBankruptcyChapter: string | null
  pclCaseId: number
  pclCaseLink: string | null
  pclCaseNumber: number
  pclCaseNumberFull: string | null
  pclCaseOffice: string | null
  pclCaseTitle: string | null
  pclCaseType: string | null
  pclCaseYear: number
  pclCivilCtoNumber: string | null
  pclCivilDateDisposition: string | null
  pclCivilDateInitiated: string | null
  pclCivilDateTerminated: string | null
  pclCivilStatDisposition: string | null
  pclCivilStatInitiated: string | null
  pclCivilStatTerminated: string | null
  pclCivilTransferee: string | null
  pclCourtId: string | null
  pclDateDischarged: string | null
  pclDateDismissed: string | null
  pclDateFiled: string | null
  pclDateReopened: string | null
  pclDateTermed: string | null
  pclDisposition: string | null
  pclDispositionMethod: string | null
  pclJointBankruptcyFlag: string | null
  pclJointDischargedDate: string | null
  pclJointDismissedDate: string | null
  pclJointDispositionMethod: string | null
  pclJpmlNumber: number | null
  pclJurisdictionType:
    | 'Appellate'
    | 'Bankruptcy'
    | 'Criminal'
    | 'Civil'
    | 'Multi-district Litigation'
  pclMdlCourtId: string | null
  pclMdlDateOrdered: string | null
  pclMdlDateReceived: string | null
  pclMdlExtension: string | null
  pclMdlJudgeLastName: string | null
  pclMdlLittype: string | null
  pclMdlStatus: string | null
  pclMdlTransferee: string | null
  pclMdlTransfereeDistrict: string | null
  pclNatureOfSuit: string | null
}
type PACERCaseSearchResults = {
  hasOnlyMetaInfo: boolean
  object: string
  pacerContent: PACERCaseSearchContent
  uniCourtContent: CaseSearchResult
}
type PCLCase = {
  nextPageAPI: string | null
  object: string
  pacerPageInfo: PACERSearchPageInfo
  pacerReceipt: PACERSearchReceipt
  pacerSearchResultsArray: PACERCaseSearchResults[]
  pageNumber: number
  totalCount: number
  totalPages: number
}
type PACERPartySearchContent = {
  object: string
  pclCaseId: number
  pclCaseNumber: number
  pclCaseNumberFull: string | null
  pclCaseOffice: string | null
  pclCaseTitle: string | null
  pclCaseType: string | null
  pclCaseYear: number
  pclCourtCase: PACERCaseSearchContent
  pclCourtId: string | null
  pclDateFiled: string | null
  pclFirstName: string | null
  pclGeneration: string | null
  pclJurisdictionType:
    | 'Appellate'
    | 'Bankruptcy'
    | 'Criminal'
    | 'Civil'
    | 'Multi-district Litigation'
  pclLastName: string | null
  pclMiddleName: string | null
  pclPartyRole: string | null
  pclPartyType: string | null
}
type PACERPartySearchResults = {
  hasOnlyMetaInfo: boolean
  object: string
  pacerContent: PACERPartySearchContent
  uniCourtContent: CaseSearchResult
}
type PCLParty = {
  nextPageAPI: string | null
  object: string
  pacerPageInfo: PACERSearchPageInfo
  pacerReceipt: PACERSearchReceipt
  pacerSearchResultsArray: PACERPartySearchResults[]
  pageNumber: number
  totalCount: number
  totalPages: number
}
type PacerCredential = {
  defaultPacerClientCode: string | null
  object: string
  pacerUserId: string
}
type PacerCredentialListResponse = {
  nextPageAPI: string | null
  object: string
  pacerCredentialArray: PacerCredential[]
  pageNumber: number
  previousPageAPI: string | null
  totalCount: number
  totalPages: number
}
type PacerCredentialRequest = {
  defaultPacerClientCode?: (string | null) | undefined
  pacerUserId: string
  password: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/attorney/:attorneyId': {
      $get:
        | {
            input: { param: { attorneyId: string } }
            output: Attorney
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attorneyId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { attorneyId: string } }
            output: Exception
            outputFormat: 'json'
            status: 451
          }
        | {
            input: { param: { attorneyId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/attorney/:attorneyId/associatedParties': {
      $get:
        | {
            input: { param: { attorneyId: string } } & {
              query: { pageNumber?: number | undefined }
            }
            output: PartyAttorneyAssociations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attorneyId: string } } & {
              query: { pageNumber?: number | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { attorneyId: string } } & {
              query: { pageNumber?: number | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { attorneyId: string } } & {
              query: { pageNumber?: number | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 451
          }
        | {
            input: { param: { attorneyId: string } } & {
              query: { pageNumber?: number | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/billingCycleUsage/:billingCycle': {
      $get:
        | {
            input: { param: { billingCycle: string } }
            output: BillingCycleUsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { billingCycle: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { billingCycle: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/billingCycles': {
      $get:
        | { input: {}; output: BillingCyclesResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Exception; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/callbacks': {
      $get:
        | {
            input: {
              query: {
                date?: string | undefined
                status?: 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE' | undefined
              }
            }
            output: CallbackListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                date?: string | undefined
                status?: 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                date?: string | undefined
                status?: 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/case/:caseId': {
      $get:
        | { input: { param: { caseId: string } }; output: Case; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { caseId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { caseId: string } }
            output: Exception
            outputFormat: 'json'
            status: 451
          }
        | {
            input: { param: { caseId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/case/:caseId/attorneys': {
      $get:
        | {
            input: { param: { caseId: string } } & {
              query: { isVisible?: boolean | undefined; pageNumber?: number | undefined }
            }
            output: Attorneys
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { caseId: string } } & {
              query: { isVisible?: boolean | undefined; pageNumber?: number | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { caseId: string } } & {
              query: { isVisible?: boolean | undefined; pageNumber?: number | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { caseId: string } } & {
              query: { isVisible?: boolean | undefined; pageNumber?: number | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 451
          }
        | {
            input: { param: { caseId: string } } & {
              query: { isVisible?: boolean | undefined; pageNumber?: number | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/case/:caseId/docketEntries': {
      $get:
        | {
            input: { param: { caseId: string } } & {
              query: {
                docketNumber?: number | undefined
                sortBy?: 'latest to oldest' | 'oldest to latest' | undefined
                pageNumber?: number | undefined
              }
            }
            output: DocketEntries
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { caseId: string } } & {
              query: {
                docketNumber?: number | undefined
                sortBy?: 'latest to oldest' | 'oldest to latest' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { caseId: string } } & {
              query: {
                docketNumber?: number | undefined
                sortBy?: 'latest to oldest' | 'oldest to latest' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { caseId: string } } & {
              query: {
                docketNumber?: number | undefined
                sortBy?: 'latest to oldest' | 'oldest to latest' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 451
          }
        | {
            input: { param: { caseId: string } } & {
              query: {
                docketNumber?: number | undefined
                sortBy?: 'latest to oldest' | 'oldest to latest' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/case/:caseId/docketEntries/primaryDocuments': {
      $get:
        | {
            input: { param: { caseId: string } } & {
              query: {
                docketNumber: number
                inLibrary?: boolean | undefined
                afterFirstFetchDate?: (string | null) | undefined
                libraryDate?: (string | null) | undefined
                pageNumber?: number | undefined
              }
            }
            output: DocketEntryPrimaryDocuments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { caseId: string } } & {
              query: {
                docketNumber: number
                inLibrary?: boolean | undefined
                afterFirstFetchDate?: (string | null) | undefined
                libraryDate?: (string | null) | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { caseId: string } } & {
              query: {
                docketNumber: number
                inLibrary?: boolean | undefined
                afterFirstFetchDate?: (string | null) | undefined
                libraryDate?: (string | null) | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { caseId: string } } & {
              query: {
                docketNumber: number
                inLibrary?: boolean | undefined
                afterFirstFetchDate?: (string | null) | undefined
                libraryDate?: (string | null) | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 451
          }
        | {
            input: { param: { caseId: string } } & {
              query: {
                docketNumber: number
                inLibrary?: boolean | undefined
                afterFirstFetchDate?: (string | null) | undefined
                libraryDate?: (string | null) | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/case/:caseId/docketEntries/secondaryDocuments': {
      $get:
        | {
            input: { param: { caseId: string } } & {
              query: {
                docketNumber: number
                inLibrary?: boolean | undefined
                afterFirstFetchDate?: (string | null) | undefined
                libraryDate?: (string | null) | undefined
                pageNumber?: number | undefined
              }
            }
            output: DocketEntrySecondaryDocuments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { caseId: string } } & {
              query: {
                docketNumber: number
                inLibrary?: boolean | undefined
                afterFirstFetchDate?: (string | null) | undefined
                libraryDate?: (string | null) | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { caseId: string } } & {
              query: {
                docketNumber: number
                inLibrary?: boolean | undefined
                afterFirstFetchDate?: (string | null) | undefined
                libraryDate?: (string | null) | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { caseId: string } } & {
              query: {
                docketNumber: number
                inLibrary?: boolean | undefined
                afterFirstFetchDate?: (string | null) | undefined
                libraryDate?: (string | null) | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 451
          }
        | {
            input: { param: { caseId: string } } & {
              query: {
                docketNumber: number
                inLibrary?: boolean | undefined
                afterFirstFetchDate?: (string | null) | undefined
                libraryDate?: (string | null) | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/case/:caseId/documents': {
      $get:
        | {
            input: { param: { caseId: string } } & {
              query: {
                inLibrary?: boolean | undefined
                afterFirstFetchDate?: (string | null) | undefined
                libraryDate?: (string | null) | undefined
                firstFetchDate?: (string | null) | undefined
                sortBy?: 'latest to oldest' | 'oldest to latest' | undefined
                pageNumber?: number | undefined
              }
            }
            output: CaseDocuments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { caseId: string } } & {
              query: {
                inLibrary?: boolean | undefined
                afterFirstFetchDate?: (string | null) | undefined
                libraryDate?: (string | null) | undefined
                firstFetchDate?: (string | null) | undefined
                sortBy?: 'latest to oldest' | 'oldest to latest' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { caseId: string } } & {
              query: {
                inLibrary?: boolean | undefined
                afterFirstFetchDate?: (string | null) | undefined
                libraryDate?: (string | null) | undefined
                firstFetchDate?: (string | null) | undefined
                sortBy?: 'latest to oldest' | 'oldest to latest' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { caseId: string } } & {
              query: {
                inLibrary?: boolean | undefined
                afterFirstFetchDate?: (string | null) | undefined
                libraryDate?: (string | null) | undefined
                firstFetchDate?: (string | null) | undefined
                sortBy?: 'latest to oldest' | 'oldest to latest' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 451
          }
        | {
            input: { param: { caseId: string } } & {
              query: {
                inLibrary?: boolean | undefined
                afterFirstFetchDate?: (string | null) | undefined
                libraryDate?: (string | null) | undefined
                firstFetchDate?: (string | null) | undefined
                sortBy?: 'latest to oldest' | 'oldest to latest' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/case/:caseId/hearings': {
      $get:
        | {
            input: { param: { caseId: string } } & {
              query: {
                sortBy?: 'latest to oldest' | 'oldest to latest' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Hearings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { caseId: string } } & {
              query: {
                sortBy?: 'latest to oldest' | 'oldest to latest' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { caseId: string } } & {
              query: {
                sortBy?: 'latest to oldest' | 'oldest to latest' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { caseId: string } } & {
              query: {
                sortBy?: 'latest to oldest' | 'oldest to latest' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 451
          }
        | {
            input: { param: { caseId: string } } & {
              query: {
                sortBy?: 'latest to oldest' | 'oldest to latest' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/case/:caseId/judges': {
      $get:
        | {
            input: { param: { caseId: string } } & {
              query: { isVisible?: boolean | undefined; pageNumber?: number | undefined }
            }
            output: Judges
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { caseId: string } } & {
              query: { isVisible?: boolean | undefined; pageNumber?: number | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { caseId: string } } & {
              query: { isVisible?: boolean | undefined; pageNumber?: number | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { caseId: string } } & {
              query: { isVisible?: boolean | undefined; pageNumber?: number | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 451
          }
        | {
            input: { param: { caseId: string } } & {
              query: { isVisible?: boolean | undefined; pageNumber?: number | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/case/:caseId/parties': {
      $get:
        | {
            input: { param: { caseId: string } } & {
              query: {
                isVisible?: boolean | undefined
                pageNumber?: number | undefined
                partyRoleId?: string | undefined
                partyRoleGroupId?: string | undefined
                attorneyRepresentationTypeId?: string | undefined
                partyClassificationType?: 'INDIVIDUAL' | 'COMPANY' | 'OTHER' | undefined
              }
            }
            output: Parties
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { caseId: string } } & {
              query: {
                isVisible?: boolean | undefined
                pageNumber?: number | undefined
                partyRoleId?: string | undefined
                partyRoleGroupId?: string | undefined
                attorneyRepresentationTypeId?: string | undefined
                partyClassificationType?: 'INDIVIDUAL' | 'COMPANY' | 'OTHER' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { caseId: string } } & {
              query: {
                isVisible?: boolean | undefined
                pageNumber?: number | undefined
                partyRoleId?: string | undefined
                partyRoleGroupId?: string | undefined
                attorneyRepresentationTypeId?: string | undefined
                partyClassificationType?: 'INDIVIDUAL' | 'COMPANY' | 'OTHER' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { caseId: string } } & {
              query: {
                isVisible?: boolean | undefined
                pageNumber?: number | undefined
                partyRoleId?: string | undefined
                partyRoleGroupId?: string | undefined
                attorneyRepresentationTypeId?: string | undefined
                partyClassificationType?: 'INDIVIDUAL' | 'COMPANY' | 'OTHER' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 451
          }
        | {
            input: { param: { caseId: string } } & {
              query: {
                isVisible?: boolean | undefined
                pageNumber?: number | undefined
                partyRoleId?: string | undefined
                partyRoleGroupId?: string | undefined
                attorneyRepresentationTypeId?: string | undefined
                partyClassificationType?: 'INDIVIDUAL' | 'COMPANY' | 'OTHER' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/case/:caseId/relatedCases': {
      $get:
        | {
            input: { param: { caseId: string } } & { query: { pageNumber?: number | undefined } }
            output: RelatedCases
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { caseId: string } } & { query: { pageNumber?: number | undefined } }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { caseId: string } } & { query: { pageNumber?: number | undefined } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { caseId: string } } & { query: { pageNumber?: number | undefined } }
            output: Exception
            outputFormat: 'json'
            status: 451
          }
        | {
            input: { param: { caseId: string } } & { query: { pageNumber?: number | undefined } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseCountAnalyticsByAreaOfLaw': {
      $get:
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: CaseCountAnalyticsByAreaOfLawResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseCountAnalyticsByCaseClass': {
      $get:
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: CaseCountAnalyticsByCaseClassResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseCountAnalyticsByCaseFiledDate': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber: number
                groupBy: 'Yearly' | 'Quarterly' | 'Monthly' | 'Weekly'
              }
            }
            output: CaseCountAnalyticsByCaseFiledDateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber: number
                groupBy: 'Yearly' | 'Quarterly' | 'Monthly' | 'Weekly'
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber: number
                groupBy: 'Yearly' | 'Quarterly' | 'Monthly' | 'Weekly'
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber: number
                groupBy: 'Yearly' | 'Quarterly' | 'Monthly' | 'Weekly'
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseCountAnalyticsByCaseType': {
      $get:
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: CaseCountAnalyticsByCaseTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseCountAnalyticsByCaseTypeGroup': {
      $get:
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: CaseCountAnalyticsByCaseTypeGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseCountAnalyticsByCourt': {
      $get:
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: CaseCountAnalyticsByCourtResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseCountAnalyticsByCourtLocation': {
      $get:
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: CaseCountAnalyticsByCourtLocationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseCountAnalyticsByCourtSystem': {
      $get:
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: CaseCountAnalyticsByCourtSystemResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseCountAnalyticsByCourtType': {
      $get:
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: CaseCountAnalyticsByCourtTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseCountAnalyticsByJurisdictionGeo': {
      $get:
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: CaseCountAnalyticsByJurisdictionGeoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseCountAnalyticsByNormAttorney': {
      $get:
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: CaseCountAnalyticsByNormAttorneyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseCountAnalyticsByNormJudge': {
      $get:
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: CaseCountAnalyticsByNormJudgeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseCountAnalyticsByNormLawFirm': {
      $get:
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: CaseCountAnalyticsByNormLawFirmResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseCountAnalyticsByNormParty': {
      $get:
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: CaseCountAnalyticsByNormPartyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseCountAnalyticsByPartyRole': {
      $get:
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: CaseCountAnalyticsByPartyRoleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseCountAnalyticsByPartyRoleGroup': {
      $get:
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: CaseCountAnalyticsByPartyRoleGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: string | undefined; pageNumber: number } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseDocument/:caseDocumentId': {
      $get:
        | {
            input: { param: { caseDocumentId: string } }
            output: CaseDocument
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { caseDocumentId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { caseDocumentId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseDocumentDownload/:caseDocumentId': {
      $get:
        | {
            input: { param: { caseDocumentId: string } } & {
              query: { isPreviewDocument?: boolean | undefined }
            }
            output: DocumentDownload | Exception
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { caseDocumentId: string } } & {
              query: { isPreviewDocument?: boolean | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { caseDocumentId: string } } & {
              query: { isPreviewDocument?: boolean | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { caseDocumentId: string } } & {
              query: { isPreviewDocument?: boolean | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { caseDocumentId: string } } & {
              query: { isPreviewDocument?: boolean | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 451
          }
        | {
            input: { param: { caseDocumentId: string } } & {
              query: { isPreviewDocument?: boolean | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseDocumentOrder': {
      $put:
        | {
            input: { json: CaseDocumentOrderRequest }
            output: CaseDocumentOrderCallback
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CaseDocumentOrderRequest }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CaseDocumentOrderRequest }
            output: Exception
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: CaseDocumentOrderRequest }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseDocumentOrder/callbacks': {
      $get:
        | {
            input: {
              query: {
                date?: string | undefined
                status?: 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE' | undefined
                pageNumber?: number | undefined
              }
            }
            output: CaseDocumentOrderCallbackListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                date?: string | undefined
                status?: 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                date?: string | undefined
                status?: 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseDocumentOrder/callbacks/:caseDocumentOrderCallbackId': {
      $get:
        | {
            input: { param: { caseDocumentOrderCallbackId: string } }
            output: CaseDocumentOrderCallback
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { caseDocumentOrderCallbackId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { caseDocumentOrderCallbackId: string } }
            output: CaseDocumentOrderCallback
            outputFormat: 'json'
            status: 451
          }
        | {
            input: { param: { caseDocumentOrderCallbackId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseExport/callbacks': {
      $get:
        | {
            input: {
              query: {
                date?: string | undefined
                status?: 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE' | undefined
                pageNumber?: number | undefined
              }
            }
            output: CaseExportCallbackListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                date?: string | undefined
                status?: 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                date?: string | undefined
                status?: 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseExport/callbacks/:caseExportCallbackId': {
      $get:
        | {
            input: { param: { caseExportCallbackId: string } }
            output: CaseExportCallback
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { caseExportCallbackId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { caseExportCallbackId: string } }
            output: CaseExportCallback
            outputFormat: 'json'
            status: 451
          }
        | {
            input: { param: { caseExportCallbackId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseExport/:caseId': {
      $get:
        | {
            input: { param: { caseId: string } }
            output: CaseExportCallback
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { caseId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { caseId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseSearch': {
      $get:
        | {
            input: {
              query: {
                q: string
                sort?: 'filedDate' | 'relevancy' | undefined
                order?: 'asc' | 'desc' | undefined
                pageNumber?: number | undefined
              }
            }
            output: CaseSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q: string
                sort?: 'filedDate' | 'relevancy' | undefined
                order?: 'asc' | 'desc' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q: string
                sort?: 'filedDate' | 'relevancy' | undefined
                order?: 'asc' | 'desc' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseSearch/:caseSearchId': {
      $get:
        | {
            input: { param: { caseSearchId: string } } & {
              query: { pageNumber?: number | undefined }
            }
            output: CaseSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { caseSearchId: string } } & {
              query: { pageNumber?: number | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { caseSearchId: string } } & {
              query: { pageNumber?: number | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { caseSearchId: string } } & {
              query: { pageNumber?: number | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseTrack': {
      $put:
        | { input: { json: CaseTrackRequest }; output: Success; outputFormat: 'json'; status: 200 }
        | {
            input: { json: CaseTrackRequest }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CaseTrackRequest }
            output: Exception
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CaseTrackRequest }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseTrack/:caseId': {
      $delete:
        | {
            input: { param: { caseId: string } }
            output: Success
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { caseId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { caseId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { caseId: string } }
            output: CaseTrack
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { caseId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { caseId: string } }
            output: CaseTrack
            outputFormat: 'json'
            status: 451
          }
        | {
            input: { param: { caseId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseTracks': {
      $get:
        | {
            input: {
              query: {
                lastFetchDate?: string | undefined
                lastFetchDateWithUpdates?: string | undefined
                pageNumber?: number | undefined
              }
            }
            output: CaseTrackListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                lastFetchDate?: string | undefined
                lastFetchDateWithUpdates?: string | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                lastFetchDate?: string | undefined
                lastFetchDateWithUpdates?: string | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseUpdate': {
      $put:
        | {
            input: { json: CaseUpdateRequest }
            output: CaseUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CaseUpdateRequest }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CaseUpdateRequest }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseUpdate/:caseId': {
      $get:
        | {
            input: { param: { caseId: string } }
            output: CaseUpdate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { caseId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { caseId: string } }
            output: CaseUpdate
            outputFormat: 'json'
            status: 451
          }
        | {
            input: { param: { caseId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/caseUpdates': {
      $get:
        | {
            input: {
              query: {
                caseId?: string | undefined
                requestedDate?: string | undefined
                status?: 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE' | undefined
                pageNumber?: number | undefined
              }
            }
            output: CaseUpdateListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                caseId?: string | undefined
                requestedDate?: string | undefined
                status?: 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                caseId?: string | undefined
                requestedDate?: string | undefined
                status?: 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/courtCoverage/:courtId': {
      $get:
        | {
            input: { param: { courtId: string } }
            output: CourtCoverage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { courtId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { courtId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/dailyUsage/:date': {
      $get:
        | {
            input: { param: { date: string } }
            output: DailyUsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { date: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { date: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/generateNewToken': {
      $post:
        | {
            input: { json: AccessTokenRequest }
            output: AccessTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AccessTokenRequest }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AccessTokenRequest }
            output: Exception
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AccessTokenRequest }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/invalidateAllTokens': {
      $put:
        | {
            input: { json: AccessTokenRequest }
            output: Success
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AccessTokenRequest }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AccessTokenRequest }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/invalidateToken': {
      $put:
        | {
            input: { json: InvalidateAccessTokenRequest }
            output: Success
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InvalidateAccessTokenRequest }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: InvalidateAccessTokenRequest }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/judge/:judgeId': {
      $get:
        | {
            input: { param: { judgeId: string } }
            output: Judge
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { judgeId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { judgeId: string } }
            output: Exception
            outputFormat: 'json'
            status: 451
          }
        | {
            input: { param: { judgeId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/listAllTokenIds': {
      $put:
        | {
            input: { json: AccessTokenRequest }
            output: AccessTokenIdListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AccessTokenRequest }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AccessTokenRequest }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/areaOfLaw': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: AreaOfLawResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/areaOfLaw/:areaOfLawId': {
      $get:
        | {
            input: { param: { areaOfLawId: string } }
            output: AreaOfLaw
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { areaOfLawId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { areaOfLawId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/attorneyRepresentationType': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: AttorneyRepresentationTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/attorneyRepresentationType/:attorneyRepresentationTypeId': {
      $get:
        | {
            input: { param: { attorneyRepresentationTypeId: string } }
            output: AttorneyRepresentationType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attorneyRepresentationTypeId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { attorneyRepresentationTypeId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/attorneyType': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: AttorneyTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/attorneyType/:attorneyTypeId': {
      $get:
        | {
            input: { param: { attorneyTypeId: string } }
            output: AttorneyType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attorneyTypeId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { attorneyTypeId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/caseClass': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: CaseClassResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/caseClass/:caseClassId': {
      $get:
        | {
            input: { param: { caseClassId: string } }
            output: CaseClass
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { caseClassId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { caseClassId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/caseRelationshipType': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: CaseRelationshipTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/caseRelationshipType/:caseRelationshipTypeId': {
      $get:
        | {
            input: { param: { caseRelationshipTypeId: string } }
            output: CaseRelationshipType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { caseRelationshipTypeId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { caseRelationshipTypeId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/caseStatus': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: CaseStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/caseStatus/:caseStatusId': {
      $get:
        | {
            input: { param: { caseStatusId: string } }
            output: CaseStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { caseStatusId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { caseStatusId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/caseStatusGroup': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: CaseStatusGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/caseStatusGroup/:caseStatusGroupId': {
      $get:
        | {
            input: { param: { caseStatusGroupId: string } }
            output: CaseStatusGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { caseStatusGroupId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { caseStatusGroupId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/caseType': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: CaseTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/caseType/:caseTypeId': {
      $get:
        | {
            input: { param: { caseTypeId: string } }
            output: CaseType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { caseTypeId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { caseTypeId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/caseTypeGroup': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: CaseTypeGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/caseTypeGroup/:caseTypeGroupId': {
      $get:
        | {
            input: { param: { caseTypeGroupId: string } }
            output: CaseTypeGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { caseTypeGroupId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { caseTypeGroupId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/causeOfAction': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: CauseOfActionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/causeOfAction/:causeOfActionId': {
      $get:
        | {
            input: { param: { causeOfActionId: string } }
            output: CauseOfAction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { causeOfActionId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { causeOfActionId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/causeOfActionAdditionalData': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: CauseOfActionAdditionalDataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/causeOfActionAdditionalData/:causeOfActionAdditionalDataId': {
      $get:
        | {
            input: { param: { causeOfActionAdditionalDataId: string } }
            output: CauseOfActionAdditionalData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { causeOfActionAdditionalDataId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { causeOfActionAdditionalDataId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/causeOfActionGroup': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: CauseOfActionGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/causeOfActionGroup/:causeOfActionGroupId': {
      $get:
        | {
            input: { param: { causeOfActionGroupId: string } }
            output: CauseOfActionGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { causeOfActionGroupId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { causeOfActionGroupId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/charge': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ChargeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/charge/:chargeId': {
      $get:
        | {
            input: { param: { chargeId: string } }
            output: Charge
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { chargeId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { chargeId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/chargeAdditionalData': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ChargeAdditionalDataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/chargeAdditionalData/:chargeAdditionalDataId': {
      $get:
        | {
            input: { param: { chargeAdditionalDataId: string } }
            output: ChargeAdditionalData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { chargeAdditionalDataId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { chargeAdditionalDataId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/chargeDegree': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ChargeDegreeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/chargeDegree/:chargeDegreeId': {
      $get:
        | {
            input: { param: { chargeDegreeId: string } }
            output: ChargeDegree
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { chargeDegreeId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { chargeDegreeId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/chargeGroup': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ChargeGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/chargeGroup/:chargeGroupId': {
      $get:
        | {
            input: { param: { chargeGroupId: string } }
            output: ChargeGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { chargeGroupId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { chargeGroupId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/chargeSeverity': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ChargeSeverityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/chargeSeverity/:chargeSeverityId': {
      $get:
        | {
            input: { param: { chargeSeverityId: string } }
            output: ChargeSeverity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { chargeSeverityId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { chargeSeverityId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/court': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: CourtResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/court/:courtId': {
      $get:
        | {
            input: { param: { courtId: string } }
            output: Court
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { courtId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { courtId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/court/:courtId/appealCourts': {
      $get:
        | {
            input: { param: { courtId: string } } & {
              query: {
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: CourtResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { courtId: string } } & {
              query: {
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { courtId: string } } & {
              query: {
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { courtId: string } } & {
              query: {
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/court/:courtId/courtLocations': {
      $get:
        | {
            input: { param: { courtId: string } } & {
              query: {
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: CourtLocationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { courtId: string } } & {
              query: {
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { courtId: string } } & {
              query: {
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { courtId: string } } & {
              query: {
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/court/:courtId/jurisdictionGeo': {
      $get:
        | {
            input: { param: { courtId: string } } & {
              query: {
                pageNumber?: number | undefined
                sort?: 'state' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: JurisdictionGeoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { courtId: string } } & {
              query: {
                pageNumber?: number | undefined
                sort?: 'state' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { courtId: string } } & {
              query: {
                pageNumber?: number | undefined
                sort?: 'state' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { courtId: string } } & {
              query: {
                pageNumber?: number | undefined
                sort?: 'state' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/courtLocation': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: CourtLocationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/courtLocation/:courtLocationId': {
      $get:
        | {
            input: { param: { courtLocationId: string } }
            output: CourtLocation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { courtLocationId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { courtLocationId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/courtLocation/:courtLocationId/courts': {
      $get:
        | {
            input: { param: { courtLocationId: string } } & {
              query: {
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: CourtResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { courtLocationId: string } } & {
              query: {
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { courtLocationId: string } } & {
              query: {
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { courtLocationId: string } } & {
              query: {
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/courtServiceStatus': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: CourtServiceStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/courtServiceStatus/:courtServiceStatusId': {
      $get:
        | {
            input: { param: { courtServiceStatusId: string } }
            output: CourtServiceStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { courtServiceStatusId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { courtServiceStatusId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/courtSystem': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: CourtSystemResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/courtSystem/:courtSystemId': {
      $get:
        | {
            input: { param: { courtSystemId: string } }
            output: CourtSystem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { courtSystemId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { courtSystemId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/courtType': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: CourtTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/courtType/:courtTypeId': {
      $get:
        | {
            input: { param: { courtTypeId: string } }
            output: CourtType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { courtTypeId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { courtTypeId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/judgeType': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: JudgeTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/judgeType/:judgeTypeId': {
      $get:
        | {
            input: { param: { judgeTypeId: string } }
            output: JudgeType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { judgeTypeId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { judgeTypeId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/jurisdictionGeo': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'state' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: JurisdictionGeoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'state' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'state' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/jurisdictionGeo/:jurisdictionGeoId': {
      $get:
        | {
            input: { param: { jurisdictionGeoId: string } }
            output: JurisdictionGeo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jurisdictionGeoId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { jurisdictionGeoId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/jurisdictionGeo/:jurisdictionGeoId/courts': {
      $get:
        | {
            input: { param: { jurisdictionGeoId: string } } & {
              query: {
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: CourtResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jurisdictionGeoId: string } } & {
              query: {
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { jurisdictionGeoId: string } } & {
              query: {
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { jurisdictionGeoId: string } } & {
              query: {
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/partyRole': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: PartyRoleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/partyRole/:partyRoleId': {
      $get:
        | {
            input: { param: { partyRoleId: string } }
            output: PartyRole
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyRoleId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { partyRoleId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/partyRoleGroup': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: PartyRoleGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q?: string | undefined
                pageNumber?: number | undefined
                sort?: 'name' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/masterData/partyRoleGroup/:partyRoleGroupId': {
      $get:
        | {
            input: { param: { partyRoleGroupId: string } }
            output: PartyRoleGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyRoleGroupId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { partyRoleGroupId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/normAttorney/:normAttorneyId': {
      $get:
        | {
            input: { param: { normAttorneyId: string } }
            output: NormAttorney
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { normAttorneyId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { normAttorneyId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/normAttorney/:normAttorneyId/associatedNormJudges': {
      $get:
        | {
            input: { param: { normAttorneyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: AssociatedNormJudgeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { normAttorneyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { normAttorneyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { normAttorneyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/normAttorney/:normAttorneyId/associatedNormLawFirms': {
      $get:
        | {
            input: { param: { normAttorneyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: AssociatedNormLawFirmResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { normAttorneyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { normAttorneyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { normAttorneyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/normAttorney/:normAttorneyId/associatedNormParties': {
      $get:
        | {
            input: { param: { normAttorneyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: AssociatedNormPartyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { normAttorneyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { normAttorneyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { normAttorneyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/normAttorney/:normAttorneyId/caseCountAnalyticsByOpposingNormAttorney': {
      $get:
        | {
            input: { param: { normAttorneyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: CaseCountAnalyticsByNormAttorneyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { normAttorneyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { normAttorneyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { normAttorneyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/normAttorneySearch': {
      $get:
        | {
            input: { query: { q?: string | undefined; pageNumber?: number | undefined } }
            output: NormAttorneySearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: string | undefined; pageNumber?: number | undefined } }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: string | undefined; pageNumber?: number | undefined } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/normAttorneySearch/:normAttorneySearchId': {
      $get:
        | {
            input: { param: { normAttorneySearchId: string } } & {
              query: { pageNumber?: number | undefined }
            }
            output: NormAttorneySearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { normAttorneySearchId: string } } & {
              query: { pageNumber?: number | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { normAttorneySearchId: string } } & {
              query: { pageNumber?: number | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { normAttorneySearchId: string } } & {
              query: { pageNumber?: number | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/normJudge/:normJudgeId': {
      $get:
        | {
            input: { param: { normJudgeId: string } }
            output: NormJudge
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { normJudgeId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { normJudgeId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/normJudge/:normJudgeId/associatedNormAttorneys': {
      $get:
        | {
            input: { param: { normJudgeId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: AssociatedNormAttorneyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { normJudgeId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { normJudgeId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { normJudgeId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/normJudge/:normJudgeId/associatedNormLawFirms': {
      $get:
        | {
            input: { param: { normJudgeId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: AssociatedNormLawFirmResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { normJudgeId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { normJudgeId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { normJudgeId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/normJudge/:normJudgeId/associatedNormParties': {
      $get:
        | {
            input: { param: { normJudgeId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: AssociatedNormPartyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { normJudgeId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { normJudgeId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { normJudgeId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/normJudgeSearch': {
      $get:
        | {
            input: { query: { q?: string | undefined; pageNumber?: number | undefined } }
            output: NormJudgeSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: string | undefined; pageNumber?: number | undefined } }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: string | undefined; pageNumber?: number | undefined } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/normJudgeSearch/:normJudgeSearchId': {
      $get:
        | {
            input: { param: { normJudgeSearchId: string } } & {
              query: { pageNumber?: number | undefined }
            }
            output: NormJudgeSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { normJudgeSearchId: string } } & {
              query: { pageNumber?: number | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { normJudgeSearchId: string } } & {
              query: { pageNumber?: number | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { normJudgeSearchId: string } } & {
              query: { pageNumber?: number | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/normLawFirm/:normLawFirmId': {
      $get:
        | {
            input: { param: { normLawFirmId: string } }
            output: NormLawFirm
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { normLawFirmId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { normLawFirmId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/normLawFirm/:normLawFirmId/associatedNormAttorneys': {
      $get:
        | {
            input: { param: { normLawFirmId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: AssociatedNormAttorneyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { normLawFirmId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { normLawFirmId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { normLawFirmId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/normLawFirm/:normLawFirmId/associatedNormJudges': {
      $get:
        | {
            input: { param: { normLawFirmId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: AssociatedNormJudgeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { normLawFirmId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { normLawFirmId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { normLawFirmId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/normLawFirm/:normLawFirmId/associatedNormParties': {
      $get:
        | {
            input: { param: { normLawFirmId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: AssociatedNormPartyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { normLawFirmId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { normLawFirmId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { normLawFirmId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/normLawFirm/:normLawFirmId/caseCountAnalyticsByOpposingNormLawFirm': {
      $get:
        | {
            input: { param: { normLawFirmId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: CaseCountAnalyticsByNormLawFirmResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { normLawFirmId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { normLawFirmId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { normLawFirmId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/normLawFirmSearch': {
      $get:
        | {
            input: { query: { q?: string | undefined; pageNumber?: number | undefined } }
            output: NormLawFirmSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: string | undefined; pageNumber?: number | undefined } }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: string | undefined; pageNumber?: number | undefined } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/normLawFirmSearch/:normLawFirmSearchId': {
      $get:
        | {
            input: { param: { normLawFirmSearchId: string } } & {
              query: { pageNumber?: number | undefined }
            }
            output: NormLawFirmSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { normLawFirmSearchId: string } } & {
              query: { pageNumber?: number | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { normLawFirmSearchId: string } } & {
              query: { pageNumber?: number | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { normLawFirmSearchId: string } } & {
              query: { pageNumber?: number | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/normParty/:normPartyId': {
      $get:
        | {
            input: { param: { normPartyId: string } }
            output: NormParty
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { normPartyId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { normPartyId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/normParty/:normPartyId/associatedNormAttorneys': {
      $get:
        | {
            input: { param: { normPartyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: AssociatedNormAttorneyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { normPartyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { normPartyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { normPartyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/normParty/:normPartyId/associatedNormJudges': {
      $get:
        | {
            input: { param: { normPartyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: AssociatedNormJudgeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { normPartyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { normPartyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { normPartyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/normParty/:normPartyId/associatedNormLawFirms': {
      $get:
        | {
            input: { param: { normPartyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: AssociatedNormLawFirmResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { normPartyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { normPartyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { normPartyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/normParty/:normPartyId/caseCountAnalyticsByOpposingNormParty': {
      $get:
        | {
            input: { param: { normPartyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: CaseCountAnalyticsByNormPartyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { normPartyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { normPartyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { normPartyId: string } } & {
              query: { q?: string | undefined; pageNumber: number }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/normPartySearch': {
      $get:
        | {
            input: { query: { q?: string | undefined; pageNumber?: number | undefined } }
            output: NormPartySearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: string | undefined; pageNumber?: number | undefined } }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: string | undefined; pageNumber?: number | undefined } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/normPartySearch/:normPartySearchId': {
      $get:
        | {
            input: { param: { normPartySearchId: string } } & {
              query: { pageNumber?: number | undefined }
            }
            output: NormPartySearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { normPartySearchId: string } } & {
              query: { pageNumber?: number | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { normPartySearchId: string } } & {
              query: { pageNumber?: number | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { normPartySearchId: string } } & {
              query: { pageNumber?: number | undefined }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pacer/importCaseByCourtUsingCaseNumber': {
      $get:
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber: string
                courtId: string
              }
            }
            output: PACERImportCase
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber: string
                courtId: string
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber: string
                courtId: string
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pacerCaseLocator/caseSearch/allCourts': {
      $get:
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: (number | null) | undefined
                caseTypeArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: PCLCase
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: (number | null) | undefined
                caseTypeArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: (number | null) | undefined
                caseTypeArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pacerCaseLocator/caseSearch/appealCourts': {
      $get:
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: (number | null) | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                natureOfSuitsArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: PCLCase
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: (number | null) | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                natureOfSuitsArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: (number | null) | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                natureOfSuitsArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pacerCaseLocator/caseSearch/bankruptcyCourts': {
      $get:
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                federalBankruptcyChapterArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                caseDischargedStartDate?: (string | null) | undefined
                caseDischargedEndDate?: (string | null) | undefined
                caseDismissedStartDate?: (string | null) | undefined
                caseDismissedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: PCLCase
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                federalBankruptcyChapterArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                caseDischargedStartDate?: (string | null) | undefined
                caseDischargedEndDate?: (string | null) | undefined
                caseDismissedStartDate?: (string | null) | undefined
                caseDismissedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                federalBankruptcyChapterArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                caseDischargedStartDate?: (string | null) | undefined
                caseDischargedEndDate?: (string | null) | undefined
                caseDismissedStartDate?: (string | null) | undefined
                caseDismissedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pacerCaseLocator/caseSearch/civilCourts': {
      $get:
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                natureOfSuitsArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: PCLCase
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                natureOfSuitsArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                natureOfSuitsArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pacerCaseLocator/caseSearch/criminalCourts': {
      $get:
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: PCLCase
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pacerCaseLocator/caseSearch/multiDistrictCourts': {
      $get:
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                jpmlNumber?: number | undefined
                pacerCaseId?: number | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: PCLCase
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                jpmlNumber?: number | undefined
                pacerCaseId?: number | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                jpmlNumber?: number | undefined
                pacerCaseId?: number | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pacerCaseLocator/partySearch/allCourts': {
      $get:
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                lastName?: (string | null) | undefined
                firstName?: (string | null) | undefined
                middleName?: (string | null) | undefined
                generation?: (string | null) | undefined
                partyType?: (string | null) | undefined
                partyExactNameMatch?: boolean | undefined
                partyRoleArray?: (string | null)[] | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseYearFrom?: number | undefined
                caseYearTo?: number | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: PCLParty
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                lastName?: (string | null) | undefined
                firstName?: (string | null) | undefined
                middleName?: (string | null) | undefined
                generation?: (string | null) | undefined
                partyType?: (string | null) | undefined
                partyExactNameMatch?: boolean | undefined
                partyRoleArray?: (string | null)[] | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseYearFrom?: number | undefined
                caseYearTo?: number | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                lastName?: (string | null) | undefined
                firstName?: (string | null) | undefined
                middleName?: (string | null) | undefined
                generation?: (string | null) | undefined
                partyType?: (string | null) | undefined
                partyExactNameMatch?: boolean | undefined
                partyRoleArray?: (string | null)[] | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseYearFrom?: number | undefined
                caseYearTo?: number | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pacerCaseLocator/partySearch/appealCourts': {
      $get:
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                lastName?: (string | null) | undefined
                firstName?: (string | null) | undefined
                middleName?: (string | null) | undefined
                generation?: (string | null) | undefined
                partyType?: (string | null) | undefined
                partyExactNameMatch?: boolean | undefined
                partyRoleArray?: (string | null)[] | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseYearFrom?: number | undefined
                caseYearTo?: number | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: PCLParty
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                lastName?: (string | null) | undefined
                firstName?: (string | null) | undefined
                middleName?: (string | null) | undefined
                generation?: (string | null) | undefined
                partyType?: (string | null) | undefined
                partyExactNameMatch?: boolean | undefined
                partyRoleArray?: (string | null)[] | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseYearFrom?: number | undefined
                caseYearTo?: number | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                lastName?: (string | null) | undefined
                firstName?: (string | null) | undefined
                middleName?: (string | null) | undefined
                generation?: (string | null) | undefined
                partyType?: (string | null) | undefined
                partyExactNameMatch?: boolean | undefined
                partyRoleArray?: (string | null)[] | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseYearFrom?: number | undefined
                caseYearTo?: number | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pacerCaseLocator/partySearch/bankruptcyCourts': {
      $get:
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                lastName?: (string | null) | undefined
                firstName?: (string | null) | undefined
                middleName?: (string | null) | undefined
                generation?: (string | null) | undefined
                partyType?: (string | null) | undefined
                partyExactNameMatch?: boolean | undefined
                partyRoleArray?: (string | null)[] | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseYearFrom?: number | undefined
                caseYearTo?: number | undefined
                ssnOrEin?: (string | null) | undefined
                fourDigitSsn?: (string | null) | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                caseDischargedStartDate?: (string | null) | undefined
                caseDischargedEndDate?: (string | null) | undefined
                caseDismissedStartDate?: (string | null) | undefined
                caseDismissedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: PCLParty
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                lastName?: (string | null) | undefined
                firstName?: (string | null) | undefined
                middleName?: (string | null) | undefined
                generation?: (string | null) | undefined
                partyType?: (string | null) | undefined
                partyExactNameMatch?: boolean | undefined
                partyRoleArray?: (string | null)[] | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseYearFrom?: number | undefined
                caseYearTo?: number | undefined
                ssnOrEin?: (string | null) | undefined
                fourDigitSsn?: (string | null) | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                caseDischargedStartDate?: (string | null) | undefined
                caseDischargedEndDate?: (string | null) | undefined
                caseDismissedStartDate?: (string | null) | undefined
                caseDismissedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                lastName?: (string | null) | undefined
                firstName?: (string | null) | undefined
                middleName?: (string | null) | undefined
                generation?: (string | null) | undefined
                partyType?: (string | null) | undefined
                partyExactNameMatch?: boolean | undefined
                partyRoleArray?: (string | null)[] | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseYearFrom?: number | undefined
                caseYearTo?: number | undefined
                ssnOrEin?: (string | null) | undefined
                fourDigitSsn?: (string | null) | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                caseDischargedStartDate?: (string | null) | undefined
                caseDischargedEndDate?: (string | null) | undefined
                caseDismissedStartDate?: (string | null) | undefined
                caseDismissedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pacerCaseLocator/partySearch/civilCourts': {
      $get:
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                lastName?: (string | null) | undefined
                firstName?: (string | null) | undefined
                middleName?: (string | null) | undefined
                generation?: (string | null) | undefined
                partyType?: (string | null) | undefined
                partyExactNameMatch?: boolean | undefined
                partyRoleArray?: (string | null)[] | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseYearFrom?: number | undefined
                caseYearTo?: number | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: PCLParty
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                lastName?: (string | null) | undefined
                firstName?: (string | null) | undefined
                middleName?: (string | null) | undefined
                generation?: (string | null) | undefined
                partyType?: (string | null) | undefined
                partyExactNameMatch?: boolean | undefined
                partyRoleArray?: (string | null)[] | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseYearFrom?: number | undefined
                caseYearTo?: number | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                lastName?: (string | null) | undefined
                firstName?: (string | null) | undefined
                middleName?: (string | null) | undefined
                generation?: (string | null) | undefined
                partyType?: (string | null) | undefined
                partyExactNameMatch?: boolean | undefined
                partyRoleArray?: (string | null)[] | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseYearFrom?: number | undefined
                caseYearTo?: number | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pacerCaseLocator/partySearch/criminalCourts': {
      $get:
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                lastName?: (string | null) | undefined
                firstName?: (string | null) | undefined
                middleName?: (string | null) | undefined
                generation?: (string | null) | undefined
                partyType?: (string | null) | undefined
                partyExactNameMatch?: boolean | undefined
                partyRoleArray?: (string | null)[] | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseYearFrom?: number | undefined
                caseYearTo?: number | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: PCLParty
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                lastName?: (string | null) | undefined
                firstName?: (string | null) | undefined
                middleName?: (string | null) | undefined
                generation?: (string | null) | undefined
                partyType?: (string | null) | undefined
                partyExactNameMatch?: boolean | undefined
                partyRoleArray?: (string | null)[] | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseYearFrom?: number | undefined
                caseYearTo?: number | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                pacerCaseId?: number | undefined
                lastName?: (string | null) | undefined
                firstName?: (string | null) | undefined
                middleName?: (string | null) | undefined
                generation?: (string | null) | undefined
                partyType?: (string | null) | undefined
                partyExactNameMatch?: boolean | undefined
                partyRoleArray?: (string | null)[] | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseYearFrom?: number | undefined
                caseYearTo?: number | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pacerCaseLocator/partySearch/multiDistrictCourts': {
      $get:
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                jpmlNumber?: number | undefined
                pacerCaseId?: number | undefined
                lastName?: (string | null) | undefined
                firstName?: (string | null) | undefined
                middleName?: (string | null) | undefined
                generation?: (string | null) | undefined
                partyType?: (string | null) | undefined
                partyExactNameMatch?: boolean | undefined
                partyRoleArray?: (string | null)[] | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseYearFrom?: number | undefined
                caseYearTo?: number | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: PCLParty
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                jpmlNumber?: number | undefined
                pacerCaseId?: number | undefined
                lastName?: (string | null) | undefined
                firstName?: (string | null) | undefined
                middleName?: (string | null) | undefined
                generation?: (string | null) | undefined
                partyType?: (string | null) | undefined
                partyExactNameMatch?: boolean | undefined
                partyRoleArray?: (string | null)[] | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseYearFrom?: number | undefined
                caseYearTo?: number | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                pacerUserId: string
                pacerClientCode: string
                caseNumber?: (string | null) | undefined
                jpmlNumber?: number | undefined
                pacerCaseId?: number | undefined
                lastName?: (string | null) | undefined
                firstName?: (string | null) | undefined
                middleName?: (string | null) | undefined
                generation?: (string | null) | undefined
                partyType?: (string | null) | undefined
                partyExactNameMatch?: boolean | undefined
                partyRoleArray?: (string | null)[] | undefined
                caseTitle?: (string | null) | undefined
                caseOffice?: number | undefined
                caseSequenceNumber?: number | undefined
                caseYear?: number | undefined
                caseTypeArray?: (string | null)[] | undefined
                courtRegionIdArray?: (string | null)[] | undefined
                caseYearFrom?: number | undefined
                caseYearTo?: number | undefined
                caseFiledStartDate?: (string | null) | undefined
                caseFiledEndDate?: (string | null) | undefined
                caseTerminatedStartDate?: (string | null) | undefined
                caseTerminatedEndDate?: (string | null) | undefined
                sortParameterQuery?: (string | null) | undefined
                caseStatus?: 'open' | 'closed' | undefined
                pageNumber?: number | undefined
              }
            }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pacerCredential': {
      $get:
        | {
            input: { query: { pageNumber?: number | undefined } }
            output: PacerCredentialListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { pageNumber?: number | undefined } }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { pageNumber?: number | undefined } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { json: PacerCredentialRequest }
            output: Success
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PacerCredentialRequest }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PacerCredentialRequest }
            output: Exception
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: PacerCredentialRequest }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pacerCredential/:pacerUserId': {
      $delete:
        | {
            input: { param: { pacerUserId: string } }
            output: Success
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pacerUserId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pacerUserId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { pacerUserId: string } }
            output: PacerCredential
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pacerUserId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pacerUserId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/party/:partyId': {
      $get:
        | {
            input: { param: { partyId: string } }
            output: Party
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { partyId: string } }
            output: Exception
            outputFormat: 'json'
            status: 451
          }
        | {
            input: { param: { partyId: string } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/party/:partyId/associatedAttorneys': {
      $get:
        | {
            input: { param: { partyId: string } } & { query: { pageNumber?: number | undefined } }
            output: PartyAttorneyAssociations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partyId: string } } & { query: { pageNumber?: number | undefined } }
            output: Exception
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { partyId: string } } & { query: { pageNumber?: number | undefined } }
            output: Exception
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { partyId: string } } & { query: { pageNumber?: number | undefined } }
            output: Exception
            outputFormat: 'json'
            status: 451
          }
        | {
            input: { param: { partyId: string } } & { query: { pageNumber?: number | undefined } }
            output: Exception
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
