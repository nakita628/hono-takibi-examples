type ModelDetails = {
  parent_model?: string | undefined
  format?: string | undefined
  family?: string | undefined
  families?: string[] | undefined
  parameter_size?: string | undefined
  quantization_level?: string | undefined
}
type ListModelResponse = {
  name?: string | undefined
  model?: string | undefined
  modified_at?: string | undefined
  size?: number | undefined
  digest?: string | undefined
  details?: ModelDetails | undefined
}
type ListResponse = { models?: ListModelResponse[] | undefined }
type PullRequest = { model: string; insecure?: boolean | undefined; stream?: boolean | undefined }
type ProgressResponse = {
  status?: string | undefined
  digest?: string | undefined
  total?: number | undefined
  completed?: number | undefined
}
type ShowRequest = { model: string }
type Message = {
  role?: string | undefined
  content?: string | undefined
  images?: string[] | undefined
}
type ShowResponse = {
  license?: string | undefined
  modelfile?: string | undefined
  parameters?: string | undefined
  template?: string | undefined
  system?: string | undefined
  details?: ModelDetails | undefined
  messages?: Message[] | undefined
}
type Duration = string
type GenerateRequest = {
  model: string
  prompt?: string | undefined
  suffix?: string | undefined
  images?: string[] | undefined
  format?: string | undefined
  system?: string | undefined
  template?: string | undefined
  context?: number[] | undefined
  stream?: boolean | undefined
  raw?: boolean | undefined
  keep_alive?: Duration | undefined
}
type GenerateResponse = {
  model?: string | undefined
  created_at?: string | undefined
  response?: string | undefined
  done?: boolean | undefined
  context?: number[] | undefined
  total_duration?: number | undefined
  load_duration?: number | undefined
  prompt_eval_count?: number | undefined
  prompt_eval_duration?: number | undefined
  eval_count?: number | undefined
  eval_duration?: number | undefined
}
type Options = {
  num_keep?: number | undefined
  seed?: number | undefined
  num_predict?: number | undefined
  top_k?: number | undefined
  top_p?: number | undefined
  tfs_z?: number | undefined
  typical_p?: number | undefined
  repeat_last_n?: number | undefined
  temperature?: number | undefined
  repeat_penalty?: number | undefined
  presence_penalty?: number | undefined
  frequency_penalty?: number | undefined
  mirostat?: number | undefined
  mirostat_tau?: number | undefined
  mirostat_eta?: number | undefined
  penalize_newline?: boolean | undefined
  stop?: string[] | undefined
  numa?: boolean | undefined
  num_ctx?: number | undefined
  num_batch?: number | undefined
  num_gpu?: number | undefined
  main_gpu?: number | undefined
  low_vram?: boolean | undefined
  f16_kv?: boolean | undefined
  logits_all?: boolean | undefined
  vocab_only?: boolean | undefined
  use_mmap?: boolean | undefined
  use_mlock?: boolean | undefined
  num_thread?: number | undefined
}
type ChatRequest = {
  model?: string | undefined
  messages?: Message[] | undefined
  stream?: boolean | undefined
  format?: string | undefined
  keep_alive?: Duration | undefined
  options?: Options | undefined
}
type ChatResponse = {
  model?: string | undefined
  created_at?: string | undefined
  message?: Message | undefined
  done_reason?: string | undefined
  done?: boolean | undefined
  total_duration?: number | undefined
  load_duration?: number | undefined
  prompt_eval_count?: number | undefined
  prompt_eval_duration?: number | undefined
  eval_count?: number | undefined
  eval_duration?: number | undefined
}
type ProcessModelResponse = {
  name?: string | undefined
  model?: string | undefined
  size?: number | undefined
  digest?: string | undefined
  details?: ModelDetails | undefined
  expires_at?: string | undefined
  size_vram?: number | undefined
}
type ProcessResponse = { models?: ProcessModelResponse[] | undefined }
type OpenAIModel = { id: string; object: string; created: number; owned_by: string }
type OpenAIModelListResponse = { object: string; data: OpenAIModel[] }
type OpenAIErrorResponse = {
  error?: { message: string; type: string; code?: (string | null) | undefined } | undefined
}
type OpenAIMessage = {
  role: string
  content?: (string | null) | { [x: string]: unknown }[] | undefined
}
type OpenAIChatCompletionRequest = {
  model: string
  messages: OpenAIMessage[]
  stream?: boolean | undefined
}
type OpenAIChatCompletionResponse = {
  id?: string | undefined
  object?: string | undefined
  created?: number | undefined
  model?: string | undefined
  choices?: { [x: string]: unknown }[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/version': {
      $get: { input: {}; output: { version: string }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/tags': { $get: { input: {}; output: ListResponse; outputFormat: 'json'; status: 200 } }
  } & {
    '/api/pull': {
      $post: {
        input: { json: PullRequest }
        output: ProgressResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/show': {
      $post: {
        input: { json: ShowRequest }
        output: ShowResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/generate': {
      $post: {
        input: { json: GenerateRequest }
        output: GenerateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/chat': {
      $post: {
        input: { json: ChatRequest }
        output: ChatResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/ps': { $get: { input: {}; output: ProcessResponse; outputFormat: 'json'; status: 200 } }
  } & {
    '/v1/models': {
      $get:
        | { input: {}; output: OpenAIModelListResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: OpenAIErrorResponse; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/v1/chat/completions': {
      $post:
        | {
            input: { json: OpenAIChatCompletionRequest }
            output: OpenAIChatCompletionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OpenAIChatCompletionRequest }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: OpenAIChatCompletionRequest }
            output: OpenAIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: OpenAIChatCompletionRequest }
            output: OpenAIErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: OpenAIChatCompletionRequest }
            output: OpenAIErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: OpenAIChatCompletionRequest }
            output: OpenAIErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: OpenAIChatCompletionRequest }
            output: OpenAIErrorResponse
            outputFormat: 'json'
            status: 502
          }
    }
  },
  '/'
>
export default routes
