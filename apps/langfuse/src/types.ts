type AnnotationQueue = {
  id: string
  name: string
  description: string | null
  scoreConfigIds: string[]
  createdAt: string
  updatedAt: string
}
type UtilsMetaResponse = { page: number; limit: number; totalItems: number; totalPages: number }
type PaginatedAnnotationQueues = { data: AnnotationQueue[]; meta: UtilsMetaResponse }
type CreateAnnotationQueueRequest = {
  name: string
  description?: (string | null) | undefined
  scoreConfigIds: string[]
}
type AnnotationQueueStatus = 'PENDING' | 'COMPLETED'
type AnnotationQueueObjectType = 'TRACE' | 'OBSERVATION' | 'SESSION'
type AnnotationQueueItem = {
  id: string
  queueId: string
  objectId: string
  objectType: AnnotationQueueObjectType
  status: AnnotationQueueStatus
  completedAt?: (string | null) | undefined
  createdAt: string
  updatedAt: string
}
type PaginatedAnnotationQueueItems = { data: AnnotationQueueItem[]; meta: UtilsMetaResponse }
type CreateAnnotationQueueItemRequest = {
  objectId: string
  objectType: AnnotationQueueObjectType
  status?: AnnotationQueueStatus | undefined
}
type UpdateAnnotationQueueItemRequest = { status?: AnnotationQueueStatus | undefined }
type DeleteAnnotationQueueItemResponse = { success: boolean; message: string }
type AnnotationQueueAssignmentRequest = { userId: string }
type CreateAnnotationQueueAssignmentResponse = {
  userId: string
  queueId: string
  projectId: string
}
type DeleteAnnotationQueueAssignmentResponse = { success: boolean }
type BlobStorageIntegrationType =
  | 'S3'
  | 'S3_COMPATIBLE'
  | 'AZURE_BLOB_STORAGE'
  | 'GOOGLE_CLOUD_STORAGE'
type BlobStorageIntegrationAuthType = 'ACCESS_KEYS' | 'ROLE_ARN'
type BlobStorageExportFrequency = 'every_20_minutes' | 'hourly' | 'daily' | 'weekly'
type BlobStorageIntegrationFileTypeResponse = 'JSON' | 'CSV' | 'JSONL' | 'PARQUET'
type BlobStorageExportMode = 'FULL_HISTORY' | 'FROM_TODAY' | 'FROM_CUSTOM_DATE'
type BlobStorageExportSource =
  | 'LEGACY_TRACES_OBSERVATIONS'
  | 'OBSERVATIONS_V2'
  | 'LEGACY_TRACES_AND_ENRICHED_OBSERVATIONS'
type BlobStorageExportFieldGroup =
  | 'core'
  | 'basic'
  | 'time'
  | 'io'
  | 'metadata'
  | 'model'
  | 'usage'
  | 'prompt'
  | 'metrics'
  | 'tools'
  | 'trace_context'
  | 'score_metadata'
  | 'score_provenance'
type BlobStorageIntegrationResponse = {
  id: string
  projectId: string
  type: BlobStorageIntegrationType
  bucketName: string
  endpoint: string | null
  region: string
  authType: BlobStorageIntegrationAuthType
  accessKeyId: string | null
  roleArn: string | null
  externalId: string | null
  crossAccountRoleArn: string | null
  prefix: string
  exportFrequency: BlobStorageExportFrequency
  enabled: boolean
  forcePathStyle: boolean
  fileType: BlobStorageIntegrationFileTypeResponse
  exportMode: BlobStorageExportMode
  exportStartDate: string | null
  compressed: boolean
  exportSource: BlobStorageExportSource
  exportFieldGroups: BlobStorageExportFieldGroup[] | null
  nextSyncAt: string | null
  lastSyncAt: string | null
  lastError: string | null
  lastErrorAt: string | null
  createdAt: string
  updatedAt: string
}
type BlobStorageIntegrationsResponse = { data: BlobStorageIntegrationResponse[] }
type BlobStorageIntegrationFileType = 'JSON' | 'CSV' | 'JSONL' | 'PARQUET'
type CreateBlobStorageIntegrationRequest = {
  projectId: string
  type: BlobStorageIntegrationType
  bucketName: string
  endpoint?: (string | null) | undefined
  region: string
  authType?: BlobStorageIntegrationAuthType | undefined
  roleArn?: (string | null) | undefined
  accessKeyId?: (string | null) | undefined
  secretAccessKey?: (string | null) | undefined
  prefix?: (string | null) | undefined
  exportFrequency: BlobStorageExportFrequency
  enabled: boolean
  forcePathStyle: boolean
  fileType: BlobStorageIntegrationFileType
  exportMode: BlobStorageExportMode
  exportStartDate?: (string | null) | undefined
  compressed?: (boolean | null) | undefined
  exportSource?: BlobStorageExportSource | undefined
  exportFieldGroups?: (BlobStorageExportFieldGroup[] | null) | undefined
}
type BlobStorageSyncStatus = 'idle' | 'running' | 'queued' | 'up_to_date' | 'disabled' | 'error'
type BlobStorageIntegrationStatusResponse = {
  id: string
  projectId: string
  syncStatus: BlobStorageSyncStatus
  enabled: boolean
  lastSyncAt: string | null
  nextSyncAt: string | null
  lastError: string | null
  lastErrorAt: string | null
}
type BlobStorageIntegrationDeletionResponse = { message: string }
type CreateCommentRequest = {
  projectId: string
  objectType: string
  objectId: string
  content: string
  authorUserId?: (string | null) | undefined
}
type CreateCommentResponse = { id: string }
type CommentObjectType = 'TRACE' | 'OBSERVATION' | 'SESSION' | 'PROMPT'
type Comment = {
  id: string
  projectId: string
  createdAt: string
  updatedAt: string
  objectType: CommentObjectType
  objectId: string
  content: string
  authorUserId?: (string | null) | undefined
}
type GetCommentsResponse = { data: Comment[]; meta: UtilsMetaResponse }
type DatasetStatus = 'ACTIVE' | 'ARCHIVED'
type CreateDatasetItemRequest = {
  datasetName: string
  input?: ({ [x: string]: unknown } | null) | undefined
  expectedOutput?: ({ [x: string]: unknown } | null) | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  sourceTraceId?: (string | null) | undefined
  sourceObservationId?: (string | null) | undefined
  id?: (string | null) | undefined
  status?: DatasetStatus | undefined
}
type DatasetItemMediaReferenceField = 'input' | 'expectedOutput' | 'metadata'
type DatasetItemMediaReferenceMedia = {
  mediaId: string
  contentType: string
  contentLength: number
  url: string
  urlExpiry: string
}
type DatasetItemMediaReference = {
  field: DatasetItemMediaReferenceField
  referenceString: string
  jsonPath: string
  media: DatasetItemMediaReferenceMedia
}
type DatasetItem = {
  id: string
  status: DatasetStatus
  input: { [x: string]: unknown }
  expectedOutput: { [x: string]: unknown }
  metadata: { [x: string]: unknown }
  sourceTraceId: string | null
  sourceObservationId: string | null
  datasetId: string
  datasetName: string
  createdAt: string
  updatedAt: string
  version?: (string | null) | undefined
  mediaReferences: DatasetItemMediaReference[]
}
type PaginatedDatasetItems = { data: DatasetItem[]; meta: UtilsMetaResponse }
type DeleteDatasetItemResponse = { message: string }
type Dataset = {
  id: string
  name: string
  description: string | null
  metadata: { [x: string]: unknown }
  inputSchema: { [x: string]: unknown } | null
  expectedOutputSchema: { [x: string]: unknown } | null
  projectId: string
  createdAt: string
  updatedAt: string
}
type PaginatedDatasets = { data: Dataset[]; meta: UtilsMetaResponse }
type CreateDatasetRequest = {
  name: string
  description?: (string | null) | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  inputSchema?: ({ [x: string]: unknown } | null) | undefined
  expectedOutputSchema?: ({ [x: string]: unknown } | null) | undefined
}
type EvaluationRuleNumberFilterOperator = '=' | '>' | '<' | '>=' | '<='
type EvaluationRuleStringFilterOperator =
  | '='
  | 'contains'
  | 'does not contain'
  | 'starts with'
  | 'ends with'
type EvaluationRuleOptionsFilterOperator = 'any of' | 'none of'
type EvaluationRuleArrayOptionsFilterOperator = 'any of' | 'none of' | 'all of'
type EvaluationRuleStringObjectFilterOperator =
  | '='
  | 'contains'
  | 'does not contain'
  | 'starts with'
  | 'ends with'
  | 'is set'
  | 'is not set'
type EvaluationRuleBooleanFilterOperator = '=' | '<>'
type EvaluationRuleNullFilterOperator = 'is null' | 'is not null'
type EvaluationRuleFilter =
  | {
      type?: 'datetime' | undefined
      column: string
      operator: EvaluationRuleNumberFilterOperator
      value: string
    }
  | {
      type?: 'string' | undefined
      column: string
      operator: EvaluationRuleStringFilterOperator
      value: string
    }
  | {
      type?: 'number' | undefined
      column: string
      operator: EvaluationRuleNumberFilterOperator
      value: number
    }
  | {
      type?: 'stringOptions' | undefined
      column: string
      operator: EvaluationRuleOptionsFilterOperator
      value: string[]
    }
  | {
      type?: 'categoryOptions' | undefined
      column: string
      key: string
      operator: EvaluationRuleOptionsFilterOperator
      value: string[]
    }
  | {
      type?: 'arrayOptions' | undefined
      column: string
      operator: EvaluationRuleArrayOptionsFilterOperator
      value: string[]
    }
  | {
      type?: 'stringObject' | undefined
      column: string
      key: string
      operator: EvaluationRuleStringObjectFilterOperator
      value: string
    }
  | {
      type?: 'numberObject' | undefined
      column: string
      key: string
      operator: EvaluationRuleNumberFilterOperator
      value: number
    }
  | {
      type?: 'boolean' | undefined
      column: string
      operator: EvaluationRuleBooleanFilterOperator
      value: boolean
    }
  | {
      type?: 'null' | undefined
      column: string
      operator: EvaluationRuleNullFilterOperator
      value: ''
    }
type PromptVariableMappingSource =
  | 'input'
  | 'output'
  | 'metadata'
  | 'tool_calls'
  | 'expected_output'
  | 'experiment_item_metadata'
type PromptVariableMappingInput = {
  variable: string
  source: PromptVariableMappingSource
  jsonPath?: (string | null) | undefined
}
type EvaluationRuleEvaluatorAssignmentInput = {
  evaluatorId: string
  variableMapping?: (PromptVariableMappingInput[] | null) | undefined
}
type CreateEvaluationRuleRequest = {
  name: string
  enabled: boolean
  sampling?: (number | null) | undefined
  filter?: (EvaluationRuleFilter[] | null) | undefined
  evaluatorAssignments: EvaluationRuleEvaluatorAssignmentInput[]
}
type Creator = { id: string; name: string | null }
type EvaluationRuleReadFilterWithKey = {
  type: string
  column: string
  operator: string
  value?: ({ [x: string]: unknown } | null) | undefined
}
type EvaluationRuleReadFilterBase = {
  type: string
  column: string
  operator: string
  value?: ({ [x: string]: unknown } | null) | undefined
}
type EvaluationRuleReadFilter = EvaluationRuleReadFilterWithKey | EvaluationRuleReadFilterBase
type PromptVariableMappingRead = {
  variable: string
  source: string | null
  jsonPath?: (string | null) | undefined
}
type LegacyEvaluationObject =
  | 'trace'
  | 'span'
  | 'generation'
  | 'event'
  | 'agent'
  | 'tool'
  | 'chain'
  | 'retriever'
  | 'evaluator'
  | 'embedding'
  | 'guardrail'
  | 'dataset_item'
type LegacyPromptVariableMapping = {
  mappingType: 'legacy'
  variable: string
  langfuseObject: LegacyEvaluationObject
  objectName: string | null
  source: string
  jsonPath?: (string | null) | undefined
}
type PromptVariableMapping = PromptVariableMappingRead | LegacyPromptVariableMapping
type EvaluatorAssignment = { evaluatorId: string; variableMapping: PromptVariableMapping[] | null }
type EvaluationRule = {
  id: string
  name: string
  createdBy: Creator
  enabled: boolean
  sampling: number
  filter: EvaluationRuleReadFilter[]
  evaluatorAssignments: EvaluatorAssignment[]
  createdAt: string
  updatedAt: string
}
type PublicApiErrorCode =
  | 'authentication_failed'
  | 'access_denied'
  | 'invalid_request'
  | 'invalid_query'
  | 'invalid_body'
  | 'resource_not_found'
  | 'conflict'
  | 'rate_limited'
  | 'method_not_allowed'
  | 'internal_error'
type PublicApiValidationIssue = { code: string; message: string; path: { [x: string]: unknown }[] }
type PublicApiErrorDetails = {
  issues?: (PublicApiValidationIssue[] | null) | undefined
  retryAfterSeconds?: (number | null) | undefined
  limit?: (number | null) | undefined
  remaining?: (number | null) | undefined
  resetAt?: (string | null) | undefined
}
type PublicApiError = {
  message: string
  code: PublicApiErrorCode
  details?: PublicApiErrorDetails | undefined
}
type CursorMeta = { cursor?: (string | null) | undefined }
type EvaluationRulesPage = { data: EvaluationRule[]; meta: CursorMeta }
type UpdateEvaluationRuleRequest = {
  name?: (string | null) | undefined
  enabled?: (boolean | null) | undefined
  sampling?: (number | null) | undefined
  filter?: (EvaluationRuleFilter[] | null) | undefined
  evaluatorAssignments?: (EvaluationRuleEvaluatorAssignmentInput[] | null) | undefined
}
type DeletedEvaluationRule = { id: string }
type EvaluatorChatMessageRole = 'system' | 'user' | 'assistant'
type EvaluatorChatMessage = { role: EvaluatorChatMessageRole; content: string }
type EvaluatorChatPrompt = EvaluatorChatMessage[]
type EvaluatorChatPromptInput = string | EvaluatorChatPrompt
type EvaluatorModelConfig = { provider: string; model: string }
type EvaluatorOutputDefinition =
  | {
      dataType: 'NUMERIC'
      scoreReasoningInstructions?: (string | null) | undefined
      scoreValueInstructions?: (string | null) | undefined
      minValue?: (number | null) | undefined
      maxValue?: (number | null) | undefined
    }
  | {
      dataType: 'BOOLEAN'
      scoreReasoningInstructions?: (string | null) | undefined
      scoreValueInstructions?: (string | null) | undefined
    }
  | {
      dataType: 'CATEGORICAL'
      scoreReasoningInstructions?: (string | null) | undefined
      scoreValueInstructions?: (string | null) | undefined
      categories: string[]
      shouldAllowMultipleMatches: boolean
    }
