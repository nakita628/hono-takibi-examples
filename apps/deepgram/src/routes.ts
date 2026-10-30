import { createRoute, z } from '@hono/zod-openapi'

const AgentThinkModelsV1ResponseModelsItemsOneOf0IdSchema = z
  .enum([
    'gpt-5',
    'gpt-5-mini',
    'gpt-5-nano',
    'gpt-4.1',
    'gpt-4.1-mini',
    'gpt-4.1-nano',
    'gpt-4o',
    'gpt-4o-mini',
  ])
  .openapi({
    description: 'The unique identifier of the OpenAI model',
    title: 'AgentThinkModelsV1ResponseModelsItemsOneOf0Id',
  })
  .openapi('AgentThinkModelsV1ResponseModelsItemsOneOf0Id')

const AgentThinkModelsV1ResponseModelsItems0Schema = z
  .object({
    id: AgentThinkModelsV1ResponseModelsItemsOneOf0IdSchema.openapi({
      description: 'The unique identifier of the OpenAI model',
    }),
    name: z.string().openapi({ description: 'The display name of the model' }),
    provider: z.any().openapi({ description: 'The provider of the model' }),
  })
  .openapi({
    required: ['id', 'name', 'provider'],
    description: 'OpenAI models',
    title: 'AgentThinkModelsV1ResponseModelsItems0',
  })
  .openapi('AgentThinkModelsV1ResponseModelsItems0')

const AgentThinkModelsV1ResponseModelsItemsOneOf1IdSchema = z
  .enum(['claude-3-5-haiku-latest', 'claude-sonnet-4-20250514'])
  .openapi({
    description: 'The unique identifier of the Anthropic model',
    title: 'AgentThinkModelsV1ResponseModelsItemsOneOf1Id',
  })
  .openapi('AgentThinkModelsV1ResponseModelsItemsOneOf1Id')

const AgentThinkModelsV1ResponseModelsItems1Schema = z
  .object({
    id: AgentThinkModelsV1ResponseModelsItemsOneOf1IdSchema.openapi({
      description: 'The unique identifier of the Anthropic model',
    }),
    name: z.string().openapi({ description: 'The display name of the model' }),
    provider: z.any().openapi({ description: 'The provider of the model' }),
  })
  .openapi({
    required: ['id', 'name', 'provider'],
    description: 'Anthropic models',
    title: 'AgentThinkModelsV1ResponseModelsItems1',
  })
  .openapi('AgentThinkModelsV1ResponseModelsItems1')

const AgentThinkModelsV1ResponseModelsItemsOneOf2IdSchema = z
  .enum(['gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-2.0-flash-lite'])
  .openapi({
    description: 'The unique identifier of the Google model',
    title: 'AgentThinkModelsV1ResponseModelsItemsOneOf2Id',
  })
  .openapi('AgentThinkModelsV1ResponseModelsItemsOneOf2Id')

const AgentThinkModelsV1ResponseModelsItems2Schema = z
  .object({
    id: AgentThinkModelsV1ResponseModelsItemsOneOf2IdSchema.openapi({
      description: 'The unique identifier of the Google model',
    }),
    name: z.string().openapi({ description: 'The display name of the model' }),
    provider: z.any().openapi({ description: 'The provider of the model' }),
  })
  .openapi({
    required: ['id', 'name', 'provider'],
    description: 'Google models',
    title: 'AgentThinkModelsV1ResponseModelsItems2',
  })
  .openapi('AgentThinkModelsV1ResponseModelsItems2')

const AgentThinkModelsV1ResponseModelsItemsOneOf3IdSchema = z
  .literal('openai/gpt-oss-20b')
  .openapi({
    description: 'The unique identifier of the Groq model',
    title: 'AgentThinkModelsV1ResponseModelsItemsOneOf3Id',
  })
  .openapi('AgentThinkModelsV1ResponseModelsItemsOneOf3Id')

const AgentThinkModelsV1ResponseModelsItems3Schema = z
  .object({
    id: AgentThinkModelsV1ResponseModelsItemsOneOf3IdSchema.openapi({
      description: 'The unique identifier of the Groq model',
    }),
    name: z.string().openapi({ description: 'The display name of the model' }),
    provider: z.any().openapi({ description: 'The provider of the model' }),
  })
  .openapi({
    required: ['id', 'name', 'provider'],
    description: 'Groq models',
    title: 'AgentThinkModelsV1ResponseModelsItems3',
  })
  .openapi('AgentThinkModelsV1ResponseModelsItems3')

const AgentThinkModelsV1ResponseModelsItems4Schema = z
  .object({
    id: z
      .string()
      .openapi({
        description:
          'The unique identifier of the AWS Bedrock model (any model string accepted for BYO LLMs)',
      }),
    name: z.string().openapi({ description: 'The display name of the model' }),
    provider: z.any().openapi({ description: 'The provider of the model' }),
  })
  .openapi({
    required: ['id', 'name', 'provider'],
    description: 'AWS Bedrock models (custom models accepted)',
    title: 'AgentThinkModelsV1ResponseModelsItems4',
  })
  .openapi('AgentThinkModelsV1ResponseModelsItems4')

const AgentThinkModelsV1ResponseModelsItemsSchema = z
  .xor([
    AgentThinkModelsV1ResponseModelsItems0Schema,
    AgentThinkModelsV1ResponseModelsItems1Schema,
    AgentThinkModelsV1ResponseModelsItems2Schema,
    AgentThinkModelsV1ResponseModelsItems3Schema,
    AgentThinkModelsV1ResponseModelsItems4Schema,
  ])
  .openapi({ title: 'AgentThinkModelsV1ResponseModelsItems' })
  .openapi('AgentThinkModelsV1ResponseModelsItems')

const AgentThinkModelsV1ResponseSchema = z
  .object({ models: z.array(AgentThinkModelsV1ResponseModelsItemsSchema) })
  .openapi({ required: ['models'], title: 'AgentThinkModelsV1Response' })
  .openapi('AgentThinkModelsV1Response')

const ErrorResponseTextErrorSchema = z
  .string()
  .openapi({ title: 'ErrorResponseTextError' })
  .openapi('ErrorResponseTextError')

const ErrorResponseLegacyErrorSchema = z
  .object({
    err_code: z.string().exactOptional().openapi({ description: 'The error code' }),
    err_msg: z.string().exactOptional().openapi({ description: 'The error message' }),
    request_id: z.string().exactOptional().openapi({ description: 'The request ID' }),
  })
  .openapi({ title: 'ErrorResponseLegacyError', required: [] })
  .openapi('ErrorResponseLegacyError')

const ErrorResponseModernErrorSchema = z
  .object({
    category: z.string().exactOptional().openapi({ description: 'The category of the error' }),
    message: z.string().exactOptional().openapi({ description: 'A message about the error' }),
    details: z.string().exactOptional().openapi({ description: 'A description of the error' }),
    request_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the request' }),
  })
  .openapi({ title: 'ErrorResponseModernError', required: [] })
  .openapi('ErrorResponseModernError')

const ErrorResponseSchema = z
  .xor([
    ErrorResponseTextErrorSchema,
    ErrorResponseLegacyErrorSchema,
    ErrorResponseModernErrorSchema,
  ])
  .openapi({ title: 'ErrorResponse' })
  .openapi('ErrorResponse')

const CreateAgentConfigurationV1RequestSchema = z
  .object({
    config: z
      .string()
      .openapi({
        description: 'A valid JSON string representing the agent block of a Settings message',
      }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'A map of arbitrary key-value pairs for labeling or organizing the agent configuration',
      }),
    api_version: z
      .int()
      .default(1)
      .exactOptional()
      .openapi({ description: 'API version. Defaults to 1' }),
  })
  .openapi({
    required: ['config'],
    description: 'Request body for creating an agent configuration',
    title: 'CreateAgentConfigurationV1Request',
  })
  .openapi('CreateAgentConfigurationV1Request')

const CreateAgentConfigurationV1ResponseConfigSchema = z
  .object({})
  .openapi({
    description: 'The parsed agent configuration object',
    title: 'CreateAgentConfigurationV1ResponseConfig',
  })
  .openapi('CreateAgentConfigurationV1ResponseConfig')

const CreateAgentConfigurationV1ResponseSchema = z
  .object({
    agent_id: z
      .string()
      .openapi({ description: 'The unique identifier of the newly created agent configuration' }),
    config: CreateAgentConfigurationV1ResponseConfigSchema.openapi({
      description: 'The parsed agent configuration object',
    }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Metadata associated with the agent configuration' }),
  })
  .openapi({ required: ['agent_id', 'config'], title: 'CreateAgentConfigurationV1Response' })
  .openapi('CreateAgentConfigurationV1Response')

const AgentConfigurationV1ConfigSchema = z
  .object({})
  .openapi({ description: 'The agent configuration object', title: 'AgentConfigurationV1Config' })
  .openapi('AgentConfigurationV1Config')

const AgentConfigurationV1Schema = z
  .object({
    agent_id: z
      .string()
      .openapi({ description: 'The unique identifier of the agent configuration' }),
    config: AgentConfigurationV1ConfigSchema.openapi({
      description: 'The agent configuration object',
    }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'A map of arbitrary key-value pairs for labeling or organizing the agent configuration',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp when the configuration was created' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp when the configuration was last updated' }),
  })
  .openapi({
    required: ['agent_id', 'config'],
    description: 'A reusable agent configuration',
    title: 'AgentConfigurationV1',
  })
  .openapi('AgentConfigurationV1')

const ListAgentConfigurationsV1ResponseSchema = z
  .object({
    agents: z
      .array(AgentConfigurationV1Schema)
      .exactOptional()
      .openapi({ description: 'A list of agent configurations for the project' }),
  })
  .openapi({ title: 'ListAgentConfigurationsV1Response', required: [] })
  .openapi('ListAgentConfigurationsV1Response')

const UpdateAgentMetadataV1RequestSchema = z
  .object({
    metadata: z
      .record(z.string(), z.string())
      .openapi({
        description: 'A map of string key-value pairs to associate with this agent configuration',
      }),
  })
  .openapi({
    required: ['metadata'],
    description: 'Request body for updating agent configuration metadata',
    title: 'UpdateAgentMetadataV1Request',
  })
  .openapi('UpdateAgentMetadataV1Request')

const DeleteAgentConfigurationV1ResponseSchema = z
  .object({})
  .openapi({
    description: 'Confirmation that the agent configuration was deleted',
    title: 'DeleteAgentConfigurationV1Response',
  })
  .openapi('DeleteAgentConfigurationV1Response')

const CreateAgentVariableV1RequestSchema = z
  .object({
    key: z
      .string()
      .openapi({ description: 'The variable name, following the DG_<VARIABLE_NAME> format' }),
    value: z
      .any()
      .openapi({
        description:
          'The value to substitute. Can be any valid JSON type (string, number, boolean, object, or array)',
      }),
    api_version: z
      .int()
      .default(1)
      .exactOptional()
      .openapi({ description: 'API version. Defaults to 1' }),
  })
  .openapi({
    required: ['key', 'value'],
    description: 'Request body for creating an agent variable',
    title: 'CreateAgentVariableV1Request',
  })
  .openapi('CreateAgentVariableV1Request')

const AgentVariableV1Schema = z
  .object({
    variable_id: z.string().openapi({ description: 'The unique identifier of the variable' }),
    key: z
      .string()
      .openapi({ description: 'The variable name, following the DG_<VARIABLE_NAME> format' }),
    value: z.any().openapi({ description: 'The value to substitute. Can be any valid JSON type' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp when the variable was created' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp when the variable was last updated' }),
  })
  .openapi({
    required: ['variable_id', 'key', 'value'],
    description: 'A template variable for agent configurations',
    title: 'AgentVariableV1',
  })
  .openapi('AgentVariableV1')

const ListAgentVariablesV1ResponseSchema = z
  .object({
    variables: z
      .array(AgentVariableV1Schema)
      .exactOptional()
      .openapi({ description: 'A list of agent variables for the project' }),
  })
  .openapi({ title: 'ListAgentVariablesV1Response', required: [] })
  .openapi('ListAgentVariablesV1Response')

const UpdateAgentVariableV1RequestSchema = z
  .object({ value: z.any().openapi({ description: 'The new value to substitute' }) })
  .openapi({
    required: ['value'],
    description: 'Request body for updating an agent variable',
    title: 'UpdateAgentVariableV1Request',
  })
  .openapi('UpdateAgentVariableV1Request')

const DeleteAgentVariableV1ResponseSchema = z
  .object({})
  .openapi({
    description: 'Confirmation that the agent variable was deleted',
    title: 'DeleteAgentVariableV1Response',
  })
  .openapi('DeleteAgentVariableV1Response')

const V1ListenPostParametersCallbackMethodSchema = z
  .enum(['POST', 'PUT'])
  .default('POST')
  .openapi({ title: 'V1ListenPostParametersCallbackMethod' })
  .openapi('V1ListenPostParametersCallbackMethod')

const V1ListenPostParametersExtraSchema = z
  .xor([z.string(), z.array(z.string())])
  .openapi({ title: 'V1ListenPostParametersExtra' })
  .openapi('V1ListenPostParametersExtra')

const V1ListenPostParametersSummarize0Schema = z
  .literal('v2')
  .openapi({ title: 'V1ListenPostParametersSummarize0' })
  .openapi('V1ListenPostParametersSummarize0')

const V1ListenPostParametersSummarizeSchema = z
  .xor([V1ListenPostParametersSummarize0Schema, z.boolean().default(false)])
  .openapi({ title: 'V1ListenPostParametersSummarize' })
  .openapi('V1ListenPostParametersSummarize')

const V1ListenPostParametersTagSchema = z
  .xor([z.string(), z.array(z.string())])
  .openapi({ title: 'V1ListenPostParametersTag' })
  .openapi('V1ListenPostParametersTag')

const V1ListenPostParametersCustomTopicSchema = z
  .xor([z.string(), z.array(z.string())])
  .openapi({ title: 'V1ListenPostParametersCustomTopic' })
  .openapi('V1ListenPostParametersCustomTopic')

const V1ListenPostParametersCustomTopicModeSchema = z
  .enum(['extended', 'strict'])
  .default('extended')
  .openapi({ title: 'V1ListenPostParametersCustomTopicMode' })
  .openapi('V1ListenPostParametersCustomTopicMode')

const V1ListenPostParametersCustomIntentSchema = z
  .xor([z.string(), z.array(z.string())])
  .openapi({ title: 'V1ListenPostParametersCustomIntent' })
  .openapi('V1ListenPostParametersCustomIntent')

const V1ListenPostParametersCustomIntentModeSchema = z
  .enum(['extended', 'strict'])
  .default('extended')
  .openapi({ title: 'V1ListenPostParametersCustomIntentMode' })
  .openapi('V1ListenPostParametersCustomIntentMode')

const V1ListenPostParametersDetectLanguageSchema = z
  .xor([z.boolean().default(false), z.array(z.string())])
  .openapi({ title: 'V1ListenPostParametersDetectLanguage' })
  .openapi('V1ListenPostParametersDetectLanguage')

const V1ListenPostParametersDiarizeModelSchema = z
  .enum(['latest', 'v1', 'v2'])
  .openapi({ title: 'V1ListenPostParametersDiarizeModel' })
  .openapi('V1ListenPostParametersDiarizeModel')

const V1ListenPostParametersEncodingSchema = z
  .enum(['linear16', 'flac', 'mulaw', 'amr-nb', 'amr-wb', 'opus', 'speex', 'g729'])
  .openapi({ title: 'V1ListenPostParametersEncoding' })
  .openapi('V1ListenPostParametersEncoding')

const V1ListenPostParametersKeywordsSchema = z
  .xor([z.string(), z.array(z.string())])
  .openapi({ title: 'V1ListenPostParametersKeywords' })
  .openapi('V1ListenPostParametersKeywords')

const V1ListenPostParametersLanguageHintSchema = z
  .xor([z.string(), z.array(z.string())])
  .openapi({ title: 'V1ListenPostParametersLanguageHint' })
  .openapi('V1ListenPostParametersLanguageHint')

const V1ListenPostParametersModel0Schema = z
  .enum([
    'nova-3',
    'nova-3-general',
    'nova-3-medical',
    'nova-2',
    'nova-2-general',
    'nova-2-meeting',
    'nova-2-finance',
    'nova-2-conversationalai',
    'nova-2-voicemail',
    'nova-2-video',
    'nova-2-medical',
    'nova-2-drivethru',
    'nova-2-automotive',
    'nova',
    'nova-general',
    'nova-phonecall',
    'nova-medical',
    'enhanced',
    'enhanced-general',
    'enhanced-meeting',
    'enhanced-phonecall',
    'enhanced-finance',
    'base',
    'meeting',
    'phonecall',
    'finance',
    'conversationalai',
    'voicemail',
    'video',
  ])
  .openapi({
    description: 'Our public models available to all accounts',
    title: 'V1ListenPostParametersModel0',
  })
  .openapi('V1ListenPostParametersModel0')

const V1ListenPostParametersModelSchema = z
  .xor([V1ListenPostParametersModel0Schema, z.string()])
  .openapi({ title: 'V1ListenPostParametersModel' })
  .openapi('V1ListenPostParametersModel')

const V1ListenPostParametersRedactSchemaOneOf1ItemsSchema = z
  .enum(['pci', 'pii', 'numbers'])
  .openapi({ title: 'V1ListenPostParametersRedactSchemaOneOf1Items' })
  .openapi('V1ListenPostParametersRedactSchemaOneOf1Items')

const V1ListenPostParametersRedact1Schema = z
  .array(V1ListenPostParametersRedactSchemaOneOf1ItemsSchema)
  .openapi({ title: 'V1ListenPostParametersRedact1' })
  .openapi('V1ListenPostParametersRedact1')

const V1ListenPostParametersRedactSchema = z
  .xor([z.string(), V1ListenPostParametersRedact1Schema])
  .openapi({ title: 'V1ListenPostParametersRedact' })
  .openapi('V1ListenPostParametersRedact')

const V1ListenPostParametersReplaceSchema = z
  .xor([z.string(), z.array(z.string())])
  .openapi({ title: 'V1ListenPostParametersReplace' })
  .openapi('V1ListenPostParametersReplace')

const V1ListenPostParametersSearchSchema = z
  .xor([z.string(), z.array(z.string())])
  .openapi({ title: 'V1ListenPostParametersSearch' })
  .openapi('V1ListenPostParametersSearch')

const V1ListenPostParametersVersion0Schema = z
  .literal('latest')
  .openapi({
    description: 'Use the latest version of a model',
    title: 'V1ListenPostParametersVersion0',
  })
  .openapi('V1ListenPostParametersVersion0')

const V1ListenPostParametersVersionSchema = z
  .xor([V1ListenPostParametersVersion0Schema, z.string()])
  .openapi({ title: 'V1ListenPostParametersVersion' })
  .openapi('V1ListenPostParametersVersion')

const ListenV1RequestUrlSchema = z
  .object({ url: z.url() })
  .openapi({
    required: ['url'],
    description: 'Audio file URL to transcribe',
    title: 'ListenV1RequestUrl',
  })
  .openapi('ListenV1RequestUrl')

const ListenV1ResponseMetadataModelInfoSchema = z
  .object({})
  .openapi({ title: 'ListenV1ResponseMetadataModelInfo' })
  .openapi('ListenV1ResponseMetadataModelInfo')

const ListenV1ResponseMetadataDiarizeInfoSchema = z
  .object({
    model_uuid: z.string().openapi({ description: 'The diarizer model UUID' }),
    arch: z.string().openapi({ description: 'The diarizer arch, such as `v1` or `v2`' }),
  })
  .openapi({
    required: ['model_uuid', 'arch'],
    description: 'The diarizer that produced the speaker labels. Present only when a diarizer ran.',
    title: 'ListenV1ResponseMetadataDiarizeInfo',
  })
  .openapi('ListenV1ResponseMetadataDiarizeInfo')

const ListenV1ResponseMetadataSummaryInfoSchema = z
  .object({
    model_uuid: z.string().exactOptional(),
    input_tokens: z.int().exactOptional(),
    output_tokens: z.int().exactOptional(),
  })
  .openapi({ title: 'ListenV1ResponseMetadataSummaryInfo', required: [] })
  .openapi('ListenV1ResponseMetadataSummaryInfo')

const ListenV1ResponseMetadataSentimentInfoSchema = z
  .object({
    model_uuid: z.string().exactOptional(),
    input_tokens: z.int().exactOptional(),
    output_tokens: z.int().exactOptional(),
  })
  .openapi({ title: 'ListenV1ResponseMetadataSentimentInfo', required: [] })
  .openapi('ListenV1ResponseMetadataSentimentInfo')

const ListenV1ResponseMetadataTopicsInfoSchema = z
  .object({
    model_uuid: z.string().exactOptional(),
    input_tokens: z.int().exactOptional(),
    output_tokens: z.int().exactOptional(),
  })
  .openapi({ title: 'ListenV1ResponseMetadataTopicsInfo', required: [] })
  .openapi('ListenV1ResponseMetadataTopicsInfo')

const ListenV1ResponseMetadataIntentsInfoSchema = z
  .object({
    model_uuid: z.string().exactOptional(),
    input_tokens: z.int().exactOptional(),
    output_tokens: z.int().exactOptional(),
  })
  .openapi({ title: 'ListenV1ResponseMetadataIntentsInfo', required: [] })
  .openapi('ListenV1ResponseMetadataIntentsInfo')

const ListenV1ResponseMetadataSchema = z
  .object({
    transaction_key: z.string().default('deprecated').exactOptional().openapi({ deprecated: true }),
    request_id: z.uuid(),
    sha256: z.string(),
    created: z.iso.datetime({ offset: true }),
    duration: z.float64(),
    channels: z.int(),
    models: z.array(z.string()),
    model_info: ListenV1ResponseMetadataModelInfoSchema,
    diarize_info: ListenV1ResponseMetadataDiarizeInfoSchema.exactOptional().openapi({
      description:
        'The diarizer that produced the speaker labels. Present only when a diarizer ran.',
    }),
    summary_info: ListenV1ResponseMetadataSummaryInfoSchema.exactOptional(),
    sentiment_info: ListenV1ResponseMetadataSentimentInfoSchema.exactOptional(),
    topics_info: ListenV1ResponseMetadataTopicsInfoSchema.exactOptional(),
    intents_info: ListenV1ResponseMetadataIntentsInfoSchema.exactOptional(),
    tags: z.array(z.string()).exactOptional(),
  })
  .openapi({
    required: ['request_id', 'sha256', 'created', 'duration', 'channels', 'models', 'model_info'],
    title: 'ListenV1ResponseMetadata',
  })
  .openapi('ListenV1ResponseMetadata')

