import { createRoute, z } from '@hono/zod-openapi'

const EnterpriseCrmEventbusProtoFunctionSchema: z.ZodType<EnterpriseCrmEventbusProtoFunctionType> =
  z
    .lazy(() =>
      z
        .object({
          functionType: EnterpriseCrmEventbusProtoFunctionTypeSchema.exactOptional().openapi({
            description: 'The name of the function to perform.',
          }),
          parameters: z
            .array(EnterpriseCrmEventbusProtoTransformExpressionSchema)
            .exactOptional()
            .openapi({ description: 'List of parameters required for the transformation.' }),
        })
        .openapi({ required: [] }),
    )
    .openapi('EnterpriseCrmEventbusProtoFunction')

const EnterpriseCrmEventbusProtoBooleanParameterArraySchema = z
  .object({ booleanValues: z.array(z.boolean()).exactOptional() })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoBooleanParameterArray')

const EnterpriseCrmEventbusProtoDoubleParameterArraySchema = z
  .object({ doubleValues: z.array(z.float64()).exactOptional() })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoDoubleParameterArray')

const EnterpriseCrmEventbusProtoIntParameterArraySchema = z
  .object({ intValues: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoIntParameterArray')

const EnterpriseCrmEventbusProtoProtoParameterArraySchema = z
  .object({
    protoValues: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoProtoParameterArray')

const EnterpriseCrmEventbusProtoSerializedObjectParameterSchema = z
  .object({ objectValue: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoSerializedObjectParameter')

const EnterpriseCrmEventbusProtoStringParameterArraySchema = z
  .object({ stringValues: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoStringParameterArray')

type EnterpriseCrmEventbusProtoParameterValueTypeType = {
  booleanArray?: z.infer<typeof EnterpriseCrmEventbusProtoBooleanParameterArraySchema>
  booleanValue?: boolean
  doubleArray?: z.infer<typeof EnterpriseCrmEventbusProtoDoubleParameterArraySchema>
  doubleValue?: number
  intArray?: z.infer<typeof EnterpriseCrmEventbusProtoIntParameterArraySchema>
  intValue?: string
  protoArray?: z.infer<typeof EnterpriseCrmEventbusProtoProtoParameterArraySchema>
  protoValue?: { [key: string]: { [key: string]: unknown } }
  serializedObjectValue?: z.infer<typeof EnterpriseCrmEventbusProtoSerializedObjectParameterSchema>
  stringArray?: z.infer<typeof EnterpriseCrmEventbusProtoStringParameterArraySchema>
  stringValue?: string
}

const EnterpriseCrmEventbusProtoParameterValueTypeSchema: z.ZodType<EnterpriseCrmEventbusProtoParameterValueTypeType> =
  z
    .object({
      booleanArray: EnterpriseCrmEventbusProtoBooleanParameterArraySchema.exactOptional(),
      booleanValue: z.boolean().exactOptional(),
      doubleArray: EnterpriseCrmEventbusProtoDoubleParameterArraySchema.exactOptional(),
      doubleValue: z.float64().exactOptional(),
      intArray: EnterpriseCrmEventbusProtoIntParameterArraySchema.exactOptional(),
      intValue: z.string().exactOptional(),
      protoArray: EnterpriseCrmEventbusProtoProtoParameterArraySchema.exactOptional(),
      protoValue: z
        .record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        )
        .exactOptional(),
      serializedObjectValue:
        EnterpriseCrmEventbusProtoSerializedObjectParameterSchema.exactOptional(),
      stringArray: EnterpriseCrmEventbusProtoStringParameterArraySchema.exactOptional(),
      stringValue: z.string().exactOptional(),
    })
    .openapi({
      description:
        'LINT.IfChange To support various types of parameter values. Next available id: 14',
      required: [],
    })
    .openapi('EnterpriseCrmEventbusProtoParameterValueType')

type EnterpriseCrmEventbusProtoBaseValueType = {
  baseFunction?: z.infer<typeof EnterpriseCrmEventbusProtoFunctionSchema>
  literalValue?: z.infer<typeof EnterpriseCrmEventbusProtoParameterValueTypeSchema>
  referenceValue?: string
}

const EnterpriseCrmEventbusProtoBaseFunctionSchema = z
  .object({
    functionName: z
      .enum([
        'UNSPECIFIED',
        'NOW_IN_MILLIS',
        'INT_LIST',
        'ENVIRONMENT',
        'GET_EXECUTION_ID',
        'GET_INTEGRATION_NAME',
        'GET_REGION',
        'GET_UUID',
        'GET_PROJECT_ID',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoBaseFunction')

const EnterpriseCrmEventbusProtoBooleanArrayFunctionSchema = z
  .object({
    functionName: z
      .enum([
        'UNSPECIFIED',
        'GET',
        'APPEND',
        'SIZE',
        'TO_SET',
        'APPEND_ALL',
        'TO_JSON',
        'SET',
        'REMOVE',
        'REMOVE_AT',
        'CONTAINS',
        'FOR_EACH',
        'FILTER',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoBooleanArrayFunction')

const EnterpriseCrmEventbusProtoBooleanFunctionSchema = z
  .object({
    functionName: z
      .enum([
        'UNSPECIFIED',
        'TO_JSON',
        'NOT',
        'AND',
        'NAND',
        'OR',
        'XOR',
        'NOR',
        'XNOR',
        'TO_STRING',
        'EQUALS',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoBooleanFunction')

const EnterpriseCrmEventbusProtoDoubleArrayFunctionSchema = z
  .object({
    functionName: z
      .enum([
        'UNSPECIFIED',
        'GET',
        'APPEND',
        'SIZE',
        'SUM',
        'AVG',
        'MAX',
        'MIN',
        'TO_SET',
        'APPEND_ALL',
        'TO_JSON',
        'SET',
        'REMOVE',
        'REMOVE_AT',
        'CONTAINS',
        'FOR_EACH',
        'FILTER',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoDoubleArrayFunction')

const EnterpriseCrmEventbusProtoDoubleFunctionSchema = z
  .object({
    functionName: z
      .enum([
        'UNSPECIFIED',
        'TO_JSON',
        'TO_STRING',
        'ADD',
        'SUBTRACT',
        'MULTIPLY',
        'DIVIDE',
        'EXPONENT',
        'ROUND',
        'FLOOR',
        'CEIL',
        'GREATER_THAN',
        'LESS_THAN',
        'EQUALS',
        'GREATER_THAN_EQUALS',
        'LESS_THAN_EQUALS',
        'MOD',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoDoubleFunction')

const EnterpriseCrmEventbusProtoIntArrayFunctionSchema = z
  .object({
    functionName: z
      .enum([
        'UNSPECIFIED',
        'GET',
        'APPEND',
        'SIZE',
        'SUM',
        'AVG',
        'MAX',
        'MIN',
        'TO_SET',
        'APPEND_ALL',
        'TO_JSON',
        'SET',
        'REMOVE',
        'REMOVE_AT',
        'CONTAINS',
        'FOR_EACH',
        'FILTER',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoIntArrayFunction')

const EnterpriseCrmEventbusProtoIntFunctionSchema = z
  .object({
    functionName: z
      .enum([
        'UNSPECIFIED',
        'ADD',
        'SUBTRACT',
        'MULTIPLY',
        'DIVIDE',
        'EXPONENT',
        'GREATER_THAN_EQUAL_TO',
        'GREATER_THAN',
        'LESS_THAN_EQUAL_TO',
        'LESS_THAN',
        'TO_DOUBLE',
        'TO_STRING',
        'EQUALS',
        'TO_JSON',
        'MOD',
        'EPOCH_TO_HUMAN_READABLE_TIME',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoIntFunction')

const EnterpriseCrmEventbusProtoJsonFunctionSchema = z
  .object({
    functionName: z
      .enum([
        'UNSPECIFIED',
        'GET_PROPERTY',
        'GET_ELEMENT',
        'APPEND_ELEMENT',
        'SIZE',
        'SET_PROPERTY',
        'FLATTEN',
        'FLATTEN_ONCE',
        'MERGE',
        'TO_STRING',
        'TO_INT',
        'TO_DOUBLE',
        'TO_BOOLEAN',
        'TO_PROTO',
        'TO_STRING_ARRAY',
        'TO_INT_ARRAY',
        'TO_DOUBLE_ARRAY',
        'TO_PROTO_ARRAY',
        'TO_BOOLEAN_ARRAY',
        'REMOVE_PROPERTY',
        'RESOLVE_TEMPLATE',
        'EQUALS',
        'FOR_EACH',
        'FILTER_ELEMENTS',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoJsonFunction')

const EnterpriseCrmEventbusProtoProtoArrayFunctionSchema = z
  .object({
    functionName: z
      .enum([
        'UNSPECIFIED',
        'GET',
        'APPEND',
        'SIZE',
        'TO_SET',
        'APPEND_ALL',
        'TO_JSON',
        'SET',
        'REMOVE',
        'REMOVE_AT',
        'CONTAINS',
        'FOR_EACH',
        'FILTER',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoProtoArrayFunction')

const EnterpriseCrmEventbusProtoProtoFunctionSchema = z
  .object({
    functionName: z
      .enum([
        'UNSPECIFIED',
        'GET_STRING_SUBFIELD',
        'GET_INT_SUBFIELD',
        'GET_DOUBLE_SUBFIELD',
        'GET_BOOLEAN_SUBFIELD',
        'GET_STRING_ARRAY_SUBFIELD',
        'GET_INT_ARRAY_SUBFIELD',
        'GET_DOUBLE_ARRAY_SUBFIELD',
        'GET_BOOLEAN_ARRAY_SUBFIELD',
        'GET_PROTO_ARRAY_SUBFIELD',
        'GET_PROTO_SUBFIELD',
        'TO_JSON',
        'GET_BYTES_SUBFIELD_AS_UTF_8_STRING',
        'GET_BYTES_SUBFIELD_AS_PROTO',
        'EQUALS',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoProtoFunction')

const EnterpriseCrmEventbusProtoStringArrayFunctionSchema = z
  .object({
    functionName: z
      .enum([
        'UNSPECIFIED',
        'GET',
        'APPEND',
        'SIZE',
        'TO_SET',
        'APPEND_ALL',
        'TO_JSON',
        'SET',
        'REMOVE',
        'REMOVE_AT',
        'CONTAINS',
        'FOR_EACH',
        'FILTER',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoStringArrayFunction')

const EnterpriseCrmEventbusProtoStringFunctionSchema = z
  .object({
    functionName: z
      .enum([
        'UNSPECIFIED',
        'CONCAT',
        'TO_UPPERCASE',
        'TO_LOWERCASE',
        'CONTAINS',
        'SPLIT',
        'LENGTH',
        'EQUALS',
        'TO_INT',
        'TO_DOUBLE',
        'TO_BOOLEAN',
        'TO_BASE_64',
        'TO_JSON',
        'EQUALS_IGNORE_CASE',
        'REPLACE_ALL',
        'SUBSTRING',
        'RESOLVE_TEMPLATE',
        'DECODE_BASE64_STRING',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoStringFunction')

type EnterpriseCrmEventbusProtoFunctionTypeType = {
  baseFunction?: z.infer<typeof EnterpriseCrmEventbusProtoBaseFunctionSchema>
  booleanArrayFunction?: z.infer<typeof EnterpriseCrmEventbusProtoBooleanArrayFunctionSchema>
  booleanFunction?: z.infer<typeof EnterpriseCrmEventbusProtoBooleanFunctionSchema>
  doubleArrayFunction?: z.infer<typeof EnterpriseCrmEventbusProtoDoubleArrayFunctionSchema>
  doubleFunction?: z.infer<typeof EnterpriseCrmEventbusProtoDoubleFunctionSchema>
  intArrayFunction?: z.infer<typeof EnterpriseCrmEventbusProtoIntArrayFunctionSchema>
  intFunction?: z.infer<typeof EnterpriseCrmEventbusProtoIntFunctionSchema>
  jsonFunction?: z.infer<typeof EnterpriseCrmEventbusProtoJsonFunctionSchema>
  protoArrayFunction?: z.infer<typeof EnterpriseCrmEventbusProtoProtoArrayFunctionSchema>
  protoFunction?: z.infer<typeof EnterpriseCrmEventbusProtoProtoFunctionSchema>
  stringArrayFunction?: z.infer<typeof EnterpriseCrmEventbusProtoStringArrayFunctionSchema>
  stringFunction?: z.infer<typeof EnterpriseCrmEventbusProtoStringFunctionSchema>
}

const EnterpriseCrmEventbusProtoFunctionTypeSchema: z.ZodType<EnterpriseCrmEventbusProtoFunctionTypeType> =
  z
    .object({
      baseFunction: EnterpriseCrmEventbusProtoBaseFunctionSchema.exactOptional().openapi({
        description: 'LINT.IfChange',
      }),
      booleanArrayFunction: EnterpriseCrmEventbusProtoBooleanArrayFunctionSchema.exactOptional(),
      booleanFunction: EnterpriseCrmEventbusProtoBooleanFunctionSchema.exactOptional(),
      doubleArrayFunction: EnterpriseCrmEventbusProtoDoubleArrayFunctionSchema.exactOptional(),
      doubleFunction: EnterpriseCrmEventbusProtoDoubleFunctionSchema.exactOptional(),
      intArrayFunction: EnterpriseCrmEventbusProtoIntArrayFunctionSchema.exactOptional(),
      intFunction: EnterpriseCrmEventbusProtoIntFunctionSchema.exactOptional(),
      jsonFunction: EnterpriseCrmEventbusProtoJsonFunctionSchema.exactOptional().openapi({
        description:
          'LINT.ThenChange(//depot/google3/alkali/apps/integrationplatform/client/workflow_editor/utils/transform_function.ts)',
      }),
      protoArrayFunction: EnterpriseCrmEventbusProtoProtoArrayFunctionSchema.exactOptional(),
      protoFunction: EnterpriseCrmEventbusProtoProtoFunctionSchema.exactOptional(),
      stringArrayFunction: EnterpriseCrmEventbusProtoStringArrayFunctionSchema.exactOptional(),
      stringFunction: EnterpriseCrmEventbusProtoStringFunctionSchema.exactOptional(),
    })
    .openapi({ required: [] })
    .openapi('EnterpriseCrmEventbusProtoFunctionType')

const EnterpriseCrmEventbusProtoTransformExpressionSchema: z.ZodType<EnterpriseCrmEventbusProtoTransformExpressionType> =
  z
    .lazy(() =>
      z
        .object({
          initialValue: EnterpriseCrmEventbusProtoBaseValueSchema.exactOptional().openapi({
            description: 'Initial value upon which to perform transformations.',
          }),
          transformationFunctions: z
            .array(EnterpriseCrmEventbusProtoFunctionSchema)
            .exactOptional()
            .openapi({ description: 'Transformations to be applied sequentially.' }),
        })
        .openapi({ required: [] }),
    )
    .openapi('EnterpriseCrmEventbusProtoTransformExpression')

type EnterpriseCrmEventbusProtoFunctionType = {
  functionType?: z.infer<typeof EnterpriseCrmEventbusProtoFunctionTypeSchema>
  parameters?: z.infer<typeof EnterpriseCrmEventbusProtoTransformExpressionSchema>[]
}

const EnterpriseCrmEventbusProtoBaseValueSchema: z.ZodType<EnterpriseCrmEventbusProtoBaseValueType> =
  z
    .lazy(() =>
      z
        .object({
          baseFunction: EnterpriseCrmEventbusProtoFunctionSchema.exactOptional().openapi({
            description:
              'Start with a function that does not build on existing values. Eg. CurrentTime, Min, Max, Exists, etc.',
          }),
          literalValue: EnterpriseCrmEventbusProtoParameterValueTypeSchema.exactOptional().openapi({
            description: 'Start with a literal value.',
          }),
          referenceValue: z
            .string()
            .exactOptional()
            .openapi({ description: 'Start with a reference value to dereference.' }),
        })
        .openapi({ required: [] }),
    )
    .openapi('EnterpriseCrmEventbusProtoBaseValue')

type EnterpriseCrmEventbusProtoTransformExpressionType = {
  initialValue?: z.infer<typeof EnterpriseCrmEventbusProtoBaseValueSchema>
  transformationFunctions?: z.infer<typeof EnterpriseCrmEventbusProtoFunctionSchema>[]
}

const EnterpriseCrmEventbusProtoDoubleArraySchema = z
  .object({ values: z.array(z.float64()).exactOptional() })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoDoubleArray')

const EnterpriseCrmEventbusProtoIntArraySchema = z
  .object({ values: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoIntArray')

const EnterpriseCrmEventbusProtoStringArraySchema = z
  .object({ values: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoStringArray')

const EnterpriseCrmEventbusProtoValueTypeSchema = z
  .object({
    booleanValue: z.boolean().exactOptional(),
    doubleArray: EnterpriseCrmEventbusProtoDoubleArraySchema.exactOptional(),
    doubleValue: z.float64().exactOptional(),
    intArray: EnterpriseCrmEventbusProtoIntArraySchema.exactOptional(),
    intValue: z.string().exactOptional(),
    protoValue: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional(),
    stringArray: EnterpriseCrmEventbusProtoStringArraySchema.exactOptional(),
    stringValue: z.string().exactOptional(),
  })
  .openapi({
    description:
      'Used for define type for values. Currently supported value types include int, string, double, array, and any proto message.',
    required: [],
  })
  .openapi('EnterpriseCrmEventbusProtoValueType')

const EnterpriseCrmLoggingGwsSanitizeOptionsSchema = z
  .object({
    isAlreadySanitized: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, the value has already been sanitized and needs no further sanitization. For instance, a D3 customer id is already an obfuscated entity and *might not* need further sanitization.',
      }),
    logType: z
      .array(z.enum(['LOG_TYPE_UNSPECIFIED', 'GWS', 'GTS', 'ALL']))
      .exactOptional()
      .openapi({ description: 'To which type(s) of logs the sanitize options apply.' }),
    privacy: z
      .enum(['PRIVACY_TYPE_UNSPECIFIED', 'NOT_PII', 'PII', 'SPII', 'UNSURE'])
      .exactOptional(),
    sanitizeType: z
      .enum([
        'SANITIZE_TYPE_UNSPECIFIED',
        'SCRUB',
        'ANONYMIZE',
        'ANONYMIZE_LIMITED_REPEATABLE',
        'OBFUSCATE',
        'ENCRYPT',
        'DO_NOT_SANITIZE',
      ])
      .exactOptional(),
  })
  .openapi({
    description:
      "Identifies whether a field contains, or may contain, PII or sensitive data, and how to sanitize the field if it does. If a field's privacy type cannot be determined then it is sanitized (e.g., scrubbed). The specific sanitizer implementation is determined by run-time configuration and environment options (e.g., prod vs. qa). next_id: 5",
    required: [],
  })
  .openapi('EnterpriseCrmLoggingGwsSanitizeOptions')

const EnterpriseCrmLoggingGwsFieldLimitsSchema = z
  .object({
    logAction: z.enum(['LOG_ACTION_UNSPECIFIED', 'DONT_LOG', 'LOG']).exactOptional(),
    logType: z
      .array(z.enum(['LOG_TYPE_UNSPECIFIED', 'GWS', 'GTS', 'ALL']))
      .exactOptional()
      .openapi({ description: 'To which type(s) of logs the limits apply.' }),
    maxArraySize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'maximum array size. If the array exceds this size, the field (list) is truncated.',
      }),
    maxStringLength: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'maximum string length. If the field exceeds this amount the field is shortened.',
      }),
    shortenerType: z
      .enum([
        'SHORTENER_TYPE_UNSPECIFIED',
        'SHORTEN',
        'HASH',
        'SHORTEN_WITH_HASH',
        'SHORTEN_EMAIL',
        'SHORTEN_EMAIL_WITH_HASH',
        'SHORTEN_DOMAIN',
      ])
      .exactOptional(),
  })
  .openapi({
    description:
      'Describes string and array limits when writing to logs. When a limit is exceeded the *shortener_type* describes how to shorten the field. next_id: 6',
    required: [],
  })
  .openapi('EnterpriseCrmLoggingGwsFieldLimits')

const EnterpriseCrmEventbusProtoLogSettingsSchema = z
  .object({
    logFieldName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of corresponding logging field of the event property. If omitted, assumes the same name as the event property key.',
      }),
    sanitizeOptions: EnterpriseCrmLoggingGwsSanitizeOptionsSchema.exactOptional().openapi({
      description: 'Contains the scrubbing options, such as whether to scrub, obfuscate, etc.',
    }),
    seedPeriod: z.enum(['SEED_PERIOD_UNSPECIFIED', 'DAY', 'WEEK', 'MONTH']).exactOptional(),
    seedScope: z
      .enum(['SEED_SCOPE_UNSPECIFIED', 'EVENT_NAME', 'TIME_PERIOD', 'PARAM_NAME'])
      .exactOptional(),
    shorteningLimits: EnterpriseCrmLoggingGwsFieldLimitsSchema.exactOptional().openapi({
      description:
        'Contains the field limits for shortening, such as max string length and max array length.',
    }),
  })
  .openapi({
    description:
      'The LogSettings define the logging attributes for an event property. These attributes are used to map the property to the parameter in the log proto. Also used to define scrubbing/truncation behavior and PII information.',
    required: [],
  })
  .openapi('EnterpriseCrmEventbusProtoLogSettings')

const EnterpriseCrmEventbusProtoAttributesSchema = z
  .object({
    dataType: z
      .enum(['DATA_TYPE_UNSPECIFIED', 'EMAIL', 'URL', 'CURRENCY', 'TIMESTAMP', 'DOMAIN_NAME'])
      .exactOptional()
      .openapi({
        description: 'Things like URL, Email, Currency, Timestamp (rather than string, int64...)',
      }),
    defaultValue: EnterpriseCrmEventbusProtoValueTypeSchema.exactOptional().openapi({
      description: 'Used to define defaults.',
    }),
    isRequired: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Required for event execution. The validation will be done by the event bus when the event is triggered.',
      }),
    isSearchable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Used to indicate if a ParameterEntry should be converted to ParamIndexes for ST-Spanner full-text search. DEPRECATED: use searchable.',
      }),
    logSettings: EnterpriseCrmEventbusProtoLogSettingsSchema.exactOptional().openapi({
      description: 'See',
    }),
    searchable: z.enum(['UNSPECIFIED', 'YES', 'NO']).exactOptional(),
    taskVisibility: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of tasks that can view this property, if empty then all.' }),
  })
  .openapi({
    description:
      'Attributes are additional options that can be associated with each event property. For more information, see',
    required: [],
  })
  .openapi('EnterpriseCrmEventbusProtoAttributes')

const EnterpriseCrmFrontendsEventbusProtoBooleanParameterArraySchema = z
  .object({ booleanValues: z.array(z.boolean()).exactOptional() })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray')

const EnterpriseCrmFrontendsEventbusProtoDoubleParameterArraySchema = z
  .object({ doubleValues: z.array(z.float64()).exactOptional() })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray')

const EnterpriseCrmFrontendsEventbusProtoIntParameterArraySchema = z
  .object({ intValues: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmFrontendsEventbusProtoIntParameterArray')

const EnterpriseCrmFrontendsEventbusProtoProtoParameterArraySchema = z
  .object({
    protoValues: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmFrontendsEventbusProtoProtoParameterArray')

const EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameterSchema = z
  .object({ objectValue: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter')

const EnterpriseCrmFrontendsEventbusProtoStringParameterArraySchema = z
  .object({ stringValues: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmFrontendsEventbusProtoStringParameterArray')

const EnterpriseCrmFrontendsEventbusProtoParameterValueTypeSchema = z
  .object({
    booleanArray: EnterpriseCrmFrontendsEventbusProtoBooleanParameterArraySchema.exactOptional(),
    booleanValue: z.boolean().exactOptional(),
    doubleArray: EnterpriseCrmFrontendsEventbusProtoDoubleParameterArraySchema.exactOptional(),
    doubleValue: z.float64().exactOptional(),
    intArray: EnterpriseCrmFrontendsEventbusProtoIntParameterArraySchema.exactOptional(),
    intValue: z.string().exactOptional(),
    jsonValue: z.string().exactOptional(),
    protoArray: EnterpriseCrmFrontendsEventbusProtoProtoParameterArraySchema.exactOptional(),
    protoValue: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional(),
    serializedObjectValue:
      EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameterSchema.exactOptional(),
    stringArray: EnterpriseCrmFrontendsEventbusProtoStringParameterArraySchema.exactOptional(),
    stringValue: z.string().exactOptional(),
  })
  .openapi({
    description: 'To support various types of parameter values. Next available id: 14',
    required: [],
  })
  .openapi('EnterpriseCrmFrontendsEventbusProtoParameterValueType')

const EnterpriseCrmEventbusProtoNodeIdentifierSchema = z
  .object({
    elementIdentifier: z
      .string()
      .exactOptional()
      .openapi({ description: 'Configuration of the edge.' }),
    elementType: z
      .enum(['UNKNOWN_TYPE', 'TASK_CONFIG', 'TRIGGER_CONFIG'])
      .exactOptional()
      .openapi({
        description: 'Destination node where the edge ends. It can only be a task config.',
      }),
  })
  .openapi({
    description: 'Represents a node identifier (type + id). Next highest id: 3',
    required: [],
  })
  .openapi('EnterpriseCrmEventbusProtoNodeIdentifier')

type EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryType = {
  attributes?: z.infer<typeof EnterpriseCrmEventbusProtoAttributesSchema>
  children?: EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryType[]
  dataType?:
    | 'DATA_TYPE_UNSPECIFIED'
    | 'STRING_VALUE'
    | 'INT_VALUE'
    | 'DOUBLE_VALUE'
    | 'BOOLEAN_VALUE'
    | 'PROTO_VALUE'
    | 'SERIALIZED_OBJECT_VALUE'
    | 'STRING_ARRAY'
    | 'INT_ARRAY'
    | 'DOUBLE_ARRAY'
    | 'PROTO_ARRAY'
    | 'PROTO_ENUM'
    | 'BOOLEAN_ARRAY'
    | 'PROTO_ENUM_ARRAY'
    | 'BYTES'
    | 'BYTES_ARRAY'
    | 'NON_SERIALIZABLE_OBJECT'
    | 'JSON_VALUE'
  defaultValue?: z.infer<typeof EnterpriseCrmFrontendsEventbusProtoParameterValueTypeSchema>
  inOutType?: 'IN_OUT_TYPE_UNSPECIFIED' | 'IN' | 'OUT' | 'IN_OUT'
  isTransient?: boolean
  jsonSchema?: string
  key?: string
  name?: string
  producedBy?: z.infer<typeof EnterpriseCrmEventbusProtoNodeIdentifierSchema>
  producer?: string
  protoDefName?: string
  protoDefPath?: string
}

const EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStatsSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The end time of the event execution for current attempt.' }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The start time of the event execution for current attempt. This could be in the future if it's been scheduled.",
      }),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats')

const EnterpriseCrmEventbusProtoConditionResultSchema = z
  .object({
    currentTaskNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'the current task number.' }),
    nextTaskNumber: z.string().exactOptional().openapi({ description: 'the next task number.' }),
    result: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "the result comes out after evaluate the combined condition. True if there's no combined condition specified.",
      }),
  })
  .openapi({ description: 'Contains the combined condition calculation results.', required: [] })
  .openapi('EnterpriseCrmEventbusProtoConditionResult')

const EnterpriseCrmEventbusProtoParameterEntrySchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Key is used to retrieve the corresponding parameter value. This should be unique for a given fired event. These parameters must be predefined in the integration definition.',
      }),
    value: EnterpriseCrmEventbusProtoParameterValueTypeSchema.exactOptional().openapi({
      description:
        'Values for the defined keys. Each value can either be string, int, double or any proto message.',
    }),
  })
  .openapi({ description: 'Key-value pair of EventBus parameters.', required: [] })
  .openapi('EnterpriseCrmEventbusProtoParameterEntry')

const EnterpriseCrmEventbusProtoEventParametersSchema = z
  .object({
    parameters: z
      .array(EnterpriseCrmEventbusProtoParameterEntrySchema)
      .exactOptional()
      .openapi({
        description:
          'Parameters are a part of Event and can be used to communicate between different tasks that are part of the same integration execution.',
      }),
  })
  .openapi({
    description:
      'LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see',
    required: [],
  })
  .openapi('EnterpriseCrmEventbusProtoEventParameters')

const EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadataSchema = z
  .object({
    eventAttemptNum: z
      .int32()
      .exactOptional()
      .openapi({ description: 'the event attempt number this snapshot belongs to.' }),
    taskAttemptNum: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'the task attempt number this snapshot belongs to. Could be empty.',
      }),
    taskLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'the task label associated with this snapshot. Could be empty.' }),
    taskName: z
      .string()
      .exactOptional()
      .openapi({ description: 'the task name associated with this snapshot. Could be empty.' }),
    taskNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The task number associated with this snapshot. Could be empty.' }),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata')

const EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStatsSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The end time of the task execution for current attempt.' }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The start time of the task execution for current attempt. This could be in the future if it's been scheduled.",
      }),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStats')

const EnterpriseCrmEventbusProtoTaskExecutionDetailsSchema = z
  .object({
    taskAttemptStats: z
      .array(EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStatsSchema)
      .exactOptional(),
    taskExecutionState: z
      .enum([
        'UNSPECIFIED',
        'PENDING_EXECUTION',
        'IN_PROCESS',
        'SUCCEED',
        'FAILED',
        'FATAL',
        'RETRY_ON_HOLD',
        'SKIPPED',
        'CANCELED',
        'PENDING_ROLLBACK',
        'ROLLBACK_IN_PROCESS',
        'ROLLEDBACK',
        'SUSPENDED',
      ])
      .exactOptional(),
    taskNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pointer to the task config it used for execution.' }),
  })
  .openapi({
    description: 'Contains the details of the execution of this task. Next available id: 11',
    required: [],
  })
  .openapi('EnterpriseCrmEventbusProtoTaskExecutionDetails')

const EnterpriseCrmEventbusProtoEventExecutionSnapshotSchema = z
  .object({
    checkpointTaskNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates "right after which checkpoint task\'s execution" this snapshot is taken.',
      }),
    conditionResults: z
      .array(EnterpriseCrmEventbusProtoConditionResultSchema)
      .exactOptional()
      .openapi({ description: 'All of the computed conditions that been calculated.' }),
    diffParams: EnterpriseCrmEventbusProtoEventParametersSchema.exactOptional().openapi({
      description: 'The parameters in Event object that differs from last snapshot.',
    }),
    eventExecutionInfoId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Points to the event execution info this snapshot belongs to.' }),
    eventExecutionSnapshotId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Auto-generated. Used as primary key for EventExecutionSnapshots table.',
      }),
    eventExecutionSnapshotMetadata:
      EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadataSchema.exactOptional(),
    eventParams: EnterpriseCrmEventbusProtoEventParametersSchema.exactOptional().openapi({
      description: 'The parameters in Event object.',
    }),
    exceedMaxSize: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'indicate whether snapshot exceeded maximum size before clean up' }),
    snapshotTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Indicates when this snapshot is taken.' }),
    taskExecutionDetails: z
      .array(EnterpriseCrmEventbusProtoTaskExecutionDetailsSchema)
      .exactOptional()
      .openapi({ description: 'All of the task execution details at the given point of time.' }),
    taskName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The task name associated with this snapshot. Could be empty.' }),
  })
  .openapi({
    description:
      'Contains the snapshot of the event execution for a given checkpoint. Next available id: 13',
    required: [],
  })
  .openapi('EnterpriseCrmEventbusProtoEventExecutionSnapshot')

const EnterpriseCrmEventbusProtoEventExecutionDetailsSchema = z
  .object({
    eventAttemptStats: z
      .array(EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStatsSchema)
      .exactOptional(),
    eventExecutionSnapshot: z
      .array(EnterpriseCrmEventbusProtoEventExecutionSnapshotSchema)
      .exactOptional(),
    eventExecutionState: z
      .enum([
        'UNSPECIFIED',
        'ON_HOLD',
        'IN_PROCESS',
        'SUCCEEDED',
        'FAILED',
        'CANCELED',
        'RETRY_ON_HOLD',
        'SUSPENDED',
      ])
      .exactOptional(),
    eventRetriesFromBeginningCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Indicates the number of times the execution has restarted from the beginning.',
      }),
    logFilePath: z
      .string()
      .exactOptional()
      .openapi({ description: 'The log file path (aka. cns address) for this event.' }),
    networkAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The network address (aka. bns address) that indicates where the event executor is running.',
      }),
    nextExecutionTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Next scheduled execution time in case the execution status was RETRY_ON_HOLD.',
      }),
    ryeLockUnheldCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Used internally and shouldn't be exposed to users. A counter for the cron job to record how many times this event is in in_process state but don't have a lock consecutively/",
      }),
  })
  .openapi({
    description:
      'Contains the details of the execution info of this event: this includes the tasks execution details plus the event execution statistics. Next available id: 10',
    required: [],
  })
  .openapi('EnterpriseCrmEventbusProtoEventExecutionDetails')

const GoogleCloudIntegrationsV1alphaAttemptStatsSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The end time of the event execution for current attempt.' }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The start time of the event execution for current attempt. This could be in the future if it's been scheduled.",
      }),
  })
  .openapi({ description: 'Status for the execution attempt.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaAttemptStats')

const GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadataSchema = z
  .object({
    executionAttempt: z
      .int32()
      .exactOptional()
      .openapi({ description: 'the execution attempt number this snapshot belongs to.' }),
    task: z
      .string()
      .exactOptional()
      .openapi({ description: 'the task name associated with this snapshot.' }),
    taskAttempt: z
      .int32()
      .exactOptional()
      .openapi({ description: 'the task attempt number this snapshot belongs to.' }),
    taskLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'the task label associated with this snapshot. Could be empty.' }),
    taskNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The task number associated with this snapshot.' }),
  })
  .openapi({ description: 'Metadata of the execution snapshot.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata')

const GoogleCloudIntegrationsV1alphaBooleanParameterArraySchema = z
  .object({
    booleanValues: z.array(z.boolean()).exactOptional().openapi({ description: 'Boolean array.' }),
  })
  .openapi({ description: 'This message only contains a field of boolean array.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaBooleanParameterArray')

const GoogleCloudIntegrationsV1alphaDoubleParameterArraySchema = z
  .object({
    doubleValues: z
      .array(z.float64())
      .exactOptional()
      .openapi({ description: 'Double number array.' }),
  })
  .openapi({
    description: 'This message only contains a field of double number array.',
    required: [],
  })
  .openapi('GoogleCloudIntegrationsV1alphaDoubleParameterArray')

const GoogleCloudIntegrationsV1alphaIntParameterArraySchema = z
  .object({
    intValues: z.array(z.string()).exactOptional().openapi({ description: 'Integer array.' }),
  })
  .openapi({ description: 'This message only contains a field of integer array.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaIntParameterArray')

const GoogleCloudIntegrationsV1alphaStringParameterArraySchema = z
  .object({
    stringValues: z.array(z.string()).exactOptional().openapi({ description: 'String array.' }),
  })
  .openapi({ description: 'This message only contains a field of string array.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaStringParameterArray')

const GoogleCloudIntegrationsV1alphaValueTypeSchema = z
  .object({
    booleanArray: GoogleCloudIntegrationsV1alphaBooleanParameterArraySchema.exactOptional().openapi(
      { description: 'Boolean Array.' },
    ),
    booleanValue: z.boolean().exactOptional().openapi({ description: 'Boolean.' }),
    doubleArray: GoogleCloudIntegrationsV1alphaDoubleParameterArraySchema.exactOptional().openapi({
      description: 'Double Number Array.',
    }),
    doubleValue: z.float64().exactOptional().openapi({ description: 'Double Number.' }),
    intArray: GoogleCloudIntegrationsV1alphaIntParameterArraySchema.exactOptional().openapi({
      description: 'Integer Array.',
    }),
    intValue: z.string().exactOptional().openapi({ description: 'Integer.' }),
    jsonValue: z.string().exactOptional().openapi({ description: 'Json.' }),
    stringArray: GoogleCloudIntegrationsV1alphaStringParameterArraySchema.exactOptional().openapi({
      description: 'String Array.',
    }),
    stringValue: z.string().exactOptional().openapi({ description: 'String.' }),
  })
  .openapi({ description: 'The type of the parameter.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaValueType')

const GoogleCloudIntegrationsV1alphaTaskExecutionDetailsSchema = z
  .object({
    taskAttemptStats: z
      .array(GoogleCloudIntegrationsV1alphaAttemptStatsSchema)
      .exactOptional()
      .openapi({ description: 'Status for the current task execution attempt.' }),
    taskExecutionState: z
      .enum([
        'TASK_EXECUTION_STATE_UNSPECIFIED',
        'PENDING_EXECUTION',
        'IN_PROCESS',
        'SUCCEED',
        'FAILED',
        'FATAL',
        'RETRY_ON_HOLD',
        'SKIPPED',
        'CANCELLED',
        'PENDING_ROLLBACK',
        'ROLLBACK_IN_PROCESS',
        'ROLLEDBACK',
        'SUSPENDED',
      ])
      .exactOptional()
      .openapi({ description: 'The execution state of this task.' }),
    taskNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pointer to the task config it used for execution.' }),
  })
  .openapi({ description: 'Contains the details of the execution of this task.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaTaskExecutionDetails')

const GoogleCloudIntegrationsV1alphaExecutionSnapshotSchema = z
  .object({
    checkpointTaskNumber: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Indicates "after which checkpoint task\'s execution" this snapshot is taken.',
      }),
    executionSnapshotMetadata:
      GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadataSchema.exactOptional().openapi(
        { description: 'Metadata of the execution snapshot.' },
      ),
    params: z
      .record(z.string(), GoogleCloudIntegrationsV1alphaValueTypeSchema)
      .exactOptional()
      .openapi({ description: 'Parameters used during the execution.' }),
    taskExecutionDetails: z
      .array(GoogleCloudIntegrationsV1alphaTaskExecutionDetailsSchema)
      .exactOptional()
      .openapi({ description: 'All of the task execution details at the given point of time.' }),
  })
  .openapi({
    description: 'Contains the snapshot of the execution for a given checkpoint.',
    required: [],
  })
  .openapi('GoogleCloudIntegrationsV1alphaExecutionSnapshot')

const GoogleCloudIntegrationsV1alphaExecutionDetailsSchema = z
  .object({
    attemptStats: z
      .array(GoogleCloudIntegrationsV1alphaAttemptStatsSchema)
      .exactOptional()
      .openapi({ description: 'List of Start and end time of the execution attempts.' }),
    executionSnapshots: z
      .array(GoogleCloudIntegrationsV1alphaExecutionSnapshotSchema)
      .exactOptional()
      .openapi({ description: 'List of snapshots taken during the execution.' }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'PENDING',
        'PROCESSING',
        'SUCCEEDED',
        'FAILED',
        'CANCELLED',
        'RETRY_ON_HOLD',
        'SUSPENDED',
      ])
      .exactOptional()
      .openapi({ description: 'Status of the execution.' }),
  })
  .openapi({
    description:
      'Contains the details of the execution info: this includes the tasks execution details plus the event execution statistics.',
    required: [],
  })
  .openapi('GoogleCloudIntegrationsV1alphaExecutionDetails')

const EnterpriseCrmFrontendsEventbusProtoParameterEntrySchema = z
  .object({
    dataType: z
      .enum([
        'DATA_TYPE_UNSPECIFIED',
        'STRING_VALUE',
        'INT_VALUE',
        'DOUBLE_VALUE',
        'BOOLEAN_VALUE',
        'PROTO_VALUE',
        'SERIALIZED_OBJECT_VALUE',
        'STRING_ARRAY',
        'INT_ARRAY',
        'DOUBLE_ARRAY',
        'PROTO_ARRAY',
        'PROTO_ENUM',
        'BOOLEAN_ARRAY',
        'PROTO_ENUM_ARRAY',
        'BYTES',
        'BYTES_ARRAY',
        'NON_SERIALIZABLE_OBJECT',
        'JSON_VALUE',
      ])
      .exactOptional()
      .openapi({ description: 'Explicitly getting the type of the parameter.' }),
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Key is used to retrieve the corresponding parameter value. This should be unique for a given fired event. These parameters must be predefined in the workflow definition.',
      }),
    value: EnterpriseCrmFrontendsEventbusProtoParameterValueTypeSchema.exactOptional().openapi({
      description:
        'Values for the defined keys. Each value can either be string, int, double or any proto message.',
    }),
  })
  .openapi({ description: 'Key-value pair of EventBus parameters.', required: [] })
  .openapi('EnterpriseCrmFrontendsEventbusProtoParameterEntry')

type GoogleCloudIntegrationsV1alphaExecutionType = {
  createTime?: string
  directSubExecutions?: GoogleCloudIntegrationsV1alphaExecutionType[]
  eventExecutionDetails?: z.infer<typeof EnterpriseCrmEventbusProtoEventExecutionDetailsSchema>
  executionDetails?: z.infer<typeof GoogleCloudIntegrationsV1alphaExecutionDetailsSchema>
  executionMethod?: 'EXECUTION_METHOD_UNSPECIFIED' | 'POST' | 'POST_TO_QUEUE' | 'SCHEDULE'
  name?: string
  requestParameters?: {
    [key: string]: z.infer<typeof GoogleCloudIntegrationsV1alphaValueTypeSchema>
  }
  requestParams?: z.infer<typeof EnterpriseCrmFrontendsEventbusProtoParameterEntrySchema>[]
  responseParameters?: {
    [key: string]: z.infer<typeof GoogleCloudIntegrationsV1alphaValueTypeSchema>
  }
  responseParams?: z.infer<typeof EnterpriseCrmFrontendsEventbusProtoParameterEntrySchema>[]
  triggerId?: string
  updateTime?: string
}

const CrmlogErrorCodeSchema = z
  .object({
    commonErrorCode: z
      .enum([
        'COMMON_ERROR_CODE_UNSPECIFIED',
        'INVALID_CREDENTIALS',
        'REQUIRED_FIELDS_MISSING',
        'INVALID_FIELDS',
        'BACKEND',
        'GENERAL',
        'INTERNAL',
        'IO_ERROR',
        'NOT_FOUND',
        'EVENT_BUS',
        'ALREADY_EXISTS',
        'CONCORD',
        'CONVERSION',
        'FLUME',
        'PERMISSION',
        'SALES_FORCE',
        'SPANNER',
        'UNIMPLEMENTED',
        'RELTIO',
        'WORKFLOW_NOT_FOUND',
        'QUOTA_THROTTLED',
        'QUOTA_ENQUEUED',
        'INVALID_QUOTA_CONFIGURATION',
        'TASK_NOT_FOUND',
        'EXECUTION_TIMEOUT',
        'INVALID_EVENT_EXECUTION_STATE',
        'INVALID_ATTRIBUTE',
        'MISSING_ATTRIBUTE',
        'CLIENT_UNAUTHORIZED_FOR_WORKFLOW',
        'INVALID_PARAMETER',
        'MISSING_PARAMETER',
        'UNAUTHROIZED_WORKFLOW_EDITOR_ACTION',
        'FAILED_PRECONDITION',
        'INVALID_CLIENT',
        'MISSING_CLIENT',
        'INVALID_WORKFLOW',
        'MISSING_QUOTA_CONFIGURATION',
        'UNHANDLED_TASK_ERROR',
        'SCRIPT_TASK_RUNTIME_ERROR',
        'RPC',
        'INVALID_PROTO',
        'UNHANDLED_EVENTBUS_ERROR',
        'INVALID_TASK_STATE',
        'TYPED_TASK_INVALID_INPUT_OPERATION',
        'TYPED_TASK_INVALID_OUTPUT_OPERATION',
        'VALIDATION_ERROR',
        'RESUME_ERROR',
        'APPS_SCRIPT_EXECUTION_ERROR',
        'INVALID_VECTOR_USER',
        'INFORMATICA',
        'RETRYABLE_TASK_ERROR',
        'INVALID_TENANT',
        'WRONG_TENANT',
        'INFORMATICA_BACKEND_UNAVAILABLE',
        'RPC_PERMISSION_DENIED',
        'SYNC_EVENTBUS_EXECUTION_TIMEOUT',
        'ASYNC_EVENTBUS_EXECUTION_TIMEOUT',
        'NOT_SUPPORTED_DATA_TYPE',
        'UNSANITIZED_USER_INPUT',
        'TRANSFORM_EXPRESSION_EVALUATION_ERROR',
        'HTTP_EXCEPTION',
        'EXECUTION_CANCELLED',
      ])
      .exactOptional(),
  })
  .openapi({
    description:
      'Registered ids for errors, as "oneof" enums. Each task or logical grouping of tasks may share the same enum.',
    required: [],
  })
  .openapi('CrmlogErrorCode')

const EnterpriseCrmEventbusAuthconfigAuthConfigTaskParamSchema = z
  .object({
    allowedCredentialTypes: z
      .array(
        z.enum([
          'CREDENTIAL_TYPE_UNSPECIFIED',
          'USERNAME_AND_PASSWORD',
          'API_KEY',
          'OAUTH2_AUTHORIZATION_CODE',
          'OAUTH2_IMPLICIT',
          'OAUTH2_CLIENT_CREDENTIALS',
          'OAUTH2_RESOURCE_OWNER_CREDENTIALS',
          'JWT',
          'AUTH_TOKEN',
          'SERVICE_ACCOUNT',
          'CLIENT_CERTIFICATE_ONLY',
          'OIDC_TOKEN',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Defines the credential types to be supported as Task may restrict specific types to use, e.g. Cloud SQL Task will use username/password type only.',
      }),
    allowedServiceAccountInContext: z.boolean().exactOptional(),
    authConfigId: z.string().exactOptional().openapi({ description: 'UUID of the AuthConfig.' }),
    scope: z
      .string()
      .exactOptional()
      .openapi({ description: 'A space-delimited list of requested scope permissions.' }),
    useServiceAccountInContext: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusAuthconfigAuthConfigTaskParam')

const EnterpriseCrmEventbusProtoTokenSchema = z
  .object({ name: z.string().exactOptional(), value: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoToken')

const EnterpriseCrmEventbusProtoAddressSchema = z
  .object({
    email: z.string().exactOptional().openapi({ description: 'Required.' }),
    name: z.string().exactOptional(),
    tokens: z.array(EnterpriseCrmEventbusProtoTokenSchema).exactOptional(),
  })
  .openapi({
    description:
      'Email address along with optional name and tokens. These tokens will be substituted for the variables in the form of [{var_name}], where var_name could be any string of no more than 32 bytes.',
    required: [],
  })
  .openapi('EnterpriseCrmEventbusProtoAddress')

const EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListSchema = z
  .object({
    enumStrings: z.array(z.string()).exactOptional(),
    filterType: z.enum(['DEFAULT_INCLUSIVE', 'EXCLUSIVE']).exactOptional(),
  })
  .openapi({ description: 'List of error enums for alerts.', required: [] })
  .openapi('EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList')

const EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValueSchema = z
  .object({ absolute: z.string().exactOptional(), percentage: z.int32().exactOptional() })
  .openapi({
    description:
      'The threshold value of the metric, above or below which the alert should be triggered. See EventAlertConfig or TaskAlertConfig for the different alert metric types in each case. For the *RATE metrics, one or both of these fields may be set. Zero is the default value and can be left at that. For *PERCENTILE_DURATION metrics, one or both of these fields may be set, and also, the duration threshold value should be specified in the threshold_duration_ms member below. For *AVERAGE_DURATION metrics, these fields should not be set at all. A different member, threshold_duration_ms, must be set in the EventAlertConfig or the TaskAlertConfig.',
    required: [],
  })
  .openapi('EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue')

const EnterpriseCrmEventbusProtoBuganizerNotificationSchema = z
  .object({
    assigneeEmailAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'Whom to assign the new bug. Optional.' }),
    componentId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of the buganizer component within which to create a new issue. Required.',
      }),
    templateId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the buganizer template to use. Optional.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title of the issue to be created. Required.' }),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoBuganizerNotification')

const EnterpriseCrmEventbusProtoCloudKmsConfigSchema = z
  .object({
    gcpProjectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The id of GCP project where the KMS key is stored. If not provided, assume the key is stored in the same GCP project defined in Client (tag 14).',
      }),
    keyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A Cloud KMS key is a named object containing one or more key versions, along with metadata for the key. A key exists on exactly one key ring tied to a specific location.',
      }),
    keyRingName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A key ring organizes keys in a specific Google Cloud location and allows you to manage access control on groups of keys. A key ring's name does not need to be unique across a Google Cloud project, but must be unique within a given location.",
      }),
    keyVersionName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. Each version of a key contains key material used for encryption or signing. A key's version is represented by an integer, starting at 1. To decrypt data or verify a signature, you must use the same key version that was used to encrypt or sign the data.",
      }),
    locationName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Location name of the key ring, e.g. "us-west1".' }),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoCloudKmsConfig')

const EnterpriseCrmEventbusProtoCloudSchedulerConfigSchema = z
  .object({
    cronTab: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The cron tab of cloud scheduler trigger.' }),
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. When the job was deleted from Pantheon UI, error_message will be populated when Get/List integrations',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The location where associated cloud scheduler job will be created',
      }),
    serviceAccountEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Service account used by Cloud Scheduler to trigger the integration at scheduled time',
      }),
  })
  .openapi({ description: 'Cloud Scheduler Trigger configuration', required: [] })
  .openapi('EnterpriseCrmEventbusProtoCloudSchedulerConfig')

const EnterpriseCrmEventbusProtoConditionSchema = z
  .object({
    eventPropertyKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Key that's evaluated against the `value`. Please note the data type of the runtime value associated with the key should match the data type of `value`, else an IllegalArgumentException is thrown.",
      }),
    operator: z
      .enum([
        'UNSET',
        'EQUALS',
        'CONTAINS',
        'LESS_THAN',
        'GREATER_THAN',
        'EXISTS',
        'DOES_NOT_EXIST',
        'IS_EMPTY',
        'IS_NOT_EMPTY',
      ])
      .exactOptional()
      .openapi({
        description:
          'Operator used to evaluate the condition. Please note that an operator with an inappropriate key/value operand will result in IllegalArgumentException, e.g. CONTAINS with boolean key/value pair.',
      }),
    value: EnterpriseCrmEventbusProtoValueTypeSchema.exactOptional().openapi({
      description: "Value that's checked for the key.",
    }),
  })
  .openapi({
    description: 'Condition that uses `operator` to evaluate the key against the value.',
    required: [],
  })
  .openapi('EnterpriseCrmEventbusProtoCondition')

const EnterpriseCrmEventbusProtoCombinedConditionSchema = z
  .object({
    conditions: z
      .array(EnterpriseCrmEventbusProtoConditionSchema)
      .exactOptional()
      .openapi({ description: 'A set of individual constituent conditions.' }),
  })
  .openapi({
    description: 'This message recursively combines constituent conditions using logical AND.',
    required: [],
  })
  .openapi('EnterpriseCrmEventbusProtoCombinedCondition')

const EnterpriseCrmEventbusProtoConnectorsConnectionSchema = z
  .object({
    connectionName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Connection name Format: projects/{project}/locations/{location}/connections/{connection}',
      }),
    connectorVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Connector version Format: projects/{project}/locations/{location}/providers/{provider}/connectors/{connector}/versions/{version}',
      }),
    serviceName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Service name Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}',
      }),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoConnectorsConnection')

const EnterpriseCrmEventbusProtoConnectorsGenericConnectorTaskConfigSchema = z
  .object({
    connection: EnterpriseCrmEventbusProtoConnectorsConnectionSchema.exactOptional().openapi({
      description: 'User-selected connection.',
    }),
    operation: z
      .enum([
        'OPERATION_UNSPECIFIED',
        'EXECUTE_ACTION',
        'LIST_ENTITIES',
        'GET_ENTITY',
        'CREATE_ENTITY',
        'UPDATE_ENTITY',
        'DELETE_ENTITY',
      ])
      .exactOptional()
      .openapi({ description: 'Operation to perform using the configured connection.' }),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoConnectorsGenericConnectorTaskConfig')

const EnterpriseCrmEventbusProtoCoordinateSchema = z
  .object({ x: z.int32().exactOptional(), y: z.int32().exactOptional() })
  .openapi({ description: 'Represents two-dimensional positions.', required: [] })
  .openapi('EnterpriseCrmEventbusProtoCoordinate')

const GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequestSchema = z
  .object({
    clientId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. If the client id is provided, then the combination of trigger id and client id is matched across all the workflows. If the client id is not provided, then workflows with matching trigger id are executed for each client id in the {@link TriggerConfig}. For Api Trigger, the client id is required and will be validated against the allowed clients.',
      }),
    ignoreErrorIfNoActiveWorkflow: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Flag to determine whether clients would suppress a warning when no ACTIVE workflows are not found. If this flag is set to be true, an error will not be thrown if the requested trigger_id or client_id is not found in any ACTIVE workflow. Otherwise, the error is always thrown. The flag is set to be false by default.',
      }),
    parameters: EnterpriseCrmEventbusProtoEventParametersSchema.exactOptional().openapi({
      description: 'Passed in as parameters to each workflow execution. Optional.',
    }),
    priority: z
      .enum(['UNSPCIFIED', 'SHEDDABLE', 'SHEDDABLE_PLUS', 'CRITICAL', 'CRITICAL_PLUS'])
      .exactOptional()
      .openapi({
        description:
          'The request priority this request should be processed at. For internal users:',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. This is used to de-dup incoming request: if the duplicate request was detected, the response from the previous execution is returned. Must have no more than 36 characters and contain only alphanumeric characters and hyphens.',
      }),
    scheduledTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Time in milliseconds since epoch when the given event would be scheduled.',
      }),
    testMode: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Sets test mode in {@link enterprise/crm/eventbus/event_message.proto}.',
      }),
    triggerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Matched against all {@link TriggerConfig}s across all workflows. i.e. TriggerConfig.trigger_id.equals(trigger_id) Required.',
      }),
    workflowName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. If provided, the workflow_name is used to filter all the matched workflows having same trigger_id+client_id. A combination of trigger_id, client_id and workflow_name identifies a unique workflow.',
      }),
  })
  .openapi({
    description:
      'Use this request to post all workflows associated with a given trigger id. Next available id: 10',
    required: [],
  })
  .openapi('GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest')

