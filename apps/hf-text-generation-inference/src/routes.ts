import { createRoute, z } from '@hono/zod-openapi'

const FinishReasonSchema = z
  .enum(['length', 'eos_token', 'stop_sequence'])
  .openapi({ example: 'Length' })
  .openapi('FinishReason')

const PrefillTokenSchema = z
  .object({
    id: z.int32().min(0).openapi({ example: 0 }),
    logprob: z.float32().nullable().openapi({ example: -0.34 }),
    text: z.string().openapi({ example: 'test' }),
  })
  .openapi({ required: ['id', 'text', 'logprob'] })
  .openapi('PrefillToken')

const TokenSchema = z
  .object({
    id: z.int32().min(0).openapi({ example: 0 }),
    logprob: z.float32().nullable().openapi({ example: -0.34 }),
    special: z.boolean().openapi({ example: 'false' }),
    text: z.string().openapi({ example: 'test' }),
  })
  .openapi({ required: ['id', 'text', 'logprob', 'special'] })
  .openapi('Token')

const BestOfSequenceSchema = z
  .object({
    finish_reason: FinishReasonSchema,
    generated_text: z.string().openapi({ example: 'test' }),
    generated_tokens: z.int32().min(0).openapi({ example: 1 }),
    prefill: z.array(PrefillTokenSchema),
    seed: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .nullable()
      .exactOptional()
      .openapi({ type: ['integer', 'null'], format: 'int64', minimum: 0, example: 42 }),
    tokens: z.array(TokenSchema),
    top_tokens: z.array(z.array(TokenSchema)).exactOptional(),
  })
  .openapi({
    required: ['generated_text', 'finish_reason', 'generated_tokens', 'prefill', 'tokens'],
  })
  .openapi('BestOfSequence')

const ChatCompletionTopLogprobSchema = z
  .object({ logprob: z.float32(), token: z.string() })
  .openapi({ required: ['token', 'logprob'] })
  .openapi('ChatCompletionTopLogprob')

const ChatCompletionLogprobSchema = z
  .object({
    logprob: z.float32(),
    token: z.string(),
    top_logprobs: z.array(ChatCompletionTopLogprobSchema),
  })
  .openapi({ required: ['token', 'logprob', 'top_logprobs'] })
  .openapi('ChatCompletionLogprob')

const ChatCompletionLogprobsSchema = z
  .object({ content: z.array(ChatCompletionLogprobSchema) })
  .openapi({ required: ['content'] })
  .openapi('ChatCompletionLogprobs')

const TextMessageSchema = z
  .object({
    content: z.string().openapi({ example: 'My name is David and I' }),
    role: z.string().openapi({ example: 'user' }),
    tool_call_id: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['role', 'content'] })
  .openapi('TextMessage')

const FunctionDefinitionSchema = z
  .object({
    arguments: z.any(),
    description: z.string().nullable().exactOptional(),
    name: z.string(),
  })
  .openapi({ required: ['name', 'arguments'] })
  .openapi('FunctionDefinition')

const ToolCallSchema = z
  .object({ function: FunctionDefinitionSchema, id: z.string(), type: z.string() })
  .openapi({ required: ['id', 'type', 'function'] })
  .openapi('ToolCall')

const ToolCallMessageSchema = z
  .object({
    role: z.string().openapi({ example: 'assistant' }),
    tool_calls: z.array(ToolCallSchema),
  })
  .openapi({ required: ['role', 'tool_calls'] })
  .openapi('ToolCallMessage')

const OutputMessageSchema = z
  .xor([TextMessageSchema, ToolCallMessageSchema])
  .openapi('OutputMessage')

const ChatCompletionCompleteSchema = z
  .object({
    finish_reason: z.string(),
    index: z.int32().min(0),
    logprobs: ChatCompletionLogprobsSchema.nullable().exactOptional(),
    message: OutputMessageSchema,
  })
  .openapi({ required: ['index', 'message', 'finish_reason'] })
  .openapi('ChatCompletionComplete')

const UsageSchema = z
  .object({
    completion_tokens: z.int32().min(0),
    prompt_tokens: z.int32().min(0),
    total_tokens: z.int32().min(0),
  })
  .openapi({ required: ['prompt_tokens', 'completion_tokens', 'total_tokens'] })
  .openapi('Usage')

