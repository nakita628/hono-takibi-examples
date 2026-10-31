import { createRoute, z } from '@hono/zod-openapi'

const ClassifierModelSchema = z
  .object({
    id2label: z.record(z.string(), z.string()).openapi({ example: { '0': 'LABEL' } }),
    label2id: z.record(z.string(), z.int().min(0)).openapi({ example: { LABEL: 0 } }),
  })
  .openapi({ required: ['id2label', 'label2id'] })
  .openapi('ClassifierModel')

const InputIdsSchema = z
  .xor([z.array(z.int32().min(0)), z.array(z.array(z.int32().min(0)))])
  .openapi('InputIds')

const DecodeRequestSchema = z
  .object({
    ids: InputIdsSchema,
    skip_special_tokens: z.boolean().default(true).exactOptional().openapi({ example: 'true' }),
  })
  .openapi({ required: ['ids'] })
  .openapi('DecodeRequest')

const DecodeResponseSchema = z
  .array(z.string())
  .openapi({ example: ['test'] })
  .openapi('DecodeResponse')

const InputTypeSchema = z.xor([z.string(), z.array(z.int32().min(0))]).openapi('InputType')

const InputSchema = z.xor([InputTypeSchema, z.array(InputTypeSchema)]).openapi('Input')

const TruncationDirectionSchema = z.enum(['Left', 'Right']).openapi('TruncationDirection')

const EmbedAllRequestSchema = z
  .object({
    inputs: InputSchema,
    prompt_name: z
      .string()
      .nullable()
      .default('null')
      .exactOptional()
      .openapi({
        description:
          'The name of the prompt that should be used by for encoding. If not set, no prompt\nwill be applied.\n\nMust be a key in the `sentence-transformers` configuration `prompts` dictionary.\n\nFor example if ``prompt_name`` is "query" and the ``prompts`` is {"query": "query: ", ...},\nthen the sentence "What is the capital of France?" will be encoded as\n"query: What is the capital of France?" because the prompt text will be prepended before\nany text to encode.',
        example: 'null',
      }),
    truncate: z.boolean().nullable().default(false).exactOptional().openapi({ example: 'false' }),
    truncation_direction: TruncationDirectionSchema.default('right').exactOptional(),
  })
  .openapi({ required: ['inputs'] })
  .openapi('EmbedAllRequest')

const EmbedAllResponseSchema = z
  .array(z.array(z.array(z.float32())))
  .openapi({ example: [[[0, 1, 2]]] })
  .openapi('EmbedAllResponse')

const EmbedRequestSchema = z
  .object({
    dimensions: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The number of dimensions that the output embeddings should have. If not set, the original\nshape of the representation will be returned instead.',
        example: 'null',
        default: 'null',
      }),
    inputs: InputSchema,
    normalize: z.boolean().default(true).exactOptional().openapi({ example: 'true' }),
    prompt_name: z
      .string()
      .nullable()
      .default('null')
      .exactOptional()
      .openapi({
        description:
          'The name of the prompt that should be used by for encoding. If not set, no prompt\nwill be applied.\n\nMust be a key in the `sentence-transformers` configuration `prompts` dictionary.\n\nFor example if ``prompt_name`` is "query" and the ``prompts`` is {"query": "query: ", ...},\nthen the sentence "What is the capital of France?" will be encoded as\n"query: What is the capital of France?" because the prompt text will be prepended before\nany text to encode.',
        example: 'null',
      }),
    truncate: z.boolean().nullable().default(false).exactOptional().openapi({ example: 'false' }),
    truncation_direction: TruncationDirectionSchema.default('right').exactOptional(),
  })
  .openapi({ required: ['inputs'] })
  .openapi('EmbedRequest')

const EmbedResponseSchema = z
  .array(z.array(z.float32()))
  .openapi({ example: [[0, 1, 2]] })
  .openapi('EmbedResponse')

const EmbedSparseRequestSchema = z
  .object({
    inputs: InputSchema,
    prompt_name: z
      .string()
      .nullable()
      .default('null')
      .exactOptional()
      .openapi({
        description:
          'The name of the prompt that should be used by for encoding. If not set, no prompt\nwill be applied.\n\nMust be a key in the `sentence-transformers` configuration `prompts` dictionary.\n\nFor example if ``prompt_name`` is "query" and the ``prompts`` is {"query": "query: ", ...},\nthen the sentence "What is the capital of France?" will be encoded as\n"query: What is the capital of France?" because the prompt text will be prepended before\nany text to encode.',
        example: 'null',
      }),
    truncate: z.boolean().nullable().default(false).exactOptional().openapi({ example: 'false' }),
    truncation_direction: TruncationDirectionSchema.default('right').exactOptional(),
  })
  .openapi({ required: ['inputs'] })
  .openapi('EmbedSparseRequest')

