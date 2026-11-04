import { createRoute, z } from '@hono/zod-openapi'

const CapabilityProblemEntityRecursiveSchema = z
  .strictObject({
    documents: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of document IDs to which the verification errors related to the capabilities correspond to.',
      }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the entity.' }),
    type: z
      .enum(['BankAccount', 'Document', 'LegalEntity'])
      .exactOptional()
      .openapi({
        description:
          'The type of entity.\n\nPossible values: **LegalEntity**, **BankAccount**, or **Document**.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CapabilityProblemEntityRecursive')

const CapabilityProblemEntitySchema = z
  .strictObject({
    documents: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of document IDs to which the verification errors related to the capabilities correspond to.',
      }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the entity.' }),
    owner: CapabilityProblemEntityRecursiveSchema.exactOptional().openapi({
      description:
        'The owner of the entity that has an error. For example, if the `entity.type` is **BankAccount**, then the `owner` contains the details of the legal entity that owns the bank account.',
    }),
    type: z
      .enum(['BankAccount', 'Document', 'LegalEntity'])
      .exactOptional()
      .openapi({
        description:
          'The type of entity.\n\nPossible values: **LegalEntity**, **BankAccount**, or **Document**.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CapabilityProblemEntity')

const RemediatingActionSchema = z
  .strictObject({
    code: z.string().exactOptional().openapi({ description: 'The remediating action code.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of how you can resolve the verification error.' }),
  })
  .openapi({ required: [] })
  .openapi('RemediatingAction')

const VerificationErrorRecursiveSchema = z
  .strictObject({
    code: z.string().exactOptional().openapi({ description: 'The verification error code.' }),
    message: z.string().exactOptional().openapi({ description: 'The verification error message.' }),
    type: z
      .enum(['dataMissing', 'dataReview', 'invalidInput', 'pendingStatus'])
      .exactOptional()
      .openapi({
        description:
          'The type of verification error.\n\nPossible values: **invalidInput**, **dataMissing**, and **pendingStatus**.',
      }),
    remediatingActions: z
      .array(RemediatingActionSchema)
      .exactOptional()
      .openapi({ description: 'The actions that you can take to resolve the verification error.' }),
  })
  .openapi({ required: [] })
  .openapi('VerificationErrorRecursive')

const VerificationErrorSchema = z
  .strictObject({
    code: z.string().exactOptional().openapi({ description: 'The verification error code.' }),
    message: z.string().exactOptional().openapi({ description: 'The verification error message.' }),
    remediatingActions: z
      .array(RemediatingActionSchema)
      .exactOptional()
      .openapi({ description: 'The actions that you can take to resolve the verification error.' }),
    subErrors: z.array(VerificationErrorRecursiveSchema).exactOptional(),
    type: z
      .enum(['dataMissing', 'dataReview', 'invalidInput', 'pendingStatus'])
      .exactOptional()
      .openapi({
        description:
          'The type of verification error.\n\nPossible values: **invalidInput**, **dataMissing**, and **pendingStatus**.',
      }),
  })
  .openapi({ required: [] })
  .openapi('VerificationError')

const CapabilityProblemSchema = z
  .strictObject({
    entity: CapabilityProblemEntitySchema.exactOptional().openapi({
      description: 'The ID and the type of entity that has verification errors.',
    }),
    verificationErrors: z
      .array(VerificationErrorSchema)
      .exactOptional()
      .openapi({ description: 'List of verification errors.' }),
  })
  .openapi({ required: [] })
  .openapi('CapabilityProblem')

type AccountCapabilityDataType = {
  allowed?: boolean
  allowedLevel?: string
  capability?: string
  problems?: z.infer<typeof CapabilityProblemSchema>[]
  requested: boolean
  requestedLevel: string
  verificationDeadline?: string
  verificationStatus?: string
}

const AccountCapabilityDataSchema: z.ZodType<AccountCapabilityDataType> = z
  .strictObject({
    allowed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the capability is allowed. Adyen sets this to **true** if the verification is successful.',
      }),
    allowedLevel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The allowed level of the capability. Some capabilities have different levels which correspond to thresholds. Higher levels may require additional checks and increased monitoring.Possible values: **notApplicable**, **low**, **medium**, **high**.',
      }),
    capability: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the capability. For example, **sendToTransferInstrument**.',
      }),
    problems: z
      .array(CapabilityProblemSchema)
      .exactOptional()
      .openapi({
        description:
          'List of entities that have problems with verification. The information includes the details of the errors and the actions that you can take to resolve them.',
      }),
    requested: z
      .boolean()
      .openapi({ description: 'Indicates whether you requested the capability.' }),
    requestedLevel: z
      .string()
      .openapi({
        description:
          'The level that you requested for the capability. Some capabilities have different levels which correspond to thresholds. Higher levels may require additional checks and increased monitoring.Possible values: **notApplicable**, **low**, **medium**, **high**.',
      }),
    verificationDeadline: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The verification deadline for the capability that will be disallowed if verification errors are not resolved.',
      }),
    verificationStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the verification checks for the capability.\n\nPossible values:\n\n* **pending**: Adyen is running the verification.\n\n* **invalid**: The verification failed. Check if the `errors` array contains more information.\n\n* **valid**: The verification was successful.\n\n* **rejected**: Adyen checked the information and found reasons to not allow the capability.\n',
      }),
  })
  .openapi({ required: ['requested', 'requestedLevel'] })
  .openapi('AccountCapabilityData')

