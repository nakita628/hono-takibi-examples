import { createRoute, z } from '@hono/zod-openapi'

const NotificationEventConfigurationSchema = z
  .strictObject({
    eventType: z
      .enum([
        'ACCOUNT_CLOSED',
        'ACCOUNT_CREATED',
        'ACCOUNT_FUNDS_BELOW_THRESHOLD',
        'ACCOUNT_HOLDER_CREATED',
        'ACCOUNT_HOLDER_LIMIT_REACHED',
        'ACCOUNT_HOLDER_MIGRATED',
        'ACCOUNT_HOLDER_PAYOUT',
        'ACCOUNT_HOLDER_STATUS_CHANGE',
        'ACCOUNT_HOLDER_STORE_STATUS_CHANGE',
        'ACCOUNT_HOLDER_UPCOMING_DEADLINE',
        'ACCOUNT_HOLDER_UPDATED',
        'ACCOUNT_HOLDER_VERIFICATION',
        'ACCOUNT_UPDATED',
        'BENEFICIARY_SETUP',
        'COMPENSATE_NEGATIVE_BALANCE',
        'DIRECT_DEBIT_INITIATED',
        'FUNDS_MIGRATED',
        'PAYMENT_FAILURE',
        'PENDING_CREDIT',
        'REFUND_FUNDS_TRANSFER',
        'REPORT_AVAILABLE',
        'SCHEDULED_REFUNDS',
        'SCORE_SIGNAL_TRIGGERED',
        'TRANSFER_FUNDS',
        'TRANSFER_NOT_PAIDOUT_TRANSFERS',
      ])
      .openapi({
        description:
          'The type of event.\n\nPossible values: **ACCOUNT_CLOSED**, **ACCOUNT_CREATED**, **ACCOUNT_FUNDS_BELOW_THRESHOLD**, **ACCOUNT_HOLDER_CREATED**, **ACCOUNT_HOLDER_LIMIT_REACHED**, **ACCOUNT_HOLDER_PAYOUT**, **ACCOUNT_HOLDER_STATUS_CHANGE**, **ACCOUNT_HOLDER_STORE_STATUS_CHANGE**, **ACCOUNT_HOLDER_UPCOMING_DEADLINE**, **ACCOUNT_HOLDER_UPDATED**, **ACCOUNT_HOLDER_VERIFICATION**, **ACCOUNT_UPDATED**, **BENEFICIARY_SETUP**, **COMPENSATE_NEGATIVE_BALANCE**, **DIRECT_DEBIT_INITIATED**, **PAYMENT_FAILURE**, **REFUND_FUNDS_TRANSFER**, **REPORT_AVAILABLE**, **SCHEDULED_REFUNDS**, **TRANSFER_FUNDS**.',
      }),
    includeMode: z
      .enum(['EXCLUDE', 'INCLUDE'])
      .openapi({
        description:
          'Indicates whether the specified `eventType` is sent to your webhook endpoint.\nPossible values:\n* **INCLUDE**: Send the specified `eventType`.\n* **EXCLUDE**: Send all event types except the specified `eventType` and other event types with the `includeMode` set to **EXCLUDE**.',
      }),
  })
  .openapi({ required: ['eventType', 'includeMode'] })
  .openapi('NotificationEventConfiguration')