const SparseValueSchema = z
  .object({ index: z.int().min(0), value: z.float32() })
  .openapi({ required: ['index', 'value'] })
  .openapi('SparseValue')

const EmbedSparseResponseSchema = z.array(z.array(SparseValueSchema)).openapi('EmbedSparseResponse')

const EmbeddingSchema = z.xor([z.array(z.float32()), z.string()]).openapi('Embedding')

const EmbeddingModelSchema = z
  .object({ pooling: z.string().openapi({ example: 'cls' }) })
  .openapi({ required: ['pooling'] })
  .openapi('EmbeddingModel')

const EncodingFormatSchema = z.enum(['float', 'base64']).openapi('EncodingFormat')

const ErrorTypeSchema = z
  .enum(['Unhealthy', 'Backend', 'Overloaded', 'Validation', 'Tokenizer', 'Empty'])
  .openapi('ErrorType')

const ErrorResponseSchema = z
  .object({ error: z.string(), error_type: ErrorTypeSchema })
  .openapi({ required: ['error', 'error_type'] })
  .openapi('ErrorResponse')

const ModelTypeSchema = z
  .xor([
    z.object({ classifier: ClassifierModelSchema }).openapi({ required: ['classifier'] }),
    z.object({ embedding: EmbeddingModelSchema }).openapi({ required: ['embedding'] }),
    z.object({ reranker: ClassifierModelSchema }).openapi({ required: ['reranker'] }),
  ])
  .openapi('ModelType')

const InfoSchema = z
  .object({
    auto_truncate: z.boolean(),
    docker_label: z.string().nullable().exactOptional().openapi({ example: 'null' }),
    max_batch_requests: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ example: 'null', default: 'null' }),
    max_batch_tokens: z.int().min(0).openapi({ example: '2048' }),
    max_client_batch_size: z.int().min(0).openapi({ example: '32' }),
    max_concurrent_requests: z
      .int()
      .min(0)
      .openapi({ description: 'Router Parameters', example: '128' }),
    max_input_length: z.int().min(0).openapi({ example: '512' }),
    model_dtype: z.string().openapi({ example: 'float16' }),
    model_id: z.string().openapi({ description: 'Model info', example: 'thenlper/gte-base' }),
    model_sha: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'fca14538aa9956a46526bd1d0d11d69e19b5a101' }),
    model_type: ModelTypeSchema,
    served_model_name: z.string().openapi({ example: 'thenlper/gte-base' }),
    sha: z.string().nullable().exactOptional().openapi({ example: 'null' }),
    tokenization_workers: z.int().min(0).openapi({ example: '4' }),
    version: z.string().openapi({ description: 'Router Info', example: '0.5.0' }),
  })
  .openapi({
    required: [
      'model_id',
      'model_dtype',
      'served_model_name',
      'model_type',
      'max_concurrent_requests',
      'max_input_length',
      'max_batch_tokens',
      'max_client_batch_size',
      'auto_truncate',
      'tokenization_workers',
      'version',
    ],
  })
  .openapi('Info')

const OpenAICompatEmbeddingSchema = z
  .object({
    embedding: EmbeddingSchema,
    index: z.int().min(0).openapi({ example: '0' }),
    object: z.string().openapi({ example: 'embedding' }),
  })
  .openapi({ required: ['object', 'embedding', 'index'] })
  .openapi('OpenAICompatEmbedding')

const OpenAICompatErrorResponseSchema = z
  .object({ code: z.int32().min(0), error_type: ErrorTypeSchema, message: z.string() })
  .openapi({ required: ['message', 'code', 'error_type'] })
  .openapi('OpenAICompatErrorResponse')

const OpenAICompatRequestSchema = z
  .object({
    dimensions: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ example: 'null', default: 'null' }),
    encoding_format: EncodingFormatSchema.default('float').exactOptional(),
    input: InputSchema,
    model: z.string().nullable().exactOptional().openapi({ example: 'null' }),
    user: z.string().nullable().exactOptional().openapi({ example: 'null' }),
  })
  .openapi({ required: ['input'] })
  .openapi('OpenAICompatRequest')