type AccountCreateNotificationDataType = {
  capabilities: { [key: string]: z.infer<typeof AccountCapabilityDataSchema> }
  companyId: string
  legalEntityId?: string
  merchantId: string
  status: string
}

type AccountUpdateNotificationDataType = {
  capabilities: { [key: string]: z.infer<typeof AccountCapabilityDataSchema> }
  legalEntityId?: string
  merchantId: string
  status: string
}

const AccountCreateNotificationDataSchema: z.ZodType<AccountCreateNotificationDataType> = z
  .strictObject({
    capabilities: z
      .record(z.string(), AccountCapabilityDataSchema)
      .openapi({
        description:
          'Key-value pairs that specify the actions that the merchant account can do and its settings. The key is a capability. For example, the **sendToTransferInstrument** is the capability required before you can pay out funds to the bank account. The value is an object containing the settings for the capability.',
      }),
    companyId: z.string().openapi({ description: 'The unique identifier of the company account.' }),
    legalEntityId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id).',
      }),
    merchantId: z
      .string()
      .openapi({ description: 'The unique identifier of the merchant account.' }),
    status: z
      .string()
      .openapi({
        description:
          'The status of the merchant account.\n\nPossible values:\n\n* **PreActive**: The merchant account has been created. Users cannot access the merchant account in the Customer Area. The account cannot process payments.\n* **Active**: Users can access the merchant account in the Customer Area. If the company account is also **Active**, then payment processing and payouts are enabled.\n* **InactiveWithModifications**: Users can access the merchant account in the Customer Area. The account cannot process new payments but can still modify payments, for example issue refunds. The account can still receive payouts.\n* **Inactive**: Users can access the merchant account in the Customer Area. Payment processing and payouts are disabled.\n* **Closed**: The account is closed and this cannot be reversed. Users cannot log in. Payment processing and payouts are disabled.',
      }),
  })
  .openapi({ required: ['capabilities', 'companyId', 'merchantId', 'status'] })
  .openapi('AccountCreateNotificationData')

type MerchantCreatedNotificationRequestType = {
  createdAt: string
  data: z.infer<typeof AccountCreateNotificationDataSchema>
  environment: string
  type: 'merchant.created'
}

const AccountUpdateNotificationDataSchema: z.ZodType<AccountUpdateNotificationDataType> = z
  .strictObject({
    capabilities: z
      .record(z.string(), AccountCapabilityDataSchema)
      .openapi({
        description:
          'Key-value pairs that specify what you can do with the merchant account and its settings. The key is a capability. For example, the **sendToTransferInstrument** is the capability required before you can pay out the funds of a merchant account to a [bank account](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments). The value is an object containing the settings for the capability.',
      }),
    legalEntityId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id).',
      }),
    merchantId: z
      .string()
      .openapi({ description: 'The unique identifier of the merchant account.' }),
    status: z
      .string()
      .openapi({
        description:
          'The status of the merchant account.\n\nPossible values:\n\n* **PreActive**: The merchant account has been created. Users cannot access the merchant account in the Customer Area. The account cannot process payments.\n* **Active**: Users can access the merchant account in the Customer Area. If the company account is also **Active**, then payment processing and payouts are enabled.\n* **InactiveWithModifications**: Users can access the merchant account in the Customer Area. The account cannot process new payments but can still modify payments, for example issue refunds. The account can still receive payouts.\n* **Inactive**: Users can access the merchant account in the Customer Area. Payment processing and payouts are disabled.\n* **Closed**: The account is closed and this cannot be reversed. Users cannot log in. Payment processing and payouts are disabled.',
      }),
  })
  .openapi({ required: ['capabilities', 'merchantId', 'status'] })
  .openapi('AccountUpdateNotificationData')

