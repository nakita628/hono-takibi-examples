import { createRoute, z } from '@hono/zod-openapi'

const ConnectProtocolVersionSchema = z
  .literal(1)
  .openapi({
    title: 'Connect-Protocol-Version',
    description: 'Define the version of the Connect protocol',
  })
  .openapi('ConnectProtocolVersion')

const ConnectTimeoutHeaderSchema = z
  .number()
  .openapi({ title: 'Connect-Timeout-Ms', description: 'Define the timeout, in ms' })
  .openapi('ConnectTimeoutHeader')

const ConnectErrorDetailsAnySchema = z
  .looseObject({
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL that acts as a globally unique identifier for the type of the serialized message. For example: `type.googleapis.com/google.rpc.ErrorInfo`. This is used to determine the schema of the data in the `value` field and is the discriminator for the `debug` field.',
      }),
    value: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'The Protobuf message, serialized as bytes and base64-encoded. The specific message type is identified by the `type` field.',
      }),
    debug: z
      .xor([
        z.looseObject({}).openapi({ title: 'Any', description: 'Detailed error information.' }),
      ])
      .exactOptional()
      .openapi({
        discriminator: { propertyName: 'type' },
        title: 'Debug',
        description:
          "Deserialized error detail payload. The 'type' field indicates the schema. This field is for easier debugging and should not be relied upon for application logic.",
      }),
  })
  .openapi({
    description:
      'Contains an arbitrary serialized message along with a @type that describes the type of the serialized message, with an additional debug field for ConnectRPC error details.',
    required: [],
  })
  .openapi('ConnectErrorDetailsAny')

const ConnectErrorSchema = z
  .looseObject({
    code: z
      .enum([
        'canceled',
        'unknown',
        'invalid_argument',
        'deadline_exceeded',
        'not_found',
        'already_exists',
        'permission_denied',
        'resource_exhausted',
        'failed_precondition',
        'aborted',
        'out_of_range',
        'unimplemented',
        'internal',
        'unavailable',
        'data_loss',
        'unauthenticated',
      ])
      .exactOptional()
      .openapi({
        examples: ['not_found'],
        description:
          'The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code].',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.',
      }),
    details: z
      .array(ConnectErrorDetailsAnySchema)
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is no limit on the number of messages.',
      }),
  })
  .openapi({
    title: 'Connect Error',
    description:
      'Error type returned by Connect: https://connectrpc.com/docs/go/errors/#http-representation',
    required: [],
  })
  .openapi('ConnectError')

const SettingsV1DeleteRecordingRuleRequestSchema = z
  .strictObject({ id: z.string().exactOptional().openapi({ title: 'id' }) })
  .openapi({ title: 'DeleteRecordingRuleRequest', required: [] })
  .openapi('SettingsV1DeleteRecordingRuleRequest')

const SettingsV1DeleteRecordingRuleResponseSchema = z
  .strictObject({})
  .openapi({ title: 'DeleteRecordingRuleResponse' })
  .openapi('SettingsV1DeleteRecordingRuleResponse')

const SettingsV1GetRecordingRuleRequestSchema = z
  .strictObject({ id: z.string().exactOptional().openapi({ title: 'id' }) })
  .openapi({ title: 'GetRecordingRuleRequest', required: [] })
  .openapi('SettingsV1GetRecordingRuleRequest')

const TypesV1LabelPairSchema = z
  .strictObject({
    name: z
      .string()
      .exactOptional()
      .openapi({ examples: ['service_name'], title: 'name', description: 'Label name' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ examples: ['my_service'], title: 'value', description: 'Label value' }),
  })
  .openapi({ title: 'LabelPair', required: [] })
  .openapi('TypesV1LabelPair')

const SettingsV1MetricTypeSchema = z
  .literal('TOTAL')
  .openapi({ title: 'MetricType' })
  .openapi('SettingsV1MetricType')

const SettingsV1StacktraceFilterFunctionNameSchema = z
  .strictObject({
    functionName: z.string().exactOptional().openapi({ title: 'function_name' }),
    metricType: SettingsV1MetricTypeSchema.exactOptional().openapi({ title: 'metric_type' }),
  })
  .openapi({ title: 'StacktraceFilterFunctionName', required: [] })
  .openapi('SettingsV1StacktraceFilterFunctionName')

const SettingsV1StacktraceFilterSchema = z
  .strictObject({
    functionName: SettingsV1StacktraceFilterFunctionNameSchema.nullable()
      .exactOptional()
      .openapi({ title: 'function_name' }),
  })
  .openapi({ title: 'StacktraceFilter', required: [] })
  .openapi('SettingsV1StacktraceFilter')