const ChatCompletionSchema = z
  .object({
    choices: z.array(ChatCompletionCompleteSchema),
    created: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({ type: 'integer', format: 'int64', minimum: 0, example: '1706270835' }),
    id: z.string(),
    model: z.string().openapi({ example: 'mistralai/Mistral-7B-Instruct-v0.2' }),
    system_fingerprint: z.string(),
    usage: UsageSchema,
  })
  .openapi({ required: ['id', 'created', 'model', 'system_fingerprint', 'choices', 'usage'] })
  .openapi('ChatCompletion')

const FunctionSchema = z
  .object({ arguments: z.string(), name: z.string().nullable().exactOptional() })
  .openapi({ required: ['arguments'] })
  .openapi('Function')

const DeltaToolCallSchema = z
  .object({ function: FunctionSchema, id: z.string(), index: z.int32().min(0), type: z.string() })
  .openapi({ required: ['index', 'id', 'type', 'function'] })
  .openapi('DeltaToolCall')

const ToolCallDeltaSchema = z
  .object({
    role: z.string().openapi({ example: 'assistant' }),
    tool_calls: z.array(DeltaToolCallSchema),
  })
  .openapi({ required: ['role', 'tool_calls'] })
  .openapi('ToolCallDelta')

const ChatCompletionDeltaSchema = z
  .xor([TextMessageSchema, ToolCallDeltaSchema])
  .openapi('ChatCompletionDelta')

const ChatCompletionChoiceSchema = z
  .object({
    delta: ChatCompletionDeltaSchema,
    finish_reason: z.string().nullable().exactOptional(),
    index: z.int32().min(0),
    logprobs: ChatCompletionLogprobsSchema.nullable().exactOptional(),
  })
  .openapi({ required: ['index', 'delta'] })
  .openapi('ChatCompletionChoice')

const ChatCompletionChunkSchema = z
  .object({
    choices: z.array(ChatCompletionChoiceSchema),
    created: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({ type: 'integer', format: 'int64', minimum: 0, example: '1706270978' }),
    id: z.string(),
    model: z.string().openapi({ example: 'mistralai/Mistral-7B-Instruct-v0.2' }),
    system_fingerprint: z.string(),
    usage: UsageSchema.nullable().exactOptional(),
  })
  .openapi({ required: ['id', 'created', 'model', 'system_fingerprint', 'choices'] })
  .openapi('ChatCompletionChunk')

const UrlSchema = z
  .object({ url: z.string() })
  .openapi({ required: ['url'] })
  .openapi('Url')

const MessageChunkSchema = z
  .discriminatedUnion('type', [
    z.object({ text: z.string(), type: z.literal('text') }).openapi({ required: ['text', 'type'] }),
    z
      .object({ image_url: UrlSchema, type: z.literal('image_url') })
      .openapi({ required: ['image_url', 'type'] }),
  ])
  .openapi({ discriminator: { propertyName: 'type' } })
  .openapi('MessageChunk')

const MessageContentSchema = z
  .xor([z.string(), z.array(MessageChunkSchema)])
  .openapi('MessageContent')

const MessageBodySchema = z
  .xor([
    z.object({ content: MessageContentSchema }).openapi({ required: ['content'] }),
    z.object({ tool_calls: z.array(ToolCallSchema) }).openapi({ required: ['tool_calls'] }),
  ])
  .openapi('MessageBody')

const MessageSchema = MessageBodySchema.and(
  z
    .object({
      name: z.string().nullable().exactOptional().openapi({ example: '"David"' }),
      role: z.string().openapi({ example: 'user' }),
    })
    .openapi({ required: ['role'] }),
).openapi('Message')

const JsonSchemaConfigSchema = z
  .object({
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional name identifier for the schema' }),
    schema: z.any().openapi({ description: 'The actual JSON schema definition' }),
  })
  .openapi({ required: ['schema'] })
  .openapi('JsonSchemaConfig')

