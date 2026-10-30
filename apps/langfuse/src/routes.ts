import { createRoute, z } from '@hono/zod-openapi'

const ScoreSourceSchema = z
  .enum(['ANNOTATION', 'API', 'EVAL'])
  .openapi({ title: 'ScoreSource' })
  .openapi('ScoreSource')

const BaseScoreSchema = z
  .object({
    id: z.string(),
    traceId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The trace ID associated with the score' }),
    sessionId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The session ID associated with the score' }),
    observationId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The observation ID associated with the score' }),
    datasetRunId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The dataset run ID associated with the score' }),
    name: z.string(),
    source: ScoreSourceSchema,
    timestamp: z.iso.datetime({ offset: true }),
    createdAt: z.iso.datetime({ offset: true }),
    updatedAt: z.iso.datetime({ offset: true }),
    authorUserId: z.string().nullable().openapi({ description: 'The user ID of the author' }),
    comment: z.string().nullable().openapi({ description: 'Comment on the score' }),
    metadata: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'Metadata associated with the score' }),
    configId: z
      .string()
      .nullable()
      .openapi({
        description:
          'Reference a score config on a score. When set, config and score name must be equal and value must comply to optionally defined numerical range',
      }),
    queueId: z
      .string()
      .nullable()
      .openapi({
        description:
          'The annotation queue referenced by the score. Indicates if score was initially created while processing annotation queue.',
      }),
    environment: z
      .string()
      .openapi({
        description:
          "The environment from which this score originated. Can be any lowercase alphanumeric string with hyphens and underscores that does not start with 'langfuse'.",
      }),
  })
  .openapi({
    title: 'BaseScore',
    required: [
      'id',
      'name',
      'source',
      'timestamp',
      'createdAt',
      'updatedAt',
      'authorUserId',
      'comment',
      'configId',
      'queueId',
      'environment',
    ],
  })
  .openapi('BaseScore')

const NumericScoreSchema = BaseScoreSchema.and(
  z
    .object({ value: z.float64().openapi({ description: 'The numeric value of the score' }) })
    .openapi({ required: ['value'] }),
)
  .openapi({ title: 'NumericScore', required: ['value'] })
  .openapi('NumericScore')

const CategoricalScoreSchema = BaseScoreSchema.and(
  z
    .object({
      value: z
        .float64()
        .openapi({
          description:
            'Represents the numeric category mapping of the stringValue. If no config is linked, defaults to 0.',
        }),
      stringValue: z
        .string()
        .openapi({
          description:
            'The string representation of the score value. If no config is linked, can be any string. Otherwise, must map to a config category',
        }),
    })
    .openapi({ required: ['value', 'stringValue'] }),
)
  .openapi({ title: 'CategoricalScore', required: ['value', 'stringValue'] })
  .openapi('CategoricalScore')

const BooleanScoreSchema = BaseScoreSchema.and(
  z
    .object({
      value: z
        .float64()
        .openapi({
          description: 'The numeric value of the score. Equals 1 for "True" and 0 for "False"',
        }),
      stringValue: z
        .string()
        .openapi({
          description:
            'The string representation of the score value. Is inferred from the numeric value and equals "True" or "False"',
        }),
    })
    .openapi({ required: ['value', 'stringValue'] }),
)
  .openapi({ title: 'BooleanScore', required: ['value', 'stringValue'] })
  .openapi('BooleanScore')

const CorrectionScoreSchema = BaseScoreSchema.and(
  z
    .object({
      value: z
        .float64()
        .openapi({
          description: 'The numeric value of the score. Always 0 for correction scores.',
        }),
      stringValue: z
        .string()
        .openapi({ description: 'The string representation of the correction content' }),
    })
    .openapi({ required: ['value', 'stringValue'] }),
)
  .openapi({ title: 'CorrectionScore', required: ['value', 'stringValue'] })
  .openapi('CorrectionScore')

const TextScoreSchema = BaseScoreSchema.and(
  z
    .object({
      stringValue: z
        .string()
        .openapi({ description: 'The text content of the score (1-500 characters)' }),
    })
    .openapi({ required: ['stringValue'] }),
)
  .openapi({ title: 'TextScore', required: ['stringValue'] })
  .openapi('TextScore')

type ScoreType =
  | ({ dataType?: 'NUMERIC' } & z.infer<typeof NumericScoreSchema>)
  | ({ dataType?: 'CATEGORICAL' } & z.infer<typeof CategoricalScoreSchema>)
  | ({ dataType?: 'BOOLEAN' } & z.infer<typeof BooleanScoreSchema>)
  | ({ dataType?: 'CORRECTION' } & z.infer<typeof CorrectionScoreSchema>)
  | ({ dataType?: 'TEXT' } & z.infer<typeof TextScoreSchema>)

const PromptVariableMappingReadSchema = z
  .object({
    variable: z.string().openapi({ description: 'Prompt variable name without braces.' }),
    source: z
      .string()
      .nullable()
      .openapi({
        description:
          'Stored source field populating the variable, or `null` when the mapping is incomplete.',
      }),
    jsonPath: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional JSONPath selector applied to the selected source.' }),
  })
  .openapi({
    title: 'PromptVariableMappingRead',
    description:
      'Connects one prompt variable to source data.\n\n`source` is `null` when the mapping is incomplete.',
    required: ['variable', 'source'],
  })
  .openapi('PromptVariableMappingRead')

const LegacyEvaluationObjectSchema = z
  .enum([
    'trace',
    'span',
    'generation',
    'event',
    'agent',
    'tool',
    'chain',
    'retriever',
    'evaluator',
    'embedding',
    'guardrail',
    'dataset_item',
  ])
  .openapi({
    title: 'LegacyEvaluationObject',
    description:
      '**Deprecated:** Legacy Langfuse object kind used by trace and dataset evaluation rules.',
  })
  .openapi('LegacyEvaluationObject')

const LegacyPromptVariableMappingSchema = z
  .object({
    mappingType: z
      .literal('legacy')
      .openapi({ description: 'Explicitly marks this as a legacy mapping.' }),
    variable: z.string().openapi({ description: 'Prompt variable name without braces.' }),
    langfuseObject: LegacyEvaluationObjectSchema.openapi({
      description: 'Legacy object kind selected as the mapping source.',
    }),
    objectName: z
      .string()
      .nullable()
      .openapi({
        description:
          'Observation name to match, or `null` when `langfuseObject` is `trace` or `dataset_item`.',
      }),
    source: z.string().openapi({ description: 'Field selected from the legacy object.' }),
    jsonPath: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional JSONPath selector applied to the selected field.' }),
  })
  .openapi({
    title: 'LegacyPromptVariableMapping',
    description:
      '**Deprecated:** Connects one prompt variable to data from a legacy trace or dataset evaluation rule.\n\n`langfuseObject` selects the object kind. `objectName` separately selects a named observation and is `null` for trace and dataset-item mappings.',
    required: ['mappingType', 'variable', 'langfuseObject', 'objectName', 'source'],
  })
  .openapi('LegacyPromptVariableMapping')

type PromptVariableMappingType =
  | z.infer<typeof PromptVariableMappingReadSchema>
  | z.infer<typeof LegacyPromptVariableMappingSchema>

const EvaluationRuleNumberFilterOperatorSchema = z
  .enum(['=', '>', '<', '>=', '<='])
  .openapi({ title: 'EvaluationRuleNumberFilterOperator' })
  .openapi('EvaluationRuleNumberFilterOperator')

const DateTimeEvaluationRuleFilterSchema = z
  .object({
    column: z.string().openapi({ description: 'Column to filter on.' }),
    operator: EvaluationRuleNumberFilterOperatorSchema.openapi({
      description: 'Comparison operator for datetime values.',
    }),
    value: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Datetime value to compare against.' }),
  })
  .openapi({ title: 'DateTimeEvaluationRuleFilter', required: ['column', 'operator', 'value'] })
  .openapi('DateTimeEvaluationRuleFilter')

const EvaluationRuleStringFilterOperatorSchema = z
  .enum(['=', 'contains', 'does not contain', 'starts with', 'ends with'])
  .openapi({ title: 'EvaluationRuleStringFilterOperator' })
  .openapi('EvaluationRuleStringFilterOperator')

const StringEvaluationRuleFilterSchema = z
  .object({
    column: z.string().openapi({ description: 'Column to filter on.' }),
    operator: EvaluationRuleStringFilterOperatorSchema,
    value: z.string(),
  })
  .openapi({ title: 'StringEvaluationRuleFilter', required: ['column', 'operator', 'value'] })
  .openapi('StringEvaluationRuleFilter')

const NumberEvaluationRuleFilterSchema = z
  .object({
    column: z.string().openapi({ description: 'Column to filter on.' }),
    operator: EvaluationRuleNumberFilterOperatorSchema,
    value: z.float64(),
  })
  .openapi({ title: 'NumberEvaluationRuleFilter', required: ['column', 'operator', 'value'] })
  .openapi('NumberEvaluationRuleFilter')

const EvaluationRuleOptionsFilterOperatorSchema = z
  .enum(['any of', 'none of'])
  .openapi({ title: 'EvaluationRuleOptionsFilterOperator' })
  .openapi('EvaluationRuleOptionsFilterOperator')

const StringOptionsEvaluationRuleFilterSchema = z
  .object({
    column: z.string().openapi({ description: 'Column to filter on.' }),
    operator: EvaluationRuleOptionsFilterOperatorSchema,
    value: z.array(z.string()).openapi({ description: 'One or more allowed string values.' }),
  })
  .openapi({
    title: 'StringOptionsEvaluationRuleFilter',
    required: ['column', 'operator', 'value'],
  })
  .openapi('StringOptionsEvaluationRuleFilter')

const CategoryOptionsEvaluationRuleFilterSchema = z
  .object({
    column: z.string().openapi({ description: 'Object-valued column to filter on.' }),
    key: z.string().openapi({ description: 'Key inside the object-valued column to filter on.' }),
    operator: EvaluationRuleOptionsFilterOperatorSchema,
    value: z.array(z.string()),
  })
  .openapi({
    title: 'CategoryOptionsEvaluationRuleFilter',
    required: ['column', 'key', 'operator', 'value'],
  })
  .openapi('CategoryOptionsEvaluationRuleFilter')

const EvaluationRuleArrayOptionsFilterOperatorSchema = z
  .enum(['any of', 'none of', 'all of'])
  .openapi({ title: 'EvaluationRuleArrayOptionsFilterOperator' })
  .openapi('EvaluationRuleArrayOptionsFilterOperator')

const ArrayOptionsEvaluationRuleFilterSchema = z
  .object({
    column: z.string().openapi({ description: 'Column to filter on.' }),
    operator: EvaluationRuleArrayOptionsFilterOperatorSchema,
    value: z.array(z.string()).openapi({ description: 'One or more array elements to match.' }),
  })
  .openapi({ title: 'ArrayOptionsEvaluationRuleFilter', required: ['column', 'operator', 'value'] })
  .openapi('ArrayOptionsEvaluationRuleFilter')

const EvaluationRuleStringObjectFilterOperatorSchema = z
  .enum(['=', 'contains', 'does not contain', 'starts with', 'ends with', 'is set', 'is not set'])
  .openapi({ title: 'EvaluationRuleStringObjectFilterOperator' })
  .openapi('EvaluationRuleStringObjectFilterOperator')

const StringObjectEvaluationRuleFilterSchema = z
  .object({
    column: z
      .string()
      .openapi({
        description: 'Object-valued column to filter on. Currently only `metadata` is supported.',
      }),
    key: z
      .string()
      .openapi({ description: 'Top-level key inside the object-valued column to filter on.' }),
    operator: EvaluationRuleStringObjectFilterOperatorSchema.openapi({
      description: 'Use `is set` / `is not set` to filter on key presence.',
    }),
    value: z
      .string()
      .openapi({
        description: 'Value to compare against. Ignored for `is set` / `is not set`; send `""`.',
      }),
  })
  .openapi({
    title: 'StringObjectEvaluationRuleFilter',
    required: ['column', 'key', 'operator', 'value'],
  })
  .openapi('StringObjectEvaluationRuleFilter')

const NumberObjectEvaluationRuleFilterSchema = z
  .object({
    column: z.string().openapi({ description: 'Object-valued column to filter on.' }),
    key: z.string().openapi({ description: 'Key inside the object-valued column to filter on.' }),
    operator: EvaluationRuleNumberFilterOperatorSchema,
    value: z.float64(),
  })
  .openapi({
    title: 'NumberObjectEvaluationRuleFilter',
    required: ['column', 'key', 'operator', 'value'],
  })
  .openapi('NumberObjectEvaluationRuleFilter')

const EvaluationRuleBooleanFilterOperatorSchema = z
  .enum(['=', '<>'])
  .openapi({ title: 'EvaluationRuleBooleanFilterOperator' })
  .openapi('EvaluationRuleBooleanFilterOperator')

const BooleanEvaluationRuleFilterSchema = z
  .object({
    column: z.string().openapi({ description: 'Column to filter on.' }),
    operator: EvaluationRuleBooleanFilterOperatorSchema,
    value: z.boolean(),
  })
  .openapi({ title: 'BooleanEvaluationRuleFilter', required: ['column', 'operator', 'value'] })
  .openapi('BooleanEvaluationRuleFilter')

const EvaluationRuleNullFilterOperatorSchema = z
  .enum(['is null', 'is not null'])
  .openapi({ title: 'EvaluationRuleNullFilterOperator' })
  .openapi('EvaluationRuleNullFilterOperator')

const NullEvaluationRuleFilterSchema = z
  .object({
    column: z
      .string()
      .openapi({ description: 'Column to filter on, for example `parentObservationId`.' }),
    operator: EvaluationRuleNullFilterOperatorSchema,
    value: z
      .literal('')
      .openapi({
        description: 'Required empty-string placeholder used by the runtime filter contract.',
      }),
  })
  .openapi({ title: 'NullEvaluationRuleFilter', required: ['column', 'operator', 'value'] })
  .openapi('NullEvaluationRuleFilter')

type EvaluationRuleFilterType =
  | ({ type?: 'datetime' } & z.infer<typeof DateTimeEvaluationRuleFilterSchema>)
  | ({ type?: 'string' } & z.infer<typeof StringEvaluationRuleFilterSchema>)
  | ({ type?: 'number' } & z.infer<typeof NumberEvaluationRuleFilterSchema>)
  | ({ type?: 'stringOptions' } & z.infer<typeof StringOptionsEvaluationRuleFilterSchema>)
  | ({ type?: 'categoryOptions' } & z.infer<typeof CategoryOptionsEvaluationRuleFilterSchema>)
  | ({ type?: 'arrayOptions' } & z.infer<typeof ArrayOptionsEvaluationRuleFilterSchema>)
  | ({ type?: 'stringObject' } & z.infer<typeof StringObjectEvaluationRuleFilterSchema>)
  | ({ type?: 'numberObject' } & z.infer<typeof NumberObjectEvaluationRuleFilterSchema>)
  | ({ type?: 'boolean' } & z.infer<typeof BooleanEvaluationRuleFilterSchema>)
  | ({ type?: 'null' } & z.infer<typeof NullEvaluationRuleFilterSchema>)

const CreatorSchema = z
  .object({
    id: z.string().openapi({ description: 'User identifier.' }),
    name: z.string().nullable().openapi({ description: 'User name, or `null` when unavailable.' }),
  })
  .openapi({
    title: 'Creator',
    description: 'User who created the resource, or `null` when no user can be resolved.',
    required: ['id', 'name'],
  })
  .openapi('Creator')

const EvaluatorVersionBaseSchema = z
  .object({
    id: z.string().openapi({ description: 'Stable identifier of this evaluator version.' }),
    version: z.int().openapi({ description: 'Monotonically increasing evaluator version number.' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp when this evaluator version was created.' }),
    createdBy: CreatorSchema.nullable().openapi({
      description: 'User who created this version, or `null` when no user can be resolved.',
    }),
  })
  .openapi({ title: 'EvaluatorVersionBase', required: ['id', 'version', 'createdAt', 'createdBy'] })
  .openapi('EvaluatorVersionBase')

const EvaluatorChatMessageRoleSchema = z
  .enum(['system', 'user', 'assistant'])
  .openapi({
    title: 'EvaluatorChatMessageRole',
    description: 'Role of an evaluator prompt message.',
  })
  .openapi('EvaluatorChatMessageRole')

const EvaluatorChatMessageSchema = z
  .object({
    role: EvaluatorChatMessageRoleSchema,
    content: z
      .string()
      .openapi({ description: 'Message content. Evaluator variables use `{{variable}}` syntax.' }),
  })
  .openapi({
    title: 'EvaluatorChatMessage',
    description: 'One chat message in an evaluator prompt.',
    required: ['role', 'content'],
  })
  .openapi('EvaluatorChatMessage')

const EvaluatorChatPromptSchema = z
  .array(EvaluatorChatMessageSchema)
  .openapi({
    title: 'EvaluatorChatPrompt',
    description:
      'An ordered list of chat messages. A system message is only allowed as the first message.',
  })
  .openapi('EvaluatorChatPrompt')

const EvaluatorModelConfigSchema = z
  .object({
    provider: z
      .string()
      .openapi({
        description:
          'Provider identifier, for example `openai` or `anthropic`.\n\nTo discover valid values for the current project, call `GET /api/public/llm-connections` and use one of the returned `provider` values.',
      }),
    model: z
      .string()
      .openapi({
        description: 'Model identifier exposed by the provider, for example `gpt-4.1-mini`.',
      }),
  })
  .openapi({
    title: 'EvaluatorModelConfig',
    description:
      "Explicit model configuration for an evaluator.\n\nIf the complete `modelConfig` is `null`, Langfuse uses the project's default evaluation model.\nIf provided, the model must be available to the project when the evaluator or evaluation rule is enabled.",
    required: ['provider', 'model'],
  })
  .openapi('EvaluatorModelConfig')

const EvaluatorOutputDefinitionBaseSchema = z
  .object({
    scoreReasoningInstructions: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional instructions for deriving the reasoning returned with the score.',
      }),
    scoreValueInstructions: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional instructions for deriving the score value.' }),
  })
  .openapi({ title: 'EvaluatorOutputDefinitionBase', required: [] })
  .openapi('EvaluatorOutputDefinitionBase')

const PublicEvaluatorNumericScoreSchema = EvaluatorOutputDefinitionBaseSchema.and(
  z
    .object({
      dataType: z.literal('NUMERIC').openapi({ description: 'Numeric score output.' }),
      minValue: z
        .float64()
        .nullable()
        .exactOptional()
        .openapi({ description: 'Optional inclusive minimum value.' }),
      maxValue: z
        .float64()
        .nullable()
        .exactOptional()
        .openapi({ description: 'Optional inclusive maximum value.' }),
    })
    .openapi({ required: ['dataType'] }),
)
  .openapi({ title: 'PublicEvaluatorNumericScore', required: ['dataType'] })
  .openapi('PublicEvaluatorNumericScore')

const PublicEvaluatorBooleanScoreSchema = EvaluatorOutputDefinitionBaseSchema.and(
  z
    .object({ dataType: z.literal('BOOLEAN').openapi({ description: 'Boolean score output.' }) })
    .openapi({ required: ['dataType'] }),
)
  .openapi({ title: 'PublicEvaluatorBooleanScore', required: ['dataType'] })
  .openapi('PublicEvaluatorBooleanScore')

const PublicEvaluatorCategoricalScoreSchema = EvaluatorOutputDefinitionBaseSchema.and(
  z
    .object({
      dataType: z.literal('CATEGORICAL').openapi({ description: 'Categorical score output.' }),
      categories: z
        .array(z.string())
        .openapi({
          description: 'Allowed category values. At least two unique values are required.',
        }),
      shouldAllowMultipleMatches: z
        .boolean()
        .openapi({ description: 'Whether the evaluator may return more than one category.' }),
    })
    .openapi({ required: ['dataType', 'categories', 'shouldAllowMultipleMatches'] }),
)
  .openapi({
    title: 'PublicEvaluatorCategoricalScore',
    required: ['dataType', 'categories', 'shouldAllowMultipleMatches'],
  })
  .openapi('PublicEvaluatorCategoricalScore')

const PublicEvaluatorOutputDefinitionSchema = z
  .xor([
    z
      .object({ dataType: z.literal('NUMERIC').exactOptional() })
      .openapi({ required: [] })
      .and(PublicEvaluatorNumericScoreSchema)
      .openapi({ required: ['dataType'], title: 'PublicEvaluatorNumericScore' }),
    z
      .object({ dataType: z.literal('BOOLEAN').exactOptional() })
      .openapi({ required: [] })
      .and(PublicEvaluatorBooleanScoreSchema)
      .openapi({ required: ['dataType'], title: 'PublicEvaluatorBooleanScore' }),
    z
      .object({ dataType: z.literal('CATEGORICAL').exactOptional() })
      .openapi({ required: [] })
      .and(PublicEvaluatorCategoricalScoreSchema)
      .openapi({ required: ['dataType'], title: 'PublicEvaluatorCategoricalScore' }),
  ])
  .openapi({
    title: 'PublicEvaluatorOutputDefinition',
    description:
      'Flat evaluator output definition returned by the public API.\n\nThis response always includes `dataType` and never includes an internal output-definition `version`.\nOptional empty descriptions from legacy definitions are omitted.',
  })
  .openapi('PublicEvaluatorOutputDefinition')

const LlmAsJudgeEvaluatorVersionSchema = EvaluatorVersionBaseSchema.and(
  z
    .object({
      type: z.literal('llm_as_judge').openapi({ description: 'Evaluator type.' }),
      prompt: EvaluatorChatPromptSchema.openapi({
        description: 'Ordered chat messages used during evaluation.',
      }),
      variables: z
        .array(z.string())
        .openapi({
          description:
            'Variables extracted from the prompt and available for evaluation-rule mappings.\n\nEvery variable must be mapped exactly once when a rule provides an explicit mapping.',
        }),
      variableMapping: z
        .array(PromptVariableMappingReadSchema)
        .nullable()
        .openapi({
          description:
            'Default variable mapping for this evaluator version, or `null` when no default is configured.',
        }),
      modelConfig: EvaluatorModelConfigSchema.nullable().openapi({
        description:
          "Explicit model configuration, or `null` when the project's default evaluation model is used.",
      }),
      outputDefinition: PublicEvaluatorOutputDefinitionSchema.openapi({
        description:
          'Structured output schema returned by this evaluator.\n\nResponses include `dataType` and omit the internal output-definition persistence version.',
      }),
    })
    .openapi({
      required: [
        'type',
        'prompt',
        'variables',
        'variableMapping',
        'modelConfig',
        'outputDefinition',
      ],
    }),
)
  .openapi({
    title: 'LlmAsJudgeEvaluatorVersion',
    required: ['type', 'prompt', 'variables', 'variableMapping', 'modelConfig', 'outputDefinition'],
  })
  .openapi('LlmAsJudgeEvaluatorVersion')

const CodeEvaluatorSourceCodeLanguageSchema = z
  .enum(['PYTHON', 'TYPESCRIPT'])
  .openapi({
    title: 'CodeEvaluatorSourceCodeLanguage',
    description: 'Code evaluator runtime language.',
  })
  .openapi('CodeEvaluatorSourceCodeLanguage')

const CodeEvaluatorVersionSchema = EvaluatorVersionBaseSchema.and(
  z
    .object({
      type: z.literal('code').openapi({ description: 'Evaluator type.' }),
      sourceCode: z
        .string()
        .openapi({ description: 'Source code executed for each matched observation.' }),
      sourceCodeLanguage: CodeEvaluatorSourceCodeLanguageSchema.openapi({
        description: 'Runtime language used to execute the source code.',
      }),
    })
    .openapi({ required: ['type', 'sourceCode', 'sourceCodeLanguage'] }),
)
  .openapi({
    title: 'CodeEvaluatorVersion',
    required: ['type', 'sourceCode', 'sourceCodeLanguage'],
  })
  .openapi('CodeEvaluatorVersion')

type EvaluatorVersionType =
  | ({ type?: 'llm_as_judge' } & z.infer<typeof LlmAsJudgeEvaluatorVersionSchema>)
  | ({ type?: 'code' } & z.infer<typeof CodeEvaluatorVersionSchema>)

const EvaluatorStatusSchema = z
  .enum(['active', 'paused'])
  .openapi({
    title: 'EvaluatorStatus',
    description:
      'Effective evaluator runtime status.\n\n- `active`: the evaluator can run.\n- `paused`: Langfuse paused execution until the underlying issue is resolved.',
  })
  .openapi('EvaluatorStatus')

const PromptVariableMappingSchema: z.ZodType<PromptVariableMappingType> = z
  .lazy(() =>
    z
      .xor([PromptVariableMappingReadSchema, LegacyPromptVariableMappingSchema])
      .openapi({
        title: 'PromptVariableMapping',
        description: 'Connects one prompt variable to source data.',
      }),
  )
  .openapi('PromptVariableMapping')

const EvaluationRuleAssignmentSchema = z
  .object({
    evaluationRuleId: z
      .string()
      .openapi({ description: 'Stable identifier of the assigned evaluation rule.' }),
    variableMappingOverride: z
      .array(PromptVariableMappingSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Rule-specific variable mapping override. Omitted when the evaluator's latest default mapping is inherited. Legacy mappings use the explicit `legacy` variant.",
      }),
  })
  .openapi({
    title: 'EvaluationRuleAssignment',
    description: 'Evaluation-rule assignment associated with this evaluator.',
    required: ['evaluationRuleId'],
  })
  .openapi('EvaluationRuleAssignment')

const EvaluatorBaseSchema = z
  .object({
    id: z
      .string()
      .openapi({ description: 'Stable identifier of this evaluator across all versions.' }),
    name: z
      .string()
      .openapi({
        description:
          'Human-readable evaluator name. Names are not identifiers and do not need to be unique.',
      }),
    description: z
      .string()
      .nullable()
      .openapi({ description: 'Optional human-readable evaluator description.' }),
    createdBy: CreatorSchema.nullable().openapi({
      description: 'User who created this evaluator, or `null` when no user can be resolved.',
    }),
    status: EvaluatorStatusSchema.openapi({
      description: 'Effective evaluator status after Langfuse validates its runtime configuration.',
    }),
    pausedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Timestamp when the evaluator was paused, otherwise `null`.' }),
    pausedReason: z
      .string()
      .nullable()
      .openapi({ description: 'Machine-readable reason when `status=paused`, otherwise `null`.' }),
    pausedMessage: z
      .string()
      .nullable()
      .openapi({
        description: 'Human-readable explanation when `status=paused`, otherwise `null`.',
      }),
    evaluationRuleAssignments: z
      .array(EvaluationRuleAssignmentSchema)
      .openapi({
        description:
          'All modern and legacy evaluation-rule assignments in newest-assignment-first order. Rule-specific mappings are exposed as `variableMappingOverride`; inherited defaults are omitted.',
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp when the evaluator was created.' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp when the evaluator was last updated.' }),
    versionId: z
      .string()
      .openapi({ description: 'Stable identifier of the latest evaluator version.' }),
    version: z
      .int()
      .openapi({ description: 'Monotonically increasing latest evaluator version number.' }),
    versionCreatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp when the latest evaluator version was created.' }),
    versionCreatedBy: CreatorSchema.nullable().openapi({
      description:
        'User who created the latest evaluator version, or `null` when no user can be resolved.',
    }),
  })
  .openapi({
    title: 'EvaluatorBase',
    required: [
      'id',
      'name',
      'description',
      'createdBy',
      'status',
      'pausedAt',
      'pausedReason',
      'pausedMessage',
      'evaluationRuleAssignments',
      'createdAt',
      'updatedAt',
      'versionId',
      'version',
      'versionCreatedAt',
      'versionCreatedBy',
    ],
  })
  .openapi('EvaluatorBase')

const LlmAsJudgeEvaluatorSchema = EvaluatorBaseSchema.and(
  z
    .object({
      type: z.literal('llm_as_judge').openapi({ description: 'Evaluator type.' }),
      prompt: EvaluatorChatPromptSchema.openapi({
        description: 'Ordered chat messages used by the latest evaluator version.',
      }),
      variables: z
        .array(z.string())
        .openapi({
          description:
            'Variables extracted from the latest prompt and available for evaluation-rule mappings.',
        }),
      variableMapping: z
        .array(PromptVariableMappingReadSchema)
        .nullable()
        .openapi({
          description:
            'Default variable mapping for the latest version, or `null` when no default is configured.',
        }),
      modelConfig: EvaluatorModelConfigSchema.nullable().openapi({
        description:
          "Explicit model configuration for the latest version, or `null` when the project's default evaluation model is used.",
      }),
      outputDefinition: PublicEvaluatorOutputDefinitionSchema.openapi({
        description: 'Structured output schema returned by the latest evaluator version.',
      }),
    })
    .openapi({
      required: [
        'type',
        'prompt',
        'variables',
        'variableMapping',
        'modelConfig',
        'outputDefinition',
      ],
    }),
)
  .openapi({
    title: 'LlmAsJudgeEvaluator',
    required: ['type', 'prompt', 'variables', 'variableMapping', 'modelConfig', 'outputDefinition'],
  })
  .openapi('LlmAsJudgeEvaluator')

const CodeEvaluatorSchema = EvaluatorBaseSchema.and(
  z
    .object({
      type: z.literal('code').openapi({ description: 'Evaluator type.' }),
      sourceCode: z
        .string()
        .openapi({ description: 'Source code executed by the latest evaluator version.' }),
      sourceCodeLanguage: CodeEvaluatorSourceCodeLanguageSchema.openapi({
        description: 'Runtime language used to execute the latest source code.',
      }),
    })
    .openapi({ required: ['type', 'sourceCode', 'sourceCodeLanguage'] }),
)
  .openapi({ title: 'CodeEvaluator', required: ['type', 'sourceCode', 'sourceCodeLanguage'] })
  .openapi('CodeEvaluator')

type EvaluatorType =
  | ({ type?: 'llm_as_judge' } & z.infer<typeof LlmAsJudgeEvaluatorSchema>)
  | ({ type?: 'code' } & z.infer<typeof CodeEvaluatorSchema>)

const BasePromptSchema = z
  .object({
    name: z.string(),
    version: z.int(),
    config: z.any(),
    labels: z
      .array(z.string())
      .openapi({ description: 'List of deployment labels of this prompt version.' }),
    tags: z
      .array(z.string())
      .openapi({
        description:
          'List of tags. Used to filter via UI and API. The same across versions of a prompt.',
      }),
    commitMessage: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Commit message for this prompt version.' }),
    resolutionGraph: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The dependency resolution graph for the current prompt. Null if the prompt has no dependencies or if `resolve=false` was used.',
      }),
  })
  .openapi({ title: 'BasePrompt', required: ['name', 'version', 'config', 'labels', 'tags'] })
  .openapi('BasePrompt')

const ChatMessageTypeSchema = z
  .literal('chatmessage')
  .openapi({ title: 'ChatMessageType' })
  .openapi('ChatMessageType')

const ChatMessageSchema = z
  .object({
    role: z.string(),
    content: z.string(),
    type: ChatMessageTypeSchema.nullable().exactOptional(),
  })
  .openapi({ title: 'ChatMessage', required: ['role', 'content'] })
  .openapi('ChatMessage')

const PlaceholderMessageTypeSchema = z
  .literal('placeholder')
  .openapi({ title: 'PlaceholderMessageType' })
  .openapi('PlaceholderMessageType')

const PlaceholderMessageSchema = z
  .object({ name: z.string(), type: PlaceholderMessageTypeSchema.nullable().exactOptional() })
  .openapi({ title: 'PlaceholderMessage', required: ['name'] })
  .openapi('PlaceholderMessage')

const ChatMessageWithPlaceholdersSchema = z
  .xor([ChatMessageSchema, PlaceholderMessageSchema])
  .openapi({ title: 'ChatMessageWithPlaceholders' })
  .openapi('ChatMessageWithPlaceholders')

const ChatPromptSchema = BasePromptSchema.and(
  z
    .object({ prompt: z.array(ChatMessageWithPlaceholdersSchema) })
    .openapi({ required: ['prompt'] }),
)
  .openapi({ title: 'ChatPrompt', required: ['prompt'] })
  .openapi('ChatPrompt')

const TextPromptSchema = BasePromptSchema.and(
  z.object({ prompt: z.string() }).openapi({ required: ['prompt'] }),
)
  .openapi({ title: 'TextPrompt', required: ['prompt'] })
  .openapi('TextPrompt')

type PromptType =
  | ({ type?: 'chat' } & z.infer<typeof ChatPromptSchema>)
  | ({ type?: 'text' } & z.infer<typeof TextPromptSchema>)

const ScoreSubjectTraceV3Schema = z
  .object({ id: z.string().openapi({ description: 'The trace ID.' }) })
  .openapi({ title: 'ScoreSubjectTraceV3', required: ['id'] })
  .openapi('ScoreSubjectTraceV3')

const ScoreSubjectObservationV3Schema = z
  .object({
    id: z.string().openapi({ description: 'The observation ID.' }),
    traceId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The parent trace ID, if available.' }),
  })
  .openapi({ title: 'ScoreSubjectObservationV3', required: ['id'] })
  .openapi('ScoreSubjectObservationV3')

const ScoreSubjectSessionV3Schema = z
  .object({ id: z.string().openapi({ description: 'The session ID.' }) })
  .openapi({ title: 'ScoreSubjectSessionV3', required: ['id'] })
  .openapi('ScoreSubjectSessionV3')

const ScoreSubjectExperimentV3Schema = z
  .object({ id: z.string().openapi({ description: 'The dataset run ID (experiment ID).' }) })
  .openapi({ title: 'ScoreSubjectExperimentV3', required: ['id'] })
  .openapi('ScoreSubjectExperimentV3')

const ScoreSubjectV3Schema = z
  .xor([
    z
      .object({ kind: z.literal('trace').exactOptional() })
      .openapi({ required: [] })
      .and(ScoreSubjectTraceV3Schema)
      .openapi({ required: ['kind'], title: 'ScoreSubjectTraceV3' }),
    z
      .object({ kind: z.literal('observation').exactOptional() })
      .openapi({ required: [] })
      .and(ScoreSubjectObservationV3Schema)
      .openapi({ required: ['kind'], title: 'ScoreSubjectObservationV3' }),
    z
      .object({ kind: z.literal('session').exactOptional() })
      .openapi({ required: [] })
      .and(ScoreSubjectSessionV3Schema)
      .openapi({ required: ['kind'], title: 'ScoreSubjectSessionV3' }),
    z
      .object({ kind: z.literal('experiment').exactOptional() })
      .openapi({ required: [] })
      .and(ScoreSubjectExperimentV3Schema)
      .openapi({ required: ['kind'], title: 'ScoreSubjectExperimentV3' }),
  ])
  .openapi({
    title: 'ScoreSubjectV3',
    description:
      'A reference to the entity this score is attached to. Discriminated by "kind" — one of trace, observation, session, or experiment.',
  })
  .openapi('ScoreSubjectV3')

