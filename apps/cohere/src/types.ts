type ChatRole = 'CHATBOT' | 'SYSTEM' | 'USER' | 'TOOL'
type ToolCall = { name: string; parameters: { [x: string]: unknown } }
type ChatMessage = { role: ChatRole; message: string; tool_calls?: ToolCall[] | undefined }
type ToolResult = { call: ToolCall; outputs: { [x: string]: unknown }[] }
type ChatToolMessage = { role: ChatRole; tool_results?: ToolResult[] | undefined }
type Message = ChatMessage | ChatToolMessage
type ChatConnector = {
  id: string
  user_access_token?: string | undefined
  continue_on_failure?: boolean | undefined
  options?: { [x: string]: unknown } | undefined
}
type ChatDocument = { id?: string | undefined }
type Tool = {
  name: string
  description: string
  parameter_definitions?:
    | {
        [x: string]: {
          description?: string | undefined
          type: string
          required?: boolean | undefined
        }
      }
    | undefined
}
type ResponseFormatType = 'text' | 'json_object'
type ChatTextResponseFormat = { type: ResponseFormatType }
type JSONResponseFormat = {
  type: ResponseFormatType
  schema?: { [x: string]: unknown } | undefined
}
type ResponseFormat = ChatTextResponseFormat | JSONResponseFormat
type ChatCitation = {
  start: number
  end: number
  text: string
  document_ids: string[]
  type?: 'TEXT_CONTENT' | 'PLAN' | undefined
}
type ChatSearchQuery = { text: string; generation_id: string }
type ChatSearchResultConnector = { id: string }
type ChatSearchResult = {
  search_query?: ChatSearchQuery | undefined
  connector: ChatSearchResultConnector
  document_ids: string[]
  error_message?: string | undefined
  continue_on_failure?: boolean | undefined
}
type FinishReason =
  | 'COMPLETE'
  | 'STOP_SEQUENCE'
  | 'ERROR'
  | 'ERROR_TOXIC'
  | 'ERROR_LIMIT'
  | 'USER_CANCEL'
  | 'MAX_TOKENS'
  | 'TIMEOUT'
type ApiMeta = {
  api_version?:
    | {
        version: string
        is_deprecated?: boolean | undefined
        is_experimental?: boolean | undefined
      }
    | undefined
  billed_units?:
    | {
        images?: number | undefined
        input_tokens?: number | undefined
        image_tokens?: number | undefined
        text_tokens?: number | undefined
        output_tokens?: number | undefined
        search_units?: number | undefined
        classifications?: number | undefined
        pages?: number | undefined
      }
    | undefined
  tokens?: { input_tokens?: number | undefined; output_tokens?: number | undefined } | undefined
  cached_tokens?: number | undefined
  warnings?: string[] | undefined
}
type NonStreamedChatResponse = {
  text: string
  generation_id?: string | undefined
  response_id?: string | undefined
  citations?: ChatCitation[] | undefined
  documents?: ChatDocument[] | undefined
  is_search_required?: boolean | undefined
  search_queries?: ChatSearchQuery[] | undefined
  search_results?: ChatSearchResult[] | undefined
  finish_reason?: FinishReason | undefined
  tool_calls?: ToolCall[] | undefined
  chat_history?: Message[] | undefined
  meta?: ApiMeta | undefined
}
type ChatStreamStartEvent = {
  event_type:
    | 'stream-start'
    | 'search-queries-generation'
    | 'search-results'
    | 'text-generation'
    | 'citation-generation'
    | 'stream-end'
    | 'debug'
  generation_id: string
}
type ChatSearchQueriesGenerationEvent = {
  event_type:
    | 'stream-start'
    | 'search-queries-generation'
    | 'search-results'
    | 'text-generation'
    | 'citation-generation'
    | 'stream-end'
    | 'debug'
  search_queries: ChatSearchQuery[]
}
type ChatSearchResultsEvent = {
  event_type:
    | 'stream-start'
    | 'search-queries-generation'
    | 'search-results'
    | 'text-generation'
    | 'citation-generation'
    | 'stream-end'
    | 'debug'
  search_results?: ChatSearchResult[] | undefined
  documents?: ChatDocument[] | undefined
}
type ChatTextGenerationEvent = {
  event_type:
    | 'stream-start'
    | 'search-queries-generation'
    | 'search-results'
    | 'text-generation'
    | 'citation-generation'
    | 'stream-end'
    | 'debug'
  text: string
}
type ChatCitationGenerationEvent = {
  event_type:
    | 'stream-start'
    | 'search-queries-generation'
    | 'search-results'
    | 'text-generation'
    | 'citation-generation'
    | 'stream-end'
    | 'debug'
  citations: ChatCitation[]
}
type ChatToolCallsGenerationEvent = {
  event_type:
    | 'stream-start'
    | 'search-queries-generation'
    | 'search-results'
    | 'text-generation'
    | 'citation-generation'
    | 'stream-end'
    | 'debug'
  text?: string | undefined
  tool_calls: ToolCall[]
}
type ChatStreamEndEvent = {
  event_type:
    | 'stream-start'
    | 'search-queries-generation'
    | 'search-results'
    | 'text-generation'
    | 'citation-generation'
    | 'stream-end'
    | 'debug'
  finish_reason: 'COMPLETE' | 'ERROR_LIMIT' | 'MAX_TOKENS' | 'ERROR' | 'ERROR_TOXIC'
  response: NonStreamedChatResponse
}
type ToolCallDelta = {
  name?: string | undefined
  index?: number | undefined
  parameters?: string | undefined
  text?: string | undefined
}
type ChatToolCallsChunkEvent = {
  event_type:
    | 'stream-start'
    | 'search-queries-generation'
    | 'search-results'
    | 'text-generation'
    | 'citation-generation'
    | 'stream-end'
    | 'debug'
  tool_call_delta: ToolCallDelta
  text?: string | undefined
}
type ChatDebugEvent = {
  event_type:
    | 'stream-start'
    | 'search-queries-generation'
    | 'search-results'
    | 'text-generation'
    | 'citation-generation'
    | 'stream-end'
    | 'debug'
  prompt?: string | undefined
}
type StreamedChatResponse =
  | ChatStreamStartEvent
  | ChatSearchQueriesGenerationEvent
  | ChatSearchResultsEvent
  | ChatTextGenerationEvent
  | ChatCitationGenerationEvent
  | ChatToolCallsGenerationEvent
  | ChatStreamEndEvent
  | ChatToolCallsChunkEvent
  | ChatDebugEvent
type ChatTextContent = { type: 'text'; text: string }
type ContentType = 'text' | 'image_url'
type ImageUrl = { url: string; detail?: 'auto' | 'low' | 'high' | undefined }
type ImageContent = { type: ContentType; image_url: ImageUrl }
type Content = ChatTextContent | ImageContent
type UserMessageV2 = { role: 'user'; content: string | Content[] }
type ToolCallV2 = {
  id: string
  type: 'function'
  function?: { name?: string | undefined; arguments?: string | undefined } | undefined
}
type ChatThinkingContent = { type: 'thinking'; thinking: string }
type ChatToolSource = {
  id?: string | undefined
  tool_output?: { [x: string]: unknown } | undefined
}
type ChatDocumentSource = {
  id?: string | undefined
  document?: { [x: string]: unknown } | undefined
}
type Source = ChatToolSource | ChatDocumentSource
type CitationType = 'TEXT_CONTENT' | 'THINKING_CONTENT' | 'PLAN'
type Citation = {
  start?: number | undefined
  end?: number | undefined
  text?: string | undefined
  sources?: Source[] | undefined
  content_index?: number | undefined
  type?: CitationType | undefined
}
type AssistantMessageV2 = {
  role: 'assistant'
  tool_calls?: ToolCallV2[] | undefined
  tool_plan?: string | undefined
  content?: string | (ChatTextContent | ChatThinkingContent)[] | undefined
  citations?: Citation[] | undefined
}
type SystemMessageV2 = { role: 'system'; content: string | ChatTextContent[] }
type Document = { data: { [x: string]: unknown }; id?: string | undefined }
type DocumentContent = { type: 'document'; document: Document }
type ToolContent = ChatTextContent | DocumentContent
type ToolMessageV2 = { role: 'tool'; tool_call_id: string; content: string | ToolContent[] }
type ChatMessageV2 = UserMessageV2 | AssistantMessageV2 | SystemMessageV2 | ToolMessageV2
type ChatMessages = ChatMessageV2[]
type ToolV2 = {
  type: 'function'
  function?:
    | { name: string; description?: string | undefined; parameters: { [x: string]: unknown } }
    | undefined
}
type CitationOptions = { mode?: 'ENABLED' | 'DISABLED' | 'FAST' | 'ACCURATE' | 'OFF' | undefined }
type ResponseFormatTypeV2 = 'text' | 'json_object'
type ChatTextResponseFormatV2 = { type: ResponseFormatTypeV2 }
type JsonResponseFormatV2 = {
  type: ResponseFormatTypeV2
  json_schema?: { [x: string]: unknown } | undefined
}
type ResponseFormatV2 = ChatTextResponseFormatV2 | JsonResponseFormatV2
type Thinking = { type: 'enabled' | 'disabled'; token_budget?: number | undefined }
type ChatFinishReason =
  | 'COMPLETE'
  | 'STOP_SEQUENCE'
  | 'MAX_TOKENS'
  | 'TOOL_CALL'
  | 'ERROR'
  | 'TIMEOUT'
