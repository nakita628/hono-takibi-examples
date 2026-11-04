import { createRoute, z } from '@hono/zod-openapi'

const AmountSchema = z
  .strictObject({
    currency: z
      .string()
      .length(3)
      .openapi({
        description:
          'The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes) of the amount.',
      }),
    value: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The numeric value of the amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units).',
      }),
  })
  .openapi({ required: ['currency', 'value'] })
  .openapi('Amount')

const AuthenticationDecisionSchema = z
  .strictObject({
    status: z
      .enum(['proceed', 'refused'])
      .openapi({
        description:
          'The status of the authentication. \n\nPossible values: \n\n* **refused** \n\n* **proceed** \n\nFor more information, refer to [Authenticate cardholders using the Authentication SDK](https://docs.adyen.com/issuing/3d-secure/oob-auth-sdk/authenticate-cardholders/).',
      }),
  })
  .openapi({ required: ['status'] })
  .openapi('AuthenticationDecision')

const ChallengeInfoSchema = z
  .strictObject({
    challengeCancel: z
      .enum(['00', '01', '02', '03', '04', '05', '06', '07', '08'])
      .exactOptional()
      .openapi({
        description:
          'Indicator informing the Access Control Server (ACS) and the Directory Server (DS) that the authentication has been cancelled. Possible values:\n* **00**: Data element is absent or value has been sent back with the key `challengeCancel`.\n* **01**: Cardholder selected **Cancel**.\n* **02**: 3DS Requestor cancelled Authentication.\n* **03**: Transaction abandoned.\n* **04**: Transaction timed out at ACS — other timeouts.\n* **05**: Transaction timed out at ACS — first CReq not received by ACS.\n* **06**: Transaction error.\n* **07**: Unknown.\n* **08**: Transaction time out at SDK.',
      }),
    flow: z
      .enum([
        'PWD_OTP_PHONE_FL',
        'PWD_OTP_EMAIL_FL',
        'OOB_TRIGGER_FL',
        'OTP_PHONE_FL',
        'PASSKEY_TRIGGER_FL',
      ])
      .openapi({
        description:
          'The flow used in the challenge. Possible values:\n\n* **PWD_OTP_PHONE_FL**: one-time password (OTP) flow via SMS\n* **PWD_OTP_EMAIL_FL**: one-time password (OTP) flow via email\n* **OOB_TRIGGER_FL**: out-of-band (OOB) flow\n* **OTP_PHONE_FL**: one-time password (OTP) flow via SMS with no passcode\n* **PASSKEY_TRIGGER_FL**: passkey flow',
      }),
    lastInteraction: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The last time of interaction with the challenge.' }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last four digits of the phone number used in the challenge.' }),
    resends: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of times the one-time password (OTP) was resent during the challenge.',
      }),
    retries: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of retries used in the challenge.' }),
  })
  .openapi({ required: ['flow', 'lastInteraction'] })
  .openapi('ChallengeInfo')

