type CreateAnswerRequest = {
  documents?: (string[] | null) | undefined
  examples: string[][]
  examples_context: string
  expand?: ({ [x: string]: unknown }[] | null) | undefined
  file?: (string | null) | undefined
  logit_bias?: ({ [x: string]: unknown } | null) | undefined
  logprobs?: (number | null) | undefined
  max_rerank?: (number | null) | undefined
  max_tokens?: (number | null) | undefined
  model: string
  n?: (number | null) | undefined
  question: string
  return_metadata?: (boolean | null) | undefined
  return_prompt?: (boolean | null) | undefined
  search_model?: (string | null) | undefined
  stop?: string | string[] | undefined
  temperature?: (number | null) | undefined
  user?: string | undefined
}
type CreateAnswerResponse = {
  answers?: string[] | undefined
  completion?: string | undefined
  model?: string | undefined
  object?: string | undefined
  search_model?: string | undefined
  selected_documents?: { document?: number | undefined; text?: string | undefined }[] | undefined
}
type CreateTranscriptionRequest = {
  file: File
  language?: string | undefined
  model: string
  prompt?: string | undefined
  response_format?: string | undefined
  temperature?: number | undefined
}
type CreateTranscriptionResponse = { text: string }
type CreateTranslationRequest = {
  file: File
  model: string
  prompt?: string | undefined
  response_format?: string | undefined
  temperature?: number | undefined
}
type CreateTranslationResponse = { text: string }
type ChatCompletionRequestMessage = {
  content: string
  name?: string | undefined
  role: 'system' | 'user' | 'assistant'
}
type CreateChatCompletionRequest = {
  frequency_penalty?: (number | null) | undefined
  logit_bias?: ({ [x: string]: unknown } | null) | undefined
  max_tokens?: number | undefined
  messages: ChatCompletionRequestMessage[]
  model: string
  n?: (number | null) | undefined
  presence_penalty?: (number | null) | undefined
  stop?: (string | null) | string[] | undefined
  stream?: (boolean | null) | undefined
  temperature?: (number | null) | undefined
  top_p?: (number | null) | undefined
  user?: string | undefined
}
type ChatCompletionResponseMessage = { content: string; role: 'system' | 'user' | 'assistant' }
type CreateChatCompletionResponse = {
  choices: {
    finish_reason?: string | undefined
    index?: number | undefined
    message?: ChatCompletionResponseMessage | undefined
  }[]
  created: number
  id: string
  model: string
  object: string
  usage?: { completion_tokens: number; prompt_tokens: number; total_tokens: number } | undefined
}
type CreateClassificationRequest = {
  examples?: (string[][] | null) | undefined
  expand?: ({ [x: string]: unknown }[] | null) | undefined
  file?: (string | null) | undefined
  labels?: (string[] | null) | undefined
  logit_bias?: ({ [x: string]: unknown } | null) | undefined
  logprobs?: (number | null) | undefined
  max_examples?: (number | null) | undefined
  model: string
  query: string
  return_metadata?: (boolean | null) | undefined
  return_prompt?: (boolean | null) | undefined
  search_model?: (string | null) | undefined
  temperature?: (number | null) | undefined
  user?: string | undefined
}
type CreateClassificationResponse = {
  completion?: string | undefined
  label?: string | undefined
  model?: string | undefined
  object?: string | undefined
  search_model?: string | undefined
  selected_examples?:
    | { document?: number | undefined; label?: string | undefined; text?: string | undefined }[]
    | undefined
}
type CreateCompletionRequest = {
  best_of?: (number | null) | undefined
  echo?: (boolean | null) | undefined
  frequency_penalty?: (number | null) | undefined
  logit_bias?: ({ [x: string]: unknown } | null) | undefined
  logprobs?: (number | null) | undefined
  max_tokens?: (number | null) | undefined
  model: string
  n?: (number | null) | undefined
  presence_penalty?: (number | null) | undefined
  prompt?: string | string[] | number[] | number[][] | undefined
  stop?: (string | null) | string[] | undefined
  stream?: (boolean | null) | undefined
  suffix?: (string | null) | undefined
  temperature?: (number | null) | undefined
  top_p?: (number | null) | undefined
  user?: string | undefined
}
type CreateCompletionResponse = {
  choices: {
    finish_reason?: string | undefined
    index?: number | undefined
    logprobs?:
      | ({
          text_offset?: number[] | undefined
          token_logprobs?: number[] | undefined
          tokens?: string[] | undefined
          top_logprobs?: { [x: string]: unknown }[] | undefined
        } | null)
      | undefined
    text?: string | undefined
  }[]
  created: number
  id: string
  model: string
  object: string
  usage?: { completion_tokens: number; prompt_tokens: number; total_tokens: number } | undefined
}
type CreateEditRequest = {
  input?: (string | null) | undefined
  instruction: string
  model: string
  n?: (number | null) | undefined
  temperature?: (number | null) | undefined
  top_p?: (number | null) | undefined
}
type CreateEditResponse = {
  choices: {
    finish_reason?: string | undefined
    index?: number | undefined
    logprobs?:
      | ({
          text_offset?: number[] | undefined
          token_logprobs?: number[] | undefined
          tokens?: string[] | undefined
          top_logprobs?: { [x: string]: unknown }[] | undefined
        } | null)
      | undefined
    text?: string | undefined
  }[]
  created: number
  object: string
  usage: { completion_tokens: number; prompt_tokens: number; total_tokens: number }
}
type CreateEmbeddingRequest = {
  input: string | string[] | number[] | number[][]
  model: string
  user?: string | undefined
}
type CreateEmbeddingResponse = {
  data: { embedding: number[]; index: number; object: string }[]
  model: string
  object: string
  usage: { prompt_tokens: number; total_tokens: number }
}
type Engine = { created: number | null; id: string; object: string; ready: boolean }
type ListEnginesResponse = { data: Engine[]; object: string }
type CreateSearchRequest = {
  documents?: (string[] | null) | undefined
  file?: (string | null) | undefined
  max_rerank?: (number | null) | undefined
  query: string
  return_metadata?: (boolean | null) | undefined
  user?: string | undefined
}
type CreateSearchResponse = {
  data?:
    | { document?: number | undefined; object?: string | undefined; score?: number | undefined }[]
    | undefined
  model?: string | undefined
  object?: string | undefined
}
type OpenAIFile = {
  bytes: number
  created_at: number
  filename: string
  id: string
  object: string
  purpose: string
  status?: string | undefined
  status_details?: ({ [x: string]: unknown } | null) | undefined
}
type ListFilesResponse = { data: OpenAIFile[]; object: string }
type CreateFileRequest = { file: File; purpose: string }
type DeleteFileResponse = { deleted: boolean; id: string; object: string }
type FineTuneEvent = { created_at: number; level: string; message: string; object: string }
type FineTune = {
  created_at: number
  events?: FineTuneEvent[] | undefined
  fine_tuned_model: string | null
  hyperparams: { [x: string]: unknown }
  id: string
  model: string
  object: string
  organization_id: string
  result_files: OpenAIFile[]
  status: string
  training_files: OpenAIFile[]
  updated_at: number
  validation_files: OpenAIFile[]
}
type ListFineTunesResponse = { data: FineTune[]; object: string }
type CreateFineTuneRequest = {
  batch_size?: (number | null) | undefined
  classification_betas?: (number[] | null) | undefined
  classification_n_classes?: (number | null) | undefined
  classification_positive_class?: (string | null) | undefined
  compute_classification_metrics?: (boolean | null) | undefined
  learning_rate_multiplier?: (number | null) | undefined
  model?: (string | null) | undefined
  n_epochs?: (number | null) | undefined
  prompt_loss_weight?: (number | null) | undefined
  suffix?: (string | null) | undefined
  training_file: string
  validation_file?: (string | null) | undefined
}
type ListFineTuneEventsResponse = { data: FineTuneEvent[]; object: string }
type CreateImageEditRequest = {
  image: File
  mask?: File | undefined
  n?: (number | null) | undefined
  prompt: string
  response_format?: 'url' | 'b64_json' | undefined
  size?: '256x256' | '512x512' | '1024x1024' | undefined
  user?: string | undefined
}
type ImagesResponse = {
  created: number
  data: { b64_json?: string | undefined; url?: string | undefined }[]
}
type CreateImageRequest = {
  n?: (number | null) | undefined
  prompt: string
  response_format?: 'url' | 'b64_json' | undefined
  size?: '256x256' | '512x512' | '1024x1024' | undefined
  user?: string | undefined
}
type CreateImageVariationRequest = {
  image: File
  n?: (number | null) | undefined
  response_format?: 'url' | 'b64_json' | undefined
  size?: '256x256' | '512x512' | '1024x1024' | undefined
  user?: string | undefined
}
type Model = { created: number; id: string; object: string; owned_by: string }
type ListModelsResponse = { data: Model[]; object: string }
type DeleteModelResponse = { deleted: boolean; id: string; object: string }
type CreateModerationRequest = { input: string | string[]; model?: string | undefined }
type CreateModerationResponse = {
  id: string
  model: string
  results: {
    categories: {
      hate: boolean
      'hate/threatening': boolean
      'self-harm': boolean
      sexual: boolean
      'sexual/minors': boolean
      violence: boolean
      'violence/graphic': boolean
    }
    category_scores: {
      hate: number
      'hate/threatening': number
      'self-harm': number
      sexual: number
      'sexual/minors': number
      violence: number
      'violence/graphic': number
    }
    flagged: boolean
  }[]
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/answers': {
      $post: {
        input: { json: CreateAnswerRequest }
        output: CreateAnswerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/audio/transcriptions': {
      $post: {
        input: { form: CreateTranscriptionRequest }
        output: CreateTranscriptionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/audio/translations': {
      $post: {
        input: { form: CreateTranslationRequest }
        output: CreateTranslationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/chat/completions': {
      $post: {
        input: { json: CreateChatCompletionRequest }
        output: CreateChatCompletionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/classifications': {
      $post: {
        input: { json: CreateClassificationRequest }
        output: CreateClassificationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/completions': {
      $post: {
        input: { json: CreateCompletionRequest }
        output: CreateCompletionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/edits': {
      $post: {
        input: { json: CreateEditRequest }
        output: CreateEditResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/embeddings': {
      $post: {
        input: { json: CreateEmbeddingRequest }
        output: CreateEmbeddingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/engines': {
      $get: { input: {}; output: ListEnginesResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/engines/:engine_id': {
      $get: {
        input: { param: { engine_id: string } }
        output: Engine
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/engines/:engine_id/search': {
      $post: {
        input: { param: { engine_id: string } } & { json: CreateSearchRequest }
        output: CreateSearchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/files': {
      $get: { input: {}; output: ListFilesResponse; outputFormat: 'json'; status: 200 }
      $post: {
        input: { form: CreateFileRequest }
        output: OpenAIFile
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/files/:file_id': {
      $delete: {
        input: { param: { file_id: string } }
        output: DeleteFileResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { file_id: string } }
        output: OpenAIFile
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/files/:file_id/content': {
      $get: {
        input: { param: { file_id: string } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/fine-tunes': {
      $get: { input: {}; output: ListFineTunesResponse; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: CreateFineTuneRequest }
        output: FineTune
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/fine-tunes/:fine_tune_id': {
      $get: {
        input: { param: { fine_tune_id: string } }
        output: FineTune
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/fine-tunes/:fine_tune_id/cancel': {
      $post: {
        input: { param: { fine_tune_id: string } }
        output: FineTune
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/fine-tunes/:fine_tune_id/events': {
      $get: {
        input: { param: { fine_tune_id: string } } & { query: { stream?: boolean | undefined } }
        output: ListFineTuneEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/images/edits': {
      $post: {
        input: { form: CreateImageEditRequest }
        output: ImagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/images/generations': {
      $post: {
        input: { json: CreateImageRequest }
        output: ImagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/images/variations': {
      $post: {
        input: { form: CreateImageVariationRequest }
        output: ImagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/models': {
      $get: { input: {}; output: ListModelsResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/models/:model': {
      $delete: {
        input: { param: { model: string } }
        output: DeleteModelResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { model: string } }
        output: Model
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/moderations': {
      $post: {
        input: { json: CreateModerationRequest }
        output: CreateModerationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
