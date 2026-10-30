import { createRoute, z } from '@hono/zod-openapi'

const TokenLogprobSchema = z
  .object({
    token: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text representation of the token' }),
    logprob: z
      .number()
      .exactOptional()
      .openapi({ description: 'The log probability of this token' }),
    bytes: z
      .array(z.int())
      .exactOptional()
      .openapi({ description: 'The raw byte representation of the token' }),
  })
  .openapi({
    description: 'Log probability information for a single token alternative',
    required: [],
  })
  .openapi('TokenLogprob')

type LogprobType = {
  token?: string
  logprob?: number
  bytes?: number[]
  top_logprobs?: z.infer<typeof TokenLogprobSchema>[]
}

const ModelOptionsSchema = z
  .looseObject({
    seed: z
      .int()
      .exactOptional()
      .openapi({ description: 'Random seed used for reproducible outputs' }),
    temperature: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Controls randomness in generation (higher = more random)' }),
    top_k: z
      .int()
      .exactOptional()
      .openapi({ description: 'Limits next token selection to the K most likely' }),
    top_p: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Cumulative probability threshold for nucleus sampling' }),
    min_p: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Minimum probability threshold for token selection' }),
    stop: z
      .xor([z.string(), z.array(z.string())])
      .exactOptional()
      .openapi({ description: 'Stop sequences that will halt generation' }),
    num_ctx: z
      .int()
      .exactOptional()
      .openapi({ description: 'Context length size (number of tokens)' }),
    num_predict: z
      .int()
      .exactOptional()
      .openapi({ description: 'Maximum number of tokens to generate' }),
  })
  .openapi({ description: 'Runtime options that control text generation', required: [] })
  .openapi('ModelOptions')

const ThinkValueSchema = z
  .xor([z.boolean(), z.string(), z.null().nullable()])
  .openapi({
    description:
      "Controls a model's thinking output. Use `/api/show` to discover the supported values and default for the selected model. `true` requests thinking, `false` requests no thinking output, and `null` uses the model default. String values are model-defined; supported names must match `/api/show` exactly. Numbers are not supported.",
  })
  .openapi('ThinkValue')

const GenerateRequestSchema = z
  .object({
    model: z.string().openapi({ description: 'Model name' }),
    prompt: z
      .string()
      .exactOptional()
      .openapi({ description: 'Text for the model to generate a response from' }),
    suffix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Used for fill-in-the-middle models, text that appears after the user prompt and before the model response',
      }),
    images: z
      .array(
        z
          .string()
          .openapi({ description: 'Base64-encoded images for models that support image input' }),
      )
      .exactOptional(),
    format: z
      .xor([z.string(), z.object({})])
      .exactOptional()
      .openapi({
        description:
          'Structured output format for the model to generate a response from. Supports either the string `"json"` or a JSON schema object.',
      }),
    system: z
      .string()
      .exactOptional()
      .openapi({ description: 'System prompt for the model to generate a response from' }),
    stream: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'When true, returns a stream of partial responses' }),
    think: ThinkValueSchema.exactOptional(),
    raw: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When true, returns the raw response from the model without any prompt templating',
      }),
    keep_alive: z
      .xor([z.string(), z.number()])
      .exactOptional()
      .openapi({
        description: 'Model keep-alive duration (for example `5m` or `0` to unload immediately)',
      }),
    options: ModelOptionsSchema.exactOptional(),
    logprobs: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to return log probabilities of the output tokens' }),
    top_logprobs: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Number of most likely tokens to return at each token position when logprobs are enabled',
      }),
  })
  .openapi({ required: ['model'] })
  .openapi('GenerateRequest')

const LogprobSchema: z.ZodType<LogprobType> = z
  .lazy(() =>
    z
      .object({
        token: z
          .string()
          .exactOptional()
          .openapi({ description: 'The text representation of the token' }),
        logprob: z
          .number()
          .exactOptional()
          .openapi({ description: 'The log probability of this token' }),
        bytes: z
          .array(z.int())
          .exactOptional()
          .openapi({ description: 'The raw byte representation of the token' }),
        top_logprobs: z
          .array(TokenLogprobSchema)
          .exactOptional()
          .openapi({
            description: 'Most likely tokens and their log probabilities at this position',
          }),
      })
      .openapi({ description: 'Log probability information for a generated token', required: [] }),
  )
  .openapi('Logprob')

const GenerateResponseSchema = z
  .object({
    model: z.string().exactOptional().openapi({ description: 'Model name' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'ISO 8601 timestamp of response creation' }),
    response: z
      .string()
      .exactOptional()
      .openapi({ description: "The model's generated text response" }),
    thinking: z
      .string()
      .exactOptional()
      .openapi({ description: "The model's generated thinking output" }),
    done: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether generation has finished' }),
    done_reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reason the generation stopped' }),
    total_duration: z
      .int()
      .exactOptional()
      .openapi({ description: 'Time spent generating the response in nanoseconds' }),
    load_duration: z
      .int()
      .exactOptional()
      .openapi({ description: 'Time spent loading the model in nanoseconds' }),
    prompt_eval_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of input tokens in the prompt' }),
    prompt_eval_cached_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of prompt tokens read from the cache' }),
    prompt_eval_duration: z
      .int()
      .exactOptional()
      .openapi({ description: 'Time spent evaluating uncached prompt tokens in nanoseconds' }),
    eval_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of output tokens generated in the response' }),
    eval_duration: z
      .int()
      .exactOptional()
      .openapi({ description: 'Time spent generating tokens in nanoseconds' }),
    logprobs: z
      .array(LogprobSchema)
      .exactOptional()
      .openapi({
        description:
          'Log probability information for the generated tokens when logprobs are enabled',
      }),
  })
  .openapi({ required: [] })
  .openapi('GenerateResponse')

const GenerateStreamEventSchema = z
  .object({
    model: z.string().exactOptional().openapi({ description: 'Model name' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'ISO 8601 timestamp of response creation' }),
    response: z
      .string()
      .exactOptional()
      .openapi({ description: "The model's generated text response for this chunk" }),
    thinking: z
      .string()
      .exactOptional()
      .openapi({ description: "The model's generated thinking output for this chunk" }),
    done: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the stream has finished' }),
    done_reason: z.string().exactOptional().openapi({ description: 'Reason streaming finished' }),
    total_duration: z
      .int()
      .exactOptional()
      .openapi({ description: 'Time spent generating the response in nanoseconds' }),
    load_duration: z
      .int()
      .exactOptional()
      .openapi({ description: 'Time spent loading the model in nanoseconds' }),
    prompt_eval_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of input tokens in the prompt' }),
    prompt_eval_cached_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of prompt tokens read from the cache' }),
    prompt_eval_duration: z
      .int()
      .exactOptional()
      .openapi({ description: 'Time spent evaluating uncached prompt tokens in nanoseconds' }),
    eval_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of output tokens generated in the response' }),
    eval_duration: z
      .int()
      .exactOptional()
      .openapi({ description: 'Time spent generating tokens in nanoseconds' }),
  })
  .openapi({ required: [] })
  .openapi('GenerateStreamEvent')

