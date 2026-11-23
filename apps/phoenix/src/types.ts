type OptimizationDirection = 'MINIMIZE' | 'MAXIMIZE' | 'NONE'
type CategoricalAnnotationValue = {
  label: string
  score?: number | ({ [x: string]: unknown } | null) | undefined
}
type CategoricalAnnotationConfig = {
  name: string
  type: 'CATEGORICAL'
  description?: string | ({ [x: string]: unknown } | null) | undefined
  optimization_direction: OptimizationDirection
  values: CategoricalAnnotationValue[]
  id: string
}
type ContinuousAnnotationConfig = {
  name: string
  type: 'CONTINUOUS'
  description?: string | ({ [x: string]: unknown } | null) | undefined
  optimization_direction: OptimizationDirection
  lower_bound?: number | ({ [x: string]: unknown } | null) | undefined
  upper_bound?: number | ({ [x: string]: unknown } | null) | undefined
  id: string
}
type FreeformAnnotationConfig = {
  name: string
  type: 'FREEFORM'
  description?: string | ({ [x: string]: unknown } | null) | undefined
  optimization_direction?: OptimizationDirection | ({ [x: string]: unknown } | null) | undefined
  threshold?: number | ({ [x: string]: unknown } | null) | undefined
  lower_bound?: number | ({ [x: string]: unknown } | null) | undefined
  upper_bound?: number | ({ [x: string]: unknown } | null) | undefined
  id: string
}
type GetAnnotationConfigsResponseBody = {
  data: (CategoricalAnnotationConfig | ContinuousAnnotationConfig | FreeformAnnotationConfig)[]
  next_cursor: string | ({ [x: string]: unknown } | null)
}
type ValidationError = {
  loc: (string | number)[]
  msg: string
  type: string
  input?: { [x: string]: unknown } | undefined
  ctx?: { [x: string]: unknown } | undefined
}
type HTTPValidationError = { detail?: ValidationError[] | undefined }
type CategoricalAnnotationConfigData = {
  name: string
  type: 'CATEGORICAL'
  description?: string | ({ [x: string]: unknown } | null) | undefined
  optimization_direction: OptimizationDirection
  values: CategoricalAnnotationValue[]
}
type ContinuousAnnotationConfigData = {
  name: string
  type: 'CONTINUOUS'
  description?: string | ({ [x: string]: unknown } | null) | undefined
  optimization_direction: OptimizationDirection
  lower_bound?: number | ({ [x: string]: unknown } | null) | undefined
  upper_bound?: number | ({ [x: string]: unknown } | null) | undefined
}
type FreeformAnnotationConfigData = {
  name: string
  type: 'FREEFORM'
  description?: string | ({ [x: string]: unknown } | null) | undefined
  optimization_direction?: OptimizationDirection | ({ [x: string]: unknown } | null) | undefined
  threshold?: number | ({ [x: string]: unknown } | null) | undefined
  lower_bound?: number | ({ [x: string]: unknown } | null) | undefined
  upper_bound?: number | ({ [x: string]: unknown } | null) | undefined
}
type CreateAnnotationConfigData =
  | CategoricalAnnotationConfigData
  | ContinuousAnnotationConfigData
  | FreeformAnnotationConfigData
type CreateAnnotationConfigResponseBody = {
  data: CategoricalAnnotationConfig | ContinuousAnnotationConfig | FreeformAnnotationConfig
}
type GetAnnotationConfigResponseBody = {
  data: CategoricalAnnotationConfig | ContinuousAnnotationConfig | FreeformAnnotationConfig
}
type UpdateAnnotationConfigResponseBody = {
  data: CategoricalAnnotationConfig | ContinuousAnnotationConfig | FreeformAnnotationConfig
}
type DeleteAnnotationConfigResponseBody = {
  data: CategoricalAnnotationConfig | ContinuousAnnotationConfig | FreeformAnnotationConfig
}
type GetProjectAnnotationConfigsResponseBody = {
  data: (CategoricalAnnotationConfig | ContinuousAnnotationConfig | FreeformAnnotationConfig)[]
  next_cursor: string | ({ [x: string]: unknown } | null)
}
type SetProjectAnnotationConfigsRequestBody = { annotation_config_ids: string[] }
type SetProjectAnnotationConfigsResponseBody = {
  data: (CategoricalAnnotationConfig | ContinuousAnnotationConfig | FreeformAnnotationConfig)[]
  next_cursor: string | ({ [x: string]: unknown } | null)
}
type AssignAnnotationConfigToProjectResponseBody = {
  data: CategoricalAnnotationConfig | ContinuousAnnotationConfig | FreeformAnnotationConfig
}
type AnnotationResult = {
  label?: string | ({ [x: string]: unknown } | null) | undefined
  score?: number | ({ [x: string]: unknown } | null) | undefined
  explanation?: string | ({ [x: string]: unknown } | null) | undefined
}
type SpanAnnotation = {
  id: string
  created_at: string
  updated_at: string
  source: 'API' | 'APP'
  user_id: string | ({ [x: string]: unknown } | null)
  name: string
  annotator_kind: 'LLM' | 'CODE' | 'HUMAN' | 'DECISION' | 'AGENT'
  result?: AnnotationResult | ({ [x: string]: unknown } | null) | undefined
  metadata?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  identifier?: string | undefined
  span_id: string
}
type SpanAnnotationsResponseBody = {
  data: SpanAnnotation[]
  next_cursor: string | ({ [x: string]: unknown } | null)
}
type TraceAnnotation = {
  id: string
  created_at: string
  updated_at: string
  source: 'API' | 'APP'
  user_id: string | ({ [x: string]: unknown } | null)
  name: string
  annotator_kind: 'LLM' | 'CODE' | 'HUMAN' | 'DECISION' | 'AGENT'
  result?: AnnotationResult | ({ [x: string]: unknown } | null) | undefined
  metadata?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  identifier?: string | undefined
  trace_id: string
}
type TraceAnnotationsResponseBody = {
  data: TraceAnnotation[]
  next_cursor: string | ({ [x: string]: unknown } | null)
}
type SessionAnnotation = {
  id: string
  created_at: string
  updated_at: string
  source: 'API' | 'APP'
  user_id: string | ({ [x: string]: unknown } | null)
  name: string
  annotator_kind: 'LLM' | 'CODE' | 'HUMAN' | 'DECISION' | 'AGENT'
  result?: AnnotationResult | ({ [x: string]: unknown } | null) | undefined
  metadata?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  identifier?: string | undefined
  session_id: string
}
type SessionAnnotationsResponseBody = {
  data: SessionAnnotation[]
  next_cursor: string | ({ [x: string]: unknown } | null)
}
type DatasetLabel = {
  id: string
  name: string
  description: string | ({ [x: string]: unknown } | null)
  color: string
}
type GetDatasetLabelsResponseBody = {
  data: DatasetLabel[]
  next_cursor: string | ({ [x: string]: unknown } | null)
}
type CreateDatasetLabelRequestBody = {
  name: string
  color: string
  description?: string | ({ [x: string]: unknown } | null) | undefined
}
type CreateDatasetLabelResponseBody = { data: DatasetLabel }
type GetDatasetLabelResponseBody = { data: DatasetLabel }
type UpdateDatasetLabelRequestBody = {
  name?: string | ({ [x: string]: unknown } | null) | undefined
  color?: string | ({ [x: string]: unknown } | null) | undefined
  description?: string | ({ [x: string]: unknown } | null) | undefined
}
type UpdateDatasetLabelResponseBody = { data: DatasetLabel }
type ListDatasetLabelsForDatasetResponseBody = { data: DatasetLabel[] }
type SetDatasetLabelsRequestBody = { dataset_label_ids?: string[] | undefined }
type SetDatasetLabelsForDatasetResponseBody = { data: DatasetLabel[] }
type AddDatasetLabelToDatasetResponseBody = { data: DatasetLabel }
type Dataset = {
  id: string
  name: string
  description: string | ({ [x: string]: unknown } | null)
  metadata: { [x: string]: unknown }
  created_at: string
  updated_at: string
  example_count: number
}
type ListDatasetsResponseBody = {
  data: Dataset[]
  next_cursor: string | ({ [x: string]: unknown } | null)
}
type DatasetWithExampleCount = {
  id: string
  name: string
  description: string | ({ [x: string]: unknown } | null)
  metadata: { [x: string]: unknown }
  created_at: string
  updated_at: string
  example_count: number
}
type GetDatasetResponseBody = { data: DatasetWithExampleCount }
type DatasetVersion = {
  version_id: string
  description: string | ({ [x: string]: unknown } | null)
  metadata: { [x: string]: unknown }
  created_at: string
}
type ListDatasetVersionsResponseBody = {
  data: DatasetVersion[]
  next_cursor: string | ({ [x: string]: unknown } | null)
}
type UploadDatasetData = {
  dataset_id: string
  version_id: string
  num_created_examples: number
  num_updated_examples: number
  num_deleted_examples: number
}
type UploadDatasetResponseBody = { data: UploadDatasetData }
type DatasetExampleSource = { span_id: string; span_node_id: string }
type DatasetExample = {
  id: string
  node_id: string
  input: { [x: string]: unknown }
  output: { [x: string]: unknown }
  metadata: { [x: string]: unknown }
  updated_at: string
  source?: DatasetExampleSource | ({ [x: string]: unknown } | null) | undefined
}
type ListDatasetExamplesData = {
  dataset_id: string
  version_id: string
  filtered_splits?: string[] | undefined
  examples: DatasetExample[]
}
type ListDatasetExamplesResponseBody = { data: ListDatasetExamplesData }
type DatasetSplit = {
  id: string
  name: string
  description: string | ({ [x: string]: unknown } | null)
  color: string
  metadata: { [x: string]: unknown }
  example_count: number
  created_at: string
  updated_at: string
}
type ListDatasetSplitsResponseBody = {
  data: DatasetSplit[]
  next_cursor: string | ({ [x: string]: unknown } | null)
}
type CreateDatasetSplitRequestBody = {
  name: string
  description?: string | ({ [x: string]: unknown } | null) | undefined
  color?: string | ({ [x: string]: unknown } | null) | undefined
  metadata?: { [x: string]: unknown } | undefined
  example_ids?: string[] | undefined
}
type CreateDatasetSplitResponseBody = { data: DatasetSplit }
type UpdateDatasetSplitRequestBody = {
  name?: string | ({ [x: string]: unknown } | null) | undefined
  description?: string | ({ [x: string]: unknown } | null) | undefined
  color?: string | ({ [x: string]: unknown } | null) | undefined
  metadata?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  add_example_ids?: string[] | undefined
  remove_example_ids?: string[] | undefined
}
type UpdateDatasetSplitResponseBody = { data: DatasetSplit }
type CreateExperimentRequestBody = {
  name?: string | ({ [x: string]: unknown } | null) | undefined
  description?: string | ({ [x: string]: unknown } | null) | undefined
  metadata?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  version_id?: string | ({ [x: string]: unknown } | null) | undefined
  splits?: string[] | ({ [x: string]: unknown } | null) | undefined
  repetitions?: number | undefined
}
type Experiment = {
  id: string
  dataset_id: string
  dataset_version_id: string
  name: string
  description: string | ({ [x: string]: unknown } | null)
  repetitions: number
  metadata: { [x: string]: unknown }
  project_name: string | ({ [x: string]: unknown } | null)
  created_at: string
  updated_at: string
  example_count: number
  successful_run_count: number
  failed_run_count: number
  missing_run_count: number
}
type CreateExperimentResponseBody = { data: Experiment }
type ListExperimentsResponseBody = {
  data: Experiment[]
  next_cursor: string | ({ [x: string]: unknown } | null)
}
type GetExperimentResponseBody = { data: Experiment }
type UpdateExperimentRequestBody = {
  name?: string | ({ [x: string]: unknown } | null) | undefined
  description?: string | ({ [x: string]: unknown } | null) | undefined
  metadata?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
}
type UpdateExperimentResponseBody = { data: Experiment }
type IncompleteExperimentRun = { dataset_example: DatasetExample; repetition_numbers: number[] }
type GetIncompleteExperimentRunsResponseBody = {
  data: IncompleteExperimentRun[]
  next_cursor: string | ({ [x: string]: unknown } | null)
}
type ExperimentTag = {
  id: string
  name: string
  description: string | ({ [x: string]: unknown } | null)
}
type ListExperimentTagsResponseBody = { data: ExperimentTag[] }
type Identifier = string
type SetExperimentTagRequestBody = {
  name: Identifier
  description?: string | ({ [x: string]: unknown } | null) | undefined
}
type SetExperimentTagResponseBody = { data: ExperimentTag }
type CreateExperimentRunRequestBody = {
  dataset_example_id: string
  output: { [x: string]: unknown }
  repetition_number: number
  start_time: string
  end_time: string
  trace_id?: string | ({ [x: string]: unknown } | null) | undefined
  error?: string | ({ [x: string]: unknown } | null) | undefined
}
type CreateExperimentRunResponseBodyData = { id: string }
type CreateExperimentRunResponseBody = { data: CreateExperimentRunResponseBodyData }
type ExperimentRun = {
  dataset_example_id: string
  output: { [x: string]: unknown }
  repetition_number: number
  start_time: string
  end_time: string
  trace_id?: string | ({ [x: string]: unknown } | null) | undefined
  error?: string | ({ [x: string]: unknown } | null) | undefined
  id: string
  experiment_id: string
}
type ListExperimentRunsResponseBody = {
  data: ExperimentRun[]
  next_cursor: string | ({ [x: string]: unknown } | null)
}
type IncompleteExperimentEvaluation = {
  experiment_run: ExperimentRun
  dataset_example: DatasetExample
  evaluation_names: string[]
}
type GetIncompleteEvaluationsResponseBody = {
  data: IncompleteExperimentEvaluation[]
  next_cursor: string | ({ [x: string]: unknown } | null)
}
type ExperimentEvaluationResult = {
  label?: string | ({ [x: string]: unknown } | null) | undefined
  score?: number | ({ [x: string]: unknown } | null) | undefined
  explanation?: string | ({ [x: string]: unknown } | null) | undefined
}
type UpsertExperimentEvaluationRequestBody = {
  experiment_run_id: string
  name: string
  annotator_kind: 'LLM' | 'CODE' | 'HUMAN' | 'DECISION' | 'AGENT'
  start_time: string
  end_time: string
  result?: ExperimentEvaluationResult | ({ [x: string]: unknown } | null) | undefined
  error?: string | ({ [x: string]: unknown } | null) | undefined
  metadata?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  trace_id?: string | ({ [x: string]: unknown } | null) | undefined
}
type UpsertExperimentEvaluationResponseBodyData = { id: string }
type UpsertExperimentEvaluationResponseBody = { data: UpsertExperimentEvaluationResponseBodyData }
type TraceSpanData = {
  id: string
  span_id: string
  parent_id: string | ({ [x: string]: unknown } | null)
  name: string
  span_kind: string
  status_code: string
  start_time: string
  end_time: string
}
type TraceData = {
  id: string
  trace_id: string
  project_id: string
  start_time: string
  end_time: string
  token_count_prompt?: number | undefined
  token_count_completion?: number | undefined
  token_count_total?: number | undefined
  spans?: TraceSpanData[] | ({ [x: string]: unknown } | null) | undefined
}
type GetTracesResponseBody = {
  data: TraceData[]
  next_cursor: string | ({ [x: string]: unknown } | null)
}
type TraceAnnotationData = {
  name: string
  annotator_kind: 'LLM' | 'CODE' | 'HUMAN' | 'DECISION' | 'AGENT'
  result?: AnnotationResult | ({ [x: string]: unknown } | null) | undefined
  metadata?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  identifier?: string | undefined
  trace_id: string
}
type AnnotateTracesRequestBody = { data: TraceAnnotationData[] }
type InsertedTraceAnnotation = { id: string }
type AnnotateTracesResponseBody = { data: InsertedTraceAnnotation[] }
type TraceNoteData = { trace_id: string; note: string; identifier?: string | undefined }
type CreateTraceNoteRequestBody = { data: TraceNoteData }
type CreateTraceNoteResponseBody = { data: InsertedTraceAnnotation }
type TransferTracesRequestBody = {
  trace_identifiers: string[]
  destination_project_identifier: string
}
type TransferTracesData = { transferred_trace_count: number; destination_project_id: string }
type TransferTracesResponseBody = { data: TransferTracesData }
type OtlpArrayValue = { values?: OtlpAnyValue[] | ({ [x: string]: unknown } | null) | undefined }
type OtlpDoubleValue = 'Infinity' | '-Infinity' | 'NaN'
type OtlpAnyValue = {
  array_value?: OtlpArrayValue | ({ [x: string]: unknown } | null) | undefined
  bool_value?: boolean | ({ [x: string]: unknown } | null) | undefined
  bytes_value?: string | ({ [x: string]: unknown } | null) | undefined
  double_value?: number | OtlpDoubleValue | string | ({ [x: string]: unknown } | null) | undefined
  int_value?: number | string | ({ [x: string]: unknown } | null) | undefined
  kvlist_value?: ({ [x: string]: unknown } | null) | undefined
  string_value?: string | ({ [x: string]: unknown } | null) | undefined
}
type OtlpKeyValue = {
  key?: string | ({ [x: string]: unknown } | null) | undefined
  value?: OtlpAnyValue | ({ [x: string]: unknown } | null) | undefined
}
type OtlpEvent = {
  attributes?: OtlpKeyValue[] | ({ [x: string]: unknown } | null) | undefined
  dropped_attributes_count?: number | ({ [x: string]: unknown } | null) | undefined
  name?: string | ({ [x: string]: unknown } | null) | undefined
  time_unix_nano?: number | string | ({ [x: string]: unknown } | null) | undefined
}
type OtlpKind =
  | 'SPAN_KIND_UNSPECIFIED'
  | 'SPAN_KIND_INTERNAL'
  | 'SPAN_KIND_SERVER'
  | 'SPAN_KIND_CLIENT'
  | 'SPAN_KIND_PRODUCER'
  | 'SPAN_KIND_CONSUMER'