const ListenV1ResponseResultsChannelsItemsSearchItemsHitsItemsSchema = z
  .object({
    confidence: z.string().exactOptional().openapi({ title: 'float' }),
    start: z.string().exactOptional().openapi({ title: 'float' }),
    end: z.string().exactOptional().openapi({ title: 'float' }),
    snippet: z.string().exactOptional(),
  })
  .openapi({ title: 'ListenV1ResponseResultsChannelsItemsSearchItemsHitsItems', required: [] })
  .openapi('ListenV1ResponseResultsChannelsItemsSearchItemsHitsItems')

const ListenV1ResponseResultsChannelsItemsSearchItemsSchema = z
  .object({
    query: z.string().exactOptional(),
    hits: z.array(ListenV1ResponseResultsChannelsItemsSearchItemsHitsItemsSchema).exactOptional(),
  })
  .openapi({ title: 'ListenV1ResponseResultsChannelsItemsSearchItems', required: [] })
  .openapi('ListenV1ResponseResultsChannelsItemsSearchItems')

const ListenV1ResponseResultsChannelsItemsAlternativesItemsWordsItemsSchema = z
  .object({
    word: z.string().exactOptional(),
    start: z.string().exactOptional().openapi({ title: 'float' }),
    end: z.string().exactOptional().openapi({ title: 'float' }),
    confidence: z.string().exactOptional().openapi({ title: 'float' }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "[BCP-47](https://tools.ietf.org/html/bcp47) language tag of the word's detected language. Only present when `language=multi`. Can be absent on audio that switches languages.",
      }),
    speaker: z
      .int()
      .exactOptional()
      .openapi({ description: 'The speaker of the word, present when diarization is enabled' }),
    speaker_confidence: z
      .string()
      .exactOptional()
      .openapi({
        title: 'float',
        description:
          'Confidence in the speaker assignment. Returned only for pre-recorded diarization; not available for streaming',
      }),
  })
  .openapi({
    title: 'ListenV1ResponseResultsChannelsItemsAlternativesItemsWordsItems',
    required: [],
  })
  .openapi('ListenV1ResponseResultsChannelsItemsAlternativesItemsWordsItems')

const ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSentencesItemsSchema =
  z
    .object({
      text: z.string().exactOptional(),
      start: z.string().exactOptional().openapi({ title: 'float' }),
      end: z.string().exactOptional().openapi({ title: 'float' }),
    })
    .openapi({
      title:
        'ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSentencesItems',
      required: [],
    })
    .openapi(
      'ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSentencesItems',
    )

const ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSchema = z
  .object({
    sentences: z
      .array(
        ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSentencesItemsSchema,
      )
      .exactOptional(),
    speaker: z.int().exactOptional(),
    num_words: z.int().exactOptional(),
    start: z.string().exactOptional().openapi({ title: 'float' }),
    end: z.string().exactOptional().openapi({ title: 'float' }),
  })
  .openapi({
    title: 'ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItems',
    required: [],
  })
  .openapi('ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItems')

const ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsSchema = z
  .object({
    transcript: z.string().exactOptional(),
    paragraphs: z
      .array(ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSchema)
      .exactOptional(),
  })
  .openapi({
    title: 'ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphs',
    required: [],
  })
  .openapi('ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphs')

const ListenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItemsSchema = z
  .object({
    label: z.string().exactOptional(),
    value: z.string().exactOptional(),
    raw_value: z.string().exactOptional(),
    confidence: z.string().exactOptional().openapi({ title: 'float' }),
    start_word: z.string().exactOptional().openapi({ title: 'float' }),
    end_word: z.string().exactOptional().openapi({ title: 'float' }),
  })
  .openapi({
    title: 'ListenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItems',
    required: [],
  })
  .openapi('ListenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItems')

const ListenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItemsSchema = z
  .object({
    summary: z.string().exactOptional(),
    start_word: z.string().exactOptional().openapi({ title: 'float' }),
    end_word: z.string().exactOptional().openapi({ title: 'float' }),
  })
  .openapi({
    title: 'ListenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItems',
    required: [],
  })
  .openapi('ListenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItems')

const ListenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItemsSchema = z
  .object({
    text: z.string().exactOptional(),
    start_word: z.string().exactOptional().openapi({ title: 'float' }),
    end_word: z.string().exactOptional().openapi({ title: 'float' }),
    topics: z.array(z.string()).exactOptional(),
  })
  .openapi({
    title: 'ListenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItems',
    required: [],
  })
  .openapi('ListenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItems')

const ListenV1ResponseResultsChannelsItemsAlternativesItemsSchema = z
  .object({
    transcript: z.string().exactOptional(),
    confidence: z.string().exactOptional().openapi({ title: 'float' }),
    languages: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          '[BCP-47](https://tools.ietf.org/html/bcp47) language tags of the languages detected in the transcript, sorted by word count in descending order. Only present when `language=multi`. Can be absent on audio that switches languages.',
      }),
    languages_hinted: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The `language_hint` values for the request, normalized: codes are returned in canonical form (`ES` → `es`, `zh-hk` → `zh-HK`), and a regional code the model has no tag for is returned as its base language (`en-GB` → `en`). Returned on every Nova-3 multilingual response (`model=nova-3&language=multi`); an empty array when no `language_hint` was sent.',
      }),
    words: z
      .array(ListenV1ResponseResultsChannelsItemsAlternativesItemsWordsItemsSchema)
      .exactOptional(),
    paragraphs:
      ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsSchema.exactOptional(),
    entities: z
      .array(ListenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItemsSchema)
      .exactOptional(),
    summaries: z
      .array(ListenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItemsSchema)
      .exactOptional(),
    topics: z
      .array(ListenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItemsSchema)
      .exactOptional(),
  })
  .openapi({ title: 'ListenV1ResponseResultsChannelsItemsAlternativesItems', required: [] })
  .openapi('ListenV1ResponseResultsChannelsItemsAlternativesItems')

const ListenV1ResponseResultsChannelsItemsSchema = z
  .object({
    search: z.array(ListenV1ResponseResultsChannelsItemsSearchItemsSchema).exactOptional(),
    alternatives: z
      .array(ListenV1ResponseResultsChannelsItemsAlternativesItemsSchema)
      .exactOptional(),
    detected_language: z.string().exactOptional(),
  })
  .openapi({ title: 'ListenV1ResponseResultsChannelsItems', required: [] })
  .openapi('ListenV1ResponseResultsChannelsItems')

const ListenV1ResponseResultsChannelsSchema = z
  .array(ListenV1ResponseResultsChannelsItemsSchema)
  .openapi({ title: 'ListenV1ResponseResultsChannels' })
  .openapi('ListenV1ResponseResultsChannels')

const ListenV1ResponseResultsUtterancesItemsWordsItemsSchema = z
  .object({
    word: z.string().exactOptional(),
    start: z.string().exactOptional().openapi({ title: 'float' }),
    end: z.string().exactOptional().openapi({ title: 'float' }),
    confidence: z.string().exactOptional().openapi({ title: 'float' }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "[BCP-47](https://tools.ietf.org/html/bcp47) language tag of the word's detected language. Only present when `language=multi`. Can be absent on audio that switches languages.",
      }),
    speaker: z.int().exactOptional(),
    speaker_confidence: z.string().exactOptional().openapi({ title: 'float' }),
    punctuated_word: z.string().exactOptional(),
  })
  .openapi({ title: 'ListenV1ResponseResultsUtterancesItemsWordsItems', required: [] })
  .openapi('ListenV1ResponseResultsUtterancesItemsWordsItems')

const ListenV1ResponseResultsUtterancesItemsSchema = z
  .object({
    start: z.string().exactOptional().openapi({ title: 'float' }),
    end: z.string().exactOptional().openapi({ title: 'float' }),
    confidence: z.string().exactOptional().openapi({ title: 'float' }),
    channel: z.int().exactOptional(),
    transcript: z.string().exactOptional(),
    languages: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          '[BCP-47](https://tools.ietf.org/html/bcp47) language tags of the languages detected in the utterance, sorted by word count in descending order. Only present when `language=multi`.',
      }),
    words: z.array(ListenV1ResponseResultsUtterancesItemsWordsItemsSchema).exactOptional(),
    speaker: z.int().exactOptional(),
    id: z.uuid().exactOptional(),
  })
  .openapi({ title: 'ListenV1ResponseResultsUtterancesItems', required: [] })
  .openapi('ListenV1ResponseResultsUtterancesItems')

const ListenV1ResponseResultsUtterancesSchema = z
  .array(ListenV1ResponseResultsUtterancesItemsSchema)
  .openapi({ title: 'ListenV1ResponseResultsUtterances' })
  .openapi('ListenV1ResponseResultsUtterances')

const ListenV1ResponseResultsSummarySchema = z
  .object({ result: z.string().exactOptional(), short: z.string().exactOptional() })
  .openapi({ title: 'ListenV1ResponseResultsSummary', required: [] })
  .openapi('ListenV1ResponseResultsSummary')

const SharedTopicsSegmentsItemsTopicsItemsSchema = z
  .object({
    topic: z.string().exactOptional(),
    confidence_score: z.string().exactOptional().openapi({ title: 'float' }),
  })
  .openapi({ title: 'SharedTopicsSegmentsItemsTopicsItems', required: [] })
  .openapi('SharedTopicsSegmentsItemsTopicsItems')

const SharedTopicsSegmentsItemsSchema = z
  .object({
    text: z.string().exactOptional(),
    start_word: z.float64().exactOptional(),
    end_word: z.float64().exactOptional(),
    topics: z.array(SharedTopicsSegmentsItemsTopicsItemsSchema).exactOptional(),
  })
  .openapi({ title: 'SharedTopicsSegmentsItems', required: [] })
  .openapi('SharedTopicsSegmentsItems')

const SharedTopicsSchema = z
  .object({ segments: z.array(SharedTopicsSegmentsItemsSchema).exactOptional() })
  .openapi({
    description: 'Output whenever `topics=true` is used',
    title: 'SharedTopics',
    required: [],
  })
  .openapi('SharedTopics')

const SharedIntentsSegmentsItemsIntentsItemsSchema = z
  .object({
    intent: z.string().exactOptional(),
    confidence_score: z.string().exactOptional().openapi({ title: 'float' }),
  })
  .openapi({ title: 'SharedIntentsSegmentsItemsIntentsItems', required: [] })
  .openapi('SharedIntentsSegmentsItemsIntentsItems')

const SharedIntentsSegmentsItemsSchema = z
  .object({
    text: z.string().exactOptional(),
    start_word: z.float64().exactOptional(),
    end_word: z.float64().exactOptional(),
    intents: z.array(SharedIntentsSegmentsItemsIntentsItemsSchema).exactOptional(),
  })
  .openapi({ title: 'SharedIntentsSegmentsItems', required: [] })
  .openapi('SharedIntentsSegmentsItems')

const SharedIntentsSchema = z
  .object({ segments: z.array(SharedIntentsSegmentsItemsSchema).exactOptional() })
  .openapi({
    description: 'Output whenever `intents=true` is used',
    title: 'SharedIntents',
    required: [],
  })
  .openapi('SharedIntents')

const SharedSentimentsSegmentsItemsSchema = z
  .object({
    text: z.string().exactOptional(),
    start_word: z.float64().exactOptional(),
    end_word: z.float64().exactOptional(),
    sentiment: z.string().exactOptional(),
    sentiment_score: z.float64().exactOptional(),
  })
  .openapi({ title: 'SharedSentimentsSegmentsItems', required: [] })
  .openapi('SharedSentimentsSegmentsItems')

const SharedSentimentsAverageSchema = z
  .object({ sentiment: z.string().exactOptional(), sentiment_score: z.float64().exactOptional() })
  .openapi({ title: 'SharedSentimentsAverage', required: [] })
  .openapi('SharedSentimentsAverage')

const SharedSentimentsSchema = z
  .object({
    segments: z.array(SharedSentimentsSegmentsItemsSchema).exactOptional(),
    average: SharedSentimentsAverageSchema.exactOptional(),
  })
  .openapi({
    description: 'Output whenever `sentiment=true` is used',
    title: 'SharedSentiments',
    required: [],
  })
  .openapi('SharedSentiments')

const ListenV1ResponseResultsSchema = z
  .object({
    channels: ListenV1ResponseResultsChannelsSchema,
    utterances: ListenV1ResponseResultsUtterancesSchema.exactOptional(),
    summary: ListenV1ResponseResultsSummarySchema.exactOptional(),
    topics: SharedTopicsSchema.exactOptional(),
    intents: SharedIntentsSchema.exactOptional(),
    sentiments: SharedSentimentsSchema.exactOptional(),
  })
  .openapi({ required: ['channels'], title: 'ListenV1ResponseResults' })
  .openapi('ListenV1ResponseResults')

const ListenV1ResponseSchema = z
  .object({ metadata: ListenV1ResponseMetadataSchema, results: ListenV1ResponseResultsSchema })
  .openapi({
    required: ['metadata', 'results'],
    description: 'The standard transcription response',
    title: 'ListenV1Response',
  })
  .openapi('ListenV1Response')

const ListenV1AcceptedResponseSchema = z
  .object({
    request_id: z
      .uuid()
      .openapi({ description: 'Unique identifier for tracking the asynchronous request' }),
  })
  .openapi({
    required: ['request_id'],
    description: 'Accepted response for asynchronous transcription requests',
    title: 'ListenV1AcceptedResponse',
  })
  .openapi('ListenV1AcceptedResponse')

const ListenV1MediaTranscribeResponse_200Schema = z
  .xor([ListenV1ResponseSchema, ListenV1AcceptedResponseSchema])
  .openapi({ title: 'listen_v1_media_transcribe_Response_200' })
  .openapi('ListenV1MediaTranscribeResponse_200')

const V1SpeakPostParametersCallbackMethodSchema = z
  .enum(['POST', 'PUT'])
  .default('POST')
  .openapi({ title: 'V1SpeakPostParametersCallbackMethod' })
  .openapi('V1SpeakPostParametersCallbackMethod')

const V1SpeakPostParametersTagSchema = z
  .xor([z.string(), z.array(z.string())])
  .openapi({ title: 'V1SpeakPostParametersTag' })
  .openapi('V1SpeakPostParametersTag')

const V1SpeakPostParametersBitRate0Schema = z
  .enum(['32000', '48000'])
  .openapi({
    description: 'Encoding - mp3(default). Supported bitrates - 32000, 48000(default) bps.',
    title: 'V1SpeakPostParametersBitRate0',
  })
  .openapi('V1SpeakPostParametersBitRate0')

const V1SpeakPostParametersBitRateSchema = z
  .xor([
    V1SpeakPostParametersBitRate0Schema,
    z.float64().min(4000).max(650000),
    z.float64().min(4000).max(192000),
  ])
  .openapi({ title: 'V1SpeakPostParametersBitRate' })
  .openapi('V1SpeakPostParametersBitRate')

const V1SpeakPostParametersContainer0Schema = z
  .literal('none')
  .openapi({ description: 'No container.', title: 'V1SpeakPostParametersContainer0' })
  .openapi('V1SpeakPostParametersContainer0')

const V1SpeakPostParametersContainer1Schema = z
  .literal('wav')
  .openapi({
    description: 'Encoding - linear16. Supported container - wav (default), or no container.',
    title: 'V1SpeakPostParametersContainer1',
  })
  .openapi('V1SpeakPostParametersContainer1')

const V1SpeakPostParametersContainer2Schema = z
  .literal('wav')
  .openapi({
    description: 'Encoding - mulaw. Supported container - wav (default), or no container.',
    title: 'V1SpeakPostParametersContainer2',
  })
  .openapi('V1SpeakPostParametersContainer2')

const V1SpeakPostParametersContainer3Schema = z
  .literal('wav')
  .openapi({
    description: 'Encoding - alaw. Supported container - wav (default), or no container.',
    title: 'V1SpeakPostParametersContainer3',
  })
  .openapi('V1SpeakPostParametersContainer3')

const V1SpeakPostParametersContainer4Schema = z
  .literal('ogg')
  .openapi({
    description: 'Encoding - opus. Supported container - ogg (default).',
    title: 'V1SpeakPostParametersContainer4',
  })
  .openapi('V1SpeakPostParametersContainer4')

const V1SpeakPostParametersContainerSchema = z
  .xor([
    V1SpeakPostParametersContainer0Schema,
    V1SpeakPostParametersContainer1Schema,
    V1SpeakPostParametersContainer2Schema,
    V1SpeakPostParametersContainer3Schema,
    V1SpeakPostParametersContainer4Schema,
  ])
  .openapi({ title: 'V1SpeakPostParametersContainer' })
  .openapi('V1SpeakPostParametersContainer')

const V1SpeakPostParametersEncoding0Schema = z
  .literal('linear16')
  .openapi({
    description:
      'Encoding - linear16. Uncompressed, high-quality audio format often used for telephony or audio processing.',
    title: 'V1SpeakPostParametersEncoding0',
  })
  .openapi('V1SpeakPostParametersEncoding0')

const V1SpeakPostParametersEncoding1Schema = z
  .literal('flac')
  .openapi({
    description: 'Encoding - flac. Lossless audio format for high-quality compression.',
    title: 'V1SpeakPostParametersEncoding1',
  })
  .openapi('V1SpeakPostParametersEncoding1')

const V1SpeakPostParametersEncoding2Schema = z
  .literal('mulaw')
  .openapi({
    description: 'Encoding - mulaw. Compressed audio format commonly used in telephony.',
    title: 'V1SpeakPostParametersEncoding2',
  })
  .openapi('V1SpeakPostParametersEncoding2')

const V1SpeakPostParametersEncoding3Schema = z
  .literal('alaw')
  .openapi({
    description: 'Encoding - alaw. Similar to mulaw but used in international telephony.',
    title: 'V1SpeakPostParametersEncoding3',
  })
  .openapi('V1SpeakPostParametersEncoding3')

const V1SpeakPostParametersEncoding4Schema = z
  .literal('mp3')
  .openapi({
    description: 'Encoding - mp3. Popular compressed audio format for music and streaming.',
    title: 'V1SpeakPostParametersEncoding4',
  })
  .openapi('V1SpeakPostParametersEncoding4')

const V1SpeakPostParametersEncoding5Schema = z
  .literal('opus')
  .openapi({
    description:
      'Encoding - opus. High-compression audio format optimized for real-time communications.',
    title: 'V1SpeakPostParametersEncoding5',
  })
  .openapi('V1SpeakPostParametersEncoding5')

const V1SpeakPostParametersEncoding6Schema = z
  .literal('aac')
  .openapi({
    description:
      'Encoding - aac. Advanced audio format offering better quality at smaller file sizes than mp3.',
    title: 'V1SpeakPostParametersEncoding6',
  })
  .openapi('V1SpeakPostParametersEncoding6')

const V1SpeakPostParametersEncodingSchema = z
  .xor([
    V1SpeakPostParametersEncoding0Schema,
    V1SpeakPostParametersEncoding1Schema,
    V1SpeakPostParametersEncoding2Schema,
    V1SpeakPostParametersEncoding3Schema,
    V1SpeakPostParametersEncoding4Schema,
    V1SpeakPostParametersEncoding5Schema,
    V1SpeakPostParametersEncoding6Schema,
  ])
  .openapi({ title: 'V1SpeakPostParametersEncoding' })
  .openapi('V1SpeakPostParametersEncoding')

const V1SpeakPostParametersModelSchema = z
  .enum([
    'aura-angus-en',
    'aura-arcas-en',
    'aura-asteria-en',
    'aura-athena-en',
    'aura-helios-en',
    'aura-hera-en',
    'aura-luna-en',
    'aura-orion-en',
    'aura-orpheus-en',
    'aura-perseus-en',
    'aura-stella-en',
    'aura-zeus-en',
    'aura-2-amalthea-en',
    'aura-2-andromeda-en',
    'aura-2-apollo-en',
    'aura-2-arcas-en',
    'aura-2-aries-en',
    'aura-2-asteria-en',
    'aura-2-athena-en',
    'aura-2-atlas-en',
    'aura-2-aurora-en',
    'aura-2-callista-en',
    'aura-2-cora-en',
    'aura-2-cordelia-en',
    'aura-2-delia-en',
    'aura-2-draco-en',
    'aura-2-electra-en',
    'aura-2-harmonia-en',
    'aura-2-helena-en',
    'aura-2-hera-en',
    'aura-2-hermes-en',
    'aura-2-hyperion-en',
    'aura-2-iris-en',
    'aura-2-janus-en',
    'aura-2-juno-en',
    'aura-2-jupiter-en',
    'aura-2-luna-en',
    'aura-2-mars-en',
    'aura-2-minerva-en',
    'aura-2-neptune-en',
    'aura-2-odysseus-en',
    'aura-2-ophelia-en',
    'aura-2-orion-en',
    'aura-2-orpheus-en',
    'aura-2-pandora-en',
    'aura-2-phoebe-en',
    'aura-2-pluto-en',
    'aura-2-saturn-en',
    'aura-2-selene-en',
    'aura-2-thalia-en',
    'aura-2-theia-en',
    'aura-2-vesta-en',
    'aura-2-zeus-en',
    'aura-2-agustina-es',
    'aura-2-alvaro-es',
    'aura-2-antonia-es',
    'aura-2-aquila-es',
    'aura-2-carina-es',
    'aura-2-celeste-es',
    'aura-2-diana-es',
    'aura-2-estrella-es',
    'aura-2-gloria-es',
    'aura-2-javier-es',
    'aura-2-luciano-es',
    'aura-2-nestor-es',
    'aura-2-olivia-es',
    'aura-2-selena-es',
    'aura-2-silvia-es',
    'aura-2-sirio-es',
    'aura-2-valerio-es',
    'aura-2-aurelia-de',
    'aura-2-elara-de',
    'aura-2-fabian-de',
    'aura-2-julius-de',
    'aura-2-kara-de',
    'aura-2-lara-de',
    'aura-2-viktoria-de',
    'aura-2-beatrix-nl',
    'aura-2-cornelia-nl',
    'aura-2-daphne-nl',
    'aura-2-hestia-nl',
    'aura-2-lars-nl',
    'aura-2-leda-nl',
    'aura-2-rhea-nl',
    'aura-2-roman-nl',
    'aura-2-sander-nl',
    'aura-2-agathe-fr',
    'aura-2-hector-fr',
    'aura-2-cesare-it',
    'aura-2-cinzia-it',
    'aura-2-demetra-it',
    'aura-2-dionisio-it',
    'aura-2-elio-it',
    'aura-2-flavio-it',
    'aura-2-livia-it',
    'aura-2-maia-it',
    'aura-2-melia-it',
    'aura-2-ama-ja',
    'aura-2-ebisu-ja',
    'aura-2-fujin-ja',
    'aura-2-izanami-ja',
    'aura-2-uzume-ja',
  ])
  .default('aura-asteria-en')
  .openapi({ title: 'V1SpeakPostParametersModel' })
  .openapi('V1SpeakPostParametersModel')

