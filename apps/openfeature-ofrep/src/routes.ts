import { createRoute, z } from '@hono/zod-openapi'

const ContextSchema = z
  .looseObject({ targetingKey: z.string().exactOptional() })
  .openapi({
    description:
      'Evaluation context containing information used to evaluate feature flags. The context\nmay include an optional `targetingKey` identifying the subject of the evaluation, along\nwith additional properties such as user attributes, session data, or request metadata\nthat can be used for targeting rules.\n',
    example: {
      targetingKey: 'user-123',
      email: 'user@example.com',
      plan: 'premium',
      country: 'CA',
    },
    required: [],
  })
  .openapi('Context')

const BulkEvaluationRequestSchema = z
  .object({ context: ContextSchema })
  .openapi({
    description:
      'Request body for bulk flag evaluation. Contains a static context that will be used \nto evaluate all flags.\n',
    required: ['context'],
  })
  .openapi('BulkEvaluationRequest')

const KeySchema = z
  .string()
  .openapi({
    description:
      'The unique identifier (key) of the feature flag. This is used to reference a specific \nflag in the flag management system.\n',
    example: 'discount-banner',
  })
  .openapi('Key')

const MetadataSchema = z
  .record(z.string(), z.xor([z.boolean(), z.string(), z.number()]))
  .openapi({
    description:
      'Arbitrary metadata object that can contain any additional information about flags or \nflag sets. This metadata is useful for debugging and telemetry purposes.\n',
  })
  .openapi('Metadata')

const FlagMetadataDescriptionSchema = z
  .any()
  .openapi({
    description:
      'Arbitrary metadata for the flag, useful for telemetry and documentary purposes.\n',
  })
  .openapi('FlagMetadataDescription')

const FlagMetadataExamplesSchema = z
  .any()
  .openapi({
    description: 'Example metadata structure for flags',
    example: { team: 'ecommerce', businessPurpose: 'experiment', owner: 'product-team' },
  })
  .openapi('FlagMetadataExamples')

const BooleanFlagSchema = z
  .object({ value: z.boolean() })
  .openapi({
    description: 'A boolean typed flag value. Used for simple on/off feature flags.',
    required: ['value'],
  })
  .openapi('BooleanFlag')

const StringFlagSchema = z
  .object({ value: z.string() })
  .openapi({ description: 'A string typed flag value.', required: ['value'] })
  .openapi('StringFlag')

const IntegerFlagSchema = z
  .object({ value: z.int() })
  .openapi({ description: 'An integer typed flag value.', required: ['value'] })
  .openapi('IntegerFlag')

const FloatFlagSchema = z
  .object({ value: z.float32() })
  .openapi({ description: 'A float typed flag value.', required: ['value'] })
  .openapi('FloatFlag')

const ObjectFlagSchema = z
  .object({ value: z.looseObject({}) })
  .openapi({ description: 'An object typed flag value.', required: ['value'] })
  .openapi('ObjectFlag')

const CodeDefaultFlagSchema = z
  .looseObject({})
  .openapi({
    description:
      'A flag evaluation that defers to the code default value. When a flag evaluation returns \nthis type, it indicates that the provider should use the default value specified in the \napplication code rather than a value from the flag management system.\n\n**Note**: This schema has no `value` property. The provider must use the code default \nvalue when processing this response.\n',
  })
  .openapi('CodeDefaultFlag')

