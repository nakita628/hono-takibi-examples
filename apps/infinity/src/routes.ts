import { createRoute, z } from '@hono/zod-openapi'

const EmbeddingEncodingFormatSchema = z
  .enum(['float', 'base64'])
  .openapi({ title: 'EmbeddingEncodingFormat' })
  .openapi('EmbeddingEncodingFormat')

const AudioEmbeddingInputSchema = z
  .object({
    input: z
      .union([
        z
          .array(
            z.union([
              z
                .string()
                .openapi({
                  examples: [
                    'data:text/plain;charset=utf-8;base64,VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wZWQgb3ZlciB0aGUgbGF6eSBkb2cu',
                  ],
                  pattern:
                    "data:(?P<mimetype>[\\w]+\\/[\\w\\-\\+\\.]+)?(?:\\;name\\=(?P<name>[\\w\\.\\-%!*'~\\(\\)]+))?(?:\\;charset\\=(?P<charset>[\\w\\-\\+\\.]+))?(?P<base64>\\;base64)?,(?P<data>.*)",
                }),
              z.url().min(1).max(2083),
            ]),
          )
          .min(1)
          .max(32),
        z
          .string()
          .openapi({
            examples: [
              'data:text/plain;charset=utf-8;base64,VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wZWQgb3ZlciB0aGUgbGF6eSBkb2cu',
            ],
            pattern:
              "data:(?P<mimetype>[\\w]+\\/[\\w\\-\\+\\.]+)?(?:\\;name\\=(?P<name>[\\w\\.\\-%!*'~\\(\\)]+))?(?:\\;charset\\=(?P<charset>[\\w\\-\\+\\.]+))?(?P<base64>\\;base64)?,(?P<data>.*)",
          }),
        z.url().min(1).max(2083),
      ])
      .openapi({ title: 'Input' }),
    model: z.string().default('default/not-specified').exactOptional().openapi({ title: 'Model' }),
    encoding_format: EmbeddingEncodingFormatSchema.default('float').exactOptional(),
    user: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'User' }),
  })
  .openapi({
    required: ['input'],
    title: 'AudioEmbeddingInput',
    description: 'LEGACY, DO NO LONGER UPDATE',
  })
  .openapi('AudioEmbeddingInput')

const ClassifyInputSchema = z
  .object({
    input: z.array(z.string().max(122880)).min(1).max(2048).openapi({ title: 'Input' }),
    model: z.string().default('default/not-specified').exactOptional().openapi({ title: 'Model' }),
    raw_scores: z.boolean().default(false).exactOptional().openapi({ title: 'Raw Scores' }),
  })
  .openapi({ required: ['input'], title: 'ClassifyInput' })
  .openapi('ClassifyInput')

const ClassifyObjectSchema = z
  .object({
    score: z.number().openapi({ title: 'Score' }),
    label: z.string().openapi({ title: 'Label' }),
  })
  .openapi({ required: ['score', 'label'], title: '_ClassifyObject' })
  .openapi('ClassifyObject')

const UsageSchema = z
  .object({
    prompt_tokens: z.int().openapi({ title: 'Prompt Tokens' }),
    total_tokens: z.int().openapi({ title: 'Total Tokens' }),
  })
  .openapi({ required: ['prompt_tokens', 'total_tokens'], title: '_Usage' })
  .openapi('Usage')

const ClassifyResultSchema = z
  .object({
    object: z.literal('classify').default('classify').exactOptional().openapi({ title: 'Object' }),
    data: z.array(z.array(ClassifyObjectSchema)).openapi({ title: 'Data' }),
    model: z.string().openapi({ title: 'Model' }),
    usage: UsageSchema,
    id: z.string().exactOptional().openapi({ title: 'Id' }),
    created: z.int().exactOptional().openapi({ title: 'Created' }),
  })
  .openapi({
    required: ['data', 'model', 'usage'],
    title: 'ClassifyResult',
    description: 'Result of classification.',
  })
  .openapi('ClassifyResult')

const ValidationErrorSchema = z
  .object({
    loc: z.array(z.union([z.string(), z.int()])).openapi({ title: 'Location' }),
    msg: z.string().openapi({ title: 'Message' }),
    type: z.string().openapi({ title: 'Error Type' }),
  })
  .openapi({ required: ['loc', 'msg', 'type'], title: 'ValidationError' })
  .openapi('ValidationError')

const HTTPValidationErrorSchema = z
  .object({ detail: z.array(ValidationErrorSchema).exactOptional().openapi({ title: 'Detail' }) })
  .openapi({ title: 'HTTPValidationError', required: [] })
  .openapi('HTTPValidationError')

