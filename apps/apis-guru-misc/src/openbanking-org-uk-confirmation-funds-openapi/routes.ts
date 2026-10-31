import { createRoute, z } from '@hono/zod-openapi'

const ISODateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
  })
  .openapi('ISODateTime')

const LinksSchema = z
  .strictObject({
    First: z.url().exactOptional(),
    Last: z.url().exactOptional(),
    Next: z.url().exactOptional(),
    Prev: z.url().exactOptional(),
    Self: z.url(),
  })
  .openapi({ description: 'Links relevant to the payload', required: ['Self'] })
  .openapi('Links')

const MetaSchema = z
  .strictObject({
    FirstAvailableDateTime: ISODateTimeSchema.exactOptional(),
    LastAvailableDateTime: ISODateTimeSchema.exactOptional(),
    TotalPages: z.int32().exactOptional(),
  })
  .openapi({ description: 'Meta Data relevant to the payload', title: 'MetaData', required: [] })
  .openapi('Meta')

const OBError1Schema = z
  .strictObject({
    ErrorCode: z
      .string()
      .openapi({
        description: 'Low level textual error code, e.g., UK.OBIE.Field.Missing',
        'x-namespaced-enum': [
          'UK.OBIE.Field.Expected',
          'UK.OBIE.Field.Invalid',
          'UK.OBIE.Field.InvalidDate',
          'UK.OBIE.Field.Missing',
          'UK.OBIE.Field.Unexpected',
          'UK.OBIE.Header.Invalid',
          'UK.OBIE.Header.Missing',
          'UK.OBIE.Reauthenticate',
          'UK.OBIE.Resource.ConsentMismatch',
          'UK.OBIE.Resource.InvalidConsentStatus',
          'UK.OBIE.Resource.InvalidFormat',
          'UK.OBIE.Resource.NotFound',
          'UK.OBIE.Rules.AfterCutOffDateTime',
          'UK.OBIE.Rules.DuplicateReference',
          'UK.OBIE.Signature.Invalid',
          'UK.OBIE.Signature.InvalidClaim',
          'UK.OBIE.Signature.Malformed',
          'UK.OBIE.Signature.Missing',
          'UK.OBIE.Signature.MissingClaim',
          'UK.OBIE.Signature.Unexpected',
          'UK.OBIE.UnexpectedError',
          'UK.OBIE.Unsupported.AccountIdentifier',
          'UK.OBIE.Unsupported.AccountSecondaryIdentifier',
          'UK.OBIE.Unsupported.Currency',
          'UK.OBIE.Unsupported.Frequency',
          'UK.OBIE.Unsupported.LocalInstrument',
          'UK.OBIE.Unsupported.Scheme',
        ],
      }),
    Message: z
      .string()
      .min(1)
      .max(500)
      .openapi({
        description:
          "A description of the error that occurred. e.g., 'A mandatory field isn't supplied' or 'RequestedExecutionDateTime must be in future'\nOBIE doesn't standardise this field",
      }),
    Path: z
      .string()
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Recommended but optional reference to the JSON Path of the field with error, e.g., Data.Initiation.InstructedAmount.Currency',
      }),
    Url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL to help remediate the problem, or provide more information, or to API Reference, or help etc',
      }),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({ required: ['ErrorCode', 'Message'] })
  .openapi('OBError1')

const OBErrorResponse1Schema = z
  .strictObject({
    Code: z
      .string()
      .min(1)
      .max(40)
      .openapi({ description: 'High level textual error code, to help categorize the errors.' }),
    Errors: z.array(OBError1Schema).min(1),
    Id: z
      .string()
      .min(1)
      .max(40)
      .exactOptional()
      .openapi({
        description:
          'A unique reference for the error instance, for audit purposes, in case of unknown/unclassified errors.',
      }),
    Message: z
      .string()
      .min(1)
      .max(500)
      .openapi({
        description:
          "Brief Error message, e.g., 'There is something wrong with the request parameters provided'",
      }),
  })
  .openapi({
    description:
      'An array of detail error codes, and messages, and URLs to documentation to help remediation.',
    required: ['Code', 'Message', 'Errors'],
  })
  .openapi('OBErrorResponse1')

