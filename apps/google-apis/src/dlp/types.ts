type GooglePrivacyDlpV2InfoTypeCategory = {
  industryCategory?:
    | 'INDUSTRY_UNSPECIFIED'
    | 'FINANCE'
    | 'HEALTH'
    | 'TELECOMMUNICATIONS'
    | undefined
  locationCategory?:
    | 'LOCATION_UNSPECIFIED'
    | 'GLOBAL'
    | 'ARGENTINA'
    | 'AUSTRALIA'
    | 'BELGIUM'
    | 'BRAZIL'
    | 'CANADA'
    | 'CHILE'
    | 'CHINA'
    | 'COLOMBIA'
    | 'CROATIA'
    | 'DENMARK'
    | 'FRANCE'
    | 'FINLAND'
    | 'GERMANY'
    | 'HONG_KONG'
    | 'INDIA'
    | 'INDONESIA'
    | 'IRELAND'
    | 'ISRAEL'
    | 'ITALY'
    | 'JAPAN'
    | 'KOREA'
    | 'MEXICO'
    | 'NEW_ZEALAND'
    | 'THE_NETHERLANDS'
    | 'NORWAY'
    | 'PARAGUAY'
    | 'PERU'
    | 'POLAND'
    | 'PORTUGAL'
    | 'SINGAPORE'
    | 'SOUTH_AFRICA'
    | 'SPAIN'
    | 'SWEDEN'
    | 'TAIWAN'
    | 'THAILAND'
    | 'TURKEY'
    | 'UNITED_KINGDOM'
    | 'UNITED_STATES'
    | 'URUGUAY'
    | 'VENEZUELA'
    | 'INTERNAL'
    | undefined
  typeCategory?:
    | 'TYPE_UNSPECIFIED'
    | 'PII'
    | 'SPII'
    | 'DEMOGRAPHIC'
    | 'CREDENTIAL'
    | 'GOVERNMENT_ID'
    | 'DOCUMENT'
    | 'CONTEXTUAL_INFORMATION'
    | undefined
}
type GooglePrivacyDlpV2SensitivityScore = {
  score?:
    | 'SENSITIVITY_SCORE_UNSPECIFIED'
    | 'SENSITIVITY_LOW'
    | 'SENSITIVITY_MODERATE'
    | 'SENSITIVITY_HIGH'
    | undefined
}
type GooglePrivacyDlpV2VersionDescription = {
  description?: string | undefined
  version?: string | undefined
}
type GooglePrivacyDlpV2InfoTypeDescription = {
  categories?: GooglePrivacyDlpV2InfoTypeCategory[] | undefined
  description?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
  sensitivityScore?: GooglePrivacyDlpV2SensitivityScore | undefined
  supportedBy?: ('ENUM_TYPE_UNSPECIFIED' | 'INSPECT' | 'RISK_ANALYSIS')[] | undefined
  versions?: GooglePrivacyDlpV2VersionDescription[] | undefined
}
type GooglePrivacyDlpV2ListInfoTypesResponse = {
  infoTypes?: GooglePrivacyDlpV2InfoTypeDescription[] | undefined
}
type GoogleProtobufEmpty = { [x: string]: unknown }
type GooglePrivacyDlpV2CloudStoragePath = { path?: string | undefined }
type GooglePrivacyDlpV2WordList = { words?: string[] | undefined }
type GooglePrivacyDlpV2Dictionary = {
  cloudStoragePath?: GooglePrivacyDlpV2CloudStoragePath | undefined
  wordList?: GooglePrivacyDlpV2WordList | undefined
}
type GooglePrivacyDlpV2FieldId = { name?: string | undefined }
type GooglePrivacyDlpV2BigQueryTable = {
  datasetId?: string | undefined
  projectId?: string | undefined
  tableId?: string | undefined
}
type GooglePrivacyDlpV2BigQueryField = {
  field?: GooglePrivacyDlpV2FieldId | undefined
  table?: GooglePrivacyDlpV2BigQueryTable | undefined
}
type GooglePrivacyDlpV2CloudStorageFileSet = { url?: string | undefined }
type GooglePrivacyDlpV2LargeCustomDictionaryConfig = {
  bigQueryField?: GooglePrivacyDlpV2BigQueryField | undefined
  cloudStorageFileSet?: GooglePrivacyDlpV2CloudStorageFileSet | undefined
  outputPath?: GooglePrivacyDlpV2CloudStoragePath | undefined
}
type GooglePrivacyDlpV2Regex = { groupIndexes?: number[] | undefined; pattern?: string | undefined }
type GooglePrivacyDlpV2StoredInfoTypeConfig = {
  description?: string | undefined
  dictionary?: GooglePrivacyDlpV2Dictionary | undefined
  displayName?: string | undefined
  largeCustomDictionary?: GooglePrivacyDlpV2LargeCustomDictionaryConfig | undefined
  regex?: GooglePrivacyDlpV2Regex | undefined
}
type GoogleRpcStatus = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type GooglePrivacyDlpV2Error = {
  details?: GoogleRpcStatus | undefined
  timestamps?: string[] | undefined
}
type GooglePrivacyDlpV2LargeCustomDictionaryStats = { approxNumPhrases?: string | undefined }
type GooglePrivacyDlpV2StoredInfoTypeStats = {
  largeCustomDictionary?: GooglePrivacyDlpV2LargeCustomDictionaryStats | undefined
}
type GooglePrivacyDlpV2StoredInfoTypeVersion = {
  config?: GooglePrivacyDlpV2StoredInfoTypeConfig | undefined
  createTime?: string | undefined
  errors?: GooglePrivacyDlpV2Error[] | undefined
  state?:
    | 'STORED_INFO_TYPE_STATE_UNSPECIFIED'
    | 'PENDING'
    | 'READY'
    | 'FAILED'
    | 'INVALID'
    | undefined
  stats?: GooglePrivacyDlpV2StoredInfoTypeStats | undefined
}
type GooglePrivacyDlpV2StoredInfoType = {
  currentVersion?: GooglePrivacyDlpV2StoredInfoTypeVersion | undefined
  name?: string | undefined
  pendingVersions?: GooglePrivacyDlpV2StoredInfoTypeVersion[] | undefined
}
type GooglePrivacyDlpV2UpdateStoredInfoTypeRequest = {
  config?: GooglePrivacyDlpV2StoredInfoTypeConfig | undefined
  updateMask?: string | undefined
}
type GooglePrivacyDlpV2ActivateJobTriggerRequest = { [x: string]: unknown }
type GooglePrivacyDlpV2DeidentifyDataSourceStats = {
  transformationCount?: string | undefined
  transformationErrorCount?: string | undefined
  transformedBytes?: string | undefined
}
type GooglePrivacyDlpV2AllInfoTypes = { [x: string]: unknown }
type GooglePrivacyDlpV2AllText = { [x: string]: unknown }
type GooglePrivacyDlpV2Color = {
  blue?: number | undefined
  green?: number | undefined
  red?: number | undefined
}
type GooglePrivacyDlpV2InfoType = { name?: string | undefined; version?: string | undefined }
type GooglePrivacyDlpV2SelectedInfoTypes = { infoTypes?: GooglePrivacyDlpV2InfoType[] | undefined }
type GooglePrivacyDlpV2ImageTransformation = {
  allInfoTypes?: GooglePrivacyDlpV2AllInfoTypes | undefined
  allText?: GooglePrivacyDlpV2AllText | undefined
  redactionColor?: GooglePrivacyDlpV2Color | undefined
  selectedInfoTypes?: GooglePrivacyDlpV2SelectedInfoTypes | undefined
}
type GooglePrivacyDlpV2ImageTransformations = {
  transforms?: GooglePrivacyDlpV2ImageTransformation[] | undefined
}
type GoogleTypeDate = {
  day?: number | undefined
  month?: number | undefined
  year?: number | undefined
}
type GoogleTypeTimeOfDay = {
  hours?: number | undefined
  minutes?: number | undefined
  nanos?: number | undefined
  seconds?: number | undefined
}
type GooglePrivacyDlpV2Value = {
  booleanValue?: boolean | undefined
  dateValue?: GoogleTypeDate | undefined
  dayOfWeekValue?:
    | 'DAY_OF_WEEK_UNSPECIFIED'
    | 'MONDAY'
    | 'TUESDAY'
    | 'WEDNESDAY'
    | 'THURSDAY'
    | 'FRIDAY'
    | 'SATURDAY'
    | 'SUNDAY'
    | undefined
  floatValue?: number | undefined
  integerValue?: string | undefined
  stringValue?: string | undefined
  timeValue?: GoogleTypeTimeOfDay | undefined
  timestampValue?: string | undefined
}
type GooglePrivacyDlpV2Bucket = {
  max?: GooglePrivacyDlpV2Value | undefined
  min?: GooglePrivacyDlpV2Value | undefined
  replacementValue?: GooglePrivacyDlpV2Value | undefined
}
type GooglePrivacyDlpV2BucketingConfig = { buckets?: GooglePrivacyDlpV2Bucket[] | undefined }
type GooglePrivacyDlpV2CharsToIgnore = {
  charactersToSkip?: string | undefined
  commonCharactersToIgnore?:
    | 'COMMON_CHARS_TO_IGNORE_UNSPECIFIED'
    | 'NUMERIC'
    | 'ALPHA_UPPER_CASE'
    | 'ALPHA_LOWER_CASE'
    | 'PUNCTUATION'
    | 'WHITESPACE'
    | undefined
}
type GooglePrivacyDlpV2CharacterMaskConfig = {
  charactersToIgnore?: GooglePrivacyDlpV2CharsToIgnore[] | undefined
  maskingCharacter?: string | undefined
  numberToMask?: number | undefined
  reverseOrder?: boolean | undefined
}
type GooglePrivacyDlpV2KmsWrappedCryptoKey = {
  cryptoKeyName?: string | undefined
  wrappedKey?: string | undefined
}
type GooglePrivacyDlpV2TransientCryptoKey = { name?: string | undefined }
type GooglePrivacyDlpV2UnwrappedCryptoKey = { key?: string | undefined }
type GooglePrivacyDlpV2CryptoKey = {
  kmsWrapped?: GooglePrivacyDlpV2KmsWrappedCryptoKey | undefined
  transient?: GooglePrivacyDlpV2TransientCryptoKey | undefined
  unwrapped?: GooglePrivacyDlpV2UnwrappedCryptoKey | undefined
}
type GooglePrivacyDlpV2CryptoDeterministicConfig = {
  context?: GooglePrivacyDlpV2FieldId | undefined
  cryptoKey?: GooglePrivacyDlpV2CryptoKey | undefined
  surrogateInfoType?: GooglePrivacyDlpV2InfoType | undefined
}
type GooglePrivacyDlpV2CryptoHashConfig = { cryptoKey?: GooglePrivacyDlpV2CryptoKey | undefined }
type GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig = {
  commonAlphabet?:
    | 'FFX_COMMON_NATIVE_ALPHABET_UNSPECIFIED'
    | 'NUMERIC'
    | 'HEXADECIMAL'
    | 'UPPER_CASE_ALPHA_NUMERIC'
    | 'ALPHA_NUMERIC'
    | undefined
  context?: GooglePrivacyDlpV2FieldId | undefined
  cryptoKey?: GooglePrivacyDlpV2CryptoKey | undefined
  customAlphabet?: string | undefined
  radix?: number | undefined
  surrogateInfoType?: GooglePrivacyDlpV2InfoType | undefined
}
type GooglePrivacyDlpV2DateShiftConfig = {
  context?: GooglePrivacyDlpV2FieldId | undefined
  cryptoKey?: GooglePrivacyDlpV2CryptoKey | undefined
  lowerBoundDays?: number | undefined
  upperBoundDays?: number | undefined
}
type GooglePrivacyDlpV2FixedSizeBucketingConfig = {
  bucketSize?: number | undefined
  lowerBound?: GooglePrivacyDlpV2Value | undefined
  upperBound?: GooglePrivacyDlpV2Value | undefined
}
type GooglePrivacyDlpV2RedactConfig = { [x: string]: unknown }
type GooglePrivacyDlpV2ReplaceValueConfig = { newValue?: GooglePrivacyDlpV2Value | undefined }
type GooglePrivacyDlpV2ReplaceDictionaryConfig = {
  wordList?: GooglePrivacyDlpV2WordList | undefined
}
type GooglePrivacyDlpV2ReplaceWithInfoTypeConfig = { [x: string]: unknown }
type GooglePrivacyDlpV2TimePartConfig = {
  partToExtract?:
    | 'TIME_PART_UNSPECIFIED'
    | 'YEAR'
    | 'MONTH'
    | 'DAY_OF_MONTH'
    | 'DAY_OF_WEEK'
    | 'WEEK_OF_YEAR'
    | 'HOUR_OF_DAY'
    | undefined
}
type GooglePrivacyDlpV2PrimitiveTransformation = {
  bucketingConfig?: GooglePrivacyDlpV2BucketingConfig | undefined
  characterMaskConfig?: GooglePrivacyDlpV2CharacterMaskConfig | undefined
  cryptoDeterministicConfig?: GooglePrivacyDlpV2CryptoDeterministicConfig | undefined
  cryptoHashConfig?: GooglePrivacyDlpV2CryptoHashConfig | undefined
  cryptoReplaceFfxFpeConfig?: GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig | undefined
  dateShiftConfig?: GooglePrivacyDlpV2DateShiftConfig | undefined
  fixedSizeBucketingConfig?: GooglePrivacyDlpV2FixedSizeBucketingConfig | undefined
  redactConfig?: GooglePrivacyDlpV2RedactConfig | undefined
  replaceConfig?: GooglePrivacyDlpV2ReplaceValueConfig | undefined
  replaceDictionaryConfig?: GooglePrivacyDlpV2ReplaceDictionaryConfig | undefined
  replaceWithInfoTypeConfig?: GooglePrivacyDlpV2ReplaceWithInfoTypeConfig | undefined
  timePartConfig?: GooglePrivacyDlpV2TimePartConfig | undefined
}
type GooglePrivacyDlpV2InfoTypeTransformation = {
  infoTypes?: GooglePrivacyDlpV2InfoType[] | undefined
  primitiveTransformation?: GooglePrivacyDlpV2PrimitiveTransformation | undefined
}
type GooglePrivacyDlpV2InfoTypeTransformations = {
  transformations?: GooglePrivacyDlpV2InfoTypeTransformation[] | undefined
}
type GooglePrivacyDlpV2Condition = {
  field?: GooglePrivacyDlpV2FieldId | undefined
  operator?:
    | 'RELATIONAL_OPERATOR_UNSPECIFIED'
    | 'EQUAL_TO'
    | 'NOT_EQUAL_TO'
    | 'GREATER_THAN'
    | 'LESS_THAN'
    | 'GREATER_THAN_OR_EQUALS'
    | 'LESS_THAN_OR_EQUALS'
    | 'EXISTS'
    | undefined
  value?: GooglePrivacyDlpV2Value | undefined
}
type GooglePrivacyDlpV2Conditions = { conditions?: GooglePrivacyDlpV2Condition[] | undefined }
type GooglePrivacyDlpV2Expressions = {
  conditions?: GooglePrivacyDlpV2Conditions | undefined
  logicalOperator?: 'LOGICAL_OPERATOR_UNSPECIFIED' | 'AND' | undefined
}
type GooglePrivacyDlpV2RecordCondition = { expressions?: GooglePrivacyDlpV2Expressions | undefined }
type GooglePrivacyDlpV2FieldTransformation = {
  condition?: GooglePrivacyDlpV2RecordCondition | undefined
  fields?: GooglePrivacyDlpV2FieldId[] | undefined
  infoTypeTransformations?: GooglePrivacyDlpV2InfoTypeTransformations | undefined
  primitiveTransformation?: GooglePrivacyDlpV2PrimitiveTransformation | undefined
}
type GooglePrivacyDlpV2RecordSuppression = {
  condition?: GooglePrivacyDlpV2RecordCondition | undefined
}
type GooglePrivacyDlpV2RecordTransformations = {
  fieldTransformations?: GooglePrivacyDlpV2FieldTransformation[] | undefined
  recordSuppressions?: GooglePrivacyDlpV2RecordSuppression[] | undefined
}
type GooglePrivacyDlpV2LeaveUntransformed = { [x: string]: unknown }
type GooglePrivacyDlpV2ThrowError = { [x: string]: unknown }
type GooglePrivacyDlpV2TransformationErrorHandling = {
  leaveUntransformed?: GooglePrivacyDlpV2LeaveUntransformed | undefined
  throwError?: GooglePrivacyDlpV2ThrowError | undefined
}
type GooglePrivacyDlpV2DeidentifyConfig = {
  imageTransformations?: GooglePrivacyDlpV2ImageTransformations | undefined
  infoTypeTransformations?: GooglePrivacyDlpV2InfoTypeTransformations | undefined
  recordTransformations?: GooglePrivacyDlpV2RecordTransformations | undefined
  transformationErrorHandling?: GooglePrivacyDlpV2TransformationErrorHandling | undefined
}
type GooglePrivacyDlpV2DeidentifyTemplate = {
  createTime?: string | undefined
  deidentifyConfig?: GooglePrivacyDlpV2DeidentifyConfig | undefined
  description?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
  updateTime?: string | undefined
}
type GooglePrivacyDlpV2RequestedDeidentifyOptions = {
  snapshotDeidentifyTemplate?: GooglePrivacyDlpV2DeidentifyTemplate | undefined
  snapshotImageRedactTemplate?: GooglePrivacyDlpV2DeidentifyTemplate | undefined
  snapshotStructuredDeidentifyTemplate?: GooglePrivacyDlpV2DeidentifyTemplate | undefined
}
type GooglePrivacyDlpV2DeidentifyDataSourceDetails = {
  deidentifyStats?: GooglePrivacyDlpV2DeidentifyDataSourceStats | undefined
  requestedOptions?: GooglePrivacyDlpV2RequestedDeidentifyOptions | undefined
}
type GooglePrivacyDlpV2ActionDetails = {
  deidentifyDetails?: GooglePrivacyDlpV2DeidentifyDataSourceDetails | undefined
}
type GooglePrivacyDlpV2TransformationConfig = {
  deidentifyTemplate?: string | undefined
  imageRedactTemplate?: string | undefined
  structuredDeidentifyTemplate?: string | undefined
}
type GooglePrivacyDlpV2TransformationDetailsStorageConfig = {
  table?: GooglePrivacyDlpV2BigQueryTable | undefined
}
type GooglePrivacyDlpV2Deidentify = {
  cloudStorageOutput?: string | undefined
  fileTypesToTransform?:
    | (
        | 'FILE_TYPE_UNSPECIFIED'
        | 'BINARY_FILE'
        | 'TEXT_FILE'
        | 'IMAGE'
        | 'WORD'
        | 'PDF'
        | 'AVRO'
        | 'CSV'
        | 'TSV'
        | 'POWERPOINT'
        | 'EXCEL'
      )[]
    | undefined
  transformationConfig?: GooglePrivacyDlpV2TransformationConfig | undefined
  transformationDetailsStorageConfig?:
    | GooglePrivacyDlpV2TransformationDetailsStorageConfig
    | undefined
}
type GooglePrivacyDlpV2JobNotificationEmails = { [x: string]: unknown }
type GooglePrivacyDlpV2PublishToPubSub = { topic?: string | undefined }
type GooglePrivacyDlpV2PublishFindingsToCloudDataCatalog = { [x: string]: unknown }
type GooglePrivacyDlpV2PublishSummaryToCscc = { [x: string]: unknown }
type GooglePrivacyDlpV2PublishToStackdriver = { [x: string]: unknown }
type GooglePrivacyDlpV2OutputStorageConfig = {
  outputSchema?:
    | 'OUTPUT_SCHEMA_UNSPECIFIED'
    | 'BASIC_COLUMNS'
    | 'GCS_COLUMNS'
    | 'DATASTORE_COLUMNS'
    | 'BIG_QUERY_COLUMNS'
    | 'ALL_COLUMNS'
    | undefined
  table?: GooglePrivacyDlpV2BigQueryTable | undefined
}
type GooglePrivacyDlpV2SaveFindings = {
  outputConfig?: GooglePrivacyDlpV2OutputStorageConfig | undefined
}
type GooglePrivacyDlpV2Action = {
  deidentify?: GooglePrivacyDlpV2Deidentify | undefined
  jobNotificationEmails?: GooglePrivacyDlpV2JobNotificationEmails | undefined
  pubSub?: GooglePrivacyDlpV2PublishToPubSub | undefined
  publishFindingsToCloudDataCatalog?:
    | GooglePrivacyDlpV2PublishFindingsToCloudDataCatalog
    | undefined
  publishSummaryToCscc?: GooglePrivacyDlpV2PublishSummaryToCscc | undefined
  publishToStackdriver?: GooglePrivacyDlpV2PublishToStackdriver | undefined
  saveFindings?: GooglePrivacyDlpV2SaveFindings | undefined
}
type GooglePrivacyDlpV2LikelihoodAdjustment = {
  fixedLikelihood?:
    | 'LIKELIHOOD_UNSPECIFIED'
    | 'VERY_UNLIKELY'
    | 'UNLIKELY'
    | 'POSSIBLE'
    | 'LIKELY'
    | 'VERY_LIKELY'
    | undefined
  relativeLikelihood?: number | undefined
}
type GooglePrivacyDlpV2Proximity = {
  windowAfter?: number | undefined
  windowBefore?: number | undefined
}
type GooglePrivacyDlpV2HotwordRule = {
  hotwordRegex?: GooglePrivacyDlpV2Regex | undefined
  likelihoodAdjustment?: GooglePrivacyDlpV2LikelihoodAdjustment | undefined
  proximity?: GooglePrivacyDlpV2Proximity | undefined
}
type GooglePrivacyDlpV2DetectionRule = { hotwordRule?: GooglePrivacyDlpV2HotwordRule | undefined }
type GooglePrivacyDlpV2StoredType = { createTime?: string | undefined; name?: string | undefined }
type GooglePrivacyDlpV2SurrogateType = { [x: string]: unknown }
type GooglePrivacyDlpV2CustomInfoType = {
  detectionRules?: GooglePrivacyDlpV2DetectionRule[] | undefined
  dictionary?: GooglePrivacyDlpV2Dictionary | undefined
  exclusionType?: 'EXCLUSION_TYPE_UNSPECIFIED' | 'EXCLUSION_TYPE_EXCLUDE' | undefined
  infoType?: GooglePrivacyDlpV2InfoType | undefined
  likelihood?:
    | 'LIKELIHOOD_UNSPECIFIED'
    | 'VERY_UNLIKELY'
    | 'UNLIKELY'
    | 'POSSIBLE'
    | 'LIKELY'
    | 'VERY_LIKELY'
    | undefined
  regex?: GooglePrivacyDlpV2Regex | undefined
  storedType?: GooglePrivacyDlpV2StoredType | undefined
  surrogateType?: GooglePrivacyDlpV2SurrogateType | undefined
}
type GooglePrivacyDlpV2InfoTypeLimit = {
  infoType?: GooglePrivacyDlpV2InfoType | undefined
  maxFindings?: number | undefined
}
type GooglePrivacyDlpV2FindingLimits = {
  maxFindingsPerInfoType?: GooglePrivacyDlpV2InfoTypeLimit[] | undefined
  maxFindingsPerItem?: number | undefined
  maxFindingsPerRequest?: number | undefined
}
type GooglePrivacyDlpV2ExcludeByHotword = {
  hotwordRegex?: GooglePrivacyDlpV2Regex | undefined
  proximity?: GooglePrivacyDlpV2Proximity | undefined
}
type GooglePrivacyDlpV2ExcludeInfoTypes = { infoTypes?: GooglePrivacyDlpV2InfoType[] | undefined }
type GooglePrivacyDlpV2ExclusionRule = {
  dictionary?: GooglePrivacyDlpV2Dictionary | undefined
  excludeByHotword?: GooglePrivacyDlpV2ExcludeByHotword | undefined
  excludeInfoTypes?: GooglePrivacyDlpV2ExcludeInfoTypes | undefined
  matchingType?:
    | 'MATCHING_TYPE_UNSPECIFIED'
    | 'MATCHING_TYPE_FULL_MATCH'
    | 'MATCHING_TYPE_PARTIAL_MATCH'
    | 'MATCHING_TYPE_INVERSE_MATCH'
    | undefined
  regex?: GooglePrivacyDlpV2Regex | undefined
}
type GooglePrivacyDlpV2InspectionRule = {
  exclusionRule?: GooglePrivacyDlpV2ExclusionRule | undefined
  hotwordRule?: GooglePrivacyDlpV2HotwordRule | undefined
}
type GooglePrivacyDlpV2InspectionRuleSet = {
  infoTypes?: GooglePrivacyDlpV2InfoType[] | undefined
  rules?: GooglePrivacyDlpV2InspectionRule[] | undefined
}
type GooglePrivacyDlpV2InspectConfig = {
  contentOptions?: ('CONTENT_UNSPECIFIED' | 'CONTENT_TEXT' | 'CONTENT_IMAGE')[] | undefined
  customInfoTypes?: GooglePrivacyDlpV2CustomInfoType[] | undefined
  excludeInfoTypes?: boolean | undefined
  includeQuote?: boolean | undefined
  infoTypes?: GooglePrivacyDlpV2InfoType[] | undefined
  limits?: GooglePrivacyDlpV2FindingLimits | undefined
  minLikelihood?:
    | 'LIKELIHOOD_UNSPECIFIED'
    | 'VERY_UNLIKELY'
    | 'UNLIKELY'
    | 'POSSIBLE'
    | 'LIKELY'
    | 'VERY_LIKELY'
    | undefined
  ruleSet?: GooglePrivacyDlpV2InspectionRuleSet[] | undefined
}
type GooglePrivacyDlpV2BigQueryOptions = {
  excludedFields?: GooglePrivacyDlpV2FieldId[] | undefined
  identifyingFields?: GooglePrivacyDlpV2FieldId[] | undefined
  includedFields?: GooglePrivacyDlpV2FieldId[] | undefined
  rowsLimit?: string | undefined
  rowsLimitPercent?: number | undefined
  sampleMethod?: 'SAMPLE_METHOD_UNSPECIFIED' | 'TOP' | 'RANDOM_START' | undefined
  tableReference?: GooglePrivacyDlpV2BigQueryTable | undefined
}
type GooglePrivacyDlpV2CloudStorageRegexFileSet = {
  bucketName?: string | undefined
  excludeRegex?: string[] | undefined
  includeRegex?: string[] | undefined
}
type GooglePrivacyDlpV2FileSet = {
  regexFileSet?: GooglePrivacyDlpV2CloudStorageRegexFileSet | undefined
  url?: string | undefined
}
type GooglePrivacyDlpV2CloudStorageOptions = {
  bytesLimitPerFile?: string | undefined
  bytesLimitPerFilePercent?: number | undefined
  fileSet?: GooglePrivacyDlpV2FileSet | undefined
  fileTypes?:
    | (
        | 'FILE_TYPE_UNSPECIFIED'
        | 'BINARY_FILE'
        | 'TEXT_FILE'
        | 'IMAGE'
        | 'WORD'
        | 'PDF'
        | 'AVRO'
        | 'CSV'
        | 'TSV'
        | 'POWERPOINT'
        | 'EXCEL'
      )[]
    | undefined
  filesLimitPercent?: number | undefined
  sampleMethod?: 'SAMPLE_METHOD_UNSPECIFIED' | 'TOP' | 'RANDOM_START' | undefined
}
type GooglePrivacyDlpV2KindExpression = { name?: string | undefined }
type GooglePrivacyDlpV2PartitionId = {
  namespaceId?: string | undefined
  projectId?: string | undefined
}
type GooglePrivacyDlpV2DatastoreOptions = {
  kind?: GooglePrivacyDlpV2KindExpression | undefined
  partitionId?: GooglePrivacyDlpV2PartitionId | undefined
}
type GooglePrivacyDlpV2TableOptions = {
  identifyingFields?: GooglePrivacyDlpV2FieldId[] | undefined
}
type GooglePrivacyDlpV2HybridOptions = {
  description?: string | undefined
  labels?: { [x: string]: string } | undefined
  requiredFindingLabelKeys?: string[] | undefined
  tableOptions?: GooglePrivacyDlpV2TableOptions | undefined
}
type GooglePrivacyDlpV2TimespanConfig = {
  enableAutoPopulationOfTimespanConfig?: boolean | undefined
  endTime?: string | undefined
  startTime?: string | undefined
  timestampField?: GooglePrivacyDlpV2FieldId | undefined
}
type GooglePrivacyDlpV2StorageConfig = {
  bigQueryOptions?: GooglePrivacyDlpV2BigQueryOptions | undefined
  cloudStorageOptions?: GooglePrivacyDlpV2CloudStorageOptions | undefined
  datastoreOptions?: GooglePrivacyDlpV2DatastoreOptions | undefined
  hybridOptions?: GooglePrivacyDlpV2HybridOptions | undefined
  timespanConfig?: GooglePrivacyDlpV2TimespanConfig | undefined
}
type GooglePrivacyDlpV2InspectJobConfig = {
  actions?: GooglePrivacyDlpV2Action[] | undefined
  inspectConfig?: GooglePrivacyDlpV2InspectConfig | undefined
  inspectTemplateName?: string | undefined
  storageConfig?: GooglePrivacyDlpV2StorageConfig | undefined
}
type GooglePrivacyDlpV2InspectTemplate = {
  createTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  inspectConfig?: GooglePrivacyDlpV2InspectConfig | undefined
  name?: string | undefined
  updateTime?: string | undefined
}
type GooglePrivacyDlpV2RequestedOptions = {
  jobConfig?: GooglePrivacyDlpV2InspectJobConfig | undefined
  snapshotInspectTemplate?: GooglePrivacyDlpV2InspectTemplate | undefined
}
type GooglePrivacyDlpV2HybridInspectStatistics = {
  abortedCount?: string | undefined
  pendingCount?: string | undefined
  processedCount?: string | undefined
}
type GooglePrivacyDlpV2InfoTypeStats = {
  count?: string | undefined
  infoType?: GooglePrivacyDlpV2InfoType | undefined
}
type GooglePrivacyDlpV2Result = {
  hybridStats?: GooglePrivacyDlpV2HybridInspectStatistics | undefined
  infoTypeStats?: GooglePrivacyDlpV2InfoTypeStats[] | undefined
  processedBytes?: string | undefined
  totalEstimatedBytes?: string | undefined
}
type GooglePrivacyDlpV2InspectDataSourceDetails = {
  requestedOptions?: GooglePrivacyDlpV2RequestedOptions | undefined
  result?: GooglePrivacyDlpV2Result | undefined
}
type GooglePrivacyDlpV2ValueFrequency = {
  count?: string | undefined
  value?: GooglePrivacyDlpV2Value | undefined
}
type GooglePrivacyDlpV2CategoricalStatsHistogramBucket = {
  bucketSize?: string | undefined
  bucketValueCount?: string | undefined
  bucketValues?: GooglePrivacyDlpV2ValueFrequency[] | undefined
  valueFrequencyLowerBound?: string | undefined
  valueFrequencyUpperBound?: string | undefined
}
type GooglePrivacyDlpV2CategoricalStatsResult = {
  valueFrequencyHistogramBuckets?: GooglePrivacyDlpV2CategoricalStatsHistogramBucket[] | undefined
}
type GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues = {
  estimatedProbability?: number | undefined
  quasiIdsValues?: GooglePrivacyDlpV2Value[] | undefined
}
type GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket = {
  bucketSize?: string | undefined
  bucketValueCount?: string | undefined
  bucketValues?: GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues[] | undefined
  maxProbability?: number | undefined
  minProbability?: number | undefined
}
type GooglePrivacyDlpV2DeltaPresenceEstimationResult = {
  deltaPresenceEstimationHistogram?:
    | GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket[]
    | undefined
}
type GooglePrivacyDlpV2KAnonymityEquivalenceClass = {
  equivalenceClassSize?: string | undefined
  quasiIdsValues?: GooglePrivacyDlpV2Value[] | undefined
}
type GooglePrivacyDlpV2KAnonymityHistogramBucket = {
  bucketSize?: string | undefined
  bucketValueCount?: string | undefined
  bucketValues?: GooglePrivacyDlpV2KAnonymityEquivalenceClass[] | undefined
  equivalenceClassSizeLowerBound?: string | undefined
  equivalenceClassSizeUpperBound?: string | undefined
}
type GooglePrivacyDlpV2KAnonymityResult = {
  equivalenceClassHistogramBuckets?: GooglePrivacyDlpV2KAnonymityHistogramBucket[] | undefined
}
type GooglePrivacyDlpV2KMapEstimationQuasiIdValues = {
  estimatedAnonymity?: string | undefined
  quasiIdsValues?: GooglePrivacyDlpV2Value[] | undefined
}
type GooglePrivacyDlpV2KMapEstimationHistogramBucket = {
  bucketSize?: string | undefined
  bucketValueCount?: string | undefined
  bucketValues?: GooglePrivacyDlpV2KMapEstimationQuasiIdValues[] | undefined
  maxAnonymity?: string | undefined
  minAnonymity?: string | undefined
}
type GooglePrivacyDlpV2KMapEstimationResult = {
  kMapEstimationHistogram?: GooglePrivacyDlpV2KMapEstimationHistogramBucket[] | undefined
}
type GooglePrivacyDlpV2LDiversityEquivalenceClass = {
  equivalenceClassSize?: string | undefined
  numDistinctSensitiveValues?: string | undefined
  quasiIdsValues?: GooglePrivacyDlpV2Value[] | undefined
  topSensitiveValues?: GooglePrivacyDlpV2ValueFrequency[] | undefined
}
type GooglePrivacyDlpV2LDiversityHistogramBucket = {
  bucketSize?: string | undefined
  bucketValueCount?: string | undefined
  bucketValues?: GooglePrivacyDlpV2LDiversityEquivalenceClass[] | undefined
  sensitiveValueFrequencyLowerBound?: string | undefined
  sensitiveValueFrequencyUpperBound?: string | undefined
}
type GooglePrivacyDlpV2LDiversityResult = {
  sensitiveValueFrequencyHistogramBuckets?:
    | GooglePrivacyDlpV2LDiversityHistogramBucket[]
    | undefined
}
type GooglePrivacyDlpV2NumericalStatsResult = {
  maxValue?: GooglePrivacyDlpV2Value | undefined
  minValue?: GooglePrivacyDlpV2Value | undefined
  quantileValues?: GooglePrivacyDlpV2Value[] | undefined
}
type GooglePrivacyDlpV2CategoricalStatsConfig = { field?: GooglePrivacyDlpV2FieldId | undefined }
type GooglePrivacyDlpV2QuasiIdentifierField = {
  customTag?: string | undefined
  field?: GooglePrivacyDlpV2FieldId | undefined
}
type GooglePrivacyDlpV2StatisticalTable = {
  quasiIds?: GooglePrivacyDlpV2QuasiIdentifierField[] | undefined
  relativeFrequency?: GooglePrivacyDlpV2FieldId | undefined
  table?: GooglePrivacyDlpV2BigQueryTable | undefined
}
type GooglePrivacyDlpV2QuasiId = {
  customTag?: string | undefined
  field?: GooglePrivacyDlpV2FieldId | undefined
  inferred?: GoogleProtobufEmpty | undefined
  infoType?: GooglePrivacyDlpV2InfoType | undefined
}
type GooglePrivacyDlpV2DeltaPresenceEstimationConfig = {
  auxiliaryTables?: GooglePrivacyDlpV2StatisticalTable[] | undefined
  quasiIds?: GooglePrivacyDlpV2QuasiId[] | undefined
  regionCode?: string | undefined
}
type GooglePrivacyDlpV2EntityId = { field?: GooglePrivacyDlpV2FieldId | undefined }
type GooglePrivacyDlpV2KAnonymityConfig = {
  entityId?: GooglePrivacyDlpV2EntityId | undefined
  quasiIds?: GooglePrivacyDlpV2FieldId[] | undefined
}
type GooglePrivacyDlpV2QuasiIdField = {
  customTag?: string | undefined
  field?: GooglePrivacyDlpV2FieldId | undefined
}
type GooglePrivacyDlpV2AuxiliaryTable = {
  quasiIds?: GooglePrivacyDlpV2QuasiIdField[] | undefined
  relativeFrequency?: GooglePrivacyDlpV2FieldId | undefined
  table?: GooglePrivacyDlpV2BigQueryTable | undefined
}
type GooglePrivacyDlpV2TaggedField = {
  customTag?: string | undefined
  field?: GooglePrivacyDlpV2FieldId | undefined
  inferred?: GoogleProtobufEmpty | undefined
  infoType?: GooglePrivacyDlpV2InfoType | undefined
}
type GooglePrivacyDlpV2KMapEstimationConfig = {
  auxiliaryTables?: GooglePrivacyDlpV2AuxiliaryTable[] | undefined
  quasiIds?: GooglePrivacyDlpV2TaggedField[] | undefined
  regionCode?: string | undefined
}
type GooglePrivacyDlpV2LDiversityConfig = {
  quasiIds?: GooglePrivacyDlpV2FieldId[] | undefined
  sensitiveAttribute?: GooglePrivacyDlpV2FieldId | undefined
}
type GooglePrivacyDlpV2NumericalStatsConfig = { field?: GooglePrivacyDlpV2FieldId | undefined }
type GooglePrivacyDlpV2PrivacyMetric = {
  categoricalStatsConfig?: GooglePrivacyDlpV2CategoricalStatsConfig | undefined
  deltaPresenceEstimationConfig?: GooglePrivacyDlpV2DeltaPresenceEstimationConfig | undefined
  kAnonymityConfig?: GooglePrivacyDlpV2KAnonymityConfig | undefined
  kMapEstimationConfig?: GooglePrivacyDlpV2KMapEstimationConfig | undefined
  lDiversityConfig?: GooglePrivacyDlpV2LDiversityConfig | undefined
  numericalStatsConfig?: GooglePrivacyDlpV2NumericalStatsConfig | undefined
}
type GooglePrivacyDlpV2RiskAnalysisJobConfig = {
  actions?: GooglePrivacyDlpV2Action[] | undefined
  privacyMetric?: GooglePrivacyDlpV2PrivacyMetric | undefined
  sourceTable?: GooglePrivacyDlpV2BigQueryTable | undefined
}
type GooglePrivacyDlpV2RequestedRiskAnalysisOptions = {
  jobConfig?: GooglePrivacyDlpV2RiskAnalysisJobConfig | undefined
}
type GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails = {
  categoricalStatsResult?: GooglePrivacyDlpV2CategoricalStatsResult | undefined
  deltaPresenceEstimationResult?: GooglePrivacyDlpV2DeltaPresenceEstimationResult | undefined
  kAnonymityResult?: GooglePrivacyDlpV2KAnonymityResult | undefined
  kMapEstimationResult?: GooglePrivacyDlpV2KMapEstimationResult | undefined
  lDiversityResult?: GooglePrivacyDlpV2LDiversityResult | undefined
  numericalStatsResult?: GooglePrivacyDlpV2NumericalStatsResult | undefined
  requestedOptions?: GooglePrivacyDlpV2RequestedRiskAnalysisOptions | undefined
  requestedPrivacyMetric?: GooglePrivacyDlpV2PrivacyMetric | undefined
  requestedSourceTable?: GooglePrivacyDlpV2BigQueryTable | undefined
}
type GooglePrivacyDlpV2DlpJob = {
  actionDetails?: GooglePrivacyDlpV2ActionDetails[] | undefined
  createTime?: string | undefined
  endTime?: string | undefined
  errors?: GooglePrivacyDlpV2Error[] | undefined
  inspectDetails?: GooglePrivacyDlpV2InspectDataSourceDetails | undefined
  jobTriggerName?: string | undefined
  name?: string | undefined
  riskDetails?: GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails | undefined
  startTime?: string | undefined
  state?:
    | 'JOB_STATE_UNSPECIFIED'
    | 'PENDING'
    | 'RUNNING'
    | 'DONE'
    | 'CANCELED'
    | 'FAILED'
    | 'ACTIVE'
    | undefined
  type?: 'DLP_JOB_TYPE_UNSPECIFIED' | 'INSPECT_JOB' | 'RISK_ANALYSIS_JOB' | undefined
}
type GooglePrivacyDlpV2CancelDlpJobRequest = { [x: string]: unknown }
type GooglePrivacyDlpV2FinishDlpJobRequest = { [x: string]: unknown }
type GooglePrivacyDlpV2Container = {
  fullPath?: string | undefined
  projectId?: string | undefined
  relativePath?: string | undefined
  rootPath?: string | undefined
  type?: string | undefined
  updateTime?: string | undefined
  version?: string | undefined
}
type GooglePrivacyDlpV2HybridFindingDetails = {
  containerDetails?: GooglePrivacyDlpV2Container | undefined
  fileOffset?: string | undefined
  labels?: { [x: string]: string } | undefined
  rowOffset?: string | undefined
  tableOptions?: GooglePrivacyDlpV2TableOptions | undefined
}
type GooglePrivacyDlpV2ByteContentItem = {
  data?: string | undefined
  type?:
    | 'BYTES_TYPE_UNSPECIFIED'
    | 'IMAGE'
    | 'IMAGE_JPEG'
    | 'IMAGE_BMP'
    | 'IMAGE_PNG'
    | 'IMAGE_SVG'
    | 'TEXT_UTF8'
    | 'WORD_DOCUMENT'
    | 'PDF'
    | 'POWERPOINT_DOCUMENT'
    | 'EXCEL_DOCUMENT'
    | 'AVRO'
    | 'CSV'
    | 'TSV'
    | undefined
}
type GooglePrivacyDlpV2Row = { values?: GooglePrivacyDlpV2Value[] | undefined }
type GooglePrivacyDlpV2Table = {
  headers?: GooglePrivacyDlpV2FieldId[] | undefined
  rows?: GooglePrivacyDlpV2Row[] | undefined
}
type GooglePrivacyDlpV2ContentItem = {
  byteItem?: GooglePrivacyDlpV2ByteContentItem | undefined
  table?: GooglePrivacyDlpV2Table | undefined
  value?: string | undefined
}
type GooglePrivacyDlpV2HybridContentItem = {
  findingDetails?: GooglePrivacyDlpV2HybridFindingDetails | undefined
  item?: GooglePrivacyDlpV2ContentItem | undefined
}
type GooglePrivacyDlpV2HybridInspectJobTriggerRequest = {
  hybridItem?: GooglePrivacyDlpV2HybridContentItem | undefined
}
type GooglePrivacyDlpV2HybridInspectResponse = { [x: string]: unknown }
type GooglePrivacyDlpV2DeidentifyContentRequest = {
  deidentifyConfig?: GooglePrivacyDlpV2DeidentifyConfig | undefined
  deidentifyTemplateName?: string | undefined
  inspectConfig?: GooglePrivacyDlpV2InspectConfig | undefined
  inspectTemplateName?: string | undefined
  item?: GooglePrivacyDlpV2ContentItem | undefined
  locationId?: string | undefined
}
type GooglePrivacyDlpV2SummaryResult = {
  code?: 'TRANSFORMATION_RESULT_CODE_UNSPECIFIED' | 'SUCCESS' | 'ERROR' | undefined
  count?: string | undefined
  details?: string | undefined
}
type GooglePrivacyDlpV2TransformationSummary = {
  field?: GooglePrivacyDlpV2FieldId | undefined
  fieldTransformations?: GooglePrivacyDlpV2FieldTransformation[] | undefined
  infoType?: GooglePrivacyDlpV2InfoType | undefined
  recordSuppress?: GooglePrivacyDlpV2RecordSuppression | undefined
  results?: GooglePrivacyDlpV2SummaryResult[] | undefined
  transformation?: GooglePrivacyDlpV2PrimitiveTransformation | undefined
  transformedBytes?: string | undefined
}
type GooglePrivacyDlpV2TransformationOverview = {
  transformationSummaries?: GooglePrivacyDlpV2TransformationSummary[] | undefined
  transformedBytes?: string | undefined
}
type GooglePrivacyDlpV2DeidentifyContentResponse = {
  item?: GooglePrivacyDlpV2ContentItem | undefined
  overview?: GooglePrivacyDlpV2TransformationOverview | undefined
}
type GooglePrivacyDlpV2InspectContentRequest = {
  inspectConfig?: GooglePrivacyDlpV2InspectConfig | undefined
  inspectTemplateName?: string | undefined
  item?: GooglePrivacyDlpV2ContentItem | undefined
  locationId?: string | undefined
}
type GooglePrivacyDlpV2Range = { end?: string | undefined; start?: string | undefined }
type GooglePrivacyDlpV2DocumentLocation = { fileOffset?: string | undefined }
type GooglePrivacyDlpV2BoundingBox = {
  height?: number | undefined
  left?: number | undefined
  top?: number | undefined
  width?: number | undefined
}
type GooglePrivacyDlpV2ImageLocation = {
  boundingBoxes?: GooglePrivacyDlpV2BoundingBox[] | undefined
}
type GooglePrivacyDlpV2StorageMetadataLabel = { key?: string | undefined }
type GooglePrivacyDlpV2MetadataLocation = {
  storageLabel?: GooglePrivacyDlpV2StorageMetadataLabel | undefined
  type?: 'METADATATYPE_UNSPECIFIED' | 'STORAGE_METADATA' | undefined
}
type GooglePrivacyDlpV2BigQueryKey = {
  rowNumber?: string | undefined
  tableReference?: GooglePrivacyDlpV2BigQueryTable | undefined
}
type GooglePrivacyDlpV2PathElement = {
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
}
type GooglePrivacyDlpV2Key = {
  partitionId?: GooglePrivacyDlpV2PartitionId | undefined
  path?: GooglePrivacyDlpV2PathElement[] | undefined
}
type GooglePrivacyDlpV2DatastoreKey = { entityKey?: GooglePrivacyDlpV2Key | undefined }
type GooglePrivacyDlpV2RecordKey = {
  bigQueryKey?: GooglePrivacyDlpV2BigQueryKey | undefined
  datastoreKey?: GooglePrivacyDlpV2DatastoreKey | undefined
  idValues?: string[] | undefined
}
type GooglePrivacyDlpV2TableLocation = { rowIndex?: string | undefined }
type GooglePrivacyDlpV2RecordLocation = {
  fieldId?: GooglePrivacyDlpV2FieldId | undefined
  recordKey?: GooglePrivacyDlpV2RecordKey | undefined
  tableLocation?: GooglePrivacyDlpV2TableLocation | undefined
}
type GooglePrivacyDlpV2ContentLocation = {
  containerName?: string | undefined
  containerTimestamp?: string | undefined
  containerVersion?: string | undefined
  documentLocation?: GooglePrivacyDlpV2DocumentLocation | undefined
  imageLocation?: GooglePrivacyDlpV2ImageLocation | undefined
  metadataLocation?: GooglePrivacyDlpV2MetadataLocation | undefined
  recordLocation?: GooglePrivacyDlpV2RecordLocation | undefined
}
type GooglePrivacyDlpV2Location = {
  byteRange?: GooglePrivacyDlpV2Range | undefined
  codepointRange?: GooglePrivacyDlpV2Range | undefined
  container?: GooglePrivacyDlpV2Container | undefined
  contentLocations?: GooglePrivacyDlpV2ContentLocation[] | undefined
}
type GooglePrivacyDlpV2TimeZone = { offsetMinutes?: number | undefined }
type GooglePrivacyDlpV2DateTime = {
  date?: GoogleTypeDate | undefined
  dayOfWeek?:
    | 'DAY_OF_WEEK_UNSPECIFIED'
    | 'MONDAY'
    | 'TUESDAY'
    | 'WEDNESDAY'
    | 'THURSDAY'
    | 'FRIDAY'
    | 'SATURDAY'
    | 'SUNDAY'
    | undefined
  time?: GoogleTypeTimeOfDay | undefined
  timeZone?: GooglePrivacyDlpV2TimeZone | undefined
}
type GooglePrivacyDlpV2QuoteInfo = { dateTime?: GooglePrivacyDlpV2DateTime | undefined }
type GooglePrivacyDlpV2Finding = {
  createTime?: string | undefined
  findingId?: string | undefined
  infoType?: GooglePrivacyDlpV2InfoType | undefined
  jobCreateTime?: string | undefined
  jobName?: string | undefined
  labels?: { [x: string]: string } | undefined
  likelihood?:
    | 'LIKELIHOOD_UNSPECIFIED'
    | 'VERY_UNLIKELY'
    | 'UNLIKELY'
    | 'POSSIBLE'
    | 'LIKELY'
    | 'VERY_LIKELY'
    | undefined
  location?: GooglePrivacyDlpV2Location | undefined
  name?: string | undefined
  quote?: string | undefined
  quoteInfo?: GooglePrivacyDlpV2QuoteInfo | undefined
  resourceName?: string | undefined
  triggerName?: string | undefined
}
type GooglePrivacyDlpV2InspectResult = {
  findings?: GooglePrivacyDlpV2Finding[] | undefined
  findingsTruncated?: boolean | undefined
}
type GooglePrivacyDlpV2InspectContentResponse = {
  result?: GooglePrivacyDlpV2InspectResult | undefined
}
type GooglePrivacyDlpV2ReidentifyContentRequest = {
  inspectConfig?: GooglePrivacyDlpV2InspectConfig | undefined
  inspectTemplateName?: string | undefined
  item?: GooglePrivacyDlpV2ContentItem | undefined
  locationId?: string | undefined
  reidentifyConfig?: GooglePrivacyDlpV2DeidentifyConfig | undefined
  reidentifyTemplateName?: string | undefined
}
type GooglePrivacyDlpV2ReidentifyContentResponse = {
  item?: GooglePrivacyDlpV2ContentItem | undefined
  overview?: GooglePrivacyDlpV2TransformationOverview | undefined
}
type GooglePrivacyDlpV2ListDeidentifyTemplatesResponse = {
  deidentifyTemplates?: GooglePrivacyDlpV2DeidentifyTemplate[] | undefined
  nextPageToken?: string | undefined
}
type GooglePrivacyDlpV2CreateDeidentifyTemplateRequest = {
  deidentifyTemplate?: GooglePrivacyDlpV2DeidentifyTemplate | undefined
  locationId?: string | undefined
  templateId?: string | undefined
}
type GooglePrivacyDlpV2ListDlpJobsResponse = {
  jobs?: GooglePrivacyDlpV2DlpJob[] | undefined
  nextPageToken?: string | undefined
}
type GooglePrivacyDlpV2CreateDlpJobRequest = {
  inspectJob?: GooglePrivacyDlpV2InspectJobConfig | undefined
  jobId?: string | undefined
  locationId?: string | undefined
  riskJob?: GooglePrivacyDlpV2RiskAnalysisJobConfig | undefined
}
type GooglePrivacyDlpV2ImageRedactionConfig = {
  infoType?: GooglePrivacyDlpV2InfoType | undefined
  redactAllText?: boolean | undefined
  redactionColor?: GooglePrivacyDlpV2Color | undefined
}
type GooglePrivacyDlpV2RedactImageRequest = {
  byteItem?: GooglePrivacyDlpV2ByteContentItem | undefined
  imageRedactionConfigs?: GooglePrivacyDlpV2ImageRedactionConfig[] | undefined
  includeFindings?: boolean | undefined
  inspectConfig?: GooglePrivacyDlpV2InspectConfig | undefined
  locationId?: string | undefined
}
type GooglePrivacyDlpV2RedactImageResponse = {
  extractedText?: string | undefined
  inspectResult?: GooglePrivacyDlpV2InspectResult | undefined
  redactedImage?: string | undefined
}
type GooglePrivacyDlpV2ListInspectTemplatesResponse = {
  inspectTemplates?: GooglePrivacyDlpV2InspectTemplate[] | undefined
  nextPageToken?: string | undefined
}
type GooglePrivacyDlpV2CreateInspectTemplateRequest = {
  inspectTemplate?: GooglePrivacyDlpV2InspectTemplate | undefined
  locationId?: string | undefined
  templateId?: string | undefined
}
type GooglePrivacyDlpV2Manual = { [x: string]: unknown }
type GooglePrivacyDlpV2Schedule = { recurrencePeriodDuration?: string | undefined }
type GooglePrivacyDlpV2Trigger = {
  manual?: GooglePrivacyDlpV2Manual | undefined
  schedule?: GooglePrivacyDlpV2Schedule | undefined
}
type GooglePrivacyDlpV2JobTrigger = {
  createTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  errors?: GooglePrivacyDlpV2Error[] | undefined
  inspectJob?: GooglePrivacyDlpV2InspectJobConfig | undefined
  lastRunTime?: string | undefined
  name?: string | undefined
  status?: 'STATUS_UNSPECIFIED' | 'HEALTHY' | 'PAUSED' | 'CANCELLED' | undefined
  triggers?: GooglePrivacyDlpV2Trigger[] | undefined
  updateTime?: string | undefined
}
type GooglePrivacyDlpV2ListJobTriggersResponse = {
  jobTriggers?: GooglePrivacyDlpV2JobTrigger[] | undefined
  nextPageToken?: string | undefined
}
type GooglePrivacyDlpV2CreateJobTriggerRequest = {
  jobTrigger?: GooglePrivacyDlpV2JobTrigger | undefined
  locationId?: string | undefined
  triggerId?: string | undefined
}
type GooglePrivacyDlpV2ListStoredInfoTypesResponse = {
  nextPageToken?: string | undefined
  storedInfoTypes?: GooglePrivacyDlpV2StoredInfoType[] | undefined
}
type GooglePrivacyDlpV2CreateStoredInfoTypeRequest = {
  config?: GooglePrivacyDlpV2StoredInfoTypeConfig | undefined
  locationId?: string | undefined
  storedInfoTypeId?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/infoTypes': {
      $get: {
        input: {
          query: {
            filter?: string | undefined
            languageCode?: string | undefined
            locationId?: string | undefined
            parent?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GooglePrivacyDlpV2ListInfoTypesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GooglePrivacyDlpV2StoredInfoType
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GooglePrivacyDlpV2UpdateStoredInfoTypeRequest }
        output: GooglePrivacyDlpV2StoredInfoType
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:activate': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GooglePrivacyDlpV2ActivateJobTriggerRequest }
        output: GooglePrivacyDlpV2DlpJob
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:cancel': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GooglePrivacyDlpV2CancelDlpJobRequest }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:finish': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GooglePrivacyDlpV2FinishDlpJobRequest }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:hybridInspect': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GooglePrivacyDlpV2HybridInspectJobTriggerRequest }
        output: GooglePrivacyDlpV2HybridInspectResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/content:deidentify': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GooglePrivacyDlpV2DeidentifyContentRequest }
        output: GooglePrivacyDlpV2DeidentifyContentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/content:inspect': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GooglePrivacyDlpV2InspectContentRequest }
        output: GooglePrivacyDlpV2InspectContentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/content:reidentify': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GooglePrivacyDlpV2ReidentifyContentRequest }
        output: GooglePrivacyDlpV2ReidentifyContentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/deidentifyTemplates': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            locationId?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GooglePrivacyDlpV2ListDeidentifyTemplatesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GooglePrivacyDlpV2CreateDeidentifyTemplateRequest }
        output: GooglePrivacyDlpV2DeidentifyTemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/dlpJobs': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            locationId?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            type?: 'DLP_JOB_TYPE_UNSPECIFIED' | 'INSPECT_JOB' | 'RISK_ANALYSIS_JOB' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GooglePrivacyDlpV2ListDlpJobsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GooglePrivacyDlpV2CreateDlpJobRequest }
        output: GooglePrivacyDlpV2DlpJob
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/image:redact': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GooglePrivacyDlpV2RedactImageRequest }
        output: GooglePrivacyDlpV2RedactImageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/infoTypes': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            languageCode?: string | undefined
            locationId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GooglePrivacyDlpV2ListInfoTypesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/inspectTemplates': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            locationId?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GooglePrivacyDlpV2ListInspectTemplatesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GooglePrivacyDlpV2CreateInspectTemplateRequest }
        output: GooglePrivacyDlpV2InspectTemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/jobTriggers': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            locationId?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            type?: 'DLP_JOB_TYPE_UNSPECIFIED' | 'INSPECT_JOB' | 'RISK_ANALYSIS_JOB' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GooglePrivacyDlpV2ListJobTriggersResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GooglePrivacyDlpV2CreateJobTriggerRequest }
        output: GooglePrivacyDlpV2JobTrigger
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/storedInfoTypes': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            locationId?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GooglePrivacyDlpV2ListStoredInfoTypesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GooglePrivacyDlpV2CreateStoredInfoTypeRequest }
        output: GooglePrivacyDlpV2StoredInfoType
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
