type ConsentRequest = {
  client_id: string
  redirect_uri: string
  code_challenge: string
  code_challenge_method: string
  resource: string
  state?: string | undefined
  workspace_id?: string | undefined
  workspace_name?: string | undefined
  csrf?: string | undefined
}
type ConsentResponse = { redirect_to?: string | undefined }
type WorkspaceInfo = {
  id?: string | undefined
  name?: string | undefined
  is_default?: boolean | undefined
}
type AuthorizeContext = {
  client_name?: string | undefined
  client_logo_uri?: string | undefined
  workspaces?: WorkspaceInfo[] | undefined
  csrf_token?: string | undefined
}
type AuthorizationServerMetadata = {
  issuer?: string | undefined
  authorization_endpoint?: string | undefined
  token_endpoint?: string | undefined
  revocation_endpoint?: string | undefined
  registration_endpoint?: string | undefined
  response_types_supported?: string[] | undefined
  grant_types_supported?: string[] | undefined
  code_challenge_methods_supported?: string[] | undefined
  token_endpoint_auth_methods_supported?: string[] | undefined
}
type ClientRegistrationRequest = {
  client_name: string
  redirect_uris: string[]
  logo_uri?: string | undefined
  software_id?: string | undefined
  software_version?: string | undefined
  client_uri?: string | undefined
}
type ClientRegistrationResponse = {
  client_id?: string | undefined
  client_id_issued_at?: bigint | undefined
  client_name?: string | undefined
  logo_uri?: string | undefined
  software_id?: string | undefined
  software_version?: string | undefined
  client_uri?: string | undefined
  redirect_uris?: string[] | undefined
  token_endpoint_auth_method?: string | undefined
  grant_types?: string[] | undefined
  response_types?: string[] | undefined
}
type TokenResponse = {
  access_token?: string | undefined
  refresh_token?: string | undefined
  token_type?: string | undefined
  expires_in?: bigint | undefined
  workspace_id?: string | undefined
  workspace_name?: string | undefined
}
type OAuthError = { error?: string | undefined; error_description?: string | undefined }
type ValidatedToken = {
  user_name?: string | undefined
  workspace_id?: string | undefined
  workspace_name?: string | undefined
  resource?: string | undefined
  expires_at?: string | undefined
}
type Request = { enrolled: boolean; project_ids: string[] }
type Response = {
  enrolled?: number | undefined
  cleared?: number | undefined
  unknown_project_ids?: string[] | undefined
  already_run_project_ids?: string[] | undefined
  reset_project_ids?: string[] | undefined
}
type AnalyticsQueryRequest = { query: string }
type JsonNode = { [x: string]: unknown }
type AnalyticsQueryResponse = { results?: JsonNode[] | undefined }
type ErrorMessage = {
  code?: number | undefined
  message?: string | undefined
  details?: string | undefined
}
type ScopedAnalyticsQueryRequest = { query: string; project_id?: string | undefined }
type DashboardSavedQuery = {
  id?: string | undefined
  project_id?: string | undefined
  sql: string
  created_at?: string | undefined
  created_by?: string | undefined
}
type UsageProjectsRequest = {
  workspace_ids: string[]
  project_ids?: string[] | undefined
  name?: string | undefined
  limit?: number | undefined
}
type WorkspaceProjectName = {
  workspace_id?: string | undefined
  project_id?: string | undefined
  name?: string | undefined
}
type UsageProjectsResponse = { projects?: WorkspaceProjectName[] | undefined }
type BiInformation = {
  workspace_id?: string | undefined
  user?: string | undefined
  count?: bigint | undefined
}
type BiInformationResponse = { bi_information?: BiInformation[] | undefined }
type WorkspaceProjectUserCount = {
  workspace_id?: string | undefined
  project_id?: string | undefined
  project_name?: string | undefined
  user?: string | undefined
  count?: bigint | undefined
}
type UsageByWorkspaceProjectUserResponse = { breakdown?: WorkspaceProjectUserCount[] | undefined }
type WorkspaceSpansCount = { workspace?: string | undefined; span_count?: number | undefined }
type SpansCountResponse = { workspaces_spans_count?: WorkspaceSpansCount[] | undefined }
type WorkspaceTraceCount = { workspace?: string | undefined; trace_count?: number | undefined }
type TraceCountResponse = { workspaces_traces_count?: WorkspaceTraceCount[] | undefined }
type AgentConfigValueWrite = {
  key: string
  value?: string | undefined
  type: 'string' | 'integer' | 'float' | 'boolean' | 'prompt' | 'prompt_commit'
  description?: string | undefined
}
type AgentBlueprintWrite = {
  id?: string | undefined
  type: 'blueprint' | 'mask'
  description?: string | undefined
  values: AgentConfigValueWrite[]
}
type AgentConfigCreateWrite = {
  project_id?: string | undefined
  project_name?: string | undefined
  id?: string | undefined
  blueprint: AgentBlueprintWrite
}
type ErrorMessageWrite = { errors?: string[] | undefined }
type AgentConfigEnv = {
  id?: string | undefined
  project_id?: string | undefined
  env_name: string
  blueprint_id: string
  created_by?: string | undefined
  created_at?: string | undefined
  ended_at?: string | undefined
}
type AgentConfigEnvUpdate = { project_id: string; envs: AgentConfigEnv[] }
type AgentConfigValuePublic = {
  key: string
  value?: string | undefined
  type: 'string' | 'integer' | 'float' | 'boolean' | 'prompt' | 'prompt_commit'
  description?: string | undefined
}
type AgentBlueprintPublic = {
  id?: string | undefined
  name?: string | undefined
  type: 'blueprint' | 'mask'
  description?: string | undefined
  envs?: string[] | undefined
  created_by?: string | undefined
  created_at?: string | undefined
  last_updated_by?: string | undefined
  last_updated_at?: string | undefined
  values: AgentConfigValuePublic[]
}
type ErrorMessagePublic = {
  code?: number | undefined
  message?: string | undefined
  details?: string | undefined
}
type AgentConfigEnvSetByName = { blueprint_name: string }
type AgentConfigValueHistory = {
  key: string
  value?: string | undefined
  type: 'string' | 'integer' | 'float' | 'boolean' | 'prompt' | 'prompt_commit'
  description?: string | undefined
}
type AgentBlueprintHistory = {
  id?: string | undefined
  name?: string | undefined
  type: 'blueprint' | 'mask'
  description?: string | undefined
  envs?: string[] | undefined
  created_by?: string | undefined
  created_at?: string | undefined
  last_updated_by?: string | undefined
  last_updated_at?: string | undefined
  values: AgentConfigValueHistory[]
}
type BlueprintPageHistory = {
  page?: number | undefined
  size?: number | undefined
  total?: bigint | undefined
  content?: AgentBlueprintHistory[] | undefined
}
type ErrorMessageHistory = { errors?: string[] | undefined }
type AgentConfigRemoveValues = {
  project_id?: string | undefined
  project_name?: string | undefined
  keys: string[]
}
type AgentInsightsJob = {
  id?: string | undefined
  project_id: string
  status?: 'enabled' | 'disabled' | undefined
  auto_first_run_enrolled?: boolean | undefined
  auto_first_run_at?: string | undefined
  last_scan_at?: string | undefined
  last_failure_reason?: string | undefined
  last_failure_detail?: string | undefined
  last_failed_at?: string | undefined
  guidance?: string | undefined
  guidance_updated_by?: string | undefined
  guidance_updated_at?: string | undefined
  guidance_version?: number | undefined
  results_guidance_version?: number | undefined
  created_at?: string | undefined
  created_by?: string | undefined
  last_updated_at?: string | undefined
  last_updated_by?: string | undefined
}
type AgentInsightsJobUpdate = { status: 'enabled' | 'disabled' }
type AgentInsightsGuidanceUpdate = { guidance: string }
type AgentInsightsIssue = {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  cause?: string | undefined
  suggested_fix?: string | undefined
  status?: 'open' | 'resolved' | 'closed' | undefined
  severity?: 'critical' | 'high' | 'medium' | 'low' | undefined
  traces_query?: string | undefined
  total_occurrences?: bigint | undefined
  latest_count?: bigint | undefined
  total?: bigint | undefined
  users_impacted?: bigint | undefined
  total_users?: bigint | undefined
  first_seen?: string | undefined
  last_seen?: string | undefined
  days_reported?: bigint | undefined
  close_note?: string | undefined
  status_changed_by?: string | undefined
  status_changed_at?: string | undefined
  created_by?: string | undefined
  created_at?: string | undefined
  last_updated_by?: string | undefined
  last_updated_at?: string | undefined
}
type AgentInsightsIssuePage = {
  page?: number | undefined
  size?: number | undefined
  total?: bigint | undefined
  content?: AgentInsightsIssue[] | undefined
}
type ReportedIssue = {
  id?: string | undefined
  name: string
  description?: string | undefined
  cause?: string | undefined
  suggested_fix?: string | undefined
  traces_query?: string | undefined
  severity: 'critical' | 'high' | 'medium' | 'low'
  count: bigint
  total_count: bigint
  users_impacted: bigint
  total_users: bigint
  metadata?: JsonNode | undefined
}
type AgentInsightsReport = { project_id: string; report_day: string; issues: ReportedIssue[] }
type AgentInsightsIssueDetail = {
  report_day?: string | undefined
  count?: bigint | undefined
  total_count?: bigint | undefined
  users_impacted?: bigint | undefined
  total_users?: bigint | undefined
  metadata?: JsonNode | undefined
}
type AgentInsightsIssueWithDetails = {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  cause?: string | undefined
  suggested_fix?: string | undefined
  status?: 'open' | 'resolved' | 'closed' | undefined
  severity?: 'critical' | 'high' | 'medium' | 'low' | undefined
  traces_query?: string | undefined
  close_note?: string | undefined
  status_changed_by?: string | undefined
  status_changed_at?: string | undefined
  created_by?: string | undefined
  created_at?: string | undefined
  last_updated_by?: string | undefined
  last_updated_at?: string | undefined
  details?: AgentInsightsIssueDetail[] | undefined
}
type AgentInsightsIssueUpdate = {
  project_id: string
  status: 'open' | 'resolved' | 'closed'
  close_note?: string | undefined
}
type WebhookPublic = {
  id?: string | undefined
  name?: string | undefined
  url: string
  secret_token?: string | undefined
  headers?: { [x: string]: string } | undefined
  created_at?: string | undefined
  created_by?: string | undefined
  last_updated_at?: string | undefined
  last_updated_by?: string | undefined
}
type AlertTriggerConfigPublic = {
  id?: string | undefined
  alert_trigger_id?: string | undefined
  type:
    | 'scope:project'
    | 'threshold:feedback_score'
    | 'threshold:cost'
    | 'threshold:latency'
    | 'threshold:errors'
    | 'filter:guardrail_type'
  config_value?: { [x: string]: string } | undefined
  group_index?: number | undefined
  created_at?: string | undefined
  created_by?: string | undefined
  last_updated_at?: string | undefined
  last_updated_by?: string | undefined
}
type AlertTriggerPublic = {
  id?: string | undefined
  alert_id?: string | undefined
  event_type:
    | 'trace:errors'
    | 'trace:feedback_score'
    | 'trace_thread:feedback_score'
    | 'prompt:created'
    | 'prompt:committed'
    | 'trace:guardrails_triggered'
    | 'prompt:deleted'
    | 'experiment:finished'
    | 'trace:cost'
    | 'trace:latency'
  trigger_configs?: AlertTriggerConfigPublic[] | undefined
  created_at?: string | undefined
  created_by?: string | undefined
}
type AlertPublic = {
  id?: string | undefined
  name?: string | undefined
  enabled?: boolean | undefined
  alert_type?: 'general' | 'slack' | 'pagerduty' | undefined
  metadata?: { [x: string]: string } | undefined
  custom_fields?: { [x: string]: string } | undefined
  webhook: WebhookPublic
  triggers?: AlertTriggerPublic[] | undefined
  created_at?: string | undefined
  created_by?: string | undefined
  last_updated_at?: string | undefined
  last_updated_by?: string | undefined
  project_id?: string | undefined
}
type AlertPagePublic = {
  page?: number | undefined
  size?: number | undefined
  total?: bigint | undefined
  content?: AlertPublic[] | undefined
  sortable_by?: string[] | undefined
}
type WebhookWrite = {
  id?: string | undefined
  name?: string | undefined
  url: string
  secret_token?: string | undefined
  headers?: { [x: string]: string } | undefined
}
type AlertTriggerConfigWrite = {
  id?: string | undefined
  type:
    | 'scope:project'
    | 'threshold:feedback_score'
    | 'threshold:cost'
    | 'threshold:latency'
    | 'threshold:errors'
    | 'filter:guardrail_type'
  config_value?: { [x: string]: string } | undefined
  group_index?: number | undefined
}
type AlertTriggerWrite = {
  id?: string | undefined
  event_type:
    | 'trace:errors'
    | 'trace:feedback_score'
    | 'trace_thread:feedback_score'
    | 'prompt:created'
    | 'prompt:committed'
    | 'trace:guardrails_triggered'
    | 'prompt:deleted'
    | 'experiment:finished'
    | 'trace:cost'
    | 'trace:latency'
  trigger_configs?: AlertTriggerConfigWrite[] | undefined
}
type AlertWrite = {
  id?: string | undefined
  name?: string | undefined
  enabled?: boolean | undefined
  alert_type?: 'general' | 'slack' | 'pagerduty' | undefined
  metadata?: { [x: string]: string } | undefined
  custom_fields?: { [x: string]: string } | undefined
  webhook: WebhookWrite
  triggers?: AlertTriggerWrite[] | undefined
  project_id?: string | undefined
}
type BatchDelete = { ids: string[] }
type WebhookExamples = { response_examples?: { [x: string]: { [x: string]: unknown } } | undefined }
type WebhookTestResult = {
  status?: 'success' | 'failure' | undefined
  status_code?: number | undefined
  request_body?: string | undefined
  error_message?: string | undefined
}
type AnnotationQueueItemIds = { ids: string[] }
type ScoreConditionPublic = { score_name: string; operator: '>' | '<' | '='; value: number }
type ConditionGroupPublic = { conditions: ScoreConditionPublic[] }
type ConditionsPublic = { groups: ConditionGroupPublic[] }
type AnnotationQueueAutomationPublic = {
  enabled?: boolean | undefined
  conditions?: ConditionsPublic | undefined
  max_items_in_queue?: number | undefined
}
type AnnotationQueueAnnotatorViewPublic = {
  html?: string | undefined
  kit_version?: number | undefined
  summary?: string | undefined
}
type AnnotationQueueReviewerPublic = { username?: string | undefined; status?: bigint | undefined }
type FeedbackScoreAveragePublic = { name: string; value: number }
type AnnotationQueuePublic = {
  id?: string | undefined
  project_id: string
  project_name?: string | undefined
  name: string
  description?: string | undefined
  instructions?: string | undefined
  scope: 'trace' | 'thread'
  comments_enabled?: boolean | undefined
  feedback_definition_names?: string[] | undefined
  annotators_per_item?: number | undefined
  lock_timeout_seconds?: number | undefined
  automation?: AnnotationQueueAutomationPublic | undefined
  annotator_view?: AnnotationQueueAnnotatorViewPublic | undefined
  reviewers?: AnnotationQueueReviewerPublic[] | undefined
  feedback_scores?: FeedbackScoreAveragePublic[] | undefined
  items_count?: bigint | undefined
  created_at?: string | undefined
  created_by?: string | undefined
  last_updated_at?: string | undefined
  last_updated_by?: string | undefined
}
type AnnotationQueuePagePublic = {
  page?: number | undefined
  size?: number | undefined
  total?: bigint | undefined
  content?: AnnotationQueuePublic[] | undefined
  sortableBy?: string[] | undefined
}
type ScoreConditionWrite = { score_name: string; operator: '>' | '<' | '='; value: number }
type ConditionGroupWrite = { conditions: ScoreConditionWrite[] }
type ConditionsWrite = { groups: ConditionGroupWrite[] }
type AnnotationQueueAutomationWrite = {
  enabled?: boolean | undefined
  conditions?: ConditionsWrite | undefined
  max_items_in_queue?: number | undefined
  clear_max_items_in_queue?: boolean | undefined
}
type AnnotationQueueAnnotatorViewWrite = {
  html?: string | undefined
  kit_version?: number | undefined
  summary?: string | undefined
}
type AnnotationQueueWrite = {
  id?: string | undefined
  project_id: string
  name: string
  description?: string | undefined
  instructions?: string | undefined
  scope: 'trace' | 'thread'
  comments_enabled?: boolean | undefined
  feedback_definition_names?: string[] | undefined
  annotators_per_item?: number | undefined
  lock_timeout_seconds?: number | undefined
  automation?: AnnotationQueueAutomationWrite | undefined
  annotator_view?: AnnotationQueueAnnotatorViewWrite | undefined
}
type AnnotationQueueBatchWrite = { annotation_queues: AnnotationQueueWrite[] }
type ScoreCondition = { score_name: string; operator: '>' | '<' | '='; value: number }
type ConditionGroup = { conditions: ScoreCondition[] }
type Conditions = { groups: ConditionGroup[] }
type AnnotationQueueAutomation = {
  enabled?: boolean | undefined
  conditions?: Conditions | undefined
  max_items_in_queue?: number | undefined
  clear_max_items_in_queue?: boolean | undefined
}
type AnnotationQueueAnnotatorView = {
  html?: string | undefined
  kit_version?: number | undefined
  summary?: string | undefined
}
type AnnotationQueueUpdate = {
  name?: string | undefined
  description?: string | undefined
  instructions?: string | undefined
  comments_enabled?: boolean | undefined
  feedback_definition_names?: string[] | undefined
  annotators_per_item?: number | undefined
  lock_timeout_seconds?: number | undefined
  automation?: AnnotationQueueAutomation | undefined
  annotator_view?: AnnotationQueueAnnotatorView | undefined
}
type ItemLockInfo = { active_locks?: number | undefined; locked_by?: string[] | undefined }
type LocksResponse = { locks?: { [x: string]: ItemLockInfo } | undefined }
type LockResponse = {
  acquired?: boolean | undefined
  item_id?: string | undefined
  locked_by?: string | undefined
  expires_at?: string | undefined
}
type AnnotationQueueItemIdsPublic = { ids: string[] }
type AnnotationQueueItemPublic = {
  id?: string | undefined
  source?: 'manual' | 'automated' | undefined
}
type AnnotationQueueItemsPublic = { content?: AnnotationQueueItemPublic[] | undefined }
type AssertionResultBatchItem = {
  entity_id: string
  project_name?: string | undefined
  project_id?: string | undefined
  name: string
  status: 'passed' | 'failed'
  reason?: string | undefined
  source: 'ui' | 'sdk' | 'online_scoring'
}
type AssertionResultBatch = {
  entity_type: 'TRACE' | 'SPAN' | 'THREAD'
  assertion_results: AssertionResultBatchItem[]
}
type Attachment = {
  link?: string | undefined
  file_name: string
  file_size: bigint
  mime_type: string
}
type AttachmentPage = {
  page?: number | undefined
  size?: number | undefined
  total?: bigint | undefined
  content?: Attachment[] | undefined
  sortableBy?: string[] | undefined
}
type MultipartUploadPart = { e_tag: string; part_number: number }
type CompleteMultipartUploadRequest = {
  file_name: string
  project_name?: string | undefined
  entity_type: 'trace' | 'span'
  entity_id: string
  container_id?: string | undefined
  file_size: bigint
  mime_type?: string | undefined
  upload_id: string
  uploaded_file_parts: MultipartUploadPart[]
}
type StartMultipartUploadRequest = {
  file_name: string
  num_of_file_parts: number
  mime_type?: string | undefined
  project_name?: string | undefined
  entity_type: 'trace' | 'span'
  entity_id: string
  container_id?: string | undefined
  path: string
}
type StartMultipartUploadResponse = { upload_id: string; pre_sign_urls: string[] }
type AuthDetailsHolder = { [x: string]: unknown }
type WorkspaceNameHolder = { workspace_name?: string | undefined }
type ProjectReferencePublic = { project_id: string; project_name: string }
type AutomationRuleEvaluatorObjectObjectPublic = {
  id?: string | undefined
  project_id?: string | undefined
  project_name?: string | undefined
  projects?: ProjectReferencePublic[] | undefined
  name: string
  sampling_rate?: number | undefined
  enabled?: boolean | undefined
  trigger_scope?: 'production' | 'experiment' | 'both' | undefined
  created_at?: string | undefined
  created_by?: string | undefined
  last_updated_at?: string | undefined
  last_updated_by?: string | undefined
  type:
    | 'llm_as_judge'
    | 'user_defined_metric_python'
    | 'trace_thread_llm_as_judge'
    | 'trace_thread_user_defined_metric_python'
    | 'span_llm_as_judge'
    | 'span_user_defined_metric_python'
  action: 'evaluator' | 'annotation_queue_router'
}
type AutomationRuleEvaluatorPagePublic = {
  page?: number | undefined
  size?: number | undefined
  total?: bigint | undefined
  content?: AutomationRuleEvaluatorObjectObjectPublic[] | undefined
  sortable_by?: string[] | undefined
}
type AutomationRuleEvaluatorWrite = {
  project_id?: string | undefined
  project_ids?: string[] | undefined
  name: string
  sampling_rate?: number | undefined
  enabled?: boolean | undefined
  trigger_scope?: 'production' | 'experiment' | 'both' | undefined
  type:
    | 'llm_as_judge'
    | 'user_defined_metric_python'
    | 'trace_thread_llm_as_judge'
    | 'trace_thread_user_defined_metric_python'
    | 'span_llm_as_judge'
    | 'span_user_defined_metric_python'
  action: 'evaluator' | 'annotation_queue_router'
}
type AutomationRuleEvaluatorPublic = {
  id?: string | undefined
  project_id?: string | undefined
  project_name?: string | undefined
  projects?: ProjectReferencePublic[] | undefined
  name: string
  sampling_rate?: number | undefined
  enabled?: boolean | undefined
  trigger_scope?: 'production' | 'experiment' | 'both' | undefined
  created_at?: string | undefined
  created_by?: string | undefined
  last_updated_at?: string | undefined
  last_updated_by?: string | undefined
  type:
    | 'llm_as_judge'
    | 'user_defined_metric_python'
    | 'trace_thread_llm_as_judge'
    | 'trace_thread_user_defined_metric_python'
    | 'span_llm_as_judge'
    | 'span_user_defined_metric_python'
  action: 'evaluator' | 'annotation_queue_router'
}
type AutomationRuleEvaluatorUpdate = {
  name: string
  sampling_rate?: number | undefined
  enabled?: boolean | undefined
  trigger_scope?: 'production' | 'experiment' | 'both' | undefined
  project_id?: string | undefined
  project_ids?: string[] | undefined
  type?:
    | 'llm_as_judge'
    | 'user_defined_metric_python'
    | 'trace_thread_llm_as_judge'
    | 'trace_thread_user_defined_metric_python'
    | 'span_llm_as_judge'
    | 'span_user_defined_metric_python'
    | undefined
  action: 'evaluator' | 'annotation_queue_router'
}
type LogItem = {
  timestamp?: string | undefined
  rule_id?: string | undefined
  level?: 'INFO' | 'WARN' | 'ERROR' | 'DEBUG' | 'TRACE' | undefined
  message?: string | undefined
  markers?: { [x: string]: string } | undefined
}
type LogPage = {
  content?: LogItem[] | undefined
  page?: number | undefined
  size?: number | undefined
  total?: bigint | undefined
}
type Message = { role: string; content: JsonNode }
type StreamOptions = { includeUsage?: boolean | undefined }
type JsonSchema = {
  name?: string | undefined
  strict?: boolean | undefined
  schema?: { [x: string]: { [x: string]: unknown } } | undefined
}
type ResponseFormat = {
  type?: 'text' | 'json_object' | 'json_schema' | undefined
  jsonSchema?: JsonSchema | undefined
}
type Function = {
  name?: string | undefined
  description?: string | undefined
  strict?: boolean | undefined
  parameters?: { [x: string]: { [x: string]: unknown } } | undefined
}
type Tool = { type?: 'function' | undefined; function?: Function | undefined }
type PromptCacheOptions = { mode?: string | undefined; ttl?: string | undefined }
type FunctionCall = { name?: string | undefined; arguments?: string | undefined }
type ChatCompletionRequest = {
  model?: string | undefined
  messages?: Message[] | undefined
  temperature?: number | undefined
  topP?: number | undefined
  n?: number | undefined
  stream?: boolean | undefined
  streamOptions?: StreamOptions | undefined
  stop?: string[] | undefined
  maxTokens?: number | undefined
  maxCompletionTokens?: number | undefined
  presencePenalty?: number | undefined
  frequencyPenalty?: number | undefined
  logitBias?: { [x: string]: number } | undefined
  user?: string | undefined
  responseFormat?: ResponseFormat | undefined
  seed?: number | undefined
  tools?: Tool[] | undefined
  toolChoice?: { [x: string]: unknown } | undefined
  parallelToolCalls?: boolean | undefined
  store?: boolean | undefined
  metadata?: { [x: string]: string } | undefined
  reasoningEffort?: string | undefined
  serviceTier?: string | undefined
  promptCacheKey?: string | undefined
  promptCacheOptions?: PromptCacheOptions | undefined
  logprobs?: boolean | undefined
  topLogprobs?: number | undefined
  functions?: Function[] | undefined
  functionCall?: FunctionCall | undefined
}
type ToolCall = {
  id?: string | undefined
  index?: number | undefined
  type?: 'function' | undefined
  function?: FunctionCall | undefined
}
type AssistantMessage = {
  role?: 'system' | 'user' | 'assistant' | 'tool' | 'function' | undefined
  content?: string | undefined
  reasoningContent?: string | undefined
  name?: string | undefined
  toolCalls?: ToolCall[] | undefined
  refusal?: string | undefined
  functionCall?: FunctionCall | undefined
}
type Delta = {
  role?: string | undefined
  content?: string | undefined
  reasoningContent?: string | undefined
  toolCalls?: ToolCall[] | undefined
  functionCall?: FunctionCall | undefined
}
type LogProb = {
  token?: string | undefined
  logprob?: number | undefined
  bytes?: number[] | undefined
}
type LogProbs = { content?: LogProb[] | undefined }
type ChatCompletionChoice = {
  index?: number | undefined
  message?: AssistantMessage | undefined
  delta?: Delta | undefined
  finishReason?: string | undefined
  logprobs?: LogProbs | undefined
}
type PromptTokensDetails = {
  cachedTokens?: number | undefined
  cacheWriteTokens?: number | undefined
}
type CompletionTokensDetails = { reasoningTokens?: number | undefined }
type Usage = {
  totalTokens?: number | undefined
  promptTokens?: number | undefined
  promptTokensDetails?: PromptTokensDetails | undefined
  completionTokens?: number | undefined
  completionTokensDetails?: CompletionTokensDetails | undefined
}
type ChatCompletionResponse = {
  id?: string | undefined
  created?: bigint | undefined
  model?: string | undefined
  choices?: ChatCompletionChoice[] | undefined
  usage?: Usage | undefined
  systemFingerprint?: string | undefined
  serviceTier?: string | undefined
}
type JsonNodePublic = { [x: string]: unknown }
type DashboardPublic = {
  id?: string | undefined
  workspace_id?: string | undefined
  project_id?: string | undefined
  name: string
  type?: 'multi_project' | 'experiments' | undefined
  scope?: 'workspace' | 'insights' | undefined
  description?: string | undefined
  config: JsonNodePublic
  created_by?: string | undefined
  last_updated_by?: string | undefined
  created_at?: string | undefined
  last_updated_at?: string | undefined
}
type DashboardPagePublic = {
  content?: DashboardPublic[] | undefined
  page?: number | undefined
  size?: number | undefined
  total?: bigint | undefined
  sortable_by?: string[] | undefined
}
type JsonNodeWrite = { [x: string]: unknown }
type DashboardWrite = {
  project_id?: string | undefined
  project_name?: string | undefined
  name: string
  type?: 'multi_project' | 'experiments' | undefined
  description?: string | undefined
  config: JsonNodeWrite
}
type DashboardUpdatePublic = {
  name?: string | undefined
  type?: 'multi_project' | 'experiments' | undefined
  description?: string | undefined
  config?: JsonNodePublic | undefined
}
type DashboardWidgetQueryRequest = {
  interval_start?: string | undefined
  interval_end?: string | undefined
}
type DatasetItemChangesPublic = { [x: string]: unknown }
type EvaluatorItemPublic = {
  name: string
  type: 'llm_judge' | 'code_metric'
  config: JsonNodePublic
}
type ExecutionPolicyPublic = {
  runs_per_item?: number | undefined
  pass_threshold?: number | undefined
}
type DatasetVersionPublic = {
  id?: string | undefined
  dataset_id?: string | undefined
  version_hash?: string | undefined
  tags?: string[] | undefined
  is_latest?: boolean | undefined
  version_name?: string | undefined
  items_total?: number | undefined
  items_added?: number | undefined
  items_modified?: number | undefined
  items_deleted?: number | undefined
  change_description?: string | undefined
  metadata?: { [x: string]: string } | undefined
  evaluators?: EvaluatorItemPublic[] | undefined
  execution_policy?: ExecutionPolicyPublic | undefined
  created_at?: string | undefined
  created_by?: string | undefined
  last_updated_at?: string | undefined
  last_updated_by?: string | undefined
}
type DatasetItemFilter = {
  field?: string | undefined
  operator?:
    | 'contains'
    | 'not_contains'
    | 'starts_with'
    | 'ends_with'
    | '='
    | '!='
    | '>'
    | '>='
    | '<'
    | '<='
    | 'is_empty'
    | 'is_not_empty'
    | 'in'
    | 'not_in'
    | undefined
  key?: string | undefined
  value?: string | undefined
}
type EvaluatorItem = { name: string; type: 'llm_judge' | 'code_metric'; config: JsonNode }
type ExecutionPolicy = { runs_per_item?: number | undefined; pass_threshold?: number | undefined }
type DatasetItemUpdate = {
  input?: string | undefined
  expected_output?: string | undefined
  metadata?: JsonNode | undefined
  data?: JsonNode | undefined
  description?: string | undefined
  tags?: string[] | undefined
  tags_to_add?: string[] | undefined
  tags_to_remove?: string[] | undefined
  evaluators?: EvaluatorItem[] | undefined
  execution_policy?: ExecutionPolicy | undefined
  clear_execution_policy?: boolean | undefined
}
type DatasetItemBatchUpdate = {
  ids?: string[] | undefined
  filters?: DatasetItemFilter[] | undefined
  dataset_id?: string | undefined
  update: DatasetItemUpdate
  merge_tags?: boolean | undefined
}
type DatasetVersionSummaryPublic = {
  id?: string | undefined
  version_hash?: string | undefined
  version_name?: string | undefined
  change_description?: string | undefined
  tags?: string[] | undefined
}
type DatasetPublic = {
  id?: string | undefined
  name: string
  project_id?: string | undefined
  type?: 'dataset' | 'evaluation_suite' | undefined
  visibility?: 'private' | 'public' | undefined
  tags?: string[] | undefined
  description?: string | undefined
  created_at?: string | undefined
  created_by?: string | undefined
  last_updated_at?: string | undefined
  last_updated_by?: string | undefined
  experiment_count?: bigint | undefined
  dataset_items_count?: bigint | undefined
  optimization_count?: bigint | undefined
  most_recent_experiment_at?: string | undefined
  last_created_experiment_at?: string | undefined
  most_recent_optimization_at?: string | undefined
  last_created_optimization_at?: string | undefined
  status?: 'unknown' | 'processing' | 'completed' | 'failed' | undefined
  latest_version?: DatasetVersionSummaryPublic | undefined
}
type DatasetPagePublic = {
  content?: DatasetPublic[] | undefined
  page?: number | undefined
  size?: number | undefined
  total?: bigint | undefined
  sortableBy?: string[] | undefined
}
type DatasetWrite = {
  id?: string | undefined
  name: string
  project_id?: string | undefined
  project_name?: string | undefined
  type?: 'dataset' | 'evaluation_suite' | undefined
  visibility?: 'private' | 'public' | undefined
  tags?: string[] | undefined
  description?: string | undefined
}
type EvaluatorItemWrite = { name: string; type: 'llm_judge' | 'code_metric'; config: JsonNodeWrite }
type ExecutionPolicyWrite = {
  runs_per_item?: number | undefined
  pass_threshold?: number | undefined
}
type DatasetItemWrite = {
  id?: string | undefined
  trace_id?: string | undefined
  span_id?: string | undefined
  source: 'manual' | 'trace' | 'span' | 'sdk'
  data: JsonNode
  description?: string | undefined
  tags?: string[] | undefined
  evaluators?: EvaluatorItemWrite[] | undefined
  execution_policy?: ExecutionPolicyWrite | undefined
}
type DatasetItemBatchWrite = {
  dataset_name?: string | undefined
  dataset_id?: string | undefined
  project_name?: string | undefined
  project_id?: string | undefined
  items: DatasetItemWrite[]
  batch_group_id?: string | undefined
  copy_from_dataset_id?: string | undefined
  copy_from_version_id?: string | undefined
}
type SpanEnrichmentOptions = {
  includeTags?: boolean | undefined
  includeFeedbackScores?: boolean | undefined
  includeComments?: boolean | undefined
  includeUsage?: boolean | undefined
  includeMetadata?: boolean | undefined
}
type CreateDatasetItemsFromSpansRequest = {
  span_ids: string[]
  enrichment_options: SpanEnrichmentOptions
  evaluators?: EvaluatorItem[] | undefined
  execution_policy?: ExecutionPolicy | undefined
  field_mappings?: { [x: string]: string } | undefined
}
type TraceEnrichmentOptions = {
  includeSpans?: boolean | undefined
  includeTags?: boolean | undefined
  includeFeedbackScores?: boolean | undefined
  includeComments?: boolean | undefined
  includeUsage?: boolean | undefined
  includeMetadata?: boolean | undefined
}
type CreateDatasetItemsFromTracesRequest = {
  trace_ids: string[]
  enrichment_options: TraceEnrichmentOptions
  evaluators?: EvaluatorItem[] | undefined
  execution_policy?: ExecutionPolicy | undefined
  field_mappings?: { [x: string]: string } | undefined
}
type DatasetUpdate = {
  name: string
  description?: string | undefined
  visibility?: 'private' | 'public' | undefined
  tags?: string[] | undefined
}
type DatasetIdentifier = { dataset_name: string; project_name?: string | undefined }
type DatasetItemsDelete = {
  item_ids?: string[] | undefined
  dataset_id?: string | undefined
  filters?: DatasetItemFilter[] | undefined
  batch_group_id?: string | undefined
}
type DatasetExpansionWrite = {
  model: string
  sample_count?: number | undefined
  preserve_fields?: string[] | undefined
  variation_instructions?: string | undefined
  custom_prompt?: string | undefined
  max_completion_tokens?: number | undefined
}
type JsonListString = { [x: string]: unknown } | { [x: string]: unknown }[] | string
type ValueEntry = {
  value?: number | undefined
  reason?: string | undefined
  category_name?: string | undefined
  source?: 'ui' | 'sdk' | 'online_scoring' | undefined
  last_updated_at?: string | undefined
  span_type?: string | undefined
  span_id?: string | undefined
  source_queue_id?: string | undefined
  author?: string | undefined
}
type FeedbackScore = {
  name: string
  category_name?: string | undefined
  value: number
  reason?: string | undefined
  source: 'ui' | 'sdk' | 'online_scoring'
  source_queue_id?: string | undefined
  created_at?: string | undefined
  last_updated_at?: string | undefined
  created_by?: string | undefined
  last_updated_by?: string | undefined
  value_by_author?: { [x: string]: ValueEntry } | undefined
}
type Comment = {
  id?: string | undefined
  text: string
  source_queue_id?: string | undefined
  created_at?: string | undefined
  last_updated_at?: string | undefined
  created_by?: string | undefined
  last_updated_by?: string | undefined
}
type AssertionResult = {
  value?: string | undefined
  passed?: boolean | undefined
  reason?: string | undefined
}
type ExperimentItem = {
  id?: string | undefined
  experiment_id: string
  dataset_item_id: string
  trace_id: string
  project_id?: string | undefined
  project_name?: string | undefined
  input?: JsonListString | undefined
  output?: JsonListString | undefined
  trace_metadata?: JsonListString | undefined
  feedback_scores?: FeedbackScore[] | undefined
  comments?: Comment[] | undefined
  total_estimated_cost?: number | undefined
  duration?: number | undefined
  usage?: { [x: string]: bigint } | undefined
  created_at?: string | undefined
  last_updated_at?: string | undefined
  created_by?: string | undefined
  last_updated_by?: string | undefined
  trace_visibility_mode?: 'default' | 'hidden' | undefined
  description?: string | undefined
  execution_policy?: ExecutionPolicy | undefined
  assertion_results?: AssertionResult[] | undefined
  status?: 'passed' | 'failed' | undefined
}
type ExperimentRunSummary = {
  passed_runs?: number | undefined
  total_runs?: number | undefined
  status?: 'passed' | 'failed' | undefined
}
type DatasetItem = {
  id?: string | undefined
  dataset_item_id?: string | undefined
  trace_id?: string | undefined
  span_id?: string | undefined
  source: 'manual' | 'trace' | 'span' | 'sdk'
  data: JsonNode
  description?: string | undefined
  tags?: string[] | undefined
  evaluators?: EvaluatorItem[] | undefined
  execution_policy?: ExecutionPolicy | undefined
  experiment_items?: ExperimentItem[] | undefined
  run_summaries_by_experiment?: { [x: string]: ExperimentRunSummary } | undefined
  dataset_id?: string | undefined
  created_at?: string | undefined
  last_updated_at?: string | undefined
  created_by?: string | undefined
  last_updated_by?: string | undefined
}
type DatasetExpansionResponse = {
  generated_samples?: DatasetItem[] | undefined
  model?: string | undefined
  total_generated?: number | undefined
  generation_time?: string | undefined
}
type JsonNodeCompare = { [x: string]: unknown }
type EvaluatorItemCompare = {
  name: string
  type: 'llm_judge' | 'code_metric'
  config: JsonNodeCompare
}
type ExecutionPolicyCompare = {
  runs_per_item?: number | undefined
  pass_threshold?: number | undefined
}
type JsonListStringCompare = { [x: string]: unknown } | { [x: string]: unknown }[] | string
type ValueEntryCompare = {
  value?: number | undefined
  reason?: string | undefined
  category_name?: string | undefined
  source?: 'ui' | 'sdk' | 'online_scoring' | undefined
  last_updated_at?: string | undefined
  span_type?: string | undefined
  span_id?: string | undefined
  source_queue_id?: string | undefined
  author?: string | undefined
}
type FeedbackScoreCompare = {
  name: string
  category_name?: string | undefined
  value: number
  reason?: string | undefined
  source: 'ui' | 'sdk' | 'online_scoring'
  source_queue_id?: string | undefined
  created_at?: string | undefined
  last_updated_at?: string | undefined
  created_by?: string | undefined
  last_updated_by?: string | undefined
  value_by_author?: { [x: string]: ValueEntryCompare } | undefined
}
type CommentCompare = {
  id?: string | undefined
  text: string
  source_queue_id?: string | undefined
  created_at?: string | undefined
  last_updated_at?: string | undefined
  created_by?: string | undefined
  last_updated_by?: string | undefined
}
type AssertionResultCompare = {
  value?: string | undefined
  passed?: boolean | undefined
  reason?: string | undefined
}
type ExperimentItemCompare = {
  id?: string | undefined
  experiment_id: string
  dataset_item_id: string
  trace_id: string
  project_id?: string | undefined
  input?: JsonListStringCompare | undefined
  output?: JsonListStringCompare | undefined
  trace_metadata?: JsonListStringCompare | undefined
  feedback_scores?: FeedbackScoreCompare[] | undefined
  comments?: CommentCompare[] | undefined
  total_estimated_cost?: number | undefined
  duration?: number | undefined
  usage?: { [x: string]: bigint } | undefined
  created_at?: string | undefined
  last_updated_at?: string | undefined
  created_by?: string | undefined
  last_updated_by?: string | undefined
  trace_visibility_mode?: 'default' | 'hidden' | undefined
  description?: string | undefined
  execution_policy?: ExecutionPolicyCompare | undefined
  assertion_results?: AssertionResultCompare[] | undefined
  status?: 'passed' | 'failed' | undefined
}
type ExperimentRunSummaryCompare = {
  passed_runs?: number | undefined
  total_runs?: number | undefined
  status?: 'passed' | 'failed' | undefined
}
type DatasetItemCompare = {
  id?: string | undefined
  dataset_item_id?: string | undefined
  trace_id?: string | undefined
  span_id?: string | undefined
  source: 'manual' | 'trace' | 'span' | 'sdk'
  data: JsonNode
  description?: string | undefined
  tags?: string[] | undefined
  evaluators?: EvaluatorItemCompare[] | undefined
  execution_policy?: ExecutionPolicyCompare | undefined
  experiment_items?: ExperimentItemCompare[] | undefined
  run_summaries_by_experiment?: { [x: string]: ExperimentRunSummaryCompare } | undefined
  dataset_id?: string | undefined
  created_at?: string | undefined
  last_updated_at?: string | undefined
  created_by?: string | undefined
  last_updated_by?: string | undefined
}
type ColumnCompare = {
  name?: string | undefined
  types?: ('string' | 'number' | 'object' | 'boolean' | 'array' | 'null')[] | undefined
  filter_field_prefix?: string | undefined
  filterField?: string | undefined
}
type DatasetItemPageCompare = {
  content?: DatasetItemCompare[] | undefined
  page?: number | undefined
  size?: number | undefined
  total?: bigint | undefined
  columns?: ColumnCompare[] | undefined
  sortableBy?: string[] | undefined
}
type DatasetIdentifierPublic = { dataset_name: string; project_name?: string | undefined }
type ProjectStatItemObjectPublic = {
  name?: string | undefined
  type?: 'COUNT' | 'PERCENTAGE' | 'AVG' | undefined
}
type ProjectStatsPublic = { stats?: ProjectStatItemObjectPublic[] | undefined }
type DatasetExportJobPublic = {
  id?: string | undefined
  dataset_id?: string | undefined
  dataset_name?: string | undefined
  status?: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | undefined
  file_path?: string | undefined
  error_message?: string | undefined
  created_at?: string | undefined
  last_updated_at?: string | undefined
  expires_at?: string | undefined
  viewed_at?: string | undefined
  created_by?: string | undefined
  last_updated_by?: string | undefined
}
type ExperimentItemPublic = {
  id?: string | undefined
  experiment_id: string
  dataset_item_id: string
  trace_id: string
  project_id?: string | undefined
  created_at?: string | undefined
  last_updated_at?: string | undefined
  created_by?: string | undefined
  last_updated_by?: string | undefined
  trace_visibility_mode?: 'default' | 'hidden' | undefined
}
type ExperimentRunSummaryPublic = {
  passed_runs?: number | undefined
  total_runs?: number | undefined
  status?: 'passed' | 'failed' | undefined
}
type DatasetItemPublic = {
  id?: string | undefined
  dataset_item_id?: string | undefined
  trace_id?: string | undefined
  span_id?: string | undefined
  source: 'manual' | 'trace' | 'span' | 'sdk'
  data: JsonNode
  description?: string | undefined
  tags?: string[] | undefined
  evaluators?: EvaluatorItemPublic[] | undefined
  execution_policy?: ExecutionPolicyPublic | undefined
  experiment_items?: ExperimentItemPublic[] | undefined
  run_summaries_by_experiment?: { [x: string]: ExperimentRunSummaryPublic } | undefined
  dataset_id?: string | undefined
  created_at?: string | undefined
  last_updated_at?: string | undefined
  created_by?: string | undefined
  last_updated_by?: string | undefined
}
type ColumnPublic = {
  name?: string | undefined
  types?: ('string' | 'number' | 'object' | 'boolean' | 'array' | 'null')[] | undefined
  filter_field_prefix?: string | undefined
  filterField?: string | undefined
}
type DatasetItemPagePublic = {
  content?: DatasetItemPublic[] | undefined
  page?: number | undefined
  size?: number | undefined
  total?: bigint | undefined
  columns?: ColumnPublic[] | undefined
  sortableBy?: string[] | undefined
}
type Column = {
  name?: string | undefined
  types?: ('string' | 'number' | 'object' | 'boolean' | 'array' | 'null')[] | undefined
  filter_field_prefix?: string | undefined
  filterField?: string | undefined
}
type PageColumns = { columns?: Column[] | undefined }
type DatasetItemStreamRequest = {
  dataset_name: string
  last_retrieved_id?: string | undefined
  steam_limit?: number | undefined
  dataset_version?: string | undefined
  project_name?: string | undefined
  filters?: string | undefined
}
type DatasetVersionDiffStats = {
  itemsAdded?: number | undefined
  itemsModified?: number | undefined
  itemsDeleted?: number | undefined
  itemsUnchanged?: number | undefined
}
type DatasetVersionDiff = {
  from_version?: string | undefined
  to_version?: string | undefined
  statistics?: DatasetVersionDiffStats | undefined
}
type DatasetVersionTag = { tag: string }
type DatasetVersionUpdatePublic = {
  change_description?: string | undefined
  tags_to_add?: string[] | undefined
}
type DatasetVersionPagePublic = {
  content?: DatasetVersionPublic[] | undefined
  page?: number | undefined
  size?: number | undefined
  total?: bigint | undefined
}
type DatasetVersionRestorePublic = { version_ref: string }
type DatasetVersionRetrieveRequestPublic = { version_name: string }
type EnvironmentPublic = {
  id?: string | undefined
  name: string
  description?: string | undefined
  color?: string | undefined
  position?: number | undefined
  created_at?: string | undefined
  created_by?: string | undefined
  last_updated_at?: string | undefined
  last_updated_by?: string | undefined
}
type EnvironmentPagePublic = {
  page?: number | undefined
  size?: number | undefined
  total?: bigint | undefined
  content?: EnvironmentPublic[] | undefined
  sortableBy?: string[] | undefined
}
type EnvironmentWrite = {
  id?: string | undefined
  name: string
  description?: string | undefined
  color?: string | undefined
  position?: number | undefined
}
type EnvironmentUpdate = {
  name?: string | undefined
  description?: string | undefined
  color?: string | undefined
  position?: number | undefined
}
type ExperimentScore = { name: string; value: number }
type ExperimentUpdate = {
  name?: string | undefined
  metadata?: JsonNode | undefined
  tags?: string[] | undefined
  tags_to_add?: string[] | undefined
  tags_to_remove?: string[] | undefined
  type?: 'regular' | 'trial' | 'mini-batch' | 'mutation' | undefined
  status?: 'running' | 'completed' | 'cancelled' | 'failed' | undefined
  experiment_scores?: ExperimentScore[] | undefined
}
type ExperimentBatchUpdate = {
  ids: string[]
  update: ExperimentUpdate
  merge_tags?: boolean | undefined
}
type IdsHolder = { ids: string[] }
type JsonListStringPublic = { [x: string]: unknown } | { [x: string]: unknown }[] | string
type CommentPublic = {
  id?: string | undefined
  text: string
  source_queue_id?: string | undefined
  created_at?: string | undefined
  last_updated_at?: string | undefined
  created_by?: string | undefined
  last_updated_by?: string | undefined
}
type PercentageValuesPublic = {
  p50?: number | undefined
  p90?: number | undefined
  p99?: number | undefined
}
type ExperimentScorePublic = { name: string; value: number }
type PromptVersionLinkPublic = {
  prompt_version_id?: string | undefined
  commit?: string | undefined
  prompt_id?: string | undefined
  prompt_name?: string | undefined
}
type AssertionScoreAveragePublic = { name: string; value: number }
type ExperimentPublic = {
  id?: string | undefined
  dataset_name: string | null
  dataset_id?: string | undefined
  project_id?: string | undefined
  project_name?: string | undefined
  name?: string | undefined
  metadata?: JsonListStringPublic | undefined
  tags?: string[] | undefined
  type?: 'regular' | 'trial' | 'mini-batch' | 'mutation' | undefined
  evaluation_method?: 'dataset' | 'evaluation_suite' | undefined
  optimization_id?: string | undefined
  feedback_scores?: FeedbackScoreAveragePublic[] | undefined
  comments?: CommentPublic[] | undefined
  trace_count?: bigint | undefined
  dataset_item_count?: bigint | undefined
  created_at?: string | undefined
  duration?: PercentageValuesPublic | undefined
  total_estimated_cost?: number | undefined
  total_estimated_cost_avg?: number | undefined
  usage?: { [x: string]: number } | undefined
  last_updated_at?: string | undefined
  created_by?: string | undefined
  last_updated_by?: string | undefined
  status?: 'running' | 'completed' | 'cancelled' | 'failed' | undefined
  finished_at?: string | undefined
  experiment_scores?: ExperimentScorePublic[] | undefined
  prompt_version?: PromptVersionLinkPublic | undefined
  prompt_versions?: PromptVersionLinkPublic[] | undefined
  dataset_version_id?: string | undefined
  dataset_version_summary?: DatasetVersionSummaryPublic | undefined
  pass_rate?: number | undefined
  passed_count?: bigint | undefined
  total_count?: bigint | undefined
  assertion_scores?: AssertionScoreAveragePublic[] | undefined
}
type ExperimentPagePublic = {
  page?: number | undefined
  size?: number | undefined
  total?: bigint | undefined
  content?: ExperimentPublic[] | undefined
  sortableBy?: string[] | undefined
}
type JsonListStringWrite = { [x: string]: unknown } | { [x: string]: unknown }[] | string
type ExperimentScoreWrite = { name: string; value: number }
type PromptVersionLinkWrite = { id: string }
type ExperimentWrite = {
  id?: string | undefined
  dataset_name: string | null
  project_id?: string | undefined
  project_name?: string | undefined
  name?: string | undefined
  metadata?: JsonListStringWrite | undefined
  tags?: string[] | undefined
  type?: 'regular' | 'trial' | 'mini-batch' | 'mutation' | undefined
  evaluation_method?: 'dataset' | 'evaluation_suite' | undefined
  optimization_id?: string | undefined
  status?: 'running' | 'completed' | 'cancelled' | 'failed' | undefined
  experiment_scores?: ExperimentScoreWrite[] | undefined
  prompt_version?: PromptVersionLinkWrite | undefined
  prompt_versions?: PromptVersionLinkWrite[] | undefined
  dataset_version_id?: string | undefined
}
type ExperimentItemsBatch = { experiment_items: ExperimentItem[] }
type ExperimentItemsDelete = { ids: string[] }
type DeleteIdsHolder = { ids: string[] }
type PromptVersionLink = {
  id: string
  commit?: string | undefined
  version_number?: string | undefined
  prompt_id?: string | undefined
  prompt_name?: string | undefined
}
type PromptVariant = {
  model: string
  messages: Message[]
  configs?: { [x: string]: JsonNode } | undefined
  prompt_versions?: PromptVersionLink[] | undefined
  experiment_name?: string | undefined
}
type ExperimentExecutionRequest = {
  dataset_name: string
  dataset_version_id?: string | undefined
  prompts: PromptVariant[]
  project_name?: string | undefined
  project_id?: string | undefined
  dataset_id: string
  version_hash?: string | undefined
  prompt_versions?: PromptVersionLink[] | undefined
  selected_rule_ids?: string[] | undefined
  filters?: string | undefined
}
type ExperimentInfo = {
  experiment_id?: string | undefined
  prompt_index?: number | undefined
  total_items?: number | undefined
}
type ExperimentExecutionResponse = {
  experiments?: ExperimentInfo[] | undefined
  total_items?: number | undefined
}
type JsonListStringExperimentItemBulkWriteView =
  | { [x: string]: unknown }
  | { [x: string]: unknown }[]
  | string