const EnterpriseCrmEventbusProtoCustomSuspensionRequestSchema = z
  .object({
    postToQueueWithTriggerIdRequest:
      GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequestSchema.exactOptional().openapi(
        { description: 'Request to fire an event containing the SuspensionInfo message.' },
      ),
    suspensionInfoEventParameterKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'In the fired event, set the SuspensionInfo message as the value for this key.',
      }),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoCustomSuspensionRequest')

const EnterpriseCrmEventbusProtoErrorDetailSchema = z
  .object({
    errorCode: CrmlogErrorCodeSchema.exactOptional().openapi({
      description: 'The associated error-code, which can be a common or internal code.',
    }),
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full text of the error message, including any parameters that were thrown along with the exception.',
      }),
    severity: z
      .enum(['SEVERITY_UNSPECIFIED', 'ERROR', 'WARN', 'INFO'])
      .exactOptional()
      .openapi({ description: 'The severity of the error: ERROR|WARN|INFO.' }),
    taskNumber: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The task try-number, in which, the error occurred. If zero, the error happened at the event level.',
      }),
  })
  .openapi({
    description: 'An error, warning, or information message associated with a workflow.',
    required: [],
  })
  .openapi('EnterpriseCrmEventbusProtoErrorDetail')

const EnterpriseCrmEventbusProtoPropertyEntrySchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Key is used to retrieve the corresponding property value. This should be unique for a given fired event. The Tasks should be aware of the keys used while firing the events for them to be able to retrieve the values.',
      }),
    value: EnterpriseCrmEventbusProtoValueTypeSchema.exactOptional().openapi({
      description:
        'Values for the defined keys. Each value can either be string, int, double or any proto message.',
    }),
  })
  .openapi({ description: 'Key-value pair of EventBus property.', required: [] })
  .openapi('EnterpriseCrmEventbusProtoPropertyEntry')

