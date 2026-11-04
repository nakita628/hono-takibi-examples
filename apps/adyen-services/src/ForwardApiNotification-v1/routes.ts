import { createRoute, z } from '@hono/zod-openapi'

const ForwardApiNotificationDataSchema = z
  .strictObject({
    amountCurrency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).',
      }),
    amountValue: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes).',
      }),
    eventDateTime: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The transaction date and time.' }),
    externalNetworkTxReferenceFound: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the `networkTxReferencePaths` matched a reference in the third-party response.',
      }),
    externalNetworkTxReferenceRequested: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if a `networkTxReferencePaths` value was provided in the request.',
      }),
    externalPartyResponseBody: z
      .string()
      .exactOptional()
      .openapi({ description: 'The raw response body returned by the third-party service.' }),
    externalPsp: z
      .string()
      .openapi({ description: 'The third-party service that processed the payment request.' }),
    externalPspTransactionStatus: z
      .string()
      .exactOptional()
      .openapi({ description: 'The transaction status returned by the third-party service.' }),
    externalTransactionLinkIdFound: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the `transactionLinkIdPaths` matched a reference in the third-party response.',
      }),
    externalTransactionLinkIdRequested: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if a `transactionLinkIdPaths` value was provided in the request.',
      }),
    merchantAccountCode: z
      .string()
      .openapi({ description: 'The merchant account that is used to process the payment.' }),
    merchantCountryCode: z
      .string()
      .openapi({ description: 'The country of the merchant account.' }),
    merchantReference: z
      .string()
      .openapi({ description: 'Your reference to uniquely identify the payment.' }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character reference associated with the request. This value is globally unique, so you can use it as the reference when you communicate with us about this request.",
      }),
    scheme: z
      .string()
      .openapi({
        description: 'The card network used for the transaction. For example, **visa** or **mc**.',
      }),
    shopperReference: z
      .string()
      .openapi({
        description:
          'Your reference to uniquely identify this shopper, for example user ID or account ID.',
      }),
    storedPaymentMethodId: z
      .string()
      .openapi({ description: 'The unique identifier of the token.' }),
  })
  .openapi({
    required: [
      'eventDateTime',
      'externalPsp',
      'merchantAccountCode',
      'merchantCountryCode',
      'merchantReference',
      'pspReference',
      'scheme',
      'shopperReference',
      'storedPaymentMethodId',
    ],
  })
  .openapi('ForwardApiNotificationData')

const ForwardApiNotificationRequestSchema = z
  .strictObject({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time when the webhook was created.' }),
    data: ForwardApiNotificationDataSchema.exactOptional().openapi({
      description: 'The details of the Forward API request.',
    }),
    environment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    type: z.string().openapi({ description: 'The type of notification.' }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'The version of this webhook type.' }),
  })
  .openapi({ required: ['createdAt', 'type'] })
  .openapi('ForwardApiNotificationRequest')

const ForwardApiNotificationResponseSchema = z
  .strictObject({
    notificationResponse: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Respond with any **2xx** HTTP status code to [accept the webhook](https://docs.adyen.com/development-resources/webhooks/#accept-webhooks).',
      }),
  })
  .openapi({ required: [] })
  .openapi('ForwardApiNotificationResponse')

const PostForwardApiNotificationRecurringForwardApiNotificationExample = {
  summary: 'Forward Api Request',
  value: {
    type: 'forwardApi.notification',
    version: '1',
    createdAt: '2023-02-27T16:14:06+01:00',
    environment: 'test',
    data: {
      pspReference: 'QFQTPCQ8HXSKGK82',
      shopperReference: 'YOUR_SHOPPER_REFERENCE',
      storedPaymentMethodId: 'M5N7TQ4TG5PFWR50',
      scheme: 'visa',
      externalPsp: 'adyen',
      merchantReference: 'YOUR_ORDER_REFERENCE',
      externalPspTransactionStatus: 'Authorised',
      eventDateTime: '2023-02-27T16:14:06+01:00',
      merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
      merchantCountryCode: 'NL',
      amountValue: 100,
      amountCurrency: 'EUR',
      externalPartyResponseBody: '{"status": "success"}',
    },
  },
}

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const forwardApiNotificationPostWebhook = {
  method: 'post',
  path: '/forwardApi.notification',
  tags: ['General'],
  summary: 'Forward API request completed',
  description: 'Adyen forwarded a payment request to the third-party service on your behalf.',
  operationId: 'post-forwardApi.notification',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ForwardApiNotificationRequestSchema,
          examples: {
            'recurring-forwardApi.notification':
              PostForwardApiNotificationRecurringForwardApiNotificationExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: ForwardApiNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}
