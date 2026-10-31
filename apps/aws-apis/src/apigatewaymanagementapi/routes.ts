import { createRoute, z } from '@hono/zod-openapi'

const GoneExceptionSchema = z.any().openapi('GoneException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const ForbiddenExceptionSchema = z.any().openapi('ForbiddenException')

const TimestampIso8601Schema = z.iso.datetime({ offset: true }).openapi('TimestampIso8601')

const StringSchema = z.string().openapi('String')

const IdentitySchema = z
  .object({
    SourceIp: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'sourceIp' },
          description:
            'The source IP address of the TCP connection making the request to API Gateway.',
        }),
    ),
    UserAgent: StringSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'userAgent' }, description: 'The User Agent of the API caller.' }),
    ),
  })
  .openapi({ required: ['SourceIp', 'UserAgent'] })
  .openapi('Identity')

const GetConnectionResponseSchema = z
  .object({
    ConnectedAt: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'connectedAt' },
          description: 'The time in ISO 8601 format for when the connection was established.',
        }),
    ).exactOptional(),
    Identity: IdentitySchema.and(z.any().openapi({ xml: { name: 'identity' } })).exactOptional(),
    LastActiveAt: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'lastActiveAt' },
          description: 'The time in ISO 8601 format for when the connection was last active.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetConnectionResponse')

const PayloadTooLargeExceptionSchema = z.any().openapi('PayloadTooLargeException')

const DataSchema = z
  .string()
  .max(131072)
  .openapi({ description: 'The data to be sent to the client specified by its connection id.' })
  .openapi('Data')

const DeleteConnectionRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteConnectionRequest' })
  .openapi('DeleteConnectionRequest')

const GetConnectionRequestSchema = z
  .object({})
  .openapi({ title: 'GetConnectionRequest' })
  .openapi('GetConnectionRequest')

const PostToConnectionRequestSchema = z
  .object({
    Data: DataSchema.and(
      z
        .any()
        .openapi({
          description: 'The data to be sent to the client specified by its connection id.',
        }),
    ),
  })
  .openapi({ required: ['Data'], title: 'PostToConnectionRequest' })
  .openapi('PostToConnectionRequest')

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

export const getConnectionsConnectionIdRoute = createRoute({
  method: 'get',
  path: '/@connections/{connectionId}',
  description: 'Get information about the connection with the provided id.',
  operationId: 'GetConnection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      connectionId: z
        .string()
        .openapi({
          param: {
            name: 'connectionId',
            in: 'path',
            required: true,
            description: '',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetConnectionResponseSchema } },
    },
    480: {
      description: 'GoneException',
      content: { 'application/json': { schema: GoneExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postConnectionsConnectionIdRoute = createRoute({
  method: 'post',
  path: '/@connections/{connectionId}',
  description: 'Sends the provided data to the specified connection.',
  operationId: 'PostToConnection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      connectionId: z
        .string()
        .openapi({
          param: {
            name: 'connectionId',
            in: 'path',
            required: true,
            description: 'The identifier of the connection that a specific client is using.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Data: z
                .string()
                .max(131072)
                .openapi({
                  description: 'The data to be sent to the client specified by its connection id.',
                }),
            })
            .openapi({ required: ['Data'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'GoneException',
      content: { 'application/json': { schema: GoneExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'PayloadTooLargeException',
      content: { 'application/json': { schema: PayloadTooLargeExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const deleteConnectionsConnectionIdRoute = createRoute({
  method: 'delete',
  path: '/@connections/{connectionId}',
  description: 'Delete the connection with the provided id.',
  operationId: 'DeleteConnection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      connectionId: z
        .string()
        .openapi({
          param: {
            name: 'connectionId',
            in: 'path',
            required: true,
            description: '',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'GoneException',
      content: { 'application/json': { schema: GoneExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})
