type Empty = { [x: string]: unknown }
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type Operation = {
  done?: boolean | undefined
  error?: Status | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type ArrayStats = { memberStats?: DataStats | undefined }
type SingleCategoryStats = { count?: string | undefined; value?: string | undefined }
type CategoryStats = { topCategoryStats?: SingleCategoryStats[] | undefined }
type HistogramBucket = {
  count?: string | undefined
  max?: number | undefined
  min?: number | undefined
}
type Float64Stats = {
  histogramBuckets?: HistogramBucket[] | undefined
  mean?: number | undefined
  quantiles?: number[] | undefined
  standardDeviation?: number | undefined
}
type UnigramStats = { count?: string | undefined; value?: string | undefined }
type StringStats = { topUnigramStats?: UnigramStats[] | undefined }
type StructStats = { fieldStats?: { [x: string]: DataStats } | undefined }
type GranularStats = { buckets?: { [x: string]: string } | undefined }
type TimestampStats = { granularStats?: { [x: string]: GranularStats } | undefined }
type DataStats = {
  arrayStats?: ArrayStats | undefined
  categoryStats?: CategoryStats | undefined
  distinctValueCount?: string | undefined
  float64Stats?: Float64Stats | undefined
  nullValueCount?: string | undefined
  stringStats?: StringStats | undefined
  structStats?: StructStats | undefined
  timestampStats?: TimestampStats | undefined
  validValueCount?: string | undefined
}
type StructType = { fields?: { [x: string]: DataType } | undefined }
type DataType = {
  listElementType?: DataType | undefined
  nullable?: boolean | undefined
  structType?: StructType | undefined
  timeFormat?: string | undefined
  typeCode?:
    | 'TYPE_CODE_UNSPECIFIED'
    | 'FLOAT64'
    | 'TIMESTAMP'
    | 'STRING'
    | 'ARRAY'
    | 'STRUCT'
    | 'CATEGORY'
    | undefined
}
type CorrelationStats = { cramersV?: number | undefined }
type CorrelatedColumn = {
  columnSpecId?: string | undefined
  correlationStats?: CorrelationStats | undefined
}
type ColumnSpec = {
  dataStats?: DataStats | undefined
  dataType?: DataType | undefined
  displayName?: string | undefined
  etag?: string | undefined
  name?: string | undefined
  topCorrelatedColumns?: CorrelatedColumn[] | undefined
}
type Location = {
  displayName?: string | undefined
  labels?: { [x: string]: string } | undefined
  locationId?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
}
type ListLocationsResponse = {
  locations?: Location[] | undefined
  nextPageToken?: string | undefined
}
type ListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: Operation[] | undefined
}
type BigQuerySource = { inputUri?: string | undefined }
type GcsSource = { inputUris?: string[] | undefined }
type BatchPredictInputConfig = {
  bigquerySource?: BigQuerySource | undefined
  gcsSource?: GcsSource | undefined
}
type BigQueryDestination = { outputUri?: string | undefined }
type GcsDestination = { outputUriPrefix?: string | undefined }
type BatchPredictOutputConfig = {
  bigqueryDestination?: BigQueryDestination | undefined
  gcsDestination?: GcsDestination | undefined
}
type BatchPredictRequest = {
  inputConfig?: BatchPredictInputConfig | undefined
  outputConfig?: BatchPredictOutputConfig | undefined
  params?: { [x: string]: string } | undefined
}
type CancelOperationRequest = { [x: string]: unknown }
type ImageClassificationModelDeploymentMetadata = { nodeCount?: string | undefined }
type ImageObjectDetectionModelDeploymentMetadata = { nodeCount?: string | undefined }
type DeployModelRequest = {
  imageClassificationModelDeploymentMetadata?:
    | ImageClassificationModelDeploymentMetadata
    | undefined
  imageObjectDetectionModelDeploymentMetadata?:
    | ImageObjectDetectionModelDeploymentMetadata
    | undefined
}
type GcrDestination = { outputUri?: string | undefined }
type ModelExportOutputConfig = {
  gcrDestination?: GcrDestination | undefined
  gcsDestination?: GcsDestination | undefined
  modelFormat?: string | undefined
  params?: { [x: string]: string } | undefined
}
type ExportModelRequest = { outputConfig?: ModelExportOutputConfig | undefined }
type OutputConfig = {
  bigqueryDestination?: BigQueryDestination | undefined
  gcsDestination?: GcsDestination | undefined
}
type ExportDataRequest = { outputConfig?: OutputConfig | undefined }
type ExportEvaluatedExamplesOutputConfig = { bigqueryDestination?: BigQueryDestination | undefined }
type ExportEvaluatedExamplesRequest = {
  outputConfig?: ExportEvaluatedExamplesOutputConfig | undefined
}
type InputConfig = {
  bigquerySource?: BigQuerySource | undefined
  gcsSource?: GcsSource | undefined
  params?: { [x: string]: string } | undefined
}
type ImportDataRequest = { inputConfig?: InputConfig | undefined }
type DocumentDimensions = {
  height?: number | undefined
  unit?: 'DOCUMENT_DIMENSION_UNIT_UNSPECIFIED' | 'INCH' | 'CENTIMETER' | 'POINT' | undefined
  width?: number | undefined
}
type TextSnippet = {
  content?: string | undefined
  contentUri?: string | undefined
  mimeType?: string | undefined
}
type DocumentInputConfig = { gcsSource?: GcsSource | undefined }
type NormalizedVertex = { x?: number | undefined; y?: number | undefined }
type BoundingPoly = { normalizedVertices?: NormalizedVertex[] | undefined }
type TextSegment = {
  content?: string | undefined
  endOffset?: string | undefined
  startOffset?: string | undefined
}
type Layout = {
  boundingPoly?: BoundingPoly | undefined
  pageNumber?: number | undefined
  textSegment?: TextSegment | undefined
  textSegmentType?:
    | 'TEXT_SEGMENT_TYPE_UNSPECIFIED'
    | 'TOKEN'
    | 'PARAGRAPH'
    | 'FORM_FIELD'
    | 'FORM_FIELD_NAME'
    | 'FORM_FIELD_CONTENTS'
    | 'TABLE'
    | 'TABLE_HEADER'
    | 'TABLE_ROW'
    | 'TABLE_CELL'
    | undefined
}
type Document = {
  documentDimensions?: DocumentDimensions | undefined
  documentText?: TextSnippet | undefined
  inputConfig?: DocumentInputConfig | undefined
  layout?: Layout[] | undefined
  pageCount?: number | undefined
}
type Image = {
  imageBytes?: string | undefined
  inputConfig?: InputConfig | undefined
  thumbnailUri?: string | undefined
}
type Row = { columnSpecIds?: string[] | undefined; values?: { [x: string]: unknown }[] | undefined }
type ExamplePayload = {
  document?: Document | undefined
  image?: Image | undefined
  row?: Row | undefined
  textSnippet?: TextSnippet | undefined
}
type PredictRequest = {
  params?: { [x: string]: string } | undefined
  payload?: ExamplePayload | undefined
}
type ClassificationAnnotation = { score?: number | undefined }
type ImageObjectDetectionAnnotation = {
  boundingBox?: BoundingPoly | undefined
  score?: number | undefined
}
type DoubleRange = { end?: number | undefined; start?: number | undefined }
type TablesModelColumnInfo = {
  columnDisplayName?: string | undefined
  columnSpecName?: string | undefined
  featureImportance?: number | undefined
}
type TablesAnnotation = {
  baselineScore?: number | undefined
  predictionInterval?: DoubleRange | undefined
  score?: number | undefined
  tablesModelColumnInfo?: TablesModelColumnInfo[] | undefined
  value?: { [x: string]: unknown } | undefined
}
type TextExtractionAnnotation = {
  score?: number | undefined
  textSegment?: TextSegment | undefined
}
type TextSentimentAnnotation = { sentiment?: number | undefined }
type TranslationAnnotation = { translatedContent?: TextSnippet | undefined }
type TimeSegment = { endTimeOffset?: string | undefined; startTimeOffset?: string | undefined }
type VideoClassificationAnnotation = {
  classificationAnnotation?: ClassificationAnnotation | undefined
  timeSegment?: TimeSegment | undefined
  type?: string | undefined
}
type VideoObjectTrackingAnnotation = {
  boundingBox?: BoundingPoly | undefined
  instanceId?: string | undefined
  score?: number | undefined
  timeOffset?: string | undefined
}
type AnnotationPayload = {
  annotationSpecId?: string | undefined
  classification?: ClassificationAnnotation | undefined
  displayName?: string | undefined
  imageObjectDetection?: ImageObjectDetectionAnnotation | undefined
  tables?: TablesAnnotation | undefined
  textExtraction?: TextExtractionAnnotation | undefined
  textSentiment?: TextSentimentAnnotation | undefined
  translation?: TranslationAnnotation | undefined
  videoClassification?: VideoClassificationAnnotation | undefined
  videoObjectTracking?: VideoObjectTrackingAnnotation | undefined
}
type PredictResponse = {
  metadata?: { [x: string]: string } | undefined
  payload?: AnnotationPayload[] | undefined
  preprocessedInput?: ExamplePayload | undefined
}
type UndeployModelRequest = { [x: string]: unknown }
type WaitOperationRequest = { timeout?: string | undefined }
type ListColumnSpecsResponse = {
  columnSpecs?: ColumnSpec[] | undefined
  nextPageToken?: string | undefined
}
type ImageClassificationDatasetMetadata = {
  classificationType?: 'CLASSIFICATION_TYPE_UNSPECIFIED' | 'MULTICLASS' | 'MULTILABEL' | undefined
}
type ImageObjectDetectionDatasetMetadata = { [x: string]: unknown }
type TablesDatasetMetadata = {
  mlUseColumnSpecId?: string | undefined
  primaryTableSpecId?: string | undefined
  statsUpdateTime?: string | undefined
  targetColumnCorrelations?: { [x: string]: CorrelationStats } | undefined
  targetColumnSpecId?: string | undefined
  weightColumnSpecId?: string | undefined
}
type TextClassificationDatasetMetadata = {
  classificationType?: 'CLASSIFICATION_TYPE_UNSPECIFIED' | 'MULTICLASS' | 'MULTILABEL' | undefined
}
type TextExtractionDatasetMetadata = { [x: string]: unknown }
type TextSentimentDatasetMetadata = { sentimentMax?: number | undefined }
type TranslationDatasetMetadata = {
  sourceLanguageCode?: string | undefined
  targetLanguageCode?: string | undefined
}
type VideoClassificationDatasetMetadata = { [x: string]: unknown }
type VideoObjectTrackingDatasetMetadata = { [x: string]: unknown }
type Dataset = {
  createTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  etag?: string | undefined
  exampleCount?: number | undefined
  imageClassificationDatasetMetadata?: ImageClassificationDatasetMetadata | undefined
  imageObjectDetectionDatasetMetadata?: ImageObjectDetectionDatasetMetadata | undefined
  name?: string | undefined
  tablesDatasetMetadata?: TablesDatasetMetadata | undefined
  textClassificationDatasetMetadata?: TextClassificationDatasetMetadata | undefined
  textExtractionDatasetMetadata?: TextExtractionDatasetMetadata | undefined
  textSentimentDatasetMetadata?: TextSentimentDatasetMetadata | undefined
  translationDatasetMetadata?: TranslationDatasetMetadata | undefined
  videoClassificationDatasetMetadata?: VideoClassificationDatasetMetadata | undefined
  videoObjectTrackingDatasetMetadata?: VideoObjectTrackingDatasetMetadata | undefined
}
type ListDatasetsResponse = { datasets?: Dataset[] | undefined; nextPageToken?: string | undefined }
type ClassificationEvaluationMetricsConfidenceMetricsEntry = {
  confidenceThreshold?: number | undefined
  f1Score?: number | undefined
  f1ScoreAt1?: number | undefined
  falseNegativeCount?: string | undefined
  falsePositiveCount?: string | undefined
  falsePositiveRate?: number | undefined
  falsePositiveRateAt1?: number | undefined
  positionThreshold?: number | undefined
  precision?: number | undefined
  precisionAt1?: number | undefined
  recall?: number | undefined
  recallAt1?: number | undefined
  trueNegativeCount?: string | undefined
  truePositiveCount?: string | undefined
}
type ClassificationEvaluationMetricsConfusionMatrixRow = { exampleCount?: number[] | undefined }
type ConfusionMatrix = {
  annotationSpecId?: string[] | undefined
  displayName?: string[] | undefined
  row?: ClassificationEvaluationMetricsConfusionMatrixRow[] | undefined
}
type ClassificationEvaluationMetrics = {
  annotationSpecId?: string[] | undefined
  auPrc?: number | undefined
  auRoc?: number | undefined
  baseAuPrc?: number | undefined
  confidenceMetricsEntry?: ClassificationEvaluationMetricsConfidenceMetricsEntry[] | undefined
  confusionMatrix?: ConfusionMatrix | undefined
  logLoss?: number | undefined
}
type BoundingBoxMetricsEntryConfidenceMetricsEntry = {
  confidenceThreshold?: number | undefined
  f1Score?: number | undefined
  precision?: number | undefined
  recall?: number | undefined
}
type BoundingBoxMetricsEntry = {
  confidenceMetricsEntries?: BoundingBoxMetricsEntryConfidenceMetricsEntry[] | undefined
  iouThreshold?: number | undefined
  meanAveragePrecision?: number | undefined
}
type ImageObjectDetectionEvaluationMetrics = {
  boundingBoxMeanAveragePrecision?: number | undefined
  boundingBoxMetricsEntries?: BoundingBoxMetricsEntry[] | undefined
  evaluatedBoundingBoxCount?: number | undefined
}
type RegressionEvaluationMetrics = {
  meanAbsoluteError?: number | undefined
  meanAbsolutePercentageError?: number | undefined
  rSquared?: number | undefined
  rootMeanSquaredError?: number | undefined
  rootMeanSquaredLogError?: number | undefined
}
type TextExtractionEvaluationMetricsConfidenceMetricsEntry = {
  confidenceThreshold?: number | undefined
  f1Score?: number | undefined
  precision?: number | undefined
  recall?: number | undefined
}
type TextExtractionEvaluationMetrics = {
  auPrc?: number | undefined
  confidenceMetricsEntries?: TextExtractionEvaluationMetricsConfidenceMetricsEntry[] | undefined
}
type TextSentimentEvaluationMetrics = {
  annotationSpecId?: string[] | undefined
  confusionMatrix?: ConfusionMatrix | undefined
  f1Score?: number | undefined
  linearKappa?: number | undefined
  meanAbsoluteError?: number | undefined
  meanSquaredError?: number | undefined
  precision?: number | undefined
  quadraticKappa?: number | undefined
  recall?: number | undefined
}
type TranslationEvaluationMetrics = {
  baseBleuScore?: number | undefined
  bleuScore?: number | undefined
}
type VideoObjectTrackingEvaluationMetrics = {
  boundingBoxMeanAveragePrecision?: number | undefined
  boundingBoxMetricsEntries?: BoundingBoxMetricsEntry[] | undefined
  evaluatedBoundingBoxCount?: number | undefined
  evaluatedFrameCount?: number | undefined
}
type ModelEvaluation = {
  annotationSpecId?: string | undefined
  classificationEvaluationMetrics?: ClassificationEvaluationMetrics | undefined
  createTime?: string | undefined
  displayName?: string | undefined
  evaluatedExampleCount?: number | undefined
  imageObjectDetectionEvaluationMetrics?: ImageObjectDetectionEvaluationMetrics | undefined
  name?: string | undefined
  regressionEvaluationMetrics?: RegressionEvaluationMetrics | undefined
  textExtractionEvaluationMetrics?: TextExtractionEvaluationMetrics | undefined
  textSentimentEvaluationMetrics?: TextSentimentEvaluationMetrics | undefined
  translationEvaluationMetrics?: TranslationEvaluationMetrics | undefined
  videoObjectTrackingEvaluationMetrics?: VideoObjectTrackingEvaluationMetrics | undefined
}
type ListModelEvaluationsResponse = {
  modelEvaluation?: ModelEvaluation[] | undefined
  nextPageToken?: string | undefined
}
type ImageClassificationModelMetadata = {
  baseModelId?: string | undefined
  modelType?: string | undefined
  nodeCount?: string | undefined
  nodeQps?: number | undefined
  stopReason?: string | undefined
  trainBudget?: string | undefined
  trainCost?: string | undefined
}
type ImageObjectDetectionModelMetadata = {
  modelType?: string | undefined
  nodeCount?: string | undefined
  nodeQps?: number | undefined
  stopReason?: string | undefined
  trainBudgetMilliNodeHours?: string | undefined
  trainCostMilliNodeHours?: string | undefined
}
type TablesModelMetadata = {
  disableEarlyStopping?: boolean | undefined
  inputFeatureColumnSpecs?: ColumnSpec[] | undefined
  optimizationObjective?: string | undefined
  optimizationObjectivePrecisionValue?: number | undefined
  optimizationObjectiveRecallValue?: number | undefined
  tablesModelColumnInfo?: TablesModelColumnInfo[] | undefined
  targetColumnSpec?: ColumnSpec | undefined
  trainBudgetMilliNodeHours?: string | undefined
  trainCostMilliNodeHours?: string | undefined
}
type TextClassificationModelMetadata = {
  classificationType?: 'CLASSIFICATION_TYPE_UNSPECIFIED' | 'MULTICLASS' | 'MULTILABEL' | undefined
}
type TextExtractionModelMetadata = { modelHint?: string | undefined }
type TextSentimentModelMetadata = { [x: string]: unknown }
type TranslationModelMetadata = {
  baseModel?: string | undefined
  sourceLanguageCode?: string | undefined
  targetLanguageCode?: string | undefined
}
type VideoClassificationModelMetadata = { [x: string]: unknown }
type VideoObjectTrackingModelMetadata = { [x: string]: unknown }
type Model = {
  createTime?: string | undefined
  datasetId?: string | undefined
  deploymentState?: 'DEPLOYMENT_STATE_UNSPECIFIED' | 'DEPLOYED' | 'UNDEPLOYED' | undefined
  displayName?: string | undefined
  imageClassificationModelMetadata?: ImageClassificationModelMetadata | undefined
  imageObjectDetectionModelMetadata?: ImageObjectDetectionModelMetadata | undefined
  name?: string | undefined
  tablesModelMetadata?: TablesModelMetadata | undefined
  textClassificationModelMetadata?: TextClassificationModelMetadata | undefined
  textExtractionModelMetadata?: TextExtractionModelMetadata | undefined
  textSentimentModelMetadata?: TextSentimentModelMetadata | undefined
  trainExampleCount?: number | undefined
  translationModelMetadata?: TranslationModelMetadata | undefined
  updateTime?: string | undefined
  validateExampleCount?: number | undefined
  videoClassificationModelMetadata?: VideoClassificationModelMetadata | undefined
  videoObjectTrackingModelMetadata?: VideoObjectTrackingModelMetadata | undefined
}
type ListModelsResponse = { model?: Model[] | undefined; nextPageToken?: string | undefined }
type TableSpec = {
  columnCount?: string | undefined
  etag?: string | undefined
  inputConfigs?: InputConfig[] | undefined
  name?: string | undefined
  rowCount?: string | undefined
  timeColumnSpecId?: string | undefined
  validRowCount?: string | undefined
}
type ListTableSpecsResponse = {
  nextPageToken?: string | undefined
  tableSpecs?: TableSpec[] | undefined
}
type Expr = {
  description?: string | undefined
  expression?: string | undefined
  location?: string | undefined
  title?: string | undefined
}
type Binding = {
  condition?: Expr | undefined
  members?: string[] | undefined
  role?: string | undefined
}
type Policy = {
  bindings?: Binding[] | undefined
  etag?: string | undefined
  version?: number | undefined
}
type SetIamPolicyRequest = { policy?: Policy | undefined }
type TestIamPermissionsRequest = { permissions?: string[] | undefined }
type TestIamPermissionsResponse = { permissions?: string[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/:name': {
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            fieldMask?: string | undefined
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
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
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
        } & { json: ColumnSpec }
        output: ColumnSpec
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name/locations': {
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
        output: ListLocationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name/operations': {
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
        output: ListOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:batchPredict': {
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
        } & { json: BatchPredictRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:cancel': {
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
        } & { json: CancelOperationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:deploy': {
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
        } & { json: DeployModelRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:export': {
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
        } & { json: ExportModelRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:exportData': {
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
        } & { json: ExportDataRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:exportEvaluatedExamples': {
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
        } & { json: ExportEvaluatedExamplesRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:importData': {
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
        } & { json: ImportDataRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:predict': {
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
        } & { json: PredictRequest }
        output: PredictResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:undeploy': {
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
        } & { json: UndeployModelRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:wait': {
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
        } & { json: WaitOperationRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/columnSpecs': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            fieldMask?: string | undefined
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
        output: ListColumnSpecsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/datasets': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: ListDatasetsResponse
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
        } & { json: Dataset }
        output: Dataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/modelEvaluations': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: ListModelEvaluationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/models': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: ListModelsResponse
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
        } & { json: Model }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/tableSpecs': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            fieldMask?: string | undefined
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
        output: ListTableSpecsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:getIamPolicy': {
      $get: {
        input: { param: { resource: string } } & {
          query: {
            'options.requestedPolicyVersion'?: number | undefined
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
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:setIamPolicy': {
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
        } & { json: SetIamPolicyRequest }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:testIamPermissions': {
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
        } & { json: TestIamPermissionsRequest }
        output: TestIamPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