const OBFundsConfirmation1Schema = z
  .strictObject({
    Data: z
      .object({
        ConsentId: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            description:
              'Unique identification as assigned by the ASPSP to uniquely identify the funds confirmation consent resource.',
          }),
        InstructedAmount: z
          .object({
            Amount: z
              .string()
              .regex(/^\d{1,13}$|^\d{1,13}\.\d{1,5}$/)
              .openapi({
                description:
                  'A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.',
              }),
            Currency: z
              .string()
              .regex(/^[A-Z]{3,3}$/)
              .openapi({
                description:
                  'A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".',
              }),
          })
          .openapi({
            description:
              'Amount of money to be confirmed as available funds in the debtor account. Contains an Amount and a Currency.',
            required: ['Amount', 'Currency'],
          }),
        Reference: z
          .string()
          .min(1)
          .max(35)
          .openapi({
            description:
              'Unique reference, as assigned by the CBPII, to unambiguously refer to the request related to the payment transaction.',
          }),
      })
      .openapi({ required: ['ConsentId', 'Reference', 'InstructedAmount'] }),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBFundsConfirmation1')

const OBFundsConfirmationConsent1Schema = z
  .strictObject({
    Data: z
      .object({
        DebtorAccount: z
          .object({
            Identification: z
              .string()
              .min(1)
              .max(256)
              .openapi({
                description:
                  'Identification assigned by an institution to identify an account. This identification is known by the account owner.',
              }),
            Name: z
              .string()
              .min(1)
              .max(350)
              .exactOptional()
              .openapi({
                description:
                  'Name of the account, as assigned by the account servicing institution.\nUsage: The account name is the name or names of the account owner(s) represented at an account level. The account name is not the product name or the nickname of the account.',
              }),
            SchemeName: z
              .string()
              .openapi({
                description:
                  'Name of the identification scheme, in a coded form as published in an external list.',
                'x-namespaced-enum': [
                  'UK.OBIE.BBAN',
                  'UK.OBIE.IBAN',
                  'UK.OBIE.PAN',
                  'UK.OBIE.Paym',
                  'UK.OBIE.SortCodeAccountNumber',
                ],
              }),
            SecondaryIdentification: z
              .string()
              .min(1)
              .max(34)
              .exactOptional()
              .openapi({
                description:
                  'This is secondary identification of the account, as assigned by the account servicing institution. \nThis can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).',
              }),
          })
          .openapi({
            description:
              'Unambiguous identification of the account of the debtor to which a confirmation of funds consent will be applied.',
            required: ['SchemeName', 'Identification'],
          }),
        ExpirationDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Specified date and time the funds confirmation authorisation will expire.\n If this is not populated, the authorisation will be open ended.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
      })
      .openapi({ required: ['DebtorAccount'] }),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBFundsConfirmationConsent1')

const OBFundsConfirmationConsentResponse1Schema = z
  .strictObject({
    Data: z
      .object({
        ConsentId: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            description:
              'Unique identification as assigned to identify the funds confirmation consent resource.',
          }),
        CreationDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        DebtorAccount: z
          .object({
            Identification: z
              .string()
              .min(1)
              .max(256)
              .openapi({
                description:
                  'Identification assigned by an institution to identify an account. This identification is known by the account owner.',
              }),
            Name: z
              .string()
              .min(1)
              .max(350)
              .exactOptional()
              .openapi({
                description:
                  'Name of the account, as assigned by the account servicing institution.\nUsage: The account name is the name or names of the account owner(s) represented at an account level. The account name is not the product name or the nickname of the account.',
              }),
            SchemeName: z
              .string()
              .openapi({
                description:
                  'Name of the identification scheme, in a coded form as published in an external list.',
                'x-namespaced-enum': [
                  'UK.OBIE.BBAN',
                  'UK.OBIE.IBAN',
                  'UK.OBIE.PAN',
                  'UK.OBIE.Paym',
                  'UK.OBIE.SortCodeAccountNumber',
                ],
              }),
            SecondaryIdentification: z
              .string()
              .min(1)
              .max(34)
              .exactOptional()
              .openapi({
                description:
                  'This is secondary identification of the account, as assigned by the account servicing institution. \nThis can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).',
              }),
          })
          .openapi({
            description:
              'Unambiguous identification of the account of the debtor to which a confirmation of funds consent will be applied.',
            required: ['SchemeName', 'Identification'],
          }),
        ExpirationDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Specified date and time the funds confirmation authorisation will expire.\nIf this is not populated, the authorisation will be open ended.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Status: z
          .enum(['Authorised', 'AwaitingAuthorisation', 'Rejected', 'Revoked'])
          .openapi({ description: 'Specifies the status of consent resource in code form.' }),
        StatusUpdateDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
      })
      .openapi({
        required: [
          'ConsentId',
          'CreationDateTime',
          'Status',
          'StatusUpdateDateTime',
          'DebtorAccount',
        ],
      }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBFundsConfirmationConsentResponse1')

const OBFundsConfirmationResponse1Schema = z
  .strictObject({
    Data: z
      .object({
        ConsentId: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            description:
              'Unique identification as assigned by the ASPSP to uniquely identify the funds confirmation consent resource.',
          }),
        CreationDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        FundsAvailable: z
          .boolean()
          .openapi({
            description: 'Flag to indicate the result of a confirmation of funds check.',
          }),
        FundsConfirmationId: z
          .string()
          .min(1)
          .max(40)
          .openapi({
            description:
              'Unique identification as assigned by the ASPSP to uniquely identify the funds confirmation resource.',
          }),
        InstructedAmount: z
          .object({
            Amount: z
              .string()
              .regex(/^\d{1,13}$|^\d{1,13}\.\d{1,5}$/)
              .openapi({
                description:
                  'A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.',
              }),
            Currency: z
              .string()
              .regex(/^[A-Z]{3,3}$/)
              .openapi({
                description:
                  'A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".',
              }),
          })
          .openapi({
            description:
              'Amount of money to be confirmed as available funds in the debtor account. Contains an Amount and a Currency.',
            required: ['Amount', 'Currency'],
          }),
        Reference: z
          .string()
          .min(1)
          .max(35)
          .openapi({
            description:
              'Unique reference, as assigned by the CBPII, to unambiguously refer to the request related to the payment transaction.',
          }),
      })
      .openapi({
        required: [
          'FundsConfirmationId',
          'ConsentId',
          'CreationDateTime',
          'FundsAvailable',
          'Reference',
          'InstructedAmount',
        ],
      }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBFundsConfirmationResponse1')

const _200FundsConfirmationConsentsConsentIdReadResponse = {
  description: 'Funds Confirmation Consent Read',
  content: {
    'application/json; charset=utf-8': { schema: OBFundsConfirmationConsentResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
  }),
}

const _201FundsConfirmationConsentsCreatedResponse = {
  description: 'Funds Confirmation Consent Created',
  content: {
    'application/json; charset=utf-8': { schema: OBFundsConfirmationConsentResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
  }),
}

const _201FundsConfirmationsCreatedResponse = {
  description: 'Funds Confirmation Created',
  content: { 'application/json; charset=utf-8': { schema: OBFundsConfirmationResponse1Schema } },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
  }),
}

const _204FundsConfirmationConsentsConsentIdDeletedResponse = {
  description: 'Funds Confirmation Consent Deleted',
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
  }),
}