const SettingsV1RecordingRuleSchema = z
  .strictObject({
    id: z
      .string()
      .exactOptional()
      .openapi({ title: 'id', description: 'The unique id of the recording rule.' }),
    metricName: z
      .string()
      .exactOptional()
      .openapi({
        title: 'metric_name',
        description:
          'The name of the recording rule, this does not necessarily need to be\n unique.',
      }),
    profileType: z
      .string()
      .exactOptional()
      .openapi({
        title: 'profile_type',
        description:
          'Used in the UI to display what type of profile type this recording rule is\n generated from.\n\n This should be the standard format of:\n\n   <name>:<sample-type>:<sample-unit>:<period-type>:<period-unit>\n\n For example:\n\n   process_cpu:cpu:nanoseconds:cpu:nanoseconds',
      }),
    matchers: z.array(z.string()).exactOptional().openapi({ title: 'matchers' }),
    groupBy: z.array(z.string()).exactOptional().openapi({ title: 'group_by' }),
    externalLabels: z
      .array(TypesV1LabelPairSchema)
      .exactOptional()
      .openapi({ title: 'external_labels' }),
    generation: z
      .union([
        z
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
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'generation',
        description:
          'The observed generation of this recording rule. This value should be\n provided when making updates to this record, to avoid conflicting\n concurrent updates.',
      }),
    stacktraceFilter: SettingsV1StacktraceFilterSchema.nullable()
      .exactOptional()
      .openapi({
        title: 'stacktrace_filter',
        description:
          'The stacktrace filter allows filtering on particular function names in the stacktrace.\n This allows recording rules to focus on specific functions and calculate their "total"\n resource usage.',
      }),
    provisioned: z
      .boolean()
      .exactOptional()
      .openapi({
        title: 'provisioned',
        description: "Provisioned rules are added by config and can't be Upsert or Deleted",
      }),
  })
  .openapi({ title: 'RecordingRule', required: [] })
  .openapi('SettingsV1RecordingRule')

const SettingsV1GetRecordingRuleResponseSchema = z
  .strictObject({ rule: SettingsV1RecordingRuleSchema.exactOptional().openapi({ title: 'rule' }) })
  .openapi({ title: 'GetRecordingRuleResponse', required: [] })
  .openapi('SettingsV1GetRecordingRuleResponse')

const SettingsV1ListRecordingRulesRequestSchema = z
  .strictObject({})
  .openapi({ title: 'ListRecordingRulesRequest' })
  .openapi('SettingsV1ListRecordingRulesRequest')

const SettingsV1ListRecordingRulesResponseSchema = z
  .strictObject({
    rules: z.array(SettingsV1RecordingRuleSchema).exactOptional().openapi({ title: 'rules' }),
  })
  .openapi({ title: 'ListRecordingRulesResponse', required: [] })
  .openapi('SettingsV1ListRecordingRulesResponse')

const SettingsV1UpsertRecordingRuleRequestSchema = z
  .strictObject({
    id: z
      .string()
      .exactOptional()
      .openapi({
        title: 'id',
        description:
          'The unique id of the recording rule. If an id is not provided, this will\n create a new recording rule. If an id is provided, it will replace the\n existing recording rule.',
      }),
    metricName: z.string().exactOptional().openapi({ title: 'metric_name' }),
    matchers: z.array(z.string()).exactOptional().openapi({ title: 'matchers' }),
    groupBy: z.array(z.string()).exactOptional().openapi({ title: 'group_by' }),
    externalLabels: z
      .array(TypesV1LabelPairSchema)
      .exactOptional()
      .openapi({ title: 'external_labels' }),
    generation: z
      .union([
        z
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
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'generation',
        description:
          'The observed generation of this recording rule. If this value does not\n match the generation stored in the database, this upsert will be rejected.',
      }),
    stacktraceFilter: SettingsV1StacktraceFilterSchema.nullable()
      .exactOptional()
      .openapi({ title: 'stacktrace_filter' }),
  })
  .openapi({ title: 'UpsertRecordingRuleRequest', required: [] })
  .openapi('SettingsV1UpsertRecordingRuleRequest')

const SettingsV1UpsertRecordingRuleResponseSchema = z
  .strictObject({ rule: SettingsV1RecordingRuleSchema.exactOptional().openapi({ title: 'rule' }) })
  .openapi({ title: 'UpsertRecordingRuleResponse', required: [] })
  .openapi('SettingsV1UpsertRecordingRuleResponse')