const ToolCallSchema = z
  .object({
    function: z
      .object({
        name: z.string().openapi({ description: 'Name of the function to call' }),
        description: z.string().exactOptional().openapi({ description: 'What the function does' }),
        arguments: z
          .object({})
          .exactOptional()
          .openapi({ description: 'JSON object of arguments to pass to the function' }),
      })
      .exactOptional()
      .openapi({ required: ['name'] }),
  })
  .openapi({ required: [] })
  .openapi('ToolCall')

const ChatMessageSchema = z
  .object({
    role: z
      .enum(['system', 'user', 'assistant', 'tool'])
      .openapi({ description: 'Author of the message.' }),
    content: z.string().openapi({ description: 'Message text content' }),
    images: z
      .array(z.string().openapi({ description: 'Base64-encoded image content' }))
      .exactOptional()
      .openapi({ description: 'Optional list of inline images for multimodal models' }),
    tool_calls: z
      .array(ToolCallSchema)
      .exactOptional()
      .openapi({ description: 'Tool call requests produced by the model' }),
  })
  .openapi({ required: ['role', 'content'] })
  .openapi('ChatMessage')

const ToolDefinitionSchema = z
  .object({
    type: z.literal('function').openapi({ description: 'Type of tool (always `function`)' }),
    function: z
      .object({
        name: z.string().openapi({ description: 'Function name exposed to the model' }),
        description: z
          .string()
          .exactOptional()
          .openapi({ description: 'Human-readable description of the function' }),
        parameters: z
          .object({})
          .openapi({ description: 'JSON Schema for the function parameters' }),
      })
      .openapi({ required: ['name', 'parameters'] }),
  })
  .openapi({ required: ['type', 'function'] })
  .openapi('ToolDefinition')

const ChatRequestSchema = z
  .object({
    model: z.string().openapi({ description: 'Model name' }),
    messages: z
      .array(ChatMessageSchema)
      .openapi({
        description: 'Chat history as an array of message objects (each with a role and content)',
      }),
    tools: z
      .array(ToolDefinitionSchema)
      .exactOptional()
      .openapi({
        description: 'Optional list of function tools the model may call during the chat',
      }),
    format: z
      .xor([z.literal('json'), z.object({})])
      .exactOptional()
      .openapi({ description: 'Format to return a response in. Can be `json` or a JSON schema' }),
    options: ModelOptionsSchema.exactOptional(),
    stream: z.boolean().default(true).exactOptional(),
    think: ThinkValueSchema.exactOptional(),
    keep_alive: z
      .xor([z.string(), z.number()])
      .exactOptional()
      .openapi({
        description: 'Model keep-alive duration (for example `5m` or `0` to unload immediately)',
      }),
    logprobs: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to return log probabilities of the output tokens' }),
    top_logprobs: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Number of most likely tokens to return at each token position when logprobs are enabled',
      }),
  })
  .openapi({ required: ['model', 'messages'] })
  .openapi('ChatRequest')

