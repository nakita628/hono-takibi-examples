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
type GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue = {
  addressValue?: GoogleTypePostalAddress | undefined
  booleanValue?: boolean | undefined
  dateValue?: GoogleTypeDate | undefined
  datetimeValue?: GoogleTypeDateTime | undefined
  floatValue?: number | undefined
  integerValue?: number | undefined
  moneyValue?: GoogleTypeMoney | undefined
  text?: string | undefined
}
type GoogleCloudDocumentaiV1beta3NormalizedVertex = {
  x?: number | undefined
  y?: number | undefined
}
type GoogleCloudDocumentaiV1beta3Vertex = { x?: number | undefined; y?: number | undefined }
type GoogleCloudDocumentaiV1beta3BoundingPoly = {
  normalizedVertices?: GoogleCloudDocumentaiV1beta3NormalizedVertex[] | undefined
  vertices?: GoogleCloudDocumentaiV1beta3Vertex[] | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef = {
  boundingPoly?: GoogleCloudDocumentaiV1beta3BoundingPoly | undefined
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
type GoogleCloudDocumentaiV1beta3DocumentPageAnchor = {
  pageRefs?: GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef[] | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentProvenanceParent = {
  id?: number | undefined
  index?: number | undefined
  revision?: number | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentProvenance = {
  id?: number | undefined
  parents?: GoogleCloudDocumentaiV1beta3DocumentProvenanceParent[] | undefined
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
type GoogleCloudDocumentaiV1beta3DocumentTextAnchorTextSegment = {
  endIndex?: string | undefined
  startIndex?: string | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentTextAnchor = {
  content?: string | undefined
  textSegments?: GoogleCloudDocumentaiV1beta3DocumentTextAnchorTextSegment[] | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentEntity = {
  confidence?: number | undefined
  id?: string | undefined
  mentionId?: string | undefined
  mentionText?: string | undefined
  normalizedValue?: GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue | undefined
  pageAnchor?: GoogleCloudDocumentaiV1beta3DocumentPageAnchor | undefined
  properties?: GoogleCloudDocumentaiV1beta3DocumentEntity[] | undefined
  provenance?: GoogleCloudDocumentaiV1beta3DocumentProvenance | undefined
  redacted?: boolean | undefined
  textAnchor?: GoogleCloudDocumentaiV1beta3DocumentTextAnchor | undefined
  type?: string | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentEntityRelation = {
  objectId?: string | undefined
  relation?: string | undefined
  subjectId?: string | undefined
}
type GoogleRpcStatus = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage = {
  confidence?: number | undefined
  languageCode?: string | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentPageLayout = {
  boundingPoly?: GoogleCloudDocumentaiV1beta3BoundingPoly | undefined
  confidence?: number | undefined
  orientation?:
    | 'ORIENTATION_UNSPECIFIED'
    | 'PAGE_UP'
    | 'PAGE_RIGHT'
    | 'PAGE_DOWN'
    | 'PAGE_LEFT'
    | undefined
  textAnchor?: GoogleCloudDocumentaiV1beta3DocumentTextAnchor | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentPageBlock = {
  detectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[] | undefined
  layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout | undefined
  provenance?: GoogleCloudDocumentaiV1beta3DocumentProvenance | undefined
}
type GoogleCloudDocumentaiV1beta3Barcode = {
  format?: string | undefined
  rawValue?: string | undefined
  valueFormat?: string | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode = {
  barcode?: GoogleCloudDocumentaiV1beta3Barcode | undefined
  layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentPageDimension = {
  height?: number | undefined
  unit?: string | undefined
  width?: number | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentPageFormField = {
  correctedKeyText?: string | undefined
  correctedValueText?: string | undefined
  fieldName?: GoogleCloudDocumentaiV1beta3DocumentPageLayout | undefined
  fieldValue?: GoogleCloudDocumentaiV1beta3DocumentPageLayout | undefined
  nameDetectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[] | undefined
  provenance?: GoogleCloudDocumentaiV1beta3DocumentProvenance | undefined
  valueDetectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[] | undefined
  valueType?: string | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentPageImage = {
  content?: string | undefined
  height?: number | undefined
  mimeType?: string | undefined
  width?: number | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScoresDetectedDefect = {
  confidence?: number | undefined
  type?: string | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores = {
  detectedDefects?:
    | GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScoresDetectedDefect[]
    | undefined
  qualityScore?: number | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentPageLine = {
  detectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[] | undefined
  layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout | undefined
  provenance?: GoogleCloudDocumentaiV1beta3DocumentProvenance | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentPageParagraph = {
  detectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[] | undefined
  layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout | undefined
  provenance?: GoogleCloudDocumentaiV1beta3DocumentProvenance | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentPageSymbol = {
  detectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[] | undefined
  layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell = {
  colSpan?: number | undefined
  detectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[] | undefined
  layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout | undefined
  rowSpan?: number | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow = {
  cells?: GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell[] | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentPageTable = {
  bodyRows?: GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow[] | undefined
  detectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[] | undefined
  headerRows?: GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow[] | undefined
  layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout | undefined
  provenance?: GoogleCloudDocumentaiV1beta3DocumentProvenance | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak = {
  type?: 'TYPE_UNSPECIFIED' | 'SPACE' | 'WIDE_SPACE' | 'HYPHEN' | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentPageToken = {
  detectedBreak?: GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak | undefined
  detectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[] | undefined
  layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout | undefined
  provenance?: GoogleCloudDocumentaiV1beta3DocumentProvenance | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentPageMatrix = {
  cols?: number | undefined
  data?: string | undefined
  rows?: number | undefined
  type?: number | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentPageVisualElement = {
  detectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[] | undefined
  layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout | undefined
  type?: string | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentPage = {
  blocks?: GoogleCloudDocumentaiV1beta3DocumentPageBlock[] | undefined
  detectedBarcodes?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode[] | undefined
  detectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[] | undefined
  dimension?: GoogleCloudDocumentaiV1beta3DocumentPageDimension | undefined
  formFields?: GoogleCloudDocumentaiV1beta3DocumentPageFormField[] | undefined
  image?: GoogleCloudDocumentaiV1beta3DocumentPageImage | undefined
  imageQualityScores?: GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores | undefined
  layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout | undefined
  lines?: GoogleCloudDocumentaiV1beta3DocumentPageLine[] | undefined
  pageNumber?: number | undefined
  paragraphs?: GoogleCloudDocumentaiV1beta3DocumentPageParagraph[] | undefined
  provenance?: GoogleCloudDocumentaiV1beta3DocumentProvenance | undefined
  symbols?: GoogleCloudDocumentaiV1beta3DocumentPageSymbol[] | undefined
  tables?: GoogleCloudDocumentaiV1beta3DocumentPageTable[] | undefined
  tokens?: GoogleCloudDocumentaiV1beta3DocumentPageToken[] | undefined
  transforms?: GoogleCloudDocumentaiV1beta3DocumentPageMatrix[] | undefined
  visualElements?: GoogleCloudDocumentaiV1beta3DocumentPageVisualElement[] | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReview = {
  state?: string | undefined
  stateMessage?: string | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentRevision = {
  agent?: string | undefined
  createTime?: string | undefined
  humanReview?: GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReview | undefined
  id?: string | undefined
  parent?: number[] | undefined
  parentIds?: string[] | undefined
  processor?: string | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentShardInfo = {
  shardCount?: string | undefined
  shardIndex?: string | undefined
  textOffset?: string | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentTextChange = {
  changedText?: string | undefined
  provenance?: GoogleCloudDocumentaiV1beta3DocumentProvenance[] | undefined
  textAnchor?: GoogleCloudDocumentaiV1beta3DocumentTextAnchor | undefined
}
type GoogleTypeColor = {
  alpha?: number | undefined
  blue?: number | undefined
  green?: number | undefined
  red?: number | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentStyleFontSize = {
  size?: number | undefined
  unit?: string | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentStyle = {
  backgroundColor?: GoogleTypeColor | undefined
  color?: GoogleTypeColor | undefined
  fontFamily?: string | undefined
  fontSize?: GoogleCloudDocumentaiV1beta3DocumentStyleFontSize | undefined
  fontWeight?: string | undefined
  textAnchor?: GoogleCloudDocumentaiV1beta3DocumentTextAnchor | undefined
  textDecoration?: string | undefined
  textStyle?: string | undefined
}
type GoogleCloudDocumentaiV1beta3Document = {
  content?: string | undefined
  entities?: GoogleCloudDocumentaiV1beta3DocumentEntity[] | undefined
  entityRelations?: GoogleCloudDocumentaiV1beta3DocumentEntityRelation[] | undefined
  error?: GoogleRpcStatus | undefined
  mimeType?: string | undefined
  pages?: GoogleCloudDocumentaiV1beta3DocumentPage[] | undefined
  revisions?: GoogleCloudDocumentaiV1beta3DocumentRevision[] | undefined
  shardInfo?: GoogleCloudDocumentaiV1beta3DocumentShardInfo | undefined
  text?: string | undefined
  textChanges?: GoogleCloudDocumentaiV1beta3DocumentTextChange[] | undefined
  textStyles?: GoogleCloudDocumentaiV1beta3DocumentStyle[] | undefined
  uri?: string | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeEnumValues = {
  values?: string[] | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty = {
  name?: string | undefined
  occurrenceType?:
    | 'OCCURRENCE_TYPE_UNSPECIFIED'
    | 'OPTIONAL_ONCE'
    | 'OPTIONAL_MULTIPLE'
    | 'REQUIRED_ONCE'
    | 'REQUIRED_MULTIPLE'
    | undefined
  valueType?: string | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType = {
  baseTypes?: string[] | undefined
  displayName?: string | undefined
  enumValues?: GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeEnumValues | undefined
  name?: string | undefined
  properties?: GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty[] | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata = {
  documentAllowMultipleLabels?: boolean | undefined
  documentSplitter?: boolean | undefined
  prefixedNamingOnProperties?: boolean | undefined
  skipNamingValidation?: boolean | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentSchema = {
  description?: string | undefined
  displayName?: string | undefined
  entityTypes?: GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType[] | undefined
  metadata?: GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata | undefined
}
type GoogleCloudDocumentaiV1beta3ReviewDocumentRequest = {
  document?: GoogleCloudDocumentaiV1beta3Document | undefined
  documentSchema?: GoogleCloudDocumentaiV1beta3DocumentSchema | undefined
  enableSchemaValidation?: boolean | undefined
  inlineDocument?: GoogleCloudDocumentaiV1beta3Document | undefined
  priority?: 'DEFAULT' | 'URGENT' | undefined
}
type GoogleLongrunningOperation = {
  done?: boolean | undefined
  error?: GoogleRpcStatus | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleCloudDocumentaiV1beta3ProcessorTypeLocationInfo = { locationId?: string | undefined }
type GoogleCloudDocumentaiV1beta3ProcessorType = {
  allowCreation?: boolean | undefined
  availableLocations?: GoogleCloudDocumentaiV1beta3ProcessorTypeLocationInfo[] | undefined
  category?: string | undefined
  launchStage?:
    | 'LAUNCH_STAGE_UNSPECIFIED'
    | 'UNIMPLEMENTED'
    | 'PRELAUNCH'
    | 'EARLY_ACCESS'
    | 'ALPHA'
    | 'BETA'
    | 'GA'
    | 'DEPRECATED'
    | undefined
  name?: string | undefined
  sampleDocumentUris?: string[] | undefined
  type?: string | undefined
}
type GoogleCloudLocationLocation = {
  displayName?: string | undefined
  labels?: { [x: string]: string } | undefined
  locationId?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
}
type GoogleCloudLocationListLocationsResponse = {
  locations?: GoogleCloudLocationLocation[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfigShardingConfig = {
  pagesOverlap?: number | undefined
  pagesPerShard?: number | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig = {
  fieldMask?: string | undefined
  gcsUri?: string | undefined
  shardingConfig?:
    | GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfigShardingConfig
    | undefined
}
type GoogleCloudDocumentaiV1beta3DocumentOutputConfig = {
  gcsOutputConfig?: GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig | undefined
}
type GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig = {
  gcsSource?: string | undefined
  mimeType?: string | undefined
}
type GoogleCloudDocumentaiV1beta3GcsDocument = {
  gcsUri?: string | undefined
  mimeType?: string | undefined
}
type GoogleCloudDocumentaiV1beta3GcsDocuments = {
  documents?: GoogleCloudDocumentaiV1beta3GcsDocument[] | undefined
}
type GoogleCloudDocumentaiV1beta3GcsPrefix = { gcsUriPrefix?: string | undefined }
type GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig = {
  gcsDocuments?: GoogleCloudDocumentaiV1beta3GcsDocuments | undefined
  gcsPrefix?: GoogleCloudDocumentaiV1beta3GcsPrefix | undefined
}
type GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig = {
  gcsDestination?: string | undefined
}
type GoogleCloudDocumentaiV1beta3OcrConfigHints = { languageHints?: string[] | undefined }
type GoogleCloudDocumentaiV1beta3OcrConfig = {
  advancedOcrOptions?: string[] | undefined
  enableImageQualityScores?: boolean | undefined
  enableNativePdfParsing?: boolean | undefined
  enableSymbol?: boolean | undefined
  hints?: GoogleCloudDocumentaiV1beta3OcrConfigHints | undefined
}
type GoogleCloudDocumentaiV1beta3ProcessOptions = {
  ocrConfig?: GoogleCloudDocumentaiV1beta3OcrConfig | undefined
}
type GoogleCloudDocumentaiV1beta3BatchProcessRequest = {
  documentOutputConfig?: GoogleCloudDocumentaiV1beta3DocumentOutputConfig | undefined
  inputConfigs?: GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig[] | undefined
  inputDocuments?: GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig | undefined
  outputConfig?: GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig | undefined
  processOptions?: GoogleCloudDocumentaiV1beta3ProcessOptions | undefined
  skipHumanReview?: boolean | undefined
}
type GoogleProtobufEmpty = { [x: string]: unknown }
type GoogleCloudDocumentaiV1beta3DeployProcessorVersionRequest = { [x: string]: unknown }
type GoogleCloudDocumentaiV1beta3DisableProcessorRequest = { [x: string]: unknown }
type GoogleCloudDocumentaiV1beta3EnableProcessorRequest = { [x: string]: unknown }
type GoogleCloudDocumentaiV1beta3RawDocument = {
  content?: string | undefined
  mimeType?: string | undefined
}
type GoogleCloudDocumentaiV1beta3ProcessRequest = {
  document?: GoogleCloudDocumentaiV1beta3Document | undefined
  fieldMask?: string | undefined
  inlineDocument?: GoogleCloudDocumentaiV1beta3Document | undefined
  processOptions?: GoogleCloudDocumentaiV1beta3ProcessOptions | undefined
  rawDocument?: GoogleCloudDocumentaiV1beta3RawDocument | undefined
  skipHumanReview?: boolean | undefined
}
type GoogleCloudDocumentaiV1beta3HumanReviewStatus = {
  humanReviewOperation?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'SKIPPED'
    | 'VALIDATION_PASSED'
    | 'IN_PROGRESS'
    | 'ERROR'
    | undefined
  stateMessage?: string | undefined
}
type GoogleCloudDocumentaiV1beta3ProcessResponse = {
  document?: GoogleCloudDocumentaiV1beta3Document | undefined
  humanReviewOperation?: string | undefined
  humanReviewStatus?: GoogleCloudDocumentaiV1beta3HumanReviewStatus | undefined
}
type GoogleCloudDocumentaiV1beta3UndeployProcessorVersionRequest = { [x: string]: unknown }
type GoogleCloudDocumentaiV1beta3EvaluationMetrics = {
  f1Score?: number | undefined
  falseNegativesCount?: number | undefined
  falsePositivesCount?: number | undefined
  groundTruthDocumentCount?: number | undefined
  groundTruthOccurrencesCount?: number | undefined
  precision?: number | undefined
  predictedDocumentCount?: number | undefined
  predictedOccurrencesCount?: number | undefined
  recall?: number | undefined
  totalDocumentsCount?: number | undefined
  truePositivesCount?: number | undefined
}
type GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics = {
  confidenceLevel?: number | undefined
  metrics?: GoogleCloudDocumentaiV1beta3EvaluationMetrics | undefined
}
type GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics = {
  auprc?: number | undefined
  auprcExact?: number | undefined
  confidenceLevelMetrics?:
    | GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics[]
    | undefined
  confidenceLevelMetricsExact?:
    | GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics[]
    | undefined
  estimatedCalibrationError?: number | undefined
  estimatedCalibrationErrorExact?: number | undefined
  metricsType?: 'METRICS_TYPE_UNSPECIFIED' | 'AGGREGATE' | undefined
}
type GoogleCloudDocumentaiV1beta3EvaluationCounters = {
  evaluatedDocumentsCount?: number | undefined
  failedDocumentsCount?: number | undefined
  inputDocumentsCount?: number | undefined
  invalidDocumentsCount?: number | undefined
}
type GoogleCloudDocumentaiV1beta3Evaluation = {
  allEntitiesMetrics?: GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics | undefined
  createTime?: string | undefined
  documentCounters?: GoogleCloudDocumentaiV1beta3EvaluationCounters | undefined
  entityMetrics?:
    | { [x: string]: GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics }
    | undefined
  kmsKeyName?: string | undefined
  kmsKeyVersionName?: string | undefined
  name?: string | undefined
}
type GoogleCloudDocumentaiV1beta3ListEvaluationsResponse = {
  evaluations?: GoogleCloudDocumentaiV1beta3Evaluation[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse = {
  nextPageToken?: string | undefined
  processorTypes?: GoogleCloudDocumentaiV1beta3ProcessorType[] | undefined
}
type GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo = {
  deprecationTime?: string | undefined
  replacementProcessorVersion?: string | undefined
}
type GoogleCloudDocumentaiV1beta3EvaluationReference = {
  aggregateMetrics?: GoogleCloudDocumentaiV1beta3EvaluationMetrics | undefined
  aggregateMetricsExact?: GoogleCloudDocumentaiV1beta3EvaluationMetrics | undefined
  evaluation?: string | undefined
  operation?: string | undefined
}
type GoogleCloudDocumentaiV1beta3ProcessorVersion = {
  createTime?: string | undefined
  deprecationInfo?: GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo | undefined
  displayName?: string | undefined
  documentSchema?: GoogleCloudDocumentaiV1beta3DocumentSchema | undefined
  googleManaged?: boolean | undefined
  kmsKeyName?: string | undefined
  kmsKeyVersionName?: string | undefined
  latestEvaluation?: GoogleCloudDocumentaiV1beta3EvaluationReference | undefined
  name?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'DEPLOYED'
    | 'DEPLOYING'
    | 'UNDEPLOYED'
    | 'UNDEPLOYING'
    | 'CREATING'
    | 'DELETING'
    | 'FAILED'
    | 'IMPORTING'
    | undefined
}
type GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse = {
  nextPageToken?: string | undefined
  processorVersions?: GoogleCloudDocumentaiV1beta3ProcessorVersion[] | undefined
}
type GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequest = {
  processorVersionSource?: string | undefined
}
type GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData = {
  testDocuments?: GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig | undefined
  trainingDocuments?: GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig | undefined
}
type GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest = {
  baseProcessorVersion?: string | undefined
  documentSchema?: GoogleCloudDocumentaiV1beta3DocumentSchema | undefined
  inputData?: GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData | undefined
  processorVersion?: GoogleCloudDocumentaiV1beta3ProcessorVersion | undefined
}
type GoogleCloudDocumentaiV1beta3Processor = {
  createTime?: string | undefined
  defaultProcessorVersion?: string | undefined
  displayName?: string | undefined
  kmsKeyName?: string | undefined
  name?: string | undefined
  processEndpoint?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'ENABLED'
    | 'DISABLED'
    | 'ENABLING'
    | 'DISABLING'
    | 'CREATING'
    | 'FAILED'
    | 'DELETING'
    | undefined
  type?: string | undefined
}
type GoogleCloudDocumentaiV1beta3ListProcessorsResponse = {
  nextPageToken?: string | undefined
  processors?: GoogleCloudDocumentaiV1beta3Processor[] | undefined
}
type GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponse = {
  processorTypes?: GoogleCloudDocumentaiV1beta3ProcessorType[] | undefined
}
type GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionRequest = {
  evaluationDocuments?: GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig | undefined
}
type GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionRequest = {
  defaultProcessorVersion?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta3/:humanReviewConfig:reviewDocument': {
      $post: {
        input: { param: { humanReviewConfig: string } } & {
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
        } & { json: GoogleCloudDocumentaiV1beta3ReviewDocumentRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta3/:name': {
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
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            filter?: string | undefined
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
        output: GoogleCloudDocumentaiV1beta3ProcessorType
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta3/:name/locations': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            filter?: string | undefined
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
        output: GoogleCloudLocationListLocationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta3/:name:batchProcess': {
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
        } & { json: GoogleCloudDocumentaiV1beta3BatchProcessRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta3/:name:cancel': {
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
        }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta3/:name:deploy': {
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
        } & { json: GoogleCloudDocumentaiV1beta3DeployProcessorVersionRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta3/:name:disable': {
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
        } & { json: GoogleCloudDocumentaiV1beta3DisableProcessorRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta3/:name:enable': {
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
        } & { json: GoogleCloudDocumentaiV1beta3EnableProcessorRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta3/:name:process': {
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
        } & { json: GoogleCloudDocumentaiV1beta3ProcessRequest }
        output: GoogleCloudDocumentaiV1beta3ProcessResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta3/:name:undeploy': {
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
        } & { json: GoogleCloudDocumentaiV1beta3UndeployProcessorVersionRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta3/:parent/evaluations': {
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
        output: GoogleCloudDocumentaiV1beta3ListEvaluationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta3/:parent/processorTypes': {
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
        output: GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta3/:parent/processorVersions': {
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
        output: GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta3/:parent/processorVersions:importProcessorVersion': {
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
        } & { json: GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta3/:parent/processorVersions:train': {
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
        } & { json: GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta3/:parent/processors': {
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
        output: GoogleCloudDocumentaiV1beta3ListProcessorsResponse
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
        } & { json: GoogleCloudDocumentaiV1beta3Processor }
        output: GoogleCloudDocumentaiV1beta3Processor
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta3/:parent:fetchProcessorTypes': {
      $get: {
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
        }
        output: GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta3/:processorVersion:evaluateProcessorVersion': {
      $post: {
        input: { param: { processorVersion: string } } & {
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
        } & { json: GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta3/:processor:setDefaultProcessorVersion': {
      $post: {
        input: { param: { processor: string } } & {
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
        } & { json: GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
