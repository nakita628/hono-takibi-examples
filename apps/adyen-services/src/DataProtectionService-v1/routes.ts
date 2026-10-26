import { createRoute, z } from '@hono/zod-openapi'

const ServiceErrorSchema = z
  .strictObject({
    errorCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error code mapped to the error message.' }),
    errorType: z.string().exactOptional().openapi({ description: 'The category of the error.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short explanation of the issue.' }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PSP reference of the payment.' }),
    status: z.int32().exactOptional().openapi({ description: 'The HTTP response status.' }),
  })
  .openapi({ required: [] })
  .openapi('ServiceError')

const SubjectErasureByPspReferenceRequestSchema = z
  .strictObject({
    forceErasure: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Set this to **true** if you want to delete shopper-related data, even if the shopper has an existing recurring transaction. This only deletes the shopper-related data for the specific payment, but does not cancel the existing recurring transaction.',
      }),
    merchantAccount: z.string().exactOptional().openapi({ description: 'Your merchant account' }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The PSP reference of the payment. We will delete all shopper-related data for this payment.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SubjectErasureByPspReferenceRequest')

const SubjectErasureResponseSchema = z
  .strictObject({
    result: z
      .enum(['ACTIVE_RECURRING_TOKEN_EXISTS', 'ALREADY_PROCESSED', 'PAYMENT_NOT_FOUND', 'SUCCESS'])
      .exactOptional()
      .openapi({ description: 'The result of this operation.' }),
  })
  .openapi({ required: [] })
  .openapi('SubjectErasureResponse')

const ApiKeyAuthSecurityScheme = { type: 'apiKey', name: 'X-API-Key', in: 'header' }

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const postRequestSubjectErasureRoute = createRoute({
  method: 'post',
  path: '/requestSubjectErasure',
  tags: ['General'],
  summary: 'Submit a Subject Erasure Request.',
  description: 'Sends the PSP reference containing the shopper data that should be deleted.',
  operationId: 'post-requestSubjectErasure',
  request: {
    body: {
      content: { 'application/json': { schema: SubjectErasureByPspReferenceRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: SubjectErasureResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})