const AuthenticationInfoSchema = z
  .strictObject({
    acsTransId: z
      .string()
      .openapi({
        description:
          'Universally unique transaction identifier assigned by the Access Control Server (ACS) to identify a single transaction.',
      }),
    challenge: ChallengeInfoSchema.exactOptional().openapi({
      description:
        'Information about Strong Customer Authentication (SCA). Returned when `type` is **challenge**.',
    }),
    challengeIndicator: z
      .enum(['01', '02', '03', '04', '05', '07', '08', '09', '80', '82'])
      .openapi({
        description:
          'Specifies a preference for receiving a challenge. Possible values:\n\n* **01**: No preference\n* **02**: No challenge requested\n* **03**: Challenge requested (preference)\n* **04**: Challenge requested (mandate)\n* **05**: No challenge requested (transactional risk analysis is already performed)\n* **07**: No challenge requested (SCA is already performed)\n* **08**: No challenge requested (trusted beneficiaries exemption of no challenge required)\n* **09**: Challenge requested (trusted beneficiaries prompt requested if challenge required)\n* **80**: No challenge requested (secure corporate payment with Mastercard)\n* **82**: No challenge requested (secure corporate payment with Visa)\n',
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'Date and time in UTC of the cardholder authentication. \n\n[ISO 8601](https://www.w3.org/TR/NOTE-datetime) format: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**.',
      }),
    deviceChannel: z
      .enum(['app', 'browser', 'ThreeDSRequestorInitiated'])
      .openapi({
        description:
          'Indicates the type of channel interface being used to initiate the transaction. Possible values:\n\n* **app**\n* **browser**\n* **3DSRequestorInitiated** (initiated by a merchant when the cardholder is not available)',
      }),
    dsTransID: z
      .string()
      .openapi({
        description:
          'Universally unique transaction identifier assigned by the DS (card scheme) to identify a single transaction.',
      }),
    exemptionIndicator: z
      .enum([
        'lowValue',
        'secureCorporate',
        'trustedBeneficiary',
        'transactionRiskAnalysis',
        'acquirerExemption',
        'noExemptionApplied',
        'visaDAFExemption',
      ])
      .exactOptional()
      .openapi({
        description:
          'Indicates the exemption type that was applied to the authentication by the issuer, if exemption applied. Possible values:\n\n* **lowValue**\n* **secureCorporate**\n* **trustedBeneficiary**\n* **transactionRiskAnalysis**\n* **acquirerExemption**\n* **noExemptionApplied**\n* **visaDAFExemption**\n',
      }),
    inPSD2Scope: z
      .boolean()
      .openapi({ description: 'Indicates if the purchase was in the PSD2 scope.' }),
    messageCategory: z
      .enum(['payment', 'nonPayment'])
      .openapi({
        description:
          'Identifies the category of the message for a specific use case. Possible values:\n\n* **payment**\n* **nonPayment**',
      }),
    messageVersion: z
      .string()
      .openapi({
        description: 'The `messageVersion` value as defined in the 3D Secure 2 specification.',
      }),
    riskScore: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Risk score calculated from the transaction rules.' }),
    threeDSServerTransID: z
      .string()
      .openapi({
        description:
          'The `threeDSServerTransID` value as defined in the 3D Secure 2 specification.',
      }),
    transStatus: z
      .enum(['Y', 'N', 'R', 'I', 'U'])
      .openapi({
        description:
          'The `transStatus` value as defined in the 3D Secure 2 specification. Possible values:\n\n* **Y**: Authentication / Account verification successful.\n* **N**: Not Authenticated / Account not verified. Transaction denied.\n* **U**: Authentication / Account verification could not be performed.\n* **I**: Informational Only / 3D Secure Requestor challenge preference acknowledged.\n* **R**: Authentication / Account verification rejected by the Issuer.\n',
      }),
    transStatusReason: z
      .enum([
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '80',
        '81',
        '82',
        '83',
        '84',
        '85',
        '86',
        '87',
        '88',
      ])
      .exactOptional()
      .openapi({
        description:
          'Provides information on why the `transStatus` field has the specified value. For possible values, refer to [our docs](https://docs.adyen.com/online-payments/3d-secure/api-reference#possible-transstatusreason-values).',
      }),
    type: z
      .enum(['frictionless', 'challenge'])
      .openapi({
        description:
          'The type of authentication performed. Possible values:\n\n* **frictionless**\n* **challenge**',
      }),
  })
  .openapi({
    required: [
      'acsTransId',
      'challengeIndicator',
      'createdAt',
      'deviceChannel',
      'dsTransID',
      'inPSD2Scope',
      'messageCategory',
      'messageVersion',
      'threeDSServerTransID',
      'transStatus',
      'type',
    ],
  })
  .openapi('AuthenticationInfo')

const PurchaseInfoSchema = z
  .strictObject({
    date: z.string().openapi({ description: 'The date of the purchase.' }),
    merchantName: z
      .string()
      .openapi({ description: 'The name of the business that the cardholder purchased from.' }),
    originalAmount: AmountSchema.openapi({ description: 'The amount of the purchase.' }),
  })
  .openapi({ required: ['date', 'merchantName', 'originalAmount'] })
  .openapi('PurchaseInfo')

const AuthenticationNotificationDataSchema = z
  .strictObject({
    authentication: AuthenticationInfoSchema.openapi({
      description: 'Contains information about the authentication.',
    }),
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
    id: z.string().openapi({ description: 'The unique identifier of the authentication.' }),
    paymentInstrumentId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the payment instrument that was used for the authentication.',
      }),
    purchase: PurchaseInfoSchema.openapi({
      description: 'Contains information about the purchase.',
    }),
    status: z
      .enum(['authenticated', 'rejected', 'error'])
      .openapi({
        description:
          'Outcome of the authentication.\nAllowed values:\n* authenticated\n* rejected\n* error',
      }),
  })
  .openapi({ required: ['authentication', 'id', 'paymentInstrumentId', 'purchase', 'status'] })
  .openapi('AuthenticationNotificationData')

const AuthenticationNotificationRequestSchema = z
  .strictObject({
    data: AuthenticationNotificationDataSchema.openapi({ description: 'Contains event details.' }),
    environment: z
      .string()
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z
      .literal('balancePlatform.authentication.created')
      .openapi({ description: 'Type of notification.' }),
  })
  .openapi({ required: ['data', 'environment', 'type'] })
  .openapi('AuthenticationNotificationRequest')

const BalancePlatformNotificationResponseSchema = z
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
  .openapi('BalancePlatformNotificationResponse')

