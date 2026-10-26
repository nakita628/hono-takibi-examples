import { createRoute, z } from '@hono/zod-openapi'

const CreateSessionRequestSchema = z
  .strictObject({
    merchantAccount: z
      .string()
      .openapi({ description: 'The unique identifier of your merchant account.' }),
    setupToken: z
      .string()
      .max(50000)
      .openapi({
        description:
          'The setup token provided by the POS Mobile SDK. \n- When using the Android POS Mobile SDK, obtain the token through the `AuthenticationService.authenticate(setupToken)` callback of `AuthenticationService`. \n- When using the iOS POS Mobile SDK, obtain the token through the `PaymentServiceDelegate.register(with:)` callback of `PaymentServiceDelegate`.',
      }),
    store: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the store that you want to process transactions for.',
      }),
  })
  .openapi({ required: ['merchantAccount', 'setupToken'] })
  .openapi('CreateSessionRequest')

const CreateSessionResponseSchema = z
  .strictObject({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the session.' }),
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
        description:
          'The unique identifier of the store that you want to process transactions for.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CreateSessionResponse')

const PostSessionsCreateAuthSessionExample = {
  summary: 'Create a communication session',
  description:
    'Establish a communication session between the POS Mobile SDK and the Adyen payments platform',
  value: {
    merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
    setupToken: 'SETUP_TOKEN',
    store: 'YOUR_STORE_ID',
  },
}

const PostSessionsGeneric_201Example = {
  summary: "Example response for request 'createAuthSession'",
  value: {
    id: 'APP_SESSION_ID',
    installationId: 'INSTALLATION_ID',
    merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
    store: 'YOUR_STORE_ID',
    sdkData: 'SDK_DATA_BLOB',
  },
}

const ApiKeyAuthSecurityScheme = { type: 'apiKey', name: 'X-API-Key', in: 'header' }

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const postSessionsRoute = createRoute({
  method: 'post',
  path: '/sessions',
  tags: ['General'],
  summary: 'Create a communication session',
  description:
    'Establishes a secure communications session between the POS Mobile SDK and the Adyen payments platform, through mutual authentication. \nThe request sends a setup token that identifies the SDK and the device. The response returns a session token that the SDK can use to authenticate responses received from the Adyen payments platform.\n>This request applies to **mobile in-person** transactions. You cannot use this request to create online payments sessions. \n\n',
  operationId: 'post-sessions',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CreateSessionRequestSchema,
          examples: { createAuthSession: PostSessionsCreateAuthSessionExample },
        },
      },
    },
  },
  responses: {
    201: {
      description:
        'Created - the request has been fulfilled and has resulted in one or more new resources being created.',
      content: {
        'application/json': {
          schema: CreateSessionResponseSchema,
          examples: { generic: PostSessionsGeneric_201Example },
        },
      },
    },
  },
  deprecated: true,
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})
