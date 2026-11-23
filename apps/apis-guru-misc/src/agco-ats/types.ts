type SystemObject = { [x: string]: unknown }
type APIModelsApiError = {
  DeveloperMessage?: string | undefined
  ErrorCode?: number | undefined
  MoreInfo?: string | undefined
  UserMessage?: string | undefined
}
type AGCOPowerServicesModelsECU = {
  ActivationCode?: string | undefined
  DamagedDescription?: string | undefined
  EngineSerialNumber: string
  ReplacesECUSerialNumber?: string | undefined
  SerialNumber: string
  State: 'Active' | 'Inactive' | 'Damaged'
}
type AGCOPowerServicesModelsProductionData = { DataType: string; DataValues: string }
type AGCOPowerServicesModelsUserStatus = {
  DealerCode: string
  State?: 'Active' | 'Inactive' | 'None' | undefined
  VoucherCode: string
}
type APIModelsTokenOptions = {
  BearerAction?: 'None' | 'Reset' | 'Disable' | undefined
  MACAction?: 'None' | 'Reset' | 'Disable' | undefined
}
type APIModelsCredentials = {
  BearerAction?: 'None' | 'Reset' | 'Disable' | undefined
  MACAction?: 'None' | 'Reset' | 'Disable' | undefined
  password: string
  username: string
}
type APIModelsAuthenticatedUser = {
  Email?: string | undefined
  MACId?: string | undefined
  MACToken?: string | undefined
  Name?: string | undefined
  Token?: string | undefined
  UserID?: number | undefined
  Username?: string | undefined
}
type APIModelsPasswordResetRequest = { ParameterName: string; Url: string; Username: string }
type APIModelsPasswordReset = { NewPassword: string; Token: string }
type AuthorizationCodesSharedModelsCategory = {
  Description?: string | undefined
  ID?: string | undefined
  Name?: string | undefined
}
type APIPagedResponseMetadata = { Limit: number; Offset: number; TotalCount: number }
type APIIPagedResponseAuthorizationCodesSharedModelsCategory = {
  Entities?: AuthorizationCodesSharedModelsCategory[] | undefined
  Metadata?: APIPagedResponseMetadata | undefined
}
type AuthorizationCodesSharedModelsAuthorizationCodeUser = {
  Email?: string | undefined
  Name?: string | undefined
  UserID?: number | undefined
  Username?: string | undefined
}
type AuthorizationCodesSharedModelsCategoryUserReport = {
  Categories?: AuthorizationCodesSharedModelsCategory[] | undefined
  User?: AuthorizationCodesSharedModelsAuthorizationCodeUser | undefined
}
type APIIPagedResponseAuthorizationCodesSharedModelsCategoryUserReport = {
  Entities?: AuthorizationCodesSharedModelsCategoryUserReport[] | undefined
  Metadata?: APIPagedResponseMetadata | undefined
}
type AuthorizationCodesSharedModelsDataField = {
  DigitsPrecision?: number | undefined
  MaxExponent?: number | undefined
  MaxValue?: number | undefined
  MinExponent?: number | undefined
  MinValue?: number | undefined
  Name: string
  ScaleFactor?: number | undefined
  Signed?: boolean | undefined
  Type: 'Boolean' | 'Decimal' | 'Float' | 'VariableLengthByteArray'
}
type AuthorizationCodesSharedModelsValidationField = {
  Name: string
  Type: 'Boolean' | 'Float' | 'Int' | 'StringCaseInsensitive' | 'StringCaseSensitive'
}
type AuthorizationCodesSharedModelsAuthorizationCodeDefinition = {
  AuthorizationID?: string | undefined
  CreatedByUserID?: number | undefined
  CreatedDate?: string | undefined
  DataFields?: AuthorizationCodesSharedModelsDataField[] | undefined
  DeletedByUserID?: number | undefined
  DeletedDate?: string | undefined
  Description?: string | undefined
  DurationAccuracy?: number | undefined
  DurationAmount?: number | undefined
  DurationUnits?: 'Weeks' | 'Days' | 'Hours' | 'Minutes' | undefined
  HashLength?: number | undefined
  ID?: string | undefined
  IsDeleted?: boolean | undefined
  Name: string
  RandomLength?: number | undefined
  ValidationFields?: AuthorizationCodesSharedModelsValidationField[] | undefined
}
type APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinition = {
  Entities?: AuthorizationCodesSharedModelsAuthorizationCodeDefinition[] | undefined
  Metadata?: APIPagedResponseMetadata | undefined
}
type AuthorizationCodesSharedModelsParameter = { Name: string; Value: string }
type AuthorizationCodesSharedModelsAuthorizationCode = {
  Code?: string | undefined
  CreatedByUserID?: number | undefined
  CreatedDate?: string | undefined
  DataParameters?: AuthorizationCodesSharedModelsParameter[] | undefined
  DefinitionID?: string | undefined
  DeletedByUserID?: number | undefined
  DeletedDate?: string | undefined
  EffectiveDate?: string | undefined
  ID?: number | undefined
  IsDeleted?: boolean | undefined
  ValidationParameters?: AuthorizationCodesSharedModelsParameter[] | undefined
}
type APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCode = {
  Entities?: AuthorizationCodesSharedModelsAuthorizationCode[] | undefined
  Metadata?: APIPagedResponseMetadata | undefined
}
type AuthorizationCodesSharedModelsAuthorizationContactInformation = {
  AuthorizationCodeID: number
  Code?: string | undefined
  Contact: string
  CreatedBy?: string | undefined
  CreatedDate?: string | undefined
  DealerCode: string
  Dealership: string
  DefinitionName?: string | undefined
  Email?: string | undefined
  ID?: number | undefined
  Notes?: string | undefined
  Phone: string
}
type AuthorizationCodesSharedModelsCodeValidationModel = {
  ExpirationDate?: string | undefined
  IsValid?: boolean | undefined
}
type APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformation = {
  Entities?: AuthorizationCodesSharedModelsAuthorizationContactInformation[] | undefined
  Metadata?: APIPagedResponseMetadata | undefined
}
type UpdateSystemModelsBundle = {
  Active?: boolean | undefined
  BundleID?: string | undefined
  BundleNumber: number
  Description: string
  UpdateGroupID: string
}
type APIPagedResponseUpdateSystemModelsBundle = {
  Entities: UpdateSystemModelsBundle[]
  Metadata: APIPagedResponseMetadata
}
type UpdateSystemModelsClient = {
  ClientID?: string | undefined
  LastCheckin?: string | undefined
  Tag?: string | undefined
}
type APIPagedResponseUpdateSystemModelsClient = {
  Entities: UpdateSystemModelsClient[]
  Metadata: APIPagedResponseMetadata
}
type UpdateSystemModelsAttributeValue = {
  Key: string
  TimeStamp?: string | undefined
  Value?: string | undefined
}
type UpdateSystemModelsCategory = {
  Values?: UpdateSystemModelsAttributeValue[] | undefined
  category: string
}
type UpdateSystemModelsPackageReport = {
  Categories?: UpdateSystemModelsCategory[] | undefined
  PackageDescription?: string | undefined
  PackageID?: string | undefined
}
type UpdateSystemModelsPackageType = {
  Attribute?: string | undefined
  Category?: string | undefined
  Description: string
  Icon?: string | undefined
  InventoryFrequency?: number | undefined
  InventoryPackage?: string | undefined
  LocalizedDescription?: string | undefined
  LocalizedName?: string | undefined
  MaxDeltaPackages?: number | undefined
  PackageTypeID?: string | undefined
}
type UpdateSystemModelsAvailableSubscription = {
  PackageType?: UpdateSystemModelsPackageType | undefined
  SubscriptionType?: 'Required' | 'IncludeByDefault' | 'ExcludeByDefault' | undefined
}
type UpdateSystemModelsUpdateGroup = {
  Description: string
  ID?: string | undefined
  InventoryFrequency?: number | undefined
  InventoryPackage?: string | undefined
  LocalizedDescription?: string | undefined
  LocalizedName?: string | undefined
  Priority: number
  ReportField?: string | undefined
  UpdateType: string
  ValidatingField?: string | undefined
  ValueToValidate?: string | undefined
  Version?: string | undefined
}
type UpdateSystemModelsAvailableUpdateGroupSubscription = {
  AvailableSubscriptions?: UpdateSystemModelsAvailableSubscription[] | undefined
  UpdateGroup?: UpdateSystemModelsUpdateGroup | undefined
}
type APIPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription = {
  Entities: UpdateSystemModelsAvailableUpdateGroupSubscription[]
  Metadata: APIPagedResponseMetadata
}
type UpdateSystemModelsUpdateGroupSubscription = {
  ClientID: string
  Include: boolean
  PackageTypeID: string
  UpdateGroupID: string
  UpdateGroupSubscriptionID?: number | undefined
}
type APIPagedResponseUpdateSystemModelsUpdateGroupSubscription = {
  Entities: UpdateSystemModelsUpdateGroupSubscription[]
  Metadata: APIPagedResponseMetadata
}
type ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute = {
  ContentDefinitionID?: number | undefined
  ID?: number | undefined
  Name: string
  Value?: string | undefined
}
type ContentSubmissionSharedBusinessEntitiesContentDefinition = {
  Attributes?: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute[] | undefined
  ContentDefinitionID?: number | undefined
  Description: string
  Name?: string | undefined
  PackageTypeID?: string | undefined
  TypeID?: number | undefined
}
type APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition = {
  Entities: ContentSubmissionSharedBusinessEntitiesContentDefinition[]
  Metadata: APIPagedResponseMetadata
}
type APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute = {
  Entities: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute[]
  Metadata: APIPagedResponseMetadata
}
type ContentSubmissionSharedBusinessEntitiesContentReleaseVersion = {
  ContentDefinitionID?: number | undefined
  ContentReleaseID?: number | undefined
  Deleted?: boolean | undefined
  PublisherUserID?: number | undefined
  ReleaseID?: number | undefined
  TestReportUrl?: string | undefined
  UpdatedDate?: string | undefined
  Version?: number | undefined
}
type APIPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion = {
  Entities: ContentSubmissionSharedBusinessEntitiesContentReleaseVersion[]
  Metadata: APIPagedResponseMetadata
}
type ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute = {
  ContentSubmissionID?: number | undefined
  ID?: number | undefined
  Name: string
  Value?: string | undefined
}
type ContentSubmissionSharedBusinessEntitiesContentSubmissionType = {
  AttributeTemplate?: string | undefined
  BuildDefinitionID?: number | undefined
  CategoryTemplate?: string | undefined
  Description: string
  Enabled?: boolean | undefined
  ID?: number | undefined
  InventoryPackageID?: string | undefined
  JobID?: number | undefined
  Name: string
  ReleaseNotesDescription?: string | undefined
}
type ContentSubmissionSharedBusinessEntitiesContentSubmission = {
  Attributes?: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute[] | undefined
  BuildID?: number | undefined
  ContentDefinitionID?: number | undefined
  ContentSubmissionID?: number | undefined
  Definition?: ContentSubmissionSharedBusinessEntitiesContentDefinition | undefined
  JobRunID?: number | undefined
  PackageID?: string | undefined
  ReleaseNotes?: string | undefined
  Repository?: string | undefined
  Revision?: number | undefined
  SubmissionDate?: string | undefined
  UserID?: number | undefined
  Version?: number | undefined
}
type APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmission = {
  Entities: ContentSubmissionSharedBusinessEntitiesContentSubmission[]
  Metadata: APIPagedResponseMetadata
}
type APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute = {
  Entities: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute[]
  Metadata: APIPagedResponseMetadata
}
type BuildSystemSharedInterfacesIParameterValue = {
  Direction?: 'Input' | 'Output' | undefined
  Name?: string | undefined
  Value?: string | undefined
}
type BuildSystemSharedInterfacesIActivityRunStatus = {
  CurrentStep?: number | undefined
  Status?: 'Ready' | 'InProgress' | 'Succeeded' | 'Cancelled' | 'Failed' | undefined
  StepProgress?: number | undefined
  StepStatus?: string | undefined
}
type BuildSystemSharedInterfacesIParameterMapping = {
  Name?: string | undefined
  Source?: string | undefined
  SourceType?: 'Constant' | 'Variable' | undefined
}
type BuildSystemSharedInterfacesIActivityStep = {
  ActivityID?: number | undefined
  ActivityStepID?: number | undefined
  ImplementationID?: string | undefined
  ParameterMappings?: BuildSystemSharedInterfacesIParameterMapping[] | undefined
  RunOrder?: number | undefined
  StepID?: number | undefined
  StepName?: string | undefined
  UseConfig?: string | undefined
}
type BuildSystemSharedInterfacesIActivityRun = {
  ActivityRunID?: number | undefined
  EndDate?: string | undefined
  JobActivityID?: number | undefined
  JobRunID?: number | undefined
  Parameters?: BuildSystemSharedInterfacesIParameterValue[] | undefined
  StartDate?: string | undefined
  Status?: BuildSystemSharedInterfacesIActivityRunStatus | undefined
  Steps?: BuildSystemSharedInterfacesIActivityStep[] | undefined
}
type BuildSystemSharedInterfacesIJobRun = {
  ActivityRuns?: BuildSystemSharedInterfacesIActivityRun[] | undefined
  EndDate?: string | undefined
  JobID?: number | undefined
  JobRunID?: number | undefined
  Parameters?: BuildSystemSharedInterfacesIParameterValue[] | undefined
  StartDate?: string | undefined
  Status?: 'Ready' | 'InProgress' | 'Succeeded' | 'Cancelled' | 'Failed' | undefined
}
type DealerDBModelsDealersPerCountry = { Count?: number | undefined; Country?: string | undefined }
type APIPagedResponseDealerDBModelsDealersPerCountry = {
  Entities: DealerDBModelsDealersPerCountry[]
  Metadata: APIPagedResponseMetadata
}
type DealerDBModelsDealer = {
  BillingAddress?: string | undefined
  BillingAddress2?: string | undefined
  BillingAddress3?: string | undefined
  BillingAddress4?: string | undefined
  BillingCity?: string | undefined
  BillingCountry?: string | undefined
  BillingCountryCode?: string | undefined
  BillingState?: string | undefined
  BillingZip?: string | undefined
  Brands?: string[] | undefined
  DealerCode?: string | undefined
  DealerName?: string | undefined
  DealerStatus?: string | undefined
  DealerStatusUpdateDate?: string | undefined
  Filler?: string | undefined
  IsValid?: boolean | undefined
  LanguagePreference?: string | undefined
  Region1?: string | undefined
  Region2?: string | undefined
  RegionMapping?: string | undefined
  RoleBrand?: string | undefined
  ShippingAddress2?: string | undefined
  ShippingAddress3?: string | undefined
  ShippingAddress4?: string | undefined
  ShippingCity?: string | undefined
  ShippingCountry?: string | undefined
  ShippingState?: string | undefined
  ShippingStreet?: string | undefined
  ShippingZip?: string | undefined
  Telephone?: string | undefined
  VATCode?: string | undefined
}
type APIPagedResponseDealerDBModelsDealer = {
  Entities: DealerDBModelsDealer[]
  Metadata: APIPagedResponseMetadata
}
type GlobalResourcesSharedModelsFileDownload = {
  CRC: string
  ContentType: string
  Description: string
  Id?: string | undefined
  IsPublic: boolean
  Name: string
  Path: string
  Size?: bigint | undefined
  State: 'Created' | 'Available' | 'Removed'
}
type APIIPagedResponseGlobalResourcesSharedModelsFileDownload = {
  Entities?: GlobalResourcesSharedModelsFileDownload[] | undefined
  Metadata?: APIPagedResponseMetadata | undefined
}
type GlobalResourcesSharedModelsGlobalImageCategory = { Id?: string | undefined; Name: string }
type APIIPagedResponseGlobalResourcesSharedModelsGlobalImageCategory = {
  Entities?: GlobalResourcesSharedModelsGlobalImageCategory[] | undefined
  Metadata?: APIPagedResponseMetadata | undefined
}
type GlobalResourcesSharedModelsGlobalImage = {
  CRC: string
  Categories?: GlobalResourcesSharedModelsGlobalImageCategory[] | undefined
  Date?: string | undefined
  Description: string
  Height: number
  Id?: string | undefined
  Name: string
  Publisher?: string | undefined
  Size?: bigint | undefined
  State: 'Created' | 'Available' | 'Removed'
  ThumbnailCRC: string
  ThumbnailSize?: bigint | undefined
  Width: number
}
type APIIPagedResponseGlobalResourcesSharedModelsGlobalImage = {
  Entities?: GlobalResourcesSharedModelsGlobalImage[] | undefined
  Metadata?: APIPagedResponseMetadata | undefined
}
type GlobalResourcesSharedModelsLanguage = {
  Description: string
  IsDeleted?: boolean | undefined
  LocaleId: number
}
type APIIPagedResponseGlobalResourcesSharedModelsLanguage = {
  Entities?: GlobalResourcesSharedModelsLanguage[] | undefined
  Metadata?: APIPagedResponseMetadata | undefined
}
type DealerDBModelsLicenseActivationCreate = {
  DealerCode: string
  LicenseActivationType?: 'EDT' | 'EDTLite' | undefined
  PostalCode: string
  SystemInfo: string
  VoucherCode: string
}
type DealerDBModelsLicenseActivation = {
  Key?: string | undefined
  LicenseData?: string | undefined
}
type DealerDBModelsEDTLiteRegistration = {
  DealerCode?: string | undefined
  ExpirationDate: string
  InstanceID: string
  VoucherCode: string
}
type DealerDBModelsLicenseActivationUpdate = {
  LicenseVersion: string
  SystemInfo?: string | undefined
}
type DealerDBModelsLicenseActivationConfirm = { LicenseVersion: string }
type DealerDBModelsLicense = {
  Active?: boolean | undefined
  CreatedDate?: string | undefined
  DeactivatedDate?: string | undefined
  LicenseActivationType?: 'EDT' | 'EDTLite' | undefined
  LicenseID?: string | undefined
  LicenseVersion?: string | undefined
  RefreshDate?: string | undefined
  SystemInfo?: string | undefined
  UpdatedLicenseVersion?: string | undefined
  VoucherCode?: string | undefined
}
type APIPagedResponseDealerDBModelsLicense = {
  Entities: DealerDBModelsLicense[]
  Metadata: APIPagedResponseMetadata
}
type APIModelsLog = {
  ID?: string | undefined
  Message?: string | undefined
  TimeStamp?: string | undefined
}
type APIPagedResponseAPIModelsLog = { Entities: APIModelsLog[]; Metadata: APIPagedResponseMetadata }
type APIModelsNotification = {
  CC_Addresses?: string[] | undefined
  IsBodyHtml: boolean
  MessageBody: string
  Subject: string
  To_Addresses: string[]
}
type APIPagedResponseUpdateSystemModelsPackageType = {
  Entities: UpdateSystemModelsPackageType[]
  Metadata: APIPagedResponseMetadata
}
type UpdateSystemModelsPackageTypeIDtoBundle = {
  BundleID: string
  PackageTypeID: string
  PackageVersion: number
  Priority: number
  SubscriptionType?: 'Required' | 'IncludeByDefault' | 'ExcludeByDefault' | undefined
}
type APIPagedResponseUpdateSystemModelsPackageTypeIDtoBundle = {
  Entities: UpdateSystemModelsPackageTypeIDtoBundle[]
  Metadata: APIPagedResponseMetadata
}
type UpdateSystemModelsPackage = {
  Autorun?: boolean | undefined
  CRC: string
  Description: string
  LocalizedName?: string | undefined
  Notes?: string | undefined
  PackageID?: string | undefined
  PackageTypeID: string
  PreviousVersion?: number | undefined
  ReleaseDate: string
  Released?: boolean | undefined
  RemoveOnSuccess?: boolean | undefined
  Size?: bigint | undefined
  Switches?: string | undefined
  Url: string
  Version: number
}
type APIPagedResponseUpdateSystemModelsPackage = {
  Entities: UpdateSystemModelsPackage[]
  Metadata: APIPagedResponseMetadata
}
type APIModelsPermission = {
  DataDescription?: string | undefined
  DataRequired: 'Yes' | 'No' | 'Optional'
  Description?: string | undefined
  Id?: number | undefined
  Name: string
}
type APIPagedResponseAPIModelsPermission = {
  Entities: APIModelsPermission[]
  Metadata: APIPagedResponseMetadata
}
type UpdateSystemModelsPriorityPackage = {
  Autorun?: boolean | undefined
  CRC?: string | undefined
  ClientID: string
  Description?: string | undefined
  Notes?: string | undefined
  PackageID: string
  PackageTypeID?: string | undefined
  PreviousVersion?: number | undefined
  PriorityPackageID?: string | undefined
  ReleaseDate?: string | undefined
  Released?: boolean | undefined
  RemoveOnSuccess?: boolean | undefined
  Size?: bigint | undefined
  Switches?: string | undefined
  TimeStamp?: string | undefined
  Url?: string | undefined
  Version?: number | undefined
}
type APIPagedResponseUpdateSystemModelsPriorityPackage = {
  Entities: UpdateSystemModelsPriorityPackage[]
  Metadata: APIPagedResponseMetadata
}
type ContentSubmissionSharedBusinessEntitiesRelease = {
  BuildDate?: string | undefined
  BundleIDs?: string[] | undefined
  ReleaseDate?: string | undefined
  ReleaseID?: number | undefined
  ReleaseNumber?: string | undefined
  Visible?: boolean | undefined
}
type APIPagedResponseContentSubmissionSharedBusinessEntitiesRelease = {
  Entities: ContentSubmissionSharedBusinessEntitiesRelease[]
  Metadata: APIPagedResponseMetadata
}
type UpdateSystemModelsPackageStatus = {
  ClientID?: string | undefined
  ClientKey?: string | undefined
  DownloadTime?: string | undefined
  Downloaded?: string | undefined
  InstallCompleted?: string | undefined
  InstallResult?: string | undefined
  InstallStarted?: string | undefined
  InstallTime?: string | undefined
  Percentage?: string | undefined
  Size?: string | undefined
  Timestamp?: string | undefined
}
type UpdateSystemModelsPackageStatusSummary = {
  AverageDownloadTime?: string | undefined
  AverageInstallTime?: string | undefined
  Downloaded?: bigint | undefined
  Error?: number | undefined
  Installed?: bigint | undefined
  Package?: string | undefined
  PackageID?: string | undefined
  PackageStatusItems?: UpdateSystemModelsPackageStatus[] | undefined
}
type APIPagedResponseUpdateSystemModelsPackageStatusSummary = {
  Entities: UpdateSystemModelsPackageStatusSummary[]
  Metadata: APIPagedResponseMetadata
}
type UpdateSystemModelsClientInfo = {
  ClientID?: string | undefined
  Package?: UpdateSystemModelsPackageReport[] | undefined
}
type UpdateSystemModelsUpdateGroupClientRelationship = {
  Active?: boolean | undefined
  ClientID: string
  LastCheckin?: string | undefined
  RelationshipID?: string | undefined
  UpdateGroupID: string
}
type APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationship = {
  Entities: UpdateSystemModelsUpdateGroupClientRelationship[]
  Metadata: APIPagedResponseMetadata
}
type UpdateSystemModelsClientStatus = {
  ClientID?: string | undefined
  LastCheckin?: string | undefined
  MinutesElapsed?: number | undefined
  ReportResult?: string | undefined
  ReportResultIsValid?: boolean | undefined
  ReportValue?: string | undefined
  Tag?: string | undefined
}
type UpdateSystemModelsPagedClientStatusMetadata = {
  Limit: number
  Offset: number
  ReportResultExpected: string
  ReportResultLabel: string
  ReportValueLabel: string
  TotalCount: number
}
type APIPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata = {
  Entities: UpdateSystemModelsClientStatus[]
  Metadata: UpdateSystemModelsPagedClientStatusMetadata
}
type APIPagedResponseUpdateSystemModelsUpdateGroup = {
  Entities: UpdateSystemModelsUpdateGroup[]
  Metadata: APIPagedResponseMetadata
}
type UpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecord = {
  BundleNumber?: number | undefined
  ClientCount?: number | undefined
  ReleaseName?: string | undefined
}
type UpdateSystemModelsUpdateMetricsDataCurrentStateByClientRecord = {
  ClientCount?: number | undefined
  State?: string | undefined
}
type UpdateSystemModelsUpdateMetricsDataPackageErrorsRecord = {
  ClientCount?: number | undefined
  ErrorCode?: string | undefined
  LongDescription?: string | undefined
  ShortDescription?: string | undefined
}
type UpdateSystemModelsUpdateMetricsData = {
  ActiveVersion?: string | undefined
  ActiveVersionByClient?:
    | UpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecord[]
    | undefined
  CurrentStateByClient?: UpdateSystemModelsUpdateMetricsDataCurrentStateByClientRecord[] | undefined
  CutOffDate?: string | undefined
  DataRefreshed?: string | undefined
  FilteredClientCount?: number | undefined
  PackageErrors?: UpdateSystemModelsUpdateMetricsDataPackageErrorsRecord[] | undefined
  TotalClientCount?: number | undefined
}
type APIModelsRole = { Description: string; Id?: number | undefined; Name: string }
type APIPagedResponseAPIModelsRole = {
  Entities: APIModelsRole[]
  Metadata: APIPagedResponseMetadata
}
type APIModelsRolePermissionChange = { Action: 'Grant' | 'Revoke'; Permission: string }
type APIModelsUser = {
  ChangePassword?: string | undefined
  Email?: string | undefined
  Name?: string | undefined
  Password?: string | undefined
  UserID?: number | undefined
  Username?: string | undefined
}
type APIPagedResponseAPIModelsUser = {
  Entities: APIModelsUser[]
  Metadata: APIPagedResponseMetadata
}
type APIModelsRoleUserChange = { Action: 'Grant' | 'Revoke'; Id: number }
type GlobalResourcesSharedModelsStringTranslation = {
  AuthorId?: number | undefined
  LanguageId?: number | undefined
  State?:
    | 'Original'
    | 'Requested'
    | 'Processing'
    | 'Processed'
    | 'Validated'
    | 'Invalidated'
    | 'RequestPending'
    | 'CreatePending'
    | undefined
  StringId?: string | undefined
  StringValue: string
  Timestamp?: string | undefined
}
type GlobalResourcesSharedModelsStringDefinition = {
  DescriptionForTranslator: string
  DoNotTranslate?: boolean | undefined
  Id?: string | undefined
  ParameterCount?: number | undefined
  Timestamp?: string | undefined
  Translations?: GlobalResourcesSharedModelsStringTranslation[] | undefined
}
type APIIPagedResponseGlobalResourcesSharedModelsStringDefinition = {
  Entities?: GlobalResourcesSharedModelsStringDefinition[] | undefined
  Metadata?: APIPagedResponseMetadata | undefined
}
type APIIPagedResponseGlobalResourcesSharedModelsStringTranslation = {
  Entities?: GlobalResourcesSharedModelsStringTranslation[] | undefined
  Metadata?: APIPagedResponseMetadata | undefined
}
type OASSupportSharedModelsTranslationKey = {
  ID?: number | undefined
  KeyName: string
  StringID: string
}
type APIIPagedResponseOASSupportSharedModelsTranslationKey = {
  Entities?: OASSupportSharedModelsTranslationKey[] | undefined
  Metadata?: APIPagedResponseMetadata | undefined
}
type GlobalResourcesSharedModelsTranslationRequest = {
  ApprovalUserId?: number | undefined
  CCEmailAddresses: string[]
  ChargeToAccount: string
  Deadline: string
  Id?: number | undefined
  LocaleIds: number[]
  Notes: string
  QuestionsUserId?: number | undefined
  State: 'NotSubmitted' | 'Submitted' | 'Cancelled' | 'Completed'
  SubmittedBy?: number | undefined
  TranslatorEmail?: string | undefined
  TranslatorName?: string | undefined
}
type APIIPagedResponseGlobalResourcesSharedModelsTranslationRequest = {
  Entities?: GlobalResourcesSharedModelsTranslationRequest[] | undefined
  Metadata?: APIPagedResponseMetadata | undefined
}
type GlobalResourcesSharedModelsTranslationSetAttribute = {
  ID?: number | undefined
  Name: string
  TranslationSetID?: number | undefined
  Value?: string | undefined
}
type GlobalResourcesSharedModelsTranslationSet = {
  Attributes?: GlobalResourcesSharedModelsTranslationSetAttribute[] | undefined
  FileIDs: string[]
  Id?: number | undefined
  InDate?: string | undefined
  Notes?: string | undefined
  OutDate?: string | undefined
  State:
    | 'OutForProcessing'
    | 'Processing'
    | 'PendingApproval'
    | 'OutForTranslation'
    | 'Cancelled'
    | 'Completed'
  TranslationRequestID?: number | undefined
}
type APIIPagedResponseGlobalResourcesSharedModelsTranslationSet = {
  Entities?: GlobalResourcesSharedModelsTranslationSet[] | undefined
  Metadata?: APIPagedResponseMetadata | undefined
}
type APIIPagedResponseGlobalResourcesSharedModelsTranslationSetAttribute = {
  Entities?: GlobalResourcesSharedModelsTranslationSetAttribute[] | undefined
  Metadata?: APIPagedResponseMetadata | undefined
}
type GlobalResourcesSharedModelsTranslationSetSourceString = {
  DescriptionForTranslator?: string | undefined
  LanguageID?: number | undefined
  StringID?: string | undefined
  StringValue?: string | undefined
}
type APIIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceString = {
  Entities?: GlobalResourcesSharedModelsTranslationSetSourceString[] | undefined
  Metadata?: APIPagedResponseMetadata | undefined
}
type GlobalResourcesSharedModelsTranslationSetStatistics = {
  LanguageIDs?: number[] | undefined
  StringCount?: number | undefined
}
type GlobalResourcesSharedModelsTranslationSetString = {
  LanguageID: number
  StringID: string
  StringValue?: string | undefined
  TranslationSetId: number
}
type APIIPagedResponseGlobalResourcesSharedModelsTranslationSetString = {
  Entities?: GlobalResourcesSharedModelsTranslationSetString[] | undefined
  Metadata?: APIPagedResponseMetadata | undefined
}
type UpdateSystemModelsCheckinResult = {
  Packages?: UpdateSystemModelsPackage[] | undefined
  RemovePackages?: string[] | undefined
}
type ContentSubmissionSharedBusinessEntitiesUserContentDefinition = {
  ContentDefinitionID?: number | undefined
  UserContentDefinitionID?: number | undefined
  UserID?: number | undefined
}
type APIPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition = {
  Entities: ContentSubmissionSharedBusinessEntitiesUserContentDefinition[]
  Metadata: APIPagedResponseMetadata
}
type APIModelsUserEffectivePermission = {
  PermissionId?: number | undefined
  PermissionName?: string | undefined
  UserID?: number | undefined
}
type APIPagedResponseAPIModelsUserEffectivePermission = {
  Entities: APIModelsUserEffectivePermission[]
  Metadata: APIPagedResponseMetadata
}
type APIModelsUserRoleChange = { Action: 'Grant' | 'Revoke'; Name: string }
type DealerDBModelsVoucherHistory = {
  ChangedDate?: string | undefined
  CreatedDate?: string | undefined
  DealerCode?: string | undefined
  Deleted?: boolean | undefined
  Email?: string | undefined
  ExpirationDate?: string | undefined
  ID?: number | undefined
  LicenseTo?: string | undefined
  ModifiedBy?: string | undefined
  OrderNumber?: string | undefined
  Punched?: boolean | undefined
  PunchedDate?: string | undefined
  Purpose?: string | undefined
  Type?: 'Commercial' | 'Internal' | 'Temporary' | 'RightToRepair' | undefined
  VoucherCode?: string | undefined
}
type APIPagedResponseDealerDBModelsVoucherHistory = {
  Entities: DealerDBModelsVoucherHistory[]
  Metadata: APIPagedResponseMetadata
}
type DealerDBModelsVoucher = {
  CreatedDate?: string | undefined
  DealerCode?: string | undefined
  Deleted?: boolean | undefined
  Email?: string | undefined
  ExpirationDate?: string | undefined
  LicenseTo?: string | undefined
  ModifiedBy?: string | undefined
  OrderNumber?: string | undefined
  Punched?: boolean | undefined
  PunchedDate?: string | undefined
  Purpose?: string | undefined
  Type?: 'Commercial' | 'Internal' | 'Temporary' | 'RightToRepair' | undefined
  VoucherCode?: string | undefined
}
type APIPagedResponseDealerDBModelsVoucher = {
  Entities: DealerDBModelsVoucher[]
  Metadata: APIPagedResponseMetadata
}
type BuildSystemSharedDTOParameter = {
  Direction?: 'Input' | 'Output' | undefined
  Name?: string | undefined
  Type?: 'String' | 'Boolean' | 'Integer' | 'Float' | 'StringDictionary' | undefined
}
type BuildSystemSharedDTOParameterMapping = {
  Name?: string | undefined
  Source?: string | undefined
  SourceType?: 'Constant' | 'Variable' | undefined
}
type BuildSystemSharedDTOActivityStep = {
  ActivityID?: number | undefined
  ActivityStepID?: number | undefined
  ImplementationID?: string | undefined
  ParameterMappings?: BuildSystemSharedDTOParameterMapping[] | undefined
  RunOrder?: number | undefined
  StepID?: number | undefined
  StepName?: string | undefined
  UseConfig?: string | undefined
}
type BuildSystemSharedDTOActivity = {
  ActivityID?: number | undefined
  Deleted?: boolean | undefined
  Name?: string | undefined
  Parameters?: BuildSystemSharedDTOParameter[] | undefined
  Steps?: BuildSystemSharedDTOActivityStep[] | undefined
}
type APIPagedResponseBuildSystemSharedDTOActivity = {
  Entities: BuildSystemSharedDTOActivity[]
  Metadata: APIPagedResponseMetadata
}
type BuildSystemSharedDTOParameterValue = {
  Direction?: 'Input' | 'Output' | undefined
  Name?: string | undefined
  Value?: string | undefined
}
type BuildSystemSharedDTOActivityRunStatus = {
  CurrentStep?: number | undefined
  Status?: 'Ready' | 'InProgress' | 'Succeeded' | 'Cancelled' | 'Failed' | undefined
  StepProgress?: number | undefined
  StepStatus?: string | undefined
}
type BuildSystemSharedDTOActivityRun = {
  ActivityRunID?: number | undefined
  EndDate?: string | undefined
  JobActivityID?: number | undefined
  JobRunID?: number | undefined
  Parameters?: BuildSystemSharedDTOParameterValue[] | undefined
  StartDate?: string | undefined
  Status: BuildSystemSharedDTOActivityRunStatus
  Steps?: BuildSystemSharedDTOActivityStep[] | undefined
}
type APIPagedResponseBuildSystemSharedDTOActivityRun = {
  Entities: BuildSystemSharedDTOActivityRun[]
  Metadata: APIPagedResponseMetadata
}
type BuildSystemSharedDTOAgentStatus = { LastStatusUpdate?: string | undefined; Online: boolean }
type BuildSystemSharedDTOStepConfiguration = {
  Configurations?: string[] | undefined
  StepImplementationID: string
}
type BuildSystemSharedDTOAgent = {
  AgentID?: number | undefined
  KeepAliveInterval: number
  MachineName: string
  Status: BuildSystemSharedDTOAgentStatus
  StepConfigurations?: BuildSystemSharedDTOStepConfiguration[] | undefined
  UserID: number
}
type APIPagedResponseBuildSystemSharedDTOAgent = {
  Entities: BuildSystemSharedDTOAgent[]
  Metadata: APIPagedResponseMetadata
}
type BuildSystemSharedDTOJobRun = {
  ActivityRuns?: BuildSystemSharedDTOActivityRun[] | undefined
  EndDate?: string | undefined
  JobID?: number | undefined
  JobRunID?: number | undefined
  Parameters?: BuildSystemSharedDTOParameterValue[] | undefined
  StartDate?: string | undefined
  Status?: 'Ready' | 'InProgress' | 'Succeeded' | 'Cancelled' | 'Failed' | undefined
}
type APIPagedResponseBuildSystemSharedDTOJobRun = {
  Entities: BuildSystemSharedDTOJobRun[]
  Metadata: APIPagedResponseMetadata
}
type BuildSystemSharedDTOJobActivity = {
  ActivityID?: number | undefined
  JobActivityID?: number | undefined
  JobID?: number | undefined
  ParameterMappings?: BuildSystemSharedDTOParameterMapping[] | undefined
  RunOrder?: number | undefined
}
type BuildSystemSharedDTOJob = {
  Activities?: BuildSystemSharedDTOJobActivity[] | undefined
  Deleted?: boolean | undefined
  JobID?: number | undefined
  Name?: string | undefined
  Parameters?: BuildSystemSharedDTOParameter[] | undefined
}
type APIPagedResponseBuildSystemSharedDTOJob = {
  Entities: BuildSystemSharedDTOJob[]
  Metadata: APIPagedResponseMetadata
}
type BuildSystemSharedDTOStep = {
  ConfigRequired: boolean
  Deleted?: boolean | undefined
  Description?: string | undefined
  ImplementationID: string
  Name: string
  Parameters?: BuildSystemSharedDTOParameter[] | undefined
  StepID?: number | undefined
}
type APIPagedResponseBuildSystemSharedDTOStep = {
  Entities: BuildSystemSharedDTOStep[]
  Metadata: APIPagedResponseMetadata
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v2/AftermarketServices/Certificates': {
      $get:
        | { input: {}; output: SystemObject; outputFormat: 'json'; status: 200 }
        | { input: {}; output: SystemObject; outputFormat: 'text'; status: 200 }
        | { input: {}; output: SystemObject; outputFormat: 'text'; status: 200 }
        | { input: {}; output: SystemObject; outputFormat: 'text'; status: 200 }
        | { input: {}; output: APIModelsApiError; outputFormat: 'json'; status: 200 }
        | { input: {}; output: APIModelsApiError; outputFormat: 'text'; status: 200 }
        | { input: {}; output: APIModelsApiError; outputFormat: 'text'; status: 200 }
        | { input: {}; output: APIModelsApiError; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v2/AftermarketServices/ECUs/:serialNumber': {
      $put:
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } } & {
              json: AGCOPowerServicesModelsECU
            } & { form: AGCOPowerServicesModelsECU }
            output: AGCOPowerServicesModelsECU
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } } & {
              json: AGCOPowerServicesModelsECU
            } & { form: AGCOPowerServicesModelsECU }
            output: AGCOPowerServicesModelsECU
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } } & {
              json: AGCOPowerServicesModelsECU
            } & { form: AGCOPowerServicesModelsECU }
            output: AGCOPowerServicesModelsECU
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } } & {
              json: AGCOPowerServicesModelsECU
            } & { form: AGCOPowerServicesModelsECU }
            output: AGCOPowerServicesModelsECU
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } } & {
              json: AGCOPowerServicesModelsECU
            } & { form: AGCOPowerServicesModelsECU }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } } & {
              json: AGCOPowerServicesModelsECU
            } & { form: AGCOPowerServicesModelsECU }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } } & {
              json: AGCOPowerServicesModelsECU
            } & { form: AGCOPowerServicesModelsECU }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } } & {
              json: AGCOPowerServicesModelsECU
            } & { form: AGCOPowerServicesModelsECU }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/AftermarketServices/Engines/:serialNumber/IQACodes': {
      $get:
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } } & {
              json: string[]
            } & { form: string[] }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } } & {
              json: string[]
            } & { form: string[] }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } } & {
              json: string[]
            } & { form: string[] }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } } & {
              json: string[]
            } & { form: string[] }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } } & {
              json: string[]
            } & { form: string[] }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } } & {
              json: string[]
            } & { form: string[] }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } } & {
              json: string[]
            } & { form: string[] }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } } & {
              json: string[]
            } & { form: string[] }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/AftermarketServices/Engines/:serialNumber/ProductionData': {
      $get:
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } }
            output: AGCOPowerServicesModelsProductionData[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } }
            output: AGCOPowerServicesModelsProductionData[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } }
            output: AGCOPowerServicesModelsProductionData[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } }
            output: AGCOPowerServicesModelsProductionData[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { serialNumber: string } } & { query: { EDTInstanceId: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/AftermarketServices/Hello': {
      $get:
        | { input: {}; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
        | { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
        | { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
        | { input: {}; output: APIModelsApiError; outputFormat: 'json'; status: 200 }
        | { input: {}; output: APIModelsApiError; outputFormat: 'text'; status: 200 }
        | { input: {}; output: APIModelsApiError; outputFormat: 'text'; status: 200 }
        | { input: {}; output: APIModelsApiError; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v2/AftermarketServices/UserStatuses': {
      $get:
        | {
            input: { query: { voucherCode: string; dealerCode: string } }
            output: AGCOPowerServicesModelsUserStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { voucherCode: string; dealerCode: string } }
            output: AGCOPowerServicesModelsUserStatus
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { voucherCode: string; dealerCode: string } }
            output: AGCOPowerServicesModelsUserStatus
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { voucherCode: string; dealerCode: string } }
            output: AGCOPowerServicesModelsUserStatus
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { voucherCode: string; dealerCode: string } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { voucherCode: string; dealerCode: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { voucherCode: string; dealerCode: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { voucherCode: string; dealerCode: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { json: AGCOPowerServicesModelsUserStatus } & {
              form: AGCOPowerServicesModelsUserStatus
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AGCOPowerServicesModelsUserStatus } & {
              form: AGCOPowerServicesModelsUserStatus
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AGCOPowerServicesModelsUserStatus } & {
              form: AGCOPowerServicesModelsUserStatus
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AGCOPowerServicesModelsUserStatus } & {
              form: AGCOPowerServicesModelsUserStatus
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AGCOPowerServicesModelsUserStatus } & {
              form: AGCOPowerServicesModelsUserStatus
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AGCOPowerServicesModelsUserStatus } & {
              form: AGCOPowerServicesModelsUserStatus
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AGCOPowerServicesModelsUserStatus } & {
              form: AGCOPowerServicesModelsUserStatus
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AGCOPowerServicesModelsUserStatus } & {
              form: AGCOPowerServicesModelsUserStatus
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/AuthenticatedUsers/:UserID/Tokens': {
      $put: {
        input: { param: { UserID: number } } & { json: APIModelsTokenOptions } & {
          form: APIModelsTokenOptions
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/Authentication': {
      $post:
        | {
            input: { json: APIModelsCredentials } & { form: APIModelsCredentials }
            output: APIModelsAuthenticatedUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: APIModelsCredentials } & { form: APIModelsCredentials }
            output: APIModelsAuthenticatedUser
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: APIModelsCredentials } & { form: APIModelsCredentials }
            output: APIModelsAuthenticatedUser
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: APIModelsCredentials } & { form: APIModelsCredentials }
            output: APIModelsAuthenticatedUser
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Authentication/IsAlive': {
      $get: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/v2/Authentication/RequestPasswordReset': {
      $post: {
        input: { json: APIModelsPasswordResetRequest } & { form: APIModelsPasswordResetRequest }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/Authentication/ResetPasword': {
      $post: {
        input: { json: APIModelsPasswordReset } & { form: APIModelsPasswordReset }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/AuthorizationCategories': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userID?: number | undefined
                definitionID?: string | undefined
              }
            }
            output: APIIPagedResponseAuthorizationCodesSharedModelsCategory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userID?: number | undefined
                definitionID?: string | undefined
              }
            }
            output: APIIPagedResponseAuthorizationCodesSharedModelsCategory
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userID?: number | undefined
                definitionID?: string | undefined
              }
            }
            output: APIIPagedResponseAuthorizationCodesSharedModelsCategory
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userID?: number | undefined
                definitionID?: string | undefined
              }
            }
            output: APIIPagedResponseAuthorizationCodesSharedModelsCategory
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userID?: number | undefined
                definitionID?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userID?: number | undefined
                definitionID?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userID?: number | undefined
                definitionID?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userID?: number | undefined
                definitionID?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: AuthorizationCodesSharedModelsCategory } & {
              form: AuthorizationCodesSharedModelsCategory
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AuthorizationCodesSharedModelsCategory } & {
              form: AuthorizationCodesSharedModelsCategory
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AuthorizationCodesSharedModelsCategory } & {
              form: AuthorizationCodesSharedModelsCategory
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AuthorizationCodesSharedModelsCategory } & {
              form: AuthorizationCodesSharedModelsCategory
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AuthorizationCodesSharedModelsCategory } & {
              form: AuthorizationCodesSharedModelsCategory
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AuthorizationCodesSharedModelsCategory } & {
              form: AuthorizationCodesSharedModelsCategory
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AuthorizationCodesSharedModelsCategory } & {
              form: AuthorizationCodesSharedModelsCategory
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AuthorizationCodesSharedModelsCategory } & {
              form: AuthorizationCodesSharedModelsCategory
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/AuthorizationCategories/Users': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userIDs?: string | undefined
                categoryIDs?: string | undefined
                includeCategories?: boolean | undefined
                includeUsers?: boolean | undefined
                userSearch?: string | undefined
              }
            }
            output: APIIPagedResponseAuthorizationCodesSharedModelsCategoryUserReport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userIDs?: string | undefined
                categoryIDs?: string | undefined
                includeCategories?: boolean | undefined
                includeUsers?: boolean | undefined
                userSearch?: string | undefined
              }
            }
            output: APIIPagedResponseAuthorizationCodesSharedModelsCategoryUserReport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userIDs?: string | undefined
                categoryIDs?: string | undefined
                includeCategories?: boolean | undefined
                includeUsers?: boolean | undefined
                userSearch?: string | undefined
              }
            }
            output: APIIPagedResponseAuthorizationCodesSharedModelsCategoryUserReport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userIDs?: string | undefined
                categoryIDs?: string | undefined
                includeCategories?: boolean | undefined
                includeUsers?: boolean | undefined
                userSearch?: string | undefined
              }
            }
            output: APIIPagedResponseAuthorizationCodesSharedModelsCategoryUserReport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userIDs?: string | undefined
                categoryIDs?: string | undefined
                includeCategories?: boolean | undefined
                includeUsers?: boolean | undefined
                userSearch?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userIDs?: string | undefined
                categoryIDs?: string | undefined
                includeCategories?: boolean | undefined
                includeUsers?: boolean | undefined
                userSearch?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userIDs?: string | undefined
                categoryIDs?: string | undefined
                includeCategories?: boolean | undefined
                includeUsers?: boolean | undefined
                userSearch?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userIDs?: string | undefined
                categoryIDs?: string | undefined
                includeCategories?: boolean | undefined
                includeUsers?: boolean | undefined
                userSearch?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/AuthorizationCategories/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { json: AuthorizationCodesSharedModelsCategory } & {
              form: AuthorizationCodesSharedModelsCategory
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: AuthorizationCodesSharedModelsCategory } & {
              form: AuthorizationCodesSharedModelsCategory
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/AuthorizationCategories/:id/Users/:userID': {
      $delete:
        | {
            input: { param: { id: string; userID: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string; userID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { id: string; userID: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string; userID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/AuthorizationCodeDefinitions': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
                createdByUserID?: number | undefined
                deletedByUserID?: number | undefined
                includeDeleted?: boolean | undefined
                categoryID?: string | undefined
              }
            }
            output: APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
                createdByUserID?: number | undefined
                deletedByUserID?: number | undefined
                includeDeleted?: boolean | undefined
                categoryID?: string | undefined
              }
            }
            output: APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinition
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
                createdByUserID?: number | undefined
                deletedByUserID?: number | undefined
                includeDeleted?: boolean | undefined
                categoryID?: string | undefined
              }
            }
            output: APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinition
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
                createdByUserID?: number | undefined
                deletedByUserID?: number | undefined
                includeDeleted?: boolean | undefined
                categoryID?: string | undefined
              }
            }
            output: APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinition
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
                createdByUserID?: number | undefined
                deletedByUserID?: number | undefined
                includeDeleted?: boolean | undefined
                categoryID?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
                createdByUserID?: number | undefined
                deletedByUserID?: number | undefined
                includeDeleted?: boolean | undefined
                categoryID?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
                createdByUserID?: number | undefined
                deletedByUserID?: number | undefined
                includeDeleted?: boolean | undefined
                categoryID?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
                createdByUserID?: number | undefined
                deletedByUserID?: number | undefined
                includeDeleted?: boolean | undefined
                categoryID?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: AuthorizationCodesSharedModelsAuthorizationCodeDefinition } & {
              form: AuthorizationCodesSharedModelsAuthorizationCodeDefinition
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AuthorizationCodesSharedModelsAuthorizationCodeDefinition } & {
              form: AuthorizationCodesSharedModelsAuthorizationCodeDefinition
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AuthorizationCodesSharedModelsAuthorizationCodeDefinition } & {
              form: AuthorizationCodesSharedModelsAuthorizationCodeDefinition
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AuthorizationCodesSharedModelsAuthorizationCodeDefinition } & {
              form: AuthorizationCodesSharedModelsAuthorizationCodeDefinition
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AuthorizationCodesSharedModelsAuthorizationCodeDefinition } & {
              form: AuthorizationCodesSharedModelsAuthorizationCodeDefinition
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AuthorizationCodesSharedModelsAuthorizationCodeDefinition } & {
              form: AuthorizationCodesSharedModelsAuthorizationCodeDefinition
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AuthorizationCodesSharedModelsAuthorizationCodeDefinition } & {
              form: AuthorizationCodesSharedModelsAuthorizationCodeDefinition
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AuthorizationCodesSharedModelsAuthorizationCodeDefinition } & {
              form: AuthorizationCodesSharedModelsAuthorizationCodeDefinition
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/AuthorizationCodeDefinitions/:ID/Categories/:categoryID': {
      $delete:
        | {
            input: { param: { ID: string; categoryID: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ID: string; categoryID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { ID: string; categoryID: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ID: string; categoryID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/AuthorizationCodeDefinitions/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { id: string } }
            output: AuthorizationCodesSharedModelsAuthorizationCodeDefinition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: AuthorizationCodesSharedModelsAuthorizationCodeDefinition
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: AuthorizationCodesSharedModelsAuthorizationCodeDefinition
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: AuthorizationCodesSharedModelsAuthorizationCodeDefinition
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              json: AuthorizationCodesSharedModelsAuthorizationCodeDefinition
            } & { form: AuthorizationCodesSharedModelsAuthorizationCodeDefinition }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              json: AuthorizationCodesSharedModelsAuthorizationCodeDefinition
            } & { form: AuthorizationCodesSharedModelsAuthorizationCodeDefinition }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/AuthorizationCodes': {
      $get:
        | {
            input: {
              query: {
                code?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                definitionID?: string | undefined
                createdByUserID?: number | undefined
                deletedByUserID?: number | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                code?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                definitionID?: string | undefined
                createdByUserID?: number | undefined
                deletedByUserID?: number | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCode
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                code?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                definitionID?: string | undefined
                createdByUserID?: number | undefined
                deletedByUserID?: number | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCode
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                code?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                definitionID?: string | undefined
                createdByUserID?: number | undefined
                deletedByUserID?: number | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCode
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                code?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                definitionID?: string | undefined
                createdByUserID?: number | undefined
                deletedByUserID?: number | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                code?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                definitionID?: string | undefined
                createdByUserID?: number | undefined
                deletedByUserID?: number | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                code?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                definitionID?: string | undefined
                createdByUserID?: number | undefined
                deletedByUserID?: number | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                code?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                definitionID?: string | undefined
                createdByUserID?: number | undefined
                deletedByUserID?: number | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: AuthorizationCodesSharedModelsAuthorizationCode } & {
              form: AuthorizationCodesSharedModelsAuthorizationCode
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AuthorizationCodesSharedModelsAuthorizationCode } & {
              form: AuthorizationCodesSharedModelsAuthorizationCode
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AuthorizationCodesSharedModelsAuthorizationCode } & {
              form: AuthorizationCodesSharedModelsAuthorizationCode
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AuthorizationCodesSharedModelsAuthorizationCode } & {
              form: AuthorizationCodesSharedModelsAuthorizationCode
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AuthorizationCodesSharedModelsAuthorizationCode } & {
              form: AuthorizationCodesSharedModelsAuthorizationCode
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AuthorizationCodesSharedModelsAuthorizationCode } & {
              form: AuthorizationCodesSharedModelsAuthorizationCode
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AuthorizationCodesSharedModelsAuthorizationCode } & {
              form: AuthorizationCodesSharedModelsAuthorizationCode
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AuthorizationCodesSharedModelsAuthorizationCode } & {
              form: AuthorizationCodesSharedModelsAuthorizationCode
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/AuthorizationCodes/:id': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { id: number } }
            output: AuthorizationCodesSharedModelsAuthorizationCode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: AuthorizationCodesSharedModelsAuthorizationCode
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: AuthorizationCodesSharedModelsAuthorizationCode
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: AuthorizationCodesSharedModelsAuthorizationCode
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: number } } & {
              json: AuthorizationCodesSharedModelsAuthorizationCode
            } & { form: AuthorizationCodesSharedModelsAuthorizationCode }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & {
              json: AuthorizationCodesSharedModelsAuthorizationCode
            } & { form: AuthorizationCodesSharedModelsAuthorizationCode }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/AuthorizationCodes/:id/ContactInformation': {
      $get:
        | {
            input: { param: { id: number } }
            output: AuthorizationCodesSharedModelsAuthorizationContactInformation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: AuthorizationCodesSharedModelsAuthorizationContactInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: AuthorizationCodesSharedModelsAuthorizationContactInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: AuthorizationCodesSharedModelsAuthorizationContactInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/AuthorizationCodes/:id/Validate': {
      $get:
        | {
            input: { param: { id: number } }
            output: AuthorizationCodesSharedModelsCodeValidationModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: AuthorizationCodesSharedModelsCodeValidationModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: AuthorizationCodesSharedModelsCodeValidationModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: AuthorizationCodesSharedModelsCodeValidationModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/AuthorizationContactInformation': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                authorizationCode?: string | undefined
                afterDate?: string | undefined
                beforeDate?: string | undefined
                dealerCode?: string | undefined
              }
            }
            output: APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                authorizationCode?: string | undefined
                afterDate?: string | undefined
                beforeDate?: string | undefined
                dealerCode?: string | undefined
              }
            }
            output: APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                authorizationCode?: string | undefined
                afterDate?: string | undefined
                beforeDate?: string | undefined
                dealerCode?: string | undefined
              }
            }
            output: APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                authorizationCode?: string | undefined
                afterDate?: string | undefined
                beforeDate?: string | undefined
                dealerCode?: string | undefined
              }
            }
            output: APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                authorizationCode?: string | undefined
                afterDate?: string | undefined
                beforeDate?: string | undefined
                dealerCode?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                authorizationCode?: string | undefined
                afterDate?: string | undefined
                beforeDate?: string | undefined
                dealerCode?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                authorizationCode?: string | undefined
                afterDate?: string | undefined
                beforeDate?: string | undefined
                dealerCode?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                authorizationCode?: string | undefined
                afterDate?: string | undefined
                beforeDate?: string | undefined
                dealerCode?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: AuthorizationCodesSharedModelsAuthorizationContactInformation } & {
              form: AuthorizationCodesSharedModelsAuthorizationContactInformation
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AuthorizationCodesSharedModelsAuthorizationContactInformation } & {
              form: AuthorizationCodesSharedModelsAuthorizationContactInformation
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AuthorizationCodesSharedModelsAuthorizationContactInformation } & {
              form: AuthorizationCodesSharedModelsAuthorizationContactInformation
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AuthorizationCodesSharedModelsAuthorizationContactInformation } & {
              form: AuthorizationCodesSharedModelsAuthorizationContactInformation
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AuthorizationCodesSharedModelsAuthorizationContactInformation } & {
              form: AuthorizationCodesSharedModelsAuthorizationContactInformation
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AuthorizationCodesSharedModelsAuthorizationContactInformation } & {
              form: AuthorizationCodesSharedModelsAuthorizationContactInformation
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AuthorizationCodesSharedModelsAuthorizationContactInformation } & {
              form: AuthorizationCodesSharedModelsAuthorizationContactInformation
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AuthorizationCodesSharedModelsAuthorizationContactInformation } & {
              form: AuthorizationCodesSharedModelsAuthorizationContactInformation
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Brands': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: APIModelsApiError; outputFormat: 'json'; status: 200 }
        | { input: {}; output: APIModelsApiError; outputFormat: 'text'; status: 200 }
        | { input: {}; output: APIModelsApiError; outputFormat: 'text'; status: 200 }
        | { input: {}; output: APIModelsApiError; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v2/Bundles': {
      $get:
        | {
            input: {
              query: {
                UpdateGroupID?: string | undefined
                Active?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
                BundleNumber?: number | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsBundle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                UpdateGroupID?: string | undefined
                Active?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
                BundleNumber?: number | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsBundle
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                UpdateGroupID?: string | undefined
                Active?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
                BundleNumber?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                UpdateGroupID?: string | undefined
                Active?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
                BundleNumber?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: UpdateSystemModelsBundle } & { form: UpdateSystemModelsBundle }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsBundle } & { form: UpdateSystemModelsBundle }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsBundle } & { form: UpdateSystemModelsBundle }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsBundle } & { form: UpdateSystemModelsBundle }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsBundle } & { form: UpdateSystemModelsBundle }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsBundle } & { form: UpdateSystemModelsBundle }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsBundle } & { form: UpdateSystemModelsBundle }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsBundle } & { form: UpdateSystemModelsBundle }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Bundles/:ID': {
      $delete:
        | { input: { param: { ID: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { ID: string } }
            output: UpdateSystemModelsBundle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: UpdateSystemModelsBundle
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: UpdateSystemModelsBundle
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: UpdateSystemModelsBundle
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { ID: string } } & { json: UpdateSystemModelsBundle } & {
              form: UpdateSystemModelsBundle
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ID: string } } & { json: UpdateSystemModelsBundle } & {
              form: UpdateSystemModelsBundle
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Clients': {
      $get:
        | {
            input: {
              query: {
                Tag?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsClient
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                Tag?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsClient
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Tag?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                Tag?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Clients/:ClientID/CachedFiles': {
      $get:
        | {
            input: { param: { ClientID: string } } & { query: { Expired: boolean } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ClientID: string } } & { query: { Expired: boolean } }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ClientID: string } } & { query: { Expired: boolean } }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ClientID: string } } & { query: { Expired: boolean } }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ClientID: string } } & { query: { Expired: boolean } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ClientID: string } } & { query: { Expired: boolean } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ClientID: string } } & { query: { Expired: boolean } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ClientID: string } } & { query: { Expired: boolean } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Clients/:ClientID/PackageReports': {
      $get:
        | {
            input: { param: { ClientID: string } }
            output: UpdateSystemModelsPackageReport[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ClientID: string } }
            output: UpdateSystemModelsPackageReport[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ClientID: string } }
            output: UpdateSystemModelsPackageReport[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ClientID: string } }
            output: UpdateSystemModelsPackageReport[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ClientID: string } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ClientID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ClientID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ClientID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { ClientID: string } } & { json: UpdateSystemModelsPackageReport } & {
              form: UpdateSystemModelsPackageReport
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ClientID: string } } & { json: UpdateSystemModelsPackageReport } & {
              form: UpdateSystemModelsPackageReport
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Clients/:ClientID/PackageReports/Batch': {
      $put:
        | {
            input: { param: { ClientID: string } } & { json: UpdateSystemModelsPackageReport[] } & {
              form: UpdateSystemModelsPackageReport[]
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ClientID: string } } & { json: UpdateSystemModelsPackageReport[] } & {
              form: UpdateSystemModelsPackageReport[]
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Clients/:ID': {
      $get:
        | {
            input: { param: { ID: string } }
            output: UpdateSystemModelsClient
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: UpdateSystemModelsClient
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: UpdateSystemModelsClient
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: UpdateSystemModelsClient
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { ID: string } } & { json: UpdateSystemModelsClient } & {
              form: UpdateSystemModelsClient
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ID: string } } & { json: UpdateSystemModelsClient } & {
              form: UpdateSystemModelsClient
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Clients/:ID/AvailableUpdateGroupSubscriptions': {
      $get:
        | {
            input: { param: { ID: string } } & {
              query: {
                UpdateGroupID?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } } & {
              query: {
                UpdateGroupID?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } } & {
              query: {
                UpdateGroupID?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } } & {
              query: {
                UpdateGroupID?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Clients/:ID/UpdateGroupSubscriptions': {
      $get:
        | {
            input: { param: { ID: string } } & {
              query: {
                UpdateGroupID?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsUpdateGroupSubscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } } & {
              query: {
                UpdateGroupID?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsUpdateGroupSubscription
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } } & {
              query: {
                UpdateGroupID?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } } & {
              query: {
                UpdateGroupID?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/ContentDefinitionAttributes/Batch': {
      $put:
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute[] } & {
              form: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute[]
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute[] } & {
              form: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute[]
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/ContentDefinitionAttributes/:contentDefinitionAttributeID': {
      $delete:
        | {
            input: { param: { contentDefinitionAttributeID: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { contentDefinitionAttributeID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { contentDefinitionAttributeID: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute
            } & { form: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { contentDefinitionAttributeID: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute
            } & { form: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/ContentDefinitions': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userID?: number | undefined
                includeAttributes?: string | undefined
                name?: string | undefined
                typeID?: number | undefined
                packageTypeID?: string | undefined
              }
            }
            output: APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userID?: number | undefined
                includeAttributes?: string | undefined
                name?: string | undefined
                typeID?: number | undefined
                packageTypeID?: string | undefined
              }
            }
            output: APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userID?: number | undefined
                includeAttributes?: string | undefined
                name?: string | undefined
                typeID?: number | undefined
                packageTypeID?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userID?: number | undefined
                includeAttributes?: string | undefined
                name?: string | undefined
                typeID?: number | undefined
                packageTypeID?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentDefinition } & {
              form: ContentSubmissionSharedBusinessEntitiesContentDefinition
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentDefinition } & {
              form: ContentSubmissionSharedBusinessEntitiesContentDefinition
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentDefinition } & {
              form: ContentSubmissionSharedBusinessEntitiesContentDefinition
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentDefinition } & {
              form: ContentSubmissionSharedBusinessEntitiesContentDefinition
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentDefinition } & {
              form: ContentSubmissionSharedBusinessEntitiesContentDefinition
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentDefinition } & {
              form: ContentSubmissionSharedBusinessEntitiesContentDefinition
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentDefinition } & {
              form: ContentSubmissionSharedBusinessEntitiesContentDefinition
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentDefinition } & {
              form: ContentSubmissionSharedBusinessEntitiesContentDefinition
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/ContentDefinitions/:contentDefinitionID': {
      $delete:
        | {
            input: { param: { contentDefinitionID: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { contentDefinitionID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { contentDefinitionID: number } } & {
              query: { includeAttributes?: string | undefined }
            }
            output: ContentSubmissionSharedBusinessEntitiesContentDefinition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contentDefinitionID: number } } & {
              query: { includeAttributes?: string | undefined }
            }
            output: ContentSubmissionSharedBusinessEntitiesContentDefinition
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { contentDefinitionID: number } } & {
              query: { includeAttributes?: string | undefined }
            }
            output: ContentSubmissionSharedBusinessEntitiesContentDefinition
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { contentDefinitionID: number } } & {
              query: { includeAttributes?: string | undefined }
            }
            output: ContentSubmissionSharedBusinessEntitiesContentDefinition
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { contentDefinitionID: number } } & {
              query: { includeAttributes?: string | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contentDefinitionID: number } } & {
              query: { includeAttributes?: string | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { contentDefinitionID: number } } & {
              query: { includeAttributes?: string | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { contentDefinitionID: number } } & {
              query: { includeAttributes?: string | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { contentDefinitionID: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentDefinition
            } & { form: ContentSubmissionSharedBusinessEntitiesContentDefinition }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { contentDefinitionID: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentDefinition
            } & { form: ContentSubmissionSharedBusinessEntitiesContentDefinition }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/ContentDefinitions/:contentDefinitionID/Attributes': {
      $get:
        | {
            input: { param: { contentDefinitionID: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
              }
            }
            output: APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contentDefinitionID: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
              }
            }
            output: APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { contentDefinitionID: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contentDefinitionID: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { contentDefinitionID: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute
            } & { form: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contentDefinitionID: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute
            } & { form: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { contentDefinitionID: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute
            } & { form: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { contentDefinitionID: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute
            } & { form: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { contentDefinitionID: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute
            } & { form: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contentDefinitionID: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute
            } & { form: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { contentDefinitionID: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute
            } & { form: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { contentDefinitionID: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute
            } & { form: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/ContentDefinitions/:contentDefinitionID/Attributes/Batch': {
      $post:
        | {
            input: { param: { contentDefinitionID: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute[]
            } & { form: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute[] }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { contentDefinitionID: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute[]
            } & { form: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute[] }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/ContentReleases': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                deleted?: boolean | undefined
                releaseID?: number | undefined
                userId?: number | undefined
                contentDefinitionID?: number | undefined
                version?: number | undefined
              }
            }
            output: APIPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                deleted?: boolean | undefined
                releaseID?: number | undefined
                userId?: number | undefined
                contentDefinitionID?: number | undefined
                version?: number | undefined
              }
            }
            output: APIPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                deleted?: boolean | undefined
                releaseID?: number | undefined
                userId?: number | undefined
                contentDefinitionID?: number | undefined
                version?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                deleted?: boolean | undefined
                releaseID?: number | undefined
                userId?: number | undefined
                contentDefinitionID?: number | undefined
                version?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentReleaseVersion } & {
              form: ContentSubmissionSharedBusinessEntitiesContentReleaseVersion
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentReleaseVersion } & {
              form: ContentSubmissionSharedBusinessEntitiesContentReleaseVersion
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentReleaseVersion } & {
              form: ContentSubmissionSharedBusinessEntitiesContentReleaseVersion
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentReleaseVersion } & {
              form: ContentSubmissionSharedBusinessEntitiesContentReleaseVersion
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentReleaseVersion } & {
              form: ContentSubmissionSharedBusinessEntitiesContentReleaseVersion
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentReleaseVersion } & {
              form: ContentSubmissionSharedBusinessEntitiesContentReleaseVersion
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentReleaseVersion } & {
              form: ContentSubmissionSharedBusinessEntitiesContentReleaseVersion
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentReleaseVersion } & {
              form: ContentSubmissionSharedBusinessEntitiesContentReleaseVersion
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/ContentReleases/:ContentReleaseId': {
      $delete:
        | {
            input: { param: { ContentReleaseId: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ContentReleaseId: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { ContentReleaseId: number } }
            output: ContentSubmissionSharedBusinessEntitiesContentReleaseVersion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ContentReleaseId: number } }
            output: ContentSubmissionSharedBusinessEntitiesContentReleaseVersion
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ContentReleaseId: number } }
            output: ContentSubmissionSharedBusinessEntitiesContentReleaseVersion
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ContentReleaseId: number } }
            output: ContentSubmissionSharedBusinessEntitiesContentReleaseVersion
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ContentReleaseId: number } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ContentReleaseId: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ContentReleaseId: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ContentReleaseId: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { ContentReleaseId: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentReleaseVersion
            } & { form: ContentSubmissionSharedBusinessEntitiesContentReleaseVersion }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ContentReleaseId: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentReleaseVersion
            } & { form: ContentSubmissionSharedBusinessEntitiesContentReleaseVersion }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/ContentSubmissionAttributes/Batch': {
      $put:
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute[] } & {
              form: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute[]
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute[] } & {
              form: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute[]
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/ContentSubmissionAttributes/:contentSubmissionAttributeID': {
      $delete:
        | {
            input: { param: { contentSubmissionAttributeID: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { contentSubmissionAttributeID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { contentSubmissionAttributeID: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute
            } & { form: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { contentSubmissionAttributeID: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute
            } & { form: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/ContentSubmissionTypes': {
      $get:
        | {
            input: { query: { enabled?: boolean | undefined } }
            output: ContentSubmissionSharedBusinessEntitiesContentSubmissionType[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { enabled?: boolean | undefined } }
            output: ContentSubmissionSharedBusinessEntitiesContentSubmissionType[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { enabled?: boolean | undefined } }
            output: ContentSubmissionSharedBusinessEntitiesContentSubmissionType[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { enabled?: boolean | undefined } }
            output: ContentSubmissionSharedBusinessEntitiesContentSubmissionType[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { enabled?: boolean | undefined } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { enabled?: boolean | undefined } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { enabled?: boolean | undefined } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { enabled?: boolean | undefined } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentSubmissionType } & {
              form: ContentSubmissionSharedBusinessEntitiesContentSubmissionType
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentSubmissionType } & {
              form: ContentSubmissionSharedBusinessEntitiesContentSubmissionType
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentSubmissionType } & {
              form: ContentSubmissionSharedBusinessEntitiesContentSubmissionType
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentSubmissionType } & {
              form: ContentSubmissionSharedBusinessEntitiesContentSubmissionType
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentSubmissionType } & {
              form: ContentSubmissionSharedBusinessEntitiesContentSubmissionType
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentSubmissionType } & {
              form: ContentSubmissionSharedBusinessEntitiesContentSubmissionType
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentSubmissionType } & {
              form: ContentSubmissionSharedBusinessEntitiesContentSubmissionType
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentSubmissionType } & {
              form: ContentSubmissionSharedBusinessEntitiesContentSubmissionType
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/ContentSubmissionTypes/:id': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { id: number } }
            output: ContentSubmissionSharedBusinessEntitiesContentSubmissionType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ContentSubmissionSharedBusinessEntitiesContentSubmissionType
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ContentSubmissionSharedBusinessEntitiesContentSubmissionType
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ContentSubmissionSharedBusinessEntitiesContentSubmissionType
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentSubmissionType
            } & { form: ContentSubmissionSharedBusinessEntitiesContentSubmissionType }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentSubmissionType
            } & { form: ContentSubmissionSharedBusinessEntitiesContentSubmissionType }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/ContentSubmissions': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userID?: number | undefined
                contentDefinitionID?: number | undefined
                includeAttributes?: string | undefined
                releaseID?: number | undefined
                typeID?: number | undefined
                version?: number | undefined
                includeDefinition?: boolean | undefined
              }
            }
            output: APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userID?: number | undefined
                contentDefinitionID?: number | undefined
                includeAttributes?: string | undefined
                releaseID?: number | undefined
                typeID?: number | undefined
                version?: number | undefined
                includeDefinition?: boolean | undefined
              }
            }
            output: APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmission
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userID?: number | undefined
                contentDefinitionID?: number | undefined
                includeAttributes?: string | undefined
                releaseID?: number | undefined
                typeID?: number | undefined
                version?: number | undefined
                includeDefinition?: boolean | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userID?: number | undefined
                contentDefinitionID?: number | undefined
                includeAttributes?: string | undefined
                releaseID?: number | undefined
                typeID?: number | undefined
                version?: number | undefined
                includeDefinition?: boolean | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentSubmission } & {
              form: ContentSubmissionSharedBusinessEntitiesContentSubmission
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentSubmission } & {
              form: ContentSubmissionSharedBusinessEntitiesContentSubmission
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentSubmission } & {
              form: ContentSubmissionSharedBusinessEntitiesContentSubmission
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentSubmission } & {
              form: ContentSubmissionSharedBusinessEntitiesContentSubmission
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentSubmission } & {
              form: ContentSubmissionSharedBusinessEntitiesContentSubmission
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentSubmission } & {
              form: ContentSubmissionSharedBusinessEntitiesContentSubmission
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentSubmission } & {
              form: ContentSubmissionSharedBusinessEntitiesContentSubmission
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesContentSubmission } & {
              form: ContentSubmissionSharedBusinessEntitiesContentSubmission
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/ContentSubmissions/:contentSubmissionID': {
      $delete:
        | {
            input: { param: { contentSubmissionID: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { contentSubmissionID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { contentSubmissionID: number } } & {
              query: { includeAttributes?: string | undefined }
            }
            output: ContentSubmissionSharedBusinessEntitiesContentSubmission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contentSubmissionID: number } } & {
              query: { includeAttributes?: string | undefined }
            }
            output: ContentSubmissionSharedBusinessEntitiesContentSubmission
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { contentSubmissionID: number } } & {
              query: { includeAttributes?: string | undefined }
            }
            output: ContentSubmissionSharedBusinessEntitiesContentSubmission
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { contentSubmissionID: number } } & {
              query: { includeAttributes?: string | undefined }
            }
            output: ContentSubmissionSharedBusinessEntitiesContentSubmission
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { contentSubmissionID: number } } & {
              query: { includeAttributes?: string | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contentSubmissionID: number } } & {
              query: { includeAttributes?: string | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { contentSubmissionID: number } } & {
              query: { includeAttributes?: string | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { contentSubmissionID: number } } & {
              query: { includeAttributes?: string | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { contentSubmissionID: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentSubmission
            } & { form: ContentSubmissionSharedBusinessEntitiesContentSubmission }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { contentSubmissionID: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentSubmission
            } & { form: ContentSubmissionSharedBusinessEntitiesContentSubmission }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/ContentSubmissions/:contentSubmissionID/Attributes': {
      $get:
        | {
            input: { param: { contentSubmissionID: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
              }
            }
            output: APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contentSubmissionID: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
              }
            }
            output: APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { contentSubmissionID: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contentSubmissionID: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { contentSubmissionID: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute
            } & { form: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contentSubmissionID: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute
            } & { form: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { contentSubmissionID: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute
            } & { form: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { contentSubmissionID: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute
            } & { form: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { contentSubmissionID: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute
            } & { form: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contentSubmissionID: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute
            } & { form: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { contentSubmissionID: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute
            } & { form: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { contentSubmissionID: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute
            } & { form: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/ContentSubmissions/:contentSubmissionID/Attributes/Batch': {
      $post:
        | {
            input: { param: { contentSubmissionID: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute[]
            } & { form: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute[] }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { contentSubmissionID: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute[]
            } & { form: ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute[] }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/ContentSubmissions/:contentSubmissionID/Status': {
      $get:
        | {
            input: { param: { contentSubmissionID: number } } & {
              query: { includeActivityRunDetails?: boolean | undefined }
            }
            output: BuildSystemSharedInterfacesIJobRun
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contentSubmissionID: number } } & {
              query: { includeActivityRunDetails?: boolean | undefined }
            }
            output: BuildSystemSharedInterfacesIJobRun
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { contentSubmissionID: number } } & {
              query: { includeActivityRunDetails?: boolean | undefined }
            }
            output: BuildSystemSharedInterfacesIJobRun
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { contentSubmissionID: number } } & {
              query: { includeActivityRunDetails?: boolean | undefined }
            }
            output: BuildSystemSharedInterfacesIJobRun
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { contentSubmissionID: number } } & {
              query: { includeActivityRunDetails?: boolean | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contentSubmissionID: number } } & {
              query: { includeActivityRunDetails?: boolean | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { contentSubmissionID: number } } & {
              query: { includeActivityRunDetails?: boolean | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { contentSubmissionID: number } } & {
              query: { includeActivityRunDetails?: boolean | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/DealerByCountry': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIPagedResponseDealerDBModelsDealersPerCountry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIPagedResponseDealerDBModelsDealersPerCountry
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Dealers': {
      $get:
        | {
            input: {
              query: {
                Brand?: string | undefined
                ShippingCountry?: string | undefined
                DealerName?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseDealerDBModelsDealer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                Brand?: string | undefined
                ShippingCountry?: string | undefined
                DealerName?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseDealerDBModelsDealer
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Brand?: string | undefined
                ShippingCountry?: string | undefined
                DealerName?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                Brand?: string | undefined
                ShippingCountry?: string | undefined
                DealerName?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Dealers/:DealerCode': {
      $get:
        | {
            input: { param: { DealerCode: string } }
            output: DealerDBModelsDealer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DealerCode: string } }
            output: DealerDBModelsDealer
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { DealerCode: string } }
            output: DealerDBModelsDealer
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { DealerCode: string } }
            output: DealerDBModelsDealer
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { DealerCode: string } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DealerCode: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { DealerCode: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { DealerCode: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Files': {
      $get:
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsFileDownload
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsFileDownload
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsFileDownload
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsFileDownload
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                includeDeleted?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: GlobalResourcesSharedModelsFileDownload } & {
              form: GlobalResourcesSharedModelsFileDownload
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GlobalResourcesSharedModelsFileDownload } & {
              form: GlobalResourcesSharedModelsFileDownload
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: GlobalResourcesSharedModelsFileDownload } & {
              form: GlobalResourcesSharedModelsFileDownload
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: GlobalResourcesSharedModelsFileDownload } & {
              form: GlobalResourcesSharedModelsFileDownload
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: GlobalResourcesSharedModelsFileDownload } & {
              form: GlobalResourcesSharedModelsFileDownload
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GlobalResourcesSharedModelsFileDownload } & {
              form: GlobalResourcesSharedModelsFileDownload
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: GlobalResourcesSharedModelsFileDownload } & {
              form: GlobalResourcesSharedModelsFileDownload
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: GlobalResourcesSharedModelsFileDownload } & {
              form: GlobalResourcesSharedModelsFileDownload
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Files/:ID': {
      $delete:
        | { input: { param: { ID: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { ID: string } }
            output: GlobalResourcesSharedModelsFileDownload
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: GlobalResourcesSharedModelsFileDownload
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: GlobalResourcesSharedModelsFileDownload
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: GlobalResourcesSharedModelsFileDownload
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { ID: string } } & { json: GlobalResourcesSharedModelsFileDownload } & {
              form: GlobalResourcesSharedModelsFileDownload
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ID: string } } & { json: GlobalResourcesSharedModelsFileDownload } & {
              form: GlobalResourcesSharedModelsFileDownload
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Files/:ID/FileContents': {
      $get:
        | {
            input: { param: { ID: string } }
            output: SystemObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { ID: string } }
            output: SystemObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/GlobalImageCategories': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIIPagedResponseGlobalResourcesSharedModelsGlobalImageCategory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIIPagedResponseGlobalResourcesSharedModelsGlobalImageCategory
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIIPagedResponseGlobalResourcesSharedModelsGlobalImageCategory
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIIPagedResponseGlobalResourcesSharedModelsGlobalImageCategory
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: GlobalResourcesSharedModelsGlobalImageCategory } & {
              form: GlobalResourcesSharedModelsGlobalImageCategory
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GlobalResourcesSharedModelsGlobalImageCategory } & {
              form: GlobalResourcesSharedModelsGlobalImageCategory
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: GlobalResourcesSharedModelsGlobalImageCategory } & {
              form: GlobalResourcesSharedModelsGlobalImageCategory
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: GlobalResourcesSharedModelsGlobalImageCategory } & {
              form: GlobalResourcesSharedModelsGlobalImageCategory
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: GlobalResourcesSharedModelsGlobalImageCategory } & {
              form: GlobalResourcesSharedModelsGlobalImageCategory
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GlobalResourcesSharedModelsGlobalImageCategory } & {
              form: GlobalResourcesSharedModelsGlobalImageCategory
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: GlobalResourcesSharedModelsGlobalImageCategory } & {
              form: GlobalResourcesSharedModelsGlobalImageCategory
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: GlobalResourcesSharedModelsGlobalImageCategory } & {
              form: GlobalResourcesSharedModelsGlobalImageCategory
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/GlobalImageCategories/:ID': {
      $get:
        | {
            input: { param: { ID: string } }
            output: GlobalResourcesSharedModelsGlobalImageCategory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: GlobalResourcesSharedModelsGlobalImageCategory
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: GlobalResourcesSharedModelsGlobalImageCategory
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: GlobalResourcesSharedModelsGlobalImageCategory
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/GlobalImages': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                categoryId?: string | undefined
                publisher?: string | undefined
                includeDeleted?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsGlobalImage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                categoryId?: string | undefined
                publisher?: string | undefined
                includeDeleted?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsGlobalImage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                categoryId?: string | undefined
                publisher?: string | undefined
                includeDeleted?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsGlobalImage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                categoryId?: string | undefined
                publisher?: string | undefined
                includeDeleted?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsGlobalImage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                categoryId?: string | undefined
                publisher?: string | undefined
                includeDeleted?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                categoryId?: string | undefined
                publisher?: string | undefined
                includeDeleted?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                categoryId?: string | undefined
                publisher?: string | undefined
                includeDeleted?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                categoryId?: string | undefined
                publisher?: string | undefined
                includeDeleted?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { overridePublisherOrDate?: boolean | undefined } } & {
              json: GlobalResourcesSharedModelsGlobalImage
            } & { form: GlobalResourcesSharedModelsGlobalImage }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { overridePublisherOrDate?: boolean | undefined } } & {
              json: GlobalResourcesSharedModelsGlobalImage
            } & { form: GlobalResourcesSharedModelsGlobalImage }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { overridePublisherOrDate?: boolean | undefined } } & {
              json: GlobalResourcesSharedModelsGlobalImage
            } & { form: GlobalResourcesSharedModelsGlobalImage }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { overridePublisherOrDate?: boolean | undefined } } & {
              json: GlobalResourcesSharedModelsGlobalImage
            } & { form: GlobalResourcesSharedModelsGlobalImage }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { overridePublisherOrDate?: boolean | undefined } } & {
              json: GlobalResourcesSharedModelsGlobalImage
            } & { form: GlobalResourcesSharedModelsGlobalImage }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { overridePublisherOrDate?: boolean | undefined } } & {
              json: GlobalResourcesSharedModelsGlobalImage
            } & { form: GlobalResourcesSharedModelsGlobalImage }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { overridePublisherOrDate?: boolean | undefined } } & {
              json: GlobalResourcesSharedModelsGlobalImage
            } & { form: GlobalResourcesSharedModelsGlobalImage }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { overridePublisherOrDate?: boolean | undefined } } & {
              json: GlobalResourcesSharedModelsGlobalImage
            } & { form: GlobalResourcesSharedModelsGlobalImage }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/GlobalImages/:ID': {
      $delete:
        | { input: { param: { ID: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { ID: string } }
            output: GlobalResourcesSharedModelsGlobalImage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: GlobalResourcesSharedModelsGlobalImage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: GlobalResourcesSharedModelsGlobalImage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: GlobalResourcesSharedModelsGlobalImage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { ID: string } } & {
              query: { overridePublisherOrDate?: boolean | undefined }
            } & { json: GlobalResourcesSharedModelsGlobalImage } & {
              form: GlobalResourcesSharedModelsGlobalImage
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ID: string } } & {
              query: { overridePublisherOrDate?: boolean | undefined }
            } & { json: GlobalResourcesSharedModelsGlobalImage } & {
              form: GlobalResourcesSharedModelsGlobalImage
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/GlobalImages/:ID/ImageContents': {
      $get:
        | {
            input: { param: { ID: string } } & { query: { isFullImage?: boolean | undefined } }
            output: SystemObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } } & { query: { isFullImage?: boolean | undefined } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } } & { query: { isFullImage?: boolean | undefined } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } } & { query: { isFullImage?: boolean | undefined } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } } & { query: { isFullImage?: boolean | undefined } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } } & { query: { isFullImage?: boolean | undefined } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } } & { query: { isFullImage?: boolean | undefined } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } } & { query: { isFullImage?: boolean | undefined } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { ID: string } } & { query: { isFullImage?: boolean | undefined } }
            output: SystemObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } } & { query: { isFullImage?: boolean | undefined } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } } & { query: { isFullImage?: boolean | undefined } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } } & { query: { isFullImage?: boolean | undefined } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } } & { query: { isFullImage?: boolean | undefined } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } } & { query: { isFullImage?: boolean | undefined } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } } & { query: { isFullImage?: boolean | undefined } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } } & { query: { isFullImage?: boolean | undefined } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Languages': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsLanguage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsLanguage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsLanguage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsLanguage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: GlobalResourcesSharedModelsLanguage } & {
              form: GlobalResourcesSharedModelsLanguage
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GlobalResourcesSharedModelsLanguage } & {
              form: GlobalResourcesSharedModelsLanguage
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: GlobalResourcesSharedModelsLanguage } & {
              form: GlobalResourcesSharedModelsLanguage
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: GlobalResourcesSharedModelsLanguage } & {
              form: GlobalResourcesSharedModelsLanguage
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: GlobalResourcesSharedModelsLanguage } & {
              form: GlobalResourcesSharedModelsLanguage
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GlobalResourcesSharedModelsLanguage } & {
              form: GlobalResourcesSharedModelsLanguage
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: GlobalResourcesSharedModelsLanguage } & {
              form: GlobalResourcesSharedModelsLanguage
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: GlobalResourcesSharedModelsLanguage } & {
              form: GlobalResourcesSharedModelsLanguage
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Languages/:LocaleID': {
      $delete:
        | { input: { param: { LocaleID: number } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { LocaleID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { LocaleID: number } }
            output: GlobalResourcesSharedModelsLanguage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { LocaleID: number } }
            output: GlobalResourcesSharedModelsLanguage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { LocaleID: number } }
            output: GlobalResourcesSharedModelsLanguage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { LocaleID: number } }
            output: GlobalResourcesSharedModelsLanguage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { LocaleID: number } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { LocaleID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { LocaleID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { LocaleID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { LocaleID: number } } & {
              json: GlobalResourcesSharedModelsLanguage
            } & { form: GlobalResourcesSharedModelsLanguage }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { LocaleID: number } } & {
              json: GlobalResourcesSharedModelsLanguage
            } & { form: GlobalResourcesSharedModelsLanguage }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/LicenseActivations': {
      $post:
        | {
            input: { json: DealerDBModelsLicenseActivationCreate } & {
              form: DealerDBModelsLicenseActivationCreate
            }
            output: DealerDBModelsLicenseActivation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DealerDBModelsLicenseActivationCreate } & {
              form: DealerDBModelsLicenseActivationCreate
            }
            output: DealerDBModelsLicenseActivation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: DealerDBModelsLicenseActivationCreate } & {
              form: DealerDBModelsLicenseActivationCreate
            }
            output: DealerDBModelsLicenseActivation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: DealerDBModelsLicenseActivationCreate } & {
              form: DealerDBModelsLicenseActivationCreate
            }
            output: DealerDBModelsLicenseActivation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: DealerDBModelsLicenseActivationCreate } & {
              form: DealerDBModelsLicenseActivationCreate
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DealerDBModelsLicenseActivationCreate } & {
              form: DealerDBModelsLicenseActivationCreate
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: DealerDBModelsLicenseActivationCreate } & {
              form: DealerDBModelsLicenseActivationCreate
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: DealerDBModelsLicenseActivationCreate } & {
              form: DealerDBModelsLicenseActivationCreate
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/LicenseActivations/RegisterEDTLite': {
      $post:
        | {
            input: { json: DealerDBModelsEDTLiteRegistration } & {
              form: DealerDBModelsEDTLiteRegistration
            }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DealerDBModelsEDTLiteRegistration } & {
              form: DealerDBModelsEDTLiteRegistration
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: DealerDBModelsEDTLiteRegistration } & {
              form: DealerDBModelsEDTLiteRegistration
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: DealerDBModelsEDTLiteRegistration } & {
              form: DealerDBModelsEDTLiteRegistration
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: DealerDBModelsEDTLiteRegistration } & {
              form: DealerDBModelsEDTLiteRegistration
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DealerDBModelsEDTLiteRegistration } & {
              form: DealerDBModelsEDTLiteRegistration
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: DealerDBModelsEDTLiteRegistration } & {
              form: DealerDBModelsEDTLiteRegistration
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: DealerDBModelsEDTLiteRegistration } & {
              form: DealerDBModelsEDTLiteRegistration
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/LicenseActivations/:ID': {
      $put:
        | {
            input: { param: { ID: string } } & { json: DealerDBModelsLicenseActivationUpdate } & {
              form: DealerDBModelsLicenseActivationUpdate
            }
            output: DealerDBModelsLicenseActivation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } } & { json: DealerDBModelsLicenseActivationUpdate } & {
              form: DealerDBModelsLicenseActivationUpdate
            }
            output: DealerDBModelsLicenseActivation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } } & { json: DealerDBModelsLicenseActivationUpdate } & {
              form: DealerDBModelsLicenseActivationUpdate
            }
            output: DealerDBModelsLicenseActivation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } } & { json: DealerDBModelsLicenseActivationUpdate } & {
              form: DealerDBModelsLicenseActivationUpdate
            }
            output: DealerDBModelsLicenseActivation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } } & { json: DealerDBModelsLicenseActivationUpdate } & {
              form: DealerDBModelsLicenseActivationUpdate
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } } & { json: DealerDBModelsLicenseActivationUpdate } & {
              form: DealerDBModelsLicenseActivationUpdate
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } } & { json: DealerDBModelsLicenseActivationUpdate } & {
              form: DealerDBModelsLicenseActivationUpdate
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } } & { json: DealerDBModelsLicenseActivationUpdate } & {
              form: DealerDBModelsLicenseActivationUpdate
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/LicenseActivations/:ID/Confirm': {
      $put:
        | {
            input: { param: { ID: string } } & { json: DealerDBModelsLicenseActivationConfirm } & {
              form: DealerDBModelsLicenseActivationConfirm
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ID: string } } & { json: DealerDBModelsLicenseActivationConfirm } & {
              form: DealerDBModelsLicenseActivationConfirm
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Licenses': {
      $get:
        | {
            input: {
              query: {
                VoucherCode?: string | undefined
                DealerCode?: string | undefined
                Status?: 'Active' | 'Inactive' | 'All' | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseDealerDBModelsLicense
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                VoucherCode?: string | undefined
                DealerCode?: string | undefined
                Status?: 'Active' | 'Inactive' | 'All' | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseDealerDBModelsLicense
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                VoucherCode?: string | undefined
                DealerCode?: string | undefined
                Status?: 'Active' | 'Inactive' | 'All' | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                VoucherCode?: string | undefined
                DealerCode?: string | undefined
                Status?: 'Active' | 'Inactive' | 'All' | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Licenses/:ID': {
      $get:
        | {
            input: { param: { ID: string } }
            output: DealerDBModelsLicense
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: DealerDBModelsLicense
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: DealerDBModelsLicense
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: DealerDBModelsLicense
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Logs': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIPagedResponseAPIModelsLog
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIPagedResponseAPIModelsLog
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { Message: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Message: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Message: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Message: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Message: string } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Message: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Message: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Message: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Logs/:ID': {
      $get:
        | {
            input: { param: { ID: string } }
            output: APIModelsLog
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsLog
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsLog
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsLog
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Notifications': {
      $post:
        | {
            input: { json: APIModelsNotification } & { form: APIModelsNotification }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: APIModelsNotification } & { form: APIModelsNotification }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/PackageTypes': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userID?: number | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsPackageType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userID?: number | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsPackageType
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userID?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userID?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: UpdateSystemModelsPackageType } & { form: UpdateSystemModelsPackageType }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsPackageType } & { form: UpdateSystemModelsPackageType }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsPackageType } & { form: UpdateSystemModelsPackageType }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsPackageType } & { form: UpdateSystemModelsPackageType }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsPackageType } & { form: UpdateSystemModelsPackageType }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsPackageType } & { form: UpdateSystemModelsPackageType }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsPackageType } & { form: UpdateSystemModelsPackageType }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsPackageType } & { form: UpdateSystemModelsPackageType }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/PackageTypes/:ID': {
      $delete:
        | { input: { param: { ID: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { ID: string } }
            output: UpdateSystemModelsPackageType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: UpdateSystemModelsPackageType
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: UpdateSystemModelsPackageType
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: UpdateSystemModelsPackageType
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { ID: string } } & { json: UpdateSystemModelsPackageType } & {
              form: UpdateSystemModelsPackageType
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ID: string } } & { json: UpdateSystemModelsPackageType } & {
              form: UpdateSystemModelsPackageType
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/PackageTypes/:id/Users/:userID': {
      $delete:
        | {
            input: { param: { id: string; userID: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string; userID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { id: string; userID: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string; userID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/PackageTypetoBundles': {
      $delete:
        | {
            input: { query: { BundleID: string; PackageTypeID: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { BundleID: string; PackageTypeID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: {
              query: {
                BundleID?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsPackageTypeIDtoBundle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                BundleID?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsPackageTypeIDtoBundle
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                BundleID?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                BundleID?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: UpdateSystemModelsPackageTypeIDtoBundle } & {
              form: UpdateSystemModelsPackageTypeIDtoBundle
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: UpdateSystemModelsPackageTypeIDtoBundle } & {
              form: UpdateSystemModelsPackageTypeIDtoBundle
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { json: UpdateSystemModelsPackageTypeIDtoBundle } & {
              form: UpdateSystemModelsPackageTypeIDtoBundle
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: UpdateSystemModelsPackageTypeIDtoBundle } & {
              form: UpdateSystemModelsPackageTypeIDtoBundle
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Packages': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                PackageTypeID?: string | undefined
                Version?: number | undefined
                Released?: boolean | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsPackage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                PackageTypeID?: string | undefined
                Version?: number | undefined
                Released?: boolean | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsPackage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                PackageTypeID?: string | undefined
                Version?: number | undefined
                Released?: boolean | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                PackageTypeID?: string | undefined
                Version?: number | undefined
                Released?: boolean | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: UpdateSystemModelsPackage } & { form: UpdateSystemModelsPackage }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsPackage } & { form: UpdateSystemModelsPackage }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsPackage } & { form: UpdateSystemModelsPackage }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsPackage } & { form: UpdateSystemModelsPackage }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsPackage } & { form: UpdateSystemModelsPackage }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsPackage } & { form: UpdateSystemModelsPackage }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsPackage } & { form: UpdateSystemModelsPackage }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsPackage } & { form: UpdateSystemModelsPackage }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Packages/:ID': {
      $delete:
        | { input: { param: { ID: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { ID: string } }
            output: UpdateSystemModelsPackage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: UpdateSystemModelsPackage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: UpdateSystemModelsPackage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: UpdateSystemModelsPackage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { ID: string } } & { json: UpdateSystemModelsPackage } & {
              form: UpdateSystemModelsPackage
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ID: string } } & { json: UpdateSystemModelsPackage } & {
              form: UpdateSystemModelsPackage
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Permissions': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
              }
            }
            output: APIPagedResponseAPIModelsPermission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
              }
            }
            output: APIPagedResponseAPIModelsPermission
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: APIModelsPermission } & { form: APIModelsPermission }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: APIModelsPermission } & { form: APIModelsPermission }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: APIModelsPermission } & { form: APIModelsPermission }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: APIModelsPermission } & { form: APIModelsPermission }
            output: number
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Permissions/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get:
        | {
            input: { param: { id: number } }
            output: APIModelsPermission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: APIModelsPermission
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: APIModelsPermission
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: APIModelsPermission
            outputFormat: 'text'
            status: 200
          }
      $put: {
        input: { param: { id: number } } & { json: APIModelsPermission } & {
          form: APIModelsPermission
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/PriorityPackages': {
      $get:
        | {
            input: {
              query: {
                ClientID?: string | undefined
                Status?: 'Active' | 'Completed' | 'All' | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsPriorityPackage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ClientID?: string | undefined
                Status?: 'Active' | 'Completed' | 'All' | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsPriorityPackage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ClientID?: string | undefined
                Status?: 'Active' | 'Completed' | 'All' | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ClientID?: string | undefined
                Status?: 'Active' | 'Completed' | 'All' | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: UpdateSystemModelsPriorityPackage } & {
              form: UpdateSystemModelsPriorityPackage
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsPriorityPackage } & {
              form: UpdateSystemModelsPriorityPackage
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsPriorityPackage } & {
              form: UpdateSystemModelsPriorityPackage
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsPriorityPackage } & {
              form: UpdateSystemModelsPriorityPackage
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsPriorityPackage } & {
              form: UpdateSystemModelsPriorityPackage
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsPriorityPackage } & {
              form: UpdateSystemModelsPriorityPackage
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsPriorityPackage } & {
              form: UpdateSystemModelsPriorityPackage
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsPriorityPackage } & {
              form: UpdateSystemModelsPriorityPackage
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/PriorityPackages/:ID': {
      $delete:
        | { input: { param: { ID: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { ID: string } }
            output: UpdateSystemModelsPriorityPackage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: UpdateSystemModelsPriorityPackage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: UpdateSystemModelsPriorityPackage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: UpdateSystemModelsPriorityPackage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Releases': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                visible?: boolean | undefined
                bundleID?: string | undefined
              }
            }
            output: APIPagedResponseContentSubmissionSharedBusinessEntitiesRelease
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                visible?: boolean | undefined
                bundleID?: string | undefined
              }
            }
            output: APIPagedResponseContentSubmissionSharedBusinessEntitiesRelease
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                visible?: boolean | undefined
                bundleID?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                visible?: boolean | undefined
                bundleID?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesRelease } & {
              form: ContentSubmissionSharedBusinessEntitiesRelease
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesRelease } & {
              form: ContentSubmissionSharedBusinessEntitiesRelease
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesRelease } & {
              form: ContentSubmissionSharedBusinessEntitiesRelease
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesRelease } & {
              form: ContentSubmissionSharedBusinessEntitiesRelease
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesRelease } & {
              form: ContentSubmissionSharedBusinessEntitiesRelease
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesRelease } & {
              form: ContentSubmissionSharedBusinessEntitiesRelease
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesRelease } & {
              form: ContentSubmissionSharedBusinessEntitiesRelease
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesRelease } & {
              form: ContentSubmissionSharedBusinessEntitiesRelease
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Releases/:ReleaseId': {
      $get:
        | {
            input: { param: { ReleaseId: number } }
            output: ContentSubmissionSharedBusinessEntitiesRelease
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ReleaseId: number } }
            output: ContentSubmissionSharedBusinessEntitiesRelease
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ReleaseId: number } }
            output: ContentSubmissionSharedBusinessEntitiesRelease
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ReleaseId: number } }
            output: ContentSubmissionSharedBusinessEntitiesRelease
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ReleaseId: number } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ReleaseId: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ReleaseId: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ReleaseId: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Releases/:ReleaseId/Bundle/:BundleId': {
      $delete:
        | {
            input: { param: { ReleaseId: number; BundleId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ReleaseId: number; BundleId: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { ReleaseId: number; BundleId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ReleaseId: number; BundleId: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Releases/:releaseId': {
      $put:
        | {
            input: { param: { releaseId: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesRelease
            } & { form: ContentSubmissionSharedBusinessEntitiesRelease }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { releaseId: number } } & {
              json: ContentSubmissionSharedBusinessEntitiesRelease
            } & { form: ContentSubmissionSharedBusinessEntitiesRelease }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Reporting/BundleStatusSummary': {
      $get:
        | {
            input: {
              query: { BundleID: string; limit?: number | undefined; offset?: number | undefined }
            }
            output: APIPagedResponseUpdateSystemModelsPackageStatusSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { BundleID: string; limit?: number | undefined; offset?: number | undefined }
            }
            output: APIPagedResponseUpdateSystemModelsPackageStatusSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { BundleID: string; limit?: number | undefined; offset?: number | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { BundleID: string; limit?: number | undefined; offset?: number | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Reporting/BundlesInUpdateGroup': {
      $get:
        | {
            input: {
              query: {
                ID: string
                IncludeInactive: boolean
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsBundle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ID: string
                IncludeInactive: boolean
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsBundle
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ID: string
                IncludeInactive: boolean
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ID: string
                IncludeInactive: boolean
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Reporting/ClientInfo': {
      $get:
        | {
            input: { query: { ClientID: string } }
            output: UpdateSystemModelsClientInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ClientID: string } }
            output: UpdateSystemModelsClientInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { ClientID: string } }
            output: UpdateSystemModelsClientInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { ClientID: string } }
            output: UpdateSystemModelsClientInfo
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { ClientID: string } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ClientID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { ClientID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { ClientID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Reporting/CurrentPackagesInUpdateGroup': {
      $get:
        | {
            input: {
              query: {
                ID: string
                SubscriptionTypeFilter?: 'RequiredOnly' | 'Default' | 'All' | undefined
              }
            }
            output: UpdateSystemModelsPackage[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ID: string
                SubscriptionTypeFilter?: 'RequiredOnly' | 'Default' | 'All' | undefined
              }
            }
            output: UpdateSystemModelsPackage[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ID: string
                SubscriptionTypeFilter?: 'RequiredOnly' | 'Default' | 'All' | undefined
              }
            }
            output: UpdateSystemModelsPackage[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ID: string
                SubscriptionTypeFilter?: 'RequiredOnly' | 'Default' | 'All' | undefined
              }
            }
            output: UpdateSystemModelsPackage[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ID: string
                SubscriptionTypeFilter?: 'RequiredOnly' | 'Default' | 'All' | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ID: string
                SubscriptionTypeFilter?: 'RequiredOnly' | 'Default' | 'All' | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ID: string
                SubscriptionTypeFilter?: 'RequiredOnly' | 'Default' | 'All' | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ID: string
                SubscriptionTypeFilter?: 'RequiredOnly' | 'Default' | 'All' | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Reporting/GetClient': {
      $get:
        | {
            input: { query: { ID: string } }
            output: UpdateSystemModelsClient
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ID: string } }
            output: UpdateSystemModelsClient
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { ID: string } }
            output: UpdateSystemModelsClient
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { ID: string } }
            output: UpdateSystemModelsClient
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Reporting/GetSubscriptions': {
      $get:
        | {
            input: {
              query: {
                ClientID?: string | undefined
                UpdateGroupID?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationship
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ClientID?: string | undefined
                UpdateGroupID?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationship
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ClientID?: string | undefined
                UpdateGroupID?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ClientID?: string | undefined
                UpdateGroupID?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Reporting/PackageStatusSummary': {
      $get:
        | {
            input: { query: { PackageID: string } }
            output: UpdateSystemModelsPackageStatusSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { PackageID: string } }
            output: UpdateSystemModelsPackageStatusSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { PackageID: string } }
            output: UpdateSystemModelsPackageStatusSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { PackageID: string } }
            output: UpdateSystemModelsPackageStatusSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { PackageID: string } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { PackageID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { PackageID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { PackageID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Reporting/RegisteredClients': {
      $get:
        | {
            input: {
              query: {
                UpdateGroupID?: string | undefined
                ClientID?: string | undefined
                Tag?: string | undefined
                ReportResult?: string | undefined
                ReportResultIsValid?: boolean | undefined
                ReportValue?: string | undefined
                LastCheckInBefore?: string | undefined
                LastCheckInAfter?: string | undefined
                OrderBy?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                UpdateGroupID?: string | undefined
                ClientID?: string | undefined
                Tag?: string | undefined
                ReportResult?: string | undefined
                ReportResultIsValid?: boolean | undefined
                ReportValue?: string | undefined
                LastCheckInBefore?: string | undefined
                LastCheckInAfter?: string | undefined
                OrderBy?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                UpdateGroupID?: string | undefined
                ClientID?: string | undefined
                Tag?: string | undefined
                ReportResult?: string | undefined
                ReportResultIsValid?: boolean | undefined
                ReportValue?: string | undefined
                LastCheckInBefore?: string | undefined
                LastCheckInAfter?: string | undefined
                OrderBy?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                UpdateGroupID?: string | undefined
                ClientID?: string | undefined
                Tag?: string | undefined
                ReportResult?: string | undefined
                ReportResultIsValid?: boolean | undefined
                ReportValue?: string | undefined
                LastCheckInBefore?: string | undefined
                LastCheckInAfter?: string | undefined
                OrderBy?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Reporting/UpdateGroups': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIPagedResponseUpdateSystemModelsUpdateGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIPagedResponseUpdateSystemModelsUpdateGroup
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Reporting/UpdateMetrics': {
      $get:
        | {
            input: { query: { UpdateGroupID: string; bundleNumber?: number | undefined } }
            output: UpdateSystemModelsUpdateMetricsData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { UpdateGroupID: string; bundleNumber?: number | undefined } }
            output: UpdateSystemModelsUpdateMetricsData
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { UpdateGroupID: string; bundleNumber?: number | undefined } }
            output: UpdateSystemModelsUpdateMetricsData
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { UpdateGroupID: string; bundleNumber?: number | undefined } }
            output: UpdateSystemModelsUpdateMetricsData
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { UpdateGroupID: string; bundleNumber?: number | undefined } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { UpdateGroupID: string; bundleNumber?: number | undefined } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { UpdateGroupID: string; bundleNumber?: number | undefined } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { UpdateGroupID: string; bundleNumber?: number | undefined } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Roles': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
                permissionID?: number | undefined
                permissionName?: string | undefined
              }
            }
            output: APIPagedResponseAPIModelsRole
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
                permissionID?: number | undefined
                permissionName?: string | undefined
              }
            }
            output: APIPagedResponseAPIModelsRole
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: APIModelsRole } & { form: APIModelsRole }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: APIModelsRole } & { form: APIModelsRole }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: APIModelsRole } & { form: APIModelsRole }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: APIModelsRole } & { form: APIModelsRole }
            output: number
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Roles/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get:
        | {
            input: { param: { id: number } }
            output: APIModelsRole
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: APIModelsRole
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: APIModelsRole
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: APIModelsRole
            outputFormat: 'text'
            status: 200
          }
      $put: {
        input: { param: { id: number } } & { json: APIModelsRole } & { form: APIModelsRole }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/Roles/:id/Permissions': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                name?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseAPIModelsPermission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                name?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseAPIModelsPermission
            outputFormat: 'text'
            status: 200
          }
      $put: {
        input: { param: { id: number } } & { json: APIModelsRolePermissionChange[] } & {
          form: APIModelsRolePermissionChange[]
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/Roles/:id/Users': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: APIPagedResponseAPIModelsUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: APIPagedResponseAPIModelsUser
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: number } } & { json: APIModelsRoleUserChange[] } & {
              form: APIModelsRoleUserChange[]
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { json: APIModelsRoleUserChange[] } & {
              form: APIModelsRoleUserChange[]
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/StringDefinitions': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                modifiedAfterTimestamp?: string | undefined
                includeTranslations?: boolean | undefined
                stringText?: string | undefined
                descriptionText?: string | undefined
                useFullText?: boolean | undefined
                includeDeletedLanguages?: boolean | undefined
                languageIds?: string | undefined
                stringIds?: string | undefined
                matchingTranslationsOnly?: boolean | undefined
              }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsStringDefinition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                modifiedAfterTimestamp?: string | undefined
                includeTranslations?: boolean | undefined
                stringText?: string | undefined
                descriptionText?: string | undefined
                useFullText?: boolean | undefined
                includeDeletedLanguages?: boolean | undefined
                languageIds?: string | undefined
                stringIds?: string | undefined
                matchingTranslationsOnly?: boolean | undefined
              }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsStringDefinition
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                modifiedAfterTimestamp?: string | undefined
                includeTranslations?: boolean | undefined
                stringText?: string | undefined
                descriptionText?: string | undefined
                useFullText?: boolean | undefined
                includeDeletedLanguages?: boolean | undefined
                languageIds?: string | undefined
                stringIds?: string | undefined
                matchingTranslationsOnly?: boolean | undefined
              }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsStringDefinition
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                modifiedAfterTimestamp?: string | undefined
                includeTranslations?: boolean | undefined
                stringText?: string | undefined
                descriptionText?: string | undefined
                useFullText?: boolean | undefined
                includeDeletedLanguages?: boolean | undefined
                languageIds?: string | undefined
                stringIds?: string | undefined
                matchingTranslationsOnly?: boolean | undefined
              }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsStringDefinition
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                modifiedAfterTimestamp?: string | undefined
                includeTranslations?: boolean | undefined
                stringText?: string | undefined
                descriptionText?: string | undefined
                useFullText?: boolean | undefined
                includeDeletedLanguages?: boolean | undefined
                languageIds?: string | undefined
                stringIds?: string | undefined
                matchingTranslationsOnly?: boolean | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                modifiedAfterTimestamp?: string | undefined
                includeTranslations?: boolean | undefined
                stringText?: string | undefined
                descriptionText?: string | undefined
                useFullText?: boolean | undefined
                includeDeletedLanguages?: boolean | undefined
                languageIds?: string | undefined
                stringIds?: string | undefined
                matchingTranslationsOnly?: boolean | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                modifiedAfterTimestamp?: string | undefined
                includeTranslations?: boolean | undefined
                stringText?: string | undefined
                descriptionText?: string | undefined
                useFullText?: boolean | undefined
                includeDeletedLanguages?: boolean | undefined
                languageIds?: string | undefined
                stringIds?: string | undefined
                matchingTranslationsOnly?: boolean | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                modifiedAfterTimestamp?: string | undefined
                includeTranslations?: boolean | undefined
                stringText?: string | undefined
                descriptionText?: string | undefined
                useFullText?: boolean | undefined
                includeDeletedLanguages?: boolean | undefined
                languageIds?: string | undefined
                stringIds?: string | undefined
                matchingTranslationsOnly?: boolean | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/StringDefinitions/Batch': {
      $post:
        | {
            input: { json: GlobalResourcesSharedModelsStringDefinition[] } & {
              form: GlobalResourcesSharedModelsStringDefinition[]
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: GlobalResourcesSharedModelsStringDefinition[] } & {
              form: GlobalResourcesSharedModelsStringDefinition[]
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { json: GlobalResourcesSharedModelsStringDefinition[] } & {
              form: GlobalResourcesSharedModelsStringDefinition[]
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: GlobalResourcesSharedModelsStringDefinition[] } & {
              form: GlobalResourcesSharedModelsStringDefinition[]
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/StringDefinitions/:ID': {
      $get:
        | {
            input: { param: { ID: string } } & {
              query: {
                includeTranslations?: boolean | undefined
                includeDeletedLanguages?: boolean | undefined
                languageIds?: string | undefined
              }
            }
            output: GlobalResourcesSharedModelsStringDefinition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } } & {
              query: {
                includeTranslations?: boolean | undefined
                includeDeletedLanguages?: boolean | undefined
                languageIds?: string | undefined
              }
            }
            output: GlobalResourcesSharedModelsStringDefinition
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } } & {
              query: {
                includeTranslations?: boolean | undefined
                includeDeletedLanguages?: boolean | undefined
                languageIds?: string | undefined
              }
            }
            output: GlobalResourcesSharedModelsStringDefinition
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } } & {
              query: {
                includeTranslations?: boolean | undefined
                includeDeletedLanguages?: boolean | undefined
                languageIds?: string | undefined
              }
            }
            output: GlobalResourcesSharedModelsStringDefinition
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } } & {
              query: {
                includeTranslations?: boolean | undefined
                includeDeletedLanguages?: boolean | undefined
                languageIds?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } } & {
              query: {
                includeTranslations?: boolean | undefined
                includeDeletedLanguages?: boolean | undefined
                languageIds?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } } & {
              query: {
                includeTranslations?: boolean | undefined
                includeDeletedLanguages?: boolean | undefined
                languageIds?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } } & {
              query: {
                includeTranslations?: boolean | undefined
                includeDeletedLanguages?: boolean | undefined
                languageIds?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/StringTranslations': {
      $get:
        | {
            input: {
              query: { limit?: number | undefined; modifiedAfterTimestamp?: string | undefined }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsStringTranslation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { limit?: number | undefined; modifiedAfterTimestamp?: string | undefined }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsStringTranslation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { limit?: number | undefined; modifiedAfterTimestamp?: string | undefined }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsStringTranslation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { limit?: number | undefined; modifiedAfterTimestamp?: string | undefined }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsStringTranslation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { limit?: number | undefined; modifiedAfterTimestamp?: string | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { limit?: number | undefined; modifiedAfterTimestamp?: string | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { limit?: number | undefined; modifiedAfterTimestamp?: string | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { limit?: number | undefined; modifiedAfterTimestamp?: string | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/StringTranslations/Batch': {
      $put:
        | {
            input: { json: GlobalResourcesSharedModelsStringTranslation[] } & {
              form: GlobalResourcesSharedModelsStringTranslation[]
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: GlobalResourcesSharedModelsStringTranslation[] } & {
              form: GlobalResourcesSharedModelsStringTranslation[]
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/StringTranslations/:stringId/:languageId': {
      $get:
        | {
            input: { param: { stringId: string; languageId: number } }
            output: GlobalResourcesSharedModelsStringTranslation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stringId: string; languageId: number } }
            output: GlobalResourcesSharedModelsStringTranslation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { stringId: string; languageId: number } }
            output: GlobalResourcesSharedModelsStringTranslation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { stringId: string; languageId: number } }
            output: GlobalResourcesSharedModelsStringTranslation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { stringId: string; languageId: number } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stringId: string; languageId: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { stringId: string; languageId: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { stringId: string; languageId: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { stringId: string; languageId: number } } & {
              json: GlobalResourcesSharedModelsStringTranslation
            } & { form: GlobalResourcesSharedModelsStringTranslation }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { stringId: string; languageId: number } } & {
              json: GlobalResourcesSharedModelsStringTranslation
            } & { form: GlobalResourcesSharedModelsStringTranslation }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/TranslationKeys': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                keyNames?: string | undefined
              }
            }
            output: APIIPagedResponseOASSupportSharedModelsTranslationKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                keyNames?: string | undefined
              }
            }
            output: APIIPagedResponseOASSupportSharedModelsTranslationKey
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                keyNames?: string | undefined
              }
            }
            output: APIIPagedResponseOASSupportSharedModelsTranslationKey
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                keyNames?: string | undefined
              }
            }
            output: APIIPagedResponseOASSupportSharedModelsTranslationKey
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                keyNames?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                keyNames?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                keyNames?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                keyNames?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: OASSupportSharedModelsTranslationKey } & {
              form: OASSupportSharedModelsTranslationKey
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OASSupportSharedModelsTranslationKey } & {
              form: OASSupportSharedModelsTranslationKey
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: OASSupportSharedModelsTranslationKey } & {
              form: OASSupportSharedModelsTranslationKey
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: OASSupportSharedModelsTranslationKey } & {
              form: OASSupportSharedModelsTranslationKey
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: OASSupportSharedModelsTranslationKey } & {
              form: OASSupportSharedModelsTranslationKey
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OASSupportSharedModelsTranslationKey } & {
              form: OASSupportSharedModelsTranslationKey
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: OASSupportSharedModelsTranslationKey } & {
              form: OASSupportSharedModelsTranslationKey
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: OASSupportSharedModelsTranslationKey } & {
              form: OASSupportSharedModelsTranslationKey
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/TranslationKeys/:ID': {
      $get:
        | {
            input: { param: { ID: number } }
            output: OASSupportSharedModelsTranslationKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: number } }
            output: OASSupportSharedModelsTranslationKey
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } }
            output: OASSupportSharedModelsTranslationKey
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } }
            output: OASSupportSharedModelsTranslationKey
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { ID: number } } & { json: OASSupportSharedModelsTranslationKey } & {
              form: OASSupportSharedModelsTranslationKey
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ID: number } } & { json: OASSupportSharedModelsTranslationKey } & {
              form: OASSupportSharedModelsTranslationKey
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/TranslationRequests': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIIPagedResponseGlobalResourcesSharedModelsTranslationRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIIPagedResponseGlobalResourcesSharedModelsTranslationRequest
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIIPagedResponseGlobalResourcesSharedModelsTranslationRequest
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIIPagedResponseGlobalResourcesSharedModelsTranslationRequest
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: GlobalResourcesSharedModelsTranslationRequest } & {
              form: GlobalResourcesSharedModelsTranslationRequest
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GlobalResourcesSharedModelsTranslationRequest } & {
              form: GlobalResourcesSharedModelsTranslationRequest
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: GlobalResourcesSharedModelsTranslationRequest } & {
              form: GlobalResourcesSharedModelsTranslationRequest
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: GlobalResourcesSharedModelsTranslationRequest } & {
              form: GlobalResourcesSharedModelsTranslationRequest
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: GlobalResourcesSharedModelsTranslationRequest } & {
              form: GlobalResourcesSharedModelsTranslationRequest
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GlobalResourcesSharedModelsTranslationRequest } & {
              form: GlobalResourcesSharedModelsTranslationRequest
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: GlobalResourcesSharedModelsTranslationRequest } & {
              form: GlobalResourcesSharedModelsTranslationRequest
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: GlobalResourcesSharedModelsTranslationRequest } & {
              form: GlobalResourcesSharedModelsTranslationRequest
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/TranslationRequests/:Id': {
      $get:
        | {
            input: { param: { Id: number } }
            output: GlobalResourcesSharedModelsTranslationRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Id: number } }
            output: GlobalResourcesSharedModelsTranslationRequest
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { Id: number } }
            output: GlobalResourcesSharedModelsTranslationRequest
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { Id: number } }
            output: GlobalResourcesSharedModelsTranslationRequest
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { Id: number } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Id: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { Id: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { Id: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { Id: number } } & {
              query: { doResendRequest?: boolean | undefined }
            } & { json: GlobalResourcesSharedModelsTranslationRequest } & {
              form: GlobalResourcesSharedModelsTranslationRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { Id: number } } & {
              query: { doResendRequest?: boolean | undefined }
            } & { json: GlobalResourcesSharedModelsTranslationRequest } & {
              form: GlobalResourcesSharedModelsTranslationRequest
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/TranslationRequests/:Id/Strings': {
      $put:
        | {
            input: { param: { Id: number } } & { json: string[] } & { form: string[] }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { Id: number } } & { json: string[] } & { form: string[] }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/TranslationSetAttributes/Batch': {
      $put:
        | {
            input: { json: GlobalResourcesSharedModelsTranslationSetAttribute[] } & {
              form: GlobalResourcesSharedModelsTranslationSetAttribute[]
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: GlobalResourcesSharedModelsTranslationSetAttribute[] } & {
              form: GlobalResourcesSharedModelsTranslationSetAttribute[]
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/TranslationSetAttributes/:ID': {
      $delete:
        | { input: { param: { ID: number } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { ID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { ID: number } } & {
              json: GlobalResourcesSharedModelsTranslationSetAttribute
            } & { form: GlobalResourcesSharedModelsTranslationSetAttribute }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ID: number } } & {
              json: GlobalResourcesSharedModelsTranslationSetAttribute
            } & { form: GlobalResourcesSharedModelsTranslationSetAttribute }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/TranslationSets': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                translationRequestID?: number | undefined
                state?:
                  | 'OutForProcessing'
                  | 'Processing'
                  | 'PendingApproval'
                  | 'OutForTranslation'
                  | 'Cancelled'
                  | 'Completed'
                  | undefined
                stringId?: string | undefined
                languageId?: number | undefined
                includeAttributes?: string | undefined
              }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsTranslationSet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                translationRequestID?: number | undefined
                state?:
                  | 'OutForProcessing'
                  | 'Processing'
                  | 'PendingApproval'
                  | 'OutForTranslation'
                  | 'Cancelled'
                  | 'Completed'
                  | undefined
                stringId?: string | undefined
                languageId?: number | undefined
                includeAttributes?: string | undefined
              }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsTranslationSet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                translationRequestID?: number | undefined
                state?:
                  | 'OutForProcessing'
                  | 'Processing'
                  | 'PendingApproval'
                  | 'OutForTranslation'
                  | 'Cancelled'
                  | 'Completed'
                  | undefined
                stringId?: string | undefined
                languageId?: number | undefined
                includeAttributes?: string | undefined
              }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsTranslationSet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                translationRequestID?: number | undefined
                state?:
                  | 'OutForProcessing'
                  | 'Processing'
                  | 'PendingApproval'
                  | 'OutForTranslation'
                  | 'Cancelled'
                  | 'Completed'
                  | undefined
                stringId?: string | undefined
                languageId?: number | undefined
                includeAttributes?: string | undefined
              }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsTranslationSet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                translationRequestID?: number | undefined
                state?:
                  | 'OutForProcessing'
                  | 'Processing'
                  | 'PendingApproval'
                  | 'OutForTranslation'
                  | 'Cancelled'
                  | 'Completed'
                  | undefined
                stringId?: string | undefined
                languageId?: number | undefined
                includeAttributes?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                translationRequestID?: number | undefined
                state?:
                  | 'OutForProcessing'
                  | 'Processing'
                  | 'PendingApproval'
                  | 'OutForTranslation'
                  | 'Cancelled'
                  | 'Completed'
                  | undefined
                stringId?: string | undefined
                languageId?: number | undefined
                includeAttributes?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                translationRequestID?: number | undefined
                state?:
                  | 'OutForProcessing'
                  | 'Processing'
                  | 'PendingApproval'
                  | 'OutForTranslation'
                  | 'Cancelled'
                  | 'Completed'
                  | undefined
                stringId?: string | undefined
                languageId?: number | undefined
                includeAttributes?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                translationRequestID?: number | undefined
                state?:
                  | 'OutForProcessing'
                  | 'Processing'
                  | 'PendingApproval'
                  | 'OutForTranslation'
                  | 'Cancelled'
                  | 'Completed'
                  | undefined
                stringId?: string | undefined
                languageId?: number | undefined
                includeAttributes?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/TranslationSets/:ID': {
      $get:
        | {
            input: { param: { ID: number } } & { query: { includeAttributes?: string | undefined } }
            output: GlobalResourcesSharedModelsTranslationSet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: number } } & { query: { includeAttributes?: string | undefined } }
            output: GlobalResourcesSharedModelsTranslationSet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } } & { query: { includeAttributes?: string | undefined } }
            output: GlobalResourcesSharedModelsTranslationSet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } } & { query: { includeAttributes?: string | undefined } }
            output: GlobalResourcesSharedModelsTranslationSet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } } & { query: { includeAttributes?: string | undefined } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: number } } & { query: { includeAttributes?: string | undefined } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } } & { query: { includeAttributes?: string | undefined } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } } & { query: { includeAttributes?: string | undefined } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { ID: number } } & {
              json: GlobalResourcesSharedModelsTranslationSet
            } & { form: GlobalResourcesSharedModelsTranslationSet }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ID: number } } & {
              json: GlobalResourcesSharedModelsTranslationSet
            } & { form: GlobalResourcesSharedModelsTranslationSet }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/TranslationSets/:ID/Attributes': {
      $get:
        | {
            input: { param: { ID: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
              }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsTranslationSetAttribute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
              }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsTranslationSetAttribute
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
              }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsTranslationSetAttribute
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
              }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsTranslationSetAttribute
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                name?: string | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { ID: number } } & {
              json: GlobalResourcesSharedModelsTranslationSetAttribute
            } & { form: GlobalResourcesSharedModelsTranslationSetAttribute }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: number } } & {
              json: GlobalResourcesSharedModelsTranslationSetAttribute
            } & { form: GlobalResourcesSharedModelsTranslationSetAttribute }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } } & {
              json: GlobalResourcesSharedModelsTranslationSetAttribute
            } & { form: GlobalResourcesSharedModelsTranslationSetAttribute }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } } & {
              json: GlobalResourcesSharedModelsTranslationSetAttribute
            } & { form: GlobalResourcesSharedModelsTranslationSetAttribute }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } } & {
              json: GlobalResourcesSharedModelsTranslationSetAttribute
            } & { form: GlobalResourcesSharedModelsTranslationSetAttribute }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: number } } & {
              json: GlobalResourcesSharedModelsTranslationSetAttribute
            } & { form: GlobalResourcesSharedModelsTranslationSetAttribute }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } } & {
              json: GlobalResourcesSharedModelsTranslationSetAttribute
            } & { form: GlobalResourcesSharedModelsTranslationSetAttribute }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } } & {
              json: GlobalResourcesSharedModelsTranslationSetAttribute
            } & { form: GlobalResourcesSharedModelsTranslationSetAttribute }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/TranslationSets/:ID/Attributes/Batch': {
      $post:
        | {
            input: { param: { ID: number } } & {
              json: GlobalResourcesSharedModelsTranslationSetAttribute[]
            } & { form: GlobalResourcesSharedModelsTranslationSetAttribute[] }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ID: number } } & {
              json: GlobalResourcesSharedModelsTranslationSetAttribute[]
            } & { form: GlobalResourcesSharedModelsTranslationSetAttribute[] }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/TranslationSets/:ID/SourceStrings': {
      $get:
        | {
            input: { param: { ID: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceString
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceString
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceString
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/TranslationSets/:ID/Statistics': {
      $get:
        | {
            input: { param: { ID: number } }
            output: GlobalResourcesSharedModelsTranslationSetStatistics
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: number } }
            output: GlobalResourcesSharedModelsTranslationSetStatistics
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } }
            output: GlobalResourcesSharedModelsTranslationSetStatistics
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } }
            output: GlobalResourcesSharedModelsTranslationSetStatistics
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/TranslationSets/:ID/Strings': {
      $get:
        | {
            input: { param: { ID: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsTranslationSetString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsTranslationSetString
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsTranslationSetString
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: APIIPagedResponseGlobalResourcesSharedModelsTranslationSetString
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { ID: number } } & {
              json: GlobalResourcesSharedModelsTranslationSetString[]
            } & { form: GlobalResourcesSharedModelsTranslationSetString[] }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ID: number } } & {
              json: GlobalResourcesSharedModelsTranslationSetString[]
            } & { form: GlobalResourcesSharedModelsTranslationSetString[] }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/UpdateGroupClientRelationships': {
      $get:
        | {
            input: {
              query: {
                ClientID?: string | undefined
                UpdateGroupID?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                Active?: boolean | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationship
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ClientID?: string | undefined
                UpdateGroupID?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                Active?: boolean | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationship
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ClientID?: string | undefined
                UpdateGroupID?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                Active?: boolean | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ClientID?: string | undefined
                UpdateGroupID?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                Active?: boolean | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: UpdateSystemModelsUpdateGroupClientRelationship } & {
              form: UpdateSystemModelsUpdateGroupClientRelationship
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsUpdateGroupClientRelationship } & {
              form: UpdateSystemModelsUpdateGroupClientRelationship
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsUpdateGroupClientRelationship } & {
              form: UpdateSystemModelsUpdateGroupClientRelationship
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsUpdateGroupClientRelationship } & {
              form: UpdateSystemModelsUpdateGroupClientRelationship
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsUpdateGroupClientRelationship } & {
              form: UpdateSystemModelsUpdateGroupClientRelationship
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsUpdateGroupClientRelationship } & {
              form: UpdateSystemModelsUpdateGroupClientRelationship
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsUpdateGroupClientRelationship } & {
              form: UpdateSystemModelsUpdateGroupClientRelationship
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsUpdateGroupClientRelationship } & {
              form: UpdateSystemModelsUpdateGroupClientRelationship
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { query: { ClientID: string; UpdateGroupID: string; Active: boolean } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { ClientID: string; UpdateGroupID: string; Active: boolean } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/UpdateGroupClientRelationships/:RelationshipID': {
      $get:
        | {
            input: { param: { RelationshipID: string } }
            output: UpdateSystemModelsUpdateGroupClientRelationship
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { RelationshipID: string } }
            output: UpdateSystemModelsUpdateGroupClientRelationship
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { RelationshipID: string } }
            output: UpdateSystemModelsUpdateGroupClientRelationship
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { RelationshipID: string } }
            output: UpdateSystemModelsUpdateGroupClientRelationship
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { RelationshipID: string } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { RelationshipID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { RelationshipID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { RelationshipID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { RelationshipID: string } } & {
              json: UpdateSystemModelsUpdateGroupClientRelationship
            } & { form: UpdateSystemModelsUpdateGroupClientRelationship }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { RelationshipID: string } } & {
              json: UpdateSystemModelsUpdateGroupClientRelationship
            } & { form: UpdateSystemModelsUpdateGroupClientRelationship }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/UpdateGroupSubscriptions': {
      $get:
        | {
            input: {
              query: {
                UpdateGroupID?: string | undefined
                PackageTypeID?: string | undefined
                ClientID?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsUpdateGroupSubscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                UpdateGroupID?: string | undefined
                PackageTypeID?: string | undefined
                ClientID?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsUpdateGroupSubscription
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                UpdateGroupID?: string | undefined
                PackageTypeID?: string | undefined
                ClientID?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                UpdateGroupID?: string | undefined
                PackageTypeID?: string | undefined
                ClientID?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: UpdateSystemModelsUpdateGroupSubscription } & {
              form: UpdateSystemModelsUpdateGroupSubscription
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsUpdateGroupSubscription } & {
              form: UpdateSystemModelsUpdateGroupSubscription
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsUpdateGroupSubscription } & {
              form: UpdateSystemModelsUpdateGroupSubscription
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsUpdateGroupSubscription } & {
              form: UpdateSystemModelsUpdateGroupSubscription
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsUpdateGroupSubscription } & {
              form: UpdateSystemModelsUpdateGroupSubscription
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsUpdateGroupSubscription } & {
              form: UpdateSystemModelsUpdateGroupSubscription
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsUpdateGroupSubscription } & {
              form: UpdateSystemModelsUpdateGroupSubscription
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsUpdateGroupSubscription } & {
              form: UpdateSystemModelsUpdateGroupSubscription
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/UpdateGroupSubscriptions/Batch': {
      $post:
        | {
            input: { json: UpdateSystemModelsUpdateGroupSubscription[] } & {
              form: UpdateSystemModelsUpdateGroupSubscription[]
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: UpdateSystemModelsUpdateGroupSubscription[] } & {
              form: UpdateSystemModelsUpdateGroupSubscription[]
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { json: UpdateSystemModelsUpdateGroupSubscription[] } & {
              form: UpdateSystemModelsUpdateGroupSubscription[]
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: UpdateSystemModelsUpdateGroupSubscription[] } & {
              form: UpdateSystemModelsUpdateGroupSubscription[]
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/UpdateGroupSubscriptions/:UpdateGroupSubscriptionID': {
      $delete:
        | {
            input: { param: { UpdateGroupSubscriptionID: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { UpdateGroupSubscriptionID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { UpdateGroupSubscriptionID: number } }
            output: UpdateSystemModelsUpdateGroupSubscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { UpdateGroupSubscriptionID: number } }
            output: UpdateSystemModelsUpdateGroupSubscription
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { UpdateGroupSubscriptionID: number } }
            output: UpdateSystemModelsUpdateGroupSubscription
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { UpdateGroupSubscriptionID: number } }
            output: UpdateSystemModelsUpdateGroupSubscription
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { UpdateGroupSubscriptionID: number } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { UpdateGroupSubscriptionID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { UpdateGroupSubscriptionID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { UpdateGroupSubscriptionID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { UpdateGroupSubscriptionID: number } } & {
              json: UpdateSystemModelsUpdateGroupSubscription
            } & { form: UpdateSystemModelsUpdateGroupSubscription }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { UpdateGroupSubscriptionID: number } } & {
              json: UpdateSystemModelsUpdateGroupSubscription
            } & { form: UpdateSystemModelsUpdateGroupSubscription }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/UpdateGroups': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userID?: number | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsUpdateGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userID?: number | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsUpdateGroup
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userID?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userID?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: UpdateSystemModelsUpdateGroup } & { form: UpdateSystemModelsUpdateGroup }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsUpdateGroup } & { form: UpdateSystemModelsUpdateGroup }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsUpdateGroup } & { form: UpdateSystemModelsUpdateGroup }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsUpdateGroup } & { form: UpdateSystemModelsUpdateGroup }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsUpdateGroup } & { form: UpdateSystemModelsUpdateGroup }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsUpdateGroup } & { form: UpdateSystemModelsUpdateGroup }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsUpdateGroup } & { form: UpdateSystemModelsUpdateGroup }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateSystemModelsUpdateGroup } & { form: UpdateSystemModelsUpdateGroup }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/UpdateGroups/:ID': {
      $delete:
        | { input: { param: { ID: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { ID: string } }
            output: UpdateSystemModelsUpdateGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: UpdateSystemModelsUpdateGroup
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: UpdateSystemModelsUpdateGroup
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: UpdateSystemModelsUpdateGroup
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { ID: string } } & { json: UpdateSystemModelsUpdateGroup } & {
              form: UpdateSystemModelsUpdateGroup
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ID: string } } & { json: UpdateSystemModelsUpdateGroup } & {
              form: UpdateSystemModelsUpdateGroup
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/UpdateGroups/:ID/Bundles': {
      $get:
        | {
            input: { param: { ID: string } } & {
              query: {
                IncludeInactive: boolean
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsBundle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } } & {
              query: {
                IncludeInactive: boolean
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseUpdateSystemModelsBundle
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ID: string } } & {
              query: {
                IncludeInactive: boolean
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ID: string } } & {
              query: {
                IncludeInactive: boolean
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/UpdateGroups/:id/Users/:userID': {
      $delete:
        | {
            input: { param: { id: string; userID: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string; userID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { id: string; userID: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string; userID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/UpdateSystem': {
      $get:
        | {
            input: {
              query: { ClientID: string; Preview: boolean; RunAllInventories?: boolean | undefined }
            }
            output: UpdateSystemModelsCheckinResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { ClientID: string; Preview: boolean; RunAllInventories?: boolean | undefined }
            }
            output: UpdateSystemModelsCheckinResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { ClientID: string; Preview: boolean; RunAllInventories?: boolean | undefined }
            }
            output: UpdateSystemModelsCheckinResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { ClientID: string; Preview: boolean; RunAllInventories?: boolean | undefined }
            }
            output: UpdateSystemModelsCheckinResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { ClientID: string; Preview: boolean; RunAllInventories?: boolean | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { ClientID: string; Preview: boolean; RunAllInventories?: boolean | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { ClientID: string; Preview: boolean; RunAllInventories?: boolean | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { ClientID: string; Preview: boolean; RunAllInventories?: boolean | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/UserContentDefinitions': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userID?: number | undefined
                contentDefinitionID?: number | undefined
              }
            }
            output: APIPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userID?: number | undefined
                contentDefinitionID?: number | undefined
              }
            }
            output: APIPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userID?: number | undefined
                contentDefinitionID?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                userID?: number | undefined
                contentDefinitionID?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesUserContentDefinition } & {
              form: ContentSubmissionSharedBusinessEntitiesUserContentDefinition
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesUserContentDefinition } & {
              form: ContentSubmissionSharedBusinessEntitiesUserContentDefinition
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesUserContentDefinition } & {
              form: ContentSubmissionSharedBusinessEntitiesUserContentDefinition
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesUserContentDefinition } & {
              form: ContentSubmissionSharedBusinessEntitiesUserContentDefinition
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesUserContentDefinition } & {
              form: ContentSubmissionSharedBusinessEntitiesUserContentDefinition
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesUserContentDefinition } & {
              form: ContentSubmissionSharedBusinessEntitiesUserContentDefinition
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesUserContentDefinition } & {
              form: ContentSubmissionSharedBusinessEntitiesUserContentDefinition
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ContentSubmissionSharedBusinessEntitiesUserContentDefinition } & {
              form: ContentSubmissionSharedBusinessEntitiesUserContentDefinition
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/UserContentDefinitions/:userContentDefinitionID': {
      $delete:
        | {
            input: { param: { userContentDefinitionID: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userContentDefinitionID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { userContentDefinitionID: number } }
            output: ContentSubmissionSharedBusinessEntitiesUserContentDefinition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userContentDefinitionID: number } }
            output: ContentSubmissionSharedBusinessEntitiesUserContentDefinition
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userContentDefinitionID: number } }
            output: ContentSubmissionSharedBusinessEntitiesUserContentDefinition
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userContentDefinitionID: number } }
            output: ContentSubmissionSharedBusinessEntitiesUserContentDefinition
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userContentDefinitionID: number } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userContentDefinitionID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userContentDefinitionID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userContentDefinitionID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Users': {
      $get:
        | {
            input: {
              query: {
                username?: string | undefined
                email?: string | undefined
                name?: string | undefined
                hasRole?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseAPIModelsUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                username?: string | undefined
                email?: string | undefined
                name?: string | undefined
                hasRole?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseAPIModelsUser
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: APIModelsUser } & { form: APIModelsUser }
            output: APIModelsUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: APIModelsUser } & { form: APIModelsUser }
            output: APIModelsUser
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: APIModelsUser } & { form: APIModelsUser }
            output: APIModelsUser
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: APIModelsUser } & { form: APIModelsUser }
            output: APIModelsUser
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Users/Current': {
      $get:
        | { input: {}; output: APIModelsUser; outputFormat: 'json'; status: 200 }
        | { input: {}; output: APIModelsUser; outputFormat: 'text'; status: 200 }
        | { input: {}; output: APIModelsUser; outputFormat: 'text'; status: 200 }
        | { input: {}; output: APIModelsUser; outputFormat: 'text'; status: 200 }
      $put: {
        input: { json: APIModelsUser } & { form: APIModelsUser }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/Users/Current/Permissions': {
      $get:
        | {
            input: {
              query: {
                Permission?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseAPIModelsUserEffectivePermission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                Permission?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseAPIModelsUserEffectivePermission
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Permission?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                Permission?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Users/Current/Roles': {
      $get:
        | {
            input: {
              query: {
                Role?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseAPIModelsRole
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                Role?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseAPIModelsRole
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Role?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                Role?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Users/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get:
        | {
            input: { param: { id: number } }
            output: APIModelsUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: APIModelsUser
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: APIModelsUser
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: APIModelsUser
            outputFormat: 'text'
            status: 200
          }
      $put: {
        input: { param: { id: number } } & { json: APIModelsUser } & { form: APIModelsUser }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/Users/:id/Permissions': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                Permission?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseAPIModelsUserEffectivePermission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                Permission?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseAPIModelsUserEffectivePermission
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                Permission?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                Permission?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Users/:id/Roles': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                Role?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseAPIModelsRole
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                Role?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseAPIModelsRole
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                Role?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                Role?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: number } } & { json: APIModelsUserRoleChange[] } & {
              form: APIModelsUserRoleChange[]
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { json: APIModelsUserRoleChange[] } & {
              form: APIModelsUserRoleChange[]
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/VoucherHistory': {
      $get:
        | {
            input: {
              query: {
                VoucherCode?: string | undefined
                ChangedBefore?: string | undefined
                ChangedAfter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseDealerDBModelsVoucherHistory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                VoucherCode?: string | undefined
                ChangedBefore?: string | undefined
                ChangedAfter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseDealerDBModelsVoucherHistory
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Vouchers': {
      $get:
        | {
            input: {
              query: {
                Type?: 'Commercial' | 'Internal' | 'Temporary' | 'RightToRepair' | undefined
                DealerCode?: string | undefined
                LicenseTo?: string | undefined
                Purpose?: string | undefined
                OrderNumber?: string | undefined
                Email?: string | undefined
                ModifiedBy?: string | undefined
                CreatedAfter?: string | undefined
                CreatedBefore?: string | undefined
                PunchedAfter?: string | undefined
                PunchedBefore?: string | undefined
                Punched?: boolean | undefined
                ExpirationAfter?: string | undefined
                ExpirationBefore?: string | undefined
                Deleted?: 'NotDeleted' | 'Deleted' | 'All' | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseDealerDBModelsVoucher
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                Type?: 'Commercial' | 'Internal' | 'Temporary' | 'RightToRepair' | undefined
                DealerCode?: string | undefined
                LicenseTo?: string | undefined
                Purpose?: string | undefined
                OrderNumber?: string | undefined
                Email?: string | undefined
                ModifiedBy?: string | undefined
                CreatedAfter?: string | undefined
                CreatedBefore?: string | undefined
                PunchedAfter?: string | undefined
                PunchedBefore?: string | undefined
                Punched?: boolean | undefined
                ExpirationAfter?: string | undefined
                ExpirationBefore?: string | undefined
                Deleted?: 'NotDeleted' | 'Deleted' | 'All' | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: APIPagedResponseDealerDBModelsVoucher
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: DealerDBModelsVoucher } & { form: DealerDBModelsVoucher }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DealerDBModelsVoucher } & { form: DealerDBModelsVoucher }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: DealerDBModelsVoucher } & { form: DealerDBModelsVoucher }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: DealerDBModelsVoucher } & { form: DealerDBModelsVoucher }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/Vouchers/:VoucherCode': {
      $delete: {
        input: { param: { VoucherCode: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get:
        | {
            input: { param: { VoucherCode: string } } & {
              query: { Deleted?: 'NotDeleted' | 'Deleted' | 'All' | undefined }
            }
            output: DealerDBModelsVoucher
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { VoucherCode: string } } & {
              query: { Deleted?: 'NotDeleted' | 'Deleted' | 'All' | undefined }
            }
            output: DealerDBModelsVoucher
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { VoucherCode: string } } & {
              query: { Deleted?: 'NotDeleted' | 'Deleted' | 'All' | undefined }
            }
            output: DealerDBModelsVoucher
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { VoucherCode: string } } & {
              query: { Deleted?: 'NotDeleted' | 'Deleted' | 'All' | undefined }
            }
            output: DealerDBModelsVoucher
            outputFormat: 'text'
            status: 200
          }
      $put: {
        input: { param: { VoucherCode: string } } & { json: DealerDBModelsVoucher } & {
          form: DealerDBModelsVoucher
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v2/Vouchers/:VoucherCode/VoucherHistory': {
      $get:
        | {
            input: { param: { VoucherCode: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: APIPagedResponseDealerDBModelsVoucherHistory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { VoucherCode: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: APIPagedResponseDealerDBModelsVoucherHistory
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/activities': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                isIncludeDeleted?: boolean | undefined
              }
            }
            output: APIPagedResponseBuildSystemSharedDTOActivity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                isIncludeDeleted?: boolean | undefined
              }
            }
            output: APIPagedResponseBuildSystemSharedDTOActivity
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                isIncludeDeleted?: boolean | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                isIncludeDeleted?: boolean | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: BuildSystemSharedDTOActivity } & { form: BuildSystemSharedDTOActivity }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOActivity } & { form: BuildSystemSharedDTOActivity }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOActivity } & { form: BuildSystemSharedDTOActivity }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOActivity } & { form: BuildSystemSharedDTOActivity }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOActivity } & { form: BuildSystemSharedDTOActivity }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOActivity } & { form: BuildSystemSharedDTOActivity }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOActivity } & { form: BuildSystemSharedDTOActivity }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOActivity } & { form: BuildSystemSharedDTOActivity }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/activities/:activityID': {
      $delete:
        | {
            input: { param: { activityID: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { activityID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { activityID: number } } & {
              query: { isIncludeDeleted?: boolean | undefined }
            }
            output: BuildSystemSharedDTOActivity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { activityID: number } } & {
              query: { isIncludeDeleted?: boolean | undefined }
            }
            output: BuildSystemSharedDTOActivity
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { activityID: number } } & {
              query: { isIncludeDeleted?: boolean | undefined }
            }
            output: BuildSystemSharedDTOActivity
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { activityID: number } } & {
              query: { isIncludeDeleted?: boolean | undefined }
            }
            output: BuildSystemSharedDTOActivity
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { activityID: number } } & {
              query: { isIncludeDeleted?: boolean | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { activityID: number } } & {
              query: { isIncludeDeleted?: boolean | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { activityID: number } } & {
              query: { isIncludeDeleted?: boolean | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { activityID: number } } & {
              query: { isIncludeDeleted?: boolean | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { activityID: number } } & { json: BuildSystemSharedDTOActivity } & {
              form: BuildSystemSharedDTOActivity
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { activityID: number } } & { json: BuildSystemSharedDTOActivity } & {
              form: BuildSystemSharedDTOActivity
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/activityRuns': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                status?: 'Ready' | 'InProgress' | 'Succeeded' | 'Cancelled' | 'Failed' | undefined
              }
            }
            output: APIPagedResponseBuildSystemSharedDTOActivityRun
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                status?: 'Ready' | 'InProgress' | 'Succeeded' | 'Cancelled' | 'Failed' | undefined
              }
            }
            output: APIPagedResponseBuildSystemSharedDTOActivityRun
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                status?: 'Ready' | 'InProgress' | 'Succeeded' | 'Cancelled' | 'Failed' | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                status?: 'Ready' | 'InProgress' | 'Succeeded' | 'Cancelled' | 'Failed' | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/activityRuns/:activityRunID': {
      $get:
        | {
            input: { param: { activityRunID: number } }
            output: BuildSystemSharedDTOActivityRun
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { activityRunID: number } }
            output: BuildSystemSharedDTOActivityRun
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { activityRunID: number } }
            output: BuildSystemSharedDTOActivityRun
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { activityRunID: number } }
            output: BuildSystemSharedDTOActivityRun
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { activityRunID: number } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { activityRunID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { activityRunID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { activityRunID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { activityRunID: number } } & {
              json: BuildSystemSharedDTOActivityRun
            } & { form: BuildSystemSharedDTOActivityRun }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { activityRunID: number } } & {
              json: BuildSystemSharedDTOActivityRun
            } & { form: BuildSystemSharedDTOActivityRun }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/activityRuns/:activityRunID/status': {
      $get:
        | {
            input: { param: { activityRunID: number } }
            output: BuildSystemSharedDTOActivityRunStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { activityRunID: number } }
            output: BuildSystemSharedDTOActivityRunStatus
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { activityRunID: number } }
            output: BuildSystemSharedDTOActivityRunStatus
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { activityRunID: number } }
            output: BuildSystemSharedDTOActivityRunStatus
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { activityRunID: number } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { activityRunID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { activityRunID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { activityRunID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { activityRunID: number } } & {
              json: BuildSystemSharedDTOActivityRunStatus
            } & { form: BuildSystemSharedDTOActivityRunStatus }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { activityRunID: number } } & {
              json: BuildSystemSharedDTOActivityRunStatus
            } & { form: BuildSystemSharedDTOActivityRunStatus }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/agents': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIPagedResponseBuildSystemSharedDTOAgent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIPagedResponseBuildSystemSharedDTOAgent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: BuildSystemSharedDTOAgent } & { form: BuildSystemSharedDTOAgent }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOAgent } & { form: BuildSystemSharedDTOAgent }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOAgent } & { form: BuildSystemSharedDTOAgent }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOAgent } & { form: BuildSystemSharedDTOAgent }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOAgent } & { form: BuildSystemSharedDTOAgent }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOAgent } & { form: BuildSystemSharedDTOAgent }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOAgent } & { form: BuildSystemSharedDTOAgent }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOAgent } & { form: BuildSystemSharedDTOAgent }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/agents/Current': {
      $get:
        | { input: {}; output: BuildSystemSharedDTOAgent; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BuildSystemSharedDTOAgent; outputFormat: 'text'; status: 200 }
        | { input: {}; output: BuildSystemSharedDTOAgent; outputFormat: 'text'; status: 200 }
        | { input: {}; output: BuildSystemSharedDTOAgent; outputFormat: 'text'; status: 200 }
        | { input: {}; output: APIModelsApiError; outputFormat: 'json'; status: 200 }
        | { input: {}; output: APIModelsApiError; outputFormat: 'text'; status: 200 }
        | { input: {}; output: APIModelsApiError; outputFormat: 'text'; status: 200 }
        | { input: {}; output: APIModelsApiError; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v2/agents/Current/ActivityRun': {
      $get:
        | { input: {}; output: BuildSystemSharedDTOActivityRun; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BuildSystemSharedDTOActivityRun; outputFormat: 'text'; status: 200 }
        | { input: {}; output: BuildSystemSharedDTOActivityRun; outputFormat: 'text'; status: 200 }
        | { input: {}; output: BuildSystemSharedDTOActivityRun; outputFormat: 'text'; status: 200 }
        | { input: {}; output: APIModelsApiError; outputFormat: 'json'; status: 200 }
        | { input: {}; output: APIModelsApiError; outputFormat: 'text'; status: 200 }
        | { input: {}; output: APIModelsApiError; outputFormat: 'text'; status: 200 }
        | { input: {}; output: APIModelsApiError; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v2/agents/:agentID': {
      $delete:
        | { input: { param: { agentID: number } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { agentID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { agentID: number } }
            output: BuildSystemSharedDTOAgent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentID: number } }
            output: BuildSystemSharedDTOAgent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { agentID: number } }
            output: BuildSystemSharedDTOAgent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { agentID: number } }
            output: BuildSystemSharedDTOAgent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { agentID: number } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { agentID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { agentID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { agentID: number } } & { json: BuildSystemSharedDTOAgent } & {
              form: BuildSystemSharedDTOAgent
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { agentID: number } } & { json: BuildSystemSharedDTOAgent } & {
              form: BuildSystemSharedDTOAgent
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/agents/:agentID/ActivityRun': {
      $get:
        | {
            input: { param: { agentID: number } }
            output: BuildSystemSharedDTOActivityRun
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentID: number } }
            output: BuildSystemSharedDTOActivityRun
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { agentID: number } }
            output: BuildSystemSharedDTOActivityRun
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { agentID: number } }
            output: BuildSystemSharedDTOActivityRun
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { agentID: number } }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { agentID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { agentID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { agentID: number } } & { json: BuildSystemSharedDTOActivityRun } & {
              form: BuildSystemSharedDTOActivityRun
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { agentID: number } } & { json: BuildSystemSharedDTOActivityRun } & {
              form: BuildSystemSharedDTOActivityRun
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/agents/:agentID/Status': {
      $put:
        | {
            input: { param: { agentID: number } } & { json: BuildSystemSharedDTOAgentStatus } & {
              form: BuildSystemSharedDTOAgentStatus
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { agentID: number } } & { json: BuildSystemSharedDTOAgentStatus } & {
              form: BuildSystemSharedDTOAgentStatus
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/jobRuns': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                includeActivityRunDetails?: boolean | undefined
              }
            }
            output: APIPagedResponseBuildSystemSharedDTOJobRun
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                includeActivityRunDetails?: boolean | undefined
              }
            }
            output: APIPagedResponseBuildSystemSharedDTOJobRun
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                includeActivityRunDetails?: boolean | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                includeActivityRunDetails?: boolean | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: BuildSystemSharedDTOJobRun } & { form: BuildSystemSharedDTOJobRun }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOJobRun } & { form: BuildSystemSharedDTOJobRun }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOJobRun } & { form: BuildSystemSharedDTOJobRun }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOJobRun } & { form: BuildSystemSharedDTOJobRun }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOJobRun } & { form: BuildSystemSharedDTOJobRun }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOJobRun } & { form: BuildSystemSharedDTOJobRun }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOJobRun } & { form: BuildSystemSharedDTOJobRun }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOJobRun } & { form: BuildSystemSharedDTOJobRun }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/jobRuns/:jobRunID': {
      $delete:
        | { input: { param: { jobRunID: number } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { jobRunID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { jobRunID: number } } & {
              query: { includeActivityRunDetails?: boolean | undefined }
            }
            output: BuildSystemSharedDTOJobRun
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobRunID: number } } & {
              query: { includeActivityRunDetails?: boolean | undefined }
            }
            output: BuildSystemSharedDTOJobRun
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { jobRunID: number } } & {
              query: { includeActivityRunDetails?: boolean | undefined }
            }
            output: BuildSystemSharedDTOJobRun
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { jobRunID: number } } & {
              query: { includeActivityRunDetails?: boolean | undefined }
            }
            output: BuildSystemSharedDTOJobRun
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { jobRunID: number } } & {
              query: { includeActivityRunDetails?: boolean | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobRunID: number } } & {
              query: { includeActivityRunDetails?: boolean | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { jobRunID: number } } & {
              query: { includeActivityRunDetails?: boolean | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { jobRunID: number } } & {
              query: { includeActivityRunDetails?: boolean | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { jobRunID: number } } & { json: BuildSystemSharedDTOJobRun } & {
              form: BuildSystemSharedDTOJobRun
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { jobRunID: number } } & { json: BuildSystemSharedDTOJobRun } & {
              form: BuildSystemSharedDTOJobRun
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/jobs': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                isIncludeDeleted?: boolean | undefined
              }
            }
            output: APIPagedResponseBuildSystemSharedDTOJob
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                isIncludeDeleted?: boolean | undefined
              }
            }
            output: APIPagedResponseBuildSystemSharedDTOJob
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                isIncludeDeleted?: boolean | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                isIncludeDeleted?: boolean | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: BuildSystemSharedDTOJob } & { form: BuildSystemSharedDTOJob }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOJob } & { form: BuildSystemSharedDTOJob }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOJob } & { form: BuildSystemSharedDTOJob }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOJob } & { form: BuildSystemSharedDTOJob }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOJob } & { form: BuildSystemSharedDTOJob }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOJob } & { form: BuildSystemSharedDTOJob }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOJob } & { form: BuildSystemSharedDTOJob }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOJob } & { form: BuildSystemSharedDTOJob }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/jobs/:jobID': {
      $delete:
        | { input: { param: { jobID: number } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { jobID: number } }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { jobID: number } } & {
              query: { isIncludeDeleted?: boolean | undefined }
            }
            output: BuildSystemSharedDTOJob
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobID: number } } & {
              query: { isIncludeDeleted?: boolean | undefined }
            }
            output: BuildSystemSharedDTOJob
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { jobID: number } } & {
              query: { isIncludeDeleted?: boolean | undefined }
            }
            output: BuildSystemSharedDTOJob
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { jobID: number } } & {
              query: { isIncludeDeleted?: boolean | undefined }
            }
            output: BuildSystemSharedDTOJob
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { jobID: number } } & {
              query: { isIncludeDeleted?: boolean | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobID: number } } & {
              query: { isIncludeDeleted?: boolean | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { jobID: number } } & {
              query: { isIncludeDeleted?: boolean | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { jobID: number } } & {
              query: { isIncludeDeleted?: boolean | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { jobID: number } } & { json: BuildSystemSharedDTOJob } & {
              form: BuildSystemSharedDTOJob
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { jobID: number } } & { json: BuildSystemSharedDTOJob } & {
              form: BuildSystemSharedDTOJob
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/steps': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: APIPagedResponseBuildSystemSharedDTOStep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: APIPagedResponseBuildSystemSharedDTOStep
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                includeDeleted?: boolean | undefined
              }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: BuildSystemSharedDTOStep } & { form: BuildSystemSharedDTOStep }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOStep } & { form: BuildSystemSharedDTOStep }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOStep } & { form: BuildSystemSharedDTOStep }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOStep } & { form: BuildSystemSharedDTOStep }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOStep } & { form: BuildSystemSharedDTOStep }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOStep } & { form: BuildSystemSharedDTOStep }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOStep } & { form: BuildSystemSharedDTOStep }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: BuildSystemSharedDTOStep } & { form: BuildSystemSharedDTOStep }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v2/steps/:stepID': {
      $get:
        | {
            input: { param: { stepID: number } } & {
              query: { isIncludeDeleted?: boolean | undefined }
            }
            output: BuildSystemSharedDTOStep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stepID: number } } & {
              query: { isIncludeDeleted?: boolean | undefined }
            }
            output: BuildSystemSharedDTOStep
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { stepID: number } } & {
              query: { isIncludeDeleted?: boolean | undefined }
            }
            output: BuildSystemSharedDTOStep
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { stepID: number } } & {
              query: { isIncludeDeleted?: boolean | undefined }
            }
            output: BuildSystemSharedDTOStep
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { stepID: number } } & {
              query: { isIncludeDeleted?: boolean | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stepID: number } } & {
              query: { isIncludeDeleted?: boolean | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { stepID: number } } & {
              query: { isIncludeDeleted?: boolean | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { stepID: number } } & {
              query: { isIncludeDeleted?: boolean | undefined }
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { stepID: number } } & { json: BuildSystemSharedDTOStep } & {
              form: BuildSystemSharedDTOStep
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { stepID: number } } & { json: BuildSystemSharedDTOStep } & {
              form: BuildSystemSharedDTOStep
            }
            output: APIModelsApiError
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
