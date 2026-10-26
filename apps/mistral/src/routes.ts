import { createRoute, z } from '@hono/zod-openapi'

const FilterConditionSchema = z
  .object({
    field: z.string().openapi({ title: 'Field' }),
    op: z
      .enum([
        'lt',
        'lte',
        'gt',
        'gte',
        'startswith',
        'istartswith',
        'endswith',
        'iendswith',
        'contains',
        'icontains',
        'matches',
        'notcontains',
        'inotcontains',
        'eq',
        'neq',
        'isnull',
        'includes',
        'excludes',
        'len_eq',
      ])
      .openapi({ title: 'Op' }),
    value: z.any().openapi({ title: 'Value' }),
  })
  .openapi({ title: 'FilterCondition', required: ['field', 'op', 'value'] })
  .openapi('FilterCondition')

type FilterGroupType = {
  AND?:
    | (FilterGroupType | z.infer<typeof FilterConditionSchema>)[]
    | ({ [key: string]: unknown } | null)
  OR?:
    | (FilterGroupType | z.infer<typeof FilterConditionSchema>)[]
    | ({ [key: string]: unknown } | null)
}

const WorkflowExecutionTraceSummaryAttributesValuesSchema = z
  .union([z.string(), z.int(), z.number(), z.boolean(), z.null().nullable()])
  .openapi('WorkflowExecutionTraceSummaryAttributesValues')

const EventTypeSchema = z
  .enum(['EVENT', 'EVENT_PROGRESS'])
  .openapi({ title: 'EventType' })
  .openapi('EventType')

const WorkflowExecutionTraceEventSchema = z
  .object({
    type: EventTypeSchema.default('EVENT').exactOptional(),
    name: z.string().openapi({ title: 'Name', description: 'Name of the event' }),
    id: z.string().openapi({ title: 'Id', description: 'The ID of the event' }),
    timestamp_unix_nano: z
      .int()
      .openapi({
        title: 'Timestamp Unix Nano',
        description: 'The timestamp of the event in nanoseconds since the Unix epoch',
      }),
    attributes: z
      .record(z.string(), WorkflowExecutionTraceSummaryAttributesValuesSchema)
      .openapi({ title: 'Attributes', description: 'The attributes of the event' }),
    internal: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Internal', description: 'Whether the event is internal' }),
  })
  .openapi({
    title: 'WorkflowExecutionTraceEvent',
    required: ['name', 'id', 'timestamp_unix_nano', 'attributes'],
  })
  .openapi('WorkflowExecutionTraceEvent')

type WorkflowExecutionTraceSummarySpanType = {
  span_id: string
  name: string
  start_time_unix_nano: number
  end_time_unix_nano: number | ({ [key: string]: unknown } | null)
  attributes: { [key: string]: z.infer<typeof WorkflowExecutionTraceSummaryAttributesValuesSchema> }
  events: z.infer<typeof WorkflowExecutionTraceEventSchema>[]
  children?: WorkflowExecutionTraceSummarySpanType[]
}

const ModelCapabilitiesSchema = z
  .object({
    completion_chat: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Completion Chat' }),
    function_calling: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Function Calling' }),
    completion_fim: z.boolean().default(false).exactOptional().openapi({ title: 'Completion Fim' }),
    fine_tuning: z.boolean().default(false).exactOptional().openapi({ title: 'Fine Tuning' }),
    vision: z.boolean().default(false).exactOptional().openapi({ title: 'Vision' }),
    ocr: z.boolean().default(false).exactOptional().openapi({ title: 'OCR' }),
    classification: z.boolean().default(false).exactOptional().openapi({ title: 'Classification' }),
    moderation: z.boolean().default(false).exactOptional().openapi({ title: 'Moderation' }),
    audio: z.boolean().default(false).exactOptional().openapi({ title: 'Audio' }),
    audio_transcription: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Audio Transcription' }),
  })
  .openapi({ title: 'ModelCapabilities', required: [] })
  .openapi('ModelCapabilities')

const BaseModelCardSchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    object: z.string().default('model').exactOptional().openapi({ title: 'Object' }),
    created: z.int().exactOptional().openapi({ title: 'Created' }),
    owned_by: z.string().default('mistralai').exactOptional().openapi({ title: 'Owned By' }),
    capabilities: ModelCapabilitiesSchema,
    name: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Name' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    max_context_length: z
      .int()
      .default(32768)
      .exactOptional()
      .openapi({ title: 'Max Context Length' }),
    aliases: z.array(z.string()).default([]).exactOptional().openapi({ title: 'Aliases' }),
    deprecation: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Deprecation' }),
    deprecation_replacement_model: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Deprecation Replacement Model' }),
    default_model_temperature: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Default Model Temperature' }),
    type: z.literal('base').default('base').exactOptional().openapi({ title: 'Type' }),
  })
  .openapi({ required: ['id', 'capabilities'], title: 'BaseModelCard' })
  .openapi('BaseModelCard')

const DeleteModelOutSchema = z
  .object({
    id: z
      .string()
      .openapi({
        title: 'Id',
        description: 'The ID of the deleted model.',
        examples: ['ft:open-mistral-7b:587a6b29:20240514:7e773925'],
      }),
    object: z
      .string()
      .default('model')
      .exactOptional()
      .openapi({ title: 'Object', description: 'The object type that was deleted' }),
    deleted: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ title: 'Deleted', description: 'The deletion status', examples: [true] }),
  })
  .openapi({ required: ['id'], title: 'DeleteModelOut' })
  .openapi('DeleteModelOut')

const FTModelCardSchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    object: z.string().default('model').exactOptional().openapi({ title: 'Object' }),
    created: z.int().exactOptional().openapi({ title: 'Created' }),
    owned_by: z.string().default('mistralai').exactOptional().openapi({ title: 'Owned By' }),
    capabilities: ModelCapabilitiesSchema,
    name: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Name' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    max_context_length: z
      .int()
      .default(32768)
      .exactOptional()
      .openapi({ title: 'Max Context Length' }),
    aliases: z.array(z.string()).default([]).exactOptional().openapi({ title: 'Aliases' }),
    deprecation: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Deprecation' }),
    deprecation_replacement_model: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Deprecation Replacement Model' }),
    default_model_temperature: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Default Model Temperature' }),
    type: z.literal('fine-tuned').default('fine-tuned').exactOptional().openapi({ title: 'Type' }),
    job: z.string().openapi({ title: 'Job' }),
    root: z.string().openapi({ title: 'Root' }),
    archived: z.boolean().default(false).exactOptional().openapi({ title: 'Archived' }),
  })
  .openapi({
    required: ['id', 'capabilities', 'job', 'root'],
    title: 'FTModelCard',
    description: 'Extra fields for fine-tuned models.',
  })
  .openapi('FTModelCard')

const ValidationErrorSchema = z
  .object({
    loc: z.array(z.union([z.string(), z.int()])).openapi({ title: 'Location' }),
    msg: z.string().openapi({ title: 'Message' }),
    type: z.string().openapi({ title: 'Error Type' }),
    input: z.any().exactOptional().openapi({ title: 'Input' }),
    ctx: z.object({}).exactOptional().openapi({ title: 'Context' }),
  })
  .openapi({ required: ['loc', 'msg', 'type'], title: 'ValidationError' })
  .openapi('ValidationError')

const HTTPValidationErrorSchema = z
  .object({ detail: z.array(ValidationErrorSchema).exactOptional().openapi({ title: 'Detail' }) })
  .openapi({ title: 'HTTPValidationError', required: [] })
  .openapi('HTTPValidationError')

const ModelListSchema = z
  .object({
    object: z.string().default('list').exactOptional().openapi({ title: 'Object' }),
    data: z
      .array(
        z
          .xor([BaseModelCardSchema, FTModelCardSchema])
          .openapi({
            discriminator: {
              propertyName: 'type',
              mapping: {
                base: '#/components/schemas/BaseModelCard',
                'fine-tuned': '#/components/schemas/FTModelCard',
              },
            },
          }),
      )
      .exactOptional()
      .openapi({ title: 'Data' }),
  })
  .openapi({ title: 'ModelList', required: [] })
  .openapi('ModelList')

const APIKeyAuthSchema = z
  .strictObject({
    type: z.literal('api-key').default('api-key').exactOptional().openapi({ title: 'Type' }),
    value: z.string().openapi({ title: 'Value' }),
  })
  .openapi({ title: 'APIKeyAuth', required: ['value'] })
  .openapi('APIKeyAuth')

const FunctionSchema = z
  .strictObject({
    name: z.string().openapi({ title: 'Name' }),
    description: z.string().default('').exactOptional().openapi({ title: 'Description' }),
    strict: z.boolean().default(false).exactOptional().openapi({ title: 'Strict' }),
    parameters: z.looseObject({}).openapi({ title: 'Parameters' }),
  })
  .openapi({ title: 'Function', required: ['name', 'parameters'] })
  .openapi('Function')

const FunctionToolSchema = z
  .strictObject({
    type: z.literal('function').default('function').exactOptional().openapi({ title: 'Type' }),
    function: FunctionSchema,
  })
  .openapi({ title: 'FunctionTool', required: ['function'] })
  .openapi('FunctionTool')

const ToolConfigurationSchema = z
  .strictObject({
    exclude: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Exclude' }),
    include: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Include' }),
    requires_confirmation: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Requires Confirmation' }),
  })
  .openapi({ title: 'ToolConfiguration', required: [] })
  .openapi('ToolConfiguration')

const WebSearchToolSchema = z
  .strictObject({
    tool_configuration: z.union([ToolConfigurationSchema, z.null().nullable()]).exactOptional(),
    type: z.literal('web_search').default('web_search').exactOptional().openapi({ title: 'Type' }),
  })
  .openapi({ title: 'WebSearchTool', required: [] })
  .openapi('WebSearchTool')

const WebSearchPremiumToolSchema = z
  .strictObject({
    tool_configuration: z.union([ToolConfigurationSchema, z.null().nullable()]).exactOptional(),
    type: z
      .literal('web_search_premium')
      .default('web_search_premium')
      .exactOptional()
      .openapi({ title: 'Type' }),
  })
  .openapi({ title: 'WebSearchPremiumTool', required: [] })
  .openapi('WebSearchPremiumTool')

const CodeInterpreterToolSchema = z
  .strictObject({
    tool_configuration: z.union([ToolConfigurationSchema, z.null().nullable()]).exactOptional(),
    type: z
      .literal('code_interpreter')
      .default('code_interpreter')
      .exactOptional()
      .openapi({ title: 'Type' }),
  })
  .openapi({ title: 'CodeInterpreterTool', required: [] })
  .openapi('CodeInterpreterTool')

const ImageGenerationToolSchema = z
  .strictObject({
    tool_configuration: z.union([ToolConfigurationSchema, z.null().nullable()]).exactOptional(),
    type: z
      .literal('image_generation')
      .default('image_generation')
      .exactOptional()
      .openapi({ title: 'Type' }),
  })
  .openapi({ title: 'ImageGenerationTool', required: [] })
  .openapi('ImageGenerationTool')

const DocumentLibraryToolSchema = z
  .strictObject({
    tool_configuration: z.union([ToolConfigurationSchema, z.null().nullable()]).exactOptional(),
    type: z
      .literal('document_library')
      .default('document_library')
      .exactOptional()
      .openapi({ title: 'Type' }),
    library_ids: z
      .array(z.string())
      .min(1)
      .openapi({ title: 'Library Ids', description: 'Ids of the library in which to search.' }),
  })
  .openapi({ title: 'DocumentLibraryTool', required: ['library_ids'] })
  .openapi('DocumentLibraryTool')

const OAuth2TokenAuthSchema = z
  .strictObject({
    type: z
      .literal('oauth2-token')
      .default('oauth2-token')
      .exactOptional()
      .openapi({ title: 'Type' }),
    value: z.string().openapi({ title: 'Value' }),
  })
  .openapi({ title: 'OAuth2TokenAuth', required: ['value'] })
  .openapi('OAuth2TokenAuth')

const CustomConnectorSchema = z
  .strictObject({
    type: z.literal('connector').default('connector').exactOptional().openapi({ title: 'Type' }),
    connector_id: z.string().openapi({ title: 'Connector Id' }),
    authorization: z
      .union([
        z
          .xor([OAuth2TokenAuthSchema, APIKeyAuthSchema])
          .openapi({
            discriminator: {
              propertyName: 'type',
              mapping: {
                'api-key': '#/components/schemas/APIKeyAuth',
                'oauth2-token': '#/components/schemas/OAuth2TokenAuth',
              },
            },
          }),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({ title: 'Authorization' }),
    tool_configuration: z.union([ToolConfigurationSchema, z.null().nullable()]).exactOptional(),
  })
  .openapi({ title: 'CustomConnector', required: ['connector_id'] })
  .openapi('CustomConnector')

const CompletionArgsStopSchema = z
  .union([z.string(), z.array(z.string()), z.null().nullable()])
  .openapi({ title: 'CompletionArgsStop' })
  .openapi('CompletionArgsStop')

const PredictionSchema = z
  .strictObject({
    type: z.literal('content').default('content').exactOptional().openapi({ title: 'Type' }),
    content: z.string().default('').exactOptional().openapi({ title: 'Content' }),
  })
  .openapi({
    title: 'Prediction',
    description:
      'Enable users to specify an expected completion, optimizing response times by leveraging known or predictable content.',
    required: [],
  })
  .openapi('Prediction')

const ResponseFormatsSchema = z
  .enum(['text', 'json_object', 'json_schema'])
  .openapi({ title: 'ResponseFormats' })
  .openapi('ResponseFormats')

const JsonSchemaSchema = z
  .strictObject({
    name: z.string().openapi({ title: 'Name' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    schema: z
      .looseObject({})
      .openapi({ title: 'Schema', 'x-speakeasy-name-override': 'schema_definition' }),
    strict: z.boolean().default(false).exactOptional().openapi({ title: 'Strict' }),
  })
  .openapi({ title: 'JsonSchema', required: ['name', 'schema'] })
  .openapi('JsonSchema')

const ResponseFormatSchema = z
  .strictObject({
    type: ResponseFormatsSchema.default('text').exactOptional(),
    json_schema: z.union([JsonSchemaSchema, z.null().nullable()]).exactOptional(),
  })
  .openapi({
    examples: [
      { type: 'text' },
      { type: 'json_object' },
      {
        type: 'json_schema',
        json_schema: {
          schema: {
            properties: {
              name: { title: 'Name', type: 'string' },
              authors: { items: { type: 'string' }, title: 'Authors', type: 'array' },
            },
            required: ['name', 'authors'],
            title: 'Book',
            type: 'object',
            additionalProperties: false,
          },
          name: 'book',
          strict: true,
        },
      },
    ],
    title: 'ResponseFormat',
    description:
      'Specify the format that the model must output. By default it will use `{ "type": "text" }`. Setting to `{ "type": "json_object" }` enables JSON mode, which guarantees the message the model generates is in JSON. When using JSON mode you MUST also instruct the model to produce JSON yourself with a system or a user message. Setting to `{ "type": "json_schema" }` enables JSON schema mode, which guarantees the message the model generates is in JSON and follows the schema you provide.',
    required: [],
  })
  .openapi('ResponseFormat')

const ToolChoiceEnumSchema = z
  .enum(['auto', 'none', 'any', 'required'])
  .openapi({ title: 'ToolChoiceEnum' })
  .openapi('ToolChoiceEnum')

const CompletionArgsSchema = z
  .strictObject({
    stop: CompletionArgsStopSchema.exactOptional(),
    presence_penalty: z
      .union([z.number().min(-2).max(2), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Presence Penalty' }),
    frequency_penalty: z
      .union([z.number().min(-2).max(2), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Frequency Penalty' }),
    temperature: z
      .union([z.number().min(0).max(1), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Temperature' }),
    top_p: z
      .union([z.number().min(0).max(1), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Top P' }),
    max_tokens: z
      .union([z.int().min(0), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Max Tokens' }),
    random_seed: z
      .union([z.int().min(0), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Random Seed' }),
    prediction: z.union([PredictionSchema, z.null().nullable()]).exactOptional(),
    response_format: z.union([ResponseFormatSchema, z.null().nullable()]).exactOptional(),
    tool_choice: ToolChoiceEnumSchema.default('auto').exactOptional(),
    reasoning_effort: z
      .union([z.enum(['high', 'none']), z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Controls the reasoning effort level for reasoning models. "high" enables comprehensive reasoning traces, "none" disables reasoning effort.',
      }),
  })
  .openapi({
    title: 'CompletionArgs',
    description: 'White-listed arguments from the completion API',
    required: [],
  })
  .openapi('CompletionArgs')

const ModerationLLMV1CategoryThresholdsSchema = z
  .object({
    sexual: z.union([z.number(), z.null().nullable()]).exactOptional().openapi({ title: 'Sexual' }),
    hate_and_discrimination: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Hate And Discrimination' }),
    violence_and_threats: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Violence And Threats' }),
    dangerous_and_criminal_content: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Dangerous And Criminal Content' }),
    selfharm: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Selfharm' }),
    health: z.union([z.number(), z.null().nullable()]).exactOptional().openapi({ title: 'Health' }),
    financial: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Financial' }),
    law: z.union([z.number(), z.null().nullable()]).exactOptional().openapi({ title: 'Law' }),
    pii: z.union([z.number(), z.null().nullable()]).exactOptional().openapi({ title: 'Pii' }),
  })
  .openapi({ title: 'ModerationLLMV1CategoryThresholds', required: [] })
  .openapi('ModerationLLMV1CategoryThresholds')

const ModerationLLMActionSchema = z
  .enum(['none', 'block'])
  .openapi({ title: 'ModerationLLMAction' })
  .openapi('ModerationLLMAction')

const ModerationLLMV1ConfigSchema = z
  .object({
    model_name: z
      .string()
      .default('mistral-moderation-2411')
      .exactOptional()
      .openapi({
        title: 'Model Name',
        description: 'Override model name. Should be omitted in general.',
      }),
    custom_category_thresholds: z
      .union([ModerationLLMV1CategoryThresholdsSchema, z.null().nullable()])
      .exactOptional(),
    ignore_other_categories: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Ignore Other Categories',
        description:
          'If true, only evaluate categories in custom_category_thresholds; others are ignored.',
      }),
    action: ModerationLLMActionSchema.default('none')
      .exactOptional()
      .openapi({
        description: 'Action to take if any score is above the threshold for any category.',
      }),
  })
  .openapi({ title: 'ModerationLLMV1Config', required: [] })
  .openapi('ModerationLLMV1Config')

const ModerationLLMV2CategoryThresholdsSchema = z
  .object({
    sexual: z.union([z.number(), z.null().nullable()]).exactOptional().openapi({ title: 'Sexual' }),
    hate_and_discrimination: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Hate And Discrimination' }),
    violence_and_threats: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Violence And Threats' }),
    dangerous: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Dangerous' }),
    criminal: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Criminal' }),
    selfharm: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Selfharm' }),
    health: z.union([z.number(), z.null().nullable()]).exactOptional().openapi({ title: 'Health' }),
    financial: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Financial' }),
    law: z.union([z.number(), z.null().nullable()]).exactOptional().openapi({ title: 'Law' }),
    pii: z.union([z.number(), z.null().nullable()]).exactOptional().openapi({ title: 'Pii' }),
    jailbreaking: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Jailbreaking' }),
  })
  .openapi({ title: 'ModerationLLMV2CategoryThresholds', required: [] })
  .openapi('ModerationLLMV2CategoryThresholds')

const ModerationLLMV2ConfigSchema = z
  .object({
    model_name: z
      .string()
      .default('mistral-moderation-2603')
      .exactOptional()
      .openapi({
        title: 'Model Name',
        description: 'Override model name. Should be omitted in general.',
      }),
    custom_category_thresholds: z
      .union([ModerationLLMV2CategoryThresholdsSchema, z.null().nullable()])
      .exactOptional(),
    ignore_other_categories: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Ignore Other Categories',
        description:
          'If true, only evaluate categories in custom_category_thresholds; others are ignored.',
      }),
    action: ModerationLLMActionSchema.default('none')
      .exactOptional()
      .openapi({
        description: 'Action to take if any score is above the threshold for any category.',
      }),
  })
  .openapi({ title: 'ModerationLLMV2Config', required: [] })
  .openapi('ModerationLLMV2Config')

const GuardrailConfigSchema = z
  .object({
    block_on_error: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Block On Error',
        description:
          'If true, return HTTP 403 and block request in the event of a server-side error',
      }),
    moderation_llm_v1: z.union([ModerationLLMV1ConfigSchema, z.null().nullable()]).exactOptional(),
    moderation_llm_v2: z.union([ModerationLLMV2ConfigSchema, z.null().nullable()]).exactOptional(),
  })
  .openapi({ title: 'GuardrailConfig', required: [] })
  .openapi('GuardrailConfig')

const MetadataDictSchema = z
  .looseObject({})
  .openapi({
    title: 'MetadataDict',
    description: 'Custom type for metadata with embedded validation.',
  })
  .openapi('MetadataDict')

const AgentSchema = z
  .strictObject({
    instructions: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Instructions',
        description: 'Instruction prompt the model will follow during the conversation.',
      }),
    tools: z
      .array(
        z
          .xor([
            FunctionToolSchema,
            WebSearchToolSchema,
            WebSearchPremiumToolSchema,
            CodeInterpreterToolSchema,
            ImageGenerationToolSchema,
            DocumentLibraryToolSchema,
            CustomConnectorSchema,
          ])
          .openapi({
            discriminator: {
              propertyName: 'type',
              mapping: {
                code_interpreter: '#/components/schemas/CodeInterpreterTool',
                connector: '#/components/schemas/CustomConnector',
                document_library: '#/components/schemas/DocumentLibraryTool',
                function: '#/components/schemas/FunctionTool',
                image_generation: '#/components/schemas/ImageGenerationTool',
                web_search: '#/components/schemas/WebSearchTool',
                web_search_premium: '#/components/schemas/WebSearchPremiumTool',
              },
            },
          }),
      )
      .exactOptional()
      .openapi({
        title: 'Tools',
        description: 'List of tools which are available to the model during the conversation.',
      }),
    completion_args: CompletionArgsSchema.exactOptional().openapi({
      description:
        'Completion arguments that will be used to generate assistant responses. Can be overridden at each message request.',
    }),
    guardrails: z
      .union([z.array(GuardrailConfigSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Guardrails' }),
    model: z.string().openapi({ title: 'Model' }),
    name: z.string().openapi({ title: 'Name' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    handoffs: z
      .union([z.array(z.string()).min(1), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Handoffs' }),
    metadata: z.union([MetadataDictSchema, z.null().nullable()]).exactOptional(),
    object: z.literal('agent').default('agent').exactOptional().openapi({ title: 'Object' }),
    id: z.string().openapi({ title: 'Id' }),
    version: z.int().openapi({ title: 'Version' }),
    versions: z.array(z.int()).openapi({ title: 'Versions' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
    deployment_chat: z.boolean().openapi({ title: 'Deployment Chat' }),
    source: z.string().openapi({ title: 'Source' }),
    version_message: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Version Message' }),
  })
  .openapi({
    title: 'Agent',
    required: [
      'model',
      'name',
      'id',
      'version',
      'versions',
      'created_at',
      'updated_at',
      'deployment_chat',
      'source',
    ],
  })
  .openapi('Agent')

const AgentListPageSchema = z
  .strictObject({
    object: z.literal('list').default('list').exactOptional().openapi({ title: 'Object' }),
    data: z.array(AgentSchema).openapi({ title: 'Data' }),
    next_page_token: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Next Page Token' }),
  })
  .openapi({ title: 'AgentListPage', required: ['data'] })
  .openapi('AgentListPage')

const AgentAliasResponseSchema = z
  .strictObject({
    alias: z.string().openapi({ title: 'Alias' }),
    version: z.int().openapi({ title: 'Version' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
  })
  .openapi({
    title: 'AgentAliasResponse',
    required: ['alias', 'version', 'created_at', 'updated_at'],
  })
  .openapi('AgentAliasResponse')

const AgentConversationSchema = z
  .strictObject({
    name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Name', description: 'Name given to the conversation.' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Description',
        description: 'Description of the what the conversation is about.',
      }),
    metadata: z
      .union([MetadataDictSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ description: 'Custom metadata for the conversation.' }),
    object: z
      .literal('conversation')
      .default('conversation')
      .exactOptional()
      .openapi({ title: 'Object' }),
    id: z.string().openapi({ title: 'Id' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
    agent_id: z.string().openapi({ title: 'Agent Id' }),
    agent_version: z
      .union([z.string(), z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Agent Version' }),
  })
  .openapi({ title: 'AgentConversation', required: ['id', 'created_at', 'updated_at', 'agent_id'] })
  .openapi('AgentConversation')

const AgentCreationRequestSchema = z
  .strictObject({
    instructions: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Instructions',
        description: 'Instruction prompt the model will follow during the conversation.',
      }),
    tools: z
      .array(
        z
          .xor([
            FunctionToolSchema,
            WebSearchToolSchema,
            WebSearchPremiumToolSchema,
            CodeInterpreterToolSchema,
            ImageGenerationToolSchema,
            DocumentLibraryToolSchema,
            CustomConnectorSchema,
          ])
          .openapi({
            discriminator: {
              propertyName: 'type',
              mapping: {
                code_interpreter: '#/components/schemas/CodeInterpreterTool',
                connector: '#/components/schemas/CustomConnector',
                document_library: '#/components/schemas/DocumentLibraryTool',
                function: '#/components/schemas/FunctionTool',
                image_generation: '#/components/schemas/ImageGenerationTool',
                web_search: '#/components/schemas/WebSearchTool',
                web_search_premium: '#/components/schemas/WebSearchPremiumTool',
              },
            },
          }),
      )
      .exactOptional()
      .openapi({
        title: 'Tools',
        description: 'List of tools which are available to the model during the conversation.',
      }),
    completion_args: CompletionArgsSchema.exactOptional().openapi({
      description:
        'Completion arguments that will be used to generate assistant responses. Can be overridden at each message request.',
    }),
    guardrails: z
      .union([z.array(GuardrailConfigSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Guardrails' }),
    model: z.string().openapi({ title: 'Model' }),
    name: z.string().openapi({ title: 'Name' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    handoffs: z
      .union([z.array(z.string()).min(1), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Handoffs' }),
    metadata: z.union([MetadataDictSchema, z.null().nullable()]).exactOptional(),
    version_message: z
      .union([z.string().max(500), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Version Message' }),
  })
  .openapi({ title: 'AgentCreationRequest', required: ['model', 'name'] })
  .openapi('AgentCreationRequest')

const AgentHandoffEntrySchema = z
  .strictObject({
    object: z.literal('entry').default('entry').exactOptional().openapi({ title: 'Object' }),
    type: z
      .literal('agent.handoff')
      .default('agent.handoff')
      .exactOptional()
      .openapi({ title: 'Type' }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ title: 'Created At' }),
    completed_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Completed At' }),
    id: z.string().exactOptional().openapi({ title: 'Id' }),
    previous_agent_id: z.string().openapi({ title: 'Previous Agent Id' }),
    previous_agent_name: z.string().openapi({ title: 'Previous Agent Name' }),
    next_agent_id: z.string().openapi({ title: 'Next Agent Id' }),
    next_agent_name: z.string().openapi({ title: 'Next Agent Name' }),
  })
  .openapi({
    title: 'AgentHandoffEntry',
    required: ['previous_agent_id', 'previous_agent_name', 'next_agent_id', 'next_agent_name'],
  })
  .openapi('AgentHandoffEntry')

const AgentUpdateRequestSchema = z
  .strictObject({
    instructions: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Instructions',
        description: 'Instruction prompt the model will follow during the conversation.',
      }),
    tools: z
      .array(
        z
          .xor([
            FunctionToolSchema,
            WebSearchToolSchema,
            WebSearchPremiumToolSchema,
            CodeInterpreterToolSchema,
            ImageGenerationToolSchema,
            DocumentLibraryToolSchema,
            CustomConnectorSchema,
          ])
          .openapi({
            discriminator: {
              propertyName: 'type',
              mapping: {
                code_interpreter: '#/components/schemas/CodeInterpreterTool',
                connector: '#/components/schemas/CustomConnector',
                document_library: '#/components/schemas/DocumentLibraryTool',
                function: '#/components/schemas/FunctionTool',
                image_generation: '#/components/schemas/ImageGenerationTool',
                web_search: '#/components/schemas/WebSearchTool',
                web_search_premium: '#/components/schemas/WebSearchPremiumTool',
              },
            },
          }),
      )
      .exactOptional()
      .openapi({
        title: 'Tools',
        description: 'List of tools which are available to the model during the conversation.',
      }),
    completion_args: CompletionArgsSchema.exactOptional().openapi({
      description:
        'Completion arguments that will be used to generate assistant responses. Can be overridden at each message request.',
    }),
    guardrails: z
      .union([z.array(GuardrailConfigSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Guardrails' }),
    model: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Model' }),
    name: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Name' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    handoffs: z
      .union([z.array(z.string()).min(1), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Handoffs' }),
    deployment_chat: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Deployment Chat' }),
    metadata: z.union([MetadataDictSchema, z.null().nullable()]).exactOptional(),
    version_message: z
      .union([z.string().max(500), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Version Message' }),
  })
  .openapi({ title: 'AgentUpdateRequest', required: [] })
  .openapi('AgentUpdateRequest')

const BuiltInConnectorsSchema = z
  .enum([
    'web_search',
    'web_search_premium',
    'code_interpreter',
    'image_generation',
    'document_library',
  ])
  .openapi({ title: 'BuiltInConnectors' })
  .openapi('BuiltInConnectors')

const TextChunkSchema = z
  .strictObject({
    type: z.literal('text').default('text').exactOptional().openapi({ title: 'Type' }),
    text: z.string().openapi({ title: 'Text' }),
  })
  .openapi({ title: 'TextChunk', required: ['text'] })
  .openapi('TextChunk')

const ImageDetailSchema = z
  .enum(['low', 'auto', 'high'])
  .openapi({ title: 'ImageDetail' })
  .openapi('ImageDetail')

const ImageURLSchema = z
  .strictObject({
    url: z.string().openapi({ title: 'Url' }),
    detail: z.union([ImageDetailSchema, z.null().nullable()]).exactOptional(),
  })
  .openapi({ title: 'ImageURL', required: ['url'] })
  .openapi('ImageURL')

const ImageURLChunkSchema = z
  .strictObject({
    type: z.literal('image_url').default('image_url').exactOptional().openapi({ title: 'Type' }),
    image_url: z.union([ImageURLSchema, z.string()]).openapi({ title: 'Image Url' }),
  })
  .openapi({
    title: 'ImageURLChunk',
    required: ['image_url'],
    description: '{"type":"image_url","image_url":{"url":"data:image/png;base64,iVBORw0',
  })
  .openapi('ImageURLChunk')

const ToolFileChunkSchema = z
  .strictObject({
    type: z.literal('tool_file').default('tool_file').exactOptional().openapi({ title: 'Type' }),
    tool: z.union([BuiltInConnectorsSchema, z.string()]).openapi({ title: 'Tool' }),
    file_id: z.string().openapi({ title: 'File Id' }),
    file_name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'File Name' }),
    file_type: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'File Type' }),
  })
  .openapi({ title: 'ToolFileChunk', required: ['tool', 'file_id'] })
  .openapi('ToolFileChunk')

const DocumentURLChunkSchema = z
  .strictObject({
    type: z
      .literal('document_url')
      .default('document_url')
      .exactOptional()
      .openapi({ title: 'Type' }),
    document_url: z.string().openapi({ title: 'Document Url' }),
    document_name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Document Name', description: 'The filename of the document' }),
  })
  .openapi({ title: 'DocumentURLChunk', required: ['document_url'] })
  .openapi('DocumentURLChunk')

const ToolReferenceChunkSchema = z
  .strictObject({
    type: z
      .literal('tool_reference')
      .default('tool_reference')
      .exactOptional()
      .openapi({ title: 'Type' }),
    tool: z.union([BuiltInConnectorsSchema, z.string()]).openapi({ title: 'Tool' }),
    title: z.string().openapi({ title: 'Title' }),
    url: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Url' }),
    favicon: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Favicon' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
  })
  .openapi({ title: 'ToolReferenceChunk', required: ['tool', 'title'] })
  .openapi('ToolReferenceChunk')

const ReferenceChunkSchema = z
  .strictObject({
    type: z.literal('reference').default('reference').exactOptional().openapi({ title: 'Type' }),
    reference_ids: z.array(z.int()).openapi({ title: 'Reference Ids' }),
  })
  .openapi({ title: 'ReferenceChunk', required: ['reference_ids'] })
  .openapi('ReferenceChunk')

const ThinkChunkSchema = z
  .strictObject({
    type: z.literal('thinking').default('thinking').exactOptional().openapi({ title: 'Type' }),
    thinking: z
      .array(z.union([TextChunkSchema, ToolReferenceChunkSchema, ReferenceChunkSchema]))
      .openapi({ title: 'Thinking' }),
    closed: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        title: 'Closed',
        description:
          'Whether the thinking chunk is closed or not. Currently only used for prefixing.',
      }),
  })
  .openapi({ title: 'ThinkChunk', required: ['thinking'] })
  .openapi('ThinkChunk')

const MessageInputContentChunksSchema = z
  .array(
    z.union([
      TextChunkSchema,
      ImageURLChunkSchema,
      ToolFileChunkSchema,
      DocumentURLChunkSchema,
      ThinkChunkSchema,
    ]),
  )
  .openapi({ title: 'MessageInputContentChunks' })
  .openapi('MessageInputContentChunks')

const MessageInputEntrySchema = z
  .strictObject({
    object: z.literal('entry').default('entry').exactOptional().openapi({ title: 'Object' }),
    type: z
      .literal('message.input')
      .default('message.input')
      .exactOptional()
      .openapi({ title: 'Type' }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ title: 'Created At' }),
    completed_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Completed At' }),
    id: z.string().exactOptional().openapi({ title: 'Id' }),
    role: z.enum(['assistant', 'user']).openapi({ title: 'Role' }),
    content: z.union([z.string(), MessageInputContentChunksSchema]).openapi({ title: 'Content' }),
    prefix: z.boolean().default(false).exactOptional().openapi({ title: 'Prefix' }),
  })
  .openapi({
    title: 'MessageInputEntry',
    required: ['role', 'content'],
    description: 'Representation of an input message inside the conversation.',
  })
  .openapi('MessageInputEntry')

const MessageOutputContentChunksSchema = z
  .array(
    z.union([
      TextChunkSchema,
      ImageURLChunkSchema,
      ToolFileChunkSchema,
      DocumentURLChunkSchema,
      ThinkChunkSchema,
      ToolReferenceChunkSchema,
    ]),
  )
  .openapi({ title: 'MessageOutputContentChunks' })
  .openapi('MessageOutputContentChunks')

const MessageOutputEntrySchema = z
  .strictObject({
    object: z.literal('entry').default('entry').exactOptional().openapi({ title: 'Object' }),
    type: z
      .literal('message.output')
      .default('message.output')
      .exactOptional()
      .openapi({ title: 'Type' }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ title: 'Created At' }),
    completed_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Completed At' }),
    agent_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Agent Id' }),
    model: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Model' }),
    id: z.string().exactOptional().openapi({ title: 'Id' }),
    role: z.literal('assistant').default('assistant').exactOptional().openapi({ title: 'Role' }),
    content: z.union([z.string(), MessageOutputContentChunksSchema]).openapi({ title: 'Content' }),
  })
  .openapi({ title: 'MessageOutputEntry', required: ['content'] })
  .openapi('MessageOutputEntry')

const FunctionResultEntrySchema = z
  .strictObject({
    object: z.literal('entry').default('entry').exactOptional().openapi({ title: 'Object' }),
    type: z
      .literal('function.result')
      .default('function.result')
      .exactOptional()
      .openapi({ title: 'Type' }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ title: 'Created At' }),
    completed_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Completed At' }),
    id: z.string().exactOptional().openapi({ title: 'Id' }),
    tool_call_id: z.string().openapi({ title: 'Tool Call Id' }),
    result: z.string().openapi({ title: 'Result' }),
  })
  .openapi({ title: 'FunctionResultEntry', required: ['tool_call_id', 'result'] })
  .openapi('FunctionResultEntry')

const FunctionCallEntryArgumentsSchema = z
  .union([z.looseObject({}), z.string()])
  .openapi({ title: 'FunctionCallEntryArguments' })
  .openapi('FunctionCallEntryArguments')

const FunctionCallEntrySchema = z
  .strictObject({
    object: z.literal('entry').default('entry').exactOptional().openapi({ title: 'Object' }),
    type: z
      .literal('function.call')
      .default('function.call')
      .exactOptional()
      .openapi({ title: 'Type' }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ title: 'Created At' }),
    completed_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Completed At' }),
    agent_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Agent Id' }),
    model: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Model' }),
    id: z.string().exactOptional().openapi({ title: 'Id' }),
    tool_call_id: z.string().openapi({ title: 'Tool Call Id' }),
    name: z.string().openapi({ title: 'Name' }),
    arguments: FunctionCallEntryArgumentsSchema,
    confirmation_status: z
      .union([z.enum(['pending', 'allowed', 'denied']), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Confirmation Status' }),
  })
  .openapi({ title: 'FunctionCallEntry', required: ['tool_call_id', 'name', 'arguments'] })
  .openapi('FunctionCallEntry')

const ToolExecutionInfoSchema = z
  .looseObject({})
  .openapi({ title: 'ToolExecutionInfo' })
  .openapi('ToolExecutionInfo')

const ToolExecutionEntrySchema = z
  .strictObject({
    object: z.literal('entry').default('entry').exactOptional().openapi({ title: 'Object' }),
    type: z
      .literal('tool.execution')
      .default('tool.execution')
      .exactOptional()
      .openapi({ title: 'Type' }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ title: 'Created At' }),
    completed_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Completed At' }),
    agent_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Agent Id' }),
    model: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Model' }),
    id: z.string().exactOptional().openapi({ title: 'Id' }),
    name: z.union([BuiltInConnectorsSchema, z.string()]).openapi({ title: 'Name' }),
    arguments: z.string().openapi({ title: 'Arguments' }),
    info: ToolExecutionInfoSchema.exactOptional(),
  })
  .openapi({ title: 'ToolExecutionEntry', required: ['name', 'arguments'] })
  .openapi('ToolExecutionEntry')

const InputEntriesSchema = z
  .array(
    z.union([
      MessageInputEntrySchema,
      MessageOutputEntrySchema,
      FunctionResultEntrySchema,
      FunctionCallEntrySchema,
      ToolExecutionEntrySchema,
      AgentHandoffEntrySchema,
    ]),
  )
  .openapi({ title: 'InputEntries' })
  .openapi('InputEntries')

const ConversationInputsSchema = z
  .union([z.string(), InputEntriesSchema])
  .openapi({ title: 'ConversationInputs' })
  .openapi('ConversationInputs')

const ToolCallConfirmationSchema = z
  .strictObject({
    tool_call_id: z.string().openapi({ title: 'Tool Call Id' }),
    confirmation: z.enum(['allow', 'deny']).openapi({ title: 'Confirmation' }),
  })
  .openapi({ title: 'ToolCallConfirmation', required: ['tool_call_id', 'confirmation'] })
  .openapi('ToolCallConfirmation')

const ConversationAppendRequestBaseSchema = z
  .strictObject({
    inputs: ConversationInputsSchema.exactOptional(),
    stream: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Stream',
        description:
          'Whether to stream back partial progress. Otherwise, the server will hold the request open until the timeout or until completion, with the response containing the full result as JSON.',
      }),
    store: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        title: 'Store',
        description: 'Whether to store the results into our servers or not.',
      }),
    handoff_execution: z
      .enum(['client', 'server'])
      .default('server')
      .exactOptional()
      .openapi({ title: 'Handoff Execution' }),
    completion_args: CompletionArgsSchema.exactOptional().openapi({
      description:
        'Completion arguments that will be used to generate assistant responses. Can be overridden at each message request.',
    }),
    tool_confirmations: z
      .union([z.array(ToolCallConfirmationSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Tool Confirmations' }),
  })
  .openapi({ title: 'ConversationAppendRequest', required: [] })
  .openapi('ConversationAppendRequestBase')

const ConversationAppendRequestSchema = ConversationAppendRequestBaseSchema.and(
  z.object({ stream: z.literal(false).default(false).exactOptional() }).openapi({ required: [] }),
).openapi('ConversationAppendRequest')

const ConversationHistorySchema = z
  .strictObject({
    object: z
      .literal('conversation.history')
      .default('conversation.history')
      .exactOptional()
      .openapi({ title: 'Object' }),
    conversation_id: z.string().openapi({ title: 'Conversation Id' }),
    entries: z
      .array(
        z.union([
          MessageInputEntrySchema,
          MessageOutputEntrySchema,
          FunctionResultEntrySchema,
          FunctionCallEntrySchema,
          ToolExecutionEntrySchema,
          AgentHandoffEntrySchema,
        ]),
      )
      .openapi({ title: 'Entries' }),
  })
  .openapi({
    title: 'ConversationHistory',
    required: ['conversation_id', 'entries'],
    description: 'Retrieve all entries in a conversation.',
  })
  .openapi('ConversationHistory')

const MessageEntriesSchema = z
  .array(z.union([MessageInputEntrySchema, MessageOutputEntrySchema]))
  .openapi({ title: 'MessageEntries' })
  .openapi('MessageEntries')

const ConversationMessagesSchema = z
  .strictObject({
    object: z
      .literal('conversation.messages')
      .default('conversation.messages')
      .exactOptional()
      .openapi({ title: 'Object' }),
    conversation_id: z.string().openapi({ title: 'Conversation Id' }),
    messages: MessageEntriesSchema,
  })
  .openapi({
    title: 'ConversationMessages',
    required: ['conversation_id', 'messages'],
    description: 'Similar to the conversation history but only keep the messages',
  })
  .openapi('ConversationMessages')

const ConversationRestartRequestBaseSchema = z
  .strictObject({
    inputs: ConversationInputsSchema.exactOptional(),
    stream: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Stream',
        description:
          'Whether to stream back partial progress. Otherwise, the server will hold the request open until the timeout or until completion, with the response containing the full result as JSON.',
      }),
    store: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        title: 'Store',
        description: 'Whether to store the results into our servers or not.',
      }),
    handoff_execution: z
      .enum(['client', 'server'])
      .default('server')
      .exactOptional()
      .openapi({ title: 'Handoff Execution' }),
    completion_args: CompletionArgsSchema.exactOptional().openapi({
      description:
        'Completion arguments that will be used to generate assistant responses. Can be overridden at each message request.',
    }),
    guardrails: z
      .union([z.array(GuardrailConfigSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Guardrails' }),
    metadata: z
      .union([MetadataDictSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ description: 'Custom metadata for the conversation.' }),
    from_entry_id: z.string().openapi({ title: 'From Entry Id' }),
    agent_version: z
      .union([z.string(), z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Agent Version',
        description:
          'Specific version of the agent to use when restarting. If not provided, uses the current version.',
      }),
  })
  .openapi({
    title: 'ConversationRestartRequest',
    required: ['from_entry_id'],
    description: 'Request to restart a new conversation from a given entry in the conversation.',
  })
  .openapi('ConversationRestartRequestBase')

const ConversationRestartRequestSchema = ConversationRestartRequestBaseSchema.and(
  z.object({ stream: z.literal(false).default(false).exactOptional() }).openapi({ required: [] }),
).openapi('ConversationRestartRequest')

const ModelConversationSchema = z
  .strictObject({
    instructions: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Instructions',
        description: 'Instruction prompt the model will follow during the conversation.',
      }),
    tools: z
      .array(
        z
          .xor([
            FunctionToolSchema,
            WebSearchToolSchema,
            WebSearchPremiumToolSchema,
            CodeInterpreterToolSchema,
            ImageGenerationToolSchema,
            DocumentLibraryToolSchema,
            CustomConnectorSchema,
          ])
          .openapi({
            discriminator: {
              propertyName: 'type',
              mapping: {
                code_interpreter: '#/components/schemas/CodeInterpreterTool',
                connector: '#/components/schemas/CustomConnector',
                document_library: '#/components/schemas/DocumentLibraryTool',
                function: '#/components/schemas/FunctionTool',
                image_generation: '#/components/schemas/ImageGenerationTool',
                web_search: '#/components/schemas/WebSearchTool',
                web_search_premium: '#/components/schemas/WebSearchPremiumTool',
              },
            },
          }),
      )
      .exactOptional()
      .openapi({
        title: 'Tools',
        description: 'List of tools which are available to the model during the conversation.',
      }),
    completion_args: CompletionArgsSchema.exactOptional().openapi({
      description:
        'Completion arguments that will be used to generate assistant responses. Can be overridden at each message request.',
    }),
    guardrails: z
      .union([z.array(GuardrailConfigSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Guardrails' }),
    name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Name', description: 'Name given to the conversation.' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Description',
        description: 'Description of the what the conversation is about.',
      }),
    metadata: z
      .union([MetadataDictSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ description: 'Custom metadata for the conversation.' }),
    object: z
      .literal('conversation')
      .default('conversation')
      .exactOptional()
      .openapi({ title: 'Object' }),
    id: z.string().openapi({ title: 'Id' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
    model: z.string().openapi({ title: 'Model' }),
  })
  .openapi({ title: 'ModelConversation', required: ['id', 'created_at', 'updated_at', 'model'] })
  .openapi('ModelConversation')

const RequestSourceSchema = z
  .enum(['api', 'playground', 'agent_builder_v1'])
  .openapi({ title: 'RequestSource' })
  .openapi('RequestSource')

const ConversationUsageInfoSchema = z
  .strictObject({
    prompt_tokens: z.int().default(0).exactOptional().openapi({ title: 'Prompt Tokens' }),
    completion_tokens: z.int().default(0).exactOptional().openapi({ title: 'Completion Tokens' }),
    total_tokens: z.int().default(0).exactOptional().openapi({ title: 'Total Tokens' }),
    connector_tokens: z
      .union([z.int(), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Connector Tokens' }),
    connectors: z
      .union([z.record(z.string(), z.int()), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Connectors' }),
  })
  .openapi({ title: 'ConversationUsageInfo', required: [] })
  .openapi('ConversationUsageInfo')

const ConversationResponseSchema = z
  .strictObject({
    object: z
      .literal('conversation.response')
      .default('conversation.response')
      .exactOptional()
      .openapi({ title: 'Object' }),
    conversation_id: z.string().openapi({ title: 'Conversation Id' }),
    outputs: z
      .array(
        z.union([
          MessageOutputEntrySchema,
          ToolExecutionEntrySchema,
          FunctionCallEntrySchema,
          AgentHandoffEntrySchema,
        ]),
      )
      .openapi({ title: 'Outputs' }),
    usage: ConversationUsageInfoSchema,
    guardrails: z
      .union([z.array(z.object({})), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Guardrails' }),
  })
  .openapi({
    title: 'ConversationResponse',
    required: ['conversation_id', 'outputs', 'usage'],
    description: 'The response after appending new entries to the conversation.',
  })
  .openapi('ConversationResponse')

const ConversationRequestBaseSchema = z
  .object({
    inputs: ConversationInputsSchema,
    stream: z
      .union([z.boolean(), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Stream' }),
    store: z
      .union([z.boolean(), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Store' }),
    handoff_execution: z
      .union([z.enum(['client', 'server']), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Handoff Execution' }),
    instructions: z
      .union([z.string(), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Instructions' }),
    tools: z
      .union([
        z.array(
          z
            .xor([
              FunctionToolSchema,
              WebSearchToolSchema,
              WebSearchPremiumToolSchema,
              CodeInterpreterToolSchema,
              ImageGenerationToolSchema,
              DocumentLibraryToolSchema,
              CustomConnectorSchema,
            ])
            .openapi({
              discriminator: {
                propertyName: 'type',
                mapping: {
                  code_interpreter: '#/components/schemas/CodeInterpreterTool',
                  connector: '#/components/schemas/CustomConnector',
                  document_library: '#/components/schemas/DocumentLibraryTool',
                  function: '#/components/schemas/FunctionTool',
                  image_generation: '#/components/schemas/ImageGenerationTool',
                  web_search: '#/components/schemas/WebSearchTool',
                  web_search_premium: '#/components/schemas/WebSearchPremiumTool',
                },
              },
            }),
        ),
        z.null().nullable(),
      ])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Tools' }),
    completion_args: z
      .union([CompletionArgsSchema, z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional(),
    guardrails: z
      .union([z.array(GuardrailConfigSchema), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Guardrails' }),
    name: z
      .union([z.string(), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Name' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Description' }),
    metadata: z
      .union([MetadataDictSchema, z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional(),
    agent_id: z
      .union([z.string(), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Agent Id' }),
    agent_version: z
      .union([z.string(), z.int(), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Agent Version' }),
    model: z
      .union([z.string(), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Model' }),
  })
  .openapi({ title: 'ConversationRequest', required: ['inputs'] })
  .openapi('ConversationRequestBase')

const ConversationRequestSchema = ConversationRequestBaseSchema.and(
  z.object({ stream: z.literal(false).default(false).exactOptional() }).openapi({ required: [] }),
).openapi('ConversationRequest')

const AgentHandoffDoneEventSchema = z
  .strictObject({
    type: z
      .literal('agent.handoff.done')
      .default('agent.handoff.done')
      .exactOptional()
      .openapi({ title: 'Type' }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ title: 'Created At' }),
    output_index: z.int().default(0).exactOptional().openapi({ title: 'Output Index' }),
    id: z.string().openapi({ title: 'Id' }),
    next_agent_id: z.string().openapi({ title: 'Next Agent Id' }),
    next_agent_name: z.string().openapi({ title: 'Next Agent Name' }),
  })
  .openapi({ title: 'AgentHandoffDoneEvent', required: ['id', 'next_agent_id', 'next_agent_name'] })
  .openapi('AgentHandoffDoneEvent')

const AgentHandoffStartedEventSchema = z
  .strictObject({
    type: z
      .literal('agent.handoff.started')
      .default('agent.handoff.started')
      .exactOptional()
      .openapi({ title: 'Type' }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ title: 'Created At' }),
    output_index: z.int().default(0).exactOptional().openapi({ title: 'Output Index' }),
    id: z.string().openapi({ title: 'Id' }),
    previous_agent_id: z.string().openapi({ title: 'Previous Agent Id' }),
    previous_agent_name: z.string().openapi({ title: 'Previous Agent Name' }),
  })
  .openapi({
    title: 'AgentHandoffStartedEvent',
    required: ['id', 'previous_agent_id', 'previous_agent_name'],
  })
  .openapi('AgentHandoffStartedEvent')

const FunctionCallEventSchema = z
  .strictObject({
    type: z
      .literal('function.call.delta')
      .default('function.call.delta')
      .exactOptional()
      .openapi({ title: 'Type' }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ title: 'Created At' }),
    output_index: z.int().default(0).exactOptional().openapi({ title: 'Output Index' }),
    id: z.string().openapi({ title: 'Id' }),
    model: z
      .union([z.string(), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Model' }),
    agent_id: z
      .union([z.string(), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Agent Id' }),
    name: z.string().openapi({ title: 'Name' }),
    tool_call_id: z.string().openapi({ title: 'Tool Call Id' }),
    arguments: z.string().openapi({ title: 'Arguments' }),
    confirmation_status: z
      .union([z.enum(['pending', 'allowed', 'denied']), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Confirmation Status' }),
  })
  .openapi({ title: 'FunctionCallEvent', required: ['id', 'name', 'tool_call_id', 'arguments'] })
  .openapi('FunctionCallEvent')

const OutputContentChunksSchema = z
  .union([
    TextChunkSchema,
    ImageURLChunkSchema,
    ToolFileChunkSchema,
    DocumentURLChunkSchema,
    ThinkChunkSchema,
    ToolReferenceChunkSchema,
  ])
  .openapi({ title: 'OutputContentChunks' })
  .openapi('OutputContentChunks')

const MessageOutputEventSchema = z
  .strictObject({
    type: z
      .literal('message.output.delta')
      .default('message.output.delta')
      .exactOptional()
      .openapi({ title: 'Type' }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ title: 'Created At' }),
    output_index: z.int().default(0).exactOptional().openapi({ title: 'Output Index' }),
    id: z.string().openapi({ title: 'Id' }),
    content_index: z.int().default(0).exactOptional().openapi({ title: 'Content Index' }),
    model: z
      .union([z.string(), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Model' }),
    agent_id: z
      .union([z.string(), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Agent Id' }),
    role: z.literal('assistant').default('assistant').exactOptional().openapi({ title: 'Role' }),
    content: z.union([z.string(), OutputContentChunksSchema]).openapi({ title: 'Content' }),
  })
  .openapi({ title: 'MessageOutputEvent', required: ['id', 'content'] })
  .openapi('MessageOutputEvent')

const ResponseDoneEventSchema = z
  .strictObject({
    type: z
      .literal('conversation.response.done')
      .default('conversation.response.done')
      .exactOptional()
      .openapi({ title: 'Type' }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ title: 'Created At' }),
    usage: ConversationUsageInfoSchema,
  })
  .openapi({ title: 'ResponseDoneEvent', required: ['usage'] })
  .openapi('ResponseDoneEvent')

const ResponseErrorEventSchema = z
  .strictObject({
    type: z
      .literal('conversation.response.error')
      .default('conversation.response.error')
      .exactOptional()
      .openapi({ title: 'Type' }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ title: 'Created At' }),
    message: z.string().openapi({ title: 'Message' }),
    code: z.int().openapi({ title: 'Code' }),
  })
  .openapi({ title: 'ResponseErrorEvent', required: ['message', 'code'] })
  .openapi('ResponseErrorEvent')

const ResponseStartedEventSchema = z
  .strictObject({
    type: z
      .literal('conversation.response.started')
      .default('conversation.response.started')
      .exactOptional()
      .openapi({ title: 'Type' }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ title: 'Created At' }),
    conversation_id: z.string().openapi({ title: 'Conversation Id' }),
  })
  .openapi({ title: 'ResponseStartedEvent', required: ['conversation_id'] })
  .openapi('ResponseStartedEvent')

const SSETypesSchema = z
  .enum([
    'conversation.response.started',
    'conversation.response.done',
    'conversation.response.error',
    'message.output.delta',
    'tool.execution.started',
    'tool.execution.delta',
    'tool.execution.done',
    'agent.handoff.started',
    'agent.handoff.done',
    'function.call.delta',
  ])
  .openapi({
    title: 'SSETypes',
    description: 'Server side events sent when streaming a conversation response.',
  })
  .openapi('SSETypes')

const ToolExecutionDeltaEventSchema = z
  .strictObject({
    type: z
      .literal('tool.execution.delta')
      .default('tool.execution.delta')
      .exactOptional()
      .openapi({ title: 'Type' }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ title: 'Created At' }),
    output_index: z.int().default(0).exactOptional().openapi({ title: 'Output Index' }),
    id: z.string().openapi({ title: 'Id' }),
    name: z.union([BuiltInConnectorsSchema, z.string()]).openapi({ title: 'Name' }),
    arguments: z.string().openapi({ title: 'Arguments' }),
  })
  .openapi({ title: 'ToolExecutionDeltaEvent', required: ['id', 'name', 'arguments'] })
  .openapi('ToolExecutionDeltaEvent')

const ToolExecutionDoneEventSchema = z
  .strictObject({
    type: z
      .literal('tool.execution.done')
      .default('tool.execution.done')
      .exactOptional()
      .openapi({ title: 'Type' }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ title: 'Created At' }),
    output_index: z.int().default(0).exactOptional().openapi({ title: 'Output Index' }),
    id: z.string().openapi({ title: 'Id' }),
    name: z.union([BuiltInConnectorsSchema, z.string()]).openapi({ title: 'Name' }),
    info: ToolExecutionInfoSchema.exactOptional(),
  })
  .openapi({ title: 'ToolExecutionDoneEvent', required: ['id', 'name'] })
  .openapi('ToolExecutionDoneEvent')

const ToolExecutionStartedEventSchema = z
  .strictObject({
    type: z
      .literal('tool.execution.started')
      .default('tool.execution.started')
      .exactOptional()
      .openapi({ title: 'Type' }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ title: 'Created At' }),
    output_index: z.int().default(0).exactOptional().openapi({ title: 'Output Index' }),
    id: z.string().openapi({ title: 'Id' }),
    model: z
      .union([z.string(), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Model' }),
    agent_id: z
      .union([z.string(), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Agent Id' }),
    name: z.union([BuiltInConnectorsSchema, z.string()]).openapi({ title: 'Name' }),
    arguments: z.string().openapi({ title: 'Arguments' }),
  })
  .openapi({ title: 'ToolExecutionStartedEvent', required: ['id', 'name', 'arguments'] })
  .openapi('ToolExecutionStartedEvent')

const ConversationEventsSchema = z
  .object({
    event: SSETypesSchema,
    data: z
      .xor([
        ResponseStartedEventSchema,
        ResponseDoneEventSchema,
        ResponseErrorEventSchema,
        ToolExecutionStartedEventSchema,
        ToolExecutionDeltaEventSchema,
        ToolExecutionDoneEventSchema,
        MessageOutputEventSchema,
        FunctionCallEventSchema,
        AgentHandoffStartedEventSchema,
        AgentHandoffDoneEventSchema,
      ])
      .openapi({
        discriminator: {
          propertyName: 'type',
          mapping: {
            'agent.handoff.done': '#/components/schemas/AgentHandoffDoneEvent',
            'agent.handoff.started': '#/components/schemas/AgentHandoffStartedEvent',
            'conversation.response.done': '#/components/schemas/ResponseDoneEvent',
            'conversation.response.error': '#/components/schemas/ResponseErrorEvent',
            'conversation.response.started': '#/components/schemas/ResponseStartedEvent',
            'function.call.delta': '#/components/schemas/FunctionCallEvent',
            'message.output.delta': '#/components/schemas/MessageOutputEvent',
            'tool.execution.delta': '#/components/schemas/ToolExecutionDeltaEvent',
            'tool.execution.done': '#/components/schemas/ToolExecutionDoneEvent',
            'tool.execution.started': '#/components/schemas/ToolExecutionStartedEvent',
          },
        },
        title: 'Data',
      }),
  })
  .openapi({ title: 'ConversationEvents', required: ['event', 'data'] })
  .openapi('ConversationEvents')

const ConversationStreamRequestSchema = ConversationRequestBaseSchema.and(
  z.object({ stream: z.literal(true).default(true).exactOptional() }).openapi({ required: [] }),
).openapi('ConversationStreamRequest')

const ConversationAppendStreamRequestSchema = ConversationAppendRequestBaseSchema.and(
  z.object({ stream: z.literal(true).default(true).exactOptional() }).openapi({ required: [] }),
).openapi('ConversationAppendStreamRequest')

const ConversationRestartStreamRequestSchema = ConversationRestartRequestBaseSchema.and(
  z.object({ stream: z.literal(true).default(true).exactOptional() }).openapi({ required: [] }),
).openapi('ConversationRestartStreamRequest')

const FilePurposeSchema = z
  .enum(['fine-tune', 'batch', 'ocr'])
  .openapi({ title: 'FilePurpose' })
  .openapi('FilePurpose')

const FileVisibilitySchema = z
  .enum(['workspace', 'user'])
  .openapi({ title: 'FileVisibility' })
  .openapi('FileVisibility')

const SampleTypeSchema = z
  .enum(['pretrain', 'instruct', 'batch_request', 'batch_result', 'batch_error'])
  .openapi({ title: 'SampleType' })
  .openapi('SampleType')

const SourceSchema = z
  .enum(['upload', 'repository', 'mistral'])
  .openapi({ title: 'Source' })
  .openapi('Source')

const UploadFileOutSchema = z
  .object({
    id: z
      .uuid()
      .openapi({
        examples: ['497f6eca-6276-4993-bfeb-53cbbbba6f09'],
        title: 'Id',
        description: 'The unique identifier of the file.',
      }),
    object: z
      .string()
      .openapi({
        examples: ['file'],
        title: 'Object',
        description: 'The object type, which is always "file".',
      }),
    bytes: z
      .int()
      .openapi({
        examples: [13000],
        title: 'Bytes',
        description: 'The size of the file, in bytes.',
      }),
    created_at: z
      .int()
      .openapi({
        examples: [1716963433],
        title: 'Created At',
        description: 'The UNIX timestamp (in seconds) of the event.',
      }),
    filename: z
      .string()
      .openapi({
        examples: ['files_upload.jsonl'],
        title: 'Filename',
        description: 'The name of the uploaded file.',
      }),
    purpose: FilePurposeSchema.openapi({
      examples: ['fine-tune', 'ocr', 'batch', 'audio'],
      description:
        'The intended purpose of the uploaded file, currently supports fine-tuning (`fine-tune`), OCR (`ocr`), Audio/Transcription (`audio`) and batch inference (`batch`).',
    }),
    sample_type: SampleTypeSchema,
    num_lines: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Num Lines' }),
    mimetype: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Mimetype' }),
    source: SourceSchema,
    signature: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Signature' }),
    expires_at: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Expires At' }),
    visibility: z.union([FileVisibilitySchema, z.null().nullable()]).exactOptional(),
  })
  .openapi({
    title: 'UploadFileOut',
    required: [
      'id',
      'object',
      'bytes',
      'created_at',
      'filename',
      'purpose',
      'sample_type',
      'source',
    ],
  })
  .openapi('UploadFileOut')

const FileSchemaSchema = z
  .object({
    id: z
      .uuid()
      .openapi({
        examples: ['497f6eca-6276-4993-bfeb-53cbbbba6f09'],
        title: 'Id',
        description: 'The unique identifier of the file.',
      }),
    object: z
      .string()
      .openapi({
        examples: ['file'],
        title: 'Object',
        description: 'The object type, which is always "file".',
      }),
    bytes: z
      .int()
      .openapi({
        examples: [13000],
        title: 'Bytes',
        description: 'The size of the file, in bytes.',
      }),
    created_at: z
      .int()
      .openapi({
        examples: [1716963433],
        title: 'Created At',
        description: 'The UNIX timestamp (in seconds) of the event.',
      }),
    filename: z
      .string()
      .openapi({
        examples: ['files_upload.jsonl'],
        title: 'Filename',
        description: 'The name of the uploaded file.',
      }),
    purpose: FilePurposeSchema.openapi({
      examples: ['fine-tune', 'ocr', 'batch', 'audio'],
      description:
        'The intended purpose of the uploaded file, currently supports fine-tuning (`fine-tune`), OCR (`ocr`), Audio/Transcription (`audio`) and batch inference (`batch`).',
    }),
    sample_type: SampleTypeSchema,
    num_lines: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Num Lines' }),
    mimetype: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Mimetype' }),
    source: SourceSchema,
    signature: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Signature' }),
    expires_at: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Expires At' }),
    visibility: z.union([FileVisibilitySchema, z.null().nullable()]).exactOptional(),
  })
  .openapi({
    title: 'FileSchema',
    required: [
      'id',
      'object',
      'bytes',
      'created_at',
      'filename',
      'purpose',
      'sample_type',
      'source',
    ],
  })
  .openapi('FileSchema')

const ListFilesOutSchema = z
  .object({
    data: z.array(FileSchemaSchema).openapi({ title: 'Data' }),
    object: z.string().openapi({ title: 'Object' }),
    total: z.union([z.int(), z.null().nullable()]).exactOptional().openapi({ title: 'Total' }),
  })
  .openapi({ title: 'ListFilesOut', required: ['data', 'object'] })
  .openapi('ListFilesOut')

const RetrieveFileOutSchema = z
  .object({
    id: z
      .uuid()
      .openapi({
        examples: ['497f6eca-6276-4993-bfeb-53cbbbba6f09'],
        title: 'Id',
        description: 'The unique identifier of the file.',
      }),
    object: z
      .string()
      .openapi({
        examples: ['file'],
        title: 'Object',
        description: 'The object type, which is always "file".',
      }),
    bytes: z
      .int()
      .openapi({
        examples: [13000],
        title: 'Bytes',
        description: 'The size of the file, in bytes.',
      }),
    created_at: z
      .int()
      .openapi({
        examples: [1716963433],
        title: 'Created At',
        description: 'The UNIX timestamp (in seconds) of the event.',
      }),
    filename: z
      .string()
      .openapi({
        examples: ['files_upload.jsonl'],
        title: 'Filename',
        description: 'The name of the uploaded file.',
      }),
    purpose: FilePurposeSchema.openapi({
      examples: ['fine-tune', 'ocr', 'batch', 'audio'],
      description:
        'The intended purpose of the uploaded file, currently supports fine-tuning (`fine-tune`), OCR (`ocr`), Audio/Transcription (`audio`) and batch inference (`batch`).',
    }),
    sample_type: SampleTypeSchema,
    num_lines: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Num Lines' }),
    mimetype: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Mimetype' }),
    source: SourceSchema,
    signature: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Signature' }),
    expires_at: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Expires At' }),
    visibility: z.union([FileVisibilitySchema, z.null().nullable()]).exactOptional(),
    deleted: z.boolean().openapi({ title: 'Deleted' }),
  })
  .openapi({
    title: 'RetrieveFileOut',
    required: [
      'id',
      'object',
      'bytes',
      'created_at',
      'filename',
      'purpose',
      'sample_type',
      'source',
      'deleted',
    ],
  })
  .openapi('RetrieveFileOut')

const DeleteFileOutSchema = z
  .object({
    id: z
      .uuid()
      .openapi({
        examples: ['497f6eca-6276-4993-bfeb-53cbbbba6f09'],
        title: 'Id',
        description: 'The ID of the deleted file.',
      }),
    object: z
      .string()
      .openapi({
        examples: ['file'],
        title: 'Object',
        description: 'The object type that was deleted',
      }),
    deleted: z
      .boolean()
      .openapi({ examples: [false], title: 'Deleted', description: 'The deletion status.' }),
  })
  .openapi({ title: 'DeleteFileOut', required: ['id', 'object', 'deleted'] })
  .openapi('DeleteFileOut')

const FileSignedURLSchema = z
  .object({ url: z.string().openapi({ title: 'Url' }) })
  .openapi({ title: 'FileSignedURL', required: ['url'] })
  .openapi('FileSignedURL')

const FineTuneableModelTypeSchema = z
  .enum(['completion', 'classifier'])
  .openapi({ title: 'FineTuneableModelType' })
  .openapi('FineTuneableModelType')

const WandbIntegrationOutSchema = z
  .object({
    type: z.literal('wandb').default('wandb').exactOptional().openapi({ title: 'Type' }),
    project: z
      .string()
      .openapi({
        title: 'Project',
        description: 'The name of the project that the new run will be created under.',
      }),
    name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Name',
        description:
          'A display name to set for the run. If not set, will use the job ID as the name.',
      }),
    run_name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Run Name' }),
    url: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Url' }),
  })
  .openapi({ title: 'WandbIntegrationOut', required: ['project'] })
  .openapi('WandbIntegrationOut')

const JobMetadataOutSchema = z
  .object({
    expected_duration_seconds: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Expected Duration Seconds' }),
    cost: z.union([z.number(), z.null().nullable()]).exactOptional().openapi({ title: 'Cost' }),
    cost_currency: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Cost Currency' }),
    train_tokens_per_step: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Train Tokens Per Step' }),
    train_tokens: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Train Tokens' }),
    data_tokens: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Data Tokens' }),
    estimated_start_time: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Estimated Start Time' }),
  })
  .openapi({ title: 'JobMetadataOut', required: [] })
  .openapi('JobMetadataOut')

const ClassifierTrainingParametersSchema = z
  .object({
    training_steps: z
      .union([z.int().min(1), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Training Steps' }),
    learning_rate: z
      .number()
      .min(1e-8)
      .max(1)
      .default(0.0001)
      .exactOptional()
      .openapi({ title: 'Learning Rate' }),
    weight_decay: z
      .union([z.number().min(0).max(1), z.null().nullable()])
      .default(0.1)
      .exactOptional()
      .openapi({ title: 'Weight Decay' }),
    warmup_fraction: z
      .union([z.number().min(0).max(1), z.null().nullable()])
      .default(0.05)
      .exactOptional()
      .openapi({ title: 'Warmup Fraction' }),
    epochs: z
      .union([z.number().gt(0), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Epochs' }),
    seq_len: z
      .union([z.int().min(100), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Seq Len' }),
  })
  .openapi({ title: 'ClassifierTrainingParameters', required: [] })
  .openapi('ClassifierTrainingParameters')

const ClassifierJobOutSchema = z
  .object({
    id: z.uuid().openapi({ title: 'Id', description: 'The ID of the job.' }),
    auto_start: z.boolean().openapi({ title: 'Auto Start' }),
    model: z.string().openapi({ title: 'Model' }),
    status: z
      .enum([
        'QUEUED',
        'STARTED',
        'VALIDATING',
        'VALIDATED',
        'RUNNING',
        'FAILED_VALIDATION',
        'FAILED',
        'SUCCESS',
        'CANCELLED',
        'CANCELLATION_REQUESTED',
      ])
      .openapi({ title: 'Status', description: 'The current status of the fine-tuning job.' }),
    created_at: z
      .int()
      .openapi({
        title: 'Created At',
        description: 'The UNIX timestamp (in seconds) for when the fine-tuning job was created.',
      }),
    modified_at: z
      .int()
      .openapi({
        title: 'Modified At',
        description:
          'The UNIX timestamp (in seconds) for when the fine-tuning job was last modified.',
      }),
    training_files: z
      .array(z.uuid())
      .openapi({
        title: 'Training Files',
        description: 'A list containing the IDs of uploaded files that contain training data.',
      }),
    validation_files: z
      .union([z.array(z.uuid()), z.null().nullable()])
      .default([])
      .exactOptional()
      .openapi({
        title: 'Validation Files',
        description: 'A list containing the IDs of uploaded files that contain validation data.',
      }),
    object: z
      .literal('job')
      .default('job')
      .exactOptional()
      .openapi({ title: 'Object', description: 'The object type of the fine-tuning job.' }),
    fine_tuned_model: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Fine Tuned Model',
        description:
          'The name of the fine-tuned model that is being created. The value will be `null` if the fine-tuning job is still running.',
      }),
    suffix: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Suffix',
        description:
          'Optional text/code that adds more context for the model. When given a `prompt` and a `suffix` the model will fill what is between them. When `suffix` is not provided, the model will simply execute completion starting with `prompt`.',
      }),
    integrations: z
      .union([
        z.array(
          z
            .xor([WandbIntegrationOutSchema])
            .openapi({
              discriminator: {
                propertyName: 'type',
                mapping: { wandb: '#/components/schemas/WandbIntegrationOut' },
              },
            }),
        ),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({
        title: 'Integrations',
        description: 'A list of integrations enabled for your fine-tuning job.',
      }),
    trained_tokens: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Trained Tokens', description: 'Total number of tokens trained.' }),
    metadata: z.union([JobMetadataOutSchema, z.null().nullable()]).exactOptional(),
    job_type: z
      .literal('classifier')
      .default('classifier')
      .exactOptional()
      .openapi({ title: 'Job Type', description: 'The type of job (`FT` for fine-tuning).' }),
    hyperparameters: ClassifierTrainingParametersSchema,
  })
  .openapi({
    title: 'ClassifierJobOut',
    required: [
      'id',
      'auto_start',
      'model',
      'status',
      'created_at',
      'modified_at',
      'training_files',
      'hyperparameters',
    ],
  })
  .openapi('ClassifierJobOut')

const CompletionTrainingParametersSchema = z
  .object({
    training_steps: z
      .union([z.int().min(1), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Training Steps' }),
    learning_rate: z
      .number()
      .min(1e-8)
      .max(1)
      .default(0.0001)
      .exactOptional()
      .openapi({ title: 'Learning Rate' }),
    weight_decay: z
      .union([z.number().min(0).max(1), z.null().nullable()])
      .default(0.1)
      .exactOptional()
      .openapi({ title: 'Weight Decay' }),
    warmup_fraction: z
      .union([z.number().min(0).max(1), z.null().nullable()])
      .default(0.05)
      .exactOptional()
      .openapi({ title: 'Warmup Fraction' }),
    epochs: z
      .union([z.number().gt(0), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Epochs' }),
    seq_len: z
      .union([z.int().min(100), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Seq Len' }),
    fim_ratio: z
      .union([z.number().min(0).max(1), z.null().nullable()])
      .default(0.9)
      .exactOptional()
      .openapi({ title: 'Fim Ratio' }),
  })
  .openapi({ title: 'CompletionTrainingParameters', required: [] })
  .openapi('CompletionTrainingParameters')

const GithubRepositoryOutSchema = z
  .object({
    type: z.literal('github').default('github').exactOptional().openapi({ title: 'Type' }),
    name: z.string().openapi({ title: 'Name' }),
    owner: z.string().openapi({ title: 'Owner' }),
    ref: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Ref' }),
    weight: z.number().gt(0).default(1).exactOptional().openapi({ title: 'Weight' }),
    commit_id: z.string().length(40).openapi({ title: 'Commit Id' }),
  })
  .openapi({ title: 'GithubRepositoryOut', required: ['name', 'owner', 'commit_id'] })
  .openapi('GithubRepositoryOut')

const CompletionJobOutSchema = z
  .object({
    id: z.uuid().openapi({ title: 'Id', description: 'The ID of the job.' }),
    auto_start: z.boolean().openapi({ title: 'Auto Start' }),
    model: z.string().openapi({ title: 'Model' }),
    status: z
      .enum([
        'QUEUED',
        'STARTED',
        'VALIDATING',
        'VALIDATED',
        'RUNNING',
        'FAILED_VALIDATION',
        'FAILED',
        'SUCCESS',
        'CANCELLED',
        'CANCELLATION_REQUESTED',
      ])
      .openapi({ title: 'Status', description: 'The current status of the fine-tuning job.' }),
    created_at: z
      .int()
      .openapi({
        title: 'Created At',
        description: 'The UNIX timestamp (in seconds) for when the fine-tuning job was created.',
      }),
    modified_at: z
      .int()
      .openapi({
        title: 'Modified At',
        description:
          'The UNIX timestamp (in seconds) for when the fine-tuning job was last modified.',
      }),
    training_files: z
      .array(z.uuid())
      .openapi({
        title: 'Training Files',
        description: 'A list containing the IDs of uploaded files that contain training data.',
      }),
    validation_files: z
      .union([z.array(z.uuid()), z.null().nullable()])
      .default([])
      .exactOptional()
      .openapi({
        title: 'Validation Files',
        description: 'A list containing the IDs of uploaded files that contain validation data.',
      }),
    object: z
      .literal('job')
      .default('job')
      .exactOptional()
      .openapi({ title: 'Object', description: 'The object type of the fine-tuning job.' }),
    fine_tuned_model: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Fine Tuned Model',
        description:
          'The name of the fine-tuned model that is being created. The value will be `null` if the fine-tuning job is still running.',
      }),
    suffix: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Suffix',
        description:
          'Optional text/code that adds more context for the model. When given a `prompt` and a `suffix` the model will fill what is between them. When `suffix` is not provided, the model will simply execute completion starting with `prompt`.',
      }),
    integrations: z
      .union([
        z.array(
          z
            .xor([WandbIntegrationOutSchema])
            .openapi({
              discriminator: {
                propertyName: 'type',
                mapping: { wandb: '#/components/schemas/WandbIntegrationOut' },
              },
            }),
        ),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({
        title: 'Integrations',
        description: 'A list of integrations enabled for your fine-tuning job.',
      }),
    trained_tokens: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Trained Tokens', description: 'Total number of tokens trained.' }),
    metadata: z.union([JobMetadataOutSchema, z.null().nullable()]).exactOptional(),
    job_type: z
      .literal('completion')
      .default('completion')
      .exactOptional()
      .openapi({ title: 'Job Type', description: 'The type of job (`FT` for fine-tuning).' }),
    hyperparameters: CompletionTrainingParametersSchema,
    repositories: z
      .array(
        z
          .xor([GithubRepositoryOutSchema])
          .openapi({
            discriminator: {
              propertyName: 'type',
              mapping: { github: '#/components/schemas/GithubRepositoryOut' },
            },
          }),
      )
      .default([])
      .exactOptional()
      .openapi({ title: 'Repositories' }),
  })
  .openapi({
    title: 'CompletionJobOut',
    required: [
      'id',
      'auto_start',
      'model',
      'status',
      'created_at',
      'modified_at',
      'training_files',
      'hyperparameters',
    ],
  })
  .openapi('CompletionJobOut')

const JobsOutSchema = z
  .object({
    data: z
      .array(
        z
          .xor([CompletionJobOutSchema, ClassifierJobOutSchema])
          .openapi({
            discriminator: {
              propertyName: 'job_type',
              mapping: {
                classifier: '#/components/schemas/ClassifierJobOut',
                completion: '#/components/schemas/CompletionJobOut',
              },
            },
          }),
      )
      .default([])
      .exactOptional()
      .openapi({ title: 'Data' }),
    object: z.literal('list').default('list').exactOptional().openapi({ title: 'Object' }),
    total: z.int().openapi({ title: 'Total' }),
  })
  .openapi({ title: 'JobsOut', required: ['total'] })
  .openapi('JobsOut')

const LegacyJobMetadataOutSchema = z
  .object({
    expected_duration_seconds: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({
        examples: [220],
        title: 'Expected Duration Seconds',
        description: 'The approximated time (in seconds) for the fine-tuning process to complete.',
      }),
    cost: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ examples: [10], title: 'Cost', description: 'The cost of the fine-tuning job.' }),
    cost_currency: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        examples: ['EUR'],
        title: 'Cost Currency',
        description: 'The currency used for the fine-tuning job cost.',
      }),
    train_tokens_per_step: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({
        examples: [131072],
        title: 'Train Tokens Per Step',
        description: 'The number of tokens consumed by one training step.',
      }),
    train_tokens: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({
        examples: [1310720],
        title: 'Train Tokens',
        description: 'The total number of tokens used during the fine-tuning process.',
      }),
    data_tokens: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({
        examples: [305375],
        title: 'Data Tokens',
        description: 'The total number of tokens in the training dataset.',
      }),
    estimated_start_time: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Estimated Start Time' }),
    deprecated: z.boolean().default(true).exactOptional().openapi({ title: 'Deprecated' }),
    details: z.string().openapi({ title: 'Details' }),
    epochs: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({
        examples: [4.2922],
        title: 'Epochs',
        description: 'The number of complete passes through the entire training dataset.',
      }),
    training_steps: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({
        examples: [10],
        title: 'Training Steps',
        description:
          'The number of training steps to perform. A training step refers to a single update of the model weights during the fine-tuning process. This update is typically calculated using a batch of samples from the training dataset.',
      }),
    object: z
      .literal('job.metadata')
      .default('job.metadata')
      .exactOptional()
      .openapi({ title: 'Object' }),
  })
  .openapi({ title: 'LegacyJobMetadataOut', required: ['details'] })
  .openapi('LegacyJobMetadataOut')

const FTClassifierLossFunctionSchema = z
  .enum(['single_class', 'multi_class'])
  .openapi({ title: 'FTClassifierLossFunction' })
  .openapi('FTClassifierLossFunction')

const ClassifierTargetInSchema = z
  .object({
    name: z.string().openapi({ title: 'Name' }),
    labels: z.array(z.string()).openapi({ title: 'Labels' }),
    weight: z.number().min(0).default(1).exactOptional().openapi({ title: 'Weight' }),
    loss_function: z.union([FTClassifierLossFunctionSchema, z.null().nullable()]).exactOptional(),
  })
  .openapi({ title: 'ClassifierTargetIn', required: ['name', 'labels'] })
  .openapi('ClassifierTargetIn')

const ClassifierTrainingParametersInSchema = z
  .object({
    training_steps: z
      .union([z.int().min(1), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Training Steps',
        description:
          'The number of training steps to perform. A training step refers to a single update of the model weights during the fine-tuning process. This update is typically calculated using a batch of samples from the training dataset.',
      }),
    learning_rate: z
      .number()
      .min(1e-8)
      .max(1)
      .default(0.0001)
      .exactOptional()
      .openapi({
        title: 'Learning Rate',
        description:
          "A parameter describing how much to adjust the pre-trained model's weights in response to the estimated error each time the weights are updated during the fine-tuning process.",
      }),
    weight_decay: z
      .union([z.number().min(0).max(1), z.null().nullable()])
      .default(0.1)
      .exactOptional()
      .openapi({
        title: 'Weight Decay',
        description:
          '(Advanced Usage) Weight decay adds a term to the loss function that is proportional to the sum of the squared weights. This term reduces the magnitude of the weights and prevents them from growing too large.',
      }),
    warmup_fraction: z
      .union([z.number().min(0).max(1), z.null().nullable()])
      .default(0.05)
      .exactOptional()
      .openapi({
        title: 'Warmup Fraction',
        description:
          '(Advanced Usage) A parameter that specifies the percentage of the total training steps at which the learning rate warm-up phase ends. During this phase, the learning rate gradually increases from a small value to the initial learning rate, helping to stabilize the training process and improve convergence. Similar to `pct_start` in [mistral-finetune](https://github.com/mistralai/mistral-finetune)',
      }),
    epochs: z
      .union([z.number().gt(0), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Epochs' }),
    seq_len: z
      .union([z.int().min(100), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Seq Len' }),
  })
  .openapi({
    title: 'ClassifierTrainingParametersIn',
    description: 'The fine-tuning hyperparameter settings used in a classifier fine-tune job.',
    required: [],
  })
  .openapi('ClassifierTrainingParametersIn')

const CompletionTrainingParametersInSchema = z
  .object({
    training_steps: z
      .union([z.int().min(1), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Training Steps',
        description:
          'The number of training steps to perform. A training step refers to a single update of the model weights during the fine-tuning process. This update is typically calculated using a batch of samples from the training dataset.',
      }),
    learning_rate: z
      .number()
      .min(1e-8)
      .max(1)
      .default(0.0001)
      .exactOptional()
      .openapi({
        title: 'Learning Rate',
        description:
          "A parameter describing how much to adjust the pre-trained model's weights in response to the estimated error each time the weights are updated during the fine-tuning process.",
      }),
    weight_decay: z
      .union([z.number().min(0).max(1), z.null().nullable()])
      .default(0.1)
      .exactOptional()
      .openapi({
        title: 'Weight Decay',
        description:
          '(Advanced Usage) Weight decay adds a term to the loss function that is proportional to the sum of the squared weights. This term reduces the magnitude of the weights and prevents them from growing too large.',
      }),
    warmup_fraction: z
      .union([z.number().min(0).max(1), z.null().nullable()])
      .default(0.05)
      .exactOptional()
      .openapi({
        title: 'Warmup Fraction',
        description:
          '(Advanced Usage) A parameter that specifies the percentage of the total training steps at which the learning rate warm-up phase ends. During this phase, the learning rate gradually increases from a small value to the initial learning rate, helping to stabilize the training process and improve convergence. Similar to `pct_start` in [mistral-finetune](https://github.com/mistralai/mistral-finetune)',
      }),
    epochs: z
      .union([z.number().gt(0), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Epochs' }),
    seq_len: z
      .union([z.int().min(100), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Seq Len' }),
    fim_ratio: z
      .union([z.number().min(0).max(1), z.null().nullable()])
      .default(0.9)
      .exactOptional()
      .openapi({ title: 'Fim Ratio' }),
  })
  .openapi({
    title: 'CompletionTrainingParametersIn',
    description: 'The fine-tuning hyperparameter settings used in a fine-tune job.',
    required: [],
  })
  .openapi('CompletionTrainingParametersIn')

const GithubRepositoryInSchema = z
  .object({
    type: z.literal('github').default('github').exactOptional().openapi({ title: 'Type' }),
    name: z.string().openapi({ title: 'Name' }),
    owner: z.string().openapi({ title: 'Owner' }),
    ref: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Ref' }),
    weight: z.number().gt(0).default(1).exactOptional().openapi({ title: 'Weight' }),
    token: z.string().openapi({ title: 'Token' }),
  })
  .openapi({ title: 'GithubRepositoryIn', required: ['name', 'owner', 'token'] })
  .openapi('GithubRepositoryIn')

const TrainingFileSchema = z
  .object({
    file_id: z.uuid().openapi({ title: 'File Id' }),
    weight: z.number().gt(0).default(1).exactOptional().openapi({ title: 'Weight' }),
  })
  .openapi({ title: 'TrainingFile', required: ['file_id'] })
  .openapi('TrainingFile')

const WandbIntegrationSchema = z
  .object({
    type: z.literal('wandb').default('wandb').exactOptional().openapi({ title: 'Type' }),
    project: z
      .string()
      .openapi({
        title: 'Project',
        description: 'The name of the project that the new run will be created under.',
      }),
    name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Name',
        description:
          'A display name to set for the run. If not set, will use the job ID as the name.',
      }),
    api_key: z
      .string()
      .length(40)
      .openapi({ title: 'Api Key', description: 'The WandB API key to use for authentication.' }),
    run_name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Run Name' }),
  })
  .openapi({ title: 'WandbIntegration', required: ['project', 'api_key'] })
  .openapi('WandbIntegration')

const JobInSchema = z
  .object({
    model: z.string().openapi({ title: 'Model' }),
    training_files: z
      .array(TrainingFileSchema)
      .default([])
      .exactOptional()
      .openapi({ title: 'Training Files' }),
    validation_files: z
      .union([z.array(z.uuid()), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Validation Files',
        description:
          'A list containing the IDs of uploaded files that contain validation data. If you provide these files, the data is used to generate validation metrics periodically during fine-tuning. These metrics can be viewed in `checkpoints` when getting the status of a running fine-tuning job. The same data should not be present in both train and validation files.',
      }),
    suffix: z
      .union([z.string().max(18), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Suffix',
        description:
          'A string that will be added to your fine-tuning model name. For example, a suffix of "my-great-model" would produce a model name like `ft:open-mistral-7b:my-great-model:xxx...`',
      }),
    integrations: z
      .union([
        z.array(
          z
            .xor([WandbIntegrationSchema])
            .openapi({
              discriminator: {
                propertyName: 'type',
                mapping: { wandb: '#/components/schemas/WandbIntegration' },
              },
            }),
        ),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({
        title: 'Integrations',
        description: 'A list of integrations to enable for your fine-tuning job.',
      }),
    auto_start: z
      .boolean()
      .exactOptional()
      .openapi({
        title: 'Auto Start',
        description: 'This field will be required in a future release.',
      }),
    invalid_sample_skip_percentage: z
      .number()
      .min(0)
      .max(0.5)
      .default(0)
      .exactOptional()
      .openapi({ title: 'Invalid Sample Skip Percentage' }),
    job_type: z.union([FineTuneableModelTypeSchema, z.null().nullable()]).exactOptional(),
    hyperparameters: z
      .union([CompletionTrainingParametersInSchema, ClassifierTrainingParametersInSchema])
      .openapi({ title: 'Hyperparameters' }),
    repositories: z
      .union([
        z.array(
          z
            .xor([GithubRepositoryInSchema])
            .openapi({
              discriminator: {
                propertyName: 'type',
                mapping: { github: '#/components/schemas/GithubRepositoryIn' },
              },
            }),
        ),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({ title: 'Repositories' }),
    classifier_targets: z
      .union([z.array(ClassifierTargetInSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Classifier Targets' }),
  })
  .openapi({ title: 'JobIn', required: ['model', 'hyperparameters'] })
  .openapi('JobIn')

const MetricOutSchema = z
  .object({
    train_loss: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Train Loss' }),
    valid_loss: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Valid Loss' }),
    valid_mean_token_accuracy: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Valid Mean Token Accuracy' }),
  })
  .openapi({
    title: 'MetricOut',
    description:
      'Metrics at the step number during the fine-tuning job. Use these metrics to assess if the training is going smoothly (loss should decrease, token accuracy should increase).',
    required: [],
  })
  .openapi('MetricOut')

const CheckpointOutSchema = z
  .object({
    metrics: MetricOutSchema,
    step_number: z
      .int()
      .openapi({
        title: 'Step Number',
        description: 'The step number that the checkpoint was created at.',
      }),
    created_at: z
      .int()
      .openapi({
        examples: [1716963433],
        title: 'Created At',
        description: 'The UNIX timestamp (in seconds) for when the checkpoint was created.',
      }),
  })
  .openapi({ title: 'CheckpointOut', required: ['metrics', 'step_number', 'created_at'] })
  .openapi('CheckpointOut')

const EventOutSchema = z
  .object({
    name: z.string().openapi({ title: 'Name', description: 'The name of the event.' }),
    data: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Data' }),
    created_at: z
      .int()
      .openapi({
        title: 'Created At',
        description: 'The UNIX timestamp (in seconds) of the event.',
      }),
  })
  .openapi({ title: 'EventOut', required: ['name', 'created_at'] })
  .openapi('EventOut')

const ClassifierTargetOutSchema = z
  .object({
    name: z.string().openapi({ title: 'Name' }),
    labels: z.array(z.string()).openapi({ title: 'Labels' }),
    weight: z.number().openapi({ title: 'Weight' }),
    loss_function: FTClassifierLossFunctionSchema,
  })
  .openapi({
    title: 'ClassifierTargetOut',
    required: ['name', 'labels', 'weight', 'loss_function'],
  })
  .openapi('ClassifierTargetOut')

const ClassifierDetailedJobOutSchema = z
  .object({
    id: z.uuid().openapi({ title: 'Id' }),
    auto_start: z.boolean().openapi({ title: 'Auto Start' }),
    model: z.string().openapi({ title: 'Model' }),
    status: z
      .enum([
        'QUEUED',
        'STARTED',
        'VALIDATING',
        'VALIDATED',
        'RUNNING',
        'FAILED_VALIDATION',
        'FAILED',
        'SUCCESS',
        'CANCELLED',
        'CANCELLATION_REQUESTED',
      ])
      .openapi({ title: 'Status' }),
    created_at: z.int().openapi({ title: 'Created At' }),
    modified_at: z.int().openapi({ title: 'Modified At' }),
    training_files: z.array(z.uuid()).openapi({ title: 'Training Files' }),
    validation_files: z
      .union([z.array(z.uuid()), z.null().nullable()])
      .default([])
      .exactOptional()
      .openapi({ title: 'Validation Files' }),
    object: z.literal('job').default('job').exactOptional().openapi({ title: 'Object' }),
    fine_tuned_model: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Fine Tuned Model' }),
    suffix: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Suffix' }),
    integrations: z
      .union([
        z.array(
          z
            .xor([WandbIntegrationOutSchema])
            .openapi({
              discriminator: {
                propertyName: 'type',
                mapping: { wandb: '#/components/schemas/WandbIntegrationOut' },
              },
            }),
        ),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({ title: 'Integrations' }),
    trained_tokens: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Trained Tokens' }),
    metadata: z.union([JobMetadataOutSchema, z.null().nullable()]).exactOptional(),
    job_type: z
      .literal('classifier')
      .default('classifier')
      .exactOptional()
      .openapi({ title: 'Job Type' }),
    hyperparameters: ClassifierTrainingParametersSchema,
    events: z
      .array(EventOutSchema)
      .default([])
      .exactOptional()
      .openapi({
        title: 'Events',
        description:
          'Event items are created every time the status of a fine-tuning job changes. The timestamped list of all events is accessible here.',
      }),
    checkpoints: z
      .array(CheckpointOutSchema)
      .default([])
      .exactOptional()
      .openapi({ title: 'Checkpoints' }),
    classifier_targets: z.array(ClassifierTargetOutSchema).openapi({ title: 'Classifier Targets' }),
  })
  .openapi({
    title: 'ClassifierDetailedJobOut',
    required: [
      'id',
      'auto_start',
      'model',
      'status',
      'created_at',
      'modified_at',
      'training_files',
      'hyperparameters',
      'classifier_targets',
    ],
  })
  .openapi('ClassifierDetailedJobOut')

const CompletionDetailedJobOutSchema = z
  .object({
    id: z.uuid().openapi({ title: 'Id' }),
    auto_start: z.boolean().openapi({ title: 'Auto Start' }),
    model: z.string().openapi({ title: 'Model' }),
    status: z
      .enum([
        'QUEUED',
        'STARTED',
        'VALIDATING',
        'VALIDATED',
        'RUNNING',
        'FAILED_VALIDATION',
        'FAILED',
        'SUCCESS',
        'CANCELLED',
        'CANCELLATION_REQUESTED',
      ])
      .openapi({ title: 'Status' }),
    created_at: z.int().openapi({ title: 'Created At' }),
    modified_at: z.int().openapi({ title: 'Modified At' }),
    training_files: z.array(z.uuid()).openapi({ title: 'Training Files' }),
    validation_files: z
      .union([z.array(z.uuid()), z.null().nullable()])
      .default([])
      .exactOptional()
      .openapi({ title: 'Validation Files' }),
    object: z.literal('job').default('job').exactOptional().openapi({ title: 'Object' }),
    fine_tuned_model: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Fine Tuned Model' }),
    suffix: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Suffix' }),
    integrations: z
      .union([
        z.array(
          z
            .xor([WandbIntegrationOutSchema])
            .openapi({
              discriminator: {
                propertyName: 'type',
                mapping: { wandb: '#/components/schemas/WandbIntegrationOut' },
              },
            }),
        ),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({ title: 'Integrations' }),
    trained_tokens: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Trained Tokens' }),
    metadata: z.union([JobMetadataOutSchema, z.null().nullable()]).exactOptional(),
    job_type: z
      .literal('completion')
      .default('completion')
      .exactOptional()
      .openapi({ title: 'Job Type' }),
    hyperparameters: CompletionTrainingParametersSchema,
    repositories: z
      .array(
        z
          .xor([GithubRepositoryOutSchema])
          .openapi({
            discriminator: {
              propertyName: 'type',
              mapping: { github: '#/components/schemas/GithubRepositoryOut' },
            },
          }),
      )
      .default([])
      .exactOptional()
      .openapi({ title: 'Repositories' }),
    events: z
      .array(EventOutSchema)
      .default([])
      .exactOptional()
      .openapi({
        title: 'Events',
        description:
          'Event items are created every time the status of a fine-tuning job changes. The timestamped list of all events is accessible here.',
      }),
    checkpoints: z
      .array(CheckpointOutSchema)
      .default([])
      .exactOptional()
      .openapi({ title: 'Checkpoints' }),
  })
  .openapi({
    title: 'CompletionDetailedJobOut',
    required: [
      'id',
      'auto_start',
      'model',
      'status',
      'created_at',
      'modified_at',
      'training_files',
      'hyperparameters',
    ],
  })
  .openapi('CompletionDetailedJobOut')

const FTModelCapabilitiesOutSchema = z
  .object({
    completion_chat: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ title: 'Completion Chat' }),
    completion_fim: z.boolean().default(false).exactOptional().openapi({ title: 'Completion Fim' }),
    function_calling: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Function Calling' }),
    fine_tuning: z.boolean().default(false).exactOptional().openapi({ title: 'Fine Tuning' }),
    classification: z.boolean().default(false).exactOptional().openapi({ title: 'Classification' }),
  })
  .openapi({ title: 'FTModelCapabilitiesOut', required: [] })
  .openapi('FTModelCapabilitiesOut')

const ClassifierFTModelOutSchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    object: z.literal('model').default('model').exactOptional().openapi({ title: 'Object' }),
    created: z.int().openapi({ title: 'Created' }),
    owned_by: z.string().openapi({ title: 'Owned By' }),
    workspace_id: z.string().openapi({ title: 'Workspace Id' }),
    root: z.string().openapi({ title: 'Root' }),
    root_version: z.string().openapi({ title: 'Root Version' }),
    archived: z.boolean().openapi({ title: 'Archived' }),
    name: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Name' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    capabilities: FTModelCapabilitiesOutSchema,
    max_context_length: z
      .int()
      .default(32768)
      .exactOptional()
      .openapi({ title: 'Max Context Length' }),
    aliases: z.array(z.string()).default([]).exactOptional().openapi({ title: 'Aliases' }),
    job: z.uuid().openapi({ title: 'Job' }),
    classifier_targets: z.array(ClassifierTargetOutSchema).openapi({ title: 'Classifier Targets' }),
    model_type: z
      .literal('classifier')
      .default('classifier')
      .exactOptional()
      .openapi({ title: 'Model Type' }),
  })
  .openapi({
    title: 'ClassifierFTModelOut',
    required: [
      'id',
      'created',
      'owned_by',
      'workspace_id',
      'root',
      'root_version',
      'archived',
      'capabilities',
      'job',
      'classifier_targets',
    ],
  })
  .openapi('ClassifierFTModelOut')

const CompletionFTModelOutSchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    object: z.literal('model').default('model').exactOptional().openapi({ title: 'Object' }),
    created: z.int().openapi({ title: 'Created' }),
    owned_by: z.string().openapi({ title: 'Owned By' }),
    workspace_id: z.string().openapi({ title: 'Workspace Id' }),
    root: z.string().openapi({ title: 'Root' }),
    root_version: z.string().openapi({ title: 'Root Version' }),
    archived: z.boolean().openapi({ title: 'Archived' }),
    name: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Name' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    capabilities: FTModelCapabilitiesOutSchema,
    max_context_length: z
      .int()
      .default(32768)
      .exactOptional()
      .openapi({ title: 'Max Context Length' }),
    aliases: z.array(z.string()).default([]).exactOptional().openapi({ title: 'Aliases' }),
    job: z.uuid().openapi({ title: 'Job' }),
    model_type: z
      .literal('completion')
      .default('completion')
      .exactOptional()
      .openapi({ title: 'Model Type' }),
  })
  .openapi({
    title: 'CompletionFTModelOut',
    required: [
      'id',
      'created',
      'owned_by',
      'workspace_id',
      'root',
      'root_version',
      'archived',
      'capabilities',
      'job',
    ],
  })
  .openapi('CompletionFTModelOut')

const UpdateFTModelInSchema = z
  .object({
    name: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Name' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
  })
  .openapi({ title: 'UpdateFTModelIn', required: [] })
  .openapi('UpdateFTModelIn')

const ArchiveFTModelOutSchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    object: z.literal('model').default('model').exactOptional().openapi({ title: 'Object' }),
    archived: z.boolean().default(true).exactOptional().openapi({ title: 'Archived' }),
  })
  .openapi({ title: 'ArchiveFTModelOut', required: ['id'] })
  .openapi('ArchiveFTModelOut')

const UnarchiveFTModelOutSchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    object: z.literal('model').default('model').exactOptional().openapi({ title: 'Object' }),
    archived: z.boolean().default(false).exactOptional().openapi({ title: 'Archived' }),
  })
  .openapi({ title: 'UnarchiveFTModelOut', required: ['id'] })
  .openapi('UnarchiveFTModelOut')

const BatchJobStatusSchema = z
  .enum([
    'QUEUED',
    'RUNNING',
    'SUCCESS',
    'FAILED',
    'TIMEOUT_EXCEEDED',
    'CANCELLATION_REQUESTED',
    'CANCELLED',
  ])
  .openapi({ title: 'BatchJobStatus' })
  .openapi('BatchJobStatus')

const BatchErrorSchema = z
  .object({
    message: z.string().openapi({ title: 'Message' }),
    count: z.int().default(1).exactOptional().openapi({ title: 'Count' }),
  })
  .openapi({ title: 'BatchError', required: ['message'] })
  .openapi('BatchError')

const BatchJobOutSchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    object: z.literal('batch').default('batch').exactOptional().openapi({ title: 'Object' }),
    input_files: z.array(z.uuid()).openapi({ title: 'Input Files' }),
    metadata: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Metadata' }),
    endpoint: z.string().openapi({ title: 'Endpoint' }),
    model: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Model' }),
    agent_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Agent Id' }),
    output_file: z
      .union([z.uuid(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Output File' }),
    error_file: z
      .union([z.uuid(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Error File' }),
    errors: z.array(BatchErrorSchema).openapi({ title: 'Errors' }),
    outputs: z
      .union([z.array(z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Outputs' }),
    status: BatchJobStatusSchema,
    created_at: z.int().openapi({ title: 'Created At' }),
    total_requests: z.int().openapi({ title: 'Total Requests' }),
    completed_requests: z.int().openapi({ title: 'Completed Requests' }),
    succeeded_requests: z.int().openapi({ title: 'Succeeded Requests' }),
    failed_requests: z.int().openapi({ title: 'Failed Requests' }),
    started_at: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Started At' }),
    completed_at: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Completed At' }),
  })
  .openapi({
    title: 'BatchJobOut',
    required: [
      'id',
      'input_files',
      'endpoint',
      'errors',
      'status',
      'created_at',
      'total_requests',
      'completed_requests',
      'succeeded_requests',
      'failed_requests',
    ],
  })
  .openapi('BatchJobOut')

const BatchJobsOutSchema = z
  .object({
    data: z.array(BatchJobOutSchema).default([]).exactOptional().openapi({ title: 'Data' }),
    object: z.literal('list').default('list').exactOptional().openapi({ title: 'Object' }),
    total: z.int().openapi({ title: 'Total' }),
  })
  .openapi({ title: 'BatchJobsOut', required: ['total'] })
  .openapi('BatchJobsOut')

const ApiEndpointSchema = z
  .enum([
    '/v1/chat/completions',
    '/v1/embeddings',
    '/v1/fim/completions',
    '/v1/moderations',
    '/v1/chat/moderations',
    '/v1/ocr',
    '/v1/classifications',
    '/v1/chat/classifications',
    '/v1/conversations',
    '/v1/audio/transcriptions',
  ])
  .openapi({ title: 'ApiEndpoint' })
  .openapi('ApiEndpoint')

const BatchRequestSchema = z
  .object({
    custom_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Custom Id' }),
    body: z.looseObject({}).openapi({ title: 'Body' }),
  })
  .openapi({ title: 'BatchRequest', required: ['body'] })
  .openapi('BatchRequest')

const BatchJobInSchema = z
  .object({
    input_files: z
      .union([z.array(z.uuid()), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Input Files',
        description:
          'The list of input files to be used for batch inference, these files should be `jsonl` files, containing the input data corresponding to the bory request for the batch inference in a "body" field. An example of such file is the following: ```json {"custom_id": "0", "body": {"max_tokens": 100, "messages": [{"role": "user", "content": "What is the best French cheese?"}]}} {"custom_id": "1", "body": {"max_tokens": 100, "messages": [{"role": "user", "content": "What is the best French wine?"}]}} ```',
      }),
    requests: z
      .union([z.array(BatchRequestSchema).max(10000), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Requests' }),
    endpoint: ApiEndpointSchema.openapi({
      examples: ['/v1/chat/completions', '/v1/embeddings', '/v1/fim/completions'],
      description: 'The endpoint to be used for batch inference.',
    }),
    model: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        examples: ['mistral-small-latest', 'mistral-medium-latest'],
        title: 'Model',
        description: 'The model to be used for batch inference.',
      }),
    agent_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Agent Id',
        description:
          'In case you want to use a specific agent from the **deprecated** agents api for batch inference, you can specify the agent ID here.',
      }),
    metadata: z
      .union([z.record(z.string(), z.string().min(1).max(512)), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Metadata',
        description: 'The metadata of your choice to be associated with the batch inference job.',
      }),
    timeout_hours: z
      .int()
      .default(24)
      .exactOptional()
      .openapi({
        title: 'Timeout Hours',
        description: 'The timeout in hours for the batch inference job.',
      }),
  })
  .openapi({ title: 'BatchJobIn', required: ['endpoint'] })
  .openapi('BatchJobIn')

const FileChunkSchema = z
  .strictObject({
    type: z.literal('file').default('file').exactOptional().openapi({ title: 'Type' }),
    file_id: z.uuid().openapi({ title: 'File Id' }),
  })
  .openapi({ title: 'FileChunk', required: ['file_id'] })
  .openapi('FileChunk')

const AudioChunkSchema = z
  .strictObject({
    type: z
      .literal('input_audio')
      .default('input_audio')
      .exactOptional()
      .openapi({ title: 'Type' }),
    input_audio: z
      .union([z.string(), z.file().openapi({ type: 'string', format: 'binary' })])
      .openapi({ title: 'Input Audio' }),
  })
  .openapi({ title: 'AudioChunk', required: ['input_audio'] })
  .openapi('AudioChunk')

const ContentChunkSchema = z
  .xor([
    TextChunkSchema,
    ImageURLChunkSchema,
    DocumentURLChunkSchema,
    ReferenceChunkSchema,
    FileChunkSchema,
    ThinkChunkSchema,
    AudioChunkSchema,
  ])
  .openapi({
    discriminator: {
      propertyName: 'type',
      mapping: {
        image_url: '#/components/schemas/ImageURLChunk',
        document_url: '#/components/schemas/DocumentURLChunk',
        text: '#/components/schemas/TextChunk',
        reference: '#/components/schemas/ReferenceChunk',
        file: '#/components/schemas/FileChunk',
        thinking: '#/components/schemas/ThinkChunk',
        input_audio: '#/components/schemas/AudioChunk',
      },
    },
    title: 'ContentChunk',
  })
  .openapi('ContentChunk')

const ToolTypesSchema = z.literal('function').openapi({ title: 'ToolTypes' }).openapi('ToolTypes')

const FunctionCallSchema = z
  .strictObject({
    name: z.string().openapi({ title: 'Name' }),
    arguments: z.union([z.looseObject({}), z.string()]).openapi({ title: 'Arguments' }),
  })
  .openapi({ title: 'FunctionCall', required: ['name', 'arguments'] })
  .openapi('FunctionCall')

const ToolCallSchema = z
  .strictObject({
    id: z.string().default('null').exactOptional().openapi({ title: 'Id' }),
    type: ToolTypesSchema.default('function').exactOptional(),
    function: FunctionCallSchema,
    index: z.int().default(0).exactOptional().openapi({ title: 'Index' }),
  })
  .openapi({ title: 'ToolCall', required: ['function'] })
  .openapi('ToolCall')

const AssistantMessageSchema = z
  .strictObject({
    role: z.literal('assistant').default('assistant').exactOptional().openapi({ title: 'Role' }),
    content: z
      .union([z.string(), z.null().nullable(), z.array(ContentChunkSchema)])
      .exactOptional()
      .openapi({ title: 'Content' }),
    tool_calls: z
      .union([z.array(ToolCallSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Tool Calls' }),
    prefix: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Prefix',
        description:
          'Set this to `true` when adding an assistant message as prefix to condition the model response. The role of the prefix message is to force the model to start its answer by the content of the message.',
      }),
  })
  .openapi({ title: 'AssistantMessage', required: [] })
  .openapi('AssistantMessage')

const SystemMessageContentChunksSchema = z
  .xor([TextChunkSchema, ThinkChunkSchema])
  .openapi({
    discriminator: {
      propertyName: 'type',
      mapping: {
        text: '#/components/schemas/TextChunk',
        thinking: '#/components/schemas/ThinkChunk',
      },
    },
    title: 'SystemMessageContentChunks',
  })
  .openapi('SystemMessageContentChunks')

const SystemMessageSchema = z
  .strictObject({
    role: z.literal('system').default('system').exactOptional().openapi({ title: 'Role' }),
    content: z
      .union([z.string(), z.array(SystemMessageContentChunksSchema)])
      .openapi({ title: 'Content' }),
  })
  .openapi({ title: 'SystemMessage', required: ['content'] })
  .openapi('SystemMessage')

const UserMessageSchema = z
  .strictObject({
    role: z.literal('user').default('user').exactOptional().openapi({ title: 'Role' }),
    content: z
      .union([z.string(), z.null().nullable(), z.array(ContentChunkSchema)])
      .openapi({ title: 'Content' }),
  })
  .openapi({ title: 'UserMessage', required: ['content'] })
  .openapi('UserMessage')

const ToolMessageSchema = z
  .strictObject({
    role: z.literal('tool').default('tool').exactOptional().openapi({ title: 'Role' }),
    content: z
      .union([z.string(), z.null().nullable(), z.array(ContentChunkSchema)])
      .openapi({ title: 'Content' }),
    tool_call_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Tool Call Id' }),
    name: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Name' }),
  })
  .openapi({ title: 'ToolMessage', required: ['content'] })
  .openapi('ToolMessage')

const ToolSchema = z
  .strictObject({
    type: ToolTypesSchema.default('function').exactOptional(),
    function: FunctionSchema,
  })
  .openapi({ title: 'Tool', required: ['function'] })
  .openapi('Tool')

const FunctionNameSchema = z
  .strictObject({ name: z.string().openapi({ title: 'Name' }) })
  .openapi({
    title: 'FunctionName',
    required: ['name'],
    description: 'this restriction of `Function` is used to select a specific function to call',
  })
  .openapi('FunctionName')

const ToolChoiceSchema = z
  .strictObject({
    type: ToolTypesSchema.default('function').exactOptional(),
    function: FunctionNameSchema,
  })
  .openapi({
    title: 'ToolChoice',
    required: ['function'],
    description: 'ToolChoice is either a ToolChoiceEnum or a ToolChoice',
  })
  .openapi('ToolChoice')

const MistralPromptModeSchema = z
  .literal('reasoning')
  .openapi({
    title: 'MistralPromptMode',
    description:
      'Available options to the prompt_mode argument on the chat completion endpoint.\nValues represent high-level intent. Assignment to actual SPs is handled internally.\nSystem prompt may include knowledge cutoff date, model capabilities, tone to use, safety guidelines, etc.',
  })
  .openapi('MistralPromptMode')

const ChatCompletionRequestSchema = z
  .strictObject({
    model: z
      .string()
      .openapi({
        examples: ['mistral-large-latest'],
        title: 'Model',
        description:
          'ID of the model to use. You can use the [List Available Models](/api/#tag/models/operation/list_models_v1_models_get) API to see all of your available models, or see our [Model overview](/models) for model descriptions.',
      }),
    temperature: z
      .union([z.number().min(0).max(1.5), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Temperature',
        description:
          'What sampling temperature to use, we recommend between 0.0 and 0.7. Higher values like 0.7 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. We generally recommend altering this or `top_p` but not both. The default value varies depending on the model you are targeting. Call the `/models` endpoint to retrieve the appropriate value.',
      }),
    top_p: z
      .number()
      .min(0)
      .max(1)
      .default(1)
      .exactOptional()
      .openapi({
        title: 'Top P',
        description:
          'Nucleus sampling, where the model considers the results of the tokens with `top_p` probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. We generally recommend altering this or `temperature` but not both.',
      }),
    max_tokens: z
      .union([z.int().min(0), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Max Tokens',
        description:
          "The maximum number of tokens to generate in the completion. The token count of your prompt plus `max_tokens` cannot exceed the model's context length.",
      }),
    stream: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Stream',
        description:
          'Whether to stream back partial progress. If set, tokens will be sent as data-only server-side events as they become available, with the stream terminated by a data: [DONE] message. Otherwise, the server will hold the request open until the timeout or until completion, with the response containing the full result as JSON.',
      }),
    stop: z
      .union([z.string(), z.array(z.string())])
      .exactOptional()
      .openapi({
        title: 'Stop',
        description:
          'Stop generation if this token is detected. Or if one of these tokens is detected when providing an array',
      }),
    random_seed: z
      .union([z.int().min(0), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Random Seed',
        description:
          'The seed to use for random sampling. If set, different calls will generate deterministic results.',
      }),
    metadata: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Metadata' }),
    messages: z
      .array(
        z
          .xor([SystemMessageSchema, UserMessageSchema, AssistantMessageSchema, ToolMessageSchema])
          .openapi({
            discriminator: {
              propertyName: 'role',
              mapping: {
                assistant: '#/components/schemas/AssistantMessage',
                system: '#/components/schemas/SystemMessage',
                tool: '#/components/schemas/ToolMessage',
                user: '#/components/schemas/UserMessage',
              },
            },
          }),
      )
      .openapi({
        examples: [
          [
            {
              role: 'user',
              content: 'Who is the best French painter? Answer in one short sentence.',
            },
          ],
        ],
        title: 'Messages',
        description:
          'The prompt(s) to generate completions for, encoded as a list of dict with role and content.',
      }),
    response_format: ResponseFormatSchema.exactOptional(),
    tools: z
      .union([z.array(ToolSchema), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Tools',
        description:
          'A list of tools the model may call. Use this to provide a list of functions the model may generate JSON inputs for.',
      }),
    tool_choice: z
      .union([ToolChoiceSchema, ToolChoiceEnumSchema])
      .default('auto')
      .exactOptional()
      .openapi({
        title: 'Tool Choice',
        description:
          'Controls which (if any) tool is called by the model. `none` means the model will not call any tool and instead generates a message. `auto` means the model can pick between generating a message or calling one or more tools. `any` or `required` means the model must call one or more tools. Specifying a particular tool via `{"type": "function", "function": {"name": "my_function"}}` forces the model to call that tool.',
      }),
    presence_penalty: z
      .number()
      .min(-2)
      .max(2)
      .default(0)
      .exactOptional()
      .openapi({
        title: 'Presence Penalty',
        description:
          'The `presence_penalty` determines how much the model penalizes the repetition of words or phrases. A higher presence penalty encourages the model to use a wider variety of words and phrases, making the output more diverse and creative.',
      }),
    frequency_penalty: z
      .number()
      .min(-2)
      .max(2)
      .default(0)
      .exactOptional()
      .openapi({
        title: 'Frequency Penalty',
        description:
          'The `frequency_penalty` penalizes the repetition of words based on their frequency in the generated text. A higher frequency penalty discourages the model from repeating words that have already appeared frequently in the output, promoting diversity and reducing repetition.',
      }),
    n: z
      .union([z.int().min(1), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'N',
        description:
          'Number of completions to return for each request, input tokens are only billed once.',
      }),
    prediction: PredictionSchema.default({ type: 'content', content: '' })
      .exactOptional()
      .openapi({
        description:
          'Enable users to specify expected results, optimizing response times by leveraging known or predictable content. This approach is especially effective for updating text documents or code files with minimal changes, reducing latency while maintaining high-quality results.',
      }),
    parallel_tool_calls: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        title: 'Parallel Tool Calls',
        description:
          'Whether to enable parallel function calling during tool use, when enabled the model can call multiple tools in parallel.',
      }),
    prompt_mode: z
      .union([MistralPromptModeSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Allows toggling between the reasoning mode and no system prompt. When set to `reasoning` the system prompt for reasoning models will be used. **Deprecated for reasoning models - use `reasoning_effort` parameter instead.**',
      }),
    reasoning_effort: z
      .enum(['high', 'none'])
      .exactOptional()
      .openapi({
        description:
          'Controls the reasoning effort level for reasoning models. "high" enables comprehensive reasoning traces, "none" disables reasoning effort.',
      }),
    guardrails: z
      .union([z.array(GuardrailConfigSchema), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        title: 'Guardrails',
        description:
          'A list of guardrail configurations to apply to this request. Each guardrail specifies a moderation type, categories with thresholds to evaluate, and an action to take on violation.',
      }),
    prompt_cache_key: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Prompt Cache Key',
        description:
          'A cache key to enable prompt caching. When provided, the API will attempt to reuse previously computed tokens for requests sharing the same prefix (e.g. multi-turn conversations or requests with a similar system prompt). Cached tokens are billed at 10% of the standard input token price.',
      }),
    safe_prompt: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Whether to inject a safety prompt before all conversations.' }),
  })
  .openapi({ title: 'ChatCompletionRequest', required: ['messages', 'model'] })
  .openapi('ChatCompletionRequest')

const ChatModerationRequestSchema = z
  .strictObject({
    input: z
      .union([
        z.array(
          z
            .xor([
              SystemMessageSchema,
              UserMessageSchema,
              AssistantMessageSchema,
              ToolMessageSchema,
            ])
            .openapi({
              discriminator: {
                propertyName: 'role',
                mapping: {
                  assistant: '#/components/schemas/AssistantMessage',
                  system: '#/components/schemas/SystemMessage',
                  tool: '#/components/schemas/ToolMessage',
                  user: '#/components/schemas/UserMessage',
                },
              },
            }),
        ),
        z.array(
          z.array(
            z
              .xor([
                SystemMessageSchema,
                UserMessageSchema,
                AssistantMessageSchema,
                ToolMessageSchema,
              ])
              .openapi({
                discriminator: {
                  propertyName: 'role',
                  mapping: {
                    assistant: '#/components/schemas/AssistantMessage',
                    system: '#/components/schemas/SystemMessage',
                    tool: '#/components/schemas/ToolMessage',
                    user: '#/components/schemas/UserMessage',
                  },
                },
              }),
          ),
        ),
      ])
      .openapi({ title: 'Input', description: 'Chat to classify' }),
    model: z.string().openapi({ title: 'Model' }),
  })
  .openapi({ title: 'ChatModerationRequest', required: ['input', 'model'] })
  .openapi('ChatModerationRequest')

const ClassificationRequestSchema = z
  .strictObject({
    model: z
      .string()
      .openapi({
        examples: ['mistral-moderation-latest'],
        title: 'Model',
        description: 'ID of the model to use.',
      }),
    metadata: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Metadata' }),
    input: z
      .union([z.string(), z.array(z.string())])
      .openapi({ title: 'Input', description: 'Text to classify.' }),
  })
  .openapi({ title: 'ClassificationRequest', required: ['input', 'model'] })
  .openapi('ClassificationRequest')

const EmbeddingDtypeSchema = z
  .enum(['float', 'int8', 'uint8', 'binary', 'ubinary'])
  .openapi({ title: 'EmbeddingDtype' })
  .openapi('EmbeddingDtype')

const EncodingFormatSchema = z
  .enum(['float', 'base64'])
  .openapi({ title: 'EncodingFormat' })
  .openapi('EncodingFormat')

const EmbeddingRequestSchema = z
  .strictObject({
    model: z
      .string()
      .openapi({
        title: 'Model',
        description: 'ID of the model to use.',
        example: 'mistral-embed',
      }),
    metadata: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Metadata' }),
    input: z
      .union([z.string(), z.array(z.string())])
      .openapi({
        title: 'Input',
        description: 'Text to embed.',
        example: ['Embed this sentence.', 'As well as this one.'],
      }),
    output_dimension: z
      .union([z.int().gt(0), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Output Dimension',
        description:
          'The dimension of the output embeddings when feature available. If not provided, a default output dimension will be used.',
      }),
    output_dtype: EmbeddingDtypeSchema.default('float')
      .exactOptional()
      .openapi({
        description:
          'The data type of the output embeddings when feature available. If not provided, a default output data type will be used.',
      }),
    encoding_format: EncodingFormatSchema.default('float')
      .exactOptional()
      .openapi({ description: 'The format of embeddings in the response.' }),
  })
  .openapi({ title: 'EmbeddingRequest', required: ['input', 'model'] })
  .openapi('EmbeddingRequest')

const FIMCompletionRequestSchema = z
  .strictObject({
    model: z
      .string()
      .default('codestral-2404')
      .openapi({
        examples: ['codestral-latest'],
        title: 'Model',
        description: 'ID of the model with FIM to use.',
      }),
    temperature: z
      .union([z.number().min(0).max(1.5), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Temperature',
        description:
          'What sampling temperature to use, we recommend between 0.0 and 0.7. Higher values like 0.7 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. We generally recommend altering this or `top_p` but not both. The default value varies depending on the model you are targeting. Call the `/models` endpoint to retrieve the appropriate value.',
      }),
    top_p: z
      .number()
      .min(0)
      .max(1)
      .default(1)
      .exactOptional()
      .openapi({
        title: 'Top P',
        description:
          'Nucleus sampling, where the model considers the results of the tokens with `top_p` probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. We generally recommend altering this or `temperature` but not both.',
      }),
    max_tokens: z
      .union([z.int().min(0), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Max Tokens',
        description:
          "The maximum number of tokens to generate in the completion. The token count of your prompt plus `max_tokens` cannot exceed the model's context length.",
      }),
    stream: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Stream',
        description:
          'Whether to stream back partial progress. If set, tokens will be sent as data-only server-side events as they become available, with the stream terminated by a data: [DONE] message. Otherwise, the server will hold the request open until the timeout or until completion, with the response containing the full result as JSON.',
      }),
    stop: z
      .union([z.string(), z.array(z.string())])
      .exactOptional()
      .openapi({
        title: 'Stop',
        description:
          'Stop generation if this token is detected. Or if one of these tokens is detected when providing an array',
      }),
    random_seed: z
      .union([z.int().min(0), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Random Seed',
        description:
          'The seed to use for random sampling. If set, different calls will generate deterministic results.',
      }),
    metadata: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Metadata' }),
    prompt: z
      .string()
      .openapi({ examples: ['def'], title: 'Prompt', description: 'The text/code to complete.' }),
    suffix: z
      .union([z.string(), z.null().nullable()])
      .default('')
      .exactOptional()
      .openapi({
        examples: ['return a+b'],
        title: 'Suffix',
        description:
          'Optional text/code that adds more context for the model. When given a `prompt` and a `suffix` the model will fill what is between them. When `suffix` is not provided, the model will simply execute completion starting with `prompt`.',
      }),
    min_tokens: z
      .union([z.int().min(0), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Min Tokens',
        description: 'The minimum number of tokens to generate in the completion.',
      }),
    prompt_cache_key: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Prompt Cache Key',
        description:
          'A cache key to enable prompt caching. When provided, the API will attempt to reuse previously computed tokens for requests sharing the same prefix (e.g. multi-turn conversations or requests with a similar system prompt). Cached tokens are billed at 10% of the standard input token price.',
      }),
  })
  .openapi({ title: 'FIMCompletionRequest', required: ['prompt', 'model'] })
  .openapi('FIMCompletionRequest')

const InstructRequestSchema = z
  .strictObject({
    messages: z
      .array(
        z
          .xor([SystemMessageSchema, UserMessageSchema, AssistantMessageSchema, ToolMessageSchema])
          .openapi({
            discriminator: {
              propertyName: 'role',
              mapping: {
                assistant: '#/components/schemas/AssistantMessage',
                system: '#/components/schemas/SystemMessage',
                tool: '#/components/schemas/ToolMessage',
                user: '#/components/schemas/UserMessage',
              },
            },
          }),
      )
      .openapi({ title: 'Messages' }),
  })
  .openapi({ title: 'InstructRequest', required: ['messages'] })
  .openapi('InstructRequest')

const OCRAsideTextBlockSchema = z
  .strictObject({
    top_left_x: z.int().min(0).openapi({ title: 'Top Left X' }),
    top_left_y: z.int().min(0).openapi({ title: 'Top Left Y' }),
    bottom_right_x: z.int().min(0).openapi({ title: 'Bottom Right X' }),
    bottom_right_y: z.int().min(0).openapi({ title: 'Bottom Right Y' }),
    content: z
      .string()
      .openapi({ title: 'Content', description: 'Text/markdown/html content of this block' }),
    type: z.literal('aside_text').default('aside_text').exactOptional().openapi({ title: 'Type' }),
  })
  .openapi({
    title: 'OCRAsideTextBlock',
    required: ['top_left_x', 'top_left_y', 'bottom_right_x', 'bottom_right_y', 'content'],
  })
  .openapi('OCRAsideTextBlock')

const OCRCaptionBlockSchema = z
  .strictObject({
    top_left_x: z.int().min(0).openapi({ title: 'Top Left X' }),
    top_left_y: z.int().min(0).openapi({ title: 'Top Left Y' }),
    bottom_right_x: z.int().min(0).openapi({ title: 'Bottom Right X' }),
    bottom_right_y: z.int().min(0).openapi({ title: 'Bottom Right Y' }),
    content: z
      .string()
      .openapi({ title: 'Content', description: 'Text/markdown/html content of this block' }),
    type: z.literal('caption').default('caption').exactOptional().openapi({ title: 'Type' }),
  })
  .openapi({
    title: 'OCRCaptionBlock',
    required: ['top_left_x', 'top_left_y', 'bottom_right_x', 'bottom_right_y', 'content'],
  })
  .openapi('OCRCaptionBlock')

const OCRCodeBlockSchema = z
  .strictObject({
    top_left_x: z.int().min(0).openapi({ title: 'Top Left X' }),
    top_left_y: z.int().min(0).openapi({ title: 'Top Left Y' }),
    bottom_right_x: z.int().min(0).openapi({ title: 'Bottom Right X' }),
    bottom_right_y: z.int().min(0).openapi({ title: 'Bottom Right Y' }),
    content: z
      .string()
      .openapi({ title: 'Content', description: 'Text/markdown/html content of this block' }),
    type: z.literal('code').default('code').exactOptional().openapi({ title: 'Type' }),
  })
  .openapi({
    title: 'OCRCodeBlock',
    required: ['top_left_x', 'top_left_y', 'bottom_right_x', 'bottom_right_y', 'content'],
  })
  .openapi('OCRCodeBlock')

const OCRConfidenceScoreSchema = z
  .strictObject({
    text: z.string().openapi({ title: 'Text', description: 'The word or text segment' }),
    confidence: z
      .number()
      .min(0)
      .max(1)
      .openapi({ title: 'Confidence', description: 'Confidence score (0-1)' }),
    start_index: z
      .int()
      .min(0)
      .openapi({
        title: 'Start Index',
        description: 'Start index of the text in the page markdown string',
      }),
  })
  .openapi({
    title: 'OCRConfidenceScore',
    required: ['text', 'confidence', 'start_index'],
    description: 'Confidence score for a token or word in OCR output.',
  })
  .openapi('OCRConfidenceScore')

const OCREquationBlockSchema = z
  .strictObject({
    top_left_x: z.int().min(0).openapi({ title: 'Top Left X' }),
    top_left_y: z.int().min(0).openapi({ title: 'Top Left Y' }),
    bottom_right_x: z.int().min(0).openapi({ title: 'Bottom Right X' }),
    bottom_right_y: z.int().min(0).openapi({ title: 'Bottom Right Y' }),
    content: z
      .string()
      .openapi({ title: 'Content', description: 'Text/markdown/html content of this block' }),
    type: z.literal('equation').default('equation').exactOptional().openapi({ title: 'Type' }),
  })
  .openapi({
    title: 'OCREquationBlock',
    required: ['top_left_x', 'top_left_y', 'bottom_right_x', 'bottom_right_y', 'content'],
  })
  .openapi('OCREquationBlock')

const OCRFooterBlockSchema = z
  .strictObject({
    top_left_x: z.int().min(0).openapi({ title: 'Top Left X' }),
    top_left_y: z.int().min(0).openapi({ title: 'Top Left Y' }),
    bottom_right_x: z.int().min(0).openapi({ title: 'Bottom Right X' }),
    bottom_right_y: z.int().min(0).openapi({ title: 'Bottom Right Y' }),
    content: z
      .string()
      .openapi({ title: 'Content', description: 'Text/markdown/html content of this block' }),
    type: z.literal('footer').default('footer').exactOptional().openapi({ title: 'Type' }),
  })
  .openapi({
    title: 'OCRFooterBlock',
    required: ['top_left_x', 'top_left_y', 'bottom_right_x', 'bottom_right_y', 'content'],
  })
  .openapi('OCRFooterBlock')

const OCRHeaderBlockSchema = z
  .strictObject({
    top_left_x: z.int().min(0).openapi({ title: 'Top Left X' }),
    top_left_y: z.int().min(0).openapi({ title: 'Top Left Y' }),
    bottom_right_x: z.int().min(0).openapi({ title: 'Bottom Right X' }),
    bottom_right_y: z.int().min(0).openapi({ title: 'Bottom Right Y' }),
    content: z
      .string()
      .openapi({ title: 'Content', description: 'Text/markdown/html content of this block' }),
    type: z.literal('header').default('header').exactOptional().openapi({ title: 'Type' }),
  })
  .openapi({
    title: 'OCRHeaderBlock',
    required: ['top_left_x', 'top_left_y', 'bottom_right_x', 'bottom_right_y', 'content'],
  })
  .openapi('OCRHeaderBlock')

const OCRImageBlockSchema = z
  .strictObject({
    top_left_x: z.int().min(0).openapi({ title: 'Top Left X' }),
    top_left_y: z.int().min(0).openapi({ title: 'Top Left Y' }),
    bottom_right_x: z.int().min(0).openapi({ title: 'Bottom Right X' }),
    bottom_right_y: z.int().min(0).openapi({ title: 'Bottom Right Y' }),
    content: z
      .string()
      .openapi({ title: 'Content', description: 'Text/markdown/html content of this block' }),
    type: z.literal('image').default('image').exactOptional().openapi({ title: 'Type' }),
    image_id: z
      .string()
      .openapi({
        title: 'Image Id',
        description: 'References the corresponding entry in OCRPageObject.images',
      }),
  })
  .openapi({
    title: 'OCRImageBlock',
    required: [
      'top_left_x',
      'top_left_y',
      'bottom_right_x',
      'bottom_right_y',
      'content',
      'image_id',
    ],
  })
  .openapi('OCRImageBlock')

const OCRImageObjectSchema = z
  .strictObject({
    id: z.string().openapi({ title: 'Id', description: 'Image ID for extracted image in a page' }),
    top_left_x: z
      .union([z.int().min(0), z.null().nullable()])
      .openapi({
        title: 'Top Left X',
        description: 'X coordinate of top-left corner of the extracted image',
      }),
    top_left_y: z
      .union([z.int().min(0), z.null().nullable()])
      .openapi({
        title: 'Top Left Y',
        description: 'Y coordinate of top-left corner of the extracted image',
      }),
    bottom_right_x: z
      .union([z.int().min(0), z.null().nullable()])
      .openapi({
        title: 'Bottom Right X',
        description: 'X coordinate of bottom-right corner of the extracted image',
      }),
    bottom_right_y: z
      .union([z.int().min(0), z.null().nullable()])
      .openapi({
        title: 'Bottom Right Y',
        description: 'Y coordinate of bottom-right corner of the extracted image',
      }),
    image_base64: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Image Base64', description: 'Base64 string of the extracted image' }),
    image_annotation: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Image Annotation',
        description: 'Annotation of the extracted image in json str',
      }),
  })
  .openapi({
    title: 'OCRImageObject',
    required: ['id', 'top_left_x', 'top_left_y', 'bottom_right_x', 'bottom_right_y'],
  })
  .openapi('OCRImageObject')

const OCRListBlockSchema = z
  .strictObject({
    top_left_x: z.int().min(0).openapi({ title: 'Top Left X' }),
    top_left_y: z.int().min(0).openapi({ title: 'Top Left Y' }),
    bottom_right_x: z.int().min(0).openapi({ title: 'Bottom Right X' }),
    bottom_right_y: z.int().min(0).openapi({ title: 'Bottom Right Y' }),
    content: z
      .string()
      .openapi({ title: 'Content', description: 'Text/markdown/html content of this block' }),
    type: z.literal('list').default('list').exactOptional().openapi({ title: 'Type' }),
  })
  .openapi({
    title: 'OCRListBlock',
    required: ['top_left_x', 'top_left_y', 'bottom_right_x', 'bottom_right_y', 'content'],
  })
  .openapi('OCRListBlock')

const OCRPageConfidenceScoresSchema = z
  .strictObject({
    word_confidence_scores: z
      .array(OCRConfidenceScoreSchema)
      .exactOptional()
      .openapi({
        title: 'Word Confidence Scores',
        description: "Word-level confidence scores (populated only for 'word' granularity)",
      }),
    average_page_confidence_score: z
      .number()
      .min(0)
      .max(1)
      .openapi({
        title: 'Average Page Confidence Score',
        description: 'Average confidence score for the page',
      }),
    minimum_page_confidence_score: z
      .number()
      .min(0)
      .max(1)
      .openapi({
        title: 'Minimum Page Confidence Score',
        description: 'Minimum confidence score for the page',
      }),
  })
  .openapi({
    title: 'OCRPageConfidenceScores',
    required: ['average_page_confidence_score', 'minimum_page_confidence_score'],
    description: 'Confidence scores for an OCR page at various granularities.',
  })
  .openapi('OCRPageConfidenceScores')

const OCRPageDimensionsSchema = z
  .strictObject({
    dpi: z.int().min(0).openapi({ title: 'Dpi', description: 'Dots per inch of the page-image' }),
    height: z
      .int()
      .min(0)
      .openapi({ title: 'Height', description: 'Height of the image in pixels' }),
    width: z.int().min(0).openapi({ title: 'Width', description: 'Width of the image in pixels' }),
  })
  .openapi({ title: 'OCRPageDimensions', required: ['dpi', 'height', 'width'] })
  .openapi('OCRPageDimensions')

const OCRTableObjectSchema = z
  .strictObject({
    id: z.string().openapi({ title: 'Id', description: 'Table ID for extracted table in a page' }),
    content: z
      .string()
      .openapi({ title: 'Content', description: 'Content of the table in the given format' }),
    format: z
      .enum(['markdown', 'html'])
      .openapi({ title: 'Format', description: 'Format of the table' }),
    word_confidence_scores: z
      .union([z.array(OCRConfidenceScoreSchema), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Word Confidence Scores',
        description:
          "Per-word confidence scores for the table content. Returned when confidence_scores_granularity is set to 'word'.",
      }),
  })
  .openapi({ title: 'OCRTableObject', required: ['id', 'content', 'format'] })
  .openapi('OCRTableObject')

const OCRTextBlockSchema = z
  .strictObject({
    top_left_x: z.int().min(0).openapi({ title: 'Top Left X' }),
    top_left_y: z.int().min(0).openapi({ title: 'Top Left Y' }),
    bottom_right_x: z.int().min(0).openapi({ title: 'Bottom Right X' }),
    bottom_right_y: z.int().min(0).openapi({ title: 'Bottom Right Y' }),
    content: z
      .string()
      .openapi({ title: 'Content', description: 'Text/markdown/html content of this block' }),
    type: z.literal('text').default('text').exactOptional().openapi({ title: 'Type' }),
  })
  .openapi({
    title: 'OCRTextBlock',
    required: ['top_left_x', 'top_left_y', 'bottom_right_x', 'bottom_right_y', 'content'],
  })
  .openapi('OCRTextBlock')

const OCRTableBlockSchema = z
  .strictObject({
    top_left_x: z.int().min(0).openapi({ title: 'Top Left X' }),
    top_left_y: z.int().min(0).openapi({ title: 'Top Left Y' }),
    bottom_right_x: z.int().min(0).openapi({ title: 'Bottom Right X' }),
    bottom_right_y: z.int().min(0).openapi({ title: 'Bottom Right Y' }),
    content: z
      .string()
      .openapi({ title: 'Content', description: 'Text/markdown/html content of this block' }),
    type: z.literal('table').default('table').exactOptional().openapi({ title: 'Type' }),
    table_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Table Id',
        description:
          'References the corresponding entry in OCRPageObject.tables, when tables are extracted',
      }),
  })
  .openapi({
    title: 'OCRTableBlock',
    required: ['top_left_x', 'top_left_y', 'bottom_right_x', 'bottom_right_y', 'content'],
  })
  .openapi('OCRTableBlock')

const OCRTitleBlockSchema = z
  .strictObject({
    top_left_x: z.int().min(0).openapi({ title: 'Top Left X' }),
    top_left_y: z.int().min(0).openapi({ title: 'Top Left Y' }),
    bottom_right_x: z.int().min(0).openapi({ title: 'Bottom Right X' }),
    bottom_right_y: z.int().min(0).openapi({ title: 'Bottom Right Y' }),
    content: z
      .string()
      .openapi({ title: 'Content', description: 'Text/markdown/html content of this block' }),
    type: z.literal('title').default('title').exactOptional().openapi({ title: 'Type' }),
  })
  .openapi({
    title: 'OCRTitleBlock',
    required: ['top_left_x', 'top_left_y', 'bottom_right_x', 'bottom_right_y', 'content'],
  })
  .openapi('OCRTitleBlock')

const OCRReferencesBlockSchema = z
  .strictObject({
    top_left_x: z.int().min(0).openapi({ title: 'Top Left X' }),
    top_left_y: z.int().min(0).openapi({ title: 'Top Left Y' }),
    bottom_right_x: z.int().min(0).openapi({ title: 'Bottom Right X' }),
    bottom_right_y: z.int().min(0).openapi({ title: 'Bottom Right Y' }),
    content: z
      .string()
      .openapi({ title: 'Content', description: 'Text/markdown/html content of this block' }),
    type: z.literal('references').default('references').exactOptional().openapi({ title: 'Type' }),
  })
  .openapi({
    title: 'OCRReferencesBlock',
    required: ['top_left_x', 'top_left_y', 'bottom_right_x', 'bottom_right_y', 'content'],
  })
  .openapi('OCRReferencesBlock')

const OCRSignatureBlockSchema = z
  .strictObject({
    top_left_x: z.int().min(0).openapi({ title: 'Top Left X' }),
    top_left_y: z.int().min(0).openapi({ title: 'Top Left Y' }),
    bottom_right_x: z.int().min(0).openapi({ title: 'Bottom Right X' }),
    bottom_right_y: z.int().min(0).openapi({ title: 'Bottom Right Y' }),
    content: z
      .string()
      .openapi({ title: 'Content', description: 'Text/markdown/html content of this block' }),
    type: z.literal('signature').default('signature').exactOptional().openapi({ title: 'Type' }),
  })
  .openapi({
    title: 'OCRSignatureBlock',
    required: ['top_left_x', 'top_left_y', 'bottom_right_x', 'bottom_right_y', 'content'],
    description: 'Signature region. ``content`` is the transcribed name when legible, else ``""``.',
  })
  .openapi('OCRSignatureBlock')

const OCRPageObjectSchema = z
  .strictObject({
    index: z
      .int()
      .min(0)
      .openapi({ title: 'Index', description: 'The page index in a pdf document starting from 0' }),
    markdown: z
      .string()
      .openapi({ title: 'Markdown', description: 'The markdown string response of the page' }),
    images: z
      .array(OCRImageObjectSchema)
      .openapi({ title: 'Images', description: 'List of all extracted images in the page' }),
    tables: z
      .array(OCRTableObjectSchema)
      .exactOptional()
      .openapi({ title: 'Tables', description: 'List of all extracted tables in the page' }),
    hyperlinks: z
      .array(z.string())
      .exactOptional()
      .openapi({ title: 'Hyperlinks', description: 'List of all hyperlinks in the page' }),
    header: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Header', description: 'Header of the page' }),
    footer: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Footer', description: 'Footer of the page' }),
    dimensions: z
      .union([OCRPageDimensionsSchema, z.null().nullable()])
      .openapi({ description: "The dimensions of the PDF Page's screenshot image" }),
    confidence_scores: z
      .union([OCRPageConfidenceScoresSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Confidence scores for the OCR page (populated when confidence_scores_granularity is set)',
      }),
    blocks: z
      .union([
        z.array(
          z
            .xor([
              OCRTextBlockSchema,
              OCRListBlockSchema,
              OCRImageBlockSchema,
              OCRTableBlockSchema,
              OCRTitleBlockSchema,
              OCREquationBlockSchema,
              OCRCaptionBlockSchema,
              OCRCodeBlockSchema,
              OCRReferencesBlockSchema,
              OCRAsideTextBlockSchema,
              OCRHeaderBlockSchema,
              OCRFooterBlockSchema,
              OCRSignatureBlockSchema,
            ])
            .openapi({
              discriminator: {
                propertyName: 'type',
                mapping: {
                  aside_text: '#/components/schemas/OCRAsideTextBlock',
                  caption: '#/components/schemas/OCRCaptionBlock',
                  code: '#/components/schemas/OCRCodeBlock',
                  equation: '#/components/schemas/OCREquationBlock',
                  footer: '#/components/schemas/OCRFooterBlock',
                  header: '#/components/schemas/OCRHeaderBlock',
                  image: '#/components/schemas/OCRImageBlock',
                  list: '#/components/schemas/OCRListBlock',
                  references: '#/components/schemas/OCRReferencesBlock',
                  signature: '#/components/schemas/OCRSignatureBlock',
                  table: '#/components/schemas/OCRTableBlock',
                  text: '#/components/schemas/OCRTextBlock',
                  title: '#/components/schemas/OCRTitleBlock',
                },
              },
            }),
        ),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({
        title: 'Blocks',
        description:
          'Paragraph-level bounding boxes for all content blocks in reading order (populated when include_blocks is True)',
      }),
  })
  .openapi({ title: 'OCRPageObject', required: ['index', 'markdown', 'images', 'dimensions'] })
  .openapi('OCRPageObject')

const OCRRequestSchema = z
  .strictObject({
    model: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Model' }),
    id: z.string().exactOptional().openapi({ title: 'Id' }),
    document: z
      .union([FileChunkSchema, DocumentURLChunkSchema, ImageURLChunkSchema])
      .openapi({ title: 'Document', description: 'Document to run OCR on' }),
    pages: z
      .union([z.string(), z.array(z.int()), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Pages',
        description:
          "Specific pages to process. Accepts a list of integers or a string of comma-separated numbers and ranges (e.g. '0,1,2' or '0-5' or '0,2-4'). Page numbers start from 0.",
      }),
    include_image_base64: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Include Image Base64', description: 'Include image URLs in response' }),
    image_limit: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Image Limit', description: 'Max images to extract' }),
    image_min_size: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Image Min Size',
        description: 'Minimum height and width of image to extract',
      }),
    bbox_annotation_format: z
      .union([ResponseFormatSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Structured output class for extracting useful information from each extracted bounding box / image from document. Only json_schema is valid for this field',
      }),
    document_annotation_format: z
      .union([ResponseFormatSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Structured output class for extracting useful information from the entire document. Only json_schema is valid for this field',
      }),
    document_annotation_prompt: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Document Annotation Prompt',
        description:
          'Optional prompt to guide the model in extracting structured output from the entire document. A document_annotation_format must be provided.',
      }),
    table_format: z
      .union([z.enum(['markdown', 'html']), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Table Format' }),
    extract_header: z.boolean().default(false).exactOptional().openapi({ title: 'Extract Header' }),
    extract_footer: z.boolean().default(false).exactOptional().openapi({ title: 'Extract Footer' }),
    include_blocks: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Include Blocks',
        description: 'Return paragraph-level bounding boxes for all content blocks in the response',
      }),
    confidence_scores_granularity: z
      .union([z.enum(['word', 'page']), z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          "Granularity for confidence scores: 'word' (per-word scores) or 'page' (aggregate only). Defaults to None (no confidence scores) to keep response payload small.",
      }),
  })
  .openapi({ title: 'OCRRequest', required: ['document', 'model'] })
  .openapi('OCRRequest')

const OCRUsageInfoSchema = z
  .strictObject({
    pages_processed: z
      .int()
      .min(0)
      .openapi({ title: 'Pages Processed', description: 'Number of pages processed' }),
    doc_size_bytes: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Doc Size Bytes', description: 'Document size in bytes' }),
  })
  .openapi({ title: 'OCRUsageInfo', required: ['pages_processed'] })
  .openapi('OCRUsageInfo')

const OCRResponseSchema = z
  .strictObject({
    pages: z
      .array(OCRPageObjectSchema)
      .openapi({ title: 'Pages', description: 'List of OCR info for pages.' }),
    model: z
      .string()
      .openapi({ title: 'Model', description: 'The model used to generate the OCR.' }),
    document_annotation: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Document Annotation',
        description: 'Formatted response in the request_format if provided in json str',
      }),
    usage_info: OCRUsageInfoSchema.openapi({ description: 'Usage info for the OCR request.' }),
  })
  .openapi({ title: 'OCRResponse', required: ['pages', 'model', 'usage_info'] })
  .openapi('OCRResponse')

const TranscriptionSegmentChunkSchema = z
  .strictObject({
    type: z
      .literal('transcription_segment')
      .default('transcription_segment')
      .exactOptional()
      .openapi({ title: 'Type' }),
    text: z.string().openapi({ title: 'Text' }),
    start: z.number().openapi({ title: 'Start' }),
    end: z.number().openapi({ title: 'End' }),
    score: z.union([z.number(), z.null().nullable()]).exactOptional().openapi({ title: 'Score' }),
    speaker_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Speaker Id' }),
  })
  .openapi({ title: 'TranscriptionSegmentChunk', required: ['text', 'start', 'end'] })
  .openapi('TranscriptionSegmentChunk')

const PromptTokensDetailsSchema = z
  .strictObject({
    cached_tokens: z.int().default(0).exactOptional().openapi({ title: 'Cached Tokens' }),
  })
  .openapi({
    title: 'PromptTokensDetails',
    description: 'Token usage details for the prompt.',
    required: [],
  })
  .openapi('PromptTokensDetails')

const UsageInfoSchema = z
  .strictObject({
    prompt_tokens: z.int().default(0).openapi({ title: 'Prompt Tokens' }),
    completion_tokens: z.int().default(0).openapi({ title: 'Completion Tokens' }),
    total_tokens: z.int().default(0).openapi({ title: 'Total Tokens' }),
    prompt_audio_seconds: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Prompt Audio Seconds' }),
    num_cached_tokens: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Num Cached Tokens' }),
    prompt_tokens_details: z
      .union([PromptTokensDetailsSchema, z.null().nullable()])
      .exactOptional(),
    prompt_token_details: z.union([PromptTokensDetailsSchema, z.null().nullable()]).exactOptional(),
  })
  .openapi({ title: 'UsageInfo', required: ['prompt_tokens', 'completion_tokens', 'total_tokens'] })
  .openapi('UsageInfo')

const TranscriptionResponseSchema = z
  .strictObject({
    model: z.string().openapi({ title: 'Model' }),
    text: z.string().openapi({ title: 'Text' }),
    language: z
      .union([z.string().regex(/^\w{2}$/), z.null().nullable()])
      .openapi({ title: 'Language' }),
    segments: z
      .array(TranscriptionSegmentChunkSchema)
      .exactOptional()
      .openapi({ title: 'Segments' }),
    usage: UsageInfoSchema,
  })
  .openapi({ title: 'TranscriptionResponse', required: ['model', 'text', 'language', 'usage'] })
  .openapi('TranscriptionResponse')

const SpeechOutputFormatSchema = z
  .enum(['pcm', 'wav', 'mp3', 'flac', 'opus'])
  .openapi({ title: 'SpeechOutputFormat' })
  .openapi('SpeechOutputFormat')

const SpeechRequestSchema = z
  .looseObject({
    model: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Model' }),
    stream: z.boolean().default(false).exactOptional().openapi({ title: 'Stream' }),
    voice_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Voice Id',
        description: 'The preset or custom voice to use for generating the speech.',
      }),
    ref_audio: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Ref Audio',
        description: 'The base64-encoded audio reference for zero-shot voice cloning.',
      }),
    input: z.string().openapi({ title: 'Input', description: 'Text to generate speech from.' }),
    response_format: SpeechOutputFormatSchema.default('mp3')
      .exactOptional()
      .openapi({ description: 'Output audio format. Defaults to mp3.' }),
  })
  .openapi({ required: ['input'], title: 'SpeechRequest' })
  .openapi('SpeechRequest')

const SpeechResponseSchema = z
  .strictObject({
    audio_data: z
      .string()
      .openapi({ title: 'Audio Data', description: 'Base64 encoded audio data' }),
  })
  .openapi({ required: ['audio_data'], title: 'SpeechResponse' })
  .openapi('SpeechResponse')

const SpeechStreamAudioDeltaSchema = z
  .strictObject({
    type: z
      .literal('speech.audio.delta')
      .default('speech.audio.delta')
      .exactOptional()
      .openapi({ title: 'Type' }),
    audio_data: z.string().openapi({ title: 'Audio Data' }),
  })
  .openapi({ required: ['audio_data'], title: 'SpeechStreamAudioDelta' })
  .openapi('SpeechStreamAudioDelta')

const SpeechStreamDoneSchema = z
  .strictObject({
    type: z
      .literal('speech.audio.done')
      .default('speech.audio.done')
      .exactOptional()
      .openapi({ title: 'Type' }),
    usage: UsageInfoSchema,
  })
  .openapi({ required: ['usage'], title: 'SpeechStreamDone' })
  .openapi('SpeechStreamDone')

const SpeechStreamEventsSchema = z
  .strictObject({
    event: z.enum(['speech.audio.delta', 'speech.audio.done']).openapi({ title: 'Event' }),
    data: z
      .xor([SpeechStreamAudioDeltaSchema, SpeechStreamDoneSchema])
      .openapi({
        title: 'Data',
        discriminator: {
          propertyName: 'type',
          mapping: {
            'speech.audio.delta': '#/components/schemas/SpeechStreamAudioDelta',
            'speech.audio.done': '#/components/schemas/SpeechStreamDone',
          },
        },
      }),
  })
  .openapi({ required: ['event', 'data'], title: 'SpeechStreamEvents' })
  .openapi('SpeechStreamEvents')

const VoiceCreateRequestSchema = z
  .object({
    name: z.string().openapi({ title: 'Name' }),
    slug: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Slug' }),
    languages: z.array(z.string()).default([]).exactOptional().openapi({ title: 'Languages' }),
    gender: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Gender' }),
    age: z.union([z.int(), z.null().nullable()]).exactOptional().openapi({ title: 'Age' }),
    tags: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Tags' }),
    color: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Color' }),
    retention_notice: z.int().default(30).exactOptional().openapi({ title: 'Retention Notice' }),
    sample_audio: z
      .string()
      .openapi({ title: 'Sample Audio', description: 'Base64-encoded audio file' }),
    sample_filename: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Sample Filename',
        description: 'Original filename for extension detection',
      }),
  })
  .openapi({
    title: 'VoiceCreateRequest',
    required: ['name', 'sample_audio'],
    description: 'Request model for creating a new voice with base64 audio.',
  })
  .openapi('VoiceCreateRequest')

const VoiceResponseSchema = z
  .object({
    name: z.string().openapi({ title: 'Name' }),
    slug: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Slug' }),
    languages: z.array(z.string()).default([]).exactOptional().openapi({ title: 'Languages' }),
    gender: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Gender' }),
    age: z.union([z.int(), z.null().nullable()]).exactOptional().openapi({ title: 'Age' }),
    tags: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Tags' }),
    color: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Color' }),
    retention_notice: z.int().default(30).exactOptional().openapi({ title: 'Retention Notice' }),
    id: z.uuid().openapi({ title: 'Id' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    user_id: z.union([z.string(), z.null().nullable()]).openapi({ title: 'User Id' }),
  })
  .openapi({
    title: 'VoiceResponse',
    required: ['name', 'id', 'created_at', 'user_id'],
    description: 'Schema for voice response',
  })
  .openapi('VoiceResponse')

const VoiceListResponseSchema = z
  .object({
    items: z.array(VoiceResponseSchema).openapi({ title: 'Items' }),
    total: z.int().openapi({ title: 'Total' }),
    page: z.int().openapi({ title: 'Page' }),
    page_size: z.int().openapi({ title: 'Page Size' }),
    total_pages: z.int().openapi({ title: 'Total Pages' }),
  })
  .openapi({
    title: 'VoiceListResponse',
    required: ['items', 'total', 'page', 'page_size', 'total_pages'],
    description: 'Schema for voice list response',
  })
  .openapi('VoiceListResponse')

const VoiceUpdateRequestSchema = z
  .object({
    name: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Name' }),
    languages: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Languages' }),
    gender: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Gender' }),
    age: z.union([z.int(), z.null().nullable()]).exactOptional().openapi({ title: 'Age' }),
    tags: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Tags' }),
  })
  .openapi({
    title: 'VoiceUpdateRequest',
    description: 'Request model for partially updating voice metadata.',
    required: [],
  })
  .openapi('VoiceUpdateRequest')

const FileSchema = z
  .file()
  .openapi({
    type: 'string',
    format: 'binary',
    title: 'File',
    description:
      'The File object (not file name) to be uploaded.\n To upload a file and specify a custom file name you should format your request as such:\n ```bash\n file=@path/to/your/file.jsonl;filename=custom_name.jsonl\n ```\n Otherwise, you can just keep the original file name:\n ```bash\n file=@path/to/your/file.jsonl\n ```',
  })
  .openapi('File')

const TimestampGranularitySchema = z
  .enum(['segment', 'word'])
  .openapi({ title: 'TimestampGranularity' })
  .openapi('TimestampGranularity')

const AudioTranscriptionRequestSchema = z
  .object({
    model: z
      .string()
      .openapi({
        examples: ['voxtral-mini-latest', 'voxtral-mini-2507'],
        title: 'Model',
        description: 'ID of the model to be used.',
      }),
    file: z
      .union([FileSchema, z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'File' }),
    file_url: z
      .union([z.url().min(1).max(2083), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'File Url', description: 'Url of a file to be transcribed' }),
    file_id: z
      .union([z.string(), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'File Id', description: 'ID of a file uploaded to /v1/files' }),
    language: z
      .union([z.string().regex(/^\w{2}$/), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        title: 'Language',
        description: "Language of the audio, e.g. 'en'. Providing the language can boost accuracy.",
      }),
    temperature: z
      .union([z.number(), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Temperature' }),
    stream: z.literal(false).default(false).exactOptional().openapi({ title: 'Stream' }),
    diarize: z.boolean().default(false).exactOptional().openapi({ title: 'Diarize' }),
    context_bias: z
      .array(z.string().regex(/^[^,\s]+$/))
      .default([])
      .exactOptional()
      .openapi({ title: 'Context Bias' }),
    timestamp_granularities: z
      .array(TimestampGranularitySchema)
      .exactOptional()
      .openapi({
        title: 'Timestamp Granularities',
        description: 'Granularities of timestamps to include in the response.',
      }),
  })
  .openapi({ title: 'AudioTranscriptionRequest', required: ['model'] })
  .openapi('AudioTranscriptionRequest')

const AudioTranscriptionRequestStreamSchema = z
  .object({
    model: z.string().openapi({ title: 'Model' }),
    file: z
      .union([FileSchema, z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'File' }),
    file_url: z
      .union([z.url().min(1).max(2083), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'File Url', description: 'Url of a file to be transcribed' }),
    file_id: z
      .union([z.string(), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'File Id', description: 'ID of a file uploaded to /v1/files' }),
    language: z
      .union([z.string().regex(/^\w{2}$/), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        title: 'Language',
        description: "Language of the audio, e.g. 'en'. Providing the language can boost accuracy.",
      }),
    temperature: z
      .union([z.number(), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Temperature' }),
    stream: z.literal(true).default(true).exactOptional().openapi({ title: 'Stream' }),
    diarize: z.boolean().default(false).exactOptional().openapi({ title: 'Diarize' }),
    context_bias: z
      .array(z.string().regex(/^[^,\s]+$/))
      .default([])
      .exactOptional()
      .openapi({ title: 'Context Bias' }),
    timestamp_granularities: z
      .array(TimestampGranularitySchema)
      .exactOptional()
      .openapi({
        title: 'Timestamp Granularities',
        description: 'Granularities of timestamps to include in the response.',
      }),
  })
  .openapi({ title: 'AudioTranscriptionRequestStream', required: ['model'] })
  .openapi('AudioTranscriptionRequestStream')

const TranscriptionStreamLanguageSchema = z
  .strictObject({
    type: z
      .literal('transcription.language')
      .default('transcription.language')
      .exactOptional()
      .openapi({ title: 'Type' }),
    audio_language: z
      .string()
      .regex(/^\w{2}$/)
      .openapi({ title: 'Audio Language' }),
  })
  .openapi({ title: 'TranscriptionStreamLanguage', required: ['audio_language'] })
  .openapi('TranscriptionStreamLanguage')

const TranscriptionStreamSegmentDeltaSchema = z
  .strictObject({
    type: z
      .literal('transcription.segment')
      .default('transcription.segment')
      .exactOptional()
      .openapi({ title: 'Type' }),
    text: z.string().openapi({ title: 'Text' }),
    start: z.number().openapi({ title: 'Start' }),
    end: z.number().openapi({ title: 'End' }),
    speaker_id: z
      .union([z.string(), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Speaker Id' }),
  })
  .openapi({ title: 'TranscriptionStreamSegmentDelta', required: ['text', 'start', 'end'] })
  .openapi('TranscriptionStreamSegmentDelta')

const TranscriptionStreamTextDeltaSchema = z
  .strictObject({
    type: z
      .literal('transcription.text.delta')
      .default('transcription.text.delta')
      .exactOptional()
      .openapi({ title: 'Type' }),
    text: z.string().openapi({ title: 'Text' }),
  })
  .openapi({ title: 'TranscriptionStreamTextDelta', required: ['text'] })
  .openapi('TranscriptionStreamTextDelta')

const TranscriptionStreamDoneSchema = z
  .strictObject({
    model: z.string().openapi({ title: 'Model' }),
    text: z.string().openapi({ title: 'Text' }),
    language: z
      .union([z.string().regex(/^\w{2}$/), z.null().nullable()])
      .openapi({ title: 'Language' }),
    segments: z
      .array(TranscriptionSegmentChunkSchema)
      .exactOptional()
      .openapi({ title: 'Segments' }),
    usage: UsageInfoSchema,
    type: z
      .literal('transcription.done')
      .default('transcription.done')
      .exactOptional()
      .openapi({ title: 'Type' }),
  })
  .openapi({ title: 'TranscriptionStreamDone', required: ['model', 'text', 'language', 'usage'] })
  .openapi('TranscriptionStreamDone')

const TranscriptionStreamEventTypesSchema = z
  .enum([
    'transcription.language',
    'transcription.segment',
    'transcription.text.delta',
    'transcription.done',
  ])
  .openapi({ title: 'TranscriptionStreamEventTypes' })
  .openapi('TranscriptionStreamEventTypes')

const TranscriptionStreamEventsSchema = z
  .strictObject({
    event: TranscriptionStreamEventTypesSchema,
    data: z
      .xor([
        TranscriptionStreamTextDeltaSchema,
        TranscriptionStreamLanguageSchema,
        TranscriptionStreamSegmentDeltaSchema,
        TranscriptionStreamDoneSchema,
      ])
      .openapi({
        discriminator: {
          propertyName: 'type',
          mapping: {
            'transcription.done': '#/components/schemas/TranscriptionStreamDone',
            'transcription.language': '#/components/schemas/TranscriptionStreamLanguage',
            'transcription.segment': '#/components/schemas/TranscriptionStreamSegmentDelta',
            'transcription.text.delta': '#/components/schemas/TranscriptionStreamTextDelta',
          },
        },
        title: 'Data',
      }),
  })
  .openapi({ title: 'TranscriptionStreamEvents', required: ['event', 'data'] })
  .openapi('TranscriptionStreamEvents')

const AudioEncodingSchema = z
  .enum(['pcm_s16le', 'pcm_s32le', 'pcm_f16le', 'pcm_f32le', 'pcm_mulaw', 'pcm_alaw'])
  .openapi({ title: 'AudioEncoding' })
  .openapi('AudioEncoding')

const AudioFormatSchema = z
  .strictObject({
    encoding: AudioEncodingSchema,
    sample_rate: z.int().min(8000).max(96000).openapi({ title: 'Sample Rate' }),
  })
  .openapi({ title: 'AudioFormat', required: ['encoding', 'sample_rate'] })
  .openapi('AudioFormat')

const RealtimeTranscriptionSessionUpdatePayloadSchema = z
  .strictObject({
    audio_format: z
      .union([AudioFormatSchema, z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'Set before sending audio. Audio format updates are rejected after audio starts.',
      }),
    target_streaming_delay_ms: z
      .union([z.int(), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        title: 'Target Streaming Delay Ms',
        description:
          'Set before sending audio. Streaming delay updates are rejected after audio starts.',
      }),
  })
  .openapi({ title: 'RealtimeTranscriptionSessionUpdatePayload', required: [] })
  .openapi('RealtimeTranscriptionSessionUpdatePayload')

const RealtimeTranscriptionSessionUpdateMessageSchema = z
  .strictObject({
    type: z
      .literal('session.update')
      .default('session.update')
      .exactOptional()
      .openapi({ title: 'Type' }),
    session: RealtimeTranscriptionSessionUpdatePayloadSchema,
  })
  .openapi({ title: 'RealtimeTranscriptionSessionUpdateMessage', required: ['session'] })
  .openapi('RealtimeTranscriptionSessionUpdateMessage')

const RealtimeTranscriptionInputAudioAppendSchema = z
  .strictObject({
    type: z
      .literal('input_audio.append')
      .default('input_audio.append')
      .exactOptional()
      .openapi({ title: 'Type' }),
    audio: z
      .base64()
      .openapi({
        title: 'Audio',
        description:
          'Base64-encoded raw PCM bytes matching the current audio_format. Max decoded size: 262144 bytes.',
      }),
  })
  .openapi({ title: 'RealtimeTranscriptionInputAudioAppend', required: ['audio'] })
  .openapi('RealtimeTranscriptionInputAudioAppend')

const RealtimeTranscriptionInputAudioFlushSchema = z
  .strictObject({
    type: z
      .literal('input_audio.flush')
      .default('input_audio.flush')
      .exactOptional()
      .openapi({ title: 'Type' }),
  })
  .openapi({ title: 'RealtimeTranscriptionInputAudioFlush', required: [] })
  .openapi('RealtimeTranscriptionInputAudioFlush')

const RealtimeTranscriptionInputAudioEndSchema = z
  .strictObject({
    type: z
      .literal('input_audio.end')
      .default('input_audio.end')
      .exactOptional()
      .openapi({ title: 'Type' }),
  })
  .openapi({ title: 'RealtimeTranscriptionInputAudioEnd', required: [] })
  .openapi('RealtimeTranscriptionInputAudioEnd')

const RealtimeTranscriptionClientMessageSchema = z
  .xor([
    RealtimeTranscriptionSessionUpdateMessageSchema,
    RealtimeTranscriptionInputAudioAppendSchema,
    RealtimeTranscriptionInputAudioFlushSchema,
    RealtimeTranscriptionInputAudioEndSchema,
  ])
  .openapi({
    discriminator: {
      propertyName: 'type',
      mapping: {
        'input_audio.append': '#/components/schemas/RealtimeTranscriptionInputAudioAppend',
        'input_audio.end': '#/components/schemas/RealtimeTranscriptionInputAudioEnd',
        'input_audio.flush': '#/components/schemas/RealtimeTranscriptionInputAudioFlush',
        'session.update': '#/components/schemas/RealtimeTranscriptionSessionUpdateMessage',
      },
    },
    title: 'RealtimeTranscriptionClientMessage',
  })
  .openapi('RealtimeTranscriptionClientMessage')

const AgentsCompletionRequestSchema = z
  .strictObject({
    max_tokens: z
      .union([z.int().min(0), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Max Tokens',
        description:
          "The maximum number of tokens to generate in the completion. The token count of your prompt plus `max_tokens` cannot exceed the model's context length.",
      }),
    stream: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Stream',
        description:
          'Whether to stream back partial progress. If set, tokens will be sent as data-only server-side events as they become available, with the stream terminated by a data: [DONE] message. Otherwise, the server will hold the request open until the timeout or until completion, with the response containing the full result as JSON.',
      }),
    stop: z
      .union([z.string(), z.array(z.string())])
      .exactOptional()
      .openapi({
        title: 'Stop',
        description:
          'Stop generation if this token is detected. Or if one of these tokens is detected when providing an array',
      }),
    random_seed: z
      .union([z.int().min(0), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Random Seed',
        description:
          'The seed to use for random sampling. If set, different calls will generate deterministic results.',
      }),
    metadata: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Metadata' }),
    messages: z
      .array(
        z
          .xor([SystemMessageSchema, UserMessageSchema, AssistantMessageSchema, ToolMessageSchema])
          .openapi({
            discriminator: {
              propertyName: 'role',
              mapping: {
                assistant: '#/components/schemas/AssistantMessage',
                system: '#/components/schemas/SystemMessage',
                tool: '#/components/schemas/ToolMessage',
                user: '#/components/schemas/UserMessage',
              },
            },
          }),
      )
      .openapi({
        examples: [
          [
            {
              role: 'user',
              content: 'Who is the best French painter? Answer in one short sentence.',
            },
          ],
        ],
        title: 'Messages',
        description:
          'The prompt(s) to generate completions for, encoded as a list of dict with role and content.',
      }),
    response_format: ResponseFormatSchema.exactOptional(),
    tools: z
      .union([z.array(ToolSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Tools' }),
    tool_choice: z
      .union([ToolChoiceSchema, ToolChoiceEnumSchema])
      .default('auto')
      .exactOptional()
      .openapi({ title: 'Tool Choice' }),
    presence_penalty: z
      .number()
      .min(-2)
      .max(2)
      .default(0)
      .exactOptional()
      .openapi({
        title: 'Presence Penalty',
        description:
          'The `presence_penalty` determines how much the model penalizes the repetition of words or phrases. A higher presence penalty encourages the model to use a wider variety of words and phrases, making the output more diverse and creative.',
      }),
    frequency_penalty: z
      .number()
      .min(-2)
      .max(2)
      .default(0)
      .exactOptional()
      .openapi({
        title: 'Frequency Penalty',
        description:
          'The `frequency_penalty` penalizes the repetition of words based on their frequency in the generated text. A higher frequency penalty discourages the model from repeating words that have already appeared frequently in the output, promoting diversity and reducing repetition.',
      }),
    n: z
      .union([z.int().min(1), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'N',
        description:
          'Number of completions to return for each request, input tokens are only billed once.',
      }),
    prediction: PredictionSchema.default({ type: 'content', content: '' })
      .exactOptional()
      .openapi({
        description:
          'Enable users to specify expected results, optimizing response times by leveraging known or predictable content. This approach is especially effective for updating text documents or code files with minimal changes, reducing latency while maintaining high-quality results.',
      }),
    parallel_tool_calls: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ title: 'Parallel Tool Calls' }),
    prompt_mode: z
      .union([MistralPromptModeSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Allows toggling between the reasoning mode and no system prompt. When set to `reasoning` the system prompt for reasoning models will be used. **Deprecated for reasoning models - use `reasoning_effort` parameter instead.**',
      }),
    reasoning_effort: z
      .enum(['high', 'none'])
      .exactOptional()
      .openapi({
        description:
          'Controls the reasoning effort level for reasoning models. "high" enables comprehensive reasoning traces, "none" disables reasoning effort.',
      }),
    prompt_cache_key: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Prompt Cache Key',
        description:
          'A cache key to enable prompt caching. When provided, the API will attempt to reuse previously computed tokens for requests sharing the same prefix (e.g. multi-turn conversations or requests with a similar system prompt). Cached tokens are billed at 10% of the standard input token price.',
      }),
    agent_id: z
      .string()
      .openapi({ description: 'The ID of the agent to use for this completion.' }),
  })
  .openapi({ title: 'AgentsCompletionRequest', required: ['messages', 'agent_id'] })
  .openapi('AgentsCompletionRequest')

const ChatClassificationRequestInputsSchema = z
  .union([InstructRequestSchema, z.array(InstructRequestSchema)])
  .openapi({ title: 'ChatClassificationRequestInputs', description: 'Chat to classify' })
  .openapi('ChatClassificationRequestInputs')

const ChatClassificationRequestSchema = z
  .strictObject({
    model: z.string().openapi({ title: 'Model' }),
    input: ChatClassificationRequestInputsSchema,
  })
  .openapi({ title: 'ChatClassificationRequest', required: ['input', 'model'] })
  .openapi('ChatClassificationRequest')

const ClassificationTargetResultSchema = z
  .object({
    scores: z.record(z.string(), z.number()).openapi({ title: 'ClassifierTargetResultScores' }),
  })
  .openapi({ title: 'ClassificationTargetResult', required: ['scores'] })
  .openapi('ClassificationTargetResult')

const ClassificationResponseSchema = z
  .object({
    id: z.string().openapi({ example: 'mod-e5cc70bb28c444948073e77776eb30ef' }),
    model: z.string(),
    results: z.array(
      z
        .record(z.string(), ClassificationTargetResultSchema)
        .openapi({ title: 'ClassificationTargetResult' }),
    ),
  })
  .openapi({ title: 'ClassificationResponse', required: ['id', 'model', 'results'] })
  .openapi('ClassificationResponse')

const ModerationObjectSchema = z
  .object({
    categories: z
      .record(z.string(), z.boolean())
      .exactOptional()
      .openapi({ description: 'Moderation result thresholds' }),
    category_scores: z
      .record(z.string(), z.number())
      .exactOptional()
      .openapi({ description: 'Moderation result' }),
  })
  .openapi({ title: 'ModerationObject', required: [] })
  .openapi('ModerationObject')

const ModerationResponseSchema = z
  .object({
    id: z.string().openapi({ example: 'mod-e5cc70bb28c444948073e77776eb30ef' }),
    model: z.string(),
    results: z.array(ModerationObjectSchema),
  })
  .openapi({ title: 'ModerationResponse', required: ['id', 'model', 'results'] })
  .openapi('ModerationResponse')

const ProcessStatusSchema = z
  .enum([
    'self_managed',
    'missing_content',
    'noop',
    'done',
    'todo',
    'in_progress',
    'error',
    'waiting_for_capacity',
  ])
  .openapi({ title: 'ProcessStatus' })
  .openapi('ProcessStatus')

const DocumentOutSchema = z
  .object({
    id: z.uuid().openapi({ title: 'Id' }),
    library_id: z.uuid().openapi({ title: 'Library Id' }),
    hash: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Hash' }),
    mime_type: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Mime Type' }),
    extension: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Extension' }),
    size: z.union([z.int(), z.null().nullable()]).openapi({ title: 'Size' }),
    name: z.string().openapi({ title: 'Name' }),
    summary: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Summary' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    last_processed_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Last Processed At' }),
    number_of_pages: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Number Of Pages' }),
    process_status: ProcessStatusSchema,
    uploaded_by_id: z.union([z.uuid(), z.null().nullable()]).openapi({ title: 'Uploaded By Id' }),
    uploaded_by_type: z.string(),
    tokens_processing_main_content: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Tokens Processing Main Content' }),
    tokens_processing_summary: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Tokens Processing Summary' }),
    url: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Url' }),
    attributes: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Attributes' }),
    processing_status: z.string().openapi({ title: 'Processing Status', readOnly: true }),
    tokens_processing_total: z.int().openapi({ title: 'Tokens Processing Total', readOnly: true }),
  })
  .openapi({
    title: 'DocumentOut',
    required: [
      'id',
      'library_id',
      'hash',
      'mime_type',
      'extension',
      'size',
      'name',
      'created_at',
      'process_status',
      'uploaded_by_id',
      'uploaded_by_type',
      'processing_status',
      'tokens_processing_total',
    ],
  })
  .openapi('DocumentOut')

const DocumentTextContentSchema = z
  .object({ text: z.string().openapi({ title: 'Text' }) })
  .openapi({ title: 'DocumentTextContent', required: ['text'] })
  .openapi('DocumentTextContent')

const DocumentUpdateInSchema = z
  .object({
    name: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Name' }),
    attributes: z
      .union([
        z.record(
          z.string(),
          z.union([
            z.boolean(),
            z.string(),
            z.int(),
            z.number(),
            z.iso.datetime({ offset: true }),
            z.array(z.string()),
            z.array(z.int()),
            z.array(z.number()),
            z.array(z.boolean()),
          ]),
        ),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({ title: 'Attributes' }),
  })
  .openapi({ title: 'DocumentUpdateIn', required: [] })
  .openapi('DocumentUpdateIn')

const FilterGroupSchema: z.ZodType<FilterGroupType> = z
  .lazy(() =>
    z
      .object({
        AND: z
          .union([
            z.array(z.union([FilterGroupSchema, FilterConditionSchema])),
            z.null().nullable(),
          ])
          .exactOptional()
          .openapi({ title: 'And' }),
        OR: z
          .union([
            z.array(z.union([FilterGroupSchema, FilterConditionSchema])),
            z.null().nullable(),
          ])
          .exactOptional()
          .openapi({ title: 'Or' }),
      })
      .openapi({ title: 'FilterGroup', required: [] }),
  )
  .openapi('FilterGroup')

const LibraryInSchema = z
  .object({
    name: z.string().openapi({ title: 'Name' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    chunk_size: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Chunk Size' }),
  })
  .openapi({ title: 'LibraryIn', required: ['name'] })
  .openapi('LibraryIn')

const LibraryInUpdateSchema = z
  .object({
    name: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Name' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
  })
  .openapi({ title: 'LibraryInUpdate', required: [] })
  .openapi('LibraryInUpdate')

const LibraryOutSchema = z
  .object({
    id: z.uuid().openapi({ title: 'Id' }),
    name: z.string().openapi({ title: 'Name' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
    owner_id: z.union([z.uuid(), z.null().nullable()]).openapi({ title: 'Owner Id' }),
    owner_type: z.string(),
    total_size: z.int().openapi({ title: 'Total Size' }),
    nb_documents: z.int().openapi({ title: 'Nb Documents' }),
    chunk_size: z.union([z.int(), z.null().nullable()]).openapi({ title: 'Chunk Size' }),
    emoji: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Emoji' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    generated_description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Generated Description' }),
    explicit_user_members_count: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Explicit User Members Count' }),
    explicit_workspace_members_count: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Explicit Workspace Members Count' }),
    org_sharing_role: z.union([z.string(), z.null().nullable()]).exactOptional(),
    generated_name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ description: 'Generated Name' }),
  })
  .openapi({
    title: 'LibraryOut',
    required: [
      'id',
      'name',
      'created_at',
      'updated_at',
      'owner_id',
      'owner_type',
      'total_size',
      'nb_documents',
      'chunk_size',
    ],
  })
  .openapi('LibraryOut')

const PaginationInfoSchema = z
  .object({
    total_items: z.int().openapi({ title: 'Total Items' }),
    total_pages: z.int().openapi({ title: 'Total Pages' }),
    current_page: z.int().openapi({ title: 'Current Page' }),
    page_size: z.int().openapi({ title: 'Page Size' }),
    has_more: z.boolean().openapi({ title: 'Has More' }),
  })
  .openapi({
    title: 'PaginationInfo',
    required: ['total_items', 'total_pages', 'current_page', 'page_size', 'has_more'],
  })
  .openapi('PaginationInfo')

const ListDocumentOutSchema = z
  .object({
    pagination: PaginationInfoSchema,
    data: z.array(DocumentOutSchema).openapi({ title: 'Data' }),
  })
  .openapi({ title: 'ListDocumentOut', required: ['pagination', 'data'] })
  .openapi('ListDocumentOut')

const ListLibraryOutSchema = z
  .object({ data: z.array(LibraryOutSchema).openapi({ title: 'Data' }) })
  .openapi({ title: 'ListLibraryOut', required: ['data'] })
  .openapi('ListLibraryOut')

const SharingOutSchema = z
  .object({
    library_id: z.uuid().openapi({ title: 'Library Id' }),
    user_id: z.union([z.uuid(), z.null().nullable()]).exactOptional().openapi({ title: 'User Id' }),
    org_id: z.uuid().openapi({ title: 'Org Id' }),
    role: z.string(),
    share_with_type: z.string(),
    share_with_uuid: z.union([z.uuid(), z.null().nullable()]).openapi({ title: 'Share With Uuid' }),
  })
  .openapi({
    title: 'SharingOut',
    required: ['library_id', 'org_id', 'role', 'share_with_type', 'share_with_uuid'],
  })
  .openapi('SharingOut')

const ListSharingOutSchema = z
  .object({ data: z.array(SharingOutSchema).openapi({ title: 'Data' }) })
  .openapi({ title: 'ListSharingOut', required: ['data'] })
  .openapi('ListSharingOut')

const ProcessingStatusOutSchema = z
  .object({
    document_id: z.uuid().openapi({ title: 'Document Id' }),
    process_status: ProcessStatusSchema,
    processing_status: z.string().openapi({ title: 'Processing Status', readOnly: true }),
  })
  .openapi({
    title: 'ProcessingStatusOut',
    required: ['document_id', 'process_status', 'processing_status'],
  })
  .openapi('ProcessingStatusOut')

const ShareEnumSchema = z
  .enum(['Viewer', 'Editor'])
  .openapi({ title: 'ShareEnum', 'x-speakeasy-unknown-values': 'allow' })
  .openapi('ShareEnum')

const EntityTypeSchema = z
  .enum(['User', 'Workspace', 'Org'])
  .openapi({
    title: 'EntityType',
    description: 'The type of entity, used to share a library.',
    'x-speakeasy-unknown-values': 'allow',
  })
  .openapi('EntityType')

const SharingDeleteSchema = z
  .object({
    org_id: z.union([z.uuid(), z.null().nullable()]).exactOptional().openapi({ title: 'Org Id' }),
    share_with_uuid: z
      .uuid()
      .openapi({
        description: 'The id of the entity (user, workspace or organization) to share with',
      }),
    share_with_type: EntityTypeSchema,
  })
  .openapi({ title: 'SharingDelete', required: ['share_with_uuid', 'share_with_type', 'level'] })
  .openapi('SharingDelete')

const SharingInSchema = z
  .object({
    org_id: z.union([z.uuid(), z.null().nullable()]).exactOptional().openapi({ title: 'Org Id' }),
    level: ShareEnumSchema,
    share_with_uuid: z
      .uuid()
      .openapi({
        description: 'The id of the entity (user, workspace or organization) to share with',
      }),
    share_with_type: EntityTypeSchema,
  })
  .openapi({ title: 'SharingIn', required: ['share_with_uuid', 'share_with_type', 'level'] })
  .openapi('SharingIn')

const BaseFieldDefinitionSchema = z
  .object({
    name: z.string().openapi({ title: 'Name' }),
    label: z.string().openapi({ title: 'Label' }),
    type: z
      .enum(['ENUM', 'TEXT', 'INT', 'FLOAT', 'BOOL', 'TIMESTAMP', 'ARRAY'])
      .openapi({ title: 'Type' }),
    group: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Group' }),
    supported_operators: z
      .array(
        z.enum([
          'lt',
          'lte',
          'gt',
          'gte',
          'startswith',
          'istartswith',
          'endswith',
          'iendswith',
          'contains',
          'icontains',
          'matches',
          'notcontains',
          'inotcontains',
          'eq',
          'neq',
          'isnull',
          'includes',
          'excludes',
          'len_eq',
        ]),
      )
      .openapi({ title: 'Supported Operators', readOnly: true }),
  })
  .openapi({
    title: 'BaseFieldDefinition',
    required: ['name', 'label', 'type', 'supported_operators'],
  })
  .openapi('BaseFieldDefinition')

const BaseTaskStatusSchema = z
  .enum([
    'RUNNING',
    'COMPLETED',
    'FAILED',
    'CANCELED',
    'TERMINATED',
    'CONTINUED_AS_NEW',
    'TIMED_OUT',
    'UNKNOWN',
  ])
  .openapi({ title: 'BaseTaskStatus' })
  .openapi('BaseTaskStatus')

const FilterPayloadSchema = z
  .object({
    filters: z
      .union([FilterGroupSchema, FilterConditionSchema, z.null().nullable()])
      .openapi({ title: 'Filters' }),
  })
  .openapi({ title: 'FilterPayload', required: ['filters'] })
  .openapi('FilterPayload')

const JudgeClassificationOutputOptionSchema = z
  .object({
    value: z.string().openapi({ title: 'Value' }),
    description: z.string().openapi({ title: 'Description' }),
  })
  .openapi({ title: 'JudgeClassificationOutputOption', required: ['value', 'description'] })
  .openapi('JudgeClassificationOutputOption')

const JudgeClassificationOutputSchema = z
  .object({
    type: z
      .literal('CLASSIFICATION')
      .default('CLASSIFICATION')
      .exactOptional()
      .openapi({ title: 'Type' }),
    options: z.array(JudgeClassificationOutputOptionSchema).openapi({ title: 'Options' }),
  })
  .openapi({ title: 'JudgeClassificationOutput', required: ['options'] })
  .openapi('JudgeClassificationOutput')

const JudgeRegressionOutputSchema = z
  .object({
    type: z.literal('REGRESSION').default('REGRESSION').exactOptional().openapi({ title: 'Type' }),
    min: z.number().min(0).default(0).exactOptional().openapi({ title: 'Min' }),
    min_description: z.string().openapi({ title: 'Min Description' }),
    max: z.number().lt(1000000000).default(1).exactOptional().openapi({ title: 'Max' }),
    max_description: z.string().openapi({ title: 'Max Description' }),
  })
  .openapi({ title: 'JudgeRegressionOutput', required: ['min_description', 'max_description'] })
  .openapi('JudgeRegressionOutput')

const JudgePreviewSchema = z
  .object({
    id: z.uuid().openapi({ title: 'Id' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
    deleted_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Deleted At' }),
    owner_id: z.uuid().openapi({ title: 'Owner Id' }),
    workspace_id: z.uuid().openapi({ title: 'Workspace Id' }),
    name: z.string().openapi({ title: 'Name' }),
    description: z.string().openapi({ title: 'Description' }),
    model_name: z.string().openapi({ title: 'Model Name' }),
    output: z
      .xor([JudgeClassificationOutputSchema, JudgeRegressionOutputSchema])
      .openapi({
        discriminator: {
          propertyName: 'type',
          mapping: {
            CLASSIFICATION: '#/components/schemas/JudgeClassificationOutput',
            REGRESSION: '#/components/schemas/JudgeRegressionOutput',
          },
        },
        title: 'Output',
      }),
    instructions: z.string().openapi({ title: 'Instructions' }),
    tools: z.array(z.string()).openapi({ title: 'Tools' }),
    up_revision: z
      .union([z.uuid(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Up Revision' }),
    down_revision: z
      .union([z.uuid(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Down Revision' }),
    base_revision: z
      .union([z.uuid(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Base Revision' }),
  })
  .openapi({
    title: 'JudgePreview',
    required: [
      'id',
      'created_at',
      'updated_at',
      'deleted_at',
      'owner_id',
      'workspace_id',
      'name',
      'description',
      'model_name',
      'output',
      'instructions',
      'tools',
    ],
  })
  .openapi('JudgePreview')

const CampaignPreviewSchema = z
  .object({
    id: z.uuid().openapi({ title: 'Id' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
    deleted_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Deleted At' }),
    name: z.string().openapi({ title: 'Name' }),
    owner_id: z.uuid().openapi({ title: 'Owner Id' }),
    workspace_id: z.uuid().openapi({ title: 'Workspace Id' }),
    description: z.string().openapi({ title: 'Description' }),
    max_nb_events: z.int().openapi({ title: 'Max Nb Events' }),
    search_params: FilterPayloadSchema,
    judge: JudgePreviewSchema,
  })
  .openapi({
    title: 'CampaignPreview',
    required: [
      'id',
      'created_at',
      'updated_at',
      'deleted_at',
      'name',
      'owner_id',
      'workspace_id',
      'description',
      'max_nb_events',
      'search_params',
      'judge',
    ],
  })
  .openapi('CampaignPreview')

const PaginatedResultCampaignPreviewSchema = z
  .object({
    results: z.array(CampaignPreviewSchema).exactOptional().openapi({ title: 'Results' }),
    count: z.int().openapi({ title: 'Count' }),
    next: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Next' }),
    previous: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Previous' }),
  })
  .openapi({ title: 'PaginatedResult[CampaignPreview]', required: ['count'] })
  .openapi('PaginatedResultCampaignPreview')

const CampaignPreviewsSchema = z
  .object({ campaigns: PaginatedResultCampaignPreviewSchema })
  .openapi({ title: 'CampaignPreviews', required: ['campaigns'] })
  .openapi('CampaignPreviews')

const ChatCompletionEventPreviewSchema = z
  .object({
    event_id: z.string().openapi({ title: 'Event Id' }),
    correlation_id: z.string().openapi({ title: 'Correlation Id' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    extra_fields: z
      .record(
        z.string(),
        z.union([
          z.boolean(),
          z.int(),
          z.number(),
          z.string(),
          z.iso.datetime({ offset: true }),
          z.array(z.string()),
          z.null().nullable(),
        ]),
      )
      .openapi({ title: 'Extra Fields' }),
    nb_input_tokens: z.int().openapi({ title: 'Nb Input Tokens' }),
    nb_output_tokens: z.int().openapi({ title: 'Nb Output Tokens' }),
  })
  .openapi({
    title: 'ChatCompletionEventPreview',
    required: [
      'event_id',
      'correlation_id',
      'created_at',
      'extra_fields',
      'nb_input_tokens',
      'nb_output_tokens',
    ],
  })
  .openapi('ChatCompletionEventPreview')

const PaginatedResultChatCompletionEventPreviewSchema = z
  .object({
    results: z
      .array(ChatCompletionEventPreviewSchema)
      .exactOptional()
      .openapi({ title: 'Results' }),
    count: z.int().openapi({ title: 'Count' }),
    next: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Next' }),
    previous: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Previous' }),
  })
  .openapi({ title: 'PaginatedResult[ChatCompletionEventPreview]', required: ['count'] })
  .openapi('PaginatedResultChatCompletionEventPreview')

const CampaignSelectedEventsSchema = z
  .object({ completion_events: PaginatedResultChatCompletionEventPreviewSchema })
  .openapi({ title: 'CampaignSelectedEvents', required: ['completion_events'] })
  .openapi('CampaignSelectedEvents')

const CampaignStatusSchema = z
  .object({ status: BaseTaskStatusSchema })
  .openapi({ title: 'CampaignStatus', required: ['status'] })
  .openapi('CampaignStatus')

const ChatCompletionEventIdsSchema = z
  .object({ completion_event_ids: z.array(z.string()).openapi({ title: 'Completion Event Ids' }) })
  .openapi({ title: 'ChatCompletionEventIds', required: ['completion_event_ids'] })
  .openapi('ChatCompletionEventIds')

const ChatTranscriptionEventSchema = z
  .object({
    audio_url: z.string().openapi({ title: 'Audio Url' }),
    model: z.string().openapi({ title: 'Model' }),
    response_message: z.looseObject({}).openapi({ title: 'Response Message' }),
  })
  .openapi({
    title: 'ChatTranscriptionEvent',
    required: ['audio_url', 'model', 'response_message'],
  })
  .openapi('ChatTranscriptionEvent')

const ChatCompletionEventSchema = z
  .object({
    event_id: z.string().openapi({ title: 'Event Id' }),
    correlation_id: z.string().openapi({ title: 'Correlation Id' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    extra_fields: z
      .record(
        z.string(),
        z.union([
          z.boolean(),
          z.int(),
          z.number(),
          z.string(),
          z.iso.datetime({ offset: true }),
          z.array(z.string()),
          z.null().nullable(),
        ]),
      )
      .openapi({ title: 'Extra Fields' }),
    nb_input_tokens: z.int().openapi({ title: 'Nb Input Tokens' }),
    nb_output_tokens: z.int().openapi({ title: 'Nb Output Tokens' }),
    enabled_tools: z.array(z.looseObject({})).openapi({ title: 'Enabled Tools' }),
    request_messages: z.array(z.looseObject({})).openapi({ title: 'Request Messages' }),
    response_messages: z.array(z.looseObject({})).openapi({ title: 'Response Messages' }),
    nb_messages: z.int().openapi({ title: 'Nb Messages' }),
    chat_transcription_events: z
      .array(ChatTranscriptionEventSchema)
      .openapi({ title: 'Chat Transcription Events' }),
  })
  .openapi({
    title: 'ChatCompletionEvent',
    required: [
      'event_id',
      'correlation_id',
      'created_at',
      'extra_fields',
      'nb_input_tokens',
      'nb_output_tokens',
      'enabled_tools',
      'request_messages',
      'response_messages',
      'nb_messages',
      'chat_transcription_events',
    ],
  })
  .openapi('ChatCompletionEvent')

const FeedResultChatCompletionEventPreviewSchema = z
  .object({
    results: z
      .array(ChatCompletionEventPreviewSchema)
      .exactOptional()
      .openapi({ title: 'Results' }),
    next: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Next' }),
    cursor: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Cursor' }),
  })
  .openapi({ title: 'FeedResult[ChatCompletionEventPreview]', required: [] })
  .openapi('FeedResultChatCompletionEventPreview')

const ChatCompletionEventsSchema = z
  .object({ completion_events: FeedResultChatCompletionEventPreviewSchema })
  .openapi({ title: 'ChatCompletionEvents', required: ['completion_events'] })
  .openapi('ChatCompletionEvents')

const ChatCompletionFieldOptionsSchema = z
  .object({
    options: z
      .union([
        z.array(z.union([z.string(), z.boolean(), z.null().nullable()])),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({ title: 'Options' }),
  })
  .openapi({ title: 'ChatCompletionFieldOptions', required: [] })
  .openapi('ChatCompletionFieldOptions')

const FieldGroupSchema = z
  .object({
    name: z.string().openapi({ title: 'Name' }),
    label: z.string().openapi({ title: 'Label' }),
  })
  .openapi({ title: 'FieldGroup', required: ['name', 'label'] })
  .openapi('FieldGroup')

const ChatCompletionFieldsSchema = z
  .object({
    field_definitions: z.array(BaseFieldDefinitionSchema).openapi({ title: 'Field Definitions' }),
    field_groups: z.array(FieldGroupSchema).openapi({ title: 'Field Groups' }),
  })
  .openapi({ title: 'ChatCompletionFields', required: ['field_definitions', 'field_groups'] })
  .openapi('ChatCompletionFields')

const ConversationPayloadSchema = z
  .looseObject({ messages: z.array(z.looseObject({})).openapi({ title: 'Messages' }) })
  .openapi({ title: 'ConversationPayload', required: ['messages'], description: '' })
  .openapi('ConversationPayload')

const ConversationSourceSchema = z
  .enum(['EXPLORER', 'UPLOADED_FILE', 'DIRECT_INPUT', 'PLAYGROUND'])
  .openapi({ title: 'ConversationSource' })
  .openapi('ConversationSource')

const DatasetExportSchema = z
  .object({ file_url: z.string().openapi({ title: 'File Url' }) })
  .openapi({ title: 'DatasetExport', required: ['file_url'] })
  .openapi('DatasetExport')

const DatasetImportTaskSchema = z
  .object({
    id: z.uuid().openapi({ title: 'Id' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
    deleted_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Deleted At' }),
    creator_id: z.uuid().openapi({ title: 'Creator Id' }),
    dataset_id: z.uuid().openapi({ title: 'Dataset Id' }),
    workspace_id: z.uuid().openapi({ title: 'Workspace Id' }),
    status: BaseTaskStatusSchema,
    progress: z
      .union([z.int().min(0).max(100), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Progress' }),
    message: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Message' }),
  })
  .openapi({
    title: 'DatasetImportTask',
    required: [
      'id',
      'created_at',
      'updated_at',
      'deleted_at',
      'creator_id',
      'dataset_id',
      'workspace_id',
      'status',
    ],
  })
  .openapi('DatasetImportTask')

const PaginatedResultDatasetImportTaskSchema = z
  .object({
    results: z.array(DatasetImportTaskSchema).exactOptional().openapi({ title: 'Results' }),
    count: z.int().openapi({ title: 'Count' }),
    next: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Next' }),
    previous: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Previous' }),
  })
  .openapi({ title: 'PaginatedResult[DatasetImportTask]', required: ['count'] })
  .openapi('PaginatedResultDatasetImportTask')

const DatasetImportTasksSchema = z
  .object({ tasks: PaginatedResultDatasetImportTaskSchema })
  .openapi({ title: 'DatasetImportTasks', required: ['tasks'] })
  .openapi('DatasetImportTasks')

const DatasetSchema = z
  .object({
    id: z.uuid().openapi({ title: 'Id' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
    deleted_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Deleted At' }),
    name: z.string().openapi({ title: 'Name' }),
    description: z.string().openapi({ title: 'Description' }),
    owner_id: z.uuid().openapi({ title: 'Owner Id' }),
    workspace_id: z.uuid().openapi({ title: 'Workspace Id' }),
  })
  .openapi({
    title: 'Dataset',
    required: [
      'id',
      'created_at',
      'updated_at',
      'deleted_at',
      'name',
      'description',
      'owner_id',
      'workspace_id',
    ],
  })
  .openapi('Dataset')

const DatasetPreviewSchema = z
  .object({
    id: z.uuid().openapi({ title: 'Id' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
    deleted_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Deleted At' }),
    name: z.string().openapi({ title: 'Name' }),
    description: z.string().openapi({ title: 'Description' }),
    owner_id: z.uuid().openapi({ title: 'Owner Id' }),
    workspace_id: z.uuid().openapi({ title: 'Workspace Id' }),
  })
  .openapi({
    title: 'DatasetPreview',
    required: [
      'id',
      'created_at',
      'updated_at',
      'deleted_at',
      'name',
      'description',
      'owner_id',
      'workspace_id',
    ],
  })
  .openapi('DatasetPreview')

const PaginatedResultDatasetPreviewSchema = z
  .object({
    results: z.array(DatasetPreviewSchema).exactOptional().openapi({ title: 'Results' }),
    count: z.int().openapi({ title: 'Count' }),
    next: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Next' }),
    previous: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Previous' }),
  })
  .openapi({ title: 'PaginatedResult[DatasetPreview]', required: ['count'] })
  .openapi('PaginatedResultDatasetPreview')

const DatasetPreviewsSchema = z
  .object({ datasets: PaginatedResultDatasetPreviewSchema })
  .openapi({ title: 'DatasetPreviews', required: ['datasets'] })
  .openapi('DatasetPreviews')

const DatasetRecordSchema = z
  .object({
    id: z.uuid().openapi({ title: 'Id' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
    deleted_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ title: 'Deleted At' }),
    dataset_id: z.uuid().openapi({ title: 'Dataset Id' }),
    payload: ConversationPayloadSchema,
    properties: z.looseObject({}).openapi({ title: 'Properties' }),
    source: ConversationSourceSchema,
  })
  .openapi({
    title: 'DatasetRecord',
    required: [
      'id',
      'created_at',
      'updated_at',
      'deleted_at',
      'dataset_id',
      'payload',
      'properties',
      'source',
    ],
  })
  .openapi('DatasetRecord')

const PaginatedResultDatasetRecordSchema = z
  .object({
    results: z.array(DatasetRecordSchema).exactOptional().openapi({ title: 'Results' }),
    count: z.int().openapi({ title: 'Count' }),
    next: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Next' }),
    previous: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Previous' }),
  })
  .openapi({ title: 'PaginatedResult[DatasetRecord]', required: ['count'] })
  .openapi('PaginatedResultDatasetRecord')

const DatasetRecordsSchema = z
  .object({ records: PaginatedResultDatasetRecordSchema })
  .openapi({ title: 'DatasetRecords', required: ['records'] })
  .openapi('DatasetRecords')

const DeleteDatasetRecordsInSchemaSchema = z
  .object({
    dataset_record_ids: z.array(z.uuid()).min(1).max(500).openapi({ title: 'Dataset Record Ids' }),
  })
  .openapi({ title: 'DeleteDatasetRecordsInSchema', required: ['dataset_record_ids'] })
  .openapi('DeleteDatasetRecordsInSchema')

const FieldOptionCountItemSchema = z
  .object({
    value: z.string().openapi({ title: 'Value' }),
    count: z.int().openapi({ title: 'Count' }),
  })
  .openapi({ title: 'FieldOptionCountItem', required: ['value', 'count'] })
  .openapi('FieldOptionCountItem')

const FieldOptionCountsInSchemaSchema = z
  .object({ filter_params: z.union([FilterPayloadSchema, z.null().nullable()]).exactOptional() })
  .openapi({ title: 'FieldOptionCountsInSchema', required: [] })
  .openapi('FieldOptionCountsInSchema')

const FieldOptionCountsSchema = z
  .object({ counts: z.array(FieldOptionCountItemSchema).openapi({ title: 'Counts' }) })
  .openapi({ title: 'FieldOptionCounts', required: ['counts'] })
  .openapi('FieldOptionCounts')

const GetChatCompletionEventIdsInSchemaSchema = z
  .object({
    search_params: FilterPayloadSchema,
    extra_fields: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Extra Fields' }),
  })
  .openapi({ title: 'GetChatCompletionEventIdsInSchema', required: ['search_params'] })
  .openapi('GetChatCompletionEventIdsInSchema')

const GetChatCompletionEventsInSchemaSchema = z
  .object({
    search_params: FilterPayloadSchema,
    extra_fields: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Extra Fields' }),
  })
  .openapi({ title: 'GetChatCompletionEventsInSchema', required: ['search_params'] })
  .openapi('GetChatCompletionEventsInSchema')

const JudgeOutputSchema = z
  .object({
    analysis: z.string().openapi({ title: 'Analysis' }),
    answer: z.union([z.string(), z.number()]).openapi({ title: 'Answer' }),
  })
  .openapi({ title: 'JudgeOutput', required: ['analysis', 'answer'] })
  .openapi('JudgeOutput')

const JudgeOutputTypeSchema = z
  .enum(['REGRESSION', 'CLASSIFICATION'])
  .openapi({ title: 'JudgeOutputType' })
  .openapi('JudgeOutputType')

const PaginatedResultJudgePreviewSchema = z
  .object({
    results: z.array(JudgePreviewSchema).exactOptional().openapi({ title: 'Results' }),
    count: z.int().openapi({ title: 'Count' }),
    next: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Next' }),
    previous: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Previous' }),
  })
  .openapi({ title: 'PaginatedResult[JudgePreview]', required: ['count'] })
  .openapi('PaginatedResultJudgePreview')

const JudgePreviewsSchema = z
  .object({ judges: PaginatedResultJudgePreviewSchema })
  .openapi({ title: 'JudgePreviews', required: ['judges'] })
  .openapi('JudgePreviews')

const PatchDatasetInSchemaSchema = z
  .object({
    name: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Name' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
  })
  .openapi({ title: 'PatchDatasetInSchema', required: [] })
  .openapi('PatchDatasetInSchema')

const PostCampaignInSchemaSchema = z
  .object({
    search_params: FilterPayloadSchema,
    judge_id: z.uuid().openapi({ title: 'Judge Id' }),
    name: z.string().min(5).max(50).openapi({ title: 'Name' }),
    description: z.string().openapi({ title: 'Description' }),
    max_nb_events: z.int().gt(0).max(10000).openapi({ title: 'Max Nb Events' }),
  })
  .openapi({
    title: 'PostCampaignInSchema',
    required: ['search_params', 'judge_id', 'name', 'description', 'max_nb_events'],
  })
  .openapi('PostCampaignInSchema')

const PostJudgeInSchemaSchema = z
  .object({
    name: z.string().min(5).max(50).openapi({ title: 'Name' }),
    description: z.string().max(500).openapi({ title: 'Description' }),
    model_name: z.string().max(500).openapi({ title: 'Model Name' }),
    output: z
      .xor([JudgeClassificationOutputSchema, JudgeRegressionOutputSchema])
      .openapi({
        discriminator: {
          propertyName: 'type',
          mapping: {
            CLASSIFICATION: '#/components/schemas/JudgeClassificationOutput',
            REGRESSION: '#/components/schemas/JudgeRegressionOutput',
          },
        },
        title: 'Output',
      }),
    instructions: z.string().max(10000).openapi({ title: 'Instructions' }),
    tools: z.array(z.string()).openapi({ title: 'Tools' }),
  })
  .openapi({
    title: 'PostJudgeInSchema',
    required: ['name', 'description', 'model_name', 'output', 'instructions', 'tools'],
  })
  .openapi('PostJudgeInSchema')

const PostChatCompletionEventJudgingInSchemaSchema = z
  .object({ judge_definition: PostJudgeInSchemaSchema })
  .openapi({ title: 'PostChatCompletionEventJudgingInSchema', required: ['judge_definition'] })
  .openapi('PostChatCompletionEventJudgingInSchema')

const PostDatasetImportFromCampaignInSchemaSchema = z
  .object({ campaign_id: z.uuid().openapi({ title: 'Campaign Id' }) })
  .openapi({ title: 'PostDatasetImportFromCampaignInSchema', required: ['campaign_id'] })
  .openapi('PostDatasetImportFromCampaignInSchema')

const PostDatasetImportFromDatasetInSchemaSchema = z
  .object({
    dataset_record_ids: z
      .array(z.uuid())
      .min(1)
      .max(10000)
      .openapi({ title: 'Dataset Record Ids' }),
  })
  .openapi({ title: 'PostDatasetImportFromDatasetInSchema', required: ['dataset_record_ids'] })
  .openapi('PostDatasetImportFromDatasetInSchema')

const PostDatasetImportFromExplorerInSchemaSchema = z
  .object({
    completion_event_ids: z.array(z.string()).max(500).openapi({ title: 'Completion Event Ids' }),
  })
  .openapi({ title: 'PostDatasetImportFromExplorerInSchema', required: ['completion_event_ids'] })
  .openapi('PostDatasetImportFromExplorerInSchema')

const PostDatasetImportFromFileInSchemaSchema = z
  .object({ file_id: z.string().openapi({ title: 'File Id' }) })
  .openapi({ title: 'PostDatasetImportFromFileInSchema', required: ['file_id'] })
  .openapi('PostDatasetImportFromFileInSchema')

const PostDatasetImportFromPlaygroundInSchemaSchema = z
  .object({ conversation_ids: z.array(z.string()).openapi({ title: 'Conversation Ids' }) })
  .openapi({ title: 'PostDatasetImportFromPlaygroundInSchema', required: ['conversation_ids'] })
  .openapi('PostDatasetImportFromPlaygroundInSchema')

const PostDatasetInSchemaSchema = z
  .object({
    name: z.string().min(5).max(50).openapi({ title: 'Name' }),
    description: z.string().max(200).openapi({ title: 'Description' }),
  })
  .openapi({ title: 'PostDatasetInSchema', required: ['name', 'description'] })
  .openapi('PostDatasetInSchema')

const PostDatasetRecordInSchemaSchema = z
  .object({
    payload: ConversationPayloadSchema,
    properties: z.looseObject({}).openapi({ title: 'Properties' }),
  })
  .openapi({ title: 'PostDatasetRecordInSchema', required: ['payload', 'properties'] })
  .openapi('PostDatasetRecordInSchema')

const PostDatasetRecordJudgingInSchemaSchema = z
  .object({ judge_definition: PostJudgeInSchemaSchema })
  .openapi({ title: 'PostDatasetRecordJudgingInSchema', required: ['judge_definition'] })
  .openapi('PostDatasetRecordJudgingInSchema')

const PutDatasetRecordPayloadInSchemaSchema = z
  .object({ payload: ConversationPayloadSchema })
  .openapi({ title: 'PutDatasetRecordPayloadInSchema', required: ['payload'] })
  .openapi('PutDatasetRecordPayloadInSchema')

const PutDatasetRecordPropertiesInSchemaSchema = z
  .object({ properties: z.looseObject({}).openapi({ title: 'Properties' }) })
  .openapi({ title: 'PutDatasetRecordPropertiesInSchema', required: ['properties'] })
  .openapi('PutDatasetRecordPropertiesInSchema')

const PutJudgeInSchemaSchema = z
  .object({
    name: z.string().min(5).max(50).openapi({ title: 'Name' }),
    description: z.string().max(500).openapi({ title: 'Description' }),
    model_name: z.string().max(500).openapi({ title: 'Model Name' }),
    output: z
      .xor([JudgeClassificationOutputSchema, JudgeRegressionOutputSchema])
      .openapi({
        discriminator: {
          propertyName: 'type',
          mapping: {
            CLASSIFICATION: '#/components/schemas/JudgeClassificationOutput',
            REGRESSION: '#/components/schemas/JudgeRegressionOutput',
          },
        },
        title: 'Output',
      }),
    instructions: z.string().max(10000).openapi({ title: 'Instructions' }),
    tools: z.array(z.string()).openapi({ title: 'Tools' }),
  })
  .openapi({
    title: 'PutJudgeInSchema',
    required: ['name', 'description', 'model_name', 'output', 'instructions', 'tools'],
  })
  .openapi('PutJudgeInSchema')

const ObservabilityErrorCodeSchema = z
  .enum([
    'UNKNOWN_ERROR',
    'VALIDATION_ERROR',
    'AUTH_FORBIDDEN',
    'AUTH_FORBIDDEN_NOT_WORKSPACE_ADMIN',
    'AUTH_FORBIDDEN_WORKSPACE_NOT_FOUND',
    'AUTH_FORBIDDEN_ROLE_NOT_FOUND',
    'AUTH_FORBIDDEN_ORG_NOT_WHITELISTED',
    'AUTH_UNAUTHORIZED',
    'FEATURE_NOT_SUPPORTED',
    'FIELDS_BAD_REQUEST',
    'FIELDS_NOT_FOUND',
    'SEARCH_NOT_FOUND',
    'SEARCH_BAD_REQUEST',
    'SEARCH_SERVICE_UNAVAILABLE',
    'DATABASE_ERROR',
    'DATABASE_TIMEOUT',
    'DATABASE_UNAVAILABLE',
    'DATABASE_QUERY_ERROR',
    'SEARCH_FILTER_TO_SQL_CONVERSION_ERROR',
    'JUDGE_CONVERSATION_FORMAT_ERROR',
    'JUDGE_MISTRAL_API_ERROR',
    'JUDGE_MISTRAL_API_TIMEOUT',
    'JUDGE_NAME_ALREADY_EXISTS',
    'JUDGE_NOT_FOUND',
    'JUDGE_ALREADY_HAS_NEW_VERSION',
    'JUDGE_USED_IN_CAMPAIGN_CANNOT_BE_UPDATED',
    'JUDGE_DID_NOT_CHANGE',
    'CAMPAIGN_NOT_FOUND',
    'CAMPAIGN_NO_MATCHING_EVENTS',
    'DATASET_NOT_FOUND',
    'DATASET_TASK_NOT_FOUND',
    'DATASET_RECORD_NOT_FOUND',
    'DATASET_RECORD_FORMAT_ERROR',
    'AGENT_NOT_FOUND',
    'AGENT_MISTRAL_API_ERROR',
    'EVALUATION_NOT_FOUND',
    'EVALUATION_CURRENTLY_RUNNING',
    'EVALUATION_RECORD_NOT_FOUND',
    'EVALUATION_RUN_NOT_FOUND',
    'EVALUATION_RUN_TRANSITION_IS_INVALID',
    'EVALUATION_RUN_TRANSITION_IS_RUNNING_ALREADY',
    'EVALUATION_RUN_TRANSITION_ERROR',
    'TEMPLATE_SYNTAX_ERROR',
  ])
  .openapi({ title: 'ObservabilityErrorCode' })
  .openapi('ObservabilityErrorCode')

const ObservabilityErrorDetailSchema = z
  .object({
    message: z.string().openapi({ title: 'Message', 'x-speakeasy-error-message': true }),
    error_code: z.union([ObservabilityErrorCodeSchema, z.null().nullable()]),
  })
  .openapi({ title: 'ObservabilityErrorDetail', required: ['message', 'error_code'] })
  .openapi('ObservabilityErrorDetail')

const ObservabilityErrorSchema = z
  .object({ detail: ObservabilityErrorDetailSchema })
  .openapi({ title: 'ObservabilityError', required: ['detail'] })
  .openapi('ObservabilityError')

const JudgeConversationRequestSchema = z
  .object({
    messages: z.array(z.looseObject({})).openapi({ title: 'Messages' }),
    properties: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Properties' }),
  })
  .openapi({ title: 'JudgeConversationRequest', required: ['messages'] })
  .openapi('JudgeConversationRequest')

const AnnotationsSchema = z
  .looseObject({
    audience: z
      .union([z.array(z.enum(['user', 'assistant'])), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Audience' }),
    priority: z
      .union([z.number().min(0).max(1), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Priority' }),
  })
  .openapi({ title: 'Annotations', required: [] })
  .openapi('Annotations')

const AudioContentSchema = z
  .looseObject({
    type: z.literal('audio').openapi({ title: 'Type' }),
    data: z.string().openapi({ title: 'Data' }),
    mimeType: z.string().openapi({ title: 'Mimetype' }),
    annotations: z.union([AnnotationsSchema, z.null().nullable()]).exactOptional(),
    _meta: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Meta' }),
  })
  .openapi({
    title: 'AudioContent',
    required: ['type', 'data', 'mimeType'],
    description: 'Audio content for a message.',
  })
  .openapi('AudioContent')

const AuthDataSchema = z
  .object({
    client_id: z.string().openapi({ title: 'Client Id' }),
    client_secret: z.string().openapi({ title: 'Client Secret' }),
  })
  .openapi({ title: 'AuthData', required: ['client_id', 'client_secret'] })
  .openapi('AuthData')

const BlobResourceContentsSchema = z
  .looseObject({
    uri: z.url().min(1).openapi({ title: 'Uri' }),
    mimeType: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Mimetype' }),
    _meta: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Meta' }),
    blob: z.string().openapi({ title: 'Blob' }),
  })
  .openapi({
    title: 'BlobResourceContents',
    required: ['uri', 'blob'],
    description: 'Binary contents of a resource.',
  })
  .openapi('BlobResourceContents')

const IntegrationsSchemasTurbineToolLocaleSchema = z
  .object({
    name: z.record(z.string(), z.string()).openapi({ title: 'Name' }),
    description: z.record(z.string(), z.string()).openapi({ title: 'Description' }),
    usage_sentence: z.record(z.string(), z.string()).openapi({ title: 'Usage Sentence' }),
  })
  .openapi({ title: 'ToolLocale', required: ['name', 'description', 'usage_sentence'] })
  .openapi('IntegrationsSchemasTurbineToolLocale')

const ExecutionConfigSchema = z
  .looseObject({ type: z.string().openapi({ title: 'Type' }) })
  .openapi({
    title: 'ExecutionConfig',
    required: ['type'],
    description:
      'Not typed since mcp config can changed / not stable\nwe allow all extra fields and this is a dict\nTODO: once mcp is stable, we need to type this',
  })
  .openapi('ExecutionConfig')

const ResourceVisibilitySchema = z
  .enum(['shared_global', 'shared_org', 'shared_workspace', 'private'])
  .openapi({ title: 'ResourceVisibility' })
  .openapi('ResourceVisibility')

const IntegrationsSchemasApiToolToolSchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    name: z.string().openapi({ title: 'Name' }),
    description: z.string().openapi({ title: 'Description' }),
    system_prompt: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'System Prompt' }),
    locale: z
      .union([IntegrationsSchemasTurbineToolLocaleSchema, z.null().nullable()])
      .exactOptional(),
    jsonschema: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Jsonschema' }),
    execution_config: z.union([ExecutionConfigSchema, z.null().nullable()]),
    visibility: ResourceVisibilitySchema,
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    modified_at: z.iso.datetime({ offset: true }).openapi({ title: 'Modified At' }),
    active: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Active' }),
  })
  .openapi({
    title: 'Tool',
    required: [
      'id',
      'name',
      'description',
      'execution_config',
      'visibility',
      'created_at',
      'modified_at',
    ],
  })
  .openapi('IntegrationsSchemasApiToolTool')

const ConnectorSchema = z
  .object({
    id: z.uuid().openapi({ title: 'Id' }),
    name: z.string().openapi({ title: 'Name' }),
    description: z.string().openapi({ title: 'Description' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    modified_at: z.iso.datetime({ offset: true }).openapi({ title: 'Modified At' }),
    server: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Server' }),
    auth_type: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Auth Type' }),
    tools: z
      .union([z.array(IntegrationsSchemasApiToolToolSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Tools' }),
  })
  .openapi({
    title: 'Connector',
    required: ['id', 'name', 'description', 'created_at', 'modified_at'],
  })
  .openapi('Connector')

const ConnectorMCPCreateSchema = z
  .object({
    name: z
      .string()
      .openapi({
        title: 'Name',
        description:
          'The name of the connector. Should be 64 char length maximum, alphanumeric, only underscores/dashes.',
      }),
    description: z
      .string()
      .openapi({ title: 'Description', description: 'The description of the connector.' }),
    icon_url: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Icon Url',
        description: 'The optional url of the icon you want to associate to the connector.',
      }),
    visibility: ResourceVisibilitySchema.default('shared_org')
      .exactOptional()
      .openapi({
        description:
          "Visibility of the connector. Use 'shared_workspace' for workspace scoped connectors, or 'private' for private connectors.",
      }),
    server: z
      .url()
      .min(1)
      .max(2083)
      .openapi({ title: 'Server', description: 'The url of the MCP server.' }),
    headers: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Headers',
        description:
          'Optional organization-level headers to be sent with the request to the mcp server.',
      }),
    auth_data: z
      .union([AuthDataSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ description: 'Optional additional authentication data for the connector.' }),
    system_prompt: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'System Prompt',
        description: 'Optional system prompt for the connector.',
      }),
  })
  .openapi({ title: 'ConnectorMCPCreate', required: ['name', 'description', 'server'] })
  .openapi('ConnectorMCPCreate')

const ConnectorMCPUpdateSchema = z
  .object({
    name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Name', description: 'The name of the connector.' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description', description: 'The description of the connector.' }),
    icon_url: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Icon Url',
        description: 'The optional url of the icon you want to associate to the connector.',
      }),
    system_prompt: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'System Prompt',
        description: 'Optional system prompt for the connector.',
      }),
    connection_config: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Connection Config', description: 'Optional new connection config.' }),
    connection_secrets: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Connection Secrets', description: 'Optional new connection secrets' }),
    server: z
      .union([z.url().min(1).max(2083), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Server', description: 'New server url for your mcp connector.' }),
    headers: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Headers', description: 'New headers for your mcp connector.' }),
    auth_data: z
      .union([AuthDataSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ description: 'New authentication data for your mcp connector.' }),
  })
  .openapi({ title: 'ConnectorMCPUpdate', required: [] })
  .openapi('ConnectorMCPUpdate')

const ConnectorSupportedLanguageSchema = z
  .enum(['en', 'fr', 'ar', 'es', 'de', 'pl', 'pt-BR', 'it', 'nl'])
  .openapi({ title: 'ConnectorSupportedLanguage' })
  .openapi('ConnectorSupportedLanguage')

const ConnectorsQueryFiltersSchema = z
  .object({
    active: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Active',
        description: 'Filter for active connectors for a given user, workspace and organization.',
      }),
    fetch_connection_secrets: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Fetch Connection Secrets', description: 'Fetch connection secrets.' }),
  })
  .openapi({ title: 'ConnectorsQueryFilters', required: [] })
  .openapi('ConnectorsQueryFilters')

const TextResourceContentsSchema = z
  .looseObject({
    uri: z.url().min(1).openapi({ title: 'Uri' }),
    mimeType: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Mimetype' }),
    _meta: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Meta' }),
    text: z.string().openapi({ title: 'Text' }),
  })
  .openapi({
    title: 'TextResourceContents',
    required: ['uri', 'text'],
    description: 'Text contents of a resource.',
  })
  .openapi('TextResourceContents')

const EmbeddedResourceSchema = z
  .looseObject({
    type: z.literal('resource').openapi({ title: 'Type' }),
    resource: z
      .union([TextResourceContentsSchema, BlobResourceContentsSchema])
      .openapi({ title: 'Resource' }),
    annotations: z.union([AnnotationsSchema, z.null().nullable()]).exactOptional(),
    _meta: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Meta' }),
  })
  .openapi({
    title: 'EmbeddedResource',
    required: ['type', 'resource'],
    description:
      'The contents of a resource, embedded into a prompt or tool call result.\n\nIt is up to the client how best to render embedded resources for the benefit\nof the LLM and/or the user.',
  })
  .openapi('EmbeddedResource')

const ImageContentSchema = z
  .looseObject({
    type: z.literal('image').openapi({ title: 'Type' }),
    data: z.string().openapi({ title: 'Data' }),
    mimeType: z.string().openapi({ title: 'Mimetype' }),
    annotations: z.union([AnnotationsSchema, z.null().nullable()]).exactOptional(),
    _meta: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Meta' }),
  })
  .openapi({
    title: 'ImageContent',
    required: ['type', 'data', 'mimeType'],
    description: 'Image content for a message.',
  })
  .openapi('ImageContent')

const MCPResultMetadataSchema = z
  .looseObject({
    isError: z.boolean().default(false).exactOptional().openapi({ title: 'Iserror' }),
    structuredContent: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Structuredcontent' }),
    _meta: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Meta' }),
  })
  .openapi({
    title: 'MCPResultMetadata',
    description: 'MCP-specific result metadata (isError, structuredContent, _meta).',
    required: [],
  })
  .openapi('MCPResultMetadata')

const MCPToolCallMetadataSchema = z
  .looseObject({
    mcp_meta: z.union([MCPResultMetadataSchema, z.null().nullable()]).exactOptional(),
  })
  .openapi({
    title: 'MCPToolCallMetadata',
    description:
      "Metadata wrapper for MCP tool call responses.\n\nNests MCP-specific fields under `mcp_meta` to avoid collisions with other\nmetadata keys (e.g. `tool_call_result`) in Harmattan's streaming deltas.",
    required: [],
  })
  .openapi('MCPToolCallMetadata')

const MCPToolCallRequestSchema = z
  .object({ arguments: z.looseObject({}).exactOptional().openapi({ title: 'Arguments' }) })
  .openapi({
    title: 'MCPToolCallRequest',
    description: 'Request body for calling an MCP tool.',
    required: [],
  })
  .openapi('MCPToolCallRequest')

const TextContentSchema = z
  .looseObject({
    type: z.literal('text').openapi({ title: 'Type' }),
    text: z.string().openapi({ title: 'Text' }),
    annotations: z.union([AnnotationsSchema, z.null().nullable()]).exactOptional(),
    _meta: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Meta' }),
  })
  .openapi({
    title: 'TextContent',
    required: ['type', 'text'],
    description: 'Text content for a message.',
  })
  .openapi('TextContent')

const MCPServerIconSchema = z
  .looseObject({
    src: z.string().openapi({ title: 'Src' }),
    mimeType: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Mimetype' }),
    sizes: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Sizes' }),
  })
  .openapi({
    title: 'MCPServerIcon',
    required: ['src'],
    description: 'An icon for display in user interfaces.',
  })
  .openapi('MCPServerIcon')

const ResourceLinkSchema = z
  .looseObject({
    name: z.string().openapi({ title: 'Name' }),
    title: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Title' }),
    uri: z.url().min(1).openapi({ title: 'Uri' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    mimeType: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Mimetype' }),
    size: z.union([z.int(), z.null().nullable()]).exactOptional().openapi({ title: 'Size' }),
    icons: z
      .union([z.array(MCPServerIconSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Icons' }),
    annotations: z.union([AnnotationsSchema, z.null().nullable()]).exactOptional(),
    _meta: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Meta' }),
    type: z.literal('resource_link').openapi({ title: 'Type' }),
  })
  .openapi({
    title: 'ResourceLink',
    required: ['name', 'uri', 'type'],
    description:
      'A resource that the server is capable of reading, included in a prompt or tool call result.\n\nNote: resource links returned by tools are not guaranteed to appear in the results of `resources/list` requests.',
  })
  .openapi('ResourceLink')

const MCPToolCallResponseSchema = z
  .looseObject({
    content: z
      .array(
        z.union([
          TextContentSchema,
          ImageContentSchema,
          AudioContentSchema,
          ResourceLinkSchema,
          EmbeddedResourceSchema,
        ]),
      )
      .openapi({ title: 'Content' }),
    metadata: z.union([MCPToolCallMetadataSchema, z.null().nullable()]).exactOptional(),
  })
  .openapi({
    title: 'MCPToolCallResponse',
    required: ['content'],
    description:
      'Response from calling an MCP tool.\n\nWe override mcp_types.CallToolResult because:\n- Models only support `content`, not `structuredContent` at top level\n- Downstream consumers (le-chat, etc.) need structuredContent/isError/_meta via metadata\n\nSYNC: Keep in sync with Harmattan (orchestrator) for harmonized tool result processing.',
  })
  .openapi('MCPToolCallResponse')

const MessageResponseSchema = z
  .object({ message: z.string().openapi({ title: 'Message' }) })
  .openapi({ title: 'MessageResponse', required: ['message'] })
  .openapi('MessageResponse')

const PaginationResponseSchema = z
  .object({
    next_cursor: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Next Cursor' }),
    page_size: z.int().openapi({ title: 'Page Size' }),
  })
  .openapi({ title: 'PaginationResponse', required: ['page_size'] })
  .openapi('PaginationResponse')

const PaginatedConnectorsSchema = z
  .object({
    items: z.array(ConnectorSchema).openapi({ title: 'Items' }),
    pagination: PaginationResponseSchema,
  })
  .openapi({ title: 'PaginatedConnectors', required: ['items', 'pagination'] })
  .openapi('PaginatedConnectors')

const DeltaMessageSchema = z
  .object({
    role: z.union([z.string(), z.null().nullable()]).exactOptional(),
    content: z
      .union([z.string(), z.null().nullable(), z.array(ContentChunkSchema)])
      .exactOptional(),
    tool_calls: z.union([z.null().nullable(), z.array(ToolCallSchema)]).exactOptional(),
  })
  .openapi({ title: 'DeltaMessage', required: [] })
  .openapi('DeltaMessage')

const CompletionResponseStreamChoiceSchema = z
  .object({
    index: z.int(),
    delta: DeltaMessageSchema,
    finish_reason: z
      .union([
        z.literal('stop'),
        z.literal('length'),
        z.literal('error'),
        z.literal('tool_calls'),
        z.literal(null),
      ])
      .nullable(),
  })
  .openapi({
    title: 'CompletionResponseStreamChoice',
    required: ['index', 'delta', 'finish_reason'],
  })
  .openapi('CompletionResponseStreamChoice')

const CompletionChunkSchema = z
  .object({
    id: z.string(),
    object: z.string().exactOptional(),
    created: z.int().exactOptional(),
    model: z.string(),
    usage: UsageInfoSchema.exactOptional(),
    choices: z.array(CompletionResponseStreamChoiceSchema),
  })
  .openapi({ title: 'CompletionChunk', required: ['id', 'model', 'choices'] })
  .openapi('CompletionChunk')

const CompletionEventSchema = z
  .object({ data: CompletionChunkSchema })
  .openapi({ title: 'CompletionEvent', required: ['data'] })
  .openapi('CompletionEvent')

const ResponseBaseSchema = z
  .object({
    id: z.string().exactOptional().openapi({ example: 'cmpl-e5cc70bb28c444948073e77776eb30ef' }),
    object: z.string().exactOptional().openapi({ example: 'chat.completion' }),
    model: z.string().exactOptional().openapi({ example: 'mistral-small-latest' }),
    usage: UsageInfoSchema.exactOptional(),
  })
  .openapi({ title: 'ResponseBase', required: [] })
  .openapi('ResponseBase')

const ChatCompletionChoiceSchema = z
  .object({
    index: z.int().openapi({ example: 0 }),
    message: AssistantMessageSchema,
    finish_reason: z
      .enum(['stop', 'length', 'model_length', 'error', 'tool_calls'])
      .openapi({ example: 'stop' }),
  })
  .openapi({ title: 'ChatCompletionChoice', required: ['index', 'finish_reason', 'message'] })
  .openapi('ChatCompletionChoice')

const ChatCompletionResponseBaseSchema = ResponseBaseSchema.and(
  z
    .object({ created: z.int().exactOptional().openapi({ example: 1702256327 }) })
    .openapi({ title: 'ChatCompletionResponseBase', required: [] }),
).openapi('ChatCompletionResponseBase')

const ChatCompletionResponseSchema = ChatCompletionResponseBaseSchema.and(
  z
    .object({ choices: z.array(ChatCompletionChoiceSchema) })
    .openapi({
      title: 'ChatCompletionResponse',
      required: ['id', 'object', 'data', 'model', 'usage', 'created', 'choices'],
    }),
).openapi('ChatCompletionResponse')

const FIMCompletionResponseSchema = ChatCompletionResponseSchema.and(
  z
    .object({ model: z.string().exactOptional().openapi({ example: 'codestral-latest' }) })
    .openapi({ required: [] }),
).openapi('FIMCompletionResponse')

const EmbeddingResponseDataSchema = z
  .object({
    object: z.string().exactOptional().openapi({ example: 'embedding' }),
    embedding: z
      .array(z.number())
      .exactOptional()
      .openapi({ example: [0.1, 0.2, 0.3] }),
    index: z.int().exactOptional().openapi({ example: 0 }),
  })
  .openapi({
    title: 'EmbeddingResponseData',
    examples: [
      { object: 'embedding', embedding: [0.1, 0.2, 0.3], index: 0 },
      { object: 'embedding', embedding: [0.4, 0.5, 0.6], index: 1 },
    ],
    required: [],
  })
  .openapi('EmbeddingResponseData')

const EmbeddingResponseSchema = ResponseBaseSchema.and(
  z
    .object({ data: z.array(EmbeddingResponseDataSchema) })
    .openapi({ required: ['id', 'object', 'data', 'model', 'usage'] }),
).openapi('EmbeddingResponse')

const JSONPayloadResponseSchema = z
  .object({
    type: z
      .literal('json')
      .default('json')
      .openapi({
        title: 'Type',
        description: 'Discriminator indicating this is a raw JSON payload.',
      }),
    value: z.any().openapi({ title: 'Value', description: 'The JSON-serializable payload value.' }),
  })
  .openapi({
    title: 'JSONPayload',
    required: ['type', 'value'],
    description:
      'A payload containing arbitrary JSON data.\n\nUsed for complete state snapshots or final results.',
  })
  .openapi('JSONPayloadResponse')

const ActivityTaskCompletedAttributesResponseSchema = z
  .object({
    task_id: z
      .string()
      .openapi({
        title: 'Task Id',
        description: 'Unique identifier for the activity task within the workflow.',
      }),
    activity_name: z
      .string()
      .openapi({
        title: 'Activity Name',
        description: 'The registered name of the activity being executed.',
      }),
    result: JSONPayloadResponseSchema.openapi({
      description: 'The result returned by the activity.',
    }),
  })
  .openapi({
    title: 'ActivityTaskCompletedAttributes',
    required: ['task_id', 'activity_name', 'result'],
    description: 'Attributes for activity task completed events.',
  })
  .openapi('ActivityTaskCompletedAttributesResponse')

const ActivityTaskCompletedResponseSchema = z
  .object({
    event_id: z
      .string()
      .openapi({ title: 'Event Id', description: 'Unique identifier for this event instance.' }),
    event_timestamp: z
      .int()
      .openapi({
        title: 'Event Timestamp',
        description: 'Unix timestamp in nanoseconds when the event was created.',
      }),
    root_workflow_exec_id: z
      .string()
      .openapi({
        title: 'Root Workflow Exec Id',
        description: 'Execution ID of the root workflow that initiated this execution chain.',
      }),
    parent_workflow_exec_id: z
      .union([z.string(), z.null().nullable()])
      .openapi({
        title: 'Parent Workflow Exec Id',
        description:
          'Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.',
      }),
    workflow_exec_id: z
      .string()
      .openapi({
        title: 'Workflow Exec Id',
        description: 'Execution ID of the workflow that emitted this event.',
      }),
    workflow_run_id: z
      .string()
      .openapi({
        title: 'Workflow Run Id',
        description:
          'Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.',
      }),
    workflow_name: z
      .string()
      .openapi({
        title: 'Workflow Name',
        description: 'The registered name of the workflow that emitted this event.',
      }),
    event_type: z
      .literal('ACTIVITY_TASK_COMPLETED')
      .default('ACTIVITY_TASK_COMPLETED')
      .openapi({ title: 'Event Type', description: 'Event type discriminator.' }),
    attributes: ActivityTaskCompletedAttributesResponseSchema.openapi({
      description: 'Event-specific attributes.',
    }),
  })
  .openapi({
    title: 'ActivityTaskCompleted',
    required: [
      'event_id',
      'event_timestamp',
      'root_workflow_exec_id',
      'parent_workflow_exec_id',
      'workflow_exec_id',
      'workflow_run_id',
      'workflow_name',
      'event_type',
      'attributes',
    ],
    description:
      'Emitted when an activity task completes successfully.\n\nContains timing information about the successful execution.',
  })
  .openapi('ActivityTaskCompletedResponse')

const FailureSchema = z
  .object({
    message: z
      .string()
      .openapi({ title: 'Message', description: 'A human-readable description of the failure.' }),
  })
  .openapi({
    title: 'Failure',
    required: ['message'],
    description: 'Represents an error or exception that occurred during execution.',
  })
  .openapi('Failure')

const ActivityTaskFailedAttributesSchema = z
  .object({
    task_id: z
      .string()
      .openapi({
        title: 'Task Id',
        description: 'Unique identifier for the activity task within the workflow.',
      }),
    activity_name: z
      .string()
      .openapi({
        title: 'Activity Name',
        description: 'The registered name of the activity being executed.',
      }),
    attempt: z
      .int()
      .openapi({
        title: 'Attempt',
        description: 'The final attempt number that failed (1-indexed).',
      }),
    failure: FailureSchema.openapi({
      description: 'Details about the failure that caused the activity to fail.',
    }),
  })
  .openapi({
    title: 'ActivityTaskFailedAttributes',
    required: ['task_id', 'activity_name', 'attempt', 'failure'],
    description: 'Attributes for activity task failed events (final failure after all retries).',
  })
  .openapi('ActivityTaskFailedAttributes')

const ActivityTaskFailedResponseSchema = z
  .object({
    event_id: z
      .string()
      .openapi({ title: 'Event Id', description: 'Unique identifier for this event instance.' }),
    event_timestamp: z
      .int()
      .openapi({
        title: 'Event Timestamp',
        description: 'Unix timestamp in nanoseconds when the event was created.',
      }),
    root_workflow_exec_id: z
      .string()
      .openapi({
        title: 'Root Workflow Exec Id',
        description: 'Execution ID of the root workflow that initiated this execution chain.',
      }),
    parent_workflow_exec_id: z
      .union([z.string(), z.null().nullable()])
      .openapi({
        title: 'Parent Workflow Exec Id',
        description:
          'Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.',
      }),
    workflow_exec_id: z
      .string()
      .openapi({
        title: 'Workflow Exec Id',
        description: 'Execution ID of the workflow that emitted this event.',
      }),
    workflow_run_id: z
      .string()
      .openapi({
        title: 'Workflow Run Id',
        description:
          'Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.',
      }),
    workflow_name: z
      .string()
      .openapi({
        title: 'Workflow Name',
        description: 'The registered name of the workflow that emitted this event.',
      }),
    event_type: z
      .literal('ACTIVITY_TASK_FAILED')
      .default('ACTIVITY_TASK_FAILED')
      .openapi({ title: 'Event Type', description: 'Event type discriminator.' }),
    attributes: ActivityTaskFailedAttributesSchema.openapi({
      description: 'Event-specific attributes.',
    }),
  })
  .openapi({
    title: 'ActivityTaskFailed',
    required: [
      'event_id',
      'event_timestamp',
      'root_workflow_exec_id',
      'parent_workflow_exec_id',
      'workflow_exec_id',
      'workflow_run_id',
      'workflow_name',
      'event_type',
      'attributes',
    ],
    description:
      'Emitted when an activity task fails after exhausting all retry attempts.\n\nThis is a terminal event indicating the activity could not complete successfully.',
  })
  .openapi('ActivityTaskFailedResponse')

const ActivityTaskRetryingAttributesSchema = z
  .object({
    task_id: z
      .string()
      .openapi({
        title: 'Task Id',
        description: 'Unique identifier for the activity task within the workflow.',
      }),
    activity_name: z
      .string()
      .openapi({
        title: 'Activity Name',
        description: 'The registered name of the activity being executed.',
      }),
    attempt: z
      .int()
      .openapi({ title: 'Attempt', description: 'The attempt number that failed (1-indexed).' }),
    failure: FailureSchema.openapi({
      description: 'Details about the failure that caused the retry.',
    }),
  })
  .openapi({
    title: 'ActivityTaskRetryingAttributes',
    required: ['task_id', 'activity_name', 'attempt', 'failure'],
    description: 'Attributes for activity task retrying events.',
  })
  .openapi('ActivityTaskRetryingAttributes')

const ActivityTaskRetryingResponseSchema = z
  .object({
    event_id: z
      .string()
      .openapi({ title: 'Event Id', description: 'Unique identifier for this event instance.' }),
    event_timestamp: z
      .int()
      .openapi({
        title: 'Event Timestamp',
        description: 'Unix timestamp in nanoseconds when the event was created.',
      }),
    root_workflow_exec_id: z
      .string()
      .openapi({
        title: 'Root Workflow Exec Id',
        description: 'Execution ID of the root workflow that initiated this execution chain.',
      }),
    parent_workflow_exec_id: z
      .union([z.string(), z.null().nullable()])
      .openapi({
        title: 'Parent Workflow Exec Id',
        description:
          'Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.',
      }),
    workflow_exec_id: z
      .string()
      .openapi({
        title: 'Workflow Exec Id',
        description: 'Execution ID of the workflow that emitted this event.',
      }),
    workflow_run_id: z
      .string()
      .openapi({
        title: 'Workflow Run Id',
        description:
          'Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.',
      }),
    workflow_name: z
      .string()
      .openapi({
        title: 'Workflow Name',
        description: 'The registered name of the workflow that emitted this event.',
      }),
    event_type: z
      .literal('ACTIVITY_TASK_RETRYING')
      .default('ACTIVITY_TASK_RETRYING')
      .openapi({ title: 'Event Type', description: 'Event type discriminator.' }),
    attributes: ActivityTaskRetryingAttributesSchema.openapi({
      description: 'Event-specific attributes.',
    }),
  })
  .openapi({
    title: 'ActivityTaskRetrying',
    required: [
      'event_id',
      'event_timestamp',
      'root_workflow_exec_id',
      'parent_workflow_exec_id',
      'workflow_exec_id',
      'workflow_run_id',
      'workflow_name',
      'event_type',
      'attributes',
    ],
    description:
      'Emitted when an activity task fails and will be retried.\n\nContains information about the failed attempt and the error that occurred.',
  })
  .openapi('ActivityTaskRetryingResponse')

const ActivityTaskStartedAttributesResponseSchema = z
  .object({
    task_id: z
      .string()
      .openapi({
        title: 'Task Id',
        description: 'Unique identifier for the activity task within the workflow.',
      }),
    activity_name: z
      .string()
      .openapi({
        title: 'Activity Name',
        description: 'The registered name of the activity being executed.',
      }),
    input: JSONPayloadResponseSchema.openapi({
      description: 'The input arguments passed to the activity.',
    }),
  })
  .openapi({
    title: 'ActivityTaskStartedAttributes',
    required: ['task_id', 'activity_name', 'input'],
    description: 'Attributes for activity task started events.',
  })
  .openapi('ActivityTaskStartedAttributesResponse')

const ActivityTaskStartedResponseSchema = z
  .object({
    event_id: z
      .string()
      .openapi({ title: 'Event Id', description: 'Unique identifier for this event instance.' }),
    event_timestamp: z
      .int()
      .openapi({
        title: 'Event Timestamp',
        description: 'Unix timestamp in nanoseconds when the event was created.',
      }),
    root_workflow_exec_id: z
      .string()
      .openapi({
        title: 'Root Workflow Exec Id',
        description: 'Execution ID of the root workflow that initiated this execution chain.',
      }),
    parent_workflow_exec_id: z
      .union([z.string(), z.null().nullable()])
      .openapi({
        title: 'Parent Workflow Exec Id',
        description:
          'Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.',
      }),
    workflow_exec_id: z
      .string()
      .openapi({
        title: 'Workflow Exec Id',
        description: 'Execution ID of the workflow that emitted this event.',
      }),
    workflow_run_id: z
      .string()
      .openapi({
        title: 'Workflow Run Id',
        description:
          'Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.',
      }),
    workflow_name: z
      .string()
      .openapi({
        title: 'Workflow Name',
        description: 'The registered name of the workflow that emitted this event.',
      }),
    event_type: z
      .literal('ACTIVITY_TASK_STARTED')
      .default('ACTIVITY_TASK_STARTED')
      .openapi({ title: 'Event Type', description: 'Event type discriminator.' }),
    attributes: ActivityTaskStartedAttributesResponseSchema.openapi({
      description: 'Event-specific attributes.',
    }),
  })
  .openapi({
    title: 'ActivityTaskStarted',
    required: [
      'event_id',
      'event_timestamp',
      'root_workflow_exec_id',
      'parent_workflow_exec_id',
      'workflow_exec_id',
      'workflow_run_id',
      'workflow_name',
      'event_type',
      'attributes',
    ],
    description:
      'Emitted when an activity task begins execution.\n\nThis is the first event for an activity, emitted on the first attempt only.\nSubsequent retry attempts emit ACTIVITY_TASK_RETRYING instead.',
  })
  .openapi('ActivityTaskStartedResponse')

const BatchExecutionBodySchema = z
  .object({
    execution_ids: z
      .array(z.string())
      .min(1)
      .max(100)
      .openapi({ title: 'Execution Ids', description: 'List of execution IDs to process' }),
  })
  .openapi({ title: 'BatchExecutionBody', required: ['execution_ids'] })
  .openapi('BatchExecutionBody')

const BatchExecutionResultSchema = z
  .object({
    status: z
      .string()
      .openapi({ title: 'Status', description: 'Status of the operation (success/failure)' }),
    error: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Error', description: 'Error message if operation failed' }),
  })
  .openapi({ title: 'BatchExecutionResult', required: ['status'] })
  .openapi('BatchExecutionResult')

const BatchExecutionResponseSchema = z
  .object({
    results: z
      .record(z.string(), BatchExecutionResultSchema)
      .exactOptional()
      .openapi({
        title: 'Results',
        description: 'Mapping of execution_id to result with status and optional error message',
      }),
  })
  .openapi({ title: 'BatchExecutionResponse', required: [] })
  .openapi('BatchExecutionResponse')

const CustomTaskCanceledAttributesSchema = z
  .object({
    custom_task_id: z
      .string()
      .openapi({
        title: 'Custom Task Id',
        description: 'Unique identifier for the custom task within the workflow.',
      }),
    custom_task_type: z
      .string()
      .openapi({
        title: 'Custom Task Type',
        description: "The type/category of the custom task (e.g., 'llm_call', 'api_request').",
      }),
    reason: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Reason', description: 'Optional reason provided for the cancellation.' }),
  })
  .openapi({
    title: 'CustomTaskCanceledAttributes',
    required: ['custom_task_id', 'custom_task_type'],
    description: 'Attributes for custom task canceled events.',
  })
  .openapi('CustomTaskCanceledAttributes')

const CustomTaskCanceledResponseSchema = z
  .object({
    event_id: z
      .string()
      .openapi({ title: 'Event Id', description: 'Unique identifier for this event instance.' }),
    event_timestamp: z
      .int()
      .openapi({
        title: 'Event Timestamp',
        description: 'Unix timestamp in nanoseconds when the event was created.',
      }),
    root_workflow_exec_id: z
      .string()
      .openapi({
        title: 'Root Workflow Exec Id',
        description: 'Execution ID of the root workflow that initiated this execution chain.',
      }),
    parent_workflow_exec_id: z
      .union([z.string(), z.null().nullable()])
      .openapi({
        title: 'Parent Workflow Exec Id',
        description:
          'Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.',
      }),
    workflow_exec_id: z
      .string()
      .openapi({
        title: 'Workflow Exec Id',
        description: 'Execution ID of the workflow that emitted this event.',
      }),
    workflow_run_id: z
      .string()
      .openapi({
        title: 'Workflow Run Id',
        description:
          'Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.',
      }),
    workflow_name: z
      .string()
      .openapi({
        title: 'Workflow Name',
        description: 'The registered name of the workflow that emitted this event.',
      }),
    event_type: z
      .literal('CUSTOM_TASK_CANCELED')
      .default('CUSTOM_TASK_CANCELED')
      .openapi({ title: 'Event Type', description: 'Event type discriminator.' }),
    attributes: CustomTaskCanceledAttributesSchema.openapi({
      description: 'Event-specific attributes.',
    }),
  })
  .openapi({
    title: 'CustomTaskCanceled',
    required: [
      'event_id',
      'event_timestamp',
      'root_workflow_exec_id',
      'parent_workflow_exec_id',
      'workflow_exec_id',
      'workflow_run_id',
      'workflow_name',
      'event_type',
      'attributes',
    ],
    description:
      'Emitted when a custom task is canceled.\n\nIndicates the task was explicitly stopped before completion.',
  })
  .openapi('CustomTaskCanceledResponse')

const CustomTaskCompletedAttributesResponseSchema = z
  .object({
    custom_task_id: z
      .string()
      .openapi({
        title: 'Custom Task Id',
        description: 'Unique identifier for the custom task within the workflow.',
      }),
    custom_task_type: z
      .string()
      .openapi({
        title: 'Custom Task Type',
        description: "The type/category of the custom task (e.g., 'llm_call', 'api_request').",
      }),
    payload: JSONPayloadResponseSchema.openapi({
      description: 'The final result of the custom task.',
    }),
  })
  .openapi({
    title: 'CustomTaskCompletedAttributes',
    required: ['custom_task_id', 'custom_task_type', 'payload'],
    description: 'Attributes for custom task completed events.',
  })
  .openapi('CustomTaskCompletedAttributesResponse')

const CustomTaskCompletedResponseSchema = z
  .object({
    event_id: z
      .string()
      .openapi({ title: 'Event Id', description: 'Unique identifier for this event instance.' }),
    event_timestamp: z
      .int()
      .openapi({
        title: 'Event Timestamp',
        description: 'Unix timestamp in nanoseconds when the event was created.',
      }),
    root_workflow_exec_id: z
      .string()
      .openapi({
        title: 'Root Workflow Exec Id',
        description: 'Execution ID of the root workflow that initiated this execution chain.',
      }),
    parent_workflow_exec_id: z
      .union([z.string(), z.null().nullable()])
      .openapi({
        title: 'Parent Workflow Exec Id',
        description:
          'Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.',
      }),
    workflow_exec_id: z
      .string()
      .openapi({
        title: 'Workflow Exec Id',
        description: 'Execution ID of the workflow that emitted this event.',
      }),
    workflow_run_id: z
      .string()
      .openapi({
        title: 'Workflow Run Id',
        description:
          'Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.',
      }),
    workflow_name: z
      .string()
      .openapi({
        title: 'Workflow Name',
        description: 'The registered name of the workflow that emitted this event.',
      }),
    event_type: z
      .literal('CUSTOM_TASK_COMPLETED')
      .default('CUSTOM_TASK_COMPLETED')
      .openapi({ title: 'Event Type', description: 'Event type discriminator.' }),
    attributes: CustomTaskCompletedAttributesResponseSchema.openapi({
      description: 'Event-specific attributes.',
    }),
  })
  .openapi({
    title: 'CustomTaskCompleted',
    required: [
      'event_id',
      'event_timestamp',
      'root_workflow_exec_id',
      'parent_workflow_exec_id',
      'workflow_exec_id',
      'workflow_run_id',
      'workflow_name',
      'event_type',
      'attributes',
    ],
    description:
      'Emitted when a custom task completes successfully.\n\nContains the final result of the task execution.',
  })
  .openapi('CustomTaskCompletedResponse')

const CustomTaskFailedAttributesSchema = z
  .object({
    custom_task_id: z
      .string()
      .openapi({
        title: 'Custom Task Id',
        description: 'Unique identifier for the custom task within the workflow.',
      }),
    custom_task_type: z
      .string()
      .openapi({
        title: 'Custom Task Type',
        description: "The type/category of the custom task (e.g., 'llm_call', 'api_request').",
      }),
    failure: FailureSchema.openapi({
      description: 'Details about the failure that caused the task to fail.',
    }),
  })
  .openapi({
    title: 'CustomTaskFailedAttributes',
    required: ['custom_task_id', 'custom_task_type', 'failure'],
    description: 'Attributes for custom task failed events.',
  })
  .openapi('CustomTaskFailedAttributes')

const CustomTaskFailedResponseSchema = z
  .object({
    event_id: z
      .string()
      .openapi({ title: 'Event Id', description: 'Unique identifier for this event instance.' }),
    event_timestamp: z
      .int()
      .openapi({
        title: 'Event Timestamp',
        description: 'Unix timestamp in nanoseconds when the event was created.',
      }),
    root_workflow_exec_id: z
      .string()
      .openapi({
        title: 'Root Workflow Exec Id',
        description: 'Execution ID of the root workflow that initiated this execution chain.',
      }),
    parent_workflow_exec_id: z
      .union([z.string(), z.null().nullable()])
      .openapi({
        title: 'Parent Workflow Exec Id',
        description:
          'Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.',
      }),
    workflow_exec_id: z
      .string()
      .openapi({
        title: 'Workflow Exec Id',
        description: 'Execution ID of the workflow that emitted this event.',
      }),
    workflow_run_id: z
      .string()
      .openapi({
        title: 'Workflow Run Id',
        description:
          'Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.',
      }),
    workflow_name: z
      .string()
      .openapi({
        title: 'Workflow Name',
        description: 'The registered name of the workflow that emitted this event.',
      }),
    event_type: z
      .literal('CUSTOM_TASK_FAILED')
      .default('CUSTOM_TASK_FAILED')
      .openapi({ title: 'Event Type', description: 'Event type discriminator.' }),
    attributes: CustomTaskFailedAttributesSchema.openapi({
      description: 'Event-specific attributes.',
    }),
  })
  .openapi({
    title: 'CustomTaskFailed',
    required: [
      'event_id',
      'event_timestamp',
      'root_workflow_exec_id',
      'parent_workflow_exec_id',
      'workflow_exec_id',
      'workflow_run_id',
      'workflow_name',
      'event_type',
      'attributes',
    ],
    description:
      'Emitted when a custom task fails.\n\nContains details about the failure for debugging and error handling.',
  })
  .openapi('CustomTaskFailedResponse')

const JSONPatchAppendSchema = z
  .object({
    path: z
      .string()
      .openapi({
        title: 'Path',
        description:
          "A JSON Pointer (RFC 6901) identifying the target location within the document. Can be a string path (e.g., '/foo/bar'), '/', '', or an empty list [] for root-level operations.",
      }),
    value: z
      .string()
      .openapi({
        title: 'Value',
        description: 'The value to use for the operation. A string to append to the existing value',
      }),
    op: z
      .literal('append')
      .openapi({
        title: 'Op',
        description:
          "'append' is an extension for efficient string concatenation in streaming scenarios.",
      }),
  })
  .openapi({ title: 'JSONPatchAppend', required: ['path', 'value', 'op'] })
  .openapi('JSONPatchAppend')

const JSONPatchAddSchema = z
  .object({
    path: z
      .string()
      .openapi({
        title: 'Path',
        description:
          "A JSON Pointer (RFC 6901) identifying the target location within the document. Can be a string path (e.g., '/foo/bar'), '/', '', or an empty list [] for root-level operations.",
      }),
    value: z.any().openapi({ title: 'Value', description: 'The value to use for the operation' }),
    op: z.literal('add').openapi({ title: 'Op', description: 'Add operation ' }),
  })
  .openapi({ title: 'JSONPatchAdd', required: ['path', 'value', 'op'] })
  .openapi('JSONPatchAdd')

const JSONPatchReplaceSchema = z
  .object({
    path: z
      .string()
      .openapi({
        title: 'Path',
        description:
          "A JSON Pointer (RFC 6901) identifying the target location within the document. Can be a string path (e.g., '/foo/bar'), '/', '', or an empty list [] for root-level operations.",
      }),
    value: z.any().openapi({ title: 'Value', description: 'The value to use for the operation' }),
    op: z.literal('replace').openapi({ title: 'Op', description: 'Replace operation' }),
  })
  .openapi({ title: 'JSONPatchReplace', required: ['path', 'value', 'op'] })
  .openapi('JSONPatchReplace')

const JSONPatchRemoveSchema = z
  .object({
    path: z
      .string()
      .openapi({
        title: 'Path',
        description:
          "A JSON Pointer (RFC 6901) identifying the target location within the document. Can be a string path (e.g., '/foo/bar'), '/', '', or an empty list [] for root-level operations.",
      }),
    value: z.any().openapi({ title: 'Value', description: 'The value to use for the operation' }),
    op: z.literal('remove').openapi({ title: 'Op', description: 'Remove operation' }),
  })
  .openapi({ title: 'JSONPatchRemove', required: ['path', 'value', 'op'] })
  .openapi('JSONPatchRemove')

const JSONPatchPayloadResponseSchema = z
  .object({
    type: z
      .literal('json_patch')
      .default('json_patch')
      .openapi({
        title: 'Type',
        description: 'Discriminator indicating this is a JSON Patch payload.',
      }),
    value: z
      .array(
        z
          .discriminatedUnion('op', [
            JSONPatchAppendSchema,
            JSONPatchAddSchema,
            JSONPatchReplaceSchema,
            JSONPatchRemoveSchema,
          ])
          .openapi({
            discriminator: {
              propertyName: 'op',
              mapping: {
                add: '#/components/schemas/JSONPatchAdd',
                append: '#/components/schemas/JSONPatchAppend',
                remove: '#/components/schemas/JSONPatchRemove',
                replace: '#/components/schemas/JSONPatchReplace',
              },
            },
          }),
      )
      .openapi({
        title: 'Value',
        description: 'The list of JSON Patch operations to apply in order.',
      }),
  })
  .openapi({
    title: 'JSONPatchPayload',
    required: ['type', 'value'],
    description:
      'A payload containing a list of JSON Patch operations.\n\nUsed for streaming incremental updates to workflow state.',
  })
  .openapi('JSONPatchPayloadResponse')

const CustomTaskInProgressAttributesResponseSchema = z
  .object({
    custom_task_id: z
      .string()
      .openapi({
        title: 'Custom Task Id',
        description: 'Unique identifier for the custom task within the workflow.',
      }),
    custom_task_type: z
      .string()
      .openapi({
        title: 'Custom Task Type',
        description: "The type/category of the custom task (e.g., 'llm_call', 'api_request').",
      }),
    payload: z
      .discriminatedUnion('type', [JSONPayloadResponseSchema, JSONPatchPayloadResponseSchema])
      .openapi({
        discriminator: {
          propertyName: 'type',
          mapping: {
            json: '#/components/schemas/JSONPayloadResponse',
            json_patch: '#/components/schemas/JSONPatchPayloadResponse',
          },
        },
        title: 'Payload',
        description: 'The current state or incremental update for the task.',
      }),
  })
  .openapi({
    title: 'CustomTaskInProgressAttributes',
    required: ['custom_task_id', 'custom_task_type', 'payload'],
    description: 'Attributes for custom task in-progress events with streaming updates.',
  })
  .openapi('CustomTaskInProgressAttributesResponse')

const CustomTaskInProgressResponseSchema = z
  .object({
    event_id: z
      .string()
      .openapi({ title: 'Event Id', description: 'Unique identifier for this event instance.' }),
    event_timestamp: z
      .int()
      .openapi({
        title: 'Event Timestamp',
        description: 'Unix timestamp in nanoseconds when the event was created.',
      }),
    root_workflow_exec_id: z
      .string()
      .openapi({
        title: 'Root Workflow Exec Id',
        description: 'Execution ID of the root workflow that initiated this execution chain.',
      }),
    parent_workflow_exec_id: z
      .union([z.string(), z.null().nullable()])
      .openapi({
        title: 'Parent Workflow Exec Id',
        description:
          'Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.',
      }),
    workflow_exec_id: z
      .string()
      .openapi({
        title: 'Workflow Exec Id',
        description: 'Execution ID of the workflow that emitted this event.',
      }),
    workflow_run_id: z
      .string()
      .openapi({
        title: 'Workflow Run Id',
        description:
          'Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.',
      }),
    workflow_name: z
      .string()
      .openapi({
        title: 'Workflow Name',
        description: 'The registered name of the workflow that emitted this event.',
      }),
    event_type: z
      .literal('CUSTOM_TASK_IN_PROGRESS')
      .default('CUSTOM_TASK_IN_PROGRESS')
      .openapi({ title: 'Event Type', description: 'Event type discriminator.' }),
    attributes: CustomTaskInProgressAttributesResponseSchema.openapi({
      description: 'Event-specific attributes.',
    }),
  })
  .openapi({
    title: 'CustomTaskInProgress',
    required: [
      'event_id',
      'event_timestamp',
      'root_workflow_exec_id',
      'parent_workflow_exec_id',
      'workflow_exec_id',
      'workflow_run_id',
      'workflow_name',
      'event_type',
      'attributes',
    ],
    description:
      'Emitted during custom task execution to report progress.\n\nThis event supports streaming updates via JSON or JSON Patch payloads,\nenabling real-time progress tracking for long-running tasks.',
  })
  .openapi('CustomTaskInProgressResponse')

const CustomTaskStartedAttributesResponseSchema = z
  .object({
    custom_task_id: z
      .string()
      .openapi({
        title: 'Custom Task Id',
        description: 'Unique identifier for the custom task within the workflow.',
      }),
    custom_task_type: z
      .string()
      .openapi({
        title: 'Custom Task Type',
        description: "The type/category of the custom task (e.g., 'llm_call', 'api_request').",
      }),
    payload: JSONPayloadResponseSchema.exactOptional().openapi({
      description: 'The initial state or payload for the custom task.',
    }),
  })
  .openapi({
    title: 'CustomTaskStartedAttributes',
    required: ['custom_task_id', 'custom_task_type'],
    description: 'Attributes for custom task started events.',
  })
  .openapi('CustomTaskStartedAttributesResponse')

const CustomTaskStartedResponseSchema = z
  .object({
    event_id: z
      .string()
      .openapi({ title: 'Event Id', description: 'Unique identifier for this event instance.' }),
    event_timestamp: z
      .int()
      .openapi({
        title: 'Event Timestamp',
        description: 'Unix timestamp in nanoseconds when the event was created.',
      }),
    root_workflow_exec_id: z
      .string()
      .openapi({
        title: 'Root Workflow Exec Id',
        description: 'Execution ID of the root workflow that initiated this execution chain.',
      }),
    parent_workflow_exec_id: z
      .union([z.string(), z.null().nullable()])
      .openapi({
        title: 'Parent Workflow Exec Id',
        description:
          'Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.',
      }),
    workflow_exec_id: z
      .string()
      .openapi({
        title: 'Workflow Exec Id',
        description: 'Execution ID of the workflow that emitted this event.',
      }),
    workflow_run_id: z
      .string()
      .openapi({
        title: 'Workflow Run Id',
        description:
          'Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.',
      }),
    workflow_name: z
      .string()
      .openapi({
        title: 'Workflow Name',
        description: 'The registered name of the workflow that emitted this event.',
      }),
    event_type: z
      .literal('CUSTOM_TASK_STARTED')
      .default('CUSTOM_TASK_STARTED')
      .openapi({ title: 'Event Type', description: 'Event type discriminator.' }),
    attributes: CustomTaskStartedAttributesResponseSchema.openapi({
      description: 'Event-specific attributes.',
    }),
  })
  .openapi({
    title: 'CustomTaskStarted',
    required: [
      'event_id',
      'event_timestamp',
      'root_workflow_exec_id',
      'parent_workflow_exec_id',
      'workflow_exec_id',
      'workflow_run_id',
      'workflow_name',
      'event_type',
      'attributes',
    ],
    description:
      'Emitted when a custom task begins execution.\n\nCustom tasks represent user-defined units of work within a workflow,\nsuch as LLM calls, API requests, or data processing steps.',
  })
  .openapi('CustomTaskStartedResponse')

const CustomTaskTimedOutAttributesSchema = z
  .object({
    custom_task_id: z
      .string()
      .openapi({
        title: 'Custom Task Id',
        description: 'Unique identifier for the custom task within the workflow.',
      }),
    custom_task_type: z
      .string()
      .openapi({
        title: 'Custom Task Type',
        description: "The type/category of the custom task (e.g., 'llm_call', 'api_request').",
      }),
    timeout_type: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Timeout Type', description: 'The type of timeout that occurred.' }),
  })
  .openapi({
    title: 'CustomTaskTimedOutAttributes',
    required: ['custom_task_id', 'custom_task_type'],
    description: 'Attributes for custom task timed out events.',
  })
  .openapi('CustomTaskTimedOutAttributes')

const CustomTaskTimedOutResponseSchema = z
  .object({
    event_id: z
      .string()
      .openapi({ title: 'Event Id', description: 'Unique identifier for this event instance.' }),
    event_timestamp: z
      .int()
      .openapi({
        title: 'Event Timestamp',
        description: 'Unix timestamp in nanoseconds when the event was created.',
      }),
    root_workflow_exec_id: z
      .string()
      .openapi({
        title: 'Root Workflow Exec Id',
        description: 'Execution ID of the root workflow that initiated this execution chain.',
      }),
    parent_workflow_exec_id: z
      .union([z.string(), z.null().nullable()])
      .openapi({
        title: 'Parent Workflow Exec Id',
        description:
          'Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.',
      }),
    workflow_exec_id: z
      .string()
      .openapi({
        title: 'Workflow Exec Id',
        description: 'Execution ID of the workflow that emitted this event.',
      }),
    workflow_run_id: z
      .string()
      .openapi({
        title: 'Workflow Run Id',
        description:
          'Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.',
      }),
    workflow_name: z
      .string()
      .openapi({
        title: 'Workflow Name',
        description: 'The registered name of the workflow that emitted this event.',
      }),
    event_type: z
      .literal('CUSTOM_TASK_TIMED_OUT')
      .default('CUSTOM_TASK_TIMED_OUT')
      .openapi({ title: 'Event Type', description: 'Event type discriminator.' }),
    attributes: CustomTaskTimedOutAttributesSchema.openapi({
      description: 'Event-specific attributes.',
    }),
  })
  .openapi({
    title: 'CustomTaskTimedOut',
    required: [
      'event_id',
      'event_timestamp',
      'root_workflow_exec_id',
      'parent_workflow_exec_id',
      'workflow_exec_id',
      'workflow_run_id',
      'workflow_name',
      'event_type',
      'attributes',
    ],
    description:
      'Emitted when a custom task exceeds its timeout.\n\nIndicates the task did not complete within its configured time limit.',
  })
  .openapi('CustomTaskTimedOutResponse')

const DeploymentWorkerResponseSchema = z
  .object({
    name: z.string().openapi({ title: 'Name', description: 'Worker name' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ title: 'Created At', description: 'When the worker first registered' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ title: 'Updated At', description: 'When the worker last registered' }),
  })
  .openapi({ title: 'DeploymentWorkerResponse', required: ['name', 'created_at', 'updated_at'] })
  .openapi('DeploymentWorkerResponse')

const DeploymentDetailResponseSchema = z
  .object({
    id: z.uuid().openapi({ title: 'Id', description: 'Unique identifier of the deployment' }),
    name: z.string().openapi({ title: 'Name', description: 'Deployment name' }),
    is_active: z
      .boolean()
      .openapi({
        title: 'Is Active',
        description: 'Whether at least one worker is currently live',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ title: 'Created At', description: 'When the deployment was first registered' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ title: 'Updated At', description: 'When the deployment was last updated' }),
    workers: z
      .array(DeploymentWorkerResponseSchema)
      .openapi({ title: 'Workers', description: 'Workers registered for the deployment' }),
  })
  .openapi({
    title: 'DeploymentDetailResponse',
    required: ['id', 'name', 'is_active', 'created_at', 'updated_at', 'workers'],
  })
  .openapi('DeploymentDetailResponse')

const DeploymentResponseSchema = z
  .object({
    id: z.uuid().openapi({ title: 'Id', description: 'Unique identifier of the deployment' }),
    name: z.string().openapi({ title: 'Name', description: 'Deployment name' }),
    is_active: z
      .boolean()
      .openapi({
        title: 'Is Active',
        description: 'Whether at least one worker is currently live',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ title: 'Created At', description: 'When the deployment was first registered' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ title: 'Updated At', description: 'When the deployment was last updated' }),
  })
  .openapi({
    title: 'DeploymentResponse',
    required: ['id', 'name', 'is_active', 'created_at', 'updated_at'],
  })
  .openapi('DeploymentResponse')

const DeploymentListResponseSchema = z
  .object({
    deployments: z
      .array(DeploymentResponseSchema)
      .openapi({ title: 'Deployments', description: 'List of deployments' }),
  })
  .openapi({ title: 'DeploymentListResponse', required: ['deployments'] })
  .openapi('DeploymentListResponse')

const EncodedPayloadOptionsSchema = z
  .enum(['offloaded', 'encrypted', 'encrypted-partial'])
  .openapi({ title: 'EncodedPayloadOptions' })
  .openapi('EncodedPayloadOptions')

const EventProgressStatusSchema = z
  .enum(['RUNNING', 'COMPLETED', 'FAILED'])
  .openapi({ title: 'EventProgressStatus' })
  .openapi('EventProgressStatus')

const EventSourceSchema = z
  .enum(['DATABASE', 'LIVE'])
  .openapi({ title: 'EventSource' })
  .openapi('EventSource')

const WorkflowExecutionStartedAttributesResponseSchema = z
  .object({
    task_id: z
      .string()
      .openapi({
        title: 'Task Id',
        description: 'Unique identifier for the task within the workflow execution.',
      }),
    workflow_name: z
      .string()
      .openapi({
        title: 'Workflow Name',
        description: 'The registered name of the workflow being executed.',
      }),
    input: JSONPayloadResponseSchema.openapi({
      description: 'The input arguments passed to the workflow.',
    }),
  })
  .openapi({
    title: 'WorkflowExecutionStartedAttributes',
    required: ['task_id', 'workflow_name', 'input'],
    description: 'Attributes for workflow execution started events.',
  })
  .openapi('WorkflowExecutionStartedAttributesResponse')

const WorkflowExecutionStartedResponseSchema = z
  .object({
    event_id: z
      .string()
      .openapi({ title: 'Event Id', description: 'Unique identifier for this event instance.' }),
    event_timestamp: z
      .int()
      .openapi({
        title: 'Event Timestamp',
        description: 'Unix timestamp in nanoseconds when the event was created.',
      }),
    root_workflow_exec_id: z
      .string()
      .openapi({
        title: 'Root Workflow Exec Id',
        description: 'Execution ID of the root workflow that initiated this execution chain.',
      }),
    parent_workflow_exec_id: z
      .union([z.string(), z.null().nullable()])
      .openapi({
        title: 'Parent Workflow Exec Id',
        description:
          'Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.',
      }),
    workflow_exec_id: z
      .string()
      .openapi({
        title: 'Workflow Exec Id',
        description: 'Execution ID of the workflow that emitted this event.',
      }),
    workflow_run_id: z
      .string()
      .openapi({
        title: 'Workflow Run Id',
        description:
          'Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.',
      }),
    workflow_name: z
      .string()
      .openapi({
        title: 'Workflow Name',
        description: 'The registered name of the workflow that emitted this event.',
      }),
    event_type: z
      .literal('WORKFLOW_EXECUTION_STARTED')
      .default('WORKFLOW_EXECUTION_STARTED')
      .openapi({ title: 'Event Type', description: 'Event type discriminator.' }),
    attributes: WorkflowExecutionStartedAttributesResponseSchema.openapi({
      description: 'Event-specific attributes.',
    }),
  })
  .openapi({
    title: 'WorkflowExecutionStarted',
    required: [
      'event_id',
      'event_timestamp',
      'root_workflow_exec_id',
      'parent_workflow_exec_id',
      'workflow_exec_id',
      'workflow_run_id',
      'workflow_name',
      'event_type',
      'attributes',
    ],
    description:
      'Emitted when a workflow execution begins.\n\nThis is the first event in any workflow execution lifecycle.',
  })
  .openapi('WorkflowExecutionStartedResponse')

const WorkflowExecutionCompletedAttributesResponseSchema = z
  .object({
    task_id: z
      .string()
      .openapi({
        title: 'Task Id',
        description: 'Unique identifier for the task within the workflow execution.',
      }),
    result: JSONPayloadResponseSchema.openapi({
      description: 'The final result returned by the workflow.',
    }),
  })
  .openapi({
    title: 'WorkflowExecutionCompletedAttributes',
    required: ['task_id', 'result'],
    description: 'Attributes for workflow execution completed events.',
  })
  .openapi('WorkflowExecutionCompletedAttributesResponse')

const WorkflowExecutionCompletedResponseSchema = z
  .object({
    event_id: z
      .string()
      .openapi({ title: 'Event Id', description: 'Unique identifier for this event instance.' }),
    event_timestamp: z
      .int()
      .openapi({
        title: 'Event Timestamp',
        description: 'Unix timestamp in nanoseconds when the event was created.',
      }),
    root_workflow_exec_id: z
      .string()
      .openapi({
        title: 'Root Workflow Exec Id',
        description: 'Execution ID of the root workflow that initiated this execution chain.',
      }),
    parent_workflow_exec_id: z
      .union([z.string(), z.null().nullable()])
      .openapi({
        title: 'Parent Workflow Exec Id',
        description:
          'Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.',
      }),
    workflow_exec_id: z
      .string()
      .openapi({
        title: 'Workflow Exec Id',
        description: 'Execution ID of the workflow that emitted this event.',
      }),
    workflow_run_id: z
      .string()
      .openapi({
        title: 'Workflow Run Id',
        description:
          'Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.',
      }),
    workflow_name: z
      .string()
      .openapi({
        title: 'Workflow Name',
        description: 'The registered name of the workflow that emitted this event.',
      }),
    event_type: z
      .literal('WORKFLOW_EXECUTION_COMPLETED')
      .default('WORKFLOW_EXECUTION_COMPLETED')
      .openapi({ title: 'Event Type', description: 'Event type discriminator.' }),
    attributes: WorkflowExecutionCompletedAttributesResponseSchema.openapi({
      description: 'Event-specific attributes.',
    }),
  })
  .openapi({
    title: 'WorkflowExecutionCompleted',
    required: [
      'event_id',
      'event_timestamp',
      'root_workflow_exec_id',
      'parent_workflow_exec_id',
      'workflow_exec_id',
      'workflow_run_id',
      'workflow_name',
      'event_type',
      'attributes',
    ],
    description:
      'Emitted when a workflow execution completes successfully.\n\nThis is a terminal event indicating the workflow finished without errors.',
  })
  .openapi('WorkflowExecutionCompletedResponse')

const WorkflowExecutionFailedAttributesSchema = z
  .object({
    task_id: z
      .string()
      .openapi({
        title: 'Task Id',
        description: 'Unique identifier for the task within the workflow execution.',
      }),
    failure: FailureSchema.openapi({
      description: 'Details about the failure that caused the workflow to fail.',
    }),
  })
  .openapi({
    title: 'WorkflowExecutionFailedAttributes',
    required: ['task_id', 'failure'],
    description: 'Attributes for workflow execution failed events.',
  })
  .openapi('WorkflowExecutionFailedAttributes')

const WorkflowExecutionFailedResponseSchema = z
  .object({
    event_id: z
      .string()
      .openapi({ title: 'Event Id', description: 'Unique identifier for this event instance.' }),
    event_timestamp: z
      .int()
      .openapi({
        title: 'Event Timestamp',
        description: 'Unix timestamp in nanoseconds when the event was created.',
      }),
    root_workflow_exec_id: z
      .string()
      .openapi({
        title: 'Root Workflow Exec Id',
        description: 'Execution ID of the root workflow that initiated this execution chain.',
      }),
    parent_workflow_exec_id: z
      .union([z.string(), z.null().nullable()])
      .openapi({
        title: 'Parent Workflow Exec Id',
        description:
          'Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.',
      }),
    workflow_exec_id: z
      .string()
      .openapi({
        title: 'Workflow Exec Id',
        description: 'Execution ID of the workflow that emitted this event.',
      }),
    workflow_run_id: z
      .string()
      .openapi({
        title: 'Workflow Run Id',
        description:
          'Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.',
      }),
    workflow_name: z
      .string()
      .openapi({
        title: 'Workflow Name',
        description: 'The registered name of the workflow that emitted this event.',
      }),
    event_type: z
      .literal('WORKFLOW_EXECUTION_FAILED')
      .default('WORKFLOW_EXECUTION_FAILED')
      .openapi({ title: 'Event Type', description: 'Event type discriminator.' }),
    attributes: WorkflowExecutionFailedAttributesSchema.openapi({
      description: 'Event-specific attributes.',
    }),
  })
  .openapi({
    title: 'WorkflowExecutionFailed',
    required: [
      'event_id',
      'event_timestamp',
      'root_workflow_exec_id',
      'parent_workflow_exec_id',
      'workflow_exec_id',
      'workflow_run_id',
      'workflow_name',
      'event_type',
      'attributes',
    ],
    description:
      'Emitted when a workflow execution fails due to an unhandled exception.\n\nThis is a terminal event indicating the workflow ended with an error.',
  })
  .openapi('WorkflowExecutionFailedResponse')

const WorkflowExecutionCanceledAttributesSchema = z
  .object({
    task_id: z
      .string()
      .openapi({
        title: 'Task Id',
        description: 'Unique identifier for the task within the workflow execution.',
      }),
    reason: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Reason', description: 'Optional reason provided for the cancellation.' }),
  })
  .openapi({
    title: 'WorkflowExecutionCanceledAttributes',
    required: ['task_id'],
    description: 'Attributes for workflow execution canceled events.',
  })
  .openapi('WorkflowExecutionCanceledAttributes')

const WorkflowExecutionCanceledResponseSchema = z
  .object({
    event_id: z
      .string()
      .openapi({ title: 'Event Id', description: 'Unique identifier for this event instance.' }),
    event_timestamp: z
      .int()
      .openapi({
        title: 'Event Timestamp',
        description: 'Unix timestamp in nanoseconds when the event was created.',
      }),
    root_workflow_exec_id: z
      .string()
      .openapi({
        title: 'Root Workflow Exec Id',
        description: 'Execution ID of the root workflow that initiated this execution chain.',
      }),
    parent_workflow_exec_id: z
      .union([z.string(), z.null().nullable()])
      .openapi({
        title: 'Parent Workflow Exec Id',
        description:
          'Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.',
      }),
    workflow_exec_id: z
      .string()
      .openapi({
        title: 'Workflow Exec Id',
        description: 'Execution ID of the workflow that emitted this event.',
      }),
    workflow_run_id: z
      .string()
      .openapi({
        title: 'Workflow Run Id',
        description:
          'Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.',
      }),
    workflow_name: z
      .string()
      .openapi({
        title: 'Workflow Name',
        description: 'The registered name of the workflow that emitted this event.',
      }),
    event_type: z
      .literal('WORKFLOW_EXECUTION_CANCELED')
      .default('WORKFLOW_EXECUTION_CANCELED')
      .openapi({ title: 'Event Type', description: 'Event type discriminator.' }),
    attributes: WorkflowExecutionCanceledAttributesSchema.openapi({
      description: 'Event-specific attributes.',
    }),
  })
  .openapi({
    title: 'WorkflowExecutionCanceled',
    required: [
      'event_id',
      'event_timestamp',
      'root_workflow_exec_id',
      'parent_workflow_exec_id',
      'workflow_exec_id',
      'workflow_run_id',
      'workflow_name',
      'event_type',
      'attributes',
    ],
    description:
      'Emitted when a workflow execution is canceled.\n\nThis is a terminal event indicating the workflow was explicitly canceled.',
  })
  .openapi('WorkflowExecutionCanceledResponse')

const WorkflowExecutionContinuedAsNewAttributesResponseSchema = z
  .object({
    task_id: z
      .string()
      .openapi({
        title: 'Task Id',
        description: 'Unique identifier for the task within the workflow execution.',
      }),
    new_execution_run_id: z
      .string()
      .openapi({
        title: 'New Execution Run Id',
        description: 'The run ID of the new workflow execution that continues this workflow.',
      }),
    workflow_name: z
      .string()
      .openapi({
        title: 'Workflow Name',
        description: 'The registered name of the continued workflow.',
      }),
    input: JSONPayloadResponseSchema.openapi({
      description: 'The input arguments passed to the new workflow execution.',
    }),
  })
  .openapi({
    title: 'WorkflowExecutionContinuedAsNewAttributes',
    required: ['task_id', 'new_execution_run_id', 'workflow_name', 'input'],
    description: 'Attributes for workflow execution continued-as-new events.',
  })
  .openapi('WorkflowExecutionContinuedAsNewAttributesResponse')

const WorkflowExecutionContinuedAsNewResponseSchema = z
  .object({
    event_id: z
      .string()
      .openapi({ title: 'Event Id', description: 'Unique identifier for this event instance.' }),
    event_timestamp: z
      .int()
      .openapi({
        title: 'Event Timestamp',
        description: 'Unix timestamp in nanoseconds when the event was created.',
      }),
    root_workflow_exec_id: z
      .string()
      .openapi({
        title: 'Root Workflow Exec Id',
        description: 'Execution ID of the root workflow that initiated this execution chain.',
      }),
    parent_workflow_exec_id: z
      .union([z.string(), z.null().nullable()])
      .openapi({
        title: 'Parent Workflow Exec Id',
        description:
          'Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.',
      }),
    workflow_exec_id: z
      .string()
      .openapi({
        title: 'Workflow Exec Id',
        description: 'Execution ID of the workflow that emitted this event.',
      }),
    workflow_run_id: z
      .string()
      .openapi({
        title: 'Workflow Run Id',
        description:
          'Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.',
      }),
    workflow_name: z
      .string()
      .openapi({
        title: 'Workflow Name',
        description: 'The registered name of the workflow that emitted this event.',
      }),
    event_type: z
      .literal('WORKFLOW_EXECUTION_CONTINUED_AS_NEW')
      .default('WORKFLOW_EXECUTION_CONTINUED_AS_NEW')
      .openapi({ title: 'Event Type', description: 'Event type discriminator.' }),
    attributes: WorkflowExecutionContinuedAsNewAttributesResponseSchema.openapi({
      description: 'Event-specific attributes.',
    }),
  })
  .openapi({
    title: 'WorkflowExecutionContinuedAsNew',
    required: [
      'event_id',
      'event_timestamp',
      'root_workflow_exec_id',
      'parent_workflow_exec_id',
      'workflow_exec_id',
      'workflow_run_id',
      'workflow_name',
      'event_type',
      'attributes',
    ],
    description:
      'Emitted when a workflow continues as a new execution.\n\nThis occurs when a workflow uses continue-as-new to reset its history\nwhile maintaining logical continuity.',
  })
  .openapi('WorkflowExecutionContinuedAsNewResponse')

const WorkflowTaskTimedOutAttributesSchema = z
  .object({
    task_id: z
      .string()
      .openapi({
        title: 'Task Id',
        description: 'Unique identifier for the task within the workflow execution.',
      }),
    timeout_type: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Timeout Type',
        description:
          "The type of timeout that occurred (e.g., 'START_TO_CLOSE', 'SCHEDULE_TO_START').",
      }),
  })
  .openapi({
    title: 'WorkflowTaskTimedOutAttributes',
    required: ['task_id'],
    description: 'Attributes for workflow task timed out events.',
  })
  .openapi('WorkflowTaskTimedOutAttributes')

const WorkflowTaskTimedOutResponseSchema = z
  .object({
    event_id: z
      .string()
      .openapi({ title: 'Event Id', description: 'Unique identifier for this event instance.' }),
    event_timestamp: z
      .int()
      .openapi({
        title: 'Event Timestamp',
        description: 'Unix timestamp in nanoseconds when the event was created.',
      }),
    root_workflow_exec_id: z
      .string()
      .openapi({
        title: 'Root Workflow Exec Id',
        description: 'Execution ID of the root workflow that initiated this execution chain.',
      }),
    parent_workflow_exec_id: z
      .union([z.string(), z.null().nullable()])
      .openapi({
        title: 'Parent Workflow Exec Id',
        description:
          'Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.',
      }),
    workflow_exec_id: z
      .string()
      .openapi({
        title: 'Workflow Exec Id',
        description: 'Execution ID of the workflow that emitted this event.',
      }),
    workflow_run_id: z
      .string()
      .openapi({
        title: 'Workflow Run Id',
        description:
          'Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.',
      }),
    workflow_name: z
      .string()
      .openapi({
        title: 'Workflow Name',
        description: 'The registered name of the workflow that emitted this event.',
      }),
    event_type: z
      .literal('WORKFLOW_TASK_TIMED_OUT')
      .default('WORKFLOW_TASK_TIMED_OUT')
      .openapi({ title: 'Event Type', description: 'Event type discriminator.' }),
    attributes: WorkflowTaskTimedOutAttributesSchema.openapi({
      description: 'Event-specific attributes.',
    }),
  })
  .openapi({
    title: 'WorkflowTaskTimedOut',
    required: [
      'event_id',
      'event_timestamp',
      'root_workflow_exec_id',
      'parent_workflow_exec_id',
      'workflow_exec_id',
      'workflow_run_id',
      'workflow_name',
      'event_type',
      'attributes',
    ],
    description:
      'Emitted when a workflow task times out.\n\nThis indicates the workflow task (a unit of workflow execution) exceeded\nits configured timeout.',
  })
  .openapi('WorkflowTaskTimedOutResponse')

const WorkflowTaskFailedAttributesSchema = z
  .object({
    task_id: z
      .string()
      .openapi({
        title: 'Task Id',
        description: 'Unique identifier for the task within the workflow execution.',
      }),
    failure: FailureSchema.openapi({
      description: 'Details about the failure that caused the task to fail.',
    }),
  })
  .openapi({
    title: 'WorkflowTaskFailedAttributes',
    required: ['task_id', 'failure'],
    description: 'Attributes for workflow task failed events.',
  })
  .openapi('WorkflowTaskFailedAttributes')

const WorkflowTaskFailedResponseSchema = z
  .object({
    event_id: z
      .string()
      .openapi({ title: 'Event Id', description: 'Unique identifier for this event instance.' }),
    event_timestamp: z
      .int()
      .openapi({
        title: 'Event Timestamp',
        description: 'Unix timestamp in nanoseconds when the event was created.',
      }),
    root_workflow_exec_id: z
      .string()
      .openapi({
        title: 'Root Workflow Exec Id',
        description: 'Execution ID of the root workflow that initiated this execution chain.',
      }),
    parent_workflow_exec_id: z
      .union([z.string(), z.null().nullable()])
      .openapi({
        title: 'Parent Workflow Exec Id',
        description:
          'Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.',
      }),
    workflow_exec_id: z
      .string()
      .openapi({
        title: 'Workflow Exec Id',
        description: 'Execution ID of the workflow that emitted this event.',
      }),
    workflow_run_id: z
      .string()
      .openapi({
        title: 'Workflow Run Id',
        description:
          'Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.',
      }),
    workflow_name: z
      .string()
      .openapi({
        title: 'Workflow Name',
        description: 'The registered name of the workflow that emitted this event.',
      }),
    event_type: z
      .literal('WORKFLOW_TASK_FAILED')
      .default('WORKFLOW_TASK_FAILED')
      .openapi({ title: 'Event Type', description: 'Event type discriminator.' }),
    attributes: WorkflowTaskFailedAttributesSchema.openapi({
      description: 'Event-specific attributes.',
    }),
  })
  .openapi({
    title: 'WorkflowTaskFailed',
    required: [
      'event_id',
      'event_timestamp',
      'root_workflow_exec_id',
      'parent_workflow_exec_id',
      'workflow_exec_id',
      'workflow_run_id',
      'workflow_name',
      'event_type',
      'attributes',
    ],
    description:
      'Emitted when a workflow task fails.\n\nThis indicates an error occurred during workflow task execution,\nwhich may trigger a retry depending on configuration.',
  })
  .openapi('WorkflowTaskFailedResponse')

const ListWorkflowEventResponseSchema = z
  .object({
    events: z
      .array(
        z.xor([
          WorkflowExecutionStartedResponseSchema,
          WorkflowExecutionCompletedResponseSchema,
          WorkflowExecutionFailedResponseSchema,
          WorkflowExecutionCanceledResponseSchema,
          WorkflowExecutionContinuedAsNewResponseSchema,
          WorkflowTaskTimedOutResponseSchema,
          WorkflowTaskFailedResponseSchema,
          CustomTaskStartedResponseSchema,
          CustomTaskInProgressResponseSchema,
          CustomTaskCompletedResponseSchema,
          CustomTaskFailedResponseSchema,
          CustomTaskTimedOutResponseSchema,
          CustomTaskCanceledResponseSchema,
          ActivityTaskStartedResponseSchema,
          ActivityTaskCompletedResponseSchema,
          ActivityTaskRetryingResponseSchema,
          ActivityTaskFailedResponseSchema,
        ]),
      )
      .openapi({ title: 'Events', description: 'List of workflow events.' }),
    next_cursor: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Next Cursor', description: 'Cursor for pagination.' }),
  })
  .openapi({ title: 'ListWorkflowEventResponse', required: ['events'] })
  .openapi('ListWorkflowEventResponse')

const NetworkEncodedInputSchema = z
  .object({
    b64payload: z.string().openapi({ title: 'B64Payload', description: 'The encoded payload' }),
    encoding_options: z
      .array(EncodedPayloadOptionsSchema)
      .default([])
      .exactOptional()
      .openapi({ title: 'Encoding Options', description: 'The encoding of the payload' }),
    empty: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Empty', description: 'Whether the payload is empty' }),
  })
  .openapi({ title: 'NetworkEncodedInput', required: ['b64payload'] })
  .openapi('NetworkEncodedInput')

const QueryDefinitionSchema = z
  .object({
    name: z.string().openapi({ title: 'Name', description: 'Name of the query' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description', description: 'Description of the query' }),
    input_schema: z
      .looseObject({})
      .openapi({ title: 'Input Schema', description: "Input JSON schema of the query's model" }),
    output_schema: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Output Schema', description: "Output JSON schema of the query's model" }),
  })
  .openapi({ title: 'QueryDefinition', required: ['name', 'input_schema'] })
  .openapi('QueryDefinition')

const QueryInvocationBodySchema = z
  .object({
    name: z.string().openapi({ title: 'Name', description: 'The name of the query to request' }),
    input: z
      .union([NetworkEncodedInputSchema, z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Input', description: 'Input data for the query, matching its schema' }),
  })
  .openapi({ title: 'QueryInvocationBody', required: ['name'] })
  .openapi('QueryInvocationBody')

const QueryWorkflowResponseSchema = z
  .object({
    query_name: z.string().openapi({ title: 'Query Name' }),
    result: z
      .any()
      .openapi({ title: 'Result', description: 'The result of the Query workflow call' }),
  })
  .openapi({ title: 'QueryWorkflowResponse', required: ['query_name', 'result'] })
  .openapi('QueryWorkflowResponse')

const ResetInvocationBodySchema = z
  .object({
    event_id: z
      .int()
      .openapi({
        title: 'Event Id',
        description: 'The event ID to reset the workflow execution to',
      }),
    reason: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Reason', description: 'Reason for resetting the workflow execution' }),
    exclude_signals: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Exclude Signals',
        description: 'Whether to exclude signals that happened after the reset point',
      }),
    exclude_updates: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Exclude Updates',
        description: 'Whether to exclude updates that happened after the reset point',
      }),
  })
  .openapi({ title: 'ResetInvocationBody', required: ['event_id'] })
  .openapi('ResetInvocationBody')

const ScalarMetricSchema = z
  .object({ value: z.union([z.int(), z.number()]).openapi({ title: 'Value' }) })
  .openapi({
    title: 'ScalarMetric',
    required: ['value'],
    description: 'Scalar metric with a single value.',
  })
  .openapi('ScalarMetric')

const ScheduleRangeSchema = z
  .object({
    start: z.int().openapi({ title: 'Start' }),
    end: z.int().default(0).exactOptional().openapi({ title: 'End' }),
    step: z.int().default(0).exactOptional().openapi({ title: 'Step' }),
  })
  .openapi({ title: 'ScheduleRange', required: ['start'] })
  .openapi('ScheduleRange')

const ScheduleCalendarSchema = z
  .object({
    second: z
      .array(ScheduleRangeSchema)
      .default([{ start: 0, end: 0, step: 0 }])
      .exactOptional()
      .openapi({ title: 'Second' }),
    minute: z
      .array(ScheduleRangeSchema)
      .default([{ start: 0, end: 0, step: 0 }])
      .exactOptional()
      .openapi({ title: 'Minute' }),
    hour: z
      .array(ScheduleRangeSchema)
      .default([{ start: 0, end: 0, step: 0 }])
      .exactOptional()
      .openapi({ title: 'Hour' }),
    day_of_month: z
      .array(ScheduleRangeSchema)
      .default([{ start: 1, end: 31, step: 0 }])
      .exactOptional()
      .openapi({ title: 'Day Of Month' }),
    month: z
      .array(ScheduleRangeSchema)
      .default([{ start: 1, end: 12, step: 0 }])
      .exactOptional()
      .openapi({ title: 'Month' }),
    year: z.array(ScheduleRangeSchema).default([]).exactOptional().openapi({ title: 'Year' }),
    day_of_week: z
      .array(ScheduleRangeSchema)
      .default([{ start: 0, end: 6, step: 0 }])
      .exactOptional()
      .openapi({ title: 'Day Of Week' }),
    comment: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Comment' }),
  })
  .openapi({ title: 'ScheduleCalendar', required: [] })
  .openapi('ScheduleCalendar')

const ScheduleIntervalSchema = z
  .object({
    every: z.iso.duration().openapi({ title: 'Every' }),
    offset: z
      .union([z.iso.duration(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Offset' }),
  })
  .openapi({ title: 'ScheduleInterval', required: ['every'] })
  .openapi('ScheduleInterval')

const ScheduleOverlapPolicySchema = z
  .union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6)])
  .openapi({
    title: 'ScheduleOverlapPolicy',
    description:
      'Controls what happens when a workflow would be started by a schedule but\none is already running.',
  })
  .openapi('ScheduleOverlapPolicy')

const SchedulePolicySchema = z
  .object({
    catchup_window_seconds: z
      .int()
      .default(31536000)
      .exactOptional()
      .openapi({
        title: 'Catchup Window Seconds',
        description:
          'After a Temporal server is unavailable, amount of time in seconds in the past to execute missed actions.',
      }),
    overlap: ScheduleOverlapPolicySchema.default(1)
      .exactOptional()
      .openapi({
        description: 'Policy controlling what to do when a workflow is already running.',
      }),
    pause_on_failure: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Pause On Failure',
        description: 'Whether to pause the schedule after a workflow failure.',
      }),
  })
  .openapi({ title: 'SchedulePolicy', required: [] })
  .openapi('SchedulePolicy')

const ScheduleDefinitionSchema = z
  .object({
    input: z
      .any()
      .openapi({
        title: 'Input',
        description: 'Input to provide to the workflow when starting it.',
      }),
    calendars: z
      .array(ScheduleCalendarSchema)
      .exactOptional()
      .openapi({ title: 'Calendars', description: 'Calendar-based specification of times.' }),
    intervals: z
      .array(ScheduleIntervalSchema)
      .exactOptional()
      .openapi({ title: 'Intervals', description: 'Interval-based specification of times.' }),
    cron_expressions: z
      .array(z.string())
      .exactOptional()
      .openapi({ title: 'Cron Expressions', description: 'Cron-based specification of times.' }),
    skip: z
      .array(ScheduleCalendarSchema)
      .exactOptional()
      .openapi({ title: 'Skip', description: 'Set of calendar times to skip.' }),
    start_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Start At', description: 'Time after which the first action may be run.' }),
    end_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'End At', description: 'Time after which no more actions will be run.' }),
    jitter: z
      .union([z.iso.duration(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Jitter',
        description:
          "Jitter to apply each action.\n\nAn action's scheduled time will be incremented by a random value between 0\nand this value if present (but not past the next schedule).\n",
      }),
    time_zone_name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Time Zone Name',
        description: 'IANA time zone name, for example ``US/Central``.',
      }),
    policy: SchedulePolicySchema.exactOptional().openapi({
      description: 'Policy for the schedule.',
    }),
    schedule_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Schedule Id', description: 'Unique identifier for the schedule.' }),
  })
  .openapi({
    title: 'ScheduleDefinition',
    required: ['input'],
    description:
      'Specification of the times scheduled actions may occur.\n\nThe times are the union of :py:attr:`calendars`, :py:attr:`intervals`, and\n:py:attr:`cron_expressions` excluding anything in :py:attr:`skip`.\n\nUsed for input where schedule_id is optional (can be provided or auto-generated).',
  })
  .openapi('ScheduleDefinition')

const ScheduleDefinitionOutputSchema = z
  .object({
    input: z
      .any()
      .openapi({
        title: 'Input',
        description: 'Input to provide to the workflow when starting it.',
      }),
    calendars: z
      .array(ScheduleCalendarSchema)
      .exactOptional()
      .openapi({ title: 'Calendars', description: 'Calendar-based specification of times.' }),
    intervals: z
      .array(ScheduleIntervalSchema)
      .exactOptional()
      .openapi({ title: 'Intervals', description: 'Interval-based specification of times.' }),
    cron_expressions: z
      .array(z.string())
      .exactOptional()
      .openapi({ title: 'Cron Expressions', description: 'Cron-based specification of times.' }),
    skip: z
      .array(ScheduleCalendarSchema)
      .exactOptional()
      .openapi({ title: 'Skip', description: 'Set of calendar times to skip.' }),
    start_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Start At', description: 'Time after which the first action may be run.' }),
    end_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'End At', description: 'Time after which no more actions will be run.' }),
    jitter: z
      .union([z.iso.duration(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Jitter',
        description:
          "Jitter to apply each action.\n\nAn action's scheduled time will be incremented by a random value between 0\nand this value if present (but not past the next schedule).\n",
      }),
    time_zone_name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Time Zone Name',
        description: 'IANA time zone name, for example ``US/Central``.',
      }),
    policy: SchedulePolicySchema.exactOptional().openapi({
      description: 'Policy for the schedule.',
    }),
    schedule_id: z
      .string()
      .openapi({ title: 'Schedule Id', description: 'Unique identifier for the schedule.' }),
  })
  .openapi({
    title: 'ScheduleDefinitionOutput',
    required: ['input', 'schedule_id'],
    description:
      'Output representation of a schedule with required schedule_id.\n\nUsed when returning schedules from the API where schedule_id is always present.',
  })
  .openapi('ScheduleDefinitionOutput')

const SignalDefinitionSchema = z
  .object({
    name: z.string().openapi({ title: 'Name', description: 'Name of the signal' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description', description: 'Description of the signal' }),
    input_schema: z
      .looseObject({})
      .openapi({ title: 'Input Schema', description: "Input JSON schema of the signal's model" }),
  })
  .openapi({ title: 'SignalDefinition', required: ['name', 'input_schema'] })
  .openapi('SignalDefinition')

const SignalInvocationBodySchema = z
  .object({
    name: z.string().openapi({ title: 'Name', description: 'The name of the signal to send' }),
    input: z
      .union([NetworkEncodedInputSchema, z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Input', description: 'Input data for the signal, matching its schema' }),
  })
  .openapi({ title: 'SignalInvocationBody', required: ['name'] })
  .openapi('SignalInvocationBody')

const SignalWorkflowResponseSchema = z
  .object({
    message: z.string().default('Signal accepted').exactOptional().openapi({ title: 'Message' }),
  })
  .openapi({ title: 'SignalWorkflowResponse', required: [] })
  .openapi('SignalWorkflowResponse')

const StreamEventWorkflowContextSchema = z
  .object({
    namespace: z.string().openapi({ title: 'Namespace' }),
    workflow_name: z.string().openapi({ title: 'Workflow Name' }),
    workflow_exec_id: z.string().openapi({ title: 'Workflow Exec Id' }),
    parent_workflow_exec_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Parent Workflow Exec Id' }),
    root_workflow_exec_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Root Workflow Exec Id' }),
  })
  .openapi({
    title: 'StreamEventWorkflowContext',
    required: ['namespace', 'workflow_name', 'workflow_exec_id'],
  })
  .openapi('StreamEventWorkflowContext')

const StreamEventSsePayloadSchema = z
  .object({
    stream: z.string().openapi({ title: 'Stream' }),
    timestamp: z.iso.datetime({ offset: true }).exactOptional().openapi({ title: 'Timestamp' }),
    data: z
      .xor([
        WorkflowExecutionStartedResponseSchema,
        WorkflowExecutionCompletedResponseSchema,
        WorkflowExecutionFailedResponseSchema,
        WorkflowExecutionCanceledResponseSchema,
        WorkflowExecutionContinuedAsNewResponseSchema,
        WorkflowTaskTimedOutResponseSchema,
        WorkflowTaskFailedResponseSchema,
        CustomTaskStartedResponseSchema,
        CustomTaskInProgressResponseSchema,
        CustomTaskCompletedResponseSchema,
        CustomTaskFailedResponseSchema,
        CustomTaskTimedOutResponseSchema,
        CustomTaskCanceledResponseSchema,
        ActivityTaskStartedResponseSchema,
        ActivityTaskCompletedResponseSchema,
        ActivityTaskRetryingResponseSchema,
        ActivityTaskFailedResponseSchema,
      ])
      .openapi({ title: 'Data' }),
    workflow_context: StreamEventWorkflowContextSchema,
    metadata: z.looseObject({}).exactOptional().openapi({ title: 'Metadata' }),
    broker_sequence: z.int().openapi({ title: 'Broker Sequence' }),
  })
  .openapi({
    title: 'StreamEventSsePayload',
    required: ['stream', 'data', 'workflow_context', 'broker_sequence'],
  })
  .openapi('StreamEventSsePayload')

const TempoTraceAttributeStringValueSchema = z
  .object({
    stringValue: z
      .string()
      .openapi({ title: 'Stringvalue', description: 'The string value of the attribute' }),
  })
  .openapi({ title: 'TempoTraceAttributeStringValue', required: ['stringValue'] })
  .openapi('TempoTraceAttributeStringValue')

const TempoTraceAttributeIntValueSchema = z
  .object({
    intValue: z
      .string()
      .openapi({ title: 'Intvalue', description: 'The integer value of the attribute' }),
  })
  .openapi({ title: 'TempoTraceAttributeIntValue', required: ['intValue'] })
  .openapi('TempoTraceAttributeIntValue')

const TempoTraceAttributeBoolValueSchema = z
  .object({
    boolValue: z
      .boolean()
      .openapi({ title: 'Boolvalue', description: 'The boolean value of the attribute' }),
  })
  .openapi({ title: 'TempoTraceAttributeBoolValue', required: ['boolValue'] })
  .openapi('TempoTraceAttributeBoolValue')

const TempoTraceAttributeSchema = z
  .object({
    key: z.string().openapi({ title: 'Key', description: 'The key of the attribute' }),
    value: z
      .union([
        TempoTraceAttributeStringValueSchema,
        TempoTraceAttributeIntValueSchema,
        TempoTraceAttributeBoolValueSchema,
      ])
      .openapi({ title: 'Value', description: 'The value of the attribute' }),
  })
  .openapi({ title: 'TempoTraceAttribute', required: ['key', 'value'] })
  .openapi('TempoTraceAttribute')

const TempoTraceResourceSchema = z
  .object({
    attributes: z
      .array(TempoTraceAttributeSchema)
      .exactOptional()
      .openapi({ title: 'Attributes', description: 'The attributes of the resource' }),
  })
  .openapi({ title: 'TempoTraceResource', required: [] })
  .openapi('TempoTraceResource')

const TempoTraceScopeSchema = z
  .object({ name: z.string().openapi({ title: 'Name', description: 'The name of the span' }) })
  .openapi({ title: 'TempoTraceScope', required: ['name'] })
  .openapi('TempoTraceScope')

const TempoTraceScopeKindSchema = z
  .enum(['SPAN_KIND_INTERNAL', 'SPAN_KIND_SERVER', 'SPAN_KIND_CLIENT'])
  .openapi({ title: 'TempoTraceScopeKind' })
  .openapi('TempoTraceScopeKind')

const TempoTraceEventSchema = z
  .object({
    name: z.string().openapi({ title: 'Name', description: 'The name of the event' }),
    timeUnixNano: z
      .string()
      .openapi({ title: 'Timeunixnano', description: 'The time of the event in Unix nano' }),
    attributes: z
      .array(TempoTraceAttributeSchema)
      .exactOptional()
      .openapi({ title: 'Attributes', description: 'The attributes of the event' }),
  })
  .openapi({ title: 'TempoTraceEvent', required: ['name', 'timeUnixNano'] })
  .openapi('TempoTraceEvent')

const TempoTraceSpanSchema = z
  .object({
    traceId: z.string().openapi({ title: 'Traceid', description: 'The trace ID of the scope' }),
    spanId: z.string().openapi({ title: 'Spanid', description: 'The span ID of the scope' }),
    parentSpanId: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Parentspanid', description: 'The parent span ID of the scope' }),
    name: z.string().openapi({ title: 'Name', description: 'The name of the scope' }),
    kind: TempoTraceScopeKindSchema.openapi({ description: 'The kind of the scope' }),
    startTimeUnixNano: z
      .string()
      .openapi({
        title: 'Starttimeunixnano',
        description: 'The start time of the scope in Unix nano',
      }),
    endTimeUnixNano: z
      .string()
      .openapi({ title: 'Endtimeunixnano', description: 'The end time of the scope in Unix nano' }),
    attributes: z
      .array(TempoTraceAttributeSchema)
      .exactOptional()
      .openapi({ title: 'Attributes', description: 'The attributes of the scope' }),
    events: z
      .array(TempoTraceEventSchema)
      .exactOptional()
      .openapi({ title: 'Events', description: 'The events of the scope' }),
  })
  .openapi({
    title: 'TempoTraceSpan',
    required: ['traceId', 'spanId', 'name', 'kind', 'startTimeUnixNano', 'endTimeUnixNano'],
  })
  .openapi('TempoTraceSpan')

const TempoTraceScopeSpanSchema = z
  .object({
    scope: TempoTraceScopeSchema.openapi({ description: 'The scope of the span' }),
    spans: z
      .array(TempoTraceSpanSchema)
      .exactOptional()
      .openapi({ title: 'Spans', description: 'The spans of the scope' }),
  })
  .openapi({ title: 'TempoTraceScopeSpan', required: ['scope'] })
  .openapi('TempoTraceScopeSpan')

const TempoTraceBatchSchema = z
  .object({
    resource: TempoTraceResourceSchema.openapi({ description: 'The resource of the batch' }),
    scopeSpans: z
      .array(TempoTraceScopeSpanSchema)
      .exactOptional()
      .openapi({ title: 'Scopespans', description: 'The spans of the scope' }),
  })
  .openapi({ title: 'TempoTraceBatch', required: ['resource'] })
  .openapi('TempoTraceBatch')

const TempoGetTraceResponseSchema = z
  .object({
    batches: z
      .array(TempoTraceBatchSchema)
      .exactOptional()
      .openapi({ title: 'Batches', description: 'The batches of the trace' }),
  })
  .openapi({
    title: 'TempoGetTraceResponse',
    description:
      'Trace response in OpenTelemetry format.\n\nThis is the unified trace format used across all trace providers (Tempo, ClickHouse, etc.).\nRegardless of the underlying backend, all trace data is normalized to this Tempo-compatible\nOpenTelemetry format to ensure consistency in the API response structure.',
    required: [],
  })
  .openapi('TempoGetTraceResponse')

const TimeSeriesMetricSchema = z
  .object({
    value: z
      .array(
        z
          .array(z.unknown())
          .superRefine((arr, ctx) => {
            const Prefix = [z.int(), z.union([z.int(), z.number()])]
            for (const [i, Schema] of Prefix.slice(0, arr.length).entries()) {
              const result = Schema.safeParse(arr[i])
              if (!result.success) {
                for (const issue of result.error.issues) {
                  ctx.addIssue({ ...issue, path: [i, ...issue.path] })
                }
              }
            }
          })
          .length(2),
      )
      .openapi({ title: 'Value' }),
  })
  .openapi({
    title: 'TimeSeriesMetric',
    required: ['value'],
    description: 'Time-series metric with timestamp-value pairs.',
  })
  .openapi('TimeSeriesMetric')

const UpdateDefinitionSchema = z
  .object({
    name: z.string().openapi({ title: 'Name', description: 'Name of the update' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description', description: 'Description of the update' }),
    input_schema: z
      .looseObject({})
      .openapi({ title: 'Input Schema', description: "Input JSON schema of the update's model" }),
    output_schema: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Output Schema', description: "Output JSON schema of the update's model" }),
  })
  .openapi({ title: 'UpdateDefinition', required: ['name', 'input_schema'] })
  .openapi('UpdateDefinition')

const UpdateInvocationBodySchema = z
  .object({
    name: z.string().openapi({ title: 'Name', description: 'The name of the update to request' }),
    input: z
      .union([NetworkEncodedInputSchema, z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Input', description: 'Input data for the update, matching its schema' }),
  })
  .openapi({ title: 'UpdateInvocationBody', required: ['name'] })
  .openapi('UpdateInvocationBody')

const UpdateWorkflowResponseSchema = z
  .object({
    update_name: z.string().openapi({ title: 'Update Name' }),
    result: z
      .any()
      .openapi({ title: 'Result', description: 'The result of the Update workflow call' }),
  })
  .openapi({ title: 'UpdateWorkflowResponse', required: ['update_name', 'result'] })
  .openapi('UpdateWorkflowResponse')

const WorkerInfoSchema = z
  .object({
    scheduler_url: z.string().openapi({ title: 'Scheduler Url' }),
    namespace: z.string().openapi({ title: 'Namespace' }),
    tls: z.boolean().default(false).exactOptional().openapi({ title: 'Tls' }),
  })
  .openapi({ title: 'WorkerInfo', required: ['scheduler_url', 'namespace'] })
  .openapi('WorkerInfo')

const WorkflowTypeSchema = z
  .literal('code')
  .openapi({ title: 'WorkflowType' })
  .openapi('WorkflowType')

const WorkflowSchema = z
  .object({
    id: z.uuid().openapi({ title: 'Id', description: 'Unique identifier of the workflow' }),
    name: z.string().openapi({ title: 'Name', description: 'Name of the workflow' }),
    display_name: z
      .string()
      .openapi({ title: 'Display Name', description: 'Display name of the workflow' }),
    type: WorkflowTypeSchema.openapi({ description: 'Type of the workflow' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description', description: 'Description of the workflow' }),
    customer_id: z
      .uuid()
      .openapi({ title: 'Customer Id', description: 'Customer ID of the workflow' }),
    workspace_id: z
      .uuid()
      .openapi({ title: 'Workspace Id', description: 'Workspace ID of the workflow' }),
    shared_namespace: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Shared Namespace',
        description: "Reserved namespace for shared workflows (e.g., 'shared:my-shared-workflow')",
      }),
    available_in_chat_assistant: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Available In Chat Assistant',
        description: 'Whether the workflow is available in chat assistant',
      }),
    is_technical: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Is Technical',
        description: 'Whether the workflow is technical (e.g. SDK-managed)',
      }),
    archived: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Archived', description: 'Whether the workflow is archived' }),
  })
  .openapi({
    title: 'Workflow',
    required: ['id', 'name', 'display_name', 'type', 'customer_id', 'workspace_id'],
  })
  .openapi('Workflow')

const WorkflowArchiveResponseSchema = z
  .object({ workflow: WorkflowSchema.openapi({ description: 'The workflow spec' }) })
  .openapi({ title: 'WorkflowArchiveResponse', required: ['workflow'] })
  .openapi('WorkflowArchiveResponse')

const WorkflowMetadataSchema = z
  .object({
    shared_namespace: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Shared Namespace',
        description: 'Namespace for shared workflows, None if user-owned',
      }),
  })
  .openapi({ title: 'WorkflowMetadata', required: [] })
  .openapi('WorkflowMetadata')

const WorkflowBasicDefinitionSchema = z
  .object({
    id: z.uuid().openapi({ title: 'Id' }),
    name: z.string().openapi({ title: 'Name', description: 'The name of the workflow' }),
    display_name: z
      .string()
      .openapi({ title: 'Display Name', description: 'The display name of the workflow' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description', description: 'A description of the workflow' }),
    metadata: WorkflowMetadataSchema.exactOptional().openapi({ description: 'Workflow metadata' }),
    archived: z
      .boolean()
      .openapi({ title: 'Archived', description: 'Whether the workflow is archived' }),
  })
  .openapi({
    title: 'WorkflowBasicDefinition',
    required: ['id', 'name', 'display_name', 'archived'],
  })
  .openapi('WorkflowBasicDefinition')

const WorkflowCodeDefinitionSchema = z
  .object({
    input_schema: z
      .looseObject({})
      .openapi({ title: 'Input Schema', description: "Input schema of the workflow's run method" }),
    output_schema: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Output Schema',
        description: "Output schema of the workflow's run method",
      }),
    signals: z
      .array(SignalDefinitionSchema)
      .exactOptional()
      .openapi({ title: 'Signals', description: 'Signal handlers defined by the workflow' }),
    queries: z
      .array(QueryDefinitionSchema)
      .exactOptional()
      .openapi({ title: 'Queries', description: 'Query handlers defined by the workflow' }),
    updates: z
      .array(UpdateDefinitionSchema)
      .exactOptional()
      .openapi({ title: 'Updates', description: 'Update handlers defined by the workflow' }),
    enforce_determinism: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Enforce Determinism',
        description: 'Whether the workflow enforces deterministic execution',
      }),
    execution_timeout: z
      .number()
      .exactOptional()
      .openapi({
        title: 'Execution Timeout',
        description: 'Maximum total execution time including retries and continue-as-new',
      }),
  })
  .openapi({ title: 'WorkflowCodeDefinition', required: ['input_schema'] })
  .openapi('WorkflowCodeDefinition')

const WorkflowEventTypeSchema = z
  .enum([
    'WORKFLOW_EXECUTION_STARTED',
    'WORKFLOW_EXECUTION_COMPLETED',
    'WORKFLOW_EXECUTION_FAILED',
    'WORKFLOW_EXECUTION_CANCELED',
    'WORKFLOW_EXECUTION_CONTINUED_AS_NEW',
    'WORKFLOW_TASK_TIMED_OUT',
    'WORKFLOW_TASK_FAILED',
    'CUSTOM_TASK_STARTED',
    'CUSTOM_TASK_IN_PROGRESS',
    'CUSTOM_TASK_COMPLETED',
    'CUSTOM_TASK_FAILED',
    'CUSTOM_TASK_TIMED_OUT',
    'CUSTOM_TASK_CANCELED',
    'ACTIVITY_TASK_STARTED',
    'ACTIVITY_TASK_COMPLETED',
    'ACTIVITY_TASK_RETRYING',
    'ACTIVITY_TASK_FAILED',
  ])
  .openapi({ title: 'WorkflowEventType' })
  .openapi('WorkflowEventType')

const WorkflowExecutionStatusSchema = z
  .enum([
    'RUNNING',
    'COMPLETED',
    'FAILED',
    'CANCELED',
    'TERMINATED',
    'CONTINUED_AS_NEW',
    'TIMED_OUT',
    'RETRYING_AFTER_ERROR',
  ])
  .openapi({ title: 'WorkflowExecutionStatus' })
  .openapi('WorkflowExecutionStatus')

const WorkflowExecutionWithoutResultResponseSchema = z
  .object({
    workflow_name: z
      .string()
      .openapi({ title: 'Workflow Name', description: 'The name of the workflow' }),
    execution_id: z
      .string()
      .openapi({ title: 'Execution Id', description: 'The ID of the workflow execution' }),
    parent_execution_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Parent Execution Id',
        description: 'The parent execution ID of the workflow execution',
      }),
    root_execution_id: z
      .string()
      .openapi({
        title: 'Root Execution Id',
        description: 'The root execution ID of the workflow execution',
      }),
    status: z
      .union([WorkflowExecutionStatusSchema, z.null().nullable()])
      .openapi({ description: 'The status of the workflow execution' }),
    start_time: z.iso
      .datetime({ offset: true })
      .openapi({ title: 'Start Time', description: 'The start time of the workflow execution' }),
    end_time: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({
        title: 'End Time',
        description: 'The end time of the workflow execution, if available',
      }),
    total_duration_ms: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Total Duration Ms',
        description: 'The total duration of the trace in milliseconds',
      }),
  })
  .openapi({
    title: 'WorkflowExecutionWithoutResultResponse',
    required: [
      'workflow_name',
      'execution_id',
      'root_execution_id',
      'status',
      'start_time',
      'end_time',
    ],
  })
  .openapi('WorkflowExecutionWithoutResultResponse')

const WorkflowExecutionListResponseSchema = z
  .object({
    executions: z
      .array(WorkflowExecutionWithoutResultResponseSchema)
      .openapi({ title: 'Executions', description: 'A list of workflow executions' }),
    next_page_token: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Next Page Token',
        description:
          'Token to use for fetching the next page of results. Null if this is the last page.',
      }),
  })
  .openapi({ title: 'WorkflowExecutionListResponse', required: ['executions'] })
  .openapi('WorkflowExecutionListResponse')

const WorkflowExecutionProgressTraceEventSchema = z
  .object({
    type: EventTypeSchema.default('EVENT_PROGRESS').exactOptional(),
    name: z.string().openapi({ title: 'Name', description: 'Name of the event' }),
    id: z.string().openapi({ title: 'Id', description: 'The ID of the event' }),
    timestamp_unix_nano: z
      .int()
      .openapi({
        title: 'Timestamp Unix Nano',
        description: 'The timestamp of the event in nanoseconds since the Unix epoch',
      }),
    attributes: z
      .record(z.string(), WorkflowExecutionTraceSummaryAttributesValuesSchema)
      .openapi({ title: 'Attributes', description: 'The attributes of the event' }),
    internal: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Internal', description: 'Whether the event is internal' }),
    status: EventProgressStatusSchema.default('RUNNING')
      .exactOptional()
      .openapi({ description: 'The progress message' }),
    start_time_unix_ms: z
      .int()
      .openapi({
        title: 'Start Time Unix Ms',
        description: 'The start time of the event in milliseconds since the Unix epoch',
      }),
    end_time_unix_ms: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'End Time Unix Ms',
        description: 'The end time of the event in milliseconds since the Unix epoch',
      }),
    error: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Error', description: 'The error message, if any' }),
  })
  .openapi({
    title: 'WorkflowExecutionProgressTraceEvent',
    required: ['name', 'id', 'timestamp_unix_nano', 'attributes', 'start_time_unix_ms'],
  })
  .openapi('WorkflowExecutionProgressTraceEvent')

const WorkflowExecutionRequestSchema = z
  .object({
    execution_id: z
      .union([z.string().max(256), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Execution Id',
        description:
          'Allows you to specify a custom execution ID. If not provided, a random ID will be generated.',
      }),
    input: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Input',
        description:
          "The input to the workflow. This should be a dictionary that matches the workflow's input schema.",
      }),
    encoded_input: z
      .union([NetworkEncodedInputSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description: 'Encoded input to the workflow, used when payload encoding is enabled.',
      }),
    wait_for_result: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Wait For Result',
        description: 'If true, wait for the workflow to complete and return the result directly.',
      }),
    timeout_seconds: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Timeout Seconds',
        description: 'Maximum time to wait for completion when wait_for_result is true.',
      }),
    custom_tracing_attributes: z
      .union([z.record(z.string(), z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Custom Tracing Attributes' }),
    task_queue: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Task Queue',
        description: 'Deprecated. Use deployment_name instead.',
        deprecated: true,
      }),
    deployment_name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Deployment Name',
        description: 'Name of the deployment to route this execution to',
      }),
  })
  .openapi({ title: 'WorkflowExecutionRequest', required: [] })
  .openapi('WorkflowExecutionRequest')

const WorkflowExecutionResponseSchema = z
  .object({
    workflow_name: z
      .string()
      .openapi({ title: 'Workflow Name', description: 'The name of the workflow' }),
    execution_id: z
      .string()
      .openapi({ title: 'Execution Id', description: 'The ID of the workflow execution' }),
    parent_execution_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Parent Execution Id',
        description: 'The parent execution ID of the workflow execution',
      }),
    root_execution_id: z
      .string()
      .openapi({
        title: 'Root Execution Id',
        description: 'The root execution ID of the workflow execution',
      }),
    status: z
      .union([WorkflowExecutionStatusSchema, z.null().nullable()])
      .openapi({ description: 'The status of the workflow execution' }),
    start_time: z.iso
      .datetime({ offset: true })
      .openapi({ title: 'Start Time', description: 'The start time of the workflow execution' }),
    end_time: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({
        title: 'End Time',
        description: 'The end time of the workflow execution, if available',
      }),
    total_duration_ms: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Total Duration Ms',
        description: 'The total duration of the trace in milliseconds',
      }),
    result: z
      .union([z.any(), z.null().nullable()])
      .openapi({
        title: 'Result',
        description: 'The result of the workflow execution, if available',
      }),
  })
  .openapi({
    title: 'WorkflowExecutionResponse',
    required: [
      'workflow_name',
      'execution_id',
      'root_execution_id',
      'status',
      'start_time',
      'end_time',
      'result',
    ],
  })
  .openapi('WorkflowExecutionResponse')

const WorkflowExecutionSyncResponseSchema = z
  .object({
    workflow_name: z
      .string()
      .openapi({ title: 'Workflow Name', description: 'Name of the workflow that was executed' }),
    execution_id: z
      .string()
      .openapi({ title: 'Execution Id', description: 'ID of the workflow execution' }),
    result: z
      .any()
      .openapi({ title: 'Result', description: 'The result of the workflow execution' }),
  })
  .openapi({
    title: 'WorkflowExecutionSyncResponse',
    required: ['workflow_name', 'execution_id', 'result'],
    description: 'Response model for synchronous workflow execution',
  })
  .openapi('WorkflowExecutionSyncResponse')

const WorkflowExecutionTraceEventsResponseSchema = z
  .object({
    workflow_name: z
      .string()
      .openapi({ title: 'Workflow Name', description: 'The name of the workflow' }),
    execution_id: z
      .string()
      .openapi({ title: 'Execution Id', description: 'The ID of the workflow execution' }),
    parent_execution_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Parent Execution Id',
        description: 'The parent execution ID of the workflow execution',
      }),
    root_execution_id: z
      .string()
      .openapi({
        title: 'Root Execution Id',
        description: 'The root execution ID of the workflow execution',
      }),
    status: z
      .union([WorkflowExecutionStatusSchema, z.null().nullable()])
      .openapi({ description: 'The status of the workflow execution' }),
    start_time: z.iso
      .datetime({ offset: true })
      .openapi({ title: 'Start Time', description: 'The start time of the workflow execution' }),
    end_time: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({
        title: 'End Time',
        description: 'The end time of the workflow execution, if available',
      }),
    total_duration_ms: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Total Duration Ms',
        description: 'The total duration of the trace in milliseconds',
      }),
    result: z
      .union([z.any(), z.null().nullable()])
      .openapi({
        title: 'Result',
        description: 'The result of the workflow execution, if available',
      }),
    events: z
      .array(
        z.union([WorkflowExecutionTraceEventSchema, WorkflowExecutionProgressTraceEventSchema]),
      )
      .exactOptional()
      .openapi({ title: 'Events', description: 'The events of the workflow execution' }),
  })
  .openapi({
    title: 'WorkflowExecutionTraceEventsResponse',
    required: [
      'workflow_name',
      'execution_id',
      'root_execution_id',
      'status',
      'start_time',
      'end_time',
      'result',
    ],
  })
  .openapi('WorkflowExecutionTraceEventsResponse')

const WorkflowExecutionTraceOTelResponseSchema = z
  .object({
    workflow_name: z
      .string()
      .openapi({ title: 'Workflow Name', description: 'The name of the workflow' }),
    execution_id: z
      .string()
      .openapi({ title: 'Execution Id', description: 'The ID of the workflow execution' }),
    parent_execution_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Parent Execution Id',
        description: 'The parent execution ID of the workflow execution',
      }),
    root_execution_id: z
      .string()
      .openapi({
        title: 'Root Execution Id',
        description: 'The root execution ID of the workflow execution',
      }),
    status: z
      .union([WorkflowExecutionStatusSchema, z.null().nullable()])
      .openapi({ description: 'The status of the workflow execution' }),
    start_time: z.iso
      .datetime({ offset: true })
      .openapi({ title: 'Start Time', description: 'The start time of the workflow execution' }),
    end_time: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({
        title: 'End Time',
        description: 'The end time of the workflow execution, if available',
      }),
    total_duration_ms: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Total Duration Ms',
        description: 'The total duration of the trace in milliseconds',
      }),
    result: z
      .union([z.any(), z.null().nullable()])
      .openapi({
        title: 'Result',
        description: 'The result of the workflow execution, if available',
      }),
    data_source: z
      .string()
      .openapi({ title: 'Data Source', description: 'The data source of the trace' }),
    otel_trace_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Otel Trace Id', description: 'The ID of the trace' }),
    otel_trace_data: z
      .union([TempoGetTraceResponseSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ description: 'The raw OpenTelemetry trace data' }),
  })
  .openapi({
    title: 'WorkflowExecutionTraceOTelResponse',
    required: [
      'workflow_name',
      'execution_id',
      'root_execution_id',
      'status',
      'start_time',
      'end_time',
      'result',
      'data_source',
    ],
  })
  .openapi('WorkflowExecutionTraceOTelResponse')

const WorkflowExecutionTraceSummarySpanSchema: z.ZodType<WorkflowExecutionTraceSummarySpanType> = z
  .lazy(() =>
    z
      .object({
        span_id: z.string().openapi({ title: 'Span Id', description: 'The ID of the span' }),
        name: z.string().openapi({ title: 'Name', description: 'The name of the span' }),
        start_time_unix_nano: z
          .int()
          .openapi({
            title: 'Start Time Unix Nano',
            description: 'The start time of the span in nanoseconds since the Unix epoch',
          }),
        end_time_unix_nano: z
          .union([z.int(), z.null().nullable()])
          .openapi({
            title: 'End Time Unix Nano',
            description: 'The end time of the span in nanoseconds since the Unix epoch',
          }),
        attributes: z
          .record(z.string(), WorkflowExecutionTraceSummaryAttributesValuesSchema)
          .openapi({ title: 'Attributes', description: 'The attributes of the span' }),
        events: z
          .array(WorkflowExecutionTraceEventSchema)
          .openapi({ title: 'Events', description: 'The events of the span' }),
        children: z
          .array(WorkflowExecutionTraceSummarySpanSchema)
          .exactOptional()
          .openapi({ title: 'Children', description: 'The child spans of the span' }),
      })
      .openapi({
        title: 'WorkflowExecutionTraceSummarySpan',
        required: [
          'span_id',
          'name',
          'start_time_unix_nano',
          'end_time_unix_nano',
          'attributes',
          'events',
        ],
      }),
  )
  .openapi('WorkflowExecutionTraceSummarySpan')

const WorkflowExecutionTraceSummaryResponseSchema = z
  .object({
    workflow_name: z
      .string()
      .openapi({ title: 'Workflow Name', description: 'The name of the workflow' }),
    execution_id: z
      .string()
      .openapi({ title: 'Execution Id', description: 'The ID of the workflow execution' }),
    parent_execution_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Parent Execution Id',
        description: 'The parent execution ID of the workflow execution',
      }),
    root_execution_id: z
      .string()
      .openapi({
        title: 'Root Execution Id',
        description: 'The root execution ID of the workflow execution',
      }),
    status: z
      .union([WorkflowExecutionStatusSchema, z.null().nullable()])
      .openapi({ description: 'The status of the workflow execution' }),
    start_time: z.iso
      .datetime({ offset: true })
      .openapi({ title: 'Start Time', description: 'The start time of the workflow execution' }),
    end_time: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({
        title: 'End Time',
        description: 'The end time of the workflow execution, if available',
      }),
    total_duration_ms: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Total Duration Ms',
        description: 'The total duration of the trace in milliseconds',
      }),
    result: z
      .union([z.any(), z.null().nullable()])
      .openapi({
        title: 'Result',
        description: 'The result of the workflow execution, if available',
      }),
    span_tree: z
      .union([WorkflowExecutionTraceSummarySpanSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ description: 'The root span of the trace' }),
  })
  .openapi({
    title: 'WorkflowExecutionTraceSummaryResponse',
    required: [
      'workflow_name',
      'execution_id',
      'root_execution_id',
      'status',
      'start_time',
      'end_time',
      'result',
    ],
  })
  .openapi('WorkflowExecutionTraceSummaryResponse')

const WorkflowWithWorkerStatusSchema = z
  .object({
    id: z.uuid().openapi({ title: 'Id', description: 'Unique identifier of the workflow' }),
    name: z.string().openapi({ title: 'Name', description: 'Name of the workflow' }),
    display_name: z
      .string()
      .openapi({ title: 'Display Name', description: 'Display name of the workflow' }),
    type: WorkflowTypeSchema.openapi({ description: 'Type of the workflow' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description', description: 'Description of the workflow' }),
    customer_id: z
      .uuid()
      .openapi({ title: 'Customer Id', description: 'Customer ID of the workflow' }),
    workspace_id: z
      .uuid()
      .openapi({ title: 'Workspace Id', description: 'Workspace ID of the workflow' }),
    shared_namespace: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Shared Namespace',
        description: "Reserved namespace for shared workflows (e.g., 'shared:my-shared-workflow')",
      }),
    available_in_chat_assistant: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Available In Chat Assistant',
        description: 'Whether the workflow is available in chat assistant',
      }),
    is_technical: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Is Technical',
        description: 'Whether the workflow is technical (e.g. SDK-managed)',
      }),
    archived: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Archived', description: 'Whether the workflow is archived' }),
    active: z.boolean().openapi({ title: 'Active', description: 'Whether the workflow is active' }),
  })
  .openapi({
    title: 'WorkflowWithWorkerStatus',
    required: ['id', 'name', 'display_name', 'type', 'customer_id', 'workspace_id', 'active'],
  })
  .openapi('WorkflowWithWorkerStatus')

const WorkflowGetResponseSchema = z
  .object({
    workflow: WorkflowWithWorkerStatusSchema.openapi({ description: 'The workflow spec' }),
  })
  .openapi({ title: 'WorkflowGetResponse', required: ['workflow'] })
  .openapi('WorkflowGetResponse')

const WorkflowListResponseSchema = z
  .object({
    workflows: z
      .array(WorkflowBasicDefinitionSchema)
      .exactOptional()
      .openapi({ title: 'Workflows', description: 'A list of workflows' }),
    next_cursor: z.union([z.uuid(), z.null().nullable()]).openapi({ title: 'Next Cursor' }),
  })
  .openapi({ title: 'WorkflowListResponse', required: ['beta.workflows', 'next_cursor'] })
  .openapi('WorkflowListResponse')

const WorkflowMetricsSchema = z
  .object({
    execution_count: ScalarMetricSchema,
    success_count: ScalarMetricSchema,
    error_count: ScalarMetricSchema,
    average_latency_ms: ScalarMetricSchema,
    latency_over_time: TimeSeriesMetricSchema,
    retry_rate: ScalarMetricSchema,
  })
  .openapi({
    title: 'WorkflowMetrics',
    required: [
      'execution_count',
      'success_count',
      'error_count',
      'average_latency_ms',
      'latency_over_time',
      'retry_rate',
    ],
    description:
      'Complete metrics for a specific workflow.\n\nThis type combines all metric categories.',
  })
  .openapi('WorkflowMetrics')

const WorkflowRegistrationSchema = z
  .object({
    id: z
      .uuid()
      .openapi({ title: 'Id', description: 'Unique identifier of the workflow registration' }),
    task_queue: z
      .string()
      .openapi({ title: 'Task Queue', description: 'Project name of the workflow' }),
    definition: WorkflowCodeDefinitionSchema,
    workflow_id: z
      .uuid()
      .openapi({ title: 'Workflow Id', description: 'Workflow ID of the workflow' }),
    workflow: z
      .union([WorkflowSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ description: 'Workflow of the workflow registration' }),
    compatible_with_chat_assistant: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Compatible With Chat Assistant',
        description: 'Whether the workflow is compatible with chat assistant',
      }),
  })
  .openapi({
    title: 'WorkflowRegistration',
    required: ['id', 'task_queue', 'definition', 'workflow_id'],
  })
  .openapi('WorkflowRegistration')

const WorkflowRegistrationWithWorkerStatusSchema = z
  .object({
    id: z
      .uuid()
      .openapi({ title: 'Id', description: 'Unique identifier of the workflow registration' }),
    task_queue: z
      .string()
      .openapi({ title: 'Task Queue', description: 'Project name of the workflow' }),
    definition: WorkflowCodeDefinitionSchema,
    workflow_id: z
      .uuid()
      .openapi({ title: 'Workflow Id', description: 'Workflow ID of the workflow' }),
    workflow: z
      .union([WorkflowSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ description: 'Workflow of the workflow registration' }),
    compatible_with_chat_assistant: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Compatible With Chat Assistant',
        description: 'Whether the workflow is compatible with chat assistant',
      }),
    active: z
      .boolean()
      .openapi({ title: 'Active', description: 'Whether the workflow registration is active' }),
  })
  .openapi({
    title: 'WorkflowRegistrationWithWorkerStatus',
    required: ['id', 'task_queue', 'definition', 'workflow_id', 'active'],
  })
  .openapi('WorkflowRegistrationWithWorkerStatus')

const WorkflowRegistrationGetResponseSchema = z
  .object({
    workflow_registration: WorkflowRegistrationWithWorkerStatusSchema.openapi({
      description: 'The workflow registration',
    }),
    workflow_version: WorkflowRegistrationWithWorkerStatusSchema.openapi({
      description: 'Deprecated: use workflow_registration',
      readOnly: true,
    }),
  })
  .openapi({
    title: 'WorkflowRegistrationGetResponse',
    required: ['workflow_registration', 'workflow_version'],
  })
  .openapi('WorkflowRegistrationGetResponse')

const WorkflowRegistrationListResponseSchema = z
  .object({
    workflow_registrations: z
      .array(WorkflowRegistrationSchema)
      .openapi({
        title: 'Workflow Registrations',
        description: 'A list of workflow registrations',
      }),
    next_cursor: z.union([z.uuid(), z.null().nullable()]).openapi({ title: 'Next Cursor' }),
    workflow_versions: z
      .array(WorkflowRegistrationSchema)
      .openapi({
        title: 'Workflow Versions',
        description: 'Deprecated: use workflow_registrations',
        readOnly: true,
      }),
  })
  .openapi({
    title: 'WorkflowRegistrationListResponse',
    required: ['workflow_registrations', 'next_cursor', 'workflow_versions'],
  })
  .openapi('WorkflowRegistrationListResponse')

const WorkflowScheduleListResponseSchema = z
  .object({
    schedules: z
      .array(ScheduleDefinitionOutputSchema)
      .openapi({ title: 'Schedules', description: 'A list of workflow schedules' }),
  })
  .openapi({ title: 'WorkflowScheduleListResponse', required: ['schedules'] })
  .openapi('WorkflowScheduleListResponse')

const WorkflowScheduleRequestSchema = z
  .object({
    schedule: ScheduleDefinitionSchema.openapi({ description: 'The schedule definition' }),
    workflow_registration_id: z
      .union([z.uuid(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Workflow Registration Id',
        description: 'The ID of the workflow registration to schedule',
      }),
    workflow_version_id: z
      .union([z.uuid(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Workflow Version Id',
        description: 'Deprecated: use workflow_registration_id',
      }),
    workflow_identifier: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Workflow Identifier',
        description: 'The name or ID of the workflow to schedule',
      }),
    workflow_task_queue: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Workflow Task Queue',
        description: 'Deprecated. Use deployment_name instead.',
        deprecated: true,
      }),
    schedule_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Schedule Id',
        description:
          'Allows you to specify a custom schedule ID. If not provided, a random ID will be generated.',
      }),
    deployment_name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Deployment Name',
        description: 'Name of the deployment to route this schedule to',
      }),
  })
  .openapi({ title: 'WorkflowScheduleRequest', required: ['schedule'] })
  .openapi('WorkflowScheduleRequest')

const WorkflowScheduleResponseSchema = z
  .object({
    schedule_id: z
      .string()
      .openapi({ title: 'Schedule Id', description: 'The ID of the schedule' }),
  })
  .openapi({ title: 'WorkflowScheduleResponse', required: ['schedule_id'] })
  .openapi('WorkflowScheduleResponse')

const WorkflowUnarchiveResponseSchema = z
  .object({ workflow: WorkflowSchema.openapi({ description: 'The workflow spec' }) })
  .openapi({ title: 'WorkflowUnarchiveResponse', required: ['workflow'] })
  .openapi('WorkflowUnarchiveResponse')

const WorkflowUpdateRequestSchema = z
  .object({
    display_name: z
      .union([z.string().max(128), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Display Name', description: 'New display name value' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description', description: 'New description value' }),
    available_in_chat_assistant: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Available In Chat Assistant',
        description: 'Whether to make the workflow available in the chat assistant',
      }),
  })
  .openapi({ title: 'WorkflowUpdateRequest', required: [] })
  .openapi('WorkflowUpdateRequest')

const WorkflowUpdateResponseSchema = z
  .object({ workflow: WorkflowSchema.openapi({ description: 'Updated workflow' }) })
  .openapi({ title: 'WorkflowUpdateResponse', required: ['workflow'] })
  .openapi('WorkflowUpdateResponse')

const AuthUrlResponseSchema = z
  .object({
    auth_url: z.string().openapi({ title: 'Auth Url' }),
    ttl: z.int().openapi({ title: 'Ttl' }),
  })
  .openapi({ title: 'AuthUrlResponse', required: ['auth_url', 'ttl'] })
  .openapi('AuthUrlResponse')

const OutboundAuthenticationTypeSchema = z
  .enum(['oauth2', 'bearer', 'none'])
  .openapi({ title: 'OutboundAuthenticationType' })
  .openapi('OutboundAuthenticationType')

const AuthenticationConfigurationSchema = z
  .object({
    name: z.string().openapi({ title: 'Name' }),
    authentication_type: OutboundAuthenticationTypeSchema,
    is_default: z.boolean().default(false).exactOptional().openapi({ title: 'Is Default' }),
  })
  .openapi({ title: 'AuthenticationConfiguration', required: ['name', 'authentication_type'] })
  .openapi('AuthenticationConfiguration')

const OAuth2TokenSchema = z
  .object({
    access_token: z.string().openapi({ title: 'Access Token' }),
    token_type: z
      .literal('Bearer')
      .default('Bearer')
      .exactOptional()
      .openapi({ title: 'Token Type' }),
    expires_in: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Expires In' }),
    scope: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Scope' }),
    refresh_token: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Refresh Token' }),
    expires_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Expires At' }),
  })
  .openapi({ title: 'OAuth2Token', required: ['access_token'] })
  .openapi('OAuth2Token')

const ConnectionCredentialsSchema = z
  .object({
    oauth: z.union([OAuth2TokenSchema, z.null().nullable()]).exactOptional(),
    headers: z
      .union([z.record(z.string(), z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Headers' }),
    bearer_token: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Bearer Token' }),
  })
  .openapi({ title: 'ConnectionCredentials', required: [] })
  .openapi('ConnectionCredentials')

const ConnectorAuthenticationHeaderSchema = z
  .object({
    name: z.string().openapi({ title: 'Name' }),
    is_required: z.boolean().default(true).exactOptional().openapi({ title: 'Is Required' }),
    is_secret: z.boolean().default(true).exactOptional().openapi({ title: 'Is Secret' }),
  })
  .openapi({ title: 'ConnectorAuthenticationHeader', required: ['name'] })
  .openapi('ConnectorAuthenticationHeader')

const CredentialsCreateOrUpdateSchema = z
  .object({
    name: z
      .string()
      .openapi({
        title: 'Name',
        description: 'Name of the credentials. Use this name to access or modify your credentials.',
      }),
    is_default: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Is Default',
        description:
          'Controls whether this credential is the default for its auth method. On creation: if no credential exists yet for this auth method, the credential is automatically set as default when is_default is true or omitted; setting is_default to false is rejected because a default must exist. If other credentials already exist, setting is_default to true promotes this credential (demoting the previous default); false or omitted creates it as non-default. On update: true promotes this credential, false is rejected if it is currently the default (promote another credential first), omitted leaves the default status unchanged.',
      }),
    credentials: z
      .union([ConnectionCredentialsSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ description: 'The credential data (headers, bearer_token).' }),
  })
  .openapi({
    title: 'CredentialsCreateOrUpdate',
    required: ['name'],
    description: 'Request to create or update non-OAuth2 credentials for a connector.',
  })
  .openapi('CredentialsCreateOrUpdate')

const CredentialsResponseSchema = z
  .object({
    credentials: z.array(AuthenticationConfigurationSchema).openapi({ title: 'Credentials' }),
    connector_preset_credentials_for_auth: z
      .array(OutboundAuthenticationTypeSchema)
      .default([])
      .exactOptional()
      .openapi({ title: 'Connector Preset Credentials For Auth' }),
  })
  .openapi({ title: 'CredentialsResponse', required: ['credentials'] })
  .openapi('CredentialsResponse')

const MCPSupportedLanguageSchema = z
  .enum(['en', 'fr', 'de', 'es', 'pl', 'it', 'ar', 'pt-BR', 'nl'])
  .openapi({ title: 'MCPSupportedLanguage' })
  .openapi('MCPSupportedLanguage')

const ToolAnnotationsSchema = z
  .looseObject({
    title: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Title' }),
    readOnlyHint: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Readonlyhint' }),
    destructiveHint: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Destructivehint' }),
    idempotentHint: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Idempotenthint' }),
    openWorldHint: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Openworldhint' }),
  })
  .openapi({
    title: 'ToolAnnotations',
    description:
      'Additional properties describing a Tool to clients.\n\nNOTE: all properties in ToolAnnotations are **hints**.\nThey are not guaranteed to provide a faithful description of\ntool behavior (including descriptive properties like `title`).\n\nClients should never make tool use decisions based on ToolAnnotations\nreceived from untrusted servers.',
    required: [],
  })
  .openapi('ToolAnnotations')

const MCPUIToolMetaSchema = z
  .looseObject({
    resourceUri: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Resourceuri' }),
    visibility: z
      .union([z.array(z.enum(['model', 'app'])), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Visibility' }),
  })
  .openapi({
    title: 'MCPUIToolMeta',
    description: 'UI metadata for tools that reference UI resources.',
    required: [],
  })
  .openapi('MCPUIToolMeta')

const TurbineToolLocaleSchema = z
  .object({
    name: z
      .union([z.record(z.string(), z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Name' }),
    description: z
      .union([z.record(z.string(), z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    usage_sentence: z
      .union([z.record(z.string(), z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Usage Sentence' }),
    working_description: z
      .union([z.record(z.string(), z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Working Description' }),
    done_description: z
      .union([z.record(z.string(), z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Done Description' }),
  })
  .openapi({ title: 'TurbineToolLocale', required: [] })
  .openapi('TurbineToolLocale')

const ToolTypeSchema = z
  .enum(['rag', 'image', 'code', 'event'])
  .openapi({ title: 'ToolType' })
  .openapi('ToolType')

const TurbineToolMetaSchema = z
  .object({
    locale: z.union([TurbineToolLocaleSchema, z.null().nullable()]).exactOptional(),
    tool_type: z.union([ToolTypeSchema, z.null().nullable()]).exactOptional(),
    timeout: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Timeout' }),
    private_execution: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Private Execution' }),
  })
  .openapi({ title: 'TurbineToolMeta', required: [] })
  .openapi('TurbineToolMeta')

const MCPToolMetaSchema = z
  .looseObject({
    ui: z.union([MCPUIToolMetaSchema, z.null().nullable()]).exactOptional(),
    'ai.mistral/turbine': z.union([TurbineToolMetaSchema, z.null().nullable()]).exactOptional(),
  })
  .openapi({
    title: 'MCPToolMeta',
    description:
      'Typed _meta for MCP tools.\n\nOnly the \'ui\' field is typed. Other fields are allowed via extra="allow".',
    required: [],
  })
  .openapi('MCPToolMeta')

const ToolExecutionSchema = z
  .looseObject({
    taskSupport: z
      .union([z.enum(['forbidden', 'optional', 'required']), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Tasksupport' }),
  })
  .openapi({
    title: 'ToolExecution',
    description: 'Execution-related properties for a tool.',
    required: [],
  })
  .openapi('ToolExecution')

const MCPToolSchema = z
  .looseObject({
    name: z.string().openapi({ title: 'Name' }),
    title: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Title' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    inputSchema: z.looseObject({}).openapi({ title: 'Inputschema' }),
    outputSchema: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Outputschema' }),
    icons: z
      .union([z.array(MCPServerIconSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Icons' }),
    annotations: z.union([ToolAnnotationsSchema, z.null().nullable()]).exactOptional(),
    _meta: z.union([MCPToolMetaSchema, z.null().nullable()]).exactOptional(),
    execution: z.union([ToolExecutionSchema, z.null().nullable()]).exactOptional(),
  })
  .openapi({ title: 'MCPTool', required: ['name', 'inputSchema'] })
  .openapi('MCPTool')

const PublicAuthenticationMethodSchema = z
  .object({
    method_type: OutboundAuthenticationTypeSchema,
    headers: z
      .union([z.array(ConnectorAuthenticationHeaderSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Headers' }),
  })
  .openapi({
    title: 'PublicAuthenticationMethod',
    required: ['method_type'],
    description: 'Public view of an authentication method, without secrets.',
  })
  .openapi('PublicAuthenticationMethod')

const ApiKeySecurityScheme = { type: 'http', scheme: 'bearer' }

export const getV1ModelsRoute = createRoute({
  method: 'get',
  path: '/v1/models',
  tags: ['models'],
  summary: 'List Models',
  description: 'List all models available to the user.',
  operationId: 'list_models_v1_models_get',
  request: {
    query: z.object({
      provider: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'provider',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Provider' },
          },
          title: 'Provider',
        }),
      model: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'model',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Model' },
          },
          title: 'Model',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: ModelListSchema,
          examples: {
            userExample: {
              value: [
                {
                  id: '<model_id>',
                  capabilities: {
                    completion_chat: true,
                    completion_fim: false,
                    function_calling: false,
                    fine_tuning: false,
                    vision: false,
                    classification: false,
                  },
                  job: '<job_id>',
                  root: 'open-mistral-7b',
                  object: 'model',
                  created: 1756746619,
                  owned_by: '<owner_id>',
                  name: null,
                  description: null,
                  max_context_length: 32768,
                  aliases: [],
                  deprecation: null,
                  deprecation_replacement_model: null,
                  default_model_temperature: null,
                  TYPE: 'fine-tuned',
                  archived: false,
                },
              ],
            },
          },
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1ModelsModelIdRoute = createRoute({
  method: 'get',
  path: '/v1/models/{model_id}',
  tags: ['models'],
  summary: 'Retrieve Model',
  description: 'Retrieve information about a model.',
  operationId: 'retrieve_model_v1_models__model_id__get',
  request: {
    params: z.object({
      model_id: z
        .string()
        .openapi({
          param: {
            name: 'model_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Model Id' },
            example: 'ft:open-mistral-7b:587a6b29:20240514:7e773925',
            description: 'The ID of the model to retrieve.',
          },
          title: 'Model Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .xor([BaseModelCardSchema, FTModelCardSchema])
            .openapi({
              discriminator: {
                propertyName: 'type',
                mapping: {
                  base: '#/components/schemas/BaseModelCard',
                  'fine-tuned': '#/components/schemas/FTModelCard',
                },
              },
              title: 'Response Retrieve Model V1 Models  Model Id  Get',
            }),
          examples: {
            userExample: {
              value: {
                id: '<your_model_id>',
                capabilities: {
                  completion_chat: true,
                  completion_fim: false,
                  function_calling: false,
                  fine_tuning: false,
                  vision: false,
                  classification: false,
                },
                job: '<job_id>',
                root: 'open-mistral-7b',
                object: 'model',
                created: 1756746619,
                owned_by: '<owner_id>',
                name: null,
                description: null,
                max_context_length: 32768,
                aliases: [],
                deprecation: null,
                deprecation_replacement_model: null,
                default_model_temperature: null,
                TYPE: 'fine-tuned',
                archived: false,
              },
            },
          },
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const deleteV1ModelsModelIdRoute = createRoute({
  method: 'delete',
  path: '/v1/models/{model_id}',
  tags: ['models'],
  summary: 'Delete Model',
  description: 'Delete a fine-tuned model.',
  operationId: 'delete_model_v1_models__model_id__delete',
  request: {
    params: z.object({
      model_id: z
        .string()
        .openapi({
          param: {
            name: 'model_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Model Id' },
            example: 'ft:open-mistral-7b:587a6b29:20240514:7e773925',
            description: 'The ID of the model to delete.',
          },
          title: 'Model Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: DeleteModelOutSchema,
          examples: {
            userExample: {
              value: {
                id: 'ft:open-mistral-7b:587a6b29:20240514:7e773925',
                object: 'model',
                deleted: true,
              },
            },
          },
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1ConversationsRoute = createRoute({
  method: 'get',
  path: '/v1/conversations',
  tags: ['beta.conversations'],
  summary: 'List all created conversations.',
  description: 'Retrieve a list of conversation entities sorted by creation time.',
  operationId: 'agents_api_v1_conversations_list',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            required: false,
            schema: { type: 'integer', title: 'Page', default: 0 },
          },
          title: 'Page',
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'page_size',
            in: 'query',
            required: false,
            schema: { type: 'integer', title: 'Page Size', default: 100 },
          },
          title: 'Page Size',
        }),
      metadata: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          z.union([z.looseObject({}), z.null().nullable()]),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'metadata',
            in: 'query',
            required: false,
            content: {
              'application/json': {
                schema: {
                  anyOf: [{ type: 'object', additionalProperties: true }, { type: 'null' }],
                  title: 'Metadata',
                },
              },
            },
          },
          title: 'Metadata',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(z.union([ModelConversationSchema, AgentConversationSchema]))
            .openapi({ title: 'Response V1 Conversations List' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1ConversationsRoute = createRoute({
  method: 'post',
  path: '/v1/conversations',
  tags: ['beta.conversations'],
  summary: 'Create a conversation and append entries to it.',
  description:
    'Create a new conversation, using a base model or an agent and append entries. Completion and tool executions are run and the response is appended to the conversation.Use the returned conversation_id to continue the conversation.',
  operationId: 'agents_api_v1_conversations_start',
  request: {
    body: {
      content: { 'application/json': { schema: ConversationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ConversationResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1ConversationsConversationIdRoute = createRoute({
  method: 'get',
  path: '/v1/conversations/{conversation_id}',
  tags: ['beta.conversations'],
  summary: 'Retrieve a conversation information.',
  description: 'Given a conversation_id retrieve a conversation entity with its attributes.',
  operationId: 'agents_api_v1_conversations_get',
  request: {
    params: z.object({
      conversation_id: z
        .string()
        .openapi({
          param: {
            name: 'conversation_id',
            in: 'path',
            description: 'ID of the conversation from which we are fetching metadata.',
            required: true,
            schema: {
              type: 'string',
              title: 'Conversation Id',
              description: 'ID of the conversation from which we are fetching metadata.',
            },
          },
          title: 'Conversation Id',
          description: 'ID of the conversation from which we are fetching metadata.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .union([ModelConversationSchema, AgentConversationSchema])
            .openapi({ title: 'Response V1 Conversations Get' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1ConversationsConversationIdRoute = createRoute({
  method: 'post',
  path: '/v1/conversations/{conversation_id}',
  tags: ['beta.conversations'],
  summary: 'Append new entries to an existing conversation.',
  description:
    'Run completion on the history of the conversation and the user entries. Return the new created entries.',
  operationId: 'agents_api_v1_conversations_append',
  request: {
    params: z.object({
      conversation_id: z
        .string()
        .openapi({
          param: {
            name: 'conversation_id',
            in: 'path',
            description: 'ID of the conversation to which we append entries.',
            required: true,
            schema: {
              type: 'string',
              title: 'Conversation Id',
              description: 'ID of the conversation to which we append entries.',
            },
          },
          title: 'Conversation Id',
          description: 'ID of the conversation to which we append entries.',
        }),
    }),
    body: {
      content: { 'application/json': { schema: ConversationAppendRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ConversationResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const deleteV1ConversationsConversationIdRoute = createRoute({
  method: 'delete',
  path: '/v1/conversations/{conversation_id}',
  tags: ['beta.conversations'],
  summary: 'Delete a conversation.',
  description: 'Delete a conversation given a conversation_id.',
  operationId: 'agents_api_v1_conversations_delete',
  request: {
    params: z.object({
      conversation_id: z
        .string()
        .openapi({
          param: {
            name: 'conversation_id',
            in: 'path',
            description: 'ID of the conversation from which we are fetching metadata.',
            required: true,
            schema: {
              type: 'string',
              title: 'Conversation Id',
              description: 'ID of the conversation from which we are fetching metadata.',
            },
          },
          title: 'Conversation Id',
          description: 'ID of the conversation from which we are fetching metadata.',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1ConversationsConversationIdHistoryRoute = createRoute({
  method: 'get',
  path: '/v1/conversations/{conversation_id}/history',
  tags: ['beta.conversations'],
  summary: 'Retrieve all entries in a conversation.',
  description:
    'Given a conversation_id retrieve all the entries belonging to that conversation. The entries are sorted in the order they were appended, those can be messages, connectors or function_call.',
  operationId: 'agents_api_v1_conversations_history',
  request: {
    params: z.object({
      conversation_id: z
        .string()
        .openapi({
          param: {
            name: 'conversation_id',
            in: 'path',
            description: 'ID of the conversation from which we are fetching entries.',
            required: true,
            schema: {
              type: 'string',
              title: 'Conversation Id',
              description: 'ID of the conversation from which we are fetching entries.',
            },
          },
          title: 'Conversation Id',
          description: 'ID of the conversation from which we are fetching entries.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ConversationHistorySchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1ConversationsConversationIdMessagesRoute = createRoute({
  method: 'get',
  path: '/v1/conversations/{conversation_id}/messages',
  tags: ['beta.conversations'],
  summary: 'Retrieve all messages in a conversation.',
  description:
    'Given a conversation_id retrieve all the messages belonging to that conversation. This is similar to retrieving all entries except we filter the messages only.',
  operationId: 'agents_api_v1_conversations_messages',
  request: {
    params: z.object({
      conversation_id: z
        .string()
        .openapi({
          param: {
            name: 'conversation_id',
            in: 'path',
            description: 'ID of the conversation from which we are fetching messages.',
            required: true,
            schema: {
              type: 'string',
              title: 'Conversation Id',
              description: 'ID of the conversation from which we are fetching messages.',
            },
          },
          title: 'Conversation Id',
          description: 'ID of the conversation from which we are fetching messages.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ConversationMessagesSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1ConversationsConversationIdRestartRoute = createRoute({
  method: 'post',
  path: '/v1/conversations/{conversation_id}/restart',
  tags: ['beta.conversations'],
  summary: 'Restart a conversation starting from a given entry.',
  description:
    'Given a conversation_id and an id, recreate a conversation from this point and run completion. A new conversation is returned with the new entries returned.',
  operationId: 'agents_api_v1_conversations_restart',
  request: {
    params: z.object({
      conversation_id: z
        .string()
        .openapi({
          param: {
            name: 'conversation_id',
            in: 'path',
            description: 'ID of the original conversation which is being restarted.',
            required: true,
            schema: {
              type: 'string',
              title: 'Conversation Id',
              description: 'ID of the original conversation which is being restarted.',
            },
          },
          title: 'Conversation Id',
          description: 'ID of the original conversation which is being restarted.',
        }),
    }),
    body: {
      content: { 'application/json': { schema: ConversationRestartRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ConversationResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1AgentsRoute = createRoute({
  method: 'get',
  path: '/v1/agents',
  tags: ['beta.agents'],
  summary: 'List agent entities.',
  description:
    'Retrieve a list of agent entities sorted by creation time. Deprecated: some features such as agent sharing are not supported by this endpoint. Use the cursor-paginated `GET /v1/agents/pages` instead.',
  operationId: 'agents_api_v1_agents_list',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            description: 'Page number (0-indexed)',
            required: false,
            schema: {
              type: 'integer',
              title: 'Page',
              minimum: 0,
              description: 'Page number (0-indexed)',
              default: 0,
            },
          },
          title: 'Page',
          description: 'Page number (0-indexed)',
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            name: 'page_size',
            in: 'query',
            description: 'Number of agents per page',
            required: false,
            schema: {
              type: 'integer',
              title: 'Page Size',
              maximum: 1000,
              minimum: 1,
              description: 'Number of agents per page',
              default: 20,
            },
          },
          title: 'Page Size',
          description: 'Number of agents per page',
        }),
      deployment_chat: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            ((read) => (val: unknown) => {
              const result = read.safeParse(val)
              return result.success ? result.data : val
            })(z.stringbool()),
            z.union([z.boolean(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'deployment_chat',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'boolean' }, { type: 'null' }], title: 'Deployment Chat' },
          },
          title: 'Deployment Chat',
        }),
      sources: z
        .union([
          z.array(RequestSourceSchema),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'sources',
            in: 'query',
            required: false,
            schema: {
              anyOf: [
                { type: 'array', items: { $ref: '#/components/schemas/RequestSource' } },
                { type: 'null' },
              ],
              title: 'Sources',
            },
          },
          title: 'Sources',
        }),
      name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Filter by agent name',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              title: 'Name',
              description: 'Filter by agent name',
            },
          },
          title: 'Name',
          description: 'Filter by agent name',
        }),
      search: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            description: 'Search agents by name or ID',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              title: 'Search',
              description: 'Search agents by name or ID',
            },
          },
          title: 'Search',
          description: 'Search agents by name or ID',
        }),
      id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Id' },
          },
          title: 'Id',
        }),
      metadata: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          z.union([z.looseObject({}), z.null().nullable()]),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'metadata',
            in: 'query',
            required: false,
            content: {
              'application/json': {
                schema: {
                  anyOf: [{ type: 'object', additionalProperties: true }, { type: 'null' }],
                  title: 'Metadata',
                },
              },
            },
          },
          title: 'Metadata',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z.array(AgentSchema).openapi({ title: 'Response V1 Agents List' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  deprecated: true,
})

export const postV1AgentsRoute = createRoute({
  method: 'post',
  path: '/v1/agents',
  tags: ['beta.agents'],
  summary: 'Create a agent that can be used within a conversation.',
  description:
    'Create a new agent giving it instructions, tools, description. The agent is then available to be used as a regular assistant in a conversation or as part of an agent pool from which it can be used.',
  operationId: 'agents_api_v1_agents_create',
  request: {
    body: {
      content: { 'application/json': { schema: AgentCreationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AgentSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1AgentsAgentIdRoute = createRoute({
  method: 'get',
  path: '/v1/agents/{agent_id}',
  tags: ['beta.agents'],
  summary: 'Retrieve an agent entity.',
  description:
    'Given an agent, retrieve an agent entity with its attributes. The agent_version parameter can be an integer version number or a string alias.',
  operationId: 'agents_api_v1_agents_get',
  request: {
    params: z.object({
      agent_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Agent Id' },
          },
          title: 'Agent Id',
        }),
    }),
    query: z.object({
      agent_version: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
          z.preprocess((val) => (val === 'null' ? null : val), schema),
        ]))(z.union([z.int(), z.string(), z.null().nullable()]))
        .exactOptional()
        .openapi({
          param: {
            name: 'agent_version',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'integer' }, { type: 'string' }, { type: 'null' }],
              title: 'Agent Version',
            },
          },
          title: 'Agent Version',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AgentSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const deleteV1AgentsAgentIdRoute = createRoute({
  method: 'delete',
  path: '/v1/agents/{agent_id}',
  tags: ['beta.agents'],
  summary: 'Delete an agent entity.',
  operationId: 'agents_api_v1_agents_delete',
  request: {
    params: z.object({
      agent_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Agent Id' },
          },
          title: 'Agent Id',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const patchV1AgentsAgentIdRoute = createRoute({
  method: 'patch',
  path: '/v1/agents/{agent_id}',
  tags: ['beta.agents'],
  summary: 'Update an agent entity.',
  description: 'Update an agent attributes and create a new version.',
  operationId: 'agents_api_v1_agents_update',
  request: {
    params: z.object({
      agent_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Agent Id' },
          },
          title: 'Agent Id',
        }),
    }),
    body: { content: { 'application/json': { schema: AgentUpdateRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AgentSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1AgentsPagesRoute = createRoute({
  method: 'get',
  path: '/v1/agents/pages',
  tags: ['beta.agents'],
  summary: 'List agent entities, cursor-paginated.',
  description:
    'Retrieve a page of agent entities. Unlike the deprecated `GET /v1/agents`, this endpoint paginates by opaque cursor and honors per-agent sharing, returning only agents the caller is authorized to see.',
  operationId: 'agents_api_v1_agents_list_pages',
  request: {
    query: z.object({
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            name: 'page_size',
            in: 'query',
            description: 'Number of agents per page',
            required: false,
            schema: {
              type: 'integer',
              title: 'Page Size',
              maximum: 1000,
              minimum: 1,
              description: 'Number of agents per page',
              default: 20,
            },
          },
          title: 'Page Size',
          description: 'Number of agents per page',
        }),
      deployment_chat: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            ((read) => (val: unknown) => {
              const result = read.safeParse(val)
              return result.success ? result.data : val
            })(z.stringbool()),
            z.union([z.boolean(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'deployment_chat',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'boolean' }, { type: 'null' }], title: 'Deployment Chat' },
          },
          title: 'Deployment Chat',
        }),
      sources: z
        .union([
          z.array(RequestSourceSchema),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'sources',
            in: 'query',
            required: false,
            schema: {
              anyOf: [
                { type: 'array', items: { $ref: '#/components/schemas/RequestSource' } },
                { type: 'null' },
              ],
              title: 'Sources',
            },
          },
          title: 'Sources',
        }),
      name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Filter by agent name',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              title: 'Name',
              description: 'Filter by agent name',
            },
          },
          title: 'Name',
          description: 'Filter by agent name',
        }),
      search: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            description: 'Search agents by name or ID',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              title: 'Search',
              description: 'Search agents by name or ID',
            },
          },
          title: 'Search',
          description: 'Search agents by name or ID',
        }),
      id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Id' },
          },
          title: 'Id',
        }),
      metadata: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          z.union([z.looseObject({}), z.null().nullable()]),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'metadata',
            in: 'query',
            required: false,
            content: {
              'application/json': {
                schema: {
                  anyOf: [{ type: 'object', additionalProperties: true }, { type: 'null' }],
                  title: 'Metadata',
                },
              },
            },
          },
          title: 'Metadata',
        }),
      page_token: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'page_token',
            in: 'query',
            description:
              "Opaque cursor from a previous response's next_page_token. When set, results page forward from the cursor.",
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              title: 'Page Token',
              description:
                "Opaque cursor from a previous response's next_page_token. When set, results page forward from the cursor.",
            },
          },
          title: 'Page Token',
          description:
            "Opaque cursor from a previous response's next_page_token. When set, results page forward from the cursor.",
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AgentListPageSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const patchV1AgentsAgentIdVersionRoute = createRoute({
  method: 'patch',
  path: '/v1/agents/{agent_id}/version',
  tags: ['beta.agents'],
  summary: 'Update an agent version.',
  description: 'Switch the version of an agent.',
  operationId: 'agents_api_v1_agents_update_version',
  request: {
    params: z.object({
      agent_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Agent Id' },
          },
          title: 'Agent Id',
        }),
    }),
    query: z.object({
      version: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            required: true,
            schema: { type: 'integer', title: 'Version' },
          },
          title: 'Version',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AgentSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1AgentsAgentIdVersionsRoute = createRoute({
  method: 'get',
  path: '/v1/agents/{agent_id}/versions',
  tags: ['beta.agents'],
  summary: 'List all versions of an agent.',
  description:
    'Retrieve all versions for a specific agent with full agent context. Supports pagination.',
  operationId: 'agents_api_v1_agents_list_versions',
  request: {
    params: z.object({
      agent_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Agent Id' },
          },
          title: 'Agent Id',
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            description: 'Page number (0-indexed)',
            required: false,
            schema: {
              type: 'integer',
              title: 'Page',
              minimum: 0,
              description: 'Page number (0-indexed)',
              default: 0,
            },
          },
          title: 'Page',
          description: 'Page number (0-indexed)',
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            name: 'page_size',
            in: 'query',
            description: 'Number of versions per page',
            required: false,
            schema: {
              type: 'integer',
              title: 'Page Size',
              maximum: 100,
              minimum: 1,
              description: 'Number of versions per page',
              default: 20,
            },
          },
          title: 'Page Size',
          description: 'Number of versions per page',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z.array(AgentSchema).openapi({ title: 'Response V1 Agents List Versions' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1AgentsAgentIdVersionsVersionRoute = createRoute({
  method: 'get',
  path: '/v1/agents/{agent_id}/versions/{version}',
  tags: ['beta.agents'],
  summary: 'Retrieve a specific version of an agent.',
  description: 'Get a specific agent version by version number.',
  operationId: 'agents_api_v1_agents_get_version',
  request: {
    params: z.object({
      agent_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Agent Id' },
          },
          title: 'Agent Id',
        }),
      version: z
        .string()
        .openapi({
          param: {
            name: 'version',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Version' },
          },
          title: 'Version',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AgentSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1AgentsAgentIdAliasesRoute = createRoute({
  method: 'get',
  path: '/v1/agents/{agent_id}/aliases',
  tags: ['beta.agents'],
  summary: 'List all aliases for an agent.',
  description: 'Retrieve all version aliases for a specific agent.',
  operationId: 'agents_api_v1_agents_list_version_aliases',
  request: {
    params: z.object({
      agent_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Agent Id' },
          },
          title: 'Agent Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(AgentAliasResponseSchema)
            .openapi({ title: 'Response V1 Agents List Version Aliases' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const putV1AgentsAgentIdAliasesRoute = createRoute({
  method: 'put',
  path: '/v1/agents/{agent_id}/aliases',
  tags: ['beta.agents'],
  summary: 'Create or update an agent version alias.',
  description:
    'Create a new alias or update an existing alias to point to a specific version. Aliases are unique per agent and can be reassigned to different versions.',
  operationId: 'agents_api_v1_agents_create_or_update_alias',
  request: {
    params: z.object({
      agent_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Agent Id' },
          },
          title: 'Agent Id',
        }),
    }),
    query: z.object({
      alias: z
        .string()
        .regex(/^[a-z]([a-z0-9_-]*[a-z0-9])?$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'alias',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
              title: 'Alias',
              maxLength: 64,
              minLength: 1,
              pattern: '^[a-z]([a-z0-9_-]*[a-z0-9])?$',
            },
          },
          title: 'Alias',
        }),
      version: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            required: true,
            schema: { type: 'integer', title: 'Version' },
          },
          title: 'Version',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AgentAliasResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const deleteV1AgentsAgentIdAliasesRoute = createRoute({
  method: 'delete',
  path: '/v1/agents/{agent_id}/aliases',
  tags: ['beta.agents'],
  summary: 'Delete an agent version alias.',
  description: 'Delete an existing alias for an agent.',
  operationId: 'agents_api_v1_agents_delete_alias',
  request: {
    params: z.object({
      agent_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Agent Id' },
          },
          title: 'Agent Id',
        }),
    }),
    query: z.object({
      alias: z
        .string()
        .regex(/^[a-z]([a-z0-9_-]*[a-z0-9])?$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'alias',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
              title: 'Alias',
              maxLength: 64,
              minLength: 1,
              pattern: '^[a-z]([a-z0-9_-]*[a-z0-9])?$',
            },
          },
          title: 'Alias',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1ConversationsStreamRoute = createRoute({
  method: 'post',
  path: '/v1/conversations#stream',
  tags: ['beta.conversations'],
  summary: 'Create a conversation and append entries to it.',
  description:
    'Create a new conversation, using a base model or an agent and append entries. Completion and tool executions are run and the response is appended to the conversation.Use the returned conversation_id to continue the conversation.',
  operationId: 'agents_api_v1_conversations_start_stream',
  request: {
    body: {
      content: { 'application/json': { schema: ConversationStreamRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'text/event-stream': { schema: ConversationEventsSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1ConversationsConversationIdStreamRoute = createRoute({
  method: 'post',
  path: '/v1/conversations/{conversation_id}#stream',
  tags: ['beta.conversations'],
  summary: 'Append new entries to an existing conversation.',
  description:
    'Run completion on the history of the conversation and the user entries. Return the new created entries.',
  operationId: 'agents_api_v1_conversations_append_stream',
  request: {
    params: z.object({
      conversation_id: z
        .string()
        .openapi({
          param: {
            name: 'conversation_id',
            in: 'path',
            description: 'ID of the conversation to which we append entries.',
            required: true,
            schema: {
              type: 'string',
              title: 'Conversation Id',
              description: 'ID of the conversation to which we append entries.',
            },
          },
          title: 'Conversation Id',
          description: 'ID of the conversation to which we append entries.',
        }),
    }),
    body: {
      content: { 'application/json': { schema: ConversationAppendStreamRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'text/event-stream': { schema: ConversationEventsSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1ConversationsConversationIdRestartStreamRoute = createRoute({
  method: 'post',
  path: '/v1/conversations/{conversation_id}/restart#stream',
  tags: ['beta.conversations'],
  summary: 'Restart a conversation starting from a given entry.',
  description:
    'Given a conversation_id and an id, recreate a conversation from this point and run completion. A new conversation is returned with the new entries returned.',
  operationId: 'agents_api_v1_conversations_restart_stream',
  request: {
    params: z.object({
      conversation_id: z
        .string()
        .openapi({
          param: {
            name: 'conversation_id',
            in: 'path',
            description: 'ID of the original conversation which is being restarted.',
            required: true,
            schema: {
              type: 'string',
              title: 'Conversation Id',
              description: 'ID of the original conversation which is being restarted.',
            },
          },
          title: 'Conversation Id',
          description: 'ID of the original conversation which is being restarted.',
        }),
    }),
    body: {
      content: { 'application/json': { schema: ConversationRestartStreamRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'text/event-stream': { schema: ConversationEventsSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1FilesRoute = createRoute({
  method: 'get',
  path: '/v1/files',
  tags: ['files'],
  summary: 'List Files',
  description: "Returns a list of files that belong to the user's organization.",
  operationId: 'files_api_routes_list_files',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            required: false,
            schema: { type: 'integer', title: 'Page', default: 0 },
          },
          title: 'Page',
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'page_size',
            in: 'query',
            required: false,
            schema: { type: 'integer', title: 'Page Size', default: 100 },
          },
          title: 'Page Size',
        }),
      include_total: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'include_total',
            in: 'query',
            required: false,
            schema: { type: 'boolean', title: 'Include Total', default: true },
          },
          title: 'Include Total',
        }),
      sample_type: z
        .union([
          z.array(SampleTypeSchema),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'sample_type',
            in: 'query',
            required: false,
            schema: {
              anyOf: [
                { type: 'array', items: { $ref: '#/components/schemas/SampleType' } },
                { type: 'null' },
              ],
              title: 'Sample Type',
            },
          },
          title: 'Sample Type',
        }),
      source: z
        .union([
          z.array(SourceSchema),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'source',
            in: 'query',
            required: false,
            schema: {
              anyOf: [
                { type: 'array', items: { $ref: '#/components/schemas/Source' } },
                { type: 'null' },
              ],
              title: 'Source',
            },
          },
          title: 'Source',
        }),
      search: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Search' },
          },
          title: 'Search',
        }),
      purpose: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          FilePurposeSchema,
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'purpose',
            in: 'query',
            required: false,
            schema: { anyOf: [{ $ref: '#/components/schemas/FilePurpose' }, { type: 'null' }] },
          },
        }),
      mimetypes: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'mimetypes',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              title: 'Mimetypes',
            },
          },
          title: 'Mimetypes',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ListFilesOutSchema,
          examples: {
            userExample: {
              value: {
                data: [
                  {
                    id: '<your_file_id>',
                    object: 'file',
                    bytes: null,
                    created_at: 1759491994,
                    filename: '<your_file_name>',
                    purpose: 'batch',
                    sample_type: 'batch_result',
                    source: 'mistral',
                    num_lines: 2,
                    mimetype: 'application/jsonl',
                    signature: null,
                  },
                  {
                    id: '<your_file_id>',
                    object: 'file',
                    bytes: null,
                    created_at: 1759491994,
                    filename: '<your_file_name>',
                    purpose: 'batch',
                    sample_type: 'batch_result',
                    source: 'mistral',
                    num_lines: 2,
                    mimetype: 'application/jsonl',
                    signature: null,
                  },
                ],
                object: 'list',
                total: 2,
              },
            },
          },
        },
      },
    },
  },
})

export const postV1FilesRoute = createRoute({
  method: 'post',
  path: '/v1/files',
  tags: ['files'],
  summary: 'Upload File',
  description:
    'Upload a file that can be used across various endpoints.\n\nThe size of individual files can be a maximum of 512 MB. The Fine-tuning API only supports .jsonl files.\n\nPlease contact us if you need to increase these storage limits.',
  operationId: 'files_api_routes_upload_file',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              expiry: z
                .preprocess(
                  (val) => (val === 'null' ? null : val),
                  z.preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    z.union([z.int(), z.null().nullable()]),
                  ),
                )
                .exactOptional()
                .openapi({ title: 'Expiry' }),
              visibility: z
                .enum(['workspace', 'user'])
                .openapi({ title: 'FileVisibility' })
                .default('workspace')
                .exactOptional(),
              purpose: FilePurposeSchema.exactOptional(),
              file: FileSchema,
            })
            .openapi({ title: 'MultiPartBodyParams', required: ['file'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: UploadFileOutSchema,
          examples: {
            userExample: {
              value: {
                id: 'e85980c9-409e-4a46-9304-36588f6292b0',
                object: 'file',
                bytes: null,
                created_at: 1759500189,
                filename: 'example.file.jsonl',
                purpose: 'fine-tune',
                sample_type: 'instruct',
                source: 'upload',
                num_lines: 2,
                mimetype: 'application/jsonl',
                signature: 'd4821d2de1917341',
              },
            },
          },
        },
      },
    },
  },
})

export const getV1FilesFileIdRoute = createRoute({
  method: 'get',
  path: '/v1/files/{file_id}',
  tags: ['files'],
  summary: 'Retrieve File',
  description: 'Returns information about a specific file.',
  operationId: 'files_api_routes_retrieve_file',
  request: {
    params: z.object({
      file_id: z
        .uuid()
        .openapi({
          param: {
            name: 'file_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'File Id', format: 'uuid' },
          },
          title: 'File Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: RetrieveFileOutSchema,
          examples: {
            userExample: {
              value: {
                id: 'e85980c9-409e-4a46-9304-36588f6292b0',
                object: 'file',
                bytes: null,
                created_at: 1759500189,
                filename: 'example.file.jsonl',
                purpose: 'fine-tune',
                sample_type: 'instruct',
                source: 'upload',
                deleted: false,
                num_lines: 2,
                mimetype: 'application/jsonl',
                signature: 'd4821d2de1917341',
              },
            },
          },
        },
      },
    },
  },
})

export const deleteV1FilesFileIdRoute = createRoute({
  method: 'delete',
  path: '/v1/files/{file_id}',
  tags: ['files'],
  summary: 'Delete File',
  description: 'Delete a file.',
  operationId: 'files_api_routes_delete_file',
  request: {
    params: z.object({
      file_id: z
        .uuid()
        .openapi({
          param: {
            name: 'file_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'File Id', format: 'uuid' },
          },
          title: 'File Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: DeleteFileOutSchema,
          examples: {
            userExample: {
              value: { id: 'e85980c9-409e-4a46-9304-36588f6292b0', object: 'file', deleted: true },
            },
          },
        },
      },
    },
  },
})

export const getV1FilesFileIdContentRoute = createRoute({
  method: 'get',
  path: '/v1/files/{file_id}/content',
  tags: ['files'],
  summary: 'Download File',
  description: 'Download a file',
  operationId: 'files_api_routes_download_file',
  request: {
    params: z.object({
      file_id: z
        .uuid()
        .openapi({
          param: {
            name: 'file_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'File Id', format: 'uuid' },
          },
          title: 'File Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
})

export const getV1FilesFileIdUrlRoute = createRoute({
  method: 'get',
  path: '/v1/files/{file_id}/url',
  tags: ['files'],
  summary: 'Get Signed Url',
  operationId: 'files_api_routes_get_signed_url',
  request: {
    params: z.object({
      file_id: z
        .uuid()
        .openapi({
          param: {
            name: 'file_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'File Id', format: 'uuid' },
          },
          title: 'File Id',
        }),
    }),
    query: z.object({
      expiry: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(24)
        .exactOptional()
        .openapi({
          param: {
            name: 'expiry',
            in: 'query',
            description: 'Number of hours before the url becomes invalid. Defaults to 24h',
            required: false,
            schema: {
              type: 'integer',
              title: 'Expiry',
              description: 'Number of hours before the url becomes invalid. Defaults to 24h',
              default: 24,
            },
          },
          title: 'Expiry',
          description: 'Number of hours before the url becomes invalid. Defaults to 24h',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: FileSignedURLSchema,
          examples: {
            userExample: {
              value: {
                url: 'https://mistralaifilesapiprodswe.blob.core.windows.net/fine-tune/.../.../e85980c9409e4a46930436588f6292b0.jsonl?se=2025-10-04T14%3A16%3A17Z&sp=r&sv=2025-01-05&sr=b&sig=...',
              },
            },
          },
        },
      },
    },
  },
})

export const getV1FineTuningJobsRoute = createRoute({
  method: 'get',
  path: '/v1/fine_tuning/jobs',
  tags: ['deprecated.fine-tuning'],
  summary: 'Get Fine Tuning Jobs',
  description: 'Get a list of fine-tuning jobs for your organization and user.',
  operationId: 'jobs_api_routes_fine_tuning_get_fine_tuning_jobs',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            description: 'The page number of the results to be returned.',
            required: false,
            schema: { type: 'integer', title: 'Page', default: 0 },
          },
          title: 'Page',
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'page_size',
            in: 'query',
            description: 'The number of items to return per page.',
            required: false,
            schema: { type: 'integer', title: 'Page Size', default: 100 },
          },
          title: 'Page Size',
        }),
      model: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'model',
            in: 'query',
            description:
              'The model name used for fine-tuning to filter on. When set, the other results are not displayed.',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Model' },
          },
          title: 'Model',
        }),
      created_after: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'created_after',
            in: 'query',
            description:
              'The date/time to filter on. When set, the results for previous creation times are not displayed.',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Created After',
            },
          },
          title: 'Created After',
        }),
      created_before: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'created_before',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Created Before',
            },
          },
          title: 'Created Before',
        }),
      created_by_me: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'created_by_me',
            in: 'query',
            description:
              'When set, only return results for jobs created by the API caller. Other results are not displayed.',
            required: false,
            schema: { type: 'boolean', title: 'Created By Me', default: false },
          },
          title: 'Created By Me',
        }),
      status: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.enum([
            'QUEUED',
            'STARTED',
            'VALIDATING',
            'VALIDATED',
            'RUNNING',
            'FAILED_VALIDATION',
            'FAILED',
            'SUCCESS',
            'CANCELLED',
            'CANCELLATION_REQUESTED',
          ]),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description:
              'The current job state to filter on. When set, the other results are not displayed.',
            required: false,
            schema: {
              anyOf: [
                {
                  type: 'string',
                  enum: [
                    'QUEUED',
                    'STARTED',
                    'VALIDATING',
                    'VALIDATED',
                    'RUNNING',
                    'FAILED_VALIDATION',
                    'FAILED',
                    'SUCCESS',
                    'CANCELLED',
                    'CANCELLATION_REQUESTED',
                  ],
                },
                { type: 'null' },
              ],
              title: 'Status',
            },
          },
          title: 'Status',
        }),
      wandb_project: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'wandb_project',
            in: 'query',
            description:
              'The Weights and Biases project to filter on. When set, the other results are not displayed.',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Wandb Project' },
          },
          title: 'Wandb Project',
        }),
      wandb_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'wandb_name',
            in: 'query',
            description:
              'The Weight and Biases run name to filter on. When set, the other results are not displayed.',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Wandb Name' },
          },
          title: 'Wandb Name',
        }),
      suffix: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'suffix',
            in: 'query',
            description:
              'The model suffix to filter on. When set, the other results are not displayed.',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Suffix' },
          },
          title: 'Suffix',
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: JobsOutSchema } } },
  },
})

export const postV1FineTuningJobsRoute = createRoute({
  method: 'post',
  path: '/v1/fine_tuning/jobs',
  tags: ['deprecated.fine-tuning'],
  summary: 'Create Fine Tuning Job',
  description: 'Create a new fine-tuning job, it will be queued for processing.',
  operationId: 'jobs_api_routes_fine_tuning_create_fine_tuning_job',
  request: {
    query: z.object({
      dry_run: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            ((read) => (val: unknown) => {
              const result = read.safeParse(val)
              return result.success ? result.data : val
            })(z.stringbool()),
            z.union([z.boolean(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'dry_run',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'boolean' }, { type: 'null' }], title: 'Dry Run' },
            description:
              '* If `true` the job is not spawned, instead the query returns a handful of useful metadata\n  for the user to perform sanity checks (see `LegacyJobMetadataOut` response).\n* Otherwise, the job is started and the query returns the job ID along with some of the\n  input parameters (see `JobOut` response).\n',
          },
          title: 'Dry Run',
        }),
    }),
    body: { content: { 'application/json': { schema: JobInSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .union([
              z
                .xor([CompletionJobOutSchema, ClassifierJobOutSchema])
                .openapi({
                  discriminator: {
                    propertyName: 'job_type',
                    mapping: {
                      classifier: '#/components/schemas/ClassifierJobOut',
                      completion: '#/components/schemas/CompletionJobOut',
                    },
                  },
                }),
              LegacyJobMetadataOutSchema,
            ])
            .openapi({ title: 'Response' }),
        },
      },
    },
  },
})

export const getV1FineTuningJobsJobIdRoute = createRoute({
  method: 'get',
  path: '/v1/fine_tuning/jobs/{job_id}',
  tags: ['deprecated.fine-tuning'],
  summary: 'Get Fine Tuning Job',
  description: 'Get a fine-tuned job details by its UUID.',
  operationId: 'jobs_api_routes_fine_tuning_get_fine_tuning_job',
  request: {
    params: z.object({
      job_id: z
        .uuid()
        .openapi({
          param: {
            name: 'job_id',
            in: 'path',
            description: 'The ID of the job to analyse.',
            required: true,
            schema: { type: 'string', title: 'Job Id', format: 'uuid' },
          },
          title: 'Job Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .xor([CompletionDetailedJobOutSchema, ClassifierDetailedJobOutSchema])
            .openapi({
              discriminator: {
                propertyName: 'job_type',
                mapping: {
                  classifier: '#/components/schemas/ClassifierDetailedJobOut',
                  completion: '#/components/schemas/CompletionDetailedJobOut',
                },
              },
              title: 'Response',
            }),
        },
      },
    },
  },
})

export const postV1FineTuningJobsJobIdCancelRoute = createRoute({
  method: 'post',
  path: '/v1/fine_tuning/jobs/{job_id}/cancel',
  tags: ['deprecated.fine-tuning'],
  summary: 'Cancel Fine Tuning Job',
  description: 'Request the cancellation of a fine tuning job.',
  operationId: 'jobs_api_routes_fine_tuning_cancel_fine_tuning_job',
  request: {
    params: z.object({
      job_id: z
        .uuid()
        .openapi({
          param: {
            name: 'job_id',
            in: 'path',
            description: 'The ID of the job to cancel.',
            required: true,
            schema: { type: 'string', title: 'Job Id', format: 'uuid' },
          },
          title: 'Job Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .xor([CompletionDetailedJobOutSchema, ClassifierDetailedJobOutSchema])
            .openapi({
              discriminator: {
                propertyName: 'job_type',
                mapping: {
                  classifier: '#/components/schemas/ClassifierDetailedJobOut',
                  completion: '#/components/schemas/CompletionDetailedJobOut',
                },
              },
              title: 'Response',
            }),
        },
      },
    },
  },
})

export const postV1FineTuningJobsJobIdStartRoute = createRoute({
  method: 'post',
  path: '/v1/fine_tuning/jobs/{job_id}/start',
  tags: ['deprecated.fine-tuning'],
  summary: 'Start Fine Tuning Job',
  description: 'Request the start of a validated fine tuning job.',
  operationId: 'jobs_api_routes_fine_tuning_start_fine_tuning_job',
  request: {
    params: z.object({
      job_id: z
        .uuid()
        .openapi({
          param: {
            name: 'job_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Job Id', format: 'uuid' },
          },
          title: 'Job Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .xor([CompletionDetailedJobOutSchema, ClassifierDetailedJobOutSchema])
            .openapi({
              discriminator: {
                propertyName: 'job_type',
                mapping: {
                  classifier: '#/components/schemas/ClassifierDetailedJobOut',
                  completion: '#/components/schemas/CompletionDetailedJobOut',
                },
              },
              title: 'Response',
            }),
        },
      },
    },
  },
})

export const patchV1FineTuningModelsModelIdRoute = createRoute({
  method: 'patch',
  path: '/v1/fine_tuning/models/{model_id}',
  tags: ['models'],
  summary: 'Update Fine Tuned Model',
  description: 'Update a model name or description.',
  operationId: 'jobs_api_routes_fine_tuning_update_fine_tuned_model',
  request: {
    params: z.object({
      model_id: z
        .string()
        .openapi({
          param: {
            name: 'model_id',
            in: 'path',
            description: 'The ID of the model to update.',
            required: true,
            schema: { type: 'string', title: 'Model Id' },
            example: 'ft:open-mistral-7b:587a6b29:20240514:7e773925',
          },
          title: 'Model Id',
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateFTModelInSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .xor([CompletionFTModelOutSchema, ClassifierFTModelOutSchema])
            .openapi({
              discriminator: {
                propertyName: 'model_type',
                mapping: {
                  classifier: '#/components/schemas/ClassifierFTModelOut',
                  completion: '#/components/schemas/CompletionFTModelOut',
                },
              },
              title: 'Response',
            }),
        },
      },
    },
  },
})

export const postV1FineTuningModelsModelIdArchiveRoute = createRoute({
  method: 'post',
  path: '/v1/fine_tuning/models/{model_id}/archive',
  tags: ['models'],
  summary: 'Archive Fine Tuned Model',
  description: 'Archive a fine-tuned model.',
  operationId: 'jobs_api_routes_fine_tuning_archive_fine_tuned_model',
  request: {
    params: z.object({
      model_id: z
        .string()
        .openapi({
          param: {
            name: 'model_id',
            in: 'path',
            description: 'The ID of the model to archive.',
            required: true,
            schema: { type: 'string', title: 'Model Id' },
            example: 'ft:open-mistral-7b:587a6b29:20240514:7e773925',
          },
          title: 'Model Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ArchiveFTModelOutSchema } },
    },
  },
})

export const deleteV1FineTuningModelsModelIdArchiveRoute = createRoute({
  method: 'delete',
  path: '/v1/fine_tuning/models/{model_id}/archive',
  tags: ['models'],
  summary: 'Unarchive Fine Tuned Model',
  description: 'Un-archive a fine-tuned model.',
  operationId: 'jobs_api_routes_fine_tuning_unarchive_fine_tuned_model',
  request: {
    params: z.object({
      model_id: z
        .string()
        .openapi({
          param: {
            name: 'model_id',
            in: 'path',
            description: 'The ID of the model to unarchive.',
            required: true,
            schema: { type: 'string', title: 'Model Id' },
            example: 'ft:open-mistral-7b:587a6b29:20240514:7e773925',
          },
          title: 'Model Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UnarchiveFTModelOutSchema } },
    },
  },
})

export const getV1BatchJobsRoute = createRoute({
  method: 'get',
  path: '/v1/batch/jobs',
  tags: ['batch'],
  summary: 'Get Batch Jobs',
  description: 'Get a list of batch jobs for your organization and user.',
  operationId: 'jobs_api_routes_batch_get_batch_jobs',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            required: false,
            schema: { type: 'integer', title: 'Page', default: 0 },
          },
          title: 'Page',
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'page_size',
            in: 'query',
            required: false,
            schema: { type: 'integer', title: 'Page Size', default: 100 },
          },
          title: 'Page Size',
        }),
      model: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'model',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Model' },
          },
          title: 'Model',
        }),
      agent_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'agent_id',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Agent Id' },
          },
          title: 'Agent Id',
        }),
      metadata: z
        .union([
          z.looseObject({}),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'metadata',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'object', additionalProperties: true }, { type: 'null' }],
              title: 'Metadata',
            },
          },
          title: 'Metadata',
        }),
      created_after: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'created_after',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Created After',
            },
          },
          title: 'Created After',
        }),
      created_by_me: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'created_by_me',
            in: 'query',
            required: false,
            schema: { type: 'boolean', title: 'Created By Me', default: false },
          },
          title: 'Created By Me',
        }),
      status: z
        .union([
          z.array(BatchJobStatusSchema),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            required: false,
            schema: {
              anyOf: [
                { type: 'array', items: { $ref: '#/components/schemas/BatchJobStatus' } },
                { type: 'null' },
              ],
              title: 'Status',
            },
          },
          title: 'Status',
        }),
      order_by: z
        .enum(['created', '-created'])
        .default('-created')
        .exactOptional()
        .openapi({
          param: {
            name: 'order_by',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              title: 'Order By',
              enum: ['created', '-created'],
              default: '-created',
            },
          },
          title: 'Order By',
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BatchJobsOutSchema } } },
  },
})

export const postV1BatchJobsRoute = createRoute({
  method: 'post',
  path: '/v1/batch/jobs',
  tags: ['batch'],
  summary: 'Create Batch Job',
  description: 'Create a new batch job, it will be queued for processing.',
  operationId: 'jobs_api_routes_batch_create_batch_job',
  request: {
    body: { content: { 'application/json': { schema: BatchJobInSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BatchJobOutSchema } } },
  },
})

export const getV1BatchJobsJobIdRoute = createRoute({
  method: 'get',
  path: '/v1/batch/jobs/{job_id}',
  tags: ['batch'],
  summary: 'Get Batch Job',
  description:
    'Get a batch job details by its UUID.\n\nArgs:\n    inline: If True, return results inline in the response.',
  operationId: 'jobs_api_routes_batch_get_batch_job',
  request: {
    params: z.object({
      job_id: z
        .uuid()
        .openapi({
          param: {
            name: 'job_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Job Id', format: 'uuid' },
          },
          title: 'Job Id',
        }),
    }),
    query: z.object({
      inline: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            ((read) => (val: unknown) => {
              const result = read.safeParse(val)
              return result.success ? result.data : val
            })(z.stringbool()),
            z.union([z.boolean(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'inline',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'boolean' }, { type: 'null' }], title: 'Inline' },
          },
          title: 'Inline',
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BatchJobOutSchema } } },
  },
})

export const postV1BatchJobsJobIdCancelRoute = createRoute({
  method: 'post',
  path: '/v1/batch/jobs/{job_id}/cancel',
  tags: ['batch'],
  summary: 'Cancel Batch Job',
  description: 'Request the cancellation of a batch job.',
  operationId: 'jobs_api_routes_batch_cancel_batch_job',
  request: {
    params: z.object({
      job_id: z
        .uuid()
        .openapi({
          param: {
            name: 'job_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Job Id', format: 'uuid' },
          },
          title: 'Job Id',
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BatchJobOutSchema } } },
  },
})

export const postV1ChatCompletionsRoute = createRoute({
  method: 'post',
  path: '/v1/chat/completions',
  tags: ['chat'],
  summary: 'Chat Completion',
  operationId: 'chat_completion_v1_chat_completions_post',
  request: {
    body: {
      content: { 'application/json': { schema: ChatCompletionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': { schema: ChatCompletionResponseSchema },
        'text/event-stream': { schema: CompletionEventSchema },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1FimCompletionsRoute = createRoute({
  method: 'post',
  path: '/v1/fim/completions',
  tags: ['fim'],
  summary: 'Fim Completion',
  description: 'FIM completion.',
  operationId: 'fim_completion_v1_fim_completions_post',
  request: {
    body: {
      content: { 'application/json': { schema: FIMCompletionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: FIMCompletionResponseSchema,
          examples: {
            userExample: {
              value: {
                id: '447e3e0d457e42e98248b5d2ef52a2a3',
                object: 'chat.completion',
                model: 'codestral-2508',
                usage: { prompt_tokens: 8, completion_tokens: 91, total_tokens: 99 },
                created: 1759496862,
                choices: [
                  {
                    index: 0,
                    message: {
                      content:
                        'add_numbers(a: int, b: int) -> int:\n    """\n    You are given two integers `a` and `b`. Your task is to write a function that\n    returns the sum of these two integers. The function should be implemented in a\n    way that it can handle very large integers (up to 10^18). As a reminder, your\n    code has to be in python\n    """\n',
                      tool_calls: null,
                      prefix: false,
                      role: 'assistant',
                    },
                    finish_reason: 'stop',
                  },
                ],
              },
            },
          },
        },
        'text/event-stream': { schema: CompletionEventSchema },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1AgentsCompletionsRoute = createRoute({
  method: 'post',
  path: '/v1/agents/completions',
  tags: ['deprecated.agents'],
  summary: 'Agents Completion',
  operationId: 'agents_completion_v1_agents_completions_post',
  request: {
    body: {
      content: { 'application/json': { schema: AgentsCompletionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: ChatCompletionResponseSchema,
          examples: {
            userExample: {
              value: {
                id: 'cf79f7daaee244b1a0ae5c7b1444424a',
                object: 'chat.completion',
                model: 'mistral-medium-latest',
                usage: {
                  prompt_tokens: 24,
                  completion_tokens: 27,
                  total_tokens: 51,
                  prompt_audio_seconds: {},
                },
                created: 1759500534,
                choices: [
                  {
                    index: 0,
                    message: {
                      content:
                        'Arrr, the scallywag Claude Monet be the finest French painter to ever splash colors on a canvas, savvy?',
                      tool_calls: null,
                      prefix: false,
                      role: 'assistant',
                    },
                    finish_reason: 'stop',
                  },
                ],
              },
            },
          },
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  deprecated: true,
})

export const postV1EmbeddingsRoute = createRoute({
  method: 'post',
  path: '/v1/embeddings',
  tags: ['embeddings'],
  summary: 'Embeddings',
  description: 'Embeddings',
  operationId: 'embeddings_v1_embeddings_post',
  request: {
    body: { content: { 'application/json': { schema: EmbeddingRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: EmbeddingResponseSchema,
          examples: {
            userExample: {
              value: {
                data: [
                  {
                    embedding: [
                      -0.016632080078125, 0.0701904296875, 0.03143310546875, 0.01309967041015625,
                      0.0202789306640625,
                    ],
                    index: 0,
                    object: 'embedding',
                  },
                  {
                    embedding: [
                      -0.0230560302734375, 0.039337158203125, 0.0521240234375, -0.0184783935546875,
                      0.034271240234375,
                    ],
                    index: 1,
                    object: 'embedding',
                  },
                ],
                model: 'mistral-embed',
                object: 'list',
                usage: {
                  prompt_tokens: 15,
                  completion_tokens: 0,
                  total_tokens: 15,
                  prompt_audio_seconds: null,
                },
              },
            },
          },
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1ModerationsRoute = createRoute({
  method: 'post',
  path: '/v1/moderations',
  tags: ['classifiers'],
  summary: 'Moderations',
  operationId: 'moderations_v1_moderations_post',
  request: {
    body: {
      content: { 'application/json': { schema: ClassificationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: ModerationResponseSchema,
          examples: {
            userExample: {
              value: {
                id: '4d71ae510af942108ef7344f903e2b88',
                model: 'mistral-moderation-latest',
                results: [
                  {
                    categories: {
                      sexual: false,
                      hate_and_discrimination: false,
                      violence_and_threats: false,
                      dangerous_and_criminal_content: false,
                      selfharm: false,
                      health: false,
                      financial: false,
                      law: false,
                      pii: false,
                    },
                    category_scores: {
                      sexual: 0.0011335690505802631,
                      hate_and_discrimination: 0.0030753696337342262,
                      violence_and_threats: 0.0003569706459529698,
                      dangerous_and_criminal_content: 0.002251847181469202,
                      selfharm: 0.00017952796770259738,
                      health: 0.0002780309587251395,
                      financial: 0.00008481103577651083,
                      law: 0.00004539786823443137,
                      pii: 0.0023967307060956955,
                    },
                  },
                  {
                    categories: {
                      sexual: false,
                      hate_and_discrimination: false,
                      violence_and_threats: false,
                      dangerous_and_criminal_content: false,
                      selfharm: false,
                      health: false,
                      financial: false,
                      law: false,
                      pii: false,
                    },
                    category_scores: {
                      sexual: 0.000626334105618298,
                      hate_and_discrimination: 0.0013670255430042744,
                      violence_and_threats: 0.0002611903182696551,
                      dangerous_and_criminal_content: 0.0030753696337342262,
                      selfharm: 0.00010889690747717395,
                      health: 0.00015843621804378927,
                      financial: 0.000191104321856983,
                      law: 0.00004006369272246957,
                      pii: 0.0035936026833951473,
                    },
                  },
                ],
              },
            },
          },
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1ChatModerationsRoute = createRoute({
  method: 'post',
  path: '/v1/chat/moderations',
  tags: ['classifiers'],
  summary: 'Chat Moderations',
  operationId: 'chat_moderations_v1_chat_moderations_post',
  request: {
    body: {
      content: { 'application/json': { schema: ChatModerationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: ModerationResponseSchema,
          examples: {
            userExample: {
              value: {
                id: '352bce1a55814127a3b0bc4fb8f02a35',
                model: 'mistral-moderation-latest',
                results: [
                  {
                    categories: {
                      sexual: false,
                      hate_and_discrimination: false,
                      violence_and_threats: false,
                      dangerous_and_criminal_content: false,
                      selfharm: false,
                      health: false,
                      financial: false,
                      law: false,
                      pii: false,
                    },
                    category_scores: {
                      sexual: 0.0010322310263291001,
                      hate_and_discrimination: 0.001597845577634871,
                      violence_and_threats: 0.00020342698553577065,
                      dangerous_and_criminal_content: 0.0029810327105224133,
                      selfharm: 0.00017952796770259738,
                      health: 0.0002959570847451687,
                      financial: 0.000079673009167891,
                      law: 0.00004539786823443137,
                      pii: 0.004198795650154352,
                    },
                  },
                ],
              },
            },
          },
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1OcrRoute = createRoute({
  method: 'post',
  path: '/v1/ocr',
  tags: ['ocr'],
  summary: 'OCR',
  operationId: 'ocr_v1_ocr_post',
  request: {
    body: { content: { 'application/json': { schema: OCRRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: OCRResponseSchema,
          examples: {
            userExample: {
              value: {
                pages: [
                  {
                    index: 1,
                    markdown:
                      "# LEVERAGING UNLABELED DATA TO PREDICT OUT-OF-DISTRIBUTION PERFORMANCE\nSaurabh Garg*<br> Carnegie Mellon University<br> sgarg2@andrew.cmu.edu<br> Sivaraman Balakrishnan<br> Carnegie Mellon University<br> sbalakri@andrew.cmu.edu<br> Zachary C. Lipton<br> Carnegie Mellon University<br> zlipton@andrew.cmu.edu\n## Behnam Neyshabur\nGoogle Research, Blueshift team<br> neyshabur@google.com\nHanie Sedghi<br> Google Research, Brain team<br> hsedghi@google.com\n#### Abstract\nReal-world machine learning deployments are characterized by mismatches between the source (training) and target (test) distributions that may cause performance drops. In this work, we investigate methods for predicting the target domain accuracy using only labeled source data and unlabeled target data. We propose Average Thresholded Confidence (ATC), a practical method that learns a threshold on the model's confidence, predicting accuracy as the fraction of unlabeled examples for which model confidence exceeds that threshold. ATC outperforms previous methods across several model architectures, types of distribution shifts (e.g., due to synthetic corruptions, dataset reproduction, or novel subpopulations), and datasets (WILDS, ImageNet, BREEDS, CIFAR, and MNIST). In our experiments, ATC estimates target performance $2-4 \\times$ more accurately than prior methods. We also explore the theoretical foundations of the problem, proving that, in general, identifying the accuracy is just as hard as identifying the optimal predictor and thus, the efficacy of any method rests upon (perhaps unstated) assumptions on the nature of the shift. Finally, analyzing our method on some toy distributions, we provide insights concerning when it works ${ }^{1}$.\n## 1 INTRODUCTION\nMachine learning models deployed in the real world typically encounter examples from previously unseen distributions. While the IID assumption enables us to evaluate models using held-out data from the source distribution (from which training data is sampled), this estimate is no longer valid in presence of a distribution shift. Moreover, under such shifts, model accuracy tends to degrade (Szegedy et al., 2014; Recht et al., 2019; Koh et al., 2021). Commonly, the only data available to the practitioner are a labeled training set (source) and unlabeled deployment-time data which makes the problem more difficult. In this setting, detecting shifts in the distribution of covariates is known to be possible (but difficult) in theory (Ramdas et al., 2015), and in practice (Rabanser et al., 2018). However, producing an optimal predictor using only labeled source and unlabeled target data is well-known to be impossible absent further assumptions (Ben-David et al., 2010; Lipton et al., 2018).\nTwo vital questions that remain are: (i) the precise conditions under which we can estimate a classifier's target-domain accuracy; and (ii) which methods are most practically useful. To begin, the straightforward way to assess the performance of a model under distribution shift would be to collect labeled (target domain) examples and then to evaluate the model on that data. However, collecting fresh labeled data from the target distribution is prohibitively expensive and time-consuming, especially if the target distribution is non-stationary. Hence, instead of using labeled data, we aim to use unlabeled data from the target distribution, that is comparatively abundant, to predict model performance. Note that in this work, our focus is not to improve performance on the target but, rather, to estimate the accuracy on the target for a given classifier.\n[^0]: Work done in part while Saurabh Garg was interning at Google ${ }^{1}$ Code is available at [https://github.com/saurabhgarg1996/ATC_code](https://github.com/saurabhgarg1996/ATC_code).\n",
                    images: [],
                    dimensions: { dpi: 200, height: 2200, width: 1700 },
                  },
                  {
                    index: 2,
                    markdown:
                      '![img-0.jpeg](img-0.jpeg)\nFigure 1: Illustration of our proposed method ATC. Left: using source domain validation data, we identify a threshold on a score (e.g. negative entropy) computed on model confidence such that fraction of examples above the threshold matches the validation set accuracy. ATC estimates accuracy on unlabeled target data as the fraction of examples with the score above the threshold. Interestingly, this threshold yields accurate estimates on a wide set of target distributions resulting from natural and synthetic shifts. Right: Efficacy of ATC over previously proposed approaches on our testbed with a post-hoc calibrated model. To obtain errors on the same scale, we rescale all errors with Average Confidence (AC) error. Lower estimation error is better. See Table 1 for exact numbers and comparison on various types of distribution shift. See Sec. 5 for details on our testbed.\nRecently, numerous methods have been proposed for this purpose (Deng & Zheng, 2021; Chen et al., 2021b; Jiang et al., 2021; Deng et al., 2021; Guillory et al., 2021). These methods either require calibration on the target domain to yield consistent estimates (Jiang et al., 2021; Guillory et al., 2021) or additional labeled data from several target domains to learn a linear regression function on a distributional distance that then predicts model performance (Deng et al., 2021; Deng & Zheng, 2021; Guillory et al., 2021). However, methods that require calibration on the target domain typically yield poor estimates since deep models trained and calibrated on source data are not, in general, calibrated on a (previously unseen) target domain (Ovadia et al., 2019). Besides, methods that leverage labeled data from target domains rely on the fact that unseen target domains exhibit strong linear correlation with seen target domains on the underlying distance measure and, hence, can be rendered ineffective when such target domains with labeled data are unavailable (in Sec. 5.1 we demonstrate such a failure on a real-world distribution shift problem). Therefore, throughout the paper, we assume access to labeled source data and only unlabeled data from target domain(s).\nIn this work, we first show that absent assumptions on the source classifier or the nature of the shift, no method of estimating accuracy will work generally (even in non-contrived settings). To estimate accuracy on target domain perfectly, we highlight that even given perfect knowledge of the labeled source distribution (i.e., $p_{s}(x, y)$ ) and unlabeled target distribution (i.e., $p_{t}(x)$ ), we need restrictions on the nature of the shift such that we can uniquely identify the target conditional $p_{t}(y \\mid x)$. Thus, in general, identifying the accuracy of the classifier is as hard as identifying the optimal predictor.\nSecond, motivated by the superiority of methods that use maximum softmax probability (or logit) of a model for Out-Of-Distribution (OOD) detection (Hendrycks & Gimpel, 2016; Hendrycks et al., 2019), we propose a simple method that leverages softmax probability to predict model performance. Our method, Average Thresholded Confidence (ATC), learns a threshold on a score (e.g., maximum confidence or negative entropy) of model confidence on validation source data and predicts target domain accuracy as the fraction of unlabeled target points that receive a score above that threshold. ATC selects a threshold on validation source data such that the fraction of source examples that receive the score above the threshold match the accuracy of those examples. Our primary contribution in ATC is the proposal of obtaining the threshold and observing its efficacy on (practical) accuracy estimation. Importantly, our work takes a step forward in positively answering the question raised in Deng & Zheng (2021); Deng et al. (2021) about a practical strategy to select a threshold that enables accuracy prediction with thresholded model confidence.\n',
                    images: [
                      {
                        id: 'img-0.jpeg',
                        top_left_x: 292,
                        top_left_y: 217,
                        bottom_right_x: 1405,
                        bottom_right_y: 649,
                        image_base64: '...',
                      },
                    ],
                    dimensions: { dpi: 200, height: 2200, width: 1700 },
                  },
                  { index: 3, markdown: '...', images: [], dimensions: {} },
                  {
                    index: 27,
                    markdown:
                      '![img-8.jpeg](img-8.jpeg)\nFigure 9: Scatter plot of predicted accuracy versus (true) OOD accuracy for vision datasets except MNIST with a ResNet50 model. Results reported by aggregating MAE numbers over 4 different seeds.\n',
                    images: [
                      {
                        id: 'img-8.jpeg',
                        top_left_x: 290,
                        top_left_y: 226,
                        bottom_right_x: 1405,
                        bottom_right_y: 1834,
                        image_base64: '...',
                      },
                    ],
                    dimensions: { dpi: 200, height: 2200, width: 1700 },
                  },
                  {
                    index: 28,
                    markdown:
                      "| Dataset | Shift | IM |  | AC |  | DOC |  | GDE | ATC-MC (Ours) |  | ATC-NE (Ours) |  | | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | |  |  | Pre T | Post T | Pre T | Post T | Pre T | Post T | Post T | Pre T | Post T | Pre T | Post T | | CIFAR10 | Natural | 6.60 | 5.74 | 9.88 | 6.89 | 7.25 | 6.07 | 4.77 | 3.21 | 3.02 | 2.99 | 2.85 | |  |  | (0.35) | (0.30) | (0.16) | (0.13) | (0.15) | (0.16) | (0.13) | (0.49) | (0.40) | (0.37) | (0.29) | |  | Synthetic | 12.33 | 10.20 | 16.50 | 11.91 | 13.87 | 11.08 | 6.55 | 4.65 | 4.25 | 4.21 | 3.87 | |  |  | (0.51) | (0.48) | (0.26) | (0.17) | (0.18) | (0.17) | (0.35) | (0.55) | (0.55) | (0.55) | (0.75) | | CIFAR100 | Synthetic | 13.69 | 11.51 | 23.61 | 13.10 | 14.60 | 10.14 | 9.85 | 5.50 | 4.75 | 4.72 | 4.94 | |  |  | (0.55) | (0.41) | (1.16) | (0.80) | (0.77) | (0.64) | (0.57) | (0.70) | (0.73) | (0.74) | (0.74) | | ImageNet200 | Natural | 12.37 | 8.19 | 22.07 | 8.61 | 15.17 | 7.81 | 5.13 | 4.37 | 2.04 | 3.79 | 1.45 | |  |  | (0.25) | (0.33) | (0.08) | (0.25) | (0.11) | (0.29) | (0.08) | (0.39) | (0.24) | (0.30) | (0.27) | |  | Synthetic | 19.86 | 12.94 | 32.44 | 13.35 | 25.02 | 12.38 | 5.41 | 5.93 | 3.09 | 5.00 | 2.68 | |  |  | (1.38) | (1.81) | (1.00) | (1.30) | (1.10) | (1.38) | (0.89) | (1.38) | (0.87) | (1.28) | (0.45) | | ImageNet | Natural | 7.77 | 6.50 | 18.13 | 6.02 | 8.13 | 5.76 | 6.23 | 3.88 | 2.17 | 2.06 | 0.80 | |  |  | (0.27) | (0.33) | (0.23) | (0.34) | (0.27) | (0.37) | (0.41) | (0.53) | (0.62) | (0.54) | (0.44) | |  | Synthetic | 13.39 | 10.12 | 24.62 | 8.51 | 13.55 | 7.90 | 6.32 | 3.34 | 2.53 | 2.61 | 4.89 | |  |  | (0.53) | (0.63) | (0.64) | (0.71) | (0.61) | (0.72) | (0.33) | (0.53) | (0.36) | (0.33) | (0.83) | | FMoW-WILDS | Natural | 5.53 | 4.31 | 33.53 | 12.84 | 5.94 | 4.45 | 5.74 | 3.06 | 2.70 | 3.02 | 2.72 | |  |  | (0.33) | (0.63) | (0.13) | (12.06) | (0.36) | (0.77) | (0.55) | (0.36) | (0.54) | (0.35) | (0.44) | | RxRx1-WILDS | Natural | 5.80 | 5.72 | 7.90 | 4.84 | 5.98 | 5.98 | 6.03 | 4.66 | 4.56 | 4.41 | 4.47 | |  |  | (0.17) | (0.15) | (0.24) | (0.09) | (0.15) | (0.13) | (0.08) | (0.38) | (0.38) | (0.31) | (0.26) | | Amazon-WILDS | Natural | 2.40 | 2.29 | 8.01 | 2.38 | 2.40 | 2.28 | 17.87 | 1.65 | 1.62 | 1.60 | 1.59 | |  |  | (0.08) | (0.09) | (0.53) | (0.17) | (0.09) | (0.09) | (0.18) | (0.06) | (0.05) | (0.14) | (0.15) | | CivilCom.-WILDS | Natural | 12.64 | 10.80 | 16.76 | 11.03 | 13.31 | 10.99 | 16.65 |  | 7.14 |  |  | |  |  | (0.52) | (0.48) | (0.53) | (0.49) | (0.52) | (0.49) | (0.25) |  | (0.41) |  |  | | MNIST | Natural | 18.48 | 15.99 | 21.17 | 14.81 | 20.19 | 14.56 | 24.42 | 5.02 | 2.40 | 3.14 | 3.50 | |  |  | (0.45) | (1.53) | (0.24) | (3.89) | (0.23) | (3.47) | (0.41) | (0.44) | (1.83) | (0.49) | (0.17) | | ENTITY-13 | Same | 16.23 | 11.14 | 24.97 | 10.88 | 19.08 | 10.47 | 10.71 | 5.39 | 3.88 | 4.58 | 4.19 | |  |  | (0.77) | (0.65) | (0.70) | (0.77) | (0.65) | (0.72) | (0.74) | (0.92) | (0.61) | (0.85) | (0.16) | |  | Novel | 28.53 | 22.02 | 38.33 | 21.64 | 32.43 | 21.22 | 20.61 | 13.58 | 10.28 | 12.25 | 6.63 | |  |  | (0.82) | (0.68) | (0.75) | (0.86) | (0.69) | (0.80) | (0.60) | (1.15) | (1.34) | (1.21) | (0.93) | | ENTITY-30 | Same | 18.59 | 14.46 | 28.82 | 14.30 | 21.63 | 13.46 | 12.92 | 9.12 | 7.75 | 8.15 | 7.64 | |  |  | (0.51) | (0.52) | (0.43) | (0.71) | (0.37) | (0.59) | (0.14) | (0.62) | (0.72) | (0.68) | (0.88) | |  | Novel | 32.34 | 26.85 | 44.02 | 26.27 | 36.82 | 25.42 | 23.16 | 17.75 | 14.30 | 15.60 | 10.57 | |  |  | (0.60) | (0.58) | (0.56) | (0.79) | (0.47) | (0.68) | (0.12) | (0.76) | (0.85) | (0.86) | (0.86) | | NONLIVING-26 | Same | 18.66 | 17.17 | 26.39 | 16.14 | 19.86 | 15.58 | 16.63 | 10.87 | 10.24 | 10.07 | 10.26 | |  |  | (0.76) | (0.74) | (0.82) | (0.81) | (0.67) | (0.76) | (0.45) | (0.98) | (0.83) | (0.92) | (1.18) | |  | Novel | 33.43 | 31.53 | 41.66 | 29.87 | 35.13 | 29.31 | 29.56 | 21.70 | 20.12 | 19.08 | 18.26 | |  |  | (0.67) | (0.65) | (0.67) | (0.71) | (0.54) | (0.64) | (0.21) | (0.86) | (0.75) | (0.82) | (1.12) | | LIVING-17 | Same | 12.63 | 11.05 | 18.32 | 10.46 | 14.43 | 10.14 | 9.87 | 4.57 | 3.95 | 3.81 | 4.21 | |  |  | (1.25) | (1.20) | (1.01) | (1.12) | (1.11) | (1.16) | (0.61) | (0.71) | (0.48) | (0.22) | (0.53) | |  | Novel | 29.03 | 26.96 | 35.67 | 26.11 | 31.73 | 25.73 | 23.53 | 16.15 | 14.49 | 12.97 | 11.39 | |  |  | (1.44) | (1.38) | (1.09) | (1.27) | (1.19) | (1.35) | (0.52) | (1.36) | (1.46) | (1.52) | (1.72) |\nTable 3: Mean Absolute estimation Error (MAE) results for different datasets in our setup grouped by the nature of shift. 'Same' refers to same subpopulation shifts and 'Novel' refers novel subpopulation shifts. We include details about the target sets considered in each shift in Table 2. Post T denotes use of TS calibration on source. For language datasets, we use DistilBERT-base-uncased, for vision dataset we report results with DenseNet model with the exception of MNIST where we use FCN. Across all datasets, we observe that ATC achieves superior performance (lower MAE is better). For GDE post T and pre T estimates match since TS doesn't alter the argmax prediction. Results reported by aggregating MAE numbers over 4 different seeds. Values in parenthesis (i.e., $(\\cdot)$ ) denote standard deviation values.\n",
                    images: [],
                    dimensions: { dpi: 200, height: 2200, width: 1700 },
                  },
                  {
                    index: 29,
                    markdown:
                      "| Dataset | Shift | IM |  | AC |  | DOC |  | GDE | ATC-MC (Ours) |  | ATC-NE (Ours) |  | | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | |  |  | Pre T | Post T | Pre T | Post T | Pre T | Post T | Post T | Pre T | Post T | Pre T | Post T | | CIFAR10 | Natural | 7.14 | 6.20 | 10.25 | 7.06 | 7.68 | 6.35 | 5.74 | 4.02 | 3.85 | 3.76 | 3.38 | |  |  | (0.14) | (0.11) | (0.31) | (0.33) | (0.28) | (0.27) | (0.25) | (0.38) | (0.30) | (0.33) | (0.32) | |  | Synthetic | 12.62 | 10.75 | 16.50 | 11.91 | 13.93 | 11.20 | 7.97 | 5.66 | 5.03 | 4.87 | 3.63 | |  |  | (0.76) | (0.71) | (0.28) | (0.24) | (0.29) | (0.28) | (0.13) | (0.64) | (0.71) | (0.71) | (0.62) | | CIFAR100 | Synthetic | 12.77 | 12.34 | 16.89 | 12.73 | 11.18 | 9.63 | 12.00 | 5.61 | 5.55 | 5.65 | 5.76 | |  |  | (0.43) | (0.68) | (0.20) | (2.59) | (0.35) | (1.25) | (0.48) | (0.51) | (0.55) | (0.35) | (0.27) | | ImageNet200 | Natural | 12.63 | 7.99 | 23.08 | 7.22 | 15.40 | 6.33 | 5.00 | 4.60 | 1.80 | 4.06 | 1.38 | |  |  | (0.59) | (0.47) | (0.31) | (0.22) | (0.42) | (0.24) | (0.36) | (0.63) | (0.17) | (0.69) | (0.29) | |  | Synthetic | 20.17 | 11.74 | 33.69 | 9.51 | 25.49 | 8.61 | 4.19 | 5.37 | 2.78 | 4.53 | 3.58 | |  |  | (0.74) | (0.80) | (0.73) | (0.51) | (0.66) | (0.50) | (0.14) | (0.88) | (0.23) | (0.79) | (0.33) | | ImageNet | Natural | 8.09 | 6.42 | 21.66 | 5.91 | 8.53 | 5.21 | 5.90 | 3.93 | 1.89 | 2.45 | 0.73 | |  |  | (0.25) | (0.28) | (0.38) | (0.22) | (0.26) | (0.25) | (0.44) | (0.26) | (0.21) | (0.16) | (0.10) | |  | Synthetic | 13.93 | 9.90 | 28.05 | 7.56 | 13.82 | 6.19 | 6.70 | 3.33 | 2.55 | 2.12 | 5.06 | |  |  | (0.14) | (0.23) | (0.39) | (0.13) | (0.31) | (0.07) | (0.52) | (0.25) | (0.25) | (0.31) | (0.27) | | FMoW-WILDS | Natural | 5.15 | 3.55 | 34.64 | 5.03 | 5.58 | 3.46 | 5.08 | 2.59 | 2.33 | 2.52 | 2.22 | |  |  | (0.19) | (0.41) | (0.22) | (0.29) | (0.17) | (0.37) | (0.46) | (0.32) | (0.28) | (0.25) | (0.30) | | RxRx1-WILDS | Natural | 6.17 | 6.11 | 21.05 | 5.21 | 6.54 | 6.27 | 6.82 | 5.30 | 5.20 | 5.19 | 5.63 | |  |  | (0.20) | (0.24) | (0.31) | (0.18) | (0.21) | (0.20) | (0.31) | (0.30) | (0.44) | (0.43) | (0.55) | | Entity-13 | Same | 18.32 | 14.38 | 27.79 | 13.56 | 20.50 | 13.22 | 16.09 | 9.35 | 7.50 | 7.80 | 6.94 | |  |  | (0.29) | (0.53) | (1.18) | (0.58) | (0.47) | (0.58) | (0.84) | (0.79) | (0.65) | (0.62) | (0.71) | |  | Novel | 28.82 | 24.03 | 38.97 | 22.96 | 31.66 | 22.61 | 25.26 | 17.11 | 13.96 | 14.75 | 9.94 | |  |  | (0.30) | (0.55) | (1.32) | (0.59) | (0.54) | (0.58) | (1.08) | (0.93) | (0.64) | (0.78) |  | | Entity-30 | Same | 16.91 | 14.61 | 26.84 | 14.37 | 18.60 | 13.11 | 13.74 | 8.54 | 7.94 | 7.77 | 8.04 | |  |  | (1.33) | (1.11) | (2.15) | (1.34) | (1.69) | (1.30) | (1.07) | (1.47) | (1.38) | (1.44) | (1.51) | |  | Novel | 28.66 | 25.83 | 39.21 | 25.03 | 30.95 | 23.73 | 23.15 | 15.57 | 13.24 | 12.44 | 11.05 | |  |  | (1.16) | (0.88) | (2.03) | (1.11) | (1.64) | (1.11) | (0.51) | (1.44) | (1.15) | (1.26) | (1.13) | | NonLIVING-26 | Same | 17.43 | 15.95 | 27.70 | 15.40 | 18.06 | 14.58 | 16.99 | 10.79 | 10.13 | 10.05 | 10.29 | |  |  | (0.90) | (0.86) | (0.90) | (0.69) | (1.00) | (0.78) | (1.25) | (0.62) | (0.32) | (0.46) | (0.79) | |  | Novel | 29.51 | 27.75 | 40.02 | 26.77 | 30.36 | 25.93 | 27.70 | 19.64 | 17.75 | 16.90 | 15.69 | |  |  | (0.86) | (0.82) | (0.76) | (0.82) | (0.95) | (0.80) | (1.42) | (0.68) | (0.53) | (0.60) | (0.83) | | LIVING-17 | Same | 14.28 | 12.21 | 23.46 | 11.16 | 15.22 | 10.78 | 10.49 | 4.92 | 4.23 | 4.19 | 4.73 | |  |  | (0.96) | (0.93) | (1.16) | (0.90) | (0.96) | (0.99) | (0.97) | (0.57) | (0.42) | (0.35) | (0.24) | |  | Novel | 28.91 | 26.35 | 38.62 | 24.91 | 30.32 | 24.52 | 22.49 | 15.42 | 13.02 | 12.29 | 10.34 | |  |  | (0.66) | (0.73) | (1.01) | (0.61) | (0.59) | (0.74) | (0.85) | (0.59) | (0.53) | (0.73) | (0.62) |\nTable 4: Mean Absolute estimation Error (MAE) results for different datasets in our setup grouped by the nature of shift for ResNet model. 'Same' refers to same subpopulation shifts and 'Novel' refers novel subpopulation shifts. We include details about the target sets considered in each shift in Table 2. Post T denotes use of TS calibration on source. Across all datasets, we observe that ATC achieves superior performance (lower MAE is better). For GDE post T and pre T estimates match since TS doesn't alter the argmax prediction. Results reported by aggregating MAE numbers over 4 different seeds. Values in parenthesis (i.e., $(\\cdot)$ ) denote standard deviation values.\n",
                    images: [],
                    dimensions: { dpi: 200, height: 2200, width: 1700 },
                  },
                ],
                model: 'mistral-ocr-2503-completion',
                usage_info: { pages_processed: 29, doc_size_bytes: null },
              },
            },
          },
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1ClassificationsRoute = createRoute({
  method: 'post',
  path: '/v1/classifications',
  tags: ['classifiers'],
  summary: 'Classifications',
  operationId: 'classifications_v1_classifications_post',
  request: {
    body: {
      content: { 'application/json': { schema: ClassificationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ClassificationResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1ChatClassificationsRoute = createRoute({
  method: 'post',
  path: '/v1/chat/classifications',
  tags: ['classifiers'],
  summary: 'Chat Classifications',
  operationId: 'chat_classifications_v1_chat_classifications_post',
  request: {
    body: {
      content: { 'application/json': { schema: ChatClassificationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ClassificationResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1AudioTranscriptionsRoute = createRoute({
  method: 'post',
  path: '/v1/audio/transcriptions',
  tags: ['audio.transcriptions'],
  summary: 'Create Transcription',
  operationId: 'audio_api_v1_transcriptions_post',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              model: z
                .string()
                .openapi({
                  examples: ['voxtral-mini-latest', 'voxtral-mini-2507'],
                  title: 'Model',
                  description: 'ID of the model to be used.',
                }),
              file: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z
                  .union([
                    FileSchema,
                    z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
                  ])
                  .nullable(),
              )
                .default(null)
                .exactOptional()
                .openapi({ title: 'File' }),
              file_url: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z
                  .union([
                    z.url().min(1).max(2083),
                    z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
                  ])
                  .nullable(),
              )
                .default(null)
                .exactOptional()
                .openapi({ title: 'File Url', description: 'Url of a file to be transcribed' }),
              file_id: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z
                  .union([
                    z.string(),
                    z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
                  ])
                  .nullable(),
              )
                .default(null)
                .exactOptional()
                .openapi({ title: 'File Id', description: 'ID of a file uploaded to /v1/files' }),
              language: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z
                  .union([
                    z.string().regex(/^\w{2}$/),
                    z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
                  ])
                  .nullable(),
              )
                .default(null)
                .exactOptional()
                .openapi({
                  title: 'Language',
                  description:
                    "Language of the audio, e.g. 'en'. Providing the language can boost accuracy.",
                }),
              temperature: z
                .preprocess(
                  (val) => (val === 'null' ? null : val),
                  z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.union([z.number(), z.null().nullable()]),
                    )
                    .nullable(),
                )
                .default(null)
                .exactOptional()
                .openapi({ title: 'Temperature' }),
              stream: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.literal(false),
                )
                .default(false)
                .exactOptional()
                .openapi({ title: 'Stream' }),
              diarize: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({ title: 'Diarize' }),
              context_bias: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().regex(/^[^,\s]+$/)),
                )
                .default([])
                .exactOptional()
                .openapi({ title: 'Context Bias' }),
              timestamp_granularities: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(TimestampGranularitySchema),
                )
                .exactOptional()
                .openapi({
                  title: 'Timestamp Granularities',
                  description: 'Granularities of timestamps to include in the response.',
                }),
            })
            .openapi({ title: 'AudioTranscriptionRequest', required: ['model'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: TranscriptionResponseSchema,
          examples: {
            userExample: {
              value: {
                model: 'voxtral-mini-2507',
                text: "This week, I traveled to Chicago to deliver my final farewell address to the nation, following in the tradition of presidents before me. It was an opportunity to say thank you. Whether we've seen eye to eye or rarely agreed at all, my conversations with you, the American people, in living rooms, in schools, at farms and on factory floors, at diners and on distant military outposts, All these conversations are what have kept me honest, kept me inspired, and kept me going. Every day, I learned from you. You made me a better President, and you made me a better man.\nOver the course of these eight years, I've seen the goodness, the resilience, and the hope of the American people. I've seen neighbors looking out for each other as we rescued our economy from the worst crisis of our lifetimes. I've hugged cancer survivors who finally know the security of affordable health care. I've seen communities like Joplin rebuild from disaster, and cities like Boston show the world that no terrorist will ever break the American spirit. I've seen the hopeful faces of young graduates and our newest military officers. I've mourned with grieving families searching for answers. And I found grace in a Charleston church. I've seen our scientists help a paralyzed man regain his sense of touch, and our wounded warriors walk again. I've seen our doctors and volunteers rebuild after earthquakes and stop pandemics in their tracks. I've learned from students who are building robots and curing diseases, and who will change the world in ways we can't even imagine. I've seen the youngest of children remind us of our obligations to care for our refugees, to work in peace, and above all, to look out for each other.\nThat's what's possible when we come together in the slow, hard, sometimes frustrating, but always vital work of self-government. But we can't take our democracy for granted. All of us, regardless of party, should throw ourselves into the work of citizenship. Not just when there is an election. Not just when our own narrow interest is at stake. But over the full span of a lifetime. If you're tired of arguing with strangers on the Internet, try to talk with one in real life. If something needs fixing, lace up your shoes and do some organizing. If you're disappointed by your elected officials, then grab a clipboard, get some signatures, and run for office yourself.\nOur success depends on our participation, regardless of which way the pendulum of power swings. It falls on each of us to be guardians of our democracy, to embrace the joyous task we've been given to continually try to improve this great nation of ours. Because for all our outward differences, we all share the same proud title – citizen.\nIt has been the honor of my life to serve you as President. Eight years later, I am even more optimistic about our country's promise. And I look forward to working along your side as a citizen for all my days that remain.\nThanks, everybody. God bless you. And God bless the United States of America.\n",
                language: 'en',
                segments: [],
                usage: {
                  prompt_audio_seconds: 203,
                  prompt_tokens: 4,
                  total_tokens: 3264,
                  completion_tokens: 635,
                },
              },
            },
          },
        },
      },
    },
  },
})

export const postV1AudioTranscriptionsStreamRoute = createRoute({
  method: 'post',
  path: '/v1/audio/transcriptions#stream',
  tags: ['audio.transcriptions'],
  summary: 'Create Streaming Transcription (SSE)',
  operationId: 'audio_api_v1_transcriptions_post_stream',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              model: z.string().openapi({ title: 'Model' }),
              file: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z
                  .union([
                    FileSchema,
                    z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
                  ])
                  .nullable(),
              )
                .default(null)
                .exactOptional()
                .openapi({ title: 'File' }),
              file_url: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z
                  .union([
                    z.url().min(1).max(2083),
                    z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
                  ])
                  .nullable(),
              )
                .default(null)
                .exactOptional()
                .openapi({ title: 'File Url', description: 'Url of a file to be transcribed' }),
              file_id: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z
                  .union([
                    z.string(),
                    z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
                  ])
                  .nullable(),
              )
                .default(null)
                .exactOptional()
                .openapi({ title: 'File Id', description: 'ID of a file uploaded to /v1/files' }),
              language: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z
                  .union([
                    z.string().regex(/^\w{2}$/),
                    z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
                  ])
                  .nullable(),
              )
                .default(null)
                .exactOptional()
                .openapi({
                  title: 'Language',
                  description:
                    "Language of the audio, e.g. 'en'. Providing the language can boost accuracy.",
                }),
              temperature: z
                .preprocess(
                  (val) => (val === 'null' ? null : val),
                  z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.union([z.number(), z.null().nullable()]),
                    )
                    .nullable(),
                )
                .default(null)
                .exactOptional()
                .openapi({ title: 'Temperature' }),
              stream: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.literal(true),
                )
                .default(true)
                .exactOptional()
                .openapi({ title: 'Stream' }),
              diarize: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({ title: 'Diarize' }),
              context_bias: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().regex(/^[^,\s]+$/)),
                )
                .default([])
                .exactOptional()
                .openapi({ title: 'Context Bias' }),
              timestamp_granularities: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(TimestampGranularitySchema),
                )
                .exactOptional()
                .openapi({
                  title: 'Timestamp Granularities',
                  description: 'Granularities of timestamps to include in the response.',
                }),
            })
            .openapi({ title: 'AudioTranscriptionRequestStream', required: ['model'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Stream of transcription events',
      content: { 'text/event-stream': { schema: TranscriptionStreamEventsSchema } },
    },
  },
})

export const postV1AudioSpeechRoute = createRoute({
  method: 'post',
  path: '/v1/audio/speech',
  tags: ['audio.speech'],
  summary: 'Speech',
  description: 'Generate speech from text using a saved voice or a reference audio clip.',
  operationId: 'speech_v1_audio_speech_post',
  request: {
    body: { content: { 'application/json': { schema: SpeechRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Speech audio data.',
      content: {
        'application/json': { schema: SpeechResponseSchema },
        'text/event-stream': { schema: SpeechStreamEventsSchema },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1AudioVoicesRoute = createRoute({
  method: 'get',
  path: '/v1/audio/voices',
  tags: ['audio.voices'],
  summary: 'List all voices',
  description: 'List all voices (excluding sample data)',
  operationId: 'list_voices_v1_audio_voices_get',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Maximum number of voices to return',
            required: false,
            schema: {
              type: 'integer',
              title: 'Limit',
              description: 'Maximum number of voices to return',
              default: 10,
            },
          },
          title: 'Limit',
          description: 'Maximum number of voices to return',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            description: 'Offset for pagination',
            required: false,
            schema: {
              type: 'integer',
              title: 'Offset',
              description: 'Offset for pagination',
              default: 0,
            },
          },
          title: 'Offset',
          description: 'Offset for pagination',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: VoiceListResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1AudioVoicesRoute = createRoute({
  method: 'post',
  path: '/v1/audio/voices',
  tags: ['audio.voices'],
  summary: 'Create a new voice',
  description: 'Create a new voice with a base64-encoded audio sample',
  operationId: 'create_voice_v1_audio_voices_post',
  request: {
    body: { content: { 'application/json': { schema: VoiceCreateRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: VoiceResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1AudioVoicesVoiceIdRoute = createRoute({
  method: 'get',
  path: '/v1/audio/voices/{voice_id}',
  tags: ['audio.voices'],
  summary: 'Get voice details',
  description: 'Get voice details (excluding sample)',
  operationId: 'get_voice_v1_audio_voices__voice_id__get',
  request: {
    params: z.object({
      voice_id: z
        .string()
        .openapi({
          param: {
            name: 'voice_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Voice Id' },
          },
          title: 'Voice Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: VoiceResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const deleteV1AudioVoicesVoiceIdRoute = createRoute({
  method: 'delete',
  path: '/v1/audio/voices/{voice_id}',
  tags: ['audio.voices'],
  summary: 'Delete a custom voice',
  description: 'Delete a custom voice',
  operationId: 'delete_voice_v1_audio_voices__voice_id__delete',
  request: {
    params: z.object({
      voice_id: z
        .uuid()
        .openapi({
          param: {
            name: 'voice_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Voice Id', format: 'uuid' },
          },
          title: 'Voice Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: VoiceResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const patchV1AudioVoicesVoiceIdRoute = createRoute({
  method: 'patch',
  path: '/v1/audio/voices/{voice_id}',
  tags: ['audio.voices'],
  summary: 'Update voice metadata',
  description: 'Update voice metadata (name, gender, languages, age, tags).',
  operationId: 'update_voice_v1_audio_voices__voice_id__patch',
  request: {
    params: z.object({
      voice_id: z
        .uuid()
        .openapi({
          param: {
            name: 'voice_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Voice Id', format: 'uuid' },
          },
          title: 'Voice Id',
        }),
    }),
    body: { content: { 'application/json': { schema: VoiceUpdateRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: VoiceResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1AudioVoicesVoiceIdSampleRoute = createRoute({
  method: 'get',
  path: '/v1/audio/voices/{voice_id}/sample',
  tags: ['audio.voices'],
  summary: 'Get voice sample audio',
  description: 'Get the audio sample for a voice',
  operationId: 'get_voice_sample_audio_v1_audio_voices__voice_id__sample_get',
  request: {
    params: z.object({
      voice_id: z
        .string()
        .openapi({
          param: {
            name: 'voice_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Voice Id' },
          },
          title: 'Voice Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .string()
            .openapi({
              title: 'Response Get Voice Sample Audio V1 Audio Voices Voice Id Sample Get',
            }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1LibrariesRoute = createRoute({
  method: 'get',
  path: '/v1/libraries',
  tags: ['beta.libraries'],
  summary: 'List all libraries you have access to.',
  description: 'List all libraries that you have created or have been shared with you.',
  operationId: 'libraries_list_v1',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListLibraryOutSchema } },
    },
  },
})

export const postV1LibrariesRoute = createRoute({
  method: 'post',
  path: '/v1/libraries',
  tags: ['beta.libraries'],
  summary: 'Create a new Library.',
  description:
    'Create a new Library, you will be marked as the owner and only you will have the possibility to share it with others. When first created this will only be accessible by you.',
  operationId: 'libraries_create_v1',
  request: {
    body: { content: { 'application/json': { schema: LibraryInSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful Response',
      content: { 'application/json': { schema: LibraryOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1LibrariesLibraryIdRoute = createRoute({
  method: 'get',
  path: '/v1/libraries/{library_id}',
  tags: ['beta.libraries'],
  summary: 'Detailed information about a specific Library.',
  description: 'Given a library id, details information about that Library.',
  operationId: 'libraries_get_v1',
  request: {
    params: z.object({
      library_id: z
        .uuid()
        .openapi({
          param: {
            name: 'library_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Library Id', format: 'uuid' },
          },
          title: 'Library Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: LibraryOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const putV1LibrariesLibraryIdRoute = createRoute({
  method: 'put',
  path: '/v1/libraries/{library_id}',
  tags: ['beta.libraries'],
  summary: 'Update a library.',
  description: 'Given a library id, you can update the name and description.',
  operationId: 'libraries_update_v1',
  request: {
    params: z.object({
      library_id: z
        .uuid()
        .openapi({
          param: {
            name: 'library_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Library Id', format: 'uuid' },
          },
          title: 'Library Id',
        }),
    }),
    body: { content: { 'application/json': { schema: LibraryInUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: LibraryOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const deleteV1LibrariesLibraryIdRoute = createRoute({
  method: 'delete',
  path: '/v1/libraries/{library_id}',
  tags: ['beta.libraries'],
  summary: "Delete a library and all of it's document.",
  description:
    'Given a library id, deletes it together with all documents that have been uploaded to that library.',
  operationId: 'libraries_delete_v1',
  request: {
    params: z.object({
      library_id: z
        .uuid()
        .openapi({
          param: {
            name: 'library_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Library Id', format: 'uuid' },
          },
          title: 'Library Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: LibraryOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1LibrariesLibraryIdDocumentsRoute = createRoute({
  method: 'get',
  path: '/v1/libraries/{library_id}/documents',
  tags: ['beta.libraries.documents'],
  summary: 'List documents in a given library.',
  description: 'Given a library, lists the document that have been uploaded to that library.',
  operationId: 'libraries_documents_list_v1',
  request: {
    params: z.object({
      library_id: z
        .uuid()
        .openapi({
          param: {
            name: 'library_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Library Id', format: 'uuid' },
          },
          title: 'Library Id',
        }),
    }),
    query: z.object({
      search: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Search' },
          },
          title: 'Search',
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'page_size',
            in: 'query',
            required: false,
            schema: { type: 'integer', title: 'Page Size', maximum: 100, minimum: 1, default: 100 },
          },
          title: 'Page Size',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            required: false,
            schema: { type: 'integer', title: 'Page', minimum: 0, default: 0 },
          },
          title: 'Page',
        }),
      filters_attributes: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'filters_attributes',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Filters Attributes' },
          },
          title: 'Filters Attributes',
        }),
      sort_by: z
        .string()
        .default('created_at')
        .exactOptional()
        .openapi({
          param: {
            name: 'sort_by',
            in: 'query',
            required: false,
            schema: { type: 'string', title: 'Sort By', default: 'created_at' },
          },
          title: 'Sort By',
        }),
      sort_order: z
        .string()
        .default('desc')
        .exactOptional()
        .openapi({
          param: {
            name: 'sort_order',
            in: 'query',
            required: false,
            schema: { type: 'string', title: 'Sort Order', default: 'desc' },
          },
          title: 'Sort Order',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListDocumentOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1LibrariesLibraryIdDocumentsRoute = createRoute({
  method: 'post',
  path: '/v1/libraries/{library_id}/documents',
  tags: ['beta.libraries.documents'],
  summary: 'Upload a new document.',
  description:
    'Given a library, upload a new document to that library. It is queued for processing, it status will change it has been processed. The processing has to be completed in order be discoverable for the library search',
  operationId: 'libraries_documents_upload_v1',
  request: {
    params: z.object({
      library_id: z
        .uuid()
        .openapi({
          param: {
            name: 'library_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Library Id', format: 'uuid' },
          },
          title: 'Library Id',
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({ file: FileSchema })
            .openapi({ title: 'DocumentUpload', required: ['file'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'A document with the same hash was found in this library. Returns the existing document.',
      content: { 'application/json': { schema: DocumentOutSchema } },
    },
    201: {
      description: "Upload successful, returns the created document information's.",
      content: { 'application/json': { schema: DocumentOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1LibrariesLibraryIdDocumentsDocumentIdRoute = createRoute({
  method: 'get',
  path: '/v1/libraries/{library_id}/documents/{document_id}',
  tags: ['beta.libraries.documents'],
  summary: 'Retrieve the metadata of a specific document.',
  description:
    'Given a library and a document in this library, you can retrieve the metadata of that document.',
  operationId: 'libraries_documents_get_v1',
  request: {
    params: z.object({
      library_id: z
        .uuid()
        .openapi({
          param: {
            name: 'library_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Library Id', format: 'uuid' },
          },
          title: 'Library Id',
        }),
      document_id: z
        .uuid()
        .openapi({
          param: {
            name: 'document_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Document Id', format: 'uuid' },
          },
          title: 'Document Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DocumentOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const putV1LibrariesLibraryIdDocumentsDocumentIdRoute = createRoute({
  method: 'put',
  path: '/v1/libraries/{library_id}/documents/{document_id}',
  tags: ['beta.libraries.documents'],
  summary: 'Update the metadata of a specific document.',
  description: 'Given a library and a document in that library, update the name of that document.',
  operationId: 'libraries_documents_update_v1',
  request: {
    params: z.object({
      library_id: z
        .uuid()
        .openapi({
          param: {
            name: 'library_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Library Id', format: 'uuid' },
          },
          title: 'Library Id',
        }),
      document_id: z
        .uuid()
        .openapi({
          param: {
            name: 'document_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Document Id', format: 'uuid' },
          },
          title: 'Document Id',
        }),
    }),
    body: { content: { 'application/json': { schema: DocumentUpdateInSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DocumentOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const deleteV1LibrariesLibraryIdDocumentsDocumentIdRoute = createRoute({
  method: 'delete',
  path: '/v1/libraries/{library_id}/documents/{document_id}',
  tags: ['beta.libraries.documents'],
  summary: 'Delete a document.',
  description:
    'Given a library and a document in that library, delete that document. The document will be deleted from the library and the search index.',
  operationId: 'libraries_documents_delete_v1',
  request: {
    params: z.object({
      library_id: z
        .uuid()
        .openapi({
          param: {
            name: 'library_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Library Id', format: 'uuid' },
          },
          title: 'Library Id',
        }),
      document_id: z
        .uuid()
        .openapi({
          param: {
            name: 'document_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Document Id', format: 'uuid' },
          },
          title: 'Document Id',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1LibrariesLibraryIdDocumentsDocumentIdTextContentRoute = createRoute({
  method: 'get',
  path: '/v1/libraries/{library_id}/documents/{document_id}/text_content',
  tags: ['beta.libraries.documents'],
  summary: 'Retrieve the text content of a specific document.',
  description:
    'Given a library and a document in that library, you can retrieve the text content of that document if it exists. For documents like pdf, docx and pptx the text content results from our processing using Mistral OCR.',
  operationId: 'libraries_documents_get_text_content_v1',
  request: {
    params: z.object({
      library_id: z
        .uuid()
        .openapi({
          param: {
            name: 'library_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Library Id', format: 'uuid' },
          },
          title: 'Library Id',
        }),
      document_id: z
        .uuid()
        .openapi({
          param: {
            name: 'document_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Document Id', format: 'uuid' },
          },
          title: 'Document Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DocumentTextContentSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1LibrariesLibraryIdDocumentsDocumentIdStatusRoute = createRoute({
  method: 'get',
  path: '/v1/libraries/{library_id}/documents/{document_id}/status',
  tags: ['beta.libraries.documents'],
  summary: 'Retrieve the processing status of a specific document.',
  description:
    'Given a library and a document in that library, retrieve the processing status of that document.',
  operationId: 'libraries_documents_get_status_v1',
  request: {
    params: z.object({
      library_id: z
        .uuid()
        .openapi({
          param: {
            name: 'library_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Library Id', format: 'uuid' },
          },
          title: 'Library Id',
        }),
      document_id: z
        .uuid()
        .openapi({
          param: {
            name: 'document_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Document Id', format: 'uuid' },
          },
          title: 'Document Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ProcessingStatusOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1LibrariesLibraryIdDocumentsDocumentIdSignedUrlRoute = createRoute({
  method: 'get',
  path: '/v1/libraries/{library_id}/documents/{document_id}/signed-url',
  tags: ['beta.libraries.documents'],
  summary: 'Retrieve the signed URL of a specific document.',
  description:
    'Given a library and a document in that library, retrieve the signed URL of a specific document.The url will expire after 30 minutes and can be accessed by anyone with the link.',
  operationId: 'libraries_documents_get_signed_url_v1',
  request: {
    params: z.object({
      library_id: z
        .uuid()
        .openapi({
          param: {
            name: 'library_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Library Id', format: 'uuid' },
          },
          title: 'Library Id',
        }),
      document_id: z
        .uuid()
        .openapi({
          param: {
            name: 'document_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Document Id', format: 'uuid' },
          },
          title: 'Document Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z.string().openapi({ title: 'Response Libraries Documents Get Signed Url V1' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1LibrariesLibraryIdDocumentsDocumentIdExtractedTextSignedUrlRoute = createRoute({
  method: 'get',
  path: '/v1/libraries/{library_id}/documents/{document_id}/extracted-text-signed-url',
  tags: ['beta.libraries.documents'],
  summary: 'Retrieve the signed URL of text extracted from a given document.',
  description:
    'Given a library and a document in that library, retrieve the signed URL of text extracted. For documents that are sent to the OCR this returns the result of the OCR queries.',
  operationId: 'libraries_documents_get_extracted_text_signed_url_v1',
  request: {
    params: z.object({
      library_id: z
        .uuid()
        .openapi({
          param: {
            name: 'library_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Library Id', format: 'uuid' },
          },
          title: 'Library Id',
        }),
      document_id: z
        .uuid()
        .openapi({
          param: {
            name: 'document_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Document Id', format: 'uuid' },
          },
          title: 'Document Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .string()
            .openapi({ title: 'Response Libraries Documents Get Extracted Text Signed Url V1' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1LibrariesLibraryIdDocumentsDocumentIdReprocessRoute = createRoute({
  method: 'post',
  path: '/v1/libraries/{library_id}/documents/{document_id}/reprocess',
  tags: ['beta.libraries.documents'],
  summary: 'Reprocess a document.',
  description:
    'Given a library and a document in that library, reprocess that document, it will be billed again.',
  operationId: 'libraries_documents_reprocess_v1',
  request: {
    params: z.object({
      library_id: z
        .uuid()
        .openapi({
          param: {
            name: 'library_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Library Id', format: 'uuid' },
          },
          title: 'Library Id',
        }),
      document_id: z
        .uuid()
        .openapi({
          param: {
            name: 'document_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Document Id', format: 'uuid' },
          },
          title: 'Document Id',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1LibrariesLibraryIdShareRoute = createRoute({
  method: 'get',
  path: '/v1/libraries/{library_id}/share',
  tags: ['beta.libraries.accesses'],
  summary: 'List all of the access to this library.',
  description: 'Given a library, list all of the Entity that have access and to what level.',
  operationId: 'libraries_share_list_v1',
  request: {
    params: z.object({
      library_id: z
        .uuid()
        .openapi({
          param: {
            name: 'library_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Library Id', format: 'uuid' },
          },
          title: 'Library Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListSharingOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const putV1LibrariesLibraryIdShareRoute = createRoute({
  method: 'put',
  path: '/v1/libraries/{library_id}/share',
  tags: ['beta.libraries.accesses'],
  summary: 'Create or update an access level.',
  description:
    'Given a library id, you can create or update the access level of an entity. You have to be owner of the library to share a library. An owner cannot change their own role. A library cannot be shared outside of the organization.',
  operationId: 'libraries_share_create_v1',
  request: {
    params: z.object({
      library_id: z
        .uuid()
        .openapi({
          param: {
            name: 'library_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Library Id', format: 'uuid' },
          },
          title: 'Library Id',
        }),
    }),
    body: { content: { 'application/json': { schema: SharingInSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: SharingOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const deleteV1LibrariesLibraryIdShareRoute = createRoute({
  method: 'delete',
  path: '/v1/libraries/{library_id}/share',
  tags: ['beta.libraries.accesses'],
  summary: 'Delete an access level.',
  description:
    "Given a library id, you can delete the access level of an entity. An owner cannot delete it's own access. You have to be the owner of the library to delete an acces other than yours.",
  operationId: 'libraries_share_delete_v1',
  request: {
    params: z.object({
      library_id: z
        .uuid()
        .openapi({
          param: {
            name: 'library_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Library Id', format: 'uuid' },
          },
          title: 'Library Id',
        }),
    }),
    body: { content: { 'application/json': { schema: SharingDeleteSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: SharingOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1ObservabilityChatCompletionEventsSearchRoute = createRoute({
  method: 'post',
  path: '/v1/observability/chat-completion-events/search',
  tags: ['beta.observability.chat_completion_events'],
  summary: 'Get Chat Completion Events',
  operationId: 'get_chat_completion_events_v1_observability_chat_completion_events_search_post',
  request: {
    query: z.object({
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(100),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'page_size',
            in: 'query',
            required: false,
            schema: { type: 'integer', title: 'Page Size', maximum: 100, minimum: 0, default: 50 },
          },
          title: 'Page Size',
        }),
      cursor: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Cursor' },
          },
          title: 'Cursor',
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetChatCompletionEventsInSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ChatCompletionEventsSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const postV1ObservabilityChatCompletionEventsSearchIdsRoute = createRoute({
  method: 'post',
  path: '/v1/observability/chat-completion-events/search-ids',
  tags: ['beta.observability.chat_completion_events'],
  summary: 'Alternative to /search that returns only the IDs and that can return many IDs at once',
  operationId:
    'get_chat_completion_event_ids_v1_observability_chat_completion_events_search_ids_post',
  request: {
    body: {
      content: { 'application/json': { schema: GetChatCompletionEventIdsInSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ChatCompletionEventIdsSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const getV1ObservabilityChatCompletionEventsEventIdRoute = createRoute({
  method: 'get',
  path: '/v1/observability/chat-completion-events/{event_id}',
  tags: ['beta.observability.chat_completion_events'],
  summary: 'Get Chat Completion Event',
  operationId: 'get_chat_completion_event_v1_observability_chat_completion_events__event_id__get',
  request: {
    params: z.object({
      event_id: z
        .uuid()
        .openapi({
          param: {
            name: 'event_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Event Id', format: 'uuid' },
          },
          title: 'Event Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ChatCompletionEventSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const getV1ObservabilityChatCompletionEventsEventIdSimilarEventsRoute = createRoute({
  method: 'get',
  path: '/v1/observability/chat-completion-events/{event_id}/similar-events',
  tags: ['beta.observability.chat_completion_events'],
  summary: 'Get Similar Chat Completion Events',
  operationId:
    'get_similar_chat_completion_events_v1_observability_chat_completion_events__event_id__similar_events_get',
  request: {
    params: z.object({
      event_id: z
        .uuid()
        .openapi({
          param: {
            name: 'event_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Event Id', format: 'uuid' },
          },
          title: 'Event Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ChatCompletionEventsSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const getV1ObservabilityChatCompletionFieldsRoute = createRoute({
  method: 'get',
  path: '/v1/observability/chat-completion-fields',
  tags: ['beta.observability.chat_completion_events.fields'],
  summary: 'Get Chat Completion Fields',
  operationId: 'get_chat_completion_fields_v1_observability_chat_completion_fields_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ChatCompletionFieldsSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const getV1ObservabilityChatCompletionFieldsFieldNameOptionsRoute = createRoute({
  method: 'get',
  path: '/v1/observability/chat-completion-fields/{field_name}/options',
  tags: ['beta.observability.chat_completion_events.fields'],
  summary: 'Get Chat Completion Field Options',
  operationId:
    'get_chat_completion_field_options_v1_observability_chat_completion_fields__field_name__options_get',
  request: {
    params: z.object({
      field_name: z
        .string()
        .openapi({
          param: {
            name: 'field_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Field Name' },
          },
          title: 'Field Name',
        }),
    }),
    query: z.object({
      operator: z
        .enum([
          'lt',
          'lte',
          'gt',
          'gte',
          'startswith',
          'istartswith',
          'endswith',
          'iendswith',
          'contains',
          'icontains',
          'matches',
          'notcontains',
          'inotcontains',
          'eq',
          'neq',
          'isnull',
          'includes',
          'excludes',
          'len_eq',
        ])
        .openapi({
          param: {
            name: 'operator',
            in: 'query',
            description: 'The operator to use for filtering options',
            required: true,
            schema: {
              type: 'string',
              title: 'Operator',
              enum: [
                'lt',
                'lte',
                'gt',
                'gte',
                'startswith',
                'istartswith',
                'endswith',
                'iendswith',
                'contains',
                'icontains',
                'matches',
                'notcontains',
                'inotcontains',
                'eq',
                'neq',
                'isnull',
                'includes',
                'excludes',
                'len_eq',
              ],
              description: 'The operator to use for filtering options',
            },
          },
          title: 'Operator',
          description: 'The operator to use for filtering options',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ChatCompletionFieldOptionsSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const postV1ObservabilityChatCompletionFieldsFieldNameOptionsCountsRoute = createRoute({
  method: 'post',
  path: '/v1/observability/chat-completion-fields/{field_name}/options-counts',
  tags: ['beta.observability.chat_completion_events.fields'],
  summary: 'Get Chat Completion Field Options Counts',
  operationId:
    'get_chat_completion_field_options_counts_v1_observability_chat_completion_fields__field_name__options_counts_post',
  request: {
    params: z.object({
      field_name: z
        .string()
        .openapi({
          param: {
            name: 'field_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Field Name' },
          },
          title: 'Field Name',
        }),
    }),
    body: {
      content: { 'application/json': { schema: FieldOptionCountsInSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: FieldOptionCountsSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const postV1ObservabilityChatCompletionEventsEventIdLiveJudgingRoute = createRoute({
  method: 'post',
  path: '/v1/observability/chat-completion-events/{event_id}/live-judging',
  tags: ['beta.observability.chat_completion_events'],
  summary: 'Run Judge on an event based on the given options',
  operationId:
    'judge_chat_completion_event_v1_observability_chat_completion_events__event_id__live_judging_post',
  request: {
    params: z.object({
      event_id: z
        .uuid()
        .openapi({
          param: {
            name: 'event_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Event Id', format: 'uuid' },
          },
          title: 'Event Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: PostChatCompletionEventJudgingInSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: JudgeOutputSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const getV1ObservabilityJudgesRoute = createRoute({
  method: 'get',
  path: '/v1/observability/judges',
  tags: ['beta.observability.judges'],
  summary: 'Get judges with optional filtering and search',
  operationId: 'get_judges_v1_observability_judges_get',
  request: {
    query: z.object({
      type_filter: z
        .union([
          z.array(JudgeOutputTypeSchema),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'type_filter',
            in: 'query',
            description: 'Filter by judge output types',
            required: false,
            schema: {
              anyOf: [
                { type: 'array', items: { $ref: '#/components/schemas/JudgeOutputType' } },
                { type: 'null' },
              ],
              title: 'Type Filter',
              description: 'Filter by judge output types',
            },
          },
          title: 'Type Filter',
          description: 'Filter by judge output types',
        }),
      model_filter: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'model_filter',
            in: 'query',
            description: 'Filter by model names',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              title: 'Model Filter',
              description: 'Filter by model names',
            },
          },
          title: 'Model Filter',
          description: 'Filter by model names',
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(100),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'page_size',
            in: 'query',
            required: false,
            schema: { type: 'integer', title: 'Page Size', maximum: 100, minimum: 0, default: 50 },
          },
          title: 'Page Size',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            required: false,
            schema: { type: 'integer', title: 'Page', default: 1 },
          },
          title: 'Page',
        }),
      q: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'q',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Q' },
          },
          title: 'Q',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: JudgePreviewsSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const postV1ObservabilityJudgesRoute = createRoute({
  method: 'post',
  path: '/v1/observability/judges',
  tags: ['beta.observability.judges'],
  summary: 'Create a new judge',
  operationId: 'create_judge_v1_observability_judges_post',
  request: {
    body: { content: { 'application/json': { schema: PostJudgeInSchemaSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful Response',
      content: { 'application/json': { schema: JudgePreviewSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const getV1ObservabilityJudgesJudgeIdRoute = createRoute({
  method: 'get',
  path: '/v1/observability/judges/{judge_id}',
  tags: ['beta.observability.judges'],
  summary: 'Get judge by id',
  operationId: 'get_judge_by_id_v1_observability_judges__judge_id__get',
  request: {
    params: z.object({
      judge_id: z
        .uuid()
        .openapi({
          param: {
            name: 'judge_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Judge Id', format: 'uuid' },
          },
          title: 'Judge Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: JudgePreviewSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const putV1ObservabilityJudgesJudgeIdRoute = createRoute({
  method: 'put',
  path: '/v1/observability/judges/{judge_id}',
  tags: ['beta.observability.judges'],
  summary: 'Update a judge',
  operationId: 'update_judge_v1_observability_judges__judge_id__put',
  request: {
    params: z.object({
      judge_id: z
        .uuid()
        .openapi({
          param: {
            name: 'judge_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Judge Id', format: 'uuid' },
          },
          title: 'Judge Id',
        }),
    }),
    body: { content: { 'application/json': { schema: PutJudgeInSchemaSchema } }, required: true },
  },
  responses: {
    204: { description: 'Successful Response' },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const deleteV1ObservabilityJudgesJudgeIdRoute = createRoute({
  method: 'delete',
  path: '/v1/observability/judges/{judge_id}',
  tags: ['beta.observability.judges'],
  summary: 'Delete a judge',
  operationId: 'delete_judge_v1_observability_judges__judge_id__delete',
  request: {
    params: z.object({
      judge_id: z
        .uuid()
        .openapi({
          param: {
            name: 'judge_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Judge Id', format: 'uuid' },
          },
          title: 'Judge Id',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const postV1ObservabilityJudgesJudgeIdLiveJudgingRoute = createRoute({
  method: 'post',
  path: '/v1/observability/judges/{judge_id}/live-judging',
  tags: ['beta.observability.judges'],
  summary: 'Run a saved judge on a conversation',
  operationId: 'judge_conversation_v1_observability_judges__judge_id__live_judging_post',
  request: {
    params: z.object({
      judge_id: z
        .uuid()
        .openapi({
          param: {
            name: 'judge_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Judge Id', format: 'uuid' },
          },
          title: 'Judge Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: JudgeConversationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: JudgeOutputSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const getV1ObservabilityCampaignsRoute = createRoute({
  method: 'get',
  path: '/v1/observability/campaigns',
  tags: ['beta.observability.campaigns'],
  summary: 'Get all campaigns',
  operationId: 'get_campaigns_v1_observability_campaigns_get',
  request: {
    query: z.object({
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(100),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'page_size',
            in: 'query',
            required: false,
            schema: { type: 'integer', title: 'Page Size', maximum: 100, minimum: 0, default: 50 },
          },
          title: 'Page Size',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            required: false,
            schema: { type: 'integer', title: 'Page', default: 1 },
          },
          title: 'Page',
        }),
      q: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'q',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Q' },
          },
          title: 'Q',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: CampaignPreviewsSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const postV1ObservabilityCampaignsRoute = createRoute({
  method: 'post',
  path: '/v1/observability/campaigns',
  tags: ['beta.observability.campaigns'],
  summary: 'Create and start a new campaign',
  operationId: 'create_campaign_v1_observability_campaigns_post',
  request: {
    body: {
      content: { 'application/json': { schema: PostCampaignInSchemaSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful Response',
      content: { 'application/json': { schema: CampaignPreviewSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const getV1ObservabilityCampaignsCampaignIdRoute = createRoute({
  method: 'get',
  path: '/v1/observability/campaigns/{campaign_id}',
  tags: ['beta.observability.campaigns'],
  summary: 'Get campaign by id',
  operationId: 'get_campaign_by_id_v1_observability_campaigns__campaign_id__get',
  request: {
    params: z.object({
      campaign_id: z
        .uuid()
        .openapi({
          param: {
            name: 'campaign_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Campaign Id', format: 'uuid' },
          },
          title: 'Campaign Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: CampaignPreviewSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const deleteV1ObservabilityCampaignsCampaignIdRoute = createRoute({
  method: 'delete',
  path: '/v1/observability/campaigns/{campaign_id}',
  tags: ['beta.observability.campaigns'],
  summary: 'Delete a campaign',
  operationId: 'delete_campaign_v1_observability_campaigns__campaign_id__delete',
  request: {
    params: z.object({
      campaign_id: z
        .uuid()
        .openapi({
          param: {
            name: 'campaign_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Campaign Id', format: 'uuid' },
          },
          title: 'Campaign Id',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const getV1ObservabilityCampaignsCampaignIdStatusRoute = createRoute({
  method: 'get',
  path: '/v1/observability/campaigns/{campaign_id}/status',
  tags: ['beta.observability.campaigns'],
  summary: 'Get campaign status by campaign id',
  operationId: 'get_campaign_status_by_id_v1_observability_campaigns__campaign_id__status_get',
  request: {
    params: z.object({
      campaign_id: z
        .uuid()
        .openapi({
          param: {
            name: 'campaign_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Campaign Id', format: 'uuid' },
          },
          title: 'Campaign Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: CampaignStatusSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const getV1ObservabilityCampaignsCampaignIdSelectedEventsRoute = createRoute({
  method: 'get',
  path: '/v1/observability/campaigns/{campaign_id}/selected-events',
  tags: ['beta.observability.campaigns'],
  summary: 'Get event ids that were selected by the given campaign',
  operationId:
    'get_campaign_selected_events_v1_observability_campaigns__campaign_id__selected_events_get',
  request: {
    params: z.object({
      campaign_id: z
        .uuid()
        .openapi({
          param: {
            name: 'campaign_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Campaign Id', format: 'uuid' },
          },
          title: 'Campaign Id',
        }),
    }),
    query: z.object({
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(100),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'page_size',
            in: 'query',
            required: false,
            schema: { type: 'integer', title: 'Page Size', maximum: 100, minimum: 0, default: 50 },
          },
          title: 'Page Size',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            required: false,
            schema: { type: 'integer', title: 'Page', default: 1 },
          },
          title: 'Page',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: CampaignSelectedEventsSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const getV1ObservabilityDatasetsRoute = createRoute({
  method: 'get',
  path: '/v1/observability/datasets',
  tags: ['beta.observability.datasets'],
  summary: 'List existing datasets',
  operationId: 'get_datasets_v1_observability_datasets_get',
  request: {
    query: z.object({
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(100),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'page_size',
            in: 'query',
            required: false,
            schema: { type: 'integer', title: 'Page Size', maximum: 100, minimum: 0, default: 50 },
          },
          title: 'Page Size',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            required: false,
            schema: { type: 'integer', title: 'Page', default: 1 },
          },
          title: 'Page',
        }),
      q: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'q',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Q' },
          },
          title: 'Q',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DatasetPreviewsSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const postV1ObservabilityDatasetsRoute = createRoute({
  method: 'post',
  path: '/v1/observability/datasets',
  tags: ['beta.observability.datasets'],
  summary: 'Create a new empty dataset',
  operationId: 'create_dataset_v1_observability_datasets_post',
  request: {
    body: {
      content: { 'application/json': { schema: PostDatasetInSchemaSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DatasetSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const getV1ObservabilityDatasetsDatasetIdRoute = createRoute({
  method: 'get',
  path: '/v1/observability/datasets/{dataset_id}',
  tags: ['beta.observability.datasets'],
  summary: 'Get dataset by id',
  operationId: 'get_dataset_by_id_v1_observability_datasets__dataset_id__get',
  request: {
    params: z.object({
      dataset_id: z
        .uuid()
        .openapi({
          param: {
            name: 'dataset_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dataset Id', format: 'uuid' },
          },
          title: 'Dataset Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DatasetPreviewSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const deleteV1ObservabilityDatasetsDatasetIdRoute = createRoute({
  method: 'delete',
  path: '/v1/observability/datasets/{dataset_id}',
  tags: ['beta.observability.datasets'],
  summary: 'Delete a dataset',
  operationId: 'delete_dataset_v1_observability_datasets__dataset_id__delete',
  request: {
    params: z.object({
      dataset_id: z
        .uuid()
        .openapi({
          param: {
            name: 'dataset_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dataset Id', format: 'uuid' },
          },
          title: 'Dataset Id',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const patchV1ObservabilityDatasetsDatasetIdRoute = createRoute({
  method: 'patch',
  path: '/v1/observability/datasets/{dataset_id}',
  tags: ['beta.observability.datasets'],
  summary: 'Patch dataset',
  operationId: 'update_dataset_v1_observability_datasets__dataset_id__patch',
  request: {
    params: z.object({
      dataset_id: z
        .uuid()
        .openapi({
          param: {
            name: 'dataset_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dataset Id', format: 'uuid' },
          },
          title: 'Dataset Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: PatchDatasetInSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DatasetPreviewSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const getV1ObservabilityDatasetsDatasetIdRecordsRoute = createRoute({
  method: 'get',
  path: '/v1/observability/datasets/{dataset_id}/records',
  tags: ['beta.observability.datasets'],
  summary: 'List existing records in the dataset',
  operationId: 'get_dataset_records_v1_observability_datasets__dataset_id__records_get',
  request: {
    params: z.object({
      dataset_id: z
        .uuid()
        .openapi({
          param: {
            name: 'dataset_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dataset Id', format: 'uuid' },
          },
          title: 'Dataset Id',
        }),
    }),
    query: z.object({
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(100),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'page_size',
            in: 'query',
            required: false,
            schema: { type: 'integer', title: 'Page Size', maximum: 100, minimum: 0, default: 50 },
          },
          title: 'Page Size',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            required: false,
            schema: { type: 'integer', title: 'Page', default: 1 },
          },
          title: 'Page',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DatasetRecordsSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const postV1ObservabilityDatasetsDatasetIdRecordsRoute = createRoute({
  method: 'post',
  path: '/v1/observability/datasets/{dataset_id}/records',
  tags: ['beta.observability.datasets'],
  summary: 'Add a conversation to the dataset',
  operationId: 'create_dataset_record_v1_observability_datasets__dataset_id__records_post',
  request: {
    params: z.object({
      dataset_id: z
        .uuid()
        .openapi({
          param: {
            name: 'dataset_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dataset Id', format: 'uuid' },
          },
          title: 'Dataset Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: PostDatasetRecordInSchemaSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DatasetRecordSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const postV1ObservabilityDatasetsDatasetIdImportsFromCampaignRoute = createRoute({
  method: 'post',
  path: '/v1/observability/datasets/{dataset_id}/imports/from-campaign',
  tags: ['beta.observability.datasets'],
  summary: 'Populate the dataset with a campaign',
  operationId:
    'post_dataset_records_from_campaign_v1_observability_datasets__dataset_id__imports_from_campaign_post',
  request: {
    params: z.object({
      dataset_id: z
        .uuid()
        .openapi({
          param: {
            name: 'dataset_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dataset Id', format: 'uuid' },
          },
          title: 'Dataset Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: PostDatasetImportFromCampaignInSchemaSchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DatasetImportTaskSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const postV1ObservabilityDatasetsDatasetIdImportsFromExplorerRoute = createRoute({
  method: 'post',
  path: '/v1/observability/datasets/{dataset_id}/imports/from-explorer',
  tags: ['beta.observability.datasets'],
  summary: 'Populate the dataset with samples from the explorer',
  operationId:
    'post_dataset_records_from_explorer_v1_observability_datasets__dataset_id__imports_from_explorer_post',
  request: {
    params: z.object({
      dataset_id: z
        .uuid()
        .openapi({
          param: {
            name: 'dataset_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dataset Id', format: 'uuid' },
          },
          title: 'Dataset Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: PostDatasetImportFromExplorerInSchemaSchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DatasetImportTaskSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const postV1ObservabilityDatasetsDatasetIdImportsFromFileRoute = createRoute({
  method: 'post',
  path: '/v1/observability/datasets/{dataset_id}/imports/from-file',
  tags: ['beta.observability.datasets'],
  summary: 'Populate the dataset with samples from an uploaded file',
  operationId:
    'post_dataset_records_from_file_v1_observability_datasets__dataset_id__imports_from_file_post',
  request: {
    params: z.object({
      dataset_id: z
        .uuid()
        .openapi({
          param: {
            name: 'dataset_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dataset Id', format: 'uuid' },
          },
          title: 'Dataset Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: PostDatasetImportFromFileInSchemaSchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DatasetImportTaskSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const postV1ObservabilityDatasetsDatasetIdImportsFromPlaygroundRoute = createRoute({
  method: 'post',
  path: '/v1/observability/datasets/{dataset_id}/imports/from-playground',
  tags: ['beta.observability.datasets'],
  summary: 'Populate the dataset with samples from the playground',
  operationId:
    'post_dataset_records_from_playground_v1_observability_datasets__dataset_id__imports_from_playground_post',
  request: {
    params: z.object({
      dataset_id: z
        .uuid()
        .openapi({
          param: {
            name: 'dataset_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dataset Id', format: 'uuid' },
          },
          title: 'Dataset Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: PostDatasetImportFromPlaygroundInSchemaSchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DatasetImportTaskSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const postV1ObservabilityDatasetsDatasetIdImportsFromDatasetRoute = createRoute({
  method: 'post',
  path: '/v1/observability/datasets/{dataset_id}/imports/from-dataset',
  tags: ['beta.observability.datasets'],
  summary: 'Populate the dataset with samples from another dataset',
  operationId:
    'post_dataset_records_from_dataset_v1_observability_datasets__dataset_id__imports_from_dataset_post',
  request: {
    params: z.object({
      dataset_id: z
        .uuid()
        .openapi({
          param: {
            name: 'dataset_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dataset Id', format: 'uuid' },
          },
          title: 'Dataset Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: PostDatasetImportFromDatasetInSchemaSchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DatasetImportTaskSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const getV1ObservabilityDatasetsDatasetIdExportsToJsonlRoute = createRoute({
  method: 'get',
  path: '/v1/observability/datasets/{dataset_id}/exports/to-jsonl',
  tags: ['beta.observability.datasets'],
  summary:
    'Export to the Files API and retrieve presigned URL to download the resulting JSONL file',
  operationId:
    'export_dataset_to_jsonl_v1_observability_datasets__dataset_id__exports_to_jsonl_get',
  request: {
    params: z.object({
      dataset_id: z
        .uuid()
        .openapi({
          param: {
            name: 'dataset_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dataset Id', format: 'uuid' },
          },
          title: 'Dataset Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DatasetExportSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const getV1ObservabilityDatasetsDatasetIdTasksTaskIdRoute = createRoute({
  method: 'get',
  path: '/v1/observability/datasets/{dataset_id}/tasks/{task_id}',
  tags: ['beta.observability.datasets'],
  summary: 'Get status of a dataset import task',
  operationId: 'get_dataset_import_task_v1_observability_datasets__dataset_id__tasks__task_id__get',
  request: {
    params: z.object({
      dataset_id: z
        .uuid()
        .openapi({
          param: {
            name: 'dataset_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dataset Id', format: 'uuid' },
          },
          title: 'Dataset Id',
        }),
      task_id: z
        .uuid()
        .openapi({
          param: {
            name: 'task_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Task Id', format: 'uuid' },
          },
          title: 'Task Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DatasetImportTaskSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const getV1ObservabilityDatasetsDatasetIdTasksRoute = createRoute({
  method: 'get',
  path: '/v1/observability/datasets/{dataset_id}/tasks',
  tags: ['beta.observability.datasets'],
  summary: 'List import tasks for the given dataset',
  operationId: 'get_dataset_import_tasks_v1_observability_datasets__dataset_id__tasks_get',
  request: {
    params: z.object({
      dataset_id: z
        .uuid()
        .openapi({
          param: {
            name: 'dataset_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dataset Id', format: 'uuid' },
          },
          title: 'Dataset Id',
        }),
    }),
    query: z.object({
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(100),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'page_size',
            in: 'query',
            required: false,
            schema: { type: 'integer', title: 'Page Size', maximum: 100, minimum: 0, default: 50 },
          },
          title: 'Page Size',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            required: false,
            schema: { type: 'integer', title: 'Page', default: 1 },
          },
          title: 'Page',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DatasetImportTasksSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const getV1ObservabilityDatasetRecordsDatasetRecordIdRoute = createRoute({
  method: 'get',
  path: '/v1/observability/dataset-records/{dataset_record_id}',
  tags: ['beta.observability.datasets.records'],
  summary: 'Get the content of a given conversation from a dataset',
  operationId: 'get_dataset_record_v1_observability_dataset_records__dataset_record_id__get',
  request: {
    params: z.object({
      dataset_record_id: z
        .uuid()
        .openapi({
          param: {
            name: 'dataset_record_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dataset Record Id', format: 'uuid' },
          },
          title: 'Dataset Record Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DatasetRecordSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const deleteV1ObservabilityDatasetRecordsDatasetRecordIdRoute = createRoute({
  method: 'delete',
  path: '/v1/observability/dataset-records/{dataset_record_id}',
  tags: ['beta.observability.datasets.records'],
  summary: 'Delete a record from a dataset',
  operationId: 'delete_dataset_record_v1_observability_dataset_records__dataset_record_id__delete',
  request: {
    params: z.object({
      dataset_record_id: z
        .uuid()
        .openapi({
          param: {
            name: 'dataset_record_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dataset Record Id', format: 'uuid' },
          },
          title: 'Dataset Record Id',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const postV1ObservabilityDatasetRecordsBulkDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/observability/dataset-records/bulk-delete',
  tags: ['beta.observability.datasets.records'],
  summary: 'Delete multiple records from datasets',
  operationId: 'delete_dataset_records_v1_observability_dataset_records_bulk_delete_post',
  request: {
    body: {
      content: { 'application/json': { schema: DeleteDatasetRecordsInSchemaSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Successful Response' },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const postV1ObservabilityDatasetRecordsDatasetRecordIdLiveJudgingRoute = createRoute({
  method: 'post',
  path: '/v1/observability/dataset-records/{dataset_record_id}/live-judging',
  tags: ['beta.observability.datasets.records'],
  summary: 'Run Judge on a dataset record based on the given options',
  operationId:
    'judge_dataset_record_v1_observability_dataset_records__dataset_record_id__live_judging_post',
  request: {
    params: z.object({
      dataset_record_id: z
        .uuid()
        .openapi({
          param: {
            name: 'dataset_record_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dataset Record Id', format: 'uuid' },
          },
          title: 'Dataset Record Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: PostDatasetRecordJudgingInSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: JudgeOutputSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const putV1ObservabilityDatasetRecordsDatasetRecordIdPayloadRoute = createRoute({
  method: 'put',
  path: '/v1/observability/dataset-records/{dataset_record_id}/payload',
  tags: ['beta.observability.datasets.records'],
  summary: 'Update a dataset record conversation payload',
  operationId:
    'update_dataset_record_payload_v1_observability_dataset_records__dataset_record_id__payload_put',
  request: {
    params: z.object({
      dataset_record_id: z
        .uuid()
        .openapi({
          param: {
            name: 'dataset_record_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dataset Record Id', format: 'uuid' },
          },
          title: 'Dataset Record Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutDatasetRecordPayloadInSchemaSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Successful Response' },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const putV1ObservabilityDatasetRecordsDatasetRecordIdPropertiesRoute = createRoute({
  method: 'put',
  path: '/v1/observability/dataset-records/{dataset_record_id}/properties',
  tags: ['beta.observability.datasets.records'],
  summary: 'Update conversation properties',
  operationId:
    'update_dataset_record_properties_v1_observability_dataset_records__dataset_record_id__properties_put',
  request: {
    params: z.object({
      dataset_record_id: z
        .uuid()
        .openapi({
          param: {
            name: 'dataset_record_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dataset Record Id', format: 'uuid' },
          },
          title: 'Dataset Record Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutDatasetRecordPropertiesInSchemaSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Successful Response' },
    400: {
      description: 'Bad Request - Invalid request parameters or data',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    404: {
      description: 'Not Found - Resource does not exist',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    408: {
      description: 'Request Timeout - Operation timed out',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    409: {
      description: 'Conflict - Resource conflict',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - Validation error',
      content: { 'application/json': { schema: ObservabilityErrorSchema } },
    },
  },
})

export const getV1WorkflowsExecutionsExecutionIdRoute = createRoute({
  method: 'get',
  path: '/v1/workflows/executions/{execution_id}',
  tags: ['beta.workflows.executions'],
  summary: 'Get Workflow Execution',
  operationId: 'get_workflow_execution_v1_workflows_executions__execution_id__get',
  request: {
    params: z.object({
      execution_id: z
        .string()
        .openapi({
          param: {
            name: 'execution_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Execution Id' },
          },
          title: 'Execution Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: WorkflowExecutionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1WorkflowsExecutionsExecutionIdHistoryRoute = createRoute({
  method: 'get',
  path: '/v1/workflows/executions/{execution_id}/history',
  tags: ['beta.workflows.executions'],
  summary: 'Get Workflow Execution History',
  operationId: 'get_workflow_execution_history_v1_workflows_executions__execution_id__history_get',
  request: {
    params: z.object({
      execution_id: z
        .string()
        .openapi({
          param: {
            name: 'execution_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Execution Id' },
          },
          title: 'Execution Id',
        }),
    }),
    query: z.object({
      decode_payloads: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'decode_payloads',
            in: 'query',
            required: false,
            schema: { type: 'boolean', title: 'Decode Payloads', default: false },
          },
          title: 'Decode Payloads',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1WorkflowsExecutionsExecutionIdSignalsRoute = createRoute({
  method: 'post',
  path: '/v1/workflows/executions/{execution_id}/signals',
  tags: ['beta.workflows.executions'],
  summary: 'Signal Workflow Execution',
  operationId: 'signal_workflow_execution_v1_workflows_executions__execution_id__signals_post',
  request: {
    params: z.object({
      execution_id: z
        .string()
        .openapi({
          param: {
            name: 'execution_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Execution Id' },
          },
          title: 'Execution Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: SignalInvocationBodySchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Successful Response',
      content: { 'application/json': { schema: SignalWorkflowResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1WorkflowsExecutionsExecutionIdQueriesRoute = createRoute({
  method: 'post',
  path: '/v1/workflows/executions/{execution_id}/queries',
  tags: ['beta.workflows.executions'],
  summary: 'Query Workflow Execution',
  operationId: 'query_workflow_execution_v1_workflows_executions__execution_id__queries_post',
  request: {
    params: z.object({
      execution_id: z
        .string()
        .openapi({
          param: {
            name: 'execution_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Execution Id' },
          },
          title: 'Execution Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: QueryInvocationBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: QueryWorkflowResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1WorkflowsExecutionsExecutionIdTerminateRoute = createRoute({
  method: 'post',
  path: '/v1/workflows/executions/{execution_id}/terminate',
  tags: ['beta.workflows.executions'],
  summary: 'Terminate Workflow Execution',
  operationId: 'terminate_workflow_execution_v1_workflows_executions__execution_id__terminate_post',
  request: {
    params: z.object({
      execution_id: z
        .string()
        .openapi({
          param: {
            name: 'execution_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Execution Id' },
          },
          title: 'Execution Id',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1WorkflowsExecutionsTerminateRoute = createRoute({
  method: 'post',
  path: '/v1/workflows/executions/terminate',
  tags: ['beta.workflows.executions'],
  summary: 'Batch Terminate Workflow Executions',
  operationId: 'batch_terminate_workflow_executions_v1_workflows_executions_terminate_post',
  request: {
    body: { content: { 'application/json': { schema: BatchExecutionBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: BatchExecutionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1WorkflowsExecutionsExecutionIdCancelRoute = createRoute({
  method: 'post',
  path: '/v1/workflows/executions/{execution_id}/cancel',
  tags: ['beta.workflows.executions'],
  summary: 'Cancel Workflow Execution',
  operationId: 'cancel_workflow_execution_v1_workflows_executions__execution_id__cancel_post',
  request: {
    params: z.object({
      execution_id: z
        .string()
        .openapi({
          param: {
            name: 'execution_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Execution Id' },
          },
          title: 'Execution Id',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1WorkflowsExecutionsCancelRoute = createRoute({
  method: 'post',
  path: '/v1/workflows/executions/cancel',
  tags: ['beta.workflows.executions'],
  summary: 'Batch Cancel Workflow Executions',
  operationId: 'batch_cancel_workflow_executions_v1_workflows_executions_cancel_post',
  request: {
    body: { content: { 'application/json': { schema: BatchExecutionBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: BatchExecutionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1WorkflowsExecutionsExecutionIdResetRoute = createRoute({
  method: 'post',
  path: '/v1/workflows/executions/{execution_id}/reset',
  tags: ['beta.workflows.executions'],
  summary: 'Reset Workflow',
  operationId: 'reset_workflow_v1_workflows_executions__execution_id__reset_post',
  request: {
    params: z.object({
      execution_id: z
        .string()
        .openapi({
          param: {
            name: 'execution_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Execution Id' },
          },
          title: 'Execution Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: ResetInvocationBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Successful Response' },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1WorkflowsExecutionsExecutionIdUpdatesRoute = createRoute({
  method: 'post',
  path: '/v1/workflows/executions/{execution_id}/updates',
  tags: ['beta.workflows.executions'],
  summary: 'Update Workflow Execution',
  operationId: 'update_workflow_execution_v1_workflows_executions__execution_id__updates_post',
  request: {
    params: z.object({
      execution_id: z
        .string()
        .openapi({
          param: {
            name: 'execution_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Execution Id' },
          },
          title: 'Execution Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateInvocationBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: UpdateWorkflowResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1WorkflowsExecutionsExecutionIdTraceOtelRoute = createRoute({
  method: 'get',
  path: '/v1/workflows/executions/{execution_id}/trace/otel',
  tags: ['beta.workflows.executions'],
  summary: 'Get Workflow Execution Trace Otel',
  operationId: 'get_workflow_execution_trace_otel',
  request: {
    params: z.object({
      execution_id: z
        .string()
        .openapi({
          param: {
            name: 'execution_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Execution Id' },
          },
          title: 'Execution Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: WorkflowExecutionTraceOTelResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1WorkflowsExecutionsExecutionIdTraceSummaryRoute = createRoute({
  method: 'get',
  path: '/v1/workflows/executions/{execution_id}/trace/summary',
  tags: ['beta.workflows.executions'],
  summary: 'Get Workflow Execution Trace Summary',
  operationId: 'get_workflow_execution_trace_summary',
  request: {
    params: z.object({
      execution_id: z
        .string()
        .openapi({
          param: {
            name: 'execution_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Execution Id' },
          },
          title: 'Execution Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: WorkflowExecutionTraceSummaryResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1WorkflowsExecutionsExecutionIdTraceEventsRoute = createRoute({
  method: 'get',
  path: '/v1/workflows/executions/{execution_id}/trace/events',
  tags: ['beta.workflows.executions'],
  summary: 'Get Workflow Execution Trace Events',
  operationId: 'get_workflow_execution_trace_events',
  request: {
    params: z.object({
      execution_id: z
        .string()
        .openapi({
          param: {
            name: 'execution_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Execution Id' },
          },
          title: 'Execution Id',
        }),
    }),
    query: z.object({
      merge_same_id_events: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'merge_same_id_events',
            in: 'query',
            required: false,
            schema: { type: 'boolean', title: 'Merge Same Id Events', default: false },
          },
          title: 'Merge Same Id Events',
        }),
      include_internal_events: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'include_internal_events',
            in: 'query',
            required: false,
            schema: { type: 'boolean', title: 'Include Internal Events', default: false },
          },
          title: 'Include Internal Events',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: WorkflowExecutionTraceEventsResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1WorkflowsExecutionsExecutionIdStreamRoute = createRoute({
  method: 'get',
  path: '/v1/workflows/executions/{execution_id}/stream',
  tags: ['beta.workflows.executions'],
  summary: 'Stream',
  operationId: 'stream_v1_workflows_executions__execution_id__stream_get',
  request: {
    params: z.object({
      execution_id: z
        .string()
        .openapi({
          param: {
            name: 'execution_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Execution Id' },
          },
          title: 'Execution Id',
        }),
    }),
    query: z.object({
      event_source: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          EventSourceSchema,
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'event_source',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ $ref: '#/components/schemas/EventSource' }, { type: 'null' }],
              title: 'Event Source',
            },
          },
          title: 'Event Source',
        }),
      last_event_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'last_event_id',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Last Event Id' },
          },
          title: 'Last Event Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Stream of Server-Sent Events (SSE)',
      content: {
        'text/event-stream': {
          schema: z
            .object({
              event: z.string().exactOptional(),
              data: StreamEventSsePayloadSchema.exactOptional(),
              id: z.string().exactOptional(),
              retry: z.int().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1WorkflowsWorkflowNameMetricsRoute = createRoute({
  method: 'get',
  path: '/v1/workflows/{workflow_name}/metrics',
  tags: ['beta.workflows.metrics'],
  summary: 'Get Workflow Metrics',
  description:
    'Get comprehensive metrics for a specific workflow.\n\nArgs:\n    workflow_name: The name of the workflow type to get metrics for\n    start_time: Optional start time filter (ISO 8601 format)\n    end_time: Optional end time filter (ISO 8601 format)\n\nReturns:\n    WorkflowMetrics: Dictionary containing metrics:\n        - execution_count: Total number of executions\n        - success_count: Number of successful executions\n        - error_count: Number of failed/terminated executions\n        - average_latency_ms: Average execution duration in milliseconds\n        - retry_rate: Proportion of workflows with retries\n        - latency_over_time: Time-series data of execution durations\n\nExample:\n    GET /v1/workflows/MyWorkflow/metrics\n    GET /v1/workflows/MyWorkflow/metrics?start_time=2025-01-01T00:00:00Z\n    GET /v1/workflows/MyWorkflow/metrics?start_time=2025-01-01T00:00:00Z&end_time=2025-12-31T23:59:59Z',
  operationId: 'get_workflow_metrics_v1_workflows__workflow_name__metrics_get',
  request: {
    params: z.object({
      workflow_name: z
        .string()
        .openapi({
          param: {
            name: 'workflow_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Workflow Name' },
          },
          title: 'Workflow Name',
        }),
    }),
    query: z.object({
      start_time: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'start_time',
            in: 'query',
            description: 'Filter workflows started after this time (ISO 8601)',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'Start Time',
              description: 'Filter workflows started after this time (ISO 8601)',
            },
          },
          title: 'Start Time',
          description: 'Filter workflows started after this time (ISO 8601)',
        }),
      end_time: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.iso.datetime({ offset: true }),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'end_time',
            in: 'query',
            description: 'Filter workflows started before this time (ISO 8601)',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              title: 'End Time',
              description: 'Filter workflows started before this time (ISO 8601)',
            },
          },
          title: 'End Time',
          description: 'Filter workflows started before this time (ISO 8601)',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: WorkflowMetricsSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1WorkflowsRunsRoute = createRoute({
  method: 'get',
  path: '/v1/workflows/runs',
  tags: ['beta.workflows.runs'],
  summary: 'List Runs',
  operationId: 'list_runs_v1_workflows_runs_get',
  request: {
    query: z.object({
      workflow_identifier: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'workflow_identifier',
            in: 'query',
            description: 'Filter by workflow name or id',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              title: 'Workflow Identifier',
              description: 'Filter by workflow name or id',
            },
          },
          title: 'Workflow Identifier',
          description: 'Filter by workflow name or id',
        }),
      search: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            description: 'Search by workflow name, display name or id',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              title: 'Search',
              description: 'Search by workflow name, display name or id',
            },
          },
          title: 'Search',
          description: 'Search by workflow name, display name or id',
        }),
      status: z
        .union([
          WorkflowExecutionStatusSchema,
          z.array(WorkflowExecutionStatusSchema),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description: 'Filter by workflow status',
            required: false,
            schema: {
              anyOf: [
                { $ref: '#/components/schemas/WorkflowExecutionStatus' },
                { type: 'array', items: { $ref: '#/components/schemas/WorkflowExecutionStatus' } },
                { type: 'null' },
              ],
              title: 'Status',
              description: 'Filter by workflow status',
            },
          },
          title: 'Status',
          description: 'Filter by workflow status',
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'page_size',
            in: 'query',
            description: 'Number of items per page',
            required: false,
            schema: {
              type: 'integer',
              title: 'Page Size',
              maximum: 1000,
              minimum: 1,
              description: 'Number of items per page',
              default: 50,
            },
          },
          title: 'Page Size',
          description: 'Number of items per page',
        }),
      next_page_token: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'next_page_token',
            in: 'query',
            description: 'Token for the next page of results',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              title: 'Next Page Token',
              description: 'Token for the next page of results',
            },
          },
          title: 'Next Page Token',
          description: 'Token for the next page of results',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: WorkflowExecutionListResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1WorkflowsRunsRunIdRoute = createRoute({
  method: 'get',
  path: '/v1/workflows/runs/{run_id}',
  tags: ['beta.workflows.runs'],
  summary: 'Get Run',
  operationId: 'get_run_v1_workflows_runs__run_id__get',
  request: {
    params: z.object({
      run_id: z
        .uuid()
        .openapi({
          param: {
            name: 'run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Run Id', format: 'uuid' },
          },
          title: 'Run Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: WorkflowExecutionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1WorkflowsRunsRunIdHistoryRoute = createRoute({
  method: 'get',
  path: '/v1/workflows/runs/{run_id}/history',
  tags: ['beta.workflows.runs'],
  summary: 'Get Run History',
  operationId: 'get_run_history_v1_workflows_runs__run_id__history_get',
  request: {
    params: z.object({
      run_id: z
        .uuid()
        .openapi({
          param: {
            name: 'run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Run Id', format: 'uuid' },
          },
          title: 'Run Id',
        }),
    }),
    query: z.object({
      decode_payloads: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'decode_payloads',
            in: 'query',
            required: false,
            schema: { type: 'boolean', title: 'Decode Payloads', default: false },
          },
          title: 'Decode Payloads',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1WorkflowsSchedulesRoute = createRoute({
  method: 'get',
  path: '/v1/workflows/schedules',
  tags: ['beta.workflows.schedules'],
  summary: 'Get Schedules',
  operationId: 'get_schedules_v1_workflows_schedules_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: WorkflowScheduleListResponseSchema } },
    },
  },
})

export const postV1WorkflowsSchedulesRoute = createRoute({
  method: 'post',
  path: '/v1/workflows/schedules',
  tags: ['beta.workflows.schedules'],
  summary: 'Schedule Workflow',
  operationId: 'schedule_workflow_v1_workflows_schedules_post',
  request: {
    body: {
      content: { 'application/json': { schema: WorkflowScheduleRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful Response',
      content: { 'application/json': { schema: WorkflowScheduleResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const deleteV1WorkflowsSchedulesScheduleIdRoute = createRoute({
  method: 'delete',
  path: '/v1/workflows/schedules/{schedule_id}',
  tags: ['beta.workflows.schedules'],
  summary: 'Unschedule Workflow',
  operationId: 'unschedule_workflow_v1_workflows_schedules__schedule_id__delete',
  request: {
    params: z.object({
      schedule_id: z
        .string()
        .openapi({
          param: {
            name: 'schedule_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Schedule Id' },
          },
          title: 'Schedule Id',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1WorkflowsWorkersWhoamiRoute = createRoute({
  method: 'get',
  path: '/v1/workflows/workers/whoami',
  tags: ['beta.workflows.workers'],
  summary: 'Get Worker Info',
  operationId: 'get_worker_info_v1_workflows_workers_whoami_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: WorkerInfoSchema } },
    },
  },
})

export const getV1WorkflowsEventsStreamRoute = createRoute({
  method: 'get',
  path: '/v1/workflows/events/stream',
  tags: ['beta.workflows.events'],
  summary: 'Get Stream Events',
  operationId: 'get_stream_events_v1_workflows_events_stream_get',
  request: {
    query: z.object({
      scope: z
        .enum(['activity', 'workflow', '*'])
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            name: 'scope',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              title: 'Scope',
              enum: ['activity', 'workflow', '*'],
              default: '*',
            },
          },
          title: 'Scope',
        }),
      activity_name: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            name: 'activity_name',
            in: 'query',
            required: false,
            schema: { type: 'string', title: 'Activity Name', default: '*' },
          },
          title: 'Activity Name',
        }),
      activity_id: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            name: 'activity_id',
            in: 'query',
            required: false,
            schema: { type: 'string', title: 'Activity Id', default: '*' },
          },
          title: 'Activity Id',
        }),
      workflow_name: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            name: 'workflow_name',
            in: 'query',
            required: false,
            schema: { type: 'string', title: 'Workflow Name', default: '*' },
          },
          title: 'Workflow Name',
        }),
      workflow_exec_id: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            name: 'workflow_exec_id',
            in: 'query',
            required: false,
            schema: { type: 'string', title: 'Workflow Exec Id', default: '*' },
          },
          title: 'Workflow Exec Id',
        }),
      root_workflow_exec_id: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            name: 'root_workflow_exec_id',
            in: 'query',
            required: false,
            schema: { type: 'string', title: 'Root Workflow Exec Id', default: '*' },
          },
          title: 'Root Workflow Exec Id',
        }),
      parent_workflow_exec_id: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            name: 'parent_workflow_exec_id',
            in: 'query',
            required: false,
            schema: { type: 'string', title: 'Parent Workflow Exec Id', default: '*' },
          },
          title: 'Parent Workflow Exec Id',
        }),
      stream: z
        .string()
        .default('*')
        .exactOptional()
        .openapi({
          param: {
            name: 'stream',
            in: 'query',
            required: false,
            schema: { type: 'string', title: 'Stream', default: '*' },
          },
          title: 'Stream',
        }),
      start_seq: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'start_seq',
            in: 'query',
            required: false,
            schema: { type: 'integer', title: 'Start Seq', default: 0 },
          },
          title: 'Start Seq',
        }),
      metadata_filters: z
        .union([
          z.looseObject({}),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'metadata_filters',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'object', additionalProperties: true }, { type: 'null' }],
              title: 'Metadata Filters',
            },
          },
          title: 'Metadata Filters',
        }),
      workflow_event_types: z
        .union([
          z.array(WorkflowEventTypeSchema),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'workflow_event_types',
            in: 'query',
            required: false,
            schema: {
              anyOf: [
                { type: 'array', items: { $ref: '#/components/schemas/WorkflowEventType' } },
                { type: 'null' },
              ],
              title: 'Workflow Event Types',
            },
          },
          title: 'Workflow Event Types',
        }),
    }),
    headers: z.object({
      'last-event-id': ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'last-event-id',
            in: 'header',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Last-Event-Id' },
          },
          title: 'Last-Event-Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Stream of Server-Sent Events (SSE)',
      content: {
        'text/event-stream': {
          schema: z
            .object({
              event: z.string().exactOptional(),
              data: StreamEventSsePayloadSchema.exactOptional(),
              id: z.string().exactOptional(),
              retry: z.int().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1WorkflowsEventsListRoute = createRoute({
  method: 'get',
  path: '/v1/workflows/events/list',
  tags: ['beta.workflows.events'],
  summary: 'Get Workflow Events',
  operationId: 'get_workflow_events_v1_workflows_events_list_get',
  request: {
    query: z.object({
      root_workflow_exec_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'root_workflow_exec_id',
            in: 'query',
            description: 'Execution ID of the root workflow that initiated this execution chain.',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              title: 'Root Workflow Exec Id',
              description: 'Execution ID of the root workflow that initiated this execution chain.',
            },
          },
          title: 'Root Workflow Exec Id',
          description: 'Execution ID of the root workflow that initiated this execution chain.',
        }),
      workflow_exec_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'workflow_exec_id',
            in: 'query',
            description: 'Execution ID of the workflow that emitted this event.',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              title: 'Workflow Exec Id',
              description: 'Execution ID of the workflow that emitted this event.',
            },
          },
          title: 'Workflow Exec Id',
          description: 'Execution ID of the workflow that emitted this event.',
        }),
      workflow_run_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'workflow_run_id',
            in: 'query',
            description: 'Run ID of the workflow that emitted this event.',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              title: 'Workflow Run Id',
              description: 'Run ID of the workflow that emitted this event.',
            },
          },
          title: 'Workflow Run Id',
          description: 'Run ID of the workflow that emitted this event.',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Maximum number of events to return.',
            required: false,
            schema: {
              type: 'integer',
              title: 'Limit',
              description: 'Maximum number of events to return.',
              default: 100,
            },
          },
          title: 'Limit',
          description: 'Maximum number of events to return.',
        }),
      cursor: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            description: 'Cursor for pagination.',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              title: 'Cursor',
              description: 'Cursor for pagination.',
            },
          },
          title: 'Cursor',
          description: 'Cursor for pagination.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListWorkflowEventResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1WorkflowsDeploymentsRoute = createRoute({
  method: 'get',
  path: '/v1/workflows/deployments',
  tags: ['beta.workflows.deployments'],
  summary: 'List Deployments',
  operationId: 'list_deployments_v1_workflows_deployments_get',
  request: {
    query: z.object({
      active_only: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'active_only',
            in: 'query',
            required: false,
            schema: { type: 'boolean', title: 'Active Only', default: true },
          },
          title: 'Active Only',
        }),
      workflow_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'workflow_name',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Workflow Name' },
          },
          title: 'Workflow Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DeploymentListResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1WorkflowsDeploymentsNameRoute = createRoute({
  method: 'get',
  path: '/v1/workflows/deployments/{name}',
  tags: ['beta.workflows.deployments'],
  summary: 'Get Deployment',
  operationId: 'get_deployment_v1_workflows_deployments__name__get',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Name' },
          },
          title: 'Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DeploymentDetailResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1WorkflowsRegistrationsRoute = createRoute({
  method: 'get',
  path: '/v1/workflows/registrations',
  tags: ['beta.workflows'],
  summary: 'Get Workflow Registrations',
  operationId: 'get_workflow_registrations_v1_workflows_registrations_get',
  request: {
    query: z.object({
      workflow_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.uuid(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'workflow_id',
            in: 'query',
            description: 'The workflow ID to filter by',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
              title: 'Workflow Id',
              description: 'The workflow ID to filter by',
            },
          },
          title: 'Workflow Id',
          description: 'The workflow ID to filter by',
        }),
      task_queue: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'task_queue',
            in: 'query',
            description: 'The task queue to filter by',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              title: 'Task Queue',
              description: 'The task queue to filter by',
            },
          },
          title: 'Task Queue',
          description: 'The task queue to filter by',
        }),
      active_only: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'active_only',
            in: 'query',
            description: 'Whether to only return active workflows versions',
            required: false,
            schema: {
              type: 'boolean',
              title: 'Active Only',
              description: 'Whether to only return active workflows versions',
              default: false,
            },
          },
          title: 'Active Only',
          description: 'Whether to only return active workflows versions',
        }),
      include_shared: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'include_shared',
            in: 'query',
            description: 'Whether to include shared workflow versions',
            required: false,
            schema: {
              type: 'boolean',
              title: 'Include Shared',
              description: 'Whether to include shared workflow versions',
              default: true,
            },
          },
          title: 'Include Shared',
          description: 'Whether to include shared workflow versions',
        }),
      workflow_search: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'workflow_search',
            in: 'query',
            description: 'The workflow name to filter by',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              title: 'Workflow Search',
              description: 'The workflow name to filter by',
            },
          },
          title: 'Workflow Search',
          description: 'The workflow name to filter by',
        }),
      archived: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            ((read) => (val: unknown) => {
              const result = read.safeParse(val)
              return result.success ? result.data : val
            })(z.stringbool()),
            z.union([z.boolean(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            description:
              'Filter by archived state. False=exclude archived, True=only archived, None=include all',
            required: false,
            schema: {
              anyOf: [{ type: 'boolean' }, { type: 'null' }],
              title: 'Archived',
              description:
                'Filter by archived state. False=exclude archived, True=only archived, None=include all',
            },
          },
          title: 'Archived',
          description:
            'Filter by archived state. False=exclude archived, True=only archived, None=include all',
        }),
      with_workflow: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'with_workflow',
            in: 'query',
            description: 'Whether to include the workflow definition',
            required: false,
            schema: {
              type: 'boolean',
              title: 'With Workflow',
              description: 'Whether to include the workflow definition',
              default: false,
            },
          },
          title: 'With Workflow',
          description: 'Whether to include the workflow definition',
        }),
      available_in_chat_assistant: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            ((read) => (val: unknown) => {
              const result = read.safeParse(val)
              return result.success ? result.data : val
            })(z.stringbool()),
            z.union([z.boolean(), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'available_in_chat_assistant',
            in: 'query',
            description: 'Whether to only return workflows compatible with chat assistant',
            required: false,
            schema: {
              anyOf: [{ type: 'boolean' }, { type: 'null' }],
              title: 'Available In Chat Assistant',
              description: 'Whether to only return workflows compatible with chat assistant',
            },
          },
          title: 'Available In Chat Assistant',
          description: 'Whether to only return workflows compatible with chat assistant',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of workflows versions to return',
            required: false,
            schema: {
              type: 'integer',
              title: 'Limit',
              description: 'The maximum number of workflows versions to return',
              default: 50,
            },
          },
          title: 'Limit',
          description: 'The maximum number of workflows versions to return',
        }),
      cursor: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.uuid(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            description: 'The cursor for pagination',
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'uuid' }, { type: 'null' }],
              title: 'Cursor',
              description: 'The cursor for pagination',
            },
          },
          title: 'Cursor',
          description: 'The cursor for pagination',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: WorkflowRegistrationListResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1WorkflowsWorkflowIdentifierExecuteRoute = createRoute({
  method: 'post',
  path: '/v1/workflows/{workflow_identifier}/execute',
  tags: ['beta.workflows'],
  summary: 'Execute Workflow',
  operationId: 'execute_workflow_v1_workflows__workflow_identifier__execute_post',
  request: {
    params: z.object({
      workflow_identifier: z
        .string()
        .openapi({
          param: {
            name: 'workflow_identifier',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Workflow Identifier' },
          },
          title: 'Workflow Identifier',
        }),
    }),
    body: {
      content: { 'application/json': { schema: WorkflowExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .union([WorkflowExecutionResponseSchema, WorkflowExecutionSyncResponseSchema])
            .openapi({
              title: 'Response Execute Workflow V1 Workflows  Workflow Identifier  Execute Post',
            }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1WorkflowsRegistrationsWorkflowRegistrationIdExecuteRoute = createRoute({
  method: 'post',
  path: '/v1/workflows/registrations/{workflow_registration_id}/execute',
  tags: ['beta.workflows'],
  summary: 'Execute Workflow Registration',
  operationId:
    'execute_workflow_registration_v1_workflows_registrations__workflow_registration_id__execute_post',
  request: {
    params: z.object({
      workflow_registration_id: z
        .uuid()
        .openapi({
          param: {
            name: 'workflow_registration_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Workflow Registration Id', format: 'uuid' },
          },
          title: 'Workflow Registration Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: WorkflowExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .union([WorkflowExecutionResponseSchema, WorkflowExecutionSyncResponseSchema])
            .openapi({
              title:
                'Response Execute Workflow Registration V1 Workflows Registrations  Workflow Registration Id  Execute Post',
            }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  deprecated: true,
})

export const getV1WorkflowsWorkflowIdentifierRoute = createRoute({
  method: 'get',
  path: '/v1/workflows/{workflow_identifier}',
  tags: ['beta.workflows'],
  summary: 'Get Workflow',
  operationId: 'get_workflow_v1_workflows__workflow_identifier__get',
  request: {
    params: z.object({
      workflow_identifier: z
        .string()
        .openapi({
          param: {
            name: 'workflow_identifier',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Workflow Identifier' },
          },
          title: 'Workflow Identifier',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: WorkflowGetResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const putV1WorkflowsWorkflowIdentifierRoute = createRoute({
  method: 'put',
  path: '/v1/workflows/{workflow_identifier}',
  tags: ['beta.workflows'],
  summary: 'Update Workflow',
  operationId: 'update_workflow_v1_workflows__workflow_identifier__put',
  request: {
    params: z.object({
      workflow_identifier: z
        .string()
        .openapi({
          param: {
            name: 'workflow_identifier',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Workflow Identifier' },
          },
          title: 'Workflow Identifier',
        }),
    }),
    body: {
      content: { 'application/json': { schema: WorkflowUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: WorkflowUpdateResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1WorkflowsRegistrationsWorkflowRegistrationIdRoute = createRoute({
  method: 'get',
  path: '/v1/workflows/registrations/{workflow_registration_id}',
  tags: ['beta.workflows'],
  summary: 'Get Workflow Registration',
  operationId:
    'get_workflow_registration_v1_workflows_registrations__workflow_registration_id__get',
  request: {
    params: z.object({
      workflow_registration_id: z
        .uuid()
        .openapi({
          param: {
            name: 'workflow_registration_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Workflow Registration Id', format: 'uuid' },
          },
          title: 'Workflow Registration Id',
        }),
    }),
    query: z.object({
      with_workflow: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'with_workflow',
            in: 'query',
            description: 'Whether to include the workflow definition',
            required: false,
            schema: {
              type: 'boolean',
              title: 'With Workflow',
              description: 'Whether to include the workflow definition',
              default: false,
            },
          },
          title: 'With Workflow',
          description: 'Whether to include the workflow definition',
        }),
      include_shared: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'include_shared',
            in: 'query',
            description: 'Whether to include shared workflow versions',
            required: false,
            schema: {
              type: 'boolean',
              title: 'Include Shared',
              description: 'Whether to include shared workflow versions',
              default: true,
            },
          },
          title: 'Include Shared',
          description: 'Whether to include shared workflow versions',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: WorkflowRegistrationGetResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const putV1WorkflowsWorkflowIdentifierArchiveRoute = createRoute({
  method: 'put',
  path: '/v1/workflows/{workflow_identifier}/archive',
  tags: ['beta.workflows'],
  summary: 'Archive Workflow',
  operationId: 'archive_workflow_v1_workflows__workflow_identifier__archive_put',
  request: {
    params: z.object({
      workflow_identifier: z
        .string()
        .openapi({
          param: {
            name: 'workflow_identifier',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Workflow Identifier' },
          },
          title: 'Workflow Identifier',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: WorkflowArchiveResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const putV1WorkflowsWorkflowIdentifierUnarchiveRoute = createRoute({
  method: 'put',
  path: '/v1/workflows/{workflow_identifier}/unarchive',
  tags: ['beta.workflows'],
  summary: 'Unarchive Workflow',
  operationId: 'unarchive_workflow_v1_workflows__workflow_identifier__unarchive_put',
  request: {
    params: z.object({
      workflow_identifier: z
        .string()
        .openapi({
          param: {
            name: 'workflow_identifier',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Workflow Identifier' },
          },
          title: 'Workflow Identifier',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: WorkflowUnarchiveResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1ConnectorsRoute = createRoute({
  method: 'get',
  path: '/v1/connectors',
  tags: ['beta.connectors'],
  summary: 'List all connectors.',
  description: 'List all your custom connectors with keyset pagination and filters.',
  operationId: 'connector_list_v1',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['active', ['query_filters']],
          ['fetch_connection_secrets', ['query_filters']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          query_filters: z
            .object({
              active: z
                .preprocess(
                  (val) => (val === 'null' ? null : val),
                  z.preprocess(
                    ((read) => (val: unknown) => {
                      const result = read.safeParse(val)
                      return result.success ? result.data : val
                    })(z.stringbool()),
                    z.union([z.boolean(), z.null().nullable()]),
                  ),
                )
                .exactOptional()
                .openapi({
                  title: 'Active',
                  description:
                    'Filter for active connectors for a given user, workspace and organization.',
                }),
              fetch_connection_secrets: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({
                  title: 'Fetch Connection Secrets',
                  description: 'Fetch connection secrets.',
                }),
            })
            .default({ fetch_connection_secrets: false })
            .exactOptional()
            .openapi({
              param: {
                name: 'query_filters',
                in: 'query',
                required: false,
                schema: {
                  type: 'object',
                  properties: {
                    active: {
                      anyOf: [{ type: 'boolean' }, { type: 'null' }],
                      title: 'Active',
                      description:
                        'Filter for active connectors for a given user, workspace and organization.',
                    },
                    fetch_connection_secrets: {
                      type: 'boolean',
                      title: 'Fetch Connection Secrets',
                      description: 'Fetch connection secrets.',
                      default: false,
                    },
                  },
                  title: 'ConnectorsQueryFilters',
                  default: {
                    fetch_user_data: false,
                    fetch_customer_data: false,
                    fetch_connection_secrets: false,
                    fetch_execution_data: false,
                  },
                },
              },
              title: 'ConnectorsQueryFilters',
              required: [],
            }),
          cursor: ((schema) =>
            z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
            z.union([
              z.string(),
              z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
            ]),
          )
            .exactOptional()
            .openapi({
              param: {
                name: 'cursor',
                in: 'query',
                required: false,
                schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Cursor' },
              },
              title: 'Cursor',
            }),
          page_size: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(1).max(1000),
            )
            .default(100)
            .exactOptional()
            .openapi({
              param: {
                name: 'page_size',
                in: 'query',
                required: false,
                schema: {
                  type: 'integer',
                  title: 'Page Size',
                  maximum: 1000,
                  minimum: 1,
                  default: 100,
                },
              },
              title: 'Page Size',
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PaginatedConnectorsSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1ConnectorsRoute = createRoute({
  method: 'post',
  path: '/v1/connectors',
  tags: ['beta.connectors'],
  summary: 'Create a new connector.',
  description: 'Create a new MCP connector. You can customize its visibility, url and auth type.',
  operationId: 'connector_create_v1',
  request: {
    body: { content: { 'application/json': { schema: ConnectorMCPCreateSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ConnectorSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1ConnectorsConnectorIdOrNameAuthUrlRoute = createRoute({
  method: 'get',
  path: '/v1/connectors/{connector_id_or_name}/auth_url',
  tags: ['beta.connectors'],
  summary: 'Get the auth URL for a connector.',
  description: 'Get the OAuth2 authorization URL for a connector to initiate user authentication.',
  operationId: 'connector_get_auth_url_v1',
  request: {
    query: z.object({
      app_return_url: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'app_return_url',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'App Return Url' },
          },
          title: 'App Return Url',
        }),
      credentials_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string().regex(/^[a-zA-Z0-9_-]{1,64}$/),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'credentials_name',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', pattern: '^[a-zA-Z0-9_-]{1,64}$' }, { type: 'null' }],
              title: 'Credentials Name',
            },
          },
          title: 'Credentials Name',
        }),
    }),
    params: z.object({
      connector_id_or_name: z
        .string()
        .openapi({
          param: {
            name: 'connector_id_or_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Connector Id Or Name' },
          },
          title: 'Connector Id Or Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AuthUrlResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1ConnectorsConnectorIdOrNameToolsToolNameCallRoute = createRoute({
  method: 'post',
  path: '/v1/connectors/{connector_id_or_name}/tools/{tool_name}/call',
  tags: ['beta.connectors'],
  summary: 'Call Connector Tool',
  description: 'Call a tool on an MCP connector.',
  operationId: 'connector_call_tool_v1',
  request: {
    params: z.object({
      tool_name: z
        .string()
        .openapi({
          param: {
            name: 'tool_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Tool Name' },
          },
          title: 'Tool Name',
        }),
      connector_id_or_name: z
        .string()
        .openapi({
          param: {
            name: 'connector_id_or_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Connector Id Or Name' },
          },
          title: 'Connector Id Or Name',
        }),
    }),
    query: z.object({
      credentials_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string().regex(/^[a-zA-Z0-9_-]{1,64}$/),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'credentials_name',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', pattern: '^[a-zA-Z0-9_-]{1,64}$' }, { type: 'null' }],
              title: 'Credentials Name',
            },
          },
          title: 'Credentials Name',
        }),
    }),
    body: { content: { 'application/json': { schema: MCPToolCallRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: MCPToolCallResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1ConnectorsConnectorIdOrNameToolsRoute = createRoute({
  method: 'get',
  path: '/v1/connectors/{connector_id_or_name}/tools',
  tags: ['beta.connectors'],
  summary: 'List tools for a connector.',
  description: 'List all tools available for an MCP connector.',
  operationId: 'connector_list_tools_v1',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            required: false,
            schema: { type: 'integer', title: 'Page', default: 1 },
          },
          title: 'Page',
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'page_size',
            in: 'query',
            required: false,
            schema: { type: 'integer', title: 'Page Size', default: 100 },
          },
          title: 'Page Size',
        }),
      refresh: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'refresh',
            in: 'query',
            required: false,
            schema: { type: 'boolean', title: 'Refresh', default: false },
          },
          title: 'Refresh',
        }),
      pretty: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'pretty',
            in: 'query',
            description:
              'Return a simplified payload with only name, description, annotations, and a compact inputSchema.',
            required: false,
            schema: {
              type: 'boolean',
              title: 'Pretty',
              description:
                'Return a simplified payload with only name, description, annotations, and a compact inputSchema.',
              default: false,
            },
          },
          title: 'Pretty',
          description:
            'Return a simplified payload with only name, description, annotations, and a compact inputSchema.',
        }),
      credentials_name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string().regex(/^[a-zA-Z0-9_-]{1,64}$/),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'credentials_name',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', pattern: '^[a-zA-Z0-9_-]{1,64}$' }, { type: 'null' }],
              title: 'Credentials Name',
            },
          },
          title: 'Credentials Name',
        }),
    }),
    params: z.object({
      connector_id_or_name: z
        .string()
        .openapi({
          param: {
            name: 'connector_id_or_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Connector Id Or Name' },
          },
          title: 'Connector Id Or Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .union([
              z.array(IntegrationsSchemasApiToolToolSchema),
              z.array(MCPToolSchema),
              z.array(z.looseObject({})),
            ])
            .openapi({ title: 'Response Connector List Tools V1' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1ConnectorsConnectorIdOrNameAuthenticationMethodsRoute = createRoute({
  method: 'get',
  path: '/v1/connectors/{connector_id_or_name}/authentication_methods',
  tags: ['beta.connectors'],
  summary: 'Get authentication methods for a connector.',
  description:
    'Get the authentication schema for a connector. Returns the list of supported authentication methods and their required headers.',
  operationId: 'connector_get_authentication_methods_v1',
  request: {
    params: z.object({
      connector_id_or_name: z
        .string()
        .openapi({
          param: {
            name: 'connector_id_or_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Connector Id Or Name' },
          },
          title: 'Connector Id Or Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(PublicAuthenticationMethodSchema)
            .openapi({ title: 'Response Connector Get Authentication Methods V1' }),
        },
      },
    },
  },
})

export const getV1ConnectorsConnectorIdOrNameOrganizationCredentialsRoute = createRoute({
  method: 'get',
  path: '/v1/connectors/{connector_id_or_name}/organization/credentials',
  tags: ['beta.connectors'],
  summary: 'List organization credentials for a connector.',
  description: 'List all credentials configured at the organization level for a given connector.',
  operationId: 'connector_list_organization_credentials_v1',
  request: {
    query: z.object({
      auth_type: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          OutboundAuthenticationTypeSchema,
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'auth_type',
            in: 'query',
            required: false,
            schema: {
              anyOf: [
                { $ref: '#/components/schemas/OutboundAuthenticationType' },
                { type: 'null' },
              ],
              title: 'Auth Type',
            },
          },
          title: 'Auth Type',
        }),
      fetch_default: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'fetch_default',
            in: 'query',
            required: false,
            schema: { type: 'boolean', title: 'Fetch Default', default: false },
          },
          title: 'Fetch Default',
        }),
    }),
    params: z.object({
      connector_id_or_name: z
        .string()
        .openapi({
          param: {
            name: 'connector_id_or_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Connector Id Or Name' },
          },
          title: 'Connector Id Or Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: CredentialsResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1ConnectorsConnectorIdOrNameOrganizationCredentialsRoute = createRoute({
  method: 'post',
  path: '/v1/connectors/{connector_id_or_name}/organization/credentials',
  tags: ['beta.connectors'],
  summary: 'Create or update organization credentials for a connector.',
  description: 'Create or update credentials at the organization level for a given connector.',
  operationId: 'connector_create_or_update_organization_credentials_v1',
  request: {
    params: z.object({
      connector_id_or_name: z
        .string()
        .openapi({
          param: {
            name: 'connector_id_or_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Connector Id Or Name' },
          },
          title: 'Connector Id Or Name',
        }),
    }),
    body: {
      content: { 'application/json': { schema: CredentialsCreateOrUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: MessageResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1ConnectorsConnectorIdOrNameWorkspaceCredentialsRoute = createRoute({
  method: 'get',
  path: '/v1/connectors/{connector_id_or_name}/workspace/credentials',
  tags: ['beta.connectors'],
  summary: 'List workspace credentials for a connector.',
  description: 'List all credentials configured at the workspace level for a given connector.',
  operationId: 'connector_list_workspace_credentials_v1',
  request: {
    query: z.object({
      auth_type: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          OutboundAuthenticationTypeSchema,
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'auth_type',
            in: 'query',
            required: false,
            schema: {
              anyOf: [
                { $ref: '#/components/schemas/OutboundAuthenticationType' },
                { type: 'null' },
              ],
              title: 'Auth Type',
            },
          },
          title: 'Auth Type',
        }),
      fetch_default: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'fetch_default',
            in: 'query',
            required: false,
            schema: { type: 'boolean', title: 'Fetch Default', default: false },
          },
          title: 'Fetch Default',
        }),
    }),
    params: z.object({
      connector_id_or_name: z
        .string()
        .openapi({
          param: {
            name: 'connector_id_or_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Connector Id Or Name' },
          },
          title: 'Connector Id Or Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: CredentialsResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1ConnectorsConnectorIdOrNameWorkspaceCredentialsRoute = createRoute({
  method: 'post',
  path: '/v1/connectors/{connector_id_or_name}/workspace/credentials',
  tags: ['beta.connectors'],
  summary: 'Create or update workspace credentials for a connector.',
  description: 'Create or update credentials at the workspace level for a given connector.',
  operationId: 'connector_create_or_update_workspace_credentials_v1',
  request: {
    params: z.object({
      connector_id_or_name: z
        .string()
        .openapi({
          param: {
            name: 'connector_id_or_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Connector Id Or Name' },
          },
          title: 'Connector Id Or Name',
        }),
    }),
    body: {
      content: { 'application/json': { schema: CredentialsCreateOrUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: MessageResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1ConnectorsConnectorIdOrNameUserCredentialsRoute = createRoute({
  method: 'get',
  path: '/v1/connectors/{connector_id_or_name}/user/credentials',
  tags: ['beta.connectors'],
  summary: 'List user credentials for a connector.',
  description: 'List all credentials configured at the user level for a given connector.',
  operationId: 'connector_list_user_credentials_v1',
  request: {
    query: z.object({
      auth_type: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          OutboundAuthenticationTypeSchema,
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'auth_type',
            in: 'query',
            required: false,
            schema: {
              anyOf: [
                { $ref: '#/components/schemas/OutboundAuthenticationType' },
                { type: 'null' },
              ],
              title: 'Auth Type',
            },
          },
          title: 'Auth Type',
        }),
      fetch_default: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'fetch_default',
            in: 'query',
            required: false,
            schema: { type: 'boolean', title: 'Fetch Default', default: false },
          },
          title: 'Fetch Default',
        }),
    }),
    params: z.object({
      connector_id_or_name: z
        .string()
        .openapi({
          param: {
            name: 'connector_id_or_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Connector Id Or Name' },
          },
          title: 'Connector Id Or Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: CredentialsResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1ConnectorsConnectorIdOrNameUserCredentialsRoute = createRoute({
  method: 'post',
  path: '/v1/connectors/{connector_id_or_name}/user/credentials',
  tags: ['beta.connectors'],
  summary: 'Create or update user credentials for a connector.',
  description: 'Create or update credentials at the user level for a given connector.',
  operationId: 'connector_create_or_update_user_credentials_v1',
  request: {
    params: z.object({
      connector_id_or_name: z
        .string()
        .openapi({
          param: {
            name: 'connector_id_or_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Connector Id Or Name' },
          },
          title: 'Connector Id Or Name',
        }),
    }),
    body: {
      content: { 'application/json': { schema: CredentialsCreateOrUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: MessageResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const deleteV1ConnectorsConnectorIdOrNameOrganizationCredentialsCredentialsNameRoute =
  createRoute({
    method: 'delete',
    path: '/v1/connectors/{connector_id_or_name}/organization/credentials/{credentials_name}',
    tags: ['beta.connectors'],
    summary: 'Delete organization credentials for a connector.',
    description: 'Delete credentials at the organization level for a given connector.',
    operationId: 'connector_delete_organization_credentials_v1',
    request: {
      params: z.object({
        credentials_name: z
          .string()
          .regex(/^[a-zA-Z0-9_-]{1,64}$/)
          .openapi({
            param: {
              name: 'credentials_name',
              in: 'path',
              required: true,
              schema: {
                type: 'string',
                title: 'Credentials Name',
                pattern: '^[a-zA-Z0-9_-]{1,64}$',
              },
            },
            title: 'Credentials Name',
          }),
        connector_id_or_name: z
          .string()
          .openapi({
            param: {
              name: 'connector_id_or_name',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Connector Id Or Name' },
            },
            title: 'Connector Id Or Name',
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful Response',
        content: { 'application/json': { schema: MessageResponseSchema } },
      },
      422: {
        description: 'Validation Error',
        content: { 'application/json': { schema: HTTPValidationErrorSchema } },
      },
    },
  })

export const deleteV1ConnectorsConnectorIdOrNameWorkspaceCredentialsCredentialsNameRoute =
  createRoute({
    method: 'delete',
    path: '/v1/connectors/{connector_id_or_name}/workspace/credentials/{credentials_name}',
    tags: ['beta.connectors'],
    summary: 'Delete workspace credentials for a connector.',
    description: 'Delete credentials at the workspace level for a given connector.',
    operationId: 'connector_delete_workspace_credentials_v1',
    request: {
      params: z.object({
        credentials_name: z
          .string()
          .regex(/^[a-zA-Z0-9_-]{1,64}$/)
          .openapi({
            param: {
              name: 'credentials_name',
              in: 'path',
              required: true,
              schema: {
                type: 'string',
                title: 'Credentials Name',
                pattern: '^[a-zA-Z0-9_-]{1,64}$',
              },
            },
            title: 'Credentials Name',
          }),
        connector_id_or_name: z
          .string()
          .openapi({
            param: {
              name: 'connector_id_or_name',
              in: 'path',
              required: true,
              schema: { type: 'string', title: 'Connector Id Or Name' },
            },
            title: 'Connector Id Or Name',
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful Response',
        content: { 'application/json': { schema: MessageResponseSchema } },
      },
      422: {
        description: 'Validation Error',
        content: { 'application/json': { schema: HTTPValidationErrorSchema } },
      },
    },
  })

export const deleteV1ConnectorsConnectorIdOrNameUserCredentialsCredentialsNameRoute = createRoute({
  method: 'delete',
  path: '/v1/connectors/{connector_id_or_name}/user/credentials/{credentials_name}',
  tags: ['beta.connectors'],
  summary: 'Delete user credentials for a connector.',
  description: 'Delete credentials at the user level for a given connector.',
  operationId: 'connector_delete_user_credentials_v1',
  request: {
    params: z.object({
      credentials_name: z
        .string()
        .regex(/^[a-zA-Z0-9_-]{1,64}$/)
        .openapi({
          param: {
            name: 'credentials_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Credentials Name', pattern: '^[a-zA-Z0-9_-]{1,64}$' },
          },
          title: 'Credentials Name',
        }),
      connector_id_or_name: z
        .string()
        .openapi({
          param: {
            name: 'connector_id_or_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Connector Id Or Name' },
          },
          title: 'Connector Id Or Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: MessageResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1ConnectorsConnectorIdOrNameIdOrNameRoute = createRoute({
  method: 'get',
  path: '/v1/connectors/{connector_id_or_name}#idOrName',
  tags: ['beta.connectors'],
  summary: 'Get a connector.',
  description: 'Get a connector by its ID or name.',
  operationId: 'connector_get_v1',
  request: {
    query: z.object({
      fetch_customer_data: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'fetch_customer_data',
            in: 'query',
            description:
              'Fetch the customer data associated with the connector (e.g. customer secrets / config).',
            required: false,
            schema: {
              type: 'boolean',
              title: 'Fetch Customer Data',
              description:
                'Fetch the customer data associated with the connector (e.g. customer secrets / config).',
              default: false,
            },
          },
          title: 'Fetch Customer Data',
          description:
            'Fetch the customer data associated with the connector (e.g. customer secrets / config).',
        }),
      fetch_connection_secrets: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'fetch_connection_secrets',
            in: 'query',
            description: 'Fetch the general connection secrets associated with the connector.',
            required: false,
            schema: {
              type: 'boolean',
              title: 'Fetch Connection Secrets',
              description: 'Fetch the general connection secrets associated with the connector.',
              default: false,
            },
          },
          title: 'Fetch Connection Secrets',
          description: 'Fetch the general connection secrets associated with the connector.',
        }),
    }),
    params: z.object({
      connector_id_or_name: z
        .string()
        .openapi({
          param: {
            name: 'connector_id_or_name',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Connector Id Or Name' },
          },
          title: 'Connector Id Or Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ConnectorSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const deleteV1ConnectorsConnectorIdIdRoute = createRoute({
  method: 'delete',
  path: '/v1/connectors/{connector_id}#id',
  tags: ['beta.connectors'],
  summary: 'Delete a connector.',
  description: 'Delete a connector by its ID.',
  operationId: 'connector_delete_v1',
  request: {
    params: z.object({
      connector_id: z
        .uuid()
        .openapi({
          param: {
            name: 'connector_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Connector Id', format: 'uuid' },
          },
          title: 'Connector Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: MessageResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const patchV1ConnectorsConnectorIdIdRoute = createRoute({
  method: 'patch',
  path: '/v1/connectors/{connector_id}#id',
  tags: ['beta.connectors'],
  summary: 'Update a connector.',
  description: 'Update a connector by its ID.',
  operationId: 'connector_update_v1',
  request: {
    params: z.object({
      connector_id: z
        .uuid()
        .openapi({
          param: {
            name: 'connector_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Connector Id', format: 'uuid' },
          },
          title: 'Connector Id',
        }),
    }),
    body: { content: { 'application/json': { schema: ConnectorMCPUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ConnectorSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})
