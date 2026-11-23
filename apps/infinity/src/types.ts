type ModelInfo = {
  id: string
  stats: { [x: string]: unknown }
  object?: 'model' | undefined
  owned_by?: 'infinity' | undefined
  created?: number | undefined
  backend?: string | undefined
  capabilities?: string[] | undefined
}
type OpenAIModelInfo = { data: ModelInfo[]; object?: string | undefined }
type EmbeddingEncodingFormat = 'float' | 'base64'
type OpenAIEmbeddingInputText = {
  model?: string | undefined
  encoding_format?: EmbeddingEncodingFormat | undefined
  user?: string | ({ [x: string]: unknown } | null) | undefined
  dimensions?: number | undefined
  input: string[] | string
  modality?: 'text' | undefined
}
type OpenAIEmbeddingInputAudio = {
  model?: string | undefined
  encoding_format?: EmbeddingEncodingFormat | undefined
  user?: string | ({ [x: string]: unknown } | null) | undefined
  dimensions?: number | undefined
  input: (string | string)[] | string | string
  modality?: 'audio' | undefined
}
type OpenAIEmbeddingInputImage = {
  model?: string | undefined
  encoding_format?: EmbeddingEncodingFormat | undefined
  user?: string | ({ [x: string]: unknown } | null) | undefined
  dimensions?: number | undefined
  input: (string | string)[] | string | string
  modality?: 'image' | undefined
}
type MultiModalOpenAIEmbedding =
  | OpenAIEmbeddingInputText
  | OpenAIEmbeddingInputAudio
  | OpenAIEmbeddingInputImage
type EmbeddingObject = {
  object?: 'embedding' | undefined
  embedding: number[] | File | number[][]
  index: number
}
type Usage = { prompt_tokens: number; total_tokens: number }
type OpenAIEmbeddingResult = {
  object?: 'list' | undefined
  data: EmbeddingObject[]
  model: string
  usage: Usage
  id?: string | undefined
  created?: number | undefined
}
type ValidationError = { loc: (string | number)[]; msg: string; type: string }
type HTTPValidationError = { detail?: ValidationError[] | undefined }
type RerankInput = {
  query: string
  documents: string[]
  return_documents?: boolean | undefined
  raw_scores?: boolean | undefined
  model?: string | undefined
  top_n?: number | ({ [x: string]: unknown } | null) | undefined
}
type ReRankObject = {
  relevance_score: number
  index: number
  document?: string | ({ [x: string]: unknown } | null) | undefined
}
type ReRankResult = {
  object?: 'rerank' | undefined
  results: ReRankObject[]
  model: string
  usage: Usage
  id?: string | undefined
  created?: number | undefined
}
type ClassifyInput = {
  input: string[]
  model?: string | undefined
  raw_scores?: boolean | undefined
}
type ClassifyObject = { score: number; label: string }
type ClassifyResult = {
  object?: 'classify' | undefined
  data: ClassifyObject[][]
  model: string
  usage: Usage
  id?: string | undefined
  created?: number | undefined
}
type ImageEmbeddingInput = {
  input: (string | string)[] | string | string
  model?: string | undefined
  encoding_format?: EmbeddingEncodingFormat | undefined
  user?: string | ({ [x: string]: unknown } | null) | undefined
}
type AudioEmbeddingInput = {
  input: (string | string)[] | string | string
  model?: string | undefined
  encoding_format?: EmbeddingEncodingFormat | undefined
  user?: string | ({ [x: string]: unknown } | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/health': {
      $get: { input: {}; output: { [x: string]: number }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/models': { $get: { input: {}; output: OpenAIModelInfo; outputFormat: 'json'; status: 200 } }
  } & {
    '/embeddings': {
      $post:
        | {
            input: { json: MultiModalOpenAIEmbedding }
            output: OpenAIEmbeddingResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MultiModalOpenAIEmbedding }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/rerank': {
      $post:
        | { input: { json: RerankInput }; output: ReRankResult; outputFormat: 'json'; status: 200 }
        | {
            input: { json: RerankInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/classify': {
      $post:
        | {
            input: { json: ClassifyInput }
            output: ClassifyResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ClassifyInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/embeddings_image': {
      $post:
        | {
            input: { json: ImageEmbeddingInput }
            output: OpenAIEmbeddingResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ImageEmbeddingInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/embeddings_audio': {
      $post:
        | {
            input: { json: AudioEmbeddingInput }
            output: OpenAIEmbeddingResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AudioEmbeddingInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/metrics': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