const EnterpriseCrmEventbusProtoEventBusPropertiesSchema = z
  .object({
    properties: z
      .array(EnterpriseCrmEventbusProtoPropertyEntrySchema)
      .exactOptional()
      .openapi({ description: 'An unordered list of property entries.' }),
  })
  .openapi({
    description:
      'LINT.IfChange This message is used for storing key value pair properties for each Event / Task in the EventBus.',
    required: [],
  })
  .openapi('EnterpriseCrmEventbusProtoEventBusProperties')

const EnterpriseCrmEventbusProtoExecutionTraceInfoSchema = z
  .object({
    parentEventExecutionInfoId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Parent event execution info id that triggers the current execution through SubWorkflowExecutorTask.',
      }),
    traceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Used to aggregate ExecutionTraceInfo.' }),
  })
  .openapi({
    description:
      'Message that helps aggregate all sub-executions triggered by one execution and keeps track of child-parent relationships.',
    required: [],
  })
  .openapi('EnterpriseCrmEventbusProtoExecutionTraceInfo')

const EnterpriseCrmEventbusProtoExternalTrafficSchema = z
  .object({
    gcpProjectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'User’s GCP project id the traffic is referring to.' }),
    gcpProjectNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'User’s GCP project number the traffic is referring to.' }),
    location: z
      .string()
      .exactOptional()
      .openapi({ description: "Location for the user's request." }),
    source: z
      .enum(['SOURCE_UNSPECIFIED', 'APIGEE', 'SECURITY'])
      .exactOptional()
      .openapi({
        description:
          'LINT.ThenChange(//depot/google3/enterprise/crm/eventbus/proto/product.proto:product, //depot/google3/java/com/google/enterprise/crm/integrationplatform/api/utils/ConverterUtils.java:source_to_product)',
      }),
  })
  .openapi({ description: 'Represents external traffic type and id.', required: [] })
  .openapi('EnterpriseCrmEventbusProtoExternalTraffic')

const EnterpriseCrmEventbusProtoFailurePolicySchema = z
  .object({
    intervalInSeconds: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required if retry_strategy is FIXED_INTERVAL or LINEAR/EXPONENTIAL_BACKOFF/RESTART_WORKFLOW_WITH_BACKOFF. Defines the initial interval for backoff.',
      }),
    maxNumRetries: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required if retry_strategy is FIXED_INTERVAL or LINEAR/EXPONENTIAL_BACKOFF/RESTART_WORKFLOW_WITH_BACKOFF. Defines the number of times the task will be retried if failed.',
      }),
    retryStrategy: z
      .enum([
        'UNSPECIFIED',
        'IGNORE',
        'NONE',
        'FATAL',
        'FIXED_INTERVAL',
        'LINEAR_BACKOFF',
        'EXPONENTIAL_BACKOFF',
        'RESTART_WORKFLOW_WITH_BACKOFF',
      ])
      .exactOptional()
      .openapi({ description: 'Defines what happens to the task upon failure.' }),
  })
  .openapi({
    description:
      'Policy that defines the task retry logic and failure type. If no FailurePolicy is defined for a task, all its dependent tasks will not be executed (i.e, a `retry_strategy` of NONE will be applied).',
    required: [],
  })
  .openapi('EnterpriseCrmEventbusProtoFailurePolicy')

const EnterpriseCrmEventbusProtoFieldSchema = z
  .object({
    cardinality: z
      .enum(['UNSPECIFIED', 'OPTIONAL'])
      .exactOptional()
      .openapi({
        description:
          'By default, if the cardinality is unspecified the field is considered required while mapping.',
      }),
    defaultValue: EnterpriseCrmEventbusProtoParameterValueTypeSchema.exactOptional().openapi({
      description:
        'This holds the default values for the fields. This value is supplied by user so may or may not contain PII or SPII data.',
    }),
    fieldType: z
      .enum([
        'DATA_TYPE_UNSPECIFIED',
        'STRING_VALUE',
        'INT_VALUE',
        'DOUBLE_VALUE',
        'BOOLEAN_VALUE',
        'PROTO_VALUE',
        'SERIALIZED_OBJECT_VALUE',
        'STRING_ARRAY',
        'INT_ARRAY',
        'DOUBLE_ARRAY',
        'PROTO_ARRAY',
        'PROTO_ENUM',
        'BOOLEAN_ARRAY',
        'PROTO_ENUM_ARRAY',
        'BYTES',
        'BYTES_ARRAY',
        'NON_SERIALIZABLE_OBJECT',
        'JSON_VALUE',
      ])
      .exactOptional()
      .openapi({ description: 'Specifies the data type of the field.' }),
    protoDefPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The fully qualified proto name (e.g. enterprise.crm.storage.Account). Required for output field of type PROTO_VALUE or PROTO_ARRAY. For e.g., if input field_type is BYTES and output field_type is PROTO_VALUE, then fully qualified proto type url should be provided to parse the input bytes. If field_type is *_ARRAY, then all the converted protos are of the same type.',
      }),
    referenceKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This holds the reference key of the workflow or task parameter. 1. Any workflow parameter, for e.g. $workflowParam1$. 2. Any task input or output parameter, for e.g. $task1_param1$. 3. Any workflow or task parameters with subfield references, for e.g., $task1_param1.employee.id$',
      }),
    transformExpression:
      EnterpriseCrmEventbusProtoTransformExpressionSchema.exactOptional().openapi({
        description:
          "This is the transform expression to fetch the input field value. for e.g. $param1$.CONCAT('test'). Keep points - 1. Only input field can have a transform expression. 2. If a transform expression is provided, reference_key will be ignored. 3. If no value is returned after evaluation of transform expression, default_value can be mapped if provided. 4. The field_type should be the type of the final object returned after the transform expression is evaluated. Scrubs the transform expression before logging as value provided by user so may or may not contain PII or SPII data.",
      }),
  })
  .openapi({ description: 'Information about the value and type of the field.', required: [] })
  .openapi('EnterpriseCrmEventbusProtoField')

const EnterpriseCrmEventbusProtoMappedFieldSchema = z
  .object({
    inputField: EnterpriseCrmEventbusProtoFieldSchema.exactOptional().openapi({
      description: 'The input field being mapped from.',
    }),
    outputField: EnterpriseCrmEventbusProtoFieldSchema.exactOptional().openapi({
      description: 'The output field being mapped to.',
    }),
  })
  .openapi({ description: 'Mapped field is a pair of input field and output field.', required: [] })
  .openapi('EnterpriseCrmEventbusProtoMappedField')

const EnterpriseCrmEventbusProtoFieldMappingConfigSchema = z
  .object({ mappedFields: z.array(EnterpriseCrmEventbusProtoMappedFieldSchema).exactOptional() })
  .openapi({
    description:
      'Field Mapping Config to map multiple output fields values from input fields values.',
    required: [],
  })
  .openapi('EnterpriseCrmEventbusProtoFieldMappingConfig')

const EnterpriseCrmEventbusProtoLoopMetadataSchema = z
  .object({
    currentIterationCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Starting from 1, not 0.' }),
    currentIterationDetail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Needs to be set by the loop impl class before each iteration. The abstract loop class will append the request and response to it. Eg. The foreach Loop will clean up and set it as the current iteration element at the start of each loop. The post request and response will be appended to the value once they are available.',
      }),
    errorMsg: z
      .string()
      .exactOptional()
      .openapi({ description: 'Add the error message when loops fail.' }),
    failureLocation: z
      .enum([
        'UNKNOWN',
        'SUBWORKFLOW',
        'PARAM_OVERRIDING',
        'PARAM_AGGREGATING',
        'SETTING_ITERATION_ELEMENT',
        'GETTING_LIST_TO_ITERATE',
        'CONDITION_EVALUATION',
        'BUILDING_REQUEST',
      ])
      .exactOptional()
      .openapi({ description: 'Indicates where in the loop logic did it error out.' }),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoLoopMetadata')

const EnterpriseCrmEventbusProtoNextTaskSchema = z
  .object({
    combinedConditions: z
      .array(EnterpriseCrmEventbusProtoCombinedConditionSchema)
      .exactOptional()
      .openapi({
        description:
          'Combined condition for this task to become an eligible next task. Each of these combined_conditions are joined with logical OR. DEPRECATED: use `condition`',
      }),
    condition: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Standard filter expression for this task to become an eligible next task.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User-provided description intended to give more business context about the next task edge or condition.',
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-provided label that is attached to this edge in the UI.' }),
    taskConfigId: z.string().exactOptional().openapi({ description: 'ID of the next task.' }),
    taskNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Task number of the next task.' }),
  })
  .openapi({
    description:
      'The task that is next in line to be executed, if the condition specified evaluated to true.',
    required: [],
  })
  .openapi('EnterpriseCrmEventbusProtoNextTask')

const EnterpriseCrmEventbusProtoNextTeardownTaskSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Name of the next teardown task.' }),
  })
  .openapi({
    description:
      'The teardown task that is next in line to be executed. We support only sequential execution of teardown tasks (i.e. no branching).',
    required: [],
  })
  .openapi('EnterpriseCrmEventbusProtoNextTeardownTask')

const EnterpriseCrmEventbusProtoNotificationSchema = z
  .object({
    buganizerNotification: EnterpriseCrmEventbusProtoBuganizerNotificationSchema.exactOptional(),
    emailAddress: EnterpriseCrmEventbusProtoAddressSchema.exactOptional(),
    escalatorQueue: z.string().exactOptional(),
    pubsubTopic: z.string().exactOptional(),
    request: EnterpriseCrmEventbusProtoCustomSuspensionRequestSchema.exactOptional().openapi({
      description:
        'If the out-of-the-box email/pubsub notifications are not suitable and custom logic is required, fire a workflow containing all info needed to notify users to resume execution.',
    }),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoNotification')

const EnterpriseCrmEventbusProtoParamSpecEntryConfigSchema = z
  .object({
    descriptivePhrase: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short phrase to describe what this parameter contains.' }),
    helpText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Detailed help text for this parameter containing information not provided elsewhere. For example, instructions on how to migrate from a deprecated parameter.',
      }),
    hideDefaultValue: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the default value is hidden in the UI.' }),
    inputDisplayOption: z
      .enum(['DEFAULT', 'STRING_MULTI_LINE', 'NUMBER_SLIDER', 'BOOLEAN_TOGGLE'])
      .exactOptional(),
    isHidden: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this field is hidden in the UI.' }),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'A user-friendly label for the parameter.' }),
    parameterNameOption: z
      .enum([
        'DEFAULT_NOT_PARAMETER_NAME',
        'IS_PARAMETER_NAME',
        'KEY_IS_PARAMETER_NAME',
        'VALUE_IS_PARAMETER_NAME',
      ])
      .exactOptional(),
    subSectionLabel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A user-friendly label for subSection under which the parameter will be displayed.',
      }),
    uiPlaceholderText: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Placeholder text which will appear in the UI input form for this parameter.',
      }),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoParamSpecEntryConfig')

const EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinitionSchema = z
  .object({
    fullName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fully-qualified proto name. This message, for example, would be "enterprise.crm.eventbus.proto.ParamSpecEntry.ProtoDefinition".',
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description: "Path to the proto file that contains the message type's definition.",
      }),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition')

const EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRangeSchema = z
  .object({
    max: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The inclusive maximum of the acceptable range.' }),
    min: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The inclusive minimum of the acceptable range.' }),
  })
  .openapi({ description: 'Range used to validate doubles and floats.', required: [] })
  .openapi('EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange')

const EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRangeSchema = z
  .object({
    max: z
      .string()
      .exactOptional()
      .openapi({ description: 'The inclusive maximum of the acceptable range.' }),
    min: z
      .string()
      .exactOptional()
      .openapi({ description: 'The inclusive minimum of the acceptable range.' }),
  })
  .openapi({ description: 'Range used to validate longs and ints.', required: [] })
  .openapi('EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange')

const EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegexSchema = z
  .object({
    exclusive: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the regex matcher is applied exclusively (if true, matching values will be rejected).',
      }),
    regex: z
      .string()
      .exactOptional()
      .openapi({ description: 'The regex applied to the input value(s).' }),
  })
  .openapi({ description: 'Rule used to validate strings.', required: [] })
  .openapi('EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex')

const EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleSchema = z
  .object({
    doubleRange:
      EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRangeSchema.exactOptional(),
    intRange: EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRangeSchema.exactOptional(),
    stringRegex:
      EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegexSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoParamSpecEntryValidationRule')

const EnterpriseCrmEventbusProtoParameterMapFieldSchema = z
  .object({
    literalValue: EnterpriseCrmEventbusProtoParameterValueTypeSchema.exactOptional().openapi({
      description: 'Passing a literal value.',
    }),
    referenceKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'Referencing one of the WF variables.' }),
  })
  .openapi({ description: 'Field represents either the key or value in an entry.', required: [] })
  .openapi('EnterpriseCrmEventbusProtoParameterMapField')

const EnterpriseCrmEventbusProtoParameterMapEntrySchema = z
  .object({
    key: EnterpriseCrmEventbusProtoParameterMapFieldSchema.exactOptional(),
    value: EnterpriseCrmEventbusProtoParameterMapFieldSchema.exactOptional(),
  })
  .openapi({ description: 'Entry is a pair of key and value.', required: [] })
  .openapi('EnterpriseCrmEventbusProtoParameterMapEntry')

const EnterpriseCrmEventbusProtoParameterMapSchema = z
  .object({
    entries: z.array(EnterpriseCrmEventbusProtoParameterMapEntrySchema).exactOptional(),
    keyType: z
      .enum([
        'DATA_TYPE_UNSPECIFIED',
        'STRING_VALUE',
        'INT_VALUE',
        'DOUBLE_VALUE',
        'BOOLEAN_VALUE',
        'PROTO_VALUE',
        'SERIALIZED_OBJECT_VALUE',
        'STRING_ARRAY',
        'INT_ARRAY',
        'DOUBLE_ARRAY',
        'PROTO_ARRAY',
        'PROTO_ENUM',
        'BOOLEAN_ARRAY',
        'PROTO_ENUM_ARRAY',
        'BYTES',
        'BYTES_ARRAY',
        'NON_SERIALIZABLE_OBJECT',
        'JSON_VALUE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Option to specify key value type for all entries of the map. If provided then field types for all entries must conform to this.',
      }),
    valueType: z
      .enum([
        'DATA_TYPE_UNSPECIFIED',
        'STRING_VALUE',
        'INT_VALUE',
        'DOUBLE_VALUE',
        'BOOLEAN_VALUE',
        'PROTO_VALUE',
        'SERIALIZED_OBJECT_VALUE',
        'STRING_ARRAY',
        'INT_ARRAY',
        'DOUBLE_ARRAY',
        'PROTO_ARRAY',
        'PROTO_ENUM',
        'BOOLEAN_ARRAY',
        'PROTO_ENUM_ARRAY',
        'BYTES',
        'BYTES_ARRAY',
        'NON_SERIALIZABLE_OBJECT',
        'JSON_VALUE',
      ])
      .exactOptional(),
  })
  .openapi({
    description:
      'A generic multi-map that holds key value pairs. They keys and values can be of any type, unless specified.',
    required: [],
  })
  .openapi('EnterpriseCrmEventbusProtoParameterMap')

const EnterpriseCrmEventbusProtoScatterResponseSchema = z
  .object({
    errorMsg: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error message of the failure if applicable.' }),
    executionIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The execution ids of each Subworkflow fired by this scatter.' }),
    isSuccessful: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If execution is sync, this is true if the execution passed and false if it failed. If the execution is async, this is true if the WF was fired off successfully, and false if it failed to execute. The success or failure of the subworkflows executed are not captured.',
      }),
    responseParams: z
      .array(EnterpriseCrmEventbusProtoParameterEntrySchema)
      .exactOptional()
      .openapi({
        description:
          'A list of all the response parameters in the aggregtorMap stored with the remapped key.',
      }),
    scatterElement: EnterpriseCrmEventbusProtoParameterValueTypeSchema.exactOptional().openapi({
      description: 'The element that was scattered for this execution.',
    }),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoScatterResponse')

const EnterpriseCrmEventbusProtoSuccessPolicySchema = z
  .object({
    finalState: z
      .enum(['UNSPECIFIED', 'SUCCEEDED', 'SUSPENDED'])
      .exactOptional()
      .openapi({
        description:
          'State to which the execution snapshot status will be set if the task succeeds.',
      }),
  })
  .openapi({
    description: 'Policy that dictates the behavior for the task after it completes successfully.',
    required: [],
  })
  .openapi('EnterpriseCrmEventbusProtoSuccessPolicy')

const EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentitySchema = z
  .object({ emailAddress: z.string().exactOptional(), gaiaId: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity')

const EnterpriseCrmEventbusProtoSuspensionAuthPermissionsSchema = z
  .object({
    gaiaIdentity:
      EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentitySchema.exactOptional().openapi(
        { description: 'Represents a Gaia identity for a person or service account.' },
      ),
    googleGroup:
      EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentitySchema.exactOptional(),
    loasRole: z.string().exactOptional(),
    mdbGroup: z.string().exactOptional(),
  })
  .openapi({ description: 'LINT.IfChange', required: [] })
  .openapi('EnterpriseCrmEventbusProtoSuspensionAuthPermissions')

const EnterpriseCrmEventbusProtoSuspensionExpirationSchema = z
  .object({
    expireAfterMs: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Milliseconds after which the suspension expires, if no action taken.',
      }),
    liftWhenExpired: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the suspension will be REJECTED or LIFTED upon expiration. REJECTED is the default behavior.',
      }),
    remindAfterMs: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Milliseconds after which the previous suspension action reminder, if any, is sent using the selected notification option, for a suspension which is still PENDING_UNSPECIFIED.',
      }),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoSuspensionExpiration')

const EnterpriseCrmEventbusProtoSuspensionConfigSchema = z
  .object({
    customMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional information to provide recipients of the suspension in addition to the resolution URL, typically containing relevant parameter values from the originating workflow.',
      }),
    notifications: z.array(EnterpriseCrmEventbusProtoNotificationSchema).exactOptional(),
    suspensionExpiration:
      EnterpriseCrmEventbusProtoSuspensionExpirationSchema.exactOptional().openapi({
        description: 'Indicates the next steps when no external actions happen on the suspension.',
      }),
    whoMayResolve: z
      .array(EnterpriseCrmEventbusProtoSuspensionAuthPermissionsSchema)
      .exactOptional()
      .openapi({ description: 'Identities able to resolve this suspension.' }),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoSuspensionConfig')

const EnterpriseCrmEventbusProtoSuspensionResolutionInfoAuditSchema = z
  .object({
    resolvedBy: z.string().exactOptional(),
    resolvedByCpi: z.string().exactOptional(),
    timestamp: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoSuspensionResolutionInfoAudit')

const EnterpriseCrmEventbusProtoSuspensionResolutionInfoSchema = z
  .object({
    audit: EnterpriseCrmEventbusProtoSuspensionResolutionInfoAuditSchema.exactOptional(),
    clientId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The event data user sends as request.' }),
    cloudKmsConfig: EnterpriseCrmEventbusProtoCloudKmsConfigSchema.exactOptional().openapi({
      description: 'KMS info, used by cmek/gmek integration',
    }),
    createdTimestamp: z.string().exactOptional().openapi({ description: 'Auto-generated.' }),
    encryptedSuspensionResolutionInfo: z
      .string()
      .exactOptional()
      .openapi({ description: 'Encrypted SuspensionResolutionInfo' }),
    eventExecutionInfoId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. ID of the associated execution.' }),
    externalTraffic: EnterpriseCrmEventbusProtoExternalTrafficSchema.exactOptional().openapi({
      description: 'The origin of the suspension for periodic notifications.',
    }),
    lastModifiedTimestamp: z.string().exactOptional().openapi({ description: 'Auto-generated.' }),
    product: z
      .enum(['UNSPECIFIED_PRODUCT', 'IP', 'APIGEE', 'SECURITY'])
      .exactOptional()
      .openapi({
        description:
          'Which Google product the suspension belongs to. If not set, the suspension belongs to Integration Platform by default.',
      }),
    status: z.enum(['PENDING_UNSPECIFIED', 'REJECTED', 'LIFTED', 'CANCELED']).exactOptional(),
    suspensionConfig: EnterpriseCrmEventbusProtoSuspensionConfigSchema.exactOptional(),
    suspensionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Primary key for the SuspensionResolutionInfoTable.' }),
    taskNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Task number of the associated SuspensionTask.' }),
    workflowName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The name of the originating workflow.' }),
    wrappedDek: z.string().exactOptional().openapi({ description: 'Wrapped dek' }),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoSuspensionResolutionInfo')

const EnterpriseCrmEventbusProtoTaskAlertConfigSchema = z
  .object({
    aggregationPeriod: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The period over which the metric value should be aggregated and evaluated. Format is , where integer should be a positive integer and unit should be one of (s,m,h,d,w) meaning (second, minute, hour, day, week).',
      }),
    alertDisabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Set to false by default. When set to true, the metrics are not aggregated or pushed to Monarch for this workflow alert.',
      }),
    alertName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A name to identify this alert. This will be displayed in the alert subject. If set, this name should be unique in within the scope of the containing workflow.',
      }),
    clientId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Client associated with this alert configuration. Must be a client enabled in one of the containing workflow's triggers.",
      }),
    durationThresholdMs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Should be specified only for TASK_AVERAGE_DURATION and TASK_PERCENTILE_DURATION metrics. This member should be used to specify what duration value the metrics should exceed for the alert to trigger.',
      }),
    errorEnumList: EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListSchema.exactOptional(),
    metricType: z
      .enum([
        'METRIC_TYPE_UNSPECIFIED',
        'TASK_ERROR_RATE',
        'TASK_WARNING_RATE',
        'TASK_RATE',
        'TASK_AVERAGE_DURATION',
        'TASK_PERCENTILE_DURATION',
      ])
      .exactOptional(),
    numAggregationPeriods: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'For how many contiguous aggregation periods should the expected min or max be violated for the alert to be fired.',
      }),
    onlyFinalAttempt: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Only count final task attempts, not retries.' }),
    playbookUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to a playbook for resolving the issue that triggered this alert.',
      }),
    thresholdType: z
      .enum(['UNSPECIFIED_THRESHOLD_TYPE', 'EXPECTED_MIN', 'EXPECTED_MAX'])
      .exactOptional()
      .openapi({
        description:
          'The threshold type for which this alert is being configured. If value falls below expected_min or exceeds expected_max, an alert will be fired.',
      }),
    thresholdValue:
      EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValueSchema.exactOptional().openapi({
        description: 'The metric value, above or below which the alert should be triggered.',
      }),
    warningEnumList: EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListSchema.exactOptional(),
  })
  .openapi({
    description:
      'Message to be used to configure alerting in the {@code TaskConfig} protos for tasks in an event.',
    required: [],
  })
  .openapi('EnterpriseCrmEventbusProtoTaskAlertConfig')

const EnterpriseCrmEventbusProtoTaskMetadataAdminSchema = z
  .object({ googleGroupEmail: z.string().exactOptional(), userEmail: z.string().exactOptional() })
  .openapi({
    description:
      'Admins are owners of a Task, and have all permissions on a particular task identified by the task name. By default, Eventbus periodically scans all task metadata and syncs (adds) any new admins defined here to Zanzibar.',
    required: [],
  })
  .openapi('EnterpriseCrmEventbusProtoTaskMetadataAdmin')

const EnterpriseCrmEventbusProtoTaskMetadataSchema = z
  .object({
    activeTaskName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The new task name to replace the current task if it is deprecated. Otherwise, it is the same as the current task name.',
      }),
    admins: z.array(EnterpriseCrmEventbusProtoTaskMetadataAdminSchema).exactOptional(),
    category: z
      .enum([
        'UNSPECIFIED_CATEGORY',
        'CUSTOM',
        'FLOW_CONTROL',
        'DATA_MANIPULATION',
        'SCRIPTING',
        'CONNECTOR',
        'HIDDEN',
        'CLOUD_SYSTEMS',
        'CUSTOM_TASK_TEMPLATE',
        'TASK_RECOMMENDATIONS',
      ])
      .exactOptional(),
    codeSearchLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Code Search link to the Task Java file.' }),
    defaultJsonValidationOption: z
      .enum([
        'UNSPECIFIED_JSON_VALIDATION_OPTION',
        'SKIP',
        'PRE_EXECUTION',
        'POST_EXECUTION',
        'PRE_POST_EXECUTION',
      ])
      .exactOptional()
      .openapi({
        description:
          "Controls whether JSON workflow parameters are validated against provided schemas before and/or after this task's execution.",
      }),
    defaultSpec: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains the initial configuration of the task with default values set. For now, The string should be compatible to an ASCII-proto format.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'In a few sentences, describe the purpose and usage of the task.' }),
    descriptiveName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The string name to show on the task list on the Workflow editor screen. This should be a very short, one to two words name for the task. (e.g. "Send Mail")',
      }),
    docMarkdown: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Snippet of markdown documentation to embed in the RHP for this task.',
      }),
    externalCategory: z
      .enum(['UNSPECIFIED_EXTERNAL_CATEGORY', 'CORE', 'CONNECTORS'])
      .exactOptional(),
    externalCategorySequence: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Sequence with which the task in specific category to be displayed in task discovery panel for external users.',
      }),
    externalDocHtml: z
      .string()
      .exactOptional()
      .openapi({ description: 'External-facing documention embedded in the RHP for this task.' }),
    externalDocLink: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Doc link for external-facing documentation (separate from g3doc).',
      }),
    externalDocMarkdown: z
      .string()
      .exactOptional()
      .openapi({ description: 'DEPRECATED: Use external_doc_html.' }),
    g3DocLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL to the associated G3 Doc for the task if available' }),
    iconLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL to gstatic image icon for this task. This icon shows up on the task list panel along with the task name in the Workflow Editor screen. Use the 24p, 2x, gray color icon image format.',
      }),
    isDeprecated: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'The deprecation status of the current task. Default value is false;',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The actual class name or the annotated name of the task. Task Author should initialize this field with value from the getName() method of the Task class.',
      }),
    standaloneExternalDocHtml: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'External-facing documention for standalone IP in pantheon embedded in the RHP for this task. Non null only if different from external_doc_html',
      }),
    status: z
      .enum(['UNSPECIFIED_STATUS', 'DEFAULT_INACTIVE', 'ACTIVE'])
      .exactOptional()
      .openapi({
        description:
          'Allows author to indicate if the task is ready to use or not. If not set, then it will default to INACTIVE.',
      }),
    system: z
      .enum([
        'UNSPECIFIED_SYSTEM',
        'GENERIC',
        'BUGANIZER',
        'SALESFORCE',
        'CLOUD_SQL',
        'PLX',
        'SHEETS',
        'GOOGLE_GROUPS',
        'EMAIL',
        'SPANNER',
        'DATA_BRIDGE',
      ])
      .exactOptional(),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of tags that pertain to a particular task. This can be used to improve the searchability of tasks with several names ("REST Caller" vs. "Call REST Endpoint") or to help users find tasks based on related words.',
      }),
  })
  .openapi({
    description: 'TaskMetadata are attributes that are associated to every common Task we have.',
    required: [],
  })
  .openapi('EnterpriseCrmEventbusProtoTaskMetadata')

