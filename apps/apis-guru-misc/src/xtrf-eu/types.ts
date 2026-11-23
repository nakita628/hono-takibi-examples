type CustomerDetailsDTO = {
  addressLine?: string | undefined
  city?: string | undefined
  country?: string | undefined
  countryId?: bigint | undefined
  name?: string | undefined
  postalCode?: string | undefined
  vatUE?: string | undefined
}
type TimeDTO = { value?: bigint | undefined }
type CustomerInvoiceDatesDTO = {
  draftDate?: TimeDTO | undefined
  finalDate?: TimeDTO | undefined
  invoiceDate?: TimeDTO | undefined
  paymentDueDate?: TimeDTO | undefined
}
type PaymentTermsDTO = { description?: string | undefined; name?: string | undefined }
type CustomFieldDTO = {
  key?: string | undefined
  name?: string | undefined
  type?:
    | 'TEXT'
    | 'DATE'
    | 'DATE_AND_TIME'
    | 'NUMBER'
    | 'CHECKBOX'
    | 'SELECTION'
    | 'MULTI_SELECTION'
    | undefined
  value?: { [x: string]: unknown } | undefined
}
type ProjectDatesDTO = {
  actualDeliveryDate?: TimeDTO | undefined
  actualStartDate?: TimeDTO | undefined
  deadline?: TimeDTO | undefined
  startDate?: TimeDTO | undefined
}
type TaskFinanceDTO = { invoiceable?: boolean | undefined }
type InstructionsDTO = {
  forProvider?: string | undefined
  fromCustomer?: string | undefined
  internal?: string | undefined
  notes?: string | undefined
  paymentNoteForCustomer?: string | undefined
  paymentNoteForVendor?: string | undefined
}
type TaskJobsDTO = { jobCount?: number | undefined; jobIds?: bigint[] | undefined }
type CommonLanguageCombinationDTO = {
  sourceLanguageId?: bigint | undefined
  targetLanguageId?: bigint | undefined
}
type ContactsDTO = {
  additionalIds?: bigint[] | undefined
  primaryId?: bigint | undefined
  sendBackToId?: bigint | undefined
}
type ResponsiblePersonsDTO = {
  projectCoordinatorId?: bigint | undefined
  projectManagerId?: bigint | undefined
}
type ClassicPeopleDTO = {
  customerContacts?: ContactsDTO | undefined
  responsiblePersons?: ResponsiblePersonsDTO | undefined
}
type TaskDTO = {
  clientTaskPONumber?: string | undefined
  customFields?: CustomFieldDTO[] | undefined
  dates?: ProjectDatesDTO | undefined
  finance?: TaskFinanceDTO | undefined
  id?: bigint | undefined
  idNumber?: string | undefined
  instructions?: InstructionsDTO | undefined
  jobs?: TaskJobsDTO | undefined
  languageCombination?: CommonLanguageCombinationDTO | undefined
  name?: string | undefined
  people?: ClassicPeopleDTO | undefined
  projectId?: bigint | undefined
  quoteId?: bigint | undefined
}
type CustomerInvoiceDTO = {
  currencyId?: bigint | undefined
  customerDetails?: CustomerDetailsDTO | undefined
  customerId?: bigint | undefined
  dates?: CustomerInvoiceDatesDTO | undefined
  id?: bigint | undefined
  invoiceNumber?: string | undefined
  paymentMethodId?: bigint | undefined
  paymentTerms?: PaymentTermsDTO | undefined
  status?: 'NOT_READY' | 'READY' | 'SENT' | undefined
  tasks?: TaskDTO[] | undefined
  tasksValue?: number | undefined
  totalGross?: number | undefined
  totalInWords?: string | undefined
  totalNetto?: number | undefined
  type?: 'FINAL' | 'DRAFT' | 'CREDIT_NOTE' | undefined
  vatCalculationRule?: 'SUM_ITEMS' | 'BY_NET_TOTAL' | undefined
}
type CustomerInvoiceCreateDTO = {
  prepaymentsIds?: bigint[] | undefined
  tasksIds?: bigint[] | undefined
  type?: 'FINAL' | 'DRAFT' | 'CREDIT_NOTE' | undefined
}
type CustomerInvoiceCreateResultDTO = {
  invoiceUrl?: string | undefined
  invoicesIds?: bigint[] | undefined
}
type DownloadDocumentsRequestDTO = { ids?: bigint[] | undefined }
type UrlResultDTO = { url?: string | undefined }
type SendRemindersRequestDTO = { ids?: bigint[] | undefined }
type SendRemindersResponseDTO = { numberOfSentEmails?: number | undefined }
type PaymentDTO = {
  amount?: number | undefined
  notes?: string | undefined
  paymentDate?: TimeDTO | undefined
  paymentMethodId?: bigint | undefined
}
type ProviderInvoiceDatesDTO = {
  draftDate?: TimeDTO | undefined
  finalDate?: TimeDTO | undefined
  invoiceUploadedDate?: TimeDTO | undefined
  paymentDueDate?: TimeDTO | undefined
}
type ProviderInvoiceDTO = {
  currencyId?: bigint | undefined
  dates?: ProviderInvoiceDatesDTO | undefined
  draftNumber?: string | undefined
  finalNumber?: string | undefined
  id?: bigint | undefined
  internalNumber?: string | undefined
  jobsNetValue?: number | undefined
  notesFromProvider?: string | undefined
  paymentStatus?: 'NOT_PAID' | 'FULLY_PAID' | 'IRRECOVERABLE' | 'PARTIALLY_PAID' | undefined
  providerId?: bigint | undefined
  status?: 'POSTPONED' | 'TO_BE_SENT' | 'SENT' | 'CONFIRMED' | 'BILL_CREATED' | undefined
  totalGross?: number | undefined
  totalGrossInWords?: string | undefined
  totalNetto?: number | undefined
}
type ProviderInvoiceCreateDTO = { jobsIds?: bigint[] | undefined }
type ProviderInvoiceCreateResultDTO = {
  invoiceUrl?: string | undefined
  invoicesIds?: bigint[] | undefined
}
type StatusRequestDTO = {
  status?: 'POSTPONED' | 'TO_BE_SENT' | 'SENT' | 'CONFIRMED' | 'BILL_CREATED' | undefined
}
type AccessDTO = { change?: boolean | undefined; delete?: boolean | undefined }
type ActionDTO = { header?: string | undefined; name?: string | undefined }
type FilterDTO = { properties?: { [x: string]: unknown }[] | undefined }
type JsonNode = { [x: string]: unknown }
type ColumnDTO = { name?: string | undefined; settings?: JsonNode | undefined }
type OrderDTO = { column?: string | undefined; type?: string | undefined }
type PermissionsDTO = { sharedGroups?: bigint[] | undefined }
type LocalSettingsDTO = { maxLinesInRow?: number | undefined; maxRows?: number | undefined }
type SettingsDTO = { local?: LocalSettingsDTO | undefined; name?: string | undefined }
type ViewDTO = {
  columns?: ColumnDTO[] | undefined
  order?: OrderDTO | undefined
  permissions?: PermissionsDTO | undefined
  settings?: SettingsDTO | undefined
}
type ViewDetailsDTO = {
  access?: AccessDTO | undefined
  actions?: ActionDTO[] | undefined
  filter?: FilterDTO | undefined
  view?: ViewDTO | undefined
  viewId?: bigint | undefined
}
type LastModificationDTO = { date?: string | undefined; modifier?: string | undefined }
type ViewBriefDTO = {
  access?: AccessDTO | undefined
  current?: boolean | undefined
  id?: bigint | undefined
  lastModification?: LastModificationDTO | undefined
  mine?: boolean | undefined
  name?: string | undefined
  owner?: string | undefined
}
type ViewsBriefDTO = { access?: AccessDTO | undefined; list?: ViewBriefDTO[] | undefined }
type ViewWithIdDTO = {
  columns?: ColumnDTO[] | undefined
  order?: OrderDTO | undefined
  permissions?: PermissionsDTO | undefined
  settings?: SettingsDTO | undefined
  viewId?: bigint | undefined
}
type FilterPropertyDTO = {
  name?: string | undefined
  settings?: { [x: string]: unknown } | undefined
  settingsPresent?: boolean | undefined
  type?: string | undefined
}
type EntityWithNameDTO = { id?: bigint | undefined; name?: string | undefined }
type CustomerTaxNoDTO = { number?: string | undefined; type?: string | undefined }
type CustomerAccountingDTO = { taxNumbers?: CustomerTaxNoDTO[] | undefined }
type AddressDTO = {
  addressLine1?: string | undefined
  addressLine2?: string | undefined
  city?: string | undefined
  countryId?: bigint | undefined
  postalCode?: string | undefined
  provinceId?: bigint | undefined
  sameAsBillingAddress?: boolean | undefined
}
type CustomerContactEmailsDTO = {
  additional?: string[] | undefined
  cc?: string[] | undefined
  primary: string
}
type ContactDTO = {
  emails?: CustomerContactEmailsDTO | undefined
  fax?: string | undefined
  phones?: string[] | undefined
  sms?: string | undefined
  websites?: string[] | undefined
}
type PersonContactEmailsDTO = { additional?: string[] | undefined; primary: string }
type PersonContactDTO = {
  emails?: PersonContactEmailsDTO | undefined
  fax?: string | undefined
  phones?: string[] | undefined
  sms?: string | undefined
}
type CustomerPersonDTO = {
  active?: boolean | undefined
  contact?: PersonContactDTO | undefined
  customFields?: CustomFieldDTO[] | undefined
  customerId?: bigint | undefined
  firstProjectDate?: string | undefined
  firstQuoteDate?: string | undefined
  gender?: 'FEMALE' | 'MALE' | undefined
  id?: bigint | undefined
  lastName?: string | undefined
  lastProjectDate?: string | undefined
  lastQuoteDate?: string | undefined
  motherTonguesIds?: bigint[] | undefined
  name?: string | undefined
  numberOfProjects?: number | undefined
  numberOfQuotes?: number | undefined
  positionId?: bigint | undefined
}
type CustomerResponsiblePersonsDTO = {
  accountManagerId?: bigint | undefined
  projectCoordinatorId?: bigint | undefined
  projectManagerId: bigint
  salesPersonId: bigint
}
type CustomerDTO = {
  accountOnCustomerServer?: string | undefined
  accounting?: CustomerAccountingDTO | undefined
  billingAddress?: AddressDTO | undefined
  branchId?: bigint | undefined
  categoriesIds?: bigint[] | undefined
  clientFirstProjectDate?: string | undefined
  clientFirstQuoteDate?: string | undefined
  clientLastProjectDate?: string | undefined
  clientLastQuoteDate?: string | undefined
  clientNumberOfProjects?: number | undefined
  clientNumberOfQuotes?: number | undefined
  contact?: ContactDTO | undefined
  contractNumber?: string | undefined
  correspondenceAddress?: AddressDTO | undefined
  customFields?: CustomFieldDTO[] | undefined
  fullName?: string | undefined
  id?: bigint | undefined
  idNumber?: string | undefined
  industriesIds?: bigint[] | undefined
  leadSourceId?: bigint | undefined
  limitAccessToPeopleResponsible?: boolean | undefined
  name?: string | undefined
  notes?: string | undefined
  persons?: CustomerPersonDTO[] | undefined
  responsiblePersons?: CustomerResponsiblePersonsDTO | undefined
  salesNotes?: string | undefined
  status?: 'ACTIVE' | 'INACTIVE' | 'POTENTIAL' | undefined
}
type AccessTokenRequestDTO = { loginOrEmail?: string | undefined }
type AccessTokenDTO = { token?: string | undefined; url?: string | undefined }
type CustomFieldsDTO = CustomFieldDTO[]
type CategoriesDTO = bigint[]
type IndustriesDTO = bigint[]
type CalculationUnitDTO = {
  active?: boolean | undefined
  canBeUsedInCatAnalysis?: boolean | undefined
  catQuantityConversionExpression?: string | undefined
  default?: boolean | undefined
  exchangeRatio?: number | undefined
  fileStatsConversionExpression?: string | undefined
  id?: bigint | undefined
  jobTypeIds?: bigint[] | undefined
  name?: string | undefined
  preferred?: boolean | undefined
  symbol?: string | undefined
  timeToQuantityConversionExpression?: string | undefined
  type?: 'TIME' | 'VOLUME' | 'PERCENT' | undefined
}
type CategoryDTO = {
  active?: boolean | undefined
  default?: boolean | undefined
  id?: bigint | undefined
  name?: string | undefined
  preferred?: boolean | undefined
  supportedClasses?:
    | (
        | 'PROJECT'
        | 'QUOTE'
        | 'QUOTE_TASK'
        | 'TASK'
        | 'PROVIDER'
        | 'CUSTOMER'
        | 'CUSTOMER_PERSON'
        | 'PROVIDER_PERSON'
        | 'FINANCIAL_REPORT'
        | 'REMINDER'
        | 'PROVIDER_INVOICE'
        | 'CUSTOMER_INVOICE'
        | 'PROJECT_GROUP'
      )[]
    | undefined
}
type CountryDTO = {
  active?: boolean | undefined
  default?: boolean | undefined
  id?: bigint | undefined
  name?: string | undefined
  preferred?: boolean | undefined
  symbol?: string | undefined
}
type CurrencyDTO = {
  active?: boolean | undefined
  default?: boolean | undefined
  id?: bigint | undefined
  isoCode?: string | undefined
  name?: string | undefined
  preferred?: boolean | undefined
  symbol?: string | undefined
}
type IndustryDTO = {
  active?: boolean | undefined
  default?: boolean | undefined
  id?: bigint | undefined
  name?: string | undefined
  preferred?: boolean | undefined
}
type JobTypeDTO = {
  active?: boolean | undefined
  calculationUnitIds?: bigint[] | undefined
  default?: boolean | undefined
  filesNeeded?: boolean | undefined
  id?: bigint | undefined
  name?: string | undefined
  preferred?: boolean | undefined
  providedByClient?: boolean | undefined
  relationToLanguage?:
    | 'LANGUAGE_COMBINATION_RELATED'
    | 'SOURCE_LANGUAGE_RELATED_ONLY'
    | 'TARGET_LANGUAGE_RELATED_ONLY'
    | 'LANGUAGE_INDEPENDENT'
    | undefined
  vendorProductivity?: number | undefined
  vendorProductivityCalculationUnitId?: bigint | undefined
}
type LanguageDTO = {
  active?: boolean | undefined
  default?: boolean | undefined
  id?: bigint | undefined
  iso6391?: string | undefined
  iso6392?: string | undefined
  name?: string | undefined
  preferred?: boolean | undefined
  symbol?: string | undefined
}
type LeadSourceDTO = {
  active?: boolean | undefined
  availableForCustomer?: boolean | undefined
  availableForProvider?: boolean | undefined
  default?: boolean | undefined
  id?: bigint | undefined
  name?: string | undefined
  preferred?: boolean | undefined
}
type PersonDepartmentDTO = {
  active?: boolean | undefined
  default?: boolean | undefined
  id?: bigint | undefined
  name?: string | undefined
  preferred?: boolean | undefined
}
type PersonPositionDTO = {
  active?: boolean | undefined
  default?: boolean | undefined
  id?: bigint | undefined
  name?: string | undefined
  preferred?: boolean | undefined
}
type ProvinceDTO = {
  active?: boolean | undefined
  countryId?: bigint | undefined
  default?: boolean | undefined
  id?: bigint | undefined
  name?: string | undefined
  preferred?: boolean | undefined
}
type LanguageSpecializationDTO = {
  active?: boolean | undefined
  default?: boolean | undefined
  id?: bigint | undefined
  name?: string | undefined
  preferred?: boolean | undefined
}
type ManyValuesPerTypeDTO = {
  calculationUnit?: CalculationUnitDTO[] | undefined
  category?: CategoryDTO[] | undefined
  country?: CountryDTO[] | undefined
  currency?: CurrencyDTO[] | undefined
  industry?: IndustryDTO[] | undefined
  jobType?: JobTypeDTO[] | undefined
  language?: LanguageDTO[] | undefined
  leadSource?: LeadSourceDTO[] | undefined
  personDepartment?: PersonDepartmentDTO[] | undefined
  personPosition?: PersonPositionDTO[] | undefined
  province?: ProvinceDTO[] | undefined
  specialization?: LanguageSpecializationDTO[] | undefined
}
type CurrencyHistoryDTO = {
  dateFrom?: TimeDTO | undefined
  exchangeRate?: string | undefined
  lastModification?: TimeDTO | undefined
  originDetails?: string | undefined
  publicationDate?: TimeDTO | undefined
}
type Event = { raiseTime?: bigint | undefined }
type EventsQueue = {
  all?: Event[] | undefined
  empty?: boolean | undefined
  readyToBeDispatched?: boolean | undefined
}
type Identifier = { compoundId?: string | undefined; id?: bigint | undefined }
type DictionaryEntity = {
  active?: boolean | undefined
  andClearEventsQueue?: EventsQueue | undefined
  auditDisplayName?: string | undefined
  auditPath?: string | undefined
  classNameKey?: string | undefined
  classSimpleName?: string | undefined
  compoundId?: string | undefined
  defaultEntity?: boolean | undefined
  displayName?: string | undefined
  entityMarkedAsNotSupposedToBePersisted?: boolean | undefined
  eventsQueueReadyToBeDispatched?: boolean | undefined
  id?: bigint | undefined
  identifier?: Identifier | undefined
  internalDescription?: string | undefined
  lastModificationDate?: string | undefined
  name: string
  packedCompoundId?: string | undefined
  preferedEntity: boolean
  preferred?: boolean | undefined
  version?: number | undefined
}
type FileToUploadDto = { file?: File | undefined }
type JobCommunicationDto = {
  instructionsForAllJobs?: string | undefined
  instructionsForJob?: string | undefined
  noteFromVendor?: string | undefined
}
type JobDatesDto = {
  actualEndDate?: bigint | undefined
  actualStartDate?: bigint | undefined
  deadline?: bigint | undefined
  startDate?: bigint | undefined
}
type JobDocumentsDto = { purchaseOrderStatus?: string | undefined }
type JobFilesDto = {
  deliveredInJobFiles?: string[] | undefined
  sharedReferenceFiles?: string[] | undefined
  sharedWorkFiles?: string[] | undefined
}
type JobLanguageCombinationDto = {
  sourceLanguageId?: bigint | undefined
  specializationId?: bigint | undefined
  targetLanguageId?: bigint | undefined
}
type StepTypeSemanticsDto = {
  canVerifyFiles?: boolean | undefined
  isScripted?: boolean | undefined
}
type StepTypeDto = {
  id?: string | undefined
  jobTypeId?: bigint | undefined
  name?: string | undefined
  semantics?: StepTypeSemanticsDto | undefined
}
type JobDto = {
  communication?: JobCommunicationDto | undefined
  dates?: JobDatesDto | undefined
  documents?: JobDocumentsDto | undefined
  files?: JobFilesDto | undefined
  id?: string | undefined
  idNumber?: string | undefined
  languages?: JobLanguageCombinationDto[] | undefined
  name?: string | undefined
  status?: string | undefined
  stepNumber?: number | undefined
  stepType?: StepTypeDto | undefined
  vendorId?: bigint | undefined
  vendorPriceProfileId?: bigint | undefined
}
type FileDTO = {
  content?: string | undefined
  name?: string | undefined
  token?: string | undefined
  url?: string | undefined
}
type JobFilesDTO = { inputFiles?: FileDTO[] | undefined; outputFiles?: FileDTO[] | undefined }
type TaskFileDTO = {
  category?: 'WORKFILE' | 'TM' | 'DICTIONARY' | 'REF' | 'LOG_FILE' | undefined
  content?: string | undefined
  name?: string | undefined
  token?: string | undefined
  url?: string | undefined
}
type FileMetadataDTO = {
  categoryKey?: string | undefined
  id?: bigint | undefined
  lastModifiedOn?: bigint | undefined
  name?: string | undefined
  size?: bigint | undefined
}
type JobStatusDTO = { externalId?: string | undefined; status?: string | undefined }
type AssignVendorDTO = {
  recalculateRates?: boolean | undefined
  vendorPriceProfileId?: bigint | undefined
}
type Parameter = { type?: string | undefined; value?: string | undefined }
type GetLicenseResult = {
  clientId?: string | undefined
  parameters?: { [x: string]: Parameter } | undefined
}
type MacroRequestDTO = {
  async?: boolean | undefined
  ids?: bigint[] | undefined
  params?: { [x: string]: { [x: string]: unknown } } | undefined
}
type ActionStartedDTO = {
  actionId?: string | undefined
  resultUrl?: string | undefined
  statusUrl?: string | undefined
}
type ClassicProjectCreateDTO = {
  categoriesIds?: bigint[] | undefined
  customerId: bigint
  dates?: ProjectDatesDTO | undefined
  inputFiles?: TaskFileDTO[] | undefined
  instructions?: InstructionsDTO | undefined
  name?: string | undefined
  people?: ClassicPeopleDTO | undefined
  serviceId: bigint
  sourceLanguageId?: bigint | undefined
  specializationId: bigint
  targetLanguagesIds?: bigint[] | undefined
}
type ChargeLanguageCombinationDTO = {
  sourceLanguageId?: bigint | undefined
  targetLanguageId?: bigint | undefined
}
type ChargeDTO = {
  calculationUnitId?: bigint | undefined
  currencyId?: bigint | undefined
  description?: string | undefined
  id?: bigint | undefined
  ignoreMinimumCharge?: boolean | undefined
  invoiceId?: string | undefined
  jobTypeId?: bigint | undefined
  languageCombination?: ChargeLanguageCombinationDTO | undefined
  languageCombinationIdNumber?: string | undefined
  minimumCharge?: number | undefined
  rateOrigin?: 'PRICE_PROFILE' | 'PRICE_LIST' | 'FILLED_MANUALLY' | 'AUTOCALCULATED' | undefined
  total?: number | undefined
  type?: 'SIMPLE' | 'CAT' | undefined
}
type FinanceDTO = {
  ROI?: number | undefined
  currencyId?: bigint | undefined
  margin?: number | undefined
  payables?: ChargeDTO[] | undefined
  profit?: number | undefined
  receivables?: ChargeDTO[] | undefined
  totalAgreed?: number | undefined
  totalCost?: number | undefined
}
type ProjectDTOv1 = {
  categoriesIds?: bigint[] | undefined
  contactPersonId?: bigint | undefined
  contacts?: ContactsDTO | undefined
  customFields?: CustomFieldDTO[] | undefined
  customerId?: bigint | undefined
  dates?: ProjectDatesDTO | undefined
  finance?: FinanceDTO | undefined
  id?: bigint | undefined
  idNumber?: string | undefined
  instructions?: InstructionsDTO | undefined
  isClassicProject?: boolean | undefined
  name?: string | undefined
  projectId?: string | undefined
  projectManagerId?: bigint | undefined
  specializationId?: bigint | undefined
  status?: 'REQUESTED_PROJECT' | 'OPENED' | 'CLOSED' | 'CANCELLED' | 'CLAIM' | undefined
  tasks?: TaskDTO[] | undefined
}
type PayableCreateDTO = {
  calculationUnitId?: bigint | undefined
  catLogFile?: FileDTO | undefined
  currencyId?: bigint | undefined
  description?: string | undefined
  id?: bigint | undefined
  ignoreMinimumCharge?: boolean | undefined
  invoiceId?: string | undefined
  jobId?: { [x: string]: unknown } | undefined
  jobTypeId?: bigint | undefined
  languageCombination?: ChargeLanguageCombinationDTO | undefined
  languageCombinationIdNumber?: string | undefined
  minimumCharge?: number | undefined
  quantity?: number | undefined
  rate?: number | undefined
  rateOrigin?: 'PRICE_PROFILE' | 'PRICE_LIST' | 'FILLED_MANUALLY' | 'AUTOCALCULATED' | undefined
  total?: number | undefined
  type?: 'SIMPLE' | 'CAT' | undefined
}
type PayableDTO = {
  calculationUnitId?: bigint | undefined
  currencyId?: bigint | undefined
  description?: string | undefined
  id?: bigint | undefined
  ignoreMinimumCharge?: boolean | undefined
  invoiceId?: string | undefined
  jobId?: { [x: string]: unknown } | undefined
  jobTypeId?: bigint | undefined
  languageCombination?: ChargeLanguageCombinationDTO | undefined
  languageCombinationIdNumber?: string | undefined
  minimumCharge?: number | undefined
  quantity?: number | undefined
  rate?: number | undefined
  rateOrigin?: 'PRICE_PROFILE' | 'PRICE_LIST' | 'FILLED_MANUALLY' | 'AUTOCALCULATED' | undefined
  total?: number | undefined
  type?: 'SIMPLE' | 'CAT' | undefined
}
type ReceivableCreateDTO = {
  calculationUnitId?: bigint | undefined
  catLogFile?: FileDTO | undefined
  currencyId?: bigint | undefined
  description?: string | undefined
  id?: bigint | undefined
  ignoreMinimumCharge?: boolean | undefined
  invoiceId?: string | undefined
  jobTypeId?: bigint | undefined
  languageCombination?: ChargeLanguageCombinationDTO | undefined
  languageCombinationIdNumber?: string | undefined
  minimumCharge?: number | undefined
  quantity?: number | undefined
  rate?: number | undefined
  rateOrigin?: 'PRICE_PROFILE' | 'PRICE_LIST' | 'FILLED_MANUALLY' | 'AUTOCALCULATED' | undefined
  taskId?: bigint | undefined
  total?: number | undefined
  type?: 'SIMPLE' | 'CAT' | undefined
}
type ReceivableDTO = {
  calculationUnitId?: bigint | undefined
  currencyId?: bigint | undefined
  description?: string | undefined
  id?: bigint | undefined
  ignoreMinimumCharge?: boolean | undefined
  invoiceId?: string | undefined
  jobTypeId?: bigint | undefined
  languageCombination?: ChargeLanguageCombinationDTO | undefined
  languageCombinationIdNumber?: string | undefined
  minimumCharge?: number | undefined
  quantity?: number | undefined
  rate?: number | undefined
  rateOrigin?: 'PRICE_PROFILE' | 'PRICE_LIST' | 'FILLED_MANUALLY' | 'AUTOCALCULATED' | undefined
  taskId?: bigint | undefined
  total?: number | undefined
  type?: 'SIMPLE' | 'CAT' | undefined
}
type TaskCreateDTO = {
  clientTaskPONumber?: string | undefined
  dates?: ProjectDatesDTO | undefined
  files?: TaskFileDTO[] | undefined
  instructions?: InstructionsDTO | undefined
  languageCombination?: CommonLanguageCombinationDTO | undefined
  name?: string | undefined
  people?: ClassicPeopleDTO | undefined
  specializationId?: bigint | undefined
  workflowId?: bigint | undefined
}
type ProviderPersonDTO = {
  active?: boolean | undefined
  contact?: PersonContactDTO | undefined
  customFields?: CustomFieldDTO[] | undefined
  gender?: 'FEMALE' | 'MALE' | undefined
  id?: bigint | undefined
  lastName?: string | undefined
  motherTonguesIds?: bigint[] | undefined
  name?: string | undefined
  positionId?: bigint | undefined
  providerId?: bigint | undefined
}
type InvitationStatisticsDTO = {
  alreadyRegisteredPersonsCount?: number | undefined
  invitedPersonsCount?: number | undefined
  providersWithAlreadyRegisteredPersonCount?: number | undefined
  providersWithInvitedPersonCount?: number | undefined
  providersWithoutPersonCount?: number | undefined
}
type CompetenciesDTO = { languageCombinations?: CommonLanguageCombinationDTO[] | undefined }
type ProviderDTO = {
  billingAddress?: AddressDTO | undefined
  branchId?: bigint | undefined
  competencies?: CompetenciesDTO | undefined
  contact?: ContactDTO | undefined
  correspondenceAddress?: AddressDTO | undefined
  customFields?: CustomFieldDTO[] | undefined
  fullName?: string | undefined
  id?: bigint | undefined
  idNumber?: string | undefined
  leadSourceId?: bigint | undefined
  name?: string | undefined
  notes?: string | undefined
  persons?: ProviderPersonDTO[] | undefined
  status?:
    | 'ACTIVE'
    | 'INACTIVE'
    | 'WAITING_FOR_APPROVAL'
    | 'REJECTED'
    | 'TOO_EXPENSIVE'
    | 'INCOMPLETE_DATA'
    | 'POTENTIAL'
    | 'NOT_CONFIRMED'
    | undefined
}
type QuoteDatesDTO = {
  createdOn?: TimeDTO | undefined
  deadline?: TimeDTO | undefined
  offerExpiry?: TimeDTO | undefined
  startDate?: TimeDTO | undefined
}
type QuoteDTOv1 = {
  automaticallyAcceptSentQuote?: boolean | undefined
  categoriesIds?: bigint[] | undefined
  contactPersonId?: bigint | undefined
  customFields?: CustomFieldDTO[] | undefined
  customerId?: bigint | undefined
  dates?: QuoteDatesDTO | undefined
  finance?: FinanceDTO | undefined
  id?: bigint | undefined
  idNumber?: string | undefined
  instructions?: InstructionsDTO | undefined
  isClassicQuote?: boolean | undefined
  name?: string | undefined
  quoteId?: string | undefined
  salesPersonId?: bigint | undefined
  status?: string | undefined
  tasks?: TaskDTO[] | undefined
}
type ExportRequestDTO = { ids?: bigint[] | undefined }
type ReportResultDTO = { url?: string | undefined }
type ImportRequestDTO = { fileToken?: string | undefined }
type ImportResultDTO = {
  currentSystemVersion?: string | undefined
  importedReportsNames?: string[] | undefined
  invalidReportsNames?: string[] | undefined
  targetSystemVersion?: string | undefined
}
type PreferredRequestDTO = { preferred?: boolean | undefined }
type ServiceDTO = {
  active?: boolean | undefined
  default?: boolean | undefined
  id?: bigint | undefined
  name?: string | undefined
  preferred?: boolean | undefined
}
type ActiveSubscriptionDTO = {
  embed?: string | undefined
  event?: string | undefined
  filter?: string | undefined
  subscriptionId?: string | undefined
  url?: string | undefined
}
type SubscriptionDTO = {
  embed?: string | undefined
  event?: string | undefined
  filter?: string | undefined
  url?: string | undefined
}
type StringDTO = { value?: string | undefined }
type InputFilesDTO = {
  logFiles?: FileDTO[] | undefined
  referenceFiles?: FileDTO[] | undefined
  terminology?: FileDTO[] | undefined
  tm?: FileDTO[] | undefined
  workFiles?: FileDTO[] | undefined
}
type JobDTO = {
  files?: JobFilesDTO | undefined
  id?: bigint | undefined
  idNumber?: string | undefined
  name?: string | undefined
}
type TaskFilesDTO = {
  bundles?: { [x: string]: FileDTO[] } | undefined
  inputFiles?: InputFilesDTO | undefined
  jobs?: JobDTO[] | undefined
  outputFiles?: FileDTO[] | undefined
}
type TaskProgressDTO = { phase?: string | undefined; status?: string | undefined }
type UserDTO = {
  customFields?: CustomFieldDTO[] | undefined
  email?: string | undefined
  firstName?: string | undefined
  gender?: string | undefined
  id?: bigint | undefined
  lastName?: string | undefined
  login?: string | undefined
  mobilePhone?: string | undefined
  phone?: string | undefined
  positionName?: string | undefined
  timeZoneId?: string | undefined
  userGroupName?: string | undefined
}
type TimeZoneDTO = {
  displayName?: string | undefined
  id?: string | undefined
  offset?: number | undefined
}
type ProjectFileAddedByDto = { userType?: string | undefined; vendorId?: bigint | undefined }
type LanguageCombinationDto = {
  sourceLanguageId?: bigint | undefined
  targetLanguageId?: bigint | undefined
}
type LanguageRelationDto = {
  languageCombinations?: LanguageCombinationDto[] | undefined
  languages?: bigint[] | undefined
}
type RemoteCATToolReferencesDto = {
  catResourceId?: string | undefined
  catToolDocumentId?: string | undefined
  editorUrl?: string | undefined
}
type ProjectFileDto = {
  addedBy?: ProjectFileAddedByDto | undefined
  addedInJob?: string | undefined
  addedInLastStep?: boolean | undefined
  addedInStep?: bigint | undefined
  categoryKey?: string | undefined
  id?: string | undefined
  isAccepted?: boolean | undefined
  isLink?: boolean | undefined
  isRemote?: boolean | undefined
  languageRelation?: LanguageRelationDto | undefined
  lastModifiedOn?: bigint | undefined
  name?: string | undefined
  remoteCATToolReferences?: RemoteCATToolReferencesDto | undefined
  sharedWithJobs?: string[] | undefined
  size?: bigint | undefined
  url?: string | undefined
}
type ExternalFileDto = {
  category?: string | undefined
  externalInfo?: { [x: string]: string } | undefined
  filename?: string | undefined
  languageCombinationIds?: LanguageCombinationDto[] | undefined
  languageIds?: bigint[] | undefined
}
type FileCategorizationDto = {
  category?: string | undefined
  fileId?: string | undefined
  languageCombinationIds?: LanguageCombinationDto[] | undefined
  languageIds?: bigint[] | undefined
}
type FileCategorizationsDto = { files?: FileCategorizationDto[] | undefined }
type FileLinkCategorizationDto = {
  category?: string | undefined
  externalInfo?: { [x: string]: string } | undefined
  filename?: string | undefined
  languageCombinationIds?: LanguageCombinationDto[] | undefined
  languageIds?: bigint[] | undefined
  toBeGenerated?: boolean | undefined
  url?: string | undefined
}
type FileLinkCategorizationsDto = { fileLinks?: FileLinkCategorizationDto[] | undefined }
type FilesDto = { files?: string[] | undefined }
type FileDto = { fileId?: string | undefined }
type FileShareStatusDto = {
  fileId?: string | undefined
  message?: string | undefined
  successful?: boolean | undefined
}
type FilesShareStatusDto = { statuses?: FileShareStatusDto[] | undefined }
type VendorPriceProfileDTO = { vendorPriceProfileId?: bigint | undefined }
type ProjectCreateDTO = {
  clientId?: bigint | undefined
  externalId?: string | undefined
  name?: string | undefined
  serviceId?: bigint | undefined
}
type DocumentsDTO = { projectConfirmationStatus?: string | undefined }
type LanguageCombinationDTO = {
  sourceLanguageId?: bigint | undefined
  specializationId?: bigint | undefined
  targetLanguageId?: bigint | undefined
}
type ProjectLanguagesDTO = {
  languageCombinations?: LanguageCombinationDTO[] | undefined
  sourceLanguageId?: bigint | undefined
  specializationId?: bigint | undefined
  targetLanguageIds?: bigint[] | undefined
}
type PeopleDTO = { projectManagerId?: bigint | undefined }
type VolumeDTO = { unitId?: bigint | undefined; value?: number | undefined }
type ProjectDTOv2 = {
  budgetCode?: string | undefined
  categoryIds?: bigint[] | undefined
  clientDeadline?: bigint | undefined
  clientId?: bigint | undefined
  clientNotes?: string | undefined
  clientReferenceNumber?: string | undefined
  documents?: DocumentsDTO | undefined
  id?: string | undefined
  instructionsForAllJobs?: string | undefined
  internalNotes?: string | undefined
  isClassicProject?: boolean | undefined
  languages?: ProjectLanguagesDTO | undefined
  name?: string | undefined
  orderedOn?: bigint | undefined
  origin?: string | undefined
  people?: PeopleDTO | undefined
  projectId?: string | undefined
  projectIdNumber?: string | undefined
  quoteIdNumber?: string | undefined
  serviceId?: bigint | undefined
  status?: string | undefined
  volume?: VolumeDTO | undefined
}
type FilesArchiveDto = { archiveUrl?: string | undefined }
type CATToolProjectDTO = { projectCreatedInCatToolOrCreationIsQueued?: boolean | undefined }
type SmartContactsDTO = { additionalIds?: bigint[] | undefined; primaryId?: bigint | undefined }
type SmartCustomFieldDTO = { value?: { [x: string]: unknown } | undefined }
type SourceLanguageDTO = { sourceLanguageId?: bigint | undefined }
type SpecializationDTO = { specializationId?: bigint | undefined }
type ProjectStatusDTO = { status?: string | undefined }
type TargetLanguagesDTO = { targetLanguageIds?: bigint[] | undefined }
type BigDecimalDTO = { value?: number | undefined }
type QuoteCreateDTO = {
  clientId?: bigint | undefined
  name?: string | undefined
  opportunityOfferId?: bigint | undefined
  serviceId?: bigint | undefined
}
type QuoteDTOv2 = {
  budgetCode?: string | undefined
  businessDays?: bigint | undefined
  categoryIds?: bigint[] | undefined
  clientDeadline?: bigint | undefined
  clientId?: bigint | undefined
  clientNotes?: string | undefined
  clientReferenceNumber?: string | undefined
  createdOn?: bigint | undefined
  documents?: DocumentsDTO | undefined
  expectedDeliveryDate?: bigint | undefined
  id?: string | undefined
  instructionsForAllJobs?: string | undefined
  internalNotes?: string | undefined
  isClassicQuote?: boolean | undefined
  languages?: ProjectLanguagesDTO | undefined
  name?: string | undefined
  origin?: string | undefined
  people?: PeopleDTO | undefined
  quoteExpiry?: bigint | undefined
  quoteId?: string | undefined
  quoteIdNumber?: string | undefined
  serviceId?: bigint | undefined
  status?: string | undefined
  volume?: VolumeDTO | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/accounting/customers/invoices': {
      $get: {
        input: { query: { updatedSince?: bigint | undefined } }
        output: CustomerInvoiceDTO[]
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { json: CustomerInvoiceCreateDTO }
        output: CustomerInvoiceCreateResultDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/accounting/customers/invoices/documents': {
      $post: {
        input: { json: DownloadDocumentsRequestDTO }
        output: UrlResultDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/accounting/customers/invoices/ids': {
      $get: {
        input: { query: { updatedSince?: bigint | undefined } }
        output: number[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/accounting/customers/invoices/sendReminders': {
      $post: {
        input: { json: SendRemindersRequestDTO }
        output: SendRemindersResponseDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/accounting/customers/invoices/:invoiceId': {
      $delete: {
        input: { param: { invoiceId: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { invoiceId: bigint } } & { query: { embed?: string | undefined } }
        output: CustomerInvoiceDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/accounting/customers/invoices/:invoiceId/dates': {
      $get: {
        input: { param: { invoiceId: bigint } }
        output: CustomerInvoiceDatesDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/accounting/customers/invoices/:invoiceId/document': {
      $get: {
        input: { param: { invoiceId: bigint } }
        output: UrlResultDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/accounting/customers/invoices/:invoiceId/duplicate': {
      $post: {
        input: { param: { invoiceId: bigint } }
        output: CustomerInvoiceDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/accounting/customers/invoices/:invoiceId/duplicate/proForma': {
      $post: {
        input: { param: { invoiceId: bigint } }
        output: CustomerInvoiceDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/accounting/customers/invoices/:invoiceId/paymentTerms': {
      $get: {
        input: { param: { invoiceId: bigint } }
        output: PaymentTermsDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/accounting/customers/invoices/:invoiceId/payments': {
      $get: {
        input: { param: { invoiceId: bigint } }
        output: PaymentDTO[]
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { invoiceId: bigint } } & { json: PaymentDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/accounting/customers/invoices/:invoiceId/sendReminder': {
      $post: {
        input: { param: { invoiceId: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/accounting/customers/payments/:paymentId': {
      $delete: {
        input: { param: { paymentId: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/accounting/providers/invoices': {
      $get: {
        input: { query: { updatedSince?: bigint | undefined } }
        output: ProviderInvoiceDTO[]
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { json: ProviderInvoiceCreateDTO }
        output: ProviderInvoiceCreateResultDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/accounting/providers/invoices/ids': {
      $get: {
        input: { query: { updatedSince?: bigint | undefined } }
        output: number[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/accounting/providers/invoices/:invoiceId': {
      $delete: {
        input: { param: { invoiceId: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { invoiceId: bigint } }
        output: ProviderInvoiceDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/accounting/providers/invoices/:invoiceId/document': {
      $get: {
        input: { param: { invoiceId: bigint } }
        output: UrlResultDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/accounting/providers/invoices/:invoiceId/payments': {
      $get: {
        input: { param: { invoiceId: bigint } }
        output: PaymentDTO[]
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { invoiceId: bigint } } & { json: PaymentDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/accounting/providers/invoices/:invoiceId/send': {
      $post: {
        input: { param: { invoiceId: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/accounting/providers/invoices/:invoiceId/status': {
      $post: {
        input: { param: { invoiceId: bigint } } & { json: StatusRequestDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/accounting/providers/payments/:paymentId': {
      $delete: {
        input: { param: { paymentId: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/browser': {
      $get: {
        input: {
          query: {
            viewId?: bigint | undefined
            page?: number | undefined
            additionalOrder?: string | undefined
            useDeferredColumns?: string | undefined
            maxRows?: number | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/browser/csv': {
      $get: {
        input: {
          query: {
            viewId?: bigint | undefined
            separator?: string | undefined
            secondarySeparator?: string | undefined
            additionalOrder?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/browser/views/details/for/:className': {
      $get: {
        input: { param: { className: string } } & { query: { placeName?: string | undefined } }
        output: ViewDetailsDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/browser/views/details/for/:className/:viewId': {
      $get: {
        input: { param: { className: string; viewId: bigint } } & {
          query: { placeName?: string | undefined }
        }
        output: ViewDetailsDTO
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { className: string; viewId: bigint } } & {
          query: {
            'place name (denotes specific place in system with the table)'?: string | undefined
          }
        }
        output: ViewDetailsDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/browser/views/for/:className': {
      $get: {
        input: { param: { className: string } } & { query: { placeName?: string | undefined } }
        output: ViewsBriefDTO
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { className: string } } & { json: ViewDTO }
        output: ViewWithIdDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/browser/views/:viewId': {
      $delete: {
        input: { param: { viewId: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { viewId: bigint } }
        output: ViewDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { viewId: bigint } } & { json: ViewDTO }
        output: ViewDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/browser/views/:viewId/columns': {
      $get: {
        input: { param: { viewId: bigint } }
        output: ColumnDTO[]
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { viewId: bigint } } & { json: ColumnDTO[] }
        output: ColumnDTO[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/browser/views/:viewId/columns/:columnName': {
      $delete: {
        input: { param: { viewId: bigint; columnName: string } }
        output: ColumnDTO[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/browser/views/:viewId/columns/:columnName/settings': {
      $get: {
        input: { param: { viewId: bigint; columnName: string } }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { viewId: bigint; columnName: string } } & {
          json: { [x: string]: unknown }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/browser/views/:viewId/filter': {
      $get: {
        input: { param: { viewId: bigint } }
        output: FilterDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { viewId: bigint } } & { json: FilterPropertyDTO[] }
        output: FilterDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/browser/views/:viewId/filter/:filterProperty': {
      $put: {
        input: { param: { viewId: bigint; filterProperty: string } } & { json: FilterPropertyDTO }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/browser/views/:viewId/order': {
      $get: {
        input: { param: { viewId: bigint } }
        output: OrderDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { viewId: bigint } } & { json: OrderDTO }
        output: OrderDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/browser/views/:viewId/permissions': {
      $get: {
        input: { param: { viewId: bigint } }
        output: PermissionsDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { viewId: bigint } } & { json: PermissionsDTO }
        output: PermissionsDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/browser/views/:viewId/settings': {
      $get: {
        input: { param: { viewId: bigint } }
        output: SettingsDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { viewId: bigint } } & { json: SettingsDTO }
        output: SettingsDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/browser/views/:viewId/settings/local': {
      $get: {
        input: { param: { viewId: bigint } }
        output: LocalSettingsDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { viewId: bigint } } & { json: LocalSettingsDTO }
        output: LocalSettingsDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/customers': {
      $get: {
        input: { query: { updatedSince?: bigint | undefined } }
        output: EntityWithNameDTO[]
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { json: CustomerDTO }
        output: CustomerDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/customers/ids': {
      $get: {
        input: {
          query: {
            updatedSince?: bigint | undefined
            nameEquals?: string | undefined
            emailEquals?: string | undefined
          }
        }
        output: number[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/customers/persons': {
      $post: {
        input: { json: CustomerPersonDTO }
        output: CustomerPersonDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/customers/persons/accessToken': {
      $post: {
        input: { json: AccessTokenRequestDTO }
        output: AccessTokenDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/customers/persons/ids': {
      $get: {
        input: { query: { updatedSince?: bigint | undefined } }
        output: number[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/customers/persons/:personId': {
      $delete: {
        input: { param: { personId: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { personId: bigint } }
        output: CustomerPersonDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { personId: bigint } } & { json: CustomerPersonDTO }
        output: CustomerPersonDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/customers/persons/:personId/contact': {
      $get: {
        input: { param: { personId: bigint } }
        output: PersonContactDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { personId: bigint } } & { json: PersonContactDTO }
        output: PersonContactDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/customers/persons/:personId/customFields': {
      $get: {
        input: { param: { personId: bigint } }
        output: CustomFieldsDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { personId: bigint } } & { json: CustomFieldsDTO }
        output: CustomFieldsDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/customers/priceLists/:priceListId': {
      $delete: {
        input: { param: { priceListId: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/customers/:customerId': {
      $delete: {
        input: { param: { customerId: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { customerId: bigint } } & { query: { embed?: string | undefined } }
        output: CustomerDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { customerId: bigint } } & { json: CustomerDTO }
        output: CustomerDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/customers/:customerId/address': {
      $get: {
        input: { param: { customerId: bigint } }
        output: AddressDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { customerId: bigint } } & { json: AddressDTO }
        output: AddressDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/customers/:customerId/categories': {
      $get: {
        input: { param: { customerId: bigint } }
        output: CategoriesDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { customerId: bigint } } & { json: CategoriesDTO }
        output: CategoriesDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/customers/:customerId/contact': {
      $get: {
        input: { param: { customerId: bigint } }
        output: ContactDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { customerId: bigint } } & { json: ContactDTO }
        output: ContactDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/customers/:customerId/correspondenceAddress': {
      $get: {
        input: { param: { customerId: bigint } }
        output: AddressDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { customerId: bigint } } & { json: AddressDTO }
        output: AddressDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/customers/:customerId/customFields': {
      $get: {
        input: { param: { customerId: bigint } }
        output: CustomFieldsDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { customerId: bigint } } & { json: CustomFieldsDTO }
        output: CustomFieldsDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/customers/:customerId/customFields/:customFieldKey': {
      $get: {
        input: { param: { customerId: bigint; customFieldKey: string } }
        output: CustomFieldDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { customerId: bigint; customFieldKey: string } } & { json: CustomFieldDTO }
        output: CustomFieldDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/customers/:customerId/industries': {
      $get: {
        input: { param: { customerId: bigint } }
        output: IndustriesDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { customerId: bigint } } & { json: CategoriesDTO }
        output: IndustriesDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/dictionaries/active': {
      $get: { input: {}; output: ManyValuesPerTypeDTO; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/dictionaries/all': {
      $get: { input: {}; output: ManyValuesPerTypeDTO; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/dictionaries/currency/:isoCode/exchangeRate': {
      $get: {
        input: { param: { isoCode: string } }
        output: CurrencyHistoryDTO
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { isoCode: string } } & { json: CurrencyHistoryDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/dictionaries/:type/active': {
      $get: {
        input: { param: { type: string } } & { query: { nameEquals?: string | undefined } }
        output: DictionaryEntity
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/dictionaries/:type/all': {
      $get: {
        input: { param: { type: string } } & { query: { nameEquals?: string | undefined } }
        output: DictionaryEntity
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/dictionaries/:type/:id': {
      $get: {
        input: { param: { type: string; id: bigint } }
        output: DictionaryEntity
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/files': {
      $post: { input: { form: FileToUploadDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/jobs/:jobId': {
      $get: {
        input: { param: { jobId: string } }
        output: JobDto
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/jobs/:jobId/dates': {
      $put: {
        input: { param: { jobId: string } } & { json: JobDatesDto }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/jobs/:jobId/files': {
      $get: {
        input: { param: { jobId: string } }
        output: JobFilesDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/jobs/:jobId/files/output': {
      $post: {
        input: { param: { jobId: string } } & { json: TaskFileDTO }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/jobs/:jobId/files/:fileId': {
      $get: {
        input: { param: { jobId: string; fileId: bigint } }
        output: FileMetadataDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/jobs/:jobId/instructions': {
      $put: {
        input: { param: { jobId: string } } & { json: InstructionsDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/jobs/:jobId/status': {
      $put: {
        input: { param: { jobId: string } } & { json: JobStatusDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/jobs/:jobId/vendor': {
      $put: {
        input: { param: { jobId: string } } & { json: AssignVendorDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/license': { $get: { input: {}; output: GetLicenseResult; outputFormat: 'text'; status: 200 } }
  } & {
    '/license/refresh': { $post: { input: {}; output: {}; outputFormat: string; status: 204 } }
  } & {
    '/macros/:macroId/run': {
      $post: {
        input: { param: { macroId: bigint } } & { json: MacroRequestDTO }
        output: ActionStartedDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/projects': {
      $post: {
        input: { json: ClassicProjectCreateDTO }
        output: ProjectDTOv1
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/projects/files/:fileId/download': {
      $get: { input: { param: { fileId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/projects/ids': {
      $get: {
        input: { query: { updatedSince?: bigint | undefined } }
        output: number[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/projects/:projectId': {
      $delete: {
        input: { param: { projectId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { projectId: string } } & { query: { embed?: string | undefined } }
        output: ProjectDTOv1
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/contacts': {
      $get: {
        input: { param: { projectId: string } }
        output: ContactsDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { projectId: string } } & { json: ContactsDTO }
        output: ContactsDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/customFields': {
      $get: {
        input: { param: { projectId: string } }
        output: CustomFieldsDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { projectId: string } } & { json: CustomFieldsDTO }
        output: CustomFieldsDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/dates': {
      $get: {
        input: { param: { projectId: string } }
        output: ProjectDatesDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { projectId: string } } & { json: ProjectDatesDTO }
        output: ProjectDatesDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/finance': {
      $get: {
        input: { param: { projectId: string } }
        output: FinanceDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/finance/payables': {
      $post: {
        input: { param: { projectId: string } } & { json: PayableCreateDTO }
        output: PayableDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/finance/payables/:payableId': {
      $delete: {
        input: { param: { projectId: string; payableId: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
      $put: {
        input: { param: { projectId: string; payableId: bigint } } & { json: PayableDTO }
        output: PayableDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/finance/receivables': {
      $post: {
        input: { param: { projectId: string } } & { json: ReceivableCreateDTO }
        output: ReceivableDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/finance/receivables/:receivableId': {
      $delete: {
        input: { param: { projectId: string; receivableId: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
      $put: {
        input: { param: { projectId: string; receivableId: bigint } } & { json: ReceivableDTO }
        output: ReceivableDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/instructions': {
      $get: {
        input: { param: { projectId: string } }
        output: InstructionsDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { projectId: string } } & { json: InstructionsDTO }
        output: InstructionsDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/languageCombinations': {
      $post: {
        input: { param: { projectId: string } } & { json: CommonLanguageCombinationDTO }
        output: CommonLanguageCombinationDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/projects/:projectId/tasks': {
      $post: {
        input: { param: { projectId: string } } & { json: TaskCreateDTO }
        output: TaskDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/providers/ids': {
      $get: {
        input: { query: { updatedSince?: bigint | undefined } }
        output: number[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/providers/persons/ids': {
      $get: {
        input: { query: { updatedSince?: bigint | undefined } }
        output: number[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/providers/persons/:personId': {
      $delete: {
        input: { param: { personId: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { personId: bigint } }
        output: ProviderPersonDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/providers/persons/:personId/contact': {
      $get: {
        input: { param: { personId: bigint } }
        output: PersonContactDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/providers/persons/:personId/customFields': {
      $get: {
        input: { param: { personId: bigint } }
        output: CustomFieldsDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/providers/persons/:personId/notification/invitation': {
      $post: {
        input: { param: { personId: bigint } }
        output: InvitationStatisticsDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/providers/priceLists/:priceListId': {
      $delete: {
        input: { param: { priceListId: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/providers/:providerId': {
      $delete: {
        input: { param: { providerId: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { providerId: bigint } } & { query: { embed?: string | undefined } }
        output: ProviderDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/providers/:providerId/address': {
      $get: {
        input: { param: { providerId: bigint } }
        output: AddressDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/providers/:providerId/competencies': {
      $get: {
        input: { param: { providerId: bigint } }
        output: CompetenciesDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/providers/:providerId/contact': {
      $get: {
        input: { param: { providerId: bigint } }
        output: ContactDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/providers/:providerId/correspondenceAddress': {
      $get: {
        input: { param: { providerId: bigint } }
        output: AddressDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/providers/:providerId/customFields': {
      $get: {
        input: { param: { providerId: bigint } }
        output: CustomFieldsDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/providers/:providerId/notification/invitation': {
      $post: {
        input: { param: { providerId: bigint } }
        output: InvitationStatisticsDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/quotes/ids': {
      $get: {
        input: { query: { updatedSince?: bigint | undefined } }
        output: number[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/quotes/:quoteId': {
      $delete: {
        input: { param: { quoteId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { quoteId: string } } & { query: { embed?: string | undefined } }
        output: QuoteDTOv1
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/quotes/:quoteId/confirmation/send': {
      $post: {
        input: { param: { quoteId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/quotes/:quoteId/customFields': {
      $get: {
        input: { param: { quoteId: string } }
        output: CustomFieldsDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { quoteId: string } } & { json: CustomFieldsDTO }
        output: CustomFieldsDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/quotes/:quoteId/dates': {
      $get: {
        input: { param: { quoteId: string } }
        output: QuoteDatesDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/quotes/:quoteId/finance': {
      $get: {
        input: { param: { quoteId: string } }
        output: FinanceDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/quotes/:quoteId/finance/payables': {
      $post: {
        input: { param: { quoteId: string } } & { json: PayableCreateDTO }
        output: PayableDTO
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/quotes/:quoteId/finance/payables/:payableId': {
      $delete: {
        input: { param: { quoteId: string; payableId: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
      $put: {
        input: { param: { quoteId: string; payableId: bigint } } & { json: PayableDTO }
        output: PayableDTO
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/quotes/:quoteId/finance/receivables': {
      $post: {
        input: { param: { quoteId: string } } & { json: ReceivableCreateDTO }
        output: ReceivableDTO
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/quotes/:quoteId/finance/receivables/:receivableId': {
      $delete: {
        input: { param: { quoteId: string; receivableId: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
      $put: {
        input: { param: { quoteId: string; receivableId: bigint } } & { json: ReceivableDTO }
        output: ReceivableDTO
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/quotes/:quoteId/instructions': {
      $get: {
        input: { param: { quoteId: string } }
        output: InstructionsDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { quoteId: string } } & { json: InstructionsDTO }
        output: InstructionsDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/quotes/:quoteId/languageCombinations': {
      $post: {
        input: { param: { quoteId: string } } & { json: CommonLanguageCombinationDTO }
        output: CommonLanguageCombinationDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/quotes/:quoteId/start': {
      $post: {
        input: { param: { quoteId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/quotes/:quoteId/tasks': {
      $post: {
        input: { param: { quoteId: string } } & { json: TaskDTO }
        output: TaskDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/reports/export/xml': {
      $post: {
        input: { json: ExportRequestDTO }
        output: ReportResultDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/reports/import/xml': {
      $post: {
        input: { json: ImportRequestDTO }
        output: ImportResultDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/reports/:reportId': {
      $delete: {
        input: { param: { reportId: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/reports/:reportId/duplicate': {
      $post: {
        input: { param: { reportId: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/reports/:reportId/preferred': {
      $put: {
        input: { param: { reportId: bigint } } & { json: PreferredRequestDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/reports/:reportId/result/csv': {
      $get: {
        input: { param: { reportId: bigint } }
        output: ReportResultDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/reports/:reportId/result/printerFriendly': {
      $get: {
        input: { param: { reportId: bigint } }
        output: ReportResultDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/services/active': {
      $get: {
        input: { query: { nameEquals?: string | undefined } }
        output: ServiceDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/services/all': {
      $get: {
        input: { query: { nameEquals?: string | undefined } }
        output: ServiceDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/subscription': {
      $get: { input: {}; output: ActiveSubscriptionDTO[]; outputFormat: 'text'; status: 200 }
      $post:
        | { input: { json: SubscriptionDTO }; output: string; outputFormat: 'text'; status: 201 }
        | { input: { json: SubscriptionDTO }; output: string; outputFormat: 'text'; status: 409 }
    }
  } & {
    '/subscription/supports': {
      $get: { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/subscription/:subscriptionId': {
      $delete: {
        input: { param: { subscriptionId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/tasks/:taskId': {
      $delete: {
        input: { param: { taskId: string } } & {
          query: {
            removeFilesFromDisc?: boolean | undefined
            removeExternalProjects?: boolean | undefined
            forceJobsRemoval?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/tasks/:taskId/clientTaskPONumber': {
      $put: {
        input: { param: { taskId: string } } & { json: StringDTO }
        output: StringDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/tasks/:taskId/contacts': {
      $get: {
        input: { param: { taskId: string } }
        output: ContactsDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { taskId: string } } & { json: ContactsDTO }
        output: ContactsDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/tasks/:taskId/customFields': {
      $get: {
        input: { param: { taskId: string } }
        output: CustomFieldsDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { taskId: string } } & { json: CustomFieldsDTO }
        output: CustomFieldsDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/tasks/:taskId/dates': {
      $get: {
        input: { param: { taskId: string } }
        output: ProjectDatesDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { taskId: string } } & { json: ProjectDatesDTO }
        output: ProjectDatesDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/tasks/:taskId/files': {
      $get: {
        input: { param: { taskId: string } }
        output: TaskFilesDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/tasks/:taskId/files/input': {
      $post: {
        input: { param: { taskId: string } } & { json: FileDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/tasks/:taskId/instructions': {
      $get: {
        input: { param: { taskId: string } }
        output: InstructionsDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { taskId: string } } & { json: InstructionsDTO }
        output: InstructionsDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/tasks/:taskId/name': {
      $put: {
        input: { param: { taskId: string } } & { json: StringDTO }
        output: StringDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/tasks/:taskId/progress': {
      $get: {
        input: { param: { taskId: string } }
        output: TaskProgressDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/tasks/:taskId/start': {
      $post: { input: { param: { taskId: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/users': {
      $get: { input: {}; output: EntityWithNameDTO[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/users/me': { $get: { input: {}; output: UserDTO; outputFormat: 'text'; status: 200 } }
  } & {
    '/users/me/timeZone': {
      $get: { input: {}; output: TimeZoneDTO; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/users/:userId': {
      $get: {
        input: { param: { userId: bigint } }
        output: UserDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { userId: bigint } } & { json: UserDTO }
        output: UserDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/users/:userId/customFields': {
      $get: {
        input: { param: { userId: bigint } }
        output: CustomFieldsDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { userId: bigint } } & { json: CustomFieldsDTO }
        output: CustomFieldsDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/users/:userId/customFields/:customFieldKey': {
      $get: {
        input: { param: { userId: bigint; customFieldKey: string } }
        output: CustomFieldDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { userId: bigint; customFieldKey: string } } & { json: CustomFieldDTO }
        output: CustomFieldDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/users/:userId/password': {
      $put: {
        input: { param: { userId: bigint } } & {
          json: { newPassword?: string | undefined; oldPassword?: string | undefined }
        } & { form: { newPassword?: string | undefined; oldPassword?: string | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/jobs/for-external-id': {
      $get: {
        input: {
          query: { externalProjectId?: string | undefined; externalId?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/jobs/:jobId': {
      $get: {
        input: { param: { jobId: string } }
        output: ProjectFileDto
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/jobs/:jobId/dates': {
      $put: {
        input: { param: { jobId: string } } & { json: JobDatesDto }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/jobs/:jobId/files/addExternalLink': {
      $post: {
        input: { param: { jobId: string } } & { json: ExternalFileDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/jobs/:jobId/files/delivered': {
      $get: {
        input: { param: { jobId: string } }
        output: ProjectFileDto[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/jobs/:jobId/files/delivered/add': {
      $put: {
        input: { param: { jobId: string } } & { json: FileCategorizationsDto }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/jobs/:jobId/files/delivered/addLink': {
      $post: {
        input: { param: { jobId: string } } & { json: FileLinkCategorizationsDto }
        output: FilesDto
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/jobs/:jobId/files/delivered/upload': {
      $post: {
        input: { param: { jobId: string } } & { form: FileToUploadDto }
        output: FileDto
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/jobs/:jobId/files/sharedReferenceFiles': {
      $get: {
        input: { param: { jobId: string } }
        output: ProjectFileDto[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/jobs/:jobId/files/sharedReferenceFiles/share': {
      $put: {
        input: { param: { jobId: string } } & { json: FilesDto }
        output: FilesShareStatusDto
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/jobs/:jobId/files/sharedWorkFiles': {
      $get: {
        input: { param: { jobId: string } }
        output: ProjectFileDto[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/jobs/:jobId/files/sharedWorkFiles/share': {
      $put: {
        input: { param: { jobId: string } } & { json: FilesDto }
        output: FilesShareStatusDto
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/jobs/:jobId/files/stopSharing': {
      $put: {
        input: { param: { jobId: string } } & { json: FilesDto }
        output: FilesShareStatusDto
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/jobs/:jobId/instructions': {
      $put: {
        input: { param: { jobId: string } } & { json: StringDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/jobs/:jobId/status': {
      $put: {
        input: { param: { jobId: string } } & { json: JobStatusDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/jobs/:jobId/vendor': {
      $put: {
        input: { param: { jobId: string } } & { json: VendorPriceProfileDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/projects': {
      $post: {
        input: { json: ProjectCreateDTO }
        output: ProjectDTOv2
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/v2/projects/files/archive': {
      $post: {
        input: { json: FilesDto }
        output: FilesArchiveDto
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/projects/files/:fileId': {
      $get: {
        input: { param: { fileId: string } }
        output: ProjectFileDto
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/projects/files/:fileId/download/:fileName': {
      $get: {
        input: { param: { fileId: string; fileName: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/projects/for-external-id/:externalProjectId': {
      $get: {
        input: { param: { externalProjectId: string } }
        output: ProjectDTOv2
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/projects/:projectId': {
      $get: {
        input: { param: { projectId: string } }
        output: ProjectDTOv2
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/projects/:projectId/addJob': {
      $post: {
        input: { param: { projectId: string } }
        output: CATToolProjectDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/projects/:projectId/catToolProject': {
      $get: {
        input: { param: { projectId: string } }
        output: CATToolProjectDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/projects/:projectId/clientContacts': {
      $get: {
        input: { param: { projectId: string } }
        output: SmartContactsDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { projectId: string } } & { json: SmartContactsDTO }
        output: SmartContactsDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/projects/:projectId/clientDeadline': {
      $put: {
        input: { param: { projectId: string } } & { json: TimeDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/projects/:projectId/clientNotes': {
      $put: {
        input: { param: { projectId: string } } & { json: StringDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/projects/:projectId/clientReferenceNumber': {
      $put: {
        input: { param: { projectId: string } } & { json: StringDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/projects/:projectId/customFields': {
      $get: {
        input: { param: { projectId: string } }
        output: CustomFieldsDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/projects/:projectId/customFields/:key': {
      $put: {
        input: { param: { projectId: string; key: string } } & { json: SmartCustomFieldDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/projects/:projectId/files': {
      $get: {
        input: { param: { projectId: string } }
        output: ProjectFileDto[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/projects/:projectId/files/add': {
      $put: {
        input: { param: { projectId: string } } & { json: FileCategorizationsDto }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/projects/:projectId/files/addExternalLink': {
      $post: {
        input: { param: { projectId: string } } & { json: ExternalFileDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/projects/:projectId/files/addLink': {
      $post: {
        input: { param: { projectId: string } } & { json: FileLinkCategorizationsDto }
        output: FilesDto
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/projects/:projectId/files/deliverable': {
      $get: {
        input: { param: { projectId: string } }
        output: ProjectFileDto[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/projects/:projectId/files/upload': {
      $post: {
        input: { param: { projectId: string } } & { form: FileToUploadDto }
        output: FileDto
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/projects/:projectId/finance': {
      $get: {
        input: { param: { projectId: string } }
        output: FinanceDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/projects/:projectId/finance/payables': {
      $post: {
        input: { param: { projectId: string } } & { json: PayableCreateDTO }
        output: PayableDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/projects/:projectId/finance/payables/:payableId': {
      $delete: {
        input: { param: { projectId: string; payableId: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
      $put: {
        input: { param: { projectId: string; payableId: bigint } } & { json: PayableDTO }
        output: PayableDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/projects/:projectId/finance/receivables': {
      $post: {
        input: { param: { projectId: string } } & { json: ReceivableCreateDTO }
        output: ReceivableDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/projects/:projectId/finance/receivables/:receivableId': {
      $delete: {
        input: { param: { projectId: string; receivableId: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
      $put: {
        input: { param: { projectId: string; receivableId: bigint } } & { json: ReceivableDTO }
        output: ReceivableDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/projects/:projectId/internalNotes': {
      $put: {
        input: { param: { projectId: string } } & { json: StringDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/projects/:projectId/jobs': {
      $get: {
        input: { param: { projectId: string } }
        output: JobDto[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/projects/:projectId/orderDate': {
      $put: {
        input: { param: { projectId: string } } & { json: TimeDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/projects/:projectId/process': {
      $get: {
        input: { param: { projectId: string } }
        output: CATToolProjectDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/projects/:projectId/sourceLanguage': {
      $put: {
        input: { param: { projectId: string } } & { json: SourceLanguageDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/projects/:projectId/specialization': {
      $put: {
        input: { param: { projectId: string } } & { json: SpecializationDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/projects/:projectId/status': {
      $put: {
        input: { param: { projectId: string } } & { json: ProjectStatusDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/projects/:projectId/targetLanguages': {
      $put: {
        input: { param: { projectId: string } } & { json: TargetLanguagesDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/projects/:projectId/vendorInstructions': {
      $put: {
        input: { param: { projectId: string } } & { json: StringDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/projects/:projectId/volume': {
      $put: {
        input: { param: { projectId: string } } & { json: BigDecimalDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/quotes': {
      $post: {
        input: { json: QuoteCreateDTO }
        output: QuoteDTOv2
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/v2/quotes/files/archive': {
      $post: {
        input: { json: FilesDto }
        output: FilesArchiveDto
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/quotes/files/:fileId': {
      $get: {
        input: { param: { fileId: string } }
        output: ProjectFileDto
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/quotes/files/:fileId/download/:fileName': {
      $get: {
        input: { param: { fileId: string; fileName: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/quotes/:quoteId': {
      $get: {
        input: { param: { quoteId: string } }
        output: QuoteDTOv2
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/quotes/:quoteId/businessDays': {
      $put: {
        input: { param: { quoteId: string } } & { json: number }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/quotes/:quoteId/clientContacts': {
      $get: {
        input: { param: { quoteId: string } }
        output: SmartContactsDTO
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { quoteId: string } } & { json: SmartContactsDTO }
        output: SmartContactsDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/quotes/:quoteId/clientNotes': {
      $put: {
        input: { param: { quoteId: string } } & { json: StringDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/quotes/:quoteId/clientReferenceNumber': {
      $put: {
        input: { param: { quoteId: string } } & { json: StringDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/quotes/:quoteId/customFields': {
      $get: {
        input: { param: { quoteId: string } }
        output: CustomFieldsDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/quotes/:quoteId/customFields/:key': {
      $put: {
        input: { param: { quoteId: string; key: string } } & { json: SmartCustomFieldDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/quotes/:quoteId/expectedDeliveryDate': {
      $put: {
        input: { param: { quoteId: string } } & { json: TimeDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/quotes/:quoteId/files': {
      $get: {
        input: { param: { quoteId: string } }
        output: ProjectFileDto[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/quotes/:quoteId/files/add': {
      $put: {
        input: { param: { quoteId: string } } & { json: TimeDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/quotes/:quoteId/files/upload': {
      $post: {
        input: { param: { quoteId: string } } & { form: FileToUploadDto }
        output: FileDto
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/quotes/:quoteId/finance': {
      $get: {
        input: { param: { quoteId: string } }
        output: FinanceDTO
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/quotes/:quoteId/finance/payables': {
      $post: {
        input: { param: { quoteId: string } } & { json: PayableCreateDTO }
        output: PayableDTO
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/quotes/:quoteId/finance/payables/:payableId': {
      $delete: {
        input: { param: { quoteId: string; payableId: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
      $put: {
        input: { param: { quoteId: string; payableId: bigint } } & { json: PayableDTO }
        output: PayableDTO
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/quotes/:quoteId/finance/receivables': {
      $post: {
        input: { param: { quoteId: string } } & { json: ReceivableCreateDTO }
        output: ReceivableDTO
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/quotes/:quoteId/finance/receivables/:receivableId': {
      $delete: {
        input: { param: { quoteId: string; receivableId: bigint } }
        output: {}
        outputFormat: string
        status: 204
      }
      $put: {
        input: { param: { quoteId: string; receivableId: bigint } } & { json: ReceivableDTO }
        output: ReceivableDTO
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/quotes/:quoteId/internalNotes': {
      $put: {
        input: { param: { quoteId: string } } & { json: StringDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/quotes/:quoteId/jobs': {
      $get: {
        input: { param: { quoteId: string } }
        output: JobDto[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/quotes/:quoteId/quoteExpiry': {
      $put: {
        input: { param: { quoteId: string } } & { json: TimeDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/quotes/:quoteId/sourceLanguage': {
      $put: {
        input: { param: { quoteId: string } } & { json: SourceLanguageDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/quotes/:quoteId/specialization': {
      $put: {
        input: { param: { quoteId: string } } & { json: SpecializationDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/quotes/:quoteId/status': {
      $put: {
        input: { param: { quoteId: string } } & { json: ProjectStatusDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/quotes/:quoteId/targetLanguages': {
      $put: {
        input: { param: { quoteId: string } } & { json: TargetLanguagesDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/quotes/:quoteId/vendorInstructions': {
      $put: {
        input: { param: { quoteId: string } } & { json: StringDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/quotes/:quoteId/volume': {
      $put: {
        input: { param: { quoteId: string } } & { json: BigDecimalDTO }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  },
  '/'
>
export default routes