const BaseScoreV3Schema = z
  .object({
    id: z.string(),
    projectId: z.string(),
    name: z.string(),
    source: ScoreSourceSchema,
    timestamp: z.iso.datetime({ offset: true }),
    environment: z
      .string()
      .openapi({ description: 'The environment from which this score originated.' }),
    createdAt: z.iso.datetime({ offset: true }),
    updatedAt: z.iso.datetime({ offset: true }),
    comment: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Optional comment attached to the score. Present when "details" is included in the fields parameter.',
      }),
    configId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The score config ID, if this score was created from a config. Present when "details" is included in the fields parameter.',
      }),
    metadata: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Arbitrary metadata attached to the score. Present when "details" is included in the fields parameter.',
      }),
    authorUserId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The user who created this score, if available. Present when "annotation" is included in the fields parameter.',
      }),
    queueId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The annotation queue this score belongs to, if any. Present when "annotation" is included in the fields parameter.',
      }),
    subject: ScoreSubjectV3Schema.nullable()
      .exactOptional()
      .openapi({
        description:
          'The entity this score is attached to (trace, observation, session, or experiment). Present when "subject" is included in the fields parameter.',
      }),
  })
  .openapi({
    title: 'BaseScoreV3',
    required: [
      'id',
      'projectId',
      'name',
      'source',
      'timestamp',
      'environment',
      'createdAt',
      'updatedAt',
    ],
  })
  .openapi('BaseScoreV3')

const NumericScoreV3Schema = BaseScoreV3Schema.and(
  z
    .object({ value: z.float64().openapi({ description: 'The numeric value of the score.' }) })
    .openapi({ required: ['value'] }),
)
  .openapi({ title: 'NumericScoreV3', required: ['value'] })
  .openapi('NumericScoreV3')

const BooleanScoreV3Schema = BaseScoreV3Schema.and(
  z
    .object({ value: z.boolean().openapi({ description: 'The boolean value of the score.' }) })
    .openapi({ required: ['value'] }),
)
  .openapi({ title: 'BooleanScoreV3', required: ['value'] })
  .openapi('BooleanScoreV3')

const CategoricalScoreV3Schema = BaseScoreV3Schema.and(
  z
    .object({
      value: z.string().openapi({ description: 'The string category value of the score.' }),
    })
    .openapi({ required: ['value'] }),
)
  .openapi({ title: 'CategoricalScoreV3', required: ['value'] })
  .openapi('CategoricalScoreV3')

const TextScoreV3Schema = BaseScoreV3Schema.and(
  z
    .object({ value: z.string().openapi({ description: 'The text content of the score.' }) })
    .openapi({ required: ['value'] }),
)
  .openapi({ title: 'TextScoreV3', required: ['value'] })
  .openapi('TextScoreV3')

const CorrectionScoreV3Schema = BaseScoreV3Schema.and(
  z
    .object({
      value: z
        .string()
        .openapi({ description: 'The correction content of the score. Empty string if not set.' }),
    })
    .openapi({ required: ['value'] }),
)
  .openapi({ title: 'CorrectionScoreV3', required: ['value'] })
  .openapi('CorrectionScoreV3')

type ScoreV3Type =
  | ({ dataType?: 'NUMERIC' } & z.infer<typeof NumericScoreV3Schema>)
  | ({ dataType?: 'BOOLEAN' } & z.infer<typeof BooleanScoreV3Schema>)
  | ({ dataType?: 'CATEGORICAL' } & z.infer<typeof CategoricalScoreV3Schema>)
  | ({ dataType?: 'TEXT' } & z.infer<typeof TextScoreV3Schema>)
  | ({ dataType?: 'CORRECTION' } & z.infer<typeof CorrectionScoreV3Schema>)

const AnnotationQueueStatusSchema = z
  .enum(['PENDING', 'COMPLETED'])
  .openapi({ title: 'AnnotationQueueStatus' })
  .openapi('AnnotationQueueStatus')

const AnnotationQueueObjectTypeSchema = z
  .enum(['TRACE', 'OBSERVATION', 'SESSION'])
  .openapi({ title: 'AnnotationQueueObjectType' })
  .openapi('AnnotationQueueObjectType')

const AnnotationQueueSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    description: z.string().nullable(),
    scoreConfigIds: z.array(z.string()),
    createdAt: z.iso.datetime({ offset: true }),
    updatedAt: z.iso.datetime({ offset: true }),
  })
  .openapi({
    title: 'AnnotationQueue',
    required: ['id', 'name', 'description', 'scoreConfigIds', 'createdAt', 'updatedAt'],
  })
  .openapi('AnnotationQueue')

const AnnotationQueueItemSchema = z
  .object({
    id: z.string(),
    queueId: z.string(),
    objectId: z.string(),
    objectType: AnnotationQueueObjectTypeSchema,
    status: AnnotationQueueStatusSchema,
    completedAt: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    createdAt: z.iso.datetime({ offset: true }),
    updatedAt: z.iso.datetime({ offset: true }),
  })
  .openapi({
    title: 'AnnotationQueueItem',
    required: ['id', 'queueId', 'objectId', 'objectType', 'status', 'createdAt', 'updatedAt'],
  })
  .openapi('AnnotationQueueItem')

const UtilsMetaResponseSchema = z
  .object({
    page: z.int().openapi({ description: 'current page number' }),
    limit: z.int().openapi({ description: 'number of items per page' }),
    totalItems: z
      .int()
      .openapi({
        description: 'number of total items given the current filters/selection (if any)',
      }),
    totalPages: z.int().openapi({ description: 'number of total pages given the current limit' }),
  })
  .openapi({ title: 'utilsMetaResponse', required: ['page', 'limit', 'totalItems', 'totalPages'] })
  .openapi('UtilsMetaResponse')

const PaginatedAnnotationQueuesSchema = z
  .object({ data: z.array(AnnotationQueueSchema), meta: UtilsMetaResponseSchema })
  .openapi({ title: 'PaginatedAnnotationQueues', required: ['data', 'meta'] })
  .openapi('PaginatedAnnotationQueues')

const PaginatedAnnotationQueueItemsSchema = z
  .object({ data: z.array(AnnotationQueueItemSchema), meta: UtilsMetaResponseSchema })
  .openapi({ title: 'PaginatedAnnotationQueueItems', required: ['data', 'meta'] })
  .openapi('PaginatedAnnotationQueueItems')

const CreateAnnotationQueueRequestSchema = z
  .object({
    name: z.string(),
    description: z.string().nullable().exactOptional(),
    scoreConfigIds: z.array(z.string()),
  })
  .openapi({ title: 'CreateAnnotationQueueRequest', required: ['name', 'scoreConfigIds'] })
  .openapi('CreateAnnotationQueueRequest')

const CreateAnnotationQueueItemRequestSchema = z
  .object({
    objectId: z.string(),
    objectType: AnnotationQueueObjectTypeSchema,
    status: AnnotationQueueStatusSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Defaults to PENDING for new queue items' }),
  })
  .openapi({ title: 'CreateAnnotationQueueItemRequest', required: ['objectId', 'objectType'] })
  .openapi('CreateAnnotationQueueItemRequest')

const UpdateAnnotationQueueItemRequestSchema = z
  .object({ status: AnnotationQueueStatusSchema.nullable().exactOptional() })
  .openapi({ title: 'UpdateAnnotationQueueItemRequest', required: [] })
  .openapi('UpdateAnnotationQueueItemRequest')

const DeleteAnnotationQueueItemResponseSchema = z
  .object({ success: z.boolean(), message: z.string() })
  .openapi({ title: 'DeleteAnnotationQueueItemResponse', required: ['success', 'message'] })
  .openapi('DeleteAnnotationQueueItemResponse')

const AnnotationQueueAssignmentRequestSchema = z
  .object({ userId: z.string() })
  .openapi({ title: 'AnnotationQueueAssignmentRequest', required: ['userId'] })
  .openapi('AnnotationQueueAssignmentRequest')

const DeleteAnnotationQueueAssignmentResponseSchema = z
  .object({ success: z.boolean() })
  .openapi({ title: 'DeleteAnnotationQueueAssignmentResponse', required: ['success'] })
  .openapi('DeleteAnnotationQueueAssignmentResponse')

const CreateAnnotationQueueAssignmentResponseSchema = z
  .object({ userId: z.string(), queueId: z.string(), projectId: z.string() })
  .openapi({
    title: 'CreateAnnotationQueueAssignmentResponse',
    required: ['userId', 'queueId', 'projectId'],
  })
  .openapi('CreateAnnotationQueueAssignmentResponse')

const BlobStorageIntegrationTypeSchema = z
  .enum(['S3', 'S3_COMPATIBLE', 'AZURE_BLOB_STORAGE', 'GOOGLE_CLOUD_STORAGE'])
  .openapi({ title: 'BlobStorageIntegrationType' })
  .openapi('BlobStorageIntegrationType')

const BlobStorageIntegrationFileTypeSchema = z
  .enum(['JSON', 'CSV', 'JSONL', 'PARQUET'])
  .openapi({
    title: 'BlobStorageIntegrationFileType',
    description:
      'File format for exported data. `PARQUET` is a columnar binary format encoded and compressed by the storage engine; gzip compression does not apply to it. Note that the model-price columns (`input_price`, `output_price`, `total_price`) are not included in Parquet observation exports.',
  })
  .openapi('BlobStorageIntegrationFileType')

const BlobStorageIntegrationFileTypeResponseSchema = z
  .enum(['JSON', 'CSV', 'JSONL', 'PARQUET'])
  .openapi({
    title: 'BlobStorageIntegrationFileTypeResponse',
    description: 'File type reported for an existing integration.',
  })
  .openapi('BlobStorageIntegrationFileTypeResponse')

const BlobStorageExportModeSchema = z
  .enum(['FULL_HISTORY', 'FROM_TODAY', 'FROM_CUSTOM_DATE'])
  .openapi({ title: 'BlobStorageExportMode' })
  .openapi('BlobStorageExportMode')

const BlobStorageExportFrequencySchema = z
  .enum(['every_20_minutes', 'hourly', 'daily', 'weekly'])
  .openapi({ title: 'BlobStorageExportFrequency' })
  .openapi('BlobStorageExportFrequency')

const BlobStorageExportSourceSchema = z
  .enum([
    'LEGACY_TRACES_OBSERVATIONS',
    'OBSERVATIONS_V2',
    'LEGACY_TRACES_AND_ENRICHED_OBSERVATIONS',
  ])
  .openapi({
    title: 'BlobStorageExportSource',
    description:
      'What data the integration exports.\n- `LEGACY_TRACES_OBSERVATIONS`: traces, observations, and scores tables. Observation columns are controlled by `exportFieldGroups`; field groups without a counterpart in this data model (e.g. `trace_context`) are omitted.\n- `OBSERVATIONS_V2`: same data model as the `/api/public/v2/observations` endpoint, plus scores. Columns are controlled by `exportFieldGroups`.\n- `LEGACY_TRACES_AND_ENRICHED_OBSERVATIONS`: both sets. Observation columns of both portions are controlled by `exportFieldGroups`.\n\n**Note:** which sources a deployment accepts depends on how far it has moved to the v4 data model. `OBSERVATIONS_V2` and the enriched-observations portion of `LEGACY_TRACES_AND_ENRICHED_OBSERVATIONS` read the enriched observations table, so they require a deployment that already populates it. `LEGACY_TRACES_OBSERVATIONS` and the legacy portion of `LEGACY_TRACES_AND_ENRICHED_OBSERVATIONS` read the legacy traces and observations tables, so they require a deployment that still populates those. A deployment part-way through the migration populates both and accepts every source. Selecting a source the deployment cannot serve is rejected with `400`, rather than exporting an empty result. See https://langfuse.com/docs/v4.',
  })
  .openapi('BlobStorageExportSource')

const BlobStorageExportFieldGroupSchema = z
  .enum([
    'core',
    'basic',
    'time',
    'io',
    'metadata',
    'model',
    'usage',
    'prompt',
    'metrics',
    'tools',
    'trace_context',
    'score_metadata',
    'score_provenance',
  ])
  .openapi({
    title: 'BlobStorageExportFieldGroup',
    description:
      'Field group selecting which columns are included in the export. Applies to all export sources.\n- Observation groups (`core` through `trace_context`) select observation columns; groups without a counterpart in the legacy data model (e.g. `trace_context`) are omitted from the legacy observations export.\n- Score groups (`score_` prefix) add optional columns to the scores export. The core score columns (`id`, `timestamp`, `trace_id`, `name`, `value`, …) are always exported and are not a selectable group; score groups add columns on top of them. `score_metadata` adds the score `metadata` column. `score_provenance` adds the references to where a score came from: `author_user_id`, `config_id`, `queue_id`, `evaluator_id`, `evaluation_rule_id`, `execution_trace_id`. Score groups are never selected by default.',
  })
  .openapi('BlobStorageExportFieldGroup')

const CreateBlobStorageIntegrationRequestSchema = z
  .object({
    projectId: z
      .string()
      .openapi({
        description: 'ID of the project in which to configure the blob storage integration',
      }),
    type: BlobStorageIntegrationTypeSchema,
    bucketName: z
      .string()
      .openapi({
        description:
          'Name of the storage bucket. For AZURE_BLOB_STORAGE, must be a valid Azure container name (3-63 chars, lowercase letters, numbers, and hyphens only, must start and end with a letter or number, no consecutive hyphens). For GOOGLE_CLOUD_STORAGE with default credentials, the bucket must be listed in `LANGFUSE_BLOB_STORAGE_GCS_ALLOWED_BUCKETS`.',
      }),
    endpoint: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Custom endpoint URL (required for S3_COMPATIBLE type). Ignored for GOOGLE_CLOUD_STORAGE.',
      }),
    region: z
      .string()
      .openapi({
        description:
          'Storage region used by S3-compatible clients (AWS, GCS, Cloudflare R2, MinIO, Azure location IDs such as eastus, OCI). Leading and trailing whitespace is removed. The remaining value must be 1-63 letters, numbers, or hyphens, and cannot start or end with a hyphen. Examples: us-east-1, europe-west1, eastus, auto. Not used by GOOGLE_CLOUD_STORAGE; pass auto.',
      }),
    accessKeyId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Access key ID for authentication. Not used for GOOGLE_CLOUD_STORAGE.',
      }),
    secretAccessKey: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Secret access key for authentication (will be encrypted when stored). When omitted on update, the stored secret is kept, unless the type changes between GOOGLE_CLOUD_STORAGE and another type.\n\nFor GOOGLE_CLOUD_STORAGE, a GCP service account JSON key. On self-hosted deployments, pass `__GCS_DEFAULT_CREDENTIALS__` instead to use the deployment's Application Default Credentials; the bucket must then be listed in `LANGFUSE_BLOB_STORAGE_GCS_ALLOWED_BUCKETS`. Default credentials are not available on Langfuse Cloud.",
      }),
    prefix: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Path prefix for exported files (must end with forward slash if provided)',
      }),
    exportFrequency: BlobStorageExportFrequencySchema,
    enabled: z.boolean().openapi({ description: 'Whether the integration is active' }),
    forcePathStyle: z.boolean().openapi({ description: 'Use path-style URLs for S3 requests' }),
    fileType: BlobStorageIntegrationFileTypeSchema,
    exportMode: BlobStorageExportModeSchema,
    exportStartDate: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Custom start date for exports (required when exportMode is FROM_CUSTOM_DATE). Must not be in the future (27 h tolerance for timezone differences).',
      }),
    compressed: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Enable gzip compression for exported files (.csv.gz, .json.gz, .jsonl.gz). Defaults to true.',
      }),
    exportSource: BlobStorageExportSourceSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          'Data to export. When omitted on update, the existing value is preserved. When omitted on create, the default is `OBSERVATIONS_V2` on Langfuse Cloud, and on self-hosted deployments `LEGACY_TRACES_OBSERVATIONS` — or `OBSERVATIONS_V2` where the deployment no longer populates the legacy tables. The default is never a source the deployment cannot serve. Required when `exportFieldGroups` is provided.\n\n**Cloud-only project deprecation gate (effective 2026-05-20):** For projects created on or after 2026-05-20 on Langfuse Cloud, `LEGACY_TRACES_OBSERVATIONS` and `LEGACY_TRACES_AND_ENRICHED_OBSERVATIONS` are rejected with HTTP 400. Use `OBSERVATIONS_V2` for all new integrations. Self-hosted deployments are unaffected.\n\n**Cloud-only integration deprecation gate (effective 2026-06-22):** On Langfuse Cloud, legacy export sources are only accepted for blob storage integrations created before 2026-06-22, regardless of project age. Requests that would create a new integration with `LEGACY_TRACES_OBSERVATIONS` or `LEGACY_TRACES_AND_ENRICHED_OBSERVATIONS` are rejected with HTTP 400. Use `OBSERVATIONS_V2` instead. Self-hosted deployments are unaffected.',
      }),
    exportFieldGroups: z
      .array(BlobStorageExportFieldGroupSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Field groups to include in each exported observation and score row. Applies to all export sources; must include the observation `core` group if provided. Core score columns are always exported; score groups add columns on top. When omitted on create, all observation groups are selected and no score groups. When omitted on update, the existing value is preserved.\n\n`exportFieldGroups` requires `exportSource` to be provided in the same request.',
      }),
  })
  .openapi({
    title: 'CreateBlobStorageIntegrationRequest',
    required: [
      'projectId',
      'type',
      'bucketName',
      'region',
      'exportFrequency',
      'enabled',
      'forcePathStyle',
      'fileType',
      'exportMode',
    ],
  })
  .openapi('CreateBlobStorageIntegrationRequest')

const BlobStorageIntegrationResponseSchema = z
  .object({
    id: z.string(),
    projectId: z.string(),
    type: BlobStorageIntegrationTypeSchema,
    bucketName: z.string(),
    endpoint: z.string().nullable(),
    region: z.string(),
    accessKeyId: z.string().nullable(),
    prefix: z.string(),
    exportFrequency: BlobStorageExportFrequencySchema,
    enabled: z.boolean(),
    forcePathStyle: z.boolean(),
    fileType: BlobStorageIntegrationFileTypeResponseSchema,
    exportMode: BlobStorageExportModeSchema,
    exportStartDate: z.iso.datetime({ offset: true }).nullable(),
    compressed: z.boolean(),
    exportSource: BlobStorageExportSourceSchema,
    exportFieldGroups: z
      .array(BlobStorageExportFieldGroupSchema)
      .nullable()
      .openapi({
        description:
          'Field groups included in each exported observation and score row. An empty list is treated as all observation groups and no score groups during export. Core score columns are always exported.',
      }),
    nextSyncAt: z.iso.datetime({ offset: true }).nullable(),
    lastSyncAt: z.iso.datetime({ offset: true }).nullable(),
    lastError: z.string().nullable(),
    lastErrorAt: z.iso.datetime({ offset: true }).nullable(),
    createdAt: z.iso.datetime({ offset: true }),
    updatedAt: z.iso.datetime({ offset: true }),
  })
  .openapi({
    title: 'BlobStorageIntegrationResponse',
    required: [
      'id',
      'projectId',
      'type',
      'bucketName',
      'endpoint',
      'region',
      'accessKeyId',
      'prefix',
      'exportFrequency',
      'enabled',
      'forcePathStyle',
      'fileType',
      'exportMode',
      'exportStartDate',
      'compressed',
      'exportSource',
      'exportFieldGroups',
      'nextSyncAt',
      'lastSyncAt',
      'lastError',
      'lastErrorAt',
      'createdAt',
      'updatedAt',
    ],
  })
  .openapi('BlobStorageIntegrationResponse')

const BlobStorageIntegrationsResponseSchema = z
  .object({ data: z.array(BlobStorageIntegrationResponseSchema) })
  .openapi({ title: 'BlobStorageIntegrationsResponse', required: ['data'] })
  .openapi('BlobStorageIntegrationsResponse')

const BlobStorageSyncStatusSchema = z
  .enum(['idle', 'running', 'queued', 'up_to_date', 'disabled', 'error'])
  .openapi({
    title: 'BlobStorageSyncStatus',
    description:
      'Sync status of the blob storage integration:\n- `disabled` — integration is not enabled\n- `error` — last export failed (see `lastError` for details)\n- `running` — an export job is currently being processed\n- `queued` — next export is overdue (`nextSyncAt` is in the past) and waiting to be picked up by the worker\n- `idle` — enabled but has never exported yet and no export is queued\n- `up_to_date` — all available data has been exported; next export is scheduled for the future\n\n**ETL usage**: poll this endpoint and check for `up_to_date` status. Compare `lastSyncAt` against your\nETL bookmark to determine if new data is available. Note that exports run with a 20-minute lag buffer,\nso `lastSyncAt` will always be at least 20 minutes behind real-time.',
  })
  .openapi('BlobStorageSyncStatus')

const BlobStorageIntegrationStatusResponseSchema = z
  .object({
    id: z.string(),
    projectId: z.string(),
    syncStatus: BlobStorageSyncStatusSchema,
    enabled: z.boolean(),
    lastSyncAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({
        description:
          'End of the last successfully exported time window. Compare against your ETL bookmark to determine if new data is available. Null if the integration has never synced.',
      }),
    nextSyncAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({
        description: 'When the next export is scheduled. Null if no sync has occurred yet.',
      }),
    lastError: z
      .string()
      .nullable()
      .openapi({
        description:
          'Raw error message from the storage provider (S3/Azure/GCS) if the last export failed. Cleared on successful export.',
      }),
    lastErrorAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'When the last error occurred. Cleared on successful export.' }),
  })
  .openapi({
    title: 'BlobStorageIntegrationStatusResponse',
    required: [
      'id',
      'projectId',
      'syncStatus',
      'enabled',
      'lastSyncAt',
      'nextSyncAt',
      'lastError',
      'lastErrorAt',
    ],
  })
  .openapi('BlobStorageIntegrationStatusResponse')

const BlobStorageIntegrationDeletionResponseSchema = z
  .object({ message: z.string() })
  .openapi({ title: 'BlobStorageIntegrationDeletionResponse', required: ['message'] })
  .openapi('BlobStorageIntegrationDeletionResponse')

const CreateCommentRequestSchema = z
  .object({
    projectId: z
      .string()
      .openapi({ description: 'The id of the project to attach the comment to.' }),
    objectType: z
      .string()
      .openapi({
        description:
          'The type of the object to attach the comment to (trace, observation, session, prompt).',
      }),
    objectId: z
      .string()
      .openapi({
        description:
          'The id of the object to attach the comment to. If this does not reference a valid existing object, an error will be thrown.',
      }),
    content: z
      .string()
      .openapi({
        description:
          'The content of the comment. May include markdown. Currently limited to 5000 characters.',
      }),
    authorUserId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The id of the user who created the comment. Must be a member of the organization that owns the project, otherwise an error will be thrown.',
      }),
  })
  .openapi({
    title: 'CreateCommentRequest',
    required: ['projectId', 'objectType', 'objectId', 'content'],
  })
  .openapi('CreateCommentRequest')

const CreateCommentResponseSchema = z
  .object({ id: z.string().openapi({ description: 'The id of the created object in Langfuse' }) })
  .openapi({ title: 'CreateCommentResponse', required: ['id'] })
  .openapi('CreateCommentResponse')

const CommentObjectTypeSchema = z
  .enum(['TRACE', 'OBSERVATION', 'SESSION', 'PROMPT'])
  .openapi({ title: 'CommentObjectType' })
  .openapi('CommentObjectType')

const CommentSchema = z
  .object({
    id: z.string(),
    projectId: z.string(),
    createdAt: z.iso.datetime({ offset: true }),
    updatedAt: z.iso.datetime({ offset: true }),
    objectType: CommentObjectTypeSchema,
    objectId: z.string(),
    content: z.string(),
    authorUserId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The user ID of the comment author' }),
  })
  .openapi({
    title: 'Comment',
    required: ['id', 'projectId', 'createdAt', 'updatedAt', 'objectType', 'objectId', 'content'],
  })
  .openapi('Comment')

const GetCommentsResponseSchema = z
  .object({ data: z.array(CommentSchema), meta: UtilsMetaResponseSchema })
  .openapi({ title: 'GetCommentsResponse', required: ['data', 'meta'] })
  .openapi('GetCommentsResponse')

const DeprecationSchema = z
  .object({
    message: z
      .string()
      .openapi({
        description: 'Human- and agent-readable summary of the deprecation and its replacement.',
      }),
    replacement: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The replacement endpoint, e.g. "GET /api/public/v2/observations". Omitted when the endpoint is being removed without a direct replacement.',
      }),
    docsUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Link to the migration documentation (markdown), when available.' }),
    sunsetAt: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'ISO date after which the endpoint may stop working, when a removal date is committed.',
      }),
  })
  .openapi({
    title: 'Deprecation',
    description:
      'Migration signal returned by deprecated endpoints. Optional fields are omitted when they have no value.',
    required: ['message'],
  })
  .openapi('Deprecation')

const ObservationLevelSchema = z
  .enum(['DEBUG', 'DEFAULT', 'WARNING', 'ERROR'])
  .openapi({ title: 'ObservationLevel' })
  .openapi('ObservationLevel')

const ObservationV2Schema = z
  .object({
    id: z.string().openapi({ description: 'The unique identifier of the observation' }),
    traceId: z
      .string()
      .nullable()
      .openapi({ description: 'The trace ID associated with the observation' }),
    startTime: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The start time of the observation' }),
    endTime: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'The end time of the observation' }),
    projectId: z.string().openapi({ description: 'The project ID this observation belongs to' }),
    parentObservationId: z
      .string()
      .nullable()
      .openapi({
        description:
          'The physical parent observation ID, if present.\nObservations marked as app roots by the SDK may retain a non-null parent ID.',
      }),
    type: z
      .string()
      .openapi({ description: 'The type of the observation (e.g. GENERATION, SPAN, EVENT)' }),
    isRootObservation: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Whether this observation is a logical root.\nThis is true for observations without a physical parent and observations marked as app roots by the SDK.',
      }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The name of the observation' }),
    level: ObservationLevelSchema.nullable()
      .exactOptional()
      .openapi({ description: 'The level of the observation' }),
    statusMessage: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The status message of the observation' }),
    version: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The version of the observation' }),
    environment: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The environment from which this observation originated' }),
    bookmarked: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Whether the observation is bookmarked' }),
    public: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Whether the observation is public' }),
    userId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The user ID associated with the observation' }),
    sessionId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The session ID associated with the observation' }),
    completionStartTime: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The completion start time of the observation' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The creation timestamp of the observation' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The last update timestamp of the observation' }),
    input: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The input data of the observation' }),
    output: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The output data of the observation' }),
    metadata: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'Additional metadata of the observation' }),
    model: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The model name as provided by the user' }),
    internalModelId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The internal model ID matched by Langfuse' }),
    modelParameters: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The parameters of the model used for the observation' }),
    usageDetails: z
      .record(z.string(), z.int())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The usage details of the observation. Key is the usage metric name, value is the number of units consumed.',
      }),
    costDetails: z
      .record(z.string(), z.float64())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The cost details of the observation. Key is the cost metric name, value is the cost in USD.',
      }),
    totalCost: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The total cost of the observation in USD' }),
    usagePricingTierName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: "The name of the pricing tier applied to this observation's usage costs",
      }),
    promptId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The prompt ID associated with the observation' }),
    promptName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The prompt name associated with the observation' }),
    promptVersion: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The prompt version associated with the observation' }),
    latency: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The latency in seconds' }),
    timeToFirstToken: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The time to first token in seconds' }),
    modelId: z
      .string()
      .nullable()
      .openapi({
        description: 'The matched model ID. Null when the `model` field group is not requested.',
      }),
    inputPrice: z
      .string()
      .nullable()
      .openapi({
        description:
          'The input token price (USD per unit) from the matched model, serialized as a decimal string (e.g. "0.0001"). Null when the `model` field group is not requested.',
      }),
    outputPrice: z
      .string()
      .nullable()
      .openapi({
        description:
          'The output token price (USD per unit) from the matched model, serialized as a decimal string (e.g. "0.0001"). Null when the `model` field group is not requested.',
      }),
    totalPrice: z
      .string()
      .nullable()
      .openapi({
        description:
          'The total token price (USD per unit) from the matched model, serialized as a decimal string (e.g. "0.0001"). Null when the `model` field group is not requested.',
      }),
    traceName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The name of the parent trace' }),
    tags: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Tags from the parent trace (denormalized onto the observation)' }),
    release: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The release version of the parent trace' }),
  })
  .openapi({
    title: 'ObservationV2',
    description:
      'An observation from the v2 API with field-group-based selection.\nCore fields are always present. Other fields are included only when their field group is requested.',
    required: [
      'id',
      'traceId',
      'startTime',
      'endTime',
      'projectId',
      'parentObservationId',
      'type',
      'modelId',
      'inputPrice',
      'outputPrice',
      'totalPrice',
    ],
  })
  .openapi('ObservationV2')

const UsageSchema = z
  .object({
    input: z.int().openapi({ description: 'Number of input units (e.g. tokens)' }),
    output: z.int().openapi({ description: 'Number of output units (e.g. tokens)' }),
    total: z.int().openapi({ description: 'Defaults to input+output if not set' }),
    unit: z.string().nullable().openapi({ description: 'Unit of measurement' }),
    inputCost: z.float64().nullable().exactOptional().openapi({ description: 'USD input cost' }),
    outputCost: z.float64().nullable().exactOptional().openapi({ description: 'USD output cost' }),
    totalCost: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: 'USD total cost, defaults to input+output' }),
  })
  .openapi({
    title: 'Usage',
    description:
      '(Deprecated. Use usageDetails and costDetails instead.) Standard interface for usage and cost',
    required: ['input', 'output', 'total', 'unit'],
  })
  .openapi('Usage')

const ScoreConfigDataTypeSchema = z
  .enum(['NUMERIC', 'BOOLEAN', 'CATEGORICAL', 'TEXT'])
  .openapi({ title: 'ScoreConfigDataType' })
  .openapi('ScoreConfigDataType')

const ConfigCategorySchema = z
  .object({ value: z.float64(), label: z.string() })
  .openapi({ title: 'ConfigCategory', required: ['value', 'label'] })
  .openapi('ConfigCategory')

const ScoreConfigSchema = z
  .object({
    id: z.string(),
    name: z.string().openapi({ description: 'Score config name. Maximum 80 characters.' }),
    createdAt: z.iso.datetime({ offset: true }),
    updatedAt: z.iso.datetime({ offset: true }),
    projectId: z.string(),
    dataType: ScoreConfigDataTypeSchema,
    isArchived: z
      .boolean()
      .openapi({ description: 'Whether the score config is archived. Defaults to false' }),
    minValue: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Sets minimum value for numerical scores. If not set, the minimum value defaults to -∞',
      }),
    maxValue: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Sets maximum value for numerical scores. If not set, the maximum value defaults to +∞',
      }),
    categories: z
      .array(ConfigCategorySchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Configures custom categories for categorical scores' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Description of the score config' }),
  })
  .openapi({
    title: 'ScoreConfig',
    description: 'Configuration for a score',
    required: ['id', 'name', 'createdAt', 'updatedAt', 'projectId', 'dataType', 'isArchived'],
  })
  .openapi('ScoreConfig')

const ScoreSchema: z.ZodType<ScoreType> = z
  .lazy(() =>
    z
      .xor([
        z
          .object({ dataType: z.literal('NUMERIC').exactOptional() })
          .openapi({ required: [] })
          .and(NumericScoreSchema)
          .openapi({ required: ['dataType'], title: 'NumericScore' }),
        z
          .object({ dataType: z.literal('CATEGORICAL').exactOptional() })
          .openapi({ required: [] })
          .and(CategoricalScoreSchema)
          .openapi({ required: ['dataType'], title: 'CategoricalScore' }),
        z
          .object({ dataType: z.literal('BOOLEAN').exactOptional() })
          .openapi({ required: [] })
          .and(BooleanScoreSchema)
          .openapi({ required: ['dataType'], title: 'BooleanScore' }),
        z
          .object({ dataType: z.literal('CORRECTION').exactOptional() })
          .openapi({ required: [] })
          .and(CorrectionScoreSchema)
          .openapi({ required: ['dataType'], title: 'CorrectionScore' }),
        z
          .object({ dataType: z.literal('TEXT').exactOptional() })
          .openapi({ required: [] })
          .and(TextScoreSchema)
          .openapi({ required: ['dataType'], title: 'TextScore' }),
      ])
      .openapi({ title: 'Score' }),
  )
  .openapi('Score')

const CreateScoreValueSchema = z
  .xor([z.float64().openapi({ title: 'DoubleNumber' }), z.string().openapi({ title: 'String' })])
  .openapi({
    title: 'CreateScoreValue',
    description:
      'The value of the score. Must be passed as string for categorical and text scores, and numeric for boolean and numeric scores',
  })
  .openapi('CreateScoreValue')

const DatasetSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    description: z.string().nullable().openapi({ description: 'Description of the dataset' }),
    metadata: z.any().openapi({ description: 'Metadata associated with the dataset' }),
    inputSchema: z
      .looseObject({})
      .nullable()
      .openapi({ description: 'JSON Schema for validating dataset item inputs' }),
    expectedOutputSchema: z
      .looseObject({})
      .nullable()
      .openapi({ description: 'JSON Schema for validating dataset item expected outputs' }),
    projectId: z.string(),
    createdAt: z.iso.datetime({ offset: true }),
    updatedAt: z.iso.datetime({ offset: true }),
  })
  .openapi({
    title: 'Dataset',
    required: [
      'id',
      'name',
      'description',
      'metadata',
      'inputSchema',
      'expectedOutputSchema',
      'projectId',
      'createdAt',
      'updatedAt',
    ],
  })
  .openapi('Dataset')

const DatasetStatusSchema = z
  .enum(['ACTIVE', 'ARCHIVED'])
  .openapi({ title: 'DatasetStatus' })
  .openapi('DatasetStatus')

const DatasetItemMediaReferenceFieldSchema = z
  .enum(['input', 'expectedOutput', 'metadata'])
  .openapi({ title: 'DatasetItemMediaReferenceField' })
  .openapi('DatasetItemMediaReferenceField')

const DatasetItemMediaReferenceMediaSchema = z
  .object({
    mediaId: z
      .string()
      .openapi({ description: 'The unique langfuse identifier of the media record' }),
    contentType: z.string().openapi({ description: 'The MIME type of the media record' }),
    contentLength: z.int().openapi({ description: 'The size of the media record in bytes' }),
    url: z.string().openapi({ description: 'The signed download URL of the media record' }),
    urlExpiry: z.string().openapi({ description: 'The expiry date and time of the download URL' }),
  })
  .openapi({
    title: 'DatasetItemMediaReferenceMedia',
    required: ['mediaId', 'contentType', 'contentLength', 'url', 'urlExpiry'],
  })
  .openapi('DatasetItemMediaReferenceMedia')

const DatasetItemMediaReferenceSchema = z
  .object({
    field: DatasetItemMediaReferenceFieldSchema.openapi({
      description: 'The dataset item field containing the reference',
    }),
    referenceString: z
      .string()
      .openapi({
        description:
          'The Langfuse media reference string, e.g. `@@@langfuseMedia:type=image/png|id=...|source=bytes@@@`',
      }),
    jsonPath: z
      .string()
      .openapi({
        description:
          "JSONPath of the string holding the reference within the field, e.g. `$['image']`",
      }),
    media: DatasetItemMediaReferenceMediaSchema.openapi({
      description: 'The resolved media record.',
    }),
  })
  .openapi({
    title: 'DatasetItemMediaReference',
    required: ['field', 'referenceString', 'jsonPath', 'media'],
  })
  .openapi('DatasetItemMediaReference')