const EnterpriseCrmEventbusProtoTaskUiModuleConfigSchema = z
  .object({
    moduleId: z
      .enum([
        'UNSPECIFIED_TASK_MODULE',
        'LABEL',
        'ERROR_HANDLING',
        'TASK_PARAM_TABLE',
        'TASK_PARAM_FORM',
        'PRECONDITION',
        'SCRIPT_EDITOR',
        'RPC',
        'TASK_SUMMARY',
        'SUSPENSION',
        'RPC_TYPED',
        'SUB_WORKFLOW',
        'APPS_SCRIPT_NAVIGATOR',
        'SUB_WORKFLOW_FOR_EACH_LOOP',
        'FIELD_MAPPING',
        'README',
        'REST_CALLER',
        'SUB_WORKFLOW_SCATTER_GATHER',
        'CLOUD_SQL',
        'GENERIC_CONNECTOR_TASK',
      ])
      .exactOptional()
      .openapi({ description: 'ID of the config module.' }),
  })
  .openapi({
    description: 'Task author would use this type to configure a config module.',
    required: [],
  })
  .openapi('EnterpriseCrmEventbusProtoTaskUiModuleConfig')

const EnterpriseCrmEventbusProtoTaskUiConfigSchema = z
  .object({
    taskUiModuleConfigs: z
      .array(EnterpriseCrmEventbusProtoTaskUiModuleConfigSchema)
      .exactOptional()
      .openapi({ description: 'Configurations of included config modules.' }),
  })
  .openapi({
    description:
      'Task authors would use this type to configure the UI for a particular task by specifying what UI config modules should be included to compose the UI. Learn more about config module framework:',
    required: [],
  })
  .openapi('EnterpriseCrmEventbusProtoTaskUiConfig')

const EnterpriseCrmEventbusProtoTeardownTaskConfigSchema = z
  .object({
    creatorEmail: z
      .string()
      .exactOptional()
      .openapi({ description: "The creator's email address." }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Unique identifier of the teardown task within this Config. We use this field as the identifier to find next teardown tasks.',
      }),
    nextTeardownTask: EnterpriseCrmEventbusProtoNextTeardownTaskSchema.exactOptional(),
    parameters: EnterpriseCrmEventbusProtoEventParametersSchema.exactOptional().openapi({
      description: 'The parameters the user can pass to this task.',
    }),
    properties: EnterpriseCrmEventbusProtoEventBusPropertiesSchema.exactOptional(),
    teardownTaskImplementationClassName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Implementation class name.' }),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoTeardownTaskConfig')

const EnterpriseCrmEventbusProtoTeardownSchema = z
  .object({
    teardownTaskConfigs: z
      .array(EnterpriseCrmEventbusProtoTeardownTaskConfigSchema)
      .exactOptional()
      .openapi({ description: 'Required.' }),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoTeardown')

const EnterpriseCrmEventbusProtoTriggerCriteriaSchema = z
  .object({
    condition: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. Standard filter expression, when true the workflow will be executed. If there's no trigger_criteria_task_implementation_class_name specified, the condition will be validated directly.",
      }),
    parameters: EnterpriseCrmEventbusProtoEventParametersSchema.exactOptional().openapi({
      description: 'Optional. To be used in TaskConfig for the implementation class.',
    }),
    triggerCriteriaTaskImplementationClassName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Implementation class name. The class should implement the “TypedTask” interface.',
      }),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusProtoTriggerCriteria')

const EnterpriseCrmEventbusProtoWorkflowAlertConfigSchema = z
  .object({
    aggregationPeriod: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For an EXPECTED_MIN threshold, this aggregation_period must be lesser than 24 hours.',
      }),
    alertDisabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Set to false by default. When set to true, the metrics are not aggregated or pushed to Monarch for this workflow alert.',
      }),
    alertName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A name to identify this alert. This will be displayed in the alert subject. If set, this name should be unique within the scope of the workflow.',
      }),
    clientId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Client associated with this alert configuration.' }),
    durationThresholdMs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Should be specified only for *AVERAGE_DURATION and *PERCENTILE_DURATION metrics. This member should be used to specify what duration value the metrics should exceed for the alert to trigger.',
      }),
    errorEnumList: EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListSchema.exactOptional(),
    metricType: z
      .enum([
        'METRIC_TYPE_UNSPECIFIED',
        'EVENT_ERROR_RATE',
        'EVENT_WARNING_RATE',
        'TASK_ERROR_RATE',
        'TASK_WARNING_RATE',
        'TASK_RATE',
        'EVENT_RATE',
        'EVENT_AVERAGE_DURATION',
        'EVENT_PERCENTILE_DURATION',
        'TASK_AVERAGE_DURATION',
        'TASK_PERCENTILE_DURATION',
      ])
      .exactOptional(),
    numAggregationPeriods: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'For how many contiguous aggregation periods should the expected min or max be violated for the alert to be fired.',
      }),
    onlyFinalAttempt: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'For either events or tasks, depending on the type of alert, count only final attempts, not retries.',
      }),
    playbookUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to a playbook for resolving the issue that triggered this alert.',
      }),
    thresholdType: z
      .enum(['UNSPECIFIED_THRESHOLD_TYPE', 'EXPECTED_MIN', 'EXPECTED_MAX'])
      .exactOptional()
      .openapi({
        description:
          'The threshold type, whether lower(expected_min) or upper(expected_max), for which this alert is being configured. If value falls below expected_min or exceeds expected_max, an alert will be fired.',
      }),
    thresholdValue:
      EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValueSchema.exactOptional().openapi({
        description: 'The metric value, above or below which the alert should be triggered.',
      }),
    warningEnumList: EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListSchema.exactOptional(),
  })
  .openapi({
    description:
      'Message to be used to configure custom alerting in the {@code EventConfig} protos for an event.',
    required: [],
  })
  .openapi('EnterpriseCrmEventbusProtoWorkflowAlertConfig')

const EnterpriseCrmEventbusStatsDimensionsSchema = z
  .object({
    clientId: z.string().exactOptional(),
    enumFilterType: z
      .enum(['DEFAULT_INCLUSIVE', 'EXCLUSIVE'])
      .exactOptional()
      .openapi({ description: 'Whether to include or exclude the enums matching the regex.' }),
    errorEnumString: z.string().exactOptional(),
    retryAttempt: z.enum(['UNSPECIFIED', 'FINAL', 'RETRYABLE', 'CANCELED']).exactOptional(),
    taskName: z.string().exactOptional(),
    taskNumber: z.string().exactOptional(),
    triggerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Stats have been or will be aggregated on set fields for any semantically-meaningful combination.',
      }),
    warningEnumString: z.string().exactOptional(),
    workflowId: z.string().exactOptional(),
    workflowName: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmEventbusStatsDimensions')

const EnterpriseCrmEventbusStatsSchema = z
  .object({
    dimensions: EnterpriseCrmEventbusStatsDimensionsSchema.exactOptional().openapi({
      description: 'Dimensions that these stats have been aggregated on.',
    }),
    durationInSeconds: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Average duration in seconds.' }),
    errorRate: z.float64().exactOptional().openapi({ description: 'Average error rate.' }),
    qps: z.float64().exactOptional().openapi({ description: 'Queries per second.' }),
    warningRate: z.float64().exactOptional().openapi({ description: 'Average warning rate.' }),
  })
  .openapi({
    description: 'Stats for the requested dimensions: QPS, duration, and error/warning rate',
    required: [],
  })
  .openapi('EnterpriseCrmEventbusStats')

const EnterpriseCrmFrontendsEventbusProtoEventParametersSchema = z
  .object({
    parameters: z
      .array(EnterpriseCrmFrontendsEventbusProtoParameterEntrySchema)
      .exactOptional()
      .openapi({
        description:
          'Parameters are a part of Event and can be used to communicate between different tasks that are part of the same workflow execution.',
      }),
  })
  .openapi({
    description:
      'LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see',
    required: [],
  })
  .openapi('EnterpriseCrmFrontendsEventbusProtoEventParameters')

const EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshotSchema = z
  .object({
    checkpointTaskNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates "right after which checkpoint task\'s execution" this snapshot is taken.',
      }),
    conditionResults: z
      .array(EnterpriseCrmEventbusProtoConditionResultSchema)
      .exactOptional()
      .openapi({ description: 'All of the computed conditions that been calculated.' }),
    diffParams: EnterpriseCrmFrontendsEventbusProtoEventParametersSchema.exactOptional().openapi({
      description: 'The parameters in Event object that differs from last snapshot.',
    }),
    eventExecutionInfoId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Points to the event execution info this snapshot belongs to.' }),
    eventExecutionSnapshotId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Auto-generated. Used as primary key for EventExecutionSnapshots table.',
      }),
    eventExecutionSnapshotMetadata:
      EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadataSchema.exactOptional(),
    eventParams: EnterpriseCrmFrontendsEventbusProtoEventParametersSchema.exactOptional().openapi({
      description: 'The parameters in Event object.',
    }),
    snapshotTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Indicates when this snapshot is taken.' }),
    taskExecutionDetails: z
      .array(EnterpriseCrmEventbusProtoTaskExecutionDetailsSchema)
      .exactOptional()
      .openapi({ description: 'All of the task execution details at the given point of time.' }),
    taskName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The task name associated with this snapshot. Could be empty.' }),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot')

const EnterpriseCrmFrontendsEventbusProtoEventExecutionDetailsSchema = z
  .object({
    eventAttemptStats: z
      .array(EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStatsSchema)
      .exactOptional(),
    eventExecutionSnapshot: z
      .array(EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshotSchema)
      .exactOptional()
      .openapi({
        description:
          'After snapshot migration, this field will no longer be populated, but old execution snapshots will still be accessible.',
      }),
    eventExecutionState: z
      .enum([
        'UNSPECIFIED',
        'ON_HOLD',
        'IN_PROCESS',
        'SUCCEEDED',
        'FAILED',
        'CANCELED',
        'RETRY_ON_HOLD',
        'SUSPENDED',
      ])
      .exactOptional()
      .openapi({ description: 'The execution state of this event.' }),
    eventRetriesFromBeginningCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Indicates the number of times the execution has restarted from the beginning.',
      }),
    logFilePath: z
      .string()
      .exactOptional()
      .openapi({ description: 'The log file path (aka. cns address) for this event.' }),
    networkAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The network address (aka. bns address) that indicates where the event executor is running.',
      }),
    nextExecutionTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Next scheduled execution time in case the execution status was RETRY_ON_HOLD.',
      }),
    ryeLockUnheldCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Used internally and shouldn't be exposed to users. A counter for the cron job to record how many times this event is in in_process state but don't have a lock consecutively/",
      }),
  })
  .openapi({
    description:
      'Contains the details of the execution info of this event: this includes the tasks execution details plus the event execution statistics. Next available id: 10',
    required: [],
  })
  .openapi('EnterpriseCrmFrontendsEventbusProtoEventExecutionDetails')

const EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoSchema = z
  .object({
    clientId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The event data user sends as request.' }),
    createTime: z.string().exactOptional().openapi({ description: 'Auto-generated.' }),
    errorCode: CrmlogErrorCodeSchema.exactOptional().openapi({
      description: 'Final error-code if event failed.',
    }),
    errors: z
      .array(EnterpriseCrmEventbusProtoErrorDetailSchema)
      .exactOptional()
      .openapi({
        description:
          'Errors, warnings, and informationals associated with the workflow/task. The order in which the errors were added by the workflow/task is maintained.',
      }),
    eventExecutionDetails:
      EnterpriseCrmFrontendsEventbusProtoEventExecutionDetailsSchema.exactOptional().openapi({
        description: 'The execution info about this event.',
      }),
    eventExecutionInfoId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Auto-generated primary key.' }),
    executionTraceInfo: EnterpriseCrmEventbusProtoExecutionTraceInfoSchema.exactOptional().openapi({
      description: 'Execution trace info to aggregate parent-child executions.',
    }),
    lastModifiedTime: z.string().exactOptional().openapi({ description: 'Auto-generated.' }),
    postMethod: z
      .enum([
        'UNSPECIFIED',
        'POST',
        'POST_TO_QUEUE',
        'SCHEDULE',
        'POST_BY_EVENT_CONFIG_ID',
        'POST_WITH_EVENT_DETAILS',
      ])
      .exactOptional()
      .openapi({ description: 'The ways user posts this event.' }),
    product: z
      .enum(['UNSPECIFIED_PRODUCT', 'IP', 'APIGEE', 'SECURITY'])
      .exactOptional()
      .openapi({
        description:
          'Which Google product the execution_info belongs to. If not set, the execution_info belongs to Integration Platform by default.',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. This is used to de-dup incoming request.' }),
    requestParams: EnterpriseCrmFrontendsEventbusProtoEventParametersSchema.exactOptional().openapi(
      { description: 'Event parameters come in as part of the request.' },
    ),
    responseParams:
      EnterpriseCrmFrontendsEventbusProtoEventParametersSchema.exactOptional().openapi({
        description: 'Event parameters come out as part of the response.',
      }),
    snapshotNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Workflow snapshot number.' }),
    tenant: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Tenant this event is created. Used to reschedule the event to correct tenant.',
      }),
    triggerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The trigger id of the workflow trigger config. If both trigger_id and client_id is present, the workflow is executed from the start tasks provided by the matching trigger config otherwise it is executed from the default start tasks.',
      }),
    workflowId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Pointer to the workflow it is executing.' }),
    workflowName: z.string().exactOptional().openapi({ description: 'Name of the workflow.' }),
    workflowRetryBackoffIntervalSeconds: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time interval in seconds to schedule retry of workflow in manifold when workflow is already running',
      }),
  })
  .openapi({
    description:
      'Contains all the execution details for a workflow instance. Next available id: 24',
    required: [],
  })
  .openapi('EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo')

const EnterpriseCrmFrontendsEventbusProtoParamSpecEntrySchema = z
  .object({
    className: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The FQCN of the Java object this represents. A string, for example, would be "java.lang.String". If this is "java.lang.Object", the parameter can be of any type.',
      }),
    collectionElementClassName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If it is a collection of objects, this would be the FCQN of every individual element in the collection. If this is "java.lang.Object", the parameter is a collection of any type.',
      }),
    config: EnterpriseCrmEventbusProtoParamSpecEntryConfigSchema.exactOptional().openapi({
      description: 'Optional fields, such as help text and other useful info.',
    }),
    dataType: z
      .enum([
        'DATA_TYPE_UNSPECIFIED',
        'STRING_VALUE',
        'INT_VALUE',
        'DOUBLE_VALUE',
        'BOOLEAN_VALUE',
        'PROTO_VALUE',
        'SERIALIZED_OBJECT_VALUE',
        'STRING_ARRAY',
        'INT_ARRAY',
        'DOUBLE_ARRAY',
        'PROTO_ARRAY',
        'PROTO_ENUM',
        'BOOLEAN_ARRAY',
        'PROTO_ENUM_ARRAY',
        'BYTES',
        'BYTES_ARRAY',
        'NON_SERIALIZABLE_OBJECT',
        'JSON_VALUE',
      ])
      .exactOptional()
      .openapi({ description: 'The data type of the parameter.' }),
    defaultValue:
      EnterpriseCrmFrontendsEventbusProtoParameterValueTypeSchema.exactOptional().openapi({
        description:
          'Default values for the defined keys. Each value can either be string, int, double or any proto message or a serialized object.',
      }),
    isDeprecated: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set, this entry is deprecated, so further use of this parameter should be prohibited.',
      }),
    isOutput: z.boolean().exactOptional(),
    jsonSchema: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If the data_type is JSON_VALUE, then this will define its schema.',
      }),
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Key is used to retrieve the corresponding parameter value. This should be unique for a given task. These parameters must be predefined in the workflow definition.',
      }),
    protoDef: EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinitionSchema.exactOptional().openapi(
      { description: 'Populated if this represents a proto or proto array.' },
    ),
    required: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If set, the user must provide an input value for this parameter.' }),
    validationRule:
      EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleSchema.exactOptional().openapi({
        description:
          'Rule used to validate inputs (individual values and collection elements) for this parameter.',
      }),
  })
  .openapi({ description: 'Key-value pair of EventBus task parameters. Next id: 13', required: [] })
  .openapi('EnterpriseCrmFrontendsEventbusProtoParamSpecEntry')

const EnterpriseCrmFrontendsEventbusProtoParamSpecsMessageSchema = z
  .object({
    parameters: z.array(EnterpriseCrmFrontendsEventbusProtoParamSpecEntrySchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage')

const EnterpriseCrmFrontendsEventbusProtoParameterMapFieldSchema = z
  .object({
    literalValue:
      EnterpriseCrmFrontendsEventbusProtoParameterValueTypeSchema.exactOptional().openapi({
        description: 'Passing a literal value.',
      }),
    referenceKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'Referencing one of the WF variables.' }),
  })
  .openapi({ description: 'Field represents either the key or value in an entry.', required: [] })
  .openapi('EnterpriseCrmFrontendsEventbusProtoParameterMapField')

const EnterpriseCrmFrontendsEventbusProtoParameterMapEntrySchema = z
  .object({
    key: EnterpriseCrmFrontendsEventbusProtoParameterMapFieldSchema.exactOptional(),
    value: EnterpriseCrmFrontendsEventbusProtoParameterMapFieldSchema.exactOptional(),
  })
  .openapi({ description: 'Entry is a pair of key and value.', required: [] })
  .openapi('EnterpriseCrmFrontendsEventbusProtoParameterMapEntry')

const EnterpriseCrmFrontendsEventbusProtoParameterMapSchema = z
  .object({
    entries: z.array(EnterpriseCrmFrontendsEventbusProtoParameterMapEntrySchema).exactOptional(),
    keyType: z
      .enum([
        'DATA_TYPE_UNSPECIFIED',
        'STRING_VALUE',
        'INT_VALUE',
        'DOUBLE_VALUE',
        'BOOLEAN_VALUE',
        'PROTO_VALUE',
        'SERIALIZED_OBJECT_VALUE',
        'STRING_ARRAY',
        'INT_ARRAY',
        'DOUBLE_ARRAY',
        'PROTO_ARRAY',
        'PROTO_ENUM',
        'BOOLEAN_ARRAY',
        'PROTO_ENUM_ARRAY',
        'BYTES',
        'BYTES_ARRAY',
        'NON_SERIALIZABLE_OBJECT',
        'JSON_VALUE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Option to specify key value type for all entries of the map. If provided then field types for all entries must conform to this.',
      }),
    valueType: z
      .enum([
        'DATA_TYPE_UNSPECIFIED',
        'STRING_VALUE',
        'INT_VALUE',
        'DOUBLE_VALUE',
        'BOOLEAN_VALUE',
        'PROTO_VALUE',
        'SERIALIZED_OBJECT_VALUE',
        'STRING_ARRAY',
        'INT_ARRAY',
        'DOUBLE_ARRAY',
        'PROTO_ARRAY',
        'PROTO_ENUM',
        'BOOLEAN_ARRAY',
        'PROTO_ENUM_ARRAY',
        'BYTES',
        'BYTES_ARRAY',
        'NON_SERIALIZABLE_OBJECT',
        'JSON_VALUE',
      ])
      .exactOptional(),
  })
  .openapi({
    description:
      'A generic multi-map that holds key value pairs. They keys and values can be of any type, unless specified.',
    required: [],
  })
  .openapi('EnterpriseCrmFrontendsEventbusProtoParameterMap')

const EnterpriseCrmFrontendsEventbusProtoRollbackStrategySchema = z
  .object({
    parameters: EnterpriseCrmFrontendsEventbusProtoEventParametersSchema.exactOptional().openapi({
      description: 'Optional. The customized parameters the user can pass to this task.',
    }),
    rollbackTaskImplementationClassName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. This is the name of the task that needs to be executed upon rollback of this task.',
      }),
    taskNumbersToRollback: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. These are the tasks numbers of the tasks whose `rollback_strategy.rollback_task_implementation_class_name` needs to be executed upon failure of this task.',
      }),
  })
  .openapi({ description: 'Next available id: 4', required: [] })
  .openapi('EnterpriseCrmFrontendsEventbusProtoRollbackStrategy')

const EnterpriseCrmFrontendsEventbusProtoTaskEntitySchema = z
  .object({
    disabledForVpcSc: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the task has conflict with vpcsc' }),
    metadata: EnterpriseCrmEventbusProtoTaskMetadataSchema.exactOptional().openapi({
      description: 'Metadata inclueds the task name, author and so on.',
    }),
    paramSpecs: EnterpriseCrmFrontendsEventbusProtoParamSpecsMessageSchema.exactOptional().openapi({
      description:
        'Declarations for inputs/outputs for a TypedTask. This is also associated with the METADATA mask.',
    }),
    stats: EnterpriseCrmEventbusStatsSchema.exactOptional().openapi({
      description: 'Deprecated - statistics from the Monarch query.',
    }),
    taskType: z
      .enum(['TASK', 'ASIS_TEMPLATE', 'IO_TEMPLATE'])
      .exactOptional()
      .openapi({ description: 'Defines the type of the task' }),
    uiConfig: EnterpriseCrmEventbusProtoTaskUiConfigSchema.exactOptional().openapi({
      description: 'UI configuration for this task Also associated with the METADATA mask.',
    }),
  })
  .openapi({
    description: "Contains a task's metadata and associated information. Next available id: 7",
    required: [],
  })
  .openapi('EnterpriseCrmFrontendsEventbusProtoTaskEntity')

const EnterpriseCrmFrontendsEventbusProtoTaskConfigSchema = z
  .object({
    alertConfigs: z
      .array(EnterpriseCrmEventbusProtoTaskAlertConfigSchema)
      .exactOptional()
      .openapi({
        description:
          'Alert configurations on error rate, warning rate, number of runs, durations, etc.',
      }),
    createTime: z.string().exactOptional().openapi({ description: 'Auto-generated.' }),
    creatorEmail: z
      .string()
      .exactOptional()
      .openapi({
        description: "The creator's email address. Auto-generated from the user's email.",
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User-provided description intended to give more business context about the task.',
      }),
    disableStrictTypeValidation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If this config contains a TypedTask, allow validation to succeed if an input is read from the output of another TypedTask whose output type is declared as a superclass of the requested input type. For instance, if the previous task declares an output of type Message, any task with this flag enabled will pass validation when attempting to read any proto Message type from the resultant Event parameter.',
      }),
    errorCatcherId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional Error catcher id of the error catch flow which will be executed when execution error happens in the task',
      }),
    externalTaskType: z
      .enum(['EXTERNAL_TASK_TYPE_UNSPECIFIED', 'NORMAL_TASK', 'ERROR_TASK'])
      .exactOptional(),
    failurePolicy: EnterpriseCrmEventbusProtoFailurePolicySchema.exactOptional().openapi({
      description:
        'Optional. Determines the number of times the task will be retried on failure and with what retry strategy. This is applicable for asynchronous calls to Eventbus alone (Post To Queue, Schedule etc.).',
    }),
    incomingEdgeCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of edges leading into this TaskConfig.' }),
    jsonValidationOption: z
      .enum([
        'UNSPECIFIED_JSON_VALIDATION_OPTION',
        'SKIP',
        'PRE_EXECUTION',
        'POST_EXECUTION',
        'PRE_POST_EXECUTION',
      ])
      .exactOptional()
      .openapi({
        description: 'If set, overrides the option configured in the Task implementation class.',
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description: 'User-provided label that is attached to this TaskConfig in the UI.',
      }),
    lastModifiedTime: z.string().exactOptional().openapi({ description: 'Auto-generated.' }),
    nextTasks: z
      .array(EnterpriseCrmEventbusProtoNextTaskSchema)
      .exactOptional()
      .openapi({
        description:
          'The set of tasks that are next in line to be executed as per the execution graph defined for the parent event, specified by `event_config_id`. Each of these next tasks are executed only if the condition associated with them evaluates to true.',
      }),
    nextTasksExecutionPolicy: z
      .enum(['UNSPECIFIED', 'RUN_ALL_MATCH', 'RUN_FIRST_MATCH'])
      .exactOptional()
      .openapi({
        description:
          'The policy dictating the execution of the next set of tasks for the current task.',
      }),
    parameters: z
      .record(z.string(), EnterpriseCrmFrontendsEventbusProtoParameterEntrySchema)
      .exactOptional()
      .openapi({ description: 'The customized parameters the user can pass to this task.' }),
    position: EnterpriseCrmEventbusProtoCoordinateSchema.exactOptional().openapi({
      description:
        'Optional. Informs the front-end application where to draw this task config on the UI.',
    }),
    precondition: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Standard filter expression evaluated before execution. Independent of other conditions and tasks. Can be used to enable rollout. e.g. "rollout(5)" will only allow 5% of incoming traffic to task.',
      }),
    preconditionLabel: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. User-provided label that is attached to precondition in the UI.',
      }),
    rollbackStrategy:
      EnterpriseCrmFrontendsEventbusProtoRollbackStrategySchema.exactOptional().openapi({
        description:
          'Optional. Contains information about what needs to be done upon failure (either a permanent error or after it has been retried too many times).',
      }),
    successPolicy: EnterpriseCrmEventbusProtoSuccessPolicySchema.exactOptional().openapi({
      description: 'Determines what action to take upon successful task completion.',
    }),
    synchronousCallFailurePolicy:
      EnterpriseCrmEventbusProtoFailurePolicySchema.exactOptional().openapi({
        description:
          'Optional. Determines the number of times the task will be retried on failure and with what retry strategy. This is applicable for synchronous calls to Eventbus alone (Post).',
      }),
    taskEntity: EnterpriseCrmFrontendsEventbusProtoTaskEntitySchema.exactOptional().openapi({
      description: 'Copy of the task entity that this task config is an instance of.',
    }),
    taskExecutionStrategy: z
      .enum(['WHEN_ALL_SUCCEED', 'WHEN_ANY_SUCCEED', 'WHEN_ALL_TASKS_AND_CONDITIONS_SUCCEED'])
      .exactOptional()
      .openapi({ description: 'The policy dictating the execution strategy of this task.' }),
    taskName: z.string().exactOptional().openapi({ description: 'The name for the task.' }),
    taskNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'REQUIRED: the identifier of this task within its parent event config, specified by the client. This should be unique among all the tasks belong to the same event config. We use this field as the identifier to find next tasks (via field `next_tasks.task_number`).',
      }),
    taskSpec: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string template that allows user to configure task parameters (with either literal default values or tokens which will be resolved at execution time) for the task. It will eventually replace the old "parameters" field.',
      }),
    taskTemplateName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Used to define task-template name if task is of type task-template',
      }),
    taskType: z
      .enum(['TASK', 'ASIS_TEMPLATE', 'IO_TEMPLATE'])
      .exactOptional()
      .openapi({ description: 'Defines the type of the task' }),
  })
  .openapi({
    description:
      'The task configuration details. This is not the implementation of Task. There might be multiple TaskConfigs for the same Task.',
    required: [],
  })
  .openapi('EnterpriseCrmFrontendsEventbusProtoTaskConfig')