const NotificationConfigurationDetailsSchema = z
  .strictObject({
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the notification subscription is active.' }),
    apiVersion: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "The version of the notification to which you are subscribing. To make sure that your integration can properly process the notification, subscribe to the same version as the API that you're using.",
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the notification subscription configuration.' }),
    eventConfigs: z
      .array(NotificationEventConfigurationSchema)
      .exactOptional()
      .openapi({
        description: 'Contains objects that define event types and their subscription settings.',
      }),
    hmacSignatureKey: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'A string with which to salt the notification(s) before hashing. If this field is provided, a hash value will be included under the notification header `HmacSignature` and the hash protocol will be included under the notification header `Protocol`. A notification body along with its `hmacSignatureKey` and `Protocol` can be used to calculate a hash value; matching this hash value with the `HmacSignature` will ensure that the notification body has not been tampered with or corrupted.\n\n>Must be a 32-byte hex-encoded string (i.e. a string containing 64 hexadecimal characters; e.g. "b0ea55c2fe60d4d1d605e9c385e0e7f7e6cafbb939ce07010f31a327a0871f27").\n\nThe omission of this field will preclude the provision of the `HmacSignature` and `Protocol` headers in notification(s).',
      }),
    notificationId: z
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
          'Adyen-generated ID for the entry, returned in the response when you create a notification configuration. Required when updating an existing configuration using [`/updateNotificationConfiguration`](https://docs.adyen.com/api-explorer/#/NotificationConfigurationService/latest/post/updateNotificationConfiguration).',
      }),
    notifyPassword: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The password to use when accessing the notifyURL with the specified username.',
      }),
    notifyURL: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL to which the notifications are to be sent.' }),
    notifyUsername: z
      .string()
      .exactOptional()
      .openapi({ description: 'The username to use when accessing the notifyURL.' }),
    sslProtocol: z
      .enum(['TLSv12', 'TLSv13'])
      .exactOptional()
      .openapi({
        description:
          'The SSL protocol employed by the endpoint.\n>Permitted values: `TLSv12`, `TLSv13`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('NotificationConfigurationDetails')

const CreateNotificationConfigurationRequestSchema = z
  .strictObject({
    configurationDetails: NotificationConfigurationDetailsSchema.openapi({
      description: 'Details of the prospective notification subscription configuration.',
    }),
  })
  .openapi({ required: ['configurationDetails'] })
  .openapi('CreateNotificationConfigurationRequest')

const DeleteNotificationConfigurationRequestSchema = z
  .strictObject({
    notificationIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .openapi({
        description: 'A list of IDs of the notification subscription configurations to be deleted.',
      }),
  })
  .openapi({ required: ['notificationIds'] })
  .openapi('DeleteNotificationConfigurationRequest')

const EmptyRequestSchema = z.strictObject({}).openapi('EmptyRequest')

const FieldTypeSchema = z
  .strictObject({
    field: z.string().exactOptional().openapi({ description: 'The full name of the property.' }),
    fieldName: z
      .enum([
        'accountCode',
        'accountHolderCode',
        'accountHolderDetails',
        'accountNumber',
        'accountStateType',
        'accountStatus',
        'accountType',
        'address',
        'balanceAccount',
        'balanceAccountActive',
        'balanceAccountCode',
        'balanceAccountId',
        'bankAccount',
        'bankAccountCode',
        'bankAccountName',
        'bankAccountUUID',
        'bankBicSwift',
        'bankCity',
        'bankCode',
        'bankName',
        'bankStatement',
        'branchCode',
        'businessContact',
        'cardToken',
        'checkCode',
        'city',
        'companyRegistration',
        'constitutionalDocument',
        'controller',
        'country',
        'countryCode',
        'currency',
        'currencyCode',
        'dateOfBirth',
        'description',
        'destinationAccountCode',
        'document',
        'documentContent',
        'documentExpirationDate',
        'documentIssuerCountry',
        'documentIssuerState',
        'documentName',
        'documentNumber',
        'documentType',
        'doingBusinessAs',
        'drivingLicence',
        'drivingLicenceBack',
        'drivingLicenceFront',
        'drivingLicense',
        'email',
        'firstName',
        'formType',
        'fullPhoneNumber',
        'gender',
        'hopWebserviceUser',
        'houseNumberOrName',
        'iban',
        'idCard',
        'idCardBack',
        'idCardFront',
        'idNumber',
        'identityDocument',
        'individualDetails',
        'infix',
        'jobTitle',
        'lastName',
        'lastReviewDate',
        'legalArrangement',
        'legalArrangementCode',
        'legalArrangementEntity',
        'legalArrangementEntityCode',
        'legalArrangementLegalForm',
        'legalArrangementMember',
        'legalArrangementMembers',
        'legalArrangementName',
        'legalArrangementReference',
        'legalArrangementRegistrationNumber',
        'legalArrangementTaxNumber',
        'legalArrangementType',
        'legalBusinessName',
        'legalEntity',
        'legalEntityType',
        'linkedViasVirtualAccount',
        'logo',
        'merchantAccount',
        'merchantCategoryCode',
        'merchantHouseNumber',
        'merchantReference',
        'microDeposit',
        'name',
        'nationality',
        'originalReference',
        'ownerCity',
        'ownerCountryCode',
        'ownerDateOfBirth',
        'ownerHouseNumberOrName',
        'ownerName',
        'ownerPostalCode',
        'ownerState',
        'ownerStreet',
        'passport',
        'passportNumber',
        'payoutMethod',
        'payoutMethodCode',
        'payoutSchedule',
        'pciSelfAssessment',
        'personalData',
        'phoneCountryCode',
        'phoneNumber',
        'postalCode',
        'primaryCurrency',
        'reason',
        'registrationNumber',
        'returnUrl',
        'schedule',
        'shareholder',
        'shareholderCode',
        'shareholderCodeAndSignatoryCode',
        'shareholderCodeOrSignatoryCode',
        'shareholderType',
        'shareholderTypes',
        'shopperInteraction',
        'signatory',
        'signatoryCode',
        'socialSecurityNumber',
        'sourceAccountCode',
        'splitAccount',
        'splitConfigurationUUID',
        'splitCurrency',
        'splitValue',
        'splits',
        'stateOrProvince',
        'status',
        'stockExchange',
        'stockNumber',
        'stockTicker',
        'store',
        'storeDetail',
        'storeName',
        'storeReference',
        'street',
        'taxId',
        'tier',
        'tierNumber',
        'transferCode',
        'ultimateParentCompany',
        'ultimateParentCompanyAddressDetails',
        'ultimateParentCompanyAddressDetailsCountry',
        'ultimateParentCompanyBusinessDetails',
        'ultimateParentCompanyBusinessDetailsLegalBusinessName',
        'ultimateParentCompanyBusinessDetailsRegistrationNumber',
        'ultimateParentCompanyCode',
        'ultimateParentCompanyStockExchange',
        'ultimateParentCompanyStockNumber',
        'ultimateParentCompanyStockNumberOrStockTicker',
        'ultimateParentCompanyStockTicker',
        'unknown',
        'value',
        'verificationType',
        'virtualAccount',
        'visaNumber',
        'webAddress',
        'year',
      ])
      .exactOptional()
      .openapi({ description: 'The type of the field.' }),
    shareholderCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The code of the shareholder that the field belongs to. If empty, the field belongs to an account holder.',
      }),
  })
  .openapi({ required: [] })
  .openapi('FieldType')