const ImageEmbeddingInputSchema = z
  .object({
    input: z
      .union([
        z
          .array(
            z.union([
              z
                .string()
                .openapi({
                  examples: [
                    'data:text/plain;charset=utf-8;base64,VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wZWQgb3ZlciB0aGUgbGF6eSBkb2cu',
                  ],
                  pattern:
                    "data:(?P<mimetype>[\\w]+\\/[\\w\\-\\+\\.]+)?(?:\\;name\\=(?P<name>[\\w\\.\\-%!*'~\\(\\)]+))?(?:\\;charset\\=(?P<charset>[\\w\\-\\+\\.]+))?(?P<base64>\\;base64)?,(?P<data>.*)",
                }),
              z.url().min(1).max(2083),
            ]),
          )
          .min(1)
          .max(32),
        z
          .string()
          .openapi({
            examples: [
              'data:text/plain;charset=utf-8;base64,VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wZWQgb3ZlciB0aGUgbGF6eSBkb2cu',
            ],
            pattern:
              "data:(?P<mimetype>[\\w]+\\/[\\w\\-\\+\\.]+)?(?:\\;name\\=(?P<name>[\\w\\.\\-%!*'~\\(\\)]+))?(?:\\;charset\\=(?P<charset>[\\w\\-\\+\\.]+))?(?P<base64>\\;base64)?,(?P<data>.*)",
          }),
        z.url().min(1).max(2083),
      ])
      .openapi({ title: 'Input' }),
    model: z.string().default('default/not-specified').exactOptional().openapi({ title: 'Model' }),
    encoding_format: EmbeddingEncodingFormatSchema.default('float').exactOptional(),
    user: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'User' }),
  })
  .openapi({
    required: ['input'],
    title: 'ImageEmbeddingInput',
    description: 'LEGACY, DO NO LONGER UPDATE',
  })
  .openapi('ImageEmbeddingInput')

const ModelInfoSchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    stats: z.object({}).openapi({ title: 'Stats' }),
    object: z.literal('model').default('model').exactOptional().openapi({ title: 'Object' }),
    owned_by: z
      .literal('infinity')
      .default('infinity')
      .exactOptional()
      .openapi({ title: 'Owned By' }),
    created: z.int().exactOptional().openapi({ title: 'Created' }),
    backend: z.string().default('').exactOptional().openapi({ title: 'Backend' }),
    capabilities: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .default([])
      .exactOptional()
      .openapi({ title: 'Capabilities' }),
  })
  .openapi({ required: ['id', 'stats'], title: 'ModelInfo' })
  .openapi('ModelInfo')

const OpenAIEmbeddingInputTextSchema = z
  .object({
    model: z.string().default('default/not-specified').exactOptional().openapi({ title: 'Model' }),
    encoding_format: EmbeddingEncodingFormatSchema.default('float').exactOptional(),
    user: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'User' }),
    dimensions: z.int().default(0).exactOptional().openapi({ title: 'Dimensions' }),
    input: z
      .union([z.array(z.string().max(122880)).min(1).max(2048), z.string().max(122880)])
      .openapi({ title: 'Input' }),
    modality: z.literal('text').default('text').exactOptional().openapi({ title: 'Modality' }),
  })
  .openapi({ required: ['input'], title: '_OpenAIEmbeddingInput_Text', description: 'helper' })
  .openapi('OpenAIEmbeddingInputText')