const OpenAICompatUsageSchema = z
  .object({
    prompt_tokens: z.int().min(0).openapi({ example: '512' }),
    total_tokens: z.int().min(0).openapi({ example: '512' }),
  })
  .openapi({ required: ['prompt_tokens', 'total_tokens'] })
  .openapi('OpenAICompatUsage')

const OpenAICompatResponseSchema = z
  .object({
    data: z.array(OpenAICompatEmbeddingSchema),
    model: z.string().openapi({ example: 'thenlper/gte-base' }),
    object: z.string().openapi({ example: 'list' }),
    usage: OpenAICompatUsageSchema,
  })
  .openapi({ required: ['object', 'data', 'model', 'usage'] })
  .openapi('OpenAICompatResponse')

const PredictInputSchema = z
  .xor([
    z.string().openapi({ description: 'A single string' }),
    z.array(z.string()).length(2).openapi({ description: 'A pair of strings' }),
    z
      .array(
        z.xor([
          z.array(z.string()).length(1).openapi({ description: 'A single string' }),
          z.array(z.string()).length(2).openapi({ description: 'A pair of strings' }),
        ]),
      )
      .openapi({ description: 'A batch' }),
  ])
  .openapi({
    description:
      'Model input. Can be either a single string, a pair of strings or a batch of mixed single and pairs of strings.',
    example: 'What is Deep Learning?',
  })
  .openapi('PredictInput')

const PredictRequestSchema = z
  .object({
    inputs: PredictInputSchema,
    raw_scores: z.boolean().default(false).exactOptional().openapi({ example: 'false' }),
    truncate: z.boolean().nullable().default(false).exactOptional().openapi({ example: 'false' }),
    truncation_direction: TruncationDirectionSchema.default('right').exactOptional(),
  })
  .openapi({ required: ['inputs'] })
  .openapi('PredictRequest')

const PredictionSchema = z
  .object({
    label: z.string().openapi({ example: 'admiration' }),
    score: z.float32().openapi({ example: '0.5' }),
  })
  .openapi({ required: ['score', 'label'] })
  .openapi('Prediction')

const PredictResponseSchema = z
  .xor([z.array(PredictionSchema), z.array(z.array(PredictionSchema))])
  .openapi('PredictResponse')

const RankSchema = z
  .object({
    index: z.int().min(0).openapi({ example: '0' }),
    score: z.float32().openapi({ example: '1.0' }),
    text: z
      .string()
      .nullable()
      .default('null')
      .exactOptional()
      .openapi({ example: 'Deep Learning is ...' }),
  })
  .openapi({ required: ['index', 'score'] })
  .openapi('Rank')

const RerankRequestSchema = z
  .object({
    query: z.string().openapi({ example: 'What is Deep Learning?' }),
    raw_scores: z.boolean().default(false).exactOptional().openapi({ example: 'false' }),
    return_text: z.boolean().default(false).exactOptional().openapi({ example: 'false' }),
    texts: z.array(z.string()).openapi({ example: ['Deep Learning is ...'] }),
    truncate: z.boolean().nullable().default(false).exactOptional().openapi({ example: 'false' }),
    truncation_direction: TruncationDirectionSchema.default('right').exactOptional(),
  })
  .openapi({ required: ['query', 'texts'] })
  .openapi('RerankRequest')

const RerankResponseSchema = z.array(RankSchema).openapi('RerankResponse')

const SimilarityInputSchema = z
  .object({
    sentences: z
      .array(z.string())
      .openapi({
        description: 'A list of strings which will be compared against the source_sentence.',
        example: ['What is Machine Learning?'],
      }),
    source_sentence: z
      .string()
      .openapi({
        description:
          'The string that you wish to compare the other strings with. This can be a phrase, sentence,\nor longer passage, depending on the model being used.',
        example: 'What is Deep Learning?',
      }),
  })
  .openapi({ required: ['source_sentence', 'sentences'] })
  .openapi('SimilarityInput')