const PurchaseSchema = z
  .strictObject({
    date: z.iso.datetime({ offset: true }).openapi({ description: 'The time of the purchase.' }),
    merchantName: z.string().openapi({ description: 'The name of the merchant.' }),
    originalAmount: AmountSchema.openapi({
      description: 'The amount of the purchase in the original currency.',
    }),
  })
  .openapi({ required: ['date', 'merchantName', 'originalAmount'] })
  .openapi('Purchase')

const RelayedAuthenticationRequestSchema = z
  .strictObject({
    environment: z
      .string()
      .openapi({
        description:
          'The environment from which the webhook originated.\nPossible values: **test**, **live**.\n',
      }),
    id: z.string().openapi({ description: 'The unique identifier of the challenge.' }),
    paymentInstrumentId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the [payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/get/paymentInstruments/_id_) used for the purchase.',
      }),
    purchase: PurchaseSchema.openapi({ description: 'The details of the purchase.' }),
    threeDSRequestorAppURL: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "URL for auto-switching to the threeDS Requestor App. If not present, the threeDS Requestor App doesn't support auto-switching.",
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z
      .literal('balancePlatform.authentication.relayed')
      .openapi({ description: 'Type of notification.' }),
  })
  .openapi({ required: ['environment', 'id', 'paymentInstrumentId', 'purchase', 'type'] })
  .openapi('RelayedAuthenticationRequest')

const RelayedAuthenticationResponseSchema = z
  .strictObject({
    authenticationDecision: AuthenticationDecisionSchema.openapi({
      description: 'The decision regarding the authentication.',
    }),
  })
  .openapi({ required: ['authenticationDecision'] })
  .openapi('RelayedAuthenticationResponse')

const ResourceSchema = z
  .strictObject({
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.',
      }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the resource.' }),
  })
  .openapi({ required: [] })
  .openapi('Resource')

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

const WebhookAckExample = {
  summary:
    'Respond with your out-of-band authentication decision: "proceed" to continue, "refused" to refuse',
  value: { authenticationDecision: { status: 'proceed' } },
}

const PostBalancePlatformAuthenticationCreatedBalancePlatformAuthenticationCreatedAuthenticatedChallengeExample =
  {
    summary: 'Authentication successful (challenge flow)',
    description: 'Example webhook for a successful authentication (challenge flow)',
    value: {
      data: {
        authentication: {
          acsTransId: '6a4c1709-a42e-4c7f-96c7-1043adacfc97',
          challenge: { flow: 'OOB', lastInteraction: '2022-12-22T15:49:03+01:00' },
          challengeIndicator: '01',
          createdAt: '2022-12-22T15:45:03+01:00',
          deviceChannel: 'app',
          dsTransID: 'a3b86754-444d-46ca-95a2-ada351d3f42c',
          exemptionIndicator: 'lowValue',
          inPSD2Scope: true,
          messageCategory: 'payment',
          messageVersion: '2.2.0',
          riskScore: 0,
          threeDSServerTransID: '6edcc246-23ee-4e94-ac5d-8ae620bea7d9',
          transStatus: 'Y',
          type: 'challenge',
        },
        balancePlatform: 'YOUR_BALANCE_PLATFORM',
        id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
        paymentInstrumentId: 'PI3227C223222B5BPCMFXD2XG',
        purchase: {
          date: '2022-12-22T15:49:03+01:00',
          merchantName: 'TeaShop_NL',
          originalAmount: { currency: 'EUR', value: 1000 },
        },
        status: 'authenticated',
      },
      environment: 'test',
      timestamp: '2022-12-22T15:42:03+01:00',
      type: 'balancePlatform.authentication.created',
    },
  }

const PostBalancePlatformAuthenticationCreatedBalancePlatformAuthenticationCreatedAuthenticatedFrictionlessExample =
  {
    summary: 'Authentication successful (frictionless flow)',
    description: 'Example webhook for a successful authentication (frictionless flow)',
    value: {
      data: {
        authentication: {
          acsTransId: '6a4c1709-a42e-4c7f-96c7-1043adacfc97',
          challengeIndicator: '01',
          createdAt: '2022-12-22T15:45:03+01:00',
          deviceChannel: 'app',
          dsTransID: 'a3b86754-444d-46ca-95a2-ada351d3f42c',
          exemptionIndicator: 'lowValue',
          inPSD2Scope: true,
          messageCategory: 'payment',
          messageVersion: '2.2.0',
          riskScore: 0,
          threeDSServerTransID: '6edcc246-23ee-4e94-ac5d-8ae620bea7d9',
          transStatus: 'Y',
          type: 'frictionless',
        },
        balancePlatform: 'YOUR_BALANCE_PLATFORM',
        id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
        paymentInstrumentId: 'PI3227C223222B5BPCMFXD2XG',
        purchase: {
          date: '2022-12-22T15:49:03+01:00',
          merchantName: 'TeaShop_NL',
          originalAmount: { currency: 'EUR', value: 1000 },
        },
        status: 'authenticated',
      },
      environment: 'test',
      timestamp: '2022-12-22T15:42:03+01:00',
      type: 'balancePlatform.authentication.created',
    },
  }