const OpenAIEmbeddingInputAudioSchema = z
  .object({
    model: z.string().default('default/not-specified').exactOptional().openapi({ title: 'Model' }),
    encoding_format: EmbeddingEncodingFormatSchema.default('float').exactOptional(),
    user: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'User' }),
    dimensions: z.int().default(0).exactOptional().openapi({ title: 'Dimensions' }),
    input: z
      .union([
        z
          .array(
            z.union([
              z
                .string()
                .openapi({
                  examples: [
                    'data:text/plain;charset=utf-8;base64,VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wZWQgb3ZlciB0aGUgbGF6eSBkb2cu',
                  ],
                  pattern:
                    "data:(?P<mimetype>[\\w]+\\/[\\w\\-\\+\\.]+)?(?:\\;name\\=(?P<name>[\\w\\.\\-%!*'~\\(\\)]+))?(?:\\;charset\\=(?P<charset>[\\w\\-\\+\\.]+))?(?P<base64>\\;base64)?,(?P<data>.*)",
                }),
              z.url().min(1).max(2083),
            ]),
          )
          .min(1)
          .max(32),
        z
          .string()
          .openapi({
            examples: [
              'data:text/plain;charset=utf-8;base64,VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wZWQgb3ZlciB0aGUgbGF6eSBkb2cu',
            ],
            pattern:
              "data:(?P<mimetype>[\\w]+\\/[\\w\\-\\+\\.]+)?(?:\\;name\\=(?P<name>[\\w\\.\\-%!*'~\\(\\)]+))?(?:\\;charset\\=(?P<charset>[\\w\\-\\+\\.]+))?(?P<base64>\\;base64)?,(?P<data>.*)",
          }),
        z.url().min(1).max(2083),
      ])
      .openapi({ title: 'Input' }),
    modality: z.literal('audio').default('audio').exactOptional().openapi({ title: 'Modality' }),
  })
  .openapi({ required: ['input'], title: 'OpenAIEmbeddingInput_Audio' })
  .openapi('OpenAIEmbeddingInputAudio')

const OpenAIEmbeddingInputImageSchema = z
  .object({
    model: z.string().default('default/not-specified').exactOptional().openapi({ title: 'Model' }),
    encoding_format: EmbeddingEncodingFormatSchema.default('float').exactOptional(),
    user: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'User' }),
    dimensions: z.int().default(0).exactOptional().openapi({ title: 'Dimensions' }),
    input: z
      .union([
        z
          .array(
            z.union([
              z
                .string()
                .openapi({
                  examples: [
                    'data:text/plain;charset=utf-8;base64,VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wZWQgb3ZlciB0aGUgbGF6eSBkb2cu',
                  ],
                  pattern:
                    "data:(?P<mimetype>[\\w]+\\/[\\w\\-\\+\\.]+)?(?:\\;name\\=(?P<name>[\\w\\.\\-%!*'~\\(\\)]+))?(?:\\;charset\\=(?P<charset>[\\w\\-\\+\\.]+))?(?P<base64>\\;base64)?,(?P<data>.*)",
                }),
              z.url().min(1).max(2083),
            ]),
          )
          .min(1)
          .max(32),
        z
          .string()
          .openapi({
            examples: [
              'data:text/plain;charset=utf-8;base64,VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wZWQgb3ZlciB0aGUgbGF6eSBkb2cu',
            ],
            pattern:
              "data:(?P<mimetype>[\\w]+\\/[\\w\\-\\+\\.]+)?(?:\\;name\\=(?P<name>[\\w\\.\\-%!*'~\\(\\)]+))?(?:\\;charset\\=(?P<charset>[\\w\\-\\+\\.]+))?(?P<base64>\\;base64)?,(?P<data>.*)",
          }),
        z.url().min(1).max(2083),
      ])
      .openapi({ title: 'Input' }),
    modality: z.literal('image').default('image').exactOptional().openapi({ title: 'Modality' }),
  })
  .openapi({ required: ['input'], title: 'OpenAIEmbeddingInput_Image' })
  .openapi('OpenAIEmbeddingInputImage')

const MultiModalOpenAIEmbeddingSchema = z
  .xor([
    OpenAIEmbeddingInputTextSchema,
    OpenAIEmbeddingInputAudioSchema,
    OpenAIEmbeddingInputImageSchema,
  ])
  .openapi({ title: 'MultiModalOpenAIEmbedding' })
  .openapi('MultiModalOpenAIEmbedding')

const EmbeddingObjectSchema = z
  .object({
    object: z
      .literal('embedding')
      .default('embedding')
      .exactOptional()
      .openapi({ title: 'Object' }),
    embedding: z
      .union([
        z.array(z.number()),
        z.file().openapi({ type: 'string', format: 'binary' }),
        z.array(z.array(z.number())),
      ])
      .openapi({ title: 'Embedding' }),
    index: z.int().openapi({ title: 'Index' }),
  })
  .openapi({ required: ['embedding', 'index'], title: '_EmbeddingObject' })
  .openapi('EmbeddingObject')

const OpenAIEmbeddingResultSchema = z
  .object({
    object: z.literal('list').default('list').exactOptional().openapi({ title: 'Object' }),
    data: z.array(EmbeddingObjectSchema).openapi({ title: 'Data' }),
    model: z.string().openapi({ title: 'Model' }),
    usage: UsageSchema,
    id: z.string().exactOptional().openapi({ title: 'Id' }),
    created: z.int().exactOptional().openapi({ title: 'Created' }),
  })
  .openapi({ required: ['data', 'model', 'usage'], title: 'OpenAIEmbeddingResult' })
  .openapi('OpenAIEmbeddingResult')