const SimilarityParametersSchema = z
  .object({
    prompt_name: z
      .string()
      .nullable()
      .default('null')
      .exactOptional()
      .openapi({
        description:
          'The name of the prompt that should be used by for encoding. If not set, no prompt\nwill be applied.\n\nMust be a key in the `sentence-transformers` configuration `prompts` dictionary.\n\nFor example if ``prompt_name`` is "query" and the ``prompts`` is {"query": "query: ", ...},\nthen the sentence "What is the capital of France?" will be encoded as\n"query: What is the capital of France?" because the prompt text will be prepended before\nany text to encode.',
        example: 'null',
      }),
    truncate: z.boolean().nullable().default(false).exactOptional().openapi({ example: 'false' }),
    truncation_direction: TruncationDirectionSchema.default('right').exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SimilarityParameters')

const SimilarityRequestSchema = z
  .object({
    inputs: SimilarityInputSchema,
    parameters: SimilarityParametersSchema.nullable().default('null').exactOptional(),
  })
  .openapi({ required: ['inputs'] })
  .openapi('SimilarityRequest')

const SimilarityResponseSchema = z
  .array(z.float32())
  .openapi({ example: [0, 1, 0.5] })
  .openapi('SimilarityResponse')

const SimpleTokenSchema = z
  .object({
    id: z.int32().min(0).openapi({ example: 0 }),
    special: z.boolean().openapi({ example: 'false' }),
    start: z.int().min(0).nullable().exactOptional().openapi({ example: 0 }),
    stop: z.int().min(0).nullable().exactOptional().openapi({ example: 2 }),
    text: z.string().openapi({ example: 'test' }),
  })
  .openapi({ required: ['id', 'text', 'special'] })
  .openapi('SimpleToken')

const TokenizeInputSchema = z.xor([z.string(), z.array(z.string())]).openapi('TokenizeInput')

const TokenizeRequestSchema = z
  .object({
    add_special_tokens: z.boolean().default(true).exactOptional().openapi({ example: 'true' }),
    inputs: TokenizeInputSchema,
    prompt_name: z
      .string()
      .nullable()
      .default('null')
      .exactOptional()
      .openapi({
        description:
          'The name of the prompt that should be used by for encoding. If not set, no prompt\nwill be applied.\n\nMust be a key in the `sentence-transformers` configuration `prompts` dictionary.\n\nFor example if ``prompt_name`` is "query" and the ``prompts`` is {"query": "query: ", ...},\nthen the sentence "What is the capital of France?" will be encoded as\n"query: What is the capital of France?" because the prompt text will be prepended before\nany text to encode.',
        example: 'null',
      }),
  })
  .openapi({ required: ['inputs'] })
  .openapi('TokenizeRequest')

const TokenizeResponseSchema = z
  .array(z.array(SimpleTokenSchema))
  .openapi({ example: [[{ id: 0, special: false, start: 0, stop: 2, text: 'test' }]] })
  .openapi('TokenizeResponse')

export const postDecodeRoute = createRoute({
  method: 'post',
  path: '/decode',
  tags: ['Text Embeddings Inference'],
  summary: 'Decode input ids',
  operationId: 'decode',
  request: {
    body: { content: { 'application/json': { schema: DecodeRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Decoded ids',
      content: { 'application/json': { schema: DecodeResponseSchema } },
    },
    400: {
      description: 'Batch is empty',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Batch is empty', error_type: 'empty' },
        },
      },
    },
    413: {
      description: 'Batch size error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Batch size error', error_type: 'validation' },
        },
      },
    },
    422: {
      description: 'Tokenization error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Tokenization error', error_type: 'tokenizer' },
        },
      },
    },
  },
})

export const postEmbedRoute = createRoute({
  method: 'post',
  path: '/embed',
  tags: ['Text Embeddings Inference'],
  summary: 'Get Embeddings. Returns a 424 status code if the model is not an embedding model.',
  operationId: 'embed',
  request: {
    body: { content: { 'application/json': { schema: EmbedRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Embeddings',
      content: { 'application/json': { schema: EmbedResponseSchema } },
    },
    400: {
      description: 'Batch is empty',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Batch is empty', error_type: 'empty' },
        },
      },
    },
    413: {
      description: 'Batch size error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Batch size error', error_type: 'validation' },
        },
      },
    },
    422: {
      description: 'Tokenization error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Tokenization error', error_type: 'tokenizer' },
        },
      },
    },
    424: {
      description: 'Embedding Error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Inference failed', error_type: 'backend' },
        },
      },
    },
    429: {
      description: 'Model is overloaded',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Model is overloaded', error_type: 'overloaded' },
        },
      },
    },
  },
})