const ChatResponseSchema = z
  .object({
    model: z
      .string()
      .exactOptional()
      .openapi({ description: 'Model name used to generate this message' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp of response creation (ISO 8601)' }),
    message: z
      .object({
        role: z
          .literal('assistant')
          .exactOptional()
          .openapi({ description: 'Always `assistant` for model responses' }),
        content: z.string().exactOptional().openapi({ description: 'Assistant message text' }),
        thinking: z
          .string()
          .exactOptional()
          .openapi({ description: 'Optional deliberate thinking trace when `think` is enabled' }),
        tool_calls: z
          .array(ToolCallSchema)
          .exactOptional()
          .openapi({ description: 'Tool calls requested by the assistant' }),
        images: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'Optional base64-encoded images in the response' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    done: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the chat response has finished' }),
    done_reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reason the response finished' }),
    total_duration: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total time spent generating in nanoseconds' }),
    load_duration: z
      .int()
      .exactOptional()
      .openapi({ description: 'Time spent loading the model in nanoseconds' }),
    prompt_eval_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of tokens in the prompt' }),
    prompt_eval_cached_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of prompt tokens read from the cache' }),
    prompt_eval_duration: z
      .int()
      .exactOptional()
      .openapi({ description: 'Time spent evaluating uncached prompt tokens in nanoseconds' }),
    eval_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of tokens generated in the response' }),
    eval_duration: z
      .int()
      .exactOptional()
      .openapi({ description: 'Time spent generating tokens in nanoseconds' }),
    logprobs: z
      .array(LogprobSchema)
      .exactOptional()
      .openapi({
        description:
          'Log probability information for the generated tokens when logprobs are enabled',
      }),
  })
  .openapi({ required: [] })
  .openapi('ChatResponse')

const ChatStreamEventSchema = z
  .object({
    model: z
      .string()
      .exactOptional()
      .openapi({ description: 'Model name used for this stream event' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When this chunk was created (ISO 8601)' }),
    message: z
      .object({
        role: z
          .string()
          .exactOptional()
          .openapi({ description: 'Role of the message for this chunk' }),
        content: z
          .string()
          .exactOptional()
          .openapi({ description: 'Partial assistant message text' }),
        thinking: z
          .string()
          .exactOptional()
          .openapi({ description: 'Partial thinking text when `think` is enabled' }),
        tool_calls: z
          .array(ToolCallSchema)
          .exactOptional()
          .openapi({ description: 'Partial tool calls, if any' }),
        images: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'Partial base64-encoded images, when present' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    done: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True for the final event in the stream' }),
  })
  .openapi({ required: [] })
  .openapi('ChatStreamEvent')

const ThinkingSchema = z
  .object({
    values: z
      .array(z.xor([z.boolean(), z.string()]))
      .openapi({
        description:
          "Values explicitly supported by the model's `think` request field. Booleans represent on/off controls and strings represent model-defined levels. An array containing only `false` identifies a model without thinking support.",
      }),
    default: z
      .xor([z.boolean(), z.string()])
      .openapi({
        description:
          'Value used when `think` is not set. For models that use this metadata for named thinking levels, unsupported names resolve to this default.',
      }),
  })
  .openapi({
    required: ['values', 'default'],
    description:
      'Thinking controls advertised by a model. Models without thinking metadata omit this field.',
  })
  .openapi('Thinking')

const StatusEventSchema = z
  .object({
    status: z.string().exactOptional().openapi({ description: 'Human-readable status message' }),
    digest: z
      .string()
      .exactOptional()
      .openapi({ description: 'Content digest associated with the status, if applicable' }),
    total: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total number of bytes expected for the operation' }),
    completed: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of bytes transferred so far' }),
  })
  .openapi({ required: [] })
  .openapi('StatusEvent')

const StatusResponseSchema = z
  .object({ status: z.string().exactOptional().openapi({ description: 'Current status message' }) })
  .openapi({ required: [] })
  .openapi('StatusResponse')

const EmbedRequestSchema = z
  .object({
    model: z.string().openapi({ description: 'Model name' }),
    input: z
      .xor([z.string(), z.array(z.string())])
      .openapi({ description: 'Text or array of texts to generate embeddings for' }),
    truncate: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'If true, truncate inputs that exceed the context window. If false, returns an error.',
      }),
    dimensions: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of dimensions to generate embeddings for' }),
    keep_alive: z.string().exactOptional().openapi({ description: 'Model keep-alive duration' }),
    options: ModelOptionsSchema.exactOptional(),
  })
  .openapi({ required: ['model', 'input'] })
  .openapi('EmbedRequest')

const EmbedResponseSchema = z
  .object({
    model: z
      .string()
      .exactOptional()
      .openapi({ description: 'Model that produced the embeddings' }),
    embeddings: z
      .array(z.array(z.number()))
      .exactOptional()
      .openapi({ description: 'Array of vector embeddings' }),
    total_duration: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total time spent generating in nanoseconds' }),
    load_duration: z.int().exactOptional().openapi({ description: 'Load time in nanoseconds' }),
    prompt_eval_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of input tokens processed to generate embeddings' }),
  })
  .openapi({ required: [] })
  .openapi('EmbedResponse')

const CreateRequestSchema = z
  .object({
    model: z.string().openapi({ description: 'Name for the model to create' }),
    from: z.string().exactOptional().openapi({ description: 'Existing model to create from' }),
    template: z
      .string()
      .exactOptional()
      .openapi({ description: 'Prompt template to use for the model' }),
    renderer: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the renderer for the model' }),
    parser: z.string().exactOptional().openapi({ description: 'Name of the parser for the model' }),
    files: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Source file names mapped to their SHA-256 digests. Split GGUF models must include each shard under its original split filename.',
      }),
    draft_files: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Draft source file names mapped to their SHA-256 digests' }),
    license: z
      .xor([z.string(), z.array(z.string())])
      .exactOptional()
      .openapi({ description: 'License string or list of licenses for the model' }),
    system: z
      .string()
      .exactOptional()
      .openapi({ description: 'System prompt to embed in the model' }),
    parameters: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Key-value parameters for the model' }),
    messages: z
      .array(ChatMessageSchema)
      .exactOptional()
      .openapi({ description: 'Message history to use for the model' }),
    quantize: z
      .string()
      .exactOptional()
      .openapi({ description: 'Quantization level to apply during import (e.g. `nvfp4`)' }),
    draft_quantize: z
      .string()
      .exactOptional()
      .openapi({ description: 'Quantization level to apply to draft weights during import' }),
    requires: z
      .string()
      .exactOptional()
      .openapi({ description: 'Minimum Ollama version required by the model' }),
    capabilities: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Capabilities to add without removing inherited or inferred capabilities (e.g. `decision` for compatible decision models)',
      }),
    stream: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Stream status updates' }),
  })
  .openapi({ required: ['model'] })
  .openapi('CreateRequest')

const CopyRequestSchema = z
  .object({
    source: z.string().openapi({ description: 'Existing model name to copy from' }),
    destination: z.string().openapi({ description: 'New model name to create' }),
  })
  .openapi({ required: ['source', 'destination'] })
  .openapi('CopyRequest')

const DeleteRequestSchema = z
  .object({ model: z.string().openapi({ description: 'Model name to delete' }) })
  .openapi({ required: ['model'] })
  .openapi('DeleteRequest')

const PullRequestSchema = z
  .object({
    model: z.string().openapi({ description: 'Name of the model to download' }),
    insecure: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Allow downloading over insecure connections' }),
    stream: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Stream progress updates' }),
  })
  .openapi({ required: ['model'] })
  .openapi('PullRequest')

const PushRequestSchema = z
  .object({
    model: z.string().openapi({ description: 'Name of the model to publish' }),
    insecure: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Allow publishing over insecure connections' }),
    stream: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Stream progress updates' }),
  })
  .openapi({ required: ['model'] })
  .openapi('PushRequest')

const ShowRequestSchema = z
  .object({
    model: z.string().openapi({ description: 'Model name to show' }),
    verbose: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, includes large verbose fields in the response.' }),
  })
  .openapi({ required: ['model'] })
  .openapi('ShowRequest')

const ShowResponseSchema = z
  .object({
    thinking: ThinkingSchema.exactOptional(),
    parameters: z
      .string()
      .exactOptional()
      .openapi({ description: 'Model parameter settings serialized as text' }),
    license: z.string().exactOptional().openapi({ description: 'The license of the model' }),
    modified_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last modified timestamp in ISO 8601 format' }),
    details: z.object({}).exactOptional().openapi({ description: 'High-level model details' }),
    template: z
      .string()
      .exactOptional()
      .openapi({ description: 'The template used by the model to render prompts' }),
    renderer: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The effective chat renderer of the model (aliases resolved), when one is set',
      }),
    parser: z
      .string()
      .exactOptional()
      .openapi({ description: 'The output parser configured on the model, when one is set' }),
    template_source: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Where the chat prompt actually comes from; one of `renderer_parser`, `renderer`, `parser` (a Go renderer runs and any packaged template is inert), `harmony`, `go_template`, `gguf_chat_template` (the runner renders the GGUF's embedded jinja), or `none`",
      }),
    capabilities: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of supported features' }),
    model_info: z.object({}).exactOptional().openapi({ description: 'Additional model metadata' }),
  })
  .openapi({ required: [] })
  .openapi('ShowResponse')

const ModelSummarySchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Model name' }),
    model: z.string().exactOptional().openapi({ description: 'Model name' }),
    remote_model: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the upstream model, if the model is remote' }),
    remote_host: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL of the upstream Ollama host, if the model is remote' }),
    modified_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last modified timestamp in ISO 8601 format' }),
    size: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total size of the model on disk in bytes' }),
    digest: z
      .string()
      .exactOptional()
      .openapi({ description: 'SHA256 digest identifier of the model contents' }),
    details: z
      .object({
        format: z
          .string()
          .exactOptional()
          .openapi({ description: 'Model file format (for example `gguf`)' }),
        family: z
          .string()
          .exactOptional()
          .openapi({ description: 'Primary model family (for example `llama`)' }),
        families: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'All families the model belongs to, when applicable' }),
        parameter_size: z
          .string()
          .exactOptional()
          .openapi({ description: 'Approximate parameter count label (for example `7B`, `13B`)' }),
        quantization_level: z
          .string()
          .exactOptional()
          .openapi({ description: 'Quantization level used (for example `Q4_0`)' }),
      })
      .exactOptional()
      .openapi({
        description: "Additional information about the model's format and family",
        required: [],
      }),
  })
  .openapi({ description: 'Summary information for a locally available model', required: [] })
  .openapi('ModelSummary')

const ListResponseSchema = z
  .object({ models: z.array(ModelSummarySchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ListResponse')

const PsSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Name of the running model' }),
    model: z.string().exactOptional().openapi({ description: 'Name of the running model' }),
    size: z.int().exactOptional().openapi({ description: 'Size of the model in bytes' }),
    digest: z.string().exactOptional().openapi({ description: 'SHA256 digest of the model' }),
    details: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Model details such as format and family' }),
    expires_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time when the model will be unloaded' }),
    size_vram: z.int().exactOptional().openapi({ description: 'VRAM usage in bytes' }),
    context_length: z
      .int()
      .exactOptional()
      .openapi({ description: 'Context length for the running model' }),
  })
  .openapi({ required: [] })
  .openapi('Ps')

const PsResponseSchema = z
  .object({
    models: z.array(PsSchema).exactOptional().openapi({ description: 'Currently running models' }),
  })
  .openapi({ required: [] })
  .openapi('PsResponse')

const WebSearchRequestSchema = z
  .object({
    query: z.string().openapi({ description: 'Search query string' }),
    max_results: z
      .int()
      .min(1)
      .max(10)
      .default(5)
      .exactOptional()
      .openapi({ description: 'Maximum number of results to return' }),
  })
  .openapi({ required: ['query'] })
  .openapi('WebSearchRequest')

const WebSearchResultSchema = z
  .object({
    title: z.string().exactOptional().openapi({ description: 'Page title of the result' }),
    url: z.url().exactOptional().openapi({ description: 'Resolved URL for the result' }),
    content: z.string().exactOptional().openapi({ description: 'Extracted text content snippet' }),
  })
  .openapi({ required: [] })
  .openapi('WebSearchResult')

const WebSearchResponseSchema = z
  .object({
    results: z
      .array(WebSearchResultSchema)
      .exactOptional()
      .openapi({ description: 'Array of matching search results' }),
  })
  .openapi({ required: [] })
  .openapi('WebSearchResponse')

const WebFetchRequestSchema = z
  .object({ url: z.url().openapi({ description: 'The URL to fetch' }) })
  .openapi({ required: ['url'] })
  .openapi('WebFetchRequest')

const WebFetchResponseSchema = z
  .object({
    title: z.string().exactOptional().openapi({ description: 'Title of the fetched page' }),
    content: z.string().exactOptional().openapi({ description: 'Extracted page content' }),
    links: z.array(z.url()).exactOptional().openapi({ description: 'Links found on the page' }),
  })
  .openapi({ required: [] })
  .openapi('WebFetchResponse')

const VersionResponseSchema = z
  .object({ version: z.string().exactOptional().openapi({ description: 'Version of Ollama' }) })
  .openapi({ required: [] })
  .openapi('VersionResponse')

const SystemOneContentSchema = z
  .xor([z.string().regex(/\S/), z.looseObject({}), z.array(z.any())])
  .openapi({
    description:
      'A nonempty string, or an object or array serialized as JSON text. Not interpreted as chat messages or multimodal input.',
  })
  .openapi('SystemOneContent')

const SystemOneChoiceQuestionSchema = z
  .object({
    type: z.literal('choice'),
    instructions: SystemOneContentSchema,
    criteria: z
      .record(z.string(), z.string().nullable())
      .refine((val) => Object.keys(val).length >= 2)
      .refine((val) => Object.keys(val).length <= 255)
      .superRefine((o, ctx) => {
        const regex = new RegExp('\\S')
        for (const k of Object.keys(o)) {
          if (!regex.test(k)) {
            ctx.addIssue({ code: 'custom', path: [k] })
          }
        }
      })
      .openapi({
        description:
          "Option keys mapped to descriptions, or null for a bare label. Keys must not be blank; ties follow the model's option order. The option limit depends on the model.",
      }),
  })
  .openapi({ title: 'Choice', required: ['type', 'instructions', 'criteria'] })
  .openapi('SystemOneChoiceQuestion')

const SystemOneNoulQuestionSchema = z
  .object({
    type: z.literal('noul'),
    instructions: SystemOneContentSchema,
    criteria: z
      .strictObject({ false: z.string().exactOptional(), true: z.string().exactOptional() })
      .exactOptional()
      .openapi({
        description:
          'Optional descriptions for the two outcomes. Omitted entries use model-specific defaults.',
        required: [],
      }),
  })
  .openapi({ title: 'Noul', required: ['type', 'instructions'] })
  .openapi('SystemOneNoulQuestion')

const SystemOneScoreQuestionSchema = z
  .object({
    type: z.literal('score'),
    instructions: SystemOneContentSchema,
    criteria: z
      .array(z.string())
      .min(2)
      .max(10)
      .openapi({
        description:
          'Descriptions ordered from the lowest score (index 0) to the highest. Defines a scale from 0 to the number of criteria minus 1.',
      }),
  })
  .openapi({ title: 'Score', required: ['type', 'instructions', 'criteria'] })
  .openapi('SystemOneScoreQuestion')

const SystemOneRequestSchema = z
  .object({
    model: z
      .string()
      .regex(/\S/)
      .openapi({
        description:
          "Model trained for System One, such as nimble, or clef:cloud for Ollama's cloud.",
      }),
    state: SystemOneContentSchema,
    images: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Base64-encoded images shared by all questions, in request order. Requires a model with vision, such as Clef. Models with audio input also accept WAV clips here. URLs and data URLs are not supported.',
      }),
    questions: z
      .record(
        z.string(),
        z.xor([
          SystemOneChoiceQuestionSchema,
          SystemOneNoulQuestionSchema,
          SystemOneScoreQuestionSchema,
        ]),
      )
      .refine((val) => Object.keys(val).length >= 1)
      .refine((val) => Object.keys(val).length <= 64)
      .superRefine((o, ctx) => {
        const regex = new RegExp('\\S')
        for (const k of Object.keys(o)) {
          if (!regex.test(k)) {
            ctx.addIssue({ code: 'custom', path: [k] })
          }
        }
      })
      .openapi({
        description:
          'Named questions about the shared state. Answers are not passed to later questions. Cloud models accept names of up to 100 ASCII letters, digits, `_`, `.`, or `-`.',
      }),
    keep_alive: z
      .xor([z.string(), z.number()])
      .exactOptional()
      .openapi({
        description:
          "How long to keep the model loaded after the request, as a duration string (such as 5m) or seconds. Zero unloads after the request; a negative value keeps it loaded. Defaults to the server's keep-alive setting (5m unless configured otherwise).",
      }),
  })
  .openapi({ required: ['model', 'state', 'questions'] })
  .openapi('SystemOneRequest')