const V1SpeakPostParametersSampleRate0Schema = z
  .enum(['8000', '16000', '24000', '32000', '48000'])
  .openapi({
    description:
      'Encoding - linear16. Supported sample rates - 8000, 16000, 24000, 32000, 48000 Hz.',
    title: 'V1SpeakPostParametersSampleRate0',
  })
  .openapi('V1SpeakPostParametersSampleRate0')

const V1SpeakPostParametersSampleRate1Schema = z
  .enum(['8000', '16000'])
  .openapi({
    description: 'Encoding - mulaw. Supported sample rates - 8000, 16000 Hz.',
    title: 'V1SpeakPostParametersSampleRate1',
  })
  .openapi('V1SpeakPostParametersSampleRate1')

const V1SpeakPostParametersSampleRate2Schema = z
  .enum(['8000', '16000'])
  .openapi({
    description: 'Encoding - alaw. Supported sample rates - 8000, 16000 Hz.',
    title: 'V1SpeakPostParametersSampleRate2',
  })
  .openapi('V1SpeakPostParametersSampleRate2')

const V1SpeakPostParametersSampleRate3Schema = z
  .literal('22050')
  .openapi({
    description: 'Encoding - mp3. Sample rate is fixed and not configurable (22050 Hz).',
    title: 'V1SpeakPostParametersSampleRate3',
  })
  .openapi('V1SpeakPostParametersSampleRate3')

const V1SpeakPostParametersSampleRate4Schema = z
  .literal('48000')
  .openapi({
    description: 'Encoding - opus. Sample rate is fixed at 48000 Hz.',
    title: 'V1SpeakPostParametersSampleRate4',
  })
  .openapi('V1SpeakPostParametersSampleRate4')

const V1SpeakPostParametersSampleRateSchema = z
  .xor([
    V1SpeakPostParametersSampleRate0Schema,
    V1SpeakPostParametersSampleRate1Schema,
    V1SpeakPostParametersSampleRate2Schema,
    V1SpeakPostParametersSampleRate3Schema,
    V1SpeakPostParametersSampleRate4Schema,
  ])
  .openapi({ title: 'V1SpeakPostParametersSampleRate' })
  .openapi('V1SpeakPostParametersSampleRate')

const SpeakV1RequestSchema = z
  .object({
    text: z.string().openapi({ description: 'The text content to be converted to speech' }),
  })
  .openapi({
    required: ['text'],
    description: 'Request body for text-to-speech conversion',
    title: 'SpeakV1Request',
  })
  .openapi('SpeakV1Request')

const SpeakV1AudioGenerateResponse_200Schema = z
  .object({})
  .openapi({ description: 'Empty response body', title: 'speak_v1_audio_generate_Response_200' })
  .openapi('SpeakV1AudioGenerateResponse_200')

const V1ReadPostParametersCallbackMethodSchema = z
  .enum(['POST', 'PUT'])
  .default('POST')
  .openapi({ title: 'V1ReadPostParametersCallbackMethod' })
  .openapi('V1ReadPostParametersCallbackMethod')

const V1ReadPostParametersSummarize0Schema = z
  .literal('v2')
  .openapi({ title: 'V1ReadPostParametersSummarize0' })
  .openapi('V1ReadPostParametersSummarize0')

const V1ReadPostParametersSummarizeSchema = z
  .xor([V1ReadPostParametersSummarize0Schema, z.boolean().default(false)])
  .openapi({ title: 'V1ReadPostParametersSummarize' })
  .openapi('V1ReadPostParametersSummarize')

const V1ReadPostParametersTagSchema = z
  .xor([z.string(), z.array(z.string())])
  .openapi({ title: 'V1ReadPostParametersTag' })
  .openapi('V1ReadPostParametersTag')

const V1ReadPostParametersCustomTopicSchema = z
  .xor([z.string(), z.array(z.string())])
  .openapi({ title: 'V1ReadPostParametersCustomTopic' })
  .openapi('V1ReadPostParametersCustomTopic')

const V1ReadPostParametersCustomTopicModeSchema = z
  .enum(['extended', 'strict'])
  .default('extended')
  .openapi({ title: 'V1ReadPostParametersCustomTopicMode' })
  .openapi('V1ReadPostParametersCustomTopicMode')

const V1ReadPostParametersCustomIntentSchema = z
  .xor([z.string(), z.array(z.string())])
  .openapi({ title: 'V1ReadPostParametersCustomIntent' })
  .openapi('V1ReadPostParametersCustomIntent')

const V1ReadPostParametersCustomIntentModeSchema = z
  .enum(['extended', 'strict'])
  .default('extended')
  .openapi({ title: 'V1ReadPostParametersCustomIntentMode' })
  .openapi('V1ReadPostParametersCustomIntentMode')

const ReadV1RequestUrlSchema = z
  .object({ url: z.url().openapi({ description: 'A URL pointing to the text source' }) })
  .openapi({ required: ['url'], title: 'ReadV1RequestUrl' })
  .openapi('ReadV1RequestUrl')

const ReadV1RequestTextSchema = z
  .object({ text: z.string().openapi({ description: 'The plain text to analyze' }) })
  .openapi({ required: ['text'], title: 'ReadV1RequestText' })
  .openapi('ReadV1RequestText')

const ReadV1RequestSchema = z
  .xor([ReadV1RequestUrlSchema, ReadV1RequestTextSchema])
  .openapi({ title: 'ReadV1Request' })
  .openapi('ReadV1Request')

const ReadV1ResponseMetadataMetadataSummaryInfoSchema = z
  .object({
    model_uuid: z.uuid().exactOptional(),
    input_tokens: z.int().exactOptional(),
    output_tokens: z.int().exactOptional(),
  })
  .openapi({ title: 'ReadV1ResponseMetadataMetadataSummaryInfo', required: [] })
  .openapi('ReadV1ResponseMetadataMetadataSummaryInfo')

const ReadV1ResponseMetadataMetadataSentimentInfoSchema = z
  .object({
    model_uuid: z.uuid().exactOptional(),
    input_tokens: z.int().exactOptional(),
    output_tokens: z.int().exactOptional(),
  })
  .openapi({ title: 'ReadV1ResponseMetadataMetadataSentimentInfo', required: [] })
  .openapi('ReadV1ResponseMetadataMetadataSentimentInfo')

const ReadV1ResponseMetadataMetadataTopicsInfoSchema = z
  .object({
    model_uuid: z.uuid().exactOptional(),
    input_tokens: z.int().exactOptional(),
    output_tokens: z.int().exactOptional(),
  })
  .openapi({ title: 'ReadV1ResponseMetadataMetadataTopicsInfo', required: [] })
  .openapi('ReadV1ResponseMetadataMetadataTopicsInfo')

const ReadV1ResponseMetadataMetadataIntentsInfoSchema = z
  .object({
    model_uuid: z.uuid().exactOptional(),
    input_tokens: z.int().exactOptional(),
    output_tokens: z.int().exactOptional(),
  })
  .openapi({ title: 'ReadV1ResponseMetadataMetadataIntentsInfo', required: [] })
  .openapi('ReadV1ResponseMetadataMetadataIntentsInfo')

const ReadV1ResponseMetadataMetadataSchema = z
  .object({
    request_id: z.uuid().exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    language: z.string().exactOptional(),
    summary_info: ReadV1ResponseMetadataMetadataSummaryInfoSchema.exactOptional(),
    sentiment_info: ReadV1ResponseMetadataMetadataSentimentInfoSchema.exactOptional(),
    topics_info: ReadV1ResponseMetadataMetadataTopicsInfoSchema.exactOptional(),
    intents_info: ReadV1ResponseMetadataMetadataIntentsInfoSchema.exactOptional(),
  })
  .openapi({ title: 'ReadV1ResponseMetadataMetadata', required: [] })
  .openapi('ReadV1ResponseMetadataMetadata')

const ReadV1ResponseMetadataSchema = z
  .object({ metadata: ReadV1ResponseMetadataMetadataSchema.exactOptional() })
  .openapi({ title: 'ReadV1ResponseMetadata', required: [] })
  .openapi('ReadV1ResponseMetadata')

const ReadV1ResponseResultsSummaryResultsSummarySchema = z
  .object({ text: z.string().exactOptional() })
  .openapi({ title: 'ReadV1ResponseResultsSummaryResultsSummary', required: [] })
  .openapi('ReadV1ResponseResultsSummaryResultsSummary')

const ReadV1ResponseResultsSummaryResultsSchema = z
  .object({ summary: ReadV1ResponseResultsSummaryResultsSummarySchema.exactOptional() })
  .openapi({ title: 'ReadV1ResponseResultsSummaryResults', required: [] })
  .openapi('ReadV1ResponseResultsSummaryResults')

const ReadV1ResponseResultsSummarySchema = z
  .object({ results: ReadV1ResponseResultsSummaryResultsSchema.exactOptional() })
  .openapi({
    description: 'Output whenever `summary=true` is used',
    title: 'ReadV1ResponseResultsSummary',
    required: [],
  })
  .openapi('ReadV1ResponseResultsSummary')

const ReadV1ResponseResultsSchema = z
  .object({
    summary: ReadV1ResponseResultsSummarySchema.exactOptional(),
    topics: SharedTopicsSchema.exactOptional(),
    intents: SharedIntentsSchema.exactOptional(),
    sentiments: SharedSentimentsSchema.exactOptional(),
  })
  .openapi({ title: 'ReadV1ResponseResults', required: [] })
  .openapi('ReadV1ResponseResults')

const ReadV1ResponseSchema = z
  .object({ metadata: ReadV1ResponseMetadataSchema, results: ReadV1ResponseResultsSchema })
  .openapi({
    required: ['metadata', 'results'],
    description: 'The standard text response',
    title: 'ReadV1Response',
  })
  .openapi('ReadV1Response')

const ListProjectsV1ResponseProjectsItemsSchema = z
  .object({
    project_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the project' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the project' }),
  })
  .openapi({ title: 'ListProjectsV1ResponseProjectsItems', required: [] })
  .openapi('ListProjectsV1ResponseProjectsItems')

const ListProjectsV1ResponseSchema = z
  .object({ projects: z.array(ListProjectsV1ResponseProjectsItemsSchema).exactOptional() })
  .openapi({ title: 'ListProjectsV1Response', required: [] })
  .openapi('ListProjectsV1Response')

const GetProjectV1ResponseSchema = z
  .object({
    project_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the project' }),
    mip_opt_out: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Model Improvement Program opt-out' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the project' }),
  })
  .openapi({ title: 'GetProjectV1Response', required: [] })
  .openapi('GetProjectV1Response')

const UpdateProjectV1RequestSchema = z
  .object({ name: z.string().exactOptional().openapi({ description: 'The name of the project' }) })
  .openapi({ title: 'UpdateProjectV1Request', required: [] })
  .openapi('UpdateProjectV1Request')

const UpdateProjectV1ResponseSchema = z
  .object({ message: z.string().exactOptional().openapi({ description: 'confirmation message' }) })
  .openapi({ title: 'UpdateProjectV1Response', required: [] })
  .openapi('UpdateProjectV1Response')

const DeleteProjectV1ResponseSchema = z
  .object({ message: z.string().exactOptional().openapi({ description: 'Confirmation message' }) })
  .openapi({ title: 'DeleteProjectV1Response', required: [] })
  .openapi('DeleteProjectV1Response')

const LeaveProjectV1ResponseSchema = z
  .object({ message: z.string().exactOptional().openapi({ description: 'confirmation message' }) })
  .openapi({ title: 'LeaveProjectV1Response', required: [] })
  .openapi('LeaveProjectV1Response')

const ListModelsV1ResponseSttModelsSchema = z
  .object({
    name: z.string().exactOptional(),
    canonical_name: z.string().exactOptional(),
    architecture: z.string().exactOptional(),
    languages: z.array(z.string()).exactOptional(),
    version: z.string().exactOptional(),
    uuid: z.string().exactOptional(),
    batch: z.boolean().exactOptional(),
    streaming: z.boolean().exactOptional(),
    formatted_output: z.boolean().exactOptional(),
  })
  .openapi({ title: 'ListModelsV1ResponseSttModels', required: [] })
  .openapi('ListModelsV1ResponseSttModels')

const ListModelsV1ResponseTtsModelsMetadataSchema = z
  .object({
    accent: z.string().exactOptional(),
    age: z.string().exactOptional(),
    color: z.string().exactOptional(),
    image: z.url().exactOptional(),
    sample: z.url().exactOptional(),
    tags: z.array(z.string()).exactOptional(),
    use_cases: z.array(z.string()).exactOptional(),
  })
  .openapi({ title: 'ListModelsV1ResponseTtsModelsMetadata', required: [] })
  .openapi('ListModelsV1ResponseTtsModelsMetadata')

const ListModelsV1ResponseTtsModelsSchema = z
  .object({
    name: z.string().exactOptional(),
    canonical_name: z.string().exactOptional(),
    architecture: z.string().exactOptional(),
    languages: z.array(z.string()).exactOptional(),
    version: z.string().exactOptional(),
    uuid: z.uuid().exactOptional(),
    metadata: ListModelsV1ResponseTtsModelsMetadataSchema.exactOptional(),
  })
  .openapi({ title: 'ListModelsV1ResponseTtsModels', required: [] })
  .openapi('ListModelsV1ResponseTtsModels')

const ListModelsV1ResponseSchema = z
  .object({
    stt: z.array(ListModelsV1ResponseSttModelsSchema).exactOptional(),
    tts: z.array(ListModelsV1ResponseTtsModelsSchema).exactOptional(),
  })
  .openapi({ title: 'ListModelsV1Response', required: [] })
  .openapi('ListModelsV1Response')

const GetModelV1Response0Schema = z
  .object({
    name: z.string().exactOptional(),
    canonical_name: z.string().exactOptional(),
    architecture: z.string().exactOptional(),
    languages: z.array(z.string()).exactOptional(),
    version: z.string().exactOptional(),
    uuid: z.uuid().exactOptional(),
    batch: z.boolean().exactOptional(),
    streaming: z.boolean().exactOptional(),
    formatted_output: z.boolean().exactOptional(),
  })
  .openapi({ title: 'GetModelV1Response0', required: [] })
  .openapi('GetModelV1Response0')

const GetModelV1ResponseOneOf1MetadataSchema = z
  .object({
    accent: z.string().exactOptional(),
    age: z.string().exactOptional(),
    color: z.string().exactOptional(),
    image: z.url().exactOptional(),
    sample: z.url().exactOptional(),
    tags: z.array(z.string()).exactOptional(),
    use_cases: z.array(z.string()).exactOptional(),
  })
  .openapi({ title: 'GetModelV1ResponseOneOf1Metadata', required: [] })
  .openapi('GetModelV1ResponseOneOf1Metadata')

const GetModelV1Response1Schema = z
  .object({
    name: z.string().exactOptional(),
    canonical_name: z.string().exactOptional(),
    architecture: z.string().exactOptional(),
    languages: z.array(z.string()).exactOptional(),
    version: z.string().exactOptional(),
    uuid: z.uuid().exactOptional(),
    metadata: GetModelV1ResponseOneOf1MetadataSchema.exactOptional(),
  })
  .openapi({ title: 'GetModelV1Response1', required: [] })
  .openapi('GetModelV1Response1')

const GetModelV1ResponseSchema = z
  .xor([GetModelV1Response0Schema, GetModelV1Response1Schema])
  .openapi({ title: 'GetModelV1Response' })
  .openapi('GetModelV1Response')

const V1ProjectsProjectIdKeysGetParametersStatusSchema = z
  .enum(['active', 'expired'])
  .openapi({ title: 'V1ProjectsProjectIdKeysGetParametersStatus' })
  .openapi('V1ProjectsProjectIdKeysGetParametersStatus')

const ListProjectKeysV1ResponseApiKeysItemsMemberSchema = z
  .object({ member_id: z.string().exactOptional(), email: z.string().exactOptional() })
  .openapi({ title: 'ListProjectKeysV1ResponseApiKeysItemsMember', required: [] })
  .openapi('ListProjectKeysV1ResponseApiKeysItemsMember')

const ListProjectKeysV1ResponseApiKeysItemsApiKeySchema = z
  .object({
    api_key_id: z.string().exactOptional(),
    comment: z.string().exactOptional(),
    scopes: z.array(z.string()).exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ title: 'ListProjectKeysV1ResponseApiKeysItemsApiKey', required: [] })
  .openapi('ListProjectKeysV1ResponseApiKeysItemsApiKey')

const ListProjectKeysV1ResponseApiKeysItemsSchema = z
  .object({
    member: ListProjectKeysV1ResponseApiKeysItemsMemberSchema.exactOptional(),
    api_key: ListProjectKeysV1ResponseApiKeysItemsApiKeySchema.exactOptional(),
  })
  .openapi({ title: 'ListProjectKeysV1ResponseApiKeysItems', required: [] })
  .openapi('ListProjectKeysV1ResponseApiKeysItems')

const ListProjectKeysV1ResponseSchema = z
  .object({ api_keys: z.array(ListProjectKeysV1ResponseApiKeysItemsSchema).exactOptional() })
  .openapi({ title: 'ListProjectKeysV1Response', required: [] })
  .openapi('ListProjectKeysV1Response')

const CreateKeyV1RequestSchema = z
  .xor([z.any().openapi({ description: 'Any type' }), z.any().openapi({ description: 'Any type' })])
  .openapi({ title: 'CreateKeyV1Request' })
  .openapi('CreateKeyV1Request')

const CreateKeyV1ResponseSchema = z
  .object({
    api_key_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the API key' }),
    key: z.string().exactOptional().openapi({ description: 'The API key' }),
    comment: z.string().exactOptional().openapi({ description: 'A comment for the API key' }),
    scopes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The scopes for the API key' }),
    tags: z.array(z.string()).exactOptional().openapi({ description: 'The tags for the API key' }),
    expiration_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The expiration date of the API key' }),
  })
  .openapi({ description: 'API key created', title: 'CreateKeyV1Response', required: [] })
  .openapi('CreateKeyV1Response')

const GetProjectKeyV1ResponseItemMemberApiKeySchema = z
  .object({
    api_key_id: z.string().exactOptional(),
    comment: z.string().exactOptional(),
    scopes: z.array(z.string()).exactOptional(),
    tags: z.array(z.string()).exactOptional(),
    expiration_date: z.iso.datetime({ offset: true }).exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ title: 'GetProjectKeyV1ResponseItemMemberApiKey', required: [] })
  .openapi('GetProjectKeyV1ResponseItemMemberApiKey')

const GetProjectKeyV1ResponseItemMemberSchema = z
  .object({
    member_id: z.string().exactOptional(),
    email: z.string().exactOptional(),
    first_name: z.string().exactOptional(),
    last_name: z.string().exactOptional(),
    api_key: GetProjectKeyV1ResponseItemMemberApiKeySchema.exactOptional(),
  })
  .openapi({ title: 'GetProjectKeyV1ResponseItemMember', required: [] })
  .openapi('GetProjectKeyV1ResponseItemMember')

const GetProjectKeyV1ResponseItemSchema = z
  .object({ member: GetProjectKeyV1ResponseItemMemberSchema.exactOptional() })
  .openapi({ title: 'GetProjectKeyV1ResponseItem', required: [] })
  .openapi('GetProjectKeyV1ResponseItem')

const GetProjectKeyV1ResponseSchema = z
  .object({ item: GetProjectKeyV1ResponseItemSchema.exactOptional() })
  .openapi({ title: 'GetProjectKeyV1Response', required: [] })
  .openapi('GetProjectKeyV1Response')

const DeleteProjectKeyV1ResponseSchema = z
  .object({ message: z.string().exactOptional() })
  .openapi({ title: 'DeleteProjectKeyV1Response', required: [] })
  .openapi('DeleteProjectKeyV1Response')

const ListProjectMembersV1ResponseMembersItemsSchema = z
  .object({
    member_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the member' }),
    scopes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The API scopes of the member' }),
    email: z.string().exactOptional(),
    first_name: z.string().exactOptional(),
    last_name: z.string().exactOptional(),
  })
  .openapi({ title: 'ListProjectMembersV1ResponseMembersItems', required: [] })
  .openapi('ListProjectMembersV1ResponseMembersItems')

const ListProjectMembersV1ResponseSchema = z
  .object({ members: z.array(ListProjectMembersV1ResponseMembersItemsSchema).exactOptional() })
  .openapi({ title: 'ListProjectMembersV1Response', required: [] })
  .openapi('ListProjectMembersV1Response')

const DeleteProjectMemberV1ResponseSchema = z
  .object({ message: z.string().exactOptional().openapi({ description: 'confirmation message' }) })
  .openapi({ title: 'DeleteProjectMemberV1Response', required: [] })
  .openapi('DeleteProjectMemberV1Response')

const ListProjectMemberScopesV1ResponseSchema = z
  .object({
    scopes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The API scopes of the member' }),
  })
  .openapi({ title: 'ListProjectMemberScopesV1Response', required: [] })
  .openapi('ListProjectMemberScopesV1Response')

const UpdateProjectMemberScopesV1RequestSchema = z
  .object({ scope: z.string().openapi({ description: 'A scope to update' }) })
  .openapi({ required: ['scope'], title: 'UpdateProjectMemberScopesV1Request' })
  .openapi('UpdateProjectMemberScopesV1Request')

const UpdateProjectMemberScopesV1ResponseSchema = z
  .object({ message: z.string().exactOptional().openapi({ description: 'confirmation message' }) })
  .openapi({ title: 'UpdateProjectMemberScopesV1Response', required: [] })
  .openapi('UpdateProjectMemberScopesV1Response')

const ListProjectInvitesV1ResponseInvitesItemsSchema = z
  .object({
    email: z.string().exactOptional().openapi({ description: 'The email address of the invitee' }),
    scope: z.string().exactOptional().openapi({ description: 'The scope of the invitee' }),
  })
  .openapi({ title: 'ListProjectInvitesV1ResponseInvitesItems', required: [] })
  .openapi('ListProjectInvitesV1ResponseInvitesItems')

const ListProjectInvitesV1ResponseSchema = z
  .object({ invites: z.array(ListProjectInvitesV1ResponseInvitesItemsSchema).exactOptional() })
  .openapi({ title: 'ListProjectInvitesV1Response', required: [] })
  .openapi('ListProjectInvitesV1Response')