const DatasetItemSchema = z
  .object({
    id: z.string(),
    status: DatasetStatusSchema,
    input: z.any().openapi({ description: 'Input data for the dataset item' }),
    expectedOutput: z.any().openapi({ description: 'Expected output for the dataset item' }),
    metadata: z.any().openapi({ description: 'Metadata associated with the dataset item' }),
    sourceTraceId: z
      .string()
      .nullable()
      .openapi({ description: 'The trace ID that sourced this dataset item' }),
    sourceObservationId: z
      .string()
      .nullable()
      .openapi({ description: 'The observation ID that sourced this dataset item' }),
    datasetId: z.string(),
    datasetName: z.string(),
    createdAt: z.iso.datetime({ offset: true }),
    updatedAt: z.iso.datetime({ offset: true }),
    version: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "When this version of the dataset item became current. Listing dataset items with a `version` at or after this timestamp returns this item version, until the item is changed again. Self-hosted deployments that set `LANGFUSE_DATASET_SERVICE_WRITE_TO_VERSIONED_IMPLEMENTATION=false` update items in place, so there it stays at the item's first write.",
      }),
    mediaReferences: z
      .array(DatasetItemMediaReferenceSchema)
      .openapi({
        description:
          'Resolved Langfuse media references found in input, expectedOutput, and metadata.',
      }),
  })
  .openapi({
    title: 'DatasetItem',
    required: [
      'id',
      'status',
      'input',
      'expectedOutput',
      'metadata',
      'sourceTraceId',
      'sourceObservationId',
      'datasetId',
      'datasetName',
      'createdAt',
      'updatedAt',
      'mediaReferences',
    ],
  })
  .openapi('DatasetItem')

const ModelUsageUnitSchema = z
  .enum(['CHARACTERS', 'TOKENS', 'MILLISECONDS', 'SECONDS', 'IMAGES', 'REQUESTS'])
  .openapi({ title: 'ModelUsageUnit', description: 'Unit of usage in Langfuse' })
  .openapi('ModelUsageUnit')

const ModelPriceSchema = z
  .object({ price: z.float64() })
  .openapi({ title: 'ModelPrice', required: ['price'] })
  .openapi('ModelPrice')

const PricingTierOperatorSchema = z
  .enum(['gt', 'gte', 'lt', 'lte', 'eq', 'neq'])
  .openapi({
    title: 'PricingTierOperator',
    description: 'Comparison operators for pricing tier conditions',
  })
  .openapi('PricingTierOperator')

const PricingTierUsageConditionSchema = z
  .object({
    usageDetailPattern: z
      .string()
      .openapi({ description: 'Regex pattern matched against usage detail keys.' }),
    operator: PricingTierOperatorSchema,
    value: z
      .float64()
      .openapi({ description: 'Numeric threshold for the summed matching usage values.' }),
    caseSensitive: z
      .boolean()
      .openapi({ description: 'Whether the usage-detail regex is case-sensitive.' }),
  })
  .openapi({
    title: 'PricingTierUsageCondition',
    description: 'Condition that sums usage details whose keys match a regex.',
    required: ['usageDetailPattern', 'operator', 'value', 'caseSensitive'],
  })
  .openapi('PricingTierUsageCondition')

const PricingTierAttributeSourceSchema = z
  .enum(['model_parameters', 'metadata'])
  .openapi({ title: 'PricingTierAttributeSource' })
  .openapi('PricingTierAttributeSource')

const PricingTierAttributeConditionSchema = z
  .object({
    source: PricingTierAttributeSourceSchema.openapi({
      description: 'Observation attribute object evaluated by this condition.',
    }),
    key: z.string().openapi({ description: 'Exact top-level attribute key.' }),
    operator: z.literal('in').openapi({ description: 'Membership operator.' }),
    values: z
      .array(z.string())
      .openapi({
        description: 'Accepted string attribute values. At least one value is required.',
      }),
  })
  .openapi({
    title: 'PricingTierAttributeCondition',
    description:
      'Condition that matches any configured value for a top-level observation attribute.',
    required: ['source', 'key', 'operator', 'values'],
  })
  .openapi('PricingTierAttributeCondition')

const PricingTierConditionSchema = z
  .xor([PricingTierUsageConditionSchema, PricingTierAttributeConditionSchema])
  .openapi({
    title: 'PricingTierCondition',
    description:
      'Condition for matching a pricing tier against usage details or observation attributes.\n\nUsage-detail conditions treat usageDetailPattern as a regex, sum all matching usage values, and compare the sum to the numeric value. Model-parameter and metadata conditions match an exact top-level key against one or more string values.',
  })
  .openapi('PricingTierCondition')

const PricingTierSchema = z
  .object({
    id: z.string().openapi({ description: 'Unique identifier for the pricing tier' }),
    name: z
      .string()
      .openapi({
        description:
          'Name of the pricing tier for display and identification purposes.\n\nExamples: "Standard", "High Volume Tier", "Large Context", "Extended Context Tier"',
      }),
    isDefault: z
      .boolean()
      .openapi({
        description:
          'Whether this is the default tier. Every model must have exactly one default tier with priority 0 and no conditions.\n\nThe default tier serves as a fallback when no conditional tiers match, ensuring cost calculation always succeeds.\nIt typically represents the base pricing for standard usage patterns.',
      }),
    priority: z
      .int()
      .openapi({
        description:
          'Priority for tier matching evaluation. Lower numbers = higher priority (evaluated first).\n\nThe default tier must always have priority 0. Conditional tiers should have priority 1, 2, 3, etc.\n\nExample ordering:\n- Priority 0: Default tier (no conditions, always matches as fallback)\n- Priority 1: High usage tier (e.g., >200K tokens)\n- Priority 2: Medium usage tier (e.g., >100K tokens)\n\nThis ensures more specific conditions are checked before general ones.',
      }),
    conditions: z
      .array(PricingTierConditionSchema)
      .openapi({
        description:
          'Array of conditions that must ALL be met for this tier to match (AND logic).\n\nThe default tier must have an empty conditions array. Conditional tiers should have one or more conditions\nthat define when this tier\'s pricing applies.\n\nMultiple conditions enable complex matching scenarios (e.g., "high input tokens AND low output tokens").',
      }),
    prices: z
      .record(z.string(), z.float64())
      .openapi({
        description:
          'Prices (USD) by usage type for this tier.\n\nCommon usage types: "input", "output", "total", "request", "image"\nPrices are specified in USD per unit (e.g., per token, per request, per second).\n\nExample: {"input": 0.000003, "output": 0.000015} means $3 per million input tokens and $15 per million output tokens.',
      }),
  })
  .openapi({
    title: 'PricingTier',
    description:
      'Pricing tier definition with conditional pricing based on usage thresholds or observation attributes.\n\nPricing tiers enable accurate cost tracking for LLM providers that charge different rates based on usage patterns or request attributes.\nFor example, some providers charge higher rates when context size exceeds certain thresholds or when an accelerated service tier is selected.\n\nHow tier matching works:\n1. Tiers are evaluated in ascending priority order (priority 1 before priority 2, etc.)\n2. The first tier where ALL conditions match is selected\n3. If no conditional tiers match, the default tier is used as a fallback\n4. The default tier has priority 0 and no conditions\n\nWhy priorities matter:\n- Lower priority numbers are evaluated first, allowing you to define specific cases before general ones\n- Example: Priority 1 for "high usage" (>200K tokens), Priority 2 for "medium usage" (>100K tokens), Priority 0 for default\n- Without proper ordering, a less specific condition might match before a more specific one\n\nEvery model must have exactly one default tier to ensure cost calculation always succeeds.',
    required: ['id', 'name', 'isDefault', 'priority', 'conditions', 'prices'],
  })
  .openapi('PricingTier')

const ModelSchema = z
  .object({
    id: z.string(),
    modelName: z
      .string()
      .openapi({
        description:
          'Name of the model definition. If multiple with the same name exist, they are applied in the following order: (1) custom over built-in, (2) newest according to startTime where model.startTime<observation.startTime',
      }),
    matchPattern: z
      .string()
      .openapi({
        description:
          'Regex pattern which matches this model definition to generation.model. Useful in case of fine-tuned models. If you want to exact match, use `(?i)^modelname$`',
      }),
    startDate: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Apply only to generations which are newer than this ISO date.' }),
    unit: ModelUsageUnitSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Unit used by this model.' }),
    inputPrice: z
      .float64()
      .nullable()
      .openapi({ description: "Deprecated. See 'prices' instead. Price (USD) per input unit" }),
    outputPrice: z
      .float64()
      .nullable()
      .openapi({ description: "Deprecated. See 'prices' instead. Price (USD) per output unit" }),
    totalPrice: z
      .float64()
      .nullable()
      .openapi({
        description:
          "Deprecated. See 'prices' instead. Price (USD) per total unit. Cannot be set if input or output price is set.",
      }),
    tokenizerId: z
      .string()
      .nullable()
      .openapi({
        description:
          'Optional. Tokenizer to be applied to observations which match to this model. See docs for more details.',
      }),
    tokenizerConfig: z
      .any()
      .openapi({
        description:
          'Optional. Configuration for the selected tokenizer. Needs to be JSON. See docs for more details.',
      }),
    isLangfuseManaged: z.boolean(),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp when the model was created' }),
    prices: z
      .record(z.string(), ModelPriceSchema)
      .openapi({
        description:
          "Deprecated. Use 'pricingTiers' instead for models with usage-based pricing variations.\n\nThis field shows prices by usage type from the default pricing tier. Maintained for backward compatibility.\nIf the model uses tiered pricing, this field will be populated from the default tier's prices.",
      }),
    pricingTiers: z
      .array(PricingTierSchema)
      .openapi({
        description:
          'Array of pricing tiers with conditional pricing based on usage thresholds or observation attributes.\n\nPricing tiers enable accurate cost tracking for models that charge different rates based on usage patterns\nor request attributes (e.g., high-volume usage, large context windows, cached tokens, or service tiers).\n\nEach model must have exactly one default tier (isDefault=true, priority=0) that serves as a fallback.\nAdditional conditional tiers can be defined with specific matching criteria.\n\nIf this array is empty, the model uses legacy flat pricing from the inputPrice/outputPrice/totalPrice fields.',
      }),
  })
  .openapi({
    title: 'Model',
    description:
      'Model definition used for transforming usage into USD cost and/or tokenization.\n\nModels can have either simple flat pricing or tiered pricing:\n- Flat pricing: Single price per usage type (legacy, but still supported)\n- Tiered pricing: Multiple pricing tiers with conditional matching based on usage patterns or observation attributes\n\nThe pricing tiers approach is recommended for models with usage-based pricing variations.\nWhen using tiered pricing, the flat price fields (inputPrice, outputPrice, prices) are populated\nfrom the default tier for backward compatibility.',
    required: [
      'id',
      'modelName',
      'matchPattern',
      'startDate',
      'inputPrice',
      'outputPrice',
      'totalPrice',
      'tokenizerId',
      'tokenizerConfig',
      'isLangfuseManaged',
      'createdAt',
      'prices',
      'pricingTiers',
    ],
  })
  .openapi('Model')

const PricingTierUsageConditionInputSchema = z
  .object({
    usageDetailPattern: z
      .string()
      .openapi({ description: 'Regex pattern matched against usage detail keys.' }),
    operator: PricingTierOperatorSchema,
    value: z
      .float64()
      .openapi({ description: 'Numeric threshold for the summed matching usage values.' }),
    caseSensitive: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Whether the usage-detail regex is case-sensitive. Defaults to false.',
      }),
  })
  .openapi({
    title: 'PricingTierUsageConditionInput',
    description: 'Input condition that sums usage details whose keys match a regex.',
    required: ['usageDetailPattern', 'operator', 'value'],
  })
  .openapi('PricingTierUsageConditionInput')

const PricingTierConditionInputSchema = z
  .xor([PricingTierUsageConditionInputSchema, PricingTierAttributeConditionSchema])
  .openapi({
    title: 'PricingTierConditionInput',
    description: 'Condition input for matching a pricing tier.',
  })
  .openapi('PricingTierConditionInput')

const PricingTierInputSchema = z
  .object({
    name: z
      .string()
      .openapi({
        description:
          'Name of the pricing tier for display and identification purposes.\n\nMust be unique within the model. Common patterns: "Standard", "High Volume Tier", "Extended Context"',
      }),
    isDefault: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Whether this is the default tier. Exactly one tier per model must be marked as default.\n\nRequirements for default tier:\n- Must have isDefault=true\n- Must have priority=0\n- Must have empty conditions array (conditions=[])\n\nThe default tier acts as a fallback when no conditional tiers match. Defaults to false when omitted.',
      }),
    priority: z
      .int()
      .openapi({
        description:
          'Priority for tier matching evaluation. Lower numbers = higher priority (evaluated first).\n\nMust be unique within the model. The default tier must have priority=0.\nConditional tiers should use priority 1, 2, 3, etc. based on their specificity.',
      }),
    conditions: z
      .array(PricingTierConditionInputSchema)
      .openapi({
        description:
          "Array of conditions that must ALL be met for this tier to match (AND logic).\n\nThe default tier must have an empty array (conditions=[]).\nConditional tiers should define one or more conditions that specify when this tier's pricing applies.\n\nConditions can compare summed matching usage details to a numeric threshold, or exactly match a top-level model parameter or metadata value.",
      }),
    prices: z
      .record(z.string(), z.float64())
      .openapi({
        description:
          'Prices (USD) by usage type for this tier. At least one price must be defined.\n\nCommon usage types: "input", "output", "total", "request", "image"\nPrices are in USD per unit (e.g., per token).\n\nExample: {"input": 0.000003, "output": 0.000015} represents $3 per million input tokens and $15 per million output tokens.',
      }),
  })
  .openapi({
    title: 'PricingTierInput',
    description:
      "Input schema for creating a pricing tier. The tier ID will be automatically generated server-side.\n\nWhen creating a model with pricing tiers:\n- Exactly one tier must have isDefault=true (the fallback tier)\n- The default tier must have priority=0 and conditions=[]\n- All tier names and priorities must be unique within the model\n- Each tier must define at least one price\n\nSee PricingTier for detailed information about how tiers work and why they're useful.",
    required: ['name', 'priority', 'conditions', 'prices'],
  })
  .openapi('PricingTierInput')

const MapValueSchema = z
  .xor([
    z.string().nullable().openapi({ title: 'String' }),
    z.int().nullable().openapi({ title: 'Integer' }),
    z.float32().nullable().openapi({ title: 'FloatNumber' }),
    z.boolean().nullable().openapi({ title: 'Boolean' }),
    z.array(z.string()).nullable().openapi({ title: 'Array' }),
  ])
  .openapi({ title: 'MapValue' })
  .openapi('MapValue')

const ScoreDataTypeSchema = z
  .enum(['NUMERIC', 'BOOLEAN', 'CATEGORICAL', 'CORRECTION', 'TEXT'])
  .openapi({ title: 'ScoreDataType' })
  .openapi('ScoreDataType')

const OpenAIUsageSchema = z
  .object({
    promptTokens: z.int().nullable().exactOptional(),
    completionTokens: z.int().nullable().exactOptional(),
    totalTokens: z.int().nullable().exactOptional(),
  })
  .openapi({
    title: 'OpenAIUsage',
    description: 'Usage interface of OpenAI for improved compatibility.',
    required: [],
  })
  .openapi('OpenAIUsage')

const DeleteDatasetItemResponseSchema = z
  .object({ message: z.string().openapi({ description: 'Success message after deletion' }) })
  .openapi({ title: 'DeleteDatasetItemResponse', required: ['message'] })
  .openapi('DeleteDatasetItemResponse')

const CreateDatasetItemRequestSchema = z
  .object({
    datasetName: z.string(),
    input: z.any().nullable().exactOptional(),
    expectedOutput: z.any().nullable().exactOptional(),
    metadata: z.any().nullable().exactOptional(),
    sourceTraceId: z.string().nullable().exactOptional(),
    sourceObservationId: z.string().nullable().exactOptional(),
    id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Dataset items are upserted on their id. Id needs to be unique (project-level), cannot be reused across datasets, and must be at most 255 characters.',
      }),
    status: DatasetStatusSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Defaults to ACTIVE for newly created items' }),
  })
  .openapi({ title: 'CreateDatasetItemRequest', required: ['datasetName'] })
  .openapi('CreateDatasetItemRequest')

const PaginatedDatasetItemsSchema = z
  .object({ data: z.array(DatasetItemSchema), meta: UtilsMetaResponseSchema })
  .openapi({ title: 'PaginatedDatasetItems', required: ['data', 'meta'] })
  .openapi('PaginatedDatasetItems')

const PaginatedDatasetsSchema = z
  .object({ data: z.array(DatasetSchema), meta: UtilsMetaResponseSchema })
  .openapi({ title: 'PaginatedDatasets', required: ['data', 'meta'] })
  .openapi('PaginatedDatasets')

const CreateDatasetRequestSchema = z
  .object({
    name: z.string(),
    description: z.string().nullable().exactOptional(),
    metadata: z.any().nullable().exactOptional(),
    inputSchema: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'JSON Schema for validating dataset item inputs. When set, all new and existing dataset items will be validated against this schema.',
      }),
    expectedOutputSchema: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'JSON Schema for validating dataset item expected outputs. When set, all new and existing dataset items will be validated against this schema.',
      }),
  })
  .openapi({ title: 'CreateDatasetRequest', required: ['name'] })
  .openapi('CreateDatasetRequest')

const EvaluatorTypeSchema = z
  .enum(['llm_as_judge', 'code'])
  .openapi({
    title: 'EvaluatorType',
    description:
      'The evaluator type.\n\nThe public API supports LLM-as-a-judge and code evaluators.',
  })
  .openapi('EvaluatorType')

const PromptVariableMappingSourceSchema = z
  .enum([
    'input',
    'output',
    'metadata',
    'tool_calls',
    'expected_output',
    'experiment_item_metadata',
  ])
  .openapi({
    title: 'PromptVariableMappingSource',
    description:
      "Source field used to populate a prompt variable.\n\nUse these values when mapping evaluator prompt variables to live data.\n\nSource semantics:\n- `input`: the observation input payload\n- `output`: the observation output payload\n- `metadata`: the observation metadata object. Combine with `jsonPath` when you need one nested field instead of the whole object.\n- `tool_calls`: the tool calls recorded on the observation, as an array of `{id, name, arguments, type, index}` objects in the order the model emitted them. Combine with `jsonPath` (for example `$[*].name`) to select parts of each call.\n- `expected_output`: the experiment item's expected output when the observation belongs to an experiment.\n- `experiment_item_metadata`: the experiment item's metadata when the observation belongs to an experiment.",
  })
  .openapi('PromptVariableMappingSource')

const EvaluatorOutputScoreTypeSchema = z
  .enum(['NUMERIC', 'BOOLEAN', 'CATEGORICAL'])
  .openapi({
    title: 'EvaluatorOutputScoreType',
    description:
      'Structured score type returned by an evaluator.\n\nThis controls the type of score value Langfuse stores for evaluation results:\n- `NUMERIC`: a numeric score such as `0.82`\n- `BOOLEAN`: a boolean score such as `true`\n- `CATEGORICAL`: one or more category labels from a fixed list',
  })
  .openapi('EvaluatorOutputScoreType')

const EvaluatorOutputDefinitionSchema = z
  .xor([
    z
      .object({ dataType: z.literal('NUMERIC').exactOptional() })
      .openapi({ required: [] })
      .and(PublicEvaluatorNumericScoreSchema)
      .openapi({ required: ['dataType'], title: 'PublicEvaluatorNumericScore' }),
    z
      .object({ dataType: z.literal('BOOLEAN').exactOptional() })
      .openapi({ required: [] })
      .and(PublicEvaluatorBooleanScoreSchema)
      .openapi({ required: ['dataType'], title: 'PublicEvaluatorBooleanScore' }),
    z
      .object({ dataType: z.literal('CATEGORICAL').exactOptional() })
      .openapi({ required: [] })
      .and(PublicEvaluatorCategoricalScoreSchema)
      .openapi({ required: ['dataType'], title: 'PublicEvaluatorCategoricalScore' }),
  ])
  .openapi({
    title: 'EvaluatorOutputDefinition',
    description:
      'Flat structured output definition used when creating or updating an evaluator.\n\n- `dataType` is required.\n- `scoreReasoningInstructions` and `scoreValueInstructions` are optional instructions.\n- `minValue` and `maxValue` apply only to `NUMERIC` outputs. If both are set, `minValue` must not exceed `maxValue`.\n- `categories` and `shouldAllowMultipleMatches` apply only to `CATEGORICAL` outputs.\n- Do not send `version`; that is an internal storage detail.',
  })
  .openapi('EvaluatorOutputDefinition')

const PromptVariableMappingInputSchema = z
  .object({
    variable: z
      .string()
      .openapi({
        description:
          'Prompt variable name without braces.\n\nExample: for the prompt `Judge {{input}} against {{output}}`, use `input` and `output`.',
      }),
    source: PromptVariableMappingSourceSchema.openapi({
      description:
        'Source field that should populate the prompt variable.\n\nAvailable sources are `input`, `output`, `metadata`, `tool_calls`, `expected_output`, and `experiment_item_metadata`.',
    }),
    jsonPath: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Optional JSONPath selector applied to the selected source before it is passed to the evaluator prompt.\n\nRequirements:\n- Must start with `$`\n- Must be a syntactically valid JSONPath expression\n- Most useful with `source=metadata`',
      }),
  })
  .openapi({
    title: 'PromptVariableMappingInput',
    description:
      'Connects one prompt variable to data from an observation or experiment.\n\nManual mappings are used for `llm_as_judge` evaluators. `code` evaluators use a fixed runtime mapping managed by Langfuse.\n\nHow to build a valid mapping list:\n1. Create the evaluator or fetch it with `GET /evaluators/{id}`.\n2. Read the evaluator `variables` array.\n3. Add exactly one mapping object for each variable in that array.\n4. Use the variable name exactly as returned, without braces such as `{{` or `}}`.\n5. Choose the source field that should populate the variable.\n\n`jsonPath` is optional. Use it only when the selected source is a JSON object and you want to extract one nested field before inserting it into the evaluator prompt.\n\nInvalid, missing, or duplicate mappings return a validation error. Malformed JSONPath expressions are also rejected.',
    required: ['variable', 'source'],
  })
  .openapi('PromptVariableMappingInput')

const EvaluationRuleFilterSchema: z.ZodType<EvaluationRuleFilterType> = z
  .lazy(() =>
    z
      .xor([
        z
          .object({ type: z.literal('datetime').exactOptional() })
          .openapi({ required: [] })
          .and(DateTimeEvaluationRuleFilterSchema)
          .openapi({ required: ['type'], title: 'DateTimeEvaluationRuleFilter' }),
        z
          .object({ type: z.literal('string').exactOptional() })
          .openapi({ required: [] })
          .and(StringEvaluationRuleFilterSchema)
          .openapi({ required: ['type'], title: 'StringEvaluationRuleFilter' }),
        z
          .object({ type: z.literal('number').exactOptional() })
          .openapi({ required: [] })
          .and(NumberEvaluationRuleFilterSchema)
          .openapi({ required: ['type'], title: 'NumberEvaluationRuleFilter' }),
        z
          .object({ type: z.literal('stringOptions').exactOptional() })
          .openapi({ required: [] })
          .and(StringOptionsEvaluationRuleFilterSchema)
          .openapi({ required: ['type'], title: 'StringOptionsEvaluationRuleFilter' }),
        z
          .object({ type: z.literal('categoryOptions').exactOptional() })
          .openapi({ required: [] })
          .and(CategoryOptionsEvaluationRuleFilterSchema)
          .openapi({ required: ['type'], title: 'CategoryOptionsEvaluationRuleFilter' }),
        z
          .object({ type: z.literal('arrayOptions').exactOptional() })
          .openapi({ required: [] })
          .and(ArrayOptionsEvaluationRuleFilterSchema)
          .openapi({ required: ['type'], title: 'ArrayOptionsEvaluationRuleFilter' }),
        z
          .object({ type: z.literal('stringObject').exactOptional() })
          .openapi({ required: [] })
          .and(StringObjectEvaluationRuleFilterSchema)
          .openapi({ required: ['type'], title: 'StringObjectEvaluationRuleFilter' }),
        z
          .object({ type: z.literal('numberObject').exactOptional() })
          .openapi({ required: [] })
          .and(NumberObjectEvaluationRuleFilterSchema)
          .openapi({ required: ['type'], title: 'NumberObjectEvaluationRuleFilter' }),
        z
          .object({ type: z.literal('boolean').exactOptional() })
          .openapi({ required: [] })
          .and(BooleanEvaluationRuleFilterSchema)
          .openapi({ required: ['type'], title: 'BooleanEvaluationRuleFilter' }),
        z
          .object({ type: z.literal('null').exactOptional() })
          .openapi({ required: [] })
          .and(NullEvaluationRuleFilterSchema)
          .openapi({ required: ['type'], title: 'NullEvaluationRuleFilter' }),
      ])
      .openapi({
        title: 'EvaluationRuleFilter',
        description:
          'One filter condition used to decide whether a live-ingested observation should be evaluated.\n\nAll filters must be satisfied for the rule to run. Experiment scope is expressed with filters rather than a separate target field:\n- `isExperimentItemRootSpan = true` limits execution to experiment item roots.\n- `datasetId` limits execution to experiments for the selected datasets. Use dataset IDs from `GET /api/public/v2/datasets`.\n\nPick the filter `type` first, as it determines the required fields and value shape. Use `key` only for object filters such as `metadata`.\n\nOperator quick reference by filter `type`:\n- `string`: `"="`, `contains`, `does not contain`, `starts with`, `ends with`\n- `number`: `"="`, `">"`, `"<"`, `">="`, `"<="`\n- `datetime`: `"="`, `">"`, `"<"`, `">="`, `"<="`\n- `stringOptions`: `any of`, `none of`\n- `arrayOptions`: `any of`, `none of`, `all of`\n- `stringObject`: `"="`, `contains`, `does not contain`, `starts with`, `ends with`, `is set`, `is not set` (use `is set` / `is not set` for key presence; an empty value for `contains`, `starts with`, or `ends with` is treated as `is set`)\n- `boolean`: `"="`, `"<>"`\n- `null`: `is null`, `is not null`\n\nSupported columns. Each column accepts exactly one filter `type`; sending a column with a different `type` is rejected with `400`.\n- `type`: `stringOptions`, values `SPAN`, `EVENT`, `GENERATION`, `AGENT`, `TOOL`, `CHAIN`, `RETRIEVER`, `EVALUATOR`, `EMBEDDING`, `GUARDRAIL`\n- `name`: `stringOptions`\n- `environment`: `stringOptions`\n- `level`: `stringOptions`, values `DEBUG`, `DEFAULT`, `WARNING`, `ERROR`\n- `version`: `string`\n- `traceName`: `stringOptions`\n- `userId`: `string`\n- `sessionId`: `string`\n- `tags`: `arrayOptions`\n- `metadata`: `stringObject`, requires `key`\n- `isRootObservation`: `boolean`; true when the observation has no parent or is explicitly marked as an application root\n- `parentObservationId`: `null`\n- `experimentId`: `stringOptions`\n- `isExperimentItemRootSpan`: `boolean`\n- `calledToolNames`: `arrayOptions`\n- `toolCalls`: `number`, the number of tool calls on the observation\n- `datasetId`: `stringOptions`. Use dataset `id` values from `GET /api/public/v2/datasets`, not dataset names.',
      }),
  )
  .openapi('EvaluationRuleFilter')

const EvaluationRuleReadFilterBaseSchema = z
  .object({
    type: z
      .string()
      .openapi({
        description:
          'Stored filter type. This is not broken down into separate public response types.',
      }),
    column: z.string(),
    operator: z.string(),
    value: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Stored filter value. Its shape depends on the filter type.' }),
  })
  .openapi({
    title: 'EvaluationRuleReadFilterBase',
    description: 'Stored filter returned verbatim by evaluation-rule read endpoints.',
    required: ['type', 'column', 'operator'],
  })
  .openapi('EvaluationRuleReadFilterBase')

const EvaluationRuleReadFilterWithKeySchema = EvaluationRuleReadFilterBaseSchema.and(
  z
    .object({ key: z.string().openapi({ description: 'Stored object or legacy filter key.' }) })
    .openapi({ required: ['key'] }),
)
  .openapi({ title: 'EvaluationRuleReadFilterWithKey', required: ['key'] })
  .openapi('EvaluationRuleReadFilterWithKey')

const EvaluationRuleReadFilterSchema = z
  .xor([EvaluationRuleReadFilterWithKeySchema, EvaluationRuleReadFilterBaseSchema])
  .openapi({
    title: 'EvaluationRuleReadFilter',
    description:
      'Filter returned verbatim by evaluation-rule read endpoints.\n\nFilters with a stored `key` use the keyed shape. All other filters use the base shape. Response filters are intentionally not broken down by their internal `type` value.',
  })
  .openapi('EvaluationRuleReadFilter')

const PublicApiErrorCodeSchema = z
  .enum([
    'authentication_failed',
    'access_denied',
    'invalid_request',
    'invalid_query',
    'invalid_body',
    'resource_not_found',
    'conflict',
    'rate_limited',
    'method_not_allowed',
    'internal_error',
  ])
  .openapi({
    title: 'PublicApiErrorCode',
    description:
      'Stable machine-readable error code returned by the evaluators and evaluation-rules API.',
  })
  .openapi('PublicApiErrorCode')

const PublicApiValidationIssueSchema = z
  .object({
    code: z.string().openapi({ description: 'Validator issue code.' }),
    message: z.string().openapi({ description: 'Human-readable explanation.' }),
    path: z.array(z.any()).openapi({ description: 'Path to the invalid request field.' }),
  })
  .openapi({
    title: 'PublicApiValidationIssue',
    description: 'One request validation issue.',
    required: ['code', 'message', 'path'],
  })
  .openapi('PublicApiValidationIssue')

const PublicApiErrorDetailsSchema = z
  .object({
    issues: z
      .array(PublicApiValidationIssueSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Validation issues for an invalid request body or query.' }),
    retryAfterSeconds: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Number of seconds to wait before retrying a rate-limited request.',
      }),
    limit: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Rate-limit request allowance.' }),
    remaining: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Remaining requests in the current rate-limit window.' }),
    resetAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Time when the current rate-limit window resets.' }),
  })
  .openapi({
    title: 'PublicApiErrorDetails',
    description: 'Optional structured context for validation and rate-limit errors.',
    required: [],
  })
  .openapi('PublicApiErrorDetails')

const PublicApiErrorSchema = z
  .object({
    message: z.string().openapi({ description: 'Human-readable description of the failure.' }),
    code: PublicApiErrorCodeSchema.openapi({ description: 'Stable machine-readable error code.' }),
    details: PublicApiErrorDetailsSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Optional structured validation or rate-limit context.' }),
  })
  .openapi({
    title: 'PublicApiError',
    description:
      'Standard error response for the stable evaluators and evaluation-rules API.\n\nUse the HTTP status for the broad failure class and `code` for programmatic handling. `details` is included when field-level validation or retry information is available.',
    required: ['message', 'code'],
  })
  .openapi('PublicApiError')

const EvaluationRuleEvaluatorAssignmentInputSchema = z
  .object({
    evaluatorId: z
      .string()
      .openapi({
        description:
          "Stable evaluator identifier. The rule automatically uses that evaluator's latest version.",
      }),
    variableMapping: z
      .array(PromptVariableMappingInputSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Rule-specific prompt-variable mapping.\n\nSet to `null` or omit to inherit the evaluator's latest default mapping. Code evaluators use the fixed runtime mapping and should use `null`.",
      }),
  })
  .openapi({ title: 'EvaluationRuleEvaluatorAssignmentInput', required: ['evaluatorId'] })
  .openapi('EvaluationRuleEvaluatorAssignmentInput')

const EvaluatorAssignmentSchema = z
  .object({
    evaluatorId: z
      .string()
      .openapi({ description: 'Stable identifier of the evaluator associated with this rule.' }),
    variableMapping: z
      .array(PromptVariableMappingSchema)
      .nullable()
      .openapi({
        description:
          "Stored rule-specific override, or `null` when the evaluator's latest default mapping is inherited. Legacy mappings are returned as an explicit `legacy` variant.",
      }),
  })
  .openapi({ title: 'EvaluatorAssignment', required: ['evaluatorId', 'variableMapping'] })
  .openapi('EvaluatorAssignment')

const EvaluationRuleSchema = z
  .object({
    id: z.string().openapi({ description: 'Stable evaluation-rule identifier.' }),
    name: z
      .string()
      .openapi({
        description:
          'Human-readable rule name. This is independent from evaluator names and does not need to be unique.',
      }),
    createdBy: CreatorSchema.nullable().openapi({
      description: 'User who created this rule, or `null` when no user can be resolved.',
    }),
    enabled: z
      .boolean()
      .openapi({ description: 'Whether live execution is enabled for this rule.' }),
    sampling: z
      .float64()
      .openapi({
        description:
          'Fraction of matching observations that should be evaluated.\n\nMust be between `0` and `1`.\n- `1` evaluates every matching observation.\n- `0.25` evaluates approximately 25% of matching observations.',
      }),
    filter: z
      .array(EvaluationRuleReadFilterSchema)
      .openapi({
        description:
          'List of stored filter conditions returned verbatim. Filters with a `key` use the keyed response shape; all others use the base shape. These response shapes are not broken down by internal filter type. An empty list matches every incoming object.',
      }),
    evaluatorAssignments: z
      .array(EvaluatorAssignmentSchema)
      .openapi({
        description: 'Evaluators attached to this rule in deterministic assignment order.',
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp when the evaluation rule was created.' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp when the evaluation rule was last updated.' }),
  })
  .openapi({
    title: 'EvaluationRule',
    description:
      'Live evaluation rule for incoming observations.\n\nA rule determines which evaluators should be used, which observations should trigger scoring, how often scoring should run, and which observation fields should populate prompt variables.',
    required: [
      'id',
      'name',
      'createdBy',
      'enabled',
      'sampling',
      'filter',
      'evaluatorAssignments',
      'createdAt',
      'updatedAt',
    ],
  })
  .openapi('EvaluationRule')

const CreateEvaluationRuleRequestSchema = z
  .object({
    name: z
      .string()
      .openapi({
        description:
          'Human-readable rule name. Names are not identifiers and do not need to be unique.',
      }),
    enabled: z
      .boolean()
      .openapi({
        description:
          'Whether live execution should start immediately. Enabled rules require at least one evaluator assignment.',
      }),
    sampling: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Fraction of matching observations to evaluate. Omit this field to use the default of `1`, which evaluates every match. `null` is not accepted.',
      }),
    filter: z
      .array(EvaluationRuleFilterSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Conditions used to select observations. Defaults to an empty list, which matches every incoming observation.',
      }),
    evaluatorAssignments: z
      .array(EvaluationRuleEvaluatorAssignmentInputSchema)
      .openapi({
        description:
          'Evaluators to attach to this rule. Disabled rules may use an empty list as a draft.',
      }),
  })
  .openapi({
    title: 'CreateEvaluationRuleRequest',
    required: ['name', 'enabled', 'evaluatorAssignments'],
  })
  .openapi('CreateEvaluationRuleRequest')