export const postEmbedAllRoute = createRoute({
  method: 'post',
  path: '/embed_all',
  tags: ['Text Embeddings Inference'],
  summary: 'Get all Embeddings without Pooling.',
  description: 'Returns a 424 status code if the model is not an embedding model.',
  operationId: 'embed_all',
  request: {
    body: { content: { 'application/json': { schema: EmbedAllRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Embeddings',
      content: { 'application/json': { schema: EmbedAllResponseSchema } },
    },
    400: {
      description: 'Batch is empty',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Batch is empty', error_type: 'empty' },
        },
      },
    },
    413: {
      description: 'Batch size error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Batch size error', error_type: 'validation' },
        },
      },
    },
    422: {
      description: 'Tokenization error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Tokenization error', error_type: 'tokenizer' },
        },
      },
    },
    424: {
      description: 'Embedding Error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Inference failed', error_type: 'backend' },
        },
      },
    },
    429: {
      description: 'Model is overloaded',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Model is overloaded', error_type: 'overloaded' },
        },
      },
    },
  },
})

export const postEmbedSparseRoute = createRoute({
  method: 'post',
  path: '/embed_sparse',
  tags: ['Text Embeddings Inference'],
  summary:
    'Get Sparse Embeddings. Returns a 424 status code if the model is not an embedding model with SPLADE pooling.',
  operationId: 'embed_sparse',
  request: {
    body: { content: { 'application/json': { schema: EmbedSparseRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Embeddings',
      content: { 'application/json': { schema: EmbedSparseResponseSchema } },
    },
    400: {
      description: 'Batch is empty',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Batch is empty', error_type: 'empty' },
        },
      },
    },
    413: {
      description: 'Batch size error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Batch size error', error_type: 'validation' },
        },
      },
    },
    422: {
      description: 'Tokenization error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Tokenization error', error_type: 'tokenizer' },
        },
      },
    },
    424: {
      description: 'Embedding Error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Inference failed', error_type: 'backend' },
        },
      },
    },
    429: {
      description: 'Model is overloaded',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Model is overloaded', error_type: 'overloaded' },
        },
      },
    },
  },
})

export const getHealthRoute = createRoute({
  method: 'get',
  path: '/health',
  tags: ['Text Embeddings Inference'],
  summary: 'Health check method',
  operationId: 'health',
  responses: {
    200: { description: 'Everything is working fine' },
    503: {
      description: 'Text embeddings Inference is down',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'unhealthy', error_type: 'unhealthy' },
        },
      },
    },
  },
})

export const getInfoRoute = createRoute({
  method: 'get',
  path: '/info',
  tags: ['Text Embeddings Inference'],
  summary: 'Text Embeddings Inference endpoint info',
  operationId: 'get_model_info',
  responses: {
    200: {
      description: 'Served model info',
      content: { 'application/json': { schema: InfoSchema } },
    },
  },
})

export const getMetricsRoute = createRoute({
  method: 'get',
  path: '/metrics',
  tags: ['Text Embeddings Inference'],
  summary: 'Prometheus metrics scrape endpoint',
  operationId: 'metrics',
  responses: {
    200: { description: 'Prometheus Metrics', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const postPredictRoute = createRoute({
  method: 'post',
  path: '/predict',
  tags: ['Text Embeddings Inference'],
  summary:
    'Get Predictions. Returns a 424 status code if the model is not a Sequence Classification model',
  operationId: 'predict',
  request: {
    body: { content: { 'application/json': { schema: PredictRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Predictions',
      content: { 'application/json': { schema: PredictResponseSchema } },
    },
    400: {
      description: 'Batch is empty',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Batch is empty', error_type: 'empty' },
        },
      },
    },
    413: {
      description: 'Batch size error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Batch size error', error_type: 'validation' },
        },
      },
    },
    422: {
      description: 'Tokenization error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Tokenization error', error_type: 'tokenizer' },
        },
      },
    },
    424: {
      description: 'Prediction Error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Inference failed', error_type: 'backend' },
        },
      },
    },
    429: {
      description: 'Model is overloaded',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Model is overloaded', error_type: 'overloaded' },
        },
      },
    },
  },
})