const EnterpriseCrmFrontendsEventbusProtoTriggerConfigSchema = z
  .object({
    alertConfig: z
      .array(EnterpriseCrmEventbusProtoWorkflowAlertConfigSchema)
      .exactOptional()
      .openapi({
        description:
          'An alert threshold configuration for the [trigger + client + workflow] tuple. If these values are not specified in the trigger config, default values will be populated by the system. Note that there must be exactly one alert threshold configured per [client + trigger + workflow] when published.',
      }),
    cloudSchedulerConfig: EnterpriseCrmEventbusProtoCloudSchedulerConfigSchema.exactOptional(),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User-provided description intended to give more business context about the task.',
      }),
    enabledClients: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. The list of client ids which are enabled to execute the workflow using this trigger. In other words, these clients have the workflow execution privledges for this trigger. For API trigger, the client id in the incoming request is validated against the list of enabled clients. For non-API triggers, one workflow execution is triggered on behalf of each enabled client.',
      }),
    errorCatcherId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional Error catcher id of the error catch flow which will be executed when execution error happens in the task',
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user created label for a particular trigger.' }),
    nextTasksExecutionPolicy: z
      .enum(['UNSPECIFIED', 'RUN_ALL_MATCH', 'RUN_FIRST_MATCH'])
      .exactOptional()
      .openapi({ description: 'Dictates how next tasks will be executed.' }),
    pauseWorkflowExecutions: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. If set to true, any upcoming requests for this trigger config will be paused and the executions will be resumed later when the flag is reset. The workflow to which this trigger config belongs has to be in ACTIVE status for the executions to be paused or resumed.',
      }),
    position: EnterpriseCrmEventbusProtoCoordinateSchema.exactOptional().openapi({
      description:
        'Optional. Informs the front-end application where to draw this trigger config on the UI.',
    }),
    properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Configurable properties of the trigger, not to be confused with workflow parameters. E.g. "name" is a property for API triggers and "subscription" is a property for Cloud Pubsub triggers.',
      }),
    startTasks: z
      .array(EnterpriseCrmEventbusProtoNextTaskSchema)
      .exactOptional()
      .openapi({
        description:
          'Set of tasks numbers from where the workflow execution is started by this trigger. If this is empty, then workflow is executed with default start tasks. In the list of start tasks, none of two tasks can have direct ancestor-descendant relationships (i.e. in a same workflow execution graph).',
      }),
    triggerCriteria: EnterpriseCrmEventbusProtoTriggerCriteriaSchema.exactOptional().openapi({
      description:
        'Optional. When set, Eventbus will run the task specified in the trigger_criteria and validate the result using the trigger_criteria.condition, and only execute the workflow when result is true.',
    }),
    triggerId: z.string().exactOptional().openapi({ description: 'The backend trigger ID.' }),
    triggerNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A number to uniquely identify each trigger config within the workflow on UI.',
      }),
    triggerType: z
      .enum([
        'UNKNOWN',
        'CLOUD_PUBSUB',
        'GOOPS',
        'SFDC_SYNC',
        'CRON',
        'API',
        'MANIFOLD_TRIGGER',
        'DATALAYER_DATA_CHANGE',
        'SFDC_CHANNEL',
        'CLOUD_PUBSUB_EXTERNAL',
        'SFDC_CDC_CHANNEL',
        'SFDC_PLATFORM_EVENTS_CHANNEL',
        'CLOUD_SCHEDULER',
      ])
      .exactOptional(),
  })
  .openapi({
    description: 'Configuration detail of a trigger. Next available id: 19',
    required: [],
  })
  .openapi('EnterpriseCrmFrontendsEventbusProtoTriggerConfig')

const EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntrySchema: z.ZodType<EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryType> =
  z
    .lazy(() =>
      z
        .object({
          attributes: EnterpriseCrmEventbusProtoAttributesSchema.exactOptional().openapi({
            description: 'Metadata information about the parameters.',
          }),
          children: z
            .array(EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntrySchema)
            .exactOptional()
            .openapi({
              description:
                'Child parameters nested within this parameter. This field only applies to protobuf parameters',
            }),
          dataType: z
            .enum([
              'DATA_TYPE_UNSPECIFIED',
              'STRING_VALUE',
              'INT_VALUE',
              'DOUBLE_VALUE',
              'BOOLEAN_VALUE',
              'PROTO_VALUE',
              'SERIALIZED_OBJECT_VALUE',
              'STRING_ARRAY',
              'INT_ARRAY',
              'DOUBLE_ARRAY',
              'PROTO_ARRAY',
              'PROTO_ENUM',
              'BOOLEAN_ARRAY',
              'PROTO_ENUM_ARRAY',
              'BYTES',
              'BYTES_ARRAY',
              'NON_SERIALIZABLE_OBJECT',
              'JSON_VALUE',
            ])
            .exactOptional()
            .openapi({ description: 'The data type of the parameter.' }),
          defaultValue:
            EnterpriseCrmFrontendsEventbusProtoParameterValueTypeSchema.exactOptional().openapi({
              description:
                'Default values for the defined keys. Each value can either be string, int, double or any proto message or a serialized object.',
            }),
          inOutType: z
            .enum(['IN_OUT_TYPE_UNSPECIFIED', 'IN', 'OUT', 'IN_OUT'])
            .exactOptional()
            .openapi({ description: 'Specifies the input/output type for the parameter.' }),
          isTransient: z
            .boolean()
            .exactOptional()
            .openapi({ description: 'Whether this parameter is a transient parameter.' }),
          jsonSchema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'This schema will be used to validate runtime JSON-typed values of this parameter.',
            }),
          key: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Key is used to retrieve the corresponding parameter value. This should be unique for a given fired event. These parameters must be predefined in the workflow definition.',
            }),
          name: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The name (without prefix) to be displayed in the UI for this parameter. E.g. if the key is "foo.bar.myName", then the name would be "myName".',
            }),
          producedBy: EnterpriseCrmEventbusProtoNodeIdentifierSchema.exactOptional().openapi({
            description:
              'The identifier of the node (TaskConfig/TriggerConfig) this parameter was produced by, if it is a transient param or a copy of an input param.',
          }),
          producer: z.string().exactOptional(),
          protoDefName: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The name of the protobuf type if the parameter has a protobuf data type.',
            }),
          protoDefPath: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'If the data type is of type proto or proto array, this field needs to be populated with the fully qualified proto name. This message, for example, would be "enterprise.crm.frontends.eventbus.proto.WorkflowParameterEntry".',
            }),
        })
        .openapi({ required: [] }),
    )
    .openapi('EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry')

const EnterpriseCrmFrontendsEventbusProtoWorkflowParametersSchema = z
  .object({
    parameters: z
      .array(EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntrySchema)
      .exactOptional()
      .openapi({
        description:
          'Parameters are a part of Event and can be used to communiticate between different tasks that are part of the same workflow execution.',
      }),
  })
  .openapi({
    description:
      "LINT.IfChange This is the frontend version of WorkflowParameters. It's exactly like the backend version except that instead of flattening protobuf parameters and treating every field and subfield of a protobuf parameter as a separate parameter, the fields/subfields of a protobuf parameter will be nested as \"children\" (see 'children' field below) parameters of the parent parameter. Please refer to enterprise/crm/eventbus/proto/workflow_parameters.proto for more information about WorkflowParameters.",
    required: [],
  })
  .openapi('EnterpriseCrmFrontendsEventbusProtoWorkflowParameters')

const GoogleCloudConnectorsV1SecretSchema = z
  .object({
    secretVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the secret version in the format, format as: `projects/*/secrets/*/versions/*`.',
      }),
  })
  .openapi({
    description: 'Secret provides a reference to entries in Secret Manager.',
    required: [],
  })
  .openapi('GoogleCloudConnectorsV1Secret')

const GoogleCloudConnectorsV1ConfigVariableSchema = z
  .object({
    boolValue: z.boolean().exactOptional().openapi({ description: 'Value is a bool.' }),
    intValue: z.string().exactOptional().openapi({ description: 'Value is an integer' }),
    key: z.string().exactOptional().openapi({ description: 'Key of the config variable.' }),
    secretValue: GoogleCloudConnectorsV1SecretSchema.exactOptional().openapi({
      description: 'Value is a secret.',
    }),
    stringValue: z.string().exactOptional().openapi({ description: 'Value is a string.' }),
  })
  .openapi({
    description:
      'ConfigVariable represents a configuration variable present in a Connection. or AuthConfig.',
    required: [],
  })
  .openapi('GoogleCloudConnectorsV1ConfigVariable')

const GoogleCloudConnectorsV1AuthConfigOauth2AuthCodeFlowSchema = z
  .object({
    authCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Authorization code to be exchanged for access and refresh tokens.',
      }),
    clientId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Client ID for user-provided OAuth app.' }),
    clientSecret: GoogleCloudConnectorsV1SecretSchema.exactOptional().openapi({
      description: 'Client secret for user-provided OAuth app.',
    }),
    enablePkce: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to enable PKCE when the user performs the auth code flow.',
      }),
    pkceVerifier: z
      .string()
      .exactOptional()
      .openapi({ description: 'PKCE verifier to be used during the auth code exchange.' }),
    redirectUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Redirect URI to be provided during the auth code exchange.' }),
    scopes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Scopes the connection will request when the user performs the auth code flow.',
      }),
  })
  .openapi({
    description:
      'Parameters to support Oauth 2.0 Auth Code Grant Authentication. See https://www.rfc-editor.org/rfc/rfc6749#section-1.3.1 for more details.',
    required: [],
  })
  .openapi('GoogleCloudConnectorsV1AuthConfigOauth2AuthCodeFlow')

const GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentialsSchema = z
  .object({
    clientId: z.string().exactOptional().openapi({ description: 'The client identifier.' }),
    clientSecret: GoogleCloudConnectorsV1SecretSchema.exactOptional().openapi({
      description: 'Secret version reference containing the client secret.',
    }),
  })
  .openapi({
    description:
      'Parameters to support Oauth 2.0 Client Credentials Grant Authentication. See https://tools.ietf.org/html/rfc6749#section-1.3.4 for more details.',
    required: [],
  })
  .openapi('GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials')

const GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaimsSchema = z
  .object({
    audience: z.string().exactOptional().openapi({ description: 'Value for the "aud" claim.' }),
    issuer: z.string().exactOptional().openapi({ description: 'Value for the "iss" claim.' }),
    subject: z.string().exactOptional().openapi({ description: 'Value for the "sub" claim.' }),
  })
  .openapi({ description: 'JWT claims used for the jwt-bearer authorization grant.', required: [] })
  .openapi('GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims')

const GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerSchema = z
  .object({
    clientKey: GoogleCloudConnectorsV1SecretSchema.exactOptional().openapi({
      description:
        'Secret version reference containing a PKCS#8 PEM-encoded private key associated with the Client Certificate. This private key will be used to sign JWTs used for the jwt-bearer authorization grant. Specified in the form as: `projects/*/secrets/*/versions/*`.',
    }),
    jwtClaims:
      GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaimsSchema.exactOptional().openapi({
        description: 'JwtClaims providers fields to generate the token.',
      }),
  })
  .openapi({
    description:
      'Parameters to support JSON Web Token (JWT) Profile for Oauth 2.0 Authorization Grant based authentication. See https://tools.ietf.org/html/rfc7523 for more details.',
    required: [],
  })
  .openapi('GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer')

const GoogleCloudConnectorsV1AuthConfigSshPublicKeySchema = z
  .object({
    certType: z.string().exactOptional().openapi({ description: 'Format of SSH Client cert.' }),
    sshClientCert: GoogleCloudConnectorsV1SecretSchema.exactOptional().openapi({
      description: 'SSH Client Cert. It should contain both public and private key.',
    }),
    sshClientCertPass: GoogleCloudConnectorsV1SecretSchema.exactOptional().openapi({
      description: 'Password (passphrase) for ssh client certificate if it has one.',
    }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user account used to authenticate.' }),
  })
  .openapi({ description: 'Parameters to support Ssh public key Authentication.', required: [] })
  .openapi('GoogleCloudConnectorsV1AuthConfigSshPublicKey')

const GoogleCloudConnectorsV1AuthConfigUserPasswordSchema = z
  .object({
    password: GoogleCloudConnectorsV1SecretSchema.exactOptional().openapi({
      description: 'Secret version reference containing the password.',
    }),
    username: z.string().exactOptional().openapi({ description: 'Username.' }),
  })
  .openapi({
    description: 'Parameters to support Username and Password Authentication.',
    required: [],
  })
  .openapi('GoogleCloudConnectorsV1AuthConfigUserPassword')

const GoogleCloudConnectorsV1AuthConfigSchema = z
  .object({
    additionalVariables: z
      .array(GoogleCloudConnectorsV1ConfigVariableSchema)
      .exactOptional()
      .openapi({ description: 'List containing additional auth configs.' }),
    authType: z
      .enum([
        'AUTH_TYPE_UNSPECIFIED',
        'USER_PASSWORD',
        'OAUTH2_JWT_BEARER',
        'OAUTH2_CLIENT_CREDENTIALS',
        'SSH_PUBLIC_KEY',
        'OAUTH2_AUTH_CODE_FLOW',
      ])
      .exactOptional()
      .openapi({ description: 'The type of authentication configured.' }),
    oauth2AuthCodeFlow:
      GoogleCloudConnectorsV1AuthConfigOauth2AuthCodeFlowSchema.exactOptional().openapi({
        description: 'Oauth2AuthCodeFlow.',
      }),
    oauth2ClientCredentials:
      GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentialsSchema.exactOptional().openapi({
        description: 'Oauth2ClientCredentials.',
      }),
    oauth2JwtBearer: GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerSchema.exactOptional().openapi(
      { description: 'Oauth2JwtBearer.' },
    ),
    sshPublicKey: GoogleCloudConnectorsV1AuthConfigSshPublicKeySchema.exactOptional().openapi({
      description: 'SSH Public Key.',
    }),
    userPassword: GoogleCloudConnectorsV1AuthConfigUserPasswordSchema.exactOptional().openapi({
      description: 'UserPassword.',
    }),
  })
  .openapi({ description: 'AuthConfig defines details of a authentication type.', required: [] })
  .openapi('GoogleCloudConnectorsV1AuthConfig')

const GoogleCloudConnectorsV1DestinationSchema = z
  .object({
    host: z.string().exactOptional().openapi({ description: 'For publicly routable host.' }),
    port: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The port is the target port number that is accepted by the destination.',
      }),
    serviceAttachment: z
      .string()
      .exactOptional()
      .openapi({
        description: 'PSC service attachments. Format: projects/*/regions/*/serviceAttachments/*',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudConnectorsV1Destination')

const GoogleCloudConnectorsV1DestinationConfigSchema = z
  .object({
    destinations: z
      .array(GoogleCloudConnectorsV1DestinationSchema)
      .exactOptional()
      .openapi({ description: 'The destinations for the key.' }),
    key: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The key is the destination identifier that is supported by the Connector.',
      }),
  })
  .openapi({ description: 'Define the Connectors target endpoint.', required: [] })
  .openapi('GoogleCloudConnectorsV1DestinationConfig')

const GoogleCloudConnectorsV1LockConfigSchema = z
  .object({
    locked: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether or not the connection is locked.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'Describes why a connection is locked.' }),
  })
  .openapi({
    description:
      'Determines whether or no a connection is locked. If locked, a reason must be specified.',
    required: [],
  })
  .openapi('GoogleCloudConnectorsV1LockConfig')

const GoogleCloudConnectorsV1LogConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Enabled represents whether logging is enabled or not for a connection.',
      }),
  })
  .openapi({ description: 'Log configuration for the connection.', required: [] })
  .openapi('GoogleCloudConnectorsV1LogConfig')

const GoogleCloudConnectorsV1NodeConfigSchema = z
  .object({
    maxNodeCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum number of nodes in the runtime nodes.' }),
    minNodeCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Minimum number of nodes in the runtime nodes.' }),
  })
  .openapi({ description: 'Node configuration for the connection.', required: [] })
  .openapi('GoogleCloudConnectorsV1NodeConfig')

const GoogleCloudConnectorsV1SslConfigSchema = z
  .object({
    additionalVariables: z
      .array(GoogleCloudConnectorsV1ConfigVariableSchema)
      .exactOptional()
      .openapi({ description: 'Additional SSL related field values' }),
    clientCertType: z
      .enum(['CERT_TYPE_UNSPECIFIED', 'PEM'])
      .exactOptional()
      .openapi({ description: 'Type of Client Cert (PEM/JKS/.. etc.)' }),
    clientCertificate: GoogleCloudConnectorsV1SecretSchema.exactOptional().openapi({
      description: 'Client Certificate',
    }),
    clientPrivateKey: GoogleCloudConnectorsV1SecretSchema.exactOptional().openapi({
      description: 'Client Private Key',
    }),
    clientPrivateKeyPass: GoogleCloudConnectorsV1SecretSchema.exactOptional().openapi({
      description: 'Secret containing the passphrase protecting the Client Private Key',
    }),
    privateServerCertificate: GoogleCloudConnectorsV1SecretSchema.exactOptional().openapi({
      description: 'Private Server Certificate. Needs to be specified if trust model is `PRIVATE`.',
    }),
    serverCertType: z
      .enum(['CERT_TYPE_UNSPECIFIED', 'PEM'])
      .exactOptional()
      .openapi({ description: 'Type of Server Cert (PEM/JKS/.. etc.)' }),
    trustModel: z
      .enum(['PUBLIC', 'PRIVATE', 'INSECURE'])
      .exactOptional()
      .openapi({ description: 'Trust Model of the SSL connection' }),
    type: z
      .enum(['SSL_TYPE_UNSPECIFIED', 'TLS', 'MTLS'])
      .exactOptional()
      .openapi({ description: 'Controls the ssl type for the given connector version.' }),
    useSsl: z.boolean().exactOptional().openapi({ description: 'Bool for enabling SSL' }),
  })
  .openapi({ description: 'SSL Configuration of a connection', required: [] })
  .openapi('GoogleCloudConnectorsV1SslConfig')

const GoogleCloudConnectorsV1ConnectionStatusSchema = z
  .object({
    description: z.string().exactOptional().openapi({ description: 'Description.' }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'CREATING',
        'ACTIVE',
        'INACTIVE',
        'DELETING',
        'UPDATING',
        'ERROR',
        'AUTHORIZATION_REQUIRED',
      ])
      .exactOptional()
      .openapi({ description: 'State.' }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'Status provides detailed information for the state.' }),
  })
  .openapi({ description: 'ConnectionStatus indicates the state of the connection.', required: [] })
  .openapi('GoogleCloudConnectorsV1ConnectionStatus')