const UpdateEvaluationRuleRequestSchema = z
  .object({
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'New human-readable rule name.' }),
    enabled: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'New desired live-execution state.' }),
    sampling: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'New fraction of matching observations to evaluate. Omit to keep the current value.',
      }),
    filter: z
      .array(EvaluationRuleFilterSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Complete replacement filter list. An empty list matches every incoming observation.',
      }),
    evaluatorAssignments: z
      .array(EvaluationRuleEvaluatorAssignmentInputSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Complete replacement assignment list. An empty list disables the rule.',
      }),
  })
  .openapi({
    title: 'UpdateEvaluationRuleRequest',
    description: 'At least one field must be provided.',
    required: [],
  })
  .openapi('UpdateEvaluationRuleRequest')

const UtilsCursorMetaResponseSchema = z
  .object({
    cursor: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Opaque cursor for the next page. Omitted when there is no next page.',
      }),
  })
  .openapi({
    title: 'utilsCursorMetaResponse',
    description: 'Metadata for cursor-based pagination.',
    required: [],
  })
  .openapi('UtilsCursorMetaResponse')

const CursorMetaSchema = UtilsCursorMetaResponseSchema.and(z.object({}))
  .openapi({ title: 'CursorMeta', description: 'Cursor pagination metadata.' })
  .openapi('CursorMeta')

const EvaluationRulesPageSchema = z
  .object({
    data: z.array(EvaluationRuleSchema).openapi({ description: 'Evaluation rules for this page.' }),
    meta: CursorMetaSchema.openapi({ description: 'Cursor pagination metadata.' }),
  })
  .openapi({ title: 'EvaluationRulesPage', required: ['data', 'meta'] })
  .openapi('EvaluationRulesPage')

const DeletedEvaluationRuleSchema = z
  .object({ id: z.string().openapi({ description: 'Identifier of the deleted evaluation rule.' }) })
  .openapi({
    title: 'DeletedEvaluationRule',
    description: 'Confirmation returned after successful evaluation-rule deletion.',
    required: ['id'],
  })
  .openapi('DeletedEvaluationRule')

const EvaluatorChatPromptInputSchema = z
  .xor([z.string().openapi({ title: 'String' }), EvaluatorChatPromptSchema])
  .openapi({
    title: 'EvaluatorChatPromptInput',
    description: 'A user prompt string shortcut, or an ordered list of chat messages.',
  })
  .openapi('EvaluatorChatPromptInput')

const EvaluatorVersionSchema: z.ZodType<EvaluatorVersionType> = z
  .lazy(() =>
    z
      .xor([
        z
          .object({ type: z.literal('llm_as_judge').exactOptional() })
          .openapi({ required: [] })
          .and(LlmAsJudgeEvaluatorVersionSchema)
          .openapi({ required: ['type'], title: 'LlmAsJudgeEvaluatorVersion' }),
        z
          .object({ type: z.literal('code').exactOptional() })
          .openapi({ required: [] })
          .and(CodeEvaluatorVersionSchema)
          .openapi({ required: ['type'], title: 'CodeEvaluatorVersion' }),
      ])
      .openapi({ title: 'EvaluatorVersion' }),
  )
  .openapi('EvaluatorVersion')

const EvaluatorSchema: z.ZodType<EvaluatorType> = z
  .lazy(() =>
    z
      .xor([
        z
          .object({ type: z.literal('llm_as_judge').exactOptional() })
          .openapi({ required: [] })
          .and(LlmAsJudgeEvaluatorSchema)
          .openapi({ required: ['type'], title: 'LlmAsJudgeEvaluator' }),
        z
          .object({ type: z.literal('code').exactOptional() })
          .openapi({ required: [] })
          .and(CodeEvaluatorSchema)
          .openapi({ required: ['type'], title: 'CodeEvaluator' }),
      ])
      .openapi({
        title: 'Evaluator',
        description:
          'One evaluator that can be used for scoring.\n\nAn evaluator describes **how** to score data. Associated evaluation rules describe **which** live objects should be evaluated.',
      }),
  )
  .openapi('Evaluator')

const CreateLlmAsJudgeEvaluatorRequestSchema = z
  .object({
    name: z
      .string()
      .openapi({
        description:
          'Human-readable evaluator name. Names are not identifiers and do not need to be unique.',
      }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional human-readable evaluator description.' }),
    type: z.literal('llm_as_judge').openapi({ description: 'Evaluator type.' }),
    prompt: EvaluatorChatPromptInputSchema.openapi({
      description: 'User prompt string shortcut or an ordered list of chat messages.',
    }),
    modelConfig: EvaluatorModelConfigSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          "Explicit model configuration. Set to `null` or omit to use the project's default evaluation model.",
      }),
    variableMapping: z
      .array(PromptVariableMappingInputSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Default prompt-variable mapping, or `null` when no default is configured.',
      }),
    outputDefinition: EvaluatorOutputDefinitionSchema.openapi({
      description:
        'Structured output schema returned by this evaluator. Do not include an internal persistence version.',
    }),
  })
  .openapi({
    title: 'CreateLlmAsJudgeEvaluatorRequest',
    required: ['name', 'type', 'prompt', 'outputDefinition'],
  })
  .openapi('CreateLlmAsJudgeEvaluatorRequest')

const CreateCodeEvaluatorRequestSchema = z
  .object({
    name: z
      .string()
      .openapi({
        description:
          'Human-readable evaluator name. Names are not identifiers and do not need to be unique.',
      }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional human-readable evaluator description.' }),
    type: z.literal('code').openapi({ description: 'Evaluator type.' }),
    sourceCode: z
      .string()
      .openapi({ description: 'Source code executed for each matched observation.' }),
    sourceCodeLanguage: CodeEvaluatorSourceCodeLanguageSchema.openapi({
      description: 'Runtime language used to execute the source code.',
    }),
  })
  .openapi({
    title: 'CreateCodeEvaluatorRequest',
    required: ['name', 'type', 'sourceCode', 'sourceCodeLanguage'],
  })
  .openapi('CreateCodeEvaluatorRequest')

const CreateEvaluatorRequestSchema = z
  .xor([
    z
      .object({ type: z.literal('llm_as_judge').exactOptional() })
      .openapi({ required: [] })
      .and(CreateLlmAsJudgeEvaluatorRequestSchema)
      .openapi({ required: ['type'], title: 'CreateLlmAsJudgeEvaluatorRequest' }),
    z
      .object({ type: z.literal('code').exactOptional() })
      .openapi({ required: [] })
      .and(CreateCodeEvaluatorRequestSchema)
      .openapi({ required: ['type'], title: 'CreateCodeEvaluatorRequest' }),
  ])
  .openapi({
    title: 'CreateEvaluatorRequest',
    description:
      'Initial evaluator definition with metadata and definition fields at the same level. The returned evaluator starts at version `1`.',
  })
  .openapi('CreateEvaluatorRequest')

const UpdateEvaluatorMetadataRequestSchema = z
  .object({
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'New human-readable evaluator name.' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'New description. Set to `null` to clear it.' }),
  })
  .openapi({
    title: 'UpdateEvaluatorMetadataRequest',
    description: 'Metadata-only update. At least one field must be provided.',
    required: [],
  })
  .openapi('UpdateEvaluatorMetadataRequest')

const UpdateLlmAsJudgeEvaluatorRequestSchema = z
  .object({
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'New human-readable evaluator name.' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'New description. Set to `null` to clear it.' }),
    type: z
      .literal('llm_as_judge')
      .openapi({ description: 'Evaluator type. The type of an existing evaluator cannot change.' }),
    prompt: EvaluatorChatPromptInputSchema.openapi({
      description: 'Complete replacement user prompt string or an ordered list of chat messages.',
    }),
    modelConfig: EvaluatorModelConfigSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          "Explicit model configuration. Set to `null` or omit to use the project's default evaluation model.",
      }),
    variableMapping: z
      .array(PromptVariableMappingInputSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Complete replacement default variable mapping, or `null` when no default is configured.',
      }),
    outputDefinition: EvaluatorOutputDefinitionSchema.openapi({
      description:
        'Complete replacement output schema. Do not include an internal persistence version.',
    }),
  })
  .openapi({
    title: 'UpdateLlmAsJudgeEvaluatorRequest',
    required: ['type', 'prompt', 'outputDefinition'],
  })
  .openapi('UpdateLlmAsJudgeEvaluatorRequest')

const UpdateCodeEvaluatorRequestSchema = z
  .object({
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'New human-readable evaluator name.' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'New description. Set to `null` to clear it.' }),
    type: z
      .literal('code')
      .openapi({ description: 'Evaluator type. The type of an existing evaluator cannot change.' }),
    sourceCode: z.string().openapi({ description: 'Complete replacement source code.' }),
    sourceCodeLanguage: CodeEvaluatorSourceCodeLanguageSchema.openapi({
      description: 'Runtime language used to execute the source code.',
    }),
  })
  .openapi({
    title: 'UpdateCodeEvaluatorRequest',
    required: ['type', 'sourceCode', 'sourceCodeLanguage'],
  })
  .openapi('UpdateCodeEvaluatorRequest')

const UpdateEvaluatorRequestSchema = z
  .xor([
    UpdateEvaluatorMetadataRequestSchema,
    UpdateLlmAsJudgeEvaluatorRequestSchema,
    UpdateCodeEvaluatorRequestSchema,
  ])
  .openapi({
    title: 'UpdateEvaluatorRequest',
    description:
      'Metadata-only update or complete flattened definition replacement. At least one field must be provided.',
  })
  .openapi('UpdateEvaluatorRequest')

const EvaluatorsPageSchema = z
  .object({
    data: z.array(EvaluatorSchema).openapi({ description: 'Evaluators for this page.' }),
    meta: CursorMetaSchema.openapi({ description: 'Cursor pagination metadata.' }),
  })
  .openapi({ title: 'EvaluatorsPage', required: ['data', 'meta'] })
  .openapi('EvaluatorsPage')

const EvaluatorVersionsPageSchema = z
  .object({
    data: z
      .array(EvaluatorVersionSchema)
      .openapi({ description: 'Evaluator versions for this page in newest-first order.' }),
    meta: CursorMetaSchema.openapi({ description: 'Cursor pagination metadata.' }),
  })
  .openapi({ title: 'EvaluatorVersionsPage', required: ['data', 'meta'] })
  .openapi('EvaluatorVersionsPage')

const DeletedEvaluatorSchema = z
  .object({ id: z.string().openapi({ description: 'Identifier of the deleted evaluator.' }) })
  .openapi({
    title: 'DeletedEvaluator',
    description: 'Confirmation returned after successful evaluator deletion.',
    required: ['id'],
  })
  .openapi('DeletedEvaluator')

const ScoreV3Schema: z.ZodType<ScoreV3Type> = z
  .lazy(() =>
    z
      .xor([
        z
          .object({ dataType: z.literal('NUMERIC').exactOptional() })
          .openapi({ required: [] })
          .and(NumericScoreV3Schema)
          .openapi({ required: ['dataType'], title: 'NumericScoreV3' }),
        z
          .object({ dataType: z.literal('BOOLEAN').exactOptional() })
          .openapi({ required: [] })
          .and(BooleanScoreV3Schema)
          .openapi({ required: ['dataType'], title: 'BooleanScoreV3' }),
        z
          .object({ dataType: z.literal('CATEGORICAL').exactOptional() })
          .openapi({ required: [] })
          .and(CategoricalScoreV3Schema)
          .openapi({ required: ['dataType'], title: 'CategoricalScoreV3' }),
        z
          .object({ dataType: z.literal('TEXT').exactOptional() })
          .openapi({ required: [] })
          .and(TextScoreV3Schema)
          .openapi({ required: ['dataType'], title: 'TextScoreV3' }),
        z
          .object({ dataType: z.literal('CORRECTION').exactOptional() })
          .openapi({ required: [] })
          .and(CorrectionScoreV3Schema)
          .openapi({ required: ['dataType'], title: 'CorrectionScoreV3' }),
      ])
      .openapi({ title: 'ScoreV3' }),
  )
  .openapi('ScoreV3')

const ExperimentSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    description: z.string().nullable(),
    startTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'Start of the experiment, i.e. the earliest event within the\nrequested time range. Clipped to `fromStartTime` when the\nexperiment started before the requested range.',
      }),
    endTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'End of the experiment, i.e. the latest event end within the\nrequested time range.',
      }),
    itemCount: z
      .int()
      .openapi({ description: 'Number of experiment items within the requested time range.' }),
    datasetId: z
      .string()
      .nullable()
      .openapi({ description: 'Null when the experiment is not associated with a dataset.' }),
    metadata: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'Included only when `fields=metadata` is requested.' }),
    scores: z
      .array(ScoreV3Schema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Included only when `fields=scores` is requested. Contains scores directly attached to the experiment.',
      }),
  })
  .openapi({
    title: 'Experiment',
    required: ['id', 'name', 'description', 'startTime', 'endTime', 'itemCount', 'datasetId'],
  })
  .openapi('Experiment')

const ExperimentsResponseMetaSchema = UtilsCursorMetaResponseSchema.and(z.object({}))
  .openapi({
    title: 'ExperimentsResponseMeta',
    description: 'Metadata for cursor-based pagination.',
  })
  .openapi('ExperimentsResponseMeta')

const ExperimentsResponseSchema = z
  .object({ data: z.array(ExperimentSchema), meta: ExperimentsResponseMetaSchema })
  .openapi({ title: 'ExperimentsResponse', required: ['data', 'meta'] })
  .openapi('ExperimentsResponse')

const ExperimentItemSchema = z
  .object({
    id: z.string(),
    traceId: z.string(),
    startTime: z.iso.datetime({ offset: true }),
    endTime: z.iso.datetime({ offset: true }).nullable(),
    level: ObservationLevelSchema,
    environment: z.string(),
    experimentId: z.string(),
    experimentName: z.string(),
    experimentItemId: z.string(),
    experimentDatasetId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Included when `fields=dataset` is requested.' }),
    experimentItemVersion: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Included when `fields=dataset` is requested.' }),
    input: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Included when `fields=io` is requested.' }),
    output: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Included when `fields=io` is requested.' }),
    expectedOutput: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Included when `fields=io` is requested.' }),
    metadata: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'Included when `fields=metadata` is requested.' }),
    experimentItemMetadata: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'Included when `fields=itemMetadata` is requested.' }),
    experimentMetadata: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'Included when `fields=experimentMetadata` is requested.' }),
    experimentDescription: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Included when `fields=experimentMetadata` is requested.' }),
    scores: z
      .array(ScoreV3Schema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Included only when `fields=scores` is requested. Contains item and trace scores only; experiment-level scores are returned by the experiments endpoint.',
      }),
  })
  .openapi({
    title: 'ExperimentItem',
    required: [
      'id',
      'traceId',
      'startTime',
      'endTime',
      'level',
      'environment',
      'experimentId',
      'experimentName',
      'experimentItemId',
    ],
  })
  .openapi('ExperimentItem')

const ExperimentItemsResponseSchema = z
  .object({ data: z.array(ExperimentItemSchema), meta: ExperimentsResponseMetaSchema })
  .openapi({ title: 'ExperimentItemsResponse', required: ['data', 'meta'] })
  .openapi('ExperimentItemsResponse')

const FeedbackTargetTypeSchema = z
  .enum(['skill', 'mcp-tool', 'cli', 'docs', 'public-api', 'other'])
  .openapi({ title: 'FeedbackTargetType' })
  .openapi('FeedbackTargetType')

const SubmitFeedbackRequestSchema = z
  .object({
    targetType: FeedbackTargetTypeSchema.openapi({
      description: 'Category of the thing the feedback is about.',
    }),
    target: z
      .string()
      .openapi({
        description:
          "The specific instance within targetType: the skill name, MCP tool name, CLI command, API endpoint path, or docs page path (e.g. 'queryMetrics', '/docs/mcp'). An identifier, not a sentence. Must be between 1 and 200 characters.",
      }),
    feedback: z
      .string()
      .openapi({
        description:
          'Concise feedback text approved by the user. Must be between 1 and 3000 characters.',
      }),
    goal: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Optional user-approved goal or use case they were trying to achieve. Must be between 1 and 1500 characters when provided. Do not include secrets, customer data, trace payloads, or broad unrelated context.',
      }),
    referenceUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Optional HTTP(S) reference URL. Langfuse stores it as text for triage and does not fetch it.',
      }),
  })
  .openapi({ title: 'SubmitFeedbackRequest', required: ['targetType', 'target', 'feedback'] })
  .openapi('SubmitFeedbackRequest')

const SubmitFeedbackResponseSchema = z
  .object({ id: z.string().openapi({ description: 'Correlation ID for the submitted feedback.' }) })
  .openapi({ title: 'SubmitFeedbackResponse', required: ['id'] })
  .openapi('SubmitFeedbackResponse')

const HealthResponseSchema = z
  .object({
    version: z.string().openapi({ description: 'Langfuse server version' }),
    status: z.string(),
  })
  .openapi({ title: 'HealthResponse', required: ['version', 'status'] })
  .openapi('HealthResponse')

const LlmConnectionSchema = z
  .object({
    id: z.string(),
    provider: z
      .string()
      .openapi({
        description:
          "Provider name (e.g., 'openai', 'my-gateway'). Must be unique in project, used for upserting.",
      }),
    adapter: z.string().openapi({ description: 'The adapter used to interface with the LLM' }),
    displaySecretKey: z
      .string()
      .openapi({ description: 'Masked version of the secret key for display purposes' }),
    baseURL: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Custom base URL for the LLM API' }),
    customModels: z
      .array(z.string())
      .openapi({ description: 'List of custom model names available for this connection' }),
    withDefaultModels: z
      .boolean()
      .openapi({ description: 'Whether to include default models for this adapter' }),
    extraHeaderKeys: z
      .array(z.string())
      .openapi({
        description: 'Keys of extra headers sent with requests (values excluded for security)',
      }),
    config: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Adapter-specific configuration. Required for Bedrock (`{"region":"us-east-1"}`), optional for OpenAI (`{"useResponsesApi":true}`), optional for VertexAI (`{"location":"us-central1"}`), not used by other adapters.',
      }),
    createdAt: z.iso.datetime({ offset: true }),
    updatedAt: z.iso.datetime({ offset: true }),
  })
  .openapi({
    title: 'LlmConnection',
    description: 'LLM API connection configuration (secrets excluded)',
    required: [
      'id',
      'provider',
      'adapter',
      'displaySecretKey',
      'customModels',
      'withDefaultModels',
      'extraHeaderKeys',
      'createdAt',
      'updatedAt',
    ],
  })
  .openapi('LlmConnection')

const PaginatedLlmConnectionsSchema = z
  .object({ data: z.array(LlmConnectionSchema), meta: UtilsMetaResponseSchema })
  .openapi({ title: 'PaginatedLlmConnections', required: ['data', 'meta'] })
  .openapi('PaginatedLlmConnections')

const LlmAdapterSchema = z
  .enum(['anthropic', 'openai', 'azure', 'bedrock', 'google-vertex-ai', 'google-ai-studio'])
  .openapi({ title: 'LlmAdapter' })
  .openapi('LlmAdapter')

const UpsertLlmConnectionRequestSchema = z
  .object({
    provider: z
      .string()
      .openapi({
        description:
          "Provider name (e.g., 'openai', 'my-gateway'). Must be unique in project, used for upserting.",
      }),
    adapter: LlmAdapterSchema.openapi({
      description: 'The adapter used to interface with the LLM',
    }),
    secretKey: z.string().openapi({ description: 'Secret key for the LLM API.' }),
    baseURL: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Custom base URL for the LLM API' }),
    customModels: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'List of custom model names' }),
    withDefaultModels: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Whether to include default models. Default is true.' }),
    extraHeaders: z
      .record(z.string(), z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Extra headers to send with requests' }),
    config: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Adapter-specific configuration. Validation rules: - **Bedrock**: Required. Must be `{"region": "<aws-region>"}` (e.g., `{"region":"us-east-1"}`) - **OpenAI**: Optional. If provided, must be `{"useResponsesApi": <boolean>}` to control whether Langfuse routes calls through OpenAI\'s Responses API. - **VertexAI**: Optional. If provided, must be `{"location": "<gcp-location>"}` (e.g., `{"location":"us-central1"}`) - **Other adapters**: Not supported. Omit this field or set to null.',
      }),
  })
  .openapi({
    title: 'UpsertLlmConnectionRequest',
    description: 'Request to create or update an LLM connection (upsert)',
    required: ['provider', 'adapter', 'secretKey'],
  })
  .openapi('UpsertLlmConnectionRequest')

const DeleteLlmConnectionResponseSchema = z
  .object({ message: z.string() })
  .openapi({ title: 'DeleteLlmConnectionResponse', required: ['message'] })
  .openapi('DeleteLlmConnectionResponse')

const GetMediaResponseSchema = z
  .object({
    mediaId: z
      .string()
      .openapi({ description: 'The unique langfuse identifier of a media record' }),
    contentType: z.string().openapi({ description: 'The MIME type of the media record' }),
    contentLength: z.int().openapi({ description: 'The size of the media record in bytes' }),
    uploadedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time when the media record was uploaded' }),
    url: z.string().openapi({ description: 'The download URL of the media record' }),
    urlExpiry: z
      .string()
      .openapi({ description: 'The expiry date and time of the media record download URL' }),
  })
  .openapi({
    title: 'GetMediaResponse',
    required: ['mediaId', 'contentType', 'contentLength', 'uploadedAt', 'url', 'urlExpiry'],
  })
  .openapi('GetMediaResponse')

const PatchMediaBodySchema = z
  .object({
    uploadedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time when the media record was uploaded' }),
    uploadHttpStatus: z.int().openapi({ description: 'The HTTP status code of the upload' }),
    uploadHttpError: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The HTTP error message of the upload' }),
    uploadTimeMs: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The time in milliseconds it took to upload the media record' }),
  })
  .openapi({ title: 'PatchMediaBody', required: ['uploadedAt', 'uploadHttpStatus'] })
  .openapi('PatchMediaBody')

const MediaContentTypeSchema = z
  .enum([
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp',
    'image/gif',
    'image/svg+xml',
    'image/tiff',
    'image/bmp',
    'image/avif',
    'image/heic',
    'audio/mpeg',
    'audio/mp3',
    'audio/wav',
    'audio/ogg',
    'audio/oga',
    'audio/aac',
    'audio/mp4',
    'audio/flac',
    'audio/opus',
    'audio/webm',
    'video/mp4',
    'video/webm',
    'video/ogg',
    'video/mpeg',
    'video/quicktime',
    'video/x-msvideo',
    'video/x-matroska',
    'text/plain',
    'text/html',
    'text/css',
    'text/csv',
    'text/markdown',
    'text/x-python',
    'application/javascript',
    'text/x-typescript',
    'application/x-yaml',
    'application/pdf',
    'application/msword',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/zip',
    'application/json',
    'application/xml',
    'application/octet-stream',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/rtf',
    'application/x-ndjson',
    'application/vnd.apache.parquet',
    'application/gzip',
    'application/x-tar',
    'application/x-7z-compressed',
  ])
  .openapi({ title: 'MediaContentType', description: 'The MIME type of the media record' })
  .openapi('MediaContentType')

const GetMediaUploadUrlRequestSchema = z
  .object({
    traceId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The trace the media is associated with. Null for dataset item media uploads.',
      }),
    observationId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The observation ID associated with the media record. If the media record is associated directly with a trace, this will be null.',
      }),
    datasetId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The dataset the media belongs to. Null for trace/observation media uploads.',
      }),
    datasetItemId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The dataset item the media is associated with (need not exist yet). Null for trace/observation media uploads.',
      }),
    contentType: MediaContentTypeSchema,
    contentLength: z.int().openapi({ description: 'The size of the media record in bytes' }),
    sha256Hash: z.string().openapi({ description: 'The SHA-256 hash of the media record' }),
    field: z
      .string()
      .openapi({
        description:
          'The item field the media is in: `input`/`output`/`metadata` (trace) or `input`/`expectedOutput`/`metadata` (dataset item).',
      }),
  })
  .openapi({
    title: 'GetMediaUploadUrlRequest',
    description:
      'Request a presigned media upload URL. Provide exactly one context: a trace (traceId, optionally observationId) or a dataset item (datasetId + datasetItemId). field is required and must match the chosen context.',
    required: ['contentType', 'contentLength', 'sha256Hash', 'field'],
  })
  .openapi('GetMediaUploadUrlRequest')

const GetMediaUploadUrlResponseSchema = z
  .object({
    uploadUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The presigned upload URL. If the asset is already uploaded, this will be null',
      }),
    mediaId: z
      .string()
      .openapi({ description: 'The unique langfuse identifier of a media record' }),
  })
  .openapi({ title: 'GetMediaUploadUrlResponse', required: ['mediaId'] })
  .openapi('GetMediaUploadUrlResponse')

const MetricsV2ResponseSchema = z
  .object({
    data: z
      .array(z.looseObject({}))
      .openapi({
        description:
          'The metrics data. Each item in the list contains the metric values and dimensions requested in the query.\nFormat varies based on the query parameters.\nHistograms will return an array with [lower, upper, height] tuples.',
      }),
  })
  .openapi({ title: 'MetricsV2Response', required: ['data'] })
  .openapi('MetricsV2Response')

const ModelTokenizerIdSchema = z
  .enum(['openai', 'claude'])
  .openapi({
    title: 'ModelTokenizerId',
    description: 'Tokenizer supported by Langfuse for model usage inference.',
  })
  .openapi('ModelTokenizerId')

const PaginatedModelsSchema = z
  .object({ data: z.array(ModelSchema), meta: UtilsMetaResponseSchema })
  .openapi({ title: 'PaginatedModels', required: ['data', 'meta'] })
  .openapi('PaginatedModels')

const CreateModelRequestSchema = z
  .object({
    modelName: z
      .string()
      .openapi({
        description:
          'Name of the model definition. If multiple with the same name exist, they are applied in the following order: (1) custom over built-in, (2) newest according to startTime where model.startTime<observation.startTime',
      }),
    matchPattern: z
      .string()
      .openapi({
        description:
          'Regex pattern which matches this model definition to generation.model. Useful in case of fine-tuned models. If you want to exact match, use `(?i)^modelname$`',
      }),
    startDate: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Apply only to generations which are newer than this ISO date.' }),
    unit: ModelUsageUnitSchema.openapi({ description: 'Unit used by this model.' }),
    inputPrice: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Deprecated. Use 'pricingTiers' instead. Price (USD) per input unit. Creates a default tier if pricingTiers not provided.",
      }),
    outputPrice: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Deprecated. Use 'pricingTiers' instead. Price (USD) per output unit. Creates a default tier if pricingTiers not provided.",
      }),
    totalPrice: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Deprecated. Use 'pricingTiers' instead. Price (USD) per total units. Cannot be set if input or output price is set. Creates a default tier if pricingTiers not provided.",
      }),
    pricingTiers: z
      .array(PricingTierInputSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Optional. Array of pricing tiers for this model.\n\nUse pricing tiers for all models - both those with threshold-based pricing variations and those with simple flat pricing:\n\n- For models with standard flat pricing: Create a single default tier with your prices\n  (e.g., one tier with isDefault=true, priority=0, conditions=[], and your standard prices)\n\n- For models with threshold-based pricing: Create a default tier plus additional conditional tiers\n  (e.g., default tier for standard usage + high-volume tier for usage above certain thresholds)\n\nRequirements:\n- Cannot be provided with flat prices (inputPrice/outputPrice/totalPrice) - use one approach or the other\n- Must include exactly one default tier with isDefault=true, priority=0, and conditions=[]\n- All tier names and priorities must be unique within the model\n- Each tier must define at least one price\n\nIf omitted, you must provide flat prices instead (inputPrice/outputPrice/totalPrice),\nwhich will automatically create a single default tier named "Standard".',
      }),
    tokenizerId: ModelTokenizerIdSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          'Optional. Tokenizer to be applied to observations which match to this model. See docs for more details.',
      }),
    tokenizerConfig: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Optional. Configuration for the selected tokenizer. Needs to be JSON. See docs for more details.',
      }),
  })
  .openapi({ title: 'CreateModelRequest', required: ['modelName', 'matchPattern', 'unit'] })
  .openapi('CreateModelRequest')

const ObservationsV2MetaSchema = UtilsCursorMetaResponseSchema.and(z.object({}))
  .openapi({ title: 'ObservationsV2Meta', description: 'Metadata for cursor-based pagination.' })
  .openapi('ObservationsV2Meta')

const ObservationsV2ResponseSchema = z
  .object({
    data: z
      .array(ObservationV2Schema)
      .openapi({
        description:
          'Array of observation objects. Fields included depend on the `fields` parameter in the request.',
      }),
    meta: ObservationsV2MetaSchema,
  })
  .openapi({
    title: 'ObservationsV2Response',
    description:
      'Response containing observations with field-group-based filtering and cursor-based pagination.\n\nThe `data` array contains observation objects with only the requested field groups included.\nUse the `cursor` in `meta` to retrieve the next page of results.',
    required: ['data', 'meta'],
  })
  .openapi('ObservationsV2Response')

const OtelAttributeValueSchema = z
  .object({
    stringValue: z.string().nullable().exactOptional().openapi({ description: 'String value' }),
    intValue: z.int().nullable().exactOptional().openapi({ description: 'Integer value' }),
    doubleValue: z.float64().nullable().exactOptional().openapi({ description: 'Double value' }),
    boolValue: z.boolean().nullable().exactOptional().openapi({ description: 'Boolean value' }),
  })
  .openapi({
    title: 'OtelAttributeValue',
    description: 'Attribute value wrapper supporting different value types',
    required: [],
  })
  .openapi('OtelAttributeValue')

const OtelAttributeSchema = z
  .object({
    key: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Attribute key (e.g., "service.name", "langfuse.observation.type")',
      }),
    value: OtelAttributeValueSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Attribute value' }),
  })
  .openapi({
    title: 'OtelAttribute',
    description: 'Key-value attribute pair for resources, scopes, or spans',
    required: [],
  })
  .openapi('OtelAttribute')

const OtelResourceSchema = z
  .object({
    attributes: z
      .array(OtelAttributeSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Resource attributes like service.name, service.version, etc.' }),
  })
  .openapi({
    title: 'OtelResource',
    description: 'Resource attributes identifying the source of telemetry',
    required: [],
  })
  .openapi('OtelResource')

const OtelScopeSchema = z
  .object({
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Instrumentation scope name' }),
    version: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Instrumentation scope version' }),
    attributes: z
      .array(OtelAttributeSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Additional scope attributes' }),
  })
  .openapi({ title: 'OtelScope', description: 'Instrumentation scope information', required: [] })
  .openapi('OtelScope')

const OtelSpanSchema = z
  .object({
    traceId: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Trace ID (16 bytes, hex-encoded string in JSON or Buffer in binary)',
      }),
    spanId: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Span ID (8 bytes, hex-encoded string in JSON or Buffer in binary)',
      }),
    parentSpanId: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Parent span ID if this is a child span' }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Span name describing the operation' }),
    kind: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Span kind (1=INTERNAL, 2=SERVER, 3=CLIENT, 4=PRODUCER, 5=CONSUMER)',
      }),
    startTimeUnixNano: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Start time in nanoseconds since Unix epoch' }),
    endTimeUnixNano: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({ description: 'End time in nanoseconds since Unix epoch' }),
    attributes: z
      .array(OtelAttributeSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Span attributes including Langfuse-specific attributes (langfuse.observation.*)',
      }),
    status: z.any().nullable().exactOptional().openapi({ description: 'Span status object' }),
  })
  .openapi({
    title: 'OtelSpan',
    description: 'Individual span representing a unit of work or operation',
    required: [],
  })
  .openapi('OtelSpan')

const OtelScopeSpanSchema = z
  .object({
    scope: OtelScopeSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Instrumentation scope information' }),
    spans: z
      .array(OtelSpanSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Array of spans' }),
  })
  .openapi({
    title: 'OtelScopeSpan',
    description: 'Collection of spans from a single instrumentation scope',
    required: [],
  })
  .openapi('OtelScopeSpan')

const OtelResourceSpanSchema = z
  .object({
    resource: OtelResourceSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Resource information' }),
    scopeSpans: z
      .array(OtelScopeSpanSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Array of scope spans' }),
  })
  .openapi({
    title: 'OtelResourceSpan',
    description:
      'Represents a collection of spans from a single resource as per OTLP specification',
    required: [],
  })
  .openapi('OtelResourceSpan')

const OtelTraceResponseSchema = z
  .object({})
  .openapi({
    title: 'OtelTraceResponse',
    description: 'Response from trace export request. Empty object indicates success.',
  })
  .openapi('OtelTraceResponse')

const MembershipRoleSchema = z
  .enum(['OWNER', 'ADMIN', 'MEMBER', 'VIEWER'])
  .openapi({ title: 'MembershipRole' })
  .openapi('MembershipRole')

const MembershipRequestSchema = z
  .object({ userId: z.string(), role: MembershipRoleSchema })
  .openapi({ title: 'MembershipRequest', required: ['userId', 'role'] })
  .openapi('MembershipRequest')

const DeleteMembershipRequestSchema = z
  .object({ userId: z.string() })
  .openapi({ title: 'DeleteMembershipRequest', required: ['userId'] })
  .openapi('DeleteMembershipRequest')

const MembershipResponseSchema = z
  .object({ userId: z.string(), role: MembershipRoleSchema, email: z.string(), name: z.string() })
  .openapi({ title: 'MembershipResponse', required: ['userId', 'role', 'email', 'name'] })
  .openapi('MembershipResponse')

const MembershipDeletionResponseSchema = z
  .object({ message: z.string(), userId: z.string() })
  .openapi({ title: 'MembershipDeletionResponse', required: ['message', 'userId'] })
  .openapi('MembershipDeletionResponse')

const MembershipsResponseSchema = z
  .object({ memberships: z.array(MembershipResponseSchema) })
  .openapi({ title: 'MembershipsResponse', required: ['memberships'] })
  .openapi('MembershipsResponse')

const OrganizationProjectSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    metadata: z.looseObject({}).nullable().exactOptional(),
    createdAt: z.iso.datetime({ offset: true }),
    updatedAt: z.iso.datetime({ offset: true }),
  })
  .openapi({ title: 'OrganizationProject', required: ['id', 'name', 'createdAt', 'updatedAt'] })
  .openapi('OrganizationProject')

const OrganizationProjectsResponseSchema = z
  .object({ projects: z.array(OrganizationProjectSchema) })
  .openapi({ title: 'OrganizationProjectsResponse', required: ['projects'] })
  .openapi('OrganizationProjectsResponse')

const OrganizationApiKeySchema = z
  .object({
    id: z.string(),
    createdAt: z.iso.datetime({ offset: true }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Expiration timestamp. Null if the key does not expire.' }),
    lastUsedAt: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Name of the API key. Contains the same value as note; null if no name was provided.',
      }),
    note: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Deprecated alias for name. Contains the same value as name.',
        deprecated: true,
      }),
    publicKey: z.string(),
    displaySecretKey: z.string(),
  })
  .openapi({
    title: 'OrganizationApiKey',
    required: ['id', 'createdAt', 'publicKey', 'displaySecretKey'],
  })
  .openapi('OrganizationApiKey')

const OrganizationApiKeysResponseSchema = z
  .object({ apiKeys: z.array(OrganizationApiKeySchema) })
  .openapi({ title: 'OrganizationApiKeysResponse', required: ['apiKeys'] })
  .openapi('OrganizationApiKeysResponse')