const ErrorFieldTypeSchema = z
  .strictObject({
    errorCode: z.int32().exactOptional().openapi({ description: 'The validation error code.' }),
    errorDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the validation error.' }),
    fieldType: FieldTypeSchema.exactOptional().openapi({ description: 'The type of error field.' }),
  })
  .openapi({ required: [] })
  .openapi('ErrorFieldType')

const ExchangeMessageSchema = z
  .strictObject({
    messageCode: z.string().exactOptional(),
    messageDescription: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExchangeMessage')

const GenericResponseSchema = z
  .strictObject({
    invalidFields: z
      .array(ErrorFieldTypeSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'Contains field validation errors that would prevent requests from being processed.',
      }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reference of a request. Can be used to uniquely identify the request.',
      }),
    resultCode: z.string().exactOptional().openapi({ description: 'The result code.' }),
  })
  .openapi({ required: [] })
  .openapi('GenericResponse')

const GetNotificationConfigurationListResponseSchema = z
  .strictObject({
    configurations: z
      .array(NotificationConfigurationDetailsSchema)
      .exactOptional()
      .openapi({ description: 'Details of the notification subscription configurations.' }),
    invalidFields: z
      .array(ErrorFieldTypeSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'Contains field validation errors that would prevent requests from being processed.',
      }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reference of a request. Can be used to uniquely identify the request.',
      }),
    resultCode: z.string().exactOptional().openapi({ description: 'The result code.' }),
  })
  .openapi({ required: [] })
  .openapi('GetNotificationConfigurationListResponse')

const GetNotificationConfigurationRequestSchema = z
  .strictObject({
    notificationId: z
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
          'The ID of the notification subscription configuration whose details are to be retrieved.',
      }),
  })
  .openapi({ required: ['notificationId'] })
  .openapi('GetNotificationConfigurationRequest')