const _400ErrorResponse = {
  description: 'Bad request',
  content: { 'application/json; charset=utf-8': { schema: OBErrorResponse1Schema } },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
  }),
}

const _401ErrorResponse = {
  description: 'Unauthorized',
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
  }),
}

const _403ErrorResponse = {
  description: 'Forbidden',
  content: { 'application/json; charset=utf-8': { schema: OBErrorResponse1Schema } },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
  }),
}

const _404ErrorResponse = {
  description: 'Not found',
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
  }),
}

const _405ErrorResponse = {
  description: 'Method Not Allowed',
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
  }),
}

const _406ErrorResponse = {
  description: 'Not Acceptable',
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
  }),
}

const _415ErrorResponse = {
  description: 'Unsupported Media Type',
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
  }),
}

const _429ErrorResponse = {
  description: 'Too Many Requests',
  headers: z.object({
    'Retry-After': {
      description: 'Number in seconds to wait',
      schema: z
        .int()
        .exactOptional()
        .openapi({ description: 'Number in seconds to wait', param: { required: false } }),
    },
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
  }),
}

const _500ErrorResponse = {
  description: 'Internal Server Error',
  content: { 'application/json; charset=utf-8': { schema: OBErrorResponse1Schema } },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
  }),
}

const AuthorizationParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'An Authorisation Token as per https://tools.ietf.org/html/rfc6750',
      in: 'header',
      name: 'Authorization',
      required: true,
      schema: { type: 'string' },
    },
  })

const ConsentIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'ConsentId',
      in: 'path',
      name: 'ConsentId',
      required: true,
      schema: { type: 'string' },
    },
  })

const XCustomerUserAgentParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Indicates the user-agent that the PSU is using.',
      in: 'header',
      name: 'x-customer-user-agent',
      required: false,
      schema: { type: 'string' },
    },
  })