const GrammarTypeSchema = z
  .discriminatedUnion('type', [
    z
      .object({
        type: z.literal('json'),
        value: z
          .any()
          .openapi({
            description:
              'A string that represents a [JSON Schema](https://json-schema.org/).\n\nJSON Schema is a declarative language that allows to annotate JSON documents\nwith types and descriptions.',
          }),
      })
      .openapi({ required: ['type', 'value'] }),
    z
      .object({ type: z.literal('regex'), value: z.string() })
      .openapi({ required: ['type', 'value'] }),
    z
      .object({ type: z.literal('json_schema'), value: JsonSchemaConfigSchema })
      .openapi({ required: ['type', 'value'] }),
  ])
  .openapi({ discriminator: { propertyName: 'type' } })
  .openapi('GrammarType')

const StreamOptionsSchema = z
  .object({
    include_usage: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set, an additional chunk will be streamed before the data: [DONE] message. The usage field on this chunk shows the token usage statistics for the entire request, and the choices field will always be an empty array. All other chunks will also include a usage field, but with a null value.',
        example: 'true',
      }),
  })
  .openapi({ required: [] })
  .openapi('StreamOptions')

const FunctionNameSchema = z
  .object({ name: z.string() })
  .openapi({ required: ['name'] })
  .openapi('FunctionName')

const ToolChoiceSchema = z
  .xor([
    z
      .literal('auto')
      .openapi({
        description:
          'Means the model can pick between generating a message or calling one or more tools.',
      }),
    z
      .literal('none')
      .openapi({
        description: 'Means the model will not call any tool and instead generates a message.',
      }),
    z.literal('required').openapi({ description: 'Means the model must call one or more tools.' }),
    z.object({ function: FunctionNameSchema }).openapi({ required: ['function'] }),
  ])
  .openapi({
    description:
      '<https://platform.openai.com/docs/guides/function-calling/configuring-function-calling-behavior-using-the-tool_choice-parameter>',
  })
  .openapi('ToolChoice')

const ToolSchema = z
  .object({ function: FunctionDefinitionSchema, type: z.string().openapi({ example: 'function' }) })
  .openapi({ required: ['type', 'function'] })
  .openapi('Tool')

const ChatRequestSchema = z
  .object({
    frequency_penalty: z
      .float32()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far,\ndecreasing the model's likelihood to repeat the same line verbatim.",
        example: '1.0',
      }),
    logit_bias: z
      .array(z.float32())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'UNUSED\nModify the likelihood of specified tokens appearing in the completion. Accepts a JSON object that maps tokens\n(specified by their token ID in the tokenizer) to an associated bias value from -100 to 100. Mathematically,\nthe bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model,\nbut values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should\nresult in a ban or exclusive selection of the relevant token.',
      }),
    logprobs: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Whether to return log probabilities of the output tokens or not. If true, returns the log probabilities of each\noutput token returned in the content of message.',
        example: 'false',
      }),
    max_tokens: z
      .int32()
      .min(0)
      .nullable()
      .default(1024)
      .exactOptional()
      .openapi({
        description: 'The maximum number of tokens that can be generated in the chat completion.',
        example: '32',
      }),
    messages: z
      .array(MessageSchema)
      .openapi({
        description: 'A list of messages comprising the conversation so far.',
        example: '[{"role": "user", "content": "What is Deep Learning?"}]',
      }),
    model: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '[UNUSED] ID of the model to use. See the model endpoint compatibility table for details on which models work with the Chat API.',
        example: 'mistralai/Mistral-7B-Instruct-v0.2',
      }),
    n: z
      .int32()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'UNUSED\nHow many chat completion choices to generate for each input message. Note that you will be charged based on the\nnumber of generated tokens across all of the choices. Keep n as 1 to minimize costs.',
        example: '2',
      }),
    presence_penalty: z
      .float32()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far,\nincreasing the model's likelihood to talk about new topics",
        example: 0.1,
      }),
    response_format: GrammarTypeSchema.nullable().default('null').exactOptional(),
    seed: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .nullable()
      .exactOptional()
      .openapi({ type: ['integer', 'null'], format: 'int64', minimum: 0, example: 42 }),
    stop: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Up to 4 sequences where the API will stop generating further tokens.',
        example: 'null',
      }),
    stream: z.boolean().exactOptional(),
    stream_options: StreamOptionsSchema.nullable().exactOptional(),
    temperature: z
      .float32()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while\nlower values like 0.2 will make it more focused and deterministic.\n\nWe generally recommend altering this or `top_p` but not both.',
        example: 1,
      }),
    tool_choice: ToolChoiceSchema.nullable().default('auto').exactOptional(),
    tool_prompt: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A prompt to be appended before the tools',
        example:
          'Given the functions available, please respond with a JSON for a function call with its proper arguments that best answers the given prompt. Respond in the format {name: function name, parameters: dictionary of argument name and its value}.Do not use variables.',
      }),
    tools: z
      .array(ToolSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A list of tools the model may call. Currently, only functions are supported as a tool. Use this to provide a list of\nfunctions the model may generate JSON inputs for.',
        example: 'null',
      }),
    top_logprobs: z
      .int32()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An integer between 0 and 5 specifying the number of most likely tokens to return at each token position, each with\nan associated log probability. logprobs must be set to true if this parameter is used.',
        example: '5',
      }),
    top_p: z
      .float32()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the\ntokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.',
        example: 0.95,
      }),
  })
  .openapi({ required: ['messages'] })
  .openapi('ChatRequest')

