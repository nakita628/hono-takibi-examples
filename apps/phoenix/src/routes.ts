import { createRoute, z } from '@hono/zod-openapi'

const TurnTraceContextSchema = z
  .strictObject({
    traceId: z
      .string()
      .regex(/^[0-9a-f]{32}$/)
      .openapi({ title: 'Traceid' }),
    rootSpanId: z
      .string()
      .regex(/^[0-9a-f]{16}$/)
      .openapi({ title: 'Rootspanid' }),
    startedAt: z.iso.datetime({ offset: true }).openapi({ title: 'Startedat' }),
  })
  .openapi({
    required: ['traceId', 'rootSpanId', 'startedAt'],
    title: 'TurnTraceContext',
    description: "The trace identity a turn's spans are parented to.",
  })
  .openapi('TurnTraceContext')

const AssistantMessageMetadataUsageTokensSchema = z
  .strictObject({
    prompt: z.int().openapi({ title: 'Prompt' }),
    completion: z.int().openapi({ title: 'Completion' }),
    total: z.int().openapi({ title: 'Total' }),
  })
  .openapi({
    required: ['prompt', 'completion', 'total'],
    title: 'AssistantMessageMetadataUsageTokens',
  })
  .openapi('AssistantMessageMetadataUsageTokens')

const AssistantMessageMetadataUsageCacheTokenDetailsSchema = z
  .strictObject({
    cacheRead: z.int().openapi({ title: 'Cacheread' }),
    cacheWrite: z.int().openapi({ title: 'Cachewrite' }),
  })
  .openapi({
    required: ['cacheRead', 'cacheWrite'],
    title: 'AssistantMessageMetadataUsageCacheTokenDetails',
    description:
      "Prompt-cache token counts, mounted as the usage payload's\n``prompt_details`` because cached tokens are a breakdown of the prompt.",
  })
  .openapi('AssistantMessageMetadataUsageCacheTokenDetails')

const AssistantMessageMetadataUsageSchema = z
  .strictObject({
    tokens: AssistantMessageMetadataUsageTokensSchema,
    promptDetails: z
      .union([AssistantMessageMetadataUsageCacheTokenDetailsSchema, z.null().nullable()])
      .exactOptional(),
  })
  .openapi({ required: ['tokens'], title: 'AssistantMessageMetadataUsage' })
  .openapi('AssistantMessageMetadataUsage')

const PhoenixAssistantMessageMetadataSchema = z
  .strictObject({
    type: z.literal('assistant').openapi({ title: 'Type' }),
    sessionId: z.string().openapi({ title: 'Sessionid' }),
    turnTraceContext: z.union([TurnTraceContextSchema, z.null().nullable()]).exactOptional(),
    usage: z.union([AssistantMessageMetadataUsageSchema, z.null().nullable()]).exactOptional(),
    interrupted: z.boolean().default(false).exactOptional().openapi({ title: 'Interrupted' }),
  })
  .openapi({
    required: ['type', 'sessionId'],
    title: 'PhoenixAssistantMessageMetadata',
    description: 'The ``phoenix`` metadata namespace of an assistant message.',
  })
  .openapi('PhoenixAssistantMessageMetadata')

const ProjectUIContextSchema = z
  .strictObject({
    type: z.literal('project').openapi({ title: 'Type' }),
    projectNodeId: z.string().openapi({ title: 'Projectnodeid' }),
    spanFilter: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Spanfilter' }),
  })
  .openapi({ required: ['type', 'projectNodeId'], title: 'ProjectUIContext' })
  .openapi('ProjectUIContext')

const TraceUIContextSchema = z
  .strictObject({
    type: z.literal('trace').openapi({ title: 'Type' }),
    projectNodeId: z.string().openapi({ title: 'Projectnodeid' }),
    otelTraceId: z
      .string()
      .regex(/^[0-9a-f]{32}$/)
      .openapi({ title: 'Oteltraceid' }),
  })
  .openapi({ required: ['type', 'projectNodeId', 'otelTraceId'], title: 'TraceUIContext' })
  .openapi('TraceUIContext')

const SessionUIContextSchema = z
  .strictObject({
    type: z.literal('session').openapi({ title: 'Type' }),
    projectNodeId: z.string().openapi({ title: 'Projectnodeid' }),
    sessionNodeId: z.string().openapi({ title: 'Sessionnodeid' }),
  })
  .openapi({ required: ['type', 'projectNodeId', 'sessionNodeId'], title: 'SessionUIContext' })
  .openapi('SessionUIContext')

const SpanUIContextSchema = z
  .strictObject({
    type: z.literal('span').openapi({ title: 'Type' }),
    projectNodeId: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Projectnodeid' }),
    spanNodeId: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Spannodeid' }),
    otelSpanId: z
      .union([z.string().regex(/^[0-9a-f]{16}$/), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Otelspanid' }),
  })
  .openapi({ required: ['type'], title: 'SpanUIContext' })
  .openapi('SpanUIContext')

const PromptUIContextSchema = z
  .strictObject({
    type: z.literal('prompt').openapi({ title: 'Type' }),
    promptNodeId: z.string().openapi({ title: 'Promptnodeid' }),
  })
  .openapi({ required: ['type', 'promptNodeId'], title: 'PromptUIContext' })
  .openapi('PromptUIContext')

const PromptVersionUIContextSchema = z
  .strictObject({
    type: z.literal('prompt_version').openapi({ title: 'Type' }),
    promptNodeId: z.string().openapi({ title: 'Promptnodeid' }),
    promptVersionNodeId: z.string().openapi({ title: 'Promptversionnodeid' }),
  })
  .openapi({
    required: ['type', 'promptNodeId', 'promptVersionNodeId'],
    title: 'PromptVersionUIContext',
  })
  .openapi('PromptVersionUIContext')

const DatasetUIContextSchema = z
  .strictObject({
    type: z.literal('dataset').openapi({ title: 'Type' }),
    datasetNodeId: z.string().openapi({ title: 'Datasetnodeid' }),
    datasetVersionNodeId: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Datasetversionnodeid' }),
  })
  .openapi({ required: ['type', 'datasetNodeId'], title: 'DatasetUIContext' })
  .openapi('DatasetUIContext')

const PlaygroundExperimentScaffoldUIContextSchema = z
  .strictObject({
    name: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Name' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    hasMetadata: z.boolean().default(false).exactOptional().openapi({ title: 'Hasmetadata' }),
  })
  .openapi({ title: 'PlaygroundExperimentScaffoldUIContext', required: [] })
  .openapi('PlaygroundExperimentScaffoldUIContext')

const PlaygroundBuiltinModelUIContextSchema = z
  .strictObject({
    type: z.literal('builtin').default('builtin').exactOptional().openapi({ title: 'Type' }),
    provider: z.string().openapi({ title: 'Provider' }),
    modelName: z.string().openapi({ title: 'Modelname' }),
  })
  .openapi({ required: ['provider', 'modelName'], title: 'PlaygroundBuiltinModelUIContext' })
  .openapi('PlaygroundBuiltinModelUIContext')

const PlaygroundCustomProviderModelUIContextSchema = z
  .strictObject({
    type: z.literal('custom').default('custom').exactOptional().openapi({ title: 'Type' }),
    customProviderId: z.string().openapi({ title: 'Customproviderid' }),
    customProviderName: z.string().openapi({ title: 'Customprovidername' }),
    provider: z.string().openapi({ title: 'Provider' }),
    modelName: z.string().openapi({ title: 'Modelname' }),
  })
  .openapi({
    required: ['customProviderId', 'customProviderName', 'provider', 'modelName'],
    title: 'PlaygroundCustomProviderModelUIContext',
  })
  .openapi('PlaygroundCustomProviderModelUIContext')

const PlaygroundInstanceUIContextSchema = z
  .strictObject({
    instanceId: z.int().openapi({ title: 'Instanceid' }),
    model: z
      .union([
        z
          .xor([
            PlaygroundBuiltinModelUIContextSchema,
            PlaygroundCustomProviderModelUIContextSchema,
          ])
          .openapi({
            discriminator: {
              propertyName: 'type',
              mapping: {
                builtin: '#/components/schemas/PlaygroundBuiltinModelUIContext',
                custom: '#/components/schemas/PlaygroundCustomProviderModelUIContext',
              },
            },
          }),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({ title: 'Model' }),
    experimentId: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Experimentid' }),
  })
  .openapi({ required: ['instanceId'], title: 'PlaygroundInstanceUIContext' })
  .openapi('PlaygroundInstanceUIContext')

const PlaygroundEvaluatorUIContextSchema = z
  .strictObject({
    datasetEvaluatorId: z.string().openapi({ title: 'Datasetevaluatorid' }),
    name: z.string().openapi({ title: 'Name' }),
    kind: z.enum(['LLM', 'CODE', 'BUILTIN']).openapi({ title: 'Kind' }),
    isBuiltin: z.boolean().openapi({ title: 'Isbuiltin' }),
    isApplied: z.boolean().openapi({ title: 'Isapplied' }),
  })
  .openapi({
    required: ['datasetEvaluatorId', 'name', 'kind', 'isBuiltin', 'isApplied'],
    title: 'PlaygroundEvaluatorUIContext',
  })
  .openapi('PlaygroundEvaluatorUIContext')

const PlaygroundUIContextSchema = z
  .strictObject({
    type: z.literal('playground').openapi({ title: 'Type' }),
    recordExperiments: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ title: 'Recordexperiments' }),
    repetitions: z.int().default(1).exactOptional().openapi({ title: 'Repetitions' }),
    nextExperimentScaffold: z
      .union([PlaygroundExperimentScaffoldUIContextSchema, z.null().nullable()])
      .exactOptional(),
    instances: z
      .array(PlaygroundInstanceUIContextSchema)
      .exactOptional()
      .openapi({ title: 'Instances' }),
    evaluators: z
      .array(PlaygroundEvaluatorUIContextSchema)
      .exactOptional()
      .openapi({ title: 'Evaluators' }),
  })
  .openapi({ required: ['type'], title: 'PlaygroundUIContext' })
  .openapi('PlaygroundUIContext')

const CodeEvaluatorUIContextSchema = z
  .strictObject({
    type: z.literal('code_evaluator').openapi({ title: 'Type' }),
    evaluatorNodeId: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Evaluatornodeid' }),
  })
  .openapi({ required: ['type'], title: 'CodeEvaluatorUIContext' })
  .openapi('CodeEvaluatorUIContext')

const LlmEvaluatorUIContextSchema = z
  .strictObject({
    type: z.literal('llm_evaluator').openapi({ title: 'Type' }),
    evaluatorNodeId: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Evaluatornodeid' }),
  })
  .openapi({ required: ['type'], title: 'LlmEvaluatorUIContext' })
  .openapi('LlmEvaluatorUIContext')

const UIContextsSchema = z
  .strictObject({
    project: z.union([ProjectUIContextSchema, z.null().nullable()]).exactOptional(),
    trace: z.union([TraceUIContextSchema, z.null().nullable()]).exactOptional(),
    session: z.union([SessionUIContextSchema, z.null().nullable()]).exactOptional(),
    span: z.union([SpanUIContextSchema, z.null().nullable()]).exactOptional(),
    prompt: z.union([PromptUIContextSchema, z.null().nullable()]).exactOptional(),
    promptVersion: z.union([PromptVersionUIContextSchema, z.null().nullable()]).exactOptional(),
    dataset: z.union([DatasetUIContextSchema, z.null().nullable()]).exactOptional(),
    playground: z.union([PlaygroundUIContextSchema, z.null().nullable()]).exactOptional(),
    codeEvaluator: z.union([CodeEvaluatorUIContextSchema, z.null().nullable()]).exactOptional(),
    llmEvaluator: z.union([LlmEvaluatorUIContextSchema, z.null().nullable()]).exactOptional(),
  })
  .openapi({ title: 'UIContexts', required: [] })
  .openapi('UIContexts')

const PhoenixUserMessageMetadataSchema = z
  .strictObject({
    type: z.literal('user').openapi({ title: 'Type' }),
    currentDateTime: z.string().max(128).openapi({ title: 'Currentdatetime' }),
    timeZone: z.string().max(128).openapi({ title: 'Timezone' }),
    isCompactionMessage: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Iscompactionmessage' }),
    uiContexts: z.union([UIContextsSchema, z.null().nullable()]).exactOptional(),
    editPermission: z
      .enum(['manual', 'bypass'])
      .default('manual')
      .exactOptional()
      .openapi({ title: 'Editpermission' }),
  })
  .openapi({
    required: ['type', 'currentDateTime', 'timeZone'],
    title: 'PhoenixUserMessageMetadata',
    description:
      'The ``phoenix`` metadata namespace the browser attaches to outgoing\nuser messages.',
  })
  .openapi('PhoenixUserMessageMetadata')

const PydanticAIMessageMetadataSchema = z
  .strictObject({
    timestamp: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Timestamp' }),
  })
  .openapi({
    title: 'PydanticAIMessageMetadata',
    description:
      "Local pin of pydantic-ai's message-level ``pydantic_ai`` metadata\nnamespace (its private ``_PydanticAIMessageMetadata``), merged into the\nassistant metadata by the stream's metadata chunk.",
    required: [],
  })
  .openapi('PydanticAIMessageMetadata')

type MessageMetadataType = {
  phoenix?:
    | (
        | z.infer<typeof PhoenixAssistantMessageMetadataSchema>
        | z.infer<typeof PhoenixUserMessageMetadataSchema>
      )
    | ({ [key: string]: unknown } | null)
  pydantic_ai?:
    | z.infer<typeof PydanticAIMessageMetadataSchema>
    | ({ [key: string]: unknown } | null)
}

const OtlpArrayValueSchema: z.ZodType<OtlpArrayValueType> = z
  .lazy(() =>
    z
      .strictObject({
        values: z
          .union([z.array(OtlpAnyValueSchema), z.null().nullable()])
          .exactOptional()
          .openapi({
            title: 'Values',
            description: 'Array of values. The array may be empty (contain 0 elements).',
          }),
      })
      .openapi({ title: 'OtlpArrayValue', required: [] }),
  )
  .openapi('OtlpArrayValue')

type OtlpDoubleValueType = 'Infinity' | '-Infinity' | 'NaN'

const OtlpDoubleValueSchema: z.ZodType<OtlpDoubleValueType> = z
  .enum(['Infinity', '-Infinity', 'NaN'])
  .openapi({ title: 'OtlpDoubleValue' })
  .openapi('OtlpDoubleValue')

type OtlpAnyValueType = {
  array_value?: z.infer<typeof OtlpArrayValueSchema> | ({ [key: string]: unknown } | null)
  bool_value?: boolean | ({ [key: string]: unknown } | null)
  bytes_value?: string | ({ [key: string]: unknown } | null)
  double_value?:
    | number
    | z.infer<typeof OtlpDoubleValueSchema>
    | string
    | ({ [key: string]: unknown } | null)
  int_value?: number | string | ({ [key: string]: unknown } | null)
  kvlist_value?: { [key: string]: unknown } | null
  string_value?: string | ({ [key: string]: unknown } | null)
}

const OtlpAnyValueSchema: z.ZodType<OtlpAnyValueType> = z
  .lazy(() =>
    z
      .strictObject({
        array_value: z.union([OtlpArrayValueSchema, z.null().nullable()]).exactOptional(),
        bool_value: z
          .union([z.boolean(), z.null().nullable()])
          .exactOptional()
          .openapi({ title: 'Bool Value' }),
        bytes_value: z
          .union([z.string().regex(/^[A-Za-z0-9+\/]*={0,2}$/), z.null().nullable()])
          .exactOptional()
          .openapi({ title: 'Bytes Value' }),
        double_value: z
          .union([z.number(), OtlpDoubleValueSchema, z.string(), z.null().nullable()])
          .exactOptional()
          .openapi({ title: 'Double Value' }),
        int_value: z
          .union([
            z.int().min(-9223372036854776000).lt(9223372036854776000),
            z.string().regex(/^-?[0-9]+$/),
            z.null().nullable(),
          ])
          .exactOptional()
          .openapi({ title: 'Int Value' }),
        kvlist_value: z.null().nullable().exactOptional().openapi({ title: 'Kvlist Value' }),
        string_value: z
          .union([z.string(), z.null().nullable()])
          .exactOptional()
          .openapi({ title: 'String Value' }),
      })
      .openapi({ title: 'OtlpAnyValue', required: [] }),
  )
  .openapi('OtlpAnyValue')

type OtlpArrayValueType = {
  values?: z.infer<typeof OtlpAnyValueSchema>[] | ({ [key: string]: unknown } | null)
}

const DatasetLabelSchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    name: z.string().openapi({ title: 'Name' }),
    description: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Description' }),
    color: z.string().openapi({ title: 'Color' }),
  })
  .openapi({ required: ['id', 'name', 'description', 'color'], title: 'DatasetLabel' })
  .openapi('DatasetLabel')

const AddDatasetLabelToDatasetResponseBodySchema = z
  .object({ data: DatasetLabelSchema })
  .openapi({ required: ['data'], title: 'AddDatasetLabelToDatasetResponseBody' })
  .openapi('AddDatasetLabelToDatasetResponseBody')

const CustomProviderModelSelectionSchema = z
  .object({
    providerType: z.literal('custom').openapi({ title: 'Providertype' }),
    providerId: z.string().openapi({ title: 'Providerid' }),
    modelName: z.string().openapi({ title: 'Modelname' }),
  })
  .openapi({
    required: ['providerType', 'providerId', 'modelName'],
    title: 'CustomProviderModelSelection',
    description: 'Chat against a stored custom provider record.',
  })
  .openapi('CustomProviderModelSelection')

const ModelProviderSchema = z
  .enum([
    'OPENAI',
    'AZURE_OPENAI',
    'ANTHROPIC',
    'GOOGLE',
    'DEEPSEEK',
    'XAI',
    'OLLAMA',
    'AWS',
    'CEREBRAS',
    'FIREWORKS',
    'GROQ',
    'MOONSHOT',
    'MINIMAX',
    'PERPLEXITY',
    'TOGETHER',
    'ZAI',
    'META',
  ])
  .openapi({ title: 'ModelProvider' })
  .openapi('ModelProvider')

const BuiltInProviderModelSelectionSchema = z
  .object({
    providerType: z.literal('builtin').openapi({ title: 'Providertype' }),
    provider: ModelProviderSchema,
    modelName: z.string().openapi({ title: 'Modelname' }),
  })
  .openapi({
    required: ['providerType', 'provider', 'modelName'],
    title: 'BuiltInProviderModelSelection',
    description:
      'Chat against a Phoenix built-in provider.\n\nCredentials and connection details (base URL, Azure endpoint, AWS\nregion) are resolved from the secret store first and the process\nenvironment second.',
  })
  .openapi('BuiltInProviderModelSelection')

const AgentModelSelectionSchema = z
  .discriminatedUnion('providerType', [
    CustomProviderModelSelectionSchema,
    BuiltInProviderModelSelectionSchema,
  ])
  .openapi({
    discriminator: {
      propertyName: 'providerType',
      mapping: {
        builtin: '#/components/schemas/BuiltInProviderModelSelection',
        custom: '#/components/schemas/CustomProviderModelSelection',
      },
    },
  })
  .openapi('AgentModelSelection')

const AgentSessionConflictErrorSchema = z
  .object({
    code: z
      .enum([
        'agent_session_busy',
        'agent_session_model_stale',
        'agent_session_messages_stale',
        'agent_session_tool_outputs_conflict',
        'agent_session_tool_approvals_conflict',
        'agent_session_already_compact',
        'agent_session_compaction_conflict',
      ])
      .openapi({ title: 'Code', description: 'Machine-readable reason the request conflicted.' }),
    message: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Message',
        description: 'Optional human-readable elaboration on the conflict.',
      }),
  })
  .openapi({
    required: ['code'],
    title: 'AgentSessionConflictError',
    description:
      "Body of every HTTP 409 returned by the agent session routes.\n\n- ``agent_session_busy``: another turn holds the session's turn lock.\n- ``agent_session_model_stale``: the request asserted a model the session\n  is no longer set to; refetch the session before retrying.\n- ``agent_session_messages_stale``: the send's ``lastMessageId`` no longer\n  matches the persisted transcript — another client appended; refetch the\n  transcript and retry.\n- ``agent_session_tool_outputs_conflict``: the submitted ``toolOutputs`` do\n  not match the transcript's trailing assistant message (no trailing\n  assistant message to continue, an unknown ``toolCallId``, or a tool-name\n  mismatch). Unlike ``agent_session_messages_stale`` this is not a\n  concurrent-writer race but an inconsistent request; fix the client\n  rather than retrying.\n- ``agent_session_tool_approvals_conflict``: the submitted ``toolApprovals``\n  do not match the transcript's trailing assistant message (no trailing\n  assistant message to answer, an unknown ``toolCallId``, a call that is\n  not awaiting approval, or a reversal of an already-persisted answer).\n  Like the tool-output conflict this is an inconsistent request rather than\n  a concurrent-writer race; fix the client rather than retrying.\n- ``agent_session_already_compact``: there are no complete turns to\n  compact — either nothing new has finished since the transcript's latest\n  checkpoint, or a concurrent request's checkpoint already covers them.\n  Not retryable; the conversation is as compact as it can get.\n- ``agent_session_compaction_conflict``: the conversation changed while it\n  was being compacted; retry.",
  })
  .openapi('AgentSessionConflictError')

const AgentSessionDataSchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    title: z.string().openapi({ title: 'Title' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
    is_ephemeral: z.boolean().openapi({ title: 'Is Ephemeral' }),
    model: AgentModelSelectionSchema,
    is_active: z
      .boolean()
      .openapi({
        title: 'Is Active',
        description:
          'Whether a response is currently streaming on this session, i.e. its lock has a live (non-stale) heartbeat.',
      }),
    last_message_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Last Message Id',
        description:
          'The message ID of the most recently persisted transcript message, or null for an empty transcript.',
      }),
  })
  .openapi({
    required: ['id', 'title', 'created_at', 'updated_at', 'is_ephemeral', 'model', 'is_active'],
    title: 'AgentSessionData',
  })
  .openapi('AgentSessionData')

const AgentSessionSummarySchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    title: z.string().openapi({ title: 'Title' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
    is_ephemeral: z.boolean().openapi({ title: 'Is Ephemeral' }),
  })
  .openapi({
    required: ['id', 'title', 'created_at', 'updated_at', 'is_ephemeral'],
    title: 'AgentSessionSummary',
  })
  .openapi('AgentSessionSummary')

const AnnotationResultSchema = z
  .object({
    label: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Label', description: 'The label assigned by the annotation' }),
    score: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Score', description: 'The score assigned by the annotation' }),
    explanation: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Explanation', description: 'Explanation of the annotation result' }),
  })
  .openapi({ title: 'AnnotationResult', required: [] })
  .openapi('AnnotationResult')

const SessionAnnotationDataSchema = z
  .object({
    name: z.string().openapi({ title: 'Name', description: 'The name of the annotation' }),
    annotator_kind: z
      .enum(['LLM', 'CODE', 'HUMAN', 'DECISION', 'AGENT'])
      .openapi({
        title: 'Annotator Kind',
        description: 'The kind of annotator used for the annotation',
      }),
    result: z
      .union([AnnotationResultSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ description: 'The result of the annotation' }),
    metadata: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Metadata', description: 'Metadata for the annotation' }),
    identifier: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        title: 'Identifier',
        description:
          'The identifier of the annotation. If provided, the annotation will be updated if it already exists.',
      }),
    session_id: z.string().openapi({ title: 'Session Id', description: 'Session ID' }),
  })
  .openapi({ required: ['name', 'annotator_kind', 'session_id'], title: 'SessionAnnotationData' })
  .openapi('SessionAnnotationData')

const AnnotateSessionsRequestBodySchema = z
  .object({ data: z.array(SessionAnnotationDataSchema).openapi({ title: 'Data' }) })
  .openapi({ required: ['data'], title: 'AnnotateSessionsRequestBody' })
  .openapi('AnnotateSessionsRequestBody')

const InsertedSessionAnnotationSchema = z
  .object({
    id: z
      .string()
      .openapi({ title: 'Id', description: 'The ID of the inserted session annotation' }),
  })
  .openapi({ required: ['id'], title: 'InsertedSessionAnnotation' })
  .openapi('InsertedSessionAnnotation')

const AnnotateSessionsResponseBodySchema = z
  .object({ data: z.array(InsertedSessionAnnotationSchema).openapi({ title: 'Data' }) })
  .openapi({ required: ['data'], title: 'AnnotateSessionsResponseBody' })
  .openapi('AnnotateSessionsResponseBody')

const SpanDocumentAnnotationDataSchema = z
  .object({
    name: z.string().openapi({ title: 'Name', description: 'The name of the annotation' }),
    annotator_kind: z
      .enum(['LLM', 'CODE', 'HUMAN', 'DECISION', 'AGENT'])
      .openapi({
        title: 'Annotator Kind',
        description: 'The kind of annotator used for the annotation',
      }),
    result: z
      .union([AnnotationResultSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ description: 'The result of the annotation' }),
    metadata: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Metadata', description: 'Metadata for the annotation' }),
    identifier: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        title: 'Identifier',
        description:
          'The identifier of the annotation. If provided, the annotation will be updated if it already exists.',
      }),
    span_id: z
      .string()
      .openapi({
        title: 'Span Id',
        description: 'OpenTelemetry Span ID (hex format w/o 0x prefix)',
      }),
    document_position: z
      .int()
      .openapi({
        title: 'Document Position',
        description:
          'A 0 based index of the document. E.x. the first document during retrieval is 0',
      }),
  })
  .openapi({
    required: ['name', 'annotator_kind', 'span_id', 'document_position'],
    title: 'SpanDocumentAnnotationData',
  })
  .openapi('SpanDocumentAnnotationData')

const AnnotateSpanDocumentsRequestBodySchema = z
  .object({ data: z.array(SpanDocumentAnnotationDataSchema).openapi({ title: 'Data' }) })
  .openapi({ required: ['data'], title: 'AnnotateSpanDocumentsRequestBody' })
  .openapi('AnnotateSpanDocumentsRequestBody')

const InsertedSpanDocumentAnnotationSchema = z
  .object({
    id: z
      .string()
      .openapi({ title: 'Id', description: 'The ID of the inserted span document annotation' }),
  })
  .openapi({ required: ['id'], title: 'InsertedSpanDocumentAnnotation' })
  .openapi('InsertedSpanDocumentAnnotation')

const AnnotateSpanDocumentsResponseBodySchema = z
  .object({ data: z.array(InsertedSpanDocumentAnnotationSchema).openapi({ title: 'Data' }) })
  .openapi({ required: ['data'], title: 'AnnotateSpanDocumentsResponseBody' })
  .openapi('AnnotateSpanDocumentsResponseBody')

const SpanAnnotationDataSchema = z
  .object({
    name: z.string().openapi({ title: 'Name', description: 'The name of the annotation' }),
    annotator_kind: z
      .enum(['LLM', 'CODE', 'HUMAN', 'DECISION', 'AGENT'])
      .openapi({
        title: 'Annotator Kind',
        description: 'The kind of annotator used for the annotation',
      }),
    result: z
      .union([AnnotationResultSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ description: 'The result of the annotation' }),
    metadata: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Metadata', description: 'Metadata for the annotation' }),
    identifier: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        title: 'Identifier',
        description:
          'The identifier of the annotation. If provided, the annotation will be updated if it already exists.',
      }),
    span_id: z
      .string()
      .openapi({
        title: 'Span Id',
        description: 'OpenTelemetry Span ID (hex format w/o 0x prefix)',
      }),
  })
  .openapi({ required: ['name', 'annotator_kind', 'span_id'], title: 'SpanAnnotationData' })
  .openapi('SpanAnnotationData')

const AnnotateSpansRequestBodySchema = z
  .object({ data: z.array(SpanAnnotationDataSchema).openapi({ title: 'Data' }) })
  .openapi({ required: ['data'], title: 'AnnotateSpansRequestBody' })
  .openapi('AnnotateSpansRequestBody')

const InsertedSpanAnnotationSchema = z
  .object({
    id: z.string().openapi({ title: 'Id', description: 'The ID of the inserted span annotation' }),
  })
  .openapi({ required: ['id'], title: 'InsertedSpanAnnotation' })
  .openapi('InsertedSpanAnnotation')

const AnnotateSpansResponseBodySchema = z
  .object({ data: z.array(InsertedSpanAnnotationSchema).openapi({ title: 'Data' }) })
  .openapi({ required: ['data'], title: 'AnnotateSpansResponseBody' })
  .openapi('AnnotateSpansResponseBody')

const TraceAnnotationDataSchema = z
  .object({
    name: z.string().openapi({ title: 'Name', description: 'The name of the annotation' }),
    annotator_kind: z
      .enum(['LLM', 'CODE', 'HUMAN', 'DECISION', 'AGENT'])
      .openapi({
        title: 'Annotator Kind',
        description: 'The kind of annotator used for the annotation',
      }),
    result: z
      .union([AnnotationResultSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ description: 'The result of the annotation' }),
    metadata: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Metadata', description: 'Metadata for the annotation' }),
    identifier: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        title: 'Identifier',
        description:
          'The identifier of the annotation. If provided, the annotation will be updated if it already exists.',
      }),
    trace_id: z
      .string()
      .openapi({
        title: 'Trace Id',
        description: 'OpenTelemetry Trace ID (hex format w/o 0x prefix)',
      }),
  })
  .openapi({ required: ['name', 'annotator_kind', 'trace_id'], title: 'TraceAnnotationData' })
  .openapi('TraceAnnotationData')

const AnnotateTracesRequestBodySchema = z
  .object({
    data: z
      .array(TraceAnnotationDataSchema)
      .openapi({ title: 'Data', description: 'The trace annotations to be upserted' }),
  })
  .openapi({ required: ['data'], title: 'AnnotateTracesRequestBody' })
  .openapi('AnnotateTracesRequestBody')

const InsertedTraceAnnotationSchema = z
  .object({
    id: z.string().openapi({ title: 'Id', description: 'The ID of the inserted trace annotation' }),
  })
  .openapi({ required: ['id'], title: 'InsertedTraceAnnotation' })
  .openapi('InsertedTraceAnnotation')

const AnnotateTracesResponseBodySchema = z
  .object({ data: z.array(InsertedTraceAnnotationSchema).openapi({ title: 'Data' }) })
  .openapi({ required: ['data'], title: 'AnnotateTracesResponseBody' })
  .openapi('AnnotateTracesResponseBody')

const AnonymousUserSchema = z
  .object({ auth_method: z.literal('ANONYMOUS').openapi({ title: 'Auth Method' }) })
  .openapi({ required: ['auth_method'], title: 'AnonymousUser' })
  .openapi('AnonymousUser')

const ApiKeySchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    name: z.string().openapi({ title: 'Name' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    expires_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Expires At' }),
  })
  .openapi({ required: ['id', 'name', 'created_at'], title: 'ApiKey' })
  .openapi('ApiKey')

const ApiKeyDataSchema = z
  .object({
    name: z
      .string()
      .openapi({ title: 'Name', description: 'A human-readable name for the API key.' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Description',
        description: 'An optional description of what the API key is for.',
      }),
    expires_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Expires At',
        description: 'When the API key expires. The key never expires when omitted.',
      }),
  })
  .openapi({ required: ['name'], title: 'ApiKeyData' })
  .openapi('ApiKeyData')

const ApiKeyUserSchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    username: z.string().openapi({ title: 'Username' }),
    email: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Email' }),
  })
  .openapi({ required: ['id', 'username', 'email'], title: 'ApiKeyUser' })
  .openapi('ApiKeyUser')

const AppContextSchema = z
  .strictObject({
    type: z.literal('app').openapi({ title: 'Type' }),
    currentDateTime: z.string().openapi({ title: 'Currentdatetime' }),
    timeZone: z.string().openapi({ title: 'Timezone' }),
  })
  .openapi({
    required: ['type', 'currentDateTime', 'timeZone'],
    title: 'AppContext',
    description: 'Per-turn browser clock context for resolving relative time requests.',
  })
  .openapi('AppContext')

const OptimizationDirectionSchema = z
  .enum(['MINIMIZE', 'MAXIMIZE', 'NONE'])
  .openapi({ title: 'OptimizationDirection' })
  .openapi('OptimizationDirection')

const CategoricalAnnotationValueSchema = z
  .object({
    label: z.string().openapi({ title: 'Label' }),
    score: z.union([z.number(), z.null().nullable()]).exactOptional().openapi({ title: 'Score' }),
  })
  .openapi({ required: ['label'], title: 'CategoricalAnnotationValue' })
  .openapi('CategoricalAnnotationValue')

const CategoricalAnnotationConfigSchema = z
  .object({
    name: z.string().openapi({ title: 'Name' }),
    type: z.literal('CATEGORICAL').openapi({ title: 'Type' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    optimization_direction: OptimizationDirectionSchema,
    values: z.array(CategoricalAnnotationValueSchema).openapi({ title: 'Values' }),
    id: z.string().openapi({ title: 'Id' }),
  })
  .openapi({
    required: ['name', 'type', 'optimization_direction', 'values', 'id'],
    title: 'CategoricalAnnotationConfig',
  })
  .openapi('CategoricalAnnotationConfig')

const ContinuousAnnotationConfigSchema = z
  .object({
    name: z.string().openapi({ title: 'Name' }),
    type: z.literal('CONTINUOUS').openapi({ title: 'Type' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    optimization_direction: OptimizationDirectionSchema,
    lower_bound: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Lower Bound' }),
    upper_bound: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Upper Bound' }),
    id: z.string().openapi({ title: 'Id' }),
  })
  .openapi({
    required: ['name', 'type', 'optimization_direction', 'id'],
    title: 'ContinuousAnnotationConfig',
  })
  .openapi('ContinuousAnnotationConfig')

const FreeformAnnotationConfigSchema = z
  .object({
    name: z.string().openapi({ title: 'Name' }),
    type: z.literal('FREEFORM').openapi({ title: 'Type' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    optimization_direction: z
      .union([OptimizationDirectionSchema, z.null().nullable()])
      .exactOptional(),
    threshold: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Threshold' }),
    lower_bound: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Lower Bound' }),
    upper_bound: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Upper Bound' }),
    id: z.string().openapi({ title: 'Id' }),
  })
  .openapi({ required: ['name', 'type', 'id'], title: 'FreeformAnnotationConfig' })
  .openapi('FreeformAnnotationConfig')

const AssignAnnotationConfigToProjectResponseBodySchema = z
  .object({
    data: z
      .discriminatedUnion('type', [
        CategoricalAnnotationConfigSchema,
        ContinuousAnnotationConfigSchema,
        FreeformAnnotationConfigSchema,
      ])
      .openapi({
        title: 'Data',
        discriminator: {
          propertyName: 'type',
          mapping: {
            CATEGORICAL: '#/components/schemas/CategoricalAnnotationConfig',
            CONTINUOUS: '#/components/schemas/ContinuousAnnotationConfig',
            FREEFORM: '#/components/schemas/FreeformAnnotationConfig',
          },
        },
      }),
  })
  .openapi({ required: ['data'], title: 'AssignAnnotationConfigToProjectResponseBody' })
  .openapi('AssignAnnotationConfigToProjectResponseBody')

const BuiltInModelProviderSchema = z
  .object({
    provider: ModelProviderSchema.openapi({
      description:
        "The provider family identifier, accepted wherever a built-in model provider is specified (e.g. 'OPENAI').",
    }),
    name: z
      .string()
      .openapi({
        title: 'Name',
        description: "The human-readable name of the provider family (e.g. 'OpenAI').",
      }),
  })
  .openapi({ required: ['provider', 'name'], title: 'BuiltInModelProvider' })
  .openapi('BuiltInModelProvider')

const CategoricalAnnotationConfigDataSchema = z
  .object({
    name: z.string().openapi({ title: 'Name' }),
    type: z.literal('CATEGORICAL').openapi({ title: 'Type' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    optimization_direction: OptimizationDirectionSchema,
    values: z.array(CategoricalAnnotationValueSchema).openapi({ title: 'Values' }),
  })
  .openapi({
    required: ['name', 'type', 'optimization_direction', 'values'],
    title: 'CategoricalAnnotationConfigData',
  })
  .openapi('CategoricalAnnotationConfigData')

const ChatCompletionMessageSchema = z
  .object({
    role: z.literal('assistant').default('assistant').exactOptional().openapi({ title: 'Role' }),
    content: z.string().openapi({ title: 'Content' }),
  })
  .openapi({ required: ['content'], title: 'ChatCompletionMessage' })
  .openapi('ChatCompletionMessage')

const ChatCompletionChoiceSchema = z
  .object({
    index: z.int().default(0).exactOptional().openapi({ title: 'Index' }),
    message: ChatCompletionMessageSchema,
    finish_reason: z.string().openapi({ title: 'Finish Reason' }),
  })
  .openapi({ required: ['message', 'finish_reason'], title: 'ChatCompletionChoice' })
  .openapi('ChatCompletionChoice')

const ChatCompletionUsagePromptTokensDetailsSchema = z
  .object({ cached_tokens: z.int().openapi({ title: 'Cached Tokens' }) })
  .openapi({ required: ['cached_tokens'], title: 'ChatCompletionUsagePromptTokensDetails' })
  .openapi('ChatCompletionUsagePromptTokensDetails')

const ChatCompletionUsageSchema = z
  .object({
    prompt_tokens: z.int().openapi({ title: 'Prompt Tokens' }),
    completion_tokens: z.int().openapi({ title: 'Completion Tokens' }),
    total_tokens: z.int().openapi({ title: 'Total Tokens' }),
    prompt_tokens_details: z
      .union([ChatCompletionUsagePromptTokensDetailsSchema, z.null().nullable()])
      .exactOptional(),
  })
  .openapi({
    required: ['prompt_tokens', 'completion_tokens', 'total_tokens'],
    title: 'ChatCompletionUsage',
  })
  .openapi('ChatCompletionUsage')

const ChatCompletionSchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    object: z
      .literal('chat.completion')
      .default('chat.completion')
      .exactOptional()
      .openapi({ title: 'Object' }),
    created: z.int().openapi({ title: 'Created' }),
    model: z.string().openapi({ title: 'Model' }),
    choices: z.array(ChatCompletionChoiceSchema).openapi({ title: 'Choices' }),
    usage: ChatCompletionUsageSchema,
  })
  .openapi({ required: ['id', 'created', 'model', 'choices', 'usage'], title: 'ChatCompletion' })
  .openapi('ChatCompletion')

const ChatCompletionErrorDetailSchema = z
  .object({
    message: z.string().openapi({ title: 'Message' }),
    type: z.string().openapi({ title: 'Type' }),
    param: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Param' }),
    code: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Code' }),
  })
  .openapi({ required: ['message', 'type'], title: 'ChatCompletionErrorDetail' })
  .openapi('ChatCompletionErrorDetail')

const ChatCompletionErrorResponseSchema = z
  .object({ error: ChatCompletionErrorDetailSchema })
  .openapi({ required: ['error'], title: 'ChatCompletionErrorResponse' })
  .openapi('ChatCompletionErrorResponse')

const ChatCompletionTextPartSchema = z
  .object({
    type: z.literal('text').openapi({ title: 'Type' }),
    text: z.string().openapi({ title: 'Text' }),
  })
  .openapi({ required: ['type', 'text'], title: 'ChatCompletionTextPart' })
  .openapi('ChatCompletionTextPart')

const ChatCompletionRequestMessageSchema = z
  .object({
    role: z.enum(['system', 'developer', 'user', 'assistant']).openapi({ title: 'Role' }),
    content: z
      .union([z.string(), z.array(ChatCompletionTextPartSchema)])
      .openapi({ title: 'Content' }),
  })
  .openapi({ required: ['role', 'content'], title: 'ChatCompletionRequestMessage' })
  .openapi('ChatCompletionRequestMessage')

const ChatCompletionStreamOptionsSchema = z
  .object({
    include_usage: z.boolean().default(false).exactOptional().openapi({ title: 'Include Usage' }),
  })
  .openapi({ title: 'ChatCompletionStreamOptions', required: [] })
  .openapi('ChatCompletionStreamOptions')

const GraphQLContextSchema = z
  .strictObject({
    type: z.literal('graphql').openapi({ title: 'Type' }),
    mutationsEnabled: z.boolean().openapi({ title: 'Mutationsenabled' }),
  })
  .openapi({
    required: ['type', 'mutationsEnabled'],
    title: 'GraphQLContext',
    description: 'Deprecated GraphQL mutations opt-in.',
    deprecated: true,
  })
  .openapi('GraphQLContext')

const WebAccessContextSchema = z
  .strictObject({
    type: z.literal('web_access').openapi({ title: 'Type' }),
    enabled: z.boolean().openapi({ title: 'Enabled' }),
  })
  .openapi({
    required: ['type', 'enabled'],
    title: 'WebAccessContext',
    description: "User's per-turn request to expose web search / fetch tools.",
  })
  .openapi('WebAccessContext')

const SubagentsContextSchema = z
  .strictObject({
    type: z.literal('subagents').openapi({ title: 'Type' }),
    enabled: z.boolean().openapi({ title: 'Enabled' }),
  })
  .openapi({
    required: ['type', 'enabled'],
    title: 'SubagentsContext',
    description: "User's per-turn request to expose the subagent-spawning tool.",
  })
  .openapi('SubagentsContext')

const ChatContextSchema = z
  .discriminatedUnion('type', [
    AppContextSchema,
    ProjectUIContextSchema,
    TraceUIContextSchema,
    SessionUIContextSchema,
    PromptUIContextSchema,
    PromptVersionUIContextSchema,
    SpanUIContextSchema,
    PlaygroundUIContextSchema,
    CodeEvaluatorUIContextSchema,
    LlmEvaluatorUIContextSchema,
    DatasetUIContextSchema,
    GraphQLContextSchema,
    WebAccessContextSchema,
    SubagentsContextSchema,
  ])
  .openapi({
    title: 'ChatContext',
    description: 'Discriminated union of every UI-state context the agent understands.',
    discriminator: {
      propertyName: 'type',
      mapping: {
        app: '#/components/schemas/AppContext',
        code_evaluator: '#/components/schemas/CodeEvaluatorUIContext',
        dataset: '#/components/schemas/DatasetUIContext',
        graphql: '#/components/schemas/GraphQLContext',
        llm_evaluator: '#/components/schemas/LlmEvaluatorUIContext',
        playground: '#/components/schemas/PlaygroundUIContext',
        project: '#/components/schemas/ProjectUIContext',
        prompt: '#/components/schemas/PromptUIContext',
        prompt_version: '#/components/schemas/PromptVersionUIContext',
        session: '#/components/schemas/SessionUIContext',
        span: '#/components/schemas/SpanUIContext',
        subagents: '#/components/schemas/SubagentsContext',
        trace: '#/components/schemas/TraceUIContext',
        web_access: '#/components/schemas/WebAccessContext',
      },
    },
  })
  .openapi('ChatContext')

const MessageMetadataSchema: z.ZodType<MessageMetadataType> = z
  .lazy(() =>
    z
      .strictObject({
        phoenix: z
          .union([
            z
              .discriminatedUnion('type', [
                PhoenixAssistantMessageMetadataSchema,
                PhoenixUserMessageMetadataSchema,
              ])
              .openapi({
                discriminator: {
                  propertyName: 'type',
                  mapping: {
                    assistant: '#/components/schemas/PhoenixAssistantMessageMetadata',
                    user: '#/components/schemas/PhoenixUserMessageMetadata',
                  },
                },
              }),
            z.null().nullable(),
          ])
          .exactOptional()
          .openapi({ title: 'Phoenix' }),
        pydantic_ai: z
          .union([PydanticAIMessageMetadataSchema, z.null().nullable()])
          .exactOptional(),
      })
      .openapi({
        title: 'MessageMetadata',
        description: '``UIMessage.metadata`` as a registry of namespaces.',
        required: [],
      }),
  )
  .openapi('MessageMetadata')

const TextUIPartSchema = z
  .strictObject({
    type: z.literal('text').default('text').exactOptional().openapi({ title: 'Type' }),
    text: z.string().openapi({ title: 'Text' }),
    state: z
      .union([z.enum(['streaming', 'done']), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'State' }),
    providerMetadata: z
      .union([z.record(z.string(), z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Providermetadata' }),
  })
  .openapi({ required: ['text'], title: 'TextUIPart', description: 'A text part of a message.' })
  .openapi('TextUIPart')

const ReasoningUIPartSchema = z
  .strictObject({
    type: z.literal('reasoning').default('reasoning').exactOptional().openapi({ title: 'Type' }),
    id: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Id' }),
    text: z.string().openapi({ title: 'Text' }),
    state: z
      .union([z.enum(['streaming', 'done']), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'State' }),
    providerMetadata: z
      .union([z.record(z.string(), z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Providermetadata' }),
  })
  .openapi({
    required: ['text'],
    title: 'ReasoningUIPart',
    description: 'A reasoning part of a message.',
  })
  .openapi('ReasoningUIPart')

const ToolApprovalRequestedSchema = z
  .strictObject({ id: z.string().openapi({ title: 'Id' }) })
  .openapi({
    required: ['id'],
    title: 'ToolApprovalRequested',
    description: 'Tool approval in requested state (awaiting user response).',
  })
  .openapi('ToolApprovalRequested')

const ToolApprovalRespondedSchema = z
  .strictObject({
    id: z.string().openapi({ title: 'Id' }),
    approved: z.boolean().openapi({ title: 'Approved' }),
    reason: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Reason' }),
  })
  .openapi({
    required: ['id', 'approved'],
    title: 'ToolApprovalResponded',
    description: 'Tool approval in responded state (user has approved or denied).',
  })
  .openapi('ToolApprovalResponded')

const PhoenixDbTypesDataStreamProtocolRequestTypesToolInputStreamingPartSchema = z
  .strictObject({
    type: z
      .string()
      .regex(/^tool-/)
      .openapi({ title: 'Type' }),
    toolCallId: z.string().openapi({ title: 'Toolcallid' }),
    title: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Title' }),
    state: z
      .literal('input-streaming')
      .default('input-streaming')
      .exactOptional()
      .openapi({ title: 'State' }),
    input: z.union([z.any(), z.null().nullable()]).exactOptional().openapi({ title: 'Input' }),
    rawInput: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Rawinput' }),
    providerExecuted: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Providerexecuted' }),
    callProviderMetadata: z
      .union([z.record(z.string(), z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Callprovidermetadata' }),
    approval: z
      .union([ToolApprovalRequestedSchema, ToolApprovalRespondedSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Approval' }),
  })
  .openapi({
    required: ['type', 'toolCallId'],
    title: 'ToolInputStreamingPart',
    description: 'Tool part in input-streaming state.',
  })
  .openapi('PhoenixDbTypesDataStreamProtocolRequestTypesToolInputStreamingPart')

const ToolInputAvailablePartSchema = z
  .strictObject({
    type: z
      .string()
      .regex(/^tool-/)
      .openapi({ title: 'Type' }),
    toolCallId: z.string().openapi({ title: 'Toolcallid' }),
    title: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Title' }),
    state: z
      .literal('input-available')
      .default('input-available')
      .exactOptional()
      .openapi({ title: 'State' }),
    input: z.union([z.any(), z.null().nullable()]).exactOptional().openapi({ title: 'Input' }),
    providerExecuted: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Providerexecuted' }),
    callProviderMetadata: z
      .union([z.record(z.string(), z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Callprovidermetadata' }),
    approval: z
      .union([ToolApprovalRequestedSchema, ToolApprovalRespondedSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Approval' }),
  })
  .openapi({
    required: ['type', 'toolCallId'],
    title: 'ToolInputAvailablePart',
    description: 'Tool part in input-available state.',
  })
  .openapi('ToolInputAvailablePart')

const PhoenixDbTypesDataStreamProtocolRequestTypesToolOutputAvailablePartSchema = z
  .strictObject({
    type: z
      .string()
      .regex(/^tool-/)
      .openapi({ title: 'Type' }),
    toolCallId: z.string().openapi({ title: 'Toolcallid' }),
    title: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Title' }),
    state: z
      .literal('output-available')
      .default('output-available')
      .exactOptional()
      .openapi({ title: 'State' }),
    input: z.union([z.any(), z.null().nullable()]).exactOptional().openapi({ title: 'Input' }),
    output: z.union([z.any(), z.null().nullable()]).exactOptional().openapi({ title: 'Output' }),
    providerExecuted: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Providerexecuted' }),
    callProviderMetadata: z
      .union([z.record(z.string(), z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Callprovidermetadata' }),
    resultProviderMetadata: z
      .union([z.record(z.string(), z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Resultprovidermetadata' }),
    preliminary: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Preliminary' }),
    approval: z
      .union([ToolApprovalRequestedSchema, ToolApprovalRespondedSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Approval' }),
  })
  .openapi({
    required: ['type', 'toolCallId'],
    title: 'ToolOutputAvailablePart',
    description: 'Tool part in output-available state.',
  })
  .openapi('PhoenixDbTypesDataStreamProtocolRequestTypesToolOutputAvailablePart')

const PhoenixDbTypesDataStreamProtocolRequestTypesToolOutputErrorPartSchema = z
  .strictObject({
    type: z
      .string()
      .regex(/^tool-/)
      .openapi({ title: 'Type' }),
    toolCallId: z.string().openapi({ title: 'Toolcallid' }),
    title: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Title' }),
    state: z
      .literal('output-error')
      .default('output-error')
      .exactOptional()
      .openapi({ title: 'State' }),
    input: z.union([z.any(), z.null().nullable()]).exactOptional().openapi({ title: 'Input' }),
    rawInput: z
      .union([z.any(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Rawinput' }),
    errorText: z.string().openapi({ title: 'Errortext' }),
    providerExecuted: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Providerexecuted' }),
    callProviderMetadata: z
      .union([z.record(z.string(), z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Callprovidermetadata' }),
    resultProviderMetadata: z
      .union([z.record(z.string(), z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Resultprovidermetadata' }),
    approval: z
      .union([ToolApprovalRequestedSchema, ToolApprovalRespondedSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Approval' }),
  })
  .openapi({
    required: ['type', 'toolCallId', 'errorText'],
    title: 'ToolOutputErrorPart',
    description: 'Tool part in output-error state.',
  })
  .openapi('PhoenixDbTypesDataStreamProtocolRequestTypesToolOutputErrorPart')

const ToolApprovalRequestedPartSchema = z
  .strictObject({
    type: z
      .string()
      .regex(/^tool-/)
      .openapi({ title: 'Type' }),
    toolCallId: z.string().openapi({ title: 'Toolcallid' }),
    title: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Title' }),
    state: z
      .literal('approval-requested')
      .default('approval-requested')
      .exactOptional()
      .openapi({ title: 'State' }),
    input: z.union([z.any(), z.null().nullable()]).exactOptional().openapi({ title: 'Input' }),
    providerExecuted: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Providerexecuted' }),
    callProviderMetadata: z
      .union([z.record(z.string(), z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Callprovidermetadata' }),
    approval: z
      .union([ToolApprovalRequestedSchema, ToolApprovalRespondedSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Approval' }),
  })
  .openapi({
    required: ['type', 'toolCallId'],
    title: 'ToolApprovalRequestedPart',
    description: 'Tool part in approval-requested state (awaiting user decision).',
  })
  .openapi('ToolApprovalRequestedPart')

const ToolApprovalRespondedPartSchema = z
  .strictObject({
    type: z
      .string()
      .regex(/^tool-/)
      .openapi({ title: 'Type' }),
    toolCallId: z.string().openapi({ title: 'Toolcallid' }),
    title: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Title' }),
    state: z
      .literal('approval-responded')
      .default('approval-responded')
      .exactOptional()
      .openapi({ title: 'State' }),
    input: z.union([z.any(), z.null().nullable()]).exactOptional().openapi({ title: 'Input' }),
    providerExecuted: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Providerexecuted' }),
    callProviderMetadata: z
      .union([z.record(z.string(), z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Callprovidermetadata' }),
    approval: z
      .union([ToolApprovalRequestedSchema, ToolApprovalRespondedSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Approval' }),
  })
  .openapi({
    required: ['type', 'toolCallId'],
    title: 'ToolApprovalRespondedPart',
    description: 'Tool part in approval-responded state (user approved/denied, execution pending).',
  })
  .openapi('ToolApprovalRespondedPart')

const ToolOutputDeniedPartSchema = z
  .strictObject({
    type: z
      .string()
      .regex(/^tool-/)
      .openapi({ title: 'Type' }),
    toolCallId: z.string().openapi({ title: 'Toolcallid' }),
    title: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Title' }),
    state: z
      .literal('output-denied')
      .default('output-denied')
      .exactOptional()
      .openapi({ title: 'State' }),
    input: z.union([z.any(), z.null().nullable()]).exactOptional().openapi({ title: 'Input' }),
    providerExecuted: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Providerexecuted' }),
    callProviderMetadata: z
      .union([z.record(z.string(), z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Callprovidermetadata' }),
    approval: z
      .union([ToolApprovalRequestedSchema, ToolApprovalRespondedSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Approval' }),
  })
  .openapi({
    required: ['type', 'toolCallId'],
    title: 'ToolOutputDeniedPart',
    description: 'Tool part in output-denied state (tool was denied, terminal state).',
  })
  .openapi('ToolOutputDeniedPart')

const PhoenixDbTypesDataStreamProtocolRequestTypesDynamicToolInputStreamingPartSchema = z
  .strictObject({
    type: z
      .literal('dynamic-tool')
      .default('dynamic-tool')
      .exactOptional()
      .openapi({ title: 'Type' }),
    toolName: z.string().openapi({ title: 'Toolname' }),
    toolCallId: z.string().openapi({ title: 'Toolcallid' }),
    title: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Title' }),
    state: z
      .literal('input-streaming')
      .default('input-streaming')
      .exactOptional()
      .openapi({ title: 'State' }),
    input: z.union([z.any(), z.null().nullable()]).exactOptional().openapi({ title: 'Input' }),
    rawInput: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Rawinput' }),
    providerExecuted: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Providerexecuted' }),
    callProviderMetadata: z
      .union([z.record(z.string(), z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Callprovidermetadata' }),
    approval: z
      .union([ToolApprovalRequestedSchema, ToolApprovalRespondedSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Approval' }),
  })
  .openapi({
    required: ['toolName', 'toolCallId'],
    title: 'DynamicToolInputStreamingPart',
    description: 'Dynamic tool part in input-streaming state.',
  })
  .openapi('PhoenixDbTypesDataStreamProtocolRequestTypesDynamicToolInputStreamingPart')

const DynamicToolInputAvailablePartSchema = z
  .strictObject({
    type: z
      .literal('dynamic-tool')
      .default('dynamic-tool')
      .exactOptional()
      .openapi({ title: 'Type' }),
    toolName: z.string().openapi({ title: 'Toolname' }),
    toolCallId: z.string().openapi({ title: 'Toolcallid' }),
    title: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Title' }),
    state: z
      .literal('input-available')
      .default('input-available')
      .exactOptional()
      .openapi({ title: 'State' }),
    input: z.any().openapi({ title: 'Input' }),
    providerExecuted: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Providerexecuted' }),
    callProviderMetadata: z
      .union([z.record(z.string(), z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Callprovidermetadata' }),
    approval: z
      .union([ToolApprovalRequestedSchema, ToolApprovalRespondedSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Approval' }),
  })
  .openapi({
    required: ['toolName', 'toolCallId', 'input'],
    title: 'DynamicToolInputAvailablePart',
    description: 'Dynamic tool part in input-available state.',
  })
  .openapi('DynamicToolInputAvailablePart')

const PhoenixDbTypesDataStreamProtocolRequestTypesDynamicToolOutputAvailablePartSchema = z
  .strictObject({
    type: z
      .literal('dynamic-tool')
      .default('dynamic-tool')
      .exactOptional()
      .openapi({ title: 'Type' }),
    toolName: z.string().openapi({ title: 'Toolname' }),
    toolCallId: z.string().openapi({ title: 'Toolcallid' }),
    title: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Title' }),
    state: z
      .literal('output-available')
      .default('output-available')
      .exactOptional()
      .openapi({ title: 'State' }),
    input: z.any().openapi({ title: 'Input' }),
    output: z.any().openapi({ title: 'Output' }),
    providerExecuted: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Providerexecuted' }),
    callProviderMetadata: z
      .union([z.record(z.string(), z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Callprovidermetadata' }),
    resultProviderMetadata: z
      .union([z.record(z.string(), z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Resultprovidermetadata' }),
    preliminary: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Preliminary' }),
    approval: z
      .union([ToolApprovalRequestedSchema, ToolApprovalRespondedSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Approval' }),
  })
  .openapi({
    required: ['toolName', 'toolCallId', 'input', 'output'],
    title: 'DynamicToolOutputAvailablePart',
    description: 'Dynamic tool part in output-available state.',
  })
  .openapi('PhoenixDbTypesDataStreamProtocolRequestTypesDynamicToolOutputAvailablePart')

const PhoenixDbTypesDataStreamProtocolRequestTypesDynamicToolOutputErrorPartSchema = z
  .strictObject({
    type: z
      .literal('dynamic-tool')
      .default('dynamic-tool')
      .exactOptional()
      .openapi({ title: 'Type' }),
    toolName: z.string().openapi({ title: 'Toolname' }),
    toolCallId: z.string().openapi({ title: 'Toolcallid' }),
    title: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Title' }),
    state: z
      .literal('output-error')
      .default('output-error')
      .exactOptional()
      .openapi({ title: 'State' }),
    input: z.any().openapi({ title: 'Input' }),
    errorText: z.string().openapi({ title: 'Errortext' }),
    providerExecuted: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Providerexecuted' }),
    callProviderMetadata: z
      .union([z.record(z.string(), z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Callprovidermetadata' }),
    resultProviderMetadata: z
      .union([z.record(z.string(), z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Resultprovidermetadata' }),
    approval: z
      .union([ToolApprovalRequestedSchema, ToolApprovalRespondedSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Approval' }),
  })
  .openapi({
    required: ['toolName', 'toolCallId', 'input', 'errorText'],
    title: 'DynamicToolOutputErrorPart',
    description: 'Dynamic tool part in output-error state.',
  })
  .openapi('PhoenixDbTypesDataStreamProtocolRequestTypesDynamicToolOutputErrorPart')

const DynamicToolApprovalRequestedPartSchema = z
  .strictObject({
    type: z
      .literal('dynamic-tool')
      .default('dynamic-tool')
      .exactOptional()
      .openapi({ title: 'Type' }),
    toolName: z.string().openapi({ title: 'Toolname' }),
    toolCallId: z.string().openapi({ title: 'Toolcallid' }),
    title: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Title' }),
    state: z
      .literal('approval-requested')
      .default('approval-requested')
      .exactOptional()
      .openapi({ title: 'State' }),
    input: z.any().openapi({ title: 'Input' }),
    providerExecuted: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Providerexecuted' }),
    callProviderMetadata: z
      .union([z.record(z.string(), z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Callprovidermetadata' }),
    approval: z
      .union([ToolApprovalRequestedSchema, ToolApprovalRespondedSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Approval' }),
  })
  .openapi({
    required: ['toolName', 'toolCallId', 'input'],
    title: 'DynamicToolApprovalRequestedPart',
    description: 'Dynamic tool part in approval-requested state (awaiting user decision).',
  })
  .openapi('DynamicToolApprovalRequestedPart')

const DynamicToolApprovalRespondedPartSchema = z
  .strictObject({
    type: z
      .literal('dynamic-tool')
      .default('dynamic-tool')
      .exactOptional()
      .openapi({ title: 'Type' }),
    toolName: z.string().openapi({ title: 'Toolname' }),
    toolCallId: z.string().openapi({ title: 'Toolcallid' }),
    title: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Title' }),
    state: z
      .literal('approval-responded')
      .default('approval-responded')
      .exactOptional()
      .openapi({ title: 'State' }),
    input: z.any().openapi({ title: 'Input' }),
    providerExecuted: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Providerexecuted' }),
    callProviderMetadata: z
      .union([z.record(z.string(), z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Callprovidermetadata' }),
    approval: z
      .union([ToolApprovalRequestedSchema, ToolApprovalRespondedSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Approval' }),
  })
  .openapi({
    required: ['toolName', 'toolCallId', 'input'],
    title: 'DynamicToolApprovalRespondedPart',
    description:
      'Dynamic tool part in approval-responded state (user approved/denied, execution pending).',
  })
  .openapi('DynamicToolApprovalRespondedPart')

const DynamicToolOutputDeniedPartSchema = z
  .strictObject({
    type: z
      .literal('dynamic-tool')
      .default('dynamic-tool')
      .exactOptional()
      .openapi({ title: 'Type' }),
    toolName: z.string().openapi({ title: 'Toolname' }),
    toolCallId: z.string().openapi({ title: 'Toolcallid' }),
    title: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Title' }),
    state: z
      .literal('output-denied')
      .default('output-denied')
      .exactOptional()
      .openapi({ title: 'State' }),
    input: z.any().openapi({ title: 'Input' }),
    providerExecuted: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Providerexecuted' }),
    callProviderMetadata: z
      .union([z.record(z.string(), z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Callprovidermetadata' }),
    approval: z
      .union([ToolApprovalRequestedSchema, ToolApprovalRespondedSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Approval' }),
  })
  .openapi({
    required: ['toolName', 'toolCallId', 'input'],
    title: 'DynamicToolOutputDeniedPart',
    description: 'Dynamic tool part in output-denied state (tool was denied, terminal state).',
  })
  .openapi('DynamicToolOutputDeniedPart')

const SourceUrlUIPartSchema = z
  .strictObject({
    type: z.literal('source-url').default('source-url').exactOptional().openapi({ title: 'Type' }),
    sourceId: z.string().openapi({ title: 'Sourceid' }),
    url: z.string().openapi({ title: 'Url' }),
    title: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Title' }),
    providerMetadata: z
      .union([z.record(z.string(), z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Providermetadata' }),
  })
  .openapi({
    required: ['sourceId', 'url'],
    title: 'SourceUrlUIPart',
    description: 'A source part of a message.',
  })
  .openapi('SourceUrlUIPart')

const SourceDocumentUIPartSchema = z
  .strictObject({
    type: z
      .literal('source-document')
      .default('source-document')
      .exactOptional()
      .openapi({ title: 'Type' }),
    sourceId: z.string().openapi({ title: 'Sourceid' }),
    mediaType: z.string().openapi({ title: 'Mediatype' }),
    title: z.string().openapi({ title: 'Title' }),
    filename: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Filename' }),
    providerMetadata: z
      .union([z.record(z.string(), z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Providermetadata' }),
  })
  .openapi({
    required: ['sourceId', 'mediaType', 'title'],
    title: 'SourceDocumentUIPart',
    description: 'A document source part of a message.',
  })
  .openapi('SourceDocumentUIPart')

const FileUIPartSchema = z
  .strictObject({
    type: z.literal('file').default('file').exactOptional().openapi({ title: 'Type' }),
    mediaType: z.string().openapi({ title: 'Mediatype' }),
    filename: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Filename' }),
    url: z.string().openapi({ title: 'Url' }),
    providerMetadata: z
      .union([z.record(z.string(), z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Providermetadata' }),
  })
  .openapi({
    required: ['mediaType', 'url'],
    title: 'FileUIPart',
    description: 'A file part of a message.',
  })
  .openapi('FileUIPart')

const DataUIPartSchema = z
  .strictObject({
    type: z
      .string()
      .regex(/^data-/)
      .openapi({ title: 'Type' }),
    id: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Id' }),
    data: z.any().openapi({ title: 'Data' }),
  })
  .openapi({
    required: ['type', 'data'],
    title: 'DataUIPart',
    description: 'Data part with dynamic type based on data name.',
  })
  .openapi('DataUIPart')

const StepStartUIPartSchema = z
  .strictObject({
    type: z.literal('step-start').default('step-start').exactOptional().openapi({ title: 'Type' }),
  })
  .openapi({
    title: 'StepStartUIPart',
    description: 'A step boundary part of a message.',
    required: [],
  })
  .openapi('StepStartUIPart')

const PhoenixUIMessageSchema = z
  .strictObject({
    id: z.string().openapi({ title: 'Id' }),
    role: z.enum(['system', 'user', 'assistant']).openapi({ title: 'Role' }),
    metadata: z.union([MessageMetadataSchema, z.null().nullable()]).exactOptional(),
    parts: z
      .array(
        z.union([
          TextUIPartSchema,
          ReasoningUIPartSchema,
          PhoenixDbTypesDataStreamProtocolRequestTypesToolInputStreamingPartSchema,
          ToolInputAvailablePartSchema,
          PhoenixDbTypesDataStreamProtocolRequestTypesToolOutputAvailablePartSchema,
          PhoenixDbTypesDataStreamProtocolRequestTypesToolOutputErrorPartSchema,
          ToolApprovalRequestedPartSchema,
          ToolApprovalRespondedPartSchema,
          ToolOutputDeniedPartSchema,
          PhoenixDbTypesDataStreamProtocolRequestTypesDynamicToolInputStreamingPartSchema,
          DynamicToolInputAvailablePartSchema,
          PhoenixDbTypesDataStreamProtocolRequestTypesDynamicToolOutputAvailablePartSchema,
          PhoenixDbTypesDataStreamProtocolRequestTypesDynamicToolOutputErrorPartSchema,
          DynamicToolApprovalRequestedPartSchema,
          DynamicToolApprovalRespondedPartSchema,
          DynamicToolOutputDeniedPartSchema,
          SourceUrlUIPartSchema,
          SourceDocumentUIPartSchema,
          FileUIPartSchema,
          DataUIPartSchema,
          StepStartUIPartSchema,
        ]),
      )
      .openapi({ title: 'Parts' }),
  })
  .openapi({
    required: ['id', 'role', 'parts'],
    title: 'PhoenixUIMessage',
    description: '``UIMessage`` with metadata narrowed to the Phoenix wire shapes.',
  })
  .openapi('PhoenixUIMessage')

const ToolApprovalSchema = z
  .object({
    toolCallId: z.string().openapi({ title: 'Toolcallid' }),
    approved: z
      .boolean()
      .openapi({ title: 'Approved', description: 'Whether the user approved the tool call.' }),
  })
  .openapi({
    required: ['toolCallId', 'approved'],
    title: 'ToolApproval',
    description: "A user's response to a tool call awaiting approval.",
  })
  .openapi('ToolApproval')

const ChatRequestCredentialSchema = z
  .object({
    key: z
      .literal('GITHUB_PERSONAL_ACCESS_TOKEN')
      .openapi({ title: 'Key', description: "The credential's secret-key name." }),
    value: z.string().openapi({ title: 'Value', writeOnly: true }),
  })
  .openapi({
    required: ['key', 'value'],
    title: 'ChatRequestCredential',
    description:
      'One client-held credential riding the request for the duration of a turn.\n\nThe value is ephemeral: it is injected server-side as transport auth for\nthe matching integration and is never persisted, traced, or echoed. It is\ntop-level on the request body — never part of the message — so it cannot\nreach the session transcript.',
  })
  .openapi('ChatRequestCredential')

const ChatRequestBodySchema = z
  .object({
    headless: z
      .boolean()
      .openapi({
        title: 'Headless',
        description:
          'Whether a headless client (terminal or scripted) is driving the turn, as opposed to the browser assistant. Selects the agent configuration the turn runs on.',
      }),
    contexts: z.array(ChatContextSchema).exactOptional().openapi({ title: 'Contexts' }),
    editPermission: z
      .enum(['manual', 'bypass'])
      .default('manual')
      .exactOptional()
      .openapi({ title: 'Editpermission' }),
    requestedSkills: z
      .array(z.string())
      .exactOptional()
      .openapi({
        title: 'Requestedskills',
        description:
          "Skills the user explicitly requested via the prompt's slash-command affordance. The server force-loads each available skill by injecting a synthetic load_skill tool call/result at the tail of the message history. Unknown or context-unavailable names are ignored.",
      }),
    model: AgentModelSelectionSchema.openapi({
      description:
        "The model the client believes the session is set to. This is a precondition, not an instruction: the turn always runs on the session's persisted selection, and a mismatch is rejected with HTTP 409 and code ``agent_session_model_stale`` rather than silently running on — or switching to — an unexpected model. Change the session's model with ``PATCH .../agent_sessions/{session_id}``.",
    }),
    trigger: z
      .literal('submit-message')
      .default('submit-message')
      .exactOptional()
      .openapi({ title: 'Trigger' }),
    id: z.string().openapi({ title: 'Id' }),
    message: z
      .union([PhoenixUIMessageSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          "The turn's new user message to append. May be omitted for client-tool continuation, where ``toolOutputs`` resolve the trailing assistant message's pending tool calls instead.",
      }),
    toolOutputs: z
      .array(
        z.union([
          PhoenixDbTypesDataStreamProtocolRequestTypesToolOutputAvailablePartSchema,
          PhoenixDbTypesDataStreamProtocolRequestTypesToolOutputErrorPartSchema,
          PhoenixDbTypesDataStreamProtocolRequestTypesDynamicToolOutputAvailablePartSchema,
          PhoenixDbTypesDataStreamProtocolRequestTypesDynamicToolOutputErrorPartSchema,
        ]),
      )
      .exactOptional()
      .openapi({
        title: 'Tooloutputs',
        description:
          "Client-executed tool results for pending tool calls on the transcript's trailing assistant message, matched by ``toolCallId``. Submitted alone they continue the assistant turn; submitted with ``message`` they resolve dangling tool calls before the new user turn runs.",
      }),
    toolApprovals: z
      .array(ToolApprovalSchema)
      .exactOptional()
      .openapi({
        title: 'Toolapprovals',
        description:
          'Responses to tool calls awaiting approval on the trailing assistant message, matched by ``toolCallId``. Cannot be combined with ``message``.',
      }),
    lastMessageId: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Lastmessageid',
        description:
          'The id of the last transcript message the client has rendered, used for optimistic concurrency. Omit when the session has no messages; required (and validated against the persisted transcript) once it does. On mismatch the server rejects the send with HTTP 409 and code ``agent_session_messages_stale`` — the client should refetch the session before retrying.',
      }),
    credentials: z
      .array(ChatRequestCredentialSchema)
      .exactOptional()
      .openapi({
        title: 'Credentials',
        description:
          "Client-held credentials for optional integrations (e.g. the user's own GitHub personal access token under the key ``GITHUB_PERSONAL_ACCESS_TOKEN``), used only for the duration of the turn and never persisted. Unknown keys are rejected.",
      }),
    recordLocalTraces: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Recordlocaltraces' }),
    exportRemoteTraces: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Exportremotetraces' }),
    instrumentUserId: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Instrumentuserid',
        description:
          "When true and the request is authenticated as a PhoenixUser, attaches the user's email as the OpenInference ``user.id`` span attribute on all traced work for this request.",
      }),
  })
  .openapi({
    required: ['headless', 'model', 'id'],
    title: 'ChatRequestBody',
    description: 'Assistant chat submit request payload.',
  })
  .openapi('ChatRequestBody')

const CompactAgentSessionRequestBodySchema = z
  .object({
    model: AgentModelSelectionSchema.openapi({
      description:
        "The model the client believes the session is set to. As on the chat route this is a precondition: the summary is generated with the session's persisted selection, and a mismatch is rejected with HTTP 409 and code ``agent_session_model_stale``.",
    }),
  })
  .openapi({
    required: ['model'],
    title: 'CompactAgentSessionRequestBody',
    description: 'Request a model-generated checkpoint for a persisted conversation.',
  })
  .openapi('CompactAgentSessionRequestBody')

const CompactAgentSessionResponseBodySchema = z
  .object({ data: PhoenixUIMessageSchema })
  .openapi({
    required: ['data'],
    title: 'CompactAgentSessionResponseBody',
    description:
      "The checkpoint message this request created. A 200 always means a new\ncheckpoint was persisted; every other outcome is an HTTP 409 whose body's\n``code`` says why (see ``AgentSessionConflictError``).",
  })
  .openapi('CompactAgentSessionResponseBody')

const ContinuousAnnotationConfigDataSchema = z
  .object({
    name: z.string().openapi({ title: 'Name' }),
    type: z.literal('CONTINUOUS').openapi({ title: 'Type' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    optimization_direction: OptimizationDirectionSchema,
    lower_bound: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Lower Bound' }),
    upper_bound: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Upper Bound' }),
  })
  .openapi({
    required: ['name', 'type', 'optimization_direction'],
    title: 'ContinuousAnnotationConfigData',
  })
  .openapi('ContinuousAnnotationConfigData')

const CreateAgentSessionRequestBodySchema = z
  .object({
    model: AgentModelSelectionSchema,
    title: z
      .string()
      .max(100)
      .default('')
      .exactOptional()
      .openapi({ title: 'Title', description: 'Optional initial title.' }),
    is_ephemeral: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Is Ephemeral',
        description: 'Whether the session should expire after a period of inactivity.',
      }),
  })
  .openapi({
    required: ['model'],
    title: 'CreateAgentSessionRequestBody',
    description: 'Request body for creating a persisted agent session.',
  })
  .openapi('CreateAgentSessionRequestBody')

const CreatedAgentSessionSchema = z
  .object({
    id: z
      .string()
      .openapi({
        title: 'Id',
        description: "The session's GlobalID — the ``session_id`` the chat route expects.",
      }),
  })
  .openapi({ required: ['id'], title: 'CreatedAgentSession' })
  .openapi('CreatedAgentSession')

const CreateAgentSessionResponseBodySchema = z
  .object({ data: CreatedAgentSessionSchema })
  .openapi({ required: ['data'], title: 'CreateAgentSessionResponseBody' })
  .openapi('CreateAgentSessionResponseBody')

const FreeformAnnotationConfigDataSchema = z
  .object({
    name: z.string().openapi({ title: 'Name' }),
    type: z.literal('FREEFORM').openapi({ title: 'Type' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    optimization_direction: z
      .union([OptimizationDirectionSchema, z.null().nullable()])
      .exactOptional(),
    threshold: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Threshold' }),
    lower_bound: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Lower Bound' }),
    upper_bound: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Upper Bound' }),
  })
  .openapi({ required: ['name', 'type'], title: 'FreeformAnnotationConfigData' })
  .openapi('FreeformAnnotationConfigData')

const CreateAnnotationConfigDataSchema = z
  .discriminatedUnion('type', [
    CategoricalAnnotationConfigDataSchema,
    ContinuousAnnotationConfigDataSchema,
    FreeformAnnotationConfigDataSchema,
  ])
  .openapi({
    title: 'CreateAnnotationConfigData',
    discriminator: {
      propertyName: 'type',
      mapping: {
        CATEGORICAL: '#/components/schemas/CategoricalAnnotationConfigData',
        CONTINUOUS: '#/components/schemas/ContinuousAnnotationConfigData',
        FREEFORM: '#/components/schemas/FreeformAnnotationConfigData',
      },
    },
  })
  .openapi('CreateAnnotationConfigData')

const CreateAnnotationConfigResponseBodySchema = z
  .object({
    data: z
      .discriminatedUnion('type', [
        CategoricalAnnotationConfigSchema,
        ContinuousAnnotationConfigSchema,
        FreeformAnnotationConfigSchema,
      ])
      .openapi({
        title: 'Data',
        discriminator: {
          propertyName: 'type',
          mapping: {
            CATEGORICAL: '#/components/schemas/CategoricalAnnotationConfig',
            CONTINUOUS: '#/components/schemas/ContinuousAnnotationConfig',
            FREEFORM: '#/components/schemas/FreeformAnnotationConfig',
          },
        },
      }),
  })
  .openapi({ required: ['data'], title: 'CreateAnnotationConfigResponseBody' })
  .openapi('CreateAnnotationConfigResponseBody')

const CreateApiKeyRequestBodySchema = z
  .object({ data: ApiKeyDataSchema })
  .openapi({ required: ['data'], title: 'CreateApiKeyRequestBody' })
  .openapi('CreateApiKeyRequestBody')

const CreatedApiKeySchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    name: z.string().openapi({ title: 'Name' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    expires_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Expires At' }),
    key: z
      .string()
      .openapi({
        title: 'Key',
        description:
          'The API key. This is the only time it is returned; it cannot be recovered from the listing endpoints.',
      }),
  })
  .openapi({ required: ['id', 'name', 'created_at', 'key'], title: 'CreatedApiKey' })
  .openapi('CreatedApiKey')

const CreateApiKeyResponseBodySchema = z
  .object({ data: CreatedApiKeySchema })
  .openapi({ required: ['data'], title: 'CreateApiKeyResponseBody' })
  .openapi('CreateApiKeyResponseBody')

const CreateChatCompletionRequestBodySchema = z
  .object({
    model: z
      .string()
      .openapi({
        title: 'Model',
        description:
          "Model must be '{provider}:{model_name}' for a built-in provider (one of anthropic, aws, azure_openai, cerebras, deepseek, fireworks, google, groq, meta, minimax, moonshot, ollama, openai, perplexity, together, xai, zai) or 'custom:{provider_id}:{model_name}' for a stored custom provider, e.g. 'openai:gpt-4o' or 'anthropic:claude-sonnet-4-5'.",
      }),
    messages: z.array(ChatCompletionRequestMessageSchema).min(1).openapi({ title: 'Messages' }),
    stream: z.boolean().default(false).exactOptional().openapi({ title: 'Stream' }),
    temperature: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Temperature' }),
    top_p: z.union([z.number(), z.null().nullable()]).exactOptional().openapi({ title: 'Top P' }),
    max_tokens: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Max Tokens' }),
    max_completion_tokens: z
      .union([z.int(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Max Completion Tokens' }),
    stop: z
      .union([z.string(), z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Stop' }),
    frequency_penalty: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Frequency Penalty' }),
    presence_penalty: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Presence Penalty' }),
    seed: z.union([z.int(), z.null().nullable()]).exactOptional().openapi({ title: 'Seed' }),
    n: z.union([z.int(), z.null().nullable()]).exactOptional().openapi({ title: 'N' }),
    stream_options: z
      .union([ChatCompletionStreamOptionsSchema, z.null().nullable()])
      .exactOptional(),
    tools: z
      .union([z.array(z.any()), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Tools' }),
    tool_choice: z
      .union([z.any(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Tool Choice' }),
    response_format: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Response Format' }),
  })
  .openapi({
    required: ['model', 'messages'],
    title: 'CreateChatCompletionRequestBody',
    examples: [
      {
        messages: [
          { content: 'You are a helpful assistant.', role: 'system' },
          { content: 'Say hello.', role: 'user' },
        ],
        model: 'openai:gpt-4o',
      },
    ],
  })
  .openapi('CreateChatCompletionRequestBody')

const CreateDatasetLabelRequestBodySchema = z
  .object({
    name: z
      .string()
      .min(1)
      .openapi({ title: 'Name', description: 'The name of the dataset label' }),
    color: z
      .string()
      .regex(/^#([0-9a-f]{6})$/)
      .openapi({
        title: 'Color',
        description: "A lowercase hex color code (e.g. '#00cc88') used to display the label",
      }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Description',
        description: 'An optional description of the dataset label',
      }),
  })
  .openapi({ required: ['name', 'color'], title: 'CreateDatasetLabelRequestBody' })
  .openapi('CreateDatasetLabelRequestBody')

const CreateDatasetLabelResponseBodySchema = z
  .object({ data: DatasetLabelSchema })
  .openapi({ required: ['data'], title: 'CreateDatasetLabelResponseBody' })
  .openapi('CreateDatasetLabelResponseBody')

const CreateDatasetSplitRequestBodySchema = z
  .object({
    name: z.string().openapi({ title: 'Name', description: 'A unique name for the split.' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description', description: 'An optional description of the split.' }),
    color: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Color',
        description: 'An optional hex color for the split (e.g. #33c5e8). Omit for a default.',
      }),
    metadata: z
      .looseObject({})
      .exactOptional()
      .openapi({ title: 'Metadata', description: 'Arbitrary JSON metadata for the split.' }),
    example_ids: z
      .array(z.string())
      .exactOptional()
      .openapi({
        title: 'Example Ids',
        description:
          'Optional dataset example identifiers (GlobalIDs or user-provided IDs) to seed the split with. Each example must belong to this dataset. Omit to create an empty split.',
      }),
  })
  .openapi({ required: ['name'], title: 'CreateDatasetSplitRequestBody' })
  .openapi('CreateDatasetSplitRequestBody')

const DatasetSplitSchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    name: z.string().openapi({ title: 'Name' }),
    description: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Description' }),
    color: z.string().openapi({ title: 'Color' }),
    metadata: z.looseObject({}).openapi({ title: 'Metadata' }),
    example_count: z.int().openapi({ title: 'Example Count' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
  })
  .openapi({
    required: [
      'id',
      'name',
      'description',
      'color',
      'metadata',
      'example_count',
      'created_at',
      'updated_at',
    ],
    title: 'DatasetSplit',
  })
  .openapi('DatasetSplit')

const CreateDatasetSplitResponseBodySchema = z
  .object({ data: DatasetSplitSchema })
  .openapi({ required: ['data'], title: 'CreateDatasetSplitResponseBody' })
  .openapi('CreateDatasetSplitResponseBody')

const CreateExperimentRequestBodySchema = z
  .object({
    name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Name',
        description: 'Name of the experiment (if omitted, a random name will be generated)',
      }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description', description: 'An optional description of the experiment' }),
    metadata: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Metadata', description: 'Metadata for the experiment' }),
    version_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Version Id',
        description:
          'ID of the dataset version over which the experiment will be run (if omitted, the latest version will be used)',
      }),
    splits: z
      .union([z.array(z.string()), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Splits',
        description: 'List of dataset split identifiers (GlobalIDs or names) to filter by',
      }),
    repetitions: z
      .int()
      .default(1)
      .exactOptional()
      .openapi({
        title: 'Repetitions',
        description: 'Number of times the experiment should be repeated for each example',
      }),
  })
  .openapi({
    title: 'CreateExperimentRequestBody',
    description: 'Details of the experiment to be created',
    required: [],
  })
  .openapi('CreateExperimentRequestBody')

const ExperimentSchema = z
  .object({
    id: z.string().openapi({ title: 'Id', description: 'The ID of the experiment' }),
    dataset_id: z
      .string()
      .openapi({
        title: 'Dataset Id',
        description: 'The ID of the dataset associated with the experiment',
      }),
    dataset_version_id: z
      .string()
      .openapi({
        title: 'Dataset Version Id',
        description: 'The ID of the dataset version associated with the experiment',
      }),
    name: z.string().openapi({ title: 'Name', description: 'The name of the experiment' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .openapi({ title: 'Description', description: 'The description of the experiment' }),
    repetitions: z
      .int()
      .gt(0)
      .openapi({ title: 'Repetitions', description: 'Number of times the experiment is repeated' }),
    metadata: z
      .looseObject({})
      .openapi({ title: 'Metadata', description: 'Metadata of the experiment' }),
    project_name: z
      .union([z.string(), z.null().nullable()])
      .openapi({
        title: 'Project Name',
        description: 'The name of the project associated with the experiment',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ title: 'Created At', description: 'The creation timestamp of the experiment' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ title: 'Updated At', description: 'The last update timestamp of the experiment' }),
    example_count: z
      .int()
      .openapi({ title: 'Example Count', description: 'Number of examples in the experiment' }),
    successful_run_count: z
      .int()
      .openapi({
        title: 'Successful Run Count',
        description: 'Number of successful runs in the experiment',
      }),
    failed_run_count: z
      .int()
      .openapi({
        title: 'Failed Run Count',
        description: 'Number of failed runs in the experiment',
      }),
    missing_run_count: z
      .int()
      .openapi({
        title: 'Missing Run Count',
        description: 'Number of missing (not yet executed) runs in the experiment',
      }),
  })
  .openapi({
    required: [
      'id',
      'dataset_id',
      'dataset_version_id',
      'name',
      'description',
      'repetitions',
      'metadata',
      'project_name',
      'created_at',
      'updated_at',
      'example_count',
      'successful_run_count',
      'failed_run_count',
      'missing_run_count',
    ],
    title: 'Experiment',
  })
  .openapi('Experiment')

const CreateExperimentResponseBodySchema = z
  .object({ data: ExperimentSchema })
  .openapi({ required: ['data'], title: 'CreateExperimentResponseBody' })
  .openapi('CreateExperimentResponseBody')

const CreateExperimentRunRequestBodySchema = z
  .object({
    dataset_example_id: z
      .string()
      .openapi({
        title: 'Dataset Example Id',
        description: 'The ID of the dataset example used in the experiment run',
      }),
    output: z.any().openapi({ title: 'Output', description: 'The output of the experiment task' }),
    repetition_number: z
      .int()
      .gt(0)
      .openapi({
        title: 'Repetition Number',
        description: 'The repetition number of the experiment run',
      }),
    start_time: z.iso
      .datetime({ offset: true })
      .openapi({ title: 'Start Time', description: 'The start time of the experiment run' }),
    end_time: z.iso
      .datetime({ offset: true })
      .openapi({ title: 'End Time', description: 'The end time of the experiment run' }),
    trace_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Trace Id',
        description: 'The ID of the corresponding trace (if one exists)',
      }),
    error: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Error',
        description: 'Optional error message if the experiment run encountered an error',
      }),
  })
  .openapi({
    required: ['dataset_example_id', 'output', 'repetition_number', 'start_time', 'end_time'],
    title: 'CreateExperimentRunRequestBody',
  })
  .openapi('CreateExperimentRunRequestBody')

const CreateExperimentRunResponseBodyDataSchema = z
  .object({
    id: z
      .string()
      .openapi({ title: 'Id', description: 'The ID of the newly created experiment run' }),
  })
  .openapi({ required: ['id'], title: 'CreateExperimentRunResponseBodyData' })
  .openapi('CreateExperimentRunResponseBodyData')

const CreateExperimentRunResponseBodySchema = z
  .object({ data: CreateExperimentRunResponseBodyDataSchema })
  .openapi({ required: ['data'], title: 'CreateExperimentRunResponseBody' })
  .openapi('CreateExperimentRunResponseBody')

const CreateProjectRequestBodySchema = z
  .object({
    name: z.string().min(1).openapi({ title: 'Name' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
  })
  .openapi({ required: ['name'], title: 'CreateProjectRequestBody' })
  .openapi('CreateProjectRequestBody')

const ProjectSchema = z
  .object({
    name: z.string().min(1).openapi({ title: 'Name' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    id: z.string().openapi({ title: 'Id' }),
  })
  .openapi({ required: ['name', 'id'], title: 'Project' })
  .openapi('Project')

const CreateProjectResponseBodySchema = z
  .object({ data: ProjectSchema })
  .openapi({ required: ['data'], title: 'CreateProjectResponseBody' })
  .openapi('CreateProjectResponseBody')

const IdentifierSchema = z
  .string()
  .regex(/^[a-z0-9]([_a-z0-9-]*[a-z0-9])?$/)
  .openapi({ title: 'Identifier' })
  .openapi('Identifier')

const PromptDataSchema = z
  .object({
    name: IdentifierSchema,
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    source_prompt_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Source Prompt Id' }),
    metadata: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Metadata' }),
  })
  .openapi({ required: ['name'], title: 'PromptData' })
  .openapi('PromptData')

const TextContentPartSchema = z
  .strictObject({
    type: z.literal('text').openapi({ title: 'Type' }),
    text: z.string().openapi({ title: 'Text' }),
  })
  .openapi({ required: ['type', 'text'], title: 'TextContentPart' })
  .openapi('TextContentPart')

const ToolCallFunctionSchema = z
  .strictObject({
    type: z.literal('function').openapi({ title: 'Type' }),
    name: z.string().openapi({ title: 'Name' }),
    arguments: z.string().openapi({ title: 'Arguments' }),
  })
  .openapi({ required: ['type', 'name', 'arguments'], title: 'ToolCallFunction' })
  .openapi('ToolCallFunction')

const ToolCallContentPartSchema = z
  .strictObject({
    type: z.literal('tool_call').openapi({ title: 'Type' }),
    tool_call_id: z.string().openapi({ title: 'Tool Call Id' }),
    tool_call: z
      .xor([ToolCallFunctionSchema])
      .openapi({
        title: 'Tool Call',
        discriminator: {
          propertyName: 'type',
          mapping: { function: '#/components/schemas/ToolCallFunction' },
        },
      }),
  })
  .openapi({ required: ['type', 'tool_call_id', 'tool_call'], title: 'ToolCallContentPart' })
  .openapi('ToolCallContentPart')

const ToolResultContentPartSchema = z
  .strictObject({
    type: z.literal('tool_result').openapi({ title: 'Type' }),
    tool_call_id: z.string().openapi({ title: 'Tool Call Id' }),
    tool_result: z
      .union([
        z.boolean(),
        z.int(),
        z.number(),
        z.string(),
        z.looseObject({}),
        z.array(z.any()),
        z.null().nullable(),
      ])
      .openapi({ title: 'Tool Result' }),
  })
  .openapi({ required: ['type', 'tool_call_id', 'tool_result'], title: 'ToolResultContentPart' })
  .openapi('ToolResultContentPart')

const PromptMessageSchema = z
  .strictObject({
    role: z
      .enum(['user', 'assistant', 'model', 'ai', 'tool', 'system', 'developer'])
      .openapi({ title: 'Role' }),
    content: z
      .union([
        z.string(),
        z
          .array(
            z
              .discriminatedUnion('type', [
                TextContentPartSchema,
                ToolCallContentPartSchema,
                ToolResultContentPartSchema,
              ])
              .openapi({
                discriminator: {
                  propertyName: 'type',
                  mapping: {
                    text: '#/components/schemas/TextContentPart',
                    tool_call: '#/components/schemas/ToolCallContentPart',
                    tool_result: '#/components/schemas/ToolResultContentPart',
                  },
                },
              }),
          )
          .min(1),
      ])
      .openapi({ title: 'Content' }),
  })
  .openapi({ required: ['role', 'content'], title: 'PromptMessage' })
  .openapi('PromptMessage')

const PromptChatTemplateSchema = z
  .strictObject({
    type: z.literal('chat').openapi({ title: 'Type' }),
    messages: z.array(PromptMessageSchema).openapi({ title: 'Messages' }),
  })
  .openapi({ required: ['type', 'messages'], title: 'PromptChatTemplate' })
  .openapi('PromptChatTemplate')

const PromptStringTemplateSchema = z
  .strictObject({
    type: z.literal('string').openapi({ title: 'Type' }),
    template: z.string().openapi({ title: 'Template' }),
  })
  .openapi({ required: ['type', 'template'], title: 'PromptStringTemplate' })
  .openapi('PromptStringTemplate')

const PromptTemplateTypeSchema = z
  .enum(['STR', 'CHAT'])
  .openapi({ title: 'PromptTemplateType' })
  .openapi('PromptTemplateType')

const PromptTemplateFormatSchema = z
  .enum(['MUSTACHE', 'F_STRING', 'NONE'])
  .openapi({ title: 'PromptTemplateFormat' })
  .openapi('PromptTemplateFormat')

const PromptOpenAIInvocationParametersContentSchema = z
  .strictObject({
    temperature: z.number().exactOptional().openapi({ title: 'Temperature' }),
    max_tokens: z.int().exactOptional().openapi({ title: 'Max Tokens' }),
    max_completion_tokens: z.int().exactOptional().openapi({ title: 'Max Completion Tokens' }),
    frequency_penalty: z.number().exactOptional().openapi({ title: 'Frequency Penalty' }),
    presence_penalty: z.number().exactOptional().openapi({ title: 'Presence Penalty' }),
    top_p: z.number().exactOptional().openapi({ title: 'Top P' }),
    seed: z.int().exactOptional().openapi({ title: 'Seed' }),
    stop: z.array(z.string()).exactOptional().openapi({ title: 'Stop' }),
    reasoning_effort: z
      .enum(['none', 'minimal', 'low', 'medium', 'high', 'xhigh'])
      .exactOptional()
      .openapi({ title: 'Reasoning Effort' }),
    extra_body: z.looseObject({}).exactOptional().openapi({ title: 'Extra Body' }),
  })
  .openapi({ title: 'PromptOpenAIInvocationParametersContent', required: [] })
  .openapi('PromptOpenAIInvocationParametersContent')

const PromptOpenAIInvocationParametersSchema = z
  .strictObject({
    type: z.literal('openai').openapi({ title: 'Type' }),
    openai: PromptOpenAIInvocationParametersContentSchema,
  })
  .openapi({ required: ['type', 'openai'], title: 'PromptOpenAIInvocationParameters' })
  .openapi('PromptOpenAIInvocationParameters')

const PromptAzureOpenAIInvocationParametersContentSchema = z
  .strictObject({
    temperature: z.number().exactOptional().openapi({ title: 'Temperature' }),
    max_tokens: z.int().exactOptional().openapi({ title: 'Max Tokens' }),
    max_completion_tokens: z.int().exactOptional().openapi({ title: 'Max Completion Tokens' }),
    frequency_penalty: z.number().exactOptional().openapi({ title: 'Frequency Penalty' }),
    presence_penalty: z.number().exactOptional().openapi({ title: 'Presence Penalty' }),
    top_p: z.number().exactOptional().openapi({ title: 'Top P' }),
    seed: z.int().exactOptional().openapi({ title: 'Seed' }),
    stop: z.array(z.string()).exactOptional().openapi({ title: 'Stop' }),
    reasoning_effort: z
      .enum(['none', 'minimal', 'low', 'medium', 'high', 'xhigh'])
      .exactOptional()
      .openapi({ title: 'Reasoning Effort' }),
    extra_body: z.looseObject({}).exactOptional().openapi({ title: 'Extra Body' }),
  })
  .openapi({ title: 'PromptAzureOpenAIInvocationParametersContent', required: [] })
  .openapi('PromptAzureOpenAIInvocationParametersContent')

const PromptAzureOpenAIInvocationParametersSchema = z
  .strictObject({
    type: z.literal('azure_openai').openapi({ title: 'Type' }),
    azure_openai: PromptAzureOpenAIInvocationParametersContentSchema,
  })
  .openapi({ required: ['type', 'azure_openai'], title: 'PromptAzureOpenAIInvocationParameters' })
  .openapi('PromptAzureOpenAIInvocationParameters')

const PromptAnthropicOutputConfigSchema = z
  .strictObject({
    effort: z
      .enum(['low', 'medium', 'high', 'xhigh', 'max'])
      .exactOptional()
      .openapi({ title: 'Effort' }),
  })
  .openapi({ title: 'PromptAnthropicOutputConfig', required: [] })
  .openapi('PromptAnthropicOutputConfig')

const PromptAnthropicThinkingConfigDisabledSchema = z
  .strictObject({ type: z.literal('disabled').openapi({ title: 'Type' }) })
  .openapi({ required: ['type'], title: 'PromptAnthropicThinkingConfigDisabled' })
  .openapi('PromptAnthropicThinkingConfigDisabled')

const PromptAnthropicThinkingConfigEnabledSchema = z
  .strictObject({
    type: z.literal('enabled').openapi({ title: 'Type' }),
    budget_tokens: z.int().min(1024).openapi({ title: 'Budget Tokens' }),
    display: z.enum(['summarized', 'omitted']).exactOptional().openapi({ title: 'Display' }),
  })
  .openapi({ required: ['type', 'budget_tokens'], title: 'PromptAnthropicThinkingConfigEnabled' })
  .openapi('PromptAnthropicThinkingConfigEnabled')

const PromptAnthropicThinkingConfigAdaptiveSchema = z
  .strictObject({
    type: z.literal('adaptive').openapi({ title: 'Type' }),
    display: z.enum(['summarized', 'omitted']).exactOptional().openapi({ title: 'Display' }),
  })
  .openapi({ required: ['type'], title: 'PromptAnthropicThinkingConfigAdaptive' })
  .openapi('PromptAnthropicThinkingConfigAdaptive')

const PromptAnthropicInvocationParametersContentSchema = z
  .strictObject({
    max_tokens: z.int().openapi({ title: 'Max Tokens' }),
    temperature: z.number().exactOptional().openapi({ title: 'Temperature' }),
    top_p: z.number().exactOptional().openapi({ title: 'Top P' }),
    stop_sequences: z.array(z.string()).exactOptional().openapi({ title: 'Stop Sequences' }),
    output_config: PromptAnthropicOutputConfigSchema.exactOptional(),
    thinking: z
      .discriminatedUnion('type', [
        PromptAnthropicThinkingConfigDisabledSchema,
        PromptAnthropicThinkingConfigEnabledSchema,
        PromptAnthropicThinkingConfigAdaptiveSchema,
      ])
      .exactOptional()
      .openapi({
        title: 'Thinking',
        discriminator: {
          propertyName: 'type',
          mapping: {
            adaptive: '#/components/schemas/PromptAnthropicThinkingConfigAdaptive',
            disabled: '#/components/schemas/PromptAnthropicThinkingConfigDisabled',
            enabled: '#/components/schemas/PromptAnthropicThinkingConfigEnabled',
          },
        },
      }),
    extra_body: z.looseObject({}).exactOptional().openapi({ title: 'Extra Body' }),
  })
  .openapi({ required: ['max_tokens'], title: 'PromptAnthropicInvocationParametersContent' })
  .openapi('PromptAnthropicInvocationParametersContent')

const PromptAnthropicInvocationParametersSchema = z
  .strictObject({
    type: z.literal('anthropic').openapi({ title: 'Type' }),
    anthropic: PromptAnthropicInvocationParametersContentSchema,
  })
  .openapi({ required: ['type', 'anthropic'], title: 'PromptAnthropicInvocationParameters' })
  .openapi('PromptAnthropicInvocationParameters')

const PromptGoogleThinkingConfigSchema = z
  .strictObject({
    thinking_budget: z.int().exactOptional().openapi({ title: 'Thinking Budget' }),
    thinking_level: z
      .enum(['minimal', 'low', 'medium', 'high'])
      .exactOptional()
      .openapi({ title: 'Thinking Level' }),
    include_thoughts: z.boolean().exactOptional().openapi({ title: 'Include Thoughts' }),
  })
  .openapi({ title: 'PromptGoogleThinkingConfig', required: [] })
  .openapi('PromptGoogleThinkingConfig')

const PromptGoogleInvocationParametersContentSchema = z
  .strictObject({
    temperature: z.number().exactOptional().openapi({ title: 'Temperature' }),
    max_output_tokens: z.int().exactOptional().openapi({ title: 'Max Output Tokens' }),
    stop_sequences: z.array(z.string()).exactOptional().openapi({ title: 'Stop Sequences' }),
    presence_penalty: z.number().exactOptional().openapi({ title: 'Presence Penalty' }),
    frequency_penalty: z.number().exactOptional().openapi({ title: 'Frequency Penalty' }),
    top_p: z.number().exactOptional().openapi({ title: 'Top P' }),
    top_k: z.int().exactOptional().openapi({ title: 'Top K' }),
    thinking_config: PromptGoogleThinkingConfigSchema.exactOptional(),
  })
  .openapi({ title: 'PromptGoogleInvocationParametersContent', required: [] })
  .openapi('PromptGoogleInvocationParametersContent')

const PromptGoogleInvocationParametersSchema = z
  .strictObject({
    type: z.literal('google').openapi({ title: 'Type' }),
    google: PromptGoogleInvocationParametersContentSchema,
  })
  .openapi({ required: ['type', 'google'], title: 'PromptGoogleInvocationParameters' })
  .openapi('PromptGoogleInvocationParameters')

const PromptDeepSeekInvocationParametersContentSchema = z
  .strictObject({
    temperature: z.number().exactOptional().openapi({ title: 'Temperature' }),
    max_tokens: z.int().exactOptional().openapi({ title: 'Max Tokens' }),
    max_completion_tokens: z.int().exactOptional().openapi({ title: 'Max Completion Tokens' }),
    frequency_penalty: z.number().exactOptional().openapi({ title: 'Frequency Penalty' }),
    presence_penalty: z.number().exactOptional().openapi({ title: 'Presence Penalty' }),
    top_p: z.number().exactOptional().openapi({ title: 'Top P' }),
    seed: z.int().exactOptional().openapi({ title: 'Seed' }),
    stop: z.array(z.string()).exactOptional().openapi({ title: 'Stop' }),
    reasoning_effort: z
      .enum(['none', 'minimal', 'low', 'medium', 'high', 'xhigh'])
      .exactOptional()
      .openapi({ title: 'Reasoning Effort' }),
    extra_body: z.looseObject({}).exactOptional().openapi({ title: 'Extra Body' }),
  })
  .openapi({ title: 'PromptDeepSeekInvocationParametersContent', required: [] })
  .openapi('PromptDeepSeekInvocationParametersContent')

const PromptDeepSeekInvocationParametersSchema = z
  .strictObject({
    type: z.literal('deepseek').openapi({ title: 'Type' }),
    deepseek: PromptDeepSeekInvocationParametersContentSchema,
  })
  .openapi({ required: ['type', 'deepseek'], title: 'PromptDeepSeekInvocationParameters' })
  .openapi('PromptDeepSeekInvocationParameters')

const PromptXAIInvocationParametersContentSchema = z
  .strictObject({
    temperature: z.number().exactOptional().openapi({ title: 'Temperature' }),
    max_tokens: z.int().exactOptional().openapi({ title: 'Max Tokens' }),
    max_completion_tokens: z.int().exactOptional().openapi({ title: 'Max Completion Tokens' }),
    frequency_penalty: z.number().exactOptional().openapi({ title: 'Frequency Penalty' }),
    presence_penalty: z.number().exactOptional().openapi({ title: 'Presence Penalty' }),
    top_p: z.number().exactOptional().openapi({ title: 'Top P' }),
    seed: z.int().exactOptional().openapi({ title: 'Seed' }),
    stop: z.array(z.string()).exactOptional().openapi({ title: 'Stop' }),
    reasoning_effort: z
      .enum(['none', 'minimal', 'low', 'medium', 'high', 'xhigh'])
      .exactOptional()
      .openapi({ title: 'Reasoning Effort' }),
    extra_body: z.looseObject({}).exactOptional().openapi({ title: 'Extra Body' }),
  })
  .openapi({ title: 'PromptXAIInvocationParametersContent', required: [] })
  .openapi('PromptXAIInvocationParametersContent')

const PromptXAIInvocationParametersSchema = z
  .strictObject({
    type: z.literal('xai').openapi({ title: 'Type' }),
    xai: PromptXAIInvocationParametersContentSchema,
  })
  .openapi({ required: ['type', 'xai'], title: 'PromptXAIInvocationParameters' })
  .openapi('PromptXAIInvocationParameters')

const PromptOllamaInvocationParametersContentSchema = z
  .strictObject({
    temperature: z.number().exactOptional().openapi({ title: 'Temperature' }),
    max_tokens: z.int().exactOptional().openapi({ title: 'Max Tokens' }),
    max_completion_tokens: z.int().exactOptional().openapi({ title: 'Max Completion Tokens' }),
    frequency_penalty: z.number().exactOptional().openapi({ title: 'Frequency Penalty' }),
    presence_penalty: z.number().exactOptional().openapi({ title: 'Presence Penalty' }),
    top_p: z.number().exactOptional().openapi({ title: 'Top P' }),
    seed: z.int().exactOptional().openapi({ title: 'Seed' }),
    stop: z.array(z.string()).exactOptional().openapi({ title: 'Stop' }),
    reasoning_effort: z
      .enum(['none', 'minimal', 'low', 'medium', 'high', 'xhigh'])
      .exactOptional()
      .openapi({ title: 'Reasoning Effort' }),
    extra_body: z.looseObject({}).exactOptional().openapi({ title: 'Extra Body' }),
  })
  .openapi({ title: 'PromptOllamaInvocationParametersContent', required: [] })
  .openapi('PromptOllamaInvocationParametersContent')

const PromptOllamaInvocationParametersSchema = z
  .strictObject({
    type: z.literal('ollama').openapi({ title: 'Type' }),
    ollama: PromptOllamaInvocationParametersContentSchema,
  })
  .openapi({ required: ['type', 'ollama'], title: 'PromptOllamaInvocationParameters' })
  .openapi('PromptOllamaInvocationParameters')

const PromptAwsInvocationParametersContentSchema = z
  .strictObject({
    max_tokens: z.int().exactOptional().openapi({ title: 'Max Tokens' }),
    temperature: z.number().exactOptional().openapi({ title: 'Temperature' }),
    top_p: z.number().exactOptional().openapi({ title: 'Top P' }),
    stop_sequences: z.array(z.string()).exactOptional().openapi({ title: 'Stop Sequences' }),
  })
  .openapi({ title: 'PromptAwsInvocationParametersContent', required: [] })
  .openapi('PromptAwsInvocationParametersContent')

const PromptAwsInvocationParametersSchema = z
  .strictObject({
    type: z.literal('aws').openapi({ title: 'Type' }),
    aws: PromptAwsInvocationParametersContentSchema,
  })
  .openapi({ required: ['type', 'aws'], title: 'PromptAwsInvocationParameters' })
  .openapi('PromptAwsInvocationParameters')

const PromptCerebrasInvocationParametersContentSchema = z
  .strictObject({
    temperature: z.number().exactOptional().openapi({ title: 'Temperature' }),
    max_tokens: z.int().exactOptional().openapi({ title: 'Max Tokens' }),
    max_completion_tokens: z.int().exactOptional().openapi({ title: 'Max Completion Tokens' }),
    frequency_penalty: z.number().exactOptional().openapi({ title: 'Frequency Penalty' }),
    presence_penalty: z.number().exactOptional().openapi({ title: 'Presence Penalty' }),
    top_p: z.number().exactOptional().openapi({ title: 'Top P' }),
    seed: z.int().exactOptional().openapi({ title: 'Seed' }),
    stop: z.array(z.string()).exactOptional().openapi({ title: 'Stop' }),
    reasoning_effort: z
      .enum(['none', 'minimal', 'low', 'medium', 'high', 'xhigh'])
      .exactOptional()
      .openapi({ title: 'Reasoning Effort' }),
    extra_body: z.looseObject({}).exactOptional().openapi({ title: 'Extra Body' }),
  })
  .openapi({ title: 'PromptCerebrasInvocationParametersContent', required: [] })
  .openapi('PromptCerebrasInvocationParametersContent')

const PromptCerebrasInvocationParametersSchema = z
  .strictObject({
    type: z.literal('cerebras').openapi({ title: 'Type' }),
    cerebras: PromptCerebrasInvocationParametersContentSchema,
  })
  .openapi({ required: ['type', 'cerebras'], title: 'PromptCerebrasInvocationParameters' })
  .openapi('PromptCerebrasInvocationParameters')

const PromptFireworksInvocationParametersContentSchema = z
  .strictObject({
    temperature: z.number().exactOptional().openapi({ title: 'Temperature' }),
    max_tokens: z.int().exactOptional().openapi({ title: 'Max Tokens' }),
    max_completion_tokens: z.int().exactOptional().openapi({ title: 'Max Completion Tokens' }),
    frequency_penalty: z.number().exactOptional().openapi({ title: 'Frequency Penalty' }),
    presence_penalty: z.number().exactOptional().openapi({ title: 'Presence Penalty' }),
    top_p: z.number().exactOptional().openapi({ title: 'Top P' }),
    seed: z.int().exactOptional().openapi({ title: 'Seed' }),
    stop: z.array(z.string()).exactOptional().openapi({ title: 'Stop' }),
    reasoning_effort: z
      .enum(['none', 'minimal', 'low', 'medium', 'high', 'xhigh'])
      .exactOptional()
      .openapi({ title: 'Reasoning Effort' }),
    extra_body: z.looseObject({}).exactOptional().openapi({ title: 'Extra Body' }),
  })
  .openapi({ title: 'PromptFireworksInvocationParametersContent', required: [] })
  .openapi('PromptFireworksInvocationParametersContent')

const PromptFireworksInvocationParametersSchema = z
  .strictObject({
    type: z.literal('fireworks').openapi({ title: 'Type' }),
    fireworks: PromptFireworksInvocationParametersContentSchema,
  })
  .openapi({ required: ['type', 'fireworks'], title: 'PromptFireworksInvocationParameters' })
  .openapi('PromptFireworksInvocationParameters')

const PromptGroqInvocationParametersContentSchema = z
  .strictObject({
    temperature: z.number().exactOptional().openapi({ title: 'Temperature' }),
    max_tokens: z.int().exactOptional().openapi({ title: 'Max Tokens' }),
    max_completion_tokens: z.int().exactOptional().openapi({ title: 'Max Completion Tokens' }),
    frequency_penalty: z.number().exactOptional().openapi({ title: 'Frequency Penalty' }),
    presence_penalty: z.number().exactOptional().openapi({ title: 'Presence Penalty' }),
    top_p: z.number().exactOptional().openapi({ title: 'Top P' }),
    seed: z.int().exactOptional().openapi({ title: 'Seed' }),
    stop: z.array(z.string()).exactOptional().openapi({ title: 'Stop' }),
    reasoning_effort: z
      .enum(['none', 'minimal', 'low', 'medium', 'high', 'xhigh'])
      .exactOptional()
      .openapi({ title: 'Reasoning Effort' }),
    extra_body: z.looseObject({}).exactOptional().openapi({ title: 'Extra Body' }),
  })
  .openapi({ title: 'PromptGroqInvocationParametersContent', required: [] })
  .openapi('PromptGroqInvocationParametersContent')

const PromptGroqInvocationParametersSchema = z
  .strictObject({
    type: z.literal('groq').openapi({ title: 'Type' }),
    groq: PromptGroqInvocationParametersContentSchema,
  })
  .openapi({ required: ['type', 'groq'], title: 'PromptGroqInvocationParameters' })
  .openapi('PromptGroqInvocationParameters')

const PromptMoonshotInvocationParametersContentSchema = z
  .strictObject({
    temperature: z.number().exactOptional().openapi({ title: 'Temperature' }),
    max_tokens: z.int().exactOptional().openapi({ title: 'Max Tokens' }),
    max_completion_tokens: z.int().exactOptional().openapi({ title: 'Max Completion Tokens' }),
    frequency_penalty: z.number().exactOptional().openapi({ title: 'Frequency Penalty' }),
    presence_penalty: z.number().exactOptional().openapi({ title: 'Presence Penalty' }),
    top_p: z.number().exactOptional().openapi({ title: 'Top P' }),
    seed: z.int().exactOptional().openapi({ title: 'Seed' }),
    stop: z.array(z.string()).exactOptional().openapi({ title: 'Stop' }),
    reasoning_effort: z
      .enum(['none', 'minimal', 'low', 'medium', 'high', 'xhigh'])
      .exactOptional()
      .openapi({ title: 'Reasoning Effort' }),
    extra_body: z.looseObject({}).exactOptional().openapi({ title: 'Extra Body' }),
  })
  .openapi({ title: 'PromptMoonshotInvocationParametersContent', required: [] })
  .openapi('PromptMoonshotInvocationParametersContent')

const PromptMoonshotInvocationParametersSchema = z
  .strictObject({
    type: z.literal('moonshot').openapi({ title: 'Type' }),
    moonshot: PromptMoonshotInvocationParametersContentSchema,
  })
  .openapi({ required: ['type', 'moonshot'], title: 'PromptMoonshotInvocationParameters' })
  .openapi('PromptMoonshotInvocationParameters')

const PromptPerplexityInvocationParametersContentSchema = z
  .strictObject({
    temperature: z.number().exactOptional().openapi({ title: 'Temperature' }),
    max_tokens: z.int().exactOptional().openapi({ title: 'Max Tokens' }),
    max_completion_tokens: z.int().exactOptional().openapi({ title: 'Max Completion Tokens' }),
    frequency_penalty: z.number().exactOptional().openapi({ title: 'Frequency Penalty' }),
    presence_penalty: z.number().exactOptional().openapi({ title: 'Presence Penalty' }),
    top_p: z.number().exactOptional().openapi({ title: 'Top P' }),
    seed: z.int().exactOptional().openapi({ title: 'Seed' }),
    stop: z.array(z.string()).exactOptional().openapi({ title: 'Stop' }),
    reasoning_effort: z
      .enum(['none', 'minimal', 'low', 'medium', 'high', 'xhigh'])
      .exactOptional()
      .openapi({ title: 'Reasoning Effort' }),
    extra_body: z.looseObject({}).exactOptional().openapi({ title: 'Extra Body' }),
  })
  .openapi({ title: 'PromptPerplexityInvocationParametersContent', required: [] })
  .openapi('PromptPerplexityInvocationParametersContent')

const PromptPerplexityInvocationParametersSchema = z
  .strictObject({
    type: z.literal('perplexity').openapi({ title: 'Type' }),
    perplexity: PromptPerplexityInvocationParametersContentSchema,
  })
  .openapi({ required: ['type', 'perplexity'], title: 'PromptPerplexityInvocationParameters' })
  .openapi('PromptPerplexityInvocationParameters')

const PromptTogetherInvocationParametersContentSchema = z
  .strictObject({
    temperature: z.number().exactOptional().openapi({ title: 'Temperature' }),
    max_tokens: z.int().exactOptional().openapi({ title: 'Max Tokens' }),
    max_completion_tokens: z.int().exactOptional().openapi({ title: 'Max Completion Tokens' }),
    frequency_penalty: z.number().exactOptional().openapi({ title: 'Frequency Penalty' }),
    presence_penalty: z.number().exactOptional().openapi({ title: 'Presence Penalty' }),
    top_p: z.number().exactOptional().openapi({ title: 'Top P' }),
    seed: z.int().exactOptional().openapi({ title: 'Seed' }),
    stop: z.array(z.string()).exactOptional().openapi({ title: 'Stop' }),
    reasoning_effort: z
      .enum(['none', 'minimal', 'low', 'medium', 'high', 'xhigh'])
      .exactOptional()
      .openapi({ title: 'Reasoning Effort' }),
    extra_body: z.looseObject({}).exactOptional().openapi({ title: 'Extra Body' }),
  })
  .openapi({ title: 'PromptTogetherInvocationParametersContent', required: [] })
  .openapi('PromptTogetherInvocationParametersContent')

const PromptTogetherInvocationParametersSchema = z
  .strictObject({
    type: z.literal('together').openapi({ title: 'Type' }),
    together: PromptTogetherInvocationParametersContentSchema,
  })
  .openapi({ required: ['type', 'together'], title: 'PromptTogetherInvocationParameters' })
  .openapi('PromptTogetherInvocationParameters')

const PromptZAIInvocationParametersContentSchema = z
  .strictObject({
    temperature: z.number().exactOptional().openapi({ title: 'Temperature' }),
    max_tokens: z.int().exactOptional().openapi({ title: 'Max Tokens' }),
    max_completion_tokens: z.int().exactOptional().openapi({ title: 'Max Completion Tokens' }),
    frequency_penalty: z.number().exactOptional().openapi({ title: 'Frequency Penalty' }),
    presence_penalty: z.number().exactOptional().openapi({ title: 'Presence Penalty' }),
    top_p: z.number().exactOptional().openapi({ title: 'Top P' }),
    seed: z.int().exactOptional().openapi({ title: 'Seed' }),
    stop: z.array(z.string()).exactOptional().openapi({ title: 'Stop' }),
    reasoning_effort: z
      .enum(['none', 'minimal', 'low', 'medium', 'high', 'xhigh'])
      .exactOptional()
      .openapi({ title: 'Reasoning Effort' }),
    extra_body: z.looseObject({}).exactOptional().openapi({ title: 'Extra Body' }),
  })
  .openapi({ title: 'PromptZAIInvocationParametersContent', required: [] })
  .openapi('PromptZAIInvocationParametersContent')

const PromptZAIInvocationParametersSchema = z
  .strictObject({
    type: z.literal('zai').openapi({ title: 'Type' }),
    zai: PromptZAIInvocationParametersContentSchema,
  })
  .openapi({ required: ['type', 'zai'], title: 'PromptZAIInvocationParameters' })
  .openapi('PromptZAIInvocationParameters')

const PromptMetaInvocationParametersContentSchema = z
  .strictObject({
    temperature: z.number().exactOptional().openapi({ title: 'Temperature' }),
    max_tokens: z.int().exactOptional().openapi({ title: 'Max Tokens' }),
    max_completion_tokens: z.int().exactOptional().openapi({ title: 'Max Completion Tokens' }),
    frequency_penalty: z.number().exactOptional().openapi({ title: 'Frequency Penalty' }),
    presence_penalty: z.number().exactOptional().openapi({ title: 'Presence Penalty' }),
    top_p: z.number().exactOptional().openapi({ title: 'Top P' }),
    seed: z.int().exactOptional().openapi({ title: 'Seed' }),
    stop: z.array(z.string()).exactOptional().openapi({ title: 'Stop' }),
    reasoning_effort: z
      .enum(['none', 'minimal', 'low', 'medium', 'high', 'xhigh'])
      .exactOptional()
      .openapi({ title: 'Reasoning Effort' }),
    extra_body: z.looseObject({}).exactOptional().openapi({ title: 'Extra Body' }),
  })
  .openapi({ title: 'PromptMetaInvocationParametersContent', required: [] })
  .openapi('PromptMetaInvocationParametersContent')

const PromptMetaInvocationParametersSchema = z
  .strictObject({
    type: z.literal('meta').openapi({ title: 'Type' }),
    meta: PromptMetaInvocationParametersContentSchema,
  })
  .openapi({ required: ['type', 'meta'], title: 'PromptMetaInvocationParameters' })
  .openapi('PromptMetaInvocationParameters')

const PromptToolFunctionDefinitionSchema = z
  .strictObject({
    name: z.string().openapi({ title: 'Name' }),
    description: z.string().exactOptional().openapi({ title: 'Description' }),
    parameters: z.looseObject({}).exactOptional().openapi({ title: 'Parameters' }),
    strict: z.boolean().exactOptional().openapi({ title: 'Strict' }),
  })
  .openapi({ required: ['name'], title: 'PromptToolFunctionDefinition' })
  .openapi('PromptToolFunctionDefinition')

const PromptToolFunctionSchema = z
  .strictObject({
    type: z.literal('function').openapi({ title: 'Type' }),
    function: PromptToolFunctionDefinitionSchema,
  })
  .openapi({ required: ['type', 'function'], title: 'PromptToolFunction' })
  .openapi('PromptToolFunction')

const PromptToolRawSchema = z
  .strictObject({
    type: z.literal('raw').openapi({ title: 'Type' }),
    raw: z.looseObject({}).openapi({ title: 'Raw' }),
  })
  .openapi({ required: ['type', 'raw'], title: 'PromptToolRaw' })
  .openapi('PromptToolRaw')

const PromptToolChoiceNoneSchema = z
  .strictObject({ type: z.literal('none').openapi({ title: 'Type' }) })
  .openapi({ required: ['type'], title: 'PromptToolChoiceNone' })
  .openapi('PromptToolChoiceNone')

const PromptToolChoiceZeroOrMoreSchema = z
  .strictObject({ type: z.literal('zero_or_more').openapi({ title: 'Type' }) })
  .openapi({ required: ['type'], title: 'PromptToolChoiceZeroOrMore' })
  .openapi('PromptToolChoiceZeroOrMore')

const PromptToolChoiceOneOrMoreSchema = z
  .strictObject({ type: z.literal('one_or_more').openapi({ title: 'Type' }) })
  .openapi({ required: ['type'], title: 'PromptToolChoiceOneOrMore' })
  .openapi('PromptToolChoiceOneOrMore')

const PromptToolChoiceSpecificFunctionToolSchema = z
  .strictObject({
    type: z.literal('specific_function').openapi({ title: 'Type' }),
    function_name: z.string().openapi({ title: 'Function Name' }),
  })
  .openapi({ required: ['type', 'function_name'], title: 'PromptToolChoiceSpecificFunctionTool' })
  .openapi('PromptToolChoiceSpecificFunctionTool')

const PromptToolsSchema = z
  .strictObject({
    type: z.literal('tools').openapi({ title: 'Type' }),
    tools: z
      .array(
        z
          .discriminatedUnion('type', [PromptToolFunctionSchema, PromptToolRawSchema])
          .openapi({
            discriminator: {
              propertyName: 'type',
              mapping: {
                function: '#/components/schemas/PromptToolFunction',
                raw: '#/components/schemas/PromptToolRaw',
              },
            },
          }),
      )
      .min(1)
      .openapi({ title: 'Tools' }),
    tool_choice: z
      .discriminatedUnion('type', [
        PromptToolChoiceNoneSchema,
        PromptToolChoiceZeroOrMoreSchema,
        PromptToolChoiceOneOrMoreSchema,
        PromptToolChoiceSpecificFunctionToolSchema,
      ])
      .exactOptional()
      .openapi({
        title: 'Tool Choice',
        discriminator: {
          propertyName: 'type',
          mapping: {
            none: '#/components/schemas/PromptToolChoiceNone',
            one_or_more: '#/components/schemas/PromptToolChoiceOneOrMore',
            specific_function: '#/components/schemas/PromptToolChoiceSpecificFunctionTool',
            zero_or_more: '#/components/schemas/PromptToolChoiceZeroOrMore',
          },
        },
      }),
    disable_parallel_tool_calls: z
      .boolean()
      .exactOptional()
      .openapi({ title: 'Disable Parallel Tool Calls' }),
  })
  .openapi({ required: ['type', 'tools'], title: 'PromptTools' })
  .openapi('PromptTools')

const PromptResponseFormatJSONSchemaDefinitionSchema = z
  .strictObject({
    name: z.string().openapi({ title: 'Name' }),
    description: z.string().exactOptional().openapi({ title: 'Description' }),
    schema: z.looseObject({}).exactOptional().openapi({ title: 'Schema' }),
    strict: z.boolean().exactOptional().openapi({ title: 'Strict' }),
  })
  .openapi({ required: ['name'], title: 'PromptResponseFormatJSONSchemaDefinition' })
  .openapi('PromptResponseFormatJSONSchemaDefinition')

const PromptResponseFormatJSONSchemaSchema = z
  .strictObject({
    type: z.literal('json_schema').openapi({ title: 'Type' }),
    json_schema: PromptResponseFormatJSONSchemaDefinitionSchema,
  })
  .openapi({ required: ['type', 'json_schema'], title: 'PromptResponseFormatJSONSchema' })
  .openapi('PromptResponseFormatJSONSchema')

const PromptVersionDataSchema = z
  .object({
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    metadata: z
      .looseObject({})
      .exactOptional()
      .openapi({
        title: 'Metadata',
        description: 'Arbitrary JSON metadata for the prompt version.',
      }),
    model_provider: ModelProviderSchema,
    model_name: z.string().openapi({ title: 'Model Name' }),
    template: z
      .discriminatedUnion('type', [PromptChatTemplateSchema, PromptStringTemplateSchema])
      .openapi({
        title: 'Template',
        discriminator: {
          propertyName: 'type',
          mapping: {
            chat: '#/components/schemas/PromptChatTemplate',
            string: '#/components/schemas/PromptStringTemplate',
          },
        },
      }),
    template_type: PromptTemplateTypeSchema,
    template_format: PromptTemplateFormatSchema,
    invocation_parameters: z
      .discriminatedUnion('type', [
        PromptOpenAIInvocationParametersSchema,
        PromptAzureOpenAIInvocationParametersSchema,
        PromptAnthropicInvocationParametersSchema,
        PromptGoogleInvocationParametersSchema,
        PromptDeepSeekInvocationParametersSchema,
        PromptXAIInvocationParametersSchema,
        PromptOllamaInvocationParametersSchema,
        PromptAwsInvocationParametersSchema,
        PromptCerebrasInvocationParametersSchema,
        PromptFireworksInvocationParametersSchema,
        PromptGroqInvocationParametersSchema,
        PromptMoonshotInvocationParametersSchema,
        PromptPerplexityInvocationParametersSchema,
        PromptTogetherInvocationParametersSchema,
        PromptZAIInvocationParametersSchema,
        PromptMetaInvocationParametersSchema,
      ])
      .openapi({
        title: 'Invocation Parameters',
        discriminator: {
          propertyName: 'type',
          mapping: {
            anthropic: '#/components/schemas/PromptAnthropicInvocationParameters',
            aws: '#/components/schemas/PromptAwsInvocationParameters',
            azure_openai: '#/components/schemas/PromptAzureOpenAIInvocationParameters',
            cerebras: '#/components/schemas/PromptCerebrasInvocationParameters',
            deepseek: '#/components/schemas/PromptDeepSeekInvocationParameters',
            fireworks: '#/components/schemas/PromptFireworksInvocationParameters',
            google: '#/components/schemas/PromptGoogleInvocationParameters',
            groq: '#/components/schemas/PromptGroqInvocationParameters',
            meta: '#/components/schemas/PromptMetaInvocationParameters',
            moonshot: '#/components/schemas/PromptMoonshotInvocationParameters',
            ollama: '#/components/schemas/PromptOllamaInvocationParameters',
            openai: '#/components/schemas/PromptOpenAIInvocationParameters',
            perplexity: '#/components/schemas/PromptPerplexityInvocationParameters',
            together: '#/components/schemas/PromptTogetherInvocationParameters',
            xai: '#/components/schemas/PromptXAIInvocationParameters',
            zai: '#/components/schemas/PromptZAIInvocationParameters',
          },
        },
      }),
    tools: z.union([PromptToolsSchema, z.null().nullable()]).exactOptional(),
    response_format: z
      .union([
        z
          .xor([PromptResponseFormatJSONSchemaSchema])
          .openapi({
            discriminator: {
              propertyName: 'type',
              mapping: { json_schema: '#/components/schemas/PromptResponseFormatJSONSchema' },
            },
          }),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({ title: 'Response Format' }),
  })
  .openapi({
    required: [
      'model_provider',
      'model_name',
      'template',
      'template_type',
      'template_format',
      'invocation_parameters',
    ],
    title: 'PromptVersionData',
  })
  .openapi('PromptVersionData')

const CreatePromptRequestBodySchema = z
  .object({ prompt: PromptDataSchema, version: PromptVersionDataSchema })
  .openapi({ required: ['prompt', 'version'], title: 'CreatePromptRequestBody' })
  .openapi('CreatePromptRequestBody')

const PromptVersionSchema = z
  .object({
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    metadata: z
      .looseObject({})
      .exactOptional()
      .openapi({
        title: 'Metadata',
        description: 'Arbitrary JSON metadata for the prompt version.',
      }),
    model_provider: ModelProviderSchema,
    model_name: z.string().openapi({ title: 'Model Name' }),
    template: z
      .discriminatedUnion('type', [PromptChatTemplateSchema, PromptStringTemplateSchema])
      .openapi({
        title: 'Template',
        discriminator: {
          propertyName: 'type',
          mapping: {
            chat: '#/components/schemas/PromptChatTemplate',
            string: '#/components/schemas/PromptStringTemplate',
          },
        },
      }),
    template_type: PromptTemplateTypeSchema,
    template_format: PromptTemplateFormatSchema,
    invocation_parameters: z
      .discriminatedUnion('type', [
        PromptOpenAIInvocationParametersSchema,
        PromptAzureOpenAIInvocationParametersSchema,
        PromptAnthropicInvocationParametersSchema,
        PromptGoogleInvocationParametersSchema,
        PromptDeepSeekInvocationParametersSchema,
        PromptXAIInvocationParametersSchema,
        PromptOllamaInvocationParametersSchema,
        PromptAwsInvocationParametersSchema,
        PromptCerebrasInvocationParametersSchema,
        PromptFireworksInvocationParametersSchema,
        PromptGroqInvocationParametersSchema,
        PromptMoonshotInvocationParametersSchema,
        PromptPerplexityInvocationParametersSchema,
        PromptTogetherInvocationParametersSchema,
        PromptZAIInvocationParametersSchema,
        PromptMetaInvocationParametersSchema,
      ])
      .openapi({
        title: 'Invocation Parameters',
        discriminator: {
          propertyName: 'type',
          mapping: {
            anthropic: '#/components/schemas/PromptAnthropicInvocationParameters',
            aws: '#/components/schemas/PromptAwsInvocationParameters',
            azure_openai: '#/components/schemas/PromptAzureOpenAIInvocationParameters',
            cerebras: '#/components/schemas/PromptCerebrasInvocationParameters',
            deepseek: '#/components/schemas/PromptDeepSeekInvocationParameters',
            fireworks: '#/components/schemas/PromptFireworksInvocationParameters',
            google: '#/components/schemas/PromptGoogleInvocationParameters',
            groq: '#/components/schemas/PromptGroqInvocationParameters',
            meta: '#/components/schemas/PromptMetaInvocationParameters',
            moonshot: '#/components/schemas/PromptMoonshotInvocationParameters',
            ollama: '#/components/schemas/PromptOllamaInvocationParameters',
            openai: '#/components/schemas/PromptOpenAIInvocationParameters',
            perplexity: '#/components/schemas/PromptPerplexityInvocationParameters',
            together: '#/components/schemas/PromptTogetherInvocationParameters',
            xai: '#/components/schemas/PromptXAIInvocationParameters',
            zai: '#/components/schemas/PromptZAIInvocationParameters',
          },
        },
      }),
    tools: z.union([PromptToolsSchema, z.null().nullable()]).exactOptional(),
    response_format: z
      .union([
        z
          .xor([PromptResponseFormatJSONSchemaSchema])
          .openapi({
            discriminator: {
              propertyName: 'type',
              mapping: { json_schema: '#/components/schemas/PromptResponseFormatJSONSchema' },
            },
          }),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({ title: 'Response Format' }),
    id: z.string().openapi({ title: 'Id' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        title: 'Created At',
        description: 'The creation timestamp of the prompt version.',
      }),
  })
  .openapi({
    required: [
      'model_provider',
      'model_name',
      'template',
      'template_type',
      'template_format',
      'invocation_parameters',
      'id',
      'created_at',
    ],
    title: 'PromptVersion',
  })
  .openapi('PromptVersion')

const CreatePromptResponseBodySchema = z
  .object({ data: PromptVersionSchema })
  .openapi({ required: ['data'], title: 'CreatePromptResponseBody' })
  .openapi('CreatePromptResponseBody')

const PromptVersionTagDataSchema = z
  .object({
    name: IdentifierSchema,
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
  })
  .openapi({ required: ['name'], title: 'PromptVersionTagData' })
  .openapi('PromptVersionTagData')

const CreatePromptVersionRequestBodySchema = z
  .object({
    version: PromptVersionDataSchema,
    tags: z
      .union([z.array(PromptVersionTagDataSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Tags' }),
  })
  .openapi({ required: ['version'], title: 'CreatePromptVersionRequestBody' })
  .openapi('CreatePromptVersionRequestBody')

const CreatePromptVersionResponseBodySchema = z
  .object({ data: PromptVersionSchema })
  .openapi({ required: ['data'], title: 'CreatePromptVersionResponseBody' })
  .openapi('CreatePromptVersionResponseBody')

const SessionNoteDataSchema = z
  .object({
    session_id: z.string().min(1).openapi({ title: 'Session Id', description: 'Session ID' }),
    note: z
      .string()
      .min(1)
      .openapi({ title: 'Note', description: 'The note text to add to the session' }),
    identifier: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        title: 'Identifier',
        description:
          "Optional caller-supplied identifier. When non-empty, the note is upserted on (session_id, name='note', identifier) — repeated calls with the same identifier overwrite the existing note. When omitted or empty, the server stamps a unique 'px-session-note:<uuid>' identifier so each call appends a new note.",
      }),
  })
  .openapi({ required: ['session_id', 'note'], title: 'SessionNoteData' })
  .openapi('SessionNoteData')

const CreateSessionNoteRequestBodySchema = z
  .object({ data: SessionNoteDataSchema })
  .openapi({ required: ['data'], title: 'CreateSessionNoteRequestBody' })
  .openapi('CreateSessionNoteRequestBody')

const CreateSessionNoteResponseBodySchema = z
  .object({ data: InsertedSessionAnnotationSchema })
  .openapi({ required: ['data'], title: 'CreateSessionNoteResponseBody' })
  .openapi('CreateSessionNoteResponseBody')

const SpanNoteDataSchema = z
  .object({
    span_id: z
      .string()
      .min(1)
      .openapi({
        title: 'Span Id',
        description: 'OpenTelemetry Span ID (hex format w/o 0x prefix)',
      }),
    note: z
      .string()
      .min(1)
      .openapi({ title: 'Note', description: 'The note text to add to the span' }),
    identifier: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        title: 'Identifier',
        description:
          "Optional caller-supplied identifier. When non-empty, the note is upserted on (span_id, name='note', identifier) — repeated calls with the same identifier overwrite the existing note. When omitted or empty, the server stamps a unique 'px-span-note:<uuid>' identifier so each call appends a new note.",
      }),
  })
  .openapi({ required: ['span_id', 'note'], title: 'SpanNoteData' })
  .openapi('SpanNoteData')

const CreateSpanNoteRequestBodySchema = z
  .object({ data: SpanNoteDataSchema })
  .openapi({ required: ['data'], title: 'CreateSpanNoteRequestBody' })
  .openapi('CreateSpanNoteRequestBody')

const CreateSpanNoteResponseBodySchema = z
  .object({ data: InsertedSpanAnnotationSchema })
  .openapi({ required: ['data'], title: 'CreateSpanNoteResponseBody' })
  .openapi('CreateSpanNoteResponseBody')

const SpanContextSchema = z
  .object({
    trace_id: z.string().openapi({ title: 'Trace Id', description: 'OpenTelemetry trace ID' }),
    span_id: z.string().openapi({ title: 'Span Id', description: 'OpenTelemetry span ID' }),
  })
  .openapi({
    required: ['trace_id', 'span_id'],
    title: 'SpanContext',
    examples: [{ span_id: '1a2b3c4d5e6f7a8b', trace_id: 'a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4' }],
  })
  .openapi('SpanContext')

const SpanEventSchema = z
  .object({
    name: z.string().openapi({ title: 'Name', description: 'Name of the event' }),
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({
        title: 'Timestamp',
        description: 'When the event occurred (must be timezone-aware)',
      }),
    attributes: z
      .looseObject({})
      .exactOptional()
      .openapi({ title: 'Attributes', description: 'Event attributes' }),
  })
  .openapi({
    required: ['name', 'timestamp'],
    title: 'SpanEvent',
    examples: [
      {
        attributes: { 'exception.message': 'Connection refused' },
        name: 'exception',
        timestamp: '2024-01-01T12:00:00Z',
      },
    ],
  })
  .openapi('SpanEvent')

const SpanSchema = z
  .object({
    id: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        title: 'Id',
        description: 'Span Global ID, distinct from the OpenTelemetry span ID',
      }),
    name: z.string().openapi({ title: 'Name', description: 'Name of the span operation' }),
    context: SpanContextSchema.openapi({
      description: 'Span context containing trace_id and span_id',
    }),
    span_kind: z
      .string()
      .openapi({ title: 'Span Kind', description: 'Type of work that the span encapsulates' }),
    parent_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Parent Id', description: 'OpenTelemetry span ID of the parent span' }),
    start_time: z.iso
      .datetime({ offset: true })
      .openapi({
        title: 'Start Time',
        description: 'Start time of the span (must be timezone-aware)',
      }),
    end_time: z.iso
      .datetime({ offset: true })
      .openapi({ title: 'End Time', description: 'End time of the span (must be timezone-aware)' }),
    status_code: z
      .string()
      .openapi({ title: 'Status Code', description: 'Status code of the span' }),
    status_message: z
      .string()
      .default('')
      .exactOptional()
      .openapi({ title: 'Status Message', description: 'Status message' }),
    attributes: z
      .looseObject({})
      .exactOptional()
      .openapi({ title: 'Attributes', description: 'Span attributes' }),
    events: z
      .array(SpanEventSchema)
      .exactOptional()
      .openapi({ title: 'Events', description: 'Span events' }),
  })
  .openapi({
    required: ['name', 'context', 'span_kind', 'start_time', 'end_time', 'status_code'],
    title: 'Span',
    examples: [
      {
        attributes: {
          'llm.model_name': 'gpt-4',
          'llm.token_count.completion': 50,
          'llm.token_count.prompt': 100,
        },
        context: { span_id: '1a2b3c4d5e6f7a8b', trace_id: 'a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4' },
        end_time: '2024-01-01T12:00:01Z',
        events: [],
        name: 'llm_call',
        span_kind: 'LLM',
        start_time: '2024-01-01T12:00:00Z',
        status_code: 'OK',
        status_message: '',
      },
    ],
  })
  .openapi('Span')

const CreateSpansRequestBodySchema = z
  .object({ data: z.array(SpanSchema).openapi({ title: 'Data' }) })
  .openapi({ required: ['data'], title: 'CreateSpansRequestBody' })
  .openapi('CreateSpansRequestBody')

const CreateSpansResponseBodySchema = z
  .object({
    total_received: z
      .int()
      .openapi({ title: 'Total Received', description: 'Total number of spans received' }),
    total_queued: z
      .int()
      .openapi({
        title: 'Total Queued',
        description: 'Number of spans successfully queued for insertion',
      }),
  })
  .openapi({ required: ['total_received', 'total_queued'], title: 'CreateSpansResponseBody' })
  .openapi('CreateSpansResponseBody')

const TraceNoteDataSchema = z
  .object({
    trace_id: z
      .string()
      .min(1)
      .openapi({
        title: 'Trace Id',
        description: 'OpenTelemetry Trace ID (hex format w/o 0x prefix)',
      }),
    note: z
      .string()
      .min(1)
      .openapi({ title: 'Note', description: 'The note text to add to the trace' }),
    identifier: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        title: 'Identifier',
        description:
          "Optional caller-supplied identifier. When non-empty, the note is upserted on (trace_id, name='note', identifier) — repeated calls with the same identifier overwrite the existing note. When omitted or empty, the server stamps a unique 'px-trace-note:<uuid>' identifier so each call appends a new note.",
      }),
  })
  .openapi({ required: ['trace_id', 'note'], title: 'TraceNoteData' })
  .openapi('TraceNoteData')

const CreateTraceNoteRequestBodySchema = z
  .object({ data: TraceNoteDataSchema })
  .openapi({ required: ['data'], title: 'CreateTraceNoteRequestBody' })
  .openapi('CreateTraceNoteRequestBody')

const CreateTraceNoteResponseBodySchema = z
  .object({ data: InsertedTraceAnnotationSchema })
  .openapi({ required: ['data'], title: 'CreateTraceNoteResponseBody' })
  .openapi('CreateTraceNoteResponseBody')

const LocalUserDataSchema = z
  .object({
    email: z.string().openapi({ title: 'Email' }),
    username: z.string().openapi({ title: 'Username' }),
    role: z.enum(['SYSTEM', 'ADMIN', 'MEMBER', 'VIEWER']).openapi({ title: 'Role' }),
    auth_method: z.literal('LOCAL').openapi({ title: 'Auth Method' }),
    password: z.string().exactOptional().openapi({ title: 'Password' }),
  })
  .openapi({ required: ['email', 'username', 'role', 'auth_method'], title: 'LocalUserData' })
  .openapi('LocalUserData')

const OAuth2UserDataSchema = z
  .object({
    email: z.string().openapi({ title: 'Email' }),
    username: z.string().openapi({ title: 'Username' }),
    role: z.enum(['SYSTEM', 'ADMIN', 'MEMBER', 'VIEWER']).openapi({ title: 'Role' }),
    auth_method: z.literal('OAUTH2').openapi({ title: 'Auth Method' }),
    oauth2_client_id: z.string().exactOptional().openapi({ title: 'Oauth2 Client Id' }),
    oauth2_user_id: z.string().exactOptional().openapi({ title: 'Oauth2 User Id' }),
  })
  .openapi({ required: ['email', 'username', 'role', 'auth_method'], title: 'OAuth2UserData' })
  .openapi('OAuth2UserData')

const LDAPUserDataSchema = z
  .object({
    email: z.string().openapi({ title: 'Email' }),
    username: z.string().openapi({ title: 'Username' }),
    role: z.enum(['SYSTEM', 'ADMIN', 'MEMBER', 'VIEWER']).openapi({ title: 'Role' }),
    auth_method: z.literal('LDAP').openapi({ title: 'Auth Method' }),
  })
  .openapi({ required: ['email', 'username', 'role', 'auth_method'], title: 'LDAPUserData' })
  .openapi('LDAPUserData')

const CreateUserRequestBodySchema = z
  .object({
    user: z
      .discriminatedUnion('auth_method', [
        LocalUserDataSchema,
        OAuth2UserDataSchema,
        LDAPUserDataSchema,
      ])
      .openapi({
        title: 'User',
        discriminator: {
          propertyName: 'auth_method',
          mapping: {
            LDAP: '#/components/schemas/LDAPUserData',
            LOCAL: '#/components/schemas/LocalUserData',
            OAUTH2: '#/components/schemas/OAuth2UserData',
          },
        },
      }),
    send_welcome_email: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ title: 'Send Welcome Email' }),
  })
  .openapi({ required: ['user'], title: 'CreateUserRequestBody' })
  .openapi('CreateUserRequestBody')

const LocalUserSchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
    email: z.string().openapi({ title: 'Email' }),
    username: z.string().openapi({ title: 'Username' }),
    role: z.enum(['SYSTEM', 'ADMIN', 'MEMBER', 'VIEWER']).openapi({ title: 'Role' }),
    auth_method: z.literal('LOCAL').openapi({ title: 'Auth Method' }),
    password: z.string().exactOptional().openapi({ title: 'Password' }),
    password_needs_reset: z.boolean().openapi({ title: 'Password Needs Reset' }),
  })
  .openapi({
    required: [
      'id',
      'created_at',
      'updated_at',
      'email',
      'username',
      'role',
      'auth_method',
      'password_needs_reset',
    ],
    title: 'LocalUser',
  })
  .openapi('LocalUser')

const OAuth2UserSchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
    email: z.string().openapi({ title: 'Email' }),
    username: z.string().openapi({ title: 'Username' }),
    role: z.enum(['SYSTEM', 'ADMIN', 'MEMBER', 'VIEWER']).openapi({ title: 'Role' }),
    auth_method: z.literal('OAUTH2').openapi({ title: 'Auth Method' }),
    oauth2_client_id: z.string().exactOptional().openapi({ title: 'Oauth2 Client Id' }),
    oauth2_user_id: z.string().exactOptional().openapi({ title: 'Oauth2 User Id' }),
    profile_picture_url: z.string().exactOptional().openapi({ title: 'Profile Picture Url' }),
  })
  .openapi({
    required: ['id', 'created_at', 'updated_at', 'email', 'username', 'role', 'auth_method'],
    title: 'OAuth2User',
  })
  .openapi('OAuth2User')

const LDAPUserSchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
    email: z.string().openapi({ title: 'Email' }),
    username: z.string().openapi({ title: 'Username' }),
    role: z.enum(['SYSTEM', 'ADMIN', 'MEMBER', 'VIEWER']).openapi({ title: 'Role' }),
    auth_method: z.literal('LDAP').openapi({ title: 'Auth Method' }),
  })
  .openapi({
    required: ['id', 'created_at', 'updated_at', 'email', 'username', 'role', 'auth_method'],
    title: 'LDAPUser',
  })
  .openapi('LDAPUser')

const CreateUserResponseBodySchema = z
  .object({
    data: z
      .discriminatedUnion('auth_method', [LocalUserSchema, OAuth2UserSchema, LDAPUserSchema])
      .openapi({
        title: 'Data',
        discriminator: {
          propertyName: 'auth_method',
          mapping: {
            LDAP: '#/components/schemas/LDAPUser',
            LOCAL: '#/components/schemas/LocalUser',
            OAUTH2: '#/components/schemas/OAuth2User',
          },
        },
      }),
  })
  .openapi({ required: ['data'], title: 'CreateUserResponseBody' })
  .openapi('CreateUserResponseBody')

const CustomModelProviderSchema = z
  .object({
    id: z.string().openapi({ title: 'Id', description: 'The ID of the custom provider.' }),
    name: z
      .string()
      .openapi({ title: 'Name', description: 'The unique name of the custom provider.' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Description',
        description: 'An optional description of the custom provider.',
      }),
    provider: z
      .string()
      .openapi({
        title: 'Provider',
        description:
          'The free-form provider label recorded on the custom provider. Unlike the `provider` of a built-in family, this is not drawn from a fixed set.',
      }),
    sdk: z
      .enum(['openai', 'azure_openai', 'anthropic', 'google_genai', 'aws_bedrock'])
      .openapi({
        title: 'Sdk',
        description: 'The SDK used to communicate with the custom provider.',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ title: 'Created At', description: 'The time the custom provider was created.' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        title: 'Updated At',
        description: 'The time the custom provider was last updated.',
      }),
  })
  .openapi({
    required: ['id', 'name', 'provider', 'sdk', 'created_at', 'updated_at'],
    title: 'CustomModelProvider',
  })
  .openapi('CustomModelProvider')

const DatasetSchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    name: z.string().openapi({ title: 'Name' }),
    description: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Description' }),
    metadata: z.looseObject({}).openapi({ title: 'Metadata' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
    example_count: z.int().openapi({ title: 'Example Count' }),
  })
  .openapi({
    required: [
      'id',
      'name',
      'description',
      'metadata',
      'created_at',
      'updated_at',
      'example_count',
    ],
    title: 'Dataset',
  })
  .openapi('Dataset')

const DatasetExampleSourceSchema = z
  .object({
    span_id: z.string().openapi({ title: 'Span Id' }),
    span_node_id: z.string().openapi({ title: 'Span Node Id' }),
  })
  .openapi({ required: ['span_id', 'span_node_id'], title: 'DatasetExampleSource' })
  .openapi('DatasetExampleSource')

const DatasetExampleSchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    node_id: z.string().openapi({ title: 'Node Id' }),
    input: z.looseObject({}).openapi({ title: 'Input' }),
    output: z.looseObject({}).openapi({ title: 'Output' }),
    metadata: z.looseObject({}).openapi({ title: 'Metadata' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
    source: z.union([DatasetExampleSourceSchema, z.null().nullable()]).exactOptional(),
  })
  .openapi({
    required: ['id', 'node_id', 'input', 'output', 'metadata', 'updated_at'],
    title: 'DatasetExample',
  })
  .openapi('DatasetExample')

const DatasetVersionSchema = z
  .object({
    version_id: z.string().openapi({ title: 'Version Id' }),
    description: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Description' }),
    metadata: z.looseObject({}).openapi({ title: 'Metadata' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
  })
  .openapi({
    required: ['version_id', 'description', 'metadata', 'created_at'],
    title: 'DatasetVersion',
  })
  .openapi('DatasetVersion')

const DatasetWithExampleCountSchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    name: z.string().openapi({ title: 'Name' }),
    description: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Description' }),
    metadata: z.looseObject({}).openapi({ title: 'Metadata' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
    example_count: z.int().openapi({ title: 'Example Count' }),
  })
  .openapi({
    required: [
      'id',
      'name',
      'description',
      'metadata',
      'created_at',
      'updated_at',
      'example_count',
    ],
    title: 'DatasetWithExampleCount',
  })
  .openapi('DatasetWithExampleCount')

const DeleteAnnotationConfigResponseBodySchema = z
  .object({
    data: z
      .discriminatedUnion('type', [
        CategoricalAnnotationConfigSchema,
        ContinuousAnnotationConfigSchema,
        FreeformAnnotationConfigSchema,
      ])
      .openapi({
        title: 'Data',
        discriminator: {
          propertyName: 'type',
          mapping: {
            CATEGORICAL: '#/components/schemas/CategoricalAnnotationConfig',
            CONTINUOUS: '#/components/schemas/ContinuousAnnotationConfig',
            FREEFORM: '#/components/schemas/FreeformAnnotationConfig',
          },
        },
      }),
  })
  .openapi({ required: ['data'], title: 'DeleteAnnotationConfigResponseBody' })
  .openapi('DeleteAnnotationConfigResponseBody')

const DeleteSessionsRequestBodySchema = z
  .object({
    session_identifiers: z
      .array(z.string())
      .openapi({
        title: 'Session Identifiers',
        description:
          'List of session identifiers to delete. All identifiers must be the same type: either all GlobalIDs or all user-provided session_id strings.',
      }),
  })
  .openapi({ required: ['session_identifiers'], title: 'DeleteSessionsRequestBody' })
  .openapi('DeleteSessionsRequestBody')

const ExperimentEvaluationResultSchema = z
  .object({
    label: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Label', description: 'The label assigned by the evaluation' }),
    score: z
      .union([z.number(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Score', description: 'The score assigned by the evaluation' }),
    explanation: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Explanation', description: 'Explanation of the evaluation result' }),
  })
  .openapi({ title: 'ExperimentEvaluationResult', required: [] })
  .openapi('ExperimentEvaluationResult')

const ExperimentRunSchema = z
  .object({
    dataset_example_id: z
      .string()
      .openapi({
        title: 'Dataset Example Id',
        description: 'The ID of the dataset example used in the experiment run',
      }),
    output: z.any().openapi({ title: 'Output', description: 'The output of the experiment task' }),
    repetition_number: z
      .int()
      .gt(0)
      .openapi({
        title: 'Repetition Number',
        description: 'The repetition number of the experiment run',
      }),
    start_time: z.iso
      .datetime({ offset: true })
      .openapi({ title: 'Start Time', description: 'The start time of the experiment run' }),
    end_time: z.iso
      .datetime({ offset: true })
      .openapi({ title: 'End Time', description: 'The end time of the experiment run' }),
    trace_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Trace Id',
        description: 'The ID of the corresponding trace (if one exists)',
      }),
    error: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Error',
        description: 'Optional error message if the experiment run encountered an error',
      }),
    id: z.string().openapi({ title: 'Id', description: 'The ID of the experiment run' }),
    experiment_id: z
      .string()
      .openapi({ title: 'Experiment Id', description: 'The ID of the experiment' }),
  })
  .openapi({
    required: [
      'dataset_example_id',
      'output',
      'repetition_number',
      'start_time',
      'end_time',
      'id',
      'experiment_id',
    ],
    title: 'ExperimentRun',
  })
  .openapi('ExperimentRun')

const ExperimentTagSchema = z
  .object({
    id: z.string().openapi({ title: 'Id', description: 'The node ID of the tag' }),
    name: z.string().openapi({ title: 'Name', description: 'The name of the tag' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .openapi({ title: 'Description', description: 'The description of the tag' }),
  })
  .openapi({ required: ['id', 'name', 'description'], title: 'ExperimentTag' })
  .openapi('ExperimentTag')

const GetAgentSessionResponseBodySchema = z
  .object({ data: AgentSessionDataSchema })
  .openapi({ required: ['data'], title: 'GetAgentSessionResponseBody' })
  .openapi('GetAgentSessionResponseBody')

const UserApiKeySchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    name: z.string().openapi({ title: 'Name' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    expires_at: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Expires At' }),
    user: ApiKeyUserSchema,
  })
  .openapi({ required: ['id', 'name', 'created_at', 'user'], title: 'UserApiKey' })
  .openapi('UserApiKey')

const GetAllUserApiKeysResponseBodySchema = z
  .object({
    data: z.array(UserApiKeySchema).openapi({ title: 'Data' }),
    next_cursor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Next Cursor' }),
  })
  .openapi({ required: ['data', 'next_cursor'], title: 'GetAllUserApiKeysResponseBody' })
  .openapi('GetAllUserApiKeysResponseBody')

const GetAnnotationConfigResponseBodySchema = z
  .object({
    data: z
      .discriminatedUnion('type', [
        CategoricalAnnotationConfigSchema,
        ContinuousAnnotationConfigSchema,
        FreeformAnnotationConfigSchema,
      ])
      .openapi({
        title: 'Data',
        discriminator: {
          propertyName: 'type',
          mapping: {
            CATEGORICAL: '#/components/schemas/CategoricalAnnotationConfig',
            CONTINUOUS: '#/components/schemas/ContinuousAnnotationConfig',
            FREEFORM: '#/components/schemas/FreeformAnnotationConfig',
          },
        },
      }),
  })
  .openapi({ required: ['data'], title: 'GetAnnotationConfigResponseBody' })
  .openapi('GetAnnotationConfigResponseBody')

const GetAnnotationConfigsResponseBodySchema = z
  .object({
    data: z
      .array(
        z
          .discriminatedUnion('type', [
            CategoricalAnnotationConfigSchema,
            ContinuousAnnotationConfigSchema,
            FreeformAnnotationConfigSchema,
          ])
          .openapi({
            discriminator: {
              propertyName: 'type',
              mapping: {
                CATEGORICAL: '#/components/schemas/CategoricalAnnotationConfig',
                CONTINUOUS: '#/components/schemas/ContinuousAnnotationConfig',
                FREEFORM: '#/components/schemas/FreeformAnnotationConfig',
              },
            },
          }),
      )
      .openapi({ title: 'Data' }),
    next_cursor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Next Cursor' }),
  })
  .openapi({ required: ['data', 'next_cursor'], title: 'GetAnnotationConfigsResponseBody' })
  .openapi('GetAnnotationConfigsResponseBody')

const GetApiKeysResponseBodySchema = z
  .object({ data: z.array(ApiKeySchema).openapi({ title: 'Data' }) })
  .openapi({ required: ['data'], title: 'GetApiKeysResponseBody' })
  .openapi('GetApiKeysResponseBody')

const GetCustomModelProvidersResponseBodySchema = z
  .object({
    data: z.array(CustomModelProviderSchema).openapi({ title: 'Data' }),
    next_cursor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Next Cursor' }),
  })
  .openapi({ required: ['data', 'next_cursor'], title: 'GetCustomModelProvidersResponseBody' })
  .openapi('GetCustomModelProvidersResponseBody')

const GetDatasetLabelResponseBodySchema = z
  .object({ data: DatasetLabelSchema })
  .openapi({ required: ['data'], title: 'GetDatasetLabelResponseBody' })
  .openapi('GetDatasetLabelResponseBody')

const GetDatasetLabelsResponseBodySchema = z
  .object({
    data: z.array(DatasetLabelSchema).openapi({ title: 'Data' }),
    next_cursor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Next Cursor' }),
  })
  .openapi({ required: ['data', 'next_cursor'], title: 'GetDatasetLabelsResponseBody' })
  .openapi('GetDatasetLabelsResponseBody')

const GetDatasetResponseBodySchema = z
  .object({ data: DatasetWithExampleCountSchema })
  .openapi({ required: ['data'], title: 'GetDatasetResponseBody' })
  .openapi('GetDatasetResponseBody')

const GetExperimentResponseBodySchema = z
  .object({ data: ExperimentSchema })
  .openapi({ required: ['data'], title: 'GetExperimentResponseBody' })
  .openapi('GetExperimentResponseBody')

const IncompleteExperimentEvaluationSchema = z
  .object({
    experiment_run: ExperimentRunSchema.openapi({ description: 'The experiment run' }),
    dataset_example: DatasetExampleSchema.openapi({ description: 'The dataset example' }),
    evaluation_names: z
      .array(z.string())
      .openapi({
        title: 'Evaluation Names',
        description: 'List of evaluation names that are incomplete (either missing or failed)',
      }),
  })
  .openapi({
    required: ['experiment_run', 'dataset_example', 'evaluation_names'],
    title: 'IncompleteExperimentEvaluation',
    description: 'Information about an experiment run with incomplete evaluations',
  })
  .openapi('IncompleteExperimentEvaluation')

const GetIncompleteEvaluationsResponseBodySchema = z
  .object({
    data: z.array(IncompleteExperimentEvaluationSchema).openapi({ title: 'Data' }),
    next_cursor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Next Cursor' }),
  })
  .openapi({ required: ['data', 'next_cursor'], title: 'GetIncompleteEvaluationsResponseBody' })
  .openapi('GetIncompleteEvaluationsResponseBody')

const IncompleteExperimentRunSchema = z
  .object({
    dataset_example: DatasetExampleSchema.openapi({ description: 'The dataset example' }),
    repetition_numbers: z
      .array(z.int())
      .openapi({
        title: 'Repetition Numbers',
        description: 'List of repetition numbers that need to be run',
      }),
  })
  .openapi({
    required: ['dataset_example', 'repetition_numbers'],
    title: 'IncompleteExperimentRun',
    description: 'Information about incomplete runs for a dataset example',
  })
  .openapi('IncompleteExperimentRun')

const GetIncompleteExperimentRunsResponseBodySchema = z
  .object({
    data: z.array(IncompleteExperimentRunSchema).openapi({ title: 'Data' }),
    next_cursor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Next Cursor' }),
  })
  .openapi({ required: ['data', 'next_cursor'], title: 'GetIncompleteExperimentRunsResponseBody' })
  .openapi('GetIncompleteExperimentRunsResponseBody')

const GetModelProvidersResponseBodySchema = z
  .object({ data: z.array(BuiltInModelProviderSchema).openapi({ title: 'Data' }) })
  .openapi({ required: ['data'], title: 'GetModelProvidersResponseBody' })
  .openapi('GetModelProvidersResponseBody')

const GetProjectAnnotationConfigsResponseBodySchema = z
  .object({
    data: z
      .array(
        z
          .discriminatedUnion('type', [
            CategoricalAnnotationConfigSchema,
            ContinuousAnnotationConfigSchema,
            FreeformAnnotationConfigSchema,
          ])
          .openapi({
            discriminator: {
              propertyName: 'type',
              mapping: {
                CATEGORICAL: '#/components/schemas/CategoricalAnnotationConfig',
                CONTINUOUS: '#/components/schemas/ContinuousAnnotationConfig',
                FREEFORM: '#/components/schemas/FreeformAnnotationConfig',
              },
            },
          }),
      )
      .openapi({ title: 'Data' }),
    next_cursor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Next Cursor' }),
  })
  .openapi({ required: ['data', 'next_cursor'], title: 'GetProjectAnnotationConfigsResponseBody' })
  .openapi('GetProjectAnnotationConfigsResponseBody')

const GetProjectResponseBodySchema = z
  .object({ data: ProjectSchema })
  .openapi({ required: ['data'], title: 'GetProjectResponseBody' })
  .openapi('GetProjectResponseBody')

const GetProjectsResponseBodySchema = z
  .object({
    data: z.array(ProjectSchema).openapi({ title: 'Data' }),
    next_cursor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Next Cursor' }),
  })
  .openapi({ required: ['data', 'next_cursor'], title: 'GetProjectsResponseBody' })
  .openapi('GetProjectsResponseBody')

const GetPromptResponseBodySchema = z
  .object({ data: PromptVersionSchema })
  .openapi({ required: ['data'], title: 'GetPromptResponseBody' })
  .openapi('GetPromptResponseBody')

const PromptVersionTagSchema = z
  .object({
    name: IdentifierSchema,
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    id: z.string().openapi({ title: 'Id' }),
  })
  .openapi({ required: ['name', 'id'], title: 'PromptVersionTag' })
  .openapi('PromptVersionTag')

const GetPromptVersionTagsResponseBodySchema = z
  .object({
    data: z.array(PromptVersionTagSchema).openapi({ title: 'Data' }),
    next_cursor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Next Cursor' }),
  })
  .openapi({ required: ['data', 'next_cursor'], title: 'GetPromptVersionTagsResponseBody' })
  .openapi('GetPromptVersionTagsResponseBody')

const GetPromptVersionsResponseBodySchema = z
  .object({
    data: z.array(PromptVersionSchema).openapi({ title: 'Data' }),
    next_cursor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Next Cursor' }),
  })
  .openapi({ required: ['data', 'next_cursor'], title: 'GetPromptVersionsResponseBody' })
  .openapi('GetPromptVersionsResponseBody')

const PromptSchema = z
  .object({
    name: IdentifierSchema,
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
    source_prompt_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Source Prompt Id' }),
    metadata: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Metadata' }),
    id: z.string().openapi({ title: 'Id' }),
  })
  .openapi({ required: ['name', 'id'], title: 'Prompt' })
  .openapi('Prompt')

const GetPromptsResponseBodySchema = z
  .object({
    data: z.array(PromptSchema).openapi({ title: 'Data' }),
    next_cursor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Next Cursor' }),
  })
  .openapi({ required: ['data', 'next_cursor'], title: 'GetPromptsResponseBody' })
  .openapi('GetPromptsResponseBody')

const SessionTraceDataSchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    trace_id: z.string().openapi({ title: 'Trace Id' }),
    start_time: z.iso.datetime({ offset: true }).openapi({ title: 'Start Time' }),
    end_time: z.iso.datetime({ offset: true }).openapi({ title: 'End Time' }),
  })
  .openapi({ required: ['id', 'trace_id', 'start_time', 'end_time'], title: 'SessionTraceData' })
  .openapi('SessionTraceData')

const SessionDataSchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    session_id: z.string().openapi({ title: 'Session Id' }),
    project_id: z.string().openapi({ title: 'Project Id' }),
    start_time: z.iso.datetime({ offset: true }).openapi({ title: 'Start Time' }),
    end_time: z.iso.datetime({ offset: true }).openapi({ title: 'End Time' }),
    traces: z.array(SessionTraceDataSchema).openapi({ title: 'Traces' }),
    token_count_prompt: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({
        title: 'Token Count Prompt',
        description: 'Cumulative prompt token count across all spans in the session.',
      }),
    token_count_completion: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({
        title: 'Token Count Completion',
        description: 'Cumulative completion token count across all spans in the session.',
      }),
    token_count_total: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({
        title: 'Token Count Total',
        description:
          'Cumulative total token count across all spans in the session (prompt + completion).',
      }),
  })
  .openapi({
    required: ['id', 'session_id', 'project_id', 'start_time', 'end_time', 'traces'],
    title: 'SessionData',
  })
  .openapi('SessionData')

const GetSessionResponseBodySchema = z
  .object({ data: SessionDataSchema })
  .openapi({ required: ['data'], title: 'GetSessionResponseBody' })
  .openapi('GetSessionResponseBody')

const GetSessionsResponseBodySchema = z
  .object({
    data: z.array(SessionDataSchema).openapi({ title: 'Data' }),
    next_cursor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Next Cursor' }),
  })
  .openapi({ required: ['data', 'next_cursor'], title: 'GetSessionsResponseBody' })
  .openapi('GetSessionsResponseBody')

const TraceSpanDataSchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    span_id: z.string().openapi({ title: 'Span Id' }),
    parent_id: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Parent Id' }),
    name: z.string().openapi({ title: 'Name' }),
    span_kind: z.string().openapi({ title: 'Span Kind' }),
    status_code: z.string().openapi({ title: 'Status Code' }),
    start_time: z.iso.datetime({ offset: true }).openapi({ title: 'Start Time' }),
    end_time: z.iso.datetime({ offset: true }).openapi({ title: 'End Time' }),
  })
  .openapi({
    required: [
      'id',
      'span_id',
      'parent_id',
      'name',
      'span_kind',
      'status_code',
      'start_time',
      'end_time',
    ],
    title: 'TraceSpanData',
  })
  .openapi('TraceSpanData')

const TraceDataSchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    trace_id: z.string().openapi({ title: 'Trace Id' }),
    project_id: z.string().openapi({ title: 'Project Id' }),
    start_time: z.iso.datetime({ offset: true }).openapi({ title: 'Start Time' }),
    end_time: z.iso.datetime({ offset: true }).openapi({ title: 'End Time' }),
    token_count_prompt: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({
        title: 'Token Count Prompt',
        description: 'Cumulative prompt token count across all spans in the trace.',
      }),
    token_count_completion: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({
        title: 'Token Count Completion',
        description: 'Cumulative completion token count across all spans in the trace.',
      }),
    token_count_total: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({
        title: 'Token Count Total',
        description:
          'Cumulative total token count across all spans in the trace (prompt + completion).',
      }),
    spans: z
      .union([z.array(TraceSpanDataSchema), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Spans' }),
  })
  .openapi({
    required: ['id', 'trace_id', 'project_id', 'start_time', 'end_time'],
    title: 'TraceData',
  })
  .openapi('TraceData')

const GetTracesResponseBodySchema = z
  .object({
    data: z.array(TraceDataSchema).openapi({ title: 'Data' }),
    next_cursor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Next Cursor' }),
  })
  .openapi({ required: ['data', 'next_cursor'], title: 'GetTracesResponseBody' })
  .openapi('GetTracesResponseBody')

const GetUsersResponseBodySchema = z
  .object({
    data: z
      .array(
        z
          .discriminatedUnion('auth_method', [LocalUserSchema, OAuth2UserSchema, LDAPUserSchema])
          .openapi({
            discriminator: {
              propertyName: 'auth_method',
              mapping: {
                LDAP: '#/components/schemas/LDAPUser',
                LOCAL: '#/components/schemas/LocalUser',
                OAUTH2: '#/components/schemas/OAuth2User',
              },
            },
          }),
      )
      .openapi({ title: 'Data' }),
    next_cursor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Next Cursor' }),
  })
  .openapi({ required: ['data', 'next_cursor'], title: 'GetUsersResponseBody' })
  .openapi('GetUsersResponseBody')

const GetViewerResponseBodySchema = z
  .object({
    data: z
      .discriminatedUnion('auth_method', [
        LocalUserSchema,
        OAuth2UserSchema,
        LDAPUserSchema,
        AnonymousUserSchema,
      ])
      .openapi({
        title: 'Data',
        discriminator: {
          propertyName: 'auth_method',
          mapping: {
            ANONYMOUS: '#/components/schemas/AnonymousUser',
            LDAP: '#/components/schemas/LDAPUser',
            LOCAL: '#/components/schemas/LocalUser',
            OAUTH2: '#/components/schemas/OAuth2User',
          },
        },
      }),
  })
  .openapi({ required: ['data'], title: 'GetViewerResponseBody' })
  .openapi('GetViewerResponseBody')

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

const LegacyAssistantMessageMetadataSchema = z
  .looseObject({
    type: z.literal('assistant').default('assistant').exactOptional().openapi({ title: 'Type' }),
    sessionId: z.string().openapi({ title: 'Sessionid' }),
    turnTraceContext: z.union([TurnTraceContextSchema, z.null().nullable()]).exactOptional(),
    usage: z.union([AssistantMessageMetadataUsageSchema, z.null().nullable()]).exactOptional(),
    interrupted: z.boolean().default(false).exactOptional().openapi({ title: 'Interrupted' }),
  })
  .openapi({
    required: ['sessionId'],
    title: 'LegacyAssistantMessageMetadata',
    description: 'Legacy transcripts predate the ``type`` discriminator, so default it here.',
  })
  .openapi('LegacyAssistantMessageMetadata')

const PydanticAiUiVercelAiRequestTypesToolInputStreamingPartSchema = z
  .strictObject({
    type: z
      .string()
      .regex(/^tool-/)
      .openapi({ title: 'Type' }),
    toolCallId: z.string().openapi({ title: 'Toolcallid' }),
    title: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Title' }),
    state: z
      .literal('input-streaming')
      .default('input-streaming')
      .exactOptional()
      .openapi({ title: 'State' }),
    input: z.union([z.any(), z.null().nullable()]).exactOptional().openapi({ title: 'Input' }),
    providerExecuted: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Providerexecuted' }),
    callProviderMetadata: z
      .union([z.record(z.string(), z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Callprovidermetadata' }),
    approval: z
      .union([ToolApprovalRequestedSchema, ToolApprovalRespondedSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Approval' }),
  })
  .openapi({
    required: ['type', 'toolCallId'],
    title: 'ToolInputStreamingPart',
    description: 'Tool part in input-streaming state.',
  })
  .openapi('PydanticAiUiVercelAiRequestTypesToolInputStreamingPart')

const PydanticAiUiVercelAiRequestTypesToolOutputAvailablePartSchema = z
  .strictObject({
    type: z
      .string()
      .regex(/^tool-/)
      .openapi({ title: 'Type' }),
    toolCallId: z.string().openapi({ title: 'Toolcallid' }),
    title: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Title' }),
    state: z
      .literal('output-available')
      .default('output-available')
      .exactOptional()
      .openapi({ title: 'State' }),
    input: z.union([z.any(), z.null().nullable()]).exactOptional().openapi({ title: 'Input' }),
    output: z.union([z.any(), z.null().nullable()]).exactOptional().openapi({ title: 'Output' }),
    providerExecuted: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Providerexecuted' }),
    callProviderMetadata: z
      .union([z.record(z.string(), z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Callprovidermetadata' }),
    preliminary: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Preliminary' }),
    approval: z
      .union([ToolApprovalRequestedSchema, ToolApprovalRespondedSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Approval' }),
  })
  .openapi({
    required: ['type', 'toolCallId'],
    title: 'ToolOutputAvailablePart',
    description: 'Tool part in output-available state.',
  })
  .openapi('PydanticAiUiVercelAiRequestTypesToolOutputAvailablePart')

const PydanticAiUiVercelAiRequestTypesToolOutputErrorPartSchema = z
  .strictObject({
    type: z
      .string()
      .regex(/^tool-/)
      .openapi({ title: 'Type' }),
    toolCallId: z.string().openapi({ title: 'Toolcallid' }),
    title: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Title' }),
    state: z
      .literal('output-error')
      .default('output-error')
      .exactOptional()
      .openapi({ title: 'State' }),
    input: z.union([z.any(), z.null().nullable()]).exactOptional().openapi({ title: 'Input' }),
    rawInput: z
      .union([z.any(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Rawinput' }),
    errorText: z.string().openapi({ title: 'Errortext' }),
    providerExecuted: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Providerexecuted' }),
    callProviderMetadata: z
      .union([z.record(z.string(), z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Callprovidermetadata' }),
    approval: z
      .union([ToolApprovalRequestedSchema, ToolApprovalRespondedSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Approval' }),
  })
  .openapi({
    required: ['type', 'toolCallId', 'errorText'],
    title: 'ToolOutputErrorPart',
    description: 'Tool part in output-error state.',
  })
  .openapi('PydanticAiUiVercelAiRequestTypesToolOutputErrorPart')

const PydanticAiUiVercelAiRequestTypesDynamicToolInputStreamingPartSchema = z
  .strictObject({
    type: z
      .literal('dynamic-tool')
      .default('dynamic-tool')
      .exactOptional()
      .openapi({ title: 'Type' }),
    toolName: z.string().openapi({ title: 'Toolname' }),
    toolCallId: z.string().openapi({ title: 'Toolcallid' }),
    title: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Title' }),
    state: z
      .literal('input-streaming')
      .default('input-streaming')
      .exactOptional()
      .openapi({ title: 'State' }),
    input: z.union([z.any(), z.null().nullable()]).exactOptional().openapi({ title: 'Input' }),
    providerExecuted: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Providerexecuted' }),
    callProviderMetadata: z
      .union([z.record(z.string(), z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Callprovidermetadata' }),
    approval: z
      .union([ToolApprovalRequestedSchema, ToolApprovalRespondedSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Approval' }),
  })
  .openapi({
    required: ['toolName', 'toolCallId'],
    title: 'DynamicToolInputStreamingPart',
    description: 'Dynamic tool part in input-streaming state.',
  })
  .openapi('PydanticAiUiVercelAiRequestTypesDynamicToolInputStreamingPart')

const PydanticAiUiVercelAiRequestTypesDynamicToolOutputAvailablePartSchema = z
  .strictObject({
    type: z
      .literal('dynamic-tool')
      .default('dynamic-tool')
      .exactOptional()
      .openapi({ title: 'Type' }),
    toolName: z.string().openapi({ title: 'Toolname' }),
    toolCallId: z.string().openapi({ title: 'Toolcallid' }),
    title: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Title' }),
    state: z
      .literal('output-available')
      .default('output-available')
      .exactOptional()
      .openapi({ title: 'State' }),
    input: z.any().openapi({ title: 'Input' }),
    output: z.any().openapi({ title: 'Output' }),
    providerExecuted: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Providerexecuted' }),
    callProviderMetadata: z
      .union([z.record(z.string(), z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Callprovidermetadata' }),
    preliminary: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Preliminary' }),
    approval: z
      .union([ToolApprovalRequestedSchema, ToolApprovalRespondedSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Approval' }),
  })
  .openapi({
    required: ['toolName', 'toolCallId', 'input', 'output'],
    title: 'DynamicToolOutputAvailablePart',
    description: 'Dynamic tool part in output-available state.',
  })
  .openapi('PydanticAiUiVercelAiRequestTypesDynamicToolOutputAvailablePart')

const PydanticAiUiVercelAiRequestTypesDynamicToolOutputErrorPartSchema = z
  .strictObject({
    type: z
      .literal('dynamic-tool')
      .default('dynamic-tool')
      .exactOptional()
      .openapi({ title: 'Type' }),
    toolName: z.string().openapi({ title: 'Toolname' }),
    toolCallId: z.string().openapi({ title: 'Toolcallid' }),
    title: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Title' }),
    state: z
      .literal('output-error')
      .default('output-error')
      .exactOptional()
      .openapi({ title: 'State' }),
    input: z.any().openapi({ title: 'Input' }),
    errorText: z.string().openapi({ title: 'Errortext' }),
    providerExecuted: z
      .union([z.boolean(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Providerexecuted' }),
    callProviderMetadata: z
      .union([z.record(z.string(), z.looseObject({})), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Callprovidermetadata' }),
    approval: z
      .union([ToolApprovalRequestedSchema, ToolApprovalRespondedSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Approval' }),
  })
  .openapi({
    required: ['toolName', 'toolCallId', 'input', 'errorText'],
    title: 'DynamicToolOutputErrorPart',
    description: 'Dynamic tool part in output-error state.',
  })
  .openapi('PydanticAiUiVercelAiRequestTypesDynamicToolOutputErrorPart')

const LegacyAssistantMetadataUIMessageSchema = z
  .strictObject({
    id: z.string().openapi({ title: 'Id' }),
    role: z.enum(['system', 'user', 'assistant']).openapi({ title: 'Role' }),
    metadata: z.union([LegacyAssistantMessageMetadataSchema, z.null().nullable()]).exactOptional(),
    parts: z
      .array(
        z.union([
          TextUIPartSchema,
          ReasoningUIPartSchema,
          PydanticAiUiVercelAiRequestTypesToolInputStreamingPartSchema,
          ToolInputAvailablePartSchema,
          PydanticAiUiVercelAiRequestTypesToolOutputAvailablePartSchema,
          PydanticAiUiVercelAiRequestTypesToolOutputErrorPartSchema,
          ToolApprovalRequestedPartSchema,
          ToolApprovalRespondedPartSchema,
          ToolOutputDeniedPartSchema,
          PydanticAiUiVercelAiRequestTypesDynamicToolInputStreamingPartSchema,
          DynamicToolInputAvailablePartSchema,
          PydanticAiUiVercelAiRequestTypesDynamicToolOutputAvailablePartSchema,
          PydanticAiUiVercelAiRequestTypesDynamicToolOutputErrorPartSchema,
          DynamicToolApprovalRequestedPartSchema,
          DynamicToolApprovalRespondedPartSchema,
          DynamicToolOutputDeniedPartSchema,
          SourceUrlUIPartSchema,
          SourceDocumentUIPartSchema,
          FileUIPartSchema,
          DataUIPartSchema,
          StepStartUIPartSchema,
        ]),
      )
      .openapi({ title: 'Parts' }),
  })
  .openapi({
    required: ['id', 'role', 'parts'],
    title: 'LegacyAssistantMetadataUIMessage',
    description: '``UIMessage`` with ``metadata`` narrowed to ``PhoenixAssistantMessageMetadata``.',
  })
  .openapi('LegacyAssistantMetadataUIMessage')

const LegacyChatRegenerateMessageSchema = z
  .looseObject({
    trigger: z.literal('regenerate-message').openapi({ title: 'Trigger' }),
    id: z.string().openapi({ title: 'Id' }),
    messages: z.array(LegacyAssistantMetadataUIMessageSchema).openapi({ title: 'Messages' }),
    messageId: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Messageid' }),
    ingestTraces: z.boolean().default(false).exactOptional().openapi({ title: 'Ingesttraces' }),
    exportRemoteTraces: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Exportremotetraces' }),
    attachUserId: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Attachuserid',
        description:
          "When true and the request is authenticated as a PhoenixUser, attaches the user's email as the OpenInference ``user.id`` span attribute on all traced work for this request.",
      }),
    contexts: z.array(ChatContextSchema).exactOptional().openapi({ title: 'Contexts' }),
    editPermission: z
      .enum(['manual', 'bypass'])
      .default('manual')
      .exactOptional()
      .openapi({ title: 'Editpermission' }),
    requestedSkills: z
      .array(z.string())
      .exactOptional()
      .openapi({
        title: 'Requestedskills',
        description:
          "Skills the user explicitly requested via the prompt's slash-command affordance. Ignored by this legacy route.",
      }),
    model: AgentModelSelectionSchema,
  })
  .openapi({
    required: ['trigger', 'id', 'messages', 'model'],
    title: 'LegacyChatRegenerateMessage',
    description: 'Regenerate message extended with Phoenix-specific fields.',
  })
  .openapi('LegacyChatRegenerateMessage')

const LegacyChatSubmitMessageSchema = z
  .looseObject({
    trigger: z
      .literal('submit-message')
      .default('submit-message')
      .exactOptional()
      .openapi({ title: 'Trigger' }),
    id: z.string().openapi({ title: 'Id' }),
    messages: z.array(LegacyAssistantMetadataUIMessageSchema).openapi({ title: 'Messages' }),
    ingestTraces: z.boolean().default(false).exactOptional().openapi({ title: 'Ingesttraces' }),
    exportRemoteTraces: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ title: 'Exportremotetraces' }),
    attachUserId: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Attachuserid',
        description:
          "When true and the request is authenticated as a PhoenixUser, attaches the user's email as the OpenInference ``user.id`` span attribute on all traced work for this request.",
      }),
    contexts: z.array(ChatContextSchema).exactOptional().openapi({ title: 'Contexts' }),
    editPermission: z
      .enum(['manual', 'bypass'])
      .default('manual')
      .exactOptional()
      .openapi({ title: 'Editpermission' }),
    requestedSkills: z
      .array(z.string())
      .exactOptional()
      .openapi({
        title: 'Requestedskills',
        description:
          "Skills the user explicitly requested via the prompt's slash-command affordance. Ignored by this legacy route.",
      }),
    model: AgentModelSelectionSchema,
  })
  .openapi({
    required: ['id', 'messages', 'model'],
    title: 'LegacyChatSubmitMessage',
    description: 'Submit message extended with Phoenix-specific fields.',
  })
  .openapi('LegacyChatSubmitMessage')

const LegacyChatRequestSchema = z
  .xor([LegacyChatSubmitMessageSchema, LegacyChatRegenerateMessageSchema])
  .openapi({
    title: 'LegacyChatRequest',
    description: 'Discriminated union of legacy chat request payloads.',
    discriminator: {
      propertyName: 'trigger',
      mapping: {
        'regenerate-message': '#/components/schemas/LegacyChatRegenerateMessage',
        'submit-message': '#/components/schemas/LegacyChatSubmitMessage',
      },
    },
  })
  .openapi('LegacyChatRequest')

const ListAgentSessionMessagesResponseBodySchema = z
  .object({
    data: z.array(PhoenixUIMessageSchema).openapi({ title: 'Data' }),
    next_cursor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Next Cursor' }),
  })
  .openapi({ required: ['data', 'next_cursor'], title: 'ListAgentSessionMessagesResponseBody' })
  .openapi('ListAgentSessionMessagesResponseBody')

const ListAgentSessionsResponseBodySchema = z
  .object({
    data: z.array(AgentSessionSummarySchema).openapi({ title: 'Data' }),
    next_cursor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Next Cursor' }),
  })
  .openapi({ required: ['data', 'next_cursor'], title: 'ListAgentSessionsResponseBody' })
  .openapi('ListAgentSessionsResponseBody')

const ListDatasetExamplesDataSchema = z
  .object({
    dataset_id: z.string().openapi({ title: 'Dataset Id' }),
    version_id: z.string().openapi({ title: 'Version Id' }),
    filtered_splits: z.array(z.string()).exactOptional().openapi({ title: 'Filtered Splits' }),
    examples: z.array(DatasetExampleSchema).openapi({ title: 'Examples' }),
  })
  .openapi({ required: ['dataset_id', 'version_id', 'examples'], title: 'ListDatasetExamplesData' })
  .openapi('ListDatasetExamplesData')

const ListDatasetExamplesResponseBodySchema = z
  .object({ data: ListDatasetExamplesDataSchema })
  .openapi({ required: ['data'], title: 'ListDatasetExamplesResponseBody' })
  .openapi('ListDatasetExamplesResponseBody')

const ListDatasetLabelsForDatasetResponseBodySchema = z
  .object({ data: z.array(DatasetLabelSchema).openapi({ title: 'Data' }) })
  .openapi({ required: ['data'], title: 'ListDatasetLabelsForDatasetResponseBody' })
  .openapi('ListDatasetLabelsForDatasetResponseBody')

const ListDatasetSplitsResponseBodySchema = z
  .object({
    data: z.array(DatasetSplitSchema).openapi({ title: 'Data' }),
    next_cursor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Next Cursor' }),
  })
  .openapi({ required: ['data', 'next_cursor'], title: 'ListDatasetSplitsResponseBody' })
  .openapi('ListDatasetSplitsResponseBody')

const ListDatasetVersionsResponseBodySchema = z
  .object({
    data: z.array(DatasetVersionSchema).openapi({ title: 'Data' }),
    next_cursor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Next Cursor' }),
  })
  .openapi({ required: ['data', 'next_cursor'], title: 'ListDatasetVersionsResponseBody' })
  .openapi('ListDatasetVersionsResponseBody')

const ListDatasetsResponseBodySchema = z
  .object({
    data: z.array(DatasetSchema).openapi({ title: 'Data' }),
    next_cursor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Next Cursor' }),
  })
  .openapi({ required: ['data', 'next_cursor'], title: 'ListDatasetsResponseBody' })
  .openapi('ListDatasetsResponseBody')

const ListExperimentRunsResponseBodySchema = z
  .object({
    data: z.array(ExperimentRunSchema).openapi({ title: 'Data' }),
    next_cursor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Next Cursor' }),
  })
  .openapi({ required: ['data', 'next_cursor'], title: 'ListExperimentRunsResponseBody' })
  .openapi('ListExperimentRunsResponseBody')

const ListExperimentTagsResponseBodySchema = z
  .object({ data: z.array(ExperimentTagSchema).openapi({ title: 'Data' }) })
  .openapi({ required: ['data'], title: 'ListExperimentTagsResponseBody' })
  .openapi('ListExperimentTagsResponseBody')

const ListExperimentsResponseBodySchema = z
  .object({
    data: z.array(ExperimentSchema).openapi({ title: 'Data' }),
    next_cursor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Next Cursor' }),
  })
  .openapi({ required: ['data', 'next_cursor'], title: 'ListExperimentsResponseBody' })
  .openapi('ListExperimentsResponseBody')

const OtlpKeyValueSchema = z
  .strictObject({
    key: z.union([z.string(), z.null().nullable()]).exactOptional().openapi({ title: 'Key' }),
    value: z.union([OtlpAnyValueSchema, z.null().nullable()]).exactOptional(),
  })
  .openapi({ title: 'OtlpKeyValue', required: [] })
  .openapi('OtlpKeyValue')

const OtlpEventSchema = z
  .strictObject({
    attributes: z
      .union([z.array(OtlpKeyValueSchema), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Attributes',
        description:
          'attributes is a collection of attribute key/value pairs on the event. Attribute keys MUST be unique (it is not allowed to have more than one attribute with the same key).',
      }),
    dropped_attributes_count: z
      .union([z.int().min(0).max(4294967295), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Dropped Attributes Count',
        description:
          'dropped_attributes_count is the number of dropped attributes. If the value is 0, then no attributes were dropped.',
      }),
    name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Name',
        description:
          'name of the event. This field is semantically required to be set to non-empty string.',
      }),
    time_unix_nano: z
      .union([
        z.int().min(0).lt(18446744073709552000),
        z.string().regex(/^[0-9]+$/),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({
        title: 'Time Unix Nano',
        description:
          'time_unix_nano is the time the event occurred. Value is UNIX Epoch time in nanoseconds since 00:00:00 UTC on 1 January 1970.',
      }),
  })
  .openapi({ title: 'OtlpEvent', required: [] })
  .openapi('OtlpEvent')

const OtlpKindSchema = z
  .enum([
    'SPAN_KIND_UNSPECIFIED',
    'SPAN_KIND_INTERNAL',
    'SPAN_KIND_SERVER',
    'SPAN_KIND_CLIENT',
    'SPAN_KIND_PRODUCER',
    'SPAN_KIND_CONSUMER',
  ])
  .openapi({ title: 'OtlpKind' })
  .openapi('OtlpKind')

const OtlpStatusSchema = z
  .strictObject({
    code: z
      .union([z.int().min(-2147483648).max(2147483647), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Code', description: 'The status code.' }),
    message: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Message',
        description: 'A developer-facing human readable error message.',
      }),
  })
  .openapi({ title: 'OtlpStatus', required: [] })
  .openapi('OtlpStatus')

const OtlpSpanSchema = z
  .strictObject({
    attributes: z
      .union([z.array(OtlpKeyValueSchema), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Attributes',
        description:
          'attributes is a collection of key/value pairs. Note, global attributes like server name can be set using the resource API. Examples of attributes:\n\n    "/http/user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36"\n    "/http/server_latency": 300\n    "example.com/myattribute": true\n    "example.com/score": 10.239\n\nThe OpenTelemetry API specification further restricts the allowed value types:\nhttps://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/common/README.md#attribute\nAttribute keys MUST be unique (it is not allowed to have more than one attribute with the same key).',
      }),
    dropped_attributes_count: z
      .union([z.int().min(0).max(4294967295), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Dropped Attributes Count',
        description:
          'dropped_attributes_count is the number of attributes that were discarded. Attributes can be discarded because their keys are too long or because there are too many attributes. If this value is 0, then no attributes were dropped.',
      }),
    dropped_events_count: z
      .union([z.int().min(0).max(4294967295), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Dropped Events Count',
        description:
          'dropped_events_count is the number of dropped events. If the value is 0, then no events were dropped.',
      }),
    dropped_links_count: z
      .union([z.int().min(0).max(4294967295), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Dropped Links Count',
        description:
          'dropped_links_count is the number of dropped links after the maximum size was enforced. If this value is 0, then no links were dropped.',
      }),
    end_time_unix_nano: z
      .union([
        z.int().min(0).lt(18446744073709552000),
        z.string().regex(/^[0-9]+$/),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({
        title: 'End Time Unix Nano',
        description:
          'end_time_unix_nano is the end time of the span. On the client side, this is the time kept by the local machine where the span execution ends. On the server side, this is the time when the server application handler stops running.\nValue is UNIX Epoch time in nanoseconds since 00:00:00 UTC on 1 January 1970.\n\nThis field is semantically required and it is expected that end_time >= start_time.',
      }),
    events: z
      .union([z.array(OtlpEventSchema), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Events',
        description: 'events is a collection of Event items. A span with no events is valid.',
      }),
    flags: z
      .union([z.int().min(0).max(4294967295), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Flags',
        description:
          "Flags, a bit field.\n\nBits 0-7 (8 least significant bits) are the trace flags as defined in W3C Trace Context specification. To read the 8-bit W3C trace flag, use `flags & SPAN_FLAGS_TRACE_FLAGS_MASK`.\n\nSee https://www.w3.org/TR/trace-context-2/#trace-flags for the flag definitions.\n\nBits 8 and 9 represent the 3 states of whether a span's parent is remote. The states are (unknown, is not remote, is remote).\nTo read whether the value is known, use `(flags & SPAN_FLAGS_CONTEXT_HAS_IS_REMOTE_MASK) != 0`.\nTo read whether the span is remote, use `(flags & SPAN_FLAGS_CONTEXT_IS_REMOTE_MASK) != 0`.\n\nWhen creating span messages, if the message is logically forwarded from another source with an equivalent flags fields (i.e., usually another OTLP span message), the field SHOULD be copied as-is. If creating from a source that does not have an equivalent flags field (such as a runtime representation of an OpenTelemetry span), the high 22 bits MUST be set to zero.\nReaders MUST NOT assume that bits 10-31 (22 most significant bits) will be zero.\n\n[Optional].",
      }),
    kind: z
      .union([OtlpKindSchema, z.int().min(-2147483648).max(2147483647), z.null().nullable()])
      .default('SPAN_KIND_INTERNAL')
      .exactOptional()
      .openapi({
        title: 'Kind',
        description:
          'Distinguishes between spans generated in a particular context. For example, two spans with the same name may be distinguished using `CLIENT` (caller) and `SERVER` (callee) to identify queueing latency associated with the span.',
      }),
    links: z.null().nullable().exactOptional().openapi({ title: 'Links' }),
    name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Name',
        description:
          "A description of the span's operation.\n\nFor example, the name can be a qualified method name or a file name and a line number where the operation is called. A best practice is to use the same display name at the same call point in an application. This makes it easier to correlate spans in different traces.\n\nThis field is semantically required to be set to non-empty string. Empty value is equivalent to an unknown span name.\n\nThis field is required.",
      }),
    parent_span_id: z
      .union([z.string().regex(/^[A-Za-z0-9+\/]*={0,2}$/), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Parent Span Id',
        description:
          "The `span_id` of this span's parent span. If this is a root span, then this field must be empty. The ID is an 8-byte array.",
      }),
    span_id: z
      .union([z.string().regex(/^[A-Za-z0-9+\/]*={0,2}$/), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Span Id',
        description:
          'A unique identifier for a span within a trace, assigned when the span is created. The ID is an 8-byte array. An ID with all zeroes OR of length other than 8 bytes is considered invalid (empty string in OTLP/JSON is zero-length and thus is also invalid).\n\nThis field is required.',
      }),
    start_time_unix_nano: z
      .union([
        z.int().min(0).lt(18446744073709552000),
        z.string().regex(/^[0-9]+$/),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({
        title: 'Start Time Unix Nano',
        description:
          "start_time_unix_nano is the start time of the span. On the client side, this is the time kept by the local machine where the span execution starts. On the server side, this is the time when the server's application handler starts running.\nValue is UNIX Epoch time in nanoseconds since 00:00:00 UTC on 1 January 1970.\n\nThis field is semantically required and it is expected that end_time >= start_time.",
      }),
    status: z
      .union([OtlpStatusSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          "An optional final status for this span. Semantically when Status isn't set, it means span's status code is unset, i.e. assume STATUS_CODE_UNSET (code = 0).",
      }),
    trace_id: z
      .union([z.string().regex(/^[A-Za-z0-9+\/]*={0,2}$/), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Trace Id',
        description:
          'A unique identifier for a trace. All spans from the same trace share the same `trace_id`. The ID is a 16-byte array. An ID with all zeroes OR of length other than 16 bytes is considered invalid (empty string in OTLP/JSON is zero-length and thus is also invalid).\n\nThis field is required.',
      }),
    trace_state: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Trace State',
        description:
          'trace_state conveys information about request position in multiple distributed tracing graphs. It is a trace_state in w3c-trace-context format: https://www.w3.org/TR/trace-context/#tracestate-header\nSee also https://github.com/w3c/distributed-tracing for more details about this field.',
      }),
  })
  .openapi({ title: 'OtlpSpan', required: [] })
  .openapi('OtlpSpan')

const OtlpSpansResponseBodySchema = z
  .object({
    data: z.array(OtlpSpanSchema).openapi({ title: 'Data' }),
    next_cursor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Next Cursor' }),
  })
  .openapi({
    required: ['data', 'next_cursor'],
    title: 'OtlpSpansResponseBody',
    description: 'Paginated response where each span follows OTLP JSON structure.',
  })
  .openapi('OtlpSpansResponseBody')

const PatchAgentSessionRequestBodySchema = z
  .object({
    title: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ title: 'Title', description: 'New title for the session' }),
    model: AgentModelSelectionSchema.exactOptional().openapi({
      description: 'New model selection for the session',
    }),
  })
  .openapi({
    title: 'PatchAgentSessionRequestBody',
    description: 'Fields to update on a persisted session. Omit a field to leave it unchanged.',
    required: [],
  })
  .openapi('PatchAgentSessionRequestBody')

const PatchAgentSessionResponseBodySchema = z
  .object({ data: AgentSessionDataSchema })
  .openapi({ required: ['data'], title: 'PatchAgentSessionResponseBody' })
  .openapi('PatchAgentSessionResponseBody')

const PatchPromptRequestBodySchema = z
  .object({
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Description',
        description: 'New description for the prompt (null clears the description)',
      }),
    metadata: z
      .looseObject({})
      .exactOptional()
      .openapi({
        title: 'Metadata',
        description:
          'New metadata object for the prompt (replaces the existing metadata as a whole)',
      }),
  })
  .openapi({
    title: 'PatchPromptRequestBody',
    description: 'Fields to update on a prompt. Omit a field to leave it unchanged.',
    required: [],
  })
  .openapi('PatchPromptRequestBody')

const PatchPromptResponseBodySchema = z
  .object({ data: PromptSchema })
  .openapi({ required: ['data'], title: 'PatchPromptResponseBody' })
  .openapi('PatchPromptResponseBody')

const ProjectRetentionPolicyDataSchema = z
  .object({
    project_id: z.string().openapi({ title: 'Project Id' }),
    policy_id: z
      .union([z.string(), z.null().nullable()])
      .openapi({
        title: 'Policy Id',
        description:
          'The retention policy the project now uses, or null when the project falls back to the default policy.',
      }),
  })
  .openapi({ required: ['project_id', 'policy_id'], title: 'ProjectRetentionPolicyData' })
  .openapi('ProjectRetentionPolicyData')

const UpsertOrDeleteSecretsResultSchema = z
  .object({
    upserted_keys: z.array(z.string()).openapi({ title: 'Upserted Keys' }),
    deleted_keys: z.array(z.string()).openapi({ title: 'Deleted Keys' }),
  })
  .openapi({
    required: ['upserted_keys', 'deleted_keys'],
    title: 'UpsertOrDeleteSecretsResult',
    description: 'Result payload listing which keys were upserted and which were deleted.',
  })
  .openapi('UpsertOrDeleteSecretsResult')

const ResponseBodyUpsertOrDeleteSecretsResultSchema = z
  .object({ data: UpsertOrDeleteSecretsResultSchema })
  .openapi({ required: ['data'], title: 'ResponseBody[UpsertOrDeleteSecretsResult]' })
  .openapi('ResponseBodyUpsertOrDeleteSecretsResult')

const SecretKeyValueSchema = z
  .object({
    key: z.string().openapi({ title: 'Key' }),
    value: z
      .union([z.string(), z.null().nullable()])
      .openapi({
        title: 'Value',
        description:
          'Provide a string to create or update the secret, or explicit null to delete it. This field is required; omitting it returns 422.',
      }),
  })
  .openapi({
    required: ['key', 'value'],
    title: 'SecretKeyValue',
    description: 'A single secret entry specifying a key and a required nullable value.',
  })
  .openapi('SecretKeyValue')

const SessionAnnotationSchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
    source: z.enum(['API', 'APP']).openapi({ title: 'Source' }),
    user_id: z.union([z.string(), z.null().nullable()]).openapi({ title: 'User Id' }),
    name: z.string().openapi({ title: 'Name', description: 'The name of the annotation' }),
    annotator_kind: z
      .enum(['LLM', 'CODE', 'HUMAN', 'DECISION', 'AGENT'])
      .openapi({
        title: 'Annotator Kind',
        description: 'The kind of annotator used for the annotation',
      }),
    result: z
      .union([AnnotationResultSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ description: 'The result of the annotation' }),
    metadata: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Metadata', description: 'Metadata for the annotation' }),
    identifier: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        title: 'Identifier',
        description:
          'The identifier of the annotation. If provided, the annotation will be updated if it already exists.',
      }),
    session_id: z.string().openapi({ title: 'Session Id', description: 'Session ID' }),
  })
  .openapi({
    required: [
      'id',
      'created_at',
      'updated_at',
      'source',
      'user_id',
      'name',
      'annotator_kind',
      'session_id',
    ],
    title: 'SessionAnnotation',
  })
  .openapi('SessionAnnotation')

const SessionAnnotationsResponseBodySchema = z
  .object({
    data: z.array(SessionAnnotationSchema).openapi({ title: 'Data' }),
    next_cursor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Next Cursor' }),
  })
  .openapi({ required: ['data', 'next_cursor'], title: 'SessionAnnotationsResponseBody' })
  .openapi('SessionAnnotationsResponseBody')

const SetDatasetLabelsForDatasetResponseBodySchema = z
  .object({ data: z.array(DatasetLabelSchema).openapi({ title: 'Data' }) })
  .openapi({ required: ['data'], title: 'SetDatasetLabelsForDatasetResponseBody' })
  .openapi('SetDatasetLabelsForDatasetResponseBody')

const SetDatasetLabelsRequestBodySchema = z
  .object({
    dataset_label_ids: z
      .array(z.string())
      .exactOptional()
      .openapi({
        title: 'Dataset Label Ids',
        description:
          'The complete set of dataset label GlobalIDs to apply to the dataset. Labels not in this list are removed from the dataset; an empty list removes all labels.',
      }),
  })
  .openapi({ title: 'SetDatasetLabelsRequestBody', required: [] })
  .openapi('SetDatasetLabelsRequestBody')

const SetExperimentTagRequestBodySchema = z
  .object({
    name: IdentifierSchema.openapi({
      description:
        "The name of the tag to assign, e.g. 'baseline'. If another experiment on the same dataset already owns this tag, the tag is moved to this experiment.",
    }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Description',
        description: 'An optional description of the tag (replaces any existing description)',
      }),
  })
  .openapi({ required: ['name'], title: 'SetExperimentTagRequestBody' })
  .openapi('SetExperimentTagRequestBody')

const SetExperimentTagResponseBodySchema = z
  .object({ data: ExperimentTagSchema })
  .openapi({ required: ['data'], title: 'SetExperimentTagResponseBody' })
  .openapi('SetExperimentTagResponseBody')

const SetProjectAnnotationConfigsRequestBodySchema = z
  .object({
    annotation_config_ids: z
      .array(z.string())
      .openapi({
        title: 'Annotation Config Ids',
        description:
          'The complete set of annotation configuration GlobalIDs that should be assigned to the project. Configs not in this list are unassigned; an empty list clears all assignments.',
      }),
  })
  .openapi({ required: ['annotation_config_ids'], title: 'SetProjectAnnotationConfigsRequestBody' })
  .openapi('SetProjectAnnotationConfigsRequestBody')

const SetProjectAnnotationConfigsResponseBodySchema = z
  .object({
    data: z
      .array(
        z
          .discriminatedUnion('type', [
            CategoricalAnnotationConfigSchema,
            ContinuousAnnotationConfigSchema,
            FreeformAnnotationConfigSchema,
          ])
          .openapi({
            discriminator: {
              propertyName: 'type',
              mapping: {
                CATEGORICAL: '#/components/schemas/CategoricalAnnotationConfig',
                CONTINUOUS: '#/components/schemas/ContinuousAnnotationConfig',
                FREEFORM: '#/components/schemas/FreeformAnnotationConfig',
              },
            },
          }),
      )
      .openapi({ title: 'Data' }),
    next_cursor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Next Cursor' }),
  })
  .openapi({ required: ['data', 'next_cursor'], title: 'SetProjectAnnotationConfigsResponseBody' })
  .openapi('SetProjectAnnotationConfigsResponseBody')

const SetProjectRetentionPolicyRequestBodySchema = z
  .object({
    policy_id: z
      .union([z.string(), z.null().nullable()])
      .openapi({
        title: 'Policy Id',
        description:
          'The ID (GlobalID) of an existing trace retention policy to assign, or null to reset the project to the default policy.',
      }),
  })
  .openapi({ required: ['policy_id'], title: 'SetProjectRetentionPolicyRequestBody' })
  .openapi('SetProjectRetentionPolicyRequestBody')

const SetProjectRetentionPolicyResponseBodySchema = z
  .object({ data: ProjectRetentionPolicyDataSchema })
  .openapi({ required: ['data'], title: 'SetProjectRetentionPolicyResponseBody' })
  .openapi('SetProjectRetentionPolicyResponseBody')

const SpanAnnotationSchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
    source: z.enum(['API', 'APP']).openapi({ title: 'Source' }),
    user_id: z.union([z.string(), z.null().nullable()]).openapi({ title: 'User Id' }),
    name: z.string().openapi({ title: 'Name', description: 'The name of the annotation' }),
    annotator_kind: z
      .enum(['LLM', 'CODE', 'HUMAN', 'DECISION', 'AGENT'])
      .openapi({
        title: 'Annotator Kind',
        description: 'The kind of annotator used for the annotation',
      }),
    result: z
      .union([AnnotationResultSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ description: 'The result of the annotation' }),
    metadata: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Metadata', description: 'Metadata for the annotation' }),
    identifier: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        title: 'Identifier',
        description:
          'The identifier of the annotation. If provided, the annotation will be updated if it already exists.',
      }),
    span_id: z
      .string()
      .openapi({
        title: 'Span Id',
        description: 'OpenTelemetry Span ID (hex format w/o 0x prefix)',
      }),
  })
  .openapi({
    required: [
      'id',
      'created_at',
      'updated_at',
      'source',
      'user_id',
      'name',
      'annotator_kind',
      'span_id',
    ],
    title: 'SpanAnnotation',
  })
  .openapi('SpanAnnotation')

const SpanAnnotationsResponseBodySchema = z
  .object({
    data: z.array(SpanAnnotationSchema).openapi({ title: 'Data' }),
    next_cursor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Next Cursor' }),
  })
  .openapi({ required: ['data', 'next_cursor'], title: 'SpanAnnotationsResponseBody' })
  .openapi('SpanAnnotationsResponseBody')

const SpansResponseBodySchema = z
  .object({
    data: z.array(SpanSchema).openapi({ title: 'Data' }),
    next_cursor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Next Cursor' }),
  })
  .openapi({ required: ['data', 'next_cursor'], title: 'SpansResponseBody' })
  .openapi('SpansResponseBody')

const SubmitAgentSessionToolApprovalsRequestBodySchema = z
  .object({
    toolApprovals: z
      .array(ToolApprovalSchema)
      .min(1)
      .openapi({
        title: 'Toolapprovals',
        description:
          'Answers to tool calls awaiting approval on the trailing assistant message, matched by ``toolCallId``. Resending a persisted answer is a no-op; an answer that reverses one, or that matches no call awaiting approval, is rejected with HTTP 409 and code ``agent_session_tool_approvals_conflict``.',
      }),
    lastMessageId: z
      .string()
      .openapi({
        title: 'Lastmessageid',
        description:
          "The trailing assistant message's id. On mismatch the submission is rejected with HTTP 409 and code ``agent_session_messages_stale``.",
      }),
  })
  .openapi({
    required: ['toolApprovals', 'lastMessageId'],
    title: 'SubmitAgentSessionToolApprovalsRequestBody',
    description: 'Persist answered tool approvals without continuing the turn.',
  })
  .openapi('SubmitAgentSessionToolApprovalsRequestBody')

const SubmitAgentSessionToolApprovalsResponseBodySchema = z
  .object({ data: PhoenixUIMessageSchema })
  .openapi({
    required: ['data'],
    title: 'SubmitAgentSessionToolApprovalsResponseBody',
    description: 'The trailing assistant message with the submitted approvals applied.',
  })
  .openapi('SubmitAgentSessionToolApprovalsResponseBody')

const SubmitAgentSessionToolOutputsRequestBodySchema = z
  .object({
    toolOutputs: z
      .array(
        z.union([
          PhoenixDbTypesDataStreamProtocolRequestTypesToolOutputAvailablePartSchema,
          PhoenixDbTypesDataStreamProtocolRequestTypesToolOutputErrorPartSchema,
          PhoenixDbTypesDataStreamProtocolRequestTypesDynamicToolOutputAvailablePartSchema,
          PhoenixDbTypesDataStreamProtocolRequestTypesDynamicToolOutputErrorPartSchema,
        ]),
      )
      .min(1)
      .openapi({
        title: 'Tooloutputs',
        description:
          'Client tool results for pending calls on the trailing assistant message, matched by ``toolCallId``. Resending a persisted output verbatim is a no-op; an output that differs from the persisted result or matches no call is rejected with HTTP 409 and code ``agent_session_tool_outputs_conflict``.',
      }),
    lastMessageId: z
      .string()
      .openapi({
        title: 'Lastmessageid',
        description:
          "The trailing assistant message's id. On mismatch the submission is rejected with HTTP 409 and code ``agent_session_messages_stale``.",
      }),
  })
  .openapi({
    required: ['toolOutputs', 'lastMessageId'],
    title: 'SubmitAgentSessionToolOutputsRequestBody',
    description: 'Persist resolved client tool outputs without continuing the turn.',
  })
  .openapi('SubmitAgentSessionToolOutputsRequestBody')

const SubmitAgentSessionToolOutputsResponseBodySchema = z
  .object({ data: PhoenixUIMessageSchema })
  .openapi({
    required: ['data'],
    title: 'SubmitAgentSessionToolOutputsResponseBody',
    description: 'The trailing assistant message with the submitted outputs applied.',
  })
  .openapi('SubmitAgentSessionToolOutputsResponseBody')

const TraceAnnotationSchema = z
  .object({
    id: z.string().openapi({ title: 'Id' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ title: 'Created At' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ title: 'Updated At' }),
    source: z.enum(['API', 'APP']).openapi({ title: 'Source' }),
    user_id: z.union([z.string(), z.null().nullable()]).openapi({ title: 'User Id' }),
    name: z.string().openapi({ title: 'Name', description: 'The name of the annotation' }),
    annotator_kind: z
      .enum(['LLM', 'CODE', 'HUMAN', 'DECISION', 'AGENT'])
      .openapi({
        title: 'Annotator Kind',
        description: 'The kind of annotator used for the annotation',
      }),
    result: z
      .union([AnnotationResultSchema, z.null().nullable()])
      .exactOptional()
      .openapi({ description: 'The result of the annotation' }),
    metadata: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Metadata', description: 'Metadata for the annotation' }),
    identifier: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        title: 'Identifier',
        description:
          'The identifier of the annotation. If provided, the annotation will be updated if it already exists.',
      }),
    trace_id: z
      .string()
      .openapi({
        title: 'Trace Id',
        description: 'OpenTelemetry Trace ID (hex format w/o 0x prefix)',
      }),
  })
  .openapi({
    required: [
      'id',
      'created_at',
      'updated_at',
      'source',
      'user_id',
      'name',
      'annotator_kind',
      'trace_id',
    ],
    title: 'TraceAnnotation',
  })
  .openapi('TraceAnnotation')

const TraceAnnotationsResponseBodySchema = z
  .object({
    data: z.array(TraceAnnotationSchema).openapi({ title: 'Data' }),
    next_cursor: z.union([z.string(), z.null().nullable()]).openapi({ title: 'Next Cursor' }),
  })
  .openapi({ required: ['data', 'next_cursor'], title: 'TraceAnnotationsResponseBody' })
  .openapi('TraceAnnotationsResponseBody')

const TransferTracesDataSchema = z
  .object({
    transferred_trace_count: z
      .int()
      .openapi({
        title: 'Transferred Trace Count',
        description: 'The number of traces that were moved to the destination project.',
      }),
    destination_project_id: z
      .string()
      .openapi({
        title: 'Destination Project Id',
        description: 'The ID (GlobalID) of the project the traces were moved to.',
      }),
  })
  .openapi({
    required: ['transferred_trace_count', 'destination_project_id'],
    title: 'TransferTracesData',
  })
  .openapi('TransferTracesData')

const TransferTracesRequestBodySchema = z
  .object({
    trace_identifiers: z
      .array(z.string())
      .min(1)
      .openapi({
        title: 'Trace Identifiers',
        description:
          'The traces to transfer. Each identifier is either a trace ID (GlobalID) or an OpenTelemetry trace_id (hex string). Must be non-empty, and all traces must currently belong to the same source project.',
      }),
    destination_project_identifier: z
      .string()
      .openapi({
        title: 'Destination Project Identifier',
        description: 'The destination project: either project ID (GlobalID) or project name.',
      }),
  })
  .openapi({
    required: ['trace_identifiers', 'destination_project_identifier'],
    title: 'TransferTracesRequestBody',
  })
  .openapi('TransferTracesRequestBody')

const TransferTracesResponseBodySchema = z
  .object({ data: TransferTracesDataSchema })
  .openapi({ required: ['data'], title: 'TransferTracesResponseBody' })
  .openapi('TransferTracesResponseBody')

const UpdateAnnotationConfigResponseBodySchema = z
  .object({
    data: z
      .discriminatedUnion('type', [
        CategoricalAnnotationConfigSchema,
        ContinuousAnnotationConfigSchema,
        FreeformAnnotationConfigSchema,
      ])
      .openapi({
        title: 'Data',
        discriminator: {
          propertyName: 'type',
          mapping: {
            CATEGORICAL: '#/components/schemas/CategoricalAnnotationConfig',
            CONTINUOUS: '#/components/schemas/ContinuousAnnotationConfig',
            FREEFORM: '#/components/schemas/FreeformAnnotationConfig',
          },
        },
      }),
  })
  .openapi({ required: ['data'], title: 'UpdateAnnotationConfigResponseBody' })
  .openapi('UpdateAnnotationConfigResponseBody')

const UpdateDatasetLabelRequestBodySchema = z
  .object({
    name: z
      .union([z.string().min(1), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Name',
        description: 'New name for the label (null is rejected; name is required)',
      }),
    color: z
      .union([
        z
          .string()
          .regex(/^#([0-9a-f]{6})$/)
          .openapi({ description: "A lowercase six-digit hex color code (e.g. '#00cc88')" }),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({
        title: 'Color',
        description: 'New lowercase hex color code for the label (null is rejected)',
      }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Description',
        description: 'New description for the label (null clears the description)',
      }),
  })
  .openapi({
    title: 'UpdateDatasetLabelRequestBody',
    description: 'Fields to update on a dataset label. Omit a field to leave it unchanged.',
    required: [],
  })
  .openapi('UpdateDatasetLabelRequestBody')

const UpdateDatasetLabelResponseBodySchema = z
  .object({ data: DatasetLabelSchema })
  .openapi({ required: ['data'], title: 'UpdateDatasetLabelResponseBody' })
  .openapi('UpdateDatasetLabelResponseBody')

const UpdateDatasetSplitRequestBodySchema = z
  .object({
    name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Name', description: 'A new unique name for the split.' }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description', description: 'A new description, or null to clear it.' }),
    color: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Color', description: 'A new hex color for the split.' }),
    metadata: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Metadata',
        description: 'New JSON metadata that replaces the existing metadata.',
      }),
    add_example_ids: z
      .array(z.string())
      .exactOptional()
      .openapi({
        title: 'Add Example Ids',
        description:
          'Dataset example identifiers (GlobalIDs or user-provided IDs) to add to the split. Each example must belong to this dataset. Adding an example already in the split is a no-op.',
      }),
    remove_example_ids: z
      .array(z.string())
      .exactOptional()
      .openapi({
        title: 'Remove Example Ids',
        description:
          'Dataset example identifiers (GlobalIDs or user-provided IDs) to remove from the split.',
      }),
  })
  .openapi({ title: 'UpdateDatasetSplitRequestBody', required: [] })
  .openapi('UpdateDatasetSplitRequestBody')

const UpdateDatasetSplitResponseBodySchema = z
  .object({ data: DatasetSplitSchema })
  .openapi({ required: ['data'], title: 'UpdateDatasetSplitResponseBody' })
  .openapi('UpdateDatasetSplitResponseBody')

const UpdateExperimentRequestBodySchema = z
  .object({
    name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Name',
        description: 'New name for the experiment (null is rejected; name is required)',
      }),
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Description',
        description: 'New description for the experiment (null clears the description)',
      }),
    metadata: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Metadata',
        description:
          'New metadata object for the experiment (replaces the existing metadata as a whole; null is rejected)',
      }),
  })
  .openapi({
    title: 'UpdateExperimentRequestBody',
    description: 'Fields to update on an experiment. Omit a field to leave it unchanged.',
    required: [],
  })
  .openapi('UpdateExperimentRequestBody')

const UpdateExperimentResponseBodySchema = z
  .object({ data: ExperimentSchema })
  .openapi({ required: ['data'], title: 'UpdateExperimentResponseBody' })
  .openapi('UpdateExperimentResponseBody')

const UpdateProjectRequestBodySchema = z
  .object({
    description: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Description' }),
  })
  .openapi({ title: 'UpdateProjectRequestBody', required: [] })
  .openapi('UpdateProjectRequestBody')

const UpdateProjectResponseBodySchema = z
  .object({ data: ProjectSchema })
  .openapi({ required: ['data'], title: 'UpdateProjectResponseBody' })
  .openapi('UpdateProjectResponseBody')

const UploadDatasetDataSchema = z
  .object({
    dataset_id: z.string().openapi({ title: 'Dataset Id' }),
    version_id: z.string().openapi({ title: 'Version Id' }),
    num_created_examples: z.int().openapi({ title: 'Num Created Examples' }),
    num_updated_examples: z.int().openapi({ title: 'Num Updated Examples' }),
    num_deleted_examples: z.int().openapi({ title: 'Num Deleted Examples' }),
  })
  .openapi({
    required: [
      'dataset_id',
      'version_id',
      'num_created_examples',
      'num_updated_examples',
      'num_deleted_examples',
    ],
    title: 'UploadDatasetData',
  })
  .openapi('UploadDatasetData')

const UploadDatasetResponseBodySchema = z
  .object({ data: UploadDatasetDataSchema })
  .openapi({ required: ['data'], title: 'UploadDatasetResponseBody' })
  .openapi('UploadDatasetResponseBody')

const UpsertExperimentEvaluationRequestBodySchema = z
  .object({
    experiment_run_id: z
      .string()
      .openapi({
        title: 'Experiment Run Id',
        description: 'The ID of the experiment run being evaluated',
      }),
    name: z.string().openapi({ title: 'Name', description: 'The name of the evaluation' }),
    annotator_kind: z
      .enum(['LLM', 'CODE', 'HUMAN', 'DECISION', 'AGENT'])
      .openapi({
        title: 'Annotator Kind',
        description: 'The kind of annotator used for the evaluation',
      }),
    start_time: z.iso
      .datetime({ offset: true })
      .openapi({
        title: 'Start Time',
        description: 'The start time of the evaluation in ISO format',
      }),
    end_time: z.iso
      .datetime({ offset: true })
      .openapi({ title: 'End Time', description: 'The end time of the evaluation in ISO format' }),
    result: z
      .union([ExperimentEvaluationResultSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description: 'The result of the evaluation. Either result or error must be provided.',
      }),
    error: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        title: 'Error',
        description:
          'Error message if the evaluation encountered an error. Either result or error must be provided.',
      }),
    metadata: z
      .union([z.looseObject({}), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Metadata', description: 'Metadata for the evaluation' }),
    trace_id: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ title: 'Trace Id', description: 'Optional trace ID for tracking' }),
  })
  .openapi({
    required: ['experiment_run_id', 'name', 'annotator_kind', 'start_time', 'end_time'],
    title: 'UpsertExperimentEvaluationRequestBody',
  })
  .openapi('UpsertExperimentEvaluationRequestBody')

const UpsertExperimentEvaluationResponseBodyDataSchema = z
  .object({
    id: z
      .string()
      .openapi({ title: 'Id', description: 'The ID of the upserted experiment evaluation' }),
  })
  .openapi({ required: ['id'], title: 'UpsertExperimentEvaluationResponseBodyData' })
  .openapi('UpsertExperimentEvaluationResponseBodyData')

const UpsertExperimentEvaluationResponseBodySchema = z
  .object({ data: UpsertExperimentEvaluationResponseBodyDataSchema })
  .openapi({ required: ['data'], title: 'UpsertExperimentEvaluationResponseBody' })
  .openapi('UpsertExperimentEvaluationResponseBody')

const UpsertOrDeleteSecretsRequestSchema = z
  .object({ secrets: z.array(SecretKeyValueSchema).openapi({ title: 'Secrets' }) })
  .openapi({
    required: ['secrets'],
    title: 'UpsertOrDeleteSecretsRequest',
    description: 'Request body for the PUT /secrets endpoint.',
  })
  .openapi('UpsertOrDeleteSecretsRequest')

const AgentErrorDataSchema = z
  .strictObject({ errorText: z.string().openapi({ title: 'Errortext' }) })
  .openapi({
    description: 'Payload of the durable ``data-error`` part persisted for protocol errors.',
    required: ['errorText'],
    title: 'AgentErrorData',
  })
  .openapi('AgentErrorData')

const AgentErrorChunkSchema = z
  .strictObject({
    type: z.literal('data-error').default('data-error').exactOptional().openapi({ title: 'Type' }),
    id: z
      .union([z.string(), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Id' }),
    data: AgentErrorDataSchema,
    transient: z
      .union([z.boolean(), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Transient' }),
  })
  .openapi({
    description:
      'Durable data part paired with a standard protocol ``error`` chunk.\n\nStandard ``error`` chunks are transient: the reducer routes them to error\ncallbacks without adding a message part, so they vanish from persisted\ntranscripts. Pairing each one with this ``data-error`` part records the\nerror durably in the message for persistence, reload, and subagents.',
    required: ['data'],
    title: 'AgentErrorChunk',
  })
  .openapi('AgentErrorChunk')

const PhoenixToolCallCallbackProviderMetadataSchema = z
  .strictObject({
    toolExecutionEnvironment: z
      .enum(['client', 'server'])
      .openapi({ title: 'Toolexecutionenvironment' }),
    toolInputEmittedAt: z
      .union([z.string(), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Toolinputemittedat' }),
    clientStartedAt: z
      .union([z.string(), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Clientstartedat' }),
    clientEndedAt: z
      .union([z.string(), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Clientendedat' }),
    outcome: z
      .union([z.literal('interrupted'), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Outcome' }),
  })
  .openapi({
    description:
      'Shape of the ``phoenix`` namespace the browser returns in\n``callProviderMetadata`` on resolved tool parts: the server-stamped fields\nplus browser-recorded execution timings.',
    required: ['toolExecutionEnvironment'],
    title: 'PhoenixToolCallCallbackProviderMetadata',
  })
  .openapi('PhoenixToolCallCallbackProviderMetadata')

const PhoenixToolCallProviderMetadataSchema = z
  .strictObject({
    toolExecutionEnvironment: z
      .enum(['client', 'server'])
      .openapi({ title: 'Toolexecutionenvironment' }),
    toolInputEmittedAt: z
      .union([z.string(), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Toolinputemittedat' }),
  })
  .openapi({
    description:
      'Payload Phoenix stamps under the ``phoenix`` namespace of Vercel AI\n``providerMetadata`` on tool-call chunks (``tool-input-start`` and\n``tool-input-available``).',
    required: ['toolExecutionEnvironment'],
    title: 'PhoenixToolCallProviderMetadata',
  })
  .openapi('PhoenixToolCallProviderMetadata')

const SessionSummaryChunkSchema = z
  .strictObject({
    type: z
      .literal('data-session-summary')
      .default('data-session-summary')
      .exactOptional()
      .openapi({ title: 'Type' }),
    id: z
      .union([z.string(), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Id' }),
    data: z.string().openapi({ title: 'Data' }),
    transient: z.literal(true).default(true).exactOptional().openapi({ title: 'Transient' }),
  })
  .openapi({
    description:
      "Transient ``data-session-summary`` stream chunk: the LLM-generated\nsession title, emitted on any turn that starts with the session still\nuntitled. Being transient, it reaches the client's ``onData`` callback\nbut is never appended to the message parts.\n\nSee the Vercel AI SDK data stream protocol:\n    - Data parts: https://ai-sdk.dev/docs/ai-sdk-ui/stream-protocol#data-parts\n    - Transient parts: https://ai-sdk.dev/docs/ai-sdk-ui/streaming-data#transient-data-parts-ephemeral",
    required: ['data'],
    title: 'SessionSummaryChunk',
  })
  .openapi('SessionSummaryChunk')

const TranscriptPersistedDataSchema = z
  .object({ messageId: z.string().openapi({ title: 'Messageid' }) })
  .openapi({ required: ['messageId'], title: 'TranscriptPersistedData' })
  .openapi('TranscriptPersistedData')

const TranscriptPersistedChunkSchema = z
  .strictObject({
    type: z
      .literal('data-transcript-persisted')
      .default('data-transcript-persisted')
      .exactOptional()
      .openapi({ title: 'Type' }),
    id: z
      .union([z.string(), z.null().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ title: 'Id' }),
    data: TranscriptPersistedDataSchema,
    transient: z.literal(true).default(true).exactOptional().openapi({ title: 'Transient' }),
  })
  .openapi({
    description: 'Confirms that a streamed assistant message is durable.',
    required: ['data'],
    title: 'TranscriptPersistedChunk',
  })
  .openapi('TranscriptPersistedChunk')

export const getV1AnnotationConfigsRoute = createRoute({
  method: 'get',
  path: '/v1/annotation_configs',
  tags: ['annotation_configs'],
  summary: 'List annotation configurations',
  description: 'Retrieve a paginated list of all annotation configurations in the system.',
  operationId: 'listAnnotationConfigs',
  request: {
    query: z.object({
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
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description: 'Cursor for pagination (base64-encoded annotation config ID)',
              title: 'Cursor',
            },
            description: 'Cursor for pagination (base64-encoded annotation config ID)',
          },
          description: 'Cursor for pagination (base64-encoded annotation config ID)',
          title: 'Cursor',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().gt(0),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              exclusiveMinimum: 0,
              description: 'Maximum number of configs to return',
              default: 100,
              title: 'Limit',
            },
            description: 'Maximum number of configs to return',
          },
          description: 'Maximum number of configs to return',
          title: 'Limit',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of annotation configurations with pagination information',
      content: { 'application/json': { schema: GetAnnotationConfigsResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1AnnotationConfigsRoute = createRoute({
  method: 'post',
  path: '/v1/annotation_configs',
  tags: ['annotation_configs'],
  summary: 'Create an annotation configuration',
  operationId: 'createAnnotationConfig',
  request: {
    body: {
      content: { 'application/json': { schema: CreateAnnotationConfigDataSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: CreateAnnotationConfigResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1AnnotationConfigsConfigIdentifierRoute = createRoute({
  method: 'get',
  path: '/v1/annotation_configs/{config_identifier}',
  tags: ['annotation_configs'],
  summary: 'Get an annotation configuration by ID or name',
  operationId: 'getAnnotationConfig',
  request: {
    params: z.object({
      config_identifier: z
        .string()
        .openapi({
          param: {
            name: 'config_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'ID or name of the annotation configuration',
              title: 'Config Identifier',
            },
            description: 'ID or name of the annotation configuration',
          },
          description: 'ID or name of the annotation configuration',
          title: 'Config Identifier',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GetAnnotationConfigResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const putV1AnnotationConfigsConfigIdRoute = createRoute({
  method: 'put',
  path: '/v1/annotation_configs/{config_id}',
  tags: ['annotation_configs'],
  summary: 'Update an annotation configuration',
  operationId: 'updateAnnotationConfig',
  request: {
    params: z.object({
      config_id: z
        .string()
        .openapi({
          param: {
            name: 'config_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'ID of the annotation configuration',
              title: 'Config Id',
            },
            description: 'ID of the annotation configuration',
          },
          description: 'ID of the annotation configuration',
          title: 'Config Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateAnnotationConfigDataSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: UpdateAnnotationConfigResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const deleteV1AnnotationConfigsConfigIdRoute = createRoute({
  method: 'delete',
  path: '/v1/annotation_configs/{config_id}',
  tags: ['annotation_configs'],
  summary: 'Delete an annotation configuration',
  operationId: 'deleteAnnotationConfig',
  request: {
    params: z.object({
      config_id: z
        .string()
        .openapi({
          param: {
            name: 'config_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'ID of the annotation configuration',
              title: 'Config Id',
            },
            description: 'ID of the annotation configuration',
          },
          description: 'ID of the annotation configuration',
          title: 'Config Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DeleteAnnotationConfigResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1ProjectsProjectIdentifierAnnotationConfigsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_identifier}/annotation_configs',
  tags: ['annotation_configs'],
  summary: 'List annotation configurations assigned to a project',
  description:
    'Retrieve a paginated list of the annotation configurations assigned to a project, identified by either project ID or project name.',
  operationId: 'getProjectAnnotationConfigs',
  request: {
    params: z.object({
      project_identifier: z
        .string()
        .openapi({
          param: {
            name: 'project_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The project identifier: either project ID or project name.',
              title: 'Project Identifier',
            },
            description: 'The project identifier: either project ID or project name.',
          },
          description: 'The project identifier: either project ID or project name.',
          title: 'Project Identifier',
        }),
    }),
    query: z.object({
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
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description: 'Cursor for pagination (base64-encoded annotation config ID)',
              title: 'Cursor',
            },
            description: 'Cursor for pagination (base64-encoded annotation config ID)',
          },
          description: 'Cursor for pagination (base64-encoded annotation config ID)',
          title: 'Cursor',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().gt(0),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              exclusiveMinimum: 0,
              description: 'Maximum number of configs to return',
              default: 100,
              title: 'Limit',
            },
            description: 'Maximum number of configs to return',
          },
          description: 'Maximum number of configs to return',
          title: 'Limit',
        }),
    }),
  },
  responses: {
    200: {
      description: "A list of the project's annotation configurations with pagination information",
      content: { 'application/json': { schema: GetProjectAnnotationConfigsResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const putV1ProjectsProjectIdentifierAnnotationConfigsRoute = createRoute({
  method: 'put',
  path: '/v1/projects/{project_identifier}/annotation_configs',
  tags: ['annotation_configs'],
  summary: 'Replace the set of annotation configurations assigned to a project',
  description:
    "Replace the project's entire set of assigned annotation configurations with the provided set. The server diffs the desired set against the current set: configs in the body but not assigned are added, and configs assigned but not in the body are removed. An empty array clears all assignments.",
  operationId: 'setProjectAnnotationConfigs',
  request: {
    params: z.object({
      project_identifier: z
        .string()
        .openapi({
          param: {
            name: 'project_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The project identifier: either project ID or project name.',
              title: 'Project Identifier',
            },
            description: 'The project identifier: either project ID or project name.',
          },
          description: 'The project identifier: either project ID or project name.',
          title: 'Project Identifier',
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetProjectAnnotationConfigsRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The resulting set of annotation configurations assigned to the project',
      content: { 'application/json': { schema: SetProjectAnnotationConfigsResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const putV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierRoute = createRoute({
  method: 'put',
  path: '/v1/projects/{project_identifier}/annotation_configs/{config_identifier}',
  tags: ['annotation_configs'],
  summary: 'Assign an annotation configuration to a project',
  description:
    'Assign an annotation configuration to a project. This operation is idempotent: re-assigning a config that is already assigned is a no-op that returns the config. Both the project and the config are identified by either ID or name.',
  operationId: 'assignAnnotationConfigToProject',
  request: {
    params: z.object({
      project_identifier: z
        .string()
        .openapi({
          param: {
            name: 'project_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The project identifier: either project ID or project name.',
              title: 'Project Identifier',
            },
            description: 'The project identifier: either project ID or project name.',
          },
          description: 'The project identifier: either project ID or project name.',
          title: 'Project Identifier',
        }),
      config_identifier: z
        .string()
        .openapi({
          param: {
            name: 'config_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The annotation configuration identifier: either ID or name.',
              title: 'Config Identifier',
            },
            description: 'The annotation configuration identifier: either ID or name.',
          },
          description: 'The annotation configuration identifier: either ID or name.',
          title: 'Config Identifier',
        }),
    }),
  },
  responses: {
    200: {
      description: 'The annotation configuration assigned to the project',
      content: {
        'application/json': { schema: AssignAnnotationConfigToProjectResponseBodySchema },
      },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const deleteV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{project_identifier}/annotation_configs/{config_identifier}',
  tags: ['annotation_configs'],
  summary: 'Unassign an annotation configuration from a project',
  description:
    'Unassign an annotation configuration from a project. This operation is idempotent: unassigning a config that is not currently assigned is a no-op. The underlying annotation config is not deleted. Both the project and the config are identified by either ID or name.',
  operationId: 'unassignAnnotationConfigFromProject',
  request: {
    params: z.object({
      project_identifier: z
        .string()
        .openapi({
          param: {
            name: 'project_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The project identifier: either project ID or project name.',
              title: 'Project Identifier',
            },
            description: 'The project identifier: either project ID or project name.',
          },
          description: 'The project identifier: either project ID or project name.',
          title: 'Project Identifier',
        }),
      config_identifier: z
        .string()
        .openapi({
          param: {
            name: 'config_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The annotation configuration identifier: either ID or name.',
              title: 'Config Identifier',
            },
            description: 'The annotation configuration identifier: either ID or name.',
          },
          description: 'The annotation configuration identifier: either ID or name.',
          title: 'Config Identifier',
        }),
    }),
  },
  responses: {
    204: { description: 'No content returned on successful unassignment' },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getV1ProjectsProjectIdentifierSpanAnnotationsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_identifier}/span_annotations',
  tags: ['annotations'],
  summary: 'Get span annotations filtered by span_ids and/or identifier.',
  description:
    'Return span annotations for a project, filtered by `span_ids`, `identifier`, or both. At least one of `span_ids` or `identifier` must be supplied. When both are supplied, results are the AND-intersection of the two filters.',
  operationId: 'listSpanAnnotationsBySpanIds',
  request: {
    params: z.object({
      project_identifier: z
        .string()
        .openapi({
          param: {
            name: 'project_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description:
                'The project identifier: either project ID or project name. If using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
              title: 'Project Identifier',
            },
            description:
              'The project identifier: either project ID or project name. If using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
          },
          description:
            'The project identifier: either project ID or project name. If using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
          title: 'Project Identifier',
        }),
    }),
    query: z.object({
      span_ids: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'span_ids',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              description:
                'Optional list of span ids to fetch annotations for. If omitted, `identifier` must be supplied.',
              title: 'Span Ids',
            },
            description:
              'Optional list of span ids to fetch annotations for. If omitted, `identifier` must be supplied.',
          },
          description:
            'Optional list of span ids to fetch annotations for. If omitted, `identifier` must be supplied.',
          title: 'Span Ids',
        }),
      identifier: z
        .union([
          z.array(z.string().min(1)),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'identifier',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string', minLength: 1 } }, { type: 'null' }],
              description:
                'Optional list of annotation identifiers to filter by. Each value must be non-empty. If omitted, `span_ids` must be supplied. When combined with `span_ids`, results are the AND-intersection of both filters.',
              title: 'Identifier',
            },
            description:
              'Optional list of annotation identifiers to filter by. Each value must be non-empty. If omitted, `span_ids` must be supplied. When combined with `span_ids`, results are the AND-intersection of both filters.',
          },
          description:
            'Optional list of annotation identifiers to filter by. Each value must be non-empty. If omitted, `span_ids` must be supplied. When combined with `span_ids`, results are the AND-intersection of both filters.',
          title: 'Identifier',
        }),
      include_annotation_names: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'include_annotation_names',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              description:
                'Optional list of annotation names to include. If provided, only annotations with these names will be returned (allowlist). When omitted, the response includes every matching row regardless of name (no annotation names are excluded by default).',
              title: 'Include Annotation Names',
            },
            description:
              'Optional list of annotation names to include. If provided, only annotations with these names will be returned (allowlist). When omitted, the response includes every matching row regardless of name (no annotation names are excluded by default).',
          },
          description:
            'Optional list of annotation names to include. If provided, only annotations with these names will be returned (allowlist). When omitted, the response includes every matching row regardless of name (no annotation names are excluded by default).',
          title: 'Include Annotation Names',
        }),
      exclude_annotation_names: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'exclude_annotation_names',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              description: 'Optional list of annotation names to exclude from results.',
              title: 'Exclude Annotation Names',
            },
            description: 'Optional list of annotation names to exclude from results.',
          },
          description: 'Optional list of annotation names to exclude from results.',
          title: 'Exclude Annotation Names',
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
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description: 'A cursor for pagination',
              title: 'Cursor',
            },
            description: 'A cursor for pagination',
          },
          description: 'A cursor for pagination',
          title: 'Cursor',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().gt(0).max(10000),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              maximum: 10000,
              exclusiveMinimum: 0,
              description: 'The maximum number of annotations to return in a single request',
              default: 10,
              title: 'Limit',
            },
            description: 'The maximum number of annotations to return in a single request',
          },
          description: 'The maximum number of annotations to return in a single request',
          title: 'Limit',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: SpanAnnotationsResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: {
      description: 'Project or spans not found',
      content: { 'text/plain': { schema: z.string() } },
    },
    422: { description: 'Invalid parameters', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const deleteV1ProjectsProjectIdentifierSpanAnnotationsRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{project_identifier}/span_annotations',
  tags: ['annotations'],
  summary: 'Delete span annotations in a project that match the supplied filter.',
  description:
    'Hard-delete span annotations within the named project that match the\nsupplied filter.\n\n- The request must either supply both `start_time` AND `end_time`\n  to bound the delete to a `[start_time, end_time)` time window,\n  OR set `delete_all=true` to acknowledge an unbounded sweep. A request\n  that satisfies neither is rejected with 422.\n- `name`, `identifier`, and `annotator_kind` are optional narrowing\n  filters; on their own they do NOT authorize the request — they only\n  narrow within an already-authorized request (bounded time range or\n  `delete_all=true`).\n- All supplied filters are combined with AND. `name` and `identifier`,\n  when present, must be non-empty.\n- `start_time` is inclusive (`>=`); `end_time` is exclusive\n  (`<`). When both are supplied, `start_time` must be strictly earlier\n  than `end_time` (else 422). A half-bounded range (only one of\n  the two) does NOT satisfy the gate and is rejected unless\n  `delete_all=true` is also set. Naive datetimes are interpreted as UTC.\n- The endpoint is idempotent: a request that matches no rows still\n  returns 204.\n- When authentication is enabled, non-admin callers can only delete rows\n  they own (`user_id == current_user.id`); admins delete all matching\n  rows.',
  operationId: 'deleteSpanAnnotations',
  request: {
    params: z.object({
      project_identifier: z
        .string()
        .openapi({
          param: {
            name: 'project_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description:
                'The project identifier: either project ID or project name. If using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
              title: 'Project Identifier',
            },
            description:
              'The project identifier: either project ID or project name. If using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
          },
          description:
            'The project identifier: either project ID or project name. If using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
          title: 'Project Identifier',
        }),
    }),
    query: z.object({
      name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string().min(1),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', minLength: 1 }, { type: 'null' }],
              description:
                'Optional annotation name. When provided, must be non-empty and narrows the delete to annotations of that name.',
              title: 'Name',
            },
            description:
              'Optional annotation name. When provided, must be non-empty and narrows the delete to annotations of that name.',
          },
          description:
            'Optional annotation name. When provided, must be non-empty and narrows the delete to annotations of that name.',
          title: 'Name',
        }),
      identifier: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string().min(1),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'identifier',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', minLength: 1 }, { type: 'null' }],
              description:
                'Optional annotation identifier. When provided, must be non-empty and narrows the delete to annotations with that identifier.',
              title: 'Identifier',
            },
            description:
              'Optional annotation identifier. When provided, must be non-empty and narrows the delete to annotations with that identifier.',
          },
          description:
            'Optional annotation identifier. When provided, must be non-empty and narrows the delete to annotations with that identifier.',
          title: 'Identifier',
        }),
      annotator_kind: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.enum(['LLM', 'CODE', 'HUMAN', 'DECISION', 'AGENT']),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'annotator_kind',
            in: 'query',
            required: false,
            schema: {
              anyOf: [
                { enum: ['LLM', 'CODE', 'HUMAN', 'DECISION', 'AGENT'], type: 'string' },
                { type: 'null' },
              ],
              description:
                'Optional annotator kind. When provided, narrows the delete to annotations produced by this annotator kind.',
              title: 'Annotator Kind',
            },
            description:
              'Optional annotator kind. When provided, narrows the delete to annotations produced by this annotator kind.',
          },
          description:
            'Optional annotator kind. When provided, narrows the delete to annotations produced by this annotator kind.',
          title: 'Annotator Kind',
        }),
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
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              description:
                'Optional inclusive lower bound on `created_at` (>=). Naive datetimes are interpreted as UTC.',
              title: 'Start Time',
            },
            description:
              'Optional inclusive lower bound on `created_at` (>=). Naive datetimes are interpreted as UTC.',
          },
          description:
            'Optional inclusive lower bound on `created_at` (>=). Naive datetimes are interpreted as UTC.',
          title: 'Start Time',
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
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              description:
                'Optional exclusive upper bound on `created_at` (<). Naive datetimes are interpreted as UTC.',
              title: 'End Time',
            },
            description:
              'Optional exclusive upper bound on `created_at` (<). Naive datetimes are interpreted as UTC.',
          },
          description:
            'Optional exclusive upper bound on `created_at` (<). Naive datetimes are interpreted as UTC.',
          title: 'End Time',
        }),
      delete_all: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'delete_all',
            in: 'query',
            required: false,
            schema: {
              type: 'boolean',
              description:
                'Opt-in flag that authorizes the request without a bounded `[start_time, end_time)` time window. When `false` (default) or absent, the request must supply both `start_time` AND `end_time` to bound the delete. When `true`, the time-range bound is waived and any other filters (`name`, `identifier`, `annotator_kind`) still narrow the delete within the project — e.g. `delete_all=true&name=X` deletes all annotations named X regardless of time.',
              default: false,
              title: 'Delete All',
            },
            description:
              'Opt-in flag that authorizes the request without a bounded `[start_time, end_time)` time window. When `false` (default) or absent, the request must supply both `start_time` AND `end_time` to bound the delete. When `true`, the time-range bound is waived and any other filters (`name`, `identifier`, `annotator_kind`) still narrow the delete within the project — e.g. `delete_all=true&name=X` deletes all annotations named X regardless of time.',
          },
          description:
            'Opt-in flag that authorizes the request without a bounded `[start_time, end_time)` time window. When `false` (default) or absent, the request must supply both `start_time` AND `end_time` to bound the delete. When `true`, the time-range bound is waived and any other filters (`name`, `identifier`, `annotator_kind`) still narrow the delete within the project — e.g. `delete_all=true&name=X` deletes all annotations named X regardless of time.',
          title: 'Delete All',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Project not found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Invalid parameters', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getV1ProjectsProjectIdentifierTraceAnnotationsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_identifier}/trace_annotations',
  tags: ['annotations'],
  summary: 'Get trace annotations filtered by trace_ids and/or identifier.',
  description:
    'Return trace annotations for a project, filtered by `trace_ids`, `identifier`, or both. At least one of `trace_ids` or `identifier` must be supplied. When both are supplied, results are the AND-intersection of the two filters.',
  operationId: 'listTraceAnnotationsByTraceIds',
  request: {
    params: z.object({
      project_identifier: z
        .string()
        .openapi({
          param: {
            name: 'project_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description:
                'The project identifier: either project ID or project name. If using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
              title: 'Project Identifier',
            },
            description:
              'The project identifier: either project ID or project name. If using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
          },
          description:
            'The project identifier: either project ID or project name. If using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
          title: 'Project Identifier',
        }),
    }),
    query: z.object({
      trace_ids: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'trace_ids',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              description:
                'Optional list of trace ids to fetch annotations for. If omitted, `identifier` must be supplied.',
              title: 'Trace Ids',
            },
            description:
              'Optional list of trace ids to fetch annotations for. If omitted, `identifier` must be supplied.',
          },
          description:
            'Optional list of trace ids to fetch annotations for. If omitted, `identifier` must be supplied.',
          title: 'Trace Ids',
        }),
      identifier: z
        .union([
          z.array(z.string().min(1)),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'identifier',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string', minLength: 1 } }, { type: 'null' }],
              description:
                'Optional list of annotation identifiers to filter by. Each value must be non-empty. If omitted, `trace_ids` must be supplied. When combined with `trace_ids`, results are the AND-intersection of both filters.',
              title: 'Identifier',
            },
            description:
              'Optional list of annotation identifiers to filter by. Each value must be non-empty. If omitted, `trace_ids` must be supplied. When combined with `trace_ids`, results are the AND-intersection of both filters.',
          },
          description:
            'Optional list of annotation identifiers to filter by. Each value must be non-empty. If omitted, `trace_ids` must be supplied. When combined with `trace_ids`, results are the AND-intersection of both filters.',
          title: 'Identifier',
        }),
      include_annotation_names: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'include_annotation_names',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              description:
                'Optional list of annotation names to include. If provided, only annotations with these names will be returned (allowlist). When omitted, the response includes every matching row regardless of name (no annotation names are excluded by default).',
              title: 'Include Annotation Names',
            },
            description:
              'Optional list of annotation names to include. If provided, only annotations with these names will be returned (allowlist). When omitted, the response includes every matching row regardless of name (no annotation names are excluded by default).',
          },
          description:
            'Optional list of annotation names to include. If provided, only annotations with these names will be returned (allowlist). When omitted, the response includes every matching row regardless of name (no annotation names are excluded by default).',
          title: 'Include Annotation Names',
        }),
      exclude_annotation_names: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'exclude_annotation_names',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              description: 'Optional list of annotation names to exclude from results.',
              title: 'Exclude Annotation Names',
            },
            description: 'Optional list of annotation names to exclude from results.',
          },
          description: 'Optional list of annotation names to exclude from results.',
          title: 'Exclude Annotation Names',
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
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description: 'A cursor for pagination',
              title: 'Cursor',
            },
            description: 'A cursor for pagination',
          },
          description: 'A cursor for pagination',
          title: 'Cursor',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().gt(0).max(10000),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              maximum: 10000,
              exclusiveMinimum: 0,
              description: 'The maximum number of annotations to return in a single request',
              default: 10,
              title: 'Limit',
            },
            description: 'The maximum number of annotations to return in a single request',
          },
          description: 'The maximum number of annotations to return in a single request',
          title: 'Limit',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: TraceAnnotationsResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: {
      description: 'Project or traces not found',
      content: { 'text/plain': { schema: z.string() } },
    },
    422: { description: 'Invalid parameters', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const deleteV1ProjectsProjectIdentifierTraceAnnotationsRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{project_identifier}/trace_annotations',
  tags: ['annotations'],
  summary: 'Delete trace annotations in a project that match the supplied filter.',
  description:
    'Hard-delete trace annotations within the named project that match the\nsupplied filter.\n\n- The request must either supply both `start_time` AND `end_time`\n  to bound the delete to a `[start_time, end_time)` time window,\n  OR set `delete_all=true` to acknowledge an unbounded sweep. A request\n  that satisfies neither is rejected with 422.\n- `name`, `identifier`, and `annotator_kind` are optional narrowing\n  filters; on their own they do NOT authorize the request — they only\n  narrow within an already-authorized request (bounded time range or\n  `delete_all=true`).\n- All supplied filters are combined with AND. `name` and `identifier`,\n  when present, must be non-empty.\n- `start_time` is inclusive (`>=`); `end_time` is exclusive\n  (`<`). When both are supplied, `start_time` must be strictly earlier\n  than `end_time` (else 422). A half-bounded range (only one of\n  the two) does NOT satisfy the gate and is rejected unless\n  `delete_all=true` is also set. Naive datetimes are interpreted as UTC.\n- The endpoint is idempotent: a request that matches no rows still\n  returns 204.\n- When authentication is enabled, non-admin callers can only delete rows\n  they own (`user_id == current_user.id`); admins delete all matching\n  rows.',
  operationId: 'deleteTraceAnnotations',
  request: {
    params: z.object({
      project_identifier: z
        .string()
        .openapi({
          param: {
            name: 'project_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description:
                'The project identifier: either project ID or project name. If using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
              title: 'Project Identifier',
            },
            description:
              'The project identifier: either project ID or project name. If using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
          },
          description:
            'The project identifier: either project ID or project name. If using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
          title: 'Project Identifier',
        }),
    }),
    query: z.object({
      name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string().min(1),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', minLength: 1 }, { type: 'null' }],
              description:
                'Optional annotation name. When provided, must be non-empty and narrows the delete to annotations of that name.',
              title: 'Name',
            },
            description:
              'Optional annotation name. When provided, must be non-empty and narrows the delete to annotations of that name.',
          },
          description:
            'Optional annotation name. When provided, must be non-empty and narrows the delete to annotations of that name.',
          title: 'Name',
        }),
      identifier: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string().min(1),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'identifier',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', minLength: 1 }, { type: 'null' }],
              description:
                'Optional annotation identifier. When provided, must be non-empty and narrows the delete to annotations with that identifier.',
              title: 'Identifier',
            },
            description:
              'Optional annotation identifier. When provided, must be non-empty and narrows the delete to annotations with that identifier.',
          },
          description:
            'Optional annotation identifier. When provided, must be non-empty and narrows the delete to annotations with that identifier.',
          title: 'Identifier',
        }),
      annotator_kind: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.enum(['LLM', 'CODE', 'HUMAN', 'DECISION', 'AGENT']),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'annotator_kind',
            in: 'query',
            required: false,
            schema: {
              anyOf: [
                { enum: ['LLM', 'CODE', 'HUMAN', 'DECISION', 'AGENT'], type: 'string' },
                { type: 'null' },
              ],
              description:
                'Optional annotator kind. When provided, narrows the delete to annotations produced by this annotator kind.',
              title: 'Annotator Kind',
            },
            description:
              'Optional annotator kind. When provided, narrows the delete to annotations produced by this annotator kind.',
          },
          description:
            'Optional annotator kind. When provided, narrows the delete to annotations produced by this annotator kind.',
          title: 'Annotator Kind',
        }),
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
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              description:
                'Optional inclusive lower bound on `created_at` (>=). Naive datetimes are interpreted as UTC.',
              title: 'Start Time',
            },
            description:
              'Optional inclusive lower bound on `created_at` (>=). Naive datetimes are interpreted as UTC.',
          },
          description:
            'Optional inclusive lower bound on `created_at` (>=). Naive datetimes are interpreted as UTC.',
          title: 'Start Time',
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
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              description:
                'Optional exclusive upper bound on `created_at` (<). Naive datetimes are interpreted as UTC.',
              title: 'End Time',
            },
            description:
              'Optional exclusive upper bound on `created_at` (<). Naive datetimes are interpreted as UTC.',
          },
          description:
            'Optional exclusive upper bound on `created_at` (<). Naive datetimes are interpreted as UTC.',
          title: 'End Time',
        }),
      delete_all: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'delete_all',
            in: 'query',
            required: false,
            schema: {
              type: 'boolean',
              description:
                'Opt-in flag that authorizes the request without a bounded `[start_time, end_time)` time window. When `false` (default) or absent, the request must supply both `start_time` AND `end_time` to bound the delete. When `true`, the time-range bound is waived and any other filters (`name`, `identifier`, `annotator_kind`) still narrow the delete within the project — e.g. `delete_all=true&name=X` deletes all annotations named X regardless of time.',
              default: false,
              title: 'Delete All',
            },
            description:
              'Opt-in flag that authorizes the request without a bounded `[start_time, end_time)` time window. When `false` (default) or absent, the request must supply both `start_time` AND `end_time` to bound the delete. When `true`, the time-range bound is waived and any other filters (`name`, `identifier`, `annotator_kind`) still narrow the delete within the project — e.g. `delete_all=true&name=X` deletes all annotations named X regardless of time.',
          },
          description:
            'Opt-in flag that authorizes the request without a bounded `[start_time, end_time)` time window. When `false` (default) or absent, the request must supply both `start_time` AND `end_time` to bound the delete. When `true`, the time-range bound is waived and any other filters (`name`, `identifier`, `annotator_kind`) still narrow the delete within the project — e.g. `delete_all=true&name=X` deletes all annotations named X regardless of time.',
          title: 'Delete All',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Project not found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Invalid parameters', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getV1ProjectsProjectIdentifierSessionAnnotationsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_identifier}/session_annotations',
  tags: ['annotations'],
  summary: 'Get session annotations filtered by session_ids and/or identifier.',
  description:
    'Return session annotations for a project, filtered by `session_ids`, `identifier`, or both. At least one of `session_ids` or `identifier` must be supplied. When both are supplied, results are the AND-intersection of the two filters.',
  operationId: 'listSessionAnnotationsBySessionIds',
  request: {
    params: z.object({
      project_identifier: z
        .string()
        .openapi({
          param: {
            name: 'project_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description:
                'The project identifier: either project ID or project name. If using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
              title: 'Project Identifier',
            },
            description:
              'The project identifier: either project ID or project name. If using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
          },
          description:
            'The project identifier: either project ID or project name. If using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
          title: 'Project Identifier',
        }),
    }),
    query: z.object({
      session_ids: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'session_ids',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              description:
                'Optional list of session ids to fetch annotations for. If omitted, `identifier` must be supplied.',
              title: 'Session Ids',
            },
            description:
              'Optional list of session ids to fetch annotations for. If omitted, `identifier` must be supplied.',
          },
          description:
            'Optional list of session ids to fetch annotations for. If omitted, `identifier` must be supplied.',
          title: 'Session Ids',
        }),
      identifier: z
        .union([
          z.array(z.string().min(1)),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'identifier',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string', minLength: 1 } }, { type: 'null' }],
              description:
                'Optional list of annotation identifiers to filter by. Each value must be non-empty. If omitted, `session_ids` must be supplied. When combined with `session_ids`, results are the AND-intersection of both filters.',
              title: 'Identifier',
            },
            description:
              'Optional list of annotation identifiers to filter by. Each value must be non-empty. If omitted, `session_ids` must be supplied. When combined with `session_ids`, results are the AND-intersection of both filters.',
          },
          description:
            'Optional list of annotation identifiers to filter by. Each value must be non-empty. If omitted, `session_ids` must be supplied. When combined with `session_ids`, results are the AND-intersection of both filters.',
          title: 'Identifier',
        }),
      include_annotation_names: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'include_annotation_names',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              description:
                'Optional list of annotation names to include. If provided, only annotations with these names will be returned (allowlist). When omitted, the response includes every matching row regardless of name (no annotation names are excluded by default).',
              title: 'Include Annotation Names',
            },
            description:
              'Optional list of annotation names to include. If provided, only annotations with these names will be returned (allowlist). When omitted, the response includes every matching row regardless of name (no annotation names are excluded by default).',
          },
          description:
            'Optional list of annotation names to include. If provided, only annotations with these names will be returned (allowlist). When omitted, the response includes every matching row regardless of name (no annotation names are excluded by default).',
          title: 'Include Annotation Names',
        }),
      exclude_annotation_names: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'exclude_annotation_names',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              description: 'Optional list of annotation names to exclude from results.',
              title: 'Exclude Annotation Names',
            },
            description: 'Optional list of annotation names to exclude from results.',
          },
          description: 'Optional list of annotation names to exclude from results.',
          title: 'Exclude Annotation Names',
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
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description: 'A cursor for pagination',
              title: 'Cursor',
            },
            description: 'A cursor for pagination',
          },
          description: 'A cursor for pagination',
          title: 'Cursor',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().gt(0).max(10000),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              maximum: 10000,
              exclusiveMinimum: 0,
              description: 'The maximum number of annotations to return in a single request',
              default: 10,
              title: 'Limit',
            },
            description: 'The maximum number of annotations to return in a single request',
          },
          description: 'The maximum number of annotations to return in a single request',
          title: 'Limit',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: SessionAnnotationsResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: {
      description: 'Project or sessions not found',
      content: { 'text/plain': { schema: z.string() } },
    },
    422: { description: 'Invalid parameters', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const deleteV1ProjectsProjectIdentifierSessionAnnotationsRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{project_identifier}/session_annotations',
  tags: ['annotations'],
  summary: 'Delete session annotations in a project that match the supplied filter.',
  description:
    'Hard-delete session annotations within the named project that match the\nsupplied filter.\n\n- The request must either supply both `start_time` AND `end_time`\n  to bound the delete to a `[start_time, end_time)` time window,\n  OR set `delete_all=true` to acknowledge an unbounded sweep. A request\n  that satisfies neither is rejected with 422.\n- `name`, `identifier`, and `annotator_kind` are optional narrowing\n  filters; on their own they do NOT authorize the request — they only\n  narrow within an already-authorized request (bounded time range or\n  `delete_all=true`).\n- All supplied filters are combined with AND. `name` and `identifier`,\n  when present, must be non-empty.\n- `start_time` is inclusive (`>=`); `end_time` is exclusive\n  (`<`). When both are supplied, `start_time` must be strictly earlier\n  than `end_time` (else 422). A half-bounded range (only one of\n  the two) does NOT satisfy the gate and is rejected unless\n  `delete_all=true` is also set. Naive datetimes are interpreted as UTC.\n- The endpoint is idempotent: a request that matches no rows still\n  returns 204.\n- When authentication is enabled, non-admin callers can only delete rows\n  they own (`user_id == current_user.id`); admins delete all matching\n  rows.',
  operationId: 'deleteSessionAnnotations',
  request: {
    params: z.object({
      project_identifier: z
        .string()
        .openapi({
          param: {
            name: 'project_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description:
                'The project identifier: either project ID or project name. If using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
              title: 'Project Identifier',
            },
            description:
              'The project identifier: either project ID or project name. If using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
          },
          description:
            'The project identifier: either project ID or project name. If using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
          title: 'Project Identifier',
        }),
    }),
    query: z.object({
      name: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string().min(1),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', minLength: 1 }, { type: 'null' }],
              description:
                'Optional annotation name. When provided, must be non-empty and narrows the delete to annotations of that name.',
              title: 'Name',
            },
            description:
              'Optional annotation name. When provided, must be non-empty and narrows the delete to annotations of that name.',
          },
          description:
            'Optional annotation name. When provided, must be non-empty and narrows the delete to annotations of that name.',
          title: 'Name',
        }),
      identifier: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string().min(1),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'identifier',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string', minLength: 1 }, { type: 'null' }],
              description:
                'Optional annotation identifier. When provided, must be non-empty and narrows the delete to annotations with that identifier.',
              title: 'Identifier',
            },
            description:
              'Optional annotation identifier. When provided, must be non-empty and narrows the delete to annotations with that identifier.',
          },
          description:
            'Optional annotation identifier. When provided, must be non-empty and narrows the delete to annotations with that identifier.',
          title: 'Identifier',
        }),
      annotator_kind: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.enum(['LLM', 'CODE', 'HUMAN', 'DECISION', 'AGENT']),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'annotator_kind',
            in: 'query',
            required: false,
            schema: {
              anyOf: [
                { enum: ['LLM', 'CODE', 'HUMAN', 'DECISION', 'AGENT'], type: 'string' },
                { type: 'null' },
              ],
              description:
                'Optional annotator kind. When provided, narrows the delete to annotations produced by this annotator kind.',
              title: 'Annotator Kind',
            },
            description:
              'Optional annotator kind. When provided, narrows the delete to annotations produced by this annotator kind.',
          },
          description:
            'Optional annotator kind. When provided, narrows the delete to annotations produced by this annotator kind.',
          title: 'Annotator Kind',
        }),
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
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              description:
                'Optional inclusive lower bound on `created_at` (>=). Naive datetimes are interpreted as UTC.',
              title: 'Start Time',
            },
            description:
              'Optional inclusive lower bound on `created_at` (>=). Naive datetimes are interpreted as UTC.',
          },
          description:
            'Optional inclusive lower bound on `created_at` (>=). Naive datetimes are interpreted as UTC.',
          title: 'Start Time',
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
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              description:
                'Optional exclusive upper bound on `created_at` (<). Naive datetimes are interpreted as UTC.',
              title: 'End Time',
            },
            description:
              'Optional exclusive upper bound on `created_at` (<). Naive datetimes are interpreted as UTC.',
          },
          description:
            'Optional exclusive upper bound on `created_at` (<). Naive datetimes are interpreted as UTC.',
          title: 'End Time',
        }),
      delete_all: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'delete_all',
            in: 'query',
            required: false,
            schema: {
              type: 'boolean',
              description:
                'Opt-in flag that authorizes the request without a bounded `[start_time, end_time)` time window. When `false` (default) or absent, the request must supply both `start_time` AND `end_time` to bound the delete. When `true`, the time-range bound is waived and any other filters (`name`, `identifier`, `annotator_kind`) still narrow the delete within the project — e.g. `delete_all=true&name=X` deletes all annotations named X regardless of time.',
              default: false,
              title: 'Delete All',
            },
            description:
              'Opt-in flag that authorizes the request without a bounded `[start_time, end_time)` time window. When `false` (default) or absent, the request must supply both `start_time` AND `end_time` to bound the delete. When `true`, the time-range bound is waived and any other filters (`name`, `identifier`, `annotator_kind`) still narrow the delete within the project — e.g. `delete_all=true&name=X` deletes all annotations named X regardless of time.',
          },
          description:
            'Opt-in flag that authorizes the request without a bounded `[start_time, end_time)` time window. When `false` (default) or absent, the request must supply both `start_time` AND `end_time` to bound the delete. When `true`, the time-range bound is waived and any other filters (`name`, `identifier`, `annotator_kind`) still narrow the delete within the project — e.g. `delete_all=true&name=X` deletes all annotations named X regardless of time.',
          title: 'Delete All',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Project not found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Invalid parameters', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getV1DatasetLabelsRoute = createRoute({
  method: 'get',
  path: '/v1/dataset_labels',
  tags: ['datasets'],
  summary: 'List dataset labels',
  description: 'Retrieve a paginated list of all dataset labels in the system.',
  operationId: 'listDatasetLabels',
  request: {
    query: z.object({
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
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description: 'Cursor for pagination (a dataset label GlobalID)',
              title: 'Cursor',
            },
            description: 'Cursor for pagination (a dataset label GlobalID)',
          },
          description: 'Cursor for pagination (a dataset label GlobalID)',
          title: 'Cursor',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().gt(0),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              exclusiveMinimum: 0,
              description: 'The max number of dataset labels to return at a time.',
              default: 100,
              title: 'Limit',
            },
            description: 'The max number of dataset labels to return at a time.',
          },
          description: 'The max number of dataset labels to return at a time.',
          title: 'Limit',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GetDatasetLabelsResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const postV1DatasetLabelsRoute = createRoute({
  method: 'post',
  path: '/v1/dataset_labels',
  tags: ['datasets'],
  summary: 'Create a dataset label',
  operationId: 'createDatasetLabel',
  request: {
    body: {
      content: { 'application/json': { schema: CreateDatasetLabelRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful Response',
      content: { 'application/json': { schema: CreateDatasetLabelResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    409: {
      description: 'A dataset label with the same name already exists',
      content: { 'text/plain': { schema: z.string() } },
    },
    422: { description: 'Invalid request body', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getV1DatasetLabelsLabelIdRoute = createRoute({
  method: 'get',
  path: '/v1/dataset_labels/{label_id}',
  tags: ['datasets'],
  summary: 'Get a dataset label by ID',
  operationId: 'getDatasetLabel',
  request: {
    params: z.object({
      label_id: z
        .string()
        .openapi({
          param: {
            name: 'label_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The ID of the dataset label',
              title: 'Label Id',
            },
            description: 'The ID of the dataset label',
          },
          description: 'The ID of the dataset label',
          title: 'Label Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GetDatasetLabelResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: {
      description: 'Dataset label not found',
      content: { 'text/plain': { schema: z.string() } },
    },
    422: {
      description: 'Invalid dataset label ID',
      content: { 'text/plain': { schema: z.string() } },
    },
  },
})

export const deleteV1DatasetLabelsLabelIdRoute = createRoute({
  method: 'delete',
  path: '/v1/dataset_labels/{label_id}',
  tags: ['datasets'],
  summary: 'Delete a dataset label by ID',
  description:
    'Delete a dataset label. This also removes the label from every dataset it is applied to.',
  operationId: 'deleteDatasetLabel',
  request: {
    params: z.object({
      label_id: z
        .string()
        .openapi({
          param: {
            name: 'label_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The ID of the dataset label',
              title: 'Label Id',
            },
            description: 'The ID of the dataset label',
          },
          description: 'The ID of the dataset label',
          title: 'Label Id',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: {
      description: 'Dataset label not found',
      content: { 'text/plain': { schema: z.string() } },
    },
    422: {
      description: 'Invalid dataset label ID',
      content: { 'text/plain': { schema: z.string() } },
    },
  },
})

export const patchV1DatasetLabelsLabelIdRoute = createRoute({
  method: 'patch',
  path: '/v1/dataset_labels/{label_id}',
  tags: ['datasets'],
  summary: 'Update a dataset label by ID',
  description:
    "Partially update a dataset label's name, color, and/or description. Only the fields included in the request body are changed; omitted fields are left as-is.",
  operationId: 'updateDatasetLabel',
  request: {
    params: z.object({
      label_id: z
        .string()
        .openapi({
          param: {
            name: 'label_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The ID of the dataset label',
              title: 'Label Id',
            },
            description: 'The ID of the dataset label',
          },
          description: 'The ID of the dataset label',
          title: 'Label Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDatasetLabelRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: UpdateDatasetLabelResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: {
      description: 'Dataset label not found',
      content: { 'text/plain': { schema: z.string() } },
    },
    409: {
      description: 'A dataset label with the same name already exists',
      content: { 'text/plain': { schema: z.string() } },
    },
    422: {
      description: 'Invalid dataset label ID or request body',
      content: { 'text/plain': { schema: z.string() } },
    },
  },
})

export const getV1DatasetsDatasetIdentifierLabelsRoute = createRoute({
  method: 'get',
  path: '/v1/datasets/{dataset_identifier}/labels',
  tags: ['datasets'],
  summary: 'List the labels applied to a dataset',
  operationId: 'listDatasetLabelsForDataset',
  request: {
    params: z.object({
      dataset_identifier: z
        .string()
        .openapi({
          param: {
            name: 'dataset_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The dataset identifier: either the dataset ID (GlobalID) or its name.',
              title: 'Dataset Identifier',
            },
            description: 'The dataset identifier: either the dataset ID (GlobalID) or its name.',
          },
          description: 'The dataset identifier: either the dataset ID (GlobalID) or its name.',
          title: 'Dataset Identifier',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListDatasetLabelsForDatasetResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Dataset not found', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Invalid dataset identifier',
      content: { 'text/plain': { schema: z.string() } },
    },
  },
})

export const putV1DatasetsDatasetIdentifierLabelsRoute = createRoute({
  method: 'put',
  path: '/v1/datasets/{dataset_identifier}/labels',
  tags: ['datasets'],
  summary: 'Replace the set of labels applied to a dataset',
  description:
    'Replace the entire set of labels applied to a dataset. Labels present in the request but not currently applied are added; labels currently applied but absent from the request are removed. An empty list removes all labels.',
  operationId: 'setDatasetLabelsForDataset',
  request: {
    params: z.object({
      dataset_identifier: z
        .string()
        .openapi({
          param: {
            name: 'dataset_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The dataset identifier: either the dataset ID (GlobalID) or its name.',
              title: 'Dataset Identifier',
            },
            description: 'The dataset identifier: either the dataset ID (GlobalID) or its name.',
          },
          description: 'The dataset identifier: either the dataset ID (GlobalID) or its name.',
          title: 'Dataset Identifier',
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetDatasetLabelsRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: SetDatasetLabelsForDatasetResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: {
      description: 'Dataset or one or more dataset labels not found',
      content: { 'text/plain': { schema: z.string() } },
    },
    422: {
      description: 'Invalid dataset identifier or request body',
      content: { 'text/plain': { schema: z.string() } },
    },
  },
})

export const putV1DatasetsDatasetIdentifierLabelsLabelIdRoute = createRoute({
  method: 'put',
  path: '/v1/datasets/{dataset_identifier}/labels/{label_id}',
  tags: ['datasets'],
  summary: 'Apply a label to a dataset',
  description:
    'Apply an existing label to a dataset. This operation is idempotent: applying a label that is already applied is a no-op that returns the label.',
  operationId: 'addDatasetLabelToDataset',
  request: {
    params: z.object({
      dataset_identifier: z
        .string()
        .openapi({
          param: {
            name: 'dataset_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The dataset identifier: either the dataset ID (GlobalID) or its name.',
              title: 'Dataset Identifier',
            },
            description: 'The dataset identifier: either the dataset ID (GlobalID) or its name.',
          },
          description: 'The dataset identifier: either the dataset ID (GlobalID) or its name.',
          title: 'Dataset Identifier',
        }),
      label_id: z
        .string()
        .openapi({
          param: {
            name: 'label_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The ID of the dataset label to apply',
              title: 'Label Id',
            },
            description: 'The ID of the dataset label to apply',
          },
          description: 'The ID of the dataset label to apply',
          title: 'Label Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AddDatasetLabelToDatasetResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: {
      description: 'Dataset or dataset label not found',
      content: { 'text/plain': { schema: z.string() } },
    },
    422: {
      description: 'Invalid dataset identifier or dataset label ID',
      content: { 'text/plain': { schema: z.string() } },
    },
  },
})

export const deleteV1DatasetsDatasetIdentifierLabelsLabelIdRoute = createRoute({
  method: 'delete',
  path: '/v1/datasets/{dataset_identifier}/labels/{label_id}',
  tags: ['datasets'],
  summary: 'Remove a label from a dataset',
  description:
    'Remove a label from a dataset without deleting the label itself. This operation is idempotent: removing a label that is not applied is a no-op.',
  operationId: 'removeDatasetLabelFromDataset',
  request: {
    params: z.object({
      dataset_identifier: z
        .string()
        .openapi({
          param: {
            name: 'dataset_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The dataset identifier: either the dataset ID (GlobalID) or its name.',
              title: 'Dataset Identifier',
            },
            description: 'The dataset identifier: either the dataset ID (GlobalID) or its name.',
          },
          description: 'The dataset identifier: either the dataset ID (GlobalID) or its name.',
          title: 'Dataset Identifier',
        }),
      label_id: z
        .string()
        .openapi({
          param: {
            name: 'label_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The ID of the dataset label to remove',
              title: 'Label Id',
            },
            description: 'The ID of the dataset label to remove',
          },
          description: 'The ID of the dataset label to remove',
          title: 'Label Id',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Dataset not found', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Invalid dataset identifier or dataset label ID',
      content: { 'text/plain': { schema: z.string() } },
    },
  },
})

export const getV1DatasetsRoute = createRoute({
  method: 'get',
  path: '/v1/datasets',
  tags: ['datasets'],
  summary: 'List datasets',
  operationId: 'listDatasets',
  request: {
    query: z.object({
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
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description: 'Cursor for pagination',
              title: 'Cursor',
            },
            description: 'Cursor for pagination',
          },
          description: 'Cursor for pagination',
          title: 'Cursor',
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
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description: 'An optional dataset name to filter by',
              title: 'Name',
            },
            description: 'An optional dataset name to filter by',
          },
          description: 'An optional dataset name to filter by',
          title: 'Name',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().gt(0),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              exclusiveMinimum: 0,
              description: 'The max number of datasets to return at a time.',
              default: 10,
              title: 'Limit',
            },
            description: 'The max number of datasets to return at a time.',
          },
          description: 'The max number of datasets to return at a time.',
          title: 'Limit',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListDatasetsResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getV1DatasetsIdRoute = createRoute({
  method: 'get',
  path: '/v1/datasets/{id}',
  tags: ['datasets'],
  summary: 'Get dataset by ID',
  operationId: 'getDataset',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', description: 'The ID of the dataset', title: 'Id' },
            description: 'The ID of the dataset',
          },
          description: 'The ID of the dataset',
          title: 'Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GetDatasetResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const deleteV1DatasetsIdRoute = createRoute({
  method: 'delete',
  path: '/v1/datasets/{id}',
  tags: ['datasets'],
  summary: 'Delete dataset by ID',
  operationId: 'deleteDatasetById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The ID of the dataset to delete.',
              title: 'Id',
            },
            description: 'The ID of the dataset to delete.',
          },
          description: 'The ID of the dataset to delete.',
          title: 'Id',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Dataset not found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Invalid dataset ID', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getV1DatasetsIdVersionsRoute = createRoute({
  method: 'get',
  path: '/v1/datasets/{id}/versions',
  tags: ['datasets'],
  summary: 'List dataset versions',
  operationId: 'listDatasetVersionsByDatasetId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', description: 'The ID of the dataset', title: 'Id' },
            description: 'The ID of the dataset',
          },
          description: 'The ID of the dataset',
          title: 'Id',
        }),
    }),
    query: z.object({
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
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description: 'Cursor for pagination',
              title: 'Cursor',
            },
            description: 'Cursor for pagination',
          },
          description: 'Cursor for pagination',
          title: 'Cursor',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().gt(0),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              exclusiveMinimum: 0,
              description: 'The max number of dataset versions to return at a time',
              default: 10,
              title: 'Limit',
            },
            description: 'The max number of dataset versions to return at a time',
          },
          description: 'The max number of dataset versions to return at a time',
          title: 'Limit',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListDatasetVersionsResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const postV1DatasetsUploadRoute = createRoute({
  method: 'post',
  path: '/v1/datasets/upload',
  tags: ['datasets'],
  summary: 'Upload dataset from JSON, JSONL, CSV, or PyArrow',
  operationId: 'uploadDataset',
  request: {
    query: z.object({
      sync: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'sync',
            in: 'query',
            required: false,
            schema: {
              type: 'boolean',
              description:
                'If true, fulfill request synchronously and return JSON containing dataset_id.',
              default: false,
              title: 'Sync',
            },
            description:
              'If true, fulfill request synchronously and return JSON containing dataset_id.',
          },
          description:
            'If true, fulfill request synchronously and return JSON containing dataset_id.',
          title: 'Sync',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.enum(['create', 'append', 'update']).exactOptional(),
              name: z.string(),
              description: z.string().exactOptional(),
              inputs: z.array(z.object({})),
              outputs: z.array(z.object({})).exactOptional(),
              metadata: z.array(z.object({})).exactOptional(),
              splits: z
                .array(z.xor([z.string(), z.array(z.string()), z.null().nullable()]))
                .exactOptional()
                .openapi({ description: 'Split per example: string, string array, or null' }),
              span_ids: z
                .array(z.xor([z.string(), z.null().nullable()]))
                .exactOptional()
                .openapi({ description: 'Span IDs to link examples back to spans' }),
              example_ids: z
                .array(z.xor([z.string(), z.null().nullable()]))
                .exactOptional()
                .openapi({
                  description:
                    "Optional example ID per example. If provided, it is used as the example's stable public ID.",
                }),
            })
            .openapi({ required: ['name', 'inputs'] }),
        },
        'multipart/form-data': {
          schema: z
            .object({
              action: z.enum(['create', 'append', 'update']).exactOptional(),
              name: z.string(),
              description: z.string().exactOptional(),
              'input_keys[]': z.preprocess(
                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                z.array(z.string()).superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              ),
              'output_keys[]': z.preprocess(
                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                z.array(z.string()).superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              ),
              'metadata_keys[]': z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()).superRefine((items, ctx) => {
                    const seen = new Map()
                    for (const [i, val] of items.entries()) {
                      const key = JSON.stringify(val)
                      if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                      else seen.set(key, i)
                    }
                  }),
                )
                .exactOptional(),
              'split_keys[]': z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()).superRefine((items, ctx) => {
                    const seen = new Map()
                    for (const [i, val] of items.entries()) {
                      const key = JSON.stringify(val)
                      if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                      else seen.set(key, i)
                    }
                  }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Deprecated: use split_key instead. Column names for auto-assigning examples to splits',
                }),
              split_key: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Single column name containing split names (plain string or JSON list) per row',
                }),
              'flatten_keys[]': z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()).superRefine((items, ctx) => {
                    const seen = new Map()
                    for (const [i, val] of items.entries()) {
                      const key = JSON.stringify(val)
                      if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                      else seen.set(key, i)
                    }
                  }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Column names whose object values should be flattened into their selected bucket',
                }),
              span_id_key: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Column name for span IDs to link examples back to spans',
                }),
              example_id_key: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Column name containing stable IDs for examples. When provided, examples with matching IDs are updated in place when their content changes.',
                }),
              file: z.file().openapi({ type: 'string', format: 'binary' }),
            })
            .openapi({ required: ['name', 'input_keys[]', 'output_keys[]', 'file'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .union([UploadDatasetResponseBodySchema, z.null().nullable()])
            .openapi({ title: 'Response Uploaddataset' }),
        },
      },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    409: {
      description: 'Dataset with the given name already exists (action=create).',
      content: { 'text/plain': { schema: z.string() } },
    },
    422: { description: 'Invalid request body', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getV1DatasetsIdExamplesRoute = createRoute({
  method: 'get',
  path: '/v1/datasets/{id}/examples',
  tags: ['datasets'],
  summary: 'Get examples from a dataset',
  operationId: 'getDatasetExamples',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', description: 'The ID of the dataset', title: 'Id' },
            description: 'The ID of the dataset',
          },
          description: 'The ID of the dataset',
          title: 'Id',
        }),
    }),
    query: z.object({
      version_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'version_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'The ID of the dataset version (if omitted, returns data from the latest version)',
              title: 'Version Id',
            },
            description:
              'The ID of the dataset version (if omitted, returns data from the latest version)',
          },
          description:
            'The ID of the dataset version (if omitted, returns data from the latest version)',
          title: 'Version Id',
        }),
      split: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'split',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              description: 'List of dataset split identifiers (GlobalIDs or names) to filter by',
              title: 'Split',
            },
            description: 'List of dataset split identifiers (GlobalIDs or names) to filter by',
          },
          description: 'List of dataset split identifiers (GlobalIDs or names) to filter by',
          title: 'Split',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListDatasetExamplesResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1DatasetsDatasetIdentifierSplitsRoute = createRoute({
  method: 'get',
  path: '/v1/datasets/{dataset_identifier}/splits',
  tags: ['datasets'],
  summary: 'List dataset splits',
  operationId: 'listDatasetSplits',
  request: {
    params: z.object({
      dataset_identifier: z
        .string()
        .openapi({
          param: {
            name: 'dataset_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The dataset identifier: either dataset ID or dataset name.',
              title: 'Dataset Identifier',
            },
            description: 'The dataset identifier: either dataset ID or dataset name.',
          },
          description: 'The dataset identifier: either dataset ID or dataset name.',
          title: 'Dataset Identifier',
        }),
    }),
    query: z.object({
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
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description: 'Cursor for pagination',
              title: 'Cursor',
            },
            description: 'Cursor for pagination',
          },
          description: 'Cursor for pagination',
          title: 'Cursor',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().gt(0).max(1000),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              maximum: 1000,
              exclusiveMinimum: 0,
              description: 'The max number of dataset splits to return at a time.',
              default: 10,
              title: 'Limit',
            },
            description: 'The max number of dataset splits to return at a time.',
          },
          description: 'The max number of dataset splits to return at a time.',
          title: 'Limit',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListDatasetSplitsResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Dataset not found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Invalid request', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const postV1DatasetsDatasetIdentifierSplitsRoute = createRoute({
  method: 'post',
  path: '/v1/datasets/{dataset_identifier}/splits',
  tags: ['datasets'],
  summary: 'Create a dataset split',
  operationId: 'createDatasetSplit',
  request: {
    params: z.object({
      dataset_identifier: z
        .string()
        .openapi({
          param: {
            name: 'dataset_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The dataset identifier: either dataset ID or dataset name.',
              title: 'Dataset Identifier',
            },
            description: 'The dataset identifier: either dataset ID or dataset name.',
          },
          description: 'The dataset identifier: either dataset ID or dataset name.',
          title: 'Dataset Identifier',
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDatasetSplitRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful Response',
      content: { 'application/json': { schema: CreateDatasetSplitResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: {
      description: 'Dataset or example not found',
      content: { 'text/plain': { schema: z.string() } },
    },
    409: {
      description: 'A dataset split with the given name already exists',
      content: { 'text/plain': { schema: z.string() } },
    },
    422: { description: 'Invalid request', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const deleteV1DatasetsDatasetIdentifierSplitsSplitIdRoute = createRoute({
  method: 'delete',
  path: '/v1/datasets/{dataset_identifier}/splits/{split_id}',
  tags: ['datasets'],
  summary: 'Delete a dataset split',
  operationId: 'deleteDatasetSplit',
  request: {
    params: z.object({
      dataset_identifier: z
        .string()
        .openapi({
          param: {
            name: 'dataset_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The dataset identifier: either dataset ID or dataset name.',
              title: 'Dataset Identifier',
            },
            description: 'The dataset identifier: either dataset ID or dataset name.',
          },
          description: 'The dataset identifier: either dataset ID or dataset name.',
          title: 'Dataset Identifier',
        }),
      split_id: z
        .string()
        .openapi({
          param: {
            name: 'split_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The ID (GlobalID) of the dataset split.',
              title: 'Split Id',
            },
            description: 'The ID (GlobalID) of the dataset split.',
          },
          description: 'The ID (GlobalID) of the dataset split.',
          title: 'Split Id',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: {
      description: 'Dataset or split not found',
      content: { 'text/plain': { schema: z.string() } },
    },
    422: {
      description: 'Invalid dataset split ID',
      content: { 'text/plain': { schema: z.string() } },
    },
  },
})

export const patchV1DatasetsDatasetIdentifierSplitsSplitIdRoute = createRoute({
  method: 'patch',
  path: '/v1/datasets/{dataset_identifier}/splits/{split_id}',
  tags: ['datasets'],
  summary: 'Update a dataset split',
  operationId: 'updateDatasetSplit',
  request: {
    params: z.object({
      dataset_identifier: z
        .string()
        .openapi({
          param: {
            name: 'dataset_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The dataset identifier: either dataset ID or dataset name.',
              title: 'Dataset Identifier',
            },
            description: 'The dataset identifier: either dataset ID or dataset name.',
          },
          description: 'The dataset identifier: either dataset ID or dataset name.',
          title: 'Dataset Identifier',
        }),
      split_id: z
        .string()
        .openapi({
          param: {
            name: 'split_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The ID (GlobalID) of the dataset split.',
              title: 'Split Id',
            },
            description: 'The ID (GlobalID) of the dataset split.',
          },
          description: 'The ID (GlobalID) of the dataset split.',
          title: 'Split Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDatasetSplitRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: UpdateDatasetSplitResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: {
      description: 'Dataset, split, or example not found',
      content: { 'text/plain': { schema: z.string() } },
    },
    409: {
      description: 'A dataset split with the given name already exists',
      content: { 'text/plain': { schema: z.string() } },
    },
    422: { description: 'Invalid request', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getV1DatasetsIdCsvRoute = createRoute({
  method: 'get',
  path: '/v1/datasets/{id}/csv',
  tags: ['datasets'],
  summary: 'Download dataset examples as CSV file',
  operationId: 'getDatasetCsv',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', description: 'The ID of the dataset', title: 'Id' },
            description: 'The ID of the dataset',
          },
          description: 'The ID of the dataset',
          title: 'Id',
        }),
    }),
    query: z.object({
      version_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'version_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'The ID of the dataset version (if omitted, returns data from the latest version)',
              title: 'Version Id',
            },
            description:
              'The ID of the dataset version (if omitted, returns data from the latest version)',
          },
          description:
            'The ID of the dataset version (if omitted, returns data from the latest version)',
          title: 'Version Id',
        }),
    }),
  },
  responses: {
    200: { description: 'Successful Response', content: { 'text/csv': { schema: z.string() } } },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getV1DatasetsIdJsonlRoute = createRoute({
  method: 'get',
  path: '/v1/datasets/{id}/jsonl',
  tags: ['datasets'],
  summary: 'Download dataset examples as JSONL file',
  operationId: 'getDatasetJSONL',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', description: 'The ID of the dataset', title: 'Id' },
            description: 'The ID of the dataset',
          },
          description: 'The ID of the dataset',
          title: 'Id',
        }),
    }),
    query: z.object({
      version_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'version_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'The ID of the dataset version (if omitted, returns data from the latest version)',
              title: 'Version Id',
            },
            description:
              'The ID of the dataset version (if omitted, returns data from the latest version)',
          },
          description:
            'The ID of the dataset version (if omitted, returns data from the latest version)',
          title: 'Version Id',
        }),
    }),
  },
  responses: {
    200: { description: 'Successful Response', content: { 'text/plain': { schema: z.string() } } },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Invalid dataset or version ID',
      content: { 'text/plain': { schema: z.string() } },
    },
  },
})

export const getV1DatasetsIdJsonlOpenaiFtRoute = createRoute({
  method: 'get',
  path: '/v1/datasets/{id}/jsonl/openai_ft',
  tags: ['datasets'],
  summary: 'Download dataset examples as OpenAI fine-tuning JSONL file',
  operationId: 'getDatasetJSONLOpenAIFineTuning',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', description: 'The ID of the dataset', title: 'Id' },
            description: 'The ID of the dataset',
          },
          description: 'The ID of the dataset',
          title: 'Id',
        }),
    }),
    query: z.object({
      version_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'version_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'The ID of the dataset version (if omitted, returns data from the latest version)',
              title: 'Version Id',
            },
            description:
              'The ID of the dataset version (if omitted, returns data from the latest version)',
          },
          description:
            'The ID of the dataset version (if omitted, returns data from the latest version)',
          title: 'Version Id',
        }),
    }),
  },
  responses: {
    200: { description: 'Successful Response', content: { 'text/plain': { schema: z.string() } } },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Invalid dataset or version ID',
      content: { 'text/plain': { schema: z.string() } },
    },
  },
})

export const getV1DatasetsIdJsonlOpenaiEvalsRoute = createRoute({
  method: 'get',
  path: '/v1/datasets/{id}/jsonl/openai_evals',
  tags: ['datasets'],
  summary: 'Download dataset examples as OpenAI evals JSONL file',
  operationId: 'getDatasetJSONLOpenAIEvals',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', description: 'The ID of the dataset', title: 'Id' },
            description: 'The ID of the dataset',
          },
          description: 'The ID of the dataset',
          title: 'Id',
        }),
    }),
    query: z.object({
      version_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'version_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'The ID of the dataset version (if omitted, returns data from the latest version)',
              title: 'Version Id',
            },
            description:
              'The ID of the dataset version (if omitted, returns data from the latest version)',
          },
          description:
            'The ID of the dataset version (if omitted, returns data from the latest version)',
          title: 'Version Id',
        }),
    }),
  },
  responses: {
    200: { description: 'Successful Response', content: { 'text/plain': { schema: z.string() } } },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Invalid dataset or version ID',
      content: { 'text/plain': { schema: z.string() } },
    },
  },
})

export const getV1DatasetsDatasetIdExperimentsRoute = createRoute({
  method: 'get',
  path: '/v1/datasets/{dataset_id}/experiments',
  tags: ['experiments'],
  summary: 'List experiments by dataset',
  description: 'Retrieve a paginated list of experiments for the specified dataset.',
  operationId: 'listExperiments',
  request: {
    params: z.object({
      dataset_id: z
        .string()
        .openapi({
          param: {
            name: 'dataset_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dataset ID' },
          },
          title: 'Dataset ID',
        }),
    }),
    query: z.object({
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
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description: 'Cursor for pagination (base64-encoded experiment ID)',
              title: 'Cursor',
            },
            description: 'Cursor for pagination (base64-encoded experiment ID)',
          },
          description: 'Cursor for pagination (base64-encoded experiment ID)',
          title: 'Cursor',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().gt(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              exclusiveMinimum: 0,
              description: 'The max number of experiments to return at a time.',
              default: 50,
              title: 'Limit',
            },
            description: 'The max number of experiments to return at a time.',
          },
          description: 'The max number of experiments to return at a time.',
          title: 'Limit',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Paginated list of experiments for the dataset',
      content: { 'application/json': { schema: ListExperimentsResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const postV1DatasetsDatasetIdExperimentsRoute = createRoute({
  method: 'post',
  path: '/v1/datasets/{dataset_id}/experiments',
  tags: ['experiments'],
  summary: 'Create experiment on a dataset',
  operationId: 'createExperiment',
  request: {
    params: z.object({
      dataset_id: z
        .string()
        .openapi({
          param: {
            name: 'dataset_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Dataset ID' },
          },
          title: 'Dataset ID',
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateExperimentRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Experiment retrieved successfully',
      content: { 'application/json': { schema: CreateExperimentResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: {
      description: 'Dataset or DatasetVersion not found',
      content: { 'text/plain': { schema: z.string() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1ExperimentsExperimentIdRoute = createRoute({
  method: 'get',
  path: '/v1/experiments/{experiment_id}',
  tags: ['experiments'],
  summary: 'Get experiment by ID',
  operationId: 'getExperiment',
  request: {
    params: z.object({
      experiment_id: z
        .string()
        .openapi({
          param: {
            name: 'experiment_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Experiment Id' },
          },
          title: 'Experiment Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Experiment retrieved successfully',
      content: { 'application/json': { schema: GetExperimentResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Experiment not found', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const deleteV1ExperimentsExperimentIdRoute = createRoute({
  method: 'delete',
  path: '/v1/experiments/{experiment_id}',
  tags: ['experiments'],
  summary: 'Delete experiment by ID',
  operationId: 'deleteExperiment',
  request: {
    params: z.object({
      experiment_id: z
        .string()
        .openapi({
          param: {
            name: 'experiment_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Experiment Id' },
          },
          title: 'Experiment Id',
        }),
    }),
    query: z.object({
      delete_project: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'delete_project',
            in: 'query',
            required: false,
            schema: {
              type: 'boolean',
              description:
                'If true, also delete the project associated with the experiment that contains traces and spans for the experiment tasks.',
              default: false,
              title: 'Delete Project',
            },
            description:
              'If true, also delete the project associated with the experiment that contains traces and spans for the experiment tasks.',
          },
          description:
            'If true, also delete the project associated with the experiment that contains traces and spans for the experiment tasks.',
          title: 'Delete Project',
        }),
    }),
  },
  responses: {
    204: { description: 'Experiment deleted successfully' },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Experiment not found', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const patchV1ExperimentsExperimentIdRoute = createRoute({
  method: 'patch',
  path: '/v1/experiments/{experiment_id}',
  tags: ['experiments'],
  summary: 'Update an experiment by ID',
  description:
    "Partially update an experiment's name, description, and/or metadata. Only the fields included in the request body are changed; omitted fields are left as-is. Patching an ephemeral experiment refreshes its last-update timestamp, which extends the window before it is swept away.",
  operationId: 'updateExperiment',
  request: {
    params: z.object({
      experiment_id: z
        .string()
        .openapi({
          param: {
            name: 'experiment_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Experiment ID' },
          },
          title: 'Experiment ID',
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateExperimentRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Experiment updated successfully',
      content: { 'application/json': { schema: UpdateExperimentResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Experiment not found', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Invalid experiment ID or request body',
      content: { 'text/plain': { schema: z.string() } },
    },
  },
})

export const getV1ExperimentsExperimentIdIncompleteRunsRoute = createRoute({
  method: 'get',
  path: '/v1/experiments/{experiment_id}/incomplete-runs',
  tags: ['experiments'],
  summary: 'Get incomplete runs for an experiment',
  description:
    'Get runs that need to be completed for this experiment.\n\nReturns all incomplete runs, including both missing runs (not yet attempted)\nand failed runs (attempted but have errors).\n\nArgs:\n    experiment_id: The ID of the experiment\n    cursor: Cursor for pagination\n    limit: Maximum number of results to return\n\nReturns:\n    Paginated list of incomplete runs grouped by dataset example,\n    with repetition numbers that need to be run',
  operationId: 'getIncompleteExperimentRuns',
  request: {
    params: z.object({
      experiment_id: z
        .string()
        .openapi({
          param: {
            name: 'experiment_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Experiment Id' },
          },
          title: 'Experiment Id',
        }),
    }),
    query: z.object({
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
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description: 'Cursor for pagination',
              title: 'Cursor',
            },
            description: 'Cursor for pagination',
          },
          description: 'Cursor for pagination',
          title: 'Cursor',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().gt(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              exclusiveMinimum: 0,
              description: 'Maximum number of examples with incomplete runs to return',
              default: 50,
              title: 'Limit',
            },
            description: 'Maximum number of examples with incomplete runs to return',
          },
          description: 'Maximum number of examples with incomplete runs to return',
          title: 'Limit',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Incomplete runs retrieved successfully',
      content: { 'application/json': { schema: GetIncompleteExperimentRunsResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Experiment not found', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Invalid cursor format',
      content: { 'text/plain': { schema: z.string() } },
    },
  },
})

export const getV1ExperimentsExperimentIdJsonRoute = createRoute({
  method: 'get',
  path: '/v1/experiments/{experiment_id}/json',
  tags: ['experiments'],
  summary: 'Download experiment runs as a JSON file',
  operationId: 'getExperimentJSON',
  request: {
    params: z.object({
      experiment_id: z
        .string()
        .openapi({
          param: {
            name: 'experiment_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Experiment ID' },
          },
          title: 'Experiment ID',
        }),
    }),
  },
  responses: {
    200: { description: 'Successful Response', content: { 'text/plain': { schema: z.string() } } },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Experiment not found', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1ExperimentsExperimentIdCsvRoute = createRoute({
  method: 'get',
  path: '/v1/experiments/{experiment_id}/csv',
  tags: ['experiments'],
  summary: 'Download experiment runs as a CSV file',
  operationId: 'getExperimentCSV',
  request: {
    params: z.object({
      experiment_id: z
        .string()
        .openapi({
          param: {
            name: 'experiment_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Experiment ID' },
          },
          title: 'Experiment ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() }, 'text/csv': { schema: z.string() } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1ExperimentsExperimentIdTagsRoute = createRoute({
  method: 'get',
  path: '/v1/experiments/{experiment_id}/tags',
  tags: ['experiments'],
  summary: 'List the tags applied to an experiment',
  description:
    "List the tags currently pointing at this experiment. Tags are scoped to the experiment's dataset, so a tag appears here only while this experiment owns it.",
  operationId: 'listExperimentTags',
  request: {
    params: z.object({
      experiment_id: z
        .string()
        .openapi({
          param: {
            name: 'experiment_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The ID of the experiment',
              title: 'Experiment Id',
            },
            description: 'The ID of the experiment',
          },
          description: 'The ID of the experiment',
          title: 'Experiment Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'The tags currently applied to the experiment',
      content: { 'application/json': { schema: ListExperimentTagsResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Experiment not found', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Invalid experiment ID',
      content: { 'text/plain': { schema: z.string() } },
    },
  },
})

export const postV1ExperimentsExperimentIdTagsRoute = createRoute({
  method: 'post',
  path: '/v1/experiments/{experiment_id}/tags',
  tags: ['experiments'],
  summary: 'Assign a tag to an experiment',
  description:
    "Assign a tag to an experiment. Tags are scoped to the experiment's dataset and each tag name points at a single experiment, so assigning a tag that another experiment on the same dataset owns atomically moves the tag to this experiment. Re-assigning a tag the experiment already owns is idempotent and replaces the description. Assigning the reserved 'baseline' tag makes this experiment the dataset's baseline; ephemeral experiments cannot become the baseline.",
  operationId: 'setExperimentTag',
  request: {
    params: z.object({
      experiment_id: z
        .string()
        .openapi({
          param: {
            name: 'experiment_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The ID of the experiment',
              title: 'Experiment Id',
            },
            description: 'The ID of the experiment',
          },
          description: 'The ID of the experiment',
          title: 'Experiment Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetExperimentTagRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The tag as it now applies to the experiment',
      content: { 'application/json': { schema: SetExperimentTagResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Experiment not found', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description:
        'Invalid experiment ID or request body, or the experiment is ephemeral and cannot be tagged as the baseline',
      content: { 'text/plain': { schema: z.string() } },
    },
  },
})

export const deleteV1ExperimentsExperimentIdTagsTagIdentifierRoute = createRoute({
  method: 'delete',
  path: '/v1/experiments/{experiment_id}/tags/{tag_identifier}',
  tags: ['experiments'],
  summary: 'Remove a tag from an experiment',
  description:
    'Remove a tag, identified by its node ID or name, from the experiment that owns it. This operation is idempotent and never steals a tag from another experiment: if the experiment does not currently own the tag, the request is a no-op.',
  operationId: 'deleteExperimentTag',
  request: {
    params: z.object({
      experiment_id: z
        .string()
        .openapi({
          param: {
            name: 'experiment_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The ID of the experiment',
              title: 'Experiment Id',
            },
            description: 'The ID of the experiment',
          },
          description: 'The ID of the experiment',
          title: 'Experiment Id',
        }),
      tag_identifier: z
        .string()
        .openapi({
          param: {
            name: 'tag_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The node ID or name of the tag to remove',
              title: 'Tag Identifier',
            },
            description: 'The node ID or name of the tag to remove',
          },
          description: 'The node ID or name of the tag to remove',
          title: 'Tag Identifier',
        }),
    }),
  },
  responses: {
    204: { description: 'No content returned on successful tag removal' },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Experiment not found', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Invalid experiment ID or tag identifier',
      content: { 'text/plain': { schema: z.string() } },
    },
  },
})

export const getV1ExperimentsExperimentIdRunsRoute = createRoute({
  method: 'get',
  path: '/v1/experiments/{experiment_id}/runs',
  tags: ['experiments'],
  summary: 'List runs for an experiment',
  description: 'Retrieve a paginated list of runs for an experiment',
  operationId: 'listExperimentRuns',
  request: {
    params: z.object({
      experiment_id: z
        .string()
        .openapi({
          param: {
            name: 'experiment_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Experiment Id' },
          },
          title: 'Experiment Id',
        }),
    }),
    query: z.object({
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
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description: 'Cursor for pagination (base64-encoded experiment run ID)',
              title: 'Cursor',
            },
            description: 'Cursor for pagination (base64-encoded experiment run ID)',
          },
          description: 'Cursor for pagination (base64-encoded experiment run ID)',
          title: 'Cursor',
        }),
      limit: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.int().gt(0), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'integer', exclusiveMinimum: 0 }, { type: 'null' }],
              description:
                'The max number of experiment runs to return at a time. If not specified, returns all results.',
              title: 'Limit',
            },
            description:
              'The max number of experiment runs to return at a time. If not specified, returns all results.',
          },
          description:
            'The max number of experiment runs to return at a time. If not specified, returns all results.',
          title: 'Limit',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Experiment runs retrieved successfully',
      content: { 'application/json': { schema: ListExperimentRunsResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Experiment not found', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Invalid cursor format',
      content: { 'text/plain': { schema: z.string() } },
    },
  },
})

export const postV1ExperimentsExperimentIdRunsRoute = createRoute({
  method: 'post',
  path: '/v1/experiments/{experiment_id}/runs',
  tags: ['experiments'],
  summary: 'Create run for an experiment',
  operationId: 'createExperimentRun',
  request: {
    params: z.object({
      experiment_id: z
        .string()
        .openapi({
          param: {
            name: 'experiment_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Experiment Id' },
          },
          title: 'Experiment Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateExperimentRunRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Experiment run created successfully',
      content: { 'application/json': { schema: CreateExperimentRunResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: {
      description: 'Experiment or dataset example not found',
      content: { 'text/plain': { schema: z.string() } },
    },
    409: {
      description: 'Experiment run already exists with a successful result and cannot be updated',
      content: { 'text/plain': { schema: z.string() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1ExperimentsExperimentIdIncompleteEvaluationsRoute = createRoute({
  method: 'get',
  path: '/v1/experiments/{experiment_id}/incomplete-evaluations',
  tags: ['experiments'],
  summary: 'Get incomplete evaluations for an experiment',
  description:
    'Get experiment runs that have incomplete evaluations.\n\nReturns runs with:\n- Missing evaluations (evaluator has not been run)\n- Failed evaluations (evaluator ran but has errors)\n\nArgs:\n    experiment_id: The ID of the experiment\n    evaluation_name: List of evaluation names to check (required, at least one)\n    cursor: Cursor for pagination\n    limit: Maximum number of results to return\n\nReturns:\n    Paginated list of runs with incomplete evaluations',
  operationId: 'getIncompleteExperimentEvaluations',
  request: {
    params: z.object({
      experiment_id: z
        .string()
        .openapi({
          param: {
            name: 'experiment_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Experiment Id' },
          },
          title: 'Experiment Id',
        }),
    }),
    query: z.object({
      evaluation_name: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'evaluation_name',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string' },
              description: 'Evaluation names to check',
              default: [],
              title: 'Evaluation Name',
            },
            description: 'Evaluation names to check',
          },
          description: 'Evaluation names to check',
          title: 'Evaluation Name',
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
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description: 'Cursor for pagination',
              title: 'Cursor',
            },
            description: 'Cursor for pagination',
          },
          description: 'Cursor for pagination',
          title: 'Cursor',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().gt(0),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              exclusiveMinimum: 0,
              description: 'Maximum number of runs with incomplete evaluations to return',
              default: 50,
              title: 'Limit',
            },
            description: 'Maximum number of runs with incomplete evaluations to return',
          },
          description: 'Maximum number of runs with incomplete evaluations to return',
          title: 'Limit',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Incomplete evaluations retrieved successfully',
      content: { 'application/json': { schema: GetIncompleteEvaluationsResponseBodySchema } },
    },
    400: {
      description: 'No evaluator names provided',
      content: { 'text/plain': { schema: z.string() } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Experiment not found', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Invalid cursor format',
      content: { 'text/plain': { schema: z.string() } },
    },
  },
})

export const postV1ExperimentEvaluationsRoute = createRoute({
  method: 'post',
  path: '/v1/experiment_evaluations',
  tags: ['experiments'],
  summary: 'Create or update evaluation for an experiment run',
  operationId: 'upsertExperimentEvaluation',
  request: {
    body: {
      content: { 'application/json': { schema: UpsertExperimentEvaluationRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: UpsertExperimentEvaluationResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: {
      description: 'Experiment run not found',
      content: { 'text/plain': { schema: z.string() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1ProjectsProjectIdentifierTracesRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_identifier}/traces',
  tags: ['traces'],
  summary: 'List traces for a project',
  operationId: 'listProjectTraces',
  request: {
    params: z.object({
      project_identifier: z
        .string()
        .openapi({
          param: {
            name: 'project_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The project identifier: either project ID or project name.',
              title: 'Project Identifier',
            },
            description: 'The project identifier: either project ID or project name.',
          },
          description: 'The project identifier: either project ID or project name.',
          title: 'Project Identifier',
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
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              description: 'Inclusive lower bound on trace start time (ISO 8601)',
              title: 'Start Time',
            },
            description: 'Inclusive lower bound on trace start time (ISO 8601)',
          },
          description: 'Inclusive lower bound on trace start time (ISO 8601)',
          title: 'Start Time',
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
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              description: 'Exclusive upper bound on trace start time (ISO 8601)',
              title: 'End Time',
            },
            description: 'Exclusive upper bound on trace start time (ISO 8601)',
          },
          description: 'Exclusive upper bound on trace start time (ISO 8601)',
          title: 'End Time',
        }),
      sort: z
        .enum(['start_time', 'latency_ms'])
        .default('start_time')
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            required: false,
            schema: {
              enum: ['start_time', 'latency_ms'],
              type: 'string',
              description: 'Sort field',
              default: 'start_time',
              title: 'Sort',
            },
            description: 'Sort field',
          },
          description: 'Sort field',
          title: 'Sort',
        }),
      order: z
        .enum(['asc', 'desc'])
        .default('desc')
        .exactOptional()
        .openapi({
          param: {
            name: 'order',
            in: 'query',
            required: false,
            schema: {
              enum: ['asc', 'desc'],
              type: 'string',
              description: 'Sort direction',
              default: 'desc',
              title: 'Order',
            },
            description: 'Sort direction',
          },
          description: 'Sort direction',
          title: 'Order',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().gt(0).max(1000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              maximum: 1000,
              exclusiveMinimum: 0,
              description: 'Maximum number of traces to return',
              default: 100,
              title: 'Limit',
            },
            description: 'Maximum number of traces to return',
          },
          description: 'Maximum number of traces to return',
          title: 'Limit',
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
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description: 'Pagination cursor returned by a previous request',
              title: 'Cursor',
            },
            description: 'Pagination cursor returned by a previous request',
          },
          description: 'Pagination cursor returned by a previous request',
          title: 'Cursor',
        }),
      include_spans: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'include_spans',
            in: 'query',
            required: false,
            schema: {
              type: 'boolean',
              description:
                'If true, include full span details for each trace. This significantly increases response size and query latency, especially with large page sizes. Prefer fetching spans lazily for individual traces when possible.',
              default: false,
              title: 'Include Spans',
            },
            description:
              'If true, include full span details for each trace. This significantly increases response size and query latency, especially with large page sizes. Prefer fetching spans lazily for individual traces when possible.',
          },
          description:
            'If true, include full span details for each trace. This significantly increases response size and query latency, especially with large page sizes. Prefer fetching spans lazily for individual traces when possible.',
          title: 'Include Spans',
        }),
      session_identifier: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'session_identifier',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              description:
                'List of session identifiers to filter traces by. Each value can be either a session_id string or a session GlobalID. Only traces belonging to the specified sessions will be returned.',
              title: 'Session Identifier',
            },
            description:
              'List of session identifiers to filter traces by. Each value can be either a session_id string or a session GlobalID. Only traces belonging to the specified sessions will be returned.',
          },
          description:
            'List of session identifiers to filter traces by. Each value can be either a session_id string or a session GlobalID. Only traces belonging to the specified sessions will be returned.',
          title: 'Session Identifier',
        }),
      error: z
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
            name: 'error',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'boolean' }, { type: 'null' }],
              description:
                'Deprecated: use `filter=error_count > 0` or `filter=error_count == 0`. Filter by trace error status. If true, only return traces that contain at least one span with `status_code == ERROR`. If false, only return traces with no errored spans. If omitted, traces are not filtered by error status.',
              deprecated: true,
              title: 'Error',
            },
            description:
              'Deprecated: use `filter=error_count > 0` or `filter=error_count == 0`. Filter by trace error status. If true, only return traces that contain at least one span with `status_code == ERROR`. If false, only return traces with no errored spans. If omitted, traces are not filtered by error status.',
            deprecated: true,
          },
          description:
            'Deprecated: use `filter=error_count > 0` or `filter=error_count == 0`. Filter by trace error status. If true, only return traces that contain at least one span with `status_code == ERROR`. If false, only return traces with no errored spans. If omitted, traces are not filtered by error status.',
          deprecated: true,
          title: 'Error',
        }),
      min_latency_ms: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number().min(0), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'min_latency_ms',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'number', minimum: 0 }, { type: 'null' }],
              description:
                'Inclusive lower bound on trace latency in milliseconds. Deprecated: use `filter=latency_ms >= N`.',
              deprecated: true,
              title: 'Min Latency Ms',
            },
            description:
              'Inclusive lower bound on trace latency in milliseconds. Deprecated: use `filter=latency_ms >= N`.',
            deprecated: true,
          },
          description:
            'Inclusive lower bound on trace latency in milliseconds. Deprecated: use `filter=latency_ms >= N`.',
          deprecated: true,
          title: 'Min Latency Ms',
        }),
      max_latency_ms: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.union([z.number().min(0), z.null().nullable()]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max_latency_ms',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'number', minimum: 0 }, { type: 'null' }],
              description:
                'Inclusive upper bound on trace latency in milliseconds. Deprecated: use `filter=latency_ms <= N`.',
              deprecated: true,
              title: 'Max Latency Ms',
            },
            description:
              'Inclusive upper bound on trace latency in milliseconds. Deprecated: use `filter=latency_ms <= N`.',
            deprecated: true,
          },
          description:
            'Inclusive upper bound on trace latency in milliseconds. Deprecated: use `filter=latency_ms <= N`.',
          deprecated: true,
          title: 'Max Latency Ms',
        }),
      filter: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Trace filter expression, as documented at https://arize.com/docs/phoenix/tracing/how-to-tracing/filter-expressions. Combined with other filters using AND. Empty expressions do not filter. Invalid expressions return 400.',
              title: 'Filter',
            },
            description:
              'Trace filter expression, as documented at https://arize.com/docs/phoenix/tracing/how-to-tracing/filter-expressions. Combined with other filters using AND. Empty expressions do not filter. Invalid expressions return 400.',
          },
          description:
            'Trace filter expression, as documented at https://arize.com/docs/phoenix/tracing/how-to-tracing/filter-expressions. Combined with other filters using AND. Empty expressions do not filter. Invalid expressions return 400.',
          title: 'Filter',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GetTracesResponseBodySchema } },
    },
    400: { description: 'Bad Request', content: { 'text/plain': { schema: z.string() } } },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const deleteV1ProjectsProjectIdentifierTracesRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{project_identifier}/traces',
  tags: ['traces'],
  summary: 'Delete traces from a project',
  description:
    'Delete traces from a project without deleting the project or its configuration. Only traces whose start time is within the required `[start_time, end_time)` interval are deleted. Associated spans are cascade deleted, and project sessions left with no remaining traces are also deleted. Naive datetimes are interpreted as UTC.',
  operationId: 'deleteProjectTraces',
  request: {
    params: z.object({
      project_identifier: z
        .string()
        .openapi({
          param: {
            name: 'project_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The project identifier: either project ID or project name.',
              title: 'Project Identifier',
            },
            description: 'The project identifier: either project ID or project name.',
          },
          description: 'The project identifier: either project ID or project name.',
          title: 'Project Identifier',
        }),
    }),
    query: z.object({
      start_time: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            name: 'start_time',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
              format: 'date-time',
              description: 'Required inclusive lower bound on trace start time (ISO 8601).',
              title: 'Start Time',
            },
            description: 'Required inclusive lower bound on trace start time (ISO 8601).',
          },
          description: 'Required inclusive lower bound on trace start time (ISO 8601).',
          title: 'Start Time',
        }),
      end_time: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            name: 'end_time',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
              format: 'date-time',
              description: 'Required exclusive upper bound on trace start time (ISO 8601).',
              title: 'End Time',
            },
            description: 'Required exclusive upper bound on trace start time (ISO 8601).',
          },
          description: 'Required exclusive upper bound on trace start time (ISO 8601).',
          title: 'End Time',
        }),
    }),
  },
  responses: {
    204: { description: 'No content returned after the matching traces are deleted' },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const postV1TraceAnnotationsRoute = createRoute({
  method: 'post',
  path: '/v1/trace_annotations',
  tags: ['traces'],
  summary: 'Create trace annotations',
  operationId: 'annotateTraces',
  request: {
    query: z.object({
      sync: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'sync',
            in: 'query',
            required: false,
            schema: {
              type: 'boolean',
              description: 'If true, fulfill request synchronously.',
              default: false,
              title: 'Sync',
            },
            description: 'If true, fulfill request synchronously.',
          },
          description: 'If true, fulfill request synchronously.',
          title: 'Sync',
        }),
    }),
    body: {
      content: { 'application/json': { schema: AnnotateTracesRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AnnotateTracesResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Trace not found', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1TraceNotesRoute = createRoute({
  method: 'post',
  path: '/v1/trace_notes',
  tags: ['traces'],
  summary: 'Create a trace note',
  description:
    "Add a note annotation to a trace. By default each call appends a new note with an auto-generated UUIDv4 identifier, so multiple notes accumulate on the same trace. Callers may supply a non-empty `identifier` to upsert on (trace_id, name='note', identifier) — repeated calls with the same identifier overwrite the existing note, matching the semantics of structured annotations.",
  operationId: 'createTraceNote',
  request: {
    body: {
      content: { 'application/json': { schema: CreateTraceNoteRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Trace note created successfully',
      content: { 'application/json': { schema: CreateTraceNoteResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Trace not found', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1TracesTransferRoute = createRoute({
  method: 'post',
  path: '/v1/traces/transfer',
  tags: ['traces'],
  summary: 'Transfer traces to a project',
  description:
    'Move traces into a different project. This re-parents the traces rather than copying them, so they no longer appear under their original project. All traces must currently belong to the same source project.',
  operationId: 'transferTraces',
  request: {
    body: {
      content: { 'application/json': { schema: TransferTracesRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: TransferTracesResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: {
      description: 'Destination project or trace not found',
      content: { 'text/plain': { schema: z.string() } },
    },
    422: { description: 'Invalid request', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const deleteV1TracesTraceIdentifierRoute = createRoute({
  method: 'delete',
  path: '/v1/traces/{trace_identifier}',
  tags: ['traces'],
  summary: 'Delete a trace by identifier',
  description:
    'Delete an entire trace by its identifier. The identifier can be either:\n1. A Relay node ID (base64-encoded)\n2. An OpenTelemetry trace_id (hex string)\n\nThis will permanently remove all spans in the trace and their associated data.',
  operationId: 'deleteTrace',
  request: {
    params: z.object({
      trace_identifier: z
        .string()
        .openapi({
          param: {
            name: 'trace_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description:
                'The trace identifier: either a relay GlobalID or OpenTelemetry trace_id',
              title: 'Trace Identifier',
            },
            description: 'The trace identifier: either a relay GlobalID or OpenTelemetry trace_id',
          },
          description: 'The trace identifier: either a relay GlobalID or OpenTelemetry trace_id',
          title: 'Trace Identifier',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1ProjectsProjectIdentifierSpansOtlpv1Route = createRoute({
  method: 'get',
  path: '/v1/projects/{project_identifier}/spans/otlpv1',
  tags: ['spans'],
  summary: 'Search spans with simple filters (no DSL)',
  description:
    'Return spans within a project filtered by time range. Supports cursor-based pagination.',
  operationId: 'spanSearch',
  request: {
    params: z.object({
      project_identifier: z
        .string()
        .openapi({
          param: {
            name: 'project_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description:
                'The project identifier: either project ID or project name. If using a project name, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
              title: 'Project Identifier',
            },
            description:
              'The project identifier: either project ID or project name. If using a project name, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
          },
          description:
            'The project identifier: either project ID or project name. If using a project name, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
          title: 'Project Identifier',
        }),
    }),
    query: z.object({
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
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description: 'Pagination cursor (Span Global ID)',
              title: 'Cursor',
            },
            description: 'Pagination cursor (Span Global ID)',
          },
          description: 'Pagination cursor (Span Global ID)',
          title: 'Cursor',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().gt(0).max(1000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              maximum: 1000,
              exclusiveMinimum: 0,
              description: 'Maximum number of spans to return',
              default: 100,
              title: 'Limit',
            },
            description: 'Maximum number of spans to return',
          },
          description: 'Maximum number of spans to return',
          title: 'Limit',
        }),
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
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              description: 'Inclusive lower bound time',
              title: 'Start Time',
            },
            description: 'Inclusive lower bound time',
          },
          description: 'Inclusive lower bound time',
          title: 'Start Time',
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
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              description: 'Exclusive upper bound time',
              title: 'End Time',
            },
            description: 'Exclusive upper bound time',
          },
          description: 'Exclusive upper bound time',
          title: 'End Time',
        }),
      trace_id: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'trace_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              description: 'Filter by one or more trace IDs',
              title: 'Trace Id',
            },
            description: 'Filter by one or more trace IDs',
          },
          description: 'Filter by one or more trace IDs',
          title: 'Trace Id',
        }),
      span_id: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'span_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              description: 'Filter by one or more span IDs',
              title: 'Span Id',
            },
            description: 'Filter by one or more span IDs',
          },
          description: 'Filter by one or more span IDs',
          title: 'Span Id',
        }),
      parent_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'parent_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description: 'Filter by parent span ID. Use "null" to get root spans only.',
              title: 'Parent Id',
            },
            description: 'Filter by parent span ID. Use "null" to get root spans only.',
          },
          description: 'Filter by parent span ID. Use "null" to get root spans only.',
          title: 'Parent Id',
        }),
      name: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              description: 'Filter by span name(s)',
              title: 'Name',
            },
            description: 'Filter by span name(s)',
          },
          description: 'Filter by span name(s)',
          title: 'Name',
        }),
      status_code: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'status_code',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              description: 'Filter by status code(s). Values: OK, ERROR, UNSET',
              title: 'Status Code',
            },
            description: 'Filter by status code(s). Values: OK, ERROR, UNSET',
          },
          description: 'Filter by status code(s). Values: OK, ERROR, UNSET',
          title: 'Status Code',
        }),
      attribute: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'attribute',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              description:
                'Filter spans by `key:value`. Key is a dot-path (e.g. `user.id`, `metadata.tier`). Value is JSON-parsed: `k:12345` is int, `k:true` is bool, otherwise string (`k:user-42`). To match a numeric- or boolean-looking STRING, JSON-quote it: `user.id:"12345"` (URL-encoded `%2212345%22`). Split is on the first `:` only, so values may contain colons (`session.id:sess:abc:123`, ISO timestamps). Repeat the param to AND filters. List-valued attributes (e.g. `tag.tags`) cannot be matched here. Returns 422 on malformed input (missing colon, empty key/value, or list/dict/null value).',
              title: 'Attribute',
            },
            description:
              'Filter spans by `key:value`. Key is a dot-path (e.g. `user.id`, `metadata.tier`). Value is JSON-parsed: `k:12345` is int, `k:true` is bool, otherwise string (`k:user-42`). To match a numeric- or boolean-looking STRING, JSON-quote it: `user.id:"12345"` (URL-encoded `%2212345%22`). Split is on the first `:` only, so values may contain colons (`session.id:sess:abc:123`, ISO timestamps). Repeat the param to AND filters. List-valued attributes (e.g. `tag.tags`) cannot be matched here. Returns 422 on malformed input (missing colon, empty key/value, or list/dict/null value).',
          },
          description:
            'Filter spans by `key:value`. Key is a dot-path (e.g. `user.id`, `metadata.tier`). Value is JSON-parsed: `k:12345` is int, `k:true` is bool, otherwise string (`k:user-42`). To match a numeric- or boolean-looking STRING, JSON-quote it: `user.id:"12345"` (URL-encoded `%2212345%22`). Split is on the first `:` only, so values may contain colons (`session.id:sess:abc:123`, ISO timestamps). Repeat the param to AND filters. List-valued attributes (e.g. `tag.tags`) cannot be matched here. Returns 422 on malformed input (missing colon, empty key/value, or list/dict/null value).',
          title: 'Attribute',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OtlpSpansResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getV1ProjectsProjectIdentifierSpansRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_identifier}/spans',
  tags: ['spans'],
  summary: 'List spans with simple filters (no DSL)',
  description:
    'Return spans within a project filtered by time range. Supports cursor-based pagination.',
  operationId: 'getSpans',
  request: {
    params: z.object({
      project_identifier: z
        .string()
        .openapi({
          param: {
            name: 'project_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description:
                'The project identifier: either project ID or project name. If using a project name, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
              title: 'Project Identifier',
            },
            description:
              'The project identifier: either project ID or project name. If using a project name, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
          },
          description:
            'The project identifier: either project ID or project name. If using a project name, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
          title: 'Project Identifier',
        }),
    }),
    query: z.object({
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
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Pagination cursor: the next_cursor of a previous response with the same sort',
              title: 'Cursor',
            },
            description:
              'Pagination cursor: the next_cursor of a previous response with the same sort',
          },
          description:
            'Pagination cursor: the next_cursor of a previous response with the same sort',
          title: 'Cursor',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().gt(0).max(1000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              maximum: 1000,
              exclusiveMinimum: 0,
              description: 'Maximum number of spans to return',
              default: 100,
              title: 'Limit',
            },
            description: 'Maximum number of spans to return',
          },
          description: 'Maximum number of spans to return',
          title: 'Limit',
        }),
      sort: z
        .enum(['id', 'start_time'])
        .default('id')
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            required: false,
            schema: {
              enum: ['id', 'start_time'],
              type: 'string',
              description:
                "Sort field. 'id' orders by insertion; 'start_time' orders by when the span started, breaking ties by id.",
              default: 'id',
              title: 'Sort',
            },
            description:
              "Sort field. 'id' orders by insertion; 'start_time' orders by when the span started, breaking ties by id.",
          },
          description:
            "Sort field. 'id' orders by insertion; 'start_time' orders by when the span started, breaking ties by id.",
          title: 'Sort',
        }),
      order: z
        .enum(['asc', 'desc'])
        .default('desc')
        .exactOptional()
        .openapi({
          param: {
            name: 'order',
            in: 'query',
            required: false,
            schema: {
              enum: ['asc', 'desc'],
              type: 'string',
              description: 'Sort direction',
              default: 'desc',
              title: 'Order',
            },
            description: 'Sort direction',
          },
          description: 'Sort direction',
          title: 'Order',
        }),
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
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              description: 'Inclusive lower bound time',
              title: 'Start Time',
            },
            description: 'Inclusive lower bound time',
          },
          description: 'Inclusive lower bound time',
          title: 'Start Time',
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
            required: false,
            schema: {
              anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
              description: 'Exclusive upper bound time',
              title: 'End Time',
            },
            description: 'Exclusive upper bound time',
          },
          description: 'Exclusive upper bound time',
          title: 'End Time',
        }),
      trace_id: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'trace_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              description: 'Filter by one or more trace IDs',
              title: 'Trace Id',
            },
            description: 'Filter by one or more trace IDs',
          },
          description: 'Filter by one or more trace IDs',
          title: 'Trace Id',
        }),
      span_id: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'span_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              description: 'Filter by one or more span IDs',
              title: 'Span Id',
            },
            description: 'Filter by one or more span IDs',
          },
          description: 'Filter by one or more span IDs',
          title: 'Span Id',
        }),
      parent_id: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'parent_id',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description: 'Filter by parent span ID. Use "null" to get root spans only.',
              title: 'Parent Id',
            },
            description: 'Filter by parent span ID. Use "null" to get root spans only.',
          },
          description: 'Filter by parent span ID. Use "null" to get root spans only.',
          title: 'Parent Id',
        }),
      name: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              description: 'Filter by span name(s)',
              title: 'Name',
            },
            description: 'Filter by span name(s)',
          },
          description: 'Filter by span name(s)',
          title: 'Name',
        }),
      span_kind: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'span_kind',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              description:
                'Filter by span kind(s). Values: LLM, CHAIN, TOOL, RETRIEVER, EMBEDDING, AGENT, RERANKER, GUARDRAIL, EVALUATOR, DECISION, UNKNOWN',
              title: 'Span Kind',
            },
            description:
              'Filter by span kind(s). Values: LLM, CHAIN, TOOL, RETRIEVER, EMBEDDING, AGENT, RERANKER, GUARDRAIL, EVALUATOR, DECISION, UNKNOWN',
          },
          description:
            'Filter by span kind(s). Values: LLM, CHAIN, TOOL, RETRIEVER, EMBEDDING, AGENT, RERANKER, GUARDRAIL, EVALUATOR, DECISION, UNKNOWN',
          title: 'Span Kind',
        }),
      status_code: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'status_code',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              description: 'Filter by status code(s). Values: OK, ERROR, UNSET',
              title: 'Status Code',
            },
            description: 'Filter by status code(s). Values: OK, ERROR, UNSET',
          },
          description: 'Filter by status code(s). Values: OK, ERROR, UNSET',
          title: 'Status Code',
        }),
      attribute: z
        .union([
          z.array(z.string()),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'attribute',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'array', items: { type: 'string' } }, { type: 'null' }],
              description:
                'Filter spans by `key:value`. Key is a dot-path (e.g. `user.id`, `metadata.tier`). Value is JSON-parsed: `k:12345` is int, `k:true` is bool, otherwise string (`k:user-42`). To match a numeric- or boolean-looking STRING, JSON-quote it: `user.id:"12345"` (URL-encoded `%2212345%22`). Split is on the first `:` only, so values may contain colons (`session.id:sess:abc:123`, ISO timestamps). Repeat the param to AND filters. List-valued attributes (e.g. `tag.tags`) cannot be matched here. Returns 422 on malformed input (missing colon, empty key/value, or list/dict/null value).',
              title: 'Attribute',
            },
            description:
              'Filter spans by `key:value`. Key is a dot-path (e.g. `user.id`, `metadata.tier`). Value is JSON-parsed: `k:12345` is int, `k:true` is bool, otherwise string (`k:user-42`). To match a numeric- or boolean-looking STRING, JSON-quote it: `user.id:"12345"` (URL-encoded `%2212345%22`). Split is on the first `:` only, so values may contain colons (`session.id:sess:abc:123`, ISO timestamps). Repeat the param to AND filters. List-valued attributes (e.g. `tag.tags`) cannot be matched here. Returns 422 on malformed input (missing colon, empty key/value, or list/dict/null value).',
          },
          description:
            'Filter spans by `key:value`. Key is a dot-path (e.g. `user.id`, `metadata.tier`). Value is JSON-parsed: `k:12345` is int, `k:true` is bool, otherwise string (`k:user-42`). To match a numeric- or boolean-looking STRING, JSON-quote it: `user.id:"12345"` (URL-encoded `%2212345%22`). Split is on the first `:` only, so values may contain colons (`session.id:sess:abc:123`, ISO timestamps). Repeat the param to AND filters. List-valued attributes (e.g. `tag.tags`) cannot be matched here. Returns 422 on malformed input (missing colon, empty key/value, or list/dict/null value).',
          title: 'Attribute',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: SpansResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const postV1ProjectsProjectIdentifierSpansRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{project_identifier}/spans',
  tags: ['spans'],
  summary: 'Create spans',
  description:
    'Submit spans to be inserted into a project. If any spans are invalid or duplicates, no spans will be inserted.',
  operationId: 'createSpans',
  request: {
    params: z.object({
      project_identifier: z
        .string()
        .openapi({
          param: {
            name: 'project_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description:
                'The project identifier: either project ID or project name. If using a project name, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
              title: 'Project Identifier',
            },
            description:
              'The project identifier: either project ID or project name. If using a project name, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
          },
          description:
            'The project identifier: either project ID or project name. If using a project name, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
          title: 'Project Identifier',
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateSpansRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Successful Response',
      content: { 'application/json': { schema: CreateSpansResponseBodySchema } },
    },
    400: { description: 'Bad Request', content: { 'text/plain': { schema: z.string() } } },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    503: {
      description: 'Span ingestion queue is at capacity',
      content: { 'text/plain': { schema: z.string() } },
    },
  },
})

export const postV1SpanAnnotationsRoute = createRoute({
  method: 'post',
  path: '/v1/span_annotations',
  tags: ['spans'],
  summary: 'Create span annotations',
  operationId: 'annotateSpans',
  request: {
    query: z.object({
      sync: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'sync',
            in: 'query',
            required: false,
            schema: {
              type: 'boolean',
              description: 'If true, fulfill request synchronously.',
              default: false,
              title: 'Sync',
            },
            description: 'If true, fulfill request synchronously.',
          },
          description: 'If true, fulfill request synchronously.',
          title: 'Sync',
        }),
    }),
    body: {
      content: { 'application/json': { schema: AnnotateSpansRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Span annotations inserted successfully',
      content: { 'application/json': { schema: AnnotateSpansResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Span not found', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1SpanNotesRoute = createRoute({
  method: 'post',
  path: '/v1/span_notes',
  tags: ['spans'],
  summary: 'Create a span note',
  description:
    "Add a note annotation to a span. By default each call appends a new note with an auto-generated UUIDv4 identifier, so multiple notes accumulate on the same span. Callers may supply a non-empty `identifier` to upsert on (span_id, name='note', identifier) — repeated calls with the same identifier overwrite the existing note, matching the semantics of structured annotations.",
  operationId: 'createSpanNote',
  request: {
    body: {
      content: { 'application/json': { schema: CreateSpanNoteRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Span note created successfully',
      content: { 'application/json': { schema: CreateSpanNoteResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Span not found', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const deleteV1SpansSpanIdentifierRoute = createRoute({
  method: 'delete',
  path: '/v1/spans/{span_identifier}',
  tags: ['spans'],
  summary: 'Delete a span by span_identifier',
  description:
    'Delete a single span by identifier.\n\n        **Important**: This operation deletes ONLY the specified span itself and does NOT\n        delete its descendants/children. All child spans will remain in the trace and\n        become orphaned (their parent_id will point to a non-existent span).\n\n        Behavior:\n        - Deletes only the target span (preserves all descendant spans)\n        - If this was the last span in the trace, the trace record is also deleted\n        - If the deleted span had a parent, its cumulative metrics (error count, token counts)\n          are subtracted from all ancestor spans in the chain\n\n        **Note**: This operation is irreversible and may create orphaned spans.',
  operationId: 'deleteSpan',
  request: {
    params: z.object({
      span_identifier: z
        .string()
        .openapi({
          param: {
            name: 'span_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The span identifier: either a relay GlobalID or OpenTelemetry span_id',
              title: 'Span Identifier',
            },
            description: 'The span identifier: either a relay GlobalID or OpenTelemetry span_id',
          },
          description: 'The span identifier: either a relay GlobalID or OpenTelemetry span_id',
          title: 'Span Identifier',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1PromptsRoute = createRoute({
  method: 'get',
  path: '/v1/prompts',
  tags: ['prompts'],
  summary: 'List all prompts',
  description:
    'Retrieve a paginated list of all prompts in the system. A prompt can have multiple versions.',
  operationId: 'getPrompts',
  request: {
    query: z.object({
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
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description: 'Cursor for pagination (base64-encoded prompt ID)',
              title: 'Cursor',
            },
            description: 'Cursor for pagination (base64-encoded prompt ID)',
          },
          description: 'Cursor for pagination (base64-encoded prompt ID)',
          title: 'Cursor',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().gt(0),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              exclusiveMinimum: 0,
              description: 'The max number of prompts to return at a time.',
              default: 100,
              title: 'Limit',
            },
            description: 'The max number of prompts to return at a time.',
          },
          description: 'The max number of prompts to return at a time.',
          title: 'Limit',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of prompts with pagination information',
      content: { 'application/json': { schema: GetPromptsResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const postV1PromptsRoute = createRoute({
  method: 'post',
  path: '/v1/prompts',
  tags: ['prompts'],
  summary: 'Create a new prompt',
  description: 'Create a new prompt and its initial version. A prompt can have multiple versions.',
  operationId: 'postPromptVersion',
  request: {
    body: {
      content: { 'application/json': { schema: CreatePromptRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The newly created prompt version',
      content: { 'application/json': { schema: CreatePromptResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getV1PromptsPromptIdentifierVersionsRoute = createRoute({
  method: 'get',
  path: '/v1/prompts/{prompt_identifier}/versions',
  tags: ['prompts'],
  summary: 'List prompt versions',
  description:
    'Retrieve all versions of a specific prompt with pagination support. Each prompt can have multiple versions with different configurations.',
  operationId: 'listPromptVersions',
  request: {
    params: z.object({
      prompt_identifier: z
        .string()
        .openapi({
          param: {
            name: 'prompt_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The identifier of the prompt, i.e. name or ID.',
              title: 'Prompt Identifier',
            },
            description: 'The identifier of the prompt, i.e. name or ID.',
          },
          description: 'The identifier of the prompt, i.e. name or ID.',
          title: 'Prompt Identifier',
        }),
    }),
    query: z.object({
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
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description: 'Cursor for pagination (base64-encoded promptVersion ID)',
              title: 'Cursor',
            },
            description: 'Cursor for pagination (base64-encoded promptVersion ID)',
          },
          description: 'Cursor for pagination (base64-encoded promptVersion ID)',
          title: 'Cursor',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().gt(0),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              exclusiveMinimum: 0,
              description: 'The max number of prompt versions to return at a time.',
              default: 100,
              title: 'Limit',
            },
            description: 'The max number of prompt versions to return at a time.',
          },
          description: 'The max number of prompt versions to return at a time.',
          title: 'Limit',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of prompt versions with pagination information',
      content: { 'application/json': { schema: GetPromptVersionsResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const postV1PromptsPromptIdentifierVersionsRoute = createRoute({
  method: 'post',
  path: '/v1/prompts/{prompt_identifier}/versions',
  tags: ['prompts'],
  summary: 'Create prompt version',
  description: 'Create a new version for an existing prompt by identifier.',
  operationId: 'createPromptVersion',
  request: {
    params: z.object({
      prompt_identifier: z
        .string()
        .openapi({
          param: {
            name: 'prompt_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The identifier of the prompt, i.e. name or ID.',
              title: 'Prompt Identifier',
            },
            description: 'The identifier of the prompt, i.e. name or ID.',
          },
          description: 'The identifier of the prompt, i.e. name or ID.',
          title: 'Prompt Identifier',
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreatePromptVersionRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The created prompt version',
      content: { 'application/json': { schema: CreatePromptVersionResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getV1PromptVersionsPromptVersionIdRoute = createRoute({
  method: 'get',
  path: '/v1/prompt_versions/{prompt_version_id}',
  tags: ['prompts'],
  summary: 'Get prompt version by ID',
  description:
    'Retrieve a specific prompt version using its unique identifier. A prompt version contains the actual template and configuration.',
  operationId: 'getPromptVersionByPromptVersionId',
  request: {
    params: z.object({
      prompt_version_id: z
        .string()
        .openapi({
          param: {
            name: 'prompt_version_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The ID of the prompt version.',
              title: 'Prompt Version Id',
            },
            description: 'The ID of the prompt version.',
          },
          description: 'The ID of the prompt version.',
          title: 'Prompt Version Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested prompt version',
      content: { 'application/json': { schema: GetPromptResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getV1PromptsPromptIdentifierTagsTagNameRoute = createRoute({
  method: 'get',
  path: '/v1/prompts/{prompt_identifier}/tags/{tag_name}',
  tags: ['prompts'],
  summary: 'Get prompt version by tag',
  description:
    'Retrieve a specific prompt version using its tag name. Tags are used to identify specific versions of a prompt.',
  operationId: 'getPromptVersionByTagName',
  request: {
    params: z.object({
      prompt_identifier: z
        .string()
        .openapi({
          param: {
            name: 'prompt_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The identifier of the prompt, i.e. name or ID.',
              title: 'Prompt Identifier',
            },
            description: 'The identifier of the prompt, i.e. name or ID.',
          },
          description: 'The identifier of the prompt, i.e. name or ID.',
          title: 'Prompt Identifier',
        }),
      tag_name: z
        .string()
        .openapi({
          param: {
            name: 'tag_name',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The tag of the prompt version',
              title: 'Tag Name',
            },
            description: 'The tag of the prompt version',
          },
          description: 'The tag of the prompt version',
          title: 'Tag Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'The prompt version with the specified tag',
      content: { 'application/json': { schema: GetPromptResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getV1PromptsPromptIdentifierLatestRoute = createRoute({
  method: 'get',
  path: '/v1/prompts/{prompt_identifier}/latest',
  tags: ['prompts'],
  summary: 'Get latest prompt version',
  description: 'Retrieve the most recent version of a specific prompt.',
  operationId: 'getPromptVersionLatest',
  request: {
    params: z.object({
      prompt_identifier: z
        .string()
        .openapi({
          param: {
            name: 'prompt_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The identifier of the prompt, i.e. name or ID.',
              title: 'Prompt Identifier',
            },
            description: 'The identifier of the prompt, i.e. name or ID.',
          },
          description: 'The identifier of the prompt, i.e. name or ID.',
          title: 'Prompt Identifier',
        }),
    }),
  },
  responses: {
    200: {
      description: 'The latest version of the specified prompt',
      content: { 'application/json': { schema: GetPromptResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getV1PromptVersionsPromptVersionIdTagsRoute = createRoute({
  method: 'get',
  path: '/v1/prompt_versions/{prompt_version_id}/tags',
  tags: ['prompts'],
  summary: 'List prompt version tags',
  description:
    'Retrieve all tags associated with a specific prompt version. Tags are used to identify and categorize different versions of a prompt.',
  operationId: 'getPromptVersionTags',
  request: {
    params: z.object({
      prompt_version_id: z
        .string()
        .openapi({
          param: {
            name: 'prompt_version_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The ID of the prompt version.',
              title: 'Prompt Version Id',
            },
            description: 'The ID of the prompt version.',
          },
          description: 'The ID of the prompt version.',
          title: 'Prompt Version Id',
        }),
    }),
    query: z.object({
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
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description: 'Cursor for pagination (base64-encoded promptVersionTag ID)',
              title: 'Cursor',
            },
            description: 'Cursor for pagination (base64-encoded promptVersionTag ID)',
          },
          description: 'Cursor for pagination (base64-encoded promptVersionTag ID)',
          title: 'Cursor',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().gt(0),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              exclusiveMinimum: 0,
              description: 'The max number of tags to return at a time.',
              default: 100,
              title: 'Limit',
            },
            description: 'The max number of tags to return at a time.',
          },
          description: 'The max number of tags to return at a time.',
          title: 'Limit',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of tags associated with the prompt version',
      content: { 'application/json': { schema: GetPromptVersionTagsResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const postV1PromptVersionsPromptVersionIdTagsRoute = createRoute({
  method: 'post',
  path: '/v1/prompt_versions/{prompt_version_id}/tags',
  tags: ['prompts'],
  summary: 'Add tag to prompt version',
  description:
    'Add a new tag to a specific prompt version. Tags help identify and categorize different versions of a prompt.',
  operationId: 'createPromptVersionTag',
  request: {
    params: z.object({
      prompt_version_id: z
        .string()
        .openapi({
          param: {
            name: 'prompt_version_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The ID of the prompt version.',
              title: 'Prompt Version Id',
            },
            description: 'The ID of the prompt version.',
          },
          description: 'The ID of the prompt version.',
          title: 'Prompt Version Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: PromptVersionTagDataSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'No content returned on successful tag creation' },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const deleteV1PromptVersionsPromptVersionIdTagsTagNameRoute = createRoute({
  method: 'delete',
  path: '/v1/prompt_versions/{prompt_version_id}/tags/{tag_name}',
  tags: ['prompts'],
  summary: 'Delete a tag from a prompt version',
  description:
    'Delete a tag from a specific prompt version by tag name. The tag is resolved within the scope of the prompt linked to the version.',
  operationId: 'deletePromptVersionTag',
  request: {
    params: z.object({
      prompt_version_id: z
        .string()
        .openapi({
          param: {
            name: 'prompt_version_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The ID of the prompt version.',
              title: 'Prompt Version Id',
            },
            description: 'The ID of the prompt version.',
          },
          description: 'The ID of the prompt version.',
          title: 'Prompt Version Id',
        }),
      tag_name: z
        .string()
        .openapi({
          param: {
            name: 'tag_name',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The name of the tag to delete.',
              title: 'Tag Name',
            },
            description: 'The name of the tag to delete.',
          },
          description: 'The name of the tag to delete.',
          title: 'Tag Name',
        }),
    }),
  },
  responses: {
    204: { description: 'No content returned on successful tag deletion' },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const deleteV1PromptsPromptIdentifierRoute = createRoute({
  method: 'delete',
  path: '/v1/prompts/{prompt_identifier}',
  tags: ['prompts'],
  summary: 'Delete a prompt',
  description: 'Delete a prompt and all its versions, tags, and labels by identifier.',
  operationId: 'deletePrompt',
  request: {
    params: z.object({
      prompt_identifier: z
        .string()
        .openapi({
          param: {
            name: 'prompt_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The identifier of the prompt, i.e. name or ID.',
              title: 'Prompt Identifier',
            },
            description: 'The identifier of the prompt, i.e. name or ID.',
          },
          description: 'The identifier of the prompt, i.e. name or ID.',
          title: 'Prompt Identifier',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const patchV1PromptsPromptIdentifierRoute = createRoute({
  method: 'patch',
  path: '/v1/prompts/{prompt_identifier}',
  tags: ['prompts'],
  summary: 'Update prompt metadata',
  description: "Update a prompt's description and metadata by identifier.",
  operationId: 'patchPrompt',
  request: {
    params: z.object({
      prompt_identifier: z
        .string()
        .openapi({
          param: {
            name: 'prompt_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The identifier of the prompt, i.e. name or ID.',
              title: 'Prompt Identifier',
            },
            description: 'The identifier of the prompt, i.e. name or ID.',
          },
          description: 'The identifier of the prompt, i.e. name or ID.',
          title: 'Prompt Identifier',
        }),
    }),
    body: {
      content: { 'application/json': { schema: PatchPromptRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The updated prompt',
      content: { 'application/json': { schema: PatchPromptResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getV1ProjectsRoute = createRoute({
  method: 'get',
  path: '/v1/projects',
  tags: ['projects'],
  summary: 'List all projects',
  description: 'Retrieve a paginated list of all projects in the system.',
  operationId: 'getProjects',
  request: {
    query: z.object({
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
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description: 'Cursor for pagination (project ID)',
              title: 'Cursor',
            },
            description: 'Cursor for pagination (project ID)',
          },
          description: 'Cursor for pagination (project ID)',
          title: 'Cursor',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().gt(0),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              exclusiveMinimum: 0,
              description: 'The max number of projects to return at a time.',
              default: 100,
              title: 'Limit',
            },
            description: 'The max number of projects to return at a time.',
          },
          description: 'The max number of projects to return at a time.',
          title: 'Limit',
        }),
      include_experiment_projects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'include_experiment_projects',
            in: 'query',
            required: false,
            schema: {
              type: 'boolean',
              description:
                'Include experiment projects in the response. Experiment projects are created from running experiments.',
              default: false,
              title: 'Include Experiment Projects',
            },
            description:
              'Include experiment projects in the response. Experiment projects are created from running experiments.',
          },
          description:
            'Include experiment projects in the response. Experiment projects are created from running experiments.',
          title: 'Include Experiment Projects',
        }),
      include_dataset_evaluator_projects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'include_dataset_evaluator_projects',
            in: 'query',
            required: false,
            schema: {
              type: 'boolean',
              description:
                'Include dataset evaluator projects in the response. Dataset evaluator projects are created when running experiments with persisted evaluators.',
              default: false,
              title: 'Include Dataset Evaluator Projects',
            },
            description:
              'Include dataset evaluator projects in the response. Dataset evaluator projects are created when running experiments with persisted evaluators.',
          },
          description:
            'Include dataset evaluator projects in the response. Dataset evaluator projects are created when running experiments with persisted evaluators.',
          title: 'Include Dataset Evaluator Projects',
        }),
      name_contains: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'name_contains',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Return only projects whose name contains this substring (case-insensitive).',
              title: 'Name Contains',
            },
            description:
              'Return only projects whose name contains this substring (case-insensitive).',
          },
          description:
            'Return only projects whose name contains this substring (case-insensitive).',
          title: 'Name Contains',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of projects with pagination information',
      content: { 'application/json': { schema: GetProjectsResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const postV1ProjectsRoute = createRoute({
  method: 'post',
  path: '/v1/projects',
  tags: ['projects'],
  summary: 'Create a new project',
  description: 'Create a new project with the specified configuration.',
  operationId: 'createProject',
  request: {
    body: {
      content: { 'application/json': { schema: CreateProjectRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The newly created project',
      content: { 'application/json': { schema: CreateProjectResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getV1ProjectsProjectIdentifierRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_identifier}',
  tags: ['projects'],
  summary: 'Get project by ID or name',
  description:
    'Retrieve a specific project using its unique identifier: either project ID or project name. Note: When using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
  operationId: 'getProject',
  request: {
    params: z.object({
      project_identifier: z
        .string()
        .openapi({
          param: {
            name: 'project_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description:
                'The project identifier: either project ID or project name. If using a project name, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
              title: 'Project Identifier',
            },
            description:
              'The project identifier: either project ID or project name. If using a project name, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
          },
          description:
            'The project identifier: either project ID or project name. If using a project name, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
          title: 'Project Identifier',
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested project',
      content: { 'application/json': { schema: GetProjectResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const putV1ProjectsProjectIdentifierRoute = createRoute({
  method: 'put',
  path: '/v1/projects/{project_identifier}',
  tags: ['projects'],
  summary: 'Update a project by ID or name',
  description:
    'Update an existing project with new configuration. Project names cannot be changed. The project identifier is either project ID or project name. Note: When using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
  operationId: 'updateProject',
  request: {
    params: z.object({
      project_identifier: z
        .string()
        .openapi({
          param: {
            name: 'project_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description:
                'The project identifier: either project ID or project name. If using a project name, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
              title: 'Project Identifier',
            },
            description:
              'The project identifier: either project ID or project name. If using a project name, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
          },
          description:
            'The project identifier: either project ID or project name. If using a project name, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
          title: 'Project Identifier',
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateProjectRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The updated project',
      content: { 'application/json': { schema: UpdateProjectResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const deleteV1ProjectsProjectIdentifierRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{project_identifier}',
  tags: ['projects'],
  summary: 'Delete a project by ID or name',
  description:
    'Delete an existing project and all its associated data. The project identifier is either project ID or project name. The default project cannot be deleted. Note: When using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
  operationId: 'deleteProject',
  request: {
    params: z.object({
      project_identifier: z
        .string()
        .openapi({
          param: {
            name: 'project_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description:
                'The project identifier: either project ID or project name. If using a project name, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
              title: 'Project Identifier',
            },
            description:
              'The project identifier: either project ID or project name. If using a project name, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
          },
          description:
            'The project identifier: either project ID or project name. If using a project name, it cannot contain slash (/), question mark (?), or pound sign (#) characters.',
          title: 'Project Identifier',
        }),
    }),
  },
  responses: {
    204: { description: 'No content returned on successful deletion' },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const patchV1ProjectsProjectIdentifierRetentionRoute = createRoute({
  method: 'patch',
  path: '/v1/projects/{project_identifier}/retention',
  tags: ['projects'],
  summary: "Set a project's trace retention policy",
  description:
    'Assign an existing trace retention policy to a project, or reset the project to the default policy with a null `policy_id`. Retention policies are standalone, reusable entities: this endpoint only changes which policy the project points at, and never creates, edits, or deletes a policy.',
  operationId: 'setProjectRetentionPolicy',
  request: {
    params: z.object({
      project_identifier: z
        .string()
        .openapi({
          param: {
            name: 'project_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The project identifier: either project ID or project name.',
              title: 'Project Identifier',
            },
            description: 'The project identifier: either project ID or project name.',
          },
          description: 'The project identifier: either project ID or project name.',
          title: 'Project Identifier',
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetProjectRetentionPolicyRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: "The project's retention policy assignment",
      content: { 'application/json': { schema: SetProjectRetentionPolicyResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getV1ModelProvidersRoute = createRoute({
  method: 'get',
  path: '/v1/model_providers',
  tags: ['model_providers'],
  summary: 'List built-in model provider families',
  description:
    'Retrieve the built-in model provider families available to this deployment. Built-in families are a fixed enum rather than stored records, so this list is not paginated; it is narrowed by the PHOENIX_ALLOWED_PROVIDERS environment variable when that is set. User-defined providers are listed separately by `GET /v1/custom_model_providers`.',
  operationId: 'getModelProviders',
  responses: {
    200: {
      description: 'A list of built-in model provider families',
      content: { 'application/json': { schema: GetModelProvidersResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getV1CustomModelProvidersRoute = createRoute({
  method: 'get',
  path: '/v1/custom_model_providers',
  tags: ['model_providers'],
  summary: 'List custom model providers',
  description:
    'Retrieve a paginated list of user-defined custom model providers. Encrypted provider credentials are never returned. Built-in provider families are listed separately by `GET /v1/model_providers`.',
  operationId: 'getCustomModelProviders',
  request: {
    query: z.object({
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
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description: 'Cursor for pagination (custom provider ID)',
              title: 'Cursor',
            },
            description: 'Cursor for pagination (custom provider ID)',
          },
          description: 'Cursor for pagination (custom provider ID)',
          title: 'Cursor',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().gt(0).max(1000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              maximum: 1000,
              exclusiveMinimum: 0,
              description: 'The max number of custom providers to return at a time (at most 1000).',
              default: 100,
              title: 'Limit',
            },
            description: 'The max number of custom providers to return at a time (at most 1000).',
          },
          description: 'The max number of custom providers to return at a time (at most 1000).',
          title: 'Limit',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of custom model providers with pagination information',
      content: { 'application/json': { schema: GetCustomModelProvidersResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getV1SessionsSessionIdentifierRoute = createRoute({
  method: 'get',
  path: '/v1/sessions/{session_identifier}',
  tags: ['sessions'],
  summary: 'Get session by ID or session_id',
  operationId: 'getSession',
  request: {
    params: z.object({
      session_identifier: z
        .string()
        .openapi({
          param: {
            name: 'session_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description:
                'The session identifier: either a GlobalID or user-provided session_id string.',
              title: 'Session Identifier',
            },
            description:
              'The session identifier: either a GlobalID or user-provided session_id string.',
          },
          description:
            'The session identifier: either a GlobalID or user-provided session_id string.',
          title: 'Session Identifier',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GetSessionResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const deleteV1SessionsSessionIdentifierRoute = createRoute({
  method: 'delete',
  path: '/v1/sessions/{session_identifier}',
  tags: ['sessions'],
  summary: 'Delete a session by identifier',
  description:
    'Delete a session by its identifier. The identifier can be either:\n1. A global ID (base64-encoded)\n2. A user-provided session_id string\n\nThis will permanently remove the session and all associated traces, spans, and annotations via cascade delete.',
  operationId: 'deleteSession',
  request: {
    params: z.object({
      session_identifier: z
        .string()
        .openapi({
          param: {
            name: 'session_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description:
                'The session identifier: either a GlobalID or user-provided session_id string.',
              title: 'Session Identifier',
            },
            description:
              'The session identifier: either a GlobalID or user-provided session_id string.',
          },
          description:
            'The session identifier: either a GlobalID or user-provided session_id string.',
          title: 'Session Identifier',
        }),
    }),
  },
  responses: {
    204: { description: 'Successful Response' },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1SessionsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/sessions/delete',
  tags: ['sessions'],
  summary: 'Bulk delete sessions',
  description:
    'Delete multiple sessions by their identifiers (GlobalIDs or session_id strings). All identifiers in a single request must be the same type. Non-existent IDs are silently skipped. All associated traces, spans, and annotations are cascade deleted.',
  operationId: 'deleteSessions',
  request: {
    body: {
      content: { 'application/json': { schema: DeleteSessionsRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Successful Response' },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getV1ProjectsProjectIdentifierSessionsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project_identifier}/sessions',
  tags: ['sessions'],
  summary: 'List sessions for a project',
  operationId: 'listProjectSessions',
  request: {
    params: z.object({
      project_identifier: z
        .string()
        .openapi({
          param: {
            name: 'project_identifier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The project identifier: either project ID or project name.',
              title: 'Project Identifier',
            },
            description: 'The project identifier: either project ID or project name.',
          },
          description: 'The project identifier: either project ID or project name.',
          title: 'Project Identifier',
        }),
    }),
    query: z.object({
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
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description: 'Cursor for pagination (session ID)',
              title: 'Cursor',
            },
            description: 'Cursor for pagination (session ID)',
          },
          description: 'Cursor for pagination (session ID)',
          title: 'Cursor',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().gt(0),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              exclusiveMinimum: 0,
              description: 'The max number of sessions to return at a time.',
              default: 100,
              title: 'Limit',
            },
            description: 'The max number of sessions to return at a time.',
          },
          description: 'The max number of sessions to return at a time.',
          title: 'Limit',
        }),
      order: z
        .enum(['asc', 'desc'])
        .default('asc')
        .exactOptional()
        .openapi({
          param: {
            name: 'order',
            in: 'query',
            required: false,
            schema: {
              enum: ['asc', 'desc'],
              type: 'string',
              description: "Sort order by ID: 'asc' (ascending) or 'desc' (descending).",
              default: 'asc',
              title: 'Order',
            },
            description: "Sort order by ID: 'asc' (ascending) or 'desc' (descending).",
          },
          description: "Sort order by ID: 'asc' (ascending) or 'desc' (descending).",
          title: 'Order',
        }),
      filter: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description:
                'Session filter expression, as documented at https://arize.com/docs/phoenix/tracing/how-to-tracing/filter-expressions. Empty expressions do not filter. Invalid expressions return 400.',
              title: 'Filter',
            },
            description:
              'Session filter expression, as documented at https://arize.com/docs/phoenix/tracing/how-to-tracing/filter-expressions. Empty expressions do not filter. Invalid expressions return 400.',
          },
          description:
            'Session filter expression, as documented at https://arize.com/docs/phoenix/tracing/how-to-tracing/filter-expressions. Empty expressions do not filter. Invalid expressions return 400.',
          title: 'Filter',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GetSessionsResponseBodySchema } },
    },
    400: { description: 'Bad Request', content: { 'text/plain': { schema: z.string() } } },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const postV1SessionAnnotationsRoute = createRoute({
  method: 'post',
  path: '/v1/session_annotations',
  tags: ['sessions'],
  summary: 'Create session annotations',
  operationId: 'annotateSessions',
  request: {
    query: z.object({
      sync: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'sync',
            in: 'query',
            required: false,
            schema: {
              type: 'boolean',
              description: 'If true, fulfill request synchronously.',
              default: false,
              title: 'Sync',
            },
            description: 'If true, fulfill request synchronously.',
          },
          description: 'If true, fulfill request synchronously.',
          title: 'Sync',
        }),
    }),
    body: {
      content: { 'application/json': { schema: AnnotateSessionsRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Session annotations inserted successfully',
      content: { 'application/json': { schema: AnnotateSessionsResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Session not found', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1SessionNotesRoute = createRoute({
  method: 'post',
  path: '/v1/session_notes',
  tags: ['sessions'],
  summary: 'Create a session note',
  description:
    "Add a note annotation to a session. By default each call appends a new note with an auto-generated UUIDv4 identifier, so multiple notes accumulate on the same session. Callers may supply a non-empty `identifier` to upsert on (session_id, name='note', identifier) — repeated calls with the same identifier overwrite the existing note, matching the semantics of structured annotations.",
  operationId: 'createSessionNote',
  request: {
    body: {
      content: { 'application/json': { schema: CreateSessionNoteRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Session note created successfully',
      content: { 'application/json': { schema: CreateSessionNoteResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Session not found', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1DocumentAnnotationsRoute = createRoute({
  method: 'post',
  path: '/v1/document_annotations',
  tags: ['spans'],
  summary: 'Create span document annotations',
  operationId: 'annotateSpanDocuments',
  request: {
    query: z.object({
      sync: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'sync',
            in: 'query',
            required: false,
            schema: {
              type: 'boolean',
              description: 'If set to true, the annotations are inserted synchronously.',
              default: false,
              title: 'Sync',
            },
            description: 'If set to true, the annotations are inserted synchronously.',
          },
          description: 'If set to true, the annotations are inserted synchronously.',
          title: 'Sync',
        }),
    }),
    body: {
      content: { 'application/json': { schema: AnnotateSpanDocumentsRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Span document annotation inserted successfully',
      content: { 'application/json': { schema: AnnotateSpanDocumentsResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Span not found', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Invalid request - non-empty identifier not supported',
      content: { 'text/plain': { schema: z.string() } },
    },
  },
})

export const getV1UserRoute = createRoute({
  method: 'get',
  path: '/v1/user',
  tags: ['users'],
  summary: 'Get the authenticated user',
  description:
    'Returns the profile of the currently authenticated user. When authentication is disabled, returns an anonymous user representation.',
  operationId: 'getViewer',
  responses: {
    200: {
      description: "The authenticated user's profile.",
      content: { 'application/json': { schema: GetViewerResponseBodySchema } },
    },
    401: { description: 'User not found.', content: { 'text/plain': { schema: z.string() } } },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getV1UsersRoute = createRoute({
  method: 'get',
  path: '/v1/users',
  tags: ['users'],
  summary: 'List all users',
  description: 'Retrieve a paginated list of all users in the system.',
  operationId: 'getUsers',
  request: {
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              description: 'Cursor for pagination (base64-encoded user ID)',
              title: 'Cursor',
            },
            description: 'Cursor for pagination (base64-encoded user ID)',
          },
          description: 'Cursor for pagination (base64-encoded user ID)',
          title: 'Cursor',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().gt(0),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              exclusiveMinimum: 0,
              description: 'The max number of users to return at a time.',
              default: 100,
              title: 'Limit',
            },
            description: 'The max number of users to return at a time.',
          },
          description: 'The max number of users to return at a time.',
          title: 'Limit',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of users.',
      content: { 'application/json': { schema: GetUsersResponseBodySchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const postV1UsersRoute = createRoute({
  method: 'post',
  path: '/v1/users',
  tags: ['users'],
  summary: 'Create a new user',
  description: 'Create a new user with the specified configuration.',
  operationId: 'createUser',
  request: {
    body: {
      content: { 'application/json': { schema: CreateUserRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The newly created user.',
      content: { 'application/json': { schema: CreateUserResponseBodySchema } },
    },
    400: { description: 'Role not found.', content: { 'text/plain': { schema: z.string() } } },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    409: {
      description: 'Username or email already exists.',
      content: { 'text/plain': { schema: z.string() } },
    },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const deleteV1UsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/v1/users/{user_id}',
  tags: ['users'],
  summary: 'Delete a user by ID',
  description: 'Delete an existing user by their unique GlobalID.',
  operationId: 'deleteUser',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            name: 'user_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: "The GlobalID of the user (e.g. 'VXNlcjox').",
              title: 'User Id',
            },
            description: "The GlobalID of the user (e.g. 'VXNlcjox').",
          },
          description: "The GlobalID of the user (e.g. 'VXNlcjox').",
          title: 'User Id',
        }),
    }),
  },
  responses: {
    204: { description: 'No content returned on successful deletion.' },
    403: {
      description: 'Cannot delete the default admin or system user',
      content: { 'text/plain': { schema: z.string() } },
    },
    404: { description: 'User not found.', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const putV1SecretsRoute = createRoute({
  method: 'put',
  path: '/v1/secrets',
  tags: ['secrets'],
  summary: 'Upsert or delete secrets',
  description:
    'Atomically upsert or delete a batch of secrets. Entries with a non-null `value` are created or updated; entries with `value: null` are deleted. The `value` field is required for every entry, and omitting it returns 422. When the same key appears more than once, the last occurrence wins. Deleting a non-existent key succeeds silently. Secret values are never returned in the response.',
  operationId: 'upsertOrDeleteSecrets',
  request: {
    body: {
      content: { 'application/json': { schema: UpsertOrDeleteSecretsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ResponseBodyUpsertOrDeleteSecretsResultSchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
    507: { description: 'Insufficient Storage', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getV1UserApiKeysRoute = createRoute({
  method: 'get',
  path: '/v1/user/api_keys',
  tags: ['api_keys'],
  summary: "List the authenticated user's API keys",
  description:
    'Retrieve the API keys belonging to the currently authenticated user. The keys themselves are not recoverable and are never included in the response.',
  operationId: 'getUserApiKeys',
  responses: {
    200: {
      description: "The authenticated user's API keys.",
      content: { 'application/json': { schema: GetApiKeysResponseBodySchema } },
    },
    401: { description: 'Unauthorized', content: { 'text/plain': { schema: z.string() } } },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const postV1UserApiKeysRoute = createRoute({
  method: 'post',
  path: '/v1/user/api_keys',
  tags: ['api_keys'],
  summary: 'Create an API key for the authenticated user',
  description:
    "Create a personal API key for the currently authenticated user. The key inherits the user's role, so it grants no more access than the user already has. Creation requires an access-token session; API keys cannot mint replacement keys. The response contains the key itself, which is shown only once and cannot be retrieved afterwards.",
  operationId: 'createUserApiKey',
  request: {
    body: {
      content: { 'application/json': { schema: CreateApiKeyRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The newly created API key, including the key itself.',
      content: { 'application/json': { schema: CreateApiKeyResponseBodySchema } },
    },
    401: { description: 'Unauthorized', content: { 'text/plain': { schema: z.string() } } },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
    507: { description: 'Insufficient Storage', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getV1UsersApiKeysRoute = createRoute({
  method: 'get',
  path: '/v1/users/api_keys',
  tags: ['api_keys'],
  summary: 'List all user API keys',
  description:
    'Retrieve API keys belonging to human users across the organization. System API keys are excluded. Restricted to admins.',
  operationId: 'getAllUserApiKeys',
  request: {
    query: z.object({
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
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description: 'Cursor for pagination (a UserApiKey GlobalID).',
              title: 'Cursor',
            },
            description: 'Cursor for pagination (a UserApiKey GlobalID).',
          },
          description: 'Cursor for pagination (a UserApiKey GlobalID).',
          title: 'Cursor',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().gt(0).max(1000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              maximum: 1000,
              exclusiveMinimum: 0,
              description: 'The maximum number of API keys to return (at most 1000).',
              default: 100,
              title: 'Limit',
            },
            description: 'The maximum number of API keys to return (at most 1000).',
          },
          description: 'The maximum number of API keys to return (at most 1000).',
          title: 'Limit',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A paginated list of user API keys and their owners.',
      content: { 'application/json': { schema: GetAllUserApiKeysResponseBodySchema } },
    },
    401: { description: 'Unauthorized', content: { 'text/plain': { schema: z.string() } } },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const deleteV1UserApiKeysApiKeyIdRoute = createRoute({
  method: 'delete',
  path: '/v1/user/api_keys/{api_key_id}',
  tags: ['api_keys'],
  summary: 'Delete a user API key',
  description:
    'Permanently revoke a user API key. Users can revoke their own keys, and admins can revoke keys belonging to other users. The key stops working immediately.',
  operationId: 'deleteUserApiKey',
  request: {
    params: z.object({
      api_key_id: z
        .string()
        .openapi({
          param: {
            name: 'api_key_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The GlobalID of the API key.',
              title: 'Api Key Id',
            },
            description: 'The GlobalID of the API key.',
          },
          description: 'The GlobalID of the API key.',
          title: 'Api Key Id',
        }),
    }),
  },
  responses: {
    204: { description: 'No content returned on successful deletion.' },
    401: { description: 'Unauthorized', content: { 'text/plain': { schema: z.string() } } },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'API key not found.', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getV1SystemApiKeysRoute = createRoute({
  method: 'get',
  path: '/v1/system/api_keys',
  tags: ['api_keys'],
  summary: 'List system API keys',
  description:
    'Retrieve all system API keys. System keys belong to the system user rather than to any human, so this endpoint is restricted to admins. The keys themselves are not recoverable and are never included in the response.',
  operationId: 'getSystemApiKeys',
  responses: {
    200: {
      description: 'The system API keys.',
      content: { 'application/json': { schema: GetApiKeysResponseBodySchema } },
    },
    401: { description: 'Unauthorized', content: { 'text/plain': { schema: z.string() } } },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const postV1SystemApiKeysRoute = createRoute({
  method: 'post',
  path: '/v1/system/api_keys',
  tags: ['api_keys'],
  summary: 'Create a system API key',
  description:
    'Create a system API key. System keys belong to the system user rather than to any human, so this endpoint is restricted to admins. Creation requires an admin access-token session or the configured admin secret; API keys cannot mint keys. The response contains the key itself, which is shown only once and cannot be retrieved afterwards.',
  operationId: 'createSystemApiKey',
  request: {
    body: {
      content: { 'application/json': { schema: CreateApiKeyRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The newly created system API key, including the key itself.',
      content: { 'application/json': { schema: CreateApiKeyResponseBodySchema } },
    },
    401: { description: 'Unauthorized', content: { 'text/plain': { schema: z.string() } } },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
    507: { description: 'Insufficient Storage', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const deleteV1SystemApiKeysApiKeyIdRoute = createRoute({
  method: 'delete',
  path: '/v1/system/api_keys/{api_key_id}',
  tags: ['api_keys'],
  summary: 'Delete a system API key',
  description:
    'Permanently revoke a system API key. The key stops working immediately. Restricted to admins.',
  operationId: 'deleteSystemApiKey',
  request: {
    params: z.object({
      api_key_id: z
        .string()
        .openapi({
          param: {
            name: 'api_key_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              description: 'The GlobalID of the system API key.',
              title: 'Api Key Id',
            },
            description: 'The GlobalID of the system API key.',
          },
          description: 'The GlobalID of the system API key.',
          title: 'Api Key Id',
        }),
    }),
  },
  responses: {
    204: { description: 'No content returned on successful deletion.' },
    401: { description: 'Unauthorized', content: { 'text/plain': { schema: z.string() } } },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: {
      description: 'System API key not found.',
      content: { 'text/plain': { schema: z.string() } },
    },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const postV1ChatCompletionsRoute = createRoute({
  method: 'post',
  path: '/v1/chat/completions',
  tags: ['chat_completions'],
  summary: 'OpenAI-compatible chat completions',
  description:
    "Creates a chat completion using the OpenAI wire format, proxying to the selected provider with credentials resolved on the server (secret store first, environment second) — callers never handle provider API keys. Model must be '{provider}:{model_name}' for a built-in provider (one of anthropic, aws, azure_openai, cerebras, deepseek, fireworks, google, groq, meta, minimax, moonshot, ollama, openai, perplexity, together, xai, zai) or 'custom:{provider_id}:{model_name}' for a stored custom provider, e.g. 'openai:gpt-4o' or 'anthropic:claude-sonnet-4-5'. Set `stream: true` for server-sent events of `chat.completion.chunk` payloads terminated by `data: [DONE]`. Tool calling is not supported.\n\n**Phoenix is not an AI gateway.** The same server also takes on trace ingestion traffic, so routing production LLM calls through it competes with ingestion. Use this endpoint only to quickly try out different models in non-production environments.",
  operationId: 'createChatCompletion',
  request: {
    body: {
      content: { 'application/json': { schema: CreateChatCompletionRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ChatCompletionSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ChatCompletionErrorResponseSchema } },
    },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ChatCompletionErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: ChatCompletionErrorResponseSchema } },
    },
  },
})

export const postAuthLoginRoute = createRoute({
  method: 'post',
  path: '/auth/login',
  summary: ' Login',
  description: 'Authenticate user via email/password and return access/refresh tokens.',
  operationId: '_login_auth_login_post',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
})

export const getAuthLogoutRoute = createRoute({
  method: 'get',
  path: '/auth/logout',
  summary: ' Logout',
  description: 'Log out of every browser session by revoking its tokens, and clear the cookies.',
  operationId: '_logout_auth_logout_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
})

export const postAuthRefreshRoute = createRoute({
  method: 'post',
  path: '/auth/refresh',
  summary: ' Refresh Tokens',
  description: 'Refresh access and refresh tokens.',
  operationId: '_refresh_tokens_auth_refresh_post',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
})

export const postAuthPasswordResetEmailRoute = createRoute({
  method: 'post',
  path: '/auth/password-reset-email',
  summary: ' Initiate Password Reset',
  description: 'Send password reset email to user.',
  operationId: '_initiate_password_reset_auth_password_reset_email_post',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
})

export const postAuthPasswordResetRoute = createRoute({
  method: 'post',
  path: '/auth/password-reset',
  summary: ' Reset Password',
  description: 'Reset user password using a valid reset token.',
  operationId: '_reset_password_auth_password_reset_post',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
})

export const postAuthLdapLoginRoute = createRoute({
  method: 'post',
  path: '/auth/ldap/login',
  summary: ' Ldap Login',
  description: 'Authenticate user via LDAP and return access/refresh tokens.',
  operationId: '_ldap_login_auth_ldap_login_post',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
})

export const getOauth2IdpNameLoginRoute = createRoute({
  method: 'get',
  path: '/oauth2/{idp_name}/login',
  summary: 'Login',
  operationId: 'login_oauth2__idp_name__login_get',
  request: {
    params: z.object({
      idp_name: z
        .string()
        .regex(/[a-z0-9_]+/)
        .min(1)
        .openapi({
          param: {
            name: 'idp_name',
            in: 'path',
            required: true,
            schema: { type: 'string', minLength: 1, pattern: '[a-z0-9_]+', title: 'Idp Name' },
          },
          title: 'Idp Name',
        }),
    }),
    query: z.object({
      returnUrl: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'returnUrl',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Returnurl' },
          },
          title: 'Returnurl',
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

export const postOauth2IdpNameLoginRoute = createRoute({
  method: 'post',
  path: '/oauth2/{idp_name}/login',
  summary: 'Login',
  operationId: 'login_oauth2__idp_name__login_post',
  request: {
    params: z.object({
      idp_name: z
        .string()
        .regex(/[a-z0-9_]+/)
        .min(1)
        .openapi({
          param: {
            name: 'idp_name',
            in: 'path',
            required: true,
            schema: { type: 'string', minLength: 1, pattern: '[a-z0-9_]+', title: 'Idp Name' },
          },
          title: 'Idp Name',
        }),
    }),
    query: z.object({
      returnUrl: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'returnUrl',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Returnurl' },
          },
          title: 'Returnurl',
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

export const getOauth2IdpNameTokensRoute = createRoute({
  method: 'get',
  path: '/oauth2/{idp_name}/tokens',
  summary: 'Create Tokens',
  operationId: 'create_tokens_oauth2__idp_name__tokens_get',
  request: {
    params: z.object({
      idp_name: z
        .string()
        .regex(/[a-z0-9_]+/)
        .min(1)
        .openapi({
          param: {
            name: 'idp_name',
            in: 'path',
            required: true,
            schema: { type: 'string', minLength: 1, pattern: '[a-z0-9_]+', title: 'Idp Name' },
          },
          title: 'Idp Name',
        }),
    }),
    query: z.object({
      state: z
        .string()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            required: true,
            schema: { type: 'string', title: 'State' },
          },
          title: 'State',
        }),
      code: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'code',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Code' },
          },
          title: 'Code',
        }),
      error: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'error',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Error' },
          },
          title: 'Error',
        }),
      error_description: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'error_description',
            in: 'query',
            required: false,
            schema: { anyOf: [{ type: 'string' }, { type: 'null' }], title: 'Error Description' },
          },
          title: 'Error Description',
        }),
    }),
    cookies: z.object({
      'phoenix-oauth2-state': z
        .string()
        .openapi({
          param: {
            name: 'phoenix-oauth2-state',
            in: 'cookie',
            required: true,
            schema: { type: 'string', title: 'Phoenix-Oauth2-State' },
          },
          title: 'Phoenix-Oauth2-State',
        }),
      'phoenix-oauth2-login-context': ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'phoenix-oauth2-login-context',
            in: 'cookie',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              title: 'Phoenix-Oauth2-Login-Context',
            },
          },
          title: 'Phoenix-Oauth2-Login-Context',
        }),
      'phoenix-oauth2-nonce': z
        .string()
        .openapi({
          param: {
            name: 'phoenix-oauth2-nonce',
            in: 'cookie',
            required: true,
            schema: { type: 'string', title: 'Phoenix-Oauth2-Nonce' },
          },
          title: 'Phoenix-Oauth2-Nonce',
        }),
      'phoenix-oauth2-code-verifier': ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.union([
          z.string(),
          z.preprocess((val) => (val === 'null' ? null : val), z.null().nullable()),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'phoenix-oauth2-code-verifier',
            in: 'cookie',
            required: false,
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              title: 'Phoenix-Oauth2-Code-Verifier',
            },
          },
          title: 'Phoenix-Oauth2-Code-Verifier',
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

export const postAgentsServerSessionsSessionIdChatRoute = createRoute({
  method: 'post',
  path: '/agents/server/sessions/{session_id}/chat',
  tags: ['chat'],
  summary: 'Run Headless Agent',
  operationId: 'legacyServerAgentChat',
  request: {
    params: z.object({
      session_id: z
        .string()
        .openapi({
          param: {
            name: 'session_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Session Id' },
          },
          title: 'Session Id',
        }),
    }),
    body: { content: { 'application/json': { schema: LegacyChatRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    400: { description: 'Bad Request', content: { 'text/plain': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { 'text/plain': { schema: z.string() } } },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    507: { description: 'Insufficient Storage', content: { 'text/plain': { schema: z.string() } } },
  },
  deprecated: true,
})

export const getV1AgentSessionsRoute = createRoute({
  method: 'get',
  path: '/v1/agent_sessions',
  tags: ['chat'],
  summary: 'List Sessions',
  description: "List the viewer's persisted sessions, most recently active first.",
  operationId: 'listAgentSessions',
  request: {
    query: z.object({
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
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description: 'Opaque pagination cursor.',
              title: 'Cursor',
            },
            description: 'Opaque pagination cursor.',
          },
          description: 'Opaque pagination cursor.',
          title: 'Cursor',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().gt(0).max(100),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              maximum: 100,
              exclusiveMinimum: 0,
              default: 20,
              title: 'Limit',
            },
          },
          title: 'Limit',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListAgentSessionsResponseBodySchema } },
    },
    401: { description: 'Unauthorized', content: { 'text/plain': { schema: z.string() } } },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const postV1AgentSessionsRoute = createRoute({
  method: 'post',
  path: '/v1/agent_sessions',
  tags: ['chat'],
  summary: 'Create Session',
  description: 'Create a persisted agent session owned by the requesting user.',
  operationId: 'createAgentSession',
  request: {
    body: {
      content: { 'application/json': { schema: CreateAgentSessionRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful Response',
      content: { 'application/json': { schema: CreateAgentSessionResponseBodySchema } },
    },
    400: { description: 'Bad Request', content: { 'text/plain': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { 'text/plain': { schema: z.string() } } },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
    507: { description: 'Insufficient Storage', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getV1AgentSessionsSessionIdRoute = createRoute({
  method: 'get',
  path: '/v1/agent_sessions/{session_id}',
  tags: ['chat'],
  summary: 'Get Session',
  description: "Retrieve an owned session's metadata.",
  operationId: 'getAgentSession',
  request: {
    params: z.object({
      session_id: z
        .string()
        .openapi({
          param: {
            name: 'session_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Session Id' },
          },
          title: 'Session Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GetAgentSessionResponseBodySchema } },
    },
    401: { description: 'Unauthorized', content: { 'text/plain': { schema: z.string() } } },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const patchV1AgentSessionsSessionIdRoute = createRoute({
  method: 'patch',
  path: '/v1/agent_sessions/{session_id}',
  tags: ['chat'],
  summary: 'Patch Session',
  description: "Update a persisted session's mutable fields.",
  operationId: 'patchAgentSession',
  request: {
    params: z.object({
      session_id: z
        .string()
        .openapi({
          param: {
            name: 'session_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Session Id' },
          },
          title: 'Session Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: PatchAgentSessionRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PatchAgentSessionResponseBodySchema } },
    },
    400: { description: 'Bad Request', content: { 'text/plain': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { 'text/plain': { schema: z.string() } } },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    409: {
      description:
        "The request conflicts with the session's current state; the body's ``code`` field says how.",
      content: { 'application/json': { schema: AgentSessionConflictErrorSchema } },
    },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
    507: { description: 'Insufficient Storage', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getV1AgentSessionsSessionIdMessagesRoute = createRoute({
  method: 'get',
  path: '/v1/agent_sessions/{session_id}/messages',
  tags: ['chat'],
  summary: 'List Session Messages',
  description: "Page through an owned session's persisted transcript, oldest first.",
  operationId: 'listAgentSessionMessages',
  request: {
    params: z.object({
      session_id: z
        .string()
        .openapi({
          param: {
            name: 'session_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Session Id' },
          },
          title: 'Session Id',
        }),
    }),
    query: z.object({
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
            schema: {
              anyOf: [{ type: 'string' }, { type: 'null' }],
              description: 'Opaque pagination cursor.',
              title: 'Cursor',
            },
            description: 'Opaque pagination cursor.',
          },
          description: 'Opaque pagination cursor.',
          title: 'Cursor',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().gt(0).max(1000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              maximum: 1000,
              exclusiveMinimum: 0,
              default: 100,
              title: 'Limit',
            },
          },
          title: 'Limit',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListAgentSessionMessagesResponseBodySchema } },
    },
    401: { description: 'Unauthorized', content: { 'text/plain': { schema: z.string() } } },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    422: { description: 'Unprocessable Entity', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const postV1AgentSessionsSessionIdCompactRoute = createRoute({
  method: 'post',
  path: '/v1/agent_sessions/{session_id}/compact',
  tags: ['chat'],
  summary: 'Compact Agent Session',
  operationId: 'compactAgentSession',
  request: {
    params: z.object({
      session_id: z
        .string()
        .openapi({
          param: {
            name: 'session_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Session Id' },
          },
          title: 'Session Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: CompactAgentSessionRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: CompactAgentSessionResponseBodySchema } },
    },
    400: { description: 'Bad Request', content: { 'text/plain': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { 'text/plain': { schema: z.string() } } },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    409: {
      description:
        "The request conflicts with the session's current state; the body's ``code`` field says how.",
      content: { 'application/json': { schema: AgentSessionConflictErrorSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    502: { description: 'Bad Gateway', content: { 'text/plain': { schema: z.string() } } },
    507: { description: 'Insufficient Storage', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const postV1AgentSessionsSessionIdToolOutputsRoute = createRoute({
  method: 'post',
  path: '/v1/agent_sessions/{session_id}/tool_outputs',
  tags: ['chat'],
  summary: 'Submit Agent Session Tool Outputs',
  description: "Persist resolved client tool outputs for the session's open turn.",
  operationId: 'submitAgentSessionToolOutputs',
  request: {
    params: z.object({
      session_id: z
        .string()
        .openapi({
          param: {
            name: 'session_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Session Id' },
          },
          title: 'Session Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: SubmitAgentSessionToolOutputsRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: SubmitAgentSessionToolOutputsResponseBodySchema } },
    },
    400: { description: 'Bad Request', content: { 'text/plain': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { 'text/plain': { schema: z.string() } } },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    409: {
      description:
        "The request conflicts with the session's current state; the body's ``code`` field says how.",
      content: { 'application/json': { schema: AgentSessionConflictErrorSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    507: { description: 'Insufficient Storage', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const postV1AgentSessionsSessionIdToolApprovalsRoute = createRoute({
  method: 'post',
  path: '/v1/agent_sessions/{session_id}/tool_approvals',
  tags: ['chat'],
  summary: 'Submit Agent Session Tool Approvals',
  description: "Persist answered tool approvals for the session's open turn.",
  operationId: 'submitAgentSessionToolApprovals',
  request: {
    params: z.object({
      session_id: z
        .string()
        .openapi({
          param: {
            name: 'session_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Session Id' },
          },
          title: 'Session Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: SubmitAgentSessionToolApprovalsRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': { schema: SubmitAgentSessionToolApprovalsResponseBodySchema },
      },
    },
    400: { description: 'Bad Request', content: { 'text/plain': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { 'text/plain': { schema: z.string() } } },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    409: {
      description:
        "The request conflicts with the session's current state; the body's ``code`` field says how.",
      content: { 'application/json': { schema: AgentSessionConflictErrorSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    507: { description: 'Insufficient Storage', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const postV1AgentSessionsSessionIdChatRoute = createRoute({
  method: 'post',
  path: '/v1/agent_sessions/{session_id}/chat',
  tags: ['chat'],
  summary: 'Chat',
  operationId: 'agentSessionChat',
  request: {
    params: z.object({
      session_id: z
        .string()
        .openapi({
          param: {
            name: 'session_id',
            in: 'path',
            required: true,
            schema: { type: 'string', title: 'Session Id' },
          },
          title: 'Session Id',
        }),
    }),
    body: { content: { 'application/json': { schema: ChatRequestBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    400: { description: 'Bad Request', content: { 'text/plain': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: { 'text/plain': { schema: z.string() } } },
    403: { description: 'Forbidden', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Not Found', content: { 'text/plain': { schema: z.string() } } },
    409: {
      description:
        "The request conflicts with the session's current state; the body's ``code`` field says how.",
      content: { 'application/json': { schema: AgentSessionConflictErrorSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    507: { description: 'Insufficient Storage', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getArizePhoenixVersionRoute = createRoute({
  method: 'get',
  path: '/arize_phoenix_version',
  summary: 'Version',
  operationId: 'version_arize_phoenix_version_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
})

export const getHealthzRoute = createRoute({
  method: 'get',
  path: '/healthz',
  summary: 'Check Healthz',
  operationId: 'check_healthz_healthz_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
})

export const getReadyzRoute = createRoute({
  method: 'get',
  path: '/readyz',
  summary: 'Check Readyz',
  operationId: 'check_readyz_readyz_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
})