const OrganizationSchema = z
  .object({
    id: z.string().openapi({ description: 'The unique identifier of the organization' }),
    name: z.string().openapi({ description: 'The name of the organization' }),
  })
  .openapi({ title: 'Organization', required: ['id', 'name'] })
  .openapi('Organization')

const ProjectSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    organization: OrganizationSchema.openapi({
      description: 'The organization this project belongs to',
    }),
    metadata: z.looseObject({}).openapi({ description: 'Metadata for the project' }),
    retentionDays: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Number of days to retain data. Null or 0 means no retention. Omitted if no retention is configured.',
      }),
  })
  .openapi({ title: 'Project', required: ['id', 'name', 'organization', 'metadata'] })
  .openapi('Project')

const ProjectsSchema = z
  .object({ data: z.array(ProjectSchema) })
  .openapi({ title: 'Projects', required: ['data'] })
  .openapi('Projects')

const ProjectDeletionResponseSchema = z
  .object({ success: z.boolean(), message: z.string() })
  .openapi({ title: 'ProjectDeletionResponse', required: ['success', 'message'] })
  .openapi('ProjectDeletionResponse')

const ApiKeySummarySchema = z
  .object({
    id: z.string(),
    createdAt: z.iso.datetime({ offset: true }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Expiration timestamp. Null if the key does not expire.' }),
    lastUsedAt: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Name of the API key. Contains the same value as note; null if no name was provided.',
      }),
    note: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Deprecated alias for name. Contains the same value as name.',
        deprecated: true,
      }),
    publicKey: z.string(),
    displaySecretKey: z.string(),
  })
  .openapi({
    title: 'ApiKeySummary',
    description: 'Summary of an API key',
    required: ['id', 'createdAt', 'publicKey', 'displaySecretKey'],
  })
  .openapi('ApiKeySummary')

const ApiKeyListSchema = z
  .object({ apiKeys: z.array(ApiKeySummarySchema) })
  .openapi({
    title: 'ApiKeyList',
    description: 'List of API keys for a project',
    required: ['apiKeys'],
  })
  .openapi('ApiKeyList')

const ApiKeyResponseSchema = z
  .object({
    id: z.string(),
    createdAt: z.iso.datetime({ offset: true }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Expiration timestamp. Null if the key does not expire.' }),
    publicKey: z.string(),
    secretKey: z.string(),
    displaySecretKey: z.string(),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Name of the API key. Contains the same value as note; null if no name was provided.',
      }),
    note: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Deprecated alias for name. Contains the same value as name.',
        deprecated: true,
      }),
  })
  .openapi({
    title: 'ApiKeyResponse',
    description: 'Response for API key creation',
    required: ['id', 'createdAt', 'publicKey', 'secretKey', 'displaySecretKey'],
  })
  .openapi('ApiKeyResponse')

const ApiKeyDeletionResponseSchema = z
  .object({ success: z.boolean() })
  .openapi({
    title: 'ApiKeyDeletionResponse',
    description: 'Response for API key deletion',
    required: ['success'],
  })
  .openapi('ApiKeyDeletionResponse')

const PromptTypeSchema = z
  .enum(['chat', 'text'])
  .openapi({ title: 'PromptType' })
  .openapi('PromptType')

const PromptMetaSchema = z
  .object({
    name: z.string(),
    type: PromptTypeSchema.openapi({
      description: 'Indicates whether the prompt is a text or chat prompt.',
    }),
    versions: z.array(z.int()),
    labels: z.array(z.string()),
    tags: z.array(z.string()),
    lastUpdatedAt: z.iso.datetime({ offset: true }),
    lastConfig: z
      .any()
      .openapi({
        description:
          'Config object of the most recent prompt version that matches the filters (if any are provided)',
      }),
  })
  .openapi({
    title: 'PromptMeta',
    required: ['name', 'type', 'versions', 'labels', 'tags', 'lastUpdatedAt', 'lastConfig'],
  })
  .openapi('PromptMeta')

const PromptMetaListResponseSchema = z
  .object({ data: z.array(PromptMetaSchema), meta: UtilsMetaResponseSchema })
  .openapi({ title: 'PromptMetaListResponse', required: ['data', 'meta'] })
  .openapi('PromptMetaListResponse')

const CreateChatPromptTypeSchema = z
  .literal('chat')
  .openapi({ title: 'CreateChatPromptType' })
  .openapi('CreateChatPromptType')

const CreateChatPromptRequestSchema = z
  .object({
    name: z
      .string()
      .openapi({
        description:
          'The full prompt name, including any folder path, with at most 255 characters.',
      }),
    prompt: z.array(ChatMessageWithPlaceholdersSchema),
    config: z.any().nullable().exactOptional(),
    type: CreateChatPromptTypeSchema,
    labels: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'List of deployment labels of this prompt version.' }),
    tags: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'List of tags to apply to all versions of this prompt.' }),
    commitMessage: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Commit message for this prompt version.' }),
  })
  .openapi({ title: 'CreateChatPromptRequest', required: ['name', 'prompt', 'type'] })
  .openapi('CreateChatPromptRequest')

const CreateTextPromptTypeSchema = z
  .literal('text')
  .openapi({ title: 'CreateTextPromptType' })
  .openapi('CreateTextPromptType')

const CreateTextPromptRequestSchema = z
  .object({
    name: z
      .string()
      .openapi({
        description:
          'The full prompt name, including any folder path, with at most 255 characters.',
      }),
    prompt: z.string(),
    config: z.any().nullable().exactOptional(),
    type: CreateTextPromptTypeSchema.nullable().exactOptional(),
    labels: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'List of deployment labels of this prompt version.' }),
    tags: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'List of tags to apply to all versions of this prompt.' }),
    commitMessage: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Commit message for this prompt version.' }),
  })
  .openapi({ title: 'CreateTextPromptRequest', required: ['name', 'prompt'] })
  .openapi('CreateTextPromptRequest')

const CreatePromptRequestSchema = z
  .xor([CreateChatPromptRequestSchema, CreateTextPromptRequestSchema])
  .openapi({ title: 'CreatePromptRequest' })
  .openapi('CreatePromptRequest')

const PromptSchema: z.ZodType<PromptType> = z
  .lazy(() =>
    z
      .xor([
        z
          .object({ type: z.literal('chat').exactOptional() })
          .openapi({ required: [] })
          .and(ChatPromptSchema)
          .openapi({ required: ['type'], title: 'ChatPrompt' }),
        z
          .object({ type: z.literal('text').exactOptional() })
          .openapi({ required: [] })
          .and(TextPromptSchema)
          .openapi({ required: ['type'], title: 'TextPrompt' }),
      ])
      .openapi({ title: 'Prompt' }),
  )
  .openapi('Prompt')

const ScimFeatureSupportSchema = z
  .object({ supported: z.boolean() })
  .openapi({ title: 'ScimFeatureSupport', required: ['supported'] })
  .openapi('ScimFeatureSupport')

const BulkConfigSchema = z
  .object({ supported: z.boolean(), maxOperations: z.int(), maxPayloadSize: z.int() })
  .openapi({ title: 'BulkConfig', required: ['supported', 'maxOperations', 'maxPayloadSize'] })
  .openapi('BulkConfig')

const FilterConfigSchema = z
  .object({ supported: z.boolean(), maxResults: z.int() })
  .openapi({ title: 'FilterConfig', required: ['supported', 'maxResults'] })
  .openapi('FilterConfig')

const AuthenticationSchemeSchema = z
  .object({
    name: z.string(),
    description: z.string(),
    specUri: z.string(),
    type: z.string(),
    primary: z.boolean(),
  })
  .openapi({
    title: 'AuthenticationScheme',
    required: ['name', 'description', 'specUri', 'type', 'primary'],
  })
  .openapi('AuthenticationScheme')

const ResourceMetaSchema = z
  .object({ resourceType: z.string(), location: z.string() })
  .openapi({ title: 'ResourceMeta', required: ['resourceType', 'location'] })
  .openapi('ResourceMeta')

const ServiceProviderConfigSchema = z
  .object({
    schemas: z.array(z.string()),
    documentationUri: z.string(),
    patch: ScimFeatureSupportSchema,
    bulk: BulkConfigSchema,
    filter: FilterConfigSchema,
    changePassword: ScimFeatureSupportSchema,
    sort: ScimFeatureSupportSchema,
    etag: ScimFeatureSupportSchema,
    authenticationSchemes: z.array(AuthenticationSchemeSchema),
    meta: ResourceMetaSchema,
  })
  .openapi({
    title: 'ServiceProviderConfig',
    required: [
      'schemas',
      'documentationUri',
      'patch',
      'bulk',
      'filter',
      'changePassword',
      'sort',
      'etag',
      'authenticationSchemes',
      'meta',
    ],
  })
  .openapi('ServiceProviderConfig')

const SchemaExtensionSchema = z
  .object({ schema: z.string(), required: z.boolean() })
  .openapi({ title: 'SchemaExtension', required: ['schema', 'required'] })
  .openapi('SchemaExtension')

const ResourceTypeSchema = z
  .object({
    schemas: z.array(z.string()).nullable().exactOptional(),
    id: z.string(),
    name: z.string(),
    endpoint: z.string(),
    description: z.string(),
    schema: z.string(),
    schemaExtensions: z.array(SchemaExtensionSchema),
    meta: ResourceMetaSchema,
  })
  .openapi({
    title: 'ResourceType',
    required: ['id', 'name', 'endpoint', 'description', 'schema', 'schemaExtensions', 'meta'],
  })
  .openapi('ResourceType')

const ResourceTypesResponseSchema = z
  .object({
    schemas: z.array(z.string()),
    totalResults: z.int(),
    Resources: z.array(ResourceTypeSchema),
  })
  .openapi({ title: 'ResourceTypesResponse', required: ['schemas', 'totalResults', 'Resources'] })
  .openapi('ResourceTypesResponse')

const SchemaResourceSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    attributes: z.array(z.any()),
    meta: ResourceMetaSchema,
  })
  .openapi({
    title: 'SchemaResource',
    required: ['id', 'name', 'description', 'attributes', 'meta'],
  })
  .openapi('SchemaResource')

const SchemasResponseSchema = z
  .object({
    schemas: z.array(z.string()),
    totalResults: z.int(),
    Resources: z.array(SchemaResourceSchema),
  })
  .openapi({ title: 'SchemasResponse', required: ['schemas', 'totalResults', 'Resources'] })
  .openapi('SchemasResponse')

const ScimNameSchema = z
  .object({ formatted: z.string().nullable().exactOptional() })
  .openapi({ title: 'ScimName', required: [] })
  .openapi('ScimName')

const ScimEmailSchema = z
  .object({ primary: z.boolean(), value: z.string(), type: z.string() })
  .openapi({ title: 'ScimEmail', required: ['primary', 'value', 'type'] })
  .openapi('ScimEmail')

const UserMetaSchema = z
  .object({
    resourceType: z.string(),
    created: z.string().nullable().exactOptional(),
    lastModified: z.string().nullable().exactOptional(),
  })
  .openapi({ title: 'UserMeta', required: ['resourceType'] })
  .openapi('UserMeta')

const ScimUserSchema = z
  .object({
    schemas: z.array(z.string()),
    id: z.string(),
    userName: z.string(),
    name: ScimNameSchema,
    emails: z.array(ScimEmailSchema),
    meta: UserMetaSchema,
  })
  .openapi({ title: 'ScimUser', required: ['schemas', 'id', 'userName', 'name', 'emails', 'meta'] })
  .openapi('ScimUser')

const ScimUsersListResponseSchema = z
  .object({
    schemas: z.array(z.string()),
    totalResults: z.int(),
    startIndex: z.int(),
    itemsPerPage: z.int(),
    Resources: z.array(ScimUserSchema),
  })
  .openapi({
    title: 'ScimUsersListResponse',
    required: ['schemas', 'totalResults', 'startIndex', 'itemsPerPage', 'Resources'],
  })
  .openapi('ScimUsersListResponse')

const EmptyResponseSchema = z
  .object({})
  .openapi({ title: 'EmptyResponse', description: 'Empty response for 204 No Content responses' })
  .openapi('EmptyResponse')

const ScoreConfigsSchema = z
  .object({ data: z.array(ScoreConfigSchema), meta: UtilsMetaResponseSchema })
  .openapi({ title: 'ScoreConfigs', required: ['data', 'meta'] })
  .openapi('ScoreConfigs')

const CreateScoreConfigRequestSchema = z
  .object({
    name: z
      .string()
      .openapi({
        description:
          'Name of the score config. Max 80 characters. Only letters, numbers, underscores, spaces, periods, parentheses, and hyphens are allowed.',
      }),
    dataType: ScoreConfigDataTypeSchema,
    categories: z
      .array(ConfigCategorySchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Configure custom categories for categorical scores. Pass a list of objects with `label` and `value` properties. Categories are autogenerated for boolean configs and cannot be passed',
      }),
    minValue: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Configure a minimum value for numerical scores. If not set, the minimum value defaults to -∞',
      }),
    maxValue: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Configure a maximum value for numerical scores. If not set, the maximum value defaults to +∞',
      }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Description is shown across the Langfuse UI and can be used to e.g. explain the config categories in detail, why a numeric range was set, or provide additional context on config name or usage',
      }),
  })
  .openapi({ title: 'CreateScoreConfigRequest', required: ['name', 'dataType'] })
  .openapi('CreateScoreConfigRequest')

const UpdateScoreConfigRequestSchema = z
  .object({
    isArchived: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The status of the score config showing if it is archived or not' }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Name of the score config. Max 80 characters. Only letters, numbers, underscores, spaces, periods, parentheses, and hyphens are allowed.',
      }),
    categories: z
      .array(ConfigCategorySchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Configure custom categories for categorical scores. Pass a list of objects with `label` and `value` properties. Categories are autogenerated for boolean configs and cannot be passed',
      }),
    minValue: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Configure a minimum value for numerical scores. If not set, the minimum value defaults to -∞',
      }),
    maxValue: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Configure a maximum value for numerical scores. If not set, the maximum value defaults to +∞',
      }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Description is shown across the Langfuse UI and can be used to e.g. explain the config categories in detail, why a numeric range was set, or provide additional context on config name or usage',
      }),
  })
  .openapi({ title: 'UpdateScoreConfigRequest', required: [] })
  .openapi('UpdateScoreConfigRequest')

const CreateScoreSourceSchema = z
  .enum(['API', 'ANNOTATION'])
  .openapi({
    title: 'CreateScoreSource',
    description:
      'Source values accepted when creating a score via the public REST API.\nEVAL is reserved for internal evaluator outputs and is intentionally not\nexposed here — use commons.ScoreSource when reading scores.',
  })
  .openapi('CreateScoreSource')

const CreateScoreRequestSchema = z
  .object({
    id: z.string().nullable().exactOptional(),
    traceId: z.string().nullable().exactOptional(),
    sessionId: z.string().nullable().exactOptional(),
    observationId: z.string().nullable().exactOptional(),
    datasetRunId: z.string().nullable().exactOptional(),
    name: z.string(),
    value: CreateScoreValueSchema.openapi({
      description:
        'The value of the score. Must be passed as string for categorical and text scores, and numeric for boolean and numeric scores. Boolean score values must equal either 1 or 0 (true or false). Text score values must be between 1 and 500 characters.',
    }),
    comment: z.string().nullable().exactOptional(),
    metadata: z.looseObject({}).nullable().exactOptional(),
    environment: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The environment of the score. Can be any lowercase alphanumeric string with hyphens and underscores that does not start with 'langfuse'.",
      }),
    queueId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The annotation queue referenced by the score. Indicates if score was initially created while processing annotation queue.',
      }),
    dataType: ScoreDataTypeSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          'The data type of the score. When passing a configId this field is inferred. Otherwise, this field must be passed or will default to numeric.',
      }),
    configId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Reference a score config on a score. The unique langfuse identifier of a score config. When passing this field, the dataType and stringValue fields are automatically populated.',
      }),
    source: CreateScoreSourceSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          'The source of the score. Defaults to API. Set to ANNOTATION to prefill scores (e.g. from an LLM) for a human reviewer to verify in an annotation queue. When source is ANNOTATION, a configId is required unless dataType is CORRECTION. EVAL is reserved for internal evaluator outputs and is not accepted on this endpoint.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The timestamp of the score, as an ISO 8601 datetime with a timezone offset. Defaults to the time the request is received. To update an existing score, send it again with the same id and timestamp.',
      }),
  })
  .openapi({ title: 'CreateScoreRequest', required: ['name', 'value'] })
  .openapi('CreateScoreRequest')

const CreateScoresRequestSchema = z
  .array(CreateScoreRequestSchema)
  .openapi({ title: 'CreateScoresRequest' })
  .openapi('CreateScoresRequest')

const CreateScoreBatchErrorSchema = z
  .object({ message: z.string() })
  .openapi({ title: 'CreateScoreBatchError', required: ['message'] })
  .openapi('CreateScoreBatchError')

const CreateScoreBatchResultsSchema = z
  .object({ accepted: z.int(), rejected: z.int(), errors: z.array(CreateScoreBatchErrorSchema) })
  .openapi({
    title: 'CreateScoreBatchResults',
    description: 'Acceptance counts and errors (HTTP 207).',
    required: ['accepted', 'rejected', 'errors'],
  })
  .openapi('CreateScoreBatchResults')

const CreateScoreBatchResponseSchema = z
  .object({ message: z.literal('Accepted') })
  .openapi({
    title: 'CreateScoreBatchResponse',
    description: 'Batch accepted (HTTP 202).',
    required: ['message'],
  })
  .openapi('CreateScoreBatchResponse')

const CreateScoresResponseSchema = z
  .xor([CreateScoreBatchResultsSchema, CreateScoreBatchResponseSchema])
  .openapi({ title: 'CreateScoresResponse' })
  .openapi('CreateScoresResponse')

const GetScoresV3MetaSchema = UtilsCursorMetaResponseSchema.and(
  z.object({ limit: z.int() }).openapi({ required: ['limit'] }),
)
  .openapi({ title: 'GetScoresV3Meta', required: ['limit'] })
  .openapi('GetScoresV3Meta')

const GetScoresV3ResponseSchema = z
  .object({ data: z.array(ScoreV3Schema), meta: GetScoresV3MetaSchema })
  .openapi({ title: 'GetScoresV3Response', required: ['data', 'meta'] })
  .openapi('GetScoresV3Response')

const ScoreBodySchema = z
  .object({
    id: z.string().nullable().exactOptional(),
    traceId: z.string().nullable().exactOptional(),
    sessionId: z.string().nullable().exactOptional(),
    observationId: z.string().nullable().exactOptional(),
    datasetRunId: z.string().nullable().exactOptional(),
    name: z
      .string()
      .openapi({
        description: 'The name of the score. Always overrides "output" for correction scores.',
      }),
    environment: z.string().nullable().exactOptional(),
    queueId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The annotation queue referenced by the score. Indicates if score was initially created while processing annotation queue.',
      }),
    value: CreateScoreValueSchema.openapi({
      description:
        'The value of the score. Must be passed as string for categorical and text scores, and numeric for boolean and numeric scores. Boolean score values must equal either 1 or 0 (true or false). Text score values must be between 1 and 500 characters.',
    }),
    comment: z.string().nullable().exactOptional(),
    metadata: z.any().nullable().exactOptional(),
    dataType: ScoreDataTypeSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          "When set, must match the score value's type. If not set, will be inferred from the score value or config",
      }),
    configId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Reference a score config on a score. When set, the score name must equal the config name and scores must comply with the config's range and data type. For categorical scores, the value must map to a config category. Numeric scores might be constrained by the score config's max and min values",
      }),
  })
  .openapi({ title: 'ScoreBody', required: ['name', 'value'] })
  .openapi('ScoreBody')

const SkillMetaSchema = z
  .object({
    name: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    latestVersion: z.int(),
    latestVersionCreatedAt: z.iso.datetime({ offset: true }),
    latestVersionLastUpdatedAt: z.iso.datetime({ offset: true }),
    productionVersion: z
      .int()
      .nullable()
      .openapi({
        description: 'Version assigned the production label, or null when no version is assigned.',
      }),
  })
  .openapi({
    title: 'SkillMeta',
    required: [
      'name',
      'description',
      'tags',
      'latestVersion',
      'latestVersionCreatedAt',
      'latestVersionLastUpdatedAt',
      'productionVersion',
    ],
  })
  .openapi('SkillMeta')

const SkillListPaginationSchema = UtilsMetaResponseSchema.and(
  z.object({ hasNextPage: z.boolean() }).openapi({ required: ['hasNextPage'] }),
)
  .openapi({ title: 'SkillListPagination', required: ['hasNextPage'] })
  .openapi('SkillListPagination')

const SkillMetaListResponseSchema = z
  .object({ data: z.array(SkillMetaSchema), meta: SkillListPaginationSchema })
  .openapi({ title: 'SkillMetaListResponse', required: ['data', 'meta'] })
  .openapi('SkillMetaListResponse')

const SkillVersionFileInputSchema = z
  .object({
    path: z.string(),
    content: z
      .string()
      .openapi({
        description: 'UTF-8 text content. The server computes the hash and byte length.',
      }),
  })
  .openapi({ title: 'SkillVersionFileInput', required: ['path', 'content'] })
  .openapi('SkillVersionFileInput')

const SkillVersionFileReferenceSchema = z
  .object({
    path: z.string(),
    sha256Hash: z
      .string()
      .openapi({
        description:
          'Canonical base64-encoded SHA-256 from a skill file manifest. The content must already exist in this project.',
      }),
  })
  .openapi({ title: 'SkillVersionFileReference', required: ['path', 'sha256Hash'] })
  .openapi('SkillVersionFileReference')

const SkillVersionFileCreateInputSchema = z
  .xor([SkillVersionFileInputSchema, SkillVersionFileReferenceSchema])
  .openapi({
    title: 'SkillVersionFileCreateInput',
    description: 'Provide exactly one of content or sha256Hash for each path.',
  })
  .openapi('SkillVersionFileCreateInput')

const CreateSkillVersionRequestSchema = z
  .object({
    files: z.array(SkillVersionFileCreateInputSchema),
    commitMessage: z.string().nullable().exactOptional(),
  })
  .openapi({ title: 'CreateSkillVersionRequest', required: ['files'] })
  .openapi('CreateSkillVersionRequest')

const SkillFileSchema = z
  .object({
    id: z.string(),
    path: z.string(),
    blobId: z.string(),
    sha256Hash: z.string(),
    contentType: z.string(),
    contentLength: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    content: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'UTF-8 text content, included when fetching a skill with includeContent enabled.',
      }),
  })
  .openapi({
    title: 'SkillFile',
    required: ['id', 'path', 'blobId', 'sha256Hash', 'contentType', 'contentLength'],
  })
  .openapi('SkillFile')

const SkillFileContentSchema = z
  .object({ sha256Hash: z.string(), content: z.string() })
  .openapi({ title: 'SkillFileContent', required: ['sha256Hash', 'content'] })
  .openapi('SkillFileContent')

const SkillFileContentsResponseSchema = z
  .object({ data: z.array(SkillFileContentSchema) })
  .openapi({ title: 'SkillFileContentsResponse', required: ['data'] })
  .openapi('SkillFileContentsResponse')

const SkillVersionSchema = z
  .object({
    id: z.string(),
    createdAt: z.iso.datetime({ offset: true }),
    updatedAt: z.iso.datetime({ offset: true }),
    projectId: z.string(),
    createdBy: z.string(),
    name: z.string(),
    description: z.string(),
    frontmatter: z.any(),
    version: z.int(),
    tags: z.array(z.string()),
    labels: z.array(z.string()),
    commitMessage: z.string().nullable(),
    files: z.array(SkillFileSchema),
  })
  .openapi({
    title: 'SkillVersion',
    required: [
      'id',
      'createdAt',
      'updatedAt',
      'projectId',
      'createdBy',
      'name',
      'description',
      'frontmatter',
      'version',
      'tags',
      'labels',
      'commitMessage',
      'files',
    ],
  })
  .openapi('SkillVersion')

const UpdateSkillRequestSchema = z
  .object({
    tags: z
      .array(z.string())
      .openapi({
        description:
          'The complete set of tags to apply to every version of the skill. Pass an empty list to clear all tags.',
      }),
  })
  .openapi({ title: 'UpdateSkillRequest', required: ['tags'] })
  .openapi('UpdateSkillRequest')

const UpdateSkillLabelsRequestSchema = z
  .object({ labels: z.array(z.string()) })
  .openapi({ title: 'UpdateSkillLabelsRequest', required: ['labels'] })
  .openapi('UpdateSkillLabelsRequest')

const DeleteSkillVersionResponseSchema = z
  .object({ deleted: z.boolean() })
  .openapi({ title: 'DeleteSkillVersionResponse', required: ['deleted'] })
  .openapi('DeleteSkillVersionResponse')

const DeleteTraceResponseSchema = z
  .object({ message: z.string() })
  .openapi({ title: 'DeleteTraceResponse', required: ['message'] })
  .openapi('DeleteTraceResponse')

const UnstableDashboardWidgetViewSchema = z
  .enum(['observations', 'scores-numeric', 'scores-boolean', 'scores-categorical'])
  .openapi({ title: 'unstableDashboardWidgetView' })
  .openapi('UnstableDashboardWidgetView')

const UnstableDashboardWidgetViewWithLegacySchema = z
  .enum(['observations', 'scores-numeric', 'scores-boolean', 'scores-categorical', 'traces'])
  .openapi({
    title: 'unstableDashboardWidgetViewWithLegacy',
    description:
      'Widget data view. Responses may include the legacy `traces` value for\nwidgets created before this API existed.',
  })
  .openapi('UnstableDashboardWidgetViewWithLegacy')

const UnstableDashboardWidgetChartTypeSchema = z
  .enum([
    'LINE_TIME_SERIES',
    'AREA_TIME_SERIES',
    'BAR_TIME_SERIES',
    'HORIZONTAL_BAR',
    'VERTICAL_BAR',
    'PIE',
    'NUMBER',
    'HISTOGRAM',
    'PIVOT_TABLE',
  ])
  .openapi({ title: 'unstableDashboardWidgetChartType' })
  .openapi('UnstableDashboardWidgetChartType')

const UnstableDashboardWidgetMetricAggregationSchema = z
  .enum([
    'sum',
    'avg',
    'count',
    'max',
    'min',
    'p50',
    'p75',
    'p90',
    'p95',
    'p99',
    'histogram',
    'uniq',
  ])
  .openapi({ title: 'unstableDashboardWidgetMetricAggregation' })
  .openapi('UnstableDashboardWidgetMetricAggregation')

const UnstableDashboardWidgetDimensionSchema = z
  .object({ field: z.string() })
  .openapi({ title: 'unstableDashboardWidgetDimension', required: ['field'] })
  .openapi('UnstableDashboardWidgetDimension')

const UnstableDashboardWidgetMetricSchema = z
  .object({ measure: z.string(), agg: UnstableDashboardWidgetMetricAggregationSchema })
  .openapi({ title: 'unstableDashboardWidgetMetric', required: ['measure', 'agg'] })
  .openapi('UnstableDashboardWidgetMetric')

const UnstableDashboardWidgetFilterSchema = z
  .object({
    column: z.string(),
    operator: z.string(),
    type: z.string(),
    value: z.any().nullable().exactOptional(),
    key: z.string().nullable().exactOptional(),
  })
  .openapi({
    title: 'unstableDashboardWidgetFilter',
    description:
      'A filter in Langfuse filter-state shape. The `value` shape and the\nallowed operators depend on `type`:\n\n| `type` | `value` | operators |\n|---|---|---|\n| `string` | string | `=`, `contains`, `does not contain`, `starts with`, `ends with` |\n| `number` | number | `=`, `>`, `<`, `>=`, `<=` |\n| `datetime` | ISO datetime string | `>`, `<`, `>=`, `<=` |\n| `boolean` | boolean | `=`, `<>` |\n| `null` | `""` | `is null`, `is not null` |\n| `stringOptions` | list of strings | `any of`, `none of` |\n| `arrayOptions` | list of strings | `any of`, `none of`, `all of` |\n| `categoryOptions` | list of strings (requires `key`) | `any of`, `none of` |\n| `stringObject` | string (requires `key`, e.g. a metadata key) | same as `string` |\n| `numberObject` | number (requires `key`, e.g. a score name) | same as `number` |\n| `booleanObject` | boolean (requires `key`) | `=`, `<>` |',
    required: ['column', 'operator', 'type'],
  })
  .openapi('UnstableDashboardWidgetFilter')

const UnstableDashboardWidgetSortOrderSchema = z
  .enum(['ASC', 'DESC'])
  .openapi({ title: 'unstableDashboardWidgetSortOrder' })
  .openapi('UnstableDashboardWidgetSortOrder')

const UnstableDashboardWidgetDefaultSortSchema = z
  .object({ column: z.string(), order: UnstableDashboardWidgetSortOrderSchema })
  .openapi({ title: 'unstableDashboardWidgetDefaultSort', required: ['column', 'order'] })
  .openapi('UnstableDashboardWidgetDefaultSort')

const UnstableDashboardWidgetChartConfigSchema = z
  .object({
    type: UnstableDashboardWidgetChartTypeSchema,
    row_limit: z.int().nullable().exactOptional(),
    show_value_labels: z.boolean().nullable().exactOptional(),
    bins: z.int().nullable().exactOptional(),
    defaultSort: UnstableDashboardWidgetDefaultSortSchema.nullable().exactOptional(),
  })
  .openapi({
    title: 'unstableDashboardWidgetChartConfig',
    description:
      'Chart-specific widget configuration.\n\n`type` must match the top-level `chartType`.\n`row_limit` applies to total-value charts and pivot tables.\n`bins` applies to histograms.\n`defaultSort` applies to pivot tables.',
    required: ['type'],
  })
  .openapi('UnstableDashboardWidgetChartConfig')

const UnstableDashboardWidgetChartConfigInputSchema = z
  .object({
    type: UnstableDashboardWidgetChartTypeSchema.nullable().exactOptional(),
    row_limit: z.int().nullable().exactOptional(),
    show_value_labels: z.boolean().nullable().exactOptional(),
    bins: z.int().nullable().exactOptional(),
    defaultSort: UnstableDashboardWidgetDefaultSortSchema.nullable().exactOptional(),
  })
  .openapi({
    title: 'unstableDashboardWidgetChartConfigInput',
    description:
      "Input-side chart config. `type` is optional and defaults to the\nwidget's `chartType`; when given it must match.",
    required: [],
  })
  .openapi('UnstableDashboardWidgetChartConfigInput')

const UnstableCreateDashboardWidgetRequestSchema = z
  .object({
    name: z.string(),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Defaults to an empty string.' }),
    view: UnstableDashboardWidgetViewSchema,
    dimensions: z.array(UnstableDashboardWidgetDimensionSchema),
    metrics: z.array(UnstableDashboardWidgetMetricSchema),
    filters: z.array(UnstableDashboardWidgetFilterSchema),
    chartType: UnstableDashboardWidgetChartTypeSchema,
    chartConfig: UnstableDashboardWidgetChartConfigInputSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Defaults to the plain config for `chartType`.' }),
  })
  .openapi({
    title: 'unstableCreateDashboardWidgetRequest',
    required: ['name', 'view', 'dimensions', 'metrics', 'filters', 'chartType'],
  })
  .openapi('UnstableCreateDashboardWidgetRequest')

const UnstableUpdateDashboardWidgetRequestSchema = z
  .object({
    name: z.string().nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    view: UnstableDashboardWidgetViewSchema.nullable().exactOptional(),
    dimensions: z.array(UnstableDashboardWidgetDimensionSchema).nullable().exactOptional(),
    metrics: z.array(UnstableDashboardWidgetMetricSchema).nullable().exactOptional(),
    filters: z.array(UnstableDashboardWidgetFilterSchema).nullable().exactOptional(),
    chartType: UnstableDashboardWidgetChartTypeSchema.nullable().exactOptional(),
    chartConfig: UnstableDashboardWidgetChartConfigInputSchema.nullable().exactOptional(),
  })
  .openapi({ title: 'unstableUpdateDashboardWidgetRequest', required: [] })
  .openapi('UnstableUpdateDashboardWidgetRequest')

const UnstableDashboardWidgetSchema = z
  .object({
    id: z.string(),
    createdAt: z.iso.datetime({ offset: true }),
    updatedAt: z.iso.datetime({ offset: true }),
    name: z.string(),
    description: z.string(),
    view: UnstableDashboardWidgetViewWithLegacySchema,
    dimensions: z.array(UnstableDashboardWidgetDimensionSchema),
    metrics: z.array(UnstableDashboardWidgetMetricSchema),
    filters: z.array(UnstableDashboardWidgetFilterSchema),
    chartType: UnstableDashboardWidgetChartTypeSchema,
    chartConfig: UnstableDashboardWidgetChartConfigSchema,
  })
  .openapi({
    title: 'unstableDashboardWidget',
    required: [
      'id',
      'createdAt',
      'updatedAt',
      'name',
      'description',
      'view',
      'dimensions',
      'metrics',
      'filters',
      'chartType',
      'chartConfig',
    ],
  })
  .openapi('UnstableDashboardWidget')

const UnstableDashboardWidgetListSchema = z
  .object({ data: z.array(UnstableDashboardWidgetSchema), meta: UtilsMetaResponseSchema })
  .openapi({ title: 'unstableDashboardWidgetList', required: ['data', 'meta'] })
  .openapi('UnstableDashboardWidgetList')

const UnstableDeleteDashboardWidgetResponseSchema = z
  .object({ message: z.string() })
  .openapi({ title: 'unstableDeleteDashboardWidgetResponse', required: ['message'] })
  .openapi('UnstableDeleteDashboardWidgetResponse')

const UnstableWidgetPlacementSchema = z
  .object({
    id: z.string(),
    widgetId: z.string(),
    x: z.int(),
    y: z.int(),
    width: z.int(),
    height: z.int(),
  })
  .openapi({
    title: 'unstableWidgetPlacement',
    required: ['id', 'widgetId', 'x', 'y', 'width', 'height'],
  })
  .openapi('UnstableWidgetPlacement')

const UnstablePresetPlacementSchema = z
  .object({
    id: z.string(),
    presetId: z.string(),
    x: z.int(),
    y: z.int(),
    width: z.int(),
    height: z.int(),
  })
  .openapi({
    title: 'unstablePresetPlacement',
    required: ['id', 'presetId', 'x', 'y', 'width', 'height'],
  })
  .openapi('UnstablePresetPlacement')

const UnstableDashboardPlacementSchema = z
  .xor([
    z
      .object({ type: z.literal('widget').exactOptional() })
      .openapi({ required: [] })
      .and(UnstableWidgetPlacementSchema)
      .openapi({ required: ['type'], title: 'UnstableWidgetPlacement' }),
    z
      .object({ type: z.literal('preset').exactOptional() })
      .openapi({ required: [] })
      .and(UnstablePresetPlacementSchema)
      .openapi({ required: ['type'], title: 'UnstablePresetPlacement' }),
  ])
  .openapi({
    title: 'unstableDashboardPlacement',
    description:
      "A tile on the dashboard's 12-column grid. `x`/`y` are the tile's\ntop-left cell (0-based; `y` grows downward), `width`/`height` its size\nin cells. The UI default tile is 6x6 (half width). Overlapping tiles\nare not rejected; prefer appending below existing tiles (or omit the\nposition on create to let the server do it).",
  })
  .openapi('UnstableDashboardPlacement')