type OtlpStatus = {
  code?: number | ({ [x: string]: unknown } | null) | undefined
  message?: string | ({ [x: string]: unknown } | null) | undefined
}
type OtlpSpan = {
  attributes?: OtlpKeyValue[] | ({ [x: string]: unknown } | null) | undefined
  dropped_attributes_count?: number | ({ [x: string]: unknown } | null) | undefined
  dropped_events_count?: number | ({ [x: string]: unknown } | null) | undefined
  dropped_links_count?: number | ({ [x: string]: unknown } | null) | undefined
  end_time_unix_nano?: number | string | ({ [x: string]: unknown } | null) | undefined
  events?: OtlpEvent[] | ({ [x: string]: unknown } | null) | undefined
  flags?: number | ({ [x: string]: unknown } | null) | undefined
  kind?: OtlpKind | number | ({ [x: string]: unknown } | null) | undefined
  links?: ({ [x: string]: unknown } | null) | undefined
  name?: string | ({ [x: string]: unknown } | null) | undefined
  parent_span_id?: string | ({ [x: string]: unknown } | null) | undefined
  span_id?: string | ({ [x: string]: unknown } | null) | undefined
  start_time_unix_nano?: number | string | ({ [x: string]: unknown } | null) | undefined
  status?: OtlpStatus | ({ [x: string]: unknown } | null) | undefined
  trace_id?: string | ({ [x: string]: unknown } | null) | undefined
  trace_state?: string | ({ [x: string]: unknown } | null) | undefined
}
type OtlpSpansResponseBody = {
  data: OtlpSpan[]
  next_cursor: string | ({ [x: string]: unknown } | null)
}
type SpanContext = { trace_id: string; span_id: string }
type SpanEvent = {
  name: string
  timestamp: string
  attributes?: { [x: string]: unknown } | undefined
}
type Span = {
  id?: string | undefined
  name: string
  context: SpanContext
  span_kind: string
  parent_id?: string | ({ [x: string]: unknown } | null) | undefined
  start_time: string
  end_time: string
  status_code: string
  status_message?: string | undefined
  attributes?: { [x: string]: unknown } | undefined
  events?: SpanEvent[] | undefined
}
type SpansResponseBody = { data: Span[]; next_cursor: string | ({ [x: string]: unknown } | null) }
type CreateSpansRequestBody = { data: Span[] }
type CreateSpansResponseBody = { total_received: number; total_queued: number }
type SpanAnnotationData = {
  name: string
  annotator_kind: 'LLM' | 'CODE' | 'HUMAN' | 'DECISION' | 'AGENT'
  result?: AnnotationResult | ({ [x: string]: unknown } | null) | undefined
  metadata?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  identifier?: string | undefined
  span_id: string
}
type AnnotateSpansRequestBody = { data: SpanAnnotationData[] }
type InsertedSpanAnnotation = { id: string }
type AnnotateSpansResponseBody = { data: InsertedSpanAnnotation[] }
type SpanNoteData = { span_id: string; note: string; identifier?: string | undefined }
type CreateSpanNoteRequestBody = { data: SpanNoteData }
type CreateSpanNoteResponseBody = { data: InsertedSpanAnnotation }
type Prompt = {
  name: Identifier
  description?: string | ({ [x: string]: unknown } | null) | undefined
  source_prompt_id?: string | ({ [x: string]: unknown } | null) | undefined
  metadata?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  id: string
}
type GetPromptsResponseBody = {
  data: Prompt[]
  next_cursor: string | ({ [x: string]: unknown } | null)
}
type PromptData = {
  name: Identifier
  description?: string | ({ [x: string]: unknown } | null) | undefined
  source_prompt_id?: string | ({ [x: string]: unknown } | null) | undefined
  metadata?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
}
type ModelProvider =
  | 'OPENAI'
  | 'AZURE_OPENAI'
  | 'ANTHROPIC'
  | 'GOOGLE'
  | 'DEEPSEEK'
  | 'XAI'
  | 'OLLAMA'
  | 'AWS'
  | 'CEREBRAS'
  | 'FIREWORKS'
  | 'GROQ'
  | 'MOONSHOT'
  | 'MINIMAX'
  | 'PERPLEXITY'
  | 'TOGETHER'
  | 'ZAI'
  | 'META'
