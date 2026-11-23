type GenerateParameters = {
  adapter_id?: (string | null) | undefined
  best_of?: (number | null) | undefined
  decoder_input_details?: boolean | undefined
  details?: boolean | undefined
  do_sample?: boolean | undefined
  frequency_penalty?: (number | null) | undefined
  grammar?: {} | undefined
  max_new_tokens?: (number | null) | undefined
  repetition_penalty?: (number | null) | undefined
  return_full_text?: (boolean | null) | undefined
  seed?: (bigint | null) | undefined
  stop?: string[] | undefined
  temperature?: (number | null) | undefined
  top_k?: (number | null) | undefined
  top_n_tokens?: (number | null) | undefined
  top_p?: (number | null) | undefined
  truncate?: (number | null) | undefined
  typical_p?: (number | null) | undefined
  watermark?: boolean | undefined
}
type CompatGenerateRequest = {
  inputs: string
  parameters?: GenerateParameters | undefined
  stream?: boolean | undefined
}
type FinishReason = 'length' | 'eos_token' | 'stop_sequence'
type PrefillToken = { id: number; logprob: number | null; text: string }
type Token = { id: number; logprob: number | null; special: boolean; text: string }
type BestOfSequence = {
  finish_reason: FinishReason
  generated_text: string
  generated_tokens: number
  prefill: PrefillToken[]
  seed?: (bigint | null) | undefined
  tokens: Token[]
  top_tokens?: Token[][] | undefined
}
type GenerateResponse = {
  details?:
    | {
        best_of_sequences?: (BestOfSequence[] | null) | undefined
        finish_reason: FinishReason
        generated_tokens: number
        prefill: PrefillToken[]
        seed?: (bigint | null) | undefined
        tokens: Token[]
        top_tokens?: Token[][] | undefined
      }
    | undefined
  generated_text: string
}
type StreamResponse = {
  details?:
    | {
        finish_reason: FinishReason
        generated_tokens: number
        input_length: number
        seed?: (bigint | null) | undefined
      }
    | undefined
  generated_text?: (string | null) | undefined
  index: number
  token: Token
  top_tokens?: Token[] | undefined
}
type ErrorResponse = { error: string; error_type: string }
type Message = { name?: (string | null) | undefined; role: string }
type FunctionDefinition = {
  arguments: { [x: string]: unknown }
  description?: (string | null) | undefined
  name: string
}
type Tool = { function: FunctionDefinition; type: string }
type ChatRequest = {
  frequency_penalty?: (number | null) | undefined
  logit_bias?: (number[] | null) | undefined
  logprobs?: (boolean | null) | undefined
  max_tokens?: (number | null) | undefined
  messages: Message[]
  model?: (string | null) | undefined
  n?: (number | null) | undefined
  presence_penalty?: (number | null) | undefined
  response_format?: {} | undefined
  seed?: (bigint | null) | undefined
  stop?: (string[] | null) | undefined
  stream?: boolean | undefined
  stream_options?: { include_usage?: boolean | undefined } | undefined
  temperature?: (number | null) | undefined
  tool_choice?: {} | undefined
  tool_prompt?: (string | null) | undefined
  tools?: (Tool[] | null) | undefined
  top_logprobs?: (number | null) | undefined
  top_p?: (number | null) | undefined
}
type SimpleToken = { id: number; start: number; stop: number; text: string }
type TokenizeResponse = SimpleToken[]
type ChatTokenizeResponse = { templated_text: string; tokenize_response: TokenizeResponse }
type GenerateRequest = { inputs: string; parameters?: GenerateParameters | undefined }
type Info = {
  docker_label?: (string | null) | undefined
  max_best_of: number
  max_client_batch_size: number
  max_concurrent_requests: number
  max_input_tokens: number
  max_stop_sequences: number
  max_total_tokens: number
  model_id: string
  model_pipeline_tag?: (string | null) | undefined
  model_sha?: (string | null) | undefined
  router: string
  sha?: (string | null) | undefined
  validation_workers: number
  version: string
}
type Prompt = string[]
type CompletionRequest = {
  frequency_penalty?: (number | null) | undefined
  max_tokens?: (number | null) | undefined
  model?: (string | null) | undefined
  prompt: Prompt
  repetition_penalty?: (number | null) | undefined
  seed?: (bigint | null) | undefined
  stop?: (string[] | null) | undefined
  stream?: boolean | undefined
  suffix?: (string | null) | undefined
  temperature?: (number | null) | undefined
  top_p?: (number | null) | undefined
}
type SagemakerRequest = CompatGenerateRequest | ChatRequest | CompletionRequest
type ChatCompletionTopLogprob = { logprob: number; token: string }
type ChatCompletionLogprob = {
  logprob: number
  token: string
  top_logprobs: ChatCompletionTopLogprob[]
}
type TextMessage = { content: string; role: string; tool_call_id?: (string | null) | undefined }
type ToolCall = { function: FunctionDefinition; id: string; type: string }
type ToolCallMessage = { role: string; tool_calls: ToolCall[] }
type OutputMessage = TextMessage | ToolCallMessage
type ChatCompletionComplete = {
  finish_reason: string
  index: number
  logprobs?: { content: ChatCompletionLogprob[] } | undefined
  message: OutputMessage
}
type Usage = { completion_tokens: number; prompt_tokens: number; total_tokens: number }
type ChatCompletion = {
  choices: ChatCompletionComplete[]
  created: bigint
  id: string
  model: string
  system_fingerprint: string
  usage: Usage
}
type CompletionComplete = {
  finish_reason: string
  index: number
  logprobs?: (number[] | null) | undefined
  text: string
}
type CompletionFinal = {
  choices: CompletionComplete[]
  created: bigint
  id: string
  model: string
  system_fingerprint: string
  usage: Usage
}
type SagemakerResponse = GenerateResponse | ChatCompletion | CompletionFinal
type Function = { arguments: string; name?: (string | null) | undefined }
type DeltaToolCall = { function: Function; id: string; index: number; type: string }
type ToolCallDelta = { role: string; tool_calls: DeltaToolCall[] }
type ChatCompletionDelta = TextMessage | ToolCallDelta
type ChatCompletionChoice = {
  delta: ChatCompletionDelta
  finish_reason?: (string | null) | undefined
  index: number
  logprobs?: { content: ChatCompletionLogprob[] } | undefined
}
type ChatCompletionChunk = {
  choices: ChatCompletionChoice[]
  created: bigint
  id: string
  model: string
  system_fingerprint: string
  usage?: { completion_tokens: number; prompt_tokens: number; total_tokens: number } | undefined
}
type Chunk = {
  choices: CompletionComplete[]
  created: bigint
  id: string
  model: string
  system_fingerprint: string
}
type SagemakerStreamResponse = StreamResponse | ChatCompletionChunk | Chunk
type ModelInfo = { created: bigint; id: string; object: string; owned_by: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $post:
        | {
            input: { json: CompatGenerateRequest }
            output: GenerateResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CompatGenerateRequest }
            output: StreamResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CompatGenerateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CompatGenerateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { json: CompatGenerateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CompatGenerateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/chat_tokenize': {
      $post:
        | {
            input: { json: ChatRequest }
            output: ChatTokenizeResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ChatRequest }; output: ErrorResponse; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/generate': {
      $post:
        | {
            input: { json: GenerateRequest }
            output: GenerateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GenerateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: GenerateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { json: GenerateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: GenerateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/generate_stream': {
      $post:
        | {
            input: { json: GenerateRequest }
            output: StreamResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: GenerateRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { json: GenerateRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 424
          }
        | {
            input: { json: GenerateRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { json: GenerateRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/health': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 503 }
    }
  } & { '/info': { $get: { input: {}; output: Info; outputFormat: 'json'; status: 200 } } } & {
    '/invocations': {
      $post:
        | {
            input: { json: SagemakerRequest }
            output: SagemakerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SagemakerRequest }
            output: SagemakerStreamResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: SagemakerRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: SagemakerRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { json: SagemakerRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: SagemakerRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & { '/metrics': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } } } & {
    '/tokenize': {
      $post:
        | {
            input: { json: GenerateRequest }
            output: TokenizeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GenerateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/chat/completions': {
      $post:
        | {
            input: { json: ChatRequest }
            output: ChatCompletion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ChatRequest }
            output: ChatCompletionChunk
            outputFormat: 'text'
            status: 200
          }
        | { input: { json: ChatRequest }; output: ErrorResponse; outputFormat: 'json'; status: 422 }
        | { input: { json: ChatRequest }; output: ErrorResponse; outputFormat: 'json'; status: 424 }
        | { input: { json: ChatRequest }; output: ErrorResponse; outputFormat: 'json'; status: 429 }
        | { input: { json: ChatRequest }; output: ErrorResponse; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/v1/completions': {
      $post:
        | {
            input: { json: CompletionRequest }
            output: CompletionFinal
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: CompletionRequest }; output: Chunk; outputFormat: 'text'; status: 200 }
        | {
            input: { json: CompletionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CompletionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { json: CompletionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CompletionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/models': {
      $get:
        | { input: {}; output: ModelInfo; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 404 }
    }
  },
  '/'
>
export default routes