const UnstableCreateWidgetPlacementSchema = z
  .object({
    id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Server-generated when omitted.' }),
    widgetId: z.string(),
    x: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Grid column (12-column grid). Defaults to `0`.' }),
    y: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Grid row. Defaults to the first row below all existing tiles.' }),
    width: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Width in grid columns. Defaults to `6`.' }),
    height: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Height in grid rows. Defaults to `6`.' }),
  })
  .openapi({ title: 'unstableCreateWidgetPlacement', required: ['widgetId'] })
  .openapi('UnstableCreateWidgetPlacement')

const UnstableCreatePresetPlacementSchema = z
  .object({
    id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Server-generated when omitted.' }),
    presetId: z.string(),
    x: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Grid column (12-column grid). Defaults to `0`.' }),
    y: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Grid row. Defaults to the first row below all existing tiles.' }),
    width: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Width in grid columns. Defaults to `6`.' }),
    height: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Height in grid rows. Defaults to `6`.' }),
  })
  .openapi({ title: 'unstableCreatePresetPlacement', required: ['presetId'] })
  .openapi('UnstableCreatePresetPlacement')

const UnstableCreateDashboardPlacementRequestSchema = z
  .xor([
    z
      .object({ type: z.literal('widget').exactOptional() })
      .openapi({ required: [] })
      .and(UnstableCreateWidgetPlacementSchema)
      .openapi({ required: ['type'], title: 'UnstableCreateWidgetPlacement' }),
    z
      .object({ type: z.literal('preset').exactOptional() })
      .openapi({ required: [] })
      .and(UnstableCreatePresetPlacementSchema)
      .openapi({ required: ['type'], title: 'UnstableCreatePresetPlacement' }),
  ])
  .openapi({ title: 'unstableCreateDashboardPlacementRequest' })
  .openapi('UnstableCreateDashboardPlacementRequest')

const UnstableUpdateDashboardPlacementRequestSchema = z
  .object({
    x: z.int().nullable().exactOptional().openapi({ description: 'Grid column (12-column grid).' }),
    y: z.int().nullable().exactOptional().openapi({ description: 'Grid row.' }),
    width: z.int().nullable().exactOptional().openapi({ description: 'Width in grid columns.' }),
    height: z.int().nullable().exactOptional().openapi({ description: 'Height in grid rows.' }),
  })
  .openapi({ title: 'unstableUpdateDashboardPlacementRequest', required: [] })
  .openapi('UnstableUpdateDashboardPlacementRequest')

const UnstableDeleteDashboardPlacementResponseSchema = z
  .object({ message: z.string() })
  .openapi({ title: 'unstableDeleteDashboardPlacementResponse', required: ['message'] })
  .openapi('UnstableDeleteDashboardPlacementResponse')

const UnstableDashboardDefinitionSchema = z
  .object({ widgets: z.array(UnstableDashboardPlacementSchema) })
  .openapi({ title: 'unstableDashboardDefinition', required: ['widgets'] })
  .openapi('UnstableDashboardDefinition')

const UnstableDashboardSchema = z
  .object({
    id: z.string(),
    createdAt: z.iso.datetime({ offset: true }),
    updatedAt: z.iso.datetime({ offset: true }),
    name: z.string(),
    description: z.string(),
    definition: UnstableDashboardDefinitionSchema,
    filters: z
      .array(UnstableDashboardWidgetFilterSchema)
      .openapi({ description: 'Dashboard-level filters applied to all widgets on the dashboard.' }),
  })
  .openapi({
    title: 'unstableDashboard',
    required: ['id', 'createdAt', 'updatedAt', 'name', 'description', 'definition', 'filters'],
  })
  .openapi('UnstableDashboard')

const UnstableDashboardListSchema = z
  .object({ data: z.array(UnstableDashboardSchema), meta: UtilsMetaResponseSchema })
  .openapi({ title: 'unstableDashboardList', required: ['data', 'meta'] })
  .openapi('UnstableDashboardList')

const UnstableCreateDashboardRequestSchema = z
  .object({
    name: z.string(),
    description: z.string().nullable().exactOptional(),
    definition: UnstableDashboardDefinitionSchema.nullable().exactOptional(),
    filters: z.array(UnstableDashboardWidgetFilterSchema).nullable().exactOptional(),
  })
  .openapi({ title: 'unstableCreateDashboardRequest', required: ['name'] })
  .openapi('UnstableCreateDashboardRequest')

const UnstableUpdateDashboardRequestSchema = z
  .object({
    name: z.string().nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    definition: UnstableDashboardDefinitionSchema.nullable().exactOptional(),
    filters: z.array(UnstableDashboardWidgetFilterSchema).nullable().exactOptional(),
  })
  .openapi({ title: 'unstableUpdateDashboardRequest', required: [] })
  .openapi('UnstableUpdateDashboardRequest')

const UnstableDeleteDashboardResponseSchema = z
  .object({ message: z.string() })
  .openapi({ title: 'unstableDeleteDashboardResponse', required: ['message'] })
  .openapi('UnstableDeleteDashboardResponse')

const UnstablePublicApiErrorCodeSchema = z
  .enum([
    'authentication_failed',
    'access_denied',
    'invalid_request',
    'invalid_query',
    'invalid_body',
    'resource_not_found',
    'conflict',
    'rate_limited',
    'method_not_allowed',
    'internal_error',
  ])
  .openapi({
    title: 'unstablePublicApiErrorCode',
    description: 'Machine-readable error code returned by unstable public API endpoints.',
  })
  .openapi('UnstablePublicApiErrorCode')

const UnstablePublicApiValidationIssueSchema = z
  .object({ code: z.string(), message: z.string(), path: z.array(z.any()) })
  .openapi({
    title: 'unstablePublicApiValidationIssue',
    description: 'A validation issue returned for malformed request bodies or query parameters.',
    required: ['code', 'message', 'path'],
  })
  .openapi('UnstablePublicApiValidationIssue')

const UnstablePublicApiErrorDetailsSchema = z
  .object({
    issues: z.array(UnstablePublicApiValidationIssueSchema).nullable().exactOptional(),
    field: z.string().nullable().exactOptional(),
    column: z.string().nullable().exactOptional(),
    invalidValues: z.array(z.string()).nullable().exactOptional(),
    allowedValues: z.array(z.string()).nullable().exactOptional(),
    value: z.string().nullable().exactOptional(),
    retryAfterSeconds: z.int().nullable().exactOptional(),
    limit: z.int().nullable().exactOptional(),
    remaining: z.int().nullable().exactOptional(),
    resetAt: z.string().nullable().exactOptional(),
  })
  .openapi({
    title: 'unstablePublicApiErrorDetails',
    description: 'Optional structured context attached to an error.',
    required: [],
  })
  .openapi('UnstablePublicApiErrorDetails')

const UnstablePublicApiErrorSchema = z
  .object({
    message: z.string().openapi({ description: 'Human-readable description of the failure.' }),
    code: UnstablePublicApiErrorCodeSchema.openapi({ description: 'Machine-readable error code.' }),
    details: UnstablePublicApiErrorDetailsSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Optional structured error context.' }),
  })
  .openapi({
    title: 'unstablePublicApiError',
    description: 'Standard error envelope for unstable public API endpoints.',
    required: ['message', 'code'],
  })
  .openapi('UnstablePublicApiError')

const UnstableTopicsOrderBySchema = z
  .enum(['traceCount.desc', 'traceCount.asc', 'name.asc', 'name.desc'])
  .openapi({ title: 'unstableTopicsOrderBy' })
  .openapi('UnstableTopicsOrderBy')

const UnstableTopicFacetPublishedRunSchema = z
  .object({
    id: z.string(),
    completedAt: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    topicCount: z.int(),
  })
  .openapi({ title: 'unstableTopicFacetPublishedRun', required: ['id', 'topicCount'] })
  .openapi('UnstableTopicFacetPublishedRun')

const UnstableTopicFacetSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    isBuiltIn: z.boolean(),
    active: z
      .boolean()
      .openapi({
        description:
          "Whether the facet is attached to the project's Topics rule. True for all facets if the project has no rule.",
      }),
    version: z.int().openapi({ description: 'Latest facet version.' }),
    prompt: z.string().openapi({ description: 'Prompt of the latest facet version.' }),
    publishedRun: UnstableTopicFacetPublishedRunSchema.nullable()
      .exactOptional()
      .openapi({
        description: "The run that produced the facet's current map. Null before the first map.",
      }),
  })
  .openapi({
    title: 'unstableTopicFacet',
    required: ['id', 'name', 'description', 'isBuiltIn', 'active', 'version', 'prompt'],
  })
  .openapi('UnstableTopicFacet')

const UnstableTopicFacetListSchema = z
  .object({ data: z.array(UnstableTopicFacetSchema), meta: UtilsMetaResponseSchema })
  .openapi({ title: 'unstableTopicFacetList', required: ['data', 'meta'] })
  .openapi('UnstableTopicFacetList')

const UnstableTopicFacetRefSchema = z
  .object({ id: z.string(), name: z.string(), version: z.int() })
  .openapi({ title: 'unstableTopicFacetRef', required: ['id', 'name', 'version'] })
  .openapi('UnstableTopicFacetRef')

const UnstableTopicWindowSchema = z
  .object({ from: z.iso.datetime({ offset: true }), to: z.iso.datetime({ offset: true }) })
  .openapi({ title: 'unstableTopicWindow', required: ['from', 'to'] })
  .openapi('UnstableTopicWindow')

const UnstableTopicSchema = z
  .object({
    id: z.string().openapi({ description: 'Stable topic id, kept across map updates.' }),
    versionId: z.string().openapi({ description: 'Id of this topic version.' }),
    name: z.string(),
    description: z.string(),
    facet: UnstableTopicFacetRefSchema,
    runId: z.string().openapi({ description: 'The run that produced this topic version.' }),
    traceCount: z
      .int()
      .openapi({
        description: 'Traces in the window whose current result for the facet is this topic.',
      }),
  })
  .openapi({
    title: 'unstableTopic',
    required: ['id', 'versionId', 'name', 'description', 'facet', 'runId', 'traceCount'],
  })
  .openapi('UnstableTopic')

const UnstableTopicWithStatusSchema = UnstableTopicSchema.and(
  z
    .object({
      inCurrentMap: z
        .boolean()
        .openapi({
          description: 'False for retired topics that still have assigned traces in the window.',
        }),
      window: UnstableTopicWindowSchema,
    })
    .openapi({ required: ['inCurrentMap', 'window'] }),
)
  .openapi({ title: 'unstableTopicWithStatus', required: ['inCurrentMap', 'window'] })
  .openapi('UnstableTopicWithStatus')

const UnstableTopicStatusCountsSchema = z
  .object({
    assigned: z.int(),
    outlier: z.int(),
    awaitingMap: z.int(),
    notApplicable: z.int(),
    insufficientInput: z.int(),
  })
  .openapi({
    title: 'unstableTopicStatusCounts',
    description: 'Traces in the window by their current result for one facet.',
    required: ['assigned', 'outlier', 'awaitingMap', 'notApplicable', 'insufficientInput'],
  })
  .openapi('UnstableTopicStatusCounts')

const UnstableTopicFacetCountsSchema = z
  .object({
    facet: UnstableTopicFacetRefSchema,
    publishedRunId: z.string().nullable().exactOptional(),
    counts: UnstableTopicStatusCountsSchema,
  })
  .openapi({ title: 'unstableTopicFacetCounts', required: ['facet', 'counts'] })
  .openapi('UnstableTopicFacetCounts')

