import { createRoute, z } from '@hono/zod-openapi'

const String50CharsSchema = z.string().min(1).max(50).openapi('String50Chars')

const ISO8601TimestampSchema = z.string().openapi('ISO8601Timestamp')

const LongSchema = z.int().openapi('Long')

const SessionSchema = z
  .object({
    id: String50CharsSchema.and(
      z.any().openapi({ description: 'A unique identifier for the session' }),
    ).exactOptional(),
    duration: LongSchema.and(
      z.any().openapi({ description: 'The duration of the session.' }),
    ).exactOptional(),
    startTimestamp: ISO8601TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time the event started in ISO 8601 standard date time format. For example, 2014-06-30T19:07:47.885Z',
        }),
    ).exactOptional(),
    stopTimestamp: ISO8601TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time the event terminated in ISO 8601 standard date time format. For example, 2014-06-30T19:07:47.885Z',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the session. Session information is required on ALL events.',
    required: [],
  })
  .openapi('Session')

const String10CharsSchema = z.string().min(1).max(10).openapi('String10Chars')

const String0to1000CharsSchema = z.string().min(0).max(1000).openapi('String0to1000Chars')

const MapOfStringToStringSchema = z
  .record(z.string(), String0to1000CharsSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('MapOfStringToString')

const DoubleSchema = z.float64().openapi('Double')

const MapOfStringToNumberSchema = z
  .record(z.string(), DoubleSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('MapOfStringToNumber')

const EventSchema = z
  .object({
    eventType: String50CharsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name signifying an event that occurred in your app. This is used for grouping and aggregating like events together for reporting purposes.',
        }),
    ),
    timestamp: ISO8601TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time the event occurred in ISO 8601 standard date time format. For example, 2014-06-30T19:07:47.885Z',
        }),
    ),
    session: SessionSchema.and(
      z.any().openapi({ description: 'The session the event occured within. ' }),
    ).exactOptional(),
    version: String10CharsSchema.and(
      z.any().openapi({ description: 'The version of the event.' }),
    ).exactOptional(),
    attributes: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A collection of key-value pairs that give additional context to the event. The key-value pairs are specified by the developer.</p> <p>This collection can be empty or the attribute object can be omitted.</p>',
        }),
    ).exactOptional(),
    metrics: MapOfStringToNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A collection of key-value pairs that gives additional, measurable context to the event. The key-value pairs are specified by the developer.</p> <p>This collection can be empty or the attribute object can be omitted.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['eventType', 'timestamp'],
    description: 'A JSON object representing a batch of unique event occurrences in your app.',
  })
  .openapi('Event')

const StringSchema = z.string().openapi('String')

const BadRequestExceptionSchema = z
  .object({
    message: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'A text description associated with the BadRequestException object.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'An exception object returned when a request fails.', required: [] })
  .openapi('BadRequestException')

const EventListDefinitionSchema = z.array(EventSchema).openapi('EventListDefinition')

const PutEventsInputSchema = z
  .object({
    events: EventListDefinitionSchema.and(
      z.any().openapi({ description: 'An array of Event JSON objects' }),
    ),
  })
  .openapi({
    required: ['events'],
    title: 'PutEventsInput',
    description: 'A container for the data needed for a PutEvent operation',
  })
  .openapi('PutEventsInput')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const post20140605EventsXAmzClientContextRoute = createRoute({
  method: 'post',
  path: '/2014-06-05/events#x-amz-Client-Context',
  description:
    'The PutEvents operation records one or more events. You can have up to 1,500 unique custom events per app, any combination of up to 40 attributes and metrics per custom event, and any number of attribute or metric values.',
  operationId: 'PutEvents',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-Client-Context': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-Client-Context',
            in: 'header',
            required: true,
            description:
              'The client context including the client ID, app title, app version and package name.',
            schema: { type: 'string' },
          },
        }),
      'x-amz-Client-Context-Encoding': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-Client-Context-Encoding',
            in: 'header',
            required: false,
            description: 'The encoding used for the client context.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              events: z
                .array(EventSchema)
                .openapi({ description: 'An array of Event JSON objects' }),
            })
            .openapi({ required: ['events'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Success' },
    400: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})