const SimpleTokenSchema = z
  .object({
    id: z.int32().min(0).openapi({ example: 0 }),
    start: z.int().min(0).openapi({ example: 0 }),
    stop: z.int().min(0).openapi({ example: 2 }),
    text: z.string().openapi({ example: 'test' }),
  })
  .openapi({ required: ['id', 'text', 'start', 'stop'] })
  .openapi('SimpleToken')

const TokenizeResponseSchema = z.array(SimpleTokenSchema).openapi('TokenizeResponse')

const ChatTokenizeResponseSchema = z
  .object({ templated_text: z.string(), tokenize_response: TokenizeResponseSchema })
  .openapi({ required: ['tokenize_response', 'templated_text'] })
  .openapi('ChatTokenizeResponse')

const CompletionCompleteSchema = z
  .object({
    finish_reason: z.string(),
    index: z.int32().min(0),
    logprobs: z.array(z.float32()).nullable().exactOptional(),
    text: z.string(),
  })
  .openapi({ required: ['index', 'text', 'finish_reason'] })
  .openapi('CompletionComplete')

const ChunkSchema = z
  .object({
    choices: z.array(CompletionCompleteSchema),
    created: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({ type: 'integer', format: 'int64', minimum: 0 }),
    id: z.string(),
    model: z.string(),
    system_fingerprint: z.string(),
  })
  .openapi({ required: ['id', 'created', 'choices', 'model', 'system_fingerprint'] })
  .openapi('Chunk')