type MerchantUpdatedNotificationRequestType = {
  createdAt: string
  data: z.infer<typeof AccountUpdateNotificationDataSchema>
  environment: string
  type: 'merchant.updated'
}

const AccountNotificationResponseSchema = z
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
  .openapi('AccountNotificationResponse')

const MerchantCreatedNotificationRequestSchema: z.ZodType<MerchantCreatedNotificationRequestType> =
  z
    .strictObject({
      createdAt: z.iso
        .datetime({ offset: true })
        .openapi({ description: 'Timestamp for when the webhook was created.' }),
      data: AccountCreateNotificationDataSchema.openapi({ description: 'Contains event details.' }),
      environment: z
        .string()
        .openapi({
          description:
            'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
        }),
      type: z.literal('merchant.created').openapi({ description: 'Type of notification.' }),
    })
    .openapi({ required: ['createdAt', 'data', 'environment', 'type'] })
    .openapi('MerchantCreatedNotificationRequest')

const MerchantUpdatedNotificationRequestSchema: z.ZodType<MerchantUpdatedNotificationRequestType> =
  z
    .strictObject({
      createdAt: z.iso
        .datetime({ offset: true })
        .openapi({ description: 'Timestamp for when the webhook was created.' }),
      data: AccountUpdateNotificationDataSchema.openapi({ description: 'Contains event details.' }),
      environment: z
        .string()
        .openapi({
          description:
            'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
        }),
      type: z.literal('merchant.updated').openapi({ description: 'Type of notification.' }),
    })
    .openapi({ required: ['createdAt', 'data', 'environment', 'type'] })
    .openapi('MerchantUpdatedNotificationRequest')

const MidServiceNotificationDataSchema = z
  .strictObject({
    allowed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether receiving payments is allowed. This value is set to **true** by Adyen after screening your merchant account.',
      }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the payment method is enabled (**true**) or disabled (**false**).',
      }),
    id: z.string().openapi({ description: 'The unique identifier of the resource.' }),
    merchantId: z
      .string()
      .openapi({ description: 'The unique identifier of the merchant account.' }),
    reference: z
      .string()
      .exactOptional()
      .openapi({ description: 'Your reference for the payment method.' }),
    status: z
      .enum(['success', 'failure', 'capabilityPending', 'dataRequired', 'updatesExpected'])
      .openapi({
        description:
          'The status of the request to add a payment method. Possible values:\n\n* **success**: the payment method was added.\n* **failure**: the request failed.\n* **capabilityPending**: the **receivePayments** capability is not allowed.\n',
        'x-addedInVersion': '2',
      }),
    storeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the [store](https://docs.adyen.com/api-explorer/#/ManagementService/latest/post/merchants/{id}/paymentMethodSettings__reqParam_storeId), if any.',
      }),
    type: z
      .string()
      .openapi({
        description:
          'Payment method [variant](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api).\n\nFor payment method variant **cartebancaire**, method-specific details are returned in the [`cartesBancaires`](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/paymentMethodSettings#responses-200-cartesBancaires) object of the response.',
      }),
    verificationStatus: z
      .enum(['valid', 'pending', 'invalid', 'rejected'])
      .exactOptional()
      .openapi({
        description:
          'Payment method status. Possible values:\n* **valid**\n* **pending**\n* **invalid**\n* **rejected**',
      }),
  })
  .openapi({ required: ['id', 'merchantId', 'status', 'type'] })
  .openapi('MidServiceNotificationData')