type CodeEvaluatorSourceCodeLanguage = 'PYTHON' | 'TYPESCRIPT'
type CreateEvaluatorRequest =
  | {
      type: 'llm_as_judge'
      name: string
      description?: (string | null) | undefined
      prompt: EvaluatorChatPromptInput
      modelConfig?: EvaluatorModelConfig | undefined
      variableMapping?: (PromptVariableMappingInput[] | null) | undefined
      outputDefinition: EvaluatorOutputDefinition
    }
  | {
      type: 'code'
      name: string
      description?: (string | null) | undefined
      sourceCode: string
      sourceCodeLanguage: CodeEvaluatorSourceCodeLanguage
    }
type EvaluatorStatus = 'active' | 'paused'
type EvaluationRuleAssignment = {
  evaluationRuleId: string
  variableMappingOverride?: (PromptVariableMapping[] | null) | undefined
}
type PublicEvaluatorOutputDefinition =
  | {
      dataType: 'NUMERIC'
      scoreReasoningInstructions?: (string | null) | undefined
      scoreValueInstructions?: (string | null) | undefined
      minValue?: (number | null) | undefined
      maxValue?: (number | null) | undefined
    }
  | {
      dataType: 'BOOLEAN'
      scoreReasoningInstructions?: (string | null) | undefined
      scoreValueInstructions?: (string | null) | undefined
    }
  | {
      dataType: 'CATEGORICAL'
      scoreReasoningInstructions?: (string | null) | undefined
      scoreValueInstructions?: (string | null) | undefined
      categories: string[]
      shouldAllowMultipleMatches: boolean
    }
type Evaluator =
  | {
      type: 'llm_as_judge'
      id: string
      name: string
      description: string | null
      createdBy: Creator
      status: EvaluatorStatus
      pausedAt: string | null
      pausedReason: string | null
      pausedMessage: string | null
      evaluationRuleAssignments: EvaluationRuleAssignment[]
      createdAt: string
      updatedAt: string
      versionId: string
      version: number
      versionCreatedAt: string
      versionCreatedBy: Creator
      prompt: EvaluatorChatPrompt
      variables: string[]
      variableMapping: PromptVariableMappingRead[] | null
      modelConfig: EvaluatorModelConfig
      outputDefinition: PublicEvaluatorOutputDefinition
    }
  | {
      type: 'code'
      id: string
      name: string
      description: string | null
      createdBy: Creator
      status: EvaluatorStatus
      pausedAt: string | null
      pausedReason: string | null
      pausedMessage: string | null
      evaluationRuleAssignments: EvaluationRuleAssignment[]
      createdAt: string
      updatedAt: string
      versionId: string
      version: number
      versionCreatedAt: string
      versionCreatedBy: Creator
      sourceCode: string
      sourceCodeLanguage: CodeEvaluatorSourceCodeLanguage
    }
type EvaluatorsPage = { data: Evaluator[]; meta: CursorMeta }
type UpdateEvaluatorMetadataRequest = {
  name?: (string | null) | undefined
  description?: (string | null) | undefined
}
type UpdateLlmAsJudgeEvaluatorRequest = {
  name?: (string | null) | undefined
  description?: (string | null) | undefined
  type: 'llm_as_judge'
  prompt: EvaluatorChatPromptInput
  modelConfig?: EvaluatorModelConfig | undefined
  variableMapping?: (PromptVariableMappingInput[] | null) | undefined
  outputDefinition: EvaluatorOutputDefinition
}
type UpdateCodeEvaluatorRequest = {
  name?: (string | null) | undefined
  description?: (string | null) | undefined
  type: 'code'
  sourceCode: string
  sourceCodeLanguage: CodeEvaluatorSourceCodeLanguage
}
type UpdateEvaluatorRequest =
  | UpdateEvaluatorMetadataRequest
  | UpdateLlmAsJudgeEvaluatorRequest
  | UpdateCodeEvaluatorRequest
type DeletedEvaluator = { id: string }
type EvaluatorVersion =
  | {
      type: 'llm_as_judge'
      id: string
      version: number
      createdAt: string
      createdBy: Creator
      prompt: EvaluatorChatPrompt
      variables: string[]
      variableMapping: PromptVariableMappingRead[] | null
      modelConfig: EvaluatorModelConfig
      outputDefinition: PublicEvaluatorOutputDefinition
    }
  | {
      type: 'code'
      id: string
      version: number
      createdAt: string
      createdBy: Creator
      sourceCode: string
      sourceCodeLanguage: CodeEvaluatorSourceCodeLanguage
    }
type EvaluatorVersionsPage = { data: EvaluatorVersion[]; meta: CursorMeta }
type ScoreSource = 'ANNOTATION' | 'API' | 'EVAL'
type ScoreSubjectV3 =
  | { kind?: 'trace' | undefined; id: string }
  | { kind?: 'observation' | undefined; id: string; traceId?: (string | null) | undefined }
  | { kind?: 'session' | undefined; id: string }
  | { kind?: 'experiment' | undefined; id: string }
type ScoreV3 =
  | {
      dataType?: 'NUMERIC' | undefined
      id: string
      projectId: string
      name: string
      source: ScoreSource
      timestamp: string
      environment: string
      createdAt: string
      updatedAt: string
      comment?: (string | null) | undefined
      configId?: (string | null) | undefined
      metadata?: ({ [x: string]: unknown } | null) | undefined
      authorUserId?: (string | null) | undefined
      queueId?: (string | null) | undefined
      subject?: ScoreSubjectV3 | undefined
      value: number
    }
  | {
      dataType?: 'BOOLEAN' | undefined
      id: string
      projectId: string
      name: string
      source: ScoreSource
      timestamp: string
      environment: string
      createdAt: string
      updatedAt: string
      comment?: (string | null) | undefined
      configId?: (string | null) | undefined
      metadata?: ({ [x: string]: unknown } | null) | undefined
      authorUserId?: (string | null) | undefined
      queueId?: (string | null) | undefined
      subject?: ScoreSubjectV3 | undefined
      value: boolean
    }
  | {
      dataType?: 'CATEGORICAL' | undefined
      id: string
      projectId: string
      name: string
      source: ScoreSource
      timestamp: string
      environment: string
      createdAt: string
      updatedAt: string
      comment?: (string | null) | undefined
      configId?: (string | null) | undefined
      metadata?: ({ [x: string]: unknown } | null) | undefined
      authorUserId?: (string | null) | undefined
      queueId?: (string | null) | undefined
      subject?: ScoreSubjectV3 | undefined
      value: string
    }
  | {
      dataType?: 'TEXT' | undefined
      id: string
      projectId: string
      name: string
      source: ScoreSource
      timestamp: string
      environment: string
      createdAt: string
      updatedAt: string
      comment?: (string | null) | undefined
      configId?: (string | null) | undefined
      metadata?: ({ [x: string]: unknown } | null) | undefined
      authorUserId?: (string | null) | undefined
      queueId?: (string | null) | undefined
      subject?: ScoreSubjectV3 | undefined
      value: string
    }
  | {
      dataType?: 'CORRECTION' | undefined
      id: string
      projectId: string
      name: string
      source: ScoreSource
      timestamp: string
      environment: string
      createdAt: string
      updatedAt: string
      comment?: (string | null) | undefined
      configId?: (string | null) | undefined
      metadata?: ({ [x: string]: unknown } | null) | undefined
      authorUserId?: (string | null) | undefined
      queueId?: (string | null) | undefined
      subject?: ScoreSubjectV3 | undefined
      value: string
    }
type Experiment = {
  id: string
  name: string
  description: string | null
  startTime: string
  endTime: string
  itemCount: number
  datasetId: string | null
  metadata?: ({ [x: string]: unknown } | null) | undefined
  scores?: (ScoreV3[] | null) | undefined
}
type ExperimentsResponseMeta = { cursor?: (string | null) | undefined }
type ExperimentsResponse = { data: Experiment[]; meta: ExperimentsResponseMeta }
type ObservationLevel = 'DEBUG' | 'DEFAULT' | 'WARNING' | 'ERROR'
type ExperimentItem = {
  id: string
  traceId: string
  startTime: string
  endTime: string | null
  level: ObservationLevel
  environment: string
  experimentId: string
  experimentName: string
  experimentItemId: string
  experimentDatasetId?: (string | null) | undefined
  experimentItemVersion?: (string | null) | undefined
  input?: ({ [x: string]: unknown } | null) | undefined
  output?: ({ [x: string]: unknown } | null) | undefined
  expectedOutput?: ({ [x: string]: unknown } | null) | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  experimentItemMetadata?: ({ [x: string]: unknown } | null) | undefined
  experimentMetadata?: ({ [x: string]: unknown } | null) | undefined
  experimentDescription?: (string | null) | undefined
  scores?: (ScoreV3[] | null) | undefined
}
type ExperimentItemsResponse = { data: ExperimentItem[]; meta: ExperimentsResponseMeta }
type FeedbackTargetType = 'skill' | 'mcp-tool' | 'cli' | 'docs' | 'public-api' | 'other'
type SubmitFeedbackRequest = {
  targetType: FeedbackTargetType
  target: string
  feedback: string
  goal?: (string | null) | undefined
  referenceUrl?: (string | null) | undefined
}
type SubmitFeedbackResponse = { id: string }
type HealthResponse = { version: string; status: string }
type LlmConnection = {
  id: string
  provider: string
  adapter: string
  displaySecretKey: string
  baseURL?: (string | null) | undefined
  customModels: string[]
  withDefaultModels: boolean
  extraHeaderKeys: string[]
  config?: ({ [x: string]: unknown } | null) | undefined
  createdAt: string
  updatedAt: string
}
type PaginatedLlmConnections = { data: LlmConnection[]; meta: UtilsMetaResponse }
type LlmAdapter =
  | 'anthropic'
  | 'openai'
  | 'azure'
  | 'bedrock'
  | 'google-vertex-ai'
  | 'google-ai-studio'
type UpsertLlmConnectionRequest = {
  provider: string
  adapter: LlmAdapter
  secretKey: string
  baseURL?: (string | null) | undefined
  customModels?: (string[] | null) | undefined
  withDefaultModels?: (boolean | null) | undefined
  extraHeaders?: ({ [x: string]: string } | null) | undefined
  config?: ({ [x: string]: unknown } | null) | undefined
}
type DeleteLlmConnectionResponse = { message: string }
type GetMediaResponse = {
  mediaId: string
  contentType: string
  contentLength: number
  uploadedAt: string
  url: string
  urlExpiry: string
}
type PatchMediaBody = {
  uploadedAt: string
  uploadHttpStatus: number
  uploadHttpError?: (string | null) | undefined
  uploadTimeMs?: (number | null) | undefined
}
type MediaContentType =
  | 'image/png'
  | 'image/jpeg'
  | 'image/jpg'
  | 'image/webp'
  | 'image/gif'
  | 'image/svg+xml'
  | 'image/tiff'
  | 'image/bmp'
  | 'image/avif'
  | 'image/heic'
  | 'audio/mpeg'
  | 'audio/mp3'
  | 'audio/wav'
  | 'audio/ogg'
  | 'audio/oga'
  | 'audio/aac'
  | 'audio/mp4'
  | 'audio/flac'
  | 'audio/opus'
  | 'audio/webm'
  | 'video/mp4'
  | 'video/webm'
  | 'video/ogg'
  | 'video/mpeg'
  | 'video/quicktime'
  | 'video/x-msvideo'
  | 'video/x-matroska'
  | 'text/plain'
  | 'text/html'
  | 'text/css'
  | 'text/csv'
  | 'text/markdown'
  | 'text/x-python'
  | 'application/javascript'
  | 'text/x-typescript'
  | 'application/x-yaml'
  | 'application/pdf'
  | 'application/msword'
  | 'application/vnd.ms-excel'
  | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  | 'application/zip'
  | 'application/json'
  | 'application/xml'
  | 'application/octet-stream'
  | 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  | 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
  | 'application/rtf'
  | 'application/x-ndjson'
  | 'application/vnd.apache.parquet'
  | 'application/gzip'
  | 'application/x-tar'
  | 'application/x-7z-compressed'