const SystemOneProbabilitiesSchema = z
  .record(z.string(), z.number().min(0).max(1))
  .openapi({
    description:
      'Probabilities normalized over the supplied candidates, summing to 1 subject to floating-point precision.',
  })
  .openapi('SystemOneProbabilities')

const SystemOneConfidenceSchema = z
  .number()
  .min(0)
  .max(1)
  .openapi({
    description:
      'Distribution concentration, calculated as 1 - H(p) / ln(N), where H(p) is entropy and N is the candidate count. Zero means uniform probabilities; values near 1 mean one candidate dominates. Not calibrated correctness.',
  })
  .openapi('SystemOneConfidence')

const SystemOneChoiceAnswerSchema = z
  .object({
    type: z.literal('choice'),
    choice: z
      .string()
      .openapi({
        description:
          "Option key with the highest probability. Ties follow the model's option order.",
      }),
    probabilities: SystemOneProbabilitiesSchema,
    confidence: SystemOneConfidenceSchema,
  })
  .openapi({ title: 'Choice', required: ['type', 'choice', 'probabilities', 'confidence'] })
  .openapi('SystemOneChoiceAnswer')

const SystemOneNoulAnswerSchema = z
  .object({
    type: z.literal('noul'),
    noul: z
      .number()
      .min(0)
      .max(1)
      .openapi({
        description:
          'Probability of true among the false and true candidates. This is a number, not a Boolean.',
      }),
  })
  .openapi({ title: 'Noul', required: ['type', 'noul'] })
  .openapi('SystemOneNoulAnswer')

const SystemOneScoreAnswerSchema = z
  .object({
    type: z.literal('score'),
    score: z
      .number()
      .min(0)
      .max(9)
      .openapi({
        description:
          'Probability-weighted average of the zero-based criterion indices, from 0 to the number of criteria minus 1. Not rounded to a level or normalized to 0–1.',
      }),
    legend: z
      .record(z.string(), z.string())
      .openapi({
        description: 'Zero-based indices as string keys mapped to the criterion descriptions.',
      }),
    probabilities: SystemOneProbabilitiesSchema.openapi({
      description: 'Probabilities keyed by zero-based criterion indices as strings.',
    }),
    confidence: SystemOneConfidenceSchema,
  })
  .openapi({ title: 'Score', required: ['type', 'score', 'legend', 'probabilities', 'confidence'] })
  .openapi('SystemOneScoreAnswer')

const SystemOneResponseSchema = z
  .object({
    model: z.string().openapi({ description: 'Model name from the request.' }),
    answers: z
      .record(
        z.string(),
        z.xor([SystemOneChoiceAnswerSchema, SystemOneNoulAnswerSchema, SystemOneScoreAnswerSchema]),
      )
      .openapi({ description: 'Answers keyed by the question names in the request.' }),
    usage: z
      .object({
        input_tokens: z
          .int()
          .min(0)
          .openapi({
            description:
              'Total evaluated input tokens, including image positions. Shared context is counted again when the model scores questions separately.',
          }),
        output_tokens: z
          .int()
          .min(0)
          .openapi({
            description:
              'Tokens generated internally for scoring, including prefix preparation and retries. May exceed the question count; not the length of the JSON response.',
          }),
      })
      .openapi({ required: ['input_tokens', 'output_tokens'] }),
  })
  .openapi({ required: ['model', 'answers', 'usage'] })
  .openapi('SystemOneResponse')

const UsageMetricsSchema = z
  .object({
    request_count: z.int().min(0).openapi({ description: 'Number of recorded requests.' }),
    usage_usd: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Total value of the requests in USD, including usage covered by your plan and usage paid from purchased credits.',
      }),
    input_tokens: z
      .int()
      .exactOptional()
      .openapi({ description: 'Recorded input tokens, including cached input tokens.' }),
    cached_input_tokens: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Recorded input tokens read from cache, already included in input_tokens.',
      }),
    output_tokens: z.int().exactOptional().openapi({ description: 'Recorded output tokens.' }),
  })
  .openapi({ required: ['request_count'] })
  .openapi('UsageMetrics')

const UsageGroupSchema = UsageMetricsSchema.and(
  z
    .object({ model: z.string().openapi({ description: 'Model name.' }) })
    .openapi({ required: ['model'] }),
).openapi('UsageGroup')

const UsageSummarySchema = UsageMetricsSchema.and(
  z
    .object({
      groups: z
        .array(UsageGroupSchema)
        .exactOptional()
        .openapi({
          description:
            'Present when group_by is requested. Currently returns up to 10 groups selected across the entire range, ranked by usage_usd or by request_count when the range includes legacy requests. Groups use the same order in every bucket; groups without requests in a bucket are omitted.',
        }),
      remainder: UsageMetricsSchema.exactOptional().openapi({
        description:
          'Combined usage from groups outside the current limit. Omitted when there are no requests from additional groups.',
      }),
    })
    .openapi({ required: [] }),
).openapi('UsageSummary')

const UsageBucketSchema = UsageSummarySchema.and(
  z
    .object({
      from: z.iso
        .datetime({ offset: true })
        .openapi({ description: 'Start of the bucket in UTC, inclusive.' }),
      until: z.iso
        .datetime({ offset: true })
        .openapi({ description: 'End of the bucket in UTC, exclusive.' }),
      partial: z
        .boolean()
        .exactOptional()
        .openapi({
          description: 'Present and true for the current hour or day, which is still in progress.',
        }),
    })
    .openapi({ required: ['from', 'until'] }),
).openapi('UsageBucket')