const CreateProjectInviteV1RequestSchema = z
  .object({
    email: z.string().openapi({ description: 'The email address of the invitee' }),
    scope: z.string().openapi({ description: 'The scope of the invitee' }),
  })
  .openapi({
    required: ['email', 'scope'],
    description: 'Request body for creating a project invite',
    title: 'CreateProjectInviteV1Request',
  })
  .openapi('CreateProjectInviteV1Request')

const CreateProjectInviteV1ResponseSchema = z
  .object({ message: z.string().exactOptional().openapi({ description: 'confirmation message' }) })
  .openapi({ title: 'CreateProjectInviteV1Response', required: [] })
  .openapi('CreateProjectInviteV1Response')

const DeleteProjectInviteV1ResponseSchema = z
  .object({ message: z.string().exactOptional().openapi({ description: 'confirmation message' }) })
  .openapi({ title: 'DeleteProjectInviteV1Response', required: [] })
  .openapi('DeleteProjectInviteV1Response')

const V1ProjectsProjectIdRequestsGetParametersDeploymentSchema = z
  .enum(['hosted', 'beta', 'self-hosted'])
  .openapi({
    description: 'Deployment type for the requests',
    title: 'V1ProjectsProjectIdRequestsGetParametersDeployment',
  })
  .openapi('V1ProjectsProjectIdRequestsGetParametersDeployment')

const V1ProjectsProjectIdRequestsGetParametersEndpointSchema = z
  .enum(['listen', 'read', 'speak', 'agent'])
  .openapi({ title: 'V1ProjectsProjectIdRequestsGetParametersEndpoint' })
  .openapi('V1ProjectsProjectIdRequestsGetParametersEndpoint')

const V1ProjectsProjectIdRequestsGetParametersMethodSchema = z
  .enum(['sync', 'async', 'streaming'])
  .openapi({
    description: 'Method type for the request',
    title: 'V1ProjectsProjectIdRequestsGetParametersMethod',
  })
  .openapi('V1ProjectsProjectIdRequestsGetParametersMethod')

const V1ProjectsProjectIdRequestsGetParametersStatusSchema = z
  .enum(['succeeded', 'failed'])
  .openapi({ title: 'V1ProjectsProjectIdRequestsGetParametersStatus' })
  .openapi('V1ProjectsProjectIdRequestsGetParametersStatus')

const ProjectRequestResponseResponseSchema = z
  .object({})
  .openapi({ description: 'The response of the request', title: 'ProjectRequestResponseResponse' })
  .openapi('ProjectRequestResponseResponse')

const ProjectRequestResponseSchema = z
  .object({
    request_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the request' }),
    project_uuid: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the project' }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time the request was created' }),
    path: z.string().exactOptional().openapi({ description: 'The API path of the request' }),
    api_key_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the API key' }),
    response: ProjectRequestResponseResponseSchema.exactOptional().openapi({
      description: 'The response of the request',
    }),
    code: z.float64().exactOptional().openapi({ description: 'The response code of the request' }),
    deployment: z.string().exactOptional().openapi({ description: 'The deployment type' }),
    callback: z
      .string()
      .exactOptional()
      .openapi({ description: 'The callback URL for the request' }),
  })
  .openapi({ description: 'A single request', title: 'ProjectRequestResponse', required: [] })
  .openapi('ProjectRequestResponse')

const ListProjectRequestsV1ResponseSchema = z
  .object({
    page: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The page number of the paginated response' }),
    limit: z.float64().exactOptional().openapi({ description: 'The number of results per page' }),
    requests: z.array(ProjectRequestResponseSchema).exactOptional(),
  })
  .openapi({ title: 'ListProjectRequestsV1Response', required: [] })
  .openapi('ListProjectRequestsV1Response')

const GetProjectRequestV1ResponseSchema = z
  .object({ request: ProjectRequestResponseSchema.exactOptional() })
  .openapi({ title: 'GetProjectRequestV1Response', required: [] })
  .openapi('GetProjectRequestV1Response')

const V1ProjectsProjectIdUsageGetParametersDeploymentSchema = z
  .enum(['hosted', 'beta', 'self-hosted'])
  .openapi({
    description: 'Deployment type for the requests',
    title: 'V1ProjectsProjectIdUsageGetParametersDeployment',
  })
  .openapi('V1ProjectsProjectIdUsageGetParametersDeployment')

const V1ProjectsProjectIdUsageGetParametersEndpointSchema = z
  .enum(['listen', 'read', 'speak', 'agent'])
  .openapi({ title: 'V1ProjectsProjectIdUsageGetParametersEndpoint' })
  .openapi('V1ProjectsProjectIdUsageGetParametersEndpoint')

const V1ProjectsProjectIdUsageGetParametersMethodSchema = z
  .enum(['sync', 'async', 'streaming'])
  .openapi({
    description: 'Method type for the request',
    title: 'V1ProjectsProjectIdUsageGetParametersMethod',
  })
  .openapi('V1ProjectsProjectIdUsageGetParametersMethod')

const UsageV1ResponseResolutionSchema = z
  .object({ units: z.string().exactOptional(), amount: z.float64().exactOptional() })
  .openapi({ title: 'UsageV1ResponseResolution', required: [] })
  .openapi('UsageV1ResponseResolution')

const UsageV1ResponseSchema = z
  .object({
    start: z.iso.date().exactOptional(),
    end: z.iso.date().exactOptional(),
    resolution: UsageV1ResponseResolutionSchema.exactOptional(),
  })
  .openapi({ title: 'UsageV1Response', required: [] })
  .openapi('UsageV1Response')

const UsageFieldsV1ResponseModelsItemsSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Name of the model.' }),
    language: z
      .string()
      .exactOptional()
      .openapi({ description: 'The language supported by the model (IETF language tag).' }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Version identifier of the model, typically with a date and a revision number.',
      }),
    model_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the model.' }),
  })
  .openapi({ title: 'UsageFieldsV1ResponseModelsItems', required: [] })
  .openapi('UsageFieldsV1ResponseModelsItems')

const UsageFieldsV1ResponseSchema = z
  .object({
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of tags associated with the project' }),
    models: z
      .array(UsageFieldsV1ResponseModelsItemsSchema)
      .exactOptional()
      .openapi({ description: 'List of models available for the project.' }),
    processing_methods: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Processing methods supported by the API' }),
    features: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'API features available to the project' }),
  })
  .openapi({ title: 'UsageFieldsV1Response', required: [] })
  .openapi('UsageFieldsV1Response')

const V1ProjectsProjectIdUsageBreakdownGetParametersGroupingSchema = z
  .enum(['accessor', 'endpoint', 'feature_set', 'models', 'method', 'tags', 'deployment'])
  .openapi({ title: 'V1ProjectsProjectIdUsageBreakdownGetParametersGrouping' })
  .openapi('V1ProjectsProjectIdUsageBreakdownGetParametersGrouping')

const V1ProjectsProjectIdUsageBreakdownGetParametersDeploymentSchema = z
  .enum(['hosted', 'beta', 'self-hosted'])
  .openapi({
    description: 'Deployment type for the requests',
    title: 'V1ProjectsProjectIdUsageBreakdownGetParametersDeployment',
  })
  .openapi('V1ProjectsProjectIdUsageBreakdownGetParametersDeployment')

const V1ProjectsProjectIdUsageBreakdownGetParametersEndpointSchema = z
  .enum(['listen', 'read', 'speak', 'agent'])
  .openapi({ title: 'V1ProjectsProjectIdUsageBreakdownGetParametersEndpoint' })
  .openapi('V1ProjectsProjectIdUsageBreakdownGetParametersEndpoint')

const V1ProjectsProjectIdUsageBreakdownGetParametersMethodSchema = z
  .enum(['sync', 'async', 'streaming'])
  .openapi({
    description: 'Method type for the request',
    title: 'V1ProjectsProjectIdUsageBreakdownGetParametersMethod',
  })
  .openapi('V1ProjectsProjectIdUsageBreakdownGetParametersMethod')

const UsageBreakdownV1ResponseResolutionSchema = z
  .object({
    units: z.string().openapi({ description: 'Time unit for the resolution' }),
    amount: z.float64().openapi({ description: 'Amount of units' }),
  })
  .openapi({ required: ['units', 'amount'], title: 'UsageBreakdownV1ResponseResolution' })
  .openapi('UsageBreakdownV1ResponseResolution')

const UsageBreakdownV1ResponseResultsItemsGroupingSchema = z
  .object({
    start: z.iso.date().exactOptional().openapi({ description: 'Start date for this group' }),
    end: z.iso.date().exactOptional().openapi({ description: 'End date for this group' }),
    accessor: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional accessor identifier' }),
    endpoint: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional endpoint identifier' }),
    feature_set: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional feature set identifier' }),
    models: z.array(z.string()).exactOptional(),
    method: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional method identifier' }),
    tags: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional list of tags, null unless grouped by tags.' }),
    deployment: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional deployment identifier' }),
  })
  .openapi({ title: 'UsageBreakdownV1ResponseResultsItemsGrouping', required: [] })
  .openapi('UsageBreakdownV1ResponseResultsItemsGrouping')

const UsageBreakdownV1ResponseResultsItemsSchema = z
  .object({
    hours: z.string().openapi({ title: 'float', description: 'Audio hours processed' }),
    total_hours: z
      .string()
      .openapi({ title: 'float', description: 'Total hours including all processing' }),
    agent_hours: z.string().openapi({ title: 'float', description: 'Agent hours used' }),
    tokens_in: z.float64().openapi({ description: 'Number of input tokens' }),
    tokens_out: z.float64().openapi({ description: 'Number of output tokens' }),
    tts_characters: z
      .float64()
      .openapi({ description: 'Number of text-to-speech characters processed' }),
    requests: z.float64().openapi({ description: 'Number of requests' }),
    grouping: UsageBreakdownV1ResponseResultsItemsGroupingSchema,
  })
  .openapi({
    required: [
      'hours',
      'total_hours',
      'agent_hours',
      'tokens_in',
      'tokens_out',
      'tts_characters',
      'requests',
      'grouping',
    ],
    title: 'UsageBreakdownV1ResponseResultsItems',
  })
  .openapi('UsageBreakdownV1ResponseResultsItems')

const UsageBreakdownV1ResponseSchema = z
  .object({
    start: z.iso.date().openapi({ description: 'Start date of the usage period' }),
    end: z.iso.date().openapi({ description: 'End date of the usage period' }),
    resolution: UsageBreakdownV1ResponseResolutionSchema,
    results: z.array(UsageBreakdownV1ResponseResultsItemsSchema),
  })
  .openapi({
    required: ['start', 'end', 'resolution', 'results'],
    title: 'UsageBreakdownV1Response',
  })
  .openapi('UsageBreakdownV1Response')

const ListProjectBalancesV1ResponseBalancesItemsSchema = z
  .object({
    balance_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance' }),
    amount: z
      .float64()
      .default(0)
      .exactOptional()
      .openapi({ description: 'The amount of the balance' }),
    units: z
      .string()
      .exactOptional()
      .openapi({ description: 'The units of the balance, such as "USD"' }),
    purchase_order_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description or reference of the purchase' }),
  })
  .openapi({ title: 'ListProjectBalancesV1ResponseBalancesItems', required: [] })
  .openapi('ListProjectBalancesV1ResponseBalancesItems')

const ListProjectBalancesV1ResponseSchema = z
  .object({ balances: z.array(ListProjectBalancesV1ResponseBalancesItemsSchema).exactOptional() })
  .openapi({ title: 'ListProjectBalancesV1Response', required: [] })
  .openapi('ListProjectBalancesV1Response')

const GetProjectBalanceV1ResponseSchema = z
  .object({
    balance_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance' }),
    amount: z
      .float64()
      .default(0)
      .exactOptional()
      .openapi({ description: 'The amount of the balance' }),
    units: z
      .string()
      .exactOptional()
      .openapi({ description: 'The units of the balance, such as "USD"' }),
    purchase_order_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description or reference of the purchase' }),
  })
  .openapi({ title: 'GetProjectBalanceV1Response', required: [] })
  .openapi('GetProjectBalanceV1Response')

const V1ProjectsProjectIdBillingBreakdownGetParametersDeploymentSchema = z
  .enum(['hosted', 'beta', 'self-hosted'])
  .openapi({
    description: 'Deployment type for the requests',
    title: 'V1ProjectsProjectIdBillingBreakdownGetParametersDeployment',
  })
  .openapi('V1ProjectsProjectIdBillingBreakdownGetParametersDeployment')

const V1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItemsSchema = z
  .enum(['accessor', 'deployment', 'line_item', 'tags'])
  .openapi({ title: 'V1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems' })
  .openapi('V1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems')

const BillingBreakdownV1ResponseResolutionSchema = z
  .object({
    units: z.string().openapi({ description: 'Time unit for the resolution' }),
    amount: z.float64().openapi({ description: 'Amount of units' }),
  })
  .openapi({ required: ['units', 'amount'], title: 'BillingBreakdownV1ResponseResolution' })
  .openapi('BillingBreakdownV1ResponseResolution')

const BillingBreakdownV1ResponseResultsItemsGroupingSchema = z
  .object({
    start: z.iso.date().exactOptional().openapi({ description: 'Start date for this group' }),
    end: z.iso.date().exactOptional().openapi({ description: 'End date for this group' }),
    accessor: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional accessor identifier, null unless grouped by accessor.' }),
    deployment: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional deployment identifier, null unless grouped by deployment.',
      }),
    line_item: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional line item identifier, null unless grouped by line item.' }),
    tags: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional list of tags, null unless grouped by tags.' }),
  })
  .openapi({ title: 'BillingBreakdownV1ResponseResultsItemsGrouping', required: [] })
  .openapi('BillingBreakdownV1ResponseResultsItemsGrouping')

const BillingBreakdownV1ResponseResultsItemsSchema = z
  .object({
    dollars: z
      .string()
      .openapi({ title: 'float', description: 'USD cost of the billing for this grouping' }),
    grouping: BillingBreakdownV1ResponseResultsItemsGroupingSchema,
  })
  .openapi({ required: ['dollars', 'grouping'], title: 'BillingBreakdownV1ResponseResultsItems' })
  .openapi('BillingBreakdownV1ResponseResultsItems')

const BillingBreakdownV1ResponseSchema = z
  .object({
    start: z.iso.date().openapi({ description: 'Start date of the billing summmary period' }),
    end: z.iso.date().openapi({ description: 'End date of the billing summary period' }),
    resolution: BillingBreakdownV1ResponseResolutionSchema,
    results: z.array(BillingBreakdownV1ResponseResultsItemsSchema),
  })
  .openapi({
    required: ['start', 'end', 'resolution', 'results'],
    title: 'BillingBreakdownV1Response',
  })
  .openapi('BillingBreakdownV1Response')

const ListBillingFieldsV1ResponseDeploymentsItemsSchema = z
  .enum(['hosted', 'beta', 'self-hosted', 'dedicated'])
  .openapi({ title: 'ListBillingFieldsV1ResponseDeploymentsItems' })
  .openapi('ListBillingFieldsV1ResponseDeploymentsItems')

const ListBillingFieldsV1ResponseSchema = z
  .object({
    accessors: z
      .array(z.uuid())
      .exactOptional()
      .openapi({ description: 'List of accessor UUIDs for the time period' }),
    deployments: z
      .array(ListBillingFieldsV1ResponseDeploymentsItemsSchema)
      .exactOptional()
      .openapi({ description: 'List of deployment types for the time period' }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of tags for the time period' }),
    line_items: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Map of line item names to human-readable descriptions for the time period',
      }),
  })
  .openapi({ title: 'ListBillingFieldsV1Response', required: [] })
  .openapi('ListBillingFieldsV1Response')

const ListProjectPurchasesV1ResponseOrdersItemsSchema = z
  .object({
    order_id: z.uuid().exactOptional(),
    expiration: z.iso.datetime({ offset: true }).exactOptional(),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    amount: z.string().exactOptional().openapi({ title: 'float' }),
    units: z.string().exactOptional(),
    order_type: z.string().exactOptional(),
  })
  .openapi({ title: 'ListProjectPurchasesV1ResponseOrdersItems', required: [] })
  .openapi('ListProjectPurchasesV1ResponseOrdersItems')

const ListProjectPurchasesV1ResponseSchema = z
  .object({ orders: z.array(ListProjectPurchasesV1ResponseOrdersItemsSchema).exactOptional() })
  .openapi({ title: 'ListProjectPurchasesV1Response', required: [] })
  .openapi('ListProjectPurchasesV1Response')

const ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMemberSchema = z
  .object({
    member_id: z.uuid().openapi({ description: 'Unique identifier for the member' }),
    email: z.email().openapi({ description: 'Email address of the member' }),
  })
  .openapi({
    required: ['member_id', 'email'],
    title: 'ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMember',
  })
  .openapi('ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMember')

const ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsDistributionCredentialsSchema =
  z
    .object({
      distribution_credentials_id: z
        .uuid()
        .openapi({ description: 'Unique identifier for the distribution credentials' }),
      provider: z.string().openapi({ description: 'The provider of the distribution service' }),
      comment: z
        .string()
        .exactOptional()
        .openapi({ description: 'Optional comment about the credentials' }),
      scopes: z
        .array(z.string())
        .openapi({ description: 'List of permission scopes for the credentials' }),
      created: z.iso
        .datetime({ offset: true })
        .openapi({ description: 'Timestamp when the credentials were created' }),
    })
    .openapi({
      required: ['distribution_credentials_id', 'provider', 'scopes', 'created'],
      title:
        'ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsDistributionCredentials',
    })
    .openapi(
      'ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsDistributionCredentials',
    )

const ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsSchema = z
  .object({
    member: ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMemberSchema,
    distribution_credentials:
      ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsDistributionCredentialsSchema,
  })
  .openapi({
    required: ['member', 'distribution_credentials'],
    title: 'ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItems',
  })
  .openapi('ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItems')

const ListProjectDistributionCredentialsV1ResponseSchema = z
  .object({
    distribution_credentials: z
      .array(ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsSchema)
      .exactOptional()
      .openapi({
        description: 'Array of distribution credentials with associated member information',
      }),
  })
  .openapi({ title: 'ListProjectDistributionCredentialsV1Response', required: [] })
  .openapi('ListProjectDistributionCredentialsV1Response')

const V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItemsSchema = z
  .enum([
    'self-hosted:products',
    'self-hosted:product:api',
    'self-hosted:product:engine',
    'self-hosted:product:license-proxy',
    'self-hosted:product:dgtools',
    'self-hosted:product:billing',
    'self-hosted:product:hotpepper',
    'self-hosted:product:metrics-server',
  ])
  .openapi({
    title: 'V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems',
  })
  .openapi('V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems')

const V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProviderSchema = z
  .literal('quay')
  .default('quay')
  .openapi({ title: 'V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider' })
  .openapi('V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider')

const CreateProjectDistributionCredentialsV1RequestSchema = z
  .object({
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional comment about the credentials' }),
  })
  .openapi({
    description: 'Request body for creating distribution credentials',
    title: 'CreateProjectDistributionCredentialsV1Request',
    required: [],
  })
  .openapi('CreateProjectDistributionCredentialsV1Request')

const CreateProjectDistributionCredentialsV1ResponseMemberSchema = z
  .object({
    member_id: z.uuid().openapi({ description: 'Unique identifier for the member' }),
    email: z.email().openapi({ description: 'Email address of the member' }),
  })
  .openapi({
    required: ['member_id', 'email'],
    title: 'CreateProjectDistributionCredentialsV1ResponseMember',
  })
  .openapi('CreateProjectDistributionCredentialsV1ResponseMember')