export const postSettingsV1RecordingRulesServiceDeleteRecordingRuleRoute = createRoute({
  method: 'post',
  path: '/settings.v1.RecordingRulesService/DeleteRecordingRule',
  tags: ['settings.v1.RecordingRulesService'],
  summary: 'DeleteRecordingRule',
  operationId: 'settings.v1.RecordingRulesService.DeleteRecordingRule',
  request: {
    headers: z.object({
      'Connect-Protocol-Version': z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        ConnectProtocolVersionSchema.openapi({
          param: {
            name: 'Connect-Protocol-Version',
            in: 'header',
            required: true,
            schema: { $ref: '#/components/schemas/connect-protocol-version' },
          },
        }),
      ),
      'Connect-Timeout-Ms': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          ConnectTimeoutHeaderSchema.openapi({
            param: {
              name: 'Connect-Timeout-Ms',
              in: 'header',
              schema: { $ref: '#/components/schemas/connect-timeout-header' },
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
    body: {
      content: { 'application/json': { schema: SettingsV1DeleteRecordingRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SettingsV1DeleteRecordingRuleResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postSettingsV1RecordingRulesServiceGetRecordingRuleRoute = createRoute({
  method: 'post',
  path: '/settings.v1.RecordingRulesService/GetRecordingRule',
  tags: ['settings.v1.RecordingRulesService'],
  summary: 'GetRecordingRule',
  operationId: 'settings.v1.RecordingRulesService.GetRecordingRule',
  request: {
    headers: z.object({
      'Connect-Protocol-Version': z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        ConnectProtocolVersionSchema.openapi({
          param: {
            name: 'Connect-Protocol-Version',
            in: 'header',
            required: true,
            schema: { $ref: '#/components/schemas/connect-protocol-version' },
          },
        }),
      ),
      'Connect-Timeout-Ms': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          ConnectTimeoutHeaderSchema.openapi({
            param: {
              name: 'Connect-Timeout-Ms',
              in: 'header',
              schema: { $ref: '#/components/schemas/connect-timeout-header' },
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
    body: {
      content: { 'application/json': { schema: SettingsV1GetRecordingRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SettingsV1GetRecordingRuleResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postSettingsV1RecordingRulesServiceListRecordingRulesRoute = createRoute({
  method: 'post',
  path: '/settings.v1.RecordingRulesService/ListRecordingRules',
  tags: ['settings.v1.RecordingRulesService'],
  summary: 'ListRecordingRules',
  operationId: 'settings.v1.RecordingRulesService.ListRecordingRules',
  request: {
    headers: z.object({
      'Connect-Protocol-Version': z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        ConnectProtocolVersionSchema.openapi({
          param: {
            name: 'Connect-Protocol-Version',
            in: 'header',
            required: true,
            schema: { $ref: '#/components/schemas/connect-protocol-version' },
          },
        }),
      ),
      'Connect-Timeout-Ms': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          ConnectTimeoutHeaderSchema.openapi({
            param: {
              name: 'Connect-Timeout-Ms',
              in: 'header',
              schema: { $ref: '#/components/schemas/connect-timeout-header' },
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
    body: {
      content: { 'application/json': { schema: SettingsV1ListRecordingRulesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SettingsV1ListRecordingRulesResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postSettingsV1RecordingRulesServiceUpsertRecordingRuleRoute = createRoute({
  method: 'post',
  path: '/settings.v1.RecordingRulesService/UpsertRecordingRule',
  tags: ['settings.v1.RecordingRulesService'],
  summary: 'UpsertRecordingRule',
  operationId: 'settings.v1.RecordingRulesService.UpsertRecordingRule',
  request: {
    headers: z.object({
      'Connect-Protocol-Version': z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        ConnectProtocolVersionSchema.openapi({
          param: {
            name: 'Connect-Protocol-Version',
            in: 'header',
            required: true,
            schema: { $ref: '#/components/schemas/connect-protocol-version' },
          },
        }),
      ),
      'Connect-Timeout-Ms': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          ConnectTimeoutHeaderSchema.openapi({
            param: {
              name: 'Connect-Timeout-Ms',
              in: 'header',
              schema: { $ref: '#/components/schemas/connect-timeout-header' },
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
    body: {
      content: { 'application/json': { schema: SettingsV1UpsertRecordingRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SettingsV1UpsertRecordingRuleResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})