type AssistantMessageResponse = {
  role: 'assistant'
  tool_calls?: ToolCallV2[] | undefined
  tool_plan?: string | undefined
  content?: (ChatTextContent | ChatThinkingContent)[] | undefined
  citations?: Citation[] | undefined
}
type Usage = {
  billed_units?:
    | {
        input_tokens?: number | undefined
        output_tokens?: number | undefined
        search_units?: number | undefined
        classifications?: number | undefined
      }
    | undefined
  tokens?: { input_tokens?: number | undefined; output_tokens?: number | undefined } | undefined
  cached_tokens?: number | undefined
}
type LogprobItem = {
  text?: string | undefined
  token_ids: number[]
  logprobs?: number[] | undefined
}
type ChatResponseV2 = {
  id: string
  finish_reason: ChatFinishReason
  message: AssistantMessageResponse
  usage?: Usage | undefined
  logprobs?: LogprobItem[] | undefined
}
type ChatMessageStartEvent = {
  type:
    | 'message-start'
    | 'content-start'
    | 'content-delta'
    | 'content-end'
    | 'tool-call-start'
    | 'tool-call-delta'
    | 'tool-call-end'
    | 'tool-plan-delta'
    | 'citation-start'
    | 'citation-end'
    | 'message-end'
  id?: string | undefined
  delta?: { message?: { role?: 'assistant' | undefined } | undefined } | undefined
}
type ChatContentStartEvent = {
  type:
    | 'message-start'
    | 'content-start'
    | 'content-delta'
    | 'content-end'
    | 'tool-call-start'
    | 'tool-call-delta'
    | 'tool-call-end'
    | 'tool-plan-delta'
    | 'citation-start'
    | 'citation-end'
    | 'message-end'
  index?: number | undefined
  delta?:
    | {
        message?:
          | {
              content?:
                | {
                    thinking?: string | undefined
                    text?: string | undefined
                    type?: 'text' | 'thinking' | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type ChatContentDeltaEvent = {
  type:
    | 'message-start'
    | 'content-start'
    | 'content-delta'
    | 'content-end'
    | 'tool-call-start'
    | 'tool-call-delta'
    | 'tool-call-end'
    | 'tool-plan-delta'
    | 'citation-start'
    | 'citation-end'
    | 'message-end'
  index?: number | undefined
  delta?:
    | {
        message?:
          | { content?: { thinking?: string | undefined; text?: string | undefined } | undefined }
          | undefined
      }
    | undefined
  logprobs?: LogprobItem | undefined
}
type ChatContentEndEvent = {
  type:
    | 'message-start'
    | 'content-start'
    | 'content-delta'
    | 'content-end'
    | 'tool-call-start'
    | 'tool-call-delta'
    | 'tool-call-end'
    | 'tool-plan-delta'
    | 'citation-start'
    | 'citation-end'
    | 'message-end'
  index?: number | undefined
}
type ChatToolPlanDeltaEvent = {
  type:
    | 'message-start'
    | 'content-start'
    | 'content-delta'
    | 'content-end'
    | 'tool-call-start'
    | 'tool-call-delta'
    | 'tool-call-end'
    | 'tool-plan-delta'
    | 'citation-start'
    | 'citation-end'
    | 'message-end'
  delta?: { message?: { tool_plan?: string | undefined } | undefined } | undefined
}
type ChatToolCallStartEvent = {
  type:
    | 'message-start'
    | 'content-start'
    | 'content-delta'
    | 'content-end'
    | 'tool-call-start'
    | 'tool-call-delta'
    | 'tool-call-end'
    | 'tool-plan-delta'
    | 'citation-start'
    | 'citation-end'
    | 'message-end'
  index?: number | undefined
  delta?: { message?: { tool_calls?: ToolCallV2 | undefined } | undefined } | undefined
}
type ChatToolCallDeltaEvent = {
  type:
    | 'message-start'
    | 'content-start'
    | 'content-delta'
    | 'content-end'
    | 'tool-call-start'
    | 'tool-call-delta'
    | 'tool-call-end'
    | 'tool-plan-delta'
    | 'citation-start'
    | 'citation-end'
    | 'message-end'
  index?: number | undefined
  delta?:
    | {
        message?:
          | {
              tool_calls?: { function?: { arguments?: string | undefined } | undefined } | undefined
            }
          | undefined
      }
    | undefined
}
type ChatToolCallEndEvent = {
  type:
    | 'message-start'
    | 'content-start'
    | 'content-delta'
    | 'content-end'
    | 'tool-call-start'
    | 'tool-call-delta'
    | 'tool-call-end'
    | 'tool-plan-delta'
    | 'citation-start'
    | 'citation-end'
    | 'message-end'
  index?: number | undefined
}
type ChatMessageEndEvent = {
  type:
    | 'message-start'
    | 'content-start'
    | 'content-delta'
    | 'content-end'
    | 'tool-call-start'
    | 'tool-call-delta'
    | 'tool-call-end'
    | 'tool-plan-delta'
    | 'citation-start'
    | 'citation-end'
    | 'message-end'
  id?: string | undefined
  delta?:
    | {
        error?: string | undefined
        finish_reason?: ChatFinishReason | undefined
        usage?: Usage | undefined
      }
    | undefined
}
type StreamedChatResponseV2 =
  | ChatMessageStartEvent
  | ChatContentStartEvent
  | ChatContentDeltaEvent
  | ChatContentEndEvent
  | ChatToolPlanDeltaEvent
  | ChatToolCallStartEvent
  | ChatToolCallDeltaEvent
  | ChatToolCallEndEvent
  | ChatMessageEndEvent
  | ChatDebugEvent
type ParseDocument = { type: 'image_url'; image_url: string }
type ParseOutputFormat = 'blocks' | 'markdown'
type ParseTextBlock = { content: string }
type ParseTextContentBlock = { type: 'text'; text: ParseTextBlock }
type ParseImageCategory = 'other' | 'flowchart' | 'logo' | 'signature'
type ParseBoundingBox = {
  top_left_x: number
  top_left_y: number
  bottom_right_x: number
  bottom_right_y: number
}
type ParseBoundingBoxNormalized = {
  top_left_x: number
  top_left_y: number
  bottom_right_x: number
  bottom_right_y: number
}
type ParseImageBlock = {
  id: string
  description: string
  category: ParseImageCategory
  bounding_box: ParseBoundingBox
  bounding_box_normalized: ParseBoundingBoxNormalized
}
type ParseImageContentBlock = { type: 'image'; image: ParseImageBlock }
type ParseTableContentType = 'html'
type ParseTableBlock = {
  type: ParseTableContentType
  html: string
  title?: string | undefined
  description?: string | undefined
  bounding_box: ParseBoundingBox
  bounding_box_normalized: ParseBoundingBoxNormalized
}
type ParseTableContentBlock = { type: 'table'; table: ParseTableBlock }
type ParseBlock = ParseTextContentBlock | ParseImageContentBlock | ParseTableContentBlock
type ParseBlocksPageVariant = { index: number; type: 'blocks'; blocks: ParseBlock[] }
type ParseMarkdownPage = { content: string; images?: ParseImageBlock[] | undefined }
type ParseMarkdownPageVariant = { index: number; type: 'markdown'; markdown: ParseMarkdownPage }
type ParsePage = ParseBlocksPageVariant | ParseMarkdownPageVariant
type ParseResponse = {
  id: string
  pages: ParsePage[]
  meta?: ApiMeta | undefined
  finish_reason?: ChatFinishReason | undefined
}
type SingleGeneration = {
  id: string
  text: string
  index?: number | undefined
  likelihood?: number | undefined
  token_likelihoods?: { token: string; likelihood: number }[] | undefined
}
type Generation = {
  id: string
  prompt?: string | undefined
  generations: SingleGeneration[]
  meta?: ApiMeta | undefined
}
type GenerateStreamText = {
  event_type: 'text-generation' | 'stream-end' | 'stream-error'
  text: string
  index?: number | undefined
  is_finished: boolean
}
type SingleGenerationInStream = {
  id: string
  text: string
  index?: number | undefined
  finish_reason: FinishReason
}
type GenerateStreamEnd = {
  event_type: 'text-generation' | 'stream-end' | 'stream-error'
  is_finished: boolean
  finish_reason?: FinishReason | undefined
  response: {
    id: string
    prompt?: string | undefined
    generations?: SingleGenerationInStream[] | undefined
  }
}
type GenerateStreamError = {
  event_type: 'text-generation' | 'stream-end' | 'stream-error'
  index?: number | undefined
  is_finished: boolean
  finish_reason: FinishReason
  err: string
}
type GenerateStreamedResponse = GenerateStreamText | GenerateStreamEnd | GenerateStreamError
type EmbedInputType = 'search_document' | 'search_query' | 'classification' | 'clustering' | 'image'
type EmbeddingType = 'float' | 'int8' | 'uint8' | 'binary' | 'ubinary' | 'base64'
type Image = { width: number; height: number; format: string; bit_depth: number }
type EmbedFloatsResponse = {
  response_type?: 'embeddings_floats' | 'embeddings_by_type' | undefined
  id: string
  embeddings: number[][]
  texts: string[]
  images?: Image[] | undefined
  meta?: ApiMeta | undefined
}
type EmbedByTypeResponse = {
  response_type?: 'embeddings_floats' | 'embeddings_by_type' | undefined
  id: string
  embeddings: {
    float?: number[][] | undefined
    int8?: number[][] | undefined
    uint8?: number[][] | undefined
    binary?: number[][] | undefined
    ubinary?: number[][] | undefined
    base64?: string[] | undefined
  }
  texts?: string[] | undefined
  images?: Image[] | undefined
  meta?: ApiMeta | undefined
}
type EmbedContentType = 'text' | 'image_url'
type EmbedImageUrl = { url: string }
type EmbedImage = { type?: EmbedContentType | undefined; image_url?: EmbedImageUrl | undefined }
type EmbedText = { type?: EmbedContentType | undefined; text?: string | undefined }
type EmbedContent = EmbedImage | EmbedText
type EmbedInput = { content: EmbedContent[] }
type BatchStatus =
  | 'BATCH_STATUS_UNSPECIFIED'
  | 'BATCH_STATUS_QUEUED'
  | 'BATCH_STATUS_IN_PROGRESS'
  | 'BATCH_STATUS_CANCELING'
  | 'BATCH_STATUS_COMPLETED'
  | 'BATCH_STATUS_FAILED'
  | 'BATCH_STATUS_CANCELED'
type Batch = {
  id?: string | undefined
  name: string
  creator_id?: string | undefined
  org_id?: string | undefined
  status?: BatchStatus | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  input_dataset_id: string
  output_dataset_id?: string | undefined
  input_tokens?: string | undefined
  output_tokens?: string | undefined
  model: string
  num_records?: number | undefined
  num_successful_records?: number | undefined
  num_failed_records?: number | undefined
  status_reason?: string | undefined
}
type ListBatchesResponse = { batches?: Batch[] | undefined; next_page_token?: string | undefined }
type BatchError = { message?: string | undefined }
type CreateBatchResponse = { batch: Batch }
type GetBatchResponse = { batch: Batch }
type CancelBatchResponse = { [x: string]: unknown }
type CreateEmbedJobRequest = {
  model: string
  dataset_id: string
  input_type: EmbedInputType
  name?: string | undefined
  embedding_types?: EmbeddingType[] | undefined
  truncate?: 'START' | 'END' | undefined
}
type CreateEmbedJobResponse = { job_id: string; meta?: ApiMeta | undefined }
type EmbedJob = {
  job_id: string
  name?: string | undefined
  status: 'processing' | 'complete' | 'cancelling' | 'cancelled' | 'failed'
  created_at: string
  input_dataset_id: string
  output_dataset_id?: string | undefined
  model: string
  truncate: 'START' | 'END'
  meta?: ApiMeta | undefined
}
type ListEmbedJobResponse = { embed_jobs?: EmbedJob[] | undefined }
type RerankDocument = { text: string }
type RerankRelevantSpans = {
  mode: 'enabled' | 'disabled'
  threshold?: number | undefined
  max_spans?: number | undefined
}
type RerankRelevantSpanResponse = { start: number; end: number; score: number }
type ClassifyExample = { text?: string | undefined; label?: string | undefined }
type DatasetType =
  | 'embed-input'
  | 'embed-result'
  | 'cluster-result'
  | 'cluster-outliers'
  | 'reranker-finetune-input'
  | 'single-label-classification-finetune-input'
  | 'chat-finetune-input'
  | 'multi-label-classification-finetune-input'
  | 'batch-chat-input'
  | 'batch-openai-chat-input'
  | 'batch-embed-v2-input'
  | 'batch-chat-v2-input'
type DatasetValidationStatus =
  | 'unknown'
  | 'queued'
  | 'processing'
  | 'failed'
  | 'validated'
  | 'skipped'
type DatasetPart = {
  id: string
  name: string
  url?: string | undefined
  index?: number | undefined
  size_bytes?: number | undefined
  num_rows?: number | undefined
  original_url?: string | undefined
  samples?: string[] | undefined
}
type ParseInfo = { separator?: string | undefined; delimiter?: string | undefined }
type RerankerDataMetrics = {
  num_train_queries?: number | undefined
  num_train_relevant_passages?: number | undefined
  num_train_hard_negatives?: number | undefined
  num_eval_queries?: number | undefined
  num_eval_relevant_passages?: number | undefined
  num_eval_hard_negatives?: number | undefined
}
type ChatDataMetrics = {
  num_train_turns?: number | undefined
  num_eval_turns?: number | undefined
  preamble?: string | undefined
}
type LabelMetric = {
  total_examples?: number | undefined
  label?: string | undefined
  samples?: string[] | undefined
}
type ClassifyDataMetrics = { label_metrics?: LabelMetric[] | undefined }
type FinetuneDatasetMetrics = {
  trainable_token_count?: number | undefined
  total_examples?: number | undefined
  train_examples?: number | undefined
  train_size_bytes?: number | undefined
  eval_examples?: number | undefined
  eval_size_bytes?: number | undefined
  reranker_data_metrics?: RerankerDataMetrics | undefined
  chat_data_metrics?: ChatDataMetrics | undefined
  classify_data_metrics?: ClassifyDataMetrics | undefined
}
type Metrics = { finetune_dataset_metrics?: FinetuneDatasetMetrics | undefined }
type Dataset = {
  id: string
  name: string
  created_at: string
  updated_at: string
  dataset_type: DatasetType
  validation_status: DatasetValidationStatus
  validation_error?: string | undefined
  schema?: string | undefined
  required_fields?: string[] | undefined
  preserve_fields?: string[] | undefined
  dataset_parts?: DatasetPart[] | undefined
  validation_warnings?: string[] | undefined
  parse_info?: ParseInfo | undefined
  metrics?: Metrics | undefined
}
type ConnectorOAuth = {
  client_id?: string | undefined
  client_secret?: string | undefined
  authorize_url: string
  token_url: string
  scope?: string | undefined
}
type Connector = {
  id: string
  organization_id?: string | undefined
  name: string
  description?: string | undefined
  url?: string | undefined
  created_at: string
  updated_at: string
  excludes?: string[] | undefined
  auth_type?: string | undefined
  oauth?: ConnectorOAuth | undefined
  auth_status?: 'valid' | 'expired' | undefined
  active?: boolean | undefined
  continue_on_failure?: boolean | undefined
}
type ListConnectorsResponse = { connectors: Connector[]; total_count?: number | undefined }
type CreateConnectorOAuth = {
  client_id?: string | undefined
  client_secret?: string | undefined
  authorize_url?: string | undefined
  token_url?: string | undefined
  scope?: string | undefined
}
type AuthTokenType = 'bearer' | 'basic' | 'noscheme'
type CreateConnectorServiceAuth = { type: AuthTokenType; token: string }
type CreateConnectorRequest = {
  name: string
  description?: string | undefined
  url: string
  excludes?: string[] | undefined
  oauth?: CreateConnectorOAuth | undefined
  active?: boolean | undefined
  continue_on_failure?: boolean | undefined
  service_auth?: CreateConnectorServiceAuth | undefined
}
type CreateConnectorResponse = { connector: Connector }
type GetConnectorResponse = { connector: Connector }
type UpdateConnectorRequest = {
  name?: string | undefined
  url?: string | undefined
  excludes?: string[] | undefined
  oauth?: CreateConnectorOAuth | undefined
  active?: boolean | undefined
  continue_on_failure?: boolean | undefined
  service_auth?: CreateConnectorServiceAuth | undefined
}
type UpdateConnectorResponse = { connector: Connector }
type DeleteConnectorResponse = { [x: string]: unknown }
type OAuthAuthorizeResponse = { redirect_url?: string | undefined }
type CompatibleEndpoint =
  | 'chat'
  | 'embed'
  | 'classify'
  | 'summarize'
  | 'rerank'
  | 'rate'
  | 'generate'
type GetModelResponse = {
  name?: string | undefined
  is_deprecated?: boolean | undefined
  endpoints?: CompatibleEndpoint[] | undefined
  finetuned?: boolean | undefined
  context_length?: number | undefined
  tokenizer_url?: string | undefined
  default_endpoints?: CompatibleEndpoint[] | undefined
  features?: string[] | undefined
  sampling_defaults?:
    | {
        temperature?: number | undefined
        k?: number | undefined
        p?: number | undefined
        frequency_penalty?: number | undefined
        presence_penalty?: number | undefined
        max_tokens_per_doc?: number | undefined
      }
    | undefined
}
type ListModelsResponse = { models: GetModelResponse[]; next_page_token?: string | undefined }
type BaseType =
  | 'BASE_TYPE_UNSPECIFIED'
  | 'BASE_TYPE_GENERATIVE'
  | 'BASE_TYPE_CLASSIFICATION'
  | 'BASE_TYPE_RERANK'
  | 'BASE_TYPE_CHAT'
type Strategy = 'STRATEGY_UNSPECIFIED' | 'STRATEGY_VANILLA' | 'STRATEGY_TFEW'
type BaseModel = {
  name?: string | undefined
  version?: string | undefined
  base_type: BaseType
  strategy?: Strategy | undefined
}
type LoraTargetModules =
  | 'LORA_TARGET_MODULES_UNSPECIFIED'
  | 'LORA_TARGET_MODULES_QV'
  | 'LORA_TARGET_MODULES_QKVO'
  | 'LORA_TARGET_MODULES_QKVO_FFN'
type Hyperparameters = {
  early_stopping_patience?: number | undefined
  early_stopping_threshold?: number | undefined
  train_batch_size?: number | undefined
  train_epochs?: number | undefined
  learning_rate?: number | undefined
  lora_alpha?: number | undefined
  lora_rank?: number | undefined
  lora_target_modules?: LoraTargetModules | undefined
}
type WandbConfig = { project: string; api_key: string; entity?: string | undefined }
type Settings = {
  base_model: BaseModel
  dataset_id: string
  hyperparameters?: Hyperparameters | undefined
  multi_label?: boolean | undefined
  wandb?: WandbConfig | undefined
}
type Status =
  | 'STATUS_UNSPECIFIED'
  | 'STATUS_FINETUNING'
  | 'STATUS_DEPLOYING_API'
  | 'STATUS_READY'
  | 'STATUS_FAILED'
  | 'STATUS_DELETED'
  | 'STATUS_TEMPORARILY_OFFLINE'
  | 'STATUS_PAUSED'
  | 'STATUS_QUEUED'
type FinetunedModel = {
  id?: string | undefined
  name: string
  creator_id?: string | undefined
  organization_id?: string | undefined
  settings: Settings
  status?: Status | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  completed_at?: string | undefined
  last_used?: string | undefined
}
type ListFinetunedModelsResponse = {
  finetuned_models?: FinetunedModel[] | undefined
  next_page_token?: string | undefined
  total_size?: number | undefined
}
type Error = { message?: string | undefined }
type CreateFinetunedModelResponse = { finetuned_model?: FinetunedModel | undefined }
type UpdateFinetunedModelResponse = { finetuned_model?: FinetunedModel | undefined }
type GetFinetunedModelResponse = { finetuned_model?: FinetunedModel | undefined }
type DeleteFinetunedModelResponse = { [x: string]: unknown }
type Event = {
  user_id?: string | undefined
  status?: Status | undefined
  created_at?: string | undefined
}
type ListEventsResponse = {
  events?: Event[] | undefined
  next_page_token?: string | undefined
  total_size?: number | undefined
}
type TrainingStepMetrics = {
  created_at?: string | undefined
  step_number?: number | undefined
  metrics?: { [x: string]: number } | undefined
}
type ListTrainingStepMetricsResponse = {
  step_metrics?: TrainingStepMetrics[] | undefined
  next_page_token?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/chat': {
      $post:
        | {
            input: {
              header: {
                'X-Client-Name'?: string | undefined
                Accepts?: 'text/event-stream' | undefined
              }
            } & {
              json: {
                message: string
                model?: string | undefined
                stream?: boolean | undefined
                preamble?: string | undefined
                chat_history?: Message[] | undefined
                conversation_id?: string | undefined
                prompt_truncation?: 'OFF' | 'AUTO' | 'AUTO_PRESERVE_ORDER' | undefined
                connectors?: ChatConnector[] | undefined
                search_queries_only?: boolean | undefined
                documents?: ChatDocument[] | undefined
                citation_quality?: 'ENABLED' | 'DISABLED' | 'FAST' | 'ACCURATE' | 'OFF' | undefined
                temperature?: number | undefined
                max_tokens?: number | undefined
                max_input_tokens?: number | undefined
                k?: number | undefined
                p?: number | undefined
                seed?: number | undefined
                stop_sequences?: string[] | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                raw_prompting?: boolean | undefined
                tools?: Tool[] | undefined
                tool_results?: ToolResult[] | undefined
                force_single_step?: boolean | undefined
                response_format?: ResponseFormat | undefined
                safety_mode?: 'CONTEXTUAL' | 'STRICT' | 'NONE' | undefined
              }
            }
            output: NonStreamedChatResponse | StreamedChatResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Client-Name'?: string | undefined
                Accepts?: 'text/event-stream' | undefined
              }
            } & {
              json: {
                message: string
                model?: string | undefined
                stream?: boolean | undefined
                preamble?: string | undefined
                chat_history?: Message[] | undefined
                conversation_id?: string | undefined
                prompt_truncation?: 'OFF' | 'AUTO' | 'AUTO_PRESERVE_ORDER' | undefined
                connectors?: ChatConnector[] | undefined
                search_queries_only?: boolean | undefined
                documents?: ChatDocument[] | undefined
                citation_quality?: 'ENABLED' | 'DISABLED' | 'FAST' | 'ACCURATE' | 'OFF' | undefined
                temperature?: number | undefined
                max_tokens?: number | undefined
                max_input_tokens?: number | undefined
                k?: number | undefined
                p?: number | undefined
                seed?: number | undefined
                stop_sequences?: string[] | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                raw_prompting?: boolean | undefined
                tools?: Tool[] | undefined
                tool_results?: ToolResult[] | undefined
                force_single_step?: boolean | undefined
                response_format?: ResponseFormat | undefined
                safety_mode?: 'CONTEXTUAL' | 'STRICT' | 'NONE' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'X-Client-Name'?: string | undefined
                Accepts?: 'text/event-stream' | undefined
              }
            } & {
              json: {
                message: string
                model?: string | undefined
                stream?: boolean | undefined
                preamble?: string | undefined
                chat_history?: Message[] | undefined
                conversation_id?: string | undefined
                prompt_truncation?: 'OFF' | 'AUTO' | 'AUTO_PRESERVE_ORDER' | undefined
                connectors?: ChatConnector[] | undefined
                search_queries_only?: boolean | undefined
                documents?: ChatDocument[] | undefined
                citation_quality?: 'ENABLED' | 'DISABLED' | 'FAST' | 'ACCURATE' | 'OFF' | undefined
                temperature?: number | undefined
                max_tokens?: number | undefined
                max_input_tokens?: number | undefined
                k?: number | undefined
                p?: number | undefined
                seed?: number | undefined
                stop_sequences?: string[] | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                raw_prompting?: boolean | undefined
                tools?: Tool[] | undefined
                tool_results?: ToolResult[] | undefined
                force_single_step?: boolean | undefined
                response_format?: ResponseFormat | undefined
                safety_mode?: 'CONTEXTUAL' | 'STRICT' | 'NONE' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'X-Client-Name'?: string | undefined
                Accepts?: 'text/event-stream' | undefined
              }
            } & {
              json: {
                message: string
                model?: string | undefined
                stream?: boolean | undefined
                preamble?: string | undefined
                chat_history?: Message[] | undefined
                conversation_id?: string | undefined
                prompt_truncation?: 'OFF' | 'AUTO' | 'AUTO_PRESERVE_ORDER' | undefined
                connectors?: ChatConnector[] | undefined
                search_queries_only?: boolean | undefined
                documents?: ChatDocument[] | undefined
                citation_quality?: 'ENABLED' | 'DISABLED' | 'FAST' | 'ACCURATE' | 'OFF' | undefined
                temperature?: number | undefined
                max_tokens?: number | undefined
                max_input_tokens?: number | undefined
                k?: number | undefined
                p?: number | undefined
                seed?: number | undefined
                stop_sequences?: string[] | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                raw_prompting?: boolean | undefined
                tools?: Tool[] | undefined
                tool_results?: ToolResult[] | undefined
                force_single_step?: boolean | undefined
                response_format?: ResponseFormat | undefined
                safety_mode?: 'CONTEXTUAL' | 'STRICT' | 'NONE' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'X-Client-Name'?: string | undefined
                Accepts?: 'text/event-stream' | undefined
              }
            } & {
              json: {
                message: string
                model?: string | undefined
                stream?: boolean | undefined
                preamble?: string | undefined
                chat_history?: Message[] | undefined
                conversation_id?: string | undefined
                prompt_truncation?: 'OFF' | 'AUTO' | 'AUTO_PRESERVE_ORDER' | undefined
                connectors?: ChatConnector[] | undefined
                search_queries_only?: boolean | undefined
                documents?: ChatDocument[] | undefined
                citation_quality?: 'ENABLED' | 'DISABLED' | 'FAST' | 'ACCURATE' | 'OFF' | undefined
                temperature?: number | undefined
                max_tokens?: number | undefined
                max_input_tokens?: number | undefined
                k?: number | undefined
                p?: number | undefined
                seed?: number | undefined
                stop_sequences?: string[] | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                raw_prompting?: boolean | undefined
                tools?: Tool[] | undefined
                tool_results?: ToolResult[] | undefined
                force_single_step?: boolean | undefined
                response_format?: ResponseFormat | undefined
                safety_mode?: 'CONTEXTUAL' | 'STRICT' | 'NONE' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              header: {
                'X-Client-Name'?: string | undefined
                Accepts?: 'text/event-stream' | undefined
              }
            } & {
              json: {
                message: string
                model?: string | undefined
                stream?: boolean | undefined
                preamble?: string | undefined
                chat_history?: Message[] | undefined
                conversation_id?: string | undefined
                prompt_truncation?: 'OFF' | 'AUTO' | 'AUTO_PRESERVE_ORDER' | undefined
                connectors?: ChatConnector[] | undefined
                search_queries_only?: boolean | undefined
                documents?: ChatDocument[] | undefined
                citation_quality?: 'ENABLED' | 'DISABLED' | 'FAST' | 'ACCURATE' | 'OFF' | undefined
                temperature?: number | undefined
                max_tokens?: number | undefined
                max_input_tokens?: number | undefined
                k?: number | undefined
                p?: number | undefined
                seed?: number | undefined
                stop_sequences?: string[] | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                raw_prompting?: boolean | undefined
                tools?: Tool[] | undefined
                tool_results?: ToolResult[] | undefined
                force_single_step?: boolean | undefined
                response_format?: ResponseFormat | undefined
                safety_mode?: 'CONTEXTUAL' | 'STRICT' | 'NONE' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                'X-Client-Name'?: string | undefined
                Accepts?: 'text/event-stream' | undefined
              }
            } & {
              json: {
                message: string
                model?: string | undefined
                stream?: boolean | undefined
                preamble?: string | undefined
                chat_history?: Message[] | undefined
                conversation_id?: string | undefined
                prompt_truncation?: 'OFF' | 'AUTO' | 'AUTO_PRESERVE_ORDER' | undefined
                connectors?: ChatConnector[] | undefined
                search_queries_only?: boolean | undefined
                documents?: ChatDocument[] | undefined
                citation_quality?: 'ENABLED' | 'DISABLED' | 'FAST' | 'ACCURATE' | 'OFF' | undefined
                temperature?: number | undefined
                max_tokens?: number | undefined
                max_input_tokens?: number | undefined
                k?: number | undefined
                p?: number | undefined
                seed?: number | undefined
                stop_sequences?: string[] | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                raw_prompting?: boolean | undefined
                tools?: Tool[] | undefined
                tool_results?: ToolResult[] | undefined
                force_single_step?: boolean | undefined
                response_format?: ResponseFormat | undefined
                safety_mode?: 'CONTEXTUAL' | 'STRICT' | 'NONE' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              header: {
                'X-Client-Name'?: string | undefined
                Accepts?: 'text/event-stream' | undefined
              }
            } & {
              json: {
                message: string
                model?: string | undefined
                stream?: boolean | undefined
                preamble?: string | undefined
                chat_history?: Message[] | undefined
                conversation_id?: string | undefined
                prompt_truncation?: 'OFF' | 'AUTO' | 'AUTO_PRESERVE_ORDER' | undefined
                connectors?: ChatConnector[] | undefined
                search_queries_only?: boolean | undefined
                documents?: ChatDocument[] | undefined
                citation_quality?: 'ENABLED' | 'DISABLED' | 'FAST' | 'ACCURATE' | 'OFF' | undefined
                temperature?: number | undefined
                max_tokens?: number | undefined
                max_input_tokens?: number | undefined
                k?: number | undefined
                p?: number | undefined
                seed?: number | undefined
                stop_sequences?: string[] | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                raw_prompting?: boolean | undefined
                tools?: Tool[] | undefined
                tool_results?: ToolResult[] | undefined
                force_single_step?: boolean | undefined
                response_format?: ResponseFormat | undefined
                safety_mode?: 'CONTEXTUAL' | 'STRICT' | 'NONE' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'X-Client-Name'?: string | undefined
                Accepts?: 'text/event-stream' | undefined
              }
            } & {
              json: {
                message: string
                model?: string | undefined
                stream?: boolean | undefined
                preamble?: string | undefined
                chat_history?: Message[] | undefined
                conversation_id?: string | undefined
                prompt_truncation?: 'OFF' | 'AUTO' | 'AUTO_PRESERVE_ORDER' | undefined
                connectors?: ChatConnector[] | undefined
                search_queries_only?: boolean | undefined
                documents?: ChatDocument[] | undefined
                citation_quality?: 'ENABLED' | 'DISABLED' | 'FAST' | 'ACCURATE' | 'OFF' | undefined
                temperature?: number | undefined
                max_tokens?: number | undefined
                max_input_tokens?: number | undefined
                k?: number | undefined
                p?: number | undefined
                seed?: number | undefined
                stop_sequences?: string[] | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                raw_prompting?: boolean | undefined
                tools?: Tool[] | undefined
                tool_results?: ToolResult[] | undefined
                force_single_step?: boolean | undefined
                response_format?: ResponseFormat | undefined
                safety_mode?: 'CONTEXTUAL' | 'STRICT' | 'NONE' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: {
              header: {
                'X-Client-Name'?: string | undefined
                Accepts?: 'text/event-stream' | undefined
              }
            } & {
              json: {
                message: string
                model?: string | undefined
                stream?: boolean | undefined
                preamble?: string | undefined
                chat_history?: Message[] | undefined
                conversation_id?: string | undefined
                prompt_truncation?: 'OFF' | 'AUTO' | 'AUTO_PRESERVE_ORDER' | undefined
                connectors?: ChatConnector[] | undefined
                search_queries_only?: boolean | undefined
                documents?: ChatDocument[] | undefined
                citation_quality?: 'ENABLED' | 'DISABLED' | 'FAST' | 'ACCURATE' | 'OFF' | undefined
                temperature?: number | undefined
                max_tokens?: number | undefined
                max_input_tokens?: number | undefined
                k?: number | undefined
                p?: number | undefined
                seed?: number | undefined
                stop_sequences?: string[] | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                raw_prompting?: boolean | undefined
                tools?: Tool[] | undefined
                tool_results?: ToolResult[] | undefined
                force_single_step?: boolean | undefined
                response_format?: ResponseFormat | undefined
                safety_mode?: 'CONTEXTUAL' | 'STRICT' | 'NONE' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              header: {
                'X-Client-Name'?: string | undefined
                Accepts?: 'text/event-stream' | undefined
              }
            } & {
              json: {
                message: string
                model?: string | undefined
                stream?: boolean | undefined
                preamble?: string | undefined
                chat_history?: Message[] | undefined
                conversation_id?: string | undefined
                prompt_truncation?: 'OFF' | 'AUTO' | 'AUTO_PRESERVE_ORDER' | undefined
                connectors?: ChatConnector[] | undefined
                search_queries_only?: boolean | undefined
                documents?: ChatDocument[] | undefined
                citation_quality?: 'ENABLED' | 'DISABLED' | 'FAST' | 'ACCURATE' | 'OFF' | undefined
                temperature?: number | undefined
                max_tokens?: number | undefined
                max_input_tokens?: number | undefined
                k?: number | undefined
                p?: number | undefined
                seed?: number | undefined
                stop_sequences?: string[] | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                raw_prompting?: boolean | undefined
                tools?: Tool[] | undefined
                tool_results?: ToolResult[] | undefined
                force_single_step?: boolean | undefined
                response_format?: ResponseFormat | undefined
                safety_mode?: 'CONTEXTUAL' | 'STRICT' | 'NONE' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v2/chat': {
      $post:
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                stream?: boolean | undefined
                model: string
                messages: ChatMessages
                tools?: ToolV2[] | undefined
                strict_tools?: boolean | undefined
                documents?: (string | Document)[] | undefined
                citation_options?: CitationOptions | undefined
                response_format?: ResponseFormatV2 | undefined
                safety_mode?: 'CONTEXTUAL' | 'STRICT' | 'OFF' | undefined
                max_tokens?: number | undefined
                stop_sequences?: string[] | undefined
                temperature?: number | undefined
                seed?: number | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                k?: number | undefined
                p?: number | undefined
                logprobs?: boolean | undefined
                tool_choice?: 'REQUIRED' | 'NONE' | undefined
                thinking?: Thinking | undefined
                priority?: number | undefined
              }
            }
            output: ChatResponseV2 | StreamedChatResponseV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                stream?: boolean | undefined
                model: string
                messages: ChatMessages
                tools?: ToolV2[] | undefined
                strict_tools?: boolean | undefined
                documents?: (string | Document)[] | undefined
                citation_options?: CitationOptions | undefined
                response_format?: ResponseFormatV2 | undefined
                safety_mode?: 'CONTEXTUAL' | 'STRICT' | 'OFF' | undefined
                max_tokens?: number | undefined
                stop_sequences?: string[] | undefined
                temperature?: number | undefined
                seed?: number | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                k?: number | undefined
                p?: number | undefined
                logprobs?: boolean | undefined
                tool_choice?: 'REQUIRED' | 'NONE' | undefined
                thinking?: Thinking | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                stream?: boolean | undefined
                model: string
                messages: ChatMessages
                tools?: ToolV2[] | undefined
                strict_tools?: boolean | undefined
                documents?: (string | Document)[] | undefined
                citation_options?: CitationOptions | undefined
                response_format?: ResponseFormatV2 | undefined
                safety_mode?: 'CONTEXTUAL' | 'STRICT' | 'OFF' | undefined
                max_tokens?: number | undefined
                stop_sequences?: string[] | undefined
                temperature?: number | undefined
                seed?: number | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                k?: number | undefined
                p?: number | undefined
                logprobs?: boolean | undefined
                tool_choice?: 'REQUIRED' | 'NONE' | undefined
                thinking?: Thinking | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                stream?: boolean | undefined
                model: string
                messages: ChatMessages
                tools?: ToolV2[] | undefined
                strict_tools?: boolean | undefined
                documents?: (string | Document)[] | undefined
                citation_options?: CitationOptions | undefined
                response_format?: ResponseFormatV2 | undefined
                safety_mode?: 'CONTEXTUAL' | 'STRICT' | 'OFF' | undefined
                max_tokens?: number | undefined
                stop_sequences?: string[] | undefined
                temperature?: number | undefined
                seed?: number | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                k?: number | undefined
                p?: number | undefined
                logprobs?: boolean | undefined
                tool_choice?: 'REQUIRED' | 'NONE' | undefined
                thinking?: Thinking | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                stream?: boolean | undefined
                model: string
                messages: ChatMessages
                tools?: ToolV2[] | undefined
                strict_tools?: boolean | undefined
                documents?: (string | Document)[] | undefined
                citation_options?: CitationOptions | undefined
                response_format?: ResponseFormatV2 | undefined
                safety_mode?: 'CONTEXTUAL' | 'STRICT' | 'OFF' | undefined
                max_tokens?: number | undefined
                stop_sequences?: string[] | undefined
                temperature?: number | undefined
                seed?: number | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                k?: number | undefined
                p?: number | undefined
                logprobs?: boolean | undefined
                tool_choice?: 'REQUIRED' | 'NONE' | undefined
                thinking?: Thinking | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                stream?: boolean | undefined
                model: string
                messages: ChatMessages
                tools?: ToolV2[] | undefined
                strict_tools?: boolean | undefined
                documents?: (string | Document)[] | undefined
                citation_options?: CitationOptions | undefined
                response_format?: ResponseFormatV2 | undefined
                safety_mode?: 'CONTEXTUAL' | 'STRICT' | 'OFF' | undefined
                max_tokens?: number | undefined
                stop_sequences?: string[] | undefined
                temperature?: number | undefined
                seed?: number | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                k?: number | undefined
                p?: number | undefined
                logprobs?: boolean | undefined
                tool_choice?: 'REQUIRED' | 'NONE' | undefined
                thinking?: Thinking | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                stream?: boolean | undefined
                model: string
                messages: ChatMessages
                tools?: ToolV2[] | undefined
                strict_tools?: boolean | undefined
                documents?: (string | Document)[] | undefined
                citation_options?: CitationOptions | undefined
                response_format?: ResponseFormatV2 | undefined
                safety_mode?: 'CONTEXTUAL' | 'STRICT' | 'OFF' | undefined
                max_tokens?: number | undefined
                stop_sequences?: string[] | undefined
                temperature?: number | undefined
                seed?: number | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                k?: number | undefined
                p?: number | undefined
                logprobs?: boolean | undefined
                tool_choice?: 'REQUIRED' | 'NONE' | undefined
                thinking?: Thinking | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                stream?: boolean | undefined
                model: string
                messages: ChatMessages
                tools?: ToolV2[] | undefined
                strict_tools?: boolean | undefined
                documents?: (string | Document)[] | undefined
                citation_options?: CitationOptions | undefined
                response_format?: ResponseFormatV2 | undefined
                safety_mode?: 'CONTEXTUAL' | 'STRICT' | 'OFF' | undefined
                max_tokens?: number | undefined
                stop_sequences?: string[] | undefined
                temperature?: number | undefined
                seed?: number | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                k?: number | undefined
                p?: number | undefined
                logprobs?: boolean | undefined
                tool_choice?: 'REQUIRED' | 'NONE' | undefined
                thinking?: Thinking | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                stream?: boolean | undefined
                model: string
                messages: ChatMessages
                tools?: ToolV2[] | undefined
                strict_tools?: boolean | undefined
                documents?: (string | Document)[] | undefined
                citation_options?: CitationOptions | undefined
                response_format?: ResponseFormatV2 | undefined
                safety_mode?: 'CONTEXTUAL' | 'STRICT' | 'OFF' | undefined
                max_tokens?: number | undefined
                stop_sequences?: string[] | undefined
                temperature?: number | undefined
                seed?: number | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                k?: number | undefined
                p?: number | undefined
                logprobs?: boolean | undefined
                tool_choice?: 'REQUIRED' | 'NONE' | undefined
                thinking?: Thinking | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                stream?: boolean | undefined
                model: string
                messages: ChatMessages
                tools?: ToolV2[] | undefined
                strict_tools?: boolean | undefined
                documents?: (string | Document)[] | undefined
                citation_options?: CitationOptions | undefined
                response_format?: ResponseFormatV2 | undefined
                safety_mode?: 'CONTEXTUAL' | 'STRICT' | 'OFF' | undefined
                max_tokens?: number | undefined
                stop_sequences?: string[] | undefined
                temperature?: number | undefined
                seed?: number | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                k?: number | undefined
                p?: number | undefined
                logprobs?: boolean | undefined
                tool_choice?: 'REQUIRED' | 'NONE' | undefined
                thinking?: Thinking | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                stream?: boolean | undefined
                model: string
                messages: ChatMessages
                tools?: ToolV2[] | undefined
                strict_tools?: boolean | undefined
                documents?: (string | Document)[] | undefined
                citation_options?: CitationOptions | undefined
                response_format?: ResponseFormatV2 | undefined
                safety_mode?: 'CONTEXTUAL' | 'STRICT' | 'OFF' | undefined
                max_tokens?: number | undefined
                stop_sequences?: string[] | undefined
                temperature?: number | undefined
                seed?: number | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                k?: number | undefined
                p?: number | undefined
                logprobs?: boolean | undefined
                tool_choice?: 'REQUIRED' | 'NONE' | undefined
                thinking?: Thinking | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v2/parse': {
      $post:
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model: string
                document: ParseDocument
                output_format?: ParseOutputFormat | undefined
              }
            }
            output: ParseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model: string
                document: ParseDocument
                output_format?: ParseOutputFormat | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model: string
                document: ParseDocument
                output_format?: ParseOutputFormat | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model: string
                document: ParseDocument
                output_format?: ParseOutputFormat | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model: string
                document: ParseDocument
                output_format?: ParseOutputFormat | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model: string
                document: ParseDocument
                output_format?: ParseOutputFormat | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model: string
                document: ParseDocument
                output_format?: ParseOutputFormat | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model: string
                document: ParseDocument
                output_format?: ParseOutputFormat | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model: string
                document: ParseDocument
                output_format?: ParseOutputFormat | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model: string
                document: ParseDocument
                output_format?: ParseOutputFormat | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model: string
                document: ParseDocument
                output_format?: ParseOutputFormat | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v1/generate': {
      $post:
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                prompt: string
                model?: string | undefined
                num_generations?: number | undefined
                stream?: boolean | undefined
                max_tokens?: number | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
                temperature?: number | undefined
                seed?: number | undefined
                preset?: string | undefined
                end_sequences?: string[] | undefined
                stop_sequences?: string[] | undefined
                k?: number | undefined
                p?: number | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                return_likelihoods?: 'GENERATION' | 'ALL' | 'NONE' | undefined
                raw_prompting?: boolean | undefined
              }
            }
            output: Generation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                prompt: string
                model?: string | undefined
                num_generations?: number | undefined
                stream?: boolean | undefined
                max_tokens?: number | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
                temperature?: number | undefined
                seed?: number | undefined
                preset?: string | undefined
                end_sequences?: string[] | undefined
                stop_sequences?: string[] | undefined
                k?: number | undefined
                p?: number | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                return_likelihoods?: 'GENERATION' | 'ALL' | 'NONE' | undefined
                raw_prompting?: boolean | undefined
              }
            }
            output: GenerateStreamedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                prompt: string
                model?: string | undefined
                num_generations?: number | undefined
                stream?: boolean | undefined
                max_tokens?: number | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
                temperature?: number | undefined
                seed?: number | undefined
                preset?: string | undefined
                end_sequences?: string[] | undefined
                stop_sequences?: string[] | undefined
                k?: number | undefined
                p?: number | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                return_likelihoods?: 'GENERATION' | 'ALL' | 'NONE' | undefined
                raw_prompting?: boolean | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                prompt: string
                model?: string | undefined
                num_generations?: number | undefined
                stream?: boolean | undefined
                max_tokens?: number | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
                temperature?: number | undefined
                seed?: number | undefined
                preset?: string | undefined
                end_sequences?: string[] | undefined
                stop_sequences?: string[] | undefined
                k?: number | undefined
                p?: number | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                return_likelihoods?: 'GENERATION' | 'ALL' | 'NONE' | undefined
                raw_prompting?: boolean | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                prompt: string
                model?: string | undefined
                num_generations?: number | undefined
                stream?: boolean | undefined
                max_tokens?: number | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
                temperature?: number | undefined
                seed?: number | undefined
                preset?: string | undefined
                end_sequences?: string[] | undefined
                stop_sequences?: string[] | undefined
                k?: number | undefined
                p?: number | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                return_likelihoods?: 'GENERATION' | 'ALL' | 'NONE' | undefined
                raw_prompting?: boolean | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                prompt: string
                model?: string | undefined
                num_generations?: number | undefined
                stream?: boolean | undefined
                max_tokens?: number | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
                temperature?: number | undefined
                seed?: number | undefined
                preset?: string | undefined
                end_sequences?: string[] | undefined
                stop_sequences?: string[] | undefined
                k?: number | undefined
                p?: number | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                return_likelihoods?: 'GENERATION' | 'ALL' | 'NONE' | undefined
                raw_prompting?: boolean | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                prompt: string
                model?: string | undefined
                num_generations?: number | undefined
                stream?: boolean | undefined
                max_tokens?: number | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
                temperature?: number | undefined
                seed?: number | undefined
                preset?: string | undefined
                end_sequences?: string[] | undefined
                stop_sequences?: string[] | undefined
                k?: number | undefined
                p?: number | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                return_likelihoods?: 'GENERATION' | 'ALL' | 'NONE' | undefined
                raw_prompting?: boolean | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                prompt: string
                model?: string | undefined
                num_generations?: number | undefined
                stream?: boolean | undefined
                max_tokens?: number | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
                temperature?: number | undefined
                seed?: number | undefined
                preset?: string | undefined
                end_sequences?: string[] | undefined
                stop_sequences?: string[] | undefined
                k?: number | undefined
                p?: number | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                return_likelihoods?: 'GENERATION' | 'ALL' | 'NONE' | undefined
                raw_prompting?: boolean | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                prompt: string
                model?: string | undefined
                num_generations?: number | undefined
                stream?: boolean | undefined
                max_tokens?: number | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
                temperature?: number | undefined
                seed?: number | undefined
                preset?: string | undefined
                end_sequences?: string[] | undefined
                stop_sequences?: string[] | undefined
                k?: number | undefined
                p?: number | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                return_likelihoods?: 'GENERATION' | 'ALL' | 'NONE' | undefined
                raw_prompting?: boolean | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                prompt: string
                model?: string | undefined
                num_generations?: number | undefined
                stream?: boolean | undefined
                max_tokens?: number | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
                temperature?: number | undefined
                seed?: number | undefined
                preset?: string | undefined
                end_sequences?: string[] | undefined
                stop_sequences?: string[] | undefined
                k?: number | undefined
                p?: number | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                return_likelihoods?: 'GENERATION' | 'ALL' | 'NONE' | undefined
                raw_prompting?: boolean | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                prompt: string
                model?: string | undefined
                num_generations?: number | undefined
                stream?: boolean | undefined
                max_tokens?: number | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
                temperature?: number | undefined
                seed?: number | undefined
                preset?: string | undefined
                end_sequences?: string[] | undefined
                stop_sequences?: string[] | undefined
                k?: number | undefined
                p?: number | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                return_likelihoods?: 'GENERATION' | 'ALL' | 'NONE' | undefined
                raw_prompting?: boolean | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                prompt: string
                model?: string | undefined
                num_generations?: number | undefined
                stream?: boolean | undefined
                max_tokens?: number | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
                temperature?: number | undefined
                seed?: number | undefined
                preset?: string | undefined
                end_sequences?: string[] | undefined
                stop_sequences?: string[] | undefined
                k?: number | undefined
                p?: number | undefined
                frequency_penalty?: number | undefined
                presence_penalty?: number | undefined
                return_likelihoods?: 'GENERATION' | 'ALL' | 'NONE' | undefined
                raw_prompting?: boolean | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v1/embed': {
      $post:
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                texts?: string[] | undefined
                images?: string[] | undefined
                model?: string | undefined
                input_type?: EmbedInputType | undefined
                embedding_types?: EmbeddingType[] | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
              }
            }
            output: EmbedFloatsResponse | EmbedByTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                texts?: string[] | undefined
                images?: string[] | undefined
                model?: string | undefined
                input_type?: EmbedInputType | undefined
                embedding_types?: EmbeddingType[] | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                texts?: string[] | undefined
                images?: string[] | undefined
                model?: string | undefined
                input_type?: EmbedInputType | undefined
                embedding_types?: EmbeddingType[] | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                texts?: string[] | undefined
                images?: string[] | undefined
                model?: string | undefined
                input_type?: EmbedInputType | undefined
                embedding_types?: EmbeddingType[] | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                texts?: string[] | undefined
                images?: string[] | undefined
                model?: string | undefined
                input_type?: EmbedInputType | undefined
                embedding_types?: EmbeddingType[] | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                texts?: string[] | undefined
                images?: string[] | undefined
                model?: string | undefined
                input_type?: EmbedInputType | undefined
                embedding_types?: EmbeddingType[] | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                texts?: string[] | undefined
                images?: string[] | undefined
                model?: string | undefined
                input_type?: EmbedInputType | undefined
                embedding_types?: EmbeddingType[] | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                texts?: string[] | undefined
                images?: string[] | undefined
                model?: string | undefined
                input_type?: EmbedInputType | undefined
                embedding_types?: EmbeddingType[] | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                texts?: string[] | undefined
                images?: string[] | undefined
                model?: string | undefined
                input_type?: EmbedInputType | undefined
                embedding_types?: EmbeddingType[] | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                texts?: string[] | undefined
                images?: string[] | undefined
                model?: string | undefined
                input_type?: EmbedInputType | undefined
                embedding_types?: EmbeddingType[] | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                texts?: string[] | undefined
                images?: string[] | undefined
                model?: string | undefined
                input_type?: EmbedInputType | undefined
                embedding_types?: EmbeddingType[] | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v2/embed': {
      $post:
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                texts?: string[] | undefined
                images?: string[] | undefined
                model: string
                input_type: EmbedInputType
                inputs?: EmbedInput[] | undefined
                max_tokens?: number | undefined
                output_dimension?: number | undefined
                embedding_types?: EmbeddingType[] | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
                priority?: number | undefined
              }
            }
            output: EmbedByTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                texts?: string[] | undefined
                images?: string[] | undefined
                model: string
                input_type: EmbedInputType
                inputs?: EmbedInput[] | undefined
                max_tokens?: number | undefined
                output_dimension?: number | undefined
                embedding_types?: EmbeddingType[] | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                texts?: string[] | undefined
                images?: string[] | undefined
                model: string
                input_type: EmbedInputType
                inputs?: EmbedInput[] | undefined
                max_tokens?: number | undefined
                output_dimension?: number | undefined
                embedding_types?: EmbeddingType[] | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                texts?: string[] | undefined
                images?: string[] | undefined
                model: string
                input_type: EmbedInputType
                inputs?: EmbedInput[] | undefined
                max_tokens?: number | undefined
                output_dimension?: number | undefined
                embedding_types?: EmbeddingType[] | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                texts?: string[] | undefined
                images?: string[] | undefined
                model: string
                input_type: EmbedInputType
                inputs?: EmbedInput[] | undefined
                max_tokens?: number | undefined
                output_dimension?: number | undefined
                embedding_types?: EmbeddingType[] | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                texts?: string[] | undefined
                images?: string[] | undefined
                model: string
                input_type: EmbedInputType
                inputs?: EmbedInput[] | undefined
                max_tokens?: number | undefined
                output_dimension?: number | undefined
                embedding_types?: EmbeddingType[] | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                texts?: string[] | undefined
                images?: string[] | undefined
                model: string
                input_type: EmbedInputType
                inputs?: EmbedInput[] | undefined
                max_tokens?: number | undefined
                output_dimension?: number | undefined
                embedding_types?: EmbeddingType[] | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                texts?: string[] | undefined
                images?: string[] | undefined
                model: string
                input_type: EmbedInputType
                inputs?: EmbedInput[] | undefined
                max_tokens?: number | undefined
                output_dimension?: number | undefined
                embedding_types?: EmbeddingType[] | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                texts?: string[] | undefined
                images?: string[] | undefined
                model: string
                input_type: EmbedInputType
                inputs?: EmbedInput[] | undefined
                max_tokens?: number | undefined
                output_dimension?: number | undefined
                embedding_types?: EmbeddingType[] | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                texts?: string[] | undefined
                images?: string[] | undefined
                model: string
                input_type: EmbedInputType
                inputs?: EmbedInput[] | undefined
                max_tokens?: number | undefined
                output_dimension?: number | undefined
                embedding_types?: EmbeddingType[] | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                texts?: string[] | undefined
                images?: string[] | undefined
                model: string
                input_type: EmbedInputType
                inputs?: EmbedInput[] | undefined
                max_tokens?: number | undefined
                output_dimension?: number | undefined
                embedding_types?: EmbeddingType[] | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v2/audio/transcriptions': {
      $post:
        | {
            input: {
              form: {
                model: string
                language: string
                temperature?: number | undefined
                file: File
              }
            }
            output: { text: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                model: string
                language: string
                temperature?: number | undefined
                file: File
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              form: {
                model: string
                language: string
                temperature?: number | undefined
                file: File
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              form: {
                model: string
                language: string
                temperature?: number | undefined
                file: File
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              form: {
                model: string
                language: string
                temperature?: number | undefined
                file: File
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              form: {
                model: string
                language: string
                temperature?: number | undefined
                file: File
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              form: {
                model: string
                language: string
                temperature?: number | undefined
                file: File
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              form: {
                model: string
                language: string
                temperature?: number | undefined
                file: File
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              form: {
                model: string
                language: string
                temperature?: number | undefined
                file: File
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: {
              form: {
                model: string
                language: string
                temperature?: number | undefined
                file: File
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              form: {
                model: string
                language: string
                temperature?: number | undefined
                file: File
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v2/batches': {
      $get:
        | {
            input: {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                order_by?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: ListBatchesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                order_by?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: BatchError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                order_by?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: BatchError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                order_by?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: BatchError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                order_by?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: BatchError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                order_by?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: BatchError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                order_by?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: BatchError
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & { json: Batch }
            output: CreateBatchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & { json: Batch }
            output: BatchError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & { json: Batch }
            output: BatchError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & { json: Batch }
            output: BatchError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & { json: Batch }
            output: BatchError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & { json: Batch }
            output: BatchError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & { json: Batch }
            output: BatchError
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/batches/:id': {
      $get:
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: GetBatchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: BatchError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: BatchError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: BatchError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: BatchError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: BatchError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: BatchError
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/batches/:id:cancel': {
      $post:
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: CancelBatchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: BatchError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: BatchError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: BatchError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: BatchError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: BatchError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: BatchError
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/embed-jobs': {
      $post:
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: CreateEmbedJobRequest
            }
            output: CreateEmbedJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: CreateEmbedJobRequest
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: CreateEmbedJobRequest
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: CreateEmbedJobRequest
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: CreateEmbedJobRequest
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: CreateEmbedJobRequest
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: CreateEmbedJobRequest
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: CreateEmbedJobRequest
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: CreateEmbedJobRequest
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: CreateEmbedJobRequest
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: CreateEmbedJobRequest
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
      $get:
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: ListEmbedJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v1/embed-jobs/:id': {
      $get:
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: EmbedJob
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v1/embed-jobs/:id/cancel': {
      $post:
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v1/rerank': {
      $post:
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model?: string | undefined
                query: string
                documents: (string | RerankDocument)[]
                top_n?: number | undefined
                rank_fields?: string[] | undefined
                return_documents?: boolean | undefined
                max_chunks_per_doc?: number | undefined
              }
            }
            output: {
              id?: string | undefined
              results: {
                document?: { text: string } | undefined
                index: number
                relevance_score: number
              }[]
              meta?: ApiMeta | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model?: string | undefined
                query: string
                documents: (string | RerankDocument)[]
                top_n?: number | undefined
                rank_fields?: string[] | undefined
                return_documents?: boolean | undefined
                max_chunks_per_doc?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model?: string | undefined
                query: string
                documents: (string | RerankDocument)[]
                top_n?: number | undefined
                rank_fields?: string[] | undefined
                return_documents?: boolean | undefined
                max_chunks_per_doc?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model?: string | undefined
                query: string
                documents: (string | RerankDocument)[]
                top_n?: number | undefined
                rank_fields?: string[] | undefined
                return_documents?: boolean | undefined
                max_chunks_per_doc?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model?: string | undefined
                query: string
                documents: (string | RerankDocument)[]
                top_n?: number | undefined
                rank_fields?: string[] | undefined
                return_documents?: boolean | undefined
                max_chunks_per_doc?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model?: string | undefined
                query: string
                documents: (string | RerankDocument)[]
                top_n?: number | undefined
                rank_fields?: string[] | undefined
                return_documents?: boolean | undefined
                max_chunks_per_doc?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model?: string | undefined
                query: string
                documents: (string | RerankDocument)[]
                top_n?: number | undefined
                rank_fields?: string[] | undefined
                return_documents?: boolean | undefined
                max_chunks_per_doc?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model?: string | undefined
                query: string
                documents: (string | RerankDocument)[]
                top_n?: number | undefined
                rank_fields?: string[] | undefined
                return_documents?: boolean | undefined
                max_chunks_per_doc?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model?: string | undefined
                query: string
                documents: (string | RerankDocument)[]
                top_n?: number | undefined
                rank_fields?: string[] | undefined
                return_documents?: boolean | undefined
                max_chunks_per_doc?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model?: string | undefined
                query: string
                documents: (string | RerankDocument)[]
                top_n?: number | undefined
                rank_fields?: string[] | undefined
                return_documents?: boolean | undefined
                max_chunks_per_doc?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model?: string | undefined
                query: string
                documents: (string | RerankDocument)[]
                top_n?: number | undefined
                rank_fields?: string[] | undefined
                return_documents?: boolean | undefined
                max_chunks_per_doc?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v2/rerank': {
      $post:
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model: string
                query: string
                documents: string[]
                top_n?: number | undefined
                max_tokens_per_doc?: number | undefined
                relevant_spans?: RerankRelevantSpans | undefined
                priority?: number | undefined
              }
            }
            output: {
              id?: string | undefined
              results: {
                index: number
                relevance_score: number
                relevant_spans?: RerankRelevantSpanResponse[] | undefined
              }[]
              meta?: ApiMeta | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model: string
                query: string
                documents: string[]
                top_n?: number | undefined
                max_tokens_per_doc?: number | undefined
                relevant_spans?: RerankRelevantSpans | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model: string
                query: string
                documents: string[]
                top_n?: number | undefined
                max_tokens_per_doc?: number | undefined
                relevant_spans?: RerankRelevantSpans | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model: string
                query: string
                documents: string[]
                top_n?: number | undefined
                max_tokens_per_doc?: number | undefined
                relevant_spans?: RerankRelevantSpans | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model: string
                query: string
                documents: string[]
                top_n?: number | undefined
                max_tokens_per_doc?: number | undefined
                relevant_spans?: RerankRelevantSpans | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model: string
                query: string
                documents: string[]
                top_n?: number | undefined
                max_tokens_per_doc?: number | undefined
                relevant_spans?: RerankRelevantSpans | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model: string
                query: string
                documents: string[]
                top_n?: number | undefined
                max_tokens_per_doc?: number | undefined
                relevant_spans?: RerankRelevantSpans | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model: string
                query: string
                documents: string[]
                top_n?: number | undefined
                max_tokens_per_doc?: number | undefined
                relevant_spans?: RerankRelevantSpans | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model: string
                query: string
                documents: string[]
                top_n?: number | undefined
                max_tokens_per_doc?: number | undefined
                relevant_spans?: RerankRelevantSpans | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model: string
                query: string
                documents: string[]
                top_n?: number | undefined
                max_tokens_per_doc?: number | undefined
                relevant_spans?: RerankRelevantSpans | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                model: string
                query: string
                documents: string[]
                top_n?: number | undefined
                max_tokens_per_doc?: number | undefined
                relevant_spans?: RerankRelevantSpans | undefined
                priority?: number | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v1/classify': {
      $post:
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                inputs: string[]
                examples?: ClassifyExample[] | undefined
                model?: string | undefined
                preset?: string | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
              }
            }
            output: {
              id: string
              classifications: {
                id: string
                input?: string | undefined
                prediction?: string | undefined
                predictions: string[]
                confidence?: number | undefined
                confidences: number[]
                labels: { [x: string]: { confidence?: number | undefined } }
                classification_type: 'single-label' | 'multi-label'
              }[]
              meta?: ApiMeta | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                inputs: string[]
                examples?: ClassifyExample[] | undefined
                model?: string | undefined
                preset?: string | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                inputs: string[]
                examples?: ClassifyExample[] | undefined
                model?: string | undefined
                preset?: string | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                inputs: string[]
                examples?: ClassifyExample[] | undefined
                model?: string | undefined
                preset?: string | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                inputs: string[]
                examples?: ClassifyExample[] | undefined
                model?: string | undefined
                preset?: string | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                inputs: string[]
                examples?: ClassifyExample[] | undefined
                model?: string | undefined
                preset?: string | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                inputs: string[]
                examples?: ClassifyExample[] | undefined
                model?: string | undefined
                preset?: string | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                inputs: string[]
                examples?: ClassifyExample[] | undefined
                model?: string | undefined
                preset?: string | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                inputs: string[]
                examples?: ClassifyExample[] | undefined
                model?: string | undefined
                preset?: string | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                inputs: string[]
                examples?: ClassifyExample[] | undefined
                model?: string | undefined
                preset?: string | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                inputs: string[]
                examples?: ClassifyExample[] | undefined
                model?: string | undefined
                preset?: string | undefined
                truncate?: 'NONE' | 'START' | 'END' | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v1/datasets': {
      $post:
        | {
            input: {
              query: {
                name: string
                type: DatasetType
                keep_original_file?: boolean | undefined
                skip_malformed_input?: boolean | undefined
                keep_fields?: string[] | undefined
                optional_fields?: string[] | undefined
                text_separator?: string | undefined
                csv_delimiter?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } } & {
              form: { data: File; eval_data?: File | undefined }
            }
            output: { id?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name: string
                type: DatasetType
                keep_original_file?: boolean | undefined
                skip_malformed_input?: boolean | undefined
                keep_fields?: string[] | undefined
                optional_fields?: string[] | undefined
                text_separator?: string | undefined
                csv_delimiter?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } } & {
              form: { data: File; eval_data?: File | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                name: string
                type: DatasetType
                keep_original_file?: boolean | undefined
                skip_malformed_input?: boolean | undefined
                keep_fields?: string[] | undefined
                optional_fields?: string[] | undefined
                text_separator?: string | undefined
                csv_delimiter?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } } & {
              form: { data: File; eval_data?: File | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                name: string
                type: DatasetType
                keep_original_file?: boolean | undefined
                skip_malformed_input?: boolean | undefined
                keep_fields?: string[] | undefined
                optional_fields?: string[] | undefined
                text_separator?: string | undefined
                csv_delimiter?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } } & {
              form: { data: File; eval_data?: File | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                name: string
                type: DatasetType
                keep_original_file?: boolean | undefined
                skip_malformed_input?: boolean | undefined
                keep_fields?: string[] | undefined
                optional_fields?: string[] | undefined
                text_separator?: string | undefined
                csv_delimiter?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } } & {
              form: { data: File; eval_data?: File | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                name: string
                type: DatasetType
                keep_original_file?: boolean | undefined
                skip_malformed_input?: boolean | undefined
                keep_fields?: string[] | undefined
                optional_fields?: string[] | undefined
                text_separator?: string | undefined
                csv_delimiter?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } } & {
              form: { data: File; eval_data?: File | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                name: string
                type: DatasetType
                keep_original_file?: boolean | undefined
                skip_malformed_input?: boolean | undefined
                keep_fields?: string[] | undefined
                optional_fields?: string[] | undefined
                text_separator?: string | undefined
                csv_delimiter?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } } & {
              form: { data: File; eval_data?: File | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                name: string
                type: DatasetType
                keep_original_file?: boolean | undefined
                skip_malformed_input?: boolean | undefined
                keep_fields?: string[] | undefined
                optional_fields?: string[] | undefined
                text_separator?: string | undefined
                csv_delimiter?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } } & {
              form: { data: File; eval_data?: File | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                name: string
                type: DatasetType
                keep_original_file?: boolean | undefined
                skip_malformed_input?: boolean | undefined
                keep_fields?: string[] | undefined
                optional_fields?: string[] | undefined
                text_separator?: string | undefined
                csv_delimiter?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } } & {
              form: { data: File; eval_data?: File | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: {
              query: {
                name: string
                type: DatasetType
                keep_original_file?: boolean | undefined
                skip_malformed_input?: boolean | undefined
                keep_fields?: string[] | undefined
                optional_fields?: string[] | undefined
                text_separator?: string | undefined
                csv_delimiter?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } } & {
              form: { data: File; eval_data?: File | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              query: {
                name: string
                type: DatasetType
                keep_original_file?: boolean | undefined
                skip_malformed_input?: boolean | undefined
                keep_fields?: string[] | undefined
                optional_fields?: string[] | undefined
                text_separator?: string | undefined
                csv_delimiter?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } } & {
              form: { data: File; eval_data?: File | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
      $get:
        | {
            input: {
              query: {
                datasetType?: string | undefined
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                validationStatus?: DatasetValidationStatus | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { datasets?: Dataset[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                datasetType?: string | undefined
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                validationStatus?: DatasetValidationStatus | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                datasetType?: string | undefined
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                validationStatus?: DatasetValidationStatus | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                datasetType?: string | undefined
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                validationStatus?: DatasetValidationStatus | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                datasetType?: string | undefined
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                validationStatus?: DatasetValidationStatus | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                datasetType?: string | undefined
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                validationStatus?: DatasetValidationStatus | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                datasetType?: string | undefined
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                validationStatus?: DatasetValidationStatus | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                datasetType?: string | undefined
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                validationStatus?: DatasetValidationStatus | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                datasetType?: string | undefined
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                validationStatus?: DatasetValidationStatus | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: {
              query: {
                datasetType?: string | undefined
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                validationStatus?: DatasetValidationStatus | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              query: {
                datasetType?: string | undefined
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                validationStatus?: DatasetValidationStatus | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v1/datasets/usage': {
      $get:
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { organization_usage?: number | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v1/datasets/:id': {
      $get:
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { dataset: Dataset }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
      $delete:
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v1/summarize': {
      $post:
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                text: string
                length?: 'short' | 'medium' | 'long' | undefined
                format?: 'paragraph' | 'bullets' | undefined
                model?: string | undefined
                extractiveness?: 'low' | 'medium' | 'high' | undefined
                temperature?: number | undefined
                additional_command?: string | undefined
              }
            }
            output: {
              id?: string | undefined
              summary?: string | undefined
              meta?: ApiMeta | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                text: string
                length?: 'short' | 'medium' | 'long' | undefined
                format?: 'paragraph' | 'bullets' | undefined
                model?: string | undefined
                extractiveness?: 'low' | 'medium' | 'high' | undefined
                temperature?: number | undefined
                additional_command?: string | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                text: string
                length?: 'short' | 'medium' | 'long' | undefined
                format?: 'paragraph' | 'bullets' | undefined
                model?: string | undefined
                extractiveness?: 'low' | 'medium' | 'high' | undefined
                temperature?: number | undefined
                additional_command?: string | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                text: string
                length?: 'short' | 'medium' | 'long' | undefined
                format?: 'paragraph' | 'bullets' | undefined
                model?: string | undefined
                extractiveness?: 'low' | 'medium' | 'high' | undefined
                temperature?: number | undefined
                additional_command?: string | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                text: string
                length?: 'short' | 'medium' | 'long' | undefined
                format?: 'paragraph' | 'bullets' | undefined
                model?: string | undefined
                extractiveness?: 'low' | 'medium' | 'high' | undefined
                temperature?: number | undefined
                additional_command?: string | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                text: string
                length?: 'short' | 'medium' | 'long' | undefined
                format?: 'paragraph' | 'bullets' | undefined
                model?: string | undefined
                extractiveness?: 'low' | 'medium' | 'high' | undefined
                temperature?: number | undefined
                additional_command?: string | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                text: string
                length?: 'short' | 'medium' | 'long' | undefined
                format?: 'paragraph' | 'bullets' | undefined
                model?: string | undefined
                extractiveness?: 'low' | 'medium' | 'high' | undefined
                temperature?: number | undefined
                additional_command?: string | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                text: string
                length?: 'short' | 'medium' | 'long' | undefined
                format?: 'paragraph' | 'bullets' | undefined
                model?: string | undefined
                extractiveness?: 'low' | 'medium' | 'high' | undefined
                temperature?: number | undefined
                additional_command?: string | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                text: string
                length?: 'short' | 'medium' | 'long' | undefined
                format?: 'paragraph' | 'bullets' | undefined
                model?: string | undefined
                extractiveness?: 'low' | 'medium' | 'high' | undefined
                temperature?: number | undefined
                additional_command?: string | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                text: string
                length?: 'short' | 'medium' | 'long' | undefined
                format?: 'paragraph' | 'bullets' | undefined
                model?: string | undefined
                extractiveness?: 'low' | 'medium' | 'high' | undefined
                temperature?: number | undefined
                additional_command?: string | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: {
                text: string
                length?: 'short' | 'medium' | 'long' | undefined
                format?: 'paragraph' | 'bullets' | undefined
                model?: string | undefined
                extractiveness?: 'low' | 'medium' | 'high' | undefined
                temperature?: number | undefined
                additional_command?: string | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v1/tokenize': {
      $post:
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: { text: string; model: string }
            }
            output: { tokens: number[]; token_strings: string[]; meta?: ApiMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: { text: string; model: string }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: { text: string; model: string }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: { text: string; model: string }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: { text: string; model: string }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: { text: string; model: string }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: { text: string; model: string }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: { text: string; model: string }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: { text: string; model: string }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: { text: string; model: string }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: { text: string; model: string }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v1/detokenize': {
      $post:
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: { tokens: number[]; model: string }
            }
            output: { text: string; meta?: ApiMeta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: { tokens: number[]; model: string }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: { tokens: number[]; model: string }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: { tokens: number[]; model: string }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: { tokens: number[]; model: string }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: { tokens: number[]; model: string }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: { tokens: number[]; model: string }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: { tokens: number[]; model: string }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: { tokens: number[]; model: string }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: { tokens: number[]; model: string }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: { tokens: number[]; model: string }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v1/connectors': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'X-Client-Name'?: string | undefined }
            }
            output: ListConnectorsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'X-Client-Name'?: string | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'X-Client-Name'?: string | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'X-Client-Name'?: string | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'X-Client-Name'?: string | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'X-Client-Name'?: string | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'X-Client-Name'?: string | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'X-Client-Name'?: string | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'X-Client-Name'?: string | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'X-Client-Name'?: string | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } } & {
              header: { 'X-Client-Name'?: string | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
      $post:
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: CreateConnectorRequest
            }
            output: CreateConnectorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: CreateConnectorRequest
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: CreateConnectorRequest
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: CreateConnectorRequest
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: CreateConnectorRequest
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: CreateConnectorRequest
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: CreateConnectorRequest
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: CreateConnectorRequest
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: CreateConnectorRequest
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: CreateConnectorRequest
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & {
              json: CreateConnectorRequest
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v1/connectors/:id': {
      $get:
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: GetConnectorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              header: { 'X-Client-Name'?: string | undefined }
            } & { json: UpdateConnectorRequest }
            output: UpdateConnectorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-Client-Name'?: string | undefined }
            } & { json: UpdateConnectorRequest }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-Client-Name'?: string | undefined }
            } & { json: UpdateConnectorRequest }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-Client-Name'?: string | undefined }
            } & { json: UpdateConnectorRequest }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-Client-Name'?: string | undefined }
            } & { json: UpdateConnectorRequest }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-Client-Name'?: string | undefined }
            } & { json: UpdateConnectorRequest }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-Client-Name'?: string | undefined }
            } & { json: UpdateConnectorRequest }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-Client-Name'?: string | undefined }
            } & { json: UpdateConnectorRequest }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-Client-Name'?: string | undefined }
            } & { json: UpdateConnectorRequest }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-Client-Name'?: string | undefined }
            } & { json: UpdateConnectorRequest }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-Client-Name'?: string | undefined }
            } & { json: UpdateConnectorRequest }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
      $delete:
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: DeleteConnectorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v1/connectors/:id/oauth/authorize': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { after_token_redirect?: string | undefined }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: OAuthAuthorizeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { after_token_redirect?: string | undefined }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { after_token_redirect?: string | undefined }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { after_token_redirect?: string | undefined }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { after_token_redirect?: string | undefined }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { after_token_redirect?: string | undefined }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { after_token_redirect?: string | undefined }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              query: { after_token_redirect?: string | undefined }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              query: { after_token_redirect?: string | undefined }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { id: string } } & {
              query: { after_token_redirect?: string | undefined }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { id: string } } & {
              query: { after_token_redirect?: string | undefined }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v1/models/:model': {
      $get:
        | {
            input: { param: { model: string } } & {
              header: { 'X-Client-Name'?: string | undefined }
            }
            output: GetModelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { model: string } } & {
              header: { 'X-Client-Name'?: string | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { model: string } } & {
              header: { 'X-Client-Name'?: string | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { model: string } } & {
              header: { 'X-Client-Name'?: string | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { model: string } } & {
              header: { 'X-Client-Name'?: string | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { model: string } } & {
              header: { 'X-Client-Name'?: string | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { model: string } } & {
              header: { 'X-Client-Name'?: string | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { model: string } } & {
              header: { 'X-Client-Name'?: string | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { model: string } } & {
              header: { 'X-Client-Name'?: string | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { model: string } } & {
              header: { 'X-Client-Name'?: string | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { model: string } } & {
              header: { 'X-Client-Name'?: string | undefined }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v1/models': {
      $get:
        | {
            input: {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                endpoint?: CompatibleEndpoint | undefined
                default_only?: boolean | undefined
              }
            }
            output: ListModelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                endpoint?: CompatibleEndpoint | undefined
                default_only?: boolean | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                endpoint?: CompatibleEndpoint | undefined
                default_only?: boolean | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                endpoint?: CompatibleEndpoint | undefined
                default_only?: boolean | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                endpoint?: CompatibleEndpoint | undefined
                default_only?: boolean | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                endpoint?: CompatibleEndpoint | undefined
                default_only?: boolean | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                endpoint?: CompatibleEndpoint | undefined
                default_only?: boolean | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                endpoint?: CompatibleEndpoint | undefined
                default_only?: boolean | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                endpoint?: CompatibleEndpoint | undefined
                default_only?: boolean | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                endpoint?: CompatibleEndpoint | undefined
                default_only?: boolean | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                endpoint?: CompatibleEndpoint | undefined
                default_only?: boolean | undefined
              }
            }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v1/check-api-key': {
      $post:
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: {
              valid: boolean
              organization_id?: string | undefined
              owner_id?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } }
            output: { message?: string | undefined; id?: string | undefined }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v1/finetuning/finetuned-models': {
      $get:
        | {
            input: {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                order_by?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: ListFinetunedModelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                order_by?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                order_by?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                order_by?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                order_by?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                order_by?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                order_by?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & { json: FinetunedModel }
            output: CreateFinetunedModelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & { json: FinetunedModel }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & { json: FinetunedModel }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & { json: FinetunedModel }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & { json: FinetunedModel }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & { json: FinetunedModel }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-Client-Name'?: string | undefined } } & { json: FinetunedModel }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/finetuning/finetuned-models/:id': {
      $patch:
        | {
            input: { param: { id: string } } & {
              header: { 'X-Client-Name'?: string | undefined }
            } & {
              json: {
                name: string
                creator_id?: string | undefined
                organization_id?: string | undefined
                settings: Settings
                status?: Status | undefined
                created_at?: string | undefined
                updated_at?: string | undefined
                completed_at?: string | undefined
                last_used?: string | undefined
              }
            }
            output: UpdateFinetunedModelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-Client-Name'?: string | undefined }
            } & {
              json: {
                name: string
                creator_id?: string | undefined
                organization_id?: string | undefined
                settings: Settings
                status?: Status | undefined
                created_at?: string | undefined
                updated_at?: string | undefined
                completed_at?: string | undefined
                last_used?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-Client-Name'?: string | undefined }
            } & {
              json: {
                name: string
                creator_id?: string | undefined
                organization_id?: string | undefined
                settings: Settings
                status?: Status | undefined
                created_at?: string | undefined
                updated_at?: string | undefined
                completed_at?: string | undefined
                last_used?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-Client-Name'?: string | undefined }
            } & {
              json: {
                name: string
                creator_id?: string | undefined
                organization_id?: string | undefined
                settings: Settings
                status?: Status | undefined
                created_at?: string | undefined
                updated_at?: string | undefined
                completed_at?: string | undefined
                last_used?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-Client-Name'?: string | undefined }
            } & {
              json: {
                name: string
                creator_id?: string | undefined
                organization_id?: string | undefined
                settings: Settings
                status?: Status | undefined
                created_at?: string | undefined
                updated_at?: string | undefined
                completed_at?: string | undefined
                last_used?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-Client-Name'?: string | undefined }
            } & {
              json: {
                name: string
                creator_id?: string | undefined
                organization_id?: string | undefined
                settings: Settings
                status?: Status | undefined
                created_at?: string | undefined
                updated_at?: string | undefined
                completed_at?: string | undefined
                last_used?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-Client-Name'?: string | undefined }
            } & {
              json: {
                name: string
                creator_id?: string | undefined
                organization_id?: string | undefined
                settings: Settings
                status?: Status | undefined
                created_at?: string | undefined
                updated_at?: string | undefined
                completed_at?: string | undefined
                last_used?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: GetFinetunedModelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: DeleteFinetunedModelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/finetuning/finetuned-models/:finetuned_model_id/events': {
      $get:
        | {
            input: { param: { finetuned_model_id: string } } & {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                order_by?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: ListEventsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { finetuned_model_id: string } } & {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                order_by?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { finetuned_model_id: string } } & {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                order_by?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { finetuned_model_id: string } } & {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                order_by?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { finetuned_model_id: string } } & {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                order_by?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { finetuned_model_id: string } } & {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                order_by?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { finetuned_model_id: string } } & {
              query: {
                page_size?: number | undefined
                page_token?: string | undefined
                order_by?: string | undefined
              }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/finetuning/finetuned-models/:finetuned_model_id/training-step-metrics': {
      $get:
        | {
            input: { param: { finetuned_model_id: string } } & {
              query: { page_size?: number | undefined; page_token?: string | undefined }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: ListTrainingStepMetricsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { finetuned_model_id: string } } & {
              query: { page_size?: number | undefined; page_token?: string | undefined }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { finetuned_model_id: string } } & {
              query: { page_size?: number | undefined; page_token?: string | undefined }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { finetuned_model_id: string } } & {
              query: { page_size?: number | undefined; page_token?: string | undefined }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { finetuned_model_id: string } } & {
              query: { page_size?: number | undefined; page_token?: string | undefined }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { finetuned_model_id: string } } & {
              query: { page_size?: number | undefined; page_token?: string | undefined }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { finetuned_model_id: string } } & {
              query: { page_size?: number | undefined; page_token?: string | undefined }
            } & { header: { 'X-Client-Name'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  },
  '/'
>
export default routes
