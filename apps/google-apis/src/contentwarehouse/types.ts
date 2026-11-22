type GoogleCloudContentwarehouseV1InitializeProjectRequest = {
  accessControlMode?:
    | 'ACL_MODE_UNKNOWN'
    | 'ACL_MODE_UNIVERSAL_ACCESS'
    | 'ACL_MODE_DOCUMENT_LEVEL_ACCESS_CONTROL_BYOID'
    | 'ACL_MODE_DOCUMENT_LEVEL_ACCESS_CONTROL_GCI'
    | undefined
  databaseType?: 'DB_UNKNOWN' | 'DB_INFRA_SPANNER' | 'DB_CLOUD_SQL_POSTGRES' | undefined
  documentCreatorDefaultRole?:
    | 'DOCUMENT_CREATOR_DEFAULT_ROLE_UNSPECIFIED'
    | 'DOCUMENT_ADMIN'
    | 'DOCUMENT_EDITOR'
    | 'DOCUMENT_VIEWER'
    | undefined
  kmsKey?: string | undefined
}
type GoogleRpcStatus = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type GoogleLongrunningOperation = {
  done?: boolean | undefined
  error?: GoogleRpcStatus | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleProtobufEmpty = { [x: string]: unknown }
type GoogleCloudContentwarehouseV1SynonymSetSynonym = { words?: string[] | undefined }
type GoogleCloudContentwarehouseV1SynonymSet = {
  context?: string | undefined
  name?: string | undefined
  synonyms?: GoogleCloudContentwarehouseV1SynonymSetSynonym[] | undefined
}
type GoogleCloudContentwarehouseV1UserInfo = {
  groupIds?: string[] | undefined
  id?: string | undefined
}
type GoogleCloudContentwarehouseV1RequestMetadata = {
  userInfo?: GoogleCloudContentwarehouseV1UserInfo | undefined
}
type GoogleCloudContentwarehouseV1DeleteDocumentRequest = {
  requestMetadata?: GoogleCloudContentwarehouseV1RequestMetadata | undefined
}
type GoogleCloudContentwarehouseV1GetDocumentRequest = {
  requestMetadata?: GoogleCloudContentwarehouseV1RequestMetadata | undefined
}
type GoogleTypePostalAddress = {
  addressLines?: string[] | undefined
  administrativeArea?: string | undefined
  languageCode?: string | undefined
  locality?: string | undefined
  organization?: string | undefined
  postalCode?: string | undefined
  recipients?: string[] | undefined
  regionCode?: string | undefined
  revision?: number | undefined
  sortingCode?: string | undefined
  sublocality?: string | undefined
}
type GoogleTypeDate = {
  day?: number | undefined
  month?: number | undefined
  year?: number | undefined
}
type GoogleTypeTimeZone = { id?: string | undefined; version?: string | undefined }
type GoogleTypeDateTime = {
  day?: number | undefined
  hours?: number | undefined
  minutes?: number | undefined
  month?: number | undefined
  nanos?: number | undefined
  seconds?: number | undefined
  timeZone?: GoogleTypeTimeZone | undefined
  utcOffset?: string | undefined
  year?: number | undefined
}
type GoogleTypeMoney = {
  currencyCode?: string | undefined
  nanos?: number | undefined
  units?: string | undefined
}
type GoogleCloudDocumentaiV1DocumentEntityNormalizedValue = {
  addressValue?: GoogleTypePostalAddress | undefined
  booleanValue?: boolean | undefined
  dateValue?: GoogleTypeDate | undefined
  datetimeValue?: GoogleTypeDateTime | undefined
  floatValue?: number | undefined
  integerValue?: number | undefined
  moneyValue?: GoogleTypeMoney | undefined
  text?: string | undefined
}
type GoogleCloudDocumentaiV1NormalizedVertex = { x?: number | undefined; y?: number | undefined }
type GoogleCloudDocumentaiV1Vertex = { x?: number | undefined; y?: number | undefined }
type GoogleCloudDocumentaiV1BoundingPoly = {
  normalizedVertices?: GoogleCloudDocumentaiV1NormalizedVertex[] | undefined
  vertices?: GoogleCloudDocumentaiV1Vertex[] | undefined
}
type GoogleCloudDocumentaiV1DocumentPageAnchorPageRef = {
  boundingPoly?: GoogleCloudDocumentaiV1BoundingPoly | undefined
  confidence?: number | undefined
  layoutId?: string | undefined
  layoutType?:
    | 'LAYOUT_TYPE_UNSPECIFIED'
    | 'BLOCK'
    | 'PARAGRAPH'
    | 'LINE'
    | 'TOKEN'
    | 'VISUAL_ELEMENT'
    | 'TABLE'
    | 'FORM_FIELD'
    | undefined
  page?: string | undefined
}
type GoogleCloudDocumentaiV1DocumentPageAnchor = {
  pageRefs?: GoogleCloudDocumentaiV1DocumentPageAnchorPageRef[] | undefined
}
type GoogleCloudDocumentaiV1DocumentProvenanceParent = {
  id?: number | undefined
  index?: number | undefined
  revision?: number | undefined
}
type GoogleCloudDocumentaiV1DocumentProvenance = {
  id?: number | undefined
  parents?: GoogleCloudDocumentaiV1DocumentProvenanceParent[] | undefined
  revision?: number | undefined
  type?:
    | 'OPERATION_TYPE_UNSPECIFIED'
    | 'ADD'
    | 'REMOVE'
    | 'UPDATE'
    | 'REPLACE'
    | 'EVAL_REQUESTED'
    | 'EVAL_APPROVED'
    | 'EVAL_SKIPPED'
    | undefined
}
type GoogleCloudDocumentaiV1DocumentTextAnchorTextSegment = {
  endIndex?: string | undefined
  startIndex?: string | undefined
}
type GoogleCloudDocumentaiV1DocumentTextAnchor = {
  content?: string | undefined
  textSegments?: GoogleCloudDocumentaiV1DocumentTextAnchorTextSegment[] | undefined
}
type GoogleCloudDocumentaiV1DocumentEntity = {
  confidence?: number | undefined
  id?: string | undefined
  mentionId?: string | undefined
  mentionText?: string | undefined
  normalizedValue?: GoogleCloudDocumentaiV1DocumentEntityNormalizedValue | undefined
  pageAnchor?: GoogleCloudDocumentaiV1DocumentPageAnchor | undefined
  properties?: GoogleCloudDocumentaiV1DocumentEntity[] | undefined
  provenance?: GoogleCloudDocumentaiV1DocumentProvenance | undefined
  redacted?: boolean | undefined
  textAnchor?: GoogleCloudDocumentaiV1DocumentTextAnchor | undefined
  type?: string | undefined
}
type GoogleCloudDocumentaiV1DocumentEntityRelation = {
  objectId?: string | undefined
  relation?: string | undefined
  subjectId?: string | undefined
}
type GoogleCloudDocumentaiV1DocumentPageDetectedLanguage = {
  confidence?: number | undefined
  languageCode?: string | undefined
}
type GoogleCloudDocumentaiV1DocumentPageLayout = {
  boundingPoly?: GoogleCloudDocumentaiV1BoundingPoly | undefined
  confidence?: number | undefined
  orientation?:
    | 'ORIENTATION_UNSPECIFIED'
    | 'PAGE_UP'
    | 'PAGE_RIGHT'
    | 'PAGE_DOWN'
    | 'PAGE_LEFT'
    | undefined
  textAnchor?: GoogleCloudDocumentaiV1DocumentTextAnchor | undefined
}
type GoogleCloudDocumentaiV1DocumentPageBlock = {
  detectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[] | undefined
  layout?: GoogleCloudDocumentaiV1DocumentPageLayout | undefined
  provenance?: GoogleCloudDocumentaiV1DocumentProvenance | undefined
}
type GoogleCloudDocumentaiV1Barcode = {
  format?: string | undefined
  rawValue?: string | undefined
  valueFormat?: string | undefined
}
type GoogleCloudDocumentaiV1DocumentPageDetectedBarcode = {
  barcode?: GoogleCloudDocumentaiV1Barcode | undefined
  layout?: GoogleCloudDocumentaiV1DocumentPageLayout | undefined
}
type GoogleCloudDocumentaiV1DocumentPageDimension = {
  height?: number | undefined
  unit?: string | undefined
  width?: number | undefined
}
type GoogleCloudDocumentaiV1DocumentPageFormField = {
  correctedKeyText?: string | undefined
  correctedValueText?: string | undefined
  fieldName?: GoogleCloudDocumentaiV1DocumentPageLayout | undefined
  fieldValue?: GoogleCloudDocumentaiV1DocumentPageLayout | undefined
  nameDetectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[] | undefined
  provenance?: GoogleCloudDocumentaiV1DocumentProvenance | undefined
  valueDetectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[] | undefined
  valueType?: string | undefined
}
type GoogleCloudDocumentaiV1DocumentPageImage = {
  content?: string | undefined
  height?: number | undefined
  mimeType?: string | undefined
  width?: number | undefined
}
type GoogleCloudDocumentaiV1DocumentPageImageQualityScoresDetectedDefect = {
  confidence?: number | undefined
  type?: string | undefined
}
type GoogleCloudDocumentaiV1DocumentPageImageQualityScores = {
  detectedDefects?:
    | GoogleCloudDocumentaiV1DocumentPageImageQualityScoresDetectedDefect[]
    | undefined
  qualityScore?: number | undefined
}
type GoogleCloudDocumentaiV1DocumentPageLine = {
  detectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[] | undefined
  layout?: GoogleCloudDocumentaiV1DocumentPageLayout | undefined
  provenance?: GoogleCloudDocumentaiV1DocumentProvenance | undefined
}
type GoogleCloudDocumentaiV1DocumentPageParagraph = {
  detectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[] | undefined
  layout?: GoogleCloudDocumentaiV1DocumentPageLayout | undefined
  provenance?: GoogleCloudDocumentaiV1DocumentProvenance | undefined
}
type GoogleCloudDocumentaiV1DocumentPageSymbol = {
  detectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[] | undefined
  layout?: GoogleCloudDocumentaiV1DocumentPageLayout | undefined
}
type GoogleCloudDocumentaiV1DocumentPageTableTableCell = {
  colSpan?: number | undefined
  detectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[] | undefined
  layout?: GoogleCloudDocumentaiV1DocumentPageLayout | undefined
  rowSpan?: number | undefined
}
type GoogleCloudDocumentaiV1DocumentPageTableTableRow = {
  cells?: GoogleCloudDocumentaiV1DocumentPageTableTableCell[] | undefined
}
type GoogleCloudDocumentaiV1DocumentPageTable = {
  bodyRows?: GoogleCloudDocumentaiV1DocumentPageTableTableRow[] | undefined
  detectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[] | undefined
  headerRows?: GoogleCloudDocumentaiV1DocumentPageTableTableRow[] | undefined
  layout?: GoogleCloudDocumentaiV1DocumentPageLayout | undefined
  provenance?: GoogleCloudDocumentaiV1DocumentProvenance | undefined
}
type GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreak = {
  type?: 'TYPE_UNSPECIFIED' | 'SPACE' | 'WIDE_SPACE' | 'HYPHEN' | undefined
}
type GoogleTypeColor = {
  alpha?: number | undefined
  blue?: number | undefined
  green?: number | undefined
  red?: number | undefined
}
type GoogleCloudDocumentaiV1DocumentPageTokenStyleInfo = {
  backgroundColor?: GoogleTypeColor | undefined
  bold?: boolean | undefined
  fontSize?: number | undefined
  fontType?: string | undefined
  fontWeight?: number | undefined
  handwritten?: boolean | undefined
  italic?: boolean | undefined
  letterSpacing?: number | undefined
  pixelFontSize?: number | undefined
  smallcaps?: boolean | undefined
  strikeout?: boolean | undefined
  subscript?: boolean | undefined
  superscript?: boolean | undefined
  textColor?: GoogleTypeColor | undefined
  underlined?: boolean | undefined
}
type GoogleCloudDocumentaiV1DocumentPageToken = {
  detectedBreak?: GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreak | undefined
  detectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[] | undefined
  layout?: GoogleCloudDocumentaiV1DocumentPageLayout | undefined
  provenance?: GoogleCloudDocumentaiV1DocumentProvenance | undefined
  styleInfo?: GoogleCloudDocumentaiV1DocumentPageTokenStyleInfo | undefined
}
type GoogleCloudDocumentaiV1DocumentPageMatrix = {
  cols?: number | undefined
  data?: string | undefined
  rows?: number | undefined
  type?: number | undefined
}
type GoogleCloudDocumentaiV1DocumentPageVisualElement = {
  detectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[] | undefined
  layout?: GoogleCloudDocumentaiV1DocumentPageLayout | undefined
  type?: string | undefined
}
type GoogleCloudDocumentaiV1DocumentPage = {
  blocks?: GoogleCloudDocumentaiV1DocumentPageBlock[] | undefined
  detectedBarcodes?: GoogleCloudDocumentaiV1DocumentPageDetectedBarcode[] | undefined
  detectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[] | undefined
  dimension?: GoogleCloudDocumentaiV1DocumentPageDimension | undefined
  formFields?: GoogleCloudDocumentaiV1DocumentPageFormField[] | undefined
  image?: GoogleCloudDocumentaiV1DocumentPageImage | undefined
  imageQualityScores?: GoogleCloudDocumentaiV1DocumentPageImageQualityScores | undefined
  layout?: GoogleCloudDocumentaiV1DocumentPageLayout | undefined
  lines?: GoogleCloudDocumentaiV1DocumentPageLine[] | undefined
  pageNumber?: number | undefined
  paragraphs?: GoogleCloudDocumentaiV1DocumentPageParagraph[] | undefined
  provenance?: GoogleCloudDocumentaiV1DocumentProvenance | undefined
  symbols?: GoogleCloudDocumentaiV1DocumentPageSymbol[] | undefined
  tables?: GoogleCloudDocumentaiV1DocumentPageTable[] | undefined
  tokens?: GoogleCloudDocumentaiV1DocumentPageToken[] | undefined
  transforms?: GoogleCloudDocumentaiV1DocumentPageMatrix[] | undefined
  visualElements?: GoogleCloudDocumentaiV1DocumentPageVisualElement[] | undefined
}
type GoogleCloudDocumentaiV1DocumentRevisionHumanReview = {
  state?: string | undefined
  stateMessage?: string | undefined
}
type GoogleCloudDocumentaiV1DocumentRevision = {
  agent?: string | undefined
  createTime?: string | undefined
  humanReview?: GoogleCloudDocumentaiV1DocumentRevisionHumanReview | undefined
  id?: string | undefined
  parent?: number[] | undefined
  parentIds?: string[] | undefined
  processor?: string | undefined
}
type GoogleCloudDocumentaiV1DocumentShardInfo = {
  shardCount?: string | undefined
  shardIndex?: string | undefined
  textOffset?: string | undefined
}
type GoogleCloudDocumentaiV1DocumentTextChange = {
  changedText?: string | undefined
  provenance?: GoogleCloudDocumentaiV1DocumentProvenance[] | undefined
  textAnchor?: GoogleCloudDocumentaiV1DocumentTextAnchor | undefined
}
type GoogleCloudDocumentaiV1DocumentStyleFontSize = {
  size?: number | undefined
  unit?: string | undefined
}
type GoogleCloudDocumentaiV1DocumentStyle = {
  backgroundColor?: GoogleTypeColor | undefined
  color?: GoogleTypeColor | undefined
  fontFamily?: string | undefined
  fontSize?: GoogleCloudDocumentaiV1DocumentStyleFontSize | undefined
  fontWeight?: string | undefined
  textAnchor?: GoogleCloudDocumentaiV1DocumentTextAnchor | undefined
  textDecoration?: string | undefined
  textStyle?: string | undefined
}
type GoogleCloudDocumentaiV1Document = {
  content?: string | undefined
  entities?: GoogleCloudDocumentaiV1DocumentEntity[] | undefined
  entityRelations?: GoogleCloudDocumentaiV1DocumentEntityRelation[] | undefined
  error?: GoogleRpcStatus | undefined
  mimeType?: string | undefined
  pages?: GoogleCloudDocumentaiV1DocumentPage[] | undefined
  revisions?: GoogleCloudDocumentaiV1DocumentRevision[] | undefined
  shardInfo?: GoogleCloudDocumentaiV1DocumentShardInfo | undefined
  text?: string | undefined
  textChanges?: GoogleCloudDocumentaiV1DocumentTextChange[] | undefined
  textStyles?: GoogleCloudDocumentaiV1DocumentStyle[] | undefined
  uri?: string | undefined
}
type GoogleCloudContentwarehouseV1DateTimeArray = { values?: GoogleTypeDateTime[] | undefined }
type GoogleCloudContentwarehouseV1EnumArray = { values?: string[] | undefined }
type GoogleCloudContentwarehouseV1FloatArray = { values?: number[] | undefined }
type GoogleCloudContentwarehouseV1IntegerArray = { values?: number[] | undefined }
type GoogleCloudContentwarehouseV1EnumValue = { value?: string | undefined }
type GoogleCloudContentwarehouseV1TimestampValue = {
  textValue?: string | undefined
  timestampValue?: string | undefined
}
type GoogleCloudContentwarehouseV1Value = {
  booleanValue?: boolean | undefined
  datetimeValue?: GoogleTypeDateTime | undefined
  enumValue?: GoogleCloudContentwarehouseV1EnumValue | undefined
  floatValue?: number | undefined
  intValue?: number | undefined
  stringValue?: string | undefined
  timestampValue?: GoogleCloudContentwarehouseV1TimestampValue | undefined
}
type GoogleCloudContentwarehouseV1MapProperty = {
  fields?: { [x: string]: GoogleCloudContentwarehouseV1Value } | undefined
}
type GoogleCloudContentwarehouseV1PropertyArray = {
  properties?: GoogleCloudContentwarehouseV1Property[] | undefined
}
type GoogleCloudContentwarehouseV1TextArray = { values?: string[] | undefined }
type GoogleCloudContentwarehouseV1TimestampArray = {
  values?: GoogleCloudContentwarehouseV1TimestampValue[] | undefined
}
type GoogleCloudContentwarehouseV1Property = {
  dateTimeValues?: GoogleCloudContentwarehouseV1DateTimeArray | undefined
  enumValues?: GoogleCloudContentwarehouseV1EnumArray | undefined
  floatValues?: GoogleCloudContentwarehouseV1FloatArray | undefined
  integerValues?: GoogleCloudContentwarehouseV1IntegerArray | undefined
  mapProperty?: GoogleCloudContentwarehouseV1MapProperty | undefined
  name?: string | undefined
  propertyValues?: GoogleCloudContentwarehouseV1PropertyArray | undefined
  textValues?: GoogleCloudContentwarehouseV1TextArray | undefined
  timestampValues?: GoogleCloudContentwarehouseV1TimestampArray | undefined
}
type GoogleCloudContentwarehouseV1Document = {
  cloudAiDocument?: GoogleCloudDocumentaiV1Document | undefined
  contentCategory?:
    | 'CONTENT_CATEGORY_UNSPECIFIED'
    | 'CONTENT_CATEGORY_IMAGE'
    | 'CONTENT_CATEGORY_AUDIO'
    | 'CONTENT_CATEGORY_VIDEO'
    | undefined
  createTime?: string | undefined
  creator?: string | undefined
  displayName?: string | undefined
  displayUri?: string | undefined
  documentSchemaName?: string | undefined
  inlineRawDocument?: string | undefined
  name?: string | undefined
  plainText?: string | undefined
  properties?: GoogleCloudContentwarehouseV1Property[] | undefined
  rawDocumentFileType?:
    | 'RAW_DOCUMENT_FILE_TYPE_UNSPECIFIED'
    | 'RAW_DOCUMENT_FILE_TYPE_PDF'
    | 'RAW_DOCUMENT_FILE_TYPE_DOCX'
    | 'RAW_DOCUMENT_FILE_TYPE_XLSX'
    | 'RAW_DOCUMENT_FILE_TYPE_PPTX'
    | 'RAW_DOCUMENT_FILE_TYPE_TEXT'
    | 'RAW_DOCUMENT_FILE_TYPE_TIFF'
    | undefined
  rawDocumentPath?: string | undefined
  referenceId?: string | undefined
  textExtractionDisabled?: boolean | undefined
  textExtractionEnabled?: boolean | undefined
  title?: string | undefined
  updateTime?: string | undefined
  updater?: string | undefined
}
type GoogleCloudContentwarehouseV1LockDocumentRequest = {
  collectionId?: string | undefined
  lockingUser?: GoogleCloudContentwarehouseV1UserInfo | undefined
}
type GoogleCloudContentwarehouseV1DocumentReference = {
  createTime?: string | undefined
  deleteTime?: string | undefined
  displayName?: string | undefined
  documentIsFolder?: boolean | undefined
  documentName?: string | undefined
  snippet?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudContentwarehouseV1DocumentLink = {
  createTime?: string | undefined
  description?: string | undefined
  name?: string | undefined
  sourceDocumentReference?: GoogleCloudContentwarehouseV1DocumentReference | undefined
  state?: 'STATE_UNSPECIFIED' | 'ACTIVE' | 'SOFT_DELETED' | undefined
  targetDocumentReference?: GoogleCloudContentwarehouseV1DocumentReference | undefined
  updateTime?: string | undefined
}
type GoogleCloudContentwarehouseV1CreateDocumentLinkRequest = {
  documentLink?: GoogleCloudContentwarehouseV1DocumentLink | undefined
  requestMetadata?: GoogleCloudContentwarehouseV1RequestMetadata | undefined
}
type GoogleCloudContentwarehouseV1DateTimeTypeOptions = { [x: string]: unknown }
type GoogleCloudContentwarehouseV1EnumTypeOptions = {
  possibleValues?: string[] | undefined
  validationCheckDisabled?: boolean | undefined
}
type GoogleCloudContentwarehouseV1FloatTypeOptions = { [x: string]: unknown }
type GoogleCloudContentwarehouseV1IntegerTypeOptions = { [x: string]: unknown }
type GoogleCloudContentwarehouseV1MapTypeOptions = { [x: string]: unknown }
type GoogleCloudContentwarehouseV1PropertyTypeOptions = {
  propertyDefinitions?: GoogleCloudContentwarehouseV1PropertyDefinition[] | undefined
}
type GoogleCloudContentwarehouseV1PropertyDefinitionSchemaSource = {
  name?: string | undefined
  processorType?: string | undefined
}
type GoogleCloudContentwarehouseV1TextTypeOptions = { [x: string]: unknown }
type GoogleCloudContentwarehouseV1TimestampTypeOptions = { [x: string]: unknown }
type GoogleCloudContentwarehouseV1PropertyDefinition = {
  dateTimeTypeOptions?: GoogleCloudContentwarehouseV1DateTimeTypeOptions | undefined
  displayName?: string | undefined
  enumTypeOptions?: GoogleCloudContentwarehouseV1EnumTypeOptions | undefined
  floatTypeOptions?: GoogleCloudContentwarehouseV1FloatTypeOptions | undefined
  integerTypeOptions?: GoogleCloudContentwarehouseV1IntegerTypeOptions | undefined
  isFilterable?: boolean | undefined
  isMetadata?: boolean | undefined
  isRepeatable?: boolean | undefined
  isRequired?: boolean | undefined
  isSearchable?: boolean | undefined
  mapTypeOptions?: GoogleCloudContentwarehouseV1MapTypeOptions | undefined
  name?: string | undefined
  propertyTypeOptions?: GoogleCloudContentwarehouseV1PropertyTypeOptions | undefined
  retrievalImportance?:
    | 'RETRIEVAL_IMPORTANCE_UNSPECIFIED'
    | 'HIGHEST'
    | 'HIGHER'
    | 'HIGH'
    | 'MEDIUM'
    | 'LOW'
    | 'LOWEST'
    | undefined
  schemaSources?: GoogleCloudContentwarehouseV1PropertyDefinitionSchemaSource[] | undefined
  textTypeOptions?: GoogleCloudContentwarehouseV1TextTypeOptions | undefined
  timestampTypeOptions?: GoogleCloudContentwarehouseV1TimestampTypeOptions | undefined
}
type GoogleCloudContentwarehouseV1DocumentSchema = {
  createTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  documentIsFolder?: boolean | undefined
  name?: string | undefined
  propertyDefinitions?: GoogleCloudContentwarehouseV1PropertyDefinition[] | undefined
  updateTime?: string | undefined
}
type GoogleCloudContentwarehouseV1ListDocumentSchemasResponse = {
  documentSchemas?: GoogleCloudContentwarehouseV1DocumentSchema[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudContentwarehouseV1CloudAIDocumentOption = {
  customizedEntitiesPropertiesConversions?: { [x: string]: string } | undefined
  enableEntitiesConversions?: boolean | undefined
}
type GoogleIamV1AuditLogConfig = {
  exemptedMembers?: string[] | undefined
  logType?: 'LOG_TYPE_UNSPECIFIED' | 'ADMIN_READ' | 'DATA_WRITE' | 'DATA_READ' | undefined
}
type GoogleIamV1AuditConfig = {
  auditLogConfigs?: GoogleIamV1AuditLogConfig[] | undefined
  service?: string | undefined
}
type GoogleTypeExpr = {
  description?: string | undefined
  expression?: string | undefined
  location?: string | undefined
  title?: string | undefined
}
type GoogleIamV1Binding = {
  condition?: GoogleTypeExpr | undefined
  members?: string[] | undefined
  role?: string | undefined
}
type GoogleIamV1Policy = {
  auditConfigs?: GoogleIamV1AuditConfig[] | undefined
  bindings?: GoogleIamV1Binding[] | undefined
  etag?: string | undefined
  version?: number | undefined
}
type GoogleCloudContentwarehouseV1CreateDocumentRequest = {
  cloudAiDocumentOption?: GoogleCloudContentwarehouseV1CloudAIDocumentOption | undefined
  createMask?: string | undefined
  document?: GoogleCloudContentwarehouseV1Document | undefined
  policy?: GoogleIamV1Policy | undefined
  requestMetadata?: GoogleCloudContentwarehouseV1RequestMetadata | undefined
}
type GoogleCloudContentwarehouseV1ResponseMetadata = { requestId?: string | undefined }
type GoogleCloudContentwarehouseV1ActionOutput = {
  actionId?: string | undefined
  actionState?:
    | 'UNKNOWN'
    | 'ACTION_SUCCEEDED'
    | 'ACTION_FAILED'
    | 'ACTION_TIMED_OUT'
    | 'ACTION_PENDING'
    | undefined
  outputMessage?: string | undefined
}
type GoogleCloudContentwarehouseV1AccessControlAction = {
  operationType?:
    | 'UNKNOWN'
    | 'ADD_POLICY_BINDING'
    | 'REMOVE_POLICY_BINDING'
    | 'REPLACE_POLICY_BINDING'
    | undefined
  policy?: GoogleIamV1Policy | undefined
}
type GoogleCloudContentwarehouseV1AddToFolderAction = { folders?: string[] | undefined }
type GoogleCloudContentwarehouseV1DataUpdateAction = {
  entries?: { [x: string]: string } | undefined
}
type GoogleCloudContentwarehouseV1DataValidationAction = {
  conditions?: { [x: string]: string } | undefined
}
type GoogleCloudContentwarehouseV1DeleteDocumentAction = { enableHardDelete?: boolean | undefined }
type GoogleCloudContentwarehouseV1PublishAction = {
  messages?: string[] | undefined
  topicId?: string | undefined
}
type GoogleCloudContentwarehouseV1RemoveFromFolderAction = {
  condition?: string | undefined
  folder?: string | undefined
}
type GoogleCloudContentwarehouseV1Action = {
  accessControl?: GoogleCloudContentwarehouseV1AccessControlAction | undefined
  actionId?: string | undefined
  addToFolder?: GoogleCloudContentwarehouseV1AddToFolderAction | undefined
  dataUpdate?: GoogleCloudContentwarehouseV1DataUpdateAction | undefined
  dataValidation?: GoogleCloudContentwarehouseV1DataValidationAction | undefined
  deleteDocumentAction?: GoogleCloudContentwarehouseV1DeleteDocumentAction | undefined
  publishToPubSub?: GoogleCloudContentwarehouseV1PublishAction | undefined
  removeFromFolderAction?: GoogleCloudContentwarehouseV1RemoveFromFolderAction | undefined
}
type GoogleCloudContentwarehouseV1Rule = {
  actions?: GoogleCloudContentwarehouseV1Action[] | undefined
  condition?: string | undefined
  description?: string | undefined
  ruleId?: string | undefined
  triggerType?: 'UNKNOWN' | 'ON_CREATE' | 'ON_UPDATE' | undefined
}
type GoogleCloudContentwarehouseV1RuleActionsPair = {
  actionOutputs?: GoogleCloudContentwarehouseV1ActionOutput[] | undefined
  rule?: GoogleCloudContentwarehouseV1Rule | undefined
}
type GoogleCloudContentwarehouseV1ActionExecutorOutput = {
  ruleActionsPairs?: GoogleCloudContentwarehouseV1RuleActionsPair[] | undefined
}
type GoogleCloudContentwarehouseV1InvalidRule = {
  error?: string | undefined
  rule?: GoogleCloudContentwarehouseV1Rule | undefined
}
type GoogleCloudContentwarehouseV1RuleEvaluatorOutput = {
  invalidRules?: GoogleCloudContentwarehouseV1InvalidRule[] | undefined
  matchedRules?: GoogleCloudContentwarehouseV1Rule[] | undefined
  triggeredRules?: GoogleCloudContentwarehouseV1Rule[] | undefined
}
type GoogleCloudContentwarehouseV1RuleEngineOutput = {
  actionExecutorOutput?: GoogleCloudContentwarehouseV1ActionExecutorOutput | undefined
  documentName?: string | undefined
  ruleEvaluatorOutput?: GoogleCloudContentwarehouseV1RuleEvaluatorOutput | undefined
}
type GoogleCloudContentwarehouseV1CreateDocumentResponse = {
  document?: GoogleCloudContentwarehouseV1Document | undefined
  longRunningOperations?: GoogleLongrunningOperation[] | undefined
  metadata?: GoogleCloudContentwarehouseV1ResponseMetadata | undefined
  ruleEngineOutput?: GoogleCloudContentwarehouseV1RuleEngineOutput | undefined
}
type GoogleCloudContentwarehouseV1WeightedSchemaProperty = {
  documentSchemaName?: string | undefined
  propertyNames?: string[] | undefined
}
type GoogleCloudContentwarehouseV1CustomWeightsMetadata = {
  weightedSchemaProperties?: GoogleCloudContentwarehouseV1WeightedSchemaProperty[] | undefined
}
type GoogleCloudContentwarehouseV1FileTypeFilter = {
  fileType?: 'FILE_TYPE_UNSPECIFIED' | 'ALL' | 'FOLDER' | 'DOCUMENT' | undefined
}
type GoogleCloudContentwarehouseV1PropertyFilter = {
  condition?: string | undefined
  documentSchemaName?: string | undefined
}
type GoogleTypeInterval = { endTime?: string | undefined; startTime?: string | undefined }
type GoogleCloudContentwarehouseV1TimeFilter = {
  timeField?: 'TIME_FIELD_UNSPECIFIED' | 'CREATE_TIME' | 'UPDATE_TIME' | undefined
  timeRange?: GoogleTypeInterval | undefined
}
type GoogleCloudContentwarehouseV1DocumentQuery = {
  customPropertyFilter?: string | undefined
  customWeightsMetadata?: GoogleCloudContentwarehouseV1CustomWeightsMetadata | undefined
  documentCreatorFilter?: string[] | undefined
  documentSchemaNames?: string[] | undefined
  fileTypeFilter?: GoogleCloudContentwarehouseV1FileTypeFilter | undefined
  folderNameFilter?: string | undefined
  isNlQuery?: boolean | undefined
  propertyFilter?: GoogleCloudContentwarehouseV1PropertyFilter[] | undefined
  query?: string | undefined
  queryContext?: string[] | undefined
  timeFilters?: GoogleCloudContentwarehouseV1TimeFilter[] | undefined
}
type GoogleCloudContentwarehouseV1HistogramQueryPropertyNameFilter = {
  documentSchemas?: string[] | undefined
  propertyNames?: string[] | undefined
  yAxis?: 'HISTOGRAM_YAXIS_DOCUMENT' | 'HISTOGRAM_YAXIS_PROPERTY' | undefined
}
type GoogleCloudContentwarehouseV1HistogramQuery = {
  filters?: GoogleCloudContentwarehouseV1HistogramQueryPropertyNameFilter | undefined
  histogramQuery?: string | undefined
  requirePreciseResultSize?: boolean | undefined
}
type GoogleCloudContentwarehouseV1SearchDocumentsRequest = {
  documentQuery?: GoogleCloudContentwarehouseV1DocumentQuery | undefined
  histogramQueries?: GoogleCloudContentwarehouseV1HistogramQuery[] | undefined
  offset?: number | undefined
  orderBy?: string | undefined
  pageSize?: number | undefined
  pageToken?: string | undefined
  qaSizeLimit?: number | undefined
  requestMetadata?: GoogleCloudContentwarehouseV1RequestMetadata | undefined
  requireTotalSize?: boolean | undefined
  totalResultSize?: 'TOTAL_RESULT_SIZE_UNSPECIFIED' | 'ESTIMATED_SIZE' | 'ACTUAL_SIZE' | undefined
}
type GoogleCloudContentwarehouseV1HistogramQueryResult = {
  histogram?: { [x: string]: string } | undefined
  histogramQuery?: string | undefined
}
type GoogleCloudContentwarehouseV1QAResultHighlight = {
  endIndex?: number | undefined
  startIndex?: number | undefined
}
type GoogleCloudContentwarehouseV1QAResult = {
  confidenceScore?: number | undefined
  highlights?: GoogleCloudContentwarehouseV1QAResultHighlight[] | undefined
}
type GoogleCloudContentwarehouseV1SearchDocumentsResponseMatchingDocument = {
  document?: GoogleCloudContentwarehouseV1Document | undefined
  qaResult?: GoogleCloudContentwarehouseV1QAResult | undefined
  searchTextSnippet?: string | undefined
}
type GoogleCloudContentwarehouseV1SearchDocumentsResponse = {
  histogramQueryResults?: GoogleCloudContentwarehouseV1HistogramQueryResult[] | undefined
  matchingDocuments?:
    | GoogleCloudContentwarehouseV1SearchDocumentsResponseMatchingDocument[]
    | undefined
  metadata?: GoogleCloudContentwarehouseV1ResponseMetadata | undefined
  nextPageToken?: string | undefined
  totalSize?: number | undefined
}
type GoogleCloudContentwarehouseV1ListLinkedSourcesRequest = {
  pageSize?: number | undefined
  pageToken?: string | undefined
  requestMetadata?: GoogleCloudContentwarehouseV1RequestMetadata | undefined
}
type GoogleCloudContentwarehouseV1ListLinkedSourcesResponse = {
  documentLinks?: GoogleCloudContentwarehouseV1DocumentLink[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudContentwarehouseV1ListLinkedTargetsRequest = {
  requestMetadata?: GoogleCloudContentwarehouseV1RequestMetadata | undefined
}
type GoogleCloudContentwarehouseV1ListLinkedTargetsResponse = {
  documentLinks?: GoogleCloudContentwarehouseV1DocumentLink[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudContentwarehouseV1RuleSet = {
  description?: string | undefined
  name?: string | undefined
  rules?: GoogleCloudContentwarehouseV1Rule[] | undefined
  source?: string | undefined
}
type GoogleCloudContentwarehouseV1ListRuleSetsResponse = {
  nextPageToken?: string | undefined
  ruleSets?: GoogleCloudContentwarehouseV1RuleSet[] | undefined
}
type GoogleCloudContentwarehouseV1ListSynonymSetsResponse = {
  nextPageToken?: string | undefined
  synonymSets?: GoogleCloudContentwarehouseV1SynonymSet[] | undefined
}
type GoogleCloudContentwarehouseV1FetchAclRequest = {
  projectOwner?: boolean | undefined
  requestMetadata?: GoogleCloudContentwarehouseV1RequestMetadata | undefined
}
type GoogleCloudContentwarehouseV1FetchAclResponse = {
  metadata?: GoogleCloudContentwarehouseV1ResponseMetadata | undefined
  policy?: GoogleIamV1Policy | undefined
}
type GoogleCloudContentwarehouseV1SetAclRequest = {
  policy?: GoogleIamV1Policy | undefined
  projectOwner?: boolean | undefined
  requestMetadata?: GoogleCloudContentwarehouseV1RequestMetadata | undefined
}
type GoogleCloudContentwarehouseV1SetAclResponse = {
  metadata?: GoogleCloudContentwarehouseV1ResponseMetadata | undefined
  policy?: GoogleIamV1Policy | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:location:initialize': {
      $post: {
        input: { param: { location: string } } & {
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
        } & { json: GoogleCloudContentwarehouseV1InitializeProjectRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name': {
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
        output: GoogleCloudContentwarehouseV1SynonymSet
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
        } & { json: GoogleCloudContentwarehouseV1SynonymSet }
        output: GoogleCloudContentwarehouseV1SynonymSet
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:delete': {
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
        } & { json: GoogleCloudContentwarehouseV1DeleteDocumentRequest }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:get': {
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
        } & { json: GoogleCloudContentwarehouseV1GetDocumentRequest }
        output: GoogleCloudContentwarehouseV1Document
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:lock': {
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
        } & { json: GoogleCloudContentwarehouseV1LockDocumentRequest }
        output: GoogleCloudContentwarehouseV1Document
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/documentLinks': {
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
        } & { json: GoogleCloudContentwarehouseV1CreateDocumentLinkRequest }
        output: GoogleCloudContentwarehouseV1DocumentLink
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/documentSchemas': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: GoogleCloudContentwarehouseV1ListDocumentSchemasResponse
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
        } & { json: GoogleCloudContentwarehouseV1DocumentSchema }
        output: GoogleCloudContentwarehouseV1DocumentSchema
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/documents': {
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
        } & { json: GoogleCloudContentwarehouseV1CreateDocumentRequest }
        output: GoogleCloudContentwarehouseV1CreateDocumentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/documents:search': {
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
        } & { json: GoogleCloudContentwarehouseV1SearchDocumentsRequest }
        output: GoogleCloudContentwarehouseV1SearchDocumentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/linkedSources': {
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
        } & { json: GoogleCloudContentwarehouseV1ListLinkedSourcesRequest }
        output: GoogleCloudContentwarehouseV1ListLinkedSourcesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/linkedTargets': {
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
        } & { json: GoogleCloudContentwarehouseV1ListLinkedTargetsRequest }
        output: GoogleCloudContentwarehouseV1ListLinkedTargetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/ruleSets': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: GoogleCloudContentwarehouseV1ListRuleSetsResponse
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
        } & { json: GoogleCloudContentwarehouseV1RuleSet }
        output: GoogleCloudContentwarehouseV1RuleSet
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/synonymSets': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: GoogleCloudContentwarehouseV1ListSynonymSetsResponse
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
        } & { json: GoogleCloudContentwarehouseV1SynonymSet }
        output: GoogleCloudContentwarehouseV1SynonymSet
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resource:fetchAcl': {
      $post: {
        input: { param: { resource: string } } & {
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
        } & { json: GoogleCloudContentwarehouseV1FetchAclRequest }
        output: GoogleCloudContentwarehouseV1FetchAclResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resource:setAcl': {
      $post: {
        input: { param: { resource: string } } & {
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
        } & { json: GoogleCloudContentwarehouseV1SetAclRequest }
        output: GoogleCloudContentwarehouseV1SetAclResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
