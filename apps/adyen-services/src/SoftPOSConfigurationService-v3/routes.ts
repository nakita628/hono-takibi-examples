import { createRoute, z } from '@hono/zod-openapi'

const SubMerchantDataSchema = z
  .object({
    city: z
      .string()
      .exactOptional()
      .openapi({ description: "The city of the sub-merchant's address." }),
    country: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The country/region of the sub-merchant's address, specified as the three-letter country code in [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format.",
      }),
    displayName: z
      .string()
      .openapi({
        description:
          'The name of the sub-merchant as it should appear on the display of the mobile device during transactions.',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The email address of the sub-merchant. Required for American Express.',
      }),
    id: z.string().openapi({ description: 'Your unique identifier of the sub-merchant.' }),
    mcc: z
      .string()
      .openapi({
        description:
          "The sub-merchant's four-digit Merchant Category Code (MCC). This parameter is used to correctly route the transaction.",
      }),
    name: z.string().openapi({ description: 'The name of the sub-merchant.' }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The phone number of the sub-merchant. Required for American Express.',
      }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({ description: "The postal code of the sub-merchant's address, without dashes." }),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The state code of the sub-merchant's address, if applicable for the country or region.",
      }),
    street: z
      .string()
      .exactOptional()
      .openapi({ description: "The street name and house number of the sub-merchant's address." }),
    taxId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The tax ID of the sub-merchant. Required only in Brazil and for Cartes Bancaires in France.\nFor Brazil, this is the 11-digit CPF or 14-digit CNPJ.\nFor France, this is the SIRET, with a maximum of 14 digits.',
      }),
  })
  .openapi({ required: ['displayName', 'id', 'mcc', 'name'] })
  .openapi('SubMerchantData')

const CertificateLoadingRequestSchema = z
  .object({
    merchantAccount: z
      .string()
      .openapi({ description: 'The unique identifier of your merchant account.' }),
    setupToken: z
      .string()
      .openapi({
        description:
          'The setup token provided by the SDK in a Mobile solution for in-person payments. \n- When using the Android SDK, obtain the token through the `MerchantAuthenticationService.authenticate(setupToken)` callback of `AuthenticationService`. \n- When using the iOS SDK, obtain the token through the `PaymentServiceDelegate.register(with:)` callback of `PaymentServiceDelegate`.',
      }),
    store: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reference of the store that you want to process transactions for. Do not include this parameter if your account structure uses merchant accounts as stores, or if you are a registered payment facilitator.',
      }),
    subMerchantData: SubMerchantDataSchema.exactOptional().openapi({
      description:
        'The details of the sub-merchant that you want to process transactions for.Required if you are a registered payment facilitator. Do not include this parameter if you are not a payment facilitator.',
    }),
  })
  .openapi({ required: ['merchantAccount', 'setupToken'] })
  .openapi('CertificateLoadingRequest')

const CertificateLoadingResponseSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the communication session.' }),
    installationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the SDK installation. If you create the [Terminal API](https://docs.adyen.com/point-of-sale/design-your-integration/terminal-api/) transaction request on your backend, use this as the `POIID` in the `MessageHeader` of the request.',
      }),
    merchantAccount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of your merchant account.' }),
    sdkData: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The data that the SDK uses to authenticate responses from the Adyen payments platform. Pass this value to your POS app.',
      }),
    store: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reference of the store that the transactions are processed for.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CertificateLoadingResponse')

const InvalidFieldSchema = z
  .object({
    message: z.string().openapi({ description: 'Description of the validation error.' }),
    name: z.string().openapi({ description: 'The field that has an invalid value.' }),
    value: z.string().openapi({ description: 'The invalid value.' }),
  })
  .openapi({ required: ['message', 'name', 'value'] })
  .openapi('InvalidField')

const DefaultErrorResponseEntitySchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable explanation specific to this occurrence of the problem.',
      }),
    errorCode: z.string().exactOptional().openapi({ description: 'Unique business error code.' }),
    instance: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URI that identifies the specific occurrence of the problem if applicable.',
      }),
    invalidFields: z
      .array(InvalidFieldSchema)
      .exactOptional()
      .openapi({ description: 'Array of fields with validation errors when applicable.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique reference for the request.' }),
    status: z.int32().exactOptional().openapi({ description: 'The HTTP status code.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short, human-readable summary of the problem type.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URI that identifies the validation error type. It points to human-readable documentation for the problem type.',
      }),
  })
  .openapi({
    description: 'Standardized error response following RFC-7807 format',
    externalDocs: { url: 'https://www.rfc-editor.org/rfc/rfc7807' },
    required: [],
  })
  .openapi('DefaultErrorResponseEntity')

const ApiKeyAuthSecurityScheme = { type: 'apiKey', name: 'X-API-Key', in: 'header' }

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const postAuthCertificateRoute = createRoute({
  method: 'post',
  path: '/auth/certificate',
  tags: ['Session authentication'],
  summary: 'Create a communication session',
  description:
    'Establishes a secure communication session between the Mobile SDK and the Adyen payments platform, through mutual authentication. The request sends a setup token that identifies the SDK and the device. The response returns a session token that the SDK can use to authenticate responses received from the Adyen payments platform.',
  operationId: 'post-auth-certificate',
  request: {
    headers: z.object({
      'X-API-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-API-Key',
            in: 'header',
            description: 'The API key to authenticate API requests.',
            required: false,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: CertificateLoadingRequestSchema,
          examples: {
            'authentication-session-request': {
              summary: 'Create a communication session request',
              description: 'Example request payload for creating a communication session.',
              value: {
                merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
                store: 'YOUR_STORE_REFERENCE',
                setupToken: 'SETUP_TOKEN',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    201: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: CertificateLoadingResponseSchema,
          examples: {
            'authentication-session-status-201': {
              summary: 'Create a communication session',
              description: 'The response returned when creating a communication session',
              value: {
                id: 'APP_SESSION_ID',
                installationId: 'INSTALLATION_ID',
                merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
                store: 'YOUR_STORE_REFERENCE',
                sdkData: 'SDK_DATA_BLOB',
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad request - validation failed.',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'authentication-session-status-400': {
              summary: 'Bad request',
              description: 'Merchant or request data failed validation.',
              value: {
                type: 'https://docs.adyen.com/errors/bad-request',
                title: 'Bad request',
                status: 400,
                errorCode: '00_400',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'authentication-session-status-401': {
              summary: 'Unauthorized',
              description: 'Authentication failed.',
              value: {
                type: 'https://docs.adyen.com/errors/unauthorized',
                title: 'Unauthorized',
                status: 401,
                errorCode: '00_401',
              },
            },
          },
        },
      },
    },
    422: {
      description: 'Unprocessable entity - session request could not be processed.',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'authentication-session-status-422': {
              summary: 'Unprocessable entity',
              description: 'Session token or request fields are semantically invalid.',
              value: {
                type: 'https://docs.adyen.com/errors/unprocessable-entity',
                title: 'Unprocessable entity',
                status: 422,
                errorCode: '00_422',
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'authentication-session-status-500': {
              summary: 'Internal server error',
              description: 'An internal error occurred while creating a communication session.',
              value: {
                type: 'https://docs.adyen.com/errors/internal',
                title: 'Internal error',
                status: 500,
                errorCode: '00_500',
              },
            },
          },
        },
      },
    },
  },
})