const OpenAIModelInfoSchema = z
  .object({
    data: z.array(ModelInfoSchema).openapi({ title: 'Data' }),
    object: z.string().default('list').exactOptional().openapi({ title: 'Object' }),
  })
  .openapi({ required: ['data'], title: 'OpenAIModelInfo' })
  .openapi('OpenAIModelInfo')

const ReRankObjectSchema = z
  .object({
    relevance_score: z.number().openapi({ title: 'Relevance Score' }),
    index: z.int().openapi({ title: 'Index' }),
    document: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Document' }),
  })
  .openapi({ required: ['relevance_score', 'index'], title: '_ReRankObject' })
  .openapi('ReRankObject')

const ReRankResultSchema = z
  .object({
    object: z.literal('rerank').default('rerank').exactOptional().openapi({ title: 'Object' }),
    results: z.array(ReRankObjectSchema).openapi({ title: 'Results' }),
    model: z.string().openapi({ title: 'Model' }),
    usage: UsageSchema,
    id: z.string().exactOptional().openapi({ title: 'Id' }),
    created: z.int().exactOptional().openapi({ title: 'Created' }),
  })
  .openapi({
    required: ['results', 'model', 'usage'],
    title: 'ReRankResult',
    description: 'Following the Cohere protocol for Rerankers.',
  })
  .openapi('ReRankResult')

const RerankInputSchema = z
  .object({
    query: z.string().max(122880).openapi({ title: 'Query' }),
    documents: z.array(z.string().max(122880)).min(1).max(2048).openapi({ title: 'Documents' }),
    return_documents: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Return Documents' }),
    raw_scores: z.boolean().default(false).exactOptional().openapi({ title: 'Raw Scores' }),
    model: z.string().default('default/not-specified').exactOptional().openapi({ title: 'Model' }),
    top_n: z
      .union([z.int().gt(0), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Top N' }),
  })
  .openapi({
    required: ['query', 'documents'],
    title: 'RerankInput',
    description: 'Input for reranking',
  })
  .openapi('RerankInput')

export const getHealthRoute = createRoute({
  method: 'get',
  path: '/health',
  summary: ' Health',
  description: 'health check endpoint\n\nReturns:\n    dict(unix=float): dict with unix time stamp',
  operationId: 'health',
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z.record(z.string(), z.number()).openapi({ title: 'Response Health' }),
        },
      },
    },
  },
})

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  summary: 'Redirect',
  operationId: 'redirect__get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
})

export const getModelsRoute = createRoute({
  method: 'get',
  path: '/models',
  summary: ' Models',
  description: 'get models endpoint',
  operationId: 'models',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OpenAIModelInfoSchema } },
    },
  },
})