const PaymentMethodCreatedNotificationRequestSchema = z
  .strictObject({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp for when the webhook was created.' }),
    data: MidServiceNotificationDataSchema.openapi({ description: 'Contains event details.' }),
    environment: z
      .string()
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    type: z.literal('paymentMethod.created').openapi({ description: 'Type of notification.' }),
  })
  .openapi({ required: ['createdAt', 'data', 'environment', 'type'] })
  .openapi('PaymentMethodCreatedNotificationRequest')

const PaymentMethodNotificationResponseSchema = z
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
  .openapi('PaymentMethodNotificationResponse')

const PaymentMethodRequestRemovedNotificationRequestSchema = z
  .strictObject({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp for when the webhook was created.' }),
    data: MidServiceNotificationDataSchema.openapi({ description: 'Contains event details.' }),
    environment: z
      .string()
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    type: z
      .literal('paymentMethodRequest.removed')
      .openapi({ description: 'Type of notification.' }),
  })
  .openapi({ required: ['createdAt', 'data', 'environment', 'type'] })
  .openapi('PaymentMethodRequestRemovedNotificationRequest')

const PaymentMethodScheduledForRemovalNotificationRequestSchema = z
  .strictObject({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp for when the webhook was created.' }),
    data: MidServiceNotificationDataSchema.openapi({ description: 'Contains event details.' }),
    environment: z
      .string()
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    type: z
      .literal('paymentMethodRequest.scheduledForRemoval')
      .openapi({ description: 'Type of notification.' }),
  })
  .openapi({ required: ['createdAt', 'data', 'environment', 'type'] })
  .openapi('PaymentMethodScheduledForRemovalNotificationRequest')

const TerminalAssignmentNotificationRequestSchema = z
  .strictObject({
    assignedToAccount: z
      .string()
      .openapi({
        description:
          'The unique identifier of the merchant/company account to which the terminal is assigned.',
      }),
    assignedToStore: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The store that the terminal is assigned to, identified by the store reference (also known as store code).',
      }),
    assignedToStoreId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the store to which the terminal is assigned.',
      }),
    eventDate: z
      .string()
      .openapi({ description: 'The date and time when an event has been completed.' }),
    pspReference: z
      .string()
      .openapi({
        description: 'The PSP reference of the request from which the notification originates.',
      }),
    uniqueTerminalId: z.string().openapi({ description: 'The unique identifier of the terminal.' }),
  })
  .openapi({ required: ['assignedToAccount', 'eventDate', 'pspReference', 'uniqueTerminalId'] })
  .openapi('TerminalAssignmentNotificationRequest')

const TerminalAssignmentNotificationResponseSchema = z
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
  .openapi('TerminalAssignmentNotificationResponse')

const TerminalBoardingDataSchema = z
  .strictObject({
    companyId: z.string().openapi({ description: 'The unique identifier of the company account.' }),
    merchantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the merchant account.' }),
    storeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the store.' }),
    uniqueTerminalId: z.string().openapi({ description: 'The unique identifier of the terminal.' }),
  })
  .openapi({ required: ['companyId', 'uniqueTerminalId'] })
  .openapi('TerminalBoardingData')

const TerminalBoardingNotificationRequestSchema = z
  .strictObject({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp for when the webhook was created.' }),
    data: TerminalBoardingDataSchema.openapi({ description: 'Contains event details.' }),
    environment: z
      .string()
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    type: z.literal('terminalBoarding.triggered').openapi({ description: 'Type of notification.' }),
  })
  .openapi({ required: ['createdAt', 'data', 'environment', 'type'] })
  .openapi('TerminalBoardingNotificationRequest')

const TerminalBoardingNotificationResponseSchema = z
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
  .openapi('TerminalBoardingNotificationResponse')

const TerminalSettingsDataSchema = z
  .strictObject({
    companyId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the company account.' }),
    merchantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the merchant account.' }),
    storeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the store.' }),
    terminalId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the terminal.' }),
    updateSource: z
      .enum(['Customer Area', 'Management Api'])
      .openapi({
        description:
          'Indicates whether the terminal settings were updated using the Customer Area or the Management API.',
      }),
    user: z
      .string()
      .openapi({
        description:
          'The user that updated the terminal settings. Can be Adyen or your API credential username.',
      }),
  })
  .openapi({ required: ['updateSource', 'user'] })
  .openapi('TerminalSettingsData')