const GenerateParametersSchema = z
  .object({
    adapter_id: z
      .string()
      .nullable()
      .default('null')
      .exactOptional()
      .openapi({ description: 'Lora adapter id', example: 'null' }),
    best_of: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Generate best_of sequences and return the one if the highest token logprobs.',
        example: 1,
        default: 'null',
      }),
    decoder_input_details: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Whether to return decoder input token logprobs and ids.' }),
    details: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Whether to return generation details.' }),
    do_sample: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Activate logits sampling.', example: true }),
    frequency_penalty: z
      .float32()
      .gt(-2)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The parameter for frequency penalty. 1.0 means no penalty\nPenalize new tokens based on their existing frequency in the text so far,\ndecreasing the model's likelihood to repeat the same line verbatim.",
        example: 0.1,
        default: 'null',
      }),
    grammar: GrammarTypeSchema.nullable().default('null').exactOptional(),
    max_new_tokens: z
      .int32()
      .min(0)
      .nullable()
      .default(1024)
      .exactOptional()
      .openapi({ description: 'Maximum number of tokens to generate.', example: '20' }),
    repetition_penalty: z
      .float32()
      .gt(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The parameter for repetition penalty. 1.0 means no penalty.\nSee [this paper](https://arxiv.org/pdf/1909.05858.pdf) for more details.',
        example: 1.03,
        default: 'null',
      }),
    return_full_text: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Whether to prepend the prompt to the generated text',
        example: false,
        default: 'null',
      }),
    seed: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: 0,
        default: 'null',
        description: 'Random sampling seed.',
        example: 'null',
        default: 'null',
      }),
    stop: z
      .array(z.string())
      .max(4)
      .exactOptional()
      .openapi({
        description: 'Stop generating tokens if a member of `stop` is generated.',
        example: ['photographer'],
      }),
    temperature: z
      .float32()
      .gt(0)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The value used to module the logits distribution.',
        example: 0.5,
        default: 'null',
      }),
    top_k: z
      .int32()
      .gt(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The number of highest probability vocabulary tokens to keep for top-k-filtering.',
        example: 10,
        default: 'null',
      }),
    top_n_tokens: z
      .int32()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The number of highest probability vocabulary tokens to keep for top-n-filtering.',
        example: 5,
        default: 'null',
      }),
    top_p: z
      .float32()
      .gt(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Top-p value for nucleus sampling.',
        example: 0.95,
        default: 'null',
      }),
    truncate: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Truncate inputs tokens to the given size.',
        example: 'null',
        default: 'null',
      }),
    typical_p: z
      .float32()
      .gt(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Typical Decoding mass\nSee [Typical Decoding for Natural Language Generation](https://arxiv.org/abs/2202.00666) for more information.',
        example: 0.95,
        default: 'null',
      }),
    watermark: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Watermarking with [A Watermark for Large Language Models](https://arxiv.org/abs/2301.10226).',
        example: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('GenerateParameters')

const CompatGenerateRequestSchema = z
  .object({
    inputs: z.string().openapi({ example: 'My name is Olivier and I' }),
    parameters: GenerateParametersSchema.exactOptional(),
    stream: z.boolean().default(false).exactOptional(),
  })
  .openapi({ required: ['inputs'] })
  .openapi('CompatGenerateRequest')

const CompletionFinalSchema = z
  .object({
    choices: z.array(CompletionCompleteSchema),
    created: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({ type: 'integer', format: 'int64', minimum: 0, example: '1706270835' }),
    id: z.string(),
    model: z.string().openapi({ example: 'mistralai/Mistral-7B-Instruct-v0.2' }),
    system_fingerprint: z.string(),
    usage: UsageSchema,
  })
  .openapi({ required: ['id', 'created', 'model', 'system_fingerprint', 'choices', 'usage'] })
  .openapi('CompletionFinal')

const CompletionSchema = z
  .xor([
    ChunkSchema.and(
      z.object({ object: z.literal('text_completion') }).openapi({ required: ['object'] }),
    ),
    CompletionFinalSchema.and(
      z.object({ object: z.literal('text_completion') }).openapi({ required: ['object'] }),
    ),
  ])
  .openapi({ discriminator: { propertyName: 'object' } })
  .openapi('Completion')

const PromptSchema = z.array(z.string()).openapi('Prompt')

const CompletionRequestSchema = z
  .object({
    frequency_penalty: z
      .float32()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far,\ndecreasing the model's likelihood to repeat the same line verbatim.",
        example: '1.0',
      }),
    max_tokens: z
      .int32()
      .min(0)
      .nullable()
      .default(1024)
      .exactOptional()
      .openapi({
        description: 'The maximum number of tokens that can be generated in the chat completion.',
        example: '32',
      }),
    model: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'UNUSED\nID of the model to use. See the model endpoint compatibility table for details on which models work with the Chat API.',
        example: 'mistralai/Mistral-7B-Instruct-v0.2',
      }),
    prompt: PromptSchema,
    repetition_penalty: z.float32().nullable().exactOptional(),
    seed: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .nullable()
      .exactOptional()
      .openapi({ type: ['integer', 'null'], format: 'int64', minimum: 0, example: 42 }),
    stop: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Up to 4 sequences where the API will stop generating further tokens.',
        example: 'null',
      }),
    stream: z.boolean().exactOptional(),
    suffix: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The text to append to the prompt. This is useful for completing sentences or generating a paragraph of text.\nplease see the completion_template field in the model's tokenizer_config.json file for completion template.",
      }),
    temperature: z
      .float32()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while\nlower values like 0.2 will make it more focused and deterministic. We generally recommend altering this or `top_p` but not both.',
        example: 1,
      }),
    top_p: z
      .float32()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the\ntokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.',
        example: 0.95,
      }),
  })
  .openapi({ required: ['prompt'] })
  .openapi('CompletionRequest')

