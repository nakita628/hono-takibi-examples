import { createRoute, z } from '@hono/zod-openapi'

const ModelDetailsSchema = z
  .object({
    parent_model: z.string().exactOptional(),
    format: z.string().exactOptional(),
    family: z.string().exactOptional(),
    families: z.array(z.string()).exactOptional(),
    parameter_size: z.string().exactOptional(),
    quantization_level: z.string().exactOptional(),
  })
  .openapi({ description: 'Details about a model', required: [] })
  .openapi('ModelDetails')

const ListModelResponseSchema = z
  .object({
    name: z.string().exactOptional(),
    model: z.string().exactOptional(),
    modified_at: z.iso.datetime({ offset: true }).exactOptional(),
    size: z.int().exactOptional(),
    digest: z.string().exactOptional(),
    details: ModelDetailsSchema.exactOptional(),
  })
  .openapi({ description: 'Response from a list request', required: [] })
  .openapi('ListModelResponse')

const ListResponseSchema = z
  .object({ models: z.array(ListModelResponseSchema).exactOptional() })
  .openapi({ description: 'Response from a list request', required: [] })
  .openapi('ListResponse')

const ProcessModelResponseSchema = z
  .object({
    name: z.string().exactOptional(),
    model: z.string().exactOptional(),
    size: z.int().exactOptional(),
    digest: z.string().exactOptional(),
    details: ModelDetailsSchema.exactOptional(),
    expires_at: z.iso.datetime({ offset: true }).exactOptional(),
    size_vram: z.int().exactOptional(),
  })
  .openapi({ description: 'Running model description', required: [] })
  .openapi('ProcessModelResponse')

const ProcessResponseSchema = z
  .object({ models: z.array(ProcessModelResponseSchema).exactOptional() })
  .openapi({ description: 'Response with a list of running models', required: [] })
  .openapi('ProcessResponse')

const PullRequestSchema = z
  .object({
    model: z
      .string()
      .openapi({
        description: 'The name of the model to pull',
        example: 'ibm-granite/granite-4.0-micro-GGUF',
      }),
    insecure: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'allow insecure connections to the catalog.\n' }),
    stream: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If false the response will be returned as a single response object,\nrather than a stream of objects\n',
      }),
  })
  .openapi({ description: 'Request to pull a model', required: ['model'] })
  .openapi('PullRequest')

const ProgressResponseSchema = z
  .object({
    status: z.string().exactOptional().openapi({ description: 'The status of the request' }),
    digest: z.string().exactOptional().openapi({ description: 'The SHA256 digest of the blob' }),
    total: z.int().exactOptional().openapi({ description: 'The total size of the task' }),
    completed: z.int().exactOptional().openapi({ description: 'The completed size of the task' }),
  })
  .openapi({ description: 'The response returned from various streaming endpoints', required: [] })
  .openapi('ProgressResponse')

const ShowRequestSchema = z
  .object({ model: z.string().openapi({ description: 'The name of the model to show' }) })
  .openapi({ description: 'Request to show a model', required: ['model'] })
  .openapi('ShowRequest')

const MessageSchema = z
  .object({
    role: z.string().exactOptional(),
    content: z.string().exactOptional(),
    images: z.array(z.string()).exactOptional(),
  })
  .openapi({ description: 'A message in a chat', required: [] })
  .openapi('Message')

const ShowResponseSchema = z
  .object({
    license: z.string().exactOptional().openapi({ description: 'The model license' }),
    modelfile: z.string().exactOptional().openapi({ description: 'The modelfile content' }),
    parameters: z.string().exactOptional().openapi({ description: 'The model parameters' }),
    template: z.string().exactOptional().openapi({ description: 'The model template' }),
    system: z.string().exactOptional().openapi({ description: 'The model system message/prompt' }),
    details: ModelDetailsSchema.exactOptional(),
    messages: z.array(MessageSchema).exactOptional(),
  })
  .openapi({ description: 'Response from a show request', required: [] })
  .openapi('ShowResponse')

const DurationSchema = z
  .string()
  .openapi({ description: 'A string representing the duration', example: '5m' })
  .openapi('Duration')