type TextContentPart = { type: 'text'; text: string }
type ToolCallFunction = { type: 'function'; name: string; arguments: string }
type ToolCallContentPart = { type: 'tool_call'; tool_call_id: string; tool_call: ToolCallFunction }
type ToolResultContentPart = {
  type: 'tool_result'
  tool_call_id: string
  tool_result:
    | boolean
    | number
    | number
    | string
    | { [x: string]: unknown }
    | { [x: string]: unknown }[]
    | ({ [x: string]: unknown } | null)
}
type PromptMessage = {
  role: 'user' | 'assistant' | 'model' | 'ai' | 'tool' | 'system' | 'developer'
  content: string | (TextContentPart | ToolCallContentPart | ToolResultContentPart)[]
}
type PromptChatTemplate = { type: 'chat'; messages: PromptMessage[] }
type PromptStringTemplate = { type: 'string'; template: string }
type PromptTemplateType = 'STR' | 'CHAT'
type PromptTemplateFormat = 'MUSTACHE' | 'F_STRING' | 'NONE'
type PromptOpenAIInvocationParametersContent = {
  temperature?: number | undefined
  max_tokens?: number | undefined
  max_completion_tokens?: number | undefined
  frequency_penalty?: number | undefined
  presence_penalty?: number | undefined
  top_p?: number | undefined
  seed?: number | undefined
  stop?: string[] | undefined
  reasoning_effort?: 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | undefined
  extra_body?: { [x: string]: unknown } | undefined
}
type PromptOpenAIInvocationParameters = {
  type: 'openai'
  openai: PromptOpenAIInvocationParametersContent
}
type PromptAzureOpenAIInvocationParametersContent = {
  temperature?: number | undefined
  max_tokens?: number | undefined
  max_completion_tokens?: number | undefined
  frequency_penalty?: number | undefined
  presence_penalty?: number | undefined
  top_p?: number | undefined
  seed?: number | undefined
  stop?: string[] | undefined
  reasoning_effort?: 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | undefined
  extra_body?: { [x: string]: unknown } | undefined
}
type PromptAzureOpenAIInvocationParameters = {
  type: 'azure_openai'
  azure_openai: PromptAzureOpenAIInvocationParametersContent
}
type PromptAnthropicOutputConfig = {
  effort?: 'low' | 'medium' | 'high' | 'xhigh' | 'max' | undefined
}
type PromptAnthropicThinkingConfigDisabled = { type: 'disabled' }
type PromptAnthropicThinkingConfigEnabled = {
  type: 'enabled'
  budget_tokens: number
  display?: 'summarized' | 'omitted' | undefined
}
type PromptAnthropicThinkingConfigAdaptive = {
  type: 'adaptive'
  display?: 'summarized' | 'omitted' | undefined
}
type PromptAnthropicInvocationParametersContent = {
  max_tokens: number
  temperature?: number | undefined
  top_p?: number | undefined
  stop_sequences?: string[] | undefined
  output_config?: PromptAnthropicOutputConfig | undefined
  thinking?:
    | PromptAnthropicThinkingConfigDisabled
    | PromptAnthropicThinkingConfigEnabled
    | PromptAnthropicThinkingConfigAdaptive
    | undefined
  extra_body?: { [x: string]: unknown } | undefined
}
type PromptAnthropicInvocationParameters = {
  type: 'anthropic'
  anthropic: PromptAnthropicInvocationParametersContent
}
type PromptGoogleThinkingConfig = {
  thinking_budget?: number | undefined
  thinking_level?: 'minimal' | 'low' | 'medium' | 'high' | undefined
  include_thoughts?: boolean | undefined
}
type PromptGoogleInvocationParametersContent = {
  temperature?: number | undefined
  max_output_tokens?: number | undefined
  stop_sequences?: string[] | undefined
  presence_penalty?: number | undefined
  frequency_penalty?: number | undefined
  top_p?: number | undefined
  top_k?: number | undefined
  thinking_config?: PromptGoogleThinkingConfig | undefined
}
type PromptGoogleInvocationParameters = {
  type: 'google'
  google: PromptGoogleInvocationParametersContent
}
type PromptDeepSeekInvocationParametersContent = {
  temperature?: number | undefined
  max_tokens?: number | undefined
  max_completion_tokens?: number | undefined
  frequency_penalty?: number | undefined
  presence_penalty?: number | undefined
  top_p?: number | undefined
  seed?: number | undefined
  stop?: string[] | undefined
  reasoning_effort?: 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | undefined
  extra_body?: { [x: string]: unknown } | undefined
}
type PromptDeepSeekInvocationParameters = {
  type: 'deepseek'
  deepseek: PromptDeepSeekInvocationParametersContent
}
type PromptXAIInvocationParametersContent = {
  temperature?: number | undefined
  max_tokens?: number | undefined
  max_completion_tokens?: number | undefined
  frequency_penalty?: number | undefined
  presence_penalty?: number | undefined
  top_p?: number | undefined
  seed?: number | undefined
  stop?: string[] | undefined
  reasoning_effort?: 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | undefined
  extra_body?: { [x: string]: unknown } | undefined
}
type PromptXAIInvocationParameters = { type: 'xai'; xai: PromptXAIInvocationParametersContent }
type PromptOllamaInvocationParametersContent = {
  temperature?: number | undefined
  max_tokens?: number | undefined
  max_completion_tokens?: number | undefined
  frequency_penalty?: number | undefined
  presence_penalty?: number | undefined
  top_p?: number | undefined
  seed?: number | undefined
  stop?: string[] | undefined
  reasoning_effort?: 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | undefined
  extra_body?: { [x: string]: unknown } | undefined
}
type PromptOllamaInvocationParameters = {
  type: 'ollama'
  ollama: PromptOllamaInvocationParametersContent
}
type PromptAwsInvocationParametersContent = {
  max_tokens?: number | undefined
  temperature?: number | undefined
  top_p?: number | undefined
  stop_sequences?: string[] | undefined
}
type PromptAwsInvocationParameters = { type: 'aws'; aws: PromptAwsInvocationParametersContent }
type PromptCerebrasInvocationParametersContent = {
  temperature?: number | undefined
  max_tokens?: number | undefined
  max_completion_tokens?: number | undefined
  frequency_penalty?: number | undefined
  presence_penalty?: number | undefined
  top_p?: number | undefined
  seed?: number | undefined
  stop?: string[] | undefined
  reasoning_effort?: 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | undefined
  extra_body?: { [x: string]: unknown } | undefined
}
type PromptCerebrasInvocationParameters = {
  type: 'cerebras'
  cerebras: PromptCerebrasInvocationParametersContent
}
type PromptFireworksInvocationParametersContent = {
  temperature?: number | undefined
  max_tokens?: number | undefined
  max_completion_tokens?: number | undefined
  frequency_penalty?: number | undefined
  presence_penalty?: number | undefined
  top_p?: number | undefined
  seed?: number | undefined
  stop?: string[] | undefined
  reasoning_effort?: 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | undefined
  extra_body?: { [x: string]: unknown } | undefined
}
type PromptFireworksInvocationParameters = {
  type: 'fireworks'
  fireworks: PromptFireworksInvocationParametersContent
}
type PromptGroqInvocationParametersContent = {
  temperature?: number | undefined
  max_tokens?: number | undefined
  max_completion_tokens?: number | undefined
  frequency_penalty?: number | undefined
  presence_penalty?: number | undefined
  top_p?: number | undefined
  seed?: number | undefined
  stop?: string[] | undefined
  reasoning_effort?: 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | undefined
  extra_body?: { [x: string]: unknown } | undefined
}
type PromptGroqInvocationParameters = { type: 'groq'; groq: PromptGroqInvocationParametersContent }
type PromptMoonshotInvocationParametersContent = {
  temperature?: number | undefined
  max_tokens?: number | undefined
  max_completion_tokens?: number | undefined
  frequency_penalty?: number | undefined
  presence_penalty?: number | undefined
  top_p?: number | undefined
  seed?: number | undefined
  stop?: string[] | undefined
  reasoning_effort?: 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | undefined
  extra_body?: { [x: string]: unknown } | undefined
}
type PromptMoonshotInvocationParameters = {
  type: 'moonshot'
  moonshot: PromptMoonshotInvocationParametersContent
}
type PromptPerplexityInvocationParametersContent = {
  temperature?: number | undefined
  max_tokens?: number | undefined
  max_completion_tokens?: number | undefined
  frequency_penalty?: number | undefined
  presence_penalty?: number | undefined
  top_p?: number | undefined
  seed?: number | undefined
  stop?: string[] | undefined
  reasoning_effort?: 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | undefined
  extra_body?: { [x: string]: unknown } | undefined
}
type PromptPerplexityInvocationParameters = {
  type: 'perplexity'
  perplexity: PromptPerplexityInvocationParametersContent
}
type PromptTogetherInvocationParametersContent = {
  temperature?: number | undefined
  max_tokens?: number | undefined
  max_completion_tokens?: number | undefined
  frequency_penalty?: number | undefined
  presence_penalty?: number | undefined
  top_p?: number | undefined
  seed?: number | undefined
  stop?: string[] | undefined
  reasoning_effort?: 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | undefined
  extra_body?: { [x: string]: unknown } | undefined
}
type PromptTogetherInvocationParameters = {
  type: 'together'
  together: PromptTogetherInvocationParametersContent
}
type PromptZAIInvocationParametersContent = {
  temperature?: number | undefined
  max_tokens?: number | undefined
  max_completion_tokens?: number | undefined
  frequency_penalty?: number | undefined
  presence_penalty?: number | undefined
  top_p?: number | undefined
  seed?: number | undefined
  stop?: string[] | undefined
  reasoning_effort?: 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | undefined
  extra_body?: { [x: string]: unknown } | undefined
}
type PromptZAIInvocationParameters = { type: 'zai'; zai: PromptZAIInvocationParametersContent }
type PromptMetaInvocationParametersContent = {
  temperature?: number | undefined
  max_tokens?: number | undefined
  max_completion_tokens?: number | undefined
  frequency_penalty?: number | undefined
  presence_penalty?: number | undefined
  top_p?: number | undefined
  seed?: number | undefined
  stop?: string[] | undefined
  reasoning_effort?: 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | undefined
  extra_body?: { [x: string]: unknown } | undefined
}
type PromptMetaInvocationParameters = { type: 'meta'; meta: PromptMetaInvocationParametersContent }
type PromptToolFunctionDefinition = {
  name: string
  description?: string | undefined
  parameters?: { [x: string]: unknown } | undefined
  strict?: boolean | undefined
}
type PromptToolFunction = { type: 'function'; function: PromptToolFunctionDefinition }
type PromptToolRaw = { type: 'raw'; raw: { [x: string]: unknown } }
type PromptToolChoiceNone = { type: 'none' }
type PromptToolChoiceZeroOrMore = { type: 'zero_or_more' }
type PromptToolChoiceOneOrMore = { type: 'one_or_more' }
type PromptToolChoiceSpecificFunctionTool = { type: 'specific_function'; function_name: string }
type PromptTools = {
  type: 'tools'
  tools: (PromptToolFunction | PromptToolRaw)[]
  tool_choice?:
    | PromptToolChoiceNone
    | PromptToolChoiceZeroOrMore
    | PromptToolChoiceOneOrMore
    | PromptToolChoiceSpecificFunctionTool
    | undefined
  disable_parallel_tool_calls?: boolean | undefined
}
type PromptResponseFormatJSONSchemaDefinition = {
  name: string
  description?: string | undefined
  schema?: { [x: string]: unknown } | undefined
  strict?: boolean | undefined
}
type PromptResponseFormatJSONSchema = {
  type: 'json_schema'
  json_schema: PromptResponseFormatJSONSchemaDefinition
}
type PromptVersionData = {
  description?: string | ({ [x: string]: unknown } | null) | undefined
  metadata?: { [x: string]: unknown } | undefined
  model_provider: ModelProvider
  model_name: string
  template: PromptChatTemplate | PromptStringTemplate
  template_type: PromptTemplateType
  template_format: PromptTemplateFormat
  invocation_parameters:
    | PromptOpenAIInvocationParameters
    | PromptAzureOpenAIInvocationParameters
    | PromptAnthropicInvocationParameters
    | PromptGoogleInvocationParameters
    | PromptDeepSeekInvocationParameters
    | PromptXAIInvocationParameters
    | PromptOllamaInvocationParameters
    | PromptAwsInvocationParameters
    | PromptCerebrasInvocationParameters
    | PromptFireworksInvocationParameters
    | PromptGroqInvocationParameters
    | PromptMoonshotInvocationParameters
    | PromptPerplexityInvocationParameters
    | PromptTogetherInvocationParameters
    | PromptZAIInvocationParameters
    | PromptMetaInvocationParameters
  tools?: PromptTools | ({ [x: string]: unknown } | null) | undefined
  response_format?: PromptResponseFormatJSONSchema | ({ [x: string]: unknown } | null) | undefined
}
type CreatePromptRequestBody = { prompt: PromptData; version: PromptVersionData }
type PromptVersion = {
  description?: string | ({ [x: string]: unknown } | null) | undefined
  metadata?: { [x: string]: unknown } | undefined
  model_provider: ModelProvider
  model_name: string
  template: PromptChatTemplate | PromptStringTemplate
  template_type: PromptTemplateType
  template_format: PromptTemplateFormat
  invocation_parameters:
    | PromptOpenAIInvocationParameters
    | PromptAzureOpenAIInvocationParameters
    | PromptAnthropicInvocationParameters
    | PromptGoogleInvocationParameters
    | PromptDeepSeekInvocationParameters
    | PromptXAIInvocationParameters
    | PromptOllamaInvocationParameters
    | PromptAwsInvocationParameters
    | PromptCerebrasInvocationParameters
    | PromptFireworksInvocationParameters
    | PromptGroqInvocationParameters
    | PromptMoonshotInvocationParameters
    | PromptPerplexityInvocationParameters
    | PromptTogetherInvocationParameters
    | PromptZAIInvocationParameters
    | PromptMetaInvocationParameters
  tools?: PromptTools | ({ [x: string]: unknown } | null) | undefined
  response_format?: PromptResponseFormatJSONSchema | ({ [x: string]: unknown } | null) | undefined
  id: string
  created_at: string
}
type CreatePromptResponseBody = { data: PromptVersion }
type GetPromptVersionsResponseBody = {
  data: PromptVersion[]
  next_cursor: string | ({ [x: string]: unknown } | null)
}
type PromptVersionTagData = {
  name: Identifier
  description?: string | ({ [x: string]: unknown } | null) | undefined
}
type CreatePromptVersionRequestBody = {
  version: PromptVersionData
  tags?: PromptVersionTagData[] | ({ [x: string]: unknown } | null) | undefined
}
type CreatePromptVersionResponseBody = { data: PromptVersion }
type GetPromptResponseBody = { data: PromptVersion }
type PromptVersionTag = {
  name: Identifier
  description?: string | ({ [x: string]: unknown } | null) | undefined
  id: string
}
type GetPromptVersionTagsResponseBody = {
  data: PromptVersionTag[]
  next_cursor: string | ({ [x: string]: unknown } | null)
}
type PatchPromptRequestBody = {
  description?: string | ({ [x: string]: unknown } | null) | undefined
  metadata?: { [x: string]: unknown } | undefined
}
type PatchPromptResponseBody = { data: Prompt }
type Project = {
  name: string
  description?: string | ({ [x: string]: unknown } | null) | undefined
  id: string
}
type GetProjectsResponseBody = {
  data: Project[]
  next_cursor: string | ({ [x: string]: unknown } | null)
}
type CreateProjectRequestBody = {
  name: string
  description?: string | ({ [x: string]: unknown } | null) | undefined
}
type CreateProjectResponseBody = { data: Project }
type GetProjectResponseBody = { data: Project }
type UpdateProjectRequestBody = {
  description?: string | ({ [x: string]: unknown } | null) | undefined
}
type UpdateProjectResponseBody = { data: Project }
type SetProjectRetentionPolicyRequestBody = {
  policy_id: string | ({ [x: string]: unknown } | null)
}
type ProjectRetentionPolicyData = {
  project_id: string
  policy_id: string | ({ [x: string]: unknown } | null)
}
type SetProjectRetentionPolicyResponseBody = { data: ProjectRetentionPolicyData }
type BuiltInModelProvider = { provider: ModelProvider; name: string }
type GetModelProvidersResponseBody = { data: BuiltInModelProvider[] }
type CustomModelProvider = {
  id: string
  name: string
  description?: string | ({ [x: string]: unknown } | null) | undefined
  provider: string
  sdk: 'openai' | 'azure_openai' | 'anthropic' | 'google_genai' | 'aws_bedrock'
  created_at: string
  updated_at: string
}
type GetCustomModelProvidersResponseBody = {
  data: CustomModelProvider[]
  next_cursor: string | ({ [x: string]: unknown } | null)
}
type SessionTraceData = { id: string; trace_id: string; start_time: string; end_time: string }
type SessionData = {
  id: string
  session_id: string
  project_id: string
  start_time: string
  end_time: string
  traces: SessionTraceData[]
  token_count_prompt?: number | undefined
  token_count_completion?: number | undefined
  token_count_total?: number | undefined
}
type GetSessionResponseBody = { data: SessionData }
type DeleteSessionsRequestBody = { session_identifiers: string[] }
type GetSessionsResponseBody = {
  data: SessionData[]
  next_cursor: string | ({ [x: string]: unknown } | null)
}
type SessionAnnotationData = {
  name: string
  annotator_kind: 'LLM' | 'CODE' | 'HUMAN' | 'DECISION' | 'AGENT'
  result?: AnnotationResult | ({ [x: string]: unknown } | null) | undefined
  metadata?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  identifier?: string | undefined
  session_id: string
}
type AnnotateSessionsRequestBody = { data: SessionAnnotationData[] }
type InsertedSessionAnnotation = { id: string }
type AnnotateSessionsResponseBody = { data: InsertedSessionAnnotation[] }
type SessionNoteData = { session_id: string; note: string; identifier?: string | undefined }
type CreateSessionNoteRequestBody = { data: SessionNoteData }
type CreateSessionNoteResponseBody = { data: InsertedSessionAnnotation }
type SpanDocumentAnnotationData = {
  name: string
  annotator_kind: 'LLM' | 'CODE' | 'HUMAN' | 'DECISION' | 'AGENT'
  result?: AnnotationResult | ({ [x: string]: unknown } | null) | undefined
  metadata?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  identifier?: string | undefined
  span_id: string
  document_position: number
}
type AnnotateSpanDocumentsRequestBody = { data: SpanDocumentAnnotationData[] }
type InsertedSpanDocumentAnnotation = { id: string }
type AnnotateSpanDocumentsResponseBody = { data: InsertedSpanDocumentAnnotation[] }
type LocalUser = {
  id: string
  created_at: string
  updated_at: string
  email: string
  username: string
  role: 'SYSTEM' | 'ADMIN' | 'MEMBER' | 'VIEWER'
  auth_method: 'LOCAL'
  password?: string | undefined
  password_needs_reset: boolean
}
type OAuth2User = {
  id: string
  created_at: string
  updated_at: string
  email: string
  username: string
  role: 'SYSTEM' | 'ADMIN' | 'MEMBER' | 'VIEWER'
  auth_method: 'OAUTH2'
  oauth2_client_id?: string | undefined
  oauth2_user_id?: string | undefined
  profile_picture_url?: string | undefined
}
type LDAPUser = {
  id: string
  created_at: string
  updated_at: string
  email: string
  username: string
  role: 'SYSTEM' | 'ADMIN' | 'MEMBER' | 'VIEWER'
  auth_method: 'LDAP'
}
type AnonymousUser = { auth_method: 'ANONYMOUS' }
type GetViewerResponseBody = { data: LocalUser | OAuth2User | LDAPUser | AnonymousUser }
type GetUsersResponseBody = {
  data: (LocalUser | OAuth2User | LDAPUser)[]
  next_cursor: string | ({ [x: string]: unknown } | null)
}
type LocalUserData = {
  email: string
  username: string
  role: 'SYSTEM' | 'ADMIN' | 'MEMBER' | 'VIEWER'
  auth_method: 'LOCAL'
  password?: string | undefined
}
type OAuth2UserData = {
  email: string
  username: string
  role: 'SYSTEM' | 'ADMIN' | 'MEMBER' | 'VIEWER'
  auth_method: 'OAUTH2'
  oauth2_client_id?: string | undefined
  oauth2_user_id?: string | undefined
}
type LDAPUserData = {
  email: string
  username: string
  role: 'SYSTEM' | 'ADMIN' | 'MEMBER' | 'VIEWER'
  auth_method: 'LDAP'
}
type CreateUserRequestBody = {
  user: LocalUserData | OAuth2UserData | LDAPUserData
  send_welcome_email?: boolean | undefined
}
type CreateUserResponseBody = { data: LocalUser | OAuth2User | LDAPUser }
type SecretKeyValue = { key: string; value: string | ({ [x: string]: unknown } | null) }
type UpsertOrDeleteSecretsRequest = { secrets: SecretKeyValue[] }
type UpsertOrDeleteSecretsResult = { upserted_keys: string[]; deleted_keys: string[] }
type ResponseBodyUpsertOrDeleteSecretsResult = { data: UpsertOrDeleteSecretsResult }
type ApiKey = {
  id: string
  name: string
  description?: string | ({ [x: string]: unknown } | null) | undefined
  created_at: string
  expires_at?: string | ({ [x: string]: unknown } | null) | undefined
}
type GetApiKeysResponseBody = { data: ApiKey[] }
type ApiKeyData = {
  name: string
  description?: string | ({ [x: string]: unknown } | null) | undefined
  expires_at?: string | ({ [x: string]: unknown } | null) | undefined
}
type CreateApiKeyRequestBody = { data: ApiKeyData }
type CreatedApiKey = {
  id: string
  name: string
  description?: string | ({ [x: string]: unknown } | null) | undefined
  created_at: string
  expires_at?: string | ({ [x: string]: unknown } | null) | undefined
  key: string
}
type CreateApiKeyResponseBody = { data: CreatedApiKey }
type ApiKeyUser = {
  id: string
  username: string
  email: string | ({ [x: string]: unknown } | null)
}
type UserApiKey = {
  id: string
  name: string
  description?: string | ({ [x: string]: unknown } | null) | undefined
  created_at: string
  expires_at?: string | ({ [x: string]: unknown } | null) | undefined
  user: ApiKeyUser
}
type GetAllUserApiKeysResponseBody = {
  data: UserApiKey[]
  next_cursor: string | ({ [x: string]: unknown } | null)
}
type ChatCompletionTextPart = { type: 'text'; text: string }
type ChatCompletionRequestMessage = {
  role: 'system' | 'developer' | 'user' | 'assistant'
  content: string | ChatCompletionTextPart[]
}
type ChatCompletionStreamOptions = { include_usage?: boolean | undefined }
type CreateChatCompletionRequestBody = {
  model: string
  messages: ChatCompletionRequestMessage[]
  stream?: boolean | undefined
  temperature?: number | ({ [x: string]: unknown } | null) | undefined
  top_p?: number | ({ [x: string]: unknown } | null) | undefined
  max_tokens?: number | ({ [x: string]: unknown } | null) | undefined
  max_completion_tokens?: number | ({ [x: string]: unknown } | null) | undefined
  stop?: string | string[] | ({ [x: string]: unknown } | null) | undefined
  frequency_penalty?: number | ({ [x: string]: unknown } | null) | undefined
  presence_penalty?: number | ({ [x: string]: unknown } | null) | undefined
  seed?: number | ({ [x: string]: unknown } | null) | undefined
  n?: number | ({ [x: string]: unknown } | null) | undefined
  stream_options?: ChatCompletionStreamOptions | ({ [x: string]: unknown } | null) | undefined
  tools?: { [x: string]: unknown }[] | ({ [x: string]: unknown } | null) | undefined
  tool_choice?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  response_format?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
}
type ChatCompletionMessage = { role?: 'assistant' | undefined; content: string }
type ChatCompletionChoice = {
  index?: number | undefined
  message: ChatCompletionMessage
  finish_reason: string
}
type ChatCompletionUsagePromptTokensDetails = { cached_tokens: number }
type ChatCompletionUsage = {
  prompt_tokens: number
  completion_tokens: number
  total_tokens: number
  prompt_tokens_details?:
    | ChatCompletionUsagePromptTokensDetails
    | ({ [x: string]: unknown } | null)
    | undefined
}
type ChatCompletion = {
  id: string
  object?: 'chat.completion' | undefined
  created: number
  model: string
  choices: ChatCompletionChoice[]
  usage: ChatCompletionUsage
}
type ChatCompletionErrorDetail = {
  message: string
  type: string
  param?: string | ({ [x: string]: unknown } | null) | undefined
  code?: string | ({ [x: string]: unknown } | null) | undefined
}
type ChatCompletionErrorResponse = { error: ChatCompletionErrorDetail }
type TurnTraceContext = { traceId: string; rootSpanId: string; startedAt: string }
type AssistantMessageMetadataUsageTokens = { prompt: number; completion: number; total: number }
type AssistantMessageMetadataUsageCacheTokenDetails = { cacheRead: number; cacheWrite: number }
type AssistantMessageMetadataUsage = {
  tokens: AssistantMessageMetadataUsageTokens
  promptDetails?:
    | AssistantMessageMetadataUsageCacheTokenDetails
    | ({ [x: string]: unknown } | null)
    | undefined
}
type LegacyAssistantMessageMetadata = {
  type?: 'assistant' | undefined
  sessionId: string
  turnTraceContext?: TurnTraceContext | ({ [x: string]: unknown } | null) | undefined
  usage?: AssistantMessageMetadataUsage | ({ [x: string]: unknown } | null) | undefined
  interrupted?: boolean | undefined
}
type TextUIPart = {
  type?: 'text' | undefined
  text: string
  state?: 'streaming' | 'done' | ({ [x: string]: unknown } | null) | undefined
  providerMetadata?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
}
type ReasoningUIPart = {
  type?: 'reasoning' | undefined
  id?: string | ({ [x: string]: unknown } | null) | undefined
  text: string
  state?: 'streaming' | 'done' | ({ [x: string]: unknown } | null) | undefined
  providerMetadata?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
}
type ToolApprovalRequested = { id: string }
type ToolApprovalResponded = {
  id: string
  approved: boolean
  reason?: string | ({ [x: string]: unknown } | null) | undefined
}
type PydanticAiUiVercelAiRequestTypesToolInputStreamingPart = {
  type: string
  toolCallId: string
  title?: string | ({ [x: string]: unknown } | null) | undefined
  state?: 'input-streaming' | undefined
  input?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  providerExecuted?: boolean | ({ [x: string]: unknown } | null) | undefined
  callProviderMetadata?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  approval?:
    | ToolApprovalRequested
    | ToolApprovalResponded
    | ({ [x: string]: unknown } | null)
    | undefined
}
type ToolInputAvailablePart = {
  type: string
  toolCallId: string
  title?: string | ({ [x: string]: unknown } | null) | undefined
  state?: 'input-available' | undefined
  input?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  providerExecuted?: boolean | ({ [x: string]: unknown } | null) | undefined
  callProviderMetadata?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  approval?:
    | ToolApprovalRequested
    | ToolApprovalResponded
    | ({ [x: string]: unknown } | null)
    | undefined
}
type PydanticAiUiVercelAiRequestTypesToolOutputAvailablePart = {
  type: string
  toolCallId: string
  title?: string | ({ [x: string]: unknown } | null) | undefined
  state?: 'output-available' | undefined
  input?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  output?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  providerExecuted?: boolean | ({ [x: string]: unknown } | null) | undefined
  callProviderMetadata?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  preliminary?: boolean | ({ [x: string]: unknown } | null) | undefined
  approval?:
    | ToolApprovalRequested
    | ToolApprovalResponded
    | ({ [x: string]: unknown } | null)
    | undefined
}
type PydanticAiUiVercelAiRequestTypesToolOutputErrorPart = {
  type: string
  toolCallId: string
  title?: string | ({ [x: string]: unknown } | null) | undefined
  state?: 'output-error' | undefined
  input?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  rawInput?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  errorText: string
  providerExecuted?: boolean | ({ [x: string]: unknown } | null) | undefined
  callProviderMetadata?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  approval?:
    | ToolApprovalRequested
    | ToolApprovalResponded
    | ({ [x: string]: unknown } | null)
    | undefined
}
type ToolApprovalRequestedPart = {
  type: string
  toolCallId: string
  title?: string | ({ [x: string]: unknown } | null) | undefined
  state?: 'approval-requested' | undefined
  input?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  providerExecuted?: boolean | ({ [x: string]: unknown } | null) | undefined
  callProviderMetadata?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  approval?:
    | ToolApprovalRequested
    | ToolApprovalResponded
    | ({ [x: string]: unknown } | null)
    | undefined
}
type ToolApprovalRespondedPart = {
  type: string
  toolCallId: string
  title?: string | ({ [x: string]: unknown } | null) | undefined
  state?: 'approval-responded' | undefined
  input?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  providerExecuted?: boolean | ({ [x: string]: unknown } | null) | undefined
  callProviderMetadata?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  approval?:
    | ToolApprovalRequested
    | ToolApprovalResponded
    | ({ [x: string]: unknown } | null)
    | undefined
}
type ToolOutputDeniedPart = {
  type: string
  toolCallId: string
  title?: string | ({ [x: string]: unknown } | null) | undefined
  state?: 'output-denied' | undefined
  input?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  providerExecuted?: boolean | ({ [x: string]: unknown } | null) | undefined
  callProviderMetadata?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  approval?:
    | ToolApprovalRequested
    | ToolApprovalResponded
    | ({ [x: string]: unknown } | null)
    | undefined
}
type PydanticAiUiVercelAiRequestTypesDynamicToolInputStreamingPart = {
  type?: 'dynamic-tool' | undefined
  toolName: string
  toolCallId: string
  title?: string | ({ [x: string]: unknown } | null) | undefined
  state?: 'input-streaming' | undefined
  input?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  providerExecuted?: boolean | ({ [x: string]: unknown } | null) | undefined
  callProviderMetadata?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  approval?:
    | ToolApprovalRequested
    | ToolApprovalResponded
    | ({ [x: string]: unknown } | null)
    | undefined
}
type DynamicToolInputAvailablePart = {
  type?: 'dynamic-tool' | undefined
  toolName: string
  toolCallId: string
  title?: string | ({ [x: string]: unknown } | null) | undefined
  state?: 'input-available' | undefined
  input: { [x: string]: unknown }
  providerExecuted?: boolean | ({ [x: string]: unknown } | null) | undefined
  callProviderMetadata?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  approval?:
    | ToolApprovalRequested
    | ToolApprovalResponded
    | ({ [x: string]: unknown } | null)
    | undefined
}
type PydanticAiUiVercelAiRequestTypesDynamicToolOutputAvailablePart = {
  type?: 'dynamic-tool' | undefined
  toolName: string
  toolCallId: string
  title?: string | ({ [x: string]: unknown } | null) | undefined
  state?: 'output-available' | undefined
  input: { [x: string]: unknown }
  output: { [x: string]: unknown }
  providerExecuted?: boolean | ({ [x: string]: unknown } | null) | undefined
  callProviderMetadata?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  preliminary?: boolean | ({ [x: string]: unknown } | null) | undefined
  approval?:
    | ToolApprovalRequested
    | ToolApprovalResponded
    | ({ [x: string]: unknown } | null)
    | undefined
}
type PydanticAiUiVercelAiRequestTypesDynamicToolOutputErrorPart = {
  type?: 'dynamic-tool' | undefined
  toolName: string
  toolCallId: string
  title?: string | ({ [x: string]: unknown } | null) | undefined
  state?: 'output-error' | undefined
  input: { [x: string]: unknown }
  errorText: string
  providerExecuted?: boolean | ({ [x: string]: unknown } | null) | undefined
  callProviderMetadata?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  approval?:
    | ToolApprovalRequested
    | ToolApprovalResponded
    | ({ [x: string]: unknown } | null)
    | undefined
}
type DynamicToolApprovalRequestedPart = {
  type?: 'dynamic-tool' | undefined
  toolName: string
  toolCallId: string
  title?: string | ({ [x: string]: unknown } | null) | undefined
  state?: 'approval-requested' | undefined
  input: { [x: string]: unknown }
  providerExecuted?: boolean | ({ [x: string]: unknown } | null) | undefined
  callProviderMetadata?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  approval?:
    | ToolApprovalRequested
    | ToolApprovalResponded
    | ({ [x: string]: unknown } | null)
    | undefined
}
type DynamicToolApprovalRespondedPart = {
  type?: 'dynamic-tool' | undefined
  toolName: string
  toolCallId: string
  title?: string | ({ [x: string]: unknown } | null) | undefined
  state?: 'approval-responded' | undefined
  input: { [x: string]: unknown }
  providerExecuted?: boolean | ({ [x: string]: unknown } | null) | undefined
  callProviderMetadata?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  approval?:
    | ToolApprovalRequested
    | ToolApprovalResponded
    | ({ [x: string]: unknown } | null)
    | undefined
}
type DynamicToolOutputDeniedPart = {
  type?: 'dynamic-tool' | undefined
  toolName: string
  toolCallId: string
  title?: string | ({ [x: string]: unknown } | null) | undefined
  state?: 'output-denied' | undefined
  input: { [x: string]: unknown }
  providerExecuted?: boolean | ({ [x: string]: unknown } | null) | undefined
  callProviderMetadata?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  approval?:
    | ToolApprovalRequested
    | ToolApprovalResponded
    | ({ [x: string]: unknown } | null)
    | undefined
}
type SourceUrlUIPart = {
  type?: 'source-url' | undefined
  sourceId: string
  url: string
  title?: string | ({ [x: string]: unknown } | null) | undefined
  providerMetadata?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
}
type SourceDocumentUIPart = {
  type?: 'source-document' | undefined
  sourceId: string
  mediaType: string
  title: string
  filename?: string | ({ [x: string]: unknown } | null) | undefined
  providerMetadata?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
}
type FileUIPart = {
  type?: 'file' | undefined
  mediaType: string
  filename?: string | ({ [x: string]: unknown } | null) | undefined
  url: string
  providerMetadata?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
}
type DataUIPart = {
  type: string
  id?: string | ({ [x: string]: unknown } | null) | undefined
  data: { [x: string]: unknown }
}
type StepStartUIPart = { type?: 'step-start' | undefined }
type LegacyAssistantMetadataUIMessage = {
  id: string
  role: 'system' | 'user' | 'assistant'
  metadata?: LegacyAssistantMessageMetadata | ({ [x: string]: unknown } | null) | undefined
  parts: (
    | TextUIPart
    | ReasoningUIPart
    | PydanticAiUiVercelAiRequestTypesToolInputStreamingPart
    | ToolInputAvailablePart
    | PydanticAiUiVercelAiRequestTypesToolOutputAvailablePart
    | PydanticAiUiVercelAiRequestTypesToolOutputErrorPart
    | ToolApprovalRequestedPart
    | ToolApprovalRespondedPart
    | ToolOutputDeniedPart
    | PydanticAiUiVercelAiRequestTypesDynamicToolInputStreamingPart
    | DynamicToolInputAvailablePart
    | PydanticAiUiVercelAiRequestTypesDynamicToolOutputAvailablePart
    | PydanticAiUiVercelAiRequestTypesDynamicToolOutputErrorPart
    | DynamicToolApprovalRequestedPart
    | DynamicToolApprovalRespondedPart
    | DynamicToolOutputDeniedPart
    | SourceUrlUIPart
    | SourceDocumentUIPart
    | FileUIPart
    | DataUIPart
    | StepStartUIPart
  )[]
}
type AppContext = { type: 'app'; currentDateTime: string; timeZone: string }
type ProjectUIContext = {
  type: 'project'
  projectNodeId: string
  spanFilter?: string | ({ [x: string]: unknown } | null) | undefined
}
type TraceUIContext = { type: 'trace'; projectNodeId: string; otelTraceId: string }
type SessionUIContext = { type: 'session'; projectNodeId: string; sessionNodeId: string }
type PromptUIContext = { type: 'prompt'; promptNodeId: string }
type PromptVersionUIContext = {
  type: 'prompt_version'
  promptNodeId: string
  promptVersionNodeId: string
}
type SpanUIContext = {
  type: 'span'
  projectNodeId?: string | ({ [x: string]: unknown } | null) | undefined
  spanNodeId?: string | ({ [x: string]: unknown } | null) | undefined
  otelSpanId?: string | ({ [x: string]: unknown } | null) | undefined
}
type PlaygroundExperimentScaffoldUIContext = {
  name?: string | ({ [x: string]: unknown } | null) | undefined
  description?: string | ({ [x: string]: unknown } | null) | undefined
  hasMetadata?: boolean | undefined
}
type PlaygroundBuiltinModelUIContext = {
  type?: 'builtin' | undefined
  provider: string
  modelName: string
}
type PlaygroundCustomProviderModelUIContext = {
  type?: 'custom' | undefined
  customProviderId: string
  customProviderName: string
  provider: string
  modelName: string
}
type PlaygroundInstanceUIContext = {
  instanceId: number
  model?:
    | PlaygroundBuiltinModelUIContext
    | PlaygroundCustomProviderModelUIContext
    | ({ [x: string]: unknown } | null)
    | undefined
  experimentId?: string | ({ [x: string]: unknown } | null) | undefined
}
type PlaygroundEvaluatorUIContext = {
  datasetEvaluatorId: string
  name: string
  kind: 'LLM' | 'CODE' | 'BUILTIN'
  isBuiltin: boolean
  isApplied: boolean
}
type PlaygroundUIContext = {
  type: 'playground'
  recordExperiments?: boolean | undefined
  repetitions?: number | undefined
  nextExperimentScaffold?:
    | PlaygroundExperimentScaffoldUIContext
    | ({ [x: string]: unknown } | null)
    | undefined
  instances?: PlaygroundInstanceUIContext[] | undefined
  evaluators?: PlaygroundEvaluatorUIContext[] | undefined
}
type CodeEvaluatorUIContext = {
  type: 'code_evaluator'
  evaluatorNodeId?: string | ({ [x: string]: unknown } | null) | undefined
}
type LlmEvaluatorUIContext = {
  type: 'llm_evaluator'
  evaluatorNodeId?: string | ({ [x: string]: unknown } | null) | undefined
}
type DatasetUIContext = {
  type: 'dataset'
  datasetNodeId: string
  datasetVersionNodeId?: string | ({ [x: string]: unknown } | null) | undefined
}
type GraphQLContext = { type: 'graphql'; mutationsEnabled: boolean }
type WebAccessContext = { type: 'web_access'; enabled: boolean }
type SubagentsContext = { type: 'subagents'; enabled: boolean }
type ChatContext =
  | AppContext
  | ProjectUIContext
  | TraceUIContext
  | SessionUIContext
  | PromptUIContext
  | PromptVersionUIContext
  | SpanUIContext
  | PlaygroundUIContext
  | CodeEvaluatorUIContext
  | LlmEvaluatorUIContext
  | DatasetUIContext
  | GraphQLContext
  | WebAccessContext
  | SubagentsContext