const GoogleCloudConnectorsV1ConnectionSchema = z
  .object({
    authConfig: GoogleCloudConnectorsV1AuthConfigSchema.exactOptional().openapi({
      description:
        "Optional. Configuration for establishing the connection's authentication with an external system.",
    }),
    configVariables: z
      .array(GoogleCloudConnectorsV1ConfigVariableSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. Configuration for configuring the connection with an external system.',
      }),
    connectorVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Connector version on which the connection is created. The format is: projects/*/locations/*/providers/*/connectors/*/versions/* Only global location is supported for ConnectorVersion resource.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Created time.', readOnly: true }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Description of the resource.' }),
    destinationConfigs: z
      .array(GoogleCloudConnectorsV1DestinationConfigSchema)
      .exactOptional()
      .openapi({
        description:
          "Optional. Configuration of the Connector's destination. Only accepted for Connectors that accepts user defined destination(s).",
      }),
    envoyImageLocation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. GCR location where the envoy image is stored. formatted like: gcr.io/{bucketName}/{imageName}',
        readOnly: true,
      }),
    imageLocation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. GCR location where the runtime image is stored. formatted like: gcr.io/{bucketName}/{imageName}',
        readOnly: true,
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources',
      }),
    lockConfig: GoogleCloudConnectorsV1LockConfigSchema.exactOptional().openapi({
      description:
        'Optional. Configuration that indicates whether or not the Connection can be edited.',
    }),
    logConfig: GoogleCloudConnectorsV1LogConfigSchema.exactOptional().openapi({
      description: 'Optional. Log configuration for the connection.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource name of the Connection. Format: projects/{project}/locations/{location}/connections/{connection}',
        readOnly: true,
      }),
    nodeConfig: GoogleCloudConnectorsV1NodeConfigSchema.exactOptional().openapi({
      description: 'Optional. Node configuration for the connection.',
    }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. Service account needed for runtime plane to access GCP resources.',
      }),
    serviceDirectory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The name of the Service Directory service name. Used for Private Harpoon to resolve the ILB address. e.g. "projects/cloud-connectors-e2e-testing/locations/us-central1/namespaces/istio-system/services/istio-ingressgateway-connectors"',
        readOnly: true,
      }),
    sslConfig: GoogleCloudConnectorsV1SslConfigSchema.exactOptional().openapi({
      description: 'Optional. Ssl config of a connection',
    }),
    status: GoogleCloudConnectorsV1ConnectionStatusSchema.exactOptional().openapi({
      description: 'Output only. Current status of the connection.',
      readOnly: true,
    }),
    suspended: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Optional. Suspended indicates if a user has suspended a connection or not.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Updated time.', readOnly: true }),
  })
  .openapi({ description: 'Connection represents an instance of connector.', required: [] })
  .openapi('GoogleCloudConnectorsV1Connection')

const GoogleCloudIntegrationsV1alphaAccessTokenSchema = z
  .object({
    accessToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The access token encapsulating the security identity of a process or thread.',
      }),
    accessTokenExpireTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The approximate time until the access token retrieved is valid.',
      }),
    refreshToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the access token will expire, use the refresh token to obtain another access token.',
      }),
    refreshTokenExpireTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The approximate time until the refresh token retrieved is valid.' }),
    tokenType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Only support "bearer" token in v1 as bearer token is the predominant type used with OAuth 2.0.',
      }),
  })
  .openapi({
    description:
      'The access token represents the authorization of a specific application to access specific parts of a user’s data.',
    required: [],
  })
  .openapi('GoogleCloudIntegrationsV1alphaAccessToken')

const GoogleCloudIntegrationsV1alphaAuthTokenSchema = z
  .object({
    token: z.string().exactOptional().openapi({ description: 'The token for the auth type.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Authentication type, e.g. "Basic", "Bearer", etc.' }),
  })
  .openapi({
    description:
      'The credentials to authenticate a user agent with a server that is put in HTTP Authorization request header.',
    required: [],
  })
  .openapi('GoogleCloudIntegrationsV1alphaAuthToken')

const GoogleCloudIntegrationsV1alphaJwtSchema = z
  .object({
    jwt: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token calculated by the header, payload and signature.' }),
    jwtHeader: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifies which algorithm is used to generate the signature.' }),
    jwtPayload: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains a set of claims. The JWT specification defines seven Registered Claim Names which are the standard fields commonly included in tokens. Custom claims are usually also included, depending on the purpose of the token.',
      }),
    secret: z
      .string()
      .exactOptional()
      .openapi({ description: "User's pre-shared secret to sign the token." }),
  })
  .openapi({
    description:
      'Represents JSON web token(JWT), which is a compact, URL-safe means of representing claims to be transferred between two parties, enabling the claims to be digitally signed or integrity protected.',
    required: [],
  })
  .openapi('GoogleCloudIntegrationsV1alphaJwt')

const GoogleCloudIntegrationsV1alphaParameterMapFieldSchema = z
  .object({
    literalValue: GoogleCloudIntegrationsV1alphaValueTypeSchema.exactOptional().openapi({
      description: 'Passing a literal value.',
    }),
    referenceKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'Referencing one of the Integration variables.' }),
  })
  .openapi({ description: 'Field represents either the key or value in an entry.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaParameterMapField')

const GoogleCloudIntegrationsV1alphaParameterMapEntrySchema = z
  .object({
    key: GoogleCloudIntegrationsV1alphaParameterMapFieldSchema.exactOptional().openapi({
      description: 'Key of the map entry.',
    }),
    value: GoogleCloudIntegrationsV1alphaParameterMapFieldSchema.exactOptional().openapi({
      description: 'Value of the map entry.',
    }),
  })
  .openapi({ description: 'Entry is a pair of key and value.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaParameterMapEntry')

const GoogleCloudIntegrationsV1alphaParameterMapSchema = z
  .object({
    entries: z
      .array(GoogleCloudIntegrationsV1alphaParameterMapEntrySchema)
      .exactOptional()
      .openapi({ description: 'A list of parameter map entries.' }),
    keyType: z
      .enum([
        'INTEGRATION_PARAMETER_DATA_TYPE_UNSPECIFIED',
        'STRING_VALUE',
        'INT_VALUE',
        'DOUBLE_VALUE',
        'BOOLEAN_VALUE',
        'STRING_ARRAY',
        'INT_ARRAY',
        'DOUBLE_ARRAY',
        'BOOLEAN_ARRAY',
        'JSON_VALUE',
        'PROTO_VALUE',
        'PROTO_ARRAY',
      ])
      .exactOptional()
      .openapi({
        description:
          'Option to specify key type for all entries of the map. If provided then field types for all entries must conform to this.',
      }),
    valueType: z
      .enum([
        'INTEGRATION_PARAMETER_DATA_TYPE_UNSPECIFIED',
        'STRING_VALUE',
        'INT_VALUE',
        'DOUBLE_VALUE',
        'BOOLEAN_VALUE',
        'STRING_ARRAY',
        'INT_ARRAY',
        'DOUBLE_ARRAY',
        'BOOLEAN_ARRAY',
        'JSON_VALUE',
        'PROTO_VALUE',
        'PROTO_ARRAY',
      ])
      .exactOptional()
      .openapi({
        description:
          'Option to specify value type for all entries of the map. If provided then field types for all entries must conform to this.',
      }),
  })
  .openapi({
    description:
      'A generic multi-map that holds key value pairs. They keys and values can be of any type, unless specified.',
    required: [],
  })
  .openapi('GoogleCloudIntegrationsV1alphaParameterMap')

const GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeSchema = z
  .object({
    accessToken: GoogleCloudIntegrationsV1alphaAccessTokenSchema.exactOptional().openapi({
      description: 'The access token received from the token endpoint.',
    }),
    applyReauthPolicy: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the user has opted in Google Reauth Policy. If opted in, the refresh token will be valid for 20 hours, after which time users must re-authenticate in order to obtain a new one.',
      }),
    authCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Auth Code that is used to initially retrieve the access token.',
      }),
    authEndpoint: z
      .string()
      .exactOptional()
      .openapi({ description: 'The auth url endpoint to send the auth code request to.' }),
    authParams: GoogleCloudIntegrationsV1alphaParameterMapSchema.exactOptional().openapi({
      description: 'The auth parameters sent along with the auth code request.',
    }),
    clientId: z.string().exactOptional().openapi({ description: "The client's id." }),
    clientSecret: z.string().exactOptional().openapi({ description: "The client's secret." }),
    requestType: z
      .enum(['REQUEST_TYPE_UNSPECIFIED', 'REQUEST_BODY', 'QUERY_PARAMETERS', 'ENCODED_HEADER'])
      .exactOptional()
      .openapi({ description: 'Represent how to pass parameters to fetch access token' }),
    scope: z
      .string()
      .exactOptional()
      .openapi({ description: 'A space-delimited list of requested scope permissions.' }),
    tokenEndpoint: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token url endpoint to send the token request to.' }),
    tokenParams: GoogleCloudIntegrationsV1alphaParameterMapSchema.exactOptional().openapi({
      description: 'The token parameters sent along with the token request.',
    }),
  })
  .openapi({
    description:
      'The OAuth Type where the client sends request with the client id and requested scopes to auth endpoint. User sees a consent screen and auth code is received at specified redirect url afterwards. The auth code is then combined with the client id and secret and sent to the token endpoint in exchange for the access and refresh token. The refresh token can be used to fetch new access tokens.',
    required: [],
  })
  .openapi('GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode')

const GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsSchema = z
  .object({
    accessToken: GoogleCloudIntegrationsV1alphaAccessTokenSchema.exactOptional().openapi({
      description: 'Access token fetched from the authorization server.',
    }),
    clientId: z.string().exactOptional().openapi({ description: "The client's ID." }),
    clientSecret: z.string().exactOptional().openapi({ description: "The client's secret." }),
    requestType: z
      .enum(['REQUEST_TYPE_UNSPECIFIED', 'REQUEST_BODY', 'QUERY_PARAMETERS', 'ENCODED_HEADER'])
      .exactOptional()
      .openapi({ description: 'Represent how to pass parameters to fetch access token' }),
    scope: z
      .string()
      .exactOptional()
      .openapi({ description: 'A space-delimited list of requested scope permissions.' }),
    tokenEndpoint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token endpoint is used by the client to obtain an access token by presenting its authorization grant or refresh token.',
      }),
    tokenParams: GoogleCloudIntegrationsV1alphaParameterMapSchema.exactOptional().openapi({
      description: 'Token parameters for the auth request.',
    }),
  })
  .openapi({
    description:
      "For client credentials grant, the client sends a POST request with grant_type as 'client_credentials' to the authorization server. The authorization server will respond with a JSON object containing the access token.",
    required: [],
  })
  .openapi('GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials')

const GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsSchema = z
  .object({
    accessToken: GoogleCloudIntegrationsV1alphaAccessTokenSchema.exactOptional().openapi({
      description: 'Access token fetched from the authorization server.',
    }),
    clientId: z.string().exactOptional().openapi({ description: "The client's ID." }),
    clientSecret: z.string().exactOptional().openapi({ description: "The client's secret." }),
    password: z.string().exactOptional().openapi({ description: "The user's password." }),
    requestType: z
      .enum(['REQUEST_TYPE_UNSPECIFIED', 'REQUEST_BODY', 'QUERY_PARAMETERS', 'ENCODED_HEADER'])
      .exactOptional()
      .openapi({ description: 'Represent how to pass parameters to fetch access token' }),
    scope: z
      .string()
      .exactOptional()
      .openapi({ description: 'A space-delimited list of requested scope permissions.' }),
    tokenEndpoint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token endpoint is used by the client to obtain an access token by presenting its authorization grant or refresh token.',
      }),
    tokenParams: GoogleCloudIntegrationsV1alphaParameterMapSchema.exactOptional().openapi({
      description: 'Token parameters for the auth request.',
    }),
    username: z.string().exactOptional().openapi({ description: "The user's username." }),
  })
  .openapi({
    description:
      'For resource owner credentials grant, the client will ask the user for their authorization credentials (ususally a username and password) and send a POST request to the authorization server. The authorization server will respond with a JSON object containing the access token.',
    required: [],
  })
  .openapi('GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials')

const GoogleCloudIntegrationsV1alphaOidcTokenSchema = z
  .object({
    audience: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Audience to be used when generating OIDC token. The audience claim identifies the recipients that the JWT is intended for.',
      }),
    serviceAccountEmail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The service account email to be used as the identity for the token.',
      }),
    token: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID token obtained for the service account' }),
    tokenExpireTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The approximate time until the token retrieved is valid.' }),
  })
  .openapi({ description: 'OIDC Token', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaOidcToken')

const GoogleCloudIntegrationsV1alphaServiceAccountCredentialsSchema = z
  .object({
    scope: z
      .string()
      .exactOptional()
      .openapi({ description: 'A space-delimited list of requested scope permissions.' }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the service account that has the permission to make the request.',
      }),
  })
  .openapi({
    description:
      'Represents the service account which can be used to generate access token for authenticating the service call.',
    required: [],
  })
  .openapi('GoogleCloudIntegrationsV1alphaServiceAccountCredentials')

const GoogleCloudIntegrationsV1alphaUsernameAndPasswordSchema = z
  .object({
    password: z.string().exactOptional().openapi({ description: 'Password to be used' }),
    username: z.string().exactOptional().openapi({ description: 'Username to be used' }),
  })
  .openapi({ description: 'Username and password pair.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaUsernameAndPassword')

const GoogleCloudIntegrationsV1alphaCredentialSchema = z
  .object({
    authToken: GoogleCloudIntegrationsV1alphaAuthTokenSchema.exactOptional().openapi({
      description: 'Auth token credential',
    }),
    credentialType: z
      .enum([
        'CREDENTIAL_TYPE_UNSPECIFIED',
        'USERNAME_AND_PASSWORD',
        'API_KEY',
        'OAUTH2_AUTHORIZATION_CODE',
        'OAUTH2_IMPLICIT',
        'OAUTH2_CLIENT_CREDENTIALS',
        'OAUTH2_RESOURCE_OWNER_CREDENTIALS',
        'JWT',
        'AUTH_TOKEN',
        'SERVICE_ACCOUNT',
        'CLIENT_CERTIFICATE_ONLY',
        'OIDC_TOKEN',
      ])
      .exactOptional()
      .openapi({ description: 'Credential type associated with auth config.' }),
    jwt: GoogleCloudIntegrationsV1alphaJwtSchema.exactOptional().openapi({
      description: 'JWT credential',
    }),
    oauth2AuthorizationCode:
      GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeSchema.exactOptional().openapi({
        description:
          'The api_key and oauth2_implicit are not covered in v1 and will be picked up once v1 is implemented. ApiKey api_key = 3; OAuth2 authorization code credential',
      }),
    oauth2ClientCredentials:
      GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsSchema.exactOptional().openapi({
        description: 'OAuth2Implicit oauth2_implicit = 5; OAuth2 client credentials',
      }),
    oauth2ResourceOwnerCredentials:
      GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsSchema.exactOptional().openapi({
        description: 'OAuth2 resource owner credentials',
      }),
    oidcToken: GoogleCloudIntegrationsV1alphaOidcTokenSchema.exactOptional().openapi({
      description: 'Google OIDC ID Token',
    }),
    serviceAccountCredentials:
      GoogleCloudIntegrationsV1alphaServiceAccountCredentialsSchema.exactOptional().openapi({
        description: 'Service account credential',
      }),
    usernameAndPassword:
      GoogleCloudIntegrationsV1alphaUsernameAndPasswordSchema.exactOptional().openapi({
        description: 'Username and password credential',
      }),
  })
  .openapi({ description: 'Defines parameters for a single, canonical credential.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaCredential')

const GoogleCloudIntegrationsV1alphaAuthConfigSchema = z
  .object({
    certificateId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Certificate id for client certificate' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp when the auth config is created.',
        readOnly: true,
      }),
    creatorEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The creator's email address. Generated based on the End User Credentials/LOAS role of the user making the call.",
      }),
    credentialType: z
      .enum([
        'CREDENTIAL_TYPE_UNSPECIFIED',
        'USERNAME_AND_PASSWORD',
        'API_KEY',
        'OAUTH2_AUTHORIZATION_CODE',
        'OAUTH2_IMPLICIT',
        'OAUTH2_CLIENT_CREDENTIALS',
        'OAUTH2_RESOURCE_OWNER_CREDENTIALS',
        'JWT',
        'AUTH_TOKEN',
        'SERVICE_ACCOUNT',
        'CLIENT_CERTIFICATE_ONLY',
        'OIDC_TOKEN',
      ])
      .exactOptional()
      .openapi({ description: 'Credential type of the encrypted credential.' }),
    decryptedCredential: GoogleCloudIntegrationsV1alphaCredentialSchema.exactOptional().openapi({
      description: 'Raw auth credentials.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the auth config.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the auth config.' }),
    encryptedCredential: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Auth credential encrypted by Cloud KMS. Can be decrypted as Credential with proper KMS key.',
      }),
    expiryNotificationDuration: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'User can define the time to receive notification after which the auth config becomes invalid. Support up to 30 days. Support granularity in hours.',
      }),
    lastModifierEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The last modifier's email address. Generated based on the End User Credentials/LOAS role of the user making the call.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of the SFDC instance projects/{project}/locations/{location}/authConfigs/{authConfig}.',
      }),
    overrideValidTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User provided expiry time to override. For the example of Salesforce, username/password credentials can be valid for 6 months depending on the instance settings.',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reason / details of the current status.' }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'VALID',
        'INVALID',
        'SOFT_DELETED',
        'EXPIRED',
        'UNAUTHORIZED',
        'UNSUPPORTED',
      ])
      .exactOptional()
      .openapi({ description: 'The status of the auth config.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp when the auth config is modified.',
        readOnly: true,
      }),
    validTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The time until the auth config is valid. Empty or max value is considered the auth config won't expire.",
      }),
    visibility: z
      .enum(['AUTH_CONFIG_VISIBILITY_UNSPECIFIED', 'PRIVATE', 'CLIENT_VISIBLE'])
      .exactOptional()
      .openapi({ description: 'The visibility of the auth config.' }),
  })
  .openapi({
    description: 'The AuthConfig resource use to hold channels and connection config data.',
    required: [],
  })
  .openapi('GoogleCloudIntegrationsV1alphaAuthConfig')

const GoogleCloudIntegrationsV1alphaCancelExecutionRequestSchema = z
  .object({})
  .openapi({ description: 'Request for cancelling an execution.' })
  .openapi('GoogleCloudIntegrationsV1alphaCancelExecutionRequest')

const GoogleCloudIntegrationsV1alphaCancelExecutionResponseSchema = z
  .object({
    isCanceled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if cancellation performed successfully' }),
  })
  .openapi({ description: 'Response for cancelling an execution.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaCancelExecutionResponse')

const GoogleCloudIntegrationsV1alphaClientCertificateSchema = z
  .object({
    encryptedPrivateKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE-----',
      }),
    passphrase: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "'passphrase' should be left unset if private key is not encrypted. Note that 'passphrase' is not the password for web server, but an extra layer of security to protected private key.",
      }),
    sslCertificate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE-----',
      }),
  })
  .openapi({ description: 'Contains client certificate information', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaClientCertificate')

const GoogleCloudIntegrationsV1alphaCertificateSchema = z
  .object({
    certificateStatus: z
      .enum(['STATE_UNSPECIFIED', 'ACTIVE', 'EXPIRED'])
      .exactOptional()
      .openapi({ description: 'Status of the certificate' }),
    credentialId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. Credential id that will be used to register with trawler INTERNAL_ONLY',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the certificate' }),
    displayName: z.string().exactOptional().openapi({ description: 'Name of the certificate' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Auto generated primary key', readOnly: true }),
    rawCertificate: GoogleCloudIntegrationsV1alphaClientCertificateSchema.exactOptional().openapi({
      description: 'Input only. Raw client certificate which would be registered with trawler',
    }),
    requestorId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Immutable. Requestor ID to be used to register certificate with trawler',
      }),
    validEndTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp after which certificate will expire',
        readOnly: true,
      }),
    validStartTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp after which certificate will be valid',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The certificate definition', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaCertificate')

const GoogleCloudIntegrationsV1alphaCloudKmsConfigSchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A Cloud KMS key is a named object containing one or more key versions, along with metadata for the key. A key exists on exactly one key ring tied to a specific location.',
      }),
    keyVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. Each version of a key contains key material used for encryption or signing. A key's version is represented by an integer, starting at 1. To decrypt data or verify a signature, you must use the same key version that was used to encrypt or sign the data.",
      }),
    kmsLocation: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Location name of the key ring, e.g. "us-west1".' }),
    kmsProjectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The gcp project id of the project where the kms key stored. If empty, the kms key is stored at the same project as customer's project and ecrypted with CMEK, otherwise, the kms key is stored in the tenant project and encrypted with GMEK",
      }),
    kmsRing: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. A key ring organizes keys in a specific Google Cloud location and allows you to manage access control on groups of keys. A key ring's name does not need to be unique across a Google Cloud project, but must be unique within a given location.",
      }),
  })
  .openapi({
    description: "Configuration information for Client's Cloud KMS information",
    required: [],
  })
  .openapi('GoogleCloudIntegrationsV1alphaCloudKmsConfig')

const GoogleCloudIntegrationsV1alphaCloudLoggingConfigSchema = z
  .object({
    bucket: z
      .string()
      .exactOptional()
      .openapi({ description: 'Cloud bucket name for the project.' }),
    enableCloudLogging: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'This field determines whether the logs should be sent to cloud logging api',
      }),
  })
  .openapi({ description: 'Config info for Cloud Logging', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaCloudLoggingConfig')

const GoogleCloudIntegrationsV1alphaClientConfigSchema = z
  .object({
    billingType: z
      .enum([
        'BILLING_TYPE_UNSPECIFIED',
        'BILLING_TYPE_APIGEE_TRIALS',
        'BILLING_TYPE_APIGEE_SUBSCRIPTION',
        'BILLING_TYPE_PAYG',
      ])
      .exactOptional()
      .openapi({ description: 'Indicates the billing type of the client' }),
    clientState: z
      .enum(['CLIENT_STATE_UNSPECIFIED', 'CLIENT_STATE_ACTIVE', 'CLIENT_STATE_DISABLED'])
      .exactOptional()
      .openapi({ description: 'Indicates the activity state the client' }),
    cloudKmsConfig: GoogleCloudIntegrationsV1alphaCloudKmsConfigSchema.exactOptional().openapi({
      description: 'Cloud KMS config for Auth Module to encrypt/decrypt credentials.',
    }),
    cloudLoggingConfig:
      GoogleCloudIntegrationsV1alphaCloudLoggingConfigSchema.exactOptional().openapi({
        description: 'Determines the cloud logging configuration for the project',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp when the client was first created.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of what the client is used for' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Globally unique ID (project_id + region)' }),
    p4ServiceAccount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The P4SA account associated with this client' }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The GCP project id of the client associated with' }),
    region: z
      .string()
      .exactOptional()
      .openapi({ description: 'The region the client is linked to.' }),
  })
  .openapi({ description: 'The configuration information for the Client', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaClientConfig')

const GoogleCloudIntegrationsV1alphaCloudSchedulerConfigSchema = z
  .object({
    cronTab: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The cron tab of cloud scheduler trigger.' }),
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. When the job was deleted from Pantheon UI, error_message will be populated when Get/List integrations',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The location where associated cloud scheduler job will be created',
      }),
    serviceAccountEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Service account used by Cloud Scheduler to trigger the integration at scheduled time',
      }),
  })
  .openapi({ description: 'Cloud Scheduler Trigger configuration', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaCloudSchedulerConfig')

const GoogleCloudIntegrationsV1alphaConnectionSchemaMetadataSchema = z
  .object({
    actions: z.array(z.string()).exactOptional().openapi({ description: 'List of actions.' }),
    entities: z.array(z.string()).exactOptional().openapi({ description: 'List of entity names.' }),
  })
  .openapi({ description: 'Metadata of runtime connection schema.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaConnectionSchemaMetadata')

const GoogleCloudIntegrationsV1alphaCoordinateSchema = z
  .object({
    x: z.int32().exactOptional().openapi({ description: 'Required. X axis of the coordinate' }),
    y: z.int32().exactOptional().openapi({ description: 'Required. Y axis of the coordinate' }),
  })
  .openapi({ description: 'Configuration detail of coordinate, it used for UI', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaCoordinate')

const GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequestSchema = z
  .object({
    appsScriptProject: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the Apps Script project to be created.' }),
    authConfigId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The auth config id necessary to fetch the necessary credentials to create the project for external clients',
      }),
  })
  .openapi({ description: 'Request for CreateAppsScriptProject rpc call.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest')

const GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectResponseSchema = z
  .object({
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The created AppsScriptProject ID.' }),
  })
  .openapi({ description: 'Response for CreateAppsScriptProject rpc call.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectResponse')

const GoogleCloudIntegrationsV1alphaCreateCloudFunctionRequestSchema = z
  .object({
    functionName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The function name of CF to be created' }),
    functionRegion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The function region of CF to be created' }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Indicates the id of the GCP project that the function will be created in.',
      }),
  })
  .openapi({ description: 'Request for Creating Cloud Function rpc call.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaCreateCloudFunctionRequest')

const GoogleCloudIntegrationsV1alphaCreateCloudFunctionResponseSchema = z
  .object({
    triggerUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The trigger url that will be returned' }),
  })
  .openapi({ description: 'Response for Creating Cloud Function rpc call.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaCreateCloudFunctionResponse')

const GoogleCloudIntegrationsV1alphaDeprovisionClientRequestSchema = z
  .object({})
  .openapi({ description: 'Request for the Deprovision rpc' })
  .openapi('GoogleCloudIntegrationsV1alphaDeprovisionClientRequest')

const GoogleCloudIntegrationsV1alphaDownloadExecutionResponseSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({ description: 'The content of downloaded execution.' }),
  })
  .openapi({ description: 'Response for downloading an execution.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaDownloadExecutionResponse')

const GoogleCloudIntegrationsV1alphaDownloadIntegrationVersionResponseSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({ description: 'String representation of the integration version.' }),
  })
  .openapi({ description: 'Response for DownloadIntegrationVersion.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaDownloadIntegrationVersionResponse')

const GoogleCloudIntegrationsV1alphaEnumerateConnectorPlatformRegionsResponseSchema = z
  .object({
    regions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'All regions where Connector Platform is provisioned.' }),
  })
  .openapi({
    description: 'Response containing all provisioned regions for Connector Platform.',
    required: [],
  })
  .openapi('GoogleCloudIntegrationsV1alphaEnumerateConnectorPlatformRegionsResponse')

const GoogleCloudIntegrationsV1alphaNextTaskSchema = z
  .object({
    condition: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Standard filter expression for this task to become an eligible next task.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User-provided description intended to give additional business context about the task.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-provided label that is attached to this edge in the UI.' }),
    taskConfigId: z.string().exactOptional().openapi({ description: 'ID of the next task.' }),
    taskId: z.string().exactOptional().openapi({ description: 'Task number of the next task.' }),
  })
  .openapi({
    description:
      'The task that is next in line to be executed, if the condition specified evaluated to true.',
    required: [],
  })
  .openapi('GoogleCloudIntegrationsV1alphaNextTask')

const GoogleCloudIntegrationsV1alphaErrorCatcherConfigSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. User-provided description intended to give more business context about the error catcher config.',
      }),
    errorCatcherId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. An error catcher id is string representation for the error catcher config. Within a workflow, error_catcher_id uniquely identifies an error catcher config among all error catcher configs for the workflow',
      }),
    errorCatcherNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A number to uniquely identify each error catcher config within the workflow on UI.',
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. The user created label for a particular error catcher. Optional.',
      }),
    position: GoogleCloudIntegrationsV1alphaCoordinateSchema.exactOptional().openapi({
      description:
        'Optional. Informs the front-end application where to draw this error catcher config on the UI.',
    }),
    startErrorTasks: z
      .array(GoogleCloudIntegrationsV1alphaNextTaskSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. The set of start tasks that are to be executed for the error catch flow',
      }),
  })
  .openapi({ description: 'Configuration detail of a error catch task', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaErrorCatcherConfig')

const GoogleCloudIntegrationsV1alphaEventParameterSchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Key is used to retrieve the corresponding parameter value. This should be unique for a given fired event. These parameters must be predefined in the integration definition.',
      }),
    value: GoogleCloudIntegrationsV1alphaValueTypeSchema.exactOptional().openapi({
      description:
        'Values for the defined keys. Each value can either be string, int, double or any proto message.',
    }),
  })
  .openapi({
    description:
      'This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus.',
    required: [],
  })
  .openapi('GoogleCloudIntegrationsV1alphaEventParameter')

const GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequestSchema = z
  .object({
    doNotPropagateError: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Flag to determine how to should propagate errors. If this flag is set to be true, it will not throw an exception. Instead, it will return a {@link ExecuteIntegrationsResponse} with an execution id and error messages as PostWithTriggerIdExecutionException in {@link EventParameters}. The flag is set to be false by default.',
      }),
    executionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The id of the ON_HOLD execution to be resumed.' }),
    inputParameters: z
      .record(z.string(), GoogleCloudIntegrationsV1alphaValueTypeSchema)
      .exactOptional()
      .openapi({ description: 'Optional. Input parameters used by integration execution.' }),
    parameterEntries: z
      .array(EnterpriseCrmFrontendsEventbusProtoParameterEntrySchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. Parameters are a part of Event and can be used to communicate between different tasks that are part of the same integration execution.',
      }),
    parameters: EnterpriseCrmFrontendsEventbusProtoEventParametersSchema.exactOptional().openapi({
      description: 'Optional. Passed in as parameters to each integration execution. Redacted',
    }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. This is used to de-dup incoming request: if the duplicate request was detected, the response from the previous execution is returned.',
      }),
    triggerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Matched against all {@link TriggerConfig}s across all integrations. i.e. TriggerConfig.trigger_id.equals(trigger_id). The trigger_id is in the format of `api_trigger/TRIGGER_NAME`.',
      }),
  })
  .openapi({ description: 'The request for executing an integration.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest')

const GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponseSchema = z
  .object({
    eventParameters:
      EnterpriseCrmFrontendsEventbusProtoEventParametersSchema.exactOptional().openapi({
        description: 'Details for the integration that were executed.',
      }),
    executionFailed: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Is true if any execution in the integration failed. False otherwise.',
      }),
    executionId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id of the execution corresponding to this run of integration.',
      }),
    outputParameters: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'OUTPUT parameters in format of Map. Where Key is the name of the parameter. Note: Name of the system generated parameters are wrapped by backtick(`) to distinguish them from the user defined parameters.',
      }),
    parameterEntries: z
      .array(EnterpriseCrmFrontendsEventbusProtoParameterEntrySchema)
      .exactOptional()
      .openapi({
        description:
          'Parameters are a part of Event and can be used to communicate between different tasks that are part of the same integration execution.',
      }),
  })
  .openapi({ description: 'The response for executing an integration.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse')

const GoogleCloudIntegrationsV1alphaExecutionSchema: z.ZodType<GoogleCloudIntegrationsV1alphaExecutionType> =
  z
    .lazy(() =>
      z
        .object({
          createTime: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Output only. Created time of the execution.',
              readOnly: true,
            }),
          directSubExecutions: z
            .array(GoogleCloudIntegrationsV1alphaExecutionSchema)
            .exactOptional()
            .openapi({ description: 'Direct sub executions of the following Execution.' }),
          eventExecutionDetails:
            EnterpriseCrmEventbusProtoEventExecutionDetailsSchema.exactOptional().openapi({
              description: 'The execution info about this event.',
            }),
          executionDetails:
            GoogleCloudIntegrationsV1alphaExecutionDetailsSchema.exactOptional().openapi({
              description: 'Detailed info of this execution.',
            }),
          executionMethod: z
            .enum(['EXECUTION_METHOD_UNSPECIFIED', 'POST', 'POST_TO_QUEUE', 'SCHEDULE'])
            .exactOptional()
            .openapi({ description: 'The ways user posts this event.' }),
          name: z.string().exactOptional().openapi({ description: 'Auto-generated primary key.' }),
          requestParameters: z
            .record(z.string(), GoogleCloudIntegrationsV1alphaValueTypeSchema)
            .exactOptional()
            .openapi({ description: 'Event parameters come in as part of the request.' }),
          requestParams: z
            .array(EnterpriseCrmFrontendsEventbusProtoParameterEntrySchema)
            .exactOptional()
            .openapi({ description: 'Event parameters come in as part of the request.' }),
          responseParameters: z
            .record(z.string(), GoogleCloudIntegrationsV1alphaValueTypeSchema)
            .exactOptional()
            .openapi({ description: 'Event parameters returned as part of the response.' }),
          responseParams: z
            .array(EnterpriseCrmFrontendsEventbusProtoParameterEntrySchema)
            .exactOptional()
            .openapi({ description: 'Event parameters come out as part of the response.' }),
          triggerId: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The trigger id of the integration trigger config. If both trigger_id and client_id is present, the integration is executed from the start tasks provided by the matching trigger config otherwise it is executed from the default start tasks.',
            }),
          updateTime: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Output only. Last modified time of the execution.',
              readOnly: true,
            }),
        })
        .openapi({
          description:
            'The Execution resource contains detailed information of an individual integration execution.',
          required: [],
        }),
    )
    .openapi('GoogleCloudIntegrationsV1alphaExecution')

const GoogleCloudIntegrationsV1alphaFailurePolicySchema = z
  .object({
    intervalTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required if retry_strategy is FIXED_INTERVAL or LINEAR/EXPONENTIAL_BACKOFF/RESTART_INTEGRATION_WITH_BACKOFF. Defines the initial interval in seconds for backoff.',
      }),
    maxRetries: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required if retry_strategy is FIXED_INTERVAL or LINEAR/EXPONENTIAL_BACKOFF/RESTART_INTEGRATION_WITH_BACKOFF. Defines the number of times the task will be retried if failed.',
      }),
    retryStrategy: z
      .enum([
        'RETRY_STRATEGY_UNSPECIFIED',
        'IGNORE',
        'NONE',
        'FATAL',
        'FIXED_INTERVAL',
        'LINEAR_BACKOFF',
        'EXPONENTIAL_BACKOFF',
        'RESTART_INTEGRATION_WITH_BACKOFF',
      ])
      .exactOptional()
      .openapi({ description: 'Defines what happens to the task upon failure.' }),
  })
  .openapi({
    description:
      'Policy that defines the task retry logic and failure type. If no FailurePolicy is defined for a task, all its dependent tasks will not be executed (i.e, a `retry_strategy` of NONE will be applied).',
    required: [],
  })
  .openapi('GoogleCloudIntegrationsV1alphaFailurePolicy')

const GoogleCloudIntegrationsV1alphaGenerateTokenResponseSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The message that notifies the user if the request succeeded or not.',
      }),
  })
  .openapi({ description: 'Returns success or error message', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaGenerateTokenResponse')

const GoogleCloudIntegrationsV1alphaProjectPropertiesSchema = z
  .object({
    ipEnablementState: z
      .enum([
        'IP_ENABLEMENT_STATE_UNSPECIFIED',
        'IP_ENABLEMENT_STATE_STANDALONE',
        'IP_ENABLEMENT_STATE_APIGEE',
        'IP_ENABLEMENT_STATE_APIGEE_ENTITLED',
      ])
      .exactOptional()
      .openapi({
        description: 'An enum value of what the enablement state is for the given project',
      }),
    provisionedRegions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of provisioned regions on the current project' }),
  })
  .openapi({ description: 'Metadata information for the given project', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaProjectProperties')

const GoogleCloudIntegrationsV1alphaGetClientMetadataResponseSchema = z
  .object({
    properties: GoogleCloudIntegrationsV1alphaProjectPropertiesSchema.exactOptional().openapi({
      description: 'Required. Required: The client configuration that was requested',
    }),
  })
  .openapi({ description: 'Response for the GetClientMetadata rpc', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaGetClientMetadataResponse')

const GoogleCloudIntegrationsV1alphaGetClientResponseSchema = z
  .object({
    client: GoogleCloudIntegrationsV1alphaClientConfigSchema.exactOptional().openapi({
      description: 'Required. Required: The client configuration that was requested',
    }),
  })
  .openapi({ description: 'Response for the GetClient rpc', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaGetClientResponse')

const GoogleCloudIntegrationsV1alphaIntegrationSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Required. If any integration version is published.' }),
    description: z.string().exactOptional().openapi({ description: 'Optional.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The resource name of the integration.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Auto-generated.', readOnly: true }),
  })
  .openapi({ description: 'The integration definition.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaIntegration')

const GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValueSchema = z
  .object({
    absolute: z.string().exactOptional().openapi({ description: 'Absolute value threshold.' }),
    percentage: z.int32().exactOptional().openapi({ description: 'Percentage threshold.' }),
  })
  .openapi({
    description:
      'The threshold value of the metric, above or below which the alert should be triggered. See EventAlertConfig or TaskAlertConfig for the different alert metric types in each case. For the *RATE metrics, one or both of these fields may be set. Zero is the default value and can be left at that. For *PERCENTILE_DURATION metrics, one or both of these fields may be set, and also, the duration threshold value should be specified in the threshold_duration_ms member below. For *AVERAGE_DURATION metrics, these fields should not be set at all. A different member, threshold_duration_ms, must be set in the EventAlertConfig or the TaskAlertConfig.',
    required: [],
  })
  .openapi('GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValue')

const GoogleCloudIntegrationsV1alphaIntegrationAlertConfigSchema = z
  .object({
    aggregationPeriod: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The period over which the metric value should be aggregated and evaluated. Format is , where integer should be a positive integer and unit should be one of (s,m,h,d,w) meaning (second, minute, hour, day, week). For an EXPECTED_MIN threshold, this aggregation_period must be lesser than 24 hours.',
      }),
    alertThreshold: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'For how many contiguous aggregation periods should the expected min or max be violated for the alert to be fired.',
      }),
    disableAlert: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Set to false by default. When set to true, the metrics are not aggregated or pushed to Monarch for this integration alert.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the alert. This will be displayed in the alert subject. If set, this name should be unique within the scope of the integration.',
      }),
    durationThreshold: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Should be specified only for *AVERAGE_DURATION and *PERCENTILE_DURATION metrics. This member should be used to specify what duration value the metrics should exceed for the alert to trigger.',
      }),
    metricType: z
      .enum([
        'METRIC_TYPE_UNSPECIFIED',
        'EVENT_ERROR_RATE',
        'EVENT_WARNING_RATE',
        'TASK_ERROR_RATE',
        'TASK_WARNING_RATE',
        'TASK_RATE',
        'EVENT_RATE',
        'EVENT_AVERAGE_DURATION',
        'EVENT_PERCENTILE_DURATION',
        'TASK_AVERAGE_DURATION',
        'TASK_PERCENTILE_DURATION',
      ])
      .exactOptional()
      .openapi({ description: 'The type of metric.' }),
    onlyFinalAttempt: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'For either events or tasks, depending on the type of alert, count only final attempts, not retries.',
      }),
    thresholdType: z
      .enum(['THRESHOLD_TYPE_UNSPECIFIED', 'EXPECTED_MIN', 'EXPECTED_MAX'])
      .exactOptional()
      .openapi({
        description:
          'The threshold type, whether lower(expected_min) or upper(expected_max), for which this alert is being configured. If value falls below expected_min or exceeds expected_max, an alert will be fired.',
      }),
    thresholdValue:
      GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValueSchema.exactOptional().openapi(
        { description: 'The metric value, above or below which the alert should be triggered.' },
      ),
  })
  .openapi({
    description:
      'Message to be used to configure custom alerting in the {@code EventConfig} protos for an event.',
    required: [],
  })
  .openapi('GoogleCloudIntegrationsV1alphaIntegrationAlertConfig')

const GoogleCloudIntegrationsV1alphaIntegrationParameterSchema = z
  .object({
    dataType: z
      .enum([
        'INTEGRATION_PARAMETER_DATA_TYPE_UNSPECIFIED',
        'STRING_VALUE',
        'INT_VALUE',
        'DOUBLE_VALUE',
        'BOOLEAN_VALUE',
        'STRING_ARRAY',
        'INT_ARRAY',
        'DOUBLE_ARRAY',
        'BOOLEAN_ARRAY',
        'JSON_VALUE',
        'PROTO_VALUE',
        'PROTO_ARRAY',
      ])
      .exactOptional()
      .openapi({ description: 'Type of the parameter.' }),
    defaultValue: GoogleCloudIntegrationsV1alphaValueTypeSchema.exactOptional().openapi({
      description:
        'Default values for the defined keys. Each value can either be string, int, double or any proto message or a serialized object.',
    }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name (without prefix) to be displayed in the UI for this parameter. E.g. if the key is "foo.bar.myName", then the name would be "myName".',
      }),
    inputOutputType: z
      .enum(['IN_OUT_TYPE_UNSPECIFIED', 'IN', 'OUT', 'IN_OUT'])
      .exactOptional()
      .openapi({ description: 'Specifies the input/output type for the parameter.' }),
    isTransient: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this parameter is a transient parameter.' }),
    jsonSchema: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This schema will be used to validate runtime JSON-typed values of this parameter.',
      }),
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Key is used to retrieve the corresponding parameter value. This should be unique for a given fired event. These parameters must be predefined in the integration definition.',
      }),
    producer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier of the node (TaskConfig/TriggerConfig) this parameter was produced by, if it is a transient param or a copy of an input param.',
      }),
    searchable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Searchable in the execution log or not.' }),
  })
  .openapi({
    description:
      'Integration Parameter is defined in the integration config and are used to provide information about data types of the expected parameters and provide any default values if needed. They can also be used to add custom attributes. These are static in nature and should not be used for dynamic event definition.',
    required: [],
  })
  .openapi('GoogleCloudIntegrationsV1alphaIntegrationParameter')

const GoogleCloudIntegrationsV1alphaSuccessPolicySchema = z
  .object({
    finalState: z
      .enum(['FINAL_STATE_UNSPECIFIED', 'SUCCEEDED', 'SUSPENDED'])
      .exactOptional()
      .openapi({
        description:
          'State to which the execution snapshot status will be set if the task succeeds.',
      }),
  })
  .openapi({
    description: 'Policy that dictates the behavior for the task after it completes successfully.',
    required: [],
  })
  .openapi('GoogleCloudIntegrationsV1alphaSuccessPolicy')

const GoogleCloudIntegrationsV1alphaTaskConfigSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. User-provided description intended to give additional business context about the task.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. User-provided label that is attached to this TaskConfig in the UI.',
      }),
    errorCatcherId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Optional Error catcher id of the error catch flow which will be executed when execution error happens in the task',
      }),
    externalTaskType: z
      .enum(['EXTERNAL_TASK_TYPE_UNSPECIFIED', 'NORMAL_TASK', 'ERROR_TASK'])
      .exactOptional()
      .openapi({ description: 'Optional. External task type of the task' }),
    failurePolicy: GoogleCloudIntegrationsV1alphaFailurePolicySchema.exactOptional().openapi({
      description:
        'Optional. Determines the number of times the task will be retried on failure and with what retry strategy. This is applicable for asynchronous calls to Eventbus alone (Post To Queue, Schedule etc.).',
    }),
    jsonValidationOption: z
      .enum([
        'JSON_VALIDATION_OPTION_UNSPECIFIED',
        'SKIP',
        'PRE_EXECUTION',
        'POST_EXECUTION',
        'PRE_POST_EXECUTION',
      ])
      .exactOptional()
      .openapi({
        description:
          'Optional. If set, overrides the option configured in the Task implementation class.',
      }),
    nextTasks: z
      .array(GoogleCloudIntegrationsV1alphaNextTaskSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. The set of tasks that are next in line to be executed as per the execution graph defined for the parent event, specified by `event_config_id`. Each of these next tasks are executed only if the condition associated with them evaluates to true.',
      }),
    nextTasksExecutionPolicy: z
      .enum(['NEXT_TASKS_EXECUTION_POLICY_UNSPECIFIED', 'RUN_ALL_MATCH', 'RUN_FIRST_MATCH'])
      .exactOptional()
      .openapi({
        description:
          'Optional. The policy dictating the execution of the next set of tasks for the current task.',
      }),
    parameters: z
      .record(z.string(), GoogleCloudIntegrationsV1alphaEventParameterSchema)
      .exactOptional()
      .openapi({
        description: 'Optional. The customized parameters the user can pass to this task.',
      }),
    position: GoogleCloudIntegrationsV1alphaCoordinateSchema.exactOptional().openapi({
      description:
        'Optional. Informs the front-end application where to draw this error catcher config on the UI.',
    }),
    successPolicy: GoogleCloudIntegrationsV1alphaSuccessPolicySchema.exactOptional().openapi({
      description: 'Optional. Determines what action to take upon successful task completion.',
    }),
    synchronousCallFailurePolicy:
      GoogleCloudIntegrationsV1alphaFailurePolicySchema.exactOptional().openapi({
        description:
          'Optional. Determines the number of times the task will be retried on failure and with what retry strategy. This is applicable for synchronous calls to Eventbus alone (Post).',
      }),
    task: z.string().exactOptional().openapi({ description: 'Optional. The name for the task.' }),
    taskExecutionStrategy: z
      .enum([
        'TASK_EXECUTION_STRATEGY_UNSPECIFIED',
        'WHEN_ALL_SUCCEED',
        'WHEN_ANY_SUCCEED',
        'WHEN_ALL_TASKS_AND_CONDITIONS_SUCCEED',
      ])
      .exactOptional()
      .openapi({
        description: 'Optional. The policy dictating the execution strategy of this task.',
      }),
    taskId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The identifier of this task within its parent event config, specified by the client. This should be unique among all the tasks belong to the same event config. We use this field as the identifier to find next tasks (via field `next_tasks.task_id`).',
      }),
    taskTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. Used to define task-template name if task is of type task-template',
      }),
  })
  .openapi({
    description:
      'The task configuration details. This is not the implementation of Task. There might be multiple TaskConfigs for the same Task.',
    required: [],
  })
  .openapi('GoogleCloudIntegrationsV1alphaTaskConfig')

const GoogleCloudIntegrationsV1alphaTriggerConfigSchema = z
  .object({
    alertConfig: z
      .array(GoogleCloudIntegrationsV1alphaIntegrationAlertConfigSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. An alert threshold configuration for the [trigger + client + integration] tuple. If these values are not specified in the trigger config, default values will be populated by the system. Note that there must be exactly one alert threshold configured per [client + trigger + integration] when published.',
      }),
    cloudSchedulerConfig:
      GoogleCloudIntegrationsV1alphaCloudSchedulerConfigSchema.exactOptional().openapi({
        description: 'Optional. Cloud Scheduler Trigger related metadata',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. User-provided description intended to give additional business context about the task.',
      }),
    errorCatcherId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Optional Error catcher id of the error catch flow which will be executed when execution error happens in the task',
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The user created label for a particular trigger.' }),
    nextTasksExecutionPolicy: z
      .enum(['NEXT_TASKS_EXECUTION_POLICY_UNSPECIFIED', 'RUN_ALL_MATCH', 'RUN_FIRST_MATCH'])
      .exactOptional()
      .openapi({ description: 'Optional. Dictates how next tasks will be executed.' }),
    position: GoogleCloudIntegrationsV1alphaCoordinateSchema.exactOptional().openapi({
      description:
        'Optional. Informs the front-end application where to draw this error catcher config on the UI.',
    }),
    properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Configurable properties of the trigger, not to be confused with integration parameters. E.g. "name" is a property for API triggers and "subscription" is a property for Pub/sub triggers.',
      }),
    startTasks: z
      .array(GoogleCloudIntegrationsV1alphaNextTaskSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. Set of tasks numbers from where the integration execution is started by this trigger. If this is empty, then integration is executed with default start tasks. In the list of start tasks, none of two tasks can have direct ancestor-descendant relationships (i.e. in a same integration execution graph).',
      }),
    triggerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The backend trigger ID.' }),
    triggerNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A number to uniquely identify each trigger config within the integration on UI.',
      }),
    triggerType: z
      .enum([
        'TRIGGER_TYPE_UNSPECIFIED',
        'CRON',
        'API',
        'SFDC_CHANNEL',
        'CLOUD_PUBSUB_EXTERNAL',
        'SFDC_CDC_CHANNEL',
        'CLOUD_SCHEDULER',
      ])
      .exactOptional()
      .openapi({ description: 'Optional. Type of trigger' }),
  })
  .openapi({ description: 'Configuration detail of a trigger.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaTriggerConfig')

const GoogleCloudIntegrationsV1alphaIntegrationVersionSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Auto-generated.', readOnly: true }),
    databasePersistencePolicy: z
      .enum(['DATABASE_PERSISTENCE_POLICY_UNSPECIFIED', 'DATABASE_PERSISTENCE_DISABLED'])
      .exactOptional()
      .openapi({
        description:
          'Optional. Flag to disable database persistence for execution data, including event execution info, execution export info, execution metadata index and execution param index.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The integration description.' }),
    errorCatcherConfigs: z
      .array(GoogleCloudIntegrationsV1alphaErrorCatcherConfigSchema)
      .exactOptional()
      .openapi({
        description: "Optional. Error Catch Task configuration for the integration. It's optional.",
      }),
    integrationParameters: z
      .array(GoogleCloudIntegrationsV1alphaIntegrationParameterSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. Parameters that are expected to be passed to the integration when an event is triggered. This consists of all the parameters that are expected in the integration execution. This gives the user the ability to provide default values, add information like PII and also provide data types of each parameter.',
      }),
    integrationParametersInternal:
      EnterpriseCrmFrontendsEventbusProtoWorkflowParametersSchema.exactOptional().openapi({
        description:
          'Optional. Parameters that are expected to be passed to the integration when an event is triggered. This consists of all the parameters that are expected in the integration execution. This gives the user the ability to provide default values, add information like PII and also provide data types of each parameter.',
      }),
    lastModifierEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The last modifier's email address. Generated based on the End User Credentials/LOAS role of the user making the call.",
      }),
    lockHolder: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The edit lock holder's email address. Generated based on the End User Credentials/LOAS role of the user making the call.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Auto-generated primary key.', readOnly: true }),
    origin: z
      .enum(['UNSPECIFIED', 'UI', 'PIPER_V2', 'PIPER_V3', 'APPLICATION_IP_PROVISIONING'])
      .exactOptional()
      .openapi({
        description: 'Optional. The origin that indicates where this integration is coming from.',
      }),
    parentTemplateId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The id of the template which was used to create this integration_version.',
      }),
    runAsServiceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The run-as service account email, if set and auth config is not configured, that will be used to generate auth token to be used in Connector task, Rest caller task and Cloud function task.',
      }),
    snapshotNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. An increasing sequence that is set when a new snapshot is created. The last created snapshot can be identified by [workflow_name, org_id latest(snapshot_number)]. However, last created snapshot need not be same as the HEAD. So users should always use "HEAD" tag to identify the head.',
      }),
    state: z
      .enum(['INTEGRATION_STATE_UNSPECIFIED', 'DRAFT', 'ACTIVE', 'ARCHIVED', 'SNAPSHOT'])
      .exactOptional()
      .openapi({ description: 'Output only. User should not set it as an input.', readOnly: true }),
    status: z
      .enum(['UNKNOWN', 'DRAFT', 'ACTIVE', 'ARCHIVED', 'SNAPSHOT'])
      .exactOptional()
      .openapi({
        description: 'Output only. Generated by eventbus. User should not set it as an input.',
        readOnly: true,
      }),
    taskConfigs: z
      .array(GoogleCloudIntegrationsV1alphaTaskConfigSchema)
      .exactOptional()
      .openapi({
        description:
          "Optional. Task configuration for the integration. It's optional, but the integration doesn't do anything without task_configs.",
      }),
    taskConfigsInternal: z
      .array(EnterpriseCrmFrontendsEventbusProtoTaskConfigSchema)
      .exactOptional()
      .openapi({
        description:
          "Optional. Task configuration for the integration. It's optional, but the integration doesn't do anything without task_configs.",
      }),
    teardown: EnterpriseCrmEventbusProtoTeardownSchema.exactOptional().openapi({
      description:
        'Optional. Contains a graph of tasks that will be executed before putting the event in a terminal state (SUCCEEDED/FAILED/FATAL), regardless of success or failure, similar to "finally" in code.',
    }),
    triggerConfigs: z
      .array(GoogleCloudIntegrationsV1alphaTriggerConfigSchema)
      .exactOptional()
      .openapi({ description: 'Optional. Trigger configurations.' }),
    triggerConfigsInternal: z
      .array(EnterpriseCrmFrontendsEventbusProtoTriggerConfigSchema)
      .exactOptional()
      .openapi({ description: 'Optional. Trigger configurations.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Auto-generated.', readOnly: true }),
    userLabel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A user-defined label that annotates an integration version. Typically, this is only set when the integration version is created.',
      }),
  })
  .openapi({ description: 'The integration version definition.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaIntegrationVersion')

const GoogleCloudIntegrationsV1alphaLiftSuspensionRequestSchema = z
  .object({
    suspensionResult: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User passed in suspension result and will be used to control workflow execution branching behavior by setting up corresponnding edge condition with suspension result. For example, if you want to lift the suspension, you can pass "Approved", or if you want to reject the suspension and terminate workfloe execution, you can pass "Rejected" and terminate the workflow execution with configuring the edge condition.',
      }),
  })
  .openapi({ description: 'Request for lift Suspension', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaLiftSuspensionRequest')

const GoogleCloudIntegrationsV1alphaLiftSuspensionResponseSchema = z
  .object({
    eventExecutionInfoId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Execution Id that will be returned' }),
  })
  .openapi({ description: 'Response of lift Suspense', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaLiftSuspensionResponse')

const GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectRequestSchema = z
  .object({
    scriptId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the Apps Script project to be linked.' }),
  })
  .openapi({ description: 'Request for LinkAppsScriptProject rpc call.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectRequest')

const GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectResponseSchema = z
  .object({
    scriptId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the linked Apps Script project.' }),
  })
  .openapi({ description: 'Response for LinkAppsScriptProject rpc call.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectResponse')

const GoogleCloudIntegrationsV1alphaListAuthConfigsResponseSchema = z
  .object({
    authConfigs: z
      .array(GoogleCloudIntegrationsV1alphaAuthConfigSchema)
      .exactOptional()
      .openapi({ description: 'The list of AuthConfigs retrieved.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token used to retrieve the next page of results.' }),
  })
  .openapi({ description: 'Response to list AuthConfigs.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaListAuthConfigsResponse')

const GoogleCloudIntegrationsV1alphaListCertificatesResponseSchema = z
  .object({
    certificates: z
      .array(GoogleCloudIntegrationsV1alphaCertificateSchema)
      .exactOptional()
      .openapi({ description: 'The list of Certificates retrieved.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token used to retrieve the next page of results.' }),
  })
  .openapi({ description: 'Response to list Certificates.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaListCertificatesResponse')

const GoogleCloudIntegrationsV1alphaListConnectionsResponseSchema = z
  .object({
    connections: z
      .array(GoogleCloudConnectorsV1ConnectionSchema)
      .exactOptional()
      .openapi({ description: 'Connections.' }),
    nextPageToken: z.string().exactOptional().openapi({ description: 'Next page token.' }),
  })
  .openapi({ description: 'Response containing Connections listed by region.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaListConnectionsResponse')

const GoogleCloudIntegrationsV1alphaListExecutionsResponseSchema = z
  .object({
    executionInfos: z
      .array(EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoSchema)
      .exactOptional()
      .openapi({ description: 'Required. The detailed information of requested executions.' }),
    executions: z
      .array(GoogleCloudIntegrationsV1alphaExecutionSchema)
      .exactOptional()
      .openapi({ description: 'The detailed information of requested executions' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token used to retrieve the next page results.' }),
  })
  .openapi({ description: 'Response for listing the integration execution data.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaListExecutionsResponse')

const GoogleCloudIntegrationsV1alphaListIntegrationVersionsResponseSchema = z
  .object({
    integrationVersions: z
      .array(GoogleCloudIntegrationsV1alphaIntegrationVersionSchema)
      .exactOptional()
      .openapi({ description: 'The integrations which match the request.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    noPermission: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the user has no permission on the version or not.' }),
  })
  .openapi({ description: 'Response for ListIntegrationVersions.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaListIntegrationVersionsResponse')

const GoogleCloudIntegrationsV1alphaListIntegrationsResponseSchema = z
  .object({
    integrations: z
      .array(GoogleCloudIntegrationsV1alphaIntegrationSchema)
      .exactOptional()
      .openapi({ description: 'The integrations which match the request.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The next page token for the response.' }),
  })
  .openapi({ description: 'Response for ListIntegrations.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaListIntegrationsResponse')

const GoogleCloudIntegrationsV1alphaRuntimeActionSchemaSchema = z
  .object({
    action: z.string().exactOptional().openapi({ description: 'Name of the action.' }),
    inputSchema: z
      .string()
      .exactOptional()
      .openapi({ description: 'Input parameter schema for the action.' }),
    outputSchema: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output parameter schema for the action.' }),
  })
  .openapi({
    description: 'Metadata of an action, including schemas for its inputs and outputs.',
    required: [],
  })
  .openapi('GoogleCloudIntegrationsV1alphaRuntimeActionSchema')

const GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponseSchema = z
  .object({
    nextPageToken: z.string().exactOptional().openapi({ description: 'Next page token.' }),
    runtimeActionSchemas: z
      .array(GoogleCloudIntegrationsV1alphaRuntimeActionSchemaSchema)
      .exactOptional()
      .openapi({ description: 'Runtime action schemas.' }),
  })
  .openapi({
    description: 'Response for listing RuntimeActionSchemas for a specific Connection.',
    required: [],
  })
  .openapi('GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse')

const GoogleCloudIntegrationsV1alphaRuntimeEntitySchemaSchema = z
  .object({
    arrayFieldSchema: z
      .string()
      .exactOptional()
      .openapi({ description: 'The above schema, but for an array of the associated entity.' }),
    entity: z.string().exactOptional().openapi({ description: 'Name of the entity.' }),
    fieldSchema: z
      .string()
      .exactOptional()
      .openapi({ description: 'List of fields in the entity.' }),
  })
  .openapi({
    description: 'Metadata of an entity, including a schema for its properties.',
    required: [],
  })
  .openapi('GoogleCloudIntegrationsV1alphaRuntimeEntitySchema')

const GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponseSchema = z
  .object({
    nextPageToken: z.string().exactOptional().openapi({ description: 'Next page token.' }),
    runtimeEntitySchemas: z
      .array(GoogleCloudIntegrationsV1alphaRuntimeEntitySchemaSchema)
      .exactOptional()
      .openapi({ description: 'Runtime entity schemas.' }),
  })
  .openapi({
    description: 'Response for listing RuntimeEntitySchemas for a specific Connection.',
    required: [],
  })
  .openapi('GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse')

const GoogleCloudIntegrationsV1alphaSfdcChannelSchema = z
  .object({
    channelTopic: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Channel topic defined by salesforce once an channel is opened',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Time when the channel is created', readOnly: true }),
    deleteTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when the channel was deleted. Empty if not deleted.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description for this channel' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Client level unique name/alias to easily reference a channel.' }),
    isActive: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicated if a channel has any active integrations referencing it. Set to false when the channel is created, and set to true if there is any integration published with the channel configured in it.',
      }),
    lastReplayId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last sfdc messsage replay id for channel' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of the SFDC channel projects/{project}/locations/{location}/sfdcInstances/{sfdc_instance}/sfdcChannels/{sfdc_channel}.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when the channel was last updated',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'The SfdcChannel that points to a CDC or Platform Event Channel.',
    required: [],
  })
  .openapi('GoogleCloudIntegrationsV1alphaSfdcChannel')

const GoogleCloudIntegrationsV1alphaListSfdcChannelsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token used to retrieve the next page of results.' }),
    sfdcChannels: z
      .array(GoogleCloudIntegrationsV1alphaSfdcChannelSchema)
      .exactOptional()
      .openapi({ description: 'The list of SfdcChannels retrieved.' }),
  })
  .openapi({ description: 'Response to list SfdcChannels.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse')

const GoogleCloudIntegrationsV1alphaSfdcInstanceSchema = z
  .object({
    authConfigId: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of AuthConfigs that can be tried to open the channel to SFDC',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Time when the instance is created', readOnly: true }),
    deleteTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when the instance was deleted. Empty if not deleted.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the sfdc instance.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'User selected unique name/alias to easily reference an instance.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of the SFDC instance projects/{project}/locations/{location}/sfdcInstances/{sfdcInstance}.',
      }),
    serviceAuthority: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL used for API calls after authentication (the login authority is configured within the referenced AuthConfig).',
      }),
    sfdcOrgId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The SFDC Org Id. This is defined in salesforce.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when the instance was last updated',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'The SfdcInstance resource use to hold channels and connection config data.',
    required: [],
  })
  .openapi('GoogleCloudIntegrationsV1alphaSfdcInstance')

const GoogleCloudIntegrationsV1alphaListSfdcInstancesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token used to retrieve the next page of results.' }),
    sfdcInstances: z
      .array(GoogleCloudIntegrationsV1alphaSfdcInstanceSchema)
      .exactOptional()
      .openapi({ description: 'The list of SfdcInstances retrieved.' }),
  })
  .openapi({ description: 'Response to list SfdcInstances.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse')

const GoogleCloudIntegrationsV1alphaSuspensionApprovalExpirationSchema = z
  .object({
    expireTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time after which the suspension expires, if no action taken.',
        readOnly: true,
      }),
    liftWhenExpired: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the suspension will be REJECTED or LIFTED upon expiration. REJECTED is the default behavior.',
      }),
    remindTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time after the previous suspension action reminder, if any, is sent using the selected notification option, for a suspension which is still PENDING_UNSPECIFIED.',
      }),
  })
  .openapi({ description: 'Expiration configs for the approval request.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration')

const GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigSchema = z
  .object({
    customMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Information to provide for recipients.' }),
    emailAddresses: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Email addresses to send approval request to.' }),
    expiration:
      GoogleCloudIntegrationsV1alphaSuspensionApprovalExpirationSchema.exactOptional().openapi({
        description: 'Indicates the next steps when no external actions happen on the suspension.',
      }),
  })
  .openapi({ description: 'Configurations for approving the Suspension.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig')

const GoogleCloudIntegrationsV1alphaSuspensionAuditSchema = z
  .object({
    resolveTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time at which this suspension was resolved.' }),
    resolver: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email address of the person who resolved this suspension.' }),
  })
  .openapi({ description: 'Contains when and by whom the suspension was resolved.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaSuspensionAudit')

const GoogleCloudIntegrationsV1alphaSuspensionSchema = z
  .object({
    approvalConfig:
      GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigSchema.exactOptional().openapi({
        description: 'Controls the notifications and approval permissions for this suspension.',
      }),
    audit: GoogleCloudIntegrationsV1alphaSuspensionAuditSchema.exactOptional().openapi({
      description: 'Metadata pertaining to the resolution of this suspension.',
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Auto-generated.', readOnly: true }),
    eventExecutionInfoId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. ID of the associated execution.' }),
    integration: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The name of the originating integration.' }),
    lastModifyTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Auto-generated.', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Resource name for suspensions suspension/{suspension_id}' }),
    state: z
      .enum(['RESOLUTION_STATE_UNSPECIFIED', 'PENDING', 'REJECTED', 'LIFTED'])
      .exactOptional()
      .openapi({
        description:
          'Required. State of this suspension, indicating what action a resolver has taken.',
      }),
    suspensionConfig: EnterpriseCrmEventbusProtoSuspensionConfigSchema.exactOptional().openapi({
      description: 'Controls the notifications and resolver permissions for this suspension.',
    }),
    taskId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Task id of the associated SuspensionTask.' }),
  })
  .openapi({ description: 'A record representing a suspension.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaSuspension')

const GoogleCloudIntegrationsV1alphaListSuspensionsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token to retrieve the next page of results.' }),
    suspensions: z
      .array(GoogleCloudIntegrationsV1alphaSuspensionSchema)
      .exactOptional()
      .openapi({
        description:
          'The suspensions for the relevant execution which the caller has permissions to view and resolve.',
      }),
  })
  .openapi({ description: 'Response for Suspensions.ListSuspensions.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaListSuspensionsResponse')

const GoogleCloudIntegrationsV1alphaProvisionClientRequestSchema = z
  .object({
    cloudKmsConfig: GoogleCloudIntegrationsV1alphaCloudKmsConfigSchema.exactOptional().openapi({
      description:
        'Optional. OPTIONAL: Cloud KMS config for AuthModule to encrypt/decrypt credentials.',
    }),
    createSampleWorkflows: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Indicates if sample workflow should be created along with provisioning',
      }),
    provisionGmek: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Optional. Indicates provision with GMEK or CMEK' }),
  })
  .openapi({ description: 'Request for the Provision rpc', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaProvisionClientRequest')

const GoogleCloudIntegrationsV1alphaPublishIntegrationVersionRequestSchema = z
  .object({})
  .openapi({ description: 'Request for PublishIntegrationVersion.' })
  .openapi('GoogleCloudIntegrationsV1alphaPublishIntegrationVersionRequest')

const GoogleCloudIntegrationsV1alphaPublishIntegrationVersionResponseSchema = z
  .object({})
  .openapi({ description: 'Response for PublishIntegrationVersion.' })
  .openapi('GoogleCloudIntegrationsV1alphaPublishIntegrationVersionResponse')

const GoogleCloudIntegrationsV1alphaResolveSuspensionRequestSchema = z
  .object({
    suspension: GoogleCloudIntegrationsV1alphaSuspensionSchema.exactOptional().openapi({
      description:
        'Suspension, containing the event_execution_info_id, task_id, and state to set on the corresponding suspension record.',
    }),
  })
  .openapi({ description: 'Request for [Suspensions.ResolveSuspensions].', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaResolveSuspensionRequest')

const GoogleCloudIntegrationsV1alphaResolveSuspensionResponseSchema = z
  .object({})
  .openapi({ description: 'Response for Suspensions.ResolveSuspensions.' })
  .openapi('GoogleCloudIntegrationsV1alphaResolveSuspensionResponse')

const GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequestSchema = z
  .object({
    inputParameters: z
      .record(z.string(), GoogleCloudIntegrationsV1alphaValueTypeSchema)
      .exactOptional()
      .openapi({ description: 'Optional. Input parameters used by integration execution.' }),
    parameterEntries: z
      .array(EnterpriseCrmFrontendsEventbusProtoParameterEntrySchema)
      .exactOptional()
      .openapi({
        description:
          'Parameters are a part of Event and can be used to communicate between different tasks that are part of the same integration execution.',
      }),
    parameters: EnterpriseCrmEventbusProtoEventParametersSchema.exactOptional().openapi({
      description: 'Passed in as parameters to each integration execution.',
    }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This is used to de-dup incoming request: if the duplicate request was detected, the response from the previous execution is returned.',
      }),
    scheduleTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time that the integration should be executed. If the time is less or equal to the current time, the integration is executed immediately.',
      }),
    triggerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Matched against all {@link TriggerConfig}s across all integrations. i.e. TriggerConfig.trigger_id.equals(trigger_id)',
      }),
  })
  .openapi({ description: 'The request for scheduling an integration.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest')

const GoogleCloudIntegrationsV1alphaScheduleIntegrationsResponseSchema = z
  .object({
    executionInfoIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The execution info id for the executed integrations.' }),
  })
  .openapi({ description: 'The response for executing an integration.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaScheduleIntegrationsResponse')

const GoogleCloudIntegrationsV1alphaSwitchEncryptionRequestSchema = z
  .object({
    cloudKmsConfig: GoogleCloudIntegrationsV1alphaCloudKmsConfigSchema.exactOptional().openapi({
      description:
        'Required. REQUIRED: Cloud KMS config for AuthModule to encrypt/decrypt credentials.',
    }),
  })
  .openapi({ description: 'Request for the SwitchEncryption rpc', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaSwitchEncryptionRequest')

const GoogleCloudIntegrationsV1alphaTakeoverEditLockRequestSchema = z
  .object({})
  .openapi({ description: 'Request for TakeoverEditLock.' })
  .openapi('GoogleCloudIntegrationsV1alphaTakeoverEditLockRequest')

const GoogleCloudIntegrationsV1alphaTakeoverEditLockResponseSchema = z
  .object({
    integrationVersion:
      GoogleCloudIntegrationsV1alphaIntegrationVersionSchema.exactOptional().openapi({
        description: 'Version after the lock is acquired by the new user.',
      }),
  })
  .openapi({ description: 'Response for TakeoverEditLock.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaTakeoverEditLockResponse')

const GoogleCloudIntegrationsV1alphaTestIntegrationsRequestSchema = z
  .object({
    clientId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. This is used to identify the client on whose behalf the event will be executed.',
      }),
    deadlineSecondsTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. custom deadline of the rpc' }),
    inputParameters: z
      .record(z.string(), GoogleCloudIntegrationsV1alphaValueTypeSchema)
      .exactOptional()
      .openapi({ description: 'Optional. Input parameters used during integration execution.' }),
    integrationVersion:
      GoogleCloudIntegrationsV1alphaIntegrationVersionSchema.exactOptional().openapi({
        description: 'Required. integration config to execute the workflow',
      }),
    parameters: EnterpriseCrmFrontendsEventbusProtoEventParametersSchema.exactOptional().openapi({
      description: 'Optional. Passed in as parameters to each integration execution.',
    }),
    testMode: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Can be specified in the event request, otherwise false (default). If true, enables tasks with condition "test_mode = true". If false, disables tasks with condition "test_mode = true" if global test mode (set by platform) is also false {@link EventBusConfig}.',
      }),
    triggerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The trigger id of the integration trigger config. If both trigger_id and client_id is present, the integration is executed from the start tasks provided by the matching trigger config otherwise it is executed from the default start tasks.',
      }),
  })
  .openapi({ description: 'The request for testing an integration.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaTestIntegrationsRequest')

const GoogleCloudIntegrationsV1alphaTestIntegrationsResponseSchema = z
  .object({
    eventParameters:
      EnterpriseCrmFrontendsEventbusProtoEventParametersSchema.exactOptional().openapi({
        description: 'Details for the integration that were executed.',
      }),
    executionFailed: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Is true if any execution in the integration failed. False otherwise.',
      }),
    executionId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id of the execution corresponding to this run of integration.',
      }),
    parameterEntries: z
      .array(EnterpriseCrmFrontendsEventbusProtoParameterEntrySchema)
      .exactOptional()
      .openapi({
        description:
          'Parameters are a part of Event and can be used to communicate between different tasks that are part of the same integration execution.',
      }),
    parameters: z
      .record(z.string(), GoogleCloudIntegrationsV1alphaValueTypeSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. Parameters are a part of Event and can be used to communicate between different tasks that are part of the same integration execution.',
      }),
  })
  .openapi({ description: 'The response for testing an integration.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaTestIntegrationsResponse')

const GoogleCloudIntegrationsV1alphaUnpublishIntegrationVersionRequestSchema = z
  .object({})
  .openapi({ description: 'Request for UnpublishIntegrationVersion.' })
  .openapi('GoogleCloudIntegrationsV1alphaUnpublishIntegrationVersionRequest')

const GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequestSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({ description: 'The textproto of the integration_version.' }),
    fileFormat: z
      .enum(['FILE_FORMAT_UNSPECIFIED', 'JSON', 'YAML'])
      .exactOptional()
      .openapi({ description: 'File format for upload request.' }),
  })
  .openapi({ description: 'Request for UploadIntegrationVersion.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequest')

const GoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponseSchema = z
  .object({
    integrationVersion:
      GoogleCloudIntegrationsV1alphaIntegrationVersionSchema.exactOptional().openapi({
        description: 'The uploaded integration.',
      }),
  })
  .openapi({ description: 'Response for UploadIntegrationVersion.', required: [] })
  .openapi('GoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponse')

const GoogleProtobufEmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('GoogleProtobufEmpty')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1CallbackGenerateTokenRoute = createRoute({
  method: 'get',
  path: '/v1/callback:generateToken',
  tags: ['callback'],
  description:
    "Receives the auth code and auth config id to combine that with the client id and secret to retrieve access tokens from the token endpoint. Returns either a success or error message when it's done.",
  operationId: 'integrations.callback.generateToken',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The auth code for the given request',
            in: 'query',
            name: 'code',
            schema: { type: 'string' },
            required: false,
          },
        }),
      gcpProjectId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The gcp project id of the request',
            in: 'query',
            name: 'gcpProjectId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      product: z
        .enum(['UNSPECIFIED_PRODUCT', 'IP', 'APIGEE', 'SECURITY'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Which product sends the request',
            in: 'query',
            name: 'product',
            schema: { enum: ['UNSPECIFIED_PRODUCT', 'IP', 'APIGEE', 'SECURITY'], type: 'string' },
            required: false,
          },
        }),
      redirectUri: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Redirect uri of the auth code request',
            in: 'query',
            name: 'redirectUri',
            schema: { type: 'string' },
            required: false,
          },
        }),
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The auth config id for the given request',
            in: 'query',
            name: 'state',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudIntegrationsV1alphaGenerateTokenResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ConnectorPlatformRegionsEnumerateRoute = createRoute({
  method: 'get',
  path: '/v1/connectorPlatformRegions:enumerate',
  tags: ['connectorPlatformRegions'],
  description: 'Enumerates the regions for which Connector Platform is provisioned.',
  operationId: 'integrations.connectorPlatformRegions.enumerate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaEnumerateConnectorPlatformRegionsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1IntegrationVersionTakeoverEditLockRoute = createRoute({
  method: 'post',
  path: '/v1/{integrationVersion}:takeoverEditLock',
  tags: ['projects'],
  description:
    'Clears the `locked_by` and `locked_at_timestamp`in the DRAFT version of this integration. It then performs the same action as the CreateDraftIntegrationVersion (i.e., copies the DRAFT version of the integration as a SNAPSHOT and then creates a new DRAFT version with the `locked_by` set to the `user_taking_over` and the `locked_at_timestamp` set to the current timestamp). Both the `locked_by` and `user_taking_over` are notified via email about the takeover. This RPC throws an exception if the integration is not in DRAFT status or if the `locked_by` and `locked_at_timestamp` fields are not set.The TakeoverEdit lock is treated the same as an edit of the integration, and hence shares ACLs with edit. Audit fields updated include last_modified_timestamp, last_modified_by.',
  operationId: 'integrations.projects.locations.products.integrations.versions.takeoverEditLock',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      integrationVersion: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The version to take over edit lock. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}',
            in: 'path',
            name: 'integrationVersion',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudIntegrationsV1alphaTakeoverEditLockRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaTakeoverEditLockResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['projects'],
  description:
    "Gets an sfdc channel. If the channel doesn't exist, Code.NOT_FOUND exception will be thrown.",
  operationId: 'integrations.projects.locations.sfdcInstances.sfdcChannels.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name that is associated with the SfdcChannel.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudIntegrationsV1alphaSfdcChannelSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Deletes an sfdc channel.',
  operationId: 'integrations.projects.locations.sfdcInstances.sfdcChannels.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name that is associated with the SfdcChannel.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1NameRoute = createRoute({
  method: 'patch',
  path: '/v1/{name}',
  tags: ['projects'],
  description:
    'Updates an sfdc channel. Updates the sfdc channel in spanner. Returns the sfdc channel.',
  operationId: 'integrations.projects.locations.sfdcInstances.sfdcChannels.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Field mask specifying the fields in the above SfdcChannel that have been modified and need to be updated.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'clientCertificate.passphrase': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "'passphrase' should be left unset if private key is not encrypted. Note that 'passphrase' is not the password for web server, but an extra layer of security to protected private key.",
            in: 'query',
            name: 'clientCertificate.passphrase',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'clientCertificate.sslCertificate': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE-----',
            in: 'query',
            name: 'clientCertificate.sslCertificate',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Resource name of the SFDC channel projects/{project}/locations/{location}/sfdcInstances/{sfdc_instance}/sfdcChannels/{sfdc_channel}.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudIntegrationsV1alphaSfdcChannelSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudIntegrationsV1alphaSfdcChannelSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:cancel',
  tags: ['projects'],
  description: 'Cancellation of an execution',
  operationId: 'integrations.projects.locations.products.integrations.executions.cancel',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The execution resource name. Format: projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_id}/executions/{execution_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudIntegrationsV1alphaCancelExecutionRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudIntegrationsV1alphaCancelExecutionResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1NameDownloadRoute = createRoute({
  method: 'get',
  path: '/v1/{name}:download',
  tags: ['projects'],
  description:
    'Downloads an integration. Retrieves the `IntegrationVersion` for a given `integration_id` and returns the response as a string.',
  operationId: 'integrations.projects.locations.products.integrations.versions.download',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      fileFormat: z
        .enum(['FILE_FORMAT_UNSPECIFIED', 'JSON', 'YAML'])
        .exactOptional()
        .openapi({
          param: {
            description: 'File format for download request.',
            in: 'query',
            name: 'fileFormat',
            schema: { enum: ['FILE_FORMAT_UNSPECIFIED', 'JSON', 'YAML'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The version to download. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaDownloadIntegrationVersionResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameExecuteRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:execute',
  tags: ['projects'],
  description:
    'Executes integrations synchronously by passing the trigger id in the request body. The request is not returned until the requested executions are either fulfilled or experienced an error. If the integration name is not specified (passing `-`), all of the associated integration under the given trigger_id will be executed. Otherwise only the specified integration for the given `trigger_id` is executed. This is helpful for execution the integration from UI.',
  operationId: 'integrations.projects.locations.products.integrations.execute',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The integration resource name.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameLiftRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:lift',
  tags: ['projects'],
  description:
    '* Lifts suspension for advanced suspension task. Fetch corresponding suspension with provided suspension Id, resolve suspension, and set up suspension result for the Suspension Task.',
  operationId: 'integrations.projects.locations.products.integrations.executions.suspensions.lift',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource that the suspension belongs to. "projects/{project}/locations/{location}/products/{product}/integrations/{integration}/executions/{execution}/suspensions/{suspenion}" format.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudIntegrationsV1alphaLiftSuspensionRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudIntegrationsV1alphaLiftSuspensionResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NamePublishRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:publish',
  tags: ['projects'],
  description:
    'This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. This RPC throws an exception if the version being published is DRAFT, and if the `locked_by` user is not the same as the user performing the Publish. Audit fields updated include last_published_timestamp, last_published_by, last_modified_timestamp, last_modified_by. Any existing lock is on this integration is released.',
  operationId: 'integrations.projects.locations.products.integrations.versions.publish',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The version to publish. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaPublishIntegrationVersionRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaPublishIntegrationVersionResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameResolveRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:resolve',
  tags: ['projects'],
  description:
    '* Resolves (lifts/rejects) any number of suspensions. If the integration is already running, only the status of the suspension is updated. Otherwise, the suspended integration will begin execution again.',
  operationId:
    'integrations.projects.locations.products.integrations.executions.suspensions.resolve',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_name}/executions/{execution_name}/suspensions/{suspension_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaResolveSuspensionRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaResolveSuspensionResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameScheduleRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:schedule',
  tags: ['projects'],
  description:
    'Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.',
  operationId: 'integrations.projects.locations.products.integrations.schedule',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The integration resource name.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaScheduleIntegrationsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameTestRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:test',
  tags: ['projects'],
  description: 'Execute the integration in draft state',
  operationId: 'integrations.projects.locations.products.integrations.test',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Output only. Auto-generated primary key.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudIntegrationsV1alphaTestIntegrationsRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaTestIntegrationsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameUnpublishRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:unpublish',
  tags: ['projects'],
  description:
    'Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it. The "HEAD" and "PUBLISH_REQUESTED" tags do not change. This RPC throws an exception if the version being snapshot is not ACTIVE. Audit fields added include action, action_by, action_timestamp.',
  operationId: 'integrations.projects.locations.products.integrations.versions.unpublish',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The version to deactivate. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaUnpublishIntegrationVersionRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentAppsScriptProjectsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/appsScriptProjects',
  tags: ['projects'],
  description: 'Creates an Apps Script project.',
  operationId: 'integrations.projects.locations.appsScriptProjects.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The project that the executed integration belongs to.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentAppsScriptProjectsLinkRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/appsScriptProjects:link',
  tags: ['projects'],
  description: 'Links a existing Apps Script project.',
  operationId: 'integrations.projects.locations.appsScriptProjects.link',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The project that the executed integration belongs to.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentAuthConfigsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/authConfigs',
  tags: ['projects'],
  description:
    'Lists all auth configs that match the filter. Restrict to auth configs belong to the current client only.',
  operationId: 'integrations.projects.locations.products.authConfigs.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/v2/list-filters.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The size of entries in the response. If unspecified, defaults to 100.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The token returned in the previous response.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      readMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The mask which specifies fields that need to be returned in the AuthConfig's response.",
            in: 'query',
            name: 'readMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The client, which owns this collection of AuthConfigs.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudIntegrationsV1alphaListAuthConfigsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentAuthConfigsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/authConfigs',
  tags: ['projects'],
  description:
    'Creates an auth config record. Fetch corresponding credentials for specific auth types, e.g. access token for OAuth 2.0, JWT token for JWT. Encrypt the auth config with Cloud KMS and store the encrypted credentials in Spanner. Returns the encrypted auth config.',
  operationId: 'integrations.projects.locations.products.authConfigs.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      'clientCertificate.encryptedPrivateKey': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE-----',
            in: 'query',
            name: 'clientCertificate.encryptedPrivateKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'clientCertificate.passphrase': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "'passphrase' should be left unset if private key is not encrypted. Note that 'passphrase' is not the password for web server, but an extra layer of security to protected private key.",
            in: 'query',
            name: 'clientCertificate.passphrase',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'clientCertificate.sslCertificate': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE-----',
            in: 'query',
            name: 'clientCertificate.sslCertificate',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. "projects/{project}/locations/{location}" format.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudIntegrationsV1alphaAuthConfigSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudIntegrationsV1alphaAuthConfigSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentCertificatesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/certificates',
  tags: ['projects'],
  description:
    'List all the certificates that match the filter. Restrict to certificate of current client only.',
  operationId: 'integrations.projects.locations.products.certificates.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/v2/list-filters.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The size of entries in the response. If unspecified, defaults to 100.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The token returned in the previous response.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      readMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The mask which specifies fields that need to be returned in the Certificate's response.",
            in: 'query',
            name: 'readMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The client, which owns this collection of Certificates.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaListCertificatesResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentCertificatesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/certificates',
  tags: ['projects'],
  description:
    'Creates a new certificate. The certificate will be registered to the trawler service and will be encrypted using cloud KMS and stored in Spanner Returns the certificate.',
  operationId: 'integrations.projects.locations.products.certificates.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. "projects/{project}/locations/{location}" format.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudIntegrationsV1alphaCertificateSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudIntegrationsV1alphaCertificateSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentClientmetadataRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/clientmetadata',
  tags: ['projects'],
  description: 'Gets the metadata info for the requested client',
  operationId: 'integrations.projects.getClientmetadata',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. Required: The ID of the GCP Project to be provisioned.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaGetClientMetadataResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentClientsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/clients',
  tags: ['projects'],
  description: 'Gets the client configuration for the given project and location resource name',
  operationId: 'integrations.projects.locations.getClients',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. Required: The ID of the GCP Project to be provisioned.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudIntegrationsV1alphaGetClientResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentClientsDeprovisionRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/clients:deprovision',
  tags: ['projects'],
  description:
    'Perform the deprovisioning steps to disable a user GCP project to use IP and purge all related data in a wipeout-compliant way.',
  operationId: 'integrations.projects.locations.clients.deprovision',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. Required: The ID of the GCP Project to be deprovisioned.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaDeprovisionClientRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentClientsProvisionRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/clients:provision',
  tags: ['projects'],
  description:
    'Perform the provisioning steps to enable a user GCP project to use IP. If GCP project already registered on IP end via Apigee Integration, provisioning will fail.',
  operationId: 'integrations.projects.locations.clients.provision',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. Required: The ID of the GCP Project to be provisioned.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudIntegrationsV1alphaProvisionClientRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentClientsSwitchRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/clients:switch',
  tags: ['projects'],
  description: 'Update client from GMEK to CMEK',
  operationId: 'integrations.projects.locations.clients.switch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. Required: The ID of the GCP Project to be provisioned.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudIntegrationsV1alphaSwitchEncryptionRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentCloudFunctionsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/cloudFunctions',
  tags: ['projects'],
  description: 'Creates an cloud function project.',
  operationId: 'integrations.projects.locations.products.cloudFunctions.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The project that the executed integration belongs to.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaCreateCloudFunctionRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaCreateCloudFunctionResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentConnectionsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/connections',
  tags: ['projects'],
  description: 'Lists Connections in a given project and location.',
  operationId: 'integrations.projects.locations.connections.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Order by parameters.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page size.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Parent resource of the Connection, of the form: `projects/*/locations/*`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudIntegrationsV1alphaListConnectionsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentExecutionsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/executions',
  tags: ['projects'],
  description:
    'Lists the results of all the integration executions. The response includes the same information as the [execution log](https://cloud.google.com/application-integration/docs/viewing-logs) in the Integration UI.',
  operationId: 'integrations.projects.locations.products.integrations.executions.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Standard filter field, we support filtering on following fields: workflow_name: the name of the integration. CreateTimestamp: the execution created time. event_execution_state: the state of the executions. execution_id: the id of the execution. trigger_id: the id of the trigger. parameter_type: the type of the parameters involved in the execution. All fields support for EQUALS, in additional: CreateTimestamp support for LESS_THAN, GREATER_THAN ParameterType support for HAS For example: "parameter_type" HAS \\"string\\" Also supports operators like AND, OR, NOT For example, trigger_id=\\"id1\\" AND workflow_name=\\"testWorkflow\\"',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filterParams.customFilter': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional user-provided custom filter.',
            in: 'query',
            name: 'filterParams.customFilter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filterParams.endTime': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'End timestamp.',
            in: 'query',
            name: 'filterParams.endTime',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filterParams.eventStatuses': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'List of possible event statuses.',
            explode: true,
            in: 'query',
            name: 'filterParams.eventStatuses',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      'filterParams.executionId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Execution id.',
            in: 'query',
            name: 'filterParams.executionId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filterParams.parameterKey': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Param key. DEPRECATED. User parameter_pair_key instead.',
            in: 'query',
            name: 'filterParams.parameterKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filterParams.parameterPairKey': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Param key in the key value pair filter.',
            in: 'query',
            name: 'filterParams.parameterPairKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filterParams.parameterPairValue': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Param value in the key value pair filter.',
            in: 'query',
            name: 'filterParams.parameterPairValue',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filterParams.parameterType': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Param type.',
            in: 'query',
            name: 'filterParams.parameterType',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filterParams.parameterValue': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Param value. DEPRECATED. User parameter_pair_value instead.',
            in: 'query',
            name: 'filterParams.parameterValue',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filterParams.startTime': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Start timestamp.',
            in: 'query',
            name: 'filterParams.startTime',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filterParams.taskStatuses': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'List of possible task statuses.',
            explode: true,
            in: 'query',
            name: 'filterParams.taskStatuses',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      'filterParams.workflowName': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Workflow name.',
            in: 'query',
            name: 'filterParams.workflowName',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The results would be returned in order you specified here. Currently supporting "last_modified_time" and "create_time".',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The size of entries in the response.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The token returned in the previous response.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      readMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. View mask for the response data. If set, only the field specified will be returned as part of the result. If not set, all fields in event execution info will be filled and returned.',
            in: 'query',
            name: 'readMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
      refreshAcl: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If true, the service will use the most recent acl information to list event execution infos and renew the acl cache. Note that fetching the most recent acl is synchronous, so it will increase RPC call latency.',
            in: 'query',
            name: 'refreshAcl',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      truncateParams: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If true, the service will truncate the params to only keep the first 1000 characters of string params and empty the executions in order to make response smaller. Only works for UI and when the params fields are not filtered out.',
            in: 'query',
            name: 'truncateParams',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent resource name of the integration execution.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudIntegrationsV1alphaListExecutionsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentIntegrationsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/integrations',
  tags: ['projects'],
  description: 'Returns the list of all integrations in the specified project.',
  operationId: 'integrations.projects.locations.products.integrations.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter on fields of IntegrationVersion. Fields can be compared with literal values by use of ":" (containment), "=" (equality), ">" (greater), "<" (less than), >=" (greater than or equal to), "<=" (less than or equal to), and "!=" (inequality) operators. Negation, conjunction, and disjunction are written using NOT, AND, and OR keywords. For example, organization_id=\\"1\\" AND state=ACTIVE AND description:"test". Filtering cannot be performed on repeated fields like `task_config`.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The results would be returned in order you specified here. Supported sort keys are: Descending sort order by "last_modified_time", "created_time", "snapshot_number". Ascending sort order by the integration name.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The page size for the resquest.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The page token for the resquest.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Project and location from which the integrations should be listed. Format: projects/{project}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaListIntegrationsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentRuntimeActionSchemasRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/runtimeActionSchemas',
  tags: ['projects'],
  description:
    'Lists the JSON schemas for the inputs and outputs of actions, filtered by action name.',
  operationId: 'integrations.projects.locations.connections.runtimeActionSchemas.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter. Only the action field with literal equality operator is supported.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page size.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Parent resource of RuntimeActionSchema. Format: projects/{project}/locations/{location}/connections/{connection}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentRuntimeEntitySchemasRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/runtimeEntitySchemas',
  tags: ['projects'],
  description:
    'Lists the JSON schemas for the properties of runtime entities, filtered by entity name.',
  operationId: 'integrations.projects.locations.connections.runtimeEntitySchemas.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter. Only the entity field with literal equality operator is supported.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page size.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Parent resource of RuntimeEntitySchema. Format: projects/{project}/locations/{location}/connections/{connection}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentSfdcChannelsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/sfdcChannels',
  tags: ['projects'],
  description:
    'Lists all sfdc channels that match the filter. Restrict to sfdc channels belonging to the current client only.',
  operationId: 'integrations.projects.locations.sfdcInstances.sfdcChannels.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/v2/list-filters.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The size of entries in the response. If unspecified, defaults to 100.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The token returned in the previous response.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      readMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The mask which specifies fields that need to be returned in the SfdcChannel's response.",
            in: 'query',
            name: 'readMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The client, which owns this collection of SfdcChannels.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaListSfdcChannelsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentSfdcChannelsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/sfdcChannels',
  tags: ['projects'],
  description:
    'Creates an sfdc channel record. Store the sfdc channel in Spanner. Returns the sfdc channel.',
  operationId: 'integrations.projects.locations.sfdcInstances.sfdcChannels.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. "projects/{project}/locations/{location}" format.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudIntegrationsV1alphaSfdcChannelSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudIntegrationsV1alphaSfdcChannelSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentSfdcInstancesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/sfdcInstances',
  tags: ['projects'],
  description:
    'Lists all sfdc instances that match the filter. Restrict to sfdc instances belonging to the current client only.',
  operationId: 'integrations.projects.locations.sfdcInstances.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/v2/list-filters.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The size of entries in the response. If unspecified, defaults to 100.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The token returned in the previous response.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      readMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The mask which specifies fields that need to be returned in the SfdcInstance's response.",
            in: 'query',
            name: 'readMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The client, which owns this collection of SfdcInstances.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaListSfdcInstancesResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentSfdcInstancesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/sfdcInstances',
  tags: ['projects'],
  description:
    'Creates an sfdc instance record. Store the sfdc instance in Spanner. Returns the sfdc instance.',
  operationId: 'integrations.projects.locations.sfdcInstances.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. "projects/{project}/locations/{location}" format.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudIntegrationsV1alphaSfdcInstanceSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudIntegrationsV1alphaSfdcInstanceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentSuspensionsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/suspensions',
  tags: ['projects'],
  description:
    '* Lists suspensions associated with a specific execution. Only those with permissions to resolve the relevant suspensions will be able to view them.',
  operationId: 'integrations.projects.locations.products.integrations.executions.suspensions.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Standard filter field.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Field name to order by.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of entries in the response.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Token to retrieve a specific page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_name}/executions/{execution_name}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudIntegrationsV1alphaListSuspensionsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentVersionsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/versions',
  tags: ['projects'],
  description: 'Returns the list of all integration versions in the specified project.',
  operationId: 'integrations.projects.locations.products.integrations.versions.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      fieldMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The field mask which specifies the particular data to be returned.',
            in: 'query',
            name: 'fieldMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter on fields of IntegrationVersion. Fields can be compared with literal values by use of ":" (containment), "=" (equality), ">" (greater), "<" (less than), >=" (greater than or equal to), "<=" (less than or equal to), and "!=" (inequality) operators. Negation, conjunction, and disjunction are written using NOT, AND, and OR keywords. For example, organization_id=\\"1\\" AND state=ACTIVE AND description:"test". Filtering cannot be performed on repeated fields like `task_config`.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The results would be returned in order you specified here. Currently supported sort keys are: Descending sort order for "last_modified_time", "created_time", "snapshot_number" Ascending sort order for "name".',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of versions to return. The service may return fewer than this value. If unspecified, at most 50 versions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token, received from a previous `ListIntegrationVersions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListIntegrationVersions` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent resource where this version will be created. Format: projects/{project}/locations/{location}/integrations/{integration} Specifically, when parent equals: 1. projects//locations//integrations/, Meaning: "List versions (with filter) for a particular integration". 2. projects//locations//integrations/- Meaning: "List versions (with filter) for a client within a particular region". 3. projects//locations/-/integrations/- Meaning: "List versions (with filter) for a client".',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaListIntegrationVersionsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentVersionsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/versions',
  tags: ['projects'],
  description: 'Create a integration with a draft version in the specified project.',
  operationId: 'integrations.projects.locations.products.integrations.versions.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      newIntegration: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set this flag to true, if draft version is to be created for a brand new integration. False, if the request is for an existing integration. For backward compatibility reasons, even if this flag is set to `false` and no existing integration is found, a new draft integration will still be created.',
            in: 'query',
            name: 'newIntegration',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent resource where this version will be created. Format: projects/{project}/locations/{location}/integrations/{integration}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudIntegrationsV1alphaIntegrationVersionSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudIntegrationsV1alphaIntegrationVersionSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentVersionsUploadRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/versions:upload',
  tags: ['projects'],
  description:
    'Uploads an integration. The content can be a previously downloaded integration. Performs the same function as CreateDraftIntegrationVersion, but accepts input in a string format, which holds the complete representation of the IntegrationVersion content.',
  operationId: 'integrations.projects.locations.products.integrations.versions.upload',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The version to upload. Format: projects/{project}/locations/{location}/integrations/{integration}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