const EvaluationSuccessSchema = z
  .object({
    key: KeySchema.exactOptional(),
    reason: z
      .enum(['STATIC', 'TARGETING_MATCH', 'SPLIT', 'DISABLED', 'UNKNOWN'])
      .exactOptional()
      .openapi({
        description:
          'An OpenFeature reason code indicating why the flag was evaluated to this value. \nSee https://openfeature.dev/specification/types/#resolution-reason for reason code definitions.\n',
      }),
    variant: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Variant identifier for the evaluated feature flag value. Represents a specific variation \nor configuration of the feature flag.\n',
      }),
    metadata: MetadataSchema.and(FlagMetadataDescriptionSchema)
      .and(FlagMetadataExamplesSchema)
      .exactOptional(),
  })
  .openapi({ required: [] })
  .and(z.looseObject({}).openapi({ required: ['key', 'reason'] }))
  .superRefine((val, ctx) => {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (!Object.hasOwn(val, 'key')) {
        ctx.addIssue({ code: 'custom' })
      }
      if (!Object.hasOwn(val, 'reason')) {
        ctx.addIssue({ code: 'custom' })
      }
    }
  })
  .and(
    z.xor([
      BooleanFlagSchema,
      StringFlagSchema,
      IntegerFlagSchema,
      FloatFlagSchema,
      ObjectFlagSchema,
      CodeDefaultFlagSchema,
    ]),
  )
  .openapi({
    description:
      'Successful feature flag evaluation response. The value property is present \nfor all flag types except `codeDefaultFlag`, which indicates the provider should use the \ncode default value.\n',
    required: ['key', 'reason'],
  })
  .openapi('EvaluationSuccess')

const ErrorDetailsSchema = z
  .string()
  .openapi({
    description:
      'A human-readable error description providing additional context about the evaluation \nfailure. Useful for logging, debugging, and monitoring purposes.\n',
  })
  .openapi('ErrorDetails')

const EvaluationFailureSchema = z
  .object({
    key: KeySchema,
    errorCode: z
      .enum(['PARSE_ERROR', 'TARGETING_KEY_MISSING', 'INVALID_CONTEXT', 'GENERAL'])
      .openapi({
        description:
          'OpenFeature compatible error code indicating the type of error. See \nhttps://openfeature.dev/specification/types#error-code for error code definitions.\n',
      }),
    errorDetails: ErrorDetailsSchema.exactOptional(),
    metadata: MetadataSchema.and(FlagMetadataDescriptionSchema)
      .and(FlagMetadataExamplesSchema)
      .exactOptional(),
  })
  .openapi({
    description:
      'Feature flag evaluation failure response. Returned when a feature flag evaluation fails, such as when \nthe context is invalid, required targeting keys are missing, or parsing errors occur. \n',
    required: ['key', 'errorCode'],
  })
  .openapi('EvaluationFailure')

const EventStreamEndpointSchema = z
  .object({
    origin: z
      .url()
      .exactOptional()
      .openapi({
        description:
          'The scheme + host + optional port portion of the endpoint URL.\nIf absent, providers should use their configured OFREP base URL origin.\n',
        example: 'https://sse.example.com',
      }),
    requestUri: z
      .string()
      .regex(/^\//)
      .openapi({
        description: 'The path + query portion of the endpoint URL. Must start with `/`.\n',
        example: '/event-stream?channels=env_abc123_v1',
      }),
  })
  .openapi({
    required: ['requestUri'],
    description:
      'Structured endpoint components for deployments that need to override\nthe origin cleanly while preserving the request target. When present,\nproviders construct the connection URL as `origin + requestUri`. If\n`origin` is absent, providers should use their configured OFREP base\nURL origin.\n',
  })
  .openapi('EventStreamEndpoint')

const EventStreamSchema = z
  .xor([
    z
      .any()
      .refine(
        (val) =>
          !z
            .unknown()
            .superRefine((val, ctx) => {
              if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                if (!Object.hasOwn(val, 'endpoint')) {
                  ctx.addIssue({ code: 'custom' })
                }
              }
            })
            .openapi({ required: ['endpoint'] })
            .safeParse(val).success,
      )
      .openapi({ required: ['url'], not: { required: ['endpoint'] } }),
    z
      .any()
      .refine(
        (val) =>
          !z
            .unknown()
            .superRefine((val, ctx) => {
              if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                if (!Object.hasOwn(val, 'url')) {
                  ctx.addIssue({ code: 'custom' })
                }
              }
            })
            .openapi({ required: ['url'] })
            .safeParse(val).success,
      )
      .openapi({ required: ['endpoint'], not: { required: ['url'] } }),
  ])
  .and(
    z
      .object({
        type: z
          .string()
          .openapi({
            description:
              'The connection type identifying the push mechanism to use.\nCurrently only `sse` is defined. Providers must ignore entries\nwith unknown types for forward compatibility.\n',
            example: 'sse',
          }),
        url: z
          .url()
          .exactOptional()
          .openapi({
            description:
              "The endpoint URL the client should connect to for real-time\nflag change notifications. This is the default representation and\nis opaque to the provider. The URL may include authentication tokens,\nchannel identifiers, or other query parameters as needed by the\nvendor's infrastructure. Implementations must treat this value as\nsensitive and must not log or persist the full URL including its\nquery string.\n",
            example: 'https://sse.example.com/event-stream?channels=env_abc123_v1',
          }),
        endpoint: EventStreamEndpointSchema.exactOptional(),
        inactivityDelaySec: z
          .int()
          .min(1)
          .default(120)
          .exactOptional()
          .openapi({
            description:
              'Number of seconds of client inactivity (e.g., browser tab hidden,\nmobile app backgrounded) after which the connection should be closed\nto conserve resources. The client must reconnect and perform a full\nunconditional re-fetch when activity resumes. When determining the\neffective inactivity timeout, providers should use a client-side\noverride if configured; otherwise use this value when present;\notherwise default to 120 seconds.\n',
            example: 120,
          }),
      })
      .openapi({ required: ['type'] }),
  )
  .openapi({
    description:
      'A real-time change notification connection endpoint. The `type` field\nidentifies the push mechanism; currently only `sse` is defined. Providers\nmust ignore entries with unknown types for forward compatibility.\nExactly one of `url` or `endpoint` must be provided.\n',
    required: ['type'],
  })
  .openapi('EventStream')