const GenerateRequestSchema = z
  .object({
    model: z.string().openapi({ description: 'The model name' }),
    prompt: z
      .string()
      .exactOptional()
      .openapi({ description: 'The prompt to generate a response for' }),
    suffix: z.string().exactOptional(),
    images: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of base64-encoded images (for multimodal models such as \nllava)        \n',
      }),
    format: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The format to return a response in. Currently the only accepted \nvalue is json\n',
      }),
    system: z
      .string()
      .exactOptional()
      .openapi({ description: 'System message to (overrides what is defined in the Modelfile)\n' }),
    template: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The prompt template to use (overrides what is defined in the \nModelfile)\n',
      }),
    context: z
      .array(z.int())
      .exactOptional()
      .openapi({
        description:
          'The context parameter returned from a previous request to generate, \nthis can be used to keep a short conversational memory\n',
        example: [],
      }),
    stream: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If false the response will be returned as a single response object, \nrather than a stream of objects\n',
      }),
    raw: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true no formatting will be applied to the prompt. You may choose \nto use the raw parameter if you are specifying a full templated \nprompt in your request to the API\n',
      }),
    keep_alive: DurationSchema.exactOptional(),
  })
  .openapi({ description: 'Request to generate a response', required: ['model'] })
  .openapi('GenerateRequest')

const GenerateResponseSchema = z
  .object({
    model: z
      .string()
      .exactOptional()
      .openapi({ description: 'The model name that generated the response' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp of the response' }),
    response: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The textual response itself. When done, empty if the response was \nstreamed, if not streamed, this will contain the full response\n',
      }),
    done: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Specifies if the response is complete' }),
    context: z
      .array(z.int())
      .exactOptional()
      .openapi({ description: 'When done, encoding of the conversation used in this response\n' }),
    total_duration: z
      .number()
      .exactOptional()
      .openapi({ description: 'When done, time spent generating the response' }),
    load_duration: z
      .number()
      .exactOptional()
      .openapi({ description: 'When done, time spent in nanoseconds loading the model' }),
    prompt_eval_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'When done, number of tokens in the prompt' }),
    prompt_eval_duration: z
      .number()
      .exactOptional()
      .openapi({ description: 'When done, time spent in nanoseconds evaluating the prompt\n' }),
    eval_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'When done, number of tokens in the response' }),
    eval_duration: z
      .number()
      .exactOptional()
      .openapi({ description: 'When done, time in nanoseconds spent generating the response \n' }),
  })
  .openapi({ description: 'Response from a generate request', required: [] })
  .openapi('GenerateResponse')