export const postEmbeddingsRoute = createRoute({
  method: 'post',
  path: '/embeddings',
  summary: ' Embeddings',
  description:
    'Encode Embeddings. Supports with multimodal inputs. Aligned with OpenAI Embeddings API.\n\n## Running Text Embeddings\n```python\nimport requests, base64\nrequests.post("http://..:7997/embeddings",\n    json={"model":"openai/clip-vit-base-patch32","input":["Two cute cats."]})\n```\n\n## Running Image Embeddings\n```python\nrequests.post("http://..:7997/embeddings",\n    json={\n        "model": "openai/clip-vit-base-patch32",\n        "encoding_format": "base64",\n        "input": [\n            "http://images.cocodataset.org/val2017/000000039769.jpg",\n            # can also be base64 encoded\n        ],\n        # set extra modality to image to process as image\n        "modality": "image"\n)\n```\n\n## Running Audio Embeddings\n```python\nimport requests, base64\nurl = "https://github.com/michaelfeil/infinity/raw/3b72eb7c14bae06e68ddd07c1f23fe0bf403f220/libs/infinity_emb/tests/data/audio/beep.wav"\n\ndef url_to_base64(url, modality = "image"):\n    \'\'\'small helper to convert url to base64 without server requiring access to the url\'\'\'\n    response = requests.get(url)\n    response.raise_for_status()\n    base64_encoded = base64.b64encode(response.content).decode(\'utf-8\')\n    mimetype = f"{modality}/{url.split(\'.\')[-1]}"\n    return f"data:{mimetype};base64,{base64_encoded}"\n\nrequests.post("http://localhost:7997/embeddings",\n    json={\n        "model": "laion/larger_clap_general",\n        "encoding_format": "float",\n        "input": [\n            url, url_to_base64(url, "audio")\n        ],\n        # set extra modality to audio to process as audio\n        "modality": "audio"\n    }\n)\n```\n\n## Running via OpenAI Client\n```python\nfrom openai import OpenAI # pip install openai==1.51.0\nclient = OpenAI(base_url="http://localhost:7997/")\nclient.embeddings.create(\n    model="laion/larger_clap_general",\n    input=[url_to_base64(url, "audio")],\n    encoding_format="float",\n    extra_body={\n        "modality": "audio"\n    }\n)\n\nclient.embeddings.create(\n    model="laion/larger_clap_general",\n    input=["the sound of a beep", "the sound of a cat"],\n    encoding_format="base64", # base64: optional high performance setting\n    extra_body={\n        "modality": "text"\n    }\n)\n```\n\n### Hint: Run all the above models on one server:\n```bash\ninfinity_emb v2 --model-id BAAI/bge-small-en-v1.5 --model-id openai/clip-vit-base-patch32 --model-id laion/larger_clap_general\n```',
  operationId: 'embeddings',
  request: {
    body: {
      content: { 'application/json': { schema: MultiModalOpenAIEmbeddingSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OpenAIEmbeddingResultSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postRerankRoute = createRoute({
  method: 'post',
  path: '/rerank',
  summary: ' Rerank',
  description:
    'Rerank documents. Aligned with Cohere API (https://docs.cohere.com/reference/rerank)\n\n```python\nimport requests\nrequests.post("http://..:7997/rerank",\n    json={\n        "model":"mixedbread-ai/mxbai-rerank-xsmall-v1",\n        "query":"Where is Munich?",\n        "documents":["Munich is in Germany.", "The sky is blue."]\n    })\n```',
  operationId: 'rerank',
  request: {
    body: { content: { 'application/json': { schema: RerankInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ReRankResultSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postClassifyRoute = createRoute({
  method: 'post',
  path: '/classify',
  summary: ' Classify',
  description:
    'Score or Classify Sentiments\n\n```python\nimport requests\nrequests.post("http://..:7997/classify",\n    json={"model":"SamLowe/roberta-base-go_emotions","input":["I am not having a great day."]})\n```',
  operationId: 'classify',
  request: {
    body: { content: { 'application/json': { schema: ClassifyInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ClassifyResultSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postEmbeddingsImageRoute = createRoute({
  method: 'post',
  path: '/embeddings_image',
  summary: 'Deprecated: Use `embeddings` with `modality` set to `image`',
  description:
    'Encode Embeddings from Image files\n\nSupports URLs of Images and Base64-encoded Images\n\n```python\nimport requests\nrequests.post("http://..:7997/embeddings_image",\n    json={\n        "model":"openai/clip-vit-base-patch32",\n        "input": [\n            "http://images.cocodataset.org/val2017/000000039769.jpg",\n            "data:image/png;base64,iVBORw0KGgoDEMOoSAMPLEoENCODEDIMAGE"\n        ]\n    })\n```',
  operationId: 'embeddings_image',
  request: {
    body: {
      content: { 'application/json': { schema: ImageEmbeddingInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OpenAIEmbeddingResultSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  deprecated: true,
})

export const postEmbeddingsAudioRoute = createRoute({
  method: 'post',
  path: '/embeddings_audio',
  summary: 'Deprecated: Use `embeddings` with `modality` set to `audio`',
  description:
    'Encode Embeddings from Audio files\n\nSupports URLs of Audios and Base64-encoded Audios\n\n```python\nimport requests\nrequests.post("http://..:7997/embeddings_audio",\n    json={\n        "model":"laion/larger_clap_general",\n        "input": [\n            "https://github.com/michaelfeil/infinity/raw/3b72eb7c14bae06e68ddd07c1f23fe0bf403f220/libs/infinity_emb/tests/data/audio/beep.wav",\n            "data:audio/wav;base64,iVBORw0KGgoDEMOoSAMPLEoENCODEDAUDIO"\n        ]\n    })\n```',
  operationId: 'embeddings_audio',
  request: {
    body: {
      content: { 'application/json': { schema: AudioEmbeddingInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OpenAIEmbeddingResultSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  deprecated: true,
})

export const getMetricsRoute = createRoute({
  method: 'get',
  path: '/metrics',
  summary: 'Metrics',
  description: 'Endpoint that serves Prometheus metrics.',
  operationId: 'metrics_metrics_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
})