const BulkEvaluationSuccessSchema = z
  .object({
    flags: z
      .array(z.xor([EvaluationSuccessSchema, EvaluationFailureSchema]))
      .openapi({
        description: 'Array of flag evaluations. Each evaluation can be a success or failure.',
      }),
    metadata: MetadataSchema.exactOptional().openapi({
      description:
        'Arbitrary metadata for the flag set, useful for telemetry and documentary purposes.\n',
    }),
    eventStreams: z
      .array(EventStreamSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional array of real-time change notification connections. When present,\nthe provider should connect to any entries with a known type and re-fetch\nflag evaluations when notified of changes. If not present, the provider\nshould continue using polling for change detection. Entries with unknown\ntypes must be ignored for forward compatibility.\n',
      }),
  })
  .openapi({
    description:
      'Success response for bulk flag evaluation. Contains an array of flag evaluations, \nwhere each item can be either a successful evaluation or an evaluation failure. \nThis allows partial success scenarios where some flags may fail while others succeed.\n',
    required: ['flags'],
  })
  .openapi('BulkEvaluationSuccess')

const BulkEvaluationFailureSchema = z
  .object({
    errorCode: z
      .string()
      .openapi({
        description:
          'An error code specific to the bulk evaluation error. See \nhttps://openfeature.dev/specification/types#error-code for error code definitions.\n',
        example: 'INVALID_CONTEXT',
      }),
    errorDetails: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional error details description for logging or debugging purposes',
        example: "Context property 'plan' must be a string",
      }),
  })
  .openapi({
    description:
      'Failure response for bulk evaluation. Returned when the entire bulk evaluation request \nfails (e.g., invalid context, parse errors). Individual flag failures within a successful \nbulk evaluation are represented as evaluationFailure items in the flags array.\n',
    required: ['errorCode'],
  })
  .openapi('BulkEvaluationFailure')

const EvaluationRequestSchema = z
  .object({ context: ContextSchema })
  .openapi({
    description:
      'Request body for single feature flag evaluation. Contains the evaluation context that will be \nused to evaluate the feature flag.\n',
    required: ['context'],
  })
  .openapi('EvaluationRequest')

const ServerEvaluationSuccessSchema = EvaluationSuccessSchema.openapi('ServerEvaluationSuccess')