const GetNotificationConfigurationResponseSchema = z
  .strictObject({
    configurationDetails: NotificationConfigurationDetailsSchema.openapi({
      description: 'Details of the notification subscription configuration.',
    }),
    invalidFields: z
      .array(ErrorFieldTypeSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'Contains field validation errors that would prevent requests from being processed.',
      }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reference of a request. Can be used to uniquely identify the request.',
      }),
    resultCode: z.string().exactOptional().openapi({ description: 'The result code.' }),
  })
  .openapi({ required: ['configurationDetails'] })
  .openapi('GetNotificationConfigurationResponse')

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

const TestNotificationConfigurationRequestSchema = z
  .strictObject({
    eventTypes: z
      .array(
        z.enum([
          'ACCOUNT_CLOSED',
          'ACCOUNT_CREATED',
          'ACCOUNT_FUNDS_BELOW_THRESHOLD',
          'ACCOUNT_HOLDER_CREATED',
          'ACCOUNT_HOLDER_LIMIT_REACHED',
          'ACCOUNT_HOLDER_MIGRATED',
          'ACCOUNT_HOLDER_PAYOUT',
          'ACCOUNT_HOLDER_STATUS_CHANGE',
          'ACCOUNT_HOLDER_STORE_STATUS_CHANGE',
          'ACCOUNT_HOLDER_UPCOMING_DEADLINE',
          'ACCOUNT_HOLDER_UPDATED',
          'ACCOUNT_HOLDER_VERIFICATION',
          'ACCOUNT_UPDATED',
          'BENEFICIARY_SETUP',
          'COMPENSATE_NEGATIVE_BALANCE',
          'DIRECT_DEBIT_INITIATED',
          'FUNDS_MIGRATED',
          'PAYMENT_FAILURE',
          'PENDING_CREDIT',
          'REFUND_FUNDS_TRANSFER',
          'REPORT_AVAILABLE',
          'SCHEDULED_REFUNDS',
          'SCORE_SIGNAL_TRIGGERED',
          'TRANSFER_FUNDS',
          'TRANSFER_NOT_PAIDOUT_TRANSFERS',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'The event types to test.  If left blank, then all of the configured event types will be tested.\n>Permitted values: `ACCOUNT_HOLDER_CREATED`, `ACCOUNT_CREATED`, `ACCOUNT_UPDATED`, `ACCOUNT_HOLDER_UPDATED`, `ACCOUNT_HOLDER_STATUS_CHANGE`, `ACCOUNT_HOLDER_STORE_STATUS_CHANGE` `ACCOUNT_HOLDER_VERIFICATION`, `ACCOUNT_HOLDER_LIMIT_REACHED`, `ACCOUNT_HOLDER_PAYOUT`, `PAYMENT_FAILURE`, `SCHEDULED_REFUNDS`, `REPORT_AVAILABLE`, `TRANSFER_FUNDS`, `BENEFICIARY_SETUP`, `COMPENSATE_NEGATIVE_BALANCE`.',
      }),
    notificationId: z
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
        description: 'The ID of the notification subscription configuration to be tested.',
      }),
  })
  .openapi({ required: ['notificationId'] })
  .openapi('TestNotificationConfigurationRequest')