const PostBalancePlatformAuthenticationCreatedBalancePlatformAuthenticationCreatedRejectedExample =
  {
    summary: 'Authentication rejected',
    description: 'Example webhook for a rejected authentication due to exceeded number of retries',
    value: {
      data: {
        balancePlatform: 'YOUR_BALANCE_PLATFORM',
        id: 'a8fc7a40-6e48-498a-bdc2-494daf0f490a',
        authentication: {
          acsTransId: 'a8fc7a40-6e48-498a-bdc2-494daf0f490a',
          challenge: {
            flow: 'OTP_SMS',
            lastInteraction: '2023-01-19T17:37:13+01:00',
            phoneNumber: '******6789',
            resends: 0,
            retries: 2,
          },
          challengeIndicator: '01',
          createdAt: '2023-01-19T17:07:17+01:00',
          deviceChannel: 'app',
          dsTransID: '59de4e30-7f84-4a77-aaf8-1ca493092ef9',
          exemptionIndicator: 'noExemptionApplied',
          inPSD2Scope: false,
          messageCategory: 'payment',
          messageVersion: '2.2.0',
          threeDSServerTransID: '8bc0fdbd-5c8a-4bed-a171-9d10347e7798',
          transStatus: 'N',
          transStatusReason: '19',
          type: 'challenge',
        },
        paymentInstrumentId: 'PI3227C223222B5BPCMFXD2XG',
        purchase: {
          date: '2022-12-22T15:49:03+01:00',
          merchantName: 'TeaShop_NL',
          originalAmount: { currency: 'EUR', value: 1000 },
        },
        status: 'rejected',
      },
      environment: 'test',
      timestamp: '2022-12-22T15:42:03+01:00',
      type: 'balancePlatform.authentication.created',
    },
  }

const PostBalancePlatformAuthenticationRelayedPostBalancePlatformAuthenticationRelayedExample = {
  summary: 'Out-of-band authentication relayed request webhook',
  description: 'Example webhook for an out-of-band authentication relayed request webhook',
  value: {
    id: '1ea64f8e-d1e1-4b9d-a3a2-3953e385b2c8',
    paymentInstrumentId: 'PI123ABCDEFGHIJKLMN45678',
    purchase: {
      date: '2025-03-06T15:17:55Z',
      merchantName: 'widgetsInc',
      originalAmount: { currency: 'EUR', value: 14548 },
    },
  },
}

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const balancePlatformAuthenticationCreatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.authentication.created',
  tags: ['General'],
  summary: 'Cardholder authenticated',
  description:
    'Adyen sends this webhook when the process of cardholder authentication is finalized, whether it is completed successfully, fails, or expires.',
  operationId: 'post-balancePlatform.authentication.created',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AuthenticationNotificationRequestSchema,
          examples: {
            'balancePlatform-authentication-created-authenticated-challenge':
              PostBalancePlatformAuthenticationCreatedBalancePlatformAuthenticationCreatedAuthenticatedChallengeExample,
            'balancePlatform-authentication-created-authenticated-frictionless':
              PostBalancePlatformAuthenticationCreatedBalancePlatformAuthenticationCreatedAuthenticatedFrictionlessExample,
            'balancePlatform-authentication-created-rejected':
              PostBalancePlatformAuthenticationCreatedBalancePlatformAuthenticationCreatedRejectedExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformAuthenticationRelayedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.authentication.relayed',
  tags: ['Out-of-band'],
  summary: 'Out-of-band authentication requested',
  description:
    'Adyen sends this webhook when a cardholder must perform [out-of-band authentication](https://docs.adyen.com/issuing/3d-secure/oob-auth-sdk/authenticate-cardholders).\n\nTo complete the authentication process, respond to this webhook with an **HTTP 200** response. Include the `authenticationDecision` in the response body.\n\nIf we do not receive the response within two seconds, the authentication process stops.',
  operationId: 'post-balancePlatform.authentication.relayed',
  request: {
    body: {
      content: {
        'application/json': {
          schema: RelayedAuthenticationRequestSchema,
          examples: {
            'post-balancePlatform.authentication.relayed':
              PostBalancePlatformAuthenticationRelayedPostBalancePlatformAuthenticationRelayedExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: RelayedAuthenticationResponseSchema,
          examples: { 'post-balancePlatform.authentication.relayed': WebhookAckExample },
        },
      },
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
  security: [{ BasicAuth: [] }],
}