const SseEventDataSchema = z
  .object({
    type: z
      .string()
      .openapi({
        description:
          'The OFREP event type. Currently only `refetchEvaluation` is defined.\nProviders must ignore unknown values for forward compatibility.\n',
        example: 'refetchEvaluation',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Latest flag configuration cache validation token. If present,\nproviders should include it as the `flagConfigEtag` query parameter\non the re-fetch request.\n',
        example: 'abc123',
      }),
    lastModified: z
      .xor([z.int().min(0), z.iso.datetime({ offset: true })])
      .exactOptional()
      .openapi({
        description:
          'Latest flag configuration timestamp. Supports Unix timestamp in\nseconds (recommended) or an ISO 8601 date-time string.\nIf present, providers should include it as the `flagConfigLastModified`\nquery parameter on the re-fetch request.\n',
        example: 1771622898,
      }),
  })
  .openapi({
    description:
      'JSON payload inside the event `data` field. The `type` field determines\nthe event semantics. Providers must handle `refetchEvaluation` and\nignore unknown values for forward compatibility.\n',
    required: ['type'],
  })
  .openapi('SseEventData')

const SseEventSchema = z
  .object({
    data: z
      .string()
      .pipe(SseEventDataSchema)
      .openapi({
        description:
          'JSON-encoded event payload. Providers must parse this string as JSON\nand inspect the `type` field to determine behavior.\n',
      }),
    event: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The SSE event type. Always `message` for OFREP events. Providers\nmust inspect `data.type` rather than this field for event routing.\n',
        example: 'message',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Event identifier used by SSE clients for resume semantics via\n`Last-Event-ID`.\n',
        example: 'evt-1234',
      }),
    retry: z
      .int()
      .min(0)
      .exactOptional()
      .openapi({ description: 'Reconnection time in milliseconds suggested by the server.\n' }),
  })
  .openapi({
    description:
      'Schema for a single Server-Sent Event in the flag configuration change\nnotification stream. The `data` field contains a JSON-encoded payload\nthat providers must parse to determine the event type and any metadata.\n',
    required: ['data'],
  })
  .openapi('SseEvent')

const FlagNotFoundSchema = z
  .object({
    key: KeySchema,
    errorCode: z
      .literal('FLAG_NOT_FOUND')
      .openapi({ description: 'Error code indicating the flag was not found' }),
    errorDetails: ErrorDetailsSchema.exactOptional(),
    metadata: MetadataSchema.and(FlagMetadataDescriptionSchema)
      .and(FlagMetadataExamplesSchema)
      .exactOptional(),
  })
  .openapi({
    description:
      'Feature flag not found response. Returned when a requested feature flag key does not exist in the \nflag management system. This can be an expected response in certain flag management systems. \nThis is distinct from evaluation failures, which occur when a flag exists but cannot be evaluated.\n',
    required: ['key', 'errorCode'],
  })
  .openapi('FlagNotFound')

const GeneralErrorResponseSchema = z
  .object({ errorDetails: ErrorDetailsSchema.exactOptional() })
  .openapi({
    description:
      'General error response for unexpected server errors (500 status). Used when the \nserver encounters an internal error that prevents flag evaluation.\n',
    required: [],
  })
  .openapi('GeneralErrorResponse')

const FlagConfigEtagParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'flagConfigEtag',
      description:
        'Optional ETag metadata provided by an event stream for change-triggered\nre-fetches (see ADR-0008). This is not a standard HTTP conditional request\nheader; it is metadata for server-side cache validation and freshness\nchecks. It should only be included when the request is directly triggered\nby a received change notification event.\n',
      schema: { type: 'string' },
      required: false,
      example: '550e8400-e29b-41d4-a716-446655440000',
    },
  })

const FlagConfigLastModifiedParamsSchema = ((schema) =>
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
  ]))(z.xor([z.int().min(0), z.iso.datetime({ offset: true })]))
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'flagConfigLastModified',
      description:
        'Optional last-modified metadata provided by an event stream for\nchange-triggered re-fetches (see ADR-0008). Supports Unix timestamp in\nseconds (recommended) or an ISO 8601 date-time string, and is\ntransported as query metadata rather than `If-Modified-Since`. It should\nonly be included when the request is directly triggered by a received\nchange notification event.\n',
      schema: {
        oneOf: [
          { type: 'integer', minimum: 0 },
          { type: 'string', format: 'date-time' },
        ],
      },
      required: false,
      examples: { epochSeconds: { value: 1771622898 }, isoDate: { value: '2026-02-20T21:28:18Z' } },
    },
  })