const UsageResponseSchema = z
  .object({
    range: z.enum(['24h', '7d', '30d']).openapi({ description: 'Selected time range.' }),
    scope: z.enum(['self', 'team']).openapi({ description: 'Selected usage scope.' }),
    granularity: z
      .enum(['hour', 'day'])
      .openapi({ description: 'Set automatically: hour for 24h, day for 7d and 30d.' }),
    group_by: z
      .literal('model')
      .exactOptional()
      .openapi({ description: 'Selected grouping. Present when group_by is requested.' }),
    from: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Start of the range in UTC, inclusive.' }),
    until: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'End of the range in UTC, exclusive.' }),
    totals: UsageSummarySchema.openapi({
      description: 'Usage across the entire range, including groups in the remainder.',
    }),
    buckets: z
      .array(UsageBucketSchema)
      .openapi({
        description: 'Usage in chronological order, including buckets with no recorded requests.',
      }),
  })
  .openapi({ required: ['range', 'scope', 'granularity', 'from', 'until', 'totals', 'buckets'] })
  .openapi('UsageResponse')

const IncludedBalanceSchema = z
  .object({
    balance_usd: z.number().openapi({ description: 'Remaining included credits in USD.' }),
    allowance_usd: z
      .number()
      .openapi({ description: 'Included credits available for the full period in USD.' }),
    period: z
      .object({
        from: z.iso
          .datetime({ offset: true })
          .openapi({ description: 'Start of the included period in UTC, inclusive.' }),
        until: z.iso
          .datetime({ offset: true })
          .openapi({ description: 'End of the included period in UTC, exclusive.' }),
      })
      .openapi({ required: ['from', 'until'] }),
  })
  .openapi({ title: 'Included credits', required: ['balance_usd', 'allowance_usd', 'period'] })
  .openapi('IncludedBalance')

const LegacyBalanceLimitSchema = z
  .object({
    remaining_percent: z
      .number()
      .min(0)
      .max(100)
      .openapi({ description: 'Percentage of the limit remaining.' }),
    resets_at: z.iso.datetime({ offset: true }).openapi({ description: 'Next reset time in UTC.' }),
  })
  .openapi({ required: ['remaining_percent', 'resets_at'] })
  .openapi('LegacyBalanceLimit')

const LegacyIncludedBalanceSchema = z
  .object({ session: LegacyBalanceLimitSchema, weekly: LegacyBalanceLimitSchema })
  .openapi({ title: 'Legacy plan limits', required: ['session', 'weekly'] })
  .openapi('LegacyIncludedBalance')

const BalanceResponseSchema = z
  .object({
    included: z.xor([IncludedBalanceSchema, LegacyIncludedBalanceSchema]),
    purchased: z
      .object({
        balance_usd: z
          .number()
          .openapi({ description: 'Remaining unexpired purchased credits in USD.' }),
      })
      .openapi({ required: ['balance_usd'] }),
  })
  .openapi({ required: ['included', 'purchased'] })
  .openapi('BalanceResponse')

const ErrorResponseSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error message describing what went wrong' }),
  })
  .openapi({ required: [] })
  .openapi('ErrorResponse')

const DigestParamParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'digest',
      in: 'path',
      required: true,
      description: 'SHA256 digest identifier, prefixed with `sha256:`',
      schema: { type: 'string' },
    },
  })

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer', bearerFormat: 'API Key' }

