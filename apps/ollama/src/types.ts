type SystemOneContent = string | { [x: string]: unknown } | { [x: string]: unknown }[]
type SystemOneChoiceQuestion = {
  type: 'choice'
  instructions: SystemOneContent
  criteria: { [x: string]: string | null }
}
type SystemOneNoulQuestion = {
  type: 'noul'
  instructions: SystemOneContent
  criteria?: { false?: string | undefined; true?: string | undefined } | undefined
}
type SystemOneScoreQuestion = { type: 'score'; instructions: SystemOneContent; criteria: string[] }
type SystemOneRequest = {
  model: string
  state: SystemOneContent
  images?: string[] | undefined
  questions: {
    [x: string]: SystemOneChoiceQuestion | SystemOneNoulQuestion | SystemOneScoreQuestion
  }
  keep_alive?: string | number | undefined
}
type SystemOneProbabilities = { [x: string]: number }
type SystemOneConfidence = number
type SystemOneChoiceAnswer = {
  type: 'choice'
  choice: string
  probabilities: SystemOneProbabilities
  confidence: SystemOneConfidence
}
type SystemOneNoulAnswer = { type: 'noul'; noul: number }
type SystemOneScoreAnswer = {
  type: 'score'
  score: number
  legend: { [x: string]: string }
  probabilities: SystemOneProbabilities
  confidence: SystemOneConfidence
}
type SystemOneResponse = {
  model: string
  answers: { [x: string]: SystemOneChoiceAnswer | SystemOneNoulAnswer | SystemOneScoreAnswer }
  usage: { input_tokens: number; output_tokens: number }
}
type ErrorResponse = { error?: string | undefined }
type ThinkValue = boolean | string | ({ [x: string]: unknown } | null)
type ModelOptions = {
  seed?: number | undefined
  temperature?: number | undefined
  top_k?: number | undefined
  top_p?: number | undefined
  min_p?: number | undefined
  stop?: string | string[] | undefined
  num_ctx?: number | undefined
  num_predict?: number | undefined
}
type GenerateRequest = {
  model: string
  prompt?: string | undefined
  suffix?: string | undefined
  images?: string[] | undefined
  format?: string | { [x: string]: unknown } | undefined
  system?: string | undefined
  stream?: boolean | undefined
  think?: ThinkValue | undefined
  raw?: boolean | undefined
  keep_alive?: string | number | undefined
  options?: ModelOptions | undefined
  logprobs?: boolean | undefined
  top_logprobs?: number | undefined
}
type TokenLogprob = {
  token?: string | undefined
  logprob?: number | undefined
  bytes?: number[] | undefined
}
type Logprob = {
  token?: string | undefined
  logprob?: number | undefined
  bytes?: number[] | undefined
  top_logprobs?: TokenLogprob[] | undefined
}
type GenerateResponse = {
  model?: string | undefined
  created_at?: string | undefined
  response?: string | undefined
  thinking?: string | undefined
  done?: boolean | undefined
  done_reason?: string | undefined
  total_duration?: number | undefined
  load_duration?: number | undefined
  prompt_eval_count?: number | undefined
  prompt_eval_cached_count?: number | undefined
  prompt_eval_duration?: number | undefined
  eval_count?: number | undefined
  eval_duration?: number | undefined
  logprobs?: Logprob[] | undefined
}
type GenerateStreamEvent = {
  model?: string | undefined
  created_at?: string | undefined
  response?: string | undefined
  thinking?: string | undefined
  done?: boolean | undefined
  done_reason?: string | undefined
  total_duration?: number | undefined
  load_duration?: number | undefined
  prompt_eval_count?: number | undefined
  prompt_eval_cached_count?: number | undefined
  prompt_eval_duration?: number | undefined
  eval_count?: number | undefined
  eval_duration?: number | undefined
}
type ToolCall = {
  function?:
    | {
        name: string
        description?: string | undefined
        arguments?: { [x: string]: unknown } | undefined
      }
    | undefined
}
type ChatMessage = {
  role: 'system' | 'user' | 'assistant' | 'tool'
  content: string
  images?: string[] | undefined
  tool_calls?: ToolCall[] | undefined
}
type ToolDefinition = {
  type: 'function'
  function: { name: string; description?: string | undefined; parameters: { [x: string]: unknown } }
}
type ChatRequest = {
  model: string
  messages: ChatMessage[]
  tools?: ToolDefinition[] | undefined
  format?: 'json' | { [x: string]: unknown } | undefined
  options?: ModelOptions | undefined
  stream?: boolean | undefined
  think?: ThinkValue | undefined
  keep_alive?: string | number | undefined
  logprobs?: boolean | undefined
  top_logprobs?: number | undefined
}
type ChatResponse = {
  model?: string | undefined
  created_at?: string | undefined
  message?:
    | {
        role?: 'assistant' | undefined
        content?: string | undefined
        thinking?: string | undefined
        tool_calls?: ToolCall[] | undefined
        images?: string[] | undefined
      }
    | undefined
  done?: boolean | undefined
  done_reason?: string | undefined
  total_duration?: number | undefined
  load_duration?: number | undefined
  prompt_eval_count?: number | undefined
  prompt_eval_cached_count?: number | undefined
  prompt_eval_duration?: number | undefined
  eval_count?: number | undefined
  eval_duration?: number | undefined
  logprobs?: Logprob[] | undefined
}
type ChatStreamEvent = {
  model?: string | undefined
  created_at?: string | undefined
  message?:
    | {
        role?: string | undefined
        content?: string | undefined
        thinking?: string | undefined
        tool_calls?: ToolCall[] | undefined
        images?: string[] | undefined
      }
    | undefined
  done?: boolean | undefined
}
type EmbedRequest = {
  model: string
  input: string | string[]
  truncate?: boolean | undefined
  dimensions?: number | undefined
  keep_alive?: string | undefined
  options?: ModelOptions | undefined
}
type EmbedResponse = {
  model?: string | undefined
  embeddings?: number[][] | undefined
  total_duration?: number | undefined
  load_duration?: number | undefined
  prompt_eval_count?: number | undefined
}
type ModelSummary = {
  name?: string | undefined
  model?: string | undefined
  remote_model?: string | undefined
  remote_host?: string | undefined
  modified_at?: string | undefined
  size?: number | undefined
  digest?: string | undefined
  details?:
    | {
        format?: string | undefined
        family?: string | undefined
        families?: string[] | undefined
        parameter_size?: string | undefined
        quantization_level?: string | undefined
      }
    | undefined
}
type ListResponse = { models?: ModelSummary[] | undefined }
type Ps = {
  name?: string | undefined
  model?: string | undefined
  size?: number | undefined
  digest?: string | undefined
  details?: { [x: string]: unknown } | undefined
  expires_at?: string | undefined
  size_vram?: number | undefined
  context_length?: number | undefined
}
type PsResponse = { models?: Ps[] | undefined }
type ShowRequest = { model: string; verbose?: boolean | undefined }
type Thinking = { values: (boolean | string)[]; default: boolean | string }
type ShowResponse = {
  thinking?: Thinking | undefined
  parameters?: string | undefined
  license?: string | undefined
  modified_at?: string | undefined
  details?: { [x: string]: unknown } | undefined
  template?: string | undefined
  renderer?: string | undefined
  parser?: string | undefined
  template_source?: string | undefined
  capabilities?: string[] | undefined
  model_info?: { [x: string]: unknown } | undefined
}
type CreateRequest = {
  model: string
  from?: string | undefined
  template?: string | undefined
  renderer?: string | undefined
  parser?: string | undefined
  files?: { [x: string]: string } | undefined
  draft_files?: { [x: string]: string } | undefined
  license?: string | string[] | undefined
  system?: string | undefined
  parameters?: { [x: string]: unknown } | undefined
  messages?: ChatMessage[] | undefined
  quantize?: string | undefined
  draft_quantize?: string | undefined
  requires?: string | undefined
  capabilities?: string[] | undefined
  stream?: boolean | undefined
}
type StatusResponse = { status?: string | undefined }
type StatusEvent = {
  status?: string | undefined
  digest?: string | undefined
  total?: number | undefined
  completed?: number | undefined
}
type CopyRequest = { source: string; destination: string }
type PullRequest = { model: string; insecure?: boolean | undefined; stream?: boolean | undefined }
type PushRequest = { model: string; insecure?: boolean | undefined; stream?: boolean | undefined }
type DeleteRequest = { model: string }
type VersionResponse = { version?: string | undefined }
type UsageGroup = {
  request_count: number
  usage_usd?: number | undefined
  input_tokens?: number | undefined
  cached_input_tokens?: number | undefined
  output_tokens?: number | undefined
  model: string
}
type UsageMetrics = {
  request_count: number
  usage_usd?: number | undefined
  input_tokens?: number | undefined
  cached_input_tokens?: number | undefined
  output_tokens?: number | undefined
}
type UsageSummary = {
  request_count: number
  usage_usd?: number | undefined
  input_tokens?: number | undefined
  cached_input_tokens?: number | undefined
  output_tokens?: number | undefined
  groups?: UsageGroup[] | undefined
  remainder?: UsageMetrics | undefined
}
type UsageBucket = {
  request_count: number
  usage_usd?: number | undefined
  input_tokens?: number | undefined
  cached_input_tokens?: number | undefined
  output_tokens?: number | undefined
  groups?: UsageGroup[] | undefined
  remainder?: UsageMetrics | undefined
  from: string
  until: string
  partial?: boolean | undefined
}
type UsageResponse = {
  range: '24h' | '7d' | '30d'
  scope: 'self' | 'team'
  granularity: 'hour' | 'day'
  group_by?: 'model' | undefined
  from: string
  until: string
  totals: UsageSummary
  buckets: UsageBucket[]
}
type IncludedBalance = {
  balance_usd: number
  allowance_usd: number
  period: { from: string; until: string }
}
type LegacyBalanceLimit = { remaining_percent: number; resets_at: string }
type LegacyIncludedBalance = { session: LegacyBalanceLimit; weekly: LegacyBalanceLimit }
type BalanceResponse = {
  included: IncludedBalance | LegacyIncludedBalance
  purchased: { balance_usd: number }
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/systemone': {
      $post:
        | {
            input: { json: SystemOneRequest }
            output: SystemOneResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SystemOneRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SystemOneRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SystemOneRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: SystemOneRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SystemOneRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: SystemOneRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/generate': {
      $post:
        | {
            input: { json: GenerateRequest }
            output: GenerateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GenerateRequest }
            output: GenerateStreamEvent
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/chat': {
      $post:
        | { input: { json: ChatRequest }; output: ChatResponse; outputFormat: 'json'; status: 200 }
        | {
            input: { json: ChatRequest }
            output: ChatStreamEvent
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/embed': {
      $post: {
        input: { json: EmbedRequest }
        output: EmbedResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/tags': { $get: { input: {}; output: ListResponse; outputFormat: 'json'; status: 200 } }
  } & {
    '/api/ps': { $get: { input: {}; output: PsResponse; outputFormat: 'json'; status: 200 } }
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
    '/api/create': {
      $post:
        | {
            input: { json: CreateRequest }
            output: StatusResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: CreateRequest }; output: StatusEvent; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/blobs/:digest': {
      $head:
        | { input: { param: { digest: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { digest: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { digest: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { digest: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { digest: string } } & { json: File }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { digest: string } } & { json: File }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { digest: string } } & { json: File }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { digest: string } } & { json: File }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/copy': {
      $post:
        | {
            input: { json: CopyRequest }
            output: StatusResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: CopyRequest }; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: { json: CopyRequest }; output: ErrorResponse; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/api/pull': {
      $post:
        | {
            input: { json: PullRequest }
            output: StatusResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: PullRequest }; output: StatusEvent; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/push': {
      $post:
        | {
            input: { json: PushRequest }
            output: StatusResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: PushRequest }; output: StatusEvent; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/delete': {
      $delete: { input: { json: DeleteRequest }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/version': {
      $get: { input: {}; output: VersionResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/usage': {
      $get:
        | {
            input: {
              query: {
                range?: '24h' | '7d' | '30d' | undefined
                scope?: 'self' | 'team' | undefined
                group_by?: 'model' | undefined
              }
            }
            output: UsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                range?: '24h' | '7d' | '30d' | undefined
                scope?: 'self' | 'team' | undefined
                group_by?: 'model' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                range?: '24h' | '7d' | '30d' | undefined
                scope?: 'self' | 'team' | undefined
                group_by?: 'model' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                range?: '24h' | '7d' | '30d' | undefined
                scope?: 'self' | 'team' | undefined
                group_by?: 'model' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                range?: '24h' | '7d' | '30d' | undefined
                scope?: 'self' | 'team' | undefined
                group_by?: 'model' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                range?: '24h' | '7d' | '30d' | undefined
                scope?: 'self' | 'team' | undefined
                group_by?: 'model' | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/balance': {
      $get:
        | { input: {}; output: BalanceResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 429 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 503 }
    }
  },
  '/'
>
export default routes