const BearerAuthSecurityScheme = {
  description:
    'Optional Bearer token authentication. If supported by the flag management system, \nclients can authenticate using a Bearer token in the `Authorization` header following \nthe format: `Authorization: Bearer <token>`.\n',
  type: 'http',
  scheme: 'bearer',
  bearerFormat: 'JWT',
}

const ApiKeyAuthSecurityScheme = {
  description:
    'Optional API key authentication. If supported by the flag management system, clients \ncan authenticate by providing an API key in the `X-API-Key` header.\n',
  type: 'apiKey',
  in: 'header',
  name: 'X-API-Key',
}

export const postOfrepV1EvaluateFlagsKeyRoute = createRoute({
  method: 'post',
  path: '/ofrep/v1/evaluate/flags/{key}',
  tags: ['OFREP Core'],
  summary: 'Evaluate A Single Feature Flag',
  description:
    'Evaluates a single feature flag by its key. This endpoint is used by **server-side providers** \nfor dynamic context evaluation, where each evaluation request includes the evaluation context.\n\nThe endpoint returns the evaluated flag value along with metadata including the evaluation \nreason, variant, and any flag-specific metadata. The flag value can be one of several types: \nboolean, string, integer, float, object, or a code default (indicating the provider should \nuse the code default value).\n\n**Use Case**: Server-side applications where evaluation context may change between requests \nand real-time targeting decisions are required.\n',
  operationId: 'evaluateFlag',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            in: 'path',
            required: true,
            description: 'The unique identifier (key) of the feature flag',
            schema: { type: 'string' },
            example: 'discount-banner',
          },
        }),
    }),
    body: {
      description: 'Evaluation request containing the context for flag evaluation',
      content: {
        'application/json': {
          schema: EvaluationRequestSchema,
          example: {
            context: {
              targetingKey: 'user-123',
              email: 'user@example.com',
              'custom-plan': 'premium',
              country: 'CA',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful flag evaluation. Returns the evaluated flag value with metadata.',
      content: {
        'application/json': {
          schema: ServerEvaluationSuccessSchema,
          example: {
            key: 'discount-banner',
            value: true,
            reason: 'TARGETING_MATCH',
            variant: 'enabled',
          },
        },
      },
    },
    400: {
      description: 'Bad evaluation request. The request is malformed or contains invalid context.',
      content: {
        'application/json': {
          schema: EvaluationFailureSchema,
          example: {
            key: 'my-flag',
            errorCode: 'INVALID_CONTEXT',
            errorDetails: "Context property 'plan' must be a string",
          },
        },
      },
    },
    401: {
      description: 'Unauthorized. Authentication credentials are missing, invalid, or expired.',
    },
    403: {
      description:
        'Forbidden. The client does not have permission to access the requested resource.',
    },
    404: {
      description:
        'Flag not found. The specified flag key does not exist in the flag management system.',
      content: {
        'application/json': {
          schema: FlagNotFoundSchema,
          example: {
            key: 'non-existent-flag',
            errorCode: 'FLAG_NOT_FOUND',
            errorDetails: "Flag 'non-existent-flag' was not found",
          },
        },
      },
    },
    429: {
      description: 'Too Many Requests. Rate limit has been exceeded.',
      headers: z.object({
        'Retry-After': z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Indicates when to retry the request again. Can be either a date-time string \nor a number of seconds to wait.\n',
            param: { required: false },
            example: '2024-02-07T12:00:00Z',
          }),
      }),
    },
    500: {
      description:
        'Internal Server Error. An unexpected error occurred on the server that prevented flag evaluation.',
      content: {
        'application/json': {
          schema: GeneralErrorResponseSchema,
          example: {
            errorDetails: 'An internal server error occurred while processing the request',
          },
        },
      },
    },
  },
})