const OptionsSchema = z
  .object({
    num_keep: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Specifies the number of tokens from the beginning of \nthe context ot retain when the context limit is reached. \n(Default: 4)\n',
        example: 4,
      }),
    seed: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Sets the random number seed to use for generation. Setting this to \na specific number will make the model generate the same text for \nthe same prompt. \n(Default: 0)\n',
        example: -1,
      }),
    num_predict: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of tokens to predict when generating text. \n(Default: 128, -1 = infinite generation, -2 = fill context)\n',
        example: -1,
      }),
    top_k: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Reduces the probability of generating nonsense. A higher value \n(e.g. 100) will give more diverse answers, while a lower value \n(e.g. 10) will be more conservative. \n(Default: 40)\n',
        example: 40,
      }),
    top_p: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Works together with top-k. A higher value (e.g., 0.95) will lead to \nmore diverse text, while a lower value (e.g., 0.5) will generate \nmore focused and conservative text. \n(Default: 0.9)\n',
        example: 0.9,
      }),
    tfs_z: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Tail free sampling is used to reduce the impact of less probable \ntokens from the output. A higher value (e.g., 2.0) will reduce the \nimpact more, while a value of 1.0 disables this setting. \n(default: 1)\n',
        example: 1,
      }),
    typical_p: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Controls the selection of typical words based on their probability \ndistribution. A higher value (e.g., 0.95) focuses on more typical \nwords, reducing the chance of unusual words being selected. \n(Default: 1.0)\n',
        example: 1,
      }),
    repeat_last_n: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Sets how far back for the model to look back to prevent repetition. \n(Default: 64, 0 = disabled, -1 = num_ctx)\n',
        example: 64,
      }),
    temperature: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The temperature of the model. Increasing the temperature will make \nthe model answer more creatively. \n(Default: 0.8)\n',
        example: 0.8,
      }),
    repeat_penalty: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Sets how strongly to penalize repetitions. A higher value \n(e.g., 1.5) will penalize repetitions more strongly, while a lower \nvalue (e.g., 0.9) will be more lenient. \n(Default: 1.1)\n',
        example: 1.1,
      }),
    presence_penalty: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Applies a penalty to tokens that have already appeared in the \ngenerated text, encouraging the model to introduce new tokens. A \nhigher value increases this penalty, promoting more varied and less \nrepetitive output. \n(Default: 0.8)\n',
        example: 0.8,
      }),
    frequency_penalty: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Penalizes tokens based on their frequency in the generated text so \nfar. A higher value reduces the likelihood of frequent tokens being \ngenerated again, promoting more diverse outputs. \n(Default: 0.8)\n',
        example: 0.8,
      }),
    mirostat: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Enable Mirostat sampling for controlling perplexity. \n(default: 0, 0 = disabled, 1 = Mirostat, 2 = Mirostat 2.0)\n',
        example: 0,
      }),
    mirostat_tau: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Controls the balance between coherence and diversity of the output.\nA lower value will result in more focused and coherent text. \n(Default: 5.0)\n',
        example: 5.8,
      }),
    mirostat_eta: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Influences how quickly the algorithm responds to feedback from the \ngenerated text. A lower learning rate will result in slower \nadjustments, while a higher learning rate will make the algorithm \nmore responsive. \n(Default: 0.1)\n',
        example: 0.1,
      }),
    penalize_newline: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Determines whether the model should penalize the generation of \nnewlines, which can help control the structure and formatting of \nthe output. \n(Default: true)\n',
        example: true,
      }),
    stop: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Sets the stop sequences to use. When this pattern is encountered \nthe LLM will stop generating text and return. Multiple stop patterns \nmay be set by specifying multiple separate stop parameters in a \nmodelfile.\n',
        example: ['AI assistant.'],
      }),
    numa: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether to use Non-Uniform Memory Access (NUMA) for \noptimizing memory usage and performance on multi-processor systems. \n(Default: false)\n',
        example: false,
      }),
    num_ctx: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Sets the size of the context window used to generate the next token. \n(Default: 2048)\n',
        example: 2048,
      }),
    num_batch: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Specifies the number of batches for processing. \n(Default: 512)\n',
        example: 512,
      }),
    num_gpu: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Specifies the number of GPUs to use. A value of -1 uses all \navailable GPUs. \n(Default: -1)\n',
        example: -1,
      }),
    main_gpu: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Specifies the primary GPU to use for processing. \n(Default: 0)\n',
      }),
    low_vram: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether to optimize the model for low VRAM usage. \n(Default: false)\n',
        example: false,
      }),
    f16_kv: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether to use 16-bit floating point precision for \nkey-value pairs, reducing memory usage. \n(Default: false)\n',
        example: true,
      }),
    logits_all: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Specifies whether to output logits for all tokens. \n(Default: false)\n',
        example: false,
      }),
    vocab_only: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether to only load the vocabulary without the full model. \n(Default: false)\n',
        example: false,
      }),
    use_mmap: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Determines whether to use memory-mapped files for loading the model, \nimproving performance on large models. \n(Default: true)\n',
        example: true,
      }),
    use_mlock: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Determines whether to use memory locking to prevent swapping the \nmodel out of RAM. \n(Default: false)\n',
        example: false,
      }),
    num_thread: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Specifies the number of threads to use for processing. A value of \n0 uses all available threads. \n(Default: 0)\n',
        example: 0,
      }),
  })
  .openapi({
    description: 'Advanced model and runner options for generation and chat requests\n',
    required: [],
  })
  .openapi('Options')

const ChatRequestSchema = z
  .object({
    model: z.string().exactOptional().openapi({ description: 'The model name' }),
    messages: z
      .array(MessageSchema)
      .exactOptional()
      .openapi({ description: 'Messages of the chat - can be used to keep a chat memory' }),
    stream: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable streaming of returned response' }),
    format: z
      .string()
      .exactOptional()
      .openapi({ description: 'Format to return the response in (e.g. "json")' }),
    keep_alive: DurationSchema.exactOptional(),
    options: OptionsSchema.exactOptional(),
  })
  .openapi({ description: 'Request to generate a response in a chat', required: [] })
  .openapi('ChatRequest')

