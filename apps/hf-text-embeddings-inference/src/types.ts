type InputIds = number[] | number[][]
type DecodeRequest = { ids: InputIds; skip_special_tokens?: boolean | undefined }
type DecodeResponse = string[]
type ErrorType = 'Unhealthy' | 'Backend' | 'Overloaded' | 'Validation' | 'Tokenizer' | 'Empty'
type ErrorResponse = { error: string; error_type: ErrorType }
type InputType = string | number[]
type Input = InputType | InputType[]
type EmbedRequest = {
  dimensions?: (number | null) | undefined
  inputs: Input
  normalize?: boolean | undefined
  prompt_name?: (string | null) | undefined
  truncate?: (boolean | null) | undefined
  truncation_direction?: {} | undefined
}
type EmbedResponse = number[][]
type EmbedAllRequest = {
  inputs: Input
  prompt_name?: (string | null) | undefined
  truncate?: (boolean | null) | undefined
  truncation_direction?: {} | undefined
}
type EmbedAllResponse = number[][][]
type EmbedSparseRequest = {
  inputs: Input
  prompt_name?: (string | null) | undefined
  truncate?: (boolean | null) | undefined
  truncation_direction?: {} | undefined
}
type SparseValue = { index: number; value: number }
type EmbedSparseResponse = SparseValue[][]
type ClassifierModel = { id2label: { [x: string]: string }; label2id: { [x: string]: number } }
type EmbeddingModel = { pooling: string }
type ModelType =
  | { classifier: ClassifierModel }
  | { embedding: EmbeddingModel }
  | { reranker: ClassifierModel }
type Info = {
  auto_truncate: boolean
  docker_label?: (string | null) | undefined
  max_batch_requests?: (number | null) | undefined
  max_batch_tokens: number
  max_client_batch_size: number
  max_concurrent_requests: number
  max_input_length: number
  model_dtype: string
  model_id: string
  model_sha?: (string | null) | undefined
  model_type: ModelType
  served_model_name: string
  sha?: (string | null) | undefined
  tokenization_workers: number
  version: string
}
type PredictInput = string | string[] | (string[] | string[])[]
type PredictRequest = {
  inputs: PredictInput
  raw_scores?: boolean | undefined
  truncate?: (boolean | null) | undefined
  truncation_direction?: {} | undefined
}
type Prediction = { label: string; score: number }
type PredictResponse = Prediction[] | Prediction[][]
type RerankRequest = {
  query: string
  raw_scores?: boolean | undefined
  return_text?: boolean | undefined
  texts: string[]
  truncate?: (boolean | null) | undefined
  truncation_direction?: {} | undefined
}
type Rank = { index: number; score: number; text?: (string | null) | undefined }
type RerankResponse = Rank[]
type SimilarityInput = { sentences: string[]; source_sentence: string }
type SimilarityRequest = {
  inputs: SimilarityInput
  parameters?:
    | {
        prompt_name?: (string | null) | undefined
        truncate?: (boolean | null) | undefined
        truncation_direction?: {} | undefined
      }
    | undefined
}
type SimilarityResponse = number[]
type TokenizeInput = string | string[]
type TokenizeRequest = {
  add_special_tokens?: boolean | undefined
  inputs: TokenizeInput
  prompt_name?: (string | null) | undefined
}
type SimpleToken = {
  id: number
  special: boolean
  start?: (number | null) | undefined
  stop?: (number | null) | undefined
  text: string
}
type TokenizeResponse = SimpleToken[][]
type OpenAICompatRequest = {
  dimensions?: (number | null) | undefined
  encoding_format?: {} | undefined
  input: Input
  model?: (string | null) | undefined
  user?: (string | null) | undefined
}
type Embedding = number[] | string
type OpenAICompatEmbedding = { embedding: Embedding; index: number; object: string }
type OpenAICompatUsage = { prompt_tokens: number; total_tokens: number }
type OpenAICompatResponse = {
  data: OpenAICompatEmbedding[]
  model: string
  object: string
  usage: OpenAICompatUsage
}
type OpenAICompatErrorResponse = { code: number; error_type: ErrorType; message: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/decode': {
      $post:
        | {
            input: { json: DecodeRequest }
            output: DecodeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DecodeRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DecodeRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: DecodeRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/embed': {
      $post:
        | {
            input: { json: EmbedRequest }
            output: EmbedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EmbedRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: EmbedRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: EmbedRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: EmbedRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { json: EmbedRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/embed_all': {
      $post:
        | {
            input: { json: EmbedAllRequest }
            output: EmbedAllResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EmbedAllRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: EmbedAllRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: EmbedAllRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: EmbedAllRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { json: EmbedAllRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/embed_sparse': {
      $post:
        | {
            input: { json: EmbedSparseRequest }
            output: EmbedSparseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EmbedSparseRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: EmbedSparseRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: EmbedSparseRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: EmbedSparseRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { json: EmbedSparseRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/health': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 503 }
    }
  } & { '/info': { $get: { input: {}; output: Info; outputFormat: 'json'; status: 200 } } } & {
    '/metrics': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } }
  } & {
    '/predict': {
      $post:
        | {
            input: { json: PredictRequest }
            output: PredictResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PredictRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PredictRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: PredictRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: PredictRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { json: PredictRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/rerank': {
      $post:
        | {
            input: { json: RerankRequest }
            output: RerankResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RerankRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RerankRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: RerankRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: RerankRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { json: RerankRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/similarity': {
      $post:
        | {
            input: { json: SimilarityRequest }
            output: SimilarityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SimilarityRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SimilarityRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: SimilarityRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: SimilarityRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { json: SimilarityRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/tokenize': {
      $post:
        | {
            input: { json: TokenizeRequest }
            output: TokenizeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TokenizeRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TokenizeRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: TokenizeRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/embeddings': {
      $post:
        | {
            input: { json: OpenAICompatRequest }
            output: OpenAICompatResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OpenAICompatRequest }
            output: OpenAICompatErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: OpenAICompatRequest }
            output: OpenAICompatErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: OpenAICompatRequest }
            output: OpenAICompatErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: OpenAICompatRequest }
            output: OpenAICompatErrorResponse
            outputFormat: 'json'
            status: 424
          }
        | {
            input: { json: OpenAICompatRequest }
            output: OpenAICompatErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  },
  '/'
>
export default routes