const TerminalSettingsNotificationRequestSchema = z
  .strictObject({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp for when the webhook was created.' }),
    data: TerminalSettingsDataSchema.openapi({ description: 'Contains event details.' }),
    environment: z
      .string()
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    type: z.literal('terminalSettings.modified').openapi({ description: 'Type of notification.' }),
  })
  .openapi({ required: ['createdAt', 'data', 'environment', 'type'] })
  .openapi('TerminalSettingsNotificationRequest')

const TerminalSettingsNotificationResponseSchema = z
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
  .openapi('TerminalSettingsNotificationResponse')

const PostMerchantCreatedMerchantCreatedExample = {
  summary: 'Merchant account created',
  description: 'Example webhook when a merchant account was created',
  value: {
    type: 'merchant.created',
    environment: 'test',
    createdAt: '2022-08-12T10:50:01+02:00',
    data: {
      capabilities: {
        sendToTransferInstrument: { requested: true, requestedLevel: 'notApplicable' },
      },
      companyId: 'YOUR_COMPANY_ID',
      merchantId: 'MC3224X22322535GH8D537TJR',
      status: 'PreActive',
    },
  },
}

const PostMerchantUpdatedMerchantUpdatedValidExample = {
  summary: 'Merchant account verified',
  description: 'Example webhook when verification is succesful',
  value: {
    type: 'merchant.updated',
    environment: 'test',
    createdAt: '2022-09-20T13:42:31+02:00',
    data: {
      capabilities: {
        receivePayments: {
          allowed: true,
          requested: true,
          requestedLevel: 'notApplicable',
          verificationStatus: 'valid',
        },
      },
      legalEntityId: 'LE322KH223222F5GNNW694PZN',
      merchantId: 'YOUR_MERCHANT_ID',
      status: 'PreActive',
    },
  },
}

const PostMerchantUpdatedMerchantUpdatedWithErrorsExample = {
  summary: 'Merchant account verification failed',
  description: 'Example webhook when verification fails',
  value: {
    type: 'merchant.updated',
    environment: 'test',
    createdAt: '2022-09-20T13:41:12+02:00',
    data: {
      capabilities: {
        receivePayments: {
          allowed: false,
          requested: true,
          requestedLevel: 'notApplicable',
          problems: [
            {
              entity: { id: 'LE322KH223222F5GNNW694PZN', type: 'LegalEntity' },
              verificationErrors: [
                {
                  code: '2_8064',
                  message: "'UBO through ownership' was missing.",
                  remediatingActions: [
                    {
                      code: '2_123',
                      message:
                        "Add 'organization.entityAssociations' of type 'uboThroughOwnership' to legal entity",
                    },
                  ],
                  type: 'dataMissing',
                },
                {
                  code: '1_30',
                  message: "Individual details couldn't be verified",
                  remediatingActions: [{ code: '1_300', message: 'Update individual details' }],
                  subErrors: [
                    {
                      code: '1_3000',
                      message: "The user couldn't be verified",
                      remediatingActions: [
                        { code: '1_300', message: 'Update individual details' },
                        { code: '1_301', message: 'Upload an ID document' },
                      ],
                      type: 'invalidInput',
                    },
                  ],
                  type: 'invalidInput',
                },
              ],
            },
          ],
          verificationStatus: 'invalid',
        },
      },
      legalEntityId: 'LE322KH223222F5GNNW694PZN',
      merchantId: 'YOUR_MERCHANT_ID',
      status: 'PreActive',
    },
  },
}