export const postOfrepV1EvaluateFlagsRoute = createRoute({
  method: 'post',
  path: '/ofrep/v1/evaluate/flags',
  tags: ['OFREP Core'],
  summary: 'Bulk Evaluate All Feature Flags',
  description:
    "Evaluates all feature flags in a single request using a static context. This endpoint is \nused by **client-side providers** for static context evaluation, where all flags are evaluated \nonce and then cached locally for subsequent use.\n\nThe endpoint returns an array of all flag evaluations, where each flag can be either a \nsuccessful evaluation or an evaluation failure. The response includes an ETag header for \ncache validation, allowing clients to use the `If-None-Match` header to avoid unnecessary \nre-evaluation when flags haven't changed.\n",
  operationId: 'evaluateFlagsBulk',
  request: {
    headers: z.object({
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'If-None-Match',
            description:
              "Optional ETag value from a previous bulk evaluation response. If provided and the \nETag matches the current flag set, the server will return a 304 Not Modified response, \nindicating that flags haven't changed since the last evaluation.\n",
            schema: { type: 'string' },
            required: false,
            example: 'abc123xyz',
          },
        }),
    }),
    query: z.object({
      flagConfigEtag: FlagConfigEtagParamsSchema,
      flagConfigLastModified: FlagConfigLastModifiedParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: BulkEvaluationRequestSchema,
          example: {
            context: {
              targetingKey: 'user-456',
              email: 'user@example.com',
              plan: 'free',
              country: 'CA',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful bulk evaluation.',
      content: {
        'application/json': {
          schema: BulkEvaluationSuccessSchema,
          example: {
            flags: [
              {
                key: 'discount-banner',
                value: true,
                reason: 'TARGETING_MATCH',
                variant: 'enabled',
              },
              { key: 'theme-color', value: 'blue', reason: 'STATIC', variant: 'default' },
              {
                key: 'non-existent-flag',
                errorCode: 'FLAG_NOT_FOUND',
                errorDetails: "Flag 'non-existent-flag' was not found",
              },
            ],
            eventStreams: [
              {
                type: 'sse',
                url: 'https://sse.example.com/event-stream?channels=env_abc123_v1',
                inactivityDelaySec: 120,
              },
            ],
            metadata: { version: 'v12' },
          },
        },
      },
      headers: z.object({
        ETag: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Entity tag (ETag) representing the current state of all flags. Clients should \ninclude this value in subsequent requests using the `If-None-Match` header for \ncache validation.\n',
            example: 'abc123xyz',
            param: { required: false },
          }),
      }),
    },
    304: {
      description:
        "Not Modified. The flags haven't changed since the last evaluation (ETag matches). No response body is returned.\n",
    },
    400: {
      description: 'Bad evaluation request. The request is malformed or contains invalid context.',
      content: {
        'application/json': {
          schema: BulkEvaluationFailureSchema,
          example: {
            errorCode: 'INVALID_CONTEXT',
            errorDetails: "Context property 'plan' must be a string",
          },
        },
      },
    },
    401: {
      description: 'Unauthorized. Authentication credentials are missing, invalid, or expired.',
    },
    403: {
      description:
        'Forbidden. The client does not have permission to access the requested resource.',
    },
    429: {
      description: 'Too Many Requests. Rate limit has been exceeded.',
      headers: z.object({
        'Retry-After': z
          .xor([
            z.iso.datetime({ offset: true }),
            z.int().openapi({ description: 'Number of seconds to wait before retrying' }),
          ])
          .exactOptional()
          .openapi({
            description:
              'Indicates when to retry the request again. Can be either a date-time string \nor a number of seconds to wait.\n',
            example: '2024-02-07T12:00:00Z',
            param: { required: false },
          }),
      }),
    },
    500: {
      description:
        'Internal server error. An unexpected error occurred on the server that prevented flag evaluation.',
      content: {
        'application/json': {
          schema: GeneralErrorResponseSchema,
          example: {
            errorDetails: 'An internal server error occurred while processing the request',
          },
        },
      },
    },
  },
})