type GetMediaUploadUrlRequest = {
  traceId?: (string | null) | undefined
  observationId?: (string | null) | undefined
  datasetId?: (string | null) | undefined
  datasetItemId?: (string | null) | undefined
  contentType: MediaContentType
  contentLength: number
  sha256Hash: string
  field: string
}
type GetMediaUploadUrlResponse = { uploadUrl?: (string | null) | undefined; mediaId: string }
type MetricsV2Response = { data: { [x: string]: unknown }[] }
type ModelUsageUnit = 'CHARACTERS' | 'TOKENS' | 'MILLISECONDS' | 'SECONDS' | 'IMAGES' | 'REQUESTS'
type PricingTierOperator = 'gt' | 'gte' | 'lt' | 'lte' | 'eq' | 'neq'
type PricingTierUsageConditionInput = {
  usageDetailPattern: string
  operator: PricingTierOperator
  value: number
  caseSensitive?: (boolean | null) | undefined
}
type PricingTierAttributeSource = 'model_parameters' | 'metadata'
type PricingTierAttributeCondition = {
  source: PricingTierAttributeSource
  key: string
  operator: 'in'
  values: string[]
}
type PricingTierConditionInput = PricingTierUsageConditionInput | PricingTierAttributeCondition
type PricingTierInput = {
  name: string
  isDefault?: (boolean | null) | undefined
  priority: number
  conditions: PricingTierConditionInput[]
  prices: { [x: string]: number }
}
type ModelTokenizerId = 'openai' | 'claude'
type CreateModelRequest = {
  modelName: string
  matchPattern: string
  startDate?: (string | null) | undefined
  unit: ModelUsageUnit
  inputPrice?: (number | null) | undefined
  outputPrice?: (number | null) | undefined
  totalPrice?: (number | null) | undefined
  pricingTiers?: (PricingTierInput[] | null) | undefined
  tokenizerId?: ModelTokenizerId | undefined
  tokenizerConfig?: ({ [x: string]: unknown } | null) | undefined
}
type ModelPrice = { price: number }
type PricingTierUsageCondition = {
  usageDetailPattern: string
  operator: PricingTierOperator
  value: number
  caseSensitive: boolean
}
type PricingTierCondition = PricingTierUsageCondition | PricingTierAttributeCondition
type PricingTier = {
  id: string
  name: string
  isDefault: boolean
  priority: number
  conditions: PricingTierCondition[]
  prices: { [x: string]: number }
}
type Model = {
  id: string
  modelName: string
  matchPattern: string
  startDate: string | null
  unit?: ModelUsageUnit | undefined
  inputPrice: number | null
  outputPrice: number | null
  totalPrice: number | null
  tokenizerId: string | null
  tokenizerConfig: { [x: string]: unknown }
  isLangfuseManaged: boolean
  createdAt: string
  prices: { [x: string]: ModelPrice }
  pricingTiers: PricingTier[]
}
type PaginatedModels = { data: Model[]; meta: UtilsMetaResponse }
type ObservationV2 = {
  id: string
  traceId: string | null
  startTime: string
  endTime: string | null
  projectId: string
  parentObservationId: string | null
  type: string
  isRootObservation?: (boolean | null) | undefined
  name?: (string | null) | undefined
  level?: ObservationLevel | undefined
  statusMessage?: (string | null) | undefined
  version?: (string | null) | undefined
  environment?: (string | null) | undefined
  bookmarked?: (boolean | null) | undefined
  public?: (boolean | null) | undefined
  userId?: (string | null) | undefined
  sessionId?: (string | null) | undefined
  completionStartTime?: (string | null) | undefined
  createdAt?: (string | null) | undefined
  updatedAt?: (string | null) | undefined
  input?: ({ [x: string]: unknown } | null) | undefined
  output?: ({ [x: string]: unknown } | null) | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  model?: (string | null) | undefined
  internalModelId?: (string | null) | undefined
  modelParameters?: ({ [x: string]: unknown } | null) | undefined
  usageDetails?: ({ [x: string]: number } | null) | undefined
  costDetails?: ({ [x: string]: number } | null) | undefined
  totalCost?: (number | null) | undefined
  usagePricingTierName?: (string | null) | undefined
  promptId?: (string | null) | undefined
  promptName?: (string | null) | undefined
  promptVersion?: (number | null) | undefined
  latency?: (number | null) | undefined
  timeToFirstToken?: (number | null) | undefined
  modelId: string | null
  inputPrice: string | null
  outputPrice: string | null
  totalPrice: string | null
  traceName?: (string | null) | undefined
  tags?: (string[] | null) | undefined
  release?: (string | null) | undefined
}
type ObservationsV2Meta = { cursor?: (string | null) | undefined }
type ObservationsV2Response = { data: ObservationV2[]; meta: ObservationsV2Meta }
type OtelAttributeValue = {
  stringValue?: (string | null) | undefined
  intValue?: (number | null) | undefined
  doubleValue?: (number | null) | undefined
  boolValue?: (boolean | null) | undefined
}
type OtelAttribute = { key?: (string | null) | undefined; value?: OtelAttributeValue | undefined }
type OtelResource = { attributes?: (OtelAttribute[] | null) | undefined }
type OtelScope = {
  name?: (string | null) | undefined
  version?: (string | null) | undefined
  attributes?: (OtelAttribute[] | null) | undefined
}
type OtelSpan = {
  traceId?: ({ [x: string]: unknown } | null) | undefined
  spanId?: ({ [x: string]: unknown } | null) | undefined
  parentSpanId?: ({ [x: string]: unknown } | null) | undefined
  name?: (string | null) | undefined
  kind?: (number | null) | undefined
  startTimeUnixNano?: ({ [x: string]: unknown } | null) | undefined
  endTimeUnixNano?: ({ [x: string]: unknown } | null) | undefined
  attributes?: (OtelAttribute[] | null) | undefined
  status?: ({ [x: string]: unknown } | null) | undefined
}
type OtelScopeSpan = { scope?: OtelScope | undefined; spans?: (OtelSpan[] | null) | undefined }
type OtelResourceSpan = {
  resource?: OtelResource | undefined
  scopeSpans?: (OtelScopeSpan[] | null) | undefined
}
type OtelTraceResponse = { [x: string]: unknown }
type MembershipRole = 'OWNER' | 'ADMIN' | 'MEMBER' | 'VIEWER'
type MembershipResponse = { userId: string; role: MembershipRole; email: string; name: string }
type MembershipsResponse = { memberships: MembershipResponse[] }
type MembershipRequest = { userId: string; role: MembershipRole }
type DeleteMembershipRequest = { userId: string }
type MembershipDeletionResponse = { message: string; userId: string }
type OrganizationProject = {
  id: string
  name: string
  metadata?: ({ [x: string]: unknown } | null) | undefined
  createdAt: string
  updatedAt: string
}
type OrganizationProjectsResponse = { projects: OrganizationProject[] }
type OrganizationApiKey = {
  id: string
  createdAt: string
  expiresAt?: (string | null) | undefined
  lastUsedAt?: (string | null) | undefined
  name?: (string | null) | undefined
  note?: (string | null) | undefined
  publicKey: string
  displaySecretKey: string
}
type OrganizationApiKeysResponse = { apiKeys: OrganizationApiKey[] }
type Organization = { id: string; name: string }
type Project = {
  id: string
  name: string
  organization: Organization
  metadata: { [x: string]: unknown }
  retentionDays?: (number | null) | undefined
}
type Projects = { data: Project[] }
type ProjectDeletionResponse = { success: boolean; message: string }
type ApiKeySummary = {
  id: string
  createdAt: string
  expiresAt?: (string | null) | undefined
  lastUsedAt?: (string | null) | undefined
  name?: (string | null) | undefined
  note?: (string | null) | undefined
  publicKey: string
  displaySecretKey: string
}
type ApiKeyList = { apiKeys: ApiKeySummary[] }
type ApiKeyResponse = {
  id: string
  createdAt: string
  expiresAt?: (string | null) | undefined
  publicKey: string
  secretKey: string
  displaySecretKey: string
  name?: (string | null) | undefined
  note?: (string | null) | undefined
}
type ApiKeyDeletionResponse = { success: boolean }
type ChatMessageType = 'chatmessage'
type ChatMessage = { role: string; content: string; type?: ChatMessageType | undefined }
type PlaceholderMessageType = 'placeholder'
type PlaceholderMessage = { name: string; type?: PlaceholderMessageType | undefined }
type ChatMessageWithPlaceholders = ChatMessage | PlaceholderMessage
type Prompt =
  | {
      type?: 'chat' | undefined
      name: string
      version: number
      config: { [x: string]: unknown }
      labels: string[]
      tags: string[]
      commitMessage?: (string | null) | undefined
      resolutionGraph?: ({ [x: string]: unknown } | null) | undefined
      prompt: ChatMessageWithPlaceholders[]
    }
  | {
      type?: 'text' | undefined
      name: string
      version: number
      config: { [x: string]: unknown }
      labels: string[]
      tags: string[]
      commitMessage?: (string | null) | undefined
      resolutionGraph?: ({ [x: string]: unknown } | null) | undefined
      prompt: string
    }
type PromptType = 'chat' | 'text'
type PromptMeta = {
  name: string
  type: PromptType
  versions: number[]
  labels: string[]
  tags: string[]
  lastUpdatedAt: string
  lastConfig: { [x: string]: unknown }
}
type PromptMetaListResponse = { data: PromptMeta[]; meta: UtilsMetaResponse }
type CreateChatPromptType = 'chat'
type CreateChatPromptRequest = {
  name: string
  prompt: ChatMessageWithPlaceholders[]
  config?: ({ [x: string]: unknown } | null) | undefined
  type: CreateChatPromptType
  labels?: (string[] | null) | undefined
  tags?: (string[] | null) | undefined
  commitMessage?: (string | null) | undefined
}
type CreateTextPromptType = 'text'
type CreateTextPromptRequest = {
  name: string
  prompt: string
  config?: ({ [x: string]: unknown } | null) | undefined
  type?: CreateTextPromptType | undefined
  labels?: (string[] | null) | undefined
  tags?: (string[] | null) | undefined
  commitMessage?: (string | null) | undefined
}
type CreatePromptRequest = CreateChatPromptRequest | CreateTextPromptRequest
type ScimFeatureSupport = { supported: boolean }
type BulkConfig = { supported: boolean; maxOperations: number; maxPayloadSize: number }
type FilterConfig = { supported: boolean; maxResults: number }
type AuthenticationScheme = {
  name: string
  description: string
  specUri: string
  type: string
  primary: boolean
}
type ResourceMeta = { resourceType: string; location: string }
type ServiceProviderConfig = {
  schemas: string[]
  documentationUri: string
  patch: ScimFeatureSupport
  bulk: BulkConfig
  filter: FilterConfig
  changePassword: ScimFeatureSupport
  sort: ScimFeatureSupport
  etag: ScimFeatureSupport
  authenticationSchemes: AuthenticationScheme[]
  meta: ResourceMeta
}
type SchemaExtension = { schema: string; required: boolean }
type ResourceType = {
  schemas?: (string[] | null) | undefined
  id: string
  name: string
  endpoint: string
  description: string
  schema: string
  schemaExtensions: SchemaExtension[]
  meta: ResourceMeta
}
type ResourceTypesResponse = { schemas: string[]; totalResults: number; Resources: ResourceType[] }
type SchemaResource = {
  id: string
  name: string
  description: string
  attributes: { [x: string]: unknown }[]
  meta: ResourceMeta
}
type SchemasResponse = { schemas: string[]; totalResults: number; Resources: SchemaResource[] }
type ScimName = { formatted?: (string | null) | undefined }
type ScimEmail = { primary: boolean; value: string; type: string }
type UserMeta = {
  resourceType: string
  created?: (string | null) | undefined
  lastModified?: (string | null) | undefined
}
type ScimUser = {
  schemas: string[]
  id: string
  userName: string
  name: ScimName
  emails: ScimEmail[]
  meta: UserMeta
}
type ScimUsersListResponse = {
  schemas: string[]
  totalResults: number
  startIndex: number
  itemsPerPage: number
  Resources: ScimUser[]
}
type EmptyResponse = { [x: string]: unknown }
type ScoreConfigDataType = 'NUMERIC' | 'BOOLEAN' | 'CATEGORICAL' | 'TEXT'
type ConfigCategory = { value: number; label: string }
type CreateScoreConfigRequest = {
  name: string
  dataType: ScoreConfigDataType
  categories?: (ConfigCategory[] | null) | undefined
  minValue?: (number | null) | undefined
  maxValue?: (number | null) | undefined
  description?: (string | null) | undefined
}
type ScoreConfig = {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  projectId: string
  dataType: ScoreConfigDataType
  isArchived: boolean
  minValue?: (number | null) | undefined
  maxValue?: (number | null) | undefined
  categories?: (ConfigCategory[] | null) | undefined
  description?: (string | null) | undefined
}
type ScoreConfigs = { data: ScoreConfig[]; meta: UtilsMetaResponse }
type UpdateScoreConfigRequest = {
  isArchived?: (boolean | null) | undefined
  name?: (string | null) | undefined
  categories?: (ConfigCategory[] | null) | undefined
  minValue?: (number | null) | undefined
  maxValue?: (number | null) | undefined
  description?: (string | null) | undefined
}
type CreateScoreValue = number | string
type ScoreDataType = 'NUMERIC' | 'BOOLEAN' | 'CATEGORICAL' | 'CORRECTION' | 'TEXT'
type CreateScoreSource = 'API' | 'ANNOTATION'
type CreateScoreRequest = {
  id?: (string | null) | undefined
  traceId?: (string | null) | undefined
  sessionId?: (string | null) | undefined
  observationId?: (string | null) | undefined
  datasetRunId?: (string | null) | undefined
  name: string
  value: CreateScoreValue
  comment?: (string | null) | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  environment?: (string | null) | undefined
  queueId?: (string | null) | undefined
  dataType?: ScoreDataType | undefined
  configId?: (string | null) | undefined
  source?: CreateScoreSource | undefined
  timestamp?: (string | null) | undefined
}
type CreateScoresRequest = CreateScoreRequest[]
type CreateScoreBatchError = { message: string }
type CreateScoreBatchResults = {
  accepted: number
  rejected: number
  errors: CreateScoreBatchError[]
}
type CreateScoreBatchResponse = { message: 'Accepted' }
type CreateScoresResponse = CreateScoreBatchResults | CreateScoreBatchResponse
type GetScoresV3Meta = { cursor?: (string | null) | undefined }
type GetScoresV3Response = { data: ScoreV3[]; meta: GetScoresV3Meta }
type SkillMeta = {
  name: string
  description: string
  tags: string[]
  latestVersion: number
  latestVersionCreatedAt: string
  latestVersionLastUpdatedAt: string
  productionVersion: number | null
}
type SkillListPagination = { page: number; limit: number; totalItems: number; totalPages: number }
type SkillMetaListResponse = { data: SkillMeta[]; meta: SkillListPagination }
type SkillVersionFileInput = { path: string; content: string }
type SkillVersionFileReference = { path: string; sha256Hash: string }
type SkillVersionFileCreateInput = SkillVersionFileInput | SkillVersionFileReference
type CreateSkillVersionRequest = {
  files: SkillVersionFileCreateInput[]
  commitMessage?: (string | null) | undefined
}
type SkillFile = {
  id: string
  path: string
  blobId: string
  sha256Hash: string
  contentType: string
  contentLength: bigint
  content?: (string | null) | undefined
}
type SkillVersion = {
  id: string
  createdAt: string
  updatedAt: string
  projectId: string
  createdBy: string
  name: string
  description: string
  frontmatter: { [x: string]: unknown }
  version: number
  tags: string[]
  labels: string[]
  commitMessage: string | null
  files: SkillFile[]
}
type UpdateSkillRequest = { tags: string[] }
type SkillFileContent = { sha256Hash: string; content: string }
type SkillFileContentsResponse = { data: SkillFileContent[] }
type UpdateSkillLabelsRequest = { labels: string[] }
type DeleteSkillVersionResponse = { deleted: boolean }
type DeleteTraceResponse = { message: string }
type UnstableBillableUnitsGranularity = 'hour' | 'day' | 'week' | 'month'
type UnstableBillableUnitsRow = {
  bucket: string
  projectId: string
  count: number
  traces: number
  observations: number
  scores: number
  topicFacetSummaries: number
}
type UnstableBillableUnitsResponse = {
  data: UnstableBillableUnitsRow[]
  usageRecordedFrom?: (string | null) | undefined
}
type UnstablePublicApiErrorCode =
  | 'authentication_failed'
  | 'access_denied'
  | 'invalid_request'
  | 'invalid_query'
  | 'invalid_body'
  | 'resource_not_found'
  | 'conflict'
  | 'rate_limited'
  | 'method_not_allowed'
  | 'internal_error'