const PostPaymentMethodCreatedPaymentMethodCreatedExample = {
  summary: 'Payment method Visa created',
  value: {
    createdAt: '2022-01-24T14:59:11+01:00',
    data: {
      id: 'PM3224R223224K5FH4M2K9B86',
      merchantId: 'MERCHANT_ACCOUNT',
      status: 'success',
      storeId: 'ST322LJ223223K5F4SQNR9XL5',
      type: 'visa',
    },
    environment: 'test',
    type: 'paymentMethod.created',
  },
}

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const merchantCreatedPostWebhook = {
  method: 'post',
  path: '/merchant.created',
  tags: ['Merchant account'],
  summary: 'Merchant account created',
  description:
    'A merchant account [was created](https://docs.adyen.com/api-explorer/#/ManagementService/latest/post/merchants).',
  operationId: 'post-merchant.created',
  request: {
    body: {
      content: {
        'application/json': {
          schema: MerchantCreatedNotificationRequestSchema,
          examples: { 'merchant.created': PostMerchantCreatedMerchantCreatedExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: AccountNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const merchantUpdatedPostWebhook = {
  method: 'post',
  path: '/merchant.updated',
  tags: ['Merchant account'],
  summary: 'Merchant account capability updated',
  description:
    'There were changes to the verification status and capabilities of a [merchant account](https://docs.adyen.com/api-explorer/#/ManagementService/latest/post/merchants). If the verification fails, this webhook includes the errors and the actions that you can take to resolve them.',
  operationId: 'post-merchant.updated',
  request: {
    body: {
      content: {
        'application/json': {
          schema: MerchantUpdatedNotificationRequestSchema,
          examples: {
            'merchant-updated-valid': PostMerchantUpdatedMerchantUpdatedValidExample,
            'merchant-updated-with-errors': PostMerchantUpdatedMerchantUpdatedWithErrorsExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: AccountNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const paymentMethodCreatedPostWebhook = {
  method: 'post',
  path: '/paymentMethod.created',
  tags: ['Payment method'],
  summary: 'Payment method created',
  description:
    'A request to [add a payment method](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/_merchantId_/paymentMethodSettings) was completed.',
  operationId: 'post-paymentMethod.created',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaymentMethodCreatedNotificationRequestSchema,
          examples: {
            'paymentMethod.created': PostPaymentMethodCreatedPaymentMethodCreatedExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: PaymentMethodNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const paymentMethodRequestRemovedPostWebhook = {
  method: 'post',
  path: '/paymentMethodRequest.removed',
  tags: ['Payment method'],
  summary: 'Payment method request removed',
  description:
    'A request to add a payment method is removed. You must make another request to [add a payment method](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/_merchantId_/paymentMethodSettings).',
  operationId: 'post-paymentMethodRequest.removed',
  request: {
    body: {
      content: {
        'application/json': { schema: PaymentMethodRequestRemovedNotificationRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: PaymentMethodNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const paymentMethodRequestScheduledForRemovalPostWebhook = {
  method: 'post',
  path: '/paymentMethodRequest.scheduledForRemoval',
  tags: ['Payment method'],
  summary: 'Payment method request scheduled for removal',
  description:
    'A request to [add a payment method](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/_merchantId_/paymentMethodSettings) will be removed in 30 days. To make sure the payment method is added, provide the missing [KYC information](https://docs.adyen.com/platforms/onboard-users).',
  operationId: 'post-paymentMethodRequest.scheduledForRemoval',
  request: {
    body: {
      content: {
        'application/json': { schema: PaymentMethodScheduledForRemovalNotificationRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: PaymentMethodNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const terminalAssignmentCompletedPostWebhook = {
  method: 'post',
  path: '/terminalAssignment.completed',
  tags: ['Terminal management'],
  summary: 'Terminal assignment completed',
  description:
    'A request to [reassign a terminal](https://docs.adyen.com/api-explorer/Management/3/post/terminals/(terminalId)/reassign) was completed.',
  operationId: 'post-terminalAssignment.completed',
  request: {
    body: {
      content: { 'application/json': { schema: TerminalAssignmentNotificationRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: TerminalAssignmentNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const terminalBoardingTriggeredPostWebhook = {
  method: 'post',
  path: '/terminalBoarding.triggered',
  tags: ['Terminal management'],
  summary: 'Result of terminal boarding',
  description: 'The boarding of a payment terminal succeeded.',
  operationId: 'post-terminalBoarding.triggered',
  request: {
    body: {
      content: { 'application/json': { schema: TerminalBoardingNotificationRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: TerminalBoardingNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const terminalSettingsModifiedPostWebhook = {
  method: 'post',
  path: '/terminalSettings.modified',
  tags: ['Terminal management'],
  summary: 'Terminal settings updated',
  description:
    'A request to [update terminal settings](https://docs.adyen.com/api-explorer/Management/latest/patch/terminals/(terminalId)/terminalSettings) was completed.',
  operationId: 'post-terminalSettings.modified',
  request: {
    body: {
      content: { 'application/json': { schema: TerminalSettingsNotificationRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: TerminalSettingsNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}
