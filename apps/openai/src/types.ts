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
type FunctionParameters = { [x: string]: unknown }
type FunctionObject = {
  description?: string | undefined
  name: string
  parameters?: FunctionParameters | undefined
  strict?: boolean | ({ [x: string]: unknown } | null) | undefined
}
type AssistantToolsFunction = { type: 'function'; function: FunctionObject }
type Metadata = { [x: string]: string } | ({ [x: string]: unknown } | null)
type ResponseFormatText = { type: 'text' }
type ResponseFormatJsonObject = { type: 'json_object' }
type ResponseFormatJsonSchemaSchema = { [x: string]: unknown }
type ResponseFormatJsonSchema = {
  type: 'json_schema'
  json_schema: {
    description?: string | undefined
    name: string
    schema?: ResponseFormatJsonSchemaSchema | undefined
    strict?: boolean | ({ [x: string]: unknown } | null) | undefined
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
  name: string | ({ [x: string]: unknown } | null)
  description: string | ({ [x: string]: unknown } | null)
  model: string
  instructions: string | ({ [x: string]: unknown } | null)
  tools: (AssistantToolsCode | AssistantToolsFileSearch | AssistantToolsFunction)[]
  tool_resources?:
    | {
        code_interpreter?: { file_ids?: string[] | undefined } | undefined
        file_search?: { vector_store_ids?: string[] | undefined } | undefined
      }
    | ({ [x: string]: unknown } | null)
    | undefined
  metadata: Metadata
  temperature?: number | ({ [x: string]: unknown } | null) | undefined
  top_p?: number | ({ [x: string]: unknown } | null) | undefined
  response_format?:
    | AssistantsApiResponseFormatOption
    | ({ [x: string]: unknown } | null)
    | undefined
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
  review_target?: string | ({ [x: string]: unknown } | null) | undefined
  error_type?: MisalignmentErrorType | undefined
  detailed_explanation?: string | undefined
  steer?: MisalignmentSteer | undefined
}
type Error = {
  code: string | ({ [x: string]: unknown } | null)
  message: string
  param: string | ({ [x: string]: unknown } | null)
  type: string
  misalignment?: MisalignmentErrorDetailsResource | undefined
}
type ErrorResponse = { error: Error }
type AssistantSupportedModels =
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
type ReasoningEffort =
  | 'none'
  | 'minimal'
  | 'low'
  | 'medium'
  | 'high'
  | 'xhigh'
  | 'max'
  | ({ [x: string]: unknown } | null)
type CreateAssistantRequest = {
  model: string | AssistantSupportedModels
  name?: string | ({ [x: string]: unknown } | null) | undefined
  description?: string | ({ [x: string]: unknown } | null) | undefined
  instructions?: string | ({ [x: string]: unknown } | null) | undefined
  reasoning_effort?: ReasoningEffort | undefined
  tools?: (AssistantToolsCode | AssistantToolsFileSearch | AssistantToolsFunction)[] | undefined
  tool_resources?:
    | {
        code_interpreter?: { file_ids?: string[] | undefined } | undefined
        file_search?: { [x: string]: unknown } | { [x: string]: unknown } | undefined
      }
    | ({ [x: string]: unknown } | null)
    | undefined
  metadata?: Metadata | undefined
  temperature?: number | ({ [x: string]: unknown } | null) | undefined
  top_p?: number | ({ [x: string]: unknown } | null) | undefined
  response_format?:
    | AssistantsApiResponseFormatOption
    | ({ [x: string]: unknown } | null)
    | undefined
}
type ModifyAssistantRequest = {
  model?: string | AssistantSupportedModels | undefined
  reasoning_effort?: ReasoningEffort | undefined
  name?: string | ({ [x: string]: unknown } | null) | undefined
  description?: string | ({ [x: string]: unknown } | null) | undefined
  instructions?: string | ({ [x: string]: unknown } | null) | undefined
  tools?: (AssistantToolsCode | AssistantToolsFileSearch | AssistantToolsFunction)[] | undefined
  tool_resources?:
    | {
        code_interpreter?: { file_ids?: string[] | undefined } | undefined
        file_search?: { vector_store_ids?: string[] | undefined } | undefined
      }
    | ({ [x: string]: unknown } | null)
    | undefined
  metadata?: Metadata | undefined
  temperature?: number | ({ [x: string]: unknown } | null) | undefined
  top_p?: number | ({ [x: string]: unknown } | null) | undefined
  response_format?:
    | AssistantsApiResponseFormatOption
    | ({ [x: string]: unknown } | null)
    | undefined
}
type DeleteAssistantResponse = { id: string; deleted: boolean; object: 'assistant.deleted' }
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
type CreateSpeechRequest = {
  model: string | 'tts-1' | 'tts-1-hd' | 'gpt-4o-mini-tts' | 'gpt-4o-mini-tts-2025-12-15'
  input: string
  instructions?: string | undefined
  voice: VoiceIdsShared | 'fable' | 'onyx' | 'nova' | { id: string }
  response_format?: 'mp3' | 'opus' | 'aac' | 'flac' | 'wav' | 'pcm' | undefined
  speed?: number | undefined
  stream_format?: 'sse' | 'audio' | undefined
}
type SpeechAudioDeltaEvent = { type: 'speech.audio.delta'; audio: string }
type SpeechAudioDoneEvent = {
  type: 'speech.audio.done'
  usage: { input_tokens: number; output_tokens: number; total_tokens: number }
}
type CreateSpeechResponseStreamEvent = SpeechAudioDeltaEvent | SpeechAudioDoneEvent
type AudioResponseFormat = 'json' | 'text' | 'srt' | 'verbose_json' | 'vtt' | 'diarized_json'
type TranscriptionInclude = 'logprobs'
type VadConfig = {
  type: 'server_vad'
  prefix_padding_ms?: number | undefined
  silence_duration_ms?: number | undefined
  threshold?: number | undefined
}
type CreateTranscriptionRequest = {
  file: File
  model:
    | string
    | 'whisper-1'
    | 'gpt-transcribe'
    | 'gpt-4o-transcribe'
    | 'gpt-4o-mini-transcribe'
    | 'gpt-4o-mini-transcribe-2025-12-15'
    | 'gpt-4o-transcribe-diarize'
  language?: string | undefined
  languages?: string[] | undefined
  keywords?: string[] | undefined
  prompt?: string | undefined
  response_format?: AudioResponseFormat | undefined
  temperature?: number | undefined
  include?: TranscriptionInclude[] | undefined
  timestamp_granularities?: ('word' | 'segment')[] | undefined
  stream?: boolean | ({ [x: string]: unknown } | null) | undefined
  chunking_strategy?: 'auto' | VadConfig | ({ [x: string]: unknown } | null) | undefined
  known_speaker_names?: string[] | undefined
  known_speaker_references?: string[] | undefined
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
  usage?: TranscriptTextUsageTokens | TranscriptTextUsageDuration | undefined
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
  usage?: TranscriptTextUsageTokens | TranscriptTextUsageDuration | undefined
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
type TranscriptTextSegmentEvent = {
  type: 'transcript.text.segment'
  id: string
  start: number
  end: number
  text: string
  speaker: string
}
type TranscriptTextDeltaEvent = {
  type: 'transcript.text.delta'
  delta: string
  logprobs?:
    | { token?: string | undefined; logprob?: number | undefined; bytes?: number[] | undefined }[]
    | undefined
  segment_id?: string | undefined
}
type TranscriptTextDoneEvent = {
  type: 'transcript.text.done'
  text: string
  languages?: TranscriptionLanguage[] | undefined
  logprobs?:
    | { token?: string | undefined; logprob?: number | undefined; bytes?: number[] | undefined }[]
    | undefined
  usage?: TranscriptTextUsageTokens | undefined
}
type CreateTranscriptionResponseStreamEvent =
  | TranscriptTextSegmentEvent
  | TranscriptTextDeltaEvent
  | TranscriptTextDoneEvent
type CreateTranslationRequest = {
  file: File
  model: string | 'whisper-1'
  prompt?: string | undefined
  response_format?: 'json' | 'text' | 'srt' | 'verbose_json' | 'vtt' | undefined
  temperature?: number | undefined
}
type CreateTranslationResponseJson = { text: string }
type CreateTranslationResponseVerboseJson = {
  language: string
  duration: number
  text: string
  segments?: TranscriptionSegment[] | undefined
}
type CreateVoiceConsentRequest = { name: string; recording: File; language: string }
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
  first_id?: string | ({ [x: string]: unknown } | null) | undefined
  last_id?: string | ({ [x: string]: unknown } | null) | undefined
  has_more: boolean
}
type UpdateVoiceConsentRequest = { name: string }
type VoiceConsentDeletedResource = { id: string; object: 'audio.voice_consent'; deleted: boolean }
type CreateVoicePromptRequest = {
  type: 'prompt'
  name: string
  prompt: string
  script_hint?: string | undefined
  model?: string | 'auto' | '2026-10-08' | undefined
}
type CreateVoiceFromConsentRequest = {
  type?: 'audio_sample' | undefined
  name: string
  audio_sample: File
  consent: string
}
type CreateVoiceRequest = CreateVoiceFromConsentRequest | CreateVoicePromptRequest
type VoiceResource = {
  object: 'audio.voice'
  id: string
  type: 'audio_sample' | 'prompt'
  prompt?: string | undefined
  name: string
  created_at: number
}
type VoiceDeletedResource = { id: string; object: 'audio.voice.deleted'; deleted: boolean }
type BatchFileExpirationAfter = { anchor: 'created_at'; seconds: bigint }
type CreateBatchRequest = {
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
  metadata?: Metadata | undefined
  output_expires_after?: BatchFileExpirationAfter | undefined
}
type BatchError = {
  code?: string | undefined
  message?: string | undefined
  param?: string | ({ [x: string]: unknown } | null) | undefined
  line?: number | ({ [x: string]: unknown } | null) | undefined
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
  content: string | ({ [x: string]: unknown } | null)
  refusal?: string | ({ [x: string]: unknown } | null) | undefined
  tool_calls?: ChatCompletionMessageToolCalls | ({ [x: string]: unknown } | null) | undefined
  annotations?:
    | {
        type: 'url_citation'
        url_citation: { end_index: number; start_index: number; url: string; title: string }
      }[]
    | undefined
  role: 'assistant'
  function_call?: ({ arguments: string; name: string } | null) | undefined
  audio?:
    | { id: string; expires_at: number; data: string; transcript: string }
    | ({ [x: string]: unknown } | null)
    | undefined
}
type ChatCompletionTokenLogprob = {
  token: string
  logprob: number
  bytes: number[] | ({ [x: string]: unknown } | null)
  top_logprobs: {
    token: string
    logprob: number
    bytes: number[] | ({ [x: string]: unknown } | null)
  }[]
}
type ServiceTier =
  | 'auto'
  | 'default'
  | 'flex'
  | 'scale'
  | 'priority'
  | 'fast'
  | ({ [x: string]: unknown } | null)
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
  categories: { [x: string]: boolean }
  category_scores: { [x: string]: number }
  category_applied_input_types: { [x: string]: ModerationInputType[] }
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
    logprobs:
      | {
          content: ChatCompletionTokenLogprob[] | ({ [x: string]: unknown } | null)
          refusal: ChatCompletionTokenLogprob[] | ({ [x: string]: unknown } | null)
        }
      | ({ [x: string]: unknown } | null)
  }[]
  created: number
  model: string
  metadata?: Metadata | undefined
  service_tier?: ServiceTier | undefined
  system_fingerprint?: string | undefined
  object: 'chat.completion'
  usage?: CompletionUsage | undefined
  moderation?: ChatCompletionModeration | ({ [x: string]: unknown } | null) | undefined
}
type ChatCompletionList = {
  object: 'list'
  data: CreateChatCompletionResponse[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
}
type PromptCacheTTLEnum = '30m'
type PromptCacheModeEnum = 'implicit' | 'explicit'
type PromptCacheOptionsParam = {
  ttl?: PromptCacheTTLEnum | undefined
  mode?: PromptCacheModeEnum | undefined
}
type PromptCacheBreakpointParam = { mode: 'explicit'; ttl?: '30m' | '12h' | undefined }
type ChatCompletionRequestMessageContentPartText = {
  type: 'text'
  text: string
  prompt_cache_breakpoint?: PromptCacheBreakpointParam | undefined
}
type ChatCompletionRequestDeveloperMessage = {
  content: string | ChatCompletionRequestMessageContentPartText[]
  role: 'developer'
  name?: string | undefined
}
type ChatCompletionRequestSystemMessageContentPart = ChatCompletionRequestMessageContentPartText
type ChatCompletionRequestSystemMessage = {
  content: string | ChatCompletionRequestSystemMessageContentPart[]
  role: 'system'
  name?: string | undefined
}
type ChatCompletionRequestMessageContentPartImage = {
  type: 'image_url'
  image_url: { url: string; detail?: 'auto' | 'low' | 'high' | 'original' | undefined }
  prompt_cache_breakpoint?: PromptCacheBreakpointParam | undefined
}
type ChatCompletionRequestMessageContentPartAudio = {
  type: 'input_audio'
  input_audio: { data: string; format: 'wav' | 'mp3' }
  prompt_cache_breakpoint?: PromptCacheBreakpointParam | undefined
}
type ChatCompletionRequestMessageContentPartFile = {
  type: 'file'
  file: {
    filename?: string | undefined
    file_data?: string | undefined
    file_id?: string | undefined
  }
  prompt_cache_breakpoint?: PromptCacheBreakpointParam | undefined
}
type ChatCompletionRequestUserMessageContentPart =
  | ChatCompletionRequestMessageContentPartText
  | ChatCompletionRequestMessageContentPartImage
  | ChatCompletionRequestMessageContentPartAudio
  | ChatCompletionRequestMessageContentPartFile
type ChatCompletionRequestUserMessage = {
  content: string | ChatCompletionRequestUserMessageContentPart[]
  role: 'user'
  name?: string | undefined
}
type ChatCompletionRequestMessageContentPartRefusal = { type: 'refusal'; refusal: string }
type ChatCompletionRequestAssistantMessageContentPart =
  | ChatCompletionRequestMessageContentPartText
  | ChatCompletionRequestMessageContentPartRefusal
type ChatCompletionRequestAssistantMessage = {
  content?:
    | string
    | ChatCompletionRequestAssistantMessageContentPart[]
    | ({ [x: string]: unknown } | null)
    | undefined
  refusal?: string | ({ [x: string]: unknown } | null) | undefined
  role: 'assistant'
  name?: string | undefined
  audio?: { id: string } | ({ [x: string]: unknown } | null) | undefined
  tool_calls?: ChatCompletionMessageToolCalls | undefined
  function_call?:
    | { arguments: string; name: string }
    | ({ [x: string]: unknown } | null)
    | undefined
}
type ChatCompletionRequestToolMessageContentPart = ChatCompletionRequestMessageContentPartText
type ChatCompletionRequestToolMessage = {
  role: 'tool'
  content: string | ChatCompletionRequestToolMessageContentPart[]
  tool_call_id: string
}
type ChatCompletionRequestFunctionMessage = {
  role: 'function'
  content: string | ({ [x: string]: unknown } | null)
  name: string
}
type ChatCompletionRequestMessage =
  | ChatCompletionRequestDeveloperMessage
  | ChatCompletionRequestSystemMessage
  | ChatCompletionRequestUserMessage
  | ChatCompletionRequestAssistantMessage
  | ChatCompletionRequestToolMessage
  | ChatCompletionRequestFunctionMessage
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
type ResponseModalities = ('text' | 'audio')[] | ({ [x: string]: unknown } | null)
type Verbosity = 'low' | 'medium' | 'high' | ({ [x: string]: unknown } | null)
type WebSearchLocation = {
  country?: string | undefined
  region?: string | undefined
  city?: string | undefined
  timezone?: string | undefined
}
type WebSearchContextSize = 'low' | 'medium' | 'high'
type VoiceIdsOrCustomVoice = VoiceIdsShared | { id: string }
type ModerationMode = 'score' | 'block'
type ModerationConfigParam = { mode: ModerationMode }
type ModerationPolicyParam = {
  input?: ModerationConfigParam | ({ [x: string]: unknown } | null) | undefined
  output?: ModerationConfigParam | ({ [x: string]: unknown } | null) | undefined
}
type ModerationParam = {
  model: string
  policy?: ModerationPolicyParam | ({ [x: string]: unknown } | null) | undefined
}
type StopConfiguration = string | string[] | ({ [x: string]: unknown } | null)
type PredictionContent = {
  type: 'content'
  content: string | ChatCompletionRequestMessageContentPartText[]
}
type ChatCompletionStreamOptions =
  | { include_usage?: boolean | undefined; include_obfuscation?: boolean | undefined }
  | ({ [x: string]: unknown } | null)
type ChatCompletionTool = { type: 'function'; function: FunctionObject }
type CustomToolChatCompletions = {
  type: 'custom'
  custom: {
    name: string
    description?: string | undefined
    format?:
      | { type: 'text' }
      | { type: 'grammar'; grammar: { definition: string; syntax: 'lark' | 'regex' } }
      | undefined
  }
}
type ChatCompletionAllowedTools = { mode: 'auto' | 'required'; tools: { [x: string]: unknown }[] }
type ChatCompletionAllowedToolsChoice = {
  type: 'allowed_tools'
  allowed_tools: ChatCompletionAllowedTools
}
type ChatCompletionNamedToolChoice = { type: 'function'; function: { name: string } }
type ChatCompletionNamedToolChoiceCustom = { type: 'custom'; custom: { name: string } }
type ChatCompletionToolChoiceOption =
  | 'none'
  | 'auto'
  | 'required'
  | ChatCompletionAllowedToolsChoice
  | ChatCompletionNamedToolChoice
  | ChatCompletionNamedToolChoiceCustom
type ParallelToolCalls = boolean
type ChatCompletionFunctionCallOption = { name: string }
type ChatCompletionFunctions = {
  description?: string | undefined
  name: string
  parameters?: FunctionParameters | undefined
}
type CreateChatCompletionRequest = {
  metadata?: Metadata | undefined
  top_logprobs?: (number | null) | undefined
  temperature?: number | ({ [x: string]: unknown } | null) | undefined
  top_p?: number | ({ [x: string]: unknown } | null) | undefined
  user?: (string | null) | undefined
  safety_identifier?: string | ({ [x: string]: unknown } | null) | undefined
  prompt_cache_key?: string | ({ [x: string]: unknown } | null) | undefined
  prompt_cache_retention?: 'in_memory' | '24h' | ({ [x: string]: unknown } | null) | undefined
  prompt_cache_options?: PromptCacheOptionsParam | undefined
  messages: ChatCompletionRequestMessage[]
  model: ModelIdsShared
  service_tier?: ServiceTier | undefined
  modalities?: ResponseModalities | undefined
  verbosity?: Verbosity | undefined
  reasoning_effort?: ReasoningEffort | undefined
  max_completion_tokens?: (number | null) | undefined
  frequency_penalty?: (number | null) | undefined
  presence_penalty?: (number | null) | undefined
  web_search_options?:
    | {
        user_location?: ({ type: 'approximate'; approximate: WebSearchLocation } | null) | undefined
        search_context_size?: WebSearchContextSize | undefined
      }
    | undefined
  response_format?:
    | ResponseFormatText
    | ResponseFormatJsonSchema
    | ResponseFormatJsonObject
    | undefined
  audio?:
    | ({
        voice: VoiceIdsOrCustomVoice
        format: 'wav' | 'aac' | 'mp3' | 'flac' | 'opus' | 'pcm16'
      } | null)
    | undefined
  store?: (boolean | null) | undefined
  moderation?: ModerationParam | ({ [x: string]: unknown } | null) | undefined
  stream?: (boolean | null) | undefined
  stop?: StopConfiguration | undefined
  logit_bias?: ({ [x: string]: number } | null) | undefined
  logprobs?: (boolean | null) | undefined
  max_tokens?: (number | null) | undefined
  n?: (number | null) | undefined
  prediction?: PredictionContent | ({ [x: string]: unknown } | null) | undefined
  seed?: (bigint | null) | undefined
  stream_options?: ChatCompletionStreamOptions | undefined
  tools?: (ChatCompletionTool | CustomToolChatCompletions)[] | undefined
  tool_choice?: ChatCompletionToolChoiceOption | undefined
  parallel_tool_calls?: ParallelToolCalls | undefined
  function_call?: 'none' | 'auto' | ChatCompletionFunctionCallOption | undefined
  functions?: ChatCompletionFunctions[] | undefined
}
type ChatCompletionMessageToolCallChunk = {
  index: number
  id?: string | undefined
  type?: 'function' | undefined
  function?: { name?: string | undefined; arguments?: string | undefined } | undefined
}
type ChatCompletionStreamResponseDelta = {
  audio?:
    | {
        id?: string | undefined
        expires_at?: number | undefined
        data?: string | undefined
        transcript?: string | undefined
      }
    | undefined
  content?: string | ({ [x: string]: unknown } | null) | undefined
  function_call?: { arguments?: string | undefined; name?: string | undefined } | undefined
  tool_calls?: ChatCompletionMessageToolCallChunk[] | undefined
  role?: 'developer' | 'system' | 'user' | 'assistant' | 'tool' | undefined
  refusal?: string | ({ [x: string]: unknown } | null) | undefined
}
type CreateChatCompletionStreamResponse = {
  id: string
  choices: {
    delta: ChatCompletionStreamResponseDelta
    logprobs?:
      | ({
          content: ChatCompletionTokenLogprob[] | null
          refusal: ChatCompletionTokenLogprob[] | null
        } | null)
      | undefined
    finish_reason?:
      | 'stop'
      | 'length'
      | 'tool_calls'
      | 'content_filter'
      | 'function_call'
      | null
      | undefined
    index: number
  }[]
  created: number
  model: string
  obfuscation?: string | undefined
  service_tier?: ServiceTier | undefined
  system_fingerprint?: string | undefined
  object: 'chat.completion.chunk'
  usage?: CompletionUsage | ({ [x: string]: unknown } | null) | undefined
  moderation?: ChatCompletionModeration | ({ [x: string]: unknown } | null) | undefined
}
type ChatCompletionDeleted = { object: 'chat.completion.deleted'; id: string; deleted: boolean }
type ChatCompletionMessageList = {
  object: 'list'
  data: {
    id: string
    role: 'user' | 'assistant' | 'tool' | 'system' | 'function' | 'developer'
    content: string | ({ [x: string]: unknown } | null)
    content_parts:
      | {
          type: 'text' | 'image_url' | 'input_audio' | 'file'
          text?: string | ({ [x: string]: unknown } | null) | undefined
          image_url?:
            | { url: string; detail?: string | ({ [x: string]: unknown } | null) | undefined }
            | ({ [x: string]: unknown } | null)
            | undefined
          input_audio?:
            | { data: string; format: string }
            | ({ [x: string]: unknown } | null)
            | undefined
          file?:
            | {
                file_data?: string | ({ [x: string]: unknown } | null) | undefined
                filename?: string | ({ [x: string]: unknown } | null) | undefined
                file_id?: string | ({ [x: string]: unknown } | null) | undefined
              }
            | ({ [x: string]: unknown } | null)
            | undefined
        }[]
      | ({ [x: string]: unknown } | null)
    name?: string | ({ [x: string]: unknown } | null) | undefined
  }[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
}
type CreateCompletionRequest = {
  model: string | 'gpt-3.5-turbo-instruct' | 'davinci-002' | 'babbage-002'
  prompt: string | string[] | number[] | number[][] | ({ [x: string]: unknown } | null)
  best_of?: (number | null) | undefined
  echo?: (boolean | null) | undefined
  frequency_penalty?: (number | null) | undefined
  logit_bias?: ({ [x: string]: number } | null) | undefined
  logprobs?: (number | null) | undefined
  max_tokens?: (number | null) | undefined
  n?: (number | null) | undefined
  presence_penalty?: (number | null) | undefined
  seed?: (bigint | null) | undefined
  stop?: StopConfiguration | undefined
  stream?: (boolean | null) | undefined
  stream_options?: ChatCompletionStreamOptions | undefined
  suffix?: (string | null) | undefined
  temperature?: (number | null) | undefined
  top_p?: (number | null) | undefined
  user?: string | undefined
}
type CreateCompletionResponse = {
  id: string
  choices: {
    finish_reason: 'stop' | 'length' | 'content_filter' | ({ [x: string]: unknown } | null)
    index: number
    logprobs:
      | {
          text_offset?: number[] | undefined
          token_logprobs?: number[] | undefined
          tokens?: string[] | undefined
          top_logprobs?: { [x: string]: number }[] | undefined
        }
      | ({ [x: string]: unknown } | null)
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
type ContainerNetworkPolicyDisabledParam = { type: 'disabled' }
type ContainerNetworkPolicyDomainSecretParam = { domain: string; name: string; value: string }
type ContainerNetworkPolicyAllowlistParam = {
  type: 'allowlist'
  allowed_domains: string[]
  domain_secrets?: ContainerNetworkPolicyDomainSecretParam[] | undefined
}
type CreateContainerBody = {
  name: string
  file_ids?: string[] | undefined
  expires_after?: { anchor: 'last_active_at'; minutes: number } | undefined
  skills?: (SkillReferenceParam | InlineSkillParam)[] | undefined
  memory_limit?: '1g' | '4g' | '16g' | '64g' | undefined
  network_policy?:
    | ContainerNetworkPolicyDisabledParam
    | ContainerNetworkPolicyAllowlistParam
    | undefined
}
type CreateContainerFileBody = { file_id?: string | undefined; file?: File | undefined }
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
type IncludeEnum =
  | 'file_search_call.results'
  | 'web_search_call.results'
  | 'web_search_call.action.sources'
  | 'message.input_image.image_url'
  | 'computer_call_output.output.image_url'
  | 'code_interpreter_call.outputs'
  | 'reasoning.encrypted_content'
  | 'message.output_text.logprobs'
type PromptCacheBreakpointConfig = { mode: 'explicit'; ttl?: '30m' | '12h' | undefined }
type InputTextContent = {
  type: 'input_text'
  text: string
  prompt_cache_breakpoint?: PromptCacheBreakpointConfig | undefined
}
type ImageDetail = 'low' | 'high' | 'auto' | 'original'
type InputImageContent = {
  type: 'input_image'
  image_url?: string | ({ [x: string]: unknown } | null) | undefined
  file_id?: string | ({ [x: string]: unknown } | null) | undefined
  detail: ImageDetail
  prompt_cache_breakpoint?: PromptCacheBreakpointConfig | undefined
}
type FileInputDetail = 'auto' | 'low' | 'high'
type InputFileContent = {
  type: 'input_file'
  file_id?: string | ({ [x: string]: unknown } | null) | undefined
  filename?: string | undefined
  file_data?: string | undefined
  prompt_cache_breakpoint?: PromptCacheBreakpointConfig | undefined
  file_url?: string | undefined
  detail?: FileInputDetail | undefined
}
type InputContent = InputTextContent | InputImageContent | InputFileContent
type InputMessageContentList = InputContent[]
type MessagePhase = 'commentary' | 'final_answer'
type EasyInputMessage = {
  role: 'user' | 'assistant' | 'system' | 'developer'
  content: string | InputMessageContentList
  phase?: MessagePhase | ({ [x: string]: unknown } | null) | undefined
  type?: 'message' | undefined
}
type InputMessage = {
  type?: 'message' | undefined
  role: 'user' | 'system' | 'developer'
  status?: 'in_progress' | 'completed' | 'incomplete' | undefined
  content: InputMessageContentList
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
type RefusalContent = { type: 'refusal'; refusal: string }
type OutputMessageContent = OutputTextContent | RefusalContent
type OutputMessage = {
  id: string
  type: 'message'
  role: 'assistant'
  content: OutputMessageContent[]
  phase?: MessagePhase | ({ [x: string]: unknown } | null) | undefined
  status: 'in_progress' | 'completed' | 'incomplete'
}
type VectorStoreFileAttributes =
  | { [x: string]: string | number | boolean }
  | ({ [x: string]: unknown } | null)
type FileSearchToolCall = {
  id: string
  type: 'file_search_call'
  status: 'in_progress' | 'searching' | 'completed' | 'incomplete' | 'failed'
  queries: string[]
  results?:
    | {
        file_id?: string | undefined
        text?: string | undefined
        filename?: string | undefined
        attributes?: VectorStoreFileAttributes | undefined
        score?: number | undefined
      }[]
    | ({ [x: string]: unknown } | null)
    | undefined
}
type ClickButtonType = 'left' | 'right' | 'wheel' | 'back' | 'forward'
type ClickParam = {
  type: 'click'
  button: ClickButtonType
  x: number
  y: number
  keys?: string[] | ({ [x: string]: unknown } | null) | undefined
}
type DoubleClickAction = {
  type: 'double_click'
  x: number
  y: number
  keys: string[] | ({ [x: string]: unknown } | null)
}
type CoordParam = { x: number; y: number }
type DragParam = {
  type: 'drag'
  path: CoordParam[]
  keys?: string[] | ({ [x: string]: unknown } | null) | undefined
}
type KeyPressAction = { type: 'keypress'; keys: string[] }
type MoveParam = {
  type: 'move'
  x: number
  y: number
  keys?: string[] | ({ [x: string]: unknown } | null) | undefined
}
type ScreenshotParam = { type: 'screenshot' }
type ScrollParam = {
  type: 'scroll'
  x: number
  y: number
  scroll_x: number
  scroll_y: number
  keys?: string[] | ({ [x: string]: unknown } | null) | undefined
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
  code?: string | ({ [x: string]: unknown } | null) | undefined
  message?: string | ({ [x: string]: unknown } | null) | undefined
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
type FunctionCallItemStatus = 'in_progress' | 'completed' | 'incomplete'
type ComputerCallOutputItemParam = {
  id?: string | ({ [x: string]: unknown } | null) | undefined
  call_id: string
  type: 'computer_call_output'
  output: ComputerScreenshotImage
  acknowledged_safety_checks?:
    | ComputerCallSafetyCheckParam[]
    | ({ [x: string]: unknown } | null)
    | undefined
  status?: FunctionCallItemStatus | ({ [x: string]: unknown } | null) | undefined
}
type WebSearchCallStatus = 'in_progress' | 'searching' | 'completed' | 'failed' | 'incomplete'
type WebSearchActionSearch = {
  type: 'search'
  query?: string | undefined
  queries?: string[] | undefined
  sources?: { type: 'url'; url: string }[] | undefined
}
type WebSearchActionOpenPage = {
  type: 'open_page'
  url?: string | ({ [x: string]: unknown } | null) | undefined
}
type WebSearchActionFind = {
  type: 'find_in_page'
  url?: string | ({ [x: string]: unknown } | null) | undefined
  pattern: string
}
type WebSearchToolCall = {
  id: string
  type: 'web_search_call'
  status: WebSearchCallStatus
  action?: WebSearchActionSearch | WebSearchActionOpenPage | WebSearchActionFind | undefined
}
type DirectToolCallCaller = { type: 'direct' }
type ProgramToolCallCaller = { type: 'program'; caller_id: string }
type ToolCallCaller = DirectToolCallCaller | ProgramToolCallCaller
type FunctionToolCall = {
  id?: string | undefined
  type: 'function_call'
  call_id: string
  caller?: ToolCallCaller | ({ [x: string]: unknown } | null) | undefined
  namespace?: string | undefined
  name: string
  arguments: string
  status?: 'in_progress' | 'completed' | 'incomplete' | undefined
  async?: boolean | undefined
}
type InputTextContentParam = {
  type: 'input_text'
  text: string
  prompt_cache_breakpoint?:
    | PromptCacheBreakpointParam
    | ({ [x: string]: unknown } | null)
    | undefined
}
type DetailEnum = 'low' | 'high' | 'auto' | 'original'
type InputImageContentParamAutoParam = {
  type: 'input_image'
  image_url?: string | ({ [x: string]: unknown } | null) | undefined
  file_id?: string | ({ [x: string]: unknown } | null) | undefined
  detail?: DetailEnum | ({ [x: string]: unknown } | null) | undefined
  prompt_cache_breakpoint?:
    | PromptCacheBreakpointParam
    | ({ [x: string]: unknown } | null)
    | undefined
}
type FileDetailEnum = 'auto' | 'low' | 'high'
type InputFileContentParam = {
  type: 'input_file'
  file_id?: string | ({ [x: string]: unknown } | null) | undefined
  filename?: string | ({ [x: string]: unknown } | null) | undefined
  file_data?: string | ({ [x: string]: unknown } | null) | undefined
  file_url?: string | ({ [x: string]: unknown } | null) | undefined
  detail?: FileDetailEnum | undefined
  prompt_cache_breakpoint?:
    | PromptCacheBreakpointParam
    | ({ [x: string]: unknown } | null)
    | undefined
}
type DirectToolCallCallerParam = { type: 'direct' }
type ProgramToolCallCallerParam = { type: 'program'; caller_id: string }
type ToolCallCallerParam = DirectToolCallCallerParam | ProgramToolCallCallerParam
type FunctionCallOutputItemParam = {
  id?: string | ({ [x: string]: unknown } | null) | undefined
  call_id?: string | ({ [x: string]: unknown } | null) | undefined
  type: 'function_call_output'
  output:
    | string
    | (InputTextContentParam | InputImageContentParamAutoParam | InputFileContentParam)[]
  name?: string | ({ [x: string]: unknown } | null) | undefined
  namespace?: string | ({ [x: string]: unknown } | null) | undefined
  caller?: ToolCallCallerParam | ({ [x: string]: unknown } | null) | undefined
  status?: FunctionCallItemStatus | ({ [x: string]: unknown } | null) | undefined
}
type ToolSearchExecutionType = 'server' | 'client'
type EmptyModelParam = { [x: string]: unknown }
type ToolSearchCallItemParam = {
  id?: string | ({ [x: string]: unknown } | null) | undefined
  call_id?: string | ({ [x: string]: unknown } | null) | undefined
  type: 'tool_search_call'
  execution?: ToolSearchExecutionType | undefined
  arguments: EmptyModelParam
  status?: FunctionCallItemStatus | ({ [x: string]: unknown } | null) | undefined
}
type CallableToolAllowedCaller = 'direct' | 'programmatic'
type FunctionTool = {
  type: 'function'
  name: string
  async?: boolean | undefined
  description?: string | ({ [x: string]: unknown } | null) | undefined
  parameters: { [x: string]: { [x: string]: unknown } } | ({ [x: string]: unknown } | null)
  output_schema?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  strict: boolean | ({ [x: string]: unknown } | null)
  defer_loading?: boolean | undefined
  allowed_callers?: CallableToolAllowedCaller[] | ({ [x: string]: unknown } | null) | undefined
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
  filters?: Filters | ({ [x: string]: unknown } | null) | undefined
}
type ComputerTool = { type: 'computer' }
type ComputerEnvironment = 'windows' | 'mac' | 'linux' | 'ubuntu' | 'browser'
type ComputerUsePreviewTool = {
  type: 'computer_use_preview'
  environment: ComputerEnvironment
  display_width: number
  display_height: number
}
type WebSearchApproximateLocation =
  | {
      type?: 'approximate' | undefined
      country?: string | ({ [x: string]: unknown } | null) | undefined
      region?: string | ({ [x: string]: unknown } | null) | undefined
      city?: string | ({ [x: string]: unknown } | null) | undefined
      timezone?: string | ({ [x: string]: unknown } | null) | undefined
    }
  | ({ [x: string]: unknown } | null)
type WebSearchTool = {
  type: 'web_search' | 'web_search_2025_08_26'
  external_web_access?: boolean | undefined
  filters?:
    | { allowed_domains?: string[] | ({ [x: string]: unknown } | null) | undefined }
    | ({ [x: string]: unknown } | null)
    | undefined
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
  headers?: { [x: string]: string } | ({ [x: string]: unknown } | null) | undefined
  allowed_tools?: string[] | MCPToolFilter | ({ [x: string]: unknown } | null) | undefined
  allowed_callers?: CallableToolAllowedCaller[] | ({ [x: string]: unknown } | null) | undefined
  require_approval?:
    | { always?: MCPToolFilter | undefined; never?: MCPToolFilter | undefined }
    | 'always'
    | 'never'
    | ({ [x: string]: unknown } | null)
    | undefined
  defer_loading?: boolean | undefined
}
type ContainerMemoryLimit = '1g' | '4g' | '16g' | '64g'
type AutoCodeInterpreterToolParam = {
  type: 'auto'
  file_ids?: string[] | undefined
  memory_limit?: ContainerMemoryLimit | ({ [x: string]: unknown } | null) | undefined
  network_policy?:
    | ContainerNetworkPolicyDisabledParam
    | ContainerNetworkPolicyAllowlistParam
    | undefined
}
type CodeInterpreterTool = {
  type: 'code_interpreter'
  container: string | AutoCodeInterpreterToolParam
  allowed_callers?: CallableToolAllowedCaller[] | ({ [x: string]: unknown } | null) | undefined
}
type ProgrammaticToolCallingParam = { type: 'programmatic_tool_calling' }
type ReasoningEffortEnum = 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | 'max'
type SvgReasoningParam = { effort?: ReasoningEffortEnum | undefined }
type SvgParam = {
  model?: string | undefined
  reasoning?: SvgReasoningParam | ({ [x: string]: unknown } | null) | undefined
}
type InputFidelity = 'high' | 'low'
type ImageGenActionEnum = 'generate' | 'edit' | 'auto'
type ImageGenTool = {
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
    | undefined
  complexity?: 'low' | 'medium' | 'high' | undefined
  quality?: 'low' | 'medium' | 'high' | 'xhigh' | 'max' | 'auto' | undefined
  size?: string | '1024x1024' | '1024x1536' | '1536x1024' | 'auto' | undefined
  output_format?: 'png' | 'webp' | 'jpeg' | 'gif' | 'svg' | undefined
  frame_count?: number | undefined
  frame_duration_ms?: number | undefined
  svg?: SvgParam | undefined
  output_compression?: number | undefined
  moderation?: 'auto' | 'low' | undefined
  background?: 'transparent' | 'opaque' | 'auto' | undefined
  input_fidelity?: InputFidelity | ({ [x: string]: unknown } | null) | undefined
  input_image_mask?: { image_url?: string | undefined; file_id?: string | undefined } | undefined
  partial_images?: number | undefined
  action?: ImageGenActionEnum | undefined
}
type LocalShellToolParam = { type: 'local_shell' }
type ContainerAutoParam = {
  type: 'container_auto'
  file_ids?: string[] | undefined
  memory_limit?: ContainerMemoryLimit | ({ [x: string]: unknown } | null) | undefined
  network_policy?:
    | ContainerNetworkPolicyDisabledParam
    | ContainerNetworkPolicyAllowlistParam
    | undefined
  skills?: (SkillReferenceParam | InlineSkillParam)[] | undefined
}
type LocalSkillParam = { name: string; description: string; path: string }
type LocalEnvironmentParam = { type: 'local'; skills?: LocalSkillParam[] | undefined }
type ContainerReferenceParam = { type: 'container_reference'; container_id: string }
type FunctionShellToolParam = {
  type: 'shell'
  environment?:
    | ContainerAutoParam
    | LocalEnvironmentParam
    | ContainerReferenceParam
    | ({ [x: string]: unknown } | null)
    | undefined
  allowed_callers?: CallableToolAllowedCaller[] | ({ [x: string]: unknown } | null) | undefined
}
type CustomTextFormatParam = { type: 'text' }
type GrammarSyntax1 = 'lark' | 'regex'
type CustomGrammarFormatParam = { type: 'grammar'; syntax: GrammarSyntax1; definition: string }
type CustomToolParam = {
  type: 'custom'
  name: string
  async?: boolean | undefined
  description?: string | undefined
  format?: CustomTextFormatParam | CustomGrammarFormatParam | undefined
  defer_loading?: boolean | undefined
  allowed_callers?: CallableToolAllowedCaller[] | ({ [x: string]: unknown } | null) | undefined
}
type ToolSearchOutputFunctionToolParam = {
  name: string
  description?: string | ({ [x: string]: unknown } | null) | undefined
  parameters?: EmptyModelParam | ({ [x: string]: unknown } | null) | undefined
  strict?: boolean | ({ [x: string]: unknown } | null) | undefined
  type: 'function'
  async?: boolean | undefined
  output_schema?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  defer_loading?: boolean | undefined
  allowed_callers?: CallableToolAllowedCaller[] | ({ [x: string]: unknown } | null) | undefined
}
type ToolSearchOutputNamespaceToolParam = {
  type: 'namespace'
  name: string
  description: string
  tools: (ToolSearchOutputFunctionToolParam | CustomToolParam)[]
}
type ToolSearchToolParam = {
  type: 'tool_search'
  execution?: ToolSearchExecutionType | undefined
  description?: string | ({ [x: string]: unknown } | null) | undefined
  parameters?: EmptyModelParam | ({ [x: string]: unknown } | null) | undefined
}
type ApproximateLocation = {
  type: 'approximate'
  country?: string | ({ [x: string]: unknown } | null) | undefined
  region?: string | ({ [x: string]: unknown } | null) | undefined
  city?: string | ({ [x: string]: unknown } | null) | undefined
  timezone?: string | ({ [x: string]: unknown } | null) | undefined
}
type SearchContextSize = 'low' | 'medium' | 'high'
type SearchContentType = 'text' | 'image'
type WebSearchPreviewTool = {
  type: 'web_search_preview' | 'web_search_preview_2025_03_11'
  user_location?: ApproximateLocation | ({ [x: string]: unknown } | null) | undefined
  search_context_size?: SearchContextSize | undefined
  search_content_types?: SearchContentType[] | undefined
}
type ApplyPatchToolParam = {
  type: 'apply_patch'
  allowed_callers?: CallableToolAllowedCaller[] | ({ [x: string]: unknown } | null) | undefined
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
  id?: string | ({ [x: string]: unknown } | null) | undefined
  call_id?: string | ({ [x: string]: unknown } | null) | undefined
  type: 'tool_search_output'
  execution?: ToolSearchExecutionType | undefined
  tools: ToolSearchOutputTool[]
  status?: FunctionCallItemStatus | ({ [x: string]: unknown } | null) | undefined
}
type FunctionToolParam = {
  name: string
  description?: string | ({ [x: string]: unknown } | null) | undefined
  parameters?: EmptyModelParam | ({ [x: string]: unknown } | null) | undefined
  strict?: boolean | ({ [x: string]: unknown } | null) | undefined
  type: 'function'
  async?: boolean | undefined
  output_schema?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  defer_loading?: boolean | undefined
  allowed_callers?: CallableToolAllowedCaller[] | ({ [x: string]: unknown } | null) | undefined
}
type NamespaceToolParam = {
  type: 'namespace'
  name: string
  description: string
  tools: (FunctionToolParam | CustomToolParam)[]
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
type AdditionalToolsItemParam = {
  id?: string | ({ [x: string]: unknown } | null) | undefined
  type: 'additional_tools'
  role: 'developer'
  tools: Tool[]
}
type TextResponseFormatJsonSchema = {
  type: 'json_schema'
  description?: string | undefined
  name: string
  schema: ResponseFormatJsonSchemaSchema
  strict?: boolean | ({ [x: string]: unknown } | null) | undefined
}
type ResponseConfigurationUpdateItemParam = {
  id?: string | ({ [x: string]: unknown } | null) | undefined
  type: 'configuration_update'
  reasoning?: { effort?: ReasoningEffort | undefined } | undefined
  text?: { format: ResponseFormatText | TextResponseFormatJsonSchema } | undefined
}
type SummaryTextContent = { type: 'summary_text'; text: string }
type ReasoningTextContent = { type: 'reasoning_text'; text: string }
type ReasoningItem = {
  type: 'reasoning'
  id: string
  encrypted_content?: string | ({ [x: string]: unknown } | null) | undefined
  summary: SummaryTextContent[]
  content?: ReasoningTextContent[] | undefined
  status?: 'in_progress' | 'completed' | 'incomplete' | undefined
}
type CompactionSummaryItemParam = {
  id?: string | ({ [x: string]: unknown } | null) | undefined
  type: 'compaction'
  encrypted_content: string
}
type ImageGenToolCallModerationDetails = {
  moderation_stage: 'input' | 'output' | 'unknown'
  categories: string[]
}
type ImageGenToolCallError = {
  code: string | ({ [x: string]: unknown } | null)
  type: string
  message: string
  param: string | ({ [x: string]: unknown } | null)
  moderation_details?: ImageGenToolCallModerationDetails | undefined
}
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
  result: string | ({ [x: string]: unknown } | null)
  error?: ImageGenToolCallError | undefined
  size?:
    | string
    | '1024x1024'
    | '1024x1536'
    | '1536x1024'
    | ({ [x: string]: unknown } | null)
    | undefined
  quality?:
    | 'low'
    | 'medium'
    | 'high'
    | 'xhigh'
    | 'max'
    | 'auto'
    | ({ [x: string]: unknown } | null)
    | undefined
  action?: ImageGenActionEnum | ({ [x: string]: unknown } | null) | undefined
  background?: ImageBackground | ({ [x: string]: unknown } | null) | undefined
  output_format?: ImageOutputFormat | ({ [x: string]: unknown } | null) | undefined
  svg_usage?: SvgUsage | undefined
  revised_prompt?: string | ({ [x: string]: unknown } | null) | undefined
}
type CodeInterpreterOutputLogs = { type: 'logs'; logs: string }
type CodeInterpreterOutputImage = { type: 'image'; url: string }
type CodeInterpreterToolCall = {
  type: 'code_interpreter_call'
  id: string
  status: 'in_progress' | 'completed' | 'incomplete' | 'interpreting' | 'failed'
  container_id: string
  code: string | ({ [x: string]: unknown } | null)
  outputs:
    | (CodeInterpreterOutputLogs | CodeInterpreterOutputImage)[]
    | ({ [x: string]: unknown } | null)
}
type LocalShellExecAction = {
  type: 'exec'
  command: string[]
  timeout_ms?: number | ({ [x: string]: unknown } | null) | undefined
  working_directory?: string | ({ [x: string]: unknown } | null) | undefined
  env: { [x: string]: string }
  user?: string | ({ [x: string]: unknown } | null) | undefined
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
  status?:
    | 'in_progress'
    | 'completed'
    | 'incomplete'
    | ({ [x: string]: unknown } | null)
    | undefined
}
type FunctionShellActionParam = {
  commands: string[]
  timeout_ms?: number | ({ [x: string]: unknown } | null) | undefined
  max_output_length?: number | ({ [x: string]: unknown } | null) | undefined
}
type FunctionShellCallItemStatus = 'in_progress' | 'completed' | 'incomplete'
type FunctionShellCallItemParam = {
  id?: string | ({ [x: string]: unknown } | null) | undefined
  call_id: string
  caller?: ToolCallCallerParam | ({ [x: string]: unknown } | null) | undefined
  type: 'shell_call'
  action: FunctionShellActionParam
  status?: FunctionShellCallItemStatus | ({ [x: string]: unknown } | null) | undefined
  environment?:
    | LocalEnvironmentParam
    | ContainerReferenceParam
    | ({ [x: string]: unknown } | null)
    | undefined
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
  id?: string | ({ [x: string]: unknown } | null) | undefined
  call_id: string
  caller?: ToolCallCallerParam | ({ [x: string]: unknown } | null) | undefined
  type: 'shell_call_output'
  output: FunctionShellCallOutputContentParam[]
  status?: FunctionShellCallItemStatus | ({ [x: string]: unknown } | null) | undefined
  max_output_length?: number | ({ [x: string]: unknown } | null) | undefined
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
  id?: string | ({ [x: string]: unknown } | null) | undefined
  call_id: string
  caller?: ToolCallCallerParam | ({ [x: string]: unknown } | null) | undefined
  status: ApplyPatchCallStatusParam
  operation: ApplyPatchOperationParam
}
type ApplyPatchCallOutputStatusParam = 'completed' | 'failed'
type ApplyPatchToolCallOutputItemParam = {
  type: 'apply_patch_call_output'
  id?: string | ({ [x: string]: unknown } | null) | undefined
  call_id: string
  caller?: ToolCallCallerParam | ({ [x: string]: unknown } | null) | undefined
  status: ApplyPatchCallOutputStatusParam
  output?: string | ({ [x: string]: unknown } | null) | undefined
}
type MCPListToolsTool = {
  name: string
  description?: string | ({ [x: string]: unknown } | null) | undefined
  input_schema: { [x: string]: unknown }
  annotations?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
}
type MCPListTools = {
  type: 'mcp_list_tools'
  id: string
  server_label: string
  tools: MCPListToolsTool[]
  error?: string | ({ [x: string]: unknown } | null) | undefined
}
type MCPApprovalRequest = {
  type: 'mcp_approval_request'
  id: string
  server_label: string
  name: string
  arguments: string
}
type MCPApprovalResponse = {
  type: 'mcp_approval_response'
  id?: string | ({ [x: string]: unknown } | null) | undefined
  approval_request_id: string
  approve: boolean
  reason?: string | ({ [x: string]: unknown } | null) | undefined
}
type MCPProtocolError = { type: 'mcp_protocol_error'; code: number; message: string }
type MCPToolExecutionError = { type: 'mcp_tool_execution_error'; content: { [x: string]: unknown } }
type HTTPError = { type: 'http_error'; code: number; message: string }
type MCPToolCallError = MCPProtocolError | MCPToolExecutionError | HTTPError
type MCPToolCallStatus = 'in_progress' | 'completed' | 'incomplete' | 'calling' | 'failed'
type MCPToolCall = {
  type: 'mcp_call'
  id: string
  server_label: string
  name: string
  arguments: string
  output?: string | ({ [x: string]: unknown } | null) | undefined
  error?: MCPToolCallError | ({ [x: string]: unknown } | null) | undefined
  status?: MCPToolCallStatus | undefined
  approval_request_id?: string | ({ [x: string]: unknown } | null) | undefined
}
type FunctionAndCustomToolCallOutput = InputTextContent | InputImageContent | InputFileContent
type CustomToolCallOutput = {
  type: 'custom_tool_call_output'
  id?: string | undefined
  call_id: string
  caller?: ToolCallCallerParam | ({ [x: string]: unknown } | null) | undefined
  output: string | FunctionAndCustomToolCallOutput[]
}
type CustomToolCall = {
  type: 'custom_tool_call'
  id?: string | undefined
  call_id: string
  caller?: ToolCallCaller | ({ [x: string]: unknown } | null) | undefined
  namespace?: string | undefined
  name: string
  input: string
  async?: boolean | undefined
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
type CompactionTriggerItemParam = {
  id?: string | ({ [x: string]: unknown } | null) | undefined
  type: 'compaction_trigger'
}
type ItemReferenceParam = {
  type?: 'item_reference' | ({ [x: string]: unknown } | null) | undefined
  id: string
}
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
type TextContent = { type: 'text'; text: string }
type ComputerScreenshotContent = {
  type: 'computer_screenshot'
  image_url: string | ({ [x: string]: unknown } | null)
  file_id: string | ({ [x: string]: unknown } | null)
  detail: ImageDetail
  prompt_cache_breakpoint?: PromptCacheBreakpointConfig | undefined
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
  phase?: MessagePhase_2 | ({ [x: string]: unknown } | null) | undefined
}
type FunctionCallStatus = 'in_progress' | 'completed' | 'incomplete'
type FunctionToolCallResource = {
  id: string
  type: 'function_call'
  call_id: string
  caller?: ToolCallCaller | ({ [x: string]: unknown } | null) | undefined
  namespace?: string | undefined
  name: string
  arguments: string
  status: FunctionCallStatus
  async?: boolean | undefined
  created_by?: string | undefined
}
type FunctionCallOutputStatusEnum = 'in_progress' | 'completed' | 'incomplete'
type FunctionToolCallOutputResource = {
  id: string
  type: 'function_call_output'
  call_id?: string | undefined
  name?: string | undefined
  namespace?: string | undefined
  caller?: ToolCallCallerParam | ({ [x: string]: unknown } | null) | undefined
  output: string | FunctionAndCustomToolCallOutput[]
  status: FunctionCallOutputStatusEnum
  created_by?: string | undefined
}
type ComputerCallOutputStatus = 'completed' | 'incomplete' | 'failed'
type ComputerToolCallOutputResource = {
  type: 'computer_call_output'
  id?: string | undefined
  call_id: string
  acknowledged_safety_checks?: ComputerCallSafetyCheckParam[] | undefined
  output: ComputerScreenshotImage
  status: ComputerCallOutputStatus
  created_by?: string | undefined
}
type ToolSearchCall = {
  type: 'tool_search_call'
  id: string
  call_id: string | ({ [x: string]: unknown } | null)
  execution: ToolSearchExecutionType
  arguments: { [x: string]: unknown }
  status: FunctionCallStatus
  created_by?: string | undefined
}
type ToolSearchOutput = {
  type: 'tool_search_output'
  id: string
  call_id: string | ({ [x: string]: unknown } | null)
  execution: ToolSearchExecutionType
  tools: Tool[]
  status: FunctionCallOutputStatusEnum
  created_by?: string | undefined
}
type AdditionalTools = { type: 'additional_tools'; id: string; role: MessageRole; tools: Tool[] }
type ResponseConfigurationUpdate = {
  id: string
  type: 'configuration_update'
  reasoning?: { effort?: ReasoningEffort | undefined } | undefined
  text?: { format: ResponseFormatText | TextResponseFormatJsonSchema } | undefined
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
type FunctionShellAction = {
  commands: string[]
  timeout_ms: number | ({ [x: string]: unknown } | null)
  max_output_length: number | ({ [x: string]: unknown } | null)
}
type FunctionShellCallStatus = 'in_progress' | 'completed' | 'incomplete'
type LocalEnvironmentResource = { type: 'local' }
type ContainerReferenceResource = { type: 'container_reference'; container_id: string }
type FunctionShellCall = {
  type: 'shell_call'
  id: string
  call_id: string
  caller?: ToolCallCaller | ({ [x: string]: unknown } | null) | undefined
  action: FunctionShellAction
  status: FunctionShellCallStatus
  environment:
    | LocalEnvironmentResource
    | ContainerReferenceResource
    | ({ [x: string]: unknown } | null)
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
  caller?: ToolCallCaller | ({ [x: string]: unknown } | null) | undefined
  status: FunctionShellCallOutputStatusEnum
  output: FunctionShellCallOutputContent[]
  max_output_length: number | ({ [x: string]: unknown } | null)
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
  caller?: ToolCallCaller | ({ [x: string]: unknown } | null) | undefined
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
  caller?: ToolCallCaller | ({ [x: string]: unknown } | null) | undefined
  status: ApplyPatchCallOutputStatus
  output?: string | ({ [x: string]: unknown } | null) | undefined
  created_by?: string | undefined
}
type MCPApprovalResponseResource = {
  type: 'mcp_approval_response'
  id: string
  approval_request_id: string
  approve: boolean
  reason?: string | ({ [x: string]: unknown } | null) | undefined
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
  metadata: { [x: string]: string }
  created_at: number
}
type CreateEmbeddingRequest = {
  input: string | string[] | number[] | number[][]
  model: string | 'text-embedding-ada-002' | 'text-embedding-3-small' | 'text-embedding-3-large'
  encoding_format?: 'float' | 'base64' | undefined
  dimensions?: number | undefined
  user?: string | undefined
}
type Embedding = { index: number; embedding: number[] | string; object: 'embedding' }
type CreateEmbeddingResponse = {
  data: Embedding[]
  model: string
  object: 'list'
  usage: { prompt_tokens: number; total_tokens: number }
}
type EvalCustomDataSourceConfig = { type: 'custom'; schema: { [x: string]: unknown } }
type EvalLogsDataSourceConfig = {
  type: 'logs'
  metadata?: Metadata | undefined
  schema: { [x: string]: unknown }
}
type EvalStoredCompletionsDataSourceConfig = {
  type: 'stored_completions'
  metadata?: Metadata | undefined
  schema: { [x: string]: unknown }
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
type EvalGraderLabelModel = {
  type: 'label_model'
  name: string
  model: string
  input: EvalItem[]
  labels: string[]
  passing_labels: string[]
}
type EvalGraderStringCheck = {
  type: 'string_check'
  name: string
  input: string
  reference: string
  operation: 'eq' | 'ne' | 'like' | 'ilike'
}
type EvalGraderTextSimilarity = {
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
  pass_threshold: number
}
type EvalGraderPython = {
  type: 'python'
  name: string
  source: string
  image_tag?: string | undefined
  pass_threshold?: number | undefined
}
type EvalGraderScoreModel = {
  type: 'score_model'
  name: string
  model: string
  sampling_params?:
    | {
        seed?: number | ({ [x: string]: unknown } | null) | undefined
        top_p?: number | ({ [x: string]: unknown } | null) | undefined
        temperature?: number | ({ [x: string]: unknown } | null) | undefined
        max_completions_tokens?: number | ({ [x: string]: unknown } | null) | undefined
        reasoning_effort?: ReasoningEffort | undefined
      }
    | undefined
  input: EvalItem[]
  range?: number[] | undefined
  pass_threshold?: number | undefined
}
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
type CreateEvalCustomDataSourceConfig = {
  type: 'custom'
  item_schema: { [x: string]: unknown }
  include_sample_schema?: boolean | undefined
}
type CreateEvalLogsDataSourceConfig = {
  type: 'logs'
  metadata?: { [x: string]: unknown } | undefined
}
type CreateEvalStoredCompletionsDataSourceConfig = {
  type: 'stored_completions'
  metadata?: { [x: string]: unknown } | undefined
}
type CreateEvalItem = { role: string; content: string } | EvalItem
type CreateEvalLabelModelGrader = {
  type: 'label_model'
  name: string
  model: string
  input: CreateEvalItem[]
  labels: string[]
  passing_labels: string[]
}
type CreateEvalRequest = {
  name?: string | undefined
  metadata?: Metadata | undefined
  data_source_config:
    | CreateEvalCustomDataSourceConfig
    | CreateEvalLogsDataSourceConfig
    | CreateEvalStoredCompletionsDataSourceConfig
  testing_criteria: (
    | CreateEvalLabelModelGrader
    | EvalGraderStringCheck
    | EvalGraderTextSimilarity
    | EvalGraderPython
    | EvalGraderScoreModel
  )[]
}
type EvalJsonlFileContentSource = {
  type: 'file_content'
  content: { item: { [x: string]: unknown }; sample?: { [x: string]: unknown } | undefined }[]
}
type EvalJsonlFileIdSource = { type: 'file_id'; id: string }
type CreateEvalJsonlRunDataSource = {
  type: 'jsonl'
  source: EvalJsonlFileContentSource | EvalJsonlFileIdSource
}
type EvalStoredCompletionsSource = {
  type: 'stored_completions'
  metadata?: Metadata | undefined
  model?: string | ({ [x: string]: unknown } | null) | undefined
  created_after?: number | ({ [x: string]: unknown } | null) | undefined
  created_before?: number | ({ [x: string]: unknown } | null) | undefined
  limit?: number | ({ [x: string]: unknown } | null) | undefined
}
type CreateEvalCompletionsRunDataSource = {
  type: 'completions'
  input_messages?:
    | { type: 'template'; template: (EasyInputMessage | EvalItem)[] }
    | { type: 'item_reference'; item_reference: string }
    | undefined
  sampling_params?:
    | {
        reasoning_effort?: ReasoningEffort | undefined
        temperature?: number | undefined
        max_completion_tokens?: number | undefined
        top_p?: number | undefined
        seed?: number | undefined
        response_format?:
          | ResponseFormatText
          | ResponseFormatJsonSchema
          | ResponseFormatJsonObject
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
  metadata?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
  model?: string | ({ [x: string]: unknown } | null) | undefined
  instructions_search?: string | ({ [x: string]: unknown } | null) | undefined
  created_after?: number | ({ [x: string]: unknown } | null) | undefined
  created_before?: number | ({ [x: string]: unknown } | null) | undefined
  reasoning_effort?: ReasoningEffort | ({ [x: string]: unknown } | null) | undefined
  temperature?: number | ({ [x: string]: unknown } | null) | undefined
  top_p?: number | ({ [x: string]: unknown } | null) | undefined
  users?: string[] | ({ [x: string]: unknown } | null) | undefined
  tools?: string[] | ({ [x: string]: unknown } | null) | undefined
}
type CreateEvalResponsesRunDataSource = {
  type: 'responses'
  input_messages?:
    | { type: 'template'; template: ({ role: string; content: string } | EvalItem)[] }
    | { type: 'item_reference'; item_reference: string }
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
  error: EvalApiError | ({ [x: string]: unknown } | null)
}
type EvalRunList = {
  object: 'list'
  data: EvalRun[]
  first_id: string
  last_id: string
  has_more: boolean
}
type CreateEvalRunRequest = {
  name?: string | undefined
  metadata?: Metadata | undefined
  data_source:
    | CreateEvalJsonlRunDataSource
    | CreateEvalCompletionsRunDataSource
    | CreateEvalResponsesRunDataSource
}
type EvalRunOutputItemResult = {
  name: string
  type?: string | undefined
  score: number
  passed: boolean
  sample?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
}
type EvalRunOutputItem = {
  object: 'eval.run.output_item'
  id: string
  run_id: string
  eval_id: string
  created_at: number
  status: string
  datasource_item_id: number
  datasource_item: { [x: string]: unknown }
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
    error: EvalApiError | ({ [x: string]: unknown } | null)
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
type FileExpirationAfter = { anchor: 'created_at'; seconds: bigint }
type CreateFileRequest = {
  file: File
  purpose: 'assistants' | 'batch' | 'fine-tune' | 'vision' | 'user_data' | 'evals'
  expires_after?: FileExpirationAfter | undefined
}
type DeleteFileResponse = { id: string; object: 'file'; deleted: boolean }
type GraderStringCheck = {
  type: 'string_check'
  name: string
  input: string
  reference: string
  operation: 'eq' | 'ne' | 'like' | 'ilike'
}
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
type GraderPython = { type: 'python'; name: string; source: string; image_tag?: string | undefined }
type GraderScoreModel = {
  type: 'score_model'
  name: string
  model: string
  sampling_params?:
    | {
        seed?: number | ({ [x: string]: unknown } | null) | undefined
        top_p?: number | ({ [x: string]: unknown } | null) | undefined
        temperature?: number | ({ [x: string]: unknown } | null) | undefined
        max_completions_tokens?: number | ({ [x: string]: unknown } | null) | undefined
        reasoning_effort?: ReasoningEffort | undefined
      }
    | undefined
  input: EvalItem[]
  range?: number[] | undefined
}
type GraderLabelModel = {
  type: 'label_model'
  name: string
  model: string
  input: EvalItem[]
  labels: string[]
  passing_labels: string[]
}
type GraderMulti = {
  type: 'multi'
  name: string
  graders: {
    [x: string]:
      | GraderStringCheck
      | GraderTextSimilarity
      | GraderPython
      | GraderScoreModel
      | GraderLabelModel
  }
  calculate_output: string
}
type RunGraderRequest = {
  grader: GraderStringCheck | GraderTextSimilarity | GraderPython | GraderScoreModel | GraderMulti
  item?: { [x: string]: unknown } | undefined
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
      python_grader_server_error_type: string | ({ [x: string]: unknown } | null)
      python_grader_runtime_error: boolean
      python_grader_runtime_error_details: string | ({ [x: string]: unknown } | null)
      model_grader_server_error: boolean
      model_grader_refusal_error: boolean
      model_grader_parse_error: boolean
      model_grader_server_error_details: string | ({ [x: string]: unknown } | null)
    }
    execution_time: number
    scores: { [x: string]: { [x: string]: unknown } }
    token_usage:
      | {
          prompt_tokens: number
          total_tokens: number
          completion_tokens?: number | ({ [x: string]: unknown } | null) | undefined
          cached_tokens?: number | ({ [x: string]: unknown } | null) | undefined
        }
      | ({ [x: string]: unknown } | null)
    sampled_model_name: string | ({ [x: string]: unknown } | null)
  }
  sub_rewards: { [x: string]: { [x: string]: unknown } }
  model_grader_token_usage_per_model: { [x: string]: { [x: string]: unknown } }
}
type ValidateGraderRequest = {
  grader: GraderStringCheck | GraderTextSimilarity | GraderPython | GraderScoreModel | GraderMulti
}
type ValidateGraderResponse = {
  grader?:
    | GraderStringCheck
    | GraderTextSimilarity
    | GraderPython
    | GraderScoreModel
    | GraderMulti
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
  first_id?: string | ({ [x: string]: unknown } | null) | undefined
  last_id?: string | ({ [x: string]: unknown } | null) | undefined
  has_more: boolean
}
type CreateFineTuningCheckpointPermissionRequest = { project_ids: string[] }
type DeleteFineTuningCheckpointPermissionResponse = {
  id: string
  object: 'checkpoint.permission'
  deleted: boolean
}
type FineTuneSupervisedHyperparameters = {
  batch_size?: 'auto' | number | undefined
  learning_rate_multiplier?: 'auto' | number | undefined
  n_epochs?: 'auto' | number | undefined
}
type FineTuneSupervisedMethod = { hyperparameters?: FineTuneSupervisedHyperparameters | undefined }
type FineTuneDPOHyperparameters = {
  beta?: 'auto' | number | undefined
  batch_size?: 'auto' | number | undefined
  learning_rate_multiplier?: 'auto' | number | undefined
  n_epochs?: 'auto' | number | undefined
}
type FineTuneDPOMethod = { hyperparameters?: FineTuneDPOHyperparameters | undefined }
type FineTuneReinforcementHyperparameters = {
  batch_size?: 'auto' | number | undefined
  learning_rate_multiplier?: 'auto' | number | undefined
  n_epochs?: 'auto' | number | undefined
  reasoning_effort?: 'default' | 'low' | 'medium' | 'high' | undefined
  compute_multiplier?: 'auto' | number | undefined
  eval_interval?: 'auto' | number | undefined
  eval_samples?: 'auto' | number | undefined
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
type CreateFineTuningJobRequest = {
  model:
    | string
    | 'gpt-4.1-mini-2025-04-14'
    | 'babbage-002'
    | 'davinci-002'
    | 'gpt-3.5-turbo'
    | 'gpt-4o-mini'
  training_file: string
  hyperparameters?:
    | {
        batch_size?: 'auto' | number | undefined
        learning_rate_multiplier?: 'auto' | number | undefined
        n_epochs?: 'auto' | number | undefined
      }
    | undefined
  suffix?: (string | null) | undefined
  validation_file?: (string | null) | undefined
  integrations?:
    | (
        | {
            type: 'wandb'
            wandb: {
              project: string
              name?: (string | null) | undefined
              entity?: (string | null) | undefined
              tags?: string[] | undefined
            }
          }[]
        | null
      )
    | undefined
  seed?: (number | null) | undefined
  method?: FineTuneMethod | undefined
  metadata?: Metadata | undefined
}
type FineTuningIntegration = {
  type: 'wandb'
  wandb: {
    project: string
    name?: string | ({ [x: string]: unknown } | null) | undefined
    entity?: string | ({ [x: string]: unknown } | null) | undefined
    tags?: string[] | undefined
  }
}
type FineTuningJob = {
  id: string
  created_at: number
  error:
    | { code: string; message: string; param: string | ({ [x: string]: unknown } | null) }
    | ({ [x: string]: unknown } | null)
    | { [x: string]: unknown }
  fine_tuned_model: string | ({ [x: string]: unknown } | null)
  finished_at: number | ({ [x: string]: unknown } | null)
  hyperparameters?:
    | ({
        batch_size?: 'auto' | number | ({ [x: string]: unknown } | null) | undefined
        learning_rate_multiplier?: 'auto' | number | undefined
        n_epochs?: 'auto' | number | undefined
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
  trained_tokens: number | ({ [x: string]: unknown } | null)
  training_file: string
  validation_file: string | ({ [x: string]: unknown } | null)
  integrations?: FineTuningIntegration[] | ({ [x: string]: unknown } | null) | undefined
  seed: number | null
  estimated_finish?: number | ({ [x: string]: unknown } | null) | undefined
  method?: FineTuneMethod | ({ [x: string]: unknown } | null) | undefined
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
  first_id?: string | ({ [x: string]: unknown } | null) | undefined
  last_id?: string | ({ [x: string]: unknown } | null) | undefined
  has_more: boolean
}
type FineTuningJobEvent = {
  object: 'fine_tuning.job.event'
  id: string
  created_at: number
  level: 'info' | 'warn' | 'error'
  message: string
  type?: 'message' | 'metrics' | undefined
  data?: ({ [x: string]: unknown } | null) | undefined
}
type ListFineTuningJobEventsResponse = {
  data: FineTuningJobEvent[]
  object: 'list'
  has_more: boolean
}
type FrameCount = number | null
type FrameDurationMs = number | null
type Complexity = 'low' | 'medium' | 'high' | null
type ImageRefParam = { [x: string]: unknown } | { [x: string]: unknown }
type ImagesApiOutputFormat = 'png' | 'webp' | 'jpeg' | 'gif' | 'svg'
type PartialImages = number | ({ [x: string]: unknown } | null)
type EditImageBodyJsonParam = {
  frame_count?: FrameCount | undefined
  frame_duration_ms?: FrameDurationMs | undefined
  complexity?: Complexity | undefined
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
    | ({ [x: string]: unknown } | null)
    | undefined
  images: ImageRefParam[]
  mask?: ImageRefParam | undefined
  markup?: ImageRefParam | undefined
  prompt: string
  n?: number | ({ [x: string]: unknown } | null) | undefined
  quality?:
    | 'low'
    | 'medium'
    | 'high'
    | 'xhigh'
    | 'max'
    | 'auto'
    | ({ [x: string]: unknown } | null)
    | undefined
  input_fidelity?: 'high' | 'low' | ({ [x: string]: unknown } | null) | undefined
  size?:
    | string
    | 'auto'
    | '1024x1024'
    | '1536x1024'
    | '1024x1536'
    | ({ [x: string]: unknown } | null)
    | undefined
  safety_identifier?: (string | null) | undefined
  user?: string | undefined
  output_format?: ImagesApiOutputFormat | ({ [x: string]: unknown } | null) | undefined
  svg?: SvgParam | ({ [x: string]: unknown } | null) | undefined
  output_compression?: number | ({ [x: string]: unknown } | null) | undefined
  moderation?: 'low' | 'auto' | ({ [x: string]: unknown } | null) | undefined
  background?: 'transparent' | 'opaque' | 'auto' | ({ [x: string]: unknown } | null) | undefined
  stream?: boolean | ({ [x: string]: unknown } | null) | undefined
  partial_images?: PartialImages | undefined
}
type Markup = File
type CreateImageEditRequest = {
  frame_count?: FrameCount | undefined
  frame_duration_ms?: FrameDurationMs | undefined
  complexity?: Complexity | undefined
  image: File | File[]
  prompt: string
  mask?: File | undefined
  markup?: Markup | undefined
  background?: 'transparent' | 'opaque' | 'auto' | ({ [x: string]: unknown } | null) | undefined
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
  n?: (number | null) | undefined
  size?:
    | string
    | '1024x1024'
    | '1536x1024'
    | '1024x1536'
    | 'auto'
    | '256x256'
    | '512x512'
    | ({ [x: string]: unknown } | null)
    | undefined
  response_format?: 'url' | 'b64_json' | null | undefined
  output_format?: ImagesApiOutputFormat | ({ [x: string]: unknown } | null) | undefined
  svg?: SvgParam | ({ [x: string]: unknown } | null) | undefined
  output_compression?: (number | null) | undefined
  safety_identifier?: (string | null) | undefined
  user?: string | undefined
  input_fidelity?: InputFidelity | ({ [x: string]: unknown } | null) | undefined
  stream?: (boolean | null) | undefined
  partial_images?: PartialImages | undefined
  quality?:
    | 'low'
    | 'medium'
    | 'high'
    | 'xhigh'
    | 'max'
    | 'auto'
    | 'standard'
    | ({ [x: string]: unknown } | null)
    | undefined
}
type Image = {
  b64_json?: string | undefined
  url?: string | undefined
  revised_prompt?: string | undefined
}
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
  size?: string | '1024x1024' | '1024x1536' | '1536x1024' | undefined
  quality?: 'low' | 'medium' | 'high' | 'xhigh' | 'max' | undefined
  usage?: ImageGenUsage | undefined
  svg_usage?: SvgUsage | undefined
}
type ImageEditPartialImageEvent = {
  type: 'image_edit.partial_image'
  b64_json: string
  created_at: number
  size: string | '1024x1024' | '1024x1536' | '1536x1024' | 'auto'
  quality: 'low' | 'medium' | 'high' | 'xhigh' | 'max' | 'auto'
  background: 'transparent' | 'opaque' | 'auto'
  output_format: 'png' | 'webp' | 'jpeg'
  partial_image_index: number
}
type ImagesUsage = {
  total_tokens: number
  input_tokens: number
  output_tokens: number
  input_tokens_details: { text_tokens: number; image_tokens: number }
}
type ImageEditCompletedEvent = {
  safety_identifier?: (string | null) | undefined
  type: 'image_edit.completed'
  b64_json: string
  created_at: number
  size: string | '1024x1024' | '1024x1536' | '1536x1024' | 'auto'
  quality: 'low' | 'medium' | 'high' | 'xhigh' | 'max' | 'auto'
  background: 'transparent' | 'opaque' | 'auto'
  output_format: 'png' | 'webp' | 'jpeg'
  usage: ImagesUsage
}
type ImageEditStreamEvent = ImageEditPartialImageEvent | ImageEditCompletedEvent
type Svg = {
  model: string
  reasoning?:
    | ({ effort?: ReasoningEffortEnum | ({ [x: string]: unknown } | null) | undefined } | null)
    | undefined
} | null
type CreateImageRequest = {
  frame_count?: FrameCount | undefined
  frame_duration_ms?: FrameDurationMs | undefined
  complexity?: Complexity | undefined
  svg?: Svg | undefined
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
  n?: (number | null) | undefined
  quality?:
    | 'low'
    | 'medium'
    | 'high'
    | 'xhigh'
    | 'max'
    | 'auto'
    | 'standard'
    | 'hd'
    | ({ [x: string]: unknown } | null)
    | undefined
  response_format?: 'url' | 'b64_json' | null | undefined
  output_format?: ImagesApiOutputFormat | ({ [x: string]: unknown } | null) | undefined
  output_compression?: (number | null) | undefined
  stream?: (boolean | null) | undefined
  partial_images?: PartialImages | undefined
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
    | ({ [x: string]: unknown } | null)
    | undefined
  moderation?: 'low' | 'auto' | ({ [x: string]: unknown } | null) | undefined
  background?: 'transparent' | 'opaque' | 'auto' | ({ [x: string]: unknown } | null) | undefined
  style?: 'vivid' | 'natural' | null | undefined
  safety_identifier?: (string | null) | undefined
  user?: string | undefined
}
type ImageGenPartialImageEvent = {
  type: 'image_generation.partial_image'
  b64_json: string
  created_at: number
  size: string | '1024x1024' | '1024x1536' | '1536x1024' | 'auto'
  quality: 'low' | 'medium' | 'high' | 'xhigh' | 'max' | 'auto'
  background: 'transparent' | 'opaque' | 'auto'
  output_format: 'png' | 'webp' | 'jpeg'
  partial_image_index: number
}
type ImageGenCompletedEvent = {
  safety_identifier?: (string | null) | undefined
  type: 'image_generation.completed'
  b64_json: string
  created_at: number
  size: string | '1024x1024' | '1024x1536' | '1536x1024' | 'auto'
  quality: 'low' | 'medium' | 'high' | 'xhigh' | 'max' | 'auto'
  background: 'transparent' | 'opaque' | 'auto'
  output_format: 'png' | 'webp' | 'jpeg'
  usage: ImagesUsage
}
type ImageGenStreamEvent = ImageGenPartialImageEvent | ImageGenCompletedEvent
type CreateImageVariationRequest = {
  image: File
  model?: string | 'dall-e-2' | ({ [x: string]: unknown } | null) | undefined
  n?: (number | null) | undefined
  response_format?: 'url' | 'b64_json' | null | undefined
  size?: '256x256' | '512x512' | '1024x1024' | null | undefined
  user?: string | undefined
}
type ModelIdsLive = string | 'gpt-live-1' | 'gpt-live-1.1'
type SafetyIdentifier = string | ({ [x: string]: unknown } | null)
type Instructions = string | ({ [x: string]: unknown } | null)
type LiveCustomVoiceParam = { id: string }
type LiveInitialSessionAudioOutputParam = {
  voice?:
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
    | LiveCustomVoiceParam
    | undefined
}
type LiveMediaSessionAudioParam = { output?: LiveInitialSessionAudioOutputParam | undefined }
type LiveClientDelegationParam = { acknowledgement_delay_ms?: number | undefined; type: 'client' }
type LiveResponsesServiceTier =
  | 'auto'
  | 'default'
  | 'fast_tier_temp_pilot'
  | 'flex'
  | 'priority'
  | 'ultrafast'
type LiveReasoningEffort = 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh'
type LiveReasoningSummary = 'concise' | 'detailed' | 'auto'
type LiveDelegationReasoningInputParam = {
  effort?: LiveReasoningEffort | ({ [x: string]: unknown } | null) | undefined
  summary?: LiveReasoningSummary | ({ [x: string]: unknown } | null) | undefined
}
type LiveTextVerbosity = 'low' | 'medium' | 'high'
type LiveDelegationTextInputParam = {
  verbosity?: LiveTextVerbosity | ({ [x: string]: unknown } | null) | undefined
}
type LiveFunctionToolInputParam = {
  type: 'function'
  name: string
  description?: string | ({ [x: string]: unknown } | null) | undefined
  parameters?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  strict?: boolean | ({ [x: string]: unknown } | null) | undefined
}
type LiveWebSearchToolInputParam = { type: 'web_search' }
type LiveFileSearchToolInputParam = { type: 'file_search' }
type LiveCodeInterpreterToolInputParam = { type: 'code_interpreter' }
type LiveContainerMemoryLimit = '1g' | '4g' | '16g' | '64g'
type LiveContainerNetworkPolicyDisabledParam = { type: 'disabled' }
type LiveHostedShellNetworkPolicyAllowlistParam = { type: 'allowlist'; allowed_domains: string[] }
type LiveSkillReferenceParam = {
  type: 'skill_reference'
  skill_id: string
  version?: string | ({ [x: string]: unknown } | null) | undefined
}
type LiveInlineSkillSourceParam = { type: 'base64'; media_type: 'application/zip'; data: string }
type LiveInlineSkillParam = {
  type: 'inline'
  name: string
  description: string
  source: LiveInlineSkillSourceParam
}
type LiveHostedShellContainerAutoParam = {
  type: 'container_auto'
  file_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
  memory_limit?: LiveContainerMemoryLimit | ({ [x: string]: unknown } | null) | undefined
  network_policy?:
    | LiveContainerNetworkPolicyDisabledParam
    | LiveHostedShellNetworkPolicyAllowlistParam
    | ({ [x: string]: unknown } | null)
    | undefined
  skills?:
    | (LiveSkillReferenceParam | LiveInlineSkillParam)[]
    | ({ [x: string]: unknown } | null)
    | undefined
}
type LiveContainerReferenceParam = { type: 'container_reference'; container_id: string }
type LiveLocalSkillParam = { name: string; description: string; path: string }
type LiveLocalEnvironmentParam = {
  type: 'local'
  skills?: LiveLocalSkillParam[] | ({ [x: string]: unknown } | null) | undefined
}
type LiveHostedShellToolInputParam = {
  type: 'shell'
  environment?:
    | LiveHostedShellContainerAutoParam
    | LiveContainerReferenceParam
    | LiveLocalEnvironmentParam
    | ({ [x: string]: unknown } | null)
    | undefined
}
type LiveImageGenerationToolInputParam = { type: 'image_generation' }
type LiveMCPToolFilterParam = {
  tool_names?: string[] | ({ [x: string]: unknown } | null) | undefined
  read_only?: boolean | ({ [x: string]: unknown } | null) | undefined
}
type LiveMCPRequireApprovalFilterParam = {
  always?: LiveMCPToolFilterParam | ({ [x: string]: unknown } | null) | undefined
  never?: LiveMCPToolFilterParam | ({ [x: string]: unknown } | null) | undefined
}
type LiveMCPRequireApprovalApiEnum = 'always' | 'never'
type LiveCallableToolAllowedCaller = 'direct' | 'programmatic'
type LiveMCPToolInputParam = {
  type: 'mcp'
  server_label?: string | undefined
  server_url?: string | ({ [x: string]: unknown } | null) | undefined
  server_description?: string | ({ [x: string]: unknown } | null) | undefined
  authorization?: string | ({ [x: string]: unknown } | null) | undefined
  headers?: { [x: string]: string } | ({ [x: string]: unknown } | null) | undefined
  allowed_tools?: string[] | LiveMCPToolFilterParam | ({ [x: string]: unknown } | null) | undefined
  require_approval?:
    | LiveMCPRequireApprovalFilterParam
    | LiveMCPRequireApprovalApiEnum
    | ({ [x: string]: unknown } | null)
    | undefined
  connector_id?: string | ({ [x: string]: unknown } | null) | undefined
  tunnel_id?: string | ({ [x: string]: unknown } | null) | undefined
  allowed_callers?: LiveCallableToolAllowedCaller[] | ({ [x: string]: unknown } | null) | undefined
  defer_loading?: boolean | ({ [x: string]: unknown } | null) | undefined
}
type LiveCustomToolInputParam = { type: 'custom' }
type LiveNamespaceToolInputParam = { type: 'namespace' }
type LiveToolSearchToolInputParam = { type: 'tool_search' }
type LiveProgrammaticToolInputParam = { type: 'programmatic_tool_calling' }
type LiveComputerToolInputParam = { type: 'computer' }
type LiveApplyPatchToolInputParam = { type: 'apply_patch' }
type LiveToolChoiceEnum = 'auto' | 'none' | 'required'
type LiveFunctionToolChoiceParam = { type: 'function'; name: string }
type LiveMCPToolChoiceParam = {
  type: 'mcp'
  server_label: string
  name?: string | ({ [x: string]: unknown } | null) | undefined
}
type LiveSpecificFileSearchParam = { type: 'file_search' }
type LiveSpecificWebSearchParam = { type: 'web_search' }
type LiveSpecificWebSearchPreviewParam = { type: 'web_search_preview' }
type LiveSpecificImageGenParam = { type: 'image_generation' }
type LiveSpecificComputerParam = { type: 'computer' }
type LiveSpecificCodeInterpreterParam = { type: 'code_interpreter' }
type LiveSpecificProgrammaticToolCallingParam = { type: 'programmatic_tool_calling' }
type LiveSpecificFunctionShellParam = { type: 'shell' }
type LiveSpecificCustomToolParam = { type: 'custom'; name: string }
type LiveSpecificApplyPatchParam = { type: 'apply_patch' }
type LiveToolChoiceValueEnum = 'none' | 'auto' | 'required'
type LiveAllowedToolsChoiceParam = {
  type: 'allowed_tools'
  tools: (
    | LiveFunctionToolChoiceParam
    | LiveMCPToolChoiceParam
    | LiveSpecificFileSearchParam
    | LiveSpecificWebSearchParam
    | LiveSpecificWebSearchPreviewParam
    | LiveSpecificImageGenParam
    | LiveSpecificComputerParam
    | LiveSpecificCodeInterpreterParam
    | LiveSpecificProgrammaticToolCallingParam
    | LiveSpecificFunctionShellParam
    | LiveSpecificCustomToolParam
    | LiveSpecificApplyPatchParam
  )[]
  mode?: LiveToolChoiceValueEnum | ({ [x: string]: unknown } | null) | undefined
}
type LiveResponsesDelegationSettingsInputParam = {
  model: string
  instructions?: string | ({ [x: string]: unknown } | null) | undefined
  max_output_tokens?: number | ({ [x: string]: unknown } | null) | undefined
  service_tier?: LiveResponsesServiceTier | ({ [x: string]: unknown } | null) | undefined
  reasoning?: LiveDelegationReasoningInputParam | ({ [x: string]: unknown } | null) | undefined
  text?: LiveDelegationTextInputParam | ({ [x: string]: unknown } | null) | undefined
  tools?:
    | (
        | LiveFunctionToolInputParam
        | LiveWebSearchToolInputParam
        | LiveFileSearchToolInputParam
        | LiveCodeInterpreterToolInputParam
        | LiveHostedShellToolInputParam
        | LiveImageGenerationToolInputParam
        | LiveMCPToolInputParam
        | LiveCustomToolInputParam
        | LiveNamespaceToolInputParam
        | LiveToolSearchToolInputParam
        | LiveProgrammaticToolInputParam
        | LiveComputerToolInputParam
        | LiveApplyPatchToolInputParam
      )[]
    | undefined
  tool_choice?:
    | LiveToolChoiceEnum
    | LiveFunctionToolChoiceParam
    | LiveMCPToolChoiceParam
    | LiveSpecificFileSearchParam
    | LiveSpecificWebSearchParam
    | LiveSpecificWebSearchPreviewParam
    | LiveSpecificImageGenParam
    | LiveSpecificComputerParam
    | LiveSpecificCodeInterpreterParam
    | LiveSpecificProgrammaticToolCallingParam
    | LiveSpecificFunctionShellParam
    | LiveSpecificCustomToolParam
    | LiveSpecificApplyPatchParam
    | LiveAllowedToolsChoiceParam
    | undefined
  parallel_tool_calls?: boolean | ({ [x: string]: unknown } | null) | undefined
}
type LiveResponsesDelegationParam = {
  acknowledgement_delay_ms?: number | undefined
  type: 'responses'
  responses: LiveResponsesDelegationSettingsInputParam
}
type LiveDecisionInputTextParam = { type: 'input_text'; text: string }
type LiveDetailEnum = 'low' | 'high' | 'auto' | 'original'
type LiveDecisionInputImageParam = {
  type: 'input_image'
  image_url: string
  detail?: LiveDetailEnum | ({ [x: string]: unknown } | null) | undefined
}
type LiveDecisionJsonObject = { [x: string]: unknown }
type LiveDecisionInputJsonParam = {
  type: 'input_json'
  data: LiveDecisionJsonObject | LiveDecisionJsonObject[]
}
type LiveDecisionChoiceParam = { value: string | boolean; description?: string | undefined }
type LiveDecisionChoiceQuestionParam = {
  type: 'choice'
  name?: string | undefined
  instructions:
    | string
    | (LiveDecisionInputTextParam | LiveDecisionInputImageParam | LiveDecisionInputJsonParam)[]
  choices: LiveDecisionChoiceParam[]
}
type LiveDecisionPredicateQuestionParam = {
  type: 'predicate'
  name?: string | undefined
  instructions:
    | string
    | (LiveDecisionInputTextParam | LiveDecisionInputImageParam | LiveDecisionInputJsonParam)[]
}
type LiveDecisionScoreLevelParam = { label: string; description?: string | undefined }
type LiveDecisionScoreQuestionParam = {
  type: 'score'
  name?: string | undefined
  instructions:
    | string
    | (LiveDecisionInputTextParam | LiveDecisionInputImageParam | LiveDecisionInputJsonParam)[]
  levels: LiveDecisionScoreLevelParam[]
}
type LiveDecisionQuestion =
  | LiveDecisionChoiceQuestionParam
  | LiveDecisionPredicateQuestionParam
  | LiveDecisionScoreQuestionParam
type LiveDecisionsSettingsInputParam = { questions: LiveDecisionQuestion[]; model: string }
type LiveDecisionsDelegationParam = {
  acknowledgement_delay_ms?: number | undefined
  type: 'decisions'
  decisions: LiveDecisionsSettingsInputParam
}
type Delegation =
  | LiveClientDelegationParam
  | LiveResponsesDelegationParam
  | LiveDecisionsDelegationParam
  | ({ [x: string]: unknown } | null)
type LiveDecisionQuestionsInputParam = { questions: LiveDecisionQuestion[] }
type LiveDecisionTriggerInputParam = {
  type: 'decisions'
  event_type: 'session.input_transcript.delta' | 'session.output_transcript.delta'
  decisions: LiveDecisionQuestionsInputParam
}
type Triggers = LiveDecisionTriggerInputParam[]
type Store = boolean
type LiveInitialMessageStatus = 'incomplete' | 'completed'
type LiveInitialInputTextContentPartParam = { type?: 'input_text' | undefined; text: string }
type LiveInitialDeveloperMessageItemParam = {
  id?: string | ({ [x: string]: unknown } | null) | undefined
  type?: 'message' | undefined
  status?: LiveInitialMessageStatus | ({ [x: string]: unknown } | null) | undefined
  role: 'developer'
  content: LiveInitialInputTextContentPartParam[]
}
type LiveInitialUserMessageItemParam = {
  id?: string | ({ [x: string]: unknown } | null) | undefined
  type?: 'message' | undefined
  status?: LiveInitialMessageStatus | ({ [x: string]: unknown } | null) | undefined
  role: 'user'
  content: LiveInitialInputTextContentPartParam[]
}
type LiveInitialTextContentPartParam = { type?: 'text' | undefined; text: string }
type LiveInitialOutputTextContentPartParam = { type: 'output_text'; text: string }
type LiveInitialAssistantMessageItemParam = {
  id?: string | ({ [x: string]: unknown } | null) | undefined
  type?: 'message' | undefined
  status?: LiveInitialMessageStatus | ({ [x: string]: unknown } | null) | undefined
  role: 'assistant'
  content: (LiveInitialTextContentPartParam | LiveInitialOutputTextContentPartParam)[]
}
type LiveInitialItem =
  | LiveInitialDeveloperMessageItemParam
  | LiveInitialUserMessageItemParam
  | LiveInitialAssistantMessageItemParam
type Input = LiveInitialItem[]
type LiveAllowedServerEventParam = { type: string; response_event?: string | undefined }
type LiveDataChannelConfigParam = {
  allowed_client_events?: 'all' | string[] | undefined
  allowed_server_events?: 'all' | LiveAllowedServerEventParam[] | undefined
}
type LiveClientConfigParam = { data_channel: LiveDataChannelConfigParam }
type LiveSpeechWakePolicyParam = { type: 'speech'; vad_threshold?: number | undefined }
type IdleTimeoutS = number
type LiveMediaSessionCreateParams = {
  model: ModelIdsLive
  safety_identifier?: SafetyIdentifier | undefined
  instructions?: Instructions | undefined
  audio?: LiveMediaSessionAudioParam | undefined
  delegation?: Delegation | undefined
  triggers?: Triggers | undefined
  store?: Store | undefined
  input?: Input | undefined
  client?: LiveClientConfigParam | undefined
  wake_policy?: LiveSpeechWakePolicyParam | undefined
  idle_timeout_s?: IdleTimeoutS | undefined
}
type LiveWebRTCTransport = { type: 'webrtc'; sdp: string }
type LiveSIPTrunkAuth = { type: 'digest'; username: string; password: string }
type LiveSIPTrunk = { provider_url: string; auth: LiveSIPTrunkAuth; caller_number: string }
type LiveSIPTransport = { type: 'sip'; destination: string; trunk: LiveSIPTrunk }
type LiveSessionCreateRequest = {
  session: LiveMediaSessionCreateParams
  transport: LiveWebRTCTransport | LiveSIPTransport
}
type Session = { id: string }
type LiveSessionCreateResponse = {
  session: Session
  transport: LiveWebRTCTransport | { type: 'sip' }
}
type LiveCallAcceptSession = {
  model: ModelIdsLive
  safety_identifier?: SafetyIdentifier | undefined
  instructions?: Instructions | undefined
  audio?: LiveMediaSessionAudioParam | undefined
  delegation?: Delegation | undefined
  triggers?: Triggers | undefined
  store?: Store | undefined
  input?: Input | undefined
  type: 'live'
}
type LiveCallAcceptRequest = { session: LiveCallAcceptSession }
type PropertiesStore = boolean
type LiveResponsesDelegationSettingsUpdateInputParam = {
  model?: string | undefined
  instructions?: string | ({ [x: string]: unknown } | null) | undefined
  max_output_tokens?: number | ({ [x: string]: unknown } | null) | undefined
  service_tier?: LiveResponsesServiceTier | ({ [x: string]: unknown } | null) | undefined
  reasoning?: LiveDelegationReasoningInputParam | ({ [x: string]: unknown } | null) | undefined
  text?: LiveDelegationTextInputParam | ({ [x: string]: unknown } | null) | undefined
  tools?:
    | (
        | LiveFunctionToolInputParam
        | LiveWebSearchToolInputParam
        | LiveFileSearchToolInputParam
        | LiveCodeInterpreterToolInputParam
        | LiveHostedShellToolInputParam
        | LiveImageGenerationToolInputParam
        | LiveMCPToolInputParam
        | LiveCustomToolInputParam
        | LiveNamespaceToolInputParam
        | LiveToolSearchToolInputParam
        | LiveProgrammaticToolInputParam
        | LiveComputerToolInputParam
        | LiveApplyPatchToolInputParam
      )[]
    | undefined
  tool_choice?:
    | LiveToolChoiceEnum
    | LiveFunctionToolChoiceParam
    | LiveMCPToolChoiceParam
    | LiveSpecificFileSearchParam
    | LiveSpecificWebSearchParam
    | LiveSpecificWebSearchPreviewParam
    | LiveSpecificImageGenParam
    | LiveSpecificComputerParam
    | LiveSpecificCodeInterpreterParam
    | LiveSpecificProgrammaticToolCallingParam
    | LiveSpecificFunctionShellParam
    | LiveSpecificCustomToolParam
    | LiveSpecificApplyPatchParam
    | LiveAllowedToolsChoiceParam
    | undefined
  parallel_tool_calls?: boolean | ({ [x: string]: unknown } | null) | undefined
}
type LiveResponsesDelegationUpdateParam = {
  acknowledgement_delay_ms?: number | undefined
  type: 'responses'
  responses?: LiveResponsesDelegationSettingsUpdateInputParam | undefined
}
type LiveMediaSessionForkParams = {
  store?: PropertiesStore | undefined
  delegation?: LiveResponsesDelegationUpdateParam | undefined
  client?: LiveClientConfigParam | undefined
}
type LiveForkRequest = {
  session?: LiveMediaSessionForkParams | undefined
  transport: LiveWebRTCTransport
}
type LiveCreateResponse = { session: { id: string }; transport: LiveWebRTCTransport }
type TargetUri = string
type LiveCallReferRequest = { target_uri: TargetUri }
type LiveCallRejectRequest = { status_code: number }
type Model = {
  id: string
  created: number
  object: 'model'
  owned_by: string
  shutdown_date?: string | ({ [x: string]: unknown } | null) | undefined
}
type ListModelsResponse = { object: 'list'; data: Model[] }
type PermissionErrorResponse = { error: Error | string }
type DeleteModelResponse = { id: string; deleted: boolean; object: string }
type CreateModerationRequest = {
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
    | undefined
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
      illicit: boolean | ({ [x: string]: unknown } | null)
      'illicit/violent': boolean | ({ [x: string]: unknown } | null)
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
  name?: string | ({ [x: string]: unknown } | null) | undefined
  redacted_value: string
  created_at: number
  expires_at: number | ({ [x: string]: unknown } | null)
  last_used_at?: number | ({ [x: string]: unknown } | null) | undefined
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
  first_id?: string | ({ [x: string]: unknown } | null) | undefined
  last_id?: string | ({ [x: string]: unknown } | null) | undefined
}
type AdminApiKeyCreateResponse = {
  object: 'organization.admin_api_key'
  id: string
  name?: string | ({ [x: string]: unknown } | null) | undefined
  redacted_value: string
  created_at: number
  expires_at: number | ({ [x: string]: unknown } | null)
  last_used_at?: number | ({ [x: string]: unknown } | null) | undefined
  owner: {
    type?: string | undefined
    object?: string | undefined
    id?: string | undefined
    name?: string | undefined
    created_at?: number | undefined
    role?: string | undefined
  }
  value: string
}
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
  actor?: AuditLogActor | ({ [x: string]: unknown } | null) | undefined
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
    | { id?: string | undefined; data?: { [x: string]: unknown } | undefined }
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
  'login.succeeded'?: { [x: string]: unknown } | undefined
  'login.failed'?:
    | { error_code?: string | undefined; error_message?: string | undefined }
    | undefined
  'logout.succeeded'?: { [x: string]: unknown } | undefined
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
              metadata?: { [x: string]: unknown } | undefined
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
    | { id?: string | undefined; data?: { [x: string]: unknown } | undefined }
    | undefined
  'workload_identity_provider.updated'?:
    | { id?: string | undefined; changes_requested?: { [x: string]: unknown } | undefined }
    | undefined
  'workload_identity_provider.deleted'?:
    | { id?: string | undefined; name?: string | undefined }
    | undefined
  'workload_identity_provider_mapping.created'?:
    | {
        id?: string | undefined
        identity_provider_id?: string | undefined
        data?: { [x: string]: unknown } | undefined
      }
    | undefined
  'workload_identity_provider_mapping.updated'?:
    | {
        id?: string | undefined
        identity_provider_id?: string | undefined
        changes_requested?: { [x: string]: unknown } | undefined
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
  first_id?: string | ({ [x: string]: unknown } | null) | undefined
  last_id?: string | ({ [x: string]: unknown } | null) | undefined
  has_more: boolean
}
type OrganizationCertificate = {
  object: 'organization.certificate'
  id: string
  name: string | ({ [x: string]: unknown } | null)
  created_at: number
  certificate_details: { valid_at?: number | undefined; expires_at?: number | undefined }
  active: boolean
}
type ListCertificatesResponse = {
  data: OrganizationCertificate[]
  first_id: string | ({ [x: string]: unknown } | null)
  last_id: string | ({ [x: string]: unknown } | null)
  has_more: boolean
  object: 'list'
}
type UploadCertificateRequest = { name?: string | undefined; certificate: string }
type Certificate = {
  object: 'certificate' | 'organization.certificate' | 'organization.project.certificate'
  id: string
  name: string | ({ [x: string]: unknown } | null)
  created_at: number
  certificate_details: {
    valid_at?: number | undefined
    expires_at?: number | undefined
    content?: string | undefined
  }
  active?: boolean | undefined
}
type ToggleCertificatesRequest = { certificate_ids: string[] }
type OrganizationCertificateActivationResponse = {
  object: 'organization.certificate.activation'
  data: OrganizationCertificate[]
}
type OrganizationCertificateDeactivationResponse = {
  object: 'organization.certificate.deactivation'
  data: OrganizationCertificate[]
}
type ModifyCertificateRequest = { name?: string | undefined }
type DeleteCertificateResponse = { object: 'certificate.deleted'; id: string }
type UsageCompletionsResult = {
  api_source?: 'agents_api' | 'unlabeled' | ({ [x: string]: unknown } | null) | undefined
  object: 'organization.usage.completions.result'
  input_tokens: number
  input_cached_tokens?: number | undefined
  input_cache_write_tokens?: number | undefined
  input_cache_write_30m_tokens?: number | ({ [x: string]: unknown } | null) | undefined
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
  project_id?: string | ({ [x: string]: unknown } | null) | undefined
  user_id?: string | ({ [x: string]: unknown } | null) | undefined
  api_key_id?: string | ({ [x: string]: unknown } | null) | undefined
  model?: string | ({ [x: string]: unknown } | null) | undefined
  batch?: boolean | ({ [x: string]: unknown } | null) | undefined
  service_tier?: string | ({ [x: string]: unknown } | null) | undefined
}
type UsageEmbeddingsResult = {
  object: 'organization.usage.embeddings.result'
  input_tokens: number
  num_model_requests: number
  project_id?: string | ({ [x: string]: unknown } | null) | undefined
  user_id?: string | ({ [x: string]: unknown } | null) | undefined
  api_key_id?: string | ({ [x: string]: unknown } | null) | undefined
  model?: string | ({ [x: string]: unknown } | null) | undefined
}
type UsageModerationsResult = {
  object: 'organization.usage.moderations.result'
  input_tokens: number
  num_model_requests: number
  project_id?: string | ({ [x: string]: unknown } | null) | undefined
  user_id?: string | ({ [x: string]: unknown } | null) | undefined
  api_key_id?: string | ({ [x: string]: unknown } | null) | undefined
  model?: string | ({ [x: string]: unknown } | null) | undefined
}
type UsageImagesResult = {
  object: 'organization.usage.images.result'
  images: number
  num_model_requests: number
  source?: string | ({ [x: string]: unknown } | null) | undefined
  size?: string | ({ [x: string]: unknown } | null) | undefined
  project_id?: string | ({ [x: string]: unknown } | null) | undefined
  user_id?: string | ({ [x: string]: unknown } | null) | undefined
  api_key_id?: string | ({ [x: string]: unknown } | null) | undefined
  model?: string | ({ [x: string]: unknown } | null) | undefined
}
type UsageAudioSpeechesResult = {
  object: 'organization.usage.audio_speeches.result'
  characters: number
  num_model_requests: number
  project_id?: string | ({ [x: string]: unknown } | null) | undefined
  user_id?: string | ({ [x: string]: unknown } | null) | undefined
  api_key_id?: string | ({ [x: string]: unknown } | null) | undefined
  model?: string | ({ [x: string]: unknown } | null) | undefined
}
type UsageAudioTranscriptionsResult = {
  object: 'organization.usage.audio_transcriptions.result'
  seconds: bigint
  num_model_requests: number
  project_id?: string | ({ [x: string]: unknown } | null) | undefined
  user_id?: string | ({ [x: string]: unknown } | null) | undefined
  api_key_id?: string | ({ [x: string]: unknown } | null) | undefined
  model?: string | ({ [x: string]: unknown } | null) | undefined
}
type UsageVectorStoresResult = {
  object: 'organization.usage.vector_stores.result'
  usage_bytes: number
  project_id?: string | ({ [x: string]: unknown } | null) | undefined
}
type UsageCodeInterpreterSessionsResult = {
  object: 'organization.usage.code_interpreter_sessions.result'
  num_sessions: number
  project_id?: string | ({ [x: string]: unknown } | null) | undefined
}
type UsageFileSearchCallsResult = {
  object: 'organization.usage.file_searches.result'
  num_requests: number
  project_id?: string | ({ [x: string]: unknown } | null) | undefined
  user_id?: string | ({ [x: string]: unknown } | null) | undefined
  api_key_id?: string | ({ [x: string]: unknown } | null) | undefined
  vector_store_id?: string | ({ [x: string]: unknown } | null) | undefined
}
type UsageWebSearchCallsResult = {
  api_source?: 'agents_api' | 'unlabeled' | ({ [x: string]: unknown } | null) | undefined
  object: 'organization.usage.web_searches.result'
  num_model_requests: number
  num_requests: number
  project_id?: string | ({ [x: string]: unknown } | null) | undefined
  user_id?: string | ({ [x: string]: unknown } | null) | undefined
  api_key_id?: string | ({ [x: string]: unknown } | null) | undefined
  model?: string | ({ [x: string]: unknown } | null) | undefined
  context_level?: string | ({ [x: string]: unknown } | null) | undefined
}
type CostsResult = {
  api_source?: 'agents_api' | 'unlabeled' | ({ [x: string]: unknown } | null) | undefined
  object: 'organization.costs.result'
  amount?: { value?: number | undefined; currency?: string | undefined } | undefined
  line_item?: string | ({ [x: string]: unknown } | null) | undefined
  project_id?: string | ({ [x: string]: unknown } | null) | undefined
  user_id?: string | ({ [x: string]: unknown } | null) | undefined
  api_key_id?: string | ({ [x: string]: unknown } | null) | undefined
  quantity?: number | ({ [x: string]: unknown } | null) | undefined
  quantity_unit?:
    | string
    | 'tokens'
    | '1000_tokens'
    | 'duration_seconds'
    | 'duration_minutes'
    | 'duration_hours'
    | 'gibibyte_hours'
    | 'images'
    | 'characters'
    | ({ [x: string]: unknown } | null)
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
  next_page: string | ({ [x: string]: unknown } | null)
}
type OrganizationDataRetention = {
  object: 'organization.data_retention'
  type:
    | 'zero_data_retention'
    | 'modified_abuse_monitoring'
    | 'enhanced_zero_data_retention'
    | 'enhanced_modified_abuse_monitoring'
}
type UpdateOrganizationDataRetentionBody = {
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
  next: string | ({ [x: string]: unknown } | null)
}
type CreateGroupBody = { name: string }
type UpdateGroupBody = { name: string }
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
  description: string | ({ [x: string]: unknown } | null)
  created_at: number | ({ [x: string]: unknown } | null)
  updated_at: number | ({ [x: string]: unknown } | null)
  created_by: string | ({ [x: string]: unknown } | null)
  created_by_user_obj: { [x: string]: unknown } | ({ [x: string]: unknown } | null)
  metadata: { [x: string]: unknown } | ({ [x: string]: unknown } | null)
  assignment_sources:
    | { principal_id: string; principal_type: string }[]
    | ({ [x: string]: unknown } | null)
}
type RoleListResource = {
  object: 'list'
  data: AssignedRoleDetails[]
  has_more: boolean
  next: string | ({ [x: string]: unknown } | null)
}
type PublicAssignOrganizationGroupRoleBody = { role_id: string }
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
  description: string | ({ [x: string]: unknown } | null)
  permissions: string[]
  resource_type: string
  predefined_role: boolean
}
type GroupRoleAssignment = { object: 'group.role'; group: Group; role: Role }
type DeletedRoleAssignmentResource = { object: string; deleted: boolean }
type GroupUser = { id: string; name: string; email: string | ({ [x: string]: unknown } | null) }
type UserListResource = {
  object: 'list'
  data: GroupUser[]
  has_more: boolean
  next: string | ({ [x: string]: unknown } | null)
}
type CreateGroupUserBody = { user_id: string }
type GroupUserAssignment = { object: 'group.user'; user_id: string; group_id: string }
type GroupMemberUser = {
  id: string
  name: string
  email: string | ({ [x: string]: unknown } | null)
  picture: string | ({ [x: string]: unknown } | null)
  is_service_account: boolean | ({ [x: string]: unknown } | null)
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
  expires_at?: number | ({ [x: string]: unknown } | null) | undefined
  accepted_at?: number | ({ [x: string]: unknown } | null) | undefined
  projects: { id: string; role: 'member' | 'owner' }[]
}
type InviteListResponse = {
  object: 'list'
  data: Invite[]
  first_id?: string | ({ [x: string]: unknown } | null) | undefined
  last_id?: string | ({ [x: string]: unknown } | null) | undefined
  has_more: boolean
}
type InviteRequest = {
  email: string
  role: 'reader' | 'owner'
  projects?: { id: string; role: 'member' | 'owner' }[] | undefined
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
  name?: string | ({ [x: string]: unknown } | null) | undefined
  created_at: number
  archived_at?: number | ({ [x: string]: unknown } | null) | undefined
  status?: string | ({ [x: string]: unknown } | null) | undefined
  external_key_id?: string | ({ [x: string]: unknown } | null) | undefined
  residency?: PublicProjectResidency | undefined
}
type ProjectListResponse = {
  object: 'list'
  data: Project[]
  first_id?: string | ({ [x: string]: unknown } | null) | undefined
  last_id?: string | ({ [x: string]: unknown } | null) | undefined
  has_more: boolean
}
type ProjectCreateRequest = {
  name: string
  geography?: string | ({ [x: string]: unknown } | null) | undefined
  residency?: PublicProjectResidency | ({ [x: string]: unknown } | null) | undefined
  external_key_id?: string | ({ [x: string]: unknown } | null) | undefined
}
type ProjectUpdateRequest = {
  name?: string | ({ [x: string]: unknown } | null) | undefined
  external_key_id?: string | ({ [x: string]: unknown } | null) | undefined
  geography?: string | ({ [x: string]: unknown } | null) | undefined
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
  expires_at?: number | ({ [x: string]: unknown } | null) | undefined
  last_used_at: number | ({ [x: string]: unknown } | null)
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
  first_id?: string | ({ [x: string]: unknown } | null) | undefined
  last_id?: string | ({ [x: string]: unknown } | null) | undefined
  has_more: boolean
}
type ProjectApiKeyDeleteResponse = {
  object: 'organization.project.api_key.deleted'
  id: string
  deleted: boolean
}
type UpdateProjectApiKeyBody = { [x: string]: unknown } | { [x: string]: unknown }
type OrganizationProjectCertificate = {
  object: 'organization.project.certificate'
  id: string
  name: string | ({ [x: string]: unknown } | null)
  created_at: number
  certificate_details: { valid_at?: number | undefined; expires_at?: number | undefined }
  active: boolean
}
type ListProjectCertificatesResponse = {
  data: OrganizationProjectCertificate[]
  first_id: string | ({ [x: string]: unknown } | null)
  last_id: string | ({ [x: string]: unknown } | null)
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
type UpdateProjectDataRetentionBody = {
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
  next: string | ({ [x: string]: unknown } | null)
}
type InviteProjectGroupBody = { group_id: string; role: string }
type ProjectGroupDeletedResource = { object: 'project.group.deleted'; deleted: boolean }
type HostedToolPermission = { enabled: boolean }
type ProjectHostedToolPermissions = {
  file_search: HostedToolPermission
  web_search: HostedToolPermission
  image_generation: HostedToolPermission
  mcp: HostedToolPermission
  code_interpreter: HostedToolPermission
}
type HostedToolPermissionUpdate = { enabled: boolean }
type ProjectHostedToolPermissionsUpdateRequest = {
  file_search?: HostedToolPermissionUpdate | ({ [x: string]: unknown } | null) | undefined
  web_search?: HostedToolPermissionUpdate | ({ [x: string]: unknown } | null) | undefined
  image_generation?: HostedToolPermissionUpdate | ({ [x: string]: unknown } | null) | undefined
  mcp?: HostedToolPermissionUpdate | ({ [x: string]: unknown } | null) | undefined
  code_interpreter?: HostedToolPermissionUpdate | ({ [x: string]: unknown } | null) | undefined
}
type ProjectModelPermissions = {
  object: 'project.model_permissions'
  mode: 'allow_list' | 'deny_list'
  model_ids: string[]
}
type ProjectModelPermissionsUpdateRequest = {
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
  first_id?: string | ({ [x: string]: unknown } | null) | undefined
  last_id?: string | ({ [x: string]: unknown } | null) | undefined
  has_more: boolean
}
type ProjectRateLimitUpdateRequest = {
  max_requests_per_1_minute?: number | undefined
  max_tokens_per_1_minute?: number | undefined
  max_images_per_1_minute?: number | undefined
  max_audio_megabytes_per_1_minute?: number | undefined
  max_requests_per_1_day?: number | undefined
  batch_1_day_max_input_tokens?: number | undefined
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
  first_id?: string | ({ [x: string]: unknown } | null) | undefined
  last_id?: string | ({ [x: string]: unknown } | null) | undefined
  has_more: boolean
}
type ProjectServiceAccountCreateRequest = {
  name: string
  create_service_account_only?: boolean | ({ [x: string]: unknown } | null) | undefined
  expires_in_seconds?: number | ({ [x: string]: unknown } | null) | undefined
}
type ProjectServiceAccountApiKey = {
  object: 'organization.project.service_account.api_key'
  value: string
  name: string
  created_at: number
  expires_at?: number | ({ [x: string]: unknown } | null) | undefined
  id: string
}
type ProjectServiceAccountCreateResponse = {
  object: 'organization.project.service_account'
  id: string
  name: string
  role: 'member' | 'none'
  created_at: number
  api_key: ProjectServiceAccountApiKey | ({ [x: string]: unknown } | null)
}
type UpdateProjectServiceAccountBody = {
  name?: string | undefined
  role?: 'member' | 'owner' | undefined
}
type ProjectServiceAccountDeleteResponse = {
  object: 'organization.project.service_account.deleted'
  id: string
  deleted: boolean
}
type SpendAlertNotificationChannel = {
  type: 'email'
  recipients: string[]
  subject_prefix?: string | ({ [x: string]: unknown } | null) | undefined
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
  first_id: string | ({ [x: string]: unknown } | null)
  last_id: string | ({ [x: string]: unknown } | null)
  has_more: boolean
}
type CreateSpendAlertBody = {
  threshold_amount: number
  currency: 'USD'
  interval: 'month'
  notification_channel: SpendAlertNotificationChannel
}
type ProjectSpendAlertDeletedResource = {
  id: string
  object: 'project.spend_alert.deleted'
  deleted: boolean
}
type ProjectUser = {
  object: 'organization.project.user'
  id: string
  name?: string | ({ [x: string]: unknown } | null) | undefined
  email?: string | ({ [x: string]: unknown } | null) | undefined
  role: string
  added_at: number
}
type ProjectUserListResponse = {
  object: string
  data: ProjectUser[]
  first_id?: string | ({ [x: string]: unknown } | null) | undefined
  last_id?: string | ({ [x: string]: unknown } | null) | undefined
  has_more: boolean
}
type ProjectUserCreateRequest = {
  user_id?: string | ({ [x: string]: unknown } | null) | undefined
  email?: string | ({ [x: string]: unknown } | null) | undefined
  role: string
}
type ProjectUserUpdateRequest = { role?: string | ({ [x: string]: unknown } | null) | undefined }
type ProjectUserDeleteResponse = {
  object: 'organization.project.user.deleted'
  id: string
  deleted: boolean
}
type PublicRoleListResource = {
  object: 'list'
  data: Role[]
  has_more: boolean
  next: string | ({ [x: string]: unknown } | null)
}
type PublicCreateOrganizationRoleBody = {
  role_name: string
  permissions: string[]
  description?: string | ({ [x: string]: unknown } | null) | undefined
}
type PublicUpdateOrganizationRoleBody = {
  permissions?: string[] | ({ [x: string]: unknown } | null) | undefined
  description?: string | ({ [x: string]: unknown } | null) | undefined
  role_name?: string | ({ [x: string]: unknown } | null) | undefined
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
  first_id: string | ({ [x: string]: unknown } | null)
  last_id: string | ({ [x: string]: unknown } | null)
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
  name?: string | ({ [x: string]: unknown } | null) | undefined
  email?: string | ({ [x: string]: unknown } | null) | undefined
  role?: string | ({ [x: string]: unknown } | null) | undefined
  added_at: number
  is_default?: boolean | undefined
  created?: number | undefined
  user?:
    | {
        object: 'user'
        id: string
        email?: string | ({ [x: string]: unknown } | null) | undefined
        name?: string | ({ [x: string]: unknown } | null) | undefined
        picture?: string | ({ [x: string]: unknown } | null) | undefined
        enabled?: boolean | ({ [x: string]: unknown } | null) | undefined
        banned?: boolean | ({ [x: string]: unknown } | null) | undefined
        banned_at?: number | ({ [x: string]: unknown } | null) | undefined
      }
    | undefined
  is_service_account?: boolean | undefined
  is_scale_tier_authorized_purchaser?: boolean | ({ [x: string]: unknown } | null) | undefined
  is_scim_managed?: boolean | undefined
  api_key_last_used_at?: number | ({ [x: string]: unknown } | null) | undefined
  technical_level?: string | ({ [x: string]: unknown } | null) | undefined
  developer_persona?: string | ({ [x: string]: unknown } | null) | undefined
  projects?:
    | {
        object: 'list'
        data: {
          id?: string | ({ [x: string]: unknown } | null) | undefined
          name?: string | ({ [x: string]: unknown } | null) | undefined
          role?: string | ({ [x: string]: unknown } | null) | undefined
        }[]
      }
    | ({ [x: string]: unknown } | null)
    | undefined
}
type UserListResponse = {
  object: 'list'
  data: User[]
  first_id?: string | ({ [x: string]: unknown } | null) | undefined
  last_id?: string | ({ [x: string]: unknown } | null) | undefined
  has_more: boolean
}
type UserRoleUpdateRequest = {
  role?: string | ({ [x: string]: unknown } | null) | undefined
  role_id?: string | ({ [x: string]: unknown } | null) | undefined
  technical_level?: string | ({ [x: string]: unknown } | null) | undefined
  developer_persona?: string | ({ [x: string]: unknown } | null) | undefined
}
type UserDeleteResponse = { object: 'organization.user.deleted'; id: string; deleted: boolean }
type UserRoleAssignment = { object: 'user.role'; user: User; role: Role }
type RealtimeAudioFormats =
  | { type?: 'audio/pcm' | undefined; rate?: 24000 | undefined }
  | { type?: 'audio/pcmu' | undefined }
  | { type?: 'audio/pcma' | undefined }
type AudioTranscription = {
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
    | undefined
  language?: string | undefined
  languages?: string[] | undefined
  keywords?: string[] | undefined
  prompt?: string | undefined
  delay?: 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | undefined
}
type NoiseReductionType = 'near_field' | 'far_field'
type RealtimeNoiseReductionStrength = number
type RealtimeTurnDetection =
  | {
      type: 'server_vad'
      threshold?: number | undefined
      prefix_padding_ms?: number | undefined
      silence_duration_ms?: number | undefined
      create_response?: boolean | undefined
      interrupt_response?: boolean | undefined
      idle_timeout_ms?: number | ({ [x: string]: unknown } | null) | undefined
    }
  | {
      type: 'semantic_vad'
      eagerness?: 'low' | 'medium' | 'high' | 'auto' | undefined
      create_response?: boolean | undefined
      interrupt_response?: boolean | undefined
    }
  | ({ [x: string]: unknown } | null)
type RealtimeFunctionTool = {
  type?: 'function' | undefined
  name?: string | undefined
  description?: string | undefined
  parameters?: { [x: string]: unknown } | undefined
}
type ToolChoiceOptions = 'none' | 'auto' | 'required'
type ToolChoiceFunction = { type: 'function'; name: string }
type ToolChoiceMCP = {
  type: 'mcp'
  server_label: string
  name?: string | ({ [x: string]: unknown } | null) | undefined
}
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
type ResponsePromptVariables =
  | { [x: string]: string | InputTextContent | InputImageContent | InputFileContent }
  | ({ [x: string]: unknown } | null)
type Prompt =
  | {
      id: string
      version?: string | ({ [x: string]: unknown } | null) | undefined
      variables?: ResponsePromptVariables | undefined
    }
  | ({ [x: string]: unknown } | null)
type RealtimeCallCreateRequest = {
  sdp: string
  session?:
    | {
        type: 'realtime'
        output_modalities?: ('text' | 'audio')[] | undefined
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
          | undefined
        instructions?: string | undefined
        audio?:
          | {
              input?:
                | {
                    format?: RealtimeAudioFormats | undefined
                    transcription?: AudioTranscription | undefined
                    noise_reduction?:
                      | {
                          type?: NoiseReductionType | undefined
                          strength?: RealtimeNoiseReductionStrength | undefined
                        }
                      | undefined
                    turn_detection?: RealtimeTurnDetection | undefined
                  }
                | undefined
              output?:
                | {
                    format?: RealtimeAudioFormats | undefined
                    voice?: VoiceIdsOrCustomVoice | undefined
                    speed?: number | undefined
                  }
                | undefined
            }
          | undefined
        include?: 'item.input_audio_transcription.logprobs'[] | undefined
        tracing?:
          | 'auto'
          | {
              workflow_name?: string | undefined
              group_id?: string | undefined
              metadata?: { [x: string]: unknown } | undefined
            }
          | ({ [x: string]: unknown } | null)
          | undefined
        tools?: (RealtimeFunctionTool | MCPTool)[] | undefined
        tool_choice?: ToolChoiceOptions | ToolChoiceFunction | ToolChoiceMCP | undefined
        parallel_tool_calls?: boolean | undefined
        reasoning?: RealtimeReasoning | undefined
        max_output_tokens?: number | 'inf' | undefined
        truncation?: RealtimeTruncation | undefined
        prompt?: Prompt | undefined
      }
    | undefined
}
type RealtimeSessionCreateRequestGA = {
  type: 'realtime'
  output_modalities?: ('text' | 'audio')[] | undefined
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
    | undefined
  instructions?: string | undefined
  audio?:
    | {
        input?:
          | {
              format?: RealtimeAudioFormats | undefined
              transcription?: AudioTranscription | undefined
              noise_reduction?:
                | {
                    type?: NoiseReductionType | undefined
                    strength?: RealtimeNoiseReductionStrength | undefined
                  }
                | undefined
              turn_detection?: RealtimeTurnDetection | undefined
            }
          | undefined
        output?:
          | {
              format?: RealtimeAudioFormats | undefined
              voice?: VoiceIdsOrCustomVoice | undefined
              speed?: number | undefined
            }
          | undefined
      }
    | undefined
  include?: 'item.input_audio_transcription.logprobs'[] | undefined
  tracing?:
    | 'auto'
    | {
        workflow_name?: string | undefined
        group_id?: string | undefined
        metadata?: { [x: string]: unknown } | undefined
      }
    | ({ [x: string]: unknown } | null)
    | undefined
  tools?: (RealtimeFunctionTool | MCPTool)[] | undefined
  tool_choice?: ToolChoiceOptions | ToolChoiceFunction | ToolChoiceMCP | undefined
  parallel_tool_calls?: boolean | undefined
  reasoning?: RealtimeReasoning | undefined
  max_output_tokens?: number | 'inf' | undefined
  truncation?: RealtimeTruncation | undefined
  prompt?: Prompt | undefined
}
type RealtimeCallReferRequest = { target_uri: string }
type RealtimeCallRejectRequest = { status_code?: number | undefined }
type RealtimeTranscriptionSessionCreateRequestGA = {
  type: 'transcription'
  audio?:
    | {
        input?:
          | {
              format?: RealtimeAudioFormats | undefined
              transcription?: AudioTranscription | undefined
              noise_reduction?:
                | {
                    type?: NoiseReductionType | undefined
                    strength?: RealtimeNoiseReductionStrength | undefined
                  }
                | undefined
              turn_detection?: RealtimeTurnDetection | undefined
            }
          | undefined
      }
    | undefined
  include?: 'item.input_audio_transcription.logprobs'[] | undefined
}
type RealtimeCreateClientSecretRequest = {
  expires_after?: { anchor?: 'created_at' | undefined; seconds?: bigint | undefined } | undefined
  session?: RealtimeSessionCreateRequestGA | RealtimeTranscriptionSessionCreateRequestGA | undefined
}
type AudioTranscriptionResponse = {
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
    | undefined
  language?: (string | null) | undefined
  languages?: string[] | undefined
  keywords?: string[] | undefined
  prompt?: string | undefined
}
type RealtimeSessionCreateResponseGA = {
  type: 'realtime'
  id: string
  object: 'realtime.session'
  expires_at?: number | undefined
  output_modalities?: ('text' | 'audio')[] | undefined
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
    | undefined
  instructions?: string | undefined
  audio?:
    | {
        input?:
          | {
              format?: RealtimeAudioFormats | undefined
              transcription?:
                | AudioTranscriptionResponse
                | ({ [x: string]: unknown } | null)
                | undefined
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
    | 'auto'
    | {
        workflow_name?: string | undefined
        group_id?: string | undefined
        metadata?: { [x: string]: unknown } | undefined
      }
    | ({ [x: string]: unknown } | null)
    | undefined
  tools?: (RealtimeFunctionTool | MCPTool)[] | undefined
  tool_choice?: ToolChoiceOptions | ToolChoiceFunction | ToolChoiceMCP | undefined
  reasoning?: RealtimeReasoning | undefined
  max_output_tokens?: number | 'inf' | undefined
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
              transcription?:
                | AudioTranscriptionResponse
                | ({ [x: string]: unknown } | null)
                | undefined
              noise_reduction?:
                | ({
                    type?: NoiseReductionType | undefined
                    strength?: RealtimeNoiseReductionStrength | undefined
                  } | null)
                | undefined
              turn_detection?:
                | {
                    type?: string | undefined
                    threshold?: number | undefined
                    prefix_padding_ms?: number | undefined
                    silence_duration_ms?: number | undefined
                  }
                | ({ [x: string]: unknown } | null)
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
type RealtimeSessionCreateRequest = {
  client_secret: { value: string; expires_at: number }
  modalities?: ('text' | 'audio')[] | undefined
  instructions?: string | undefined
  voice?: VoiceIdsOrCustomVoice | undefined
  input_audio_format?: string | undefined
  output_audio_format?: string | undefined
  input_audio_transcription?: { model?: string | undefined } | undefined
  speed?: number | undefined
  tracing?:
    | 'auto'
    | {
        workflow_name?: string | undefined
        group_id?: string | undefined
        metadata?: { [x: string]: unknown } | undefined
      }
    | undefined
  turn_detection?:
    | {
        type?: string | undefined
        threshold?: number | undefined
        prefix_padding_ms?: number | undefined
        silence_duration_ms?: number | undefined
      }
    | undefined
  tools?:
    | {
        type?: 'function' | undefined
        name?: string | undefined
        description?: string | undefined
        parameters?: { [x: string]: unknown } | undefined
      }[]
    | undefined
  tool_choice?: string | undefined
  temperature?: number | undefined
  max_response_output_tokens?: number | 'inf' | undefined
  truncation?: RealtimeTruncation | undefined
  prompt?: Prompt | undefined
}
type RealtimeSessionCreateResponse = {
  id?: string | undefined
  object?: string | undefined
  expires_at?: number | undefined
  include?: 'item.input_audio_transcription.logprobs'[] | undefined
  model?: string | undefined
  output_modalities?: { [x: string]: unknown } | undefined
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
    | 'auto'
    | {
        workflow_name?: string | undefined
        group_id?: string | undefined
        metadata?: { [x: string]: unknown } | undefined
      }
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
  max_output_tokens?: number | 'inf' | undefined
}
type RealtimeTranscriptionSessionCreateRequest = {
  turn_detection?:
    | {
        type?: 'server_vad' | undefined
        threshold?: number | undefined
        prefix_padding_ms?: number | undefined
        silence_duration_ms?: number | undefined
      }
    | undefined
  input_audio_noise_reduction?: { type?: NoiseReductionType | undefined } | undefined
  input_audio_format?: 'pcm16' | 'g711_ulaw' | 'g711_alaw' | undefined
  input_audio_transcription?: AudioTranscription | undefined
  include?: 'item.input_audio_transcription.logprobs'[] | undefined
}
type RealtimeTranscriptionSessionCreateResponse = {
  client_secret: { value: string; expires_at: number }
  modalities?: { [x: string]: unknown } | undefined
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
type RealtimeTranslationSessionCreateRequest = {
  model: string
  audio?:
    | {
        input?:
          | {
              transcription?: { model: string } | ({ [x: string]: unknown } | null) | undefined
              noise_reduction?:
                | {
                    type: NoiseReductionType
                    strength?: RealtimeNoiseReductionStrength | undefined
                  }
                | ({ [x: string]: unknown } | null)
                | undefined
            }
          | undefined
        output?: { language?: string | undefined } | undefined
      }
    | undefined
}
type RealtimeTranslationClientSecretCreateRequest = {
  expires_after?: { anchor?: 'created_at' | undefined; seconds?: bigint | undefined } | undefined
  session: RealtimeTranslationSessionCreateRequest
}
type RealtimeTranslationSession = {
  id: string
  type: 'translation'
  expires_at: number
  model: string
  audio: {
    input?:
      | {
          transcription?: { model: string } | ({ [x: string]: unknown } | null) | undefined
          noise_reduction?:
            | { type: NoiseReductionType; strength?: RealtimeNoiseReductionStrength | undefined }
            | ({ [x: string]: unknown } | null)
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
type ResponseTextParam = {
  format?: TextResponseFormatConfiguration | undefined
  verbosity?: Verbosity | undefined
}
type ToolsArray = Tool[]
type ToolChoiceAllowed = {
  type: 'allowed_tools'
  mode: 'auto' | 'required'
  tools: { [x: string]: unknown }[]
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
type CyberAccessProgramEnum = 'standard' | 'daybreak_blue' | 'daybreak_red'
type AccessProgramsParam = { cyber?: CyberAccessProgramEnum | undefined }
type ImageContextCompression = 'auto' | 'enabled' | 'disabled'
type ImageOptionsParam = { context_compression?: ImageContextCompression | undefined }
type ResponsePromptCacheOptionsParam = {
  ttl?: '30m' | '12h' | undefined
  mode?: PromptCacheModeEnum | undefined
  prewarm?: boolean | undefined
  comparison_response_id?: string | ({ [x: string]: unknown } | null) | undefined
}
type ServiceTierResponses =
  | 'auto'
  | 'default'
  | 'flex'
  | 'scale'
  | 'priority'
  | 'fast'
  | 'ultrafast'
  | ({ [x: string]: unknown } | null)
type ReasoningModeEnum = string | 'standard' | 'pro'
type Reasoning = {
  mode?: ReasoningModeEnum | undefined
  effort?: ReasoningEffort | undefined
  summary?: 'auto' | 'concise' | 'detailed' | ({ [x: string]: unknown } | null) | undefined
  context?: 'auto' | 'current_turn' | 'all_turns' | ({ [x: string]: unknown } | null) | undefined
  generate_summary?: 'auto' | 'concise' | 'detailed' | ({ [x: string]: unknown } | null) | undefined
}
type InputParam = string | InputItem[]
type BackgroundCompletionWindowEnum = 'soonest' | '2h' | '8h'
type BackgroundOptionsParam = {
  completion_window?: BackgroundCompletionWindowEnum | undefined
  continuation_id?: string | undefined
}
type ResponseStreamOptions =
  | { include_obfuscation?: boolean | undefined }
  | ({ [x: string]: unknown } | null)
type ConversationParam_2 = { id: string }
type ConversationParam = string | ConversationParam_2
type ContextManagementParam = {
  type: string
  compact_threshold?: number | ({ [x: string]: unknown } | null) | undefined
}
type CreateResponse = {
  metadata?: Metadata | undefined
  top_logprobs?: number | undefined
  temperature?: number | ({ [x: string]: unknown } | null) | undefined
  top_p?: number | ({ [x: string]: unknown } | null) | undefined
  user?: (string | null) | undefined
  safety_identifier?: string | ({ [x: string]: unknown } | null) | undefined
  prompt_cache_key?: string | ({ [x: string]: unknown } | null) | undefined
  prompt_cache_retention?: 'in_memory' | '24h' | ({ [x: string]: unknown } | null) | undefined
  previous_response_id?: string | ({ [x: string]: unknown } | null) | undefined
  model?: ModelIdsResponses | undefined
  background?: boolean | ({ [x: string]: unknown } | null) | undefined
  max_tool_calls?: number | ({ [x: string]: unknown } | null) | undefined
  text?: ResponseTextParam | undefined
  tools?: ToolsArray | undefined
  tool_choice?: ToolChoiceParam | undefined
  prompt?: Prompt | undefined
  access_programs?: AccessProgramsParam | undefined
  image?: ImageOptionsParam | undefined
  prompt_cache_options?: ResponsePromptCacheOptionsParam | undefined
  service_tier?: ServiceTierResponses | undefined
  truncation?: 'auto' | 'disabled' | ({ [x: string]: unknown } | null) | undefined
  reasoning?: Reasoning | ({ [x: string]: unknown } | null) | undefined
  input?: InputParam | undefined
  include?: IncludeEnum[] | ({ [x: string]: unknown } | null) | undefined
  parallel_tool_calls?: boolean | ({ [x: string]: unknown } | null) | undefined
  store?: boolean | ({ [x: string]: unknown } | null) | undefined
  instructions?: string | ({ [x: string]: unknown } | null) | undefined
  moderation?: ModerationParam | ({ [x: string]: unknown } | null) | undefined
  background_options?: BackgroundOptionsParam | undefined
  stream?: boolean | ({ [x: string]: unknown } | null) | undefined
  stream_options?: ResponseStreamOptions | undefined
  conversation?: ConversationParam | ({ [x: string]: unknown } | null) | undefined
  context_management?: ContextManagementParam[] | ({ [x: string]: unknown } | null) | undefined
  max_output_tokens?: number | ({ [x: string]: unknown } | null) | undefined
}
type ResolvedImageContextCompressionEnum = 'enabled' | 'disabled'
type ResolvedImageOptions = { context_compression: ResolvedImageContextCompressionEnum }
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
type ResponseError =
  | {
      type?: string | ({ [x: string]: unknown } | null) | undefined
      param?: string | ({ [x: string]: unknown } | null) | undefined
      code: ResponseErrorCode
      message: string
      misalignment?: MisalignmentErrorDetailsResource | undefined
    }
  | ({ [x: string]: unknown } | null)
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
type CustomToolCallOutputResource = {
  type: 'custom_tool_call_output'
  id: string
  call_id: string
  caller?: ToolCallCallerParam | ({ [x: string]: unknown } | null) | undefined
  output: string | FunctionAndCustomToolCallOutput[]
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
type PromptCacheOptions = {
  ttl: '30m' | '12h'
  mode: PromptCacheModeEnum
  comparison_response_id?: string | ({ [x: string]: unknown } | null) | undefined
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
type Response = {
  metadata?: Metadata | undefined
  top_logprobs?: number | ({ [x: string]: unknown } | null) | undefined
  temperature?: number | ({ [x: string]: unknown } | null) | undefined
  top_p?: number | ({ [x: string]: unknown } | null) | undefined
  user?: (string | null) | undefined
  safety_identifier?: string | ({ [x: string]: unknown } | null) | undefined
  prompt_cache_key?: string | ({ [x: string]: unknown } | null) | undefined
  prompt_cache_retention?: 'in_memory' | '24h' | ({ [x: string]: unknown } | null) | undefined
  previous_response_id?: string | ({ [x: string]: unknown } | null) | undefined
  model?: ModelIdsResponses | undefined
  background?: boolean | ({ [x: string]: unknown } | null) | undefined
  max_tool_calls?: number | ({ [x: string]: unknown } | null) | undefined
  text?: ResponseTextParam | undefined
  tools?: ToolsArray | undefined
  tool_choice?: ToolChoiceParam | undefined
  prompt?: Prompt | undefined
  image?: ResolvedImageOptions | undefined
  service_tier?: ServiceTierResponses | undefined
  truncation?: 'auto' | 'disabled' | ({ [x: string]: unknown } | null) | undefined
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
  access_programs: AccessProgramsBody | ({ [x: string]: unknown } | null)
  created_at: number
  completed_at?: number | ({ [x: string]: unknown } | null) | undefined
  error: ResponseError
  incomplete_details:
    | { reason?: 'max_output_tokens' | 'max_messages' | 'content_filter' | 'steered' | undefined }
    | ({ [x: string]: unknown } | null)
  input_transformations?: ReasoningInputTransformation[] | undefined
  output: OutputItem[]
  reasoning?: Reasoning | ({ [x: string]: unknown } | null) | undefined
  instructions: string | InputItem[] | ({ [x: string]: unknown } | null)
  output_text?: string | ({ [x: string]: unknown } | null) | undefined
  usage?: ResponseUsage | ({ [x: string]: unknown } | null) | undefined
  tool_usage?: ResponseToolUsage | undefined
  prompt_cache_options?: PromptCacheOptions | undefined
  prompt_cache_diagnostics?: PromptCacheDiagnostics | undefined
  moderation?: Moderation | ({ [x: string]: unknown } | null) | undefined
  parallel_tool_calls: boolean
  conversation?: ResponseConversation | ({ [x: string]: unknown } | null) | undefined
  max_output_tokens?: number | ({ [x: string]: unknown } | null) | undefined
}
type ResponseAudioDeltaEvent = {
  type: 'response.audio.delta'
  sequence_number: number
  delta: string
}
type ResponseAudioDoneEvent = { type: 'response.audio.done'; sequence_number: number }
type ResponseAudioTranscriptDeltaEvent = {
  type: 'response.audio.transcript.delta'
  delta: string
  sequence_number: number
}
type ResponseAudioTranscriptDoneEvent = {
  type: 'response.audio.transcript.done'
  sequence_number: number
}
type ResponseCodeInterpreterCallCodeDeltaEvent = {
  type: 'response.code_interpreter_call_code.delta'
  output_index: number
  item_id: string
  delta: string
  sequence_number: number
}
type ResponseCodeInterpreterCallCodeDoneEvent = {
  type: 'response.code_interpreter_call_code.done'
  output_index: number
  item_id: string
  code: string
  sequence_number: number
}
type ResponseCodeInterpreterCallCompletedEvent = {
  type: 'response.code_interpreter_call.completed'
  output_index: number
  item_id: string
  sequence_number: number
}
type ResponseCodeInterpreterCallInProgressEvent = {
  type: 'response.code_interpreter_call.in_progress'
  output_index: number
  item_id: string
  sequence_number: number
}
type ResponseCodeInterpreterCallInterpretingEvent = {
  type: 'response.code_interpreter_call.interpreting'
  output_index: number
  item_id: string
  sequence_number: number
}
type ResponseCompactionCompactingStreamingEvent = {
  type: 'response.compaction.compacting'
  sequence_number: number
  output_index: number
  item_id: string
}
type ResponseCompletedEvent = {
  type: 'response.completed'
  response: Response
  sequence_number: number
}
type OutputContent = OutputTextContent | RefusalContent | ReasoningTextContent
type ResponseContentPartAddedEvent = {
  type: 'response.content_part.added'
  item_id: string
  output_index: number
  content_index: number
  part: OutputContent
  sequence_number: number
}
type ResponseContentPartDoneEvent = {
  type: 'response.content_part.done'
  item_id: string
  output_index: number
  content_index: number
  sequence_number: number
  part: OutputContent
}
type ResponseCreatedEvent = {
  type: 'response.created'
  response: Response
  sequence_number: number
}
type ResponseErrorEvent = {
  type: 'error'
  code: string | ({ [x: string]: unknown } | null)
  message: string
  param: string | ({ [x: string]: unknown } | null)
  sequence_number: number
}
type ResponseFileSearchCallCompletedEvent = {
  type: 'response.file_search_call.completed'
  output_index: number
  item_id: string
  sequence_number: number
}
type ResponseFileSearchCallInProgressEvent = {
  type: 'response.file_search_call.in_progress'
  output_index: number
  item_id: string
  sequence_number: number
}
type ResponseFileSearchCallSearchingEvent = {
  type: 'response.file_search_call.searching'
  output_index: number
  item_id: string
  sequence_number: number
}
type ResponseFunctionCallArgumentsDeltaEvent = {
  type: 'response.function_call_arguments.delta'
  item_id: string
  output_index: number
  sequence_number: number
  delta: string
}
type ResponseFunctionCallArgumentsDoneEvent = {
  type: 'response.function_call_arguments.done'
  item_id: string
  output_index: number
  sequence_number: number
  arguments: string
}
type ResponseShellCallCommandAddedStreamingEvent = {
  type: 'response.shell_call_command.added'
  sequence_number: number
  output_index: number
  command_index: number
  command: string
}
type ResponseShellCallCommandDeltaStreamingEvent = {
  type: 'response.shell_call_command.delta'
  sequence_number: number
  output_index: number
  command_index: number
  delta: string
  obfuscation?: string | undefined
}
type ResponseShellCallCommandDoneStreamingEvent = {
  type: 'response.shell_call_command.done'
  sequence_number: number
  output_index: number
  command_index: number
  command: string
}
type ShellCallOutputDelta = { stdout?: string | undefined; stderr?: string | undefined }
type ResponseShellCallOutputContentDeltaStreamingEvent = {
  type: 'response.shell_call_output_content.delta'
  sequence_number: number
  item_id: string
  output_index: number
  command_index: number
  delta: ShellCallOutputDelta
}
type ResponseShellCallOutputContentDoneStreamingEvent = {
  type: 'response.shell_call_output_content.done'
  sequence_number: number
  item_id: string
  output_index: number
  command_index: number
  output: FunctionShellCallOutputContent[]
}
type ResponseInProgressEvent = {
  type: 'response.in_progress'
  response: Response
  sequence_number: number
}
type ResponseFailedEvent = { type: 'response.failed'; sequence_number: number; response: Response }
type ResponseIncompleteEvent = {
  type: 'response.incomplete'
  response: Response
  sequence_number: number
}
type ResponseOutputItemAddedEvent = {
  type: 'response.output_item.added'
  output_index: number
  sequence_number: number
  item: OutputItem
}
type ResponseOutputItemDoneEvent = {
  type: 'response.output_item.done'
  output_index: number
  sequence_number: number
  item: OutputItem
}
type ResponseReasoningSummaryPartAddedEvent = {
  type: 'response.reasoning_summary_part.added'
  item_id: string
  output_index: number
  summary_index: number
  sequence_number: number
  part: { type: 'summary_text'; text: string }
}
type ResponseReasoningSummaryPartDoneEvent = {
  type: 'response.reasoning_summary_part.done'
  item_id: string
  output_index: number
  summary_index: number
  status?: 'incomplete' | undefined
  sequence_number: number
  part: { type: 'summary_text'; text: string }
}
type ResponseReasoningSummaryTextDeltaEvent = {
  type: 'response.reasoning_summary_text.delta'
  item_id: string
  output_index: number
  summary_index: number
  delta: string
  sequence_number: number
}
type ResponseReasoningSummaryTextDoneEvent = {
  type: 'response.reasoning_summary_text.done'
  item_id: string
  output_index: number
  summary_index: number
  text: string
  sequence_number: number
}
type ResponseReasoningTextDeltaEvent = {
  type: 'response.reasoning_text.delta'
  item_id: string
  output_index: number
  content_index: number
  delta: string
  sequence_number: number
}
type ResponseReasoningTextDoneEvent = {
  type: 'response.reasoning_text.done'
  item_id: string
  output_index: number
  content_index: number
  text: string
  sequence_number: number
}
type ResponseRefusalDeltaEvent = {
  type: 'response.refusal.delta'
  item_id: string
  output_index: number
  content_index: number
  delta: string
  sequence_number: number
}
type ResponseRefusalDoneEvent = {
  type: 'response.refusal.done'
  item_id: string
  output_index: number
  content_index: number
  refusal: string
  sequence_number: number
}
type ResponseLogProb = {
  token: string
  logprob: number
  top_logprobs?: { token?: string | undefined; logprob?: number | undefined }[] | undefined
}
type ResponseTextDeltaEvent = {
  type: 'response.output_text.delta'
  item_id: string
  output_index: number
  content_index: number
  delta: string
  sequence_number: number
  logprobs: ResponseLogProb[]
}
type ResponseTextDoneEvent = {
  type: 'response.output_text.done'
  item_id: string
  output_index: number
  content_index: number
  text: string
  sequence_number: number
  logprobs: ResponseLogProb[]
}
type ResponseWebSearchCallCompletedEvent = {
  type: 'response.web_search_call.completed'
  output_index: number
  item_id: string
  sequence_number: number
}
type ResponseWebSearchCallInProgressEvent = {
  type: 'response.web_search_call.in_progress'
  output_index: number
  item_id: string
  sequence_number: number
}
type ResponseWebSearchCallSearchingEvent = {
  type: 'response.web_search_call.searching'
  output_index: number
  item_id: string
  sequence_number: number
}
type ResponseImageGenCallCompletedEvent = {
  type: 'response.image_generation_call.completed'
  output_index: number
  sequence_number: number
  item_id: string
}
type ResponseImageGenCallGeneratingEvent = {
  type: 'response.image_generation_call.generating'
  output_index: number
  item_id: string
  sequence_number: number
}
type ResponseImageGenCallInProgressEvent = {
  type: 'response.image_generation_call.in_progress'
  output_index: number
  item_id: string
  sequence_number: number
}
type ResponseImageGenCallPartialImageEvent = {
  type: 'response.image_generation_call.partial_image'
  output_index: number
  item_id: string
  sequence_number: number
  partial_image_index: number
  partial_image_b64: string
  size?: string | undefined
  quality?: string | undefined
  background?: string | undefined
  output_format?: string | undefined
}
type ResponseMCPCallArgumentsDeltaEvent = {
  type: 'response.mcp_call_arguments.delta'
  output_index: number
  item_id: string
  delta: string
  sequence_number: number
}
type ResponseMCPCallArgumentsDoneEvent = {
  type: 'response.mcp_call_arguments.done'
  output_index: number
  item_id: string
  arguments: string
  sequence_number: number
}
type ResponseMCPCallCompletedEvent = {
  type: 'response.mcp_call.completed'
  item_id: string
  output_index: number
  sequence_number: number
}
type ResponseMCPCallFailedEvent = {
  type: 'response.mcp_call.failed'
  item_id: string
  output_index: number
  sequence_number: number
}
type ResponseMCPCallInProgressEvent = {
  type: 'response.mcp_call.in_progress'
  sequence_number: number
  output_index: number
  item_id: string
}
type ResponseMCPListToolsCompletedEvent = {
  type: 'response.mcp_list_tools.completed'
  item_id: string
  output_index: number
  sequence_number: number
}
type ResponseMCPListToolsFailedEvent = {
  type: 'response.mcp_list_tools.failed'
  item_id: string
  output_index: number
  sequence_number: number
}
type ResponseMCPListToolsInProgressEvent = {
  type: 'response.mcp_list_tools.in_progress'
  item_id: string
  output_index: number
  sequence_number: number
}
type ResponseOutputTextAnnotationAddedEvent = {
  type: 'response.output_text.annotation.added'
  item_id: string
  output_index: number
  content_index: number
  annotation_index: number
  sequence_number: number
  annotation: Annotation | ({ [x: string]: unknown } | null)
}
type ResponseQueuedEvent = { type: 'response.queued'; response: Response; sequence_number: number }
type ResponseCustomToolCallInputDeltaEvent = {
  type: 'response.custom_tool_call_input.delta'
  sequence_number: number
  output_index: number
  item_id: string
  delta: string
}
type ResponseCustomToolCallInputDoneEvent = {
  type: 'response.custom_tool_call_input.done'
  sequence_number: number
  output_index: number
  item_id: string
  input: string
}
type ResponseStreamEvent =
  | ResponseAudioDeltaEvent
  | ResponseAudioDoneEvent
  | ResponseAudioTranscriptDeltaEvent
  | ResponseAudioTranscriptDoneEvent
  | ResponseCodeInterpreterCallCodeDeltaEvent
  | ResponseCodeInterpreterCallCodeDoneEvent
  | ResponseCodeInterpreterCallCompletedEvent
  | ResponseCodeInterpreterCallInProgressEvent
  | ResponseCodeInterpreterCallInterpretingEvent
  | ResponseCompactionCompactingStreamingEvent
  | ResponseCompletedEvent
  | ResponseContentPartAddedEvent
  | ResponseContentPartDoneEvent
  | ResponseCreatedEvent
  | ResponseErrorEvent
  | ResponseFileSearchCallCompletedEvent
  | ResponseFileSearchCallInProgressEvent
  | ResponseFileSearchCallSearchingEvent
  | ResponseFunctionCallArgumentsDeltaEvent
  | ResponseFunctionCallArgumentsDoneEvent
  | ResponseShellCallCommandAddedStreamingEvent
  | ResponseShellCallCommandDeltaStreamingEvent
  | ResponseShellCallCommandDoneStreamingEvent
  | ResponseShellCallOutputContentDeltaStreamingEvent
  | ResponseShellCallOutputContentDoneStreamingEvent
  | ResponseInProgressEvent
  | ResponseFailedEvent
  | ResponseIncompleteEvent
  | ResponseOutputItemAddedEvent
  | ResponseOutputItemDoneEvent
  | ResponseReasoningSummaryPartAddedEvent
  | ResponseReasoningSummaryPartDoneEvent
  | ResponseReasoningSummaryTextDeltaEvent
  | ResponseReasoningSummaryTextDoneEvent
  | ResponseReasoningTextDeltaEvent
  | ResponseReasoningTextDoneEvent
  | ResponseRefusalDeltaEvent
  | ResponseRefusalDoneEvent
  | ResponseTextDeltaEvent
  | ResponseTextDoneEvent
  | ResponseWebSearchCallCompletedEvent
  | ResponseWebSearchCallInProgressEvent
  | ResponseWebSearchCallSearchingEvent
  | ResponseImageGenCallCompletedEvent
  | ResponseImageGenCallGeneratingEvent
  | ResponseImageGenCallInProgressEvent
  | ResponseImageGenCallPartialImageEvent
  | ResponseMCPCallArgumentsDeltaEvent
  | ResponseMCPCallArgumentsDoneEvent
  | ResponseMCPCallCompletedEvent
  | ResponseMCPCallFailedEvent
  | ResponseMCPCallInProgressEvent
  | ResponseMCPListToolsCompletedEvent
  | ResponseMCPListToolsFailedEvent
  | ResponseMCPListToolsInProgressEvent
  | ResponseOutputTextAnnotationAddedEvent
  | ResponseQueuedEvent
  | ResponseCustomToolCallInputDeltaEvent
  | ResponseCustomToolCallInputDoneEvent
type InputMessageResource = {
  type?: 'message' | undefined
  role: 'user' | 'system' | 'developer'
  status?: 'in_progress' | 'completed' | 'incomplete' | undefined
  content: InputMessageContentList
  id: string
}
type CustomToolCallResource = {
  type: 'custom_tool_call'
  id: string
  call_id: string
  caller?: ToolCallCaller | ({ [x: string]: unknown } | null) | undefined
  namespace?: string | undefined
  name: string
  input: string
  async?: boolean | undefined
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
type MessageContentImageFileObject = {
  type: 'image_file'
  image_file: { file_id: string; detail?: 'auto' | 'low' | 'high' | undefined }
}
type MessageContentImageUrlObject = {
  type: 'image_url'
  image_url: { url: string; detail?: 'auto' | 'low' | 'high' | undefined }
}
type MessageRequestContentTextObject = { type: 'text'; text: string }
type AssistantToolsFileSearchTypeOnly = { type: 'file_search' }
type CreateMessageRequest = {
  role: 'user' | 'assistant'
  content:
    | string
    | (
        | MessageContentImageFileObject
        | MessageContentImageUrlObject
        | MessageRequestContentTextObject
      )[]
  attachments?:
    | {
        file_id?: string | undefined
        tools?: (AssistantToolsCode | AssistantToolsFileSearchTypeOnly)[] | undefined
      }[]
    | ({ [x: string]: unknown } | null)
    | undefined
  metadata?: Metadata | undefined
}
type CreateThreadRequest = {
  messages?: CreateMessageRequest[] | undefined
  tool_resources?:
    | {
        code_interpreter?: { file_ids?: string[] | undefined } | undefined
        file_search?: { [x: string]: unknown } | { [x: string]: unknown } | undefined
      }
    | ({ [x: string]: unknown } | null)
    | undefined
  metadata?: Metadata | undefined
}
type ThreadObject = {
  id: string
  object: 'thread'
  created_at: number
  tool_resources:
    | {
        code_interpreter?: { file_ids?: string[] | undefined } | undefined
        file_search?: { vector_store_ids?: string[] | undefined } | undefined
      }
    | ({ [x: string]: unknown } | null)
  metadata: Metadata
}
type CreateThreadAndRunRequest = {
  assistant_id: string
  thread?: CreateThreadRequest | undefined
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
    | ({ [x: string]: unknown } | null)
    | undefined
  instructions?: (string | null) | undefined
  tools?:
    | ((AssistantToolsCode | AssistantToolsFileSearch | AssistantToolsFunction)[] | null)
    | undefined
  tool_resources?:
    | ({
        code_interpreter?: { file_ids?: string[] | undefined } | undefined
        file_search?: { vector_store_ids?: string[] | undefined } | undefined
      } | null)
    | undefined
  metadata?: Metadata | undefined
  temperature?: (number | null) | undefined
  top_p?: (number | null) | undefined
  stream?: (boolean | null) | undefined
  max_prompt_tokens?: (number | null) | undefined
  max_completion_tokens?: (number | null) | undefined
  truncation_strategy?:
    | {
        type: 'auto' | 'last_messages'
        last_messages?: number | ({ [x: string]: unknown } | null) | undefined
      }
    | undefined
  tool_choice?: {} | undefined
  parallel_tool_calls?: ParallelToolCalls | undefined
  response_format?: AssistantsApiResponseFormatOption | undefined
}
type RunToolCallObject = {
  id: string
  type: 'function'
  function: { name: string; arguments: string }
}
type RunCompletionUsage =
  | { completion_tokens: number; prompt_tokens: number; total_tokens: number }
  | ({ [x: string]: unknown } | null)
type TruncationObject = {
  type: 'auto' | 'last_messages'
  last_messages?: number | ({ [x: string]: unknown } | null) | undefined
}
type AssistantsNamedToolChoice = {
  type: 'function' | 'code_interpreter' | 'file_search'
  function?: { name: string } | undefined
}
type AssistantsApiToolChoiceOption = 'none' | 'auto' | 'required' | AssistantsNamedToolChoice
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
  truncation_strategy: TruncationObject | ({ [x: string]: unknown } | null)
  tool_choice: AssistantsApiToolChoiceOption | ({ [x: string]: unknown } | null)
  parallel_tool_calls: ParallelToolCalls
  response_format: AssistantsApiResponseFormatOption | ({ [x: string]: unknown } | null)
}
type ThreadStreamEvent = {
  enabled?: boolean | undefined
  event: 'thread.created'
  data: ThreadObject
}
type RunStreamEvent =
  | { event: 'thread.run.created'; data: RunObject }
  | { event: 'thread.run.queued'; data: RunObject }
  | { event: 'thread.run.in_progress'; data: RunObject }
  | { event: 'thread.run.requires_action'; data: RunObject }
  | { event: 'thread.run.completed'; data: RunObject }
  | { event: 'thread.run.incomplete'; data: RunObject }
  | { event: 'thread.run.failed'; data: RunObject }
  | { event: 'thread.run.cancelling'; data: RunObject }
  | { event: 'thread.run.cancelled'; data: RunObject }
  | { event: 'thread.run.expired'; data: RunObject }
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
  function: { name: string; arguments: string; output: string | ({ [x: string]: unknown } | null) }
}
type RunStepDetailsToolCallsObject = {
  type: 'tool_calls'
  tool_calls: (
    | RunStepDetailsToolCallsCodeObject
    | RunStepDetailsToolCallsFileSearchObject
    | RunStepDetailsToolCallsFunctionObject
  )[]
}
type RunStepCompletionUsage =
  | { completion_tokens: number; prompt_tokens: number; total_tokens: number }
  | ({ [x: string]: unknown } | null)
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
  last_error:
    | { code: 'server_error' | 'rate_limit_exceeded'; message: string }
    | ({ [x: string]: unknown } | null)
  expired_at: number | ({ [x: string]: unknown } | null)
  cancelled_at: number | ({ [x: string]: unknown } | null)
  failed_at: number | ({ [x: string]: unknown } | null)
  completed_at: number | ({ [x: string]: unknown } | null)
  metadata: Metadata
  usage: RunStepCompletionUsage
}
type RunStepDeltaStepDetailsMessageCreationObject = {
  type: 'message_creation'
  message_creation?: { message_id?: string | undefined } | undefined
}
type RunStepDeltaStepDetailsToolCallsCodeOutputLogsObject = {
  index: number
  type: 'logs'
  logs?: string | undefined
}
type RunStepDeltaStepDetailsToolCallsCodeOutputImageObject = {
  index: number
  type: 'image'
  image?: { file_id?: string | undefined } | undefined
}
type RunStepDeltaStepDetailsToolCallsCodeObject = {
  index: number
  id?: string | undefined
  type: 'code_interpreter'
  code_interpreter?:
    | {
        input?: string | undefined
        outputs?:
          | (
              | RunStepDeltaStepDetailsToolCallsCodeOutputLogsObject
              | RunStepDeltaStepDetailsToolCallsCodeOutputImageObject
            )[]
          | undefined
      }
    | undefined
}
type RunStepDeltaStepDetailsToolCallsFileSearchObject = {
  index: number
  id?: string | undefined
  type: 'file_search'
  file_search: { [x: string]: unknown }
}
type RunStepDeltaStepDetailsToolCallsFunctionObject = {
  index: number
  id?: string | undefined
  type: 'function'
  function?:
    | {
        name?: string | undefined
        arguments?: string | undefined
        output?: string | ({ [x: string]: unknown } | null) | undefined
      }
    | undefined
}
type RunStepDeltaStepDetailsToolCallsObject = {
  type: 'tool_calls'
  tool_calls?:
    | (
        | RunStepDeltaStepDetailsToolCallsCodeObject
        | RunStepDeltaStepDetailsToolCallsFileSearchObject
        | RunStepDeltaStepDetailsToolCallsFunctionObject
      )[]
    | undefined
}
type RunStepDeltaObject = {
  id: string
  object: 'thread.run.step.delta'
  delta: {
    step_details?:
      | RunStepDeltaStepDetailsMessageCreationObject
      | RunStepDeltaStepDetailsToolCallsObject
      | undefined
  }
}
type RunStepStreamEvent =
  | { event: 'thread.run.step.created'; data: RunStepObject }
  | { event: 'thread.run.step.in_progress'; data: RunStepObject }
  | { event: 'thread.run.step.delta'; data: RunStepDeltaObject }
  | { event: 'thread.run.step.completed'; data: RunStepObject }
  | { event: 'thread.run.step.failed'; data: RunStepObject }
  | { event: 'thread.run.step.cancelled'; data: RunStepObject }
  | { event: 'thread.run.step.expired'; data: RunStepObject }
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
type MessageObject = {
  id: string
  object: 'thread.message'
  created_at: number
  thread_id: string
  status: 'in_progress' | 'incomplete' | 'completed'
  incomplete_details:
    | { reason: 'content_filter' | 'max_tokens' | 'run_cancelled' | 'run_expired' | 'run_failed' }
    | ({ [x: string]: unknown } | null)
  completed_at: number | ({ [x: string]: unknown } | null)
  incomplete_at: number | ({ [x: string]: unknown } | null)
  role: 'user' | 'assistant'
  content: (
    | MessageContentImageFileObject
    | MessageContentImageUrlObject
    | MessageContentTextObject
    | MessageContentRefusalObject
  )[]
  assistant_id: string | ({ [x: string]: unknown } | null)
  run_id: string | ({ [x: string]: unknown } | null)
  attachments:
    | {
        file_id?: string | undefined
        tools?: (AssistantToolsCode | AssistantToolsFileSearchTypeOnly)[] | undefined
      }[]
    | ({ [x: string]: unknown } | null)
  metadata: Metadata
}
type MessageDeltaContentImageFileObject = {
  index: number
  type: 'image_file'
  image_file?:
    | { file_id?: string | undefined; detail?: 'auto' | 'low' | 'high' | undefined }
    | undefined
}
type MessageDeltaContentTextAnnotationsFileCitationObject = {
  index: number
  type: 'file_citation'
  text?: string | undefined
  file_citation?: { file_id?: string | undefined; quote?: string | undefined } | undefined
  start_index?: number | undefined
  end_index?: number | undefined
}
type MessageDeltaContentTextAnnotationsFilePathObject = {
  index: number
  type: 'file_path'
  text?: string | undefined
  file_path?: { file_id?: string | undefined } | undefined
  start_index?: number | undefined
  end_index?: number | undefined
}
type MessageDeltaContentTextObject = {
  index: number
  type: 'text'
  text?:
    | {
        value?: string | undefined
        annotations?:
          | (
              | MessageDeltaContentTextAnnotationsFileCitationObject
              | MessageDeltaContentTextAnnotationsFilePathObject
            )[]
          | undefined
      }
    | undefined
}
type MessageDeltaContentRefusalObject = {
  index: number
  type: 'refusal'
  refusal?: string | undefined
}
type MessageDeltaContentImageUrlObject = {
  index: number
  type: 'image_url'
  image_url?: { url?: string | undefined; detail?: 'auto' | 'low' | 'high' | undefined } | undefined
}
type MessageDeltaObject = {
  id: string
  object: 'thread.message.delta'
  delta: {
    role?: 'user' | 'assistant' | undefined
    content?:
      | (
          | MessageDeltaContentImageFileObject
          | MessageDeltaContentTextObject
          | MessageDeltaContentRefusalObject
          | MessageDeltaContentImageUrlObject
        )[]
      | undefined
  }
}
type MessageStreamEvent =
  | { event: 'thread.message.created'; data: MessageObject }
  | { event: 'thread.message.in_progress'; data: MessageObject }
  | { event: 'thread.message.delta'; data: MessageDeltaObject }
  | { event: 'thread.message.completed'; data: MessageObject }
  | { event: 'thread.message.incomplete'; data: MessageObject }
type ErrorEvent = { event: 'error'; data: Error }
type DoneEvent = { event: 'done'; data: '[DONE]' }
type AssistantStreamEvent =
  | ThreadStreamEvent
  | RunStreamEvent
  | RunStepStreamEvent
  | MessageStreamEvent
  | ErrorEvent
  | DoneEvent
type ModifyThreadRequest = {
  tool_resources?:
    | {
        code_interpreter?: { file_ids?: string[] | undefined } | undefined
        file_search?: { vector_store_ids?: string[] | undefined } | undefined
      }
    | ({ [x: string]: unknown } | null)
    | undefined
  metadata?: Metadata | undefined
}
type DeleteThreadResponse = { id: string; deleted: boolean; object: 'thread.deleted' }
type ListMessagesResponse = {
  object: string
  data: MessageObject[]
  first_id: string
  last_id: string
  has_more: boolean
}
type ModifyMessageRequest = { metadata?: Metadata | undefined }
type DeleteMessageResponse = { id: string; deleted: boolean; object: 'thread.message.deleted' }
type ListRunsResponse = {
  object: string
  data: RunObject[]
  first_id: string
  last_id: string
  has_more: boolean
}
type CreateRunRequest = {
  assistant_id: string
  model?: string | AssistantSupportedModels | ({ [x: string]: unknown } | null) | undefined
  reasoning_effort?: ReasoningEffort | undefined
  instructions?: (string | null) | undefined
  additional_instructions?: (string | null) | undefined
  additional_messages?: (CreateMessageRequest[] | null) | undefined
  tools?:
    | ((AssistantToolsCode | AssistantToolsFileSearch | AssistantToolsFunction)[] | null)
    | undefined
  metadata?: Metadata | undefined
  temperature?: (number | null) | undefined
  top_p?: (number | null) | undefined
  stream?: (boolean | null) | undefined
  max_prompt_tokens?: (number | null) | undefined
  max_completion_tokens?: (number | null) | undefined
  truncation_strategy?:
    | {
        type: 'auto' | 'last_messages'
        last_messages?: number | ({ [x: string]: unknown } | null) | undefined
      }
    | undefined
  tool_choice?: {} | undefined
  parallel_tool_calls?: ParallelToolCalls | undefined
  response_format?: AssistantsApiResponseFormatOption | undefined
}
type ModifyRunRequest = { metadata?: Metadata | undefined }
type ListRunStepsResponse = {
  object: string
  data: RunStepObject[]
  first_id: string
  last_id: string
  has_more: boolean
}
type SubmitToolOutputsRunRequest = {
  tool_outputs: { tool_call_id?: string | undefined; output?: string | undefined }[]
  stream?: boolean | ({ [x: string]: unknown } | null) | undefined
}
type CreateUploadRequest = {
  filename: string
  purpose: 'assistants' | 'batch' | 'fine-tune' | 'vision'
  bytes: number
  mime_type: string
  expires_after?: FileExpirationAfter | undefined
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
  file?: OpenAIFile | ({ [x: string]: unknown } | null) | undefined
}
type CompleteUploadRequest = { part_ids: string[]; md5?: string | undefined }
type AddUploadPartRequest = { data: File }
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
  expires_at?: number | ({ [x: string]: unknown } | null) | undefined
  last_active_at: number | ({ [x: string]: unknown } | null)
  metadata: Metadata
}
type ListVectorStoresResponse = {
  object: string
  data: VectorStoreObject[]
  first_id: string
  last_id: string
  has_more: boolean
}
type AutoChunkingStrategyRequestParam = { type: 'auto' }
type StaticChunkingStrategy = { max_chunk_size_tokens: number; chunk_overlap_tokens: number }
type StaticChunkingStrategyRequestParam = { type: 'static'; static: StaticChunkingStrategy }
type CreateVectorStoreRequest = {
  file_ids?: string[] | undefined
  name?: string | undefined
  description?: string | undefined
  expires_after?: VectorStoreExpirationAfter | undefined
  chunking_strategy?:
    | AutoChunkingStrategyRequestParam
    | StaticChunkingStrategyRequestParam
    | undefined
  metadata?: Metadata | undefined
}
type UpdateVectorStoreRequest = {
  name?: (string | null) | undefined
  expires_after?: { anchor: 'last_active_at'; days: number } | undefined
  metadata?: Metadata | undefined
}
type DeleteVectorStoreResponse = { id: string; deleted: boolean; object: 'vector_store.deleted' }
type CreateVectorStoreFileBatchRequest = { [x: string]: unknown } | { [x: string]: unknown }
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
type StaticChunkingStrategyResponseParam = { type: 'static'; static: StaticChunkingStrategy }
type OtherChunkingStrategyResponseParam = { type: 'other' }
type VectorStoreFileObject = {
  id: string
  object: 'vector_store.file'
  usage_bytes: number
  created_at: number
  vector_store_id: string
  status: 'in_progress' | 'completed' | 'cancelled' | 'failed'
  last_error:
    | { code: 'server_error' | 'unsupported_file' | 'invalid_file'; message: string }
    | ({ [x: string]: unknown } | null)
  chunking_strategy?:
    | StaticChunkingStrategyResponseParam
    | OtherChunkingStrategyResponseParam
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
type ChunkingStrategyRequestParam =
  | AutoChunkingStrategyRequestParam
  | StaticChunkingStrategyRequestParam
type CreateVectorStoreFileRequest = {
  file_id: string
  chunking_strategy?: ChunkingStrategyRequestParam | undefined
  attributes?: VectorStoreFileAttributes | undefined
}
type DeleteVectorStoreFileResponse = {
  id: string
  deleted: boolean
  object: 'vector_store.file.deleted'
}
type UpdateVectorStoreFileAttributesRequest = { attributes: VectorStoreFileAttributes }
type VectorStoreFileContentResponse = {
  object: 'vector_store.file_content.page'
  data: { type?: string | undefined; text?: string | undefined }[]
  has_more: boolean
  next_page: string | ({ [x: string]: unknown } | null)
}
type VectorStoreSearchRequest = {
  query: string | string[]
  rewrite_query?: boolean | undefined
  max_num_results?: number | undefined
  filters?: ComparisonFilter | CompoundFilter | undefined
  ranking_options?:
    | {
        ranker?: 'none' | 'auto' | 'default-2024-11-15' | undefined
        score_threshold?: number | undefined
      }
    | undefined
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
  next_page: string | ({ [x: string]: unknown } | null)
}
type CreateConversationBody = {
  metadata?: Metadata | ({ [x: string]: unknown } | null) | undefined
  items?: InputItem[] | ({ [x: string]: unknown } | null) | undefined
}
type DeletedConversationResource = { object: 'conversation.deleted'; deleted: boolean; id: string }
type UpdateConversationBody = { metadata: Metadata }
type SafetyCaseNoticeType = 'warning' | 'deactivation'
type SafetyCaseNotice = { type: SafetyCaseNoticeType }
type SafetyCaseResource = {
  id: string
  object: 'safety.case'
  created_at: number
  entity_identifier: string
  reason: string | ({ [x: string]: unknown } | null)
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
  reason: string | ({ [x: string]: unknown } | null)
  detailed_explanation?: string | ({ [x: string]: unknown } | null) | undefined
}
type ExternalKeyPurpose = 'ekm' | 'psp_decryption'
type AwsExternalKeyParams = {
  name: string
  type: 'aws'
  role_arn: string
  kms_arn: string
  external_id: string
  purpose?: ExternalKeyPurpose | undefined
}
type GcpExternalKeyParams = {
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
  purpose?: ExternalKeyPurpose | undefined
  kms_key_version?: string | undefined
}
type AzureExternalKeyParams = {
  name: string
  type: 'azure'
  tenant_id: string
  vault_uri: string
  key_name: string
  purpose?: ExternalKeyPurpose | undefined
  key_version?: string | undefined
}
type OciExternalKeyParams = {
  name: string
  type: 'oci'
  region: string
  vault_ocid: string
  key_ocid: string
  purpose?: ExternalKeyPurpose | undefined
  key_version_ocid?: string | undefined
}
type V1OrganizationExternalKeysPostRequest =
  | AwsExternalKeyParams
  | GcpExternalKeyParams
  | AzureExternalKeyParams
  | OciExternalKeyParams
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
type OrderEnum = 'asc' | 'desc'
type ListExternalKeysResource = {
  object: 'list'
  data: ExternalKeyResource[]
  first_id: string | ({ [x: string]: unknown } | null)
  last_id: string | ({ [x: string]: unknown } | null)
  has_more: boolean
}
type ValidateExternalKeyResource = { status: string }
type DiscoveryVerification = {
  type: 'discovery'
  discovery_url: string | ({ [x: string]: unknown } | null)
}
type UploadedJwksVerification = {
  type: 'uploaded_jwks'
  jwks: { [x: string]: { [x: string]: unknown } }
}
type Transformation = { attribute: string; expression: string }
type PlatformProvider = {
  object: 'organization.workload_identity_provider'
  id: string
  type: 'oidc'
  name: string
  issuer: string
  audience: string
  verification: DiscoveryVerification | UploadedJwksVerification
  description: string | ({ [x: string]: unknown } | null)
  attribute_transformations: Transformation[]
  enabled: boolean
  created_at: number
  updated_at: number
}
type PlatformProviderListResource = {
  object: 'list'
  data: PlatformProvider[]
  first_id: string | ({ [x: string]: unknown } | null)
  last_id: string | ({ [x: string]: unknown } | null)
  has_more: boolean
}
type DiscoveryVerificationParam = {
  type: 'discovery'
  discovery_url: string | ({ [x: string]: unknown } | null)
}
type UploadedJwksVerificationParam = {
  type: 'uploaded_jwks'
  jwks: { [x: string]: { [x: string]: unknown } }
}
type TransformationParam = { attribute: string; expression: string }
type CreatePlatformWorkloadIdentityProviderBody = {
  name: string
  type: 'oidc'
  issuer: string
  audience: string
  verification?: DiscoveryVerificationParam | UploadedJwksVerificationParam | undefined
  description?: string | undefined
  attribute_transformations?: TransformationParam[] | undefined
  enabled?: boolean | undefined
}
type UpdatePlatformWorkloadIdentityProviderBody = {
  name?: string | undefined
  issuer?: string | undefined
  audience?: string | undefined
  verification?: DiscoveryVerificationParam | UploadedJwksVerificationParam | undefined
  description?: string | ({ [x: string]: unknown } | null) | undefined
  attribute_transformations?: TransformationParam[] | undefined
  enabled?: boolean | undefined
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
  name: string | ({ [x: string]: unknown } | null)
  description: string | ({ [x: string]: unknown } | null)
  attribute_matchers: { [x: string]: string | boolean | number | number }
  permissions: DefaultPermissions | RestrictedPermissions
  enabled: boolean
  created_at: number
  updated_at: number
}
type PlatformFederationRuleListResource = {
  object: 'list'
  data: PlatformFederationRule[]
  first_id: string | ({ [x: string]: unknown } | null)
  last_id: string | ({ [x: string]: unknown } | null)
  has_more: boolean
}
type DefaultPermissionsParam = { type: 'service_account_default' }
type RestrictedPermissionsParam = { type: 'restricted'; scopes: string[] }
type CreatePlatformWorkloadIdentityFederationRuleBody = {
  project_id: string
  service_account_id: string
  name?: string | undefined
  description?: string | undefined
  attribute_matchers: { [x: string]: string | boolean | number | number }
  permissions?: DefaultPermissionsParam | RestrictedPermissionsParam | undefined
  enabled?: boolean | undefined
}
type UpdatePlatformWorkloadIdentityFederationRuleBody = {
  name?: string | ({ [x: string]: unknown } | null) | undefined
  description?: string | ({ [x: string]: unknown } | null) | undefined
  attribute_matchers?: { [x: string]: string | boolean | number | number } | undefined
  permissions?: DefaultPermissionsParam | RestrictedPermissionsParam | undefined
  enabled?: boolean | undefined
}
type PlatformFederationRuleDeletedResource = {
  object: 'organization.workload_identity_federation_rule.deleted'
  id: string
  deleted: boolean
}
type DecisionsUsageBucketWidth = '1m' | '1h' | '1d'
type DecisionsUsageGroupBy =
  | 'project_id'
  | 'user_id'
  | 'api_key_id'
  | 'model'
  | 'batch'
  | 'service_tier'
  | 'api_source'
type DecisionsUsageApiSource = 'agents_api' | 'unlabeled'
type DecisionsUsageResult = {
  api_source?: DecisionsUsageApiSource | ({ [x: string]: unknown } | null) | undefined
  object: 'organization.usage.decisions.result'
  input_tokens: number
  input_cached_tokens?: number | ({ [x: string]: unknown } | null) | undefined
  input_cache_write_tokens?: number | ({ [x: string]: unknown } | null) | undefined
  input_cache_write_30m_tokens?: number | ({ [x: string]: unknown } | null) | undefined
  input_cache_write_12h_tokens?: number | ({ [x: string]: unknown } | null) | undefined
  input_uncached_tokens?: number | ({ [x: string]: unknown } | null) | undefined
  output_tokens: number
  input_text_tokens?: number | ({ [x: string]: unknown } | null) | undefined
  output_text_tokens?: number | ({ [x: string]: unknown } | null) | undefined
  input_cached_text_tokens?: number | ({ [x: string]: unknown } | null) | undefined
  input_audio_tokens?: number | ({ [x: string]: unknown } | null) | undefined
  input_cached_audio_tokens?: number | ({ [x: string]: unknown } | null) | undefined
  output_audio_tokens?: number | ({ [x: string]: unknown } | null) | undefined
  input_image_tokens?: number | ({ [x: string]: unknown } | null) | undefined
  input_cached_image_tokens?: number | ({ [x: string]: unknown } | null) | undefined
  output_image_tokens?: number | ({ [x: string]: unknown } | null) | undefined
  num_model_requests: number
  project_id?: string | ({ [x: string]: unknown } | null) | undefined
  user_id?: string | ({ [x: string]: unknown } | null) | undefined
  api_key_id?: string | ({ [x: string]: unknown } | null) | undefined
  model?: string | ({ [x: string]: unknown } | null) | undefined
  batch?: boolean | ({ [x: string]: unknown } | null) | undefined
  service_tier?: string | ({ [x: string]: unknown } | null) | undefined
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
  next_page: string | ({ [x: string]: unknown } | null)
  data: DecisionsUsageBucket[]
}
type DecisionsUsageErrorDetails = {
  code: string | ({ [x: string]: unknown } | null)
  message: string
  param: string | ({ [x: string]: unknown } | null)
  type: string
}
type DecisionsUsageErrorResponse = { error: DecisionsUsageErrorDetails }
type DecisionsUsagePermissionErrorResponse = { error: DecisionsUsageErrorDetails | string }
type ExternalStorageOrder = 'asc' | 'desc'
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
  first_id: string | ({ [x: string]: unknown } | null)
  last_id: string | ({ [x: string]: unknown } | null)
  has_more: boolean
}
type AwsExternalStorageProviderParams = { type: 'aws'; bucket: string; role_arn: string }
type AzureExternalStorageProviderParams = {
  type: 'azure'
  tenant_id: string
  subscription_id: string
  resource_group: string
  account_name: string
  container: string
}
type GcpExternalStorageProviderParams = {
  type: 'gcp'
  bucket: string
  workload_identity_project_number: string
  workload_identity_pool_id: string
  workload_identity_provider_id: string
}
type OciExternalStorageProviderParams = {
  type: 'oci'
  tenancy_ocid: string
  region: string
  bucket: string
}
type CreateExternalStorageBody = {
  project_id: string
  provider:
    | AwsExternalStorageProviderParams
    | AzureExternalStorageProviderParams
    | GcpExternalStorageProviderParams
    | OciExternalStorageProviderParams
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
  subject_prefix?: string | ({ [x: string]: unknown } | null) | undefined
}
type OrganizationSpendLimitResource = {
  object: 'organization.spend_limit'
  threshold_amount: number
  currency: SpendLimitCurrency
  interval: SpendLimitInterval
  enforcement: SpendLimitEnforcement
  notification_channel: EmailNotificationChannel
}
type SpendLimitEmailNotificationChannelParams = {
  type: 'email'
  recipients?: string[] | undefined
  subject_prefix?: string | ({ [x: string]: unknown } | null) | undefined
}
type UpdateOrganizationSpendLimitBody = {
  threshold_amount: number
  currency: 'USD'
  interval: 'month'
  notification_channel?:
    | SpendLimitEmailNotificationChannelParams
    | ({ [x: string]: unknown } | null)
    | undefined
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
type UpdateProjectSpendLimitBody = {
  threshold_amount: number
  currency: 'USD'
  interval: 'month'
  notification_channel?:
    | SpendLimitEmailNotificationChannelParams
    | ({ [x: string]: unknown } | null)
    | undefined
}
type ProjectDefaultServiceTier = 'standard' | 'fast' | 'scale'
type ProjectOptionalServiceTier = 'flex' | 'fast' | 'ultrafast'
type ProjectServiceTierSettingsResource = {
  object: 'project.service_tier_settings'
  default: ProjectDefaultServiceTier
  enabled_tiers: 'all' | ProjectOptionalServiceTier[]
}
type UpdateProjectServiceTierSettingsBody = { [x: string]: unknown } | { [x: string]: unknown }
type CreateProjectServiceAccountApiKeyBody = {
  name?: string | undefined
  scopes?: string[] | undefined
  expires_in_seconds?: number | ({ [x: string]: unknown } | null) | undefined
}
type ServiceAccountApiKeyBody = {
  object: 'organization.project.service_account.api_key'
  value: string
  name: string
  created_at: number
  expires_at?: number | ({ [x: string]: unknown } | null) | undefined
  id: string
}
type CreateContentProvenanceBody = { file: File }
type ProvenanceCheckObject = 'content_provenance_check'
type ProvenanceDetectionResultApi = 'detected' | 'not_detected'
type C2PAValidationStateApi = 'trusted' | 'valid' | 'invalid' | 'not_present'
type C2PAProvenanceResult = {
  type: 'c2pa'
  outcome: ProvenanceDetectionResultApi
  validation_state: C2PAValidationStateApi
  issuer: string | ({ [x: string]: unknown } | null)
  model: string | ({ [x: string]: unknown } | null)
  generated_at: string | ({ [x: string]: unknown } | null)
}
type SynthIDProvenanceResult = {
  type: 'synthid'
  outcome: ProvenanceDetectionResultApi
  model: string | ({ [x: string]: unknown } | null)
  generated_at: string | ({ [x: string]: unknown } | null)
}
type ProvenanceResource = {
  object: ProvenanceCheckObject
  created_at: number
  results: (C2PAProvenanceResult | SynthIDProvenanceResult)[]
}
type VideoModel =
  | string
  | 'sora-2'
  | 'sora-2-pro'
  | 'sora-2-2025-10-06'
  | 'sora-2-pro-2025-10-06'
  | 'sora-2-2025-12-08'
type ImageRefParam_2 = { image_url?: string | undefined; file_id?: string | undefined }
type VideoSeconds = '4' | '8' | '12'
type VideoSize = '720x1280' | '1280x720' | '1024x1792' | '1792x1024'
type CreateVideoJsonBody = {
  model?: VideoModel | undefined
  prompt: string
  input_reference?: ImageRefParam_2 | undefined
  seconds?: VideoSeconds | undefined
  size?: VideoSize | undefined
}
type CreateVideoMultipartBody = {
  model?: VideoModel | undefined
  prompt: string
  input_reference?: File | ImageRefParam_2 | undefined
  seconds?: VideoSeconds | undefined
  size?: VideoSize | undefined
}
type VideoStatus = 'queued' | 'in_progress' | 'completed' | 'failed'
type Error_2 = {
  code: string
  type?: string | ({ [x: string]: unknown } | null) | undefined
  param?: string | ({ [x: string]: unknown } | null) | undefined
  message: string
  headers?: { [x: string]: string } | undefined
  misalignment?: MisalignmentErrorDetailsResource | undefined
}
type VideoResource = {
  id: string
  object: 'video'
  model: VideoModel
  status: VideoStatus
  progress: number
  created_at: number
  completed_at: number | ({ [x: string]: unknown } | null)
  expires_at: number | ({ [x: string]: unknown } | null)
  prompt: string | ({ [x: string]: unknown } | null)
  size: VideoSize
  seconds: string
  remixed_from_video_id: string | ({ [x: string]: unknown } | null)
  error: Error_2 | ({ [x: string]: unknown } | null)
}
type VideoListResource = {
  object: 'list'
  data: VideoResource[]
  first_id: string | ({ [x: string]: unknown } | null)
  last_id: string | ({ [x: string]: unknown } | null)
  has_more: boolean
}
type CreateVideoCharacterBody = { video: File; name: string }
type VideoCharacterResource = {
  id: string | ({ [x: string]: unknown } | null)
  name: string | ({ [x: string]: unknown } | null)
  created_at: number
}
type VideoReferenceInputParam = { id: string }
type CreateVideoEditJsonBody = { video: VideoReferenceInputParam; prompt: string }
type CreateVideoEditMultipartBody = { video: File | VideoReferenceInputParam; prompt: string }
type CreateVideoExtendJsonBody = {
  video: VideoReferenceInputParam
  prompt: string
  seconds: VideoSeconds
}
type CreateVideoExtendMultipartBody = {
  video: VideoReferenceInputParam | File
  prompt: string
  seconds: VideoSeconds
}
type DeletedVideoResource = { object: 'video.deleted'; deleted: boolean; id: string }
type VideoContentVariant = 'video' | 'thumbnail' | 'spritesheet'
type CreateVideoRemixBody = { prompt: string }
type TruncationEnum = 'auto' | 'disabled'
type PersonalityEnum = string | 'friendly' | 'pragmatic'
type TokenCountsBody = {
  model?: string | ({ [x: string]: unknown } | null) | undefined
  input?: string | InputItem[] | ({ [x: string]: unknown } | null) | undefined
  previous_response_id?: string | ({ [x: string]: unknown } | null) | undefined
  tools?: Tool[] | ({ [x: string]: unknown } | null) | undefined
  text?: ResponseTextParam | ({ [x: string]: unknown } | null) | undefined
  reasoning?: Reasoning | ({ [x: string]: unknown } | null) | undefined
  truncation?: TruncationEnum | undefined
  instructions?: string | ({ [x: string]: unknown } | null) | undefined
  personality?: PersonalityEnum | undefined
  conversation?: ConversationParam | ({ [x: string]: unknown } | null) | undefined
  tool_choice?: ToolChoiceParam | ({ [x: string]: unknown } | null) | undefined
  parallel_tool_calls?: boolean | ({ [x: string]: unknown } | null) | undefined
}
type TokenCountsResource = { object: 'response.input_tokens'; input_tokens: number }
type ModelIdsCompaction = ModelIdsResponses | string | ({ [x: string]: unknown } | null)
type PromptCacheRetentionEnum = 'in_memory' | '24h'
type ServiceTierEnum = 'auto' | 'default' | 'fast' | 'flex' | 'priority'
type CompactResponseMethodPublicBody = {
  model: ModelIdsCompaction
  input?: string | InputItem[] | ({ [x: string]: unknown } | null) | undefined
  previous_response_id?: string | ({ [x: string]: unknown } | null) | undefined
  instructions?: string | ({ [x: string]: unknown } | null) | undefined
  image?: ImageOptionsParam | undefined
  prompt_cache_key?: string | ({ [x: string]: unknown } | null) | undefined
  prompt_cache_retention?: PromptCacheRetentionEnum | ({ [x: string]: unknown } | null) | undefined
  prompt_cache_options?: PromptCacheOptionsParam | ({ [x: string]: unknown } | null) | undefined
  service_tier?: ServiceTierEnum | ({ [x: string]: unknown } | null) | undefined
}
type FunctionToolCallOutput = {
  id?: string | undefined
  type: 'function_call_output'
  call_id?: string | undefined
  name?: string | undefined
  namespace?: string | undefined
  caller?: ToolCallCallerParam | ({ [x: string]: unknown } | null) | undefined
  output: string | FunctionAndCustomToolCallOutput[]
  status?: 'in_progress' | 'completed' | 'incomplete' | undefined
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
  output: ItemField[]
  created_at: number
  usage: ResponseUsage
}
type CreateSkillBody = { files: File[] | File }
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
  first_id: string | ({ [x: string]: unknown } | null)
  last_id: string | ({ [x: string]: unknown } | null)
  has_more: boolean
}
type DeletedSkillResource = { object: 'skill.deleted'; deleted: boolean; id: string }
type SetDefaultSkillVersionBody = { default_version: string }
type CreateSkillVersionBody = { files: File[] | File; default?: boolean | undefined }
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
  first_id: string | ({ [x: string]: unknown } | null)
  last_id: string | ({ [x: string]: unknown } | null)
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
  version: string | ({ [x: string]: unknown } | null)
  state_variables:
    | { [x: string]: string | number | boolean | number | ({ [x: string]: unknown } | null) }
    | ({ [x: string]: unknown } | null)
  tracing: ChatkitWorkflowTracing
}
type ChatSessionRateLimits = { max_requests_per_1_minute: number }
type ChatSessionStatus = 'active' | 'expired' | 'cancelled'
type ChatSessionAutomaticThreadTitling = { enabled: boolean }
type ChatSessionFileUpload = {
  enabled: boolean
  max_file_size: number | ({ [x: string]: unknown } | null)
  max_files: number | ({ [x: string]: unknown } | null)
}
type ChatSessionHistory = {
  enabled: boolean
  recent_threads: number | ({ [x: string]: unknown } | null)
}
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
type WorkflowTracingParam = { enabled?: boolean | undefined }
type WorkflowParam = {
  id: string
  version?: string | undefined
  state_variables?: { [x: string]: string | number | boolean | number } | undefined
  tracing?: WorkflowTracingParam | undefined
}
type ExpiresAfterParam = { anchor: 'created_at'; seconds: bigint }
type RateLimitsParam = { max_requests_per_1_minute?: number | undefined }
type AutomaticThreadTitlingParam = { enabled?: boolean | undefined }
type FileUploadParam = {
  enabled?: boolean | undefined
  max_file_size?: number | undefined
  max_files?: number | undefined
}
type HistoryParam = { enabled?: boolean | undefined; recent_threads?: number | undefined }
type ChatkitConfigurationParam = {
  automatic_thread_titling?: AutomaticThreadTitlingParam | undefined
  file_upload?: FileUploadParam | undefined
  history?: HistoryParam | undefined
}
type CreateChatSessionBody = {
  workflow: WorkflowParam
  user: string
  expires_after?: ExpiresAfterParam | undefined
  rate_limits?: RateLimitsParam | undefined
  chatkit_configuration?: ChatkitConfigurationParam | undefined
}
type UserMessageInputText = { type: 'input_text'; text: string }
type UserMessageQuotedText = { type: 'quoted_text'; text: string }
type AttachmentType = 'image' | 'file'
type Attachment = {
  type: AttachmentType
  id: string
  name: string
  mime_type: string
  preview_url: string | ({ [x: string]: unknown } | null)
}
type ToolChoice = { id: string }
type InferenceOptions = {
  tool_choice: ToolChoice | ({ [x: string]: unknown } | null)
  model: string | ({ [x: string]: unknown } | null)
}
type UserMessageItem = {
  id: string
  object: 'chatkit.thread_item'
  created_at: number
  thread_id: string
  type: 'chatkit.user_message'
  content: (UserMessageInputText | UserMessageQuotedText)[]
  attachments: Attachment[]
  inference_options: InferenceOptions | ({ [x: string]: unknown } | null)
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
  output: string | ({ [x: string]: unknown } | null)
}
type TaskType = 'custom' | 'thought'
type TaskItem = {
  id: string
  object: 'chatkit.thread_item'
  created_at: number
  thread_id: string
  type: 'chatkit.task'
  task_type: TaskType
  heading: string | ({ [x: string]: unknown } | null)
  summary: string | ({ [x: string]: unknown } | null)
}
type TaskGroupTask = {
  type: TaskType
  heading: string | ({ [x: string]: unknown } | null)
  summary: string | ({ [x: string]: unknown } | null)
}
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
  first_id: string | ({ [x: string]: unknown } | null)
  last_id: string | ({ [x: string]: unknown } | null)
  has_more: boolean
}
type ActiveStatus = { type: 'active' }
type LockedStatus = { type: 'locked'; reason: string | ({ [x: string]: unknown } | null) }
type ClosedStatus = { type: 'closed'; reason: string | ({ [x: string]: unknown } | null) }
type ThreadResource = {
  id: string
  object: 'chatkit.thread'
  created_at: number
  title: string | ({ [x: string]: unknown } | null)
  status: ActiveStatus | LockedStatus | ClosedStatus
  user: string
}
type DeletedThreadResource = { id: string; object: 'chatkit.thread.deleted'; deleted: boolean }
type ThreadListResource = {
  object: 'list'
  data: ThreadResource[]
  first_id: string | ({ [x: string]: unknown } | null)
  last_id: string | ({ [x: string]: unknown } | null)
  has_more: boolean
}
type DecisionInputText = {
  type: 'input_text'
  text: string
  prompt_cache_breakpoint?: ({ mode: 'explicit' } | null) | undefined
}
type ImageDetailParam = 'low' | 'high' | 'auto' | 'original'
type DecisionInputImage = {
  image_url: string
  detail?: ImageDetailParam | ({ [x: string]: unknown } | null) | undefined
  prompt_cache_breakpoint?: ({ mode: 'explicit' } | null) | undefined
  type: 'input_image'
}
type DecisionInputJson = {
  type: 'input_json'
  data:
    | { [x: string]: { [x: string]: unknown } | ({ [x: string]: unknown } | null) }
    | { [x: string]: { [x: string]: unknown } | ({ [x: string]: unknown } | null) }[]
}
type DecisionInputContentParts = (DecisionInputText | DecisionInputImage | DecisionInputJson)[]
type DecisionInputContent = string | DecisionInputContentParts
type DecisionInputUserMessage = {
  role: 'user'
  content: DecisionInputContent
  type?: 'message' | undefined
}
type DecisionInputDeveloperContentParts = DecisionInputText[]
type DecisionInputDeveloperContent = string | DecisionInputDeveloperContentParts
type DecisionInputDeveloperMessage = {
  role: 'developer'
  content: DecisionInputDeveloperContent
  type?: 'message' | undefined
}
type DecisionInputSystemMessage = {
  role: 'system'
  content: DecisionInputDeveloperContent
  type?: 'message' | undefined
}
type DecisionInputOutputText = { type: 'output_text'; text: string }
type DecisionInputRefusal = { type: 'refusal'; refusal: string }
type DecisionInputAssistantContentParts = (DecisionInputOutputText | DecisionInputRefusal)[]
type DecisionInputAssistantContent = string | DecisionInputAssistantContentParts
type MessagePhaseParam = 'commentary' | 'final_answer'
type DecisionInputAssistantMessage = {
  role: 'assistant'
  content: DecisionInputAssistantContent
  phase?: MessagePhaseParam | ({ [x: string]: unknown } | null) | undefined
  type?: 'message' | undefined
}
type DecisionInputMessage =
  | DecisionInputUserMessage
  | DecisionInputDeveloperMessage
  | DecisionInputSystemMessage
  | DecisionInputAssistantMessage
type FunctionCallStatusParam = 'in_progress' | 'completed' | 'incomplete'
type DecisionInputFunctionCall = {
  id?: (string | null) | undefined
  call_id: string
  namespace?: (string | null) | undefined
  name: string
  arguments: string
  status?: FunctionCallStatusParam | ({ [x: string]: unknown } | null) | undefined
  type: 'function_call'
}
type DecisionInputToolOutputContentParts = (DecisionInputText | DecisionInputImage)[]
type DecisionInputToolOutputContent = string | DecisionInputToolOutputContentParts
type DecisionInputFunctionCallOutput = {
  id?: (string | null) | undefined
  call_id: string
  output: DecisionInputToolOutputContent
  status?: FunctionCallStatusParam | ({ [x: string]: unknown } | null) | undefined
  type: 'function_call_output'
}
type DecisionInputCustomToolCall = {
  id?: (string | null) | undefined
  call_id: string
  namespace?: (string | null) | undefined
  name: string
  input: string
  status?: FunctionCallStatusParam | ({ [x: string]: unknown } | null) | undefined
  type: 'custom_tool_call'
}
type DecisionInputCustomToolCallOutput = {
  id?: (string | null) | undefined
  call_id: string
  output: DecisionInputToolOutputContent
  status?: FunctionCallStatusParam | ({ [x: string]: unknown } | null) | undefined
  type: 'custom_tool_call_output'
}
type DecisionInput =
  | string
  | (
      | DecisionInputMessage
      | DecisionInputFunctionCall
      | DecisionInputFunctionCallOutput
      | DecisionInputCustomToolCall
      | DecisionInputCustomToolCallOutput
    )[]
type DecisionQuestionInputText = { type: 'input_text'; text: string }
type DecisionQuestionInputImage = {
  image_url: string
  detail?: ImageDetailParam | ({ [x: string]: unknown } | null) | undefined
  type: 'input_image'
}
type DecisionQuestionInputPart =
  | DecisionQuestionInputText
  | DecisionQuestionInputImage
  | DecisionInputJson
type QuestionParamPredicate = {
  type: 'predicate'
  name?: string | undefined
  instructions: string | DecisionQuestionInputPart[]
}
type ChoiceValueParam = string | boolean
type ChoiceOptionParam = { value: ChoiceValueParam; description?: string | undefined }
type QuestionParamChoice = {
  type: 'choice'
  name?: string | undefined
  instructions: string | DecisionQuestionInputPart[]
  choices: ChoiceOptionParam[]
}
type ScoreLevelParam = { label: string; description?: string | undefined }
type QuestionParamScore = {
  type: 'score'
  name?: string | undefined
  instructions: string | DecisionQuestionInputPart[]
  levels: ScoreLevelParam[]
}
type QuestionParam = QuestionParamPredicate | QuestionParamChoice | QuestionParamScore
type DecisionRequest = {
  model: string
  input: DecisionInput
  questions: QuestionParam[]
  safety_identifier?: (string | null) | undefined
  prompt_cache_key?: (string | null) | undefined
  prompt_cache_options?:
    | ({ ttl?: '30m' | undefined; mode?: 'implicit' | 'explicit' | null | undefined } | null)
    | undefined
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
type ExperimentalConfigOverridesParam = { time_awareness?: boolean | undefined }
type ReasoningEffortParam = 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | 'max'
type ReasoningSummaryParam = 'concise' | 'detailed' | 'auto'
type ReasoningParam = {
  effort?: ReasoningEffortParam | ({ [x: string]: unknown } | null) | undefined
  summary?: ReasoningSummaryParam | ({ [x: string]: unknown } | null) | undefined
}
type TextFormatParamText = { type: 'text' }
type TextFormatParamJsonSchema = {
  type: 'json_schema'
  schema: { [x: string]: { [x: string]: unknown } }
}
type TextFormatParam = TextFormatParamText | TextFormatParamJsonSchema
type VerbosityParam = 'low' | 'medium' | 'high'
type TextParam = {
  format?: TextFormatParam | ({ [x: string]: unknown } | null) | undefined
  verbosity?: VerbosityParam | ({ [x: string]: unknown } | null) | undefined
}
type ServiceTierParam = 'auto' | 'default' | 'flex' | 'priority' | 'fast' | 'ultrafast'
type MultiAgentConfigCurrentParam = {
  enabled: boolean
  max_concurrent_subagents?: bigint | undefined
}
type CompactionParam = { async?: (boolean | null) | undefined }
type AgentToolConfigParamFunction = {
  type: 'function'
  name: string
  description: string
  parameters: { [x: string]: { [x: string]: unknown } }
  defer_loading?: boolean | undefined
  async?: boolean | undefined
}
type AgentToolConfigParamToolSearch = { type: 'tool_search' }
type AgentToolConfigParamProgrammaticToolCalling = {
  type: 'programmatic_tool_calling'
  enabled?: boolean | undefined
}
type McpTransportConfigParamHttp = {
  type: 'http'
  server_url: string
  authorization?: (string | null) | undefined
  headers?: ({ [x: string]: string } | null) | undefined
}
type McpTransportConfigParamStdio = {
  type: 'stdio'
  command: string
  args?: (string[] | null) | undefined
  cwd: string
  env?: ({ [x: string]: string } | null) | undefined
  env_vars?: (string[] | null) | undefined
}
type McpTransportConfigParam = McpTransportConfigParamHttp | McpTransportConfigParamStdio
type McpConnectionOriginParam = 'service' | 'environment'
type AgentToolConfigParamMcp = {
  type: 'mcp'
  server_label: string
  credential_id?: (string | null) | undefined
  transport: McpTransportConfigParam
  request_metadata?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  allowed_tools?: (string[] | null) | undefined
  required?: boolean | undefined
  connection_origin?: McpConnectionOriginParam | ({ [x: string]: unknown } | null) | undefined
}
type WebSearchModeParam = 'disabled' | 'cached' | 'live'
type WebSearchContextSizeParam = 'low' | 'medium' | 'high'
type WebSearchLocationParam = {
  country?: (string | null) | undefined
  region?: (string | null) | undefined
  city?: (string | null) | undefined
  timezone?: (string | null) | undefined
}
type AgentToolConfigParamWebSearch = {
  type: 'web_search'
  mode?: WebSearchModeParam | ({ [x: string]: unknown } | null) | undefined
  context_size?: WebSearchContextSizeParam | ({ [x: string]: unknown } | null) | undefined
  allowed_domains?: (string[] | null) | undefined
  location?: WebSearchLocationParam | ({ [x: string]: unknown } | null) | undefined
}
type AgentToolConfigParamComputerUse = {
  type: 'computer_use'
  include_screenshots?: boolean | undefined
}
type AgentToolConfigParamAutomations = { type: 'automations' }
type AgentToolConfigParam =
  | AgentToolConfigParamFunction
  | AgentToolConfigParamToolSearch
  | AgentToolConfigParamProgrammaticToolCalling
  | AgentToolConfigParamMcp
  | AgentToolConfigParamWebSearch
  | AgentToolConfigParamComputerUse
  | AgentToolConfigParamAutomations
type SessionAgentConfigParam = {
  experimental?: ExperimentalConfigOverridesParam | undefined
  model?: string | undefined
  reasoning?: ReasoningParam | ({ [x: string]: unknown } | null) | undefined
  text?: TextParam | ({ [x: string]: unknown } | null) | undefined
  service_tier?: ServiceTierParam | ({ [x: string]: unknown } | null) | undefined
  instructions?: (string | null) | undefined
  multi_agent?: MultiAgentConfigCurrentParam | ({ [x: string]: unknown } | null) | undefined
  compaction?: CompactionParam | ({ [x: string]: unknown } | null) | undefined
  tools?: (AgentToolConfigParam[] | null) | undefined
}
type EnvironmentParamNone = { type: 'none' }
type EnvironmentPackagesParam = {
  python?: (string[] | null) | undefined
  system?: (string[] | null) | undefined
  npm?: (string[] | null) | undefined
}
type SetupCommandParam = { command: string; cwd?: (string | null) | undefined }
type NetworkAccessParam = 'enabled' | 'disabled' | 'restricted'
type NetworkPolicyParam = {
  access: NetworkAccessParam
  allowed_domains?: (string[] | null) | undefined
  blocked_domains?: (string[] | null) | undefined
}
type DesktopParam = { enabled: boolean }
type HostedSkillParamSkillReference = {
  type: 'skill_reference'
  skill_id: string
  version?: (string | null) | undefined
}
type InlineCapabilitySourceParamBase64 = {
  type: 'base64'
  media_type: 'application/zip'
  data: string
}
type InlineCapabilitySourceParam = InlineCapabilitySourceParamBase64
type HostedSkillParamInline = {
  type: 'inline'
  name: string
  description: string
  source: InlineCapabilitySourceParam
}
type HostedSkillParam = HostedSkillParamSkillReference | HostedSkillParamInline
type HostedPluginParamInline = {
  type: 'inline'
  name: string
  description: string
  source: InlineCapabilitySourceParam
}
type HostedPluginParam = HostedPluginParamInline
type HostedEnvironmentFileParamFileId = { type: 'file_id'; file_id: string; path: string }
type HostedEnvironmentFileParamInline = { type: 'inline'; data: string; path: string }
type HostedEnvironmentFileParam =
  | HostedEnvironmentFileParamFileId
  | HostedEnvironmentFileParamInline
type ContainerSizeParam = 'small' | 'medium' | 'large'
type EnvironmentParamOpenaiHosted = {
  type: 'openai_hosted'
  packages?: EnvironmentPackagesParam | ({ [x: string]: unknown } | null) | undefined
  setup_commands?: (SetupCommandParam[] | null) | undefined
  network?: NetworkPolicyParam | ({ [x: string]: unknown } | null) | undefined
  desktop?: DesktopParam | ({ [x: string]: unknown } | null) | undefined
  env?: ({ [x: string]: string } | null) | undefined
  capability_directories?: (string[] | null) | undefined
  skills?: (HostedSkillParam[] | null) | undefined
  plugins?: (HostedPluginParam[] | null) | undefined
  files?: (HostedEnvironmentFileParam[] | null) | undefined
  environment_id?: string | undefined
  environment_template_id?: string | undefined
  container_size?: ContainerSizeParam | undefined
}
type EnvironmentParamSelfHosted = {
  type: 'self_hosted'
  capability_directories?: (string[] | null) | undefined
  workspace_directory: string
}
type EnvironmentParam =
  | EnvironmentParamNone
  | EnvironmentParamOpenaiHosted
  | EnvironmentParamSelfHosted
type InputContentParamInputText = { type: 'input_text'; text: string }
type InputContentParamInputImage = { type: 'input_image'; image_url: string }
type InputContentParam = InputContentParamInputText | InputContentParamInputImage
type InputMessageParam = {
  type?: 'message' | undefined
  role: 'user'
  content: InputContentParam[]
}
type AutomationTargetParamNewSession = {
  type: 'new_session'
  agent?: SessionAgentConfigParam | undefined
  agent_id?: string | undefined
  environment: EnvironmentParam
  input: InputMessageParam[]
  vault_ids?: (string[] | null) | undefined
  metadata?: ({ [x: string]: string } | null) | undefined
}
type AutomationTargetParamExistingSession = {
  type: 'existing_session'
  session_id: string
  instructions: string
}
type AutomationTargetParam = AutomationTargetParamNewSession | AutomationTargetParamExistingSession
type CreateAutomationParamsPeriodic = {
  type: 'periodic'
  name: string
  target: AutomationTargetParam
  metadata?: { [x: string]: string } | undefined
  expression: string
  timezone: string
}
type CreateAutomationParamsOnce = {
  type: 'once'
  name: string
  target: AutomationTargetParam
  metadata?: { [x: string]: string } | undefined
  run_at: bigint
}
type CreateAutomationParams = CreateAutomationParamsPeriodic | CreateAutomationParamsOnce
type ReasoningEffortResource = 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | 'max'
type ReasoningSummaryResource = 'concise' | 'detailed' | 'auto'
type ReasoningResource = {
  effort: ReasoningEffortResource | ({ [x: string]: unknown } | null)
  summary: ReasoningSummaryResource | ({ [x: string]: unknown } | null)
}
type TextFormatResourceText = { type: 'text' }
type TextFormatResourceJsonSchema = {
  type: 'json_schema'
  schema: { [x: string]: { [x: string]: unknown } }
}
type TextFormatResource = TextFormatResourceText | TextFormatResourceJsonSchema
type VerbosityResource = 'low' | 'medium' | 'high'
type TextResource = { format: TextFormatResource; verbosity: VerbosityResource }
type ServiceTierResource = 'auto' | 'default' | 'flex' | 'priority' | 'fast' | 'ultrafast'
type AgentToolResourceFunction = {
  type: 'function'
  name: string
  description: string
  parameters: { [x: string]: { [x: string]: unknown } }
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
  request_metadata: { [x: string]: { [x: string]: unknown } }
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
  location: WebSearchLocationResource | ({ [x: string]: unknown } | null)
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
  container_size: ContainerSizeResource | ({ [x: string]: unknown } | null)
  packages: EnvironmentPackagesResource | ({ [x: string]: unknown } | null)
  network: NetworkPolicyResource | ({ [x: string]: unknown } | null)
  desktop: DesktopResource | ({ [x: string]: unknown } | null)
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
  agent: AutomationAgentConfigResource | ({ [x: string]: unknown } | null)
  environment: AutomationEnvironmentResource
  input: InputMessageResource_2[]
  vault_ids: string[]
  metadata: { [x: string]: string }
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
  metadata: { [x: string]: string }
  created_by: AutomationCreatedByResource
  pause_reason?: 'target_session_failed' | null | undefined
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
  metadata: { [x: string]: string }
  created_by: AutomationCreatedByResource
  pause_reason?: 'target_session_failed' | null | undefined
  run_at: bigint
  status: OnceAutomationStatusResource
}
type AutomationResource = AutomationResourcePeriodic | AutomationResourceOnce
type ErrorBodyResource = { type: string; code: string; message: string; param: string | null }
type ErrorResponse_2 = { error: ErrorBodyResource }
type ListOrderParam = 'asc' | 'desc'
type UpdateAutomationParams = {
  name?: string | undefined
  target?: AutomationTargetParam | undefined
  metadata?: { [x: string]: string } | undefined
  expression?: string | undefined
  timezone?: string | undefined
  run_at?: bigint | undefined
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
  error: AutomationInvocationErrorResource | ({ [x: string]: unknown } | null)
}
type EnvironmentTypeParam = 'openai_hosted'
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
type CreateEnvironmentParamOpenaiHosted = {
  type: 'openai_hosted'
  packages?: EnvironmentPackagesParam | ({ [x: string]: unknown } | null) | undefined
  setup_commands?: (SetupCommandParam[] | null) | undefined
  network?: NetworkPolicyParam | ({ [x: string]: unknown } | null) | undefined
  desktop?: DesktopParam | ({ [x: string]: unknown } | null) | undefined
  env?: ({ [x: string]: string } | null) | undefined
  capability_directories?: (string[] | null) | undefined
  skills?: (HostedSkillParam[] | null) | undefined
  plugins?: (HostedPluginParam[] | null) | undefined
  files?: (HostedEnvironmentFileParam[] | null) | undefined
  environment_template_id?: string | undefined
}
type CreateEnvironmentParam = CreateEnvironmentParamOpenaiHosted
type CreateAgentEnvironmentParams = {
  environment: CreateEnvironmentParam
  vault_ids?: (string[] | null) | undefined
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
  phase: MessagePhaseResource | ({ [x: string]: unknown } | null)
}
type SummaryTextResource = { type: 'summary_text'; text: string }
type ReasoningItemResource = {
  type: 'reasoning'
  id: string
  turn_id: string
  summary: SummaryTextResource[]
  status: OutputItemStatusResource | ({ [x: string]: unknown } | null)
}
type FunctionCallStatusResource = 'in_progress' | 'completed' | 'failed' | 'incomplete'
type FunctionCallItemResource = {
  type: 'function_call'
  id: string
  turn_id: string
  call_id: string
  name: string
  arguments: { [x: string]: unknown }
  status: FunctionCallStatusResource
}
type FunctionCallOutputResource = string | InputContentResource[]
type FunctionCallOutputItemResource = {
  id: string
  turn_id: string
  type: 'function_call_output'
  call_id: string
  status: FunctionCallStatusResource
  output: FunctionCallOutputResource | ({ [x: string]: unknown } | null)
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
  arguments: { [x: string]: unknown }
  status: FunctionCallStatusResource
  output: { [x: string]: unknown } | ({ [x: string]: unknown } | null)
  error: { [x: string]: unknown } | ({ [x: string]: unknown } | null)
}
type ComputerScreenshotResource = { type: 'computer_screenshot'; image_url: string }
type ComputerUseCallItemResource = {
  type: 'computer_use_call'
  id: string
  turn_id: string
  title: string | null
  status: FunctionCallStatusResource
  output: ComputerScreenshotResource | ({ [x: string]: unknown } | null)
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
  action: WebSearchActionResource | ({ [x: string]: unknown } | null)
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
  prompt_cache_options?: PromptCacheOptionsResource | ({ [x: string]: unknown } | null) | undefined
  id: string
  object: TurnObjectResource
  session_id: string
  agent_id: string
  subagent_id: string | null
  status: TurnStatusResource
  created_at: bigint
  started_at: bigint | null
  completed_at: bigint | null
  error: SessionTurnErrorResource | ({ [x: string]: unknown } | null)
  usage: TokenUsageResource | ({ [x: string]: unknown } | null)
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
  parameters: { [x: string]: { [x: string]: unknown } }
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
  headers: { [x: string]: string }
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
  request_metadata: { [x: string]: { [x: string]: unknown } }
  allowed_tools: string[] | null
  required: boolean
  connection_origin: McpConnectionOriginResource
}
type PersistedAgentToolResourceWebSearch = {
  type: 'web_search'
  mode: WebSearchModeResource
  context_size: WebSearchContextSizeResource
  allowed_domains: string[] | null
  location: WebSearchLocationResource | ({ [x: string]: unknown } | null)
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
  metadata: { [x: string]: string }
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
type ExperimentalConfigParam = { time_awareness?: boolean | undefined }
type PersistedAgentToolConfigParamFunction = {
  type: 'function'
  name: string
  description: string
  parameters: { [x: string]: { [x: string]: unknown } }
  defer_loading?: boolean | undefined
  async?: boolean | undefined
}
type PersistedAgentToolConfigParamToolSearch = { type: 'tool_search' }
type PersistedAgentToolConfigParamProgrammaticToolCalling = {
  type: 'programmatic_tool_calling'
  enabled?: boolean | undefined
}
type PersistedMcpTransportConfigParamHttp = {
  type: 'http'
  server_url: string
  headers?: ({ [x: string]: string } | null) | undefined
}
type PersistedMcpTransportConfigParamStdio = {
  type: 'stdio'
  command: string
  args?: (string[] | null) | undefined
  cwd: string
  env_vars?: (string[] | null) | undefined
}
type PersistedMcpTransportConfigParam =
  | PersistedMcpTransportConfigParamHttp
  | PersistedMcpTransportConfigParamStdio
type PersistedAgentToolConfigParamMcp = {
  type: 'mcp'
  server_label: string
  credential_id?: (string | null) | undefined
  transport: PersistedMcpTransportConfigParam
  request_metadata?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  allowed_tools?: (string[] | null) | undefined
  required?: boolean | undefined
  connection_origin?: McpConnectionOriginParam | ({ [x: string]: unknown } | null) | undefined
}
type PersistedAgentToolConfigParamWebSearch = {
  type: 'web_search'
  mode?: WebSearchModeParam | ({ [x: string]: unknown } | null) | undefined
  context_size?: WebSearchContextSizeParam | ({ [x: string]: unknown } | null) | undefined
  allowed_domains?: (string[] | null) | undefined
  location?: WebSearchLocationParam | ({ [x: string]: unknown } | null) | undefined
}
type PersistedAgentToolConfigParamComputerUse = {
  type: 'computer_use'
  include_screenshots?: boolean | undefined
}
type PersistedAgentToolConfigParamAutomations = { type: 'automations' }
type PersistedAgentToolConfigParam =
  | PersistedAgentToolConfigParamFunction
  | PersistedAgentToolConfigParamToolSearch
  | PersistedAgentToolConfigParamProgrammaticToolCalling
  | PersistedAgentToolConfigParamMcp
  | PersistedAgentToolConfigParamWebSearch
  | PersistedAgentToolConfigParamComputerUse
  | PersistedAgentToolConfigParamAutomations
type CreateAgentParams = {
  experimental?: ExperimentalConfigParam | undefined
  metadata?: ({ [x: string]: string } | null) | undefined
  name?: (string | null) | undefined
  model: string
  reasoning?: ReasoningParam | ({ [x: string]: unknown } | null) | undefined
  text?: TextParam | ({ [x: string]: unknown } | null) | undefined
  service_tier?: ServiceTierParam | ({ [x: string]: unknown } | null) | undefined
  instructions?: (string | null) | undefined
  tools?: (PersistedAgentToolConfigParam[] | null) | undefined
  multi_agent?: MultiAgentConfigCurrentParam | ({ [x: string]: unknown } | null) | undefined
  compaction?: CompactionParam | ({ [x: string]: unknown } | null) | undefined
}
type UpdateAgentParams = {
  experimental?: ExperimentalConfigOverridesParam | undefined
  model?: string | undefined
  reasoning?: ReasoningParam | ({ [x: string]: unknown } | null) | undefined
  text?: TextParam | ({ [x: string]: unknown } | null) | undefined
  service_tier?: ServiceTierParam | ({ [x: string]: unknown } | null) | undefined
  instructions?: (string | null) | undefined
  multi_agent?: MultiAgentConfigCurrentParam | ({ [x: string]: unknown } | null) | undefined
  compaction?: CompactionParam | ({ [x: string]: unknown } | null) | undefined
  metadata?: ({ [x: string]: string } | null) | undefined
  name?: (string | null) | undefined
  tools?: (PersistedAgentToolConfigParam[] | null) | undefined
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
type CreateEnvironmentTemplateParams = {
  packages?: EnvironmentPackagesParam | ({ [x: string]: unknown } | null) | undefined
  setup_commands?: (SetupCommandParam[] | null) | undefined
  network?: NetworkPolicyParam | ({ [x: string]: unknown } | null) | undefined
  desktop?: DesktopParam | ({ [x: string]: unknown } | null) | undefined
  env?: ({ [x: string]: string } | null) | undefined
  capability_directories?: (string[] | null) | undefined
  skills?: (HostedSkillParam[] | null) | undefined
  plugins?: (HostedPluginParam[] | null) | undefined
  files?: (HostedEnvironmentFileParam[] | null) | undefined
  name?: (string | null) | undefined
}
type UpdateEnvironmentTemplateParams = {
  name?: (string | null) | undefined
  packages?: EnvironmentPackagesParam | ({ [x: string]: unknown } | null) | undefined
  setup_commands?: (SetupCommandParam[] | null) | undefined
  network?: NetworkPolicyParam | ({ [x: string]: unknown } | null) | undefined
  desktop?: DesktopParam | ({ [x: string]: unknown } | null) | undefined
  env?: ({ [x: string]: string } | null) | undefined
  capability_directories?: (string[] | null) | undefined
  skills?: (HostedSkillParam[] | null) | undefined
  plugins?: (HostedPluginParam[] | null) | undefined
  files?: (HostedEnvironmentFileParam[] | null) | undefined
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
  arguments: { [x: string]: unknown } | ({ [x: string]: unknown } | null)
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
  arguments: { [x: string]: unknown }
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
  container_size?: ContainerSizeResource | ({ [x: string]: unknown } | null) | undefined
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
  prompt_cache_options?: PromptCacheOptionsResource | ({ [x: string]: unknown } | null) | undefined
  review?: SessionReviewResource | undefined
  spend_control: SessionBudgetControlResource
  metadata: { [x: string]: string }
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
  usage: TokenUsageResource | ({ [x: string]: unknown } | null)
}
type SessionListResource = {
  object: 'list'
  data: SessionResource[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
}
type SessionReviewParam = 'none' | 'auto_review'
type SessionBudgetControlParams = { limit: bigint | null }
type CreateSessionInputParam = string | InputMessageParam[]
type PromptCacheTtlParam = '30m' | '12h'
type PromptCacheOptionsParam_2 = { ttl?: PromptCacheTtlParam | undefined }
type SessionStreamOptionsParam = { include_obfuscation?: boolean | undefined }
type CreateAgentSessionParams = {
  environment: EnvironmentParam
  review?: SessionReviewParam | undefined
  spend_control?: SessionBudgetControlParams | ({ [x: string]: unknown } | null) | undefined
  metadata?: ({ [x: string]: string } | null) | undefined
  agent?: SessionAgentConfigParam | undefined
  agent_id?: string | undefined
  vault_ids?: (string[] | null) | undefined
  input?: CreateSessionInputParam | ({ [x: string]: unknown } | null) | undefined
  prompt_cache_options?: PromptCacheOptionsParam_2 | ({ [x: string]: unknown } | null) | undefined
  stream?: boolean | undefined
  stream_options?: SessionStreamOptionsParam | undefined
}
type SessionErrorResource = {
  type: string
  code: string | null
  message: string
  param: string | null
}
type SessionEventError = {
  type: 'error'
  event_id: string
  session_id: string
  error: SessionErrorResource
  obfuscation?: string | undefined
}
type SessionEnvironmentStatusResource =
  | 'pending'
  | 'ready'
  | 'connected'
  | 'disconnected'
  | 'suspended'
  | 'expired'
  | 'failed'
type SessionEnvironmentErrorResource = { type: string; code: string; message: string }
type SessionEnvironmentStateResource = {
  id: string
  type: string
  status: SessionEnvironmentStatusResource
  error: SessionEnvironmentErrorResource | ({ [x: string]: unknown } | null)
}
type SessionEventAgentSessionEnvironmentReady = {
  type: 'agent.session.environment.ready'
  event_id: string
  session_id: string
  turn_id: string | null
  environment: SessionEnvironmentStateResource
  obfuscation?: string | undefined
}
type SessionEventAgentSessionEnvironmentSuspended = {
  type: 'agent.session.environment.suspended'
  event_id: string
  session_id: string
  turn_id: string | null
  environment: SessionEnvironmentStateResource
  obfuscation?: string | undefined
}
type SessionEventAgentSessionEnvironmentExpired = {
  type: 'agent.session.environment.expired'
  event_id: string
  session_id: string
  turn_id: string | null
  environment: SessionEnvironmentStateResource
  obfuscation?: string | undefined
}
type SessionEventAgentSessionEnvironmentReset = {
  type: 'agent.session.environment.reset'
  event_id: string
  session_id: string
  turn_id: string | null
  environment_id: string
  reset_count: bigint
  obfuscation?: string | undefined
}
type SessionEventAgentOutputCommandExecutionOutputDelta = {
  type: 'agent.output.command_execution_output.delta'
  event_id: string
  session_id: string
  turn_id: string | null
  item_id: string
  output_index: bigint
  delta: string
  obfuscation?: string | undefined
}
type SessionEventAgentSessionCreated = {
  type: 'agent.session.created'
  event_id: string
  session: SessionResource
  obfuscation?: string | undefined
}
type SessionEventAgentSessionTurnCreated = {
  type: 'agent.session.turn.created'
  event_id: string
  session_id: string
  turn_id: string
  turn: TurnResource
  obfuscation?: string | undefined
}
type SessionEventAgentSessionTurnInProgress = {
  type: 'agent.session.turn.in_progress'
  event_id: string
  session_id: string
  turn_id: string
  turn: TurnResource
  obfuscation?: string | undefined
}
type SessionEventAgentSessionTurnCompleted = {
  type: 'agent.session.turn.completed'
  event_id: string
  session_id: string
  turn_id: string
  turn: TurnResource
  usage: TokenUsageResource | ({ [x: string]: unknown } | null)
  obfuscation?: string | undefined
}
type SessionEventAgentSessionTurnFailed = {
  type: 'agent.session.turn.failed'
  event_id: string
  session_id: string
  turn_id: string
  turn: TurnResource
  usage: TokenUsageResource | ({ [x: string]: unknown } | null)
  obfuscation?: string | undefined
}
type SessionEventAgentSessionTurnCancelled = {
  type: 'agent.session.turn.cancelled'
  event_id: string
  session_id: string
  turn_id: string
  turn: TurnResource
  usage: TokenUsageResource | ({ [x: string]: unknown } | null)
  obfuscation?: string | undefined
}
type SessionEventAgentSessionTurnItemAdded = {
  type: 'agent.session.turn.item.added'
  event_id: string
  session_id: string
  turn_id: string | null
  output_index: bigint | null
  item: SessionTurnItemResource
  obfuscation?: string | undefined
}
type SessionEventAgentSessionIdle = {
  type: 'agent.session.idle'
  event_id: string
  session: SessionResource
  obfuscation?: string | undefined
}
type SessionEventAgentSessionBudgetReached = {
  type: 'agent.session.budget_reached'
  event_id: string
  session: SessionResource
  obfuscation?: string | undefined
}
type SessionEventAgentSessionInProgress = {
  type: 'agent.session.in_progress'
  event_id: string
  session: SessionResource
  obfuscation?: string | undefined
}
type SessionEventAgentSessionRequiresAction = {
  type: 'agent.session.requires_action'
  event_id: string
  session: SessionResource
  obfuscation?: string | undefined
}
type SessionEventAgentSessionFailed = {
  type: 'agent.session.failed'
  event_id: string
  session: SessionResource
  obfuscation?: string | undefined
}
type SessionEventAgentSessionEnvironmentPending = {
  type: 'agent.session.environment.pending'
  event_id: string
  session_id: string
  turn_id: string | null
  environment: SessionEnvironmentStateResource
  obfuscation?: string | undefined
}
type SessionEventAgentSessionEnvironmentConnected = {
  type: 'agent.session.environment.connected'
  event_id: string
  session_id: string
  turn_id: string | null
  environment: SessionEnvironmentStateResource
  obfuscation?: string | undefined
}
type SessionEventAgentSessionEnvironmentDisconnected = {
  type: 'agent.session.environment.disconnected'
  event_id: string
  session_id: string
  turn_id: string | null
  environment: SessionEnvironmentStateResource
  obfuscation?: string | undefined
}
type SessionEventAgentSessionEnvironmentFailed = {
  type: 'agent.session.environment.failed'
  event_id: string
  session_id: string
  turn_id: string | null
  environment: SessionEnvironmentStateResource
  obfuscation?: string | undefined
}
type SessionEventAgentSessionSubagentCreated = {
  type: 'agent.session.subagent.created'
  event_id: string
  subagent: SubagentResource
  obfuscation?: string | undefined
}
type SessionEventAgentSessionSubagentActive = {
  type: 'agent.session.subagent.active'
  event_id: string
  subagent: SubagentResource
  obfuscation?: string | undefined
}
type SessionEventAgentSessionSubagentClosed = {
  type: 'agent.session.subagent.closed'
  event_id: string
  subagent: SubagentResource
  obfuscation?: string | undefined
}
type AssistantMessageItemResource = {
  type: 'message'
  id: string
  turn_id: string
  role: 'assistant'
  status: OutputItemStatusResource
  content: OutputTextResource[]
  phase: MessagePhaseResource | ({ [x: string]: unknown } | null)
}
type AgentOutputItemResource =
  | AssistantMessageItemResource
  | ReasoningItemResource
  | FunctionCallItemResource
  | McpCallItemResource
  | ComputerUseCallItemResource
  | BrowserAuthenticationRequestItemResource
  | WebSearchCallItemResource
  | CommandExecutionItemResource
  | CreateSubagentCallItemResource
  | SendSubagentInputCallItemResource
  | ResumeSubagentCallItemResource
  | WaitForSubagentsCallItemResource
  | InterruptSubagentCallItemResource
  | CloseSubagentCallItemResource
type SessionEventAgentSessionTurnItemDone = {
  type: 'agent.session.turn.item.done'
  event_id: string
  session_id: string
  turn_id: string | null
  output_index: bigint
  item: AgentOutputItemResource
  obfuscation?: string | undefined
}
type SessionEventAgentSessionTurnContentPartAdded = {
  type: 'agent.session.turn.content_part.added'
  event_id: string
  session_id: string
  turn_id: string | null
  item_id: string
  output_index: bigint
  content_index: bigint
  part: OutputTextResource
  obfuscation?: string | undefined
}
type SessionEventAgentSessionTurnContentPartDone = {
  type: 'agent.session.turn.content_part.done'
  event_id: string
  session_id: string
  turn_id: string | null
  item_id: string
  output_index: bigint
  content_index: bigint
  part: OutputTextResource
  obfuscation?: string | undefined
}
type SessionEventAgentSessionTurnOutputTextDelta = {
  type: 'agent.session.turn.output_text.delta'
  event_id: string
  session_id: string
  turn_id: string | null
  item_id: string
  output_index: bigint
  content_index: bigint
  delta: string
  obfuscation?: string | undefined
}
type SessionEventAgentSessionTurnOutputTextDone = {
  type: 'agent.session.turn.output_text.done'
  event_id: string
  session_id: string
  turn_id: string | null
  item_id: string
  output_index: bigint
  content_index: bigint
  text: string
  obfuscation?: string | undefined
}
type SessionEventAgentSessionTurnReasoningSummaryPartAdded = {
  type: 'agent.session.turn.reasoning_summary_part.added'
  event_id: string
  session_id: string
  turn_id: string | null
  item_id: string
  output_index: bigint
  summary_index: bigint
  part: SummaryTextResource
  obfuscation?: string | undefined
}
type SessionEventAgentSessionTurnReasoningSummaryPartDone = {
  type: 'agent.session.turn.reasoning_summary_part.done'
  event_id: string
  session_id: string
  turn_id: string | null
  item_id: string
  output_index: bigint
  summary_index: bigint
  part: SummaryTextResource
  status: 'incomplete' | null
  obfuscation?: string | undefined
}
type SessionEventAgentSessionTurnReasoningSummaryTextDelta = {
  type: 'agent.session.turn.reasoning_summary_text.delta'
  event_id: string
  session_id: string
  turn_id: string | null
  item_id: string
  output_index: bigint
  summary_index: bigint
  delta: string
  obfuscation?: string | undefined
}
type SessionEventAgentSessionTurnReasoningSummaryTextDone = {
  type: 'agent.session.turn.reasoning_summary_text.done'
  event_id: string
  session_id: string
  turn_id: string | null
  item_id: string
  output_index: bigint
  summary_index: bigint
  text: string
  obfuscation?: string | undefined
}
type SessionEvent =
  | SessionEventError
  | SessionEventAgentSessionEnvironmentReady
  | SessionEventAgentSessionEnvironmentSuspended
  | SessionEventAgentSessionEnvironmentExpired
  | SessionEventAgentSessionEnvironmentReset
  | SessionEventAgentOutputCommandExecutionOutputDelta
  | SessionEventAgentSessionCreated
  | SessionEventAgentSessionTurnCreated
  | SessionEventAgentSessionTurnInProgress
  | SessionEventAgentSessionTurnCompleted
  | SessionEventAgentSessionTurnFailed
  | SessionEventAgentSessionTurnCancelled
  | SessionEventAgentSessionTurnItemAdded
  | SessionEventAgentSessionIdle
  | SessionEventAgentSessionBudgetReached
  | SessionEventAgentSessionInProgress
  | SessionEventAgentSessionRequiresAction
  | SessionEventAgentSessionFailed
  | SessionEventAgentSessionEnvironmentPending
  | SessionEventAgentSessionEnvironmentConnected
  | SessionEventAgentSessionEnvironmentDisconnected
  | SessionEventAgentSessionEnvironmentFailed
  | SessionEventAgentSessionSubagentCreated
  | SessionEventAgentSessionSubagentActive
  | SessionEventAgentSessionSubagentClosed
  | SessionEventAgentSessionTurnItemDone
  | SessionEventAgentSessionTurnContentPartAdded
  | SessionEventAgentSessionTurnContentPartDone
  | SessionEventAgentSessionTurnOutputTextDelta
  | SessionEventAgentSessionTurnOutputTextDone
  | SessionEventAgentSessionTurnReasoningSummaryPartAdded
  | SessionEventAgentSessionTurnReasoningSummaryPartDone
  | SessionEventAgentSessionTurnReasoningSummaryTextDelta
  | SessionEventAgentSessionTurnReasoningSummaryTextDone
type UpdateSessionReasoningParam = {
  effort?: ReasoningEffortParam | ({ [x: string]: unknown } | null) | undefined
}
type UpdateSessionAgentParam = {
  tools?: (AgentToolConfigParam[] | null) | undefined
  model?: string | undefined
  reasoning?: UpdateSessionReasoningParam | undefined
  service_tier?: ServiceTierParam | ({ [x: string]: unknown } | null) | undefined
}
type UpdateAgentSessionParams = {
  prompt_cache_options?: PromptCacheOptionsParam_2 | ({ [x: string]: unknown } | null) | undefined
  vault_ids?: (string[] | null) | undefined
  review?: SessionReviewParam | undefined
  spend_control?: SessionBudgetControlParams | ({ [x: string]: unknown } | null) | undefined
  agent?: UpdateSessionAgentParam | undefined
  metadata?: ({ [x: string]: string } | null) | undefined
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
type McpApprovalDecisionParam = 'approve' | 'deny' | 'cancel'
type McpApprovalResponseParamMcpToolCall = {
  type: 'mcp_tool_call'
  decision: McpApprovalDecisionParam
}
type McpApprovalResponseParam = McpApprovalResponseParamMcpToolCall
type SessionInputParamAgentSessionInputMcpApprovalRequestResult = {
  type: 'agent.session.input.mcp_approval_request_result'
  request_id: string
  response: McpApprovalResponseParam
}
type BrowserAuthenticationFieldValueParam = { field_id: string; value: string }
type ComputerUseApprovalResponseParamBrowserAuthenticationSubmitParam = {
  type: 'browser_authentication'
  action: 'submit'
  fields: BrowserAuthenticationFieldValueParam[]
  selected_option?: (string | null) | undefined
}
type ComputerUseApprovalResponseParamBrowserAuthenticationCancelParam = {
  type: 'browser_authentication'
  action: 'cancel'
}
type ComputerUseApprovalResponseParamBrowserAuthentication =
  | ComputerUseApprovalResponseParamBrowserAuthenticationSubmitParam
  | ComputerUseApprovalResponseParamBrowserAuthenticationCancelParam
type BrowserOriginAccessDecisionParam = 'approve' | 'deny' | 'cancel'
type ComputerUseApprovalResponseParamBrowserOriginAccessParam = {
  type: 'browser_origin_access'
  decision: BrowserOriginAccessDecisionParam
}
type ComputerUseApprovalResponseParam =
  | ComputerUseApprovalResponseParamBrowserAuthentication
  | ComputerUseApprovalResponseParamBrowserOriginAccessParam
type SessionInputParamAgentSessionInputComputerUseApprovalRequestResult = {
  type: 'agent.session.input.computer_use_approval_request_result'
  request_id: string
  response: ComputerUseApprovalResponseParam
}
type SessionInputParamAgentSessionInputMessage = {
  type: 'agent.session.input.message'
  input: InputMessageParam[]
}
type SessionInputParamAgentSessionInputCancel = { type: 'agent.session.input.cancel' }
type FunctionCallOutputParam = string | InputContentParam[]
type SessionInputParamAgentSessionInputToolResult = {
  type: 'agent.session.input.tool_result'
  turn_id: string
  call_id: string
  success: boolean
  output?: FunctionCallOutputParam | ({ [x: string]: unknown } | null) | undefined
  error?: (string | null) | undefined
}
type SessionInputParam =
  | SessionInputParamAgentSessionInputMcpApprovalRequestResult
  | SessionInputParamAgentSessionInputComputerUseApprovalRequestResult
  | SessionInputParamAgentSessionInputMessage
  | SessionInputParamAgentSessionInputCancel
  | SessionInputParamAgentSessionInputToolResult
type CreateSessionEventsParams = { events: SessionInputParam[] }
type SessionTurnTraceResource = {
  id: string
  object: 'agent.session.trace'
  session_id: string
  created_at: bigint
  otlp: { [x: string]: { [x: string]: unknown } }
}
type SessionTraceListResource = {
  object: 'list'
  data: SessionTurnTraceResource[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
}
type VaultStatusParam = 'active' | 'archived'
type VaultStatusFilterParam = VaultStatusParam | VaultStatusParam[]
type VaultResource = {
  id: string
  object: 'vault'
  name: string | null
  metadata: { [x: string]: string }
  created_at: bigint
}
type VaultListResource = {
  object: 'list'
  data: VaultResource[]
  first_id: string | null
  last_id: string | null
  has_more: boolean
}
type CreateVaultParams = {
  name?: string | undefined
  metadata?: ({ [x: string]: string } | null) | undefined
}
type UpdateVaultParams = {
  metadata?: { [x: string]: string } | undefined
  name?: (string | null) | undefined
}
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
  refresh: McpOauthRefreshResource | ({ [x: string]: unknown } | null)
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
  metadata: { [x: string]: string }
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
type CreateMcpOauthTokenEndpointAuthParamNone = { type: 'none' }
type CreateMcpOauthTokenEndpointAuthParamClientSecretBasic = {
  type: 'client_secret_basic'
  client_secret: string
}
type CreateMcpOauthTokenEndpointAuthParamClientSecretPost = {
  type: 'client_secret_post'
  client_secret: string
}
type CreateMcpOauthTokenEndpointAuthParam =
  | CreateMcpOauthTokenEndpointAuthParamNone
  | CreateMcpOauthTokenEndpointAuthParamClientSecretBasic
  | CreateMcpOauthTokenEndpointAuthParamClientSecretPost
type CreateMcpOauthRefreshParam = {
  token_endpoint: string
  client_id: string
  resource?: (string | null) | undefined
  scope?: (string | null) | undefined
  refresh_token: string
  token_endpoint_auth: CreateMcpOauthTokenEndpointAuthParam
}
type CreateVaultCredentialAuthParamMcpOauth = {
  type: 'mcp_oauth'
  mcp_server_url: string
  access_token: string
  expires_at?: (string | null) | undefined
  refresh?: CreateMcpOauthRefreshParam | ({ [x: string]: unknown } | null) | undefined
}
type CreateVaultCredentialAuthParamStaticBearer = {
  type: 'static_bearer'
  mcp_server_url: string
  token: string
}
type VaultCredentialNetworkingParamUnrestricted = { type: 'unrestricted' }
type VaultCredentialNetworkingParamLimited = { type: 'limited'; allowed_hosts: string[] }
type VaultCredentialNetworkingParam =
  | VaultCredentialNetworkingParamUnrestricted
  | VaultCredentialNetworkingParamLimited
type CreateVaultCredentialAuthParamEnvironmentVariable = {
  type: 'environment_variable'
  secret_name: string
  secret_value: string
  networking: VaultCredentialNetworkingParam
}
type CreateVaultCredentialAuthParam =
  | CreateVaultCredentialAuthParamMcpOauth
  | CreateVaultCredentialAuthParamStaticBearer
  | CreateVaultCredentialAuthParamEnvironmentVariable
type CreateVaultCredentialParams = {
  name: string
  auth: CreateVaultCredentialAuthParam
  metadata?: { [x: string]: string } | undefined
}
type RotateMcpOauthTokenEndpointAuthParamClientSecretBasic = {
  type: 'client_secret_basic'
  client_secret?: (string | null) | undefined
}
type RotateMcpOauthTokenEndpointAuthParamClientSecretPost = {
  type: 'client_secret_post'
  client_secret?: (string | null) | undefined
}
type RotateMcpOauthTokenEndpointAuthParam =
  | RotateMcpOauthTokenEndpointAuthParamClientSecretBasic
  | RotateMcpOauthTokenEndpointAuthParamClientSecretPost
type RotateMcpOauthRefreshParam = {
  refresh_token?: (string | null) | undefined
  scope?: (string | null) | undefined
  token_endpoint_auth?:
    | RotateMcpOauthTokenEndpointAuthParam
    | ({ [x: string]: unknown } | null)
    | undefined
}
type RotateVaultCredentialAuthParamMcpOauth = {
  type: 'mcp_oauth'
  access_token?: (string | null) | undefined
  expires_at?: (string | null) | undefined
  refresh?: RotateMcpOauthRefreshParam | ({ [x: string]: unknown } | null) | undefined
}
type RotateVaultCredentialAuthParamStaticBearer = { type: 'static_bearer'; token: string }
type RotateVaultCredentialAuthParamEnvironmentVariable = {
  type: 'environment_variable'
  secret_value: string
}
type RotateVaultCredentialAuthParam =
  | RotateVaultCredentialAuthParamMcpOauth
  | RotateVaultCredentialAuthParamStaticBearer
  | RotateVaultCredentialAuthParamEnvironmentVariable
type RotateVaultCredentialParams = {
  auth?: RotateVaultCredentialAuthParam | undefined
  metadata?: { [x: string]: string } | undefined
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
  signing_secret_hint: string | ({ [x: string]: unknown } | null)
}
type WebhookEndpointListResource = {
  object: 'list'
  data: WebhookEndpointBody[]
  first_id: string | ({ [x: string]: unknown } | null)
  last_id: string | ({ [x: string]: unknown } | null)
  has_more: boolean
}
type ProjectEventTypeEnum =
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
type PublicCreateEndpointBody = { name: string; url: string; event_types: ProjectEventTypeEnum[] }
type WebhookEndpointWithSecretResource = {
  id: string
  object: 'webhook_endpoint'
  created_at: number
  updated_at?: number | undefined
  name: string
  url: string
  event_types: string[]
  signing_secret_hint: string | ({ [x: string]: unknown } | null)
  signing_secret: string
}
type PublicUpdateEndpointBody = {
  name?: string | undefined
  url?: string | undefined
  event_types?: ProjectEventTypeEnum[] | undefined
}
type DeletedWebhookEndpointResource = {
  id: string
  object: 'webhook_endpoint.deleted'
  deleted: boolean
}
type PublicRotateSecretBody = { keep_old_secret_active_for_24_hours?: boolean | undefined }
type PublicTestEndpointBody = { event_type: ProjectEventTypeEnum }
type WebhookEndpointTestResultResource = {
  object: 'webhook_endpoint.test'
  webhook_endpoint_id: string
  event_type: string
  status_code: number
  success: true
}
type WebhookEventTypeListResource = { object: 'list'; data: string[] }
type BetaMetadata = { [x: string]: string } | ({ [x: string]: unknown } | null)
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
type BetaResponseFormatText = { type: 'text' }
type BetaResponseFormatJsonSchemaSchema = { [x: string]: unknown }
type BetaTextResponseFormatJsonSchema = {
  type: 'json_schema'
  description?: string | undefined
  name: string
  schema: BetaResponseFormatJsonSchemaSchema
  strict?: boolean | ({ [x: string]: unknown } | null) | undefined
}
type BetaResponseFormatJsonObject = { type: 'json_object' }
type BetaTextResponseFormatConfiguration =
  | BetaResponseFormatText
  | BetaTextResponseFormatJsonSchema
  | BetaResponseFormatJsonObject
type BetaVerbosity = 'low' | 'medium' | 'high' | ({ [x: string]: unknown } | null)
type BetaResponseTextParam = {
  format?: BetaTextResponseFormatConfiguration | undefined
  verbosity?: BetaVerbosity | undefined
}
type BetaCallableToolAllowedCaller = 'direct' | 'programmatic'
type BetaFunctionTool = {
  type: 'function'
  name: string
  async?: boolean | undefined
  description?: string | ({ [x: string]: unknown } | null) | undefined
  parameters: { [x: string]: { [x: string]: unknown } } | ({ [x: string]: unknown } | null)
  output_schema?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  strict: boolean | ({ [x: string]: unknown } | null)
  defer_loading?: boolean | undefined
  allowed_callers?: BetaCallableToolAllowedCaller[] | ({ [x: string]: unknown } | null) | undefined
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
  filters?: BetaFilters | ({ [x: string]: unknown } | null) | undefined
}
type BetaComputerTool = { type: 'computer' }
type BetaComputerEnvironment = 'windows' | 'mac' | 'linux' | 'ubuntu' | 'browser'
type BetaComputerUsePreviewTool = {
  type: 'computer_use_preview'
  environment: BetaComputerEnvironment
  display_width: number
  display_height: number
}
type BetaWebSearchApproximateLocation =
  | {
      type?: 'approximate' | undefined
      country?: string | ({ [x: string]: unknown } | null) | undefined
      region?: string | ({ [x: string]: unknown } | null) | undefined
      city?: string | ({ [x: string]: unknown } | null) | undefined
      timezone?: string | ({ [x: string]: unknown } | null) | undefined
    }
  | ({ [x: string]: unknown } | null)
type BetaWebSearchTool = {
  type: 'web_search' | 'web_search_2025_08_26'
  external_web_access?: boolean | undefined
  filters?:
    | { allowed_domains?: string[] | ({ [x: string]: unknown } | null) | undefined }
    | ({ [x: string]: unknown } | null)
    | undefined
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
  headers?: { [x: string]: string } | ({ [x: string]: unknown } | null) | undefined
  allowed_tools?: string[] | BetaMCPToolFilter | ({ [x: string]: unknown } | null) | undefined
  allowed_callers?: BetaCallableToolAllowedCaller[] | ({ [x: string]: unknown } | null) | undefined
  require_approval?:
    | { always?: BetaMCPToolFilter | undefined; never?: BetaMCPToolFilter | undefined }
    | 'always'
    | 'never'
    | ({ [x: string]: unknown } | null)
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
  memory_limit?: BetaContainerMemoryLimit | ({ [x: string]: unknown } | null) | undefined
  network_policy?:
    | BetaContainerNetworkPolicyDisabledParam
    | BetaContainerNetworkPolicyAllowlistParam
    | undefined
}
type BetaCodeInterpreterTool = {
  type: 'code_interpreter'
  container: string | BetaAutoCodeInterpreterToolParam
  allowed_callers?: BetaCallableToolAllowedCaller[] | ({ [x: string]: unknown } | null) | undefined
}
type BetaProgrammaticToolCallingParam = { type: 'programmatic_tool_calling' }
type BetaReasoningEffortEnum = 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | 'max'
type BetaSvgReasoningParam = { effort?: BetaReasoningEffortEnum | undefined }
type BetaSvgParam = {
  model?: string | undefined
  reasoning?: BetaSvgReasoningParam | ({ [x: string]: unknown } | null) | undefined
}
type BetaInputFidelity = 'high' | 'low'
type BetaImageGenActionEnum = 'generate' | 'edit' | 'auto'
type BetaImageGenTool = {
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
    | undefined
  complexity?: 'low' | 'medium' | 'high' | undefined
  quality?: 'low' | 'medium' | 'high' | 'xhigh' | 'max' | 'auto' | undefined
  size?: string | '1024x1024' | '1024x1536' | '1536x1024' | 'auto' | undefined
  output_format?: 'png' | 'webp' | 'jpeg' | 'gif' | 'svg' | undefined
  frame_count?: number | undefined
  frame_duration_ms?: number | undefined
  svg?: BetaSvgParam | undefined
  output_compression?: number | undefined
  moderation?: 'auto' | 'low' | undefined
  background?: 'transparent' | 'opaque' | 'auto' | undefined
  input_fidelity?: BetaInputFidelity | ({ [x: string]: unknown } | null) | undefined
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
  memory_limit?: BetaContainerMemoryLimit | ({ [x: string]: unknown } | null) | undefined
  network_policy?:
    | BetaContainerNetworkPolicyDisabledParam
    | BetaContainerNetworkPolicyAllowlistParam
    | undefined
  skills?: (BetaSkillReferenceParam | BetaInlineSkillParam)[] | undefined
}
type BetaLocalSkillParam = { name: string; description: string; path: string }
type BetaLocalEnvironmentParam = { type: 'local'; skills?: BetaLocalSkillParam[] | undefined }
type BetaContainerReferenceParam = { type: 'container_reference'; container_id: string }
type BetaFunctionShellToolParam = {
  type: 'shell'
  environment?:
    | BetaContainerAutoParam
    | BetaLocalEnvironmentParam
    | BetaContainerReferenceParam
    | ({ [x: string]: unknown } | null)
    | undefined
  allowed_callers?: BetaCallableToolAllowedCaller[] | ({ [x: string]: unknown } | null) | undefined
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
  format?: BetaCustomTextFormatParam | BetaCustomGrammarFormatParam | undefined
  defer_loading?: boolean | undefined
  allowed_callers?: BetaCallableToolAllowedCaller[] | ({ [x: string]: unknown } | null) | undefined
}
type BetaEmptyModelParam = { [x: string]: unknown }
type BetaFunctionToolParam = {
  name: string
  description?: string | ({ [x: string]: unknown } | null) | undefined
  parameters?: BetaEmptyModelParam | ({ [x: string]: unknown } | null) | undefined
  strict?: boolean | ({ [x: string]: unknown } | null) | undefined
  type: 'function'
  async?: boolean | undefined
  output_schema?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  defer_loading?: boolean | undefined
  allowed_callers?: BetaCallableToolAllowedCaller[] | ({ [x: string]: unknown } | null) | undefined
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
  description?: string | ({ [x: string]: unknown } | null) | undefined
  parameters?: BetaEmptyModelParam | ({ [x: string]: unknown } | null) | undefined
}
type BetaApproximateLocation = {
  type: 'approximate'
  country?: string | ({ [x: string]: unknown } | null) | undefined
  region?: string | ({ [x: string]: unknown } | null) | undefined
  city?: string | ({ [x: string]: unknown } | null) | undefined
  timezone?: string | ({ [x: string]: unknown } | null) | undefined
}
type BetaSearchContextSize = 'low' | 'medium' | 'high'
type BetaSearchContentType = 'text' | 'image'
type BetaWebSearchPreviewTool = {
  type: 'web_search_preview' | 'web_search_preview_2025_03_11'
  user_location?: BetaApproximateLocation | ({ [x: string]: unknown } | null) | undefined
  search_context_size?: BetaSearchContextSize | undefined
  search_content_types?: BetaSearchContentType[] | undefined
}
type BetaApplyPatchToolParam = {
  type: 'apply_patch'
  allowed_callers?: BetaCallableToolAllowedCaller[] | ({ [x: string]: unknown } | null) | undefined
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
  tools: { [x: string]: unknown }[]
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
type BetaToolChoiceMCP = {
  type: 'mcp'
  server_label: string
  name?: string | ({ [x: string]: unknown } | null) | undefined
}
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
  image_url?: string | ({ [x: string]: unknown } | null) | undefined
  file_id?: string | ({ [x: string]: unknown } | null) | undefined
  detail: BetaImageDetail
  prompt_cache_breakpoint?: BetaPromptCacheBreakpointConfig | undefined
}
type BetaFileInputDetail = 'auto' | 'low' | 'high'
type BetaInputFileContent = {
  type: 'input_file'
  file_id?: string | ({ [x: string]: unknown } | null) | undefined
  filename?: string | undefined
  file_data?: string | undefined
  prompt_cache_breakpoint?: BetaPromptCacheBreakpointConfig | undefined
  file_url?: string | undefined
  detail?: BetaFileInputDetail | undefined
}
type BetaResponsePromptVariables =
  | { [x: string]: string | BetaInputTextContent | BetaInputImageContent | BetaInputFileContent }
  | ({ [x: string]: unknown } | null)
type BetaPrompt =
  | {
      id: string
      version?: string | ({ [x: string]: unknown } | null) | undefined
      variables?: BetaResponsePromptVariables | undefined
    }
  | ({ [x: string]: unknown } | null)
type BetaCyberAccessProgramEnum = 'standard' | 'daybreak_blue' | 'daybreak_red'
type BetaAccessProgramsParam = { cyber?: BetaCyberAccessProgramEnum | undefined }
type BetaImageContextCompression = 'auto' | 'enabled' | 'disabled'
type BetaImageOptionsParam = { context_compression?: BetaImageContextCompression | undefined }
type BetaPromptCacheModeEnum = 'implicit' | 'explicit'
type BetaResponsePromptCacheOptionsParam = {
  ttl?: '30m' | '12h' | undefined
  mode?: BetaPromptCacheModeEnum | undefined
  prewarm?: boolean | undefined
  comparison_response_id?: string | ({ [x: string]: unknown } | null) | undefined
}
type BetaServiceTierResponses =
  | 'auto'
  | 'default'
  | 'flex'
  | 'scale'
  | 'priority'
  | 'fast'
  | 'ultrafast'
  | ({ [x: string]: unknown } | null)
type BetaReasoningModeEnum = string | 'standard' | 'pro'
type BetaReasoningEffort =
  | 'none'
  | 'minimal'
  | 'low'
  | 'medium'
  | 'high'
  | 'xhigh'
  | 'max'
  | ({ [x: string]: unknown } | null)
type BetaReasoning = {
  mode?: BetaReasoningModeEnum | undefined
  effort?: BetaReasoningEffort | undefined
  summary?: 'auto' | 'concise' | 'detailed' | ({ [x: string]: unknown } | null) | undefined
  context?: 'auto' | 'current_turn' | 'all_turns' | ({ [x: string]: unknown } | null) | undefined
  generate_summary?: 'auto' | 'concise' | 'detailed' | ({ [x: string]: unknown } | null) | undefined
}
type BetaInputContent = BetaInputTextContent | BetaInputImageContent | BetaInputFileContent
type BetaInputMessageContentList = BetaInputContent[]
type BetaMessagePhase = 'commentary' | 'final_answer'
type BetaEasyInputMessage = {
  role: 'user' | 'assistant' | 'system' | 'developer'
  content: string | BetaInputMessageContentList
  phase?: BetaMessagePhase | ({ [x: string]: unknown } | null) | undefined
  type?: 'message' | undefined
}
type BetaAgentTag = { agent_name: string }
type BetaInputMessage = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type?: 'message' | undefined
  role: 'user' | 'system' | 'developer'
  status?: 'in_progress' | 'completed' | 'incomplete' | undefined
  content: BetaInputMessageContentList
}
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
type BetaOutputMessage = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  id: string
  type: 'message'
  role: 'assistant'
  content: BetaOutputMessageContent[]
  phase?: BetaMessagePhase | ({ [x: string]: unknown } | null) | undefined
  status: 'in_progress' | 'completed' | 'incomplete'
}
type BetaVectorStoreFileAttributes =
  | { [x: string]: string | number | boolean }
  | ({ [x: string]: unknown } | null)
type BetaFileSearchToolCall = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  id: string
  type: 'file_search_call'
  status: 'in_progress' | 'searching' | 'completed' | 'incomplete' | 'failed'
  queries: string[]
  results?:
    | {
        file_id?: string | undefined
        text?: string | undefined
        filename?: string | undefined
        attributes?: BetaVectorStoreFileAttributes | undefined
        score?: number | undefined
      }[]
    | ({ [x: string]: unknown } | null)
    | undefined
}
type BetaClickButtonType = 'left' | 'right' | 'wheel' | 'back' | 'forward'
type BetaClickParam = {
  type: 'click'
  button: BetaClickButtonType
  x: number
  y: number
  keys?: string[] | ({ [x: string]: unknown } | null) | undefined
}
type BetaDoubleClickAction = {
  type: 'double_click'
  x: number
  y: number
  keys: string[] | ({ [x: string]: unknown } | null)
}
type BetaCoordParam = { x: number; y: number }
type BetaDragParam = {
  type: 'drag'
  path: BetaCoordParam[]
  keys?: string[] | ({ [x: string]: unknown } | null) | undefined
}
type BetaKeyPressAction = { type: 'keypress'; keys: string[] }
type BetaMoveParam = {
  type: 'move'
  x: number
  y: number
  keys?: string[] | ({ [x: string]: unknown } | null) | undefined
}
type BetaScreenshotParam = { type: 'screenshot' }
type BetaScrollParam = {
  type: 'scroll'
  x: number
  y: number
  scroll_x: number
  scroll_y: number
  keys?: string[] | ({ [x: string]: unknown } | null) | undefined
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
  code?: string | ({ [x: string]: unknown } | null) | undefined
  message?: string | ({ [x: string]: unknown } | null) | undefined
}
type BetaComputerToolCall = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'computer_call'
  id: string
  call_id: string
  action?: BetaComputerAction | undefined
  actions?: BetaComputerActionList | undefined
  pending_safety_checks: BetaComputerCallSafetyCheckParam[]
  status: 'in_progress' | 'completed' | 'incomplete'
}
type BetaAgentTagParam = { agent_name: string }
type BetaComputerScreenshotImage = {
  type: 'computer_screenshot'
  image_url?: string | undefined
  file_id?: string | undefined
}
type BetaFunctionCallItemStatus = 'in_progress' | 'completed' | 'incomplete'
type BetaComputerCallOutputItemParam = {
  agent?: BetaAgentTagParam | ({ [x: string]: unknown } | null) | undefined
  id?: string | ({ [x: string]: unknown } | null) | undefined
  call_id: string
  type: 'computer_call_output'
  output: BetaComputerScreenshotImage
  acknowledged_safety_checks?:
    | BetaComputerCallSafetyCheckParam[]
    | ({ [x: string]: unknown } | null)
    | undefined
  status?: BetaFunctionCallItemStatus | ({ [x: string]: unknown } | null) | undefined
}
type BetaWebSearchCallStatus = 'in_progress' | 'searching' | 'completed' | 'failed' | 'incomplete'
type BetaWebSearchActionSearch = {
  type: 'search'
  query?: string | undefined
  queries?: string[] | undefined
  sources?: { type: 'url'; url: string }[] | undefined
}
type BetaWebSearchActionOpenPage = {
  type: 'open_page'
  url?: string | ({ [x: string]: unknown } | null) | undefined
}
type BetaWebSearchActionFind = {
  type: 'find_in_page'
  url?: string | ({ [x: string]: unknown } | null) | undefined
  pattern: string
}
type BetaWebSearchToolCall = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  id: string
  type: 'web_search_call'
  status: BetaWebSearchCallStatus
  action?:
    | BetaWebSearchActionSearch
    | BetaWebSearchActionOpenPage
    | BetaWebSearchActionFind
    | undefined
}
type BetaDirectToolCallCaller = { type: 'direct' }
type BetaProgramToolCallCaller = { type: 'program'; caller_id: string }
type BetaToolCallCaller = BetaDirectToolCallCaller | BetaProgramToolCallCaller
type BetaFunctionToolCall = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  id?: string | undefined
  type: 'function_call'
  call_id: string
  caller?: BetaToolCallCaller | ({ [x: string]: unknown } | null) | undefined
  namespace?: string | undefined
  name: string
  arguments: string
  status?: 'in_progress' | 'completed' | 'incomplete' | undefined
  async?: boolean | undefined
}
type BetaPromptCacheBreakpointParam = { mode: 'explicit'; ttl?: '30m' | '12h' | undefined }
type BetaInputTextContentParam = {
  type: 'input_text'
  text: string
  prompt_cache_breakpoint?:
    | BetaPromptCacheBreakpointParam
    | ({ [x: string]: unknown } | null)
    | undefined
}
type BetaDetailEnum = 'low' | 'high' | 'auto' | 'original'
type BetaInputImageContentParamAutoParam = {
  type: 'input_image'
  image_url?: string | ({ [x: string]: unknown } | null) | undefined
  file_id?: string | ({ [x: string]: unknown } | null) | undefined
  detail?: BetaDetailEnum | ({ [x: string]: unknown } | null) | undefined
  prompt_cache_breakpoint?:
    | BetaPromptCacheBreakpointParam
    | ({ [x: string]: unknown } | null)
    | undefined
}
type BetaFileDetailEnum = 'auto' | 'low' | 'high'
type BetaInputFileContentParam = {
  type: 'input_file'
  file_id?: string | ({ [x: string]: unknown } | null) | undefined
  filename?: string | ({ [x: string]: unknown } | null) | undefined
  file_data?: string | ({ [x: string]: unknown } | null) | undefined
  file_url?: string | ({ [x: string]: unknown } | null) | undefined
  detail?: BetaFileDetailEnum | undefined
  prompt_cache_breakpoint?:
    | BetaPromptCacheBreakpointParam
    | ({ [x: string]: unknown } | null)
    | undefined
}
type BetaDirectToolCallCallerParam = { type: 'direct' }
type BetaProgramToolCallCallerParam = { type: 'program'; caller_id: string }
type BetaToolCallCallerParam = BetaDirectToolCallCallerParam | BetaProgramToolCallCallerParam
type BetaFunctionCallOutputItemParam = {
  agent?: BetaAgentTagParam | ({ [x: string]: unknown } | null) | undefined
  id?: string | ({ [x: string]: unknown } | null) | undefined
  call_id?: string | ({ [x: string]: unknown } | null) | undefined
  type: 'function_call_output'
  output:
    | string
    | (
        | BetaInputTextContentParam
        | BetaInputImageContentParamAutoParam
        | BetaInputFileContentParam
      )[]
  name?: string | ({ [x: string]: unknown } | null) | undefined
  namespace?: string | ({ [x: string]: unknown } | null) | undefined
  caller?: BetaToolCallCallerParam | ({ [x: string]: unknown } | null) | undefined
  status?: BetaFunctionCallItemStatus | ({ [x: string]: unknown } | null) | undefined
}
type BetaEncryptedContentParam = { type: 'encrypted_content'; encrypted_content: string }
type BetaAgentMessageItemParam = {
  agent?: BetaAgentTagParam | ({ [x: string]: unknown } | null) | undefined
  id?: string | ({ [x: string]: unknown } | null) | undefined
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
  agent?: BetaAgentTagParam | ({ [x: string]: unknown } | null) | undefined
  id?: string | ({ [x: string]: unknown } | null) | undefined
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
  agent?: BetaAgentTagParam | ({ [x: string]: unknown } | null) | undefined
  id?: string | ({ [x: string]: unknown } | null) | undefined
  call_id: string
  type: 'multi_agent_call_output'
  action: BetaMultiAgentAction1
  output: BetaOutputTextContentParam[]
}
type BetaToolSearchCallItemParam = {
  agent?: BetaAgentTagParam | ({ [x: string]: unknown } | null) | undefined
  id?: string | ({ [x: string]: unknown } | null) | undefined
  call_id?: string | ({ [x: string]: unknown } | null) | undefined
  type: 'tool_search_call'
  execution?: BetaToolSearchExecutionType | undefined
  arguments: BetaEmptyModelParam
  status?: BetaFunctionCallItemStatus | ({ [x: string]: unknown } | null) | undefined
}
type BetaToolSearchOutputFunctionToolParam = {
  name: string
  description?: string | ({ [x: string]: unknown } | null) | undefined
  parameters?: BetaEmptyModelParam | ({ [x: string]: unknown } | null) | undefined
  strict?: boolean | ({ [x: string]: unknown } | null) | undefined
  type: 'function'
  async?: boolean | undefined
  output_schema?:
    | { [x: string]: { [x: string]: unknown } }
    | ({ [x: string]: unknown } | null)
    | undefined
  defer_loading?: boolean | undefined
  allowed_callers?: BetaCallableToolAllowedCaller[] | ({ [x: string]: unknown } | null) | undefined
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
  agent?: BetaAgentTagParam | ({ [x: string]: unknown } | null) | undefined
  id?: string | ({ [x: string]: unknown } | null) | undefined
  call_id?: string | ({ [x: string]: unknown } | null) | undefined
  type: 'tool_search_output'
  execution?: BetaToolSearchExecutionType | undefined
  tools: BetaToolSearchOutputTool[]
  status?: BetaFunctionCallItemStatus | ({ [x: string]: unknown } | null) | undefined
}
type BetaAdditionalToolsItemParam = {
  agent?: BetaAgentTagParam | ({ [x: string]: unknown } | null) | undefined
  id?: string | ({ [x: string]: unknown } | null) | undefined
  type: 'additional_tools'
  role: 'developer'
  tools: BetaTool[]
}
type BetaResponseConfigurationUpdateItemParam = {
  agent?: BetaAgentTagParam | ({ [x: string]: unknown } | null) | undefined
  id?: string | ({ [x: string]: unknown } | null) | undefined
  type: 'configuration_update'
  reasoning?: { effort?: BetaReasoningEffort | undefined } | undefined
  text?: { format: BetaResponseFormatText | BetaTextResponseFormatJsonSchema } | undefined
}
type BetaSummaryTextContent = { type: 'summary_text'; text: string }
type BetaReasoningTextContent = { type: 'reasoning_text'; text: string }
type BetaReasoningItem = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'reasoning'
  id: string
  encrypted_content?: string | ({ [x: string]: unknown } | null) | undefined
  summary: BetaSummaryTextContent[]
  content?: BetaReasoningTextContent[] | undefined
  status?: 'in_progress' | 'completed' | 'incomplete' | undefined
}
type BetaCompactionSummaryItemParam = {
  agent?: BetaAgentTagParam | ({ [x: string]: unknown } | null) | undefined
  id?: string | ({ [x: string]: unknown } | null) | undefined
  type: 'compaction'
  encrypted_content: string
}
type BetaImageGenToolCallModerationDetails = {
  moderation_stage: 'input' | 'output' | 'unknown'
  categories: string[]
}
type BetaImageGenToolCallError = {
  code: string | ({ [x: string]: unknown } | null)
  type: string
  message: string
  param: string | ({ [x: string]: unknown } | null)
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
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'image_generation_call'
  id: string
  status: 'in_progress' | 'completed' | 'generating' | 'failed'
  result: string | ({ [x: string]: unknown } | null)
  error?: BetaImageGenToolCallError | undefined
  size?:
    | string
    | '1024x1024'
    | '1024x1536'
    | '1536x1024'
    | ({ [x: string]: unknown } | null)
    | undefined
  quality?:
    | 'low'
    | 'medium'
    | 'high'
    | 'xhigh'
    | 'max'
    | 'auto'
    | ({ [x: string]: unknown } | null)
    | undefined
  action?: BetaImageGenActionEnum | ({ [x: string]: unknown } | null) | undefined
  background?: BetaImageBackground | ({ [x: string]: unknown } | null) | undefined
  output_format?: BetaImageOutputFormat | ({ [x: string]: unknown } | null) | undefined
  svg_usage?: BetaSvgUsage | undefined
  revised_prompt?: string | ({ [x: string]: unknown } | null) | undefined
}
type BetaCodeInterpreterOutputLogs = { type: 'logs'; logs: string }
type BetaCodeInterpreterOutputImage = { type: 'image'; url: string }
type BetaCodeInterpreterToolCall = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'code_interpreter_call'
  id: string
  status: 'in_progress' | 'completed' | 'incomplete' | 'interpreting' | 'failed'
  container_id: string
  code: string | ({ [x: string]: unknown } | null)
  outputs:
    | (BetaCodeInterpreterOutputLogs | BetaCodeInterpreterOutputImage)[]
    | ({ [x: string]: unknown } | null)
}
type BetaLocalShellExecAction = {
  type: 'exec'
  command: string[]
  timeout_ms?: number | ({ [x: string]: unknown } | null) | undefined
  working_directory?: string | ({ [x: string]: unknown } | null) | undefined
  env: { [x: string]: string }
  user?: string | ({ [x: string]: unknown } | null) | undefined
}
type BetaLocalShellToolCall = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'local_shell_call'
  id: string
  call_id: string
  action: BetaLocalShellExecAction
  status: 'in_progress' | 'completed' | 'incomplete'
}
type BetaLocalShellToolCallOutput = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'local_shell_call_output'
  id: string
  output: string
  status?:
    | 'in_progress'
    | 'completed'
    | 'incomplete'
    | ({ [x: string]: unknown } | null)
    | undefined
}
type BetaFunctionShellActionParam = {
  commands: string[]
  timeout_ms?: number | ({ [x: string]: unknown } | null) | undefined
  max_output_length?: number | ({ [x: string]: unknown } | null) | undefined
}
type BetaFunctionShellCallItemStatus = 'in_progress' | 'completed' | 'incomplete'
type BetaFunctionShellCallItemParam = {
  agent?: BetaAgentTagParam | ({ [x: string]: unknown } | null) | undefined
  id?: string | ({ [x: string]: unknown } | null) | undefined
  call_id: string
  caller?: BetaToolCallCallerParam | ({ [x: string]: unknown } | null) | undefined
  type: 'shell_call'
  action: BetaFunctionShellActionParam
  status?: BetaFunctionShellCallItemStatus | ({ [x: string]: unknown } | null) | undefined
  environment?:
    | BetaLocalEnvironmentParam
    | BetaContainerReferenceParam
    | ({ [x: string]: unknown } | null)
    | undefined
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
  agent?: BetaAgentTagParam | ({ [x: string]: unknown } | null) | undefined
  id?: string | ({ [x: string]: unknown } | null) | undefined
  call_id: string
  caller?: BetaToolCallCallerParam | ({ [x: string]: unknown } | null) | undefined
  type: 'shell_call_output'
  output: BetaFunctionShellCallOutputContentParam[]
  status?: BetaFunctionShellCallItemStatus | ({ [x: string]: unknown } | null) | undefined
  max_output_length?: number | ({ [x: string]: unknown } | null) | undefined
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
  agent?: BetaAgentTagParam | ({ [x: string]: unknown } | null) | undefined
  type: 'apply_patch_call'
  id?: string | ({ [x: string]: unknown } | null) | undefined
  call_id: string
  caller?: BetaToolCallCallerParam | ({ [x: string]: unknown } | null) | undefined
  status: BetaApplyPatchCallStatusParam
  operation: BetaApplyPatchOperationParam
}
type BetaApplyPatchCallOutputStatusParam = 'completed' | 'failed'
type BetaApplyPatchToolCallOutputItemParam = {
  agent?: BetaAgentTagParam | ({ [x: string]: unknown } | null) | undefined
  type: 'apply_patch_call_output'
  id?: string | ({ [x: string]: unknown } | null) | undefined
  call_id: string
  caller?: BetaToolCallCallerParam | ({ [x: string]: unknown } | null) | undefined
  status: BetaApplyPatchCallOutputStatusParam
  output?: string | ({ [x: string]: unknown } | null) | undefined
}
type BetaMCPListToolsTool = {
  name: string
  description?: string | ({ [x: string]: unknown } | null) | undefined
  input_schema: { [x: string]: unknown }
  annotations?: { [x: string]: unknown } | ({ [x: string]: unknown } | null) | undefined
}
type BetaMCPListTools = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'mcp_list_tools'
  id: string
  server_label: string
  tools: BetaMCPListToolsTool[]
  error?: string | ({ [x: string]: unknown } | null) | undefined
}
type BetaMCPApprovalRequest = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'mcp_approval_request'
  id: string
  server_label: string
  name: string
  arguments: string
}
type BetaMCPApprovalResponse = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'mcp_approval_response'
  id?: string | ({ [x: string]: unknown } | null) | undefined
  approval_request_id: string
  approve: boolean
  reason?: string | ({ [x: string]: unknown } | null) | undefined
}
type BetaMCPProtocolError = { type: 'mcp_protocol_error'; code: number; message: string }
type BetaMCPToolExecutionError = {
  type: 'mcp_tool_execution_error'
  content: { [x: string]: unknown }
}
type BetaHTTPError = { type: 'http_error'; code: number; message: string }
type BetaMCPToolCallError = BetaMCPProtocolError | BetaMCPToolExecutionError | BetaHTTPError
type BetaMCPToolCallStatus = 'in_progress' | 'completed' | 'incomplete' | 'calling' | 'failed'
type BetaMCPToolCall = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'mcp_call'
  id: string
  server_label: string
  name: string
  arguments: string
  output?: string | ({ [x: string]: unknown } | null) | undefined
  error?: BetaMCPToolCallError | ({ [x: string]: unknown } | null) | undefined
  status?: BetaMCPToolCallStatus | undefined
  approval_request_id?: string | ({ [x: string]: unknown } | null) | undefined
}
type BetaFunctionAndCustomToolCallOutput =
  | BetaInputTextContent
  | BetaInputImageContent
  | BetaInputFileContent
type BetaCustomToolCallOutput = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'custom_tool_call_output'
  id?: string | undefined
  call_id: string
  caller?: BetaToolCallCallerParam | ({ [x: string]: unknown } | null) | undefined
  output: string | BetaFunctionAndCustomToolCallOutput[]
}
type BetaCustomToolCall = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'custom_tool_call'
  id?: string | undefined
  call_id: string
  caller?: BetaToolCallCaller | ({ [x: string]: unknown } | null) | undefined
  namespace?: string | undefined
  name: string
  input: string
  async?: boolean | undefined
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
  agent?: BetaAgentTagParam | ({ [x: string]: unknown } | null) | undefined
  id?: string | ({ [x: string]: unknown } | null) | undefined
  type: 'compaction_trigger'
}
type BetaItemReferenceParam = {
  agent?: BetaAgentTagParam | ({ [x: string]: unknown } | null) | undefined
  type?: 'item_reference' | ({ [x: string]: unknown } | null) | undefined
  id: string
}
type BetaProgramItemParam = {
  agent?: BetaAgentTagParam | ({ [x: string]: unknown } | null) | undefined
  id: string
  type: 'program'
  call_id: string
  code: string
  fingerprint: string
}
type BetaProgramOutputItemStatus = 'completed' | 'incomplete'
type BetaProgramOutputItemParam = {
  agent?: BetaAgentTagParam | ({ [x: string]: unknown } | null) | undefined
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
type BetaInputParam = string | BetaInputItem[]
type BetaIncludeEnum =
  | 'file_search_call.results'
  | 'web_search_call.results'
  | 'web_search_call.action.sources'
  | 'message.input_image.image_url'
  | 'computer_call_output.output.image_url'
  | 'code_interpreter_call.outputs'
  | 'reasoning.encrypted_content'
  | 'message.output_text.logprobs'
type BetaModerationMode = 'score' | 'block'
type BetaModerationConfigParam = { mode: BetaModerationMode }
type BetaModerationPolicyParam = {
  input?: BetaModerationConfigParam | ({ [x: string]: unknown } | null) | undefined
  output?: BetaModerationConfigParam | ({ [x: string]: unknown } | null) | undefined
}
type BetaModerationParam = {
  model: string
  policy?: BetaModerationPolicyParam | ({ [x: string]: unknown } | null) | undefined
}
type BetaBackgroundCompletionWindowEnum = 'soonest' | '2h' | '8h'
type BetaBackgroundOptionsParam = {
  completion_window?: BetaBackgroundCompletionWindowEnum | undefined
  continuation_id?: string | undefined
}
type BetaResponseStreamOptions =
  | { include_obfuscation?: boolean | undefined }
  | ({ [x: string]: unknown } | null)
type BetaConversationParam_2 = { id: string }
type BetaConversationParam = string | BetaConversationParam_2
type BetaContextManagementParam = {
  type: string
  compact_threshold?: number | ({ [x: string]: unknown } | null) | undefined
}
type BetaMultiAgentParam = { enabled: boolean; max_concurrent_subagents?: number | undefined }
type BetaCreateResponse = {
  metadata?: BetaMetadata | undefined
  top_logprobs?: number | undefined
  temperature?: number | ({ [x: string]: unknown } | null) | undefined
  top_p?: number | ({ [x: string]: unknown } | null) | undefined
  user?: (string | null) | undefined
  safety_identifier?: string | ({ [x: string]: unknown } | null) | undefined
  prompt_cache_key?: string | ({ [x: string]: unknown } | null) | undefined
  prompt_cache_retention?: 'in_memory' | '24h' | ({ [x: string]: unknown } | null) | undefined
  previous_response_id?: string | ({ [x: string]: unknown } | null) | undefined
  model?: BetaModelIdsResponses | undefined
  background?: boolean | ({ [x: string]: unknown } | null) | undefined
  max_tool_calls?: number | ({ [x: string]: unknown } | null) | undefined
  text?: BetaResponseTextParam | undefined
  tools?: BetaToolsArray | undefined
  tool_choice?: BetaToolChoiceParam | undefined
  prompt?: BetaPrompt | undefined
  access_programs?: BetaAccessProgramsParam | undefined
  image?: BetaImageOptionsParam | undefined
  prompt_cache_options?: BetaResponsePromptCacheOptionsParam | undefined
  service_tier?: BetaServiceTierResponses | undefined
  truncation?: 'auto' | 'disabled' | ({ [x: string]: unknown } | null) | undefined
  reasoning?: BetaReasoning | ({ [x: string]: unknown } | null) | undefined
  input?: BetaInputParam | undefined
  include?: BetaIncludeEnum[] | ({ [x: string]: unknown } | null) | undefined
  parallel_tool_calls?: boolean | ({ [x: string]: unknown } | null) | undefined
  store?: boolean | ({ [x: string]: unknown } | null) | undefined
  instructions?: string | ({ [x: string]: unknown } | null) | undefined
  moderation?: BetaModerationParam | ({ [x: string]: unknown } | null) | undefined
  background_options?: BetaBackgroundOptionsParam | undefined
  stream?: boolean | ({ [x: string]: unknown } | null) | undefined
  stream_options?: BetaResponseStreamOptions | undefined
  conversation?: BetaConversationParam | ({ [x: string]: unknown } | null) | undefined
  context_management?: BetaContextManagementParam[] | ({ [x: string]: unknown } | null) | undefined
  max_output_tokens?: number | ({ [x: string]: unknown } | null) | undefined
  multi_agent?: BetaMultiAgentParam | ({ [x: string]: unknown } | null) | undefined
}
type BetaResolvedImageContextCompressionEnum = 'enabled' | 'disabled'
type BetaResolvedImageOptions = { context_compression: BetaResolvedImageContextCompressionEnum }
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
  review_target?: string | ({ [x: string]: unknown } | null) | undefined
  error_type?: BetaMisalignmentErrorType | undefined
  detailed_explanation?: string | undefined
  steer?: BetaMisalignmentSteer | undefined
}
type BetaResponseError =
  | {
      type?: string | ({ [x: string]: unknown } | null) | undefined
      param?: string | ({ [x: string]: unknown } | null) | undefined
      code: BetaResponseErrorCode
      message: string
      misalignment?: BetaMisalignmentErrorDetailsResource | undefined
    }
  | ({ [x: string]: unknown } | null)
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
type BetaFunctionCallOutputStatusEnum = 'in_progress' | 'completed' | 'incomplete'
type BetaFunctionToolCallOutputResource = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  id: string
  type: 'function_call_output'
  call_id?: string | undefined
  name?: string | undefined
  namespace?: string | undefined
  caller?: BetaToolCallCallerParam | ({ [x: string]: unknown } | null) | undefined
  output: string | BetaFunctionAndCustomToolCallOutput[]
  status: BetaFunctionCallOutputStatusEnum
  created_by?: string | undefined
}
type BetaTextContent = { type: 'text'; text: string }
type BetaComputerScreenshotContent = {
  type: 'computer_screenshot'
  image_url: string | ({ [x: string]: unknown } | null)
  file_id: string | ({ [x: string]: unknown } | null)
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
type BetaComputerCallOutputStatus = 'completed' | 'incomplete' | 'failed'
type BetaComputerToolCallOutputResource = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'computer_call_output'
  id?: string | undefined
  call_id: string
  acknowledged_safety_checks?: BetaComputerCallSafetyCheckParam[] | undefined
  output: BetaComputerScreenshotImage
  status: BetaComputerCallOutputStatus
  created_by?: string | undefined
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
  call_id: string | ({ [x: string]: unknown } | null)
  execution: BetaToolSearchExecutionType
  arguments: { [x: string]: unknown }
  status: BetaFunctionCallStatus
  created_by?: string | undefined
}
type BetaToolSearchOutput = {
  agent?: BetaAgentTag | undefined
  type: 'tool_search_output'
  id: string
  call_id: string | ({ [x: string]: unknown } | null)
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
type BetaFunctionShellAction = {
  commands: string[]
  timeout_ms: number | ({ [x: string]: unknown } | null)
  max_output_length: number | ({ [x: string]: unknown } | null)
}
type BetaFunctionShellCallStatus = 'in_progress' | 'completed' | 'incomplete'
type BetaLocalEnvironmentResource = { type: 'local' }
type BetaContainerReferenceResource = { type: 'container_reference'; container_id: string }
type BetaFunctionShellCall = {
  agent?: BetaAgentTag | undefined
  type: 'shell_call'
  id: string
  call_id: string
  caller?: BetaToolCallCaller | ({ [x: string]: unknown } | null) | undefined
  action: BetaFunctionShellAction
  status: BetaFunctionShellCallStatus
  environment:
    | BetaLocalEnvironmentResource
    | BetaContainerReferenceResource
    | ({ [x: string]: unknown } | null)
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
  caller?: BetaToolCallCaller | ({ [x: string]: unknown } | null) | undefined
  status: BetaFunctionShellCallOutputStatusEnum
  output: BetaFunctionShellCallOutputContent[]
  max_output_length: number | ({ [x: string]: unknown } | null)
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
  caller?: BetaToolCallCaller | ({ [x: string]: unknown } | null) | undefined
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
  caller?: BetaToolCallCaller | ({ [x: string]: unknown } | null) | undefined
  status: BetaApplyPatchCallOutputStatus
  output?: string | ({ [x: string]: unknown } | null) | undefined
  created_by?: string | undefined
}
type BetaMCPApprovalResponseResource = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'mcp_approval_response'
  id: string
  approval_request_id: string
  approve: boolean
  reason?: string | ({ [x: string]: unknown } | null) | undefined
}
type BetaCustomToolCallOutputResource = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'custom_tool_call_output'
  id: string
  call_id: string
  caller?: BetaToolCallCallerParam | ({ [x: string]: unknown } | null) | undefined
  output: string | BetaFunctionAndCustomToolCallOutput[]
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
type BetaPromptCacheOptions = {
  ttl: '30m' | '12h'
  mode: BetaPromptCacheModeEnum
  comparison_response_id?: string | ({ [x: string]: unknown } | null) | undefined
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
  categories: { [x: string]: boolean }
  category_scores: { [x: string]: number }
  category_applied_input_types: { [x: string]: BetaModerationInputType[] }
}
type BetaModerationErrorBody = { type: 'error'; code: string; message: string }
type BetaModeration = {
  input: BetaModerationResultBody | BetaModerationErrorBody
  output: BetaModerationResultBody | BetaModerationErrorBody
}
type BetaResponseConversation = { id: string }
type BetaResponse = {
  metadata?: BetaMetadata | undefined
  top_logprobs?: number | ({ [x: string]: unknown } | null) | undefined
  temperature?: number | ({ [x: string]: unknown } | null) | undefined
  top_p?: number | ({ [x: string]: unknown } | null) | undefined
  user?: (string | null) | undefined
  safety_identifier?: string | ({ [x: string]: unknown } | null) | undefined
  prompt_cache_key?: string | ({ [x: string]: unknown } | null) | undefined
  prompt_cache_retention?: 'in_memory' | '24h' | ({ [x: string]: unknown } | null) | undefined
  previous_response_id?: string | ({ [x: string]: unknown } | null) | undefined
  model?: BetaModelIdsResponses | undefined
  background?: boolean | ({ [x: string]: unknown } | null) | undefined
  max_tool_calls?: number | ({ [x: string]: unknown } | null) | undefined
  text?: BetaResponseTextParam | undefined
  tools?: BetaToolsArray | undefined
  tool_choice?: BetaToolChoiceParam | undefined
  prompt?: BetaPrompt | undefined
  image?: BetaResolvedImageOptions | undefined
  service_tier?: BetaServiceTierResponses | undefined
  truncation?: 'auto' | 'disabled' | ({ [x: string]: unknown } | null) | undefined
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
  access_programs: BetaAccessProgramsBody | ({ [x: string]: unknown } | null)
  created_at: number
  completed_at?: number | ({ [x: string]: unknown } | null) | undefined
  error: BetaResponseError
  incomplete_details:
    | { reason?: 'max_output_tokens' | 'max_messages' | 'content_filter' | 'steered' | undefined }
    | ({ [x: string]: unknown } | null)
  input_transformations?: BetaReasoningInputTransformation[] | undefined
  output: BetaOutputItem[]
  reasoning?: BetaReasoning | ({ [x: string]: unknown } | null) | undefined
  instructions: string | BetaInputItem[] | ({ [x: string]: unknown } | null)
  output_text?: string | ({ [x: string]: unknown } | null) | undefined
  usage?: BetaResponseUsage | ({ [x: string]: unknown } | null) | undefined
  tool_usage?: BetaResponseToolUsage | undefined
  prompt_cache_options?: BetaPromptCacheOptions | undefined
  prompt_cache_diagnostics?: BetaPromptCacheDiagnostics | undefined
  moderation?: BetaModeration | ({ [x: string]: unknown } | null) | undefined
  parallel_tool_calls: boolean
  conversation?: BetaResponseConversation | ({ [x: string]: unknown } | null) | undefined
  max_output_tokens?: number | ({ [x: string]: unknown } | null) | undefined
}
type BetaResponseAudioDeltaEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.audio.delta'
  sequence_number: number
  delta: string
}
type BetaResponseAudioDoneEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.audio.done'
  sequence_number: number
}
type BetaResponseAudioTranscriptDeltaEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.audio.transcript.delta'
  delta: string
  sequence_number: number
}
type BetaResponseAudioTranscriptDoneEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.audio.transcript.done'
  sequence_number: number
}
type BetaResponseCodeInterpreterCallCodeDeltaEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.code_interpreter_call_code.delta'
  output_index: number
  item_id: string
  delta: string
  sequence_number: number
}
type BetaResponseCodeInterpreterCallCodeDoneEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.code_interpreter_call_code.done'
  output_index: number
  item_id: string
  code: string
  sequence_number: number
}
type BetaResponseCodeInterpreterCallCompletedEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.code_interpreter_call.completed'
  output_index: number
  item_id: string
  sequence_number: number
}
type BetaResponseCodeInterpreterCallInProgressEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.code_interpreter_call.in_progress'
  output_index: number
  item_id: string
  sequence_number: number
}
type BetaResponseCodeInterpreterCallInterpretingEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.code_interpreter_call.interpreting'
  output_index: number
  item_id: string
  sequence_number: number
}
type BetaResponseCompactionCompactingStreamingEvent = {
  type: 'response.compaction.compacting'
  sequence_number: number
  agent?: BetaAgentTag | undefined
  output_index: number
  item_id: string
}
type BetaResponseCompletedEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.completed'
  response: BetaResponse
  sequence_number: number
}
type BetaOutputContent = BetaOutputTextContent | BetaRefusalContent | BetaReasoningTextContent
type BetaResponseContentPartAddedEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.content_part.added'
  item_id: string
  output_index: number
  content_index: number
  part: BetaOutputContent
  sequence_number: number
}
type BetaResponseContentPartDoneEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.content_part.done'
  item_id: string
  output_index: number
  content_index: number
  sequence_number: number
  part: BetaOutputContent
}
type BetaResponseCreatedEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.created'
  response: BetaResponse
  sequence_number: number
}
type BetaResponseErrorEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'error'
  code: string | ({ [x: string]: unknown } | null)
  message: string
  param: string | ({ [x: string]: unknown } | null)
  sequence_number: number
}
type BetaResponseFileSearchCallCompletedEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.file_search_call.completed'
  output_index: number
  item_id: string
  sequence_number: number
}
type BetaResponseFileSearchCallInProgressEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.file_search_call.in_progress'
  output_index: number
  item_id: string
  sequence_number: number
}
type BetaResponseFileSearchCallSearchingEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.file_search_call.searching'
  output_index: number
  item_id: string
  sequence_number: number
}
type BetaResponseFunctionCallArgumentsDeltaEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.function_call_arguments.delta'
  item_id: string
  output_index: number
  sequence_number: number
  delta: string
}
type BetaResponseFunctionCallArgumentsDoneEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.function_call_arguments.done'
  item_id: string
  output_index: number
  sequence_number: number
  arguments: string
}
type BetaResponseShellCallCommandAddedStreamingEvent = {
  type: 'response.shell_call_command.added'
  sequence_number: number
  agent?: BetaAgentTag | undefined
  output_index: number
  command_index: number
  command: string
}
type BetaResponseShellCallCommandDeltaStreamingEvent = {
  type: 'response.shell_call_command.delta'
  sequence_number: number
  agent?: BetaAgentTag | undefined
  output_index: number
  command_index: number
  delta: string
  obfuscation?: string | undefined
}
type BetaResponseShellCallCommandDoneStreamingEvent = {
  type: 'response.shell_call_command.done'
  sequence_number: number
  agent?: BetaAgentTag | undefined
  output_index: number
  command_index: number
  command: string
}
type BetaShellCallOutputDelta = { stdout?: string | undefined; stderr?: string | undefined }
type BetaResponseShellCallOutputContentDeltaStreamingEvent = {
  type: 'response.shell_call_output_content.delta'
  sequence_number: number
  agent?: BetaAgentTag | undefined
  item_id: string
  output_index: number
  command_index: number
  delta: BetaShellCallOutputDelta
}
type BetaResponseShellCallOutputContentDoneStreamingEvent = {
  type: 'response.shell_call_output_content.done'
  sequence_number: number
  agent?: BetaAgentTag | undefined
  item_id: string
  output_index: number
  command_index: number
  output: BetaFunctionShellCallOutputContent[]
}
type BetaResponseInProgressEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.in_progress'
  response: BetaResponse
  sequence_number: number
}
type BetaResponseFailedEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.failed'
  sequence_number: number
  response: BetaResponse
}
type BetaResponseIncompleteEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.incomplete'
  response: BetaResponse
  sequence_number: number
}
type BetaResponseOutputItemAddedEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.output_item.added'
  output_index: number
  sequence_number: number
  item: BetaOutputItem
}
type BetaResponseOutputItemDoneEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.output_item.done'
  output_index: number
  sequence_number: number
  item: BetaOutputItem
}
type BetaResponseReasoningSummaryPartAddedEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.reasoning_summary_part.added'
  item_id: string
  output_index: number
  summary_index: number
  sequence_number: number
  part: { type: 'summary_text'; text: string }
}
type BetaResponseReasoningSummaryPartDoneEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.reasoning_summary_part.done'
  item_id: string
  output_index: number
  summary_index: number
  status?: 'incomplete' | undefined
  sequence_number: number
  part: { type: 'summary_text'; text: string }
}
type BetaResponseReasoningSummaryTextDeltaEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.reasoning_summary_text.delta'
  item_id: string
  output_index: number
  summary_index: number
  delta: string
  sequence_number: number
}
type BetaResponseReasoningSummaryTextDoneEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.reasoning_summary_text.done'
  item_id: string
  output_index: number
  summary_index: number
  text: string
  sequence_number: number
}
type BetaResponseReasoningTextDeltaEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.reasoning_text.delta'
  item_id: string
  output_index: number
  content_index: number
  delta: string
  sequence_number: number
}
type BetaResponseReasoningTextDoneEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.reasoning_text.done'
  item_id: string
  output_index: number
  content_index: number
  text: string
  sequence_number: number
}
type BetaResponseRefusalDeltaEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.refusal.delta'
  item_id: string
  output_index: number
  content_index: number
  delta: string
  sequence_number: number
}
type BetaResponseRefusalDoneEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.refusal.done'
  item_id: string
  output_index: number
  content_index: number
  refusal: string
  sequence_number: number
}
type BetaResponseLogProb = {
  token: string
  logprob: number
  top_logprobs?: { token?: string | undefined; logprob?: number | undefined }[] | undefined
}
type BetaResponseTextDeltaEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.output_text.delta'
  item_id: string
  output_index: number
  content_index: number
  delta: string
  sequence_number: number
  logprobs: BetaResponseLogProb[]
}
type BetaResponseTextDoneEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.output_text.done'
  item_id: string
  output_index: number
  content_index: number
  text: string
  sequence_number: number
  logprobs: BetaResponseLogProb[]
}
type BetaResponseWebSearchCallCompletedEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.web_search_call.completed'
  output_index: number
  item_id: string
  sequence_number: number
}
type BetaResponseWebSearchCallInProgressEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.web_search_call.in_progress'
  output_index: number
  item_id: string
  sequence_number: number
}
type BetaResponseWebSearchCallSearchingEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.web_search_call.searching'
  output_index: number
  item_id: string
  sequence_number: number
}
type BetaResponseImageGenCallCompletedEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.image_generation_call.completed'
  output_index: number
  sequence_number: number
  item_id: string
}
type BetaResponseImageGenCallGeneratingEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.image_generation_call.generating'
  output_index: number
  item_id: string
  sequence_number: number
}
type BetaResponseImageGenCallInProgressEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.image_generation_call.in_progress'
  output_index: number
  item_id: string
  sequence_number: number
}
type BetaResponseImageGenCallPartialImageEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.image_generation_call.partial_image'
  output_index: number
  item_id: string
  sequence_number: number
  partial_image_index: number
  partial_image_b64: string
  size?: string | undefined
  quality?: string | undefined
  background?: string | undefined
  output_format?: string | undefined
}
type BetaResponseMCPCallArgumentsDeltaEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.mcp_call_arguments.delta'
  output_index: number
  item_id: string
  delta: string
  sequence_number: number
}
type BetaResponseMCPCallArgumentsDoneEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.mcp_call_arguments.done'
  output_index: number
  item_id: string
  arguments: string
  sequence_number: number
}
type BetaResponseMCPCallCompletedEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.mcp_call.completed'
  item_id: string
  output_index: number
  sequence_number: number
}
type BetaResponseMCPCallFailedEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.mcp_call.failed'
  item_id: string
  output_index: number
  sequence_number: number
}
type BetaResponseMCPCallInProgressEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.mcp_call.in_progress'
  sequence_number: number
  output_index: number
  item_id: string
}
type BetaResponseMCPListToolsCompletedEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.mcp_list_tools.completed'
  item_id: string
  output_index: number
  sequence_number: number
}
type BetaResponseMCPListToolsFailedEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.mcp_list_tools.failed'
  item_id: string
  output_index: number
  sequence_number: number
}
type BetaResponseMCPListToolsInProgressEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.mcp_list_tools.in_progress'
  item_id: string
  output_index: number
  sequence_number: number
}
type BetaResponseOutputTextAnnotationAddedEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.output_text.annotation.added'
  item_id: string
  output_index: number
  content_index: number
  annotation_index: number
  sequence_number: number
  annotation: BetaAnnotation | ({ [x: string]: unknown } | null)
}
type BetaResponseQueuedEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.queued'
  response: BetaResponse
  sequence_number: number
}
type BetaResponseCustomToolCallInputDeltaEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.custom_tool_call_input.delta'
  sequence_number: number
  output_index: number
  item_id: string
  delta: string
}
type BetaResponseCustomToolCallInputDoneEvent = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'response.custom_tool_call_input.done'
  sequence_number: number
  output_index: number
  item_id: string
  input: string
}
type BetaResponseStreamEvent =
  | BetaResponseAudioDeltaEvent
  | BetaResponseAudioDoneEvent
  | BetaResponseAudioTranscriptDeltaEvent
  | BetaResponseAudioTranscriptDoneEvent
  | BetaResponseCodeInterpreterCallCodeDeltaEvent
  | BetaResponseCodeInterpreterCallCodeDoneEvent
  | BetaResponseCodeInterpreterCallCompletedEvent
  | BetaResponseCodeInterpreterCallInProgressEvent
  | BetaResponseCodeInterpreterCallInterpretingEvent
  | BetaResponseCompactionCompactingStreamingEvent
  | BetaResponseCompletedEvent
  | BetaResponseContentPartAddedEvent
  | BetaResponseContentPartDoneEvent
  | BetaResponseCreatedEvent
  | BetaResponseErrorEvent
  | BetaResponseFileSearchCallCompletedEvent
  | BetaResponseFileSearchCallInProgressEvent
  | BetaResponseFileSearchCallSearchingEvent
  | BetaResponseFunctionCallArgumentsDeltaEvent
  | BetaResponseFunctionCallArgumentsDoneEvent
  | BetaResponseShellCallCommandAddedStreamingEvent
  | BetaResponseShellCallCommandDeltaStreamingEvent
  | BetaResponseShellCallCommandDoneStreamingEvent
  | BetaResponseShellCallOutputContentDeltaStreamingEvent
  | BetaResponseShellCallOutputContentDoneStreamingEvent
  | BetaResponseInProgressEvent
  | BetaResponseFailedEvent
  | BetaResponseIncompleteEvent
  | BetaResponseOutputItemAddedEvent
  | BetaResponseOutputItemDoneEvent
  | BetaResponseReasoningSummaryPartAddedEvent
  | BetaResponseReasoningSummaryPartDoneEvent
  | BetaResponseReasoningSummaryTextDeltaEvent
  | BetaResponseReasoningSummaryTextDoneEvent
  | BetaResponseReasoningTextDeltaEvent
  | BetaResponseReasoningTextDoneEvent
  | BetaResponseRefusalDeltaEvent
  | BetaResponseRefusalDoneEvent
  | BetaResponseTextDeltaEvent
  | BetaResponseTextDoneEvent
  | BetaResponseWebSearchCallCompletedEvent
  | BetaResponseWebSearchCallInProgressEvent
  | BetaResponseWebSearchCallSearchingEvent
  | BetaResponseImageGenCallCompletedEvent
  | BetaResponseImageGenCallGeneratingEvent
  | BetaResponseImageGenCallInProgressEvent
  | BetaResponseImageGenCallPartialImageEvent
  | BetaResponseMCPCallArgumentsDeltaEvent
  | BetaResponseMCPCallArgumentsDoneEvent
  | BetaResponseMCPCallCompletedEvent
  | BetaResponseMCPCallFailedEvent
  | BetaResponseMCPCallInProgressEvent
  | BetaResponseMCPListToolsCompletedEvent
  | BetaResponseMCPListToolsFailedEvent
  | BetaResponseMCPListToolsInProgressEvent
  | BetaResponseOutputTextAnnotationAddedEvent
  | BetaResponseQueuedEvent
  | BetaResponseCustomToolCallInputDeltaEvent
  | BetaResponseCustomToolCallInputDoneEvent
type BetaError = {
  code: string | ({ [x: string]: unknown } | null)
  message: string
  param: string | ({ [x: string]: unknown } | null)
  type: string
  misalignment?: BetaMisalignmentErrorDetailsResource | undefined
}
type BetaErrorResponse = { error: BetaError }
type BetaModelIdsCompaction = BetaModelIdsResponses | string | ({ [x: string]: unknown } | null)
type BetaPromptCacheRetentionEnum = 'in_memory' | '24h'
type BetaPromptCacheTTLEnum = '30m'
type BetaPromptCacheOptionsParam = {
  ttl?: BetaPromptCacheTTLEnum | undefined
  mode?: BetaPromptCacheModeEnum | undefined
}
type BetaServiceTierEnum = 'auto' | 'default' | 'fast' | 'flex' | 'priority'
type BetaCompactResponseMethodPublicBody = {
  model: BetaModelIdsCompaction
  input?: string | BetaInputItem[] | ({ [x: string]: unknown } | null) | undefined
  previous_response_id?: string | ({ [x: string]: unknown } | null) | undefined
  instructions?: string | ({ [x: string]: unknown } | null) | undefined
  image?: BetaImageOptionsParam | undefined
  prompt_cache_key?: string | ({ [x: string]: unknown } | null) | undefined
  prompt_cache_retention?:
    | BetaPromptCacheRetentionEnum
    | ({ [x: string]: unknown } | null)
    | undefined
  prompt_cache_options?: BetaPromptCacheOptionsParam | ({ [x: string]: unknown } | null) | undefined
  service_tier?: BetaServiceTierEnum | ({ [x: string]: unknown } | null) | undefined
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
  phase?: BetaMessagePhase_2 | ({ [x: string]: unknown } | null) | undefined
}
type BetaFunctionToolCallOutput = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  id?: string | undefined
  type: 'function_call_output'
  call_id?: string | undefined
  name?: string | undefined
  namespace?: string | undefined
  caller?: BetaToolCallCallerParam | ({ [x: string]: unknown } | null) | undefined
  output: string | BetaFunctionAndCustomToolCallOutput[]
  status?: 'in_progress' | 'completed' | 'incomplete' | undefined
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
  output: BetaItemField[]
  created_at: number
  usage: BetaResponseUsage
}
type BetaInputMessageResource = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type?: 'message' | undefined
  role: 'user' | 'system' | 'developer'
  status?: 'in_progress' | 'completed' | 'incomplete' | undefined
  content: BetaInputMessageContentList
  id: string
}
type BetaFunctionToolCallResource = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  id: string
  type: 'function_call'
  call_id: string
  caller?: BetaToolCallCaller | ({ [x: string]: unknown } | null) | undefined
  namespace?: string | undefined
  name: string
  arguments: string
  status: BetaFunctionCallStatus
  async?: boolean | undefined
  created_by?: string | undefined
}
type BetaResponseConfigurationUpdate = {
  agent?: BetaAgentTag | undefined
  id: string
  type: 'configuration_update'
  reasoning?: { effort?: BetaReasoningEffort | undefined } | undefined
  text?: { format: BetaResponseFormatText | BetaTextResponseFormatJsonSchema } | undefined
}
type BetaCustomToolCallResource = {
  agent?: BetaAgentTag | ({ [x: string]: unknown } | null) | undefined
  type: 'custom_tool_call'
  id: string
  call_id: string
  caller?: BetaToolCallCaller | ({ [x: string]: unknown } | null) | undefined
  namespace?: string | undefined
  name: string
  input: string
  async?: boolean | undefined
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
type BetaTruncationEnum = 'auto' | 'disabled'
type BetaPersonalityEnum = string | 'friendly' | 'pragmatic'
type BetaTokenCountsBody = {
  model?: string | ({ [x: string]: unknown } | null) | undefined
  input?: string | BetaInputItem[] | ({ [x: string]: unknown } | null) | undefined
  previous_response_id?: string | ({ [x: string]: unknown } | null) | undefined
  tools?: BetaTool[] | ({ [x: string]: unknown } | null) | undefined
  text?: BetaResponseTextParam | ({ [x: string]: unknown } | null) | undefined
  reasoning?: BetaReasoning | ({ [x: string]: unknown } | null) | undefined
  truncation?: BetaTruncationEnum | undefined
  instructions?: string | ({ [x: string]: unknown } | null) | undefined
  personality?: BetaPersonalityEnum | undefined
  conversation?: BetaConversationParam | ({ [x: string]: unknown } | null) | undefined
  tool_choice?: BetaToolChoiceParam | ({ [x: string]: unknown } | null) | undefined
  parallel_tool_calls?: boolean | ({ [x: string]: unknown } | null) | undefined
}
type BetaTokenCountsResource = { object: 'response.input_tokens'; input_tokens: number }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/assistants': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ListAssistantsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: CreateAssistantRequest }
            output: AssistantObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateAssistantRequest }
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
            input: { param: { assistant_id: string } } & { json: ModifyAssistantRequest }
            output: AssistantObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { assistant_id: string } } & { json: ModifyAssistantRequest }
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
        | { input: { json: CreateSpeechRequest }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { json: CreateSpeechRequest }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { json: CreateSpeechRequest }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { json: CreateSpeechRequest }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { json: CreateSpeechRequest }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { json: CreateSpeechRequest }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { json: CreateSpeechRequest }; output: File; outputFormat: 'text'; status: 200 }
        | {
            input: { json: CreateSpeechRequest }
            output: CreateSpeechResponseStreamEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CreateSpeechRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateSpeechRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateSpeechRequest }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: CreateSpeechRequest }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: CreateSpeechRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateSpeechRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateSpeechRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/audio/transcriptions': {
      $post:
        | {
            input: { form: CreateTranscriptionRequest }
            output:
              | CreateTranscriptionResponseJson
              | CreateTranscriptionResponseDiarizedJson
              | CreateTranscriptionResponseVerboseJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: CreateTranscriptionRequest }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: CreateTranscriptionRequest }
            output: CreateTranscriptionResponseStreamEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: CreateTranscriptionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: CreateTranscriptionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { form: CreateTranscriptionRequest }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { form: CreateTranscriptionRequest }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { form: CreateTranscriptionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { form: CreateTranscriptionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { form: CreateTranscriptionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { form: CreateTranscriptionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { form: CreateTranscriptionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/audio/translations': {
      $post:
        | {
            input: { form: CreateTranslationRequest }
            output: CreateTranslationResponseJson | CreateTranslationResponseVerboseJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: CreateTranslationRequest }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: CreateTranslationRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: CreateTranslationRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { form: CreateTranslationRequest }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { form: CreateTranslationRequest }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { form: CreateTranslationRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { form: CreateTranslationRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { form: CreateTranslationRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { form: CreateTranslationRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { form: CreateTranslationRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/audio/voice_consents': {
      $post:
        | {
            input: { form: CreateVoiceConsentRequest }
            output: VoiceConsentResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: CreateVoiceConsentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: CreateVoiceConsentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { query: { after?: string | undefined; limit?: number | undefined } }
            output: VoiceConsentListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { after?: string | undefined; limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { after?: string | undefined; limit?: number | undefined } }
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
            input: { param: { consent_id: string } } & { json: UpdateVoiceConsentRequest }
            output: VoiceConsentResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { consent_id: string } } & { json: UpdateVoiceConsentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { consent_id: string } } & { json: UpdateVoiceConsentRequest }
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
            input: { json: CreateVoicePromptRequest } & { form: CreateVoiceRequest }
            output: VoiceResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateVoicePromptRequest } & { form: CreateVoiceRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateVoicePromptRequest } & { form: CreateVoiceRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateVoicePromptRequest } & { form: CreateVoiceRequest }
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
        | { input: { json: CreateBatchRequest }; output: Batch; outputFormat: 'json'; status: 200 }
        | {
            input: { json: CreateBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: { query: { after?: string | undefined; limit?: number | undefined } }
            output: ListBatchesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { after?: string | undefined; limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { after?: string | undefined; limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { after?: string | undefined; limit?: number | undefined } }
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
                model?: string | undefined
                metadata?: Metadata | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ChatCompletionList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                model?: string | undefined
                metadata?: Metadata | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                model?: string | undefined
                metadata?: Metadata | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                model?: string | undefined
                metadata?: Metadata | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: CreateChatCompletionRequest }
            output: CreateChatCompletionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateChatCompletionRequest }
            output: CreateChatCompletionStreamResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CreateChatCompletionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateChatCompletionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateChatCompletionRequest }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: CreateChatCompletionRequest }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: CreateChatCompletionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateChatCompletionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateChatCompletionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateChatCompletionRequest }
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
            input: { param: { completion_id: string } } & { json: { metadata: Metadata } }
            output: CreateChatCompletionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { completion_id: string } } & { json: { metadata: Metadata } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { completion_id: string } } & { json: { metadata: Metadata } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { completion_id: string } } & { json: { metadata: Metadata } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { completion_id: string } } & { json: { metadata: Metadata } }
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
              query: {
                after?: string | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ChatCompletionMessageList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { completion_id: string } } & {
              query: {
                after?: string | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { completion_id: string } } & {
              query: {
                after?: string | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { completion_id: string } } & {
              query: {
                after?: string | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { completion_id: string } } & {
              query: {
                after?: string | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
              }
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
            input: { json: CreateCompletionRequest }
            output: CreateCompletionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateCompletionRequest }
            output: CreateCompletionResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CreateCompletionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateCompletionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateCompletionRequest }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: CreateCompletionRequest }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: CreateCompletionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateCompletionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateCompletionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateCompletionRequest }
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
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                name?: string | undefined
              }
            }
            output: ContainerListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                name?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                name?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: CreateContainerBody }
            output: ContainerResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateContainerBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateContainerBody }
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
            input: { param: { container_id: string } } & { json: CreateContainerFileBody } & {
              form: CreateContainerFileBody
            }
            output: ContainerFileResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { container_id: string } } & { json: CreateContainerFileBody } & {
              form: CreateContainerFileBody
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { container_id: string } } & { json: CreateContainerFileBody } & {
              form: CreateContainerFileBody
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { container_id: string } } & { json: CreateContainerFileBody } & {
              form: CreateContainerFileBody
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { container_id: string } } & {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
              }
            }
            output: ContainerFileListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { container_id: string } } & {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { container_id: string } } & {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
              }
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
            output: File
            outputFormat: 'text'
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
            input: { param: { conversation_id: string } } & {
              query: { include?: IncludeEnum[] | undefined }
            } & { json: { items: InputItem[] } }
            output: ConversationItemList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: string } } & {
              query: { include?: IncludeEnum[] | undefined }
            } & { json: { items: InputItem[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { conversation_id: string } } & {
              query: { include?: IncludeEnum[] | undefined }
            } & { json: { items: InputItem[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { conversation_id: string } } & {
              query: { include?: IncludeEnum[] | undefined }
            } & { json: { items: InputItem[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { conversation_id: string } } & {
              query: { include?: IncludeEnum[] | undefined }
            } & { json: { items: InputItem[] } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { conversation_id: string } } & {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                include?: IncludeEnum[] | undefined
              }
            }
            output: ConversationItemList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: string } } & {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                include?: IncludeEnum[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { conversation_id: string } } & {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                include?: IncludeEnum[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { conversation_id: string } } & {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                include?: IncludeEnum[] | undefined
              }
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
              query: { include?: IncludeEnum[] | undefined }
            }
            output: ConversationItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: string; item_id: string } } & {
              query: { include?: IncludeEnum[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { conversation_id: string; item_id: string } } & {
              query: { include?: IncludeEnum[] | undefined }
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
            input: { json: CreateEmbeddingRequest }
            output: CreateEmbeddingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateEmbeddingRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateEmbeddingRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateEmbeddingRequest }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: CreateEmbeddingRequest }
            output: string
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: CreateEmbeddingRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateEmbeddingRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateEmbeddingRequest }
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
                after?: string | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'created_at' | 'updated_at' | undefined
              }
            }
            output: EvalList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                order_by?: 'created_at' | 'updated_at' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | { input: { json: CreateEvalRequest }; output: Eval; outputFormat: 'json'; status: 201 }
        | {
            input: { json: CreateEvalRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateEvalRequest }
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
              json: { name?: string | undefined; metadata?: Metadata | undefined }
            }
            output: Eval
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eval_id: string } } & {
              json: { name?: string | undefined; metadata?: Metadata | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { eval_id: string } } & {
              json: { name?: string | undefined; metadata?: Metadata | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { eval_id: string } } & {
              json: { name?: string | undefined; metadata?: Metadata | undefined }
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
                after?: string | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                status?: 'queued' | 'in_progress' | 'completed' | 'canceled' | 'failed' | undefined
              }
            }
            output: EvalRunList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eval_id: string } } & {
              query: {
                after?: string | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                status?: 'queued' | 'in_progress' | 'completed' | 'canceled' | 'failed' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { eval_id: string } } & {
              query: {
                after?: string | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                status?: 'queued' | 'in_progress' | 'completed' | 'canceled' | 'failed' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { eval_id: string } } & {
              query: {
                after?: string | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                status?: 'queued' | 'in_progress' | 'completed' | 'canceled' | 'failed' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { eval_id: string } } & { json: CreateEvalRunRequest }
            output: EvalRun
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { eval_id: string } } & { json: CreateEvalRunRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { eval_id: string } } & { json: CreateEvalRunRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { eval_id: string } } & { json: CreateEvalRunRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { eval_id: string } } & { json: CreateEvalRunRequest }
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
                after?: string | undefined
                limit?: number | undefined
                status?: 'fail' | 'pass' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: EvalRunOutputItemList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eval_id: string; run_id: string } } & {
              query: {
                after?: string | undefined
                limit?: number | undefined
                status?: 'fail' | 'pass' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { eval_id: string; run_id: string } } & {
              query: {
                after?: string | undefined
                limit?: number | undefined
                status?: 'fail' | 'pass' | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { eval_id: string; run_id: string } } & {
              query: {
                after?: string | undefined
                limit?: number | undefined
                status?: 'fail' | 'pass' | undefined
                order?: 'asc' | 'desc' | undefined
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
              query: {
                purpose?: string | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
              }
            }
            output: ListFilesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                purpose?: string | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                purpose?: string | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                purpose?: string | undefined
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { form: CreateFileRequest }
            output: OpenAIFile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: CreateFileRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: CreateFileRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { form: CreateFileRequest }
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
        | { input: { param: { file_id: string } }; output: File; outputFormat: 'text'; status: 200 }
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
            input: { json: RunGraderRequest }
            output: RunGraderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RunGraderRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RunGraderRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/fine_tuning/alpha/graders/validate': {
      $post:
        | {
            input: { json: ValidateGraderRequest }
            output: ValidateGraderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ValidateGraderRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ValidateGraderRequest }
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
                project_id?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: 'ascending' | 'descending' | undefined
              }
            }
            output: ListFineTuningCheckpointPermissionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fine_tuned_model_checkpoint: string } } & {
              query: {
                project_id?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: 'ascending' | 'descending' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { fine_tuned_model_checkpoint: string } } & {
              query: {
                project_id?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: 'ascending' | 'descending' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { fine_tuned_model_checkpoint: string } } & {
              json: CreateFineTuningCheckpointPermissionRequest
            }
            output: ListFineTuningCheckpointPermissionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fine_tuned_model_checkpoint: string } } & {
              json: CreateFineTuningCheckpointPermissionRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { fine_tuned_model_checkpoint: string } } & {
              json: CreateFineTuningCheckpointPermissionRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { fine_tuned_model_checkpoint: string } } & {
              json: CreateFineTuningCheckpointPermissionRequest
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
            input: { json: CreateFineTuningJobRequest }
            output: FineTuningJob
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateFineTuningJobRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateFineTuningJobRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                limit?: number | undefined
                metadata?: ({ [x: string]: string } | null) | undefined
              }
            }
            output: ListPaginatedFineTuningJobsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                limit?: number | undefined
                metadata?: ({ [x: string]: string } | null) | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after?: string | undefined
                limit?: number | undefined
                metadata?: ({ [x: string]: string } | null) | undefined
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
              query: { after?: string | undefined; limit?: number | undefined }
            }
            output: ListFineTuningJobCheckpointsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fine_tuning_job_id: string } } & {
              query: { after?: string | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { fine_tuning_job_id: string } } & {
              query: { after?: string | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { fine_tuning_job_id: string } } & {
              query: { after?: string | undefined; limit?: number | undefined }
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
              query: { after?: string | undefined; limit?: number | undefined }
            }
            output: ListFineTuningJobEventsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fine_tuning_job_id: string } } & {
              query: { after?: string | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { fine_tuning_job_id: string } } & {
              query: { after?: string | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { fine_tuning_job_id: string } } & {
              query: { after?: string | undefined; limit?: number | undefined }
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
            input: { json: EditImageBodyJsonParam } & { form: CreateImageEditRequest }
            output: ImagesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EditImageBodyJsonParam } & { form: CreateImageEditRequest }
            output: ImageEditStreamEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: EditImageBodyJsonParam } & { form: CreateImageEditRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: EditImageBodyJsonParam } & { form: CreateImageEditRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: EditImageBodyJsonParam } & { form: CreateImageEditRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { json: EditImageBodyJsonParam } & { form: CreateImageEditRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: EditImageBodyJsonParam } & { form: CreateImageEditRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: EditImageBodyJsonParam } & { form: CreateImageEditRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/images/generations': {
      $post:
        | {
            input: { json: CreateImageRequest }
            output: ImagesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateImageRequest }
            output: ImageGenStreamEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CreateImageRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateImageRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateImageRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { json: CreateImageRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateImageRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateImageRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/images/variations': {
      $post:
        | {
            input: { form: CreateImageVariationRequest }
            output: ImagesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: CreateImageVariationRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: CreateImageVariationRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { form: CreateImageVariationRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { form: CreateImageVariationRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { form: CreateImageVariationRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/live/sessions': {
      $post:
        | {
            input: { json: LiveSessionCreateRequest }
            output: LiveSessionCreateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: LiveSessionCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: LiveSessionCreateRequest }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: LiveSessionCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: LiveSessionCreateRequest }
            output: string
            outputFormat: 'text'
            status: 413
          }
        | {
            input: { json: LiveSessionCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: LiveSessionCreateRequest }
            output: string
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { json: LiveSessionCreateRequest }
            output: string
            outputFormat: 'text'
            status: 502
          }
        | {
            input: { json: LiveSessionCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { json: LiveSessionCreateRequest }
            output: string
            outputFormat: 'text'
            status: 503
          }
        | {
            input: { json: LiveSessionCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/live/sessions/:session_id/accept': {
      $post:
        | {
            input: { param: { session_id: string } } & { json: LiveCallAcceptRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { session_id: string } } & { json: LiveCallAcceptRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & { json: LiveCallAcceptRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & { json: LiveCallAcceptRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string } } & { json: LiveCallAcceptRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { session_id: string } } & { json: LiveCallAcceptRequest }
            output: string
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { session_id: string } } & { json: LiveCallAcceptRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/live/sessions/:session_id/fork': {
      $post:
        | {
            input: { param: { session_id: string } } & { json: LiveForkRequest }
            output: LiveCreateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { session_id: string } } & { json: LiveForkRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & { json: LiveForkRequest }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & { json: LiveForkRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { session_id: string } } & { json: LiveForkRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { session_id: string } } & { json: LiveForkRequest }
            output: string
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { session_id: string } } & { json: LiveForkRequest }
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
            input: { param: { session_id: string } } & { json: LiveCallReferRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { session_id: string } } & { json: LiveCallReferRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & { json: LiveCallReferRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & { json: LiveCallReferRequest }
            output: string
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/live/sessions/:session_id/reject': {
      $post:
        | {
            input: { param: { session_id: string } } & { json: LiveCallRejectRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { session_id: string } } & { json: LiveCallRejectRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & { json: LiveCallRejectRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & { json: LiveCallRejectRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string } } & { json: LiveCallRejectRequest }
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
            input: { json: CreateModerationRequest }
            output: CreateModerationResponse | CreateCSAMModerationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateModerationRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateModerationRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateModerationRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateModerationRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateModerationRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/organization/admin_api_keys': {
      $get:
        | {
            input: {
              query: {
                after?: (string | null) | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
              }
            }
            output: ApiKeyList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: (string | null) | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after?: (string | null) | undefined
                order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { json: { name: string; expires_in_seconds?: number | undefined } }
            output: AdminApiKeyCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { name: string; expires_in_seconds?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { name: string; expires_in_seconds?: number | undefined } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { name: string; expires_in_seconds?: number | undefined } }
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
                effective_at?:
                  | {
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                    }
                  | undefined
                'project_ids[]'?: string[] | undefined
                'event_types[]'?: AuditLogEventType[] | undefined
                'actor_ids[]'?: string[] | undefined
                'actor_emails[]'?: string[] | undefined
                'resource_ids[]'?: string[] | undefined
                tenant_only?: boolean | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ListAuditLogsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                effective_at?:
                  | {
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                    }
                  | undefined
                'project_ids[]'?: string[] | undefined
                'event_types[]'?: AuditLogEventType[] | undefined
                'actor_ids[]'?: string[] | undefined
                'actor_emails[]'?: string[] | undefined
                'resource_ids[]'?: string[] | undefined
                tenant_only?: boolean | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                effective_at?:
                  | {
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                    }
                  | undefined
                'project_ids[]'?: string[] | undefined
                'event_types[]'?: AuditLogEventType[] | undefined
                'actor_ids[]'?: string[] | undefined
                'actor_emails[]'?: string[] | undefined
                'resource_ids[]'?: string[] | undefined
                tenant_only?: boolean | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                effective_at?:
                  | {
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                    }
                  | undefined
                'project_ids[]'?: string[] | undefined
                'event_types[]'?: AuditLogEventType[] | undefined
                'actor_ids[]'?: string[] | undefined
                'actor_emails[]'?: string[] | undefined
                'resource_ids[]'?: string[] | undefined
                tenant_only?: boolean | undefined
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
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
            input: {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ListCertificatesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: UploadCertificateRequest }
            output: Certificate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UploadCertificateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UploadCertificateRequest }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: UploadCertificateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organization/certificates/activate': {
      $post:
        | {
            input: { json: ToggleCertificatesRequest }
            output: OrganizationCertificateActivationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ToggleCertificatesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ToggleCertificatesRequest }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ToggleCertificatesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ToggleCertificatesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: ToggleCertificatesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/organization/certificates/deactivate': {
      $post:
        | {
            input: { json: ToggleCertificatesRequest }
            output: OrganizationCertificateDeactivationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ToggleCertificatesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ToggleCertificatesRequest }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ToggleCertificatesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ToggleCertificatesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: ToggleCertificatesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/organization/certificates/:certificate_id': {
      $get:
        | {
            input: { param: { certificate_id: string } } & {
              query: { include?: 'content'[] | undefined }
            }
            output: Certificate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { certificate_id: string } } & {
              query: { include?: 'content'[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { certificate_id: string } } & {
              query: { include?: 'content'[] | undefined }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { certificate_id: string } } & {
              query: { include?: 'content'[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { certificate_id: string } } & {
              query: { include?: 'content'[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { certificate_id: string } } & { json: ModifyCertificateRequest }
            output: Certificate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { certificate_id: string } } & { json: ModifyCertificateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { certificate_id: string } } & { json: ModifyCertificateRequest }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { certificate_id: string } } & { json: ModifyCertificateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { certificate_id: string } } & { json: ModifyCertificateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { certificate_id: string } } & { json: ModifyCertificateRequest }
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
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1d' | undefined
                project_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                line_items?: string[] | undefined
                group_by?:
                  | ('project_id' | 'user_id' | 'line_item' | 'api_key_id' | 'api_source')[]
                  | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: UsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1d' | undefined
                project_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                line_items?: string[] | undefined
                group_by?:
                  | ('project_id' | 'user_id' | 'line_item' | 'api_key_id' | 'api_source')[]
                  | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1d' | undefined
                project_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                line_items?: string[] | undefined
                group_by?:
                  | ('project_id' | 'user_id' | 'line_item' | 'api_key_id' | 'api_source')[]
                  | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1d' | undefined
                project_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                line_items?: string[] | undefined
                group_by?:
                  | ('project_id' | 'user_id' | 'line_item' | 'api_key_id' | 'api_source')[]
                  | undefined
                limit?: number | undefined
                page?: string | undefined
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
            input: { json: UpdateOrganizationDataRetentionBody }
            output: OrganizationDataRetention
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateOrganizationDataRetentionBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UpdateOrganizationDataRetentionBody }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: UpdateOrganizationDataRetentionBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/groups': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: GroupListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: CreateGroupBody }
            output: GroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateGroupBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateGroupBody }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateGroupBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateGroupBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CreateGroupBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateGroupBody }
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
            input: { param: { group_id: string } } & { json: UpdateGroupBody }
            output: GroupResourceWithSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string } } & { json: UpdateGroupBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: string } } & { json: UpdateGroupBody }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } } & { json: UpdateGroupBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string } } & { json: UpdateGroupBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { group_id: string } } & { json: UpdateGroupBody }
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
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: RoleListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { group_id: string } } & { json: PublicAssignOrganizationGroupRoleBody }
            output: GroupRoleAssignment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string } } & { json: PublicAssignOrganizationGroupRoleBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: string } } & { json: PublicAssignOrganizationGroupRoleBody }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } } & { json: PublicAssignOrganizationGroupRoleBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string } } & { json: PublicAssignOrganizationGroupRoleBody }
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
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: UserListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { group_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 502
          }
      $post:
        | {
            input: { param: { group_id: string } } & { json: CreateGroupUserBody }
            output: GroupUserAssignment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string } } & { json: CreateGroupUserBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: string } } & { json: CreateGroupUserBody }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } } & { json: CreateGroupUserBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string } } & { json: CreateGroupUserBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { group_id: string } } & { json: CreateGroupUserBody }
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
            input: { query: { limit?: number | undefined; after?: string | undefined } }
            output: InviteListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; after?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: number | undefined; after?: string | undefined } }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; after?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { limit?: number | undefined; after?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | { input: { json: InviteRequest }; output: Invite; outputFormat: 'json'; status: 200 }
        | { input: { json: InviteRequest }; output: Invite; outputFormat: 'json'; status: 201 }
        | {
            input: { json: InviteRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: InviteRequest }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: InviteRequest }
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
            input: {
              query: {
                limit?: number | undefined
                after?: string | undefined
                include_archived?: boolean | undefined
              }
            }
            output: ProjectListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                after?: string | undefined
                include_archived?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                after?: string | undefined
                include_archived?: boolean | undefined
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                after?: string | undefined
                include_archived?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                after?: string | undefined
                include_archived?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: ProjectCreateRequest }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProjectCreateRequest }
            output: Project
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ProjectCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ProjectCreateRequest }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ProjectCreateRequest }
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
            input: { param: { project_id: string } } & { json: ProjectUpdateRequest }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & { json: ProjectUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & { json: ProjectUpdateRequest }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & { json: ProjectUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & { json: ProjectUpdateRequest }
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
                limit?: number | undefined
                after?: string | undefined
                owner_project_access?: 'active' | 'inactive' | 'any' | undefined
              }
            }
            output: ProjectApiKeyListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                owner_project_access?: 'active' | 'inactive' | 'any' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                owner_project_access?: 'active' | 'inactive' | 'any' | undefined
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                owner_project_access?: 'active' | 'inactive' | 'any' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                owner_project_access?: 'active' | 'inactive' | 'any' | undefined
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
              json: UpdateProjectApiKeyBody
            }
            output: ProjectApiKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; api_key_id: string } } & {
              json: UpdateProjectApiKeyBody
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; api_key_id: string } } & {
              json: UpdateProjectApiKeyBody
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; api_key_id: string } } & {
              json: UpdateProjectApiKeyBody
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; api_key_id: string } } & {
              json: UpdateProjectApiKeyBody
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
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ListProjectCertificatesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
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
            input: { param: { project_id: string } } & { json: ToggleCertificatesRequest }
            output: OrganizationProjectCertificateActivationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & { json: ToggleCertificatesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & { json: ToggleCertificatesRequest }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & { json: ToggleCertificatesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & { json: ToggleCertificatesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { project_id: string } } & { json: ToggleCertificatesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/organization/projects/:project_id/certificates/deactivate': {
      $post:
        | {
            input: { param: { project_id: string } } & { json: ToggleCertificatesRequest }
            output: OrganizationProjectCertificateDeactivationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & { json: ToggleCertificatesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & { json: ToggleCertificatesRequest }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & { json: ToggleCertificatesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & { json: ToggleCertificatesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { project_id: string } } & { json: ToggleCertificatesRequest }
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
            input: { param: { project_id: string } } & { json: UpdateProjectDataRetentionBody }
            output: ProjectDataRetention
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & { json: UpdateProjectDataRetentionBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & { json: UpdateProjectDataRetentionBody }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & { json: UpdateProjectDataRetentionBody }
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
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ProjectGroupListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { project_id: string } } & { json: InviteProjectGroupBody }
            output: ProjectGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & { json: InviteProjectGroupBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & { json: InviteProjectGroupBody }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & { json: InviteProjectGroupBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & { json: InviteProjectGroupBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { project_id: string } } & { json: InviteProjectGroupBody }
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
              query: { group_type?: 'group' | 'tenant_group' | undefined }
            }
            output: ProjectGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; group_id: string } } & {
              query: { group_type?: 'group' | 'tenant_group' | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; group_id: string } } & {
              query: { group_type?: 'group' | 'tenant_group' | undefined }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; group_id: string } } & {
              query: { group_type?: 'group' | 'tenant_group' | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; group_id: string } } & {
              query: { group_type?: 'group' | 'tenant_group' | undefined }
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
              json: ProjectHostedToolPermissionsUpdateRequest
            }
            output: ProjectHostedToolPermissions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              json: ProjectHostedToolPermissionsUpdateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & {
              json: ProjectHostedToolPermissionsUpdateRequest
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & {
              json: ProjectHostedToolPermissionsUpdateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & {
              json: ProjectHostedToolPermissionsUpdateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { project_id: string } } & {
              json: ProjectHostedToolPermissionsUpdateRequest
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
              json: ProjectModelPermissionsUpdateRequest
            }
            output: ProjectModelPermissions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              json: ProjectModelPermissionsUpdateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & {
              json: ProjectModelPermissionsUpdateRequest
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & {
              json: ProjectModelPermissionsUpdateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & {
              json: ProjectModelPermissionsUpdateRequest
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
              query: {
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ProjectRateLimitListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                before?: string | undefined
              }
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
              json: ProjectRateLimitUpdateRequest
            }
            output: ProjectRateLimit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; rate_limit_id: string } } & {
              json: ProjectRateLimitUpdateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; rate_limit_id: string } } & {
              json: ProjectRateLimitUpdateRequest
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; rate_limit_id: string } } & {
              json: ProjectRateLimitUpdateRequest
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
              query: { limit?: number | undefined; after?: string | undefined }
            }
            output: ProjectServiceAccountListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: number | undefined; after?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: number | undefined; after?: string | undefined }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: number | undefined; after?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: number | undefined; after?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { project_id: string } } & { json: ProjectServiceAccountCreateRequest }
            output: ProjectServiceAccountCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & { json: ProjectServiceAccountCreateRequest }
            output: ProjectServiceAccountCreateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_id: string } } & { json: ProjectServiceAccountCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & { json: ProjectServiceAccountCreateRequest }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & { json: ProjectServiceAccountCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & { json: ProjectServiceAccountCreateRequest }
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
              json: UpdateProjectServiceAccountBody
            }
            output: ProjectServiceAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; service_account_id: string } } & {
              json: UpdateProjectServiceAccountBody
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; service_account_id: string } } & {
              json: UpdateProjectServiceAccountBody
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; service_account_id: string } } & {
              json: UpdateProjectServiceAccountBody
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; service_account_id: string } } & {
              json: UpdateProjectServiceAccountBody
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
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ProjectSpendAlertListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { project_id: string } } & { json: CreateSpendAlertBody }
            output: ProjectSpendAlert
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & { json: CreateSpendAlertBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & { json: CreateSpendAlertBody }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & { json: CreateSpendAlertBody }
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
              json: CreateSpendAlertBody
            }
            output: ProjectSpendAlert
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; alert_id: string } } & {
              json: CreateSpendAlertBody
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; alert_id: string } } & {
              json: CreateSpendAlertBody
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; alert_id: string } } & {
              json: CreateSpendAlertBody
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
              query: { limit?: number | undefined; after?: string | undefined }
            }
            output: ProjectUserListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: number | undefined; after?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: number | undefined; after?: string | undefined }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: number | undefined; after?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: number | undefined; after?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { project_id: string } } & { json: ProjectUserCreateRequest }
            output: ProjectUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & { json: ProjectUserCreateRequest }
            output: ProjectUser
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_id: string } } & { json: ProjectUserCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & { json: ProjectUserCreateRequest }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & { json: ProjectUserCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & { json: ProjectUserCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { project_id: string } } & { json: ProjectUserCreateRequest }
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
              json: ProjectUserUpdateRequest
            }
            output: ProjectUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; user_id: string } } & {
              json: ProjectUserUpdateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; user_id: string } } & {
              json: ProjectUserUpdateRequest
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; user_id: string } } & {
              json: ProjectUserUpdateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; user_id: string } } & {
              json: ProjectUserUpdateRequest
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
            input: {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: PublicRoleListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: PublicCreateOrganizationRoleBody }
            output: Role
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PublicCreateOrganizationRoleBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PublicCreateOrganizationRoleBody }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PublicCreateOrganizationRoleBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PublicCreateOrganizationRoleBody }
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
            input: { param: { role_id: string } } & { json: PublicUpdateOrganizationRoleBody }
            output: Role
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { role_id: string } } & { json: PublicUpdateOrganizationRoleBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { role_id: string } } & { json: PublicUpdateOrganizationRoleBody }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { role_id: string } } & { json: PublicUpdateOrganizationRoleBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { role_id: string } } & { json: PublicUpdateOrganizationRoleBody }
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
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: OrganizationSpendAlertListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { json: CreateSpendAlertBody }
            output: OrganizationSpendAlert
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateSpendAlertBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateSpendAlertBody }
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
            input: { param: { alert_id: string } } & { json: CreateSpendAlertBody }
            output: OrganizationSpendAlert
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { alert_id: string } } & { json: CreateSpendAlertBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { alert_id: string } } & { json: CreateSpendAlertBody }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { alert_id: string } } & { json: CreateSpendAlertBody }
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
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                models?: string[] | undefined
                group_by?: ('project_id' | 'user_id' | 'api_key_id' | 'model')[] | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: UsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                models?: string[] | undefined
                group_by?: ('project_id' | 'user_id' | 'api_key_id' | 'model')[] | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                models?: string[] | undefined
                group_by?: ('project_id' | 'user_id' | 'api_key_id' | 'model')[] | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                models?: string[] | undefined
                group_by?: ('project_id' | 'user_id' | 'api_key_id' | 'model')[] | undefined
                limit?: number | undefined
                page?: string | undefined
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
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                models?: string[] | undefined
                group_by?: ('project_id' | 'user_id' | 'api_key_id' | 'model')[] | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: UsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                models?: string[] | undefined
                group_by?: ('project_id' | 'user_id' | 'api_key_id' | 'model')[] | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                models?: string[] | undefined
                group_by?: ('project_id' | 'user_id' | 'api_key_id' | 'model')[] | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                models?: string[] | undefined
                group_by?: ('project_id' | 'user_id' | 'api_key_id' | 'model')[] | undefined
                limit?: number | undefined
                page?: string | undefined
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
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                group_by?: 'project_id'[] | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: UsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                group_by?: 'project_id'[] | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                group_by?: 'project_id'[] | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                group_by?: 'project_id'[] | undefined
                limit?: number | undefined
                page?: string | undefined
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
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                models?: string[] | undefined
                batch?: boolean | undefined
                group_by?:
                  | (
                      | 'project_id'
                      | 'user_id'
                      | 'api_key_id'
                      | 'model'
                      | 'batch'
                      | 'service_tier'
                      | 'api_source'
                    )[]
                  | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: UsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                models?: string[] | undefined
                batch?: boolean | undefined
                group_by?:
                  | (
                      | 'project_id'
                      | 'user_id'
                      | 'api_key_id'
                      | 'model'
                      | 'batch'
                      | 'service_tier'
                      | 'api_source'
                    )[]
                  | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                models?: string[] | undefined
                batch?: boolean | undefined
                group_by?:
                  | (
                      | 'project_id'
                      | 'user_id'
                      | 'api_key_id'
                      | 'model'
                      | 'batch'
                      | 'service_tier'
                      | 'api_source'
                    )[]
                  | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                models?: string[] | undefined
                batch?: boolean | undefined
                group_by?:
                  | (
                      | 'project_id'
                      | 'user_id'
                      | 'api_key_id'
                      | 'model'
                      | 'batch'
                      | 'service_tier'
                      | 'api_source'
                    )[]
                  | undefined
                limit?: number | undefined
                page?: string | undefined
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
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                models?: string[] | undefined
                group_by?: ('project_id' | 'user_id' | 'api_key_id' | 'model')[] | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: UsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                models?: string[] | undefined
                group_by?: ('project_id' | 'user_id' | 'api_key_id' | 'model')[] | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                models?: string[] | undefined
                group_by?: ('project_id' | 'user_id' | 'api_key_id' | 'model')[] | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                models?: string[] | undefined
                group_by?: ('project_id' | 'user_id' | 'api_key_id' | 'model')[] | undefined
                limit?: number | undefined
                page?: string | undefined
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
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                vector_store_ids?: string[] | undefined
                group_by?:
                  | ('project_id' | 'user_id' | 'api_key_id' | 'vector_store_id')[]
                  | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: UsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                vector_store_ids?: string[] | undefined
                group_by?:
                  | ('project_id' | 'user_id' | 'api_key_id' | 'vector_store_id')[]
                  | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                vector_store_ids?: string[] | undefined
                group_by?:
                  | ('project_id' | 'user_id' | 'api_key_id' | 'vector_store_id')[]
                  | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                vector_store_ids?: string[] | undefined
                group_by?:
                  | ('project_id' | 'user_id' | 'api_key_id' | 'vector_store_id')[]
                  | undefined
                limit?: number | undefined
                page?: string | undefined
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
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                sources?: ('image.generation' | 'image.edit' | 'image.variation')[] | undefined
                sizes?:
                  | ('256x256' | '512x512' | '1024x1024' | '1792x1792' | '1024x1792')[]
                  | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                models?: string[] | undefined
                group_by?:
                  | ('project_id' | 'user_id' | 'api_key_id' | 'model' | 'size' | 'source')[]
                  | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: UsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                sources?: ('image.generation' | 'image.edit' | 'image.variation')[] | undefined
                sizes?:
                  | ('256x256' | '512x512' | '1024x1024' | '1792x1792' | '1024x1792')[]
                  | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                models?: string[] | undefined
                group_by?:
                  | ('project_id' | 'user_id' | 'api_key_id' | 'model' | 'size' | 'source')[]
                  | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                sources?: ('image.generation' | 'image.edit' | 'image.variation')[] | undefined
                sizes?:
                  | ('256x256' | '512x512' | '1024x1024' | '1792x1792' | '1024x1792')[]
                  | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                models?: string[] | undefined
                group_by?:
                  | ('project_id' | 'user_id' | 'api_key_id' | 'model' | 'size' | 'source')[]
                  | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                sources?: ('image.generation' | 'image.edit' | 'image.variation')[] | undefined
                sizes?:
                  | ('256x256' | '512x512' | '1024x1024' | '1792x1792' | '1024x1792')[]
                  | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                models?: string[] | undefined
                group_by?:
                  | ('project_id' | 'user_id' | 'api_key_id' | 'model' | 'size' | 'source')[]
                  | undefined
                limit?: number | undefined
                page?: string | undefined
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
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                models?: string[] | undefined
                group_by?: ('project_id' | 'user_id' | 'api_key_id' | 'model')[] | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: UsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                models?: string[] | undefined
                group_by?: ('project_id' | 'user_id' | 'api_key_id' | 'model')[] | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                models?: string[] | undefined
                group_by?: ('project_id' | 'user_id' | 'api_key_id' | 'model')[] | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                models?: string[] | undefined
                group_by?: ('project_id' | 'user_id' | 'api_key_id' | 'model')[] | undefined
                limit?: number | undefined
                page?: string | undefined
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
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                group_by?: 'project_id'[] | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: UsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                group_by?: 'project_id'[] | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                group_by?: 'project_id'[] | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                group_by?: 'project_id'[] | undefined
                limit?: number | undefined
                page?: string | undefined
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
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                models?: string[] | undefined
                context_levels?: ('low' | 'medium' | 'high')[] | undefined
                group_by?:
                  | (
                      | 'project_id'
                      | 'user_id'
                      | 'api_key_id'
                      | 'model'
                      | 'context_level'
                      | 'api_source'
                    )[]
                  | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: UsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                models?: string[] | undefined
                context_levels?: ('low' | 'medium' | 'high')[] | undefined
                group_by?:
                  | (
                      | 'project_id'
                      | 'user_id'
                      | 'api_key_id'
                      | 'model'
                      | 'context_level'
                      | 'api_source'
                    )[]
                  | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                models?: string[] | undefined
                context_levels?: ('low' | 'medium' | 'high')[] | undefined
                group_by?:
                  | (
                      | 'project_id'
                      | 'user_id'
                      | 'api_key_id'
                      | 'model'
                      | 'context_level'
                      | 'api_source'
                    )[]
                  | undefined
                limit?: number | undefined
                page?: string | undefined
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | undefined
                bucket_width?: '1m' | '1h' | '1d' | undefined
                project_ids?: string[] | undefined
                user_ids?: string[] | undefined
                api_key_ids?: string[] | undefined
                models?: string[] | undefined
                context_levels?: ('low' | 'medium' | 'high')[] | undefined
                group_by?:
                  | (
                      | 'project_id'
                      | 'user_id'
                      | 'api_key_id'
                      | 'model'
                      | 'context_level'
                      | 'api_source'
                    )[]
                  | undefined
                limit?: number | undefined
                page?: string | undefined
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
            input: {
              query: {
                limit?: number | undefined
                after?: string | undefined
                emails?: string[] | undefined
              }
            }
            output: UserListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                after?: string | undefined
                emails?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                after?: string | undefined
                emails?: string[] | undefined
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                after?: string | undefined
                emails?: string[] | undefined
              }
            }
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
            input: { param: { user_id: string } } & { json: UserRoleUpdateRequest }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & { json: UserRoleUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } } & { json: UserRoleUpdateRequest }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string } } & { json: UserRoleUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string } } & { json: UserRoleUpdateRequest }
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
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: RoleListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { user_id: string } } & { json: PublicAssignOrganizationGroupRoleBody }
            output: UserRoleAssignment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & { json: PublicAssignOrganizationGroupRoleBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } } & { json: PublicAssignOrganizationGroupRoleBody }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string } } & { json: PublicAssignOrganizationGroupRoleBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string } } & { json: PublicAssignOrganizationGroupRoleBody }
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
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: RoleListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; group_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; group_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; group_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; group_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { project_id: string; group_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBody
            }
            output: GroupRoleAssignment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; group_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBody
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; group_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBody
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; group_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBody
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; group_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBody
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
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: PublicRoleListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { project_id: string } } & { json: PublicCreateOrganizationRoleBody }
            output: Role
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & { json: PublicCreateOrganizationRoleBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & { json: PublicCreateOrganizationRoleBody }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & { json: PublicCreateOrganizationRoleBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & { json: PublicCreateOrganizationRoleBody }
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
              json: PublicUpdateOrganizationRoleBody
            }
            output: Role
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; role_id: string } } & {
              json: PublicUpdateOrganizationRoleBody
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; role_id: string } } & {
              json: PublicUpdateOrganizationRoleBody
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; role_id: string } } & {
              json: PublicUpdateOrganizationRoleBody
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; role_id: string } } & {
              json: PublicUpdateOrganizationRoleBody
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
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: RoleListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; user_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; user_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; user_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; user_id: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { project_id: string; user_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBody
            }
            output: UserRoleAssignment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; user_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBody
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; user_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBody
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; user_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBody
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; user_id: string } } & {
              json: PublicAssignOrganizationGroupRoleBody
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
        input: { json: string } & { form: RealtimeCallCreateRequest }
        output: string
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/realtime/calls/:call_id/accept': {
      $post:
        | {
            input: { param: { call_id: string } } & { json: RealtimeSessionCreateRequestGA }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { call_id: string } } & { json: RealtimeSessionCreateRequestGA }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { call_id: string } } & { json: RealtimeSessionCreateRequestGA }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { call_id: string } } & { json: RealtimeSessionCreateRequestGA }
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
            input: { param: { call_id: string } } & { json: RealtimeCallReferRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { call_id: string } } & { json: RealtimeCallReferRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { call_id: string } } & { json: RealtimeCallReferRequest }
            output: string
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/realtime/calls/:call_id/reject': {
      $post:
        | {
            input: { param: { call_id: string } } & { json: RealtimeCallRejectRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { call_id: string } } & { json: RealtimeCallRejectRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { call_id: string } } & { json: RealtimeCallRejectRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { call_id: string } } & { json: RealtimeCallRejectRequest }
            output: string
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/realtime/client_secrets': {
      $post:
        | {
            input: { json: RealtimeCreateClientSecretRequest }
            output: RealtimeCreateClientSecretResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RealtimeCreateClientSecretRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RealtimeCreateClientSecretRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: RealtimeCreateClientSecretRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/realtime/sessions': {
      $post: {
        input: { json: RealtimeSessionCreateRequest }
        output: RealtimeSessionCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/realtime/transcription_sessions': {
      $post: {
        input: { json: RealtimeTranscriptionSessionCreateRequest }
        output: RealtimeTranscriptionSessionCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/realtime/translations/client_secrets': {
      $post:
        | {
            input: { json: RealtimeTranslationClientSecretCreateRequest }
            output: RealtimeTranslationClientSecretCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RealtimeTranslationClientSecretCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RealtimeTranslationClientSecretCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: RealtimeTranslationClientSecretCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/responses': {
      $post:
        | { input: { json: CreateResponse }; output: Response; outputFormat: 'json'; status: 200 }
        | {
            input: { json: CreateResponse }
            output: ResponseStreamEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CreateResponse }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateResponse }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateResponse }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateResponse }
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
                include?: IncludeEnum[] | undefined
                stream?: boolean | undefined
                starting_after?: number | undefined
                include_obfuscation?: boolean | undefined
              }
            }
            output: Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { response_id: string } } & {
              query: {
                include?: IncludeEnum[] | undefined
                stream?: boolean | undefined
                starting_after?: number | undefined
                include_obfuscation?: boolean | undefined
              }
            }
            output: ResponseStreamEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { response_id: string } } & {
              query: {
                include?: IncludeEnum[] | undefined
                stream?: boolean | undefined
                starting_after?: number | undefined
                include_obfuscation?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { response_id: string } } & {
              query: {
                include?: IncludeEnum[] | undefined
                stream?: boolean | undefined
                starting_after?: number | undefined
                include_obfuscation?: boolean | undefined
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
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                include?: IncludeEnum[] | undefined
              }
            }
            output: ResponseItemList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { response_id: string } } & {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                include?: IncludeEnum[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { response_id: string } } & {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                include?: IncludeEnum[] | undefined
              }
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
            input: { json: CreateThreadRequest }
            output: ThreadObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateThreadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/threads/runs': {
      $post:
        | {
            input: { json: CreateThreadAndRunRequest }
            output: RunObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateThreadAndRunRequest }
            output: AssistantStreamEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CreateThreadAndRunRequest }
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
            input: { param: { thread_id: string } } & { json: ModifyThreadRequest }
            output: ThreadObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string } } & { json: ModifyThreadRequest }
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
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                before?: string | undefined
                run_id?: string | undefined
              }
            }
            output: ListMessagesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string } } & {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                before?: string | undefined
                run_id?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { thread_id: string } } & { json: CreateMessageRequest }
            output: MessageObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string } } & { json: CreateMessageRequest }
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
              json: ModifyMessageRequest
            }
            output: MessageObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string; message_id: string } } & {
              json: ModifyMessageRequest
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
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ListRunsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string } } & {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { thread_id: string } } & {
              query: {
                'include[]'?:
                  | 'step_details.tool_calls[*].file_search.results[*].content'[]
                  | undefined
              }
            } & { json: CreateRunRequest }
            output: RunObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string } } & {
              query: {
                'include[]'?:
                  | 'step_details.tool_calls[*].file_search.results[*].content'[]
                  | undefined
              }
            } & { json: CreateRunRequest }
            output: AssistantStreamEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { thread_id: string } } & {
              query: {
                'include[]'?:
                  | 'step_details.tool_calls[*].file_search.results[*].content'[]
                  | undefined
              }
            } & { json: CreateRunRequest }
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
            input: { param: { thread_id: string; run_id: string } } & { json: ModifyRunRequest }
            output: RunObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string; run_id: string } } & { json: ModifyRunRequest }
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
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                before?: string | undefined
                'include[]'?:
                  | 'step_details.tool_calls[*].file_search.results[*].content'[]
                  | undefined
              }
            }
            output: ListRunStepsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string; run_id: string } } & {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                before?: string | undefined
                'include[]'?:
                  | 'step_details.tool_calls[*].file_search.results[*].content'[]
                  | undefined
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
              query: {
                'include[]'?:
                  | 'step_details.tool_calls[*].file_search.results[*].content'[]
                  | undefined
              }
            }
            output: RunStepObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string; run_id: string; step_id: string } } & {
              query: {
                'include[]'?:
                  | 'step_details.tool_calls[*].file_search.results[*].content'[]
                  | undefined
              }
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
              json: SubmitToolOutputsRunRequest
            }
            output: RunObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string; run_id: string } } & {
              json: SubmitToolOutputsRunRequest
            }
            output: AssistantStreamEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { thread_id: string; run_id: string } } & {
              json: SubmitToolOutputsRunRequest
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
            input: { json: CreateUploadRequest }
            output: Upload
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateUploadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateUploadRequest }
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
            input: { param: { upload_id: string } } & { json: CompleteUploadRequest }
            output: Upload
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { upload_id: string } } & { json: CompleteUploadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { upload_id: string } } & { json: CompleteUploadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { upload_id: string } } & { json: CompleteUploadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { upload_id: string } } & { json: CompleteUploadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { upload_id: string } } & { json: CompleteUploadRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/uploads/:upload_id/parts': {
      $post:
        | {
            input: { param: { upload_id: string } } & { form: AddUploadPartRequest }
            output: UploadPart
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { upload_id: string } } & { form: AddUploadPartRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { upload_id: string } } & { form: AddUploadPartRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { upload_id: string } } & { form: AddUploadPartRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { upload_id: string } } & { form: AddUploadPartRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { upload_id: string } } & { form: AddUploadPartRequest }
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
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ListVectorStoresResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { json: CreateVectorStoreRequest }
            output: VectorStoreObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateVectorStoreRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateVectorStoreRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateVectorStoreRequest }
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
            input: { param: { vector_store_id: string } } & { json: UpdateVectorStoreRequest }
            output: VectorStoreObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vector_store_id: string } } & { json: UpdateVectorStoreRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vector_store_id: string } } & { json: UpdateVectorStoreRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { vector_store_id: string } } & { json: UpdateVectorStoreRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vector_store_id: string } } & { json: UpdateVectorStoreRequest }
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
              json: CreateVectorStoreFileBatchRequest
            }
            output: VectorStoreFileBatchObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vector_store_id: string } } & {
              json: CreateVectorStoreFileBatchRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vector_store_id: string } } & {
              json: CreateVectorStoreFileBatchRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vector_store_id: string } } & {
              json: CreateVectorStoreFileBatchRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { vector_store_id: string } } & {
              json: CreateVectorStoreFileBatchRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { vector_store_id: string } } & {
              json: CreateVectorStoreFileBatchRequest
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
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                before?: string | undefined
                filter?: 'in_progress' | 'completed' | 'failed' | 'cancelled' | undefined
              }
            }
            output: ListVectorStoreFilesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vector_store_id: string; batch_id: string } } & {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                before?: string | undefined
                filter?: 'in_progress' | 'completed' | 'failed' | 'cancelled' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vector_store_id: string; batch_id: string } } & {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                before?: string | undefined
                filter?: 'in_progress' | 'completed' | 'failed' | 'cancelled' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vector_store_id: string; batch_id: string } } & {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                before?: string | undefined
                filter?: 'in_progress' | 'completed' | 'failed' | 'cancelled' | undefined
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
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                before?: string | undefined
                filter?: 'in_progress' | 'completed' | 'failed' | 'cancelled' | undefined
              }
            }
            output: ListVectorStoreFilesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vector_store_id: string } } & {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                before?: string | undefined
                filter?: 'in_progress' | 'completed' | 'failed' | 'cancelled' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vector_store_id: string } } & {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                before?: string | undefined
                filter?: 'in_progress' | 'completed' | 'failed' | 'cancelled' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vector_store_id: string } } & {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                before?: string | undefined
                filter?: 'in_progress' | 'completed' | 'failed' | 'cancelled' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { vector_store_id: string } } & { json: CreateVectorStoreFileRequest }
            output: VectorStoreFileObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vector_store_id: string } } & { json: CreateVectorStoreFileRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vector_store_id: string } } & { json: CreateVectorStoreFileRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vector_store_id: string } } & { json: CreateVectorStoreFileRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { vector_store_id: string } } & { json: CreateVectorStoreFileRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { vector_store_id: string } } & { json: CreateVectorStoreFileRequest }
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
              json: UpdateVectorStoreFileAttributesRequest
            }
            output: VectorStoreFileObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vector_store_id: string; file_id: string } } & {
              json: UpdateVectorStoreFileAttributesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vector_store_id: string; file_id: string } } & {
              json: UpdateVectorStoreFileAttributesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vector_store_id: string; file_id: string } } & {
              json: UpdateVectorStoreFileAttributesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { vector_store_id: string; file_id: string } } & {
              json: UpdateVectorStoreFileAttributesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { vector_store_id: string; file_id: string } } & {
              json: UpdateVectorStoreFileAttributesRequest
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
            input: { param: { vector_store_id: string } } & { json: VectorStoreSearchRequest }
            output: VectorStoreSearchResultsPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vector_store_id: string } } & { json: VectorStoreSearchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vector_store_id: string } } & { json: VectorStoreSearchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vector_store_id: string } } & { json: VectorStoreSearchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/conversations': {
      $post:
        | {
            input: { json: CreateConversationBody }
            output: ConversationResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateConversationBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateConversationBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateConversationBody }
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
            input: { param: { conversation_id: string } } & { json: UpdateConversationBody }
            output: ConversationResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: string } } & { json: UpdateConversationBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { conversation_id: string } } & { json: UpdateConversationBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { conversation_id: string } } & { json: UpdateConversationBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { conversation_id: string } } & { json: UpdateConversationBody }
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
        input: { json: V1OrganizationExternalKeysPostRequest }
        output: ExternalKeyResource
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            limit?: number | undefined
            order?: OrderEnum | undefined
            after?: string | ({ [x: string]: unknown } | null) | undefined
            purpose?: ExternalKeyPurpose | undefined
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
            output: File
            outputFormat: 'text'
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
        input: {
          query: {
            limit?: number | undefined
            order?: 'asc' | 'desc' | undefined
            after?: string | undefined
          }
        }
        output: PlatformProviderListResource
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CreatePlatformWorkloadIdentityProviderBody }
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
          json: UpdatePlatformWorkloadIdentityProviderBody
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
            limit?: number | undefined
            order?: 'asc' | 'desc' | undefined
            after?: string | undefined
            service_account_id?: string | undefined
          }
        }
        output: PlatformFederationRuleListResource
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { workload_identity_provider_id: string } } & {
          json: CreatePlatformWorkloadIdentityFederationRuleBody
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
        } & { json: UpdatePlatformWorkloadIdentityFederationRuleBody }
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
                start_time: number
                end_time?: number | ({ [x: string]: unknown } | null) | undefined
                bucket_width?:
                  | DecisionsUsageBucketWidth
                  | ({ [x: string]: unknown } | null)
                  | undefined
                limit?: number | ({ [x: string]: unknown } | null) | undefined
                page?: string | ({ [x: string]: unknown } | null) | undefined
                project_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
                group_by?: DecisionsUsageGroupBy[] | ({ [x: string]: unknown } | null) | undefined
                user_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
                api_key_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
                models?: string[] | ({ [x: string]: unknown } | null) | undefined
                batch?: boolean | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: PublicDecisionsUsageResponseResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | ({ [x: string]: unknown } | null) | undefined
                bucket_width?:
                  | DecisionsUsageBucketWidth
                  | ({ [x: string]: unknown } | null)
                  | undefined
                limit?: number | ({ [x: string]: unknown } | null) | undefined
                page?: string | ({ [x: string]: unknown } | null) | undefined
                project_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
                group_by?: DecisionsUsageGroupBy[] | ({ [x: string]: unknown } | null) | undefined
                user_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
                api_key_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
                models?: string[] | ({ [x: string]: unknown } | null) | undefined
                batch?: boolean | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: DecisionsUsageErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | ({ [x: string]: unknown } | null) | undefined
                bucket_width?:
                  | DecisionsUsageBucketWidth
                  | ({ [x: string]: unknown } | null)
                  | undefined
                limit?: number | ({ [x: string]: unknown } | null) | undefined
                page?: string | ({ [x: string]: unknown } | null) | undefined
                project_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
                group_by?: DecisionsUsageGroupBy[] | ({ [x: string]: unknown } | null) | undefined
                user_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
                api_key_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
                models?: string[] | ({ [x: string]: unknown } | null) | undefined
                batch?: boolean | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: DecisionsUsagePermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                start_time: number
                end_time?: number | ({ [x: string]: unknown } | null) | undefined
                bucket_width?:
                  | DecisionsUsageBucketWidth
                  | ({ [x: string]: unknown } | null)
                  | undefined
                limit?: number | ({ [x: string]: unknown } | null) | undefined
                page?: string | ({ [x: string]: unknown } | null) | undefined
                project_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
                group_by?: DecisionsUsageGroupBy[] | ({ [x: string]: unknown } | null) | undefined
                user_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
                api_key_ids?: string[] | ({ [x: string]: unknown } | null) | undefined
                models?: string[] | ({ [x: string]: unknown } | null) | undefined
                batch?: boolean | ({ [x: string]: unknown } | null) | undefined
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
                project_id?: string | ({ [x: string]: unknown } | null) | undefined
                after?: string | ({ [x: string]: unknown } | null) | undefined
                order?: ExternalStorageOrder | undefined
                limit?: number | undefined
              }
            }
            output: ExternalStorageListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                project_id?: string | ({ [x: string]: unknown } | null) | undefined
                after?: string | ({ [x: string]: unknown } | null) | undefined
                order?: ExternalStorageOrder | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                project_id?: string | ({ [x: string]: unknown } | null) | undefined
                after?: string | ({ [x: string]: unknown } | null) | undefined
                order?: ExternalStorageOrder | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                project_id?: string | ({ [x: string]: unknown } | null) | undefined
                after?: string | ({ [x: string]: unknown } | null) | undefined
                order?: ExternalStorageOrder | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { json: CreateExternalStorageBody }
            output: ExternalStorageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateExternalStorageBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateExternalStorageBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateExternalStorageBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateExternalStorageBody }
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
            input: { json: UpdateOrganizationSpendLimitBody }
            output: OrganizationSpendLimitResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateOrganizationSpendLimitBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UpdateOrganizationSpendLimitBody }
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
            input: { param: { project_id: string } } & { json: UpdateProjectSpendLimitBody }
            output: ProjectSpendLimitResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & { json: UpdateProjectSpendLimitBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string } } & { json: UpdateProjectSpendLimitBody }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & { json: UpdateProjectSpendLimitBody }
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
        input: { param: { project_id: string } } & { json: UpdateProjectServiceTierSettingsBody }
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
              json: CreateProjectServiceAccountApiKeyBody
            }
            output: ServiceAccountApiKeyBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; service_account_id: string } } & {
              json: CreateProjectServiceAccountApiKeyBody
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: string; service_account_id: string } } & {
              json: CreateProjectServiceAccountApiKeyBody
            }
            output: PermissionErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; service_account_id: string } } & {
              json: CreateProjectServiceAccountApiKeyBody
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string; service_account_id: string } } & {
              json: CreateProjectServiceAccountApiKeyBody
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
            input: { form: CreateContentProvenanceBody }
            output: ProvenanceResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: CreateContentProvenanceBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: CreateContentProvenanceBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { form: CreateContentProvenanceBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { form: CreateContentProvenanceBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { form: CreateContentProvenanceBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/videos': {
      $post:
        | {
            input: { json: CreateVideoJsonBody } & { form: CreateVideoMultipartBody }
            output: VideoResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateVideoJsonBody } & { form: CreateVideoMultipartBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateVideoJsonBody } & { form: CreateVideoMultipartBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateVideoJsonBody } & { form: CreateVideoMultipartBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateVideoJsonBody } & { form: CreateVideoMultipartBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateVideoJsonBody } & { form: CreateVideoMultipartBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                order?: OrderEnum | undefined
                after?: string | undefined
              }
            }
            output: VideoListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                order?: OrderEnum | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                order?: OrderEnum | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/videos/characters': {
      $post:
        | {
            input: { form: CreateVideoCharacterBody }
            output: VideoCharacterResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: CreateVideoCharacterBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: CreateVideoCharacterBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { form: CreateVideoCharacterBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { form: CreateVideoCharacterBody }
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
            input: { json: CreateVideoEditJsonBody } & { form: CreateVideoEditMultipartBody }
            output: VideoResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateVideoEditJsonBody } & { form: CreateVideoEditMultipartBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateVideoEditJsonBody } & { form: CreateVideoEditMultipartBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateVideoEditJsonBody } & { form: CreateVideoEditMultipartBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateVideoEditJsonBody } & { form: CreateVideoEditMultipartBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateVideoEditJsonBody } & { form: CreateVideoEditMultipartBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/videos/extensions': {
      $post:
        | {
            input: { json: CreateVideoExtendJsonBody } & { form: CreateVideoExtendMultipartBody }
            output: VideoResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateVideoExtendJsonBody } & { form: CreateVideoExtendMultipartBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateVideoExtendJsonBody } & { form: CreateVideoExtendMultipartBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateVideoExtendJsonBody } & { form: CreateVideoExtendMultipartBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateVideoExtendJsonBody } & { form: CreateVideoExtendMultipartBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateVideoExtendJsonBody } & { form: CreateVideoExtendMultipartBody }
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
              query: { variant?: VideoContentVariant | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { video_id: string } } & {
              query: { variant?: VideoContentVariant | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { video_id: string } } & {
              query: { variant?: VideoContentVariant | undefined }
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { video_id: string } } & {
              query: { variant?: VideoContentVariant | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { video_id: string } } & {
              query: { variant?: VideoContentVariant | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { video_id: string } } & {
              query: { variant?: VideoContentVariant | undefined }
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
            input: { param: { video_id: string } } & { json: CreateVideoRemixBody } & {
              form: CreateVideoRemixBody
            }
            output: VideoResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { video_id: string } } & { json: CreateVideoRemixBody } & {
              form: CreateVideoRemixBody
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { video_id: string } } & { json: CreateVideoRemixBody } & {
              form: CreateVideoRemixBody
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { video_id: string } } & { json: CreateVideoRemixBody } & {
              form: CreateVideoRemixBody
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { video_id: string } } & { json: CreateVideoRemixBody } & {
              form: CreateVideoRemixBody
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { video_id: string } } & { json: CreateVideoRemixBody } & {
              form: CreateVideoRemixBody
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
            input: { json: TokenCountsBody }
            output: TokenCountsResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TokenCountsBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TokenCountsBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/responses/compact': {
      $post:
        | {
            input: { json: CompactResponseMethodPublicBody }
            output: CompactResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CompactResponseMethodPublicBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CompactResponseMethodPublicBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CompactResponseMethodPublicBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/skills': {
      $post:
        | {
            input: { json: CreateSkillBody } & { form: CreateSkillBody }
            output: SkillResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateSkillBody } & { form: CreateSkillBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateSkillBody } & { form: CreateSkillBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateSkillBody } & { form: CreateSkillBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                order?: OrderEnum | undefined
                after?: string | undefined
              }
            }
            output: SkillListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                order?: OrderEnum | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                order?: OrderEnum | undefined
                after?: string | undefined
              }
            }
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
            input: { param: { skill_id: string } } & { json: SetDefaultSkillVersionBody }
            output: SkillResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { skill_id: string } } & { json: SetDefaultSkillVersionBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { skill_id: string } } & { json: SetDefaultSkillVersionBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { skill_id: string } } & { json: SetDefaultSkillVersionBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/skills/:skill_id/content': {
      $get:
        | {
            input: { param: { skill_id: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
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
            input: { param: { skill_id: string } } & { json: CreateSkillVersionBody } & {
              form: CreateSkillVersionBody
            }
            output: SkillVersionResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { skill_id: string } } & { json: CreateSkillVersionBody } & {
              form: CreateSkillVersionBody
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { skill_id: string } } & { json: CreateSkillVersionBody } & {
              form: CreateSkillVersionBody
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { skill_id: string } } & { json: CreateSkillVersionBody } & {
              form: CreateSkillVersionBody
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { skill_id: string } } & { json: CreateSkillVersionBody } & {
              form: CreateSkillVersionBody
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { skill_id: string } } & {
              query: {
                limit?: number | undefined
                order?: OrderEnum | undefined
                after?: string | undefined
              }
            }
            output: SkillVersionListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { skill_id: string } } & {
              query: {
                limit?: number | undefined
                order?: OrderEnum | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { skill_id: string } } & {
              query: {
                limit?: number | undefined
                order?: OrderEnum | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { skill_id: string } } & {
              query: {
                limit?: number | undefined
                order?: OrderEnum | undefined
                after?: string | undefined
              }
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
            output: File
            outputFormat: 'text'
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
            input: { json: CreateChatSessionBody }
            output: ChatSessionResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateChatSessionBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateChatSessionBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateChatSessionBody }
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
              query: {
                limit?: number | undefined
                order?: OrderEnum | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ThreadItemListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thread_id: string } } & {
              query: {
                limit?: number | undefined
                order?: OrderEnum | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { thread_id: string } } & {
              query: {
                limit?: number | undefined
                order?: OrderEnum | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { thread_id: string } } & {
              query: {
                limit?: number | undefined
                order?: OrderEnum | undefined
                after?: string | undefined
                before?: string | undefined
              }
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
                limit?: number | undefined
                order?: OrderEnum | undefined
                after?: string | undefined
                before?: string | undefined
                user?: string | undefined
              }
            }
            output: ThreadListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                order?: OrderEnum | undefined
                after?: string | undefined
                before?: string | undefined
                user?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                order?: OrderEnum | undefined
                after?: string | undefined
                before?: string | undefined
                user?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                order?: OrderEnum | undefined
                after?: string | undefined
                before?: string | undefined
                user?: string | undefined
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
        input: { json: DecisionRequest }
        output: DecisionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/agents/automations': {
      $post:
        | {
            input: { json: CreateAutomationParams }
            output: AutomationResource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateAutomationParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateAutomationParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateAutomationParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateAutomationParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateAutomationParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateAutomationParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateAutomationParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                session_id?: string | undefined
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
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                session_id?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                session_id?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                session_id?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                session_id?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                session_id?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                session_id?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                session_id?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 501
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                session_id?: string | undefined
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
            input: { param: { automation_id: string } } & { json: UpdateAutomationParams }
            output: AutomationResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { automation_id: string } } & { json: UpdateAutomationParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { automation_id: string } } & { json: UpdateAutomationParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { automation_id: string } } & { json: UpdateAutomationParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { automation_id: string } } & { json: UpdateAutomationParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { automation_id: string } } & { json: UpdateAutomationParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { automation_id: string } } & { json: UpdateAutomationParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { automation_id: string } } & { json: UpdateAutomationParams }
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
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
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
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { automation_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { automation_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { automation_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { automation_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { automation_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { automation_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 501
          }
        | {
            input: { param: { automation_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
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
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                type?: EnvironmentTypeParam | undefined
              }
            }
            output: AgentEnvironmentListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                type?: EnvironmentTypeParam | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                type?: EnvironmentTypeParam | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                type?: EnvironmentTypeParam | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                type?: EnvironmentTypeParam | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                type?: EnvironmentTypeParam | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                type?: EnvironmentTypeParam | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                type?: EnvironmentTypeParam | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateAgentEnvironmentParams
            }
            output: PublicEnvironmentResource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateAgentEnvironmentParams
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateAgentEnvironmentParams
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateAgentEnvironmentParams
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateAgentEnvironmentParams
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateAgentEnvironmentParams
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateAgentEnvironmentParams
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateAgentEnvironmentParams
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateAgentEnvironmentParams
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
              query: {
                path?: (string | null) | undefined
                limit?: (bigint | null) | undefined
                order?: ListOrderParam | undefined
                page?: string | undefined
              }
            }
            output: EnvironmentFileListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environment_id: string } } & {
              query: {
                path?: (string | null) | undefined
                limit?: (bigint | null) | undefined
                order?: ListOrderParam | undefined
                page?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environment_id: string } } & {
              query: {
                path?: (string | null) | undefined
                limit?: (bigint | null) | undefined
                order?: ListOrderParam | undefined
                page?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environment_id: string } } & {
              query: {
                path?: (string | null) | undefined
                limit?: (bigint | null) | undefined
                order?: ListOrderParam | undefined
                page?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { environment_id: string } } & {
              query: {
                path?: (string | null) | undefined
                limit?: (bigint | null) | undefined
                order?: ListOrderParam | undefined
                page?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environment_id: string } } & {
              query: {
                path?: (string | null) | undefined
                limit?: (bigint | null) | undefined
                order?: ListOrderParam | undefined
                page?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { environment_id: string } } & {
              query: {
                path?: (string | null) | undefined
                limit?: (bigint | null) | undefined
                order?: ListOrderParam | undefined
                page?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { environment_id: string } } & {
              query: {
                path?: (string | null) | undefined
                limit?: (bigint | null) | undefined
                order?: ListOrderParam | undefined
                page?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { environment_id: string } } & { json: HostedEnvironmentFileParam }
            output: EnvironmentFileResource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { environment_id: string } } & { json: HostedEnvironmentFileParam }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environment_id: string } } & { json: HostedEnvironmentFileParam }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environment_id: string } } & { json: HostedEnvironmentFileParam }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { environment_id: string } } & { json: HostedEnvironmentFileParam }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environment_id: string } } & { json: HostedEnvironmentFileParam }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { environment_id: string } } & { json: HostedEnvironmentFileParam }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { environment_id: string } } & { json: HostedEnvironmentFileParam }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { environment_id: string } } & { json: HostedEnvironmentFileParam }
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
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
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
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
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
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: SessionItemListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
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
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: SessionTurnListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string; subagent_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
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
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: SessionItemListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string; subagent_id: string; turn_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string; subagent_id: string; turn_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string; subagent_id: string; turn_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string; subagent_id: string; turn_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string; subagent_id: string; turn_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string; subagent_id: string; turn_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string; subagent_id: string; turn_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
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
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: AgentListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { json: CreateAgentParams }
            output: AgentResource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateAgentParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateAgentParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateAgentParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateAgentParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateAgentParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateAgentParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateAgentParams }
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
            input: { param: { agent_id: string } } & { json: UpdateAgentParams }
            output: AgentResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_id: string } } & { json: UpdateAgentParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { agent_id: string } } & { json: UpdateAgentParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { agent_id: string } } & { json: UpdateAgentParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { agent_id: string } } & { json: UpdateAgentParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { agent_id: string } } & { json: UpdateAgentParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { agent_id: string } } & { json: UpdateAgentParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { agent_id: string } } & { json: UpdateAgentParams }
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
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: EnvironmentTemplateListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { json: CreateEnvironmentTemplateParams }
            output: EnvironmentTemplateResource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateEnvironmentTemplateParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateEnvironmentTemplateParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateEnvironmentTemplateParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateEnvironmentTemplateParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateEnvironmentTemplateParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateEnvironmentTemplateParams }
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
              json: UpdateEnvironmentTemplateParams
            }
            output: EnvironmentTemplateResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environment_template_id: string } } & {
              json: UpdateEnvironmentTemplateParams
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environment_template_id: string } } & {
              json: UpdateEnvironmentTemplateParams
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environment_template_id: string } } & {
              json: UpdateEnvironmentTemplateParams
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { environment_template_id: string } } & {
              json: UpdateEnvironmentTemplateParams
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environment_template_id: string } } & {
              json: UpdateEnvironmentTemplateParams
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { environment_template_id: string } } & {
              json: UpdateEnvironmentTemplateParams
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { environment_template_id: string } } & {
              json: UpdateEnvironmentTemplateParams
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
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                agent_id?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: SessionListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                agent_id?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                agent_id?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                agent_id?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                agent_id?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                agent_id?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                agent_id?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                agent_id?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { json: CreateAgentSessionParams }
            output: SessionResource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateAgentSessionParams }
            output: SessionEvent
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: CreateAgentSessionParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateAgentSessionParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateAgentSessionParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateAgentSessionParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateAgentSessionParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateAgentSessionParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateAgentSessionParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateAgentSessionParams }
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
            input: { param: { session_id: string } } & { json: UpdateAgentSessionParams }
            output: SessionResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } } & { json: UpdateAgentSessionParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & { json: UpdateAgentSessionParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string } } & { json: UpdateAgentSessionParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string } } & { json: UpdateAgentSessionParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & { json: UpdateAgentSessionParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string } } & { json: UpdateAgentSessionParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string } } & { json: UpdateAgentSessionParams }
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
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                environment_id?: (string | null) | undefined
              }
            }
            output: SessionArtifactListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                environment_id?: (string | null) | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                environment_id?: (string | null) | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                environment_id?: (string | null) | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                environment_id?: (string | null) | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                environment_id?: (string | null) | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                environment_id?: (string | null) | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                environment_id?: (string | null) | undefined
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
            output: File
            outputFormat: 'text'
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
            input: { param: { session_id: string } } & {
              query: { include_obfuscation?: boolean | undefined }
            }
            output: SessionEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { session_id: string } } & {
              query: { include_obfuscation?: boolean | undefined }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & {
              query: { include_obfuscation?: boolean | undefined }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string } } & {
              query: { include_obfuscation?: boolean | undefined }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string } } & {
              query: { include_obfuscation?: boolean | undefined }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & {
              query: { include_obfuscation?: boolean | undefined }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string } } & {
              query: { include_obfuscation?: boolean | undefined }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string } } & {
              query: { include_obfuscation?: boolean | undefined }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { session_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: CreateSessionEventsParams }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { session_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: CreateSessionEventsParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: CreateSessionEventsParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: CreateSessionEventsParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: CreateSessionEventsParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: CreateSessionEventsParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: CreateSessionEventsParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: CreateSessionEventsParams }
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
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: SessionItemListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
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
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: SessionTraceListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
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
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: SessionTurnListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
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
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: SessionItemListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string; turn_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string; turn_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string; turn_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string; turn_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string; turn_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { session_id: string; turn_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { session_id: string; turn_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
              }
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
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                metadata?: { [x: string]: string } | undefined
                status?: VaultStatusFilterParam | undefined
              }
            }
            output: VaultListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                metadata?: { [x: string]: string } | undefined
                status?: VaultStatusFilterParam | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                metadata?: { [x: string]: string } | undefined
                status?: VaultStatusFilterParam | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                metadata?: { [x: string]: string } | undefined
                status?: VaultStatusFilterParam | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                metadata?: { [x: string]: string } | undefined
                status?: VaultStatusFilterParam | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                metadata?: { [x: string]: string } | undefined
                status?: VaultStatusFilterParam | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                metadata?: { [x: string]: string } | undefined
                status?: VaultStatusFilterParam | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                metadata?: { [x: string]: string } | undefined
                status?: VaultStatusFilterParam | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { json: CreateVaultParams }
            output: VaultResource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateVaultParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateVaultParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateVaultParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateVaultParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateVaultParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateVaultParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateVaultParams }
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
            input: { param: { vault_id: string } } & { json: UpdateVaultParams }
            output: VaultResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vault_id: string } } & { json: UpdateVaultParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vault_id: string } } & { json: UpdateVaultParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { vault_id: string } } & { json: UpdateVaultParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { vault_id: string } } & { json: UpdateVaultParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vault_id: string } } & { json: UpdateVaultParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { vault_id: string } } & { json: UpdateVaultParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { vault_id: string } } & { json: UpdateVaultParams }
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
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                metadata?: { [x: string]: string } | undefined
                status?: VaultStatusFilterParam | undefined
              }
            }
            output: VaultCredentialListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vault_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                metadata?: { [x: string]: string } | undefined
                status?: VaultStatusFilterParam | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vault_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                metadata?: { [x: string]: string } | undefined
                status?: VaultStatusFilterParam | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { vault_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                metadata?: { [x: string]: string } | undefined
                status?: VaultStatusFilterParam | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { vault_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                metadata?: { [x: string]: string } | undefined
                status?: VaultStatusFilterParam | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vault_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                metadata?: { [x: string]: string } | undefined
                status?: VaultStatusFilterParam | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { vault_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                metadata?: { [x: string]: string } | undefined
                status?: VaultStatusFilterParam | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { vault_id: string } } & {
              query: {
                limit?: bigint | undefined
                order?: ListOrderParam | undefined
                after?: string | undefined
                metadata?: { [x: string]: string } | undefined
                status?: VaultStatusFilterParam | undefined
              }
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { vault_id: string } } & { json: CreateVaultCredentialParams }
            output: VaultCredentialResource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { vault_id: string } } & { json: CreateVaultCredentialParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vault_id: string } } & { json: CreateVaultCredentialParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { vault_id: string } } & { json: CreateVaultCredentialParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { vault_id: string } } & { json: CreateVaultCredentialParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vault_id: string } } & { json: CreateVaultCredentialParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { vault_id: string } } & { json: CreateVaultCredentialParams }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { vault_id: string } } & { json: CreateVaultCredentialParams }
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
              json: RotateVaultCredentialParams
            }
            output: VaultCredentialResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vault_id: string; credential_id: string } } & {
              json: RotateVaultCredentialParams
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vault_id: string; credential_id: string } } & {
              json: RotateVaultCredentialParams
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { vault_id: string; credential_id: string } } & {
              json: RotateVaultCredentialParams
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { vault_id: string; credential_id: string } } & {
              json: RotateVaultCredentialParams
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vault_id: string; credential_id: string } } & {
              json: RotateVaultCredentialParams
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { vault_id: string; credential_id: string } } & {
              json: RotateVaultCredentialParams
            }
            output: ErrorResponse_2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { vault_id: string; credential_id: string } } & {
              json: RotateVaultCredentialParams
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
            input: {
              query: {
                limit?: number | undefined
                after?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: WebhookEndpointListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                after?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                after?: string | ({ [x: string]: unknown } | null) | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { json: PublicCreateEndpointBody }
            output: WebhookEndpointWithSecretResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PublicCreateEndpointBody }
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
            input: { param: { webhook_endpoint_id: string } } & { json: PublicUpdateEndpointBody }
            output: WebhookEndpointBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_endpoint_id: string } } & { json: PublicUpdateEndpointBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_endpoint_id: string } } & { json: PublicUpdateEndpointBody }
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
            input: { param: { webhook_endpoint_id: string } } & { json: PublicRotateSecretBody }
            output: WebhookEndpointWithSecretResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_endpoint_id: string } } & { json: PublicRotateSecretBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_endpoint_id: string } } & { json: PublicRotateSecretBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/webhook_endpoints/:webhook_endpoint_id/test': {
      $post:
        | {
            input: { param: { webhook_endpoint_id: string } } & { json: PublicTestEndpointBody }
            output: WebhookEndpointTestResultResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_endpoint_id: string } } & { json: PublicTestEndpointBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_endpoint_id: string } } & { json: PublicTestEndpointBody }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_endpoint_id: string } } & { json: PublicTestEndpointBody }
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
            input: { header: { 'openai-beta'?: 'responses_multi_agent=v1'[] | undefined } } & {
              json: BetaCreateResponse
            }
            output: BetaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'openai-beta'?: 'responses_multi_agent=v1'[] | undefined } } & {
              json: BetaCreateResponse
            }
            output: BetaResponseStreamEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'openai-beta'?: 'responses_multi_agent=v1'[] | undefined } } & {
              json: BetaCreateResponse
            }
            output: BetaErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'openai-beta'?: 'responses_multi_agent=v1'[] | undefined } } & {
              json: BetaCreateResponse
            }
            output: BetaErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'openai-beta'?: 'responses_multi_agent=v1'[] | undefined } } & {
              json: BetaCreateResponse
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'openai-beta'?: 'responses_multi_agent=v1'[] | undefined } } & {
              json: BetaCreateResponse
            }
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
                include?: BetaIncludeEnum[] | undefined
                stream?: boolean | undefined
                starting_after?: number | undefined
                include_obfuscation?: boolean | undefined
              }
            } & { header: { 'openai-beta'?: 'responses_multi_agent=v1'[] | undefined } }
            output: BetaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { response_id: string } } & {
              query: {
                include?: BetaIncludeEnum[] | undefined
                stream?: boolean | undefined
                starting_after?: number | undefined
                include_obfuscation?: boolean | undefined
              }
            } & { header: { 'openai-beta'?: 'responses_multi_agent=v1'[] | undefined } }
            output: BetaResponseStreamEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { response_id: string } } & {
              query: {
                include?: BetaIncludeEnum[] | undefined
                stream?: boolean | undefined
                starting_after?: number | undefined
                include_obfuscation?: boolean | undefined
              }
            } & { header: { 'openai-beta'?: 'responses_multi_agent=v1'[] | undefined } }
            output: BetaErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { response_id: string } } & {
              query: {
                include?: BetaIncludeEnum[] | undefined
                stream?: boolean | undefined
                starting_after?: number | undefined
                include_obfuscation?: boolean | undefined
              }
            } & { header: { 'openai-beta'?: 'responses_multi_agent=v1'[] | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { response_id: string } } & {
              header: { 'openai-beta'?: 'responses_multi_agent=v1'[] | undefined }
            }
            output: { object: 'response.deleted'; deleted: boolean; id: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { response_id: string } } & {
              header: { 'openai-beta'?: 'responses_multi_agent=v1'[] | undefined }
            }
            output: BetaErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { response_id: string } } & {
              header: { 'openai-beta'?: 'responses_multi_agent=v1'[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/responses/:response_id/cancel?beta=true': {
      $post:
        | {
            input: { param: { response_id: string } } & {
              header: { 'openai-beta'?: 'responses_multi_agent=v1'[] | undefined }
            }
            output: BetaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { response_id: string } } & {
              header: { 'openai-beta'?: 'responses_multi_agent=v1'[] | undefined }
            }
            output: BetaErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { response_id: string } } & {
              header: { 'openai-beta'?: 'responses_multi_agent=v1'[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/responses/compact?beta=true': {
      $post:
        | {
            input: { header: { 'openai-beta'?: 'responses_multi_agent=v1'[] | undefined } } & {
              json: BetaCompactResponseMethodPublicBody
            }
            output: BetaCompactResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'openai-beta'?: 'responses_multi_agent=v1'[] | undefined } } & {
              json: BetaCompactResponseMethodPublicBody
            }
            output: BetaErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'openai-beta'?: 'responses_multi_agent=v1'[] | undefined } } & {
              json: BetaCompactResponseMethodPublicBody
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'openai-beta'?: 'responses_multi_agent=v1'[] | undefined } } & {
              json: BetaCompactResponseMethodPublicBody
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
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                include?: BetaIncludeEnum[] | undefined
              }
            } & { header: { 'openai-beta'?: 'responses_multi_agent=v1'[] | undefined } }
            output: BetaResponseItemList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { response_id: string } } & {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                include?: BetaIncludeEnum[] | undefined
              }
            } & { header: { 'openai-beta'?: 'responses_multi_agent=v1'[] | undefined } }
            output: BetaErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { response_id: string } } & {
              query: {
                limit?: number | undefined
                order?: 'asc' | 'desc' | undefined
                after?: string | undefined
                include?: BetaIncludeEnum[] | undefined
              }
            } & { header: { 'openai-beta'?: 'responses_multi_agent=v1'[] | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/responses/input_tokens?beta=true': {
      $post:
        | {
            input: { header: { 'openai-beta'?: 'responses_multi_agent=v1'[] | undefined } } & {
              json: BetaTokenCountsBody
            }
            output: BetaTokenCountsResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'openai-beta'?: 'responses_multi_agent=v1'[] | undefined } } & {
              json: BetaTokenCountsBody
            }
            output: BetaErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'openai-beta'?: 'responses_multi_agent=v1'[] | undefined } } & {
              json: BetaTokenCountsBody
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  },
  '/'
>
export default routes
