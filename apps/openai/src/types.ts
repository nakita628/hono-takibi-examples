type AssistantToolsCode = { type: 'code_interpreter' }
type FileSearchRanker = 'auto' | 'default_2024_08_21'
type FileSearchRankingOptions = { ranker?: FileSearchRanker | undefined; score_threshold: number }
type AssistantToolsFileSearch = {
  type: 'file_search'
  file_search?:
    | {
        max_num_results?: number | undefined
        ranking_options?: FileSearchRankingOptions | undefined
      }
    | undefined
}
type FunctionParameters = { [key: string]: unknown }
type FunctionObject = {
  description?: string | undefined
  name: string
  parameters?: FunctionParameters | undefined
  strict?: (boolean | null) | undefined
}
type AssistantToolsFunction = { type: 'function'; function: FunctionObject }
type Metadata = { [key: string]: string } | null
type ResponseFormatText = { type: 'text' }
type ResponseFormatJsonObject = { type: 'json_object' }
type ResponseFormatJsonSchemaSchema = { [key: string]: unknown }
type ResponseFormatJsonSchema = {
  type: 'json_schema'
  json_schema: {
    description?: string | undefined
    name: string
    schema?: ResponseFormatJsonSchemaSchema | undefined
    strict?: (boolean | null) | undefined
  }
}
type AssistantsApiResponseFormatOption =
  | 'auto'
  | ResponseFormatText
  | ResponseFormatJsonObject
  | ResponseFormatJsonSchema
type AssistantObject = {
  id: string
  object: 'assistant'
  created_at: number
  name: string | null
  description: string | null
  model: string
  instructions: string | null
  tools: (AssistantToolsCode | AssistantToolsFileSearch | AssistantToolsFunction)[]
  tool_resources?:
    | ({
        code_interpreter?: { file_ids?: string[] | undefined } | undefined
        file_search?: { vector_store_ids?: string[] | undefined } | undefined
      } | null)
    | undefined
  metadata: Metadata
  temperature?: (number | null) | undefined
  top_p?: (number | null) | undefined
  response_format?: (AssistantsApiResponseFormatOption | null) | undefined
}
type ListAssistantsResponse = {
  object: string
  data: AssistantObject[]
  first_id: string
  last_id: string
  has_more: boolean
}
type MisalignmentErrorType =
  | string
  | 'potentially_unintended_data_transfer'
  | 'potentially_unintended_data_access'
  | 'potentially_unintended_destructive_activity'
  | 'other'
type MisalignmentSteer = { message: string }
type MisalignmentErrorDetailsResource = {
  review_target?: (string | null) | undefined
  error_type?: MisalignmentErrorType | undefined
  detailed_explanation?: string | undefined
  steer?: MisalignmentSteer | undefined
}
type Error = {
  code: string | null
  message: string
  param: string | null
  type: string
  misalignment?: MisalignmentErrorDetailsResource | undefined
}
type ErrorResponse = { error: Error }
type AssistantSupportedModelsInput =
  | 'gpt-5'
  | 'gpt-5-mini'
  | 'gpt-5-nano'
  | 'gpt-5-2025-08-07'
  | 'gpt-5-mini-2025-08-07'
  | 'gpt-5-nano-2025-08-07'
  | 'gpt-4.1'
  | 'gpt-4.1-mini'
  | 'gpt-4.1-nano'
  | 'gpt-4.1-2025-04-14'
  | 'gpt-4.1-mini-2025-04-14'
  | 'gpt-4.1-nano-2025-04-14'
  | 'o3-mini'
  | 'o3-mini-2025-01-31'
  | 'o1'
  | 'o1-2024-12-17'
  | 'gpt-4o'
  | 'gpt-4o-2024-11-20'
  | 'gpt-4o-2024-08-06'
  | 'gpt-4o-2024-05-13'
  | 'gpt-4o-mini'
  | 'gpt-4o-mini-2024-07-18'
  | 'gpt-4.5-preview'
  | 'gpt-4.5-preview-2025-02-27'
  | 'gpt-4-turbo'
  | 'gpt-4-turbo-2024-04-09'
  | 'gpt-4-0125-preview'
  | 'gpt-4-turbo-preview'
  | 'gpt-4-1106-preview'
  | 'gpt-4-vision-preview'
  | 'gpt-4'
  | 'gpt-4-0314'
  | 'gpt-4-0613'
  | 'gpt-4-32k'
  | 'gpt-4-32k-0314'
  | 'gpt-4-32k-0613'
  | 'gpt-3.5-turbo'
  | 'gpt-3.5-turbo-16k'
  | 'gpt-3.5-turbo-0613'
  | 'gpt-3.5-turbo-1106'
  | 'gpt-3.5-turbo-0125'
  | 'gpt-3.5-turbo-16k-0613'
type ReasoningEffortInput = 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | 'max' | null
type AssistantToolsCodeInput = { type: 'code_interpreter' }
type FileSearchRankerInput = 'auto' | 'default_2024_08_21'
type FileSearchRankingOptionsInput = { ranker?: FileSearchRankerInput; score_threshold: number }
type AssistantToolsFileSearchInput = {
  type: 'file_search'
  file_search?: { max_num_results?: number; ranking_options?: FileSearchRankingOptionsInput }
}
type FunctionParametersInput = { [key: string]: unknown }
type FunctionObjectInput = {
  description?: string
  name: string
  parameters?: FunctionParametersInput
  strict?: boolean | null
}
type AssistantToolsFunctionInput = { type: 'function'; function: FunctionObjectInput }
type MetadataInput = { [key: string]: string } | null
type ResponseFormatTextInput = { type: 'text' }
type ResponseFormatJsonObjectInput = { type: 'json_object' }
type ResponseFormatJsonSchemaSchemaInput = { [key: string]: unknown }
type ResponseFormatJsonSchemaInput = {
  type: 'json_schema'
  json_schema: {
    description?: string
    name: string
    schema?: ResponseFormatJsonSchemaSchemaInput
    strict?: boolean | null
  }
}
type AssistantsApiResponseFormatOptionInput =
  | 'auto'
  | ResponseFormatTextInput
  | ResponseFormatJsonObjectInput
  | ResponseFormatJsonSchemaInput
type CreateAssistantRequestInput = {
  model: string | AssistantSupportedModelsInput
  name?: string | null
  description?: string | null
  instructions?: string | null
  reasoning_effort?: ReasoningEffortInput
  tools?: (AssistantToolsCodeInput | AssistantToolsFileSearchInput | AssistantToolsFunctionInput)[]
  tool_resources?: {
    code_interpreter?: { file_ids?: string[] }
    file_search?: unknown | unknown
  } | null
  metadata?: MetadataInput
  temperature?: number | null
  top_p?: number | null
  response_format?: AssistantsApiResponseFormatOptionInput | null
}
type ModifyAssistantRequestInput = {
  model?: string | AssistantSupportedModelsInput
  reasoning_effort?: ReasoningEffortInput
  name?: string | null
  description?: string | null
  instructions?: string | null
  tools?: (AssistantToolsCodeInput | AssistantToolsFileSearchInput | AssistantToolsFunctionInput)[]
  tool_resources?: {
    code_interpreter?: { file_ids?: string[] }
    file_search?: { vector_store_ids?: string[] }
  } | null
  metadata?: MetadataInput
  temperature?: number | null
  top_p?: number | null
  response_format?: AssistantsApiResponseFormatOptionInput | null
}
type DeleteAssistantResponse = { id: string; deleted: boolean; object: 'assistant.deleted' }
type VoiceIdsSharedInput =
  | string
  | 'alloy'
  | 'ash'
  | 'ballad'
  | 'coral'
  | 'echo'
  | 'sage'
  | 'shimmer'
  | 'verse'
  | 'marin'
  | 'cedar'
type CreateSpeechRequestInput = {
  model: string | 'tts-1' | 'tts-1-hd' | 'gpt-4o-mini-tts' | 'gpt-4o-mini-tts-2025-12-15'
  input: string
  instructions?: string
  voice: (VoiceIdsSharedInput | 'fable' | 'onyx' | 'nova') | { id: string }
  response_format?: 'mp3' | 'opus' | 'aac' | 'flac' | 'wav' | 'pcm'
  speed?: number
  stream_format?: 'sse' | 'audio'
}
type AudioResponseFormatInput = 'json' | 'text' | 'srt' | 'verbose_json' | 'vtt' | 'diarized_json'
type TranscriptionIncludeInput = 'logprobs'
type VadConfigInput = {
  type: 'server_vad'
  prefix_padding_ms?: number
  silence_duration_ms?: number
  threshold?: number
}
type CreateTranscriptionRequestInput = {
  file: File
  model:
    | string
    | 'whisper-1'
    | 'gpt-transcribe'
    | 'gpt-4o-transcribe'
    | 'gpt-4o-mini-transcribe'
    | 'gpt-4o-mini-transcribe-2025-12-15'
    | 'gpt-4o-transcribe-diarize'
  language?: string
  languages?: string[]
  keywords?: string[]
  prompt?: string
  response_format?: AudioResponseFormatInput
  temperature?: number
  include?: TranscriptionIncludeInput[]
  timestamp_granularities?: ('word' | 'segment')[]
  stream?: boolean | null
  chunking_strategy?: ('auto' | VadConfigInput) | null
  known_speaker_names?: string[]
  known_speaker_references?: string[]
}
type TranscriptionLanguage = { code: string }
type TranscriptTextUsageTokens = {
  type: 'tokens'
  input_tokens: number
  input_token_details?:
    | { text_tokens?: number | undefined; audio_tokens?: number | undefined }
    | undefined
  output_tokens: number
  total_tokens: number
}
type TranscriptTextUsageDuration = { type: 'duration'; seconds: number }
type CreateTranscriptionResponseJson = {
  text: string
  languages?: TranscriptionLanguage[] | undefined
  logprobs?:
    | { token?: string | undefined; logprob?: number | undefined; bytes?: number[] | undefined }[]
    | undefined
  usage?: (TranscriptTextUsageTokens | TranscriptTextUsageDuration) | undefined
}
type TranscriptionDiarizedSegment = {
  type: 'transcript.text.segment'
  id: string
  start: number
  end: number
  text: string
  speaker: string
}
type CreateTranscriptionResponseDiarizedJson = {
  task: 'transcribe'
  duration: number
  text: string
  segments: TranscriptionDiarizedSegment[]
  usage?: (TranscriptTextUsageTokens | TranscriptTextUsageDuration) | undefined
}
type TranscriptionWord = { word: string; start: number; end: number }
type TranscriptionSegment = {
  id: number
  seek: number
  start: number
  end: number
  text: string
  tokens: number[]
  temperature: number
  avg_logprob: number
  compression_ratio: number
  no_speech_prob: number
}
type CreateTranscriptionResponseVerboseJson = {
  language: string
  duration: number
  text: string
  words?: TranscriptionWord[] | undefined
  segments?: TranscriptionSegment[] | undefined
  usage?: TranscriptTextUsageDuration | undefined
}
type CreateTranslationRequestInput = {
  file: File
  model: string | 'whisper-1'
  prompt?: string
  response_format?: 'json' | 'text' | 'srt' | 'verbose_json' | 'vtt'
  temperature?: number
}
type CreateTranslationResponseJson = { text: string }
type CreateTranslationResponseVerboseJson = {
  language: string
  duration: number
  text: string
  segments?: TranscriptionSegment[] | undefined
}
type CreateVoiceConsentRequestInput = { name: string; recording: File; language: string }
type VoiceConsentResource = {
  object: 'audio.voice_consent'
  id: string
  name: string
  language: string
  created_at: number
}
type VoiceConsentListResource = {
  object: 'list'
  data: VoiceConsentResource[]
  first_id?: (string | null) | undefined
  last_id?: (string | null) | undefined
  has_more: boolean
}
type UpdateVoiceConsentRequestInput = { name: string }
type VoiceConsentDeletedResource = { id: string; object: 'audio.voice_consent'; deleted: boolean }
type CreateVoicePromptRequestInput = {
  type: 'prompt'
  name: string
  prompt: string
  script_hint?: string
  model?: string | 'auto' | '2026-10-08'
}
type CreateVoiceFromConsentRequestInput = {
  type?: 'audio_sample'
  name: string
  audio_sample: File
  consent: string
}
type CreateVoiceRequestInput = CreateVoiceFromConsentRequestInput | CreateVoicePromptRequestInput
type VoiceResource = {
  object: 'audio.voice'
  id: string
  type: 'audio_sample' | 'prompt'
  prompt?: string | undefined
  name: string
  created_at: number
}
type VoiceDeletedResource = { id: string; object: 'audio.voice.deleted'; deleted: boolean }
type BatchFileExpirationAfterInput = { anchor: 'created_at'; seconds: bigint }
type CreateBatchRequestInput = {
  input_file_id: string
  endpoint:
    | '/v1/responses'
    | '/v1/chat/completions'
    | '/v1/embeddings'
    | '/v1/completions'
    | '/v1/moderations'
    | '/v1/images/generations'
    | '/v1/images/edits'
    | '/v1/videos'
  completion_window: '24h'
  metadata?: MetadataInput
  output_expires_after?: BatchFileExpirationAfterInput
}
type BatchError = {
  code?: string | undefined
  message?: string | undefined
  param?: (string | null) | undefined
  line?: (number | null) | undefined
}
type BatchRequestCounts = { total: number; completed: number; failed: number }
type Batch = {
  id: string
  object: 'batch'
  endpoint: string
  model?: string | undefined
  errors?: ({ object?: string | undefined; data?: BatchError[] | undefined } | null) | undefined
  input_file_id: string
  completion_window: string
  status:
    | 'validating'
    | 'failed'
    | 'in_progress'
    | 'finalizing'
    | 'completed'
    | 'expired'
    | 'cancelling'
    | 'cancelled'
  output_file_id?: (string | null) | undefined
  error_file_id?: (string | null) | undefined
  created_at: number
  in_progress_at?: (number | null) | undefined
  expires_at?: (number | null) | undefined
  finalizing_at?: (number | null) | undefined
  completed_at?: (number | null) | undefined
  failed_at?: (number | null) | undefined
  expired_at?: (number | null) | undefined
  cancelling_at?: (number | null) | undefined
  cancelled_at?: (number | null) | undefined
  request_counts?: BatchRequestCounts | undefined
  usage?:
    | {
        input_tokens: number
        input_tokens_details: { cached_tokens: number }
        output_tokens: number
        output_tokens_details: { reasoning_tokens: number }
        total_tokens: number
      }
    | undefined
  metadata?: Metadata | undefined
}
type ListBatchesResponse = {
  data: Batch[]
  first_id?: string | undefined
  last_id?: string | undefined
  has_more: boolean
  object: 'list'
}
type ChatCompletionMessageToolCall = {
  id: string
  type: 'function'
  function: { name: string; arguments: string }
}
type ChatCompletionMessageCustomToolCall = {
  id: string
  type: 'custom'
  custom: { name: string; input: string }
}
type ChatCompletionMessageToolCalls = (
  | ChatCompletionMessageToolCall
  | ChatCompletionMessageCustomToolCall
)[]
type ChatCompletionResponseMessage = {
  content: string | null
  refusal?: (string | null) | undefined
  tool_calls?: (ChatCompletionMessageToolCalls | null) | undefined
  annotations?:
    | {
        type: 'url_citation'
        url_citation: { end_index: number; start_index: number; url: string; title: string }
      }[]
    | undefined
  role: 'assistant'
  function_call?: ({ arguments: string; name: string } | null) | undefined
  audio?: ({ id: string; expires_at: number; data: string; transcript: string } | null) | undefined
}
type ChatCompletionTokenLogprob = {
  token: string
  logprob: number
  bytes: number[] | null
  top_logprobs: { token: string; logprob: number; bytes: number[] | null }[]
}
type ServiceTier = 'auto' | 'default' | 'flex' | 'scale' | 'priority' | 'fast' | null
type CompletionUsage = {
  completion_tokens: number
  prompt_tokens: number
  total_tokens: number
  completion_tokens_details?:
    | {
        accepted_prediction_tokens?: number | undefined
        audio_tokens?: number | undefined
        reasoning_tokens?: number | undefined
        text_tokens?: number | undefined
        rejected_prediction_tokens?: number | undefined
      }
    | undefined
  prompt_tokens_details?:
    | {
        audio_tokens?: number | undefined
        cached_tokens?: number | undefined
        text_tokens?: number | undefined
        image_tokens?: number | undefined
        cache_write_tokens?: number | undefined
      }
    | undefined
}
type ModerationInputType = 'text' | 'image'
type ModerationResultBody = {
  type: 'moderation_result'
  model: string
  flagged: boolean
  categories: { [key: string]: boolean }
  category_scores: { [key: string]: number }
  category_applied_input_types: { [key: string]: ModerationInputType[] }
}
type ChatCompletionModerationResults = {
  type: 'moderation_results'
  model: string
  results: ModerationResultBody[]
}
type ChatCompletionModerationError = { type: 'error'; code: string; message: string }
type ChatCompletionModeration = {
  input: ChatCompletionModerationResults | ChatCompletionModerationError
  output: ChatCompletionModerationResults | ChatCompletionModerationError
}
type CreateChatCompletionResponse = {
  id: string
  choices: {
    finish_reason: 'stop' | 'length' | 'tool_calls' | 'content_filter' | 'function_call'
    index: number
    message: ChatCompletionResponseMessage
    logprobs: {
      content: ChatCompletionTokenLogprob[] | null
      refusal: ChatCompletionTokenLogprob[] | null
    } | null
  }[]
  created: number
  model: string
  metadata?: Metadata | undefined
  service_tier?: ServiceTier | undefined
  system_fingerprint?: string | undefined
  object: 'chat.completion'
  usage?: CompletionUsage | undefined
  moderation?: (ChatCompletionModeration | null) | undefined
}
type ChatCompletionList = {
  object: 'list'
  data: CreateChatCompletionResponse[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
}
type ModelResponsePropertiesInput = {
  metadata?: MetadataInput
  top_logprobs?: number | null
  temperature?: number | null
  top_p?: number | null
  user?: string | null
  safety_identifier?: string | null
  prompt_cache_key?: string | null
  prompt_cache_retention?: 'in_memory' | '24h' | null
}
type CreateModelResponsePropertiesInput = ModelResponsePropertiesInput & { top_logprobs?: number }
type PromptCacheTTLEnumInput = '30m'
type PromptCacheModeEnumInput = 'implicit' | 'explicit'
type PromptCacheOptionsParamInput = {
  ttl?: PromptCacheTTLEnumInput
  mode?: PromptCacheModeEnumInput
}
type PromptCacheBreakpointParamInput = { mode: 'explicit'; ttl?: '30m' | '12h' }
type ChatCompletionRequestMessageContentPartTextInput = {
  type: 'text'
  text: string
  prompt_cache_breakpoint?: PromptCacheBreakpointParamInput
}
type ChatCompletionRequestDeveloperMessageInput = {
  content: string | ChatCompletionRequestMessageContentPartTextInput[]
  role: 'developer'
  name?: string
}
type ChatCompletionRequestSystemMessageContentPartInput =
  ChatCompletionRequestMessageContentPartTextInput
type ChatCompletionRequestSystemMessageInput = {
  content: string | ChatCompletionRequestSystemMessageContentPartInput[]
  role: 'system'
  name?: string
}
type ChatCompletionRequestMessageContentPartImageInput = {
  type: 'image_url'
  image_url: { url: string; detail?: 'auto' | 'low' | 'high' | 'original' }
  prompt_cache_breakpoint?: PromptCacheBreakpointParamInput
}
type ChatCompletionRequestMessageContentPartAudioInput = {
  type: 'input_audio'
  input_audio: { data: string; format: 'wav' | 'mp3' }
  prompt_cache_breakpoint?: PromptCacheBreakpointParamInput
}
type ChatCompletionRequestMessageContentPartFileInput = {
  type: 'file'
  file: { filename?: string; file_data?: string; file_id?: string }
  prompt_cache_breakpoint?: PromptCacheBreakpointParamInput
}
type ChatCompletionRequestUserMessageContentPartInput =
  | ChatCompletionRequestMessageContentPartTextInput
  | ChatCompletionRequestMessageContentPartImageInput
  | ChatCompletionRequestMessageContentPartAudioInput
  | ChatCompletionRequestMessageContentPartFileInput
type ChatCompletionRequestUserMessageInput = {
  content: string | ChatCompletionRequestUserMessageContentPartInput[]
  role: 'user'
  name?: string
}
type ChatCompletionRequestMessageContentPartRefusalInput = { type: 'refusal'; refusal: string }
type ChatCompletionRequestAssistantMessageContentPartInput =
  | ChatCompletionRequestMessageContentPartTextInput
  | ChatCompletionRequestMessageContentPartRefusalInput
type ChatCompletionMessageToolCallInput = {
  id: string
  type: 'function'
  function: { name: string; arguments: string }
}
type ChatCompletionMessageCustomToolCallInput = {
  id: string
  type: 'custom'
  custom: { name: string; input: string }
}
type ChatCompletionMessageToolCallsInput = (
  | ChatCompletionMessageToolCallInput
  | ChatCompletionMessageCustomToolCallInput
)[]
type ChatCompletionRequestAssistantMessageInput = {
  content?: (string | ChatCompletionRequestAssistantMessageContentPartInput[]) | null
  refusal?: string | null
  role: 'assistant'
  name?: string
  audio?: { id: string } | null
  tool_calls?: ChatCompletionMessageToolCallsInput
  function_call?: { arguments: string; name: string } | null
}
type ChatCompletionRequestToolMessageContentPartInput =
  ChatCompletionRequestMessageContentPartTextInput
type ChatCompletionRequestToolMessageInput = {
  role: 'tool'
  content: string | ChatCompletionRequestToolMessageContentPartInput[]
  tool_call_id: string
}
type ChatCompletionRequestFunctionMessageInput = {
  role: 'function'
  content: string | null
  name: string
}
type ChatCompletionRequestMessageInput =
  | ChatCompletionRequestDeveloperMessageInput
  | ChatCompletionRequestSystemMessageInput
  | ChatCompletionRequestUserMessageInput
  | ChatCompletionRequestAssistantMessageInput
  | ChatCompletionRequestToolMessageInput
  | ChatCompletionRequestFunctionMessageInput
type ModelIdsSharedInput =
  | string
  | 'gpt-6-astra'
  | 'gpt-6.2-astra'
  | 'gpt-6.1-sol'
  | 'gpt-6.2-sol'
  | 'gpt-6.1-terra'
  | 'gpt-6-sol'
  | 'gpt-6-luna'
  | 'gpt-5.6-sol'
  | 'gpt-5.6-terra'
  | 'gpt-5.6-luna'
  | 'gpt-5.5'
  | 'gpt-5.5-2026-04-23'
  | 'gpt-5.4'
  | 'gpt-5.4-mini'
  | 'gpt-5.4-nano'
  | 'gpt-5.4-mini-2026-03-17'
  | 'gpt-5.4-nano-2026-03-17'
  | 'gpt-5.3-chat-latest'
  | 'gpt-5.2'
  | 'gpt-5.2-2025-12-11'
  | 'gpt-5.2-chat-latest'
  | 'gpt-5.2-pro'
  | 'gpt-5.2-pro-2025-12-11'
  | 'gpt-5.1'
  | 'gpt-5.1-2025-11-13'
  | 'gpt-5.1-codex'
  | 'gpt-5.1-mini'
  | 'gpt-5.1-chat-latest'
  | 'gpt-5'
  | 'gpt-5-mini'
  | 'gpt-5-nano'
  | 'gpt-5-2025-08-07'
  | 'gpt-5-mini-2025-08-07'
  | 'gpt-5-nano-2025-08-07'
  | 'gpt-5-chat-latest'
  | 'gpt-4.1'
  | 'gpt-4.1-mini'
  | 'gpt-4.1-nano'
  | 'gpt-4.1-2025-04-14'
  | 'gpt-4.1-mini-2025-04-14'
  | 'gpt-4.1-nano-2025-04-14'
  | 'o4-mini'
  | 'o4-mini-2025-04-16'
  | 'o3'
  | 'o3-2025-04-16'
  | 'o3-mini'
  | 'o3-mini-2025-01-31'
  | 'o1'
  | 'o1-2024-12-17'
  | 'o1-preview'
  | 'o1-preview-2024-09-12'
  | 'o1-mini'
  | 'o1-mini-2024-09-12'
  | 'gpt-4o'
  | 'gpt-4o-2024-11-20'
  | 'gpt-4o-2024-08-06'
  | 'gpt-4o-2024-05-13'
  | 'gpt-audio-mini'
  | 'gpt-audio-mini-2025-12-15'
  | 'gpt-4o-audio-preview'
  | 'gpt-4o-audio-preview-2024-10-01'
  | 'gpt-4o-audio-preview-2024-12-17'
  | 'gpt-4o-audio-preview-2025-06-03'
  | 'gpt-4o-mini-audio-preview'
  | 'gpt-4o-mini-audio-preview-2024-12-17'
  | 'gpt-4o-search-preview'
  | 'gpt-4o-mini-search-preview'
  | 'gpt-4o-search-preview-2025-03-11'
  | 'gpt-4o-mini-search-preview-2025-03-11'
  | 'chatgpt-4o-latest'
  | 'codex-mini-latest'
  | 'gpt-4o-mini'
  | 'gpt-4o-mini-2024-07-18'
  | 'gpt-4-turbo'
  | 'gpt-4-turbo-2024-04-09'
  | 'gpt-4-0125-preview'
  | 'gpt-4-turbo-preview'
  | 'gpt-4-1106-preview'
  | 'gpt-4-vision-preview'
  | 'gpt-4'
  | 'gpt-4-0314'
  | 'gpt-4-0613'
  | 'gpt-4-32k'
  | 'gpt-4-32k-0314'
  | 'gpt-4-32k-0613'
  | 'gpt-3.5-turbo'
  | 'gpt-3.5-turbo-16k'
  | 'gpt-3.5-turbo-0301'
  | 'gpt-3.5-turbo-0613'
  | 'gpt-3.5-turbo-1106'
  | 'gpt-3.5-turbo-0125'
  | 'gpt-3.5-turbo-16k-0613'
type ServiceTierInput = 'auto' | 'default' | 'flex' | 'scale' | 'priority' | 'fast' | null
type ResponseModalitiesInput = ('text' | 'audio')[] | null
type VerbosityInput = 'low' | 'medium' | 'high' | null
type WebSearchLocationInput = {
  country?: string
  region?: string
  city?: string
  timezone?: string
}
type WebSearchContextSizeInput = 'low' | 'medium' | 'high'
type VoiceIdsOrCustomVoiceInput = VoiceIdsSharedInput | { id: string }
type ModerationModeInput = 'score' | 'block'
type ModerationConfigParamInput = { mode: ModerationModeInput }
type ModerationPolicyParamInput = {
  input?: ModerationConfigParamInput | null
  output?: ModerationConfigParamInput | null
}
type ModerationParamInput = { model: string; policy?: ModerationPolicyParamInput | null }
type StopConfigurationInput = (string | string[] | null) | null
type PredictionContentInput = {
  type: 'content'
  content: string | ChatCompletionRequestMessageContentPartTextInput[]
}
type ChatCompletionStreamOptionsInput = {
  include_usage?: boolean
  include_obfuscation?: boolean
} | null
type ChatCompletionToolInput = { type: 'function'; function: FunctionObjectInput }
type CustomToolChatCompletionsInput = {
  type: 'custom'
  custom: {
    name: string
    description?: string
    format?:
      | { type: 'text' }
      | { type: 'grammar'; grammar: { definition: string; syntax: 'lark' | 'regex' } }
  }
}
type ChatCompletionAllowedToolsInput = {
  mode: 'auto' | 'required'
  tools: { [key: string]: unknown }[]
}
type ChatCompletionAllowedToolsChoiceInput = {
  type: 'allowed_tools'
  allowed_tools: ChatCompletionAllowedToolsInput
}
type ChatCompletionNamedToolChoiceInput = { type: 'function'; function: { name: string } }
type ChatCompletionNamedToolChoiceCustomInput = { type: 'custom'; custom: { name: string } }
type ChatCompletionToolChoiceOptionInput =
  | 'none'
  | 'auto'
  | 'required'
  | ChatCompletionAllowedToolsChoiceInput
  | ChatCompletionNamedToolChoiceInput
  | ChatCompletionNamedToolChoiceCustomInput
type ParallelToolCallsInput = boolean
type ChatCompletionFunctionCallOptionInput = { name: string }
type ChatCompletionFunctionsInput = {
  description?: string
  name: string
  parameters?: FunctionParametersInput
}
type CreateChatCompletionRequestInput = CreateModelResponsePropertiesInput & {
  prompt_cache_options?: PromptCacheOptionsParamInput
  messages: ChatCompletionRequestMessageInput[]
  model: ModelIdsSharedInput
  service_tier?: ServiceTierInput
  modalities?: ResponseModalitiesInput
  verbosity?: VerbosityInput
  reasoning_effort?: ReasoningEffortInput
  max_completion_tokens?: number | null
  frequency_penalty?: number | null
  presence_penalty?: number | null
  web_search_options?: {
    user_location?: { type: 'approximate'; approximate: WebSearchLocationInput } | null
    search_context_size?: WebSearchContextSizeInput
  }
  top_logprobs?: number | null
  response_format?:
    | ResponseFormatTextInput
    | ResponseFormatJsonSchemaInput
    | ResponseFormatJsonObjectInput
  audio?: {
    voice: VoiceIdsOrCustomVoiceInput
    format: 'wav' | 'aac' | 'mp3' | 'flac' | 'opus' | 'pcm16'
  } | null
  store?: boolean | null
  moderation?: ModerationParamInput | null
  stream?: boolean | null
  stop?: StopConfigurationInput
  logit_bias?: { [key: string]: number } | null
  logprobs?: boolean | null
  max_tokens?: number | null
  n?: number | null
  prediction?: PredictionContentInput | null
  seed?: bigint | null
  stream_options?: ChatCompletionStreamOptionsInput
  tools?: (ChatCompletionToolInput | CustomToolChatCompletionsInput)[]
  tool_choice?: ChatCompletionToolChoiceOptionInput
  parallel_tool_calls?: ParallelToolCallsInput
  function_call?: 'none' | 'auto' | ChatCompletionFunctionCallOptionInput
  functions?: ChatCompletionFunctionsInput[]
}
type ChatCompletionDeleted = { object: 'chat.completion.deleted'; id: string; deleted: boolean }
type ChatCompletionMessageList = {
  object: 'list'
  data: {
    id: string
    role: 'user' | 'assistant' | 'tool' | 'system' | 'function' | 'developer'
    content: string | null
    content_parts:
      | {
          type: 'text' | 'image_url' | 'input_audio' | 'file'
          text?: (string | null) | undefined
          image_url?: ({ url: string; detail?: (string | null) | undefined } | null) | undefined
          input_audio?: ({ data: string; format: string } | null) | undefined
          file?:
            | ({
                file_data?: (string | null) | undefined
                filename?: (string | null) | undefined
                file_id?: (string | null) | undefined
              } | null)
            | undefined
        }[]
      | null
    name?: (string | null) | undefined
  }[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
}
type CreateCompletionRequestInput = {
  model: string | 'gpt-3.5-turbo-instruct' | 'davinci-002' | 'babbage-002'
  prompt: string | string[] | number[] | number[][] | null
  best_of?: number | null
  echo?: boolean | null
  frequency_penalty?: number | null
  logit_bias?: { [key: string]: number } | null
  logprobs?: number | null
  max_tokens?: number | null
  n?: number | null
  presence_penalty?: number | null
  seed?: bigint | null
  stop?: StopConfigurationInput
  stream?: boolean | null
  stream_options?: ChatCompletionStreamOptionsInput
  suffix?: string | null
  temperature?: number | null
  top_p?: number | null
  user?: string
}
type CreateCompletionResponse = {
  id: string
  choices: {
    finish_reason: 'stop' | 'length' | 'content_filter' | null
    index: number
    logprobs: {
      text_offset?: number[] | undefined
      token_logprobs?: number[] | undefined
      tokens?: string[] | undefined
      top_logprobs?: { [key: string]: number }[] | undefined
    } | null
    text: string
  }[]
  created: number
  model: string
  system_fingerprint?: string | undefined
  object: 'text_completion'
  usage?: CompletionUsage | undefined
}
type ContainerResource = {
  id: string
  object: string
  name: string
  created_at: number
  status: string
  last_active_at?: number | undefined
  expires_after?:
    | { anchor?: 'last_active_at' | undefined; minutes?: number | undefined }
    | undefined
  memory_limit?: '1g' | '4g' | '16g' | '64g' | undefined
  network_policy?:
    | { type: 'allowlist' | 'disabled'; allowed_domains?: string[] | undefined }
    | undefined
}
type ContainerListResource = {
  object: 'list'
  data: ContainerResource[]
  first_id: string
  last_id: string
  has_more: boolean
}
type SkillReferenceParamInput = { type: 'skill_reference'; skill_id: string; version?: string }
type InlineSkillSourceParamInput = { type: 'base64'; media_type: 'application/zip'; data: string }
type InlineSkillParamInput = {
  type: 'inline'
  name: string
  description: string
  source: InlineSkillSourceParamInput
}
type ContainerNetworkPolicyDisabledParamInput = { type: 'disabled' }
type ContainerNetworkPolicyDomainSecretParamInput = { domain: string; name: string; value: string }
type ContainerNetworkPolicyAllowlistParamInput = {
  type: 'allowlist'
  allowed_domains: string[]
  domain_secrets?: ContainerNetworkPolicyDomainSecretParamInput[]
}
type CreateContainerBodyInput = {
  name: string
  file_ids?: string[]
  expires_after?: { anchor: 'last_active_at'; minutes: number }
  skills?: (SkillReferenceParamInput | InlineSkillParamInput)[]
  memory_limit?: '1g' | '4g' | '16g' | '64g'
  network_policy?:
    | ContainerNetworkPolicyDisabledParamInput
    | ContainerNetworkPolicyAllowlistParamInput
}
type CreateContainerFileBodyInput = { file_id?: string; file?: File }
type ContainerFileResource = {
  id: string
  object: string
  container_id: string
  created_at: number
  bytes: number
  path: string
  source: string
}
type ContainerFileListResource = {
  object: 'list'
  data: ContainerFileResource[]
  first_id: string
  last_id: string
  has_more: boolean
}
type PromptCacheBreakpointConfigInput = { mode: 'explicit'; ttl?: '30m' | '12h' }
type InputTextContentInput = {
  type: 'input_text'
  text: string
  prompt_cache_breakpoint?: PromptCacheBreakpointConfigInput
}
type ImageDetailInput = 'low' | 'high' | 'auto' | 'original'
type InputImageContentInput = {
  type: 'input_image'
  image_url?: string | null
  file_id?: string | null
  detail: ImageDetailInput
  prompt_cache_breakpoint?: PromptCacheBreakpointConfigInput
}
type FileInputDetailInput = 'auto' | 'low' | 'high'
type InputFileContentInput = {
  type: 'input_file'
  file_id?: string | null
  filename?: string
  file_data?: string
  prompt_cache_breakpoint?: PromptCacheBreakpointConfigInput
  file_url?: string
  detail?: FileInputDetailInput
}
type InputContentInput = InputTextContentInput | InputImageContentInput | InputFileContentInput
type InputMessageContentListInput = InputContentInput[]
type MessagePhaseInput = 'commentary' | 'final_answer'
type EasyInputMessageInput = {
  role: 'user' | 'assistant' | 'system' | 'developer'
  content: string | InputMessageContentListInput
  phase?: MessagePhaseInput | null
  type?: 'message'
}
type InputMessageInput = {
  type?: 'message'
  role: 'user' | 'system' | 'developer'
  status?: 'in_progress' | 'completed' | 'incomplete'
  content: InputMessageContentListInput
}
type FileCitationBodyInput = {
  type: 'file_citation'
  file_id: string
  index: number
  filename: string
}
type UrlCitationBodyInput = {
  type: 'url_citation'
  url: string
  start_index: number
  end_index: number
  title: string
}
type ContainerFileCitationBodyInput = {
  type: 'container_file_citation'
  container_id: string
  file_id: string
  start_index: number
  end_index: number
  filename: string
}
type FilePathInput = { type: 'file_path'; file_id: string; index: number }
type AnnotationInput =
  | FileCitationBodyInput
  | UrlCitationBodyInput
  | ContainerFileCitationBodyInput
  | FilePathInput
type TopLogProbInput = { token: string; logprob: number; bytes: number[] }
type LogProbInput = {
  token: string
  logprob: number
  bytes: number[]
  top_logprobs: TopLogProbInput[]
}
type OutputTextContentInput = {
  type: 'output_text'
  text: string
  annotations: AnnotationInput[]
  logprobs: LogProbInput[]
}
type RefusalContentInput = { type: 'refusal'; refusal: string }
type OutputMessageContentInput = OutputTextContentInput | RefusalContentInput
type OutputMessageInput = {
  id: string
  type: 'message'
  role: 'assistant'
  content: OutputMessageContentInput[]
  phase?: MessagePhaseInput | null
  status: 'in_progress' | 'completed' | 'incomplete'
}
type VectorStoreFileAttributesInput = { [key: string]: string | number | boolean } | null
type FileSearchToolCallInput = {
  id: string
  type: 'file_search_call'
  status: 'in_progress' | 'searching' | 'completed' | 'incomplete' | 'failed'
  queries: string[]
  results?:
    | {
        file_id?: string
        text?: string
        filename?: string
        attributes?: VectorStoreFileAttributesInput
        score?: number
      }[]
    | null
}
type ClickButtonTypeInput = 'left' | 'right' | 'wheel' | 'back' | 'forward'
type ClickParamInput = {
  type: 'click'
  button: ClickButtonTypeInput
  x: number
  y: number
  keys?: string[] | null
}
type DoubleClickActionInput = { type: 'double_click'; x: number; y: number; keys: string[] | null }
type CoordParamInput = { x: number; y: number }
type DragParamInput = { type: 'drag'; path: CoordParamInput[]; keys?: string[] | null }
type KeyPressActionInput = { type: 'keypress'; keys: string[] }
type MoveParamInput = { type: 'move'; x: number; y: number; keys?: string[] | null }
type ScreenshotParamInput = { type: 'screenshot' }
type ScrollParamInput = {
  type: 'scroll'
  x: number
  y: number
  scroll_x: number
  scroll_y: number
  keys?: string[] | null
}
type TypeParamInput = { type: 'type'; text: string }
type WaitParamInput = { type: 'wait' }
type ComputerActionInput =
  | ClickParamInput
  | DoubleClickActionInput
  | DragParamInput
  | KeyPressActionInput
  | MoveParamInput
  | ScreenshotParamInput
  | ScrollParamInput
  | TypeParamInput
  | WaitParamInput
type ComputerActionListInput = ComputerActionInput[]
type ComputerCallSafetyCheckParamInput = {
  id: string
  code?: string | null
  message?: string | null
}
type ComputerToolCallInput = {
  type: 'computer_call'
  id: string
  call_id: string
  action?: ComputerActionInput
  actions?: ComputerActionListInput
  pending_safety_checks: ComputerCallSafetyCheckParamInput[]
  status: 'in_progress' | 'completed' | 'incomplete'
}
type ComputerScreenshotImageInput = {
  type: 'computer_screenshot'
  image_url?: string
  file_id?: string
}
type FunctionCallItemStatusInput = 'in_progress' | 'completed' | 'incomplete'
type ComputerCallOutputItemParamInput = {
  id?: string | null
  call_id: string
  type: 'computer_call_output'
  output: ComputerScreenshotImageInput
  acknowledged_safety_checks?: ComputerCallSafetyCheckParamInput[] | null
  status?: FunctionCallItemStatusInput | null
}
type WebSearchCallStatusInput = 'in_progress' | 'searching' | 'completed' | 'failed' | 'incomplete'
type WebSearchActionSearchInput = {
  type: 'search'
  query?: string
  queries?: string[]
  sources?: { type: 'url'; url: string }[]
}
type WebSearchActionOpenPageInput = { type: 'open_page'; url?: string | null }
type WebSearchActionFindInput = { type: 'find_in_page'; url?: string | null; pattern: string }
type WebSearchToolCallInput = {
  id: string
  type: 'web_search_call'
  status: WebSearchCallStatusInput
  action?: WebSearchActionSearchInput | WebSearchActionOpenPageInput | WebSearchActionFindInput
}
type DirectToolCallCallerInput = { type: 'direct' }
type ProgramToolCallCallerInput = { type: 'program'; caller_id: string }
type ToolCallCallerInput = DirectToolCallCallerInput | ProgramToolCallCallerInput
type FunctionToolCallInput = {
  id?: string
  type: 'function_call'
  call_id: string
  caller?: ToolCallCallerInput | null
  namespace?: string
  name: string
  arguments: string
  status?: 'in_progress' | 'completed' | 'incomplete'
  async?: boolean
}
type InputTextContentParamInput = {
  type: 'input_text'
  text: string
  prompt_cache_breakpoint?: PromptCacheBreakpointParamInput | null
}
type DetailEnumInput = 'low' | 'high' | 'auto' | 'original'
type InputImageContentParamAutoParamInput = {
  type: 'input_image'
  image_url?: string | null
  file_id?: string | null
  detail?: DetailEnumInput | null
  prompt_cache_breakpoint?: PromptCacheBreakpointParamInput | null
}
type FileDetailEnumInput = 'auto' | 'low' | 'high'
type InputFileContentParamInput = {
  type: 'input_file'
  file_id?: string | null
  filename?: string | null
  file_data?: string | null
  file_url?: string | null
  detail?: FileDetailEnumInput
  prompt_cache_breakpoint?: PromptCacheBreakpointParamInput | null
}
type DirectToolCallCallerParamInput = { type: 'direct' }
type ProgramToolCallCallerParamInput = { type: 'program'; caller_id: string }
type ToolCallCallerParamInput = DirectToolCallCallerParamInput | ProgramToolCallCallerParamInput
type FunctionCallOutputItemParamInput = {
  id?: string | null
  call_id?: string | null
  type: 'function_call_output'
  output:
    | string
    | (
        | InputTextContentParamInput
        | InputImageContentParamAutoParamInput
        | InputFileContentParamInput
      )[]
  name?: string | null
  namespace?: string | null
  caller?: ToolCallCallerParamInput | null
  status?: FunctionCallItemStatusInput | null
}
type ToolSearchExecutionTypeInput = 'server' | 'client'
type EmptyModelParamInput = { [key: string]: unknown }
type ToolSearchCallItemParamInput = {
  id?: string | null
  call_id?: string | null
  type: 'tool_search_call'
  execution?: ToolSearchExecutionTypeInput
  arguments: EmptyModelParamInput
  status?: FunctionCallItemStatusInput | null
}
type CallableToolAllowedCallerInput = 'direct' | 'programmatic'
type FunctionToolInput = {
  type: 'function'
  name: string
  async?: boolean
  description?: string | null
  parameters: { [key: string]: any } | null
  output_schema?: { [key: string]: any } | null
  strict: boolean | null
  defer_loading?: boolean
  allowed_callers?: CallableToolAllowedCallerInput[] | null
}
type RankerVersionTypeInput = 'auto' | 'default-2024-11-15'
type HybridSearchOptionsInput = { embedding_weight: number; text_weight: number }
type RankingOptionsInput = {
  ranker?: RankerVersionTypeInput
  score_threshold?: number
  hybrid_search?: HybridSearchOptionsInput
}
type ComparisonFilterInput = {
  type: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | 'nin'
  key: string
  value: string | number | boolean | (string | number)[]
}
type CompoundFilterInput = {
  type: 'and' | 'or'
  filters: (ComparisonFilterInput | CompoundFilterInput)[]
}
type FiltersInput = ComparisonFilterInput | CompoundFilterInput
type FileSearchToolInput = {
  type: 'file_search'
  vector_store_ids: string[]
  max_num_results?: number
  ranking_options?: RankingOptionsInput
  filters?: FiltersInput | null
}
type ComputerToolInput = { type: 'computer' }
type ComputerEnvironmentInput = 'windows' | 'mac' | 'linux' | 'ubuntu' | 'browser'
type ComputerUsePreviewToolInput = {
  type: 'computer_use_preview'
  environment: ComputerEnvironmentInput
  display_width: number
  display_height: number
}
type WebSearchApproximateLocationInput = {
  type?: 'approximate'
  country?: string | null
  region?: string | null
  city?: string | null
  timezone?: string | null
} | null
type WebSearchToolInput = {
  type: 'web_search' | 'web_search_2025_08_26'
  external_web_access?: boolean
  filters?: { allowed_domains?: string[] | null } | null
  user_location?: WebSearchApproximateLocationInput
  search_context_size?: 'low' | 'medium' | 'high'
}
type MCPToolFilterInput = { tool_names?: string[]; read_only?: boolean }
type MCPToolInput = {
  type: 'mcp'
  server_label: string
  server_url?: string
  connector_id?:
    | 'connector_dropbox'
    | 'connector_gmail'
    | 'connector_googlecalendar'
    | 'connector_googledrive'
    | 'connector_microsoftteams'
    | 'connector_outlookcalendar'
    | 'connector_outlookemail'
    | 'connector_sharepoint'
  tunnel_id?: string
  authorization?: string
  server_description?: string
  headers?: { [key: string]: string } | null
  allowed_tools?: (string[] | MCPToolFilterInput) | null
  allowed_callers?: CallableToolAllowedCallerInput[] | null
  require_approval?:
    | ({ always?: MCPToolFilterInput; never?: MCPToolFilterInput } | 'always' | 'never')
    | null
  defer_loading?: boolean
}
type ContainerMemoryLimitInput = '1g' | '4g' | '16g' | '64g'
type AutoCodeInterpreterToolParamInput = {
  type: 'auto'
  file_ids?: string[]
  memory_limit?: ContainerMemoryLimitInput | null
  network_policy?:
    | ContainerNetworkPolicyDisabledParamInput
    | ContainerNetworkPolicyAllowlistParamInput
}
type CodeInterpreterToolInput = {
  type: 'code_interpreter'
  container: string | AutoCodeInterpreterToolParamInput
  allowed_callers?: CallableToolAllowedCallerInput[] | null
}
type ProgrammaticToolCallingParamInput = { type: 'programmatic_tool_calling' }
type ReasoningEffortEnumInput = 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | 'max'
type SvgReasoningParamInput = { effort?: ReasoningEffortEnumInput }
type SvgParamInput = { model?: string; reasoning?: SvgReasoningParamInput | null }
type InputFidelityInput = 'high' | 'low'
type ImageGenActionEnumInput = 'generate' | 'edit' | 'auto'
type ImageGenToolInput = {
  type: 'image_generation'
  model?:
    | string
    | 'gpt-image-1'
    | 'gpt-image-1-mini'
    | 'gpt-image-2'
    | 'gpt-image-2-2026-04-21'
    | 'gpt-image-2.5-sunburst'
    | 'gpt-image-2.5-sunburst-2026-09-08'
    | 'gpt-image-2.5-flare'
    | 'gpt-image-2.5-flare-2026-09-08'
    | 'gpt-image-2.6-sunburst'
    | 'gpt-image-2.6-flare'
    | 'gpt-image-1.5'
    | 'chatgpt-image-latest'
  complexity?: 'low' | 'medium' | 'high'
  quality?: 'low' | 'medium' | 'high' | 'xhigh' | 'max' | 'auto'
  size?: string | '1024x1024' | '1024x1536' | '1536x1024' | 'auto'
  output_format?: 'png' | 'webp' | 'jpeg' | 'gif' | 'svg'
  frame_count?: number
  frame_duration_ms?: number
  svg?: SvgParamInput
  output_compression?: number
  moderation?: 'auto' | 'low'
  background?: 'transparent' | 'opaque' | 'auto'
  input_fidelity?: InputFidelityInput | null
  input_image_mask?: { image_url?: string; file_id?: string }
  partial_images?: number
  action?: ImageGenActionEnumInput
}
type LocalShellToolParamInput = { type: 'local_shell' }
type ContainerAutoParamInput = {
  type: 'container_auto'
  file_ids?: string[]
  memory_limit?: ContainerMemoryLimitInput | null
  network_policy?:
    | ContainerNetworkPolicyDisabledParamInput
    | ContainerNetworkPolicyAllowlistParamInput
  skills?: (SkillReferenceParamInput | InlineSkillParamInput)[]
}
type LocalSkillParamInput = { name: string; description: string; path: string }
type LocalEnvironmentParamInput = { type: 'local'; skills?: LocalSkillParamInput[] }
type ContainerReferenceParamInput = { type: 'container_reference'; container_id: string }
type FunctionShellToolParamInput = {
  type: 'shell'
  environment?:
    | (ContainerAutoParamInput | LocalEnvironmentParamInput | ContainerReferenceParamInput)
    | null
  allowed_callers?: CallableToolAllowedCallerInput[] | null
}
type CustomTextFormatParamInput = { type: 'text' }
type GrammarSyntax1Input = 'lark' | 'regex'
type CustomGrammarFormatParamInput = {
  type: 'grammar'
  syntax: GrammarSyntax1Input
  definition: string
}
type CustomToolParamInput = {
  type: 'custom'
  name: string
  async?: boolean
  description?: string
  format?: CustomTextFormatParamInput | CustomGrammarFormatParamInput
  defer_loading?: boolean
  allowed_callers?: CallableToolAllowedCallerInput[] | null
}
type ToolSearchOutputFunctionToolParamInput = {
  name: string
  description?: string | null
  parameters?: EmptyModelParamInput | null
  strict?: boolean | null
  type: 'function'
  async?: boolean
  output_schema?: { [key: string]: any } | null
  defer_loading?: boolean
  allowed_callers?: CallableToolAllowedCallerInput[] | null
}
type ToolSearchOutputNamespaceToolParamInput = {
  type: 'namespace'
  name: string
  description: string
  tools: (ToolSearchOutputFunctionToolParamInput | CustomToolParamInput)[]
}
type ToolSearchToolParamInput = {
  type: 'tool_search'
  execution?: ToolSearchExecutionTypeInput
  description?: string | null
  parameters?: EmptyModelParamInput | null
}
type ApproximateLocationInput = {
  type: 'approximate'
  country?: string | null
  region?: string | null
  city?: string | null
  timezone?: string | null
}
type SearchContextSizeInput = 'low' | 'medium' | 'high'
type SearchContentTypeInput = 'text' | 'image'
type WebSearchPreviewToolInput = {
  type: 'web_search_preview' | 'web_search_preview_2025_03_11'
  user_location?: ApproximateLocationInput | null
  search_context_size?: SearchContextSizeInput
  search_content_types?: SearchContentTypeInput[]
}
type ApplyPatchToolParamInput = {
  type: 'apply_patch'
  allowed_callers?: CallableToolAllowedCallerInput[] | null
}
type ToolSearchOutputToolInput =
  | FunctionToolInput
  | FileSearchToolInput
  | ComputerToolInput
  | ComputerUsePreviewToolInput
  | WebSearchToolInput
  | MCPToolInput
  | CodeInterpreterToolInput
  | ProgrammaticToolCallingParamInput
  | ImageGenToolInput
  | LocalShellToolParamInput
  | FunctionShellToolParamInput
  | CustomToolParamInput
  | ToolSearchOutputNamespaceToolParamInput
  | ToolSearchToolParamInput
  | WebSearchPreviewToolInput
  | ApplyPatchToolParamInput
type ToolSearchOutputItemParamInput = {
  id?: string | null
  call_id?: string | null
  type: 'tool_search_output'
  execution?: ToolSearchExecutionTypeInput
  tools: ToolSearchOutputToolInput[]
  status?: FunctionCallItemStatusInput | null
}
type FunctionToolParamInput = {
  name: string
  description?: string | null
  parameters?: EmptyModelParamInput | null
  strict?: boolean | null
  type: 'function'
  async?: boolean
  output_schema?: { [key: string]: any } | null
  defer_loading?: boolean
  allowed_callers?: CallableToolAllowedCallerInput[] | null
}
type NamespaceToolParamInput = {
  type: 'namespace'
  name: string
  description: string
  tools: (FunctionToolParamInput | CustomToolParamInput)[]
}
type ToolInput =
  | FunctionToolInput
  | FileSearchToolInput
  | ComputerToolInput
  | ComputerUsePreviewToolInput
  | WebSearchToolInput
  | MCPToolInput
  | CodeInterpreterToolInput
  | ProgrammaticToolCallingParamInput
  | ImageGenToolInput
  | LocalShellToolParamInput
  | FunctionShellToolParamInput
  | CustomToolParamInput
  | NamespaceToolParamInput
  | ToolSearchToolParamInput
  | WebSearchPreviewToolInput
  | ApplyPatchToolParamInput
type AdditionalToolsItemParamInput = {
  id?: string | null
  type: 'additional_tools'
  role: 'developer'
  tools: ToolInput[]
}
type TextResponseFormatJsonSchemaInput = {
  type: 'json_schema'
  description?: string
  name: string
  schema: ResponseFormatJsonSchemaSchemaInput
  strict?: boolean | null
}
type ResponseConfigurationUpdateItemParamInput = {
  id?: string | null
  type: 'configuration_update'
  reasoning?: { effort?: ReasoningEffortInput }
  text?: { format: ResponseFormatTextInput | TextResponseFormatJsonSchemaInput }
}
type SummaryTextContentInput = { type: 'summary_text'; text: string }
type ReasoningTextContentInput = { type: 'reasoning_text'; text: string }
type ReasoningItemInput = {
  type: 'reasoning'
  id: string
  encrypted_content?: string | null
  summary: SummaryTextContentInput[]
  content?: ReasoningTextContentInput[]
  status?: 'in_progress' | 'completed' | 'incomplete'
}
type CompactionSummaryItemParamInput = {
  id?: string | null
  type: 'compaction'
  encrypted_content: string
}
type ImageGenToolCallModerationDetailsInput = {
  moderation_stage: 'input' | 'output' | 'unknown'
  categories: string[]
}
type ImageGenToolCallErrorInput = {
  code: string | null
  type: string
  message: string
  param: string | null
  moderation_details?: ImageGenToolCallModerationDetailsInput
}
type ImageBackgroundInput = 'transparent' | 'opaque' | 'auto'
type ImageOutputFormatInput = 'png' | 'webp' | 'jpeg' | 'gif' | 'svg'
type SvgUsageInput = {
  model: string
  input_tokens: number
  output_tokens: number
  total_tokens: number
  reasoning_tokens: number
}
type ImageGenToolCallInput = {
  type: 'image_generation_call'
  id: string
  status: 'in_progress' | 'completed' | 'generating' | 'failed'
  result: string | null
  error?: ImageGenToolCallErrorInput
  size?: (string | '1024x1024' | '1024x1536' | '1536x1024') | null
  quality?: 'low' | 'medium' | 'high' | 'xhigh' | 'max' | 'auto' | null
  action?: ImageGenActionEnumInput | null
  background?: ImageBackgroundInput | null
  output_format?: ImageOutputFormatInput | null
  svg_usage?: SvgUsageInput
  revised_prompt?: string | null
}
type CodeInterpreterOutputLogsInput = { type: 'logs'; logs: string }
type CodeInterpreterOutputImageInput = { type: 'image'; url: string }
type CodeInterpreterToolCallInput = {
  type: 'code_interpreter_call'
  id: string
  status: 'in_progress' | 'completed' | 'incomplete' | 'interpreting' | 'failed'
  container_id: string
  code: string | null
  outputs: (CodeInterpreterOutputLogsInput | CodeInterpreterOutputImageInput)[] | null
}
type LocalShellExecActionInput = {
  type: 'exec'
  command: string[]
  timeout_ms?: number | null
  working_directory?: string | null
  env: { [key: string]: string }
  user?: string | null
}
type LocalShellToolCallInput = {
  type: 'local_shell_call'
  id: string
  call_id: string
  action: LocalShellExecActionInput
  status: 'in_progress' | 'completed' | 'incomplete'
}
type LocalShellToolCallOutputInput = {
  type: 'local_shell_call_output'
  id: string
  output: string
  status?: 'in_progress' | 'completed' | 'incomplete' | null
}
type FunctionShellActionParamInput = {
  commands: string[]
  timeout_ms?: number | null
  max_output_length?: number | null
}
type FunctionShellCallItemStatusInput = 'in_progress' | 'completed' | 'incomplete'
type FunctionShellCallItemParamInput = {
  id?: string | null
  call_id: string
  caller?: ToolCallCallerParamInput | null
  type: 'shell_call'
  action: FunctionShellActionParamInput
  status?: FunctionShellCallItemStatusInput | null
  environment?: (LocalEnvironmentParamInput | ContainerReferenceParamInput) | null
}
type FunctionShellCallOutputTimeoutOutcomeParamInput = { type: 'timeout' }
type FunctionShellCallOutputExitOutcomeParamInput = { type: 'exit'; exit_code: number }
type FunctionShellCallOutputOutcomeParamInput =
  | FunctionShellCallOutputTimeoutOutcomeParamInput
  | FunctionShellCallOutputExitOutcomeParamInput
type FunctionShellCallOutputContentParamInput = {
  stdout: string
  stderr: string
  outcome: FunctionShellCallOutputOutcomeParamInput
}
type FunctionShellCallOutputItemParamInput = {
  id?: string | null
  call_id: string
  caller?: ToolCallCallerParamInput | null
  type: 'shell_call_output'
  output: FunctionShellCallOutputContentParamInput[]
  status?: FunctionShellCallItemStatusInput | null
  max_output_length?: number | null
}
type ApplyPatchCallStatusParamInput = 'in_progress' | 'completed'
type ApplyPatchCreateFileOperationParamInput = { type: 'create_file'; path: string; diff: string }
type ApplyPatchDeleteFileOperationParamInput = { type: 'delete_file'; path: string }
type ApplyPatchUpdateFileOperationParamInput = { type: 'update_file'; path: string; diff: string }
type ApplyPatchOperationParamInput =
  | ApplyPatchCreateFileOperationParamInput
  | ApplyPatchDeleteFileOperationParamInput
  | ApplyPatchUpdateFileOperationParamInput
type ApplyPatchToolCallItemParamInput = {
  type: 'apply_patch_call'
  id?: string | null
  call_id: string
  caller?: ToolCallCallerParamInput | null
  status: ApplyPatchCallStatusParamInput
  operation: ApplyPatchOperationParamInput
}
type ApplyPatchCallOutputStatusParamInput = 'completed' | 'failed'
type ApplyPatchToolCallOutputItemParamInput = {
  type: 'apply_patch_call_output'
  id?: string | null
  call_id: string
  caller?: ToolCallCallerParamInput | null
  status: ApplyPatchCallOutputStatusParamInput
  output?: string | null
}
type MCPListToolsToolInput = {
  name: string
  description?: string | null
  input_schema: { [key: string]: unknown }
  annotations?: { [key: string]: unknown } | null
}
type MCPListToolsInput = {
  type: 'mcp_list_tools'
  id: string
  server_label: string
  tools: MCPListToolsToolInput[]
  error?: string | null
}
type MCPApprovalRequestInput = {
  type: 'mcp_approval_request'
  id: string
  server_label: string
  name: string
  arguments: string
}
type MCPApprovalResponseInput = {
  type: 'mcp_approval_response'
  id?: string | null
  approval_request_id: string
  approve: boolean
  reason?: string | null
}
type MCPProtocolErrorInput = { type: 'mcp_protocol_error'; code: number; message: string }
type MCPToolExecutionErrorInput = { type: 'mcp_tool_execution_error'; content: any }
type HTTPErrorInput = { type: 'http_error'; code: number; message: string }
type MCPToolCallErrorInput = MCPProtocolErrorInput | MCPToolExecutionErrorInput | HTTPErrorInput
type MCPToolCallStatusInput = 'in_progress' | 'completed' | 'incomplete' | 'calling' | 'failed'
type MCPToolCallInput = {
  type: 'mcp_call'
  id: string
  server_label: string
  name: string
  arguments: string
  output?: string | null
  error?: MCPToolCallErrorInput | null
  status?: MCPToolCallStatusInput
  approval_request_id?: string | null
}
type FunctionAndCustomToolCallOutputInput =
  | InputTextContentInput
  | InputImageContentInput
  | InputFileContentInput
type CustomToolCallOutputInput = {
  type: 'custom_tool_call_output'
  id?: string
  call_id: string
  caller?: ToolCallCallerParamInput | null
  output: string | FunctionAndCustomToolCallOutputInput[]
}
type CustomToolCallInput = {
  type: 'custom_tool_call'
  id?: string
  call_id: string
  caller?: ToolCallCallerInput | null
  namespace?: string
  name: string
  input: string
  async?: boolean
}
type ItemInput =
  | InputMessageInput
  | OutputMessageInput
  | FileSearchToolCallInput
  | ComputerToolCallInput
  | ComputerCallOutputItemParamInput
  | WebSearchToolCallInput
  | FunctionToolCallInput
  | FunctionCallOutputItemParamInput
  | ToolSearchCallItemParamInput
  | ToolSearchOutputItemParamInput
  | AdditionalToolsItemParamInput
  | ResponseConfigurationUpdateItemParamInput
  | ReasoningItemInput
  | CompactionSummaryItemParamInput
  | ImageGenToolCallInput
  | CodeInterpreterToolCallInput
  | LocalShellToolCallInput
  | LocalShellToolCallOutputInput
  | FunctionShellCallItemParamInput
  | FunctionShellCallOutputItemParamInput
  | ApplyPatchToolCallItemParamInput
  | ApplyPatchToolCallOutputItemParamInput
  | MCPListToolsInput
  | MCPApprovalRequestInput
  | MCPApprovalResponseInput
  | MCPToolCallInput
  | CustomToolCallOutputInput
  | CustomToolCallInput
type CompactionTriggerItemParamInput = { id?: string | null; type: 'compaction_trigger' }
type ItemReferenceParamInput = { type?: 'item_reference' | null; id: string }
type ProgramItemParamInput = {
  id: string
  type: 'program'
  call_id: string
  code: string
  fingerprint: string
}
type ProgramOutputItemStatusInput = 'completed' | 'incomplete'
type ProgramOutputItemParamInput = {
  id: string
  type: 'program_output'
  call_id: string
  result: string
  status: ProgramOutputItemStatusInput
}
type InputItemInput =
  | EasyInputMessageInput
  | ItemInput
  | CompactionTriggerItemParamInput
  | ItemReferenceParamInput
  | ProgramItemParamInput
  | ProgramOutputItemParamInput
type MessageStatus = 'in_progress' | 'completed' | 'incomplete'
type MessageRole =
  | 'unknown'
  | 'user'
  | 'assistant'
  | 'system'
  | 'critic'
  | 'discriminator'
  | 'developer'
  | 'tool'
type PromptCacheBreakpointConfig = { mode: 'explicit'; ttl?: '30m' | '12h' | undefined }
type InputTextContent = {
  type: 'input_text'
  text: string
  prompt_cache_breakpoint?: PromptCacheBreakpointConfig | undefined
}
type FileCitationBody = { type: 'file_citation'; file_id: string; index: number; filename: string }
type UrlCitationBody = {
  type: 'url_citation'
  url: string
  start_index: number
  end_index: number
  title: string
}
type ContainerFileCitationBody = {
  type: 'container_file_citation'
  container_id: string
  file_id: string
  start_index: number
  end_index: number
  filename: string
}
type FilePath = { type: 'file_path'; file_id: string; index: number }
type Annotation = FileCitationBody | UrlCitationBody | ContainerFileCitationBody | FilePath
type TopLogProb = { token: string; logprob: number; bytes: number[] }
type LogProb = { token: string; logprob: number; bytes: number[]; top_logprobs: TopLogProb[] }
type OutputTextContent = {
  type: 'output_text'
  text: string
  annotations: Annotation[]
  logprobs: LogProb[]
}
type TextContent = { type: 'text'; text: string }
type SummaryTextContent = { type: 'summary_text'; text: string }
type ReasoningTextContent = { type: 'reasoning_text'; text: string }
type RefusalContent = { type: 'refusal'; refusal: string }
type ImageDetail = 'low' | 'high' | 'auto' | 'original'
type InputImageContent = {
  type: 'input_image'
  image_url?: (string | null) | undefined
  file_id?: (string | null) | undefined
  detail: ImageDetail
  prompt_cache_breakpoint?: PromptCacheBreakpointConfig | undefined
}
type ComputerScreenshotContent = {
  type: 'computer_screenshot'
  image_url: string | null
  file_id: string | null
  detail: ImageDetail
  prompt_cache_breakpoint?: PromptCacheBreakpointConfig | undefined
}
type FileInputDetail = 'auto' | 'low' | 'high'
type InputFileContent = {
  type: 'input_file'
  file_id?: (string | null) | undefined
  filename?: string | undefined
  file_data?: string | undefined
  prompt_cache_breakpoint?: PromptCacheBreakpointConfig | undefined
  file_url?: string | undefined
  detail?: FileInputDetail | undefined
}
type MessagePhase_2 = 'commentary' | 'final_answer'
type Message = {
  type: 'message'
  id: string
  status: MessageStatus
  role: MessageRole
  content: (
    | InputTextContent
    | OutputTextContent
    | TextContent
    | SummaryTextContent
    | ReasoningTextContent
    | RefusalContent
    | InputImageContent
    | ComputerScreenshotContent
    | InputFileContent
  )[]
  phase?: (MessagePhase_2 | null) | undefined
}
type DirectToolCallCaller = { type: 'direct' }
type ProgramToolCallCaller = { type: 'program'; caller_id: string }
type ToolCallCaller = DirectToolCallCaller | ProgramToolCallCaller
type FunctionToolCall = {
  id?: string | undefined
  type: 'function_call'
  call_id: string
  caller?: (ToolCallCaller | null) | undefined
  namespace?: string | undefined
  name: string
  arguments: string
  status?: 'in_progress' | 'completed' | 'incomplete' | undefined
  async?: boolean | undefined
}
type FunctionCallStatus = 'in_progress' | 'completed' | 'incomplete'
type FunctionToolCallResource = FunctionToolCall & {
  id: string
  status: FunctionCallStatus
  created_by?: string | undefined
}
type DirectToolCallCallerParam = { type: 'direct' }
type ProgramToolCallCallerParam = { type: 'program'; caller_id: string }
type ToolCallCallerParam = DirectToolCallCallerParam | ProgramToolCallCallerParam
type FunctionAndCustomToolCallOutput = InputTextContent | InputImageContent | InputFileContent
type FunctionToolCallOutput = {
  id?: string | undefined
  type: 'function_call_output'
  call_id?: string | undefined
  name?: string | undefined
  namespace?: string | undefined
  caller?: (ToolCallCallerParam | null) | undefined
  output: string | FunctionAndCustomToolCallOutput[]
  status?: 'in_progress' | 'completed' | 'incomplete' | undefined
}
type FunctionCallOutputStatusEnum = 'in_progress' | 'completed' | 'incomplete'
type FunctionToolCallOutputResource = FunctionToolCallOutput & {
  id: string
  status: FunctionCallOutputStatusEnum
  created_by?: string | undefined
}
type VectorStoreFileAttributes = { [key: string]: string | number | boolean } | null
type FileSearchToolCall = {
  id: string
  type: 'file_search_call'
  status: 'in_progress' | 'searching' | 'completed' | 'incomplete' | 'failed'
  queries: string[]
  results?:
    | (
        | {
            file_id?: string | undefined
            text?: string | undefined
            filename?: string | undefined
            attributes?: VectorStoreFileAttributes | undefined
            score?: number | undefined
          }[]
        | null
      )
    | undefined
}
type WebSearchCallStatus = 'in_progress' | 'searching' | 'completed' | 'failed' | 'incomplete'
type WebSearchActionSearch = {
  type: 'search'
  query?: string | undefined
  queries?: string[] | undefined
  sources?: { type: 'url'; url: string }[] | undefined
}
type WebSearchActionOpenPage = { type: 'open_page'; url?: (string | null) | undefined }
type WebSearchActionFind = {
  type: 'find_in_page'
  url?: (string | null) | undefined
  pattern: string
}
type WebSearchToolCall = {
  id: string
  type: 'web_search_call'
  status: WebSearchCallStatus
  action?: (WebSearchActionSearch | WebSearchActionOpenPage | WebSearchActionFind) | undefined
}
type ImageGenToolCallModerationDetails = {
  moderation_stage: 'input' | 'output' | 'unknown'
  categories: string[]
}
type ImageGenToolCallError = {
  code: string | null
  type: string
  message: string
  param: string | null
  moderation_details?: ImageGenToolCallModerationDetails | undefined
}
type ImageGenActionEnum = 'generate' | 'edit' | 'auto'
type ImageBackground = 'transparent' | 'opaque' | 'auto'
type ImageOutputFormat = 'png' | 'webp' | 'jpeg' | 'gif' | 'svg'
type SvgUsage = {
  model: string
  input_tokens: number
  output_tokens: number
  total_tokens: number
  reasoning_tokens: number
}
type ImageGenToolCall = {
  type: 'image_generation_call'
  id: string
  status: 'in_progress' | 'completed' | 'generating' | 'failed'
  result: string | null
  error?: ImageGenToolCallError | undefined
  size?: ((string | '1024x1024' | '1024x1536' | '1536x1024') | null) | undefined
  quality?: ('low' | 'medium' | 'high' | 'xhigh' | 'max' | 'auto' | null) | undefined
  action?: (ImageGenActionEnum | null) | undefined
  background?: (ImageBackground | null) | undefined
  output_format?: (ImageOutputFormat | null) | undefined
  svg_usage?: SvgUsage | undefined
  revised_prompt?: (string | null) | undefined
}
type ClickButtonType = 'left' | 'right' | 'wheel' | 'back' | 'forward'
type ClickParam = {
  type: 'click'
  button: ClickButtonType
  x: number
  y: number
  keys?: (string[] | null) | undefined
}
type DoubleClickAction = { type: 'double_click'; x: number; y: number; keys: string[] | null }
type CoordParam = { x: number; y: number }
type DragParam = { type: 'drag'; path: CoordParam[]; keys?: (string[] | null) | undefined }
type KeyPressAction = { type: 'keypress'; keys: string[] }
type MoveParam = { type: 'move'; x: number; y: number; keys?: (string[] | null) | undefined }
type ScreenshotParam = { type: 'screenshot' }
type ScrollParam = {
  type: 'scroll'
  x: number
  y: number
  scroll_x: number
  scroll_y: number
  keys?: (string[] | null) | undefined
}
type TypeParam = { type: 'type'; text: string }
type WaitParam = { type: 'wait' }
type ComputerAction =
  | ClickParam
  | DoubleClickAction
  | DragParam
  | KeyPressAction
  | MoveParam
  | ScreenshotParam
  | ScrollParam
  | TypeParam
  | WaitParam
type ComputerActionList = ComputerAction[]
type ComputerCallSafetyCheckParam = {
  id: string
  code?: (string | null) | undefined
  message?: (string | null) | undefined
}
type ComputerToolCall = {
  type: 'computer_call'
  id: string
  call_id: string
  action?: ComputerAction | undefined
  actions?: ComputerActionList | undefined
  pending_safety_checks: ComputerCallSafetyCheckParam[]
  status: 'in_progress' | 'completed' | 'incomplete'
}
type ComputerScreenshotImage = {
  type: 'computer_screenshot'
  image_url?: string | undefined
  file_id?: string | undefined
}
type ComputerToolCallOutput = {
  type: 'computer_call_output'
  id?: string | undefined
  call_id: string
  acknowledged_safety_checks?: ComputerCallSafetyCheckParam[] | undefined
  output: ComputerScreenshotImage
  status?: 'in_progress' | 'completed' | 'incomplete' | undefined
}
type ComputerCallOutputStatus = 'completed' | 'incomplete' | 'failed'
type ComputerToolCallOutputResource = ComputerToolCallOutput & {
  status: ComputerCallOutputStatus
  created_by?: string | undefined
}
type ToolSearchExecutionType = 'server' | 'client'
type ToolSearchCall = {
  type: 'tool_search_call'
  id: string
  call_id: string | null
  execution: ToolSearchExecutionType
  arguments: any
  status: FunctionCallStatus
  created_by?: string | undefined
}
type CallableToolAllowedCaller = 'direct' | 'programmatic'
type FunctionTool = {
  type: 'function'
  name: string
  async?: boolean | undefined
  description?: (string | null) | undefined
  parameters: { [key: string]: any } | null
  output_schema?: ({ [key: string]: any } | null) | undefined
  strict: boolean | null
  defer_loading?: boolean | undefined
  allowed_callers?: (CallableToolAllowedCaller[] | null) | undefined
}
type RankerVersionType = 'auto' | 'default-2024-11-15'
type HybridSearchOptions = { embedding_weight: number; text_weight: number }
type RankingOptions = {
  ranker?: RankerVersionType | undefined
  score_threshold?: number | undefined
  hybrid_search?: HybridSearchOptions | undefined
}
type ComparisonFilter = {
  type: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | 'nin'
  key: string
  value: string | number | boolean | (string | number)[]
}
type CompoundFilter = { type: 'and' | 'or'; filters: (ComparisonFilter | CompoundFilter)[] }
type Filters = ComparisonFilter | CompoundFilter
type FileSearchTool = {
  type: 'file_search'
  vector_store_ids: string[]
  max_num_results?: number | undefined
  ranking_options?: RankingOptions | undefined
  filters?: (Filters | null) | undefined
}
type ComputerTool = { type: 'computer' }
type ComputerEnvironment = 'windows' | 'mac' | 'linux' | 'ubuntu' | 'browser'
type ComputerUsePreviewTool = {
  type: 'computer_use_preview'
  environment: ComputerEnvironment
  display_width: number
  display_height: number
}
type WebSearchApproximateLocation = {
  type?: 'approximate' | undefined
  country?: (string | null) | undefined
  region?: (string | null) | undefined
  city?: (string | null) | undefined
  timezone?: (string | null) | undefined
} | null
type WebSearchTool = {
  type: 'web_search' | 'web_search_2025_08_26'
  external_web_access?: boolean | undefined
  filters?: ({ allowed_domains?: (string[] | null) | undefined } | null) | undefined
  user_location?: WebSearchApproximateLocation | undefined
  search_context_size?: 'low' | 'medium' | 'high' | undefined
}
type MCPToolFilter = { tool_names?: string[] | undefined; read_only?: boolean | undefined }
type MCPTool = {
  type: 'mcp'
  server_label: string
  server_url?: string | undefined
  connector_id?:
    | 'connector_dropbox'
    | 'connector_gmail'
    | 'connector_googlecalendar'
    | 'connector_googledrive'
    | 'connector_microsoftteams'
    | 'connector_outlookcalendar'
    | 'connector_outlookemail'
    | 'connector_sharepoint'
    | undefined
  tunnel_id?: string | undefined
  authorization?: string | undefined
  server_description?: string | undefined
  headers?: ({ [key: string]: string } | null) | undefined
  allowed_tools?: ((string[] | MCPToolFilter) | null) | undefined
  allowed_callers?: (CallableToolAllowedCaller[] | null) | undefined
  require_approval?:
    | (
        | (
            | { always?: MCPToolFilter | undefined; never?: MCPToolFilter | undefined }
            | 'always'
            | 'never'
          )
        | null
      )
    | undefined
  defer_loading?: boolean | undefined
}
type ContainerMemoryLimit = '1g' | '4g' | '16g' | '64g'
type ContainerNetworkPolicyDisabledParam = { type: 'disabled' }
type ContainerNetworkPolicyDomainSecretParam = { domain: string; name: string; value: string }
type ContainerNetworkPolicyAllowlistParam = {
  type: 'allowlist'
  allowed_domains: string[]
  domain_secrets?: ContainerNetworkPolicyDomainSecretParam[] | undefined
}
type AutoCodeInterpreterToolParam = {
  type: 'auto'
  file_ids?: string[] | undefined
  memory_limit?: (ContainerMemoryLimit | null) | undefined
  network_policy?:
    | (ContainerNetworkPolicyDisabledParam | ContainerNetworkPolicyAllowlistParam)
    | undefined
}
type CodeInterpreterTool = {
  type: 'code_interpreter'
  container: string | AutoCodeInterpreterToolParam
  allowed_callers?: (CallableToolAllowedCaller[] | null) | undefined
}
type ProgrammaticToolCallingParam = { type: 'programmatic_tool_calling' }
type ReasoningEffortEnum = 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | 'max'
type SvgReasoningParam = { effort?: ReasoningEffortEnum | undefined }
type SvgParam = { model?: string | undefined; reasoning?: (SvgReasoningParam | null) | undefined }
type InputFidelity = 'high' | 'low'
type ImageGenTool = {
  type: 'image_generation'
  model?:
    | (
        | string
        | 'gpt-image-1'
        | 'gpt-image-1-mini'
        | 'gpt-image-2'
        | 'gpt-image-2-2026-04-21'
        | 'gpt-image-2.5-sunburst'
        | 'gpt-image-2.5-sunburst-2026-09-08'
        | 'gpt-image-2.5-flare'
        | 'gpt-image-2.5-flare-2026-09-08'
        | 'gpt-image-2.6-sunburst'
        | 'gpt-image-2.6-flare'
        | 'gpt-image-1.5'
        | 'chatgpt-image-latest'
      )
    | undefined
  complexity?: 'low' | 'medium' | 'high' | undefined
  quality?: 'low' | 'medium' | 'high' | 'xhigh' | 'max' | 'auto' | undefined
  size?: (string | '1024x1024' | '1024x1536' | '1536x1024' | 'auto') | undefined
  output_format?: 'png' | 'webp' | 'jpeg' | 'gif' | 'svg' | undefined
  frame_count?: number | undefined
  frame_duration_ms?: number | undefined
  svg?: SvgParam | undefined
  output_compression?: number | undefined
  moderation?: 'auto' | 'low' | undefined
  background?: 'transparent' | 'opaque' | 'auto' | undefined
  input_fidelity?: (InputFidelity | null) | undefined
  input_image_mask?: { image_url?: string | undefined; file_id?: string | undefined } | undefined
  partial_images?: number | undefined
  action?: ImageGenActionEnum | undefined
}
type LocalShellToolParam = { type: 'local_shell' }
type SkillReferenceParam = {
  type: 'skill_reference'
  skill_id: string
  version?: string | undefined
}
type InlineSkillSourceParam = { type: 'base64'; media_type: 'application/zip'; data: string }
type InlineSkillParam = {
  type: 'inline'
  name: string
  description: string
  source: InlineSkillSourceParam
}
type ContainerAutoParam = {
  type: 'container_auto'
  file_ids?: string[] | undefined
  memory_limit?: (ContainerMemoryLimit | null) | undefined
  network_policy?:
    | (ContainerNetworkPolicyDisabledParam | ContainerNetworkPolicyAllowlistParam)
    | undefined
  skills?: (SkillReferenceParam | InlineSkillParam)[] | undefined
}
type LocalSkillParam = { name: string; description: string; path: string }
type LocalEnvironmentParam = { type: 'local'; skills?: LocalSkillParam[] | undefined }
type ContainerReferenceParam = { type: 'container_reference'; container_id: string }
type FunctionShellToolParam = {
  type: 'shell'
  environment?:
    | ((ContainerAutoParam | LocalEnvironmentParam | ContainerReferenceParam) | null)
    | undefined
  allowed_callers?: (CallableToolAllowedCaller[] | null) | undefined
}
type CustomTextFormatParam = { type: 'text' }
type GrammarSyntax1 = 'lark' | 'regex'
type CustomGrammarFormatParam = { type: 'grammar'; syntax: GrammarSyntax1; definition: string }
type CustomToolParam = {
  type: 'custom'
  name: string
  async?: boolean | undefined
  description?: string | undefined
  format?: (CustomTextFormatParam | CustomGrammarFormatParam) | undefined
  defer_loading?: boolean | undefined
  allowed_callers?: (CallableToolAllowedCaller[] | null) | undefined
}
type EmptyModelParam = { [key: string]: unknown }
type FunctionToolParam = {
  name: string
  description?: (string | null) | undefined
  parameters?: (EmptyModelParam | null) | undefined
  strict?: (boolean | null) | undefined
  type: 'function'
  async?: boolean | undefined
  output_schema?: ({ [key: string]: any } | null) | undefined
  defer_loading?: boolean | undefined
  allowed_callers?: (CallableToolAllowedCaller[] | null) | undefined
}
type NamespaceToolParam = {
  type: 'namespace'
  name: string
  description: string
  tools: (FunctionToolParam | CustomToolParam)[]
}
type ToolSearchToolParam = {
  type: 'tool_search'
  execution?: ToolSearchExecutionType | undefined
  description?: (string | null) | undefined
  parameters?: (EmptyModelParam | null) | undefined
}
type ApproximateLocation = {
  type: 'approximate'
  country?: (string | null) | undefined
  region?: (string | null) | undefined
  city?: (string | null) | undefined
  timezone?: (string | null) | undefined
}
type SearchContextSize = 'low' | 'medium' | 'high'
type SearchContentType = 'text' | 'image'
type WebSearchPreviewTool = {
  type: 'web_search_preview' | 'web_search_preview_2025_03_11'
  user_location?: (ApproximateLocation | null) | undefined
  search_context_size?: SearchContextSize | undefined
  search_content_types?: SearchContentType[] | undefined
}
type ApplyPatchToolParam = {
  type: 'apply_patch'
  allowed_callers?: (CallableToolAllowedCaller[] | null) | undefined
}
type Tool =
  | FunctionTool
  | FileSearchTool
  | ComputerTool
  | ComputerUsePreviewTool
  | WebSearchTool
  | MCPTool
  | CodeInterpreterTool
  | ProgrammaticToolCallingParam
  | ImageGenTool
  | LocalShellToolParam
  | FunctionShellToolParam
  | CustomToolParam
  | NamespaceToolParam
  | ToolSearchToolParam
  | WebSearchPreviewTool
  | ApplyPatchToolParam
type ToolSearchOutput = {
  type: 'tool_search_output'
  id: string
  call_id: string | null
  execution: ToolSearchExecutionType
  tools: Tool[]
  status: FunctionCallOutputStatusEnum
  created_by?: string | undefined
}
type AdditionalTools = { type: 'additional_tools'; id: string; role: MessageRole; tools: Tool[] }
type ReasoningEffort = 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | 'max' | null
type TextResponseFormatJsonSchema = {
  type: 'json_schema'
  description?: string | undefined
  name: string
  schema: ResponseFormatJsonSchemaSchema
  strict?: (boolean | null) | undefined
}
type ResponseConfigurationUpdate = {
  id: string
  type: 'configuration_update'
  reasoning?: { effort?: ReasoningEffort | undefined } | undefined
  text?: { format: ResponseFormatText | TextResponseFormatJsonSchema } | undefined
}
type ReasoningItem = {
  type: 'reasoning'
  id: string
  encrypted_content?: (string | null) | undefined
  summary: SummaryTextContent[]
  content?: ReasoningTextContent[] | undefined
  status?: 'in_progress' | 'completed' | 'incomplete' | undefined
}
type Program = { type: 'program'; id: string; call_id: string; code: string; fingerprint: string }
type ProgramOutputStatus = 'completed' | 'incomplete'
type ProgramOutput = {
  type: 'program_output'
  id: string
  call_id: string
  result: string
  status: ProgramOutputStatus
}
type CompactionBody = {
  type: 'compaction'
  id: string
  encrypted_content: string
  created_by?: string | undefined
}
type CodeInterpreterOutputLogs = { type: 'logs'; logs: string }
type CodeInterpreterOutputImage = { type: 'image'; url: string }
type CodeInterpreterToolCall = {
  type: 'code_interpreter_call'
  id: string
  status: 'in_progress' | 'completed' | 'incomplete' | 'interpreting' | 'failed'
  container_id: string
  code: string | null
  outputs: (CodeInterpreterOutputLogs | CodeInterpreterOutputImage)[] | null
}
type LocalShellExecAction = {
  type: 'exec'
  command: string[]
  timeout_ms?: (number | null) | undefined
  working_directory?: (string | null) | undefined
  env: { [key: string]: string }
  user?: (string | null) | undefined
}
type LocalShellToolCall = {
  type: 'local_shell_call'
  id: string
  call_id: string
  action: LocalShellExecAction
  status: 'in_progress' | 'completed' | 'incomplete'
}
type LocalShellToolCallOutput = {
  type: 'local_shell_call_output'
  id: string
  output: string
  status?: ('in_progress' | 'completed' | 'incomplete' | null) | undefined
}
type FunctionShellAction = {
  commands: string[]
  timeout_ms: number | null
  max_output_length: number | null
}
type FunctionShellCallStatus = 'in_progress' | 'completed' | 'incomplete'
type LocalEnvironmentResource = { type: 'local' }
type ContainerReferenceResource = { type: 'container_reference'; container_id: string }
type FunctionShellCall = {
  type: 'shell_call'
  id: string
  call_id: string
  caller?: (ToolCallCaller | null) | undefined
  action: FunctionShellAction
  status: FunctionShellCallStatus
  environment: (LocalEnvironmentResource | ContainerReferenceResource) | null
  created_by?: string | undefined
}
type FunctionShellCallOutputStatusEnum = 'in_progress' | 'completed' | 'incomplete'
type FunctionShellCallOutputTimeoutOutcome = { type: 'timeout' }
type FunctionShellCallOutputExitOutcome = { type: 'exit'; exit_code: number }
type FunctionShellCallOutputContent = {
  stdout: string
  stderr: string
  outcome: FunctionShellCallOutputTimeoutOutcome | FunctionShellCallOutputExitOutcome
  created_by?: string | undefined
}
type FunctionShellCallOutput = {
  type: 'shell_call_output'
  id: string
  call_id: string
  caller?: (ToolCallCaller | null) | undefined
  status: FunctionShellCallOutputStatusEnum
  output: FunctionShellCallOutputContent[]
  max_output_length: number | null
  created_by?: string | undefined
}
type ApplyPatchCallStatus = 'in_progress' | 'completed'
type ApplyPatchCreateFileOperation = { type: 'create_file'; path: string; diff: string }
type ApplyPatchDeleteFileOperation = { type: 'delete_file'; path: string }
type ApplyPatchUpdateFileOperation = { type: 'update_file'; path: string; diff: string }
type ApplyPatchToolCall = {
  type: 'apply_patch_call'
  id: string
  call_id: string
  caller?: (ToolCallCaller | null) | undefined
  status: ApplyPatchCallStatus
  operation:
    | ApplyPatchCreateFileOperation
    | ApplyPatchDeleteFileOperation
    | ApplyPatchUpdateFileOperation
  created_by?: string | undefined
}
type ApplyPatchCallOutputStatus = 'completed' | 'failed'
type ApplyPatchToolCallOutput = {
  type: 'apply_patch_call_output'
  id: string
  call_id: string
  caller?: (ToolCallCaller | null) | undefined
  status: ApplyPatchCallOutputStatus
  output?: (string | null) | undefined
  created_by?: string | undefined
}
type MCPListToolsTool = {
  name: string
  description?: (string | null) | undefined
  input_schema: { [key: string]: unknown }
  annotations?: ({ [key: string]: unknown } | null) | undefined
}
type MCPListTools = {
  type: 'mcp_list_tools'
  id: string
  server_label: string
  tools: MCPListToolsTool[]
  error?: (string | null) | undefined
}
type MCPApprovalRequest = {
  type: 'mcp_approval_request'
  id: string
  server_label: string
  name: string
  arguments: string
}
type MCPApprovalResponseResource = {
  type: 'mcp_approval_response'
  id: string
  approval_request_id: string
  approve: boolean
  reason?: (string | null) | undefined
}
type MCPProtocolError = { type: 'mcp_protocol_error'; code: number; message: string }
type MCPToolExecutionError = { type: 'mcp_tool_execution_error'; content: any }
type HTTPError = { type: 'http_error'; code: number; message: string }
type MCPToolCallError = MCPProtocolError | MCPToolExecutionError | HTTPError
type MCPToolCallStatus = 'in_progress' | 'completed' | 'incomplete' | 'calling' | 'failed'
type MCPToolCall = {
  type: 'mcp_call'
  id: string
  server_label: string
  name: string
  arguments: string
  output?: (string | null) | undefined
  error?: (MCPToolCallError | null) | undefined
  status?: MCPToolCallStatus | undefined
  approval_request_id?: (string | null) | undefined
}
type CustomToolCall = {
  type: 'custom_tool_call'
  id?: string | undefined
  call_id: string
  caller?: (ToolCallCaller | null) | undefined
  namespace?: string | undefined
  name: string
  input: string
  async?: boolean | undefined
}
type CustomToolCallOutput = {
  type: 'custom_tool_call_output'
  id?: string | undefined
  call_id: string
  caller?: (ToolCallCallerParam | null) | undefined
  output: string | FunctionAndCustomToolCallOutput[]
}
type ConversationItem =
  | Message
  | FunctionToolCallResource
  | FunctionToolCallOutputResource
  | FileSearchToolCall
  | WebSearchToolCall
  | ImageGenToolCall
  | ComputerToolCall
  | ComputerToolCallOutputResource
  | ToolSearchCall
  | ToolSearchOutput
  | AdditionalTools
  | ResponseConfigurationUpdate
  | ReasoningItem
  | Program
  | ProgramOutput
  | CompactionBody
  | CodeInterpreterToolCall
  | LocalShellToolCall
  | LocalShellToolCallOutput
  | FunctionShellCall
  | FunctionShellCallOutput
  | ApplyPatchToolCall
  | ApplyPatchToolCallOutput
  | MCPListTools
  | MCPApprovalRequest
  | MCPApprovalResponseResource
  | MCPToolCall
  | CustomToolCall
  | CustomToolCallOutput
type ConversationItemList = {
  object: 'list'
  data: ConversationItem[]
  has_more: boolean
  first_id: string
  last_id: string
}
type ConversationResource = {
  id: string
  object: 'conversation'
  metadata: { [key: string]: string }
  created_at: number
}
type CreateEmbeddingRequestInput = {
  input: string | string[] | number[] | number[][]
  model: string | 'text-embedding-ada-002' | 'text-embedding-3-small' | 'text-embedding-3-large'
  encoding_format?: 'float' | 'base64'
  dimensions?: number
  user?: string
}
type Embedding = { index: number; embedding: number[] | string; object: 'embedding' }
type CreateEmbeddingResponse = {
  data: Embedding[]
  model: string
  object: 'list'
  usage: { prompt_tokens: number; total_tokens: number }
}
type EvalCustomDataSourceConfig = { type: 'custom'; schema: { [key: string]: unknown } }
type EvalLogsDataSourceConfig = {
  type: 'logs'
  metadata?: Metadata | undefined
  schema: { [key: string]: unknown }
}
type EvalStoredCompletionsDataSourceConfig = {
  type: 'stored_completions'
  metadata?: Metadata | undefined
  schema: { [key: string]: unknown }
}
type EvalItemContentText = string
type EvalItemContentOutputText = { type: 'output_text'; text: string }
type EvalItemInputImage = { type: 'input_image'; image_url: string; detail?: string | undefined }
type InputAudio = { type: 'input_audio'; input_audio: { data: string; format: 'mp3' | 'wav' } }
type EvalItemContentItem =
  | EvalItemContentText
  | InputTextContent
  | EvalItemContentOutputText
  | EvalItemInputImage
  | InputAudio
type EvalItemContentArray = EvalItemContentItem[]
type EvalItemContent = EvalItemContentItem | EvalItemContentArray
type EvalItem = {
  role: 'user' | 'assistant' | 'system' | 'developer'
  content: EvalItemContent
  type?: 'message' | undefined
}
type GraderLabelModel = {
  type: 'label_model'
  name: string
  model: string
  input: EvalItem[]
  labels: string[]
  passing_labels: string[]
}
type EvalGraderLabelModel = GraderLabelModel
type GraderStringCheck = {
  type: 'string_check'
  name: string
  input: string
  reference: string
  operation: 'eq' | 'ne' | 'like' | 'ilike'
}
type EvalGraderStringCheck = GraderStringCheck
type GraderTextSimilarity = {
  type: 'text_similarity'
  name: string
  input: string
  reference: string
  evaluation_metric:
    | 'cosine'
    | 'fuzzy_match'
    | 'bleu'
    | 'gleu'
    | 'meteor'
    | 'rouge_1'
    | 'rouge_2'
    | 'rouge_3'
    | 'rouge_4'
    | 'rouge_5'
    | 'rouge_l'
}
type EvalGraderTextSimilarity = GraderTextSimilarity & { pass_threshold: number }
type GraderPython = { type: 'python'; name: string; source: string; image_tag?: string | undefined }
type EvalGraderPython = GraderPython & { pass_threshold?: number | undefined }
type GraderScoreModel = {
  type: 'score_model'
  name: string
  model: string
  sampling_params?:
    | {
        seed?: (number | null) | undefined
        top_p?: (number | null) | undefined
        temperature?: (number | null) | undefined
        max_completions_tokens?: (number | null) | undefined
        reasoning_effort?: ReasoningEffort | undefined
      }
    | undefined
  input: EvalItem[]
  range?: number[] | undefined
}
type EvalGraderScoreModel = GraderScoreModel & { pass_threshold?: number | undefined }
type Eval = {
  object: 'eval'
  id: string
  name: string
  data_source_config:
    | EvalCustomDataSourceConfig
    | EvalLogsDataSourceConfig
    | EvalStoredCompletionsDataSourceConfig
  testing_criteria: (
    | EvalGraderLabelModel
    | EvalGraderStringCheck
    | EvalGraderTextSimilarity
    | EvalGraderPython
    | EvalGraderScoreModel
  )[]
  created_at: number
  metadata: Metadata
}
type EvalList = {
  object: 'list'
  data: Eval[]
  first_id: string
  last_id: string
  has_more: boolean
}
type CreateEvalCustomDataSourceConfigInput = {
  type: 'custom'
  item_schema: { [key: string]: unknown }
  include_sample_schema?: boolean
}
type CreateEvalLogsDataSourceConfigInput = { type: 'logs'; metadata?: { [key: string]: unknown } }
type CreateEvalStoredCompletionsDataSourceConfigInput = {
  type: 'stored_completions'
  metadata?: { [key: string]: unknown }
}
type EvalItemContentTextInput = string
type EvalItemContentOutputTextInput = { type: 'output_text'; text: string }
type EvalItemInputImageInput = { type: 'input_image'; image_url: string; detail?: string }
type InputAudioInput = { type: 'input_audio'; input_audio: { data: string; format: 'mp3' | 'wav' } }
type EvalItemContentItemInput =
  | EvalItemContentTextInput
  | InputTextContentInput
  | EvalItemContentOutputTextInput
  | EvalItemInputImageInput
  | InputAudioInput
type EvalItemContentArrayInput = EvalItemContentItemInput[]
type EvalItemContentInput = EvalItemContentItemInput | EvalItemContentArrayInput
type EvalItemInput = {
  role: 'user' | 'assistant' | 'system' | 'developer'
  content: EvalItemContentInput
  type?: 'message'
}
type CreateEvalItemInput = { role: string; content: string } | EvalItemInput
type CreateEvalLabelModelGraderInput = {
  type: 'label_model'
  name: string
  model: string
  input: CreateEvalItemInput[]
  labels: string[]
  passing_labels: string[]
}
type GraderStringCheckInput = {
  type: 'string_check'
  name: string
  input: string
  reference: string
  operation: 'eq' | 'ne' | 'like' | 'ilike'
}
type EvalGraderStringCheckInput = GraderStringCheckInput
type GraderTextSimilarityInput = {
  type: 'text_similarity'
  name: string
  input: string
  reference: string
  evaluation_metric:
    | 'cosine'
    | 'fuzzy_match'
    | 'bleu'
    | 'gleu'
    | 'meteor'
    | 'rouge_1'
    | 'rouge_2'
    | 'rouge_3'
    | 'rouge_4'
    | 'rouge_5'
    | 'rouge_l'
}
type EvalGraderTextSimilarityInput = GraderTextSimilarityInput & { pass_threshold: number }
type GraderPythonInput = { type: 'python'; name: string; source: string; image_tag?: string }
type EvalGraderPythonInput = GraderPythonInput & { pass_threshold?: number }
type GraderScoreModelInput = {
  type: 'score_model'
  name: string
  model: string
  sampling_params?: {
    seed?: number | null
    top_p?: number | null
    temperature?: number | null
    max_completions_tokens?: number | null
    reasoning_effort?: ReasoningEffortInput
  }
  input: EvalItemInput[]
  range?: number[]
}
type EvalGraderScoreModelInput = GraderScoreModelInput & { pass_threshold?: number }
type CreateEvalRequestInput = {
  name?: string
  metadata?: MetadataInput
  data_source_config:
    | CreateEvalCustomDataSourceConfigInput
    | CreateEvalLogsDataSourceConfigInput
    | CreateEvalStoredCompletionsDataSourceConfigInput
  testing_criteria: (
    | CreateEvalLabelModelGraderInput
    | EvalGraderStringCheckInput
    | EvalGraderTextSimilarityInput
    | EvalGraderPythonInput
    | EvalGraderScoreModelInput
  )[]
}
type EvalJsonlFileContentSource = {
  type: 'file_content'
  content: { item: { [key: string]: unknown }; sample?: { [key: string]: unknown } | undefined }[]
}
type EvalJsonlFileIdSource = { type: 'file_id'; id: string }
type CreateEvalJsonlRunDataSource = {
  type: 'jsonl'
  source: EvalJsonlFileContentSource | EvalJsonlFileIdSource
}
type InputContent = InputTextContent | InputImageContent | InputFileContent
type InputMessageContentList = InputContent[]
type MessagePhase = 'commentary' | 'final_answer'
type EasyInputMessage = {
  role: 'user' | 'assistant' | 'system' | 'developer'
  content: string | InputMessageContentList
  phase?: (MessagePhase | null) | undefined
  type?: 'message' | undefined
}
type ChatCompletionTool = { type: 'function'; function: FunctionObject }
type EvalStoredCompletionsSource = {
  type: 'stored_completions'
  metadata?: Metadata | undefined
  model?: (string | null) | undefined
  created_after?: (number | null) | undefined
  created_before?: (number | null) | undefined
  limit?: (number | null) | undefined
}
type CreateEvalCompletionsRunDataSource = {
  type: 'completions'
  input_messages?:
    | (
        | { type: 'template'; template: (EasyInputMessage | EvalItem)[] }
        | { type: 'item_reference'; item_reference: string }
      )
    | undefined
  sampling_params?:
    | {
        reasoning_effort?: ReasoningEffort | undefined
        temperature?: number | undefined
        max_completion_tokens?: number | undefined
        top_p?: number | undefined
        seed?: number | undefined
        response_format?:
          | (ResponseFormatText | ResponseFormatJsonSchema | ResponseFormatJsonObject)
          | undefined
        tools?: ChatCompletionTool[] | undefined
      }
    | undefined
  model?: string | undefined
  source: EvalJsonlFileContentSource | EvalJsonlFileIdSource | EvalStoredCompletionsSource
}
type TextResponseFormatConfiguration =
  | ResponseFormatText
  | TextResponseFormatJsonSchema
  | ResponseFormatJsonObject
type EvalResponsesSource = {
  type: 'responses'
  metadata?: ({ [key: string]: unknown } | null) | undefined
  model?: (string | null) | undefined
  instructions_search?: (string | null) | undefined
  created_after?: (number | null) | undefined
  created_before?: (number | null) | undefined
  reasoning_effort?: (ReasoningEffort | null) | undefined
  temperature?: (number | null) | undefined
  top_p?: (number | null) | undefined
  users?: (string[] | null) | undefined
  tools?: (string[] | null) | undefined
}
type CreateEvalResponsesRunDataSource = {
  type: 'responses'
  input_messages?:
    | (
        | { type: 'template'; template: ({ role: string; content: string } | EvalItem)[] }
        | { type: 'item_reference'; item_reference: string }
      )
    | undefined
  sampling_params?:
    | {
        reasoning_effort?: ReasoningEffort | undefined
        temperature?: number | undefined
        max_completion_tokens?: number | undefined
        top_p?: number | undefined
        seed?: number | undefined
        tools?: Tool[] | undefined
        text?: { format?: TextResponseFormatConfiguration | undefined } | undefined
      }
    | undefined
  model?: string | undefined
  source: EvalJsonlFileContentSource | EvalJsonlFileIdSource | EvalResponsesSource
}
type EvalApiError = { code: string; message: string }
type EvalRun = {
  object: 'eval.run'
  id: string
  eval_id: string
  status: string
  model: string | null
  name: string | null
  created_at: number
  report_url: string
  result_counts: { total: number; errored: number; failed: number; passed: number }
  per_model_usage:
    | {
        model_name: string
        invocation_count: number
        prompt_tokens: number
        completion_tokens: number
        total_tokens: number
        cached_tokens: number
      }[]
    | null
  per_testing_criteria_results:
    | { testing_criteria: string; passed: number; failed: number }[]
    | null
  data_source:
    | CreateEvalJsonlRunDataSource
    | CreateEvalCompletionsRunDataSource
    | CreateEvalResponsesRunDataSource
  metadata: Metadata
  error: EvalApiError | null
}
type EvalRunList = {
  object: 'list'
  data: EvalRun[]
  first_id: string
  last_id: string
  has_more: boolean
}
type EvalJsonlFileContentSourceInput = {
  type: 'file_content'
  content: { item: { [key: string]: unknown }; sample?: { [key: string]: unknown } }[]
}
type EvalJsonlFileIdSourceInput = { type: 'file_id'; id: string }
type CreateEvalJsonlRunDataSourceInput = {
  type: 'jsonl'
  source: EvalJsonlFileContentSourceInput | EvalJsonlFileIdSourceInput
}
type EvalStoredCompletionsSourceInput = {
  type: 'stored_completions'
  metadata?: MetadataInput
  model?: string | null
  created_after?: number | null
  created_before?: number | null
  limit?: number | null
}
type CreateEvalCompletionsRunDataSourceInput = {
  type: 'completions'
  input_messages?:
    | { type: 'template'; template: (EasyInputMessageInput | EvalItemInput)[] }
    | { type: 'item_reference'; item_reference: string }
  sampling_params?: {
    reasoning_effort?: ReasoningEffortInput
    temperature?: number
    max_completion_tokens?: number
    top_p?: number
    seed?: number
    response_format?:
      | ResponseFormatTextInput
      | ResponseFormatJsonSchemaInput
      | ResponseFormatJsonObjectInput
    tools?: ChatCompletionToolInput[]
  }
  model?: string
  source:
    | EvalJsonlFileContentSourceInput
    | EvalJsonlFileIdSourceInput
    | EvalStoredCompletionsSourceInput
}
type TextResponseFormatConfigurationInput =
  | ResponseFormatTextInput
  | TextResponseFormatJsonSchemaInput
  | ResponseFormatJsonObjectInput
type EvalResponsesSourceInput = {
  type: 'responses'
  metadata?: { [key: string]: unknown } | null
  model?: string | null
  instructions_search?: string | null
  created_after?: number | null
  created_before?: number | null
  reasoning_effort?: ReasoningEffortInput | null
  temperature?: number | null
  top_p?: number | null
  users?: string[] | null
  tools?: string[] | null
}
type CreateEvalResponsesRunDataSourceInput = {
  type: 'responses'
  input_messages?:
    | { type: 'template'; template: ({ role: string; content: string } | EvalItemInput)[] }
    | { type: 'item_reference'; item_reference: string }
  sampling_params?: {
    reasoning_effort?: ReasoningEffortInput
    temperature?: number
    max_completion_tokens?: number
    top_p?: number
    seed?: number
    tools?: ToolInput[]
    text?: { format?: TextResponseFormatConfigurationInput }
  }
  model?: string
  source: EvalJsonlFileContentSourceInput | EvalJsonlFileIdSourceInput | EvalResponsesSourceInput
}
type CreateEvalRunRequestInput = {
  name?: string
  metadata?: MetadataInput
  data_source:
    | CreateEvalJsonlRunDataSourceInput
    | CreateEvalCompletionsRunDataSourceInput
    | CreateEvalResponsesRunDataSourceInput
}
type EvalRunOutputItemResult = {
  name: string
  type?: string | undefined
  score: number
  passed: boolean
  sample?: ({ [key: string]: unknown } | null) | undefined
}
type EvalRunOutputItem = {
  object: 'eval.run.output_item'
  id: string
  run_id: string
  eval_id: string
  created_at: number
  status: string
  datasource_item_id: number
  datasource_item: { [key: string]: unknown }
  results: EvalRunOutputItemResult[]
  sample: {
    input: { role: string; content: string }[]
    output: { role?: string | undefined; content?: string | undefined }[]
    finish_reason: string
    model: string
    usage: {
      total_tokens: number
      completion_tokens: number
      prompt_tokens: number
      cached_tokens: number
    }
    error: EvalApiError | null
    temperature: number
    max_completion_tokens: number
    top_p: number
    seed: number
  }
}
type EvalRunOutputItemList = {
  object: 'list'
  data: EvalRunOutputItem[]
  first_id: string
  last_id: string
  has_more: boolean
}
type OpenAIFile = {
  id: string
  bytes: number | null
  created_at: number
  expires_at?: number | undefined
  filename: string
  object: 'file'
  purpose:
    | 'assistants'
    | 'assistants_output'
    | 'batch'
    | 'batch_output'
    | 'fine-tune'
    | 'fine-tune-results'
    | 'vision'
    | 'user_data'
  status: 'uploaded' | 'processed' | 'error'
  status_details?: string | undefined
}
type ListFilesResponse = {
  object: string
  data: OpenAIFile[]
  first_id: string
  last_id: string
  has_more: boolean
}
type FileExpirationAfterInput = { anchor: 'created_at'; seconds: bigint }
type CreateFileRequestInput = {
  file: File
  purpose: 'assistants' | 'batch' | 'fine-tune' | 'vision' | 'user_data' | 'evals'
  expires_after?: FileExpirationAfterInput
}
type DeleteFileResponse = { id: string; object: 'file'; deleted: boolean }
type GraderLabelModelInput = {
  type: 'label_model'
  name: string
  model: string
  input: EvalItemInput[]
  labels: string[]
  passing_labels: string[]
}
type GraderMultiInput = {
  type: 'multi'
  name: string
  graders: {
    [key: string]:
      | GraderStringCheckInput
      | GraderTextSimilarityInput
      | GraderPythonInput
      | GraderScoreModelInput
      | GraderLabelModelInput
  }
  calculate_output: string
}
type RunGraderRequestInput = {
  grader:
    | GraderStringCheckInput
    | GraderTextSimilarityInput
    | GraderPythonInput
    | GraderScoreModelInput
    | GraderMultiInput
  item?: { [key: string]: unknown }
  model_sample: string
}
type RunGraderResponse = {
  reward: number
  metadata: {
    name: string
    type: string
    errors: {
      formula_parse_error: boolean
      sample_parse_error: boolean
      truncated_observation_error: boolean
      unresponsive_reward_error: boolean
      invalid_variable_error: boolean
      other_error: boolean
      python_grader_server_error: boolean
      python_grader_server_error_type: string | null
      python_grader_runtime_error: boolean
      python_grader_runtime_error_details: string | null
      model_grader_server_error: boolean
      model_grader_refusal_error: boolean
      model_grader_parse_error: boolean
      model_grader_server_error_details: string | null
    }
    execution_time: number
    scores: { [key: string]: any }
    token_usage: {
      prompt_tokens: number
      total_tokens: number
      completion_tokens?: (number | null) | undefined
      cached_tokens?: (number | null) | undefined
    } | null
    sampled_model_name: string | null
  }
  sub_rewards: { [key: string]: any }
  model_grader_token_usage_per_model: { [key: string]: any }
}
type ValidateGraderRequestInput = {
  grader:
    | GraderStringCheckInput
    | GraderTextSimilarityInput
    | GraderPythonInput
    | GraderScoreModelInput
    | GraderMultiInput
}
type GraderMulti = {
  type: 'multi'
  name: string
  graders: {
    [key: string]:
      | GraderStringCheck
      | GraderTextSimilarity
      | GraderPython
      | GraderScoreModel
      | GraderLabelModel
  }
  calculate_output: string
}
type ValidateGraderResponse = {
  grader?:
    | (GraderStringCheck | GraderTextSimilarity | GraderPython | GraderScoreModel | GraderMulti)
    | undefined
}
type FineTuningCheckpointPermission = {
  id: string
  created_at: number
  project_id: string
  object: 'checkpoint.permission'
}
type ListFineTuningCheckpointPermissionResponse = {
  data: FineTuningCheckpointPermission[]
  object: 'list'
  first_id?: (string | null) | undefined
  last_id?: (string | null) | undefined
  has_more: boolean
}
type CreateFineTuningCheckpointPermissionRequestInput = { project_ids: string[] }
type DeleteFineTuningCheckpointPermissionResponse = {
  id: string
  object: 'checkpoint.permission'
  deleted: boolean
}
type FineTuneSupervisedHyperparametersInput = {
  batch_size?: 'auto' | number
  learning_rate_multiplier?: 'auto' | number
  n_epochs?: 'auto' | number
}
type FineTuneSupervisedMethodInput = { hyperparameters?: FineTuneSupervisedHyperparametersInput }
type FineTuneDPOHyperparametersInput = {
  beta?: 'auto' | number
  batch_size?: 'auto' | number
  learning_rate_multiplier?: 'auto' | number
  n_epochs?: 'auto' | number
}
type FineTuneDPOMethodInput = { hyperparameters?: FineTuneDPOHyperparametersInput }
type FineTuneReinforcementHyperparametersInput = {
  batch_size?: 'auto' | number
  learning_rate_multiplier?: 'auto' | number
  n_epochs?: 'auto' | number
  reasoning_effort?: 'default' | 'low' | 'medium' | 'high'
  compute_multiplier?: 'auto' | number
  eval_interval?: 'auto' | number
  eval_samples?: 'auto' | number
}
type FineTuneReinforcementMethodInput = {
  grader:
    | GraderStringCheckInput
    | GraderTextSimilarityInput
    | GraderPythonInput
    | GraderScoreModelInput
    | GraderMultiInput
  hyperparameters?: FineTuneReinforcementHyperparametersInput
}
type FineTuneMethodInput = {
  type: 'supervised' | 'dpo' | 'reinforcement'
  supervised?: FineTuneSupervisedMethodInput
  dpo?: FineTuneDPOMethodInput
  reinforcement?: FineTuneReinforcementMethodInput
}
type CreateFineTuningJobRequestInput = {
  model:
    | string
    | 'gpt-4.1-mini-2025-04-14'
    | 'babbage-002'
    | 'davinci-002'
    | 'gpt-3.5-turbo'
    | 'gpt-4o-mini'
  training_file: string
  hyperparameters?: {
    batch_size?: 'auto' | number
    learning_rate_multiplier?: 'auto' | number
    n_epochs?: 'auto' | number
  }
  suffix?: string | null
  validation_file?: string | null
  integrations?:
    | {
        type: 'wandb'
        wandb: { project: string; name?: string | null; entity?: string | null; tags?: string[] }
      }[]
    | null
  seed?: number | null
  method?: FineTuneMethodInput
  metadata?: MetadataInput
}
type FineTuningIntegration = {
  type: 'wandb'
  wandb: {
    project: string
    name?: (string | null) | undefined
    entity?: (string | null) | undefined
    tags?: string[] | undefined
  }
}
type FineTuneSupervisedHyperparameters = {
  batch_size?: ('auto' | number) | undefined
  learning_rate_multiplier?: ('auto' | number) | undefined
  n_epochs?: ('auto' | number) | undefined
}
type FineTuneSupervisedMethod = { hyperparameters?: FineTuneSupervisedHyperparameters | undefined }
type FineTuneDPOHyperparameters = {
  beta?: ('auto' | number) | undefined
  batch_size?: ('auto' | number) | undefined
  learning_rate_multiplier?: ('auto' | number) | undefined
  n_epochs?: ('auto' | number) | undefined
}
type FineTuneDPOMethod = { hyperparameters?: FineTuneDPOHyperparameters | undefined }
type FineTuneReinforcementHyperparameters = {
  batch_size?: ('auto' | number) | undefined
  learning_rate_multiplier?: ('auto' | number) | undefined
  n_epochs?: ('auto' | number) | undefined
  reasoning_effort?: 'default' | 'low' | 'medium' | 'high' | undefined
  compute_multiplier?: ('auto' | number) | undefined
  eval_interval?: ('auto' | number) | undefined
  eval_samples?: ('auto' | number) | undefined
}
type FineTuneReinforcementMethod = {
  grader: GraderStringCheck | GraderTextSimilarity | GraderPython | GraderScoreModel | GraderMulti
  hyperparameters?: FineTuneReinforcementHyperparameters | undefined
}
type FineTuneMethod = {
  type: 'supervised' | 'dpo' | 'reinforcement'
  supervised?: FineTuneSupervisedMethod | undefined
  dpo?: FineTuneDPOMethod | undefined
  reinforcement?: FineTuneReinforcementMethod | undefined
}
type FineTuningJob = {
  id: string
  created_at: number
  error: { code: string; message: string; param: string | null } | null | { [key: string]: unknown }
  fine_tuned_model: string | null
  finished_at: number | null
  hyperparameters?:
    | ({
        batch_size?: (('auto' | number) | null) | undefined
        learning_rate_multiplier?: ('auto' | number) | undefined
        n_epochs?: ('auto' | number) | undefined
      } | null)
    | undefined
  model: string
  object: 'fine_tuning.job'
  organization_id: string
  result_files: string[]
  status:
    | 'validating_files'
    | 'queued'
    | 'running'
    | 'succeeded'
    | 'failed'
    | 'cancelled'
    | 'pausing'
    | 'paused'
  trained_tokens: number | null
  training_file: string
  validation_file: string | null
  integrations?: (FineTuningIntegration[] | null) | undefined
  seed: number | null
  estimated_finish?: (number | null) | undefined
  method?: (FineTuneMethod | null) | undefined
  metadata?: Metadata | undefined
}
type ListPaginatedFineTuningJobsResponse = {
  data: FineTuningJob[]
  has_more: boolean
  object: 'list'
}
type FineTuningJobCheckpoint = {
  id: string
  created_at: number
  fine_tuned_model_checkpoint: string
  step_number: number
  metrics: {
    step?: number | undefined
    train_loss?: number | undefined
    train_mean_token_accuracy?: number | undefined
    valid_loss?: number | undefined
    valid_mean_token_accuracy?: number | undefined
    full_valid_loss?: number | undefined
    full_valid_mean_token_accuracy?: number | undefined
  }
  fine_tuning_job_id: string
  object: 'fine_tuning.job.checkpoint'
}
type ListFineTuningJobCheckpointsResponse = {
  data: FineTuningJobCheckpoint[]
  object: 'list'
  first_id?: (string | null) | undefined
  last_id?: (string | null) | undefined
  has_more: boolean
}
type FineTuningJobEvent = {
  object: 'fine_tuning.job.event'
  id: string
  created_at: number
  level: 'info' | 'warn' | 'error'
  message: string
  type?: 'message' | 'metrics' | undefined
  data?: ({ [key: string]: unknown } | null) | undefined
}
type ListFineTuningJobEventsResponse = {
  data: FineTuningJobEvent[]
  object: 'list'
  has_more: boolean
}
type FrameCountInput = number | null
type FrameDurationMsInput = number | null
type ComplexityInput = 'low' | 'medium' | 'high' | null
type ImageRefParamInput = unknown | unknown
type ImagesApiOutputFormatInput = 'png' | 'webp' | 'jpeg' | 'gif' | 'svg'
type PartialImagesInput = number | null
type EditImageBodyJsonParamInput = {
  frame_count?: FrameCountInput
  frame_duration_ms?: FrameDurationMsInput
  complexity?: ComplexityInput
  model?:
    | string
    | 'gpt-image-1.5'
    | 'gpt-image-2'
    | 'gpt-image-2-2026-04-21'
    | 'gpt-image-2.5-sunburst'
    | 'gpt-image-2.5-sunburst-2026-09-08'
    | 'gpt-image-2.5-flare'
    | 'gpt-image-2.5-flare-2026-09-08'
    | 'gpt-image-2.6-sunburst'
    | 'gpt-image-2.6-flare'
    | 'gpt-image-1'
    | 'gpt-image-1-mini'
    | 'chatgpt-image-latest'
    | null
  images: ImageRefParamInput[]
  mask?: ImageRefParamInput
  markup?: ImageRefParamInput
  prompt: string
  n?: number | null
  quality?: 'low' | 'medium' | 'high' | 'xhigh' | 'max' | 'auto' | null
  input_fidelity?: 'high' | 'low' | null
  size?: string | 'auto' | '1024x1024' | '1536x1024' | '1024x1536' | null
  safety_identifier?: string | null
  user?: string
  output_format?: ImagesApiOutputFormatInput | null
  svg?: SvgParamInput | null
  output_compression?: number | null
  moderation?: 'low' | 'auto' | null
  background?: 'transparent' | 'opaque' | 'auto' | null
  stream?: boolean | null
  partial_images?: PartialImagesInput
}
type MarkupInput = File
type CreateImageEditRequestInput = {
  frame_count?: FrameCountInput
  frame_duration_ms?: FrameDurationMsInput
  complexity?: ComplexityInput
  image: File | File[]
  prompt: string
  mask?: File
  markup?: MarkupInput
  background?: 'transparent' | 'opaque' | 'auto' | null
  model:
    | string
    | 'gpt-image-1.5'
    | 'gpt-image-2'
    | 'gpt-image-2-2026-04-21'
    | 'gpt-image-2.5-sunburst'
    | 'gpt-image-2.5-sunburst-2026-09-08'
    | 'gpt-image-2.5-flare'
    | 'gpt-image-2.5-flare-2026-09-08'
    | 'gpt-image-2.6-sunburst'
    | 'gpt-image-2.6-flare'
    | 'gpt-image-1'
    | 'gpt-image-1-mini'
    | 'chatgpt-image-latest'
    | 'dall-e-2'
  n?: number | null
  size?: string | '1024x1024' | '1536x1024' | '1024x1536' | 'auto' | '256x256' | '512x512' | null
  response_format?: 'url' | 'b64_json' | null
  output_format?: ImagesApiOutputFormatInput | null
  svg?: SvgParamInput | null
  output_compression?: number | null
  safety_identifier?: string | null
  user?: string
  input_fidelity?: InputFidelityInput | null
  stream?: boolean | null
  partial_images?: PartialImagesInput
  quality?: 'low' | 'medium' | 'high' | 'xhigh' | 'max' | 'auto' | 'standard' | null
}
type Image = {
  b64_json?: string | undefined
  url?: string | undefined
  revised_prompt?: string | undefined
}
type ImagesApiOutputFormat = 'png' | 'webp' | 'jpeg' | 'gif' | 'svg'
type ImageGenOutputTokensDetails = { image_tokens: number; text_tokens: number }
type ImageGenInputUsageDetails = { text_tokens: number; image_tokens: number }
type ImageGenUsage = {
  input_tokens: number
  total_tokens: number
  output_tokens: number
  output_tokens_details?: ImageGenOutputTokensDetails | undefined
  input_tokens_details: ImageGenInputUsageDetails
}
type ImagesResponse = {
  safety_identifier?: (string | null) | undefined
  created: number
  data?: Image[] | undefined
  background?: 'transparent' | 'opaque' | undefined
  output_format?: ImagesApiOutputFormat | undefined
  size?: (string | '1024x1024' | '1024x1536' | '1536x1024') | undefined
  quality?: 'low' | 'medium' | 'high' | 'xhigh' | 'max' | undefined
  usage?: ImageGenUsage | undefined
  svg_usage?: SvgUsage | undefined
}
type SvgInput = {
  model: string
  reasoning?: { effort?: ReasoningEffortEnumInput | null } | null
} | null
type CreateImageRequestInput = {
  frame_count?: FrameCountInput
  frame_duration_ms?: FrameDurationMsInput
  complexity?: ComplexityInput
  svg?: SvgInput
  prompt: string
  model:
    | string
    | 'gpt-image-1.5'
    | 'gpt-image-2'
    | 'gpt-image-2-2026-04-21'
    | 'gpt-image-2.5-sunburst'
    | 'gpt-image-2.5-sunburst-2026-09-08'
    | 'gpt-image-2.5-flare'
    | 'gpt-image-2.5-flare-2026-09-08'
    | 'gpt-image-2.6-sunburst'
    | 'gpt-image-2.6-flare'
    | 'gpt-image-1'
    | 'gpt-image-1-mini'
    | 'chatgpt-image-latest'
    | 'dall-e-2'
    | 'dall-e-3'
  n?: number | null
  quality?: 'low' | 'medium' | 'high' | 'xhigh' | 'max' | 'auto' | 'standard' | 'hd' | null
  response_format?: 'url' | 'b64_json' | null
  output_format?: ImagesApiOutputFormatInput | null
  output_compression?: number | null
  stream?: boolean | null
  partial_images?: PartialImagesInput
  size?:
    | string
    | 'auto'
    | '1024x1024'
    | '1536x1024'
    | '1024x1536'
    | '256x256'
    | '512x512'
    | '1792x1024'
    | '1024x1792'
    | null
  moderation?: 'low' | 'auto' | null
  background?: 'transparent' | 'opaque' | 'auto' | null
  style?: 'vivid' | 'natural' | null
  safety_identifier?: string | null
  user?: string
}
type CreateImageVariationRequestInput = {
  image: File
  model?: string | 'dall-e-2' | null
  n?: number | null
  response_format?: 'url' | 'b64_json' | null
  size?: '256x256' | '512x512' | '1024x1024' | null
  user?: string
}
type ModelIdsLiveInput = string | 'gpt-live-1' | 'gpt-live-1.1'
type SafetyIdentifierInput = string | null
type InstructionsInput = string | null
type LiveCustomVoiceParamInput = { id: string }
type LiveInitialSessionAudioOutputParamInput = {
  voice?:
    | (
        | string
        | 'alloy'
        | 'ash'
        | 'ballad'
        | 'beacon'
        | 'bossa'
        | 'brise'
        | 'calandria'
        | 'cedar'
        | 'cinder'
        | 'compas'
        | 'coral'
        | 'delta'
        | 'destello'
        | 'echo'
        | 'flitz'
        | 'gleam'
        | 'halo'
        | 'harema'
        | 'hornero'
        | 'juni'
        | 'luciernaga'
        | 'marin'
        | 'meridian'
        | 'nira'
        | 'noeul'
        | 'nuri'
        | 'pearl'
        | 'quartz'
        | 'ripple'
        | 'sage'
        | 'shida'
        | 'shimmer'
        | 'sillage'
        | 'stone'
        | 'tempo'
        | 'verse'
        | 'vesper'
        | 'willow'
      )
    | LiveCustomVoiceParamInput
}
type LiveMediaSessionAudioParamInput = { output?: LiveInitialSessionAudioOutputParamInput }
type LiveClientDelegationParamInput = { acknowledgement_delay_ms?: number; type: 'client' }
type LiveResponsesServiceTierInput =
  | 'auto'
  | 'default'
  | 'fast_tier_temp_pilot'
  | 'flex'
  | 'priority'
  | 'ultrafast'
type LiveReasoningEffortInput = 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh'
type LiveReasoningSummaryInput = 'concise' | 'detailed' | 'auto'
type LiveDelegationReasoningInputParamInput = {
  effort?: LiveReasoningEffortInput | null
  summary?: LiveReasoningSummaryInput | null
}
type LiveTextVerbosityInput = 'low' | 'medium' | 'high'
type LiveDelegationTextInputParamInput = { verbosity?: LiveTextVerbosityInput | null }
type LiveFunctionToolInputParamInput = {
  type: 'function'
  name: string
  description?: string | null
  parameters?: { [key: string]: any } | null
  strict?: boolean | null
}
type LiveWebSearchToolInputParamInput = { type: 'web_search' }
type LiveFileSearchToolInputParamInput = { type: 'file_search' }
type LiveCodeInterpreterToolInputParamInput = { type: 'code_interpreter' }
type LiveContainerMemoryLimitInput = '1g' | '4g' | '16g' | '64g'
type LiveContainerNetworkPolicyDisabledParamInput = { type: 'disabled' }
type LiveHostedShellNetworkPolicyAllowlistParamInput = {
  type: 'allowlist'
  allowed_domains: string[]
}
type LiveSkillReferenceParamInput = {
  type: 'skill_reference'
  skill_id: string
  version?: string | null
}
type LiveInlineSkillSourceParamInput = {
  type: 'base64'
  media_type: 'application/zip'
  data: string
}
type LiveInlineSkillParamInput = {
  type: 'inline'
  name: string
  description: string
  source: LiveInlineSkillSourceParamInput
}
type LiveHostedShellContainerAutoParamInput = {
  type: 'container_auto'
  file_ids?: string[] | null
  memory_limit?: LiveContainerMemoryLimitInput | null
  network_policy?:
    | (
        | LiveContainerNetworkPolicyDisabledParamInput
        | LiveHostedShellNetworkPolicyAllowlistParamInput
      )
    | null
  skills?: (LiveSkillReferenceParamInput | LiveInlineSkillParamInput)[] | null
}
type LiveContainerReferenceParamInput = { type: 'container_reference'; container_id: string }
type LiveLocalSkillParamInput = { name: string; description: string; path: string }
type LiveLocalEnvironmentParamInput = { type: 'local'; skills?: LiveLocalSkillParamInput[] | null }
type LiveHostedShellToolInputParamInput = {
  type: 'shell'
  environment?:
    | (
        | LiveHostedShellContainerAutoParamInput
        | LiveContainerReferenceParamInput
        | LiveLocalEnvironmentParamInput
      )
    | null
}
type LiveImageGenerationToolInputParamInput = { type: 'image_generation' }
type LiveMCPToolFilterParamInput = { tool_names?: string[] | null; read_only?: boolean | null }
type LiveMCPRequireApprovalFilterParamInput = {
  always?: LiveMCPToolFilterParamInput | null
  never?: LiveMCPToolFilterParamInput | null
}
type LiveMCPRequireApprovalApiEnumInput = 'always' | 'never'
type LiveCallableToolAllowedCallerInput = 'direct' | 'programmatic'
type LiveMCPToolInputParamInput = {
  type: 'mcp'
  server_label?: string
  server_url?: string | null
  server_description?: string | null
  authorization?: string | null
  headers?: { [key: string]: string } | null
  allowed_tools?: (string[] | LiveMCPToolFilterParamInput) | null
  require_approval?:
    | (LiveMCPRequireApprovalFilterParamInput | LiveMCPRequireApprovalApiEnumInput)
    | null
  connector_id?: string | null
  tunnel_id?: string | null
  allowed_callers?: LiveCallableToolAllowedCallerInput[] | null
  defer_loading?: boolean | null
}
type LiveCustomToolInputParamInput = { type: 'custom' }
type LiveNamespaceToolInputParamInput = { type: 'namespace' }
type LiveToolSearchToolInputParamInput = { type: 'tool_search' }
type LiveProgrammaticToolInputParamInput = { type: 'programmatic_tool_calling' }
type LiveComputerToolInputParamInput = { type: 'computer' }
type LiveApplyPatchToolInputParamInput = { type: 'apply_patch' }
type LiveToolChoiceEnumInput = 'auto' | 'none' | 'required'
type LiveFunctionToolChoiceParamInput = { type: 'function'; name: string }
type LiveMCPToolChoiceParamInput = { type: 'mcp'; server_label: string; name?: string | null }
type LiveSpecificFileSearchParamInput = { type: 'file_search' }
type LiveSpecificWebSearchParamInput = { type: 'web_search' }
type LiveSpecificWebSearchPreviewParamInput = { type: 'web_search_preview' }
type LiveSpecificImageGenParamInput = { type: 'image_generation' }
type LiveSpecificComputerParamInput = { type: 'computer' }
type LiveSpecificCodeInterpreterParamInput = { type: 'code_interpreter' }
type LiveSpecificProgrammaticToolCallingParamInput = { type: 'programmatic_tool_calling' }
type LiveSpecificFunctionShellParamInput = { type: 'shell' }
type LiveSpecificCustomToolParamInput = { type: 'custom'; name: string }
type LiveSpecificApplyPatchParamInput = { type: 'apply_patch' }
type LiveToolChoiceValueEnumInput = 'none' | 'auto' | 'required'
type LiveAllowedToolsChoiceParamInput = {
  type: 'allowed_tools'
  tools: (
    | LiveFunctionToolChoiceParamInput
    | LiveMCPToolChoiceParamInput
    | LiveSpecificFileSearchParamInput
    | LiveSpecificWebSearchParamInput
    | LiveSpecificWebSearchPreviewParamInput
    | LiveSpecificImageGenParamInput
    | LiveSpecificComputerParamInput
    | LiveSpecificCodeInterpreterParamInput
    | LiveSpecificProgrammaticToolCallingParamInput
    | LiveSpecificFunctionShellParamInput
    | LiveSpecificCustomToolParamInput
    | LiveSpecificApplyPatchParamInput
  )[]
  mode?: LiveToolChoiceValueEnumInput | null
}
type LiveResponsesDelegationSettingsInputParamInput = {
  model: string
  instructions?: string | null
  max_output_tokens?: number | null
  service_tier?: LiveResponsesServiceTierInput | null
  reasoning?: LiveDelegationReasoningInputParamInput | null
  text?: LiveDelegationTextInputParamInput | null
  tools?: (
    | LiveFunctionToolInputParamInput
    | LiveWebSearchToolInputParamInput
    | LiveFileSearchToolInputParamInput
    | LiveCodeInterpreterToolInputParamInput
    | LiveHostedShellToolInputParamInput
    | LiveImageGenerationToolInputParamInput
    | LiveMCPToolInputParamInput
    | LiveCustomToolInputParamInput
    | LiveNamespaceToolInputParamInput
    | LiveToolSearchToolInputParamInput
    | LiveProgrammaticToolInputParamInput
    | LiveComputerToolInputParamInput
    | LiveApplyPatchToolInputParamInput
  )[]
  tool_choice?:
    | LiveToolChoiceEnumInput
    | (
        | LiveFunctionToolChoiceParamInput
        | LiveMCPToolChoiceParamInput
        | LiveSpecificFileSearchParamInput
        | LiveSpecificWebSearchParamInput
        | LiveSpecificWebSearchPreviewParamInput
        | LiveSpecificImageGenParamInput
        | LiveSpecificComputerParamInput
        | LiveSpecificCodeInterpreterParamInput
        | LiveSpecificProgrammaticToolCallingParamInput
        | LiveSpecificFunctionShellParamInput
        | LiveSpecificCustomToolParamInput
        | LiveSpecificApplyPatchParamInput
      )
    | LiveAllowedToolsChoiceParamInput
  parallel_tool_calls?: boolean | null
}
type LiveResponsesDelegationParamInput = {
  acknowledgement_delay_ms?: number
  type: 'responses'
  responses: LiveResponsesDelegationSettingsInputParamInput
}
type LiveDecisionInputTextParamInput = { type: 'input_text'; text: string }
type LiveDetailEnumInput = 'low' | 'high' | 'auto' | 'original'
type LiveDecisionInputImageParamInput = {
  type: 'input_image'
  image_url: string
  detail?: LiveDetailEnumInput | null
}
type LiveDecisionJsonObjectInput = { [key: string]: unknown }
type LiveDecisionInputJsonParamInput = {
  type: 'input_json'
  data: LiveDecisionJsonObjectInput | LiveDecisionJsonObjectInput[]
}
type LiveDecisionChoiceParamInput = { value: string | boolean; description?: string }
type LiveDecisionChoiceQuestionParamInput = {
  type: 'choice'
  name?: string
  instructions:
    | string
    | (
        | LiveDecisionInputTextParamInput
        | LiveDecisionInputImageParamInput
        | LiveDecisionInputJsonParamInput
      )[]
  choices: LiveDecisionChoiceParamInput[]
}
type LiveDecisionPredicateQuestionParamInput = {
  type: 'predicate'
  name?: string
  instructions:
    | string
    | (
        | LiveDecisionInputTextParamInput
        | LiveDecisionInputImageParamInput
        | LiveDecisionInputJsonParamInput
      )[]
}
type LiveDecisionScoreLevelParamInput = { label: string; description?: string }
type LiveDecisionScoreQuestionParamInput = {
  type: 'score'
  name?: string
  instructions:
    | string
    | (
        | LiveDecisionInputTextParamInput
        | LiveDecisionInputImageParamInput
        | LiveDecisionInputJsonParamInput
      )[]
  levels: LiveDecisionScoreLevelParamInput[]
}
type LiveDecisionQuestionInput =
  | LiveDecisionChoiceQuestionParamInput
  | LiveDecisionPredicateQuestionParamInput
  | LiveDecisionScoreQuestionParamInput
type LiveDecisionsSettingsInputParamInput = {
  questions: LiveDecisionQuestionInput[]
  model: string
}
type LiveDecisionsDelegationParamInput = {
  acknowledgement_delay_ms?: number
  type: 'decisions'
  decisions: LiveDecisionsSettingsInputParamInput
}
type DelegationInput =
  | (
      | LiveClientDelegationParamInput
      | LiveResponsesDelegationParamInput
      | LiveDecisionsDelegationParamInput
    )
  | null
type LiveDecisionQuestionsInputParamInput = { questions: LiveDecisionQuestionInput[] }
type LiveDecisionTriggerInputParamInput = {
  type: 'decisions'
  event_type: 'session.input_transcript.delta' | 'session.output_transcript.delta'
  decisions: LiveDecisionQuestionsInputParamInput
}
type TriggersInput = LiveDecisionTriggerInputParamInput[]
type StoreInput = boolean
type LiveInitialMessageStatusInput = 'incomplete' | 'completed'
type LiveInitialInputTextContentPartParamInput = { type?: 'input_text'; text: string }
type LiveInitialDeveloperMessageItemParamInput = {
  id?: string | null
  type?: 'message'
  status?: LiveInitialMessageStatusInput | null
  role: 'developer'
  content: LiveInitialInputTextContentPartParamInput[]
}
type LiveInitialUserMessageItemParamInput = {
  id?: string | null
  type?: 'message'
  status?: LiveInitialMessageStatusInput | null
  role: 'user'
  content: LiveInitialInputTextContentPartParamInput[]
}
type LiveInitialTextContentPartParamInput = { type?: 'text'; text: string }
type LiveInitialOutputTextContentPartParamInput = { type: 'output_text'; text: string }
type LiveInitialAssistantMessageItemParamInput = {
  id?: string | null
  type?: 'message'
  status?: LiveInitialMessageStatusInput | null
  role: 'assistant'
  content: (LiveInitialTextContentPartParamInput | LiveInitialOutputTextContentPartParamInput)[]
}
type LiveInitialItemInput =
  | LiveInitialDeveloperMessageItemParamInput
  | LiveInitialUserMessageItemParamInput
  | LiveInitialAssistantMessageItemParamInput
type InputInput = LiveInitialItemInput[]
type LiveAllowedServerEventParamInput = { type: string; response_event?: string }
type LiveDataChannelConfigParamInput = {
  allowed_client_events?: 'all' | string[]
  allowed_server_events?: 'all' | LiveAllowedServerEventParamInput[]
}
type LiveClientConfigParamInput = { data_channel: LiveDataChannelConfigParamInput }
type LiveSpeechWakePolicyParamInput = { type: 'speech'; vad_threshold?: number }
type IdleTimeoutSInput = number
type LiveMediaSessionCreateParamsInput = {
  model: ModelIdsLiveInput
  safety_identifier?: SafetyIdentifierInput
  instructions?: InstructionsInput
  audio?: LiveMediaSessionAudioParamInput
  delegation?: DelegationInput
  triggers?: TriggersInput
  store?: StoreInput
  input?: InputInput
  client?: LiveClientConfigParamInput
  wake_policy?: LiveSpeechWakePolicyParamInput
  idle_timeout_s?: IdleTimeoutSInput
}
type LiveWebRTCTransportInput = { type: 'webrtc'; sdp: string }
type LiveSIPTrunkAuthInput = { type: 'digest'; username: string; password: string }
type LiveSIPTrunkInput = {
  provider_url: string
  auth: LiveSIPTrunkAuthInput
  caller_number: string
}
type LiveSIPTransportInput = { type: 'sip'; destination: string; trunk: LiveSIPTrunkInput }
type LiveSessionCreateRequestInput = {
  session: LiveMediaSessionCreateParamsInput
  transport: LiveWebRTCTransportInput | LiveSIPTransportInput
}
type Session = { id: string }
type LiveWebRTCTransport = { type: 'webrtc'; sdp: string }
type LiveSessionCreateResponse = {
  session: Session
  transport: LiveWebRTCTransport | { type: 'sip' }
}
type LiveCallAcceptSessionInput = {
  model: ModelIdsLiveInput
  safety_identifier?: SafetyIdentifierInput
  instructions?: InstructionsInput
  audio?: LiveMediaSessionAudioParamInput
  delegation?: DelegationInput
  triggers?: TriggersInput
  store?: StoreInput
  input?: InputInput
  type: 'live'
}
type LiveCallAcceptRequestInput = { session: LiveCallAcceptSessionInput }
type PropertiesStoreInput = boolean
type LiveResponsesDelegationSettingsUpdateInputParamInput = {
  model?: string
  instructions?: string | null
  max_output_tokens?: number | null
  service_tier?: LiveResponsesServiceTierInput | null
  reasoning?: LiveDelegationReasoningInputParamInput | null
  text?: LiveDelegationTextInputParamInput | null
  tools?: (
    | LiveFunctionToolInputParamInput
    | LiveWebSearchToolInputParamInput
    | LiveFileSearchToolInputParamInput
    | LiveCodeInterpreterToolInputParamInput
    | LiveHostedShellToolInputParamInput
    | LiveImageGenerationToolInputParamInput
    | LiveMCPToolInputParamInput
    | LiveCustomToolInputParamInput
    | LiveNamespaceToolInputParamInput
    | LiveToolSearchToolInputParamInput
    | LiveProgrammaticToolInputParamInput
    | LiveComputerToolInputParamInput
    | LiveApplyPatchToolInputParamInput
  )[]
  tool_choice?:
    | LiveToolChoiceEnumInput
    | (
        | LiveFunctionToolChoiceParamInput
        | LiveMCPToolChoiceParamInput
        | LiveSpecificFileSearchParamInput
        | LiveSpecificWebSearchParamInput
        | LiveSpecificWebSearchPreviewParamInput
        | LiveSpecificImageGenParamInput
        | LiveSpecificComputerParamInput
        | LiveSpecificCodeInterpreterParamInput
        | LiveSpecificProgrammaticToolCallingParamInput
        | LiveSpecificFunctionShellParamInput
        | LiveSpecificCustomToolParamInput
        | LiveSpecificApplyPatchParamInput
      )
    | LiveAllowedToolsChoiceParamInput
  parallel_tool_calls?: boolean | null
}
type LiveResponsesDelegationUpdateParamInput = {
  acknowledgement_delay_ms?: number
  type: 'responses'
  responses?: LiveResponsesDelegationSettingsUpdateInputParamInput
}
type LiveMediaSessionForkParamsInput = {
  store?: PropertiesStoreInput
  delegation?: LiveResponsesDelegationUpdateParamInput
  client?: LiveClientConfigParamInput
}
type LiveForkRequestInput = {
  session?: LiveMediaSessionForkParamsInput
  transport: LiveWebRTCTransportInput
}
type LiveCreateResponse = { session: { id: string }; transport: LiveWebRTCTransport }
type TargetUriInput = string
type LiveCallReferRequestInput = { target_uri: TargetUriInput }
type LiveCallRejectRequestInput = { status_code: number }
type Model = {
  id: string
  created: number
  object: 'model'
  owned_by: string
  shutdown_date?: (string | null) | undefined
}
type ListModelsResponse = { object: 'list'; data: Model[] }
type PermissionErrorResponse = { error: Error | string }
type DeleteModelResponse = { id: string; deleted: boolean; object: string }
type CreateModerationRequestInput = {
  input:
    | string
    | string[]
    | ({ type: 'image_url'; image_url: { url: string } } | { type: 'text'; text: string })[]
  model?:
    | string
    | 'omni-moderation-latest'
    | 'omni-moderation-2024-09-26'
    | 'omni-moderation-csam-latest'
    | 'text-moderation-latest'
    | 'text-moderation-stable'
}
type CreateModerationResponse = {
  id: string
  model: string
  results: {
    flagged: boolean
    categories: {
      hate: boolean
      'hate/threatening': boolean
      harassment: boolean
      'harassment/threatening': boolean
      illicit: boolean | null
      'illicit/violent': boolean | null
      'self-harm': boolean
      'self-harm/intent': boolean
      'self-harm/instructions': boolean
      sexual: boolean
      'sexual/minors': boolean
      violence: boolean
      'violence/graphic': boolean
    }
    category_scores: {
      hate: number
      'hate/threatening': number
      harassment: number
      'harassment/threatening': number
      illicit: number
      'illicit/violent': number
      'self-harm': number
      'self-harm/intent': number
      'self-harm/instructions': number
      sexual: number
      'sexual/minors': number
      violence: number
      'violence/graphic': number
    }
    category_applied_input_types: {
      hate: 'text'[]
      'hate/threatening': 'text'[]
      harassment: 'text'[]
      'harassment/threatening': 'text'[]
      illicit: 'text'[]
      'illicit/violent': 'text'[]
      'self-harm': ('text' | 'image')[]
      'self-harm/intent': ('text' | 'image')[]
      'self-harm/instructions': ('text' | 'image')[]
      sexual: ('text' | 'image')[]
      'sexual/minors': 'text'[]
      violence: ('text' | 'image')[]
      'violence/graphic': ('text' | 'image')[]
    }
  }[]
}
type CSAMCategoryFlags = { 'likely-csam': boolean; 'likely-csam/gen-ai': boolean }
type CSAMCategoryScores = { 'likely-csam': number; 'likely-csam/gen-ai': number }
type CSAMCategoryAppliedInputTypes = { 'likely-csam': 'image'[]; 'likely-csam/gen-ai': 'image'[] }
type CSAMModerationResult = {
  flagged: boolean
  categories: CSAMCategoryFlags
  category_scores: CSAMCategoryScores
  category_applied_input_types: CSAMCategoryAppliedInputTypes
}
type CreateCSAMModerationResponse = {
  id: string
  model: 'omni-moderation-csam-latest'
  results: CSAMModerationResult[]
}
type AdminApiKey = {
  object: 'organization.admin_api_key'
  id: string
  name?: (string | null) | undefined
  redacted_value: string
  created_at: number
  expires_at: number | null
  last_used_at?: (number | null) | undefined
  owner: {
    type?: string | undefined
    object?: string | undefined
    id?: string | undefined
    name?: string | undefined
    created_at?: number | undefined
    role?: string | undefined
  }
}
type ApiKeyList = {
  object: 'list'
  data: AdminApiKey[]
  has_more: boolean
  first_id?: (string | null) | undefined
  last_id?: (string | null) | undefined
}
type AdminApiKeyCreateResponse = AdminApiKey & { value: string }
type AuditLogEventType =
  | 'api_key.created'
  | 'api_key.updated'
  | 'api_key.deleted'
  | 'certificate.created'
  | 'certificate.updated'
  | 'certificate.deleted'
  | 'certificates.activated'
  | 'certificates.deactivated'
  | 'checkpoint.permission.created'
  | 'checkpoint.permission.deleted'
  | 'external_key.registered'
  | 'external_key.removed'
  | 'external_storage.registered'
  | 'external_storage.removed'
  | 'group.created'
  | 'group.updated'
  | 'group.deleted'
  | 'invite.sent'
  | 'invite.accepted'
  | 'invite.deleted'
  | 'ip_allowlist.created'
  | 'ip_allowlist.updated'
  | 'ip_allowlist.deleted'
  | 'ip_allowlist.config.activated'
  | 'ip_allowlist.config.deactivated'
  | 'login.succeeded'
  | 'login.failed'
  | 'logout.succeeded'
  | 'logout.failed'
  | 'organization.updated'
  | 'project.created'
  | 'project.updated'
  | 'project.archived'
  | 'project.deleted'
  | 'rate_limit.updated'
  | 'rate_limit.deleted'
  | 'resource.deleted'
  | 'tunnel.created'
  | 'tunnel.updated'
  | 'tunnel.deleted'
  | 'workload_identity_provider.created'
  | 'workload_identity_provider.updated'
  | 'workload_identity_provider.deleted'
  | 'workload_identity_provider_mapping.created'
  | 'workload_identity_provider_mapping.updated'
  | 'workload_identity_provider_mapping.deleted'
  | 'role.created'
  | 'role.updated'
  | 'role.deleted'
  | 'role.assignment.created'
  | 'role.assignment.deleted'
  | 'role.bound_to_resource'
  | 'role.unbound_from_resource'
  | 'scim.enabled'
  | 'scim.disabled'
  | 'service_account.created'
  | 'service_account.updated'
  | 'service_account.deleted'
  | 'user.added'
  | 'user.updated'
  | 'user.deleted'
  | 'tenant.metadata.updated'
  | 'tenant.microsoft_entra_mapping.upserted'
  | 'tenant.microsoft_entra_mapping.deleted'
  | 'tenant.workload_identity.provider.created'
  | 'tenant.workload_identity.provider.updated'
  | 'tenant.workload_identity.provider.archived'
  | 'tenant.workload_identity.mapping.created'
  | 'tenant.workload_identity.mapping.updated'
  | 'tenant.workload_identity.mapping.archived'
  | 'tenant.workload_identity.binding.created'
  | 'tenant.workload_identity.principal.provisioned'
  | 'tenant.workload_identity.access_token.issued'
  | 'tenant.admin_api_key.created'
  | 'tenant.admin_api_key.updated'
  | 'tenant.admin_api_key.deleted'
  | 'tenant.project_api_key.created'
  | 'tenant.trusted_access.business_verification.started'
  | 'tenant.trusted_access.application.submitted'
  | 'tenant.chatgpt_access_token.revoked'
  | 'tenant.migration.completed'
  | 'tenant.sso.migrated'
  | 'tenant.domains.migrated'
  | 'tenant.sso_connection.created'
  | 'tenant.sso_connection.updated'
  | 'tenant.sso_connection.deleted'
  | 'tenant.sso_connection.setup.started'
  | 'tenant.policy.created'
  | 'tenant.policy.updated'
  | 'tenant.policy.deleted'
  | 'tenant.policy.attached'
  | 'tenant.policy.detached'
  | 'tenant.principal_authentication_policy.resolved'
  | 'tenant.scim.setup.started'
  | 'tenant.scim.deletion.requested'
  | 'tenant.scim.directory.created'
  | 'tenant.product_access_policy.updated'
  | 'tenant.resource_share_grant.created'
  | 'tenant.resource_share_grant.updated'
  | 'tenant.resource_share_grant.accepted'
  | 'tenant.resource_share_grant.declined'
  | 'tenant.resource_share_grant.revoked'
  | 'tenant.resource_share_grant.deleted'
  | 'tenant.service_account.updated'
  | 'tenant.service_account.deleted'
  | 'tenant.service_account.token.revoked'
  | 'tenant.billing.overage_limit.updated'
  | 'tenant.billing.alerts.updated'
  | 'tenant.billing.info.updated'
  | 'tenant.usage_limit.workspace.updated'
  | 'tenant.usage_limit.group.updated'
  | 'tenant.usage_limit.user.updated'
  | 'tenant.usage_limit.increase_request.updated'
  | 'tenant.usage_limit.increase_request.resolved'
  | 'tenant.group.created'
  | 'tenant.group.updated'
  | 'tenant.group.deleted'
  | 'tenant.group.member.added'
  | 'tenant.group.member.removed'
  | 'tenant.migration_rollout.status.updated'
  | 'tenant.migration_rollout.tier.updated'
  | 'tenant.role.metadata.updated'
  | 'tenant.custom_role.created'
  | 'tenant.custom_role.updated'
  | 'tenant.custom_role.deleted'
  | 'tenant.role_assignment.created'
  | 'tenant.role_assignment.deleted'
  | 'tenant.resource_role_assignment.created'
  | 'tenant.resource_role_assignment.deleted'
  | 'tenant.resource_access.updated'
  | 'tenant.resource_access.deleted'
  | 'tenant.ads_account.onboarding.redemption'
  | 'tenant.session_policy.created'
  | 'tenant.session_policy.updated'
  | 'tenant.session_policy.deleted'
  | 'tenant.session_revocation.started'
  | 'tenant.third_party_app_policy.updated'
  | 'tenant.user.added'
  | 'tenant.user.updated'
  | 'tenant.user.removed'
  | 'tenant.user.looked_up'
  | 'tenant.user.invited'
  | 'tenant.membership.revoked'
  | 'tenant.api_organization_invite.upserted'
  | 'tenant.api_organization_invite.deleted'
  | 'tenant.chatgpt_workspace_invite.upserted'
  | 'tenant.membership.accepted'
  | 'tenant.membership.declined'
  | 'tenant.workspace_invite_email_settings.updated'
type AuditLogActorUser = { id?: string | undefined; email?: string | undefined }
type AuditLogActorSession = {
  user?: AuditLogActorUser | undefined
  ip_address?: string | undefined
}
type AuditLogActorServiceAccount = { id?: string | undefined }
type AuditLogActorApiKey = {
  id?: string | undefined
  type?: 'user' | 'service_account' | undefined
  user?: AuditLogActorUser | undefined
  service_account?: AuditLogActorServiceAccount | undefined
}
type AuditLogActor = {
  type?: 'session' | 'api_key' | undefined
  session?: AuditLogActorSession | undefined
  api_key?: AuditLogActorApiKey | undefined
}
type AwsExternalStorageProviderResponse = {
  type: 'aws'
  account_id: string
  region: string
  bucket: string
  role_arn: string
  external_id: string
}
type AzureExternalStorageProviderResponse = {
  type: 'azure'
  tenant_id: string
  subscription_id: string
  resource_group: string
  account_name: string
  container: string
  region: string
}
type GcpExternalStorageProviderResponse = {
  type: 'gcp'
  bucket: string
  workload_identity_project_number: string
  workload_identity_pool_id: string
  workload_identity_provider_id: string
  region: string
  audience: string
}
type OciExternalStorageProviderResponse = {
  type: 'oci'
  tenancy_ocid: string
  region: string
  bucket: string
}
type Provider =
  | AwsExternalStorageProviderResponse
  | AzureExternalStorageProviderResponse
  | GcpExternalStorageProviderResponse
  | OciExternalStorageProviderResponse
type AuditLog = {
  id: string
  type: AuditLogEventType
  effective_at: number
  project?: { id?: string | undefined; name?: string | undefined } | undefined
  actor?: (AuditLogActor | null) | undefined
  'api_key.created'?:
    | { id?: string | undefined; data?: { scopes?: string[] | undefined } | undefined }
    | undefined
  'api_key.updated'?:
    | {
        id?: string | undefined
        changes_requested?:
          | { scopes?: string[] | undefined; expires_in_seconds?: number | undefined }
          | undefined
      }
    | undefined
  'api_key.deleted'?: { id?: string | undefined } | undefined
  'checkpoint.permission.created'?:
    | {
        id?: string | undefined
        data?:
          | { project_id?: string | undefined; fine_tuned_model_checkpoint?: string | undefined }
          | undefined
      }
    | undefined
  'checkpoint.permission.deleted'?: { id?: string | undefined } | undefined
  'external_key.registered'?:
    | { id?: string | undefined; data?: { [key: string]: unknown } | undefined }
    | undefined
  'external_key.removed'?: { id?: string | undefined } | undefined
  'external_storage.registered'?:
    | {
        id?: string | undefined
        data?: { provider?: Provider | undefined; geography?: string | undefined } | undefined
      }
    | undefined
  'external_storage.removed'?: { id?: string | undefined } | undefined
  'group.created'?:
    | { id?: string | undefined; data?: { group_name?: string | undefined } | undefined }
    | undefined
  'group.updated'?:
    | {
        id?: string | undefined
        changes_requested?: { group_name?: string | undefined } | undefined
      }
    | undefined
  'group.deleted'?: { id?: string | undefined } | undefined
  'scim.enabled'?: { id?: string | undefined } | undefined
  'scim.disabled'?: { id?: string | undefined } | undefined
  'invite.sent'?:
    | {
        id?: string | undefined
        data?: { email?: string | undefined; role?: string | undefined } | undefined
      }
    | undefined
  'invite.accepted'?: { id?: string | undefined } | undefined
  'invite.deleted'?: { id?: string | undefined } | undefined
  'ip_allowlist.created'?:
    | { id?: string | undefined; name?: string | undefined; allowed_ips?: string[] | undefined }
    | undefined
  'ip_allowlist.updated'?:
    | { id?: string | undefined; allowed_ips?: string[] | undefined }
    | undefined
  'ip_allowlist.deleted'?:
    | { id?: string | undefined; name?: string | undefined; allowed_ips?: string[] | undefined }
    | undefined
  'ip_allowlist.config.activated'?:
    | { configs?: { id?: string | undefined; name?: string | undefined }[] | undefined }
    | undefined
  'ip_allowlist.config.deactivated'?:
    | { configs?: { id?: string | undefined; name?: string | undefined }[] | undefined }
    | undefined
  'login.succeeded'?: { [key: string]: unknown } | undefined
  'login.failed'?:
    | { error_code?: string | undefined; error_message?: string | undefined }
    | undefined
  'logout.succeeded'?: { [key: string]: unknown } | undefined
  'logout.failed'?:
    | { error_code?: string | undefined; error_message?: string | undefined }
    | undefined
  'organization.updated'?:
    | {
        id?: string | undefined
        changes_requested?:
          | {
              title?: string | undefined
              description?: string | undefined
              name?: string | undefined
              threads_ui_visibility?: string | undefined
              usage_dashboard_visibility?: string | undefined
              api_call_logging?: string | undefined
              api_call_logging_project_ids?: string | undefined
            }
          | undefined
      }
    | undefined
  'project.created'?:
    | {
        id?: string | undefined
        data?: { name?: string | undefined; title?: string | undefined } | undefined
      }
    | undefined
  'project.updated'?:
    | { id?: string | undefined; changes_requested?: { title?: string | undefined } | undefined }
    | undefined
  'project.archived'?: { id?: string | undefined } | undefined
  'project.deleted'?: { id?: string | undefined } | undefined
  'rate_limit.updated'?:
    | {
        id?: string | undefined
        changes_requested?:
          | {
              max_requests_per_1_minute?: number | undefined
              max_tokens_per_1_minute?: number | undefined
              max_images_per_1_minute?: number | undefined
              max_audio_megabytes_per_1_minute?: number | undefined
              max_requests_per_1_day?: number | undefined
              batch_1_day_max_input_tokens?: number | undefined
            }
          | undefined
      }
    | undefined
  'rate_limit.deleted'?: { id?: string | undefined } | undefined
  'role.created'?:
    | {
        id?: string | undefined
        role_name?: string | undefined
        permissions?: string[] | undefined
        resource_type?: string | undefined
        resource_id?: string | undefined
      }
    | undefined
  'role.updated'?:
    | {
        id?: string | undefined
        changes_requested?:
          | {
              role_name?: string | undefined
              resource_id?: string | undefined
              resource_type?: string | undefined
              permissions_added?: string[] | undefined
              permissions_removed?: string[] | undefined
              description?: string | undefined
              metadata?: { [key: string]: unknown } | undefined
            }
          | undefined
      }
    | undefined
  'role.deleted'?: { id?: string | undefined } | undefined
  'role.assignment.created'?:
    | {
        id?: string | undefined
        principal_id?: string | undefined
        principal_type?: string | undefined
        resource_id?: string | undefined
        resource_type?: string | undefined
      }
    | undefined
  'role.assignment.deleted'?:
    | {
        id?: string | undefined
        principal_id?: string | undefined
        principal_type?: string | undefined
        resource_id?: string | undefined
        resource_type?: string | undefined
      }
    | undefined
  'role.bound_to_resource'?:
    | {
        id?: string | undefined
        role_id?: string | undefined
        resource_id?: string | undefined
        resource_type?: string | undefined
        permissions?: string[] | undefined
        workspace_id?: string | undefined
        connector_id?: string | undefined
        connector_name?: string | undefined
        enabled?: boolean | undefined
        source?:
          | 'role_toggle'
          | 'role_connector_update'
          | 'role_delete'
          | 'workspace_permissions'
          | 'connector_publish'
          | undefined
      }
    | undefined
  'role.unbound_from_resource'?:
    | {
        id?: string | undefined
        role_id?: string | undefined
        resource_id?: string | undefined
        resource_type?: string | undefined
        permissions?: string[] | undefined
        workspace_id?: string | undefined
        connector_id?: string | undefined
        connector_name?: string | undefined
        enabled?: boolean | undefined
        source?:
          | 'role_toggle'
          | 'role_connector_update'
          | 'role_delete'
          | 'workspace_permissions'
          | 'connector_publish'
          | undefined
      }
    | undefined
  'service_account.created'?:
    | { id?: string | undefined; data?: { role?: string | undefined } | undefined }
    | undefined
  'service_account.updated'?:
    | { id?: string | undefined; changes_requested?: { role?: string | undefined } | undefined }
    | undefined
  'service_account.deleted'?: { id?: string | undefined } | undefined
  'workload_identity_provider.created'?:
    | { id?: string | undefined; data?: { [key: string]: unknown } | undefined }
    | undefined
  'workload_identity_provider.updated'?:
    | { id?: string | undefined; changes_requested?: { [key: string]: unknown } | undefined }
    | undefined
  'workload_identity_provider.deleted'?:
    | { id?: string | undefined; name?: string | undefined }
    | undefined
  'workload_identity_provider_mapping.created'?:
    | {
        id?: string | undefined
        identity_provider_id?: string | undefined
        data?: { [key: string]: unknown } | undefined
      }
    | undefined
  'workload_identity_provider_mapping.updated'?:
    | {
        id?: string | undefined
        identity_provider_id?: string | undefined
        changes_requested?: { [key: string]: unknown } | undefined
      }
    | undefined
  'workload_identity_provider_mapping.deleted'?:
    | {
        id?: string | undefined
        identity_provider_id?: string | undefined
        project_id?: string | undefined
        service_account_id?: string | undefined
      }
    | undefined
  'user.added'?:
    | { id?: string | undefined; data?: { role?: string | undefined } | undefined }
    | undefined
  'user.updated'?:
    | { id?: string | undefined; changes_requested?: { role?: string | undefined } | undefined }
    | undefined
  'user.deleted'?: { id?: string | undefined } | undefined
  'certificate.created'?: { id?: string | undefined; name?: string | undefined } | undefined
  'certificate.updated'?: { id?: string | undefined; name?: string | undefined } | undefined
  'certificate.deleted'?:
    | { id?: string | undefined; name?: string | undefined; certificate?: string | undefined }
    | undefined
  'certificates.activated'?:
    | { certificates?: { id?: string | undefined; name?: string | undefined }[] | undefined }
    | undefined
  'certificates.deactivated'?:
    | { certificates?: { id?: string | undefined; name?: string | undefined }[] | undefined }
    | undefined
}
type ListAuditLogsResponse = {
  object: 'list'
  data: AuditLog[]
  first_id?: (string | null) | undefined
  last_id?: (string | null) | undefined
  has_more: boolean
}
type OrganizationCertificate = {
  object: 'organization.certificate'
  id: string
  name: string | null
  created_at: number
  certificate_details: { valid_at?: number | undefined; expires_at?: number | undefined }
  active: boolean
}
type ListCertificatesResponse = {
  data: OrganizationCertificate[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
  object: 'list'
}
type UploadCertificateRequestInput = { name?: string; certificate: string }
type Certificate = {
  object: 'certificate' | 'organization.certificate' | 'organization.project.certificate'
  id: string
  name: string | null
  created_at: number
  certificate_details: {
    valid_at?: number | undefined
    expires_at?: number | undefined
    content?: string | undefined
  }
  active?: boolean | undefined
}
type ToggleCertificatesRequestInput = { certificate_ids: string[] }
type OrganizationCertificateActivationResponse = {
  object: 'organization.certificate.activation'
  data: OrganizationCertificate[]
}
type OrganizationCertificateDeactivationResponse = {
  object: 'organization.certificate.deactivation'
  data: OrganizationCertificate[]
}
type ModifyCertificateRequestInput = { name?: string }
type DeleteCertificateResponse = { object: 'certificate.deleted'; id: string }
type UsageCompletionsResult = {
  api_source?: ('agents_api' | 'unlabeled' | null) | undefined
  object: 'organization.usage.completions.result'
  input_tokens: number
  input_cached_tokens?: number | undefined
  input_cache_write_tokens?: number | undefined
  input_cache_write_30m_tokens?: (number | null) | undefined
  input_cache_write_12h_tokens?: number | undefined
  input_uncached_tokens?: number | undefined
  output_tokens: number
  input_text_tokens?: number | undefined
  output_text_tokens?: number | undefined
  input_cached_text_tokens?: number | undefined
  input_audio_tokens?: number | undefined
  input_cached_audio_tokens?: number | undefined
  output_audio_tokens?: number | undefined
  input_image_tokens?: number | undefined
  input_cached_image_tokens?: number | undefined
  output_image_tokens?: number | undefined
  num_model_requests: number
  project_id?: (string | null) | undefined
  user_id?: (string | null) | undefined
  api_key_id?: (string | null) | undefined
  model?: (string | null) | undefined
  batch?: (boolean | null) | undefined
  service_tier?: (string | null) | undefined
}
type UsageEmbeddingsResult = {
  object: 'organization.usage.embeddings.result'
  input_tokens: number
  num_model_requests: number
  project_id?: (string | null) | undefined
  user_id?: (string | null) | undefined
  api_key_id?: (string | null) | undefined
  model?: (string | null) | undefined
}
type UsageModerationsResult = {
  object: 'organization.usage.moderations.result'
  input_tokens: number
  num_model_requests: number
  project_id?: (string | null) | undefined
  user_id?: (string | null) | undefined
  api_key_id?: (string | null) | undefined
  model?: (string | null) | undefined
}
type UsageImagesResult = {
  object: 'organization.usage.images.result'
  images: number
  num_model_requests: number
  source?: (string | null) | undefined
  size?: (string | null) | undefined
  project_id?: (string | null) | undefined
  user_id?: (string | null) | undefined
  api_key_id?: (string | null) | undefined
  model?: (string | null) | undefined
}
type UsageAudioSpeechesResult = {
  object: 'organization.usage.audio_speeches.result'
  characters: number
  num_model_requests: number
  project_id?: (string | null) | undefined
  user_id?: (string | null) | undefined
  api_key_id?: (string | null) | undefined
  model?: (string | null) | undefined
}
type UsageAudioTranscriptionsResult = {
  object: 'organization.usage.audio_transcriptions.result'
  seconds: bigint
  num_model_requests: number
  project_id?: (string | null) | undefined
  user_id?: (string | null) | undefined
  api_key_id?: (string | null) | undefined
  model?: (string | null) | undefined
}
type UsageVectorStoresResult = {
  object: 'organization.usage.vector_stores.result'
  usage_bytes: number
  project_id?: (string | null) | undefined
}
type UsageCodeInterpreterSessionsResult = {
  object: 'organization.usage.code_interpreter_sessions.result'
  num_sessions: number
  project_id?: (string | null) | undefined
}
type UsageFileSearchCallsResult = {
  object: 'organization.usage.file_searches.result'
  num_requests: number
  project_id?: (string | null) | undefined
  user_id?: (string | null) | undefined
  api_key_id?: (string | null) | undefined
  vector_store_id?: (string | null) | undefined
}
type UsageWebSearchCallsResult = {
  api_source?: ('agents_api' | 'unlabeled' | null) | undefined
  object: 'organization.usage.web_searches.result'
  num_model_requests: number
  num_requests: number
  project_id?: (string | null) | undefined
  user_id?: (string | null) | undefined
  api_key_id?: (string | null) | undefined
  model?: (string | null) | undefined
  context_level?: (string | null) | undefined
}
type CostsResult = {
  api_source?: ('agents_api' | 'unlabeled' | null) | undefined
  object: 'organization.costs.result'
  amount?: { value?: number | undefined; currency?: string | undefined } | undefined
  line_item?: (string | null) | undefined
  project_id?: (string | null) | undefined
  user_id?: (string | null) | undefined
  api_key_id?: (string | null) | undefined
  quantity?: (number | null) | undefined
  quantity_unit?:
    | (
        | string
        | 'tokens'
        | '1000_tokens'
        | 'duration_seconds'
        | 'duration_minutes'
        | 'duration_hours'
        | 'gibibyte_hours'
        | 'images'
        | 'characters'
        | null
      )
    | undefined
}
type UsageTimeBucket = {
  object: 'bucket'
  start_time: number
  end_time: number
  results: (
    | UsageCompletionsResult
    | UsageEmbeddingsResult
    | UsageModerationsResult
    | UsageImagesResult
    | UsageAudioSpeechesResult
    | UsageAudioTranscriptionsResult
    | UsageVectorStoresResult
    | UsageCodeInterpreterSessionsResult
    | UsageFileSearchCallsResult
    | UsageWebSearchCallsResult
    | CostsResult
  )[]
}
type UsageResponse = {
  object: 'page'
  data: UsageTimeBucket[]
  has_more: boolean
  next_page: string | null
}
type OrganizationDataRetention = {
  object: 'organization.data_retention'
  type:
    | 'zero_data_retention'
    | 'modified_abuse_monitoring'
    | 'enhanced_zero_data_retention'
    | 'enhanced_modified_abuse_monitoring'
}
type UpdateOrganizationDataRetentionBodyInput = {
  retention_type:
    | 'zero_data_retention'
    | 'modified_abuse_monitoring'
    | 'enhanced_zero_data_retention'
    | 'enhanced_modified_abuse_monitoring'
}
type GroupResponse = {
  id: string
  name: string
  created_at: number
  is_scim_managed: boolean
  group_type: 'group' | 'tenant_group'
}
type GroupListResource = {
  object: 'list'
  data: GroupResponse[]
  has_more: boolean
  next: string | null
}
type CreateGroupBodyInput = { name: string }
type UpdateGroupBodyInput = { name: string }
type GroupResourceWithSuccess = {
  id: string
  name: string
  created_at: number
  is_scim_managed: boolean
}
type GroupDeletedResource = { object: 'group.deleted'; id: string; deleted: boolean }
type AssignedRoleDetails = {
  id: string
  name: string
  permissions: string[]
  resource_type: string
  predefined_role: boolean
  description: string | null
  created_at: number | null
  updated_at: number | null
  created_by: string | null
  created_by_user_obj: { [key: string]: unknown } | null
  metadata: { [key: string]: unknown } | null
  assignment_sources: { principal_id: string; principal_type: string }[] | null
}
type RoleListResource = {
  object: 'list'
  data: AssignedRoleDetails[]
  has_more: boolean
  next: string | null
}
type PublicAssignOrganizationGroupRoleBodyInput = { role_id: string }
type Group = {
  object: 'group'
  id: string
  name: string
  created_at: number
  scim_managed: boolean
}
type Role = {
  object: 'role'
  id: string
  name: string
  description: string | null
  permissions: string[]
  resource_type: string
  predefined_role: boolean
}
type GroupRoleAssignment = { object: 'group.role'; group: Group; role: Role }
type DeletedRoleAssignmentResource = { object: string; deleted: boolean }
type GroupUser = { id: string; name: string; email: string | null }
type UserListResource = {
  object: 'list'
  data: GroupUser[]
  has_more: boolean
  next: string | null
}
type CreateGroupUserBodyInput = { user_id: string }
type GroupUserAssignment = { object: 'group.user'; user_id: string; group_id: string }
type GroupMemberUser = {
  id: string
  name: string
  email: string | null
  picture: string | null
  is_service_account: boolean | null
  user_type: 'user' | 'tenant_user'
}
type GroupUserDeletedResource = { object: 'group.user.deleted'; deleted: boolean }
type Invite = {
  object: 'organization.invite'
  id: string
  email: string
  role: 'owner' | 'reader'
  status: 'accepted' | 'expired' | 'pending'
  created_at: number
  expires_at?: (number | null) | undefined
  accepted_at?: (number | null) | undefined
  projects: { id: string; role: 'member' | 'owner' }[]
}
type InviteListResponse = {
  object: 'list'
  data: Invite[]
  first_id?: (string | null) | undefined
  last_id?: (string | null) | undefined
  has_more: boolean
}
type InviteRequestInput = {
  email: string
  role: 'reader' | 'owner'
  projects?: { id: string; role: 'member' | 'owner' }[]
}
type InviteDeleteResponse = { object: 'organization.invite.deleted'; id: string; deleted: boolean }
type PublicProjectResidency =
  | 'GLOBAL'
  | 'US_STORAGE_PROCESSING'
  | 'EU_STORAGE_PROCESSING'
  | 'JP_STORAGE'
  | 'JP_STORAGE_PROCESSING'
  | 'KR_STORAGE'
  | 'CA_STORAGE'
  | 'SG_STORAGE'
  | 'IN_STORAGE'
  | 'IN_STORAGE_PROCESSING'
  | 'AU_STORAGE'
  | 'AU_STORAGE_PROCESSING'
  | 'GB_STORAGE'
  | 'AE_STORAGE'
  | 'AE_STORAGE_PROCESSING'
type Project = {
  id: string
  object: 'organization.project'
  name?: (string | null) | undefined
  created_at: number
  archived_at?: (number | null) | undefined
  status?: (string | null) | undefined
  external_key_id?: (string | null) | undefined
  residency?: PublicProjectResidency | undefined
}
type ProjectListResponse = {
  object: 'list'
  data: Project[]
  first_id?: (string | null) | undefined
  last_id?: (string | null) | undefined
  has_more: boolean
}
type PublicProjectResidencyInput =
  | 'GLOBAL'
  | 'US_STORAGE_PROCESSING'
  | 'EU_STORAGE_PROCESSING'
  | 'JP_STORAGE'
  | 'JP_STORAGE_PROCESSING'
  | 'KR_STORAGE'
  | 'CA_STORAGE'
  | 'SG_STORAGE'
  | 'IN_STORAGE'
  | 'IN_STORAGE_PROCESSING'
  | 'AU_STORAGE'
  | 'AU_STORAGE_PROCESSING'
  | 'GB_STORAGE'
  | 'AE_STORAGE'
  | 'AE_STORAGE_PROCESSING'
type ProjectCreateRequestInput = {
  name: string
  geography?: string | null
  residency?: PublicProjectResidencyInput | null
  external_key_id?: string | null
}
type ProjectUpdateRequestInput = {
  name?: string | null
  external_key_id?: string | null
  geography?: string | null
}
type ProjectApiKeyOwnerUser = {
  id: string
  email: string
  name: string
  created_at: number
  role: string
}
type ProjectApiKeyOwnerServiceAccount = {
  id: string
  name: string
  created_at: number
  role: string
}
type ProjectApiKey = {
  object: 'organization.project.api_key'
  redacted_value: string
  name: string
  created_at: number
  expires_at?: (number | null) | undefined
  last_used_at: number | null
  id: string
  owner_project_access: 'active' | 'inactive'
  owner: {
    type?: 'user' | 'service_account' | undefined
    user?: ProjectApiKeyOwnerUser | undefined
    service_account?: ProjectApiKeyOwnerServiceAccount | undefined
  }
}
type ProjectApiKeyListResponse = {
  object: 'list'
  data: ProjectApiKey[]
  first_id?: (string | null) | undefined
  last_id?: (string | null) | undefined
  has_more: boolean
}
type ProjectApiKeyDeleteResponse = {
  object: 'organization.project.api_key.deleted'
  id: string
  deleted: boolean
}
type UpdateProjectApiKeyBodyInput = unknown | unknown
type OrganizationProjectCertificate = {
  object: 'organization.project.certificate'
  id: string
  name: string | null
  created_at: number
  certificate_details: { valid_at?: number | undefined; expires_at?: number | undefined }
  active: boolean
}
type ListProjectCertificatesResponse = {
  data: OrganizationProjectCertificate[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
  object: 'list'
}
type OrganizationProjectCertificateActivationResponse = {
  object: 'organization.project.certificate.activation'
  data: OrganizationProjectCertificate[]
}
type OrganizationProjectCertificateDeactivationResponse = {
  object: 'organization.project.certificate.deactivation'
  data: OrganizationProjectCertificate[]
}
type ProjectDataRetention = {
  object: 'project.data_retention'
  type:
    | 'organization_default'
    | 'none'
    | 'zero_data_retention'
    | 'modified_abuse_monitoring'
    | 'enhanced_zero_data_retention'
    | 'enhanced_modified_abuse_monitoring'
}
type UpdateProjectDataRetentionBodyInput = {
  retention_type:
    | 'organization_default'
    | 'none'
    | 'zero_data_retention'
    | 'modified_abuse_monitoring'
    | 'enhanced_zero_data_retention'
    | 'enhanced_modified_abuse_monitoring'
}
type ProjectGroup = {
  object: 'project.group'
  project_id: string
  group_id: string
  group_name: string
  group_type: 'group' | 'tenant_group'
  created_at: number
}
type ProjectGroupListResource = {
  object: 'list'
  data: ProjectGroup[]
  has_more: boolean
  next: string | null
}
type InviteProjectGroupBodyInput = { group_id: string; role: string }
type ProjectGroupDeletedResource = { object: 'project.group.deleted'; deleted: boolean }
type HostedToolPermission = { enabled: boolean }
type ProjectHostedToolPermissions = {
  file_search: HostedToolPermission
  web_search: HostedToolPermission
  image_generation: HostedToolPermission
  mcp: HostedToolPermission
  code_interpreter: HostedToolPermission
}
type HostedToolPermissionUpdateInput = { enabled: boolean }
type ProjectHostedToolPermissionsUpdateRequestInput = {
  file_search?: HostedToolPermissionUpdateInput | null
  web_search?: HostedToolPermissionUpdateInput | null
  image_generation?: HostedToolPermissionUpdateInput | null
  mcp?: HostedToolPermissionUpdateInput | null
  code_interpreter?: HostedToolPermissionUpdateInput | null
}
type ProjectModelPermissions = {
  object: 'project.model_permissions'
  mode: 'allow_list' | 'deny_list'
  model_ids: string[]
}
type ProjectModelPermissionsUpdateRequestInput = {
  mode: 'allow_list' | 'deny_list'
  model_ids: string[]
}
type ProjectModelPermissionsDeleteResponse = {
  object: 'project.model_permissions.deleted'
  deleted: boolean
}
type ProjectRateLimit = {
  object: 'project.rate_limit'
  id: string
  model: string
  max_requests_per_1_minute: number
  max_tokens_per_1_minute: number
  max_images_per_1_minute?: number | undefined
  max_audio_megabytes_per_1_minute?: number | undefined
  max_requests_per_1_day?: number | undefined
  batch_1_day_max_input_tokens?: number | undefined
}
type ProjectRateLimitListResponse = {
  object: 'list'
  data: ProjectRateLimit[]
  first_id?: (string | null) | undefined
  last_id?: (string | null) | undefined
  has_more: boolean
}
type ProjectRateLimitUpdateRequestInput = {
  max_requests_per_1_minute?: number
  max_tokens_per_1_minute?: number
  max_images_per_1_minute?: number
  max_audio_megabytes_per_1_minute?: number
  max_requests_per_1_day?: number
  batch_1_day_max_input_tokens?: number
}
type ProjectServiceAccount = {
  object: 'organization.project.service_account'
  id: string
  name: string
  role: 'owner' | 'member' | 'none'
  created_at: number
}
type ProjectServiceAccountListResponse = {
  object: 'list'
  data: ProjectServiceAccount[]
  first_id?: (string | null) | undefined
  last_id?: (string | null) | undefined
  has_more: boolean
}
type ProjectServiceAccountCreateRequestInput = {
  name: string
  create_service_account_only?: boolean | null
  expires_in_seconds?: number | null
}
type ProjectServiceAccountApiKey = {
  object: 'organization.project.service_account.api_key'
  value: string
  name: string
  created_at: number
  expires_at?: (number | null) | undefined
  id: string
}
type ProjectServiceAccountCreateResponse = {
  object: 'organization.project.service_account'
  id: string
  name: string
  role: 'member' | 'none'
  created_at: number
  api_key: ProjectServiceAccountApiKey | null
}
type UpdateProjectServiceAccountBodyInput = { name?: string; role?: 'member' | 'owner' }
type ProjectServiceAccountDeleteResponse = {
  object: 'organization.project.service_account.deleted'
  id: string
  deleted: boolean
}
type SpendAlertNotificationChannel = {
  type: 'email'
  recipients: string[]
  subject_prefix?: (string | null) | undefined
}
type ProjectSpendAlert = {
  id: string
  object: 'project.spend_alert'
  threshold_amount: number
  currency: 'USD'
  interval: 'month'
  notification_channel: SpendAlertNotificationChannel
}
type ProjectSpendAlertListResource = {
  object: 'list'
  data: ProjectSpendAlert[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
}
type SpendAlertNotificationChannelInput = {
  type: 'email'
  recipients: string[]
  subject_prefix?: string | null
}
type CreateSpendAlertBodyInput = {
  threshold_amount: number
  currency: 'USD'
  interval: 'month'
  notification_channel: SpendAlertNotificationChannelInput
}
type ProjectSpendAlertDeletedResource = {
  id: string
  object: 'project.spend_alert.deleted'
  deleted: boolean
}
type ProjectUser = {
  object: 'organization.project.user'
  id: string
  name?: (string | null) | undefined
  email?: (string | null) | undefined
  role: string
  added_at: number
}
type ProjectUserListResponse = {
  object: string
  data: ProjectUser[]
  first_id?: (string | null) | undefined
  last_id?: (string | null) | undefined
  has_more: boolean
}
type ProjectUserCreateRequestInput = {
  user_id?: string | null
  email?: string | null
  role: string
}
type ProjectUserUpdateRequestInput = { role?: string | null }
type ProjectUserDeleteResponse = {
  object: 'organization.project.user.deleted'
  id: string
  deleted: boolean
}
type PublicRoleListResource = {
  object: 'list'
  data: Role[]
  has_more: boolean
  next: string | null
}
type PublicCreateOrganizationRoleBodyInput = {
  role_name: string
  permissions: string[]
  description?: string | null
}
type PublicUpdateOrganizationRoleBodyInput = {
  permissions?: string[] | null
  description?: string | null
  role_name?: string | null
}
type RoleDeletedResource = { object: 'role.deleted'; id: string; deleted: boolean }
type OrganizationSpendAlert = {
  id: string
  object: 'organization.spend_alert'
  threshold_amount: number
  currency: 'USD'
  interval: 'month'
  notification_channel: SpendAlertNotificationChannel
}
type OrganizationSpendAlertListResource = {
  object: 'list'
  data: OrganizationSpendAlert[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
}
type OrganizationSpendAlertDeletedResource = {
  id: string
  object: 'organization.spend_alert.deleted'
  deleted: boolean
}
type User = {
  object: 'organization.user'
  id: string
  name?: (string | null) | undefined
  email?: (string | null) | undefined
  role?: (string | null) | undefined
  added_at: number
  is_default?: boolean | undefined
  created?: number | undefined
  user?:
    | {
        object: 'user'
        id: string
        email?: (string | null) | undefined
        name?: (string | null) | undefined
        picture?: (string | null) | undefined
        enabled?: (boolean | null) | undefined
        banned?: (boolean | null) | undefined
        banned_at?: (number | null) | undefined
      }
    | undefined
  is_service_account?: boolean | undefined
  is_scale_tier_authorized_purchaser?: (boolean | null) | undefined
  is_scim_managed?: boolean | undefined
  api_key_last_used_at?: (number | null) | undefined
  technical_level?: (string | null) | undefined
  developer_persona?: (string | null) | undefined
  projects?:
    | ({
        object: 'list'
        data: {
          id?: (string | null) | undefined
          name?: (string | null) | undefined
          role?: (string | null) | undefined
        }[]
      } | null)
    | undefined
}
type UserListResponse = {
  object: 'list'
  data: User[]
  first_id?: (string | null) | undefined
  last_id?: (string | null) | undefined
  has_more: boolean
}
type UserRoleUpdateRequestInput = {
  role?: string | null
  role_id?: string | null
  technical_level?: string | null
  developer_persona?: string | null
}
type UserDeleteResponse = { object: 'organization.user.deleted'; id: string; deleted: boolean }
type UserRoleAssignment = { object: 'user.role'; user: User; role: Role }
type RealtimeAudioFormatsInput =
  | { type?: 'audio/pcm'; rate?: 24000 }
  | { type?: 'audio/pcmu' }
  | { type?: 'audio/pcma' }
type AudioTranscriptionInput = {
  model?:
    | string
    | 'whisper-1'
    | 'gpt-transcribe'
    | 'gpt-live-transcribe'
    | 'gpt-4o-mini-transcribe'
    | 'gpt-4o-mini-transcribe-2025-12-15'
    | 'gpt-4o-transcribe'
    | 'gpt-4o-transcribe-diarize'
    | 'gpt-realtime-whisper'
  language?: string
  languages?: string[]
  keywords?: string[]
  prompt?: string
  delay?: 'minimal' | 'low' | 'medium' | 'high' | 'xhigh'
}
type RealtimeTurnDetectionInput =
  | (
      | {
          type: 'server_vad'
          threshold?: number
          prefix_padding_ms?: number
          silence_duration_ms?: number
          create_response?: boolean
          interrupt_response?: boolean
          idle_timeout_ms?: number | null
        }
      | {
          type: 'semantic_vad'
          eagerness?: 'low' | 'medium' | 'high' | 'auto'
          create_response?: boolean
          interrupt_response?: boolean
        }
    )
  | null
type RealtimeFunctionToolInput = {
  type?: 'function'
  name?: string
  description?: string
  parameters?: { [key: string]: unknown }
}
type ToolChoiceOptionsInput = 'none' | 'auto' | 'required'
type ToolChoiceFunctionInput = { type: 'function'; name: string }
type ToolChoiceMCPInput = { type: 'mcp'; server_label: string; name?: string | null }
type RealtimeReasoningEffortInput = 'minimal' | 'low' | 'medium' | 'high' | 'xhigh'
type RealtimeReasoningInput = { effort?: RealtimeReasoningEffortInput }
type RealtimeTruncationInput =
  | 'auto'
  | 'disabled'
  | {
      type: 'retention_ratio'
      retention_ratio: number
      token_limits?: { post_instructions?: number }
    }
type ResponsePromptVariablesInput = {
  [key: string]: string | InputTextContentInput | InputImageContentInput | InputFileContentInput
} | null
type PromptInput = {
  id: string
  version?: string | null
  variables?: ResponsePromptVariablesInput
} | null
type RealtimeSessionCreateRequestGAInput = {
  type: 'realtime'
  output_modalities?: ('text' | 'audio')[]
  model?:
    | string
    | 'gpt-realtime'
    | 'gpt-realtime-1.5'
    | 'gpt-realtime-2'
    | 'gpt-realtime-2.1'
    | 'gpt-realtime-2.1-mini'
    | 'gpt-realtime-2025-08-28'
    | 'gpt-4o-realtime-preview'
    | 'gpt-4o-realtime-preview-2024-10-01'
    | 'gpt-4o-realtime-preview-2024-12-17'
    | 'gpt-4o-realtime-preview-2025-06-03'
    | 'gpt-4o-mini-realtime-preview'
    | 'gpt-4o-mini-realtime-preview-2024-12-17'
    | 'gpt-realtime-mini'
    | 'gpt-realtime-mini-2025-10-06'
    | 'gpt-realtime-mini-2025-12-15'
    | 'gpt-audio-1.5'
    | 'gpt-audio-mini'
    | 'gpt-audio-mini-2025-10-06'
    | 'gpt-audio-mini-2025-12-15'
  instructions?: string
  audio?: {
    input?: {
      format?: RealtimeAudioFormatsInput
      transcription?: AudioTranscriptionInput
      noise_reduction?: any | null
      turn_detection?: RealtimeTurnDetectionInput
    }
    output?: {
      format?: RealtimeAudioFormatsInput
      voice?: VoiceIdsOrCustomVoiceInput
      speed?: number
    }
  }
  include?: 'item.input_audio_transcription.logprobs'[]
  tracing?:
    | (
        | 'auto'
        | { workflow_name?: string; group_id?: string; metadata?: { [key: string]: unknown } }
        | null
      )
    | null
  tools?: (RealtimeFunctionToolInput | MCPToolInput)[]
  tool_choice?: ToolChoiceOptionsInput | ToolChoiceFunctionInput | ToolChoiceMCPInput
  parallel_tool_calls?: boolean
  reasoning?: RealtimeReasoningInput
  max_output_tokens?: number | 'inf'
  truncation?: RealtimeTruncationInput
  prompt?: PromptInput
}
type RealtimeCallCreateRequestInput = { sdp: string; session?: RealtimeSessionCreateRequestGAInput }
type RealtimeCallReferRequestInput = { target_uri: string }
type RealtimeCallRejectRequestInput = { status_code?: number }
type RealtimeTranscriptionSessionCreateRequestGAInput = {
  type: 'transcription'
  audio?: {
    input?: {
      format?: RealtimeAudioFormatsInput
      transcription?: AudioTranscriptionInput
      noise_reduction?: any | null
      turn_detection?: RealtimeTurnDetectionInput
    }
  }
  include?: 'item.input_audio_transcription.logprobs'[]
}
type RealtimeCreateClientSecretRequestInput = {
  expires_after?: { anchor?: 'created_at'; seconds?: bigint }
  session?: RealtimeSessionCreateRequestGAInput | RealtimeTranscriptionSessionCreateRequestGAInput
}
type RealtimeAudioFormats =
  | { type?: 'audio/pcm' | undefined; rate?: 24000 | undefined }
  | { type?: 'audio/pcmu' | undefined }
  | { type?: 'audio/pcma' | undefined }
type AudioTranscriptionResponse = {
  model?:
    | (
        | string
        | 'whisper-1'
        | 'gpt-transcribe'
        | 'gpt-live-transcribe'
        | 'gpt-4o-mini-transcribe'
        | 'gpt-4o-mini-transcribe-2025-12-15'
        | 'gpt-4o-transcribe'
        | 'gpt-4o-transcribe-diarize'
        | 'gpt-realtime-whisper'
      )
    | undefined
  language?: (string | null) | undefined
  languages?: string[] | undefined
  keywords?: string[] | undefined
  prompt?: string | undefined
}
type NoiseReductionType = 'near_field' | 'far_field'
type RealtimeNoiseReductionStrength = number
type RealtimeTurnDetection =
  | (
      | {
          type: 'server_vad'
          threshold?: number | undefined
          prefix_padding_ms?: number | undefined
          silence_duration_ms?: number | undefined
          create_response?: boolean | undefined
          interrupt_response?: boolean | undefined
          idle_timeout_ms?: (number | null) | undefined
        }
      | {
          type: 'semantic_vad'
          eagerness?: 'low' | 'medium' | 'high' | 'auto' | undefined
          create_response?: boolean | undefined
          interrupt_response?: boolean | undefined
        }
    )
  | null
type VoiceIdsShared =
  | string
  | 'alloy'
  | 'ash'
  | 'ballad'
  | 'coral'
  | 'echo'
  | 'sage'
  | 'shimmer'
  | 'verse'
  | 'marin'
  | 'cedar'
type RealtimeFunctionTool = {
  type?: 'function' | undefined
  name?: string | undefined
  description?: string | undefined
  parameters?: { [key: string]: unknown } | undefined
}
type ToolChoiceOptions = 'none' | 'auto' | 'required'
type ToolChoiceFunction = { type: 'function'; name: string }
type ToolChoiceMCP = { type: 'mcp'; server_label: string; name?: (string | null) | undefined }
type RealtimeReasoningEffort = 'minimal' | 'low' | 'medium' | 'high' | 'xhigh'
type RealtimeReasoning = { effort?: RealtimeReasoningEffort | undefined }
type RealtimeTruncation =
  | 'auto'
  | 'disabled'
  | {
      type: 'retention_ratio'
      retention_ratio: number
      token_limits?: { post_instructions?: number | undefined } | undefined
    }
type ResponsePromptVariables = {
  [key: string]: string | InputTextContent | InputImageContent | InputFileContent
} | null
type Prompt = {
  id: string
  version?: (string | null) | undefined
  variables?: ResponsePromptVariables | undefined
} | null
type RealtimeSessionCreateResponseGA = {
  type: 'realtime'
  id: string
  object: 'realtime.session'
  expires_at?: number | undefined
  output_modalities?: ('text' | 'audio')[] | undefined
  model?:
    | (
        | string
        | 'gpt-realtime'
        | 'gpt-realtime-1.5'
        | 'gpt-realtime-2'
        | 'gpt-realtime-2.1'
        | 'gpt-realtime-2.1-mini'
        | 'gpt-realtime-2025-08-28'
        | 'gpt-4o-realtime-preview'
        | 'gpt-4o-realtime-preview-2024-10-01'
        | 'gpt-4o-realtime-preview-2024-12-17'
        | 'gpt-4o-realtime-preview-2025-06-03'
        | 'gpt-4o-mini-realtime-preview'
        | 'gpt-4o-mini-realtime-preview-2024-12-17'
        | 'gpt-realtime-mini'
        | 'gpt-realtime-mini-2025-10-06'
        | 'gpt-realtime-mini-2025-12-15'
        | 'gpt-audio-1.5'
        | 'gpt-audio-mini'
        | 'gpt-audio-mini-2025-10-06'
        | 'gpt-audio-mini-2025-12-15'
      )
    | undefined
  instructions?: string | undefined
  audio?:
    | {
        input?:
          | {
              format?: RealtimeAudioFormats | undefined
              transcription?: (AudioTranscriptionResponse | null) | undefined
              noise_reduction?:
                | ({
                    type?: NoiseReductionType | undefined
                    strength?: RealtimeNoiseReductionStrength | undefined
                  } | null)
                | undefined
              turn_detection?: RealtimeTurnDetection | undefined
            }
          | undefined
        output?:
          | {
              format?: RealtimeAudioFormats | undefined
              voice?: VoiceIdsShared | undefined
              speed?: number | undefined
            }
          | undefined
      }
    | undefined
  include?: ('item.input_audio_transcription.logprobs'[] | null) | undefined
  tracing?:
    | (
        | (
            | (
                | 'auto'
                | {
                    workflow_name?: string | undefined
                    group_id?: string | undefined
                    metadata?: { [key: string]: unknown } | undefined
                  }
              )
            | null
          )
        | null
      )
    | undefined
  tools?: (RealtimeFunctionTool | MCPTool)[] | undefined
  tool_choice?: (ToolChoiceOptions | ToolChoiceFunction | ToolChoiceMCP) | undefined
  reasoning?: RealtimeReasoning | undefined
  max_output_tokens?: (number | 'inf') | undefined
  truncation?: RealtimeTruncation | undefined
  prompt?: Prompt | undefined
}
type RealtimeTranscriptionSessionCreateResponseGA = {
  type: 'transcription'
  id: string
  object: string
  expires_at?: number | undefined
  include?: ('item.input_audio_transcription.logprobs'[] | null) | undefined
  audio?:
    | {
        input?:
          | {
              format?: RealtimeAudioFormats | undefined
              transcription?: (AudioTranscriptionResponse | null) | undefined
              noise_reduction?:
                | ({
                    type?: NoiseReductionType | undefined
                    strength?: RealtimeNoiseReductionStrength | undefined
                  } | null)
                | undefined
              turn_detection?:
                | ({
                    type?: string | undefined
                    threshold?: number | undefined
                    prefix_padding_ms?: number | undefined
                    silence_duration_ms?: number | undefined
                  } | null)
                | undefined
            }
          | undefined
      }
    | undefined
}
type RealtimeCreateClientSecretResponse = {
  value: string
  expires_at: number
  session: RealtimeSessionCreateResponseGA | RealtimeTranscriptionSessionCreateResponseGA
}
type RealtimeSessionCreateRequestInput = {
  client_secret: { value: string; expires_at: number }
  modalities?: ('text' | 'audio')[]
  instructions?: string
  voice?: VoiceIdsOrCustomVoiceInput
  input_audio_format?: string
  output_audio_format?: string
  input_audio_transcription?: { model?: string }
  speed?: number
  tracing?:
    | 'auto'
    | { workflow_name?: string; group_id?: string; metadata?: { [key: string]: unknown } }
  turn_detection?: {
    type?: string
    threshold?: number
    prefix_padding_ms?: number
    silence_duration_ms?: number
  }
  tools?: {
    type?: 'function'
    name?: string
    description?: string
    parameters?: { [key: string]: unknown }
  }[]
  tool_choice?: string
  temperature?: number
  max_response_output_tokens?: number | 'inf'
  truncation?: RealtimeTruncationInput
  prompt?: PromptInput
}
type RealtimeSessionCreateResponse = {
  id?: string | undefined
  object?: string | undefined
  expires_at?: number | undefined
  include?: 'item.input_audio_transcription.logprobs'[] | undefined
  model?: string | undefined
  output_modalities?: unknown | undefined
  instructions?: string | undefined
  audio?:
    | {
        input?:
          | {
              format?: RealtimeAudioFormats | undefined
              transcription?: AudioTranscriptionResponse | undefined
              noise_reduction?: ({ type?: NoiseReductionType | undefined } | null) | undefined
              turn_detection?:
                | ({
                    type?: string | undefined
                    threshold?: number | undefined
                    prefix_padding_ms?: number | undefined
                    silence_duration_ms?: number | undefined
                  } | null)
                | undefined
            }
          | undefined
        output?:
          | {
              format?: RealtimeAudioFormats | undefined
              voice?: VoiceIdsShared | undefined
              speed?: number | undefined
            }
          | undefined
      }
    | undefined
  tracing?:
    | (
        | 'auto'
        | {
            workflow_name?: string | undefined
            group_id?: string | undefined
            metadata?: { [key: string]: unknown } | undefined
          }
      )
    | undefined
  turn_detection?:
    | ({
        type?: string | undefined
        threshold?: number | undefined
        prefix_padding_ms?: number | undefined
        silence_duration_ms?: number | undefined
      } | null)
    | undefined
  tools?: RealtimeFunctionTool[] | undefined
  tool_choice?: string | undefined
  max_output_tokens?: (number | 'inf') | undefined
}
type RealtimeTranscriptionSessionCreateRequestInput = {
  turn_detection?: {
    type?: 'server_vad'
    threshold?: number
    prefix_padding_ms?: number
    silence_duration_ms?: number
  }
  input_audio_noise_reduction?: any | null
  input_audio_format?: 'pcm16' | 'g711_ulaw' | 'g711_alaw'
  input_audio_transcription?: AudioTranscriptionInput
  include?: 'item.input_audio_transcription.logprobs'[]
}
type RealtimeTranscriptionSessionCreateResponse = {
  client_secret: { value: string; expires_at: number }
  modalities?: unknown | undefined
  input_audio_format?: string | undefined
  input_audio_transcription?: AudioTranscriptionResponse | undefined
  turn_detection?:
    | {
        type?: string | undefined
        threshold?: number | undefined
        prefix_padding_ms?: number | undefined
        silence_duration_ms?: number | undefined
      }
    | undefined
}
type NoiseReductionTypeInput = 'near_field' | 'far_field'
type RealtimeNoiseReductionStrengthInput = number
type RealtimeTranslationSessionCreateRequestInput = {
  model: string
  audio?: {
    input?: {
      transcription?: { model: string } | null
      noise_reduction?: {
        type: NoiseReductionTypeInput
        strength?: RealtimeNoiseReductionStrengthInput
      } | null
    }
    output?: { language?: string }
  }
}
type RealtimeTranslationClientSecretCreateRequestInput = {
  expires_after?: { anchor?: 'created_at'; seconds?: bigint }
  session: RealtimeTranslationSessionCreateRequestInput
}
type RealtimeTranslationSession = {
  id: string
  type: 'translation'
  expires_at: number
  model: string
  audio: {
    input?:
      | {
          transcription?: ({ model: string } | null) | undefined
          noise_reduction?:
            | ({
                type: NoiseReductionType
                strength?: RealtimeNoiseReductionStrength | undefined
              } | null)
            | undefined
        }
      | undefined
    output?: { language?: string | undefined } | undefined
  }
}
type RealtimeTranslationClientSecretCreateResponse = {
  value: string
  expires_at: number
  session: RealtimeTranslationSession
}
type ModelIdsResponsesInput =
  | ModelIdsSharedInput
  | 'o1-pro'
  | 'o1-pro-2025-03-19'
  | 'o3-pro'
  | 'o3-pro-2025-06-10'
  | 'o3-deep-research'
  | 'o3-deep-research-2025-06-26'
  | 'o4-mini-deep-research'
  | 'o4-mini-deep-research-2025-06-26'
  | 'computer-use-preview'
  | 'computer-use-preview-2025-03-11'
  | 'gpt-5.5-pro'
  | 'gpt-5.5-pro-2026-04-23'
  | 'gpt-5-codex'
  | 'gpt-5-pro'
  | 'gpt-5-pro-2025-10-06'
  | 'gpt-5.1-codex-max'
  | 'gpt-daybreak-blue-latest'
  | 'gpt-daybreak-red-latest'
  | 'gpt-5.6-cyber'
  | 'gpt-6-cyber'
  | 'gpt-rosalind-research'
  | 'gpt-6-rosalind'
  | 'gpt-6.2-astra-law'
  | 'gpt-6-astra-healthcare'
  | 'gpt-6.1-sol-healthcare'
  | 'gpt-6.2-astra-healthcare'
  | 'gpt-6.2-sol-healthcare'
type ResponseTextParamInput = {
  format?: TextResponseFormatConfigurationInput
  verbosity?: VerbosityInput
}
type ToolsArrayInput = ToolInput[]
type ToolChoiceAllowedInput = {
  type: 'allowed_tools'
  mode: 'auto' | 'required'
  tools: { [key: string]: unknown }[]
}
type ToolChoiceTypesInput = {
  type:
    | 'file_search'
    | 'web_search_preview'
    | 'computer'
    | 'computer_use_preview'
    | 'computer_use'
    | 'web_search_preview_2025_03_11'
    | 'image_generation'
    | 'code_interpreter'
}
type ToolChoiceCustomInput = { type: 'custom'; name: string }
type SpecificProgrammaticToolCallingParamInput = { type: 'programmatic_tool_calling' }
type SpecificApplyPatchParamInput = { type: 'apply_patch' }
type SpecificFunctionShellParamInput = { type: 'shell' }
type ToolChoiceParamInput =
  | ToolChoiceOptionsInput
  | ToolChoiceAllowedInput
  | ToolChoiceTypesInput
  | ToolChoiceFunctionInput
  | ToolChoiceMCPInput
  | ToolChoiceCustomInput
  | SpecificProgrammaticToolCallingParamInput
  | SpecificApplyPatchParamInput
  | SpecificFunctionShellParamInput
type ResponsePropertiesInput = {
  previous_response_id?: string | null
  model?: ModelIdsResponsesInput
  background?: boolean | null
  max_tool_calls?: number | null
  text?: ResponseTextParamInput
  tools?: ToolsArrayInput
  tool_choice?: ToolChoiceParamInput
  prompt?: PromptInput
}
type CyberAccessProgramEnumInput = 'standard' | 'daybreak_blue' | 'daybreak_red'
type AccessProgramsParamInput = { cyber?: CyberAccessProgramEnumInput }
type ImageContextCompressionInput = 'auto' | 'enabled' | 'disabled'
type ImageOptionsParamInput = { context_compression?: ImageContextCompressionInput }
type ResponsePromptCacheOptionsParamInput = {
  ttl?: '30m' | '12h'
  mode?: PromptCacheModeEnumInput
  prewarm?: boolean
  comparison_response_id?: string | null
}
type ServiceTierResponsesInput =
  | 'auto'
  | 'default'
  | 'flex'
  | 'scale'
  | 'priority'
  | 'fast'
  | 'ultrafast'
  | null
type ReasoningModeEnumInput = string | 'standard' | 'pro'
type ReasoningInput = {
  mode?: ReasoningModeEnumInput
  effort?: ReasoningEffortInput
  summary?: 'auto' | 'concise' | 'detailed' | null
  context?: 'auto' | 'current_turn' | 'all_turns' | null
  generate_summary?: 'auto' | 'concise' | 'detailed' | null
}
type InputParamInput = string | InputItemInput[]
type IncludeEnumInput =
  | 'file_search_call.results'
  | 'web_search_call.results'
  | 'web_search_call.action.sources'
  | 'message.input_image.image_url'
  | 'computer_call_output.output.image_url'
  | 'code_interpreter_call.outputs'
  | 'reasoning.encrypted_content'
  | 'message.output_text.logprobs'
type BackgroundCompletionWindowEnumInput = 'soonest' | '2h' | '8h'
type BackgroundOptionsParamInput = {
  completion_window?: BackgroundCompletionWindowEnumInput
  continuation_id?: string
}
type ResponseStreamOptionsInput = { include_obfuscation?: boolean } | null
type ConversationParam_2Input = { id: string }
type ConversationParamInput = (string | ConversationParam_2Input) | null
type ContextManagementParamInput = { type: string; compact_threshold?: number | null }
type CreateResponseInput = CreateModelResponsePropertiesInput &
  ResponsePropertiesInput & {
    access_programs?: AccessProgramsParamInput
    image?: ImageOptionsParamInput
    prompt_cache_options?: ResponsePromptCacheOptionsParamInput
    service_tier?: ServiceTierResponsesInput
    truncation?: 'auto' | 'disabled' | null
    reasoning?: ReasoningInput | null
    input?: InputParamInput
    include?: IncludeEnumInput[] | null
    parallel_tool_calls?: boolean | null
    store?: boolean | null
    instructions?: string | null
    moderation?: ModerationParamInput | null
    background_options?: BackgroundOptionsParamInput
    stream?: boolean | null
    stream_options?: ResponseStreamOptionsInput
    conversation?: ConversationParamInput | null
    context_management?: ContextManagementParamInput[] | null
    max_output_tokens?: number | null
  }
type ModelResponseProperties = {
  metadata?: Metadata | undefined
  top_logprobs?: (number | null) | undefined
  temperature?: (number | null) | undefined
  top_p?: (number | null) | undefined
  user?: (string | null) | undefined
  safety_identifier?: (string | null) | undefined
  prompt_cache_key?: (string | null) | undefined
  prompt_cache_retention?: ('in_memory' | '24h' | null) | undefined
}
type ModelIdsShared =
  | string
  | 'gpt-6-astra'
  | 'gpt-6.2-astra'
  | 'gpt-6.1-sol'
  | 'gpt-6.2-sol'
  | 'gpt-6.1-terra'
  | 'gpt-6-sol'
  | 'gpt-6-luna'
  | 'gpt-5.6-sol'
  | 'gpt-5.6-terra'
  | 'gpt-5.6-luna'
  | 'gpt-5.5'
  | 'gpt-5.5-2026-04-23'
  | 'gpt-5.4'
  | 'gpt-5.4-mini'
  | 'gpt-5.4-nano'
  | 'gpt-5.4-mini-2026-03-17'
  | 'gpt-5.4-nano-2026-03-17'
  | 'gpt-5.3-chat-latest'
  | 'gpt-5.2'
  | 'gpt-5.2-2025-12-11'
  | 'gpt-5.2-chat-latest'
  | 'gpt-5.2-pro'
  | 'gpt-5.2-pro-2025-12-11'
  | 'gpt-5.1'
  | 'gpt-5.1-2025-11-13'
  | 'gpt-5.1-codex'
  | 'gpt-5.1-mini'
  | 'gpt-5.1-chat-latest'
  | 'gpt-5'
  | 'gpt-5-mini'
  | 'gpt-5-nano'
  | 'gpt-5-2025-08-07'
  | 'gpt-5-mini-2025-08-07'
  | 'gpt-5-nano-2025-08-07'
  | 'gpt-5-chat-latest'
  | 'gpt-4.1'
  | 'gpt-4.1-mini'
  | 'gpt-4.1-nano'
  | 'gpt-4.1-2025-04-14'
  | 'gpt-4.1-mini-2025-04-14'
  | 'gpt-4.1-nano-2025-04-14'
  | 'o4-mini'
  | 'o4-mini-2025-04-16'
  | 'o3'
  | 'o3-2025-04-16'
  | 'o3-mini'
  | 'o3-mini-2025-01-31'
  | 'o1'
  | 'o1-2024-12-17'
  | 'o1-preview'
  | 'o1-preview-2024-09-12'
  | 'o1-mini'
  | 'o1-mini-2024-09-12'
  | 'gpt-4o'
  | 'gpt-4o-2024-11-20'
  | 'gpt-4o-2024-08-06'
  | 'gpt-4o-2024-05-13'
  | 'gpt-audio-mini'
  | 'gpt-audio-mini-2025-12-15'
  | 'gpt-4o-audio-preview'
  | 'gpt-4o-audio-preview-2024-10-01'
  | 'gpt-4o-audio-preview-2024-12-17'
  | 'gpt-4o-audio-preview-2025-06-03'
  | 'gpt-4o-mini-audio-preview'
  | 'gpt-4o-mini-audio-preview-2024-12-17'
  | 'gpt-4o-search-preview'
  | 'gpt-4o-mini-search-preview'
  | 'gpt-4o-search-preview-2025-03-11'
  | 'gpt-4o-mini-search-preview-2025-03-11'
  | 'chatgpt-4o-latest'
  | 'codex-mini-latest'
  | 'gpt-4o-mini'
  | 'gpt-4o-mini-2024-07-18'
  | 'gpt-4-turbo'
  | 'gpt-4-turbo-2024-04-09'
  | 'gpt-4-0125-preview'
  | 'gpt-4-turbo-preview'
  | 'gpt-4-1106-preview'
  | 'gpt-4-vision-preview'
  | 'gpt-4'
  | 'gpt-4-0314'
  | 'gpt-4-0613'
  | 'gpt-4-32k'
  | 'gpt-4-32k-0314'
  | 'gpt-4-32k-0613'
  | 'gpt-3.5-turbo'
  | 'gpt-3.5-turbo-16k'
  | 'gpt-3.5-turbo-0301'
  | 'gpt-3.5-turbo-0613'
  | 'gpt-3.5-turbo-1106'
  | 'gpt-3.5-turbo-0125'
  | 'gpt-3.5-turbo-16k-0613'
type ModelIdsResponses =
  | ModelIdsShared
  | 'o1-pro'
  | 'o1-pro-2025-03-19'
  | 'o3-pro'
  | 'o3-pro-2025-06-10'
  | 'o3-deep-research'
  | 'o3-deep-research-2025-06-26'
  | 'o4-mini-deep-research'
  | 'o4-mini-deep-research-2025-06-26'
  | 'computer-use-preview'
  | 'computer-use-preview-2025-03-11'
  | 'gpt-5.5-pro'
  | 'gpt-5.5-pro-2026-04-23'
  | 'gpt-5-codex'
  | 'gpt-5-pro'
  | 'gpt-5-pro-2025-10-06'
  | 'gpt-5.1-codex-max'
  | 'gpt-daybreak-blue-latest'
  | 'gpt-daybreak-red-latest'
  | 'gpt-5.6-cyber'
  | 'gpt-6-cyber'
  | 'gpt-rosalind-research'
  | 'gpt-6-rosalind'
  | 'gpt-6.2-astra-law'
  | 'gpt-6-astra-healthcare'
  | 'gpt-6.1-sol-healthcare'
  | 'gpt-6.2-astra-healthcare'
  | 'gpt-6.2-sol-healthcare'
type Verbosity = 'low' | 'medium' | 'high' | null
type ResponseTextParam = {
  format?: TextResponseFormatConfiguration | undefined
  verbosity?: Verbosity | undefined
}
type ToolsArray = Tool[]
type ToolChoiceAllowed = {
  type: 'allowed_tools'
  mode: 'auto' | 'required'
  tools: { [key: string]: unknown }[]
}
type ToolChoiceTypes = {
  type:
    | 'file_search'
    | 'web_search_preview'
    | 'computer'
    | 'computer_use_preview'
    | 'computer_use'
    | 'web_search_preview_2025_03_11'
    | 'image_generation'
    | 'code_interpreter'
}
type ToolChoiceCustom = { type: 'custom'; name: string }
type SpecificProgrammaticToolCallingParam = { type: 'programmatic_tool_calling' }
type SpecificApplyPatchParam = { type: 'apply_patch' }
type SpecificFunctionShellParam = { type: 'shell' }
type ToolChoiceParam =
  | ToolChoiceOptions
  | ToolChoiceAllowed
  | ToolChoiceTypes
  | ToolChoiceFunction
  | ToolChoiceMCP
  | ToolChoiceCustom
  | SpecificProgrammaticToolCallingParam
  | SpecificApplyPatchParam
  | SpecificFunctionShellParam
type ResponseProperties = {
  previous_response_id?: (string | null) | undefined
  model?: ModelIdsResponses | undefined
  background?: (boolean | null) | undefined
  max_tool_calls?: (number | null) | undefined
  text?: ResponseTextParam | undefined
  tools?: ToolsArray | undefined
  tool_choice?: ToolChoiceParam | undefined
  prompt?: Prompt | undefined
}
type ResolvedImageContextCompressionEnum = 'enabled' | 'disabled'
type ResolvedImageOptions = { context_compression: ResolvedImageContextCompressionEnum }
type ServiceTierResponses =
  | 'auto'
  | 'default'
  | 'flex'
  | 'scale'
  | 'priority'
  | 'fast'
  | 'ultrafast'
  | null
type CyberAccessProgramEnum = 'standard' | 'daybreak_blue' | 'daybreak_red'
type AccessProgramsBody = { cyber: CyberAccessProgramEnum }
type ResponseErrorCode =
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
type ResponseError = {
  type?: (string | null) | undefined
  param?: (string | null) | undefined
  code: ResponseErrorCode
  message: string
  misalignment?: MisalignmentErrorDetailsResource | undefined
} | null
type InputRemovalReason =
  | 'organization_mismatch'
  | 'end_user_mismatch'
  | 'model_mismatch'
  | 'prefix_mismatch'
  | 'turn_boundary'
type ReasoningInputTransformation = {
  type: 'reasoning'
  id: string
  action: 'removed'
  reason: InputRemovalReason
}
type OutputMessageContent = OutputTextContent | RefusalContent
type OutputMessage = {
  id: string
  type: 'message'
  role: 'assistant'
  content: OutputMessageContent[]
  phase?: (MessagePhase | null) | undefined
  status: 'in_progress' | 'completed' | 'incomplete'
}
type CustomToolCallOutputResource = CustomToolCallOutput & {
  id: string
  status: FunctionCallOutputStatusEnum
  created_by?: string | undefined
}
type OutputItem =
  | OutputMessage
  | FileSearchToolCall
  | FunctionToolCall
  | FunctionToolCallOutputResource
  | WebSearchToolCall
  | ComputerToolCall
  | ComputerToolCallOutputResource
  | ReasoningItem
  | Program
  | ProgramOutput
  | ToolSearchCall
  | ToolSearchOutput
  | AdditionalTools
  | CompactionBody
  | ImageGenToolCall
  | CodeInterpreterToolCall
  | LocalShellToolCall
  | LocalShellToolCallOutput
  | FunctionShellCall
  | FunctionShellCallOutput
  | ApplyPatchToolCall
  | ApplyPatchToolCallOutput
  | MCPToolCall
  | MCPListTools
  | MCPApprovalRequest
  | MCPApprovalResponseResource
  | CustomToolCall
  | CustomToolCallOutputResource
type ReasoningModeEnum = string | 'standard' | 'pro'
type Reasoning = {
  mode?: ReasoningModeEnum | undefined
  effort?: ReasoningEffort | undefined
  summary?: ('auto' | 'concise' | 'detailed' | null) | undefined
  context?: ('auto' | 'current_turn' | 'all_turns' | null) | undefined
  generate_summary?: ('auto' | 'concise' | 'detailed' | null) | undefined
}
type InputMessage = {
  type?: 'message' | undefined
  role: 'user' | 'system' | 'developer'
  status?: 'in_progress' | 'completed' | 'incomplete' | undefined
  content: InputMessageContentList
}
type FunctionCallItemStatus = 'in_progress' | 'completed' | 'incomplete'
type ComputerCallOutputItemParam = {
  id?: (string | null) | undefined
  call_id: string
  type: 'computer_call_output'
  output: ComputerScreenshotImage
  acknowledged_safety_checks?: (ComputerCallSafetyCheckParam[] | null) | undefined
  status?: (FunctionCallItemStatus | null) | undefined
}
type PromptCacheBreakpointParam = { mode: 'explicit'; ttl?: '30m' | '12h' | undefined }
type InputTextContentParam = {
  type: 'input_text'
  text: string
  prompt_cache_breakpoint?: (PromptCacheBreakpointParam | null) | undefined
}
type DetailEnum = 'low' | 'high' | 'auto' | 'original'
type InputImageContentParamAutoParam = {
  type: 'input_image'
  image_url?: (string | null) | undefined
  file_id?: (string | null) | undefined
  detail?: (DetailEnum | null) | undefined
  prompt_cache_breakpoint?: (PromptCacheBreakpointParam | null) | undefined
}
type FileDetailEnum = 'auto' | 'low' | 'high'
type InputFileContentParam = {
  type: 'input_file'
  file_id?: (string | null) | undefined
  filename?: (string | null) | undefined
  file_data?: (string | null) | undefined
  file_url?: (string | null) | undefined
  detail?: FileDetailEnum | undefined
  prompt_cache_breakpoint?: (PromptCacheBreakpointParam | null) | undefined
}
type FunctionCallOutputItemParam = {
  id?: (string | null) | undefined
  call_id?: (string | null) | undefined
  type: 'function_call_output'
  output:
    | string
    | (InputTextContentParam | InputImageContentParamAutoParam | InputFileContentParam)[]
  name?: (string | null) | undefined
  namespace?: (string | null) | undefined
  caller?: (ToolCallCallerParam | null) | undefined
  status?: (FunctionCallItemStatus | null) | undefined
}
type ToolSearchCallItemParam = {
  id?: (string | null) | undefined
  call_id?: (string | null) | undefined
  type: 'tool_search_call'
  execution?: ToolSearchExecutionType | undefined
  arguments: EmptyModelParam
  status?: (FunctionCallItemStatus | null) | undefined
}
type ToolSearchOutputFunctionToolParam = {
  name: string
  description?: (string | null) | undefined
  parameters?: (EmptyModelParam | null) | undefined
  strict?: (boolean | null) | undefined
  type: 'function'
  async?: boolean | undefined
  output_schema?: ({ [key: string]: any } | null) | undefined
  defer_loading?: boolean | undefined
  allowed_callers?: (CallableToolAllowedCaller[] | null) | undefined
}
type ToolSearchOutputNamespaceToolParam = {
  type: 'namespace'
  name: string
  description: string
  tools: (ToolSearchOutputFunctionToolParam | CustomToolParam)[]
}
type ToolSearchOutputTool =
  | FunctionTool
  | FileSearchTool
  | ComputerTool
  | ComputerUsePreviewTool
  | WebSearchTool
  | MCPTool
  | CodeInterpreterTool
  | ProgrammaticToolCallingParam
  | ImageGenTool
  | LocalShellToolParam
  | FunctionShellToolParam
  | CustomToolParam
  | ToolSearchOutputNamespaceToolParam
  | ToolSearchToolParam
  | WebSearchPreviewTool
  | ApplyPatchToolParam
type ToolSearchOutputItemParam = {
  id?: (string | null) | undefined
  call_id?: (string | null) | undefined
  type: 'tool_search_output'
  execution?: ToolSearchExecutionType | undefined
  tools: ToolSearchOutputTool[]
  status?: (FunctionCallItemStatus | null) | undefined
}
type AdditionalToolsItemParam = {
  id?: (string | null) | undefined
  type: 'additional_tools'
  role: 'developer'
  tools: Tool[]
}
type ResponseConfigurationUpdateItemParam = {
  id?: (string | null) | undefined
  type: 'configuration_update'
  reasoning?: { effort?: ReasoningEffort | undefined } | undefined
  text?: { format: ResponseFormatText | TextResponseFormatJsonSchema } | undefined
}
type CompactionSummaryItemParam = {
  id?: (string | null) | undefined
  type: 'compaction'
  encrypted_content: string
}
type FunctionShellActionParam = {
  commands: string[]
  timeout_ms?: (number | null) | undefined
  max_output_length?: (number | null) | undefined
}
type FunctionShellCallItemStatus = 'in_progress' | 'completed' | 'incomplete'
type FunctionShellCallItemParam = {
  id?: (string | null) | undefined
  call_id: string
  caller?: (ToolCallCallerParam | null) | undefined
  type: 'shell_call'
  action: FunctionShellActionParam
  status?: (FunctionShellCallItemStatus | null) | undefined
  environment?: ((LocalEnvironmentParam | ContainerReferenceParam) | null) | undefined
}
type FunctionShellCallOutputTimeoutOutcomeParam = { type: 'timeout' }
type FunctionShellCallOutputExitOutcomeParam = { type: 'exit'; exit_code: number }
type FunctionShellCallOutputOutcomeParam =
  | FunctionShellCallOutputTimeoutOutcomeParam
  | FunctionShellCallOutputExitOutcomeParam
type FunctionShellCallOutputContentParam = {
  stdout: string
  stderr: string
  outcome: FunctionShellCallOutputOutcomeParam
}
type FunctionShellCallOutputItemParam = {
  id?: (string | null) | undefined
  call_id: string
  caller?: (ToolCallCallerParam | null) | undefined
  type: 'shell_call_output'
  output: FunctionShellCallOutputContentParam[]
  status?: (FunctionShellCallItemStatus | null) | undefined
  max_output_length?: (number | null) | undefined
}
type ApplyPatchCallStatusParam = 'in_progress' | 'completed'
type ApplyPatchCreateFileOperationParam = { type: 'create_file'; path: string; diff: string }
type ApplyPatchDeleteFileOperationParam = { type: 'delete_file'; path: string }
type ApplyPatchUpdateFileOperationParam = { type: 'update_file'; path: string; diff: string }
type ApplyPatchOperationParam =
  | ApplyPatchCreateFileOperationParam
  | ApplyPatchDeleteFileOperationParam
  | ApplyPatchUpdateFileOperationParam
type ApplyPatchToolCallItemParam = {
  type: 'apply_patch_call'
  id?: (string | null) | undefined
  call_id: string
  caller?: (ToolCallCallerParam | null) | undefined
  status: ApplyPatchCallStatusParam
  operation: ApplyPatchOperationParam
}
type ApplyPatchCallOutputStatusParam = 'completed' | 'failed'
type ApplyPatchToolCallOutputItemParam = {
  type: 'apply_patch_call_output'
  id?: (string | null) | undefined
  call_id: string
  caller?: (ToolCallCallerParam | null) | undefined
  status: ApplyPatchCallOutputStatusParam
  output?: (string | null) | undefined
}
type MCPApprovalResponse = {
  type: 'mcp_approval_response'
  id?: (string | null) | undefined
  approval_request_id: string
  approve: boolean
  reason?: (string | null) | undefined
}
type Item =
  | InputMessage
  | OutputMessage
  | FileSearchToolCall
  | ComputerToolCall
  | ComputerCallOutputItemParam
  | WebSearchToolCall
  | FunctionToolCall
  | FunctionCallOutputItemParam
  | ToolSearchCallItemParam
  | ToolSearchOutputItemParam
  | AdditionalToolsItemParam
  | ResponseConfigurationUpdateItemParam
  | ReasoningItem
  | CompactionSummaryItemParam
  | ImageGenToolCall
  | CodeInterpreterToolCall
  | LocalShellToolCall
  | LocalShellToolCallOutput
  | FunctionShellCallItemParam
  | FunctionShellCallOutputItemParam
  | ApplyPatchToolCallItemParam
  | ApplyPatchToolCallOutputItemParam
  | MCPListTools
  | MCPApprovalRequest
  | MCPApprovalResponse
  | MCPToolCall
  | CustomToolCallOutput
  | CustomToolCall
type CompactionTriggerItemParam = { id?: (string | null) | undefined; type: 'compaction_trigger' }
type ItemReferenceParam = { type?: ('item_reference' | null) | undefined; id: string }
type ProgramItemParam = {
  id: string
  type: 'program'
  call_id: string
  code: string
  fingerprint: string
}
type ProgramOutputItemStatus = 'completed' | 'incomplete'
type ProgramOutputItemParam = {
  id: string
  type: 'program_output'
  call_id: string
  result: string
  status: ProgramOutputItemStatus
}
type InputItem =
  | EasyInputMessage
  | Item
  | CompactionTriggerItemParam
  | ItemReferenceParam
  | ProgramItemParam
  | ProgramOutputItemParam
type CacheWriteTokensDetails = { ttl_30m_tokens: number; ttl_12h_tokens: number }
type ResponseUsage = {
  input_tokens: number
  input_tokens_details: {
    cached_tokens: number
    cache_write_tokens: number
    cache_write_tokens_details?: CacheWriteTokensDetails | undefined
  }
  output_tokens: number
  output_tokens_details: { reasoning_tokens: number }
  total_tokens: number
}
type CachedUsageDetails = { cached_text_tokens: number; cached_image_tokens: number }
type ImageGenToolUsage = {
  input_tokens: number
  total_tokens: number
  output_tokens: number
  output_tokens_details?: ImageGenOutputTokensDetails | undefined
  input_tokens_details: ImageGenInputUsageDetails
  cached_tokens?: number | undefined
  cached_tokens_details?: CachedUsageDetails | undefined
}
type WebSearchUsage = { num_requests: number }
type ResponseToolUsage = { image_gen: ImageGenToolUsage; web_search: WebSearchUsage }
type PromptCacheModeEnum = 'implicit' | 'explicit'
type PromptCacheOptions = {
  ttl: '30m' | '12h'
  mode: PromptCacheModeEnum
  comparison_response_id?: (string | null) | undefined
}
type CacheMissReasonTypeEnum =
  | 'model_changed'
  | 'prompt_cache_key_changed'
  | 'tools_changed'
  | 'text_format_changed'
  | 'reasoning_effort_changed'
  | 'verbosity_changed'
  | 'context_compacted'
  | 'input_changed'
  | 'service_tier_changed'
type PromptCacheMissDiagnosticsBody = {
  type: 'cache_miss'
  reason: CacheMissReasonTypeEnum
  cache_missed_tokens: number
  comparison_reusable_tokens?: number | undefined
}
type PromptCacheHitDiagnosticsBody = { type: 'cache_hit' }
type PromptCacheComparisonResponseNotFoundDiagnosticsBody = {
  type: 'comparison_response_not_found'
}
type PromptCacheUnavailableDiagnosticsBody = { type: 'unavailable' }
type PromptCacheDiagnostics =
  | PromptCacheMissDiagnosticsBody
  | PromptCacheHitDiagnosticsBody
  | PromptCacheComparisonResponseNotFoundDiagnosticsBody
  | PromptCacheUnavailableDiagnosticsBody
type ModerationErrorBody = { type: 'error'; code: string; message: string }
type Moderation = {
  input: ModerationResultBody | ModerationErrorBody
  output: ModerationResultBody | ModerationErrorBody
}
type ResponseConversation = { id: string }
type Response = ModelResponseProperties &
  ResponseProperties & {
    image?: ResolvedImageOptions | undefined
    service_tier?: ServiceTierResponses | undefined
    truncation?: ('auto' | 'disabled' | null) | undefined
    id: string
    object: 'response'
    status?:
      | 'completed'
      | 'failed'
      | 'in_progress'
      | 'cancelled'
      | 'queued'
      | 'incomplete'
      | undefined
    access_programs: AccessProgramsBody | null
    created_at: number
    completed_at?: (number | null) | undefined
    error: ResponseError
    incomplete_details: {
      reason?: 'max_output_tokens' | 'max_messages' | 'content_filter' | 'steered' | undefined
    } | null
    input_transformations?: ReasoningInputTransformation[] | undefined
    output: OutputItem[]
    reasoning?: (Reasoning | null) | undefined
    instructions: (string | InputItem[]) | null
    output_text?: (string | null) | undefined
    usage?: (ResponseUsage | null) | undefined
    tool_usage?: ResponseToolUsage | undefined
    prompt_cache_options?: PromptCacheOptions | undefined
    prompt_cache_diagnostics?: PromptCacheDiagnostics | undefined
    moderation?: (Moderation | null) | undefined
    parallel_tool_calls: boolean
    conversation?: ((ResponseConversation | null) | null) | undefined
    max_output_tokens?: (number | null) | undefined
  }
type InputMessageResource = InputMessage & { id: string }
type CustomToolCallResource = CustomToolCall & {
  id: string
  status: FunctionCallStatus
  created_by?: string | undefined
}
type ItemResource =
  | InputMessageResource
  | OutputMessage
  | FileSearchToolCall
  | ComputerToolCall
  | ComputerToolCallOutputResource
  | WebSearchToolCall
  | FunctionToolCallResource
  | FunctionToolCallOutputResource
  | ToolSearchCall
  | ToolSearchOutput
  | AdditionalTools
  | ResponseConfigurationUpdate
  | ReasoningItem
  | Program
  | ProgramOutput
  | CompactionBody
  | ImageGenToolCall
  | CodeInterpreterToolCall
  | LocalShellToolCall
  | LocalShellToolCallOutput
  | FunctionShellCall
  | FunctionShellCallOutput
  | ApplyPatchToolCall
  | ApplyPatchToolCallOutput
  | MCPListTools
  | MCPApprovalRequest
  | MCPApprovalResponseResource
  | MCPToolCall
  | CustomToolCallResource
  | CustomToolCallOutputResource
type ResponseItemList = {
  object: 'list'
  data: ItemResource[]
  has_more: boolean
  first_id: string
  last_id: string
}
type MessageContentImageFileObjectInput = {
  type: 'image_file'
  image_file: { file_id: string; detail?: 'auto' | 'low' | 'high' }
}
type MessageContentImageUrlObjectInput = {
  type: 'image_url'
  image_url: { url: string; detail?: 'auto' | 'low' | 'high' }
}
type MessageRequestContentTextObjectInput = { type: 'text'; text: string }
type AssistantToolsFileSearchTypeOnlyInput = { type: 'file_search' }
type CreateMessageRequestInput = {
  role: 'user' | 'assistant'
  content:
    | string
    | (
        | MessageContentImageFileObjectInput
        | MessageContentImageUrlObjectInput
        | MessageRequestContentTextObjectInput
      )[]
  attachments?:
    | {
        file_id?: string
        tools?: (AssistantToolsCodeInput | AssistantToolsFileSearchTypeOnlyInput)[]
      }[]
    | null
  metadata?: MetadataInput
}
type CreateThreadRequestInput = {
  messages?: CreateMessageRequestInput[]
  tool_resources?: {
    code_interpreter?: { file_ids?: string[] }
    file_search?: unknown | unknown
  } | null
  metadata?: MetadataInput
}
type ThreadObject = {
  id: string
  object: 'thread'
  created_at: number
  tool_resources: {
    code_interpreter?: { file_ids?: string[] | undefined } | undefined
    file_search?: { vector_store_ids?: string[] | undefined } | undefined
  } | null
  metadata: Metadata
}
type TruncationObjectInput = { type: 'auto' | 'last_messages'; last_messages?: number | null }
type AssistantsNamedToolChoiceInput = {
  type: 'function' | 'code_interpreter' | 'file_search'
  function?: { name: string }
}
type AssistantsApiToolChoiceOptionInput =
  | 'none'
  | 'auto'
  | 'required'
  | AssistantsNamedToolChoiceInput
type CreateThreadAndRunRequestInput = {
  assistant_id: string
  thread?: CreateThreadRequestInput
  model?:
    | string
    | 'gpt-5'
    | 'gpt-5-mini'
    | 'gpt-5-nano'
    | 'gpt-5-2025-08-07'
    | 'gpt-5-mini-2025-08-07'
    | 'gpt-5-nano-2025-08-07'
    | 'gpt-4.1'
    | 'gpt-4.1-mini'
    | 'gpt-4.1-nano'
    | 'gpt-4.1-2025-04-14'
    | 'gpt-4.1-mini-2025-04-14'
    | 'gpt-4.1-nano-2025-04-14'
    | 'gpt-4o'
    | 'gpt-4o-2024-11-20'
    | 'gpt-4o-2024-08-06'
    | 'gpt-4o-2024-05-13'
    | 'gpt-4o-mini'
    | 'gpt-4o-mini-2024-07-18'
    | 'gpt-4.5-preview'
    | 'gpt-4.5-preview-2025-02-27'
    | 'gpt-4-turbo'
    | 'gpt-4-turbo-2024-04-09'
    | 'gpt-4-0125-preview'
    | 'gpt-4-turbo-preview'
    | 'gpt-4-1106-preview'
    | 'gpt-4-vision-preview'
    | 'gpt-4'
    | 'gpt-4-0314'
    | 'gpt-4-0613'
    | 'gpt-4-32k'
    | 'gpt-4-32k-0314'
    | 'gpt-4-32k-0613'
    | 'gpt-3.5-turbo'
    | 'gpt-3.5-turbo-16k'
    | 'gpt-3.5-turbo-0613'
    | 'gpt-3.5-turbo-1106'
    | 'gpt-3.5-turbo-0125'
    | 'gpt-3.5-turbo-16k-0613'
    | null
  instructions?: string | null
  tools?:
    | (AssistantToolsCodeInput | AssistantToolsFileSearchInput | AssistantToolsFunctionInput)[]
    | null
  tool_resources?: {
    code_interpreter?: { file_ids?: string[] }
    file_search?: { vector_store_ids?: string[] }
  } | null
  metadata?: MetadataInput
  temperature?: number | null
  top_p?: number | null
  stream?: boolean | null
  max_prompt_tokens?: number | null
  max_completion_tokens?: number | null
  truncation_strategy?: TruncationObjectInput | null
  tool_choice?: AssistantsApiToolChoiceOptionInput | null
  parallel_tool_calls?: ParallelToolCallsInput
  response_format?: AssistantsApiResponseFormatOptionInput | null
}
type RunToolCallObject = {
  id: string
  type: 'function'
  function: { name: string; arguments: string }
}
type RunCompletionUsage = {
  completion_tokens: number
  prompt_tokens: number
  total_tokens: number
} | null
type TruncationObject = {
  type: 'auto' | 'last_messages'
  last_messages?: (number | null) | undefined
}
type AssistantsNamedToolChoice = {
  type: 'function' | 'code_interpreter' | 'file_search'
  function?: { name: string } | undefined
}
type AssistantsApiToolChoiceOption = 'none' | 'auto' | 'required' | AssistantsNamedToolChoice
type ParallelToolCalls = boolean
type RunObject = {
  id: string
  object: 'thread.run'
  created_at: number
  thread_id: string
  assistant_id: string
  status:
    | 'queued'
    | 'in_progress'
    | 'requires_action'
    | 'cancelling'
    | 'cancelled'
    | 'failed'
    | 'completed'
    | 'incomplete'
    | 'expired'
  required_action: {
    type: 'submit_tool_outputs'
    submit_tool_outputs: { tool_calls: RunToolCallObject[] }
  } | null
  last_error: {
    code: 'server_error' | 'rate_limit_exceeded' | 'invalid_prompt'
    message: string
  } | null
  expires_at: number | null
  started_at: number | null
  cancelled_at: number | null
  failed_at: number | null
  completed_at: number | null
  incomplete_details: { reason?: 'max_completion_tokens' | 'max_prompt_tokens' | undefined } | null
  model: string
  instructions: string
  tools: (AssistantToolsCode | AssistantToolsFileSearch | AssistantToolsFunction)[]
  metadata: Metadata
  usage: RunCompletionUsage
  temperature?: (number | null) | undefined
  top_p?: (number | null) | undefined
  max_prompt_tokens: number | null
  max_completion_tokens: number | null
  truncation_strategy: TruncationObject | null
  tool_choice: AssistantsApiToolChoiceOption | null
  parallel_tool_calls: ParallelToolCalls
  response_format: AssistantsApiResponseFormatOption | null
}
type ModifyThreadRequestInput = {
  tool_resources?: {
    code_interpreter?: { file_ids?: string[] }
    file_search?: { vector_store_ids?: string[] }
  } | null
  metadata?: MetadataInput
}
type DeleteThreadResponse = { id: string; deleted: boolean; object: 'thread.deleted' }
type MessageContentImageFileObject = {
  type: 'image_file'
  image_file: { file_id: string; detail?: 'auto' | 'low' | 'high' | undefined }
}
type MessageContentImageUrlObject = {
  type: 'image_url'
  image_url: { url: string; detail?: 'auto' | 'low' | 'high' | undefined }
}
type MessageContentTextAnnotationsFileCitationObject = {
  type: 'file_citation'
  text: string
  file_citation: { file_id: string }
  start_index: number
  end_index: number
}
type MessageContentTextAnnotationsFilePathObject = {
  type: 'file_path'
  text: string
  file_path: { file_id: string }
  start_index: number
  end_index: number
}
type MessageContentTextObject = {
  type: 'text'
  text: {
    value: string
    annotations: (
      | MessageContentTextAnnotationsFileCitationObject
      | MessageContentTextAnnotationsFilePathObject
    )[]
  }
}
type MessageContentRefusalObject = { type: 'refusal'; refusal: string }
type AssistantToolsFileSearchTypeOnly = { type: 'file_search' }
type MessageObject = {
  id: string
  object: 'thread.message'
  created_at: number
  thread_id: string
  status: 'in_progress' | 'incomplete' | 'completed'
  incomplete_details: {
    reason: 'content_filter' | 'max_tokens' | 'run_cancelled' | 'run_expired' | 'run_failed'
  } | null
  completed_at: number | null
  incomplete_at: number | null
  role: 'user' | 'assistant'
  content: (
    | MessageContentImageFileObject
    | MessageContentImageUrlObject
    | MessageContentTextObject
    | MessageContentRefusalObject
  )[]
  assistant_id: string | null
  run_id: string | null
  attachments:
    | {
        file_id?: string | undefined
        tools?: (AssistantToolsCode | AssistantToolsFileSearchTypeOnly)[] | undefined
      }[]
    | null
  metadata: Metadata
}
type ListMessagesResponse = {
  object: string
  data: MessageObject[]
  first_id: string
  last_id: string
  has_more: boolean
}
type ModifyMessageRequestInput = { metadata?: MetadataInput }
type DeleteMessageResponse = { id: string; deleted: boolean; object: 'thread.message.deleted' }
type ListRunsResponse = {
  object: string
  data: RunObject[]
  first_id: string
  last_id: string
  has_more: boolean
}
type CreateRunRequestInput = {
  assistant_id: string
  model?: string | AssistantSupportedModelsInput | null
  reasoning_effort?: ReasoningEffortInput
  instructions?: string | null
  additional_instructions?: string | null
  additional_messages?: CreateMessageRequestInput[] | null
  tools?:
    | (AssistantToolsCodeInput | AssistantToolsFileSearchInput | AssistantToolsFunctionInput)[]
    | null
  metadata?: MetadataInput
  temperature?: number | null
  top_p?: number | null
  stream?: boolean | null
  max_prompt_tokens?: number | null
  max_completion_tokens?: number | null
  truncation_strategy?: TruncationObjectInput | null
  tool_choice?: AssistantsApiToolChoiceOptionInput | null
  parallel_tool_calls?: ParallelToolCallsInput
  response_format?: AssistantsApiResponseFormatOptionInput | null
}
type ModifyRunRequestInput = { metadata?: MetadataInput }
type RunStepDetailsMessageCreationObject = {
  type: 'message_creation'
  message_creation: { message_id: string }
}
type RunStepDetailsToolCallsCodeOutputLogsObject = { type: 'logs'; logs: string }
type RunStepDetailsToolCallsCodeOutputImageObject = { type: 'image'; image: { file_id: string } }
type RunStepDetailsToolCallsCodeObject = {
  id: string
  type: 'code_interpreter'
  code_interpreter: {
    input: string
    outputs: (
      | RunStepDetailsToolCallsCodeOutputLogsObject
      | RunStepDetailsToolCallsCodeOutputImageObject
    )[]
  }
}
type RunStepDetailsToolCallsFileSearchRankingOptionsObject = {
  ranker: FileSearchRanker
  score_threshold: number
}
type RunStepDetailsToolCallsFileSearchResultObject = {
  file_id: string
  file_name: string
  score: number
  content?: { type?: 'text' | undefined; text?: string | undefined }[] | undefined
}
type RunStepDetailsToolCallsFileSearchObject = {
  id: string
  type: 'file_search'
  file_search: {
    ranking_options?: RunStepDetailsToolCallsFileSearchRankingOptionsObject | undefined
    results?: RunStepDetailsToolCallsFileSearchResultObject[] | undefined
  }
}
type RunStepDetailsToolCallsFunctionObject = {
  id: string
  type: 'function'
  function: { name: string; arguments: string; output: string | null }
}
type RunStepDetailsToolCallsObject = {
  type: 'tool_calls'
  tool_calls: (
    | RunStepDetailsToolCallsCodeObject
    | RunStepDetailsToolCallsFileSearchObject
    | RunStepDetailsToolCallsFunctionObject
  )[]
}
type RunStepCompletionUsage = {
  completion_tokens: number
  prompt_tokens: number
  total_tokens: number
} | null
type RunStepObject = {
  id: string
  object: 'thread.run.step'
  created_at: number
  assistant_id: string
  thread_id: string
  run_id: string
  type: 'message_creation' | 'tool_calls'
  status: 'in_progress' | 'cancelled' | 'failed' | 'completed' | 'expired'
  step_details: RunStepDetailsMessageCreationObject | RunStepDetailsToolCallsObject
  last_error: { code: 'server_error' | 'rate_limit_exceeded'; message: string } | null
  expired_at: number | null
  cancelled_at: number | null
  failed_at: number | null
  completed_at: number | null
  metadata: Metadata
  usage: RunStepCompletionUsage
}
type ListRunStepsResponse = {
  object: string
  data: RunStepObject[]
  first_id: string
  last_id: string
  has_more: boolean
}
type SubmitToolOutputsRunRequestInput = {
  tool_outputs: { tool_call_id?: string; output?: string }[]
  stream?: boolean | null
}
type CreateUploadRequestInput = {
  filename: string
  purpose: 'assistants' | 'batch' | 'fine-tune' | 'vision'
  bytes: number
  mime_type: string
  expires_after?: FileExpirationAfterInput
}
type Upload = {
  id: string
  created_at: number
  filename: string
  bytes: number
  purpose: string
  status: 'pending' | 'completed' | 'cancelled' | 'expired'
  expires_at: number
  object?: 'upload' | undefined
  file?: (OpenAIFile | null) | undefined
}
type CompleteUploadRequestInput = { part_ids: string[]; md5?: string }
type AddUploadPartRequestInput = { data: File }
type UploadPart = { id: string; created_at: number; upload_id: string; object: 'upload.part' }
type VectorStoreExpirationAfter = { anchor: 'last_active_at'; days: number }
type VectorStoreObject = {
  id: string
  object: 'vector_store'
  created_at: number
  name: string
  usage_bytes: number
  file_counts: {
    in_progress: number
    completed: number
    failed: number
    cancelled: number
    total: number
  }
  status: 'expired' | 'in_progress' | 'completed'
  expires_after?: VectorStoreExpirationAfter | undefined
  expires_at?: (number | null) | undefined
  last_active_at: number | null
  metadata: Metadata
}
type ListVectorStoresResponse = {
  object: string
  data: VectorStoreObject[]
  first_id: string
  last_id: string
  has_more: boolean
}
type VectorStoreExpirationAfterInput = { anchor: 'last_active_at'; days: number }
type AutoChunkingStrategyRequestParamInput = { type: 'auto' }
type StaticChunkingStrategyInput = { max_chunk_size_tokens: number; chunk_overlap_tokens: number }
type StaticChunkingStrategyRequestParamInput = {
  type: 'static'
  static: StaticChunkingStrategyInput
}
type CreateVectorStoreRequestInput = {
  file_ids?: string[]
  name?: string
  description?: string
  expires_after?: VectorStoreExpirationAfterInput
  chunking_strategy?:
    | AutoChunkingStrategyRequestParamInput
    | StaticChunkingStrategyRequestParamInput
  metadata?: MetadataInput
}
type UpdateVectorStoreRequestInput = {
  name?: string | null
  expires_after?: VectorStoreExpirationAfterInput | null
  metadata?: MetadataInput
}
type DeleteVectorStoreResponse = { id: string; deleted: boolean; object: 'vector_store.deleted' }
type CreateVectorStoreFileBatchRequestInput = unknown | unknown
type VectorStoreFileBatchObject = {
  id: string
  object: 'vector_store.file_batch'
  created_at: number
  vector_store_id: string
  status: 'in_progress' | 'completed' | 'cancelled' | 'failed'
  file_counts: {
    in_progress: number
    completed: number
    failed: number
    cancelled: number
    total: number
  }
}
type StaticChunkingStrategy = { max_chunk_size_tokens: number; chunk_overlap_tokens: number }
type StaticChunkingStrategyResponseParam = { type: 'static'; static: StaticChunkingStrategy }
type OtherChunkingStrategyResponseParam = { type: 'other' }
type VectorStoreFileObject = {
  id: string
  object: 'vector_store.file'
  usage_bytes: number
  created_at: number
  vector_store_id: string
  status: 'in_progress' | 'completed' | 'cancelled' | 'failed'
  last_error: { code: 'server_error' | 'unsupported_file' | 'invalid_file'; message: string } | null
  chunking_strategy?:
    | (StaticChunkingStrategyResponseParam | OtherChunkingStrategyResponseParam)
    | undefined
  attributes?: VectorStoreFileAttributes | undefined
}
type ListVectorStoreFilesResponse = {
  object: string
  data: VectorStoreFileObject[]
  first_id: string
  last_id: string
  has_more: boolean
}
type ChunkingStrategyRequestParamInput =
  | AutoChunkingStrategyRequestParamInput
  | StaticChunkingStrategyRequestParamInput
type CreateVectorStoreFileRequestInput = {
  file_id: string
  chunking_strategy?: ChunkingStrategyRequestParamInput
  attributes?: VectorStoreFileAttributesInput
}
type DeleteVectorStoreFileResponse = {
  id: string
  deleted: boolean
  object: 'vector_store.file.deleted'
}
type UpdateVectorStoreFileAttributesRequestInput = { attributes: VectorStoreFileAttributesInput }
type VectorStoreFileContentResponse = {
  object: 'vector_store.file_content.page'
  data: { type?: string | undefined; text?: string | undefined }[]
  has_more: boolean
  next_page: string | null
}
type VectorStoreSearchRequestInput = {
  query: string | string[]
  rewrite_query?: boolean
  max_num_results?: number
  filters?: ComparisonFilterInput | CompoundFilterInput
  ranking_options?: { ranker?: 'none' | 'auto' | 'default-2024-11-15'; score_threshold?: number }
}
type VectorStoreSearchResultContentObject = { type: 'text'; text: string }
type VectorStoreSearchResultItem = {
  file_id: string
  filename: string
  score: number
  attributes: VectorStoreFileAttributes
  content: VectorStoreSearchResultContentObject[]
}
type VectorStoreSearchResultsPage = {
  object: 'vector_store.search_results.page'
  search_query: string[]
  data: VectorStoreSearchResultItem[]
  has_more: boolean
  next_page: string | null
}
type CreateConversationBodyInput = {
  metadata?: MetadataInput | null
  safety_identifier?: string | null
  items?: InputItemInput[] | null
}
type DeletedConversationResource = { object: 'conversation.deleted'; deleted: boolean; id: string }
type UpdateConversationBodyInput = { metadata: MetadataInput }
type SafetyCaseNoticeType = 'warning' | 'deactivation'
type SafetyCaseNotice = { type: SafetyCaseNoticeType }
type SafetyCaseResource = {
  id: string
  object: 'safety.case'
  created_at: number
  entity_identifier: string
  reason: string | null
  notice: SafetyCaseNotice
}
type SafetyAlertErrorType =
  | 'potentially_unintended_data_transfer'
  | 'potentially_unintended_data_access'
  | 'potentially_unintended_destructive_activity'
  | 'other'
type SafetyAlertResource = {
  id: string
  object: 'safety.alert'
  created_at: number
  request_id: string
  response_id: string
  model: string
  request_paused: boolean
  error_type: SafetyAlertErrorType
  reason: string | null
  detailed_explanation?: (string | null) | undefined
}
type ExternalKeyPurposeInput = 'ekm' | 'psp_decryption'
type AwsExternalKeyParamsInput = {
  name: string
  type: 'aws'
  role_arn: string
  kms_arn: string
  external_id: string
  purpose?: ExternalKeyPurposeInput
}
type GcpExternalKeyParamsInput = {
  name: string
  type: 'gcp'
  workload_identity_project_number: string
  workload_identity_pool_id: string
  workload_identity_provider_id: string
  kms_project_id: string
  kms_key_ring_name: string
  kms_key_name: string
  kms_key_location: string
  audience: string
  purpose?: ExternalKeyPurposeInput
  kms_key_version?: string
}
type AzureExternalKeyParamsInput = {
  name: string
  type: 'azure'
  tenant_id: string
  vault_uri: string
  key_name: string
  purpose?: ExternalKeyPurposeInput
  key_version?: string
}
type OciExternalKeyParamsInput = {
  name: string
  type: 'oci'
  region: string
  vault_ocid: string
  key_ocid: string
  purpose?: ExternalKeyPurposeInput
  key_version_ocid?: string
}
type V1OrganizationExternalKeysPostRequestInput =
  | AwsExternalKeyParamsInput
  | GcpExternalKeyParamsInput
  | AzureExternalKeyParamsInput
  | OciExternalKeyParamsInput
type ExternalKeyPurpose = 'ekm' | 'psp_decryption'
type ExternalKeyResource = {
  object: string
  id: string
  type: string
  purpose?: ExternalKeyPurpose | undefined
  name: string
  api_project_ids: string[]
  workspace_id: string
  created_at: number
  role_arn?: string | undefined
  external_id?: string | undefined
  kms_arn?: string | undefined
  workload_identity_project_number?: string | undefined
  workload_identity_pool_id?: string | undefined
  workload_identity_provider_id?: string | undefined
  audience?: string | undefined
  kms_project_id?: string | undefined
  kms_key_ring_name?: string | undefined
  kms_key_name?: string | undefined
  kms_key_location?: string | undefined
  kms_key_version?: string | undefined
  region?: string | undefined
  vault_ocid?: string | undefined
  key_ocid?: string | undefined
  key_version_ocid?: string | undefined
  tenant_id?: string | undefined
  vault_uri?: string | undefined
  key_name?: string | undefined
  key_version?: string | undefined
}
type OrderEnumInput = 'asc' | 'desc'
type ListExternalKeysResource = {
  object: 'list'
  data: ExternalKeyResource[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
}
type ValidateExternalKeyResource = { status: string }
type DiscoveryVerification = { type: 'discovery'; discovery_url: string | null }
type UploadedJwksVerification = { type: 'uploaded_jwks'; jwks: { [key: string]: any } }
type Transformation = { attribute: string; expression: string }
type PlatformProvider = {
  object: 'organization.workload_identity_provider'
  id: string
  type: 'oidc'
  name: string
  issuer: string
  audience: string
  verification: DiscoveryVerification | UploadedJwksVerification
  description: string | null
  attribute_transformations: Transformation[]
  enabled: boolean
  created_at: number
  updated_at: number
}
type PlatformProviderListResource = {
  object: 'list'
  data: PlatformProvider[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
}
type DiscoveryVerificationParamInput = { type: 'discovery'; discovery_url: string | null }
type UploadedJwksVerificationParamInput = { type: 'uploaded_jwks'; jwks: { [key: string]: any } }
type TransformationParamInput = { attribute: string; expression: string }
type CreatePlatformWorkloadIdentityProviderBodyInput = {
  name: string
  type: 'oidc'
  issuer: string
  audience: string
  verification?: DiscoveryVerificationParamInput | UploadedJwksVerificationParamInput
  description?: string
  attribute_transformations?: TransformationParamInput[]
  enabled?: boolean
}
type UpdatePlatformWorkloadIdentityProviderBodyInput = {
  name?: string
  issuer?: string
  audience?: string
  verification?: DiscoveryVerificationParamInput | UploadedJwksVerificationParamInput
  description?: string | null
  attribute_transformations?: TransformationParamInput[]
  enabled?: boolean
}
type PlatformProviderDeletedResource = {
  object: 'organization.workload_identity_provider.deleted'
  id: string
  deleted: boolean
}
type DefaultPermissions = { type: 'service_account_default' }
type RestrictedPermissions = { type: 'restricted'; scopes: string[] }
type PlatformFederationRule = {
  object: 'organization.workload_identity_federation_rule'
  id: string
  workload_identity_provider_id: string
  project_id: string
  service_account_id: string
  name: string | null
  description: string | null
  attribute_matchers: { [key: string]: string | boolean | (number | number) }
  permissions: DefaultPermissions | RestrictedPermissions
  enabled: boolean
  created_at: number
  updated_at: number
}
type PlatformFederationRuleListResource = {
  object: 'list'
  data: PlatformFederationRule[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
}
type DefaultPermissionsParamInput = { type: 'service_account_default' }
type RestrictedPermissionsParamInput = { type: 'restricted'; scopes: string[] }
type CreatePlatformWorkloadIdentityFederationRuleBodyInput = {
  project_id: string
  service_account_id: string
  name?: string
  description?: string
  attribute_matchers: { [key: string]: string | boolean | (number | number) }
  permissions?: DefaultPermissionsParamInput | RestrictedPermissionsParamInput
  enabled?: boolean
}
type UpdatePlatformWorkloadIdentityFederationRuleBodyInput = {
  name?: string | null
  description?: string | null
  attribute_matchers?: { [key: string]: string | boolean | (number | number) }
  permissions?: DefaultPermissionsParamInput | RestrictedPermissionsParamInput
  enabled?: boolean
}
type PlatformFederationRuleDeletedResource = {
  object: 'organization.workload_identity_federation_rule.deleted'
  id: string
  deleted: boolean
}
type DecisionsUsageGroupByInput =
  | 'project_id'
  | 'user_id'
  | 'api_key_id'
  | 'model'
  | 'batch'
  | 'service_tier'
  | 'api_source'
type DecisionsUsageApiSource = 'agents_api' | 'unlabeled'
type DecisionsUsageResult = {
  api_source?: (DecisionsUsageApiSource | null) | undefined
  object: 'organization.usage.decisions.result'
  input_tokens: number
  input_cached_tokens?: (number | null) | undefined
  input_cache_write_tokens?: (number | null) | undefined
  input_cache_write_30m_tokens?: (number | null) | undefined
  input_cache_write_12h_tokens?: (number | null) | undefined
  input_uncached_tokens?: (number | null) | undefined
  output_tokens: number
  input_text_tokens?: (number | null) | undefined
  output_text_tokens?: (number | null) | undefined
  input_cached_text_tokens?: (number | null) | undefined
  input_audio_tokens?: (number | null) | undefined
  input_cached_audio_tokens?: (number | null) | undefined
  output_audio_tokens?: (number | null) | undefined
  input_image_tokens?: (number | null) | undefined
  input_cached_image_tokens?: (number | null) | undefined
  output_image_tokens?: (number | null) | undefined
  num_model_requests: number
  project_id?: (string | null) | undefined
  user_id?: (string | null) | undefined
  api_key_id?: (string | null) | undefined
  model?: (string | null) | undefined
  batch?: (boolean | null) | undefined
  service_tier?: (string | null) | undefined
}
type DecisionsUsageBucket = {
  object: 'bucket'
  start_time: number
  end_time: number
  results: DecisionsUsageResult[]
}
type PublicDecisionsUsageResponseResource = {
  object: 'page'
  has_more: boolean
  next_page: string | null
  data: DecisionsUsageBucket[]
}
type DecisionsUsageErrorDetails = {
  code: string | null
  message: string
  param: string | null
  type: string
}
type DecisionsUsageErrorResponse = { error: DecisionsUsageErrorDetails }
type DecisionsUsagePermissionErrorResponse = { error: DecisionsUsageErrorDetails | string }
type ExternalStorageOrderInput = 'asc' | 'desc'
type ExternalStorageStatus = 'pending' | 'validated' | 'degraded' | 'unhealthy'
type ExternalStorageResponse = {
  object: 'organization.external_storage'
  id: string
  project_id: string
  provider:
    | AwsExternalStorageProviderResponse
    | AzureExternalStorageProviderResponse
    | GcpExternalStorageProviderResponse
    | OciExternalStorageProviderResponse
  geography: string
  status: ExternalStorageStatus
  created_at: number
}
type ExternalStorageListResource = {
  object: 'list'
  data: ExternalStorageResponse[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
}
type AwsExternalStorageProviderParamsInput = { type: 'aws'; bucket: string; role_arn: string }
type AzureExternalStorageProviderParamsInput = {
  type: 'azure'
  tenant_id: string
  subscription_id: string
  resource_group: string
  account_name: string
  container: string
}
type GcpExternalStorageProviderParamsInput = {
  type: 'gcp'
  bucket: string
  workload_identity_project_number: string
  workload_identity_pool_id: string
  workload_identity_provider_id: string
}
type OciExternalStorageProviderParamsInput = {
  type: 'oci'
  tenancy_ocid: string
  region: string
  bucket: string
}
type CreateExternalStorageBodyInput = {
  project_id: string
  provider:
    | AwsExternalStorageProviderParamsInput
    | AzureExternalStorageProviderParamsInput
    | GcpExternalStorageProviderParamsInput
    | OciExternalStorageProviderParamsInput
}
type ExternalStorageDeletedResource = {
  object: 'organization.external_storage.deleted'
  id: string
  deleted: boolean
}
type SpendLimitCurrency = string | 'USD'
type SpendLimitInterval = string | 'month'
type SpendLimitEnforcementStatus = string | 'inactive' | 'enforcing'
type SpendLimitEnforcement = { status: SpendLimitEnforcementStatus }
type EmailNotificationChannel = {
  type: 'email'
  recipients: string[]
  subject_prefix?: (string | null) | undefined
}
type OrganizationSpendLimitResource = {
  object: 'organization.spend_limit'
  threshold_amount: number
  currency: SpendLimitCurrency
  interval: SpendLimitInterval
  enforcement: SpendLimitEnforcement
  notification_channel: EmailNotificationChannel
}
type SpendLimitEmailNotificationChannelParamsInput = {
  type: 'email'
  recipients?: string[]
  subject_prefix?: string | null
}
type UpdateOrganizationSpendLimitBodyInput = {
  threshold_amount: number
  currency: 'USD'
  interval: 'month'
  notification_channel?: SpendLimitEmailNotificationChannelParamsInput | null
}
type OrganizationSpendLimitDeletedResource = {
  object: 'organization.spend_limit.deleted'
  deleted: boolean
}
type ProjectSpendLimitResource = {
  object: 'project.spend_limit'
  threshold_amount: number
  currency: SpendLimitCurrency
  interval: SpendLimitInterval
  enforcement: SpendLimitEnforcement
  notification_channel: EmailNotificationChannel
}
type ProjectSpendLimitDeletedResource = { object: 'project.spend_limit.deleted'; deleted: boolean }
type UpdateProjectSpendLimitBodyInput = {
  threshold_amount: number
  currency: 'USD'
  interval: 'month'
  notification_channel?: SpendLimitEmailNotificationChannelParamsInput | null
}
type ProjectDefaultServiceTier = 'standard' | 'fast' | 'scale'
type ProjectOptionalServiceTier = 'flex' | 'fast' | 'ultrafast'
type ProjectServiceTierSettingsResource = {
  object: 'project.service_tier_settings'
  default: ProjectDefaultServiceTier
  enabled_tiers: 'all' | ProjectOptionalServiceTier[]
}
type UpdateProjectServiceTierSettingsBodyInput = unknown | unknown
type CreateProjectServiceAccountApiKeyBodyInput = {
  name?: string
  scopes?: string[]
  expires_in_seconds?: number | null
}
type ServiceAccountApiKeyBody = {
  object: 'organization.project.service_account.api_key'
  value: string
  name: string
  created_at: number
  expires_at?: (number | null) | undefined
  id: string
}
type CreateContentProvenanceBodyInput = { file: File }
type ProvenanceCheckObject = 'content_provenance_check'
type ProvenanceDetectionResultApi = 'detected' | 'not_detected'
type C2PAValidationStateApi = 'trusted' | 'valid' | 'invalid' | 'not_present'
type C2PAProvenanceResult = {
  type: 'c2pa'
  outcome: ProvenanceDetectionResultApi
  validation_state: C2PAValidationStateApi
  issuer: string | null
  model: string | null
  generated_at: string | null
}
type SynthIDProvenanceResult = {
  type: 'synthid'
  outcome: ProvenanceDetectionResultApi
  model: string | null
  generated_at: string | null
}
type ProvenanceResource = {
  object: ProvenanceCheckObject
  created_at: number
  results: (C2PAProvenanceResult | SynthIDProvenanceResult)[]
}
type VideoModelInput =
  | string
  | 'sora-2'
  | 'sora-2-pro'
  | 'sora-2-2025-10-06'
  | 'sora-2-pro-2025-10-06'
  | 'sora-2-2025-12-08'
type ImageRefParam_2Input = { image_url?: string; file_id?: string }
type VideoSecondsInput = '4' | '8' | '12'
type VideoSizeInput = '720x1280' | '1280x720' | '1024x1792' | '1792x1024'
type CreateVideoJsonBodyInput = {
  model?: VideoModelInput
  prompt: string
  input_reference?: ImageRefParam_2Input
  seconds?: VideoSecondsInput
  size?: VideoSizeInput
}
type CreateVideoMultipartBodyInput = {
  model?: VideoModelInput
  prompt: string
  input_reference?: File | ImageRefParam_2Input
  seconds?: VideoSecondsInput
  size?: VideoSizeInput
}
type VideoModel =
  | string
  | 'sora-2'
  | 'sora-2-pro'
  | 'sora-2-2025-10-06'
  | 'sora-2-pro-2025-10-06'
  | 'sora-2-2025-12-08'
type VideoStatus = 'queued' | 'in_progress' | 'completed' | 'failed'
type VideoSize = '720x1280' | '1280x720' | '1024x1792' | '1792x1024'
type Error_2 = {
  code: string
  type?: (string | null) | undefined
  param?: (string | null) | undefined
  message: string
  headers?: { [key: string]: string } | undefined
  misalignment?: MisalignmentErrorDetailsResource | undefined
}
type VideoResource = {
  id: string
  object: 'video'
  model: VideoModel
  status: VideoStatus
  progress: number
  created_at: number
  completed_at: number | null
  expires_at: number | null
  prompt: string | null
  size: VideoSize
  seconds: string
  remixed_from_video_id: string | null
  error: Error_2 | null
}
type VideoListResource = {
  object: 'list'
  data: VideoResource[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
}
type CreateVideoCharacterBodyInput = { video: File; name: string }
type VideoCharacterResource = { id: string | null; name: string | null; created_at: number }
type VideoReferenceInputParamInput = { id: string }
type CreateVideoEditJsonBodyInput = { video: VideoReferenceInputParamInput; prompt: string }
type CreateVideoEditMultipartBodyInput = {
  video: File | VideoReferenceInputParamInput
  prompt: string
}
type CreateVideoExtendJsonBodyInput = {
  video: VideoReferenceInputParamInput
  prompt: string
  seconds: VideoSecondsInput
}
type CreateVideoExtendMultipartBodyInput = {
  video: VideoReferenceInputParamInput | File
  prompt: string
  seconds: VideoSecondsInput
}
type DeletedVideoResource = { object: 'video.deleted'; deleted: boolean; id: string }
type VideoContentVariantInput = 'video' | 'thumbnail' | 'spritesheet'
type CreateVideoRemixBodyInput = { prompt: string }
type TruncationEnumInput = 'auto' | 'disabled'
type PersonalityEnumInput = string | 'friendly' | 'pragmatic'
type TokenCountsBodyInput = {
  model?: string | null
  input?: (string | InputItemInput[]) | null
  previous_response_id?: string | null
  tools?: ToolInput[] | null
  text?: ResponseTextParamInput | null
  reasoning?: ReasoningInput | null
  truncation?: TruncationEnumInput
  instructions?: string | null
  personality?: PersonalityEnumInput
  conversation?: ConversationParamInput | null
  tool_choice?: ToolChoiceParamInput | null
  parallel_tool_calls?: boolean | null
}
type TokenCountsResource = { object: 'response.input_tokens'; input_tokens: number }
type ModelIdsCompactionInput = ModelIdsResponsesInput | string | null
type PromptCacheRetentionEnumInput = 'in_memory' | '24h'
type ServiceTierEnumInput = 'auto' | 'default' | 'fast' | 'flex' | 'priority'
type CompactResponseMethodPublicBodyInput = {
  model: ModelIdsCompactionInput
  input?: (string | InputItemInput[]) | null
  previous_response_id?: string | null
  instructions?: string | null
  safety_identifier?: string | null
  image?: ImageOptionsParamInput
  prompt_cache_key?: string | null
  prompt_cache_retention?: PromptCacheRetentionEnumInput | null
  prompt_cache_options?: PromptCacheOptionsParamInput | null
  service_tier?: ServiceTierEnumInput | null
}
type ItemField =
  | Message
  | Program
  | ProgramOutput
  | FunctionToolCall
  | ToolSearchCall
  | ToolSearchOutput
  | AdditionalTools
  | FunctionToolCallOutput
  | FileSearchToolCall
  | WebSearchToolCall
  | ImageGenToolCall
  | ComputerToolCall
  | ComputerToolCallOutputResource
  | ReasoningItem
  | CompactionBody
  | CodeInterpreterToolCall
  | LocalShellToolCall
  | LocalShellToolCallOutput
  | FunctionShellCall
  | FunctionShellCallOutput
  | ApplyPatchToolCall
  | ApplyPatchToolCallOutput
  | MCPListTools
  | MCPApprovalRequest
  | MCPApprovalResponseResource
  | MCPToolCall
  | CustomToolCall
  | CustomToolCallOutput
type CompactResource = {
  image?: ResolvedImageOptions | undefined
  id: string
  object: 'response.compaction'
  safety_identifier?: (string | null) | undefined
  output: ItemField[]
  created_at: number
  service_tier?: string | undefined
  usage: ResponseUsage
}
type CreateSkillBodyInput = { files: File[] | File }
type SkillResource = {
  id: string
  object: 'skill'
  name: string
  description: string
  created_at: number
  default_version: string
  latest_version: string
}
type SkillListResource = {
  object: 'list'
  data: SkillResource[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
}
type DeletedSkillResource = { object: 'skill.deleted'; deleted: boolean; id: string }
type SetDefaultSkillVersionBodyInput = { default_version: string }
type CreateSkillVersionBodyInput = { files: File[] | File; default?: boolean }
type SkillVersionResource = {
  object: 'skill.version'
  id: string
  skill_id: string
  version: string
  created_at: number
  name: string
  description: string
}
type SkillVersionListResource = {
  object: 'list'
  data: SkillVersionResource[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
}
type DeletedSkillVersionResource = {
  object: 'skill.version.deleted'
  deleted: boolean
  id: string
  version: string
}
type ChatkitWorkflowTracing = { enabled: boolean }
type ChatkitWorkflow = {
  id: string
  version: string | null
  state_variables: { [key: string]: string | number | boolean | number | null } | null
  tracing: ChatkitWorkflowTracing
}
type ChatSessionRateLimits = { max_requests_per_1_minute: number }
type ChatSessionStatus = 'active' | 'expired' | 'cancelled'
type ChatSessionAutomaticThreadTitling = { enabled: boolean }
type ChatSessionFileUpload = {
  enabled: boolean
  max_file_size: number | null
  max_files: number | null
}
type ChatSessionHistory = { enabled: boolean; recent_threads: number | null }
type ChatSessionChatkitConfiguration = {
  automatic_thread_titling: ChatSessionAutomaticThreadTitling
  file_upload: ChatSessionFileUpload
  history: ChatSessionHistory
}
type ChatSessionResource = {
  id: string
  object: 'chatkit.session'
  expires_at: number
  client_secret: string
  workflow: ChatkitWorkflow
  user: string
  rate_limits: ChatSessionRateLimits
  max_requests_per_1_minute: number
  status: ChatSessionStatus
  chatkit_configuration: ChatSessionChatkitConfiguration
}
type WorkflowTracingParamInput = { enabled?: boolean }
type WorkflowParamInput = {
  id: string
  version?: string
  state_variables?: { [key: string]: string | number | boolean | number }
  tracing?: WorkflowTracingParamInput
}
type ExpiresAfterParamInput = { anchor: 'created_at'; seconds: bigint }
type RateLimitsParamInput = { max_requests_per_1_minute?: number }
type AutomaticThreadTitlingParamInput = { enabled?: boolean }
type FileUploadParamInput = { enabled?: boolean; max_file_size?: number; max_files?: number }
type HistoryParamInput = { enabled?: boolean; recent_threads?: number }
type ChatkitConfigurationParamInput = {
  automatic_thread_titling?: AutomaticThreadTitlingParamInput
  file_upload?: FileUploadParamInput
  history?: HistoryParamInput
}
type CreateChatSessionBodyInput = {
  workflow: WorkflowParamInput
  user: string
  expires_after?: ExpiresAfterParamInput
  rate_limits?: RateLimitsParamInput
  chatkit_configuration?: ChatkitConfigurationParamInput
}
type UserMessageInputText = { type: 'input_text'; text: string }
type UserMessageQuotedText = { type: 'quoted_text'; text: string }
type AttachmentType = 'image' | 'file'
type Attachment = {
  type: AttachmentType
  id: string
  name: string
  mime_type: string
  preview_url: string | null
}
type ToolChoice = { id: string }
type InferenceOptions = { tool_choice: ToolChoice | null; model: string | null }
type UserMessageItem = {
  id: string
  object: 'chatkit.thread_item'
  created_at: number
  thread_id: string
  type: 'chatkit.user_message'
  content: (UserMessageInputText | UserMessageQuotedText)[]
  attachments: Attachment[]
  inference_options: InferenceOptions | null
}
type FileAnnotationSource = { type: 'file'; filename: string }
type FileAnnotation = { type: 'file'; source: FileAnnotationSource }
type UrlAnnotationSource = { type: 'url'; url: string }
type UrlAnnotation = { type: 'url'; source: UrlAnnotationSource }
type ResponseOutputText = {
  type: 'output_text'
  text: string
  annotations: (FileAnnotation | UrlAnnotation)[]
}
type AssistantMessageItem = {
  id: string
  object: 'chatkit.thread_item'
  created_at: number
  thread_id: string
  type: 'chatkit.assistant_message'
  content: ResponseOutputText[]
}
type WidgetMessageItem = {
  id: string
  object: 'chatkit.thread_item'
  created_at: number
  thread_id: string
  type: 'chatkit.widget'
  widget: string
}
type ClientToolCallStatus = 'in_progress' | 'completed'
type ClientToolCallItem = {
  id: string
  object: 'chatkit.thread_item'
  created_at: number
  thread_id: string
  type: 'chatkit.client_tool_call'
  status: ClientToolCallStatus
  call_id: string
  name: string
  arguments: string
  output: string | null
}
type TaskType = 'custom' | 'thought'
type TaskItem = {
  id: string
  object: 'chatkit.thread_item'
  created_at: number
  thread_id: string
  type: 'chatkit.task'
  task_type: TaskType
  heading: string | null
  summary: string | null
}
type TaskGroupTask = { type: TaskType; heading: string | null; summary: string | null }
type TaskGroupItem = {
  id: string
  object: 'chatkit.thread_item'
  created_at: number
  thread_id: string
  type: 'chatkit.task_group'
  tasks: TaskGroupTask[]
}
type ThreadItem =
  | UserMessageItem
  | AssistantMessageItem
  | WidgetMessageItem
  | ClientToolCallItem
  | TaskItem
  | TaskGroupItem
type ThreadItemListResource = {
  object: 'list'
  data: ThreadItem[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
}
type ActiveStatus = { type: 'active' }
type LockedStatus = { type: 'locked'; reason: string | null }
type ClosedStatus = { type: 'closed'; reason: string | null }
type ThreadResource = {
  id: string
  object: 'chatkit.thread'
  created_at: number
  title: string | null
  status: ActiveStatus | LockedStatus | ClosedStatus
  user: string
}
type DeletedThreadResource = { id: string; object: 'chatkit.thread.deleted'; deleted: boolean }
type ThreadListResource = {
  object: 'list'
  data: ThreadResource[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
}
type DecisionInputTextInput = {
  type: 'input_text'
  text: string
  prompt_cache_breakpoint?: { mode: 'explicit' } | null
}
type ImageDetailParamInput = 'low' | 'high' | 'auto' | 'original'
type DecisionInputImageInput = {
  image_url: string
  detail?: ImageDetailParamInput | null
  prompt_cache_breakpoint?: { mode: 'explicit' } | null
  type: 'input_image'
}
type DecisionInputJsonInput = {
  type: 'input_json'
  data: { [key: string]: any | null } | { [key: string]: any | null }[]
}
type DecisionInputContentPartsInput = (
  | DecisionInputTextInput
  | DecisionInputImageInput
  | DecisionInputJsonInput
)[]
type DecisionInputContentInput = string | DecisionInputContentPartsInput
type DecisionInputUserMessageInput = {
  role: 'user'
  content: DecisionInputContentInput
  type?: 'message'
}
type DecisionInputDeveloperContentPartsInput = DecisionInputTextInput[]
type DecisionInputDeveloperContentInput = string | DecisionInputDeveloperContentPartsInput
type DecisionInputDeveloperMessageInput = {
  role: 'developer'
  content: DecisionInputDeveloperContentInput
  type?: 'message'
}
type DecisionInputSystemMessageInput = {
  role: 'system'
  content: DecisionInputDeveloperContentInput
  type?: 'message'
}
type DecisionInputOutputTextInput = { type: 'output_text'; text: string }
type DecisionInputRefusalInput = { type: 'refusal'; refusal: string }
type DecisionInputAssistantContentPartsInput = (
  | DecisionInputOutputTextInput
  | DecisionInputRefusalInput
)[]
type DecisionInputAssistantContentInput = string | DecisionInputAssistantContentPartsInput
type MessagePhaseParamInput = 'commentary' | 'final_answer'
type DecisionInputAssistantMessageInput = {
  role: 'assistant'
  content: DecisionInputAssistantContentInput
  phase?: MessagePhaseParamInput | null
  type?: 'message'
}
type DecisionInputMessageInput =
  | DecisionInputUserMessageInput
  | DecisionInputDeveloperMessageInput
  | DecisionInputSystemMessageInput
  | DecisionInputAssistantMessageInput
type FunctionCallStatusParamInput = 'in_progress' | 'completed' | 'incomplete'
type DecisionInputFunctionCallInput = {
  id?: string | null
  call_id: string
  namespace?: string | null
  name: string
  arguments: string
  status?: FunctionCallStatusParamInput | null
  type: 'function_call'
}
type DecisionInputToolOutputContentPartsInput = (DecisionInputTextInput | DecisionInputImageInput)[]
type DecisionInputToolOutputContentInput = string | DecisionInputToolOutputContentPartsInput
type DecisionInputFunctionCallOutputInput = {
  id?: string | null
  call_id: string
  output: DecisionInputToolOutputContentInput
  status?: FunctionCallStatusParamInput | null
  type: 'function_call_output'
}
type DecisionInputCustomToolCallInput = {
  id?: string | null
  call_id: string
  namespace?: string | null
  name: string
  input: string
  status?: FunctionCallStatusParamInput | null
  type: 'custom_tool_call'
}
type DecisionInputCustomToolCallOutputInput = {
  id?: string | null
  call_id: string
  output: DecisionInputToolOutputContentInput
  status?: FunctionCallStatusParamInput | null
  type: 'custom_tool_call_output'
}
type DecisionInputInput =
  | string
  | (
      | DecisionInputMessageInput
      | DecisionInputFunctionCallInput
      | DecisionInputFunctionCallOutputInput
      | DecisionInputCustomToolCallInput
      | DecisionInputCustomToolCallOutputInput
    )[]
type DecisionQuestionInputTextInput = { type: 'input_text'; text: string }
type DecisionQuestionInputImageInput = {
  image_url: string
  detail?: ImageDetailParamInput | null
  type: 'input_image'
}
type DecisionQuestionInputPartInput =
  | DecisionQuestionInputTextInput
  | DecisionQuestionInputImageInput
  | DecisionInputJsonInput
type QuestionParamPredicateInput = {
  type: 'predicate'
  name?: string
  instructions: string | DecisionQuestionInputPartInput[]
}
type ChoiceValueParamInput = string | boolean
type ChoiceOptionParamInput = { value: ChoiceValueParamInput; description?: string }
type QuestionParamChoiceInput = {
  type: 'choice'
  name?: string
  instructions: string | DecisionQuestionInputPartInput[]
  choices: ChoiceOptionParamInput[]
}
type ScoreLevelParamInput = { label: string; description?: string }
type QuestionParamScoreInput = {
  type: 'score'
  name?: string
  instructions: string | DecisionQuestionInputPartInput[]
  levels: ScoreLevelParamInput[]
}
type QuestionParamInput =
  | QuestionParamPredicateInput
  | QuestionParamChoiceInput
  | QuestionParamScoreInput
type DecisionRequestInput = {
  model: string
  input: DecisionInputInput
  questions: QuestionParamInput[]
  safety_identifier?: string | null
  prompt_cache_key?: string | null
  prompt_cache_options?: { ttl?: '30m'; mode?: 'implicit' | 'explicit' | null } | null
}
type AnswerResourcePredicate = { type: 'predicate'; name: string | null; probability: number }
type ChoiceValueResource = string | boolean
type ChoiceProbabilityResource = { value: ChoiceValueResource; probability: number }
type AnswerResourceChoice = {
  type: 'choice'
  name: string | null
  choice: ChoiceValueResource
  probabilities: ChoiceProbabilityResource[]
  confidence: number
}
type ScoreProbabilityResource = { value: bigint; label: string; probability: number }
type AnswerResourceScore = {
  type: 'score'
  name: string | null
  score: number
  probabilities: ScoreProbabilityResource[]
  confidence: number
}
type AnswerResourceRefusal = { type: 'refusal'; name: string | null }
type AnswerResource =
  | AnswerResourcePredicate
  | AnswerResourceChoice
  | AnswerResourceScore
  | AnswerResourceRefusal
type InputTokensDetailsResource = { cached_tokens: bigint; cache_write_tokens: bigint }
type OutputTokensDetailsResource = { reasoning_tokens: bigint }
type ResponseUsageResource = {
  input_tokens: bigint
  input_tokens_details: InputTokensDetailsResource
  output_tokens: bigint
  output_tokens_details: OutputTokensDetailsResource
  total_tokens: bigint
}
type DecisionResponse = { model: string; answers: AnswerResource[]; usage: ResponseUsageResource }
type ExperimentalConfigOverridesParamInput = { time_awareness?: boolean }
type ReasoningEffortParamInput = 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | 'max'
type ReasoningSummaryParamInput = 'concise' | 'detailed' | 'auto'
type ReasoningParamInput = {
  effort?: ReasoningEffortParamInput | null
  summary?: ReasoningSummaryParamInput | null
}
type TextFormatParamTextInput = { type: 'text' }
type TextFormatParamJsonSchemaInput = { type: 'json_schema'; schema: { [key: string]: any } }
type TextFormatParamInput = TextFormatParamTextInput | TextFormatParamJsonSchemaInput
type VerbosityParamInput = 'low' | 'medium' | 'high'
type TextParamInput = {
  format?: TextFormatParamInput | null
  verbosity?: VerbosityParamInput | null
}
type ServiceTierParamInput = 'auto' | 'default' | 'flex' | 'priority' | 'fast' | 'ultrafast'
type MultiAgentConfigCurrentParamInput = { enabled: boolean; max_concurrent_subagents?: bigint }
type CompactionParamInput = { async?: boolean | null }
type AgentToolConfigParamFunctionInput = {
  type: 'function'
  name: string
  description: string
  parameters: { [key: string]: any }
  defer_loading?: boolean
  async?: boolean
}
type AgentToolConfigParamToolSearchInput = { type: 'tool_search' }
type AgentToolConfigParamProgrammaticToolCallingInput = {
  type: 'programmatic_tool_calling'
  enabled?: boolean
}
type McpTransportConfigParamHttpInput = {
  type: 'http'
  server_url: string
  authorization?: string | null
  headers?: { [key: string]: string } | null
}
type McpTransportConfigParamStdioInput = {
  type: 'stdio'
  command: string
  args?: string[] | null
  cwd: string
  env?: { [key: string]: string } | null
  env_vars?: string[] | null
}
type McpTransportConfigParamInput =
  | McpTransportConfigParamHttpInput
  | McpTransportConfigParamStdioInput
type McpConnectionOriginParamInput = 'service' | 'environment'
type AgentToolConfigParamMcpInput = {
  type: 'mcp'
  server_label: string
  credential_id?: string | null
  transport: McpTransportConfigParamInput
  request_metadata?: { [key: string]: any } | null
  allowed_tools?: string[] | null
  required?: boolean
  connection_origin?: McpConnectionOriginParamInput | null
}
type WebSearchModeParamInput = 'disabled' | 'cached' | 'live'
type WebSearchContextSizeParamInput = 'low' | 'medium' | 'high'
type WebSearchLocationParamInput = {
  country?: string | null
  region?: string | null
  city?: string | null
  timezone?: string | null
}
type AgentToolConfigParamWebSearchInput = {
  type: 'web_search'
  mode?: WebSearchModeParamInput | null
  context_size?: WebSearchContextSizeParamInput | null
  allowed_domains?: string[] | null
  location?: WebSearchLocationParamInput | null
}
type AgentToolConfigParamComputerUseInput = { type: 'computer_use'; include_screenshots?: boolean }
type AgentToolConfigParamAutomationsInput = { type: 'automations' }
type AgentToolConfigParamInput =
  | AgentToolConfigParamFunctionInput
  | AgentToolConfigParamToolSearchInput
  | AgentToolConfigParamProgrammaticToolCallingInput
  | AgentToolConfigParamMcpInput
  | AgentToolConfigParamWebSearchInput
  | AgentToolConfigParamComputerUseInput
  | AgentToolConfigParamAutomationsInput
type SessionAgentConfigParamInput = {
  experimental?: ExperimentalConfigOverridesParamInput
  model?: string
  reasoning?: ReasoningParamInput | null
  text?: TextParamInput | null
  service_tier?: ServiceTierParamInput | null
  instructions?: string | null
  multi_agent?: MultiAgentConfigCurrentParamInput | null
  compaction?: CompactionParamInput | null
  tools?: AgentToolConfigParamInput[] | null
}
type EnvironmentParamNoneInput = { type: 'none' }
type EnvironmentPackagesParamInput = {
  python?: string[] | null
  system?: string[] | null
  npm?: string[] | null
}
type SetupCommandParamInput = { command: string; cwd?: string | null }
type NetworkAccessParamInput = 'enabled' | 'disabled' | 'restricted'
type NetworkPolicyParamInput = {
  access: NetworkAccessParamInput
  allowed_domains?: string[] | null
  blocked_domains?: string[] | null
}
type DesktopParamInput = { enabled: boolean }
type HostedSkillParamSkillReferenceInput = {
  type: 'skill_reference'
  skill_id: string
  version?: string | null
}
type InlineCapabilitySourceParamBase64Input = {
  type: 'base64'
  media_type: 'application/zip'
  data: string
}
type InlineCapabilitySourceParamInput = InlineCapabilitySourceParamBase64Input
type HostedSkillParamInlineInput = {
  type: 'inline'
  name: string
  description: string
  source: InlineCapabilitySourceParamInput
}
type HostedSkillParamInput = HostedSkillParamSkillReferenceInput | HostedSkillParamInlineInput
type HostedPluginParamInlineInput = {
  type: 'inline'
  name: string
  description: string
  source: InlineCapabilitySourceParamInput
}
type HostedPluginParamInput = HostedPluginParamInlineInput
type HostedEnvironmentFileParamFileIdInput = { type: 'file_id'; file_id: string; path: string }
type HostedEnvironmentFileParamInlineInput = { type: 'inline'; data: string; path: string }
type HostedEnvironmentFileParamInput =
  | HostedEnvironmentFileParamFileIdInput
  | HostedEnvironmentFileParamInlineInput
type ContainerSizeParamInput = 'small' | 'medium' | 'large'
type EnvironmentParamOpenaiHostedInput = {
  type: 'openai_hosted'
  packages?: EnvironmentPackagesParamInput | null
  setup_commands?: SetupCommandParamInput[] | null
  network?: NetworkPolicyParamInput | null
  desktop?: DesktopParamInput | null
  env?: { [key: string]: string } | null
  capability_directories?: string[] | null
  skills?: HostedSkillParamInput[] | null
  plugins?: HostedPluginParamInput[] | null
  files?: HostedEnvironmentFileParamInput[] | null
  environment_id?: string
  environment_template_id?: string
  container_size?: ContainerSizeParamInput
}
type EnvironmentParamSelfHostedInput = {
  type: 'self_hosted'
  capability_directories?: string[] | null
  workspace_directory: string
}
type EnvironmentParamInput =
  | EnvironmentParamNoneInput
  | EnvironmentParamOpenaiHostedInput
  | EnvironmentParamSelfHostedInput
type InputContentParamInputTextInput = { type: 'input_text'; text: string }
type InputContentParamInputImageInput = { type: 'input_image'; image_url: string }
type InputContentParamInput = InputContentParamInputTextInput | InputContentParamInputImageInput
type InputMessageParamInput = { type?: 'message'; role: 'user'; content: InputContentParamInput[] }
type AutomationTargetParamNewSessionInput = {
  type: 'new_session'
  agent?: SessionAgentConfigParamInput
  agent_id?: string
  environment: EnvironmentParamInput
  input: InputMessageParamInput[]
  vault_ids?: string[] | null
  metadata?: { [key: string]: string } | null
}
type AutomationTargetParamExistingSessionInput = {
  type: 'existing_session'
  session_id: string
  instructions: string
}
type AutomationTargetParamInput =
  | AutomationTargetParamNewSessionInput
  | AutomationTargetParamExistingSessionInput
type CreateAutomationParamsPeriodicInput = {
  type: 'periodic'
  name: string
  target: AutomationTargetParamInput
  metadata?: { [key: string]: string }
  expression: string
  timezone: string
}
type CreateAutomationParamsOnceInput = {
  type: 'once'
  name: string
  target: AutomationTargetParamInput
  metadata?: { [key: string]: string }
  run_at: bigint
}
type CreateAutomationParamsInput =
  | CreateAutomationParamsPeriodicInput
  | CreateAutomationParamsOnceInput
type ReasoningEffortResource = 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | 'max'
type ReasoningSummaryResource = 'concise' | 'detailed' | 'auto'
type ReasoningResource = {
  effort: ReasoningEffortResource | null
  summary: ReasoningSummaryResource | null
}
type TextFormatResourceText = { type: 'text' }
type TextFormatResourceJsonSchema = { type: 'json_schema'; schema: { [key: string]: any } }
type TextFormatResource = TextFormatResourceText | TextFormatResourceJsonSchema
type VerbosityResource = 'low' | 'medium' | 'high'
type TextResource = { format: TextFormatResource; verbosity: VerbosityResource }
type ServiceTierResource = 'auto' | 'default' | 'flex' | 'priority' | 'fast' | 'ultrafast'
type AgentToolResourceFunction = {
  type: 'function'
  name: string
  description: string
  parameters: { [key: string]: any }
  defer_loading: boolean
  async?: boolean | undefined
}
type AgentToolResourceProgrammaticToolCalling = {
  type: 'programmatic_tool_calling'
  enabled: boolean
}
type McpTransportResourceHttp = { type: 'http'; server_url: string }
type McpTransportResourceStdio = {
  type: 'stdio'
  command: string
  args: string[]
  cwd: string
  env_vars: string[]
}
type McpTransportResource = McpTransportResourceHttp | McpTransportResourceStdio
type McpConnectionOriginResource = 'service' | 'environment'
type AgentToolResourceMcp = {
  type: 'mcp'
  server_label: string
  credential_id: string | null
  transport: McpTransportResource
  request_metadata: { [key: string]: any }
  allowed_tools: string[] | null
  required: boolean
  connection_origin: McpConnectionOriginResource
}
type WebSearchModeResource = 'disabled' | 'cached' | 'live'
type WebSearchContextSizeResource = 'low' | 'medium' | 'high'
type WebSearchLocationResource = {
  country: string | null
  region: string | null
  city: string | null
  timezone: string | null
}
type AgentToolResourceWebSearch = {
  type: 'web_search'
  mode: WebSearchModeResource
  context_size: WebSearchContextSizeResource
  allowed_domains: string[] | null
  location: WebSearchLocationResource | null
}
type AgentToolResourceComputerUse = { type: 'computer_use'; include_screenshots: boolean }
type AgentToolResourceAutomations = { type: 'automations' }
type AgentToolResource =
  | AgentToolResourceFunction
  | AgentToolResourceProgrammaticToolCalling
  | AgentToolResourceMcp
  | AgentToolResourceWebSearch
  | AgentToolResourceComputerUse
  | AgentToolResourceAutomations
type MultiAgentConfigResource = { enabled: boolean; max_concurrent_subagents: bigint | null }
type CompactionResource = { async: boolean }
type ExperimentalConfigResource = { time_awareness: boolean }
type AutomationAgentConfigResource = {
  model: string
  reasoning: ReasoningResource
  text: TextResource
  service_tier: ServiceTierResource
  instructions: string | null
  tools: AgentToolResource[]
  multi_agent: MultiAgentConfigResource
  compaction?: CompactionResource | undefined
  experimental?: ExperimentalConfigResource | undefined
}
type AutomationEnvironmentResourceNone = { type: 'none' }
type ContainerSizeResource = 'small' | 'medium' | 'large'
type EnvironmentPackagesResource = { python: string[]; system: string[]; npm: string[] }
type NetworkAccessResource = 'enabled' | 'disabled' | 'restricted'
type NetworkPolicyResource = { access: NetworkAccessResource; allowed_domains: string[] }
type DesktopResource = { enabled: boolean }
type HostedTemplateSkillResourceSkillReference = {
  type: 'skill_reference'
  skill_id: string
  version: string | null
}
type HostedTemplateSkillResourceInline = { type: 'inline'; name: string; description: string }
type HostedTemplateSkillResource =
  | HostedTemplateSkillResourceSkillReference
  | HostedTemplateSkillResourceInline
type HostedPluginResourceInline = { type: 'inline'; name: string; description: string }
type HostedPluginResource = HostedPluginResourceInline
type HostedTemplateFileResourceFileId = { type: 'file_id'; file_id: string; path: string }
type HostedTemplateFileResourceInline = { type: 'inline'; path: string; size_bytes: bigint }
type HostedTemplateFileResource =
  | HostedTemplateFileResourceFileId
  | HostedTemplateFileResourceInline
type AutomationEnvironmentResourceOpenaiHosted = {
  type: 'openai_hosted'
  environment_id: string | null
  environment_template_id: string | null
  container_size: ContainerSizeResource | null
  packages: EnvironmentPackagesResource | null
  network: NetworkPolicyResource | null
  desktop: DesktopResource | null
  capability_directories: string[] | null
  skills: HostedTemplateSkillResource[] | null
  plugins: HostedPluginResource[] | null
  files: HostedTemplateFileResource[] | null
}
type AutomationEnvironmentResourceSelfHosted = {
  type: 'self_hosted'
  environment_id: string | null
  workspace_directory: string
  capability_directories: string[]
}
type AutomationEnvironmentResource =
  | AutomationEnvironmentResourceNone
  | AutomationEnvironmentResourceOpenaiHosted
  | AutomationEnvironmentResourceSelfHosted
type InputContentResourceInputText = { type: 'input_text'; text: string }
type InputContentResourceInputImage = { type: 'input_image'; image_url: string }
type InputContentResource = InputContentResourceInputText | InputContentResourceInputImage
type InputMessageResource_2 = { type: 'message'; role: 'user'; content: InputContentResource[] }
type AutomationTargetResourceNewSession = {
  type: 'new_session'
  agent_id: string | null
  agent: AutomationAgentConfigResource | null
  environment: AutomationEnvironmentResource
  input: InputMessageResource_2[]
  vault_ids: string[]
  metadata: { [key: string]: string }
}
type AutomationTargetResourceExistingSession = {
  type: 'existing_session'
  session_id: string
  instructions: string
}
type AutomationTargetResource =
  | AutomationTargetResourceNewSession
  | AutomationTargetResourceExistingSession
type AutomationCreatedByResourceDeveloper = { type: 'developer' }
type AutomationCreatedByResourceAgent = { type: 'agent'; session_id: string; tool_call_id: string }
type AutomationCreatedByResource =
  | AutomationCreatedByResourceDeveloper
  | AutomationCreatedByResourceAgent
type PeriodicAutomationStatusResource = 'active' | 'paused'
type AutomationResourcePeriodic = {
  type: 'periodic'
  id: string
  object: 'agent.automation'
  created_at: bigint
  name: string
  target: AutomationTargetResource
  metadata: { [key: string]: string }
  created_by: AutomationCreatedByResource
  pause_reason?: ('target_session_failed' | null) | undefined
  expression: string
  timezone: string
  status: PeriodicAutomationStatusResource
}
type OnceAutomationStatusResource = 'active' | 'paused' | 'completed'
type AutomationResourceOnce = {
  type: 'once'
  id: string
  object: 'agent.automation'
  created_at: bigint
  name: string
  target: AutomationTargetResource
  metadata: { [key: string]: string }
  created_by: AutomationCreatedByResource
  pause_reason?: ('target_session_failed' | null) | undefined
  run_at: bigint
  status: OnceAutomationStatusResource
}
type AutomationResource = AutomationResourcePeriodic | AutomationResourceOnce
type ErrorBodyResource = { type: string; code: string; message: string; param: string | null }
type ErrorResponse_2 = { error: ErrorBodyResource }
type ListOrderParamInput = 'asc' | 'desc'
type UpdateAutomationParamsInput = {
  name?: string
  target?: AutomationTargetParamInput
  metadata?: { [key: string]: string }
  expression?: string
  timezone?: string
  run_at?: bigint
}
type DeletedAutomationResource = {
  id: string
  object: 'agent.automation.deleted'
  deleted: boolean
}
type AutomationInvocationSourceResourceManual = { type: 'manual' }
type AutomationInvocationSourceResourceAutomation = {
  type: 'automation'
  automation: AutomationResource
}
type AutomationInvocationSourceResource =
  | AutomationInvocationSourceResourceManual
  | AutomationInvocationSourceResourceAutomation
type AutomationInvocationStatusResource = 'queued' | 'completed' | 'failed' | 'skipped'
type AutomationInvocationErrorResource = { code: string; message: string }
type AutomationInvocationResource = {
  id: string
  object: 'agent.automation.invocation'
  automation_id: string
  created_at: bigint
  source: AutomationInvocationSourceResource
  scheduled_at: bigint | null
  session_id: string | null
  status: AutomationInvocationStatusResource
  skip_reason: 'pending_delivery' | null
  error: AutomationInvocationErrorResource | null
}
type EnvironmentTypeParamInput = 'openai_hosted'
type EnvironmentTypeResource = 'openai_hosted' | 'self_hosted'
type EnvironmentStatusResource =
  | 'pending'
  | 'ready'
  | 'connected'
  | 'disconnected'
  | 'suspended'
  | 'expired'
  | 'failed'
type HostedEnvironmentFileResourceFileId = {
  type: 'file_id'
  id: string
  file_id: string
  path: string
  size_bytes: bigint
}
type HostedEnvironmentFileResourceInline = {
  type: 'inline'
  id: string
  path: string
  size_bytes: bigint
}
type HostedEnvironmentFileResource =
  | HostedEnvironmentFileResourceFileId
  | HostedEnvironmentFileResourceInline
type HostedSkillResourceSkillReference = {
  type: 'skill_reference'
  skill_id: string
  version: string
  name: string
  description: string
}
type HostedSkillResourceInline = { type: 'inline'; name: string; description: string }
type HostedSkillResource = HostedSkillResourceSkillReference | HostedSkillResourceInline
type PublicEnvironmentResource = {
  type: EnvironmentTypeResource
  id: string
  object: 'agent.environment'
  status: EnvironmentStatusResource
  files: HostedEnvironmentFileResource[]
  skills: HostedSkillResource[]
  plugins: HostedPluginResource[]
}
type AgentEnvironmentListResource = {
  object: 'list'
  data: PublicEnvironmentResource[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
}
type CreateEnvironmentParamOpenaiHostedInput = {
  type: 'openai_hosted'
  packages?: EnvironmentPackagesParamInput | null
  setup_commands?: SetupCommandParamInput[] | null
  network?: NetworkPolicyParamInput | null
  desktop?: DesktopParamInput | null
  env?: { [key: string]: string } | null
  capability_directories?: string[] | null
  skills?: HostedSkillParamInput[] | null
  plugins?: HostedPluginParamInput[] | null
  files?: HostedEnvironmentFileParamInput[] | null
  environment_template_id?: string
}
type CreateEnvironmentParamInput = CreateEnvironmentParamOpenaiHostedInput
type CreateAgentEnvironmentParamsInput = {
  environment: CreateEnvironmentParamInput
  vault_ids?: string[] | null
}
type EnvironmentFilePageObjectResource = 'page'
type EnvironmentFileResource = {
  object: 'agent.environment.file'
  environment_id: string
  path: string
  size_bytes: bigint
}
type EnvironmentFileListResource = {
  object: EnvironmentFilePageObjectResource
  data: EnvironmentFileResource[]
  next: string | null
  has_more: boolean
}
type SubagentObjectResource = 'agent.session.subagent'
type OutputTextResource = { type: 'output_text'; text: string }
type EncryptedContentResource = { type: 'encrypted_content'; encrypted_content: string }
type AgentContentResource = OutputTextResource | EncryptedContentResource
type SubagentStatusResource = 'active' | 'closed'
type SubagentResource = {
  id: string
  object: SubagentObjectResource
  session_id: string
  name: string | null
  instructions: AgentContentResource[] | null
  parent_agent_id: string
  status: SubagentStatusResource
  opened_at: bigint
  closed_at: bigint | null
}
type SessionMessageRoleResource = 'user' | 'assistant'
type MessageContentResourceInputText = { type: 'input_text'; text: string }
type MessageContentResourceInputImage = { type: 'input_image'; image_url: string }
type MessageContentResourceOutputText = { type: 'output_text'; text: string }
type MessageContentResource =
  | MessageContentResourceInputText
  | MessageContentResourceInputImage
  | MessageContentResourceOutputText
type OutputItemStatusResource = 'in_progress' | 'completed' | 'incomplete'
type MessagePhaseResource = 'commentary' | 'final_answer'
type MessageItemResource = {
  type: 'message'
  id: string | null
  turn_id: string
  role: SessionMessageRoleResource
  content: MessageContentResource[]
  status: OutputItemStatusResource
  phase: MessagePhaseResource | null
}
type SummaryTextResource = { type: 'summary_text'; text: string }
type ReasoningItemResource = {
  type: 'reasoning'
  id: string
  turn_id: string
  summary: SummaryTextResource[]
  status: OutputItemStatusResource | null
}
type FunctionCallStatusResource = 'in_progress' | 'completed' | 'failed' | 'incomplete'
type FunctionCallItemResource = {
  type: 'function_call'
  id: string
  turn_id: string
  call_id: string
  name: string
  arguments: any
  status: FunctionCallStatusResource
}
type FunctionCallOutputResource = string | InputContentResource[]
type FunctionCallOutputItemResource = {
  id: string
  turn_id: string
  type: 'function_call_output'
  call_id: string
  status: FunctionCallStatusResource
  output: FunctionCallOutputResource | null
  error: string | null
}
type AgentMessageItemResource = {
  id: string
  turn_id: string
  type: 'agent_message'
  sender_agent_id: string
  recipient_agent_id: string
  content: AgentContentResource[]
}
type McpCallItemResource = {
  type: 'mcp_call'
  id: string
  turn_id: string
  server_label: string
  name: string
  arguments: any
  status: FunctionCallStatusResource
  output: any | null
  error: any | null
}
type ComputerScreenshotResource = { type: 'computer_screenshot'; image_url: string }
type ComputerUseCallItemResource = {
  type: 'computer_use_call'
  id: string
  turn_id: string
  title: string | null
  status: FunctionCallStatusResource
  output: ComputerScreenshotResource | null
}
type BrowserAuthenticationFieldResource = {
  id: string
  label: string
  type: string
  required: boolean
}
type BrowserAuthenticationOptionResource = { id: string; label: string; field_ids: string[] }
type BrowserAuthenticationHistoryRequestKindResourceBrowserAuthentication = {
  type: 'browser_authentication'
  reason: string | null
  credential_origin: string | null
  fields: BrowserAuthenticationFieldResource[]
  options: BrowserAuthenticationOptionResource[]
}
type BrowserAuthenticationHistoryRequestKindResource =
  BrowserAuthenticationHistoryRequestKindResourceBrowserAuthentication
type BrowserAuthenticationRequestItemResource = {
  turn_id: string
  request_id: string
  request: BrowserAuthenticationHistoryRequestKindResource
  id: string
  type: 'computer_use_approval_request'
}
type ComputerUseApprovalResponseKindResourceBrowserAuthenticationSubmitResource = {
  type: 'browser_authentication'
  action: 'submit'
  selected_option: string | null
}
type ComputerUseApprovalResponseKindResourceBrowserAuthenticationCancelResource = {
  type: 'browser_authentication'
  action: 'cancel'
}
type ComputerUseApprovalResponseKindResource =
  | ComputerUseApprovalResponseKindResourceBrowserAuthenticationSubmitResource
  | ComputerUseApprovalResponseKindResourceBrowserAuthenticationCancelResource
type ComputerUseApprovalRequestResultItemResource = {
  id: string
  type: 'computer_use_approval_request_result'
  turn_id: string
  request_id: string
  response: ComputerUseApprovalResponseKindResource
}
type WebSearchActionResourceSearch = {
  type: 'search'
  query: string | null
  queries: string[] | null
}
type WebSearchActionResourceOpenPage = { type: 'open_page'; url: string | null }
type WebSearchActionResourceFindInPage = {
  type: 'find_in_page'
  url: string | null
  pattern: string | null
}
type WebSearchActionResourceOther = { type: 'other' }
type WebSearchActionResource =
  | WebSearchActionResourceSearch
  | WebSearchActionResourceOpenPage
  | WebSearchActionResourceFindInPage
  | WebSearchActionResourceOther
type WebSearchCallItemResource = {
  type: 'web_search_call'
  id: string
  turn_id: string
  status: OutputItemStatusResource
  action: WebSearchActionResource | null
}
type CommandExecutionItemResource = {
  type: 'command_execution'
  id: string
  turn_id: string
  command: string
  cwd: string | null
  status: FunctionCallStatusResource
  output: string | null
  exit_code: bigint | null
  duration_ms: bigint | null
}
type CreateSubagentCallItemResource = {
  type: 'create_subagent_call'
  id: string
  turn_id: string
  status: FunctionCallStatusResource
  agent_id: string
  content: AgentContentResource[]
  model: string | null
  reasoning_effort: string | null
}
type SendSubagentInputCallItemResource = {
  type: 'send_subagent_input_call'
  id: string
  turn_id: string
  status: FunctionCallStatusResource
  sender_agent_id: string
  recipient_agent_id: string
  content: AgentContentResource[]
}
type ResumeSubagentCallItemResource = {
  type: 'resume_subagent_call'
  id: string
  turn_id: string
  status: FunctionCallStatusResource
  sender_agent_id: string
  recipient_agent_id: string
}
type WaitForSubagentsCallItemResource = {
  type: 'wait_for_subagents_call'
  id: string
  turn_id: string
  status: FunctionCallStatusResource
  sender_agent_id: string
  recipient_agent_ids: string[]
}
type InterruptSubagentCallItemResource = {
  type: 'interrupt_subagent_call'
  id: string
  turn_id: string
  status: FunctionCallStatusResource
  sender_agent_id: string
  recipient_agent_id: string
}
type CloseSubagentCallItemResource = {
  type: 'close_subagent_call'
  id: string
  turn_id: string
  status: FunctionCallStatusResource
  sender_agent_id: string
  recipient_agent_id: string
}
type SessionTurnItemResource =
  | MessageItemResource
  | ReasoningItemResource
  | FunctionCallItemResource
  | FunctionCallOutputItemResource
  | AgentMessageItemResource
  | McpCallItemResource
  | ComputerUseCallItemResource
  | BrowserAuthenticationRequestItemResource
  | ComputerUseApprovalRequestResultItemResource
  | WebSearchCallItemResource
  | CommandExecutionItemResource
  | CreateSubagentCallItemResource
  | SendSubagentInputCallItemResource
  | ResumeSubagentCallItemResource
  | WaitForSubagentsCallItemResource
  | InterruptSubagentCallItemResource
  | CloseSubagentCallItemResource
type SessionItemListResource = {
  object: 'list'
  data: SessionTurnItemResource[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
}
type PromptCacheTtlResource = '30m' | '12h'
type PromptCacheOptionsResource = { ttl: PromptCacheTtlResource }
type TurnObjectResource = 'agent.session.turn'
type TurnStatusResource =
  | 'queued'
  | 'in_progress'
  | 'waiting'
  | 'completed'
  | 'failed'
  | 'cancelled'
type SessionTurnErrorCodeResource =
  | 'context_length_exceeded'
  | 'max_output_tokens'
  | 'session_budget_exceeded'
  | 'usage_limit_exceeded'
  | 'api_key_spend_limit_exceeded'
  | 'project_spend_limit_exceeded'
  | 'organization_spend_limit_exceeded'
  | 'organization_usage_limit_exceeded'
  | 'billing_not_active'
  | 'credit_balance_exhausted'
  | 'rate_limit_exceeded'
  | 'flex_unavailable'
  | 'server_overloaded'
  | 'cyber_policy'
  | 'misalignment_policy_violation'
  | 'audio_input_unavailable'
  | 'connection_failed'
  | 'server_error'
  | 'authentication_error'
  | 'invalid_request'
  | 'resource_not_found'
  | 'sandbox_error'
  | 'executor_version_incompatible'
  | 'active_turn_not_steerable'
  | 'request_timeout'
  | 'internal_error'
type SessionTurnErrorResource = { code: SessionTurnErrorCodeResource; message: string }
type InputTokensDetailsResource_2 = { cached_tokens: bigint }
type OutputTokensDetailsResource_2 = { reasoning_tokens: bigint }
type TokenUsageResource = {
  input_tokens: bigint
  input_tokens_details: InputTokensDetailsResource_2
  output_tokens: bigint
  output_tokens_details: OutputTokensDetailsResource_2
  total_tokens: bigint
}
type TurnResource = {
  prompt_cache_options?: (PromptCacheOptionsResource | null) | undefined
  id: string
  object: TurnObjectResource
  session_id: string
  agent_id: string
  subagent_id: string | null
  status: TurnStatusResource
  created_at: bigint
  started_at: bigint | null
  completed_at: bigint | null
  error: SessionTurnErrorResource | null
  usage: TokenUsageResource | null
}
type SessionTurnListResource = {
  object: 'list'
  data: TurnResource[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
}
type PersistedAgentToolResourceFunction = {
  type: 'function'
  name: string
  description: string
  parameters: { [key: string]: any }
  defer_loading: boolean
  async?: boolean | undefined
}
type PersistedAgentToolResourceToolSearch = { type: 'tool_search' }
type PersistedAgentToolResourceProgrammaticToolCalling = {
  type: 'programmatic_tool_calling'
  enabled: boolean
}
type PersistedMcpTransportResourceHttp = {
  type: 'http'
  server_url: string
  headers: { [key: string]: string }
}
type PersistedMcpTransportResourceStdio = {
  type: 'stdio'
  command: string
  args: string[]
  cwd: string
  env_vars: string[]
}
type PersistedMcpTransportResource =
  | PersistedMcpTransportResourceHttp
  | PersistedMcpTransportResourceStdio
type PersistedAgentToolResourceMcp = {
  type: 'mcp'
  server_label: string
  credential_id: string | null
  transport: PersistedMcpTransportResource
  request_metadata: { [key: string]: any }
  allowed_tools: string[] | null
  required: boolean
  connection_origin: McpConnectionOriginResource
}
type PersistedAgentToolResourceWebSearch = {
  type: 'web_search'
  mode: WebSearchModeResource
  context_size: WebSearchContextSizeResource
  allowed_domains: string[] | null
  location: WebSearchLocationResource | null
}
type PersistedAgentToolResourceComputerUse = { type: 'computer_use'; include_screenshots: boolean }
type PersistedAgentToolResourceAutomations = { type: 'automations' }
type PersistedAgentToolResource =
  | PersistedAgentToolResourceFunction
  | PersistedAgentToolResourceToolSearch
  | PersistedAgentToolResourceProgrammaticToolCalling
  | PersistedAgentToolResourceMcp
  | PersistedAgentToolResourceWebSearch
  | PersistedAgentToolResourceComputerUse
  | PersistedAgentToolResourceAutomations
type AgentResource = {
  id: string
  object: 'agent'
  created_at: bigint
  updated_at: bigint
  name: string | null
  metadata: { [key: string]: string }
  model: string
  reasoning: ReasoningResource
  text: TextResource
  service_tier: ServiceTierResource
  instructions: string | null
  tools: PersistedAgentToolResource[]
  multi_agent: MultiAgentConfigResource
  compaction?: CompactionResource | undefined
  experimental?: ExperimentalConfigResource | undefined
}
type AgentListResource = {
  object: 'list'
  data: AgentResource[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
}
type ExperimentalConfigParamInput = { time_awareness?: boolean }
type PersistedAgentToolConfigParamFunctionInput = {
  type: 'function'
  name: string
  description: string
  parameters: { [key: string]: any }
  defer_loading?: boolean
  async?: boolean
}
type PersistedAgentToolConfigParamToolSearchInput = { type: 'tool_search' }
type PersistedAgentToolConfigParamProgrammaticToolCallingInput = {
  type: 'programmatic_tool_calling'
  enabled?: boolean
}
type PersistedMcpTransportConfigParamHttpInput = {
  type: 'http'
  server_url: string
  headers?: { [key: string]: string } | null
}
type PersistedMcpTransportConfigParamStdioInput = {
  type: 'stdio'
  command: string
  args?: string[] | null
  cwd: string
  env_vars?: string[] | null
}
type PersistedMcpTransportConfigParamInput =
  | PersistedMcpTransportConfigParamHttpInput
  | PersistedMcpTransportConfigParamStdioInput
type PersistedAgentToolConfigParamMcpInput = {
  type: 'mcp'
  server_label: string
  credential_id?: string | null
  transport: PersistedMcpTransportConfigParamInput
  request_metadata?: { [key: string]: any } | null
  allowed_tools?: string[] | null
  required?: boolean
  connection_origin?: McpConnectionOriginParamInput | null
}
type PersistedAgentToolConfigParamWebSearchInput = {
  type: 'web_search'
  mode?: WebSearchModeParamInput | null
  context_size?: WebSearchContextSizeParamInput | null
  allowed_domains?: string[] | null
  location?: WebSearchLocationParamInput | null
}
type PersistedAgentToolConfigParamComputerUseInput = {
  type: 'computer_use'
  include_screenshots?: boolean
}
type PersistedAgentToolConfigParamAutomationsInput = { type: 'automations' }
type PersistedAgentToolConfigParamInput =
  | PersistedAgentToolConfigParamFunctionInput
  | PersistedAgentToolConfigParamToolSearchInput
  | PersistedAgentToolConfigParamProgrammaticToolCallingInput
  | PersistedAgentToolConfigParamMcpInput
  | PersistedAgentToolConfigParamWebSearchInput
  | PersistedAgentToolConfigParamComputerUseInput
  | PersistedAgentToolConfigParamAutomationsInput
type CreateAgentParamsInput = {
  experimental?: ExperimentalConfigParamInput
  metadata?: { [key: string]: string } | null
  name?: string | null
  model: string
  reasoning?: ReasoningParamInput | null
  text?: TextParamInput | null
  service_tier?: ServiceTierParamInput | null
  instructions?: string | null
  tools?: PersistedAgentToolConfigParamInput[] | null
  multi_agent?: MultiAgentConfigCurrentParamInput | null
  compaction?: CompactionParamInput | null
}
type UpdateAgentParamsInput = {
  experimental?: ExperimentalConfigOverridesParamInput
  model?: string
  reasoning?: ReasoningParamInput | null
  text?: TextParamInput | null
  service_tier?: ServiceTierParamInput | null
  instructions?: string | null
  multi_agent?: MultiAgentConfigCurrentParamInput | null
  compaction?: CompactionParamInput | null
  metadata?: { [key: string]: string } | null
  name?: string | null
  tools?: PersistedAgentToolConfigParamInput[] | null
}
type DeletedAgentResource = { id: string; object: 'agent.deleted'; deleted: boolean }
type EnvironmentTemplateResource = {
  id: string
  name: string | null
  object: 'agent.environment.template'
  created_at: bigint
  updated_at: bigint
  packages: EnvironmentPackagesResource
  network: NetworkPolicyResource
  desktop: DesktopResource
  capability_directories: string[]
  skills: HostedTemplateSkillResource[]
  plugins: HostedPluginResource[]
  files: HostedTemplateFileResource[]
}
type EnvironmentTemplateListResource = {
  object: 'list'
  data: EnvironmentTemplateResource[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
}
type CreateEnvironmentTemplateParamsInput = {
  packages?: EnvironmentPackagesParamInput | null
  setup_commands?: SetupCommandParamInput[] | null
  network?: NetworkPolicyParamInput | null
  desktop?: DesktopParamInput | null
  env?: { [key: string]: string } | null
  capability_directories?: string[] | null
  skills?: HostedSkillParamInput[] | null
  plugins?: HostedPluginParamInput[] | null
  files?: HostedEnvironmentFileParamInput[] | null
  name?: string | null
}
type UpdateEnvironmentTemplateParamsInput = {
  name?: string | null
  packages?: EnvironmentPackagesParamInput | null
  setup_commands?: SetupCommandParamInput[] | null
  network?: NetworkPolicyParamInput | null
  desktop?: DesktopParamInput | null
  env?: { [key: string]: string } | null
  capability_directories?: string[] | null
  skills?: HostedSkillParamInput[] | null
  plugins?: HostedPluginParamInput[] | null
  files?: HostedEnvironmentFileParamInput[] | null
}
type DeletedEnvironmentTemplateResource = {
  id: string
  object: 'agent.environment.template.deleted'
  deleted: boolean
}
type SessionReviewResource = 'none' | 'auto_review'
type SessionBudgetControlResource = { limit: bigint | null; consumed: number | null }
type SessionStatusResource =
  | 'idle'
  | 'in_progress'
  | 'requires_action'
  | 'failed'
  | 'budget_reached'
type McpApprovalRequestResourceMcpToolCall = {
  type: 'mcp_tool_call'
  server_label: string
  name: string | null
  arguments: any | null
  message: string
}
type McpApprovalRequestResource = McpApprovalRequestResourceMcpToolCall
type SessionRequiredActionResourceMcpApprovalRequest = {
  type: 'mcp_approval_request'
  turn_id: string
  request_id: string
  request: McpApprovalRequestResource
}
type ComputerUseApprovalRequestKindResourceBrowserAuthentication = {
  type: 'browser_authentication'
  reason: string | null
  credential_origin: string | null
  fields: BrowserAuthenticationFieldResource[]
  options: BrowserAuthenticationOptionResource[]
}
type ComputerUseApprovalRequestKindResourceBrowserOriginAccess = {
  type: 'browser_origin_access'
  reason: string | null
  origin: string
}
type ComputerUseApprovalRequestKindResource =
  | ComputerUseApprovalRequestKindResourceBrowserAuthentication
  | ComputerUseApprovalRequestKindResourceBrowserOriginAccess
type SessionRequiredActionResourceComputerUseApprovalRequest = {
  type: 'computer_use_approval_request'
  turn_id: string
  request_id: string
  request: ComputerUseApprovalRequestKindResource
}
type SessionRequiredActionResourceFunctionCall = {
  type: 'function_call'
  turn_id: string
  call_id: string
  name: string
  arguments: any
}
type SessionRequiredActionResourceEnvironmentConnection = {
  type: 'environment_connection'
  environment_id: string
}
type SessionRequiredActionResource =
  | SessionRequiredActionResourceMcpApprovalRequest
  | SessionRequiredActionResourceComputerUseApprovalRequest
  | SessionRequiredActionResourceFunctionCall
  | SessionRequiredActionResourceEnvironmentConnection
type SessionAgentResource = {
  id: string
  name: string | null
  model: string
  reasoning: ReasoningResource
  text: TextResource
  service_tier: ServiceTierResource
  instructions: string | null
  tools: AgentToolResource[]
  multi_agent: MultiAgentConfigResource
  compaction?: CompactionResource | undefined
  experimental?: ExperimentalConfigResource | undefined
}
type EnvironmentResourceNone = { type: 'none' }
type EnvironmentResourceOpenaiHosted = {
  type: 'openai_hosted'
  id: string
  container_size?: (ContainerSizeResource | null) | undefined
  packages: EnvironmentPackagesResource
  network: NetworkPolicyResource
  desktop: DesktopResource
  capability_directories: string[]
  skills: HostedSkillResource[]
  plugins: HostedPluginResource[]
  files: HostedEnvironmentFileResource[]
}
type EnvironmentResourceSelfHosted = {
  type: 'self_hosted'
  remote_url: string
  id: string
  workspace_directory: string
  capability_directories: string[]
}
type EnvironmentResource =
  | EnvironmentResourceNone
  | EnvironmentResourceOpenaiHosted
  | EnvironmentResourceSelfHosted
type SessionResource = {
  prompt_cache_options?: (PromptCacheOptionsResource | null) | undefined
  review?: SessionReviewResource | undefined
  spend_control: SessionBudgetControlResource
  metadata: { [key: string]: string }
  id: string
  object: 'agent.session'
  created_at: bigint
  last_active_at: bigint
  status: SessionStatusResource
  required_actions: SessionRequiredActionResource[]
  error: string | null
  agent: SessionAgentResource
  environment: EnvironmentResource
  vault_ids: string[]
  usage: TokenUsageResource | null
}
type SessionListResource = {
  object: 'list'
  data: SessionResource[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
}
type SessionReviewParamInput = 'none' | 'auto_review'
type SessionBudgetControlParamsInput = { limit: bigint | null }
type CreateSessionInputParamInput = string | InputMessageParamInput[]
type PromptCacheTtlParamInput = '30m' | '12h'
type PromptCacheOptionsParam_2Input = { ttl?: PromptCacheTtlParamInput }
type SessionStreamOptionsParamInput = { include_obfuscation?: boolean }
type CreateAgentSessionParamsInput = {
  environment: EnvironmentParamInput
  review?: SessionReviewParamInput
  spend_control?: SessionBudgetControlParamsInput | null
  metadata?: { [key: string]: string } | null
  agent?: SessionAgentConfigParamInput
  agent_id?: string
  vault_ids?: string[] | null
  input?: CreateSessionInputParamInput | null
  prompt_cache_options?: PromptCacheOptionsParam_2Input | null
  stream?: boolean
  stream_options?: SessionStreamOptionsParamInput
}
type UpdateSessionReasoningParamInput = { effort?: ReasoningEffortParamInput | null }
type UpdateSessionAgentParamInput = {
  tools?: AgentToolConfigParamInput[] | null
  model?: string
  reasoning?: UpdateSessionReasoningParamInput
  service_tier?: ServiceTierParamInput | null
}
type UpdateAgentSessionParamsInput = {
  prompt_cache_options?: PromptCacheOptionsParam_2Input | null
  vault_ids?: string[] | null
  review?: SessionReviewParamInput
  spend_control?: SessionBudgetControlParamsInput | null
  agent?: UpdateSessionAgentParamInput
  metadata?: { [key: string]: string } | null
}
type DeletedSessionResource = { id: string; object: 'agent.session.deleted'; deleted: boolean }
type SessionArtifactResource = {
  id: string
  object: 'agent.session.artifact'
  session_id: string
  environment_id: string
  turn_id: string
  path: string
  size_bytes: bigint
  created_at: bigint
}
type SessionArtifactListResource = {
  object: 'list'
  data: SessionArtifactResource[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
}
type DeletedSessionArtifactResource = {
  id: string
  object: 'agent.session.artifact.deleted'
  deleted: boolean
}
type McpApprovalDecisionParamInput = 'approve' | 'deny' | 'cancel'
type McpApprovalResponseParamMcpToolCallInput = {
  type: 'mcp_tool_call'
  decision: McpApprovalDecisionParamInput
}
type McpApprovalResponseParamInput = McpApprovalResponseParamMcpToolCallInput
type SessionInputParamAgentSessionInputMcpApprovalRequestResultInput = {
  type: 'agent.session.input.mcp_approval_request_result'
  request_id: string
  response: McpApprovalResponseParamInput
}
type BrowserAuthenticationFieldValueParamInput = { field_id: string; value: string }
type ComputerUseApprovalResponseParamBrowserAuthenticationSubmitParamInput = {
  type: 'browser_authentication'
  action: 'submit'
  fields: BrowserAuthenticationFieldValueParamInput[]
  selected_option?: string | null
}
type ComputerUseApprovalResponseParamBrowserAuthenticationCancelParamInput = {
  type: 'browser_authentication'
  action: 'cancel'
}
type ComputerUseApprovalResponseParamBrowserAuthenticationInput =
  | ComputerUseApprovalResponseParamBrowserAuthenticationSubmitParamInput
  | ComputerUseApprovalResponseParamBrowserAuthenticationCancelParamInput
type BrowserOriginAccessDecisionParamInput = 'approve' | 'deny' | 'cancel'
type ComputerUseApprovalResponseParamBrowserOriginAccessParamInput = {
  type: 'browser_origin_access'
  decision: BrowserOriginAccessDecisionParamInput
}
type ComputerUseApprovalResponseParamInput =
  | ComputerUseApprovalResponseParamBrowserAuthenticationInput
  | ComputerUseApprovalResponseParamBrowserOriginAccessParamInput
type SessionInputParamAgentSessionInputComputerUseApprovalRequestResultInput = {
  type: 'agent.session.input.computer_use_approval_request_result'
  request_id: string
  response: ComputerUseApprovalResponseParamInput
}
type SessionInputParamAgentSessionInputMessageInput = {
  type: 'agent.session.input.message'
  input: InputMessageParamInput[]
}
type SessionInputParamAgentSessionInputCancelInput = { type: 'agent.session.input.cancel' }
type FunctionCallOutputParamInput = string | InputContentParamInput[]
type SessionInputParamAgentSessionInputToolResultInput = {
  type: 'agent.session.input.tool_result'
  turn_id: string
  call_id: string
  success: boolean
  output?: FunctionCallOutputParamInput | null
  error?: string | null
}
type SessionInputParamInput =
  | SessionInputParamAgentSessionInputMcpApprovalRequestResultInput
  | SessionInputParamAgentSessionInputComputerUseApprovalRequestResultInput
  | SessionInputParamAgentSessionInputMessageInput
  | SessionInputParamAgentSessionInputCancelInput
  | SessionInputParamAgentSessionInputToolResultInput
type CreateSessionEventsParamsInput = { events: SessionInputParamInput[] }
type SessionTurnTraceResource = {
  id: string
  object: 'agent.session.trace'
  session_id: string
  created_at: bigint
  otlp: { [key: string]: any }
}
type SessionTraceListResource = {
  object: 'list'
  data: SessionTurnTraceResource[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
}
type VaultStatusParamInput = 'active' | 'archived'
type VaultStatusFilterParamInput = VaultStatusParamInput | VaultStatusParamInput[]
type VaultResource = {
  id: string
  object: 'vault'
  name: string | null
  metadata: { [key: string]: string }
  created_at: bigint
}
type VaultListResource = {
  object: 'list'
  data: VaultResource[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
}
type CreateVaultParamsInput = { name?: string; metadata?: { [key: string]: string } | null }
type UpdateVaultParamsInput = { metadata?: { [key: string]: string }; name?: string | null }
type DeletedVaultResource = { id: string; object: 'vault.deleted'; deleted: boolean }
type McpOauthTokenEndpointAuthResourceNone = { type: 'none' }
type McpOauthTokenEndpointAuthResourceClientSecretBasic = { type: 'client_secret_basic' }
type McpOauthTokenEndpointAuthResourceClientSecretPost = { type: 'client_secret_post' }
type McpOauthTokenEndpointAuthResource =
  | McpOauthTokenEndpointAuthResourceNone
  | McpOauthTokenEndpointAuthResourceClientSecretBasic
  | McpOauthTokenEndpointAuthResourceClientSecretPost
type McpOauthRefreshResource = {
  token_endpoint: string
  client_id: string
  resource: string | null
  scope: string | null
  token_endpoint_auth: McpOauthTokenEndpointAuthResource
}
type VaultCredentialAuthResourceMcpOauth = {
  type: 'mcp_oauth'
  mcp_server_url: string
  expires_at: string | null
  refresh: McpOauthRefreshResource | null
}
type VaultCredentialAuthResourceStaticBearer = { type: 'static_bearer'; mcp_server_url: string }
type VaultCredentialNetworkingResourceUnrestricted = { type: 'unrestricted' }
type VaultCredentialNetworkingResourceLimited = { type: 'limited'; allowed_hosts: string[] }
type VaultCredentialNetworkingResource =
  | VaultCredentialNetworkingResourceUnrestricted
  | VaultCredentialNetworkingResourceLimited
type VaultCredentialAuthResourceEnvironmentVariable = {
  type: 'environment_variable'
  secret_name: string
  networking: VaultCredentialNetworkingResource
}
type VaultCredentialAuthResource =
  | VaultCredentialAuthResourceMcpOauth
  | VaultCredentialAuthResourceStaticBearer
  | VaultCredentialAuthResourceEnvironmentVariable
type VaultCredentialResource = {
  id: string
  object: 'vault.credential'
  vault_id: string
  name: string
  auth: VaultCredentialAuthResource
  metadata: { [key: string]: string }
  created_at: bigint
  updated_at: bigint
}
type VaultCredentialListResource = {
  object: 'list'
  data: VaultCredentialResource[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
}
type CreateMcpOauthTokenEndpointAuthParamNoneInput = { type: 'none' }
type CreateMcpOauthTokenEndpointAuthParamClientSecretBasicInput = {
  type: 'client_secret_basic'
  client_secret: string
}
type CreateMcpOauthTokenEndpointAuthParamClientSecretPostInput = {
  type: 'client_secret_post'
  client_secret: string
}
type CreateMcpOauthTokenEndpointAuthParamInput =
  | CreateMcpOauthTokenEndpointAuthParamNoneInput
  | CreateMcpOauthTokenEndpointAuthParamClientSecretBasicInput
  | CreateMcpOauthTokenEndpointAuthParamClientSecretPostInput
type CreateMcpOauthRefreshParamInput = {
  token_endpoint: string
  client_id: string
  resource?: string | null
  scope?: string | null
  refresh_token: string
  token_endpoint_auth: CreateMcpOauthTokenEndpointAuthParamInput
}
type CreateVaultCredentialAuthParamMcpOauthInput = {
  type: 'mcp_oauth'
  mcp_server_url: string
  access_token: string
  expires_at?: string | null
  refresh?: CreateMcpOauthRefreshParamInput | null
}
type CreateVaultCredentialAuthParamStaticBearerInput = {
  type: 'static_bearer'
  mcp_server_url: string
  token: string
}
type VaultCredentialNetworkingParamUnrestrictedInput = { type: 'unrestricted' }
type VaultCredentialNetworkingParamLimitedInput = { type: 'limited'; allowed_hosts: string[] }
type VaultCredentialNetworkingParamInput =
  | VaultCredentialNetworkingParamUnrestrictedInput
  | VaultCredentialNetworkingParamLimitedInput
type CreateVaultCredentialAuthParamEnvironmentVariableInput = {
  type: 'environment_variable'
  secret_name: string
  secret_value: string
  networking: VaultCredentialNetworkingParamInput
}
type CreateVaultCredentialAuthParamInput =
  | CreateVaultCredentialAuthParamMcpOauthInput
  | CreateVaultCredentialAuthParamStaticBearerInput
  | CreateVaultCredentialAuthParamEnvironmentVariableInput
type CreateVaultCredentialParamsInput = {
  name: string
  auth: CreateVaultCredentialAuthParamInput
  metadata?: { [key: string]: string }
}
type RotateMcpOauthTokenEndpointAuthParamClientSecretBasicInput = {
  type: 'client_secret_basic'
  client_secret?: string | null
}
type RotateMcpOauthTokenEndpointAuthParamClientSecretPostInput = {
  type: 'client_secret_post'
  client_secret?: string | null
}
type RotateMcpOauthTokenEndpointAuthParamInput =
  | RotateMcpOauthTokenEndpointAuthParamClientSecretBasicInput
  | RotateMcpOauthTokenEndpointAuthParamClientSecretPostInput
type RotateMcpOauthRefreshParamInput = {
  refresh_token?: string | null
  scope?: string | null
  token_endpoint_auth?: RotateMcpOauthTokenEndpointAuthParamInput | null
}
type RotateVaultCredentialAuthParamMcpOauthInput = {
  type: 'mcp_oauth'
  access_token?: string | null
  expires_at?: string | null
  refresh?: RotateMcpOauthRefreshParamInput | null
}
type RotateVaultCredentialAuthParamStaticBearerInput = { type: 'static_bearer'; token: string }
type RotateVaultCredentialAuthParamEnvironmentVariableInput = {
  type: 'environment_variable'
  secret_value: string
}
type RotateVaultCredentialAuthParamInput =
  | RotateVaultCredentialAuthParamMcpOauthInput
  | RotateVaultCredentialAuthParamStaticBearerInput
  | RotateVaultCredentialAuthParamEnvironmentVariableInput
type RotateVaultCredentialParamsInput = {
  auth?: RotateVaultCredentialAuthParamInput
  metadata?: { [key: string]: string }
}
type DeletedVaultCredentialResource = {
  id: string
  object: 'vault.credential.deleted'
  deleted: boolean
}
type WebhookEndpointBody = {
  id: string
  object: 'webhook_endpoint'
  created_at: number
  updated_at?: number | undefined
  name: string
  url: string
  event_types: string[]
  signing_secret_hint: string | null
}
type WebhookEndpointListResource = {
  object: 'list'
  data: WebhookEndpointBody[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
}
type ProjectEventTypeEnumInput =
  | 'batch.completed'
  | 'batch.failed'
  | 'batch.expired'
  | 'batch.cancelled'
  | 'response.completed'
  | 'response.failed'
  | 'response.cancelled'
  | 'response.incomplete'
  | 'eval.run.succeeded'
  | 'eval.run.failed'
  | 'eval.run.canceled'
  | 'fine_tuning.job.succeeded'
  | 'fine_tuning.job.failed'
  | 'fine_tuning.job.cancelled'
  | 'realtime.call.incoming'
  | 'video.completed'
  | 'video.failed'
  | 'agent.environment.ready'
  | 'agent.environment.failed'
  | 'agent.environment.suspended'
  | 'agent.environment.expired'
  | 'agent.session.created'
  | 'agent.session.action_required'
  | 'agent.session.in_progress'
  | 'agent.session.idle'
  | 'agent.session.failed'
  | 'safety.alert.created'
type PublicCreateEndpointBodyInput = {
  name: string
  url: string
  event_types: ProjectEventTypeEnumInput[]
}
type WebhookEndpointWithSecretResource = {
  id: string
  object: 'webhook_endpoint'
  created_at: number
  updated_at?: number | undefined
  name: string
  url: string
  event_types: string[]
  signing_secret_hint: string | null
  signing_secret: string
}
type PublicUpdateEndpointBodyInput = {
  name?: string
  url?: string
  event_types?: ProjectEventTypeEnumInput[]
}
type DeletedWebhookEndpointResource = {
  id: string
  object: 'webhook_endpoint.deleted'
  deleted: boolean
}
type PublicRotateSecretBodyInput = { keep_old_secret_active_for_24_hours?: boolean }
type PublicTestEndpointBodyInput = { event_type: ProjectEventTypeEnumInput }
type WebhookEndpointTestResultResource = {
  object: 'webhook_endpoint.test'
  webhook_endpoint_id: string
  event_type: string
  status_code: number
  success: true
}
type WebhookEventTypeListResource = { object: 'list'; data: string[] }
type BetaMetadataInput = { [key: string]: string } | null
type BetaModelResponsePropertiesInput = {
  metadata?: BetaMetadataInput
  top_logprobs?: number | null
  temperature?: number | null
  top_p?: number | null
  user?: string | null
  safety_identifier?: string | null
  prompt_cache_key?: string | null
  prompt_cache_retention?: 'in_memory' | '24h' | null
}
type BetaCreateModelResponsePropertiesInput = BetaModelResponsePropertiesInput & {
  top_logprobs?: number
}
type BetaModelIdsSharedInput =
  | string
  | 'gpt-6-astra'
  | 'gpt-6.2-astra'
  | 'gpt-6.1-sol'
  | 'gpt-6.2-sol'
  | 'gpt-6.1-terra'
  | 'gpt-6-sol'
  | 'gpt-6-luna'
  | 'gpt-5.6-sol'
  | 'gpt-5.6-terra'
  | 'gpt-5.6-luna'
  | 'gpt-5.5'
  | 'gpt-5.5-2026-04-23'
  | 'gpt-5.4'
  | 'gpt-5.4-mini'
  | 'gpt-5.4-nano'
  | 'gpt-5.4-mini-2026-03-17'
  | 'gpt-5.4-nano-2026-03-17'
  | 'gpt-5.3-chat-latest'
  | 'gpt-5.2'
  | 'gpt-5.2-2025-12-11'
  | 'gpt-5.2-chat-latest'
  | 'gpt-5.2-pro'
  | 'gpt-5.2-pro-2025-12-11'
  | 'gpt-5.1'
  | 'gpt-5.1-2025-11-13'
  | 'gpt-5.1-codex'
  | 'gpt-5.1-mini'
  | 'gpt-5.1-chat-latest'
  | 'gpt-5'
  | 'gpt-5-mini'
  | 'gpt-5-nano'
  | 'gpt-5-2025-08-07'
  | 'gpt-5-mini-2025-08-07'
  | 'gpt-5-nano-2025-08-07'
  | 'gpt-5-chat-latest'
  | 'gpt-4.1'
  | 'gpt-4.1-mini'
  | 'gpt-4.1-nano'
  | 'gpt-4.1-2025-04-14'
  | 'gpt-4.1-mini-2025-04-14'
  | 'gpt-4.1-nano-2025-04-14'
  | 'o4-mini'
  | 'o4-mini-2025-04-16'
  | 'o3'
  | 'o3-2025-04-16'
  | 'o3-mini'
  | 'o3-mini-2025-01-31'
  | 'o1'
  | 'o1-2024-12-17'
  | 'o1-preview'
  | 'o1-preview-2024-09-12'
  | 'o1-mini'
  | 'o1-mini-2024-09-12'
  | 'gpt-4o'
  | 'gpt-4o-2024-11-20'
  | 'gpt-4o-2024-08-06'
  | 'gpt-4o-2024-05-13'
  | 'gpt-audio-mini'
  | 'gpt-audio-mini-2025-12-15'
  | 'gpt-4o-audio-preview'
  | 'gpt-4o-audio-preview-2024-10-01'
  | 'gpt-4o-audio-preview-2024-12-17'
  | 'gpt-4o-audio-preview-2025-06-03'
  | 'gpt-4o-mini-audio-preview'
  | 'gpt-4o-mini-audio-preview-2024-12-17'
  | 'gpt-4o-search-preview'
  | 'gpt-4o-mini-search-preview'
  | 'gpt-4o-search-preview-2025-03-11'
  | 'gpt-4o-mini-search-preview-2025-03-11'
  | 'chatgpt-4o-latest'
  | 'codex-mini-latest'
  | 'gpt-4o-mini'
  | 'gpt-4o-mini-2024-07-18'
  | 'gpt-4-turbo'
  | 'gpt-4-turbo-2024-04-09'
  | 'gpt-4-0125-preview'
  | 'gpt-4-turbo-preview'
  | 'gpt-4-1106-preview'
  | 'gpt-4-vision-preview'
  | 'gpt-4'
  | 'gpt-4-0314'
  | 'gpt-4-0613'
  | 'gpt-4-32k'
  | 'gpt-4-32k-0314'
  | 'gpt-4-32k-0613'
  | 'gpt-3.5-turbo'
  | 'gpt-3.5-turbo-16k'
  | 'gpt-3.5-turbo-0301'
  | 'gpt-3.5-turbo-0613'
  | 'gpt-3.5-turbo-1106'
  | 'gpt-3.5-turbo-0125'
  | 'gpt-3.5-turbo-16k-0613'
type BetaModelIdsResponsesInput =
  | BetaModelIdsSharedInput
  | 'o1-pro'
  | 'o1-pro-2025-03-19'
  | 'o3-pro'
  | 'o3-pro-2025-06-10'
  | 'o3-deep-research'
  | 'o3-deep-research-2025-06-26'
  | 'o4-mini-deep-research'
  | 'o4-mini-deep-research-2025-06-26'
  | 'computer-use-preview'
  | 'computer-use-preview-2025-03-11'
  | 'gpt-5.5-pro'
  | 'gpt-5.5-pro-2026-04-23'
  | 'gpt-5-codex'
  | 'gpt-5-pro'
  | 'gpt-5-pro-2025-10-06'
  | 'gpt-5.1-codex-max'
  | 'gpt-daybreak-blue-latest'
  | 'gpt-daybreak-red-latest'
  | 'gpt-5.6-cyber'
  | 'gpt-6-cyber'
  | 'gpt-rosalind-research'
  | 'gpt-6-rosalind'
  | 'gpt-6.2-astra-law'
  | 'gpt-6-astra-healthcare'
  | 'gpt-6.1-sol-healthcare'
  | 'gpt-6.2-astra-healthcare'
  | 'gpt-6.2-sol-healthcare'
type BetaResponseFormatTextInput = { type: 'text' }
type BetaResponseFormatJsonSchemaSchemaInput = { [key: string]: unknown }
type BetaTextResponseFormatJsonSchemaInput = {
  type: 'json_schema'
  description?: string
  name: string
  schema: BetaResponseFormatJsonSchemaSchemaInput
  strict?: boolean | null
}
type BetaResponseFormatJsonObjectInput = { type: 'json_object' }
type BetaTextResponseFormatConfigurationInput =
  | BetaResponseFormatTextInput
  | BetaTextResponseFormatJsonSchemaInput
  | BetaResponseFormatJsonObjectInput
type BetaVerbosityInput = 'low' | 'medium' | 'high' | null
type BetaResponseTextParamInput = {
  format?: BetaTextResponseFormatConfigurationInput
  verbosity?: BetaVerbosityInput
}
type BetaCallableToolAllowedCallerInput = 'direct' | 'programmatic'
type BetaFunctionToolInput = {
  type: 'function'
  name: string
  async?: boolean
  description?: string | null
  parameters: { [key: string]: any } | null
  output_schema?: { [key: string]: any } | null
  strict: boolean | null
  defer_loading?: boolean
  allowed_callers?: BetaCallableToolAllowedCallerInput[] | null
}
type BetaRankerVersionTypeInput = 'auto' | 'default-2024-11-15'
type BetaHybridSearchOptionsInput = { embedding_weight: number; text_weight: number }
type BetaRankingOptionsInput = {
  ranker?: BetaRankerVersionTypeInput
  score_threshold?: number
  hybrid_search?: BetaHybridSearchOptionsInput
}
type BetaComparisonFilterInput = {
  type: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | 'nin'
  key: string
  value: string | number | boolean | (string | number)[]
}
type BetaCompoundFilterInput = {
  type: 'and' | 'or'
  filters: (BetaComparisonFilterInput | BetaCompoundFilterInput)[]
}
type BetaFiltersInput = BetaComparisonFilterInput | BetaCompoundFilterInput
type BetaFileSearchToolInput = {
  type: 'file_search'
  vector_store_ids: string[]
  max_num_results?: number
  ranking_options?: BetaRankingOptionsInput
  filters?: BetaFiltersInput | null
}
type BetaComputerToolInput = { type: 'computer' }
type BetaComputerEnvironmentInput = 'windows' | 'mac' | 'linux' | 'ubuntu' | 'browser'
type BetaComputerUsePreviewToolInput = {
  type: 'computer_use_preview'
  environment: BetaComputerEnvironmentInput
  display_width: number
  display_height: number
}
type BetaWebSearchApproximateLocationInput = {
  type?: 'approximate'
  country?: string | null
  region?: string | null
  city?: string | null
  timezone?: string | null
} | null
type BetaWebSearchToolInput = {
  type: 'web_search' | 'web_search_2025_08_26'
  external_web_access?: boolean
  filters?: { allowed_domains?: string[] | null } | null
  user_location?: BetaWebSearchApproximateLocationInput
  search_context_size?: 'low' | 'medium' | 'high'
}
type BetaMCPToolFilterInput = { tool_names?: string[]; read_only?: boolean }
type BetaMCPToolInput = {
  type: 'mcp'
  server_label: string
  server_url?: string
  connector_id?:
    | 'connector_dropbox'
    | 'connector_gmail'
    | 'connector_googlecalendar'
    | 'connector_googledrive'
    | 'connector_microsoftteams'
    | 'connector_outlookcalendar'
    | 'connector_outlookemail'
    | 'connector_sharepoint'
  tunnel_id?: string
  authorization?: string
  server_description?: string
  headers?: { [key: string]: string } | null
  allowed_tools?: (string[] | BetaMCPToolFilterInput) | null
  allowed_callers?: BetaCallableToolAllowedCallerInput[] | null
  require_approval?:
    | ({ always?: BetaMCPToolFilterInput; never?: BetaMCPToolFilterInput } | 'always' | 'never')
    | null
  defer_loading?: boolean
}
type BetaContainerMemoryLimitInput = '1g' | '4g' | '16g' | '64g'
type BetaContainerNetworkPolicyDisabledParamInput = { type: 'disabled' }
type BetaContainerNetworkPolicyDomainSecretParamInput = {
  domain: string
  name: string
  value: string
}
type BetaContainerNetworkPolicyAllowlistParamInput = {
  type: 'allowlist'
  allowed_domains: string[]
  domain_secrets?: BetaContainerNetworkPolicyDomainSecretParamInput[]
}
type BetaAutoCodeInterpreterToolParamInput = {
  type: 'auto'
  file_ids?: string[]
  memory_limit?: BetaContainerMemoryLimitInput | null
  network_policy?:
    | BetaContainerNetworkPolicyDisabledParamInput
    | BetaContainerNetworkPolicyAllowlistParamInput
}
type BetaCodeInterpreterToolInput = {
  type: 'code_interpreter'
  container: string | BetaAutoCodeInterpreterToolParamInput
  allowed_callers?: BetaCallableToolAllowedCallerInput[] | null
}
type BetaProgrammaticToolCallingParamInput = { type: 'programmatic_tool_calling' }
type BetaReasoningEffortEnumInput = 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | 'max'
type BetaSvgReasoningParamInput = { effort?: BetaReasoningEffortEnumInput }
type BetaSvgParamInput = { model?: string; reasoning?: BetaSvgReasoningParamInput | null }
type BetaInputFidelityInput = 'high' | 'low'
type BetaImageGenActionEnumInput = 'generate' | 'edit' | 'auto'
type BetaImageGenToolInput = {
  type: 'image_generation'
  model?:
    | string
    | 'gpt-image-1'
    | 'gpt-image-1-mini'
    | 'gpt-image-2'
    | 'gpt-image-2-2026-04-21'
    | 'gpt-image-2.5-sunburst'
    | 'gpt-image-2.5-sunburst-2026-09-08'
    | 'gpt-image-2.5-flare'
    | 'gpt-image-2.5-flare-2026-09-08'
    | 'gpt-image-2.6-sunburst'
    | 'gpt-image-2.6-flare'
    | 'gpt-image-1.5'
    | 'chatgpt-image-latest'
  complexity?: 'low' | 'medium' | 'high'
  quality?: 'low' | 'medium' | 'high' | 'xhigh' | 'max' | 'auto'
  size?: string | '1024x1024' | '1024x1536' | '1536x1024' | 'auto'
  output_format?: 'png' | 'webp' | 'jpeg' | 'gif' | 'svg'
  frame_count?: number
  frame_duration_ms?: number
  svg?: BetaSvgParamInput
  output_compression?: number
  moderation?: 'auto' | 'low'
  background?: 'transparent' | 'opaque' | 'auto'
  input_fidelity?: BetaInputFidelityInput | null
  input_image_mask?: { image_url?: string; file_id?: string }
  partial_images?: number
  action?: BetaImageGenActionEnumInput
}
type BetaLocalShellToolParamInput = { type: 'local_shell' }
type BetaSkillReferenceParamInput = { type: 'skill_reference'; skill_id: string; version?: string }
type BetaInlineSkillSourceParamInput = {
  type: 'base64'
  media_type: 'application/zip'
  data: string
}
type BetaInlineSkillParamInput = {
  type: 'inline'
  name: string
  description: string
  source: BetaInlineSkillSourceParamInput
}
type BetaContainerAutoParamInput = {
  type: 'container_auto'
  file_ids?: string[]
  memory_limit?: BetaContainerMemoryLimitInput | null
  network_policy?:
    | BetaContainerNetworkPolicyDisabledParamInput
    | BetaContainerNetworkPolicyAllowlistParamInput
  skills?: (BetaSkillReferenceParamInput | BetaInlineSkillParamInput)[]
}
type BetaLocalSkillParamInput = { name: string; description: string; path: string }
type BetaLocalEnvironmentParamInput = { type: 'local'; skills?: BetaLocalSkillParamInput[] }
type BetaContainerReferenceParamInput = { type: 'container_reference'; container_id: string }
type BetaFunctionShellToolParamInput = {
  type: 'shell'
  environment?:
    | (
        | BetaContainerAutoParamInput
        | BetaLocalEnvironmentParamInput
        | BetaContainerReferenceParamInput
      )
    | null
  allowed_callers?: BetaCallableToolAllowedCallerInput[] | null
}
type BetaCustomTextFormatParamInput = { type: 'text' }
type BetaGrammarSyntax1Input = 'lark' | 'regex'
type BetaCustomGrammarFormatParamInput = {
  type: 'grammar'
  syntax: BetaGrammarSyntax1Input
  definition: string
}
type BetaCustomToolParamInput = {
  type: 'custom'
  name: string
  async?: boolean
  description?: string
  format?: BetaCustomTextFormatParamInput | BetaCustomGrammarFormatParamInput
  defer_loading?: boolean
  allowed_callers?: BetaCallableToolAllowedCallerInput[] | null
}
type BetaEmptyModelParamInput = { [key: string]: unknown }
type BetaFunctionToolParamInput = {
  name: string
  description?: string | null
  parameters?: BetaEmptyModelParamInput | null
  strict?: boolean | null
  type: 'function'
  async?: boolean
  output_schema?: { [key: string]: any } | null
  defer_loading?: boolean
  allowed_callers?: BetaCallableToolAllowedCallerInput[] | null
}
type BetaNamespaceToolParamInput = {
  type: 'namespace'
  name: string
  description: string
  tools: (BetaFunctionToolParamInput | BetaCustomToolParamInput)[]
}
type BetaToolSearchExecutionTypeInput = 'server' | 'client'
type BetaToolSearchToolParamInput = {
  type: 'tool_search'
  execution?: BetaToolSearchExecutionTypeInput
  description?: string | null
  parameters?: BetaEmptyModelParamInput | null
}
type BetaApproximateLocationInput = {
  type: 'approximate'
  country?: string | null
  region?: string | null
  city?: string | null
  timezone?: string | null
}
type BetaSearchContextSizeInput = 'low' | 'medium' | 'high'
type BetaSearchContentTypeInput = 'text' | 'image'
type BetaWebSearchPreviewToolInput = {
  type: 'web_search_preview' | 'web_search_preview_2025_03_11'
  user_location?: BetaApproximateLocationInput | null
  search_context_size?: BetaSearchContextSizeInput
  search_content_types?: BetaSearchContentTypeInput[]
}
type BetaApplyPatchToolParamInput = {
  type: 'apply_patch'
  allowed_callers?: BetaCallableToolAllowedCallerInput[] | null
}
type BetaToolInput =
  | BetaFunctionToolInput
  | BetaFileSearchToolInput
  | BetaComputerToolInput
  | BetaComputerUsePreviewToolInput
  | BetaWebSearchToolInput
  | BetaMCPToolInput
  | BetaCodeInterpreterToolInput
  | BetaProgrammaticToolCallingParamInput
  | BetaImageGenToolInput
  | BetaLocalShellToolParamInput
  | BetaFunctionShellToolParamInput
  | BetaCustomToolParamInput
  | BetaNamespaceToolParamInput
  | BetaToolSearchToolParamInput
  | BetaWebSearchPreviewToolInput
  | BetaApplyPatchToolParamInput
type BetaToolsArrayInput = BetaToolInput[]
type BetaToolChoiceOptionsInput = 'none' | 'auto' | 'required'
type BetaToolChoiceAllowedInput = {
  type: 'allowed_tools'
  mode: 'auto' | 'required'
  tools: { [key: string]: unknown }[]
}
type BetaToolChoiceTypesInput = {
  type:
    | 'file_search'
    | 'web_search_preview'
    | 'computer'
    | 'computer_use_preview'
    | 'computer_use'
    | 'web_search_preview_2025_03_11'
    | 'image_generation'
    | 'code_interpreter'
}
type BetaToolChoiceFunctionInput = { type: 'function'; name: string }
type BetaToolChoiceMCPInput = { type: 'mcp'; server_label: string; name?: string | null }
type BetaToolChoiceCustomInput = { type: 'custom'; name: string }
type BetaSpecificProgrammaticToolCallingParamInput = { type: 'programmatic_tool_calling' }
type BetaSpecificApplyPatchParamInput = { type: 'apply_patch' }
type BetaSpecificFunctionShellParamInput = { type: 'shell' }
type BetaToolChoiceParamInput =
  | BetaToolChoiceOptionsInput
  | BetaToolChoiceAllowedInput
  | BetaToolChoiceTypesInput
  | BetaToolChoiceFunctionInput
  | BetaToolChoiceMCPInput
  | BetaToolChoiceCustomInput
  | BetaSpecificProgrammaticToolCallingParamInput
  | BetaSpecificApplyPatchParamInput
  | BetaSpecificFunctionShellParamInput
type BetaPromptCacheBreakpointConfigInput = { mode: 'explicit'; ttl?: '30m' | '12h' }
type BetaInputTextContentInput = {
  type: 'input_text'
  text: string
  prompt_cache_breakpoint?: BetaPromptCacheBreakpointConfigInput
}
type BetaImageDetailInput = 'low' | 'high' | 'auto' | 'original'
type BetaInputImageContentInput = {
  type: 'input_image'
  image_url?: string | null
  file_id?: string | null
  detail: BetaImageDetailInput
  prompt_cache_breakpoint?: BetaPromptCacheBreakpointConfigInput
}
type BetaFileInputDetailInput = 'auto' | 'low' | 'high'
type BetaInputFileContentInput = {
  type: 'input_file'
  file_id?: string | null
  filename?: string
  file_data?: string
  prompt_cache_breakpoint?: BetaPromptCacheBreakpointConfigInput
  file_url?: string
  detail?: BetaFileInputDetailInput
}
type BetaResponsePromptVariablesInput = {
  [key: string]:
    | string
    | BetaInputTextContentInput
    | BetaInputImageContentInput
    | BetaInputFileContentInput
} | null
type BetaPromptInput = {
  id: string
  version?: string | null
  variables?: BetaResponsePromptVariablesInput
} | null
type BetaResponsePropertiesInput = {
  previous_response_id?: string | null
  model?: BetaModelIdsResponsesInput
  background?: boolean | null
  max_tool_calls?: number | null
  text?: BetaResponseTextParamInput
  tools?: BetaToolsArrayInput
  tool_choice?: BetaToolChoiceParamInput
  prompt?: BetaPromptInput
}
type BetaCyberAccessProgramEnumInput = 'standard' | 'daybreak_blue' | 'daybreak_red'
type BetaAccessProgramsParamInput = { cyber?: BetaCyberAccessProgramEnumInput }
type BetaImageContextCompressionInput = 'auto' | 'enabled' | 'disabled'
type BetaImageOptionsParamInput = { context_compression?: BetaImageContextCompressionInput }
type BetaPromptCacheModeEnumInput = 'implicit' | 'explicit'
type BetaResponsePromptCacheOptionsParamInput = {
  ttl?: '30m' | '12h'
  mode?: BetaPromptCacheModeEnumInput
  prewarm?: boolean
  comparison_response_id?: string | null
}
type BetaServiceTierResponsesInput =
  | 'auto'
  | 'default'
  | 'flex'
  | 'scale'
  | 'priority'
  | 'fast'
  | 'ultrafast'
  | null
type BetaReasoningModeEnumInput = string | 'standard' | 'pro'
type BetaReasoningEffortInput =
  | 'none'
  | 'minimal'
  | 'low'
  | 'medium'
  | 'high'
  | 'xhigh'
  | 'max'
  | null
type BetaReasoningInput = {
  mode?: BetaReasoningModeEnumInput
  effort?: BetaReasoningEffortInput
  summary?: 'auto' | 'concise' | 'detailed' | null
  context?: 'auto' | 'current_turn' | 'all_turns' | null
  generate_summary?: 'auto' | 'concise' | 'detailed' | null
}
type BetaInputContentInput =
  | BetaInputTextContentInput
  | BetaInputImageContentInput
  | BetaInputFileContentInput
type BetaInputMessageContentListInput = BetaInputContentInput[]
type BetaMessagePhaseInput = 'commentary' | 'final_answer'
type BetaEasyInputMessageInput = {
  role: 'user' | 'assistant' | 'system' | 'developer'
  content: string | BetaInputMessageContentListInput
  phase?: BetaMessagePhaseInput | null
  type?: 'message'
}
type BetaAgentTagInput = { agent_name: string }
type BetaInputMessageInput = {
  agent?: BetaAgentTagInput | null
  type?: 'message'
  role: 'user' | 'system' | 'developer'
  status?: 'in_progress' | 'completed' | 'incomplete'
  content: BetaInputMessageContentListInput
}
type BetaFileCitationBodyInput = {
  type: 'file_citation'
  file_id: string
  index: number
  filename: string
}
type BetaUrlCitationBodyInput = {
  type: 'url_citation'
  url: string
  start_index: number
  end_index: number
  title: string
}
type BetaContainerFileCitationBodyInput = {
  type: 'container_file_citation'
  container_id: string
  file_id: string
  start_index: number
  end_index: number
  filename: string
}
type BetaFilePathInput = { type: 'file_path'; file_id: string; index: number }
type BetaAnnotationInput =
  | BetaFileCitationBodyInput
  | BetaUrlCitationBodyInput
  | BetaContainerFileCitationBodyInput
  | BetaFilePathInput
type BetaTopLogProbInput = { token: string; logprob: number; bytes: number[] }
type BetaLogProbInput = {
  token: string
  logprob: number
  bytes: number[]
  top_logprobs: BetaTopLogProbInput[]
}
type BetaOutputTextContentInput = {
  type: 'output_text'
  text: string
  annotations: BetaAnnotationInput[]
  logprobs: BetaLogProbInput[]
}
type BetaRefusalContentInput = { type: 'refusal'; refusal: string }
type BetaOutputMessageContentInput = BetaOutputTextContentInput | BetaRefusalContentInput
type BetaOutputMessageInput = {
  agent?: BetaAgentTagInput | null
  id: string
  type: 'message'
  role: 'assistant'
  content: BetaOutputMessageContentInput[]
  phase?: BetaMessagePhaseInput | null
  status: 'in_progress' | 'completed' | 'incomplete'
}
type BetaVectorStoreFileAttributesInput = { [key: string]: string | number | boolean } | null
type BetaFileSearchToolCallInput = {
  agent?: BetaAgentTagInput | null
  id: string
  type: 'file_search_call'
  status: 'in_progress' | 'searching' | 'completed' | 'incomplete' | 'failed'
  queries: string[]
  results?:
    | {
        file_id?: string
        text?: string
        filename?: string
        attributes?: BetaVectorStoreFileAttributesInput
        score?: number
      }[]
    | null
}
type BetaClickButtonTypeInput = 'left' | 'right' | 'wheel' | 'back' | 'forward'
type BetaClickParamInput = {
  type: 'click'
  button: BetaClickButtonTypeInput
  x: number
  y: number
  keys?: string[] | null
}
type BetaDoubleClickActionInput = {
  type: 'double_click'
  x: number
  y: number
  keys: string[] | null
}
type BetaCoordParamInput = { x: number; y: number }
type BetaDragParamInput = { type: 'drag'; path: BetaCoordParamInput[]; keys?: string[] | null }
type BetaKeyPressActionInput = { type: 'keypress'; keys: string[] }
type BetaMoveParamInput = { type: 'move'; x: number; y: number; keys?: string[] | null }
type BetaScreenshotParamInput = { type: 'screenshot' }
type BetaScrollParamInput = {
  type: 'scroll'
  x: number
  y: number
  scroll_x: number
  scroll_y: number
  keys?: string[] | null
}
type BetaTypeParamInput = { type: 'type'; text: string }
type BetaWaitParamInput = { type: 'wait' }
type BetaComputerActionInput =
  | BetaClickParamInput
  | BetaDoubleClickActionInput
  | BetaDragParamInput
  | BetaKeyPressActionInput
  | BetaMoveParamInput
  | BetaScreenshotParamInput
  | BetaScrollParamInput
  | BetaTypeParamInput
  | BetaWaitParamInput
type BetaComputerActionListInput = BetaComputerActionInput[]
type BetaComputerCallSafetyCheckParamInput = {
  id: string
  code?: string | null
  message?: string | null
}
type BetaComputerToolCallInput = {
  agent?: BetaAgentTagInput | null
  type: 'computer_call'
  id: string
  call_id: string
  action?: BetaComputerActionInput
  actions?: BetaComputerActionListInput
  pending_safety_checks: BetaComputerCallSafetyCheckParamInput[]
  status: 'in_progress' | 'completed' | 'incomplete'
}
type BetaAgentTagParamInput = { agent_name: string }
type BetaComputerScreenshotImageInput = {
  type: 'computer_screenshot'
  image_url?: string
  file_id?: string
}
type BetaFunctionCallItemStatusInput = 'in_progress' | 'completed' | 'incomplete'
type BetaComputerCallOutputItemParamInput = {
  agent?: BetaAgentTagParamInput | null
  id?: string | null
  call_id: string
  type: 'computer_call_output'
  output: BetaComputerScreenshotImageInput
  acknowledged_safety_checks?: BetaComputerCallSafetyCheckParamInput[] | null
  status?: BetaFunctionCallItemStatusInput | null
}
type BetaWebSearchCallStatusInput =
  | 'in_progress'
  | 'searching'
  | 'completed'
  | 'failed'
  | 'incomplete'
type BetaWebSearchActionSearchInput = {
  type: 'search'
  query?: string
  queries?: string[]
  sources?: { type: 'url'; url: string }[]
}
type BetaWebSearchActionOpenPageInput = { type: 'open_page'; url?: string | null }
type BetaWebSearchActionFindInput = { type: 'find_in_page'; url?: string | null; pattern: string }
type BetaWebSearchToolCallInput = {
  agent?: BetaAgentTagInput | null
  id: string
  type: 'web_search_call'
  status: BetaWebSearchCallStatusInput
  action?:
    | BetaWebSearchActionSearchInput
    | BetaWebSearchActionOpenPageInput
    | BetaWebSearchActionFindInput
}
type BetaDirectToolCallCallerInput = { type: 'direct' }
type BetaProgramToolCallCallerInput = { type: 'program'; caller_id: string }
type BetaToolCallCallerInput = BetaDirectToolCallCallerInput | BetaProgramToolCallCallerInput
type BetaFunctionToolCallInput = {
  agent?: BetaAgentTagInput | null
  id?: string
  type: 'function_call'
  call_id: string
  caller?: BetaToolCallCallerInput | null
  namespace?: string
  name: string
  arguments: string
  status?: 'in_progress' | 'completed' | 'incomplete'
  async?: boolean
}
type BetaPromptCacheBreakpointParamInput = { mode: 'explicit'; ttl?: '30m' | '12h' }
type BetaInputTextContentParamInput = {
  type: 'input_text'
  text: string
  prompt_cache_breakpoint?: BetaPromptCacheBreakpointParamInput | null
}
type BetaDetailEnumInput = 'low' | 'high' | 'auto' | 'original'
type BetaInputImageContentParamAutoParamInput = {
  type: 'input_image'
  image_url?: string | null
  file_id?: string | null
  detail?: BetaDetailEnumInput | null
  prompt_cache_breakpoint?: BetaPromptCacheBreakpointParamInput | null
}
type BetaFileDetailEnumInput = 'auto' | 'low' | 'high'
type BetaInputFileContentParamInput = {
  type: 'input_file'
  file_id?: string | null
  filename?: string | null
  file_data?: string | null
  file_url?: string | null
  detail?: BetaFileDetailEnumInput
  prompt_cache_breakpoint?: BetaPromptCacheBreakpointParamInput | null
}
type BetaDirectToolCallCallerParamInput = { type: 'direct' }
type BetaProgramToolCallCallerParamInput = { type: 'program'; caller_id: string }
type BetaToolCallCallerParamInput =
  | BetaDirectToolCallCallerParamInput
  | BetaProgramToolCallCallerParamInput
type BetaFunctionCallOutputItemParamInput = {
  agent?: BetaAgentTagParamInput | null
  id?: string | null
  call_id?: string | null
  type: 'function_call_output'
  output:
    | string
    | (
        | BetaInputTextContentParamInput
        | BetaInputImageContentParamAutoParamInput
        | BetaInputFileContentParamInput
      )[]
  name?: string | null
  namespace?: string | null
  caller?: BetaToolCallCallerParamInput | null
  status?: BetaFunctionCallItemStatusInput | null
}
type BetaEncryptedContentParamInput = { type: 'encrypted_content'; encrypted_content: string }
type BetaAgentMessageItemParamInput = {
  agent?: BetaAgentTagParamInput | null
  id?: string | null
  type: 'agent_message'
  author: string
  recipient: string
  content: (
    | BetaInputTextContentParamInput
    | BetaInputImageContentParamAutoParamInput
    | BetaEncryptedContentParamInput
  )[]
}
type BetaMultiAgentAction1Input =
  | 'spawn_agent'
  | 'interrupt_agent'
  | 'list_agents'
  | 'send_message'
  | 'followup_task'
  | 'wait_agent'
type BetaMultiAgentCallItemParamInput = {
  agent?: BetaAgentTagParamInput | null
  id?: string | null
  call_id: string
  type: 'multi_agent_call'
  action: BetaMultiAgentAction1Input
  arguments: string
}
type BetaFileCitationParamInput = {
  type: 'file_citation'
  index: number
  file_id: string
  filename: string
}
type BetaUrlCitationParamInput = {
  type: 'url_citation'
  start_index: number
  end_index: number
  url: string
  title: string
}
type BetaContainerFileCitationParamInput = {
  type: 'container_file_citation'
  start_index: number
  end_index: number
  container_id: string
  file_id: string
  filename: string
}
type BetaOutputTextContentParamInput = {
  type: 'output_text'
  text: string
  annotations?: (
    | BetaFileCitationParamInput
    | BetaUrlCitationParamInput
    | BetaContainerFileCitationParamInput
  )[]
}
type BetaMultiAgentCallOutputItemParamInput = {
  agent?: BetaAgentTagParamInput | null
  id?: string | null
  call_id: string
  type: 'multi_agent_call_output'
  action: BetaMultiAgentAction1Input
  output: BetaOutputTextContentParamInput[]
}
type BetaToolSearchCallItemParamInput = {
  agent?: BetaAgentTagParamInput | null
  id?: string | null
  call_id?: string | null
  type: 'tool_search_call'
  execution?: BetaToolSearchExecutionTypeInput
  arguments: BetaEmptyModelParamInput
  status?: BetaFunctionCallItemStatusInput | null
}
type BetaToolSearchOutputFunctionToolParamInput = {
  name: string
  description?: string | null
  parameters?: BetaEmptyModelParamInput | null
  strict?: boolean | null
  type: 'function'
  async?: boolean
  output_schema?: { [key: string]: any } | null
  defer_loading?: boolean
  allowed_callers?: BetaCallableToolAllowedCallerInput[] | null
}
type BetaToolSearchOutputNamespaceToolParamInput = {
  type: 'namespace'
  name: string
  description: string
  tools: (BetaToolSearchOutputFunctionToolParamInput | BetaCustomToolParamInput)[]
}
type BetaToolSearchOutputToolInput =
  | BetaFunctionToolInput
  | BetaFileSearchToolInput
  | BetaComputerToolInput
  | BetaComputerUsePreviewToolInput
  | BetaWebSearchToolInput
  | BetaMCPToolInput
  | BetaCodeInterpreterToolInput
  | BetaProgrammaticToolCallingParamInput
  | BetaImageGenToolInput
  | BetaLocalShellToolParamInput
  | BetaFunctionShellToolParamInput
  | BetaCustomToolParamInput
  | BetaToolSearchOutputNamespaceToolParamInput
  | BetaToolSearchToolParamInput
  | BetaWebSearchPreviewToolInput
  | BetaApplyPatchToolParamInput
type BetaToolSearchOutputItemParamInput = {
  agent?: BetaAgentTagParamInput | null
  id?: string | null
  call_id?: string | null
  type: 'tool_search_output'
  execution?: BetaToolSearchExecutionTypeInput
  tools: BetaToolSearchOutputToolInput[]
  status?: BetaFunctionCallItemStatusInput | null
}
type BetaAdditionalToolsItemParamInput = {
  agent?: BetaAgentTagParamInput | null
  id?: string | null
  type: 'additional_tools'
  role: 'developer'
  tools: BetaToolInput[]
}
type BetaResponseConfigurationUpdateItemParamInput = {
  agent?: BetaAgentTagParamInput | null
  id?: string | null
  type: 'configuration_update'
  reasoning?: { effort?: BetaReasoningEffortInput }
  text?: { format: BetaResponseFormatTextInput | BetaTextResponseFormatJsonSchemaInput }
}
type BetaSummaryTextContentInput = { type: 'summary_text'; text: string }
type BetaReasoningTextContentInput = { type: 'reasoning_text'; text: string }
type BetaReasoningItemInput = {
  agent?: BetaAgentTagInput | null
  type: 'reasoning'
  id: string
  encrypted_content?: string | null
  summary: BetaSummaryTextContentInput[]
  content?: BetaReasoningTextContentInput[]
  status?: 'in_progress' | 'completed' | 'incomplete'
}
type BetaCompactionSummaryItemParamInput = {
  agent?: BetaAgentTagParamInput | null
  id?: string | null
  type: 'compaction'
  encrypted_content: string
}
type BetaImageGenToolCallModerationDetailsInput = {
  moderation_stage: 'input' | 'output' | 'unknown'
  categories: string[]
}
type BetaImageGenToolCallErrorInput = {
  code: string | null
  type: string
  message: string
  param: string | null
  moderation_details?: BetaImageGenToolCallModerationDetailsInput
}
type BetaImageBackgroundInput = 'transparent' | 'opaque' | 'auto'
type BetaImageOutputFormatInput = 'png' | 'webp' | 'jpeg' | 'gif' | 'svg'
type BetaSvgUsageInput = {
  model: string
  input_tokens: number
  output_tokens: number
  total_tokens: number
  reasoning_tokens: number
}
type BetaImageGenToolCallInput = {
  agent?: BetaAgentTagInput | null
  type: 'image_generation_call'
  id: string
  status: 'in_progress' | 'completed' | 'generating' | 'failed'
  result: string | null
  error?: BetaImageGenToolCallErrorInput
  size?: (string | '1024x1024' | '1024x1536' | '1536x1024') | null
  quality?: 'low' | 'medium' | 'high' | 'xhigh' | 'max' | 'auto' | null
  action?: BetaImageGenActionEnumInput | null
  background?: BetaImageBackgroundInput | null
  output_format?: BetaImageOutputFormatInput | null
  svg_usage?: BetaSvgUsageInput
  revised_prompt?: string | null
}
type BetaCodeInterpreterOutputLogsInput = { type: 'logs'; logs: string }
type BetaCodeInterpreterOutputImageInput = { type: 'image'; url: string }
type BetaCodeInterpreterToolCallInput = {
  agent?: BetaAgentTagInput | null
  type: 'code_interpreter_call'
  id: string
  status: 'in_progress' | 'completed' | 'incomplete' | 'interpreting' | 'failed'
  container_id: string
  code: string | null
  outputs: (BetaCodeInterpreterOutputLogsInput | BetaCodeInterpreterOutputImageInput)[] | null
}
type BetaLocalShellExecActionInput = {
  type: 'exec'
  command: string[]
  timeout_ms?: number | null
  working_directory?: string | null
  env: { [key: string]: string }
  user?: string | null
}
type BetaLocalShellToolCallInput = {
  agent?: BetaAgentTagInput | null
  type: 'local_shell_call'
  id: string
  call_id: string
  action: BetaLocalShellExecActionInput
  status: 'in_progress' | 'completed' | 'incomplete'
}
type BetaLocalShellToolCallOutputInput = {
  agent?: BetaAgentTagInput | null
  type: 'local_shell_call_output'
  id: string
  output: string
  status?: 'in_progress' | 'completed' | 'incomplete' | null
}
type BetaFunctionShellActionParamInput = {
  commands: string[]
  timeout_ms?: number | null
  max_output_length?: number | null
}
type BetaFunctionShellCallItemStatusInput = 'in_progress' | 'completed' | 'incomplete'
type BetaFunctionShellCallItemParamInput = {
  agent?: BetaAgentTagParamInput | null
  id?: string | null
  call_id: string
  caller?: BetaToolCallCallerParamInput | null
  type: 'shell_call'
  action: BetaFunctionShellActionParamInput
  status?: BetaFunctionShellCallItemStatusInput | null
  environment?: (BetaLocalEnvironmentParamInput | BetaContainerReferenceParamInput) | null
}
type BetaFunctionShellCallOutputTimeoutOutcomeParamInput = { type: 'timeout' }
type BetaFunctionShellCallOutputExitOutcomeParamInput = { type: 'exit'; exit_code: number }
type BetaFunctionShellCallOutputOutcomeParamInput =
  | BetaFunctionShellCallOutputTimeoutOutcomeParamInput
  | BetaFunctionShellCallOutputExitOutcomeParamInput
type BetaFunctionShellCallOutputContentParamInput = {
  stdout: string
  stderr: string
  outcome: BetaFunctionShellCallOutputOutcomeParamInput
}
type BetaFunctionShellCallOutputItemParamInput = {
  agent?: BetaAgentTagParamInput | null
  id?: string | null
  call_id: string
  caller?: BetaToolCallCallerParamInput | null
  type: 'shell_call_output'
  output: BetaFunctionShellCallOutputContentParamInput[]
  status?: BetaFunctionShellCallItemStatusInput | null
  max_output_length?: number | null
}
type BetaApplyPatchCallStatusParamInput = 'in_progress' | 'completed'
type BetaApplyPatchCreateFileOperationParamInput = {
  type: 'create_file'
  path: string
  diff: string
}
type BetaApplyPatchDeleteFileOperationParamInput = { type: 'delete_file'; path: string }
type BetaApplyPatchUpdateFileOperationParamInput = {
  type: 'update_file'
  path: string
  diff: string
}
type BetaApplyPatchOperationParamInput =
  | BetaApplyPatchCreateFileOperationParamInput
  | BetaApplyPatchDeleteFileOperationParamInput
  | BetaApplyPatchUpdateFileOperationParamInput
type BetaApplyPatchToolCallItemParamInput = {
  agent?: BetaAgentTagParamInput | null
  type: 'apply_patch_call'
  id?: string | null
  call_id: string
  caller?: BetaToolCallCallerParamInput | null
  status: BetaApplyPatchCallStatusParamInput
  operation: BetaApplyPatchOperationParamInput
}
type BetaApplyPatchCallOutputStatusParamInput = 'completed' | 'failed'
type BetaApplyPatchToolCallOutputItemParamInput = {
  agent?: BetaAgentTagParamInput | null
  type: 'apply_patch_call_output'
  id?: string | null
  call_id: string
  caller?: BetaToolCallCallerParamInput | null
  status: BetaApplyPatchCallOutputStatusParamInput
  output?: string | null
}
type BetaMCPListToolsToolInput = {
  name: string
  description?: string | null
  input_schema: { [key: string]: unknown }
  annotations?: { [key: string]: unknown } | null
}
type BetaMCPListToolsInput = {
  agent?: BetaAgentTagInput | null
  type: 'mcp_list_tools'
  id: string
  server_label: string
  tools: BetaMCPListToolsToolInput[]
  error?: string | null
}
type BetaMCPApprovalRequestInput = {
  agent?: BetaAgentTagInput | null
  type: 'mcp_approval_request'
  id: string
  server_label: string
  name: string
  arguments: string
}
type BetaMCPApprovalResponseInput = {
  agent?: BetaAgentTagInput | null
  type: 'mcp_approval_response'
  id?: string | null
  approval_request_id: string
  approve: boolean
  reason?: string | null
}
type BetaMCPProtocolErrorInput = { type: 'mcp_protocol_error'; code: number; message: string }
type BetaMCPToolExecutionErrorInput = { type: 'mcp_tool_execution_error'; content: any }
type BetaHTTPErrorInput = { type: 'http_error'; code: number; message: string }
type BetaMCPToolCallErrorInput =
  | BetaMCPProtocolErrorInput
  | BetaMCPToolExecutionErrorInput
  | BetaHTTPErrorInput
type BetaMCPToolCallStatusInput = 'in_progress' | 'completed' | 'incomplete' | 'calling' | 'failed'
type BetaMCPToolCallInput = {
  agent?: BetaAgentTagInput | null
  type: 'mcp_call'
  id: string
  server_label: string
  name: string
  arguments: string
  output?: string | null
  error?: BetaMCPToolCallErrorInput | null
  status?: BetaMCPToolCallStatusInput
  approval_request_id?: string | null
}
type BetaFunctionAndCustomToolCallOutputInput =
  | BetaInputTextContentInput
  | BetaInputImageContentInput
  | BetaInputFileContentInput
type BetaCustomToolCallOutputInput = {
  agent?: BetaAgentTagInput | null
  type: 'custom_tool_call_output'
  id?: string
  call_id: string
  caller?: BetaToolCallCallerParamInput | null
  output: string | BetaFunctionAndCustomToolCallOutputInput[]
}
type BetaCustomToolCallInput = {
  agent?: BetaAgentTagInput | null
  type: 'custom_tool_call'
  id?: string
  call_id: string
  caller?: BetaToolCallCallerInput | null
  namespace?: string
  name: string
  input: string
  async?: boolean
}
type BetaItemInput =
  | BetaInputMessageInput
  | BetaOutputMessageInput
  | BetaFileSearchToolCallInput
  | BetaComputerToolCallInput
  | BetaComputerCallOutputItemParamInput
  | BetaWebSearchToolCallInput
  | BetaFunctionToolCallInput
  | BetaFunctionCallOutputItemParamInput
  | BetaAgentMessageItemParamInput
  | BetaMultiAgentCallItemParamInput
  | BetaMultiAgentCallOutputItemParamInput
  | BetaToolSearchCallItemParamInput
  | BetaToolSearchOutputItemParamInput
  | BetaAdditionalToolsItemParamInput
  | BetaResponseConfigurationUpdateItemParamInput
  | BetaReasoningItemInput
  | BetaCompactionSummaryItemParamInput
  | BetaImageGenToolCallInput
  | BetaCodeInterpreterToolCallInput
  | BetaLocalShellToolCallInput
  | BetaLocalShellToolCallOutputInput
  | BetaFunctionShellCallItemParamInput
  | BetaFunctionShellCallOutputItemParamInput
  | BetaApplyPatchToolCallItemParamInput
  | BetaApplyPatchToolCallOutputItemParamInput
  | BetaMCPListToolsInput
  | BetaMCPApprovalRequestInput
  | BetaMCPApprovalResponseInput
  | BetaMCPToolCallInput
  | BetaCustomToolCallOutputInput
  | BetaCustomToolCallInput
type BetaCompactionTriggerItemParamInput = {
  agent?: BetaAgentTagParamInput | null
  id?: string | null
  type: 'compaction_trigger'
}
type BetaItemReferenceParamInput = {
  agent?: BetaAgentTagParamInput | null
  type?: 'item_reference' | null
  id: string
}
type BetaProgramItemParamInput = {
  agent?: BetaAgentTagParamInput | null
  id: string
  type: 'program'
  call_id: string
  code: string
  fingerprint: string
}
type BetaProgramOutputItemStatusInput = 'completed' | 'incomplete'
type BetaProgramOutputItemParamInput = {
  agent?: BetaAgentTagParamInput | null
  id: string
  type: 'program_output'
  call_id: string
  result: string
  status: BetaProgramOutputItemStatusInput
}
type BetaInputItemInput =
  | BetaEasyInputMessageInput
  | BetaItemInput
  | BetaCompactionTriggerItemParamInput
  | BetaItemReferenceParamInput
  | BetaProgramItemParamInput
  | BetaProgramOutputItemParamInput
type BetaInputParamInput = string | BetaInputItemInput[]
type BetaIncludeEnumInput =
  | 'file_search_call.results'
  | 'web_search_call.results'
  | 'web_search_call.action.sources'
  | 'message.input_image.image_url'
  | 'computer_call_output.output.image_url'
  | 'code_interpreter_call.outputs'
  | 'reasoning.encrypted_content'
  | 'message.output_text.logprobs'
type BetaModerationModeInput = 'score' | 'block'
type BetaModerationConfigParamInput = { mode: BetaModerationModeInput }
type BetaModerationPolicyParamInput = {
  input?: BetaModerationConfigParamInput | null
  output?: BetaModerationConfigParamInput | null
}
type BetaModerationParamInput = { model: string; policy?: BetaModerationPolicyParamInput | null }
type BetaBackgroundCompletionWindowEnumInput = 'soonest' | '2h' | '8h'
type BetaBackgroundOptionsParamInput = {
  completion_window?: BetaBackgroundCompletionWindowEnumInput
  continuation_id?: string
}
type BetaResponseStreamOptionsInput = { include_obfuscation?: boolean } | null
type BetaConversationParam_2Input = { id: string }
type BetaConversationParamInput = (string | BetaConversationParam_2Input) | null
type BetaContextManagementParamInput = { type: string; compact_threshold?: number | null }
type BetaMultiAgentParamInput = { enabled: boolean; max_concurrent_subagents?: number }
type BetaCreateResponseInput = BetaCreateModelResponsePropertiesInput &
  BetaResponsePropertiesInput & {
    access_programs?: BetaAccessProgramsParamInput
    image?: BetaImageOptionsParamInput
    prompt_cache_options?: BetaResponsePromptCacheOptionsParamInput
    service_tier?: BetaServiceTierResponsesInput
    truncation?: 'auto' | 'disabled' | null
    reasoning?: BetaReasoningInput | null
    input?: BetaInputParamInput
    include?: BetaIncludeEnumInput[] | null
    parallel_tool_calls?: boolean | null
    store?: boolean | null
    instructions?: string | null
    moderation?: BetaModerationParamInput | null
    background_options?: BetaBackgroundOptionsParamInput
    stream?: boolean | null
    stream_options?: BetaResponseStreamOptionsInput
    conversation?: BetaConversationParamInput | null
    context_management?: BetaContextManagementParamInput[] | null
    max_output_tokens?: number | null
    multi_agent?: BetaMultiAgentParamInput | null
  }
type BetaMetadata = { [key: string]: string } | null
type BetaModelResponseProperties = {
  metadata?: BetaMetadata | undefined
  top_logprobs?: (number | null) | undefined
  temperature?: (number | null) | undefined
  top_p?: (number | null) | undefined
  user?: (string | null) | undefined
  safety_identifier?: (string | null) | undefined
  prompt_cache_key?: (string | null) | undefined
  prompt_cache_retention?: ('in_memory' | '24h' | null) | undefined
}
type BetaModelIdsShared =
  | string
  | 'gpt-6-astra'
  | 'gpt-6.2-astra'
  | 'gpt-6.1-sol'
  | 'gpt-6.2-sol'
  | 'gpt-6.1-terra'
  | 'gpt-6-sol'
  | 'gpt-6-luna'
  | 'gpt-5.6-sol'
  | 'gpt-5.6-terra'
  | 'gpt-5.6-luna'
  | 'gpt-5.5'
  | 'gpt-5.5-2026-04-23'
  | 'gpt-5.4'
  | 'gpt-5.4-mini'
  | 'gpt-5.4-nano'
  | 'gpt-5.4-mini-2026-03-17'
  | 'gpt-5.4-nano-2026-03-17'
  | 'gpt-5.3-chat-latest'
  | 'gpt-5.2'
  | 'gpt-5.2-2025-12-11'
  | 'gpt-5.2-chat-latest'
  | 'gpt-5.2-pro'
  | 'gpt-5.2-pro-2025-12-11'
  | 'gpt-5.1'
  | 'gpt-5.1-2025-11-13'
  | 'gpt-5.1-codex'
  | 'gpt-5.1-mini'
  | 'gpt-5.1-chat-latest'
  | 'gpt-5'
  | 'gpt-5-mini'
  | 'gpt-5-nano'
  | 'gpt-5-2025-08-07'
  | 'gpt-5-mini-2025-08-07'
  | 'gpt-5-nano-2025-08-07'
  | 'gpt-5-chat-latest'
  | 'gpt-4.1'
  | 'gpt-4.1-mini'
  | 'gpt-4.1-nano'
  | 'gpt-4.1-2025-04-14'
  | 'gpt-4.1-mini-2025-04-14'
  | 'gpt-4.1-nano-2025-04-14'
  | 'o4-mini'
  | 'o4-mini-2025-04-16'
  | 'o3'
  | 'o3-2025-04-16'
  | 'o3-mini'
  | 'o3-mini-2025-01-31'
  | 'o1'
  | 'o1-2024-12-17'
  | 'o1-preview'
  | 'o1-preview-2024-09-12'
  | 'o1-mini'
  | 'o1-mini-2024-09-12'
  | 'gpt-4o'
  | 'gpt-4o-2024-11-20'
  | 'gpt-4o-2024-08-06'
  | 'gpt-4o-2024-05-13'
  | 'gpt-audio-mini'
  | 'gpt-audio-mini-2025-12-15'
  | 'gpt-4o-audio-preview'
  | 'gpt-4o-audio-preview-2024-10-01'
  | 'gpt-4o-audio-preview-2024-12-17'
  | 'gpt-4o-audio-preview-2025-06-03'
  | 'gpt-4o-mini-audio-preview'
  | 'gpt-4o-mini-audio-preview-2024-12-17'
  | 'gpt-4o-search-preview'
  | 'gpt-4o-mini-search-preview'
  | 'gpt-4o-search-preview-2025-03-11'
  | 'gpt-4o-mini-search-preview-2025-03-11'
  | 'chatgpt-4o-latest'
  | 'codex-mini-latest'
  | 'gpt-4o-mini'
  | 'gpt-4o-mini-2024-07-18'
  | 'gpt-4-turbo'
  | 'gpt-4-turbo-2024-04-09'
  | 'gpt-4-0125-preview'
  | 'gpt-4-turbo-preview'
  | 'gpt-4-1106-preview'
  | 'gpt-4-vision-preview'
  | 'gpt-4'
  | 'gpt-4-0314'
  | 'gpt-4-0613'
  | 'gpt-4-32k'
  | 'gpt-4-32k-0314'
  | 'gpt-4-32k-0613'
  | 'gpt-3.5-turbo'
  | 'gpt-3.5-turbo-16k'
  | 'gpt-3.5-turbo-0301'
  | 'gpt-3.5-turbo-0613'
  | 'gpt-3.5-turbo-1106'
  | 'gpt-3.5-turbo-0125'
  | 'gpt-3.5-turbo-16k-0613'
type BetaModelIdsResponses =
  | BetaModelIdsShared
  | 'o1-pro'
  | 'o1-pro-2025-03-19'
  | 'o3-pro'
  | 'o3-pro-2025-06-10'
  | 'o3-deep-research'
  | 'o3-deep-research-2025-06-26'
  | 'o4-mini-deep-research'
  | 'o4-mini-deep-research-2025-06-26'
  | 'computer-use-preview'
  | 'computer-use-preview-2025-03-11'
  | 'gpt-5.5-pro'
  | 'gpt-5.5-pro-2026-04-23'
  | 'gpt-5-codex'
  | 'gpt-5-pro'
  | 'gpt-5-pro-2025-10-06'
  | 'gpt-5.1-codex-max'
  | 'gpt-daybreak-blue-latest'
  | 'gpt-daybreak-red-latest'
  | 'gpt-5.6-cyber'
  | 'gpt-6-cyber'
  | 'gpt-rosalind-research'
  | 'gpt-6-rosalind'
  | 'gpt-6.2-astra-law'
  | 'gpt-6-astra-healthcare'
  | 'gpt-6.1-sol-healthcare'
  | 'gpt-6.2-astra-healthcare'
  | 'gpt-6.2-sol-healthcare'
type BetaResponseFormatText = { type: 'text' }
type BetaResponseFormatJsonSchemaSchema = { [key: string]: unknown }
type BetaTextResponseFormatJsonSchema = {
  type: 'json_schema'
  description?: string | undefined
  name: string
  schema: BetaResponseFormatJsonSchemaSchema
  strict?: (boolean | null) | undefined
}
type BetaResponseFormatJsonObject = { type: 'json_object' }
type BetaTextResponseFormatConfiguration =
  | BetaResponseFormatText
  | BetaTextResponseFormatJsonSchema
  | BetaResponseFormatJsonObject
type BetaVerbosity = 'low' | 'medium' | 'high' | null
type BetaResponseTextParam = {
  format?: BetaTextResponseFormatConfiguration | undefined
  verbosity?: BetaVerbosity | undefined
}
type BetaCallableToolAllowedCaller = 'direct' | 'programmatic'
type BetaFunctionTool = {
  type: 'function'
  name: string
  async?: boolean | undefined
  description?: (string | null) | undefined
  parameters: { [key: string]: any } | null
  output_schema?: ({ [key: string]: any } | null) | undefined
  strict: boolean | null
  defer_loading?: boolean | undefined
  allowed_callers?: (BetaCallableToolAllowedCaller[] | null) | undefined
}
type BetaRankerVersionType = 'auto' | 'default-2024-11-15'
type BetaHybridSearchOptions = { embedding_weight: number; text_weight: number }
type BetaRankingOptions = {
  ranker?: BetaRankerVersionType | undefined
  score_threshold?: number | undefined
  hybrid_search?: BetaHybridSearchOptions | undefined
}
type BetaComparisonFilter = {
  type: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | 'nin'
  key: string
  value: string | number | boolean | (string | number)[]
}
type BetaCompoundFilter = {
  type: 'and' | 'or'
  filters: (BetaComparisonFilter | BetaCompoundFilter)[]
}
type BetaFilters = BetaComparisonFilter | BetaCompoundFilter
type BetaFileSearchTool = {
  type: 'file_search'
  vector_store_ids: string[]
  max_num_results?: number | undefined
  ranking_options?: BetaRankingOptions | undefined
  filters?: (BetaFilters | null) | undefined
}
type BetaComputerTool = { type: 'computer' }
type BetaComputerEnvironment = 'windows' | 'mac' | 'linux' | 'ubuntu' | 'browser'
type BetaComputerUsePreviewTool = {
  type: 'computer_use_preview'
  environment: BetaComputerEnvironment
  display_width: number
  display_height: number
}
type BetaWebSearchApproximateLocation = {
  type?: 'approximate' | undefined
  country?: (string | null) | undefined
  region?: (string | null) | undefined
  city?: (string | null) | undefined
  timezone?: (string | null) | undefined
} | null
type BetaWebSearchTool = {
  type: 'web_search' | 'web_search_2025_08_26'
  external_web_access?: boolean | undefined
  filters?: ({ allowed_domains?: (string[] | null) | undefined } | null) | undefined
  user_location?: BetaWebSearchApproximateLocation | undefined
  search_context_size?: 'low' | 'medium' | 'high' | undefined
}
type BetaMCPToolFilter = { tool_names?: string[] | undefined; read_only?: boolean | undefined }
type BetaMCPTool = {
  type: 'mcp'
  server_label: string
  server_url?: string | undefined
  connector_id?:
    | 'connector_dropbox'
    | 'connector_gmail'
    | 'connector_googlecalendar'
    | 'connector_googledrive'
    | 'connector_microsoftteams'
    | 'connector_outlookcalendar'
    | 'connector_outlookemail'
    | 'connector_sharepoint'
    | undefined
  tunnel_id?: string | undefined
  authorization?: string | undefined
  server_description?: string | undefined
  headers?: ({ [key: string]: string } | null) | undefined
  allowed_tools?: ((string[] | BetaMCPToolFilter) | null) | undefined
  allowed_callers?: (BetaCallableToolAllowedCaller[] | null) | undefined
  require_approval?:
    | (
        | (
            | { always?: BetaMCPToolFilter | undefined; never?: BetaMCPToolFilter | undefined }
            | 'always'
            | 'never'
          )
        | null
      )
    | undefined
  defer_loading?: boolean | undefined
}
type BetaContainerMemoryLimit = '1g' | '4g' | '16g' | '64g'
type BetaContainerNetworkPolicyDisabledParam = { type: 'disabled' }
type BetaContainerNetworkPolicyDomainSecretParam = { domain: string; name: string; value: string }
type BetaContainerNetworkPolicyAllowlistParam = {
  type: 'allowlist'
  allowed_domains: string[]
  domain_secrets?: BetaContainerNetworkPolicyDomainSecretParam[] | undefined
}
type BetaAutoCodeInterpreterToolParam = {
  type: 'auto'
  file_ids?: string[] | undefined
  memory_limit?: (BetaContainerMemoryLimit | null) | undefined
  network_policy?:
    | (BetaContainerNetworkPolicyDisabledParam | BetaContainerNetworkPolicyAllowlistParam)
    | undefined
}
type BetaCodeInterpreterTool = {
  type: 'code_interpreter'
  container: string | BetaAutoCodeInterpreterToolParam
  allowed_callers?: (BetaCallableToolAllowedCaller[] | null) | undefined
}
type BetaProgrammaticToolCallingParam = { type: 'programmatic_tool_calling' }
type BetaReasoningEffortEnum = 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | 'max'
type BetaSvgReasoningParam = { effort?: BetaReasoningEffortEnum | undefined }
type BetaSvgParam = {
  model?: string | undefined
  reasoning?: (BetaSvgReasoningParam | null) | undefined
}
type BetaInputFidelity = 'high' | 'low'
type BetaImageGenActionEnum = 'generate' | 'edit' | 'auto'
type BetaImageGenTool = {
  type: 'image_generation'
  model?:
    | (
        | string
        | 'gpt-image-1'
        | 'gpt-image-1-mini'
        | 'gpt-image-2'
        | 'gpt-image-2-2026-04-21'
        | 'gpt-image-2.5-sunburst'
        | 'gpt-image-2.5-sunburst-2026-09-08'
        | 'gpt-image-2.5-flare'
        | 'gpt-image-2.5-flare-2026-09-08'
        | 'gpt-image-2.6-sunburst'
        | 'gpt-image-2.6-flare'
        | 'gpt-image-1.5'
        | 'chatgpt-image-latest'
      )
    | undefined
  complexity?: 'low' | 'medium' | 'high' | undefined
  quality?: 'low' | 'medium' | 'high' | 'xhigh' | 'max' | 'auto' | undefined
  size?: (string | '1024x1024' | '1024x1536' | '1536x1024' | 'auto') | undefined
  output_format?: 'png' | 'webp' | 'jpeg' | 'gif' | 'svg' | undefined
  frame_count?: number | undefined
  frame_duration_ms?: number | undefined
  svg?: BetaSvgParam | undefined
  output_compression?: number | undefined
  moderation?: 'auto' | 'low' | undefined
  background?: 'transparent' | 'opaque' | 'auto' | undefined
  input_fidelity?: (BetaInputFidelity | null) | undefined
  input_image_mask?: { image_url?: string | undefined; file_id?: string | undefined } | undefined
  partial_images?: number | undefined
  action?: BetaImageGenActionEnum | undefined
}
type BetaLocalShellToolParam = { type: 'local_shell' }
type BetaSkillReferenceParam = {
  type: 'skill_reference'
  skill_id: string
  version?: string | undefined
}
type BetaInlineSkillSourceParam = { type: 'base64'; media_type: 'application/zip'; data: string }
type BetaInlineSkillParam = {
  type: 'inline'
  name: string
  description: string
  source: BetaInlineSkillSourceParam
}
type BetaContainerAutoParam = {
  type: 'container_auto'
  file_ids?: string[] | undefined
  memory_limit?: (BetaContainerMemoryLimit | null) | undefined
  network_policy?:
    | (BetaContainerNetworkPolicyDisabledParam | BetaContainerNetworkPolicyAllowlistParam)
    | undefined
  skills?: (BetaSkillReferenceParam | BetaInlineSkillParam)[] | undefined
}
type BetaLocalSkillParam = { name: string; description: string; path: string }
type BetaLocalEnvironmentParam = { type: 'local'; skills?: BetaLocalSkillParam[] | undefined }
type BetaContainerReferenceParam = { type: 'container_reference'; container_id: string }
type BetaFunctionShellToolParam = {
  type: 'shell'
  environment?:
    | ((BetaContainerAutoParam | BetaLocalEnvironmentParam | BetaContainerReferenceParam) | null)
    | undefined
  allowed_callers?: (BetaCallableToolAllowedCaller[] | null) | undefined
}
type BetaCustomTextFormatParam = { type: 'text' }
type BetaGrammarSyntax1 = 'lark' | 'regex'
type BetaCustomGrammarFormatParam = {
  type: 'grammar'
  syntax: BetaGrammarSyntax1
  definition: string
}
type BetaCustomToolParam = {
  type: 'custom'
  name: string
  async?: boolean | undefined
  description?: string | undefined
  format?: (BetaCustomTextFormatParam | BetaCustomGrammarFormatParam) | undefined
  defer_loading?: boolean | undefined
  allowed_callers?: (BetaCallableToolAllowedCaller[] | null) | undefined
}
type BetaEmptyModelParam = { [key: string]: unknown }
type BetaFunctionToolParam = {
  name: string
  description?: (string | null) | undefined
  parameters?: (BetaEmptyModelParam | null) | undefined
  strict?: (boolean | null) | undefined
  type: 'function'
  async?: boolean | undefined
  output_schema?: ({ [key: string]: any } | null) | undefined
  defer_loading?: boolean | undefined
  allowed_callers?: (BetaCallableToolAllowedCaller[] | null) | undefined
}
type BetaNamespaceToolParam = {
  type: 'namespace'
  name: string
  description: string
  tools: (BetaFunctionToolParam | BetaCustomToolParam)[]
}
type BetaToolSearchExecutionType = 'server' | 'client'
type BetaToolSearchToolParam = {
  type: 'tool_search'
  execution?: BetaToolSearchExecutionType | undefined
  description?: (string | null) | undefined
  parameters?: (BetaEmptyModelParam | null) | undefined
}
type BetaApproximateLocation = {
  type: 'approximate'
  country?: (string | null) | undefined
  region?: (string | null) | undefined
  city?: (string | null) | undefined
  timezone?: (string | null) | undefined
}
type BetaSearchContextSize = 'low' | 'medium' | 'high'
type BetaSearchContentType = 'text' | 'image'
type BetaWebSearchPreviewTool = {
  type: 'web_search_preview' | 'web_search_preview_2025_03_11'
  user_location?: (BetaApproximateLocation | null) | undefined
  search_context_size?: BetaSearchContextSize | undefined
  search_content_types?: BetaSearchContentType[] | undefined
}
type BetaApplyPatchToolParam = {
  type: 'apply_patch'
  allowed_callers?: (BetaCallableToolAllowedCaller[] | null) | undefined
}
type BetaTool =
  | BetaFunctionTool
  | BetaFileSearchTool
  | BetaComputerTool
  | BetaComputerUsePreviewTool
  | BetaWebSearchTool
  | BetaMCPTool
  | BetaCodeInterpreterTool
  | BetaProgrammaticToolCallingParam
  | BetaImageGenTool
  | BetaLocalShellToolParam
  | BetaFunctionShellToolParam
  | BetaCustomToolParam
  | BetaNamespaceToolParam
  | BetaToolSearchToolParam
  | BetaWebSearchPreviewTool
  | BetaApplyPatchToolParam
type BetaToolsArray = BetaTool[]
type BetaToolChoiceOptions = 'none' | 'auto' | 'required'
type BetaToolChoiceAllowed = {
  type: 'allowed_tools'
  mode: 'auto' | 'required'
  tools: { [key: string]: unknown }[]
}
type BetaToolChoiceTypes = {
  type:
    | 'file_search'
    | 'web_search_preview'
    | 'computer'
    | 'computer_use_preview'
    | 'computer_use'
    | 'web_search_preview_2025_03_11'
    | 'image_generation'
    | 'code_interpreter'
}
type BetaToolChoiceFunction = { type: 'function'; name: string }
type BetaToolChoiceMCP = { type: 'mcp'; server_label: string; name?: (string | null) | undefined }
type BetaToolChoiceCustom = { type: 'custom'; name: string }
type BetaSpecificProgrammaticToolCallingParam = { type: 'programmatic_tool_calling' }
type BetaSpecificApplyPatchParam = { type: 'apply_patch' }
type BetaSpecificFunctionShellParam = { type: 'shell' }
type BetaToolChoiceParam =
  | BetaToolChoiceOptions
  | BetaToolChoiceAllowed
  | BetaToolChoiceTypes
  | BetaToolChoiceFunction
  | BetaToolChoiceMCP
  | BetaToolChoiceCustom
  | BetaSpecificProgrammaticToolCallingParam
  | BetaSpecificApplyPatchParam
  | BetaSpecificFunctionShellParam
type BetaPromptCacheBreakpointConfig = { mode: 'explicit'; ttl?: '30m' | '12h' | undefined }
type BetaInputTextContent = {
  type: 'input_text'
  text: string
  prompt_cache_breakpoint?: BetaPromptCacheBreakpointConfig | undefined
}
type BetaImageDetail = 'low' | 'high' | 'auto' | 'original'
type BetaInputImageContent = {
  type: 'input_image'
  image_url?: (string | null) | undefined
  file_id?: (string | null) | undefined
  detail: BetaImageDetail
  prompt_cache_breakpoint?: BetaPromptCacheBreakpointConfig | undefined
}
type BetaFileInputDetail = 'auto' | 'low' | 'high'
type BetaInputFileContent = {
  type: 'input_file'
  file_id?: (string | null) | undefined
  filename?: string | undefined
  file_data?: string | undefined
  prompt_cache_breakpoint?: BetaPromptCacheBreakpointConfig | undefined
  file_url?: string | undefined
  detail?: BetaFileInputDetail | undefined
}
type BetaResponsePromptVariables = {
  [key: string]: string | BetaInputTextContent | BetaInputImageContent | BetaInputFileContent
} | null
type BetaPrompt = {
  id: string
  version?: (string | null) | undefined
  variables?: BetaResponsePromptVariables | undefined
} | null
type BetaResponseProperties = {
  previous_response_id?: (string | null) | undefined
  model?: BetaModelIdsResponses | undefined
  background?: (boolean | null) | undefined
  max_tool_calls?: (number | null) | undefined
  text?: BetaResponseTextParam | undefined
  tools?: BetaToolsArray | undefined
  tool_choice?: BetaToolChoiceParam | undefined
  prompt?: BetaPrompt | undefined
}
type BetaResolvedImageContextCompressionEnum = 'enabled' | 'disabled'
type BetaResolvedImageOptions = { context_compression: BetaResolvedImageContextCompressionEnum }
type BetaServiceTierResponses =
  | 'auto'
  | 'default'
  | 'flex'
  | 'scale'
  | 'priority'
  | 'fast'
  | 'ultrafast'
  | null
type BetaCyberAccessProgramEnum = 'standard' | 'daybreak_blue' | 'daybreak_red'
type BetaAccessProgramsBody = { cyber: BetaCyberAccessProgramEnum }
type BetaResponseErrorCode =
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
type BetaMisalignmentErrorType =
  | string
  | 'potentially_unintended_data_transfer'
  | 'potentially_unintended_data_access'
  | 'potentially_unintended_destructive_activity'
  | 'other'
type BetaMisalignmentSteer = { message: string }
type BetaMisalignmentErrorDetailsResource = {
  review_target?: (string | null) | undefined
  error_type?: BetaMisalignmentErrorType | undefined
  detailed_explanation?: string | undefined
  steer?: BetaMisalignmentSteer | undefined
}
type BetaResponseError = {
  type?: (string | null) | undefined
  param?: (string | null) | undefined
  code: BetaResponseErrorCode
  message: string
  misalignment?: BetaMisalignmentErrorDetailsResource | undefined
} | null
type BetaInputRemovalReason =
  | 'organization_mismatch'
  | 'end_user_mismatch'
  | 'model_mismatch'
  | 'prefix_mismatch'
  | 'turn_boundary'
type BetaReasoningInputTransformation = {
  type: 'reasoning'
  id: string
  action: 'removed'
  reason: BetaInputRemovalReason
}
type BetaAgentTag = { agent_name: string }
type BetaFileCitationBody = {
  type: 'file_citation'
  file_id: string
  index: number
  filename: string
}
type BetaUrlCitationBody = {
  type: 'url_citation'
  url: string
  start_index: number
  end_index: number
  title: string
}
type BetaContainerFileCitationBody = {
  type: 'container_file_citation'
  container_id: string
  file_id: string
  start_index: number
  end_index: number
  filename: string
}
type BetaFilePath = { type: 'file_path'; file_id: string; index: number }
type BetaAnnotation =
  | BetaFileCitationBody
  | BetaUrlCitationBody
  | BetaContainerFileCitationBody
  | BetaFilePath
type BetaTopLogProb = { token: string; logprob: number; bytes: number[] }
type BetaLogProb = {
  token: string
  logprob: number
  bytes: number[]
  top_logprobs: BetaTopLogProb[]
}
type BetaOutputTextContent = {
  type: 'output_text'
  text: string
  annotations: BetaAnnotation[]
  logprobs: BetaLogProb[]
}
type BetaRefusalContent = { type: 'refusal'; refusal: string }
type BetaOutputMessageContent = BetaOutputTextContent | BetaRefusalContent
type BetaMessagePhase = 'commentary' | 'final_answer'
type BetaOutputMessage = {
  agent?: (BetaAgentTag | null) | undefined
  id: string
  type: 'message'
  role: 'assistant'
  content: BetaOutputMessageContent[]
  phase?: (BetaMessagePhase | null) | undefined
  status: 'in_progress' | 'completed' | 'incomplete'
}
type BetaVectorStoreFileAttributes = { [key: string]: string | number | boolean } | null
type BetaFileSearchToolCall = {
  agent?: (BetaAgentTag | null) | undefined
  id: string
  type: 'file_search_call'
  status: 'in_progress' | 'searching' | 'completed' | 'incomplete' | 'failed'
  queries: string[]
  results?:
    | (
        | {
            file_id?: string | undefined
            text?: string | undefined
            filename?: string | undefined
            attributes?: BetaVectorStoreFileAttributes | undefined
            score?: number | undefined
          }[]
        | null
      )
    | undefined
}
type BetaDirectToolCallCaller = { type: 'direct' }
type BetaProgramToolCallCaller = { type: 'program'; caller_id: string }
type BetaToolCallCaller = BetaDirectToolCallCaller | BetaProgramToolCallCaller
type BetaFunctionToolCall = {
  agent?: (BetaAgentTag | null) | undefined
  id?: string | undefined
  type: 'function_call'
  call_id: string
  caller?: (BetaToolCallCaller | null) | undefined
  namespace?: string | undefined
  name: string
  arguments: string
  status?: 'in_progress' | 'completed' | 'incomplete' | undefined
  async?: boolean | undefined
}
type BetaDirectToolCallCallerParam = { type: 'direct' }
type BetaProgramToolCallCallerParam = { type: 'program'; caller_id: string }
type BetaToolCallCallerParam = BetaDirectToolCallCallerParam | BetaProgramToolCallCallerParam
type BetaFunctionAndCustomToolCallOutput =
  | BetaInputTextContent
  | BetaInputImageContent
  | BetaInputFileContent
type BetaFunctionToolCallOutput = {
  agent?: (BetaAgentTag | null) | undefined
  id?: string | undefined
  type: 'function_call_output'
  call_id?: string | undefined
  name?: string | undefined
  namespace?: string | undefined
  caller?: (BetaToolCallCallerParam | null) | undefined
  output: string | BetaFunctionAndCustomToolCallOutput[]
  status?: 'in_progress' | 'completed' | 'incomplete' | undefined
}
type BetaFunctionCallOutputStatusEnum = 'in_progress' | 'completed' | 'incomplete'
type BetaFunctionToolCallOutputResource = BetaFunctionToolCallOutput & {
  id: string
  status: BetaFunctionCallOutputStatusEnum
  created_by?: string | undefined
}
type BetaTextContent = { type: 'text'; text: string }
type BetaSummaryTextContent = { type: 'summary_text'; text: string }
type BetaReasoningTextContent = { type: 'reasoning_text'; text: string }
type BetaComputerScreenshotContent = {
  type: 'computer_screenshot'
  image_url: string | null
  file_id: string | null
  detail: BetaImageDetail
  prompt_cache_breakpoint?: BetaPromptCacheBreakpointConfig | undefined
}
type BetaEncryptedContent = { type: 'encrypted_content'; encrypted_content: string }
type BetaAgentMessage = {
  agent?: BetaAgentTag | undefined
  type: 'agent_message'
  id: string
  author: string
  recipient: string
  content: (
    | BetaInputTextContent
    | BetaOutputTextContent
    | BetaTextContent
    | BetaSummaryTextContent
    | BetaReasoningTextContent
    | BetaRefusalContent
    | BetaInputImageContent
    | BetaComputerScreenshotContent
    | BetaInputFileContent
    | BetaEncryptedContent
  )[]
}
type BetaMultiAgentAction =
  | 'spawn_agent'
  | 'interrupt_agent'
  | 'list_agents'
  | 'send_message'
  | 'followup_task'
  | 'wait_agent'
type BetaMultiAgentCall = {
  agent?: BetaAgentTag | undefined
  type: 'multi_agent_call'
  id: string
  call_id: string
  action: BetaMultiAgentAction
  arguments: string
}
type BetaMultiAgentCallOutput = {
  agent?: BetaAgentTag | undefined
  type: 'multi_agent_call_output'
  id: string
  call_id: string
  action: BetaMultiAgentAction
  output: BetaOutputTextContent[]
}
type BetaWebSearchCallStatus = 'in_progress' | 'searching' | 'completed' | 'failed' | 'incomplete'
type BetaWebSearchActionSearch = {
  type: 'search'
  query?: string | undefined
  queries?: string[] | undefined
  sources?: { type: 'url'; url: string }[] | undefined
}
type BetaWebSearchActionOpenPage = { type: 'open_page'; url?: (string | null) | undefined }
type BetaWebSearchActionFind = {
  type: 'find_in_page'
  url?: (string | null) | undefined
  pattern: string
}
type BetaWebSearchToolCall = {
  agent?: (BetaAgentTag | null) | undefined
  id: string
  type: 'web_search_call'
  status: BetaWebSearchCallStatus
  action?:
    | (BetaWebSearchActionSearch | BetaWebSearchActionOpenPage | BetaWebSearchActionFind)
    | undefined
}
type BetaClickButtonType = 'left' | 'right' | 'wheel' | 'back' | 'forward'
type BetaClickParam = {
  type: 'click'
  button: BetaClickButtonType
  x: number
  y: number
  keys?: (string[] | null) | undefined
}
type BetaDoubleClickAction = { type: 'double_click'; x: number; y: number; keys: string[] | null }
type BetaCoordParam = { x: number; y: number }
type BetaDragParam = { type: 'drag'; path: BetaCoordParam[]; keys?: (string[] | null) | undefined }
type BetaKeyPressAction = { type: 'keypress'; keys: string[] }
type BetaMoveParam = { type: 'move'; x: number; y: number; keys?: (string[] | null) | undefined }
type BetaScreenshotParam = { type: 'screenshot' }
type BetaScrollParam = {
  type: 'scroll'
  x: number
  y: number
  scroll_x: number
  scroll_y: number
  keys?: (string[] | null) | undefined
}
type BetaTypeParam = { type: 'type'; text: string }
type BetaWaitParam = { type: 'wait' }
type BetaComputerAction =
  | BetaClickParam
  | BetaDoubleClickAction
  | BetaDragParam
  | BetaKeyPressAction
  | BetaMoveParam
  | BetaScreenshotParam
  | BetaScrollParam
  | BetaTypeParam
  | BetaWaitParam
type BetaComputerActionList = BetaComputerAction[]
type BetaComputerCallSafetyCheckParam = {
  id: string
  code?: (string | null) | undefined
  message?: (string | null) | undefined
}
type BetaComputerToolCall = {
  agent?: (BetaAgentTag | null) | undefined
  type: 'computer_call'
  id: string
  call_id: string
  action?: BetaComputerAction | undefined
  actions?: BetaComputerActionList | undefined
  pending_safety_checks: BetaComputerCallSafetyCheckParam[]
  status: 'in_progress' | 'completed' | 'incomplete'
}
type BetaComputerScreenshotImage = {
  type: 'computer_screenshot'
  image_url?: string | undefined
  file_id?: string | undefined
}
type BetaComputerToolCallOutput = {
  agent?: (BetaAgentTag | null) | undefined
  type: 'computer_call_output'
  id?: string | undefined
  call_id: string
  acknowledged_safety_checks?: BetaComputerCallSafetyCheckParam[] | undefined
  output: BetaComputerScreenshotImage
  status?: 'in_progress' | 'completed' | 'incomplete' | undefined
}
type BetaComputerCallOutputStatus = 'completed' | 'incomplete' | 'failed'
type BetaComputerToolCallOutputResource = BetaComputerToolCallOutput & {
  status: BetaComputerCallOutputStatus
  created_by?: string | undefined
}
type BetaReasoningItem = {
  agent?: (BetaAgentTag | null) | undefined
  type: 'reasoning'
  id: string
  encrypted_content?: (string | null) | undefined
  summary: BetaSummaryTextContent[]
  content?: BetaReasoningTextContent[] | undefined
  status?: 'in_progress' | 'completed' | 'incomplete' | undefined
}
type BetaProgram = {
  agent?: BetaAgentTag | undefined
  type: 'program'
  id: string
  call_id: string
  code: string
  fingerprint: string
}
type BetaProgramOutputStatus = 'completed' | 'incomplete'
type BetaProgramOutput = {
  agent?: BetaAgentTag | undefined
  type: 'program_output'
  id: string
  call_id: string
  result: string
  status: BetaProgramOutputStatus
}
type BetaFunctionCallStatus = 'in_progress' | 'completed' | 'incomplete'
type BetaToolSearchCall = {
  agent?: BetaAgentTag | undefined
  type: 'tool_search_call'
  id: string
  call_id: string | null
  execution: BetaToolSearchExecutionType
  arguments: any
  status: BetaFunctionCallStatus
  created_by?: string | undefined
}
type BetaToolSearchOutput = {
  agent?: BetaAgentTag | undefined
  type: 'tool_search_output'
  id: string
  call_id: string | null
  execution: BetaToolSearchExecutionType
  tools: BetaTool[]
  status: BetaFunctionCallOutputStatusEnum
  created_by?: string | undefined
}
type BetaMessageRole =
  | 'unknown'
  | 'user'
  | 'assistant'
  | 'system'
  | 'critic'
  | 'discriminator'
  | 'developer'
  | 'tool'
type BetaAdditionalTools = {
  agent?: BetaAgentTag | undefined
  type: 'additional_tools'
  id: string
  role: BetaMessageRole
  tools: BetaTool[]
}
type BetaCompactionBody = {
  agent?: BetaAgentTag | undefined
  type: 'compaction'
  id: string
  encrypted_content: string
  created_by?: string | undefined
}
type BetaImageGenToolCallModerationDetails = {
  moderation_stage: 'input' | 'output' | 'unknown'
  categories: string[]
}
type BetaImageGenToolCallError = {
  code: string | null
  type: string
  message: string
  param: string | null
  moderation_details?: BetaImageGenToolCallModerationDetails | undefined
}
type BetaImageBackground = 'transparent' | 'opaque' | 'auto'
type BetaImageOutputFormat = 'png' | 'webp' | 'jpeg' | 'gif' | 'svg'
type BetaSvgUsage = {
  model: string
  input_tokens: number
  output_tokens: number
  total_tokens: number
  reasoning_tokens: number
}
type BetaImageGenToolCall = {
  agent?: (BetaAgentTag | null) | undefined
  type: 'image_generation_call'
  id: string
  status: 'in_progress' | 'completed' | 'generating' | 'failed'
  result: string | null
  error?: BetaImageGenToolCallError | undefined
  size?: ((string | '1024x1024' | '1024x1536' | '1536x1024') | null) | undefined
  quality?: ('low' | 'medium' | 'high' | 'xhigh' | 'max' | 'auto' | null) | undefined
  action?: (BetaImageGenActionEnum | null) | undefined
  background?: (BetaImageBackground | null) | undefined
  output_format?: (BetaImageOutputFormat | null) | undefined
  svg_usage?: BetaSvgUsage | undefined
  revised_prompt?: (string | null) | undefined
}
type BetaCodeInterpreterOutputLogs = { type: 'logs'; logs: string }
type BetaCodeInterpreterOutputImage = { type: 'image'; url: string }
type BetaCodeInterpreterToolCall = {
  agent?: (BetaAgentTag | null) | undefined
  type: 'code_interpreter_call'
  id: string
  status: 'in_progress' | 'completed' | 'incomplete' | 'interpreting' | 'failed'
  container_id: string
  code: string | null
  outputs: (BetaCodeInterpreterOutputLogs | BetaCodeInterpreterOutputImage)[] | null
}
type BetaLocalShellExecAction = {
  type: 'exec'
  command: string[]
  timeout_ms?: (number | null) | undefined
  working_directory?: (string | null) | undefined
  env: { [key: string]: string }
  user?: (string | null) | undefined
}
type BetaLocalShellToolCall = {
  agent?: (BetaAgentTag | null) | undefined
  type: 'local_shell_call'
  id: string
  call_id: string
  action: BetaLocalShellExecAction
  status: 'in_progress' | 'completed' | 'incomplete'
}
type BetaLocalShellToolCallOutput = {
  agent?: (BetaAgentTag | null) | undefined
  type: 'local_shell_call_output'
  id: string
  output: string
  status?: ('in_progress' | 'completed' | 'incomplete' | null) | undefined
}
type BetaFunctionShellAction = {
  commands: string[]
  timeout_ms: number | null
  max_output_length: number | null
}
type BetaFunctionShellCallStatus = 'in_progress' | 'completed' | 'incomplete'
type BetaLocalEnvironmentResource = { type: 'local' }
type BetaContainerReferenceResource = { type: 'container_reference'; container_id: string }
type BetaFunctionShellCall = {
  agent?: BetaAgentTag | undefined
  type: 'shell_call'
  id: string
  call_id: string
  caller?: (BetaToolCallCaller | null) | undefined
  action: BetaFunctionShellAction
  status: BetaFunctionShellCallStatus
  environment: (BetaLocalEnvironmentResource | BetaContainerReferenceResource) | null
  created_by?: string | undefined
}
type BetaFunctionShellCallOutputStatusEnum = 'in_progress' | 'completed' | 'incomplete'
type BetaFunctionShellCallOutputTimeoutOutcome = { type: 'timeout' }
type BetaFunctionShellCallOutputExitOutcome = { type: 'exit'; exit_code: number }
type BetaFunctionShellCallOutputContent = {
  stdout: string
  stderr: string
  outcome: BetaFunctionShellCallOutputTimeoutOutcome | BetaFunctionShellCallOutputExitOutcome
  created_by?: string | undefined
}
type BetaFunctionShellCallOutput = {
  agent?: BetaAgentTag | undefined
  type: 'shell_call_output'
  id: string
  call_id: string
  caller?: (BetaToolCallCaller | null) | undefined
  status: BetaFunctionShellCallOutputStatusEnum
  output: BetaFunctionShellCallOutputContent[]
  max_output_length: number | null
  created_by?: string | undefined
}
type BetaApplyPatchCallStatus = 'in_progress' | 'completed'
type BetaApplyPatchCreateFileOperation = { type: 'create_file'; path: string; diff: string }
type BetaApplyPatchDeleteFileOperation = { type: 'delete_file'; path: string }
type BetaApplyPatchUpdateFileOperation = { type: 'update_file'; path: string; diff: string }
type BetaApplyPatchToolCall = {
  agent?: BetaAgentTag | undefined
  type: 'apply_patch_call'
  id: string
  call_id: string
  caller?: (BetaToolCallCaller | null) | undefined
  status: BetaApplyPatchCallStatus
  operation:
    | BetaApplyPatchCreateFileOperation
    | BetaApplyPatchDeleteFileOperation
    | BetaApplyPatchUpdateFileOperation
  created_by?: string | undefined
}
type BetaApplyPatchCallOutputStatus = 'completed' | 'failed'
type BetaApplyPatchToolCallOutput = {
  agent?: BetaAgentTag | undefined
  type: 'apply_patch_call_output'
  id: string
  call_id: string
  caller?: (BetaToolCallCaller | null) | undefined
  status: BetaApplyPatchCallOutputStatus
  output?: (string | null) | undefined
  created_by?: string | undefined
}
type BetaMCPProtocolError = { type: 'mcp_protocol_error'; code: number; message: string }
type BetaMCPToolExecutionError = { type: 'mcp_tool_execution_error'; content: any }
type BetaHTTPError = { type: 'http_error'; code: number; message: string }
type BetaMCPToolCallError = BetaMCPProtocolError | BetaMCPToolExecutionError | BetaHTTPError
type BetaMCPToolCallStatus = 'in_progress' | 'completed' | 'incomplete' | 'calling' | 'failed'
type BetaMCPToolCall = {
  agent?: (BetaAgentTag | null) | undefined
  type: 'mcp_call'
  id: string
  server_label: string
  name: string
  arguments: string
  output?: (string | null) | undefined
  error?: (BetaMCPToolCallError | null) | undefined
  status?: BetaMCPToolCallStatus | undefined
  approval_request_id?: (string | null) | undefined
}
type BetaMCPListToolsTool = {
  name: string
  description?: (string | null) | undefined
  input_schema: { [key: string]: unknown }
  annotations?: ({ [key: string]: unknown } | null) | undefined
}
type BetaMCPListTools = {
  agent?: (BetaAgentTag | null) | undefined
  type: 'mcp_list_tools'
  id: string
  server_label: string
  tools: BetaMCPListToolsTool[]
  error?: (string | null) | undefined
}
type BetaMCPApprovalRequest = {
  agent?: (BetaAgentTag | null) | undefined
  type: 'mcp_approval_request'
  id: string
  server_label: string
  name: string
  arguments: string
}
type BetaMCPApprovalResponseResource = {
  agent?: (BetaAgentTag | null) | undefined
  type: 'mcp_approval_response'
  id: string
  approval_request_id: string
  approve: boolean
  reason?: (string | null) | undefined
}
type BetaCustomToolCall = {
  agent?: (BetaAgentTag | null) | undefined
  type: 'custom_tool_call'
  id?: string | undefined
  call_id: string
  caller?: (BetaToolCallCaller | null) | undefined
  namespace?: string | undefined
  name: string
  input: string
  async?: boolean | undefined
}
type BetaCustomToolCallOutput = {
  agent?: (BetaAgentTag | null) | undefined
  type: 'custom_tool_call_output'
  id?: string | undefined
  call_id: string
  caller?: (BetaToolCallCallerParam | null) | undefined
  output: string | BetaFunctionAndCustomToolCallOutput[]
}
type BetaCustomToolCallOutputResource = BetaCustomToolCallOutput & {
  id: string
  status: BetaFunctionCallOutputStatusEnum
  created_by?: string | undefined
}
type BetaOutputItem =
  | BetaOutputMessage
  | BetaFileSearchToolCall
  | BetaFunctionToolCall
  | BetaFunctionToolCallOutputResource
  | BetaAgentMessage
  | BetaMultiAgentCall
  | BetaMultiAgentCallOutput
  | BetaWebSearchToolCall
  | BetaComputerToolCall
  | BetaComputerToolCallOutputResource
  | BetaReasoningItem
  | BetaProgram
  | BetaProgramOutput
  | BetaToolSearchCall
  | BetaToolSearchOutput
  | BetaAdditionalTools
  | BetaCompactionBody
  | BetaImageGenToolCall
  | BetaCodeInterpreterToolCall
  | BetaLocalShellToolCall
  | BetaLocalShellToolCallOutput
  | BetaFunctionShellCall
  | BetaFunctionShellCallOutput
  | BetaApplyPatchToolCall
  | BetaApplyPatchToolCallOutput
  | BetaMCPToolCall
  | BetaMCPListTools
  | BetaMCPApprovalRequest
  | BetaMCPApprovalResponseResource
  | BetaCustomToolCall
  | BetaCustomToolCallOutputResource
type BetaReasoningModeEnum = string | 'standard' | 'pro'
type BetaReasoningEffort = 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | 'max' | null
type BetaReasoning = {
  mode?: BetaReasoningModeEnum | undefined
  effort?: BetaReasoningEffort | undefined
  summary?: ('auto' | 'concise' | 'detailed' | null) | undefined
  context?: ('auto' | 'current_turn' | 'all_turns' | null) | undefined
  generate_summary?: ('auto' | 'concise' | 'detailed' | null) | undefined
}
type BetaInputContent = BetaInputTextContent | BetaInputImageContent | BetaInputFileContent
type BetaInputMessageContentList = BetaInputContent[]
type BetaEasyInputMessage = {
  role: 'user' | 'assistant' | 'system' | 'developer'
  content: string | BetaInputMessageContentList
  phase?: (BetaMessagePhase | null) | undefined
  type?: 'message' | undefined
}
type BetaInputMessage = {
  agent?: (BetaAgentTag | null) | undefined
  type?: 'message' | undefined
  role: 'user' | 'system' | 'developer'
  status?: 'in_progress' | 'completed' | 'incomplete' | undefined
  content: BetaInputMessageContentList
}
type BetaAgentTagParam = { agent_name: string }
type BetaFunctionCallItemStatus = 'in_progress' | 'completed' | 'incomplete'
type BetaComputerCallOutputItemParam = {
  agent?: (BetaAgentTagParam | null) | undefined
  id?: (string | null) | undefined
  call_id: string
  type: 'computer_call_output'
  output: BetaComputerScreenshotImage
  acknowledged_safety_checks?: (BetaComputerCallSafetyCheckParam[] | null) | undefined
  status?: (BetaFunctionCallItemStatus | null) | undefined
}
type BetaPromptCacheBreakpointParam = { mode: 'explicit'; ttl?: '30m' | '12h' | undefined }
type BetaInputTextContentParam = {
  type: 'input_text'
  text: string
  prompt_cache_breakpoint?: (BetaPromptCacheBreakpointParam | null) | undefined
}
type BetaDetailEnum = 'low' | 'high' | 'auto' | 'original'
type BetaInputImageContentParamAutoParam = {
  type: 'input_image'
  image_url?: (string | null) | undefined
  file_id?: (string | null) | undefined
  detail?: (BetaDetailEnum | null) | undefined
  prompt_cache_breakpoint?: (BetaPromptCacheBreakpointParam | null) | undefined
}
type BetaFileDetailEnum = 'auto' | 'low' | 'high'
type BetaInputFileContentParam = {
  type: 'input_file'
  file_id?: (string | null) | undefined
  filename?: (string | null) | undefined
  file_data?: (string | null) | undefined
  file_url?: (string | null) | undefined
  detail?: BetaFileDetailEnum | undefined
  prompt_cache_breakpoint?: (BetaPromptCacheBreakpointParam | null) | undefined
}
type BetaFunctionCallOutputItemParam = {
  agent?: (BetaAgentTagParam | null) | undefined
  id?: (string | null) | undefined
  call_id?: (string | null) | undefined
  type: 'function_call_output'
  output:
    | string
    | (
        | BetaInputTextContentParam
        | BetaInputImageContentParamAutoParam
        | BetaInputFileContentParam
      )[]
  name?: (string | null) | undefined
  namespace?: (string | null) | undefined
  caller?: (BetaToolCallCallerParam | null) | undefined
  status?: (BetaFunctionCallItemStatus | null) | undefined
}
type BetaEncryptedContentParam = { type: 'encrypted_content'; encrypted_content: string }
type BetaAgentMessageItemParam = {
  agent?: (BetaAgentTagParam | null) | undefined
  id?: (string | null) | undefined
  type: 'agent_message'
  author: string
  recipient: string
  content: (
    | BetaInputTextContentParam
    | BetaInputImageContentParamAutoParam
    | BetaEncryptedContentParam
  )[]
}
type BetaMultiAgentAction1 =
  | 'spawn_agent'
  | 'interrupt_agent'
  | 'list_agents'
  | 'send_message'
  | 'followup_task'
  | 'wait_agent'
type BetaMultiAgentCallItemParam = {
  agent?: (BetaAgentTagParam | null) | undefined
  id?: (string | null) | undefined
  call_id: string
  type: 'multi_agent_call'
  action: BetaMultiAgentAction1
  arguments: string
}
type BetaFileCitationParam = {
  type: 'file_citation'
  index: number
  file_id: string
  filename: string
}
type BetaUrlCitationParam = {
  type: 'url_citation'
  start_index: number
  end_index: number
  url: string
  title: string
}
type BetaContainerFileCitationParam = {
  type: 'container_file_citation'
  start_index: number
  end_index: number
  container_id: string
  file_id: string
  filename: string
}
type BetaOutputTextContentParam = {
  type: 'output_text'
  text: string
  annotations?:
    | (BetaFileCitationParam | BetaUrlCitationParam | BetaContainerFileCitationParam)[]
    | undefined
}
type BetaMultiAgentCallOutputItemParam = {
  agent?: (BetaAgentTagParam | null) | undefined
  id?: (string | null) | undefined
  call_id: string
  type: 'multi_agent_call_output'
  action: BetaMultiAgentAction1
  output: BetaOutputTextContentParam[]
}
type BetaToolSearchCallItemParam = {
  agent?: (BetaAgentTagParam | null) | undefined
  id?: (string | null) | undefined
  call_id?: (string | null) | undefined
  type: 'tool_search_call'
  execution?: BetaToolSearchExecutionType | undefined
  arguments: BetaEmptyModelParam
  status?: (BetaFunctionCallItemStatus | null) | undefined
}
type BetaToolSearchOutputFunctionToolParam = {
  name: string
  description?: (string | null) | undefined
  parameters?: (BetaEmptyModelParam | null) | undefined
  strict?: (boolean | null) | undefined
  type: 'function'
  async?: boolean | undefined
  output_schema?: ({ [key: string]: any } | null) | undefined
  defer_loading?: boolean | undefined
  allowed_callers?: (BetaCallableToolAllowedCaller[] | null) | undefined
}
type BetaToolSearchOutputNamespaceToolParam = {
  type: 'namespace'
  name: string
  description: string
  tools: (BetaToolSearchOutputFunctionToolParam | BetaCustomToolParam)[]
}
type BetaToolSearchOutputTool =
  | BetaFunctionTool
  | BetaFileSearchTool
  | BetaComputerTool
  | BetaComputerUsePreviewTool
  | BetaWebSearchTool
  | BetaMCPTool
  | BetaCodeInterpreterTool
  | BetaProgrammaticToolCallingParam
  | BetaImageGenTool
  | BetaLocalShellToolParam
  | BetaFunctionShellToolParam
  | BetaCustomToolParam
  | BetaToolSearchOutputNamespaceToolParam
  | BetaToolSearchToolParam
  | BetaWebSearchPreviewTool
  | BetaApplyPatchToolParam
type BetaToolSearchOutputItemParam = {
  agent?: (BetaAgentTagParam | null) | undefined
  id?: (string | null) | undefined
  call_id?: (string | null) | undefined
  type: 'tool_search_output'
  execution?: BetaToolSearchExecutionType | undefined
  tools: BetaToolSearchOutputTool[]
  status?: (BetaFunctionCallItemStatus | null) | undefined
}
type BetaAdditionalToolsItemParam = {
  agent?: (BetaAgentTagParam | null) | undefined
  id?: (string | null) | undefined
  type: 'additional_tools'
  role: 'developer'
  tools: BetaTool[]
}
type BetaResponseConfigurationUpdateItemParam = {
  agent?: (BetaAgentTagParam | null) | undefined
  id?: (string | null) | undefined
  type: 'configuration_update'
  reasoning?: { effort?: BetaReasoningEffort | undefined } | undefined
  text?: { format: BetaResponseFormatText | BetaTextResponseFormatJsonSchema } | undefined
}
type BetaCompactionSummaryItemParam = {
  agent?: (BetaAgentTagParam | null) | undefined
  id?: (string | null) | undefined
  type: 'compaction'
  encrypted_content: string
}
type BetaFunctionShellActionParam = {
  commands: string[]
  timeout_ms?: (number | null) | undefined
  max_output_length?: (number | null) | undefined
}
type BetaFunctionShellCallItemStatus = 'in_progress' | 'completed' | 'incomplete'
type BetaFunctionShellCallItemParam = {
  agent?: (BetaAgentTagParam | null) | undefined
  id?: (string | null) | undefined
  call_id: string
  caller?: (BetaToolCallCallerParam | null) | undefined
  type: 'shell_call'
  action: BetaFunctionShellActionParam
  status?: (BetaFunctionShellCallItemStatus | null) | undefined
  environment?: ((BetaLocalEnvironmentParam | BetaContainerReferenceParam) | null) | undefined
}
type BetaFunctionShellCallOutputTimeoutOutcomeParam = { type: 'timeout' }
type BetaFunctionShellCallOutputExitOutcomeParam = { type: 'exit'; exit_code: number }
type BetaFunctionShellCallOutputOutcomeParam =
  | BetaFunctionShellCallOutputTimeoutOutcomeParam
  | BetaFunctionShellCallOutputExitOutcomeParam
type BetaFunctionShellCallOutputContentParam = {
  stdout: string
  stderr: string
  outcome: BetaFunctionShellCallOutputOutcomeParam
}
type BetaFunctionShellCallOutputItemParam = {
  agent?: (BetaAgentTagParam | null) | undefined
  id?: (string | null) | undefined
  call_id: string
  caller?: (BetaToolCallCallerParam | null) | undefined
  type: 'shell_call_output'
  output: BetaFunctionShellCallOutputContentParam[]
  status?: (BetaFunctionShellCallItemStatus | null) | undefined
  max_output_length?: (number | null) | undefined
}
type BetaApplyPatchCallStatusParam = 'in_progress' | 'completed'
type BetaApplyPatchCreateFileOperationParam = { type: 'create_file'; path: string; diff: string }
type BetaApplyPatchDeleteFileOperationParam = { type: 'delete_file'; path: string }
type BetaApplyPatchUpdateFileOperationParam = { type: 'update_file'; path: string; diff: string }
type BetaApplyPatchOperationParam =
  | BetaApplyPatchCreateFileOperationParam
  | BetaApplyPatchDeleteFileOperationParam
  | BetaApplyPatchUpdateFileOperationParam
type BetaApplyPatchToolCallItemParam = {
  agent?: (BetaAgentTagParam | null) | undefined
  type: 'apply_patch_call'
  id?: (string | null) | undefined
  call_id: string
  caller?: (BetaToolCallCallerParam | null) | undefined
  status: BetaApplyPatchCallStatusParam
  operation: BetaApplyPatchOperationParam
}
type BetaApplyPatchCallOutputStatusParam = 'completed' | 'failed'
type BetaApplyPatchToolCallOutputItemParam = {
  agent?: (BetaAgentTagParam | null) | undefined
  type: 'apply_patch_call_output'
  id?: (string | null) | undefined
  call_id: string
  caller?: (BetaToolCallCallerParam | null) | undefined
  status: BetaApplyPatchCallOutputStatusParam
  output?: (string | null) | undefined
}
type BetaMCPApprovalResponse = {
  agent?: (BetaAgentTag | null) | undefined
  type: 'mcp_approval_response'
  id?: (string | null) | undefined
  approval_request_id: string
  approve: boolean
  reason?: (string | null) | undefined
}
type BetaItem =
  | BetaInputMessage
  | BetaOutputMessage
  | BetaFileSearchToolCall
  | BetaComputerToolCall
  | BetaComputerCallOutputItemParam
  | BetaWebSearchToolCall
  | BetaFunctionToolCall
  | BetaFunctionCallOutputItemParam
  | BetaAgentMessageItemParam
  | BetaMultiAgentCallItemParam
  | BetaMultiAgentCallOutputItemParam
  | BetaToolSearchCallItemParam
  | BetaToolSearchOutputItemParam
  | BetaAdditionalToolsItemParam
  | BetaResponseConfigurationUpdateItemParam
  | BetaReasoningItem
  | BetaCompactionSummaryItemParam
  | BetaImageGenToolCall
  | BetaCodeInterpreterToolCall
  | BetaLocalShellToolCall
  | BetaLocalShellToolCallOutput
  | BetaFunctionShellCallItemParam
  | BetaFunctionShellCallOutputItemParam
  | BetaApplyPatchToolCallItemParam
  | BetaApplyPatchToolCallOutputItemParam
  | BetaMCPListTools
  | BetaMCPApprovalRequest
  | BetaMCPApprovalResponse
  | BetaMCPToolCall
  | BetaCustomToolCallOutput
  | BetaCustomToolCall
type BetaCompactionTriggerItemParam = {
  agent?: (BetaAgentTagParam | null) | undefined
  id?: (string | null) | undefined
  type: 'compaction_trigger'
}
type BetaItemReferenceParam = {
  agent?: (BetaAgentTagParam | null) | undefined
  type?: ('item_reference' | null) | undefined
  id: string
}
type BetaProgramItemParam = {
  agent?: (BetaAgentTagParam | null) | undefined
  id: string
  type: 'program'
  call_id: string
  code: string
  fingerprint: string
}
type BetaProgramOutputItemStatus = 'completed' | 'incomplete'
type BetaProgramOutputItemParam = {
  agent?: (BetaAgentTagParam | null) | undefined
  id: string
  type: 'program_output'
  call_id: string
  result: string
  status: BetaProgramOutputItemStatus
}
type BetaInputItem =
  | BetaEasyInputMessage
  | BetaItem
  | BetaCompactionTriggerItemParam
  | BetaItemReferenceParam
  | BetaProgramItemParam
  | BetaProgramOutputItemParam
type BetaCacheWriteTokensDetails = { ttl_30m_tokens: number; ttl_12h_tokens: number }
type BetaResponseUsage = {
  input_tokens: number
  input_tokens_details: {
    cached_tokens: number
    cache_write_tokens: number
    cache_write_tokens_details?: BetaCacheWriteTokensDetails | undefined
  }
  output_tokens: number
  output_tokens_details: { reasoning_tokens: number }
  total_tokens: number
}
type BetaImageGenOutputTokensDetails = { image_tokens: number; text_tokens: number }
type BetaImageGenInputUsageDetails = { text_tokens: number; image_tokens: number }
type BetaCachedUsageDetails = { cached_text_tokens: number; cached_image_tokens: number }
type BetaImageGenToolUsage = {
  input_tokens: number
  total_tokens: number
  output_tokens: number
  output_tokens_details?: BetaImageGenOutputTokensDetails | undefined
  input_tokens_details: BetaImageGenInputUsageDetails
  cached_tokens?: number | undefined
  cached_tokens_details?: BetaCachedUsageDetails | undefined
}
type BetaWebSearchUsage = { num_requests: number }
type BetaResponseToolUsage = { image_gen: BetaImageGenToolUsage; web_search: BetaWebSearchUsage }
type BetaPromptCacheModeEnum = 'implicit' | 'explicit'
type BetaPromptCacheOptions = {
  ttl: '30m' | '12h'
  mode: BetaPromptCacheModeEnum
  comparison_response_id?: (string | null) | undefined
}
type BetaCacheMissReasonTypeEnum =
  | 'model_changed'
  | 'prompt_cache_key_changed'
  | 'tools_changed'
  | 'text_format_changed'
  | 'reasoning_effort_changed'
  | 'verbosity_changed'
  | 'context_compacted'
  | 'input_changed'
  | 'service_tier_changed'
type BetaPromptCacheMissDiagnosticsBody = {
  type: 'cache_miss'
  reason: BetaCacheMissReasonTypeEnum
  cache_missed_tokens: number
  comparison_reusable_tokens?: number | undefined
}
type BetaPromptCacheHitDiagnosticsBody = { type: 'cache_hit' }
type BetaPromptCacheComparisonResponseNotFoundDiagnosticsBody = {
  type: 'comparison_response_not_found'
}
type BetaPromptCacheUnavailableDiagnosticsBody = { type: 'unavailable' }
type BetaPromptCacheDiagnostics =
  | BetaPromptCacheMissDiagnosticsBody
  | BetaPromptCacheHitDiagnosticsBody
  | BetaPromptCacheComparisonResponseNotFoundDiagnosticsBody
  | BetaPromptCacheUnavailableDiagnosticsBody
type BetaModerationInputType = 'text' | 'image'
type BetaModerationResultBody = {
  type: 'moderation_result'
  model: string
  flagged: boolean
  categories: { [key: string]: boolean }
  category_scores: { [key: string]: number }
  category_applied_input_types: { [key: string]: BetaModerationInputType[] }
}
type BetaModerationErrorBody = { type: 'error'; code: string; message: string }
type BetaModeration = {
  input: BetaModerationResultBody | BetaModerationErrorBody
  output: BetaModerationResultBody | BetaModerationErrorBody
}
type BetaResponseConversation = { id: string }
type BetaResponse = BetaModelResponseProperties &
  BetaResponseProperties & {
    image?: BetaResolvedImageOptions | undefined
    service_tier?: BetaServiceTierResponses | undefined
    truncation?: ('auto' | 'disabled' | null) | undefined
    id: string
    object: 'response'
    status?:
      | 'completed'
      | 'failed'
      | 'in_progress'
      | 'cancelled'
      | 'queued'
      | 'incomplete'
      | undefined
    access_programs: BetaAccessProgramsBody | null
    created_at: number
    completed_at?: (number | null) | undefined
    error: BetaResponseError
    incomplete_details: {
      reason?: 'max_output_tokens' | 'max_messages' | 'content_filter' | 'steered' | undefined
    } | null
    input_transformations?: BetaReasoningInputTransformation[] | undefined
    output: BetaOutputItem[]
    reasoning?: (BetaReasoning | null) | undefined
    instructions: (string | BetaInputItem[]) | null
    output_text?: (string | null) | undefined
    usage?: (BetaResponseUsage | null) | undefined
    tool_usage?: BetaResponseToolUsage | undefined
    prompt_cache_options?: BetaPromptCacheOptions | undefined
    prompt_cache_diagnostics?: BetaPromptCacheDiagnostics | undefined
    moderation?: (BetaModeration | null) | undefined
    parallel_tool_calls: boolean
    conversation?: ((BetaResponseConversation | null) | null) | undefined
    max_output_tokens?: (number | null) | undefined
  }
type BetaError = {
  code: string | null
  message: string
  param: string | null
  type: string
  misalignment?: BetaMisalignmentErrorDetailsResource | undefined
}
type BetaErrorResponse = { error: BetaError }
type BetaModelIdsCompactionInput = BetaModelIdsResponsesInput | string | null
type BetaPromptCacheRetentionEnumInput = 'in_memory' | '24h'
type BetaPromptCacheTTLEnumInput = '30m'
type BetaPromptCacheOptionsParamInput = {
  ttl?: BetaPromptCacheTTLEnumInput
  mode?: BetaPromptCacheModeEnumInput
}
type BetaServiceTierEnumInput = 'auto' | 'default' | 'fast' | 'flex' | 'priority'
type BetaCompactResponseMethodPublicBodyInput = {
  model: BetaModelIdsCompactionInput
  input?: (string | BetaInputItemInput[]) | null
  previous_response_id?: string | null
  instructions?: string | null
  safety_identifier?: string | null
  image?: BetaImageOptionsParamInput
  prompt_cache_key?: string | null
  prompt_cache_retention?: BetaPromptCacheRetentionEnumInput | null
  prompt_cache_options?: BetaPromptCacheOptionsParamInput | null
  service_tier?: BetaServiceTierEnumInput | null
}
type BetaMessageStatus = 'in_progress' | 'completed' | 'incomplete'
type BetaMessagePhase_2 = 'commentary' | 'final_answer'
type BetaMessage = {
  agent?: BetaAgentTag | undefined
  type: 'message'
  id: string
  status: BetaMessageStatus
  role: BetaMessageRole
  content: (
    | BetaInputTextContent
    | BetaOutputTextContent
    | BetaTextContent
    | BetaSummaryTextContent
    | BetaReasoningTextContent
    | BetaRefusalContent
    | BetaInputImageContent
    | BetaComputerScreenshotContent
    | BetaInputFileContent
    | BetaEncryptedContent
  )[]
  phase?: (BetaMessagePhase_2 | null) | undefined
}
type BetaItemField =
  | BetaMessage
  | BetaProgram
  | BetaProgramOutput
  | BetaFunctionToolCall
  | BetaMultiAgentCall
  | BetaMultiAgentCallOutput
  | BetaToolSearchCall
  | BetaToolSearchOutput
  | BetaAdditionalTools
  | BetaAgentMessage
  | BetaFunctionToolCallOutput
  | BetaFileSearchToolCall
  | BetaWebSearchToolCall
  | BetaImageGenToolCall
  | BetaComputerToolCall
  | BetaComputerToolCallOutputResource
  | BetaReasoningItem
  | BetaCompactionBody
  | BetaCodeInterpreterToolCall
  | BetaLocalShellToolCall
  | BetaLocalShellToolCallOutput
  | BetaFunctionShellCall
  | BetaFunctionShellCallOutput
  | BetaApplyPatchToolCall
  | BetaApplyPatchToolCallOutput
  | BetaMCPListTools
  | BetaMCPApprovalRequest
  | BetaMCPApprovalResponseResource
  | BetaMCPToolCall
  | BetaCustomToolCall
  | BetaCustomToolCallOutput
type BetaCompactResource = {
  image?: BetaResolvedImageOptions | undefined
  id: string
  object: 'response.compaction'
  safety_identifier?: (string | null) | undefined
  output: BetaItemField[]
  created_at: number
  service_tier?: string | undefined
  usage: BetaResponseUsage
}
type BetaInputMessageResource = BetaInputMessage & { id: string }
type BetaFunctionToolCallResource = BetaFunctionToolCall & {
  id: string
  status: BetaFunctionCallStatus
  created_by?: string | undefined
}
type BetaResponseConfigurationUpdate = {
  agent?: BetaAgentTag | undefined
  id: string
  type: 'configuration_update'
  reasoning?: { effort?: BetaReasoningEffort | undefined } | undefined
  text?: { format: BetaResponseFormatText | BetaTextResponseFormatJsonSchema } | undefined
}
type BetaCustomToolCallResource = BetaCustomToolCall & {
  id: string
  status: BetaFunctionCallStatus
  created_by?: string | undefined
}
type BetaItemResource =
  | BetaInputMessageResource
  | BetaOutputMessage
  | BetaFileSearchToolCall
  | BetaComputerToolCall
  | BetaComputerToolCallOutputResource
  | BetaWebSearchToolCall
  | BetaFunctionToolCallResource
  | BetaFunctionToolCallOutputResource
  | BetaAgentMessage
  | BetaMultiAgentCall
  | BetaMultiAgentCallOutput
  | BetaToolSearchCall
  | BetaToolSearchOutput
  | BetaAdditionalTools
  | BetaResponseConfigurationUpdate
  | BetaReasoningItem
  | BetaProgram
  | BetaProgramOutput
  | BetaCompactionBody
  | BetaImageGenToolCall
  | BetaCodeInterpreterToolCall
  | BetaLocalShellToolCall
  | BetaLocalShellToolCallOutput
  | BetaFunctionShellCall
  | BetaFunctionShellCallOutput
  | BetaApplyPatchToolCall
  | BetaApplyPatchToolCallOutput
  | BetaMCPListTools
  | BetaMCPApprovalRequest
  | BetaMCPApprovalResponseResource
  | BetaMCPToolCall
  | BetaCustomToolCallResource
  | BetaCustomToolCallOutputResource
type BetaResponseItemList = {
  object: 'list'
  data: BetaItemResource[]
  has_more: boolean
  first_id: string
  last_id: string
}
type BetaTruncationEnumInput = 'auto' | 'disabled'
type BetaPersonalityEnumInput = string | 'friendly' | 'pragmatic'
type BetaTokenCountsBodyInput = {
  model?: string | null
  input?: (string | BetaInputItemInput[]) | null
  previous_response_id?: string | null
  tools?: BetaToolInput[] | null
  text?: BetaResponseTextParamInput | null
  reasoning?: BetaReasoningInput | null
  truncation?: BetaTruncationEnumInput
  instructions?: string | null
  personality?: BetaPersonalityEnumInput
  conversation?: BetaConversationParamInput | null
  tool_choice?: BetaToolChoiceParamInput | null
  parallel_tool_calls?: boolean | null
}
type BetaTokenCountsResource = { object: 'response.input_tokens'; input_tokens: number }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/assistants': {
      $get:
        | {
            input: {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string; before?: string }
            }
            output: ListAssistantsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string; before?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: CreateAssistantRequestInput }
            output: AssistantObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateAssistantRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/assistants/:assistant_id': {
      $get:
        | {
            input: { param: { assistant_id: string } }
            output: AssistantObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { assistant_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { assistant_id: string } } & { json: ModifyAssistantRequestInput }
            output: AssistantObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { assistant_id: string } } & { json: ModifyAssistantRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { assistant_id: string } }
            output: DeleteAssistantResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { assistant_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/audio/speech': {
      $post:
        | {
            input: { json: CreateSpeechRequestInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: CreateSpeechRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateSpeechRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateSpeechRequestInput }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: CreateSpeechRequestInput }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: CreateSpeechRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateSpeechRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateSpeechRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/audio/transcriptions': {
      $post:
        | {
            input: { form: CreateTranscriptionRequestInput }
            output:
              | CreateTranscriptionResponseJson
              | CreateTranscriptionResponseDiarizedJson
              | CreateTranscriptionResponseVerboseJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: CreateTranscriptionRequestInput }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: CreateTranscriptionRequestInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { form: CreateTranscriptionRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: CreateTranscriptionRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { form: CreateTranscriptionRequestInput }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { form: CreateTranscriptionRequestInput }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { form: CreateTranscriptionRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { form: CreateTranscriptionRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { form: CreateTranscriptionRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { form: CreateTranscriptionRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { form: CreateTranscriptionRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/audio/translations': {
      $post:
        | {
            input: { form: CreateTranslationRequestInput }
            output: CreateTranslationResponseJson | CreateTranslationResponseVerboseJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: CreateTranslationRequestInput }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: CreateTranslationRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: CreateTranslationRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { form: CreateTranslationRequestInput }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { form: CreateTranslationRequestInput }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { form: CreateTranslationRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { form: CreateTranslationRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { form: CreateTranslationRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { form: CreateTranslationRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { form: CreateTranslationRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/audio/voice_consents': {
      $post:
        | {
            input: { form: CreateVoiceConsentRequestInput }
            output: VoiceConsentResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: CreateVoiceConsentRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: CreateVoiceConsentRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { query: { after?: string; limit?: unknown } }
            output: VoiceConsentListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { after?: string; limit?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { after?: string; limit?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/audio/voice_consents/:consent_id': {
      $get:
        | {
            input: { param: { consent_id: string } }
            output: VoiceConsentResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { consent_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { consent_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { consent_id: string } } & { json: UpdateVoiceConsentRequestInput }
            output: VoiceConsentResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { consent_id: string } } & { json: UpdateVoiceConsentRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { consent_id: string } } & { json: UpdateVoiceConsentRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { consent_id: string } }
            output: VoiceConsentDeletedResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { consent_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { consent_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/audio/voices': {
      $post:
        | {
            input: { json: CreateVoicePromptRequestInput } & { form: CreateVoiceRequestInput }
            output: VoiceResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateVoicePromptRequestInput } & { form: CreateVoiceRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateVoicePromptRequestInput } & { form: CreateVoiceRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateVoicePromptRequestInput } & { form: CreateVoiceRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/audio/voices/:voice_id': {
      $delete:
        | {
            input: { param: { voice_id: string } }
            output: VoiceDeletedResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { voice_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { voice_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/batches': {
      $post:
        | {
            input: { json: CreateBatchRequestInput }
            output: Batch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateBatchRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateBatchRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateBatchRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateBatchRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: { query: { after?: string; limit?: unknown } }
            output: ListBatchesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { after?: string; limit?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { after?: string; limit?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { after?: string; limit?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/batches/:batch_id': {
      $get:
        | {
            input: { param: { batch_id: string } }
            output: Batch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { batch_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { batch_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { batch_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/batches/:batch_id/cancel': {
      $post:
        | {
            input: { param: { batch_id: string } }
            output: Batch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { batch_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { batch_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { batch_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { batch_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/chat/completions': {
      $get:
        | {
            input: {
              query: {
                model?: string
                metadata?: MetadataInput
                after?: string
                limit?: unknown
                order?: 'asc' | 'desc'
              }
            }
            output: ChatCompletionList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                model?: string
                metadata?: MetadataInput
                after?: string
                limit?: unknown
                order?: 'asc' | 'desc'
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                model?: string
                metadata?: MetadataInput
                after?: string
                limit?: unknown
                order?: 'asc' | 'desc'
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                model?: string
                metadata?: MetadataInput
                after?: string
                limit?: unknown
                order?: 'asc' | 'desc'
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: CreateChatCompletionRequestInput }
            output: CreateChatCompletionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateChatCompletionRequestInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: CreateChatCompletionRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateChatCompletionRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateChatCompletionRequestInput }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: CreateChatCompletionRequestInput }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: CreateChatCompletionRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateChatCompletionRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateChatCompletionRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateChatCompletionRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/chat/completions/:completion_id': {
      $get:
        | {
            input: { param: { completion_id: string } }
            output: CreateChatCompletionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { completion_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { completion_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { completion_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { completion_id: string } } & { json: { metadata: MetadataInput } }
            output: CreateChatCompletionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { completion_id: string } } & { json: { metadata: MetadataInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { completion_id: string } } & { json: { metadata: MetadataInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { completion_id: string } } & { json: { metadata: MetadataInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { completion_id: string } } & { json: { metadata: MetadataInput } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { completion_id: string } }
            output: ChatCompletionDeleted
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { completion_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { completion_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { completion_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/chat/completions/:completion_id/messages': {
      $get:
        | {
            input: { param: { completion_id: string } } & {
              query: { after?: string; limit?: unknown; order?: 'asc' | 'desc' }
            }
            output: ChatCompletionMessageList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { completion_id: string } } & {
              query: { after?: string; limit?: unknown; order?: 'asc' | 'desc' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { completion_id: string } } & {
              query: { after?: string; limit?: unknown; order?: 'asc' | 'desc' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { completion_id: string } } & {
              query: { after?: string; limit?: unknown; order?: 'asc' | 'desc' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { completion_id: string } } & {
              query: { after?: string; limit?: unknown; order?: 'asc' | 'desc' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/completions': {
      $post:
        | {
            input: { json: CreateCompletionRequestInput }
            output: CreateCompletionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateCompletionRequestInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: CreateCompletionRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateCompletionRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateCompletionRequestInput }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: CreateCompletionRequestInput }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: CreateCompletionRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateCompletionRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateCompletionRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateCompletionRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/containers': {
      $get:
        | {
            input: {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string; name?: string }
            }
            output: ContainerListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string; name?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string; name?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: CreateContainerBodyInput }
            output: ContainerResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateContainerBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateContainerBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/containers/:container_id': {
      $get:
        | {
            input: { param: { container_id: string } }
            output: ContainerResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { container_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { container_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { container_id: string } }
            output: { object: 'container.deleted'; deleted: boolean; id: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { container_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { container_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/containers/:container_id/files': {
      $post:
        | {
            input: { param: { container_id: string } } & { json: CreateContainerFileBodyInput } & {
              form: CreateContainerFileBodyInput
            }
            output: ContainerFileResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { container_id: string } } & { json: CreateContainerFileBodyInput } & {
              form: CreateContainerFileBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { container_id: string } } & { json: CreateContainerFileBodyInput } & {
              form: CreateContainerFileBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { container_id: string } } & { json: CreateContainerFileBodyInput } & {
              form: CreateContainerFileBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { container_id: string } } & {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string }
            }
            output: ContainerFileListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { container_id: string } } & {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { container_id: string } } & {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/containers/:container_id/files/:file_id': {
      $get:
        | {
            input: { param: { container_id: string; file_id: string } }
            output: ContainerFileResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { container_id: string; file_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { container_id: string; file_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { container_id: string; file_id: string } }
            output: { object: 'container.file.deleted'; deleted: boolean; id: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { container_id: string; file_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { container_id: string; file_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/containers/:container_id/files/:file_id/content': {
      $get:
        | {
            input: { param: { container_id: string; file_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { container_id: string; file_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { container_id: string; file_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/conversations/:conversation_id/items': {
      $post:
        | {
            input: { param: { conversation_id: string } } & { query: { include?: unknown } } & {
              json: { items: InputItemInput[] }
            }
            output: ConversationItemList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: string } } & { query: { include?: unknown } } & {
              json: { items: InputItemInput[] }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { conversation_id: string } } & { query: { include?: unknown } } & {
              json: { items: InputItemInput[] }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { conversation_id: string } } & { query: { include?: unknown } } & {
              json: { items: InputItemInput[] }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { conversation_id: string } } & { query: { include?: unknown } } & {
              json: { items: InputItemInput[] }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { conversation_id: string } } & {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string; include?: unknown }
            }
            output: ConversationItemList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: string } } & {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string; include?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { conversation_id: string } } & {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string; include?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { conversation_id: string } } & {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string; include?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/conversations/:conversation_id/items/:item_id': {
      $get:
        | {
            input: { param: { conversation_id: string; item_id: string } } & {
              query: { include?: unknown }
            }
            output: ConversationItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: string; item_id: string } } & {
              query: { include?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { conversation_id: string; item_id: string } } & {
              query: { include?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { conversation_id: string; item_id: string } }
            output: ConversationResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: string; item_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { conversation_id: string; item_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { conversation_id: string; item_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { conversation_id: string; item_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/embeddings': {
      $post:
        | {
            input: { json: CreateEmbeddingRequestInput }
            output: CreateEmbeddingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateEmbeddingRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateEmbeddingRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateEmbeddingRequestInput }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: CreateEmbeddingRequestInput }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: CreateEmbeddingRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateEmbeddingRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateEmbeddingRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/evals': {
      $get:
        | {
            input: {
              query: {
                after?: string
                limit?: unknown
                order?: 'asc' | 'desc'
                order_by?: 'created_at' | 'updated_at'
              }
            }
            output: EvalList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string
                limit?: unknown
                order?: 'asc' | 'desc'
                order_by?: 'created_at' | 'updated_at'
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: CreateEvalRequestInput }
            output: Eval
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateEvalRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateEvalRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/evals/:eval_id': {
      $get:
        | { input: { param: { eval_id: string } }; output: Eval; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { eval_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { eval_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { eval_id: string } } & {
              json: { name?: string; metadata?: MetadataInput }
            }
            output: Eval
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eval_id: string } } & {
              json: { name?: string; metadata?: MetadataInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { eval_id: string } } & {
              json: { name?: string; metadata?: MetadataInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { eval_id: string } } & {
              json: { name?: string; metadata?: MetadataInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { eval_id: string } }
            output: { object: string; deleted: boolean; eval_id: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eval_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { eval_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { eval_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/evals/:eval_id/runs': {
      $get:
        | {
            input: { param: { eval_id: string } } & {
              query: {
                after?: string
                limit?: unknown
                order?: 'asc' | 'desc'
                status?: 'queued' | 'in_progress' | 'completed' | 'canceled' | 'failed'
              }
            }
            output: EvalRunList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eval_id: string } } & {
              query: {
                after?: string
                limit?: unknown
                order?: 'asc' | 'desc'
                status?: 'queued' | 'in_progress' | 'completed' | 'canceled' | 'failed'
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { eval_id: string } } & {
              query: {
                after?: string
                limit?: unknown
                order?: 'asc' | 'desc'
                status?: 'queued' | 'in_progress' | 'completed' | 'canceled' | 'failed'
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { eval_id: string } } & {
              query: {
                after?: string
                limit?: unknown
                order?: 'asc' | 'desc'
                status?: 'queued' | 'in_progress' | 'completed' | 'canceled' | 'failed'
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { eval_id: string } } & { json: CreateEvalRunRequestInput }
            output: EvalRun
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { eval_id: string } } & { json: CreateEvalRunRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { eval_id: string } } & { json: CreateEvalRunRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { eval_id: string } } & { json: CreateEvalRunRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { eval_id: string } } & { json: CreateEvalRunRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/evals/:eval_id/runs/:run_id': {
      $get:
        | {
            input: { param: { eval_id: string; run_id: string } }
            output: EvalRun
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eval_id: string; run_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { eval_id: string; run_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { eval_id: string; run_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { eval_id: string; run_id: string } }
            output: {
              object?: string | undefined
              deleted?: boolean | undefined
              run_id?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eval_id: string; run_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { eval_id: string; run_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { eval_id: string; run_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/evals/:eval_id/runs/:run_id/cancel': {
      $post:
        | {
            input: { param: { eval_id: string; run_id: string } }
            output: EvalRun
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eval_id: string; run_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/evals/:eval_id/runs/:run_id/output_items': {
      $get:
        | {
            input: { param: { eval_id: string; run_id: string } } & {
              query: {
                after?: string
                limit?: unknown
                status?: 'fail' | 'pass'
                order?: 'asc' | 'desc'
              }
            }
            output: EvalRunOutputItemList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eval_id: string; run_id: string } } & {
              query: {
                after?: string
                limit?: unknown
                status?: 'fail' | 'pass'
                order?: 'asc' | 'desc'
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { eval_id: string; run_id: string } } & {
              query: {
                after?: string
                limit?: unknown
                status?: 'fail' | 'pass'
                order?: 'asc' | 'desc'
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { eval_id: string; run_id: string } } & {
              query: {
                after?: string
                limit?: unknown
                status?: 'fail' | 'pass'
                order?: 'asc' | 'desc'
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/evals/:eval_id/runs/:run_id/output_items/:output_item_id': {
      $get:
        | {
            input: { param: { eval_id: string; run_id: string; output_item_id: string } }
            output: EvalRunOutputItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eval_id: string; run_id: string; output_item_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { eval_id: string; run_id: string; output_item_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { eval_id: string; run_id: string; output_item_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/files': {
      $get:
        | {
            input: {
              query: { purpose?: string; limit?: unknown; order?: 'asc' | 'desc'; after?: string }
            }
            output: ListFilesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { purpose?: string; limit?: unknown; order?: 'asc' | 'desc'; after?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { purpose?: string; limit?: unknown; order?: 'asc' | 'desc'; after?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { purpose?: string; limit?: unknown; order?: 'asc' | 'desc'; after?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { form: CreateFileRequestInput }
            output: OpenAIFile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: CreateFileRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: CreateFileRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { form: CreateFileRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/files/:file_id': {
      $delete:
        | {
            input: { param: { file_id: string } }
            output: DeleteFileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { file_id: string } }
            output: OpenAIFile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { file_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/files/:file_id/content': {
      $get:
        | { input: { param: { file_id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { file_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { file_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { file_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { file_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/fine_tuning/alpha/graders/run': {
      $post:
        | {
            input: { json: RunGraderRequestInput }
            output: RunGraderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RunGraderRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RunGraderRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/fine_tuning/alpha/graders/validate': {
      $post:
        | {
            input: { json: ValidateGraderRequestInput }
            output: ValidateGraderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ValidateGraderRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ValidateGraderRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/fine_tuning/checkpoints/:fine_tuned_model_checkpoint/permissions': {
      $get:
        | {
            input: { param: { fine_tuned_model_checkpoint: string } } & {
              query: {
                project_id?: string
                after?: string
                limit?: unknown
                order?: 'ascending' | 'descending'
              }
            }
            output: ListFineTuningCheckpointPermissionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fine_tuned_model_checkpoint: string } } & {
              query: {
                project_id?: string
                after?: string
                limit?: unknown
                order?: 'ascending' | 'descending'
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { fine_tuned_model_checkpoint: string } } & {
              query: {
                project_id?: string
                after?: string
                limit?: unknown
                order?: 'ascending' | 'descending'
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { fine_tuned_model_checkpoint: string } } & {
              json: CreateFineTuningCheckpointPermissionRequestInput
            }
            output: ListFineTuningCheckpointPermissionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fine_tuned_model_checkpoint: string } } & {
              json: CreateFineTuningCheckpointPermissionRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { fine_tuned_model_checkpoint: string } } & {
              json: CreateFineTuningCheckpointPermissionRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { fine_tuned_model_checkpoint: string } } & {
              json: CreateFineTuningCheckpointPermissionRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/fine_tuning/checkpoints/:fine_tuned_model_checkpoint/permissions/:permission_id': {
      $delete:
        | {
            input: { param: { fine_tuned_model_checkpoint: string; permission_id: string } }
            output: DeleteFineTuningCheckpointPermissionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fine_tuned_model_checkpoint: string; permission_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { fine_tuned_model_checkpoint: string; permission_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { fine_tuned_model_checkpoint: string; permission_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/fine_tuning/jobs': {
      $post:
        | {
            input: { json: CreateFineTuningJobRequestInput }
            output: FineTuningJob
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateFineTuningJobRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateFineTuningJobRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: {
              query: {
                after?: string
                limit?: unknown
                metadata?: { [key: string]: string } | null
              }
            }
            output: ListPaginatedFineTuningJobsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string
                limit?: unknown
                metadata?: { [key: string]: string } | null
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after?: string
                limit?: unknown
                metadata?: { [key: string]: string } | null
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/fine_tuning/jobs/:fine_tuning_job_id': {
      $get:
        | {
            input: { param: { fine_tuning_job_id: string } }
            output: FineTuningJob
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fine_tuning_job_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { fine_tuning_job_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/fine_tuning/jobs/:fine_tuning_job_id/cancel': {
      $post:
        | {
            input: { param: { fine_tuning_job_id: string } }
            output: FineTuningJob
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fine_tuning_job_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { fine_tuning_job_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { fine_tuning_job_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/fine_tuning/jobs/:fine_tuning_job_id/checkpoints': {
      $get:
        | {
            input: { param: { fine_tuning_job_id: string } } & {
              query: { after?: string; limit?: unknown }
            }
            output: ListFineTuningJobCheckpointsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fine_tuning_job_id: string } } & {
              query: { after?: string; limit?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { fine_tuning_job_id: string } } & {
              query: { after?: string; limit?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { fine_tuning_job_id: string } } & {
              query: { after?: string; limit?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/fine_tuning/jobs/:fine_tuning_job_id/events': {
      $get:
        | {
            input: { param: { fine_tuning_job_id: string } } & {
              query: { after?: string; limit?: unknown }
            }
            output: ListFineTuningJobEventsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fine_tuning_job_id: string } } & {
              query: { after?: string; limit?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { fine_tuning_job_id: string } } & {
              query: { after?: string; limit?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { fine_tuning_job_id: string } } & {
              query: { after?: string; limit?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/fine_tuning/jobs/:fine_tuning_job_id/pause': {
      $post:
        | {
            input: { param: { fine_tuning_job_id: string } }
            output: FineTuningJob
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fine_tuning_job_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { fine_tuning_job_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { fine_tuning_job_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/fine_tuning/jobs/:fine_tuning_job_id/resume': {
      $post:
        | {
            input: { param: { fine_tuning_job_id: string } }
            output: FineTuningJob
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fine_tuning_job_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { fine_tuning_job_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { fine_tuning_job_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/images/edits': {
      $post:
        | {
            input: { json: EditImageBodyJsonParamInput } & { form: CreateImageEditRequestInput }
            output: ImagesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EditImageBodyJsonParamInput } & { form: CreateImageEditRequestInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: EditImageBodyJsonParamInput } & { form: CreateImageEditRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: EditImageBodyJsonParamInput } & { form: CreateImageEditRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: EditImageBodyJsonParamInput } & { form: CreateImageEditRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { json: EditImageBodyJsonParamInput } & { form: CreateImageEditRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: EditImageBodyJsonParamInput } & { form: CreateImageEditRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: EditImageBodyJsonParamInput } & { form: CreateImageEditRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/images/generations': {
      $post:
        | {
            input: { json: CreateImageRequestInput }
            output: ImagesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateImageRequestInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: CreateImageRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateImageRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateImageRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { json: CreateImageRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateImageRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateImageRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/images/variations': {
      $post:
        | {
            input: { form: CreateImageVariationRequestInput }
            output: ImagesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: CreateImageVariationRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: CreateImageVariationRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { form: CreateImageVariationRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { form: CreateImageVariationRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { form: CreateImageVariationRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/live/sessions': {
      $post:
        | {
            input: { json: LiveSessionCreateRequestInput }
            output: LiveSessionCreateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: LiveSessionCreateRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: LiveSessionCreateRequestInput }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: LiveSessionCreateRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: LiveSessionCreateRequestInput }
            output: string
            outputFormat: 'text'
            status: 413
          }
        | {
            input: { json: LiveSessionCreateRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: LiveSessionCreateRequestInput }
            output: string
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: LiveSessionCreateRequestInput }
            output: string
            outputFormat: 'text'
            status: 502
          }
        | {
            input: { json: LiveSessionCreateRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { json: LiveSessionCreateRequestInput }
            output: string
            outputFormat: 'text'
            status: 503
          }
        | {
            input: { json: LiveSessionCreateRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/live/sessions/:session_id/accept': {
      $post:
        | {
            input: { param: { session_id: string } } & { json: LiveCallAcceptRequestInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { session_id: string } } & { json: LiveCallAcceptRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & { json: LiveCallAcceptRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & { json: LiveCallAcceptRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string } } & { json: LiveCallAcceptRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { session_id: string } } & { json: LiveCallAcceptRequestInput }
            output: string
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { session_id: string } } & { json: LiveCallAcceptRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/live/sessions/:session_id/fork': {
      $post:
        | {
            input: { param: { session_id: string } } & { json: LiveForkRequestInput }
            output: LiveCreateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { session_id: string } } & { json: LiveForkRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & { json: LiveForkRequestInput }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & { json: LiveForkRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { session_id: string } } & { json: LiveForkRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { session_id: string } } & { json: LiveForkRequestInput }
            output: string
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { session_id: string } } & { json: LiveForkRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/live/sessions/:session_id/hangup': {
      $post:
        | {
            input: { param: { session_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { session_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/live/sessions/:session_id/refer': {
      $post:
        | {
            input: { param: { session_id: string } } & { json: LiveCallReferRequestInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { session_id: string } } & { json: LiveCallReferRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & { json: LiveCallReferRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & { json: LiveCallReferRequestInput }
            output: string
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/live/sessions/:session_id/reject': {
      $post:
        | {
            input: { param: { session_id: string } } & { json: LiveCallRejectRequestInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { session_id: string } } & { json: LiveCallRejectRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & { json: LiveCallRejectRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & { json: LiveCallRejectRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string } } & { json: LiveCallRejectRequestInput }
            output: string
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/models': {
      $get:
        | { input: {}; output: ListModelsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: PermissionErrorResponse; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/models/:model': {
      $get:
        | { input: { param: { model: string } }; output: Model; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { model: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { model: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { model: string } }
            output: DeleteModelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { model: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { model: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/moderations': {
      $post:
        | {
            input: { json: CreateModerationRequestInput }
            output: CreateModerationResponse | CreateCSAMModerationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateModerationRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateModerationRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateModerationRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateModerationRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateModerationRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/organization/admin_api_keys': {
      $get:
        | {
            input: { query: { after?: string | null; order?: 'asc' | 'desc'; limit?: unknown } }
            output: ApiKeyList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { after?: string | null; order?: 'asc' | 'desc'; limit?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { after?: string | null; order?: 'asc' | 'desc'; limit?: unknown } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { json: { name: string; expires_in_seconds?: number } }
            output: AdminApiKeyCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { name: string; expires_in_seconds?: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { name: string; expires_in_seconds?: number } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { name: string; expires_in_seconds?: number } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/admin_api_keys/:key_id': {
      $get:
        | {
            input: { param: { key_id: string } }
            output: AdminApiKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { key_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { key_id: string } }
            output: { id: string; object: 'organization.admin_api_key.deleted'; deleted: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { key_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/audit_logs': {
      $get:
        | {
            input: {
              query: {
                effective_at?: { gt?: number; gte?: number; lt?: number; lte?: number }
                'project_ids[]'?: unknown
                'event_types[]'?: unknown
                'actor_ids[]'?: unknown
                'actor_emails[]'?: unknown
                'resource_ids[]'?: unknown
                tenant_only?: string
                limit?: unknown
                after?: string
                before?: string
              }
            }
            output: ListAuditLogsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                effective_at?: { gt?: number; gte?: number; lt?: number; lte?: number }
                'project_ids[]'?: unknown
                'event_types[]'?: unknown
                'actor_ids[]'?: unknown
                'actor_emails[]'?: unknown
                'resource_ids[]'?: unknown
                tenant_only?: string
                limit?: unknown
                after?: string
                before?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                effective_at?: { gt?: number; gte?: number; lt?: number; lte?: number }
                'project_ids[]'?: unknown
                'event_types[]'?: unknown
                'actor_ids[]'?: unknown
                'actor_emails[]'?: unknown
                'resource_ids[]'?: unknown
                tenant_only?: string
                limit?: unknown
                after?: string
                before?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                effective_at?: { gt?: number; gte?: number; lt?: number; lte?: number }
                'project_ids[]'?: unknown
                'event_types[]'?: unknown
                'actor_ids[]'?: unknown
                'actor_emails[]'?: unknown
                'resource_ids[]'?: unknown
                tenant_only?: string
                limit?: unknown
                after?: string
                before?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/certificates': {
      $get:
        | {
            input: { query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' } }
            output: ListCertificatesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: UploadCertificateRequestInput }
            output: Certificate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UploadCertificateRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UploadCertificateRequestInput }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: UploadCertificateRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/certificates/activate': {
      $post:
        | {
            input: { json: ToggleCertificatesRequestInput }
            output: OrganizationCertificateActivationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ToggleCertificatesRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ToggleCertificatesRequestInput }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ToggleCertificatesRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ToggleCertificatesRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: ToggleCertificatesRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/organization/certificates/deactivate': {
      $post:
        | {
            input: { json: ToggleCertificatesRequestInput }
            output: OrganizationCertificateDeactivationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ToggleCertificatesRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ToggleCertificatesRequestInput }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ToggleCertificatesRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ToggleCertificatesRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: ToggleCertificatesRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/organization/certificates/:certificate_id': {
      $get:
        | {
            input: { param: { certificate_id: string } } & { query: { include?: unknown } }
            output: Certificate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { certificate_id: string } } & { query: { include?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { certificate_id: string } } & { query: { include?: unknown } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { certificate_id: string } } & { query: { include?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { certificate_id: string } } & { query: { include?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { certificate_id: string } } & { json: ModifyCertificateRequestInput }
            output: Certificate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { certificate_id: string } } & { json: ModifyCertificateRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { certificate_id: string } } & { json: ModifyCertificateRequestInput }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { certificate_id: string } } & { json: ModifyCertificateRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { certificate_id: string } } & { json: ModifyCertificateRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { certificate_id: string } } & { json: ModifyCertificateRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { certificate_id: string } }
            output: DeleteCertificateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { certificate_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { certificate_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { certificate_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { certificate_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/costs': {
      $get:
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1d'
                project_ids?: unknown
                api_key_ids?: unknown
                line_items?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: UsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1d'
                project_ids?: unknown
                api_key_ids?: unknown
                line_items?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1d'
                project_ids?: unknown
                api_key_ids?: unknown
                line_items?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1d'
                project_ids?: unknown
                api_key_ids?: unknown
                line_items?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/data_retention': {
      $get:
        | { input: {}; output: OrganizationDataRetention; outputFormat: 'json'; status: 200 }
        | { input: {}; output: PermissionErrorResponse; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 404 }
      $post:
        | {
            input: { json: UpdateOrganizationDataRetentionBodyInput }
            output: OrganizationDataRetention
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateOrganizationDataRetentionBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UpdateOrganizationDataRetentionBodyInput }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: UpdateOrganizationDataRetentionBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/groups': {
      $get:
        | {
            input: { query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' } }
            output: GroupListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: CreateGroupBodyInput }
            output: GroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateGroupBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateGroupBodyInput }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateGroupBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateGroupBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CreateGroupBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateGroupBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/organization/groups/:group_id': {
      $get:
        | {
            input: { param: { group_id: string } }
            output: GroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { group_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { group_id: string } } & { json: UpdateGroupBodyInput }
            output: GroupResourceWithSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string } } & { json: UpdateGroupBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: string } } & { json: UpdateGroupBodyInput }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } } & { json: UpdateGroupBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string } } & { json: UpdateGroupBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { group_id: string } } & { json: UpdateGroupBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { group_id: string } }
            output: GroupDeletedResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/groups/:group_id/roles': {
      $get:
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: RoleListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { group_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBodyInput
            }
            output: GroupRoleAssignment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBodyInput
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/groups/:group_id/roles/:role_id': {
      $get:
        | {
            input: { param: { group_id: string; role_id: string } }
            output: AssignedRoleDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string; role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: string; role_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string; role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string; role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { group_id: string; role_id: string } }
            output: DeletedRoleAssignmentResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string; role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: string; role_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string; role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string; role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/groups/:group_id/users': {
      $get:
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: UserListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { group_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 502
          }
      $post:
        | {
            input: { param: { group_id: string } } & { json: CreateGroupUserBodyInput }
            output: GroupUserAssignment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string } } & { json: CreateGroupUserBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: string } } & { json: CreateGroupUserBodyInput }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } } & { json: CreateGroupUserBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string } } & { json: CreateGroupUserBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { group_id: string } } & { json: CreateGroupUserBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/groups/:group_id/users/:user_id': {
      $get:
        | {
            input: { param: { group_id: string; user_id: string } }
            output: GroupMemberUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string; user_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: string; user_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string; user_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string; user_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { group_id: string; user_id: string } }
            output: GroupUserDeletedResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string; user_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: string; user_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string; user_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string; user_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { group_id: string; user_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/invites': {
      $get:
        | {
            input: { query: { limit?: unknown; after?: string } }
            output: InviteListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: unknown; after?: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: unknown; after?: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: unknown; after?: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { limit?: unknown; after?: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | { input: { json: InviteRequestInput }; output: Invite; outputFormat: 'json'; status: 200 }
        | { input: { json: InviteRequestInput }; output: Invite; outputFormat: 'json'; status: 201 }
        | {
            input: { json: InviteRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: InviteRequestInput }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: InviteRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/invites/:invite_id': {
      $get:
        | {
            input: { param: { invite_id: string } }
            output: Invite
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invite_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { invite_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invite_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { invite_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { invite_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { invite_id: string } }
            output: InviteDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invite_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { invite_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invite_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { invite_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/projects': {
      $get:
        | {
            input: { query: { limit?: unknown; after?: string; include_archived?: string } }
            output: ProjectListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: unknown; after?: string; include_archived?: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: unknown; after?: string; include_archived?: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: unknown; after?: string; include_archived?: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { limit?: unknown; after?: string; include_archived?: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: ProjectCreateRequestInput }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProjectCreateRequestInput }
            output: Project
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ProjectCreateRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ProjectCreateRequestInput }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ProjectCreateRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/projects/:project_id': {
      $get:
        | {
            input: { param: { project_id: string } }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { project_id: string } } & { json: ProjectUpdateRequestInput }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & { json: ProjectUpdateRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & { json: ProjectUpdateRequestInput }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & { json: ProjectUpdateRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & { json: ProjectUpdateRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/projects/:project_id/api_keys': {
      $get:
        | {
            input: { param: { project_id: string } } & {
              query: {
                limit?: unknown
                after?: string
                owner_project_access?: 'active' | 'inactive' | 'any'
              }
            }
            output: ProjectApiKeyListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                limit?: unknown
                after?: string
                owner_project_access?: 'active' | 'inactive' | 'any'
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                limit?: unknown
                after?: string
                owner_project_access?: 'active' | 'inactive' | 'any'
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                limit?: unknown
                after?: string
                owner_project_access?: 'active' | 'inactive' | 'any'
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                limit?: unknown
                after?: string
                owner_project_access?: 'active' | 'inactive' | 'any'
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/projects/:project_id/api_keys/:api_key_id': {
      $get:
        | {
            input: { param: { project_id: string; api_key_id: string } }
            output: ProjectApiKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; api_key_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; api_key_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; api_key_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; api_key_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { project_id: string; api_key_id: string } }
            output: ProjectApiKeyDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; api_key_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; api_key_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; api_key_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; api_key_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { project_id: string; api_key_id: string } } & {
              json: UpdateProjectApiKeyBodyInput
            }
            output: ProjectApiKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; api_key_id: string } } & {
              json: UpdateProjectApiKeyBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; api_key_id: string } } & {
              json: UpdateProjectApiKeyBodyInput
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; api_key_id: string } } & {
              json: UpdateProjectApiKeyBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; api_key_id: string } } & {
              json: UpdateProjectApiKeyBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/projects/:project_id/archive': {
      $post:
        | {
            input: { param: { project_id: string } }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/projects/:project_id/certificates': {
      $get:
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: ListProjectCertificatesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/projects/:project_id/certificates/activate': {
      $post:
        | {
            input: { param: { project_id: string } } & { json: ToggleCertificatesRequestInput }
            output: OrganizationProjectCertificateActivationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & { json: ToggleCertificatesRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & { json: ToggleCertificatesRequestInput }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & { json: ToggleCertificatesRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & { json: ToggleCertificatesRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { project_id: string } } & { json: ToggleCertificatesRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/organization/projects/:project_id/certificates/deactivate': {
      $post:
        | {
            input: { param: { project_id: string } } & { json: ToggleCertificatesRequestInput }
            output: OrganizationProjectCertificateDeactivationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & { json: ToggleCertificatesRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & { json: ToggleCertificatesRequestInput }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & { json: ToggleCertificatesRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & { json: ToggleCertificatesRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { project_id: string } } & { json: ToggleCertificatesRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/organization/projects/:project_id/data_retention': {
      $get:
        | {
            input: { param: { project_id: string } }
            output: ProjectDataRetention
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { project_id: string } } & { json: UpdateProjectDataRetentionBodyInput }
            output: ProjectDataRetention
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & { json: UpdateProjectDataRetentionBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & { json: UpdateProjectDataRetentionBodyInput }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & { json: UpdateProjectDataRetentionBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/projects/:project_id/groups': {
      $get:
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: ProjectGroupListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { project_id: string } } & { json: InviteProjectGroupBodyInput }
            output: ProjectGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & { json: InviteProjectGroupBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & { json: InviteProjectGroupBodyInput }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & { json: InviteProjectGroupBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & { json: InviteProjectGroupBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { project_id: string } } & { json: InviteProjectGroupBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/organization/projects/:project_id/groups/:group_id': {
      $get:
        | {
            input: { param: { project_id: string; group_id: string } } & {
              query: { group_type?: 'group' | 'tenant_group' }
            }
            output: ProjectGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; group_id: string } } & {
              query: { group_type?: 'group' | 'tenant_group' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; group_id: string } } & {
              query: { group_type?: 'group' | 'tenant_group' }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; group_id: string } } & {
              query: { group_type?: 'group' | 'tenant_group' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; group_id: string } } & {
              query: { group_type?: 'group' | 'tenant_group' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { project_id: string; group_id: string } }
            output: ProjectGroupDeletedResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; group_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; group_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; group_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; group_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/projects/:project_id/hosted_tool_permissions': {
      $get:
        | {
            input: { param: { project_id: string } }
            output: ProjectHostedToolPermissions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { project_id: string } } & {
              json: ProjectHostedToolPermissionsUpdateRequestInput
            }
            output: ProjectHostedToolPermissions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              json: ProjectHostedToolPermissionsUpdateRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & {
              json: ProjectHostedToolPermissionsUpdateRequestInput
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & {
              json: ProjectHostedToolPermissionsUpdateRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & {
              json: ProjectHostedToolPermissionsUpdateRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { project_id: string } } & {
              json: ProjectHostedToolPermissionsUpdateRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/projects/:project_id/model_permissions': {
      $get:
        | {
            input: { param: { project_id: string } }
            output: ProjectModelPermissions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { project_id: string } } & {
              json: ProjectModelPermissionsUpdateRequestInput
            }
            output: ProjectModelPermissions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              json: ProjectModelPermissionsUpdateRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & {
              json: ProjectModelPermissionsUpdateRequestInput
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & {
              json: ProjectModelPermissionsUpdateRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & {
              json: ProjectModelPermissionsUpdateRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { project_id: string } }
            output: ProjectModelPermissionsDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/projects/:project_id/rate_limits': {
      $get:
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; after?: string; before?: string }
            }
            output: ProjectRateLimitListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; after?: string; before?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; after?: string; before?: string }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; after?: string; before?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/projects/:project_id/rate_limits/:rate_limit_id': {
      $post:
        | {
            input: { param: { project_id: string; rate_limit_id: string } } & {
              json: ProjectRateLimitUpdateRequestInput
            }
            output: ProjectRateLimit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; rate_limit_id: string } } & {
              json: ProjectRateLimitUpdateRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; rate_limit_id: string } } & {
              json: ProjectRateLimitUpdateRequestInput
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; rate_limit_id: string } } & {
              json: ProjectRateLimitUpdateRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/projects/:project_id/service_accounts': {
      $get:
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; after?: string }
            }
            output: ProjectServiceAccountListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; after?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; after?: string }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; after?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; after?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { project_id: string } } & {
              json: ProjectServiceAccountCreateRequestInput
            }
            output: ProjectServiceAccountCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              json: ProjectServiceAccountCreateRequestInput
            }
            output: ProjectServiceAccountCreateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_id: string } } & {
              json: ProjectServiceAccountCreateRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & {
              json: ProjectServiceAccountCreateRequestInput
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & {
              json: ProjectServiceAccountCreateRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & {
              json: ProjectServiceAccountCreateRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/projects/:project_id/service_accounts/:service_account_id': {
      $get:
        | {
            input: { param: { project_id: string; service_account_id: string } }
            output: ProjectServiceAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; service_account_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; service_account_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; service_account_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; service_account_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { project_id: string; service_account_id: string } } & {
              json: UpdateProjectServiceAccountBodyInput
            }
            output: ProjectServiceAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; service_account_id: string } } & {
              json: UpdateProjectServiceAccountBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; service_account_id: string } } & {
              json: UpdateProjectServiceAccountBodyInput
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; service_account_id: string } } & {
              json: UpdateProjectServiceAccountBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; service_account_id: string } } & {
              json: UpdateProjectServiceAccountBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { project_id: string; service_account_id: string } }
            output: ProjectServiceAccountDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; service_account_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; service_account_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; service_account_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; service_account_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/projects/:project_id/spend_alerts': {
      $get:
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string; before?: string }
            }
            output: ProjectSpendAlertListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string; before?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string; before?: string }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string; before?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { project_id: string } } & { json: CreateSpendAlertBodyInput }
            output: ProjectSpendAlert
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & { json: CreateSpendAlertBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & { json: CreateSpendAlertBodyInput }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & { json: CreateSpendAlertBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/projects/:project_id/spend_alerts/:alert_id': {
      $get:
        | {
            input: { param: { project_id: string; alert_id: string } }
            output: ProjectSpendAlert
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; alert_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; alert_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; alert_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { project_id: string; alert_id: string } } & {
              json: CreateSpendAlertBodyInput
            }
            output: ProjectSpendAlert
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; alert_id: string } } & {
              json: CreateSpendAlertBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; alert_id: string } } & {
              json: CreateSpendAlertBodyInput
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; alert_id: string } } & {
              json: CreateSpendAlertBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { project_id: string; alert_id: string } }
            output: ProjectSpendAlertDeletedResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; alert_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; alert_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; alert_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/projects/:project_id/users': {
      $get:
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; after?: string }
            }
            output: ProjectUserListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; after?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; after?: string }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; after?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; after?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { project_id: string } } & { json: ProjectUserCreateRequestInput }
            output: ProjectUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & { json: ProjectUserCreateRequestInput }
            output: ProjectUser
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_id: string } } & { json: ProjectUserCreateRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & { json: ProjectUserCreateRequestInput }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & { json: ProjectUserCreateRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & { json: ProjectUserCreateRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { project_id: string } } & { json: ProjectUserCreateRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/projects/:project_id/users/:user_id': {
      $get:
        | {
            input: { param: { project_id: string; user_id: string } }
            output: ProjectUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; user_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; user_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; user_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; user_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { project_id: string; user_id: string } } & {
              json: ProjectUserUpdateRequestInput
            }
            output: ProjectUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; user_id: string } } & {
              json: ProjectUserUpdateRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; user_id: string } } & {
              json: ProjectUserUpdateRequestInput
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; user_id: string } } & {
              json: ProjectUserUpdateRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; user_id: string } } & {
              json: ProjectUserUpdateRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { project_id: string; user_id: string } }
            output: ProjectUserDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; user_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; user_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; user_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; user_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/roles': {
      $get:
        | {
            input: { query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' } }
            output: PublicRoleListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: PublicCreateOrganizationRoleBodyInput }
            output: Role
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PublicCreateOrganizationRoleBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PublicCreateOrganizationRoleBodyInput }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PublicCreateOrganizationRoleBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PublicCreateOrganizationRoleBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/roles/:role_id': {
      $get:
        | { input: { param: { role_id: string } }; output: Role; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { role_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { role_id: string } } & { json: PublicUpdateOrganizationRoleBodyInput }
            output: Role
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { role_id: string } } & { json: PublicUpdateOrganizationRoleBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { role_id: string } } & { json: PublicUpdateOrganizationRoleBodyInput }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { role_id: string } } & { json: PublicUpdateOrganizationRoleBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { role_id: string } } & { json: PublicUpdateOrganizationRoleBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { role_id: string } }
            output: RoleDeletedResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { role_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/spend_alerts': {
      $get:
        | {
            input: {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string; before?: string }
            }
            output: OrganizationSpendAlertListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string; before?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string; before?: string }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string; before?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { json: CreateSpendAlertBodyInput }
            output: OrganizationSpendAlert
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateSpendAlertBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateSpendAlertBodyInput }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/organization/spend_alerts/:alert_id': {
      $get:
        | {
            input: { param: { alert_id: string } }
            output: OrganizationSpendAlert
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { alert_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { alert_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { alert_id: string } } & { json: CreateSpendAlertBodyInput }
            output: OrganizationSpendAlert
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { alert_id: string } } & { json: CreateSpendAlertBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { alert_id: string } } & { json: CreateSpendAlertBodyInput }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { alert_id: string } } & { json: CreateSpendAlertBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { alert_id: string } }
            output: OrganizationSpendAlertDeletedResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { alert_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { alert_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/usage/audio_speeches': {
      $get:
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                models?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: UsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                models?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                models?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                models?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/usage/audio_transcriptions': {
      $get:
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                models?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: UsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                models?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                models?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                models?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/usage/code_interpreter_sessions': {
      $get:
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: UsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/usage/completions': {
      $get:
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                models?: unknown
                batch?: string
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: UsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                models?: unknown
                batch?: string
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                models?: unknown
                batch?: string
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                models?: unknown
                batch?: string
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/usage/embeddings': {
      $get:
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                models?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: UsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                models?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                models?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                models?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/usage/file_search_calls': {
      $get:
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                vector_store_ids?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: UsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                vector_store_ids?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                vector_store_ids?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                vector_store_ids?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/usage/images': {
      $get:
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                sources?: unknown
                sizes?: unknown
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                models?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: UsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                sources?: unknown
                sizes?: unknown
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                models?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                sources?: unknown
                sizes?: unknown
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                models?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                sources?: unknown
                sizes?: unknown
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                models?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/usage/moderations': {
      $get:
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                models?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: UsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                models?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                models?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                models?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/usage/vector_stores': {
      $get:
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: UsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/usage/web_search_calls': {
      $get:
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                models?: unknown
                context_levels?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: UsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                models?: unknown
                context_levels?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                models?: unknown
                context_levels?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: '1m' | '1h' | '1d'
                project_ids?: unknown
                user_ids?: unknown
                api_key_ids?: unknown
                models?: unknown
                context_levels?: unknown
                group_by?: unknown
                limit?: unknown
                page?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/users': {
      $get:
        | {
            input: { query: { limit?: unknown; after?: string; emails?: unknown } }
            output: UserListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: unknown; after?: string; emails?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: unknown; after?: string; emails?: unknown } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: unknown; after?: string; emails?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/users/:user_id': {
      $get:
        | { input: { param: { user_id: string } }; output: User; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { user_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { user_id: string } } & { json: UserRoleUpdateRequestInput }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & { json: UserRoleUpdateRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } } & { json: UserRoleUpdateRequestInput }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string } } & { json: UserRoleUpdateRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string } } & { json: UserRoleUpdateRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { user_id: string } }
            output: UserDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/users/:user_id/roles': {
      $get:
        | {
            input: { param: { user_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: RoleListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { user_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBodyInput
            }
            output: UserRoleAssignment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBodyInput
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/users/:user_id/roles/:role_id': {
      $get:
        | {
            input: { param: { user_id: string; role_id: string } }
            output: AssignedRoleDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string; role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string; role_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string; role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string; role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { user_id: string; role_id: string } }
            output: DeletedRoleAssignmentResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string; role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string; role_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string; role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string; role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/projects/:project_id/groups/:group_id/roles': {
      $get:
        | {
            input: { param: { project_id: string; group_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: RoleListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; group_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; group_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; group_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; group_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { project_id: string; group_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBodyInput
            }
            output: GroupRoleAssignment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; group_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; group_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBodyInput
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; group_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; group_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/projects/:project_id/groups/:group_id/roles/:role_id': {
      $get:
        | {
            input: { param: { project_id: string; group_id: string; role_id: string } }
            output: AssignedRoleDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; group_id: string; role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; group_id: string; role_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; group_id: string; role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; group_id: string; role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { project_id: string; group_id: string; role_id: string } }
            output: DeletedRoleAssignmentResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; group_id: string; role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; group_id: string; role_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; group_id: string; role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; group_id: string; role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/projects/:project_id/roles': {
      $get:
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: PublicRoleListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { project_id: string } } & {
              json: PublicCreateOrganizationRoleBodyInput
            }
            output: Role
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              json: PublicCreateOrganizationRoleBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & {
              json: PublicCreateOrganizationRoleBodyInput
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & {
              json: PublicCreateOrganizationRoleBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & {
              json: PublicCreateOrganizationRoleBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/projects/:project_id/roles/:role_id': {
      $get:
        | {
            input: { param: { project_id: string; role_id: string } }
            output: Role
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; role_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { project_id: string; role_id: string } } & {
              json: PublicUpdateOrganizationRoleBodyInput
            }
            output: Role
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; role_id: string } } & {
              json: PublicUpdateOrganizationRoleBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; role_id: string } } & {
              json: PublicUpdateOrganizationRoleBodyInput
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; role_id: string } } & {
              json: PublicUpdateOrganizationRoleBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; role_id: string } } & {
              json: PublicUpdateOrganizationRoleBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { project_id: string; role_id: string } }
            output: RoleDeletedResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; role_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/projects/:project_id/users/:user_id/roles': {
      $get:
        | {
            input: { param: { project_id: string; user_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: RoleListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; user_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; user_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; user_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; user_id: string } } & {
              query: { limit?: unknown; after?: string; order?: 'asc' | 'desc' }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { project_id: string; user_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBodyInput
            }
            output: UserRoleAssignment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; user_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; user_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBodyInput
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; user_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; user_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/projects/:project_id/users/:user_id/roles/:role_id': {
      $get:
        | {
            input: { param: { project_id: string; user_id: string; role_id: string } }
            output: AssignedRoleDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; user_id: string; role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; user_id: string; role_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; user_id: string; role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; user_id: string; role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { project_id: string; user_id: string; role_id: string } }
            output: DeletedRoleAssignmentResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; user_id: string; role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; user_id: string; role_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; user_id: string; role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; user_id: string; role_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/realtime/calls': {
      $post: {
        input: { form: RealtimeCallCreateRequestInput }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/realtime/calls/:call_id/accept': {
      $post:
        | {
            input: { param: { call_id: string } } & { json: RealtimeSessionCreateRequestGAInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { call_id: string } } & { json: RealtimeSessionCreateRequestGAInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { call_id: string } } & { json: RealtimeSessionCreateRequestGAInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { call_id: string } } & { json: RealtimeSessionCreateRequestGAInput }
            output: string
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/realtime/calls/:call_id/hangup': {
      $post:
        | { input: { param: { call_id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { call_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/realtime/calls/:call_id/refer': {
      $post:
        | {
            input: { param: { call_id: string } } & { json: RealtimeCallReferRequestInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { call_id: string } } & { json: RealtimeCallReferRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { call_id: string } } & { json: RealtimeCallReferRequestInput }
            output: string
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/realtime/calls/:call_id/reject': {
      $post:
        | {
            input: { param: { call_id: string } } & { json: RealtimeCallRejectRequestInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { call_id: string } } & { json: RealtimeCallRejectRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { call_id: string } } & { json: RealtimeCallRejectRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { call_id: string } } & { json: RealtimeCallRejectRequestInput }
            output: string
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/realtime/client_secrets': {
      $post:
        | {
            input: { json: RealtimeCreateClientSecretRequestInput }
            output: RealtimeCreateClientSecretResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RealtimeCreateClientSecretRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RealtimeCreateClientSecretRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: RealtimeCreateClientSecretRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/realtime/sessions': {
      $post: {
        input: { json: RealtimeSessionCreateRequestInput }
        output: RealtimeSessionCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/realtime/transcription_sessions': {
      $post: {
        input: { json: RealtimeTranscriptionSessionCreateRequestInput }
        output: RealtimeTranscriptionSessionCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/realtime/translations/client_secrets': {
      $post:
        | {
            input: { json: RealtimeTranslationClientSecretCreateRequestInput }
            output: RealtimeTranslationClientSecretCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RealtimeTranslationClientSecretCreateRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RealtimeTranslationClientSecretCreateRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: RealtimeTranslationClientSecretCreateRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/responses': {
      $post:
        | {
            input: { json: CreateResponseInput }
            output: Response
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: CreateResponseInput }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { json: CreateResponseInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateResponseInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateResponseInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateResponseInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/responses/:response_id': {
      $get:
        | {
            input: { param: { response_id: string } } & {
              query: {
                include?: unknown
                stream?: string
                starting_after?: unknown
                include_obfuscation?: string
              }
            }
            output: Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { response_id: string } } & {
              query: {
                include?: unknown
                stream?: string
                starting_after?: unknown
                include_obfuscation?: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { response_id: string } } & {
              query: {
                include?: unknown
                stream?: string
                starting_after?: unknown
                include_obfuscation?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { response_id: string } } & {
              query: {
                include?: unknown
                stream?: string
                starting_after?: unknown
                include_obfuscation?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { response_id: string } }
            output: { object: 'response.deleted'; deleted: boolean; id: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { response_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { response_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/responses/:response_id/cancel': {
      $post:
        | {
            input: { param: { response_id: string } }
            output: Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { response_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { response_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/responses/:response_id/input_items': {
      $get:
        | {
            input: { param: { response_id: string } } & {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string; include?: unknown }
            }
            output: ResponseItemList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { response_id: string } } & {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string; include?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { response_id: string } } & {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string; include?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/threads': {
      $post:
        | {
            input: { json: CreateThreadRequestInput }
            output: ThreadObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateThreadRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/threads/runs': {
      $post:
        | {
            input: { json: CreateThreadAndRunRequestInput }
            output: RunObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateThreadAndRunRequestInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: CreateThreadAndRunRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/threads/:thread_id': {
      $get:
        | {
            input: { param: { thread_id: string } }
            output: ThreadObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { thread_id: string } } & { json: ModifyThreadRequestInput }
            output: ThreadObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string } } & { json: ModifyThreadRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { thread_id: string } }
            output: DeleteThreadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/threads/:thread_id/messages': {
      $get:
        | {
            input: { param: { thread_id: string } } & {
              query: {
                limit?: unknown
                order?: 'asc' | 'desc'
                after?: string
                before?: string
                run_id?: string
              }
            }
            output: ListMessagesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string } } & {
              query: {
                limit?: unknown
                order?: 'asc' | 'desc'
                after?: string
                before?: string
                run_id?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { thread_id: string } } & { json: CreateMessageRequestInput }
            output: MessageObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string } } & { json: CreateMessageRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/threads/:thread_id/messages/:message_id': {
      $get:
        | {
            input: { param: { thread_id: string; message_id: string } }
            output: MessageObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string; message_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { thread_id: string; message_id: string } } & {
              json: ModifyMessageRequestInput
            }
            output: MessageObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string; message_id: string } } & {
              json: ModifyMessageRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { thread_id: string; message_id: string } }
            output: DeleteMessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string; message_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/threads/:thread_id/runs': {
      $get:
        | {
            input: { param: { thread_id: string } } & {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string; before?: string }
            }
            output: ListRunsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string } } & {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string; before?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { thread_id: string } } & { query: { 'include[]'?: unknown } } & {
              json: CreateRunRequestInput
            }
            output: RunObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string } } & { query: { 'include[]'?: unknown } } & {
              json: CreateRunRequestInput
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { thread_id: string } } & { query: { 'include[]'?: unknown } } & {
              json: CreateRunRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/threads/:thread_id/runs/:run_id': {
      $get:
        | {
            input: { param: { thread_id: string; run_id: string } }
            output: RunObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string; run_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { thread_id: string; run_id: string } } & {
              json: ModifyRunRequestInput
            }
            output: RunObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string; run_id: string } } & {
              json: ModifyRunRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/threads/:thread_id/runs/:run_id/cancel': {
      $post:
        | {
            input: { param: { thread_id: string; run_id: string } }
            output: RunObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string; run_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/threads/:thread_id/runs/:run_id/steps': {
      $get:
        | {
            input: { param: { thread_id: string; run_id: string } } & {
              query: {
                limit?: unknown
                order?: 'asc' | 'desc'
                after?: string
                before?: string
                'include[]'?: unknown
              }
            }
            output: ListRunStepsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string; run_id: string } } & {
              query: {
                limit?: unknown
                order?: 'asc' | 'desc'
                after?: string
                before?: string
                'include[]'?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/threads/:thread_id/runs/:run_id/steps/:step_id': {
      $get:
        | {
            input: { param: { thread_id: string; run_id: string; step_id: string } } & {
              query: { 'include[]'?: unknown }
            }
            output: RunStepObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string; run_id: string; step_id: string } } & {
              query: { 'include[]'?: unknown }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/threads/:thread_id/runs/:run_id/submit_tool_outputs': {
      $post:
        | {
            input: { param: { thread_id: string; run_id: string } } & {
              json: SubmitToolOutputsRunRequestInput
            }
            output: RunObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string; run_id: string } } & {
              json: SubmitToolOutputsRunRequestInput
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { thread_id: string; run_id: string } } & {
              json: SubmitToolOutputsRunRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/uploads': {
      $post:
        | {
            input: { json: CreateUploadRequestInput }
            output: Upload
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateUploadRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateUploadRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/uploads/:upload_id/cancel': {
      $post:
        | {
            input: { param: { upload_id: string } }
            output: Upload
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { upload_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { upload_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { upload_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { upload_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/uploads/:upload_id/complete': {
      $post:
        | {
            input: { param: { upload_id: string } } & { json: CompleteUploadRequestInput }
            output: Upload
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { upload_id: string } } & { json: CompleteUploadRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { upload_id: string } } & { json: CompleteUploadRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { upload_id: string } } & { json: CompleteUploadRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { upload_id: string } } & { json: CompleteUploadRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { upload_id: string } } & { json: CompleteUploadRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/uploads/:upload_id/parts': {
      $post:
        | {
            input: { param: { upload_id: string } } & { form: AddUploadPartRequestInput }
            output: UploadPart
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { upload_id: string } } & { form: AddUploadPartRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { upload_id: string } } & { form: AddUploadPartRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { upload_id: string } } & { form: AddUploadPartRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { upload_id: string } } & { form: AddUploadPartRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { upload_id: string } } & { form: AddUploadPartRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/vector_stores': {
      $get:
        | {
            input: {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string; before?: string }
            }
            output: ListVectorStoresResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string; before?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string; before?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { json: CreateVectorStoreRequestInput }
            output: VectorStoreObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateVectorStoreRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateVectorStoreRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateVectorStoreRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/vector_stores/:vector_store_id': {
      $get:
        | {
            input: { param: { vector_store_id: string } }
            output: VectorStoreObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vector_store_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vector_store_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { vector_store_id: string } } & { json: UpdateVectorStoreRequestInput }
            output: VectorStoreObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vector_store_id: string } } & { json: UpdateVectorStoreRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vector_store_id: string } } & { json: UpdateVectorStoreRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { vector_store_id: string } } & { json: UpdateVectorStoreRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vector_store_id: string } } & { json: UpdateVectorStoreRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { vector_store_id: string } }
            output: DeleteVectorStoreResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vector_store_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vector_store_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { vector_store_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/vector_stores/:vector_store_id/file_batches': {
      $post:
        | {
            input: { param: { vector_store_id: string } } & {
              json: CreateVectorStoreFileBatchRequestInput
            }
            output: VectorStoreFileBatchObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vector_store_id: string } } & {
              json: CreateVectorStoreFileBatchRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vector_store_id: string } } & {
              json: CreateVectorStoreFileBatchRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vector_store_id: string } } & {
              json: CreateVectorStoreFileBatchRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { vector_store_id: string } } & {
              json: CreateVectorStoreFileBatchRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { vector_store_id: string } } & {
              json: CreateVectorStoreFileBatchRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/vector_stores/:vector_store_id/file_batches/:batch_id': {
      $get:
        | {
            input: { param: { vector_store_id: string; batch_id: string } }
            output: VectorStoreFileBatchObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vector_store_id: string; batch_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vector_store_id: string; batch_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vector_store_id: string; batch_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/vector_stores/:vector_store_id/file_batches/:batch_id/cancel': {
      $post:
        | {
            input: { param: { vector_store_id: string; batch_id: string } }
            output: VectorStoreFileBatchObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vector_store_id: string; batch_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vector_store_id: string; batch_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vector_store_id: string; batch_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { vector_store_id: string; batch_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/vector_stores/:vector_store_id/file_batches/:batch_id/files': {
      $get:
        | {
            input: { param: { vector_store_id: string; batch_id: string } } & {
              query: {
                limit?: unknown
                order?: 'asc' | 'desc'
                after?: string
                before?: string
                filter?: 'in_progress' | 'completed' | 'failed' | 'cancelled'
              }
            }
            output: ListVectorStoreFilesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vector_store_id: string; batch_id: string } } & {
              query: {
                limit?: unknown
                order?: 'asc' | 'desc'
                after?: string
                before?: string
                filter?: 'in_progress' | 'completed' | 'failed' | 'cancelled'
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vector_store_id: string; batch_id: string } } & {
              query: {
                limit?: unknown
                order?: 'asc' | 'desc'
                after?: string
                before?: string
                filter?: 'in_progress' | 'completed' | 'failed' | 'cancelled'
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vector_store_id: string; batch_id: string } } & {
              query: {
                limit?: unknown
                order?: 'asc' | 'desc'
                after?: string
                before?: string
                filter?: 'in_progress' | 'completed' | 'failed' | 'cancelled'
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/vector_stores/:vector_store_id/files': {
      $get:
        | {
            input: { param: { vector_store_id: string } } & {
              query: {
                limit?: unknown
                order?: 'asc' | 'desc'
                after?: string
                before?: string
                filter?: 'in_progress' | 'completed' | 'failed' | 'cancelled'
              }
            }
            output: ListVectorStoreFilesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vector_store_id: string } } & {
              query: {
                limit?: unknown
                order?: 'asc' | 'desc'
                after?: string
                before?: string
                filter?: 'in_progress' | 'completed' | 'failed' | 'cancelled'
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vector_store_id: string } } & {
              query: {
                limit?: unknown
                order?: 'asc' | 'desc'
                after?: string
                before?: string
                filter?: 'in_progress' | 'completed' | 'failed' | 'cancelled'
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vector_store_id: string } } & {
              query: {
                limit?: unknown
                order?: 'asc' | 'desc'
                after?: string
                before?: string
                filter?: 'in_progress' | 'completed' | 'failed' | 'cancelled'
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { vector_store_id: string } } & {
              json: CreateVectorStoreFileRequestInput
            }
            output: VectorStoreFileObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vector_store_id: string } } & {
              json: CreateVectorStoreFileRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vector_store_id: string } } & {
              json: CreateVectorStoreFileRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vector_store_id: string } } & {
              json: CreateVectorStoreFileRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { vector_store_id: string } } & {
              json: CreateVectorStoreFileRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { vector_store_id: string } } & {
              json: CreateVectorStoreFileRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/vector_stores/:vector_store_id/files/:file_id': {
      $get:
        | {
            input: { param: { vector_store_id: string; file_id: string } }
            output: VectorStoreFileObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vector_store_id: string; file_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vector_store_id: string; file_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { vector_store_id: string; file_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { vector_store_id: string; file_id: string } }
            output: DeleteVectorStoreFileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vector_store_id: string; file_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vector_store_id: string; file_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vector_store_id: string; file_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { vector_store_id: string; file_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { vector_store_id: string; file_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { vector_store_id: string; file_id: string } } & {
              json: UpdateVectorStoreFileAttributesRequestInput
            }
            output: VectorStoreFileObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vector_store_id: string; file_id: string } } & {
              json: UpdateVectorStoreFileAttributesRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vector_store_id: string; file_id: string } } & {
              json: UpdateVectorStoreFileAttributesRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vector_store_id: string; file_id: string } } & {
              json: UpdateVectorStoreFileAttributesRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { vector_store_id: string; file_id: string } } & {
              json: UpdateVectorStoreFileAttributesRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { vector_store_id: string; file_id: string } } & {
              json: UpdateVectorStoreFileAttributesRequestInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/vector_stores/:vector_store_id/files/:file_id/content': {
      $get:
        | {
            input: { param: { vector_store_id: string; file_id: string } }
            output: VectorStoreFileContentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vector_store_id: string; file_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vector_store_id: string; file_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vector_store_id: string; file_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { vector_store_id: string; file_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/vector_stores/:vector_store_id/search': {
      $post:
        | {
            input: { param: { vector_store_id: string } } & { json: VectorStoreSearchRequestInput }
            output: VectorStoreSearchResultsPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vector_store_id: string } } & { json: VectorStoreSearchRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vector_store_id: string } } & { json: VectorStoreSearchRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vector_store_id: string } } & { json: VectorStoreSearchRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/conversations': {
      $post:
        | {
            input: { json: CreateConversationBodyInput }
            output: ConversationResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateConversationBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateConversationBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateConversationBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/conversations/:conversation_id': {
      $get:
        | {
            input: { param: { conversation_id: string } }
            output: ConversationResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { conversation_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { conversation_id: string } }
            output: DeletedConversationResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { conversation_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { conversation_id: string } } & { json: UpdateConversationBodyInput }
            output: ConversationResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: string } } & { json: UpdateConversationBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { conversation_id: string } } & { json: UpdateConversationBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { conversation_id: string } } & { json: UpdateConversationBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { conversation_id: string } } & { json: UpdateConversationBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/safety/cases/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SafetyCaseResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/safety/alerts/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SafetyAlertResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/organization/external_keys': {
      $post: {
        input: { json: V1OrganizationExternalKeysPostRequestInput }
        output: ExternalKeyResource
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            limit?: unknown
            order?: OrderEnumInput
            after?: unknown
            purpose?: ExternalKeyPurposeInput
          }
        }
        output: ListExternalKeysResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/external_keys/:external_key_id': {
      $get: {
        input: { param: { external_key_id: string } }
        output: ExternalKeyResource
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { external_key_id: string } }
        output: ExternalKeyResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/external_keys/:external_key_id/validate': {
      $post: {
        input: { param: { external_key_id: string } }
        output: ValidateExternalKeyResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/live/sessions/:session_id/content': {
      $get:
        | {
            input: { param: { session_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { session_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { session_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/organization/workload_identity_providers': {
      $get: {
        input: { query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string } }
        output: PlatformProviderListResource
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CreatePlatformWorkloadIdentityProviderBodyInput }
        output: PlatformProvider
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/workload_identity_providers/:workload_identity_provider_id': {
      $get: {
        input: { param: { workload_identity_provider_id: string } }
        output: PlatformProvider
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { workload_identity_provider_id: string } } & {
          json: UpdatePlatformWorkloadIdentityProviderBodyInput
        }
        output: PlatformProvider
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { workload_identity_provider_id: string } }
        output: PlatformProviderDeletedResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/workload_identity_providers/:workload_identity_provider_id/federation_rules': {
      $get: {
        input: { param: { workload_identity_provider_id: string } } & {
          query: {
            limit?: unknown
            order?: 'asc' | 'desc'
            after?: string
            service_account_id?: string
          }
        }
        output: PlatformFederationRuleListResource
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { workload_identity_provider_id: string } } & {
          json: CreatePlatformWorkloadIdentityFederationRuleBodyInput
        }
        output: PlatformFederationRule
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/workload_identity_providers/:workload_identity_provider_id/federation_rules/:workload_identity_federation_rule_id': {
      $get: {
        input: {
          param: {
            workload_identity_provider_id: string
            workload_identity_federation_rule_id: string
          }
        }
        output: PlatformFederationRule
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          param: {
            workload_identity_provider_id: string
            workload_identity_federation_rule_id: string
          }
        } & { json: UpdatePlatformWorkloadIdentityFederationRuleBodyInput }
        output: PlatformFederationRule
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: {
          param: {
            workload_identity_provider_id: string
            workload_identity_federation_rule_id: string
          }
        }
        output: PlatformFederationRuleDeletedResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/usage/decisions': {
      $get:
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: unknown
                limit?: unknown
                page?: unknown
                project_ids?: string[] | null
                group_by?: DecisionsUsageGroupByInput[] | null
                user_ids?: string[] | null
                api_key_ids?: string[] | null
                models?: string[] | null
                batch?: unknown
              }
            }
            output: PublicDecisionsUsageResponseResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: unknown
                limit?: unknown
                page?: unknown
                project_ids?: string[] | null
                group_by?: DecisionsUsageGroupByInput[] | null
                user_ids?: string[] | null
                api_key_ids?: string[] | null
                models?: string[] | null
                batch?: unknown
              }
            }
            output: DecisionsUsageErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: unknown
                limit?: unknown
                page?: unknown
                project_ids?: string[] | null
                group_by?: DecisionsUsageGroupByInput[] | null
                user_ids?: string[] | null
                api_key_ids?: string[] | null
                models?: string[] | null
                batch?: unknown
              }
            }
            output: DecisionsUsagePermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_time: unknown
                end_time?: unknown
                bucket_width?: unknown
                limit?: unknown
                page?: unknown
                project_ids?: string[] | null
                group_by?: DecisionsUsageGroupByInput[] | null
                user_ids?: string[] | null
                api_key_ids?: string[] | null
                models?: string[] | null
                batch?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/external_storage': {
      $get:
        | {
            input: {
              query: {
                project_id?: unknown
                after?: unknown
                order?: ExternalStorageOrderInput
                limit?: unknown
              }
            }
            output: ExternalStorageListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                project_id?: unknown
                after?: unknown
                order?: ExternalStorageOrderInput
                limit?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                project_id?: unknown
                after?: unknown
                order?: ExternalStorageOrderInput
                limit?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                project_id?: unknown
                after?: unknown
                order?: ExternalStorageOrderInput
                limit?: unknown
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { json: CreateExternalStorageBodyInput }
            output: ExternalStorageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateExternalStorageBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateExternalStorageBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateExternalStorageBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateExternalStorageBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/organization/external_storage/:external_storage_id': {
      $get:
        | {
            input: { param: { external_storage_id: string } }
            output: ExternalStorageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_storage_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_storage_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_storage_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { external_storage_id: string } }
            output: ExternalStorageDeletedResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_storage_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_storage_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_storage_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/external_storage/:external_storage_id/validate': {
      $post:
        | {
            input: { param: { external_storage_id: string } }
            output: ExternalStorageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_storage_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_storage_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_storage_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_storage_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/organization/spend_limit': {
      $get:
        | { input: {}; output: OrganizationSpendLimitResource; outputFormat: 'json'; status: 200 }
        | { input: {}; output: PermissionErrorResponse; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 404 }
      $post:
        | {
            input: { json: UpdateOrganizationSpendLimitBodyInput }
            output: OrganizationSpendLimitResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateOrganizationSpendLimitBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UpdateOrganizationSpendLimitBodyInput }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
      $delete:
        | {
            input: {}
            output: OrganizationSpendLimitDeletedResource
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: PermissionErrorResponse; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/organization/projects/:project_id/spend_limit': {
      $get:
        | {
            input: { param: { project_id: string } }
            output: ProjectSpendLimitResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { project_id: string } }
            output: ProjectSpendLimitDeletedResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { project_id: string } } & { json: UpdateProjectSpendLimitBodyInput }
            output: ProjectSpendLimitResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & { json: UpdateProjectSpendLimitBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & { json: UpdateProjectSpendLimitBodyInput }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & { json: UpdateProjectSpendLimitBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/projects/:project_id/service_tier_settings': {
      $get: {
        input: { param: { project_id: string } }
        output: ProjectServiceTierSettingsResource
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { project_id: string } } & {
          json: UpdateProjectServiceTierSettingsBodyInput
        }
        output: ProjectServiceTierSettingsResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/projects/:project_id/service_accounts/:service_account_id/api_keys': {
      $post:
        | {
            input: { param: { project_id: string; service_account_id: string } } & {
              json: CreateProjectServiceAccountApiKeyBodyInput
            }
            output: ServiceAccountApiKeyBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; service_account_id: string } } & {
              json: CreateProjectServiceAccountApiKeyBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; service_account_id: string } } & {
              json: CreateProjectServiceAccountApiKeyBodyInput
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; service_account_id: string } } & {
              json: CreateProjectServiceAccountApiKeyBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; service_account_id: string } } & {
              json: CreateProjectServiceAccountApiKeyBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/content_provenance_checks': {
      $post:
        | {
            input: { form: CreateContentProvenanceBodyInput }
            output: ProvenanceResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: CreateContentProvenanceBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: CreateContentProvenanceBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { form: CreateContentProvenanceBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { form: CreateContentProvenanceBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { form: CreateContentProvenanceBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/videos': {
      $post:
        | {
            input: { json: CreateVideoJsonBodyInput } & { form: CreateVideoMultipartBodyInput }
            output: VideoResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateVideoJsonBodyInput } & { form: CreateVideoMultipartBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateVideoJsonBodyInput } & { form: CreateVideoMultipartBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateVideoJsonBodyInput } & { form: CreateVideoMultipartBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateVideoJsonBodyInput } & { form: CreateVideoMultipartBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateVideoJsonBodyInput } & { form: CreateVideoMultipartBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: { query: { limit?: unknown; order?: OrderEnumInput; after?: string } }
            output: VideoListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: unknown; order?: OrderEnumInput; after?: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: unknown; order?: OrderEnumInput; after?: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/videos/characters': {
      $post:
        | {
            input: { form: CreateVideoCharacterBodyInput }
            output: VideoCharacterResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: CreateVideoCharacterBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: CreateVideoCharacterBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { form: CreateVideoCharacterBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { form: CreateVideoCharacterBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/videos/characters/:character_id': {
      $get:
        | {
            input: { param: { character_id: string } }
            output: VideoCharacterResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { character_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { character_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/videos/edits': {
      $post:
        | {
            input: { json: CreateVideoEditJsonBodyInput } & {
              form: CreateVideoEditMultipartBodyInput
            }
            output: VideoResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateVideoEditJsonBodyInput } & {
              form: CreateVideoEditMultipartBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateVideoEditJsonBodyInput } & {
              form: CreateVideoEditMultipartBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateVideoEditJsonBodyInput } & {
              form: CreateVideoEditMultipartBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateVideoEditJsonBodyInput } & {
              form: CreateVideoEditMultipartBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateVideoEditJsonBodyInput } & {
              form: CreateVideoEditMultipartBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/videos/extensions': {
      $post:
        | {
            input: { json: CreateVideoExtendJsonBodyInput } & {
              form: CreateVideoExtendMultipartBodyInput
            }
            output: VideoResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateVideoExtendJsonBodyInput } & {
              form: CreateVideoExtendMultipartBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateVideoExtendJsonBodyInput } & {
              form: CreateVideoExtendMultipartBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateVideoExtendJsonBodyInput } & {
              form: CreateVideoExtendMultipartBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateVideoExtendJsonBodyInput } & {
              form: CreateVideoExtendMultipartBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateVideoExtendJsonBodyInput } & {
              form: CreateVideoExtendMultipartBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/videos/:video_id': {
      $get:
        | {
            input: { param: { video_id: string } }
            output: VideoResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { video_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { video_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { video_id: string } }
            output: DeletedVideoResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { video_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { video_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { video_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/videos/:video_id/content': {
      $get:
        | {
            input: { param: { video_id: string } } & {
              query: { variant?: VideoContentVariantInput }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { video_id: string } } & {
              query: { variant?: VideoContentVariantInput }
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { video_id: string } } & {
              query: { variant?: VideoContentVariantInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { video_id: string } } & {
              query: { variant?: VideoContentVariantInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { video_id: string } } & {
              query: { variant?: VideoContentVariantInput }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/videos/:video_id/remix': {
      $post:
        | {
            input: { param: { video_id: string } } & { json: CreateVideoRemixBodyInput } & {
              form: CreateVideoRemixBodyInput
            }
            output: VideoResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { video_id: string } } & { json: CreateVideoRemixBodyInput } & {
              form: CreateVideoRemixBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { video_id: string } } & { json: CreateVideoRemixBodyInput } & {
              form: CreateVideoRemixBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { video_id: string } } & { json: CreateVideoRemixBodyInput } & {
              form: CreateVideoRemixBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { video_id: string } } & { json: CreateVideoRemixBodyInput } & {
              form: CreateVideoRemixBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { video_id: string } } & { json: CreateVideoRemixBodyInput } & {
              form: CreateVideoRemixBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/responses/input_tokens': {
      $post:
        | {
            input: { json: TokenCountsBodyInput }
            output: TokenCountsResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TokenCountsBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TokenCountsBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/responses/compact': {
      $post:
        | {
            input: { json: CompactResponseMethodPublicBodyInput }
            output: CompactResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CompactResponseMethodPublicBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CompactResponseMethodPublicBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CompactResponseMethodPublicBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/skills': {
      $post:
        | {
            input: { json: CreateSkillBodyInput } & { form: CreateSkillBodyInput }
            output: SkillResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateSkillBodyInput } & { form: CreateSkillBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateSkillBodyInput } & { form: CreateSkillBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateSkillBodyInput } & { form: CreateSkillBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { query: { limit?: unknown; order?: OrderEnumInput; after?: string } }
            output: SkillListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: unknown; order?: OrderEnumInput; after?: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { limit?: unknown; order?: OrderEnumInput; after?: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/skills/:skill_id': {
      $delete:
        | {
            input: { param: { skill_id: string } }
            output: DeletedSkillResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { skill_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { skill_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { skill_id: string } }
            output: SkillResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { skill_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { skill_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { skill_id: string } } & { json: SetDefaultSkillVersionBodyInput }
            output: SkillResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { skill_id: string } } & { json: SetDefaultSkillVersionBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { skill_id: string } } & { json: SetDefaultSkillVersionBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { skill_id: string } } & { json: SetDefaultSkillVersionBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/skills/:skill_id/content': {
      $get:
        | { input: { param: { skill_id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { skill_id: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { skill_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { skill_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/skills/:skill_id/versions': {
      $post:
        | {
            input: { param: { skill_id: string } } & { json: CreateSkillVersionBodyInput } & {
              form: CreateSkillVersionBodyInput
            }
            output: SkillVersionResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { skill_id: string } } & { json: CreateSkillVersionBodyInput } & {
              form: CreateSkillVersionBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { skill_id: string } } & { json: CreateSkillVersionBodyInput } & {
              form: CreateSkillVersionBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { skill_id: string } } & { json: CreateSkillVersionBodyInput } & {
              form: CreateSkillVersionBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { skill_id: string } } & { json: CreateSkillVersionBodyInput } & {
              form: CreateSkillVersionBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { skill_id: string } } & {
              query: { limit?: unknown; order?: OrderEnumInput; after?: string }
            }
            output: SkillVersionListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { skill_id: string } } & {
              query: { limit?: unknown; order?: OrderEnumInput; after?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { skill_id: string } } & {
              query: { limit?: unknown; order?: OrderEnumInput; after?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { skill_id: string } } & {
              query: { limit?: unknown; order?: OrderEnumInput; after?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/skills/:skill_id/versions/:version': {
      $get:
        | {
            input: { param: { skill_id: string; version: string } }
            output: SkillVersionResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { skill_id: string; version: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { skill_id: string; version: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { skill_id: string; version: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { skill_id: string; version: string } }
            output: DeletedSkillVersionResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { skill_id: string; version: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { skill_id: string; version: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { skill_id: string; version: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/skills/:skill_id/versions/:version/content': {
      $get:
        | {
            input: { param: { skill_id: string; version: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { skill_id: string; version: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { skill_id: string; version: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { skill_id: string; version: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { skill_id: string; version: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/chatkit/sessions/:session_id/cancel': {
      $post:
        | {
            input: { param: { session_id: string } }
            output: ChatSessionResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/chatkit/sessions': {
      $post:
        | {
            input: { json: CreateChatSessionBodyInput }
            output: ChatSessionResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateChatSessionBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateChatSessionBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateChatSessionBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/chatkit/threads/:thread_id/items': {
      $get:
        | {
            input: { param: { thread_id: string } } & {
              query: { limit?: unknown; order?: OrderEnumInput; after?: string; before?: string }
            }
            output: ThreadItemListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string } } & {
              query: { limit?: unknown; order?: OrderEnumInput; after?: string; before?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { thread_id: string } } & {
              query: { limit?: unknown; order?: OrderEnumInput; after?: string; before?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { thread_id: string } } & {
              query: { limit?: unknown; order?: OrderEnumInput; after?: string; before?: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/chatkit/threads/:thread_id': {
      $get:
        | {
            input: { param: { thread_id: string } }
            output: ThreadResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { thread_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { thread_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { thread_id: string } }
            output: DeletedThreadResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { thread_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { thread_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/chatkit/threads': {
      $get:
        | {
            input: {
              query: {
                limit?: unknown
                order?: OrderEnumInput
                after?: string
                before?: string
                user?: string
              }
            }
            output: ThreadListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: OrderEnumInput
                after?: string
                before?: string
                user?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: OrderEnumInput
                after?: string
                before?: string
                user?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: OrderEnumInput
                after?: string
                before?: string
                user?: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/decisions': {
      $post: {
        input: { json: DecisionRequestInput }
        output: DecisionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/agents/automations': {
      $post:
        | {
            input: { json: CreateAutomationParamsInput }
            output: AutomationResource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateAutomationParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateAutomationParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateAutomationParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateAutomationParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateAutomationParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateAutomationParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateAutomationParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateAutomationParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                session_id?: string
              }
            }
            output: {
              object: 'list'
              data: AutomationResource[]
              first_id: string | null
              last_id: string | null
              has_more: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                session_id?: string
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                session_id?: string
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                session_id?: string
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                session_id?: string
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                session_id?: string
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                session_id?: string
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                session_id?: string
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                session_id?: string
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 501
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                session_id?: string
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/agents/automations/:automation_id': {
      $get:
        | {
            input: { param: { automation_id: string } }
            output: AutomationResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { automation_id: string } } & { json: UpdateAutomationParamsInput }
            output: AutomationResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { automation_id: string } } & { json: UpdateAutomationParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { automation_id: string } } & { json: UpdateAutomationParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { automation_id: string } } & { json: UpdateAutomationParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { automation_id: string } } & { json: UpdateAutomationParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { automation_id: string } } & { json: UpdateAutomationParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { automation_id: string } } & { json: UpdateAutomationParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { automation_id: string } } & { json: UpdateAutomationParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { automation_id: string } } & { json: UpdateAutomationParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { automation_id: string } }
            output: DeletedAutomationResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/agents/automations/:automation_id/pause': {
      $post:
        | {
            input: { param: { automation_id: string } }
            output: AutomationResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/agents/automations/:automation_id/resume': {
      $post:
        | {
            input: { param: { automation_id: string } }
            output: AutomationResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/agents/automations/:automation_id/invocations': {
      $post:
        | {
            input: { param: { automation_id: string } }
            output: AutomationInvocationResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { automation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: { param: { automation_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: {
              object: 'list'
              data: AutomationInvocationResource[]
              first_id: string | null
              last_id: string | null
              has_more: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { automation_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { automation_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { automation_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { automation_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { automation_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { automation_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { automation_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { automation_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { automation_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/agents/automations/:automation_id/invocations/:invocation_id': {
      $get:
        | {
            input: { param: { automation_id: string; invocation_id: string } }
            output: AutomationInvocationResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { automation_id: string; invocation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { automation_id: string; invocation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { automation_id: string; invocation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { automation_id: string; invocation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { automation_id: string; invocation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { automation_id: string; invocation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { automation_id: string; invocation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { automation_id: string; invocation_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/agents/environments': {
      $get:
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                type?: EnvironmentTypeParamInput
              }
            }
            output: AgentEnvironmentListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                type?: EnvironmentTypeParamInput
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                type?: EnvironmentTypeParamInput
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                type?: EnvironmentTypeParamInput
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                type?: EnvironmentTypeParamInput
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                type?: EnvironmentTypeParamInput
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                type?: EnvironmentTypeParamInput
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                type?: EnvironmentTypeParamInput
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                type?: EnvironmentTypeParamInput
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string } } & {
              json: CreateAgentEnvironmentParamsInput
            }
            output: PublicEnvironmentResource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string } } & {
              json: CreateAgentEnvironmentParamsInput
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string } } & {
              json: CreateAgentEnvironmentParamsInput
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string } } & {
              json: CreateAgentEnvironmentParamsInput
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string } } & {
              json: CreateAgentEnvironmentParamsInput
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Idempotency-Key'?: string } } & {
              json: CreateAgentEnvironmentParamsInput
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'Idempotency-Key'?: string } } & {
              json: CreateAgentEnvironmentParamsInput
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'Idempotency-Key'?: string } } & {
              json: CreateAgentEnvironmentParamsInput
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'Idempotency-Key'?: string } } & {
              json: CreateAgentEnvironmentParamsInput
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/agents/environments/:environment_id': {
      $get:
        | {
            input: { param: { environment_id: string } }
            output: PublicEnvironmentResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environment_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environment_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environment_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { environment_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environment_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { environment_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { environment_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { environment_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/agents/environments/:environment_id/files': {
      $get:
        | {
            input: { param: { environment_id: string } } & {
              query: { path?: unknown; limit?: unknown; order?: ListOrderParamInput; page?: string }
            }
            output: EnvironmentFileListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environment_id: string } } & {
              query: { path?: unknown; limit?: unknown; order?: ListOrderParamInput; page?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environment_id: string } } & {
              query: { path?: unknown; limit?: unknown; order?: ListOrderParamInput; page?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environment_id: string } } & {
              query: { path?: unknown; limit?: unknown; order?: ListOrderParamInput; page?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { environment_id: string } } & {
              query: { path?: unknown; limit?: unknown; order?: ListOrderParamInput; page?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environment_id: string } } & {
              query: { path?: unknown; limit?: unknown; order?: ListOrderParamInput; page?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { environment_id: string } } & {
              query: { path?: unknown; limit?: unknown; order?: ListOrderParamInput; page?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { environment_id: string } } & {
              query: { path?: unknown; limit?: unknown; order?: ListOrderParamInput; page?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { environment_id: string } } & {
              query: { path?: unknown; limit?: unknown; order?: ListOrderParamInput; page?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { environment_id: string } } & { json: HostedEnvironmentFileParamInput }
            output: EnvironmentFileResource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { environment_id: string } } & { json: HostedEnvironmentFileParamInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environment_id: string } } & { json: HostedEnvironmentFileParamInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environment_id: string } } & { json: HostedEnvironmentFileParamInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { environment_id: string } } & { json: HostedEnvironmentFileParamInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environment_id: string } } & { json: HostedEnvironmentFileParamInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { environment_id: string } } & { json: HostedEnvironmentFileParamInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { environment_id: string } } & { json: HostedEnvironmentFileParamInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { environment_id: string } } & { json: HostedEnvironmentFileParamInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/agents/sessions/:session_id/subagents': {
      $get:
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: {
              object: 'list'
              data: SubagentResource[]
              first_id: string | null
              last_id: string | null
              has_more: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/agents/sessions/:session_id/subagents/:subagent_id': {
      $get:
        | {
            input: { param: { session_id: string; subagent_id: string } }
            output: SubagentResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string; subagent_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string; subagent_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string; subagent_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string; subagent_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string; subagent_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string; subagent_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { session_id: string; subagent_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string; subagent_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/agents/sessions/:session_id/subagents/:subagent_id/items': {
      $get:
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: SessionItemListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/agents/sessions/:session_id/subagents/:subagent_id/turns': {
      $get:
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: SessionTurnListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/agents/sessions/:session_id/subagents/:subagent_id/turns/:turn_id': {
      $get:
        | {
            input: { param: { session_id: string; subagent_id: string; turn_id: string } }
            output: TurnResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string; subagent_id: string; turn_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string; subagent_id: string; turn_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string; subagent_id: string; turn_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string; subagent_id: string; turn_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string; subagent_id: string; turn_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string; subagent_id: string; turn_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { session_id: string; subagent_id: string; turn_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string; subagent_id: string; turn_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/agents/sessions/:session_id/subagents/:subagent_id/turns/:turn_id/items': {
      $get:
        | {
            input: { param: { session_id: string; subagent_id: string; turn_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: SessionItemListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string; subagent_id: string; turn_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string; subagent_id: string; turn_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string; subagent_id: string; turn_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string; subagent_id: string; turn_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string; subagent_id: string; turn_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string; subagent_id: string; turn_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { session_id: string; subagent_id: string; turn_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string; subagent_id: string; turn_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/agents': {
      $get:
        | {
            input: { query: { limit?: unknown; order?: ListOrderParamInput; after?: string } }
            output: AgentListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: unknown; order?: ListOrderParamInput; after?: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: unknown; order?: ListOrderParamInput; after?: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: unknown; order?: ListOrderParamInput; after?: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: unknown; order?: ListOrderParamInput; after?: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { limit?: unknown; order?: ListOrderParamInput; after?: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { limit?: unknown; order?: ListOrderParamInput; after?: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { limit?: unknown; order?: ListOrderParamInput; after?: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { limit?: unknown; order?: ListOrderParamInput; after?: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { json: CreateAgentParamsInput }
            output: AgentResource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateAgentParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateAgentParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateAgentParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateAgentParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateAgentParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateAgentParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateAgentParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateAgentParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/agents/:agent_id': {
      $get:
        | {
            input: { param: { agent_id: string } }
            output: AgentResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { agent_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { agent_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { agent_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { agent_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { agent_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { agent_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { agent_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { agent_id: string } } & { json: UpdateAgentParamsInput }
            output: AgentResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_id: string } } & { json: UpdateAgentParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { agent_id: string } } & { json: UpdateAgentParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { agent_id: string } } & { json: UpdateAgentParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { agent_id: string } } & { json: UpdateAgentParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { agent_id: string } } & { json: UpdateAgentParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { agent_id: string } } & { json: UpdateAgentParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { agent_id: string } } & { json: UpdateAgentParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { agent_id: string } } & { json: UpdateAgentParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { agent_id: string } }
            output: DeletedAgentResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { agent_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { agent_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { agent_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { agent_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { agent_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { agent_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { agent_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/agents/environments/templates': {
      $get:
        | {
            input: { query: { limit?: unknown; order?: ListOrderParamInput; after?: string } }
            output: EnvironmentTemplateListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: unknown; order?: ListOrderParamInput; after?: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: unknown; order?: ListOrderParamInput; after?: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: unknown; order?: ListOrderParamInput; after?: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: unknown; order?: ListOrderParamInput; after?: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { limit?: unknown; order?: ListOrderParamInput; after?: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { limit?: unknown; order?: ListOrderParamInput; after?: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { limit?: unknown; order?: ListOrderParamInput; after?: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { json: CreateEnvironmentTemplateParamsInput }
            output: EnvironmentTemplateResource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateEnvironmentTemplateParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateEnvironmentTemplateParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateEnvironmentTemplateParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateEnvironmentTemplateParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateEnvironmentTemplateParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateEnvironmentTemplateParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateEnvironmentTemplateParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/agents/environments/templates/:environment_template_id': {
      $get:
        | {
            input: { param: { environment_template_id: string } }
            output: EnvironmentTemplateResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environment_template_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environment_template_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environment_template_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { environment_template_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environment_template_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { environment_template_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { environment_template_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { environment_template_id: string } } & {
              json: UpdateEnvironmentTemplateParamsInput
            }
            output: EnvironmentTemplateResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environment_template_id: string } } & {
              json: UpdateEnvironmentTemplateParamsInput
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environment_template_id: string } } & {
              json: UpdateEnvironmentTemplateParamsInput
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environment_template_id: string } } & {
              json: UpdateEnvironmentTemplateParamsInput
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { environment_template_id: string } } & {
              json: UpdateEnvironmentTemplateParamsInput
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environment_template_id: string } } & {
              json: UpdateEnvironmentTemplateParamsInput
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { environment_template_id: string } } & {
              json: UpdateEnvironmentTemplateParamsInput
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { environment_template_id: string } } & {
              json: UpdateEnvironmentTemplateParamsInput
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { environment_template_id: string } } & {
              json: UpdateEnvironmentTemplateParamsInput
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { environment_template_id: string } }
            output: DeletedEnvironmentTemplateResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environment_template_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environment_template_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environment_template_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { environment_template_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environment_template_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { environment_template_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { environment_template_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { environment_template_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/agents/sessions': {
      $get:
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                agent_id?: string
                metadata?: { [key: string]: string }
              }
            }
            output: SessionListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                agent_id?: string
                metadata?: { [key: string]: string }
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                agent_id?: string
                metadata?: { [key: string]: string }
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                agent_id?: string
                metadata?: { [key: string]: string }
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                agent_id?: string
                metadata?: { [key: string]: string }
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                agent_id?: string
                metadata?: { [key: string]: string }
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                agent_id?: string
                metadata?: { [key: string]: string }
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                agent_id?: string
                metadata?: { [key: string]: string }
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                agent_id?: string
                metadata?: { [key: string]: string }
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { json: CreateAgentSessionParamsInput }
            output: SessionResource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateAgentSessionParamsInput }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { json: CreateAgentSessionParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateAgentSessionParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateAgentSessionParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateAgentSessionParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateAgentSessionParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateAgentSessionParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateAgentSessionParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateAgentSessionParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/agents/sessions/:session_id': {
      $get:
        | {
            input: { param: { session_id: string } }
            output: SessionResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { session_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { session_id: string } } & { json: UpdateAgentSessionParamsInput }
            output: SessionResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } } & { json: UpdateAgentSessionParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & { json: UpdateAgentSessionParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string } } & { json: UpdateAgentSessionParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string } } & { json: UpdateAgentSessionParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & { json: UpdateAgentSessionParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string } } & { json: UpdateAgentSessionParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { session_id: string } } & { json: UpdateAgentSessionParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string } } & { json: UpdateAgentSessionParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { session_id: string } }
            output: DeletedSessionResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { session_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/agents/sessions/:session_id/artifacts': {
      $get:
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                environment_id?: unknown
              }
            }
            output: SessionArtifactListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                environment_id?: unknown
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                environment_id?: unknown
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                environment_id?: unknown
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                environment_id?: unknown
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                environment_id?: unknown
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                environment_id?: unknown
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                environment_id?: unknown
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                environment_id?: unknown
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/agents/sessions/:session_id/artifacts/:artifact_id': {
      $get:
        | {
            input: { param: { session_id: string; artifact_id: string } }
            output: SessionArtifactResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string; artifact_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string; artifact_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string; artifact_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string; artifact_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string; artifact_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string; artifact_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { session_id: string; artifact_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string; artifact_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { session_id: string; artifact_id: string } }
            output: DeletedSessionArtifactResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string; artifact_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string; artifact_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string; artifact_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string; artifact_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string; artifact_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string; artifact_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { session_id: string; artifact_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string; artifact_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/agents/sessions/:session_id/artifacts/:artifact_id/content': {
      $get:
        | {
            input: { param: { session_id: string; artifact_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { session_id: string; artifact_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string; artifact_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string; artifact_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string; artifact_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string; artifact_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string; artifact_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { session_id: string; artifact_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string; artifact_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/agents/sessions/:session_id/events': {
      $get:
        | {
            input: { param: { session_id: string } } & { query: { include_obfuscation?: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { session_id: string } } & { query: { include_obfuscation?: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & { query: { include_obfuscation?: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string } } & { query: { include_obfuscation?: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string } } & { query: { include_obfuscation?: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & { query: { include_obfuscation?: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string } } & { query: { include_obfuscation?: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { session_id: string } } & { query: { include_obfuscation?: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string } } & { query: { include_obfuscation?: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { session_id: string } } & {
              header: { 'Idempotency-Key'?: string }
            } & { json: CreateSessionEventsParamsInput }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { session_id: string } } & {
              header: { 'Idempotency-Key'?: string }
            } & { json: CreateSessionEventsParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & {
              header: { 'Idempotency-Key'?: string }
            } & { json: CreateSessionEventsParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string } } & {
              header: { 'Idempotency-Key'?: string }
            } & { json: CreateSessionEventsParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string } } & {
              header: { 'Idempotency-Key'?: string }
            } & { json: CreateSessionEventsParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & {
              header: { 'Idempotency-Key'?: string }
            } & { json: CreateSessionEventsParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string } } & {
              header: { 'Idempotency-Key'?: string }
            } & { json: CreateSessionEventsParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { session_id: string } } & {
              header: { 'Idempotency-Key'?: string }
            } & { json: CreateSessionEventsParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string } } & {
              header: { 'Idempotency-Key'?: string }
            } & { json: CreateSessionEventsParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/agents/sessions/:session_id/items': {
      $get:
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: SessionItemListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/agents/sessions/:session_id/traces': {
      $get:
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: SessionTraceListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/agents/sessions/:session_id/turns': {
      $get:
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: SessionTurnListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/agents/sessions/:session_id/turns/:turn_id': {
      $get:
        | {
            input: { param: { session_id: string; turn_id: string } }
            output: TurnResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string; turn_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string; turn_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string; turn_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string; turn_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string; turn_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string; turn_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { session_id: string; turn_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string; turn_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/agents/sessions/:session_id/turns/:turn_id/items': {
      $get:
        | {
            input: { param: { session_id: string; turn_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: SessionItemListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string; turn_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string; turn_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string; turn_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string; turn_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string; turn_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string; turn_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { session_id: string; turn_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string; turn_id: string } } & {
              query: { limit?: unknown; order?: ListOrderParamInput; after?: string }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/vaults': {
      $get:
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                metadata?: { [key: string]: string }
                status?: VaultStatusFilterParamInput
              }
            }
            output: VaultListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                metadata?: { [key: string]: string }
                status?: VaultStatusFilterParamInput
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                metadata?: { [key: string]: string }
                status?: VaultStatusFilterParamInput
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                metadata?: { [key: string]: string }
                status?: VaultStatusFilterParamInput
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                metadata?: { [key: string]: string }
                status?: VaultStatusFilterParamInput
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                metadata?: { [key: string]: string }
                status?: VaultStatusFilterParamInput
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                metadata?: { [key: string]: string }
                status?: VaultStatusFilterParamInput
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                metadata?: { [key: string]: string }
                status?: VaultStatusFilterParamInput
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                metadata?: { [key: string]: string }
                status?: VaultStatusFilterParamInput
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { json: CreateVaultParamsInput }
            output: VaultResource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateVaultParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateVaultParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateVaultParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateVaultParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateVaultParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateVaultParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateVaultParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateVaultParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/vaults/:vault_id': {
      $get:
        | {
            input: { param: { vault_id: string } }
            output: VaultResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vault_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vault_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { vault_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { vault_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vault_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { vault_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { vault_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { vault_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { vault_id: string } } & { json: UpdateVaultParamsInput }
            output: VaultResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vault_id: string } } & { json: UpdateVaultParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vault_id: string } } & { json: UpdateVaultParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { vault_id: string } } & { json: UpdateVaultParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { vault_id: string } } & { json: UpdateVaultParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vault_id: string } } & { json: UpdateVaultParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { vault_id: string } } & { json: UpdateVaultParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { vault_id: string } } & { json: UpdateVaultParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { vault_id: string } } & { json: UpdateVaultParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { vault_id: string } }
            output: DeletedVaultResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vault_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vault_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { vault_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { vault_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vault_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { vault_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { vault_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { vault_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/vaults/:vault_id/credentials': {
      $get:
        | {
            input: { param: { vault_id: string } } & {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                metadata?: { [key: string]: string }
                status?: VaultStatusFilterParamInput
              }
            }
            output: VaultCredentialListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vault_id: string } } & {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                metadata?: { [key: string]: string }
                status?: VaultStatusFilterParamInput
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vault_id: string } } & {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                metadata?: { [key: string]: string }
                status?: VaultStatusFilterParamInput
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { vault_id: string } } & {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                metadata?: { [key: string]: string }
                status?: VaultStatusFilterParamInput
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { vault_id: string } } & {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                metadata?: { [key: string]: string }
                status?: VaultStatusFilterParamInput
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vault_id: string } } & {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                metadata?: { [key: string]: string }
                status?: VaultStatusFilterParamInput
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { vault_id: string } } & {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                metadata?: { [key: string]: string }
                status?: VaultStatusFilterParamInput
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { vault_id: string } } & {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                metadata?: { [key: string]: string }
                status?: VaultStatusFilterParamInput
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { vault_id: string } } & {
              query: {
                limit?: unknown
                order?: ListOrderParamInput
                after?: string
                metadata?: { [key: string]: string }
                status?: VaultStatusFilterParamInput
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { vault_id: string } } & { json: CreateVaultCredentialParamsInput }
            output: VaultCredentialResource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { vault_id: string } } & { json: CreateVaultCredentialParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vault_id: string } } & { json: CreateVaultCredentialParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { vault_id: string } } & { json: CreateVaultCredentialParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { vault_id: string } } & { json: CreateVaultCredentialParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vault_id: string } } & { json: CreateVaultCredentialParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { vault_id: string } } & { json: CreateVaultCredentialParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { vault_id: string } } & { json: CreateVaultCredentialParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { vault_id: string } } & { json: CreateVaultCredentialParamsInput }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/vaults/:vault_id/credentials/:credential_id': {
      $get:
        | {
            input: { param: { vault_id: string; credential_id: string } }
            output: VaultCredentialResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vault_id: string; credential_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vault_id: string; credential_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { vault_id: string; credential_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { vault_id: string; credential_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vault_id: string; credential_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { vault_id: string; credential_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { vault_id: string; credential_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { vault_id: string; credential_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { vault_id: string; credential_id: string } } & {
              json: RotateVaultCredentialParamsInput
            }
            output: VaultCredentialResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vault_id: string; credential_id: string } } & {
              json: RotateVaultCredentialParamsInput
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vault_id: string; credential_id: string } } & {
              json: RotateVaultCredentialParamsInput
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { vault_id: string; credential_id: string } } & {
              json: RotateVaultCredentialParamsInput
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { vault_id: string; credential_id: string } } & {
              json: RotateVaultCredentialParamsInput
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vault_id: string; credential_id: string } } & {
              json: RotateVaultCredentialParamsInput
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { vault_id: string; credential_id: string } } & {
              json: RotateVaultCredentialParamsInput
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { vault_id: string; credential_id: string } } & {
              json: RotateVaultCredentialParamsInput
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { vault_id: string; credential_id: string } } & {
              json: RotateVaultCredentialParamsInput
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { vault_id: string; credential_id: string } }
            output: DeletedVaultCredentialResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vault_id: string; credential_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vault_id: string; credential_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { vault_id: string; credential_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { vault_id: string; credential_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vault_id: string; credential_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { vault_id: string; credential_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { vault_id: string; credential_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { vault_id: string; credential_id: string } }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/webhook_endpoints': {
      $get:
        | {
            input: { query: { limit?: unknown; after?: unknown } }
            output: WebhookEndpointListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: unknown; after?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: unknown; after?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { json: PublicCreateEndpointBodyInput }
            output: WebhookEndpointWithSecretResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PublicCreateEndpointBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/webhook_endpoints/:webhook_endpoint_id': {
      $get:
        | {
            input: { param: { webhook_endpoint_id: string } }
            output: WebhookEndpointBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_endpoint_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_endpoint_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { webhook_endpoint_id: string } } & {
              json: PublicUpdateEndpointBodyInput
            }
            output: WebhookEndpointBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_endpoint_id: string } } & {
              json: PublicUpdateEndpointBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_endpoint_id: string } } & {
              json: PublicUpdateEndpointBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { webhook_endpoint_id: string } }
            output: DeletedWebhookEndpointResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_endpoint_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_endpoint_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/webhook_endpoints/:webhook_endpoint_id/rotate_secret': {
      $post:
        | {
            input: { param: { webhook_endpoint_id: string } } & {
              json: PublicRotateSecretBodyInput
            }
            output: WebhookEndpointWithSecretResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_endpoint_id: string } } & {
              json: PublicRotateSecretBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_endpoint_id: string } } & {
              json: PublicRotateSecretBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/webhook_endpoints/:webhook_endpoint_id/test': {
      $post:
        | {
            input: { param: { webhook_endpoint_id: string } } & {
              json: PublicTestEndpointBodyInput
            }
            output: WebhookEndpointTestResultResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_endpoint_id: string } } & {
              json: PublicTestEndpointBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_endpoint_id: string } } & {
              json: PublicTestEndpointBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_endpoint_id: string } } & {
              json: PublicTestEndpointBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/webhook_event_types': {
      $get:
        | { input: {}; output: WebhookEventTypeListResource; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/responses?beta=true': {
      $post:
        | {
            input: { header: { 'openai-beta'?: unknown } } & { json: BetaCreateResponseInput }
            output: BetaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'openai-beta'?: unknown } } & { json: BetaCreateResponseInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'openai-beta'?: unknown } } & { json: BetaCreateResponseInput }
            output: BetaErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'openai-beta'?: unknown } } & { json: BetaCreateResponseInput }
            output: BetaErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'openai-beta'?: unknown } } & { json: BetaCreateResponseInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'openai-beta'?: unknown } } & { json: BetaCreateResponseInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/responses/:response_id?beta=true': {
      $get:
        | {
            input: { param: { response_id: string } } & {
              query: {
                include?: unknown
                stream?: string
                starting_after?: unknown
                include_obfuscation?: string
              }
            } & { header: { 'openai-beta'?: unknown } }
            output: BetaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { response_id: string } } & {
              query: {
                include?: unknown
                stream?: string
                starting_after?: unknown
                include_obfuscation?: string
              }
            } & { header: { 'openai-beta'?: unknown } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { response_id: string } } & {
              query: {
                include?: unknown
                stream?: string
                starting_after?: unknown
                include_obfuscation?: string
              }
            } & { header: { 'openai-beta'?: unknown } }
            output: BetaErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { response_id: string } } & {
              query: {
                include?: unknown
                stream?: string
                starting_after?: unknown
                include_obfuscation?: string
              }
            } & { header: { 'openai-beta'?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { response_id: string } } & { header: { 'openai-beta'?: unknown } }
            output: { object: 'response.deleted'; deleted: boolean; id: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { response_id: string } } & { header: { 'openai-beta'?: unknown } }
            output: BetaErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { response_id: string } } & { header: { 'openai-beta'?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/responses/:response_id/cancel?beta=true': {
      $post:
        | {
            input: { param: { response_id: string } } & { header: { 'openai-beta'?: unknown } }
            output: BetaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { response_id: string } } & { header: { 'openai-beta'?: unknown } }
            output: BetaErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { response_id: string } } & { header: { 'openai-beta'?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/responses/compact?beta=true': {
      $post:
        | {
            input: { header: { 'openai-beta'?: unknown } } & {
              json: BetaCompactResponseMethodPublicBodyInput
            }
            output: BetaCompactResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'openai-beta'?: unknown } } & {
              json: BetaCompactResponseMethodPublicBodyInput
            }
            output: BetaErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'openai-beta'?: unknown } } & {
              json: BetaCompactResponseMethodPublicBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'openai-beta'?: unknown } } & {
              json: BetaCompactResponseMethodPublicBodyInput
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/responses/:response_id/input_items?beta=true': {
      $get:
        | {
            input: { param: { response_id: string } } & {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string; include?: unknown }
            } & { header: { 'openai-beta'?: unknown } }
            output: BetaResponseItemList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { response_id: string } } & {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string; include?: unknown }
            } & { header: { 'openai-beta'?: unknown } }
            output: BetaErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { response_id: string } } & {
              query: { limit?: unknown; order?: 'asc' | 'desc'; after?: string; include?: unknown }
            } & { header: { 'openai-beta'?: unknown } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/responses/input_tokens?beta=true': {
      $post:
        | {
            input: { header: { 'openai-beta'?: unknown } } & { json: BetaTokenCountsBodyInput }
            output: BetaTokenCountsResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'openai-beta'?: unknown } } & { json: BetaTokenCountsBodyInput }
            output: BetaErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'openai-beta'?: unknown } } & { json: BetaTokenCountsBodyInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  },
  '/'
>
export default routes