type UnstablePublicApiValidationIssue = {
  code: string
  message: string
  path: { [x: string]: unknown }[]
}
type UnstablePublicApiErrorDetails = {
  issues?: (UnstablePublicApiValidationIssue[] | null) | undefined
  field?: (string | null) | undefined
  column?: (string | null) | undefined
  invalidValues?: (string[] | null) | undefined
  allowedValues?: (string[] | null) | undefined
  value?: (string | null) | undefined
  retryAfterSeconds?: (number | null) | undefined
  limit?: (number | null) | undefined
  remaining?: (number | null) | undefined
  resetAt?: (string | null) | undefined
}
type UnstablePublicApiError = {
  message: string
  code: UnstablePublicApiErrorCode
  details?: UnstablePublicApiErrorDetails | undefined
}
type UnstableDashboardWidgetViewWithLegacy =
  | 'observations'
  | 'scores-numeric'
  | 'scores-boolean'
  | 'scores-categorical'
  | 'traces'
type UnstableDashboardWidgetDimension = { field: string }
type UnstableDashboardWidgetMetricAggregation =
  | 'sum'
  | 'avg'
  | 'count'
  | 'max'
  | 'min'
  | 'p50'
  | 'p75'
  | 'p90'
  | 'p95'
  | 'p99'
  | 'histogram'
  | 'uniq'
type UnstableDashboardWidgetMetric = {
  measure: string
  agg: UnstableDashboardWidgetMetricAggregation
}
type UnstableDashboardWidgetFilter = {
  column: string
  operator: string
  type: string
  value?: ({ [x: string]: unknown } | null) | undefined
  key?: (string | null) | undefined
}
type UnstableDashboardWidgetChartType =
  | 'LINE_TIME_SERIES'
  | 'AREA_TIME_SERIES'
  | 'BAR_TIME_SERIES'
  | 'HORIZONTAL_BAR'
  | 'VERTICAL_BAR'
  | 'PIE'
  | 'NUMBER'
  | 'HISTOGRAM'
  | 'PIVOT_TABLE'
type UnstableDashboardWidgetSortOrder = 'ASC' | 'DESC'
type UnstableDashboardWidgetDefaultSort = {
  column: string
  order: UnstableDashboardWidgetSortOrder
}
type UnstableDashboardWidgetChartConfig = {
  type: UnstableDashboardWidgetChartType
  row_limit?: (number | null) | undefined
  show_value_labels?: (boolean | null) | undefined
  bins?: (number | null) | undefined
  defaultSort?: UnstableDashboardWidgetDefaultSort | undefined
}
type UnstableDashboardWidget = {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  description: string
  view: UnstableDashboardWidgetViewWithLegacy
  dimensions: UnstableDashboardWidgetDimension[]
  metrics: UnstableDashboardWidgetMetric[]
  filters: UnstableDashboardWidgetFilter[]
  chartType: UnstableDashboardWidgetChartType
  chartConfig: UnstableDashboardWidgetChartConfig
}
type UnstableDashboardWidgetList = { data: UnstableDashboardWidget[]; meta: UtilsMetaResponse }
type UnstableDashboardWidgetView =
  | 'observations'
  | 'scores-numeric'
  | 'scores-boolean'
  | 'scores-categorical'
type UnstableDashboardWidgetChartConfigInput = {
  type?: UnstableDashboardWidgetChartType | undefined
  row_limit?: (number | null) | undefined
  show_value_labels?: (boolean | null) | undefined
  bins?: (number | null) | undefined
  defaultSort?: UnstableDashboardWidgetDefaultSort | undefined
}
type UnstableCreateDashboardWidgetRequest = {
  name: string
  description?: (string | null) | undefined
  view: UnstableDashboardWidgetView
  dimensions: UnstableDashboardWidgetDimension[]
  metrics: UnstableDashboardWidgetMetric[]
  filters: UnstableDashboardWidgetFilter[]
  chartType: UnstableDashboardWidgetChartType
  chartConfig?: UnstableDashboardWidgetChartConfigInput | undefined
}
type UnstableUpdateDashboardWidgetRequest = {
  name?: (string | null) | undefined
  description?: (string | null) | undefined
  view?: UnstableDashboardWidgetView | undefined
  dimensions?: (UnstableDashboardWidgetDimension[] | null) | undefined
  metrics?: (UnstableDashboardWidgetMetric[] | null) | undefined
  filters?: (UnstableDashboardWidgetFilter[] | null) | undefined
  chartType?: UnstableDashboardWidgetChartType | undefined
  chartConfig?: UnstableDashboardWidgetChartConfigInput | undefined
}
type UnstableDeleteDashboardWidgetResponse = { message: string }
type UnstableDashboardPlacement =
  | {
      type?: 'widget' | undefined
      id: string
      widgetId: string
      x: number
      y: number
      width: number
      height: number
    }
  | {
      type?: 'preset' | undefined
      id: string
      presetId: string
      x: number
      y: number
      width: number
      height: number
    }
type UnstableDashboardDefinition = { widgets: UnstableDashboardPlacement[] }
type UnstableDashboard = {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  description: string
  definition: UnstableDashboardDefinition
  filters: UnstableDashboardWidgetFilter[]
}
type UnstableDashboardList = { data: UnstableDashboard[]; meta: UtilsMetaResponse }
type UnstableCreateDashboardRequest = {
  name: string
  description?: (string | null) | undefined
  definition?: UnstableDashboardDefinition | undefined
  filters?: (UnstableDashboardWidgetFilter[] | null) | undefined
}
type UnstableUpdateDashboardRequest = {
  name?: (string | null) | undefined
  description?: (string | null) | undefined
  definition?: UnstableDashboardDefinition | undefined
  filters?: (UnstableDashboardWidgetFilter[] | null) | undefined
}
type UnstableDeleteDashboardResponse = { message: string }
type UnstableCreateDashboardPlacementRequest =
  | {
      type?: 'widget' | undefined
      id?: (string | null) | undefined
      widgetId: string
      x?: (number | null) | undefined
      y?: (number | null) | undefined
      width?: (number | null) | undefined
      height?: (number | null) | undefined
    }
  | {
      type?: 'preset' | undefined
      id?: (string | null) | undefined
      presetId: string
      x?: (number | null) | undefined
      y?: (number | null) | undefined
      width?: (number | null) | undefined
      height?: (number | null) | undefined
    }