type CustomProviderModelSelection = {
  providerType: 'custom'
  providerId: string
  modelName: string
}
type BuiltInProviderModelSelection = {
  providerType: 'builtin'
  provider: ModelProvider
  modelName: string
}
type AgentModelSelection = CustomProviderModelSelection | BuiltInProviderModelSelection
type LegacyChatSubmitMessage = {
  trigger?: 'submit-message' | undefined
  id: string
  messages: LegacyAssistantMetadataUIMessage[]
  ingestTraces?: boolean | undefined
  exportRemoteTraces?: boolean | undefined
  attachUserId?: boolean | undefined
  contexts?: ChatContext[] | undefined
  editPermission?: 'manual' | 'bypass' | undefined
  requestedSkills?: string[] | undefined
  model: AgentModelSelection
}
type LegacyChatRegenerateMessage = {
  trigger: 'regenerate-message'
  id: string
  messages: LegacyAssistantMetadataUIMessage[]
  messageId?: string | ({ [x: string]: unknown } | null) | undefined
  ingestTraces?: boolean | undefined
  exportRemoteTraces?: boolean | undefined
  attachUserId?: boolean | undefined
  contexts?: ChatContext[] | undefined
  editPermission?: 'manual' | 'bypass' | undefined
  requestedSkills?: string[] | undefined
  model: AgentModelSelection
}
type LegacyChatRequest = LegacyChatSubmitMessage | LegacyChatRegenerateMessage
type CreateAgentSessionRequestBody = {
  model: AgentModelSelection
  title?: string | undefined
  is_ephemeral?: boolean | undefined
}
type CreatedAgentSession = { id: string }
type CreateAgentSessionResponseBody = { data: CreatedAgentSession }
type AgentSessionSummary = {
  id: string
  title: string
  created_at: string
  updated_at: string
  is_ephemeral: boolean
}
type ListAgentSessionsResponseBody = {
  data: AgentSessionSummary[]
  next_cursor: string | ({ [x: string]: unknown } | null)
}
type PatchAgentSessionRequestBody = {
  title?: string | undefined
  model?: AgentModelSelection | undefined
}
type AgentSessionData = {
  id: string
  title: string
  created_at: string
  updated_at: string
  is_ephemeral: boolean
  model: AgentModelSelection
  is_active: boolean
  last_message_id?: string | ({ [x: string]: unknown } | null) | undefined
}
type PatchAgentSessionResponseBody = { data: AgentSessionData }
type AgentSessionConflictError = {
  code:
    | 'agent_session_busy'
    | 'agent_session_model_stale'
    | 'agent_session_messages_stale'
    | 'agent_session_tool_outputs_conflict'
    | 'agent_session_tool_approvals_conflict'
    | 'agent_session_already_compact'
    | 'agent_session_compaction_conflict'
  message?: string | ({ [x: string]: unknown } | null) | undefined
}
type GetAgentSessionResponseBody = { data: AgentSessionData }
type PhoenixAssistantMessageMetadata = {
  type: 'assistant'
  sessionId: string
  turnTraceContext?: TurnTraceContext | ({ [x: string]: unknown } | null) | undefined
  usage?: AssistantMessageMetadataUsage | ({ [x: string]: unknown } | null) | undefined
  interrupted?: boolean | undefined
}
type UIContexts = {
  project?: ProjectUIContext | ({ [x: string]: unknown } | null) | undefined
  trace?: TraceUIContext | ({ [x: string]: unknown } | null) | undefined
  session?: SessionUIContext | ({ [x: string]: unknown } | null) | undefined
  span?: SpanUIContext | ({ [x: string]: unknown } | null) | undefined
  prompt?: PromptUIContext | ({ [x: string]: unknown } | null) | undefined
  promptVersion?: PromptVersionUIContext | ({ [x: string]: unknown } | null) | undefined
  dataset?: DatasetUIContext | ({ [x: string]: unknown } | null) | undefined
  playground?: PlaygroundUIContext | ({ [x: string]: unknown } | null) | undefined
  codeEvaluator?: CodeEvaluatorUIContext | ({ [x: string]: unknown } | null) | undefined
  llmEvaluator?: LlmEvaluatorUIContext | ({ [x: string]: unknown } | null) | undefined
}
type PhoenixUserMessageMetadata = {
  type: 'user'
  currentDateTime: string
  timeZone: string
  isCompactionMessage?: boolean | undefined
  uiContexts?: UIContexts | ({ [x: string]: unknown } | null) | undefined
  editPermission?: 'manual' | 'bypass' | undefined
}
type PydanticAIMessageMetadata = {
  timestamp?: string | ({ [x: string]: unknown } | null) | undefined
}
type MessageMetadata = {
  phoenix?:
    | PhoenixAssistantMessageMetadata
    | PhoenixUserMessageMetadata
    | ({ [x: string]: unknown } | null)
    | undefined
  pydantic_ai?: PydanticAIMessageMetadata | ({ [x: string]: unknown } | null) | undefined
}
type PhoenixDbTypesDataStreamProtocolRequestTypesToolInputStreamingPart = {
  type: string
  toolCallId: string
  title?: string | ({ [x: string]: unknown } | null) | undefined
  state?: 'input-streaming' | undefined
  input?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  rawInput?: string | ({ [x: string]: unknown } | null) | undefined
  providerExecuted?: boolean | ({ [x: string]: unknown } | null) | undefined
  callProviderMetadata?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  approval?:
    | ToolApprovalRequested
    | ToolApprovalResponded
    | ({ [x: string]: unknown } | null)
    | undefined
}
type PhoenixDbTypesDataStreamProtocolRequestTypesToolOutputAvailablePart = {
  type: string
  toolCallId: string
  title?: string | ({ [x: string]: unknown } | null) | undefined
  state?: 'output-available' | undefined
  input?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  output?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  providerExecuted?: boolean | ({ [x: string]: unknown } | null) | undefined
  callProviderMetadata?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  resultProviderMetadata?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  preliminary?: boolean | ({ [x: string]: unknown } | null) | undefined
  approval?:
    | ToolApprovalRequested
    | ToolApprovalResponded
    | ({ [x: string]: unknown } | null)
    | undefined
}
type PhoenixDbTypesDataStreamProtocolRequestTypesToolOutputErrorPart = {
  type: string
  toolCallId: string
  title?: string | ({ [x: string]: unknown } | null) | undefined
  state?: 'output-error' | undefined
  input?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  rawInput?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  errorText: string
  providerExecuted?: boolean | ({ [x: string]: unknown } | null) | undefined
  callProviderMetadata?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  resultProviderMetadata?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  approval?:
    | ToolApprovalRequested
    | ToolApprovalResponded
    | ({ [x: string]: unknown } | null)
    | undefined
}
type PhoenixDbTypesDataStreamProtocolRequestTypesDynamicToolInputStreamingPart = {
  type?: 'dynamic-tool' | undefined
  toolName: string
  toolCallId: string
  title?: string | ({ [x: string]: unknown } | null) | undefined
  state?: 'input-streaming' | undefined
  input?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  rawInput?: string | ({ [x: string]: unknown } | null) | undefined
  providerExecuted?: boolean | ({ [x: string]: unknown } | null) | undefined
  callProviderMetadata?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  approval?:
    | ToolApprovalRequested
    | ToolApprovalResponded
    | ({ [x: string]: unknown } | null)
    | undefined
}
type PhoenixDbTypesDataStreamProtocolRequestTypesDynamicToolOutputAvailablePart = {
  type?: 'dynamic-tool' | undefined
  toolName: string
  toolCallId: string
  title?: string | ({ [x: string]: unknown } | null) | undefined
  state?: 'output-available' | undefined
  input: { [x: string]: unknown }
  output: { [x: string]: unknown }
  providerExecuted?: boolean | ({ [x: string]: unknown } | null) | undefined
  callProviderMetadata?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  resultProviderMetadata?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  preliminary?: boolean | ({ [x: string]: unknown } | null) | undefined
  approval?:
    | ToolApprovalRequested
    | ToolApprovalResponded
    | ({ [x: string]: unknown } | null)
    | undefined
}
type PhoenixDbTypesDataStreamProtocolRequestTypesDynamicToolOutputErrorPart = {
  type?: 'dynamic-tool' | undefined
  toolName: string
  toolCallId: string
  title?: string | ({ [x: string]: unknown } | null) | undefined
  state?: 'output-error' | undefined
  input: { [x: string]: unknown }
  errorText: string
  providerExecuted?: boolean | ({ [x: string]: unknown } | null) | undefined
  callProviderMetadata?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  resultProviderMetadata?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  approval?:
    | ToolApprovalRequested
    | ToolApprovalResponded
    | ({ [x: string]: unknown } | null)
    | undefined
}
type PhoenixUIMessage = {
  id: string
  role: 'system' | 'user' | 'assistant'
  metadata?: MessageMetadata | ({ [x: string]: unknown } | null) | undefined
  parts: (
    | TextUIPart
    | ReasoningUIPart
    | PhoenixDbTypesDataStreamProtocolRequestTypesToolInputStreamingPart
    | ToolInputAvailablePart
    | PhoenixDbTypesDataStreamProtocolRequestTypesToolOutputAvailablePart
    | PhoenixDbTypesDataStreamProtocolRequestTypesToolOutputErrorPart
    | ToolApprovalRequestedPart
    | ToolApprovalRespondedPart
    | ToolOutputDeniedPart
    | PhoenixDbTypesDataStreamProtocolRequestTypesDynamicToolInputStreamingPart
    | DynamicToolInputAvailablePart
    | PhoenixDbTypesDataStreamProtocolRequestTypesDynamicToolOutputAvailablePart
    | PhoenixDbTypesDataStreamProtocolRequestTypesDynamicToolOutputErrorPart
    | DynamicToolApprovalRequestedPart
    | DynamicToolApprovalRespondedPart
    | DynamicToolOutputDeniedPart
    | SourceUrlUIPart
    | SourceDocumentUIPart
    | FileUIPart
    | DataUIPart
    | StepStartUIPart
  )[]
}
type ListAgentSessionMessagesResponseBody = {
  data: PhoenixUIMessage[]
  next_cursor: string | ({ [x: string]: unknown } | null)
}
type CompactAgentSessionRequestBody = { model: AgentModelSelection }
type CompactAgentSessionResponseBody = { data: PhoenixUIMessage }
type SubmitAgentSessionToolOutputsRequestBody = {
  toolOutputs: (
    | PhoenixDbTypesDataStreamProtocolRequestTypesToolOutputAvailablePart
    | PhoenixDbTypesDataStreamProtocolRequestTypesToolOutputErrorPart
    | PhoenixDbTypesDataStreamProtocolRequestTypesDynamicToolOutputAvailablePart
    | PhoenixDbTypesDataStreamProtocolRequestTypesDynamicToolOutputErrorPart
  )[]
  lastMessageId: string
}
type SubmitAgentSessionToolOutputsResponseBody = { data: PhoenixUIMessage }
type ToolApproval = { toolCallId: string; approved: boolean }
type SubmitAgentSessionToolApprovalsRequestBody = {
  toolApprovals: ToolApproval[]
  lastMessageId: string
}
type SubmitAgentSessionToolApprovalsResponseBody = { data: PhoenixUIMessage }
type ChatRequestCredential = { key: 'GITHUB_PERSONAL_ACCESS_TOKEN'; value: string }
type ChatRequestBody = {
  headless: boolean
  contexts?: ChatContext[] | undefined
  editPermission?: 'manual' | 'bypass' | undefined
  requestedSkills?: string[] | undefined
  model: AgentModelSelection
  trigger?: 'submit-message' | undefined
  id: string
  message?: PhoenixUIMessage | ({ [x: string]: unknown } | null) | undefined
  toolOutputs?:
    | (
        | PhoenixDbTypesDataStreamProtocolRequestTypesToolOutputAvailablePart
        | PhoenixDbTypesDataStreamProtocolRequestTypesToolOutputErrorPart
        | PhoenixDbTypesDataStreamProtocolRequestTypesDynamicToolOutputAvailablePart
        | PhoenixDbTypesDataStreamProtocolRequestTypesDynamicToolOutputErrorPart
      )[]
    | undefined
  toolApprovals?: ToolApproval[] | undefined
  lastMessageId?: string | ({ [x: string]: unknown } | null) | undefined
  credentials?: ChatRequestCredential[] | undefined
  recordLocalTraces?: boolean | undefined
  exportRemoteTraces?: boolean | undefined
  instrumentUserId?: boolean | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/annotation_configs': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: GetAnnotationConfigsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { json: CreateAnnotationConfigData }
            output: CreateAnnotationConfigResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateAnnotationConfigData }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: CreateAnnotationConfigData }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/annotation_configs/:config_identifier': {
      $get:
        | {
            input: { param: { config_identifier: string } }
            output: GetAnnotationConfigResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { config_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { config_identifier: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/annotation_configs/:config_id': {
      $put:
        | {
            input: { param: { config_id: string } } & { json: CreateAnnotationConfigData }
            output: UpdateAnnotationConfigResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { config_id: string } } & { json: CreateAnnotationConfigData }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { config_id: string } } & { json: CreateAnnotationConfigData }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { config_id: string } }
            output: DeleteAnnotationConfigResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { config_id: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { config_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/projects/:project_identifier/annotation_configs': {
      $get:
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: GetProjectAnnotationConfigsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
      $put:
        | {
            input: { param: { project_identifier: string } } & {
              json: SetProjectAnnotationConfigsRequestBody
            }
            output: SetProjectAnnotationConfigsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_identifier: string } } & {
              json: SetProjectAnnotationConfigsRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { project_identifier: string } } & {
              json: SetProjectAnnotationConfigsRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { project_identifier: string } } & {
              json: SetProjectAnnotationConfigsRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/projects/:project_identifier/annotation_configs/:config_identifier': {
      $put:
        | {
            input: { param: { project_identifier: string; config_identifier: string } }
            output: AssignAnnotationConfigToProjectResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_identifier: string; config_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { project_identifier: string; config_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { project_identifier: string; config_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 422
          }
      $delete:
        | {
            input: { param: { project_identifier: string; config_identifier: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { project_identifier: string; config_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { project_identifier: string; config_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { project_identifier: string; config_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/projects/:project_identifier/span_annotations': {
      $get:
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                span_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
                identifier?: string[] | ({ [x: string]: unknown } | null) | undefined
                include_annotation_names?: string[] | ({ [x: string]: unknown } | null) | undefined
                exclude_annotation_names?: string[] | ({ [x: string]: unknown } | null) | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: SpanAnnotationsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                span_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
                identifier?: string[] | ({ [x: string]: unknown } | null) | undefined
                include_annotation_names?: string[] | ({ [x: string]: unknown } | null) | undefined
                exclude_annotation_names?: string[] | ({ [x: string]: unknown } | null) | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                span_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
                identifier?: string[] | ({ [x: string]: unknown } | null) | undefined
                include_annotation_names?: string[] | ({ [x: string]: unknown } | null) | undefined
                exclude_annotation_names?: string[] | ({ [x: string]: unknown } | null) | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                span_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
                identifier?: string[] | ({ [x: string]: unknown } | null) | undefined
                include_annotation_names?: string[] | ({ [x: string]: unknown } | null) | undefined
                exclude_annotation_names?: string[] | ({ [x: string]: unknown } | null) | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
      $delete:
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                name?: string | ({ [x: string]: unknown } | null) | undefined
                identifier?: string | ({ [x: string]: unknown } | null) | undefined
                annotator_kind?:
                  | 'LLM'
                  | 'CODE'
                  | 'HUMAN'
                  | 'DECISION'
                  | 'AGENT'
                  | ({ [x: string]: unknown } | null)
                  | undefined
                start_time?: string | ({ [x: string]: unknown } | null) | undefined
                end_time?: string | ({ [x: string]: unknown } | null) | undefined
                delete_all?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                name?: string | ({ [x: string]: unknown } | null) | undefined
                identifier?: string | ({ [x: string]: unknown } | null) | undefined
                annotator_kind?:
                  | 'LLM'
                  | 'CODE'
                  | 'HUMAN'
                  | 'DECISION'
                  | 'AGENT'
                  | ({ [x: string]: unknown } | null)
                  | undefined
                start_time?: string | ({ [x: string]: unknown } | null) | undefined
                end_time?: string | ({ [x: string]: unknown } | null) | undefined
                delete_all?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                name?: string | ({ [x: string]: unknown } | null) | undefined
                identifier?: string | ({ [x: string]: unknown } | null) | undefined
                annotator_kind?:
                  | 'LLM'
                  | 'CODE'
                  | 'HUMAN'
                  | 'DECISION'
                  | 'AGENT'
                  | ({ [x: string]: unknown } | null)
                  | undefined
                start_time?: string | ({ [x: string]: unknown } | null) | undefined
                end_time?: string | ({ [x: string]: unknown } | null) | undefined
                delete_all?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                name?: string | ({ [x: string]: unknown } | null) | undefined
                identifier?: string | ({ [x: string]: unknown } | null) | undefined
                annotator_kind?:
                  | 'LLM'
                  | 'CODE'
                  | 'HUMAN'
                  | 'DECISION'
                  | 'AGENT'
                  | ({ [x: string]: unknown } | null)
                  | undefined
                start_time?: string | ({ [x: string]: unknown } | null) | undefined
                end_time?: string | ({ [x: string]: unknown } | null) | undefined
                delete_all?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/projects/:project_identifier/trace_annotations': {
      $get:
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                trace_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
                identifier?: string[] | ({ [x: string]: unknown } | null) | undefined
                include_annotation_names?: string[] | ({ [x: string]: unknown } | null) | undefined
                exclude_annotation_names?: string[] | ({ [x: string]: unknown } | null) | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: TraceAnnotationsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                trace_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
                identifier?: string[] | ({ [x: string]: unknown } | null) | undefined
                include_annotation_names?: string[] | ({ [x: string]: unknown } | null) | undefined
                exclude_annotation_names?: string[] | ({ [x: string]: unknown } | null) | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                trace_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
                identifier?: string[] | ({ [x: string]: unknown } | null) | undefined
                include_annotation_names?: string[] | ({ [x: string]: unknown } | null) | undefined
                exclude_annotation_names?: string[] | ({ [x: string]: unknown } | null) | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                trace_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
                identifier?: string[] | ({ [x: string]: unknown } | null) | undefined
                include_annotation_names?: string[] | ({ [x: string]: unknown } | null) | undefined
                exclude_annotation_names?: string[] | ({ [x: string]: unknown } | null) | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
      $delete:
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                name?: string | ({ [x: string]: unknown } | null) | undefined
                identifier?: string | ({ [x: string]: unknown } | null) | undefined
                annotator_kind?:
                  | 'LLM'
                  | 'CODE'
                  | 'HUMAN'
                  | 'DECISION'
                  | 'AGENT'
                  | ({ [x: string]: unknown } | null)
                  | undefined
                start_time?: string | ({ [x: string]: unknown } | null) | undefined
                end_time?: string | ({ [x: string]: unknown } | null) | undefined
                delete_all?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                name?: string | ({ [x: string]: unknown } | null) | undefined
                identifier?: string | ({ [x: string]: unknown } | null) | undefined
                annotator_kind?:
                  | 'LLM'
                  | 'CODE'
                  | 'HUMAN'
                  | 'DECISION'
                  | 'AGENT'
                  | ({ [x: string]: unknown } | null)
                  | undefined
                start_time?: string | ({ [x: string]: unknown } | null) | undefined
                end_time?: string | ({ [x: string]: unknown } | null) | undefined
                delete_all?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                name?: string | ({ [x: string]: unknown } | null) | undefined
                identifier?: string | ({ [x: string]: unknown } | null) | undefined
                annotator_kind?:
                  | 'LLM'
                  | 'CODE'
                  | 'HUMAN'
                  | 'DECISION'
                  | 'AGENT'
                  | ({ [x: string]: unknown } | null)
                  | undefined
                start_time?: string | ({ [x: string]: unknown } | null) | undefined
                end_time?: string | ({ [x: string]: unknown } | null) | undefined
                delete_all?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                name?: string | ({ [x: string]: unknown } | null) | undefined
                identifier?: string | ({ [x: string]: unknown } | null) | undefined
                annotator_kind?:
                  | 'LLM'
                  | 'CODE'
                  | 'HUMAN'
                  | 'DECISION'
                  | 'AGENT'
                  | ({ [x: string]: unknown } | null)
                  | undefined
                start_time?: string | ({ [x: string]: unknown } | null) | undefined
                end_time?: string | ({ [x: string]: unknown } | null) | undefined
                delete_all?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/projects/:project_identifier/session_annotations': {
      $get:
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                session_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
                identifier?: string[] | ({ [x: string]: unknown } | null) | undefined
                include_annotation_names?: string[] | ({ [x: string]: unknown } | null) | undefined
                exclude_annotation_names?: string[] | ({ [x: string]: unknown } | null) | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: SessionAnnotationsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                session_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
                identifier?: string[] | ({ [x: string]: unknown } | null) | undefined
                include_annotation_names?: string[] | ({ [x: string]: unknown } | null) | undefined
                exclude_annotation_names?: string[] | ({ [x: string]: unknown } | null) | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                session_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
                identifier?: string[] | ({ [x: string]: unknown } | null) | undefined
                include_annotation_names?: string[] | ({ [x: string]: unknown } | null) | undefined
                exclude_annotation_names?: string[] | ({ [x: string]: unknown } | null) | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                session_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
                identifier?: string[] | ({ [x: string]: unknown } | null) | undefined
                include_annotation_names?: string[] | ({ [x: string]: unknown } | null) | undefined
                exclude_annotation_names?: string[] | ({ [x: string]: unknown } | null) | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
      $delete:
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                name?: string | ({ [x: string]: unknown } | null) | undefined
                identifier?: string | ({ [x: string]: unknown } | null) | undefined
                annotator_kind?:
                  | 'LLM'
                  | 'CODE'
                  | 'HUMAN'
                  | 'DECISION'
                  | 'AGENT'
                  | ({ [x: string]: unknown } | null)
                  | undefined
                start_time?: string | ({ [x: string]: unknown } | null) | undefined
                end_time?: string | ({ [x: string]: unknown } | null) | undefined
                delete_all?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                name?: string | ({ [x: string]: unknown } | null) | undefined
                identifier?: string | ({ [x: string]: unknown } | null) | undefined
                annotator_kind?:
                  | 'LLM'
                  | 'CODE'
                  | 'HUMAN'
                  | 'DECISION'
                  | 'AGENT'
                  | ({ [x: string]: unknown } | null)
                  | undefined
                start_time?: string | ({ [x: string]: unknown } | null) | undefined
                end_time?: string | ({ [x: string]: unknown } | null) | undefined
                delete_all?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                name?: string | ({ [x: string]: unknown } | null) | undefined
                identifier?: string | ({ [x: string]: unknown } | null) | undefined
                annotator_kind?:
                  | 'LLM'
                  | 'CODE'
                  | 'HUMAN'
                  | 'DECISION'
                  | 'AGENT'
                  | ({ [x: string]: unknown } | null)
                  | undefined
                start_time?: string | ({ [x: string]: unknown } | null) | undefined
                end_time?: string | ({ [x: string]: unknown } | null) | undefined
                delete_all?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                name?: string | ({ [x: string]: unknown } | null) | undefined
                identifier?: string | ({ [x: string]: unknown } | null) | undefined
                annotator_kind?:
                  | 'LLM'
                  | 'CODE'
                  | 'HUMAN'
                  | 'DECISION'
                  | 'AGENT'
                  | ({ [x: string]: unknown } | null)
                  | undefined
                start_time?: string | ({ [x: string]: unknown } | null) | undefined
                end_time?: string | ({ [x: string]: unknown } | null) | undefined
                delete_all?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/dataset_labels': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: GetDatasetLabelsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
      $post:
        | {
            input: { json: CreateDatasetLabelRequestBody }
            output: CreateDatasetLabelResponseBody
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateDatasetLabelRequestBody }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: CreateDatasetLabelRequestBody }
            output: string
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { json: CreateDatasetLabelRequestBody }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/dataset_labels/:label_id': {
      $get:
        | {
            input: { param: { label_id: string } }
            output: GetDatasetLabelResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { label_id: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { label_id: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { label_id: string } }
            output: string
            outputFormat: 'text'
            status: 422
          }
      $patch:
        | {
            input: { param: { label_id: string } } & { json: UpdateDatasetLabelRequestBody }
            output: UpdateDatasetLabelResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { label_id: string } } & { json: UpdateDatasetLabelRequestBody }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { label_id: string } } & { json: UpdateDatasetLabelRequestBody }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { label_id: string } } & { json: UpdateDatasetLabelRequestBody }
            output: string
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { label_id: string } } & { json: UpdateDatasetLabelRequestBody }
            output: string
            outputFormat: 'text'
            status: 422
          }
      $delete:
        | { input: { param: { label_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { label_id: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { label_id: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { label_id: string } }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/datasets/:dataset_identifier/labels': {
      $get:
        | {
            input: { param: { dataset_identifier: string } }
            output: ListDatasetLabelsForDatasetResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataset_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { dataset_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { dataset_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 422
          }
      $put:
        | {
            input: { param: { dataset_identifier: string } } & { json: SetDatasetLabelsRequestBody }
            output: SetDatasetLabelsForDatasetResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataset_identifier: string } } & { json: SetDatasetLabelsRequestBody }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { dataset_identifier: string } } & { json: SetDatasetLabelsRequestBody }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { dataset_identifier: string } } & { json: SetDatasetLabelsRequestBody }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/datasets/:dataset_identifier/labels/:label_id': {
      $put:
        | {
            input: { param: { dataset_identifier: string; label_id: string } }
            output: AddDatasetLabelToDatasetResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataset_identifier: string; label_id: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { dataset_identifier: string; label_id: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { dataset_identifier: string; label_id: string } }
            output: string
            outputFormat: 'text'
            status: 422
          }
      $delete:
        | {
            input: { param: { dataset_identifier: string; label_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { dataset_identifier: string; label_id: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { dataset_identifier: string; label_id: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { dataset_identifier: string; label_id: string } }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/datasets': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                name?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: ListDatasetsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                name?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                name?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/datasets/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: string; outputFormat: 'text'; status: 403 }
        | { input: { param: { id: string } }; output: string; outputFormat: 'text'; status: 404 }
        | { input: { param: { id: string } }; output: string; outputFormat: 'text'; status: 422 }
      $get:
        | {
            input: { param: { id: string } }
            output: GetDatasetResponseBody
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: string; outputFormat: 'text'; status: 403 }
        | { input: { param: { id: string } }; output: string; outputFormat: 'text'; status: 404 }
        | {
            input: { param: { id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/datasets/:id/versions': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: ListDatasetVersionsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/datasets/upload': {
      $post:
        | {
            input: { query: { sync?: boolean | undefined } } & {
              json: {
                action?: 'create' | 'append' | 'update' | undefined
                name: string
                description?: string | undefined
                inputs: { [x: string]: unknown }[]
                outputs?: { [x: string]: unknown }[] | undefined
                metadata?: { [x: string]: unknown }[] | undefined
                splits?: (string | string[] | ({ [x: string]: unknown } | null))[] | undefined
                span_ids?: (string | ({ [x: string]: unknown } | null))[] | undefined
                example_ids?: (string | ({ [x: string]: unknown } | null))[] | undefined
              }
            } & {
              form: {
                action?: 'create' | 'append' | 'update' | undefined
                name: string
                description?: string | undefined
                'input_keys[]': string[]
                'output_keys[]': string[]
                'metadata_keys[]'?: string[] | undefined
                'split_keys[]'?: string[] | undefined
                split_key?: string | undefined
                'flatten_keys[]'?: string[] | undefined
                span_id_key?: string | undefined
                example_id_key?: string | undefined
                file: File
              }
            }
            output: UploadDatasetResponseBody | ({ [x: string]: unknown } | null)
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { sync?: boolean | undefined } } & {
              json: {
                action?: 'create' | 'append' | 'update' | undefined
                name: string
                description?: string | undefined
                inputs: { [x: string]: unknown }[]
                outputs?: { [x: string]: unknown }[] | undefined
                metadata?: { [x: string]: unknown }[] | undefined
                splits?: (string | string[] | ({ [x: string]: unknown } | null))[] | undefined
                span_ids?: (string | ({ [x: string]: unknown } | null))[] | undefined
                example_ids?: (string | ({ [x: string]: unknown } | null))[] | undefined
              }
            } & {
              form: {
                action?: 'create' | 'append' | 'update' | undefined
                name: string
                description?: string | undefined
                'input_keys[]': string[]
                'output_keys[]': string[]
                'metadata_keys[]'?: string[] | undefined
                'split_keys[]'?: string[] | undefined
                split_key?: string | undefined
                'flatten_keys[]'?: string[] | undefined
                span_id_key?: string | undefined
                example_id_key?: string | undefined
                file: File
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { query: { sync?: boolean | undefined } } & {
              json: {
                action?: 'create' | 'append' | 'update' | undefined
                name: string
                description?: string | undefined
                inputs: { [x: string]: unknown }[]
                outputs?: { [x: string]: unknown }[] | undefined
                metadata?: { [x: string]: unknown }[] | undefined
                splits?: (string | string[] | ({ [x: string]: unknown } | null))[] | undefined
                span_ids?: (string | ({ [x: string]: unknown } | null))[] | undefined
                example_ids?: (string | ({ [x: string]: unknown } | null))[] | undefined
              }
            } & {
              form: {
                action?: 'create' | 'append' | 'update' | undefined
                name: string
                description?: string | undefined
                'input_keys[]': string[]
                'output_keys[]': string[]
                'metadata_keys[]'?: string[] | undefined
                'split_keys[]'?: string[] | undefined
                split_key?: string | undefined
                'flatten_keys[]'?: string[] | undefined
                span_id_key?: string | undefined
                example_id_key?: string | undefined
                file: File
              }
            }
            output: string
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { query: { sync?: boolean | undefined } } & {
              json: {
                action?: 'create' | 'append' | 'update' | undefined
                name: string
                description?: string | undefined
                inputs: { [x: string]: unknown }[]
                outputs?: { [x: string]: unknown }[] | undefined
                metadata?: { [x: string]: unknown }[] | undefined
                splits?: (string | string[] | ({ [x: string]: unknown } | null))[] | undefined
                span_ids?: (string | ({ [x: string]: unknown } | null))[] | undefined
                example_ids?: (string | ({ [x: string]: unknown } | null))[] | undefined
              }
            } & {
              form: {
                action?: 'create' | 'append' | 'update' | undefined
                name: string
                description?: string | undefined
                'input_keys[]': string[]
                'output_keys[]': string[]
                'metadata_keys[]'?: string[] | undefined
                'split_keys[]'?: string[] | undefined
                split_key?: string | undefined
                'flatten_keys[]'?: string[] | undefined
                span_id_key?: string | undefined
                example_id_key?: string | undefined
                file: File
              }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/datasets/:id/examples': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                version_id?: string | ({ [x: string]: unknown } | null) | undefined
                split?: string[] | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: ListDatasetExamplesResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                version_id?: string | ({ [x: string]: unknown } | null) | undefined
                split?: string[] | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                version_id?: string | ({ [x: string]: unknown } | null) | undefined
                split?: string[] | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                version_id?: string | ({ [x: string]: unknown } | null) | undefined
                split?: string[] | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/datasets/:dataset_identifier/splits': {
      $get:
        | {
            input: { param: { dataset_identifier: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: ListDatasetSplitsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataset_identifier: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { dataset_identifier: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { dataset_identifier: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
      $post:
        | {
            input: { param: { dataset_identifier: string } } & {
              json: CreateDatasetSplitRequestBody
            }
            output: CreateDatasetSplitResponseBody
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { dataset_identifier: string } } & {
              json: CreateDatasetSplitRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { dataset_identifier: string } } & {
              json: CreateDatasetSplitRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { dataset_identifier: string } } & {
              json: CreateDatasetSplitRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { dataset_identifier: string } } & {
              json: CreateDatasetSplitRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/datasets/:dataset_identifier/splits/:split_id': {
      $patch:
        | {
            input: { param: { dataset_identifier: string; split_id: string } } & {
              json: UpdateDatasetSplitRequestBody
            }
            output: UpdateDatasetSplitResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataset_identifier: string; split_id: string } } & {
              json: UpdateDatasetSplitRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { dataset_identifier: string; split_id: string } } & {
              json: UpdateDatasetSplitRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { dataset_identifier: string; split_id: string } } & {
              json: UpdateDatasetSplitRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { dataset_identifier: string; split_id: string } } & {
              json: UpdateDatasetSplitRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
      $delete:
        | {
            input: { param: { dataset_identifier: string; split_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { dataset_identifier: string; split_id: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { dataset_identifier: string; split_id: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { dataset_identifier: string; split_id: string } }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/datasets/:id/csv': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { version_id?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { version_id?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { version_id?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/datasets/:id/jsonl': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { version_id?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { version_id?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { version_id?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/datasets/:id/jsonl/openai_ft': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { version_id?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { version_id?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { version_id?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/datasets/:id/jsonl/openai_evals': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { version_id?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { version_id?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { version_id?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/datasets/:dataset_id/experiments': {
      $post:
        | {
            input: { param: { dataset_id: string } } & { json: CreateExperimentRequestBody }
            output: CreateExperimentResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataset_id: string } } & { json: CreateExperimentRequestBody }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { dataset_id: string } } & { json: CreateExperimentRequestBody }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { dataset_id: string } } & { json: CreateExperimentRequestBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { dataset_id: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: ListExperimentsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataset_id: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { dataset_id: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/experiments/:experiment_id': {
      $get:
        | {
            input: { param: { experiment_id: string } }
            output: GetExperimentResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { experiment_id: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { experiment_id: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { experiment_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { experiment_id: string } } & { json: UpdateExperimentRequestBody }
            output: UpdateExperimentResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { experiment_id: string } } & { json: UpdateExperimentRequestBody }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { experiment_id: string } } & { json: UpdateExperimentRequestBody }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { experiment_id: string } } & { json: UpdateExperimentRequestBody }
            output: string
            outputFormat: 'text'
            status: 422
          }
      $delete:
        | {
            input: { param: { experiment_id: string } } & {
              query: { delete_project?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { experiment_id: string } } & {
              query: { delete_project?: boolean | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { experiment_id: string } } & {
              query: { delete_project?: boolean | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { experiment_id: string } } & {
              query: { delete_project?: boolean | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/experiments/:experiment_id/incomplete-runs': {
      $get:
        | {
            input: { param: { experiment_id: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: GetIncompleteExperimentRunsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { experiment_id: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { experiment_id: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { experiment_id: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/experiments/:experiment_id/json': {
      $get:
        | {
            input: { param: { experiment_id: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { experiment_id: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { experiment_id: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { experiment_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/experiments/:experiment_id/csv': {
      $get:
        | {
            input: { param: { experiment_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { experiment_id: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { experiment_id: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { experiment_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/experiments/:experiment_id/tags': {
      $get:
        | {
            input: { param: { experiment_id: string } }
            output: ListExperimentTagsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { experiment_id: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { experiment_id: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { experiment_id: string } }
            output: string
            outputFormat: 'text'
            status: 422
          }
      $post:
        | {
            input: { param: { experiment_id: string } } & { json: SetExperimentTagRequestBody }
            output: SetExperimentTagResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { experiment_id: string } } & { json: SetExperimentTagRequestBody }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { experiment_id: string } } & { json: SetExperimentTagRequestBody }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { experiment_id: string } } & { json: SetExperimentTagRequestBody }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/experiments/:experiment_id/tags/:tag_identifier': {
      $delete:
        | {
            input: { param: { experiment_id: string; tag_identifier: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { experiment_id: string; tag_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { experiment_id: string; tag_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { experiment_id: string; tag_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/experiments/:experiment_id/runs': {
      $post:
        | {
            input: { param: { experiment_id: string } } & { json: CreateExperimentRunRequestBody }
            output: CreateExperimentRunResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { experiment_id: string } } & { json: CreateExperimentRunRequestBody }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { experiment_id: string } } & { json: CreateExperimentRunRequestBody }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { experiment_id: string } } & { json: CreateExperimentRunRequestBody }
            output: string
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { param: { experiment_id: string } } & { json: CreateExperimentRunRequestBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { experiment_id: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: ListExperimentRunsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { experiment_id: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { experiment_id: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { experiment_id: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/experiments/:experiment_id/incomplete-evaluations': {
      $get:
        | {
            input: { param: { experiment_id: string } } & {
              query: {
                evaluation_name?: string[] | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: GetIncompleteEvaluationsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { experiment_id: string } } & {
              query: {
                evaluation_name?: string[] | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { experiment_id: string } } & {
              query: {
                evaluation_name?: string[] | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { experiment_id: string } } & {
              query: {
                evaluation_name?: string[] | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { experiment_id: string } } & {
              query: {
                evaluation_name?: string[] | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/experiment_evaluations': {
      $post:
        | {
            input: { json: UpsertExperimentEvaluationRequestBody }
            output: UpsertExperimentEvaluationResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpsertExperimentEvaluationRequestBody }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: UpsertExperimentEvaluationRequestBody }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: UpsertExperimentEvaluationRequestBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/projects/:project_identifier/traces': {
      $get:
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                start_time?: string | ({ [x: string]: unknown } | null) | undefined
                end_time?: string | ({ [x: string]: unknown } | null) | undefined
                sort?: 'start_time' | 'latency_ms' | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                include_spans?: boolean | undefined
                session_identifier?: string[] | ({ [x: string]: unknown } | null) | undefined
                error?: boolean | ({ [x: string]: unknown } | null) | undefined
                min_latency_ms?: number | ({ [x: string]: unknown } | null) | undefined
                max_latency_ms?: number | ({ [x: string]: unknown } | null) | undefined
                filter?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: GetTracesResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                start_time?: string | ({ [x: string]: unknown } | null) | undefined
                end_time?: string | ({ [x: string]: unknown } | null) | undefined
                sort?: 'start_time' | 'latency_ms' | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                include_spans?: boolean | undefined
                session_identifier?: string[] | ({ [x: string]: unknown } | null) | undefined
                error?: boolean | ({ [x: string]: unknown } | null) | undefined
                min_latency_ms?: number | ({ [x: string]: unknown } | null) | undefined
                max_latency_ms?: number | ({ [x: string]: unknown } | null) | undefined
                filter?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                start_time?: string | ({ [x: string]: unknown } | null) | undefined
                end_time?: string | ({ [x: string]: unknown } | null) | undefined
                sort?: 'start_time' | 'latency_ms' | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                include_spans?: boolean | undefined
                session_identifier?: string[] | ({ [x: string]: unknown } | null) | undefined
                error?: boolean | ({ [x: string]: unknown } | null) | undefined
                min_latency_ms?: number | ({ [x: string]: unknown } | null) | undefined
                max_latency_ms?: number | ({ [x: string]: unknown } | null) | undefined
                filter?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                start_time?: string | ({ [x: string]: unknown } | null) | undefined
                end_time?: string | ({ [x: string]: unknown } | null) | undefined
                sort?: 'start_time' | 'latency_ms' | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                include_spans?: boolean | undefined
                session_identifier?: string[] | ({ [x: string]: unknown } | null) | undefined
                error?: boolean | ({ [x: string]: unknown } | null) | undefined
                min_latency_ms?: number | ({ [x: string]: unknown } | null) | undefined
                max_latency_ms?: number | ({ [x: string]: unknown } | null) | undefined
                filter?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                start_time?: string | ({ [x: string]: unknown } | null) | undefined
                end_time?: string | ({ [x: string]: unknown } | null) | undefined
                sort?: 'start_time' | 'latency_ms' | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                include_spans?: boolean | undefined
                session_identifier?: string[] | ({ [x: string]: unknown } | null) | undefined
                error?: boolean | ({ [x: string]: unknown } | null) | undefined
                min_latency_ms?: number | ({ [x: string]: unknown } | null) | undefined
                max_latency_ms?: number | ({ [x: string]: unknown } | null) | undefined
                filter?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
      $delete:
        | {
            input: { param: { project_identifier: string } } & {
              query: { start_time: string; end_time: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: { start_time: string; end_time: string }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: { start_time: string; end_time: string }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: { start_time: string; end_time: string }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/trace_annotations': {
      $post:
        | {
            input: { query: { sync?: boolean | undefined } } & { json: AnnotateTracesRequestBody }
            output: AnnotateTracesResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { sync?: boolean | undefined } } & { json: AnnotateTracesRequestBody }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { query: { sync?: boolean | undefined } } & { json: AnnotateTracesRequestBody }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { sync?: boolean | undefined } } & { json: AnnotateTracesRequestBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/trace_notes': {
      $post:
        | {
            input: { json: CreateTraceNoteRequestBody }
            output: CreateTraceNoteResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateTraceNoteRequestBody }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: CreateTraceNoteRequestBody }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: CreateTraceNoteRequestBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/traces/transfer': {
      $post:
        | {
            input: { json: TransferTracesRequestBody }
            output: TransferTracesResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferTracesRequestBody }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: TransferTracesRequestBody }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: TransferTracesRequestBody }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/traces/:trace_identifier': {
      $delete:
        | {
            input: { param: { trace_identifier: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { trace_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { trace_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { trace_identifier: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/projects/:project_identifier/spans/otlpv1': {
      $get:
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                start_time?: string | ({ [x: string]: unknown } | null) | undefined
                end_time?: string | ({ [x: string]: unknown } | null) | undefined
                trace_id?: string[] | ({ [x: string]: unknown } | null) | undefined
                span_id?: string[] | ({ [x: string]: unknown } | null) | undefined
                parent_id?: string | ({ [x: string]: unknown } | null) | undefined
                name?: string[] | ({ [x: string]: unknown } | null) | undefined
                status_code?: string[] | ({ [x: string]: unknown } | null) | undefined
                attribute?: string[] | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: OtlpSpansResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                start_time?: string | ({ [x: string]: unknown } | null) | undefined
                end_time?: string | ({ [x: string]: unknown } | null) | undefined
                trace_id?: string[] | ({ [x: string]: unknown } | null) | undefined
                span_id?: string[] | ({ [x: string]: unknown } | null) | undefined
                parent_id?: string | ({ [x: string]: unknown } | null) | undefined
                name?: string[] | ({ [x: string]: unknown } | null) | undefined
                status_code?: string[] | ({ [x: string]: unknown } | null) | undefined
                attribute?: string[] | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                start_time?: string | ({ [x: string]: unknown } | null) | undefined
                end_time?: string | ({ [x: string]: unknown } | null) | undefined
                trace_id?: string[] | ({ [x: string]: unknown } | null) | undefined
                span_id?: string[] | ({ [x: string]: unknown } | null) | undefined
                parent_id?: string | ({ [x: string]: unknown } | null) | undefined
                name?: string[] | ({ [x: string]: unknown } | null) | undefined
                status_code?: string[] | ({ [x: string]: unknown } | null) | undefined
                attribute?: string[] | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                start_time?: string | ({ [x: string]: unknown } | null) | undefined
                end_time?: string | ({ [x: string]: unknown } | null) | undefined
                trace_id?: string[] | ({ [x: string]: unknown } | null) | undefined
                span_id?: string[] | ({ [x: string]: unknown } | null) | undefined
                parent_id?: string | ({ [x: string]: unknown } | null) | undefined
                name?: string[] | ({ [x: string]: unknown } | null) | undefined
                status_code?: string[] | ({ [x: string]: unknown } | null) | undefined
                attribute?: string[] | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/projects/:project_identifier/spans': {
      $get:
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                sort?: 'id' | 'start_time' | undefined
                order?: 'asc' | 'desc' | undefined
                start_time?: string | ({ [x: string]: unknown } | null) | undefined
                end_time?: string | ({ [x: string]: unknown } | null) | undefined
                trace_id?: string[] | ({ [x: string]: unknown } | null) | undefined
                span_id?: string[] | ({ [x: string]: unknown } | null) | undefined
                parent_id?: string | ({ [x: string]: unknown } | null) | undefined
                name?: string[] | ({ [x: string]: unknown } | null) | undefined
                span_kind?: string[] | ({ [x: string]: unknown } | null) | undefined
                status_code?: string[] | ({ [x: string]: unknown } | null) | undefined
                attribute?: string[] | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: SpansResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                sort?: 'id' | 'start_time' | undefined
                order?: 'asc' | 'desc' | undefined
                start_time?: string | ({ [x: string]: unknown } | null) | undefined
                end_time?: string | ({ [x: string]: unknown } | null) | undefined
                trace_id?: string[] | ({ [x: string]: unknown } | null) | undefined
                span_id?: string[] | ({ [x: string]: unknown } | null) | undefined
                parent_id?: string | ({ [x: string]: unknown } | null) | undefined
                name?: string[] | ({ [x: string]: unknown } | null) | undefined
                span_kind?: string[] | ({ [x: string]: unknown } | null) | undefined
                status_code?: string[] | ({ [x: string]: unknown } | null) | undefined
                attribute?: string[] | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                sort?: 'id' | 'start_time' | undefined
                order?: 'asc' | 'desc' | undefined
                start_time?: string | ({ [x: string]: unknown } | null) | undefined
                end_time?: string | ({ [x: string]: unknown } | null) | undefined
                trace_id?: string[] | ({ [x: string]: unknown } | null) | undefined
                span_id?: string[] | ({ [x: string]: unknown } | null) | undefined
                parent_id?: string | ({ [x: string]: unknown } | null) | undefined
                name?: string[] | ({ [x: string]: unknown } | null) | undefined
                span_kind?: string[] | ({ [x: string]: unknown } | null) | undefined
                status_code?: string[] | ({ [x: string]: unknown } | null) | undefined
                attribute?: string[] | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                sort?: 'id' | 'start_time' | undefined
                order?: 'asc' | 'desc' | undefined
                start_time?: string | ({ [x: string]: unknown } | null) | undefined
                end_time?: string | ({ [x: string]: unknown } | null) | undefined
                trace_id?: string[] | ({ [x: string]: unknown } | null) | undefined
                span_id?: string[] | ({ [x: string]: unknown } | null) | undefined
                parent_id?: string | ({ [x: string]: unknown } | null) | undefined
                name?: string[] | ({ [x: string]: unknown } | null) | undefined
                span_kind?: string[] | ({ [x: string]: unknown } | null) | undefined
                status_code?: string[] | ({ [x: string]: unknown } | null) | undefined
                attribute?: string[] | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
      $post:
        | {
            input: { param: { project_identifier: string } } & { json: CreateSpansRequestBody }
            output: CreateSpansResponseBody
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { project_identifier: string } } & { json: CreateSpansRequestBody }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { project_identifier: string } } & { json: CreateSpansRequestBody }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { project_identifier: string } } & { json: CreateSpansRequestBody }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { project_identifier: string } } & { json: CreateSpansRequestBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { project_identifier: string } } & { json: CreateSpansRequestBody }
            output: string
            outputFormat: 'text'
            status: 503
          }
    }
  } & {
    '/v1/span_annotations': {
      $post:
        | {
            input: { query: { sync?: boolean | undefined } } & { json: AnnotateSpansRequestBody }
            output: AnnotateSpansResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { sync?: boolean | undefined } } & { json: AnnotateSpansRequestBody }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { query: { sync?: boolean | undefined } } & { json: AnnotateSpansRequestBody }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { sync?: boolean | undefined } } & { json: AnnotateSpansRequestBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/span_notes': {
      $post:
        | {
            input: { json: CreateSpanNoteRequestBody }
            output: CreateSpanNoteResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateSpanNoteRequestBody }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: CreateSpanNoteRequestBody }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: CreateSpanNoteRequestBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/spans/:span_identifier': {
      $delete:
        | {
            input: { param: { span_identifier: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { span_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { span_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { span_identifier: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/prompts': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: GetPromptsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
      $post:
        | {
            input: { json: CreatePromptRequestBody }
            output: CreatePromptResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreatePromptRequestBody }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: CreatePromptRequestBody }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/prompts/:prompt_identifier/versions': {
      $get:
        | {
            input: { param: { prompt_identifier: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: GetPromptVersionsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { prompt_identifier: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { prompt_identifier: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { prompt_identifier: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
      $post:
        | {
            input: { param: { prompt_identifier: string } } & {
              json: CreatePromptVersionRequestBody
            }
            output: CreatePromptVersionResponseBody
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { prompt_identifier: string } } & {
              json: CreatePromptVersionRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { prompt_identifier: string } } & {
              json: CreatePromptVersionRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { prompt_identifier: string } } & {
              json: CreatePromptVersionRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/prompt_versions/:prompt_version_id': {
      $get:
        | {
            input: { param: { prompt_version_id: string } }
            output: GetPromptResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { prompt_version_id: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { prompt_version_id: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { prompt_version_id: string } }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/prompts/:prompt_identifier/tags/:tag_name': {
      $get:
        | {
            input: { param: { prompt_identifier: string; tag_name: string } }
            output: GetPromptResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { prompt_identifier: string; tag_name: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { prompt_identifier: string; tag_name: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { prompt_identifier: string; tag_name: string } }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/prompts/:prompt_identifier/latest': {
      $get:
        | {
            input: { param: { prompt_identifier: string } }
            output: GetPromptResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { prompt_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { prompt_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { prompt_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/prompt_versions/:prompt_version_id/tags': {
      $get:
        | {
            input: { param: { prompt_version_id: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: GetPromptVersionTagsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { prompt_version_id: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { prompt_version_id: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { prompt_version_id: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
      $post:
        | {
            input: { param: { prompt_version_id: string } } & { json: PromptVersionTagData }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { prompt_version_id: string } } & { json: PromptVersionTagData }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { prompt_version_id: string } } & { json: PromptVersionTagData }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { prompt_version_id: string } } & { json: PromptVersionTagData }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/prompt_versions/:prompt_version_id/tags/:tag_name': {
      $delete:
        | {
            input: { param: { prompt_version_id: string; tag_name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { prompt_version_id: string; tag_name: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { prompt_version_id: string; tag_name: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { prompt_version_id: string; tag_name: string } }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/prompts/:prompt_identifier': {
      $patch:
        | {
            input: { param: { prompt_identifier: string } } & { json: PatchPromptRequestBody }
            output: PatchPromptResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { prompt_identifier: string } } & { json: PatchPromptRequestBody }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { prompt_identifier: string } } & { json: PatchPromptRequestBody }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { prompt_identifier: string } } & { json: PatchPromptRequestBody }
            output: string
            outputFormat: 'text'
            status: 422
          }
      $delete:
        | {
            input: { param: { prompt_identifier: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { prompt_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { prompt_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { prompt_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/projects': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                include_experiment_projects?: boolean | undefined
                include_dataset_evaluator_projects?: boolean | undefined
                name_contains?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: GetProjectsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                include_experiment_projects?: boolean | undefined
                include_dataset_evaluator_projects?: boolean | undefined
                name_contains?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                include_experiment_projects?: boolean | undefined
                include_dataset_evaluator_projects?: boolean | undefined
                name_contains?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
      $post:
        | {
            input: { json: CreateProjectRequestBody }
            output: CreateProjectResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateProjectRequestBody }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: CreateProjectRequestBody }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/projects/:project_identifier': {
      $get:
        | {
            input: { param: { project_identifier: string } }
            output: GetProjectResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { project_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { project_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 422
          }
      $put:
        | {
            input: { param: { project_identifier: string } } & { json: UpdateProjectRequestBody }
            output: UpdateProjectResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_identifier: string } } & { json: UpdateProjectRequestBody }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { project_identifier: string } } & { json: UpdateProjectRequestBody }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { project_identifier: string } } & { json: UpdateProjectRequestBody }
            output: string
            outputFormat: 'text'
            status: 422
          }
      $delete:
        | {
            input: { param: { project_identifier: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { project_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { project_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { project_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/projects/:project_identifier/retention': {
      $patch:
        | {
            input: { param: { project_identifier: string } } & {
              json: SetProjectRetentionPolicyRequestBody
            }
            output: SetProjectRetentionPolicyResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_identifier: string } } & {
              json: SetProjectRetentionPolicyRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { project_identifier: string } } & {
              json: SetProjectRetentionPolicyRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { project_identifier: string } } & {
              json: SetProjectRetentionPolicyRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/model_providers': {
      $get:
        | { input: {}; output: GetModelProvidersResponseBody; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 403 }
    }
  } & {
    '/v1/custom_model_providers': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: GetCustomModelProvidersResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/sessions/:session_identifier': {
      $get:
        | {
            input: { param: { session_identifier: string } }
            output: GetSessionResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { session_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { session_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 422
          }
      $delete:
        | {
            input: { param: { session_identifier: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { session_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { session_identifier: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { session_identifier: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/sessions/delete': {
      $post:
        | {
            input: { json: DeleteSessionsRequestBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: DeleteSessionsRequestBody }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: DeleteSessionsRequestBody }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/projects/:project_identifier/sessions': {
      $get:
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                filter?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: GetSessionsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                filter?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                filter?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                filter?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { project_identifier: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                filter?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/session_annotations': {
      $post:
        | {
            input: { query: { sync?: boolean | undefined } } & { json: AnnotateSessionsRequestBody }
            output: AnnotateSessionsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { sync?: boolean | undefined } } & { json: AnnotateSessionsRequestBody }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { query: { sync?: boolean | undefined } } & { json: AnnotateSessionsRequestBody }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { sync?: boolean | undefined } } & { json: AnnotateSessionsRequestBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/session_notes': {
      $post:
        | {
            input: { json: CreateSessionNoteRequestBody }
            output: CreateSessionNoteResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateSessionNoteRequestBody }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: CreateSessionNoteRequestBody }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: CreateSessionNoteRequestBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/document_annotations': {
      $post:
        | {
            input: { query: { sync?: boolean | undefined } } & {
              json: AnnotateSpanDocumentsRequestBody
            }
            output: AnnotateSpanDocumentsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { sync?: boolean | undefined } } & {
              json: AnnotateSpanDocumentsRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { query: { sync?: boolean | undefined } } & {
              json: AnnotateSpanDocumentsRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { sync?: boolean | undefined } } & {
              json: AnnotateSpanDocumentsRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/user': {
      $get:
        | { input: {}; output: GetViewerResponseBody; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: string; outputFormat: 'text'; status: 403 }
    }
  } & {
    '/v1/users': {
      $get:
        | {
            input: { query: { cursor?: string | undefined; limit?: number | undefined } }
            output: GetUsersResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { cursor?: string | undefined; limit?: number | undefined } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { query: { cursor?: string | undefined; limit?: number | undefined } }
            output: string
            outputFormat: 'text'
            status: 422
          }
      $post:
        | {
            input: { json: CreateUserRequestBody }
            output: CreateUserResponseBody
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateUserRequestBody }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: CreateUserRequestBody }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: CreateUserRequestBody }
            output: string
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { json: CreateUserRequestBody }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/users/:user_id': {
      $delete:
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { user_id: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { user_id: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { user_id: string } }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/secrets': {
      $put:
        | {
            input: { json: UpsertOrDeleteSecretsRequest }
            output: ResponseBodyUpsertOrDeleteSecretsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpsertOrDeleteSecretsRequest }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: UpsertOrDeleteSecretsRequest }
            output: string
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { json: UpsertOrDeleteSecretsRequest }
            output: string
            outputFormat: 'text'
            status: 507
          }
    }
  } & {
    '/v1/user/api_keys': {
      $get:
        | { input: {}; output: GetApiKeysResponseBody; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: string; outputFormat: 'text'; status: 403 }
      $post:
        | {
            input: { json: CreateApiKeyRequestBody }
            output: CreateApiKeyResponseBody
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateApiKeyRequestBody }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: CreateApiKeyRequestBody }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: CreateApiKeyRequestBody }
            output: string
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { json: CreateApiKeyRequestBody }
            output: string
            outputFormat: 'text'
            status: 507
          }
    }
  } & {
    '/v1/users/api_keys': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: GetAllUserApiKeysResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/user/api_keys/:api_key_id': {
      $delete:
        | {
            input: { param: { api_key_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { api_key_id: string } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { api_key_id: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { api_key_id: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { api_key_id: string } }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/system/api_keys': {
      $get:
        | { input: {}; output: GetApiKeysResponseBody; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: string; outputFormat: 'text'; status: 403 }
      $post:
        | {
            input: { json: CreateApiKeyRequestBody }
            output: CreateApiKeyResponseBody
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateApiKeyRequestBody }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: CreateApiKeyRequestBody }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: CreateApiKeyRequestBody }
            output: string
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { json: CreateApiKeyRequestBody }
            output: string
            outputFormat: 'text'
            status: 507
          }
    }
  } & {
    '/v1/system/api_keys/:api_key_id': {
      $delete:
        | {
            input: { param: { api_key_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { api_key_id: string } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { api_key_id: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { api_key_id: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { api_key_id: string } }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/chat/completions': {
      $post:
        | {
            input: { json: CreateChatCompletionRequestBody }
            output: ChatCompletion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateChatCompletionRequestBody }
            output: ChatCompletionErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateChatCompletionRequestBody }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: CreateChatCompletionRequestBody }
            output: ChatCompletionErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateChatCompletionRequestBody }
            output: ChatCompletionErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/auth/login': {
      $post: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/auth/logout': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/auth/refresh': {
      $post: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/auth/password-reset-email': {
      $post: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/auth/password-reset': {
      $post: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/auth/ldap/login': {
      $post: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/oauth2/:idp_name/login': {
      $post:
        | {
            input: { param: { idp_name: string } } & {
              query: { returnUrl?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { idp_name: string } } & {
              query: { returnUrl?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { idp_name: string } } & {
              query: { returnUrl?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { idp_name: string } } & {
              query: { returnUrl?: string | ({ [x: string]: unknown } | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/oauth2/:idp_name/tokens': {
      $get:
        | {
            input: { param: { idp_name: string } } & {
              query: {
                state: string
                code?: string | ({ [x: string]: unknown } | null) | undefined
                error?: string | ({ [x: string]: unknown } | null) | undefined
                error_description?: string | ({ [x: string]: unknown } | null) | undefined
              }
            } & {
              cookie: {
                'phoenix-oauth2-state': string
                'phoenix-oauth2-login-context'?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                'phoenix-oauth2-nonce': string
                'phoenix-oauth2-code-verifier'?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { idp_name: string } } & {
              query: {
                state: string
                code?: string | ({ [x: string]: unknown } | null) | undefined
                error?: string | ({ [x: string]: unknown } | null) | undefined
                error_description?: string | ({ [x: string]: unknown } | null) | undefined
              }
            } & {
              cookie: {
                'phoenix-oauth2-state': string
                'phoenix-oauth2-login-context'?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
                'phoenix-oauth2-nonce': string
                'phoenix-oauth2-code-verifier'?:
                  | string
                  | ({ [x: string]: unknown } | null)
                  | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/agents/server/sessions/:session_id/chat': {
      $post:
        | {
            input: { param: { session_id: string } } & { json: LegacyChatRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } } & { json: LegacyChatRequest }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & { json: LegacyChatRequest }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { session_id: string } } & { json: LegacyChatRequest }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { session_id: string } } & { json: LegacyChatRequest }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & { json: LegacyChatRequest }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { session_id: string } } & { json: LegacyChatRequest }
            output: string
            outputFormat: 'text'
            status: 507
          }
    }
  } & {
    '/v1/agent_sessions': {
      $post:
        | {
            input: { json: CreateAgentSessionRequestBody }
            output: CreateAgentSessionResponseBody
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateAgentSessionRequestBody }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: CreateAgentSessionRequestBody }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: CreateAgentSessionRequestBody }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: CreateAgentSessionRequestBody }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: CreateAgentSessionRequestBody }
            output: string
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { json: CreateAgentSessionRequestBody }
            output: string
            outputFormat: 'text'
            status: 507
          }
      $get:
        | {
            input: {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: ListAgentSessionsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/agent_sessions/:session_id': {
      $patch:
        | {
            input: { param: { session_id: string } } & { json: PatchAgentSessionRequestBody }
            output: PatchAgentSessionResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } } & { json: PatchAgentSessionRequestBody }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & { json: PatchAgentSessionRequestBody }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { session_id: string } } & { json: PatchAgentSessionRequestBody }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { session_id: string } } & { json: PatchAgentSessionRequestBody }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & { json: PatchAgentSessionRequestBody }
            output: AgentSessionConflictError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string } } & { json: PatchAgentSessionRequestBody }
            output: string
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { session_id: string } } & { json: PatchAgentSessionRequestBody }
            output: string
            outputFormat: 'text'
            status: 507
          }
      $get:
        | {
            input: { param: { session_id: string } }
            output: GetAgentSessionResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { session_id: string } }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { session_id: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { session_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/agent_sessions/:session_id/messages': {
      $get:
        | {
            input: { param: { session_id: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: ListAgentSessionMessagesResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                cursor?: string | ({ [x: string]: unknown } | null) | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/v1/agent_sessions/:session_id/compact': {
      $post:
        | {
            input: { param: { session_id: string } } & { json: CompactAgentSessionRequestBody }
            output: CompactAgentSessionResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } } & { json: CompactAgentSessionRequestBody }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & { json: CompactAgentSessionRequestBody }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { session_id: string } } & { json: CompactAgentSessionRequestBody }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { session_id: string } } & { json: CompactAgentSessionRequestBody }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & { json: CompactAgentSessionRequestBody }
            output: AgentSessionConflictError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string } } & { json: CompactAgentSessionRequestBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { session_id: string } } & { json: CompactAgentSessionRequestBody }
            output: string
            outputFormat: 'text'
            status: 502
          }
        | {
            input: { param: { session_id: string } } & { json: CompactAgentSessionRequestBody }
            output: string
            outputFormat: 'text'
            status: 507
          }
    }
  } & {
    '/v1/agent_sessions/:session_id/tool_outputs': {
      $post:
        | {
            input: { param: { session_id: string } } & {
              json: SubmitAgentSessionToolOutputsRequestBody
            }
            output: SubmitAgentSessionToolOutputsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } } & {
              json: SubmitAgentSessionToolOutputsRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & {
              json: SubmitAgentSessionToolOutputsRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { session_id: string } } & {
              json: SubmitAgentSessionToolOutputsRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { session_id: string } } & {
              json: SubmitAgentSessionToolOutputsRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & {
              json: SubmitAgentSessionToolOutputsRequestBody
            }
            output: AgentSessionConflictError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string } } & {
              json: SubmitAgentSessionToolOutputsRequestBody
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { session_id: string } } & {
              json: SubmitAgentSessionToolOutputsRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 507
          }
    }
  } & {
    '/v1/agent_sessions/:session_id/tool_approvals': {
      $post:
        | {
            input: { param: { session_id: string } } & {
              json: SubmitAgentSessionToolApprovalsRequestBody
            }
            output: SubmitAgentSessionToolApprovalsResponseBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } } & {
              json: SubmitAgentSessionToolApprovalsRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & {
              json: SubmitAgentSessionToolApprovalsRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { session_id: string } } & {
              json: SubmitAgentSessionToolApprovalsRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { session_id: string } } & {
              json: SubmitAgentSessionToolApprovalsRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & {
              json: SubmitAgentSessionToolApprovalsRequestBody
            }
            output: AgentSessionConflictError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string } } & {
              json: SubmitAgentSessionToolApprovalsRequestBody
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { session_id: string } } & {
              json: SubmitAgentSessionToolApprovalsRequestBody
            }
            output: string
            outputFormat: 'text'
            status: 507
          }
    }
  } & {
    '/v1/agent_sessions/:session_id/chat': {
      $post:
        | {
            input: { param: { session_id: string } } & { json: ChatRequestBody }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } } & { json: ChatRequestBody }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & { json: ChatRequestBody }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { session_id: string } } & { json: ChatRequestBody }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { session_id: string } } & { json: ChatRequestBody }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & { json: ChatRequestBody }
            output: AgentSessionConflictError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string } } & { json: ChatRequestBody }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { session_id: string } } & { json: ChatRequestBody }
            output: string
            outputFormat: 'text'
            status: 507
          }
    }
  } & {
    '/arize_phoenix_version': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/healthz': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/readyz': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