const TestNotificationConfigurationResponseSchema = z
  .strictObject({
    errorMessages: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Any error messages encountered.' }),
    eventTypes: z
      .array(
        z.enum([
          'ACCOUNT_CLOSED',
          'ACCOUNT_CREATED',
          'ACCOUNT_FUNDS_BELOW_THRESHOLD',
          'ACCOUNT_HOLDER_CREATED',
          'ACCOUNT_HOLDER_LIMIT_REACHED',
          'ACCOUNT_HOLDER_MIGRATED',
          'ACCOUNT_HOLDER_PAYOUT',
          'ACCOUNT_HOLDER_STATUS_CHANGE',
          'ACCOUNT_HOLDER_STORE_STATUS_CHANGE',
          'ACCOUNT_HOLDER_UPCOMING_DEADLINE',
          'ACCOUNT_HOLDER_UPDATED',
          'ACCOUNT_HOLDER_VERIFICATION',
          'ACCOUNT_UPDATED',
          'BENEFICIARY_SETUP',
          'COMPENSATE_NEGATIVE_BALANCE',
          'DIRECT_DEBIT_INITIATED',
          'FUNDS_MIGRATED',
          'PAYMENT_FAILURE',
          'PENDING_CREDIT',
          'REFUND_FUNDS_TRANSFER',
          'REPORT_AVAILABLE',
          'SCHEDULED_REFUNDS',
          'SCORE_SIGNAL_TRIGGERED',
          'TRANSFER_FUNDS',
          'TRANSFER_NOT_PAIDOUT_TRANSFERS',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'The event types that were tested.\n>Permitted values: `ACCOUNT_HOLDER_CREATED`, `ACCOUNT_CREATED`, `ACCOUNT_UPDATED`, `ACCOUNT_HOLDER_UPDATED`, `ACCOUNT_HOLDER_STATUS_CHANGE`, `ACCOUNT_HOLDER_STORE_STATUS_CHANGE` `ACCOUNT_HOLDER_VERIFICATION`, `ACCOUNT_HOLDER_LIMIT_REACHED`, `ACCOUNT_HOLDER_PAYOUT`, `PAYMENT_FAILURE`, `SCHEDULED_REFUNDS`, `REPORT_AVAILABLE`, `TRANSFER_FUNDS`, `BENEFICIARY_SETUP`, `COMPENSATE_NEGATIVE_BALANCE`.',
      }),
    exchangeMessages: z
      .array(ExchangeMessageSchema)
      .exactOptional()
      .openapi({ description: 'The notification message and related response messages.' }),
    invalidFields: z
      .array(ErrorFieldTypeSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'Contains field validation errors that would prevent requests from being processed.',
      }),
    notificationId: z
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
        description: 'The ID of the notification subscription configuration.',
      }),
    okMessages: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of messages describing the testing steps.' }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reference of a request. Can be used to uniquely identify the request.',
      }),
    resultCode: z.string().exactOptional().openapi({ description: 'The result code.' }),
  })
  .openapi({ required: ['notificationId'] })
  .openapi('TestNotificationConfigurationResponse')

const UpdateNotificationConfigurationRequestSchema = z
  .strictObject({
    configurationDetails: NotificationConfigurationDetailsSchema.openapi({
      description: 'Details of the notification subscription configuration to be updated.',
    }),
  })
  .openapi({ required: ['configurationDetails'] })
  .openapi('UpdateNotificationConfigurationRequest')

const PostCreateNotificationConfigurationBasicExample = {
  summary: 'Create a notification configuration',
  value: {
    configurationDetails: {
      active: true,
      description: 'Unique description 123',
      eventConfigs: [{ eventType: 'ACCOUNT_HOLDER_VERIFICATION', includeMode: 'INCLUDE' }],
      notifyURL: 'https://www.adyen.com/notification-handler',
      notifyUsername: 'testUserName',
      notifyPassword: 'testPassword',
      sslProtocol: 'TLSv13',
    },
  },
}

const PostCreateNotificationConfigurationBasic_200Example = {
  summary: "Example response for request 'basic'",
  value: {
    pspReference: '8516178952380553',
    configurationDetails: {
      active: true,
      description: 'Unique description 123',
      eventConfigs: [{ eventType: 'ACCOUNT_HOLDER_VERIFICATION', includeMode: 'INCLUDE' }],
      notificationId: 28468,
      notifyURL: 'https://www.adyen.com/notification-handler',
      sslProtocol: 'TLSv13',
    },
  },
}

const PostDeleteNotificationConfigurationsBasicExample = {
  summary: 'Delete a notification configuration',
  description: 'Deletes an existing notification subscription configuration',
  value: { notificationIds: [27891] },
}

const PostDeleteNotificationConfigurationsBasic_200Example = {
  summary: 'Delete a notification configuration',
  description: 'Example response of deleting a notification configuration',
  value: { pspReference: '8516480472498802' },
}

const PostGetNotificationConfigurationBasicExample = {
  summary: 'Get a notification configuration',
  description: 'Returns the details of the configuration of a notification subscription',
  value: { notificationId: 21259 },
}