const DetailsSchema = z
  .object({
    best_of_sequences: z.array(BestOfSequenceSchema).nullable().exactOptional(),
    finish_reason: FinishReasonSchema,
    generated_tokens: z.int32().min(0).openapi({ example: 1 }),
    prefill: z.array(PrefillTokenSchema),
    seed: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .nullable()
      .exactOptional()
      .openapi({ type: ['integer', 'null'], format: 'int64', minimum: 0, example: 42 }),
    tokens: z.array(TokenSchema),
    top_tokens: z.array(z.array(TokenSchema)).exactOptional(),
  })
  .openapi({ required: ['finish_reason', 'generated_tokens', 'prefill', 'tokens'] })
  .openapi('Details')

const ErrorResponseSchema = z
  .object({ error: z.string(), error_type: z.string() })
  .openapi({ required: ['error', 'error_type'] })
  .openapi('ErrorResponse')

const GenerateRequestSchema = z
  .object({
    inputs: z.string().openapi({ example: 'My name is Olivier and I' }),
    parameters: GenerateParametersSchema.exactOptional(),
  })
  .openapi({ required: ['inputs'] })
  .openapi('GenerateRequest')

const GenerateResponseSchema = z
  .object({
    details: DetailsSchema.nullable().exactOptional(),
    generated_text: z.string().openapi({ example: 'test' }),
  })
  .openapi({ required: ['generated_text'] })
  .openapi('GenerateResponse')

const InfoSchema = z
  .object({
    docker_label: z.string().nullable().exactOptional().openapi({ example: 'null' }),
    max_best_of: z.int().min(0).openapi({ example: '2' }),
    max_client_batch_size: z.int().min(0).openapi({ example: '32' }),
    max_concurrent_requests: z
      .int()
      .min(0)
      .openapi({ description: 'Router Parameters', example: '128' }),
    max_input_tokens: z.int().min(0).openapi({ example: '1024' }),
    max_stop_sequences: z.int().min(0).openapi({ example: '4' }),
    max_total_tokens: z.int().min(0).openapi({ example: '2048' }),
    model_id: z.string().openapi({ description: 'Model info', example: 'bigscience/blomm-560m' }),
    model_pipeline_tag: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'text-generation' }),
    model_sha: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'e985a63cdc139290c5f700ff1929f0b5942cced2' }),
    router: z.string().openapi({ description: 'Router Info', example: 'text-generation-router' }),
    sha: z.string().nullable().exactOptional().openapi({ example: 'null' }),
    validation_workers: z.int().min(0).openapi({ example: '2' }),
    version: z.string().openapi({ example: '0.5.0' }),
  })
  .openapi({
    required: [
      'model_id',
      'max_concurrent_requests',
      'max_best_of',
      'max_stop_sequences',
      'max_input_tokens',
      'max_total_tokens',
      'validation_workers',
      'max_client_batch_size',
      'router',
      'version',
    ],
  })
  .openapi('Info')

const ModelInfoSchema = z
  .object({
    created: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({ type: 'integer', format: 'int64', minimum: 0, example: 1686935002 }),
    id: z.string().openapi({ example: 'gpt2' }),
    object: z.string().openapi({ example: 'model' }),
    owned_by: z.string().openapi({ example: 'openai' }),
  })
  .openapi({ required: ['id', 'object', 'created', 'owned_by'] })
  .openapi('ModelInfo')

const SagemakerRequestSchema = z
  .xor([CompatGenerateRequestSchema, ChatRequestSchema, CompletionRequestSchema])
  .openapi('SagemakerRequest')

const SagemakerResponseSchema = z
  .xor([GenerateResponseSchema, ChatCompletionSchema, CompletionFinalSchema])
  .openapi('SagemakerResponse')

const StreamDetailsSchema = z
  .object({
    finish_reason: FinishReasonSchema,
    generated_tokens: z.int32().min(0).openapi({ example: 1 }),
    input_length: z.int32().min(0).openapi({ example: 1 }),
    seed: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .nullable()
      .exactOptional()
      .openapi({ type: ['integer', 'null'], format: 'int64', minimum: 0, example: 42 }),
  })
  .openapi({ required: ['finish_reason', 'generated_tokens', 'input_length'] })
  .openapi('StreamDetails')