const XFapiAuthDateParamsSchema = z
  .string()
  .regex(
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), \d{2} (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4} \d{2}:\d{2}:\d{2} (GMT|UTC)$/,
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC',
      in: 'header',
      name: 'x-fapi-auth-date',
      required: false,
      schema: {
        pattern:
          '^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), \\d{2} (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \\d{4} \\d{2}:\\d{2}:\\d{2} (GMT|UTC)$',
        type: 'string',
      },
    },
  })

const XFapiCustomerIpAddressParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: "The PSU's IP address if the PSU is currently logged in with the TPP.",
      in: 'header',
      name: 'x-fapi-customer-ip-address',
      required: false,
      schema: { type: 'string' },
    },
  })

const XFapiInteractionIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'An RFC4122 UID used as a correlation id.',
      in: 'header',
      name: 'x-fapi-interaction-id',
      required: false,
      schema: { type: 'string' },
    },
  })

const XIdempotencyKeyParamsSchema = z
  .string()
  .regex(/^(?!\s)(.*)(\S)$/)
  .max(40)
  .openapi({
    param: {
      description:
        'Every request will be processed only once per x-idempotency-key.  The\nIdempotency Key will be valid for 24 hours.\n',
      in: 'header',
      name: 'x-idempotency-key',
      required: true,
      schema: { maxLength: 40, pattern: '^(?!\\s)(.*)(\\S)$', type: 'string' },
    },
  })

const XJwsSignatureParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'A detached JWS signature of the body of the payload.',
      in: 'header',
      name: 'x-jws-signature',
      required: true,
      schema: { type: 'string' },
    },
  })

const PSUOAuth2SecuritySecurityScheme = {
  description:
    'OAuth flow, it is required when the PSU needs to perform SCA with the ASPSP when a TPP wants to access an ASPSP resource owned by the PSU',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://authserver.example/authorization',
      scopes: { fundsconfirmations: 'Funds confirmation entitlement' },
      tokenUrl: 'https://authserver.example/token',
    },
  },
  type: 'oauth2',
}

const TPPOAuth2SecuritySecurityScheme = {
  description: 'TPP client credential authorisation flow with the ASPSP',
  flows: {
    clientCredentials: {
      scopes: { fundsconfirmations: 'Funds confirmation entitlement' },
      tokenUrl: 'https://authserver.example/token',
    },
  },
  type: 'oauth2',
}

export const postFundsConfirmationConsentsRoute = createRoute({
  method: 'post',
  path: '/funds-confirmation-consents',
  tags: ['Funds Confirmations'],
  summary: 'Create Funds Confirmation Consent',
  operationId: 'CreateFundsConfirmationConsents',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
    body: {
      description: 'Default',
      content: { 'application/json': { schema: OBFundsConfirmationConsent1Schema } },
      required: true,
    },
  },
  responses: {
    201: _201FundsConfirmationConsentsCreatedResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    415: _415ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['fundsconfirmations'] }],
})

export const getFundsConfirmationConsentsConsentIdRoute = createRoute({
  method: 'get',
  path: '/funds-confirmation-consents/{ConsentId}',
  tags: ['Funds Confirmations'],
  summary: 'Get Funds Confirmation Consent',
  operationId: 'GetFundsConfirmationConsentsConsentId',
  request: {
    params: z.object({ ConsentId: ConsentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200FundsConfirmationConsentsConsentIdReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['fundsconfirmations'] }],
})

export const deleteFundsConfirmationConsentsConsentIdRoute = createRoute({
  method: 'delete',
  path: '/funds-confirmation-consents/{ConsentId}',
  tags: ['Funds Confirmations'],
  summary: 'Delete Funds Confirmation Consent',
  operationId: 'DeleteFundsConfirmationConsentsConsentId',
  request: {
    params: z.object({ ConsentId: ConsentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    204: _204FundsConfirmationConsentsConsentIdDeletedResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['fundsconfirmations'] }],
})

export const postFundsConfirmationsRoute = createRoute({
  method: 'post',
  path: '/funds-confirmations',
  tags: ['Funds Confirmations'],
  summary: 'Create Funds Confirmation',
  operationId: 'CreateFundsConfirmations',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
    body: {
      description: 'Default',
      content: { 'application/json': { schema: OBFundsConfirmation1Schema } },
      required: true,
    },
  },
  responses: {
    201: _201FundsConfirmationsCreatedResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    415: _415ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['fundsconfirmations'] }],
})