const UnstableTopicListSchema = z
  .object({
    window: UnstableTopicWindowSchema,
    data: z.array(UnstableTopicSchema),
    facets: z.array(UnstableTopicFacetCountsSchema),
    meta: UtilsMetaResponseSchema,
  })
  .openapi({ title: 'unstableTopicList', required: ['window', 'data', 'facets', 'meta'] })
  .openapi('UnstableTopicList')

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const getApiPublicAnnotationQueuesRoute = createRoute({
  method: 'get',
  path: '/api/public/annotation-queues',
  tags: ['AnnotationQueues'],
  description: 'Get all annotation queues',
  operationId: 'annotationQueues_listQueues',
  request: {
    query: z.object({
      page: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            description: 'page number, starts at 1',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      limit: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'limit of items per page',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedAnnotationQueuesSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const postApiPublicAnnotationQueuesRoute = createRoute({
  method: 'post',
  path: '/api/public/annotation-queues',
  tags: ['AnnotationQueues'],
  description: 'Create an annotation queue',
  operationId: 'annotationQueues_createQueue',
  request: {
    body: {
      content: { 'application/json': { schema: CreateAnnotationQueueRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: AnnotationQueueSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicAnnotationQueuesQueueIdRoute = createRoute({
  method: 'get',
  path: '/api/public/annotation-queues/{queueId}',
  tags: ['AnnotationQueues'],
  description: 'Get an annotation queue by ID',
  operationId: 'annotationQueues_getQueue',
  request: {
    params: z.object({
      queueId: z
        .string()
        .openapi({
          param: {
            name: 'queueId',
            in: 'path',
            description: 'The unique identifier of the annotation queue',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: AnnotationQueueSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicAnnotationQueuesQueueIdItemsRoute = createRoute({
  method: 'get',
  path: '/api/public/annotation-queues/{queueId}/items',
  tags: ['AnnotationQueues'],
  description: 'Get items for a specific annotation queue',
  operationId: 'annotationQueues_listQueueItems',
  request: {
    params: z.object({
      queueId: z
        .string()
        .openapi({
          param: {
            name: 'queueId',
            in: 'path',
            description: 'The unique identifier of the annotation queue',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      status: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.enum(['PENDING', 'COMPLETED']).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description: 'Filter by status',
            required: false,
            schema: {
              title: 'AnnotationQueueStatus',
              type: 'string',
              enum: ['PENDING', 'COMPLETED'],
              nullable: true,
            },
          },
          title: 'AnnotationQueueStatus',
        }),
      page: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            description: 'page number, starts at 1',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      limit: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'limit of items per page',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedAnnotationQueueItemsSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const postApiPublicAnnotationQueuesQueueIdItemsRoute = createRoute({
  method: 'post',
  path: '/api/public/annotation-queues/{queueId}/items',
  tags: ['AnnotationQueues'],
  description: 'Add an item to an annotation queue',
  operationId: 'annotationQueues_createQueueItem',
  request: {
    params: z.object({
      queueId: z
        .string()
        .openapi({
          param: {
            name: 'queueId',
            in: 'path',
            description: 'The unique identifier of the annotation queue',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateAnnotationQueueItemRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: AnnotationQueueItemSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicAnnotationQueuesQueueIdItemsItemIdRoute = createRoute({
  method: 'get',
  path: '/api/public/annotation-queues/{queueId}/items/{itemId}',
  tags: ['AnnotationQueues'],
  description: 'Get a specific item from an annotation queue',
  operationId: 'annotationQueues_getQueueItem',
  request: {
    params: z.object({
      queueId: z
        .string()
        .openapi({
          param: {
            name: 'queueId',
            in: 'path',
            description: 'The unique identifier of the annotation queue',
            required: true,
            schema: { type: 'string' },
          },
        }),
      itemId: z
        .string()
        .openapi({
          param: {
            name: 'itemId',
            in: 'path',
            description: 'The unique identifier of the annotation queue item',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: AnnotationQueueItemSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const deleteApiPublicAnnotationQueuesQueueIdItemsItemIdRoute = createRoute({
  method: 'delete',
  path: '/api/public/annotation-queues/{queueId}/items/{itemId}',
  tags: ['AnnotationQueues'],
  description: 'Remove an item from an annotation queue',
  operationId: 'annotationQueues_deleteQueueItem',
  request: {
    params: z.object({
      queueId: z
        .string()
        .openapi({
          param: {
            name: 'queueId',
            in: 'path',
            description: 'The unique identifier of the annotation queue',
            required: true,
            schema: { type: 'string' },
          },
        }),
      itemId: z
        .string()
        .openapi({
          param: {
            name: 'itemId',
            in: 'path',
            description: 'The unique identifier of the annotation queue item',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: DeleteAnnotationQueueItemResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const patchApiPublicAnnotationQueuesQueueIdItemsItemIdRoute = createRoute({
  method: 'patch',
  path: '/api/public/annotation-queues/{queueId}/items/{itemId}',
  tags: ['AnnotationQueues'],
  description: 'Update an annotation queue item',
  operationId: 'annotationQueues_updateQueueItem',
  request: {
    params: z.object({
      queueId: z
        .string()
        .openapi({
          param: {
            name: 'queueId',
            in: 'path',
            description: 'The unique identifier of the annotation queue',
            required: true,
            schema: { type: 'string' },
          },
        }),
      itemId: z
        .string()
        .openapi({
          param: {
            name: 'itemId',
            in: 'path',
            description: 'The unique identifier of the annotation queue item',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateAnnotationQueueItemRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: AnnotationQueueItemSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const postApiPublicAnnotationQueuesQueueIdAssignmentsRoute = createRoute({
  method: 'post',
  path: '/api/public/annotation-queues/{queueId}/assignments',
  tags: ['AnnotationQueues'],
  description: 'Create an assignment for a user to an annotation queue',
  operationId: 'annotationQueues_createQueueAssignment',
  request: {
    params: z.object({
      queueId: z
        .string()
        .openapi({
          param: {
            name: 'queueId',
            in: 'path',
            description: 'The unique identifier of the annotation queue',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AnnotationQueueAssignmentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: CreateAnnotationQueueAssignmentResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const deleteApiPublicAnnotationQueuesQueueIdAssignmentsRoute = createRoute({
  method: 'delete',
  path: '/api/public/annotation-queues/{queueId}/assignments',
  tags: ['AnnotationQueues'],
  description: 'Delete an assignment for a user to an annotation queue',
  operationId: 'annotationQueues_deleteQueueAssignment',
  request: {
    params: z.object({
      queueId: z
        .string()
        .openapi({
          param: {
            name: 'queueId',
            in: 'path',
            description: 'The unique identifier of the annotation queue',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AnnotationQueueAssignmentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: DeleteAnnotationQueueAssignmentResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicIntegrationsBlobStorageRoute = createRoute({
  method: 'get',
  path: '/api/public/integrations/blob-storage',
  tags: ['BlobStorageIntegrations'],
  description:
    'Get all blob storage integrations for the organization (requires organization-scoped API key)',
  operationId: 'blobStorageIntegrations_getBlobStorageIntegrations',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: BlobStorageIntegrationsResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const putApiPublicIntegrationsBlobStorageRoute = createRoute({
  method: 'put',
  path: '/api/public/integrations/blob-storage',
  tags: ['BlobStorageIntegrations'],
  description:
    'Create or update a blob storage integration for a specific project (requires organization-scoped API key). The configuration is validated by performing a test upload to the bucket.',
  operationId: 'blobStorageIntegrations_upsertBlobStorageIntegration',
  request: {
    body: {
      content: { 'application/json': { schema: CreateBlobStorageIntegrationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: BlobStorageIntegrationResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicIntegrationsBlobStorageIdRoute = createRoute({
  method: 'get',
  path: '/api/public/integrations/blob-storage/{id}',
  tags: ['BlobStorageIntegrations'],
  description:
    'Get the sync status of a blob storage integration by integration ID (requires organization-scoped API key)',
  operationId: 'blobStorageIntegrations_getBlobStorageIntegrationStatus',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: BlobStorageIntegrationStatusResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const deleteApiPublicIntegrationsBlobStorageIdRoute = createRoute({
  method: 'delete',
  path: '/api/public/integrations/blob-storage/{id}',
  tags: ['BlobStorageIntegrations'],
  description: 'Delete a blob storage integration by ID (requires organization-scoped API key)',
  operationId: 'blobStorageIntegrations_deleteBlobStorageIntegration',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: BlobStorageIntegrationDeletionResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicCommentsRoute = createRoute({
  method: 'get',
  path: '/api/public/comments',
  tags: ['Comments'],
  description: 'Get all comments',
  operationId: 'comments_get',
  request: {
    query: z.object({
      page: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            description: 'Page number, starts at 1.',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      limit: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'Limit of items per page. If you encounter api issues due to too large page sizes, try to reduce the limit',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      objectType: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'objectType',
            in: 'query',
            description: 'Filter comments by object type (trace, observation, session, prompt).',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      objectId: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'objectId',
            in: 'query',
            description:
              'Filter comments by object id. If objectType is not provided, an error will be thrown.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      authorUserId: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'authorUserId',
            in: 'query',
            description: 'Filter comments by author user id.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetCommentsResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const postApiPublicCommentsRoute = createRoute({
  method: 'post',
  path: '/api/public/comments',
  tags: ['Comments'],
  description:
    'Create a comment. Comments may be attached to different object types (trace, observation, session, prompt).',
  operationId: 'comments_create',
  request: {
    body: {
      content: { 'application/json': { schema: CreateCommentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: CreateCommentResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicCommentsCommentIdRoute = createRoute({
  method: 'get',
  path: '/api/public/comments/{commentId}',
  tags: ['Comments'],
  description: 'Get a comment by id',
  operationId: 'comments_get-by-id',
  request: {
    params: z.object({
      commentId: z
        .string()
        .openapi({
          param: {
            name: 'commentId',
            in: 'path',
            description: 'The unique langfuse identifier of a comment',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: CommentSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicDatasetItemsRoute = createRoute({
  method: 'get',
  path: '/api/public/dataset-items',
  tags: ['DatasetItems'],
  description:
    'Get dataset items. Optionally specify a version to get the items as they existed at that point in time.\nNote: If version parameter is provided, datasetName must also be provided.',
  operationId: 'datasetItems_list',
  request: {
    query: z.object({
      datasetName: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'datasetName',
            in: 'query',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      sourceTraceId: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'sourceTraceId',
            in: 'query',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      sourceObservationId: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'sourceObservationId',
            in: 'query',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      version: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            description:
              'ISO 8601 timestamp (RFC 3339, Section 5.6) in UTC (e.g., "2026-01-21T14:35:42Z").\nIf provided, returns state of dataset at this timestamp.\nIf not provided, returns the latest version. Requires datasetName to be specified.',
            required: false,
            schema: { type: 'string', format: 'date-time', nullable: true },
          },
        }),
      page: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            description: 'page number, starts at 1',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      limit: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'limit of items per page',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedDatasetItemsSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const postApiPublicDatasetItemsRoute = createRoute({
  method: 'post',
  path: '/api/public/dataset-items',
  tags: ['DatasetItems'],
  description: 'Create a dataset item',
  operationId: 'datasetItems_create',
  request: {
    body: {
      content: { 'application/json': { schema: CreateDatasetItemRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: DatasetItemSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicDatasetItemsIdRoute = createRoute({
  method: 'get',
  path: '/api/public/dataset-items/{id}',
  tags: ['DatasetItems'],
  description: 'Get a dataset item',
  operationId: 'datasetItems_get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: DatasetItemSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const deleteApiPublicDatasetItemsIdRoute = createRoute({
  method: 'delete',
  path: '/api/public/dataset-items/{id}',
  tags: ['DatasetItems'],
  description: 'Delete a dataset item and all its run items. This action is irreversible.',
  operationId: 'datasetItems_delete',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: DeleteDatasetItemResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicV2DatasetsRoute = createRoute({
  method: 'get',
  path: '/api/public/v2/datasets',
  tags: ['Datasets'],
  description: 'Get all datasets',
  operationId: 'datasets_list',
  request: {
    query: z.object({
      page: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            description: 'page number, starts at 1',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      limit: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'limit of items per page',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PaginatedDatasetsSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const postApiPublicV2DatasetsRoute = createRoute({
  method: 'post',
  path: '/api/public/v2/datasets',
  tags: ['Datasets'],
  description: 'Create a dataset',
  operationId: 'datasets_create',
  request: {
    body: {
      content: { 'application/json': { schema: CreateDatasetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: DatasetSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicV2DatasetsDatasetNameRoute = createRoute({
  method: 'get',
  path: '/api/public/v2/datasets/{datasetName}',
  tags: ['Datasets'],
  description: 'Get a dataset',
  operationId: 'datasets_get',
  request: {
    params: z.object({
      datasetName: z
        .string()
        .openapi({
          param: { name: 'datasetName', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: DatasetSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicV2EvaluationRulesRoute = createRoute({
  method: 'get',
  path: '/api/public/v2/evaluation-rules',
  tags: ['EvaluationRules'],
  description:
    'List evaluation rules in newest-first creation order.\n\nThis includes legacy trace and dataset rules so they can be inspected and migrated. Treat the cursor as opaque and return it unchanged.',
  operationId: 'evaluationRules_list',
  request: {
    query: z.object({
      limit: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'Maximum number of items to return. Defaults to `50` and cannot exceed `100`.',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      cursor: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            description: 'Opaque cursor returned by the previous page.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: EvaluationRulesPageSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    429: { description: '', content: { 'application/json': { schema: PublicApiErrorSchema } } },
    500: { description: '', content: { 'application/json': { schema: PublicApiErrorSchema } } },
  },
  security: [{ BasicAuth: [] }],
})

export const postApiPublicV2EvaluationRulesRoute = createRoute({
  method: 'post',
  path: '/api/public/v2/evaluation-rules',
  tags: ['EvaluationRules'],
  description:
    'Create an evaluation rule using stable evaluator identifiers.\n\nAn evaluation rule defines **which** incoming observations should be evaluated and how prompt variables should be populated.\n\nKey behavior:\n- rule names are not identifiers and do not need to be unique\n- rules always use the latest version of each associated evaluator\n- an enabled rule requires at least one evaluator assignment\n- omit `sampling` to evaluate every matching observation\n- omit `filter` to match every incoming observation\n- `datasetId` is the public filter name for selecting experiment datasets',
  operationId: 'evaluationRules_create',
  request: {
    body: {
      content: { 'application/json': { schema: CreateEvaluationRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: '', content: { 'application/json': { schema: EvaluationRuleSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    409: { description: '', content: { 'application/json': { schema: PublicApiErrorSchema } } },
    429: { description: '', content: { 'application/json': { schema: PublicApiErrorSchema } } },
    500: { description: '', content: { 'application/json': { schema: PublicApiErrorSchema } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicV2EvaluationRulesEvaluationRuleIdRoute = createRoute({
  method: 'get',
  path: '/api/public/v2/evaluation-rules/{evaluationRuleId}',
  tags: ['EvaluationRules'],
  description:
    'Get one evaluation rule, including a legacy trace or dataset rule, by its stable identifier.',
  operationId: 'evaluationRules_get',
  request: {
    params: z.object({
      evaluationRuleId: z
        .string()
        .openapi({
          param: {
            name: 'evaluationRuleId',
            in: 'path',
            description:
              'Stable evaluation-rule identifier returned by the evaluation-rule endpoints.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: EvaluationRuleSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    429: { description: '', content: { 'application/json': { schema: PublicApiErrorSchema } } },
    500: { description: '', content: { 'application/json': { schema: PublicApiErrorSchema } } },
  },
  security: [{ BasicAuth: [] }],
})

export const deleteApiPublicV2EvaluationRulesEvaluationRuleIdRoute = createRoute({
  method: 'delete',
  path: '/api/public/v2/evaluation-rules/{evaluationRuleId}',
  tags: ['EvaluationRules'],
  description:
    'Delete an evaluation rule.\n\nThis removes the live-ingestion rule only. It does not delete associated evaluators or scores already produced by them.\n\nLegacy trace and dataset rules can also be deleted. Their evaluators and previously produced scores are preserved.',
  operationId: 'evaluationRules_delete',
  request: {
    params: z.object({
      evaluationRuleId: z
        .string()
        .openapi({
          param: {
            name: 'evaluationRuleId',
            in: 'path',
            description:
              'Stable evaluation-rule identifier returned by the evaluation-rule endpoints.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: DeletedEvaluationRuleSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    429: { description: '', content: { 'application/json': { schema: PublicApiErrorSchema } } },
    500: { description: '', content: { 'application/json': { schema: PublicApiErrorSchema } } },
  },
  security: [{ BasicAuth: [] }],
})

export const patchApiPublicV2EvaluationRulesEvaluationRuleIdRoute = createRoute({
  method: 'patch',
  path: '/api/public/v2/evaluation-rules/{evaluationRuleId}',
  tags: ['EvaluationRules'],
  description:
    'Update an evaluation rule by its stable identifier.\n\nProvide only the fields to change. Providing `evaluatorAssignments` replaces the complete assignment list. Replacing the list with an empty array disables the rule. Setting `enabled=true` is rejected when the resulting assignment list is empty, including when both fields are sent in the same request.\n\nLegacy trace and dataset rules follow the existing lifecycle restrictions: they can be deactivated with `enabled=false`, but their name, filters, sampling, and evaluator assignments cannot be changed.',
  operationId: 'evaluationRules_update',
  request: {
    params: z.object({
      evaluationRuleId: z
        .string()
        .openapi({
          param: {
            name: 'evaluationRuleId',
            in: 'path',
            description:
              'Stable evaluation-rule identifier returned by the evaluation-rule endpoints.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateEvaluationRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: EvaluationRuleSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    409: { description: '', content: { 'application/json': { schema: PublicApiErrorSchema } } },
    429: { description: '', content: { 'application/json': { schema: PublicApiErrorSchema } } },
    500: { description: '', content: { 'application/json': { schema: PublicApiErrorSchema } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicV2EvaluatorsRoute = createRoute({
  method: 'get',
  path: '/api/public/v2/evaluators',
  tags: ['Evaluators'],
  description:
    'List evaluators in newest-first creation order.\n\nEvery evaluator includes its latest definition and version metadata flattened into the evaluator object, plus associated evaluation rules. Treat the cursor as opaque and return it unchanged.',
  operationId: 'evaluators_list',
  request: {
    query: z.object({
      limit: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'Maximum number of items to return. Defaults to `50` and cannot exceed `100`.',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      cursor: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            description: 'Opaque cursor returned by the previous page.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: EvaluatorsPageSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    429: { description: '', content: { 'application/json': { schema: PublicApiErrorSchema } } },
    500: { description: '', content: { 'application/json': { schema: PublicApiErrorSchema } } },
  },
  security: [{ BasicAuth: [] }],
})

export const postApiPublicV2EvaluatorsRoute = createRoute({
  method: 'post',
  path: '/api/public/v2/evaluators',
  tags: ['Evaluators'],
  description:
    'Create an evaluator in the authenticated project.\n\nAn evaluator defines **how** Langfuse should score data. LLM-as-a-judge evaluators define a prompt, expected structured output, and optional model configuration. Code evaluators define source code and a runtime language.\n\nThis always creates a new evaluator with version `1`. Names are not identifiers and do not need to be unique.',
  operationId: 'evaluators_create',
  request: {
    body: {
      content: { 'application/json': { schema: CreateEvaluatorRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: '', content: { 'application/json': { schema: EvaluatorSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    412: { description: '', content: { 'application/json': { schema: PublicApiErrorSchema } } },
    429: { description: '', content: { 'application/json': { schema: PublicApiErrorSchema } } },
    500: { description: '', content: { 'application/json': { schema: PublicApiErrorSchema } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicV2EvaluatorsEvaluatorIdRoute = createRoute({
  method: 'get',
  path: '/api/public/v2/evaluators/{evaluatorId}',
  tags: ['Evaluators'],
  description:
    "Get one evaluator by its stable identifier.\n\nThe response includes the evaluator's latest definition and version metadata flattened into the evaluator object, plus associated evaluation rules. Use the version-history endpoint when older definitions are needed.",
  operationId: 'evaluators_get',
  request: {
    params: z.object({
      evaluatorId: z
        .string()
        .openapi({
          param: {
            name: 'evaluatorId',
            in: 'path',
            description: 'Stable evaluator identifier returned by the evaluator endpoints.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: EvaluatorSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    429: { description: '', content: { 'application/json': { schema: PublicApiErrorSchema } } },
    500: { description: '', content: { 'application/json': { schema: PublicApiErrorSchema } } },
  },
  security: [{ BasicAuth: [] }],
})

export const deleteApiPublicV2EvaluatorsEvaluatorIdRoute = createRoute({
  method: 'delete',
  path: '/api/public/v2/evaluators/{evaluatorId}',
  tags: ['Evaluators'],
  description:
    'Delete an evaluator and all of its stored versions.\n\nAssociated evaluation-rule assignments are also removed. Scores already produced by the evaluator are preserved.',
  operationId: 'evaluators_delete',
  request: {
    params: z.object({
      evaluatorId: z
        .string()
        .openapi({
          param: {
            name: 'evaluatorId',
            in: 'path',
            description: 'Stable evaluator identifier returned by the evaluator endpoints.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: DeletedEvaluatorSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    429: { description: '', content: { 'application/json': { schema: PublicApiErrorSchema } } },
    500: { description: '', content: { 'application/json': { schema: PublicApiErrorSchema } } },
  },
  security: [{ BasicAuth: [] }],
})

export const patchApiPublicV2EvaluatorsEvaluatorIdRoute = createRoute({
  method: 'patch',
  path: '/api/public/v2/evaluators/{evaluatorId}',
  tags: ['Evaluators'],
  description:
    "Update an evaluator by its stable identifier.\n\nProvide only the top-level fields to change. Metadata-only changes do not create a version. Evaluator type cannot change.\n\nDefinition fields are flattened into the request. To replace a definition, include `type` and every definition field for that type. Definition fields are replaced as a complete unit rather than merged. For LLM-as-a-judge evaluators, omitting or setting `modelConfig` to `null` selects the project's default evaluation model.\n\nReplacing a definition automatically returns an evaluator paused by an invalid or missing model configuration to `active`, while preserving its id and evaluation-rule assignments. Pauses caused by provider authentication, billing, connectivity, account state, or an unknown legacy reason remain paused until the explicit reactivation check succeeds.",
  operationId: 'evaluators_update',
  request: {
    params: z.object({
      evaluatorId: z
        .string()
        .openapi({
          param: {
            name: 'evaluatorId',
            in: 'path',
            description: 'Stable evaluator identifier returned by the evaluator endpoints.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateEvaluatorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: EvaluatorSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    409: { description: '', content: { 'application/json': { schema: PublicApiErrorSchema } } },
    412: { description: '', content: { 'application/json': { schema: PublicApiErrorSchema } } },
    429: { description: '', content: { 'application/json': { schema: PublicApiErrorSchema } } },
    500: { description: '', content: { 'application/json': { schema: PublicApiErrorSchema } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicV2EvaluatorsEvaluatorIdVersionsRoute = createRoute({
  method: 'get',
  path: '/api/public/v2/evaluators/{evaluatorId}/versions',
  tags: ['Evaluators'],
  description:
    "List an evaluator's version history in newest-first order.\n\nThis endpoint is intended for history and audit use cases. Ordinary clients can use the flattened `version` and definition fields on the evaluator response.",
  operationId: 'evaluators_listVersions',
  request: {
    params: z.object({
      evaluatorId: z
        .string()
        .openapi({
          param: {
            name: 'evaluatorId',
            in: 'path',
            description: 'Stable evaluator identifier returned by the evaluator endpoints.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'Maximum number of versions to return. Defaults to `50` and cannot exceed `100`.',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      cursor: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            description: 'Opaque cursor returned by the previous page.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: EvaluatorVersionsPageSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    429: { description: '', content: { 'application/json': { schema: PublicApiErrorSchema } } },
    500: { description: '', content: { 'application/json': { schema: PublicApiErrorSchema } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicExperimentsRoute = createRoute({
  method: 'get',
  path: '/api/public/experiments',
  tags: ['Experiments'],
  description:
    'List experiments with cursor-based pagination. Results are ordered by\nlatest experiment activity descending.',
  operationId: 'experiments_list',
  request: {
    query: z.object({
      fields: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              'Comma-separated list of field groups to include. Available groups:\n`core`, `metadata`, `scores`. If omitted, `core` is returned.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      limit: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Number of experiments to return per page. Maximum 100, default 50.',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      scoreLimit: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'scoreLimit',
            in: 'query',
            description:
              'Number of scores to return per experiment when `fields=scores` is requested. Maximum 50, default 50.',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      cursor: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            description: 'Versioned base64url cursor from the previous response page.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      fromStartTime: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            name: 'fromStartTime',
            in: 'query',
            description:
              'Required. Retrieve only experiments with events on or after this\ndatetime. A lower bound is required so the query stays fast on\nlarge projects; pair it with an upper bound to select a specific\nwindow.',
            required: true,
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      toStartTime: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'toStartTime',
            in: 'query',
            description: 'Retrieve only experiments before this datetime.',
            required: false,
            schema: { type: 'string', format: 'date-time', nullable: true },
          },
        }),
      id: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            in: 'query',
            description: 'Comma-separated list of experiment IDs.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      name: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Comma-separated list of experiment names.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      datasetId: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'datasetId',
            in: 'query',
            description: 'Comma-separated list of dataset IDs.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      filter: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              'JSON string containing an array of structured filter conditions.\nSupported columns are `id`, `name`, and `datasetId`.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ExperimentsResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicExperimentItemsRoute = createRoute({
  method: 'get',
  path: '/api/public/experiment-items',
  tags: ['Experiments'],
  description:
    'List experiment items with cursor-based pagination. Use this endpoint\nto export experiment item inputs, outputs, expected outputs, metadata,\nand optionally item/trace scores. Results are ordered by time\ndescending.',
  operationId: 'experiments_listItems',
  request: {
    query: z.object({
      fields: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              'Comma-separated list of field groups to include. Available groups:\n`core`, `dataset`, `io`, `metadata`, `itemMetadata`,\n`experimentMetadata`, `scores`. If omitted, `core,dataset` is\nreturned.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      limit: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Number of experiment items to return per page. Maximum 100, default 50.',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      scoreLimit: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'scoreLimit',
            in: 'query',
            description:
              'Number of scores to return per experiment item when `fields=scores` is requested. Maximum 50, default 50.',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      cursor: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            description: 'Versioned base64url cursor from the previous response page.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      fromStartTime: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            name: 'fromStartTime',
            in: 'query',
            description:
              'Required. Retrieve only experiment items started on or after this\ndatetime. A lower bound is required so the query stays fast on\nlarge projects; pair it with an upper bound to select a specific\nwindow.',
            required: true,
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      toStartTime: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'toStartTime',
            in: 'query',
            description: 'Retrieve only experiment items started before this datetime.',
            required: false,
            schema: { type: 'string', format: 'date-time', nullable: true },
          },
        }),
      experimentId: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'experimentId',
            in: 'query',
            description: 'Comma-separated list of experiment IDs.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      experimentName: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'experimentName',
            in: 'query',
            description: 'Comma-separated list of experiment names.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      experimentItemId: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'experimentItemId',
            in: 'query',
            description: 'Comma-separated list of experiment item IDs.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      datasetId: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'datasetId',
            in: 'query',
            description: 'Comma-separated list of dataset IDs.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      filter: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              'JSON string containing an array of structured filter conditions.\nSupported columns are `experimentId`, `experimentName`,\n`experimentItemId`, and `datasetId`.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ExperimentItemsResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const postApiPublicFeedbackRoute = createRoute({
  method: 'post',
  path: '/api/public/feedback',
  tags: ['Feedback'],
  description:
    'Submit explicit user-approved feedback about Langfuse skills, MCP tools, CLI, docs, or public API. Do not include secrets, credentials, customer data, trace payloads, or unrelated use-case details.\n\nNot available in the HIPAA cloud region.',
  operationId: 'feedback_submit',
  request: {
    body: {
      content: { 'application/json': { schema: SubmitFeedbackRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: SubmitFeedbackResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    409: { description: '' },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicHealthRoute = createRoute({
  method: 'get',
  path: '/api/public/health',
  tags: ['Health'],
  description: 'Check health of API and database',
  operationId: 'health_health',
  responses: {
    200: { description: '', content: { 'application/json': { schema: HealthResponseSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    503: { description: '' },
  },
})

export const getApiPublicLlmConnectionsRoute = createRoute({
  method: 'get',
  path: '/api/public/llm-connections',
  tags: ['LlmConnections'],
  description: 'Get all LLM connections in a project',
  operationId: 'llmConnections_list',
  request: {
    query: z.object({
      page: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            description: 'page number, starts at 1',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      limit: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'limit of items per page',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedLlmConnectionsSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const putApiPublicLlmConnectionsRoute = createRoute({
  method: 'put',
  path: '/api/public/llm-connections',
  tags: ['LlmConnections'],
  description: 'Create or update an LLM connection. The connection is upserted on provider.',
  operationId: 'llmConnections_upsert',
  request: {
    body: {
      content: { 'application/json': { schema: UpsertLlmConnectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: LlmConnectionSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const deleteApiPublicLlmConnectionsIdRoute = createRoute({
  method: 'delete',
  path: '/api/public/llm-connections/{id}',
  tags: ['LlmConnections'],
  description:
    'Delete an LLM connection by id. Evaluators that depend on the deleted connection are automatically paused.',
  operationId: 'llmConnections_delete',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: DeleteLlmConnectionResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicOrganizationsLlmConnectionsRoute = createRoute({
  method: 'get',
  path: '/api/public/organizations/llm-connections',
  tags: ['LlmConnections'],
  description:
    'Get all organization-level LLM connections. Requires an organization-scoped API key.',
  operationId: 'llmConnections_listOrganization',
  request: {
    query: z.object({
      page: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            description: 'page number, starts at 1',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      limit: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'limit of items per page',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedLlmConnectionsSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const putApiPublicOrganizationsLlmConnectionsRoute = createRoute({
  method: 'put',
  path: '/api/public/organizations/llm-connections',
  tags: ['LlmConnections'],
  description:
    'Create or update an organization-level LLM connection. The connection is upserted on provider and inherited by projects without a provider override. Requires an organization-scoped API key.',
  operationId: 'llmConnections_upsertOrganization',
  request: {
    body: {
      content: { 'application/json': { schema: UpsertLlmConnectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: LlmConnectionSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const deleteApiPublicOrganizationsLlmConnectionsIdRoute = createRoute({
  method: 'delete',
  path: '/api/public/organizations/llm-connections/{id}',
  tags: ['LlmConnections'],
  description:
    'Delete an organization-level LLM connection by id. Evaluators in projects without an override for the provider are automatically paused. Requires an organization-scoped API key.',
  operationId: 'llmConnections_deleteOrganization',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: DeleteLlmConnectionResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicMediaMediaIdRoute = createRoute({
  method: 'get',
  path: '/api/public/media/{mediaId}',
  tags: ['Media'],
  description: 'Get a media record',
  operationId: 'media_get',
  request: {
    params: z.object({
      mediaId: z
        .string()
        .openapi({
          param: {
            name: 'mediaId',
            in: 'path',
            description: 'The unique langfuse identifier of a media record',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: GetMediaResponseSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const patchApiPublicMediaMediaIdRoute = createRoute({
  method: 'patch',
  path: '/api/public/media/{mediaId}',
  tags: ['Media'],
  description: 'Patch a media record',
  operationId: 'media_patch',
  request: {
    params: z.object({
      mediaId: z
        .string()
        .openapi({
          param: {
            name: 'mediaId',
            in: 'path',
            description: 'The unique langfuse identifier of a media record',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchMediaBodySchema } }, required: true },
  },
  responses: {
    204: { description: '' },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const postApiPublicMediaRoute = createRoute({
  method: 'post',
  path: '/api/public/media',
  tags: ['Media'],
  description: 'Get a presigned upload URL for a media record',
  operationId: 'media_getUploadUrl',
  request: {
    body: {
      content: { 'application/json': { schema: GetMediaUploadUrlRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetMediaUploadUrlResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicV2MetricsRoute = createRoute({
  method: 'get',
  path: '/api/public/v2/metrics',
  tags: ['Metrics'],
  description:
    'Get metrics from the Langfuse project using a query object. V2 endpoint with optimized performance.\n\nTogether with OpenTelemetry ingestion and Observations API v2, this is the only real-time read path. Other public API endpoints can delay data by about 10 minutes.\n\n## V2 Differences\n- Supports `observations`, `scores-numeric`, `scores-boolean`, and `scores-categorical` views only (traces view not supported)\n- Direct access to tags and release fields on observations\n- Semantic-root filtering and grouping through the v2-only `isRootObservation` dimension\n- Backwards-compatible: traceName, traceRelease, traceVersion dimensions are still available on observations view\n- High cardinality dimensions are not supported and will return a 400 error (see below)\n\nFor more details, see the [Metrics API documentation](https://langfuse.com/docs/metrics/features/metrics-api).\n\n## Available Views\n\n### observations\nQuery observation-level data (spans, generations, events).\n\n**Dimensions:**\n- `environment` - Deployment environment (e.g., production, staging)\n- `type` - Type of observation (SPAN, GENERATION, EVENT)\n- `name` - Name of the observation\n- `level` - Logging level of the observation\n- `version` - Version of the observation\n- `tags` - User-defined tags\n- `release` - Release version\n- `traceName` - Name of the parent trace (backwards-compatible)\n- `traceRelease` - Release version of the parent trace (backwards-compatible, maps to release)\n- `traceVersion` - Version of the parent trace (backwards-compatible, maps to version)\n- `providedModelName` - Name of the model used\n- `promptName` - Name of the prompt used\n- `promptVersion` - Version of the prompt used\n- `isRootObservation` - Boolean semantic-root status. `true` includes physical roots and app roots whose SDK parent is external (so `parentObservationId` may be non-null).\n- `startTimeMonth` - Month of start_time in YYYY-MM format\n\n**Measures:**\n- `count` - Total number of observations\n- `latency` - Observation latency (milliseconds)\n- `streamingLatency` - Generation latency from completion start to end (milliseconds)\n- `inputTokens` - Sum of input tokens consumed\n- `outputTokens` - Sum of output tokens produced\n- `totalTokens` - Sum of all tokens consumed\n- `outputTokensPerSecond` - Output tokens per second\n- `tokensPerSecond` - Total tokens per second\n- `inputCost` - Input cost (USD)\n- `outputCost` - Output cost (USD)\n- `totalCost` - Total cost (USD)\n- `timeToFirstToken` - Time to first token (milliseconds)\n- `countScores` - Number of scores attached to the observation\n\n### scores-numeric\nQuery numeric and boolean score data.\n\n**Dimensions:**\n- `environment` - Deployment environment\n- `name` - Name of the score (e.g., accuracy, toxicity)\n- `source` - Origin of the score (API, ANNOTATION, EVAL)\n- `dataType` - Data type (NUMERIC, BOOLEAN)\n- `configId` - Identifier of the score config\n- `timestampMonth` - Month in YYYY-MM format\n- `timestampDay` - Day in YYYY-MM-DD format\n- `value` - Numeric value of the score\n- `traceName` - Name of the parent trace\n- `tags` - Tags\n- `traceRelease` - Release version\n- `traceVersion` - Version\n- `observationName` - Name of the associated observation\n- `observationModelName` - Model name of the associated observation\n- `observationPromptName` - Prompt name of the associated observation\n- `observationPromptVersion` - Prompt version of the associated observation\n\n**Measures:**\n- `count` - Total number of scores\n- `value` - Score value (for aggregations)\n\n### scores-boolean\nQuery boolean score data. It has the same score and parent trace/observation dimensions as scores-numeric, plus:\n\n**Dimensions:**\n- `booleanValue` - Boolean value for true/false grouping and filtering\n\n**Measures:**\n- `count` - Total number of boolean scores\n- `value` - Numeric 0/1 score value; `avg` returns the true-rate\n\n### scores-categorical\nQuery categorical score data. Same dimensions as scores-numeric except uses `stringValue` instead of `value`.\n\n**Measures:**\n- `count` - Total number of scores\n\n## High Cardinality Dimensions\nThe following dimensions cannot be used as grouping dimensions in v2 metrics API as they can cause performance issues.\nUse them in filters instead.\n\n**observations view:**\n- `id` - Use traceId filter to narrow down results\n- `traceId` - Use traceId filter instead\n- `userId` - Use userId filter instead\n- `sessionId` - Use sessionId filter instead\n- `parentObservationId` - Use parentObservationId filter instead\n\n**scores-numeric / scores-boolean / scores-categorical views:**\n- `id` - Use specific filters to narrow down results\n- `traceId` - Use traceId filter instead\n- `userId` - Use userId filter instead\n- `sessionId` - Use sessionId filter instead\n- `observationId` - Use observationId filter instead\n\n## Aggregations\nAvailable aggregation functions: `sum`, `avg`, `count`, `max`, `min`, `p50`, `p75`, `p90`, `p95`, `p99`, `histogram`\n\n## Time Granularities\nAvailable granularities for timeDimension: `auto`, `minute`, `hour`, `day`, `week`, `month`\n- `auto` bins the data into approximately 50 buckets based on the time range',
  operationId: 'metrics_metrics',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description:
              'JSON string containing the query parameters with the following structure:\n```json\n{\n  "view": string,           // Required. One of "observations", "scores-numeric", "scores-boolean", "scores-categorical"\n  "dimensions": [           // Optional. Default: []\n    {\n      "field": string       // Field to group by (see available dimensions above)\n    }\n  ],\n  "metrics": [              // Required. At least one metric must be provided\n    {\n      "measure": string,    // What to measure (see available measures above)\n      "aggregation": string // How to aggregate: "sum", "avg", "count", "max", "min", "p50", "p75", "p90", "p95", "p99", "histogram"\n    }\n  ],\n  "filters": [              // Optional. Default: []\n    {\n      "column": string,     // Column to filter on (any dimension field)\n      "operator": string,   // Operator based on type:\n                            // - datetime: ">", "<", ">=", "<="\n                            // - string: "=", "contains", "does not contain", "starts with", "ends with"\n                            // - stringOptions: "any of", "none of"\n                            // - arrayOptions: "any of", "none of", "all of"\n                            // - number: "=", ">", "<", ">=", "<="\n                            // - stringObject/numberObject: same as string/number with required "key"\n                            // - boolean: "=", "<>"\n                            // - null: "is null", "is not null"\n      "value": any,         // Value to compare against\n      "type": string,       // Data type: "datetime", "string", "number", "stringOptions", "categoryOptions", "arrayOptions", "stringObject", "numberObject", "boolean", "null"\n      "key": string         // Required only for stringObject/numberObject types (e.g., metadata filtering)\n    }\n  ],\n  "timeDimension": {        // Optional. Default: null. If provided, results will be grouped by time\n    "granularity": string   // One of "auto", "minute", "hour", "day", "week", "month"\n  },\n  "fromTimestamp": string,  // Required. ISO datetime string for start of time range\n  "toTimestamp": string,    // Required. ISO datetime string for end of time range (must be after fromTimestamp)\n  "orderBy": [              // Optional. Default: null\n    {\n      "field": string,      // Field to order by (dimension or metric alias)\n      "direction": string   // "asc" or "desc"\n    }\n  ],\n  "config": {               // Optional. Query-specific configuration\n    "bins": number,         // Optional. Number of bins for histogram aggregation (1-100), default: 10\n    "row_limit": number     // Optional. Maximum number of rows to return (1-1000), default: 100\n  }\n}\n```\n\nFor example, to count semantic roots (including app roots with a non-null external parent), use a boolean filter:\n```json\n{\n  "view": "observations",\n  "metrics": [{"measure": "count", "aggregation": "count"}],\n  "filters": [{"column": "isRootObservation", "operator": "=", "value": true, "type": "boolean"}],\n  "fromTimestamp": "2025-01-01T00:00:00.000Z",\n  "toTimestamp": "2025-02-01T00:00:00.000Z"\n}\n```',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: MetricsV2ResponseSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicModelsRoute = createRoute({
  method: 'get',
  path: '/api/public/models',
  tags: ['Models'],
  description: 'Get all models',
  operationId: 'models_list',
  request: {
    query: z.object({
      page: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            description: 'page number, starts at 1',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      limit: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'limit of items per page',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PaginatedModelsSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const postApiPublicModelsRoute = createRoute({
  method: 'post',
  path: '/api/public/models',
  tags: ['Models'],
  description: 'Create a model',
  operationId: 'models_create',
  request: {
    body: { content: { 'application/json': { schema: CreateModelRequestSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ModelSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicModelsIdRoute = createRoute({
  method: 'get',
  path: '/api/public/models/{id}',
  tags: ['Models'],
  description: 'Get a model',
  operationId: 'models_get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ModelSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const putApiPublicModelsIdRoute = createRoute({
  method: 'put',
  path: '/api/public/models/{id}',
  tags: ['Models'],
  description:
    'Create or replace a project-owned model using its id. Built-in models cannot be modified.',
  operationId: 'models_upsert',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: CreateModelRequestSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ModelSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const deleteApiPublicModelsIdRoute = createRoute({
  method: 'delete',
  path: '/api/public/models/{id}',
  tags: ['Models'],
  description:
    'Delete a model. Cannot delete models managed by Langfuse. You can create your own definition with the same modelName to override the definition though.',
  operationId: 'models_delete',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    204: { description: '' },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicV2ObservationsRoute = createRoute({
  method: 'get',
  path: '/api/public/v2/observations',
  tags: ['Observations'],
  description:
    'Get a list of observations with cursor-based pagination and flexible field selection.\n\nTogether with OpenTelemetry ingestion and Metrics API v2, this is the only real-time read path. Other public API endpoints can delay data by about 10 minutes.\n\n## Cursor-based Pagination\nThis endpoint uses cursor-based pagination for efficient traversal of large datasets.\nThe cursor is returned in the response metadata and should be passed in subsequent requests\nto retrieve the next page of results.\n\n## Field Selection\nUse the `fields` parameter to control which observation fields are returned:\n- `core` - Always included: id, traceId, startTime, endTime, projectId, parentObservationId, type\n- `basic` - name, level, statusMessage, version, environment, bookmarked, public, userId, sessionId, isRootObservation\n- `time` - completionStartTime, createdAt, updatedAt\n- `io` - input, output\n- `metadata` - metadata (truncated to 200 chars by default, use `expandMetadata` to get full values)\n- `model` - model, internalModelId, modelParameters\n- `usage` - usageDetails, costDetails, totalCost, usagePricingTierName\n- `prompt` - promptId, promptName, promptVersion\n- `metrics` - latency, timeToFirstToken\n- `trace_context` - tags, release, traceName\n\nIf not specified, `core` and `basic` field groups are returned.\n\n## Filters\nMultiple filtering options are available via query parameters or the structured `filter` parameter.\nWhen using the `filter` parameter, it takes precedence over individual query parameter filters.',
  operationId: 'observations_getMany',
  request: {
    query: z.object({
      fields: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              'Comma-separated list of field groups to include in the response.\nAvailable groups: core, basic, time, io, metadata, model, usage, prompt, metrics, trace_context.\nIf not specified, `core` and `basic` field groups are returned.\nExample: "basic,usage,model"',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      expandMetadata: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'expandMetadata',
            in: 'query',
            description:
              'Comma-separated list of metadata keys to return non-truncated.\nBy default, metadata values over 200 characters are truncated.\nUse this parameter to retrieve full values for specific keys.\nExample: "key1,key2"',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      limit: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Number of items to return per page. Maximum 1000, default 50.',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      cursor: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            description:
              'Base64-encoded cursor for pagination. Use the cursor from the previous response to get the next page.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      parseIoAsJson: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            name: 'parseIoAsJson',
            in: 'query',
            description:
              '**Deprecated.** Setting this to `true` will return a 400 error.\nInput/output fields are always returned as raw strings.\nRemove this parameter or set it to `false`.',
            required: false,
            schema: { type: 'boolean', nullable: true },
          },
        }),
      name: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      userId: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      sessionId: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'sessionId',
            in: 'query',
            description: 'Filter by session ID.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      type: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description:
              'Filter by observation type (e.g., "GENERATION", "SPAN", "EVENT", "AGENT", "TOOL", "CHAIN", "RETRIEVER", "EVALUATOR", "EMBEDDING", "GUARDRAIL")',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      traceId: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'traceId',
            in: 'query',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      level: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.enum(['DEBUG', 'DEFAULT', 'WARNING', 'ERROR']).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'level',
            in: 'query',
            description:
              'Optional filter for observations with a specific level (e.g. "DEBUG", "DEFAULT", "WARNING", "ERROR").',
            required: false,
            schema: {
              title: 'ObservationLevel',
              type: 'string',
              enum: ['DEBUG', 'DEFAULT', 'WARNING', 'ERROR'],
              nullable: true,
            },
          },
          title: 'ObservationLevel',
        }),
      parentObservationId: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'parentObservationId',
            in: 'query',
            description:
              'Filter by the physical parent observation ID.\nAn empty value matches only observations without a physical parent. Use `isRootObservation` to include observations marked as app roots by the SDK, which may retain a non-null `parentObservationId`.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      isRootObservation: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            name: 'isRootObservation',
            in: 'query',
            description:
              'Filter by whether an observation is a logical root.\nRoot observations include observations without a physical parent and observations marked as app roots by the SDK.\nAn app-root observation may have `isRootObservation=true` and a non-null `parentObservationId`.',
            required: false,
            schema: { type: 'boolean', nullable: true },
          },
        }),
      environment: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().nullable()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'environment',
            in: 'query',
            description:
              'Optional filter for observations where the environment is one of the provided values.',
            required: false,
            schema: { type: 'array', items: { type: 'string', nullable: true } },
          },
        }),
      fromStartTime: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'fromStartTime',
            in: 'query',
            description:
              'Retrieve only observations with a start_time on or after this datetime (ISO 8601).',
            required: false,
            schema: { type: 'string', format: 'date-time', nullable: true },
          },
        }),
      toStartTime: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'toStartTime',
            in: 'query',
            description:
              'Retrieve only observations with a start_time before this datetime (ISO 8601).',
            required: false,
            schema: { type: 'string', format: 'date-time', nullable: true },
          },
        }),
      version: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            description: 'Optional filter to only include observations with a certain version.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      filter: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              'JSON string containing an array of filter conditions. When provided, this takes precedence over query parameter filters (userId, name, type, level, environment, fromStartTime, ...).\n\n## Filter Structure\nEach filter condition has the following structure:\n```json\n[\n  {\n    "type": string,           // Required. One of: "datetime", "string", "number", "stringOptions", "categoryOptions", "arrayOptions", "stringObject", "numberObject", "boolean", "null"\n    "column": string,         // Required. Column to filter on (see available columns below)\n    "operator": string,       // Required. Operator based on type:\n                              // - datetime: ">", "<", ">=", "<="\n                              // - string: "=", "contains", "does not contain", "starts with", "ends with", "matches"\n                              // - stringOptions: "any of", "none of"\n                              // - categoryOptions: "any of", "none of"\n                              // - arrayOptions: "any of", "none of", "all of"\n                              // - number: "=", ">", "<", ">=", "<="\n                              // - stringObject: "=", "contains", "does not contain", "starts with", "ends with", "matches", "is set", "is not set"\n                              // - numberObject: "=", ">", "<", ">=", "<="\n                              // - boolean: "=", "<>"\n                              // - null: "is null", "is not null"\n    "value": any,             // Required (except for null type). Value to compare against. Type depends on filter type\n    "key": string             // Required only for stringObject, numberObject, and categoryOptions types when filtering on nested fields like metadata\n  }\n]\n```\n\n## Available Columns\n\n### Core Observation Fields\n- `id` (string) - Observation ID\n- `type` (string) - Observation type (SPAN, GENERATION, EVENT)\n- `name` (string) - Observation name\n- `traceId` (string) - Associated trace ID\n- `startTime` (datetime) - Observation start time\n- `endTime` (datetime) - Observation end time\n- `environment` (string) - Environment tag\n- `level` (string) - Log level (DEBUG, DEFAULT, WARNING, ERROR)\n- `statusMessage` (string) - Status message\n- `version` (string) - Version tag\n- `userId` (string) - User ID\n- `sessionId` (string) - Session ID\n- `isRootObservation` (boolean) - Whether the observation is a logical root. Observations marked as app roots by the SDK may retain a non-null parentObservationId.\n\n### Trace-Related Fields\n- `traceName` (string) - Name of the parent trace\n- `traceTags` (arrayOptions) - Tags from the parent trace\n- `tags` (arrayOptions) - Alias for traceTags\n\n### Performance Metrics\n- `latency` (number) - Latency in seconds (calculated: end_time - start_time)\n- `timeToFirstToken` (number) - Time to first token in seconds\n- `tokensPerSecond` (number) - Output tokens per second\n\n### Token Usage\n- `inputTokens` (number) - Number of input tokens\n- `outputTokens` (number) - Number of output tokens\n- `totalTokens` (number) - Total tokens (alias: `tokens`)\n\n### Cost Metrics\n- `inputCost` (number) - Input cost in USD\n- `outputCost` (number) - Output cost in USD\n- `totalCost` (number) - Total cost in USD\n\n### Model Information\n- `model` (string) - Provided model name (alias: `providedModelName`)\n- `promptName` (string) - Associated prompt name\n- `promptVersion` (number) - Associated prompt version\n\n### Structured Data\n- `input` (string) - Observation input. Supports accelerated indexed literal search with the `matches` operator.\n- `output` (string) - Observation output. Supports accelerated indexed literal search with the `matches` operator.\n- `metadata` (stringObject/numberObject/categoryOptions) - Metadata key-value pairs. Use `key` parameter to filter on specific metadata keys.\n\nThe `matches` operator is only supported for `input`, `output`, and stringObject `metadata` filters. It performs indexed literal search with token-boundary pruning using the events table text indexes. Case sensitivity differs by target: `input` and `output` matches are case-insensitive, while metadata value matches are case-sensitive. Unlike SQL `LIKE`, `%` and `_` are treated as literal characters. Use `contains` for legacy substring semantics where the API allows it. Any v2 `input` or `output` filter must be accompanied by at least one `=` or `matches` filter on `input` or `output`; standalone `contains`, `starts with`, `ends with`, and `does not contain` filters on these columns are rejected.\n\n## Filter Examples\n```json\n[\n  {\n    "type": "string",\n    "column": "type",\n    "operator": "=",\n    "value": "GENERATION"\n  },\n  {\n    "type": "number",\n    "column": "latency",\n    "operator": ">=",\n    "value": 2.5\n  },\n  {\n    "type": "stringObject",\n    "column": "metadata",\n    "key": "environment",\n    "operator": "=",\n    "value": "production"\n  },\n  {\n    "type": "string",\n    "column": "output",\n    "operator": "matches",\n    "value": "needle"\n  },\n  {\n    "type": "boolean",\n    "column": "isRootObservation",\n    "operator": "=",\n    "value": true\n  }\n]\n```',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ObservationsV2ResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const postApiPublicOtelV1TracesRoute = createRoute({
  method: 'post',
  path: '/api/public/otel/v1/traces',
  tags: ['Opentelemetry'],
  description:
    '**OpenTelemetry Traces Ingestion Endpoint**\n\nThis endpoint implements the OTLP/HTTP specification for trace ingestion, providing native OpenTelemetry integration for Langfuse Observability.\n\nTogether with Observations API v2 and Metrics API v2, this is the only real-time write path. Other public API endpoints can delay data by about 10 minutes. Direct exporters must send `x-langfuse-ingestion-version: 4`; current Python and JS SDKs already do.\n\n**Supported Formats:**\n- Binary Protobuf: `Content-Type: application/x-protobuf`\n- JSON Protobuf: `Content-Type: application/json`\n- Supports gzip compression via `Content-Encoding: gzip` header\n\n**Specification Compliance:**\n- Conforms to [OTLP/HTTP Trace Export](https://opentelemetry.io/docs/specs/otlp/#otlphttp)\n- Implements `ExportTraceServiceRequest` message format\n\n**Documentation:**\n- Integration guide: https://langfuse.com/integrations/native/opentelemetry\n- Data model: https://langfuse.com/docs/observability/data-model',
  operationId: 'opentelemetry_exportTraces',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              resourceSpans: z
                .array(OtelResourceSpanSchema)
                .openapi({
                  description:
                    'Array of resource spans containing trace data as defined in the OTLP specification',
                }),
            })
            .openapi({ required: ['resourceSpans'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: OtelTraceResponseSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicOrganizationsMembershipsRoute = createRoute({
  method: 'get',
  path: '/api/public/organizations/memberships',
  tags: ['Organizations'],
  description:
    'Get all memberships for the organization associated with the API key (requires organization-scoped API key)',
  operationId: 'organizations_getOrganizationMemberships',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: MembershipsResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const putApiPublicOrganizationsMembershipsRoute = createRoute({
  method: 'put',
  path: '/api/public/organizations/memberships',
  tags: ['Organizations'],
  description:
    'Create or update a membership for the organization associated with the API key (requires organization-scoped API key)',
  operationId: 'organizations_updateOrganizationMembership',
  request: {
    body: { content: { 'application/json': { schema: MembershipRequestSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: MembershipResponseSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const deleteApiPublicOrganizationsMembershipsRoute = createRoute({
  method: 'delete',
  path: '/api/public/organizations/memberships',
  tags: ['Organizations'],
  description:
    'Delete a membership from the organization associated with the API key (requires organization-scoped API key)',
  operationId: 'organizations_deleteOrganizationMembership',
  request: {
    body: {
      content: { 'application/json': { schema: DeleteMembershipRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: MembershipDeletionResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicProjectsProjectIdMembershipsRoute = createRoute({
  method: 'get',
  path: '/api/public/projects/{projectId}/memberships',
  tags: ['Organizations'],
  description: 'Get all memberships for a specific project (requires organization-scoped API key)',
  operationId: 'organizations_getProjectMemberships',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: { name: 'projectId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: MembershipsResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const putApiPublicProjectsProjectIdMembershipsRoute = createRoute({
  method: 'put',
  path: '/api/public/projects/{projectId}/memberships',
  tags: ['Organizations'],
  description:
    'Create or update a membership for a specific project (requires organization-scoped API key). The user must already be a member of the organization.',
  operationId: 'organizations_updateProjectMembership',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: { name: 'projectId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: MembershipRequestSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: MembershipResponseSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const deleteApiPublicProjectsProjectIdMembershipsRoute = createRoute({
  method: 'delete',
  path: '/api/public/projects/{projectId}/memberships',
  tags: ['Organizations'],
  description:
    'Delete a membership from a specific project (requires organization-scoped API key). The user must be a member of the organization.',
  operationId: 'organizations_deleteProjectMembership',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: { name: 'projectId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteMembershipRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: MembershipDeletionResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicOrganizationsProjectsRoute = createRoute({
  method: 'get',
  path: '/api/public/organizations/projects',
  tags: ['Organizations'],
  description:
    'Get all projects for the organization associated with the API key (requires organization-scoped API key)',
  operationId: 'organizations_getOrganizationProjects',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: OrganizationProjectsResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicOrganizationsApiKeysRoute = createRoute({
  method: 'get',
  path: '/api/public/organizations/apiKeys',
  tags: ['Organizations'],
  description:
    'Get all API keys for the organization associated with the API key (requires organization-scoped API key)',
  operationId: 'organizations_getOrganizationApiKeys',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: OrganizationApiKeysResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicProjectsRoute = createRoute({
  method: 'get',
  path: '/api/public/projects',
  tags: ['Projects'],
  description:
    'Get Project associated with API key (requires project-scoped API key). You can use GET /api/public/organizations/projects to get all projects with an organization-scoped key.',
  operationId: 'projects_get',
  responses: {
    200: { description: '', content: { 'application/json': { schema: ProjectsSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const postApiPublicProjectsRoute = createRoute({
  method: 'post',
  path: '/api/public/projects',
  tags: ['Projects'],
  description: 'Create a new project (requires organization-scoped API key)',
  operationId: 'projects_create',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string(),
              metadata: z
                .looseObject({})
                .nullable()
                .exactOptional()
                .openapi({ description: 'Optional metadata for the project' }),
              retention: z
                .int()
                .openapi({
                  description:
                    'Number of days to retain data. Must be 0 or at least 3 days. Requires data-retention entitlement for non-zero values. Optional.',
                }),
            })
            .openapi({ required: ['name', 'retention'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ProjectSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const putApiPublicProjectsProjectIdRoute = createRoute({
  method: 'put',
  path: '/api/public/projects/{projectId}',
  tags: ['Projects'],
  description: 'Update a project by ID (requires organization-scoped API key).',
  operationId: 'projects_update',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: { name: 'projectId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string(),
              metadata: z
                .looseObject({})
                .nullable()
                .exactOptional()
                .openapi({ description: 'Optional metadata for the project' }),
              retention: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Number of days to retain data.\nMust be 0 or at least 3 days.\nRequires data-retention entitlement for non-zero values.\nOptional. Will retain existing retention setting if omitted.',
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ProjectSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const deleteApiPublicProjectsProjectIdRoute = createRoute({
  method: 'delete',
  path: '/api/public/projects/{projectId}',
  tags: ['Projects'],
  description:
    'Delete a project by ID (requires organization-scoped API key). Project deletion is processed asynchronously.',
  operationId: 'projects_delete',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: { name: 'projectId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    202: {
      description: '',
      content: { 'application/json': { schema: ProjectDeletionResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicProjectsProjectIdApiKeysRoute = createRoute({
  method: 'get',
  path: '/api/public/projects/{projectId}/apiKeys',
  tags: ['Projects'],
  description: 'Get all API keys for a project (requires organization-scoped API key)',
  operationId: 'projects_getApiKeys',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: { name: 'projectId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ApiKeyListSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const postApiPublicProjectsProjectIdApiKeysRoute = createRoute({
  method: 'post',
  path: '/api/public/projects/{projectId}/apiKeys',
  tags: ['Projects'],
  description: 'Create a new API key for a project (requires organization-scoped API key)',
  operationId: 'projects_createApiKey',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: { name: 'projectId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Optional name for the API key. Cannot be provided together with note, even if either value is an empty string.',
                }),
              note: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Deprecated alias for name. Cannot be provided together with name, even if either value is an empty string.',
                  deprecated: true,
                }),
              expiresAt: z.iso
                .datetime({ offset: true })
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Optional expiration timestamp in ISO 8601 format. Must be in the future. Omit or set to null for a key that does not expire.',
                }),
              publicKey: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    "Optional predefined public key. Must start with 'pk-lf-'. If provided, secretKey must also be provided.",
                }),
              secretKey: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    "Optional predefined secret key. Must start with 'sk-lf-'. If provided, publicKey must also be provided.",
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ApiKeyResponseSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const deleteApiPublicProjectsProjectIdApiKeysApiKeyIdRoute = createRoute({
  method: 'delete',
  path: '/api/public/projects/{projectId}/apiKeys/{apiKeyId}',
  tags: ['Projects'],
  description: 'Delete an API key for a project (requires organization-scoped API key)',
  operationId: 'projects_deleteApiKey',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: { name: 'projectId', in: 'path', required: true, schema: { type: 'string' } },
        }),
      apiKeyId: z
        .string()
        .openapi({
          param: { name: 'apiKeyId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ApiKeyDeletionResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const patchApiPublicV2PromptsNameVersionsVersionRoute = createRoute({
  method: 'patch',
  path: '/api/public/v2/prompts/{name}/versions/{version}',
  tags: ['PromptVersion'],
  description: 'Update labels for a specific prompt version',
  operationId: 'promptVersion_update',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            description:
              'The name of the prompt. If the prompt is in a folder (e.g., "folder/subfolder/prompt-name"), \nthe folder path must be URL encoded.',
            required: true,
            schema: { type: 'string' },
          },
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
            in: 'path',
            description: 'Version of the prompt to update',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              newLabels: z
                .array(z.string())
                .openapi({
                  description:
                    'New labels for the prompt version. Labels are unique across versions. The "latest" label is reserved and managed by Langfuse.',
                }),
            })
            .openapi({ required: ['newLabels'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PromptSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicV2PromptsPromptNameRoute = createRoute({
  method: 'get',
  path: '/api/public/v2/prompts/{promptName}',
  tags: ['Prompts'],
  description: 'Get a prompt',
  operationId: 'prompts_get',
  request: {
    params: z.object({
      promptName: z
        .string()
        .openapi({
          param: {
            name: 'promptName',
            in: 'path',
            description:
              'The name of the prompt. If the prompt is in a folder (e.g., "folder/subfolder/prompt-name"), \nthe folder path must be URL encoded.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      version: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            description: 'Version of the prompt to be retrieved.',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      label: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'label',
            in: 'query',
            description:
              'Label of the prompt to be retrieved. Defaults to "production" if no label or version is set.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      resolve: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            name: 'resolve',
            in: 'query',
            description:
              'Resolve prompt dependencies before returning the prompt. Defaults to `true`. Set to `false` to return the raw stored prompt with dependency tags intact. This bypasses prompt caching and is intended for debugging or one-off jobs, not production runtime fetches.',
            required: false,
            schema: { type: 'boolean', nullable: true },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PromptSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const deleteApiPublicV2PromptsPromptNameRoute = createRoute({
  method: 'delete',
  path: '/api/public/v2/prompts/{promptName}',
  tags: ['Prompts'],
  description:
    'Delete prompt versions. If neither version nor label is specified, all versions of the prompt are deleted.',
  operationId: 'prompts_delete',
  request: {
    params: z.object({
      promptName: z
        .string()
        .openapi({
          param: {
            name: 'promptName',
            in: 'path',
            description: 'The name of the prompt',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      label: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'label',
            in: 'query',
            description:
              'Optional label to filter deletion. If specified, deletes all prompt versions that have this label.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      version: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            description:
              'Optional version to filter deletion. If specified, deletes only this specific version of the prompt.',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
    }),
  },
  responses: {
    204: { description: '' },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicV2PromptsRoute = createRoute({
  method: 'get',
  path: '/api/public/v2/prompts',
  tags: ['Prompts'],
  description: 'Get a list of prompt names with versions and labels',
  operationId: 'prompts_list',
  request: {
    query: z.object({
      name: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      label: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'label',
            in: 'query',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      tag: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'tag',
            in: 'query',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      page: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            description: 'page number, starts at 1',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      limit: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'limit of items per page',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      fromUpdatedAt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'fromUpdatedAt',
            in: 'query',
            description:
              'Optional filter to only include prompt versions created/updated on or after a certain datetime (ISO 8601)',
            required: false,
            schema: { type: 'string', format: 'date-time', nullable: true },
          },
        }),
      toUpdatedAt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'toUpdatedAt',
            in: 'query',
            description:
              'Optional filter to only include prompt versions created/updated before a certain datetime (ISO 8601)',
            required: false,
            schema: { type: 'string', format: 'date-time', nullable: true },
          },
        }),
      filter: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              'JSON string containing an array of filter conditions, combined with AND.\nWhen provided, this takes precedence over name, version,\nlabel, tag, fromUpdatedAt, and toUpdatedAt. An empty array applies no\nfilters. Project scoping and pagination always apply.\n\nEach condition requires `type`, `column`, `operator`, and `value`.\nSupported types and columns:\n- `string`: `id`, `name`, `type`. Operators: `=`, `contains`, `does not contain`, `starts with`, `ends with`, `is not empty`.\n- `stringOptions`: `id`, `name`, `type`. Operators: `any of`, `none of`. Value: non-empty string array.\n- `number`: `version`. Operators: `=`, `>`, `<`, `>=`, `<=`. Value: number.\n- `datetime`: `createdAt`, `updatedAt`. Operators: `>`, `<`, `>=`, `<=`. Value: ISO 8601 timestamp.\n- `arrayOptions`: `labels`, `tags`. Operators: `any of`, `all of`, `none of`. Value: non-empty string array.\n- `stringObject`: `config`. Requires an additional `key` field. Operators: `=`, `contains`, `does not contain`, `starts with`, `ends with`, `is set`, `is not set`. Value: string (use an empty string for key-presence operators).\n\nString equality is case-sensitive. String search operators use\ncase-insensitive SQL pattern matching: `%` matches any sequence and\n`_` matches a single character. A backslash escapes these characters;\nJSON-escape the backslash in the filter value. Asterisks are literal.\nFor config, an empty search value is treated as `is set`.\n\nFilters apply to prompt versions before aggregation: returned versions,\nlabels, and lastConfig reflect only matching versions.\n\nExample: [{"type":"string","column":"name","operator":"starts with","value":"tools/"},{"type":"string","column":"name","operator":"ends with","value":"/description"}]',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PromptMetaListResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const postApiPublicV2PromptsRoute = createRoute({
  method: 'post',
  path: '/api/public/v2/prompts',
  tags: ['Prompts'],
  description: 'Create a new version for the prompt with the given `name`',
  operationId: 'prompts_create',
  request: {
    body: {
      content: { 'application/json': { schema: CreatePromptRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PromptSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicScimServiceProviderConfigRoute = createRoute({
  method: 'get',
  path: '/api/public/scim/ServiceProviderConfig',
  tags: ['Scim'],
  description: 'Get SCIM Service Provider Configuration (requires organization-scoped API key)',
  operationId: 'scim_getServiceProviderConfig',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ServiceProviderConfigSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicScimResourceTypesRoute = createRoute({
  method: 'get',
  path: '/api/public/scim/ResourceTypes',
  tags: ['Scim'],
  description: 'Get SCIM Resource Types (requires organization-scoped API key)',
  operationId: 'scim_getResourceTypes',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ResourceTypesResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicScimSchemasRoute = createRoute({
  method: 'get',
  path: '/api/public/scim/Schemas',
  tags: ['Scim'],
  description: 'Get SCIM Schemas (requires organization-scoped API key)',
  operationId: 'scim_getSchemas',
  responses: {
    200: { description: '', content: { 'application/json': { schema: SchemasResponseSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicScimUsersRoute = createRoute({
  method: 'get',
  path: '/api/public/scim/Users',
  tags: ['Scim'],
  description: 'List users in the organization (requires organization-scoped API key)',
  operationId: 'scim_listUsers',
  request: {
    query: z.object({
      filter: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description: 'Filter expression (e.g. userName eq "value")',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      startIndex: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'startIndex',
            in: 'query',
            description: '1-based index of the first result to return (default 1)',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      count: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'count',
            in: 'query',
            description: 'Maximum number of results to return (default 100)',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ScimUsersListResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const postApiPublicScimUsersRoute = createRoute({
  method: 'post',
  path: '/api/public/scim/Users',
  tags: ['Scim'],
  description: 'Create a new user in the organization (requires organization-scoped API key)',
  operationId: 'scim_createUser',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userName: z.string().openapi({ description: "User's email address (required)" }),
              name: ScimNameSchema.openapi({ description: "User's name information" }),
              emails: z
                .array(ScimEmailSchema)
                .nullable()
                .exactOptional()
                .openapi({ description: "User's email addresses" }),
              active: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Whether the user is active' }),
              password: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Ignored. Accepted only for compatibility with identity providers that always send a password on user creation (Okta sends a placeholder value even when password sync is disabled). No credential is created for the user; provisioned users authenticate via SSO or set a password themselves through the password reset flow.',
                  deprecated: true,
                }),
            })
            .openapi({ required: ['userName', 'name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ScimUserSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicScimUsersUserIdRoute = createRoute({
  method: 'get',
  path: '/api/public/scim/Users/{userId}',
  tags: ['Scim'],
  description: 'Get a specific user by ID (requires organization-scoped API key)',
  operationId: 'scim_getUser',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { name: 'userId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ScimUserSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const deleteApiPublicScimUsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/api/public/scim/Users/{userId}',
  tags: ['Scim'],
  description:
    'Remove a user from the organization (requires organization-scoped API key). Note that this only removes the user from the organization but does not delete the user entity itself.',
  operationId: 'scim_deleteUser',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { name: 'userId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: EmptyResponseSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicScoreConfigsRoute = createRoute({
  method: 'get',
  path: '/api/public/score-configs',
  tags: ['ScoreConfigs'],
  description: 'Get all score configs',
  operationId: 'scoreConfigs_get',
  request: {
    query: z.object({
      page: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            description: 'Page number, starts at 1.',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      limit: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'Limit of items per page. If you encounter api issues due to too large page sizes, try to reduce the limit',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ScoreConfigsSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const postApiPublicScoreConfigsRoute = createRoute({
  method: 'post',
  path: '/api/public/score-configs',
  tags: ['ScoreConfigs'],
  description:
    'Create a score configuration (config). Score configs are used to define the structure of scores',
  operationId: 'scoreConfigs_create',
  request: {
    body: {
      content: { 'application/json': { schema: CreateScoreConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ScoreConfigSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicScoreConfigsConfigIdRoute = createRoute({
  method: 'get',
  path: '/api/public/score-configs/{configId}',
  tags: ['ScoreConfigs'],
  description: 'Get a score config',
  operationId: 'scoreConfigs_get-by-id',
  request: {
    params: z.object({
      configId: z
        .string()
        .openapi({
          param: {
            name: 'configId',
            in: 'path',
            description: 'The unique langfuse identifier of a score config',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ScoreConfigSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const patchApiPublicScoreConfigsConfigIdRoute = createRoute({
  method: 'patch',
  path: '/api/public/score-configs/{configId}',
  tags: ['ScoreConfigs'],
  description: 'Update a score config',
  operationId: 'scoreConfigs_update',
  request: {
    params: z.object({
      configId: z
        .string()
        .openapi({
          param: {
            name: 'configId',
            in: 'path',
            description: 'The unique langfuse identifier of a score config',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateScoreConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ScoreConfigSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const postApiPublicScoresRoute = createRoute({
  method: 'post',
  path: '/api/public/scores',
  tags: ['Scores'],
  description:
    'Create scores asynchronously from a list of scores. Returns 202 if all scores are accepted, or 207 with accepted/rejected counts and error messages. Do not automatically retry a 207 batch. The generated reference shows only 200; the endpoint returns 202 or 207.',
  operationId: 'scores_create',
  request: {
    body: {
      content: { 'application/json': { schema: CreateScoresRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: CreateScoresResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const deleteApiPublicScoresScoreIdRoute = createRoute({
  method: 'delete',
  path: '/api/public/scores/{scoreId}',
  tags: ['Scores'],
  description: 'Delete a score (supports both trace and session scores)',
  operationId: 'scores_delete',
  request: {
    params: z.object({
      scoreId: z
        .string()
        .openapi({
          param: {
            name: 'scoreId',
            in: 'path',
            description: 'The unique langfuse identifier of a score',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: '' },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicV3ScoresRoute = createRoute({
  method: 'get',
  path: '/api/public/v3/scores',
  tags: ['Scores'],
  description:
    'Get a list of scores with a polymorphic `value` field (v3).\n\nThe `value` field type depends on `dataType`:\n- `NUMERIC` → number\n- `BOOLEAN` → boolean\n- `CATEGORICAL`, `TEXT`, `CORRECTION` → string\n\nThe response always includes the core fields: id, projectId, name,\nvalue, dataType, source, timestamp, environment, createdAt, updatedAt.\n\nAdditional field groups can be requested via the `fields` parameter:\n- `details` — adds comment, configId, metadata\n- `subject` — adds the subject object describing the entity the score\n  is attached to: kind (trace, observation, session, or experiment),\n  id, and traceId for observation-level scores\n- `annotation` — adds authorUserId, queueId\n\nUnknown group names return HTTP 400.',
  operationId: 'scores_getMany',
  request: {
    query: z.object({
      limit: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'Number of items per page. Maximum 100, default 50. Requests with a limit greater than 100 return HTTP 400.',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      cursor: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            description:
              'URL-safe base64 (base64url) cursor for pagination. Use the cursor from the previous response to get the next page. Absent on the final page.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      fields: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            description:
              'Comma-separated field groups to include in addition to the always-returned core fields. Allowed: details, subject, annotation — see the endpoint description for the fields each group adds. Unknown names return HTTP 400.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      id: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            in: 'query',
            description:
              'Comma-separated list of score IDs to filter by (OR within, AND across filters).',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      name: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Comma-separated list of score names to filter by.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      source: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'source',
            in: 'query',
            description:
              'Comma-separated list of score sources to filter by (e.g. API, ANNOTATION, EVAL). Case-insensitive — `api` and `API` are equivalent.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      dataType: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'dataType',
            in: 'query',
            description:
              'Comma-separated list of data types to filter by (NUMERIC, BOOLEAN, CATEGORICAL, TEXT, CORRECTION). Case-insensitive — `numeric` and `NUMERIC` are equivalent. Must be a single value when used with value, valueMin, or valueMax; otherwise the request returns HTTP 400. Must be NUMERIC when used with valueMin or valueMax.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      environment: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'environment',
            in: 'query',
            description: 'Comma-separated list of environments to filter by.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      configId: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'configId',
            in: 'query',
            description: 'Comma-separated list of score config IDs to filter by.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      queueId: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'queueId',
            in: 'query',
            description: 'Comma-separated list of annotation queue IDs to filter by.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      authorUserId: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'authorUserId',
            in: 'query',
            description: 'Comma-separated list of author user IDs to filter by.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      value: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'value',
            in: 'query',
            description:
              'Comma-separated list of exact values to filter by. Requires a single dataType from NUMERIC, BOOLEAN, or CATEGORICAL; any other dataType, multiple dataTypes, or omitting dataType returns HTTP 400. For BOOLEAN, each value must be "true" or "false"; for NUMERIC, each value must be a finite number. Otherwise the request returns HTTP 400.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      valueMin: z
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
              z.float64(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'valueMin',
            in: 'query',
            description:
              'Inclusive lower bound on the numeric value. Requires dataType=NUMERIC as a single value; otherwise the request returns HTTP 400.',
            required: false,
            schema: { type: 'number', format: 'double', nullable: true },
          },
        }),
      valueMax: z
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
              z.float64(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'valueMax',
            in: 'query',
            description:
              'Inclusive upper bound on the numeric value. Requires dataType=NUMERIC as a single value; otherwise the request returns HTTP 400.',
            required: false,
            schema: { type: 'number', format: 'double', nullable: true },
          },
        }),
      traceId: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'traceId',
            in: 'query',
            description:
              'Comma-separated list of trace IDs to filter by. Mutually exclusive with sessionId, experimentId. May be combined with observationId to scope the observation lookup to a specific trace.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      sessionId: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'sessionId',
            in: 'query',
            description:
              'Comma-separated list of session IDs to filter by. Mutually exclusive with traceId, observationId, experimentId.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      observationId: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'observationId',
            in: 'query',
            description:
              'Comma-separated list of observation IDs to filter by. Requires traceId to be specified, because observation IDs are scoped to a trace. Mutually exclusive with sessionId, experimentId. Returns HTTP 400 when used without traceId.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      experimentId: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'experimentId',
            in: 'query',
            description:
              'Comma-separated list of dataset run IDs (experiment IDs) to filter by. Mutually exclusive with traceId, sessionId, observationId.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      fromTimestamp: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'fromTimestamp',
            in: 'query',
            description: 'Inclusive lower bound on the score timestamp.',
            required: false,
            schema: { type: 'string', format: 'date-time', nullable: true },
          },
        }),
      toTimestamp: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'toTimestamp',
            in: 'query',
            description: 'Exclusive upper bound on the score timestamp.',
            required: false,
            schema: { type: 'string', format: 'date-time', nullable: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetScoresV3ResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicSkillsRoute = createRoute({
  method: 'get',
  path: '/api/public/skills',
  tags: ['Skills'],
  description:
    'List skills with metadata and timestamps from their latest version, shared tags, and the version assigned to production when present.',
  operationId: 'skills_list',
  request: {
    query: z.object({
      name: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Filter by exact skill name.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      search: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            description:
              'Case-insensitive search across skill names and latest-version descriptions.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      tag: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'tag',
            in: 'query',
            description: 'Filter by a shared skill tag.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      page: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      limit: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      fromUpdatedAt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'fromUpdatedAt',
            in: 'query',
            description:
              'Include skills whose latest version was updated at or after this timestamp.',
            required: false,
            schema: { type: 'string', format: 'date-time', nullable: true },
          },
        }),
      toUpdatedAt: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'toUpdatedAt',
            in: 'query',
            description: 'Include skills whose latest version was updated before this timestamp.',
            required: false,
            schema: { type: 'string', format: 'date-time', nullable: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: SkillMetaListResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const postApiPublicSkillsRoute = createRoute({
  method: 'post',
  path: '/api/public/skills',
  tags: ['Skills'],
  description: 'Create skill version',
  operationId: 'skills_createVersion',
  request: {
    body: {
      content: { 'application/json': { schema: CreateSkillVersionRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: '', content: { 'application/json': { schema: SkillVersionSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicSkillsSkillNameRoute = createRoute({
  method: 'get',
  path: '/api/public/skills/{skillName}',
  tags: ['Skills'],
  description:
    "Resolve a skill's metadata and file manifest by version or label. Defaults to the production label. Set includeContent to return file contents inline, or use each file's sha256Hash with getFileContents.",
  operationId: 'skills_get',
  request: {
    params: z.object({
      skillName: z
        .string()
        .openapi({
          param: { name: 'skillName', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      version: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      label: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'label',
            in: 'query',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      includeContent: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            name: 'includeContent',
            in: 'query',
            description: 'Include UTF-8 text content in each file. Defaults to false.',
            required: false,
            schema: { type: 'boolean', nullable: true },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: SkillVersionSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const patchApiPublicSkillsSkillNameRoute = createRoute({
  method: 'patch',
  path: '/api/public/skills/{skillName}',
  tags: ['Skills'],
  description:
    'Replace the shared tags across all versions of a skill. An empty tags list clears all tags. Returns the latest skill version with the updated tags.',
  operationId: 'skills_update',
  request: {
    params: z.object({
      skillName: z
        .string()
        .openapi({
          param: { name: 'skillName', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateSkillRequestSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: SkillVersionSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicSkillsFilesContentRoute = createRoute({
  method: 'get',
  path: '/api/public/skills/files/content',
  tags: ['Skills'],
  description: 'Read a batch of text contents by canonical base64-encoded SHA-256 hashes.',
  operationId: 'skills_getFileContents',
  request: {
    query: z.object({
      sha256Hashes: z
        .string()
        .openapi({
          param: {
            name: 'sha256Hashes',
            in: 'query',
            description:
              'Comma-separated list of one to 50 canonical base64-encoded SHA-256 hashes from skill file manifests. URL-encode the value, including +, /, and = characters.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: SkillFileContentsResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const deleteApiPublicSkillsSkillNameVersionsSkillVersionRoute = createRoute({
  method: 'delete',
  path: '/api/public/skills/{skillName}/versions/{skillVersion}',
  tags: ['Skills'],
  description:
    'Delete one immutable skill version. Unreferenced blobs are retained for asynchronous cleanup.',
  operationId: 'skills_deleteVersion',
  request: {
    params: z.object({
      skillName: z
        .string()
        .openapi({
          param: { name: 'skillName', in: 'path', required: true, schema: { type: 'string' } },
        }),
      skillVersion: z
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
          param: { name: 'skillVersion', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: DeleteSkillVersionResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const patchApiPublicSkillsSkillNameVersionsSkillVersionRoute = createRoute({
  method: 'patch',
  path: '/api/public/skills/{skillName}/versions/{skillVersion}',
  tags: ['Skills'],
  description:
    'Replace the labels on a skill version and atomically move them from other versions.',
  operationId: 'skills_setLabels',
  request: {
    params: z.object({
      skillName: z
        .string()
        .openapi({
          param: { name: 'skillName', in: 'path', required: true, schema: { type: 'string' } },
        }),
      skillVersion: z
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
          param: { name: 'skillVersion', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateSkillLabelsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: SkillVersionSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const deleteApiPublicTracesTraceIdRoute = createRoute({
  method: 'delete',
  path: '/api/public/traces/{traceId}',
  tags: ['Trace'],
  description: 'Delete a specific trace',
  operationId: 'trace_delete',
  request: {
    params: z.object({
      traceId: z
        .string()
        .openapi({
          param: {
            name: 'traceId',
            in: 'path',
            description: 'The unique langfuse identifier of the trace to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: DeleteTraceResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const deleteApiPublicTracesRoute = createRoute({
  method: 'delete',
  path: '/api/public/traces',
  tags: ['Trace'],
  description: 'Delete multiple traces',
  operationId: 'trace_deleteMultiple',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              traceIds: z.array(z.string()).openapi({ description: 'List of trace IDs to delete' }),
            })
            .openapi({ required: ['traceIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: DeleteTraceResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicUnstableDashboardWidgetsRoute = createRoute({
  method: 'get',
  path: '/api/public/unstable/dashboard-widgets',
  tags: ['UnstableDashboardWidgets'],
  description:
    'List dashboard widgets in the project, ordered by most recently\nupdated first.\n\nResponses may include legacy `traces` widgets created before this\nAPI existed. New widgets cannot be created with `view: traces`.',
  operationId: 'unstable_dashboardWidgets_list',
  request: {
    query: z.object({
      page: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            description: '1-based page number. Defaults to `1`.',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      limit: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Maximum number of items per page. Defaults to `50`.',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UnstableDashboardWidgetListSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    429: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
})

export const postApiPublicUnstableDashboardWidgetsRoute = createRoute({
  method: 'post',
  path: '/api/public/unstable/dashboard-widgets',
  tags: ['UnstableDashboardWidgets'],
  description:
    'Create a dashboard widget (a standalone chart definition you place on\nany dashboard).\n\nThis endpoint creates the widget only; place it on a dashboard via\n`POST /dashboards/{dashboardId}/placements`.\n\nSupported views are `observations`, `scores-numeric`, `scores-boolean`, and `scores-categorical`.\nThe legacy `traces` view is not supported by this unstable API.\nWidgets are created as v2 internally.\n\n`chartConfig` is optional and defaults to the plain config for\n`chartType`; when `chartConfig.type` is given it must match\n`chartType`.\n\nUnstable API note:\n- This surface may evolve while dashboard/widget APIs are being finalized.',
  operationId: 'unstable_dashboardWidgets_create',
  request: {
    body: {
      content: { 'application/json': { schema: UnstableCreateDashboardWidgetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UnstableDashboardWidgetSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    429: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicUnstableDashboardWidgetsWidgetIdRoute = createRoute({
  method: 'get',
  path: '/api/public/unstable/dashboard-widgets/{widgetId}',
  tags: ['UnstableDashboardWidgets'],
  description:
    'Get a dashboard widget by id.\n\nThe response may use `view: traces` for legacy widgets.',
  operationId: 'unstable_dashboardWidgets_get',
  request: {
    params: z.object({
      widgetId: z
        .string()
        .openapi({
          param: { name: 'widgetId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UnstableDashboardWidgetSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    429: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
})

export const deleteApiPublicUnstableDashboardWidgetsWidgetIdRoute = createRoute({
  method: 'delete',
  path: '/api/public/unstable/dashboard-widgets/{widgetId}',
  tags: ['UnstableDashboardWidgets'],
  description:
    'Delete a dashboard widget.\n\nThe API returns `409` while the widget is still placed on a dashboard.\nRemove those placements first.',
  operationId: 'unstable_dashboardWidgets_delete',
  request: {
    params: z.object({
      widgetId: z
        .string()
        .openapi({
          param: { name: 'widgetId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UnstableDeleteDashboardWidgetResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    409: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
    429: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
})

export const patchApiPublicUnstableDashboardWidgetsWidgetIdRoute = createRoute({
  method: 'patch',
  path: '/api/public/unstable/dashboard-widgets/{widgetId}',
  tags: ['UnstableDashboardWidgets'],
  description:
    "Update a dashboard widget.\n\nAll fields are optional; at least one field is required.\nChanging `chartType` without sending `chartConfig` resets the config\nto the new chart type's defaults. When `chartConfig.type` is given\nit must match the widget's (possibly updated) `chartType`.\n\n`view` cannot be changed to the legacy `traces` value. Existing\n`traces` widgets may be updated on other fields.",
  operationId: 'unstable_dashboardWidgets_update',
  request: {
    params: z.object({
      widgetId: z
        .string()
        .openapi({
          param: { name: 'widgetId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UnstableUpdateDashboardWidgetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UnstableDashboardWidgetSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    429: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicUnstableDashboardsRoute = createRoute({
  method: 'get',
  path: '/api/public/unstable/dashboards',
  tags: ['UnstableDashboards'],
  description: 'List dashboards in the project, ordered by most recently updated\nfirst.',
  operationId: 'unstable_dashboards_list',
  request: {
    query: z.object({
      page: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            description: '1-based page number. Defaults to `1`.',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      limit: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Maximum number of items per page. Defaults to `50`.',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UnstableDashboardListSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    429: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
})

export const postApiPublicUnstableDashboardsRoute = createRoute({
  method: 'post',
  path: '/api/public/unstable/dashboards',
  tags: ['UnstableDashboards'],
  description: 'Create a dashboard.',
  operationId: 'unstable_dashboards_create',
  request: {
    body: {
      content: { 'application/json': { schema: UnstableCreateDashboardRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: UnstableDashboardSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    429: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicUnstableDashboardsDashboardIdRoute = createRoute({
  method: 'get',
  path: '/api/public/unstable/dashboards/{dashboardId}',
  tags: ['UnstableDashboards'],
  description: 'Get a dashboard by id.',
  operationId: 'unstable_dashboards_get',
  request: {
    params: z.object({
      dashboardId: z
        .string()
        .openapi({
          param: { name: 'dashboardId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: UnstableDashboardSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    429: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
})

export const deleteApiPublicUnstableDashboardsDashboardIdRoute = createRoute({
  method: 'delete',
  path: '/api/public/unstable/dashboards/{dashboardId}',
  tags: ['UnstableDashboards'],
  description: 'Delete a dashboard.',
  operationId: 'unstable_dashboards_delete',
  request: {
    params: z.object({
      dashboardId: z
        .string()
        .openapi({
          param: { name: 'dashboardId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UnstableDeleteDashboardResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    429: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
})

export const patchApiPublicUnstableDashboardsDashboardIdRoute = createRoute({
  method: 'patch',
  path: '/api/public/unstable/dashboards/{dashboardId}',
  tags: ['UnstableDashboards'],
  description: "Update a dashboard's name, description, definition, or filters.",
  operationId: 'unstable_dashboards_update',
  request: {
    params: z.object({
      dashboardId: z
        .string()
        .openapi({
          param: { name: 'dashboardId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UnstableUpdateDashboardRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: UnstableDashboardSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    429: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
})

export const postApiPublicUnstableDashboardsDashboardIdPlacementsRoute = createRoute({
  method: 'post',
  path: '/api/public/unstable/dashboards/{dashboardId}/placements',
  tags: ['UnstableDashboards'],
  description:
    'Add a placement to a dashboard grid (see `DashboardPlacement` for\ngrid semantics).\n\n`id` and the position fields are optional: when omitted, the\nplacement gets a server-generated id and is appended below all\nexisting tiles as a 6x6 tile. Returns the created placement.\n\nThe referenced widget must exist in the same project or be a\nLangfuse-managed widget. The API returns `409` if a placement with\nthe same `id` already exists on the dashboard.',
  operationId: 'unstable_dashboards_addPlacement',
  request: {
    params: z.object({
      dashboardId: z
        .string()
        .openapi({
          param: { name: 'dashboardId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UnstableCreateDashboardPlacementRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UnstableDashboardPlacementSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    409: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
    429: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
})

export const deleteApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdRoute = createRoute({
  method: 'delete',
  path: '/api/public/unstable/dashboards/{dashboardId}/placements/{placementId}',
  tags: ['UnstableDashboards'],
  description: 'Remove a placement from a dashboard grid without deleting the referenced widget.',
  operationId: 'unstable_dashboards_deletePlacement',
  request: {
    params: z.object({
      dashboardId: z
        .string()
        .openapi({
          param: { name: 'dashboardId', in: 'path', required: true, schema: { type: 'string' } },
        }),
      placementId: z
        .string()
        .openapi({
          param: { name: 'placementId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UnstableDeleteDashboardPlacementResponseSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    429: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
})

export const patchApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdRoute = createRoute({
  method: 'patch',
  path: '/api/public/unstable/dashboards/{dashboardId}/placements/{placementId}',
  tags: ['UnstableDashboards'],
  description:
    "Move or resize a placement. All fields are optional; at least one is\nrequired. Omitted fields keep their current value. The placement's\ncontent (widget/preset reference) and id cannot change — delete and\nre-add the placement to swap content. Returns the updated placement.",
  operationId: 'unstable_dashboards_updatePlacement',
  request: {
    params: z.object({
      dashboardId: z
        .string()
        .openapi({
          param: { name: 'dashboardId', in: 'path', required: true, schema: { type: 'string' } },
        }),
      placementId: z
        .string()
        .openapi({
          param: { name: 'placementId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UnstableUpdateDashboardPlacementRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UnstableDashboardPlacementSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    429: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicUnstableTopicFacetsRoute = createRoute({
  method: 'get',
  path: '/api/public/unstable/topic-facets',
  tags: ['UnstableTopics'],
  description:
    "Unstable: Topics is in closed beta. The shape may change without notice.\n\nList the project's Topics facets. Only active facets (attached to the\nproject's Topics rule, or all facets if the project has no rule) are\nreturned unless `filter` contains an `active` condition.\n\n`filter` is a JSON array of filter conditions combined with AND.\nString matching is case-insensitive. Columns: `id` (stringOptions),\n`name` (string, stringOptions), `description` (string), `isBuiltIn`\n(boolean), `active` (boolean).",
  operationId: 'unstable_topics_listFacets',
  request: {
    query: z.object({
      filter: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              'JSON array of filter conditions, for example `[{"type":"string","column":"name","operator":"contains","value":"issue"}]`.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      page: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            description: '1-based page number. Defaults to `1`.',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      limit: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Maximum number of items per page. Defaults to `50`, at most `100`.',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UnstableTopicFacetListSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    429: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicUnstableTopicFacetsFacetIdRoute = createRoute({
  method: 'get',
  path: '/api/public/unstable/topic-facets/{facetId}',
  tags: ['UnstableTopics'],
  description:
    'Unstable: Topics is in closed beta. The shape may change without notice.\n\nGet one Topics facet by id, including inactive facets.',
  operationId: 'unstable_topics_getFacet',
  request: {
    params: z.object({
      facetId: z
        .string()
        .openapi({
          param: { name: 'facetId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: UnstableTopicFacetSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    429: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicUnstableTopicsRoute = createRoute({
  method: 'get',
  path: '/api/public/unstable/topics',
  tags: ['UnstableTopics'],
  description:
    "Unstable: Topics is in closed beta. The shape may change without notice.\n\nList the topics of each active facet's current published map, with\nthe number of traces currently assigned to each topic in the window.\nRetired topics are not listed. `facets` holds per-facet trace counts\nby topic status.\n\nThe window applies to the trace start time. It defaults to the last\n7 days and can span at most 93 days.\n\n`filter` is a JSON array of filter conditions combined with AND.\nString matching is case-insensitive. Columns: `facetId`\n(stringOptions), `facetName` (string, stringOptions), `id`\n(stringOptions), `name` (string, stringOptions). Facet conditions also\nrestrict `facets`.",
  operationId: 'unstable_topics_list',
  request: {
    query: z.object({
      fromTimestamp: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'fromTimestamp',
            in: 'query',
            description:
              'Start of the window (trace start time, inclusive). Defaults to 7 days before `toTimestamp`.',
            required: false,
            schema: { type: 'string', format: 'date-time', nullable: true },
          },
        }),
      toTimestamp: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'toTimestamp',
            in: 'query',
            description: 'End of the window (trace start time, exclusive). Defaults to now.',
            required: false,
            schema: { type: 'string', format: 'date-time', nullable: true },
          },
        }),
      filter: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              'JSON array of filter conditions, for example `[{"type":"stringOptions","column":"facetName","operator":"any of","value":["Issues"]}]`.',
            required: false,
            schema: { type: 'string', nullable: true },
          },
        }),
      orderBy: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.enum(['traceCount.desc', 'traceCount.asc', 'name.asc', 'name.desc']).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'orderBy',
            in: 'query',
            description: 'Defaults to `traceCount.desc`.',
            required: false,
            schema: {
              title: 'unstableTopicsOrderBy',
              type: 'string',
              enum: ['traceCount.desc', 'traceCount.asc', 'name.asc', 'name.desc'],
              nullable: true,
            },
          },
          title: 'unstableTopicsOrderBy',
        }),
      page: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            description: '1-based page number. Defaults to `1`.',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
      limit: z
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
              z.int(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Maximum number of items per page. Defaults to `50`, at most `100`.',
            required: false,
            schema: { type: 'integer', nullable: true },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: UnstableTopicListSchema } } },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    429: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
})

export const getApiPublicUnstableTopicsTopicIdRoute = createRoute({
  method: 'get',
  path: '/api/public/unstable/topics/{topicId}',
  tags: ['UnstableTopics'],
  description:
    'Unstable: Topics is in closed beta. The shape may change without notice.\n\nGet one topic by its stable id. Topics on the current map are always\nfound. A retired topic is found while traces in the window are still\nassigned to it, with `inCurrentMap: false`.',
  operationId: 'unstable_topics_get',
  request: {
    params: z.object({
      topicId: z
        .string()
        .openapi({
          param: { name: 'topicId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      fromTimestamp: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'fromTimestamp',
            in: 'query',
            description:
              'Start of the window used for `traceCount`. Defaults to 7 days before `toTimestamp`.',
            required: false,
            schema: { type: 'string', format: 'date-time', nullable: true },
          },
        }),
      toTimestamp: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'toTimestamp',
            in: 'query',
            description: 'End of the window used for `traceCount`. Defaults to now.',
            required: false,
            schema: { type: 'string', format: 'date-time', nullable: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UnstableTopicWithStatusSchema } },
    },
    400: { description: '', content: { 'application/json': { schema: z.any() } } },
    401: { description: '', content: { 'application/json': { schema: z.any() } } },
    403: { description: '', content: { 'application/json': { schema: z.any() } } },
    404: { description: '', content: { 'application/json': { schema: z.any() } } },
    405: { description: '', content: { 'application/json': { schema: z.any() } } },
    429: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/json': { schema: UnstablePublicApiErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
})
