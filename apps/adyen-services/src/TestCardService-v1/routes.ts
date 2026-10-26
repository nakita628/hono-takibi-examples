import { createRoute, z } from '@hono/zod-openapi'

const AvsAddressSchema = z
  .object({
    streetAddress: z
      .string()
      .openapi({
        description:
          'The street and house number of the address.\n\nExample: 1 Infinite Loop, Cupertino.',
      }),
    zip: z
      .string()
      .exactOptional()
      .openapi({ description: 'The zip or post code of the address.\n\nExample: CA 95014' }),
  })
  .openapi({ required: ['streetAddress'] })
  .openapi('AvsAddress')

const TestCardRangeSchema = z
  .object({
    address: AvsAddressSchema.exactOptional().openapi({
      description:
        'Contains the billing address of the card holder. The address details need to be AVS-compliant, which means that you need to provide at least street address.',
    }),
    cardHolderName: z
      .string()
      .openapi({
        description:
          'The name of the card holder, as it appears on the card, for the test card range.',
      }),
    cvc: z
      .string()
      .exactOptional()
      .openapi({ description: 'The test card range security code.\n\nExample: 123' }),
    expiryMonth: z
      .enum([
        'APRIL',
        'AUGUST',
        'DECEMBER',
        'FEBRUARY',
        'JANUARY',
        'JULY',
        'JUNE',
        'MARCH',
        'MAY',
        'NOVEMBER',
        'OCTOBER',
        'SEPTEMBER',
      ])
      .openapi({
        description:
          'Expiry month for the test card range.\n\nAllowed values:\n* JANUARY\n* FEBRUARY\n* MARCH\n* APRIL\n* MAY\n* JUNE\n* JULY\n* AUGUST\n* SEPTEMBER\n* OCTOBER\n* NOVEMBER\n* DECEMBER',
      }),
    expiryYear: z
      .int32()
      .openapi({ description: 'Expiry year for the test card range.\n\nExample: 2020' }),
    rangeEnd: z
      .string()
      .openapi({
        description:
          'The last test card number in the test card range (inclusive):\n\n* Min 6, max 19 digits\n* BIN compliant\nExample: 5432 1234 1234 4321',
      }),
    rangeStart: z
      .string()
      .openapi({
        description:
          'The first test card number in the test card range (inclusive):\n\n* Min 6, max 19 digits\n* BIN compliant\nExample: 5432 1234 1234 1234',
      }),
    threeDDirectoryServerResponse: z
      .enum(['N', 'U', 'Y'])
      .exactOptional()
      .openapi({
        description:
          '3D Secure server response. It notifies whether the specified card holder is enrolled in a 3D Secure service. Possible values:\n\n* Y (Authentication available)\n* N (Card holder not enrolled/not participating)\n* U (Unable to authenticate)',
      }),
    threeDPassword: z
      .string()
      .exactOptional()
      .openapi({ description: 'The password used for 3D Secure authentication.' }),
    threeDUsername: z
      .string()
      .exactOptional()
      .openapi({ description: 'The username used for 3D Secure authentication.' }),
  })
  .openapi({ required: ['rangeStart', 'rangeEnd', 'expiryMonth', 'expiryYear', 'cardHolderName'] })
  .openapi('TestCardRange')

const CreateTestCardRangesRequestSchema = z
  .object({
    accountCode: z
      .string()
      .openapi({
        description: 'The code of the account, for which the test card ranges should be created.',
      }),
    accountTypeCode: z
      .string()
      .openapi({
        description:
          'The type of the account, for which the test card ranges should be created.\n\nPermitted values:\n* Company\n* MerchantAccount\n> These values are case-sensitive.',
      }),
    testCardRanges: z
      .array(TestCardRangeSchema)
      .openapi({ description: 'A list of test card ranges to create.' }),
  })
  .openapi({ required: ['accountTypeCode', 'accountCode', 'testCardRanges'] })
  .openapi('CreateTestCardRangesRequest')

const TestCardRangeCreationResultSchema = z
  .object({
    cardNumberRangeEnd: z
      .string()
      .openapi({
        description:
          'The last test card number in the generated test card range.\n\nExample: 5432 1234 1234 4321',
      }),
    cardNumberRangeStart: z
      .string()
      .openapi({
        description:
          'The first test card number in the generated test card range.\n\nExample: 5432 1234 1234 1234',
      }),
    creationResultCode: z
      .enum(['ALREADY_EXISTS', 'CREATED', 'ERROR'])
      .openapi({
        description:
          'Notification message. It informs about the outcome of the operation. Possible values:\n* CREATED\n* ALREADY_EXISTS\n* ERROR',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optional information message about the result.' }),
  })
  .openapi({ required: ['cardNumberRangeStart', 'cardNumberRangeEnd', 'creationResultCode'] })
  .openapi('TestCardRangeCreationResult')

const CreateTestCardRangesResultSchema = z
  .object({
    rangeCreationResults: z
      .array(TestCardRangeCreationResultSchema)
      .openapi({ description: 'The results of the test card creation.' }),
  })
  .openapi({ required: ['rangeCreationResults'] })
  .openapi('CreateTestCardRangesResult')

const ServiceErrorSchema = z
  .object({
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

const ApiKeyAuthSecurityScheme = { in: 'header', name: 'X-API-Key', type: 'apiKey' }

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

export const postCreateTestCardRangesRoute = createRoute({
  method: 'post',
  path: '/createTestCardRanges',
  tags: ['General'],
  summary: 'Creates one or more test card ranges.',
  description: 'Creates one or more test card ranges.',
  operationId: 'post-createTestCardRanges',
  request: {
    body: { content: { 'application/json': { schema: CreateTestCardRangesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: CreateTestCardRangesResultSchema } },
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