const PostGetNotificationConfigurationBasic_200Example = {
  summary: 'Get a notification configuration',
  description: 'Example response with a notification configuration',
  value: {
    pspReference: '8616480378704419',
    configurationDetails: {
      active: true,
      apiVersion: 5,
      description: 'test',
      eventConfigs: [{ eventType: 'ACCOUNT_HOLDER_VERIFICATION', includeMode: 'INCLUDE' }],
      notificationId: 50054,
      notifyURL: 'https://www.adyen.com/notification-handler',
      sslProtocol: 'TLSv13',
    },
  },
}

const PostGetNotificationConfigurationListBasicExample = {
  summary: 'Get a list of configurations',
  description:
    'Returns the details of the configurations of all of the notification subscriptions in the platform of the executing user.',
  value: {},
}

const PostGetNotificationConfigurationListBasic_200Example = {
  summary: 'Get a list of configuration',
  description: 'Example response with a list of notification configurations for the executing user',
  value: {
    pspReference: '8516480437185726',
    configurations: [
      {
        active: true,
        description: 'Unique description 12223',
        eventConfigs: [{ eventType: 'ACCOUNT_HOLDER_VERIFICATION', includeMode: 'INCLUDE' }],
        notificationId: 27893,
        notifyURL: 'https://www.adyen.com/notification-handler',
        sslProtocol: 'TLSv13',
      },
      {
        active: true,
        description: 'just testing things',
        eventConfigs: [{ eventType: 'ACCOUNT_HOLDER_VERIFICATION', includeMode: 'INCLUDE' }],
        notificationId: 25032,
        notifyURL: 'https://www.adyen.com/notification-handler',
        sslProtocol: 'TLSv13',
      },
    ],
  },
}

const PostTestNotificationConfigurationBasicExample = {
  summary: 'Test a notification configuration',
  description: 'Returns the test result for a notification subscription',
  value: { eventTypes: ['ACCOUNT_HOLDER_VERIFICATION'], notificationId: 25032 },
}

const PostTestNotificationConfigurationBasic_200Example = {
  summary: 'Test a notification configuration',
  description: 'Example response of a test notification configuration request',
  value: {
    pspReference: '8616480452462678',
    errorMessages: ['The server did not respond with HTTP 2XX'],
    eventTypes: ['ACCOUNT_HOLDER_VERIFICATION'],
    exchangeMessages: [
      { messageCode: 'Number', messageDescription: '1' },
      { messageCode: 'Title', messageDescription: 'Test 1: 8616480452462678' },
    ],
    notificationId: 25032,
    okMessages: ['...', 'ResponseTime_ms: 262', 'ResponseCode: 404'],
  },
}

const PostUpdateNotificationConfigurationBasicExample = {
  summary: 'Update notification configurations',
  value: {
    configurationDetails: {
      active: false,
      description: 'Test notif config 756',
      eventConfigs: [
        { eventType: 'ACCOUNT_HOLDER_CREATED', includeMode: 'EXCLUDE' },
        { eventType: 'ACCOUNT_CREATED', includeMode: 'INCLUDE' },
      ],
      notificationId: 21259,
      notifyPassword: 'testPassword2',
      notifyURL: 'https://www.adyen.com/notification-handler',
      notifyUsername: 'testUserName2',
      sslProtocol: 'TLSv13',
    },
  },
}

const PostUpdateNotificationConfigurationBasic_200Example = {
  summary: "Example response for request 'basic'",
  value: {
    pspReference: '8516178952580574',
    configurationDetails: {
      active: false,
      description: 'Test notif config 756',
      eventConfigs: [
        { eventType: 'ACCOUNT_CREATED', includeMode: 'INCLUDE' },
        { eventType: 'ACCOUNT_HOLDER_CREATED', includeMode: 'EXCLUDE' },
      ],
      notificationId: 21259,
      notifyURL: 'https://www.adyen.com/notification-handler',
      sslProtocol: 'TLSv13',
    },
  },
}

const ApiKeyAuthSecurityScheme = { in: 'header', name: 'X-API-Key', type: 'apiKey' }

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