type UnstableUpdateDashboardPlacementRequest = {
  x?: (number | null) | undefined
  y?: (number | null) | undefined
  width?: (number | null) | undefined
  height?: (number | null) | undefined
}
type UnstableDeleteDashboardPlacementResponse = { message: string }
type UnstableTopicFacetPublishedRun = {
  id: string
  completedAt?: (string | null) | undefined
  topicCount: number
}
type UnstableTopicFacet = {
  id: string
  name: string
  description: string
  isBuiltIn: boolean
  active: boolean
  ruleIds: string[]
  version: number
  prompt: string
  publishedRun?: UnstableTopicFacetPublishedRun | undefined
}
type UnstableTopicFacetList = { data: UnstableTopicFacet[]; meta: UtilsMetaResponse }
type UnstableTopicsOrderBy = 'traceCount.desc' | 'traceCount.asc' | 'name.asc' | 'name.desc'
type UnstableTopicWindow = { from: string; to: string }
type UnstableTopicFacetRef = { id: string; name: string; version: number }
type UnstableTopic = {
  id: string
  versionId: string
  name: string
  description: string
  facet: UnstableTopicFacetRef
  ruleId?: (string | null) | undefined
  runId: string
  traceCount: number
}
type UnstableTopicStatusCounts = {
  assigned: number
  outlier: number
  awaitingMap: number
  notApplicable: number
  insufficientInput: number
}
type UnstableTopicFacetCounts = {
  facet: UnstableTopicFacetRef
  ruleId?: (string | null) | undefined
  publishedRunId?: (string | null) | undefined
  counts: UnstableTopicStatusCounts
}
type UnstableTopicList = {
  window: UnstableTopicWindow
  data: UnstableTopic[]
  facets: UnstableTopicFacetCounts[]
  meta: UtilsMetaResponse
}
type UnstableTopicWithStatus = {
  id: string
  versionId: string
  name: string
  description: string
  facet: UnstableTopicFacetRef
  ruleId?: (string | null) | undefined
  runId: string
  traceCount: number
}
type UnstableTopicRule = {
  id: string
  name: string
  filter: EvaluationRuleReadFilter[]
  sampling: number
  facetIds: string[]
  updatedAt: string
}
type UnstableTopicRuleList = { data: UnstableTopicRule[]; meta: UtilsMetaResponse }
type UnstableTopicResultsOrderBy = 'timestamp.desc' | 'timestamp.asc'
type UnstableTopicSummaryState = 'complete' | 'not_applicable' | 'insufficient_input'
type UnstableTopicSummary = {
  traceId: string
  traceName: string
  environment: string
  timestamp: string
  facetId: string
  facetName: string
  facetVersion: number
  state: UnstableTopicSummaryState
  summary?: (string | null) | undefined
  summaryTruncated: boolean
  processedAt: string
}
type UnstableTopicResultListMeta = {
  cursor?: (string | null) | undefined
  comment?: (string | null) | undefined
}
type UnstableTopicSummaryList = {
  window: UnstableTopicWindow
  data: UnstableTopicSummary[]
  meta: UnstableTopicResultListMeta
}
type UnstableTopicAssignmentStatus = 'assigned' | 'outlier'
type UnstableTopicAssignmentTopic = { id: string; versionId: string; name: string }
type UnstableTopicAssignment = {
  traceId: string
  timestamp: string
  facetId: string
  facetName: string
  facetVersion: number
  ruleId?: (string | null) | undefined
  status: UnstableTopicAssignmentStatus
  topic?: UnstableTopicAssignmentTopic | undefined
  runId?: (string | null) | undefined
  assignedAt: string
}
type UnstableTopicAssignmentList = {
  window: UnstableTopicWindow
  data: UnstableTopicAssignment[]
  meta: UnstableTopicResultListMeta
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/public/annotation-queues': {
      $get:
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: PaginatedAnnotationQueues
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $post:
        | {
            input: { json: CreateAnnotationQueueRequest }
            output: AnnotationQueue
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateAnnotationQueueRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateAnnotationQueueRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateAnnotationQueueRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateAnnotationQueueRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateAnnotationQueueRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/annotation-queues/:queueId': {
      $get:
        | {
            input: { param: { queueId: string } }
            output: AnnotationQueue
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { queueId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { queueId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { queueId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { queueId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { queueId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/annotation-queues/:queueId/items': {
      $get:
        | {
            input: { param: { queueId: string } } & {
              query: {
                status?: AnnotationQueueStatus | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: PaginatedAnnotationQueueItems
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { queueId: string } } & {
              query: {
                status?: AnnotationQueueStatus | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { queueId: string } } & {
              query: {
                status?: AnnotationQueueStatus | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { queueId: string } } & {
              query: {
                status?: AnnotationQueueStatus | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { queueId: string } } & {
              query: {
                status?: AnnotationQueueStatus | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { queueId: string } } & {
              query: {
                status?: AnnotationQueueStatus | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $post:
        | {
            input: { param: { queueId: string } } & { json: CreateAnnotationQueueItemRequest }
            output: AnnotationQueueItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { queueId: string } } & { json: CreateAnnotationQueueItemRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { queueId: string } } & { json: CreateAnnotationQueueItemRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { queueId: string } } & { json: CreateAnnotationQueueItemRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { queueId: string } } & { json: CreateAnnotationQueueItemRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { queueId: string } } & { json: CreateAnnotationQueueItemRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/annotation-queues/:queueId/items/:itemId': {
      $get:
        | {
            input: { param: { queueId: string; itemId: string } }
            output: AnnotationQueueItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { queueId: string; itemId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { queueId: string; itemId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { queueId: string; itemId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { queueId: string; itemId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { queueId: string; itemId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $patch:
        | {
            input: { param: { queueId: string; itemId: string } } & {
              json: UpdateAnnotationQueueItemRequest
            }
            output: AnnotationQueueItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { queueId: string; itemId: string } } & {
              json: UpdateAnnotationQueueItemRequest
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { queueId: string; itemId: string } } & {
              json: UpdateAnnotationQueueItemRequest
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { queueId: string; itemId: string } } & {
              json: UpdateAnnotationQueueItemRequest
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { queueId: string; itemId: string } } & {
              json: UpdateAnnotationQueueItemRequest
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { queueId: string; itemId: string } } & {
              json: UpdateAnnotationQueueItemRequest
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $delete:
        | {
            input: { param: { queueId: string; itemId: string } }
            output: DeleteAnnotationQueueItemResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { queueId: string; itemId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { queueId: string; itemId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { queueId: string; itemId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { queueId: string; itemId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { queueId: string; itemId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/annotation-queues/:queueId/assignments': {
      $post:
        | {
            input: { param: { queueId: string } } & { json: AnnotationQueueAssignmentRequest }
            output: CreateAnnotationQueueAssignmentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { queueId: string } } & { json: AnnotationQueueAssignmentRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { queueId: string } } & { json: AnnotationQueueAssignmentRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { queueId: string } } & { json: AnnotationQueueAssignmentRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { queueId: string } } & { json: AnnotationQueueAssignmentRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { queueId: string } } & { json: AnnotationQueueAssignmentRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $delete:
        | {
            input: { param: { queueId: string } } & { json: AnnotationQueueAssignmentRequest }
            output: DeleteAnnotationQueueAssignmentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { queueId: string } } & { json: AnnotationQueueAssignmentRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { queueId: string } } & { json: AnnotationQueueAssignmentRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { queueId: string } } & { json: AnnotationQueueAssignmentRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { queueId: string } } & { json: AnnotationQueueAssignmentRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { queueId: string } } & { json: AnnotationQueueAssignmentRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/integrations/blob-storage': {
      $get:
        | { input: {}; output: BlobStorageIntegrationsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 400 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 403 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 404 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 405 }
      $put:
        | {
            input: { json: CreateBlobStorageIntegrationRequest }
            output: BlobStorageIntegrationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateBlobStorageIntegrationRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateBlobStorageIntegrationRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateBlobStorageIntegrationRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateBlobStorageIntegrationRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateBlobStorageIntegrationRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/integrations/blob-storage/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: BlobStorageIntegrationStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $delete:
        | {
            input: { param: { id: string } }
            output: BlobStorageIntegrationDeletionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/comments': {
      $post:
        | {
            input: { json: CreateCommentRequest }
            output: CreateCommentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateCommentRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateCommentRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateCommentRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateCommentRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateCommentRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $get:
        | {
            input: {
              query: {
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
                objectType?: (string | null) | undefined
                objectId?: (string | null) | undefined
                authorUserId?: (string | null) | undefined
              }
            }
            output: GetCommentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
                objectType?: (string | null) | undefined
                objectId?: (string | null) | undefined
                authorUserId?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
                objectType?: (string | null) | undefined
                objectId?: (string | null) | undefined
                authorUserId?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
                objectType?: (string | null) | undefined
                objectId?: (string | null) | undefined
                authorUserId?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
                objectType?: (string | null) | undefined
                objectId?: (string | null) | undefined
                authorUserId?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
                objectType?: (string | null) | undefined
                objectId?: (string | null) | undefined
                authorUserId?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/comments/:commentId': {
      $get:
        | {
            input: { param: { commentId: string } }
            output: Comment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { commentId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { commentId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { commentId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { commentId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { commentId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/dataset-items': {
      $post:
        | {
            input: { json: CreateDatasetItemRequest }
            output: DatasetItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateDatasetItemRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateDatasetItemRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateDatasetItemRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateDatasetItemRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateDatasetItemRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $get:
        | {
            input: {
              query: {
                datasetName?: (string | null) | undefined
                sourceTraceId?: (string | null) | undefined
                sourceObservationId?: (string | null) | undefined
                version?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: PaginatedDatasetItems
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                datasetName?: (string | null) | undefined
                sourceTraceId?: (string | null) | undefined
                sourceObservationId?: (string | null) | undefined
                version?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                datasetName?: (string | null) | undefined
                sourceTraceId?: (string | null) | undefined
                sourceObservationId?: (string | null) | undefined
                version?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                datasetName?: (string | null) | undefined
                sourceTraceId?: (string | null) | undefined
                sourceObservationId?: (string | null) | undefined
                version?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                datasetName?: (string | null) | undefined
                sourceTraceId?: (string | null) | undefined
                sourceObservationId?: (string | null) | undefined
                version?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                datasetName?: (string | null) | undefined
                sourceTraceId?: (string | null) | undefined
                sourceObservationId?: (string | null) | undefined
                version?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/dataset-items/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: DatasetItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $delete:
        | {
            input: { param: { id: string } }
            output: DeleteDatasetItemResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/v2/datasets': {
      $get:
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: PaginatedDatasets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $post:
        | {
            input: { json: CreateDatasetRequest }
            output: Dataset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateDatasetRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateDatasetRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateDatasetRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateDatasetRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateDatasetRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/v2/datasets/:datasetName': {
      $get:
        | {
            input: { param: { datasetName: string } }
            output: Dataset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { datasetName: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { datasetName: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { datasetName: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { datasetName: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { datasetName: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/v2/evaluation-rules': {
      $post:
        | {
            input: { json: CreateEvaluationRuleRequest }
            output: EvaluationRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateEvaluationRuleRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateEvaluationRuleRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateEvaluationRuleRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateEvaluationRuleRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateEvaluationRuleRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: CreateEvaluationRuleRequest }
            output: PublicApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateEvaluationRuleRequest }
            output: PublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateEvaluationRuleRequest }
            output: PublicApiError
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              query: { limit?: (number | null) | undefined; cursor?: (string | null) | undefined }
            }
            output: EvaluationRulesPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { limit?: (number | null) | undefined; cursor?: (string | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { limit?: (number | null) | undefined; cursor?: (string | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { limit?: (number | null) | undefined; cursor?: (string | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { limit?: (number | null) | undefined; cursor?: (string | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { limit?: (number | null) | undefined; cursor?: (string | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: { limit?: (number | null) | undefined; cursor?: (string | null) | undefined }
            }
            output: PublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: { limit?: (number | null) | undefined; cursor?: (string | null) | undefined }
            }
            output: PublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/v2/evaluation-rules/:evaluationRuleId': {
      $get:
        | {
            input: { param: { evaluationRuleId: string } }
            output: EvaluationRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { evaluationRuleId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { evaluationRuleId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { evaluationRuleId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { evaluationRuleId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { evaluationRuleId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { evaluationRuleId: string } }
            output: PublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { evaluationRuleId: string } }
            output: PublicApiError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { evaluationRuleId: string } } & { json: UpdateEvaluationRuleRequest }
            output: EvaluationRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { evaluationRuleId: string } } & { json: UpdateEvaluationRuleRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { evaluationRuleId: string } } & { json: UpdateEvaluationRuleRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { evaluationRuleId: string } } & { json: UpdateEvaluationRuleRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { evaluationRuleId: string } } & { json: UpdateEvaluationRuleRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { evaluationRuleId: string } } & { json: UpdateEvaluationRuleRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { evaluationRuleId: string } } & { json: UpdateEvaluationRuleRequest }
            output: PublicApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { evaluationRuleId: string } } & { json: UpdateEvaluationRuleRequest }
            output: PublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { evaluationRuleId: string } } & { json: UpdateEvaluationRuleRequest }
            output: PublicApiError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { evaluationRuleId: string } }
            output: DeletedEvaluationRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { evaluationRuleId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { evaluationRuleId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { evaluationRuleId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { evaluationRuleId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { evaluationRuleId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { evaluationRuleId: string } }
            output: PublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { evaluationRuleId: string } }
            output: PublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/v2/evaluators': {
      $post:
        | {
            input: { json: CreateEvaluatorRequest }
            output: Evaluator
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateEvaluatorRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateEvaluatorRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateEvaluatorRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateEvaluatorRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateEvaluatorRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: CreateEvaluatorRequest }
            output: PublicApiError
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { json: CreateEvaluatorRequest }
            output: PublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateEvaluatorRequest }
            output: PublicApiError
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              query: { limit?: (number | null) | undefined; cursor?: (string | null) | undefined }
            }
            output: EvaluatorsPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { limit?: (number | null) | undefined; cursor?: (string | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { limit?: (number | null) | undefined; cursor?: (string | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { limit?: (number | null) | undefined; cursor?: (string | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { limit?: (number | null) | undefined; cursor?: (string | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { limit?: (number | null) | undefined; cursor?: (string | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: { limit?: (number | null) | undefined; cursor?: (string | null) | undefined }
            }
            output: PublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: { limit?: (number | null) | undefined; cursor?: (string | null) | undefined }
            }
            output: PublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/v2/evaluators/:evaluatorId': {
      $get:
        | {
            input: { param: { evaluatorId: string } }
            output: Evaluator
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { evaluatorId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { evaluatorId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { evaluatorId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { evaluatorId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { evaluatorId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { evaluatorId: string } }
            output: PublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { evaluatorId: string } }
            output: PublicApiError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { evaluatorId: string } } & { json: UpdateEvaluatorRequest }
            output: Evaluator
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { evaluatorId: string } } & { json: UpdateEvaluatorRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { evaluatorId: string } } & { json: UpdateEvaluatorRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { evaluatorId: string } } & { json: UpdateEvaluatorRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { evaluatorId: string } } & { json: UpdateEvaluatorRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { evaluatorId: string } } & { json: UpdateEvaluatorRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { evaluatorId: string } } & { json: UpdateEvaluatorRequest }
            output: PublicApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { evaluatorId: string } } & { json: UpdateEvaluatorRequest }
            output: PublicApiError
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { evaluatorId: string } } & { json: UpdateEvaluatorRequest }
            output: PublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { evaluatorId: string } } & { json: UpdateEvaluatorRequest }
            output: PublicApiError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { evaluatorId: string } }
            output: DeletedEvaluator
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { evaluatorId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { evaluatorId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { evaluatorId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { evaluatorId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { evaluatorId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { evaluatorId: string } }
            output: PublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { evaluatorId: string } }
            output: PublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/v2/evaluators/:evaluatorId/versions': {
      $get:
        | {
            input: { param: { evaluatorId: string } } & {
              query: { limit?: (number | null) | undefined; cursor?: (string | null) | undefined }
            }
            output: EvaluatorVersionsPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { evaluatorId: string } } & {
              query: { limit?: (number | null) | undefined; cursor?: (string | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { evaluatorId: string } } & {
              query: { limit?: (number | null) | undefined; cursor?: (string | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { evaluatorId: string } } & {
              query: { limit?: (number | null) | undefined; cursor?: (string | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { evaluatorId: string } } & {
              query: { limit?: (number | null) | undefined; cursor?: (string | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { evaluatorId: string } } & {
              query: { limit?: (number | null) | undefined; cursor?: (string | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { evaluatorId: string } } & {
              query: { limit?: (number | null) | undefined; cursor?: (string | null) | undefined }
            }
            output: PublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { evaluatorId: string } } & {
              query: { limit?: (number | null) | undefined; cursor?: (string | null) | undefined }
            }
            output: PublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/experiments': {
      $get:
        | {
            input: {
              query: {
                fields?: (string | null) | undefined
                limit?: (number | null) | undefined
                scoreLimit?: (number | null) | undefined
                cursor?: (string | null) | undefined
                fromStartTime: string
                toStartTime?: (string | null) | undefined
                id?: (string | null) | undefined
                name?: (string | null) | undefined
                datasetId?: (string | null) | undefined
                filter?: (string | null) | undefined
              }
            }
            output: ExperimentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: (string | null) | undefined
                limit?: (number | null) | undefined
                scoreLimit?: (number | null) | undefined
                cursor?: (string | null) | undefined
                fromStartTime: string
                toStartTime?: (string | null) | undefined
                id?: (string | null) | undefined
                name?: (string | null) | undefined
                datasetId?: (string | null) | undefined
                filter?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fields?: (string | null) | undefined
                limit?: (number | null) | undefined
                scoreLimit?: (number | null) | undefined
                cursor?: (string | null) | undefined
                fromStartTime: string
                toStartTime?: (string | null) | undefined
                id?: (string | null) | undefined
                name?: (string | null) | undefined
                datasetId?: (string | null) | undefined
                filter?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                fields?: (string | null) | undefined
                limit?: (number | null) | undefined
                scoreLimit?: (number | null) | undefined
                cursor?: (string | null) | undefined
                fromStartTime: string
                toStartTime?: (string | null) | undefined
                id?: (string | null) | undefined
                name?: (string | null) | undefined
                datasetId?: (string | null) | undefined
                filter?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                fields?: (string | null) | undefined
                limit?: (number | null) | undefined
                scoreLimit?: (number | null) | undefined
                cursor?: (string | null) | undefined
                fromStartTime: string
                toStartTime?: (string | null) | undefined
                id?: (string | null) | undefined
                name?: (string | null) | undefined
                datasetId?: (string | null) | undefined
                filter?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                fields?: (string | null) | undefined
                limit?: (number | null) | undefined
                scoreLimit?: (number | null) | undefined
                cursor?: (string | null) | undefined
                fromStartTime: string
                toStartTime?: (string | null) | undefined
                id?: (string | null) | undefined
                name?: (string | null) | undefined
                datasetId?: (string | null) | undefined
                filter?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/experiment-items': {
      $get:
        | {
            input: {
              query: {
                fields?: (string | null) | undefined
                limit?: (number | null) | undefined
                scoreLimit?: (number | null) | undefined
                cursor?: (string | null) | undefined
                fromStartTime: string
                toStartTime?: (string | null) | undefined
                experimentId?: (string | null) | undefined
                experimentName?: (string | null) | undefined
                experimentItemId?: (string | null) | undefined
                datasetId?: (string | null) | undefined
                filter?: (string | null) | undefined
              }
            }
            output: ExperimentItemsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: (string | null) | undefined
                limit?: (number | null) | undefined
                scoreLimit?: (number | null) | undefined
                cursor?: (string | null) | undefined
                fromStartTime: string
                toStartTime?: (string | null) | undefined
                experimentId?: (string | null) | undefined
                experimentName?: (string | null) | undefined
                experimentItemId?: (string | null) | undefined
                datasetId?: (string | null) | undefined
                filter?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fields?: (string | null) | undefined
                limit?: (number | null) | undefined
                scoreLimit?: (number | null) | undefined
                cursor?: (string | null) | undefined
                fromStartTime: string
                toStartTime?: (string | null) | undefined
                experimentId?: (string | null) | undefined
                experimentName?: (string | null) | undefined
                experimentItemId?: (string | null) | undefined
                datasetId?: (string | null) | undefined
                filter?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                fields?: (string | null) | undefined
                limit?: (number | null) | undefined
                scoreLimit?: (number | null) | undefined
                cursor?: (string | null) | undefined
                fromStartTime: string
                toStartTime?: (string | null) | undefined
                experimentId?: (string | null) | undefined
                experimentName?: (string | null) | undefined
                experimentItemId?: (string | null) | undefined
                datasetId?: (string | null) | undefined
                filter?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                fields?: (string | null) | undefined
                limit?: (number | null) | undefined
                scoreLimit?: (number | null) | undefined
                cursor?: (string | null) | undefined
                fromStartTime: string
                toStartTime?: (string | null) | undefined
                experimentId?: (string | null) | undefined
                experimentName?: (string | null) | undefined
                experimentItemId?: (string | null) | undefined
                datasetId?: (string | null) | undefined
                filter?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                fields?: (string | null) | undefined
                limit?: (number | null) | undefined
                scoreLimit?: (number | null) | undefined
                cursor?: (string | null) | undefined
                fromStartTime: string
                toStartTime?: (string | null) | undefined
                experimentId?: (string | null) | undefined
                experimentName?: (string | null) | undefined
                experimentItemId?: (string | null) | undefined
                datasetId?: (string | null) | undefined
                filter?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/feedback': {
      $post:
        | {
            input: { json: SubmitFeedbackRequest }
            output: SubmitFeedbackResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: SubmitFeedbackRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SubmitFeedbackRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SubmitFeedbackRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: SubmitFeedbackRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SubmitFeedbackRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | { input: { json: SubmitFeedbackRequest }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/api/public/health': {
      $get:
        | { input: {}; output: HealthResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 400 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 403 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 404 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 405 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/api/public/llm-connections': {
      $get:
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: PaginatedLlmConnections
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $put:
        | {
            input: { json: UpsertLlmConnectionRequest }
            output: LlmConnection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpsertLlmConnectionRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UpsertLlmConnectionRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UpsertLlmConnectionRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: UpsertLlmConnectionRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: UpsertLlmConnectionRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/llm-connections/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: DeleteLlmConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/organizations/llm-connections': {
      $get:
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: PaginatedLlmConnections
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $put:
        | {
            input: { json: UpsertLlmConnectionRequest }
            output: LlmConnection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpsertLlmConnectionRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UpsertLlmConnectionRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UpsertLlmConnectionRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: UpsertLlmConnectionRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: UpsertLlmConnectionRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/organizations/llm-connections/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: DeleteLlmConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/media/:mediaId': {
      $get:
        | {
            input: { param: { mediaId: string } }
            output: GetMediaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { mediaId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { mediaId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { mediaId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { mediaId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { mediaId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $patch:
        | {
            input: { param: { mediaId: string } } & { json: PatchMediaBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { mediaId: string } } & { json: PatchMediaBody }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { mediaId: string } } & { json: PatchMediaBody }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { mediaId: string } } & { json: PatchMediaBody }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { mediaId: string } } & { json: PatchMediaBody }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { mediaId: string } } & { json: PatchMediaBody }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/media': {
      $post:
        | {
            input: { json: GetMediaUploadUrlRequest }
            output: GetMediaUploadUrlResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GetMediaUploadUrlRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: GetMediaUploadUrlRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: GetMediaUploadUrlRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GetMediaUploadUrlRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: GetMediaUploadUrlRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/v2/metrics': {
      $get:
        | {
            input: { query: { query: string } }
            output: MetricsV2Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { query: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { query: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { query: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { query: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/models': {
      $post:
        | { input: { json: CreateModelRequest }; output: Model; outputFormat: 'json'; status: 200 }
        | {
            input: { json: CreateModelRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateModelRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateModelRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateModelRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateModelRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $get:
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: PaginatedModels
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/models/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: CreateModelRequest }
            output: Model
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: CreateModelRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: CreateModelRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: CreateModelRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: CreateModelRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: CreateModelRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $get:
        | { input: { param: { id: string } }; output: Model; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/v2/observations': {
      $get:
        | {
            input: {
              query: {
                fields?: (string | null) | undefined
                expandMetadata?: (string | null) | undefined
                limit?: (number | null) | undefined
                cursor?: (string | null) | undefined
                parseIoAsJson?: (boolean | null) | undefined
                name?: (string | null) | undefined
                userId?: (string | null) | undefined
                sessionId?: (string | null) | undefined
                type?: (string | null) | undefined
                traceId?: (string | null) | undefined
                level?: ObservationLevel | undefined
                parentObservationId?: (string | null) | undefined
                isRootObservation?: (boolean | null) | undefined
                environment?: (string | null)[] | undefined
                fromStartTime?: (string | null) | undefined
                toStartTime?: (string | null) | undefined
                version?: (string | null) | undefined
                filter?: (string | null) | undefined
              }
            }
            output: ObservationsV2Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: (string | null) | undefined
                expandMetadata?: (string | null) | undefined
                limit?: (number | null) | undefined
                cursor?: (string | null) | undefined
                parseIoAsJson?: (boolean | null) | undefined
                name?: (string | null) | undefined
                userId?: (string | null) | undefined
                sessionId?: (string | null) | undefined
                type?: (string | null) | undefined
                traceId?: (string | null) | undefined
                level?: ObservationLevel | undefined
                parentObservationId?: (string | null) | undefined
                isRootObservation?: (boolean | null) | undefined
                environment?: (string | null)[] | undefined
                fromStartTime?: (string | null) | undefined
                toStartTime?: (string | null) | undefined
                version?: (string | null) | undefined
                filter?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fields?: (string | null) | undefined
                expandMetadata?: (string | null) | undefined
                limit?: (number | null) | undefined
                cursor?: (string | null) | undefined
                parseIoAsJson?: (boolean | null) | undefined
                name?: (string | null) | undefined
                userId?: (string | null) | undefined
                sessionId?: (string | null) | undefined
                type?: (string | null) | undefined
                traceId?: (string | null) | undefined
                level?: ObservationLevel | undefined
                parentObservationId?: (string | null) | undefined
                isRootObservation?: (boolean | null) | undefined
                environment?: (string | null)[] | undefined
                fromStartTime?: (string | null) | undefined
                toStartTime?: (string | null) | undefined
                version?: (string | null) | undefined
                filter?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                fields?: (string | null) | undefined
                expandMetadata?: (string | null) | undefined
                limit?: (number | null) | undefined
                cursor?: (string | null) | undefined
                parseIoAsJson?: (boolean | null) | undefined
                name?: (string | null) | undefined
                userId?: (string | null) | undefined
                sessionId?: (string | null) | undefined
                type?: (string | null) | undefined
                traceId?: (string | null) | undefined
                level?: ObservationLevel | undefined
                parentObservationId?: (string | null) | undefined
                isRootObservation?: (boolean | null) | undefined
                environment?: (string | null)[] | undefined
                fromStartTime?: (string | null) | undefined
                toStartTime?: (string | null) | undefined
                version?: (string | null) | undefined
                filter?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                fields?: (string | null) | undefined
                expandMetadata?: (string | null) | undefined
                limit?: (number | null) | undefined
                cursor?: (string | null) | undefined
                parseIoAsJson?: (boolean | null) | undefined
                name?: (string | null) | undefined
                userId?: (string | null) | undefined
                sessionId?: (string | null) | undefined
                type?: (string | null) | undefined
                traceId?: (string | null) | undefined
                level?: ObservationLevel | undefined
                parentObservationId?: (string | null) | undefined
                isRootObservation?: (boolean | null) | undefined
                environment?: (string | null)[] | undefined
                fromStartTime?: (string | null) | undefined
                toStartTime?: (string | null) | undefined
                version?: (string | null) | undefined
                filter?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                fields?: (string | null) | undefined
                expandMetadata?: (string | null) | undefined
                limit?: (number | null) | undefined
                cursor?: (string | null) | undefined
                parseIoAsJson?: (boolean | null) | undefined
                name?: (string | null) | undefined
                userId?: (string | null) | undefined
                sessionId?: (string | null) | undefined
                type?: (string | null) | undefined
                traceId?: (string | null) | undefined
                level?: ObservationLevel | undefined
                parentObservationId?: (string | null) | undefined
                isRootObservation?: (boolean | null) | undefined
                environment?: (string | null)[] | undefined
                fromStartTime?: (string | null) | undefined
                toStartTime?: (string | null) | undefined
                version?: (string | null) | undefined
                filter?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/otel/v1/traces': {
      $post:
        | {
            input: { json: { resourceSpans: OtelResourceSpan[] } }
            output: OtelTraceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { resourceSpans: OtelResourceSpan[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { resourceSpans: OtelResourceSpan[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { resourceSpans: OtelResourceSpan[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { resourceSpans: OtelResourceSpan[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { resourceSpans: OtelResourceSpan[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/organizations/memberships': {
      $get:
        | { input: {}; output: MembershipsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 400 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 403 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 404 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 405 }
      $put:
        | {
            input: { json: MembershipRequest }
            output: MembershipResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MembershipRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: MembershipRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MembershipRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: MembershipRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: MembershipRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $delete:
        | {
            input: { json: DeleteMembershipRequest }
            output: MembershipDeletionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DeleteMembershipRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DeleteMembershipRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DeleteMembershipRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DeleteMembershipRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: DeleteMembershipRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/projects/:projectId/memberships': {
      $get:
        | {
            input: { param: { projectId: string } }
            output: MembershipsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $put:
        | {
            input: { param: { projectId: string } } & { json: MembershipRequest }
            output: MembershipResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: MembershipRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } } & { json: MembershipRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } } & { json: MembershipRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } } & { json: MembershipRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string } } & { json: MembershipRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $delete:
        | {
            input: { param: { projectId: string } } & { json: DeleteMembershipRequest }
            output: MembershipDeletionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: DeleteMembershipRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } } & { json: DeleteMembershipRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } } & { json: DeleteMembershipRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } } & { json: DeleteMembershipRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string } } & { json: DeleteMembershipRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/organizations/projects': {
      $get:
        | { input: {}; output: OrganizationProjectsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 400 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 403 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 404 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 405 }
    }
  } & {
    '/api/public/organizations/apiKeys': {
      $get:
        | { input: {}; output: OrganizationApiKeysResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 400 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 403 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 404 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 405 }
    }
  } & {
    '/api/public/projects': {
      $get:
        | { input: {}; output: Projects; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 400 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 403 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 404 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 405 }
      $post:
        | {
            input: {
              json: {
                name: string
                metadata?: ({ [x: string]: unknown } | null) | undefined
                retention: number
              }
            }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name: string
                metadata?: ({ [x: string]: unknown } | null) | undefined
                retention: number
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                metadata?: ({ [x: string]: unknown } | null) | undefined
                retention: number
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                name: string
                metadata?: ({ [x: string]: unknown } | null) | undefined
                retention: number
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                name: string
                metadata?: ({ [x: string]: unknown } | null) | undefined
                retention: number
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                name: string
                metadata?: ({ [x: string]: unknown } | null) | undefined
                retention: number
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/projects/:projectId': {
      $put:
        | {
            input: { param: { projectId: string } } & {
              json: {
                name: string
                metadata?: ({ [x: string]: unknown } | null) | undefined
                retention?: (number | null) | undefined
              }
            }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              json: {
                name: string
                metadata?: ({ [x: string]: unknown } | null) | undefined
                retention?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } } & {
              json: {
                name: string
                metadata?: ({ [x: string]: unknown } | null) | undefined
                retention?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } } & {
              json: {
                name: string
                metadata?: ({ [x: string]: unknown } | null) | undefined
                retention?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } } & {
              json: {
                name: string
                metadata?: ({ [x: string]: unknown } | null) | undefined
                retention?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string } } & {
              json: {
                name: string
                metadata?: ({ [x: string]: unknown } | null) | undefined
                retention?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $delete:
        | {
            input: { param: { projectId: string } }
            output: ProjectDeletionResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { projectId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/projects/:projectId/apiKeys': {
      $get:
        | {
            input: { param: { projectId: string } }
            output: ApiKeyList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $post:
        | {
            input: { param: { projectId: string } } & {
              json: {
                name?: (string | null) | undefined
                note?: (string | null) | undefined
                expiresAt?: (string | null) | undefined
                publicKey?: (string | null) | undefined
                secretKey?: (string | null) | undefined
              }
            }
            output: ApiKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              json: {
                name?: (string | null) | undefined
                note?: (string | null) | undefined
                expiresAt?: (string | null) | undefined
                publicKey?: (string | null) | undefined
                secretKey?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } } & {
              json: {
                name?: (string | null) | undefined
                note?: (string | null) | undefined
                expiresAt?: (string | null) | undefined
                publicKey?: (string | null) | undefined
                secretKey?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } } & {
              json: {
                name?: (string | null) | undefined
                note?: (string | null) | undefined
                expiresAt?: (string | null) | undefined
                publicKey?: (string | null) | undefined
                secretKey?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } } & {
              json: {
                name?: (string | null) | undefined
                note?: (string | null) | undefined
                expiresAt?: (string | null) | undefined
                publicKey?: (string | null) | undefined
                secretKey?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string } } & {
              json: {
                name?: (string | null) | undefined
                note?: (string | null) | undefined
                expiresAt?: (string | null) | undefined
                publicKey?: (string | null) | undefined
                secretKey?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/projects/:projectId/apiKeys/:apiKeyId': {
      $delete:
        | {
            input: { param: { projectId: string; apiKeyId: string } }
            output: ApiKeyDeletionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string; apiKeyId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string; apiKeyId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string; apiKeyId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string; apiKeyId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string; apiKeyId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/v2/prompts/:name/versions/:version': {
      $patch:
        | {
            input: { param: { name: string; version: number } } & {
              json: {
                newLabels?: (string[] | null) | undefined
                removeLabels?: (string[] | null) | undefined
              }
            }
            output: Prompt
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; version: number } } & {
              json: {
                newLabels?: (string[] | null) | undefined
                removeLabels?: (string[] | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string; version: number } } & {
              json: {
                newLabels?: (string[] | null) | undefined
                removeLabels?: (string[] | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { name: string; version: number } } & {
              json: {
                newLabels?: (string[] | null) | undefined
                removeLabels?: (string[] | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { name: string; version: number } } & {
              json: {
                newLabels?: (string[] | null) | undefined
                removeLabels?: (string[] | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string; version: number } } & {
              json: {
                newLabels?: (string[] | null) | undefined
                removeLabels?: (string[] | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/v2/prompts/:promptName': {
      $get:
        | {
            input: { param: { promptName: string } } & {
              query: {
                version?: (number | null) | undefined
                label?: (string | null) | undefined
                resolve?: (boolean | null) | undefined
              }
            }
            output: Prompt
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { promptName: string } } & {
              query: {
                version?: (number | null) | undefined
                label?: (string | null) | undefined
                resolve?: (boolean | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { promptName: string } } & {
              query: {
                version?: (number | null) | undefined
                label?: (string | null) | undefined
                resolve?: (boolean | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { promptName: string } } & {
              query: {
                version?: (number | null) | undefined
                label?: (string | null) | undefined
                resolve?: (boolean | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { promptName: string } } & {
              query: {
                version?: (number | null) | undefined
                label?: (string | null) | undefined
                resolve?: (boolean | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { promptName: string } } & {
              query: {
                version?: (number | null) | undefined
                label?: (string | null) | undefined
                resolve?: (boolean | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $delete:
        | {
            input: { param: { promptName: string } } & {
              query: { label?: (string | null) | undefined; version?: (number | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { promptName: string } } & {
              query: { label?: (string | null) | undefined; version?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { promptName: string } } & {
              query: { label?: (string | null) | undefined; version?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { promptName: string } } & {
              query: { label?: (string | null) | undefined; version?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { promptName: string } } & {
              query: { label?: (string | null) | undefined; version?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { promptName: string } } & {
              query: { label?: (string | null) | undefined; version?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/v2/prompts': {
      $get:
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                label?: (string | null) | undefined
                tag?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
                fromUpdatedAt?: (string | null) | undefined
                toUpdatedAt?: (string | null) | undefined
                filter?: (string | null) | undefined
              }
            }
            output: PromptMetaListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                label?: (string | null) | undefined
                tag?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
                fromUpdatedAt?: (string | null) | undefined
                toUpdatedAt?: (string | null) | undefined
                filter?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                label?: (string | null) | undefined
                tag?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
                fromUpdatedAt?: (string | null) | undefined
                toUpdatedAt?: (string | null) | undefined
                filter?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                label?: (string | null) | undefined
                tag?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
                fromUpdatedAt?: (string | null) | undefined
                toUpdatedAt?: (string | null) | undefined
                filter?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                label?: (string | null) | undefined
                tag?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
                fromUpdatedAt?: (string | null) | undefined
                toUpdatedAt?: (string | null) | undefined
                filter?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                label?: (string | null) | undefined
                tag?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
                fromUpdatedAt?: (string | null) | undefined
                toUpdatedAt?: (string | null) | undefined
                filter?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $post:
        | {
            input: { json: CreatePromptRequest }
            output: Prompt
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreatePromptRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreatePromptRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreatePromptRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreatePromptRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreatePromptRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/scim/ServiceProviderConfig': {
      $get:
        | { input: {}; output: ServiceProviderConfig; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 400 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 403 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 404 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 405 }
    }
  } & {
    '/api/public/scim/ResourceTypes': {
      $get:
        | { input: {}; output: ResourceTypesResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 400 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 403 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 404 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 405 }
    }
  } & {
    '/api/public/scim/Schemas': {
      $get:
        | { input: {}; output: SchemasResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 400 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 403 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 404 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 405 }
    }
  } & {
    '/api/public/scim/Users': {
      $get:
        | {
            input: {
              query: {
                filter?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                count?: (number | null) | undefined
              }
            }
            output: ScimUsersListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                count?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                count?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                count?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                filter?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                count?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                filter?: (string | null) | undefined
                startIndex?: (number | null) | undefined
                count?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $post:
        | {
            input: {
              json: {
                userName: string
                name: ScimName
                emails?: (ScimEmail[] | null) | undefined
                active?: (boolean | null) | undefined
                password?: (string | null) | undefined
              }
            }
            output: ScimUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                userName: string
                name: ScimName
                emails?: (ScimEmail[] | null) | undefined
                active?: (boolean | null) | undefined
                password?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                userName: string
                name: ScimName
                emails?: (ScimEmail[] | null) | undefined
                active?: (boolean | null) | undefined
                password?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                userName: string
                name: ScimName
                emails?: (ScimEmail[] | null) | undefined
                active?: (boolean | null) | undefined
                password?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                userName: string
                name: ScimName
                emails?: (ScimEmail[] | null) | undefined
                active?: (boolean | null) | undefined
                password?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                userName: string
                name: ScimName
                emails?: (ScimEmail[] | null) | undefined
                active?: (boolean | null) | undefined
                password?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/scim/Users/:userId': {
      $get:
        | {
            input: { param: { userId: string } }
            output: ScimUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $delete:
        | {
            input: { param: { userId: string } }
            output: EmptyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/score-configs': {
      $post:
        | {
            input: { json: CreateScoreConfigRequest }
            output: ScoreConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateScoreConfigRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateScoreConfigRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateScoreConfigRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateScoreConfigRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateScoreConfigRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $get:
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: ScoreConfigs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/score-configs/:configId': {
      $get:
        | {
            input: { param: { configId: string } }
            output: ScoreConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { configId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { configId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { configId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { configId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { configId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $patch:
        | {
            input: { param: { configId: string } } & { json: UpdateScoreConfigRequest }
            output: ScoreConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { configId: string } } & { json: UpdateScoreConfigRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { configId: string } } & { json: UpdateScoreConfigRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { configId: string } } & { json: UpdateScoreConfigRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { configId: string } } & { json: UpdateScoreConfigRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { configId: string } } & { json: UpdateScoreConfigRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/scores': {
      $post:
        | {
            input: { json: CreateScoresRequest }
            output: CreateScoresResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateScoresRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateScoresRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateScoresRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateScoresRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateScoresRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/scores/:scoreId': {
      $delete:
        | { input: { param: { scoreId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { scoreId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { scoreId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { scoreId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { scoreId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { scoreId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/v3/scores': {
      $get:
        | {
            input: {
              query: {
                limit?: (number | null) | undefined
                cursor?: (string | null) | undefined
                fields?: (string | null) | undefined
                id?: (string | null) | undefined
                name?: (string | null) | undefined
                source?: (string | null) | undefined
                dataType?: (string | null) | undefined
                environment?: (string | null) | undefined
                configId?: (string | null) | undefined
                queueId?: (string | null) | undefined
                authorUserId?: (string | null) | undefined
                value?: (string | null) | undefined
                valueMin?: (number | null) | undefined
                valueMax?: (number | null) | undefined
                traceId?: (string | null) | undefined
                sessionId?: (string | null) | undefined
                observationId?: (string | null) | undefined
                experimentId?: (string | null) | undefined
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
              }
            }
            output: GetScoresV3Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: (number | null) | undefined
                cursor?: (string | null) | undefined
                fields?: (string | null) | undefined
                id?: (string | null) | undefined
                name?: (string | null) | undefined
                source?: (string | null) | undefined
                dataType?: (string | null) | undefined
                environment?: (string | null) | undefined
                configId?: (string | null) | undefined
                queueId?: (string | null) | undefined
                authorUserId?: (string | null) | undefined
                value?: (string | null) | undefined
                valueMin?: (number | null) | undefined
                valueMax?: (number | null) | undefined
                traceId?: (string | null) | undefined
                sessionId?: (string | null) | undefined
                observationId?: (string | null) | undefined
                experimentId?: (string | null) | undefined
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: (number | null) | undefined
                cursor?: (string | null) | undefined
                fields?: (string | null) | undefined
                id?: (string | null) | undefined
                name?: (string | null) | undefined
                source?: (string | null) | undefined
                dataType?: (string | null) | undefined
                environment?: (string | null) | undefined
                configId?: (string | null) | undefined
                queueId?: (string | null) | undefined
                authorUserId?: (string | null) | undefined
                value?: (string | null) | undefined
                valueMin?: (number | null) | undefined
                valueMax?: (number | null) | undefined
                traceId?: (string | null) | undefined
                sessionId?: (string | null) | undefined
                observationId?: (string | null) | undefined
                experimentId?: (string | null) | undefined
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: (number | null) | undefined
                cursor?: (string | null) | undefined
                fields?: (string | null) | undefined
                id?: (string | null) | undefined
                name?: (string | null) | undefined
                source?: (string | null) | undefined
                dataType?: (string | null) | undefined
                environment?: (string | null) | undefined
                configId?: (string | null) | undefined
                queueId?: (string | null) | undefined
                authorUserId?: (string | null) | undefined
                value?: (string | null) | undefined
                valueMin?: (number | null) | undefined
                valueMax?: (number | null) | undefined
                traceId?: (string | null) | undefined
                sessionId?: (string | null) | undefined
                observationId?: (string | null) | undefined
                experimentId?: (string | null) | undefined
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: (number | null) | undefined
                cursor?: (string | null) | undefined
                fields?: (string | null) | undefined
                id?: (string | null) | undefined
                name?: (string | null) | undefined
                source?: (string | null) | undefined
                dataType?: (string | null) | undefined
                environment?: (string | null) | undefined
                configId?: (string | null) | undefined
                queueId?: (string | null) | undefined
                authorUserId?: (string | null) | undefined
                value?: (string | null) | undefined
                valueMin?: (number | null) | undefined
                valueMax?: (number | null) | undefined
                traceId?: (string | null) | undefined
                sessionId?: (string | null) | undefined
                observationId?: (string | null) | undefined
                experimentId?: (string | null) | undefined
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: (number | null) | undefined
                cursor?: (string | null) | undefined
                fields?: (string | null) | undefined
                id?: (string | null) | undefined
                name?: (string | null) | undefined
                source?: (string | null) | undefined
                dataType?: (string | null) | undefined
                environment?: (string | null) | undefined
                configId?: (string | null) | undefined
                queueId?: (string | null) | undefined
                authorUserId?: (string | null) | undefined
                value?: (string | null) | undefined
                valueMin?: (number | null) | undefined
                valueMax?: (number | null) | undefined
                traceId?: (string | null) | undefined
                sessionId?: (string | null) | undefined
                observationId?: (string | null) | undefined
                experimentId?: (string | null) | undefined
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/skills': {
      $get:
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                search?: (string | null) | undefined
                tag?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
                fromUpdatedAt?: (string | null) | undefined
                toUpdatedAt?: (string | null) | undefined
              }
            }
            output: SkillMetaListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                search?: (string | null) | undefined
                tag?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
                fromUpdatedAt?: (string | null) | undefined
                toUpdatedAt?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                search?: (string | null) | undefined
                tag?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
                fromUpdatedAt?: (string | null) | undefined
                toUpdatedAt?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                search?: (string | null) | undefined
                tag?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
                fromUpdatedAt?: (string | null) | undefined
                toUpdatedAt?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                search?: (string | null) | undefined
                tag?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
                fromUpdatedAt?: (string | null) | undefined
                toUpdatedAt?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                name?: (string | null) | undefined
                search?: (string | null) | undefined
                tag?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
                fromUpdatedAt?: (string | null) | undefined
                toUpdatedAt?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $post:
        | {
            input: { json: CreateSkillVersionRequest }
            output: SkillVersion
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateSkillVersionRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateSkillVersionRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateSkillVersionRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateSkillVersionRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateSkillVersionRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/skills/:skillName': {
      $get:
        | {
            input: { param: { skillName: string } } & {
              query: {
                version?: (number | null) | undefined
                label?: (string | null) | undefined
                includeContent?: (boolean | null) | undefined
              }
            }
            output: SkillVersion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { skillName: string } } & {
              query: {
                version?: (number | null) | undefined
                label?: (string | null) | undefined
                includeContent?: (boolean | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { skillName: string } } & {
              query: {
                version?: (number | null) | undefined
                label?: (string | null) | undefined
                includeContent?: (boolean | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { skillName: string } } & {
              query: {
                version?: (number | null) | undefined
                label?: (string | null) | undefined
                includeContent?: (boolean | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { skillName: string } } & {
              query: {
                version?: (number | null) | undefined
                label?: (string | null) | undefined
                includeContent?: (boolean | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { skillName: string } } & {
              query: {
                version?: (number | null) | undefined
                label?: (string | null) | undefined
                includeContent?: (boolean | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $patch:
        | {
            input: { param: { skillName: string } } & { json: UpdateSkillRequest }
            output: SkillVersion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { skillName: string } } & { json: UpdateSkillRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { skillName: string } } & { json: UpdateSkillRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { skillName: string } } & { json: UpdateSkillRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { skillName: string } } & { json: UpdateSkillRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { skillName: string } } & { json: UpdateSkillRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/skills/files/content': {
      $get:
        | {
            input: { query: { sha256Hashes: string } }
            output: SkillFileContentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { sha256Hashes: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { sha256Hashes: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { sha256Hashes: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { sha256Hashes: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { sha256Hashes: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/skills/:skillName/versions/:skillVersion': {
      $patch:
        | {
            input: { param: { skillName: string; skillVersion: number } } & {
              json: UpdateSkillLabelsRequest
            }
            output: SkillVersion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { skillName: string; skillVersion: number } } & {
              json: UpdateSkillLabelsRequest
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { skillName: string; skillVersion: number } } & {
              json: UpdateSkillLabelsRequest
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { skillName: string; skillVersion: number } } & {
              json: UpdateSkillLabelsRequest
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { skillName: string; skillVersion: number } } & {
              json: UpdateSkillLabelsRequest
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { skillName: string; skillVersion: number } } & {
              json: UpdateSkillLabelsRequest
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
      $delete:
        | {
            input: { param: { skillName: string; skillVersion: number } }
            output: DeleteSkillVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { skillName: string; skillVersion: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { skillName: string; skillVersion: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { skillName: string; skillVersion: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { skillName: string; skillVersion: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { skillName: string; skillVersion: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/traces/:traceId': {
      $delete:
        | {
            input: { param: { traceId: string } }
            output: DeleteTraceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { traceId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { traceId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { traceId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { traceId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { traceId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/traces': {
      $delete:
        | {
            input: { json: { traceIds: string[] } }
            output: DeleteTraceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { traceIds: string[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { traceIds: string[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { traceIds: string[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { traceIds: string[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { traceIds: string[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/api/public/unstable/organizations/billable-units': {
      $get:
        | {
            input: {
              query: {
                fromTimestamp: string
                toTimestamp: string
                granularity?: UnstableBillableUnitsGranularity | undefined
              }
            }
            output: UnstableBillableUnitsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fromTimestamp: string
                toTimestamp: string
                granularity?: UnstableBillableUnitsGranularity | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fromTimestamp: string
                toTimestamp: string
                granularity?: UnstableBillableUnitsGranularity | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                fromTimestamp: string
                toTimestamp: string
                granularity?: UnstableBillableUnitsGranularity | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                fromTimestamp: string
                toTimestamp: string
                granularity?: UnstableBillableUnitsGranularity | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                fromTimestamp: string
                toTimestamp: string
                granularity?: UnstableBillableUnitsGranularity | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                fromTimestamp: string
                toTimestamp: string
                granularity?: UnstableBillableUnitsGranularity | undefined
              }
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                fromTimestamp: string
                toTimestamp: string
                granularity?: UnstableBillableUnitsGranularity | undefined
              }
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/unstable/dashboard-widgets': {
      $get:
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: UnstableDashboardWidgetList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: UnstableCreateDashboardWidgetRequest }
            output: UnstableDashboardWidget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UnstableCreateDashboardWidgetRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UnstableCreateDashboardWidgetRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UnstableCreateDashboardWidgetRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: UnstableCreateDashboardWidgetRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: UnstableCreateDashboardWidgetRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: UnstableCreateDashboardWidgetRequest }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: UnstableCreateDashboardWidgetRequest }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/unstable/dashboard-widgets/:widgetId': {
      $get:
        | {
            input: { param: { widgetId: string } }
            output: UnstableDashboardWidget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { widgetId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { widgetId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { widgetId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { widgetId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { widgetId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { widgetId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { widgetId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { widgetId: string } } & { json: UnstableUpdateDashboardWidgetRequest }
            output: UnstableDashboardWidget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { widgetId: string } } & { json: UnstableUpdateDashboardWidgetRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { widgetId: string } } & { json: UnstableUpdateDashboardWidgetRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { widgetId: string } } & { json: UnstableUpdateDashboardWidgetRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { widgetId: string } } & { json: UnstableUpdateDashboardWidgetRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { widgetId: string } } & { json: UnstableUpdateDashboardWidgetRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { widgetId: string } } & { json: UnstableUpdateDashboardWidgetRequest }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { widgetId: string } } & { json: UnstableUpdateDashboardWidgetRequest }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { widgetId: string } }
            output: UnstableDeleteDashboardWidgetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { widgetId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { widgetId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { widgetId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { widgetId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { widgetId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { widgetId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { widgetId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { widgetId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/unstable/dashboards': {
      $get:
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: UnstableDashboardList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: { page?: (number | null) | undefined; limit?: (number | null) | undefined }
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: UnstableCreateDashboardRequest }
            output: UnstableDashboard
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UnstableCreateDashboardRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UnstableCreateDashboardRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UnstableCreateDashboardRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: UnstableCreateDashboardRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: UnstableCreateDashboardRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: UnstableCreateDashboardRequest }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: UnstableCreateDashboardRequest }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/unstable/dashboards/:dashboardId': {
      $get:
        | {
            input: { param: { dashboardId: string } }
            output: UnstableDashboard
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dashboardId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dashboardId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dashboardId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dashboardId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { dashboardId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { dashboardId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { dashboardId: string } } & { json: UnstableUpdateDashboardRequest }
            output: UnstableDashboard
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardId: string } } & { json: UnstableUpdateDashboardRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dashboardId: string } } & { json: UnstableUpdateDashboardRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dashboardId: string } } & { json: UnstableUpdateDashboardRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dashboardId: string } } & { json: UnstableUpdateDashboardRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dashboardId: string } } & { json: UnstableUpdateDashboardRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { dashboardId: string } } & { json: UnstableUpdateDashboardRequest }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { dashboardId: string } } & { json: UnstableUpdateDashboardRequest }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { dashboardId: string } }
            output: UnstableDeleteDashboardResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dashboardId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dashboardId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dashboardId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dashboardId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { dashboardId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { dashboardId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/unstable/dashboards/:dashboardId/placements': {
      $post:
        | {
            input: { param: { dashboardId: string } } & {
              json: UnstableCreateDashboardPlacementRequest
            }
            output: UnstableDashboardPlacement
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardId: string } } & {
              json: UnstableCreateDashboardPlacementRequest
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dashboardId: string } } & {
              json: UnstableCreateDashboardPlacementRequest
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dashboardId: string } } & {
              json: UnstableCreateDashboardPlacementRequest
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dashboardId: string } } & {
              json: UnstableCreateDashboardPlacementRequest
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dashboardId: string } } & {
              json: UnstableCreateDashboardPlacementRequest
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { dashboardId: string } } & {
              json: UnstableCreateDashboardPlacementRequest
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dashboardId: string } } & {
              json: UnstableCreateDashboardPlacementRequest
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { dashboardId: string } } & {
              json: UnstableCreateDashboardPlacementRequest
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/unstable/dashboards/:dashboardId/placements/:placementId': {
      $patch:
        | {
            input: { param: { dashboardId: string; placementId: string } } & {
              json: UnstableUpdateDashboardPlacementRequest
            }
            output: UnstableDashboardPlacement
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardId: string; placementId: string } } & {
              json: UnstableUpdateDashboardPlacementRequest
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dashboardId: string; placementId: string } } & {
              json: UnstableUpdateDashboardPlacementRequest
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dashboardId: string; placementId: string } } & {
              json: UnstableUpdateDashboardPlacementRequest
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dashboardId: string; placementId: string } } & {
              json: UnstableUpdateDashboardPlacementRequest
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dashboardId: string; placementId: string } } & {
              json: UnstableUpdateDashboardPlacementRequest
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { dashboardId: string; placementId: string } } & {
              json: UnstableUpdateDashboardPlacementRequest
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { dashboardId: string; placementId: string } } & {
              json: UnstableUpdateDashboardPlacementRequest
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { dashboardId: string; placementId: string } }
            output: UnstableDeleteDashboardPlacementResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardId: string; placementId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dashboardId: string; placementId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dashboardId: string; placementId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dashboardId: string; placementId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dashboardId: string; placementId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { dashboardId: string; placementId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { dashboardId: string; placementId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/unstable/topic-facets': {
      $get:
        | {
            input: {
              query: {
                filter?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: UnstableTopicFacetList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                filter?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                filter?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                filter?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                filter?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/unstable/topic-facets/:facetId': {
      $get:
        | {
            input: { param: { facetId: string } }
            output: UnstableTopicFacet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { facetId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { facetId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { facetId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { facetId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { facetId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { facetId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { facetId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/unstable/topics': {
      $get:
        | {
            input: {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
                filter?: (string | null) | undefined
                orderBy?: UnstableTopicsOrderBy | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: UnstableTopicList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
                filter?: (string | null) | undefined
                orderBy?: UnstableTopicsOrderBy | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
                filter?: (string | null) | undefined
                orderBy?: UnstableTopicsOrderBy | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
                filter?: (string | null) | undefined
                orderBy?: UnstableTopicsOrderBy | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
                filter?: (string | null) | undefined
                orderBy?: UnstableTopicsOrderBy | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
                filter?: (string | null) | undefined
                orderBy?: UnstableTopicsOrderBy | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
                filter?: (string | null) | undefined
                orderBy?: UnstableTopicsOrderBy | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
                filter?: (string | null) | undefined
                orderBy?: UnstableTopicsOrderBy | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/unstable/topics/:topicId': {
      $get:
        | {
            input: { param: { topicId: string } } & {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
              }
            }
            output: UnstableTopicWithStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { topicId: string } } & {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { topicId: string } } & {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { topicId: string } } & {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { topicId: string } } & {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { topicId: string } } & {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { topicId: string } } & {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
              }
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { topicId: string } } & {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
              }
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/unstable/topic-rules': {
      $get:
        | {
            input: {
              query: {
                filter?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: UnstableTopicRuleList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                filter?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                filter?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                filter?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                filter?: (string | null) | undefined
                page?: (number | null) | undefined
                limit?: (number | null) | undefined
              }
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/unstable/topic-rules/:ruleId': {
      $get:
        | {
            input: { param: { ruleId: string } }
            output: UnstableTopicRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ruleId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ruleId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ruleId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ruleId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ruleId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { ruleId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { ruleId: string } }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/unstable/topic-summaries': {
      $get:
        | {
            input: {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
                filter?: (string | null) | undefined
                truncateSummaries?: (boolean | null) | undefined
                orderBy?: UnstableTopicResultsOrderBy | undefined
                limit?: (number | null) | undefined
                cursor?: (string | null) | undefined
              }
            }
            output: UnstableTopicSummaryList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
                filter?: (string | null) | undefined
                truncateSummaries?: (boolean | null) | undefined
                orderBy?: UnstableTopicResultsOrderBy | undefined
                limit?: (number | null) | undefined
                cursor?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
                filter?: (string | null) | undefined
                truncateSummaries?: (boolean | null) | undefined
                orderBy?: UnstableTopicResultsOrderBy | undefined
                limit?: (number | null) | undefined
                cursor?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
                filter?: (string | null) | undefined
                truncateSummaries?: (boolean | null) | undefined
                orderBy?: UnstableTopicResultsOrderBy | undefined
                limit?: (number | null) | undefined
                cursor?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
                filter?: (string | null) | undefined
                truncateSummaries?: (boolean | null) | undefined
                orderBy?: UnstableTopicResultsOrderBy | undefined
                limit?: (number | null) | undefined
                cursor?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
                filter?: (string | null) | undefined
                truncateSummaries?: (boolean | null) | undefined
                orderBy?: UnstableTopicResultsOrderBy | undefined
                limit?: (number | null) | undefined
                cursor?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
                filter?: (string | null) | undefined
                truncateSummaries?: (boolean | null) | undefined
                orderBy?: UnstableTopicResultsOrderBy | undefined
                limit?: (number | null) | undefined
                cursor?: (string | null) | undefined
              }
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
                filter?: (string | null) | undefined
                truncateSummaries?: (boolean | null) | undefined
                orderBy?: UnstableTopicResultsOrderBy | undefined
                limit?: (number | null) | undefined
                cursor?: (string | null) | undefined
              }
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/public/unstable/topic-assignments': {
      $get:
        | {
            input: {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
                filter?: (string | null) | undefined
                orderBy?: UnstableTopicResultsOrderBy | undefined
                limit?: (number | null) | undefined
                cursor?: (string | null) | undefined
              }
            }
            output: UnstableTopicAssignmentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
                filter?: (string | null) | undefined
                orderBy?: UnstableTopicResultsOrderBy | undefined
                limit?: (number | null) | undefined
                cursor?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
                filter?: (string | null) | undefined
                orderBy?: UnstableTopicResultsOrderBy | undefined
                limit?: (number | null) | undefined
                cursor?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
                filter?: (string | null) | undefined
                orderBy?: UnstableTopicResultsOrderBy | undefined
                limit?: (number | null) | undefined
                cursor?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
                filter?: (string | null) | undefined
                orderBy?: UnstableTopicResultsOrderBy | undefined
                limit?: (number | null) | undefined
                cursor?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
                filter?: (string | null) | undefined
                orderBy?: UnstableTopicResultsOrderBy | undefined
                limit?: (number | null) | undefined
                cursor?: (string | null) | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
                filter?: (string | null) | undefined
                orderBy?: UnstableTopicResultsOrderBy | undefined
                limit?: (number | null) | undefined
                cursor?: (string | null) | undefined
              }
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                fromTimestamp?: (string | null) | undefined
                toTimestamp?: (string | null) | undefined
                filter?: (string | null) | undefined
                orderBy?: UnstableTopicResultsOrderBy | undefined
                limit?: (number | null) | undefined
                cursor?: (string | null) | undefined
              }
            }
            output: UnstablePublicApiError
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