export const postRerankRoute = createRoute({
  method: 'post',
  path: '/rerank',
  tags: ['Text Embeddings Inference'],
  summary:
    'Get Ranks. Returns a 424 status code if the model is not a Sequence Classification model with',
  description: 'a single class.',
  operationId: 'rerank',
  request: {
    body: { content: { 'application/json': { schema: RerankRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Ranks',
      content: { 'application/json': { schema: RerankResponseSchema } },
    },
    400: {
      description: 'Batch is empty',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Batch is empty', error_type: 'empty' },
        },
      },
    },
    413: {
      description: 'Batch size error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Batch size error', error_type: 'validation' },
        },
      },
    },
    422: {
      description: 'Tokenization error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Tokenization error', error_type: 'tokenizer' },
        },
      },
    },
    424: {
      description: 'Rerank Error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Inference failed', error_type: 'backend' },
        },
      },
    },
    429: {
      description: 'Model is overloaded',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Model is overloaded', error_type: 'overloaded' },
        },
      },
    },
  },
})

export const postSimilarityRoute = createRoute({
  method: 'post',
  path: '/similarity',
  tags: ['Text Embeddings Inference'],
  summary:
    'Get Sentence Similarity. Returns a 424 status code if the model is not an embedding model.',
  operationId: 'similarity',
  request: {
    body: { content: { 'application/json': { schema: SimilarityRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Sentence Similarity',
      content: { 'application/json': { schema: SimilarityResponseSchema } },
    },
    400: {
      description: 'Batch is empty',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Batch is empty', error_type: 'empty' },
        },
      },
    },
    413: {
      description: 'Batch size error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Batch size error', error_type: 'validation' },
        },
      },
    },
    422: {
      description: 'Tokenization error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Tokenization error', error_type: 'tokenizer' },
        },
      },
    },
    424: {
      description: 'Embedding Error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Inference failed', error_type: 'backend' },
        },
      },
    },
    429: {
      description: 'Model is overloaded',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Model is overloaded', error_type: 'overloaded' },
        },
      },
    },
  },
})

export const postTokenizeRoute = createRoute({
  method: 'post',
  path: '/tokenize',
  tags: ['Text Embeddings Inference'],
  summary: 'Tokenize inputs',
  operationId: 'tokenize',
  request: {
    body: { content: { 'application/json': { schema: TokenizeRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Tokenized ids',
      content: { 'application/json': { schema: TokenizeResponseSchema } },
    },
    400: {
      description: 'Batch is empty',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Batch is empty', error_type: 'empty' },
        },
      },
    },
    413: {
      description: 'Batch size error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Batch size error', error_type: 'validation' },
        },
      },
    },
    422: {
      description: 'Tokenization error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Tokenization error', error_type: 'tokenizer' },
        },
      },
    },
  },
})

export const postV1EmbeddingsRoute = createRoute({
  method: 'post',
  path: '/v1/embeddings',
  tags: ['Text Embeddings Inference'],
  summary:
    'OpenAI compatible route. Returns a 424 status code if the model is not an embedding model.',
  operationId: 'openai_embed',
  request: {
    body: {
      content: { 'application/json': { schema: OpenAICompatRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Embeddings',
      content: { 'application/json': { schema: OpenAICompatResponseSchema } },
    },
    400: {
      description: 'Batch is empty',
      content: {
        'application/json': {
          schema: OpenAICompatErrorResponseSchema,
          example: { message: 'Batch is empty', type: 'empty' },
        },
      },
    },
    413: {
      description: 'Batch size error',
      content: {
        'application/json': {
          schema: OpenAICompatErrorResponseSchema,
          example: { message: 'Batch size error', type: 'validation' },
        },
      },
    },
    422: {
      description: 'Tokenization error',
      content: {
        'application/json': {
          schema: OpenAICompatErrorResponseSchema,
          example: { message: 'Tokenization error', type: 'tokenizer' },
        },
      },
    },
    424: {
      description: 'Embedding Error',
      content: {
        'application/json': {
          schema: OpenAICompatErrorResponseSchema,
          example: { message: 'Inference failed', type: 'backend' },
        },
      },
    },
    429: {
      description: 'Model is overloaded',
      content: {
        'application/json': {
          schema: OpenAICompatErrorResponseSchema,
          example: { message: 'Model is overloaded', type: 'overloaded' },
        },
      },
    },
  },
})
