type GoogleProtobufEmpty = { [x: string]: unknown }
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
type GoogleCloudDatalabelingV1beta1Attempt = {
  attemptTime?: string | undefined
  partialFailures?: GoogleRpcStatus[] | undefined
}
type GoogleCloudDatalabelingV1beta1BoundingPolyConfig = {
  annotationSpecSet?: string | undefined
  instructionMessage?: string | undefined
}
type GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions = {
  iouThreshold?: number | undefined
}
type GoogleCloudDatalabelingV1beta1EvaluationConfig = {
  boundingBoxEvaluationOptions?:
    | GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions
    | undefined
}
type GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig = {
  email?: string | undefined
  minAcceptableMeanAveragePrecision?: number | undefined
}
type GoogleCloudDatalabelingV1beta1HumanAnnotationConfig = {
  annotatedDatasetDescription?: string | undefined
  annotatedDatasetDisplayName?: string | undefined
  contributorEmails?: string[] | undefined
  instruction?: string | undefined
  labelGroup?: string | undefined
  languageCode?: string | undefined
  questionDuration?: string | undefined
  replicaCount?: number | undefined
  userEmailAddress?: string | undefined
}
type GoogleCloudDatalabelingV1beta1ImageClassificationConfig = {
  allowMultiLabel?: boolean | undefined
  annotationSpecSet?: string | undefined
  answerAggregationType?:
    | 'STRING_AGGREGATION_TYPE_UNSPECIFIED'
    | 'MAJORITY_VOTE'
    | 'UNANIMOUS_VOTE'
    | 'NO_AGGREGATION'
    | undefined
}
type GoogleCloudDatalabelingV1beta1BigQuerySource = { inputUri?: string | undefined }
type GoogleCloudDatalabelingV1beta1ClassificationMetadata = { isMultiLabel?: boolean | undefined }
type GoogleCloudDatalabelingV1beta1GcsSource = {
  inputUri?: string | undefined
  mimeType?: string | undefined
}
type GoogleCloudDatalabelingV1beta1TextMetadata = { languageCode?: string | undefined }
type GoogleCloudDatalabelingV1beta1InputConfig = {
  annotationType?:
    | 'ANNOTATION_TYPE_UNSPECIFIED'
    | 'IMAGE_CLASSIFICATION_ANNOTATION'
    | 'IMAGE_BOUNDING_BOX_ANNOTATION'
    | 'IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION'
    | 'IMAGE_BOUNDING_POLY_ANNOTATION'
    | 'IMAGE_POLYLINE_ANNOTATION'
    | 'IMAGE_SEGMENTATION_ANNOTATION'
    | 'VIDEO_SHOTS_CLASSIFICATION_ANNOTATION'
    | 'VIDEO_OBJECT_TRACKING_ANNOTATION'
    | 'VIDEO_OBJECT_DETECTION_ANNOTATION'
    | 'VIDEO_EVENT_ANNOTATION'
    | 'TEXT_CLASSIFICATION_ANNOTATION'
    | 'TEXT_ENTITY_EXTRACTION_ANNOTATION'
    | 'GENERAL_CLASSIFICATION_ANNOTATION'
    | undefined
  bigquerySource?: GoogleCloudDatalabelingV1beta1BigQuerySource | undefined
  classificationMetadata?: GoogleCloudDatalabelingV1beta1ClassificationMetadata | undefined
  dataType?: 'DATA_TYPE_UNSPECIFIED' | 'IMAGE' | 'VIDEO' | 'TEXT' | 'GENERAL_DATA' | undefined
  gcsSource?: GoogleCloudDatalabelingV1beta1GcsSource | undefined
  textMetadata?: GoogleCloudDatalabelingV1beta1TextMetadata | undefined
}
type GoogleCloudDatalabelingV1beta1SentimentConfig = {
  enableLabelSentimentSelection?: boolean | undefined
}
type GoogleCloudDatalabelingV1beta1TextClassificationConfig = {
  allowMultiLabel?: boolean | undefined
  annotationSpecSet?: string | undefined
  sentimentConfig?: GoogleCloudDatalabelingV1beta1SentimentConfig | undefined
}
type GoogleCloudDatalabelingV1beta1EvaluationJobConfig = {
  bigqueryImportKeys?: { [x: string]: string } | undefined
  boundingPolyConfig?: GoogleCloudDatalabelingV1beta1BoundingPolyConfig | undefined
  evaluationConfig?: GoogleCloudDatalabelingV1beta1EvaluationConfig | undefined
  evaluationJobAlertConfig?: GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig | undefined
  exampleCount?: number | undefined
  exampleSamplePercentage?: number | undefined
  humanAnnotationConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig | undefined
  imageClassificationConfig?: GoogleCloudDatalabelingV1beta1ImageClassificationConfig | undefined
  inputConfig?: GoogleCloudDatalabelingV1beta1InputConfig | undefined
  textClassificationConfig?: GoogleCloudDatalabelingV1beta1TextClassificationConfig | undefined
}
type GoogleCloudDatalabelingV1beta1EvaluationJob = {
  annotationSpecSet?: string | undefined
  attempts?: GoogleCloudDatalabelingV1beta1Attempt[] | undefined
  createTime?: string | undefined
  description?: string | undefined
  evaluationJobConfig?: GoogleCloudDatalabelingV1beta1EvaluationJobConfig | undefined
  labelMissingGroundTruth?: boolean | undefined
  modelVersion?: string | undefined
  name?: string | undefined
  schedule?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'SCHEDULED' | 'RUNNING' | 'PAUSED' | 'STOPPED' | undefined
}
type GoogleLongrunningListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: GoogleLongrunningOperation[] | undefined
}
type GoogleCloudDatalabelingV1beta1GcsDestination = {
  mimeType?: string | undefined
  outputUri?: string | undefined
}
type GoogleCloudDatalabelingV1beta1GcsFolderDestination = { outputFolderUri?: string | undefined }
type GoogleCloudDatalabelingV1beta1OutputConfig = {
  gcsDestination?: GoogleCloudDatalabelingV1beta1GcsDestination | undefined
  gcsFolderDestination?: GoogleCloudDatalabelingV1beta1GcsFolderDestination | undefined
}
type GoogleCloudDatalabelingV1beta1ExportDataRequest = {
  annotatedDataset?: string | undefined
  filter?: string | undefined
  outputConfig?: GoogleCloudDatalabelingV1beta1OutputConfig | undefined
  userEmailAddress?: string | undefined
}
type GoogleCloudDatalabelingV1beta1ImportDataRequest = {
  inputConfig?: GoogleCloudDatalabelingV1beta1InputConfig | undefined
  userEmailAddress?: string | undefined
}
type GoogleCloudDatalabelingV1beta1PauseEvaluationJobRequest = { [x: string]: unknown }
type GoogleCloudDatalabelingV1beta1ResumeEvaluationJobRequest = { [x: string]: unknown }
type GoogleCloudDatalabelingV1beta1LabelStats = {
  exampleCount?: { [x: string]: string } | undefined
}
type GoogleCloudDatalabelingV1beta1EventConfig = {
  annotationSpecSets?: string[] | undefined
  clipLength?: number | undefined
  overlapLength?: number | undefined
}
type GoogleCloudDatalabelingV1beta1ObjectDetectionConfig = {
  annotationSpecSet?: string | undefined
  extractionFrameRate?: number | undefined
}
type GoogleCloudDatalabelingV1beta1ObjectTrackingConfig = {
  annotationSpecSet?: string | undefined
  clipLength?: number | undefined
  overlapLength?: number | undefined
}
type GoogleCloudDatalabelingV1beta1PolylineConfig = {
  annotationSpecSet?: string | undefined
  instructionMessage?: string | undefined
}
type GoogleCloudDatalabelingV1beta1SegmentationConfig = {
  annotationSpecSet?: string | undefined
  instructionMessage?: string | undefined
}
type GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig = {
  annotationSpecSet?: string | undefined
}
type GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig = {
  allowMultiLabel?: boolean | undefined
  annotationSpecSet?: string | undefined
}
type GoogleCloudDatalabelingV1beta1VideoClassificationConfig = {
  annotationSpecSetConfigs?: GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig[] | undefined
  applyShotDetection?: boolean | undefined
}
type GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata = {
  boundingPolyConfig?: GoogleCloudDatalabelingV1beta1BoundingPolyConfig | undefined
  eventConfig?: GoogleCloudDatalabelingV1beta1EventConfig | undefined
  humanAnnotationConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig | undefined
  imageClassificationConfig?: GoogleCloudDatalabelingV1beta1ImageClassificationConfig | undefined
  objectDetectionConfig?: GoogleCloudDatalabelingV1beta1ObjectDetectionConfig | undefined
  objectTrackingConfig?: GoogleCloudDatalabelingV1beta1ObjectTrackingConfig | undefined
  polylineConfig?: GoogleCloudDatalabelingV1beta1PolylineConfig | undefined
  segmentationConfig?: GoogleCloudDatalabelingV1beta1SegmentationConfig | undefined
  textClassificationConfig?: GoogleCloudDatalabelingV1beta1TextClassificationConfig | undefined
  textEntityExtractionConfig?: GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig | undefined
  videoClassificationConfig?: GoogleCloudDatalabelingV1beta1VideoClassificationConfig | undefined
}
type GoogleCloudDatalabelingV1beta1AnnotatedDataset = {
  annotationSource?: 'ANNOTATION_SOURCE_UNSPECIFIED' | 'OPERATOR' | undefined
  annotationType?:
    | 'ANNOTATION_TYPE_UNSPECIFIED'
    | 'IMAGE_CLASSIFICATION_ANNOTATION'
    | 'IMAGE_BOUNDING_BOX_ANNOTATION'
    | 'IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION'
    | 'IMAGE_BOUNDING_POLY_ANNOTATION'
    | 'IMAGE_POLYLINE_ANNOTATION'
    | 'IMAGE_SEGMENTATION_ANNOTATION'
    | 'VIDEO_SHOTS_CLASSIFICATION_ANNOTATION'
    | 'VIDEO_OBJECT_TRACKING_ANNOTATION'
    | 'VIDEO_OBJECT_DETECTION_ANNOTATION'
    | 'VIDEO_EVENT_ANNOTATION'
    | 'TEXT_CLASSIFICATION_ANNOTATION'
    | 'TEXT_ENTITY_EXTRACTION_ANNOTATION'
    | 'GENERAL_CLASSIFICATION_ANNOTATION'
    | undefined
  blockingResources?: string[] | undefined
  completedExampleCount?: string | undefined
  createTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  exampleCount?: string | undefined
  labelStats?: GoogleCloudDatalabelingV1beta1LabelStats | undefined
  metadata?: GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata | undefined
  name?: string | undefined
}
type GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse = {
  annotatedDatasets?: GoogleCloudDatalabelingV1beta1AnnotatedDataset[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDatalabelingV1beta1AnnotationSpec = {
  description?: string | undefined
  displayName?: string | undefined
  index?: number | undefined
}
type GoogleCloudDatalabelingV1beta1AnnotationSpecSet = {
  annotationSpecs?: GoogleCloudDatalabelingV1beta1AnnotationSpec[] | undefined
  blockingResources?: string[] | undefined
  description?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
}
type GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse = {
  annotationSpecSets?: GoogleCloudDatalabelingV1beta1AnnotationSpecSet[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest = {
  annotationSpecSet?: GoogleCloudDatalabelingV1beta1AnnotationSpecSet | undefined
}
type GoogleCloudDatalabelingV1beta1ImagePayload = {
  imageThumbnail?: string | undefined
  imageUri?: string | undefined
  mimeType?: string | undefined
  signedUri?: string | undefined
}
type GoogleCloudDatalabelingV1beta1TextPayload = { textContent?: string | undefined }
type GoogleCloudDatalabelingV1beta1VideoThumbnail = {
  thumbnail?: string | undefined
  timeOffset?: string | undefined
}
type GoogleCloudDatalabelingV1beta1VideoPayload = {
  frameRate?: number | undefined
  mimeType?: string | undefined
  signedUri?: string | undefined
  videoThumbnails?: GoogleCloudDatalabelingV1beta1VideoThumbnail[] | undefined
  videoUri?: string | undefined
}
type GoogleCloudDatalabelingV1beta1DataItem = {
  imagePayload?: GoogleCloudDatalabelingV1beta1ImagePayload | undefined
  name?: string | undefined
  textPayload?: GoogleCloudDatalabelingV1beta1TextPayload | undefined
  videoPayload?: GoogleCloudDatalabelingV1beta1VideoPayload | undefined
}
type GoogleCloudDatalabelingV1beta1ListDataItemsResponse = {
  dataItems?: GoogleCloudDatalabelingV1beta1DataItem[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDatalabelingV1beta1Dataset = {
  blockingResources?: string[] | undefined
  createTime?: string | undefined
  dataItemCount?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  inputConfigs?: GoogleCloudDatalabelingV1beta1InputConfig[] | undefined
  lastMigrateTime?: string | undefined
  name?: string | undefined
}
type GoogleCloudDatalabelingV1beta1ListDatasetsResponse = {
  datasets?: GoogleCloudDatalabelingV1beta1Dataset[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDatalabelingV1beta1CreateDatasetRequest = {
  dataset?: GoogleCloudDatalabelingV1beta1Dataset | undefined
}
type GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse = {
  evaluationJobs?: GoogleCloudDatalabelingV1beta1EvaluationJob[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest = {
  job?: GoogleCloudDatalabelingV1beta1EvaluationJob | undefined
}
type GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry = {
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec | undefined
  itemCount?: number | undefined
}
type GoogleCloudDatalabelingV1beta1Row = {
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec | undefined
  entries?: GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry[] | undefined
}
type GoogleCloudDatalabelingV1beta1ConfusionMatrix = {
  row?: GoogleCloudDatalabelingV1beta1Row[] | undefined
}
type GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry = {
  confidenceThreshold?: number | undefined
  f1Score?: number | undefined
  f1ScoreAt1?: number | undefined
  f1ScoreAt5?: number | undefined
  precision?: number | undefined
  precisionAt1?: number | undefined
  precisionAt5?: number | undefined
  recall?: number | undefined
  recallAt1?: number | undefined
  recallAt5?: number | undefined
}
type GoogleCloudDatalabelingV1beta1PrCurve = {
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec | undefined
  areaUnderCurve?: number | undefined
  confidenceMetricsEntries?: GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry[] | undefined
  meanAveragePrecision?: number | undefined
}
type GoogleCloudDatalabelingV1beta1ClassificationMetrics = {
  confusionMatrix?: GoogleCloudDatalabelingV1beta1ConfusionMatrix | undefined
  prCurve?: GoogleCloudDatalabelingV1beta1PrCurve | undefined
}
type GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics = {
  prCurve?: GoogleCloudDatalabelingV1beta1PrCurve | undefined
}
type GoogleCloudDatalabelingV1beta1EvaluationMetrics = {
  classificationMetrics?: GoogleCloudDatalabelingV1beta1ClassificationMetrics | undefined
  objectDetectionMetrics?: GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics | undefined
}
type GoogleCloudDatalabelingV1beta1Evaluation = {
  annotationType?:
    | 'ANNOTATION_TYPE_UNSPECIFIED'
    | 'IMAGE_CLASSIFICATION_ANNOTATION'
    | 'IMAGE_BOUNDING_BOX_ANNOTATION'
    | 'IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION'
    | 'IMAGE_BOUNDING_POLY_ANNOTATION'
    | 'IMAGE_POLYLINE_ANNOTATION'
    | 'IMAGE_SEGMENTATION_ANNOTATION'
    | 'VIDEO_SHOTS_CLASSIFICATION_ANNOTATION'
    | 'VIDEO_OBJECT_TRACKING_ANNOTATION'
    | 'VIDEO_OBJECT_DETECTION_ANNOTATION'
    | 'VIDEO_EVENT_ANNOTATION'
    | 'TEXT_CLASSIFICATION_ANNOTATION'
    | 'TEXT_ENTITY_EXTRACTION_ANNOTATION'
    | 'GENERAL_CLASSIFICATION_ANNOTATION'
    | undefined
  config?: GoogleCloudDatalabelingV1beta1EvaluationConfig | undefined
  createTime?: string | undefined
  evaluatedItemCount?: string | undefined
  evaluationJobRunTime?: string | undefined
  evaluationMetrics?: GoogleCloudDatalabelingV1beta1EvaluationMetrics | undefined
  name?: string | undefined
}
type GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse = {
  evaluations?: GoogleCloudDatalabelingV1beta1Evaluation[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest = {
  pageSize?: number | undefined
  pageToken?: string | undefined
}
type GoogleCloudDatalabelingV1beta1OperatorMetadata = {
  comments?: string[] | undefined
  labelVotes?: number | undefined
  score?: number | undefined
  totalVotes?: number | undefined
}
type GoogleCloudDatalabelingV1beta1AnnotationMetadata = {
  operatorMetadata?: GoogleCloudDatalabelingV1beta1OperatorMetadata | undefined
}
type GoogleCloudDatalabelingV1beta1Vertex = { x?: number | undefined; y?: number | undefined }
type GoogleCloudDatalabelingV1beta1BoundingPoly = {
  vertices?: GoogleCloudDatalabelingV1beta1Vertex[] | undefined
}
type GoogleCloudDatalabelingV1beta1NormalizedVertex = {
  x?: number | undefined
  y?: number | undefined
}
type GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly = {
  normalizedVertices?: GoogleCloudDatalabelingV1beta1NormalizedVertex[] | undefined
}
type GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation = {
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec | undefined
  boundingPoly?: GoogleCloudDatalabelingV1beta1BoundingPoly | undefined
  normalizedBoundingPoly?: GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly | undefined
}
type GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation = {
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec | undefined
}
type GoogleCloudDatalabelingV1beta1NormalizedPolyline = {
  normalizedVertices?: GoogleCloudDatalabelingV1beta1NormalizedVertex[] | undefined
}
type GoogleCloudDatalabelingV1beta1Polyline = {
  vertices?: GoogleCloudDatalabelingV1beta1Vertex[] | undefined
}
type GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation = {
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec | undefined
  normalizedPolyline?: GoogleCloudDatalabelingV1beta1NormalizedPolyline | undefined
  polyline?: GoogleCloudDatalabelingV1beta1Polyline | undefined
}
type GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation = {
  annotationColors?: { [x: string]: GoogleCloudDatalabelingV1beta1AnnotationSpec } | undefined
  imageBytes?: string | undefined
  mimeType?: string | undefined
}
type GoogleCloudDatalabelingV1beta1TextClassificationAnnotation = {
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec | undefined
}
type GoogleCloudDatalabelingV1beta1SequentialSegment = {
  end?: number | undefined
  start?: number | undefined
}
type GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation = {
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec | undefined
  sequentialSegment?: GoogleCloudDatalabelingV1beta1SequentialSegment | undefined
}
type GoogleCloudDatalabelingV1beta1TimeSegment = {
  endTimeOffset?: string | undefined
  startTimeOffset?: string | undefined
}
type GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation = {
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec | undefined
  timeSegment?: GoogleCloudDatalabelingV1beta1TimeSegment | undefined
}
type GoogleCloudDatalabelingV1beta1VideoEventAnnotation = {
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec | undefined
  timeSegment?: GoogleCloudDatalabelingV1beta1TimeSegment | undefined
}
type GoogleCloudDatalabelingV1beta1ObjectTrackingFrame = {
  boundingPoly?: GoogleCloudDatalabelingV1beta1BoundingPoly | undefined
  normalizedBoundingPoly?: GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly | undefined
  timeOffset?: string | undefined
}
type GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation = {
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec | undefined
  objectTrackingFrames?: GoogleCloudDatalabelingV1beta1ObjectTrackingFrame[] | undefined
  timeSegment?: GoogleCloudDatalabelingV1beta1TimeSegment | undefined
}
type GoogleCloudDatalabelingV1beta1AnnotationValue = {
  imageBoundingPolyAnnotation?:
    | GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation
    | undefined
  imageClassificationAnnotation?:
    | GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation
    | undefined
  imagePolylineAnnotation?: GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation | undefined
  imageSegmentationAnnotation?:
    | GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation
    | undefined
  textClassificationAnnotation?:
    | GoogleCloudDatalabelingV1beta1TextClassificationAnnotation
    | undefined
  textEntityExtractionAnnotation?:
    | GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation
    | undefined
  videoClassificationAnnotation?:
    | GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation
    | undefined
  videoEventAnnotation?: GoogleCloudDatalabelingV1beta1VideoEventAnnotation | undefined
  videoObjectTrackingAnnotation?:
    | GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation
    | undefined
}
type GoogleCloudDatalabelingV1beta1Annotation = {
  annotationMetadata?: GoogleCloudDatalabelingV1beta1AnnotationMetadata | undefined
  annotationSentiment?: 'ANNOTATION_SENTIMENT_UNSPECIFIED' | 'NEGATIVE' | 'POSITIVE' | undefined
  annotationSource?: 'ANNOTATION_SOURCE_UNSPECIFIED' | 'OPERATOR' | undefined
  annotationValue?: GoogleCloudDatalabelingV1beta1AnnotationValue | undefined
  name?: string | undefined
}
type GoogleCloudDatalabelingV1beta1Example = {
  annotations?: GoogleCloudDatalabelingV1beta1Annotation[] | undefined
  imagePayload?: GoogleCloudDatalabelingV1beta1ImagePayload | undefined
  name?: string | undefined
  textPayload?: GoogleCloudDatalabelingV1beta1TextPayload | undefined
  videoPayload?: GoogleCloudDatalabelingV1beta1VideoPayload | undefined
}
type GoogleCloudDatalabelingV1beta1ExampleComparison = {
  groundTruthExample?: GoogleCloudDatalabelingV1beta1Example | undefined
  modelCreatedExamples?: GoogleCloudDatalabelingV1beta1Example[] | undefined
}
type GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse = {
  exampleComparisons?: GoogleCloudDatalabelingV1beta1ExampleComparison[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDatalabelingV1beta1ListExamplesResponse = {
  examples?: GoogleCloudDatalabelingV1beta1Example[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDatalabelingV1beta1OperatorFeedbackMetadata = { [x: string]: unknown }
type GoogleCloudDatalabelingV1beta1RequesterFeedbackMetadata = { [x: string]: unknown }
type GoogleCloudDatalabelingV1beta1FeedbackMessage = {
  body?: string | undefined
  createTime?: string | undefined
  image?: string | undefined
  name?: string | undefined
  operatorFeedbackMetadata?: GoogleCloudDatalabelingV1beta1OperatorFeedbackMetadata | undefined
  requesterFeedbackMetadata?: GoogleCloudDatalabelingV1beta1RequesterFeedbackMetadata | undefined
}
type GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse = {
  feedbackMessages?: GoogleCloudDatalabelingV1beta1FeedbackMessage[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata = {
  createTime?: string | undefined
  lastUpdateTime?: string | undefined
  status?: 'FEEDBACK_THREAD_STATUS_UNSPECIFIED' | 'NEW' | 'REPLIED' | undefined
  thumbnail?: string | undefined
}
type GoogleCloudDatalabelingV1beta1FeedbackThread = {
  feedbackThreadMetadata?: GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata | undefined
  name?: string | undefined
}
type GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse = {
  feedbackThreads?: GoogleCloudDatalabelingV1beta1FeedbackThread[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDatalabelingV1beta1LabelImageRequest = {
  basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig | undefined
  boundingPolyConfig?: GoogleCloudDatalabelingV1beta1BoundingPolyConfig | undefined
  feature?:
    | 'FEATURE_UNSPECIFIED'
    | 'CLASSIFICATION'
    | 'BOUNDING_BOX'
    | 'ORIENTED_BOUNDING_BOX'
    | 'BOUNDING_POLY'
    | 'POLYLINE'
    | 'SEGMENTATION'
    | undefined
  imageClassificationConfig?: GoogleCloudDatalabelingV1beta1ImageClassificationConfig | undefined
  polylineConfig?: GoogleCloudDatalabelingV1beta1PolylineConfig | undefined
  segmentationConfig?: GoogleCloudDatalabelingV1beta1SegmentationConfig | undefined
}
type GoogleCloudDatalabelingV1beta1CsvInstruction = { gcsFileUri?: string | undefined }
type GoogleCloudDatalabelingV1beta1PdfInstruction = { gcsFileUri?: string | undefined }
type GoogleCloudDatalabelingV1beta1Instruction = {
  blockingResources?: string[] | undefined
  createTime?: string | undefined
  csvInstruction?: GoogleCloudDatalabelingV1beta1CsvInstruction | undefined
  dataType?: 'DATA_TYPE_UNSPECIFIED' | 'IMAGE' | 'VIDEO' | 'TEXT' | 'GENERAL_DATA' | undefined
  description?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
  pdfInstruction?: GoogleCloudDatalabelingV1beta1PdfInstruction | undefined
  updateTime?: string | undefined
}
type GoogleCloudDatalabelingV1beta1ListInstructionsResponse = {
  instructions?: GoogleCloudDatalabelingV1beta1Instruction[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDatalabelingV1beta1CreateInstructionRequest = {
  instruction?: GoogleCloudDatalabelingV1beta1Instruction | undefined
}
type GoogleCloudDatalabelingV1beta1LabelTextRequest = {
  basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig | undefined
  feature?: 'FEATURE_UNSPECIFIED' | 'TEXT_CLASSIFICATION' | 'TEXT_ENTITY_EXTRACTION' | undefined
  textClassificationConfig?: GoogleCloudDatalabelingV1beta1TextClassificationConfig | undefined
  textEntityExtractionConfig?: GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig | undefined
}
type GoogleCloudDatalabelingV1beta1LabelVideoRequest = {
  basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig | undefined
  eventConfig?: GoogleCloudDatalabelingV1beta1EventConfig | undefined
  feature?:
    | 'FEATURE_UNSPECIFIED'
    | 'CLASSIFICATION'
    | 'OBJECT_DETECTION'
    | 'OBJECT_TRACKING'
    | 'EVENT'
    | undefined
  objectDetectionConfig?: GoogleCloudDatalabelingV1beta1ObjectDetectionConfig | undefined
  objectTrackingConfig?: GoogleCloudDatalabelingV1beta1ObjectTrackingConfig | undefined
  videoClassificationConfig?: GoogleCloudDatalabelingV1beta1VideoClassificationConfig | undefined
}
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
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            filter?: string | undefined
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
        } & { json: GoogleCloudDatalabelingV1beta1EvaluationJob }
        output: GoogleCloudDatalabelingV1beta1EvaluationJob
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
        output: GoogleLongrunningListOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:cancel': {
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
        output: GoogleProtobufEmpty
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
        } & { json: GoogleCloudDatalabelingV1beta1ExportDataRequest }
        output: GoogleLongrunningOperation
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
        } & { json: GoogleCloudDatalabelingV1beta1ImportDataRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:pause': {
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
        } & { json: GoogleCloudDatalabelingV1beta1PauseEvaluationJobRequest }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:resume': {
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
        } & { json: GoogleCloudDatalabelingV1beta1ResumeEvaluationJobRequest }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/annotatedDatasets': {
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
        output: GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/annotationSpecSets': {
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
        output: GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse
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
        } & { json: GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest }
        output: GoogleCloudDatalabelingV1beta1AnnotationSpecSet
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/dataItems': {
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
        output: GoogleCloudDatalabelingV1beta1ListDataItemsResponse
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
        output: GoogleCloudDatalabelingV1beta1ListDatasetsResponse
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
        } & { json: GoogleCloudDatalabelingV1beta1CreateDatasetRequest }
        output: GoogleCloudDatalabelingV1beta1Dataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/evaluationJobs': {
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
        output: GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse
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
        } & { json: GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest }
        output: GoogleCloudDatalabelingV1beta1EvaluationJob
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/evaluations:search': {
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
        output: GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/exampleComparisons:search': {
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
        } & { json: GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest }
        output: GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/examples': {
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
        output: GoogleCloudDatalabelingV1beta1ListExamplesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/feedbackMessages': {
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
        output: GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse
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
        } & { json: GoogleCloudDatalabelingV1beta1FeedbackMessage }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/feedbackThreads': {
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
        output: GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/image:label': {
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
        } & { json: GoogleCloudDatalabelingV1beta1LabelImageRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/instructions': {
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
        output: GoogleCloudDatalabelingV1beta1ListInstructionsResponse
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
        } & { json: GoogleCloudDatalabelingV1beta1CreateInstructionRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/text:label': {
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
        } & { json: GoogleCloudDatalabelingV1beta1LabelTextRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/video:label': {
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
        } & { json: GoogleCloudDatalabelingV1beta1LabelVideoRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