const StreamResponseSchema = z
  .object({
    details: StreamDetailsSchema.nullable().default('null').exactOptional(),
    generated_text: z
      .string()
      .nullable()
      .default('null')
      .exactOptional()
      .openapi({ example: 'test' }),
    index: z.int32().min(0),
    token: TokenSchema,
    top_tokens: z.array(TokenSchema).exactOptional(),
  })
  .openapi({ required: ['index', 'token'] })
  .openapi('StreamResponse')

const SagemakerStreamResponseSchema = z
  .xor([StreamResponseSchema, ChatCompletionChunkSchema, ChunkSchema])
  .openapi('SagemakerStreamResponse')

export const postRoute = createRoute({
  method: 'post',
  path: '/',
  tags: ['Text Generation Inference'],
  summary: 'Generate tokens if `stream == false` or a stream of token if `stream == true`',
  operationId: 'compat_generate',
  request: {
    body: {
      content: { 'application/json': { schema: CompatGenerateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Generated Text',
      content: {
        'application/json': { schema: z.array(GenerateResponseSchema) },
        'text/event-stream': { schema: StreamResponseSchema },
      },
    },
    422: {
      description: 'Input validation error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Input validation error', error_type: 'validation' },
        },
      },
    },
    424: {
      description: 'Generation Error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Request failed during generation', error_type: 'generation' },
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
    500: {
      description: 'Incomplete generation',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Incomplete generation', error_type: 'incomplete_generation' },
        },
      },
    },
  },
})

export const postChatTokenizeRoute = createRoute({
  method: 'post',
  path: '/chat_tokenize',
  tags: ['Text Generation Inference'],
  summary: 'Template and tokenize ChatRequest',
  operationId: 'get_chat_tokenize',
  request: {
    body: { content: { 'application/json': { schema: ChatRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Templated and tokenized ChatRequest',
      content: { 'application/json': { schema: ChatTokenizeResponseSchema } },
    },
    404: {
      description: 'Failed to tokenize ChatRequest',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postGenerateRoute = createRoute({
  method: 'post',
  path: '/generate',
  tags: ['Text Generation Inference'],
  summary: 'Generate tokens',
  operationId: 'generate',
  request: {
    body: { content: { 'application/json': { schema: GenerateRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Generated Text',
      content: { 'application/json': { schema: GenerateResponseSchema } },
    },
    422: {
      description: 'Input validation error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Input validation error', error_type: 'validation' },
        },
      },
    },
    424: {
      description: 'Generation Error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Request failed during generation', error_type: 'generation' },
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
    500: {
      description: 'Incomplete generation',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Incomplete generation', error_type: 'incomplete_generation' },
        },
      },
    },
  },
})

export const postGenerateStreamRoute = createRoute({
  method: 'post',
  path: '/generate_stream',
  tags: ['Text Generation Inference'],
  summary: 'Generate a stream of token using Server-Sent Events',
  operationId: 'generate_stream',
  request: {
    body: { content: { 'application/json': { schema: GenerateRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Generated Text',
      content: { 'text/event-stream': { schema: StreamResponseSchema } },
    },
    422: {
      description: 'Input validation error',
      content: {
        'text/event-stream': {
          schema: ErrorResponseSchema,
          example: { error: 'Input validation error', error_type: 'validation' },
        },
      },
    },
    424: {
      description: 'Generation Error',
      content: {
        'text/event-stream': {
          schema: ErrorResponseSchema,
          example: { error: 'Request failed during generation', error_type: 'generation' },
        },
      },
    },
    429: {
      description: 'Model is overloaded',
      content: {
        'text/event-stream': {
          schema: ErrorResponseSchema,
          example: { error: 'Model is overloaded', error_type: 'overloaded' },
        },
      },
    },
    500: {
      description: 'Incomplete generation',
      content: {
        'text/event-stream': {
          schema: ErrorResponseSchema,
          example: { error: 'Incomplete generation', error_type: 'incomplete_generation' },
        },
      },
    },
  },
})

export const getHealthRoute = createRoute({
  method: 'get',
  path: '/health',
  tags: ['Text Generation Inference'],
  summary: 'Health check method',
  operationId: 'health',
  responses: {
    200: { description: 'Everything is working fine' },
    503: {
      description: 'Text generation inference is down',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'unhealthy', error_type: 'healthcheck' },
        },
      },
    },
  },
})

export const getInfoRoute = createRoute({
  method: 'get',
  path: '/info',
  tags: ['Text Generation Inference'],
  summary: 'Text Generation Inference endpoint info',
  operationId: 'get_model_info',
  responses: {
    200: {
      description: 'Served model info',
      content: { 'application/json': { schema: InfoSchema } },
    },
  },
})

export const postInvocationsRoute = createRoute({
  method: 'post',
  path: '/invocations',
  tags: ['Text Generation Inference'],
  summary: 'Generate tokens from Sagemaker request',
  operationId: 'sagemaker_compatibility',
  request: {
    body: { content: { 'application/json': { schema: SagemakerRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Generated Chat Completion',
      content: {
        'application/json': { schema: SagemakerResponseSchema },
        'text/event-stream': { schema: SagemakerStreamResponseSchema },
      },
    },
    422: {
      description: 'Input validation error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Input validation error', error_type: 'validation' },
        },
      },
    },
    424: {
      description: 'Generation Error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Request failed during generation', error_type: 'generation' },
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
    500: {
      description: 'Incomplete generation',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Incomplete generation', error_type: 'incomplete_generation' },
        },
      },
    },
  },
})