export const postV1SystemoneRoute = createRoute({
  method: 'post',
  path: '/v1/systemone',
  summary: 'Answer typed questions',
  description:
    "Answer choice, yes/no, and scoring questions with a System One model, locally or in Ollama's cloud. Requires Ollama v0.35.0 or later, or v0.40.5 or later for cloud models. See the [decision guide](/capabilities/decision) for examples.\n",
  operationId: 'systemone',
  request: {
    body: {
      content: {
        'application/json': {
          schema: SystemOneRequestSchema,
          example: {
            model: 'nimble',
            state: 'Our checkout has returned 500 errors since 9am.',
            questions: {
              label: {
                type: 'choice',
                instructions: 'Which label fits this ticket?',
                criteria: {
                  billing: 'Payments and refunds',
                  bug: 'Software errors',
                  account: 'Login and account access',
                },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Answers and token usage for all questions. Example probabilities and confidence are rounded to four decimal places; results and usage can vary with the model and server configuration.',
      content: {
        'application/json': {
          schema: SystemOneResponseSchema,
          example: {
            model: 'nimble',
            answers: {
              label: {
                type: 'choice',
                choice: 'bug',
                probabilities: { billing: 0.0125, bug: 0.9781, account: 0.0093 },
                confidence: 0.8906,
              },
            },
            usage: { input_tokens: 174, output_tokens: 1 },
          },
        },
      },
    },
    400: {
      description:
        "Invalid request, unsupported model or runner, or a rendered prompt that exceeds the loaded context or a cloud model's token limit.",
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description:
        'A cloud model was requested without signing in, or with an invalid API key. Through a local server, the response includes a `signin_url`.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    402: {
      description:
        "The cloud model isn't included in the Free plan. Add usage credits or upgrade. Also returned when a payment fails.",
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Model not found. Download a local model before making a request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    413: {
      description:
        "Local text and schema exceed 64 KiB or the request exceeds 32 MiB, or a cloud request exceeds 13 MiB or the model's context window.",
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'text and schema must not exceed 64 KiB' },
        },
      },
    },
    500: {
      description: 'Model loading, rendering, or scoring failed.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{}, { bearerAuth: [] }],
  servers: [
    { url: 'http://localhost:11434', description: 'Ollama' },
    { url: 'https://ollama.com', description: "Ollama's cloud" },
  ],
})

export const postApiGenerateRoute = createRoute({
  method: 'post',
  path: '/api/generate',
  summary: 'Generate a response',
  description: 'Generates a response for the provided prompt',
  operationId: 'generate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: GenerateRequestSchema,
          example: { model: 'gemma4', prompt: 'Why is the sky blue?' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Generation responses',
      content: {
        'application/json': {
          schema: GenerateResponseSchema,
          example: {
            model: 'gemma4',
            created_at: '2025-10-17T23:14:07.414671Z',
            response: 'Hello! How can I help you today?',
            done: true,
            done_reason: 'stop',
            total_duration: 174560334,
            load_duration: 101397084,
            prompt_eval_count: 11,
            prompt_eval_duration: 13074791,
            eval_count: 18,
            eval_duration: 52479709,
          },
        },
        'application/x-ndjson': { schema: GenerateStreamEventSchema },
      },
    },
  },
})

export const postApiChatRoute = createRoute({
  method: 'post',
  path: '/api/chat',
  summary: 'Generate a chat message',
  description: 'Generate the next chat message in a conversation between a user and an assistant.',
  operationId: 'chat',
  request: {
    body: { content: { 'application/json': { schema: ChatRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Chat response',
      content: {
        'application/json': {
          schema: ChatResponseSchema,
          example: {
            model: 'gemma4',
            created_at: '2025-10-17T23:14:07.414671Z',
            message: { role: 'assistant', content: 'Hello! How can I help you today?' },
            done: true,
            done_reason: 'stop',
            total_duration: 174560334,
            load_duration: 101397084,
            prompt_eval_count: 11,
            prompt_eval_duration: 13074791,
            eval_count: 18,
            eval_duration: 52479709,
          },
        },
        'application/x-ndjson': { schema: ChatStreamEventSchema },
      },
    },
  },
})

export const postApiEmbedRoute = createRoute({
  method: 'post',
  path: '/api/embed',
  summary: 'Generate embeddings',
  description: 'Creates vector embeddings representing the input text',
  operationId: 'embed',
  request: {
    body: {
      content: {
        'application/json': {
          schema: EmbedRequestSchema,
          example: { model: 'embeddinggemma', input: 'Generate embeddings for this text' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Vector embeddings for the input text',
      content: {
        'application/json': {
          schema: EmbedResponseSchema,
          example: {
            model: 'embeddinggemma',
            embeddings: [
              [
                0.010071029, -0.0017594862, 0.05007221, 0.04692972, 0.054916814, 0.008599704,
                0.105441414, -0.025878139, 0.12958129, 0.031952348,
              ],
            ],
            total_duration: 14143917,
            load_duration: 1019500,
            prompt_eval_count: 8,
          },
        },
      },
    },
  },
})

export const getApiTagsRoute = createRoute({
  method: 'get',
  path: '/api/tags',
  summary: 'List models',
  description: 'Fetch a list of models and their details',
  operationId: 'list',
  responses: {
    200: {
      description: 'List available models',
      content: {
        'application/json': {
          schema: ListResponseSchema,
          example: {
            models: [
              {
                name: 'gemma4',
                model: 'gemma4',
                modified_at: '2025-10-03T23:34:03.409490317-07:00',
                size: 9608350245,
                digest: 'c6eb396dbd5992bbe3f5cdb947e8bbc0ee413d7c17e2beaae69f5d569cf982eb',
                details: {
                  format: 'gguf',
                  family: 'gemma4',
                  families: ['gemma4'],
                  parameter_size: '8.0B',
                  quantization_level: 'Q4_K_M',
                },
              },
            ],
          },
        },
      },
    },
  },
})

export const getApiPsRoute = createRoute({
  method: 'get',
  path: '/api/ps',
  summary: 'List running models',
  description: 'Retrieve a list of models that are currently running',
  operationId: 'ps',
  responses: {
    200: {
      description: 'Models currently loaded into memory',
      content: {
        'application/json': {
          schema: PsResponseSchema,
          example: {
            models: [
              {
                name: 'gemma4',
                model: 'gemma4',
                size: 6591830464,
                digest: 'c6eb396dbd5992bbe3f5cdb947e8bbc0ee413d7c17e2beaae69f5d569cf982eb',
                details: {
                  parent_model: '',
                  format: 'gguf',
                  family: 'gemma4',
                  families: ['gemma4'],
                  parameter_size: '8.0B',
                  quantization_level: 'Q4_K_M',
                },
                expires_at: '2025-10-17T16:47:07.93355-07:00',
                size_vram: 5333539264,
                context_length: 4096,
              },
            ],
          },
        },
      },
    },
  },
})

export const postApiShowRoute = createRoute({
  method: 'post',
  path: '/api/show',
  summary: 'Show model details',
  operationId: 'show',
  request: {
    body: {
      content: { 'application/json': { schema: ShowRequestSchema, example: { model: 'gemma4' } } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Model information',
      content: {
        'application/json': {
          schema: ShowResponseSchema,
          example: {
            parameters: 'temperature 0.7\nnum_ctx 2048',
            license: 'Gemma Terms of Use \n\nLast modified: February 21, 2024...',
            capabilities: ['completion', 'thinking', 'vision'],
            thinking: { values: [false, true], default: true },
            modified_at: '2025-08-14T15:49:43.634137516-07:00',
            details: {
              parent_model: '',
              format: 'gguf',
              family: 'gemma4',
              families: ['gemma4'],
              parameter_size: '8.0B',
              quantization_level: 'Q4_K_M',
            },
            model_info: {
              'gemma4.attention.head_count': 8,
              'gemma4.attention.head_count_kv': 2,
              'gemma4.attention.key_length': 512,
              'gemma4.attention.key_length_swa': 256,
              'gemma4.attention.layer_norm_rms_epsilon': 0.000001,
              'gemma4.attention.shared_kv_layers': 18,
              'gemma4.attention.sliding_window': 512,
              'gemma4.attention.value_length': 512,
              'gemma4.attention.value_length_swa': 256,
              'gemma4.audio.attention.head_count': 8,
              'gemma4.audio.attention.layer_norm_epsilon': 0.000001,
              'gemma4.audio.block_count': 12,
              'gemma4.audio.conv_kernel_size': 5,
              'gemma4.audio.embedding_length': 1024,
              'gemma4.audio.feed_forward_length': 4096,
              'gemma4.block_count': 42,
              'gemma4.context_length': 131072,
              'gemma4.embedding_length': 2560,
              'gemma4.embedding_length_per_layer_input': 256,
              'gemma4.feed_forward_length': 10240,
              'gemma4.final_logit_softcapping': 30,
              'gemma4.rope.dimension_count': 512,
              'gemma4.rope.dimension_count_swa': 256,
              'gemma4.rope.freq_base': 1000000,
              'gemma4.rope.freq_base_swa': 10000,
              'gemma4.vision.attention.head_count': 12,
              'gemma4.vision.attention.layer_norm_epsilon': 0.000001,
              'gemma4.vision.block_count': 16,
              'gemma4.vision.embedding_length': 768,
              'gemma4.vision.feed_forward_length': 3072,
              'gemma4.vision.num_channels': 3,
              'gemma4.vision.patch_size': 16,
              'gemma4.vision.projector.scale_factor': 3,
              'general.architecture': 'gemma4',
              'general.file_type': 15,
              'general.quantization_version': 2,
              'tokenizer.ggml.add_bos_token': false,
              'tokenizer.ggml.add_eos_token': false,
              'tokenizer.ggml.add_mask_token': false,
              'tokenizer.ggml.add_padding_token': false,
              'tokenizer.ggml.add_unknown_token': false,
              'tokenizer.ggml.bos_token_id': 2,
              'tokenizer.ggml.eos_token_id': 1,
              'tokenizer.ggml.eos_token_ids': [1, 106, 50],
              'tokenizer.ggml.mask_token_id': 4,
              'tokenizer.ggml.merges': null,
              'tokenizer.ggml.model': 'llama',
              'tokenizer.ggml.padding_token_id': 0,
              'tokenizer.ggml.pre': 'gemma4',
              'tokenizer.ggml.scores': null,
              'tokenizer.ggml.token_type': null,
              'tokenizer.ggml.tokens': null,
              'tokenizer.ggml.unknown_token_id': 3,
            },
          },
        },
      },
    },
  },
})

export const postApiCreateRoute = createRoute({
  method: 'post',
  path: '/api/create',
  summary: 'Create a model',
  operationId: 'create',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CreateRequestSchema,
          example: {
            model: 'mario',
            from: 'gemma4',
            system: 'You are Mario from Super Mario Bros.',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Stream of create status updates',
      content: {
        'application/json': { schema: StatusResponseSchema, example: { status: 'success' } },
        'application/x-ndjson': { schema: StatusEventSchema, example: { status: 'success' } },
      },
    },
  },
})

export const postApiBlobsDigestRoute = createRoute({
  method: 'post',
  path: '/api/blobs/{digest}',
  summary: 'Push a blob',
  operationId: 'createBlob',
  request: {
    params: z.object({ digest: DigestParamParamsSchema }),
    body: {
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Blob already exists' },
    201: { description: 'Blob created' },
    400: {
      description: 'Invalid digest or blob content',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Failed to write blob',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const headApiBlobsDigestRoute = createRoute({
  method: 'head',
  path: '/api/blobs/{digest}',
  summary: 'Check if a blob exists',
  operationId: 'headBlob',
  request: { params: z.object({ digest: DigestParamParamsSchema }) },
  responses: {
    200: { description: 'Blob exists' },
    400: {
      description: 'Invalid digest',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Blob not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Failed to inspect blob',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postApiCopyRoute = createRoute({
  method: 'post',
  path: '/api/copy',
  summary: 'Copy a model',
  operationId: 'copy',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CopyRequestSchema,
          example: { source: 'gemma4', destination: 'gemma4-backup' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Model successfully copied',
      content: {
        'application/json': { schema: StatusResponseSchema, example: { status: 'success' } },
      },
    },
    400: {
      description: 'Model could not be copied',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Source model not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postApiPullRoute = createRoute({
  method: 'post',
  path: '/api/pull',
  summary: 'Pull a model',
  operationId: 'pull',
  request: {
    body: {
      content: { 'application/json': { schema: PullRequestSchema, example: { model: 'gemma4' } } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Pull status updates.',
      content: {
        'application/json': { schema: StatusResponseSchema, example: { status: 'success' } },
        'application/x-ndjson': { schema: StatusEventSchema, example: { status: 'success' } },
      },
    },
  },
})

export const postApiPushRoute = createRoute({
  method: 'post',
  path: '/api/push',
  summary: 'Push a model',
  operationId: 'push',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PushRequestSchema,
          example: { model: 'my-username/my-model' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Push status updates.',
      content: {
        'application/json': { schema: StatusResponseSchema, example: { status: 'success' } },
        'application/x-ndjson': { schema: StatusEventSchema, example: { status: 'success' } },
      },
    },
  },
})

export const deleteApiDeleteRoute = createRoute({
  method: 'delete',
  path: '/api/delete',
  summary: 'Delete a model',
  operationId: 'delete',
  request: {
    body: {
      content: {
        'application/json': { schema: DeleteRequestSchema, example: { model: 'gemma4' } },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Model successfully deleted' } },
})

export const getApiVersionRoute = createRoute({
  method: 'get',
  path: '/api/version',
  summary: 'Get version',
  description: 'Retrieve the version of the Ollama',
  operationId: 'version',
  responses: {
    200: {
      description: 'Version information',
      content: {
        'application/json': { schema: VersionResponseSchema, example: { version: '0.12.6' } },
      },
    },
  },
})

export const getApiUsageRoute = createRoute({
  method: 'get',
  path: '/api/usage',
  summary: 'Cloud usage',
  description: 'Usage statistics for cloud inference, web search, and web fetch.',
  operationId: 'usage',
  request: {
    query: z.object({
      range: z
        .enum(['24h', '7d', '30d'])
        .default('7d')
        .exactOptional()
        .openapi({
          param: {
            name: 'range',
            in: 'query',
            description:
              'Completed UTC hours or days to include, plus the current partial hour or day.',
            schema: { type: 'string', enum: ['24h', '7d', '30d'], default: '7d' },
            required: false,
          },
        }),
      scope: z
        .enum(['self', 'team'])
        .default('self')
        .exactOptional()
        .openapi({
          param: {
            name: 'scope',
            in: 'query',
            description:
              "Your requests, or your team's requests. Team scope requires being a team admin.",
            schema: { type: 'string', enum: ['self', 'team'], default: 'self' },
            required: false,
          },
        }),
      group_by: z
        .literal('model')
        .exactOptional()
        .openapi({
          param: {
            name: 'group_by',
            in: 'query',
            description: 'How to group usage within totals and buckets. Supported values: model.',
            schema: { type: 'string', enum: ['model'] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Usage for the selected range and scope.',
      content: { 'application/json': { schema: UsageResponseSchema } },
    },
    400: {
      description: 'Invalid query parameters.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Invalid credentials.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Account suspended or team scope requested without team admin access.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    429: {
      description: 'Too many requests.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
      headers: z.object({
        'Retry-After': {
          description: 'Seconds to wait before retrying.',
          schema: z
            .int()
            .min(1)
            .exactOptional()
            .openapi({
              description: 'Seconds to wait before retrying.',
              param: { required: false },
            }),
        },
      }),
    },
    503: {
      description: 'Usage reporting is temporarily unavailable.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
  servers: [{ url: 'https://ollama.com', description: "Ollama's cloud" }],
})

export const getApiBalanceRoute = createRoute({
  method: 'get',
  path: '/api/balance',
  summary: 'Balance',
  description: 'Check your remaining usage credits.',
  operationId: 'balance',
  responses: {
    200: {
      description: 'Current included and purchased balances.',
      content: { 'application/json': { schema: BalanceResponseSchema } },
    },
    400: {
      description: 'Invalid query parameters.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Invalid credentials.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Account suspended.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    429: {
      description: 'Too many requests.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
      headers: z.object({
        'Retry-After': {
          description: 'Seconds to wait before retrying.',
          schema: z
            .int()
            .min(1)
            .exactOptional()
            .openapi({
              description: 'Seconds to wait before retrying.',
              param: { required: false },
            }),
        },
      }),
    },
    503: {
      description: 'Balance reporting is temporarily unavailable.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
  servers: [{ url: 'https://ollama.com', description: "Ollama's cloud" }],
})
