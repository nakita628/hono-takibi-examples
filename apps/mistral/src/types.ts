type ListSortFieldInput =
  | 'list_sort_field_unspecified'
  | 'list_sort_field_created_at'
  | 'list_sort_field_last_modified_at'
  | 'list_sort_field_name'
  | 'list_sort_field_title'
type ListSortDirectionInput =
  | 'list_sort_direction_unspecified'
  | 'list_sort_direction_asc'
  | 'list_sort_direction_desc'
type PromptVariable = { name?: string | undefined }
type PromptDefinition = { content: string; variables?: PromptVariable[] | undefined }
type RegistrySharingScope = 'sharing_scope_unspecified' | 'private' | 'workspace'
type Timestamp = string
type Prompt = {
  id?: string | undefined
  name?: string | undefined
  definition?: PromptDefinition | undefined
  version?: number | undefined
  notes?: string | undefined
  aliases?: string[] | undefined
  sharingScope?: RegistrySharingScope | undefined
  createdAt?: Timestamp | undefined
  updatedAt?: Timestamp | undefined
  latestVersion?: number | undefined
  title?: string | undefined
  description?: string | undefined
  createdBy?: string | undefined
  versionCreatedAt?: Timestamp | undefined
}
type ListPromptsResponse = { data?: Prompt[] | undefined; nextPageToken?: string | undefined }
type PromptVariableInput = { name?: string }
type PromptDefinitionInput = { content: string; variables?: PromptVariableInput[] }
type RegistrySharingScopeInput = 'sharing_scope_unspecified' | 'private' | 'workspace'
type ShareRelationInput = 'share_relation_unspecified' | 'reader' | 'writer'
type CreatePromptRequestInput = {
  name: string
  definition: PromptDefinitionInput
  title?: string | null
  description?: string | null
  notes?: string | null
  sharingScope?: RegistrySharingScopeInput | null
  aliases?: string[]
  workspaceRelation?: ShareRelationInput | null
}
type DeletePromptResponse = {}
type PromptVersion = {
  version?: number | undefined
  definition?: PromptDefinition | undefined
  notes?: string | undefined
  aliases?: string[] | undefined
  createdAt?: Timestamp | undefined
}
type ListPromptVersionsResponse = { data?: PromptVersion[] | undefined }
type CreatePromptVersionResponse = {
  version?: number | undefined
  deduplicated?: boolean | undefined
}
type AliasListInput = { values?: string[] }
type SkillAssetContent = { rawContent: string } | { textContent: string }
type SkillDefinition = {
  description?: string | undefined
  body?: string | undefined
  assets?: { [key: string]: SkillAssetContent } | undefined
}
type Skill = {
  id?: string | undefined
  name?: string | undefined
  definition?: SkillDefinition | undefined
  version?: number | undefined
  notes?: string | undefined
  aliases?: string[] | undefined
  sharingScope?: RegistrySharingScope | undefined
  createdAt?: Timestamp | undefined
  updatedAt?: Timestamp | undefined
  latestVersion?: number | undefined
}
type ListSkillsResponse = { data?: Skill[] | undefined; nextPageToken?: string | undefined }
type SkillAssetContentInput = { rawContent: string } | { textContent: string }
type SkillDefinitionInput = {
  description?: string
  body?: string
  assets?: { [key: string]: SkillAssetContentInput }
}
type CreateSkillRequestInput = {
  name: string
  definition: SkillDefinitionInput
  notes?: string | null
  sharingScope?: RegistrySharingScopeInput | null
  aliases?: string[]
  workspaceRelation?: ShareRelationInput | null
}
type DeleteSkillResponse = {}
type SkillVersion = {
  version?: number | undefined
  definition?: SkillDefinition | undefined
  notes?: string | undefined
  aliases?: string[] | undefined
  createdAt?: Timestamp | undefined
}
type ListSkillVersionsResponse = { data?: SkillVersion[] | undefined }
type CreateSkillVersionResponse = {
  version?: number | undefined
  deduplicated?: boolean | undefined
}
type MetadataDictInput = { [key: string]: unknown }
type IPAPhonemeInput =
  | 'a'
  | 'aɪ'
  | 'aʊ'
  | 'b'
  | 'd'
  | 'dʒ'
  | 'e'
  | 'eɪ'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'
  | 'oʊ'
  | 'p'
  | 's'
  | 't'
  | 'tʃ'
  | 'u'
  | 'v'
  | 'w'
  | 'z'
  | 'æ'
  | 'ð'
  | 'ŋ'
  | 'ɑ'
  | 'ɔ'
  | 'ɔɪ'
  | 'ɖ'
  | 'ə'
  | 'ɚ'
  | 'ɛ'
  | 'ɜ'
  | 'ɪ'
  | 'ɱ'
  | 'ɹ'
  | 'ɾ'
  | 'ʃ'
  | 'ʈ'
  | 'ʊ'
  | 'ʋ'
  | 'ʌ'
  | 'ʒ'
  | 'ʔ'
  | 'θ'
  | 'ʁ'
  | 'r'
  | 'ɑ̃'
  | 'ʀ'
  | 'x'
  | 'y'
  | 'ɔ̃'
  | 'ɐ'
  | 'œ'
  | 'ɛ̃'
  | 'ʝ'
  | 'ɲ'
  | 'ts'
  | 'ɥ'
  | 'ʏ'
  | 'ø'
  | 'β'
  | 'ɦ'
  | 'pf'
  | 'ʎ'
  | 'ɣ'
  | 'ɳ'
  | 'ɔʏ'
  | 'œ̃'
  | 'ɟʝ'
  | 'ɬ'
  | 'q'
type RawAudioInput = { data: string | string }
type SpeechUserTurnInput = { role: 'user'; audio: RawAudioInput }
type SpeechAssistantTurnInput = { role: 'assistant'; text: string; audio: RawAudioInput }
type SpeechOutputFormatInput = 'pcm' | 'wav' | 'mp3' | 'flac' | 'opus'
type SpeechRequestInput = {
  model?: string | null
  metadata?: MetadataDictInput | null
  stream?: boolean
  prompt_cache_key?: string | null
  voice_id?: string | null
  ref_audio?: string | string | null
  input: string
  expressiveness?: number | null
  phoneme_hints?: { [key: string]: IPAPhonemeInput[] } | null
  conversation_history?: (SpeechUserTurnInput | SpeechAssistantTurnInput)[] | null
  response_format?: SpeechOutputFormatInput
}
type ValidationError = {
  loc: (string | number)[]
  msg: string
  type: string
  input?: any | undefined
  ctx?: { [key: string]: unknown } | undefined
}
type HTTPValidationError = { detail?: ValidationError[] | undefined }
type ModelCapabilities = {
  completion_chat?: boolean | undefined
  function_calling?: boolean | undefined
  reasoning?: boolean | undefined
  completion_fim?: boolean | undefined
  fine_tuning?: boolean | undefined
  vision?: boolean | undefined
  ocr?: boolean | undefined
  classification?: boolean | undefined
  moderation?: boolean | undefined
  audio?: boolean | undefined
  audio_transcription?: boolean | undefined
  audio_transcription_realtime?: boolean | undefined
  audio_speech?: boolean | undefined
  unified_resources?: boolean | undefined
}
type StreamingDelayRange = { min: number; max: number }
type AudioTranscriptionCapabilities = {
  modes?: string[] | undefined
  diarization?: boolean | undefined
  context_bias?: boolean | undefined
  turn_detection?: boolean | undefined
  timestamp_granularities?: string[] | undefined
  languages?: string[] | undefined
  streaming_delays_ms?: StreamingDelayRange[] | undefined
}
type AudioSpeechCapabilities = {
  modes?: string[] | undefined
  instruction?: boolean | undefined
  response_formats?: string[] | undefined
}
type BaseModelCard = {
  id: string
  object?: string | undefined
  created?: number | undefined
  owned_by?: string | undefined
  capabilities: ModelCapabilities
  name?: (string | null) | undefined
  description?: (string | null) | undefined
  max_context_length?: number | undefined
  aliases?: string[] | undefined
  deprecation?: (string | null) | undefined
  deprecation_replacement_model?: (string | null) | undefined
  default_model_temperature?: (number | null) | undefined
  internal?: boolean | undefined
  billing_model_name?: (string | null) | undefined
  type?: 'base' | undefined
  audio_transcription_capabilities?: (AudioTranscriptionCapabilities | null) | undefined
  audio_speech_capabilities?: (AudioSpeechCapabilities | null) | undefined
}
type FTModelCard = {
  id: string
  object?: string | undefined
  created?: number | undefined
  owned_by?: string | undefined
  capabilities: ModelCapabilities
  name?: (string | null) | undefined
  description?: (string | null) | undefined
  max_context_length?: number | undefined
  aliases?: string[] | undefined
  deprecation?: (string | null) | undefined
  deprecation_replacement_model?: (string | null) | undefined
  default_model_temperature?: (number | null) | undefined
  internal?: boolean | undefined
  billing_model_name?: (string | null) | undefined
  type?: 'fine-tuned' | undefined
  job: string
  root: string
  archived?: boolean | undefined
}
type ModelList = { object?: string | undefined; data?: (BaseModelCard | FTModelCard)[] | undefined }
type DeleteModelResponse = {
  id: string
  object?: string | undefined
  deleted?: boolean | undefined
}
type ResponsesPromptCacheBreakpointInput = { mode: 'explicit'; ttl?: '30m' | '12h' | null }
type ResponsesInputTextInput = {
  text: string
  type: 'input_text'
  prompt_cache_breakpoint?: ResponsesPromptCacheBreakpointInput | null
}
type ResponsesInputImageInput = {
  detail: 'low' | 'high' | 'auto' | 'original'
  type: 'input_image'
  file_id?: string | null
  image_url?: string | null
  prompt_cache_breakpoint?: ResponsesPromptCacheBreakpointInput | null
}
type ResponsesInputFileInput = {
  type: 'input_file'
  detail?: 'auto' | 'low' | 'high' | null
  file_data?: string | null
  file_id?: string | null
  file_url?: string | null
  filename?: string | null
  prompt_cache_breakpoint?: ResponsesPromptCacheBreakpointInput | null
}
type ResponsesEasyInputMessageInput = {
  content: string | (ResponsesInputTextInput | ResponsesInputImageInput | ResponsesInputFileInput)[]
  role: 'user' | 'assistant' | 'system' | 'developer'
  phase?: 'commentary' | 'final_answer' | null
  type?: 'message' | null
}
type ResponsesMessageInput = {
  content: (ResponsesInputTextInput | ResponsesInputImageInput | ResponsesInputFileInput)[]
  role: 'user' | 'system' | 'developer'
  status?: 'in_progress' | 'completed' | 'incomplete' | null
  type?: 'message' | null
}
type ResponsesAnnotationFileCitationInput = {
  file_id: string
  filename: string
  index: number
  type: 'file_citation'
}
type ResponsesAnnotationURLCitationInput = {
  end_index: number
  start_index: number
  title: string
  type: 'url_citation'
  url: string
}
type ResponsesAnnotationContainerFileCitationInput = {
  container_id: string
  end_index: number
  file_id: string
  filename: string
  start_index: number
  type: 'container_file_citation'
}
type ResponsesAnnotationFilePathInput = { file_id: string; index: number; type: 'file_path' }
type ResponsesOutputTextLogprobTopLogprobInput = { token: string; bytes: number[]; logprob: number }
type ResponsesOutputTextLogprobInput = {
  token: string
  bytes: number[]
  logprob: number
  top_logprobs: ResponsesOutputTextLogprobTopLogprobInput[]
}
type ResponsesOutputTextInput = {
  annotations: (
    | ResponsesAnnotationFileCitationInput
    | ResponsesAnnotationURLCitationInput
    | ResponsesAnnotationContainerFileCitationInput
    | ResponsesAnnotationFilePathInput
  )[]
  text: string
  type: 'output_text'
  logprobs?: (ResponsesOutputTextLogprobInput[] | null) | null
}
type ResponsesOutputRefusalInput = { refusal: string; type: 'refusal' }
type ResponsesOutputMessageInput = {
  id: string
  content: (ResponsesOutputTextInput | ResponsesOutputRefusalInput)[]
  role: 'assistant'
  status: 'in_progress' | 'completed' | 'incomplete'
  type: 'message'
  phase?: ('commentary' | 'final_answer' | null) | null
}
type ResponsesCallerDirectInput = { type: 'direct' }
type ResponsesCallerProgramInput = { caller_id: string; type: 'program' }
type ResponsesFunctionToolCallInput = {
  arguments: string
  call_id: string
  name: string
  type: 'function_call'
  id?: (string | null) | null
  async?: (boolean | null) | null
  caller?: (ResponsesCallerDirectInput | ResponsesCallerProgramInput | null) | null
  namespace?: (string | null) | null
  status?: ('in_progress' | 'completed' | 'incomplete' | null) | null
}
type ResponsesInputTextContentInput = {
  text: string
  type: 'input_text'
  prompt_cache_breakpoint?: ResponsesPromptCacheBreakpointInput | null
}
type ResponsesInputImageContentInput = {
  type: 'input_image'
  detail?: 'low' | 'high' | 'auto' | 'original' | null
  file_id?: string | null
  image_url?: string | null
  prompt_cache_breakpoint?: ResponsesPromptCacheBreakpointInput | null
}
type ResponsesInputFileContentInput = {
  type: 'input_file'
  detail?: 'auto' | 'low' | 'high' | null
  file_data?: string | null
  file_id?: string | null
  file_url?: string | null
  filename?: string | null
  prompt_cache_breakpoint?: ResponsesPromptCacheBreakpointInput | null
}
type ResponsesFunctionCallOutputCallerDirectInput = { type: 'direct' }
type ResponsesFunctionCallOutputCallerProgramInput = { caller_id: string; type: 'program' }
type ResponsesFunctionCallOutputInput = {
  output:
    | string
    | (
        | ResponsesInputTextContentInput
        | ResponsesInputImageContentInput
        | ResponsesInputFileContentInput
      )[]
  type: 'function_call_output'
  id?: string | null
  call_id: string
  caller?:
    | ResponsesFunctionCallOutputCallerDirectInput
    | ResponsesFunctionCallOutputCallerProgramInput
    | null
  name?: string | null
  namespace?: string | null
  status?: 'in_progress' | 'completed' | 'incomplete' | null
}
type ResponsesSummaryInput = { text: string; type: 'summary_text' }
type ResponsesContentInput = { text: string; type: 'reasoning_text' }
type ResponsesReasoningItemInput = {
  id: string
  summary: ResponsesSummaryInput[]
  type: 'reasoning'
  content?: (ResponsesContentInput[] | null) | null
  encrypted_content?: (string | null) | null
  status?: ('in_progress' | 'completed' | 'incomplete' | null) | null
}
type ResponsesFunctionToolInput = {
  name: string
  parameters?: ({ [key: string]: unknown } | null) | null
  strict?: (boolean | null) | null
  type: 'function'
  allowed_callers?: (('direct' | 'programmatic')[] | null) | null
  async?: (boolean | null) | null
  defer_loading?: (boolean | null) | null
  description?: (string | null) | null
  output_schema?: ({ [key: string]: unknown } | null) | null
}
type ResponsesToolFunctionInput = {
  name: string
  type: 'function'
  allowed_callers?: (('direct' | 'programmatic')[] | null) | null
  async?: (boolean | null) | null
  defer_loading?: (boolean | null) | null
  description?: (string | null) | null
  output_schema?: ({ [key: string]: unknown } | null) | null
  parameters?: (any | null) | null
  strict?: (boolean | null) | null
}
type ResponsesTextInput = { type: 'text' }
type ResponsesGrammarInput = { definition: string; syntax: 'lark' | 'regex'; type: 'grammar' }
type ResponsesCustomToolInput = {
  name: string
  type: 'custom'
  allowed_callers?: (('direct' | 'programmatic')[] | null) | null
  async?: (boolean | null) | null
  defer_loading?: (boolean | null) | null
  description?: (string | null) | null
  format?: (ResponsesTextInput | ResponsesGrammarInput | null) | null
}
type ResponsesNamespaceToolInput = {
  description: string
  name: string
  tools: (ResponsesToolFunctionInput | ResponsesCustomToolInput)[]
  type: 'namespace'
}
type ResponsesToolChoiceFunctionInput = { name: string; type: 'function' }
type ResponsesSupportedReasoningInput = {
  effort?: ('none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | 'max' | null) | null
}
type ResponsesFormatTextInput = { type: 'text' }
type ResponsesFormatTextJSONSchemaConfigInput = {
  name: string
  schema: { [key: string]: unknown }
  type: 'json_schema'
  description?: (string | null) | null
  strict?: (boolean | null) | null
}
type ResponsesFormatJSONObjectInput = { type: 'json_object' }
type ResponsesTextConfigInput = {
  format?:
    | (
        | ResponsesFormatTextInput
        | ResponsesFormatTextJSONSchemaConfigInput
        | ResponsesFormatJSONObjectInput
        | null
      )
    | null
  verbosity?: ('low' | 'medium' | 'high' | null) | null
}
type CreateResponseRequestInput = {
  model: string
  input:
    | string
    | (
        | ResponsesEasyInputMessageInput
        | ResponsesMessageInput
        | ResponsesOutputMessageInput
        | ResponsesFunctionToolCallInput
        | ResponsesFunctionCallOutputInput
        | ResponsesReasoningItemInput
      )[]
  instructions?: string | null
  parallel_tool_calls?: boolean
  previous_response_id?: null
  truncation?: 'disabled'
  tools?: (ResponsesFunctionToolInput | ResponsesNamespaceToolInput)[]
  tool_choice?: 'none' | 'auto' | 'required' | ResponsesToolChoiceFunctionInput
  reasoning?: ResponsesSupportedReasoningInput | null
  conversation?: null
  prompt?: null
  text?: ResponsesTextConfigInput | null
  background?: false
  stream?: boolean
  store?: false | null
  max_output_tokens?: number | null
  temperature?: number | null
  top_p?: number | null
  metadata?: { [key: string]: string } | null
  prompt_cache_key?: string | null
  max_tool_calls?: number | null
  moderation?: null
  top_logprobs?: 0 | null
}
type ResponsesMisalignmentSteer = { message: string }
type ResponsesMisalignment = {
  detailed_explanation?: ((string | null) | null) | undefined
  error_type?: ((string | null) | null) | undefined
  review_target?: ((string | null) | null) | undefined
  steer?: ((ResponsesMisalignmentSteer | null) | null) | undefined
}
type ResponsesError = {
  code:
    | 'server_error'
    | 'rate_limit_exceeded'
    | 'invalid_prompt'
    | 'data_residency_mismatch'
    | 'bio_policy'
    | 'misalignment_policy_violation'
    | 'vector_store_timeout'
    | 'invalid_image'
    | 'invalid_image_format'
    | 'invalid_base64_image'
    | 'invalid_image_url'
    | 'image_too_large'
    | 'image_too_small'
    | 'image_parse_error'
    | 'image_content_policy_violation'
    | 'invalid_image_mode'
    | 'image_file_too_large'
    | 'unsupported_image_media_type'
    | 'empty_image_file'
    | 'failed_to_download_image'
    | 'image_file_not_found'
  message: string
  misalignment?: ((ResponsesMisalignment | null) | null) | undefined
  param?: ((string | null) | null) | undefined
  type?: ((string | null) | null) | undefined
  reason: 'invalid_output_format' | 'generation_failed' | 'missing_finish_reason'
}
type ResponsesIncompleteDetails = {
  reason?:
    | (('max_output_tokens' | 'max_messages' | 'content_filter' | 'steered' | null) | null)
    | undefined
}
type ResponsesAnnotationFileCitation = {
  file_id: string
  filename: string
  index: number
  type: 'file_citation'
}
type ResponsesAnnotationURLCitation = {
  end_index: number
  start_index: number
  title: string
  type: 'url_citation'
  url: string
}
type ResponsesAnnotationContainerFileCitation = {
  container_id: string
  end_index: number
  file_id: string
  filename: string
  start_index: number
  type: 'container_file_citation'
}
type ResponsesAnnotationFilePath = { file_id: string; index: number; type: 'file_path' }
type ResponsesOutputTextLogprobTopLogprob = { token: string; bytes: number[]; logprob: number }
type ResponsesOutputTextLogprob = {
  token: string
  bytes: number[]
  logprob: number
  top_logprobs: ResponsesOutputTextLogprobTopLogprob[]
}
type ResponsesOutputText = {
  annotations: (
    | ResponsesAnnotationFileCitation
    | ResponsesAnnotationURLCitation
    | ResponsesAnnotationContainerFileCitation
    | ResponsesAnnotationFilePath
  )[]
  text: string
  type: 'output_text'
  logprobs?: ((ResponsesOutputTextLogprob[] | null) | null) | undefined
}
type ResponsesOutputRefusal = { refusal: string; type: 'refusal' }
type ResponsesOutputMessage = {
  id: string
  content: (ResponsesOutputText | ResponsesOutputRefusal)[]
  role: 'assistant'
  status: 'in_progress' | 'completed' | 'incomplete'
  type: 'message'
  phase?: (('commentary' | 'final_answer' | null) | null) | undefined
}
type ResponsesCallerDirect = { type: 'direct' }
type ResponsesCallerProgram = { caller_id: string; type: 'program' }
type ResponsesFunctionToolCall = {
  arguments: string
  call_id: string
  name: string
  type: 'function_call'
  id?: ((string | null) | null) | undefined
  async?: ((boolean | null) | null) | undefined
  caller?: ((ResponsesCallerDirect | ResponsesCallerProgram | null) | null) | undefined
  namespace?: ((string | null) | null) | undefined
  status?: (('in_progress' | 'completed' | 'incomplete' | null) | null) | undefined
}
type ResponsesSummary = { text: string; type: 'summary_text' }
type ResponsesContent = { text: string; type: 'reasoning_text' }
type ResponsesReasoningItem = {
  id: string
  summary: ResponsesSummary[]
  type: 'reasoning'
  content?: ((ResponsesContent[] | null) | null) | undefined
  encrypted_content?: ((string | null) | null) | undefined
  status?: (('in_progress' | 'completed' | 'incomplete' | null) | null) | undefined
}
type ResponsesToolChoiceFunction = { name: string; type: 'function' }
type ResponsesFunctionTool = {
  name: string
  parameters?: (({ [key: string]: unknown } | null) | null) | undefined
  strict?: ((boolean | null) | null) | undefined
  type: 'function'
  allowed_callers?: ((('direct' | 'programmatic')[] | null) | null) | undefined
  async?: ((boolean | null) | null) | undefined
  defer_loading?: ((boolean | null) | null) | undefined
  description?: ((string | null) | null) | undefined
  output_schema?: (({ [key: string]: unknown } | null) | null) | undefined
}
type ResponsesToolFunction = {
  name: string
  type: 'function'
  allowed_callers?: ((('direct' | 'programmatic')[] | null) | null) | undefined
  async?: ((boolean | null) | null) | undefined
  defer_loading?: ((boolean | null) | null) | undefined
  description?: ((string | null) | null) | undefined
  output_schema?: (({ [key: string]: unknown } | null) | null) | undefined
  parameters?: ((any | null) | null) | undefined
  strict?: ((boolean | null) | null) | undefined
}
type ResponsesText = { type: 'text' }
type ResponsesGrammar = { definition: string; syntax: 'lark' | 'regex'; type: 'grammar' }
type ResponsesCustomTool = {
  name: string
  type: 'custom'
  allowed_callers?: ((('direct' | 'programmatic')[] | null) | null) | undefined
  async?: ((boolean | null) | null) | undefined
  defer_loading?: ((boolean | null) | null) | undefined
  description?: ((string | null) | null) | undefined
  format?: ((ResponsesText | ResponsesGrammar | null) | null) | undefined
}
type ResponsesNamespaceTool = {
  description: string
  name: string
  tools: (ResponsesToolFunction | ResponsesCustomTool)[]
  type: 'namespace'
}
type ResponsesSupportedReasoning = {
  effort?:
    | (('none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | 'max' | null) | null)
    | undefined
}
type ResponsesFormatText = { type: 'text' }
type ResponsesFormatTextJSONSchemaConfig = {
  name: string
  schema: { [key: string]: unknown }
  type: 'json_schema'
  description?: ((string | null) | null) | undefined
  strict?: ((boolean | null) | null) | undefined
}
type ResponsesFormatJSONObject = { type: 'json_object' }
type ResponsesTextConfig = {
  format?:
    | (
        | (
            | ResponsesFormatText
            | ResponsesFormatTextJSONSchemaConfig
            | ResponsesFormatJSONObject
            | null
          )
        | null
      )
    | undefined
  verbosity?: (('low' | 'medium' | 'high' | null) | null) | undefined
}
type ResponsesInputTokensDetails = { cache_write_tokens: number; cached_tokens: number }
type ResponsesOutputTokensDetails = { reasoning_tokens: number }
type ResponsesUsage = {
  input_tokens: number
  input_tokens_details: ResponsesInputTokensDetails
  output_tokens: number
  output_tokens_details: ResponsesOutputTokensDetails
  total_tokens: number
}
type CreateResponseResponse = {
  id: string
  created_at: number
  error?: ((ResponsesError | null) | null) | undefined
  incomplete_details?: ((ResponsesIncompleteDetails | null) | null) | undefined
  instructions?: ((string | null) | null) | undefined
  metadata?: (({ [key: string]: string } | null) | null) | undefined
  model: string
  object: 'response'
  output: (ResponsesOutputMessage | ResponsesFunctionToolCall | ResponsesReasoningItem)[]
  parallel_tool_calls: boolean
  temperature?: ((number | null) | null) | undefined
  tool_choice: 'none' | 'auto' | 'required' | ResponsesToolChoiceFunction
  tools: (ResponsesFunctionTool | ResponsesNamespaceTool)[]
  top_p?: ((number | null) | null) | undefined
  background?: ((boolean | null) | null) | undefined
  completed_at?: ((number | null) | null) | undefined
  max_output_tokens?: ((number | null) | null) | undefined
  max_tool_calls?: ((number | null) | null) | undefined
  previous_response_id?: ((string | null) | null) | undefined
  prompt_cache_key?: ((string | null) | null) | undefined
  prompt_cache_retention?: (('in_memory' | '24h' | null) | null) | undefined
  reasoning?: ((ResponsesSupportedReasoning | null) | null) | undefined
  safety_identifier?: ((string | null) | null) | undefined
  service_tier?:
    | (('auto' | 'default' | 'flex' | 'scale' | 'priority' | 'fast' | 'ultrafast' | null) | null)
    | undefined
  status?:
    | (
        | ('completed' | 'failed' | 'in_progress' | 'cancelled' | 'queued' | 'incomplete' | null)
        | null
      )
    | undefined
  text?: ((ResponsesTextConfig | null) | null) | undefined
  top_logprobs?: ((number | null) | null) | undefined
  truncation?: (('auto' | 'disabled' | null) | null) | undefined
  usage?: ((ResponsesUsage | null) | null) | undefined
  user?: ((string | null) | null) | undefined
}
type CountResponseInputTokensRequestInput = {
  model: string
  input:
    | string
    | (
        | ResponsesEasyInputMessageInput
        | ResponsesMessageInput
        | ResponsesOutputMessageInput
        | ResponsesFunctionToolCallInput
        | ResponsesFunctionCallOutputInput
        | ResponsesReasoningItemInput
      )[]
  instructions?: string | null
  parallel_tool_calls?: boolean
  previous_response_id?: null
  truncation?: 'disabled'
  tools?: (ResponsesFunctionToolInput | ResponsesNamespaceToolInput)[]
  tool_choice?: 'none' | 'auto' | 'required' | ResponsesToolChoiceFunctionInput
  reasoning?: ResponsesSupportedReasoningInput | null
  conversation?: null
  prompt?: null
  text?: ResponsesTextConfigInput | null
}
type CountResponseInputTokensResponse = { input_tokens: number; object: 'response.input_tokens' }
type CreateRealtimeSessionRequestInput = {
  purpose?: 'realtime'
  model: string
  ttl_seconds?: number | null
  metadata?: MetadataDictInput | null
}
type ClientSessionPurpose = 'realtime'
type ClientSecret = { value: string; expires_at: string }
type CreateRealtimeSessionResponse = {
  object?: 'client.session' | undefined
  purpose: ClientSessionPurpose
  expires_at: string
  client_secret: ClientSecret
}
type CreateServiceAccountRequestInput = {
  name: string
  workspace_id: string
  description?: string | null
  role_ids?: string[]
}
type ServiceAccount = {
  id: string
  name: string
  customer_id: string
  organization_id: string
  workspace_id: string
  description: string | null
  created_at: string
  updated_at: string
  deleted_at: string | null
}
type SortOrderInput = 'asc' | 'desc'
type ListServiceAccountsResponse = { items: ServiceAccount[] }
type AssignableServiceAccountRole = {
  uuid: string
  name: string
  description: string
  is_custom_role: boolean
}
type ListAssignableServiceAccountRolesResponse = { items: AssignableServiceAccountRole[] }
type UpdateServiceAccountRequestInput = { description?: string | null }
type SetServiceAccountRolesRequestInput = { role_ids: string[] }
type ServiceAccountRole = { role_id: string }
type ListServiceAccountRolesResponse = { items: ServiceAccountRole[] }
type TextChunkInput = { type?: 'text'; text: string }
type ImageDetailInput = 'low' | 'auto' | 'high'
type ImageURLInput = { url: string; detail?: ImageDetailInput | null }
type ImageURLChunkInput = { type?: 'image_url'; image_url: ImageURLInput | string }
type BuiltInConnectorsInput =
  | 'web_search'
  | 'web_search_premium'
  | 'code_interpreter'
  | 'image_generation'
  | 'document_library'
  | 'mistral_mcp'
type ToolFileChunkInput = {
  type?: 'tool_file'
  tool: BuiltInConnectorsInput | string
  file_id: string
  file_name?: string | null
  file_type?: string | null
}
type DocumentURLChunkInput = {
  type?: 'document_url'
  document_url: string
  document_name?: string | null
}
type ToolReferenceChunkInput = {
  type?: 'tool_reference'
  tool: BuiltInConnectorsInput | string
  title: string
  url?: string | null
  favicon?: string | null
  description?: string | null
}
type ReferenceChunkInput = { type?: 'reference'; reference_ids: (number | string)[] }
type ThinkChunkInput = {
  type?: 'thinking'
  thinking: (TextChunkInput | ToolReferenceChunkInput | ReferenceChunkInput)[]
  signature?: string | null
  closed?: boolean
}
type MessageInputContentChunksInput = (
  | TextChunkInput
  | ImageURLChunkInput
  | ToolFileChunkInput
  | DocumentURLChunkInput
  | ThinkChunkInput
)[]
type MessageInputEntryInput = {
  object?: 'entry'
  type?: 'message.input'
  created_at?: string
  completed_at?: string | null
  id?: string
  role: 'assistant' | 'user'
  content: string | MessageInputContentChunksInput
  prefix?: boolean
}
type MessageOutputContentChunksInput = (
  | TextChunkInput
  | ImageURLChunkInput
  | ToolFileChunkInput
  | DocumentURLChunkInput
  | ThinkChunkInput
  | ToolReferenceChunkInput
)[]
type MessageOutputEntryInput = {
  object?: 'entry'
  type?: 'message.output'
  created_at?: string
  completed_at?: string | null
  agent_id?: string | null
  model?: string | null
  id?: string
  role?: 'assistant'
  content: string | MessageOutputContentChunksInput
}
type FunctionResultEntryInput = {
  object?: 'entry'
  type?: 'function.result'
  created_at?: string
  completed_at?: string | null
  id?: string
  tool_call_id: string
  result: string
}
type FunctionCallEntryArgumentsInput = { [key: string]: unknown } | string
type FunctionCallEntryInput = {
  object?: 'entry'
  type?: 'function.call'
  created_at?: string
  completed_at?: string | null
  agent_id?: string | null
  model?: string | null
  id?: string
  tool_call_id: string
  name: string
  arguments: FunctionCallEntryArgumentsInput
  confirmation_status?: 'pending' | 'allowed' | 'denied' | null
}
type ToolExecutionInfoInput = { [key: string]: unknown }
type ToolExecutionEntryInput = {
  object?: 'entry'
  type?: 'tool.execution'
  created_at?: string
  completed_at?: string | null
  agent_id?: string | null
  model?: string | null
  id?: string
  name: BuiltInConnectorsInput | string
  arguments: string
  info?: ToolExecutionInfoInput
}
type AgentHandoffEntryInput = {
  object?: 'entry'
  type?: 'agent.handoff'
  created_at?: string
  completed_at?: string | null
  id?: string
  previous_agent_id: string
  previous_agent_name: string
  next_agent_id: string
  next_agent_name: string
}
type InputEntriesInput = (
  | MessageInputEntryInput
  | MessageOutputEntryInput
  | FunctionResultEntryInput
  | FunctionCallEntryInput
  | ToolExecutionEntryInput
  | AgentHandoffEntryInput
)[]
type ConversationInputsInput = string | InputEntriesInput
type FunctionInput = {
  name: string
  description?: string
  strict?: boolean
  parameters: { [key: string]: unknown }
}
type FunctionToolInput = { type?: 'function'; function: FunctionInput }
type ToolConfigurationInput = {
  exclude?: string[] | null
  include?: string[] | null
  requires_confirmation?: string[] | null
}
type WebSearchToolInput = {
  tool_configuration?: ToolConfigurationInput | null
  type?: 'web_search'
}
type WebSearchPremiumToolInput = {
  tool_configuration?: ToolConfigurationInput | null
  type?: 'web_search_premium'
}
type CodeInterpreterToolInput = {
  tool_configuration?: ToolConfigurationInput | null
  type?: 'code_interpreter'
}
type ImageGenerationToolInput = {
  tool_configuration?: ToolConfigurationInput | null
  type?: 'image_generation'
}
type DocumentLibraryToolInput = {
  tool_configuration?: ToolConfigurationInput | null
  type?: 'document_library'
  library_ids: string[]
}
type OAuth2TokenAuthInput = { type?: 'oauth2-token'; value: string }
type APIKeyAuthInput = { type?: 'api-key'; value: string }
type CustomConnectorInput = {
  type?: 'connector'
  connector_id: string
  authorization?: (OAuth2TokenAuthInput | APIKeyAuthInput) | null
  tool_configuration?: ToolConfigurationInput | null
}
type CompletionArgsStopInput = string | string[] | null
type PredictionInput = { type?: 'content'; content?: string }
type ResponseFormatsInput = 'text' | 'json_object' | 'json_schema'
type JsonSchemaInput = {
  name: string
  description?: string | null
  schema: { [key: string]: unknown }
  strict?: boolean
}
type ResponseFormatInput = { type?: ResponseFormatsInput; json_schema?: JsonSchemaInput | null }
type ToolChoiceEnumInput = 'auto' | 'none' | 'any' | 'required'
type ReasoningEffortInput = 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | 'max'
type CompletionArgsInput = {
  stop?: CompletionArgsStopInput
  presence_penalty?: number | null
  frequency_penalty?: number | null
  temperature?: number | null
  top_p?: number | null
  max_tokens?: number | null
  random_seed?: number | null
  prediction?: PredictionInput | null
  response_format?: ResponseFormatInput | null
  tool_choice?: ToolChoiceEnumInput
  reasoning_effort?: ReasoningEffortInput | null
}
type ModerationLLMV1CategoryThresholdsInput = {
  sexual?: number | null
  hate_and_discrimination?: number | null
  violence_and_threats?: number | null
  dangerous_and_criminal_content?: number | null
  selfharm?: number | null
  health?: number | null
  financial?: number | null
  law?: number | null
  pii?: number | null
}
type ModerationLLMActionInput = 'none' | 'block'
type ModerationLLMV1ConfigInput = {
  model_name?: string
  custom_category_thresholds?: ModerationLLMV1CategoryThresholdsInput | null
  ignore_other_categories?: boolean
  action?: ModerationLLMActionInput
}
type ModerationLLMV2CategoryThresholdsInput = {
  sexual?: number | null
  hate_and_discrimination?: number | null
  violence_and_threats?: number | null
  dangerous?: number | null
  criminal?: number | null
  selfharm?: number | null
  health?: number | null
  financial?: number | null
  law?: number | null
  pii?: number | null
  jailbreaking?: number | null
}
type ModerationLLMV2ConfigInput = {
  model_name?: string
  custom_category_thresholds?: ModerationLLMV2CategoryThresholdsInput | null
  ignore_other_categories?: boolean
  action?: ModerationLLMActionInput
}
type GuardrailConfigInput = {
  block_on_error?: boolean
  moderation_llm_v1?: ModerationLLMV1ConfigInput | null
  moderation_llm_v2?: ModerationLLMV2ConfigInput | null
}
type ConversationRequestBaseInput = {
  inputs: ConversationInputsInput
  stream?: (boolean | null) | null
  store?: (boolean | null) | null
  handoff_execution?: ('client' | 'server' | null) | null
  instructions?: (string | null) | null
  tools?:
    | (
        | (
            | FunctionToolInput
            | WebSearchToolInput
            | WebSearchPremiumToolInput
            | CodeInterpreterToolInput
            | ImageGenerationToolInput
            | DocumentLibraryToolInput
            | CustomConnectorInput
          )[]
        | null
      )
    | null
  completion_args?: (CompletionArgsInput | null) | null
  guardrails?: (GuardrailConfigInput[] | null) | null
  name?: (string | null) | null
  description?: (string | null) | null
  metadata?: (MetadataDictInput | null) | null
  agent_id?: (string | null) | null
  agent_version?: (string | number | null) | null
  model?: (string | null) | null
}
type ConversationRequestInput = ConversationRequestBaseInput & { stream?: false }
type TextChunk = { type?: 'text' | undefined; text: string }
type ImageDetail = 'low' | 'auto' | 'high'
type ImageURL = { url: string; detail?: (ImageDetail | null) | undefined }
type ImageURLChunk = { type?: 'image_url' | undefined; image_url: ImageURL | string }
type BuiltInConnectors =
  | 'web_search'
  | 'web_search_premium'
  | 'code_interpreter'
  | 'image_generation'
  | 'document_library'
  | 'mistral_mcp'
type ToolFileChunk = {
  type?: 'tool_file' | undefined
  tool: BuiltInConnectors | string
  file_id: string
  file_name?: (string | null) | undefined
  file_type?: (string | null) | undefined
}
type DocumentURLChunk = {
  type?: 'document_url' | undefined
  document_url: string
  document_name?: (string | null) | undefined
}
type ToolReferenceChunk = {
  type?: 'tool_reference' | undefined
  tool: BuiltInConnectors | string
  title: string
  url?: (string | null) | undefined
  favicon?: (string | null) | undefined
  description?: (string | null) | undefined
}
type ReferenceChunk = { type?: 'reference' | undefined; reference_ids: (number | string)[] }
type ThinkChunk = {
  type?: 'thinking' | undefined
  thinking: (TextChunk | ToolReferenceChunk | ReferenceChunk)[]
  signature?: (string | null) | undefined
  closed?: boolean | undefined
}
type MessageOutputContentChunks = (
  | TextChunk
  | ImageURLChunk
  | ToolFileChunk
  | DocumentURLChunk
  | ThinkChunk
  | ToolReferenceChunk
)[]
type MessageOutputEntry = {
  object?: 'entry' | undefined
  type?: 'message.output' | undefined
  created_at?: string | undefined
  completed_at?: (string | null) | undefined
  agent_id?: (string | null) | undefined
  model?: (string | null) | undefined
  id?: string | undefined
  role?: 'assistant' | undefined
  content: string | MessageOutputContentChunks
}
type ToolExecutionInfo = { [key: string]: unknown }
type ToolExecutionEntry = {
  object?: 'entry' | undefined
  type?: 'tool.execution' | undefined
  created_at?: string | undefined
  completed_at?: (string | null) | undefined
  agent_id?: (string | null) | undefined
  model?: (string | null) | undefined
  id?: string | undefined
  name: BuiltInConnectors | string
  arguments: string
  info?: ToolExecutionInfo | undefined
}
type FunctionCallEntryArguments = { [key: string]: unknown } | string
type FunctionCallEntry = {
  object?: 'entry' | undefined
  type?: 'function.call' | undefined
  created_at?: string | undefined
  completed_at?: (string | null) | undefined
  agent_id?: (string | null) | undefined
  model?: (string | null) | undefined
  id?: string | undefined
  tool_call_id: string
  name: string
  arguments: FunctionCallEntryArguments
  confirmation_status?: ('pending' | 'allowed' | 'denied' | null) | undefined
}
type AgentHandoffEntry = {
  object?: 'entry' | undefined
  type?: 'agent.handoff' | undefined
  created_at?: string | undefined
  completed_at?: (string | null) | undefined
  id?: string | undefined
  previous_agent_id: string
  previous_agent_name: string
  next_agent_id: string
  next_agent_name: string
}
type ConversationUsageInfo = {
  prompt_tokens?: number | undefined
  completion_tokens?: number | undefined
  total_tokens?: number | undefined
  connector_tokens?: ((number | null) | null) | undefined
  connectors?: (({ [key: string]: number } | null) | null) | undefined
}
type ConversationResponse = {
  object?: 'conversation.response' | undefined
  conversation_id: string
  outputs: (MessageOutputEntry | ToolExecutionEntry | FunctionCallEntry | AgentHandoffEntry)[]
  usage: ConversationUsageInfo
  guardrails?: (({ [key: string]: unknown }[] | null) | null) | undefined
}
type Function = {
  name: string
  description?: string | undefined
  strict?: boolean | undefined
  parameters: { [key: string]: unknown }
}
type FunctionTool = { type?: 'function' | undefined; function: Function }
type ToolConfiguration = {
  exclude?: (string[] | null) | undefined
  include?: (string[] | null) | undefined
  requires_confirmation?: (string[] | null) | undefined
}
type WebSearchTool = {
  tool_configuration?: (ToolConfiguration | null) | undefined
  type?: 'web_search' | undefined
}
type WebSearchPremiumTool = {
  tool_configuration?: (ToolConfiguration | null) | undefined
  type?: 'web_search_premium' | undefined
}
type CodeInterpreterTool = {
  tool_configuration?: (ToolConfiguration | null) | undefined
  type?: 'code_interpreter' | undefined
}
type ImageGenerationTool = {
  tool_configuration?: (ToolConfiguration | null) | undefined
  type?: 'image_generation' | undefined
}
type DocumentLibraryTool = {
  tool_configuration?: (ToolConfiguration | null) | undefined
  type?: 'document_library' | undefined
  library_ids: string[]
}
type OAuth2TokenAuth = { type?: 'oauth2-token' | undefined; value: string }
type APIKeyAuth = { type?: 'api-key' | undefined; value: string }
type CustomConnector = {
  type?: 'connector' | undefined
  connector_id: string
  authorization?: ((OAuth2TokenAuth | APIKeyAuth) | null) | undefined
  tool_configuration?: (ToolConfiguration | null) | undefined
}
type CompletionArgsStop = string | string[] | null
type Prediction = { type?: 'content' | undefined; content?: string | undefined }
type ResponseFormats = 'text' | 'json_object' | 'json_schema'
type JsonSchema = {
  name: string
  description?: (string | null) | undefined
  schema: { [key: string]: unknown }
  strict?: boolean | undefined
}
type ResponseFormat = {
  type?: ResponseFormats | undefined
  json_schema?: (JsonSchema | null) | undefined
}
type ToolChoiceEnum = 'auto' | 'none' | 'any' | 'required'
type ReasoningEffort = 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | 'max'
type CompletionArgs = {
  stop?: CompletionArgsStop | undefined
  presence_penalty?: (number | null) | undefined
  frequency_penalty?: (number | null) | undefined
  temperature?: (number | null) | undefined
  top_p?: (number | null) | undefined
  max_tokens?: (number | null) | undefined
  random_seed?: (number | null) | undefined
  prediction?: (Prediction | null) | undefined
  response_format?: (ResponseFormat | null) | undefined
  tool_choice?: ToolChoiceEnum | undefined
  reasoning_effort?: (ReasoningEffort | null) | undefined
}
type ModerationLLMV1CategoryThresholds = {
  sexual?: (number | null) | undefined
  hate_and_discrimination?: (number | null) | undefined
  violence_and_threats?: (number | null) | undefined
  dangerous_and_criminal_content?: (number | null) | undefined
  selfharm?: (number | null) | undefined
  health?: (number | null) | undefined
  financial?: (number | null) | undefined
  law?: (number | null) | undefined
  pii?: (number | null) | undefined
}
type ModerationLLMAction = 'none' | 'block'
type ModerationLLMV1Config = {
  model_name?: string | undefined
  custom_category_thresholds?: (ModerationLLMV1CategoryThresholds | null) | undefined
  ignore_other_categories?: boolean | undefined
  action?: ModerationLLMAction | undefined
}
type ModerationLLMV2CategoryThresholds = {
  sexual?: (number | null) | undefined
  hate_and_discrimination?: (number | null) | undefined
  violence_and_threats?: (number | null) | undefined
  dangerous?: (number | null) | undefined
  criminal?: (number | null) | undefined
  selfharm?: (number | null) | undefined
  health?: (number | null) | undefined
  financial?: (number | null) | undefined
  law?: (number | null) | undefined
  pii?: (number | null) | undefined
  jailbreaking?: (number | null) | undefined
}
type ModerationLLMV2Config = {
  model_name?: string | undefined
  custom_category_thresholds?: (ModerationLLMV2CategoryThresholds | null) | undefined
  ignore_other_categories?: boolean | undefined
  action?: ModerationLLMAction | undefined
}
type GuardrailConfig = {
  block_on_error?: boolean | undefined
  moderation_llm_v1?: (ModerationLLMV1Config | null) | undefined
  moderation_llm_v2?: (ModerationLLMV2Config | null) | undefined
}
type MetadataDict = { [key: string]: unknown }
type ModelConversation = {
  instructions?: (string | null) | undefined
  tools?:
    | (
        | FunctionTool
        | WebSearchTool
        | WebSearchPremiumTool
        | CodeInterpreterTool
        | ImageGenerationTool
        | DocumentLibraryTool
        | CustomConnector
      )[]
    | undefined
  completion_args?: CompletionArgs | undefined
  guardrails?: (GuardrailConfig[] | null) | undefined
  name?: (string | null) | undefined
  description?: (string | null) | undefined
  metadata?: (MetadataDict | null) | undefined
  object?: 'conversation' | undefined
  id: string
  created_at: string
  updated_at: string
  model: string
}
type AgentConversation = {
  name?: (string | null) | undefined
  description?: (string | null) | undefined
  metadata?: (MetadataDict | null) | undefined
  object?: 'conversation' | undefined
  id: string
  created_at: string
  updated_at: string
  agent_id: string
  agent_version?: (string | number | null) | undefined
}
type ToolCallConfirmationInput = { tool_call_id: string; confirmation: 'allow' | 'deny' }
type AppendConversationRequestInput = {
  inputs?: ConversationInputsInput
  stream?: boolean
  store?: boolean
  handoff_execution?: 'client' | 'server'
  completion_args?: CompletionArgsInput
  tool_confirmations?: ToolCallConfirmationInput[] | null
}
type ConversationAppendRequestInput = AppendConversationRequestInput & { stream?: false }
type MessageInputContentChunks = (
  | TextChunk
  | ImageURLChunk
  | ToolFileChunk
  | DocumentURLChunk
  | ThinkChunk
)[]
type MessageInputEntry = {
  object?: 'entry' | undefined
  type?: 'message.input' | undefined
  created_at?: string | undefined
  completed_at?: (string | null) | undefined
  id?: string | undefined
  role: 'assistant' | 'user'
  content: string | MessageInputContentChunks
  prefix?: boolean | undefined
}
type FunctionResultEntry = {
  object?: 'entry' | undefined
  type?: 'function.result' | undefined
  created_at?: string | undefined
  completed_at?: (string | null) | undefined
  id?: string | undefined
  tool_call_id: string
  result: string
}
type ConversationHistory = {
  object?: 'conversation.history' | undefined
  conversation_id: string
  entries: (
    | MessageInputEntry
    | MessageOutputEntry
    | FunctionResultEntry
    | FunctionCallEntry
    | ToolExecutionEntry
    | AgentHandoffEntry
  )[]
}
type MessageEntries = (MessageInputEntry | MessageOutputEntry)[]
type ConversationMessages = {
  object?: 'conversation.messages' | undefined
  conversation_id: string
  messages: MessageEntries
}
type RestartConversationRequestInput = {
  inputs?: ConversationInputsInput
  stream?: boolean
  store?: boolean
  handoff_execution?: 'client' | 'server'
  completion_args?: CompletionArgsInput
  guardrails?: GuardrailConfigInput[] | null
  metadata?: MetadataDictInput | null
  from_entry_id: string
  agent_version?: string | number | null
}
type ConversationRestartRequestInput = RestartConversationRequestInput & { stream?: false }
type CreateAgentRequestInput = {
  instructions?: string | null
  tools?: (
    | FunctionToolInput
    | WebSearchToolInput
    | WebSearchPremiumToolInput
    | CodeInterpreterToolInput
    | ImageGenerationToolInput
    | DocumentLibraryToolInput
    | CustomConnectorInput
  )[]
  completion_args?: CompletionArgsInput
  guardrails?: GuardrailConfigInput[] | null
  model: string
  name: string
  description?: string | null
  handoffs?: string[] | null
  metadata?: MetadataDictInput | null
  version_message?: string | null
}
type Agent = {
  instructions?: (string | null) | undefined
  tools?:
    | (
        | FunctionTool
        | WebSearchTool
        | WebSearchPremiumTool
        | CodeInterpreterTool
        | ImageGenerationTool
        | DocumentLibraryTool
        | CustomConnector
      )[]
    | undefined
  completion_args?: CompletionArgs | undefined
  guardrails?: (GuardrailConfig[] | null) | undefined
  model: string
  name: string
  description?: (string | null) | undefined
  handoffs?: (string[] | null) | undefined
  metadata?: (MetadataDict | null) | undefined
  object?: 'agent' | undefined
  id: string
  version: number
  versions: number[]
  owner_id?: (string | null) | undefined
  created_at: string
  updated_at: string
  deployment_chat: boolean
  source: string
  version_message?: (string | null) | undefined
}
type RequestSourceInput = 'api' | 'playground' | 'agent_builder_v1'
type AgentListPage = {
  object?: 'list' | undefined
  data: Agent[]
  next_page_token?: (string | null) | undefined
}
type UpdateAgentRequestInput = {
  instructions?: string | null
  tools?: (
    | FunctionToolInput
    | WebSearchToolInput
    | WebSearchPremiumToolInput
    | CodeInterpreterToolInput
    | ImageGenerationToolInput
    | DocumentLibraryToolInput
    | CustomConnectorInput
  )[]
  completion_args?: CompletionArgsInput
  guardrails?: GuardrailConfigInput[] | null
  model?: string | null
  name?: string | null
  description?: string | null
  handoffs?: string[] | null
  deployment_chat?: boolean | null
  metadata?: MetadataDictInput | null
  version_message?: string | null
}
type AgentAliasResponse = { alias: string; version: number; created_at: string; updated_at: string }
type ConversationStreamRequestInput = ConversationRequestBaseInput & { stream?: true }
type ConversationAppendStreamRequestInput = AppendConversationRequestInput & { stream?: true }
type ConversationRestartStreamRequestInput = RestartConversationRequestInput & { stream?: true }
type FilePurposeInput = 'fine-tune' | 'batch' | 'ocr' | 'agentic_safety'
type FileInput = File
type FilePurpose = 'fine-tune' | 'batch' | 'ocr' | 'agentic_safety'
type SampleType = 'pretrain' | 'instruct' | 'batch_request' | 'batch_result' | 'batch_error'
type Source = 'upload' | 'repository' | 'mistral'
type FileVisibility = 'workspace' | 'user'
type CreateFileResponse = {
  id: string
  object: string
  bytes: number
  created_at: number
  filename: string
  purpose: FilePurpose
  sample_type: SampleType
  num_lines?: (number | null) | undefined
  mimetype?: (string | null) | undefined
  source: Source
  signature?: (string | null) | undefined
  expires_at?: (number | null) | undefined
  visibility?: (FileVisibility | null) | undefined
}
type SampleTypeInput = 'pretrain' | 'instruct' | 'batch_request' | 'batch_result' | 'batch_error'
type SourceInput = 'upload' | 'repository' | 'mistral'
type FileSchema = {
  id: string
  object: string
  bytes: number
  created_at: number
  filename: string
  purpose: FilePurpose
  sample_type: SampleType
  num_lines?: (number | null) | undefined
  mimetype?: (string | null) | undefined
  source: Source
  signature?: (string | null) | undefined
  expires_at?: (number | null) | undefined
  visibility?: (FileVisibility | null) | undefined
}
type ListFilesResponse = { data: FileSchema[]; object: string; total?: (number | null) | undefined }
type GetFileResponse = {
  id: string
  object: string
  bytes: number
  created_at: number
  filename: string
  purpose: FilePurpose
  sample_type: SampleType
  num_lines?: (number | null) | undefined
  mimetype?: (string | null) | undefined
  source: Source
  signature?: (string | null) | undefined
  expires_at?: (number | null) | undefined
  visibility?: (FileVisibility | null) | undefined
  deleted: boolean
}
type DeleteFileResponse = { id: string; object: string; deleted: boolean }
type GetSignedUrlResponse = { url: string }
type UpdateModelRequestInput = { name?: string | null; description?: string | null }
type FineTunedModelCapabilities = {
  completion_chat?: boolean | undefined
  completion_fim?: boolean | undefined
  function_calling?: boolean | undefined
  fine_tuning?: boolean | undefined
  classification?: boolean | undefined
}
type CompletionFineTunedModel = {
  id: string
  object?: 'model' | undefined
  created: number
  owned_by: string
  workspace_id: string
  root: string
  root_version: string
  archived: boolean
  name?: (string | null) | undefined
  description?: (string | null) | undefined
  capabilities: FineTunedModelCapabilities
  max_context_length?: number | undefined
  aliases?: string[] | undefined
  job?: (string | null) | undefined
  model_type?: 'completion' | undefined
}
type FTClassifierLossFunction = 'single_class' | 'multi_class'
type ClassifierTargetResult = {
  name: string
  labels: string[]
  weight: number
  loss_function: FTClassifierLossFunction
}
type ClassifierFineTunedModel = {
  id: string
  object?: 'model' | undefined
  created: number
  owned_by: string
  workspace_id: string
  root: string
  root_version: string
  archived: boolean
  name?: (string | null) | undefined
  description?: (string | null) | undefined
  capabilities: FineTunedModelCapabilities
  max_context_length?: number | undefined
  aliases?: string[] | undefined
  job?: (string | null) | undefined
  classifier_targets: ClassifierTargetResult[]
  model_type?: 'classifier' | undefined
}
type ArchiveModelResponse = {
  id: string
  object?: 'model' | undefined
  archived?: boolean | undefined
}
type UnarchiveModelResponse = {
  id: string
  object?: 'model' | undefined
  archived?: boolean | undefined
}
type BatchJobStatusInput =
  | 'QUEUED'
  | 'RUNNING'
  | 'SUCCESS'
  | 'FAILED'
  | 'TIMEOUT_EXCEEDED'
  | 'CANCELLATION_REQUESTED'
  | 'CANCELLED'
type BatchError = { message: string; count?: number | undefined }
type BatchJobStatus =
  | 'QUEUED'
  | 'RUNNING'
  | 'SUCCESS'
  | 'FAILED'
  | 'TIMEOUT_EXCEEDED'
  | 'CANCELLATION_REQUESTED'
  | 'CANCELLED'
type BatchJob = {
  id: string
  object?: 'batch' | undefined
  input_files: string[]
  metadata?: ({ [key: string]: unknown } | null) | undefined
  endpoint: string
  model?: (string | null) | undefined
  agent_id?: (string | null) | undefined
  output_file?: (string | null) | undefined
  error_file?: (string | null) | undefined
  errors: BatchError[]
  outputs?: ({ [key: string]: unknown }[] | null) | undefined
  status: BatchJobStatus
  created_at: number
  total_requests: number
  completed_requests: number
  succeeded_requests: number
  failed_requests: number
  started_at?: (number | null) | undefined
  completed_at?: (number | null) | undefined
}
type ListBatchJobsResponse = {
  data?: BatchJob[] | undefined
  object?: 'list' | undefined
  total: number
}
type BatchRequestInput = { custom_id?: string | null; body: { [key: string]: unknown } }
type ApiEndpointInput =
  | '/v1/chat/completions'
  | '/v1/embeddings'
  | '/v1/fim/completions'
  | '/v1/moderations'
  | '/v1/chat/moderations'
  | '/v1/ocr'
  | '/v1/classifications'
  | '/v1/chat/classifications'
  | '/v1/conversations'
  | '/v1/audio/transcriptions'
type CreateBatchJobRequestInput = {
  input_files?: string[] | null
  requests?: BatchRequestInput[] | null
  endpoint: ApiEndpointInput
  model?: string | null
  agent_id?: string | null
  metadata?: { [key: string]: string } | null
  timeout_hours?: number
}
type DeleteBatchJobResponse = {
  id: string
  object?: 'batch' | undefined
  deleted?: boolean | undefined
}
type SystemMessageContentChunksInput = TextChunkInput | ThinkChunkInput
type SystemMessageInput = { role?: 'system'; content: string | SystemMessageContentChunksInput[] }
type FileChunkInput = { type?: 'file'; file_id: string }
type AudioChunkInput = { type?: 'input_audio'; input_audio: string | string }
type ResourceChunkInput = {
  type?: 'resource'
  uri: string
  content: TextChunkInput | ImageURLChunkInput
}
type ResourceLinkChunkInput = {
  type?: 'resource_link'
  uri: string
  metadata?: { [key: string]: string | number | number | boolean } | null
}
type ContentChunkInput =
  | TextChunkInput
  | ImageURLChunkInput
  | DocumentURLChunkInput
  | ReferenceChunkInput
  | FileChunkInput
  | ThinkChunkInput
  | AudioChunkInput
  | ResourceChunkInput
  | ResourceLinkChunkInput
type UserMessageInput = { role?: 'user'; content: string | null | ContentChunkInput[] }
type ToolTypesInput = 'function'
type FunctionCallInput = { name: string; arguments: { [key: string]: unknown } | string }
type ToolCallInput = {
  type?: ToolTypesInput
  function: FunctionCallInput
  index?: number
  id?: string
}
type AssistantMessageInput = {
  role?: 'assistant'
  content?: string | null | ContentChunkInput[]
  tool_calls?: ToolCallInput[] | null
  prefix?: boolean
}
type ToolMessageInput = {
  role?: 'tool'
  content: string | null | ContentChunkInput[]
  tool_call_id?: string | null
  name?: string | null
}
type ToolInput = { type?: ToolTypesInput; function: FunctionInput }
type FunctionNameInput = { name: string }
type NamedToolChoiceInput = { type?: ToolTypesInput; function: FunctionNameInput }
type MistralPromptModeInput = 'reasoning'
type RequestedServiceTierInput = 'auto' | 'standard_only'
type ChatCompletionRequestInput = {
  model: string
  temperature?: number | null
  top_p?: number | null
  max_tokens?: number | null
  stream?: boolean
  stop?: string | string[] | null
  random_seed?: number | null
  metadata?: { [key: string]: unknown } | null
  messages: (SystemMessageInput | UserMessageInput | AssistantMessageInput | ToolMessageInput)[]
  response_format?: ResponseFormatInput
  tools?:
    | (ToolInput | ImageGenerationToolInput | DocumentLibraryToolInput | CustomConnectorInput)[]
    | null
  tool_choice?: ToolChoiceEnumInput | NamedToolChoiceInput
  presence_penalty?: number | null
  frequency_penalty?: number | null
  min_tokens?: number | null
  repetition_penalty?: number | null
  top_k?: number | null
  logprobs?: boolean | null
  top_logprobs?: number | null
  prompt_logprobs?: boolean | null
  top_prompt_logprobs?: number | null
  n?: number | null
  prediction?: PredictionInput
  parallel_tool_calls?: boolean
  reasoning_effort?: ReasoningEffortInput | null
  prompt_mode?: MistralPromptModeInput | null
  guardrails?: GuardrailConfigInput[] | null
  prompt_cache_key?: string | null
  service_tier?: RequestedServiceTierInput | null
  safe_prompt?: boolean
}
type PromptTokensDetails = { cached_tokens?: number | undefined; audio_tokens?: number | undefined }
type UsageInfo = {
  prompt_tokens: number
  completion_tokens: number
  total_tokens: number
  prompt_audio_seconds?: (number | null) | undefined
  prompt_tokens_details?: (PromptTokensDetails | null) | undefined
  service_tier?: (string | null) | undefined
}
type ResponseBase = {
  id?: string | undefined
  object?: string | undefined
  model?: string | undefined
  usage?: UsageInfo | undefined
}
type ChatCompletionResponseBase = ResponseBase & { created?: number | undefined }
type FileChunk = { type?: 'file' | undefined; file_id: string }
type AudioChunk = { type?: 'input_audio' | undefined; input_audio: string | string }
type ResourceChunk = {
  type?: 'resource' | undefined
  uri: string
  content: TextChunk | ImageURLChunk
}
type ResourceLinkChunk = {
  type?: 'resource_link' | undefined
  uri: string
  metadata?: ({ [key: string]: string | number | number | boolean } | null) | undefined
}
type ContentChunk =
  | TextChunk
  | ImageURLChunk
  | DocumentURLChunk
  | ReferenceChunk
  | FileChunk
  | ThinkChunk
  | AudioChunk
  | ResourceChunk
  | ResourceLinkChunk
type ToolTypes = 'function'
type FunctionCall = { name: string; arguments: { [key: string]: unknown } | string }
type ToolCall = {
  type?: ToolTypes | undefined
  function: FunctionCall
  index?: number | undefined
  id?: string | undefined
}
type AssistantMessage = {
  role?: 'assistant' | undefined
  content?: (string | null | ContentChunk[]) | undefined
  tool_calls?: (ToolCall[] | null) | undefined
  prefix?: boolean | undefined
}
type DeltaMessage = {
  role?: (string | null) | undefined
  content?: (string | null | ContentChunk[]) | undefined
  tool_calls?: (null | ToolCall[]) | undefined
  tool_call_id?: (string | null) | undefined
  index?: (number | null) | undefined
  metadata?: ({ [key: string]: unknown } | null) | undefined
}
type ChatCompletionResponseTokenLogprobs = {
  token: string
  logprob: number
  bytes: number[]
  token_id: number
}
type ChatCompletionResponseTokenLogprobsTopK = {
  token: string
  logprob: number
  bytes: number[]
  token_id: number
  top_logprobs?: (ChatCompletionResponseTokenLogprobs[] | null) | undefined
}
type ChatCompletionResponseChoiceLogprobs = { content: ChatCompletionResponseTokenLogprobsTopK[] }
type ChatCompletionChoice = {
  index: number
  message?: AssistantMessage | undefined
  messages?: DeltaMessage[] | undefined
  finish_reason: 'stop' | 'length' | 'model_length' | 'error' | 'tool_calls'
  logprobs?: (ChatCompletionResponseChoiceLogprobs | null) | undefined
  prompt_logprobs?: (ChatCompletionResponseChoiceLogprobs | null) | undefined
}
type ChatCompletionResponse = ChatCompletionResponseBase & { choices: ChatCompletionChoice[] }
type FIMCompletionRequestInput = {
  model: string
  temperature?: number | null
  top_p?: number | null
  max_tokens?: number | null
  stream?: boolean
  stop?: string | string[] | null
  random_seed?: number | null
  metadata?: { [key: string]: unknown } | null
  prompt: string
  suffix?: string | null
  min_tokens?: number | null
  prompt_cache_key?: string | null
}
type FIMCompletionResponse = ChatCompletionResponse & { model?: string | undefined }
type AgentsCompletionRequestInput = {
  max_tokens?: number | null
  stream?: boolean
  stop?: string | string[] | null
  random_seed?: number | null
  metadata?: { [key: string]: unknown } | null
  messages: (SystemMessageInput | UserMessageInput | AssistantMessageInput | ToolMessageInput)[]
  response_format?: ResponseFormatInput
  tools?:
    | (ToolInput | ImageGenerationToolInput | DocumentLibraryToolInput | CustomConnectorInput)[]
    | null
  tool_choice?: ToolChoiceEnumInput | NamedToolChoiceInput
  presence_penalty?: number | null
  frequency_penalty?: number | null
  min_tokens?: number | null
  repetition_penalty?: number | null
  top_k?: number | null
  logprobs?: boolean | null
  top_logprobs?: number | null
  prompt_logprobs?: boolean | null
  top_prompt_logprobs?: number | null
  n?: number | null
  prediction?: PredictionInput
  parallel_tool_calls?: boolean
  reasoning_effort?: ReasoningEffortInput | null
  prompt_mode?: MistralPromptModeInput | null
  guardrails?: GuardrailConfigInput[] | null
  prompt_cache_key?: string | null
  service_tier?: RequestedServiceTierInput | null
  agent_id: string
}
type EmbeddingDtypeInput = 'float' | 'int8' | 'uint8' | 'binary' | 'ubinary'
type EncodingFormatInput = 'float' | 'base64'
type EmbeddingInputInput = string | ImageURLChunkInput | AudioChunkInput
type EmbeddingRequestInput = {
  model: string
  metadata?: { [key: string]: unknown } | null
  output_dimension?: number | null
  output_dtype?: EmbeddingDtypeInput
  encoding_format?: EncodingFormatInput
  input: string | ImageURLChunkInput | AudioChunkInput | string[] | EmbeddingInputInput[]
}
type EmbeddingResponseData = {
  object?: string | undefined
  embedding?: number[] | undefined
  index?: number | undefined
}
type EmbeddingResponse = ResponseBase & { data: EmbeddingResponseData[] }
type ModerationRequestInput = {
  model: string
  metadata?: { [key: string]: unknown } | null
  queries?: { [key: string]: string } | null
  input: string | string[]
}
type ModerationObject = {
  categories?: { [key: string]: boolean } | undefined
  category_scores?: { [key: string]: number } | undefined
}
type ModerationResponse = { id: string; model: string; results: ModerationObject[] }
type ChatModerationRequestInput = {
  input:
    | (SystemMessageInput | UserMessageInput | AssistantMessageInput | ToolMessageInput)[]
    | (SystemMessageInput | UserMessageInput | AssistantMessageInput | ToolMessageInput)[][]
  model: string
}
type OCRRequestInput = {
  model: string | null
  document: FileChunkInput | DocumentURLChunkInput | ImageURLChunkInput
  pages?: string | number[] | null
  include_image_base64?: boolean | null
  image_limit?: number | null
  image_min_size?: number | null
  bbox_annotation_format?: ResponseFormatInput | null
  document_annotation_format?: ResponseFormatInput | null
  document_annotation_prompt?: string | null
  table_format?: 'markdown' | 'html' | null
  extract_header?: boolean
  extract_footer?: boolean
  include_blocks?: boolean
  confidence_scores_granularity?: 'word' | 'page' | 'block' | null
}
type OCRImageObject = {
  id: string
  top_left_x: number | null
  top_left_y: number | null
  bottom_right_x: number | null
  bottom_right_y: number | null
  image_base64?: (string | null) | undefined
  image_annotation?: (string | null) | undefined
}
type OCRConfidenceScore = { text: string; confidence: number; start_index: number }
type OCRTableObject = {
  id: string
  content: string
  format: 'markdown' | 'html'
  word_confidence_scores?: (OCRConfidenceScore[] | null) | undefined
}
type OCRPageDimensions = { dpi: number; height: number; width: number }
type OCRPageConfidenceScores = {
  word_confidence_scores?: OCRConfidenceScore[] | undefined
  average_page_confidence_score: number
  minimum_page_confidence_score: number
}
type OCRBlockConfidenceScores = {
  average_content_confidence_score?: (number | null) | undefined
  minimum_content_confidence_score?: (number | null) | undefined
  block_type_confidence_score?: (number | null) | undefined
}
type OCRTextBlock = {
  top_left_x: number
  top_left_y: number
  bottom_right_x: number
  bottom_right_y: number
  content: string
  confidence_scores?: (OCRBlockConfidenceScores | null) | undefined
  type?: 'text' | undefined
}
type OCRListBlock = {
  top_left_x: number
  top_left_y: number
  bottom_right_x: number
  bottom_right_y: number
  content: string
  confidence_scores?: (OCRBlockConfidenceScores | null) | undefined
  type?: 'list' | undefined
}
type OCRImageBlock = {
  top_left_x: number
  top_left_y: number
  bottom_right_x: number
  bottom_right_y: number
  content: string
  confidence_scores?: (OCRBlockConfidenceScores | null) | undefined
  type?: 'image' | undefined
  image_id: string
}
type OCRTableBlock = {
  top_left_x: number
  top_left_y: number
  bottom_right_x: number
  bottom_right_y: number
  content: string
  confidence_scores?: (OCRBlockConfidenceScores | null) | undefined
  type?: 'table' | undefined
  table_id?: (string | null) | undefined
}
type OCRTitleBlock = {
  top_left_x: number
  top_left_y: number
  bottom_right_x: number
  bottom_right_y: number
  content: string
  confidence_scores?: (OCRBlockConfidenceScores | null) | undefined
  type?: 'title' | undefined
}
type OCREquationBlock = {
  top_left_x: number
  top_left_y: number
  bottom_right_x: number
  bottom_right_y: number
  content: string
  confidence_scores?: (OCRBlockConfidenceScores | null) | undefined
  type?: 'equation' | undefined
}
type OCRCaptionBlock = {
  top_left_x: number
  top_left_y: number
  bottom_right_x: number
  bottom_right_y: number
  content: string
  confidence_scores?: (OCRBlockConfidenceScores | null) | undefined
  type?: 'caption' | undefined
}
type OCRCodeBlock = {
  top_left_x: number
  top_left_y: number
  bottom_right_x: number
  bottom_right_y: number
  content: string
  confidence_scores?: (OCRBlockConfidenceScores | null) | undefined
  type?: 'code' | undefined
}
type OCRReferencesBlock = {
  top_left_x: number
  top_left_y: number
  bottom_right_x: number
  bottom_right_y: number
  content: string
  confidence_scores?: (OCRBlockConfidenceScores | null) | undefined
  type?: 'references' | undefined
}
type OCRAsideTextBlock = {
  top_left_x: number
  top_left_y: number
  bottom_right_x: number
  bottom_right_y: number
  content: string
  confidence_scores?: (OCRBlockConfidenceScores | null) | undefined
  type?: 'aside_text' | undefined
}
type OCRHeaderBlock = {
  top_left_x: number
  top_left_y: number
  bottom_right_x: number
  bottom_right_y: number
  content: string
  confidence_scores?: (OCRBlockConfidenceScores | null) | undefined
  type?: 'header' | undefined
}
type OCRFooterBlock = {
  top_left_x: number
  top_left_y: number
  bottom_right_x: number
  bottom_right_y: number
  content: string
  confidence_scores?: (OCRBlockConfidenceScores | null) | undefined
  type?: 'footer' | undefined
}
type OCRSignatureBlock = {
  top_left_x: number
  top_left_y: number
  bottom_right_x: number
  bottom_right_y: number
  content: string
  confidence_scores?: (OCRBlockConfidenceScores | null) | undefined
  type?: 'signature' | undefined
}
type OCRPageObject = {
  index: number
  markdown: string
  images: OCRImageObject[]
  tables?: OCRTableObject[] | undefined
  hyperlinks?: string[] | undefined
  header?: (string | null) | undefined
  footer?: (string | null) | undefined
  dimensions: OCRPageDimensions | null
  confidence_scores?: (OCRPageConfidenceScores | null) | undefined
  blocks?:
    | (
        | (
            | OCRTextBlock
            | OCRListBlock
            | OCRImageBlock
            | OCRTableBlock
            | OCRTitleBlock
            | OCREquationBlock
            | OCRCaptionBlock
            | OCRCodeBlock
            | OCRReferencesBlock
            | OCRAsideTextBlock
            | OCRHeaderBlock
            | OCRFooterBlock
            | OCRSignatureBlock
          )[]
        | null
      )
    | undefined
}
type OCRUsageInfo = { pages_processed: number; doc_size_bytes?: (number | null) | undefined }
type OCRResponse = {
  pages: OCRPageObject[]
  model: string
  document_annotation?: (string | null) | undefined
  usage_info: OCRUsageInfo
}
type ClassificationRequestInput = {
  model: string
  metadata?: { [key: string]: unknown } | null
  input: string | string[]
}
type ClassificationTargetResult = { scores: { [key: string]: number } }
type ClassificationResponse = {
  id: string
  model: string
  results: { [key: string]: ClassificationTargetResult }[]
}
type InstructRequestInput = {
  messages: (SystemMessageInput | UserMessageInput | AssistantMessageInput | ToolMessageInput)[]
}
type ChatClassificationRequestInputsInput = InstructRequestInput | InstructRequestInput[]
type ChatClassificationRequestInput = { model: string; input: ChatClassificationRequestInputsInput }
type TimestampGranularityInput = 'segment' | 'word'
type AudioTranscriptionRequestInput = {
  model: string
  file?: (FileInput | null) | null
  file_url?: (string | null) | null
  file_id?: (string | null) | null
  language?: (string | null) | null
  temperature?: (number | null) | null
  stream?: false
  diarize?: boolean
  context_bias?: string[]
  speaker_references?: { [key: string]: string }
  timestamp_granularities?: TimestampGranularityInput[]
}
type TranscriptionSegmentChunk = {
  type?: 'transcription_segment' | undefined
  text: string
  start: number | null
  end: number | null
  score?: (number | null) | undefined
  speaker_id?: (string | null) | undefined
}
type TranscriptionResponse = {
  model: string
  text: string
  language: string | null
  segments?: TranscriptionSegmentChunk[] | undefined
  usage: UsageInfo
}
type AudioTranscriptionRequestStreamInput = {
  model: string
  file?: (FileInput | null) | null
  file_url?: (string | null) | null
  file_id?: (string | null) | null
  language?: (string | null) | null
  temperature?: (number | null) | null
  stream?: true
  diarize?: boolean
  context_bias?: string[]
  speaker_references?: { [key: string]: string }
  timestamp_granularities?: TimestampGranularityInput[]
}
type PaginationInfo = {
  total_items: number
  total_pages: number
  current_page: number
  page_size: number
  has_more: boolean
}
type Library = {
  id: string
  name: string
  created_at: string
  updated_at: string
  owner_id: string | null
  owner_type: string
  total_size: number
  nb_documents: number
  chunk_size: number | null
  emoji?: (string | null) | undefined
  description?: (string | null) | undefined
  generated_description?: (string | null) | undefined
  explicit_user_members_count?: (number | null) | undefined
  explicit_workspace_members_count?: (number | null) | undefined
  org_sharing_role?: (string | null) | undefined
  generated_name?: (string | null) | undefined
}
type ListLibrariesResponse = {
  pagination?: (PaginationInfo | null) | undefined
  data: Library[]
  next_page_token?: (string | null) | undefined
}
type CreateLibraryRequestInput = {
  name: string
  description?: string | null
  chunk_size?: number | null
  owner_type?: 'User' | 'Workspace' | null
}
type UpdateLibraryRequestInput = { name?: string; description?: string | null }
type ProcessStatus =
  | 'self_managed'
  | 'missing_content'
  | 'noop'
  | 'done'
  | 'todo'
  | 'in_progress'
  | 'error'
  | 'waiting_for_capacity'
type Document = {
  id: string
  library_id: string
  hash: string | null
  mime_type: string | null
  extension: string | null
  size: number | null
  name: string
  summary?: (string | null) | undefined
  created_at: string
  last_processed_at?: (string | null) | undefined
  number_of_pages?: (number | null) | undefined
  process_status: ProcessStatus
  uploaded_by_id: string | null
  uploaded_by_type: string
  tokens_processing_main_content?: (number | null) | undefined
  tokens_processing_summary?: (number | null) | undefined
  url?: (string | null) | undefined
  attributes?: ({ [key: string]: unknown } | null) | undefined
  expires_at?: (string | null) | undefined
  processing_status: string
  tokens_processing_total: number
}
type ListDocumentsResponse = { pagination: PaginationInfo; data: Document[] }
type UpdateDocumentRequestInput = {
  name?: string
  attributes?: {
    [key: string]:
      | boolean
      | string
      | number
      | number
      | string
      | string[]
      | number[]
      | number[]
      | boolean[]
  } | null
  expires_at?: string | null
}
type DocumentTextContent = { text: string }
type ProcessingStatus = {
  document_id: string
  process_status: ProcessStatus
  processing_status: string
}
type Sharing = {
  library_id: string
  user_id?: (string | null) | undefined
  org_id: string
  role: string
  share_with_type: string
  share_with_uuid: string | null
}
type ListSharingResponse = { data: Sharing[] }
type ShareEnumInput = 'Viewer' | 'Editor'
type EntityTypeInput = 'User' | 'Workspace'
type SharingRequestInput = {
  org_id?: string | null
  level: ShareEnumInput
  share_with_uuid: string
  share_with_type: EntityTypeInput
}
type SharingDeleteInput = {
  org_id?: string | null
  share_with_uuid: string
  share_with_type: EntityTypeInput
}
type JsonValueInput = any
type CreateDatasetRequestInput = {
  name: string
  description: string
  metadata?: { [key: string]: JsonValueInput }
}
type PrincipalType = 'api_key' | 'service_account' | 'user'
type JsonValue = any
type Dataset = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  name: string
  slug: string
  description: string
  owner_id: string
  owner_type?: PrincipalType | undefined
  workspace_id: string
  metadata?: { [key: string]: JsonValue } | undefined
}
type ObservabilityErrorCode =
  | 'UNKNOWN_ERROR'
  | 'VALIDATION_ERROR'
  | 'AUTH_FORBIDDEN'
  | 'AUTH_FORBIDDEN_NOT_WORKSPACE_ADMIN'
  | 'AUTH_FORBIDDEN_WORKSPACE_NOT_FOUND'
  | 'AUTH_FORBIDDEN_ROLE_NOT_FOUND'
  | 'AUTH_UNAUTHORIZED'
  | 'FEATURE_NOT_SUPPORTED'
  | 'FIELDS_BAD_REQUEST'
  | 'SEARCH_BAD_REQUEST'
  | 'DATABASE_ERROR'
  | 'DATABASE_TIMEOUT'
  | 'DATABASE_UNAVAILABLE'
  | 'DATABASE_QUERY_ERROR'
  | 'SEARCH_FILTER_TO_SQL_CONVERSION_ERROR'
  | 'JUDGE_CONVERSATION_FORMAT_ERROR'
  | 'JUDGE_MISTRAL_API_ERROR'
  | 'JUDGE_MISTRAL_API_TIMEOUT'
  | 'JUDGE_NAME_ALREADY_EXISTS'
  | 'JUDGE_NOT_FOUND'
  | 'JUDGE_DID_NOT_CHANGE'
  | 'JUDGE_WRITES_FROZEN'
  | 'DATASET_NOT_FOUND'
  | 'DATASET_TASK_NOT_FOUND'
  | 'DATASET_RECORD_NOT_FOUND'
  | 'DATASET_RECORD_ID_CONFLICT'
  | 'DATASET_RECORD_FORMAT_ERROR'
  | 'AGENT_NOT_FOUND'
  | 'AGENT_MISTRAL_API_ERROR'
  | 'EVALUATION_NOT_FOUND'
  | 'EVALUATION_CURRENTLY_RUNNING'
  | 'EVALUATION_RECORD_NOT_FOUND'
  | 'EVALUATION_RUN_NOT_FOUND'
  | 'EVALUATION_RUN_TRANSITION_IS_INVALID'
  | 'EVALUATION_RUN_TRANSITION_IS_RUNNING_ALREADY'
  | 'EVALUATION_RUN_TRANSITION_ERROR'
  | 'EVALUATION_RUN_OUTPUT_RECORD_CONFLICT'
  | 'EVALUATION_RUN_INPUT_RECORD_CONFLICT'
  | 'TEMPLATE_ERROR'
  | 'TEMPLATE_SYNTAX_ERROR'
  | 'PROJECT_NOT_FOUND'
  | 'PROJECT_NAME_ALREADY_EXISTS'
  | 'PIPELINE_CONFIG_NOT_FOUND'
  | 'PIPELINE_CONFIG_ALREADY_EXISTS'
  | 'PIPELINE_NOT_FOUND'
  | 'PIPELINE_ALREADY_EXISTS'
  | 'SCORER_NOT_FOUND'
  | 'SCORER_ALREADY_EXISTS'
  | 'SCORER_CONFIG_KIND_MISMATCH'
  | 'EVALUATION_NAME_ALREADY_EXISTS'
  | 'OPTIMIZATION_NOT_FOUND'
  | 'OPTIMIZATION_TRIAL_KEY_ALREADY_EXISTS'
  | 'OPTIMIZATION_TRIAL_OBSERVATION_ALREADY_EXISTS'
  | 'TRACES_FILTER_QUERY_PARSE_ERROR'
  | 'TRACE_NOT_FOUND'
  | 'SPAN_NOT_FOUND'
  | 'OCSF_NOT_ENABLED'
type ObservabilityErrorDetail = { message: string; error_code: ObservabilityErrorCode | null }
type ObservabilityError = { detail: ObservabilityErrorDetail }
type DatasetPreview = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  name: string
  slug: string
  description: string
  owner_id: string
  owner_type?: PrincipalType | undefined
  workspace_id: string
  metadata?: { [key: string]: JsonValue } | undefined
}
type PaginatedResultDatasetPreview = {
  results?: DatasetPreview[] | undefined
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
}
type ListDatasetsResponse = { datasets: PaginatedResultDatasetPreview }
type UpdateDatasetRequestInput = {
  name?: string | null
  description?: string | null
  metadata?: { [key: string]: JsonValueInput } | null
}
type DatasetRecordPayload = { [key: string]: unknown }
type DatasetRecordSource =
  | 'EXPLORER'
  | 'UPLOADED_FILE'
  | 'DIRECT_INPUT'
  | 'PLAYGROUND'
  | 'TELEMETRY_SPAN'
type DatasetRecord = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  dataset_id: string
  payload: DatasetRecordPayload
  properties: { [key: string]: unknown }
  source: DatasetRecordSource
}
type PaginatedResultDatasetRecord = {
  results?: DatasetRecord[] | undefined
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
}
type ListDatasetRecordsResponse = { records: PaginatedResultDatasetRecord }
type DatasetRecordPayloadInput = { [key: string]: unknown }
type CreateDatasetRecordRequestInput = {
  payload: DatasetRecordPayloadInput
  properties?: { [key: string]: unknown }
  source?: 'DIRECT_INPUT' | 'TELEMETRY_SPAN'
}
type CreateDatasetRecordsItemInput = {
  payload: DatasetRecordPayloadInput
  properties?: { [key: string]: unknown }
  source?: 'DIRECT_INPUT' | 'TELEMETRY_SPAN'
  id?: string | null
}
type CreateDatasetRecordsRequestInput = { records: CreateDatasetRecordsItemInput[] }
type CreateDatasetRecordsResponse = { records: DatasetRecord[] }
type ImportDatasetFromFileRequestInput = { file_id: string }
type BaseTaskStatus =
  | 'RUNNING'
  | 'COMPLETED'
  | 'FAILED'
  | 'CANCELED'
  | 'TERMINATED'
  | 'CONTINUED_AS_NEW'
  | 'TIMED_OUT'
  | 'UNKNOWN'
type DatasetImportResult = {
  requested_record_count: number
  imported_record_count: number
  skipped_record_count: number
}
type DatasetImportTask = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  creator_id: string
  creator_type?: PrincipalType | undefined
  dataset_id: string
  workspace_id: string
  status: BaseTaskStatus
  progress?: (number | null) | undefined
  message?: (string | null) | undefined
  result?: (DatasetImportResult | null) | undefined
}
type TelemetrySpanReferenceInput = { trace_id: string; span_id: string }
type SpanDatasetSourceNamespaceInput = 'span_attributes' | 'resource_attributes'
type SpanDatasetSourceReferenceInput = { namespace: SpanDatasetSourceNamespaceInput; key: string }
type SpanDatasetMappingInput = {
  target_field: string
  source_field: SpanDatasetSourceReferenceInput
}
type SpanDatasetMappingContractInput = { version: 1; mappings: SpanDatasetMappingInput[] }
type ImportDatasetFromSpansRequestInput = {
  span_references: TelemetrySpanReferenceInput[]
  mapping_contract: SpanDatasetMappingContractInput
}
type ImportDatasetFromDatasetRequestInput = { dataset_record_ids: string[] }
type ExportDatasetResponse = { file_url: string }
type PaginatedResultDatasetImportTask = {
  results?: DatasetImportTask[] | undefined
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
}
type ListDatasetImportTasksResponse = { tasks: PaginatedResultDatasetImportTask }
type DeleteDatasetRecordsRequestInput = { dataset_record_ids: string[] }
type UpdateDatasetRecordPayloadRequestInput = { payload: DatasetRecordPayloadInput }
type UpdateDatasetRecordPropertiesRequestInput = { properties: { [key: string]: unknown } }
type SourceKindInput = 'span' | 'log' | 'metric'
type PipelineConfigSelectorInput = { source_kind: SourceKindInput; filter?: string | null }
type ProbabilisticSamplingInput = { type?: 'probabilistic'; percentage: number }
type AttributeHashSamplingInput = { type?: 'attribute_hash'; attribute: string; percentage: number }
type PipelineConfigSamplingInput = ProbabilisticSamplingInput | AttributeHashSamplingInput
type LlmJudgeReferenceInput = {
  slug: string
  mapping?: { [key: string]: string }
  sampling?: PipelineConfigSamplingInput | null
}
type CreatePipelineRequestInput = {
  name: string
  description?: string | null
  selectors: PipelineConfigSelectorInput[]
  definitions: LlmJudgeReferenceInput[]
  enabled?: boolean
}
type SourceKind = 'span' | 'log' | 'metric'
type PipelineConfigSelector = { source_kind: SourceKind; filter?: (string | null) | undefined }
type PipelineConfigScope = 'workspace' | 'shared'
type PipelineKind = 'detection-v1' | 'moderation-v1' | 'judge-v1' | 'export-v1'
type ProbabilisticSampling = { type?: 'probabilistic' | undefined; percentage: number }
type AttributeHashSampling = {
  type?: 'attribute_hash' | undefined
  attribute: string
  percentage: number
}
type PipelineConfigSampling = ProbabilisticSampling | AttributeHashSampling
type DetectionPattern = { name: string; regex: string; category: string; confidence: string }
type DetectionDefinitionV1 = { target_attributes: string[]; patterns: DetectionPattern[] }
type ModerationDefinitionV1 = {
  model?: string | undefined
  target_attributes?: string[] | undefined
}
type EvaluationBooleanResultSpec = { type?: 'boolean' | undefined }
type EvaluationCategoricalResultSpec = { type?: 'categorical' | undefined; labels: string[] }
type EvaluationNumericResultSpec = { type?: 'numeric' | undefined; min: number; max: number }
type EvaluationResultSpec =
  | EvaluationBooleanResultSpec
  | EvaluationCategoricalResultSpec
  | EvaluationNumericResultSpec
type JudgeDefinitionV1 = {
  model: string
  prompt: string
  temperature?: (number | null) | undefined
  top_p?: (number | null) | undefined
  max_tokens?: (number | null) | undefined
  random_seed?: (number | null) | undefined
  result_spec: EvaluationResultSpec
  mapping?: { [key: string]: string } | undefined
  use_cache?: boolean | undefined
}
type PipelineConfigHeader = { value?: (string | null) | undefined }
type OTLPDestination = {
  protocol: string
  endpoint: string
  insecure?: boolean | undefined
  headers?: { [key: string]: PipelineConfigHeader } | undefined
}
type ExportDefinitionV1 = { destination: OTLPDestination }
type PipelineConfigDefinition =
  | DetectionDefinitionV1
  | ModerationDefinitionV1
  | JudgeDefinitionV1
  | ExportDefinitionV1
type PipelineConfig = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  scope: PipelineConfigScope
  workspace_id: string
  name: string
  slug: string
  pipeline_kind: PipelineKind
  selectors: PipelineConfigSelector[]
  sampling?: (PipelineConfigSampling | null) | undefined
  enabled: boolean
  definition: PipelineConfigDefinition
  scorer_slug?: (string | null) | undefined
  scorer_version?: (number | null) | undefined
}
type Pipeline = {
  id: string
  created_at: string
  updated_at: string
  workspace_id: string
  name: string
  slug: string
  description: string | null
  selectors: PipelineConfigSelector[]
  enabled: boolean
  creator_id: string | null
  pipeline_configs: PipelineConfig[]
}
type PaginatedResultPipeline = {
  results?: Pipeline[] | undefined
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
}
type PipelinesResponse = { pipelines: PaginatedResultPipeline }
type UpdatePipelineRequestInput = {
  name?: string
  description?: string | null
  selectors?: PipelineConfigSelectorInput[]
  definitions?: LlmJudgeReferenceInput[]
  enabled?: boolean
}
type LogsRequestInput = { search_expression?: string | null; order?: 'asc' | 'desc' }
type GetLog = {
  customer_id: string
  organization_id: string
  workspace_id: string
  user_id: string
  service_account_id?: string | undefined
  timestamp: string
  trace_id: string
  span_id: string
  trace_flags: number
  severity_text: string
  severity_number: number
  service_name: string
  body: string
  event_name: string
  resource_schema_url: string
  resource_attributes: { [key: string]: string }
  scope_schema_url: string
  scope_name: string
  scope_version: string
  scope_attributes: { [key: string]: string }
  log_attributes: { [key: string]: string }
}
type FeedResultGetLog = {
  results?: GetLog[] | undefined
  next?: (string | null) | undefined
  cursor?: (string | null) | undefined
}
type GetLogs = { logs: FeedResultGetLog }
type TracesRequestInput = { search_expression?: string | null }
type GetTrace = {
  customer_id: string
  organization_id: string
  workspace_id: string
  user_id: string
  service_account_id?: string | undefined
  trace_id: string
  root_span_id: string
  root_span_name: string
  start_time: string
  end_time: string
  duration_ns: number
  service_name: string
  environment: string
  conversation_id: string
  workflow_name: string
  agent_id: string
  agent_name: string
  status_code: 'Error' | 'Unset'
  error_count: number
  span_count: number
  gen_ai_span_count: number
  llm_call_count: number
  tool_call_count: number
  retrieval_count: number
  evaluation_count: number
  input_tokens: number
  output_tokens: number
  cache_read_input_tokens: number
  cache_creation_input_tokens: number
  models_used: string[]
  tools_used: string[]
  first_turn_last_input_message: string
  first_turn_last_output_message: string
  last_turn_last_input_message: string
  last_turn_last_output_message: string
}
type FeedResultGetTrace = {
  results?: GetTrace[] | undefined
  next?: (string | null) | undefined
  cursor?: (string | null) | undefined
}
type GetTraces = { traces: FeedResultGetTrace }
type MetricAggregationInput =
  | 'count'
  | 'count_distinct'
  | 'sum'
  | 'avg'
  | 'min'
  | 'max'
  | 'p50'
  | 'p90'
  | 'p95'
  | 'p99'
type MetricDefinitionInput = { measure: string; aggregation: MetricAggregationInput }
type GranularityInput = 'auto' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month'
type TimeDimensionInput = { granularity?: GranularityInput }
type OrderByClauseInput = { field: string; direction?: 'asc' | 'desc' }
type AggregationRequestInput = {
  metric: MetricDefinitionInput
  dimensions?: string[]
  time_dimension?: TimeDimensionInput | null
  search_expression?: string | null
  order_by?: OrderByClauseInput[] | null
  limit?: number
}
type AggregationRow = {
  time_bucket?: (string | null) | undefined
  dimensions?: { [key: string]: unknown } | undefined
  metric_name: string
  metric_value?: (number | number | string | null) | undefined
}
type AggregationMeta = {
  from_timestamp: string
  to_timestamp: string
  granularity_seconds?: (number | null) | undefined
}
type Aggregation = { data: AggregationRow[]; meta: AggregationMeta }
type SpansRequestInput = { search_expression?: string | null }
type GetSpan = {
  customer_id: string
  organization_id: string
  workspace_id: string
  user_id: string
  service_account_id?: string | undefined
  trace_id: string
  span_id: string
  parent_span_id: string
  trace_state: string
  start_time: string
  end_time: string
  duration_ns: number
  span_name: string
  span_kind: string
  service_name: string
  status_code: 'Error' | 'Ok' | 'Unset'
  status_message: string
  error_type: string
  operation_name: string
  provider_name: string
  request_model: string
  response_model: string
  response_id: string
  output_type: string
  conversation_id: string
  data_source_id: string
  agent_id: string
  agent_name: string
  agent_version: string
  agent_description: string
  workflow_name: string
  prompt_name: string
  tool_name: string
  tool_type: string
  tool_call_id: string
  input_messages: string
  output_messages: string
  system_instructions: string
  tool_definitions: string
  tool_call_arguments: string
  tool_call_result: string
  request_choice_count: number
  request_max_tokens: number
  request_temperature: number | null
  request_top_p: number | null
  request_top_k: number | null
  request_presence_penalty: number | null
  request_frequency_penalty: number | null
  request_seed: number
  request_stop_sequences: string[]
  request_encoding_formats: string[]
  response_finish_reasons: string[]
  usage_input_tokens: number
  usage_output_tokens: number
  usage_cache_read_input_tokens: number
  usage_cache_creation_input_tokens: number
  resource_attributes: { [key: string]: string }
  span_attributes: { [key: string]: string }
  scope_name: string
  scope_version: string
}
type FeedResultGetSpan = {
  results?: GetSpan[] | undefined
  next?: (string | null) | undefined
  cursor?: (string | null) | undefined
}
type GetSpans = { spans: FeedResultGetSpan }
type SpanEvaluationsRequestInput = { search_expression?: string | null }
type GetSpanEvaluation = {
  customer_id: string
  organization_id: string
  workspace_id: string
  user_id: string
  service_account_id?: string | undefined
  trace_id: string
  span_id: string
  response_id: string
  conversation_id: string
  timestamp: string
  evaluation_name: string
  score_value: number
  score_label: string
  explanation: string
  metadata: { [key: string]: string }
}
type FeedResultGetSpanEvaluation = {
  results?: GetSpanEvaluation[] | undefined
  next?: (string | null) | undefined
  cursor?: (string | null) | undefined
}
type GetSpanEvaluations = { span_evaluations: FeedResultGetSpanEvaluation }
type PipelineResultsRequestInput = {
  pipeline_config_slugs: string[]
  search_expression?: string | null
}
type PipelineResult = {
  trace_id: string
  span_id: string
  span_name: string
  operation_name: string
  tool_name: string
  duration_ns: number
  evaluated_at: string
  judge_scores: { [key: string]: number }
  judge_labels: { [key: string]: string }
  judge_explanations: { [key: string]: string }
}
type FeedResultGetPipelineResult = {
  results?: PipelineResult[] | undefined
  next?: (string | null) | undefined
  cursor?: (string | null) | undefined
}
type GetPipelineResults = { pipeline_results: FeedResultGetPipelineResult }
type EnumConstraints = { options?: (string[] | null) | undefined }
type MetricAggregation =
  | 'count'
  | 'count_distinct'
  | 'sum'
  | 'avg'
  | 'min'
  | 'max'
  | 'p50'
  | 'p90'
  | 'p95'
  | 'p99'
type OtelEnumFieldDefinition = {
  name: string
  label: string
  type?: 'ENUM' | undefined
  group?: (string | null) | undefined
  source_attribute_key?: (string | null) | undefined
  constraints?: (EnumConstraints | null) | undefined
  supported_operators: (
    | 'eq'
    | 'neq'
    | 'lt'
    | 'lte'
    | 'gt'
    | 'gte'
    | 'like'
    | 'ilike'
    | 'not_like'
    | 'not_ilike'
    | 'between'
    | 'not_between'
    | 'in'
    | 'not_in'
    | 'exists'
    | 'not_exists'
    | 'regexp'
    | 'not_regexp'
    | 'contains'
    | 'not_contains'
    | 'has'
    | 'hasAny'
    | 'hasAll'
    | 'hasToken'
  )[]
  supported_aggregations: MetricAggregation[]
}
type FloatConstraints = { min?: (number | null) | undefined; max?: (number | null) | undefined }
type OtelFloatFieldDefinition = {
  name: string
  label: string
  type?: 'FLOAT' | undefined
  group?: (string | null) | undefined
  source_attribute_key?: (string | null) | undefined
  constraints?: (FloatConstraints | null) | undefined
  supported_operators: (
    | 'eq'
    | 'neq'
    | 'lt'
    | 'lte'
    | 'gt'
    | 'gte'
    | 'like'
    | 'ilike'
    | 'not_like'
    | 'not_ilike'
    | 'between'
    | 'not_between'
    | 'in'
    | 'not_in'
    | 'exists'
    | 'not_exists'
    | 'regexp'
    | 'not_regexp'
    | 'contains'
    | 'not_contains'
    | 'has'
    | 'hasAny'
    | 'hasAll'
    | 'hasToken'
  )[]
  supported_aggregations: MetricAggregation[]
}
type GetPipelineResultFields = {
  field_definitions: (OtelEnumFieldDefinition | OtelFloatFieldDefinition)[]
}
type OtelFieldDefinition = {
  name: string
  label: string
  type: 'ENUM' | 'TEXT' | 'INT' | 'FLOAT' | 'BOOL' | 'TIMESTAMP' | 'ARRAY' | 'MAP'
  group?: (string | null) | undefined
  source_attribute_key?: (string | null) | undefined
  supported_operators: (
    | 'eq'
    | 'neq'
    | 'lt'
    | 'lte'
    | 'gt'
    | 'gte'
    | 'like'
    | 'ilike'
    | 'not_like'
    | 'not_ilike'
    | 'between'
    | 'not_between'
    | 'in'
    | 'not_in'
    | 'exists'
    | 'not_exists'
    | 'regexp'
    | 'not_regexp'
    | 'contains'
    | 'not_contains'
    | 'has'
    | 'hasAny'
    | 'hasAll'
    | 'hasToken'
  )[]
  supported_aggregations: MetricAggregation[]
}
type GetTraceFields = { field_definitions: OtelFieldDefinition[] }
type GetLogFields = { field_definitions: OtelFieldDefinition[] }
type GetSpanFields = { field_definitions: OtelFieldDefinition[] }
type GetSpanEvaluationFields = { field_definitions: OtelFieldDefinition[] }
type GetTraceFieldOptions = { options: string[] | null }
type GetLogFieldOptions = { options: string[] | null }
type GetSpanFieldOptions = { options: string[] | null }
type GetSpanEvaluationFieldOptions = { options: string[] | null }
type ProjectEvaluationSummary = { id: string; name: string; slug: string }
type Project = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  workspace_id: string
  creator_id: string
  creator_type?: PrincipalType | undefined
  name: string
  slug: string
  description: string | null
  is_favorite?: boolean | undefined
  evaluations?: ProjectEvaluationSummary[] | undefined
}
type PaginatedResultProject = {
  results?: Project[] | undefined
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
}
type Projects = { projects: PaginatedResultProject }
type EvaluationV2 = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  workspace_id: string
  creator_id: string
  creator_type?: PrincipalType | undefined
  project_id: string
  name: string
  slug: string
  description: string | null
  tags: string[]
  metadata_: { [key: string]: JsonValue }
  is_favorite?: boolean | undefined
}
type PaginatedResultEvaluationV2 = {
  results?: EvaluationV2[] | undefined
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
}
type EvaluationsV2 = { evaluations: PaginatedResultEvaluationV2 }
type FilterCombinatorInput = 'and' | 'or'
type RunOwnershipFilterInput = {
  combinator?: FilterCombinatorInput
  creator_ids?: string[]
  project_ids?: string[]
  starred_by_me?: boolean
}
type TagFilterInput = { combinator?: FilterCombinatorInput; values?: string[] }
type ScoreOperatorInput = 'gt' | 'gte' | 'lt' | 'lte' | 'eq'
type ScoreFilterInput = {
  evaluator_name: string
  metric: string
  operator: ScoreOperatorInput
  value: number | string
}
type ScoreFilterGroupInput = { combinator?: FilterCombinatorInput; filters?: ScoreFilterInput[] }
type GoalStatusInput = 'passed' | 'failed' | 'not_evaluated'
type GoalStatusFilterInput = { evaluator_name?: string | null; values: GoalStatusInput[] }
type GoalStatusFilterGroupInput = {
  combinator?: FilterCombinatorInput
  filters?: GoalStatusFilterInput[]
}
type ContentSearchOperatorInput = 'contains' | 'equals'
type SystemNameFilterInput = { value: string; operator?: ContentSearchOperatorInput }
type SystemNameFilterGroupInput = {
  combinator?: FilterCombinatorInput
  filters?: SystemNameFilterInput[]
}
type SystemParamOperatorInput = 'eq' | 'contains' | 'gt' | 'gte' | 'lt' | 'lte'
type SystemParamFilterInput = {
  key: string
  operator: SystemParamOperatorInput
  value: number | string | boolean
}
type SystemParamFilterGroupInput = {
  combinator?: FilterCombinatorInput
  filters?: SystemParamFilterInput[]
}
type SystemFilterInput = {
  name?: SystemNameFilterGroupInput | null
  params?: SystemParamFilterGroupInput | null
}
type MetadataFilterInput = {
  key: string
  operator: SystemParamOperatorInput
  value: number | string | boolean
}
type MetadataFilterGroupInput = {
  combinator?: FilterCombinatorInput
  filters?: MetadataFilterInput[]
}
type EvaluationRunFilterInputInput = {
  run_ids?: string[] | null
  evaluation_ids?: string[] | null
  creator_ids?: string[] | null
  project_ids?: string[] | null
  ownership?: RunOwnershipFilterInput | null
  tags?: TagFilterInput | null
  score_filters?: ScoreFilterGroupInput | null
  goal_filters?: GoalStatusFilterGroupInput | null
  system?: SystemFilterInput | null
  metadata?: MetadataFilterGroupInput | null
}
type GoalSpec = {
  operator?: (string | null) | undefined
  value?: (JsonValue | null) | undefined
  min?: (number | null) | undefined
  max?: (number | null) | undefined
  values?: (JsonValue[] | null) | undefined
  metric?: (string | null) | undefined
}
type SimpleNumericStatisticSpec = {
  kind: 'avg' | 'sum' | 'min' | 'max' | 'std' | 'count'
  weight_key?: (string | null) | undefined
  goal?: (GoalSpec | null) | undefined
}
type PercentileStatisticSpec = {
  kind?: 'percentile' | undefined
  percentile: number | number
  goal?: (GoalSpec | null) | undefined
}
type ClassificationStatisticSpec = {
  kind: 'precision' | 'recall' | 'f1'
  positive_label?: (string | null) | undefined
  average?: ('macro' | 'micro' | 'weighted' | null) | undefined
  expected_key?: string | undefined
  labels?: (string[] | null) | undefined
  goal?: (GoalSpec | null) | undefined
}
type DisplayFormat = 'number' | 'percent' | 'integer'
type DisplaySpec = {
  format?: (DisplayFormat | null) | undefined
  unit?: (string | null) | undefined
  decimals?: (number | null) | undefined
  metric?: (string | null) | undefined
}
type MetricDirectionSpec = { metric: string; direction: 'maximize' | 'minimize' }
type EvaluatorV2 = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  name: string
  description: string | null
  tags: string[]
  num_scores: number
  goal?: (GoalSpec | null) | undefined
  aggregate_goal?: (GoalSpec | null) | undefined
  statistics?:
    | (
        | (SimpleNumericStatisticSpec | PercentileStatisticSpec | ClassificationStatisticSpec)[]
        | null
      )
    | undefined
  weight?: number | undefined
  direction?: ('maximize' | 'minimize' | null) | undefined
  min_value?: (number | null) | undefined
  max_value?: (number | null) | undefined
  display?: (DisplaySpec[] | null) | undefined
  goals?: (GoalSpec[] | null) | undefined
  metric_directions?: (MetricDirectionSpec[] | null) | undefined
}
type SystemV2 = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  name: string
  params: { [key: string]: string | number | number | boolean }
  kind?: string | undefined
  spec?: ({ [key: string]: JsonValue } | null) | undefined
}
type ScalarStatisticValue = {
  type?: 'scalar' | undefined
  id: string
  value?: (number | null) | undefined
  sample_count?: (number | null) | undefined
}
type NumericStatistics = {
  type?: 'numeric' | undefined
  values?: (ScalarStatisticValue[] | null) | undefined
  sample_count?: number | undefined
  avg?: (number | null) | undefined
  min?: (number | null) | undefined
  max?: (number | null) | undefined
  std?: (number | null) | undefined
  count?: number | undefined
}
type ConfusionMatrix = { labels: string[]; matrix: number[][] }
type CategoricalStatistics = {
  type?: 'categorical' | undefined
  frequencies: { [key: string]: number }
  mode: string[]
  count: number
  values?: (ScalarStatisticValue[] | null) | undefined
  excluded_count?: number | undefined
  confusion_matrix?: (ConfusionMatrix | null) | undefined
}
type UnsupportedStatistics = { type?: 'unsupported' | undefined; count: number }
type EvaluatorStatistics = NumericStatistics | CategoricalStatistics | UnsupportedStatistics
type GoalResultItem = {
  metric: string
  operator: string
  target?: (number | null) | undefined
  target_min?: (number | null) | undefined
  target_max?: (number | null) | undefined
  actual: number
  passed: boolean
  direction?: ('higher_is_better' | 'lower_is_better' | null) | undefined
}
type MissingGoalItem = {
  metric: string
  operator: string
  target?: (number | null) | undefined
  target_min?: (number | null) | undefined
  target_max?: (number | null) | undefined
  message: string
}
type GoalResult = {
  passed: boolean | null
  results: GoalResultItem[]
  missing?: MissingGoalItem[] | undefined
}
type ScoreMetric = { name: string; value: number | number }
type EvaluationRunRunScoreV2 = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  value: JsonValue | null
  rationale?: (string | null) | undefined
  metadata_: { [key: string]: JsonValue }
  status: string
  error?: (string | null) | undefined
  metrics?: ScoreMetric[] | undefined
}
type RunOptimizationRef = { optimization_id: string; name: string }
type EvaluationRunV2Response = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  creator_id: string
  creator_type?: PrincipalType | undefined
  evaluation_id: string
  name: string
  description: string | null
  tags: string[]
  metadata_: { [key: string]: JsonValue }
  num_generations: number
  run_info?: ({ [key: string]: JsonValue } | null) | undefined
  status?: string | undefined
  record_count?: (number | null) | undefined
  failed_record_count?: (number | null) | undefined
  dataset_id?: (string | null) | undefined
  evaluators: EvaluatorV2[]
  run_evaluators?: EvaluatorV2[] | undefined
  system?: (SystemV2 | null) | undefined
  statistics?: { [key: string]: EvaluatorStatistics } | undefined
  goal_results?: { [key: string]: GoalResult } | undefined
  passed?: (boolean | null) | undefined
  run_scores?: { [key: string]: EvaluationRunRunScoreV2 } | undefined
  optimization?: (RunOptimizationRef | null) | undefined
}
type PaginatedResultEvaluationRunV2Response = {
  results?: EvaluationRunV2Response[] | undefined
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
}
type ListEvaluationRunsResponse = { runs: PaginatedResultEvaluationRunV2Response }
type RunEvaluationSummary = { id: string; name: string; slug: string }
type RunProjectSummary = { id: string; name: string; slug: string }
type EvaluationRunV2WithRefsResponse = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  creator_id: string
  creator_type?: PrincipalType | undefined
  evaluation_id: string
  name: string
  description: string | null
  tags: string[]
  metadata_: { [key: string]: JsonValue }
  num_generations: number
  run_info?: ({ [key: string]: JsonValue } | null) | undefined
  status?: string | undefined
  record_count?: (number | null) | undefined
  failed_record_count?: (number | null) | undefined
  dataset_id?: (string | null) | undefined
  evaluators: EvaluatorV2[]
  run_evaluators?: EvaluatorV2[] | undefined
  system?: (SystemV2 | null) | undefined
  statistics?: { [key: string]: EvaluatorStatistics } | undefined
  goal_results?: { [key: string]: GoalResult } | undefined
  passed?: (boolean | null) | undefined
  run_scores?: { [key: string]: EvaluationRunRunScoreV2 } | undefined
  optimization?: (RunOptimizationRef | null) | undefined
  evaluation?: (RunEvaluationSummary | null) | undefined
  project?: (RunProjectSummary | null) | undefined
}
type PaginatedResultEvaluationRunV2WithRefsResponse = {
  results?: EvaluationRunV2WithRefsResponse[] | undefined
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
}
type SearchAllEvaluationRunsResponse = { runs: PaginatedResultEvaluationRunV2WithRefsResponse }
type RunStatisticsResponse = {
  run_id: string
  statistics: { [key: string]: EvaluatorStatistics }
  goal_results?: { [key: string]: GoalResult } | undefined
  passed?: (boolean | null) | undefined
}
type ContentSearchFilterInput = {
  path?: string | null
  value: string
  operator?: ContentSearchOperatorInput
}
type ContentSearchFilterGroupInput = {
  combinator?: FilterCombinatorInput
  filters?: ContentSearchFilterInput[]
}
type RecordSortFieldInput = 'created_at'
type SortDirectionInput = 'asc' | 'desc'
type FieldSortInputInput = {
  kind?: 'field'
  field: RecordSortFieldInput
  direction?: SortDirectionInput
}
type NumericScoreMetricInput = 'avg' | 'min' | 'max' | 'std'
type ScoreSortInputInput = {
  kind?: 'score'
  evaluator_name: string
  metric?: NumericScoreMetricInput
  direction?: SortDirectionInput
}
type EvaluationRunRecordFilterInputInput = {
  input_filters?: ContentSearchFilterGroupInput | null
  output_filters?: ContentSearchFilterGroupInput | null
  score_filters?: ScoreFilterGroupInput | null
  goal_filters?: GoalStatusFilterGroupInput | null
  sort?: (FieldSortInputInput | ScoreSortInputInput) | null
}
type EvaluationRunScoreV2 = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  value: JsonValue | null
  rationale?: (string | null) | undefined
  metadata_: { [key: string]: JsonValue }
  status: string
  error?: (string | null) | undefined
}
type EvaluationRunGenerationV2 = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  output: JsonValue | null
  metadata_: { [key: string]: JsonValue }
  status: string
  error?: (string | null) | undefined
  scores?: { [key: string]: EvaluationRunScoreV2[] } | undefined
  statistics?: { [key: string]: EvaluatorStatistics } | undefined
  goal_results?: { [key: string]: GoalResult } | undefined
}
type EvaluationRunOutputRecordV2 = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  metadata_: { [key: string]: JsonValue }
  record_info?: ({ [key: string]: JsonValue } | null) | undefined
  generations?: EvaluationRunGenerationV2[] | undefined
  statistics?: { [key: string]: EvaluatorStatistics } | undefined
  goal_results?: { [key: string]: GoalResult } | undefined
}
type EvaluationRunRecordV2Response = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  input: JsonValue
  dataset_record_id?: (string | null) | undefined
  output_record?: (EvaluationRunOutputRecordV2 | null) | undefined
}
type PaginatedResultEvaluationRunRecordV2Response = {
  results?: EvaluationRunRecordV2Response[] | undefined
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
}
type ListEvaluationRunRecordsResponse = { records: PaginatedResultEvaluationRunRecordV2Response }
type Optimization = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  creator_id: string
  creator_type?: PrincipalType | undefined
  project_id: string
  evaluation_id?: (string | null) | undefined
  name: string
  description?: (string | null) | undefined
  steer?: (string | null) | undefined
  tags?: string[] | undefined
  algorithm: string
  status: string
  source: string
  workflow_execution_id?: (string | null) | undefined
  workflow_run_id?: (string | null) | undefined
  objective_spec?: ({ [key: string]: JsonValue } | null) | undefined
  outcome?: ({ [key: string]: JsonValue } | null) | undefined
}
type PaginatedResultOptimization = {
  results?: Optimization[] | undefined
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
}
type ListOptimizationsResponse = { optimizations: PaginatedResultOptimization }
type OptimizationReference = { id: string; slug: string; name: string }
type OptimizationDetail = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  creator_id: string
  creator_type?: PrincipalType | undefined
  project_id: string
  evaluation_id?: (string | null) | undefined
  name: string
  description?: (string | null) | undefined
  steer?: (string | null) | undefined
  tags?: string[] | undefined
  algorithm: string
  status: string
  source: string
  workflow_execution_id?: (string | null) | undefined
  workflow_run_id?: (string | null) | undefined
  objective_spec?: ({ [key: string]: JsonValue } | null) | undefined
  outcome?: ({ [key: string]: JsonValue } | null) | undefined
  evaluation?: (OptimizationReference | null) | undefined
  project?: (OptimizationReference | null) | undefined
}
type OptimizationTrialObservation = {
  observation_type?: (string | null) | undefined
  score?: (number | null) | undefined
  metadata?: { [key: string]: JsonValue } | undefined
  run: EvaluationRunV2Response
}
type OptimizationTrialWithObservations = {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  optimization_id: string
  algorithm_trial_key: string
  status: string
  parent_trial_id?: (string | null) | undefined
  hypothesis?: (string | null) | undefined
  resolution?: (string | null) | undefined
  metadata_: { [key: string]: JsonValue }
  observations?: OptimizationTrialObservation[] | undefined
}
type PaginatedResultOptimizationTrialWithObservations = {
  results?: OptimizationTrialWithObservations[] | undefined
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
}
type ListOptimizationTrialsResponse = { trials: PaginatedResultOptimizationTrialWithObservations }
type ScorerKind = 'llm_judge'
type ScorerSummary = {
  slug: string
  name: string
  description: string | null
  kind: ScorerKind
  is_ootb: boolean
  creator_id: string
  creator_type?: PrincipalType | undefined
  created_at: string
  updated_at: string
}
type PaginatedResultScorerSummary = {
  results?: ScorerSummary[] | undefined
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
}
type ListScorersResponse = { scorers: PaginatedResultScorerSummary }
type ScorerKindInput = 'llm_judge'
type LlmJudgeParamsInput = {
  temperature?: number | null
  top_p?: number | null
  max_tokens?: number | null
  random_seed?: number | null
}
type EvaluationBooleanResultSpecInput = { type?: 'boolean' }
type EvaluationCategoricalResultSpecInput = { type?: 'categorical'; labels: string[] }
type EvaluationNumericResultSpecInput = { type?: 'numeric'; min: number; max: number }
type EvaluationResultSpecInput =
  | EvaluationBooleanResultSpecInput
  | EvaluationCategoricalResultSpecInput
  | EvaluationNumericResultSpecInput
type LlmJudgeConfigInput = {
  model: string
  params?: LlmJudgeParamsInput | null
  prompt_template: string
  output_spec: EvaluationResultSpecInput
}
type CreateScorerRequestInput = {
  name: string
  description?: string | null
  kind: ScorerKindInput
  config: LlmJudgeConfigInput
}
type LlmJudgeParams = {
  temperature?: (number | null) | undefined
  top_p?: (number | null) | undefined
  max_tokens?: (number | null) | undefined
  random_seed?: (number | null) | undefined
}
type LlmJudgeConfig = {
  model: string
  params?: (LlmJudgeParams | null) | undefined
  prompt_template: string
  output_spec: EvaluationResultSpec
}
type ScorerVersion = {
  version: number
  config: LlmJudgeConfig
  variables: string[]
  creator_id: string
  creator_type?: PrincipalType | undefined
  created_at: string
}
type Scorer = {
  slug: string
  name: string
  description: string | null
  kind: ScorerKind
  latest_version: ScorerVersion
  created_at: string
  updated_at: string
}
type EditScorerRequestInput = {
  name?: string | null
  description?: string | null
  config?: LlmJudgeConfigInput | null
}
type GlobalHeaderValueInput = { is_secret?: boolean; value: string }
type OAuthMetadataSourceInput = 'autodiscovery' | 'provided'
type ExtendedOAuthServerMetadataInput = {
  issuer: string
  authorization_endpoint?: string | null
  token_endpoint: string
  registration_endpoint?: string | null
  scopes_supported?: string[] | null
  response_types_supported?: string[]
  response_modes_supported?: string[] | null
  grant_types_supported?: string[] | null
  token_endpoint_auth_methods_supported?: string[] | null
  token_endpoint_auth_signing_alg_values_supported?: string[] | null
  service_documentation?: string | null
  ui_locales_supported?: string[] | null
  op_policy_uri?: string | null
  op_tos_uri?: string | null
  revocation_endpoint?: string | null
  revocation_endpoint_auth_methods_supported?: string[] | null
  revocation_endpoint_auth_signing_alg_values_supported?: string[] | null
  introspection_endpoint?: string | null
  introspection_endpoint_auth_methods_supported?: string[] | null
  introspection_endpoint_auth_signing_alg_values_supported?: string[] | null
  code_challenge_methods_supported?: string[] | null
  client_id_metadata_document_supported?: boolean | null
  authorization_response_iss_parameter_supported?: boolean | null
  authorization_grant_profiles_supported?: string[] | null
  x_source?: OAuthMetadataSourceInput | null
  x_resource_url?: string | null
  x_scope?: string | null
}
type PublicResourceVisibilityInput = 'shared_org' | 'shared_workspace' | 'private'
type ConnectorAuthenticationHeaderInput = {
  name: string
  is_required?: boolean
  is_secret?: boolean
}
type AuthDataInput = {
  client_id: string
  client_secret?: string | null
  client_scopes?: string[] | null
}
type OAuth2AuthorizationCodeAuthMethodInput = {
  method_type?: 'oauth2'
  headers?: ConnectorAuthenticationHeaderInput[] | null
  grant_type?: 'authorization_code'
  auth_data: AuthDataInput
  oauth2_server_metadata?: ExtendedOAuthServerMetadataInput | null
}
type OAuth2TokenEndpointAuthMethodInput =
  | 'client_secret_post'
  | 'client_secret_basic'
  | 'private_key_jwt'
type OAuth2ClientCredentialsAuthMethodInput = {
  method_type?: 'oauth2'
  headers?: ConnectorAuthenticationHeaderInput[] | null
  grant_type: 'client_credentials'
  token_endpoint_auth_method: OAuth2TokenEndpointAuthMethodInput
  oauth2_server_metadata: ExtendedOAuthServerMetadataInput
}
type OAuth2AuthMethodInput =
  | OAuth2AuthorizationCodeAuthMethodInput
  | OAuth2ClientCredentialsAuthMethodInput
type BearerAuthMethodInput = {
  method_type?: 'bearer'
  headers?: ConnectorAuthenticationHeaderInput[] | null
}
type NoneAuthMethodInput = {
  method_type?: 'none'
  headers?: ConnectorAuthenticationHeaderInput[] | null
}
type CreateConnectorRequestInput = {
  headers?: { [key: string]: unknown } | null
  global_headers?: { [key: string]: GlobalHeaderValueInput }
  oauth2_server_metadata?: ExtendedOAuthServerMetadataInput | null
  oauth2_server_metadata_url?: string | null
  name: string
  title?: string | null
  description: string
  icon_url?: string | null
  server: string
  visibility?: PublicResourceVisibilityInput
  auth_methods?: (OAuth2AuthMethodInput | BearerAuthMethodInput | NoneAuthMethodInput)[] | null
  system_prompt?: string | null
  protocol?: 'mcp'
}
type CreateHTTPConnectorRequestInput = {
  headers?: { [key: string]: unknown } | null
  global_headers?: { [key: string]: GlobalHeaderValueInput }
  oauth2_server_metadata?: ExtendedOAuthServerMetadataInput | null
  oauth2_server_metadata_url?: string | null
  name: string
  title?: string | null
  description: string
  icon_url?: string | null
  server: string
  visibility?: PublicResourceVisibilityInput
  auth_methods?: (OAuth2AuthMethodInput | BearerAuthMethodInput | NoneAuthMethodInput)[] | null
  system_prompt?: string | null
  protocol: 'http'
}
type LoggingCapability = { [key: string]: unknown }
type PromptsCapability = { listChanged?: (boolean | null) | undefined }
type ResourcesCapability = {
  subscribe?: (boolean | null) | undefined
  listChanged?: (boolean | null) | undefined
}
type ToolsCapability = { listChanged?: (boolean | null) | undefined }
type CompletionsCapability = { [key: string]: unknown }
type TasksListCapability = { [key: string]: unknown }
type TasksCancelCapability = { [key: string]: unknown }
type TasksCallCapability = { [key: string]: unknown }
type TasksToolsCapability = { call?: (TasksCallCapability | null) | undefined }
type ServerTasksRequestsCapability = { tools?: (TasksToolsCapability | null) | undefined }
type ServerTasksCapability = {
  list?: (TasksListCapability | null) | undefined
  cancel?: (TasksCancelCapability | null) | undefined
  requests?: (ServerTasksRequestsCapability | null) | undefined
}
type ServerCapabilities = {
  experimental?: ({ [key: string]: { [key: string]: unknown } } | null) | undefined
  logging?: (LoggingCapability | null) | undefined
  prompts?: (PromptsCapability | null) | undefined
  resources?: (ResourcesCapability | null) | undefined
  tools?: (ToolsCapability | null) | undefined
  completions?: (CompletionsCapability | null) | undefined
  extensions?: ({ [key: string]: { [key: string]: unknown } } | null) | undefined
  tasks?: (ServerTasksCapability | null) | undefined
}
type MCPServerRepository = { url: string; source: string; subfolder?: (string | null) | undefined }
type MCPServerIcon = {
  src: string
  mimeType?: (string | null) | undefined
  sizes?: (string[] | null) | undefined
  theme?: ('light' | 'dark' | null) | undefined
}
type MCPServerRemoteHeader = {
  name: string
  description: string
  isRequired?: (boolean | null) | undefined
  isSecret?: (boolean | null) | undefined
  default?: (string | null) | undefined
  choices?: (string[] | null) | undefined
}
type MCPServerAuthenticationRequirement = { required: boolean; schemes?: string[] | undefined }
type MCPServerRemote = {
  type: 'streamable-http' | 'sse'
  url: string
  supportedProtocolVersions?: (string[] | null) | undefined
  headers?: (MCPServerRemoteHeader[] | null) | undefined
  authentication?: (MCPServerAuthenticationRequirement | null) | undefined
}
type SamplingContextCapability = { [key: string]: unknown }
type SamplingToolsCapability = { [key: string]: unknown }
type SamplingCapability = {
  context?: (SamplingContextCapability | null) | undefined
  tools?: (SamplingToolsCapability | null) | undefined
}
type FormElicitationCapability = { [key: string]: unknown }
type UrlElicitationCapability = { [key: string]: unknown }
type ElicitationCapability = {
  form?: (FormElicitationCapability | null) | undefined
  url?: (UrlElicitationCapability | null) | undefined
}
type RootsCapability = { listChanged?: (boolean | null) | undefined }
type TasksCreateMessageCapability = { [key: string]: unknown }
type TasksSamplingCapability = { createMessage?: (TasksCreateMessageCapability | null) | undefined }
type TasksCreateElicitationCapability = { [key: string]: unknown }
type TasksElicitationCapability = { create?: (TasksCreateElicitationCapability | null) | undefined }
type ClientTasksRequestsCapability = {
  sampling?: (TasksSamplingCapability | null) | undefined
  elicitation?: (TasksElicitationCapability | null) | undefined
}
type ClientTasksCapability = {
  list?: (TasksListCapability | null) | undefined
  cancel?: (TasksCancelCapability | null) | undefined
  requests?: (ClientTasksRequestsCapability | null) | undefined
}
type ClientCapabilities = {
  experimental?: ({ [key: string]: { [key: string]: unknown } } | null) | undefined
  sampling?: (SamplingCapability | null) | undefined
  elicitation?: (ElicitationCapability | null) | undefined
  roots?: (RootsCapability | null) | undefined
  extensions?: ({ [key: string]: { [key: string]: unknown } } | null) | undefined
  tasks?: (ClientTasksCapability | null) | undefined
}
type Annotations = {
  audience?: (('user' | 'assistant')[] | null) | undefined
  priority?: (number | null) | undefined
  lastModified?: (string | null) | undefined
}
type MCPResource = {
  name: string
  title?: (string | null) | undefined
  uri: string
  description?: (string | null) | undefined
  mimeType?: (string | null) | undefined
  size?: (number | null) | undefined
  icons?: (MCPServerIcon[] | null) | undefined
  annotations?: (Annotations | null) | undefined
  _meta?: ({ [key: string]: unknown } | null) | undefined
}
type ToolExecution = { taskSupport?: ('forbidden' | 'optional' | 'required' | null) | undefined }
type ToolAnnotations = {
  title?: (string | null) | undefined
  readOnlyHint?: (boolean | null) | undefined
  destructiveHint?: (boolean | null) | undefined
  idempotentHint?: (boolean | null) | undefined
  openWorldHint?: (boolean | null) | undefined
}
type MCPUIToolMeta = {
  resourceUri?: (string | null) | undefined
  visibility?: (('model' | 'app')[] | null) | undefined
}
type TurbineToolLocale = {
  name?: ({ [key: string]: string } | null) | undefined
  description?: ({ [key: string]: string } | null) | undefined
  usage_sentence?: ({ [key: string]: string } | null) | undefined
  working_description?: ({ [key: string]: string } | null) | undefined
  done_description?: ({ [key: string]: string } | null) | undefined
}
type ToolType = 'rag' | 'image' | 'code' | 'event'
type TurbineToolMeta = {
  locale?: (TurbineToolLocale | null) | undefined
  tool_type?: (ToolType | null) | undefined
  timeout?: (number | null) | undefined
  private_execution?: (boolean | null) | undefined
}
type MCPToolMeta = {
  ui?: (MCPUIToolMeta | null) | undefined
  'ai.mistral/turbine'?: (TurbineToolMeta | null) | undefined
}
type MCPServerCardTool = {
  name: string
  title?: (string | null) | undefined
  description?: (string | null) | undefined
  inputSchema: { [key: string]: unknown }
  execution?: (ToolExecution | null) | undefined
  outputSchema?: ({ [key: string]: unknown } | null) | undefined
  icons?: (MCPServerIcon[] | null) | undefined
  annotations?: (ToolAnnotations | null) | undefined
  _meta?: (MCPToolMeta | null) | undefined
}
type PromptArgument = {
  name: string
  title?: (string | null) | undefined
  description?: (string | null) | undefined
  required?: (boolean | null) | undefined
}
type MCPPrompt = {
  name: string
  title?: (string | null) | undefined
  description?: (string | null) | undefined
  arguments?: (PromptArgument[] | null) | undefined
  icons?: (MCPServerIcon[] | null) | undefined
  _meta?: ({ [key: string]: unknown } | null) | undefined
}
type ServerLocale = {
  name?: ({ [key: string]: string } | null) | undefined
  description?: ({ [key: string]: string } | null) | undefined
  usage_sentence?: ({ [key: string]: string } | null) | undefined
  working_description?: ({ [key: string]: string } | null) | undefined
  done_description?: ({ [key: string]: string } | null) | undefined
}
type TurbineMeta = {
  system_prompt_name?: (string | null) | undefined
  locale?: (ServerLocale | null) | undefined
}
type MCPServerCardMeta = { 'ai.mistral/turbine'?: (TurbineMeta | null) | undefined }
type MCPServerCard = {
  $schema?: (string | null) | undefined
  name: string
  version: string
  capabilities?: ServerCapabilities | undefined
  title?: (string | null) | undefined
  description?: (string | null) | undefined
  websiteUrl?: (string | null) | undefined
  repository?: (MCPServerRepository | null) | undefined
  icons?: (MCPServerIcon[] | null) | undefined
  remotes?: (MCPServerRemote[] | null) | undefined
  requires?: (ClientCapabilities | null) | undefined
  resources?: ('dynamic' | MCPResource[] | null) | undefined
  tools?: ('dynamic' | MCPServerCardTool[] | null) | undefined
  prompts?: ('dynamic' | MCPPrompt[] | null) | undefined
  _meta?: (MCPServerCardMeta | null) | undefined
}
type ConsumerType = 'user' | 'org' | 'workspace' | 'system'
type ResourceVisibility = 'shared_global' | 'shared_org' | 'shared_workspace' | 'private'
type ConnectorLocale = {
  name: { [key: string]: string }
  description: { [key: string]: string }
  usage_sentence: { [key: string]: string }
}
type AuthenticationType = 'oauth2' | 'bearer' | 'none' | 'github_app' | 'slack_app'
type ConnectorAuthenticationHeader = {
  name: string
  is_required?: boolean | undefined
  is_secret?: boolean | undefined
}
type GlobalHeaderValue = { is_secret?: boolean | undefined; value: string }
type OAuth2GrantType = 'authorization_code' | 'client_credentials'
type OAuth2TokenEndpointAuthMethod =
  | 'client_secret_post'
  | 'client_secret_basic'
  | 'private_key_jwt'
type OAuthMetadataSource = 'autodiscovery' | 'provided'
type ExtendedOAuthServerMetadata = {
  issuer: string
  authorization_endpoint?: (string | null) | undefined
  token_endpoint: string
  registration_endpoint?: (string | null) | undefined
  scopes_supported?: (string[] | null) | undefined
  response_types_supported?: string[] | undefined
  response_modes_supported?: (string[] | null) | undefined
  grant_types_supported?: (string[] | null) | undefined
  token_endpoint_auth_methods_supported?: (string[] | null) | undefined
  token_endpoint_auth_signing_alg_values_supported?: (string[] | null) | undefined
  service_documentation?: (string | null) | undefined
  ui_locales_supported?: (string[] | null) | undefined
  op_policy_uri?: (string | null) | undefined
  op_tos_uri?: (string | null) | undefined
  revocation_endpoint?: (string | null) | undefined
  revocation_endpoint_auth_methods_supported?: (string[] | null) | undefined
  revocation_endpoint_auth_signing_alg_values_supported?: (string[] | null) | undefined
  introspection_endpoint?: (string | null) | undefined
  introspection_endpoint_auth_methods_supported?: (string[] | null) | undefined
  introspection_endpoint_auth_signing_alg_values_supported?: (string[] | null) | undefined
  code_challenge_methods_supported?: (string[] | null) | undefined
  client_id_metadata_document_supported?: (boolean | null) | undefined
  authorization_response_iss_parameter_supported?: (boolean | null) | undefined
  authorization_grant_profiles_supported?: (string[] | null) | undefined
  x_source?: (OAuthMetadataSource | null) | undefined
  x_resource_url?: (string | null) | undefined
  x_scope?: (string | null) | undefined
}
type PublicAuthenticationMethod = {
  method_type: AuthenticationType
  headers?: (ConnectorAuthenticationHeader[] | null) | undefined
  global_headers?: { [key: string]: GlobalHeaderValue } | undefined
  has_default_credentials?: boolean | undefined
  grant_type?: (OAuth2GrantType | null) | undefined
  token_endpoint_auth_method?: (OAuth2TokenEndpointAuthMethod | null) | undefined
  oauth2_server_metadata?: (ExtendedOAuthServerMetadata | null) | undefined
}
type ToolProperties = { read_only: boolean | null }
type LogicalExpression = {
  type: 'and' | 'or'
  expressions: (string[] | LogicalExpression | ToolProperties)[]
}
type ToolExecutionConfiguration = {
  requires_confirmation?: (string[] | LogicalExpression | ToolProperties | null) | undefined
  skip_confirmation?: (string[] | LogicalExpression | ToolProperties | null) | undefined
  include?: (string[] | null) | undefined
  exclude?: (string[] | null) | undefined
}
type ConnectionPreference = {
  tool_configuration: ToolExecutionConfiguration
  consumer_type?: (ConsumerType | null) | undefined
  http_proxy_enabled?: (boolean | null) | undefined
  name?: string | undefined
  is_default?: (boolean | null) | undefined
}
type AuthStatus = 'valid' | 'invalid' | 'error'
type HTTPStatus =
  | 100
  | 101
  | 102
  | 103
  | 200
  | 201
  | 202
  | 203
  | 204
  | 205
  | 206
  | 207
  | 208
  | 226
  | 300
  | 301
  | 302
  | 303
  | 304
  | 305
  | 307
  | 308
  | 400
  | 401
  | 402
  | 403
  | 404
  | 405
  | 406
  | 407
  | 408
  | 409
  | 410
  | 411
  | 412
  | 413
  | 414
  | 415
  | 416
  | 417
  | 418
  | 421
  | 422
  | 423
  | 424
  | 425
  | 426
  | 428
  | 429
  | 431
  | 451
  | 500
  | 501
  | 502
  | 503
  | 504
  | 505
  | 506
  | 507
  | 508
  | 510
  | 511
type CredentialsStatusErrorReason =
  | 'oauth expired'
  | 'oauth near expiry'
  | 'empty credentials'
  | 'blank bearer token'
  | 'unparsable credentials'
  | 'you need to reconnect'
  | 'oauth refresh error'
  | 'MCP server unreachable'
  | 'MCP server timed out'
  | 'MCP server error'
  | 'unknown error'
type CredentialsStatus = {
  status_type: AuthStatus
  last_checked_at?: (string | null) | undefined
  error_http_code?: (HTTPStatus | null) | undefined
  error_message?: (CredentialsStatusErrorReason | null) | undefined
}
type AuthenticationConfiguration = {
  name: string
  title?: (string | null) | undefined
  authentication_type: AuthenticationType
  scope: ConsumerType
  status?: (CredentialsStatus | null) | undefined
  is_default?: boolean | undefined
  creator_id?: (string | null) | undefined
}
type ConnectorToolLocale = {
  name: { [key: string]: string }
  description: { [key: string]: string }
  usage_sentence: { [key: string]: string }
}
type ExecutionConfig = { type: string }
type ConnectorTool = {
  id: string
  name: string
  description: string
  system_prompt?: (string | null) | undefined
  locale?: (ConnectorToolLocale | null) | undefined
  jsonschema?: ({ [key: string]: unknown } | null) | undefined
  execution_config: ExecutionConfig | null
  visibility: ResourceVisibility
  created_at: string
  modified_at: string
  active?: (boolean | null) | undefined
}
type MCPConnector = {
  id: string
  name: string
  title?: (string | null) | undefined
  description: string
  created_at: string
  modified_at: string
  server?: (string | null) | undefined
  icon_url?: (string | null) | undefined
  server_card?: (MCPServerCard | null) | undefined
  owner_id?: (string | null) | undefined
  owner_type: ConsumerType
  visibility: ResourceVisibility
  creator_id?: (string | null) | undefined
  locale?: (ConnectorLocale | null) | undefined
  system_prompt?: (string | null) | undefined
  supported_auth_methods?: (PublicAuthenticationMethod[] | null) | undefined
  connection_preferences?: (ConnectionPreference[] | null) | undefined
  connection_credentials?: (AuthenticationConfiguration[] | null) | undefined
  blocked_by?: ConsumerType[] | undefined
  private_tool_execution: boolean
  supports_mcp: boolean
  mistral?: boolean | undefined
  is_authenticated?: (boolean | null) | undefined
  tools?: (ConnectorTool[] | null) | undefined
  protocol: 'mcp'
}
type OpenApiUrlSource = { type?: 'url' | undefined; url: string }
type OpenApiFileSource = { type?: 'file' | undefined; filename: string }
type OpenApiSpecSource = OpenApiUrlSource | OpenApiFileSource
type ConnectorOpenApiSpec = { source: OpenApiSpecSource | null }
type HTTPConnector = {
  id: string
  name: string
  title?: (string | null) | undefined
  description: string
  created_at: string
  modified_at: string
  server?: (string | null) | undefined
  icon_url?: (string | null) | undefined
  server_card?: (MCPServerCard | null) | undefined
  owner_id?: (string | null) | undefined
  owner_type: ConsumerType
  visibility: ResourceVisibility
  creator_id?: (string | null) | undefined
  locale?: (ConnectorLocale | null) | undefined
  system_prompt?: (string | null) | undefined
  supported_auth_methods?: (PublicAuthenticationMethod[] | null) | undefined
  connection_preferences?: (ConnectionPreference[] | null) | undefined
  connection_credentials?: (AuthenticationConfiguration[] | null) | undefined
  blocked_by?: ConsumerType[] | undefined
  private_tool_execution: boolean
  supports_mcp: boolean
  mistral?: boolean | undefined
  is_authenticated?: (boolean | null) | undefined
  tools?: (ConnectorTool[] | null) | undefined
  protocol: 'http'
  openapi_spec?: (ConnectorOpenApiSpec | null) | undefined
}
type Connector = MCPConnector | HTTPConnector
type ConnectorErrorCode =
  | 'connectors_count_limit_reached'
  | 'credentials_rejected'
  | 'server_unreachable'
  | 'custom_connectors_disabled'
type ConnectorErrorResponse = { detail: string; code?: (ConnectorErrorCode | null) | undefined }
type ConnectorsQueryFiltersInput = { supports_mcp?: boolean | null }
type PaginationResponse = { next_cursor?: (string | null) | undefined; page_size: number }
type PaginatedConnectors = { items: Connector[]; pagination: PaginationResponse }
type AuthenticationTypeInput = 'oauth2' | 'bearer' | 'none' | 'github_app' | 'slack_app'
type AuthUrlResponse = { auth_url: string; ttl: number }
type MessageResponse = { message: string }
type ConnectorCallToolRequestInput = { arguments?: { [key: string]: unknown } }
type TextContent = {
  type?: 'text' | undefined
  text: string
  annotations?: (Annotations | null) | undefined
  _meta?: ({ [key: string]: unknown } | null) | undefined
}
type ImageContent = {
  type?: 'image' | undefined
  data: string
  mimeType: string
  annotations?: (Annotations | null) | undefined
  _meta?: ({ [key: string]: unknown } | null) | undefined
}
type AudioContent = {
  type?: 'audio' | undefined
  data: string
  mimeType: string
  annotations?: (Annotations | null) | undefined
  _meta?: ({ [key: string]: unknown } | null) | undefined
}
type ResourceLink = {
  name: string
  title?: (string | null) | undefined
  uri: string
  description?: (string | null) | undefined
  mimeType?: (string | null) | undefined
  size?: (number | null) | undefined
  icons?: (MCPServerIcon[] | null) | undefined
  annotations?: (Annotations | null) | undefined
  _meta?: ({ [key: string]: unknown } | null) | undefined
  type?: 'resource_link' | undefined
}
type TextResourceContents = {
  uri: string
  mimeType?: (string | null) | undefined
  _meta?: ({ [key: string]: unknown } | null) | undefined
  text: string
}
type BlobResourceContents = {
  uri: string
  mimeType?: (string | null) | undefined
  _meta?: ({ [key: string]: unknown } | null) | undefined
  blob: string
}
type EmbeddedResource = {
  type?: 'resource' | undefined
  resource: TextResourceContents | BlobResourceContents
  annotations?: (Annotations | null) | undefined
  _meta?: ({ [key: string]: unknown } | null) | undefined
}
type ConnectorToolResultMetadata = {
  isError?: boolean | undefined
  structuredContent?: (any | null) | undefined
  _meta?: ({ [key: string]: unknown } | null) | undefined
}
type ConnectorToolCallMetadata = { mcp_meta?: (ConnectorToolResultMetadata | null) | undefined }
type ConnectorToolCallResponse = {
  content: (TextContent | ImageContent | AudioContent | ResourceLink | EmbeddedResource)[]
  metadata?: (ConnectorToolCallMetadata | null) | undefined
}
type MCPTool = {
  name: string
  title?: (string | null) | undefined
  description?: (string | null) | undefined
  inputSchema: { [key: string]: unknown }
  execution?: (ToolExecution | null) | undefined
  outputSchema?: ({ [key: string]: unknown } | null) | undefined
  icons?: (MCPServerIcon[] | null) | undefined
  annotations?: (ToolAnnotations | null) | undefined
  _meta?: (MCPToolMeta | null) | undefined
}
type CredentialsResponse = {
  credentials: AuthenticationConfiguration[]
  connector_preset_credentials_for_auth?: AuthenticationType[] | undefined
}
type OAuth2ClientCredentialsInputInput = {
  grant_type: 'client_credentials'
  client_id: string
  client_secret?: string | null
  client_certificate?: string | null
  client_private_key?: string | null
}
type ConnectionCredentialsInputInput = {
  oauth?: OAuth2ClientCredentialsInputInput | null
  headers?: { [key: string]: string } | null
  query_params?: { [key: string]: string } | null
  bearer_token?: string | null
}
type CredentialsCreateOrUpdateInput = {
  name: string
  title?: string | null
  is_default?: boolean | null
  credentials?: ConnectionCredentialsInputInput | null
}
type Oauth2MetadataSecretsInput = {
  client_id?: string | null
  client_secret?: string | null
  client_id_issued_at?: number | null
  client_secret_expires_at?: number | null
}
type AuthenticationMethodCreateOrUpdateRequestInput = {
  method_type: AuthenticationTypeInput
  headers?: ConnectorAuthenticationHeaderInput[] | null
  global_headers?: { [key: string]: GlobalHeaderValueInput }
  oauth2_metadata_secrets?: Oauth2MetadataSecretsInput | null
  oauth2_server_metadata?: ExtendedOAuthServerMetadataInput | null
}
type ConnectorMCPPublicUpdateInput = {
  title?: string | null
  name?: string | null
  description?: string | null
  icon_url?: string | null
  server?: string | null
  auth_methods?:
    | (
        | (OAuth2AuthMethodInput | BearerAuthMethodInput | NoneAuthMethodInput)
        | AuthenticationMethodCreateOrUpdateRequestInput
      )[]
    | null
  protocol?: 'mcp'
  system_prompt?: string | null
}
type UpdateHTTPConnectorRequestInput = {
  title?: string | null
  name?: string | null
  description?: string | null
  icon_url?: string | null
  server?: string | null
  auth_methods?:
    | (
        | (OAuth2AuthMethodInput | BearerAuthMethodInput | NoneAuthMethodInput)
        | AuthenticationMethodCreateOrUpdateRequestInput
      )[]
    | null
  protocol: 'http'
}
type VoiceKind = 'ivc' | 'pvc'
type VoiceResponse = {
  name: string
  slug?: (string | null) | undefined
  languages?: string[] | undefined
  gender?: (string | null) | undefined
  age?: (number | null) | undefined
  tags?: (string[] | null) | undefined
  color?: (string | null) | undefined
  description?: (string | null) | undefined
  retention_notice?: number | undefined
  id: string
  created_at: string
  user_id: string | null
  trimmed_seconds?: (number | null) | undefined
  kind?: VoiceKind | undefined
  type: 'preset' | 'custom'
}
type VoiceListResponse = {
  items: VoiceResponse[]
  total: number
  page: number
  page_size: number
  total_pages: number
}
type VoiceGenderInput = 'female' | 'male' | 'neutral'
type VoiceCreateRequestInput = {
  name: string
  languages?: string[]
  gender?: VoiceGenderInput | null
  age?: number | null
  tags?: string[] | null
  color?: string | null
  description?: string | null
  retention_notice?: number
  sample_audio?: string | null
  sample_filename?: string | null
}
type VoiceUpdateRequestInput = {
  name?: string | null
  languages?: string[] | null
  gender?: VoiceGenderInput | null
  age?: number | null
  tags?: string[] | null
  description?: string | null
  retention_notice?: number | null
}
type AudioLLMConfigInput = { model?: string }
type AudioTTSConfigInput = { model?: string; voice_id?: string; expressiveness?: number | null }
type AudioTurnDetectionConfigInput = {
  start_threshold?: number | null
  eager_end_threshold?: number | null
  end_threshold?: number | null
  min_silence_ms?: number | null
  end_timeout_ms?: number | null
}
type AudioSTTConfigInput = {
  model?: string
  language?: string | null
  context_bias?: string[] | null
  target_streaming_delay_ms?: number | null
  turn_detection?: AudioTurnDetectionConfigInput | null
}
type AudioInactivityConfigInput = { timeout_ms: number; messages?: string[]; max_reminders: number }
type AudioTurnConfigInput = {
  allow_interruptions?: boolean
  inactivity?: AudioInactivityConfigInput | null
}
type StaticToolFillerInput = { type?: 'static'; text: string }
type GeneratedToolFillerInput = {
  type?: 'generated'
  instructions?: string | null
  fallback?: StaticToolFillerInput | null
}
type VoiceAgentWebSearchToolInput = {
  tool_configuration?: ToolConfigurationInput | null
  type?: 'web_search'
  filler?: (StaticToolFillerInput | GeneratedToolFillerInput) | null
}
type VoiceAgentDocumentLibraryToolInput = {
  tool_configuration?: ToolConfigurationInput | null
  type?: 'document_library'
  library_ids: string[]
  filler?: (StaticToolFillerInput | GeneratedToolFillerInput) | null
}
type VoiceAgentCustomConnectorInput = {
  type?: 'connector'
  connector_id: string
  authorization?: (OAuth2TokenAuthInput | APIKeyAuthInput) | null
  tool_configuration?: ToolConfigurationInput | null
  filler?: (StaticToolFillerInput | GeneratedToolFillerInput) | null
}
type FunctionRequestInput = {
  name: string
  description?: string
  strict?: boolean
  parameters: { [key: string]: unknown }
}
type VoiceAgentFunctionToolRequestInput = {
  type?: 'function'
  function: FunctionRequestInput
  filler?: (StaticToolFillerInput | GeneratedToolFillerInput) | null
  timeout_ms?: number | null
}
type PhoneDestinationInput = { type?: 'phone'; number: string }
type SipDestinationInput = { type?: 'sip'; uri: string }
type TransferTargetInput = {
  id: string
  condition: string
  destination: PhoneDestinationInput | SipDestinationInput
}
type TransferCallToolInput = {
  type?: 'transfer_call'
  destinations: TransferTargetInput[]
  filler?: (StaticToolFillerInput | GeneratedToolFillerInput) | null
}
type HangUpToolInput = {
  type?: 'hang_up'
  filler?: (StaticToolFillerInput | GeneratedToolFillerInput) | null
}
type AudioSessionCreateRequestInput = {
  llm?: AudioLLMConfigInput
  tts?: AudioTTSConfigInput
  stt?: AudioSTTConfigInput
  turn?: AudioTurnConfigInput
  instructions?: string | null
  tools?:
    | (
        | VoiceAgentWebSearchToolInput
        | VoiceAgentDocumentLibraryToolInput
        | VoiceAgentCustomConnectorInput
        | VoiceAgentFunctionToolRequestInput
        | TransferCallToolInput
        | HangUpToolInput
      )[]
    | null
  welcome_message?: string | null
  agent_id?: string | null
  agent_version?: number | null
}
type StaticToolFiller = { type?: 'static' | undefined; text: string }
type GeneratedToolFiller = {
  type?: 'generated' | undefined
  instructions?: (string | null) | undefined
  fallback?: (StaticToolFiller | null) | undefined
}
type VoiceAgentFunctionTool = {
  type?: 'function' | undefined
  function: Function
  filler?: ((StaticToolFiller | GeneratedToolFiller) | null) | undefined
  timeout_ms?: (number | null) | undefined
}
type AudioSessionCreateResponse = {
  id: string
  participant_token: string
  server_url: string
  created_at: string
  expires_at: string
  function_tools?: VoiceAgentFunctionTool[] | undefined
}
type AudioSessionPhoneNumber = {
  id: string
  identifier: string
  name?: (string | null) | undefined
}
type AudioSessionPhoneCall = {
  phone_number_id: string
  phone_number?: (AudioSessionPhoneNumber | null) | undefined
}
type AmazonConnectContact = {
  type: 'amazon_connect'
  context_id: string
  instance_arn?: (string | null) | undefined
  instance_id?: (string | null) | undefined
  contact_arn?: (string | null) | undefined
  contact_id?: (string | null) | undefined
  caller_number?: (string | null) | undefined
  called_number?: (string | null) | undefined
  channel?: (string | null) | undefined
}
type AudioLatencyBreakdownUser = {
  transcription_delay_ms?: (number | null) | undefined
  end_of_turn_delay_ms?: (number | null) | undefined
}
type AudioUserTranscriptTurn = {
  content?: (string | null) | undefined
  timestamp: string
  duration_ms?: (number | null) | undefined
  role: 'user'
  latency: AudioLatencyBreakdownUser
}
type AudioToolCall = { id: string; name: string; arguments?: (string | null) | undefined }
type AudioLatencyBreakdownAssistant = {
  llm_ttft_ms?: (number | null) | undefined
  llm_duration_ms?: (number | null) | undefined
  tts_ttfb_ms?: (number | null) | undefined
  tts_duration_ms?: (number | null) | undefined
  e2e_latency_ms?: (number | null) | undefined
}
type AudioAssistantTranscriptTurn = {
  content?: (string | null) | undefined
  timestamp: string
  duration_ms?: (number | null) | undefined
  role: 'assistant'
  is_interruption?: boolean | undefined
  tool_calls?: AudioToolCall[] | undefined
  latency: AudioLatencyBreakdownAssistant
}
type AudioToolTranscriptTurnStatus = 'success' | 'error' | 'unknown'
type AudioToolTranscriptTurn = {
  role: 'tool'
  tool_call_id: string
  name: string
  result?: any | undefined
  status: AudioToolTranscriptTurnStatus
  timestamp: string
  duration_ms?: (number | null) | undefined
}
type AudioSessionResponse = {
  id: string
  status: 'active' | 'ended'
  num_participants: number
  created_at: string
  phone_call?: (AudioSessionPhoneCall | null) | undefined
  bridge_metadata?: (AmazonConnectContact | null) | undefined
  transcripts?:
    | ((AudioUserTranscriptTurn | AudioAssistantTranscriptTurn | AudioToolTranscriptTurn)[] | null)
    | undefined
}
type AudioSessionTurnUpdateInput = { allow_interruptions?: boolean | null }
type AudioSessionUpdateRequestInput = {
  instructions?: string | null
  tools?:
    | (
        | VoiceAgentWebSearchToolInput
        | VoiceAgentDocumentLibraryToolInput
        | VoiceAgentCustomConnectorInput
        | VoiceAgentFunctionToolRequestInput
        | TransferCallToolInput
        | HangUpToolInput
      )[]
    | null
  turn?: AudioSessionTurnUpdateInput | null
}
type AudioSessionUpdateResponse = {
  id: string
  status: 'active' | 'ended'
  num_participants: number
  created_at: string
  phone_call?: (AudioSessionPhoneCall | null) | undefined
  bridge_metadata?: (AmazonConnectContact | null) | undefined
}
type AudioLLMConfig = { model?: string | undefined }
type AudioTTSConfig = {
  model?: string | undefined
  voice_id?: string | undefined
  expressiveness?: (number | null) | undefined
}
type AudioTurnDetectionConfig = {
  start_threshold?: (number | null) | undefined
  eager_end_threshold?: (number | null) | undefined
  end_threshold?: (number | null) | undefined
  min_silence_ms?: (number | null) | undefined
  end_timeout_ms?: (number | null) | undefined
}
type AudioSTTConfig = {
  model?: string | undefined
  language?: (string | null) | undefined
  context_bias?: (string[] | null) | undefined
  target_streaming_delay_ms?: (number | null) | undefined
  turn_detection?: (AudioTurnDetectionConfig | null) | undefined
}
type AudioInactivityConfig = {
  timeout_ms: number
  messages?: string[] | undefined
  max_reminders: number
}
type AudioTurnConfig = {
  allow_interruptions?: boolean | undefined
  inactivity?: (AudioInactivityConfig | null) | undefined
}
type VoiceAgentWebSearchTool = {
  tool_configuration?: (ToolConfiguration | null) | undefined
  type?: 'web_search' | undefined
  filler?: ((StaticToolFiller | GeneratedToolFiller) | null) | undefined
}
type VoiceAgentDocumentLibraryTool = {
  tool_configuration?: (ToolConfiguration | null) | undefined
  type?: 'document_library' | undefined
  library_ids: string[]
  filler?: ((StaticToolFiller | GeneratedToolFiller) | null) | undefined
}
type VoiceAgentCustomConnector = {
  type?: 'connector' | undefined
  connector_id: string
  authorization?: ((OAuth2TokenAuth | APIKeyAuth) | null) | undefined
  tool_configuration?: (ToolConfiguration | null) | undefined
  filler?: ((StaticToolFiller | GeneratedToolFiller) | null) | undefined
}
type PhoneDestination = { type?: 'phone' | undefined; number: string }
type SipDestination = { type?: 'sip' | undefined; uri: string }
type TransferTarget = {
  id: string
  condition: string
  destination: PhoneDestination | SipDestination
}
type TransferCallTool = {
  type?: 'transfer_call' | undefined
  destinations: TransferTarget[]
  filler?: ((StaticToolFiller | GeneratedToolFiller) | null) | undefined
}
type HangUpTool = {
  type?: 'hang_up' | undefined
  filler?: ((StaticToolFiller | GeneratedToolFiller) | null) | undefined
}
type AudioAgentConfigurationResponseConfig = {
  llm: AudioLLMConfig
  tts: AudioTTSConfig
  stt: AudioSTTConfig
  turn: AudioTurnConfig
  instructions?: (string | null) | undefined
  tools?:
    | (
        | (
            | VoiceAgentWebSearchTool
            | VoiceAgentDocumentLibraryTool
            | VoiceAgentCustomConnector
            | VoiceAgentFunctionTool
            | TransferCallTool
            | HangUpTool
          )[]
        | null
      )
    | undefined
  welcome_message?: (string | null) | undefined
}
type AudioAgentResponse = {
  id: string
  owner_id: string
  name?: (string | null) | undefined
  description?: (string | null) | undefined
  created_at: string
  updated_at: string
  version?: (number | null) | undefined
  configuration?: (AudioAgentConfigurationResponseConfig | null) | undefined
}
type AudioAgentListPage = {
  data: AudioAgentResponse[]
  next_page_token?: (string | null) | undefined
}
type AudioAgentConfigurationRequestInput = {
  llm?: AudioLLMConfigInput
  tts?: AudioTTSConfigInput
  stt?: AudioSTTConfigInput
  turn?: AudioTurnConfigInput
  instructions?: string | null
  tools?:
    | (
        | VoiceAgentWebSearchToolInput
        | VoiceAgentDocumentLibraryToolInput
        | VoiceAgentCustomConnectorInput
        | VoiceAgentFunctionToolRequestInput
        | TransferCallToolInput
        | HangUpToolInput
      )[]
    | null
  welcome_message?: string | null
}
type AudioAgentCreateRequestInput = {
  name: string
  description?: string | null
  configuration: AudioAgentConfigurationRequestInput
}
type AudioAgentUpdateRequestInput = {
  name: string
  description?: string | null
  configuration: AudioAgentConfigurationRequestInput
}
type AudioAgentSessionSummary = {
  id: string
  agent_id: string
  started_at?: (string | null) | undefined
  duration?: (number | null) | undefined
  phone_number_id?: (string | null) | undefined
  bridge_metadata?: (AmazonConnectContact | null) | undefined
}
type AudioAgentSessionListPage = {
  data: AudioAgentSessionSummary[]
  next_page_token?: (string | null) | undefined
}
type VoiceListPage = { data: VoiceResponse[]; next_page_token?: (string | null) | undefined }
type WorkflowExecutionStatus =
  | 'RUNNING'
  | 'COMPLETED'
  | 'FAILED'
  | 'CANCELED'
  | 'TERMINATED'
  | 'CONTINUED_AS_NEW'
  | 'TIMED_OUT'
  | 'RETRYING_AFTER_ERROR'
type WorkflowExecutionResponse = {
  workflow_name: string
  workflow_id?: (string | null) | undefined
  deployment_name?: (string | null) | undefined
  execution_id: string
  parent_execution_id?: (string | null) | undefined
  root_execution_id: string
  run_id?: (string | null) | undefined
  user_id?: (string | null) | undefined
  status: WorkflowExecutionStatus | null
  start_time: string
  end_time: string | null
  total_duration_ms?: (number | null) | undefined
  result: any | null
  search_keys?: ({ [key: string]: string | null } | null) | undefined
}
type EncodedPayloadOptionsInput = 'offloaded' | 'encrypted' | 'encrypted-partial' | 'compressed'
type NetworkEncodedInputInput = {
  b64payload: string
  encoding_options?: EncodedPayloadOptionsInput[]
  empty?: boolean
}
type SignalInvocationBodyInput = {
  name: string
  input?: NetworkEncodedInputInput | { [key: string]: unknown } | null
  call_context?: { [key: string]: boolean | number | string } | null
}
type SignalWorkflowResponse = { message?: string | undefined }
type QueryInvocationBodyInput = {
  name: string
  input?: NetworkEncodedInputInput | { [key: string]: unknown } | null
}
type QueryWorkflowResponse = { query_name: string; result: any }
type BatchExecutionBodyInput = { execution_ids: string[] }
type BatchExecutionResult = { status: string; error?: (string | null) | undefined }
type BatchExecutionResponse = { results?: { [key: string]: BatchExecutionResult } | undefined }
type ResetInvocationBodyInput = {
  event_id: number
  reason?: string | null
  exclude_signals?: boolean
  exclude_updates?: boolean
}
type UpdateInvocationBodyInput = {
  name: string
  input?: NetworkEncodedInputInput | { [key: string]: unknown } | null
  call_context?: { [key: string]: boolean | number | string } | null
}
type UpdateWorkflowResponse = { update_name: string; result: any }
type ExecutionTraceInfoResponse = {
  otel_trace_id?: (string | null) | undefined
  has_trace_data?: boolean | undefined
}
type TempoTraceAttributeStringValue = { stringValue: string }
type TempoTraceAttributeIntValue = { intValue: string }
type TempoTraceAttributeDoubleValue = { doubleValue: number }
type TempoTraceAttributeBoolValue = { boolValue: boolean }
type TempoTraceAttributeArrayElement = {
  stringValue?: (string | null) | undefined
  intValue?: (string | null) | undefined
  doubleValue?: (number | null) | undefined
  boolValue?: (boolean | null) | undefined
}
type TempoTraceAttributeArrayContainer = { values?: TempoTraceAttributeArrayElement[] | undefined }
type TempoTraceAttributeArrayValue = { arrayValue: TempoTraceAttributeArrayContainer }
type TempoTraceAttribute = {
  key: string
  value:
    | TempoTraceAttributeStringValue
    | TempoTraceAttributeIntValue
    | TempoTraceAttributeDoubleValue
    | TempoTraceAttributeBoolValue
    | TempoTraceAttributeArrayValue
}
type TempoTraceResource = { attributes?: TempoTraceAttribute[] | undefined }
type TempoTraceScope = { name: string }
type TempoTraceScopeKind = 'SPAN_KIND_INTERNAL' | 'SPAN_KIND_SERVER' | 'SPAN_KIND_CLIENT'
type TempoTraceEvent = {
  name: string
  timeUnixNano: string
  attributes?: TempoTraceAttribute[] | undefined
}
type TempoTraceSpan = {
  traceId: string
  spanId: string
  parentSpanId?: (string | null) | undefined
  name: string
  kind: TempoTraceScopeKind
  startTimeUnixNano: string
  endTimeUnixNano: string
  attributes?: TempoTraceAttribute[] | undefined
  events?: TempoTraceEvent[] | undefined
}
type TempoTraceScopeSpan = { scope: TempoTraceScope; spans?: TempoTraceSpan[] | undefined }
type TempoTraceBatch = {
  resource: TempoTraceResource
  scopeSpans?: TempoTraceScopeSpan[] | undefined
}
type TempoGetTraceResponse = { batches?: TempoTraceBatch[] | undefined }
type WorkflowExecutionTraceOTelResponse = {
  workflow_name: string
  workflow_id?: (string | null) | undefined
  deployment_name?: (string | null) | undefined
  execution_id: string
  parent_execution_id?: (string | null) | undefined
  root_execution_id: string
  run_id?: (string | null) | undefined
  user_id?: (string | null) | undefined
  status: WorkflowExecutionStatus | null
  start_time: string
  end_time: string | null
  total_duration_ms?: (number | null) | undefined
  result: any | null
  search_keys?: ({ [key: string]: string | null } | null) | undefined
  data_source: string
  otel_trace_id?: (string | null) | undefined
  otel_trace_data?: (TempoGetTraceResponse | null) | undefined
}
type WorkflowExecutionTraceSummaryAttributesValues =
  | string
  | number
  | number
  | boolean
  | any[]
  | null
type EventType = 'EVENT' | 'EVENT_PROGRESS'
type WorkflowExecutionTraceEvent = {
  type?: EventType | undefined
  name: string
  id: string
  timestamp_unix_nano: number
  attributes: { [key: string]: WorkflowExecutionTraceSummaryAttributesValues }
  internal?: boolean | undefined
}
type WorkflowExecutionTraceSummarySpan = {
  span_id: string
  name: string
  start_time_unix_nano: number
  end_time_unix_nano: number | null
  attributes: { [key: string]: WorkflowExecutionTraceSummaryAttributesValues }
  events: WorkflowExecutionTraceEvent[]
  children?: WorkflowExecutionTraceSummarySpan[] | undefined
}
type WorkflowExecutionTraceSummaryResponse = {
  workflow_name: string
  workflow_id?: (string | null) | undefined
  deployment_name?: (string | null) | undefined
  execution_id: string
  parent_execution_id?: (string | null) | undefined
  root_execution_id: string
  run_id?: (string | null) | undefined
  user_id?: (string | null) | undefined
  status: WorkflowExecutionStatus | null
  start_time: string
  end_time: string | null
  total_duration_ms?: (number | null) | undefined
  result: any | null
  search_keys?: ({ [key: string]: string | null } | null) | undefined
  span_tree?: (WorkflowExecutionTraceSummarySpan | null) | undefined
}
type EventProgressStatus = 'RUNNING' | 'COMPLETED' | 'FAILED'
type WorkflowExecutionProgressTraceEvent = {
  type?: EventType | undefined
  name: string
  id: string
  timestamp_unix_nano: number
  attributes: { [key: string]: WorkflowExecutionTraceSummaryAttributesValues }
  internal?: boolean | undefined
  status?: EventProgressStatus | undefined
  start_time_unix_ms: number
  end_time_unix_ms?: (number | null) | undefined
  error?: (string | null) | undefined
}
type WorkflowExecutionTraceEventsResponse = {
  workflow_name: string
  workflow_id?: (string | null) | undefined
  deployment_name?: (string | null) | undefined
  execution_id: string
  parent_execution_id?: (string | null) | undefined
  root_execution_id: string
  run_id?: (string | null) | undefined
  user_id?: (string | null) | undefined
  status: WorkflowExecutionStatus | null
  start_time: string
  end_time: string | null
  total_duration_ms?: (number | null) | undefined
  result: any | null
  search_keys?: ({ [key: string]: string | null } | null) | undefined
  events?: (WorkflowExecutionTraceEvent | WorkflowExecutionProgressTraceEvent)[] | undefined
}
type ExecutionLogRecord = {
  timestamp: string
  trace_id: string
  span_id: string
  severity_text: string
  body: string
  log_attributes: { [key: string]: string }
}
type ExecutionLogSearchResponse = {
  results: ExecutionLogRecord[]
  next_cursor?: (string | null) | undefined
}
type ScalarMetric = { value: number | number }
type TimeSeriesMetric = { value: unknown[][] }
type WorkflowMetrics = {
  execution_count: ScalarMetric
  success_count: ScalarMetric
  error_count: ScalarMetric
  average_latency_ms: ScalarMetric
  latency_over_time: TimeSeriesMetric
  retry_rate: ScalarMetric
}
type WorkflowExecutionStatusInput =
  | 'RUNNING'
  | 'COMPLETED'
  | 'FAILED'
  | 'CANCELED'
  | 'TERMINATED'
  | 'CONTINUED_AS_NEW'
  | 'TIMED_OUT'
  | 'RETRYING_AFTER_ERROR'
type WorkflowExecutionWithoutResultResponse = {
  workflow_name: string
  workflow_id?: (string | null) | undefined
  deployment_name?: (string | null) | undefined
  execution_id: string
  parent_execution_id?: (string | null) | undefined
  root_execution_id: string
  run_id?: (string | null) | undefined
  user_id?: (string | null) | undefined
  status: WorkflowExecutionStatus | null
  start_time: string
  end_time: string | null
  total_duration_ms?: (number | null) | undefined
}
type WorkflowExecutionListResponse = {
  executions: WorkflowExecutionWithoutResultResponse[]
  next_page_token?: (string | null) | undefined
}
type ScheduleRange = { start: number; end?: number | undefined; step?: number | undefined }
type ScheduleCalendar = {
  second?: ScheduleRange[] | undefined
  minute?: ScheduleRange[] | undefined
  hour?: ScheduleRange[] | undefined
  day_of_month?: ScheduleRange[] | undefined
  month?: ScheduleRange[] | undefined
  year?: ScheduleRange[] | undefined
  day_of_week?: ScheduleRange[] | undefined
  comment?: (string | null) | undefined
}
type ScheduleInterval = { every: string; offset?: (string | null) | undefined }
type ScheduleOverlapPolicy = 1 | 2 | 3 | 4 | 5 | 6
type SchedulePolicy = {
  catchup_window_seconds?: number | undefined
  overlap?: ScheduleOverlapPolicy | undefined
  pause_on_failure?: boolean | undefined
}
type ScheduleFutureExecution = { scheduled_at: string }
type ScheduleRecentExecution = { scheduled_at: string; started_at: string; execution_id: string }
type ScheduleDefinitionOutput = {
  input: any
  calendars?: ScheduleCalendar[] | undefined
  intervals?: ScheduleInterval[] | undefined
  cron_expressions?: string[] | undefined
  skip?: ScheduleCalendar[] | undefined
  start_at?: (string | null) | undefined
  end_at?: (string | null) | undefined
  jitter?: (string | null) | undefined
  time_zone_name?: (string | null) | undefined
  policy?: SchedulePolicy | undefined
  schedule_id: string
  remaining_executions?: (number | null) | undefined
  workflow_name: string
  deployment_name?: (string | null) | undefined
  user_id?: (string | null) | undefined
  paused: boolean
  note?: (string | null) | undefined
  future_executions?: ScheduleFutureExecution[] | undefined
  recent_executions?: ScheduleRecentExecution[] | undefined
}
type WorkflowScheduleListResponse = {
  schedules: ScheduleDefinitionOutput[]
  next_page_token?: (string | null) | undefined
}
type ScheduleRangeInput = { start: number; end?: number; step?: number }
type ScheduleCalendarInput = {
  second?: ScheduleRangeInput[]
  minute?: ScheduleRangeInput[]
  hour?: ScheduleRangeInput[]
  day_of_month?: ScheduleRangeInput[]
  month?: ScheduleRangeInput[]
  year?: ScheduleRangeInput[]
  day_of_week?: ScheduleRangeInput[]
  comment?: string | null
}
type ScheduleIntervalInput = { every: string; offset?: string | null }
type ScheduleOverlapPolicyInput = 1 | 2 | 3 | 4 | 5 | 6
type SchedulePolicyInput = {
  catchup_window_seconds?: number
  overlap?: ScheduleOverlapPolicyInput
  pause_on_failure?: boolean
}
type ScheduleDefinitionInput = {
  input: any
  calendars?: ScheduleCalendarInput[]
  intervals?: ScheduleIntervalInput[]
  cron_expressions?: string[]
  skip?: ScheduleCalendarInput[]
  start_at?: string | null
  end_at?: string | null
  jitter?: string | null
  time_zone_name?: string | null
  policy?: SchedulePolicyInput
  max_executions?: number | null
  schedule_id?: string | null
}
type WorkflowScheduleRequestInput = {
  schedule: ScheduleDefinitionInput
  workflow_registration_id?: string | null
  workflow_version_id?: string | null
  workflow_identifier?: string | null
  workflow_task_queue?: string | null
  schedule_id?: string | null
  deployment_name?: string | null
}
type WorkflowScheduleResponse = { schedule_id: string }
type PartialScheduleDefinitionInput = {
  input?: any
  calendars?: ScheduleCalendarInput[]
  intervals?: ScheduleIntervalInput[]
  cron_expressions?: string[]
  skip?: ScheduleCalendarInput[]
  start_at?: string | null
  end_at?: string | null
  jitter?: string | null
  time_zone_name?: string | null
  policy?: SchedulePolicyInput
  max_executions?: number | null
}
type WorkflowScheduleUpdateRequestInput = { schedule: PartialScheduleDefinitionInput }
type WorkflowSchedulePauseRequestInput = { note?: string | null }
type WorkflowScheduleTriggerRequestInput = { overlap?: ScheduleOverlapPolicyInput | null }
type WorkflowEventTypeInput =
  | 'WORKFLOW_EXECUTION_STARTED'
  | 'WORKFLOW_EXECUTION_COMPLETED'
  | 'WORKFLOW_EXECUTION_FAILED'
  | 'WORKFLOW_EXECUTION_CANCELED'
  | 'WORKFLOW_EXECUTION_CONTINUED_AS_NEW'
  | 'WORKFLOW_TASK_TIMED_OUT'
  | 'WORKFLOW_TASK_FAILED'
  | 'CUSTOM_TASK_STARTED'
  | 'CUSTOM_TASK_IN_PROGRESS'
  | 'CUSTOM_TASK_COMPLETED'
  | 'CUSTOM_TASK_FAILED'
  | 'CUSTOM_TASK_TIMED_OUT'
  | 'CUSTOM_TASK_CANCELED'
  | 'ACTIVITY_TASK_STARTED'
  | 'ACTIVITY_TASK_COMPLETED'
  | 'ACTIVITY_TASK_RETRYING'
  | 'ACTIVITY_TASK_FAILED'
type EncodedPayloadOptions = 'offloaded' | 'encrypted' | 'encrypted-partial' | 'compressed'
type JSONPayloadResponse = {
  type: 'json'
  value: any
  encoding_options?: (EncodedPayloadOptions[] | null) | undefined
}
type WorkflowExecutionStartedAttributesResponse = {
  task_id: string
  workflow_name: string
  display_name?: (string | null) | undefined
  input: JSONPayloadResponse
  attempt?: number | undefined
}
type WorkflowExecutionStartedResponse = {
  event_id: string
  event_timestamp: number
  root_workflow_exec_id: string
  parent_workflow_exec_id: string | null
  continued_run_id?: (string | null) | undefined
  first_execution_run_id?: (string | null) | undefined
  chain_run_id?: (string | null) | undefined
  schedule_id?: (string | null) | undefined
  workflow_exec_id: string
  workflow_run_id: string
  workflow_name: string
  event_type: 'WORKFLOW_EXECUTION_STARTED'
  attributes: WorkflowExecutionStartedAttributesResponse
}
type WorkflowExecutionCompletedAttributesResponse = {
  task_id: string
  result: JSONPayloadResponse
  attempt?: number | undefined
}
type WorkflowExecutionCompletedResponse = {
  event_id: string
  event_timestamp: number
  root_workflow_exec_id: string
  parent_workflow_exec_id: string | null
  continued_run_id?: (string | null) | undefined
  first_execution_run_id?: (string | null) | undefined
  chain_run_id?: (string | null) | undefined
  schedule_id?: (string | null) | undefined
  workflow_exec_id: string
  workflow_run_id: string
  workflow_name: string
  event_type: 'WORKFLOW_EXECUTION_COMPLETED'
  attributes: WorkflowExecutionCompletedAttributesResponse
}
type Failure = { message: string }
type WorkflowExecutionFailedAttributes = {
  task_id: string
  failure: Failure
  attempt?: number | undefined
}
type WorkflowExecutionFailedResponse = {
  event_id: string
  event_timestamp: number
  root_workflow_exec_id: string
  parent_workflow_exec_id: string | null
  continued_run_id?: (string | null) | undefined
  first_execution_run_id?: (string | null) | undefined
  chain_run_id?: (string | null) | undefined
  schedule_id?: (string | null) | undefined
  workflow_exec_id: string
  workflow_run_id: string
  workflow_name: string
  event_type: 'WORKFLOW_EXECUTION_FAILED'
  attributes: WorkflowExecutionFailedAttributes
}
type WorkflowExecutionCanceledAttributes = {
  task_id: string
  reason?: (string | null) | undefined
  attempt?: number | undefined
}
type WorkflowExecutionCanceledResponse = {
  event_id: string
  event_timestamp: number
  root_workflow_exec_id: string
  parent_workflow_exec_id: string | null
  continued_run_id?: (string | null) | undefined
  first_execution_run_id?: (string | null) | undefined
  chain_run_id?: (string | null) | undefined
  schedule_id?: (string | null) | undefined
  workflow_exec_id: string
  workflow_run_id: string
  workflow_name: string
  event_type: 'WORKFLOW_EXECUTION_CANCELED'
  attributes: WorkflowExecutionCanceledAttributes
}
type WorkflowExecutionContinuedAsNewAttributesResponse = {
  task_id: string
  new_execution_run_id: string
  workflow_name: string
  input: JSONPayloadResponse
}
type WorkflowExecutionContinuedAsNewResponse = {
  event_id: string
  event_timestamp: number
  root_workflow_exec_id: string
  parent_workflow_exec_id: string | null
  continued_run_id?: (string | null) | undefined
  first_execution_run_id?: (string | null) | undefined
  chain_run_id?: (string | null) | undefined
  schedule_id?: (string | null) | undefined
  workflow_exec_id: string
  workflow_run_id: string
  workflow_name: string
  event_type: 'WORKFLOW_EXECUTION_CONTINUED_AS_NEW'
  attributes: WorkflowExecutionContinuedAsNewAttributesResponse
}
type WorkflowTaskTimedOutAttributes = {
  task_id: string
  timeout_type?: (string | null) | undefined
}
type WorkflowTaskTimedOutResponse = {
  event_id: string
  event_timestamp: number
  root_workflow_exec_id: string
  parent_workflow_exec_id: string | null
  continued_run_id?: (string | null) | undefined
  first_execution_run_id?: (string | null) | undefined
  chain_run_id?: (string | null) | undefined
  schedule_id?: (string | null) | undefined
  workflow_exec_id: string
  workflow_run_id: string
  workflow_name: string
  event_type: 'WORKFLOW_TASK_TIMED_OUT'
  attributes: WorkflowTaskTimedOutAttributes
}
type WorkflowTaskFailedAttributes = { task_id: string; failure: Failure }
type WorkflowTaskFailedResponse = {
  event_id: string
  event_timestamp: number
  root_workflow_exec_id: string
  parent_workflow_exec_id: string | null
  continued_run_id?: (string | null) | undefined
  first_execution_run_id?: (string | null) | undefined
  chain_run_id?: (string | null) | undefined
  schedule_id?: (string | null) | undefined
  workflow_exec_id: string
  workflow_run_id: string
  workflow_name: string
  event_type: 'WORKFLOW_TASK_FAILED'
  attributes: WorkflowTaskFailedAttributes
}
type CustomTaskStartedAttributesResponse = {
  custom_task_id: string
  custom_task_type: string
  payload?: JSONPayloadResponse | undefined
}
type CustomTaskStartedResponse = {
  event_id: string
  event_timestamp: number
  root_workflow_exec_id: string
  parent_workflow_exec_id: string | null
  continued_run_id?: (string | null) | undefined
  first_execution_run_id?: (string | null) | undefined
  chain_run_id?: (string | null) | undefined
  schedule_id?: (string | null) | undefined
  workflow_exec_id: string
  workflow_run_id: string
  workflow_name: string
  event_type: 'CUSTOM_TASK_STARTED'
  attributes: CustomTaskStartedAttributesResponse
}
type EncryptedPatchValue = { type: '__encrypted__'; value: string }
type JSONPatchAppend = { path: string; value: string | EncryptedPatchValue; op: 'append' }
type JSONPatchAdd = { path: string; value: any; op: 'add' }
type JSONPatchReplace = { path: string; value: any; op: 'replace' }
type JSONPatchRemove = { path: string; value: any; op: 'remove' }
type JSONPatch = JSONPatchAppend | JSONPatchAdd | JSONPatchReplace | JSONPatchRemove
type JSONPatchPayloadValueResponse = JSONPatch[] | string
type JSONPatchPayloadResponse = {
  type: 'json_patch'
  value: JSONPatchPayloadValueResponse
  encoding_options?: (EncodedPayloadOptions[] | null) | undefined
}
type CustomTaskInProgressAttributesResponse = {
  custom_task_id: string
  custom_task_type: string
  payload: JSONPayloadResponse | JSONPatchPayloadResponse
}
type CustomTaskInProgressResponse = {
  event_id: string
  event_timestamp: number
  root_workflow_exec_id: string
  parent_workflow_exec_id: string | null
  continued_run_id?: (string | null) | undefined
  first_execution_run_id?: (string | null) | undefined
  chain_run_id?: (string | null) | undefined
  schedule_id?: (string | null) | undefined
  workflow_exec_id: string
  workflow_run_id: string
  workflow_name: string
  event_type: 'CUSTOM_TASK_IN_PROGRESS'
  attributes: CustomTaskInProgressAttributesResponse
}
type CustomTaskCompletedAttributesResponse = {
  custom_task_id: string
  custom_task_type: string
  payload: JSONPayloadResponse
}
type CustomTaskCompletedResponse = {
  event_id: string
  event_timestamp: number
  root_workflow_exec_id: string
  parent_workflow_exec_id: string | null
  continued_run_id?: (string | null) | undefined
  first_execution_run_id?: (string | null) | undefined
  chain_run_id?: (string | null) | undefined
  schedule_id?: (string | null) | undefined
  workflow_exec_id: string
  workflow_run_id: string
  workflow_name: string
  event_type: 'CUSTOM_TASK_COMPLETED'
  attributes: CustomTaskCompletedAttributesResponse
}
type CustomTaskFailedAttributes = {
  custom_task_id: string
  custom_task_type: string
  failure: Failure
}
type CustomTaskFailedResponse = {
  event_id: string
  event_timestamp: number
  root_workflow_exec_id: string
  parent_workflow_exec_id: string | null
  continued_run_id?: (string | null) | undefined
  first_execution_run_id?: (string | null) | undefined
  chain_run_id?: (string | null) | undefined
  schedule_id?: (string | null) | undefined
  workflow_exec_id: string
  workflow_run_id: string
  workflow_name: string
  event_type: 'CUSTOM_TASK_FAILED'
  attributes: CustomTaskFailedAttributes
}
type CustomTaskTimedOutAttributes = {
  custom_task_id: string
  custom_task_type: string
  timeout_type?: (string | null) | undefined
}
type CustomTaskTimedOutResponse = {
  event_id: string
  event_timestamp: number
  root_workflow_exec_id: string
  parent_workflow_exec_id: string | null
  continued_run_id?: (string | null) | undefined
  first_execution_run_id?: (string | null) | undefined
  chain_run_id?: (string | null) | undefined
  schedule_id?: (string | null) | undefined
  workflow_exec_id: string
  workflow_run_id: string
  workflow_name: string
  event_type: 'CUSTOM_TASK_TIMED_OUT'
  attributes: CustomTaskTimedOutAttributes
}
type CustomTaskCanceledAttributes = {
  custom_task_id: string
  custom_task_type: string
  reason?: (string | null) | undefined
}
type CustomTaskCanceledResponse = {
  event_id: string
  event_timestamp: number
  root_workflow_exec_id: string
  parent_workflow_exec_id: string | null
  continued_run_id?: (string | null) | undefined
  first_execution_run_id?: (string | null) | undefined
  chain_run_id?: (string | null) | undefined
  schedule_id?: (string | null) | undefined
  workflow_exec_id: string
  workflow_run_id: string
  workflow_name: string
  event_type: 'CUSTOM_TASK_CANCELED'
  attributes: CustomTaskCanceledAttributes
}
type ActivityTaskStartedAttributesResponse = {
  task_id: string
  activity_name: string
  input: JSONPayloadResponse
}
type ActivityTaskStartedResponse = {
  event_id: string
  event_timestamp: number
  root_workflow_exec_id: string
  parent_workflow_exec_id: string | null
  continued_run_id?: (string | null) | undefined
  first_execution_run_id?: (string | null) | undefined
  chain_run_id?: (string | null) | undefined
  schedule_id?: (string | null) | undefined
  workflow_exec_id: string
  workflow_run_id: string
  workflow_name: string
  event_type: 'ACTIVITY_TASK_STARTED'
  attributes: ActivityTaskStartedAttributesResponse
}
type ActivityTaskCompletedAttributesResponse = {
  task_id: string
  activity_name: string
  result: JSONPayloadResponse
}
type ActivityTaskCompletedResponse = {
  event_id: string
  event_timestamp: number
  root_workflow_exec_id: string
  parent_workflow_exec_id: string | null
  continued_run_id?: (string | null) | undefined
  first_execution_run_id?: (string | null) | undefined
  chain_run_id?: (string | null) | undefined
  schedule_id?: (string | null) | undefined
  workflow_exec_id: string
  workflow_run_id: string
  workflow_name: string
  event_type: 'ACTIVITY_TASK_COMPLETED'
  attributes: ActivityTaskCompletedAttributesResponse
}
type ActivityTaskRetryingAttributes = {
  task_id: string
  activity_name: string
  attempt: number
  failure: Failure
}
type ActivityTaskRetryingResponse = {
  event_id: string
  event_timestamp: number
  root_workflow_exec_id: string
  parent_workflow_exec_id: string | null
  continued_run_id?: (string | null) | undefined
  first_execution_run_id?: (string | null) | undefined
  chain_run_id?: (string | null) | undefined
  schedule_id?: (string | null) | undefined
  workflow_exec_id: string
  workflow_run_id: string
  workflow_name: string
  event_type: 'ACTIVITY_TASK_RETRYING'
  attributes: ActivityTaskRetryingAttributes
}
type ActivityTaskFailedAttributes = {
  task_id: string
  activity_name: string
  attempt: number
  failure: Failure
}
type ActivityTaskFailedResponse = {
  event_id: string
  event_timestamp: number
  root_workflow_exec_id: string
  parent_workflow_exec_id: string | null
  continued_run_id?: (string | null) | undefined
  first_execution_run_id?: (string | null) | undefined
  chain_run_id?: (string | null) | undefined
  schedule_id?: (string | null) | undefined
  workflow_exec_id: string
  workflow_run_id: string
  workflow_name: string
  event_type: 'ACTIVITY_TASK_FAILED'
  attributes: ActivityTaskFailedAttributes
}
type ListWorkflowEventResponse = {
  events: (
    | WorkflowExecutionStartedResponse
    | WorkflowExecutionCompletedResponse
    | WorkflowExecutionFailedResponse
    | WorkflowExecutionCanceledResponse
    | WorkflowExecutionContinuedAsNewResponse
    | WorkflowTaskTimedOutResponse
    | WorkflowTaskFailedResponse
    | CustomTaskStartedResponse
    | CustomTaskInProgressResponse
    | CustomTaskCompletedResponse
    | CustomTaskFailedResponse
    | CustomTaskTimedOutResponse
    | CustomTaskCanceledResponse
    | ActivityTaskStartedResponse
    | ActivityTaskCompletedResponse
    | ActivityTaskRetryingResponse
    | ActivityTaskFailedResponse
  )[]
  next_cursor?: (string | null) | undefined
}
type LocationTypeInput = 'local' | 'k8s' | 'managed'
type LocationType = 'local' | 'k8s' | 'managed'
type DeploymentLocation = {
  location_type: LocationType
  k8s_cluster?: (string | null) | undefined
  k8s_namespace?: (string | null) | undefined
}
type DeploymentSecretBinding = { env_var_name: string; reference: string }
type DeploymentMistralCloudBackendSpec = {
  type?: 'mistral_cloud' | 'koyeb' | undefined
  build_directory?: (string | null) | undefined
  dockerfile_path?: (string | null) | undefined
  secrets?: (DeploymentSecretBinding[] | null) | undefined
}
type DeploymentK8sBackendSpec = {
  type?: 'kubernetes' | undefined
  entrypoint?: (string | null) | undefined
  working_dir?: (string | null) | undefined
}
type GitCommitAuthor = {
  name?: (string | null) | undefined
  username?: (string | null) | undefined
  html_url?: (string | null) | undefined
}
type GitCommitMetadata = {
  sha: string
  message?: (string | null) | undefined
  author?: (GitCommitAuthor | null) | undefined
  html_url?: (string | null) | undefined
}
type DeploymentWorkerSpecResponse = {
  github_url: string
  type?: string | undefined
  repository_url?: (string | null) | undefined
  revision?: (string | null) | undefined
  archive_id?: (string | null) | undefined
  backend_spec: DeploymentMistralCloudBackendSpec | DeploymentK8sBackendSpec
  restarted_at?: (string | null) | undefined
  commit?: (GitCommitMetadata | null) | undefined
  requested_roles?: (string[] | null) | undefined
}
type DeploymentResourceConfig = { replicas?: (number | null) | undefined }
type DeploymentBuildState = {
  phase?: (string | null) | undefined
  commit_sha?: (string | null) | undefined
  image?: (string | null) | undefined
  message?: (string | null) | undefined
  started_at?: (string | null) | undefined
  finished_at?: (string | null) | undefined
}
type DeploymentObservedState = {
  phase?: (string | null) | undefined
  available_replicas?: number | undefined
  ready_replicas?: number | undefined
  endpoint?: (string | null) | undefined
  message?: (string | null) | undefined
  last_seen?: (string | null) | undefined
  deployed_revision?: (string | null) | undefined
  generation?: (number | null) | undefined
  last_phase_changed_at?: (string | null) | undefined
  build_state?: (DeploymentBuildState | null) | undefined
}
type ManagedDeploymentResponse = {
  service_id: string
  name: string
  spec: DeploymentWorkerSpecResponse
  resources: DeploymentResourceConfig
  status: DeploymentObservedState
  created_at: string
  updated_at: string
  stopped?: boolean | undefined
  rollout_status?: (string | null) | undefined
  created_by?: (string | null) | undefined
  updated_by?: (string | null) | undefined
  deployed_by?: (string | null) | undefined
  deployed_at?: (string | null) | undefined
  is_hardened?: boolean | undefined
  runtime_credential_id?: (string | null) | undefined
  runtime_principal_type?: (PrincipalType | null) | undefined
}
type DeploymentResponse = {
  id: string
  name: string
  is_active: boolean
  is_hardened?: boolean | undefined
  created_at: string
  last_heartbeat: string
  updated_at: string
  owner?: (string | null) | undefined
  location?: (DeploymentLocation | null) | undefined
  worker_count?: number | undefined
  active_worker_count?: number | undefined
  locations?: LocationType[] | undefined
  managed?: (ManagedDeploymentResponse | null) | undefined
}
type DeploymentListResponse = {
  deployments: DeploymentResponse[]
  next_cursor: string | null
  workspace_id: string
}
type DeploymentSecretBindingInput = { env_var_name: string; reference: string }
type DeploymentMistralCloudBackendSpecInput = {
  type?: 'mistral_cloud' | 'koyeb'
  build_directory?: string | null
  dockerfile_path?: string | null
  secrets?: DeploymentSecretBindingInput[] | null
}
type DeploymentWorkerSpecInputInput = {
  github_url?: string | null
  repository_url?: string | null
  revision?: string | null
  archive_id?: string | null
  backend_spec?: DeploymentMistralCloudBackendSpecInput | null
  requested_roles?: string[] | null
}
type DeploymentResourceConfigInput = { replicas?: number | null }
type CreateDeploymentRequestInput = {
  name: string
  spec: DeploymentWorkerSpecInputInput
  resources?: DeploymentResourceConfigInput | null
  hardened?: boolean
}
type WorkflowsWorkerSpecUpdateInput = {
  github_url?: string | null
  repository_url?: string | null
  revision?: string | null
  archive_id?: string | null
  backend_spec?: DeploymentMistralCloudBackendSpecInput | null
  requested_roles?: string[] | null
}
type DeploymentResourceConfigUpdateInput = { replicas?: number | null }
type UpdateDeploymentRequestInput = {
  spec?: WorkflowsWorkerSpecUpdateInput | null
  resources?: DeploymentResourceConfigUpdateInput | null
}
type DeploymentWorkerResponse = {
  name: string
  created_at: string
  last_heartbeat: string
  updated_at: string
  is_active: boolean
  location?: (DeploymentLocation | null) | undefined
}
type DeploymentDetailResponse = {
  id: string
  name: string
  is_active: boolean
  is_hardened?: boolean | undefined
  created_at: string
  last_heartbeat: string
  updated_at: string
  owner?: (string | null) | undefined
  location?: (DeploymentLocation | null) | undefined
  worker_count?: number | undefined
  active_worker_count?: number | undefined
  locations?: LocationType[] | undefined
  managed?: (ManagedDeploymentResponse | null) | undefined
  workers: DeploymentWorkerResponse[]
}
type DeploymentWorkerListResponse = {
  workers: DeploymentWorkerResponse[]
  next_cursor: string | null
}
type DeploymentArchiveResponse = { archive_id: string; download_url?: (string | null) | undefined }
type CreateDeploymentArchiveRequestInput = { size: number }
type DeploymentArchiveUploadResponse = {
  archive_id: string
  upload_url: string
  upload_headers: { [key: string]: string }
}
type DeploymentLogTypeInput = 'build' | 'runtime'
type DeploymentLogRecord = {
  timestamp: string
  trace_id: string
  span_id: string
  severity_text: string
  body: string
  log_attributes: { [key: string]: string }
}
type DeploymentLogSearchResponse = {
  results: DeploymentLogRecord[]
  next_cursor?: (string | null) | undefined
}
type WorkflowMetadata = { shared_namespace?: (string | null) | undefined }
type WorkflowBasicDefinition = {
  id: string
  name: string
  display_name: string
  description?: (string | null) | undefined
  metadata?: WorkflowMetadata | undefined
  archived: boolean
  tags?: string[] | undefined
}
type WorkflowListResponse = { workflows: WorkflowBasicDefinition[]; next_cursor: string | null }
type SignalDefinition = {
  name: string
  description?: (string | null) | undefined
  input_schema: { [key: string]: unknown }
}
type QueryDefinition = {
  name: string
  description?: (string | null) | undefined
  input_schema: { [key: string]: unknown }
  output_schema?: ({ [key: string]: unknown } | null) | undefined
}
type UpdateDefinition = {
  name: string
  description?: (string | null) | undefined
  input_schema: { [key: string]: unknown }
  output_schema?: ({ [key: string]: unknown } | null) | undefined
}
type WorkflowCodeDefinition = {
  input_schema: { [key: string]: unknown }
  output_schema?: ({ [key: string]: unknown } | null) | undefined
  signals?: SignalDefinition[] | undefined
  queries?: QueryDefinition[] | undefined
  updates?: UpdateDefinition[] | undefined
  enforce_determinism?: boolean | undefined
  on_behalf_of?: boolean | undefined
  execution_timeout?: number | undefined
  plugin_metadata?: ({ [key: string]: unknown } | null) | undefined
}
type WorkflowType = 'code'
type Workflow = {
  id: string
  name: string
  display_name: string
  type: WorkflowType
  description?: (string | null) | undefined
  customer_id: string
  workspace_id: string
  shared_namespace?: (string | null) | undefined
  available_in_chat_assistant?: boolean | undefined
  is_technical?: boolean | undefined
  archived?: boolean | undefined
  tags?: string[] | undefined
}
type WorkflowRegistration = {
  id: string
  deployment_id?: (string | null) | undefined
  task_queue?: (string | null) | undefined
  definition: WorkflowCodeDefinition
  workflow_id: string
  workflow?: (Workflow | null) | undefined
  deployment_name?: (string | null) | undefined
  compatible_with_chat_assistant?: boolean | undefined
}
type WorkflowRegistrationListResponse = {
  workflow_registrations: WorkflowRegistration[]
  next_cursor: string | null
  workflow_versions: WorkflowRegistration[]
}
type WorkflowExecutionRequestInput = {
  execution_id?: string | null
  input?: { [key: string]: unknown } | { [key: string]: unknown } | null
  wait_for_result?: boolean
  timeout_seconds?: number | null
  custom_tracing_attributes?: { [key: string]: string } | null
  force_new_trace?: boolean
  traceparent?: string | null
  extensions?: { [key: string]: unknown } | null
  call_context?: { [key: string]: boolean | number | string } | null
  task_queue?: string | null
  deployment_name?: string | null
}
type WorkflowExecutionSyncResponse = { workflow_name: string; execution_id: string; result: any }
type WorkflowWithWorkerStatus = {
  id: string
  name: string
  display_name: string
  type: WorkflowType
  description?: (string | null) | undefined
  customer_id: string
  workspace_id: string
  shared_namespace?: (string | null) | undefined
  available_in_chat_assistant?: boolean | undefined
  is_technical?: boolean | undefined
  archived?: boolean | undefined
  tags?: string[] | undefined
  active: boolean
}
type WorkflowGetResponse = { workflow: WorkflowWithWorkerStatus }
type WorkflowUpdateRequestInput = {
  display_name?: string | null
  description?: string | null
  available_in_chat_assistant?: boolean | null
  tags?: string[] | null
}
type WorkflowUpdateResponse = { workflow: Workflow }
type WorkflowRegistrationWithWorkerStatus = {
  id: string
  deployment_id?: (string | null) | undefined
  task_queue?: (string | null) | undefined
  definition: WorkflowCodeDefinition
  workflow_id: string
  workflow?: (Workflow | null) | undefined
  deployment_name?: (string | null) | undefined
  compatible_with_chat_assistant?: boolean | undefined
  active: boolean
}
type WorkflowRegistrationGetResponse = {
  workflow_registration: WorkflowRegistrationWithWorkerStatus
  workflow_version: WorkflowRegistrationWithWorkerStatus
}
type WorkflowBulkArchiveRequestInput = { workflow_ids: string[] }
type WorkflowBulkError = {
  workflow_id: string
  workflow?: (Workflow | null) | undefined
  message: string
}
type WorkflowBulkArchiveResponse = {
  archived: Workflow[]
  errored?: WorkflowBulkError[] | undefined
}
type WorkflowBulkUnarchiveRequestInput = { workflow_ids: string[] }
type WorkflowBulkUnarchiveResponse = {
  unarchived: Workflow[]
  errored?: WorkflowBulkError[] | undefined
}
type WorkflowTagsAddRequestInput = { tags: string[] }
type WorkflowArchiveResponse = { workflow: Workflow }
type WorkflowUnarchiveResponse = { workflow: Workflow }
type IngestionPipelineConfiguration = {
  id: string
  author_id: string
  name: string
  created_at: string
  modified_at: string
  last_run_time: string | null
  last_run_chunks_count: number
  total_chunks_count: number
  pipeline_composition: { [key: string]: string } | null
}
type CreateIngestionPipelineConfigurationRequestInput = {
  name: string
  pipeline_composition?: { [key: string]: string } | null
}
type UpdateRunInfoInput = { execution_time: string; chunks_count: number }
type TextFieldDefinitionInput = {
  indexed?: boolean
  required?: boolean
  system?: boolean
  default?: any | null
  type?: 'text'
}
type KeywordFieldDefinitionInput = {
  indexed?: boolean
  required?: boolean
  system?: boolean
  default?: any | null
  type?: 'keyword'
}
type IntFieldDefinitionInput = {
  indexed?: boolean
  required?: boolean
  system?: boolean
  default?: any | null
  type?: 'int'
}
type LongFieldDefinitionInput = {
  indexed?: boolean
  required?: boolean
  system?: boolean
  default?: any | null
  type?: 'long'
}
type FloatFieldDefinitionInput = {
  indexed?: boolean
  required?: boolean
  system?: boolean
  default?: any | null
  type?: 'float'
}
type BoolFieldDefinitionInput = {
  indexed?: boolean
  required?: boolean
  system?: boolean
  default?: any | null
  type?: 'bool'
}
type TimestampFieldDefinitionInput = {
  indexed?: boolean
  required?: boolean
  system?: boolean
  default?: any | null
  type?: 'timestamp'
}
type JsonFieldDefinitionInput = {
  indexed?: boolean
  required?: boolean
  system?: boolean
  default?: any | null
  type?: 'json'
}
type DenseVectorFieldDefinitionInput = {
  indexed?: boolean
  required?: boolean
  system?: boolean
  default?: any | null
  type?: 'dense_vector'
}
type TextArrayFieldDefinitionInput = {
  indexed?: boolean
  required?: boolean
  system?: boolean
  default?: any | null
  type?: 'text[]'
}
type KeywordArrayFieldDefinitionInput = {
  indexed?: boolean
  required?: boolean
  system?: boolean
  default?: any | null
  type?: 'keyword[]'
}
type IntArrayFieldDefinitionInput = {
  indexed?: boolean
  required?: boolean
  system?: boolean
  default?: any | null
  type?: 'int[]'
}
type LongArrayFieldDefinitionInput = {
  indexed?: boolean
  required?: boolean
  system?: boolean
  default?: any | null
  type?: 'long[]'
}
type FloatArrayFieldDefinitionInput = {
  indexed?: boolean
  required?: boolean
  system?: boolean
  default?: any | null
  type?: 'float[]'
}
type BoolArrayFieldDefinitionInput = {
  indexed?: boolean
  required?: boolean
  system?: boolean
  default?: any | null
  type?: 'bool[]'
}
type TimestampArrayFieldDefinitionInput = {
  indexed?: boolean
  required?: boolean
  system?: boolean
  default?: any | null
  type?: 'timestamp[]'
}
type ManagedIndexFieldsInput = {
  document_fields?: {
    [key: string]:
      | TextFieldDefinitionInput
      | KeywordFieldDefinitionInput
      | IntFieldDefinitionInput
      | LongFieldDefinitionInput
      | FloatFieldDefinitionInput
      | BoolFieldDefinitionInput
      | TimestampFieldDefinitionInput
      | JsonFieldDefinitionInput
      | DenseVectorFieldDefinitionInput
      | TextArrayFieldDefinitionInput
      | KeywordArrayFieldDefinitionInput
      | IntArrayFieldDefinitionInput
      | LongArrayFieldDefinitionInput
      | FloatArrayFieldDefinitionInput
      | BoolArrayFieldDefinitionInput
      | TimestampArrayFieldDefinitionInput
  }
  chunk_fields?: {
    [key: string]:
      | TextFieldDefinitionInput
      | KeywordFieldDefinitionInput
      | IntFieldDefinitionInput
      | LongFieldDefinitionInput
      | FloatFieldDefinitionInput
      | BoolFieldDefinitionInput
      | TimestampFieldDefinitionInput
      | JsonFieldDefinitionInput
      | DenseVectorFieldDefinitionInput
      | TextArrayFieldDefinitionInput
      | KeywordArrayFieldDefinitionInput
      | IntArrayFieldDefinitionInput
      | LongArrayFieldDefinitionInput
      | FloatArrayFieldDefinitionInput
      | BoolArrayFieldDefinitionInput
      | TimestampArrayFieldDefinitionInput
  }
}
type VectorDTypeInput = 'float16' | 'float32'
type DistanceMetricInput = 'cosine' | 'inner_product' | 'l2'
type MistralEmbeddingModelInput = {
  type?: 'mistral'
  name: string
  dtype?: VectorDTypeInput
  dimensions: number
  distance_metric?: DistanceMetricInput
}
type CustomEmbeddingModelInput = {
  type?: 'custom'
  name: string
  dtype?: VectorDTypeInput
  dimensions: number
  distance_metric?: DistanceMetricInput
}
type ManagedIndexConfigInput = { embedding: MistralEmbeddingModelInput | CustomEmbeddingModelInput }
type CreateManagedIndexRequestInput = {
  name: string
  schema?: ManagedIndexFieldsInput
  config: ManagedIndexConfigInput
}
type ManagedIndexStatus = 'provisioning' | 'ready' | 'failed' | 'deleting'
type TextFieldDefinition = {
  indexed?: boolean | undefined
  required?: boolean | undefined
  system?: boolean | undefined
  default?: (any | null) | undefined
  type?: 'text' | undefined
}
type KeywordFieldDefinition = {
  indexed?: boolean | undefined
  required?: boolean | undefined
  system?: boolean | undefined
  default?: (any | null) | undefined
  type?: 'keyword' | undefined
}
type IntFieldDefinition = {
  indexed?: boolean | undefined
  required?: boolean | undefined
  system?: boolean | undefined
  default?: (any | null) | undefined
  type?: 'int' | undefined
}
type LongFieldDefinition = {
  indexed?: boolean | undefined
  required?: boolean | undefined
  system?: boolean | undefined
  default?: (any | null) | undefined
  type?: 'long' | undefined
}
type FloatFieldDefinition = {
  indexed?: boolean | undefined
  required?: boolean | undefined
  system?: boolean | undefined
  default?: (any | null) | undefined
  type?: 'float' | undefined
}
type BoolFieldDefinition = {
  indexed?: boolean | undefined
  required?: boolean | undefined
  system?: boolean | undefined
  default?: (any | null) | undefined
  type?: 'bool' | undefined
}
type TimestampFieldDefinition = {
  indexed?: boolean | undefined
  required?: boolean | undefined
  system?: boolean | undefined
  default?: (any | null) | undefined
  type?: 'timestamp' | undefined
}
type JsonFieldDefinition = {
  indexed?: boolean | undefined
  required?: boolean | undefined
  system?: boolean | undefined
  default?: (any | null) | undefined
  type?: 'json' | undefined
}
type DenseVectorFieldDefinition = {
  indexed?: boolean | undefined
  required?: boolean | undefined
  system?: boolean | undefined
  default?: (any | null) | undefined
  type?: 'dense_vector' | undefined
}
type TextArrayFieldDefinition = {
  indexed?: boolean | undefined
  required?: boolean | undefined
  system?: boolean | undefined
  default?: (any | null) | undefined
  type?: 'text[]' | undefined
}
type KeywordArrayFieldDefinition = {
  indexed?: boolean | undefined
  required?: boolean | undefined
  system?: boolean | undefined
  default?: (any | null) | undefined
  type?: 'keyword[]' | undefined
}
type IntArrayFieldDefinition = {
  indexed?: boolean | undefined
  required?: boolean | undefined
  system?: boolean | undefined
  default?: (any | null) | undefined
  type?: 'int[]' | undefined
}
type LongArrayFieldDefinition = {
  indexed?: boolean | undefined
  required?: boolean | undefined
  system?: boolean | undefined
  default?: (any | null) | undefined
  type?: 'long[]' | undefined
}
type FloatArrayFieldDefinition = {
  indexed?: boolean | undefined
  required?: boolean | undefined
  system?: boolean | undefined
  default?: (any | null) | undefined
  type?: 'float[]' | undefined
}
type BoolArrayFieldDefinition = {
  indexed?: boolean | undefined
  required?: boolean | undefined
  system?: boolean | undefined
  default?: (any | null) | undefined
  type?: 'bool[]' | undefined
}
type TimestampArrayFieldDefinition = {
  indexed?: boolean | undefined
  required?: boolean | undefined
  system?: boolean | undefined
  default?: (any | null) | undefined
  type?: 'timestamp[]' | undefined
}
type ManagedIndexFields = {
  document_fields?:
    | {
        [key: string]:
          | TextFieldDefinition
          | KeywordFieldDefinition
          | IntFieldDefinition
          | LongFieldDefinition
          | FloatFieldDefinition
          | BoolFieldDefinition
          | TimestampFieldDefinition
          | JsonFieldDefinition
          | DenseVectorFieldDefinition
          | TextArrayFieldDefinition
          | KeywordArrayFieldDefinition
          | IntArrayFieldDefinition
          | LongArrayFieldDefinition
          | FloatArrayFieldDefinition
          | BoolArrayFieldDefinition
          | TimestampArrayFieldDefinition
      }
    | undefined
  chunk_fields?:
    | {
        [key: string]:
          | TextFieldDefinition
          | KeywordFieldDefinition
          | IntFieldDefinition
          | LongFieldDefinition
          | FloatFieldDefinition
          | BoolFieldDefinition
          | TimestampFieldDefinition
          | JsonFieldDefinition
          | DenseVectorFieldDefinition
          | TextArrayFieldDefinition
          | KeywordArrayFieldDefinition
          | IntArrayFieldDefinition
          | LongArrayFieldDefinition
          | FloatArrayFieldDefinition
          | BoolArrayFieldDefinition
          | TimestampArrayFieldDefinition
      }
    | undefined
}
type VectorDType = 'float16' | 'float32'
type DistanceMetric = 'cosine' | 'inner_product' | 'l2'
type MistralEmbeddingModel = {
  type?: 'mistral' | undefined
  name: string
  dtype?: VectorDType | undefined
  dimensions: number
  distance_metric?: DistanceMetric | undefined
}
type CustomEmbeddingModel = {
  type?: 'custom' | undefined
  name: string
  dtype?: VectorDType | undefined
  dimensions: number
  distance_metric?: DistanceMetric | undefined
}
type ManagedIndexConfig = { embedding: MistralEmbeddingModel | CustomEmbeddingModel }
type ManagedIndexResponse = {
  id: string
  name: string
  creator_id: string
  status: ManagedIndexStatus
  status_message?: (string | null) | undefined
  schema: ManagedIndexFields
  config: ManagedIndexConfig
  created_at?: (string | null) | undefined
  modified_at?: (string | null) | undefined
}
type ListManagedIndexesResponse = {
  data: ManagedIndexResponse[]
  next_page_token?: (string | null) | undefined
}
type UpdateManagedIndexRequestInput = { schema: ManagedIndexFieldsInput }
type DeleteManagedIndexResponse = { id: string; name: string; status: ManagedIndexStatus }
type IngestDocumentsRequestInput = { documents: { [key: string]: unknown }[] }
type AcceptedDocumentResponse = {
  status?: 'accepted' | undefined
  position: number
  document_id: string
  chunk_count: number
}
type DocumentFieldErrorResponse = { location: (string | number)[]; type: string; message: string }
type RejectedDocumentResponse = {
  status?: 'rejected' | undefined
  position: number
  errors: DocumentFieldErrorResponse[]
}
type IngestDocumentsResponse = {
  accepted: number
  rejected: number
  results: (AcceptedDocumentResponse | RejectedDocumentResponse)[]
}
type DeleteDocumentsRequestInput = { document_ids: string[] }
type DeleteDocumentsResponse = { deleted_document_ids: string[]; missing: string[] }
type EqualInput = { type?: 'equal'; field: string; value: number | number | string | string }
type RangeInput = {
  type?: 'range'
  field: string
  gt?: number | number | string | null
  gte?: number | number | string | null
  lt?: number | number | string | null
  lte?: number | number | string | null
}
type InInput = { type?: 'in'; field: string; values: (number | number | string | string)[] }
type NotInput = {
  type?: 'not'
  match: AndInput | OrInput | NotInput | EqualInput | RangeInput | InInput
}
type OrInput = {
  type?: 'or'
  matches: (AndInput | OrInput | NotInput | EqualInput | RangeInput | InInput)[]
}
type AndInput = {
  type?: 'and'
  matches: (AndInput | OrInput | NotInput | EqualInput | RangeInput | InInput)[]
}
type KeywordRetrieverInput = {
  top_k?: number
  type?: 'keyword'
  query: string
  operator?: 'or' | 'and'
  filter?: (AndInput | OrInput | NotInput | EqualInput | RangeInput | InInput) | null
  field?: string | null
}
type NearestNeighbourRetrieverInput = {
  top_k?: number
  type?: 'nearest_neighbour'
  query?: string | null
  query_embedding?: number[] | null
  field?: string | null
  filter?: (AndInput | OrInput | NotInput | EqualInput | RangeInput | InInput) | null
  max_candidates?: number | null
}
type RRFRetrieverInput = {
  top_k?: number
  type?: 'rrf'
  retrievers: (KeywordRetrieverInput | NearestNeighbourRetrieverInput)[]
  weights?: number[] | null
  rank_constant?: number
  filter?: (AndInput | OrInput | NotInput | EqualInput | RangeInput | InInput) | null
}
type SearchRequestInput = {
  retriever: KeywordRetrieverInput | NearestNeighbourRetrieverInput | RRFRetrieverInput
}
type SearchChunkResponse = {
  id: string
  source_id: string
  locator: string
  start_offset: number | null
  end_offset: number | null
  chunk_type: string
  parent_ref?: (string | null) | undefined
  content: string
  metadata?: { [key: string]: unknown } | undefined
}
type SearchHitResponse = {
  chunk: SearchChunkResponse
  score: number
  distance?: (number | null) | undefined
  index_name: string
}
type SearchResponse = { hits: SearchHitResponse[] }
type MissingFieldResponse = { type?: 'missing_field' | undefined; name: string }
type MissingEmbeddingResponse = { type?: 'missing_embedding' | undefined }
type IncorrectFieldTypeResponse = {
  type?: 'incorrect_field_type' | undefined
  name: string
  expected_type: string
  received_type: string
}
type EmbeddingMismatchResponse = {
  type?: 'embedding_mismatch' | undefined
  expected: number
  received: number
}
type MaxCandidatesTooSmallResponse = {
  type?: 'max_candidates_too_small' | undefined
  max_candidates: number
  top_k: number
}
type TopKTooLargeResponse = { type?: 'top_k_too_large' | undefined; top_k: number; limit: number }
type NavigationDirectionInput = 'next' | 'previous'
type NavigateRequestInput = {
  source_id: string
  start_offset: number
  end_offset: number
  direction: NavigationDirectionInput
  top_k?: number
  content_type?: string
}
type NavigationChunkResponse = {
  id: string
  source_id: string
  locator: string
  start_offset: number | null
  end_offset: number | null
  chunk_type: string
  parent_ref?: (string | null) | undefined
  content: string
  metadata?: { [key: string]: unknown } | undefined
}
type NavigationResponse = { chunks: NavigationChunkResponse[] }
type ReadRequestInput = {
  source_id: string
  start_offset?: number | null
  end_offset?: number | null
  top_k?: number
  content_type?: string
}
type GrepModeInput = 'phrase' | 'term'
type GrepRequestInput = {
  source_id: string
  pattern: string
  mode?: GrepModeInput
  top_k?: number
  content_type?: string
}
type SummaryStatus = 'handwritten' | 'generated' | 'generated_confirmed'
type GetSummaryResponseSummary = { content: string; status: SummaryStatus; translated: boolean }
type UpdateSummaryRequestSummaryInput = {
  content: string
  status: 'handwritten' | 'generated_confirmed'
  translated: boolean
}
type TriggerHandlerInput = 'workflows' | 'agents' | 'spaces'
type TriggerActionTypeInput = 'start_workflow' | 'build_app' | 'deploy_app' | 'start_agent_session'
type CreateTriggerActionInput = { primitive_id: string; type: TriggerActionTypeInput }
type TriggersOwnerTypeInput = 'workspace' | 'user'
type CreateTriggerInput = {
  event_source_id: string
  handler: TriggerHandlerInput
  action: CreateTriggerActionInput
  filters?: string | null
  owner_type: TriggersOwnerTypeInput
  title: string
}
type TriggersOwnerType = 'workspace' | 'user'
type WebhookProvider =
  | 'slack'
  | 'github'
  | 'notion'
  | 'lucca'
  | 'linear'
  | 'microsoft'
  | 'ashby'
  | 'whatsapp'
  | 'custom'
type WebhookSignatureHashAlgorithm = 'sha256' | 'sha1'
type WebhookSignatureEncoding = 'hex' | 'base64'
type Webhook = {
  id: string
  creator_id: string
  organization_id: string
  workspace_id: string
  owner_type: TriggersOwnerType
  provider: WebhookProvider
  name: string
  description?: (string | null) | undefined
  url: string
  http_method: string
  url_verified: boolean | null
  url_verification_token?: (string | null) | undefined
  signature_hash_algorithm: WebhookSignatureHashAlgorithm | null
  signature_header_name: string | null
  validity_period_second: number | null
  signature_extractor_regex: string | null
  timestamp_extractor_regex: string | null
  signature_payload_pattern: string | null
  signature_encoding: WebhookSignatureEncoding | null
  success_status_code: number | null
  event_type_path?: (string | null) | undefined
  event_type_pattern?: (string | null) | undefined
  event_id_pattern?: (string | null) | undefined
  timestamp_pattern?: (string | null) | undefined
  expires_at: string | null
  created_at: string
  updated_at: string
}
type TriggerHandler = 'workflows' | 'agents' | 'spaces'
type TriggerActionType = 'start_workflow' | 'build_app' | 'deploy_app' | 'start_agent_session'
type TriggerAction = { primitive_id: string; type: TriggerActionType }
type Trigger = {
  id: string
  creator_id: string
  workspace_id: string
  organization_id: string
  customer_id: string
  owner_type: TriggersOwnerType
  event_source: Webhook
  handler: TriggerHandler
  action: TriggerAction
  filters: string | null
  title: string
}
type TriggerStatusValue = 'SUBMITTED' | 'SUBMISSION_FAILED' | 'TRIGGERED' | 'TRIGGER_FAILED'
type TriggerEvent = {
  event_id: string
  trigger_id: string
  source_id: string
  status: TriggerStatusValue
  received_at: string
  submitted_at: string | null
  triggered_at: string | null
  detail: string | null
  url: string | null
}
type TriggerEventList = { data: TriggerEvent[] }
type WebhookProviderInput =
  | 'slack'
  | 'github'
  | 'notion'
  | 'lucca'
  | 'linear'
  | 'microsoft'
  | 'ashby'
  | 'whatsapp'
  | 'custom'
type WebhookSignatureHashAlgorithmInput = 'sha256' | 'sha1'
type WebhookSignatureEncodingInput = 'hex' | 'base64'
type CreateWebhookInput = {
  provider: WebhookProviderInput
  owner_type?: TriggersOwnerTypeInput
  name: string
  description?: string | null
  secret?: string | null
  encryption_key?: string | null
  url_verification_token?: string | null
  expires_at?: string | null
  signature_hash_algorithm?: WebhookSignatureHashAlgorithmInput | null
  signature_header_name?: string | null
  validity_period_second?: number | null
  signature_extractor_regex?: string | null
  timestamp_extractor_regex?: string | null
  timestamp_pattern?: string | null
  signature_payload_pattern?: string | null
  signature_encoding?: WebhookSignatureEncodingInput | null
  success_status_code?: number | null
  event_type_pattern?: string | null
  event_id_pattern?: string | null
}
type WebhookSigningSecret = { signing_secret: string }
type UserIdentityWorkspace = { id: string; name: string }
type UserIdentityOrganization = { id: string; name: string }
type UserIdentityApiKey = { id: string; name: string | null }
type UserIdentity = {
  id: string
  email: string | null
  first_name: string | null
  last_name: string | null
  workspace?: (UserIdentityWorkspace | null) | undefined
  organization?: (UserIdentityOrganization | null) | undefined
  api_key?: (UserIdentityApiKey | null) | undefined
}
type UserOrganization = { id: string; name: string }
type ListOrganizationsResponse = { organizations: UserOrganization[] }
type UserWorkspace = { id: string; name: string; organization_id: string }
type ListWorkspacesResponse = { workspaces: UserWorkspace[] }
type WhoamiUserPrincipal = {
  principal_type?: 'user' | undefined
  id: string
  email?: (string | null) | undefined
  first_name?: (string | null) | undefined
  last_name?: (string | null) | undefined
}
type WhoamiServiceAccountPrincipal = {
  principal_type?: 'service_account' | undefined
  service_account_id: string
  name?: (string | null) | undefined
}
type WhoamiOrganization = {
  id: string
  name: string
  org_tier?: (string | null) | undefined
  internal?: boolean | undefined
  kind?: string | undefined
}
type WhoamiResponse = {
  principal: WhoamiUserPrincipal | WhoamiServiceAccountPrincipal
  customer_id?: (string | null) | undefined
  organization?: (WhoamiOrganization | null) | undefined
  workspace?: (UserIdentityWorkspace | null) | undefined
}
type BudgetDetail = {
  usage_percentage: number
  initial_budget: number
  currency?: (string | null) | undefined
  reset_at: string
  payg_enabled?: boolean | undefined
}
type GetBudgetResponse = { vibe_budget: BudgetDetail; api_budget: BudgetDetail }
type GetSubscriptionResponse = {
  plan_name: string
  payg_enabled: boolean
  vibe_payg_enabled: boolean
  enterprise: boolean
}
type UsageTypeInput =
  | 'usage'
  | 'codestral'
  | 'document_library'
  | 'document_library_api'
  | 'libraries_pages'
  | 'libraries_tokens'
  | 'libraries_audio'
  | 'chat'
  | 'rlhf'
  | 'ocr'
  | 'audio_seconds'
  | 'audio_characters'
  | 'audio_agents'
  | 'connectors'
  | 'workflow_executions'
  | 'skill_activations'
  | 'managed_index_storage_bytes'
  | 'managed_index_written_bytes'
  | 'managed_index_searches'
  | 'vibe'
  | 'vibe_connectors'
  | 'vibe_ocr'
  | 'vibe_audio_seconds'
  | 'vibe_audio_characters'
type AdminUsageQueryFilterInput = {
  field:
    | 'usage_type'
    | 'billing_metric'
    | 'billing_display_name'
    | 'billing_group'
    | 'workspace_id'
    | 'organization_id'
    | 'user_id'
    | 'service_account_id'
    | 'api_key_id'
    | 'api_zone'
    | 'service_tier'
    | 'call_source'
    | 'call_type'
    | 'user_agent'
    | 'resource_id'
    | 'resource_version'
  operator: 'is' | 'is_not'
  values: (string | null)[]
}
type UsageQueryINInput = {
  usage_type?: UsageTypeInput[] | null
  billing_metric?: string[] | null
  billing_display_name?: string[] | null
  billing_group?: string[] | null
  workspace_ids?: (string | null)[] | null
  organization_id?: string[] | null
  user_id?: string[] | null
  service_account_id?: string[] | null
  api_key_id?: string[] | null
  api_zone?: string[] | null
  service_tier?: string[] | null
  start: string
  end: string
  filters?: AdminUsageQueryFilterInput[] | null
  group_by?:
    | (
        | 'api_zone'
        | 'service_tier'
        | 'customer_id'
        | 'usage_type'
        | 'billing_metric'
        | 'billing_group'
        | 'billing_display_name'
        | 'workspace_id'
        | 'organization_id'
        | 'user_id'
        | 'service_account_id'
        | 'api_key_id'
        | 'untracked'
        | 'call_source'
        | 'call_type'
        | 'user_agent'
        | 'customer_tier'
        | 'resource_id'
        | 'resource_version'
      )[]
    | null
  time_bucket?:
    | 'second'
    | '1min'
    | '5min'
    | '15min'
    | '30min'
    | 'hour'
    | '4hours'
    | 'day'
    | 'week'
    | 'month'
    | null
  untracked?: boolean | null
  limit?: number | null
  offset?: number | null
  include_aggregates?: boolean
  include_nb_api_calls?: boolean
}
type UsageQueryRowOUT = {
  customer_id?: (string | null) | undefined
  usage_type?: (string | null) | undefined
  billing_metric?: (string | null) | undefined
  billing_group?: (string | null) | undefined
  workspace_id?: (string | null) | undefined
  organization_id?: (string | null) | undefined
  user_id?: (string | null) | undefined
  service_account_id?: (string | null) | undefined
  api_key_id?: (string | null) | undefined
  api_zone?: (string | null) | undefined
  service_tier?: (string | null) | undefined
  timestamp?: (string | null) | undefined
  time_bucket?: (string | null) | undefined
  value?: (number | null) | undefined
  count?: (number | null) | undefined
  nb_api_calls?: (number | null) | undefined
  billing_display_name?: (string | null) | undefined
  customer_tier?: (string | null) | undefined
  untracked?: (boolean | null) | undefined
  call_source?: (string | null) | undefined
  call_type?: (string | null) | undefined
  user_agent?: (string | null) | undefined
  resource_id?: (string | null) | undefined
  resource_version?: (string | null) | undefined
}
type UsageQueryAggregatesOUT = {
  total_value: number
  total_count: number
  total_api_calls: number
  customer_count: number
  usage_type_count: number
}
type UsageType =
  | 'usage'
  | 'codestral'
  | 'document_library'
  | 'document_library_api'
  | 'libraries_pages'
  | 'libraries_tokens'
  | 'libraries_audio'
  | 'chat'
  | 'rlhf'
  | 'ocr'
  | 'audio_seconds'
  | 'audio_characters'
  | 'audio_agents'
  | 'connectors'
  | 'workflow_executions'
  | 'skill_activations'
  | 'managed_index_storage_bytes'
  | 'managed_index_written_bytes'
  | 'managed_index_searches'
  | 'vibe'
  | 'vibe_connectors'
  | 'vibe_ocr'
  | 'vibe_audio_seconds'
  | 'vibe_audio_characters'
type AdminUsageQueryFilter = {
  field:
    | 'usage_type'
    | 'billing_metric'
    | 'billing_display_name'
    | 'billing_group'
    | 'workspace_id'
    | 'organization_id'
    | 'user_id'
    | 'service_account_id'
    | 'api_key_id'
    | 'api_zone'
    | 'service_tier'
    | 'call_source'
    | 'call_type'
    | 'user_agent'
    | 'resource_id'
    | 'resource_version'
  operator: 'is' | 'is_not'
  values: (string | null)[]
}
type UsageQueryParamsOUT = {
  usage_type?: (UsageType[] | null) | undefined
  billing_metric?: (string[] | null) | undefined
  billing_display_name?: (string[] | null) | undefined
  billing_group?: (string[] | null) | undefined
  workspace_ids?: ((string | null)[] | null) | undefined
  organization_id?: (string[] | null) | undefined
  user_id?: (string[] | null) | undefined
  service_account_id?: (string[] | null) | undefined
  api_key_id?: (string[] | null) | undefined
  api_zone?: (string[] | null) | undefined
  service_tier?: (string[] | null) | undefined
  start: string
  end: string
  customer_id?: (string | null) | undefined
  filters?: (AdminUsageQueryFilter[] | null) | undefined
  group_by?:
    | (
        | (
            | 'api_zone'
            | 'service_tier'
            | 'customer_id'
            | 'usage_type'
            | 'billing_metric'
            | 'billing_group'
            | 'billing_display_name'
            | 'workspace_id'
            | 'organization_id'
            | 'user_id'
            | 'service_account_id'
            | 'api_key_id'
            | 'untracked'
            | 'call_source'
            | 'call_type'
            | 'user_agent'
            | 'customer_tier'
            | 'resource_id'
            | 'resource_version'
          )[]
        | null
      )
    | undefined
  time_bucket?:
    | (
        | 'second'
        | '1min'
        | '5min'
        | '15min'
        | '30min'
        | 'hour'
        | '4hours'
        | 'day'
        | 'week'
        | 'month'
        | null
      )
    | undefined
  limit?: (number | null) | undefined
  offset?: (number | null) | undefined
  untracked?: (boolean | null) | undefined
  include_nb_api_calls?: boolean | undefined
}
type UsageQueryMetadataOUT = { query_params: UsageQueryParamsOUT; has_more: boolean }
type UsageQueryOUT = {
  groups: UsageQueryRowOUT[]
  aggregates?: (UsageQueryAggregatesOUT | null) | undefined
  metadata: UsageQueryMetadataOUT
}
type StaticWorkspaceRoles =
  | '48436751-ee56-44bd-8a2d-712233977821'
  | '578584f1-4319-4c88-9948-38a5184483b6'
  | '252a0825-40b9-4b98-be80-7658956f13e9'
  | '17aa61c5-1c61-477e-a40a-e52c8ccd74b9'
  | 'b23cd6e0-91cd-4a8a-9869-b30366bf3966'
  | '731eb2be-a74f-4070-b797-35bf7009e553'
type MemberWorkspaceInfo = {
  uuid: string
  name: string
  is_default: boolean
  raw_roles: StaticWorkspaceRoles[]
  raw_role: StaticWorkspaceRoles
}
type PlanType = 'API' | 'CHAT' | 'ON_PREMISE' | 'LICENSE' | 'MISTRAL_CODE'
type APIPlan = 'FREE' | 'PAY_AS_YOU_GO'
type ChatPlan = 'INDIVIDUAL' | 'EDU' | 'TEAM'
type CodePlan = 'ENTERPRISE'
type SubscriptionStatus = 'NS' | 'S' | 'IC' | 'A' | 'CF' | 'CG' | 'C' | 'PC' | 'GP'
type MemberSubscriptionOUT = {
  type: PlanType
  plan?: (APIPlan | ChatPlan | CodePlan | null) | undefined
  status?: (SubscriptionStatus | null) | undefined
  user?: (string | null) | undefined
  self_service?: (boolean | null) | undefined
  member_has_access?: (boolean | null) | undefined
}
type StaticOrganizationRoles =
  | '0d48f530-095c-43fe-8aea-6673bcacabe6'
  | 'c955f4e1-9477-43f0-8349-6fbc629fccc9'
  | '7bde5959-d676-47d2-b779-35b64323d278'
type MemberStatus = 'active' | 'deactivated' | 'blocked'
type AdminOrganizationMemberOUT = {
  uuid: string
  oid_id: string | null
  name: string | null
  email: string | null
  is_sso_outsider?: (boolean | null) | undefined
  workspaces?: (MemberWorkspaceInfo[] | null) | undefined
  subscriptions?: MemberSubscriptionOUT[] | undefined
  raw_roles: StaticOrganizationRoles[]
  raw_role: StaticOrganizationRoles
  subscription_types?: (('CHAT' | 'MISTRAL_CODE')[] | null) | undefined
  created_at: string
  last_login_at?: (string | null) | undefined
  status?: MemberStatus | undefined
  workspaces_total?: (number | null) | undefined
}
type OrganizationInviteOUT = {
  uuid: string
  raw_roles: StaticOrganizationRoles[]
  raw_role: StaticOrganizationRoles
  email: string
  expired: boolean
  created_at: string
  workspace_uuids?: string[] | undefined
}
type OrganizationAdminUsersOUT = {
  members: AdminOrganizationMemberOUT[]
  invites: OrganizationInviteOUT[]
  total: number | null
  page: number | null
  page_size: number | null
}
type UserRoleInput = 'A' | 'M' | 'B'
type StaticOrganizationRolesInput =
  | '0d48f530-095c-43fe-8aea-6673bcacabe6'
  | 'c955f4e1-9477-43f0-8349-6fbc629fccc9'
  | '7bde5959-d676-47d2-b779-35b64323d278'
type PlanTypeInput = 'API' | 'CHAT' | 'ON_PREMISE' | 'LICENSE' | 'MISTRAL_CODE'
type OrganizationMemberCreateInput = {
  role_names?: ('member' | 'billing_manager' | 'organization_admin')[] | null
  roles?: UserRoleInput[] | StaticOrganizationRolesInput[] | null
  role_name?: 'member' | 'billing_manager' | 'organization_admin' | null
  role?: UserRoleInput | StaticOrganizationRolesInput | null
  email: string
  first_name: string
  last_name: string
  subscription_types?: PlanTypeInput[] | null
}
type OrganizationUsersCreateOUT = {
  invalid_emails: string[]
  email_to_user_id: { [key: string]: string }
}
type OrganizationInviteINInput = {
  role_names?: ('member' | 'billing_manager' | 'organization_admin')[] | null
  roles?: UserRoleInput[] | StaticOrganizationRolesInput[] | null
  role_name?: 'member' | 'billing_manager' | 'organization_admin' | null
  role?: UserRoleInput | StaticOrganizationRolesInput | null
  email: string
  subscription_type?: PlanTypeInput | null
  subscription_types?: PlanTypeInput[] | null
  subscription_seat_automatic_granting?: boolean
  email_language?: 'en' | 'fr' | 'es' | 'de' | 'it' | 'pt_br' | 'pl' | 'ar' | 'nl' | 'ko' | null
  workspace_uuids?: string[] | null
}
type OrganizationInvitesCreateOUT = {
  invalid_emails: string[]
  already_members: string[]
  invited_members_count?: (number | null) | undefined
}
type OrganizationUserInviteOUT = {
  invite_uuid: string
  email: string | null
  roles: StaticOrganizationRoles[]
  role: StaticOrganizationRoles
}
type DeleteOUT = { message: string }
type AdminOrganizationMemberUpdateInput = {
  role_names?: ('member' | 'billing_manager' | 'organization_admin')[] | null
  roles?: UserRoleInput[] | StaticOrganizationRolesInput[] | null
  role_name?: 'member' | 'billing_manager' | 'organization_admin' | null
  role?: UserRoleInput | StaticOrganizationRolesInput | null
  subscription_types?: ('CHAT' | 'MISTRAL_CODE')[] | null
}
type AdminUserOUT = {
  uuid: string
  oid_id: string | null
  name: string | null
  email: string | null
  is_sso_outsider?: (boolean | null) | undefined
  workspaces?: (MemberWorkspaceInfo[] | null) | undefined
  subscriptions?: MemberSubscriptionOUT[] | undefined
  raw_roles: StaticOrganizationRoles[]
  raw_role: StaticOrganizationRoles
  subscription_types?: (('CHAT' | 'MISTRAL_CODE')[] | null) | undefined
  created_at: string
  last_login_at?: (string | null) | undefined
  status?: MemberStatus | undefined
  workspaces_total?: (number | null) | undefined
  first_name: string | null
  last_name: string | null
}
type DeactivateUserOUT = { message: string }
type ReactivateUserOUT = { message: string }
type AdminUserWorkspacesOUT = {
  items: MemberWorkspaceInfo[]
  total: number
  page: number
  page_size: number
}
type RoleOut = { name: string; uuid: string; description: string; is_custom_role: boolean }
type RolesOut = { workspace_roles: RoleOut[]; organization_roles: RoleOut[] }
type WorkspaceSpendLimitOUT = {
  value: number | null
  currency: string | null
  no_monthly_limit: boolean | null
}
type WorkspaceOUT = {
  uuid: string
  name: string
  description: string | null
  icon: string | null
  members_count?: (number | null) | undefined
  groups_count?: (number | null) | undefined
  spend_limit?: (WorkspaceSpendLimitOUT | null) | undefined
  is_default: boolean
}
type ApiObjectType = 'list'
type WorkspacesOut = {
  total: number
  items: WorkspaceOUT[]
  object?: ApiObjectType | undefined
  page: number
  page_size: number
}
type AdminWorkspaceInInput = {
  name: string
  description?: string
  icon?: string
  add_all_org_members?: boolean
  admin_user_id: string
}
type WorkspaceEnrichedOUT = {
  uuid: string
  name: string
  description: string | null
  icon: string | null
  members_count?: (number | null) | undefined
  groups_count?: (number | null) | undefined
  spend_limit?: (WorkspaceSpendLimitOUT | null) | undefined
  is_default: boolean
  raw_roles: (StaticWorkspaceRoles | StaticOrganizationRoles)[]
  raw_role: StaticWorkspaceRoles | StaticOrganizationRoles
}
type UpdateWorkspaceINInput = {
  name?: string | null
  description?: string | null
  icon?: string | null
}
type AdminWorkspaceGroupGrantOUT = {
  group_id: string
  group_name: string
  roles: (
    | 'user'
    | 'dev'
    | 'mistral_code_user'
    | 'cloud_user'
    | 'workspace_contributor'
    | 'workspace_admin'
  )[]
}
type AdminWorkspaceMemberOUT = {
  user_id: string
  name: string | null
  email: string | null
  direct_member: boolean
  roles: (
    | 'user'
    | 'dev'
    | 'mistral_code_user'
    | 'cloud_user'
    | 'workspace_contributor'
    | 'workspace_admin'
  )[]
  group_grants: AdminWorkspaceGroupGrantOUT[]
  externally_managed: boolean
  status: MemberStatus
}
type AdminWorkspaceUsersOUT = {
  items: AdminWorkspaceMemberOUT[]
  total: number
  page: number
  page_size: number
}
type StaticWorkspaceRolesInput =
  | '48436751-ee56-44bd-8a2d-712233977821'
  | '578584f1-4319-4c88-9948-38a5184483b6'
  | '252a0825-40b9-4b98-be80-7658956f13e9'
  | '17aa61c5-1c61-477e-a40a-e52c8ccd74b9'
  | 'b23cd6e0-91cd-4a8a-9869-b30366bf3966'
  | '731eb2be-a74f-4070-b797-35bf7009e553'
type WorkspaceRoleInput = 'A' | 'M'
type AdminWorkspaceMemberUpsertSingleINInput = {
  add_roles?: StaticWorkspaceRolesInput[] | null
  add_role_names?:
    | (
        | 'user'
        | 'dev'
        | 'mistral_code_user'
        | 'cloud_user'
        | 'workspace_contributor'
        | 'workspace_admin'
      )[]
    | null
  remove_roles?: StaticWorkspaceRolesInput[] | null
  remove_role_names?:
    | (
        | 'user'
        | 'dev'
        | 'mistral_code_user'
        | 'cloud_user'
        | 'workspace_contributor'
        | 'workspace_admin'
      )[]
    | null
  role_names?:
    | (
        | 'user'
        | 'dev'
        | 'mistral_code_user'
        | 'cloud_user'
        | 'workspace_contributor'
        | 'workspace_admin'
      )[]
    | null
  roles?: WorkspaceRoleInput[] | StaticWorkspaceRolesInput[] | null
  role_name?:
    | 'user'
    | 'dev'
    | 'mistral_code_user'
    | 'cloud_user'
    | 'workspace_contributor'
    | 'workspace_admin'
    | null
  role?: WorkspaceRoleInput | StaticWorkspaceRolesInput | null
  user_uuid: string
}
type AdminWorkspaceMemberUpsertINInput = {
  members?: AdminWorkspaceMemberUpsertSingleINInput[] | null
}
type AddOrUpdateUsersToWorkspaceOUT = { added_members_count: number; updated_members_count: number }
type AdminWorkspaceMemberSingleINInput = {
  role_names?:
    | (
        | 'user'
        | 'dev'
        | 'mistral_code_user'
        | 'cloud_user'
        | 'workspace_contributor'
        | 'workspace_admin'
      )[]
    | null
  roles?: WorkspaceRoleInput[] | StaticWorkspaceRolesInput[] | null
  role_name?:
    | 'user'
    | 'dev'
    | 'mistral_code_user'
    | 'cloud_user'
    | 'workspace_contributor'
    | 'workspace_admin'
    | null
  role?: WorkspaceRoleInput | StaticWorkspaceRolesInput | null
  user_uuid: string
}
type AdminWorkspaceMemberINInput = { members?: AdminWorkspaceMemberSingleINInput[] | null }
type AddUsersToWorkspaceOUT = { added_members_count: number }
type BaseWorkspaceMemberINInput = { user_uuid: string }
type RemoveWorkspaceMembersINInput = { members: BaseWorkspaceMemberINInput[] }
type RemoveWorkspaceMembersOUT = {
  deleted_members_count: number
  not_deleted_members?: (string[] | null) | undefined
}
type TokenLimitsByModel = { tokens_per_minute: number; tokens_per_month: number }
type RateLimitsOUT = {
  requests_per_second: number
  tokens_limits_by_model: { [key: string]: TokenLimitsByModel }
}
type UsageLimits = {
  no_monthly_limit?: boolean | undefined
  monthly_limit_reached: boolean
  usage?: (number | null) | undefined
  vibe_usage?: (number | null) | undefined
  total_usage?: (number | null) | undefined
  usage_limit?: (number | null) | undefined
}
type LimitsContext = {
  completion: UsageLimits
  last_payment_failure: boolean
  last_payment_failure_protection: boolean | null
  currency: string
}
type LimitsOUT = { limits: LimitsContext }
type NewUsageLimitINInput = { amount: number; no_monthly_limit?: boolean }
type BasicModelUsageDataJSON = {
  models: { [key: string]: { [key: string]: { [key: string]: unknown }[] } }
}
type LibrariesAPIUsageDataJSON = {
  pages: BasicModelUsageDataJSON
  tokens: BasicModelUsageDataJSON
  audio_seconds: BasicModelUsageDataJSON
}
type FineTuningDataJSON = {
  training: { [key: string]: { [key: string]: { [key: string]: unknown }[] } }
  storage: { [key: string]: number }
}
type VibeCodeUsageDataJSON = {
  completion: BasicModelUsageDataJSON
  ocr: BasicModelUsageDataJSON
  connectors: BasicModelUsageDataJSON
  audio: BasicModelUsageDataJSON
  audio_characters: BasicModelUsageDataJSON
}
type LagoEventType =
  | 'api_tokens'
  | 'api_pages'
  | 'api_audio_seconds'
  | 'api_audio_characters'
  | 'api_connectors'
  | 'api_libraries_tokens'
  | 'api_libraries_pages'
  | 'api_libraries_audio'
  | 'api_managed_index_storage_bytes'
  | 'api_managed_index_written_bytes'
  | 'api_managed_index_searches'
  | 'deployment_tokens'
  | 'gpu_hour'
  | 'reserved_instance'
  | 'vibe_tokens'
  | 'vibe_connectors'
  | 'vibe_pages'
  | 'vibe_audio_seconds'
  | 'vibe_audio_characters'
type ApiZone = 'global' | 'us' | 'eu'
type ServiceTier = 'standard' | 'priority'
type PriceData = {
  event_type: LagoEventType | null
  billing_metric: string
  billing_group: string
  api_zone: ApiZone
  service_tier: ServiceTier
  price: number | string
}
type UsageOUTJSON = {
  completion: BasicModelUsageDataJSON
  ocr: BasicModelUsageDataJSON
  connectors: BasicModelUsageDataJSON
  libraries_api: LibrariesAPIUsageDataJSON
  fine_tuning: FineTuningDataJSON
  audio: BasicModelUsageDataJSON
  audio_characters: BasicModelUsageDataJSON
  audio_agents: BasicModelUsageDataJSON
  vibe_usage: number
  vibe_code: VibeCodeUsageDataJSON
  chat: BasicModelUsageDataJSON
  date: string
  previous_month: string | null
  next_month: string | null
  start_date: string
  end_date: string
  currency: string | null
  currency_symbol: string | null
  prices: PriceData[] | null
}
type ActorTypeInput = 'HUMAN' | 'API_KEY' | 'ADMIN_API_KEY' | 'SERVICE_ACCOUNT' | 'OTHER'
type AuditLogEventTypeInput =
  | 'user.create'
  | 'user.delete'
  | 'user.log_in'
  | 'user.info.update'
  | 'user.password.update'
  | 'user.phone_number.verify'
  | 'user.deactivate'
  | 'user.reactivate'
  | 'user.organization.leave'
  | 'user.organization.role.update'
  | 'user.organization.delete'
  | 'user.organization.join'
  | 'organization.create'
  | 'organization.delete'
  | 'organization.update'
  | 'organization.members.export'
  | 'organization.invite.send'
  | 'organization.invite.resend'
  | 'organization.invite.accepted'
  | 'organization.invite.revoked'
  | 'organization.join_by_email_domain'
  | 'organization.domain_verification.disable'
  | 'organization.domain_verification.enable'
  | 'organization.email_domain_authentication.enable'
  | 'organization.email_domain_authentication.disable'
  | 'organization.saml_authentication.enable'
  | 'organization.saml_authentication.disable'
  | 'organization.saml_authentication.sso_user_provisioning.update'
  | 'organization.scim_sync.trigger'
  | 'organization.scim.secret.rotate'
  | 'organization.seat_auto_assign.enable'
  | 'organization.seat_auto_assign.disable'
  | 'organization.kind.update'
  | 'organization.sso_seat_auto_assign.enable'
  | 'organization.sso_seat_auto_assign.disable'
  | 'workspace.create'
  | 'workspace.update'
  | 'workspace.delete'
  | 'workspace.members.export'
  | 'workspace.member.add'
  | 'workspace.member.remove'
  | 'workspace.member.role.update'
  | 'user_group.create'
  | 'user_group.update'
  | 'user_group.delete'
  | 'user_group.member.add'
  | 'user_group.member.remove'
  | 'user_group.workspace.provision'
  | 'user_group.workspace.deprovision'
  | 'user_group.workspace.update'
  | 'billing.information.updated'
  | 'billing.payment_method.added'
  | 'billing.payment_method.removed'
  | 'billing.payment_method.default_changed'
  | 'billing.invoice.retried'
  | 'billing.subscription.subscribe'
  | 'billing.subscription.unsubscribe'
  | 'billing.subscription.cancel_unsubscribe'
  | 'billing.subscription.add_seats'
  | 'billing.subscription.remove_seats'
  | 'billing.subscription.termination_date.updated'
  | 'billing.credits.added'
  | 'billing.gift_code.used'
  | 'billing.credit_coupon.used'
  | 'billing.subscription_coupon.used'
  | 'billing.monthly_limit.updated'
  | 'billing.workspace_monthly_limit.updated'
  | 'billing.shared_budget_override.updated'
  | 'billing.spending_limit.created'
  | 'billing.spending_limit.updated'
  | 'billing.spending_limit.deleted'
  | 'billing.auto_recharge.updated'
  | 'billing.seat.grant'
  | 'billing.seat.revoke'
  | 'billing.priority_service_tier.updated'
  | 'billing.priority_service_tier.removed'
  | 'le_chat.conversation.created'
  | 'le_chat.temporary_conversation.created'
  | 'le_chat.temporary_conversation.converted'
  | 'le_chat.conversation.deleted'
  | 'le_chat.conversation_batch.deleted'
  | 'le_chat.conversation.public_sharing.enabled'
  | 'le_chat.conversation.public_sharing.disabled'
  | 'le_chat.flash_answers.enabled'
  | 'le_chat.flash_answers.disabled'
  | 'le_chat.localisation_sharing.enabled'
  | 'le_chat.localisation_sharing.disabled'
  | 'le_chat.memories.enabled'
  | 'le_chat.memories.disabled'
  | 'le_chat.data.training_enabled'
  | 'le_chat.data.training_disabled'
  | 'le_chat.actions.external_link'
  | 'admin_api_key.created'
  | 'admin_api_key.delete'
  | 'api_key.create'
  | 'api_key.rotate'
  | 'api_key.delete'
  | 'api_key_policy.update'
  | 'secret_store.entry.create'
  | 'secret_store.entry.update'
  | 'secret_store.entry.delete'
  | 'service_account.create'
  | 'service_account.update'
  | 'service_account.delete'
  | 'service_account.client_secret.create'
  | 'service_account.client_secret.delete'
  | 'service_account.roles.set'
  | 'workload_identity.credential_registration.create'
  | 'workload_identity.credential.create'
  | 'trusted_issuer.create'
  | 'trusted_issuer.update'
  | 'trusted_issuer.delete'
  | 'agent.create'
  | 'agent.delete'
  | 'agent.update'
  | 'skill.create'
  | 'skill.delete'
  | 'skill.enable'
  | 'skill.disable'
  | 'skill.update'
  | 'skill.share'
  | 'skill.unshare'
  | 'skill.load'
  | 'skill.force_load'
  | 'skill.version.create'
  | 'plugin.create'
  | 'plugin.update'
  | 'plugin.delete'
  | 'prompt.create'
  | 'prompt.delete'
  | 'prompt.update'
  | 'prompt.version.create'
  | 'knowledge_base.create'
  | 'knowledge_base.delete'
  | 'knowledge_base.update'
  | 'knowledge_base.load'
  | 'knowledge_base.version.create'
  | 'custom_voice.create'
  | 'custom_voice.update'
  | 'custom_voice.delete'
  | 'capability_registry.create'
  | 'capability_registry.default_workspace_access.enable'
  | 'capability_registry.default_workspace_access.disable'
  | 'capability_registry.workspace_access.enable'
  | 'capability_registry.workspace_access.disable'
  | 'capability_registry.workspace_access.remove'
  | 'capability.version.create'
  | 'capability.version.disable'
  | 'capability.version.enable'
  | 'capability.disable'
  | 'capability.enable'
  | 'feature_permission.override.created'
  | 'feature_permission.override.deleted'
  | 'resource.share'
  | 'resource.unshare'
  | 'la_plateforme.training.enabled'
  | 'la_plateforme.training.disabled'
  | 'cloud_runtime.app.created'
  | 'cloud_runtime.app.updated'
  | 'cloud_runtime.app.deleted'
  | 'cloud_runtime.app.paused'
  | 'cloud_runtime.app.resumed'
  | 'cloud_runtime.deployment.created'
  | 'cloud_runtime.deployment.succeeded'
  | 'cloud_runtime.deployment.canceled'
  | 'cloud_runtime.deployment.stopped'
  | 'cloud_runtime.deployment.failed'
  | 'cloud_runtime.deployment.autoscaled'
  | 'cloud_runtime.domain.created'
  | 'cloud_runtime.domain.updated'
  | 'cloud_runtime.domain.deleted'
  | 'cloud_runtime.secret.created'
  | 'cloud_runtime.secret.updated'
  | 'cloud_runtime.secret.deleted'
  | 'cloud_runtime.service.created'
  | 'cloud_runtime.service.paused'
  | 'cloud_runtime.service.resumed'
  | 'cloud_runtime.service.deleted'
  | 'cloud_runtime.service.manually_scaled'
  | 'cloud_runtime.service.manual_scaling_deleted'
  | 'cloud_runtime.persistent_volume.created'
  | 'cloud_runtime.persistent_volume.deleted'
  | 'cloud_runtime.persistent_volume.attached'
  | 'cloud_runtime.persistent_volume.detached'
  | 'fine_tuning_job.create'
  | 'fine_tuning_job.cancel'
  | 'batch_job.create'
  | 'batch_job.cancel'
  | 'batch_job.delete'
  | 'data_capture.extract_job.create'
  | 'data_capture.extract_job.cancel'
  | 'dataset.create'
  | 'dataset.delete'
  | 'library.create'
  | 'library.delete'
  | 'library.update'
  | 'library.share'
  | 'library.unshare'
  | 'library.document.create'
  | 'library.document.delete'
  | 'library.document.bulk_delete'
  | 'library.document.update'
  | 'library.document.reprocess'
  | 'integration.connected'
  | 'integration.disconnected'
  | 'indexing.workflow.completed'
  | 'indexing.deleted'
  | 'connection.admin.setup_index'
  | 'connection.admin.deleted'
  | 'integration.activated_for_org'
  | 'integration.deactivated_for_org'
  | 'integration.activated_for_workspace'
  | 'integration.deactivated_for_workspace'
  | 'integration.activated_for_user'
  | 'integration.deactivated_for_user'
  | 'integration.created'
  | 'integration.updated'
  | 'integration.deleted'
  | 'integration.tool_called'
  | 'integration.tool_activated'
  | 'integration.tool_deactivated'
  | 'integration.credentials.created_or_updated'
  | 'integration.credentials.deleted'
  | 'integration.credentials.revoked'
  | 'integration.credentials.revocation_failed'
  | 'integration.preferences.created_or_updated'
  | 'integration.preferences.deleted'
  | 'integration.authentication_method.created_or_updated'
  | 'integration.connection.created'
  | 'integration.shared'
  | 'integration.unshared'
  | 'connectors_gateway.tool_called'
  | 'connectors_debugger.tool_called'
  | 'crawler.config.create'
  | 'crawler.config.update'
  | 'crawler.config.delete'
  | 'crawler.run.create'
  | 'crawler.run.cancel'
  | 'web_search.filter_config.update'
  | 'web_search.filter_domain.add'
  | 'web_search.filter_domain.remove'
  | 'web_filters.config.update'
  | 'web_filters.domain.add'
  | 'web_filters.domain.remove'
  | 'secrets_manager.secret.created'
  | 'secrets_manager.secret.updated'
  | 'secrets_manager.secret.revealed'
  | 'secrets_manager.secret.metadata_updated'
  | 'secrets_manager.secret.deleted'
  | 'secrets_manager.secret.destroyed'
  | 'secrets_manager.secret.version.deleted'
  | 'secrets_manager.secret.version.restored'
  | 'rate_limit.rule.create'
  | 'rate_limit.rule.update'
  | 'rate_limit.rule.delete'
  | 'workflow.execution.started'
  | 'workflow.execution.canceled'
  | 'workflow.execution.terminated'
  | 'workflow.execution.completed'
  | 'workflow.execution.failed'
  | 'workflow.execution.signal'
  | 'workflow.execution.query'
  | 'workflow.execution.update'
  | 'workflow.worker.registered'
  | 'workflow.schedule.created'
  | 'workflow.schedule.updated'
  | 'workflow.schedule.paused'
  | 'workflow.schedule.resumed'
  | 'workflow.schedule.deleted'
  | 'workflow.schedule.triggered'
  | 'workflow.archived'
  | 'workflow.unarchived'
  | 'workflow.deployment.authorized_credential.granted'
  | 'workflow.deployment.authorized_credential.revoked'
  | 'workflow.managed_deployment.created'
  | 'workflow.managed_deployment.updated'
  | 'workflow.managed_deployment.stopped'
  | 'workflow.managed_deployment.started'
  | 'workflow.managed_deployment.restarted'
  | 'workflow.managed_deployment.deleted'
  | 'workflow.managed_deployment.credential.provisioned'
  | 'workflow.managed_deployment.credential.revoked'
  | 'workflow.managed_deployment.status.changed'
type TargetTypeInput =
  | 'USER'
  | 'USER_GROUP'
  | 'ORGANIZATION'
  | 'WORKSPACE'
  | 'API_KEY'
  | 'ADMIN_API_KEY'
  | 'API_KEY_POLICY'
  | 'SERVICE_ACCOUNT'
  | 'AGENT'
  | 'SKILL'
  | 'PLUGIN'
  | 'PROMPT'
  | 'KNOWLEDGE_BASE'
  | 'CUSTOM_VOICE'
  | 'CAPABILITY_REGISTRY'
  | 'CAPABILITY'
  | 'DATASET'
  | 'FINE_TUNING_JOB'
  | 'BATCH_JOB'
  | 'DATA_CAPTURE_EXTRACT_JOB'
  | 'LE_CHAT_CONVERSATION'
  | 'LE_CHAT_MEMORIES'
  | 'LE_CHAT_FLASH_ANSWERS'
  | 'LE_CHAT_LOCALISATION'
  | 'LE_CHAT_DATA'
  | 'INVOICE'
  | 'WALLET'
  | 'MONTHLY_LIMIT'
  | 'WORKSPACE_MONTHLY_LIMIT'
  | 'SPENDING_LIMIT'
  | 'SHARED_BUDGET'
  | 'AUTO_RECHARGE'
  | 'PAYMENT_METHOD'
  | 'SUBSCRIPTION'
  | 'BILLING_INFO'
  | 'LIBRARY'
  | 'LIBRARY_DOCUMENT'
  | 'INTEGRATION'
  | 'CONNECTORS_GATEWAY'
  | 'CONNECTORS_DEBUGGER'
  | 'FEATURE_PERMISSION'
  | 'SECRET_STORE_ENTRY'
  | 'CRAWLER_CONFIG'
  | 'WEB_SEARCH_FILTER'
  | 'WEB_FILTERS'
  | 'SHARED_RESOURCE'
  | 'RATE_LIMIT_RULE'
  | 'APP'
  | 'DEPLOYMENT'
  | 'DOMAIN'
  | 'PERSISTENT_VOLUME'
  | 'SECRET'
  | 'SERVICE'
  | 'TRUSTED_ISSUER'
  | 'WORKFLOW'
  | 'SCHEDULE'
type ActorType = 'HUMAN' | 'API_KEY' | 'ADMIN_API_KEY' | 'SERVICE_ACCOUNT' | 'OTHER'
type AuditLogEventType =
  | 'user.create'
  | 'user.delete'
  | 'user.log_in'
  | 'user.info.update'
  | 'user.password.update'
  | 'user.phone_number.verify'
  | 'user.deactivate'
  | 'user.reactivate'
  | 'user.organization.leave'
  | 'user.organization.role.update'
  | 'user.organization.delete'
  | 'user.organization.join'
  | 'organization.create'
  | 'organization.delete'
  | 'organization.update'
  | 'organization.members.export'
  | 'organization.invite.send'
  | 'organization.invite.resend'
  | 'organization.invite.accepted'
  | 'organization.invite.revoked'
  | 'organization.join_by_email_domain'
  | 'organization.domain_verification.disable'
  | 'organization.domain_verification.enable'
  | 'organization.email_domain_authentication.enable'
  | 'organization.email_domain_authentication.disable'
  | 'organization.saml_authentication.enable'
  | 'organization.saml_authentication.disable'
  | 'organization.saml_authentication.sso_user_provisioning.update'
  | 'organization.scim_sync.trigger'
  | 'organization.scim.secret.rotate'
  | 'organization.seat_auto_assign.enable'
  | 'organization.seat_auto_assign.disable'
  | 'organization.kind.update'
  | 'organization.sso_seat_auto_assign.enable'
  | 'organization.sso_seat_auto_assign.disable'
  | 'workspace.create'
  | 'workspace.update'
  | 'workspace.delete'
  | 'workspace.members.export'
  | 'workspace.member.add'
  | 'workspace.member.remove'
  | 'workspace.member.role.update'
  | 'user_group.create'
  | 'user_group.update'
  | 'user_group.delete'
  | 'user_group.member.add'
  | 'user_group.member.remove'
  | 'user_group.workspace.provision'
  | 'user_group.workspace.deprovision'
  | 'user_group.workspace.update'
  | 'billing.information.updated'
  | 'billing.payment_method.added'
  | 'billing.payment_method.removed'
  | 'billing.payment_method.default_changed'
  | 'billing.invoice.retried'
  | 'billing.subscription.subscribe'
  | 'billing.subscription.unsubscribe'
  | 'billing.subscription.cancel_unsubscribe'
  | 'billing.subscription.add_seats'
  | 'billing.subscription.remove_seats'
  | 'billing.subscription.termination_date.updated'
  | 'billing.credits.added'
  | 'billing.gift_code.used'
  | 'billing.credit_coupon.used'
  | 'billing.subscription_coupon.used'
  | 'billing.monthly_limit.updated'
  | 'billing.workspace_monthly_limit.updated'
  | 'billing.shared_budget_override.updated'
  | 'billing.spending_limit.created'
  | 'billing.spending_limit.updated'
  | 'billing.spending_limit.deleted'
  | 'billing.auto_recharge.updated'
  | 'billing.seat.grant'
  | 'billing.seat.revoke'
  | 'billing.priority_service_tier.updated'
  | 'billing.priority_service_tier.removed'
  | 'le_chat.conversation.created'
  | 'le_chat.temporary_conversation.created'
  | 'le_chat.temporary_conversation.converted'
  | 'le_chat.conversation.deleted'
  | 'le_chat.conversation_batch.deleted'
  | 'le_chat.conversation.public_sharing.enabled'
  | 'le_chat.conversation.public_sharing.disabled'
  | 'le_chat.flash_answers.enabled'
  | 'le_chat.flash_answers.disabled'
  | 'le_chat.localisation_sharing.enabled'
  | 'le_chat.localisation_sharing.disabled'
  | 'le_chat.memories.enabled'
  | 'le_chat.memories.disabled'
  | 'le_chat.data.training_enabled'
  | 'le_chat.data.training_disabled'
  | 'le_chat.actions.external_link'
  | 'admin_api_key.created'
  | 'admin_api_key.delete'
  | 'api_key.create'
  | 'api_key.rotate'
  | 'api_key.delete'
  | 'api_key_policy.update'
  | 'secret_store.entry.create'
  | 'secret_store.entry.update'
  | 'secret_store.entry.delete'
  | 'service_account.create'
  | 'service_account.update'
  | 'service_account.delete'
  | 'service_account.client_secret.create'
  | 'service_account.client_secret.delete'
  | 'service_account.roles.set'
  | 'workload_identity.credential_registration.create'
  | 'workload_identity.credential.create'
  | 'trusted_issuer.create'
  | 'trusted_issuer.update'
  | 'trusted_issuer.delete'
  | 'agent.create'
  | 'agent.delete'
  | 'agent.update'
  | 'skill.create'
  | 'skill.delete'
  | 'skill.enable'
  | 'skill.disable'
  | 'skill.update'
  | 'skill.share'
  | 'skill.unshare'
  | 'skill.load'
  | 'skill.force_load'
  | 'skill.version.create'
  | 'plugin.create'
  | 'plugin.update'
  | 'plugin.delete'
  | 'prompt.create'
  | 'prompt.delete'
  | 'prompt.update'
  | 'prompt.version.create'
  | 'knowledge_base.create'
  | 'knowledge_base.delete'
  | 'knowledge_base.update'
  | 'knowledge_base.load'
  | 'knowledge_base.version.create'
  | 'custom_voice.create'
  | 'custom_voice.update'
  | 'custom_voice.delete'
  | 'capability_registry.create'
  | 'capability_registry.default_workspace_access.enable'
  | 'capability_registry.default_workspace_access.disable'
  | 'capability_registry.workspace_access.enable'
  | 'capability_registry.workspace_access.disable'
  | 'capability_registry.workspace_access.remove'
  | 'capability.version.create'
  | 'capability.version.disable'
  | 'capability.version.enable'
  | 'capability.disable'
  | 'capability.enable'
  | 'feature_permission.override.created'
  | 'feature_permission.override.deleted'
  | 'resource.share'
  | 'resource.unshare'
  | 'la_plateforme.training.enabled'
  | 'la_plateforme.training.disabled'
  | 'cloud_runtime.app.created'
  | 'cloud_runtime.app.updated'
  | 'cloud_runtime.app.deleted'
  | 'cloud_runtime.app.paused'
  | 'cloud_runtime.app.resumed'
  | 'cloud_runtime.deployment.created'
  | 'cloud_runtime.deployment.succeeded'
  | 'cloud_runtime.deployment.canceled'
  | 'cloud_runtime.deployment.stopped'
  | 'cloud_runtime.deployment.failed'
  | 'cloud_runtime.deployment.autoscaled'
  | 'cloud_runtime.domain.created'
  | 'cloud_runtime.domain.updated'
  | 'cloud_runtime.domain.deleted'
  | 'cloud_runtime.secret.created'
  | 'cloud_runtime.secret.updated'
  | 'cloud_runtime.secret.deleted'
  | 'cloud_runtime.service.created'
  | 'cloud_runtime.service.paused'
  | 'cloud_runtime.service.resumed'
  | 'cloud_runtime.service.deleted'
  | 'cloud_runtime.service.manually_scaled'
  | 'cloud_runtime.service.manual_scaling_deleted'
  | 'cloud_runtime.persistent_volume.created'
  | 'cloud_runtime.persistent_volume.deleted'
  | 'cloud_runtime.persistent_volume.attached'
  | 'cloud_runtime.persistent_volume.detached'
  | 'fine_tuning_job.create'
  | 'fine_tuning_job.cancel'
  | 'batch_job.create'
  | 'batch_job.cancel'
  | 'batch_job.delete'
  | 'data_capture.extract_job.create'
  | 'data_capture.extract_job.cancel'
  | 'dataset.create'
  | 'dataset.delete'
  | 'library.create'
  | 'library.delete'
  | 'library.update'
  | 'library.share'
  | 'library.unshare'
  | 'library.document.create'
  | 'library.document.delete'
  | 'library.document.bulk_delete'
  | 'library.document.update'
  | 'library.document.reprocess'
  | 'integration.connected'
  | 'integration.disconnected'
  | 'indexing.workflow.completed'
  | 'indexing.deleted'
  | 'connection.admin.setup_index'
  | 'connection.admin.deleted'
  | 'integration.activated_for_org'
  | 'integration.deactivated_for_org'
  | 'integration.activated_for_workspace'
  | 'integration.deactivated_for_workspace'
  | 'integration.activated_for_user'
  | 'integration.deactivated_for_user'
  | 'integration.created'
  | 'integration.updated'
  | 'integration.deleted'
  | 'integration.tool_called'
  | 'integration.tool_activated'
  | 'integration.tool_deactivated'
  | 'integration.credentials.created_or_updated'
  | 'integration.credentials.deleted'
  | 'integration.credentials.revoked'
  | 'integration.credentials.revocation_failed'
  | 'integration.preferences.created_or_updated'
  | 'integration.preferences.deleted'
  | 'integration.authentication_method.created_or_updated'
  | 'integration.connection.created'
  | 'integration.shared'
  | 'integration.unshared'
  | 'connectors_gateway.tool_called'
  | 'connectors_debugger.tool_called'
  | 'crawler.config.create'
  | 'crawler.config.update'
  | 'crawler.config.delete'
  | 'crawler.run.create'
  | 'crawler.run.cancel'
  | 'web_search.filter_config.update'
  | 'web_search.filter_domain.add'
  | 'web_search.filter_domain.remove'
  | 'web_filters.config.update'
  | 'web_filters.domain.add'
  | 'web_filters.domain.remove'
  | 'secrets_manager.secret.created'
  | 'secrets_manager.secret.updated'
  | 'secrets_manager.secret.revealed'
  | 'secrets_manager.secret.metadata_updated'
  | 'secrets_manager.secret.deleted'
  | 'secrets_manager.secret.destroyed'
  | 'secrets_manager.secret.version.deleted'
  | 'secrets_manager.secret.version.restored'
  | 'rate_limit.rule.create'
  | 'rate_limit.rule.update'
  | 'rate_limit.rule.delete'
  | 'workflow.execution.started'
  | 'workflow.execution.canceled'
  | 'workflow.execution.terminated'
  | 'workflow.execution.completed'
  | 'workflow.execution.failed'
  | 'workflow.execution.signal'
  | 'workflow.execution.query'
  | 'workflow.execution.update'
  | 'workflow.worker.registered'
  | 'workflow.schedule.created'
  | 'workflow.schedule.updated'
  | 'workflow.schedule.paused'
  | 'workflow.schedule.resumed'
  | 'workflow.schedule.deleted'
  | 'workflow.schedule.triggered'
  | 'workflow.archived'
  | 'workflow.unarchived'
  | 'workflow.deployment.authorized_credential.granted'
  | 'workflow.deployment.authorized_credential.revoked'
  | 'workflow.managed_deployment.created'
  | 'workflow.managed_deployment.updated'
  | 'workflow.managed_deployment.stopped'
  | 'workflow.managed_deployment.started'
  | 'workflow.managed_deployment.restarted'
  | 'workflow.managed_deployment.deleted'
  | 'workflow.managed_deployment.credential.provisioned'
  | 'workflow.managed_deployment.credential.revoked'
  | 'workflow.managed_deployment.status.changed'
type TargetType =
  | 'USER'
  | 'USER_GROUP'
  | 'ORGANIZATION'
  | 'WORKSPACE'
  | 'API_KEY'
  | 'ADMIN_API_KEY'
  | 'API_KEY_POLICY'
  | 'SERVICE_ACCOUNT'
  | 'AGENT'
  | 'SKILL'
  | 'PLUGIN'
  | 'PROMPT'
  | 'KNOWLEDGE_BASE'
  | 'CUSTOM_VOICE'
  | 'CAPABILITY_REGISTRY'
  | 'CAPABILITY'
  | 'DATASET'
  | 'FINE_TUNING_JOB'
  | 'BATCH_JOB'
  | 'DATA_CAPTURE_EXTRACT_JOB'
  | 'LE_CHAT_CONVERSATION'
  | 'LE_CHAT_MEMORIES'
  | 'LE_CHAT_FLASH_ANSWERS'
  | 'LE_CHAT_LOCALISATION'
  | 'LE_CHAT_DATA'
  | 'INVOICE'
  | 'WALLET'
  | 'MONTHLY_LIMIT'
  | 'WORKSPACE_MONTHLY_LIMIT'
  | 'SPENDING_LIMIT'
  | 'SHARED_BUDGET'
  | 'AUTO_RECHARGE'
  | 'PAYMENT_METHOD'
  | 'SUBSCRIPTION'
  | 'BILLING_INFO'
  | 'LIBRARY'
  | 'LIBRARY_DOCUMENT'
  | 'INTEGRATION'
  | 'CONNECTORS_GATEWAY'
  | 'CONNECTORS_DEBUGGER'
  | 'FEATURE_PERMISSION'
  | 'SECRET_STORE_ENTRY'
  | 'CRAWLER_CONFIG'
  | 'WEB_SEARCH_FILTER'
  | 'WEB_FILTERS'
  | 'SHARED_RESOURCE'
  | 'RATE_LIMIT_RULE'
  | 'APP'
  | 'DEPLOYMENT'
  | 'DOMAIN'
  | 'PERSISTENT_VOLUME'
  | 'SECRET'
  | 'SERVICE'
  | 'TRUSTED_ISSUER'
  | 'WORKFLOW'
  | 'SCHEDULE'
type AuditLogOut = {
  created_at: string
  actor_type: ActorType
  actor_metadata: { [key: string]: string }
  event_type: AuditLogEventType
  event_metadata: { [key: string]: string }
  target_type: TargetType
  target_metadata: { [key: string]: string }
  log_id: number
  organization_uuid?: (string | null) | undefined
  workspace_uuid?: (string | null) | undefined
}
type AdminUserGroupOut = {
  uuid: string
  name: string
  description: string | null
  externally_managed?: (boolean | null) | undefined
  organization_role?: (string | null) | undefined
}
type AdminUserGroupsOut = {
  total: number
  items: AdminUserGroupOut[]
  page: number
  page_size: number
}
type AdminUserGroupInInput = { name: string; description?: string | null }
type AdminProvisionGroupToWorkspaceInInput = {
  user_group_uuid: string
  workspace_uuid: string
  workspace_role?: WorkspaceRoleInput | StaticWorkspaceRolesInput | null
  workspace_role_name?:
    | 'user'
    | 'dev'
    | 'mistral_code_user'
    | 'cloud_user'
    | 'workspace_contributor'
    | 'workspace_admin'
    | null
}
type AdminUpdateUserGroupInInput = { name?: string | null; description?: string | null }
type AdminUserGroupMemberOut = { user_uuid: string; name: string | null; email: string | null }
type AdminUserGroupMembersOut = {
  total: number
  members: AdminUserGroupMemberOut[]
  page: number
  page_size: number
}
type AdminAssignUsersToGroupInInput = { user_uuids: string[] }
type WorkspaceRoleRef = { name: string; uuid: string }
type GroupWorkspaceAssignmentOut = {
  roles: WorkspaceRoleRef[]
  role_uuid?: (string | null) | undefined
  role_name?: (string | null) | undefined
  workspace_uuid: string
  workspace_name: string
  created: string
}
type GroupWorkspaceAssignmentsOut = {
  total: number
  items: GroupWorkspaceAssignmentOut[]
  page: number
  page_size: number
}
type AdminAssignGroupToWorkspaceInInput = {
  role_names?:
    | (
        | 'user'
        | 'dev'
        | 'mistral_code_user'
        | 'cloud_user'
        | 'workspace_contributor'
        | 'workspace_admin'
      )[]
    | null
  roles?: (WorkspaceRoleInput | StaticWorkspaceRolesInput)[] | null
  role?: WorkspaceRoleInput | StaticWorkspaceRolesInput | null
  workspace_uuid: string
}
type AdminUpdateGroupWorkspaceAssignmentInInput = {
  add_roles?: StaticWorkspaceRolesInput[] | null
  add_role_names?:
    | (
        | 'user'
        | 'dev'
        | 'mistral_code_user'
        | 'cloud_user'
        | 'workspace_contributor'
        | 'workspace_admin'
      )[]
    | null
  remove_roles?: StaticWorkspaceRolesInput[] | null
  remove_role_names?:
    | (
        | 'user'
        | 'dev'
        | 'mistral_code_user'
        | 'cloud_user'
        | 'workspace_contributor'
        | 'workspace_admin'
      )[]
    | null
  role_names?:
    | (
        | 'user'
        | 'dev'
        | 'mistral_code_user'
        | 'cloud_user'
        | 'workspace_contributor'
        | 'workspace_admin'
      )[]
    | null
  roles?: (WorkspaceRoleInput | StaticWorkspaceRolesInput)[] | null
  role?: WorkspaceRoleInput | StaticWorkspaceRolesInput | null
}
type AdminUpdateUserGroupOrganizationRoleInInput = {
  organization_role:
    | 'member'
    | 'billing_manager'
    | 'organization_admin'
    | UserRoleInput
    | StaticOrganizationRolesInput
}
type ActionAvailable = { status?: 'available' | undefined }
type RotateUnavailableReason = 'unsupported_scope' | 'key_expired' | 'not_allowed'
type ActionUnavailableRotateUnavailableReason = {
  status?: 'unavailable' | undefined
  reason?: (RotateUnavailableReason | null) | undefined
}
type DeleteUnavailableReason = 'not_allowed'
type ActionUnavailableDeleteUnavailableReason = {
  status?: 'unavailable' | undefined
  reason?: (DeleteUnavailableReason | null) | undefined
}
type APIKeyActions = {
  rotate?: ((ActionAvailable | ActionUnavailableRotateUnavailableReason) | null) | undefined
  delete?: ((ActionAvailable | ActionUnavailableDeleteUnavailableReason) | null) | undefined
}
type APIKeyProduct = 'API' | 'Mistral Code' | 'Vibe'
type APIKeyExtendedOUT = {
  key_id: string
  key: string | null
  name: string | null
  hidden_key: string
  created_at: string | null
  expiration_date: string | null
  actions: APIKeyActions
  workspace_id: string | null
  workspace_name: string | null
  created_by: string | null
  user_id?: (string | null) | undefined
  service_account_id?: (string | null) | undefined
  product: APIKeyProduct | null
  last_used: string | null
  can_delete: boolean | null
}
type APIKeysExtendedOUT = { keys: APIKeyExtendedOUT[] }
type AdminCreateAPIKeyINInput = {
  name?: string | null
  expiration?: string | null
  workspace_uuid: string
  user_id: string
}
type APIKeyOUT = {
  key_id: string
  key: string | null
  name: string | null
  hidden_key: string
  created_at: string | null
  expiration_date: string | null
  actions: APIKeyActions
}
type DeleteAPIKeyOUT = { detail: string }
type AdminScimSyncConfigInput = {
  delete_missing_groups?: boolean
  deprovision_users?: boolean
  sync_users: boolean
  sync_groups: boolean
  sync_memberships: boolean
}
type AdminScimSyncTriggerINInput = {
  dry_run?: boolean
  sync_config?: AdminScimSyncConfigInput | null
}
type AdminScimSyncTriggerOUT = { run_id: string }
type ScimSyncRunStatus = 'PENDING' | 'RUNNING' | 'SUCCESS' | 'SKIPPED' | 'FAILED'
type AdminScimSyncActiveRunOUT = { run_id: string; status: ScimSyncRunStatus }
type AdminScimSyncConfig = {
  delete_missing_groups?: boolean | undefined
  deprovision_users?: boolean | undefined
  sync_users: boolean
  sync_groups: boolean
  sync_memberships: boolean
}
type ScimSyncUserRefOut = { uuid: string; userName?: string | undefined }
type ScimSyncUserActionOut = { user: ScimSyncUserRefOut }
type ScimSyncUsersSummaryOut = {
  provision: ScimSyncUserActionOut[]
  deprovision: ScimSyncUserActionOut[]
}
type ScimSyncGroupRefOut = { uuid: string; groupName: string }
type ScimSyncGroupActionOut = { group: ScimSyncGroupRefOut }
type ScimSyncGroupUpdateActionOut = { group: ScimSyncGroupRefOut; previous_groupName: string }
type ScimSyncGroupsSummaryOut = {
  create: ScimSyncGroupActionOut[]
  update: ScimSyncGroupUpdateActionOut[]
  delete: ScimSyncGroupActionOut[]
}
type ScimSyncMembershipActionOut = {
  group: ScimSyncGroupRefOut
  users_added: ScimSyncUserRefOut[]
  users_removed: ScimSyncUserRefOut[]
}
type ScimSyncSummaryOut = {
  users: ScimSyncUsersSummaryOut
  groups: ScimSyncGroupsSummaryOut
  memberships: ScimSyncMembershipActionOut[]
}
type AdminScimSyncRunOUT = {
  run_id: string
  status: ScimSyncRunStatus
  dry_run: boolean
  sync_config: AdminScimSyncConfig | null
  created_at: string
  started_at: string | null
  finished_at: string | null
  summary: ScimSyncSummaryOut | null
  error_message: string | null
}
type VibeWorkByUserStat = {
  messages_count: number
  files_count: number
  images_count: number
  spreadsheets_count: number
  unique_conversations_count: number
  user_id: string
  last_message_at: string
  unique_agents_count: number
  messages_to_agents_count: number
}
type VibeWorkByUserStatsOUT = { start_time: number; end_time: number; data: VibeWorkByUserStat[] }
type VibeWorkByAgentStat = {
  messages_count: number
  files_count: number
  images_count: number
  spreadsheets_count: number
  unique_conversations_count: number
  agent_id: string
  last_message_at: string
  unique_users_count: number
}
type VibeWorkByAgentStatsOUT = { start_time: number; end_time: number; data: VibeWorkByAgentStat[] }
type VibeWorkByTimeStat = {
  messages_count: number
  files_count: number
  images_count: number
  spreadsheets_count: number
  unique_conversations_count: number
  time_bucket: string | null
  unique_users_count: number
  messages_to_agents_count: number
  unique_agents_count: number
}
type VibeWorkByTimeStatsOUT = { start_time: number; end_time: number; data: VibeWorkByTimeStat[] }
type VibeSessionStat = {
  day: string
  nb_sessions: number
  nb_sessions_cli: number
  nb_sessions_acp: number
  nb_sessions_programmatic: number
}
type VibeUserPromptsStat = {
  day: string
  nb_prompts_total: number
  nb_prompts_cli: number
  nb_prompts_acp: number
  nb_prompts_programmatic: number
}
type VibeActiveUsersStat = {
  day: string
  nb_active_users_total: number
  nb_active_users_cli: number
  nb_active_users_acp: number
  nb_active_users_programmatic: number
}
type VibeConsumedTokensStat = {
  day: string
  model: string
  cached_tokens: number
  input_tokens: number
  output_tokens: number
}
type VibeToolCallsStat = {
  day: string
  total: number
  status_success: number
  status_failure: number
  status_skipped: number
  approval_ask: number
  approval_always: number
  approval_never: number
}
type VibeToolCallsByNameStat = { day: string; tool_name: string; count: number }
type VibeSessionDurationStat = { day: string; total_duration_hours: number }
type VibeWorkspaceStatsOUT = {
  start_time: number
  end_time: number
  sessions: VibeSessionStat[]
  user_prompts: VibeUserPromptsStat[]
  active_users: VibeActiveUsersStat[]
  consumed_tokens: VibeConsumedTokensStat[]
  tool_calls: VibeToolCallsStat[]
  tool_calls_by_name: VibeToolCallsByNameStat[]
  session_durations: VibeSessionDurationStat[]
}
type VibeNextEditSuggestionStat = {
  day: string
  total_suggestions: number
  outcome_accepted: number
  outcome_rejected: number
  outcome_timeout: number
  outcome_aborted: number
  outcome_dismissed: number
  force_generated_true: number
  force_generated_false: number
  surface_widget: number
  surface_ghost_text: number
}
type VibeNextEditActiveUsersStat = { day: string; nb_active_users: number }
type VibeNextEditModifiedLOCStat = {
  day: string
  lines_inserted: number
  lines_deleted: number
  lines_unchanged: number
  lines_total: number
}
type VibeOrganizationStatsOUT = {
  start_time: number
  end_time: number
  next_edit_suggestions: VibeNextEditSuggestionStat[]
  next_edit_active_users: VibeNextEditActiveUsersStat[]
  next_edit_modified_loc: VibeNextEditModifiedLOCStat[]
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/prompts': {
      $get: {
        input: {
          query: {
            pageSize?: unknown
            pageToken?: string
            alias?: string
            fields?: unknown
            'sort.field'?: ListSortFieldInput
            'sort.direction'?: ListSortDirectionInput
            sort_by?: string
            sort_direction?: string
          }
        }
        output: ListPromptsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CreatePromptRequestInput }
        output: Prompt
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/prompts/:prompt_id': {
      $get: {
        input: { param: { prompt_id: string } } & {
          query: { version?: unknown; alias?: string; fields?: unknown }
        }
        output: Prompt
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { prompt_id: string } }
        output: DeletePromptResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { prompt_id: string } } & {
          json: {
            title?: string | null
            description?: string | null
            sharingScope?: RegistrySharingScopeInput | null
            workspaceRelation?: ShareRelationInput | null
          }
        }
        output: Prompt
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/prompts/:prompt_id/versions': {
      $get: {
        input: { param: { prompt_id: string } }
        output: ListPromptVersionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { prompt_id: string } } & {
          json: { definition: PromptDefinitionInput; notes?: string | null; aliases?: string[] }
        }
        output: CreatePromptVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/prompts/:prompt_id/versions/:version': {
      $get: {
        input: { param: { prompt_id: string; version: unknown } } & { query: { fields?: unknown } }
        output: Prompt
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { prompt_id: string; version: unknown } } & {
          json: { notes?: string | null; aliases?: AliasListInput }
        }
        output: Prompt
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/skills': {
      $get: {
        input: {
          query: {
            pageSize?: unknown
            pageToken?: string
            alias?: string
            fields?: unknown
            'sort.field'?: ListSortFieldInput
            'sort.direction'?: ListSortDirectionInput
            sort_by?: string
            sort_direction?: string
          }
        }
        output: ListSkillsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CreateSkillRequestInput }
        output: Skill
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/skills/:skill_id': {
      $get: {
        input: { param: { skill_id: string } } & {
          query: { version?: unknown; alias?: string; fields?: unknown }
        }
        output: Skill
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { skill_id: string } }
        output: DeleteSkillResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { skill_id: string } } & {
          json: {
            sharingScope?: RegistrySharingScopeInput | null
            workspaceRelation?: ShareRelationInput | null
          }
        }
        output: Skill
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/skills/:skill_id/versions': {
      $get: {
        input: { param: { skill_id: string } }
        output: ListSkillVersionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { skill_id: string } } & {
          json: { definition: SkillDefinitionInput; notes?: string | null; aliases?: string[] }
        }
        output: CreateSkillVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/skills/:skill_id/versions/:version': {
      $get: {
        input: { param: { skill_id: string; version: unknown } } & { query: { fields?: unknown } }
        output: Skill
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { skill_id: string; version: unknown } } & {
          json: { notes?: string | null; aliases?: AliasListInput }
        }
        output: Skill
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/audio/speech': {
      $post:
        | {
            input: { json: SpeechRequestInput }
            output: { audio_data: string }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: SpeechRequestInput }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { json: SpeechRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/models': {
      $get:
        | {
            input: { query: { provider?: unknown; model?: unknown } }
            output: ModelList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { provider?: unknown; model?: unknown } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/models/:model_id': {
      $get:
        | {
            input: { param: { model_id: string } }
            output: BaseModelCard | FTModelCard
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { model_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { model_id: string } }
            output: DeleteModelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { model_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/responses': {
      $post:
        | {
            input: { json: CreateResponseRequestInput }
            output: CreateResponseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateResponseRequestInput }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/v1/responses/input_tokens': {
      $post: {
        input: { json: CountResponseInputTokensRequestInput }
        output: CountResponseInputTokensResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/client/sessions': {
      $post:
        | {
            input: { json: CreateRealtimeSessionRequestInput }
            output: CreateRealtimeSessionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateRealtimeSessionRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/service-accounts': {
      $post:
        | {
            input: { json: CreateServiceAccountRequestInput }
            output: ServiceAccount
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateServiceAccountRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              query: {
                workspace_id?: unknown
                include_deleted?: string
                q?: unknown
                order?: SortOrderInput
                offset: unknown
                limit: unknown
              }
            }
            output: ListServiceAccountsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                workspace_id?: unknown
                include_deleted?: string
                q?: unknown
                order?: SortOrderInput
                offset: unknown
                limit: unknown
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/service-accounts/assignable-roles': {
      $get:
        | {
            input: { query: { workspace_id: string } }
            output: ListAssignableServiceAccountRolesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { workspace_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/service-accounts/:service_account_id': {
      $get:
        | {
            input: { param: { service_account_id: string } }
            output: ServiceAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { service_account_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { service_account_id: string } } & {
              json: UpdateServiceAccountRequestInput
            }
            output: ServiceAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { service_account_id: string } } & {
              json: UpdateServiceAccountRequestInput
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { service_account_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { service_account_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/service-accounts/:service_account_id/roles': {
      $put:
        | {
            input: { param: { service_account_id: string } } & {
              json: SetServiceAccountRolesRequestInput
            }
            output: ListServiceAccountRolesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { service_account_id: string } } & {
              json: SetServiceAccountRolesRequestInput
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { service_account_id: string } }
            output: ListServiceAccountRolesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { service_account_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/conversations': {
      $post:
        | {
            input: { json: ConversationRequestInput }
            output: ConversationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConversationRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { query: { page?: unknown; page_size?: unknown; metadata?: unknown } }
            output: (ModelConversation | AgentConversation)[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: unknown; page_size?: unknown; metadata?: unknown } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/conversations/:conversation_id': {
      $get:
        | {
            input: { param: { conversation_id: string } }
            output: ModelConversation | AgentConversation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { conversation_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { conversation_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { param: { conversation_id: string } } & { json: ConversationAppendRequestInput }
            output: ConversationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: string } } & { json: ConversationAppendRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/conversations/:conversation_id/history': {
      $get:
        | {
            input: { param: { conversation_id: string } }
            output: ConversationHistory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/conversations/:conversation_id/messages': {
      $get:
        | {
            input: { param: { conversation_id: string } }
            output: ConversationMessages
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/conversations/:conversation_id/restart': {
      $post:
        | {
            input: { param: { conversation_id: string } } & {
              json: ConversationRestartRequestInput
            }
            output: ConversationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: string } } & {
              json: ConversationRestartRequestInput
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/agents': {
      $post:
        | {
            input: { json: CreateAgentRequestInput }
            output: Agent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateAgentRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              query: {
                page?: unknown
                page_size?: unknown
                deployment_chat?: unknown
                sources?: RequestSourceInput[] | null
                name?: unknown
                search?: unknown
                id?: unknown
                metadata?: unknown
              }
            }
            output: Agent[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: unknown
                page_size?: unknown
                deployment_chat?: unknown
                sources?: RequestSourceInput[] | null
                name?: unknown
                search?: unknown
                id?: unknown
                metadata?: unknown
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/agents/pages': {
      $get:
        | {
            input: {
              query: {
                page_size?: unknown
                deployment_chat?: unknown
                sources?: RequestSourceInput[] | null
                name?: unknown
                search?: unknown
                id?: unknown
                metadata?: unknown
                page_token?: unknown
              }
            }
            output: AgentListPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page_size?: unknown
                deployment_chat?: unknown
                sources?: RequestSourceInput[] | null
                name?: unknown
                search?: unknown
                id?: unknown
                metadata?: unknown
                page_token?: unknown
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/agents/:agent_id': {
      $get:
        | {
            input: { param: { agent_id: string } } & { query: { agent_version?: unknown } }
            output: Agent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_id: string } } & { query: { agent_version?: unknown } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { agent_id: string } } & { json: UpdateAgentRequestInput }
            output: Agent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_id: string } } & { json: UpdateAgentRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | { input: { param: { agent_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { agent_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/agents/:agent_id/version': {
      $patch:
        | {
            input: { param: { agent_id: string } } & { query: { version: unknown } }
            output: Agent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_id: string } } & { query: { version: unknown } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/agents/:agent_id/versions': {
      $get:
        | {
            input: { param: { agent_id: string } } & {
              query: { page?: unknown; page_size?: unknown }
            }
            output: Agent[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_id: string } } & {
              query: { page?: unknown; page_size?: unknown }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/agents/:agent_id/versions/:version': {
      $get:
        | {
            input: { param: { agent_id: string; version: string } }
            output: Agent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_id: string; version: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/agents/:agent_id/aliases': {
      $put:
        | {
            input: { param: { agent_id: string } } & { query: { alias: string; version: unknown } }
            output: AgentAliasResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_id: string } } & { query: { alias: string; version: unknown } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { agent_id: string } }
            output: AgentAliasResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { agent_id: string } } & { query: { alias: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { agent_id: string } } & { query: { alias: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/conversations#stream': {
      $post:
        | {
            input: { json: ConversationStreamRequestInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: ConversationStreamRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/conversations/:conversation_id#stream': {
      $post:
        | {
            input: { param: { conversation_id: string } } & {
              json: ConversationAppendStreamRequestInput
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { conversation_id: string } } & {
              json: ConversationAppendStreamRequestInput
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/conversations/:conversation_id/restart#stream': {
      $post:
        | {
            input: { param: { conversation_id: string } } & {
              json: ConversationRestartStreamRequestInput
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { conversation_id: string } } & {
              json: ConversationRestartStreamRequestInput
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/files': {
      $post: {
        input: {
          form: {
            expiry?: number | null
            visibility?: 'workspace' | 'user'
            purpose?: FilePurposeInput
            file: FileInput
          }
        }
        output: CreateFileResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            page?: unknown
            page_size?: unknown
            include_total?: string
            sample_type?: SampleTypeInput[] | null
            source?: SourceInput[] | null
            search?: unknown
            purpose?: unknown
            mimetypes?: string[] | null
          }
        }
        output: ListFilesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/files/:file_id': {
      $get: {
        input: { param: { file_id: string } }
        output: GetFileResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { file_id: string } }
        output: DeleteFileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/files/:file_id/content': {
      $get: { input: { param: { file_id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v1/files/:file_id/url': {
      $get: {
        input: { param: { file_id: string } } & { query: { expiry?: unknown } }
        output: GetSignedUrlResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/fine_tuning/models/:model_id': {
      $patch: {
        input: { param: { model_id: string } } & { json: UpdateModelRequestInput }
        output: CompletionFineTunedModel | ClassifierFineTunedModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/fine_tuning/models/:model_id/archive': {
      $post: {
        input: { param: { model_id: string } }
        output: ArchiveModelResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { model_id: string } }
        output: UnarchiveModelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/batch/jobs': {
      $get: {
        input: {
          query: {
            page?: unknown
            page_size?: unknown
            model?: unknown
            agent_id?: unknown
            metadata?: { [key: string]: unknown } | null
            created_after?: unknown
            created_by_me?: string
            status?: BatchJobStatusInput[] | null
            order_by?: 'created' | '-created'
          }
        }
        output: ListBatchJobsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CreateBatchJobRequestInput }
        output: BatchJob
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/batch/jobs/:job_id': {
      $get: {
        input: { param: { job_id: string } } & { query: { inline?: unknown } }
        output: BatchJob
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { job_id: string } }
        output: DeleteBatchJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/batch/jobs/:job_id/cancel': {
      $post: {
        input: { param: { job_id: string } }
        output: BatchJob
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/chat/completions': {
      $post:
        | {
            input: { json: ChatCompletionRequestInput }
            output: ChatCompletionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ChatCompletionRequestInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: ChatCompletionRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/fim/completions': {
      $post:
        | {
            input: { json: FIMCompletionRequestInput }
            output: FIMCompletionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: FIMCompletionRequestInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: FIMCompletionRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/agents/completions': {
      $post:
        | {
            input: { json: AgentsCompletionRequestInput }
            output: ChatCompletionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AgentsCompletionRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/embeddings': {
      $post:
        | {
            input: { json: EmbeddingRequestInput }
            output: EmbeddingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EmbeddingRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/moderations': {
      $post:
        | {
            input: { json: ModerationRequestInput }
            output: ModerationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ModerationRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/chat/moderations': {
      $post:
        | {
            input: { json: ChatModerationRequestInput }
            output: ModerationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ChatModerationRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/ocr': {
      $post:
        | {
            input: { json: OCRRequestInput }
            output: OCRResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OCRRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/classifications': {
      $post:
        | {
            input: { json: ClassificationRequestInput }
            output: ClassificationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ClassificationRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/chat/classifications': {
      $post:
        | {
            input: { json: ChatClassificationRequestInput }
            output: ClassificationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ChatClassificationRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/audio/transcriptions': {
      $post: {
        input: { form: AudioTranscriptionRequestInput }
        output: TranscriptionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/audio/transcriptions#stream': {
      $post: {
        input: { form: AudioTranscriptionRequestStreamInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/libraries': {
      $get:
        | {
            input: {
              query: {
                page_size?: unknown
                page_token?: unknown
                page?: unknown
                search?: unknown
                filter_owned_by_me?: unknown
              }
            }
            output: ListLibrariesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page_size?: unknown
                page_token?: unknown
                page?: unknown
                search?: unknown
                filter_owned_by_me?: unknown
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { json: CreateLibraryRequestInput }
            output: Library
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateLibraryRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/libraries/:library_id': {
      $get:
        | {
            input: { param: { library_id: string } }
            output: Library
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { library_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { library_id: string } }
            output: Library
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { library_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { library_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { library_id: string } } & { json: UpdateLibraryRequestInput }
            output: Library
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { library_id: string } } & { json: UpdateLibraryRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { param: { library_id: string } } & { json: UpdateLibraryRequestInput }
            output: Library
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { library_id: string } } & { json: UpdateLibraryRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/libraries/:library_id/documents': {
      $get:
        | {
            input: { param: { library_id: string } } & {
              query: {
                search?: unknown
                page_size?: unknown
                page?: unknown
                filters_attributes?: unknown
                sort_by?: string
                sort_order?: string
              }
            }
            output: ListDocumentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { library_id: string } } & {
              query: {
                search?: unknown
                page_size?: unknown
                page?: unknown
                filters_attributes?: unknown
                sort_by?: string
                sort_order?: string
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { param: { library_id: string } } & { form: { file: FileInput } }
            output: Document
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { library_id: string } } & { form: { file: FileInput } }
            output: Document
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { library_id: string } } & { form: { file: FileInput } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/libraries/:library_id/documents/:document_id': {
      $get:
        | {
            input: { param: { library_id: string; document_id: string } }
            output: Document
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { library_id: string; document_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { library_id: string; document_id: string } } & {
              json: UpdateDocumentRequestInput
            }
            output: Document
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { library_id: string; document_id: string } } & {
              json: UpdateDocumentRequestInput
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { param: { library_id: string; document_id: string } } & {
              json: UpdateDocumentRequestInput
            }
            output: Document
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { library_id: string; document_id: string } } & {
              json: UpdateDocumentRequestInput
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { library_id: string; document_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { library_id: string; document_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/libraries/:library_id/documents/:document_id/text_content': {
      $get:
        | {
            input: { param: { library_id: string; document_id: string } } & {
              query: { page_start?: unknown; page_end?: unknown }
            }
            output: DocumentTextContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { library_id: string; document_id: string } } & {
              query: { page_start?: unknown; page_end?: unknown }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/libraries/:library_id/documents/:document_id/status': {
      $get:
        | {
            input: { param: { library_id: string; document_id: string } }
            output: ProcessingStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { library_id: string; document_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/libraries/:library_id/documents/:document_id/signed-url': {
      $get:
        | {
            input: { param: { library_id: string; document_id: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { library_id: string; document_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/libraries/:library_id/documents/:document_id/extracted-text-signed-url': {
      $get:
        | {
            input: { param: { library_id: string; document_id: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { library_id: string; document_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/libraries/:library_id/documents/:document_id/reprocess': {
      $post:
        | {
            input: { param: { library_id: string; document_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { library_id: string; document_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/libraries/:library_id/share': {
      $get:
        | {
            input: { param: { library_id: string } }
            output: ListSharingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { library_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { param: { library_id: string } } & { json: SharingRequestInput }
            output: Sharing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { library_id: string } } & { json: SharingRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { library_id: string } } & { json: SharingDeleteInput }
            output: Sharing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { library_id: string } } & { json: SharingDeleteInput }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { library_id: string } } & { json: SharingDeleteInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/datasets': {
      $post:
        | {
            input: { json: CreateDatasetRequestInput }
            output: Dataset
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateDatasetRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateDatasetRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateDatasetRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { json: CreateDatasetRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateDatasetRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { query: { page_size?: unknown; page?: unknown; q?: unknown } }
            output: ListDatasetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page_size?: unknown; page?: unknown; q?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { page_size?: unknown; page?: unknown; q?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { page_size?: unknown; page?: unknown; q?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { query: { page_size?: unknown; page?: unknown; q?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { page_size?: unknown; page?: unknown; q?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/datasets/:dataset_id': {
      $get:
        | {
            input: { param: { dataset_id: string } }
            output: DatasetPreview
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataset_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dataset_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dataset_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { dataset_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dataset_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { dataset_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { dataset_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dataset_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dataset_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { dataset_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dataset_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { dataset_id: string } } & { json: UpdateDatasetRequestInput }
            output: DatasetPreview
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataset_id: string } } & { json: UpdateDatasetRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dataset_id: string } } & { json: UpdateDatasetRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dataset_id: string } } & { json: UpdateDatasetRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { dataset_id: string } } & { json: UpdateDatasetRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dataset_id: string } } & { json: UpdateDatasetRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/datasets/:dataset_id/records': {
      $get:
        | {
            input: { param: { dataset_id: string } } & {
              query: { page_size?: unknown; page?: unknown }
            }
            output: ListDatasetRecordsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataset_id: string } } & {
              query: { page_size?: unknown; page?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dataset_id: string } } & {
              query: { page_size?: unknown; page?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dataset_id: string } } & {
              query: { page_size?: unknown; page?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { dataset_id: string } } & {
              query: { page_size?: unknown; page?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dataset_id: string } } & {
              query: { page_size?: unknown; page?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { param: { dataset_id: string } } & { json: CreateDatasetRecordRequestInput }
            output: DatasetRecord
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { dataset_id: string } } & { json: CreateDatasetRecordRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dataset_id: string } } & { json: CreateDatasetRecordRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dataset_id: string } } & { json: CreateDatasetRecordRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { dataset_id: string } } & { json: CreateDatasetRecordRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dataset_id: string } } & { json: CreateDatasetRecordRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/datasets/:dataset_id/records/bulk': {
      $post:
        | {
            input: { param: { dataset_id: string } } & { json: CreateDatasetRecordsRequestInput }
            output: CreateDatasetRecordsResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { dataset_id: string } } & { json: CreateDatasetRecordsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dataset_id: string } } & { json: CreateDatasetRecordsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dataset_id: string } } & { json: CreateDatasetRecordsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { dataset_id: string } } & { json: CreateDatasetRecordsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dataset_id: string } } & { json: CreateDatasetRecordsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/datasets/:dataset_id/imports/from-file': {
      $post:
        | {
            input: { param: { dataset_id: string } } & { json: ImportDatasetFromFileRequestInput }
            output: DatasetImportTask
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { dataset_id: string } } & { json: ImportDatasetFromFileRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dataset_id: string } } & { json: ImportDatasetFromFileRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dataset_id: string } } & { json: ImportDatasetFromFileRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { dataset_id: string } } & { json: ImportDatasetFromFileRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dataset_id: string } } & { json: ImportDatasetFromFileRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/datasets/:dataset_id/imports/from-spans': {
      $post:
        | {
            input: { param: { dataset_id: string } } & { json: ImportDatasetFromSpansRequestInput }
            output: DatasetImportTask
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { dataset_id: string } } & { json: ImportDatasetFromSpansRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dataset_id: string } } & { json: ImportDatasetFromSpansRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dataset_id: string } } & { json: ImportDatasetFromSpansRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { dataset_id: string } } & { json: ImportDatasetFromSpansRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dataset_id: string } } & { json: ImportDatasetFromSpansRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/datasets/:dataset_id/imports/from-dataset': {
      $post:
        | {
            input: { param: { dataset_id: string } } & {
              json: ImportDatasetFromDatasetRequestInput
            }
            output: DatasetImportTask
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { dataset_id: string } } & {
              json: ImportDatasetFromDatasetRequestInput
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dataset_id: string } } & {
              json: ImportDatasetFromDatasetRequestInput
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dataset_id: string } } & {
              json: ImportDatasetFromDatasetRequestInput
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { dataset_id: string } } & {
              json: ImportDatasetFromDatasetRequestInput
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dataset_id: string } } & {
              json: ImportDatasetFromDatasetRequestInput
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/datasets/:dataset_id/exports/to-jsonl': {
      $get:
        | {
            input: { param: { dataset_id: string } }
            output: ExportDatasetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataset_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dataset_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dataset_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { dataset_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dataset_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/datasets/:dataset_id/tasks/:task_id': {
      $get:
        | {
            input: { param: { dataset_id: string; task_id: string } }
            output: DatasetImportTask
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataset_id: string; task_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dataset_id: string; task_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dataset_id: string; task_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { dataset_id: string; task_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dataset_id: string; task_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/datasets/:dataset_id/tasks': {
      $get:
        | {
            input: { param: { dataset_id: string } } & {
              query: { page_size?: unknown; page?: unknown }
            }
            output: ListDatasetImportTasksResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataset_id: string } } & {
              query: { page_size?: unknown; page?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dataset_id: string } } & {
              query: { page_size?: unknown; page?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dataset_id: string } } & {
              query: { page_size?: unknown; page?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { dataset_id: string } } & {
              query: { page_size?: unknown; page?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dataset_id: string } } & {
              query: { page_size?: unknown; page?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/dataset-records/:dataset_record_id': {
      $get:
        | {
            input: { param: { dataset_record_id: string } }
            output: DatasetRecord
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataset_record_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dataset_record_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dataset_record_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { dataset_record_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dataset_record_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { dataset_record_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { dataset_record_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dataset_record_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dataset_record_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { dataset_record_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dataset_record_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/dataset-records/bulk-delete': {
      $post:
        | {
            input: { json: DeleteDatasetRecordsRequestInput }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: DeleteDatasetRecordsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DeleteDatasetRecordsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: DeleteDatasetRecordsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { json: DeleteDatasetRecordsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: DeleteDatasetRecordsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/dataset-records/:dataset_record_id/payload': {
      $put:
        | {
            input: { param: { dataset_record_id: string } } & {
              json: UpdateDatasetRecordPayloadRequestInput
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { dataset_record_id: string } } & {
              json: UpdateDatasetRecordPayloadRequestInput
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dataset_record_id: string } } & {
              json: UpdateDatasetRecordPayloadRequestInput
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dataset_record_id: string } } & {
              json: UpdateDatasetRecordPayloadRequestInput
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { dataset_record_id: string } } & {
              json: UpdateDatasetRecordPayloadRequestInput
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dataset_record_id: string } } & {
              json: UpdateDatasetRecordPayloadRequestInput
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/dataset-records/:dataset_record_id/properties': {
      $put:
        | {
            input: { param: { dataset_record_id: string } } & {
              json: UpdateDatasetRecordPropertiesRequestInput
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { dataset_record_id: string } } & {
              json: UpdateDatasetRecordPropertiesRequestInput
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dataset_record_id: string } } & {
              json: UpdateDatasetRecordPropertiesRequestInput
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dataset_record_id: string } } & {
              json: UpdateDatasetRecordPropertiesRequestInput
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { dataset_record_id: string } } & {
              json: UpdateDatasetRecordPropertiesRequestInput
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dataset_record_id: string } } & {
              json: UpdateDatasetRecordPropertiesRequestInput
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/pipelines': {
      $post:
        | {
            input: { json: CreatePipelineRequestInput }
            output: Pipeline
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreatePipelineRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreatePipelineRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreatePipelineRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { json: CreatePipelineRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreatePipelineRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              query: {
                enabled?: unknown
                from?: unknown
                to?: unknown
                page_size?: unknown
                page?: unknown
                q?: unknown
              }
            }
            output: PipelinesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                enabled?: unknown
                from?: unknown
                to?: unknown
                page_size?: unknown
                page?: unknown
                q?: unknown
              }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                enabled?: unknown
                from?: unknown
                to?: unknown
                page_size?: unknown
                page?: unknown
                q?: unknown
              }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                enabled?: unknown
                from?: unknown
                to?: unknown
                page_size?: unknown
                page?: unknown
                q?: unknown
              }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: {
              query: {
                enabled?: unknown
                from?: unknown
                to?: unknown
                page_size?: unknown
                page?: unknown
                q?: unknown
              }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                enabled?: unknown
                from?: unknown
                to?: unknown
                page_size?: unknown
                page?: unknown
                q?: unknown
              }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/pipelines/:pipeline_id': {
      $get:
        | {
            input: { param: { pipeline_id: string } }
            output: Pipeline
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pipeline_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pipeline_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pipeline_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { pipeline_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { pipeline_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { param: { pipeline_id: string } } & { json: UpdatePipelineRequestInput }
            output: Pipeline
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pipeline_id: string } } & { json: UpdatePipelineRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pipeline_id: string } } & { json: UpdatePipelineRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pipeline_id: string } } & { json: UpdatePipelineRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { pipeline_id: string } } & { json: UpdatePipelineRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { pipeline_id: string } } & { json: UpdatePipelineRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { pipeline_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { pipeline_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pipeline_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pipeline_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { pipeline_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { pipeline_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/logs/search': {
      $post:
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: LogsRequestInput }
            output: GetLogs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: LogsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: LogsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: LogsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: LogsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: LogsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/traces/search': {
      $post:
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: TracesRequestInput }
            output: GetTraces
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: TracesRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: TracesRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: TracesRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: TracesRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: TracesRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/traces/aggregate': {
      $post:
        | {
            input: { query: { from?: unknown; to?: unknown } } & { json: AggregationRequestInput }
            output: Aggregation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { from?: unknown; to?: unknown } } & { json: AggregationRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { from?: unknown; to?: unknown } } & { json: AggregationRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { from?: unknown; to?: unknown } } & { json: AggregationRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { query: { from?: unknown; to?: unknown } } & { json: AggregationRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { from?: unknown; to?: unknown } } & { json: AggregationRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/spans/search': {
      $post:
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: SpansRequestInput }
            output: GetSpans
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: SpansRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: SpansRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: SpansRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: SpansRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: SpansRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/spans/aggregate': {
      $post:
        | {
            input: { query: { from?: unknown; to?: unknown } } & { json: AggregationRequestInput }
            output: Aggregation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { from?: unknown; to?: unknown } } & { json: AggregationRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { from?: unknown; to?: unknown } } & { json: AggregationRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { from?: unknown; to?: unknown } } & { json: AggregationRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { query: { from?: unknown; to?: unknown } } & { json: AggregationRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { from?: unknown; to?: unknown } } & { json: AggregationRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/spans/evaluations/aggregate': {
      $post:
        | {
            input: { query: { from?: unknown; to?: unknown } } & { json: AggregationRequestInput }
            output: Aggregation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { from?: unknown; to?: unknown } } & { json: AggregationRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { from?: unknown; to?: unknown } } & { json: AggregationRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { from?: unknown; to?: unknown } } & { json: AggregationRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { query: { from?: unknown; to?: unknown } } & { json: AggregationRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { from?: unknown; to?: unknown } } & { json: AggregationRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/spans/evaluations/search': {
      $post:
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: SpanEvaluationsRequestInput }
            output: GetSpanEvaluations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: SpanEvaluationsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: SpanEvaluationsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: SpanEvaluationsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: SpanEvaluationsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: SpanEvaluationsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/spans/evaluations/search/latest': {
      $post:
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: SpanEvaluationsRequestInput }
            output: GetSpanEvaluations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: SpanEvaluationsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: SpanEvaluationsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: SpanEvaluationsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: SpanEvaluationsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: SpanEvaluationsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/pipeline-results/search': {
      $post:
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: PipelineResultsRequestInput }
            output: GetPipelineResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: PipelineResultsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: PipelineResultsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: PipelineResultsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: PipelineResultsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            } & { json: PipelineResultsRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/pipelines/:pipeline_id/results/fields': {
      $get:
        | {
            input: { param: { pipeline_id: string } }
            output: GetPipelineResultFields
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pipeline_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { pipeline_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pipeline_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { pipeline_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { pipeline_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/traces/fields': {
      $get:
        | { input: {}; output: GetTraceFields; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ObservabilityError; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ObservabilityError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ObservabilityError; outputFormat: 'json'; status: 408 }
        | { input: {}; output: ObservabilityError; outputFormat: 'json'; status: 409 }
        | { input: {}; output: ObservabilityError; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/v1/observability/traces/:trace_id': {
      $get:
        | {
            input: { param: { trace_id: string } }
            output: GetTrace
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { trace_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { trace_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { trace_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { trace_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { trace_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/traces/:trace_id/spans': {
      $get:
        | {
            input: { param: { trace_id: string } } & {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            }
            output: GetSpans
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { trace_id: string } } & {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { trace_id: string } } & {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { trace_id: string } } & {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { trace_id: string } } & {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { trace_id: string } } & {
              query: { from?: unknown; to?: unknown; page_size?: unknown; cursor?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/logs/fields': {
      $get:
        | { input: {}; output: GetLogFields; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ObservabilityError; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ObservabilityError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ObservabilityError; outputFormat: 'json'; status: 408 }
        | { input: {}; output: ObservabilityError; outputFormat: 'json'; status: 409 }
        | { input: {}; output: ObservabilityError; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/v1/observability/spans/fields': {
      $get:
        | { input: {}; output: GetSpanFields; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ObservabilityError; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ObservabilityError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ObservabilityError; outputFormat: 'json'; status: 408 }
        | { input: {}; output: ObservabilityError; outputFormat: 'json'; status: 409 }
        | { input: {}; output: ObservabilityError; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/v1/observability/spans/evaluations/fields': {
      $get:
        | { input: {}; output: GetSpanEvaluationFields; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ObservabilityError; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ObservabilityError; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ObservabilityError; outputFormat: 'json'; status: 408 }
        | { input: {}; output: ObservabilityError; outputFormat: 'json'; status: 409 }
        | { input: {}; output: ObservabilityError; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/v1/observability/traces/fields/:field_name/options': {
      $get:
        | {
            input: { param: { field_name: string } } & { query: { from?: unknown; to?: unknown } }
            output: GetTraceFieldOptions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { field_name: string } } & { query: { from?: unknown; to?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { field_name: string } } & { query: { from?: unknown; to?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { field_name: string } } & { query: { from?: unknown; to?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { field_name: string } } & { query: { from?: unknown; to?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { field_name: string } } & { query: { from?: unknown; to?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/logs/fields/:field_name/options': {
      $get:
        | {
            input: { param: { field_name: string } } & { query: { from?: unknown; to?: unknown } }
            output: GetLogFieldOptions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { field_name: string } } & { query: { from?: unknown; to?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { field_name: string } } & { query: { from?: unknown; to?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { field_name: string } } & { query: { from?: unknown; to?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { field_name: string } } & { query: { from?: unknown; to?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { field_name: string } } & { query: { from?: unknown; to?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/spans/fields/:field_name/options': {
      $get:
        | {
            input: { param: { field_name: string } } & { query: { from?: unknown; to?: unknown } }
            output: GetSpanFieldOptions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { field_name: string } } & { query: { from?: unknown; to?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { field_name: string } } & { query: { from?: unknown; to?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { field_name: string } } & { query: { from?: unknown; to?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { field_name: string } } & { query: { from?: unknown; to?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { field_name: string } } & { query: { from?: unknown; to?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/spans/evaluations/fields/:field_name/options': {
      $get:
        | {
            input: { param: { field_name: string } } & { query: { from?: unknown; to?: unknown } }
            output: GetSpanEvaluationFieldOptions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { field_name: string } } & { query: { from?: unknown; to?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { field_name: string } } & { query: { from?: unknown; to?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { field_name: string } } & { query: { from?: unknown; to?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { field_name: string } } & { query: { from?: unknown; to?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { field_name: string } } & { query: { from?: unknown; to?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/traces/:trace_id/spans/:span_id': {
      $get:
        | {
            input: { param: { trace_id: string; span_id: string } } & {
              query: { from?: unknown; to?: unknown }
            }
            output: GetSpan
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { trace_id: string; span_id: string } } & {
              query: { from?: unknown; to?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { trace_id: string; span_id: string } } & {
              query: { from?: unknown; to?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { trace_id: string; span_id: string } } & {
              query: { from?: unknown; to?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { trace_id: string; span_id: string } } & {
              query: { from?: unknown; to?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { trace_id: string; span_id: string } } & {
              query: { from?: unknown; to?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/projects': {
      $get:
        | {
            input: { query: { q?: unknown; page_size?: unknown; page?: unknown } }
            output: Projects
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q?: unknown; page_size?: unknown; page?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { q?: unknown; page_size?: unknown; page?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { q?: unknown; page_size?: unknown; page?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { query: { q?: unknown; page_size?: unknown; page?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { q?: unknown; page_size?: unknown; page?: unknown } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/projects/:project_slug': {
      $get:
        | {
            input: { param: { project_slug: string } }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_slug: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_slug: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_slug: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { project_slug: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { project_slug: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/projects/:project_slug/evaluations_v2': {
      $get:
        | {
            input: { param: { project_slug: string } } & {
              query: { page_size?: unknown; page?: unknown }
            }
            output: EvaluationsV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_slug: string } } & {
              query: { page_size?: unknown; page?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_slug: string } } & {
              query: { page_size?: unknown; page?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_slug: string } } & {
              query: { page_size?: unknown; page?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { project_slug: string } } & {
              query: { page_size?: unknown; page?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { project_slug: string } } & {
              query: { page_size?: unknown; page?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/evaluations_v2/:evaluation_slug': {
      $get:
        | {
            input: { param: { evaluation_slug: string } }
            output: EvaluationV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { evaluation_slug: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { evaluation_slug: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { evaluation_slug: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { evaluation_slug: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { evaluation_slug: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/evaluations_v2/:evaluation_slug/runs/search': {
      $post:
        | {
            input: { param: { evaluation_slug: string } } & {
              query: { page_size?: unknown; page?: unknown }
            } & { json: EvaluationRunFilterInputInput | null }
            output: ListEvaluationRunsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { evaluation_slug: string } } & {
              query: { page_size?: unknown; page?: unknown }
            } & { json: EvaluationRunFilterInputInput | null }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { evaluation_slug: string } } & {
              query: { page_size?: unknown; page?: unknown }
            } & { json: EvaluationRunFilterInputInput | null }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { evaluation_slug: string } } & {
              query: { page_size?: unknown; page?: unknown }
            } & { json: EvaluationRunFilterInputInput | null }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { evaluation_slug: string } } & {
              query: { page_size?: unknown; page?: unknown }
            } & { json: EvaluationRunFilterInputInput | null }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { evaluation_slug: string } } & {
              query: { page_size?: unknown; page?: unknown }
            } & { json: EvaluationRunFilterInputInput | null }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/evaluation-runs_v2/search': {
      $post:
        | {
            input: { query: { page_size?: unknown; page?: unknown } } & {
              json: EvaluationRunFilterInputInput | null
            }
            output: SearchAllEvaluationRunsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page_size?: unknown; page?: unknown } } & {
              json: EvaluationRunFilterInputInput | null
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { page_size?: unknown; page?: unknown } } & {
              json: EvaluationRunFilterInputInput | null
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { page_size?: unknown; page?: unknown } } & {
              json: EvaluationRunFilterInputInput | null
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { query: { page_size?: unknown; page?: unknown } } & {
              json: EvaluationRunFilterInputInput | null
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { page_size?: unknown; page?: unknown } } & {
              json: EvaluationRunFilterInputInput | null
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/evaluation-runs_v2/:run_id': {
      $get:
        | {
            input: { param: { run_id: string } }
            output: EvaluationRunV2Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { run_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { run_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { run_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { run_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { run_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/evaluation-runs_v2/:run_id/statistics': {
      $get:
        | {
            input: { param: { run_id: string } }
            output: RunStatisticsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { run_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { run_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { run_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { run_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { run_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/evaluation-runs_v2/:run_id/statistics/compute': {
      $post:
        | {
            input: { param: { run_id: string } } & {
              json: EvaluationRunRecordFilterInputInput | null
            }
            output: RunStatisticsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { run_id: string } } & {
              json: EvaluationRunRecordFilterInputInput | null
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { run_id: string } } & {
              json: EvaluationRunRecordFilterInputInput | null
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { run_id: string } } & {
              json: EvaluationRunRecordFilterInputInput | null
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { run_id: string } } & {
              json: EvaluationRunRecordFilterInputInput | null
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { run_id: string } } & {
              json: EvaluationRunRecordFilterInputInput | null
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/evaluation-runs_v2/:run_id/records/:record_id': {
      $get:
        | {
            input: { param: { run_id: string; record_id: string } }
            output: EvaluationRunRecordV2Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { run_id: string; record_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { run_id: string; record_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { run_id: string; record_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { run_id: string; record_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { run_id: string; record_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/evaluation-runs_v2/:run_id/records/search': {
      $post:
        | {
            input: { param: { run_id: string } } & {
              query: { page_size?: unknown; page?: unknown }
            } & { json: EvaluationRunRecordFilterInputInput | null }
            output: ListEvaluationRunRecordsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { run_id: string } } & {
              query: { page_size?: unknown; page?: unknown }
            } & { json: EvaluationRunRecordFilterInputInput | null }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { run_id: string } } & {
              query: { page_size?: unknown; page?: unknown }
            } & { json: EvaluationRunRecordFilterInputInput | null }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { run_id: string } } & {
              query: { page_size?: unknown; page?: unknown }
            } & { json: EvaluationRunRecordFilterInputInput | null }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { run_id: string } } & {
              query: { page_size?: unknown; page?: unknown }
            } & { json: EvaluationRunRecordFilterInputInput | null }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { run_id: string } } & {
              query: { page_size?: unknown; page?: unknown }
            } & { json: EvaluationRunRecordFilterInputInput | null }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/optimizations': {
      $get:
        | {
            input: {
              query: {
                project?: unknown
                evaluation?: unknown
                status?: unknown
                algorithm?: unknown
                tags?: string[] | null
                page_size?: unknown
                page?: unknown
              }
            }
            output: ListOptimizationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                project?: unknown
                evaluation?: unknown
                status?: unknown
                algorithm?: unknown
                tags?: string[] | null
                page_size?: unknown
                page?: unknown
              }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                project?: unknown
                evaluation?: unknown
                status?: unknown
                algorithm?: unknown
                tags?: string[] | null
                page_size?: unknown
                page?: unknown
              }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                project?: unknown
                evaluation?: unknown
                status?: unknown
                algorithm?: unknown
                tags?: string[] | null
                page_size?: unknown
                page?: unknown
              }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: {
              query: {
                project?: unknown
                evaluation?: unknown
                status?: unknown
                algorithm?: unknown
                tags?: string[] | null
                page_size?: unknown
                page?: unknown
              }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                project?: unknown
                evaluation?: unknown
                status?: unknown
                algorithm?: unknown
                tags?: string[] | null
                page_size?: unknown
                page?: unknown
              }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/optimizations/:optimization_id': {
      $get:
        | {
            input: { param: { optimization_id: string } }
            output: OptimizationDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { optimization_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { optimization_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { optimization_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { optimization_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { optimization_id: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/optimizations/:optimization_id/trials': {
      $get:
        | {
            input: { param: { optimization_id: string } } & {
              query: { page_size?: unknown; page?: unknown }
            }
            output: ListOptimizationTrialsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { optimization_id: string } } & {
              query: { page_size?: unknown; page?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { optimization_id: string } } & {
              query: { page_size?: unknown; page?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { optimization_id: string } } & {
              query: { page_size?: unknown; page?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { optimization_id: string } } & {
              query: { page_size?: unknown; page?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { optimization_id: string } } & {
              query: { page_size?: unknown; page?: unknown }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/scorers': {
      $get:
        | {
            input: {
              query: {
                created_by_me?: string
                ootb?: string
                q?: unknown
                page_size?: unknown
                page?: unknown
              }
            }
            output: ListScorersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                created_by_me?: string
                ootb?: string
                q?: unknown
                page_size?: unknown
                page?: unknown
              }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                created_by_me?: string
                ootb?: string
                q?: unknown
                page_size?: unknown
                page?: unknown
              }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                created_by_me?: string
                ootb?: string
                q?: unknown
                page_size?: unknown
                page?: unknown
              }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: {
              query: {
                created_by_me?: string
                ootb?: string
                q?: unknown
                page_size?: unknown
                page?: unknown
              }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                created_by_me?: string
                ootb?: string
                q?: unknown
                page_size?: unknown
                page?: unknown
              }
            }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { json: CreateScorerRequestInput }
            output: Scorer
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateScorerRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateScorerRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateScorerRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { json: CreateScorerRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateScorerRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/observability/scorers/:scorer_slug': {
      $get:
        | {
            input: { param: { scorer_slug: string } }
            output: Scorer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scorer_slug: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { scorer_slug: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { scorer_slug: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { scorer_slug: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { scorer_slug: string } }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { scorer_slug: string } } & { json: EditScorerRequestInput }
            output: Scorer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scorer_slug: string } } & { json: EditScorerRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { scorer_slug: string } } & { json: EditScorerRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { scorer_slug: string } } & { json: EditScorerRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { scorer_slug: string } } & { json: EditScorerRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { scorer_slug: string } } & { json: EditScorerRequestInput }
            output: ObservabilityError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connectors': {
      $post:
        | {
            input: { json: CreateConnectorRequestInput | CreateHTTPConnectorRequestInput }
            output: Connector
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateConnectorRequestInput | CreateHTTPConnectorRequestInput }
            output: ConnectorErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateConnectorRequestInput | CreateHTTPConnectorRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              query: {
                query_filters?: ConnectorsQueryFiltersInput
                cursor?: unknown
                page_size?: unknown
              }
            }
            output: PaginatedConnectors
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query_filters?: ConnectorsQueryFiltersInput
                cursor?: unknown
                page_size?: unknown
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connectors/:connector_id_or_name/auth_url': {
      $get:
        | {
            input: { param: { connector_id_or_name: string | string } } & {
              query: {
                app_return_url?: unknown
                method_type?: AuthenticationTypeInput
                credentials_name?: unknown
                credentials_title?: unknown
                github_installation_link?: string
              }
            }
            output: AuthUrlResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connector_id_or_name: string | string } } & {
              query: {
                app_return_url?: unknown
                method_type?: AuthenticationTypeInput
                credentials_name?: unknown
                credentials_title?: unknown
                github_installation_link?: string
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connectors/:connector_id/share': {
      $put:
        | {
            input: { param: { connector_id: string } }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connector_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { connector_id: string } }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connector_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connectors/:connector_id/organization/share': {
      $put:
        | {
            input: { param: { connector_id: string } }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connector_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { connector_id: string } }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connector_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connectors/:connector_id/:consumer_scope/activate': {
      $post:
        | {
            input: {
              param: { connector_id: string; consumer_scope: 'user' | 'workspace' | 'organization' }
            }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { connector_id: string; consumer_scope: 'user' | 'workspace' | 'organization' }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connectors/:connector_id/:consumer_scope/deactivate': {
      $post:
        | {
            input: {
              param: { connector_id: string; consumer_scope: 'user' | 'workspace' | 'organization' }
            }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { connector_id: string; consumer_scope: 'user' | 'workspace' | 'organization' }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connectors/:connector_id_or_name/tools/:tool_name/call': {
      $post:
        | {
            input: { param: { tool_name: string; connector_id_or_name: string | string } } & {
              query: { credentials_name?: unknown }
            } & { json: ConnectorCallToolRequestInput }
            output: ConnectorToolCallResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tool_name: string; connector_id_or_name: string | string } } & {
              query: { credentials_name?: unknown }
            } & { json: ConnectorCallToolRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connectors/:connector_id_or_name/tools': {
      $get:
        | {
            input: { param: { connector_id_or_name: string | string } } & {
              query: {
                page_size?: unknown
                refresh?: string
                pretty?: string
                credentials_name?: unknown
              }
            }
            output: MCPTool[] | { [key: string]: unknown }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connector_id_or_name: string | string } } & {
              query: {
                page_size?: unknown
                refresh?: string
                pretty?: string
                credentials_name?: unknown
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connectors/:connector_id_or_name/authentication_methods': {
      $get:
        | {
            input: { param: { connector_id_or_name: string | string } }
            output: PublicAuthenticationMethod[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connector_id_or_name: string | string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connectors/:connector_id_or_name/organization/credentials': {
      $get:
        | {
            input: { param: { connector_id_or_name: string | string } } & {
              query: { auth_type?: unknown; fetch_default?: string }
            }
            output: CredentialsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connector_id_or_name: string | string } } & {
              query: { auth_type?: unknown; fetch_default?: string }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connectors/:connector_id_or_name/workspace/credentials': {
      $get:
        | {
            input: { param: { connector_id_or_name: string | string } } & {
              query: { auth_type?: unknown; fetch_default?: string }
            }
            output: CredentialsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connector_id_or_name: string | string } } & {
              query: { auth_type?: unknown; fetch_default?: string }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connectors/:connector_id_or_name/user/credentials': {
      $get:
        | {
            input: { param: { connector_id_or_name: string | string } } & {
              query: { auth_type?: unknown; fetch_default?: string }
            }
            output: CredentialsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connector_id_or_name: string | string } } & {
              query: { auth_type?: unknown; fetch_default?: string }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { connector_id_or_name: string | string } }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connector_id_or_name: string | string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connectors/:connector_id_or_name/:consumer_scope/credentials': {
      $post:
        | {
            input: {
              param: { connector_id_or_name: string | string; consumer_scope: 'user' | 'workspace' }
            } & { json: CredentialsCreateOrUpdateInput }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { connector_id_or_name: string | string; consumer_scope: 'user' | 'workspace' }
            } & { json: CredentialsCreateOrUpdateInput }
            output: ConnectorErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { connector_id_or_name: string | string; consumer_scope: 'user' | 'workspace' }
            } & { json: CredentialsCreateOrUpdateInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: {
              param: {
                connector_id_or_name: string | string
                consumer_scope: 'user' | 'workspace' | 'organization'
              }
            } & { json: CredentialsCreateOrUpdateInput }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                connector_id_or_name: string | string
                consumer_scope: 'user' | 'workspace' | 'organization'
              }
            } & { json: CredentialsCreateOrUpdateInput }
            output: ConnectorErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                connector_id_or_name: string | string
                consumer_scope: 'user' | 'workspace' | 'organization'
              }
            } & { json: CredentialsCreateOrUpdateInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connectors/:connector_id_or_name/:consumer_scope/credentials/:credentials_name': {
      $delete:
        | {
            input: {
              param: {
                credentials_name: string
                connector_id_or_name: string | string
                consumer_scope: 'user' | 'workspace' | 'organization'
              }
            }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                credentials_name: string
                connector_id_or_name: string | string
                consumer_scope: 'user' | 'workspace' | 'organization'
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connectors/:connector_id_or_name#idOrName': {
      $get:
        | {
            input: { param: { connector_id_or_name: string | string } } & {
              query: { fetch_user_data?: string }
            }
            output: Connector
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connector_id_or_name: string | string } } & {
              query: { fetch_user_data?: string }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connectors/:connector_id#id': {
      $patch:
        | {
            input: { param: { connector_id: string } } & {
              json: ConnectorMCPPublicUpdateInput | UpdateHTTPConnectorRequestInput
            }
            output: Connector
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connector_id: string } } & {
              json: ConnectorMCPPublicUpdateInput | UpdateHTTPConnectorRequestInput
            }
            output: ConnectorErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { connector_id: string } } & {
              json: ConnectorMCPPublicUpdateInput | UpdateHTTPConnectorRequestInput
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { connector_id: string } }
            output: MessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connector_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/audio/voices': {
      $get:
        | {
            input: {
              query: { limit?: unknown; offset?: unknown; type?: 'all' | 'custom' | 'preset' }
            }
            output: VoiceListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { limit?: unknown; offset?: unknown; type?: 'all' | 'custom' | 'preset' }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { json: VoiceCreateRequestInput }
            output: VoiceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: VoiceCreateRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/audio/voices/:voice_id': {
      $delete:
        | {
            input: { param: { voice_id: string } }
            output: VoiceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { voice_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { voice_id: string } } & { json: VoiceUpdateRequestInput }
            output: VoiceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { voice_id: string } } & { json: VoiceUpdateRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { voice_id: string } }
            output: VoiceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { voice_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/audio/voices/:voice_id/sample': {
      $get:
        | { input: { param: { voice_id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { voice_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/audio/sessions': {
      $post:
        | {
            input: { json: AudioSessionCreateRequestInput }
            output: AudioSessionCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AudioSessionCreateRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/audio/sessions/:session_id': {
      $get:
        | {
            input: { param: { session_id: string } }
            output: AudioSessionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { session_id: string } } & { json: AudioSessionUpdateRequestInput }
            output: AudioSessionUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } } & { json: AudioSessionUpdateRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { session_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { session_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/audio/agents': {
      $get:
        | {
            input: { query: { page_size?: unknown; page_token?: unknown; search?: unknown } }
            output: AudioAgentListPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page_size?: unknown; page_token?: unknown; search?: unknown } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { json: AudioAgentCreateRequestInput }
            output: AudioAgentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AudioAgentCreateRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/audio/agents/:agent_id': {
      $get:
        | {
            input: { param: { agent_id: string } } & { query: { version?: unknown } }
            output: AudioAgentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_id: string } } & { query: { version?: unknown } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { param: { agent_id: string } } & { json: AudioAgentUpdateRequestInput }
            output: AudioAgentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_id: string } } & { json: AudioAgentUpdateRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | { input: { param: { agent_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { agent_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/audio/agents/:agent_id/versions': {
      $get:
        | {
            input: { param: { agent_id: string } } & {
              query: { page_size?: unknown; page_token?: unknown }
            }
            output: AudioAgentListPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_id: string } } & {
              query: { page_size?: unknown; page_token?: unknown }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/audio/agents/:agent_id/sessions': {
      $get:
        | {
            input: { param: { agent_id: string } } & {
              query: { page_size?: unknown; page_token?: unknown }
            }
            output: AudioAgentSessionListPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_id: string } } & {
              query: { page_size?: unknown; page_token?: unknown }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/audio/voices': {
      $get:
        | {
            input: {
              query: {
                page_size?: unknown
                page_token?: unknown
                type?: 'all' | 'custom' | 'preset'
                gender?: VoiceGenderInput[] | null
                language?: string[] | null
                query?: unknown
                kind?: unknown
              }
            }
            output: VoiceListPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page_size?: unknown
                page_token?: unknown
                type?: 'all' | 'custom' | 'preset'
                gender?: VoiceGenderInput[] | null
                language?: string[] | null
                query?: unknown
                kind?: unknown
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/executions/:execution_id': {
      $get:
        | {
            input: { param: { execution_id: string } } & { query: { include_search_keys?: string } }
            output: WorkflowExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { execution_id: string } } & { query: { include_search_keys?: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/executions/:execution_id/history': {
      $get:
        | {
            input: { param: { execution_id: string } } & { query: { decode_payloads?: string } }
            output: any
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { execution_id: string } } & { query: { decode_payloads?: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/executions/:execution_id/signals': {
      $post:
        | {
            input: { param: { execution_id: string } } & { json: SignalInvocationBodyInput }
            output: SignalWorkflowResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { execution_id: string } } & { json: SignalInvocationBodyInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/executions/:execution_id/queries': {
      $post:
        | {
            input: { param: { execution_id: string } } & { json: QueryInvocationBodyInput }
            output: QueryWorkflowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { execution_id: string } } & { json: QueryInvocationBodyInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/executions/:execution_id/terminate': {
      $post:
        | {
            input: { param: { execution_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { execution_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/executions/terminate': {
      $post:
        | {
            input: { json: BatchExecutionBodyInput }
            output: BatchExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchExecutionBodyInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/executions/:execution_id/cancel': {
      $post:
        | {
            input: { param: { execution_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { execution_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/executions/cancel': {
      $post:
        | {
            input: { json: BatchExecutionBodyInput }
            output: BatchExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchExecutionBodyInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/executions/:execution_id/reset': {
      $post:
        | {
            input: { param: { execution_id: string } } & { json: ResetInvocationBodyInput }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { execution_id: string } } & { json: ResetInvocationBodyInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/executions/:execution_id/updates': {
      $post:
        | {
            input: { param: { execution_id: string } } & { json: UpdateInvocationBodyInput }
            output: UpdateWorkflowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { execution_id: string } } & { json: UpdateInvocationBodyInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/executions/:execution_id/trace/info': {
      $get:
        | {
            input: { param: { execution_id: string } }
            output: ExecutionTraceInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { execution_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/executions/:execution_id/trace/otel': {
      $get:
        | {
            input: { param: { execution_id: string } }
            output: WorkflowExecutionTraceOTelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { execution_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/executions/:execution_id/trace/summary': {
      $get:
        | {
            input: { param: { execution_id: string } }
            output: WorkflowExecutionTraceSummaryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { execution_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/executions/:execution_id/trace/events': {
      $get:
        | {
            input: { param: { execution_id: string } } & {
              query: { merge_same_id_events?: string; include_internal_events?: string }
            }
            output: WorkflowExecutionTraceEventsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { execution_id: string } } & {
              query: { merge_same_id_events?: string; include_internal_events?: string }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/executions/:execution_id/stream': {
      $get:
        | {
            input: { param: { execution_id: string } } & {
              query: { event_source?: unknown; last_event_id?: unknown }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { execution_id: string } } & {
              query: { event_source?: unknown; last_event_id?: unknown }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/executions/:execution_id/logs': {
      $get:
        | {
            input: { param: { execution_id: string } } & {
              query: {
                run_id?: unknown
                activity_id?: unknown
                after?: unknown
                before?: unknown
                order?: 'asc' | 'desc'
                cursor?: unknown
                limit?: unknown
              }
            }
            output: ExecutionLogSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { execution_id: string } } & {
              query: {
                run_id?: unknown
                activity_id?: unknown
                after?: unknown
                before?: unknown
                order?: 'asc' | 'desc'
                cursor?: unknown
                limit?: unknown
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/executions/:execution_id/logs/stream': {
      $get:
        | {
            input: { param: { execution_id: string } } & {
              query: {
                run_id?: unknown
                activity_id?: unknown
                after?: unknown
                last_event_id?: unknown
              }
            } & { header: { 'Last-Event-ID'?: unknown } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { execution_id: string } } & {
              query: {
                run_id?: unknown
                activity_id?: unknown
                after?: unknown
                last_event_id?: unknown
              }
            } & { header: { 'Last-Event-ID'?: unknown } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { execution_id: string } } & {
              query: {
                run_id?: unknown
                activity_id?: unknown
                after?: unknown
                last_event_id?: unknown
              }
            } & { header: { 'Last-Event-ID'?: unknown } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { execution_id: string } } & {
              query: {
                run_id?: unknown
                activity_id?: unknown
                after?: unknown
                last_event_id?: unknown
              }
            } & { header: { 'Last-Event-ID'?: unknown } }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/v1/workflows/:workflow_name/metrics': {
      $get:
        | {
            input: { param: { workflow_name: string } } & {
              query: { start_time?: unknown; end_time?: unknown }
            }
            output: WorkflowMetrics
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflow_name: string } } & {
              query: { start_time?: unknown; end_time?: unknown }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/runs': {
      $get:
        | {
            input: {
              query: {
                workflow_identifier?: unknown
                root_execution_id?: unknown
                search?: unknown
                status?: WorkflowExecutionStatusInput | WorkflowExecutionStatusInput[] | null
                deployment_name?: unknown
                sort_by?: unknown
                order?: 'asc' | 'desc'
                start_time_after?: unknown
                start_time_before?: unknown
                end_time_after?: unknown
                end_time_before?: unknown
                user_id?: unknown
                workflow_tags?: string[] | null
                exclude_workflow_tags?: string[] | null
                include_internal?: string
                page_size?: unknown
                next_page_token?: unknown
                search_key?: string[] | null
              }
            }
            output: WorkflowExecutionListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                workflow_identifier?: unknown
                root_execution_id?: unknown
                search?: unknown
                status?: WorkflowExecutionStatusInput | WorkflowExecutionStatusInput[] | null
                deployment_name?: unknown
                sort_by?: unknown
                order?: 'asc' | 'desc'
                start_time_after?: unknown
                start_time_before?: unknown
                end_time_after?: unknown
                end_time_before?: unknown
                user_id?: unknown
                workflow_tags?: string[] | null
                exclude_workflow_tags?: string[] | null
                include_internal?: string
                page_size?: unknown
                next_page_token?: unknown
                search_key?: string[] | null
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/runs/:run_id': {
      $get:
        | {
            input: { param: { run_id: string } }
            output: WorkflowExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { run_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/runs/:run_id/history': {
      $get:
        | {
            input: { param: { run_id: string } } & { query: { decode_payloads?: string } }
            output: any
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { run_id: string } } & { query: { decode_payloads?: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/schedules': {
      $get:
        | {
            input: {
              query: {
                workflow_name?: unknown
                user_id?: unknown
                status?: unknown
                search?: unknown
                page_size?: unknown
                next_page_token?: unknown
              }
            }
            output: WorkflowScheduleListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                workflow_name?: unknown
                user_id?: unknown
                status?: unknown
                search?: unknown
                page_size?: unknown
                next_page_token?: unknown
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { json: WorkflowScheduleRequestInput }
            output: WorkflowScheduleResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: WorkflowScheduleRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/schedules/:schedule_id': {
      $get:
        | {
            input: { param: { schedule_id: string } }
            output: ScheduleDefinitionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { schedule_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { schedule_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { schedule_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { schedule_id: string } } & { json: WorkflowScheduleUpdateRequestInput }
            output: WorkflowScheduleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { schedule_id: string } } & { json: WorkflowScheduleUpdateRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/schedules/:schedule_id/pause': {
      $post:
        | {
            input: { param: { schedule_id: string } } & {
              json: WorkflowSchedulePauseRequestInput | null
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { schedule_id: string } } & {
              json: WorkflowSchedulePauseRequestInput | null
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/schedules/:schedule_id/resume': {
      $post:
        | {
            input: { param: { schedule_id: string } } & {
              json: WorkflowSchedulePauseRequestInput | null
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { schedule_id: string } } & {
              json: WorkflowSchedulePauseRequestInput | null
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/schedules/:schedule_id/trigger': {
      $post:
        | {
            input: { param: { schedule_id: string } } & {
              json: WorkflowScheduleTriggerRequestInput | null
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { schedule_id: string } } & {
              json: WorkflowScheduleTriggerRequestInput | null
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/events/stream': {
      $get:
        | {
            input: {
              query: {
                scope?: 'activity' | 'workflow' | '*'
                activity_name?: string
                activity_id?: string
                workflow_name?: string
                workflow_exec_id?: string
                root_workflow_exec_id?: string
                parent_workflow_exec_id?: string
                stream?: string
                start_seq?: unknown
                metadata_filters?: { [key: string]: unknown } | null
                workflow_event_types?: WorkflowEventTypeInput[] | null
              }
            } & { header: { 'last-event-id'?: unknown } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                scope?: 'activity' | 'workflow' | '*'
                activity_name?: string
                activity_id?: string
                workflow_name?: string
                workflow_exec_id?: string
                root_workflow_exec_id?: string
                parent_workflow_exec_id?: string
                stream?: string
                start_seq?: unknown
                metadata_filters?: { [key: string]: unknown } | null
                workflow_event_types?: WorkflowEventTypeInput[] | null
              }
            } & { header: { 'last-event-id'?: unknown } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                scope?: 'activity' | 'workflow' | '*'
                activity_name?: string
                activity_id?: string
                workflow_name?: string
                workflow_exec_id?: string
                root_workflow_exec_id?: string
                parent_workflow_exec_id?: string
                stream?: string
                start_seq?: unknown
                metadata_filters?: { [key: string]: unknown } | null
                workflow_event_types?: WorkflowEventTypeInput[] | null
              }
            } & { header: { 'last-event-id'?: unknown } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/events/list': {
      $get:
        | {
            input: {
              query: {
                root_workflow_exec_id?: unknown
                workflow_exec_id?: unknown
                workflow_run_id?: unknown
                limit?: unknown
                cursor?: unknown
              }
            }
            output: ListWorkflowEventResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                root_workflow_exec_id?: unknown
                workflow_exec_id?: unknown
                workflow_run_id?: unknown
                limit?: unknown
                cursor?: unknown
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/deployments/:deployment_id/unharden': {
      $post:
        | {
            input: { param: { deployment_id: string } } & { query: { workspace_id?: unknown } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { deployment_id: string } } & { query: { workspace_id?: unknown } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { deployment_id: string } } & { query: { workspace_id?: unknown } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { deployment_id: string } } & { query: { workspace_id?: unknown } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { deployment_id: string } } & { query: { workspace_id?: unknown } }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/v1/workflows/deployments': {
      $get:
        | {
            input: {
              query: {
                active_only?: string
                is_hardened?: unknown
                workflow_name?: unknown
                created_by?: unknown
                owner?: unknown
                location_types?: LocationTypeInput[] | null
                search?: unknown
                order_by?: unknown
                order?: 'asc' | 'desc'
                limit?: unknown
                cursor?: unknown
                workspace_id?: unknown
                repository_url?: unknown
                dockerfile_path?: unknown
              }
            }
            output: DeploymentListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                active_only?: string
                is_hardened?: unknown
                workflow_name?: unknown
                created_by?: unknown
                owner?: unknown
                location_types?: LocationTypeInput[] | null
                search?: unknown
                order_by?: unknown
                order?: 'asc' | 'desc'
                limit?: unknown
                cursor?: unknown
                workspace_id?: unknown
                repository_url?: unknown
                dockerfile_path?: unknown
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { json: CreateDeploymentRequestInput }
            output: ManagedDeploymentResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: CreateDeploymentRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/deployments/:name': {
      $patch:
        | {
            input: { param: { name: string } } & { json: UpdateDeploymentRequestInput }
            output: ManagedDeploymentResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } } & { json: UpdateDeploymentRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { name: string } }
            output: ManagedDeploymentResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { name: string } } & { query: { workflow_name?: unknown } }
            output: DeploymentDetailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { workflow_name?: unknown } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/deployments/:name/stop': {
      $post:
        | {
            input: { param: { name: string } }
            output: ManagedDeploymentResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/deployments/:name/start': {
      $post:
        | {
            input: { param: { name: string } }
            output: ManagedDeploymentResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/deployments/:name/restart': {
      $post:
        | {
            input: { param: { name: string } }
            output: ManagedDeploymentResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/deployments/:name/workers': {
      $get:
        | {
            input: { param: { name: string } } & {
              query: { worker_status?: unknown; limit?: unknown; cursor?: unknown }
            }
            output: DeploymentWorkerListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: { worker_status?: unknown; limit?: unknown; cursor?: unknown }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/deployments/:name/archive': {
      $get:
        | {
            input: { param: { name: string } }
            output: DeploymentArchiveResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/deployments/archives': {
      $post:
        | {
            input: { json: CreateDeploymentArchiveRequestInput }
            output: DeploymentArchiveUploadResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateDeploymentArchiveRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/deployments/:name/logs': {
      $get:
        | {
            input: { param: { name: string } } & {
              query: {
                log_type?: DeploymentLogTypeInput
                worker_name?: unknown
                workflow_name?: unknown
                after?: unknown
                before?: unknown
                order?: 'asc' | 'desc'
                cursor?: unknown
                limit?: unknown
              }
            }
            output: DeploymentLogSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                log_type?: DeploymentLogTypeInput
                worker_name?: unknown
                workflow_name?: unknown
                after?: unknown
                before?: unknown
                order?: 'asc' | 'desc'
                cursor?: unknown
                limit?: unknown
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/deployments/:name/logs/stream': {
      $get:
        | {
            input: { param: { name: string } } & {
              query: {
                worker_name?: unknown
                workflow_name?: unknown
                after?: unknown
                last_event_id?: unknown
              }
            } & { header: { 'Last-Event-ID'?: unknown } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                worker_name?: unknown
                workflow_name?: unknown
                after?: unknown
                last_event_id?: unknown
              }
            } & { header: { 'Last-Event-ID'?: unknown } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: {
                worker_name?: unknown
                workflow_name?: unknown
                after?: unknown
                last_event_id?: unknown
              }
            } & { header: { 'Last-Event-ID'?: unknown } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { name: string } } & {
              query: {
                worker_name?: unknown
                workflow_name?: unknown
                after?: unknown
                last_event_id?: unknown
              }
            } & { header: { 'Last-Event-ID'?: unknown } }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/v1/workflows': {
      $get:
        | {
            input: {
              query: {
                status?: WorkflowExecutionStatusInput | WorkflowExecutionStatusInput[] | null
                include_shared?: string
                available_in_chat_assistant?: unknown
                deployment_name?: string[] | null
                deployment_status?: unknown
                archived?: unknown
                tags?: string[] | null
                exclude_tags?: string[] | null
                sort_by?: unknown
                order?: 'asc' | 'desc'
                cursor?: unknown
                limit?: unknown
                active_only?: string
                search?: unknown
              }
            }
            output: WorkflowListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                status?: WorkflowExecutionStatusInput | WorkflowExecutionStatusInput[] | null
                include_shared?: string
                available_in_chat_assistant?: unknown
                deployment_name?: string[] | null
                deployment_status?: unknown
                archived?: unknown
                tags?: string[] | null
                exclude_tags?: string[] | null
                sort_by?: unknown
                order?: 'asc' | 'desc'
                cursor?: unknown
                limit?: unknown
                active_only?: string
                search?: unknown
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/registrations': {
      $get:
        | {
            input: {
              query: {
                workflow_id?: unknown
                task_queue?: unknown
                active_only?: string
                include_shared?: string
                workflow_name?: unknown
                workflow_search?: unknown
                archived?: unknown
                with_workflow?: string
                available_in_chat_assistant?: unknown
                exclude_tags?: string[] | null
                limit?: unknown
                cursor?: unknown
              }
            }
            output: WorkflowRegistrationListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                workflow_id?: unknown
                task_queue?: unknown
                active_only?: string
                include_shared?: string
                workflow_name?: unknown
                workflow_search?: unknown
                archived?: unknown
                with_workflow?: string
                available_in_chat_assistant?: unknown
                exclude_tags?: string[] | null
                limit?: unknown
                cursor?: unknown
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/:workflow_identifier/execute': {
      $post:
        | {
            input: { param: { workflow_identifier: string } } & {
              json: WorkflowExecutionRequestInput
            }
            output: WorkflowExecutionResponse | WorkflowExecutionSyncResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflow_identifier: string } } & {
              json: WorkflowExecutionRequestInput
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/registrations/:workflow_registration_id/execute': {
      $post:
        | {
            input: { param: { workflow_registration_id: string } } & {
              json: WorkflowExecutionRequestInput
            }
            output: WorkflowExecutionResponse | WorkflowExecutionSyncResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflow_registration_id: string } } & {
              json: WorkflowExecutionRequestInput
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/:workflow_identifier': {
      $get:
        | {
            input: { param: { workflow_identifier: string } }
            output: WorkflowGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflow_identifier: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { param: { workflow_identifier: string } } & { json: WorkflowUpdateRequestInput }
            output: WorkflowUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflow_identifier: string } } & { json: WorkflowUpdateRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/registrations/:workflow_registration_id': {
      $get:
        | {
            input: { param: { workflow_registration_id: string } } & {
              query: { with_workflow?: string; include_shared?: string }
            }
            output: WorkflowRegistrationGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflow_registration_id: string } } & {
              query: { with_workflow?: string; include_shared?: string }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/archive': {
      $put:
        | {
            input: { json: WorkflowBulkArchiveRequestInput }
            output: WorkflowBulkArchiveResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WorkflowBulkArchiveRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/unarchive': {
      $put:
        | {
            input: { json: WorkflowBulkUnarchiveRequestInput }
            output: WorkflowBulkUnarchiveResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WorkflowBulkUnarchiveRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/:workflow_identifier/tags': {
      $post:
        | {
            input: { param: { workflow_identifier: string } } & {
              json: WorkflowTagsAddRequestInput
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workflow_identifier: string } } & {
              json: WorkflowTagsAddRequestInput
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/:workflow_identifier/archive': {
      $put:
        | {
            input: { param: { workflow_identifier: string } }
            output: WorkflowArchiveResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflow_identifier: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workflows/:workflow_identifier/unarchive': {
      $put:
        | {
            input: { param: { workflow_identifier: string } }
            output: WorkflowUnarchiveResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflow_identifier: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/rag/ingestion_pipeline_configurations': {
      $get: {
        input: {}
        output: IngestionPipelineConfiguration[]
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { json: CreateIngestionPipelineConfigurationRequestInput }
            output: IngestionPipelineConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateIngestionPipelineConfigurationRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/rag/ingestion_pipeline_configurations/:id/run_info': {
      $put:
        | {
            input: { param: { id: string } } & { json: UpdateRunInfoInput }
            output: IngestionPipelineConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateRunInfoInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/context/search-indexes': {
      $post:
        | {
            input: { json: CreateManagedIndexRequestInput }
            output: ManagedIndexResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: CreateManagedIndexRequestInput }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: CreateManagedIndexRequestInput }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { json: CreateManagedIndexRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CreateManagedIndexRequestInput }
            output: {}
            outputFormat: string
            status: 503
          }
      $get:
        | {
            input: {
              query: {
                page_size?: unknown
                page_token?: unknown
                name?: unknown
                status?: unknown
                creator_id?: unknown
              }
            }
            output: ListManagedIndexesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page_size?: unknown
                page_token?: unknown
                name?: unknown
                status?: unknown
                creator_id?: unknown
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                page_size?: unknown
                page_token?: unknown
                name?: unknown
                status?: unknown
                creator_id?: unknown
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                page_size?: unknown
                page_token?: unknown
                name?: unknown
                status?: unknown
                creator_id?: unknown
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/v1/context/search-indexes/:index_name': {
      $get:
        | {
            input: { param: { index_name: string } }
            output: ManagedIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index_name: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { index_name: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { index_name: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { index_name: string } }
            output: {}
            outputFormat: string
            status: 503
          }
      $put:
        | {
            input: { param: { index_name: string } } & { json: UpdateManagedIndexRequestInput }
            output: ManagedIndexResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index_name: string } } & { json: UpdateManagedIndexRequestInput }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { index_name: string } } & { json: UpdateManagedIndexRequestInput }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { index_name: string } } & { json: UpdateManagedIndexRequestInput }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { index_name: string } } & { json: UpdateManagedIndexRequestInput }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { index_name: string } } & { json: UpdateManagedIndexRequestInput }
            output: {}
            outputFormat: string
            status: 503
          }
      $delete:
        | {
            input: { param: { index_name: string } }
            output: DeleteManagedIndexResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { index_name: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { index_name: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { index_name: string } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { index_name: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { index_name: string } }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/v1/context/search-indexes/:index_name/documents': {
      $post:
        | {
            input: { param: { index_name: string } } & { json: IngestDocumentsRequestInput }
            output: IngestDocumentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index_name: string } } & { json: IngestDocumentsRequestInput }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { index_name: string } } & { json: IngestDocumentsRequestInput }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { index_name: string } } & { json: IngestDocumentsRequestInput }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { index_name: string } } & { json: IngestDocumentsRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { index_name: string } } & { json: IngestDocumentsRequestInput }
            output: {}
            outputFormat: string
            status: 503
          }
      $delete:
        | {
            input: { param: { index_name: string } } & { json: DeleteDocumentsRequestInput }
            output: DeleteDocumentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index_name: string } } & { json: DeleteDocumentsRequestInput }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { index_name: string } } & { json: DeleteDocumentsRequestInput }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { index_name: string } } & { json: DeleteDocumentsRequestInput }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { index_name: string } } & { json: DeleteDocumentsRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { index_name: string } } & { json: DeleteDocumentsRequestInput }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/v1/context/search-indexes/:index_name/search': {
      $post:
        | {
            input: { param: { index_name: string } } & { json: SearchRequestInput }
            output: SearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index_name: string } } & { json: SearchRequestInput }
            output: (
              | MissingFieldResponse
              | MissingEmbeddingResponse
              | IncorrectFieldTypeResponse
              | EmbeddingMismatchResponse
              | MaxCandidatesTooSmallResponse
              | TopKTooLargeResponse
            )[]
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { index_name: string } } & { json: SearchRequestInput }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { index_name: string } } & { json: SearchRequestInput }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { index_name: string } } & { json: SearchRequestInput }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { index_name: string } } & { json: SearchRequestInput }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { index_name: string } } & { json: SearchRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { index_name: string } } & { json: SearchRequestInput }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { index_name: string } } & { json: SearchRequestInput }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { index_name: string } } & { json: SearchRequestInput }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/v1/context/search-indexes/:index_name/navigate': {
      $post:
        | {
            input: { param: { index_name: string } } & { json: NavigateRequestInput }
            output: NavigationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index_name: string } } & { json: NavigateRequestInput }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { index_name: string } } & { json: NavigateRequestInput }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { index_name: string } } & { json: NavigateRequestInput }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { index_name: string } } & { json: NavigateRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { index_name: string } } & { json: NavigateRequestInput }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { index_name: string } } & { json: NavigateRequestInput }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/v1/context/search-indexes/:index_name/read': {
      $post:
        | {
            input: { param: { index_name: string } } & { json: ReadRequestInput }
            output: NavigationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index_name: string } } & { json: ReadRequestInput }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { index_name: string } } & { json: ReadRequestInput }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { index_name: string } } & { json: ReadRequestInput }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { index_name: string } } & { json: ReadRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { index_name: string } } & { json: ReadRequestInput }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { index_name: string } } & { json: ReadRequestInput }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/v1/context/search-indexes/:index_name/grep': {
      $post:
        | {
            input: { param: { index_name: string } } & { json: GrepRequestInput }
            output: NavigationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index_name: string } } & { json: GrepRequestInput }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { index_name: string } } & { json: GrepRequestInput }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { index_name: string } } & { json: GrepRequestInput }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { index_name: string } } & { json: GrepRequestInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { index_name: string } } & { json: GrepRequestInput }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { index_name: string } } & { json: GrepRequestInput }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/v1/context/search-indexes/:index_name/chunks/:chunk_id': {
      $get:
        | {
            input: { param: { index_name: string; chunk_id: string } }
            output: NavigationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { index_name: string; chunk_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { index_name: string; chunk_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { index_name: string; chunk_id: string } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { index_name: string; chunk_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { index_name: string; chunk_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { index_name: string; chunk_id: string } }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/v1/context/search-indexes/:index_name/summary_field/:language': {
      $get:
        | {
            input: {
              param: {
                language: 'en' | 'fr' | 'es' | 'de' | 'it' | 'pt_br' | 'pl' | 'ar' | 'nl'
                index_name: string
              }
            }
            output: GetSummaryResponseSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                language: 'en' | 'fr' | 'es' | 'de' | 'it' | 'pt_br' | 'pl' | 'ar' | 'nl'
                index_name: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                language: 'en' | 'fr' | 'es' | 'de' | 'it' | 'pt_br' | 'pl' | 'ar' | 'nl'
                index_name: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                language: 'en' | 'fr' | 'es' | 'de' | 'it' | 'pt_br' | 'pl' | 'ar' | 'nl'
                index_name: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                language: 'en' | 'fr' | 'es' | 'de' | 'it' | 'pt_br' | 'pl' | 'ar' | 'nl'
                index_name: string
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              param: {
                language: 'en' | 'fr' | 'es' | 'de' | 'it' | 'pt_br' | 'pl' | 'ar' | 'nl'
                index_name: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              param: {
                language: 'en' | 'fr' | 'es' | 'de' | 'it' | 'pt_br' | 'pl' | 'ar' | 'nl'
                index_name: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
      $post:
        | {
            input: {
              param: {
                language: 'en' | 'fr' | 'es' | 'de' | 'it' | 'pt_br' | 'pl' | 'ar' | 'nl'
                index_name: string
              }
            } & { query: { force?: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                language: 'en' | 'fr' | 'es' | 'de' | 'it' | 'pt_br' | 'pl' | 'ar' | 'nl'
                index_name: string
              }
            } & { query: { force?: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                language: 'en' | 'fr' | 'es' | 'de' | 'it' | 'pt_br' | 'pl' | 'ar' | 'nl'
                index_name: string
              }
            } & { query: { force?: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                language: 'en' | 'fr' | 'es' | 'de' | 'it' | 'pt_br' | 'pl' | 'ar' | 'nl'
                index_name: string
              }
            } & { query: { force?: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                language: 'en' | 'fr' | 'es' | 'de' | 'it' | 'pt_br' | 'pl' | 'ar' | 'nl'
                index_name: string
              }
            } & { query: { force?: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              param: {
                language: 'en' | 'fr' | 'es' | 'de' | 'it' | 'pt_br' | 'pl' | 'ar' | 'nl'
                index_name: string
              }
            } & { query: { force?: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              param: {
                language: 'en' | 'fr' | 'es' | 'de' | 'it' | 'pt_br' | 'pl' | 'ar' | 'nl'
                index_name: string
              }
            } & { query: { force?: string } }
            output: {}
            outputFormat: string
            status: 503
          }
      $put:
        | {
            input: {
              param: {
                language: 'en' | 'fr' | 'es' | 'de' | 'it' | 'pt_br' | 'pl' | 'ar' | 'nl'
                index_name: string
              }
            } & { json: UpdateSummaryRequestSummaryInput }
            output: any
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                language: 'en' | 'fr' | 'es' | 'de' | 'it' | 'pt_br' | 'pl' | 'ar' | 'nl'
                index_name: string
              }
            } & { json: UpdateSummaryRequestSummaryInput }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                language: 'en' | 'fr' | 'es' | 'de' | 'it' | 'pt_br' | 'pl' | 'ar' | 'nl'
                index_name: string
              }
            } & { json: UpdateSummaryRequestSummaryInput }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                language: 'en' | 'fr' | 'es' | 'de' | 'it' | 'pt_br' | 'pl' | 'ar' | 'nl'
                index_name: string
              }
            } & { json: UpdateSummaryRequestSummaryInput }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                language: 'en' | 'fr' | 'es' | 'de' | 'it' | 'pt_br' | 'pl' | 'ar' | 'nl'
                index_name: string
              }
            } & { json: UpdateSummaryRequestSummaryInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              param: {
                language: 'en' | 'fr' | 'es' | 'de' | 'it' | 'pt_br' | 'pl' | 'ar' | 'nl'
                index_name: string
              }
            } & { json: UpdateSummaryRequestSummaryInput }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              param: {
                language: 'en' | 'fr' | 'es' | 'de' | 'it' | 'pt_br' | 'pl' | 'ar' | 'nl'
                index_name: string
              }
            } & { json: UpdateSummaryRequestSummaryInput }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/v1/triggers': {
      $post:
        | {
            input: { json: CreateTriggerInput }
            output: Trigger
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateTriggerInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              query: { handler?: unknown; primitive_id?: unknown; event_source_id?: unknown }
            }
            output: Trigger[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { handler?: unknown; primitive_id?: unknown; event_source_id?: unknown }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/triggers/:trigger_id': {
      $get:
        | {
            input: { param: { trigger_id: string } }
            output: Trigger
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { trigger_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { trigger_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { trigger_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/triggers/:trigger_id/events': {
      $get:
        | {
            input: { param: { trigger_id: string } } & { query: { limit?: unknown } }
            output: TriggerEventList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { trigger_id: string } } & { query: { limit?: unknown } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/webhooks': {
      $get: { input: {}; output: Webhook[]; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { json: CreateWebhookInput }
            output: Webhook
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateWebhookInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/webhooks/:webhook_id': {
      $get:
        | {
            input: { param: { webhook_id: string } }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { webhook_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { webhook_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/webhooks/:webhook_id/signing-secret': {
      $get:
        | {
            input: { param: { webhook_id: string } }
            output: WebhookSigningSecret
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/users/me': { $get: { input: {}; output: UserIdentity; outputFormat: 'json'; status: 200 } }
  } & {
    '/v1/users/me/organizations': {
      $get: {
        input: { query: { offset?: unknown; limit?: unknown } }
        output: ListOrganizationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users/me/workspaces': {
      $get: {
        input: { query: { organization_id?: unknown; offset?: unknown; limit?: unknown } }
        output: ListWorkspacesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/whoami': { $get: { input: {}; output: WhoamiResponse; outputFormat: 'json'; status: 200 } }
  } & {
    '/v1/billing/budget': {
      $get: { input: {}; output: GetBudgetResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/billing/subscription': {
      $get: { input: {}; output: GetSubscriptionResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/admin/usage/query': {
      $post:
        | {
            input: { json: UsageQueryINInput }
            output: UsageQueryOUT
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UsageQueryINInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/admin/users': {
      $get: {
        input: {
          query: { page?: unknown; page_size?: unknown; email?: unknown; include_inactive?: string }
        }
        output: OrganizationAdminUsersOUT
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: OrganizationMemberCreateInput[] }
        output: OrganizationUsersCreateOUT
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/admin/users-invite': {
      $post: {
        input: { json: OrganizationInviteINInput }
        output: OrganizationInvitesCreateOUT
        outputFormat: 'json'
        status: 200
      }
      $get: { input: {}; output: OrganizationUserInviteOUT[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/admin/users-invite/:invite_uuid': {
      $delete: {
        input: { param: { invite_uuid: string } }
        output: DeleteOUT
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/admin/users/:user_id': {
      $patch: {
        input: { param: { user_id: string } } & { json: AdminOrganizationMemberUpdateInput }
        output: AdminOrganizationMemberOUT
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { user_id: string } }
        output: DeleteOUT
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { user_id: string } }
        output: AdminUserOUT
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/admin/users/:user_id/deactivate': {
      $post: {
        input: { param: { user_id: string } }
        output: DeactivateUserOUT
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/admin/users/:user_id/reactivate': {
      $post: {
        input: { param: { user_id: string } }
        output: ReactivateUserOUT
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/admin/users/:user_id/workspaces': {
      $get: {
        input: { param: { user_id: string } } & { query: { page?: unknown; page_size?: unknown } }
        output: AdminUserWorkspacesOUT
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/admin/roles': { $get: { input: {}; output: RolesOut; outputFormat: 'json'; status: 200 } }
  } & {
    '/v1/admin/workspaces': {
      $get: {
        input: {
          query: { is_archived?: string; page?: unknown; page_size?: unknown; search?: unknown }
        }
        output: WorkspacesOut
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: AdminWorkspaceInInput }
        output: WorkspaceEnrichedOUT
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/admin/workspaces/:workspace_uuid': {
      $patch: {
        input: { param: { workspace_uuid: string } } & { json: UpdateWorkspaceINInput }
        output: WorkspaceOUT
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { workspace_uuid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/admin/workspaces/:workspace_uuid/users': {
      $get: {
        input: { param: { workspace_uuid: string } } & {
          query: { page?: unknown; page_size?: unknown; include_inactive?: string }
        }
        output: AdminWorkspaceUsersOUT
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { workspace_uuid: string } } & { json: AdminWorkspaceMemberUpsertINInput }
        output: AddOrUpdateUsersToWorkspaceOUT
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/admin/workspaces/:workspace_uuid/add-users': {
      $post: {
        input: { param: { workspace_uuid: string } } & { json: AdminWorkspaceMemberINInput }
        output: AddUsersToWorkspaceOUT
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/admin/workspaces/:workspace_uuid/remove-users': {
      $delete: {
        input: { param: { workspace_uuid: string } } & { json: RemoveWorkspaceMembersINInput }
        output: RemoveWorkspaceMembersOUT
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/admin/rate-limit': {
      $get: { input: {}; output: RateLimitsOUT; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/admin/spend-limit': {
      $get: { input: {}; output: LimitsOUT; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: NewUsageLimitINInput }
        output: LimitsOUT
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/admin/usage': {
      $get: {
        input: {
          query: { month?: unknown; year?: unknown; workspace_id?: unknown; api_zone?: unknown }
        }
        output: UsageOUTJSON
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/admin/audit-logs': {
      $get: {
        input: {
          query: {
            actor_type?: ActorTypeInput[] | null
            event_type?: AuditLogEventTypeInput[] | null
            target_type?: TargetTypeInput[] | null
            actor_user_uuid?: unknown
            sort?: 'ascending' | 'descending'
            after?: unknown
            before?: unknown
            limit?: unknown
          }
        }
        output: AuditLogOut[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/admin/user-groups': {
      $get: {
        input: {
          query: {
            page?: unknown
            page_size?: unknown
            search?: unknown
            workspace_uuid?: unknown
            role?: unknown
          }
        }
        output: AdminUserGroupsOut
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: AdminUserGroupInInput }
        output: AdminUserGroupOut
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/admin/user-groups/provision-workspace': {
      $post: {
        input: { json: AdminProvisionGroupToWorkspaceInInput }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/admin/user-groups/:group_uuid': {
      $get: {
        input: { param: { group_uuid: string } }
        output: AdminUserGroupOut
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { group_uuid: string } } & { json: AdminUpdateUserGroupInInput }
        output: AdminUserGroupOut
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { group_uuid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/admin/user-groups/:group_uuid/members': {
      $get: {
        input: { param: { group_uuid: string } } & {
          query: { page?: unknown; page_size?: unknown }
        }
        output: AdminUserGroupMembersOut
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { group_uuid: string } } & { json: AdminAssignUsersToGroupInInput }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { group_uuid: string } } & { json: AdminAssignUsersToGroupInInput }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/admin/user-groups/:group_uuid/workspaces': {
      $get: {
        input: { param: { group_uuid: string } } & {
          query: { page?: unknown; page_size?: unknown }
        }
        output: GroupWorkspaceAssignmentsOut
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { group_uuid: string } } & { json: AdminAssignGroupToWorkspaceInInput }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/v1/admin/user-groups/:group_uuid/workspaces/:workspace_uuid': {
      $patch: {
        input: { param: { group_uuid: string; workspace_uuid: string } } & {
          json: AdminUpdateGroupWorkspaceAssignmentInInput
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { group_uuid: string; workspace_uuid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/admin/user-groups/:group_uuid/organization-role': {
      $patch: {
        input: { param: { group_uuid: string } } & {
          json: AdminUpdateUserGroupOrganizationRoleInInput
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/admin/api-keys': {
      $get: {
        input: { query: { limit?: unknown; offset?: unknown; name?: unknown } }
        output: APIKeysExtendedOUT
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: AdminCreateAPIKeyINInput }
        output: APIKeyOUT
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/admin/api-keys/:key_id': {
      $delete: {
        input: { param: { key_id: string } }
        output: DeleteAPIKeyOUT
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/admin/scim/sync': {
      $post:
        | {
            input: { json: AdminScimSyncTriggerINInput }
            output: AdminScimSyncTriggerOUT
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: AdminScimSyncTriggerINInput }
            output: AdminScimSyncActiveRunOUT
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/admin/scim/sync/:run_id': {
      $get: {
        input: { param: { run_id: string } }
        output: AdminScimSyncRunOUT
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/admin/analytics/vibe/work/usage/by_user_stats': {
      $get:
        | {
            input: { query: { start_time: unknown; end_time: unknown } }
            output: VibeWorkByUserStatsOUT
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start_time: unknown; end_time: unknown } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/admin/analytics/vibe/work/usage/by_agent_stats': {
      $get:
        | {
            input: { query: { start_time: unknown; end_time: unknown } }
            output: VibeWorkByAgentStatsOUT
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start_time: unknown; end_time: unknown } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/admin/analytics/vibe/work/usage/by_time_stats': {
      $get:
        | {
            input: { query: { start_time: unknown; end_time: unknown; granularity?: unknown } }
            output: VibeWorkByTimeStatsOUT
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start_time: unknown; end_time: unknown; granularity?: unknown } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/admin/analytics/vibe/code/usage/by_workspace': {
      $get:
        | {
            input: { query: { start_time: unknown; end_time: unknown; workspace_id?: unknown } }
            output: VibeWorkspaceStatsOUT
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start_time: unknown; end_time: unknown; workspace_id?: unknown } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/admin/analytics/vibe/code/usage/by_organization': {
      $get:
        | {
            input: { query: { start_time: unknown; end_time: unknown } }
            output: VibeOrganizationStatsOUT
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { start_time: unknown; end_time: unknown } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  },
  '/'
>
export default routes