export const getMetricsRoute = createRoute({
  method: 'get',
  path: '/metrics',
  tags: ['Text Generation Inference'],
  summary: 'Prometheus metrics scrape endpoint',
  operationId: 'metrics',
  responses: {
    200: { description: 'Prometheus Metrics', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const postTokenizeRoute = createRoute({
  method: 'post',
  path: '/tokenize',
  tags: ['Text Generation Inference'],
  summary: 'Tokenize inputs',
  operationId: 'tokenize',
  request: {
    body: { content: { 'application/json': { schema: GenerateRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Tokenized ids',
      content: { 'application/json': { schema: TokenizeResponseSchema } },
    },
    404: {
      description: 'No tokenizer found',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'No fast tokenizer available' },
        },
      },
    },
  },
})

export const postV1ChatCompletionsRoute = createRoute({
  method: 'post',
  path: '/v1/chat/completions',
  tags: ['Text Generation Inference'],
  summary: 'Generate tokens',
  operationId: 'chat_completions',
  request: {
    body: { content: { 'application/json': { schema: ChatRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Generated Chat Completion',
      content: {
        'application/json': { schema: ChatCompletionSchema },
        'text/event-stream': { schema: ChatCompletionChunkSchema },
      },
    },
    422: {
      description: 'Input validation error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Input validation error', error_type: 'validation' },
        },
      },
    },
    424: {
      description: 'Generation Error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Request failed during generation', error_type: 'generation' },
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
    500: {
      description: 'Incomplete generation',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Incomplete generation', error_type: 'incomplete_generation' },
        },
      },
    },
  },
})

export const postV1CompletionsRoute = createRoute({
  method: 'post',
  path: '/v1/completions',
  tags: ['Text Generation Inference'],
  summary: 'Generate tokens',
  operationId: 'completions',
  request: {
    body: { content: { 'application/json': { schema: CompletionRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Generated Chat Completion',
      content: {
        'application/json': { schema: CompletionFinalSchema },
        'text/event-stream': { schema: ChunkSchema },
      },
    },
    422: {
      description: 'Input validation error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Input validation error', error_type: 'validation' },
        },
      },
    },
    424: {
      description: 'Generation Error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Request failed during generation', error_type: 'generation' },
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
    500: {
      description: 'Incomplete generation',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: 'Incomplete generation', error_type: 'incomplete_generation' },
        },
      },
    },
  },
})

export const getV1ModelsRoute = createRoute({
  method: 'get',
  path: '/v1/models',
  tags: ['Text Generation Inference'],
  summary: 'Get model info',
  operationId: 'openai_get_model_info',
  responses: {
    200: {
      description: 'Served model info',
      content: { 'application/json': { schema: ModelInfoSchema } },
    },
    404: {
      description: 'Model not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})