type ErrorInfoExperimentItemBulkWriteView = {
  exception_type: string
  message?: string | undefined
  traceback: string
}
type TraceExperimentItemBulkWriteView = {
  id?: string | undefined
  project_name?: string | undefined
  name?: string | undefined
  start_time: string
  end_time?: string | undefined
  input?: JsonListStringExperimentItemBulkWriteView | undefined
  output?: JsonListStringExperimentItemBulkWriteView | undefined
  metadata?: JsonListStringExperimentItemBulkWriteView | undefined
  tags?: string[] | undefined
  error_info?: ErrorInfoExperimentItemBulkWriteView | undefined
  last_updated_at?: string | undefined
  ttft?: number | undefined
  thread_id?: string | undefined
  source?: 'sdk' | 'experiment' | 'playground' | 'optimization' | 'evaluator' | undefined
  environment?: string | undefined
}
type SpanExperimentItemBulkWriteView = {
  id?: string | undefined
  parent_span_id?: string | undefined
  name?: string | undefined
  type?: 'general' | 'tool' | 'llm' | 'guardrail' | undefined
  start_time: string
  end_time?: string | undefined
  input?: JsonListStringExperimentItemBulkWriteView | undefined
  output?: JsonListStringExperimentItemBulkWriteView | undefined
  metadata?: JsonListStringExperimentItemBulkWriteView | undefined
  model?: string | undefined
  provider?: string | undefined
  tags?: string[] | undefined
  usage?: { [x: string]: number } | undefined
  error_info?: ErrorInfoExperimentItemBulkWriteView | undefined
  last_updated_at?: string | undefined
  total_estimated_cost?: number | undefined
  total_estimated_cost_version?: string | undefined
  ttft?: number | undefined
  source?: 'sdk' | 'experiment' | 'playground' | 'optimization' | 'evaluator' | undefined
  environment?: string | undefined
}
type ValueEntryExperimentItemBulkWriteView = {
  value?: number | undefined
  reason?: string | undefined
  category_name?: string | undefined
  source?: 'ui' | 'sdk' | 'online_scoring' | undefined
  last_updated_at?: string | undefined
  span_type?: string | undefined
  span_id?: string | undefined
  source_queue_id?: string | undefined
  author?: string | undefined
}
type FeedbackScoreExperimentItemBulkWriteView = {
  name: string
  category_name?: string | undefined
  value: number
  reason?: string | undefined
  source: 'ui' | 'sdk' | 'online_scoring'
  source_queue_id?: string | undefined
  created_at?: string | undefined
  last_updated_at?: string | undefined
  created_by?: string | undefined
  last_updated_by?: string | undefined
  value_by_author?: { [x: string]: ValueEntryExperimentItemBulkWriteView } | undefined
}
type ExperimentItemBulkRecordExperimentItemBulkWriteView = {
  dataset_item_id: string
  evaluate_task_result?: JsonListStringExperimentItemBulkWriteView | undefined
  trace?: TraceExperimentItemBulkWriteView | undefined
  spans?: SpanExperimentItemBulkWriteView[] | undefined
  feedback_scores?: FeedbackScoreExperimentItemBulkWriteView[] | undefined
}
type ExperimentItemBulkUploadExperimentItemBulkWriteView = {
  experiment_name: string
  dataset_name: string
  experiment_id?: string | undefined
  project_name?: string | undefined
  items: ExperimentItemBulkRecordExperimentItemBulkWriteView[]
}
type ScoreNamePublic = { name?: string | undefined; type?: string | undefined }
type FeedbackScoreNamesPublic = { scores?: ScoreNamePublic[] | undefined }
type GroupContent = { label?: string | undefined }
type GroupDetail = { group_sorting?: string[] | undefined }
type GroupDetails = { groups_details?: GroupDetail[] | undefined }
type ExperimentGroupResponse = {
  content?: { [x: string]: GroupContent } | undefined
  details?: GroupDetails | undefined
}
type PercentageValues = {
  p50?: number | undefined
  p90?: number | undefined
  p99?: number | undefined
}
type FeedbackScoreAverage = { name: string; value: number }
type AggregationData = {
  experiment_count?: bigint | undefined
  trace_count?: bigint | undefined
  total_estimated_cost?: number | undefined
  total_estimated_cost_avg?: number | undefined
  duration?: PercentageValues | undefined
  feedback_scores?: FeedbackScoreAverage[] | undefined
  experiment_scores?: FeedbackScoreAverage[] | undefined
  pass_rate_avg?: number | undefined
  passed_count_sum?: bigint | undefined
  total_count_sum?: bigint | undefined
}
type GroupContentWithAggregations = {
  label?: string | undefined
  aggregations?: AggregationData | undefined
}
type ExperimentGroupAggregationsResponse = {
  content?: { [x: string]: GroupContentWithAggregations } | undefined
}
type ExperimentItemStreamRequest = {
  experiment_name: string
  limit?: number | undefined
  last_retrieved_id?: string | undefined
  truncate?: boolean | undefined
  project_name?: string | undefined
}
type ExperimentStreamRequestPublic = {
  name: string
  limit?: number | undefined
  last_retrieved_id?: string | undefined
  project_name?: string | undefined
}
type FeedbackObjectPublic = {
  id?: string | undefined
  name: string
  description?: string | undefined
  createdAt?: string | undefined
  createdBy?: string | undefined
  lastUpdatedAt?: string | undefined
  lastUpdatedBy?: string | undefined
  type: 'numerical' | 'categorical' | 'boolean'
}
type FeedbackDefinitionPagePublic = {
  page?: number | undefined
  size?: number | undefined
  total?: bigint | undefined
  content?: FeedbackObjectPublic[] | undefined
}
type FeedbackCreate = {
  id?: string | undefined
  name: string
  description?: string | undefined
  type: 'numerical' | 'categorical' | 'boolean'
}
type FeedbackPublic = {
  id?: string | undefined
  name: string
  description?: string | undefined
  createdAt?: string | undefined
  createdBy?: string | undefined
  lastUpdatedAt?: string | undefined
  lastUpdatedBy?: string | undefined
  type: 'numerical' | 'categorical' | 'boolean'
}
type FeedbackUpdate = {
  id?: string | undefined
  name: string
  description?: string | undefined
  type: 'numerical' | 'categorical' | 'boolean'
}
type GuardrailPolicyRulePublic = {
  type: 'TOPIC' | 'PII' | 'LLM_JUDGE' | 'PROMPT_INJECTION' | 'CUSTOM_CLASSIFIER'
  config: JsonNode
}
type GuardrailPolicyPublic = {
  id?: string | undefined
  name: string
  description?: string | undefined
  execution_scope?: 'on_request' | 'global' | undefined
  rules: GuardrailPolicyRulePublic[]
  created_at?: string | undefined
  created_by?: string | undefined
  last_updated_at?: string | undefined
  last_updated_by?: string | undefined
}
type GuardrailPolicyPagePublic = {
  content?: GuardrailPolicyPublic[] | undefined
  page?: number | undefined
  size?: number | undefined
  total?: bigint | undefined
  sortable_by?: string[] | undefined
}
type GuardrailPolicyRuleWrite = {
  type: 'TOPIC' | 'PII' | 'LLM_JUDGE' | 'PROMPT_INJECTION' | 'CUSTOM_CLASSIFIER'
  config: JsonNode
}
type GuardrailPolicyWrite = {
  id?: string | undefined
  name: string
  description?: string | undefined
  execution_scope?: 'on_request' | 'global' | undefined
  rules: GuardrailPolicyRuleWrite[]
}
type GuardrailWrite = {
  entity_id: string
  secondary_id: string
  project_name?: string | undefined
  project_id?: string | undefined
  name: 'TOPIC' | 'PII' | 'LLM_JUDGE' | 'PROMPT_INJECTION' | 'CUSTOM_CLASSIFIER'
  result: 'passed' | 'failed'
  config: JsonNode
  details: JsonNode
}
type GuardrailBatchWrite = { guardrails: GuardrailWrite[] }
type ValidationDescriptor = {
  type: 'TOPIC' | 'PII' | 'LLM_JUDGE' | 'PROMPT_INJECTION' | 'CUSTOM_CLASSIFIER'
  config: JsonNode
}
type GuardrailsValidationRequest = { text: string; validations: ValidationDescriptor[] }
type ValidationResult = {
  validation_passed?: boolean | undefined
  type: 'TOPIC' | 'PII' | 'LLM_JUDGE' | 'PROMPT_INJECTION' | 'CUSTOM_CLASSIFIER'
  validation_config: JsonNode
  validation_details: JsonNode
  error?: string | undefined
}
type GuardrailsValidationResponse = {
  validation_passed?: boolean | undefined
  validations: ValidationResult[]
}
type NumberParam = {
  accepted?: boolean | undefined
  min?: number | undefined
  max?: number | undefined
  default?: number | undefined
}
type FlagParam = { accepted?: boolean | undefined }
type EffortParam = {
  accepted?: boolean | undefined
  levels?: string[] | undefined
  default?: string | undefined
}
type ToolsParam = {
  chatCompletions?: 'effortNoneOnly' | 'refused' | undefined
  forcedChoice?: FlagParam | undefined
}
type ModelParams = {
  temperature?: NumberParam | undefined
  topP?: NumberParam | undefined
  topK?: NumberParam | undefined
  frequencyPenalty?: NumberParam | undefined
  presencePenalty?: NumberParam | undefined
  maxOutputTokens?: NumberParam | undefined
  stop?: FlagParam | undefined
  seed?: FlagParam | undefined
  effort?: EffortParam | undefined
  tools?: ToolsParam | undefined
  samplingExclusive?: boolean | undefined
  thinksByDefault?: boolean | undefined
  onlyRoute?: string | undefined
  routes?: { [x: string]: ModelParams } | undefined
}
type CredentialPublic = { key: string; value?: string | undefined; secret?: boolean | undefined }
type ProviderAuthConfigPublic = {
  token_url?: string | undefined
  send_as?: 'form' | 'json' | 'basic' | undefined
  credentials?: CredentialPublic[] | undefined
  token_field?: string | undefined
  expires_field?: string | undefined
  fallback_ttl_seconds?: bigint | undefined
}
type ProviderApiKeyPublic = {
  id?: string | undefined
  provider:
    | 'openai'
    | 'anthropic'
    | 'gemini'
    | 'openrouter'
    | 'vertex-ai'
    | 'bedrock'
    | 'ollama'
    | 'custom-llm'
    | 'opik-free'
  api_key?: string | undefined
  name?: string | undefined
  provider_name?: string | undefined
  headers?: { [x: string]: string } | undefined
  configuration?: { [x: string]: string } | undefined
  base_url?: string | undefined
  auth_config?: ProviderAuthConfigPublic | undefined
  created_at?: string | undefined
  created_by?: string | undefined
  last_updated_at?: string | undefined
  last_updated_by?: string | undefined
  read_only?: boolean | undefined
}
type ProviderApiKeyPagePublic = {
  size?: number | undefined
  total?: bigint | undefined
  content?: ProviderApiKeyPublic[] | undefined
  sortableBy?: string[] | undefined
}
type CredentialWrite = { key: string; value?: string | undefined; secret?: boolean | undefined }
type ProviderAuthConfigWrite = {
  token_url?: string | undefined
  send_as?: 'form' | 'json' | 'basic' | undefined
  credentials?: CredentialWrite[] | undefined
  token_field?: string | undefined
  expires_field?: string | undefined
  fallback_ttl_seconds?: bigint | undefined
}
type ProviderApiKeyWrite = {
  provider:
    | 'openai'
    | 'anthropic'
    | 'gemini'
    | 'openrouter'
    | 'vertex-ai'
    | 'bedrock'
    | 'ollama'
    | 'custom-llm'
    | 'opik-free'
  api_key?: string | undefined
  name?: string | undefined
  provider_name?: string | undefined
  headers?: { [x: string]: string } | undefined
  configuration?: { [x: string]: string } | undefined
  base_url?: string | undefined
  auth_config?: ProviderAuthConfigWrite | undefined
}
type Credential = { key: string; value?: string | undefined; secret?: boolean | undefined }
type ProviderAuthConfig = {
  token_url?: string | undefined
  send_as?: 'form' | 'json' | 'basic' | undefined
  credentials?: Credential[] | undefined
  token_field?: string | undefined
  expires_field?: string | undefined
  fallback_ttl_seconds?: bigint | undefined
}
type ProviderApiKeyUpdate = {
  api_key?: string | undefined
  name?: string | undefined
  provider_name?: string | undefined
  headers?: { [x: string]: string } | undefined
  configuration?: { [x: string]: string } | undefined
  base_url?: string | undefined
  auth_config?: ProviderAuthConfig | undefined
}
type ProviderAuthCheck = {
  provider_id?: string | undefined
  auth_config?: ProviderAuthConfig | undefined
}
type Result = {
  name?: string | undefined
  current?: number | undefined
  previous?: number | undefined
}
type LocalRunnerLogEntry = { stream: string; text: string }
type BridgeCommandSubmitRequest = {
  type: 'ReadFile' | 'WriteFile' | 'EditFile' | 'ListFiles' | 'SearchFiles' | 'Exec'
  args: JsonNode
  timeout_seconds?: number | undefined
}
type BridgeCommandSubmitResponse = { command_id?: string | undefined }
type LocalRunnerJobMetadata = {
  dataset_id?: string | undefined
  dataset_version_id?: string | undefined
  dataset_item_version_id?: string | undefined
  dataset_item_id?: string | undefined
}
type CreateLocalRunnerJobRequest = {
  agent_name: string
  inputs?: JsonNode | undefined
  project_id: string
  mask_id?: string | undefined
  prompt_masks?: { [x: string]: string } | undefined
  blueprint_name?: string | undefined
  metadata?: LocalRunnerJobMetadata | undefined
}
type Param = { name: string; type: string; presence?: 'required' | 'optional' | undefined }
type Agent = {
  name?: string | undefined
  description?: string | undefined
  language?: string | undefined
  executable?: string | undefined
  source_file?: string | undefined
  params?: Param[] | undefined
  timeout?: number | undefined
}
type LocalRunner = {
  id?: string | undefined
  name?: string | undefined
  project_id?: string | undefined
  status?: 'pairing' | 'connected' | 'disconnected' | undefined
  connected_at?: string | undefined
  agents?: Agent[] | undefined
  capabilities?: string[] | undefined
  checklist?: JsonNode | undefined
  type?: 'connect' | 'endpoint' | undefined
}
type BridgeCommand = {
  command_id?: string | undefined
  runner_id?: string | undefined
  type?: 'ReadFile' | 'WriteFile' | 'EditFile' | 'ListFiles' | 'SearchFiles' | 'Exec' | undefined
  status?: 'pending' | 'picked_up' | 'completed' | 'failed' | 'timed_out' | undefined
  args?: JsonNode | undefined
  result?: JsonNode | undefined
  error?: JsonNode | undefined
  timeout_seconds?: number | undefined
  submitted_at?: string | undefined
  picked_up_at?: string | undefined
  completed_at?: string | undefined
  duration_ms?: bigint | undefined
}
type LocalRunnerJob = {
  id?: string | undefined
  runner_id?: string | undefined
  agent_name?: string | undefined
  status?: 'pending' | 'running' | 'completed' | 'failed' | 'cancelled' | undefined
  inputs?: JsonNode | undefined
  result?: JsonNode | undefined
  error?: string | undefined
  project_id?: string | undefined
  trace_id?: string | undefined
  mask_id?: string | undefined
  prompt_masks?: { [x: string]: string } | undefined
  blueprint_name?: string | undefined
  metadata?: LocalRunnerJobMetadata | undefined
  timeout?: number | undefined
  created_at?: string | undefined
  started_at?: string | undefined
  completed_at?: string | undefined
}
type LocalRunnerHeartbeatRequest = { capabilities?: string[] | undefined }
type LocalRunnerHeartbeatResponse = { cancelled_job_ids?: string[] | undefined }
type LocalRunnerJobPage = {
  page?: number | undefined
  size?: number | undefined
  total?: bigint | undefined
  content?: LocalRunnerJob[] | undefined
}
type LocalRunnerPage = {
  page?: number | undefined
  size?: number | undefined
  total?: bigint | undefined
  content?: LocalRunner[] | undefined
}
type BridgeCommandNextRequest = { max_commands?: number | undefined }
type BridgeCommandItem = {
  command_id?: string | undefined
  type?: 'ReadFile' | 'WriteFile' | 'EditFile' | 'ListFiles' | 'SearchFiles' | 'Exec' | undefined
  args?: JsonNode | undefined
  timeout_seconds?: number | undefined
  submitted_at?: string | undefined
}
type BridgeCommandBatchResponse = { commands?: BridgeCommandItem[] | undefined }
type BridgeCommandResultRequest = {
  status: 'pending' | 'picked_up' | 'completed' | 'failed' | 'timed_out'
  result?: JsonNode | undefined
  error?: JsonNode | undefined
  duration_ms?: bigint | undefined
}
type LocalRunnerJobResultRequest = {
  status: 'pending' | 'running' | 'completed' | 'failed' | 'cancelled'
  result?: JsonNode | undefined
  error?: string | undefined
  trace_id?: string | undefined
}
type ManualEvaluationRequest = {
  project_id: string
  entity_ids: string[]
  rule_ids: string[]
  entity_type: 'trace' | 'thread' | 'span'
}
type ManualEvaluationResponse = {
  entities_queued?: number | undefined
  rules_applied?: number | undefined
}
type OllamaInstanceBaseUrlRequest = { base_url: string; api_key?: string | undefined }
type OllamaModel = {
  name: string
  size?: bigint | undefined
  digest?: string | undefined
  modified_at?: string | undefined
}
type OllamaConnectionTestResponse = {
  connected?: boolean | undefined
  version?: string | undefined
  error_message?: string | undefined
}
type StudioMessagePublic = { role: string; content: string }
type StudioPromptPublic = { messages: StudioMessagePublic[] }
type StudioLlmModelPublic = { model: string; parameters?: JsonNodePublic | undefined }
type StudioMetricPublic = { type: string; parameters?: JsonNodePublic | undefined }
type StudioEvaluationPublic = { metrics: StudioMetricPublic[] }
type StudioOptimizerPublic = { type: string; parameters?: JsonNodePublic | undefined }
type OptimizationStudioConfigPublic = {
  dataset_name: string
  prompt: StudioPromptPublic
  llm_model: StudioLlmModelPublic
  evaluation: StudioEvaluationPublic
  optimizer: StudioOptimizerPublic
}
type ErrorInfoPublic = { exception_type: string; message?: string | undefined; traceback: string }
type OptimizationPublic = {
  id?: string | undefined
  name?: string | undefined
  dataset_name: string
  project_id?: string | undefined
  objective_name: string
  status: 'running' | 'completed' | 'cancelled' | 'initialized' | 'error'
  metadata?: JsonListStringPublic | undefined
  studio_config?: OptimizationStudioConfigPublic | undefined
  error_info?: ErrorInfoPublic | undefined
  dataset_id?: string | undefined
  num_trials?: bigint | undefined
  feedback_scores?: FeedbackScoreAveragePublic[] | undefined
  experiment_scores?: FeedbackScoreAveragePublic[] | undefined
  created_at?: string | undefined
  created_by?: string | undefined
  last_updated_at?: string | undefined
  last_updated_by?: string | undefined
  baseline_objective_score?: number | undefined
  best_objective_score?: number | undefined
  baseline_duration?: number | undefined
  best_duration?: number | undefined
  baseline_cost?: number | undefined
  best_cost?: number | undefined
  total_optimization_cost?: number | undefined
}
type OptimizationPagePublic = {
  page?: number | undefined
  size?: number | undefined
  total?: bigint | undefined
  content?: OptimizationPublic[] | undefined
  sortableBy?: string[] | undefined
}
type StudioMessageWrite = { role: string; content: string }
type StudioPromptWrite = { messages: StudioMessageWrite[] }
type StudioLlmModelWrite = { model: string; parameters?: JsonNodeWrite | undefined }
type StudioMetricWrite = { type: string; parameters?: JsonNodeWrite | undefined }
type StudioEvaluationWrite = { metrics: StudioMetricWrite[] }
type StudioOptimizerWrite = { type: string; parameters?: JsonNodeWrite | undefined }
type OptimizationStudioConfigWrite = {
  dataset_name: string
  prompt: StudioPromptWrite
  llm_model: StudioLlmModelWrite
  evaluation: StudioEvaluationWrite
  optimizer: StudioOptimizerWrite
}
type ErrorInfoWrite = { exception_type: string; message?: string | undefined; traceback: string }
type OptimizationWrite = {
  id?: string | undefined
  name?: string | undefined
  dataset_name: string
  project_name?: string | undefined
  project_id?: string | undefined
  objective_name: string
  status: 'running' | 'completed' | 'cancelled' | 'initialized' | 'error'
  metadata?: JsonListStringWrite | undefined
  studio_config?: OptimizationStudioConfigWrite | undefined
  error_info?: ErrorInfoWrite | undefined
  last_updated_at?: string | undefined
}
type ErrorInfo = { exception_type: string; message?: string | undefined; traceback: string }
type OptimizationUpdate = {
  name?: string | undefined
  status?: 'running' | 'completed' | 'cancelled' | 'initialized' | 'error' | undefined
  error_info?: ErrorInfo | undefined
  metadata?: JsonListString | undefined
}
type OptimizationStudioLog = {
  url?: string | undefined
  last_modified?: string | undefined
  expires_at?: string | undefined
}
type ActivateRequest = { runner_name: string; hmac: string }
type CreateSessionRequest = {
  project_id: string
  activation_key: string
  ttl_seconds?: number | undefined
  type: 'connect' | 'endpoint'
}
type CreateSessionResponse = { session_id?: string | undefined; runner_id?: string | undefined }
type PromptPublic = {
  id?: string | undefined
  name: string
  project_id?: string | undefined
  description?: string | undefined
  template_structure?: 'text' | 'chat' | undefined
  tags?: string[] | undefined
  created_at?: string | undefined
  created_by?: string | undefined
  last_updated_at?: string | undefined
  last_updated_by?: string | undefined
  version_count?: bigint | undefined
}
type PromptPagePublic = {
  page?: number | undefined
  size?: number | undefined
  total?: bigint | undefined
  content?: PromptPublic[] | undefined
  sortableBy?: string[] | undefined
}
type ProjectPublic = {
  id?: string | undefined
  name: string
  visibility?: 'private' | 'public' | undefined
  description?: string | undefined
  created_at?: string | undefined
  created_by?: string | undefined
  last_updated_at?: string | undefined
  last_updated_by?: string | undefined
  last_updated_trace_at?: string | undefined
}
type ProjectPagePublic = {
  page?: number | undefined
  size?: number | undefined
  total?: bigint | undefined
  content?: ProjectPublic[] | undefined
  sortableBy?: string[] | undefined
}
type ProjectWrite = {
  name: string
  visibility?: 'private' | 'public' | undefined
  description?: string | undefined
}
type ProjectUpdate = {
  name?: string | undefined
  description?: string | undefined
  visibility?: 'private' | 'public' | undefined
}
type ScoreName = { name?: string | undefined; type?: string | undefined }
type FeedbackScoreNames = { scores?: ScoreName[] | undefined }
type TokenUsageNames = { names?: string[] | undefined }
type KpiCardRequest = {
  entity_type: 'traces' | 'spans' | 'threads'
  filters?: string | undefined
  interval_start: string
  interval_end?: string | undefined
}
type KpiMetric = {
  type?: 'count' | 'errors' | 'avg_duration' | 'total_cost' | undefined
  current_value?: number | undefined
  previous_value?: number | undefined
}
type KpiCardResponse = { stats?: KpiMetric[] | undefined }
type SpanFilterPublic = {
  field?: string | undefined
  operator?:
    | 'contains'
    | 'not_contains'
    | 'starts_with'
    | 'ends_with'
    | '='
    | '!='
    | '>'
    | '>='
    | '<'
    | '<='
    | 'is_empty'
    | 'is_not_empty'
    | 'in'
    | 'not_in'
    | undefined
  key?: string | undefined
  value?: string | undefined
}
type TraceFilterPublic = {
  field?: string | undefined
  operator?:
    | 'contains'
    | 'not_contains'
    | 'starts_with'
    | 'ends_with'
    | '='
    | '!='
    | '>'
    | '>='
    | '<'
    | '<='
    | 'is_empty'
    | 'is_not_empty'
    | 'in'
    | 'not_in'
    | undefined
  key?: string | undefined
  value?: string | undefined
}
type TraceThreadFilterPublic = {
  field?: string | undefined
  operator?:
    | 'contains'
    | 'not_contains'
    | 'starts_with'
    | 'ends_with'
    | '='
    | '!='
    | '>'
    | '>='
    | '<'
    | '<='
    | 'is_empty'
    | 'is_not_empty'
    | 'in'
    | 'not_in'
    | undefined
  key?: string | undefined
  value?: string | undefined
}
type BreakdownConfigPublic = {
  field?:
    | 'none'
    | 'tags'
    | 'metadata'
    | 'name'
    | 'error_info'
    | 'error_type'
    | 'model'
    | 'provider'
    | 'type'
    | 'guardrail_name'
    | undefined
  metadata_key?: string | undefined
  sub_metric?: string | undefined
}
type ProjectMetricRequestPublic = {
  metric_type?:
    | 'FEEDBACK_SCORES'
    | 'TRACE_COUNT'
    | 'TOKEN_USAGE'
    | 'DURATION'
    | 'COST'
    | 'GUARDRAILS_FAILED_COUNT'
    | 'THREAD_COUNT'
    | 'THREAD_DURATION'
    | 'THREAD_FEEDBACK_SCORES'
    | 'SPAN_FEEDBACK_SCORES'
    | 'SPAN_COUNT'
    | 'SPAN_DURATION'
    | 'SPAN_TOKEN_USAGE'
    | 'TRACE_AVERAGE_DURATION'
    | 'TRACE_ERROR_RATE'
    | 'SPAN_AVERAGE_DURATION'
    | 'SPAN_COST'
    | 'SPAN_ERROR_RATE'
    | 'THREAD_AVERAGE_DURATION'
    | 'THREAD_COST'
    | undefined
  interval?: 'HOURLY' | 'DAILY' | 'WEEKLY' | 'TOTAL' | undefined
  interval_start?: string | undefined
  interval_end?: string | undefined
  span_filters?: SpanFilterPublic[] | undefined
  trace_filters?: TraceFilterPublic[] | undefined
  thread_filters?: TraceThreadFilterPublic[] | undefined
  breakdown?: BreakdownConfigPublic | undefined
}
type DataPointNumberPublic = { time: string; value?: number | undefined }
type ResultsNumberPublic = { name?: string | undefined; data?: DataPointNumberPublic[] | undefined }
type ProjectMetricResponsePublic = {
  project_id?: string | undefined
  metric_type?:
    | 'FEEDBACK_SCORES'
    | 'TRACE_COUNT'
    | 'TOKEN_USAGE'
    | 'DURATION'
    | 'COST'
    | 'GUARDRAILS_FAILED_COUNT'
    | 'THREAD_COUNT'
    | 'THREAD_DURATION'
    | 'THREAD_FEEDBACK_SCORES'
    | 'SPAN_FEEDBACK_SCORES'
    | 'SPAN_COUNT'
    | 'SPAN_DURATION'
    | 'SPAN_TOKEN_USAGE'
    | 'TRACE_AVERAGE_DURATION'
    | 'TRACE_ERROR_RATE'
    | 'SPAN_AVERAGE_DURATION'
    | 'SPAN_COST'
    | 'SPAN_ERROR_RATE'
    | 'THREAD_AVERAGE_DURATION'
    | 'THREAD_COST'
    | undefined
  interval?: 'HOURLY' | 'DAILY' | 'WEEKLY' | 'TOTAL' | undefined
  results?: ResultsNumberPublic[] | undefined
}
type ErrorCountWithDeviation = {
  count?: bigint | undefined
  deviation?: bigint | undefined
  deviation_percentage?: bigint | undefined
}
type ProjectStatsSummaryItem = {
  project_id?: string | undefined
  feedback_scores?: FeedbackScoreAverage[] | undefined
  duration?: PercentageValues | undefined
  total_estimated_cost?: number | undefined
  total_estimated_cost_sum?: number | undefined
  usage?: { [x: string]: number } | undefined
  trace_count?: bigint | undefined
  thread_count?: bigint | undefined
  guardrails_failed_count?: bigint | undefined
  error_count?: ErrorCountWithDeviation | undefined
}
type ProjectStatsSummary = { content?: ProjectStatsSummaryItem[] | undefined }
type ProjectRetrieveDetailed = { name: string; includeStats?: boolean | undefined }
type FeedbackScoreAverageDetailed = { name: string; value: number }
type PercentageValuesDetailed = {
  p50?: number | undefined
  p90?: number | undefined
  p99?: number | undefined
}
type ErrorCountWithDeviationDetailed = {
  count?: bigint | undefined
  deviation?: bigint | undefined
  deviation_percentage?: bigint | undefined
}
type ProjectDetailed = {
  id?: string | undefined
  name: string
  visibility?: 'private' | 'public' | undefined
  description?: string | undefined
  created_at?: string | undefined
  created_by?: string | undefined
  last_updated_at?: string | undefined
  last_updated_by?: string | undefined
  last_updated_trace_at?: string | undefined
  feedback_scores?: FeedbackScoreAverageDetailed[] | undefined
  duration?: PercentageValuesDetailed | undefined
  total_estimated_cost?: number | undefined
  total_estimated_cost_sum?: number | undefined
  usage?: { [x: string]: number } | undefined
  trace_count?: bigint | undefined
  thread_count?: bigint | undefined
  guardrails_failed_count?: bigint | undefined
  error_count?: ErrorCountWithDeviationDetailed | undefined
}
type ErrorMessageDetailed = { errors?: string[] | undefined }
type PromptWrite = {
  id?: string | undefined
  name: string
  project_id?: string | undefined
  project_name?: string | undefined
  description?: string | undefined
  template?: string | undefined
  metadata?: JsonNodeWrite | undefined
  change_description?: string | undefined
  type?: 'mustache' | 'jinja2' | 'python' | undefined
  template_structure?: 'text' | 'chat' | undefined
  tags?: string[] | undefined
}
type JsonNodeDetail = { [x: string]: unknown }
type PromptVersionDetail = {
  id?: string | undefined
  prompt_id?: string | undefined
  commit?: string | undefined
  version_number?: string | undefined
  template: string
  metadata?: JsonNodeDetail | undefined
  type?: 'mustache' | 'jinja2' | 'python' | undefined
  version_type?: 'prompt_version' | 'mask' | undefined
  environment?: string | undefined
  environments?: string[] | undefined
  change_description?: string | undefined
  tags?: string[] | undefined
  variables?: string[] | undefined
  template_structure?: 'text' | 'chat' | undefined
  created_at?: string | undefined
  created_by?: string | undefined
}
type CreatePromptVersionDetail = {
  name: string
  version: PromptVersionDetail
  template_structure?: 'text' | 'chat' | undefined
  project_id?: string | undefined
  project_name?: string | undefined
}
type ErrorMessageDetail = { errors?: string[] | undefined }
type PromptVersionUpdate = { tags?: string[] | undefined }
type PromptVersionBatchUpdate = {
  ids: string[]
  update: PromptVersionUpdate
  merge_tags?: boolean | undefined
}
type PromptDetail = {
  id?: string | undefined
  name: string
  project_id?: string | undefined
  description?: string | undefined
  template_structure?: 'text' | 'chat' | undefined
  tags?: string[] | undefined
  created_at?: string | undefined
  created_by?: string | undefined
  last_updated_at?: string | undefined
  last_updated_by?: string | undefined
  version_count?: bigint | undefined
  latest_version?: PromptVersionDetail | undefined
  requested_version?: PromptVersionDetail | undefined
}
type PromptUpdatable = {
  name: string
  description?: string | undefined
  tags?: string[] | undefined
}
type PromptVersionPublic = {
  id?: string | undefined
  prompt_id?: string | undefined
  commit?: string | undefined
  version_number?: string | undefined
  template: string
  metadata?: JsonNodePublic | undefined
  type?: 'mustache' | 'jinja2' | 'python' | undefined
  version_type?: 'prompt_version' | 'mask' | undefined
  environment?: string | undefined
  environments?: string[] | undefined
  change_description?: string | undefined
  tags?: string[] | undefined
  template_structure?: 'text' | 'chat' | undefined
  created_at?: string | undefined
  created_by?: string | undefined
}
type PromptVersionPagePublic = {
  page?: number | undefined
  size?: number | undefined
  total?: bigint | undefined
  content?: PromptVersionPublic[] | undefined
  sortableBy?: string[] | undefined
}
type PromptVersionCommitsRequestPublic = { commits: string[] }
type PromptVersionRetrieveDetail = {
  name: string
  commit?: string | undefined
  environment?: string | undefined
  version_number?: string | undefined
  project_name?: string | undefined
}
type PromptVersionIdsRequestDetail = { ids: string[] }
type PromptVersionEnvironmentUpdate = { environments: string[] }
type RecentActivityItemPublic = {
  type?:
    | 'trace_daily'
    | 'experiment'
    | 'dataset_version'
    | 'test_suite_version'
    | 'alert_event'
    | 'optimization'
    | 'prompt_version'
    | undefined
  id?: string | undefined
  name?: string | undefined
  resource_id?: string | undefined
  created_by?: string | undefined
  created_at?: string | undefined
}
type RecentActivityPagePublic = {
  page?: number | undefined
  size?: number | undefined
  total?: bigint | undefined
  content?: RecentActivityItemPublic[] | undefined
}
type ReportFailure = {
  id?: string | undefined
  type: 'agent_insights'
  project_id: string
  reason: string
  detail?: string | undefined
  created_at?: string | undefined
  created_by?: string | undefined
  last_updated_at?: string | undefined
  last_updated_by?: string | undefined
}
type ReportFailurePage = {
  page?: number | undefined
  size?: number | undefined
  total?: bigint | undefined
  content?: ReportFailure[] | undefined
}
type ReportCompleteRequest = {
  content?: string | undefined
  status: 'pending' | 'completed' | 'failed'
  session_id?: string | undefined
  recommended_actions?: JsonNode | undefined
  failure_reason?: string | undefined
}
type GenerateReportResponse = { reportId?: string | undefined }
type ReportPreference = {
  project_id?: string | undefined
  enabled?: boolean | undefined
  schedule_time?: string | undefined
  custom_prompt?: string | undefined
  created_at?: string | undefined
  last_updated_at?: string | undefined
}
type OllieReport = {
  id?: string | undefined
  project_id?: string | undefined
  session_id?: string | undefined
  content?: string | undefined
  recommended_actions?: JsonNode | undefined
  status?: 'pending' | 'completed' | 'failed' | undefined
  failure_reason?: string | undefined
  created_at?: string | undefined
  last_updated_at?: string | undefined
}
type OllieReportPage = {
  page?: number | undefined
  size?: number | undefined
  total?: bigint | undefined
  content?: OllieReport[] | undefined
}
type RetentionRulePublic = {
  id?: string | undefined
  workspace_id?: string | undefined
  project_id?: string | undefined
  level?: 'organization' | 'workspace' | 'project' | undefined
  retention: 'short_14d' | 'base_60d' | 'extended_400d' | 'unlimited'
  apply_to_past?: boolean | undefined
  enabled?: boolean | undefined
  created_by?: string | undefined
  created_at?: string | undefined
  last_updated_by?: string | undefined
  last_updated_at?: string | undefined
  catch_up_cursor?: string | undefined
  catch_up_done?: boolean | undefined
}
type RetentionRulePagePublic = {
  content?: RetentionRulePublic[] | undefined
  page?: number | undefined
  size?: number | undefined
  total?: bigint | undefined
}
type RetentionRuleWrite = {
  project_id?: string | undefined
  organization_level?: boolean | undefined
  retention: 'short_14d' | 'base_60d' | 'extended_400d' | 'unlimited'
  apply_to_past?: boolean | undefined
}
type ServiceTogglesConfig = {
  pythonEvaluatorEnabled: boolean
  traceThreadPythonEvaluatorEnabled: boolean
  spanLlmAsJudgeEnabled: boolean
  spanUserDefinedMetricPythonEnabled: boolean
  guardrailsEnabled: boolean
  guardrailsValidationsEnabled: boolean
  opikAIEnabled: boolean
  alertsEnabled: boolean
  welcomeWizardEnabled: boolean
  exportEnabled: boolean
  costIntelligenceEnabled: boolean
  datasetVersioningEnabled: boolean
  datasetExportEnabled: boolean
  demoDataEnabled: boolean
  openaiProviderEnabled: boolean
  anthropicProviderEnabled: boolean
  geminiProviderEnabled: boolean
  openrouterProviderEnabled: boolean
  vertexaiProviderEnabled: boolean
  bedrockProviderEnabled: boolean
  customllmProviderEnabled: boolean
  ollamaProviderEnabled: boolean
  ollieEnabled: boolean
  agentInsightsEnabled: boolean
  agentInsightsGuidanceEnabled: boolean
  projectHomepageEnabled: boolean
  annotationQueueAutomationEnabled: boolean
  eventBridgeAlertsEnabled: boolean
  defaultPageSize?: number | undefined
  customChartsEnabledForWorkspace?: boolean | undefined
}
type SpanWrite = {
  id?: string | undefined
  project_name?: string | undefined
  trace_id?: string | undefined
  parent_span_id?: string | undefined
  name?: string | undefined
  type?: 'general' | 'tool' | 'llm' | 'guardrail' | undefined
  start_time: string
  end_time?: string | undefined
  input?: JsonListStringWrite | undefined
  output?: JsonListStringWrite | undefined
  metadata?: JsonListStringWrite | undefined
  model?: string | undefined
  provider?: string | undefined
  tags?: string[] | undefined
  usage?: { [x: string]: number } | undefined
  error_info?: ErrorInfoWrite | undefined
  last_updated_at?: string | undefined
  total_estimated_cost?: number | undefined
  total_estimated_cost_version?: string | undefined
  ttft?: number | undefined
  source?: 'sdk' | 'experiment' | 'playground' | 'optimization' | 'evaluator' | undefined
  environment?: string | undefined
}
type SpanBatchWrite = { spans: SpanWrite[] }
type SpanUpdate = {
  project_name?: string | undefined
  project_id?: string | undefined
  trace_id: string
  parent_span_id?: string | undefined
  name?: string | undefined
  type?: 'general' | 'tool' | 'llm' | 'guardrail' | undefined
  end_time?: string | undefined
  input?: JsonListString | undefined
  output?: JsonListString | undefined
  metadata?: JsonListString | undefined
  model?: string | undefined
  provider?: string | undefined
  tags?: string[] | undefined
  tags_to_add?: string[] | undefined
  tags_to_remove?: string[] | undefined
  usage?: { [x: string]: number } | undefined
  total_estimated_cost?: number | undefined
  error_info?: ErrorInfo | undefined
  ttft?: number | undefined
  source?: 'sdk' | 'experiment' | 'playground' | 'optimization' | 'evaluator' | undefined
  environment?: string | undefined
}
type SpanBatchUpdate = { ids: string[]; update: SpanUpdate; merge_tags?: boolean | undefined }
type ValueEntryPublic = {
  value?: number | undefined
  reason?: string | undefined
  category_name?: string | undefined
  source?: 'ui' | 'sdk' | 'online_scoring' | undefined
  last_updated_at?: string | undefined
  span_type?: string | undefined
  span_id?: string | undefined
  source_queue_id?: string | undefined
  author?: string | undefined
}
type FeedbackScorePublic = {
  name: string
  category_name?: string | undefined
  value: number
  reason?: string | undefined
  source: 'ui' | 'sdk' | 'online_scoring'
  source_queue_id?: string | undefined
  created_at?: string | undefined
  last_updated_at?: string | undefined
  created_by?: string | undefined
  last_updated_by?: string | undefined
  value_by_author?: { [x: string]: ValueEntryPublic } | undefined
}
type SpanPublic = {
  id?: string | undefined
  project_name?: string | undefined
  project_id?: string | undefined
  trace_id?: string | undefined
  parent_span_id?: string | undefined
  name?: string | undefined
  type?: 'general' | 'tool' | 'llm' | 'guardrail' | undefined
  start_time: string
  end_time?: string | undefined
  input?: JsonListStringPublic | undefined
  output?: JsonListStringPublic | undefined
  metadata?: JsonListStringPublic | undefined
  model?: string | undefined
  provider?: string | undefined
  tags?: string[] | undefined
  usage?: { [x: string]: number } | undefined
  error_info?: ErrorInfoPublic | undefined
  created_at?: string | undefined
  last_updated_at?: string | undefined
  created_by?: string | undefined
  last_updated_by?: string | undefined
  feedback_scores?: FeedbackScorePublic[] | undefined
  comments?: CommentPublic[] | undefined
  total_estimated_cost?: number | undefined
  total_estimated_cost_version?: string | undefined
  duration?: number | undefined
  ttft?: number | undefined
  source?: 'sdk' | 'experiment' | 'playground' | 'optimization' | 'evaluator' | undefined
  environment?: string | undefined
}
type SpanPagePublic = {
  page?: number | undefined
  size?: number | undefined
  total?: bigint | undefined
  content?: SpanPublic[] | undefined
  sortableBy?: string[] | undefined
}
type DeleteFeedbackScore = {
  name: string
  author?: string | undefined
  source_queue_id?: string | undefined
}
type FeedbackScoreBatchItem = {
  project_name?: string | undefined
  project_id?: string | undefined
  name: string
  category_name?: string | undefined
  value: number
  reason?: string | undefined
  source: 'ui' | 'sdk' | 'online_scoring'
  author?: string | undefined
  source_queue_id?: string | undefined
  id: string
}
type FeedbackScoreBatch = { scores: FeedbackScoreBatchItem[] }
type SpanSearchStreamRequestPublic = {
  trace_id?: string | undefined
  project_name?: string | undefined
  project_id?: string | undefined
  type?: 'general' | 'tool' | 'llm' | 'guardrail' | undefined
  filters?: SpanFilterPublic[] | undefined
  limit?: number | undefined
  last_retrieved_id?: string | undefined
  truncate?: boolean | undefined
  exclude?:
    | (
        | 'name'
        | 'type'
        | 'start_time'
        | 'end_time'
        | 'input'
        | 'output'
        | 'metadata'
        | 'model'
        | 'provider'
        | 'tags'
        | 'usage'
        | 'error_info'
        | 'created_at'
        | 'created_by'
        | 'last_updated_by'
        | 'feedback_scores'
        | 'comments'
        | 'total_estimated_cost'
        | 'total_estimated_cost_version'
        | 'duration'
        | 'ttft'
        | 'source'
        | 'environment'
      )[]
    | undefined
  from_time?: string | undefined
  to_time?: string | undefined
}
type ExistenceResponse = { exists?: boolean | undefined }
type TraceWrite = {
  id?: string | undefined
  project_name?: string | undefined
  name?: string | undefined
  start_time: string
  end_time?: string | undefined
  input?: JsonListStringWrite | undefined
  output?: JsonListStringWrite | undefined
  metadata?: JsonListStringWrite | undefined
  tags?: string[] | undefined
  error_info?: ErrorInfoWrite | undefined
  last_updated_at?: string | undefined
  ttft?: number | undefined
  thread_id?: string | undefined
  source?: 'sdk' | 'experiment' | 'playground' | 'optimization' | 'evaluator' | undefined
  environment?: string | undefined
}
type TraceBatchWrite = { traces: TraceWrite[] }
type TraceUpdate = {
  project_name?: string | undefined
  project_id?: string | undefined
  name?: string | undefined
  end_time?: string | undefined
  input?: JsonListString | undefined
  output?: JsonListString | undefined
  metadata?: JsonListString | undefined
  tags?: string[] | undefined
  tags_to_add?: string[] | undefined
  tags_to_remove?: string[] | undefined
  error_info?: ErrorInfo | undefined
  thread_id?: string | undefined
  ttft?: number | undefined
  source?: 'sdk' | 'experiment' | 'playground' | 'optimization' | 'evaluator' | undefined
  environment?: string | undefined
}
type TraceBatchUpdate = { ids: string[]; update: TraceUpdate; merge_tags?: boolean | undefined }
type TraceThreadUpdate = {
  tags?: string[] | undefined
  tags_to_add?: string[] | undefined
  tags_to_remove?: string[] | undefined
}
type TraceThreadBatchUpdate = {
  ids: string[]
  update: TraceThreadUpdate
  merge_tags?: boolean | undefined
}
type TraceThreadBatchIdentifier = {
  project_name?: string | undefined
  project_id?: string | undefined
  thread_id?: string | undefined
  thread_ids?: string[] | undefined
}
type CheckPublic = {
  name?: 'TOPIC' | 'PII' | 'LLM_JUDGE' | 'PROMPT_INJECTION' | 'CUSTOM_CLASSIFIER' | undefined
  result?: 'passed' | 'failed' | undefined
}
type GuardrailsValidationPublic = {
  span_id?: string | undefined
  checks?: CheckPublic[] | undefined
}
type ExperimentItemReferencePublic = {
  id: string
  name: string
  dataset_id: string
  dataset_item_id: string
}
type AnnotationQueueReferencePublic = { id: string; name: string }
type TracePublic = {
  id?: string | undefined
  project_id?: string | undefined
  name?: string | undefined
  start_time: string
  end_time?: string | undefined
  input?: JsonListStringPublic | undefined
  output?: JsonListStringPublic | undefined
  metadata?: JsonListStringPublic | undefined
  tags?: string[] | undefined
  error_info?: ErrorInfoPublic | undefined
  usage?: { [x: string]: bigint } | undefined
  created_at?: string | undefined
  last_updated_at?: string | undefined
  created_by?: string | undefined
  last_updated_by?: string | undefined
  feedback_scores?: FeedbackScorePublic[] | undefined
  span_feedback_scores?: FeedbackScorePublic[] | undefined
  comments?: CommentPublic[] | undefined
  guardrails_validations?: GuardrailsValidationPublic[] | undefined
  total_estimated_cost?: number | undefined
  span_count?: number | undefined
  duration?: number | undefined
  ttft?: number | undefined
  thread_id?: string | undefined
  visibility_mode?: 'default' | 'hidden' | undefined
  llm_span_count?: number | undefined
  has_tool_spans?: boolean | undefined
  providers?: string[] | undefined
  experiment?: ExperimentItemReferencePublic | undefined
  annotation_queues?: AnnotationQueueReferencePublic[] | undefined
  source?: 'sdk' | 'experiment' | 'playground' | 'optimization' | 'evaluator' | undefined
  environment?: string | undefined
}
type TracePagePublic = {
  page?: number | undefined
  size?: number | undefined
  total?: bigint | undefined
  content?: TracePublic[] | undefined
  sortableBy?: string[] | undefined
}
type DeleteThreadFeedbackScores = {
  project_name: string
  thread_id: string
  names: string[]
  author?: string | undefined
  source_queue_id?: string | undefined
}
type DeleteTraceThreads = {
  project_name?: string | undefined
  project_id?: string | undefined
  thread_ids: string[]
}
type BatchDeleteByProject = { ids: string[]; project_id?: string | undefined }
type TraceThreadIdentifier = {
  project_name?: string | undefined
  project_id?: string | undefined
  thread_id: string
  truncate?: boolean | undefined
}
type AnnotationQueueReference = { id: string; name: string }
type TraceThread = {
  id?: string | undefined
  project_id?: string | undefined
  thread_model_id?: string | undefined
  start_time?: string | undefined
  end_time?: string | undefined
  duration?: number | undefined
  first_message?: JsonListString | undefined
  last_message?: JsonListString | undefined
  feedback_scores?: FeedbackScore[] | undefined
  status?: 'active' | 'inactive' | undefined
  number_of_messages?: bigint | undefined
  total_estimated_cost?: number | undefined
  usage?: { [x: string]: bigint } | undefined
  comments?: Comment[] | undefined
  tags?: string[] | undefined
  annotation_queues?: AnnotationQueueReference[] | undefined
  last_updated_at?: string | undefined
  last_updated_by?: string | undefined
  created_by?: string | undefined
  created_at?: string | undefined
  environment?: string | undefined
}
type TraceThreadPage = {
  page?: number | undefined
  size?: number | undefined
  total?: bigint | undefined
  content?: TraceThread[] | undefined
  sortableBy?: string[] | undefined
}
type FeedbackScoreBatchItemThread = {
  project_name?: string | undefined
  project_id?: string | undefined
  name: string
  category_name?: string | undefined
  value: number
  reason?: string | undefined
  source: 'ui' | 'sdk' | 'online_scoring'
  author?: string | undefined
  source_queue_id?: string | undefined
  thread_id: string
}
type FeedbackScoreBatchThread = { scores: FeedbackScoreBatchItemThread[] }
type TraceThreadFilter = {
  field?: string | undefined
  operator?:
    | 'contains'
    | 'not_contains'
    | 'starts_with'
    | 'ends_with'
    | '='
    | '!='
    | '>'
    | '>='
    | '<'
    | '<='
    | 'is_empty'
    | 'is_not_empty'
    | 'in'
    | 'not_in'
    | undefined
  key?: string | undefined
  value?: string | undefined
}
type TraceThreadSearchStreamRequest = {
  project_name?: string | undefined
  project_id?: string | undefined
  filters?: TraceThreadFilter[] | undefined
  last_retrieved_thread_model_id?: string | undefined
  limit?: number | undefined
  truncate?: boolean | undefined
  strip_attachments?: boolean | undefined
  from_time?: string | undefined
  to_time?: string | undefined
}
type TraceSearchStreamRequestPublic = {
  project_name?: string | undefined
  project_id?: string | undefined
  filters?: TraceFilterPublic[] | undefined
  last_retrieved_id?: string | undefined
  limit?: number | undefined
  truncate?: boolean | undefined
  strip_attachments?: boolean | undefined
  exclude?:
    | (
        | 'name'
        | 'start_time'
        | 'end_time'
        | 'input'
        | 'output'
        | 'metadata'
        | 'tags'
        | 'error_info'
        | 'usage'
        | 'created_at'
        | 'created_by'
        | 'last_updated_by'
        | 'feedback_scores'
        | 'span_feedback_scores'
        | 'comments'
        | 'guardrails_validations'
        | 'total_estimated_cost'
        | 'span_count'
        | 'llm_span_count'
        | 'has_tool_spans'
        | 'duration'
        | 'ttft'
        | 'thread_id'
        | 'visibility_mode'
        | 'providers'
        | 'experiment'
        | 'annotation_queues'
        | 'source'
        | 'environment'
      )[]
    | undefined
  from_time?: string | undefined
  to_time?: string | undefined
}
type WelcomeWizardTracking = { completed?: boolean | undefined }
type WelcomeWizardSubmission = {
  role?: string | undefined
  integrations?: string[] | undefined
  email?: string | undefined
  join_beta_program?: boolean | undefined
}
type Permission = { permissionName?: string | undefined; permissionValue?: string | undefined }
type WorkspaceUserPermissions = {
  userName?: string | undefined
  workspaceName?: string | undefined
  permissions?: Permission[] | undefined
}
type WorkspaceMetricsSummaryRequest = {
  project_ids?: string[] | undefined
  interval_start: string
  interval_end: string
  start_before_end?: boolean | undefined
}
type WorkspaceConfiguration = {
  timeout_to_mark_thread_as_inactive?: string | undefined
  truncation_on_tables?: boolean | undefined
  color_map?: { [x: string]: string } | undefined
}
type WorkspaceMetricResponse = { results?: Result[] | undefined }
type BreakdownConfig = {
  field?:
    | 'none'
    | 'tags'
    | 'metadata'
    | 'name'
    | 'error_info'
    | 'error_type'
    | 'model'
    | 'provider'
    | 'type'
    | 'guardrail_name'
    | undefined
  metadata_key?: string | undefined
  sub_metric?: string | undefined
}
type SpanFilter = {
  field?: string | undefined
  operator?:
    | 'contains'
    | 'not_contains'
    | 'starts_with'
    | 'ends_with'
    | '='
    | '!='
    | '>'
    | '>='
    | '<'
    | '<='
    | 'is_empty'
    | 'is_not_empty'
    | 'in'
    | 'not_in'
    | undefined
  key?: string | undefined
  value?: string | undefined
}
type WorkspaceSpanMetricRequest = {
  project_ids?: string[] | undefined
  metric_type?:
    | 'FEEDBACK_SCORES'
    | 'TRACE_COUNT'
    | 'TOKEN_USAGE'
    | 'DURATION'
    | 'COST'
    | 'GUARDRAILS_FAILED_COUNT'
    | 'THREAD_COUNT'
    | 'THREAD_DURATION'
    | 'THREAD_FEEDBACK_SCORES'
    | 'SPAN_FEEDBACK_SCORES'
    | 'SPAN_COUNT'
    | 'SPAN_DURATION'
    | 'SPAN_TOKEN_USAGE'
    | 'TRACE_AVERAGE_DURATION'
    | 'TRACE_ERROR_RATE'
    | 'SPAN_AVERAGE_DURATION'
    | 'SPAN_COST'
    | 'SPAN_ERROR_RATE'
    | 'THREAD_AVERAGE_DURATION'
    | 'THREAD_COST'
    | undefined
  interval?: 'HOURLY' | 'DAILY' | 'WEEKLY' | 'TOTAL' | undefined
  breakdown?: BreakdownConfig | undefined
  filters?: SpanFilter[] | undefined
  interval_start: string
  interval_end?: string | undefined
  start_before_end?: boolean | undefined
}
type WorkspaceTokenUsageNamesRequest = { project_ids?: string[] | undefined }
type WorkspaceMetricsSummaryResponse = { results?: Result[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/oauth/authorize': {
      $get: {
        input: {
          query: {
            client_id: string
            redirect_uri: string
            response_type?: string | undefined
            code_challenge?: string | undefined
            code_challenge_method?: string | undefined
            resource?: string | undefined
            state?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 302
      }
      $post: {
        input: { json: ConsentRequest }
        output: ConsentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/oauth/authorize/context': {
      $get: {
        input: { query: { client_id: string; redirect_uri: string } }
        output: AuthorizeContext
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/.well-known/oauth-authorization-server': {
      $get: { input: {}; output: AuthorizationServerMetadata; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/oauth/register': {
      $post:
        | {
            input: { json: ClientRegistrationRequest }
            output: ClientRegistrationResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ClientRegistrationRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/oauth/revoke': {
      $post: {
        input: { json: { token?: string | undefined; client_id?: string | undefined } } & {
          form: { token?: string | undefined; client_id?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/oauth/token': {
      $post:
        | {
            input: {
              json: {
                grant_type?: string | undefined
                code?: string | undefined
                redirect_uri?: string | undefined
                client_id?: string | undefined
                code_verifier?: string | undefined
                refresh_token?: string | undefined
              }
            } & {
              form: {
                grant_type?: string | undefined
                code?: string | undefined
                redirect_uri?: string | undefined
                client_id?: string | undefined
                code_verifier?: string | undefined
                refresh_token?: string | undefined
              }
            }
            output: TokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                grant_type?: string | undefined
                code?: string | undefined
                redirect_uri?: string | undefined
                client_id?: string | undefined
                code_verifier?: string | undefined
                refresh_token?: string | undefined
              }
            } & {
              form: {
                grant_type?: string | undefined
                code?: string | undefined
                redirect_uri?: string | undefined
                client_id?: string | undefined
                code_verifier?: string | undefined
                refresh_token?: string | undefined
              }
            }
            output: OAuthError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/opik/auth-oauth': {
      $post:
        | {
            input: { header: { Authorization?: string | undefined } }
            output: ValidatedToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Authorization?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/v1/internal/agent-insights/enrollment': {
      $post: { input: { json: Request }; output: Response; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/internal/analytics-queries/projects/:projectId': {
      $post:
        | {
            input: { param: { projectId: string } } & { json: AnalyticsQueryRequest }
            output: AnalyticsQueryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: AnalyticsQueryRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } } & { json: AnalyticsQueryRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { projectId: string } } & { json: AnalyticsQueryRequest }
            output: {}
            outputFormat: string
            status: 501
          }
    }
  } & {
    '/v1/internal/analytics-queries': {
      $post:
        | {
            input: { json: ScopedAnalyticsQueryRequest }
            output: AnalyticsQueryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ScopedAnalyticsQueryRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ScopedAnalyticsQueryRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: ScopedAnalyticsQueryRequest }
            output: {}
            outputFormat: string
            status: 501
          }
    }
  } & {
    '/v1/internal/dashboard-saved-queries': {
      $post:
        | {
            input: { json: DashboardSavedQuery }
            output: DashboardSavedQuery
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: DashboardSavedQuery }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | { input: { json: DashboardSavedQuery }; output: {}; outputFormat: string; status: 501 }
    }
  } & {
    '/v1/internal/dashboard-saved-queries/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: DashboardSavedQuery
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 501 }
    }
  } & {
    '/v1/internal/usage/projects': {
      $post:
        | {
            input: { json: UsageProjectsRequest }
            output: UsageProjectsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UsageProjectsRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/internal/usage/bi-datasets': {
      $get: { input: {}; output: BiInformationResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/internal/usage/bi-experiments': {
      $get: { input: {}; output: BiInformationResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/internal/usage/bi-spans': {
      $get: { input: {}; output: BiInformationResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/internal/usage/workspace-span-counts-breakdown': {
      $get: {
        input: {}
        output: UsageByWorkspaceProjectUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/internal/usage/workspace-span-counts': {
      $get: { input: {}; output: SpansCountResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/internal/usage/bi-traces': {
      $get: { input: {}; output: BiInformationResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/internal/usage/workspace-trace-counts': {
      $get: { input: {}; output: TraceCountResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/private/agent-configs/blueprints': {
      $post:
        | { input: { json: AgentConfigCreateWrite }; output: {}; outputFormat: string; status: 201 }
        | {
            input: { json: AgentConfigCreateWrite }
            output: ErrorMessageWrite
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AgentConfigCreateWrite }
            output: ErrorMessageWrite
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AgentConfigCreateWrite }
            output: ErrorMessageWrite
            outputFormat: 'json'
            status: 409
          }
      $patch:
        | { input: { json: AgentConfigCreateWrite }; output: {}; outputFormat: string; status: 201 }
        | {
            input: { json: AgentConfigCreateWrite }
            output: ErrorMessageWrite
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AgentConfigCreateWrite }
            output: ErrorMessageWrite
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/agent-configs/blueprints/projects/:project_id/masks/:mask_id': {
      $post:
        | {
            input: { param: { project_id: string; mask_id: string } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { project_id: string; mask_id: string } }
            output: ErrorMessageWrite
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: string; mask_id: string } }
            output: ErrorMessageWrite
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/agent-configs/blueprints/environments': {
      $post:
        | { input: { json: AgentConfigEnvUpdate }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: AgentConfigEnvUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AgentConfigEnvUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/agent-configs/blueprints/environments/:env_name/projects/:project_id': {
      $get:
        | {
            input: { param: { env_name: string; project_id: string } } & {
              query: { mask_id?: string | undefined }
            }
            output: AgentBlueprintPublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { env_name: string; project_id: string } } & {
              query: { mask_id?: string | undefined }
            }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { env_name: string; project_id: string } } & {
              query: { mask_id?: string | undefined }
            }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { env_name: string; project_id: string } } & {
              json: AgentConfigEnvSetByName
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { env_name: string; project_id: string } } & {
              json: AgentConfigEnvSetByName
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { env_name: string; project_id: string } } & {
              json: AgentConfigEnvSetByName
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { env_name: string; project_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { env_name: string; project_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/v1/private/agent-configs/blueprints/:blueprint_id': {
      $get:
        | {
            input: { param: { blueprint_id: string } } & { query: { mask_id?: string | undefined } }
            output: AgentBlueprintPublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { blueprint_id: string } } & { query: { mask_id?: string | undefined } }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { blueprint_id: string } } & { query: { mask_id?: string | undefined } }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/agent-configs/blueprints/projects/:project_id/names/:name': {
      $get:
        | {
            input: { param: { name: string; project_id: string } } & {
              query: { mask_id?: string | undefined }
            }
            output: AgentBlueprintPublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string; project_id: string } } & {
              query: { mask_id?: string | undefined }
            }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { name: string; project_id: string } } & {
              query: { mask_id?: string | undefined }
            }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/agent-configs/blueprints/history/projects/:project_id': {
      $get:
        | {
            input: { param: { project_id: string } } & {
              query: { page?: number | undefined; size?: number | undefined }
            }
            output: BlueprintPageHistory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: { page?: number | undefined; size?: number | undefined }
            }
            output: ErrorMessageHistory
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: string } } & {
              query: { page?: number | undefined; size?: number | undefined }
            }
            output: ErrorMessageHistory
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/agent-configs/blueprints/:blueprint_id/deltas': {
      $get:
        | {
            input: { param: { blueprint_id: string } }
            output: AgentBlueprintPublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { blueprint_id: string } }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { blueprint_id: string } }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/agent-configs/blueprints/latest/projects/:project_id': {
      $get:
        | {
            input: { param: { project_id: string } } & { query: { mask_id?: string | undefined } }
            output: AgentBlueprintPublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & { query: { mask_id?: string | undefined } }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: string } } & { query: { mask_id?: string | undefined } }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/agent-configs/blueprints/remove-keys': {
      $post:
        | {
            input: { json: AgentConfigRemoveValues }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { json: AgentConfigRemoveValues }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: AgentConfigRemoveValues }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/v1/private/agent-insights/jobs/:projectId': {
      $get:
        | {
            input: { param: { projectId: string } }
            output: AgentInsightsJob
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { projectId: string } }; output: {}; outputFormat: string; status: 404 }
      $post:
        | {
            input: { param: { projectId: string } }
            output: AgentInsightsJob
            outputFormat: 'json'
            status: 201
          }
        | { input: { param: { projectId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { projectId: string } }; output: {}; outputFormat: string; status: 409 }
      $patch:
        | {
            input: { param: { projectId: string } } & { json: AgentInsightsJobUpdate }
            output: AgentInsightsJob
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: AgentInsightsJobUpdate }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/private/agent-insights/jobs/:projectId/trigger': {
      $post:
        | { input: { param: { projectId: string } }; output: {}; outputFormat: string; status: 202 }
        | { input: { param: { projectId: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/v1/private/agent-insights/jobs/:projectId/guidance': {
      $put:
        | {
            input: { param: { projectId: string } } & { json: AgentInsightsGuidanceUpdate }
            output: AgentInsightsJob
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: AgentInsightsGuidanceUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectId: string } } & { json: AgentInsightsGuidanceUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string } } & { json: AgentInsightsGuidanceUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/private/agent-insights/issues': {
      $get:
        | {
            input: {
              query: {
                project_id: string
                from_date?: string | undefined
                to_date?: string | undefined
                status?: 'open' | 'resolved' | 'closed' | undefined
                severity?: 'critical' | 'high' | 'medium' | 'low' | undefined
                sorting?: string | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: AgentInsightsIssuePage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                project_id: string
                from_date?: string | undefined
                to_date?: string | undefined
                status?: 'open' | 'resolved' | 'closed' | undefined
                severity?: 'critical' | 'high' | 'medium' | 'low' | undefined
                sorting?: string | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                project_id: string
                from_date?: string | undefined
                to_date?: string | undefined
                status?: 'open' | 'resolved' | 'closed' | undefined
                severity?: 'critical' | 'high' | 'medium' | 'low' | undefined
                sorting?: string | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
      $post:
        | { input: { json: AgentInsightsReport }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: AgentInsightsReport }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AgentInsightsReport }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AgentInsightsReport }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/agent-insights/issues/:issue_id': {
      $get:
        | {
            input: { param: { issue_id: string } } & {
              query: {
                project_id: string
                from_date?: string | undefined
                to_date?: string | undefined
              }
            }
            output: AgentInsightsIssueWithDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issue_id: string } } & {
              query: {
                project_id: string
                from_date?: string | undefined
                to_date?: string | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { issue_id: string } } & {
              query: {
                project_id: string
                from_date?: string | undefined
                to_date?: string | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issue_id: string } } & {
              query: {
                project_id: string
                from_date?: string | undefined
                to_date?: string | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { issue_id: string } } & { json: AgentInsightsIssueUpdate }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { issue_id: string } } & { json: AgentInsightsIssueUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { issue_id: string } } & { json: AgentInsightsIssueUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { issue_id: string } } & { json: AgentInsightsIssueUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { issue_id: string } } & { json: AgentInsightsIssueUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { issue_id: string } } & { json: AgentInsightsIssueUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/private/alerts': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            size?: number | undefined
            sorting?: string | undefined
            filters?: string | undefined
          }
        }
        output: AlertPagePublic
        outputFormat: 'json'
        status: 200
      }
      $post:
        | { input: { json: AlertWrite }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: AlertWrite }; output: ErrorMessage; outputFormat: 'json'; status: 400 }
        | { input: { json: AlertWrite }; output: ErrorMessage; outputFormat: 'json'; status: 409 }
        | { input: { json: AlertWrite }; output: ErrorMessage; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/v1/private/alerts/delete': {
      $post:
        | { input: { json: BatchDelete }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: BatchDelete }; output: ErrorMessage; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/v1/private/alerts/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: AlertPublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & { json: AlertWrite }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: AlertWrite }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: AlertWrite }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: AlertWrite }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/private/alerts/webhooks/examples': {
      $get: {
        input: { query: { alert_type?: 'general' | 'slack' | 'pagerduty' | undefined } }
        output: WebhookExamples
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/alerts/webhooks/tests': {
      $post:
        | {
            input: { json: AlertWrite }
            output: WebhookTestResult
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: AlertWrite }; output: ErrorMessage; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/v1/private/annotation-queues/:id/items/add': {
      $post:
        | {
            input: { param: { id: string } } & { json: AnnotationQueueItemIds }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: AnnotationQueueItemIds }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/annotation-queues': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            size?: number | undefined
            name?: string | undefined
            filters?: string | undefined
            sorting?: string | undefined
          }
        }
        output: AnnotationQueuePagePublic
        outputFormat: 'json'
        status: 200
      }
      $post:
        | { input: { json: AnnotationQueueWrite }; output: {}; outputFormat: string; status: 201 }
        | {
            input: { json: AnnotationQueueWrite }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AnnotationQueueWrite }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/private/annotation-queues/batch': {
      $post:
        | {
            input: { json: AnnotationQueueBatchWrite }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: AnnotationQueueBatchWrite }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AnnotationQueueBatchWrite }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: AnnotationQueueBatchWrite }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/private/annotation-queues/delete': {
      $post:
        | { input: { json: BatchDelete }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: BatchDelete }; output: ErrorMessage; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/v1/private/annotation-queues/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: AnnotationQueuePublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: AnnotationQueueUpdate }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: AnnotationQueueUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/private/annotation-queues/:queueId/locks': {
      $get: {
        input: { param: { queueId: string } }
        output: LocksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/annotation-queues/:queueId/items/:itemId/lock': {
      $put: {
        input: { param: { queueId: string; itemId: string } }
        output: LockResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/annotation-queues/:id/items/delete': {
      $post:
        | {
            input: { param: { id: string } } & { json: AnnotationQueueItemIds }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: AnnotationQueueItemIds }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/annotation-queues/:id/items/search': {
      $post:
        | {
            input: { param: { id: string } } & { json: AnnotationQueueItemIdsPublic }
            output: AnnotationQueueItemsPublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AnnotationQueueItemIdsPublic }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/assertion-results': {
      $put: { input: { json: AssertionResultBatch }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/v1/private/attachment/list': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                size?: number | undefined
                project_id: string
                entity_type: 'trace' | 'span'
                entity_id: string
                path: string
              }
            }
            output: AttachmentPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                size?: number | undefined
                project_id: string
                entity_type: 'trace' | 'span'
                entity_id: string
                path: string
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                size?: number | undefined
                project_id: string
                entity_type: 'trace' | 'span'
                entity_id: string
                path: string
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/private/attachment/upload-complete': {
      $post:
        | {
            input: { json: CompleteMultipartUploadRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: CompleteMultipartUploadRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CompleteMultipartUploadRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/private/attachment/delete': {
      $post:
        | {
            input: { json: CompleteMultipartUploadRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: CompleteMultipartUploadRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CompleteMultipartUploadRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/private/attachment/download': {
      $get:
        | {
            input: {
              query: {
                workspace_name?: string | undefined
                container_id: string
                entity_type: 'trace' | 'span'
                entity_id: string
                file_name: string
                mime_type: string
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                workspace_name?: string | undefined
                container_id: string
                entity_type: 'trace' | 'span'
                entity_id: string
                file_name: string
                mime_type: string
              }
            }
            output: ErrorMessage
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                workspace_name?: string | undefined
                container_id: string
                entity_type: 'trace' | 'span'
                entity_id: string
                file_name: string
                mime_type: string
              }
            }
            output: ErrorMessage
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v1/private/attachment/upload-start': {
      $post:
        | {
            input: { json: StartMultipartUploadRequest }
            output: StartMultipartUploadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: StartMultipartUploadRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: StartMultipartUploadRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/private/attachment/upload': {
      $put:
        | {
            input: {
              query: {
                file_name: string
                project_name?: string | undefined
                mime_type?: string | undefined
                entity_type: 'trace' | 'span'
                entity_id: string
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                file_name: string
                project_name?: string | undefined
                mime_type?: string | undefined
                entity_type: 'trace' | 'span'
                entity_id: string
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                file_name: string
                project_name?: string | undefined
                mime_type?: string | undefined
                entity_type: 'trace' | 'span'
                entity_id: string
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/private/auth': {
      $post:
        | { input: { json: AuthDetailsHolder }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: AuthDetailsHolder }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AuthDetailsHolder }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/private/auth/workspace': {
      $get:
        | { input: {}; output: WorkspaceNameHolder; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorMessage; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorMessage; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/v1/private/automations/evaluators': {
      $get: {
        input: {
          query: {
            project_id?: string | undefined
            id?: string | undefined
            name?: string | undefined
            filters?: string | undefined
            sorting?: string | undefined
            page?: number | undefined
            size?: number | undefined
          }
        }
        output: AutomationRuleEvaluatorPagePublic
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: AutomationRuleEvaluatorWrite }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/v1/private/automations/evaluators/delete': {
      $post: {
        input: { query: { project_id?: string | undefined } } & { json: BatchDelete }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/private/automations/evaluators/:id': {
      $get: {
        input: { param: { id: string } } & { query: { project_id?: string | undefined } }
        output: AutomationRuleEvaluatorPublic
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & { json: AutomationRuleEvaluatorUpdate }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/private/automations/evaluators/:id/logs': {
      $get: {
        input: { param: { id: string } } & { query: { size?: number | undefined } }
        output: LogPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/chat/completions': {
      $post:
        | {
            input: { json: ChatCompletionRequest }
            output: (ChatCompletionResponse | ErrorMessage)[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ChatCompletionRequest }
            output: ChatCompletionResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/private/dashboards': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            size?: number | undefined
            name?: string | undefined
            project_id?: string | undefined
            sorting?: string | undefined
            filters?: string | undefined
          }
        }
        output: DashboardPagePublic
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: DashboardWrite }
        output: DashboardPublic
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/private/dashboards/:dashboardId': {
      $get:
        | {
            input: { param: { dashboardId: string } }
            output: DashboardPublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete: {
        input: { param: { dashboardId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $patch:
        | {
            input: { param: { dashboardId: string } } & { json: DashboardUpdatePublic }
            output: DashboardPublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardId: string } } & { json: DashboardUpdatePublic }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/private/dashboards/delete-batch': {
      $post: { input: { json: BatchDelete }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/v1/private/dashboards/:dashboardId/widgets/:widgetId/query': {
      $post:
        | {
            input: { param: { dashboardId: string; widgetId: string } } & {
              json: DashboardWidgetQueryRequest
            }
            output: AnalyticsQueryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dashboardId: string; widgetId: string } } & {
              json: DashboardWidgetQueryRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dashboardId: string; widgetId: string } } & {
              json: DashboardWidgetQueryRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { dashboardId: string; widgetId: string } } & {
              json: DashboardWidgetQueryRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { dashboardId: string; widgetId: string } } & {
              json: DashboardWidgetQueryRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { dashboardId: string; widgetId: string } } & {
              json: DashboardWidgetQueryRequest
            }
            output: {}
            outputFormat: string
            status: 501
          }
    }
  } & {
    '/v1/private/datasets/:id/items/changes': {
      $post:
        | {
            input: { param: { id: string } } & { query: { override?: boolean | undefined } } & {
              json: DatasetItemChangesPublic
            }
            output: DatasetVersionPublic
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { query: { override?: boolean | undefined } } & {
              json: DatasetItemChangesPublic
            }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { override?: boolean | undefined } } & {
              json: DatasetItemChangesPublic
            }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { override?: boolean | undefined } } & {
              json: DatasetItemChangesPublic
            }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/private/datasets/items/batch': {
      $patch:
        | { input: { json: DatasetItemBatchUpdate }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: DatasetItemBatchUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/private/datasets': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            size?: number | undefined
            with_experiments_only?: boolean | undefined
            with_optimizations_only?: boolean | undefined
            prompt_id?: string | undefined
            project_id?: string | undefined
            name?: string | undefined
            sorting?: string | undefined
            filters?: string | undefined
          }
        }
        output: DatasetPagePublic
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: DatasetWrite }; output: {}; outputFormat: string; status: 201 }
    }
  } & {
    '/v1/private/datasets/items': {
      $put: {
        input: { json: DatasetItemBatchWrite }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/private/datasets/items/from-csv': {
      $post:
        | {
            input: { form: { file: { [x: string]: unknown }; dataset_id: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { form: { file: { [x: string]: unknown }; dataset_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/private/datasets/items/from-json': {
      $post:
        | {
            input: {
              form: { file: { [x: string]: unknown }; dataset_id: string; format: 'json' | 'jsonl' }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              form: { file: { [x: string]: unknown }; dataset_id: string; format: 'json' | 'jsonl' }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/private/datasets/:dataset_id/items/from-spans': {
      $post: {
        input: { param: { dataset_id: string } } & { json: CreateDatasetItemsFromSpansRequest }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/private/datasets/:dataset_id/items/from-traces': {
      $post: {
        input: { param: { dataset_id: string } } & { json: CreateDatasetItemsFromTracesRequest }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/private/datasets/:id': {
      $get: {
        input: { param: { id: string } }
        output: DatasetPublic
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: DatasetUpdate }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/v1/private/datasets/delete': {
      $post: { input: { json: DatasetIdentifier }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/v1/private/datasets/items/delete': {
      $post:
        | { input: { json: DatasetItemsDelete }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: DatasetItemsDelete }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/v1/private/datasets/delete-batch': {
      $post: { input: { json: BatchDelete }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/v1/private/datasets/export-jobs/:jobId/download': {
      $get:
        | { input: { param: { jobId: string } }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { param: { jobId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { jobId: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/v1/private/datasets/:id/expansions': {
      $post: {
        input: { param: { id: string } } & { json: DatasetExpansionWrite }
        output: DatasetExpansionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/datasets/:id/items/experiments/items': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            page?: number | undefined
            size?: number | undefined
            experiment_ids?: string | undefined
            dataset_version?: string | undefined
            filters?: string | undefined
            sorting?: string | undefined
            search?: string | undefined
            truncate?: boolean | undefined
          }
        }
        output: DatasetItemPageCompare
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/datasets/retrieve': {
      $post: {
        input: { json: DatasetIdentifierPublic }
        output: DatasetPublic
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/datasets/:id/items/experiments/items/stats': {
      $get: {
        input: { param: { id: string } } & {
          query: { experiment_ids: string; filters?: string | undefined }
        }
        output: ProjectStatsPublic
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/datasets/export-jobs/:jobId': {
      $get:
        | {
            input: { param: { jobId: string } }
            output: DatasetExportJobPublic
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { jobId: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/v1/private/datasets/export-jobs': {
      $get: { input: {}; output: DatasetExportJobPublic[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/private/datasets/items/:itemId': {
      $get: {
        input: { param: { itemId: string } }
        output: DatasetItemPublic
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { itemId: string } } & { json: DatasetItemWrite }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { itemId: string } } & { json: DatasetItemWrite }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/private/datasets/:id/items': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            page?: number | undefined
            size?: number | undefined
            version?: string | undefined
            filters?: string | undefined
            truncate?: boolean | undefined
          }
        }
        output: DatasetItemPagePublic
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/datasets/:id/items/experiments/items/output/columns': {
      $get: {
        input: { param: { id: string } } & { query: { experiment_ids?: string | undefined } }
        output: PageColumns
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/datasets/export-jobs/:jobId/mark-viewed': {
      $put:
        | { input: { param: { jobId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { jobId: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/v1/private/datasets/:id/export': {
      $post:
        | {
            input: { param: { id: string } }
            output: DatasetExportJobPublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: DatasetExportJobPublic
            outputFormat: 'json'
            status: 202
          }
    }
  } & {
    '/v1/private/datasets/items/stream': {
      $post: {
        input: { json: DatasetItemStreamRequest }
        output: (DatasetItem | ErrorMessage)[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/private/datasets/:id/versions/diff': {
      $get:
        | {
            input: { param: { id: string } }
            output: DatasetVersionDiff
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/v1/private/datasets/:id/versions/hash/:versionHash/tags': {
      $post:
        | {
            input: { param: { versionHash: string; id: string } } & { json: DatasetVersionTag }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { versionHash: string; id: string } } & { json: DatasetVersionTag }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { versionHash: string; id: string } } & { json: DatasetVersionTag }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { versionHash: string; id: string } } & { json: DatasetVersionTag }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/private/datasets/:id/versions/:versionHash/tags/:tag': {
      $delete: {
        input: { param: { versionHash: string; tag: string; id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/private/datasets/:id/versions/hash/:versionHash': {
      $get:
        | {
            input: { param: { versionHash: string; id: string } }
            output: DatasetVersionPublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { versionHash: string; id: string } }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { versionHash: string; id: string } } & {
              json: DatasetVersionUpdatePublic
            }
            output: DatasetVersionPublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { versionHash: string; id: string } } & {
              json: DatasetVersionUpdatePublic
            }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { versionHash: string; id: string } } & {
              json: DatasetVersionUpdatePublic
            }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { versionHash: string; id: string } } & {
              json: DatasetVersionUpdatePublic
            }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/private/datasets/:id/versions': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { page?: number | undefined; size?: number | undefined }
            }
            output: DatasetVersionPagePublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { page?: number | undefined; size?: number | undefined }
            }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/private/datasets/:id/versions/restore': {
      $post:
        | {
            input: { param: { id: string } } & { json: DatasetVersionRestorePublic }
            output: DatasetVersionPublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: DatasetVersionRestorePublic }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: DatasetVersionRestorePublic }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/private/datasets/:id/versions/retrieve': {
      $post:
        | {
            input: { param: { id: string } } & { json: DatasetVersionRetrieveRequestPublic }
            output: DatasetVersionPublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: DatasetVersionRetrieveRequestPublic }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: DatasetVersionRetrieveRequestPublic }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/environments': {
      $get: { input: {}; output: EnvironmentPagePublic; outputFormat: 'json'; status: 200 }
      $post:
        | { input: { json: EnvironmentWrite }; output: {}; outputFormat: string; status: 201 }
        | {
            input: { json: EnvironmentWrite }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/private/environments/delete': {
      $post: { input: { json: BatchDelete }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/v1/private/environments/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: EnvironmentPublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: EnvironmentUpdate }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: EnvironmentUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: EnvironmentUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/private/experiments/batch': {
      $patch:
        | { input: { json: ExperimentBatchUpdate }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: ExperimentBatchUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/private/experiments/cancel': {
      $put:
        | { input: { json: IdsHolder }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: IdsHolder }; output: ErrorMessage; outputFormat: 'json'; status: 403 }
        | { input: { json: IdsHolder }; output: ErrorMessage; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/v1/private/experiments': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                size?: number | undefined
                datasetId?: string | undefined
                optimization_id?: string | undefined
                types?: string | undefined
                name?: string | undefined
                dataset_deleted?: boolean | undefined
                prompt_id?: string | undefined
                project_id?: string | undefined
                project_deleted?: boolean | undefined
                sorting?: string | undefined
                filters?: string | undefined
                experiment_ids?: string | undefined
                force_sorting?: boolean | undefined
              }
            }
            output: ExperimentPagePublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                size?: number | undefined
                datasetId?: string | undefined
                optimization_id?: string | undefined
                types?: string | undefined
                name?: string | undefined
                dataset_deleted?: boolean | undefined
                prompt_id?: string | undefined
                project_id?: string | undefined
                project_deleted?: boolean | undefined
                sorting?: string | undefined
                filters?: string | undefined
                experiment_ids?: string | undefined
                force_sorting?: boolean | undefined
              }
            }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 400
          }
      $post: { input: { json: ExperimentWrite }; output: {}; outputFormat: string; status: 201 }
    }
  } & {
    '/v1/private/experiments/items': {
      $post: {
        input: { json: ExperimentItemsBatch }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/private/experiments/items/delete': {
      $post: {
        input: { json: ExperimentItemsDelete }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/private/experiments/delete': {
      $post: { input: { json: DeleteIdsHolder }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/v1/private/experiments/execute': {
      $post:
        | {
            input: { json: ExperimentExecutionRequest }
            output: ExperimentExecutionResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: ExperimentExecutionRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ExperimentExecutionRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ExperimentExecutionRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/private/experiments/items/bulk': {
      $put:
        | {
            input: { json: ExperimentItemBulkUploadExperimentItemBulkWriteView }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: ExperimentItemBulkUploadExperimentItemBulkWriteView }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ExperimentItemBulkUploadExperimentItemBulkWriteView }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: ExperimentItemBulkUploadExperimentItemBulkWriteView }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/private/experiments/feedback-scores/names': {
      $get: {
        input: { query: { experiment_ids?: string | undefined; project_id?: string | undefined } }
        output: FeedbackScoreNamesPublic
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/experiments/groups': {
      $get:
        | {
            input: {
              query: {
                groups?: string | undefined
                types?: string | undefined
                name?: string | undefined
                project_id?: string | undefined
                project_deleted?: boolean | undefined
                filters?: string | undefined
              }
            }
            output: ExperimentGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                groups?: string | undefined
                types?: string | undefined
                name?: string | undefined
                project_id?: string | undefined
                project_deleted?: boolean | undefined
                filters?: string | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/private/experiments/groups/aggregations': {
      $get:
        | {
            input: {
              query: {
                groups?: string | undefined
                types?: string | undefined
                name?: string | undefined
                project_id?: string | undefined
                project_deleted?: boolean | undefined
                filters?: string | undefined
              }
            }
            output: ExperimentGroupAggregationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                groups?: string | undefined
                types?: string | undefined
                name?: string | undefined
                project_id?: string | undefined
                project_deleted?: boolean | undefined
                filters?: string | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/private/experiments/finish': {
      $post:
        | { input: { json: DeleteIdsHolder }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: DeleteIdsHolder }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/private/experiments/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ExperimentPublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: ExperimentUpdate }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: ExperimentUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: ExperimentUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/experiments/items/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ExperimentItemPublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/experiments/items/stream': {
      $post: {
        input: { json: ExperimentItemStreamRequest }
        output: (ExperimentItem | ErrorMessage)[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/private/experiments/stream': {
      $post: {
        input: { json: ExperimentStreamRequestPublic }
        output: (ExperimentPublic | ErrorMessagePublic)[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/private/feedback-definitions': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            size?: number | undefined
            name?: string | undefined
            type?: 'numerical' | 'categorical' | 'boolean' | undefined
          }
        }
        output: FeedbackDefinitionPagePublic
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: FeedbackCreate }; output: {}; outputFormat: string; status: 201 }
    }
  } & {
    '/v1/private/feedback-definitions/:id': {
      $get: {
        input: { param: { id: string } }
        output: FeedbackPublic
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: FeedbackUpdate }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/private/feedback-definitions/delete': {
      $post:
        | { input: { json: BatchDelete }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: BatchDelete }; output: ErrorMessage; outputFormat: 'json'; status: 409 }
    }
  } & {
    '/v1/private/guardrails/policies': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                size?: number | undefined
                name?: string | undefined
                names?: string | undefined
                execution_scope?: 'on_request' | 'global' | undefined
                sorting?: string | undefined
              }
            }
            output: GuardrailPolicyPagePublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                size?: number | undefined
                name?: string | undefined
                names?: string | undefined
                execution_scope?: 'on_request' | 'global' | undefined
                sorting?: string | undefined
              }
            }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page?: number | undefined
                size?: number | undefined
                name?: string | undefined
                names?: string | undefined
                execution_scope?: 'on_request' | 'global' | undefined
                sorting?: string | undefined
              }
            }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                size?: number | undefined
                name?: string | undefined
                names?: string | undefined
                execution_scope?: 'on_request' | 'global' | undefined
                sorting?: string | undefined
              }
            }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 503
          }
      $post:
        | { input: { json: GuardrailPolicyWrite }; output: {}; outputFormat: string; status: 201 }
        | {
            input: { json: GuardrailPolicyWrite }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: GuardrailPolicyWrite }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GuardrailPolicyWrite }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: GuardrailPolicyWrite }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: GuardrailPolicyWrite }
            output: ErrorMessage
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: GuardrailPolicyWrite }
            output: ErrorMessage
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/private/guardrails/policies/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: GuardrailPolicyPublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { id: string } } & { json: GuardrailPolicyWrite }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: GuardrailPolicyWrite }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: GuardrailPolicyWrite }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: GuardrailPolicyWrite }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: GuardrailPolicyWrite }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: GuardrailPolicyWrite }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: GuardrailPolicyWrite }
            output: ErrorMessage
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { json: GuardrailPolicyWrite }
            output: ErrorMessage
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/private/guardrails': {
      $post: { input: { json: GuardrailBatchWrite }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/v1/private/guardrails/validations': {
      $post:
        | {
            input: { json: GuardrailsValidationRequest }
            output: GuardrailsValidationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GuardrailsValidationRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: GuardrailsValidationRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: GuardrailsValidationRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GuardrailsValidationRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: GuardrailsValidationRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: GuardrailsValidationRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/private/insights-views': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            size?: number | undefined
            name?: string | undefined
            project_id?: string | undefined
            sorting?: string | undefined
            filters?: string | undefined
          }
        }
        output: DashboardPagePublic
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: DashboardWrite }
        output: DashboardPublic
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/private/insights-views/:insightsViewId': {
      $get:
        | {
            input: { param: { insightsViewId: string } }
            output: DashboardPublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { insightsViewId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete: {
        input: { param: { insightsViewId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $patch:
        | {
            input: { param: { insightsViewId: string } } & { json: DashboardUpdatePublic }
            output: DashboardPublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { insightsViewId: string } } & { json: DashboardUpdatePublic }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/private/insights-views/delete-batch': {
      $post: { input: { json: BatchDelete }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/v1/private/insights-views/:insightsViewId/widgets/:widgetId/query': {
      $post:
        | {
            input: { param: { insightsViewId: string; widgetId: string } } & {
              json: DashboardWidgetQueryRequest
            }
            output: AnalyticsQueryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { insightsViewId: string; widgetId: string } } & {
              json: DashboardWidgetQueryRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { insightsViewId: string; widgetId: string } } & {
              json: DashboardWidgetQueryRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { insightsViewId: string; widgetId: string } } & {
              json: DashboardWidgetQueryRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { insightsViewId: string; widgetId: string } } & {
              json: DashboardWidgetQueryRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { insightsViewId: string; widgetId: string } } & {
              json: DashboardWidgetQueryRequest
            }
            output: {}
            outputFormat: string
            status: 501
          }
    }
  } & {
    '/v1/private/llm/models': {
      $get: { input: {}; output: string; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/private/llm/models/profiles': {
      $get: { input: {}; output: { [x: string]: ModelParams }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/private/llm-provider-key/delete': {
      $post: { input: { json: BatchDelete }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/v1/private/llm-provider-key': {
      $get: { input: {}; output: ProviderApiKeyPagePublic; outputFormat: 'json'; status: 200 }
      $post:
        | { input: { json: ProviderApiKeyWrite }; output: {}; outputFormat: string; status: 201 }
        | {
            input: { json: ProviderApiKeyWrite }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ProviderApiKeyWrite }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/private/llm-provider-key/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ProviderApiKeyPublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: ProviderApiKeyUpdate }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: ProviderApiKeyUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: ProviderApiKeyUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: ProviderApiKeyUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/llm-provider-key/auth-config/test': {
      $post:
        | { input: { json: ProviderAuthCheck }; output: Result; outputFormat: 'json'; status: 200 }
        | {
            input: { json: ProviderAuthCheck }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ProviderAuthCheck }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ProviderAuthCheck }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ProviderAuthCheck }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/private/local-runners/jobs/:jobId/logs': {
      $get:
        | {
            input: { param: { jobId: string } } & { query: { offset?: number | undefined } }
            output: LocalRunnerLogEntry[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobId: string } } & { query: { offset?: number | undefined } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { jobId: string } } & { json: LocalRunnerLogEntry[] }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { jobId: string } } & { json: LocalRunnerLogEntry[] }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { jobId: string } } & { json: LocalRunnerLogEntry[] }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/local-runners/jobs/:jobId/cancel': {
      $post:
        | { input: { param: { jobId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { jobId: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/local-runners/:runnerId/bridge/commands': {
      $post:
        | {
            input: { param: { runnerId: string } } & { json: BridgeCommandSubmitRequest }
            output: BridgeCommandSubmitResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { runnerId: string } } & { json: BridgeCommandSubmitRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { runnerId: string } } & { json: BridgeCommandSubmitRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { runnerId: string } } & { json: BridgeCommandSubmitRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/private/local-runners/jobs': {
      $post:
        | {
            input: { json: CreateLocalRunnerJobRequest }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { json: CreateLocalRunnerJobRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateLocalRunnerJobRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/private/local-runners/:runnerId': {
      $get:
        | {
            input: { param: { runnerId: string } }
            output: LocalRunner
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { runnerId: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
      $delete: {
        input: { param: { runnerId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/private/local-runners/:runnerId/bridge/commands/:commandId': {
      $get:
        | {
            input: { param: { runnerId: string; commandId: string } } & {
              query: { wait?: boolean | undefined; timeout?: number | undefined }
            }
            output: BridgeCommand
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { runnerId: string; commandId: string } } & {
              query: { wait?: boolean | undefined; timeout?: number | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/local-runners/jobs/:jobId': {
      $get:
        | {
            input: { param: { jobId: string } }
            output: LocalRunnerJob
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobId: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/local-runners/:runnerId/heartbeats': {
      $post:
        | {
            input: { param: { runnerId: string } } & { json: LocalRunnerHeartbeatRequest }
            output: LocalRunnerHeartbeatResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { runnerId: string } } & { json: LocalRunnerHeartbeatRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { runnerId: string } } & { json: LocalRunnerHeartbeatRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 410
          }
    }
  } & {
    '/v1/private/local-runners/:runnerId/jobs': {
      $get:
        | {
            input: { param: { runnerId: string } } & {
              query: {
                project_id?: string | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: LocalRunnerJobPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { runnerId: string } } & {
              query: {
                project_id?: string | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/local-runners': {
      $get:
        | {
            input: {
              query: {
                project_id: string
                status?: 'pairing' | 'connected' | 'disconnected' | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: LocalRunnerPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                project_id: string
                status?: 'pairing' | 'connected' | 'disconnected' | undefined
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/local-runners/:runnerId/bridge/commands/next': {
      $post:
        | {
            input: { param: { runnerId: string } } & { json: BridgeCommandNextRequest }
            output: BridgeCommandBatchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { runnerId: string } } & { json: BridgeCommandNextRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/local-runners/:runnerId/jobs/next': {
      $post:
        | {
            input: { param: { runnerId: string } }
            output: {
              id?: string | undefined
              runner_id?: string | undefined
              agent_name?: string | undefined
              status?: 'pending' | 'running' | 'completed' | 'failed' | 'cancelled' | undefined
              inputs?: JsonNode | undefined
              result?: JsonNode | undefined
              error?: string | undefined
              project_id?: string | undefined
              trace_id?: string | undefined
              mask_id?: string | undefined
              prompt_masks?: { [x: string]: string } | undefined
              blueprint_name?: string | undefined
              metadata?: LocalRunnerJobMetadata | undefined
              timeout?: number | undefined
              created_at?: string | undefined
              started_at?: string | undefined
              completed_at?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { runnerId: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/local-runners/:runnerId/checklist': {
      $patch:
        | {
            input: { param: { runnerId: string } } & { json: { [x: string]: unknown } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { runnerId: string } } & { json: { [x: string]: unknown } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/local-runners/:runnerId/agents': {
      $put:
        | {
            input: { param: { runnerId: string } } & { json: { [x: string]: unknown } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { runnerId: string } } & { json: { [x: string]: unknown } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { runnerId: string } } & { json: { [x: string]: unknown } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/local-runners/:runnerId/bridge/commands/:commandId/results': {
      $post:
        | {
            input: { param: { runnerId: string; commandId: string } } & {
              json: BridgeCommandResultRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { runnerId: string; commandId: string } } & {
              json: BridgeCommandResultRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { runnerId: string; commandId: string } } & {
              json: BridgeCommandResultRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/private/local-runners/jobs/:jobId/results': {
      $post:
        | {
            input: { param: { jobId: string } } & { json: LocalRunnerJobResultRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { jobId: string } } & { json: LocalRunnerJobResultRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { jobId: string } } & { json: LocalRunnerJobResultRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/manual-evaluation/spans': {
      $post:
        | {
            input: { json: ManualEvaluationRequest }
            output: ManualEvaluationResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: ManualEvaluationRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ManualEvaluationRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/manual-evaluation/threads': {
      $post:
        | {
            input: { json: ManualEvaluationRequest }
            output: ManualEvaluationResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: ManualEvaluationRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ManualEvaluationRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/manual-evaluation/traces': {
      $post:
        | {
            input: { json: ManualEvaluationRequest }
            output: ManualEvaluationResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: ManualEvaluationRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ManualEvaluationRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/ollama/models': {
      $post:
        | {
            input: { json: OllamaInstanceBaseUrlRequest }
            output: OllamaModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OllamaInstanceBaseUrlRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: OllamaInstanceBaseUrlRequest }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { json: OllamaInstanceBaseUrlRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/private/ollama/test-connection': {
      $post:
        | {
            input: { json: OllamaInstanceBaseUrlRequest }
            output: OllamaConnectionTestResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OllamaInstanceBaseUrlRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: OllamaInstanceBaseUrlRequest }
            output: OllamaConnectionTestResponse
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { json: OllamaInstanceBaseUrlRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/private/ollie/state': {
      $get:
        | { input: {}; output: File; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorMessage; outputFormat: 'text'; status: 401 }
        | { input: {}; output: ErrorMessage; outputFormat: 'text'; status: 404 }
      $put:
        | {
            input: { header: { 'Content-Length'?: bigint | undefined } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'Content-Length'?: bigint | undefined } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Content-Length'?: bigint | undefined } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Content-Length'?: bigint | undefined } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: ErrorMessage; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/v1/private/otel/v1/traces': {
      $post: { input: { json: JsonNode }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v1/private/optimizations': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                size?: number | undefined
                dataset_id?: string | undefined
                name?: string | undefined
                dataset_name?: string | undefined
                dataset_deleted?: boolean | undefined
                project_id?: string | undefined
                filters?: string | undefined
              }
            }
            output: OptimizationPagePublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                size?: number | undefined
                dataset_id?: string | undefined
                name?: string | undefined
                dataset_name?: string | undefined
                dataset_deleted?: boolean | undefined
                project_id?: string | undefined
                filters?: string | undefined
              }
            }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 400
          }
      $put: { input: { json: OptimizationWrite }; output: {}; outputFormat: string; status: 201 }
      $post: { input: { json: OptimizationWrite }; output: {}; outputFormat: string; status: 201 }
    }
  } & {
    '/v1/private/optimizations/delete': {
      $post: { input: { json: DeleteIdsHolder }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/v1/private/optimizations/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: OptimizationPublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 404
          }
      $put: {
        input: { param: { id: string } } & { json: OptimizationUpdate }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/private/optimizations/studio/:id/logs': {
      $get:
        | {
            input: { param: { id: string } }
            output: OptimizationStudioLog
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/pairing/sessions/:sessionId/activate': {
      $post:
        | {
            input: { param: { sessionId: string } } & { json: ActivateRequest }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { sessionId: string } } & { json: ActivateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sessionId: string } } & { json: ActivateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sessionId: string } } & { json: ActivateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { sessionId: string } } & { json: ActivateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { sessionId: string } } & { json: ActivateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/private/pairing/sessions': {
      $post:
        | {
            input: { json: CreateSessionRequest }
            output: CreateSessionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateSessionRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateSessionRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateSessionRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CreateSessionRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/private/projects/:projectId/alerts': {
      $get:
        | {
            input: { param: { projectId: string } } & {
              query: {
                page?: number | undefined
                size?: number | undefined
                sorting?: string | undefined
                filters?: string | undefined
              }
            }
            output: AlertPagePublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                page?: number | undefined
                size?: number | undefined
                sorting?: string | undefined
                filters?: string | undefined
              }
            }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/private/projects/:projectId/dashboards': {
      $get: {
        input: { param: { projectId: string } } & {
          query: {
            page?: number | undefined
            size?: number | undefined
            name?: string | undefined
            sorting?: string | undefined
            filters?: string | undefined
          }
        }
        output: DashboardPagePublic
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/projects/:projectId/datasets': {
      $get: {
        input: { param: { projectId: string } } & {
          query: {
            page?: number | undefined
            size?: number | undefined
            with_experiments_only?: boolean | undefined
            with_optimizations_only?: boolean | undefined
            name?: string | undefined
            sorting?: string | undefined
            filters?: string | undefined
          }
        }
        output: DatasetPagePublic
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/projects/:projectId/experiments': {
      $get:
        | {
            input: { param: { projectId: string } } & {
              query: {
                page?: number | undefined
                size?: number | undefined
                datasetId?: string | undefined
                optimization_id?: string | undefined
                types?: string | undefined
                name?: string | undefined
                dataset_deleted?: boolean | undefined
                sorting?: string | undefined
                filters?: string | undefined
                experiment_ids?: string | undefined
                force_sorting?: boolean | undefined
              }
            }
            output: ExperimentPagePublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                page?: number | undefined
                size?: number | undefined
                datasetId?: string | undefined
                optimization_id?: string | undefined
                types?: string | undefined
                name?: string | undefined
                dataset_deleted?: boolean | undefined
                sorting?: string | undefined
                filters?: string | undefined
                experiment_ids?: string | undefined
                force_sorting?: boolean | undefined
              }
            }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/private/projects/:projectId/optimizations': {
      $get:
        | {
            input: { param: { projectId: string } } & {
              query: {
                page?: number | undefined
                size?: number | undefined
                dataset_id?: string | undefined
                dataset_name?: string | undefined
                name?: string | undefined
                dataset_deleted?: boolean | undefined
                filters?: string | undefined
              }
            }
            output: OptimizationPagePublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: {
                page?: number | undefined
                size?: number | undefined
                dataset_id?: string | undefined
                dataset_name?: string | undefined
                name?: string | undefined
                dataset_deleted?: boolean | undefined
                filters?: string | undefined
              }
            }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/private/projects/:projectId/prompts': {
      $get: {
        input: { param: { projectId: string } } & {
          query: {
            page?: number | undefined
            size?: number | undefined
            name?: string | undefined
            sorting?: string | undefined
            filters?: string | undefined
          }
        }
        output: PromptPagePublic
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/projects': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            size?: number | undefined
            name?: string | undefined
            sorting?: string | undefined
          }
        }
        output: ProjectPagePublic
        outputFormat: 'json'
        status: 200
      }
      $post:
        | { input: { json: ProjectWrite }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: ProjectWrite }; output: ErrorMessage; outputFormat: 'json'; status: 400 }
        | { input: { json: ProjectWrite }; output: ErrorMessage; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/v1/private/projects/:id': {
      $get: {
        input: { param: { id: string } }
        output: ProjectPublic
        outputFormat: 'json'
        status: 200
      }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: ProjectUpdate }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: ProjectUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: ProjectUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/private/projects/delete': {
      $post: { input: { json: BatchDelete }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/v1/private/projects/feedback-scores/names': {
      $get: {
        input: { query: { project_ids?: string | undefined } }
        output: FeedbackScoreNames
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/projects/:id/token-usage/names': {
      $get: {
        input: { param: { id: string } }
        output: TokenUsageNames
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/projects/:id/kpi-cards': {
      $post:
        | {
            input: { param: { id: string } } & { json: KpiCardRequest }
            output: KpiCardResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: KpiCardRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/private/projects/:id/metrics': {
      $post:
        | {
            input: { param: { id: string } } & { json: ProjectMetricRequestPublic }
            output: ProjectMetricResponsePublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ProjectMetricRequestPublic }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: ProjectMetricRequestPublic }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/projects/stats': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            size?: number | undefined
            name?: string | undefined
            filters?: string | undefined
            from_time?: string | undefined
            to_time?: string | undefined
            sorting?: string | undefined
          }
        }
        output: ProjectStatsSummary
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/projects/retrieve': {
      $post:
        | {
            input: { json: ProjectRetrieveDetailed }
            output: ProjectDetailed
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProjectRetrieveDetailed }
            output: ErrorMessageDetailed
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ProjectRetrieveDetailed }
            output: ErrorMessageDetailed
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ProjectRetrieveDetailed }
            output: ErrorMessageDetailed
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/private/prompts': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            size?: number | undefined
            name?: string | undefined
            project_id?: string | undefined
            sorting?: string | undefined
            filters?: string | undefined
          }
        }
        output: PromptPagePublic
        outputFormat: 'json'
        status: 200
      }
      $post:
        | { input: { json: PromptWrite }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: PromptWrite }; output: ErrorMessage; outputFormat: 'json'; status: 400 }
        | { input: { json: PromptWrite }; output: ErrorMessage; outputFormat: 'json'; status: 409 }
        | { input: { json: PromptWrite }; output: ErrorMessage; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/v1/private/prompts/versions': {
      $post:
        | {
            input: { json: CreatePromptVersionDetail }
            output: PromptVersionDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreatePromptVersionDetail }
            output: ErrorMessageDetail
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreatePromptVersionDetail }
            output: ErrorMessageDetail
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreatePromptVersionDetail }
            output: ErrorMessageDetail
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { json: PromptVersionBatchUpdate }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: PromptVersionBatchUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/private/prompts/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { mask_id?: string | undefined; environment?: string | undefined }
            }
            output: PromptDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { mask_id?: string | undefined; environment?: string | undefined }
            }
            output: ErrorMessageDetail
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { mask_id?: string | undefined; environment?: string | undefined }
            }
            output: ErrorMessageDetail
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & { json: PromptUpdatable }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: PromptUpdatable }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: PromptUpdatable }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: PromptUpdatable }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: PromptUpdatable }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/v1/private/prompts/delete': {
      $post: { input: { json: BatchDelete }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/v1/private/prompts/by-commit/:commit': {
      $get:
        | {
            input: { param: { commit: string } }
            output: PromptDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { commit: string } }
            output: ErrorMessageDetail
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { commit: string } }
            output: ErrorMessageDetail
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { commit: string } }
            output: ErrorMessageDetail
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/private/prompts/versions/:versionId': {
      $get:
        | {
            input: { param: { versionId: string } }
            output: PromptVersionDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { versionId: string } }
            output: ErrorMessageDetail
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/prompts/:promptId/versions/by-number/:versionNumber': {
      $get:
        | {
            input: { param: { promptId: string; versionNumber: string } }
            output: PromptVersionDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { promptId: string; versionNumber: string } }
            output: ErrorMessageDetail
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { promptId: string; versionNumber: string } }
            output: ErrorMessageDetail
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/prompts/:id/versions': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            page?: number | undefined
            size?: number | undefined
            search?: string | undefined
            sorting?: string | undefined
            filters?: string | undefined
          }
        }
        output: PromptVersionPagePublic
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/prompts/retrieve-by-commits': {
      $post: {
        input: { json: PromptVersionCommitsRequestPublic }
        output: PromptVersionLinkPublic[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/prompts/:promptId/versions/:versionId/restore': {
      $post:
        | {
            input: { param: { promptId: string; versionId: string } }
            output: PromptVersionDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { promptId: string; versionId: string } }
            output: ErrorMessageDetail
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { promptId: string; versionId: string } }
            output: ErrorMessageDetail
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/prompts/versions/retrieve': {
      $post:
        | {
            input: { json: PromptVersionRetrieveDetail }
            output: PromptVersionDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PromptVersionRetrieveDetail }
            output: ErrorMessageDetail
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PromptVersionRetrieveDetail }
            output: ErrorMessageDetail
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PromptVersionRetrieveDetail }
            output: ErrorMessageDetail
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/private/prompts/versions/retrieve-by-ids': {
      $post:
        | {
            input: { json: PromptVersionIdsRequestDetail }
            output: PromptVersionDetail[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PromptVersionIdsRequestDetail }
            output: ErrorMessageDetail
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/private/prompts/versions/:versionId/environments': {
      $patch:
        | {
            input: { param: { versionId: string } } & { json: PromptVersionEnvironmentUpdate }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { versionId: string } } & { json: PromptVersionEnvironmentUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { versionId: string } } & { json: PromptVersionEnvironmentUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/projects/:projectId/activities': {
      $get:
        | {
            input: { param: { projectId: string } } & {
              query: { page?: number | undefined; size?: number | undefined }
            }
            output: RecentActivityPagePublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & {
              query: { page?: number | undefined; size?: number | undefined }
            }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } } & {
              query: { page?: number | undefined; size?: number | undefined }
            }
            output: ErrorMessagePublic
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/private/report-failures': {
      $get:
        | {
            input: {
              query: {
                type: 'agent_insights'
                project_id: string
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: ReportFailurePage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                type: 'agent_insights'
                project_id: string
                page?: number | undefined
                size?: number | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
      $post:
        | { input: { json: ReportFailure }; output: {}; outputFormat: string; status: 201 }
        | {
            input: { json: ReportFailure }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ReportFailure }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/v1/private/projects/:projectId/reports/:reportId/complete': {
      $post:
        | {
            input: { param: { projectId: string; reportId: string } } & {
              json: ReportCompleteRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectId: string; reportId: string } } & {
              json: ReportCompleteRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { projectId: string; reportId: string } } & {
              json: ReportCompleteRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/private/projects/:projectId/reports/generate': {
      $post:
        | {
            input: { param: { projectId: string } }
            output: GenerateReportResponse
            outputFormat: 'json'
            status: 202
          }
        | { input: { param: { projectId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { projectId: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/v1/private/projects/:projectId/reports/preferences': {
      $get: {
        input: { param: { projectId: string } }
        output: ReportPreference
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { projectId: string } } & { json: ReportPreference }
        output: ReportPreference
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/projects/:projectId/reports': {
      $get: {
        input: { param: { projectId: string } } & {
          query: { page?: number | undefined; size?: number | undefined }
        }
        output: OllieReportPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/retention/rules': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            size?: number | undefined
            include_inactive?: boolean | undefined
          }
        }
        output: RetentionRulePagePublic
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: RetentionRuleWrite }
        output: RetentionRulePublic
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/private/retention/rules/:ruleId': {
      $get:
        | {
            input: { param: { ruleId: string } }
            output: RetentionRulePublic
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ruleId: string } }; output: {}; outputFormat: string; status: 404 }
      $delete:
        | { input: { param: { ruleId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { ruleId: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/v1/private/toggles': {
      $get: { input: {}; output: ServiceTogglesConfig; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/private/spans/:id/comments': {
      $post: {
        input: { param: { id: string } } & { json: Comment }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/v1/private/spans/:id/feedback-scores': {
      $put: {
        input: { param: { id: string } } & { json: FeedbackScore }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/private/spans/batch': {
      $post: { input: { json: SpanBatchWrite }; output: {}; outputFormat: string; status: 204 }
      $patch:
        | { input: { json: SpanBatchUpdate }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: SpanBatchUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/private/spans': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            size?: number | undefined
            project_name?: string | undefined
            project_id?: string | undefined
            trace_id?: string | undefined
            type?: 'general' | 'tool' | 'llm' | 'guardrail' | undefined
            filters?: string | undefined
            truncate?: boolean | undefined
            strip_attachments?: boolean | undefined
            sorting?: string | undefined
            exclude?: string | undefined
            search?: string | undefined
            from_time?: string | undefined
            to_time?: string | undefined
          }
        }
        output: SpanPagePublic
        outputFormat: 'json'
        status: 200
      }
      $post:
        | { input: { json: SpanWrite }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: SpanWrite }; output: ErrorMessage; outputFormat: 'json'; status: 409 }
    }
  } & {
    '/v1/private/spans/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { strip_attachments?: boolean | undefined }
            }
            output: SpanPublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { strip_attachments?: boolean | undefined }
            }
            output: SpanPublic
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 501 }
      $patch:
        | {
            input: { param: { id: string } } & { json: SpanUpdate }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: SpanUpdate }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/private/spans/comments/delete': {
      $post: { input: { json: BatchDelete }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/v1/private/spans/:id/feedback-scores/delete': {
      $post: {
        input: { param: { id: string } } & { json: DeleteFeedbackScore }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/private/spans/feedback-scores/names': {
      $get: {
        input: {
          query: {
            project_id?: string | undefined
            type?: 'general' | 'tool' | 'llm' | 'guardrail' | undefined
          }
        }
        output: FeedbackScoreNamesPublic
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/spans/:spanId/comments/:commentId': {
      $get:
        | {
            input: { param: { commentId: string; spanId: string } }
            output: Comment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { commentId: string; spanId: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/spans/stats': {
      $get: {
        input: {
          query: {
            project_id?: string | undefined
            project_name?: string | undefined
            trace_id?: string | undefined
            type?: 'general' | 'tool' | 'llm' | 'guardrail' | undefined
            filters?: string | undefined
            search?: string | undefined
            from_time?: string | undefined
            to_time?: string | undefined
          }
        }
        output: ProjectStatsPublic
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/spans/feedback-scores': {
      $put: { input: { json: FeedbackScoreBatch }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/v1/private/spans/search': {
      $post:
        | {
            input: { json: SpanSearchStreamRequestPublic }
            output: (SpanPublic | ErrorMessagePublic)[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: SpanSearchStreamRequestPublic }
            output: ErrorMessagePublic
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v1/private/spans/exists': {
      $get: {
        input: {
          query: {
            project_id?: string | undefined
            project_name?: string | undefined
            source?: string | undefined
          }
        }
        output: ExistenceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/spans/comments/:commentId': {
      $patch:
        | {
            input: { param: { commentId: string } } & { json: Comment }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { commentId: string } } & { json: Comment }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/private/traces/threads/:id/comments': {
      $post: {
        input: { param: { id: string } } & { json: Comment }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/v1/private/traces/:id/comments': {
      $post: {
        input: { param: { id: string } } & { json: Comment }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/v1/private/traces/:id/feedback-scores': {
      $put: {
        input: { param: { id: string } } & { json: FeedbackScore }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/private/traces/batch': {
      $post: { input: { json: TraceBatchWrite }; output: {}; outputFormat: string; status: 204 }
      $patch:
        | { input: { json: TraceBatchUpdate }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: TraceBatchUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/private/traces/threads/batch': {
      $patch:
        | { input: { json: TraceThreadBatchUpdate }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: TraceThreadBatchUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/private/traces/threads/close': {
      $put:
        | {
            input: { json: TraceThreadBatchIdentifier }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: TraceThreadBatchIdentifier }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/traces': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            size?: number | undefined
            project_name?: string | undefined
            project_id?: string | undefined
            filters?: string | undefined
            truncate?: boolean | undefined
            strip_attachments?: boolean | undefined
            sorting?: string | undefined
            exclude?: string | undefined
            search?: string | undefined
            from_time?: string | undefined
            to_time?: string | undefined
            annotation_queue_id?: string | undefined
          }
        }
        output: TracePagePublic
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: TraceWrite }; output: {}; outputFormat: string; status: 201 }
    }
  } & {
    '/v1/private/traces/:id': {
      $get: {
        input: { param: { id: string } } & { query: { strip_attachments?: boolean | undefined } }
        output: TracePublic
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
      $patch: {
        input: { param: { id: string } } & { json: TraceUpdate }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/private/traces/threads/comments/delete': {
      $post: { input: { json: BatchDelete }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/v1/private/traces/threads/feedback-scores/delete': {
      $post: {
        input: { json: DeleteThreadFeedbackScores }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/private/traces/comments/delete': {
      $post: { input: { json: BatchDelete }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/v1/private/traces/:id/feedback-scores/delete': {
      $post: {
        input: { param: { id: string } } & { json: DeleteFeedbackScore }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/private/traces/threads/delete': {
      $post: { input: { json: DeleteTraceThreads }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/v1/private/traces/delete': {
      $post:
        | { input: { json: BatchDeleteByProject }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: BatchDeleteByProject }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/private/traces/feedback-scores/names': {
      $get: {
        input: { query: { project_id?: string | undefined } }
        output: FeedbackScoreNamesPublic
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/traces/threads/feedback-scores/names': {
      $get: {
        input: { query: { project_id?: string | undefined } }
        output: FeedbackScoreNamesPublic
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/traces/stats': {
      $get: {
        input: {
          query: {
            project_id?: string | undefined
            project_name?: string | undefined
            filters?: string | undefined
            search?: string | undefined
            from_time?: string | undefined
            to_time?: string | undefined
            annotation_queue_id?: string | undefined
          }
        }
        output: ProjectStatsPublic
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/traces/threads/:threadId/comments/:commentId': {
      $get:
        | {
            input: { param: { commentId: string; threadId: string } }
            output: Comment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { commentId: string; threadId: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/traces/threads/stats': {
      $get: {
        input: {
          query: {
            project_id?: string | undefined
            project_name?: string | undefined
            filters?: string | undefined
            search?: string | undefined
            from_time?: string | undefined
            to_time?: string | undefined
          }
        }
        output: ProjectStatsPublic
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/traces/:traceId/comments/:commentId': {
      $get:
        | {
            input: { param: { commentId: string; traceId: string } }
            output: Comment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { commentId: string; traceId: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/traces/threads/retrieve': {
      $post:
        | {
            input: { json: TraceThreadIdentifier }
            output: TraceThread
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TraceThreadIdentifier }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private/traces/threads': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            size?: number | undefined
            project_name?: string | undefined
            project_id?: string | undefined
            truncate?: boolean | undefined
            strip_attachments?: boolean | undefined
            filters?: string | undefined
            sorting?: string | undefined
            exclude?: string | undefined
            search?: string | undefined
            from_time?: string | undefined
            to_time?: string | undefined
            annotation_queue_id?: string | undefined
          }
        }
        output: TraceThreadPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/traces/threads/open': {
      $put: {
        input: { json: TraceThreadIdentifier }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/private/traces/threads/feedback-scores': {
      $put: {
        input: { json: FeedbackScoreBatchThread }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/private/traces/feedback-scores': {
      $put: { input: { json: FeedbackScoreBatch }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/v1/private/traces/threads/search': {
      $post:
        | {
            input: { json: TraceThreadSearchStreamRequest }
            output: (TraceThread | ErrorMessage)[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: TraceThreadSearchStreamRequest }
            output: ErrorMessage
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/v1/private/traces/search': {
      $post:
        | {
            input: { json: TraceSearchStreamRequestPublic }
            output: (TracePublic | ErrorMessagePublic)[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: TraceSearchStreamRequestPublic }
            output: ErrorMessagePublic
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: TraceSearchStreamRequestPublic }
            output: ErrorMessagePublic
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/private/traces/exists': {
      $get: {
        input: {
          query: {
            project_id?: string | undefined
            project_name?: string | undefined
            source?: string | undefined
            thread_only?: boolean | undefined
          }
        }
        output: ExistenceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/private/traces/threads/:threadModelId': {
      $patch:
        | {
            input: { param: { threadModelId: string } } & { json: TraceThreadUpdate }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { threadModelId: string } } & { json: TraceThreadUpdate }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/private/traces/threads/comments/:commentId': {
      $patch:
        | {
            input: { param: { commentId: string } } & { json: Comment }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { commentId: string } } & { json: Comment }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/private/traces/comments/:commentId': {
      $patch:
        | {
            input: { param: { commentId: string } } & { json: Comment }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { commentId: string } } & { json: Comment }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/private/welcome-wizard': {
      $get: { input: {}; output: WelcomeWizardTracking; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: WelcomeWizardSubmission }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/private/workspace-permissions': {
      $get:
        | { input: {}; output: WorkspaceUserPermissions; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorMessage; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorMessage; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/v1/private/workspaces/costs/summaries': {
      $post:
        | {
            input: { json: WorkspaceMetricsSummaryRequest }
            output: Result
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WorkspaceMetricsSummaryRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/private/workspaces/configurations': {
      $get:
        | { input: {}; output: WorkspaceConfiguration; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorMessage; outputFormat: 'json'; status: 404 }
      $put:
        | {
            input: { json: WorkspaceConfiguration }
            output: WorkspaceConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WorkspaceConfiguration }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: WorkspaceConfiguration }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: ErrorMessage; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/v1/private/workspaces/costs': {
      $post:
        | {
            input: { json: WorkspaceMetricsSummaryRequest }
            output: WorkspaceMetricResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WorkspaceMetricsSummaryRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/private/workspaces/metrics': {
      $post:
        | {
            input: { json: WorkspaceMetricsSummaryRequest }
            output: WorkspaceMetricResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WorkspaceMetricsSummaryRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/private/workspaces/metrics/spans': {
      $post:
        | {
            input: { json: WorkspaceSpanMetricRequest }
            output: WorkspaceMetricResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WorkspaceSpanMetricRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/private/workspaces/token-usage/names': {
      $post:
        | {
            input: { json: WorkspaceTokenUsageNamesRequest }
            output: TokenUsageNames
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WorkspaceTokenUsageNamesRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/private/workspaces/metrics/summaries': {
      $post:
        | {
            input: { json: WorkspaceMetricsSummaryRequest }
            output: WorkspaceMetricsSummaryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WorkspaceMetricsSummaryRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/session/redirect/datasets': {
      $get:
        | {
            input: {
              query: { dataset_id: string; workspace_name?: string | undefined; path: string }
            }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: {
              query: { dataset_id: string; workspace_name?: string | undefined; path: string }
            }
            output: ErrorMessage
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: { dataset_id: string; workspace_name?: string | undefined; path: string }
            }
            output: ErrorMessage
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/v1/session/redirect/experiments': {
      $get:
        | {
            input: {
              query: {
                dataset_id: string
                experiment_id: string
                workspace_name?: string | undefined
                path: string
              }
            }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: {
              query: {
                dataset_id: string
                experiment_id: string
                workspace_name?: string | undefined
                path: string
              }
            }
            output: ErrorMessage
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                dataset_id: string
                experiment_id: string
                workspace_name?: string | undefined
                path: string
              }
            }
            output: ErrorMessage
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/v1/session/redirect/optimizations': {
      $get:
        | {
            input: {
              query: {
                dataset_id: string
                optimization_id: string
                workspace_name?: string | undefined
                path: string
              }
            }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: {
              query: {
                dataset_id: string
                optimization_id: string
                workspace_name?: string | undefined
                path: string
              }
            }
            output: ErrorMessage
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                dataset_id: string
                optimization_id: string
                workspace_name?: string | undefined
                path: string
              }
            }
            output: ErrorMessage
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/v1/session/redirect/projects': {
      $get:
        | {
            input: {
              query: { trace_id: string; workspace_name?: string | undefined; path: string }
            }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: {
              query: { trace_id: string; workspace_name?: string | undefined; path: string }
            }
            output: ErrorMessage
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: { trace_id: string; workspace_name?: string | undefined; path: string }
            }
            output: ErrorMessage
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/is-alive/ping': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/is-alive/ver': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } },
  '/'
>
export default routes