const CreateProjectDistributionCredentialsV1ResponseDistributionCredentialsSchema = z
  .object({
    distribution_credentials_id: z
      .uuid()
      .openapi({ description: 'Unique identifier for the distribution credentials' }),
    provider: z.string().openapi({ description: 'The provider of the distribution service' }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional comment about the credentials' }),
    scopes: z
      .array(z.string())
      .openapi({ description: 'List of permission scopes for the credentials' }),
    created: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp when the credentials were created' }),
  })
  .openapi({
    required: ['distribution_credentials_id', 'provider', 'scopes', 'created'],
    title: 'CreateProjectDistributionCredentialsV1ResponseDistributionCredentials',
  })
  .openapi('CreateProjectDistributionCredentialsV1ResponseDistributionCredentials')

const CreateProjectDistributionCredentialsV1ResponseSchema = z
  .object({
    member: CreateProjectDistributionCredentialsV1ResponseMemberSchema,
    distribution_credentials:
      CreateProjectDistributionCredentialsV1ResponseDistributionCredentialsSchema,
  })
  .openapi({
    required: ['member', 'distribution_credentials'],
    title: 'CreateProjectDistributionCredentialsV1Response',
  })
  .openapi('CreateProjectDistributionCredentialsV1Response')

const GetProjectDistributionCredentialsV1ResponseMemberSchema = z
  .object({
    member_id: z.uuid().openapi({ description: 'Unique identifier for the member' }),
    email: z.email().openapi({ description: 'Email address of the member' }),
  })
  .openapi({
    required: ['member_id', 'email'],
    title: 'GetProjectDistributionCredentialsV1ResponseMember',
  })
  .openapi('GetProjectDistributionCredentialsV1ResponseMember')

const GetProjectDistributionCredentialsV1ResponseDistributionCredentialsSchema = z
  .object({
    distribution_credentials_id: z
      .uuid()
      .openapi({ description: 'Unique identifier for the distribution credentials' }),
    provider: z.string().openapi({ description: 'The provider of the distribution service' }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional comment about the credentials' }),
    scopes: z
      .array(z.string())
      .openapi({ description: 'List of permission scopes for the credentials' }),
    created: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp when the credentials were created' }),
  })
  .openapi({
    required: ['distribution_credentials_id', 'provider', 'scopes', 'created'],
    title: 'GetProjectDistributionCredentialsV1ResponseDistributionCredentials',
  })
  .openapi('GetProjectDistributionCredentialsV1ResponseDistributionCredentials')

const GetProjectDistributionCredentialsV1ResponseSchema = z
  .object({
    member: GetProjectDistributionCredentialsV1ResponseMemberSchema,
    distribution_credentials:
      GetProjectDistributionCredentialsV1ResponseDistributionCredentialsSchema,
  })
  .openapi({
    required: ['member', 'distribution_credentials'],
    title: 'GetProjectDistributionCredentialsV1Response',
  })
  .openapi('GetProjectDistributionCredentialsV1Response')

const GrantV1RequestSchema = z
  .object({
    ttl_seconds: z
      .float64()
      .min(1)
      .max(3600)
      .exactOptional()
      .openapi({ description: 'Time to live in seconds for the token. Defaults to 30 seconds.' }),
  })
  .openapi({ title: 'GrantV1Request', required: [] })
  .openapi('GrantV1Request')

const GrantV1ResponseSchema = z
  .object({
    access_token: z.string().openapi({ description: 'JSON Web Token (JWT)' }),
    expires_in: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Time in seconds until the JWT expires' }),
  })
  .openapi({ required: ['access_token'], title: 'GrantV1Response' })
  .openapi('GrantV1Response')

const V2SpeakPostParametersCallbackMethodSchema = z
  .enum(['POST', 'PUT'])
  .default('POST')
  .openapi({ title: 'V2SpeakPostParametersCallbackMethod' })
  .openapi('V2SpeakPostParametersCallbackMethod')

const V2SpeakPostParametersTagSchema = z
  .xor([z.string(), z.array(z.string())])
  .openapi({ title: 'V2SpeakPostParametersTag' })
  .openapi('V2SpeakPostParametersTag')

const V2SpeakPostParametersBitRate0Schema = z
  .enum(['8000', '16000', '24000', '32000', '40000', '48000'])
  .openapi({
    description:
      'Encoding - mp3(default). Supported bitrates - 8000, 16000, 24000, 32000, 40000, 48000(default) bps.',
    title: 'V2SpeakPostParametersBitRate0',
  })
  .openapi('V2SpeakPostParametersBitRate0')

const V2SpeakPostParametersBitRateSchema = z
  .xor([
    V2SpeakPostParametersBitRate0Schema,
    z.int().min(4000).max(650000),
    z.int().min(4000).max(192000),
  ])
  .openapi({ title: 'V2SpeakPostParametersBitRate' })
  .openapi('V2SpeakPostParametersBitRate')

const V2SpeakPostParametersContainer0Schema = z
  .literal('none')
  .openapi({ description: 'No container.', title: 'V2SpeakPostParametersContainer0' })
  .openapi('V2SpeakPostParametersContainer0')

const V2SpeakPostParametersContainer1Schema = z
  .literal('wav')
  .openapi({
    description: 'Encoding - linear16. Supported container - wav (default), or no container.',
    title: 'V2SpeakPostParametersContainer1',
  })
  .openapi('V2SpeakPostParametersContainer1')

const V2SpeakPostParametersContainer2Schema = z
  .literal('wav')
  .openapi({
    description: 'Encoding - mulaw. Supported container - wav (default), or no container.',
    title: 'V2SpeakPostParametersContainer2',
  })
  .openapi('V2SpeakPostParametersContainer2')

const V2SpeakPostParametersContainer3Schema = z
  .literal('wav')
  .openapi({
    description: 'Encoding - alaw. Supported container - wav (default), or no container.',
    title: 'V2SpeakPostParametersContainer3',
  })
  .openapi('V2SpeakPostParametersContainer3')

const V2SpeakPostParametersContainer4Schema = z
  .literal('ogg')
  .openapi({
    description: 'Encoding - opus. Supported container - ogg (default).',
    title: 'V2SpeakPostParametersContainer4',
  })
  .openapi('V2SpeakPostParametersContainer4')

const V2SpeakPostParametersContainerSchema = z
  .xor([
    V2SpeakPostParametersContainer0Schema,
    V2SpeakPostParametersContainer1Schema,
    V2SpeakPostParametersContainer2Schema,
    V2SpeakPostParametersContainer3Schema,
    V2SpeakPostParametersContainer4Schema,
  ])
  .openapi({ title: 'V2SpeakPostParametersContainer' })
  .openapi('V2SpeakPostParametersContainer')

const V2SpeakPostParametersEncoding0Schema = z
  .literal('linear16')
  .openapi({
    description:
      'Encoding - linear16. Uncompressed, high-quality audio format often used for telephony or audio processing.',
    title: 'V2SpeakPostParametersEncoding0',
  })
  .openapi('V2SpeakPostParametersEncoding0')

const V2SpeakPostParametersEncoding1Schema = z
  .literal('flac')
  .openapi({
    description: 'Encoding - flac. Lossless audio format for high-quality compression.',
    title: 'V2SpeakPostParametersEncoding1',
  })
  .openapi('V2SpeakPostParametersEncoding1')

const V2SpeakPostParametersEncoding2Schema = z
  .literal('mulaw')
  .openapi({
    description: 'Encoding - mulaw. Compressed audio format commonly used in telephony.',
    title: 'V2SpeakPostParametersEncoding2',
  })
  .openapi('V2SpeakPostParametersEncoding2')

const V2SpeakPostParametersEncoding3Schema = z
  .literal('alaw')
  .openapi({
    description: 'Encoding - alaw. Similar to mulaw but used in international telephony.',
    title: 'V2SpeakPostParametersEncoding3',
  })
  .openapi('V2SpeakPostParametersEncoding3')

const V2SpeakPostParametersEncoding4Schema = z
  .literal('mp3')
  .openapi({
    description: 'Encoding - mp3. Popular compressed audio format for music and streaming.',
    title: 'V2SpeakPostParametersEncoding4',
  })
  .openapi('V2SpeakPostParametersEncoding4')

const V2SpeakPostParametersEncoding5Schema = z
  .literal('opus')
  .openapi({
    description:
      'Encoding - opus. High-compression audio format optimized for real-time communications.',
    title: 'V2SpeakPostParametersEncoding5',
  })
  .openapi('V2SpeakPostParametersEncoding5')

const V2SpeakPostParametersEncoding6Schema = z
  .literal('aac')
  .openapi({
    description:
      'Encoding - aac. Advanced audio format offering better quality at smaller file sizes than mp3.',
    title: 'V2SpeakPostParametersEncoding6',
  })
  .openapi('V2SpeakPostParametersEncoding6')

const V2SpeakPostParametersEncodingSchema = z
  .xor([
    V2SpeakPostParametersEncoding0Schema,
    V2SpeakPostParametersEncoding1Schema,
    V2SpeakPostParametersEncoding2Schema,
    V2SpeakPostParametersEncoding3Schema,
    V2SpeakPostParametersEncoding4Schema,
    V2SpeakPostParametersEncoding5Schema,
    V2SpeakPostParametersEncoding6Schema,
  ])
  .openapi({ title: 'V2SpeakPostParametersEncoding' })
  .openapi('V2SpeakPostParametersEncoding')

const V2SpeakPostParametersExpressivitySchema = z
  .enum(['-2', '-1', '0', '1', '2'])
  .openapi({ title: 'V2SpeakPostParametersExpressivity' })
  .openapi('V2SpeakPostParametersExpressivity')

const V2SpeakPostParametersSampleRate0Schema = z
  .enum(['8000', '16000', '24000', '32000', '44100', '48000'])
  .openapi({
    description:
      'Encoding - linear16. Supported sample rates - 8000, 16000, 24000, 32000, 44100, 48000 Hz.',
    title: 'V2SpeakPostParametersSampleRate0',
  })
  .openapi('V2SpeakPostParametersSampleRate0')

const V2SpeakPostParametersSampleRate1Schema = z
  .enum(['8000', '16000'])
  .openapi({
    description: 'Encoding - mulaw. Supported sample rates - 8000, 16000 Hz.',
    title: 'V2SpeakPostParametersSampleRate1',
  })
  .openapi('V2SpeakPostParametersSampleRate1')

const V2SpeakPostParametersSampleRate2Schema = z
  .enum(['8000', '16000'])
  .openapi({
    description: 'Encoding - alaw. Supported sample rates - 8000, 16000 Hz.',
    title: 'V2SpeakPostParametersSampleRate2',
  })
  .openapi('V2SpeakPostParametersSampleRate2')

const V2SpeakPostParametersSampleRate3Schema = z
  .enum(['8000', '16000', '22050', '32000', '48000'])
  .openapi({
    description: 'Encoding - flac. Supported sample rates - 8000, 16000, 22050, 32000, 48000 Hz.',
    title: 'V2SpeakPostParametersSampleRate3',
  })
  .openapi('V2SpeakPostParametersSampleRate3')

const V2SpeakPostParametersSampleRateSchema = z
  .xor([
    V2SpeakPostParametersSampleRate0Schema,
    V2SpeakPostParametersSampleRate1Schema,
    V2SpeakPostParametersSampleRate2Schema,
    V2SpeakPostParametersSampleRate3Schema,
  ])
  .openapi({ title: 'V2SpeakPostParametersSampleRate' })
  .openapi('V2SpeakPostParametersSampleRate')

const V2SpeakPostParametersPrioritySchema = z
  .literal('low')
  .openapi({ title: 'V2SpeakPostParametersPriority' })
  .openapi('V2SpeakPostParametersPriority')

const SpeakV2RequestSchema = z
  .object({
    text: z
      .string()
      .openapi({
        description:
          'The text content to be converted to speech. For English, German, Dutch, French, Hindi, Italian, Japanese, Portuguese, Russian and Spanish, the server normalizes the text (numbers, dates, abbreviations) before synthesis; the other languages are in Early Access without text normalization, so write numbers and dates out in words. May contain inline pause controls (`\\{pause:500ms\\}`, 500-3000 ms in 100 ms steps, at most 8 per request) and inline pronunciation controls (`\\{"word": "...", "pronounce": "<IPA>"\\}`, Early Access). Pronunciation cannot be combined with pause or with a `speed` other than `1.0`, and `speed` is capped at `1.15` when a pause is present. See [Speed, Pause, Pronunciation](/docs/tts-voice-controls).',
      }),
  })
  .openapi({
    required: ['text'],
    description:
      'Request body for Flux TTS batch (REST) text-to-speech conversion. The full block of text is synthesized in a single request and returned as one audio response.',
    title: 'SpeakV2Request',
  })
  .openapi('SpeakV2Request')

const SpeakV2AcceptedResponseSchema = z
  .object({
    request_id: z
      .uuid()
      .openapi({ description: 'Unique identifier for tracking the asynchronous request' }),
  })
  .openapi({
    required: ['request_id'],
    description:
      'Accepted response returned when a callback URL is supplied; the audio is delivered asynchronously to that URL.',
    title: 'SpeakV2AcceptedResponse',
  })
  .openapi('SpeakV2AcceptedResponse')

const ApiKeyAuthSecurityScheme = {
  type: 'apiKey',
  in: 'header',
  name: 'Authorization',
  description:
    'Use `Authorization: Token <API_KEY>`\nExample: `Authorization: Token 12345abcdef`\n',
}

const JwtAuthSecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  description:
    'Use `Authorization: Bearer <JWT>`\nExample: `Authorization: Bearer eyJhbGciOiJ...`\n',
}

export const getV1AgentSettingsThinkModelsRoute = createRoute({
  method: 'get',
  path: '/v1/agent/settings/think/models',
  tags: ['models'],
  summary: 'List Agent Think Models',
  description: 'Retrieves the available think models that can be used for AI agent processing',
  operationId: 'models_list',
  responses: {
    200: {
      description: 'List of available think models',
      content: { 'application/json': { schema: AgentThinkModelsV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getV1ProjectsProjectIdAgentsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_id}/agents',
  tags: ['configurations'],
  summary: 'List Agent Configurations',
  description:
    'Returns all agent configurations for the specified project. Configurations are returned in their uninterpolated form—template variable placeholders appear as-is rather than with their substituted values.',
  operationId: 'configurations_list',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of agent configurations',
      content: { 'application/json': { schema: ListAgentConfigurationsV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postV1ProjectsProjectIdAgentsRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{project_id}/agents',
  tags: ['configurations'],
  summary: 'Create an Agent Configuration',
  description:
    'Creates a new reusable agent configuration. The `config` field must be a valid JSON string representing the `agent` block of a Settings message. The returned `agent_id` can be passed in place of the full `agent` object in future Settings messages.',
  operationId: 'configurations_create',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Agent configuration details',
      content: { 'application/json': { schema: CreateAgentConfigurationV1RequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Agent configuration created successfully',
      content: { 'application/json': { schema: CreateAgentConfigurationV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getV1ProjectsProjectIdAgentsAgentIdRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_id}/agents/{agent_id}',
  tags: ['configurations'],
  summary: 'Get an Agent Configuration',
  description: 'Returns the specified agent configuration in its uninterpolated form',
  operationId: 'configurations_get',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      agent_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_id',
            in: 'path',
            description: 'The unique identifier of the agent configuration',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An agent configuration',
      content: { 'application/json': { schema: AgentConfigurationV1Schema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const putV1ProjectsProjectIdAgentsAgentIdRoute = createRoute({
  method: 'put',
  path: '/v1/projects/{project_id}/agents/{agent_id}',
  tags: ['configurations'],
  summary: 'Update Agent Metadata',
  description:
    'Updates the metadata associated with an agent configuration. The config itself is immutable—to change the configuration, delete the existing agent and create a new one.',
  operationId: 'configurations_update',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      agent_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_id',
            in: 'path',
            description: 'The unique identifier of the agent configuration',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated metadata for the agent configuration',
      content: { 'application/json': { schema: UpdateAgentMetadataV1RequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Agent configuration updated',
      content: { 'application/json': { schema: AgentConfigurationV1Schema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const deleteV1ProjectsProjectIdAgentsAgentIdRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{project_id}/agents/{agent_id}',
  tags: ['configurations'],
  summary: 'Delete an Agent Configuration',
  description:
    'Deletes the specified agent configuration. Deleting an agent configuration can cause a production outage if your service references this agent UUID. Migrate all active sessions to a new configuration before deleting.',
  operationId: 'configurations_delete',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      agent_id: z
        .string()
        .openapi({
          param: {
            name: 'agent_id',
            in: 'path',
            description: 'The unique identifier of the agent configuration',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Agent configuration deleted',
      content: { 'application/json': { schema: DeleteAgentConfigurationV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getV1ProjectsProjectIdAgentVariablesRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_id}/agent-variables',
  tags: ['variables'],
  summary: 'List Agent Variables',
  description: 'Returns all template variables for the specified project',
  operationId: 'variables_list',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of agent variables',
      content: { 'application/json': { schema: ListAgentVariablesV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postV1ProjectsProjectIdAgentVariablesRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{project_id}/agent-variables',
  tags: ['variables'],
  summary: 'Create an Agent Variable',
  description:
    'Creates a new template variable. Variables follow the `DG_<VARIABLE_NAME>` naming format and can substitute any JSON value in an agent configuration.',
  operationId: 'variables_create',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Agent variable details',
      content: { 'application/json': { schema: CreateAgentVariableV1RequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Agent variable created successfully',
      content: { 'application/json': { schema: AgentVariableV1Schema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getV1ProjectsProjectIdAgentVariablesVariableIdRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_id}/agent-variables/{variable_id}',
  tags: ['variables'],
  summary: 'Get an Agent Variable',
  description: 'Returns the specified template variable',
  operationId: 'variables_get',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      variable_id: z
        .string()
        .openapi({
          param: {
            name: 'variable_id',
            in: 'path',
            description: 'The unique identifier of the agent variable',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An agent variable',
      content: { 'application/json': { schema: AgentVariableV1Schema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const deleteV1ProjectsProjectIdAgentVariablesVariableIdRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{project_id}/agent-variables/{variable_id}',
  tags: ['variables'],
  summary: 'Delete an Agent Variable',
  description: 'Deletes the specified template variable',
  operationId: 'variables_delete',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      variable_id: z
        .string()
        .openapi({
          param: {
            name: 'variable_id',
            in: 'path',
            description: 'The unique identifier of the agent variable',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Agent variable deleted',
      content: { 'application/json': { schema: DeleteAgentVariableV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const patchV1ProjectsProjectIdAgentVariablesVariableIdRoute = createRoute({
  method: 'patch',
  path: '/v1/projects/{project_id}/agent-variables/{variable_id}',
  tags: ['variables'],
  summary: 'Update an Agent Variable',
  description: 'Updates the value of an existing template variable',
  operationId: 'variables_update',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      variable_id: z
        .string()
        .openapi({
          param: {
            name: 'variable_id',
            in: 'path',
            description: 'The unique identifier of the agent variable',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated value for the agent variable',
      content: { 'application/json': { schema: UpdateAgentVariableV1RequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Agent variable updated',
      content: { 'application/json': { schema: AgentVariableV1Schema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postV1ListenRoute = createRoute({
  method: 'post',
  path: '/v1/listen',
  tags: ['media'],
  summary: 'Transcribe and analyze pre-recorded audio and video',
  description: "Transcribe audio and video using Deepgram's speech-to-text REST API",
  operationId: 'media_transcribe',
  request: {
    query: z.object({
      callback: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'callback',
            in: 'query',
            description: "URL to which we'll make the callback request",
            required: false,
            schema: { type: 'string' },
          },
        }),
      callback_method: z
        .enum(['POST', 'PUT'])
        .default('POST')
        .exactOptional()
        .openapi({
          param: {
            name: 'callback_method',
            in: 'query',
            description: 'HTTP method by which the callback request will be made',
            required: false,
            schema: {
              type: 'string',
              enum: ['POST', 'PUT'],
              default: 'POST',
              title: 'V1ListenPostParametersCallbackMethod',
            },
          },
          title: 'V1ListenPostParametersCallbackMethod',
        }),
      extra: V1ListenPostParametersExtraSchema.openapi({
        param: {
          name: 'extra',
          in: 'query',
          description:
            'Arbitrary key-value pairs that are attached to the API response for usage in downstream processing',
          required: false,
          schema: { $ref: '#/components/schemas/V1ListenPostParametersExtra' },
        },
      }).exactOptional(),
      sentiment: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'sentiment',
            in: 'query',
            description: 'Recognizes the sentiment throughout a transcript or text',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      summarize: ((schema) =>
        z.union([
          z.preprocess(
            ((read) => (val: unknown) => {
              const result = read.safeParse(val)
              return result.success ? result.data : val
            })(z.stringbool()),
            schema,
          ),
          schema,
        ]))(V1ListenPostParametersSummarizeSchema)
        .exactOptional()
        .openapi({
          param: {
            name: 'summarize',
            in: 'query',
            description:
              'Summarize content. For Listen API, supports string version option. For Read API, accepts boolean only.',
            required: false,
            schema: { $ref: '#/components/schemas/V1ListenPostParametersSummarize' },
          },
        }),
      tag: V1ListenPostParametersTagSchema.openapi({
        param: {
          name: 'tag',
          in: 'query',
          description:
            'Label your requests for the purpose of identification during usage reporting',
          required: false,
          schema: { $ref: '#/components/schemas/V1ListenPostParametersTag' },
        },
      }).exactOptional(),
      topics: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'topics',
            in: 'query',
            description: 'Detect topics throughout a transcript or text',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      custom_topic: V1ListenPostParametersCustomTopicSchema.openapi({
        param: {
          name: 'custom_topic',
          in: 'query',
          description:
            'Custom topics you want the model to detect within your input audio or text if present Submit up to `100`.',
          required: false,
          schema: { $ref: '#/components/schemas/V1ListenPostParametersCustomTopic' },
        },
      }).exactOptional(),
      custom_topic_mode: z
        .enum(['extended', 'strict'])
        .default('extended')
        .exactOptional()
        .openapi({
          param: {
            name: 'custom_topic_mode',
            in: 'query',
            description:
              'Sets how the model will interpret strings submitted to the `custom_topic` param. When `strict`, the model will only return topics submitted using the `custom_topic` param. When `extended`, the model will return its own detected topics in addition to those submitted using the `custom_topic` param',
            required: false,
            schema: {
              type: 'string',
              enum: ['extended', 'strict'],
              default: 'extended',
              title: 'V1ListenPostParametersCustomTopicMode',
            },
          },
          title: 'V1ListenPostParametersCustomTopicMode',
        }),
      intents: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'intents',
            in: 'query',
            description: 'Recognizes speaker intent throughout a transcript or text',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      custom_intent: V1ListenPostParametersCustomIntentSchema.openapi({
        param: {
          name: 'custom_intent',
          in: 'query',
          description:
            'Custom intents you want the model to detect within your input audio if present',
          required: false,
          schema: { $ref: '#/components/schemas/V1ListenPostParametersCustomIntent' },
        },
      }).exactOptional(),
      custom_intent_mode: z
        .enum(['extended', 'strict'])
        .default('extended')
        .exactOptional()
        .openapi({
          param: {
            name: 'custom_intent_mode',
            in: 'query',
            description:
              'Sets how the model will interpret intents submitted to the `custom_intent` param. When `strict`, the model will only return intents submitted using the `custom_intent` param. When `extended`, the model will return its own detected intents in the `custom_intent` param.',
            required: false,
            schema: {
              type: 'string',
              enum: ['extended', 'strict'],
              default: 'extended',
              title: 'V1ListenPostParametersCustomIntentMode',
            },
          },
          title: 'V1ListenPostParametersCustomIntentMode',
        }),
      detect_entities: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'detect_entities',
            in: 'query',
            description: 'Identifies and extracts key entities from content in submitted audio',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      detect_language: z
        .xor([z.stringbool().default(false), z.array(z.string())])
        .exactOptional()
        .openapi({
          param: {
            name: 'detect_language',
            in: 'query',
            description: 'Identifies the dominant language spoken in submitted audio',
            required: false,
            schema: {
              oneOf: [
                { type: 'boolean', default: false },
                { type: 'array', items: { type: 'string' } },
              ],
              title: 'V1ListenPostParametersDetectLanguage',
            },
          },
          title: 'V1ListenPostParametersDetectLanguage',
        }),
      diarize: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'diarize',
            in: 'query',
            description:
              'Deprecated: use `diarize_model` instead. Recognize speaker changes. Each word in the transcript will be assigned a speaker number starting at 0.',
            required: false,
            schema: { type: 'boolean', default: false },
            deprecated: true,
          },
        }),
      diarize_model: V1ListenPostParametersDiarizeModelSchema.openapi({
        param: {
          name: 'diarize_model',
          in: 'query',
          description:
            'Select and enable a specific diarization model version. Specifying this parameter enables diarization and selects the model — you do not need to also set the deprecated `diarize=true` parameter. For batch, supported values are `latest` (currently v2), `v1`, and `v2`. For streaming, supported values are `latest` (currently v1) and `v1`; `v2` returns a validation error on streaming requests.',
          required: false,
          schema: { $ref: '#/components/schemas/V1ListenPostParametersDiarizeModel' },
        },
      }).exactOptional(),
      dictation: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'dictation',
            in: 'query',
            description: 'Dictation mode for controlling formatting with dictated speech',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      encoding: V1ListenPostParametersEncodingSchema.openapi({
        param: {
          name: 'encoding',
          in: 'query',
          description: 'Specify the expected encoding of your submitted audio',
          required: false,
          schema: { $ref: '#/components/schemas/V1ListenPostParametersEncoding' },
        },
      }).exactOptional(),
      filler_words: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'filler_words',
            in: 'query',
            description:
              'Filler Words can help transcribe interruptions in your audio, like "uh" and "um"',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      keyterm: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'keyterm',
            in: 'query',
            description:
              'Key term prompting improves recognition of specialized terminology and brands. Only compatible with Nova-3.\n\n`keyterm` accepts plain terms only. Unlike the legacy `keywords` feature, it does not support weights or intensifiers. Appending one (for example, `keyterm=term:0.15`) is not rejected—the weight is silently ignored and the entire value is treated as a literal keyterm.\n\nTo boost multiple separate keyterms, repeat the `keyterm` parameter (for example, `keyterm=term1&keyterm=term2`). To boost one multi-word phrase as a single keyterm, join the words with `%20` or `+` (for example, `keyterm=customer%20service`). Do not separate keyterms with commas, semicolons, or line breaks.\n',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      keywords: V1ListenPostParametersKeywordsSchema.openapi({
        param: {
          name: 'keywords',
          in: 'query',
          description:
            'Keywords can boost or suppress specialized terminology and brands. `keywords` is not supported with Nova-3 models; use `keyterm` instead.',
          required: false,
          schema: { $ref: '#/components/schemas/V1ListenPostParametersKeywords' },
        },
      }).exactOptional(),
      language: z
        .string()
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            name: 'language',
            in: 'query',
            description:
              'The [BCP-47 language tag](https://tools.ietf.org/html/bcp47) that hints at the primary spoken language. Depending on the Model and API endpoint you choose only certain languages are available',
            required: false,
            schema: { type: 'string', default: 'en' },
          },
        }),
      language_hint: V1ListenPostParametersLanguageHintSchema.openapi({
        param: {
          name: 'language_hint',
          in: 'query',
          description:
            'Biases language detection toward one or more languages on Nova-3 multilingual (`model=nova-3&language=multi`); ignored with any other `language`. Repeat the parameter to pass several codes, for example `language_hint=en&language_hint=es`. A code that is not in the [Nova-3 multilingual list](/docs/models-languages-overview#nova-3) fails the request with HTTP 400. See [Nova-3 Language Prompting](/docs/nova-3-language-prompting).\n',
          required: false,
          schema: { $ref: '#/components/schemas/V1ListenPostParametersLanguageHint' },
        },
      }).exactOptional(),
      measurements: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'measurements',
            in: 'query',
            description:
              'Spoken measurements will be converted to their corresponding abbreviations',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      model: z
        .xor([V1ListenPostParametersModel0Schema, z.string()])
        .default('base-general')
        .exactOptional()
        .openapi({
          param: {
            name: 'model',
            in: 'query',
            description: 'AI model used to process submitted audio',
            required: false,
            schema: {
              oneOf: [
                { $ref: '#/components/schemas/V1ListenPostParametersModel0' },
                { type: 'string' },
              ],
              title: 'V1ListenPostParametersModel',
              default: 'base-general',
            },
          },
          title: 'V1ListenPostParametersModel',
        }),
      multichannel: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'multichannel',
            in: 'query',
            description: 'Transcribe each audio channel independently',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      numerals: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'numerals',
            in: 'query',
            description: 'Numerals converts numbers from written format to numerical format',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      paragraphs: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'paragraphs',
            in: 'query',
            description: 'Splits audio into paragraphs to improve transcript readability',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      profanity_filter: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'profanity_filter',
            in: 'query',
            description:
              'Profanity Filter looks for recognized profanity and converts it to the nearest recognized non-profane word or removes it from the transcript completely',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      punctuate: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'punctuate',
            in: 'query',
            description: 'Add punctuation and capitalization to the transcript',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      redact: z
        .xor([z.string(), V1ListenPostParametersRedact1Schema])
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'redact',
            in: 'query',
            description: 'Redaction removes sensitive information from your transcripts',
            required: false,
            schema: {
              oneOf: [
                { type: 'string' },
                { $ref: '#/components/schemas/V1ListenPostParametersRedact1' },
              ],
              title: 'V1ListenPostParametersRedact',
              default: false,
            },
          },
          title: 'V1ListenPostParametersRedact',
        }),
      replace: V1ListenPostParametersReplaceSchema.openapi({
        param: {
          name: 'replace',
          in: 'query',
          description: 'Search for terms or phrases in submitted audio and replaces them',
          required: false,
          schema: { $ref: '#/components/schemas/V1ListenPostParametersReplace' },
        },
      }).exactOptional(),
      search: V1ListenPostParametersSearchSchema.openapi({
        param: {
          name: 'search',
          in: 'query',
          description: 'Search for terms or phrases in submitted audio',
          required: false,
          schema: { $ref: '#/components/schemas/V1ListenPostParametersSearch' },
        },
      }).exactOptional(),
      smart_format: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'smart_format',
            in: 'query',
            description:
              'Apply formatting to transcript output. When set to true, additional formatting will be applied to transcripts to improve readability',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      utterances: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'utterances',
            in: 'query',
            description: 'Segments speech into meaningful semantic units',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      utt_split: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .default(0.8)
        .exactOptional()
        .openapi({
          param: {
            name: 'utt_split',
            in: 'query',
            description:
              'Seconds to wait before detecting a pause between words in submitted audio',
            required: false,
            schema: { type: 'number', format: 'double', default: 0.8 },
          },
        }),
      version: z
        .xor([V1ListenPostParametersVersion0Schema, z.string()])
        .default('latest')
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            description: 'Version of an AI model to use',
            required: false,
            schema: {
              oneOf: [
                { $ref: '#/components/schemas/V1ListenPostParametersVersion0' },
                { type: 'string' },
              ],
              title: 'V1ListenPostParametersVersion',
              default: 'latest',
            },
          },
          title: 'V1ListenPostParametersVersion',
        }),
      mip_opt_out: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'mip_opt_out',
            in: 'query',
            description:
              'Opts out requests from the Deepgram Model Improvement Program. Refer to our Docs for pricing impacts before setting this to true. https://dpgr.am/deepgram-mip',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
    }),
    body: {
      description: 'Transcribe an audio or video file',
      content: { 'application/json': { schema: ListenV1RequestUrlSchema } },
    },
  },
  responses: {
    200: {
      description: 'Returns either transcription results, or a request_id when using a callback.',
      content: { 'application/json': { schema: ListenV1MediaTranscribeResponse_200Schema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ListenV1ResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postV1SpeakRoute = createRoute({
  method: 'post',
  path: '/v1/speak',
  tags: ['audio'],
  summary: 'Text to Speech transformation',
  description: "Convert text into natural-sounding speech using Deepgram's TTS REST API",
  operationId: 'audio_generate',
  request: {
    query: z.object({
      callback: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'callback',
            in: 'query',
            description: "URL to which we'll make the callback request",
            required: false,
            schema: { type: 'string' },
          },
        }),
      callback_method: z
        .enum(['POST', 'PUT'])
        .default('POST')
        .exactOptional()
        .openapi({
          param: {
            name: 'callback_method',
            in: 'query',
            description: 'HTTP method by which the callback request will be made',
            required: false,
            schema: {
              type: 'string',
              enum: ['POST', 'PUT'],
              default: 'POST',
              title: 'V1SpeakPostParametersCallbackMethod',
            },
          },
          title: 'V1SpeakPostParametersCallbackMethod',
        }),
      mip_opt_out: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'mip_opt_out',
            in: 'query',
            description:
              'Opts out requests from the Deepgram Model Improvement Program. Refer to our Docs for pricing impacts before setting this to true. https://dpgr.am/deepgram-mip',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      tag: V1SpeakPostParametersTagSchema.openapi({
        param: {
          name: 'tag',
          in: 'query',
          description:
            'Label your requests for the purpose of identification during usage reporting',
          required: false,
          schema: { $ref: '#/components/schemas/V1SpeakPostParametersTag' },
        },
      }).exactOptional(),
      bit_rate: ((schema) =>
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
        ]))(
        z.xor([
          V1SpeakPostParametersBitRate0Schema,
          z.float64().min(4000).max(650000),
          z.float64().min(4000).max(192000),
        ]),
      )
        .default(48000)
        .exactOptional()
        .openapi({
          param: {
            name: 'bit_rate',
            in: 'query',
            description:
              'The bitrate of the audio in bits per second. Choose from predefined ranges or specific values based on the encoding type.',
            required: false,
            schema: {
              oneOf: [
                { $ref: '#/components/schemas/V1SpeakPostParametersBitRate0' },
                { type: 'number', format: 'double', minimum: 4000, maximum: 650000 },
                { type: 'number', format: 'double', minimum: 4000, maximum: 192000 },
              ],
              title: 'V1SpeakPostParametersBitRate',
              default: 48000,
            },
          },
          title: 'V1SpeakPostParametersBitRate',
        }),
      container: z
        .xor([
          V1SpeakPostParametersContainer0Schema,
          V1SpeakPostParametersContainer1Schema,
          V1SpeakPostParametersContainer2Schema,
          V1SpeakPostParametersContainer3Schema,
          V1SpeakPostParametersContainer4Schema,
        ])
        .default('wav')
        .exactOptional()
        .openapi({
          param: {
            name: 'container',
            in: 'query',
            description:
              'Container specifies the file format wrapper for the output audio. The available options depend on the encoding type.',
            required: false,
            schema: {
              oneOf: [
                { $ref: '#/components/schemas/V1SpeakPostParametersContainer0' },
                { $ref: '#/components/schemas/V1SpeakPostParametersContainer1' },
                { $ref: '#/components/schemas/V1SpeakPostParametersContainer2' },
                { $ref: '#/components/schemas/V1SpeakPostParametersContainer3' },
                { $ref: '#/components/schemas/V1SpeakPostParametersContainer4' },
              ],
              title: 'V1SpeakPostParametersContainer',
              default: 'wav',
            },
          },
          title: 'V1SpeakPostParametersContainer',
        }),
      encoding: z
        .xor([
          V1SpeakPostParametersEncoding0Schema,
          V1SpeakPostParametersEncoding1Schema,
          V1SpeakPostParametersEncoding2Schema,
          V1SpeakPostParametersEncoding3Schema,
          V1SpeakPostParametersEncoding4Schema,
          V1SpeakPostParametersEncoding5Schema,
          V1SpeakPostParametersEncoding6Schema,
        ])
        .default('mp3')
        .exactOptional()
        .openapi({
          param: {
            name: 'encoding',
            in: 'query',
            description:
              'Encoding allows you to specify the expected encoding of your audio output',
            required: false,
            schema: {
              oneOf: [
                { $ref: '#/components/schemas/V1SpeakPostParametersEncoding0' },
                { $ref: '#/components/schemas/V1SpeakPostParametersEncoding1' },
                { $ref: '#/components/schemas/V1SpeakPostParametersEncoding2' },
                { $ref: '#/components/schemas/V1SpeakPostParametersEncoding3' },
                { $ref: '#/components/schemas/V1SpeakPostParametersEncoding4' },
                { $ref: '#/components/schemas/V1SpeakPostParametersEncoding5' },
                { $ref: '#/components/schemas/V1SpeakPostParametersEncoding6' },
              ],
              title: 'V1SpeakPostParametersEncoding',
              default: 'mp3',
            },
          },
          title: 'V1SpeakPostParametersEncoding',
        }),
      model: z
        .enum([
          'aura-angus-en',
          'aura-arcas-en',
          'aura-asteria-en',
          'aura-athena-en',
          'aura-helios-en',
          'aura-hera-en',
          'aura-luna-en',
          'aura-orion-en',
          'aura-orpheus-en',
          'aura-perseus-en',
          'aura-stella-en',
          'aura-zeus-en',
          'aura-2-amalthea-en',
          'aura-2-andromeda-en',
          'aura-2-apollo-en',
          'aura-2-arcas-en',
          'aura-2-aries-en',
          'aura-2-asteria-en',
          'aura-2-athena-en',
          'aura-2-atlas-en',
          'aura-2-aurora-en',
          'aura-2-callista-en',
          'aura-2-cora-en',
          'aura-2-cordelia-en',
          'aura-2-delia-en',
          'aura-2-draco-en',
          'aura-2-electra-en',
          'aura-2-harmonia-en',
          'aura-2-helena-en',
          'aura-2-hera-en',
          'aura-2-hermes-en',
          'aura-2-hyperion-en',
          'aura-2-iris-en',
          'aura-2-janus-en',
          'aura-2-juno-en',
          'aura-2-jupiter-en',
          'aura-2-luna-en',
          'aura-2-mars-en',
          'aura-2-minerva-en',
          'aura-2-neptune-en',
          'aura-2-odysseus-en',
          'aura-2-ophelia-en',
          'aura-2-orion-en',
          'aura-2-orpheus-en',
          'aura-2-pandora-en',
          'aura-2-phoebe-en',
          'aura-2-pluto-en',
          'aura-2-saturn-en',
          'aura-2-selene-en',
          'aura-2-thalia-en',
          'aura-2-theia-en',
          'aura-2-vesta-en',
          'aura-2-zeus-en',
          'aura-2-agustina-es',
          'aura-2-alvaro-es',
          'aura-2-antonia-es',
          'aura-2-aquila-es',
          'aura-2-carina-es',
          'aura-2-celeste-es',
          'aura-2-diana-es',
          'aura-2-estrella-es',
          'aura-2-gloria-es',
          'aura-2-javier-es',
          'aura-2-luciano-es',
          'aura-2-nestor-es',
          'aura-2-olivia-es',
          'aura-2-selena-es',
          'aura-2-silvia-es',
          'aura-2-sirio-es',
          'aura-2-valerio-es',
          'aura-2-aurelia-de',
          'aura-2-elara-de',
          'aura-2-fabian-de',
          'aura-2-julius-de',
          'aura-2-kara-de',
          'aura-2-lara-de',
          'aura-2-viktoria-de',
          'aura-2-beatrix-nl',
          'aura-2-cornelia-nl',
          'aura-2-daphne-nl',
          'aura-2-hestia-nl',
          'aura-2-lars-nl',
          'aura-2-leda-nl',
          'aura-2-rhea-nl',
          'aura-2-roman-nl',
          'aura-2-sander-nl',
          'aura-2-agathe-fr',
          'aura-2-hector-fr',
          'aura-2-cesare-it',
          'aura-2-cinzia-it',
          'aura-2-demetra-it',
          'aura-2-dionisio-it',
          'aura-2-elio-it',
          'aura-2-flavio-it',
          'aura-2-livia-it',
          'aura-2-maia-it',
          'aura-2-melia-it',
          'aura-2-ama-ja',
          'aura-2-ebisu-ja',
          'aura-2-fujin-ja',
          'aura-2-izanami-ja',
          'aura-2-uzume-ja',
        ])
        .default('aura-asteria-en')
        .exactOptional()
        .openapi({
          param: {
            name: 'model',
            in: 'query',
            description: 'AI model used to process submitted text',
            required: false,
            schema: {
              type: 'string',
              enum: [
                'aura-angus-en',
                'aura-arcas-en',
                'aura-asteria-en',
                'aura-athena-en',
                'aura-helios-en',
                'aura-hera-en',
                'aura-luna-en',
                'aura-orion-en',
                'aura-orpheus-en',
                'aura-perseus-en',
                'aura-stella-en',
                'aura-zeus-en',
                'aura-2-amalthea-en',
                'aura-2-andromeda-en',
                'aura-2-apollo-en',
                'aura-2-arcas-en',
                'aura-2-aries-en',
                'aura-2-asteria-en',
                'aura-2-athena-en',
                'aura-2-atlas-en',
                'aura-2-aurora-en',
                'aura-2-callista-en',
                'aura-2-cora-en',
                'aura-2-cordelia-en',
                'aura-2-delia-en',
                'aura-2-draco-en',
                'aura-2-electra-en',
                'aura-2-harmonia-en',
                'aura-2-helena-en',
                'aura-2-hera-en',
                'aura-2-hermes-en',
                'aura-2-hyperion-en',
                'aura-2-iris-en',
                'aura-2-janus-en',
                'aura-2-juno-en',
                'aura-2-jupiter-en',
                'aura-2-luna-en',
                'aura-2-mars-en',
                'aura-2-minerva-en',
                'aura-2-neptune-en',
                'aura-2-odysseus-en',
                'aura-2-ophelia-en',
                'aura-2-orion-en',
                'aura-2-orpheus-en',
                'aura-2-pandora-en',
                'aura-2-phoebe-en',
                'aura-2-pluto-en',
                'aura-2-saturn-en',
                'aura-2-selene-en',
                'aura-2-thalia-en',
                'aura-2-theia-en',
                'aura-2-vesta-en',
                'aura-2-zeus-en',
                'aura-2-agustina-es',
                'aura-2-alvaro-es',
                'aura-2-antonia-es',
                'aura-2-aquila-es',
                'aura-2-carina-es',
                'aura-2-celeste-es',
                'aura-2-diana-es',
                'aura-2-estrella-es',
                'aura-2-gloria-es',
                'aura-2-javier-es',
                'aura-2-luciano-es',
                'aura-2-nestor-es',
                'aura-2-olivia-es',
                'aura-2-selena-es',
                'aura-2-silvia-es',
                'aura-2-sirio-es',
                'aura-2-valerio-es',
                'aura-2-aurelia-de',
                'aura-2-elara-de',
                'aura-2-fabian-de',
                'aura-2-julius-de',
                'aura-2-kara-de',
                'aura-2-lara-de',
                'aura-2-viktoria-de',
                'aura-2-beatrix-nl',
                'aura-2-cornelia-nl',
                'aura-2-daphne-nl',
                'aura-2-hestia-nl',
                'aura-2-lars-nl',
                'aura-2-leda-nl',
                'aura-2-rhea-nl',
                'aura-2-roman-nl',
                'aura-2-sander-nl',
                'aura-2-agathe-fr',
                'aura-2-hector-fr',
                'aura-2-cesare-it',
                'aura-2-cinzia-it',
                'aura-2-demetra-it',
                'aura-2-dionisio-it',
                'aura-2-elio-it',
                'aura-2-flavio-it',
                'aura-2-livia-it',
                'aura-2-maia-it',
                'aura-2-melia-it',
                'aura-2-ama-ja',
                'aura-2-ebisu-ja',
                'aura-2-fujin-ja',
                'aura-2-izanami-ja',
                'aura-2-uzume-ja',
              ],
              default: 'aura-asteria-en',
              title: 'V1SpeakPostParametersModel',
            },
          },
          title: 'V1SpeakPostParametersModel',
        }),
      sample_rate: z
        .xor([
          V1SpeakPostParametersSampleRate0Schema,
          V1SpeakPostParametersSampleRate1Schema,
          V1SpeakPostParametersSampleRate2Schema,
          V1SpeakPostParametersSampleRate3Schema,
          V1SpeakPostParametersSampleRate4Schema,
        ])
        .default(24000)
        .exactOptional()
        .openapi({
          param: {
            name: 'sample_rate',
            in: 'query',
            description:
              'Sample Rate specifies the sample rate for the output audio. Based on the encoding, different sample rates are supported. For some encodings, the sample rate is not configurable',
            required: false,
            schema: {
              oneOf: [
                { $ref: '#/components/schemas/V1SpeakPostParametersSampleRate0' },
                { $ref: '#/components/schemas/V1SpeakPostParametersSampleRate1' },
                { $ref: '#/components/schemas/V1SpeakPostParametersSampleRate2' },
                { $ref: '#/components/schemas/V1SpeakPostParametersSampleRate3' },
                { $ref: '#/components/schemas/V1SpeakPostParametersSampleRate4' },
              ],
              title: 'V1SpeakPostParametersSampleRate',
              default: 24000,
            },
          },
          title: 'V1SpeakPostParametersSampleRate',
        }),
      speed: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64().min(0.7).max(1.5),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'speed',
            in: 'query',
            description:
              'Speaking rate multiplier that adjusts the pace of generated speech while preserving natural prosody and voice quality. Not yet supported in all languages.',
            required: false,
            schema: { type: 'number', format: 'double', minimum: 0.7, maximum: 1.5, default: 1 },
          },
        }),
    }),
    body: {
      description: 'Transform text to speech',
      content: { 'application/json': { schema: SpeakV1RequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful text-to-speech transformation',
      content: { 'application/json': { schema: SpeakV1AudioGenerateResponse_200Schema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postV1ReadRoute = createRoute({
  method: 'post',
  path: '/v1/read',
  tags: ['text'],
  summary: 'Analyze text content',
  description: 'Analyze text content using Deepgrams text analysis API',
  operationId: 'text_analyze',
  request: {
    query: z.object({
      callback: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'callback',
            in: 'query',
            description: "URL to which we'll make the callback request",
            required: false,
            schema: { type: 'string' },
          },
        }),
      callback_method: z
        .enum(['POST', 'PUT'])
        .default('POST')
        .exactOptional()
        .openapi({
          param: {
            name: 'callback_method',
            in: 'query',
            description: 'HTTP method by which the callback request will be made',
            required: false,
            schema: {
              type: 'string',
              enum: ['POST', 'PUT'],
              default: 'POST',
              title: 'V1ReadPostParametersCallbackMethod',
            },
          },
          title: 'V1ReadPostParametersCallbackMethod',
        }),
      sentiment: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'sentiment',
            in: 'query',
            description: 'Recognizes the sentiment throughout a transcript or text',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      summarize: ((schema) =>
        z.union([
          z.preprocess(
            ((read) => (val: unknown) => {
              const result = read.safeParse(val)
              return result.success ? result.data : val
            })(z.stringbool()),
            schema,
          ),
          schema,
        ]))(V1ReadPostParametersSummarizeSchema)
        .exactOptional()
        .openapi({
          param: {
            name: 'summarize',
            in: 'query',
            description:
              'Summarize content. For Listen API, supports string version option. For Read API, accepts boolean only.',
            required: false,
            schema: { $ref: '#/components/schemas/V1ReadPostParametersSummarize' },
          },
        }),
      tag: V1ReadPostParametersTagSchema.openapi({
        param: {
          name: 'tag',
          in: 'query',
          description:
            'Label your requests for the purpose of identification during usage reporting',
          required: false,
          schema: { $ref: '#/components/schemas/V1ReadPostParametersTag' },
        },
      }).exactOptional(),
      topics: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'topics',
            in: 'query',
            description: 'Detect topics throughout a transcript or text',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      custom_topic: V1ReadPostParametersCustomTopicSchema.openapi({
        param: {
          name: 'custom_topic',
          in: 'query',
          description:
            'Custom topics you want the model to detect within your input audio or text if present Submit up to `100`.',
          required: false,
          schema: { $ref: '#/components/schemas/V1ReadPostParametersCustomTopic' },
        },
      }).exactOptional(),
      custom_topic_mode: z
        .enum(['extended', 'strict'])
        .default('extended')
        .exactOptional()
        .openapi({
          param: {
            name: 'custom_topic_mode',
            in: 'query',
            description:
              'Sets how the model will interpret strings submitted to the `custom_topic` param. When `strict`, the model will only return topics submitted using the `custom_topic` param. When `extended`, the model will return its own detected topics in addition to those submitted using the `custom_topic` param',
            required: false,
            schema: {
              type: 'string',
              enum: ['extended', 'strict'],
              default: 'extended',
              title: 'V1ReadPostParametersCustomTopicMode',
            },
          },
          title: 'V1ReadPostParametersCustomTopicMode',
        }),
      intents: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'intents',
            in: 'query',
            description: 'Recognizes speaker intent throughout a transcript or text',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      custom_intent: V1ReadPostParametersCustomIntentSchema.openapi({
        param: {
          name: 'custom_intent',
          in: 'query',
          description:
            'Custom intents you want the model to detect within your input audio if present',
          required: false,
          schema: { $ref: '#/components/schemas/V1ReadPostParametersCustomIntent' },
        },
      }).exactOptional(),
      custom_intent_mode: z
        .enum(['extended', 'strict'])
        .default('extended')
        .exactOptional()
        .openapi({
          param: {
            name: 'custom_intent_mode',
            in: 'query',
            description:
              'Sets how the model will interpret intents submitted to the `custom_intent` param. When `strict`, the model will only return intents submitted using the `custom_intent` param. When `extended`, the model will return its own detected intents in the `custom_intent` param.',
            required: false,
            schema: {
              type: 'string',
              enum: ['extended', 'strict'],
              default: 'extended',
              title: 'V1ReadPostParametersCustomIntentMode',
            },
          },
          title: 'V1ReadPostParametersCustomIntentMode',
        }),
      language: z
        .string()
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            name: 'language',
            in: 'query',
            description:
              'The [BCP-47 language tag](https://tools.ietf.org/html/bcp47) that hints at the primary spoken language. Depending on the Model and API endpoint you choose only certain languages are available',
            required: false,
            schema: { type: 'string', default: 'en' },
          },
        }),
    }),
    body: {
      description: 'Analyze a text file',
      content: { 'application/json': { schema: ReadV1RequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful text analysis',
      content: { 'application/json': { schema: ReadV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getV1ProjectsRoute = createRoute({
  method: 'get',
  path: '/v1/projects',
  tags: ['projects'],
  summary: 'List Projects',
  description: 'Retrieves basic information about the projects associated with the API key',
  operationId: 'projects_list',
  responses: {
    200: {
      description: 'A list of projects',
      content: { 'application/json': { schema: ListProjectsV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getV1ProjectsProjectIdRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_id}',
  tags: ['projects'],
  summary: 'Get a Project',
  description: 'Retrieves information about the specified project',
  operationId: 'projects_get',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64().min(1).max(1000),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Number of results to return per page. Default 10. Range [1,1000]',
            required: false,
            schema: { type: 'number', format: 'double', minimum: 1, maximum: 1000, default: 10 },
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            description:
              'Navigate and return the results to retrieve specific portions of information of the response',
            required: false,
            schema: { type: 'number', format: 'double' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A project',
      content: { 'application/json': { schema: GetProjectV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const deleteV1ProjectsProjectIdRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{project_id}',
  tags: ['projects'],
  summary: 'Delete a Project',
  description: 'Deletes the specified project',
  operationId: 'projects_delete',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A project',
      content: { 'application/json': { schema: DeleteProjectV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const patchV1ProjectsProjectIdRoute = createRoute({
  method: 'patch',
  path: '/v1/projects/{project_id}',
  tags: ['projects'],
  summary: 'Update a Project',
  description: 'Updates the name or other properties of an existing project',
  operationId: 'projects_update',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The name of the project',
      content: { 'application/json': { schema: UpdateProjectV1RequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'A project',
      content: { 'application/json': { schema: UpdateProjectV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const deleteV1ProjectsProjectIdLeaveRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{project_id}/leave',
  tags: ['projects'],
  summary: 'Leave a Project',
  description: 'Removes the authenticated account from the specific project',
  operationId: 'projects_leave',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully removed account from project',
      content: { 'application/json': { schema: LeaveProjectV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getV1ProjectsProjectIdModelsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_id}/models',
  tags: ['models'],
  summary: 'List Project Models',
  description:
    'Returns metadata on all the latest models that a specific project has access to, including non-public models',
  operationId: 'models_list_2',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      include_outdated: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'include_outdated',
            in: 'query',
            description: 'returns non-latest versions of models',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of models',
      content: { 'application/json': { schema: ListModelsV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getV1ProjectsProjectIdModelsModelIdRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_id}/models/{model_id}',
  tags: ['models'],
  summary: 'Get a Project Model',
  description: 'Returns metadata for a specific model',
  operationId: 'models_get',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      model_id: z
        .string()
        .openapi({
          param: {
            name: 'model_id',
            in: 'path',
            description: 'The specific UUID of the model',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A model object that can be either STT or TTS',
      content: { 'application/json': { schema: GetModelV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getV1ModelsRoute = createRoute({
  method: 'get',
  path: '/v1/models',
  tags: ['models'],
  summary: 'List Models',
  description:
    'Returns metadata on all the latest public models. To retrieve custom models, use Get Project Models.',
  operationId: 'models_list_3',
  request: {
    query: z.object({
      include_outdated: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'include_outdated',
            in: 'query',
            description: 'returns non-latest versions of models',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of models',
      content: { 'application/json': { schema: ListModelsV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getV1ModelsModelIdRoute = createRoute({
  method: 'get',
  path: '/v1/models/{model_id}',
  tags: ['models'],
  summary: 'Get a specific Model',
  description: 'Returns metadata for a specific public model',
  operationId: 'models_get_2',
  request: {
    params: z.object({
      model_id: z
        .string()
        .openapi({
          param: {
            name: 'model_id',
            in: 'path',
            description: 'The specific UUID of the model',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A model object that can be either STT or TTS',
      content: { 'application/json': { schema: GetModelV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getV1ProjectsProjectIdKeysRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_id}/keys',
  tags: ['keys'],
  summary: 'List Project Keys',
  description: 'Retrieves all API keys associated with the specified project',
  operationId: 'keys_list',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      status: V1ProjectsProjectIdKeysGetParametersStatusSchema.openapi({
        param: {
          name: 'status',
          in: 'query',
          description: 'Only return keys with a specific status',
          required: false,
          schema: { $ref: '#/components/schemas/V1ProjectsProjectIdKeysGetParametersStatus' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'A list of API keys',
      content: { 'application/json': { schema: ListProjectKeysV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postV1ProjectsProjectIdKeysRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{project_id}/keys',
  tags: ['keys'],
  summary: 'Create a Project Key',
  description: 'Creates a new API key with specified settings for the project',
  operationId: 'keys_create',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'API key settings',
      content: { 'application/json': { schema: CreateKeyV1RequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'API key created successfully',
      content: { 'application/json': { schema: CreateKeyV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getV1ProjectsProjectIdKeysKeyIdRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_id}/keys/{key_id}',
  tags: ['keys'],
  summary: 'Get a Project Key',
  description: 'Retrieves information about a specified API key',
  operationId: 'keys_get',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key_id: z
        .string()
        .openapi({
          param: {
            name: 'key_id',
            in: 'path',
            description: 'The unique identifier of the API key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A specific API key',
      content: { 'application/json': { schema: GetProjectKeyV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const deleteV1ProjectsProjectIdKeysKeyIdRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{project_id}/keys/{key_id}',
  tags: ['keys'],
  summary: 'Delete a Project Key',
  description: 'Deletes an API key for a specific project',
  operationId: 'keys_delete',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key_id: z
        .string()
        .openapi({
          param: {
            name: 'key_id',
            in: 'path',
            description: 'The unique identifier of the API key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'API key deleted',
      content: { 'application/json': { schema: DeleteProjectKeyV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getV1ProjectsProjectIdMembersRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_id}/members',
  tags: ['members'],
  summary: 'List Project Members',
  description: 'Retrieves a list of members for a given project',
  operationId: 'members_list',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of members for a given project',
      content: { 'application/json': { schema: ListProjectMembersV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const deleteV1ProjectsProjectIdMembersMemberIdRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{project_id}/members/{member_id}',
  tags: ['members'],
  summary: 'Delete a Project Member',
  description: 'Removes a member from the project using their unique member ID',
  operationId: 'members_delete',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      member_id: z
        .string()
        .openapi({
          param: {
            name: 'member_id',
            in: 'path',
            description: 'The unique identifier of the Member',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Delete the specific member from the project',
      content: { 'application/json': { schema: DeleteProjectMemberV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getV1ProjectsProjectIdMembersMemberIdScopesRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_id}/members/{member_id}/scopes',
  tags: ['scopes'],
  summary: 'List Project Member Scopes',
  description: 'Retrieves a list of scopes for a specific member',
  operationId: 'scopes_list',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      member_id: z
        .string()
        .openapi({
          param: {
            name: 'member_id',
            in: 'path',
            description: 'The unique identifier of the Member',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of scopes for a specific member',
      content: { 'application/json': { schema: ListProjectMemberScopesV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const putV1ProjectsProjectIdMembersMemberIdScopesRoute = createRoute({
  method: 'put',
  path: '/v1/projects/{project_id}/members/{member_id}/scopes',
  tags: ['scopes'],
  summary: 'Update Project Member Scopes',
  description: 'Updates the scopes for a specific member',
  operationId: 'scopes_update',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      member_id: z
        .string()
        .openapi({
          param: {
            name: 'member_id',
            in: 'path',
            description: 'The unique identifier of the Member',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'A scope to update',
      content: { 'application/json': { schema: UpdateProjectMemberScopesV1RequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Updated the scopes for a specific member',
      content: { 'application/json': { schema: UpdateProjectMemberScopesV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getV1ProjectsProjectIdInvitesRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_id}/invites',
  tags: ['invites'],
  summary: 'List Project Invites',
  description: 'Generates a list of invites for a specific project',
  operationId: 'invites_list',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of invites for a specific project',
      content: { 'application/json': { schema: ListProjectInvitesV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postV1ProjectsProjectIdInvitesRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{project_id}/invites',
  tags: ['invites'],
  summary: 'Create a Project Invite',
  description: 'Generates an invite for a specific project',
  operationId: 'invites_create',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'email to invite to the project',
      content: { 'application/json': { schema: CreateProjectInviteV1RequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'The invite was successfully generated',
      content: { 'application/json': { schema: CreateProjectInviteV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const deleteV1ProjectsProjectIdInvitesEmailRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{project_id}/invites/{email}',
  tags: ['invites'],
  summary: 'Delete a Project Invite',
  description: 'Deletes an invite for a specific project',
  operationId: 'invites_delete',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      email: z
        .string()
        .openapi({
          param: {
            name: 'email',
            in: 'path',
            description: 'The email address of the member',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The invite was successfully deleted',
      content: { 'application/json': { schema: DeleteProjectInviteV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getV1ProjectsProjectIdRequestsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_id}/requests',
  tags: ['requests'],
  summary: 'List Project Requests',
  description: 'Generates a list of requests for a specific project',
  operationId: 'requests_list',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      start: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description:
              'Start date of the requested date range. Formats accepted are YYYY-MM-DD, YYYY-MM-DDTHH:MM:SS, or YYYY-MM-DDTHH:MM:SS+HH:MM',
            required: false,
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      end: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'end',
            in: 'query',
            description:
              'End date of the requested date range. Formats accepted are YYYY-MM-DD, YYYY-MM-DDTHH:MM:SS, or YYYY-MM-DDTHH:MM:SS+HH:MM',
            required: false,
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64().min(1).max(1000),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Number of results to return per page. Default 10. Range [1,1000]',
            required: false,
            schema: { type: 'number', format: 'double', minimum: 1, maximum: 1000, default: 10 },
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            description:
              'Navigate and return the results to retrieve specific portions of information of the response',
            required: false,
            schema: { type: 'number', format: 'double' },
          },
        }),
      accessor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'accessor',
            in: 'query',
            description: 'Filter for requests where a specific accessor was used',
            required: false,
            schema: { type: 'string' },
          },
        }),
      request_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'request_id',
            in: 'query',
            description: 'Filter for a specific request id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      deployment: V1ProjectsProjectIdRequestsGetParametersDeploymentSchema.openapi({
        param: {
          name: 'deployment',
          in: 'query',
          description: 'Filter for requests where a specific deployment was used',
          required: false,
          schema: {
            $ref: '#/components/schemas/V1ProjectsProjectIdRequestsGetParametersDeployment',
          },
        },
      }).exactOptional(),
      endpoint: V1ProjectsProjectIdRequestsGetParametersEndpointSchema.openapi({
        param: {
          name: 'endpoint',
          in: 'query',
          description: 'Filter for requests where a specific endpoint was used',
          required: false,
          schema: { $ref: '#/components/schemas/V1ProjectsProjectIdRequestsGetParametersEndpoint' },
        },
      }).exactOptional(),
      method: V1ProjectsProjectIdRequestsGetParametersMethodSchema.openapi({
        param: {
          name: 'method',
          in: 'query',
          description: 'Filter for requests where a specific method was used',
          required: false,
          schema: { $ref: '#/components/schemas/V1ProjectsProjectIdRequestsGetParametersMethod' },
        },
      }).exactOptional(),
      status: V1ProjectsProjectIdRequestsGetParametersStatusSchema.openapi({
        param: {
          name: 'status',
          in: 'query',
          description:
            'Filter for requests that succeeded (status code < 300) or failed (status code >=400)',
          required: false,
          schema: { $ref: '#/components/schemas/V1ProjectsProjectIdRequestsGetParametersStatus' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'A list of requests for a specific project',
      content: { 'application/json': { schema: ListProjectRequestsV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getV1ProjectsProjectIdRequestsRequestIdRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_id}/requests/{request_id}',
  tags: ['requests'],
  summary: 'Get a Project Request',
  description: 'Retrieves a specific request for a specific project',
  operationId: 'requests_get',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      request_id: z
        .string()
        .openapi({
          param: {
            name: 'request_id',
            in: 'path',
            description: 'The unique identifier of the request',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A specific request for a specific project',
      content: { 'application/json': { schema: GetProjectRequestV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getV1ProjectsProjectIdUsageRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_id}/usage',
  tags: ['usage'],
  summary: 'Get Project Usage',
  description:
    'Retrieves the usage for a specific project. Use Get Project Usage Breakdown for a more comprehensive usage summary.',
  operationId: 'usage_get',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      start: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'Start date of the requested date range. Format accepted is YYYY-MM-DD',
            required: false,
            schema: { type: 'string', format: 'date' },
          },
        }),
      end: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'end',
            in: 'query',
            description: 'End date of the requested date range. Format accepted is YYYY-MM-DD',
            required: false,
            schema: { type: 'string', format: 'date' },
          },
        }),
      accessor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'accessor',
            in: 'query',
            description: 'Filter for requests where a specific accessor was used',
            required: false,
            schema: { type: 'string' },
          },
        }),
      alternatives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'alternatives',
            in: 'query',
            description: 'Filter for requests where alternatives were used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      callback_method: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'callback_method',
            in: 'query',
            description: 'Filter for requests where callback method was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      callback: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'callback',
            in: 'query',
            description: 'Filter for requests where callback was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      channels: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'channels',
            in: 'query',
            description: 'Filter for requests where channels were used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      custom_intent_mode: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'custom_intent_mode',
            in: 'query',
            description: 'Filter for requests where custom intent mode was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      custom_intent: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'custom_intent',
            in: 'query',
            description: 'Filter for requests where custom intent was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      custom_topic_mode: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'custom_topic_mode',
            in: 'query',
            description: 'Filter for requests where custom topic mode was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      custom_topic: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'custom_topic',
            in: 'query',
            description: 'Filter for requests where custom topic was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      deployment: V1ProjectsProjectIdUsageGetParametersDeploymentSchema.openapi({
        param: {
          name: 'deployment',
          in: 'query',
          description: 'Filter for requests where a specific deployment was used',
          required: false,
          schema: { $ref: '#/components/schemas/V1ProjectsProjectIdUsageGetParametersDeployment' },
        },
      }).exactOptional(),
      detect_entities: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'detect_entities',
            in: 'query',
            description: 'Filter for requests where detect entities was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      detect_language: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'detect_language',
            in: 'query',
            description: 'Filter for requests where detect language was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      diarize: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'diarize',
            in: 'query',
            description: 'Filter for requests where diarize was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      dictation: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'dictation',
            in: 'query',
            description: 'Filter for requests where dictation was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      encoding: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'encoding',
            in: 'query',
            description: 'Filter for requests where encoding was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      endpoint: V1ProjectsProjectIdUsageGetParametersEndpointSchema.openapi({
        param: {
          name: 'endpoint',
          in: 'query',
          description: 'Filter for requests where a specific endpoint was used',
          required: false,
          schema: { $ref: '#/components/schemas/V1ProjectsProjectIdUsageGetParametersEndpoint' },
        },
      }).exactOptional(),
      extra: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'extra',
            in: 'query',
            description: 'Filter for requests where extra was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      filler_words: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'filler_words',
            in: 'query',
            description: 'Filter for requests where filler words was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      intents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'intents',
            in: 'query',
            description: 'Filter for requests where intents was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      keyterm: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'keyterm',
            in: 'query',
            description: 'Filter for requests where keyterm was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      keywords: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'keywords',
            in: 'query',
            description: 'Filter for requests where keywords was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      language: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'language',
            in: 'query',
            description: 'Filter for requests where language was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      measurements: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'measurements',
            in: 'query',
            description: 'Filter for requests where measurements were used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      method: V1ProjectsProjectIdUsageGetParametersMethodSchema.openapi({
        param: {
          name: 'method',
          in: 'query',
          description: 'Filter for requests where a specific method was used',
          required: false,
          schema: { $ref: '#/components/schemas/V1ProjectsProjectIdUsageGetParametersMethod' },
        },
      }).exactOptional(),
      model: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'model',
            in: 'query',
            description: 'Filter for requests where a specific model uuid was used',
            required: false,
            schema: { type: 'string' },
          },
        }),
      multichannel: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'multichannel',
            in: 'query',
            description: 'Filter for requests where multichannel was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      numerals: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'numerals',
            in: 'query',
            description: 'Filter for requests where numerals were used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      paragraphs: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'paragraphs',
            in: 'query',
            description: 'Filter for requests where paragraphs were used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      profanity_filter: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'profanity_filter',
            in: 'query',
            description: 'Filter for requests where profanity filter was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      punctuate: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'punctuate',
            in: 'query',
            description: 'Filter for requests where punctuate was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      redact: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'redact',
            in: 'query',
            description: 'Filter for requests where redact was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      replace: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'replace',
            in: 'query',
            description: 'Filter for requests where replace was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      sample_rate: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'sample_rate',
            in: 'query',
            description: 'Filter for requests where sample rate was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      search: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            description: 'Filter for requests where search was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      sentiment: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'sentiment',
            in: 'query',
            description: 'Filter for requests where sentiment was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      smart_format: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'smart_format',
            in: 'query',
            description: 'Filter for requests where smart format was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      summarize: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'summarize',
            in: 'query',
            description: 'Filter for requests where summarize was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      tag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'tag',
            in: 'query',
            description: 'Filter for requests where a specific tag was used',
            required: false,
            schema: { type: 'string' },
          },
        }),
      topics: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'topics',
            in: 'query',
            description: 'Filter for requests where topics was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      utt_split: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'utt_split',
            in: 'query',
            description: 'Filter for requests where utt split was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      utterances: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'utterances',
            in: 'query',
            description: 'Filter for requests where utterances was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      version: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            description: 'Filter for requests where version was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A specific request for a specific project',
      content: { 'application/json': { schema: UsageV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  deprecated: true,
  security: [{ ApiKeyAuth: [] }],
})

export const getV1ProjectsProjectIdUsageFieldsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_id}/usage/fields',
  tags: ['fields'],
  summary: 'List Project Usage Fields',
  description:
    'Lists the features, models, tags, languages, and processing method used for requests in the specified project',
  operationId: 'fields_list',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      start: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'Start date of the requested date range. Format accepted is YYYY-MM-DD',
            required: false,
            schema: { type: 'string', format: 'date' },
          },
        }),
      end: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'end',
            in: 'query',
            description: 'End date of the requested date range. Format accepted is YYYY-MM-DD',
            required: false,
            schema: { type: 'string', format: 'date' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of fields for a specific project',
      content: { 'application/json': { schema: UsageFieldsV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getV1ProjectsProjectIdUsageBreakdownRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_id}/usage/breakdown',
  tags: ['breakdown'],
  summary: 'Get Project Usage Breakdown',
  description:
    'Retrieves the usage breakdown for a specific project, with various filter options by API feature or by groupings. Setting a feature (e.g. diarize) to true includes requests that used that feature, while false excludes requests that used it. Multiple true filters are combined with OR logic, while false filters use AND logic.',
  operationId: 'breakdown_get',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      start: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'Start date of the requested date range. Format accepted is YYYY-MM-DD',
            required: false,
            schema: { type: 'string', format: 'date' },
          },
        }),
      end: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'end',
            in: 'query',
            description: 'End date of the requested date range. Format accepted is YYYY-MM-DD',
            required: false,
            schema: { type: 'string', format: 'date' },
          },
        }),
      grouping: V1ProjectsProjectIdUsageBreakdownGetParametersGroupingSchema.openapi({
        param: {
          name: 'grouping',
          in: 'query',
          description: 'Common usage grouping parameters',
          required: false,
          schema: {
            $ref: '#/components/schemas/V1ProjectsProjectIdUsageBreakdownGetParametersGrouping',
          },
        },
      }).exactOptional(),
      accessor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'accessor',
            in: 'query',
            description: 'Filter for requests where a specific accessor was used',
            required: false,
            schema: { type: 'string' },
          },
        }),
      alternatives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'alternatives',
            in: 'query',
            description: 'Filter for requests where alternatives were used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      callback_method: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'callback_method',
            in: 'query',
            description: 'Filter for requests where callback method was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      callback: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'callback',
            in: 'query',
            description: 'Filter for requests where callback was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      channels: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'channels',
            in: 'query',
            description: 'Filter for requests where channels were used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      custom_intent_mode: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'custom_intent_mode',
            in: 'query',
            description: 'Filter for requests where custom intent mode was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      custom_intent: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'custom_intent',
            in: 'query',
            description: 'Filter for requests where custom intent was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      custom_topic_mode: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'custom_topic_mode',
            in: 'query',
            description: 'Filter for requests where custom topic mode was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      custom_topic: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'custom_topic',
            in: 'query',
            description: 'Filter for requests where custom topic was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      deployment: V1ProjectsProjectIdUsageBreakdownGetParametersDeploymentSchema.openapi({
        param: {
          name: 'deployment',
          in: 'query',
          description: 'Filter for requests where a specific deployment was used',
          required: false,
          schema: {
            $ref: '#/components/schemas/V1ProjectsProjectIdUsageBreakdownGetParametersDeployment',
          },
        },
      }).exactOptional(),
      detect_entities: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'detect_entities',
            in: 'query',
            description: 'Filter for requests where detect entities was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      detect_language: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'detect_language',
            in: 'query',
            description: 'Filter for requests where detect language was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      diarize: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'diarize',
            in: 'query',
            description: 'Filter for requests where diarize was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      dictation: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'dictation',
            in: 'query',
            description: 'Filter for requests where dictation was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      encoding: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'encoding',
            in: 'query',
            description: 'Filter for requests where encoding was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      endpoint: V1ProjectsProjectIdUsageBreakdownGetParametersEndpointSchema.openapi({
        param: {
          name: 'endpoint',
          in: 'query',
          description: 'Filter for requests where a specific endpoint was used',
          required: false,
          schema: {
            $ref: '#/components/schemas/V1ProjectsProjectIdUsageBreakdownGetParametersEndpoint',
          },
        },
      }).exactOptional(),
      extra: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'extra',
            in: 'query',
            description: 'Filter for requests where extra was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      filler_words: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'filler_words',
            in: 'query',
            description: 'Filter for requests where filler words was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      intents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'intents',
            in: 'query',
            description: 'Filter for requests where intents was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      keyterm: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'keyterm',
            in: 'query',
            description: 'Filter for requests where keyterm was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      keywords: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'keywords',
            in: 'query',
            description: 'Filter for requests where keywords was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      language: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'language',
            in: 'query',
            description: 'Filter for requests where language was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      measurements: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'measurements',
            in: 'query',
            description: 'Filter for requests where measurements were used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      method: V1ProjectsProjectIdUsageBreakdownGetParametersMethodSchema.openapi({
        param: {
          name: 'method',
          in: 'query',
          description: 'Filter for requests where a specific method was used',
          required: false,
          schema: {
            $ref: '#/components/schemas/V1ProjectsProjectIdUsageBreakdownGetParametersMethod',
          },
        },
      }).exactOptional(),
      model: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'model',
            in: 'query',
            description: 'Filter for requests where a specific model uuid was used',
            required: false,
            schema: { type: 'string' },
          },
        }),
      multichannel: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'multichannel',
            in: 'query',
            description: 'Filter for requests where multichannel was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      numerals: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'numerals',
            in: 'query',
            description: 'Filter for requests where numerals were used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      paragraphs: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'paragraphs',
            in: 'query',
            description: 'Filter for requests where paragraphs were used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      profanity_filter: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'profanity_filter',
            in: 'query',
            description: 'Filter for requests where profanity filter was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      punctuate: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'punctuate',
            in: 'query',
            description: 'Filter for requests where punctuate was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      redact: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'redact',
            in: 'query',
            description: 'Filter for requests where redact was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      replace: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'replace',
            in: 'query',
            description: 'Filter for requests where replace was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      sample_rate: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'sample_rate',
            in: 'query',
            description: 'Filter for requests where sample rate was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      search: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            description: 'Filter for requests where search was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      sentiment: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'sentiment',
            in: 'query',
            description: 'Filter for requests where sentiment was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      smart_format: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'smart_format',
            in: 'query',
            description: 'Filter for requests where smart format was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      summarize: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'summarize',
            in: 'query',
            description: 'Filter for requests where summarize was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      tag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'tag',
            in: 'query',
            description: 'Filter for requests where a specific tag was used',
            required: false,
            schema: { type: 'string' },
          },
        }),
      topics: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'topics',
            in: 'query',
            description: 'Filter for requests where topics was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      utt_split: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'utt_split',
            in: 'query',
            description: 'Filter for requests where utt split was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      utterances: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'utterances',
            in: 'query',
            description: 'Filter for requests where utterances was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      version: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            description: 'Filter for requests where version was used',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Usage breakdown response',
      content: { 'application/json': { schema: UsageBreakdownV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getV1ProjectsProjectIdBalancesRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_id}/balances',
  tags: ['balances'],
  summary: 'Get Project Balances',
  description: 'Generates a list of outstanding balances for the specified project',
  operationId: 'balances_list',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of outstanding balances',
      content: { 'application/json': { schema: ListProjectBalancesV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getV1ProjectsProjectIdBalancesBalanceIdRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_id}/balances/{balance_id}',
  tags: ['balances'],
  summary: 'Get a Project Balance',
  description: 'Retrieves details about the specified balance',
  operationId: 'balances_get',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      balance_id: z
        .string()
        .openapi({
          param: {
            name: 'balance_id',
            in: 'path',
            description: 'The unique identifier of the balance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A specific balance',
      content: { 'application/json': { schema: GetProjectBalanceV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getV1ProjectsProjectIdBillingBreakdownRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_id}/billing/breakdown',
  tags: ['breakdown'],
  summary: 'Get Project Billing Breakdown',
  description:
    'Retrieves the billing summary for a specific project, with various filter options or by grouping options.',
  operationId: 'breakdown_list',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      start: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'Start date of the requested date range. Format accepted is YYYY-MM-DD',
            required: false,
            schema: { type: 'string', format: 'date' },
          },
        }),
      end: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'end',
            in: 'query',
            description: 'End date of the requested date range. Format accepted is YYYY-MM-DD',
            required: false,
            schema: { type: 'string', format: 'date' },
          },
        }),
      accessor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'accessor',
            in: 'query',
            description: 'Filter for requests where a specific accessor was used',
            required: false,
            schema: { type: 'string' },
          },
        }),
      deployment: V1ProjectsProjectIdBillingBreakdownGetParametersDeploymentSchema.openapi({
        param: {
          name: 'deployment',
          in: 'query',
          description: 'Filter for requests where a specific deployment was used',
          required: false,
          schema: {
            $ref: '#/components/schemas/V1ProjectsProjectIdBillingBreakdownGetParametersDeployment',
          },
        },
      }).exactOptional(),
      tag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'tag',
            in: 'query',
            description: 'Filter for requests where a specific tag was used',
            required: false,
            schema: { type: 'string' },
          },
        }),
      line_item: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'line_item',
            in: 'query',
            description: 'Filter requests by line item (e.g. streaming::nova-3)',
            required: false,
            schema: { type: 'string' },
          },
        }),
      grouping: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(V1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItemsSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'grouping',
            in: 'query',
            description:
              'Group billing breakdown by one or more dimensions (accessor, deployment, line_item, tags)',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/V1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems',
              },
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Billing breakdown response',
      content: { 'application/json': { schema: BillingBreakdownV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getV1ProjectsProjectIdBillingFieldsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_id}/billing/fields',
  tags: ['fields'],
  summary: 'List Project Billing Fields',
  description:
    'Lists the accessors, deployment types, tags, and line items used for billing data in the specified time period. Use this endpoint if you want to filter your results from the Billing Breakdown endpoint and want to know what filters are available.',
  operationId: 'fields_list_2',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      start: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'Start date of the requested date range. Format accepted is YYYY-MM-DD',
            required: false,
            schema: { type: 'string', format: 'date' },
          },
        }),
      end: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'end',
            in: 'query',
            description: 'End date of the requested date range. Format accepted is YYYY-MM-DD',
            required: false,
            schema: { type: 'string', format: 'date' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of billing fields for a specific project',
      content: { 'application/json': { schema: ListBillingFieldsV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getV1ProjectsProjectIdPurchasesRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_id}/purchases',
  tags: ['purchases'],
  summary: 'List Project Purchases',
  description: 'Returns the original purchased amount on an order transaction',
  operationId: 'purchases_list',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64().min(1).max(1000),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Number of results to return per page. Default 10. Range [1,1000]',
            required: false,
            schema: { type: 'number', format: 'double', minimum: 1, maximum: 1000, default: 10 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of purchases for a specific project',
      content: { 'application/json': { schema: ListProjectPurchasesV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getV1ProjectsProjectIdSelfHostedDistributionCredentialsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_id}/self-hosted/distribution/credentials',
  tags: ['distributionCredentials'],
  summary: 'List Project Self-Hosted Distribution Credentials',
  description: 'Lists sets of distribution credentials for the specified project',
  operationId: 'distributionCredentials_list',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of distribution credentials for a specific project',
      content: {
        'application/json': { schema: ListProjectDistributionCredentialsV1ResponseSchema },
      },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postV1ProjectsProjectIdSelfHostedDistributionCredentialsRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{project_id}/self-hosted/distribution/credentials',
  tags: ['distributionCredentials'],
  summary: 'Create a Project Self-Hosted Distribution Credential',
  description: 'Creates a set of distribution credentials for the specified project',
  operationId: 'distributionCredentials_create',
  request: {
    params: z.object({
      project_id: z
        .string()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            description: 'The unique identifier of the project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      scopes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItemsSchema,
          ),
        )
        .default(['self-hosted:products'])
        .exactOptional()
        .openapi({
          param: {
            name: 'scopes',
            in: 'query',
            description: 'List of permission scopes for the credentials',
            required: false,
            schema: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems',
              },
              default: ['self-hosted:products'],
            },
          },
        }),
      provider: z
        .literal('quay')
        .default('quay')
        .exactOptional()
        .openapi({
          param: {
            name: 'provider',
            in: 'query',
            description: 'The provider of the distribution service',
            required: false,
            schema: {
              type: 'string',
              enum: ['quay'],
              default: 'quay',
              title: 'V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider',
            },
          },
          title: 'V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider',
        }),
    }),
    body: {
      description: 'The set of distribution credentials to create',
      content: {
        'application/json': { schema: CreateProjectDistributionCredentialsV1RequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Single distribution credential',
      content: {
        'application/json': { schema: CreateProjectDistributionCredentialsV1ResponseSchema },
      },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdRoute =
  createRoute({
    method: 'get',
    path: '/v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}',
    tags: ['distributionCredentials'],
    summary: 'Get a Project Self-Hosted Distribution Credential',
    description: 'Returns a set of distribution credentials for the specified project',
    operationId: 'distributionCredentials_get',
    request: {
      params: z.object({
        project_id: z
          .string()
          .openapi({
            param: {
              name: 'project_id',
              in: 'path',
              description: 'The unique identifier of the project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        distribution_credentials_id: z
          .string()
          .openapi({
            param: {
              name: 'distribution_credentials_id',
              in: 'path',
              description: 'The UUID of the distribution credentials',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Single distribution credential',
        content: {
          'application/json': { schema: GetProjectDistributionCredentialsV1ResponseSchema },
        },
      },
      400: {
        description: 'Invalid Request',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
    },
    security: [{ ApiKeyAuth: [] }],
  })

export const deleteV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdRoute =
  createRoute({
    method: 'delete',
    path: '/v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}',
    tags: ['distributionCredentials'],
    summary: 'Delete a Project Self-Hosted Distribution Credential',
    description: 'Deletes a set of distribution credentials for the specified project',
    operationId: 'distributionCredentials_delete',
    request: {
      params: z.object({
        project_id: z
          .string()
          .openapi({
            param: {
              name: 'project_id',
              in: 'path',
              description: 'The unique identifier of the project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        distribution_credentials_id: z
          .string()
          .openapi({
            param: {
              name: 'distribution_credentials_id',
              in: 'path',
              description: 'The UUID of the distribution credentials',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Single distribution credential',
        content: {
          'application/json': { schema: GetProjectDistributionCredentialsV1ResponseSchema },
        },
      },
      400: {
        description: 'Invalid Request',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
    },
    security: [{ ApiKeyAuth: [] }],
  })

export const postV1AuthGrantRoute = createRoute({
  method: 'post',
  path: '/v1/auth/grant',
  tags: ['tokens'],
  summary: 'Token-based Authentication',
  description:
    'Generates a temporary JSON Web Token (JWT) with a 30-second (by default) TTL and usage::write permission for core voice APIs, requiring an API key with Member or higher authorization. Tokens created with this endpoint will not work with the Manage APIs.',
  operationId: 'tokens_grant',
  request: {
    body: {
      description: 'Time to live settings',
      content: { 'application/json': { schema: GrantV1RequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Grant response',
      content: { 'application/json': { schema: GrantV1ResponseSchema } },
    },
    400: {
      description: 'Invalid Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})

export const postV2SpeakRoute = createRoute({
  method: 'post',
  path: '/v2/speak',
  tags: ['audio'],
  summary: 'Flux Text to Speech (batch)',
  description:
    "Synthesize a complete block of text into a single audio response using Deepgram's Flux TTS batch (REST) API. Use this for pre-rendering fixed audio (IVR prompts, notifications, narration) where the whole text is known up front and you don't need incremental playback or interruption.",
  operationId: 'audio_generate_2',
  request: {
    query: z.object({
      callback: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'callback',
            in: 'query',
            description: "URL to which we'll make the callback request",
            required: false,
            schema: { type: 'string' },
          },
        }),
      callback_method: z
        .enum(['POST', 'PUT'])
        .default('POST')
        .exactOptional()
        .openapi({
          param: {
            name: 'callback_method',
            in: 'query',
            description: 'HTTP method by which the callback request will be made',
            required: false,
            schema: {
              type: 'string',
              enum: ['POST', 'PUT'],
              default: 'POST',
              title: 'V2SpeakPostParametersCallbackMethod',
            },
          },
          title: 'V2SpeakPostParametersCallbackMethod',
        }),
      mip_opt_out: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'mip_opt_out',
            in: 'query',
            description:
              'Opts out requests from the Deepgram Model Improvement Program. Refer to our Docs for pricing impacts before setting this to true. https://dpgr.am/deepgram-mip',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
      tag: V2SpeakPostParametersTagSchema.openapi({
        param: {
          name: 'tag',
          in: 'query',
          description:
            'Label your requests for the purpose of identification during usage reporting',
          required: false,
          schema: { $ref: '#/components/schemas/V2SpeakPostParametersTag' },
        },
      }).exactOptional(),
      bit_rate: ((schema) =>
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
        ]))(
        z.xor([
          V2SpeakPostParametersBitRate0Schema,
          z.int().min(4000).max(650000),
          z.int().min(4000).max(192000),
        ]),
      )
        .default(48000)
        .exactOptional()
        .openapi({
          param: {
            name: 'bit_rate',
            in: 'query',
            description:
              'The bitrate of the audio in bits per second. Choose from predefined ranges or specific values based on the encoding type.',
            required: false,
            schema: {
              oneOf: [
                { $ref: '#/components/schemas/V2SpeakPostParametersBitRate0' },
                { type: 'integer', minimum: 4000, maximum: 650000 },
                { type: 'integer', minimum: 4000, maximum: 192000 },
              ],
              title: 'V2SpeakPostParametersBitRate',
              default: 48000,
            },
          },
          title: 'V2SpeakPostParametersBitRate',
        }),
      container: z
        .xor([
          V2SpeakPostParametersContainer0Schema,
          V2SpeakPostParametersContainer1Schema,
          V2SpeakPostParametersContainer2Schema,
          V2SpeakPostParametersContainer3Schema,
          V2SpeakPostParametersContainer4Schema,
        ])
        .default('wav')
        .exactOptional()
        .openapi({
          param: {
            name: 'container',
            in: 'query',
            description:
              'Container specifies the file format wrapper for the output audio. The available options depend on the encoding type.',
            required: false,
            schema: {
              oneOf: [
                { $ref: '#/components/schemas/V2SpeakPostParametersContainer0' },
                { $ref: '#/components/schemas/V2SpeakPostParametersContainer1' },
                { $ref: '#/components/schemas/V2SpeakPostParametersContainer2' },
                { $ref: '#/components/schemas/V2SpeakPostParametersContainer3' },
                { $ref: '#/components/schemas/V2SpeakPostParametersContainer4' },
              ],
              title: 'V2SpeakPostParametersContainer',
              default: 'wav',
            },
          },
          title: 'V2SpeakPostParametersContainer',
        }),
      encoding: z
        .xor([
          V2SpeakPostParametersEncoding0Schema,
          V2SpeakPostParametersEncoding1Schema,
          V2SpeakPostParametersEncoding2Schema,
          V2SpeakPostParametersEncoding3Schema,
          V2SpeakPostParametersEncoding4Schema,
          V2SpeakPostParametersEncoding5Schema,
          V2SpeakPostParametersEncoding6Schema,
        ])
        .default('mp3')
        .exactOptional()
        .openapi({
          param: {
            name: 'encoding',
            in: 'query',
            description:
              'Encoding allows you to specify the expected encoding of your audio output',
            required: false,
            schema: {
              oneOf: [
                { $ref: '#/components/schemas/V2SpeakPostParametersEncoding0' },
                { $ref: '#/components/schemas/V2SpeakPostParametersEncoding1' },
                { $ref: '#/components/schemas/V2SpeakPostParametersEncoding2' },
                { $ref: '#/components/schemas/V2SpeakPostParametersEncoding3' },
                { $ref: '#/components/schemas/V2SpeakPostParametersEncoding4' },
                { $ref: '#/components/schemas/V2SpeakPostParametersEncoding5' },
                { $ref: '#/components/schemas/V2SpeakPostParametersEncoding6' },
              ],
              title: 'V2SpeakPostParametersEncoding',
              default: 'mp3',
            },
          },
          title: 'V2SpeakPostParametersEncoding',
        }),
      expressivity: z
        .enum(['-2', '-1', '0', '1', '2'])
        .exactOptional()
        .openapi({
          param: {
            name: 'expressivity',
            in: 'query',
            description:
              "Expressive range of the generated speech, on a calm-to-animated axis. Accepted values: `-2`, `-1`, `0`, `1`, `2`. `0` (the default) is the voice's tuned delivery and the production-validated setting, with `-2` the calm end of the range and `2` the animated end. Supported on all Flux voices; applies to the whole request. Beta: behavior may change in future model versions, and non-default values increase the risk of hallucinations and pronunciation errors; audition before shipping. An invalid value is rejected with a `400` — `EXPRESSIVITY_OUT_OF_RANGE` for a value outside the range, `EXPRESSIVITY_INCREMENT_INVALID` for a fractional value. See [Expressivity](/docs/tts-expressivity).",
            required: false,
            schema: {
              type: 'string',
              enum: ['-2', '-1', '0', '1', '2'],
              title: 'V2SpeakPostParametersExpressivity',
              default: 0,
            },
          },
          title: 'V2SpeakPostParametersExpressivity',
          default: 0,
        }),
      model: z
        .string()
        .openapi({
          param: {
            name: 'model',
            in: 'query',
            description:
              'Flux TTS model used to synthesize the submitted text, in the form `flux-{voice}-{language}` (for example, `flux-alexis-en`). Required; unlike the v1 (Aura) endpoint there is no default and only flux models are accepted.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sample_rate: z
        .xor([
          V2SpeakPostParametersSampleRate0Schema,
          V2SpeakPostParametersSampleRate1Schema,
          V2SpeakPostParametersSampleRate2Schema,
          V2SpeakPostParametersSampleRate3Schema,
        ])
        .default(24000)
        .exactOptional()
        .openapi({
          param: {
            name: 'sample_rate',
            in: 'query',
            description:
              'Sample Rate specifies the sample rate for the output audio. Based on the encoding, different sample rates are supported. For some encodings, the sample rate is not configurable',
            required: false,
            schema: {
              oneOf: [
                { $ref: '#/components/schemas/V2SpeakPostParametersSampleRate0' },
                { $ref: '#/components/schemas/V2SpeakPostParametersSampleRate1' },
                { $ref: '#/components/schemas/V2SpeakPostParametersSampleRate2' },
                { $ref: '#/components/schemas/V2SpeakPostParametersSampleRate3' },
              ],
              title: 'V2SpeakPostParametersSampleRate',
              default: 24000,
            },
          },
          title: 'V2SpeakPostParametersSampleRate',
        }),
      speed: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64().min(0.5).max(1.5).multipleOf(0.05),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'speed',
            in: 'query',
            description:
              'Speaking rate multiplier that adjusts the pace of generated speech while preserving natural prosody and voice quality. Accepted values run `0.5` to `1.5` in `0.05` increments. Not yet supported in all languages. When the text contains an inline pause marker, speed is capped at `1.15` (`PAUSE_SPEED_CAP_EXCEEDED` above that). A value other than `1.0` cannot be combined with inline pronunciation controls (`CONTROL_COMBINATION_INVALID`).',
            required: false,
            schema: {
              type: 'number',
              format: 'double',
              minimum: 0.5,
              maximum: 1.5,
              multipleOf: 0.05,
              default: 1,
            },
          },
        }),
      priority: V2SpeakPostParametersPrioritySchema.openapi({
        param: {
          name: 'priority',
          in: 'query',
          description:
            'Processing priority for asynchronous (callback) requests. The only supported value is low.',
          required: false,
          schema: { $ref: '#/components/schemas/V2SpeakPostParametersPriority' },
        },
      }).exactOptional(),
    }),
    body: {
      description: 'Transform text to speech',
      content: { 'application/json': { schema: SpeakV2RequestSchema } },
    },
  },
  responses: {
    200: {
      description:
        'Returns the synthesized audio in the requested encoding as a binary stream. When a `callback` URL is supplied, the request is processed asynchronously and the response body is instead a JSON acknowledgement (Content-Type `application/json`) of the form {"request_id": "..."}, with the audio delivered to the callback URL. Because this endpoint is typed as a binary audio stream, SDK callers that set `callback` receive this JSON acknowledgement through the audio byte iterator as raw bytes and must join the chunks and parse `request_id` themselves.',
      content: { 'application/json': { schema: SpeakV2AcceptedResponseSchema } },
    },
    400: {
      description:
        'Invalid Request. Inline control violations return a structured error whose `err_code` names the rule: `CONTROL_COMBINATION_INVALID` (pronunciation combined with speed or pause, or all three together), `PAUSE_SPEED_CAP_EXCEEDED` (a pause marker with `speed` above `1.15`), `BREAK_OUT_OF_RANGE` (a pause outside 500-3000 ms), `BREAK_INCREMENT_INVALID` (a pause off the 100 ms grid), `BREAKS_LIMIT_EXCEEDED` (more than 8 pause markers, or two pauses with no text between them), `BREAK_SYNTAX_INVALID` (a malformed pause marker, such as a simple marker without backslashes or an escaped structured marker), plus the existing pronunciation and speed codes. A `speed` of `1.0` does not count as a speed control for the combination rules. See [Speed, Pause, Pronunciation](/docs/tts-voice-controls).',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }],
})
