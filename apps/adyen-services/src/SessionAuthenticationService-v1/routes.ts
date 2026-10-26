import { createRoute, z } from '@hono/zod-openapi'

const ResourceTypeSchema = z
  .enum(['legalEntity', 'accountHolder', 'paymentInstrument'])
  .openapi('ResourceType')

const ResourceSchema = z
  .object({
    type: ResourceTypeSchema.exactOptional().openapi({
      description:
        'The resource type.\n\nPossible values: **accountHolder**, **legalEntity**.\n\nYou must also include the corresponding unique identifier of the resource. For example, the account holder ID.',
    }),
  })
  .openapi({
    discriminator: {
      propertyName: 'type',
      mapping: {
        accountHolder: '#/components/schemas/AccountHolderResource',
        legalEntity: '#/components/schemas/LegalEntityResource',
        paymentInstrument: '#/components/schemas/PaymentInstrumentResource',
      },
    },
    required: [],
  })
  .openapi('Resource')

const AccountHolderResourceSchema = ResourceSchema.and(
  z
    .object({
      accountHolderId: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          description:
            'The unique identifier of the resource connected to the component. For [Platform Experience components](https://docs.adyen.com/platforms/build-user-dashboards), this is the account holder linked to the balance account shown in the component.',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['accountHolderId'] })
  .openapi('AccountHolderResource')

const PolicySchema = z
  .object({
    resources: z
      .array(ResourceSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({
        description:
          'An object containing the type and the unique identifier of the user of the component.\n\nFor [Onboarding components](https://docs.adyen.com/platforms/onboard-users/components), this is the ID of the legal entity that has a contractual relationship with your platform. For sole proprietorships, use the ID of the legal entity of the individual owner.\n\nFor [Platform Experience components](https://docs.adyen.com/platforms/build-user-dashboards), this is the ID of the account holder that is associated with the balance account shown in the component.',
      }),
    roles: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'The name of the role required to use the component.' }),
  })
  .openapi({ required: [] })
  .openapi('Policy')

const ProductTypeSchema = z.enum(['onboarding', 'platform', 'bank']).openapi('ProductType')

const AuthenticationSessionRequestSchema = z
  .object({
    allowOrigin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL where the component will appear. In your live environment, you must protect the URL with an SSL certificate and ensure that it starts with `https://`.\n\nRequired for creating a session for Platform Experience and Onboarding components. Omitting this parameter results in an unusable session token.',
      }),
    policy: PolicySchema.openapi({
      description:
        'An object that contains a description of the allowed resources and roles for the requested session.',
    }),
    product: ProductTypeSchema.openapi({
      description:
        'The type of component.\n\nFor [Onboarding components](https://docs.adyen.com/platforms/onboard-users/components), set this to **onboarding**.\n\nFor [Platform Experience components](https://docs.adyen.com/platforms/build-user-dashboards), set this to **platform**.',
    }),
  })
  .openapi({ required: ['policy', 'product'] })
  .openapi('AuthenticationSessionRequest')

const AuthenticationSessionResponseSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the session.' }),
    token: z.string().exactOptional().openapi({ description: 'The session token created.' }),
  })
  .openapi({ required: [] })
  .openapi('AuthenticationSessionResponse')

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

const LegalEntityResourceSchema = ResourceSchema.and(
  z
    .object({
      legalEntityId: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          description:
            'The unique identifier of the resource connected to the component.\nFor [Onboarding components](https://docs.adyen.com/platforms/onboard-users/components), this is the legal entity that has a contractual relationship with your platform and owns the [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments). For sole proprietorships, this is the legal entity of the individual owner.',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['legalEntityId'] })
  .openapi('LegalEntityResource')

const PaymentInstrumentResourceSchema = ResourceSchema.and(
  z.object({ paymentInstrumentId: z.string().min(1).exactOptional() }).openapi({ required: [] }),
)
  .openapi({ required: ['paymentInstrumentId'] })
  .openapi('PaymentInstrumentResource')

const ApiKeyAuthSecurityScheme = { type: 'apiKey', name: 'X-API-Key', in: 'header' }

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const postSessionsRoute = createRoute({
  method: 'post',
  path: '/sessions',
  tags: ['Session authentication'],
  summary: 'Create a session token',
  description:
    'Creates a session token that is required to integrate [components](https://docs.adyen.com/platforms/components-overview).\n\nThe response contains encrypted session data. The front end then uses the session data to make the required server-side calls for the component.\n\nTo create a token, you must meet specific requirements. These requirements vary depending on the type of component. For more information, see the documentation for [Onboarding](https://docs.adyen.com/platforms/onboard-users/components) and [Platform Experience](https://docs.adyen.com/platforms/build-user-dashboards) components.\n\n',
  operationId: 'post-sessions',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AuthenticationSessionRequestSchema,
          examples: {
            'create-session-onboarding': {
              summary: 'Create a session token for onboarding components',
              description:
                'The request describes a subset of resources and permissions expected from the requested session',
              value: {
                allowOrigin: 'https://www.your-website.com',
                product: 'onboarding',
                policy: {
                  resources: [{ type: 'legalEntity', legalEntityId: 'LE00000000000000000000001' }],
                  roles: ['createTransferInstrumentComponent', 'manageTransferInstrumentComponent'],
                },
              },
            },
            'create-session-platform': {
              summary: 'Create a session token for platform components',
              description:
                'The request describes a subset of resources and permissions expected from the requested session',
              value: {
                allowOrigin: 'https://www.your-website.com',
                product: 'platform',
                policy: {
                  resources: [
                    { type: 'accountHolder', accountHolderId: 'AH00000000000000000000001' },
                  ],
                  roles: [
                    'Transactions Overview Component: View',
                    'Payouts Overview Component: View',
                  ],
                },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: AuthenticationSessionResponseSchema,
          examples: {
            'create-session-onboarding': {
              summary: 'Session token created',
              description: 'Response to be proxied to embedded components',
              value: {
                id: '11a1e60a-18b0-4dda-9258-e0ae29e1e2a3',
                token: 'eyJraWQiOiJwbGF0Zm9ybWNvbGRlciI...',
              },
            },
            'create-session-platform': {
              summary: 'Session token created',
              description: 'Response to be proxied to embedded components',
              value: {
                id: '11a1e60a-18b0-4dda-9258-e0ae29e1e2a3',
                token: 'eyJraWQiOiJwbGF0Zm9ybWNvbGRlciI...',
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'create-session-400': {
              summary: 'Bad request',
              description:
                'Response returned when request parsing has failed or some request fields were invalid.',
              value: {
                type: 'https://docs.adyen.com/errors/bad-request',
                errorCode: '00_400',
                title: 'Bad request',
                detail: 'Unable to map request body',
                requestId: 'c49d45e20aec9a0f20c908343da5ebc3',
                status: 400,
                invalidFields: [{ name: 'product', message: 'Field key/value incorrect' }],
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'create-session-401': {
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
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'create-session-403': {
              summary: 'Forbidden',
              description:
                "Most commonly happens when user does not have sufficient roles or doesn't own requested resource.",
              value: {
                type: 'https://docs.adyen.com/errors/forbidden',
                errorCode: '00_403',
                title: 'Forbidden',
                detail: "User doesn't have access to all token policy resources",
                requestId: 'd42c493b5176df89e51516c6060cc34c',
                status: 403,
              },
            },
          },
        },
      },
    },
  },
})