const ChatResponseSchema = z
  .object({
    model: z.string().exactOptional().openapi({ description: 'The model name' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp of the response' }),
    message: MessageSchema.exactOptional(),
    done_reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reason the model stopped generating text' }),
    done: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Specifies if the response is complete' }),
    total_duration: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total duration of the request' }),
    load_duration: z
      .number()
      .exactOptional()
      .openapi({ description: 'Load duration of the request' }),
    prompt_eval_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Count of prompt evaluations' }),
    prompt_eval_duration: z
      .number()
      .exactOptional()
      .openapi({ description: 'Duration of prompt evaluations' }),
    eval_count: z.int().exactOptional().openapi({ description: 'Count of evaluations' }),
    eval_duration: z.number().exactOptional().openapi({ description: 'Duration of evaluations' }),
  })
  .openapi({ description: 'Response from a chat request', required: [] })
  .openapi('ChatResponse')

export const getApiVersionRoute = createRoute({
  method: 'get',
  path: '/api/version',
  tags: ['server'],
  summary: 'Return the Podman Desktop AI Lab API server version',
  description: 'Return the Podman Desktop AI Lab API server version',
  operationId: 'getServerVersion',
  responses: {
    200: {
      description: 'The Podman Desktop AI Lab API server version was successfully fetched',
      content: {
        'application/json': {
          schema: z.strictObject({ version: z.string() }).openapi({ required: ['version'] }),
        },
      },
    },
  },
})

export const getApiTagsRoute = createRoute({
  method: 'get',
  path: '/api/tags',
  tags: ['models'],
  summary: 'List models that are available locally',
  description: 'List models that are available locally',
  operationId: 'getModels',
  responses: {
    200: {
      description: 'The models were successfully fetched',
      content: { 'application/json': { schema: ListResponseSchema } },
    },
  },
})

export const postApiPullRoute = createRoute({
  method: 'post',
  path: '/api/pull',
  tags: ['models'],
  summary: 'Download a model from the Podman AI Lab Catalog.\n',
  description: 'Download a model from the Podman AI Lab catalog.\n',
  operationId: 'pullModel',
  request: {
    body: {
      description: 'Request to pull a model',
      content: { 'application/json': { schema: PullRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Model was successfully pulled',
      content: { 'application/x-ndjson': { schema: ProgressResponseSchema } },
    },
  },
})

export const postApiShowRoute = createRoute({
  method: 'post',
  path: '/api/show',
  tags: ['models'],
  summary:
    'Show information about a model including details, modelfile, template, \nparameters, license, and system prompt.\n',
  description:
    'Not implemented, returns an empty object - Show information about a model including details, modelfile, template, \nparameters, license, and system prompt.\n',
  operationId: 'showModel',
  request: {
    body: {
      description: 'Request to show a model',
      content: { 'application/json': { schema: ShowRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: "The model's information was successfully fetched",
      content: { 'application/json': { schema: ShowResponseSchema } },
    },
  },
})

export const postApiGenerateRoute = createRoute({
  method: 'post',
  path: '/api/generate',
  tags: ['generate'],
  summary:
    'Generate a response for a given prompt with a provided model. This is \na streaming endpoint, so there will be a series of responses. The final \nresponse object will include statistics and additional data from the \nrequest.\n',
  description:
    'Generate a response for a given prompt with a provided model. This is \na streaming endpoint, so there will be a series of responses. The \nfinal response object will include statistics and additional data from \nthe request.\n',
  operationId: 'generateResponse',
  request: {
    body: {
      description: 'Request to generate a response',
      content: { 'application/json': { schema: GenerateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A response was successfully generated for the prompt',
      content: { 'application/json': { schema: GenerateResponseSchema } },
    },
  },
})

export const postApiChatRoute = createRoute({
  method: 'post',
  path: '/api/chat',
  tags: ['chat', 'generate'],
  summary:
    'Generate the next message in a chat with a provided model. This is a \nstreaming endpoint, so there will be a series of responses. Streaming \ncan be disabled using "stream": false. The final response object will \ninclude statistics and additional data from the request.\n',
  description:
    'Generate the next message in a chat with a provided model. This is a \nstreaming endpoint, so there will be a series of responses. Streaming \ncan be disabled using "stream": false. The final response object will \ninclude statistics and additional data from the request.\n',
  operationId: 'generateChat',
  request: {
    body: {
      description: 'Request to generate a response in a chat',
      content: { 'application/json': { schema: ChatRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The next message was successfully generated for the chat',
      content: { 'application/json': { schema: ChatResponseSchema } },
    },
  },
})

export const getApiPsRoute = createRoute({
  method: 'get',
  path: '/api/ps',
  tags: ['models'],
  summary: 'List running models',
  description: 'List running models',
  operationId: 'getRunningModels',
  responses: {
    200: {
      description: 'The list of running models was successfully fetched',
      content: { 'application/json': { schema: ProcessResponseSchema } },
    },
  },
})