export const postCreateNotificationConfigurationRoute = createRoute({
  method: 'post',
  path: '/createNotificationConfiguration',
  tags: ['General'],
  summary: 'Subscribe to notifications',
  description:
    'Creates a subscription to notifications informing you of events on your platform. After the subscription is created, the events specified in the configuration will be sent to the URL specified in the configuration. Subscriptions must be configured on a per-event basis (as opposed to, for example, a per-account holder basis), so all event notifications of a marketplace and of a given type will be sent to the same endpoint(s). A marketplace may have multiple endpoints if desired; an event notification may be sent to as many or as few different endpoints as configured.',
  operationId: 'post-createNotificationConfiguration',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CreateNotificationConfigurationRequestSchema,
          examples: { basic: PostCreateNotificationConfigurationBasicExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: GetNotificationConfigurationResponseSchema,
          examples: { basic: PostCreateNotificationConfigurationBasic_200Example },
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
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postDeleteNotificationConfigurationsRoute = createRoute({
  method: 'post',
  path: '/deleteNotificationConfigurations',
  tags: ['General'],
  summary: 'Delete a notification subscription configuration',
  description:
    'Deletes an existing notification subscription configuration. After the subscription is deleted, no further event notifications will be sent to the URL defined in the subscription.',
  operationId: 'post-deleteNotificationConfigurations',
  request: {
    body: {
      content: {
        'application/json': {
          schema: DeleteNotificationConfigurationRequestSchema,
          examples: { basic: PostDeleteNotificationConfigurationsBasicExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: GenericResponseSchema,
          examples: { basic: PostDeleteNotificationConfigurationsBasic_200Example },
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
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postGetNotificationConfigurationRoute = createRoute({
  method: 'post',
  path: '/getNotificationConfiguration',
  tags: ['General'],
  summary: 'Get a notification subscription configuration',
  description: 'Returns the details of the configuration of a notification subscription.',
  operationId: 'post-getNotificationConfiguration',
  request: {
    body: {
      content: {
        'application/json': {
          schema: GetNotificationConfigurationRequestSchema,
          examples: { basic: PostGetNotificationConfigurationBasicExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: GetNotificationConfigurationResponseSchema,
          examples: { basic: PostGetNotificationConfigurationBasic_200Example },
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
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postGetNotificationConfigurationListRoute = createRoute({
  method: 'post',
  path: '/getNotificationConfigurationList',
  tags: ['General'],
  summary: 'Get a list of notification subscription configurations',
  description:
    'Returns the details of the configurations of all of the notification subscriptions in the platform of the executing user.',
  operationId: 'post-getNotificationConfigurationList',
  request: {
    body: {
      content: {
        'application/json': {
          schema: EmptyRequestSchema,
          examples: { basic: PostGetNotificationConfigurationListBasicExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: GetNotificationConfigurationListResponseSchema,
          examples: { basic: PostGetNotificationConfigurationListBasic_200Example },
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
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postTestNotificationConfigurationRoute = createRoute({
  method: 'post',
  path: '/testNotificationConfiguration',
  tags: ['General'],
  summary: 'Test a notification configuration',
  description:
    'Tests an existing notification subscription configuration. For each event type specified, a test notification will be generated and sent to the URL configured in the subscription specified.',
  operationId: 'post-testNotificationConfiguration',
  request: {
    body: {
      content: {
        'application/json': {
          schema: TestNotificationConfigurationRequestSchema,
          examples: { basic: PostTestNotificationConfigurationBasicExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: TestNotificationConfigurationResponseSchema,
          examples: { basic: PostTestNotificationConfigurationBasic_200Example },
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
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postUpdateNotificationConfigurationRoute = createRoute({
  method: 'post',
  path: '/updateNotificationConfiguration',
  tags: ['General'],
  summary: 'Update a notification subscription configuration',
  description:
    'Updates an existing notification subscription configuration. If you are updating the event types, you must provide all event types, otherwise the previous event type configuration will be overwritten.',
  operationId: 'post-updateNotificationConfiguration',
  request: {
    body: {
      content: {
        'application/json': {
          schema: UpdateNotificationConfigurationRequestSchema,
          examples: { basic: PostUpdateNotificationConfigurationBasicExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: GetNotificationConfigurationResponseSchema,
          examples: { basic: PostUpdateNotificationConfigurationBasic_200Example },
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
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})
