import { createRoute, z } from '@hono/zod-openapi'

const APIErrorSchema = z
  .object({
    errors: z
      .array(
        z
          .object({
            code: z.string().exactOptional().openapi({ example: '103' }),
            detail: z.string().exactOptional().openapi({ example: 'Detailed error message' }),
            status: z.string().exactOptional().openapi({ example: '400' }),
            title: z.string().exactOptional().openapi({ example: 'Error title' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ description: 'API invocation or processing error', required: [] })
  .openapi('APIError')

const AuthorizationErrorSchema = z
  .object({
    message: z.string().exactOptional().openapi({ example: 'No API key found in request' }),
  })
  .openapi({ description: 'API Platform authorization (API token) error', required: [] })
  .openapi('AuthorizationError')

const VeteranStatusConfirmationSchema = z
  .object({
    veteran_status: z
      .enum(['confirmed', 'not confirmed'])
      .exactOptional()
      .openapi({
        description:
          'Whether the system could confirm the Veteran status of an individual based on traits\n',
      }),
  })
  .openapi({ description: 'Veteran status confirmation for an individual', required: [] })
  .openapi('VeteranStatusConfirmation')

const VeteranStatusRequestSchema = z
  .object({
    birth_date: z
      .string()
      .openapi({
        description: 'Birth date for the person of interest in any valid ISO8601 format',
        example: '1965-01-01',
      }),
    first_name: z
      .string()
      .openapi({ description: 'First name for the person of interest', example: 'John' }),
    gender: z
      .enum(['M', 'F'])
      .exactOptional()
      .openapi({
        description: 'Optional gender of M or F for the person of interest',
        example: 'M',
      }),
    last_name: z
      .string()
      .openapi({ description: 'Last name for the person of interest', example: 'Doe' }),
    middle_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional middle name for the person of interest',
        example: 'Theodore',
      }),
    ssn: z
      .string()
      .openapi({
        description: 'Social Security Number for the person of interest with or without dashes',
        example: '555-55-5555',
      }),
  })
  .openapi({
    description: "Attributes required to retrieve a Veteran's status",
    required: ['ssn', 'first_name', 'last_name', 'birth_date'],
  })
  .openapi('VeteranStatusRequest')

const ApikeySecurityScheme = { in: 'header', name: 'apikey', type: 'apiKey' }

export const postStatusRoute = createRoute({
  method: 'post',
  path: '/status',
  tags: ['veteran_confirmation_status'],
  summary: "Get confirmation about an individual's Veteran status according to the VA",
  operationId: 'getVeteranStatus',
  request: {
    body: {
      content: { 'application/json': { schema: VeteranStatusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Confirmation status successfully retrieved',
      content: { 'application/json': { schema: VeteranStatusConfirmationSchema } },
    },
    400: {
      description: 'Bad request - invalid or missing query parameters',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    401: {
      description: 'Missing API token',
      content: { 'application/json': { schema: AuthorizationErrorSchema } },
    },
    403: {
      description: 'Invalid API token',
      content: { 'application/json': { schema: AuthorizationErrorSchema } },
    },
    503: { description: 'We encountered a temporary error. Check back in the future.' },
  },
  security: [{ apikey: [] }],
})
